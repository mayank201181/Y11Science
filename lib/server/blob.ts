import { put, head, del } from "@vercel/blob";

// Vercel Blob used as a simple JSON key-value store. We disable caching so
// read-after-write is consistent.

export async function writeJson(key: string, value: unknown): Promise<void> {
  await put(key, JSON.stringify(value), {
    access: "public",
    contentType: "application/json",
    cacheControlMaxAge: 0,
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

export async function readJson<T>(key: string): Promise<T | null> {
  try {
    const info = await head(key);
    if (!info?.url) return null;
    const res = await fetch(`${info.url}?t=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function deleteJson(key: string): Promise<void> {
  try {
    const info = await head(key);
    if (info?.url) await del(info.url);
  } catch {
    // ignore — already gone
  }
}

export function blobConfigured(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}
