import { randomBytes } from "node:crypto";
import type { Account } from "@/lib/profileTypes";
import { readJson, writeJson, blobConfigured } from "@/lib/server/blob";
import { hashSecret, setSessionCookie, accountKey, sanitizeAccount } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const familyIndexKey = (name: string) =>
  `index/family/${name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-")}.json`;

export async function POST(request: Request) {
  if (!blobConfigured()) {
    return Response.json(
      { error: "Cloud storage is not configured yet. Ask a grown-up to finish setup." },
      { status: 503 },
    );
  }
  const body = await request.json().catch(() => null);
  const familyName = (body?.familyName || "").trim();
  const password = body?.password || "";
  const pin = body?.pin || "";

  if (familyName.length < 2) return Response.json({ error: "Please enter a family name." }, { status: 400 });
  if (password.length < 6)
    return Response.json({ error: "Password must be at least 6 characters." }, { status: 400 });
  if (!/^\d{4,6}$/.test(pin))
    return Response.json({ error: "Parent PIN must be 4–6 digits." }, { status: 400 });

  const idxKey = familyIndexKey(familyName);
  const existing = await readJson<{ accountId: string }>(idxKey);
  if (existing) return Response.json({ error: "That family name is taken." }, { status: 409 });

  const id = randomBytes(9).toString("hex");
  const pw = hashSecret(password);
  const pn = hashSecret(pin);
  const account: Account = {
    id,
    familyName,
    passwordHash: pw.hash,
    passwordSalt: pw.salt,
    pinHash: pn.hash,
    pinSalt: pn.salt,
    createdAt: Date.now(),
    profiles: [],
  };
  await writeJson(accountKey(id), account);
  await writeJson(idxKey, { accountId: id });
  await setSessionCookie(id);
  return Response.json({ account: sanitizeAccount(account) });
}
