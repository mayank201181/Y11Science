"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TOPICS, SUBJECTS, subjectMeta } from "@/lib/content";
import type { SubjectId } from "@/lib/types";
import { useStore } from "@/lib/store";
import { useHeartbeat } from "@/lib/useHeartbeat";
import {
  COMEDY_SPECS,
  comedyDoneKey,
  masterclassDoneKey,
  sitcomDoneKey,
} from "@/components/WatchTab";
import { getMemoryVault } from "@/lib/memoryPitfalls";

export default function WatchHubPage() {
  const { progress } = useStore();
  useHeartbeat();
  const [filter, setFilter] = useState<"all" | SubjectId>("all");
  const [query, setQuery] = useState("");

  const mcDoneTotal = useMemo(
    () => TOPICS.filter((t) => Boolean(progress.awarded[masterclassDoneKey(t.id)])).length,
    [progress.awarded],
  );
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
      return (
        t.title.toLowerCase().includes(q) ||
        t.blurb.toLowerCase().includes(q) ||
        (c && c.title.toLowerCase().includes(q))
      );
    });
  }, [filter, query]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <Link href="/" className="chip">
          ← Home
        </Link>
        <div className="flex items-center gap-2 flex-wrap">
          <a href="/masterclass/index.html" className="chip">
            ↗ Fullscreen Masterclass Studio
          </a>
          <Link href="/episodes" className="chip tone-indigo">
            🍿 Switch to Sitcom TV Hub
          </Link>
        </div>
      </div>

      <section className="card p-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="chip tone-indigo">
            🎓 Edexcel 4BI1 · 4CH1 · 4PH1 · 37 Masterclasses + 37 Sitcoms
          </span>
          <span className="text-xs font-bold text-ink-soft">
            +1 ⭐ per chapter · +5 ⭐ completion bonus (saved automatically)
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black">
          🎬 Studio Masterclass &amp; Video Library
        </h1>
        <p className="text-sm text-ink-soft max-w-3xl">
          Every Year 11 Triple Science topic comes with a 60fps narrated UK Tutor Whiteboard
          Masterclass, an animated Sitcom episode with Pause-the-Tape checks, and a Mealtime
          Mockumentary. Launch any lesson below to earn Watch stars directly on this device.
        </p>

        <div className="flex flex-wrap gap-2.5 pt-1">
          <span className="chip">
            🎓 Masterclasses: <strong className="text-ink">{mcDoneTotal}/{TOPICS.length}</strong>
          </span>
          <span className="chip">
            🍿 Sitcoms: <strong className="text-ink">{sitDoneTotal}/{TOPICS.length}</strong>
          </span>
          <span className="chip">
            😂 Mealtime Comedy:{" "}
            <strong className="text-ink">{comedyDoneTotal}/{TOPICS.length}</strong>
          </span>
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
          All 37 Lessons
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
          placeholder="Search 37 Masterclasses (e.g. stoichiometry, homeostasis, nuclear)…"
          className="input flex-1 min-w-[210px] py-2 text-sm"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((t, idx) => {
          const meta = subjectMeta(t.subject);
          const vault = getMemoryVault(t.id);
          const mcDone = Boolean(progress.awarded[masterclassDoneKey(t.id)]);
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
              <div>
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="chip text-[0.68rem]">
                    {meta.icon} {vault?.specCode || meta.title} · Lesson #{idx + 1}
                  </span>
                  <div className="flex items-center gap-1">
                    {mcDone && <span className="chip tone-emerald">✓ Masterclass</span>}
                    {sitDone && <span className="chip tone-indigo">✓ Sitcom</span>}
                    {comDone && <span className="chip tone-amber">✓ Comedy</span>}
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-2">
                  <span className="text-3xl shrink-0">{t.icon}</span>
                  <div>
                    <h2 className="font-black text-base leading-snug">{t.title}</h2>
                    <p className="text-xs text-ink-soft mt-1 line-clamp-2">{t.blurb}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-line">
                <Link
                  href={`/topic/${t.id}?tab=watch&mode=masterclass`}
                  className="btn btn-primary text-xs py-1.5 px-3"
                >
                  🎓 Play Masterclass
                </Link>
                <Link
                  href={`/topic/${t.id}?tab=watch&mode=sitcom`}
                  className="btn btn-ghost text-xs py-1.5 px-3"
                >
                  🍿 Sitcom Ep
                </Link>
                <Link
                  href={`/topic/${t.id}?tab=watch&mode=comedy`}
                  className="btn btn-ghost text-xs py-1.5 px-3"
                >
                  😂 Comedy
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
