"use client";

import React, { useState } from "react";
import type { Topic } from "@/lib/types";
import { getMemoryVault } from "@/lib/memoryPitfalls";

/** Safely render inline <strong> and <em> markup from memoryPitfalls strings as React nodes. */
export function renderPitfallRichText(raw: string): React.ReactNode {
  if (!raw || (!raw.includes("<strong") && !raw.includes("<em"))) return raw;
  const tokens = raw.split(/(<strong>[\s\S]*?<\/strong>|<em>[\s\S]*?<\/em>)/g);
  return tokens.map((tok, i) => {
    if (tok.startsWith("<strong>") && tok.endsWith("</strong>")) {
      return (
        <strong key={i} className="font-extrabold text-ink">
          {tok.slice(8, -9)}
        </strong>
      );
    }
    if (tok.startsWith("<em>") && tok.endsWith("</em>")) {
      return (
        <em key={i} className="italic">
          {tok.slice(4, -5)}
        </em>
      );
    }
    return <React.Fragment key={i}>{tok}</React.Fragment>;
  });
}

export function MemoryPitfallsView({ topic }: { topic: Topic }) {
  const vault = getMemoryVault(topic.id);
  const [openChecks, setOpenChecks] = useState<Record<number, boolean>>({});

  if (!vault) {
    return (
      <div className="card p-6 text-center text-ink-soft">
        Memory hooks and examiner pitfalls for this topic are loading.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <section className="card p-5">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="chip">
            🧠 {vault.specCode} · {vault.specRefs}
          </span>
          <span className="text-xs text-ink-soft font-bold">
            {vault.mnemonics.length} Memory Hooks · {vault.pitfalls.length} Examiner Traps ·{" "}
            {vault.rapidChecks.length} Rapid Checks
          </span>
        </div>
        <h2 className="text-xl font-black mt-2">
          Edexcel Marks-Saver &amp; Examiner Pitfalls — {topic.title}
        </h2>
        <p className="text-sm text-ink-soft mt-1">
          Lock in the exact Pearson Edexcel ({vault.specCode}) mark-scheme phrasing before sitting
          timed papers. Examiners dock marks on vague everyday words even when your intuition is
          right.
        </p>
      </section>

      {/* Section 1: Examiner Sterling's Never Write This -> Write This Instead (Put front & center!) */}
      <section className="space-y-3">
        <h3 className="text-lg font-black">
          🛡️ Examiner Traps: &ldquo;Never Write This → Write This Instead&rdquo;
        </h3>
        <div className="space-y-3">
          {vault.pitfalls.map((p, idx) => (
            <div key={idx} className="card p-4 space-y-2.5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="chip">{p.spec}</span>
                <span className="text-xs font-bold tone-rose">{p.verdict}</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-rose-500/35 bg-rose-500/10 p-3">
                  <div className="text-xs font-extrabold tone-rose mb-1">
                    ❌ Loses Marks — Never Write This
                  </div>
                  <p className="text-sm font-semibold">
                    &ldquo;{renderPitfallRichText(p.wrong)}&rdquo;
                  </p>
                </div>
                <div className="rounded-xl border border-emerald-500/35 bg-emerald-500/10 p-3">
                  <div className="text-xs font-extrabold tone-emerald mb-1">
                    ✅ Earns Full Marks — Write This Instead
                  </div>
                  <p className="text-sm font-semibold">{renderPitfallRichText(p.right)}</p>
                </div>
              </div>
              {p.why && (
                <p className="text-xs text-ink-soft">
                  <strong className="text-ink">Examiner note:</strong>{" "}
                  {renderPitfallRichText(p.why)}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: High-Yield Mnemonics & Memory Hooks */}
      <section className="space-y-3">
        <h3 className="text-lg font-black">💡 High-Yield Memory Hooks &amp; Formula Rules</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {vault.mnemonics.map((m, idx) => (
            <div key={idx} className="card p-4 space-y-1.5">
              <div className="text-xs font-bold tone-indigo uppercase tracking-wide">
                {m.label}
              </div>
              <div className="font-black text-base">{renderPitfallRichText(m.hook)}</div>
              {m.detail && (
                <p className="text-xs text-ink-soft leading-relaxed">
                  {renderPitfallRichText(m.detail)}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Rapid-Fire Mark-Scheme Recall */}
      {vault.rapidChecks.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-lg font-black">⚡ Rapid-Fire Mark-Scheme Checks</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {vault.rapidChecks.map((rc, idx) => {
              const isOpen = Boolean(openChecks[idx]);
              return (
                <div key={idx} className="card p-4 flex flex-col justify-between gap-3">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="chip">Rapid Check #{idx + 1}</span>
                      <span className="chip tone-amber">[{rc.marks}]</span>
                    </div>
                    <div className="font-bold text-sm leading-snug">
                      {renderPitfallRichText(rc.q)}
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      className="btn btn-ghost text-xs w-full"
                      onClick={() =>
                        setOpenChecks((prev) => ({ ...prev, [idx]: !prev[idx] }))
                      }
                    >
                      {isOpen ? "🙈 Hide Mark Scheme" : "👀 Reveal Mark-Scheme Points"}
                    </button>

                    {isOpen && (
                      <div className="mt-3 rounded-xl bg-bg-soft border border-line p-3 space-y-2 text-xs">
                        <ul className="list-disc ml-4 space-y-1">
                          {rc.points.map((pt, j) => (
                            <li key={j} className="font-semibold">
                              {renderPitfallRichText(pt)}
                            </li>
                          ))}
                        </ul>
                        {rc.hook && (
                          <div className="pt-1.5 border-t border-line tone-indigo font-bold">
                            💡 {renderPitfallRichText(rc.hook)}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
