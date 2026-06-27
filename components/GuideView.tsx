"use client";

import { useState } from "react";
import type { Topic, GuideSection, SvgDiagram } from "@/lib/types";
import { Markdown } from "./Markdown";
import { AskAI } from "./AskAI";
import { getExtras } from "@/lib/extras";
import { useStore } from "@/lib/store";

function Diagram({ d }: { d: SvgDiagram }) {
  return (
    <figure className="my-3">
      <div className="diagram" dangerouslySetInnerHTML={{ __html: d.svg }} />
      <figcaption className="text-xs text-ink-soft mt-1 text-center">{d.caption}</figcaption>
    </figure>
  );
}

function Section({ s, topicTitle }: { s: GuideSection; topicTitle: string }) {
  const [revealed, setRevealed] = useState(false);

  function readAloud() {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const plain = `${s.heading}. ${s.body.replace(/[*#`>-]/g, " ")}`;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(plain);
    u.rate = 0.98;
    window.speechSynthesis.speak(u);
  }

  return (
    <section className="card p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-black">{s.heading}</h3>
        <button onClick={readAloud} className="chip shrink-0" title="Read aloud">
          🔊 Listen
        </button>
      </div>

      {s.discovery && (
        <div className="my-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3">
          <div className="text-xs font-bold text-amber-300 mb-1">🧩 Try this first</div>
          <Markdown text={s.discovery.problem} />
          {!revealed ? (
            <button className="btn btn-ghost text-sm mt-2" onClick={() => setRevealed(true)}>
              I&apos;ve had a think — reveal the idea
            </button>
          ) : (
            <div className="mt-2 border-t border-amber-500/20 pt-2">
              <Markdown text={s.discovery.idea} />
            </div>
          )}
        </div>
      )}

      <Markdown text={s.body} />

      {s.diagrams?.map((d, i) => <Diagram key={i} d={d} />)}

      {s.whyItWorks && (
        <div className="my-3 rounded-xl border border-sky-500/30 bg-sky-500/10 p-3">
          <div className="text-xs font-bold text-sky-300 mb-1">💡 Why does this work?</div>
          <Markdown text={s.whyItWorks} />
        </div>
      )}

      {s.strategies && s.strategies.length > 0 && (
        <div className="my-3">
          <div className="text-xs font-bold text-ink-soft mb-1">🧠 How to think about it</div>
          <div className="flex flex-wrap gap-1.5">
            {s.strategies.map((st, i) => (
              <span key={i} className="chip">
                {st}
              </span>
            ))}
          </div>
        </div>
      )}

      {s.keyPoints && s.keyPoints.length > 0 && (
        <div className="mt-3 rounded-xl bg-bg-soft border border-line p-3">
          <div className="text-xs font-bold text-ink-soft mb-1">Key points</div>
          <ul className="list-disc ml-5 text-sm space-y-1">
            {s.keyPoints.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
          </ul>
        </div>
      )}

      {s.thinkDeeper && (
        <p className="text-sm text-ink-soft mt-3 italic">🤔 Think deeper: {s.thinkDeeper}</p>
      )}

      <div className="mt-3">
        <AskAI context={`${topicTitle} — ${s.heading}`} compact />
      </div>
    </section>
  );
}

export function GuideView({
  topic,
  onOpenInteractive,
}: {
  topic: Topic;
  onOpenInteractive?: () => void;
}) {
  const { markGuideRead, isGuideRead } = useStore();
  const extras = getExtras(topic.id);
  const read = isGuideRead(topic.id);

  return (
    <div className="space-y-4">
      {extras?.hook && (
        <div className="card p-4 border-amber-500/30">
          <div className="text-sm">
            <span className="font-bold text-amber-300">Hook: </span>
            {extras.hook}
          </div>
        </div>
      )}

      <p className="text-ink-soft">{topic.intro}</p>

      {onOpenInteractive && (
        <button
          onClick={onOpenInteractive}
          className="card p-4 w-full text-left border-sky-500/30 hover:-translate-y-0.5 transition flex items-center gap-3"
        >
          <span className="text-2xl">🔬</span>
          <span>
            <span className="font-bold block">Explore this topic interactively</span>
            <span className="text-xs text-ink-soft">
              Open the Interactive tab — change the inputs and watch the science respond.
            </span>
          </span>
        </button>
      )}

      {topic.guide.map((s, i) => (
        <Section key={i} s={s} topicTitle={topic.title} />
      ))}

      {extras?.didYouKnow && extras.didYouKnow.length > 0 && (
        <section className="card p-5">
          <h3 className="text-lg font-black mb-2">🌟 Did you know?</h3>
          <ul className="space-y-2">
            {extras.didYouKnow.map((d, i) => (
              <li key={i} className="text-sm rounded-lg bg-bg-soft border border-line p-3">
                {d}
              </li>
            ))}
          </ul>
        </section>
      )}

      {extras?.experiments && extras.experiments.length > 0 && (
        <section className="card p-5">
          <h3 className="text-lg font-black mb-3">🧪 Try this at home</h3>
          <div className="space-y-3">
            {extras.experiments.map((ex, i) => (
              <details key={i} className="rounded-xl bg-bg-soft border border-line p-3">
                <summary className="font-bold cursor-pointer">{ex.title}</summary>
                <div className="mt-2 text-sm space-y-2">
                  <div>
                    <span className="font-semibold">You need: </span>
                    {ex.materials.join(", ")}
                  </div>
                  <ol className="list-decimal ml-5 space-y-1">
                    {ex.steps.map((st, j) => (
                      <li key={j}>{st}</li>
                    ))}
                  </ol>
                  <p className="text-ink-soft">
                    <span className="font-semibold">The science: </span>
                    {ex.science}
                  </p>
                  {ex.safety && <p className="text-rose-300 text-xs">⚠️ {ex.safety}</p>}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      {extras?.bonusDiagrams?.map((d, i) => (
        <div key={i} className="card p-4">
          <Diagram d={d} />
        </div>
      ))}

      <div className="card p-4 flex items-center justify-between gap-3">
        <div>
          <div className="font-bold">{read ? "Guide completed ✓" : "Finished reading?"}</div>
          <div className="text-xs text-ink-soft">
            {read ? "You earned a star for this guide." : "Mark as read to earn a star."}
          </div>
        </div>
        <button
          className={`btn ${read ? "btn-ghost" : "btn-primary"}`}
          onClick={() => markGuideRead(topic.id)}
          disabled={read}
        >
          {read ? "Done" : "Mark as read ⭐"}
        </button>
      </div>
    </div>
  );
}
