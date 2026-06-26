import type { ProgressDoc } from "@/lib/profileTypes";
import { emptyProgress } from "@/lib/profileTypes";
import { readJson, writeJson } from "@/lib/server/blob";
import { currentAccount } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const progressKey = (accountId: string, profileId: string) =>
  `progress/${accountId}/${profileId}.json`;

export async function GET(request: Request) {
  const account = await currentAccount();
  if (!account) return Response.json({ error: "Not signed in." }, { status: 401 });
  const url = new URL(request.url);
  const profileId = url.searchParams.get("profileId") || "";
  if (!account.profiles.some((p) => p.id === profileId))
    return Response.json({ error: "Unknown profile." }, { status: 404 });
  const doc = await readJson<ProgressDoc>(progressKey(account.id, profileId));
  return Response.json(doc || emptyProgress(profileId));
}

export async function POST(request: Request) {
  const account = await currentAccount();
  if (!account) return Response.json({ error: "Not signed in." }, { status: 401 });
  const body = (await request.json().catch(() => null)) as ProgressDoc | null;
  if (!body?.profileId) return Response.json({ error: "Bad payload." }, { status: 400 });
  if (!account.profiles.some((p) => p.id === body.profileId))
    return Response.json({ error: "Unknown profile." }, { status: 404 });

  // last-write-wins, but never overwrite a newer server doc with a stale one
  const existing = await readJson<ProgressDoc>(progressKey(account.id, body.profileId));
  if (existing && existing.updatedAt > body.updatedAt) {
    return Response.json(existing);
  }
  await writeJson(progressKey(account.id, body.profileId), body);
  return Response.json(body);
}
