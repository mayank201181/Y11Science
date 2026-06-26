"use client";

import { useState } from "react";
import type { LearnSmart } from "@/lib/types";
import { Markdown } from "./Markdown";

export function LearnSmartView({ learn }: { learn: LearnSmart }) {
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const cards = learn.flashcards;
  const card = cards[i];

  return (
    <div className="space-y-6">
      <section className="card p-5">
        <h3 className="text-lg font-black mb-2">⚡ Key facts</h3>
        <ul className="list-disc ml-5 space-y-1.5 text-sm">
          {learn.keyFacts.map((f, idx) => (
            <li key={idx}>{f}</li>
          ))}
        </ul>
      </section>

      {cards.length > 0 && (
        <section>
          <h3 className="text-lg font-black mb-2">🃏 Flashcards</h3>
          <button
            onClick={() => setFlipped((f) => !f)}
            className="card w-full p-8 min-h-[10rem] flex items-center justify-center text-center"
          >
            <div>
              <div className="text-xs text-ink-soft mb-2">
                {flipped ? "Answer" : "Question"} · {i + 1}/{cards.length}
              </div>
              <div className="text-lg font-bold">{flipped ? card.back : card.front}</div>
              <div className="text-xs text-ink-soft mt-3">Tap to flip</div>
            </div>
          </button>
          <div className="flex justify-between mt-3">
            <button
              className="btn btn-ghost"
              onClick={() => {
                setFlipped(false);
                setI((p) => (p - 1 + cards.length) % cards.length);
              }}
            >
              ← Prev
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                setFlipped(false);
                setI((p) => (p + 1) % cards.length);
              }}
            >
              Next →
            </button>
          </div>
        </section>
      )}

      {learn.keyTerms.length > 0 && (
        <section className="card p-5">
          <h3 className="text-lg font-black mb-3">📖 Key terms</h3>
          <dl className="space-y-2">
            {learn.keyTerms.map((t, idx) => (
              <div key={idx} className="rounded-lg bg-bg-soft border border-line p-3">
                <dt className="font-bold">{t.term}</dt>
                <dd className="text-sm text-ink-soft mt-0.5">
                  <Markdown text={t.definition} />
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}
    </div>
  );
}
