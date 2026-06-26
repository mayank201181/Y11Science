import { currentAccount, sanitizeAccount } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const account = await currentAccount();
  if (!account) return Response.json({ account: null });
  return Response.json({ account: sanitizeAccount(account) });
}
