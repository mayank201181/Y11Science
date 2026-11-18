"use client";

import { useStore } from "@/lib/store";
import { AuthGate } from "./AuthGate";
import { ProfilePicker } from "./ProfilePicker";
import { Header, BottomNav } from "./Header";
import { Mascot } from "./Mascot";

export function AppGate({ children }: { children: React.ReactNode }) {
  const { authModalOpen, profileModalOpen } = useStore();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 pb-28">{children}</main>
      <Mascot />
      <BottomNav />
      {authModalOpen && <AuthGate />}
      {profileModalOpen && <ProfilePicker />}
    </div>
  );
}
