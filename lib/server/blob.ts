import "server-only";
import { createHmac } from "node:crypto";
import {
  put,
  head,
  get,
  del,
  BlobNotFoundError,
  BlobPreconditionFailedError,
} from "@vercel/blob";
import { promises as fs } from "node:fs";
import path from "node:path";

// JSON key-value store on Vercel Blob.
// Supports conditional ETag read-modify-write (updateJson), create-only writes
// (createJson), optional BLOB_ACCESS=private, non-predictable HMAC-prefixed
// keys for sensitive prefixes (secrets/, progress/, ratelimit/) with transparent
// read fallback to legacy unprefixed keys, and LOCAL_BLOB_DIR for non-prod tests.

const SENSITIVE_PREFIXES = ["secrets/", "progress/", "ratelimit/"];

function localDir(): string | undefined {
  return process.env.NODE_ENV !== "production" ? process.env.LOCAL_BLOB_DIR : undefined;
}

function blobAccess(): "public" | "private" {
  return process.env.BLOB_ACCESS === "private" ? "private" : "public";
}

function putOptions() {
  return {
    access: blobAccess(),
    addRandomSuffix: false,
    cacheControlMaxAge: 0,
    contentType: "application/json",
  } as const;
}

function keySecret(): string | null {
  return (
    process.env.BLOB_KEY_SECRET ||
    process.env.AUTH_SECRET ||
    process.env.BLOB_READ_WRITE_TOKEN ||
    null
  );
}

/**
 * Derive a non-predictable HMAC-prefixed storage path for sensitive prefixes
 * (`secrets/`, `progress/`, `ratelimit/`). Returns the original key unchanged
 * for non-sensitive prefixes or if no key secret is configured.
 */
export function storageKey(key: string): string {
  const isSensitive = SENSITIVE_PREFIXES.some((p) => key.startsWith(p));
  if (!isSensitive) return key;
  const secret = keySecret();
  if (!secret) return key;
  const tag = createHmac("sha256", secret).update(`blobkey:${key}`).digest("hex").slice(0, 24);
  const slash = key.indexOf("/");
  return `${key.slice(0, slash + 1)}${tag}-${key.slice(slash + 1)}`;
}

function localPath(rawKey: string): string {
  const dir = localDir() as string;
  const safe = rawKey.replace(/\.\.+/g, "").replace(/^\/+/, "");
  return path.join(dir, safe);
}

export function blobConfigured(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN) || Boolean(localDir());
}

// Match the library's error classes directly as well as fallback message patterns.
function isNotFound(e: unknown): boolean {
  if (e instanceof BlobNotFoundError) return true;
  if (e && typeof e === "object" && "name" in e && (e as { name: string }).name === "BlobNotFoundError") {
    return true;
  }
  return e instanceof Error && /not.?found|requested blob does not exist/i.test(e.message);
}

function isAlreadyExists(e: unknown): boolean {
  return e instanceof Error && /already exists/i.test(e.message);
}

function isWriteConflict(e: unknown): boolean {
  return (
    e instanceof BlobPreconditionFailedError ||
    isNotFound(e) ||
    isAlreadyExists(e) ||
    (e instanceof Error && /precondition/i.test(e.message))
  );
}

interface Tagged<T> {
  value: T | null;
  found: boolean;
  /** True when found at the primary storageKey (false if only found at a legacy unprefixed key). */
  foundPrimary: boolean;
  /** The ETag the value was read at (Blob only, primary key only). */
  etag?: string;
}

const MISSING: Tagged<never> = { value: null, found: false, foundPrimary: false };

async function readRawTagged<T>(rawKey: string): Promise<{ value: T | null; found: boolean; etag?: string }> {
  if (localDir()) {
    try {
      return { value: JSON.parse(await fs.readFile(localPath(rawKey), "utf8")) as T, found: true };
    } catch (e) {
      if ((e as NodeJS.ErrnoException).code === "ENOENT") return { value: null, found: false };
      throw e;
    }
  }

  if (blobAccess() === "private") {
    let res: Awaited<ReturnType<typeof get>>;
    try {
      res = await get(rawKey, { access: "private", useCache: false });
    } catch (e) {
      if (isNotFound(e)) return { value: null, found: false };
      throw e;
    }
    if (!res || res.statusCode !== 200 || !res.stream) return { value: null, found: false };
    const text = await new Response(res.stream).text();
    return { value: JSON.parse(text) as T, found: true, etag: res.blob.etag };
  }

  let meta: { url: string; etag: string };
  try {
    meta = await head(rawKey);
  } catch (e) {
    if (isNotFound(e)) return { value: null, found: false };
    throw e;
  }
  const res = await fetch(`${meta.url}?t=${Date.now()}`, { cache: "no-store" });
  if (res.status === 404) return { value: null, found: false };
  if (!res.ok) throw new Error(`Blob read failed (${res.status})`);
  return { value: (await res.json()) as T, found: true, etag: meta.etag };
}

