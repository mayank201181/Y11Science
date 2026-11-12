"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ALL_TOPICS, SUBJECTS } from "@/lib/content";
import type { SubjectId } from "@/lib/types";
import { rankForStars } from "@/lib/gamify";
import { useStore } from "@/lib/store";
import { masterclassDoneKey, sitcomDoneKey } from "@/components/WatchTab";

interface Achievement {
  id: string;
  name: string;
  emoji: string;
  done: boolean;
  hint: string;
}

export default function ProgressPage() {
  const { activeProfile, progress } = useStore();
  const [filter, setFilter] = useState<"all" | SubjectId>("all");
  const { rank, next, progress: rankPct } = rankForStars(progress.stars);

  const guidesDone = progress.guidesRead.length;
  const masterclassesDone = useMemo(
    () => ALL_TOPICS.filter((t) => Boolean(progress.awarded[masterclassDoneKey(t.id)])).length,
    [progress.awarded],
  );
  const sitcomsDone = useMemo(
    () => ALL_TOPICS.filter((t) => Boolean(progress.awarded[sitcomDoneKey(t.id)])).length,
    [progress.awarded],
  );
  const totalAnswered = useMemo(
    () => Object.values(progress.attempts).reduce((sum, a) => sum + a.total, 0),
    [progress.attempts],
  );
  const totalCorrect = useMemo(
    () => Object.values(progress.attempts).reduce((sum, a) => sum + a.correct, 0),
    [progress.attempts],
  );
  const overallAcc = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const achievements: Achievement[] = [
    {
      id: "first-guide",
      name: "First Steps",
      emoji: "👣",
      done: guidesDone >= 1,
      hint: "Read your first topic guide",
    },
    {
      id: "ten-guides",
      name: "Bookworm",
      emoji: "📚",
      done: guidesDone >= 10,
      hint: "Read 10 topic guides",
    },
    {
      id: "all-guides",
      name: "Syllabus Sweeper",
      emoji: "🏰",
      done: guidesDone >= ALL_TOPICS.length,
      hint: `Read all ${ALL_TOPICS.length} Triple Science guides`,
    },
    {
      id: "first-mc",
      name: "Studio Scholar",
      emoji: "🎓",
      done: masterclassesDone >= 1,
      hint: "Complete a Studio Masterclass lesson",
    },
    {
      id: "ten-mc",
      name: "Whiteboard Pro",
      emoji: "📽️",
      done: masterclassesDone >= 10,
      hint: "Complete 10 Studio Masterclasses",
    },
    {
      id: "sitcom-fan",
      name: "Binge Scientist",
      emoji: "🍿",
      done: sitcomsDone >= 5,
      hint: "Complete 5 Cartoon Sitcom episodes",
    },
    {
      id: "q-50",
      name: "Practice Machine",
      emoji: "⚙️",
      done: totalAnswered >= 50,
      hint: "Answer 50 exam-style questions",
    },
    {
      id: "q-250",
      name: "Mark-Scheme Sniper",
      emoji: "🎯",
      done: totalAnswered >= 250,
      hint: "Answer 250 exam-style questions",
    },
    {
      id: "stars-100",
      name: "Century Club",
      emoji: "💯",
      done: progress.stars >= 100,
      hint: "Collect 100 stars",
    },
    {
      id: "stars-500",
      name: "Grade 9 Contender",
      emoji: "🌟",
      done: progress.stars >= 500,
      hint: "Reach 500 stars",
    },
  ];

  const visibleTopics = useMemo(
    () => (filter === "all" ? ALL_TOPICS : ALL_TOPICS.filter((t) => t.subject === filter)),
    [filter],
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <Link href="/" className="chip">
          ← Home
        </Link>
        <Link href="/parent" className="chip">
          👪 Parent Dashboard
        </Link>
      </div>

      {/* Rank Hero Banner */}
      <section className="card p-6 sm:p-8 text-center">
        <div className="text-5xl animate-floaty">{rank.icon}</div>
        <div className="mt-2 text-3xl sm:text-4xl font-black tone-amber">⭐ {progress.stars}</div>
        <div className="text-lg font-black mt-0.5">
          {activeProfile?.name ? `${activeProfile.name} · ` : ""}
          {rank.name}
        </div>
        {next ? (
          <div className="mx-auto mt-4 max-w-sm">
            <div className="mb-1 text-xs font-bold text-ink-soft">
              {next.minStars - progress.stars} ⭐ to {next.icon} {next.name}
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-bg-soft border border-line">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                style={{ width: `${Math.round(rankPct * 100)}%` }}
              />
            </div>
          </div>
        ) : (
          <p className="mt-3 text-sm font-bold tone-emerald">Top rank achieved! 🎉</p>
        )}

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-3 text-left">
          <SummaryTile emoji="📖" label="Guides read" value={`${guidesDone} / ${ALL_TOPICS.length}`} />
          <SummaryTile emoji="🎓" label="Masterclasses" value={`${masterclassesDone} / ${ALL_TOPICS.length}`} />
          <SummaryTile emoji="🍿" label="Sitcom eps" value={`${sitcomsDone} / ${ALL_TOPICS.length}`} />
          <SummaryTile emoji="✅" label="Questions done" value={`${totalAnswered} (${overallAcc}%)`} />
          <SummaryTile emoji="🔥" label="Day streak" value={`${progress.streak.count}d`} />
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="space-y-3">
        <h2 className="text-xl font-black">🏅 Achievements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {achievements.map((a) => (
            <div
              key={a.id}
              className={`card p-3.5 text-center ${
                a.done ? "border-amber-500/50" : "opacity-65"
              }`}
              title={a.hint}
            >
              <div className={`text-3xl ${a.done ? "" : "grayscale"}`}>{a.emoji}</div>
              <div className="mt-1 text-xs font-black">{a.name}</div>
              <div className="text-[0.68rem] text-ink-soft mt-0.5">
                {a.done ? "Unlocked ✓" : a.hint}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 37-Topic Completion Matrix */}
      <section className="space-y-3">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h2 className="text-xl font-black">📊 37-Topic Completion Matrix &amp; Certificates</h2>
          <div className="flex gap-1.5 flex-wrap">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`btn text-xs py-1.5 px-3 ${filter === "all" ? "btn-primary" : "btn-ghost"}`}
            >
              All ({ALL_TOPICS.length})
            </button>
            {SUBJECTS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setFilter(s.id)}
                className={`btn text-xs py-1.5 px-3 ${filter === s.id ? "btn-primary" : "btn-ghost"}`}
              >
                {s.icon} {s.title}
              </button>
            ))}
          </div>
        </div>

        <div className="card overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs uppercase text-ink-soft">
                <th className="py-3 px-4">Topic</th>
                <th className="py-3 px-2 text-center">Guide</th>
                <th className="py-3 px-2 text-center">Masterclass</th>
                <th className="py-3 px-2 text-center">Sitcom</th>
                <th className="py-3 px-2 text-center">Questions</th>
                <th className="py-3 px-2 text-center">Challenge</th>
                <th className="py-3 px-4 text-right">Certificate</th>
              </tr>
            </thead>
            <tbody>
              {visibleTopics.map((t) => {
                const gDone = progress.guidesRead.includes(t.id);
                const mDone = Boolean(progress.awarded[masterclassDoneKey(t.id)]);
                const sDone = Boolean(progress.awarded[sitcomDoneKey(t.id)]);
                const st = progress.analytics.perTopic[t.id];
                const acc =
                  st && st.answered > 0 ? Math.round((st.correct / st.answered) * 100) : null;
                const chBest = progress.challengeBest[t.id] || 0;

                return (
                  <tr key={t.id} className="border-b border-line/60 last:border-0 hover:bg-bg-soft/60">
                    <td className="py-3 px-4">
                      <Link href={`/topic/${t.id}`} className="font-bold hover:underline flex items-center gap-2">
                        <span className="text-xl">{t.icon}</span>
                        <span>{t.title}</span>
                      </Link>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <Link href={`/topic/${t.id}`} title="Open Guide">
                        {gDone ? "✅" : "⚪"}
                      </Link>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <Link href={`/topic/${t.id}?tab=watch`} title="Watch Studio Masterclass">
                        {mDone ? "🎓" : "⚪"}
                      </Link>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <Link href={`/topic/${t.id}?tab=watch`} title="Watch Sitcom Episode">
                        {sDone ? "🍿" : "⚪"}
                      </Link>
                    </td>
                    <td className="py-3 px-2 text-center text-xs font-bold">
                      {acc !== null && st ? (
                        <span className={acc >= 75 ? "tone-emerald" : "tone-amber"}>
                          {acc}% ({st.answered})
                        </span>
                      ) : (
                        <span className="text-ink-soft">—</span>
                      )}
                    </td>
                    <td className="py-3 px-2 text-center text-xs font-bold">
                      {chBest > 0 ? (
                        <span className="tone-amber">⚡ {chBest}</span>
                      ) : (
                        <span className="text-ink-soft">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Link href={`/certificate/${t.id}`} className="chip">
                        🏅 View
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function SummaryTile({ emoji, label, value }: { emoji: string; label: string; value: string }) {
  return (
    <div className="rounded-xl bg-bg-soft border border-line p-3">
      <div className="text-base font-black">
        {emoji} {value}
      </div>
      <div className="text-xs text-ink-soft">{label}</div>
    </div>
  );
}
