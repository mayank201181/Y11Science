"use client";

import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { rankForStars } from "@/lib/gamify";

export function Header() {
  const { activeProfile, progress, dueReviews, logout, selectProfile, account } = useStore();
  const [menu, setMenu] = useState(false);
  const { rank } = rankForStars(progress.stars);
  const due = dueReviews().length;

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-[#0f1226]/80 border-b border-line">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 font-black text-lg shrink-0">
          <span className="text-2xl">🔬</span>
          <span className="hidden sm:inline">Science Lab</span>
        </Link>

        <div className="flex-1" />

        <Link href="/review" className="chip" title="Spaced-repetition review">
          🔁 <span className="hidden sm:inline">Review</span>
          {due > 0 && (
            <span className="ml-1 px-1.5 rounded-full bg-rose-500 text-white text-[0.65rem]">
              {due}
            </span>
          )}
        </Link>

        <div className="chip" title={rank.name}>
          ⭐ <span className="font-bold text-ink">{progress.stars}</span>
        </div>
        <div className="chip" title="Daily streak">
          🔥 <span className="font-bold text-ink">{progress.streak.count}</span>
        </div>

        <div className="relative">
          <button
            onClick={() => setMenu((m) => !m)}
            className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full border border-line bg-bg-soft"
          >
            <span className="text-2xl leading-none">{activeProfile?.avatar}</span>
          </button>
          {menu && (
            <>
              <div className="fixed inset-0 z-30" onClick={() => setMenu(false)} />
              <div className="absolute right-0 mt-2 w-56 card p-2 z-40">
                <div className="px-3 py-2">
                  <div className="font-bold">{activeProfile?.name}</div>
                  <div className="text-xs text-ink-soft">
                    {rank.icon} {rank.name}
                  </div>
                </div>
                <div className="h-px bg-line my-1" />
                {account && account.profiles.length > 1 && (
                  <div className="px-2 py-1">
                    <div className="text-xs text-ink-soft mb-1">Switch learner</div>
                    {account.profiles
                      .filter((p) => p.id !== activeProfile?.id)
                      .map((p) => (
                        <button
                          key={p.id}
                          onClick={() => {
                            selectProfile(p.id);
                            setMenu(false);
                          }}
                          className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-bg-soft flex items-center gap-2"
                        >
                          <span className="text-xl">{p.avatar}</span> {p.name}
                        </button>
                      ))}
                  </div>
                )}
                <Link
                  href="/parent"
                  onClick={() => setMenu(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-bg-soft"
                >
                  👪 Parent dashboard
                </Link>
                <button
                  onClick={logout}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-bg-soft text-rose-300"
                >
                  🚪 Sign out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
