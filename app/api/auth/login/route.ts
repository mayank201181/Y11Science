import type { Account } from "@/lib/profileTypes";
import { readJson, blobConfigured } from "@/lib/server/blob";
import { verifySecret, setSessionCookie, accountKey, sanitizeAccount } from "@/lib/server/auth";

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

  const idx = await readJson<{ accountId: string }>(familyIndexKey(familyName));
  if (!idx) return Response.json({ error: "No family found with that name." }, { status: 404 });

  const account = await readJson<Account>(accountKey(idx.accountId));
  if (!account) return Response.json({ error: "Account not found." }, { status: 404 });

  if (!verifySecret(password, account.passwordHash, account.passwordSalt)) {
    return Response.json({ error: "Wrong password." }, { status: 401 });
  }
  await setSessionCookie(account.id);
  return Response.json({ account: sanitizeAccount(account) });
}
