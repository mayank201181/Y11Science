"use client";
import { setCourseYearFilter } from "@/lib/courseYear";

export function CourseYearBanner({
  y10Count,
  y11Count,
  noun = "topics",
}: {
  y10Count: number;
  y11Count: number;
  noun?: string;
}) {
  return (
    <div
      data-course-year-banner="10"
      className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-indigo-500/35 bg-indigo-500/10 px-4 py-2.5 text-sm"
    >
      <div className="flex min-w-0 flex-wrap items-center gap-2">
        <span className="chip tone-indigo shrink-0 font-extrabold">Year 10 IGCSE</span>
        <span className="text-ink">
          Showing <strong>{y10Count} Year 10 {noun}</strong> first. {y11Count} Year 11 {noun} stay unlocked below.
        </span>
      </div>
      <button
        type="button"
        data-course-year-reset
        onClick={() => setCourseYearFilter(null)}
        className="btn btn-ghost shrink-0 py-1.5 px-3 text-xs font-bold tone-indigo hover:underline"
      >
        Show all equally
      </button>
    </div>
  );
}

export function Year11Divider({
  count,
  noun = "topics",
}: {
  count: number;
  noun?: string;
}) {
  return (
    <div className="flex items-center gap-3 pt-2">
      <div className="h-px flex-1 bg-line" aria-hidden />
      <span className="chip shrink-0 text-xs font-bold text-ink-soft">
        Later · Year 11 {noun} ({count}) — all unlocked
      </span>
      <div className="h-px flex-1 bg-line" aria-hidden />
    </div>
  );
}
