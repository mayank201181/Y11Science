"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useParams, useSearchParams, notFound } from "next/navigation";
import { getTopic, subjectMeta, challengeQuestions } from "@/lib/content";
import { getMemoryVault } from "@/lib/memoryPitfalls";
import { useStore } from "@/lib/store";
import { useHeartbeat } from "@/lib/useHeartbeat";
import { GuideView } from "@/components/GuideView";
import { WatchTab, type WatchMode } from "@/components/WatchTab";
import { MemoryPitfallsView, renderPitfallRichText } from "@/components/MemoryPitfallsView";
import { CramSheet } from "@/components/CramSheet";
import { buildTopicCramPack } from "@/lib/cram";
import { LearnSmartView } from "@/components/Flashcards";
import { PaperRunner, type QItem } from "@/components/PaperRunner";
import { ChallengeMode } from "@/components/ChallengeMode";
import { InteractiveView } from "@/components/InteractiveWidgets";

type Tab =
  | "guide"
  | "watch"
  | "memory"
  | "cram"
  | "interactive"
  | "learn"
  | "quiz"
  | "bank"
  | "challenge";

const VALID_TABS: Tab[] = [
  "guide",
  "watch",
  "memory",
  "cram",
  "interactive",
  "learn",
  "quiz",
  "bank",
  "challenge",
];

const VALID_WATCH_MODES: WatchMode[] = ["masterclass", "sitcom", "comedy"];

export default function TopicPage() {
  return (
    <Suspense fallback={<div className="card p-6 text-center text-ink-soft">Loading topic…</div>}>
      <TopicPageRouter />
    </Suspense>
  );
}

const TAB_ALIASES: Record<string, Tab> = {
  practice: "quiz",
  practise: "quiz",
  pitfalls: "memory",
};

function TopicPageRouter() {
  const { id } = useParams<{ id: string }>();
  const sp = useSearchParams();
  const rawTab = sp.get("tab");
  const reqTab = rawTab ? (TAB_ALIASES[rawTab] ?? (rawTab as Tab)) : null;
  const reqMode = sp.get("mode") as WatchMode | null;
  const initialTab: Tab = reqTab && VALID_TABS.includes(reqTab) ? reqTab : "guide";
  const initialWatchMode: WatchMode =
    reqMode && VALID_WATCH_MODES.includes(reqMode) ? reqMode : "masterclass";

  return (
    <TopicPageContent
      key={`${id}:${initialTab}:${initialWatchMode}`}
      id={id}
      initialTab={initialTab}
      initialWatchMode={initialWatchMode}
    />
  );
}

function TopicPageContent({
  id,
  initialTab,
  initialWatchMode,
}: {
  id: string;
  initialTab: Tab;
  initialWatchMode: WatchMode;
}) {
  const topic = getTopic(id);
  const { activeProfile } = useStore();
  useHeartbeat(id);
  const [tab, setTab] = useState<Tab>(initialTab);
  const [openPaper, setOpenPaper] = useState<string | null>(null);

  if (!topic) return notFound();
  const meta = subjectMeta(topic.subject);
  const vault = getMemoryVault(topic.id);
  const topTrap = vault?.pitfalls[0] || null;
  const pid = activeProfile?.id || "guest";

  const quizItems: QItem[] = [
    ...topic.quiz.mcq.map((q) => ({ kind: "mcq" as const, q })),
    ...topic.quiz.qa.map((q) => ({ kind: "qa" as const, q })),
  ];

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "guide", label: "Guide", icon: "📖" },
    { id: "watch", label: "Watch", icon: "🎬" },
    { id: "cram", label: "Exam Cram", icon: "🚨" },
    { id: "memory", label: "Memory & Pitfalls", icon: "🧠" },
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
      <div className="flex items-center justify-between gap-2 flex-wrap text-sm print:hidden">
        <div className="flex items-center gap-2 flex-wrap">
          <Link href="/" className="chip">
            Home
          </Link>
          <Link href={`/subject/${topic.subject}`} className="chip">
            {meta.icon} {meta.title}
          </Link>
          <Link href="/topics" className="chip">
            📚 All Topics
          </Link>
        </div>
        <Link href={`/certificate/${topic.id}`} className="chip">
          🏅 Mastery Certificate
        </Link>
      </div>

      <header className="flex items-center gap-4">
        <span className="text-5xl">{topic.icon}</span>
        <div>
          <div className="text-xs font-bold tone-indigo">{vault?.specRefs || meta.title}</div>
          <h1 className="text-2xl sm:text-3xl font-black">{topic.title}</h1>
          <p className="text-ink-soft text-sm">{topic.blurb}</p>
        </div>
      </header>

      {/* Top Marks-Saver Callout so Vanishree immediately sees #1 Edexcel trap on every topic */}
      {tab !== "memory" && tab !== "cram" && topTrap && vault && (
        <div className="card p-4 border-emerald-500/35 space-y-2.5 print:hidden">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="chip tone-emerald">
              🛡️ #1 Edexcel Marks-Saver Trap · {topTrap.spec}
            </span>
            <div className="flex items-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => setTab("cram")}
                className="text-xs font-extrabold tone-rose underline"
              >
                🚨 Open Exam Cram Sheet →
              </button>
              <button
                type="button"
                onClick={() => setTab("memory")}
                className="text-xs font-extrabold tone-indigo underline"
              >
                See all {vault.pitfalls.length} traps &amp; {vault.mnemonics.length} hooks →
              </button>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
            <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-2.5">
              <span className="font-extrabold tone-rose block text-[0.7rem]">
                ❌ Loses Marks (Never Write):
              </span>
              <span className="font-semibold">
                &ldquo;{renderPitfallRichText(topTrap.wrong)}&rdquo;
              </span>
            </div>
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2.5">
              <span className="font-extrabold tone-emerald block text-[0.7rem]">
                ✅ Full Marks (Write Instead):
              </span>
              <span className="font-semibold">{renderPitfallRichText(topTrap.right)}</span>
            </div>
          </div>
        </div>
      )}

      {/* tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 -mx-1 px-1 print:hidden">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
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
        <GuideView
          topic={topic}
          onOpenInteractive={() => setTab("interactive")}
          onOpenWatch={() => setTab("watch")}
          onOpenMemory={() => setTab("memory")}
        />
      )}
      {tab === "watch" && (
        <WatchTab
          key={`${topic.id}-${initialWatchMode}`}
          topic={topic}
          initialMode={initialWatchMode}
        />
      )}
      {tab === "cram" && (
        <Suspense fallback={<div className="card p-6 text-ink-soft">Loading Exam Cram Sheet…</div>}>
          <CramSheet
            packs={[buildTopicCramPack(topic)]}
            singleTopicMode
            subjectLabel="Year 11 Triple Science"
            onPractise={() => setTab("bank")}
          />
        </Suspense>
      )}
      {tab === "memory" && <MemoryPitfallsView topic={topic} />}
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
            <button type="button" className="chip" onClick={() => setOpenPaper(null)}>
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
                type="button"
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
