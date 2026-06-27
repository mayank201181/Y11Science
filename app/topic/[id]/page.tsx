"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { getTopic, subjectMeta, challengeQuestions } from "@/lib/content";
import { useStore } from "@/lib/store";
import { useHeartbeat } from "@/lib/useHeartbeat";
import { GuideView } from "@/components/GuideView";
import { LearnSmartView } from "@/components/Flashcards";
import { PaperRunner, type QItem } from "@/components/PaperRunner";
import { ChallengeMode } from "@/components/ChallengeMode";
import { InteractiveView } from "@/components/InteractiveWidgets";

type Tab = "guide" | "interactive" | "learn" | "quiz" | "bank" | "challenge";

export default function TopicPage() {
  const { id } = useParams<{ id: string }>();
  const topic = getTopic(id);
  const { activeProfile } = useStore();
  useHeartbeat(id);
  const [tab, setTab] = useState<Tab>("guide");
  const [openPaper, setOpenPaper] = useState<string | null>(null);

  if (!topic) return notFound();
  const meta = subjectMeta(topic.subject);
  const pid = activeProfile?.id || "anon";

  const quizItems: QItem[] = [
    ...topic.quiz.mcq.map((q) => ({ kind: "mcq" as const, q })),
    ...topic.quiz.qa.map((q) => ({ kind: "qa" as const, q })),
  ];

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "guide", label: "Guide", icon: "📖" },
    { id: "interactive", label: "Interactive", icon: "🔬" },
    { id: "learn", label: "Learn", icon: "🃏" },
    { id: "quiz", label: "Quick Quiz", icon: "✏️" },
    { id: "bank", label: "Question Bank", icon: "🏦" },
    { id: "challenge", label: "Challenge", icon: "⚡" },
  ];

  const allPapers = [
    ...topic.questionBank.mcqPapers.map((p) => ({ ...p, kind: "mcq" as const })),
    ...topic.questionBank.qaPapers.map((p) => ({ ...p, kind: "qa" as const })),
  ];
  const current = allPapers.find((p) => p.id === openPaper);

  return (
    <div className={`space-y-5 accent-${topic.subject}`}>
      <div className="flex items-center gap-2 text-sm">
        <Link href="/" className="chip">
          Home
        </Link>
        <Link href={`/subject/${topic.subject}`} className="chip">
          {meta.icon} {meta.title}
        </Link>
      </div>

      <header className="flex items-center gap-4">
        <span className="text-5xl">{topic.icon}</span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-black">{topic.title}</h1>
          <p className="text-ink-soft text-sm">{topic.blurb}</p>
        </div>
      </header>

      {/* tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 -mx-1 px-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => {
              setTab(t.id);
              setOpenPaper(null);
            }}
            className={`btn text-sm whitespace-nowrap ${tab === t.id ? "btn-primary" : "btn-ghost"}`}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {tab === "guide" && (
        <GuideView topic={topic} onOpenInteractive={() => setTab("interactive")} />
      )}
      {tab === "interactive" && <InteractiveView topicId={topic.id} />}
      {tab === "learn" && <LearnSmartView learn={topic.learn} />}

      {tab === "quiz" &&
        (quizItems.length > 0 ? (
          <PaperRunner
            title="Quick Quiz"
            items={quizItems}
            topicId={topic.id}
            storageKey={`quiz.${pid}.${topic.id}`}
            guideHref={`/topic/${topic.id}`}
          />
        ) : (
          <Empty />
        ))}

      {tab === "bank" &&
        (current ? (
          <div className="space-y-3">
            <button className="chip" onClick={() => setOpenPaper(null)}>
              ← All papers
            </button>
            <PaperRunner
              title={current.title}
              items={current.questions.map((q) =>
                current.kind === "mcq"
                  ? { kind: "mcq" as const, q: q as never }
                  : { kind: "qa" as const, q: q as never },
              )}
              topicId={topic.id}
              storageKey={`bank.${pid}.${current.id}`}
              guideHref={`/topic/${topic.id}`}
            />
          </div>
        ) : allPapers.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-3">
            {allPapers.map((p) => (
              <button
                key={p.id}
                onClick={() => setOpenPaper(p.id)}
                className="card p-4 text-left hover:-translate-y-0.5 transition"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{p.kind === "mcq" ? "🔘" : "✍️"}</span>
                  <div>
                    <div className="font-bold">{p.title}</div>
                    <div className="text-xs text-ink-soft">
                      {p.questions.length} {p.kind === "mcq" ? "multiple-choice" : "structured"}{" "}
                      questions
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <Empty />
        ))}

      {tab === "challenge" && (
        <ChallengeMode topicId={topic.id} questions={challengeQuestions(topic.id)} />
      )}
    </div>
  );
}

function Empty() {
  return (
    <div className="card p-6 text-center text-ink-soft">
      Questions for this topic are being prepared. Check back soon!
    </div>
  );
}
