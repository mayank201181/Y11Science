"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TOPICS, SUBJECTS, subjectMeta } from "@/lib/content";
import type { SubjectId } from "@/lib/types";
import { MEMORY_PITFALLS } from "@/lib/memoryPitfalls";
import { renderPitfallRichText } from "@/components/MemoryPitfallsView";
import { useHeartbeat } from "@/lib/useHeartbeat";

export default function MarksSaverVaultPage() {
  useHeartbeat();
  const [filter, setFilter] = useState<"all" | SubjectId>("all");
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<"pitfalls" | "mnemonics">("pitfalls");

  const stats = useMemo(() => {
    let pitfalls = 0;
    let mnemonics = 0;
    let checks = 0;
    for (const v of Object.values(MEMORY_PITFALLS)) {
      pitfalls += v.pitfalls.length;
      mnemonics += v.mnemonics.length;
      checks += v.rapidChecks.length;
    }
    return { pitfalls, mnemonics, checks };
  }, []);

  const filteredTopics = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TOPICS.filter((t) => {
      if (filter !== "all" && t.subject !== filter) return false;
      const v = MEMORY_PITFALLS[t.id];
      if (!v) return false;
      if (!q) return true;
      if (t.title.toLowerCase().includes(q) || v.specRefs.toLowerCase().includes(q)) return true;
      if (
        v.pitfalls.some(
          (p) =>
            p.wrong.toLowerCase().includes(q) ||
            p.right.toLowerCase().includes(q) ||
            p.verdict.toLowerCase().includes(q),
        )
      )
        return true;
      if (
        v.mnemonics.some(
          (m) => m.label.toLowerCase().includes(q) || m.hook.toLowerCase().includes(q),
        )
      )
        return true;
      return false;
    });
  }, [filter, query]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <Link href="/" className="chip">
          ← Home
        </Link>
        <div className="flex items-center gap-2 flex-wrap">
          <Link href="/formulas" className="chip tone-indigo">
            📐 Equations &amp; Tests Sheet
          </Link>
          <Link href="/exams" className="chip">
            📝 Sit Mock Papers
          </Link>
          <Link href="/topics" className="chip">
            📚 All 37 Topics
          </Link>
        </div>
      </div>

      <section className="card p-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="chip tone-emerald">
            🛡️ Edexcel IGCSE Triple Science · 4BI1 · 4CH1 · 4PH1
          </span>
          <span className="text-xs font-bold text-ink-soft">
            {stats.pitfalls} Examiner Traps · {stats.mnemonics} Memory Hooks · {stats.checks} Rapid
            Checks
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black">
          🛡️ Marks-Saver &amp; Examiner Pitfalls Vault
        </h1>
        <p className="text-sm text-ink-soft max-w-3xl">
          In Pearson Edexcel Triple Science, students often understand the concept yet drop 1–2
          marks per question on imprecise everyday phrasing (like writing &ldquo;heat kills
          enzymes&rdquo; or &ldquo;respiration produces energy&rdquo;). Use this vault to see
          side-by-side what loses marks vs exact full-mark Edexcel wording across all 37 topics.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          <button
            type="button"
            onClick={() => setTab("pitfalls")}
            className={`btn text-xs sm:text-sm py-2 px-4 ${
              tab === "pitfalls" ? "btn-primary" : "btn-ghost"
            }`}
          >
            ❌→✅ Never Write This → Write This Instead ({stats.pitfalls})
          </button>
          <button
            type="button"
            onClick={() => setTab("mnemonics")}
            className={`btn text-xs sm:text-sm py-2 px-4 ${
              tab === "mnemonics" ? "btn-primary" : "btn-ghost"
            }`}
          >
            💡 High-Yield Memory Hooks ({stats.mnemonics})
          </button>
        </div>
      </section>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`btn text-xs sm:text-sm py-2 px-3.5 ${
            filter === "all" ? "btn-primary" : "btn-ghost"
          }`}
        >
          All Subjects (37)
        </button>
        {SUBJECTS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setFilter(s.id)}
            className={`btn text-xs sm:text-sm py-2 px-3.5 ${
              filter === s.id ? "btn-primary" : "btn-ghost"
            }`}
          >
            {s.icon} {s.title}
          </button>
        ))}
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search mark-scheme traps (e.g. denatured, osmosis, intermolecular, anode)…"
          className="input flex-1 min-w-[220px] py-2 text-sm"
        />
      </div>

      {filteredTopics.length === 0 ? (
        <div className="card p-8 text-center text-ink-soft">
          No mark-scheme pitfalls matched &ldquo;{query}&rdquo;.
        </div>
      ) : (
        <div className="space-y-6">
          {filteredTopics.map((t) => {
            const vault = MEMORY_PITFALLS[t.id];
            const meta = subjectMeta(t.subject);
            const q = query.trim().toLowerCase();

            const pitfalls = q
              ? vault.pitfalls.filter(
                  (p) =>
                    t.title.toLowerCase().includes(q) ||
                    p.wrong.toLowerCase().includes(q) ||
                    p.right.toLowerCase().includes(q) ||
                    p.verdict.toLowerCase().includes(q),
                )
              : vault.pitfalls;

            const mnemonics = q
              ? vault.mnemonics.filter(
                  (m) =>
                    t.title.toLowerCase().includes(q) ||
                    m.label.toLowerCase().includes(q) ||
                    m.hook.toLowerCase().includes(q) ||
                    m.detail.toLowerCase().includes(q),
                )
              : vault.mnemonics;

            return (
              <section key={t.id} className={`card p-5 space-y-4 accent-${t.subject}`}>
                <div className="flex items-center justify-between gap-3 flex-wrap border-b border-line pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{t.icon}</span>
                    <div>
                      <div className="text-xs font-bold text-ink-soft">
                        {meta.icon} {vault.specRefs}
                      </div>
                      <h2 className="text-lg sm:text-xl font-black">{t.title}</h2>
                    </div>
                  </div>
                  <Link href={`/topic/${t.id}?tab=memory`} className="chip tone-indigo">
                    Open Topic &amp; Rapid Checks →
                  </Link>
                </div>

                {tab === "pitfalls" ? (
                  <div className="space-y-3">
                    {(pitfalls.length > 0 ? pitfalls : vault.pitfalls.slice(0, 2)).map((p, idx) => (
                      <div key={idx} className="rounded-xl bg-bg-soft border border-line p-3.5 space-y-2">
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
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-3">
                    {(mnemonics.length > 0 ? mnemonics : vault.mnemonics).map((m, idx) => (
                      <div key={idx} className="rounded-xl bg-bg-soft border border-line p-3.5 space-y-1">
                        <div className="text-xs font-bold tone-indigo uppercase">{m.label}</div>
                        <div className="font-black text-sm sm:text-base">
                          {renderPitfallRichText(m.hook)}
                        </div>
                        {m.detail && (
                          <p className="text-xs text-ink-soft leading-relaxed">
                            {renderPitfallRichText(m.detail)}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
