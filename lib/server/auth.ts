import { scryptSync, randomBytes, timingSafeEqual, createHmac } from "node:crypto";
import { cookies } from "next/headers";
import type { Account } from "../profileTypes";
import { readJson } from "./blob";

const COOKIE = "y11sci_session";
const SECRET = () => process.env.AUTH_SECRET || "dev-insecure-secret-change-me";

// ---- password / pin hashing (scrypt) ----
export function hashSecret(secret: string): { hash: string; salt: string } {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(secret, salt, 64).toString("hex");
  return { hash, salt };
}

export function verifySecret(secret: string, hash: string, salt: string): boolean {
  try {
    const got = scryptSync(secret, salt, 64);
    const want = Buffer.from(hash, "hex");
    return got.length === want.length && timingSafeEqual(got, want);
  } catch {
    return false;
  }
}

// ---- signed session token ----
export function signToken(accountId: string): string {
  const payload = `${accountId}.${Date.now()}`;
  const sig = createHmac("sha256", SECRET()).update(payload).digest("hex");
  return `${Buffer.from(payload).toString("base64url")}.${sig}`;
}

export function verifyToken(token: string | undefined): string | null {
  if (!token) return null;
  const [b64, sig] = token.split(".");
  if (!b64 || !sig) return null;
  let payload: string;
  try {
    payload = Buffer.from(b64, "base64url").toString();
  } catch {
    return null;
  }
  const expected = createHmac("sha256", SECRET()).update(payload).digest("hex");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  return payload.split(".")[0] || null;
}

// ---- cookie helpers ----
export async function setSessionCookie(accountId: string): Promise<void> {
  const store = await cookies();
  store.set(COOKIE, signToken(accountId), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 180, // 180 days
  });
}

export async function clearSessionCookie(): Promise<void> {
  const store = await cookies();
  store.delete(COOKIE);
}

export async function currentAccountId(): Promise<string | null> {
  const store = await cookies();
  return verifyToken(store.get(COOKIE)?.value);
}

export const accountKey = (id: string) => `accounts/${id}.json`;

export async function currentAccount(): Promise<Account | null> {
  const id = await currentAccountId();
  if (!id) return null;
  return readJson<Account>(accountKey(id));
}

/** Account stripped of secrets, safe to send to the client. */
export function sanitizeAccount(a: Account) {
  return {
    id: a.id,
    familyName: a.familyName,
    createdAt: a.createdAt,
    profiles: a.profiles,
  };
}
