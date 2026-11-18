"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TOPICS, SUBJECTS, subjectMeta } from "@/lib/content";
import type { SubjectId } from "@/lib/types";
import { useStore } from "@/lib/store";
import { useHeartbeat } from "@/lib/useHeartbeat";
import { COMEDY_SPECS, comedyDoneKey, sitcomDoneKey } from "@/components/WatchTab";
import { getMemoryVault } from "@/lib/memoryPitfalls";

export default function SitcomHubPage() {
  const { progress, awardActivity } = useStore();
  useHeartbeat();
  const [filter, setFilter] = useState<"all" | SubjectId>("all");
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  const sitDoneTotal = useMemo(
    () => TOPICS.filter((t) => Boolean(progress.awarded[sitcomDoneKey(t.id)])).length,
    [progress.awarded],
  );
  const comedyDoneTotal = useMemo(
    () => TOPICS.filter((t) => Boolean(progress.awarded[comedyDoneKey(t.id)])).length,
    [progress.awarded],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TOPICS.filter((t) => {
      if (filter !== "all" && t.subject !== filter) return false;
      if (!q) return true;
      const c = COMEDY_SPECS[t.id];
      const v = getMemoryVault(t.id);
      return (
        t.title.toLowerCase().includes(q) ||
        (c && (c.title.toLowerCase().includes(q) || c.show.toLowerCase().includes(q))) ||
        (v && v.epTitle.toLowerCase().includes(q))
      );
    });
  }, [filter, query]);

  const ep1Done = Boolean(progress.awarded[comedyDoneKey("bio-coordination")]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <Link href="/" className="chip">
          ← Home
        </Link>
        <div className="flex items-center gap-2 flex-wrap">
          <a href="/season1/index.html" className="chip tone-indigo">
            ↗ Fullscreen Season 1 Broadcast Studio
          </a>
          <Link href="/watch" className="chip">
            🎓 Studio Masterclasses
          </Link>
        </div>
      </div>

      {/* Hero + Featured Live-Action/Animated Episode */}
      <section className="card p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="chip tone-amber">
            🍿 37 Cartoon Sitcom Episodes + 37 Workplace Mockumentaries + Examiner Sterling Roasts
          </span>
          <span className="text-xs font-bold text-ink-soft">
            🍿 {sitDoneTotal}/37 Sitcoms · 😂 {comedyDoneTotal}/37 Comedies watched
          </span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-black">
            🍿 Sitcom TV &amp; Body Corporate Binge Hub
          </h1>
          <p className="text-sm text-ink-soft mt-1 max-w-3xl">
            Revise Edexcel Triple Science without dry textbook fatigue: watch Vani, Maya, Dr. K
            &amp; Examiner Sterling roast real mark-scheme blunders across all 37 topics — or press
            play on our featured live-action + animated premiere below!
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-bg-soft p-4 space-y-3">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div>
              <span className="chip tone-indigo">🎬 Featured Premiere · Edexcel 4BI1</span>
              <h2 className="font-black text-base sm:text-lg mt-1">
                Body Corporate Ep 1 — &ldquo;The 37 Degree Agenda&rdquo; (Coordination &amp;
                Homeostasis)
              </h2>
            </div>
            {ep1Done ? (
              <span className="chip tone-emerald">✓ Watched (+5 ⭐)</span>
            ) : (
              <span className="chip">+5 ⭐ on finish</span>
            )}
          </div>

          <video
            src="/comedy/bio-coordination.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full rounded-xl bg-black aspect-video"
            onEnded={() => {
              const key = comedyDoneKey("bio-coordination");
              if (!progress.awarded[key]) {
                awardActivity(
                  key,
                  5,
                  "Watched Body Corporate Premiere: Coordination & Response",
                );
                setToast("🎉 +5 ⭐ earned for watching Body Corporate Premiere!");
              }
            }}
          />
          {toast && <div className="chip tone-emerald">{toast}</div>}
        </div>
      </section>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`btn text-xs sm:text-sm py-2 px-3.5 ${
            filter === "all" ? "btn-primary" : "btn-ghost"
          }`}
        >
          All 37 Episodes
        </button>
        {SUBJECTS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setFilter(s.id)}
            className={`btn text-xs sm:text-sm py-2 px-3.5 ${
              filter === s.id ? "btn-primary" : "btn-ghost"
            }`}
          >
            {s.icon} {s.title}
          </button>
        ))}
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search episodes (e.g. Body Corporate, Atomic HR, Forces HQ, enzymes)…"
          className="input flex-1 min-w-[210px] py-2 text-sm"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((t, idx) => {
          const meta = subjectMeta(t.subject);
          const vault = getMemoryVault(t.id);
          const comedy = COMEDY_SPECS[t.id];
          const sitDone = Boolean(progress.awarded[sitcomDoneKey(t.id)]);
          const comDone = Boolean(progress.awarded[comedyDoneKey(t.id)]);

          return (
            <div
              key={t.id}
              className={`card p-4 flex flex-col justify-between gap-3 accent-${t.subject}`}
              style={{
                borderColor: "color-mix(in srgb, var(--accent) 30%, var(--color-line))",
              }}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="chip text-[0.68rem]">
                    {meta.icon} Ep {idx + 1} · {vault?.specCode || meta.title}
                  </span>
                  <div className="flex items-center gap-1">
                    {sitDone && <span className="chip tone-emerald">✓ Sitcom</span>}
                    {comDone && <span className="chip tone-amber">✓ {comedy?.show || "Comedy"}</span>}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-3xl shrink-0">{t.icon}</span>
                  <div>
                    <div className="text-xs font-bold tone-indigo">{t.title}</div>
                    <h2 className="font-black text-base leading-snug">
                      {vault?.epTitle ? `“${vault.epTitle}”` : t.title}
                    </h2>
                    {comedy && (
                      <p className="text-xs text-ink-soft mt-1 leading-relaxed">
                        <strong>{comedy.show}:</strong> &ldquo;{comedy.title}&rdquo; — {comedy.cold}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-line">
                <Link
                  href={`/topic/${t.id}?tab=watch&mode=sitcom`}
                  className="btn btn-primary text-xs py-1.5 px-3"
                >
                  🍿 Watch Sitcom (+⭐)
                </Link>
                <Link
                  href={`/topic/${t.id}?tab=watch&mode=comedy`}
                  className="btn btn-ghost text-xs py-1.5 px-3"
                >
                  😂 {comedy?.show || "Comedy"}
                </Link>
                <a
                  href={`/season1/index.html?ep=${encodeURIComponent(t.id)}`}
                  className="chip"
                  title="Open in standalone Season 1 player"
                >
                  ↗ Fullscreen
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
