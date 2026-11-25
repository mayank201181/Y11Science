"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TOPICS, SUBJECTS, subjectMeta } from "@/lib/content";
import type { SubjectId } from "@/lib/types";
import { useStore } from "@/lib/store";
import { useHeartbeat } from "@/lib/useHeartbeat";
import { comedyDoneKey, masterclassDoneKey, sitcomDoneKey } from "@/lib/watchKeys";
import { getMemoryVault } from "@/lib/memoryPitfalls";
import { sortForYear10, useCourseYearFilter } from "@/lib/courseYear";
import { CourseYearBanner, Year11Divider } from "@/components/CourseYearBanner";

export default function TopicsDirectoryPage() {
  const { progress } = useStore();
  useHeartbeat();
  const [filter, setFilter] = useState<"all" | SubjectId>("all");
  const [query, setQuery] = useState("");
  const year10 = useCourseYearFilter() === 10;

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

  const y10AllCount = useMemo(() => TOPICS.filter((t) => t.courseYear === 10).length, []);
  const y11AllCount = TOPICS.length - y10AllCount;
  const { y10Filtered, y11Filtered } = useMemo(() => {
    if (!year10) return { y10Filtered: [] as typeof TOPICS, y11Filtered: [] as typeof TOPICS };
    const sorted = sortForYear10(filtered);
    return {
      y10Filtered: sorted.filter((t) => t.courseYear === 10),
      y11Filtered: sorted.filter((t) => t.courseYear !== 10),
    };
  }, [year10, filtered]);

  return (
    <div className="space-y-6">
      {year10 ? <CourseYearBanner y10Count={y10AllCount} y11Count={y11AllCount} /> : null}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <Link href="/" className="chip">
          ← Home
        </Link>
        <div className="flex items-center gap-2 flex-wrap">
          <Link href="/cram" className="chip tone-rose">
            🚨 Custom Exam Cram Sheet
          </Link>
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
      ) : year10 ? (
        <div className="space-y-6">
          {y10Filtered.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-4">
              {y10Filtered.map((t) => {
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
                    data-course-year-item={10}
                    className={`card p-4 flex flex-col justify-between gap-3 accent-${t.subject}`}
                    style={{
                      borderColor: "color-mix(in srgb, var(--accent) 30%, var(--color-line))",
                    }}
                  >
                    <div className="flex gap-3">
                      <span className="text-3xl shrink-0">{t.icon}</span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="chip tone-indigo text-[0.68rem]">Year 10</span>
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
                      <Link href={`/topic/${t.id}?tab=cram`} className="chip tone-rose">
                        🚨 Cram
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
          {y11Filtered.length > 0 && (
            <>
              <Year11Divider count={y11Filtered.length} />
              <div className="grid sm:grid-cols-2 gap-4">
                {y11Filtered.map((t) => {
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
                      data-course-year-item={11}
                      className={`card p-4 flex flex-col justify-between gap-3 accent-${t.subject} opacity-60 grayscale-[35%] hover:opacity-95 transition`}
                      style={{
                        borderColor: "color-mix(in srgb, var(--accent) 30%, var(--color-line))",
                      }}
                    >
                      <div className="flex gap-3">
                        <span className="text-3xl shrink-0">{t.icon}</span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="chip text-[0.68rem]">Year 11</span>
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
                        <Link href={`/topic/${t.id}?tab=cram`} className="chip tone-rose">
                          🚨 Cram
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
            </>
          )}
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
                  <Link href={`/topic/${t.id}?tab=cram`} className="chip tone-rose">
                    🚨 Cram
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
