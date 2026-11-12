"use client";

import Link from "next/link";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { rankForStars } from "@/lib/gamify";

export function Header() {
  const { activeProfile, progress, dueReviews, logout, selectProfile, account, theme, toggleTheme } =
    useStore();
  const [menu, setMenu] = useState(false);
  const { rank } = rankForStars(progress.stars);
  const due = dueReviews().length;

  return (
    <header
      className="sticky top-0 z-30 backdrop-blur-md border-b border-line print:hidden"
      style={{ background: "var(--header-bg)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-2 sm:gap-3">
        <Link href="/" className="flex items-center gap-2 font-black text-lg shrink-0">
          <span className="text-2xl">🔬</span>
          <span className="hidden sm:inline">Y11 Science Lab</span>
        </Link>

        <div className="flex-1" />

        <a
          href="/masterclass/index.html"
          className="chip hidden md:inline-flex"
          title="37 Studio Masterclass Whiteboard Lessons"
        >
          🎓 <span>Masterclasses</span>
        </a>

        <a
          href="/season1/index.html"
          className="chip hidden md:inline-flex"
          title="37 Cartoon Sitcom Episodes"
        >
          🍿 <span>Sitcom TV</span>
        </a>

        <Link href="/progress" className="chip" title="Topic completion matrix & certificates">
          📊 <span className="hidden sm:inline">Progress</span>
        </Link>

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
        <div className="chip hidden xs:inline-flex sm:inline-flex" title="Daily streak">
          🔥 <span className="font-bold text-ink">{progress.streak.count}</span>
        </div>

        <button
          onClick={toggleTheme}
          className="chip"
          title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        >
          {theme === "light" ? "🌙" : "☀️"}
          <span className="hidden lg:inline">{theme === "light" ? "Dark" : "Light"}</span>
        </button>

        <div className="relative">
          <button
            onClick={() => setMenu((m) => !m)}
            className="flex items-center gap-2 pl-1.5 pr-2 py-1 rounded-full border border-line bg-bg-soft"
          >
            <span className="text-2xl leading-none">{activeProfile?.avatar || "👩‍🔬"}</span>
          </button>
          {menu && (
            <>
              <div className="fixed inset-0 z-30" onClick={() => setMenu(false)} />
              <div className="absolute right-0 mt-2 w-60 card p-2 z-40">
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
                  href="/progress"
                  onClick={() => setMenu(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-bg-soft text-sm font-semibold"
                >
                  📊 Progress &amp; Certificates
                </Link>
                <a
                  href="/masterclass/index.html"
                  onClick={() => setMenu(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-bg-soft text-sm font-semibold"
                >
                  🎓 Studio Masterclass Hub
                </a>
                <a
                  href="/season1/index.html"
                  onClick={() => setMenu(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-bg-soft text-sm font-semibold"
                >
                  🍿 Cartoon Sitcom Hub
                </a>
                <Link
                  href="/parent"
                  onClick={() => setMenu(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-bg-soft text-sm font-semibold"
                >
                  👪 Parent dashboard
                </Link>
                <button
                  onClick={() => {
                    toggleTheme();
                    setMenu(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-bg-soft text-sm font-semibold"
                >
                  {theme === "light" ? "🌙 Switch to Dark theme" : "☀️ Switch to Light theme"}
                </button>
                <div className="h-px bg-line my-1" />
                <button
                  onClick={logout}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-bg-soft tone-rose text-sm font-semibold"
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
