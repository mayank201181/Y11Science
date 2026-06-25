"use client";

import { useEffect, useState } from "react";
import type { MCQ, QA } from "@/lib/types";
import { useStore } from "@/lib/store";
import { Markdown } from "./Markdown";

// A timed challenge over a topic's challenge-difficulty questions. MCQs auto-mark;
// structured questions are self-marked. Earns a best-score record.
export function ChallengeMode({
  topicId,
  questions,
  seconds = 240,
}: {
  topicId: string;
  questions: (MCQ | QA)[];
  seconds?: number;
}) {
  const { recordChallenge, recordResult, progress } = useStore();
  const [started, setStarted] = useState(false);
  const [i, setI] = useState(0);
  const [left, setLeft] = useState(seconds);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);

  useEffect(() => {
    if (!started || done) return;
    if (left <= 0) {
      finish();
      return;
    }
    const t = setTimeout(() => setLeft((l) => l - 1), 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, left, done]);

  function finish() {
    setDone(true);
    recordChallenge(topicId, score);
  }

  if (questions.length === 0) {
    return (
      <div className="card p-5 text-center text-ink-soft">
        Challenge questions for this topic are coming soon.
      </div>
    );
  }

  if (!started) {
    return (
      <div className="card p-6 text-center space-y-3">
        <div className="text-4xl">⚡</div>
        <h3 className="text-xl font-black">Challenge mode</h3>
        <p className="text-ink-soft text-sm">
          {questions.length} of the toughest questions. Beat the clock — {Math.round(seconds / 60)}{" "}
          minutes. Best score: {progress.challengeBest[topicId] || 0}.
        </p>
        <button className="btn btn-primary" onClick={() => setStarted(true)}>
          Start challenge
        </button>
      </div>
    );
  }

  if (done) {
    return (
      <div className="card p-6 text-center space-y-2">
        <div className="text-4xl">🏁</div>
        <h3 className="text-xl font-black">Challenge over</h3>
        <p className="text-ink-soft">
          You scored {score} of {questions.length}.
        </p>
        <button
          className="btn btn-ghost"
          onClick={() => {
            setStarted(false);
            setDone(false);
            setI(0);
            setLeft(seconds);
            setScore(0);
            setPicked(null);
          }}
        >
          Try again
        </button>
      </div>
    );
  }

  const q = questions[i];
  const isMcq = "options" in q;

  function next(correct: boolean) {
    if (correct) setScore((s) => s + 1);
    recordResult(q.id, correct, { difficulty: "challenge", hintsUsed: 0, topicId, kind: "challenge" });
    setPicked(null);
    if (i + 1 >= questions.length) finish();
    else setI(i + 1);
  }

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="chip">
          {i + 1}/{questions.length}
        </span>
        <span className={`chip ${left < 30 ? "text-rose-300 border-rose-500/40" : ""}`}>
          ⏱️ {Math.floor(left / 60)}:{String(left % 60).padStart(2, "0")}
        </span>
        <span className="chip">⭐ {score}</span>
      </div>

      <div className="card p-5">
        <div className="font-semibold text-lg mb-3">
          <Markdown text={q.question} />
        </div>

        {isMcq ? (
          <div className="space-y-2">
            {(q as MCQ).options.map((opt, oi) => {
              const ans = (q as MCQ).answerIndex;
              let cls = "border-line bg-bg-soft";
              if (picked !== null) {
                if (oi === ans) cls = "border-emerald-500 bg-emerald-500/15";
                else if (oi === picked) cls = "border-rose-500 bg-rose-500/15";
              }
              return (
                <button
                  key={oi}
                  disabled={picked !== null}
                  onClick={() => setPicked(oi)}
                  className={`w-full text-left px-4 py-3 rounded-xl border ${cls}`}
                >
                  <span className="font-bold mr-2">{String.fromCharCode(65 + oi)}.</span>
                  {opt}
                </button>
              );
            })}
            {picked !== null && (
              <div className="text-sm rounded-lg bg-bg-soft border border-line p-3">
                {(q as MCQ).explanation}
                <div className="mt-2">
                  <button
                    className="btn btn-primary text-sm"
                    onClick={() => next(picked === (q as MCQ).answerIndex)}
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <QaChallenge q={q as QA} onResult={next} />
        )}
      </div>
    </div>
  );
}

function QaChallenge({ q, onResult }: { q: QA; onResult: (c: boolean) => void }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div>
      {!revealed ? (
        <button className="btn btn-primary" onClick={() => setRevealed(true)}>
          Reveal model answer
        </button>
      ) : (
        <div className="space-y-3">
          <div className="rounded-xl bg-bg-soft border border-line p-3 text-sm">
            <Markdown text={q.modelAnswer} />
          </div>
          <div className="flex gap-2">
            <button className="btn btn-primary text-sm" onClick={() => onResult(true)}>
              ✅ I had it
            </button>
            <button className="btn btn-ghost text-sm" onClick={() => onResult(false)}>
              🔴 Missed
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
