"use client";

import Link from "next/link";
import { EXAMS, subjectMeta } from "@/lib/content";

export default function ExamsPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <Link href="/" className="chip">
          ← Home
        </Link>
      </div>
      <header>
        <h1 className="text-3xl font-black">📝 Mock Exams</h1>
        <p className="text-ink-soft mt-1">
          Full cross-topic papers in exam style — sit them under timed conditions for the real
          feeling.
        </p>
      </header>

      <div className="grid sm:grid-cols-3 gap-4">
        {EXAMS.map((e) => {
          const meta = subjectMeta(e.subject);
          const mcq = e.mcqPapers.reduce((n, p) => n + p.questions.length, 0);
          const qa = e.qaPapers.reduce((n, p) => n + p.questions.length, 0);
          return (
            <Link
              key={e.id}
              href={`/exam/${e.id}`}
              className={`card p-5 accent-${e.subject} hover:-translate-y-0.5 transition`}
            >
              <div className="text-3xl">{meta.icon}</div>
              <div className="font-black mt-2" style={{ color: "var(--accent)" }}>
                {e.title}
              </div>
              <div className="text-xs text-ink-soft mt-1">
                {mcq} MCQ · {qa} structured
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
