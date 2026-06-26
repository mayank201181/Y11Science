"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { MCQ, QA } from "@/lib/types";
import { useStore } from "@/lib/store";
import { gradeAnswer } from "@/lib/grade";
import { Markdown } from "./Markdown";
import { AskAI } from "./AskAI";

export type QItem = { kind: "mcq"; q: MCQ } | { kind: "qa"; q: QA };

interface QState {
  selected?: number;
  checked?: boolean;
  revealedHints: number;
  answerText?: string;
  revealed?: boolean; // QA model answer revealed
  recorded?: boolean;
  selfVerdict?: "correct" | "partial" | "needs-work";
}

const DIFF_BADGE: Record<string, { label: string; cls: string }> = {
  warmup: { label: "Warm-up", cls: "text-emerald-300 border-emerald-500/40" },
  core: { label: "Core", cls: "text-sky-300 border-sky-500/40" },
  challenge: { label: "Challenge", cls: "text-amber-300 border-amber-500/40" },
};

export function PaperRunner({
  title,
  items,
  topicId,
  storageKey,
  guideHref,
}: {
  title: string;
  items: QItem[];
  topicId?: string;
  storageKey: string;
  guideHref?: string;
}) {
  const { recordResult } = useStore();
  const [idx, setIdx] = useState(0);
  const [states, setStates] = useState<Record<string, QState>>({});
  const [loaded, setLoaded] = useState(false);

  // resume
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setStates(JSON.parse(raw));
    } catch {}
    setLoaded(true);
  }, [storageKey]);

  useEffect(() => {
    if (loaded) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(states));
      } catch {}
    }
  }, [states, storageKey, loaded]);

  const cur = items[idx];
  const st = states[cur.q.id] || { revealedHints: 0 };

  const setSt = (patch: Partial<QState>) =>
    setStates((s) => ({ ...s, [cur.q.id]: { ...(s[cur.q.id] || { revealedHints: 0 }), ...patch } }));

  const done = useMemo(
    () => items.filter((it) => states[it.q.id]?.recorded).length,
    [items, states],
  );
  const correct = useMemo(
    () =>
      items.filter(
        (it) => states[it.q.id]?.recorded && states[it.q.id]?.selfVerdict === "correct",
      ).length,
    [items, states],
  );

  function record(isCorrect: boolean, verdict: QState["selfVerdict"]) {
    if (st.recorded) return;
    recordResult(cur.q.id, isCorrect, {
      difficulty: cur.q.difficulty,
      hintsUsed: st.revealedHints,
      topicId,
      kind: "quiz",
    });
    setSt({ recorded: true, selfVerdict: verdict });
  }

  // ---- MCQ check ----
  function checkMcq(optionIndex: number) {
    if (st.checked) return;
    const q = cur.q as MCQ;
    const isCorrect = optionIndex === q.answerIndex;
    setSt({ selected: optionIndex, checked: true });
    recordResult(q.id, isCorrect, {
      difficulty: q.difficulty,
      hintsUsed: st.revealedHints,
      topicId,
      kind: "quiz",
    });
    setStates((s) => ({
      ...s,
      [q.id]: {
        ...(s[q.id] || { revealedHints: 0 }),
        selected: optionIndex,
        checked: true,
        recorded: true,
        selfVerdict: isCorrect ? "correct" : "needs-work",
      },
    }));
  }

  const diff = cur.q.difficulty ? DIFF_BADGE[cur.q.difficulty] : null;
  const allDone = done === items.length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h2 className="text-xl font-black">{title}</h2>
        <div className="text-sm text-ink-soft">
          {done}/{items.length} done · {correct} ⭐ correct
        </div>
      </div>

      {/* navigator */}
      <div className="flex flex-wrap gap-1.5">
        {items.map((it, i) => {
          const s = states[it.q.id];
          const cls = s?.recorded
            ? s.selfVerdict === "correct"
              ? "bg-emerald-500 text-white"
              : s.selfVerdict === "partial"
                ? "bg-amber-500 text-white"
                : "bg-rose-500 text-white"
            : i === idx
              ? "bg-indigo-500 text-white"
              : "bg-bg-soft text-ink-soft";
          return (
            <button
              key={it.q.id}
              onClick={() => setIdx(i)}
              className={`w-8 h-8 rounded-lg text-xs font-bold border border-line ${cls}`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      {/* question card */}
      <div className="card p-5">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="chip">Q{idx + 1}</span>
          {diff && <span className={`chip ${diff.cls}`}>{diff.label}</span>}
          {cur.q.strategy && <span className="chip">🧠 {cur.q.strategy}</span>}
          {"marks" in cur.q && cur.q.marks ? <span className="chip">[{cur.q.marks} marks]</span> : null}
        </div>

        <div className="font-semibold text-lg">
          <Markdown text={cur.q.question} />
        </div>

        {cur.kind === "mcq" ? (
          <McqBody q={cur.q} st={st} onCheck={checkMcq} />
        ) : (
          <QaBody
            q={cur.q}
            st={st}
            setSt={setSt}
            onRecord={record}
          />
        )}

        {/* hint ladder */}
        {cur.q.hints && cur.q.hints.length > 0 && !st.recorded && (
          <div className="mt-4">
            {st.revealedHints > 0 && (
              <div className="space-y-1.5 mb-2">
                {cur.q.hints.slice(0, st.revealedHints).map((h, i) => (
                  <div
                    key={i}
                    className="text-sm rounded-lg bg-amber-500/10 border border-amber-500/30 px-3 py-2"
                  >
                    <span className="font-bold text-amber-300">Hint {i + 1}: </span>
                    {h}
                  </div>
                ))}
              </div>
            )}
            {st.revealedHints < cur.q.hints.length && (
              <button
                className="btn btn-ghost text-sm"
                onClick={() => setSt({ revealedHints: st.revealedHints + 1 })}
              >
                💡 {st.revealedHints === 0 ? "Need a hint?" : "Another hint"} (using more hints means
                fewer bonus stars)
              </button>
            )}
          </div>
        )}

        {/* AI help */}
        <div className="mt-4">
          <AskAI context={`Question: ${cur.q.question}`} compact />
        </div>

        {guideHref && cur.q.guideRef && (
          <div className="mt-3 text-sm">
            <Link href={guideHref} className="text-indigo-300 underline">
              ← Back to the guide: {cur.q.guideRef}
            </Link>
          </div>
        )}
      </div>

      {/* nav buttons */}
      <div className="flex justify-between">
        <button
          className="btn btn-ghost"
          onClick={() => setIdx((i) => Math.max(0, i - 1))}
          disabled={idx === 0}
        >
          ← Prev
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setIdx((i) => Math.min(items.length - 1, i + 1))}
          disabled={idx === items.length - 1}
        >
          Next →
        </button>
      </div>

      {allDone && (
        <div className="card p-5 text-center">
          <div className="text-3xl">🎉</div>
          <div className="font-black text-lg mt-1">Paper complete!</div>
          <p className="text-ink-soft text-sm">
            You got {correct} of {items.length} correct. Wrong answers will pop up again in your
            spaced-repetition review.
          </p>
        </div>
      )}
    </div>
  );
}

function McqBody({
  q,
  st,
  onCheck,
}: {
  q: MCQ;
  st: QState;
  onCheck: (i: number) => void;
}) {
  return (
    <div className="mt-4 space-y-2">
      {q.options.map((opt, i) => {
        const chosen = st.selected === i;
        const isAnswer = i === q.answerIndex;
        let cls = "border-line bg-bg-soft";
        if (st.checked) {
          if (isAnswer) cls = "border-emerald-500 bg-emerald-500/15";
          else if (chosen) cls = "border-rose-500 bg-rose-500/15";
        } else if (chosen) cls = "border-indigo-500 bg-indigo-500/15";
        return (
          <button
            key={i}
            disabled={st.checked}
            onClick={() => onCheck(i)}
            className={`w-full text-left px-4 py-3 rounded-xl border transition ${cls}`}
          >
            <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span>
            {opt}
            {st.checked && isAnswer && <span className="float-right">✓</span>}
            {st.checked && chosen && !isAnswer && <span className="float-right">✗</span>}
          </button>
        );
      })}
      {st.checked && (
        <div className="mt-2 rounded-xl bg-bg-soft border border-line p-3 text-sm">
          <span className="font-bold">
            {st.selected === q.answerIndex ? "Correct! " : "Not quite. "}
          </span>
          {q.explanation}
        </div>
      )}
    </div>
  );
}

function QaBody({
  q,
  st,
  setSt,
  onRecord,
}: {
  q: QA;
  st: QState;
  setSt: (p: Partial<QState>) => void;
  onRecord: (correct: boolean, verdict: QState["selfVerdict"]) => void;
}) {
  const grade = st.revealed && st.answerText ? gradeAnswer(st.answerText, q.markScheme) : null;

  return (
    <div className="mt-4">
      <textarea
        className="input min-h-[7rem]"
        placeholder="Write your answer here, then reveal the mark scheme…"
        value={st.answerText || ""}
        onChange={(e) => setSt({ answerText: e.target.value })}
        disabled={st.revealed}
      />

      {!st.revealed ? (
        <button className="btn btn-primary mt-2" onClick={() => setSt({ revealed: true })}>
          ✅ I&apos;ve tried — show the mark scheme
        </button>
      ) : (
        <div className="mt-3 space-y-3">
          {grade && (
            <div className="text-sm rounded-lg px-3 py-2 border bg-bg-soft border-line">
              Self-check suggestion: you matched <strong>{grade.matched.length}</strong> of{" "}
              {q.markScheme.length} marking points.
            </div>
          )}

          <div className="rounded-xl bg-bg-soft border border-line p-3">
            <div className="text-xs font-bold text-ink-soft mb-1">Mark scheme</div>
            <ul className="list-disc ml-5 text-sm space-y-1">
              {q.markScheme.map((m, i) => (
                <li key={i} className={grade?.matched.includes(m) ? "text-emerald-300" : ""}>
                  {m}
                  {grade?.matched.includes(m) ? " ✓" : ""}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-bg-soft border border-line p-3">
            <div className="text-xs font-bold text-ink-soft mb-1">Model answer</div>
            <Markdown text={q.modelAnswer} className="text-sm" />
          </div>

          {q.solutions?.map((sol, i) => (
            <div key={i} className="rounded-xl bg-bg-soft border border-line p-3">
              <div className="text-xs font-bold text-ink-soft mb-1">{sol.label}</div>
              <ol className="list-decimal ml-5 text-sm space-y-1">
                {sol.steps.map((s, j) => (
                  <li key={j}>{s}</li>
                ))}
              </ol>
            </div>
          ))}

          {q.commonError && (
            <p className="text-sm text-rose-300">⚠️ Common error: {q.commonError}</p>
          )}

          {!st.recorded ? (
            <div>
              <div className="text-sm font-semibold mb-1">How did you do? (honesty earns stars!)</div>
              <div className="flex flex-wrap gap-2">
                <button className="btn btn-primary text-sm" onClick={() => onRecord(true, "correct")}>
                  ✅ Got it
                </button>
                <button
                  className="btn btn-ghost text-sm"
                  onClick={() => onRecord(false, "partial")}
                >
                  🟡 Partly
                </button>
                <button
                  className="btn btn-ghost text-sm"
                  onClick={() => onRecord(false, "needs-work")}
                >
                  🔴 Missed it
                </button>
              </div>
            </div>
          ) : (
            <div className="text-sm text-ink-soft">Recorded — nice work. ⭐</div>
          )}
        </div>
      )}
    </div>
  );
}
