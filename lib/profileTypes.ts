// Types for cloud accounts, learner profiles and progress (local device guest + optional Vercel Blob sync).

export interface Account {
  id: string;
  familyName: string;
  passwordHash: string; // scrypt
  passwordSalt: string;
  pinHash: string; // parent PIN, scrypt
  pinSalt: string;
  createdAt: number;
  profiles: Profile[];
}

export interface Profile {
  id: string;
  name: string;
  avatar: string; // emoji
  createdAt: number;
}

/** One scheduled spaced-repetition item. */
export interface SrsItem {
  qid: string;
  step: number; // index into the SRS ladder
  dueAt: number; // epoch ms when this item is due
  lapses: number;
}

export interface DayActivity {
  date: string; // YYYY-MM-DD
  minutes: number;
  stars: number;
  answered: number;
}

export interface ActivityLogEntry {
  at: number;
  kind: "quiz" | "guide" | "challenge" | "review" | "exam" | "watch";
  detail: string;
}

export interface Analytics {
  totalMinutes: number;
  sessions: number;
  perDay: Record<string, DayActivity>; // keyed by YYYY-MM-DD
  perTopic: Record<string, { answered: number; correct: number; minutes: number }>;
  log: ActivityLogEntry[]; // most-recent-first, capped
}

export interface ProgressDoc {
  profileId: string;
  stars: number;
  awarded: Record<string, number>; // qid or watch key -> stars earned (so we never double-award)
  attempts: Record<string, { correct: number; total: number }>; // qid -> tally
  guidesRead: string[]; // topic ids
  missed: string[]; // qids currently in the review pool (legacy / quick lookup)
  challengeBest: Record<string, number>; // topicId -> best challenge score
  streak: { count: number; lastDay: string };
  srs: SrsItem[];
  goalMinutes: number; // daily goal
  analytics: Analytics;
  updatedAt: number;
}

export const SRS_LADDER = [1, 3, 7, 16, 35]; // days

export function emptyProgress(profileId: string): ProgressDoc {
  return {
    profileId,
    stars: 0,
    awarded: {},
    attempts: {},
    guidesRead: [],
    missed: [],
    challengeBest: {},
    streak: { count: 0, lastDay: "" },
    srs: [],
    goalMinutes: 20,
    analytics: { totalMinutes: 0, sessions: 0, perDay: {}, perTopic: {}, log: [] },
    updatedAt: 0,
  };
}

/** Defensively normalize any stored JSON object into a valid ProgressDoc. */
export function normalizeProgress(raw: unknown, fallbackProfileId: string): ProgressDoc {
  const base = emptyProgress(fallbackProfileId);
  if (!raw || typeof raw !== "object") return base;
  const r = raw as Partial<ProgressDoc>;
  const analyticsRaw = (r.analytics && typeof r.analytics === "object" ? r.analytics : {}) as Partial<Analytics>;
  const streakRaw = (r.streak && typeof r.streak === "object" ? r.streak : {}) as Partial<ProgressDoc["streak"]>;

  return {
    profileId: typeof r.profileId === "string" && r.profileId ? r.profileId : fallbackProfileId,
    stars: typeof r.stars === "number" && Number.isFinite(r.stars) ? Math.max(0, r.stars) : 0,
    awarded: r.awarded && typeof r.awarded === "object" ? { ...r.awarded } : {},
    attempts: r.attempts && typeof r.attempts === "object" ? { ...r.attempts } : {},
    guidesRead: Array.isArray(r.guidesRead) ? r.guidesRead.filter((x): x is string => typeof x === "string") : [],
    missed: Array.isArray(r.missed) ? r.missed.filter((x): x is string => typeof x === "string") : [],
    challengeBest: r.challengeBest && typeof r.challengeBest === "object" ? { ...r.challengeBest } : {},
    streak: {
      count: typeof streakRaw.count === "number" && Number.isFinite(streakRaw.count) ? Math.max(0, streakRaw.count) : 0,
      lastDay: typeof streakRaw.lastDay === "string" ? streakRaw.lastDay : "",
    },
    srs: Array.isArray(r.srs)
      ? r.srs.filter(
          (s): s is SrsItem =>
            Boolean(s && typeof s === "object" && typeof s.qid === "string" && typeof s.dueAt === "number"),
        )
      : [],
    goalMinutes:
      typeof r.goalMinutes === "number" && Number.isFinite(r.goalMinutes)
        ? Math.max(5, Math.min(120, Math.round(r.goalMinutes)))
        : 20,
    analytics: {
      totalMinutes:
        typeof analyticsRaw.totalMinutes === "number" && Number.isFinite(analyticsRaw.totalMinutes)
          ? Math.max(0, analyticsRaw.totalMinutes)
          : 0,
      sessions:
        typeof analyticsRaw.sessions === "number" && Number.isFinite(analyticsRaw.sessions)
          ? Math.max(0, analyticsRaw.sessions)
          : 0,
      perDay: analyticsRaw.perDay && typeof analyticsRaw.perDay === "object" ? { ...analyticsRaw.perDay } : {},
      perTopic: analyticsRaw.perTopic && typeof analyticsRaw.perTopic === "object" ? { ...analyticsRaw.perTopic } : {},
      log: Array.isArray(analyticsRaw.log) ? analyticsRaw.log.slice(0, 80) : [],
    },
    updatedAt: typeof r.updatedAt === "number" && Number.isFinite(r.updatedAt) ? r.updatedAt : 0,
  };
}
