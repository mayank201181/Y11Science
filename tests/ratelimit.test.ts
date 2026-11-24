import test from "node:test";
import assert from "node:assert/strict";
import { register } from "node:module";
import { mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";

const realBlob = new URL("../node_modules/@vercel/blob/dist/index.js", import.meta.url).href;
const fakeBlob = `
import { BlobError, BlobNotFoundError, BlobPreconditionFailedError } from ${JSON.stringify(realBlob)};
export { BlobError, BlobNotFoundError, BlobPreconditionFailedError };
const store = (globalThis.__fakeBlob ??= new Map());
let n = 0;
const tick = () => new Promise((r) => setTimeout(r, Math.random() * 4));
export async function head(key) {
  await tick();
  const b = store.get(key);
  if (!b) throw new BlobNotFoundError();
  return { url: "https://fake.blob/" + key, etag: '"' + b.etag + '"' };
}
export async function get(key, o = {}) {
  await tick();
  if (o.access !== "private") throw new BlobError("expected private access");
  const b = store.get(key);
  if (!b) throw new BlobNotFoundError();
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(new TextEncoder().encode(b.body));
      controller.close();
    },
  });
  return {
    statusCode: 200,
    stream,
    headers: new Headers(),
    blob: { url: "https://fake.blob/" + key, etag: '"' + b.etag + '"', contentType: "application/json", size: b.body.length },
  };
}
export async function put(key, body, o = {}) {
  await tick();
  const cur = store.get(key);
  if (o.ifMatch) {
    if (!cur || '"' + cur.etag + '"' !== o.ifMatch) throw new BlobPreconditionFailedError();
  } else if (o.allowOverwrite !== true && cur) {
    throw new BlobError("This blob already exists, use allowOverwrite: true if you want to overwrite it.");
  }
  store.set(key, { body, etag: ++n, access: o.access });
  return { url: "https://fake.blob/" + key };
}
export async function del(url) {
  await tick();
  store.delete(url.slice("https://fake.blob/".length));
}
`;

const rootHref = new URL("..", import.meta.url).href;
const hooks = `
import { existsSync } from "node:fs";
export async function resolve(spec, ctx, next) {
  if (spec === "server-only") return { url: "data:text/javascript,export{}", shortCircuit: true };
  if (spec === "@vercel/blob" && ctx.parentURL?.includes("?vercel=")) {
    return { url: "data:text/javascript," + encodeURIComponent(${JSON.stringify(fakeBlob)}), shortCircuit: true };
  }
  if (spec.startsWith("@/")) {
    const u = new URL(spec.slice(2) + ".ts", ${JSON.stringify(rootHref)});
    if (existsSync(u)) return { url: u.href, shortCircuit: true };
  }
  if (spec.startsWith(".") && ctx.parentURL?.startsWith("file:") && !/\\.[cm]?[jt]sx?(\\?.*)?$/.test(spec)) {
    const [base, query] = spec.split("?");
    const suffix = query ? "?" + query : "";
    const u = new URL(base + ".ts", ctx.parentURL);
    if (existsSync(u)) return { url: u.href + suffix, shortCircuit: true };
    const idx = new URL(base + "/index.ts", ctx.parentURL);
    if (existsSync(idx)) return { url: idx.href + suffix, shortCircuit: true };
  }
  return next(spec, ctx);
}`;
register("data:text/javascript," + encodeURIComponent(hooks));

process.env.LOCAL_BLOB_DIR = mkdtempSync(path.join(os.tmpdir(), "y11sci-blob-test-"));
process.env.AUTH_SECRET = "test-secret-for-y11science-ratelimit";

const {
  countAttempt,
  countDaily,
  clientId,
  takeAttempt,
  clearAttempts,
  takeDailyAllowance,
  throttle,
  resetThrottleBuckets,
} = await import("../lib/server/ratelimit");
const { storageKey, readJson, writeJson } = await import("../lib/server/blob");

const rule = { max: 5, windowMs: 60 * 60 * 1000, lockMs: 15 * 60 * 1000 };
const T = 1_000_000;

test("countAttempt allows max attempts then locks without counting refused tries", () => {
  let c = null;
  for (let i = 1; i <= 5; i++) {
    c = countAttempt(c, rule, T + i);
    assert.ok(c, `attempt ${i} allowed`);
    assert.equal(c.fails, i);
  }
  assert.equal(c!.until, T + 5 + rule.lockMs);
  assert.equal(countAttempt(c, rule, T + 10), null);
  assert.deepEqual(countAttempt(c, rule, T + 5 + rule.lockMs + 1), {
    fails: 1,
    first: T + 5 + rule.lockMs + 1,
    until: 0,
  });
});

test("countDaily enforces per-day quota and resets on a new day", () => {
  assert.deepEqual(countDaily(null, "2026-11-24", 3), { day: "2026-11-24", count: 1 });
  assert.deepEqual(countDaily({ day: "2026-11-24", count: 2 }, "2026-11-24", 3), {
    day: "2026-11-24",
    count: 3,
  });
  assert.equal(countDaily({ day: "2026-11-24", count: 3 }, "2026-11-24", 3), null);
  assert.deepEqual(countDaily({ day: "2026-11-23", count: 99 }, "2026-11-24", 3), {
    day: "2026-11-24",
    count: 1,
  });
});

test("clientId hashes first forwarded hop and normalises IPv6 to /64", () => {
  const req = (h: Record<string, string>) => new Request("http://x/", { headers: h });
  const a = clientId(req({ "x-forwarded-for": "1.23.4.5, 10.0.0.1" }));
  assert.match(a, /^[0-9a-f]{16}$/);
  assert.equal(a, clientId(req({ "x-forwarded-for": "1.23.4.5" })));
  assert.equal(a, clientId(req({ "x-real-ip": "1.23.4.5" })));
  assert.notEqual(a, clientId(req({ "x-forwarded-for": "12.3.4.5" })));
  assert.equal(
    clientId(req({ "x-forwarded-for": "2001:db8:0:1:aaaa::1" })),
    clientId(req({ "x-forwarded-for": "2001:0db8:0000:0001:bbbb:cccc:dddd:eeee" })),
  );
  assert.notEqual(
    clientId(req({ "x-forwarded-for": "2001:db8:0:1::1" })),
    clientId(req({ "x-forwarded-for": "2001:db8:0:2::1" })),
  );
});

test("throttle blocks requests beyond burst cap per id", () => {
  resetThrottleBuckets();
  for (let i = 0; i < 8; i++) {
    assert.equal(throttle("ai:ip:abc", 8, 60_000), true, `request ${i + 1} allowed`);
  }
  assert.equal(throttle("ai:ip:abc", 8, 60_000), false, "9th request blocked");
  assert.equal(throttle("ai:ip:other", 8, 60_000), true, "other IP still allowed");
});

test("takeAttempt and takeDailyAllowance hold exact caps under parallel bursts", async () => {
  const attempts = await Promise.all(
    Array.from({ length: 20 }, () => takeAttempt("login", "burst-user", rule)),
  );
  assert.equal(attempts.filter((r) => r.wait === 0).length, 5);
  await clearAttempts("login", "burst-user");
  assert.equal((await takeAttempt("login", "burst-user", rule)).wait, 0);

  const daily = await Promise.all(
    Array.from({ length: 12 }, () => takeDailyAllowance("guest-burst", 7)),
  );
  assert.equal(daily.filter(Boolean).length, 7);
  assert.equal(await takeDailyAllowance("guest-burst", 7), false);
  assert.equal(await takeDailyAllowance("guest-other", 7), true);
});

test("blob storageKey HMAC-prefixes sensitive keys and falls back to legacy unprefixed reads", async () => {
  const sk = storageKey("progress/acc1/prof1.json");
  assert.match(sk, /^progress\/[0-9a-f]{24}-acc1\/prof1\.json$/);
  assert.equal(storageKey("accounts/acc1.json"), "accounts/acc1.json");

  await writeJson("progress/acc1/prof1.json", { stars: 42 });
  assert.deepEqual(await readJson("progress/acc1/prof1.json"), { stars: 42 });

  // Simulate a legacy unprefixed blob file written prior to HMAC prefixing
  const { promises: fs } = await import("node:fs");
  const legacyPath = path.join(process.env.LOCAL_BLOB_DIR as string, "secrets", "legacy-acc.json");
  await fs.mkdir(path.dirname(legacyPath), { recursive: true });
  await fs.writeFile(legacyPath, JSON.stringify({ pinHash: "legacy-hash" }));
  assert.deepEqual(await readJson("secrets/legacy-acc.json"), { pinHash: "legacy-hash" });
});

test("Vercel Blob mode: conditional ETag writes and BLOB_ACCESS=private work concurrently", async () => {
  const realFetch = globalThis.fetch;
  const store = () =>
    (globalThis as unknown as { __fakeBlob: Map<string, { body: string }> }).__fakeBlob;
  globalThis.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
    const u = String(url);
    if (!u.startsWith("https://fake.blob/")) return realFetch(url, init);
    const b = store()?.get(u.slice("https://fake.blob/".length).split("?")[0]);
    return b ? new Response(b.body) : new Response("", { status: 404 });
  }) as typeof fetch;

  const prevLocal = process.env.LOCAL_BLOB_DIR;
  const prevAccess = process.env.BLOB_ACCESS;
  delete process.env.LOCAL_BLOB_DIR;
  try {
    const spec = "../lib/server/blob?vercel=";
    const a = (await import(spec + "a")) as typeof import("../lib/server/blob");
    const b = (await import(spec + "b")) as typeof import("../lib/server/blob");
    assert.equal(await a.readJson("accounts/missing.json"), null);
    assert.equal(await a.createJson("index/family/rawat.json", { id: "a" }), true);
    assert.equal(await b.createJson("index/family/rawat.json", { id: "b" }), false);

    const results = await Promise.all(
      Array.from({ length: 10 }, (_, i) =>
        (i % 2 ? a : b).updateJson<number>("ratelimit/daily-test.json", (c) => (c ?? 0) + 1),
      ),
    );
    assert.ok(results.every((r) => r.changed));
    assert.equal(await b.readJson("ratelimit/daily-test.json"), 10);

    // Private access mode uses get(..., { access: "private", useCache: false })
    process.env.BLOB_ACCESS = "private";
    await a.writeJson("secrets/priv.json", { ok: true });
    assert.deepEqual(await b.readJson("secrets/priv.json"), { ok: true });
  } finally {
    globalThis.fetch = realFetch;
    process.env.LOCAL_BLOB_DIR = prevLocal;
    if (prevAccess === undefined) delete process.env.BLOB_ACCESS;
    else process.env.BLOB_ACCESS = prevAccess;
  }
});
