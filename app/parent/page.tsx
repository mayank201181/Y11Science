"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import type { ProgressDoc, Profile } from "@/lib/profileTypes";
import { getTopic } from "@/lib/content";
import { rankForStars } from "@/lib/gamify";
import { useStore, DEFAULT_GUEST_PROFILE } from "@/lib/store";

interface Learner {
  profile: Profile;
  progress: ProgressDoc;
}

export default function ParentPage() {
  const { guest, activeProfile, progress, setGoal, resetGuestProgress, openAuthModal } = useStore();
  const [pin, setPin] = useState("");
  const [learners, setLearners] = useState<Learner[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function unlock(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const res = await fetch("/api/parent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin }),
    });
    setBusy(false);
    if (!res.ok) {
      const e = await res.json().catch(() => ({}));
      setError(e.error || "Could not unlock.");
      return;
    }
    const data = await res.json();
    setLearners(data.learners);
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <Link href="/" className="chip">
          ← Home
        </Link>
        {guest && (
          <button type="button" onClick={openAuthModal} className="chip tone-indigo">
            ☁️ Optional Cloud Sync
          </button>
        )}
      </div>

      <header>
        <h1 className="text-3xl font-black">👪 Parent Dashboard</h1>
        <p className="text-ink-soft mt-1">
          {guest
            ? "Viewing progress saved automatically on this device. (Optional cloud family sync is available anytime.)"
            : "See how each cloud-synced learner is getting on. PIN protected."}
        </p>
      </header>

      {guest ? (
        <div className="space-y-6">
          <LearnerCard
            learner={{
              profile: activeProfile || DEFAULT_GUEST_PROFILE,
              progress,
            }}
          />

          <div className="card p-5 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <div className="font-bold text-sm">Daily study goal</div>
              <div className="text-xs text-ink-soft">
                Currently {progress.goalMinutes} minutes per day
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[15, 20, 30, 45, 60].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setGoal(m)}
                  className={`chip ${progress.goalMinutes === m ? "border-indigo-500 text-ink" : ""}`}
                >
                  {m} min
                </button>
              ))}
            </div>
          </div>

          <div className="card p-5 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <div className="font-bold text-sm">Reset local device progress</div>
              <div className="text-xs text-ink-soft">
                Clears stars, attempts, and spaced-repetition items on this browser only.
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                if (confirm("Reset all local progress on this device? This cannot be undone.")) {
                  resetGuestProgress();
                }
              }}
              className="btn btn-ghost text-xs tone-rose"
            >
              Reset device progress
            </button>
          </div>
        </div>
      ) : !learners ? (
        <form onSubmit={unlock} className="card p-6 max-w-sm">
          <label className="text-sm font-semibold text-ink-soft">Enter parent PIN</label>
          <input
            className="input mt-1 mb-3"
            inputMode="numeric"
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
            placeholder="••••"
          />
          {error && <div className="text-sm tone-rose mb-3">{error}</div>}
          <button className="btn btn-primary w-full" disabled={busy}>
            {busy ? "Checking…" : "Unlock"}
          </button>
        </form>
      ) : (
        <div className="space-y-8">
          {learners.map((l) => (
            <LearnerCard key={l.profile.id} learner={l} />
          ))}
        </div>
      )}
    </div>
  );
}

const WEEKDAY_LETTERS = ["S", "M", "T", "W", "T", "F", "S"] as const;
const emptySubscribe = () => () => {};

function LearnerCard({ learner }: { learner: Learner }) {
  const { profile, progress } = learner;
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const { rank } = rankForStars(progress.stars);
  const totalAnswered = Object.values(progress.attempts).reduce((n, a) => n + a.total, 0);
  const totalCorrect = Object.values(progress.attempts).reduce((n, a) => n + a.correct, 0);
  const accuracy = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  // last 7 days (computed after mount so SSR UTC and client timezone never diverge)
  const days: { date: string; minutes: number; letter: string }[] = [];
  if (mounted) {
    const now = new Date();
    for (let i = 6; i >= 0; i--) {
      const dt = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
      const y = dt.getFullYear();
      const m = String(dt.getMonth() + 1).padStart(2, "0");
      const day = String(dt.getDate()).padStart(2, "0");
      const d = `${y}-${m}-${day}`;
      days.push({
        date: d,
        minutes: Math.round(progress.analytics.perDay[d]?.minutes || 0),
        letter: WEEKDAY_LETTERS[dt.getDay()],
      });
    }
  }
  const maxMin = Math.max(10, ...days.map((d) => d.minutes));

  const topics = Object.entries(progress.analytics.perTopic)
    .map(([id, t]) => ({ id, title: getTopic(id)?.title || id, ...t }))
    .filter((t) => t.answered > 0)
    .sort((a, b) => b.answered - a.answered);

  return (
    <div className="card p-5">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">{profile.avatar}</span>
        <div>
          <div className="text-xl font-black">{profile.name}</div>
          <div className="text-sm text-ink-soft">
            {rank.icon} {rank.name} · ⭐ {progress.stars} · 🔥 {progress.streak.count} day streak
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        <Metric label="Time on task" value={`${Math.round(progress.analytics.totalMinutes)} min`} />
        <Metric label="Questions answered" value={String(totalAnswered)} />
        <Metric label="Accuracy" value={`${accuracy}%`} />
        <Metric label="Guides read" value={String(progress.guidesRead.length)} />
      </div>

      <div className="mb-5">
        <div className="text-sm font-bold mb-2">This week (minutes)</div>
        <div className="flex items-end gap-2 h-28">
          {days.map((d) => (
            <div key={d.date} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t bg-gradient-to-t from-indigo-600 to-violet-400"
                style={{ height: `${(d.minutes / maxMin) * 100}%`, minHeight: d.minutes ? 4 : 0 }}
                title={`${d.minutes} min`}
              />
              <div className="text-[0.6rem] text-ink-soft">{d.letter}</div>
            </div>
          ))}
        </div>
      </div>

      {topics.length > 0 && (
        <div className="mb-5">
          <div className="text-sm font-bold mb-2">By topic</div>
          <div className="space-y-1.5">
            {topics.slice(0, 12).map((t) => {
              const acc = t.answered ? Math.round((t.correct / t.answered) * 100) : 0;
              return (
                <div key={t.id} className="flex items-center gap-2 text-sm">
                  <div className="w-40 truncate text-ink-soft">{t.title}</div>
                  <div className="flex-1 h-2 rounded-full bg-bg overflow-hidden border border-line">
                    <div
                      className="h-full bg-emerald-500"
                      style={{ width: `${acc}%` }}
                    />
                  </div>
                  <div className="w-24 text-right text-xs text-ink-soft">
                    {t.correct}/{t.answered} · {acc}%
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {progress.analytics.log.length > 0 && (
        <div>
          <div className="text-sm font-bold mb-2">Recent activity</div>
          <ul className="text-xs text-ink-soft space-y-1">
            {progress.analytics.log.slice(0, 8).map((e, i) => (
              <li key={i}>
                {mounted ? new Date(e.at).toLocaleString("en-GB") : ""} — {e.detail}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-bg-soft border border-line p-3">
      <div className="text-lg font-black">{value}</div>
      <div className="text-xs text-ink-soft">{label}</div>
    </div>
  );
}
