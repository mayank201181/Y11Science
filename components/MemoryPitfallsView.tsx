"use client";

import { useState } from "react";
import type { Topic } from "@/lib/types";
import { getMemoryVault } from "@/lib/memoryPitfalls";

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
          <span className="chip">🧠 {vault.specCode} · {vault.specRefs}</span>
          <span className="text-xs text-ink-soft font-bold">
            {vault.mnemonics.length} Memory Hooks · {vault.pitfalls.length} Examiner Traps
          </span>
        </div>
        <h2 className="text-xl font-black mt-2">
          Memory Hooks &amp; Examiner Pitfalls — {topic.title}
        </h2>
        <p className="text-sm text-ink-soft mt-1">
          Lock in the high-yield Edexcel phrasing before attempting timed papers. Examiners dock
          marks on vague everyday words even when you understand the science.
        </p>
      </section>

      {/* Section 1: High-Yield Mnemonics & Memory Hooks */}
      <section className="space-y-3">
        <h3 className="text-lg font-black">💡 High-Yield Memory Hooks &amp; Formula Rules</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {vault.mnemonics.map((m, idx) => (
            <div key={idx} className="card p-4 space-y-1.5">
              <div className="text-xs font-bold tone-indigo uppercase tracking-wide">
                {m.label}
              </div>
              <div className="font-black text-base">{m.hook}</div>
              {m.detail && <p className="text-xs text-ink-soft leading-relaxed">{m.detail}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Examiner Sterling's Never Write This -> Write This Instead */}
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
                <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3">
                  <div className="text-xs font-extrabold tone-rose mb-1">
                    ❌ Losses Marks (Candidate Script)
                  </div>
                  <p className="text-sm font-semibold">&ldquo;{p.wrong}&rdquo;</p>
                </div>
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3">
                  <div className="text-xs font-extrabold tone-emerald mb-1">
                    ✅ Full-Mark Edexcel Wording
                  </div>
                  <p className="text-sm font-semibold">{p.right}</p>
                </div>
              </div>
              {p.why && (
                <p className="text-xs text-ink-soft">
                  <strong className="text-ink">Why it matters:</strong> {p.why}
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
                    <div className="font-bold text-sm leading-snug">{rc.q}</div>
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
                              {pt}
                            </li>
                          ))}
                        </ul>
                        {rc.hook && (
                          <div className="pt-1.5 border-t border-line tone-indigo font-bold">
                            💡 {rc.hook}
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
