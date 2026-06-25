import type { ProgressDoc } from "@/lib/profileTypes";
import { emptyProgress } from "@/lib/profileTypes";
import { readJson } from "@/lib/server/blob";
import { currentAccount, verifySecret } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const progressKey = (accountId: string, profileId: string) =>
  `progress/${accountId}/${profileId}.json`;

export async function POST(request: Request) {
  const account = await currentAccount();
  if (!account) return Response.json({ error: "Not signed in." }, { status: 401 });
  const body = await request.json().catch(() => null);
  const pin = body?.pin || "";
  if (!verifySecret(pin, account.pinHash, account.pinSalt)) {
    return Response.json({ error: "Incorrect PIN." }, { status: 401 });
  }
  const learners = await Promise.all(
    account.profiles.map(async (p) => {
      const doc =
        (await readJson<ProgressDoc>(progressKey(account.id, p.id))) || emptyProgress(p.id);
      return { profile: p, progress: doc };
    }),
  );
  return Response.json({ learners });
}
