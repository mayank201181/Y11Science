"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Account, Profile, ProgressDoc, SrsItem } from "./profileTypes";
import { emptyProgress, SRS_LADDER } from "./profileTypes";
import { todayKey, yesterdayKey, starsFor } from "./gamify";
import { getQuestion } from "./content";

type Status = "loading" | "anon" | "no-profile" | "ready";

interface RecordOpts {
  difficulty?: "warmup" | "core" | "challenge";
  hintsUsed?: number;
  topicId?: string;
  kind?: "quiz" | "challenge" | "review" | "exam";
}

interface StoreValue {
  status: Status;
  account: Account | null;
  activeProfile: Profile | null;
  progress: ProgressDoc;
  // auth
  refreshMe: () => Promise<void>;
  login: (familyName: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  signup: (
    familyName: string,
    password: string,
    pin: string,
  ) => Promise<{ ok: boolean; error?: string }>;
  logout: () => Promise<void>;
  // profiles
  selectProfile: (id: string) => void;
  addProfile: (name: string, avatar: string) => Promise<void>;
  editProfile: (id: string, name: string, avatar: string) => Promise<void>;
  deleteProfile: (id: string) => Promise<void>;
  // progress actions
  recordResult: (qid: string, correct: boolean, opts?: RecordOpts) => void;
  markGuideRead: (topicId: string) => void;
  recordChallenge: (topicId: string, score: number) => void;
  heartbeat: (minutes: number, topicId?: string) => void;
  setGoal: (minutes: number) => void;
  dueReviews: () => string[];
  isGuideRead: (topicId: string) => boolean;
}

const StoreCtx = createContext<StoreValue | null>(null);

const LS_PROFILE = "y11sci.activeProfile";
const lsProgressKey = (pid: string) => `y11sci.progress.${pid}`;

function scheduleSrs(srs: SrsItem[], qid: string, correct: boolean, now: number): SrsItem[] {
  const i = srs.findIndex((s) => s.qid === qid);
  if (correct) {
    if (i === -1) return srs; // not in pool, nothing to do
    const item = srs[i];
    const nextStep = item.step + 1;
    if (nextStep >= SRS_LADDER.length) {
      // graduated — remove from pool
      return srs.filter((s) => s.qid !== qid);
    }
    const updated = { ...item, step: nextStep, dueAt: now + SRS_LADDER[nextStep] * 86400000 };
    const copy = [...srs];
    copy[i] = updated;
    return copy;
  }
  // wrong -> due today (reset to step 0)
  if (i === -1) {
    return [...srs, { qid, step: 0, dueAt: now, lapses: 0 }];
  }
  const copy = [...srs];
  copy[i] = { ...copy[i], step: 0, dueAt: now, lapses: copy[i].lapses + 1 };
  return copy;
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<Status>("loading");
  const [account, setAccount] = useState<Account | null>(null);
  const [activeProfile, setActiveProfile] = useState<Profile | null>(null);
  const [progress, setProgress] = useState<ProgressDoc>(emptyProgress(""));
  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dirty = useRef(false);

  // ---- bootstrapping ----
  const refreshMe = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/me", { cache: "no-store" });
      if (!res.ok) {
        setAccount(null);
        setStatus("anon");
        return;
      }
      const data = await res.json();
      if (!data.account) {
        setAccount(null);
        setStatus("anon");
        return;
      }
      setAccount(data.account as Account);
    } catch {
      setAccount(null);
      setStatus("anon");
    }
  }, []);

  useEffect(() => {
    refreshMe();
  }, [refreshMe]);

  // Once we have an account, decide profile state.
  useEffect(() => {
    if (!account) return;
    const savedId = typeof window !== "undefined" ? localStorage.getItem(LS_PROFILE) : null;
    const prof = account.profiles.find((p) => p.id === savedId) || null;
    if (prof) {
      setActiveProfile(prof);
    } else {
      setActiveProfile(null);
      setStatus(account.profiles.length ? "no-profile" : "no-profile");
    }
  }, [account]);

  // Load progress for the active profile.
  useEffect(() => {
    if (!account || !activeProfile) return;
    let cancelled = false;
    (async () => {
      // optimistic from cache
      let cached: ProgressDoc | null = null;
      try {
        const raw = localStorage.getItem(lsProgressKey(activeProfile.id));
        if (raw) cached = JSON.parse(raw);
      } catch {}
      if (cached && !cancelled) setProgress(cached);
      try {
        const res = await fetch(`/api/progress?profileId=${activeProfile.id}`, {
          cache: "no-store",
        });
        if (res.ok) {
          const remote = (await res.json()) as ProgressDoc;
          if (!cancelled) {
            // take whichever is newer
            const use = !cached || remote.updatedAt >= cached.updatedAt ? remote : cached;
            setProgress({ ...emptyProgress(activeProfile.id), ...use });
          }
        } else if (!cached && !cancelled) {
          setProgress(emptyProgress(activeProfile.id));
        }
      } catch {
        if (!cached && !cancelled) setProgress(emptyProgress(activeProfile.id));
      }
      if (!cancelled) {
        setStatus("ready");
        // count a session + ensure streak day handled on entry
        bumpStreakAndSession();
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, activeProfile]);

  // ---- syncing ----
  const persistLocal = useCallback((doc: ProgressDoc) => {
    try {
      localStorage.setItem(lsProgressKey(doc.profileId), JSON.stringify(doc));
    } catch {}
  }, []);

  const queueSync = useCallback(() => {
    dirty.current = true;
    if (syncTimer.current) clearTimeout(syncTimer.current);
    syncTimer.current = setTimeout(async () => {
      if (!dirty.current) return;
      dirty.current = false;
      setProgress((cur) => {
        persistLocal(cur);
        fetch("/api/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cur),
        }).catch(() => {
          dirty.current = true; // retry next change
        });
        return cur;
      });
    }, 1200);
  }, [persistLocal]);

  // Mutate progress with a function then queue a sync.
  const mutate = useCallback(
    (fn: (p: ProgressDoc) => ProgressDoc) => {
      setProgress((cur) => {
        const next = fn(cur);
        next.updatedAt = Date.now();
        return next;
      });
      queueSync();
    },
    [queueSync],
  );

  function bumpStreakAndSession() {
    mutate((p) => {
      const today = todayKey();
      const next = { ...p };
      next.analytics = { ...p.analytics, sessions: p.analytics.sessions + 1 };
      if (p.streak.lastDay !== today) {
        const cont = p.streak.lastDay === yesterdayKey();
        next.streak = { count: cont ? p.streak.count + 1 : 1, lastDay: today };
      }
      return next;
    });
  }

  // ---- progress actions ----
  const recordResult = useCallback(
    (qid: string, correct: boolean, opts: RecordOpts = {}) => {
      mutate((p) => {
        const now = Date.now();
        const next: ProgressDoc = {
          ...p,
          attempts: { ...p.attempts },
          awarded: { ...p.awarded },
          analytics: {
            ...p.analytics,
            perTopic: { ...p.analytics.perTopic },
            perDay: { ...p.analytics.perDay },
            log: p.analytics.log,
          },
        };
        const prev = next.attempts[qid] || { correct: 0, total: 0 };
        next.attempts[qid] = {
          correct: prev.correct + (correct ? 1 : 0),
          total: prev.total + 1,
        };

        // award stars once per question (on first correct), AoPS hint bonus
        const idx = getQuestion(qid);
        const difficulty = opts.difficulty || idx?.question.difficulty;
        if (correct && !next.awarded[qid]) {
          const s = starsFor(difficulty, true, opts.hintsUsed ?? 0);
          next.awarded[qid] = s;
          next.stars = p.stars + s;
        }

        // SRS scheduling
        next.srs = scheduleSrs(p.srs, qid, correct, now);
        next.missed = next.srs.map((s) => s.qid);

        // analytics per topic + per day
        const topicId = opts.topicId || idx?.topicId;
        if (topicId) {
          const t = next.analytics.perTopic[topicId] || { answered: 0, correct: 0, minutes: 0 };
          next.analytics.perTopic[topicId] = {
            ...t,
            answered: t.answered + 1,
            correct: t.correct + (correct ? 1 : 0),
          };
        }
        const dk = todayKey(now);
        const day = next.analytics.perDay[dk] || { date: dk, minutes: 0, stars: 0, answered: 0 };
        next.analytics.perDay[dk] = {
          ...day,
          answered: day.answered + 1,
          stars: day.stars + (correct && !p.awarded[qid] ? next.awarded[qid] : 0),
        };
        return next;
      });
    },
    [mutate],
  );

  const markGuideRead = useCallback(
    (topicId: string) => {
      mutate((p) => {
        if (p.guidesRead.includes(topicId)) return p;
        const log = [
          { at: Date.now(), kind: "guide" as const, detail: `Read guide: ${topicId}` },
          ...p.analytics.log,
        ].slice(0, 80);
        return {
          ...p,
          guidesRead: [...p.guidesRead, topicId],
          stars: p.stars + 1,
          analytics: { ...p.analytics, log },
        };
      });
    },
    [mutate],
  );

  const recordChallenge = useCallback(
    (topicId: string, score: number) => {
      mutate((p) => {
        const best = Math.max(p.challengeBest[topicId] || 0, score);
        const log = [
          { at: Date.now(), kind: "challenge" as const, detail: `Challenge ${topicId}: ${score}` },
          ...p.analytics.log,
        ].slice(0, 80);
        return {
          ...p,
          challengeBest: { ...p.challengeBest, [topicId]: best },
          analytics: { ...p.analytics, log },
        };
      });
    },
    [mutate],
  );

  const heartbeat = useCallback(
    (minutes: number, topicId?: string) => {
      mutate((p) => {
        const dk = todayKey();
        const day = p.analytics.perDay[dk] || { date: dk, minutes: 0, stars: 0, answered: 0 };
        const perTopic = { ...p.analytics.perTopic };
        if (topicId) {
          const t = perTopic[topicId] || { answered: 0, correct: 0, minutes: 0 };
          perTopic[topicId] = { ...t, minutes: t.minutes + minutes };
        }
        return {
          ...p,
          analytics: {
            ...p.analytics,
            totalMinutes: p.analytics.totalMinutes + minutes,
            perDay: { ...p.analytics.perDay, [dk]: { ...day, minutes: day.minutes + minutes } },
            perTopic,
          },
        };
      });
    },
    [mutate],
  );

  const setGoal = useCallback(
    (minutes: number) => mutate((p) => ({ ...p, goalMinutes: minutes })),
    [mutate],
  );

  const dueReviews = useCallback(() => {
    const now = Date.now();
    return progress.srs.filter((s) => s.dueAt <= now).map((s) => s.qid);
  }, [progress.srs]);

  const isGuideRead = useCallback(
    (topicId: string) => progress.guidesRead.includes(topicId),
    [progress.guidesRead],
  );

  // ---- auth helpers ----
  const login = useCallback<StoreValue["login"]>(
    async (familyName, password) => {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ familyName, password }),
      });
      if (!res.ok) {
        const e = await res.json().catch(() => ({}));
        return { ok: false, error: e.error || "Login failed" };
      }
      await refreshMe();
      return { ok: true };
    },
    [refreshMe],
  );

  const signup = useCallback<StoreValue["signup"]>(
    async (familyName, password, pin) => {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ familyName, password, pin }),
      });
      if (!res.ok) {
        const e = await res.json().catch(() => ({}));
        return { ok: false, error: e.error || "Sign up failed" };
      }
      await refreshMe();
      return { ok: true };
    },
    [refreshMe],
  );

  const logout = useCallback(async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    if (typeof window !== "undefined") localStorage.removeItem(LS_PROFILE);
    setActiveProfile(null);
    setAccount(null);
    setStatus("anon");
  }, []);

  // ---- profile helpers ----
  const selectProfile = useCallback(
    (id: string) => {
      const prof = account?.profiles.find((p) => p.id === id) || null;
      if (prof) {
        localStorage.setItem(LS_PROFILE, id);
        setActiveProfile(prof);
        setStatus("loading");
      }
    },
    [account],
  );

  const addProfile = useCallback(
    async (name: string, avatar: string) => {
      const res = await fetch("/api/profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, avatar }),
      });
      if (res.ok) await refreshMe();
    },
    [refreshMe],
  );

  const editProfile = useCallback(
    async (id: string, name: string, avatar: string) => {
      const res = await fetch("/api/profiles", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, name, avatar }),
      });
      if (res.ok) await refreshMe();
    },
    [refreshMe],
  );

  const deleteProfile = useCallback(
    async (id: string) => {
      const res = await fetch("/api/profiles", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        if (activeProfile?.id === id) {
          localStorage.removeItem(LS_PROFILE);
          setActiveProfile(null);
        }
        await refreshMe();
      }
    },
    [refreshMe, activeProfile],
  );

  const value = useMemo<StoreValue>(
    () => ({
      status,
      account,
      activeProfile,
      progress,
      refreshMe,
      login,
      signup,
      logout,
      selectProfile,
      addProfile,
      editProfile,
      deleteProfile,
      recordResult,
      markGuideRead,
      recordChallenge,
      heartbeat,
      setGoal,
      dueReviews,
      isGuideRead,
    }),
    [
      status,
      account,
      activeProfile,
      progress,
      refreshMe,
      login,
      signup,
      logout,
      selectProfile,
      addProfile,
      editProfile,
      deleteProfile,
      recordResult,
      markGuideRead,
      recordChallenge,
      heartbeat,
      setGoal,
      dueReviews,
      isGuideRead,
    ],
  );

  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>;
}

export function useStore(): StoreValue {
  const v = useContext(StoreCtx);
  if (!v) throw new Error("useStore must be used within StoreProvider");
  return v;
}
