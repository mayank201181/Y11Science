import { randomBytes } from "node:crypto";
import type { Account, Profile } from "@/lib/profileTypes";
import { writeJson, deleteJson } from "@/lib/server/blob";
import { currentAccount, accountKey, sanitizeAccount } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const progressKey = (accountId: string, profileId: string) =>
  `progress/${accountId}/${profileId}.json`;

async function save(account: Account) {
  await writeJson(accountKey(account.id), account);
  return Response.json({ account: sanitizeAccount(account) });
}

export async function POST(request: Request) {
  const account = await currentAccount();
  if (!account) return Response.json({ error: "Not signed in." }, { status: 401 });
  const body = await request.json().catch(() => null);
  const name = (body?.name || "").trim();
  const avatar = body?.avatar || "🧒";
  if (name.length < 1) return Response.json({ error: "Name required." }, { status: 400 });
  if (account.profiles.length >= 8)
    return Response.json({ error: "Maximum learners reached." }, { status: 400 });
  const profile: Profile = { id: randomBytes(6).toString("hex"), name, avatar, createdAt: Date.now() };
  account.profiles.push(profile);
  return save(account);
}

export async function PATCH(request: Request) {
  const account = await currentAccount();
  if (!account) return Response.json({ error: "Not signed in." }, { status: 401 });
  const body = await request.json().catch(() => null);
  const id = body?.id;
  const prof = account.profiles.find((p) => p.id === id);
  if (!prof) return Response.json({ error: "Profile not found." }, { status: 404 });
  if (typeof body?.name === "string" && body.name.trim()) prof.name = body.name.trim();
  if (typeof body?.avatar === "string") prof.avatar = body.avatar;
  return save(account);
}

export async function DELETE(request: Request) {
  const account = await currentAccount();
  if (!account) return Response.json({ error: "Not signed in." }, { status: 401 });
  const body = await request.json().catch(() => null);
  const id = body?.id;
  if (!account.profiles.some((p) => p.id === id))
    return Response.json({ error: "Profile not found." }, { status: 404 });
  account.profiles = account.profiles.filter((p) => p.id !== id);
  await deleteJson(progressKey(account.id, id));
  return save(account);
}
