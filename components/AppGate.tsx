"use client";

import { useStore } from "@/lib/store";
import { AuthGate } from "./AuthGate";
import { ProfilePicker } from "./ProfilePicker";
import { Header } from "./Header";
import { Mascot } from "./Mascot";

export function AppGate({ children }: { children: React.ReactNode }) {
  const { status } = useStore();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-6">
        <div className="text-5xl animate-floaty">🔬</div>
        <div className="text-ink-soft">Warming up the lab…</div>
      </div>
    );
  }

  if (status === "anon") return <AuthGate />;
  if (status === "no-profile") return <ProfilePicker />;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 pb-28">{children}</main>
      <Mascot />
    </div>
  );
}
