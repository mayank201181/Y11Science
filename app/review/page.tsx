"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useStore } from "@/lib/store";
import { getQuestion } from "@/lib/content";
import { todayKey } from "@/lib/gamify";
import { PaperRunner, type QItem } from "@/components/PaperRunner";
import { useHeartbeat } from "@/lib/useHeartbeat";

export default function ReviewPage() {
  const { dueReviews, activeProfile } = useStore();
  useHeartbeat();
  const due = dueReviews();

  const items = useMemo<QItem[]>(() => {
    return due
      .map((qid) => getQuestion(qid))
      .filter(Boolean)
      .map((iq) =>
        iq!.kind === "mcq"
          ? { kind: "mcq" as const, q: iq!.question as never }
          : { kind: "qa" as const, q: iq!.question as never },
      );
  }, [due]);

  const pid = activeProfile?.id || "anon";

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <Link href="/" className="chip">
          ← Home
        </Link>
      </div>
      <header>
        <h1 className="text-3xl font-black">🔁 Daily Review</h1>
        <p className="text-ink-soft mt-1">
          Spaced repetition brings back questions you got wrong, just before you&apos;d forget them.
        </p>
      </header>

      {items.length === 0 ? (
        <div className="card p-8 text-center">
          <div className="text-4xl">✨</div>
          <div className="font-black text-lg mt-2">Nothing due right now!</div>
          <p className="text-ink-soft text-sm mt-1">
            Keep doing quizzes — anything you miss will reappear here on a smart schedule (1, 3, 7, 16
            then 35 days).
          </p>
        </div>
      ) : (
        <PaperRunner
          title={`${items.length} question${items.length > 1 ? "s" : ""} to review`}
          items={items}
          storageKey={`review.${pid}.${todayKey()}`}
        />
      )}
    </div>
  );
}
