"use client";

// Shared building blocks for the per-topic Interactive-tab explorables.
// Keep widgets self-contained: local state from these controls → compute → render
// a result plus a plain-language caption explaining the science.

import type { ReactNode } from "react";

/** Card wrapper with a title. */
export function Wrap({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="card p-4">
      <div className="font-bold mb-3 flex items-center gap-2">🎛️ {title}</div>
      {children}
    </div>
  );
}

/** A labelled +/- stepper for integer parameters. */
export function Stepper({
  label,
  value,
  set,
  min,
  max,
  step = 1,
  suffix,
}: {
  label: string;
  value: number;
  set: (n: number) => void;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
}) {
  const clamp = (n: number) => Math.max(min, Math.min(max, n));
  return (
    <div className="flex items-center justify-between gap-2 py-1">
      <span className="text-sm">{label}</span>
      <div className="flex items-center gap-2">
        <button
          className="btn btn-ghost px-2.5 py-0.5 text-base leading-none"
          onClick={() => set(clamp(value - step))}
          disabled={value <= min}
          aria-label={`decrease ${label}`}
        >
          −
        </button>
        <span className="min-w-[3ch] text-center font-bold tabular-nums">
          {value}
          {suffix || ""}
        </span>
        <button
          className="btn btn-ghost px-2.5 py-0.5 text-base leading-none"
          onClick={() => set(clamp(value + step))}
          disabled={value >= max}
          aria-label={`increase ${label}`}
        >
          +
        </button>
      </div>
    </div>
  );
}

/** A labelled range slider. */
export function Slider({
  label,
  value,
  set,
  min,
  max,
  step = 1,
  display,
}: {
  label: string;
  value: number;
  set: (n: number) => void;
  min: number;
  max: number;
  step?: number;
  display?: string;
}) {
  return (
    <div className="py-1">
      <div className="flex items-center justify-between text-sm mb-1">
        <span>{label}</span>
        <span className="font-bold tabular-nums">{display ?? value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}

/** Segmented choice buttons. */
export function Choice<T extends string>({
  options,
  value,
  set,
}: {
  options: readonly T[];
  value: T;
  set: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => set(o)}
          className={`btn text-sm ${value === o ? "btn-primary" : "btn-ghost"}`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

/** A big live readout value with a label. */
export function Readout({ label, value, hint }: { label: string; value: ReactNode; hint?: string }) {
  return (
    <div className="rounded-xl bg-bg-soft border border-line p-3 text-center">
      <div className="text-xs text-ink-soft">{label}</div>
      <div className="text-xl font-black">{value}</div>
      {hint && <div className="text-xs text-ink-soft mt-0.5">{hint}</div>}
    </div>
  );
}

/** Plain-language explanation line under a widget. */
export function Caption({ children }: { children: ReactNode }) {
  return <p className="text-sm text-ink-soft mt-3">{children}</p>;
}
