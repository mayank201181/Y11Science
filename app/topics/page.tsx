"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TOPICS, SUBJECTS, subjectMeta } from "@/lib/content";
import type { SubjectId } from "@/lib/types";
import { useStore } from "@/lib/store";
import { useHeartbeat } from "@/lib/useHeartbeat";
import { comedyDoneKey, masterclassDoneKey, sitcomDoneKey } from "@/components/WatchTab";
import { getMemoryVault } from "@/lib/memoryPitfalls";

export default function TopicsDirectoryPage() {
  const { progress } = useStore();
  useHeartbeat();
  const [filter, setFilter] = useState<"all" | SubjectId>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TOPICS.filter((t) => {
      if (filter !== "all" && t.subject !== filter) return false;
      if (!q) return true;
      return (
        t.title.toLowerCase().includes(q) ||
        t.blurb.toLowerCase().includes(q) ||
        t.id.toLowerCase().includes(q)
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
          <Link href="/pitfalls" className="chip tone-emerald">
            🛡️ Edexcel Marks-Saver Vault
          </Link>
          <Link href="/progress" className="chip">
            📊 Mastery Matrix
          </Link>
        </div>
      </div>

      <header>
        <h1 className="text-3xl font-black">📚 All 37 Triple Science Topics</h1>
        <p className="text-ink-soft mt-1">
          Pearson Edexcel IGCSE Biology (4BI1 · 14 topics), Chemistry (4CH1 · 13 topics) &amp;
          Physics (4PH1 · 10 topics). Jump straight to any Guide, Watch episode, Examiner Pitfalls
          vault, or Question Bank.
        </p>
      </header>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`btn text-xs sm:text-sm py-2 px-3.5 ${
            filter === "all" ? "btn-primary" : "btn-ghost"
          }`}
        >
          All Topics ({TOPICS.length})
        </button>
        {SUBJECTS.map((s) => {
          const count = TOPICS.filter((t) => t.subject === s.id).length;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setFilter(s.id)}
              className={`btn text-xs sm:text-sm py-2 px-3.5 ${
                filter === s.id ? "btn-primary" : "btn-ghost"
              }`}
            >
              {s.icon} {s.title} ({count})
            </button>
          );
        })}
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search topics (e.g. electrolysis, osmosis, momentum)…"
          className="input flex-1 min-w-[210px] py-2 text-sm"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="card p-8 text-center text-ink-soft">
          No topics matched &ldquo;{query}&rdquo;. Try clearing your search filter.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {filtered.map((t) => {
            const meta = subjectMeta(t.subject);
            const read = progress.guidesRead.includes(t.id);
            const watched =
              Boolean(progress.awarded[masterclassDoneKey(t.id)]) ||
              Boolean(progress.awarded[sitcomDoneKey(t.id)]) ||
              Boolean(progress.awarded[comedyDoneKey(t.id)]);
            const att = progress.analytics.perTopic[t.id];
            const vault = getMemoryVault(t.id);

            return (
              <div
                key={t.id}
                className={`card p-4 flex flex-col justify-between gap-3 accent-${t.subject}`}
                style={{
                  borderColor: "color-mix(in srgb, var(--accent) 30%, var(--color-line))",
                }}
              >
                <div className="flex gap-3">
                  <span className="text-3xl shrink-0">{t.icon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="chip text-[0.68rem]">
                        {meta.icon} {vault?.specCode || meta.title}
                      </span>
                      {read && <span className="chip tone-emerald">✓ Guide</span>}
                      {watched && <span className="chip tone-indigo">🎬 Watched</span>}
                      {att && att.answered > 0 && (
                        <span className="chip">
                          {att.correct}/{att.answered} Qs
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/topic/${t.id}`}
                      className="font-black text-base leading-snug mt-1.5 block hover:underline"
                    >
                      {t.title}
                    </Link>
                    <p className="text-xs text-ink-soft mt-1 line-clamp-2">{t.blurb}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-line">
                  <Link href={`/topic/${t.id}`} className="chip">
                    📖 Guide
                  </Link>
                  <Link href={`/topic/${t.id}?tab=watch`} className="chip">
                    🎬 Watch
                  </Link>
                  <Link href={`/topic/${t.id}?tab=memory`} className="chip tone-emerald">
                    🛡️ {vault ? `${vault.pitfalls.length} Pitfalls` : "Pitfalls"}
                  </Link>
                  <Link href={`/topic/${t.id}?tab=quiz`} className="chip">
                    ✏️ Quiz
                  </Link>
                  <Link href={`/topic/${t.id}?tab=bank`} className="chip">
                    🏦 Bank
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
