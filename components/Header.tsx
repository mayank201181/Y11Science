"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { rankForStars } from "@/lib/gamify";

const GUEST_AVATARS = ["👩‍🔬", "🧑‍🔬", "🦉", "🦊", "🚀", "🌟", "🧬", "⚗️"];

const BOTTOM_NAV = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/topics", label: "Topics", icon: "📚" },
  { href: "/watch", label: "Watch", icon: "🎬" },
  { href: "/episodes", label: "Sitcom", icon: "🍿" },
  { href: "/review", label: "Review", icon: "🔁" },
  { href: "/exams", label: "Exams", icon: "📝" },
  { href: "/progress", label: "Progress", icon: "📈" },
] as const;

function isBottomActive(path: string, href: string): boolean {
  if (href === "/") return path === "/";
  if (href === "/topics") {
    return path.startsWith("/topics") || path.startsWith("/subject/") || path.startsWith("/topic/");
  }
  if (href === "/exams") {
    return path.startsWith("/exams") || path.startsWith("/exam/");
  }
  if (href === "/progress") {
    return path.startsWith("/progress") || path.startsWith("/certificate/");
  }
  return path.startsWith(href);
}

export function Header() {
  const {
    activeProfile,
    progress,
    dueReviews,
    logout,
    selectProfile,
    account,
    guest,
    theme,
    toggleTheme,
    openAuthModal,
    openProfileModal,
    updateGuestProfile,
  } = useStore();
  const path = usePathname() || "/";
  const [menu, setMenu] = useState(false);
  const [editingGuest, setEditingGuest] = useState(false);
  const [draftName, setDraftName] = useState("");
  const [draftAvatar, setDraftAvatar] = useState("👩‍🔬");
  const { rank } = rankForStars(progress.stars);
  const due = dueReviews().length;

  function startEditGuest() {
    setDraftName(activeProfile?.name || "Vanishree");
    setDraftAvatar(activeProfile?.avatar || "👩‍🔬");
    setEditingGuest(true);
  }

  function saveEditGuest(e: React.FormEvent) {
    e.preventDefault();
    updateGuestProfile(draftName, draftAvatar);
    setEditingGuest(false);
    setMenu(false);
  }

  return (
    <header
      className="sticky top-0 z-30 backdrop-blur-md border-b border-line print:hidden"
      style={{ background: "var(--header-bg)" }}
    >
      <div className="max-w-5xl mx-auto px-3 sm:px-6 h-15 flex items-center gap-1.5 sm:gap-2.5">
        <Link href="/" className="flex items-center gap-2 font-black text-base sm:text-lg shrink-0">
          <span className="text-2xl" aria-hidden>
            🔬
          </span>
          <span className="hidden md:inline">Y11 Science Lab</span>
          <span className="md:hidden text-sm font-extrabold">Y11 Sci</span>
        </Link>

        <div className="flex-1" />

        {/* Prominent Watch & Sitcom links on BOTH narrow & wide viewports */}
        <Link
          href="/watch"
          className={`chip ${path.startsWith("/watch") ? "border-indigo-500 text-ink" : ""}`}
          title="37 Studio Masterclass Lessons & Video Hub"
        >
          🎬 <span className="hidden sm:inline">Watch</span>
        </Link>

        <Link
          href="/episodes"
          className={`chip ${path.startsWith("/episodes") ? "border-indigo-500 text-ink" : ""}`}
          title="37 Sitcom Episodes & Body Corporate Comedy Hub"
        >
          🍿 <span className="hidden sm:inline">Sitcom</span>
        </Link>

        <Link
          href="/pitfalls"
          className={`chip hidden md:inline-flex ${path.startsWith("/pitfalls") ? "border-indigo-500 text-ink" : ""}`}
          title="Edexcel 4BI1 / 4CH1 / 4PH1 Marks-Saver & Examiner Pitfalls Vault"
        >
          🛡️ <span>Marks-Savers</span>
        </Link>

        <Link href="/progress" className="chip" title={`${rank.name} · ${progress.stars} stars`}>
          ⭐ <span className="font-bold text-ink tabular-nums">{progress.stars}</span>
        </Link>

        <div className="chip hidden sm:inline-flex" title="Daily streak">
          🔥 <span className="font-bold text-ink tabular-nums">{progress.streak.count}</span>
        </div>

        <button
          type="button"
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
            type="button"
            onClick={() => {
              setEditingGuest(false);
              setMenu((m) => !m);
            }}
            className="flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 rounded-full border border-line bg-bg-soft hover:border-indigo-500 transition"
            aria-expanded={menu}
            aria-haspopup="menu"
            title={activeProfile?.name || "Vanishree"}
          >
            <span className="text-xl leading-none">{activeProfile?.avatar || "👩‍🔬"}</span>
            <span className="hidden sm:inline max-w-[6.5rem] truncate text-xs font-extrabold">
              {activeProfile?.name || "Vanishree"}
            </span>
          </button>

          {menu && (
            <>
              <div className="fixed inset-0 z-30" onClick={() => setMenu(false)} />
              <div className="absolute right-0 mt-2 w-68 card p-2.5 z-40">
                <div className="px-3 py-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-bold truncate">{activeProfile?.name || "Vanishree"}</div>
                    {guest && (
                      <button
                        type="button"
                        onClick={startEditGuest}
                        className="text-xs tone-indigo underline shrink-0"
                      >
                        Edit
                      </button>
                    )}
                  </div>
                  <div className="text-xs text-ink-soft mt-0.5">
                    {rank.icon} {rank.name} ·{" "}
                    {guest ? "Saved automatically on this device" : `${account?.familyName} Cloud`}
                  </div>
                </div>

                {editingGuest && guest && (
                  <form onSubmit={saveEditGuest} className="p-2.5 rounded-xl bg-bg-soft border border-line mb-2 space-y-2">
                    <label className="text-xs font-bold text-ink-soft block">Learner name</label>
                    <input
                      className="input text-sm py-1.5"
                      value={draftName}
                      onChange={(e) => setDraftName(e.target.value)}
                      placeholder="Vanishree"
                    />
                    <div className="flex flex-wrap gap-1">
                      {GUEST_AVATARS.map((av) => (
                        <button
                          key={av}
                          type="button"
                          onClick={() => setDraftAvatar(av)}
                          className={`text-xl p-1 rounded-lg border ${
                            draftAvatar === av ? "border-indigo-500 bg-indigo-500/15" : "border-line"
                          }`}
                        >
                          {av}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-1.5">
                      <button type="submit" className="btn btn-primary text-xs py-1.5 px-3 flex-1">
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingGuest(false)}
                        className="btn btn-ghost text-xs py-1.5 px-2.5"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}

                <div className="h-px bg-line my-1" />

                <Link
                  href="/pitfalls"
                  onClick={() => setMenu(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-bg-soft text-sm font-bold tone-emerald"
                >
                  🛡️ Edexcel Marks-Saver &amp; Pitfalls
                </Link>
                <Link
                  href="/formulas"
                  onClick={() => setMenu(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-bg-soft text-sm font-semibold"
                >
                  📐 Equations, Units &amp; Tests Sheet
                </Link>
                <Link
                  href="/watch"
                  onClick={() => setMenu(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-bg-soft text-sm font-semibold"
                >
                  🎬 Watch &amp; Masterclass Hub (37)
                </Link>
                <Link
                  href="/episodes"
                  onClick={() => setMenu(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-bg-soft text-sm font-semibold"
                >
                  🍿 Sitcom TV &amp; Body Corporate (37)
                </Link>
                <a
                  href="/masterclass/index.html"
                  onClick={() => setMenu(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-bg-soft text-xs text-ink-soft font-semibold"
                >
                  ↗ Standalone Masterclass Studio
                </a>
                <a
                  href="/season1/index.html"
                  onClick={() => setMenu(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-bg-soft text-xs text-ink-soft font-semibold"
                >
                  ↗ Standalone Sitcom Broadcast Player
                </a>
                <Link
                  href="/progress"
                  onClick={() => setMenu(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-bg-soft text-sm font-semibold"
                >
                  📊 Progress &amp; Certificates
                </Link>
                <Link
                  href="/review"
                  onClick={() => setMenu(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-bg-soft text-sm font-semibold"
                >
                  🔁 Spaced Review {due > 0 ? `(${due} due)` : ""}
                </Link>
                <Link
                  href="/parent"
                  onClick={() => setMenu(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-bg-soft text-sm font-semibold"
                >
                  👪 Parent dashboard
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    toggleTheme();
                    setMenu(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-bg-soft text-sm font-semibold"
                >
                  {theme === "light" ? "🌙 Switch to Dark theme" : "☀️ Switch to Light theme"}
                </button>

                <div className="h-px bg-line my-1" />

                {!guest && account ? (
                  <>
                    {account.profiles.length > 1 && (
                      <div className="px-2 py-1">
                        <div className="text-xs text-ink-soft mb-1">Switch learner</div>
                        {account.profiles
                          .filter((p) => p.id !== activeProfile?.id)
                          .map((p) => (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => {
                                selectProfile(p.id);
                                setMenu(false);
                              }}
                              className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-bg-soft flex items-center gap-2 text-sm"
                            >
                              <span className="text-lg">{p.avatar}</span> {p.name}
                            </button>
                          ))}
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setMenu(false);
                        openProfileModal();
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-bg-soft text-xs text-ink-soft font-semibold"
                    >
                      👥 Manage cloud learners
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setMenu(false);
                        void logout();
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-bg-soft tone-rose text-xs font-semibold"
                    >
                      🚪 Sign out of cloud (keep local device mode)
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setMenu(false);
                      openAuthModal();
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-bg-soft text-xs text-ink-soft font-semibold"
                  >
                    ☁️ Sign in / create optional cloud account
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

/**
 * Persistent Bottom Navigation Dock across ALL screen sizes (Mobile, iPad & Desktop — never md:hidden).
 */
export function BottomNav() {
  const path = usePathname() || "/";
  const { dueReviews } = useStore();
  const due = dueReviews().length;

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 border-t border-line pb-[env(safe-area-inset-bottom)] backdrop-blur-md print:hidden"
      style={{ background: "var(--header-bg)" }}
      aria-label="Bottom navigation"
    >
      <div className="mx-auto grid max-w-3xl grid-cols-7 px-1">
        {BOTTOM_NAV.map((n) => {
          const active = isBottomActive(path, n.href);
          return (
            <Link
              key={n.href}
              href={n.href}
              aria-current={active ? "page" : undefined}
              className={`relative flex flex-col items-center justify-center gap-0.5 py-2 text-[0.65rem] sm:text-xs font-extrabold transition-colors ${
                active ? "tone-indigo" : "text-ink-soft hover:text-ink"
              }`}
            >
              {active && (
                <span
                  className="absolute top-0 h-0.5 w-7 rounded-full bg-indigo-500"
                  aria-hidden
                />
              )}
              <span className="relative text-lg sm:text-xl leading-none" aria-hidden>
                {n.icon}
                {n.href === "/review" && due > 0 && (
                  <span className="absolute -right-2.5 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-rose-500 px-1 text-[9px] font-bold text-white">
                    {due > 99 ? "99+" : due}
                  </span>
                )}
              </span>
              <span>{n.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
