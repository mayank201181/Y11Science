"use client";

import Link from "next/link";
import type { Topic } from "@/lib/types";
import { subjectMeta } from "@/lib/content";
import { useStore } from "@/lib/store";
import { masterclassDoneKey, sitcomDoneKey } from "./WatchTab";

const SPEC_LABELS: Record<string, string> = {
  biology: "Pearson Edexcel IGCSE Biology (4BI1)",
  chemistry: "Pearson Edexcel IGCSE Chemistry (4CH1)",
  physics: "Pearson Edexcel IGCSE Physics (4PH1)",
};

export function Certificate({ topic }: { topic: Topic }) {
  const { activeProfile, progress } = useStore();
  const meta = subjectMeta(topic.subject);
  const learnerName = activeProfile?.name || "A Year 11 Triple Scientist";
  const guideDone = progress.guidesRead.includes(topic.id);
  const mcDone = Boolean(progress.awarded[masterclassDoneKey(topic.id)]);
  const sitcomDone = Boolean(progress.awarded[sitcomDoneKey(topic.id)]);
  const challengeScore = progress.challengeBest[topic.id] ?? 0;
  const topicStats = progress.analytics.perTopic[topic.id];
  const accuracy =
    topicStats && topicStats.answered > 0
      ? Math.round((topicStats.correct / topicStats.answered) * 100)
      : null;

  const date = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-3xl py-4">
      <div className="mb-4 flex items-center justify-between gap-2 flex-wrap print:hidden">
        <div className="flex items-center gap-2">
          <Link href={`/topic/${topic.id}`} className="chip">
            ← Back to {topic.title}
          </Link>
          <Link href="/progress" className="chip">
            📊 Progress Matrix
          </Link>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="btn btn-primary text-sm"
        >
          🖨️ Print / Save as PDF
        </button>
      </div>

      <div className="relative overflow-hidden rounded-3xl border-[6px] border-double border-amber-400 bg-gradient-to-br from-amber-50 via-white to-indigo-50 p-8 sm:p-12 text-center text-slate-900 shadow-xl">
        <div className="text-6xl">{topic.icon}</div>
        <p className="mt-3 text-xs sm:text-sm font-extrabold uppercase tracking-[0.28em] text-amber-700">
          Certificate of Mastery
        </p>

        <p className="mt-6 text-sm text-slate-600">This certifies that</p>
        <p className="mt-1 text-3xl sm:text-4xl font-black text-slate-900">{learnerName}</p>

        <p className="mt-5 text-sm text-slate-600">has demonstrated Year 11 mastery in</p>
        <p className="mt-1 text-2xl sm:text-3xl font-black text-indigo-700">{topic.title}</p>
        <p className="mt-1 text-sm font-semibold text-slate-600">
          {meta.icon} {SPEC_LABELS[topic.subject] || meta.title}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {guideDone && (
            <span className="rounded-full bg-emerald-100 border border-emerald-300 px-3.5 py-1 text-xs font-extrabold text-emerald-800">
              ✓ Study Guide Completed
            </span>
          )}
          {mcDone && (
            <span className="rounded-full bg-sky-100 border border-sky-300 px-3.5 py-1 text-xs font-extrabold text-sky-800">
              ✓ Studio Masterclass Completed
            </span>
          )}
          {sitcomDone && (
            <span className="rounded-full bg-violet-100 border border-violet-300 px-3.5 py-1 text-xs font-extrabold text-violet-800">
              ✓ Sitcom Episode Completed
            </span>
          )}
          {accuracy !== null && topicStats && (
            <span className="rounded-full bg-indigo-100 border border-indigo-300 px-3.5 py-1 text-xs font-extrabold text-indigo-800">
              Question Accuracy: {accuracy}% ({topicStats.correct}/{topicStats.answered})
            </span>
          )}
          {challengeScore > 0 && (
            <span className="rounded-full bg-amber-100 border border-amber-300 px-3.5 py-1 text-xs font-extrabold text-amber-800">
              ⚡ Challenge Best: {challengeScore} pts
            </span>
          )}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-10 text-xs sm:text-sm text-slate-600">
          <div className="border-t-2 border-slate-300 pt-1.5 px-6 font-semibold">{date}</div>
          <div className="border-t-2 border-slate-300 pt-1.5 px-6 font-semibold">
            Year 11 Science Lab · Tanglin IGCSE Edition 🔬
          </div>
        </div>

        <div className="pointer-events-none absolute -right-6 -top-6 text-9xl opacity-10">
          🏅
        </div>
      </div>
    </div>
  );
}
