import { Suspense } from "react";
import type { Metadata } from "next";
import { TOPICS } from "@/lib/content";
import { buildTopicCramPack } from "@/lib/cram";
import { CramSheet } from "@/components/CramSheet";

export const metadata: Metadata = {
  title: "Exam Cram & Mark-Savers Sheet — Year 11 Triple Science",
  description:
    "Select any 1, 3, or 4 topics in your Edexcel IGCSE Biology (4BI1), Chemistry (4CH1) or Physics (4PH1) test for an instant custom Exam Cram & Mark-Savers Sheet.",
};

export default function CramPage() {
  const packs = TOPICS.map((t) => buildTopicCramPack(t));
  return (
    <Suspense fallback={<div className="card p-6 text-ink-soft">Building Exam Cram Sheet…</div>}>
      <CramSheet packs={packs} subjectLabel="Year 11 Triple Science (4BI1 · 4CH1 · 4PH1)" />
    </Suspense>
  );
}
