"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import { ALL_TOPICS, SUBJECTS, topicsBySubject, totalQuestionCount } from "@/lib/content";
import { rankForStars } from "@/lib/gamify";
import { useHeartbeat } from "@/lib/useHeartbeat";
import { masterclassDoneKey, sitcomDoneKey } from "@/components/WatchTab";

export default function Home() {
  const { activeProfile, progress, dueReviews } = useStore();
  useHeartbeat();
  const { rank, next, progress: rp } = rankForStars(progress.stars);
  const due = dueReviews().length;
  const totalQ = totalQuestionCount();
  const watchedCount = ALL_TOPICS.filter(
    (t) =>
      Boolean(progress.awarded[masterclassDoneKey(t.id)]) ||
      Boolean(progress.awarded[sitcomDoneKey(t.id)]),
  ).length;

  return (
    <div className="space-y-8">
      <section className="card p-6 sm:p-8 overflow-hidden relative">
        <div className="relative z-10">
          <p className="text-ink-soft font-semibold">
            Hi {activeProfile?.name || "Scientist"} 👋
          </p>
          <h1 className="text-3xl sm:text-4xl font-black mt-1">Year 11 Triple Science Lab</h1>
          <p className="text-ink-soft mt-2 max-w-2xl">
            Pearson Edexcel IGCSE Biology (4BI1), Chemistry (4CH1) &amp; Physics (4PH1) — 37
            illustrated topic guides, 37 narrated Studio Masterclass whiteboards, 37 Cartoon Sitcom
            episodes, Memory &amp; Examiner Pitfall vaults, and {totalQ.toLocaleString()}+ practice
            questions.
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

      <section>
        <h2 className="text-xl font-black mb-3">Choose a subject</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {SUBJECTS.map((s) => {
            const topics = topicsBySubject(s.id);
            const read = topics.filter((t) => progress.guidesRead.includes(t.id)).length;
            const watched = topics.filter(
              (t) =>
                Boolean(progress.awarded[masterclassDoneKey(t.id)]) ||
                Boolean(progress.awarded[sitcomDoneKey(t.id)]),
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
        <h2 className="text-xl font-black mb-3">Watch, Revise &amp; Track</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <ExternalQuickCard
            href="/masterclass/index.html"
            icon="🎓"
            title="Studio Masterclasses"
            desc="37 narrated 60fps whiteboard lessons + checks"
          />
          <ExternalQuickCard
            href="/season1/index.html"
            icon="🍿"
            title="Cartoon Sitcom TV"
            desc="37 teen-comedy episodes + Examiner Roast"
          />
          <QuickCard
            href="/progress"
            icon="📊"
            title="Progress & Certificates"
            desc="37-topic mastery matrix & printable awards"
          />
          <QuickCard
            href="/review"
            icon="🔁"
            title="Daily review"
            desc={due > 0 ? `${due} questions due now` : "Spaced repetition — nothing due"}
          />
          <QuickCard href="/exams" icon="📝" title="Mock exams" desc="Full cross-topic papers" />
          <QuickCard href="/parent" icon="👪" title="Parent dashboard" desc="PIN-protected analytics" />
        </div>
      </section>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: string; label: string; value: number }) {
  return (
    <div className="px-3 py-2 rounded-xl bg-bg-soft border border-line">
      <div className="text-lg font-black">
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

function ExternalQuickCard({
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
    <a href={href} className="card p-4 flex items-center gap-3 hover:-translate-y-0.5 transition">
      <span className="text-2xl">{icon}</span>
      <div>
        <div className="font-bold">{title}</div>
        <div className="text-xs text-ink-soft">{desc}</div>
      </div>
    </a>
  );
}