async function readTagged<T>(key: string): Promise<Tagged<T>> {
  const sk = storageKey(key);
  const primary = await readRawTagged<T>(sk);
  if (primary.found) {
    return { value: primary.value, found: true, foundPrimary: true, etag: primary.etag };
  }
  if (sk !== key) {
    // Transparent fallback to legacy unprefixed key so existing data remains readable.
    const legacy = await readRawTagged<T>(key);
    if (legacy.found) {
      return { value: legacy.value, found: true, foundPrimary: false };
    }
  }
  return MISSING;
}

export async function readJson<T>(key: string): Promise<T | null> {
  return (await readTagged<T>(key)).value;
}

async function writeLocal(rawKey: string, data: string, create = false): Promise<void> {
  const p = localPath(rawKey);
  await fs.mkdir(path.dirname(p), { recursive: true });
  const tmp = `${p}.${process.pid}.${Math.random().toString(36).slice(2)}.tmp`;
  await fs.writeFile(tmp, data);
  try {
    if (create) await fs.link(tmp, p);
    else await fs.rename(tmp, p);
  } finally {
    await fs.rm(tmp, { force: true });
  }
}

export async function writeJson(key: string, value: unknown): Promise<void> {
  const sk = storageKey(key);
  if (localDir()) return writeLocal(sk, JSON.stringify(value));
  await put(sk, JSON.stringify(value), { ...putOptions(), allowOverwrite: true });
}

/** Create `key` only if it doesn't exist yet. False when it already does. */
export async function createJson(key: string, value: unknown): Promise<boolean> {
  const sk = storageKey(key);
  if (sk !== key) {
    const legacy = await readRawTagged(key).catch(() => ({ found: false }));
    if (legacy.found) return false;
  }
  try {
    if (localDir()) await writeLocal(sk, JSON.stringify(value), true);
    else await put(sk, JSON.stringify(value), { ...putOptions(), allowOverwrite: false });
    return true;
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === "EEXIST" || (!localDir() && isAlreadyExists(e))) {
      return false;
    }
    if (!localDir() && (await readRawTagged(sk).catch(() => ({ found: false }))).found) {
      return false;
    }
    throw e;
  }
}

// Serialize read-modify-write cycles on a given key within this instance.
const queues = new Map<string, Promise<void>>();
function withKeyLock<R>(key: string, task: () => Promise<R>): Promise<R> {
  const run = (queues.get(key) ?? Promise.resolve()).then(task);
  const done = run.then(
    () => {},
    () => {},
  );
  queues.set(key, done);
  void done.then(() => {
    if (queues.get(key) === done) queues.delete(key);
  });
  return run;
}

const UPDATE_TRIES = 6;

/**
 * Atomic conditional read-modify-write for a JSON document.
 * Across serverless instances, writes are conditional on the ETag read (or create-only
 * when missing), retrying on conflicts so concurrent increments are never lost.
 */
export async function updateJson<T>(
  key: string,
  mutate: (current: T | null) => T | null,
): Promise<{ value: T | null; changed: boolean }> {
  const sk = storageKey(key);
  return withKeyLock(sk, async () => {
    for (let attempt = 1; attempt <= UPDATE_TRIES; attempt++) {
      const { value, foundPrimary, etag } = await readTagged<T>(key);
      const next = mutate(value);
      if (next === null) return { value, changed: false };
      try {
        if (localDir()) {
          await writeLocal(sk, JSON.stringify(next));
        } else {
          await put(sk, JSON.stringify(next), {
            ...putOptions(),
            ...(!foundPrimary
              ? { allowOverwrite: false }
              : etag
                ? { ifMatch: etag }
                : { allowOverwrite: true }),
          });
        }
        return { value: next, changed: true };
      } catch (e) {
        if (localDir()) throw e;
        const clash =
          isWriteConflict(e) ||
          (!foundPrimary && (await readRawTagged(sk).catch(() => ({ found: false }))).found);
        if (!clash) throw e;
        await new Promise((r) => setTimeout(r, 25 * attempt + Math.random() * 75));
      }
    }
    throw new Error(`Blob update kept clashing: ${key}`);
  });
}

async function deleteRaw(rawKey: string): Promise<void> {
  if (localDir()) {
    await fs.rm(localPath(rawKey), { force: true });
    return;
  }
  try {
    const meta = await head(rawKey);
    await del(meta.url);
  } catch {
    /* already gone */
  }
}

export async function deleteJson(key: string): Promise<void> {
  const sk = storageKey(key);
  await withKeyLock(sk, async () => {
    await deleteRaw(sk);
    if (sk !== key) {
      await deleteRaw(key);
    }
  });
}
