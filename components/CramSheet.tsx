"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { TopicCramPack } from "@/lib/cram";
import { renderPitfallRichText } from "@/components/MemoryPitfallsView";

type SectionFilter = "all" | "mistakes" | "mustknow" | "myths" | "tricks" | "facts";

const SEL_EVENT = "y11sci-cram-sel-change";
const CHECK_EVENT = "y11sci-cram-check-change";
const CHECK_STORAGE_KEY = "y11sci.cram.mustknow.v1";

function subscribeEvent(evName: string, cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", cb);
  window.addEventListener(evName, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(evName, cb);
  };
}

function readLocal(key: string, fallback: string): string {
  if (typeof window === "undefined") return fallback;
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeLocal(key: string, val: string, evName: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, val);
    window.dispatchEvent(new Event(evName));
  } catch {
    // ignore storage errors
  }
}

export function CramSheet({
  packs,
  singleTopicMode = false,
  subjectLabel = "Year 11 Triple Science",
  onPractise,
}: {
  packs: TopicCramPack[];
  singleTopicMode?: boolean;
  subjectLabel?: string;
  onPractise?: () => void;
}) {
  const params = useSearchParams();
  const urlTopicsParam = params.get("topics");

  const storageKey = `y11sci.cram.selected.${subjectLabel
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}`;

  const rawSaved = useSyncExternalStore(
    (cb) => subscribeEvent(SEL_EVENT, cb),
    () => readLocal(storageKey, ""),
    () => "",
  );

  const rawChecks = useSyncExternalStore(
    (cb) => subscribeEvent(CHECK_EVENT, cb),
    () => readLocal(CHECK_STORAGE_KEY, "{}"),
    () => "{}",
  );

  const checkedMap = useMemo(() => {
    try {
      return JSON.parse(rawChecks) as Record<string, boolean>;
    } catch {
      return {};
    }
  }, [rawChecks]);

  const [urlOverrideUsed, setUrlOverrideUsed] = useState(false);
  const [sectionFilter, setSectionFilter] = useState<SectionFilter>("all");
  const [query, setQuery] = useState("");

  const allIds = useMemo(() => packs.map((p) => p.id), [packs]);

  const selectedIds: Set<string> = useMemo(() => {
    if (singleTopicMode) return new Set(allIds);
    if (urlTopicsParam && !urlOverrideUsed) {
      const fromUrl = urlTopicsParam
        .split(",")
        .map((s) => s.trim())
        .filter((id) => allIds.includes(id));
      if (fromUrl.length) return new Set(fromUrl);
    }
    if (rawSaved) {
      try {
        const parsed = JSON.parse(rawSaved) as string[];
        const valid = parsed.filter((id) => allIds.includes(id));
        if (valid.length) return new Set(valid);
      } catch {
        // ignore invalid saved json
      }
    }
    return new Set(allIds);
  }, [singleTopicMode, allIds, urlTopicsParam, urlOverrideUsed, rawSaved]);

  const updateSelection = (next: Set<string>) => {
    setUrlOverrideUsed(true);
    writeLocal(storageKey, JSON.stringify(Array.from(next)), SEL_EVENT);
  };

  const toggleTopic = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) {
      if (next.size > 1) next.delete(id);
    } else {
      next.add(id);
    }
    updateSelection(next);
  };

  const selectStrand = (strand: string) => {
    const strandIds = packs.filter((p) => p.strand === strand).map((p) => p.id);
    const allIn = strandIds.every((id) => selectedIds.has(id));
    if (allIn && selectedIds.size > strandIds.length) {
      const next = new Set(selectedIds);
      strandIds.forEach((id) => next.delete(id));
      updateSelection(next);
    } else {
      updateSelection(new Set(strandIds));
    }
  };

  const toggleMustKnow = (key: string) => {
    const next = { ...checkedMap, [key]: !checkedMap[key] };
    writeLocal(CHECK_STORAGE_KEY, JSON.stringify(next), CHECK_EVENT);
  };

  const strands = useMemo(
    () => Array.from(new Set(packs.map((p) => p.strand).filter(Boolean))),
    [packs],
  );

  const qNorm = query.trim().toLowerCase();
  const visiblePacks = useMemo(() => {
    return packs.filter((p) => {
      if (!selectedIds.has(p.id)) return false;
      if (!qNorm) return true;
      const hay = [
        p.title,
        p.strand,
        p.specRefs,
        ...p.examMistakes,
        ...p.mustKnow,
        ...p.misconceptions.flatMap((m) => [m.wrong, m.right, m.verdict ?? ""]),
        ...p.mnemonics.flatMap((m) => [m.topic, m.device, m.explanation]),
        ...p.keyFacts.flatMap((f) => [f.name, f.value]),
        ...p.questionTraps.flatMap((t) => [t.question, t.commonError]),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(qNorm);
    });
  }, [packs, selectedIds, qNorm]);

  const totalMistakes = visiblePacks.reduce(
    (s, p) => s + p.misconceptions.length + p.questionTraps.length,
    0,
  );
  const totalMustKnow = visiblePacks.reduce((s, p) => s + p.mustKnow.length, 0);

  return (
    <div className="space-y-6">
      {!singleTopicMode ? (
        <header className="card p-5 sm:p-6 space-y-4 border-rose-500/35">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="chip tone-rose">
                  🚨 {totalMistakes} Exam Traps &amp; Mark-Losers
                </span>
                <span className="chip tone-emerald">
                  ✅ {totalMustKnow} Edexcel Must-Knows &amp; Rapid Checks
                </span>
                <Link href="/formulas" className="chip tone-indigo print:hidden">
                  📐 Equations &amp; Tests Sheet
                </Link>
              </div>
              <h1 className="mt-2 text-2xl sm:text-3xl font-black">
                {subjectLabel} — Custom Exam Cram Sheet
              </h1>
              <p className="mt-1 text-sm text-ink-soft max-w-3xl">
                Have an upcoming school test or mock on just 3 or 4 topics? Tick{" "}
                <strong className="text-ink">only the topics in your test</strong> below — your
                custom Edexcel cram &amp; mark-savers sheet updates immediately and saves
                automatically on this device!
              </p>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="btn btn-ghost text-xs py-2 px-3.5 print:hidden shrink-0"
            >
              🖨️ Print / Save PDF
            </button>
          </div>

          <div className="space-y-3 rounded-2xl border border-line bg-bg-soft p-4 print:hidden">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-ink-soft">
                1. Pick Topics in Your Upcoming Test ({selectedIds.size} of {packs.length} selected)
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => updateSelection(new Set(allIds))}
                  className="chip"
                >
                  Select all ({packs.length})
                </button>
                <button
                  type="button"
                  onClick={() => updateSelection(new Set([allIds[0]]))}
                  className="chip"
                >
                  Clear to 1st
                </button>
                {strands.map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => selectStrand(st)}
                    className="chip tone-indigo"
                  >
                    Only {st}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {packs.map((p) => {
                const active = selectedIds.has(p.id);
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => toggleTopic(p.id)}
                    className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition ${
                      active
                        ? "border-indigo-500 bg-indigo-600 text-white shadow-sm"
                        : "border-line bg-card text-ink-soft hover:border-indigo-400 hover:text-ink"
                    }`}
                  >
                    <span aria-hidden>{p.icon}</span>
                    <span>{p.title}</span>
                    {active ? <span aria-hidden>✓</span> : null}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
            <div className="flex flex-wrap gap-1.5">
              {(
                [
                  ["all", "All Exam Notes"],
                  ["myths", "🕵️ Never Write → Write Instead"],
                  ["mistakes", "⚠️ What Loses Marks"],
                  ["mustknow", "✅ What Earns Marks"],
                  ["tricks", "🧩 Memory Tricks"],
                  ["facts", "📖 Key Terms & Facts"],
                ] as [SectionFilter, string][]
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSectionFilter(id)}
                  className={`btn text-xs py-1.5 px-3 ${
                    sectionFilter === id ? "btn-primary" : "btn-ghost"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter keywords across selected topics…"
              className="input sm:w-72 py-1.5 text-sm"
            />
          </div>
        </header>
      ) : (
        <div className="card p-4 sm:p-5 border-rose-500/35 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wider tone-rose">
              🚨 Rapid Pre-Test Cram &amp; Mark-Saver Sheet · {packs[0]?.specRefs}
            </div>
            <p className="text-sm text-ink-soft mt-0.5">
              Everything Edexcel examiners reward — and every red-pen trap that loses marks in{" "}
              <strong className="text-ink">{packs[0]?.title}</strong>.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 print:hidden">
            <Link
              href={`/cram?topics=${encodeURIComponent(packs[0]?.id ?? "")}`}
              className="btn btn-ghost text-xs py-2 px-3"
            >
              ➕ Combine 3–4 Topics for a Test
            </Link>
            <button
              type="button"
              onClick={() => window.print()}
              className="btn btn-ghost text-xs py-2 px-3"
            >
              🖨️ Print
            </button>
          </div>
        </div>
      )}

      {visiblePacks.length === 0 ? (
        <div className="card p-8 text-center text-ink-soft">
          No cram notes matched &ldquo;{query}&rdquo; in your selected topics.
        </div>
      ) : (
        <div className="space-y-8">
          {visiblePacks.map((pack) => (
            <article key={pack.id} className="card p-5 sm:p-6 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-2xl bg-bg-soft border border-line text-2xl shrink-0"
                    aria-hidden
                  >
                    {pack.icon}
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider tone-indigo">
                      {pack.specRefs}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black">{pack.title}</h2>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 print:hidden">
                  {!singleTopicMode ? (
                    <>
                      <Link
                        href={`/topic/${pack.id}?tab=guide`}
                        className="btn btn-ghost text-xs py-2 px-3"
                      >
                        📖 Guide
                      </Link>
                      <Link
                        href={`/topic/${pack.id}?tab=watch`}
                        className="btn btn-ghost text-xs py-2 px-3"
                      >
                        🎬 Watch
                      </Link>
                    </>
                  ) : null}
                  {onPractise ? (
                    <button
                      type="button"
                      onClick={onPractise}
                      className="btn btn-primary text-xs py-2 px-3.5"
                    >
                      🏦 Question Bank
                    </button>
                  ) : (
                    <Link
                      href={`/topic/${pack.id}?tab=bank`}
                      className="btn btn-primary text-xs py-2 px-3.5"
                    >
                      🏦 Question Bank
                    </Link>
                  )}
                </div>
              </div>

              {(sectionFilter === "all" || sectionFilter === "myths") &&
              pack.misconceptions.length > 0 ? (
                <section className="space-y-3">
                  <h3 className="flex items-center gap-2 text-base font-black">
                    <span aria-hidden>🕵️</span> Never Write This → Write This Instead (Edexcel
                    Wording)
                  </h3>
                  <div className="space-y-2.5">
                    {pack.misconceptions.map((m, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-line bg-bg-soft p-3 space-y-2"
                      >
                        {(m.spec || m.verdict) && (
                          <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
                            {m.spec && <span className="chip text-[0.68rem]">{m.spec}</span>}
                            {m.verdict && <span className="font-bold tone-rose">{m.verdict}</span>}
                          </div>
                        )}
                        <div className="grid gap-2.5 sm:grid-cols-2">
                          <div className="rounded-xl border border-rose-500/35 bg-rose-500/10 p-3 text-sm">
                            <div className="text-[11px] font-black uppercase tracking-wider tone-rose">
                              ❌ Loses the mark
                            </div>
                            <p className="mt-0.5 font-semibold">
                              &ldquo;{renderPitfallRichText(m.wrong)}&rdquo;
                            </p>
                          </div>
                          <div className="rounded-xl border border-emerald-500/35 bg-emerald-500/10 p-3 text-sm">
                            <div className="text-[11px] font-black uppercase tracking-wider tone-emerald">
                              ✅ Earns full marks
                            </div>
                            <p className="mt-0.5 font-semibold">{renderPitfallRichText(m.right)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}

              {(sectionFilter === "all" || sectionFilter === "mistakes") &&
              (pack.examMistakes.length > 0 || pack.questionTraps.length > 0) ? (
                <section className="space-y-3">
                  <h3 className="flex items-center gap-2 text-base font-black tone-rose">
                    <span aria-hidden>⚠️</span> Real Structured-Paper Mark Losers
                  </h3>
                  {pack.questionTraps.length > 0 ? (
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {pack.questionTraps.map((qt, i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-amber-500/35 bg-amber-500/10 p-3 text-xs space-y-1 break-inside-avoid"
                        >
                          <div className="font-bold text-ink">
                            When asked: {renderPitfallRichText(qt.question)}
                          </div>
                          <div className="font-semibold tone-rose">
                            ⚠️ Marks lost if: {renderPitfallRichText(qt.commonError)}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {pack.examMistakes.map((m, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs sm:text-sm"
                        >
                          <span className="font-black tone-rose shrink-0" aria-hidden>
                            ✗
                          </span>
                          <span>{renderPitfallRichText(m)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ) : null}

              {(sectionFilter === "all" || sectionFilter === "mustknow") &&
              pack.mustKnow.length > 0 ? (
                <section className="space-y-2.5">
                  <h3 className="flex items-center gap-2 text-base font-black tone-emerald">
                    <span aria-hidden>✅</span> What Examiners Award Marks For (&ldquo;Can
                    You…?&rdquo;)
                  </h3>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {pack.mustKnow.map((mk, i) => {
                      const ck = `${pack.id}:${i}`;
                      const isDone = Boolean(checkedMap[ck]);
                      return (
                        <li key={i}>
                          <label
                            className={`flex cursor-pointer items-start gap-2.5 rounded-xl border p-3 text-xs sm:text-sm transition ${
                              isDone
                                ? "border-emerald-500/50 bg-emerald-500/10"
                                : "border-line bg-bg-soft hover:border-indigo-400"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isDone}
                              onChange={() => toggleMustKnow(ck)}
                              className="mt-0.5 h-4 w-4 shrink-0 accent-emerald-600"
                            />
                            <span>{renderPitfallRichText(mk)}</span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              ) : null}

              {(sectionFilter === "all" || sectionFilter === "tricks") &&
              pack.mnemonics.length > 0 ? (
                <section className="space-y-2.5">
                  <h3 className="flex items-center gap-2 text-base font-black">
                    <span aria-hidden>🧩</span> Exam Memory Hooks &amp; Formula Rules
                  </h3>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {pack.mnemonics.map((m, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-amber-500/35 bg-amber-500/10 p-3.5 text-sm space-y-1"
                      >
                        <div className="text-xs font-extrabold tone-amber uppercase tracking-wide">
                          {m.topic}
                        </div>
                        <div className="font-black text-base">
                          {renderPitfallRichText(m.device)}
                        </div>
                        {m.explanation && (
                          <div className="text-xs text-ink-soft leading-relaxed">
                            {renderPitfallRichText(m.explanation)}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}

              {(sectionFilter === "all" || sectionFilter === "facts") &&
              pack.keyFacts.length > 0 ? (
                <section className="space-y-2.5">
                  <h3 className="flex items-center gap-2 text-base font-black">
                    <span aria-hidden>📖</span> Must-Memorise Definitions &amp; Key Points
                  </h3>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {pack.keyFacts.map((f, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-line bg-bg-soft p-3 text-sm"
                      >
                        <div className="text-xs font-extrabold tone-indigo">{f.name}</div>
                        <p className="mt-0.5 text-xs sm:text-sm font-medium">
                          {renderPitfallRichText(f.value)}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
