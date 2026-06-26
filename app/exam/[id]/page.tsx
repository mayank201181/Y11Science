"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { getExam, subjectMeta } from "@/lib/content";
import { useStore } from "@/lib/store";
import { useHeartbeat } from "@/lib/useHeartbeat";
import { PaperRunner, type QItem } from "@/components/PaperRunner";

export default function ExamPage() {
  const { id } = useParams<{ id: string }>();
  const exam = getExam(id);
  const { activeProfile } = useStore();
  useHeartbeat();
  const [openPaper, setOpenPaper] = useState<string | null>(null);

  if (!exam) return notFound();
  const meta = subjectMeta(exam.subject);
  const pid = activeProfile?.id || "anon";

  const papers = [
    ...exam.mcqPapers.map((p) => ({ ...p, kind: "mcq" as const })),
    ...exam.qaPapers.map((p) => ({ ...p, kind: "qa" as const })),
  ];
  const current = papers.find((p) => p.id === openPaper);

  return (
    <div className={`space-y-5 accent-${exam.subject}`}>
      <div className="flex items-center gap-2 text-sm">
        <Link href="/" className="chip">
          Home
        </Link>
        <Link href="/exams" className="chip">
          Exams
        </Link>
      </div>

      <header className="flex items-center gap-3">
        <span className="text-4xl">{meta.icon}</span>
        <h1 className="text-2xl sm:text-3xl font-black">{exam.title}</h1>
      </header>

      {current ? (
        <div className="space-y-3">
          <button className="chip" onClick={() => setOpenPaper(null)}>
            ← All papers
          </button>
          <PaperRunner
            title={current.title}
            items={current.questions.map((q) =>
              current.kind === "mcq"
                ? ({ kind: "mcq", q } as QItem)
                : ({ kind: "qa", q } as QItem),
            )}
            storageKey={`exam.${pid}.${current.id}`}
          />
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-3">
          {papers.map((p) =>
            p.questions.length > 0 ? (
              <button
                key={p.id}
                onClick={() => setOpenPaper(p.id)}
                className="card p-4 text-left hover:-translate-y-0.5 transition"
              >
                <div className="font-bold">{p.title}</div>
                <div className="text-xs text-ink-soft">{p.questions.length} questions</div>
              </button>
            ) : (
              <div key={p.id} className="card p-4 opacity-60">
                <div className="font-bold">{p.title}</div>
                <div className="text-xs text-ink-soft">Coming soon</div>
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
}
