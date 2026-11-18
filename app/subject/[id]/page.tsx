"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { useStore } from "@/lib/store";
import { subjectMeta, topicsBySubject, examsBySubject } from "@/lib/content";
import type { SubjectId } from "@/lib/types";
import { comedyDoneKey, masterclassDoneKey, sitcomDoneKey } from "@/components/WatchTab";
import { getMemoryVault } from "@/lib/memoryPitfalls";

const VALID: SubjectId[] = ["biology", "chemistry", "physics"];

export default function SubjectPage() {
  const { id } = useParams<{ id: string }>();
  const { progress } = useStore();
  if (!VALID.includes(id as SubjectId)) return notFound();
  const subject = id as SubjectId;
  const meta = subjectMeta(subject);
  const topics = topicsBySubject(subject);
  const exams = examsBySubject(subject);

  return (
    <div className={`space-y-6 accent-${subject}`}>
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          <Link href="/" className="chip">
            ← Home
          </Link>
          <Link href="/topics" className="chip">
            📚 All 37 Topics
          </Link>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Link href="/pitfalls" className="chip tone-emerald">
            🛡️ Marks-Saver Vault
          </Link>
          <Link href="/progress" className="chip">
            📊 Topic Completion Matrix
          </Link>
        </div>
      </div>

      <header className="flex items-center gap-4">
        <span className="text-5xl">{meta.icon}</span>
        <div>
          <h1 className="text-3xl font-black" style={{ color: "var(--accent)" }}>
            {meta.title}
          </h1>
          <p className="text-ink-soft">{meta.blurb}</p>
        </div>
      </header>

      <div className="grid sm:grid-cols-2 gap-4">
        {topics.map((t, i) => {
          const read = progress.guidesRead.includes(t.id);
          const mcDone = Boolean(progress.awarded[masterclassDoneKey(t.id)]);
          const sitDone = Boolean(progress.awarded[sitcomDoneKey(t.id)]);
          const comDone = Boolean(progress.awarded[comedyDoneKey(t.id)]);
          const att = progress.analytics.perTopic[t.id];
          const vault = getMemoryVault(t.id);
          return (
            <Link
              key={t.id}
              href={`/topic/${t.id}`}
              className="card p-4 flex gap-3 hover:-translate-y-0.5 transition"
              style={{
                borderColor: "color-mix(in srgb, var(--accent) 30%, var(--color-line))",
              }}
            >
              <span className="text-3xl shrink-0">{t.icon}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs text-ink-soft font-bold">#{i + 1}</span>
                  {read && <span className="chip">✓ guide</span>}
                  {mcDone && <span className="chip">🎓 masterclass</span>}
                  {sitDone && <span className="chip">🍿 sitcom</span>}
                  {comDone && <span className="chip">😂 comedy</span>}
                </div>
                <div className="font-bold leading-tight mt-1">{t.title}</div>
                <p className="text-sm text-ink-soft mt-1 line-clamp-2">{t.blurb}</p>
                <div className="flex items-center justify-between gap-2 mt-2 text-xs text-ink-soft">
                  <span>
                    {att && att.answered > 0
                      ? `${att.correct}/${att.answered} correct`
                      : `Guide · Watch · ${vault ? `${vault.pitfalls.length} Pitfalls` : "Pitfalls"} · Bank`}
                  </span>
                  <span className="font-bold" style={{ color: "var(--accent)" }}>
                    Open →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {exams.length > 0 && (
        <section>
          <h2 className="text-lg font-black mb-2">Mock exam</h2>
          {exams.map((e) => (
            <Link key={e.id} href={`/exam/${e.id}`} className="card p-4 flex items-center gap-3">
              <span className="text-2xl">📝</span>
              <div>
                <div className="font-bold">{e.title}</div>
                <div className="text-xs text-ink-soft">
                  {e.mcqPapers.reduce((n, p) => n + p.questions.length, 0)} MCQ ·{" "}
                  {e.qaPapers.reduce((n, p) => n + p.questions.length, 0)} structured
                </div>
              </div>
            </Link>
          ))}
        </section>
      )}
    </div>
  );
}
