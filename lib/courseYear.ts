"use client";
// Optional ?year=10 filter for Year 10 IGCSE learners sharing the two-year IGCSE Science app.
// Default (no query param, clean session) returns null so Year 11 views are 100% unchanged.
import { useEffect, useSyncExternalStore } from "react";
import { TOPICS } from "./content";

export type CourseYear = 10 | 11;

const STORAGE_KEY = "igcse.courseYearFilter";
const CHANGE_EVENT = "igcse-course-year-change";

function readStoredYear(): 10 | null {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "10" ? 10 : null;
  } catch {
    return null;
  }
}

export function readCourseYearFilter(): 10 | null {
  if (typeof window === "undefined") return null;
  const param = new URLSearchParams(window.location.search).get("year");
  if (param === "10") return 10;
  if (param === "11" || param === "all") return null;
  return readStoredYear();
}

function subscribeCourseYear(onChange: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("popstate", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("popstate", onChange);
  };
}

export function setCourseYearFilter(next: 10 | null): void {
  if (typeof window === "undefined") return;
  try {
    if (next === 10) window.sessionStorage.setItem(STORAGE_KEY, "10");
    else window.sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore storage restrictions
  }
  try {
    const url = new URL(window.location.href);
    if (next === 10) url.searchParams.set("year", "10");
    else url.searchParams.delete("year");
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  } catch {
    // ignore history errors
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function useCourseYearFilter(): 10 | null {
  const active = useSyncExternalStore(subscribeCourseYear, readCourseYearFilter, () => null);
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("year");
    try {
      if (param === "10") {
        window.sessionStorage.setItem(STORAGE_KEY, "10");
      } else if (param === "11" || param === "all") {
        window.sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // ignore storage restrictions
    }
  }, [active]);
  return active;
}

const TOPIC_MAP = new Map(TOPICS.map((t) => [t.id, t]));

export function topicCourseYear(topicId: string): CourseYear {
  return TOPIC_MAP.get(topicId)?.courseYear ?? 11;
}

export function topicCourseOrder(topicId: string): number {
  return TOPIC_MAP.get(topicId)?.courseOrder ?? 999;
}

export function sortForYear10<T extends { id: string; courseYear?: CourseYear; courseOrder?: number }>(
  items: readonly T[],
): T[] {
  return [...items].sort((a, b) => {
    const ya = a.courseYear ?? topicCourseYear(a.id);
    const yb = b.courseYear ?? topicCourseYear(b.id);
    if (ya !== yb) return ya - yb;
    const oa = a.courseOrder ?? topicCourseOrder(a.id);
    const ob = b.courseOrder ?? topicCourseOrder(b.id);
    return oa - ob;
  });
}
