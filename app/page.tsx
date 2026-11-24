"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { TOPICS, SUBJECTS, topicsBySubject, totalQuestionCount } from "@/lib/content";
import type { SubjectId } from "@/lib/types";
import { rankForStars } from "@/lib/gamify";
import { useHeartbeat } from "@/lib/useHeartbeat";
import { comedyDoneKey, masterclassDoneKey, sitcomDoneKey } from "@/lib/watchKeys";
import { MEMORY_PITFALLS } from "@/lib/memoryPitfalls";
import { renderPitfallRichText } from "@/components/MemoryPitfallsView";

export default function Home() {
  const { activeProfile, progress, dueReviews, guest } = useStore();
  useHeartbeat();
  const [spotSubj, setSpotSubj] = useState<SubjectId>("biology");
  const [spotOffset, setSpotOffset] = useState(0);

  const { rank, next, progress: rp } = rankForStars(progress.stars);
  const due = dueReviews().length;
  const totalQ = totalQuestionCount();
  const watchedCount = TOPICS.filter(
    (t) =>
      Boolean(progress.awarded[masterclassDoneKey(t.id)]) ||
      Boolean(progress.awarded[sitcomDoneKey(t.id)]) ||
      Boolean(progress.awarded[comedyDoneKey(t.id)]),
  ).length;

  const pitfallPool = useMemo(() => {
    const subTopics = topicsBySubject(spotSubj);
    const items: Array<{
      topicId: string;
      topicTitle: string;
      topicIcon: string;
      spec: string;
      verdict: string;
      wrong: string;
      right: string;
    }> = [];
    for (const t of subTopics) {
      const v = MEMORY_PITFALLS[t.id];
      if (!v) continue;
      for (const p of v.pitfalls.slice(0, 2)) {
        items.push({
          topicId: t.id,
          topicTitle: t.title,
          topicIcon: t.icon,
          spec: p.spec,
          verdict: p.verdict,
          wrong: p.wrong,
          right: p.right,
        });
      }
    }
    return items;
  }, [spotSubj]);

  const totalTraps = useMemo(
    () => Object.values(MEMORY_PITFALLS).reduce((s, v) => s + v.pitfalls.length, 0),
    [],
  );

  const activeSpot =
    pitfallPool.length > 0 ? pitfallPool[spotOffset % pitfallPool.length] : null;

  return (
    <div className="space-y-8">
      <section className="card p-6 sm:p-8 overflow-hidden relative">
        <div className="relative z-10">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <p className="text-ink-soft font-semibold">
              Hi {activeProfile?.name || "Vanishree"} 👋
            </p>
            <span className="chip text-[0.7rem]">
              {guest ? "💾 Saved automatically on this device" : "☁️ Cloud synced"}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mt-1">Year 11 Triple Science Lab</h1>
          <p className="text-ink-soft mt-2 max-w-2xl">
            Pearson Edexcel IGCSE Biology (4BI1), Chemistry (4CH1) &amp; Physics (4PH1) — 37
            illustrated discovery guides, 37 narrated Studio Masterclass whiteboards, 37 Sitcom
            &amp; Body Corporate episodes, {totalTraps}+ Examiner Marks-Saver traps, and{" "}
            {totalQ.toLocaleString()}+ practice questions.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Stat icon="⭐" label="Stars" value={progress.stars} />
            <Stat icon="🔥" label="Day streak" value={progress.streak.count} />
            <Stat icon="📖" label="Guides read" value={progress.guidesRead.length} />
            <Stat icon="🎬" label="Topics watched" value={watchedCount} />
            <Stat icon="🔁" label="Reviews due" value={due} />
          </div>

          <div className="mt-5 max-w-md">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-bold">
                {rank.icon} {rank.name}
              </span>
              {next && (
                <span className="text-ink-soft">
                  {next.minStars - progress.stars}⭐ to {next.name}
                </span>
              )}
            </div>
            <div className="h-3 rounded-full bg-bg overflow-hidden border border-line">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-violet-500"
                style={{ width: `${Math.round(rp * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Edexcel Marks-Saver & Examiner Pitfalls Spotlight */}
      <section className="card p-5 sm:p-6 space-y-4 border-emerald-500/35">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="chip tone-emerald">
                🛡️ Edexcel Marks-Saver · 4BI1 · 4CH1 · 4PH1
              </span>
              <span className="text-xs font-bold text-ink-soft">
                {totalTraps} real mark-scheme traps across 37 topics
              </span>
            </div>
            <h2 className="text-xl font-black mt-1.5">
              What Loses Marks vs What Earns Full Marks
            </h2>
            <p className="text-xs sm:text-sm text-ink-soft mt-0.5">
              Spot the exact everyday phrases Edexcel examiners reject — and replace them with
              full-mark syllabus wording.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/cram" className="btn btn-primary text-xs sm:text-sm py-2 px-3.5">
              🚨 Custom Exam Cram Sheet →
            </Link>
            <Link href="/formulas" className="btn btn-ghost text-xs sm:text-sm py-2 px-3">
              📐 Equations Sheet
            </Link>
            <Link href="/pitfalls" className="btn btn-ghost text-xs sm:text-sm py-2 px-3">
              🛡️ Full Vault
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex flex-wrap gap-1.5">
            {SUBJECTS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setSpotSubj(s.id);
                  setSpotOffset(0);
                }}
                className={`chip ${spotSubj === s.id ? "border-indigo-500 text-ink" : ""}`}
              >
                {s.icon} {s.title} ({s.id === "biology" ? "4BI1" : s.id === "chemistry" ? "4CH1" : "4PH1"})
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setSpotOffset((n) => n + 1)}
            className="chip"
          >
            🎲 Next examiner trap
          </button>
        </div>

        {activeSpot && (
          <div className="rounded-2xl bg-bg-soft border border-line p-4 space-y-3">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <Link
                href={`/topic/${activeSpot.topicId}?tab=memory`}
                className="text-xs font-extrabold tone-indigo hover:underline"
              >
                {activeSpot.topicIcon} {activeSpot.topicTitle} · {activeSpot.spec} →
              </Link>
              <span className="text-xs font-bold tone-rose">{activeSpot.verdict}</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-rose-500/35 bg-rose-500/10 p-3">
                <div className="text-xs font-extrabold tone-rose mb-1">
                  ❌ Loses Marks — Never Write This
                </div>
                <p className="text-sm font-semibold">
                  &ldquo;{renderPitfallRichText(activeSpot.wrong)}&rdquo;
                </p>
              </div>
              <div className="rounded-xl border border-emerald-500/35 bg-emerald-500/10 p-3">
                <div className="text-xs font-extrabold tone-emerald mb-1">
                  ✅ Earns Full Marks — Write This Instead
                </div>
                <p className="text-sm font-semibold">{renderPitfallRichText(activeSpot.right)}</p>
              </div>
            </div>
          </div>
        )}
      </section>

      <section>
        <div className="flex items-center justify-between gap-2 mb-3">
          <h2 className="text-xl font-black">Choose a subject</h2>
          <Link href="/topics" className="text-xs font-extrabold tone-indigo hover:underline">
            Browse all 37 topics →
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {SUBJECTS.map((s) => {
            const topics = topicsBySubject(s.id);
            const read = topics.filter((t) => progress.guidesRead.includes(t.id)).length;
            const watched = topics.filter(
              (t) =>
                Boolean(progress.awarded[masterclassDoneKey(t.id)]) ||
                Boolean(progress.awarded[sitcomDoneKey(t.id)]) ||
                Boolean(progress.awarded[comedyDoneKey(t.id)]),
            ).length;
            return (
              <Link
                key={s.id}
                href={`/subject/${s.id}`}
                className={`card p-5 accent-${s.id} hover:-translate-y-0.5 transition`}
                style={{ borderColor: "color-mix(in srgb, var(--accent) 35%, var(--color-line))" }}
              >
                <div className="text-4xl">{s.icon}</div>
                <div className="text-lg font-black mt-2" style={{ color: "var(--accent)" }}>
                  {s.title}
                </div>
                <p className="text-sm text-ink-soft mt-1">{s.blurb}</p>
                <div className="mt-3 text-xs text-ink-soft font-semibold">
                  {topics.length} topics · {read} guides · {watched} watched
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-black mb-3">Watch, Revise &amp; Sit Mock Papers</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <QuickCard
            href="/watch"
            icon="🎓"
            title="Studio Masterclasses"
            desc="37 narrated 60fps whiteboard lessons + checks"
          />
          <QuickCard
            href="/episodes"
            icon="🍿"
            title="Sitcom TV & Body Corporate"
            desc="37 comedy episodes + Examiner Sterling Roasts"
          />
          <QuickCard
            href="/cram"
            icon="🚨"
            title="Custom Exam Cram Sheet"
            desc="Pick any 3–4 test topics for an instant mark-saver sheet"
          />
          <QuickCard
            href="/pitfalls"
            icon="🛡️"
            title="Marks-Saver Pitfalls Vault"
            desc={`${totalTraps} Never-Write → Write-Instead traps`}
          />
          <QuickCard
            href="/exams"
            icon="📝"
            title="Edexcel Mock Exams"
            desc="Full cross-topic 4BI1, 4CH1 & 4PH1 papers"
          />
          <QuickCard
            href="/review"
            icon="🔁"
            title="Spaced Review"
            desc={due > 0 ? `${due} questions due now` : "Smart 1-3-7-16-35 day recall"}
          />
          <QuickCard
            href="/progress"
            icon="📊"
            title="Progress & Certificates"
            desc="37-topic mastery matrix & printable awards"
          />
        </div>
      </section>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: string; label: string; value: number }) {
  return (
    <div className="px-3 py-2 rounded-xl bg-bg-soft border border-line">
      <div className="text-lg font-black tabular-nums">
        {icon} {value}
      </div>
      <div className="text-xs text-ink-soft">{label}</div>
    </div>
  );
}

function QuickCard({
  href,
  icon,
  title,
  desc,
}: {
  href: string;
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <Link href={href} className="card p-4 flex items-center gap-3 hover:-translate-y-0.5 transition">
      <span className="text-2xl">{icon}</span>
      <div>
        <div className="font-bold">{title}</div>
        <div className="text-xs text-ink-soft">{desc}</div>
      </div>
    </Link>
  );
}
