// Types for cloud accounts, learner profiles and progress (used with Vercel Blob sync).

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
  kind: "quiz" | "guide" | "challenge" | "review" | "exam";
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
  awarded: Record<string, number>; // qid -> stars earned (so we never double-award)
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
