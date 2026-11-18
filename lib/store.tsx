"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Account, Profile, ProgressDoc, SrsItem } from "./profileTypes";
import { emptyProgress, normalizeProgress, SRS_LADDER } from "./profileTypes";
import { todayKey, yesterdayKey, starsFor } from "./gamify";
import { getQuestion } from "./content";

// Zero-Login Open Access: status is always "ready" once mounted (never blocks on "anon" / "no-profile").
export type Status = "loading" | "ready";
export type StoreMode = "guest" | "cloud";
export type ThemeMode = "light" | "dark";

export const GUEST_PROFILE_ID = "guest";
export const DEFAULT_GUEST_PROFILE: Profile = {
  id: GUEST_PROFILE_ID,
  name: "Vanishree",
  avatar: "👩‍🔬",
  createdAt: 0,
};

interface RecordOpts {
  difficulty?: "warmup" | "core" | "challenge";
  hintsUsed?: number;
  topicId?: string;
  kind?: "quiz" | "challenge" | "review" | "exam";
}

interface StoreValue {
  status: Status;
  mode: StoreMode;
  guest: boolean;
  account: Account | null;
  activeProfile: Profile | null;
  progress: ProgressDoc;
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
  // zero-login guest + optional cloud auth modal controls
  loadGuest: () => void;
  updateGuestProfile: (name: string, avatar: string) => void;
  resetGuestProgress: () => void;
  authModalOpen: boolean;
  profileModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  openProfileModal: () => void;
  closeProfileModal: () => void;
  // cloud auth
  refreshMe: () => Promise<void>;
  login: (familyName: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  signup: (
    familyName: string,
    password: string,
    pin: string,
  ) => Promise<{ ok: boolean; error?: string }>;
  logout: () => Promise<void>;
  // cloud profiles
  selectProfile: (id: string) => void;
  addProfile: (name: string, avatar: string) => Promise<void>;
  editProfile: (id: string, name: string, avatar: string) => Promise<void>;
  deleteProfile: (id: string) => Promise<void>;
  // progress actions
  recordResult: (qid: string, correct: boolean, opts?: RecordOpts) => void;
  markGuideRead: (topicId: string) => void;
  awardActivity: (key: string, stars: number, detail?: string) => void;
  recordChallenge: (topicId: string, score: number) => void;
  heartbeat: (minutes: number, topicId?: string) => void;
  setGoal: (minutes: number) => void;
  dueReviews: () => string[];
  isGuideRead: (topicId: string) => boolean;
}

const StoreCtx = createContext<StoreValue | null>(null);

const LS_PROFILE = "y11sci.activeProfile";
const LS_GUEST_PROFILE = "y11sci.guestProfile";
const LS_THEME = "y11sci.theme";
const lsProgressKey = (pid: string) => `y11sci.progress.${pid}`;

function readSavedGuestProfile(): Profile {
  try {
    if (typeof window === "undefined") return DEFAULT_GUEST_PROFILE;
    const raw = localStorage.getItem(LS_GUEST_PROFILE);
    if (!raw) return DEFAULT_GUEST_PROFILE;
    const parsed = JSON.parse(raw) as Partial<Profile>;
    return {
      id: GUEST_PROFILE_ID,
      name: typeof parsed.name === "string" && parsed.name.trim() ? parsed.name.trim() : DEFAULT_GUEST_PROFILE.name,
      avatar: typeof parsed.avatar === "string" && parsed.avatar ? parsed.avatar : DEFAULT_GUEST_PROFILE.avatar,
      createdAt: 0,
    };
  } catch {
    return DEFAULT_GUEST_PROFILE;
  }
}

function withDailySessionBump(doc: ProgressDoc): ProgressDoc {
  const today = todayKey();
  const next: ProgressDoc = {
    ...doc,
    analytics: { ...doc.analytics, sessions: doc.analytics.sessions + 1 },
  };
  if (doc.streak.lastDay !== today) {
    const cont = doc.streak.lastDay === yesterdayKey();
    next.streak = { count: cont ? doc.streak.count + 1 : 1, lastDay: today };
  }
  next.updatedAt = Date.now();
  return next;
}

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
  // Boot ready with default Vanishree profile so SSR + initial hydration never show a login blocker
  const [status, setStatus] = useState<Status>("ready");
  const [mode, setMode] = useState<StoreMode>("guest");
  const [account, setAccount] = useState<Account | null>(null);
  const [activeProfile, setActiveProfile] = useState<Profile | null>(DEFAULT_GUEST_PROFILE);
  const [progress, setProgress] = useState<ProgressDoc>(() => emptyProgress(GUEST_PROFILE_ID));
  const [theme, setThemeState] = useState<ThemeMode>("light");
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const modeRef = useRef<StoreMode>("guest");
  const accountRef = useRef<Account | null>(null);
  const progressRef = useRef<ProgressDoc>(progress);
  useLayoutEffect(() => {
    modeRef.current = mode;
    accountRef.current = account;
    progressRef.current = progress;
  });
  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dirtyCloud = useRef(false);

  const persistLocal = useCallback((doc: ProgressDoc) => {
    try {
      const pid = doc.profileId || GUEST_PROFILE_ID;
      localStorage.setItem(lsProgressKey(pid), JSON.stringify(doc));
    } catch {}
  }, []);

  const setTheme = useCallback((nextMode: ThemeMode) => {
    setThemeState(nextMode);
    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = nextMode;
    }
    try {
      localStorage.setItem(LS_THEME, nextMode);
    } catch {}
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: ThemeMode = prev === "light" ? "dark" : "light";
      if (typeof document !== "undefined") {
        document.documentElement.dataset.theme = next;
      }
      try {
        localStorage.setItem(LS_THEME, next);
      } catch {}
      return next;
    });
  }, []);

  // ---- Zero-Login Open Access: loadGuest() ----
  const loadGuest = useCallback(() => {
    const guestProf = readSavedGuestProfile();
    let doc = emptyProgress(GUEST_PROFILE_ID);
    try {
      const raw = localStorage.getItem(lsProgressKey(GUEST_PROFILE_ID));
      if (raw) {
        doc = normalizeProgress(JSON.parse(raw), GUEST_PROFILE_ID);
      }
    } catch {
      doc = emptyProgress(GUEST_PROFILE_ID);
    }
    doc = withDailySessionBump(doc);
    persistLocal(doc);
    modeRef.current = "guest";
    setMode("guest");
    setAccount(null);
    setActiveProfile(guestProf);
    setProgress(doc);
    setStatus("ready");
  }, [persistLocal]);

  const updateGuestProfile = useCallback((name: string, avatar: string) => {
    const trimmed = name.trim() || DEFAULT_GUEST_PROFILE.name;
    const updated: Profile = {
      id: GUEST_PROFILE_ID,
      name: trimmed,
      avatar: avatar || DEFAULT_GUEST_PROFILE.avatar,
      createdAt: 0,
    };
    try {
      localStorage.setItem(LS_GUEST_PROFILE, JSON.stringify(updated));
    } catch {}
    if (modeRef.current === "guest") {
      setActiveProfile(updated);
    }
  }, []);

  const resetGuestProgress = useCallback(() => {
    const fresh = withDailySessionBump(emptyProgress(GUEST_PROFILE_ID));
    persistLocal(fresh);
    if (modeRef.current === "guest") {
      setProgress(fresh);
    }
  }, [persistLocal]);

  // ---- Optional Cloud Sync ----
  const flushCloudNow = useCallback(() => {
    if (!dirtyCloud.current || modeRef.current !== "cloud" || !accountRef.current) return;
    dirtyCloud.current = false;
    const body = JSON.stringify(progressRef.current);
    fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: body.length < 60000,
    }).catch(() => {
      dirtyCloud.current = true;
    });
  }, []);

  const queueCloudSync = useCallback(() => {
    if (modeRef.current !== "cloud" || !accountRef.current) return;
    dirtyCloud.current = true;
    if (syncTimer.current) clearTimeout(syncTimer.current);
    syncTimer.current = setTimeout(() => {
      flushCloudNow();
    }, 1000);
  }, [flushCloudNow]);

  // Flush unsynced cloud work immediately on tab hide / iPad app switch
  useEffect(() => {
    const onHide = (e: Event) => {
      if (e.type === "pagehide" || document.visibilityState === "hidden") {
        flushCloudNow();
      }
    };
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", onHide);
    return () => {
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", onHide);
    };
  }, [flushCloudNow]);

  // Cross-tab localStorage sync so stars earned in another tab appear immediately
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (!e.newValue) return;
      const activePid = progressRef.current.profileId || GUEST_PROFILE_ID;
      if (e.key === lsProgressKey(activePid)) {
        try {
          setProgress(normalizeProgress(JSON.parse(e.newValue), activePid));
        } catch {}
      } else if (e.key === LS_GUEST_PROFILE && modeRef.current === "guest") {
        setActiveProfile(readSavedGuestProfile());
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // Load cloud profile progress (with local fallback if offline)
  const activateCloudProfile = useCallback(
    async (acct: Account, prof: Profile) => {
      modeRef.current = "cloud";
      setMode("cloud");
      setAccount(acct);
      setActiveProfile(prof);
      try {
        localStorage.setItem(LS_PROFILE, prof.id);
      } catch {}

      let cached: ProgressDoc | null = null;
      try {
        const raw = localStorage.getItem(lsProgressKey(prof.id));
        if (raw) cached = normalizeProgress(JSON.parse(raw), prof.id);
      } catch {}
      if (cached) setProgress(cached);

      try {
        const res = await fetch(`/api/progress?profileId=${encodeURIComponent(prof.id)}`, {
          cache: "no-store",
        });
        if (res.ok) {
          const remoteRaw = await res.json();
          const remote = normalizeProgress(remoteRaw, prof.id);
          const chosen = !cached || remote.updatedAt >= cached.updatedAt ? remote : cached;
          const bumped = withDailySessionBump(chosen);
          persistLocal(bumped);
          setProgress(bumped);
          setStatus("ready");
          queueCloudSync();
          return;
        }
      } catch {}

      const fallback = withDailySessionBump(cached ?? emptyProgress(prof.id));
      persistLocal(fallback);
      setProgress(fallback);
      setStatus("ready");
    },
    [persistLocal, queueCloudSync],
  );

  // ---- Bootstrapping: immediate local guest boot + non-blocking cloud session check ----
  const refreshMe = useCallback(async () => {
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 3000);
      const res = await fetch(`/api/auth/me?t=${Date.now()}`, {
        cache: "no-store",
        signal: ctrl.signal,
      }).finally(() => clearTimeout(timer));

      if (!res.ok) return;
      const data = await res.json();
      if (!data?.account) return;

      const acct = data.account as Account;
      acct.profiles = Array.isArray(acct.profiles) ? acct.profiles : [];
      setAccount(acct);

      let savedId: string | null = null;
      try {
        savedId = localStorage.getItem(LS_PROFILE);
      } catch {}
      const prof = acct.profiles.find((p) => p.id === savedId) || acct.profiles[0] || null;
      if (prof) {
        await activateCloudProfile(acct, prof);
      } else {
        // Signed in to a brand-new empty family account: keep guest active underneath & show picker modal
        setProfileModalOpen(true);
      }
    } catch {
      // Offline or unreachable: already running smoothly in loadGuest()!
    }
  }, [activateCloudProfile]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      await Promise.resolve();
      if (cancelled) return;
      try {
        const saved = localStorage.getItem(LS_THEME);
        const initial: ThemeMode = saved === "dark" ? "dark" : "light";
        setThemeState(initial);
        document.documentElement.dataset.theme = initial;
      } catch {
        document.documentElement.dataset.theme = "light";
      }
      // 1. Immediately hydrate local device progress ("Vanishree") with zero network wait
      loadGuest();
      // 2. Check in background if an optional cloud family cookie exists
      await refreshMe();
    })();
    return () => {
      cancelled = true;
    };
  }, [loadGuest, refreshMe]);

  // ---- Synchronous local persistence on EVERY mutation ----
  const mutate = useCallback(
    (fn: (p: ProgressDoc) => ProgressDoc) => {
      setProgress((cur) => {
        const next = { ...fn(cur), updatedAt: Date.now() };
        progressRef.current = next;
        // Write synchronously to localStorage so closing iPad Safari never loses a star or answer
        persistLocal(next);
        return next;
      });
      queueCloudSync();
    },
    [persistLocal, queueCloudSync],
  );

  // ---- progress actions ----
  const recordResult = useCallback(
    (qid: string, correct: boolean, opts: RecordOpts = {}) => {
      mutate((p) => {
        const now = Date.now();
        const today = todayKey(now);
        const cont = p.streak.lastDay === yesterdayKey();
        const streak =
          p.streak.lastDay === today
            ? p.streak
            : { count: cont ? p.streak.count + 1 : 1, lastDay: today };

        const next: ProgressDoc = {
          ...p,
          streak,
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

        const idx = getQuestion(qid);
        const difficulty = opts.difficulty || idx?.question.difficulty;
        if (correct && !next.awarded[qid]) {
          const s = starsFor(difficulty, true, opts.hintsUsed ?? 0);
          next.awarded[qid] = s;
          next.stars = p.stars + s;
        }

        next.srs = scheduleSrs(p.srs, qid, correct, now);
        next.missed = next.srs.map((s) => s.qid);

        const topicId = opts.topicId || idx?.topicId;
        if (topicId) {
          const t = next.analytics.perTopic[topicId] || { answered: 0, correct: 0, minutes: 0 };
          next.analytics.perTopic[topicId] = {
            ...t,
            answered: t.answered + 1,
            correct: t.correct + (correct ? 1 : 0),
          };
        }
        const day = next.analytics.perDay[today] || { date: today, minutes: 0, stars: 0, answered: 0 };
        next.analytics.perDay[today] = {
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
        const now = Date.now();
        const dk = todayKey(now);
        const day = p.analytics.perDay[dk] || { date: dk, minutes: 0, stars: 0, answered: 0 };
        const log = [
          { at: now, kind: "guide" as const, detail: `Read guide: ${topicId}` },
          ...p.analytics.log,
        ].slice(0, 80);
        return {
          ...p,
          guidesRead: [...p.guidesRead, topicId],
          stars: p.stars + 1,
          analytics: {
            ...p.analytics,
            perDay: { ...p.analytics.perDay, [dk]: { ...day, stars: day.stars + 1 } },
            log,
          },
        };
      });
    },
    [mutate],
  );

  const awardActivity = useCallback(
    (key: string, stars: number, detail?: string) => {
      mutate((p) => {
        if (p.awarded[key]) return p;
        const now = Date.now();
        const dk = todayKey(now);
        const day = p.analytics.perDay[dk] || { date: dk, minutes: 0, stars: 0, answered: 0 };
        const log = detail
          ? [{ at: now, kind: "watch" as const, detail }, ...p.analytics.log].slice(0, 80)
          : p.analytics.log;
        return {
          ...p,
          stars: p.stars + stars,
          awarded: { ...p.awarded, [key]: stars },
          analytics: {
            ...p.analytics,
            perDay: {
              ...p.analytics.perDay,
              [dk]: { ...day, stars: day.stars + stars },
            },
            log,
          },
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
    (minutes: number) =>
      mutate((p) => ({ ...p, goalMinutes: Math.max(5, Math.min(120, Math.round(minutes))) })),
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

  // ---- Optional Cloud Auth Helpers ----
  const login = useCallback<StoreValue["login"]>(
    async (familyName, password) => {
      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ familyName, password }),
        });
        if (!res.ok) {
          const e = await res.json().catch(() => ({}));
          return { ok: false, error: e.error || "Login failed" };
        }
        setAuthModalOpen(false);
        await refreshMe();
        return { ok: true };
      } catch {
        return { ok: false, error: "Could not reach server — offline progress is still saved locally." };
      }
    },
    [refreshMe],
  );

  const signup = useCallback<StoreValue["signup"]>(
    async (familyName, password, pin) => {
      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ familyName, password, pin }),
        });
        if (!res.ok) {
          const e = await res.json().catch(() => ({}));
          return { ok: false, error: e.error || "Sign up failed" };
        }
        setAuthModalOpen(false);
        await refreshMe();
        return { ok: true };
      } catch {
        return { ok: false, error: "Could not reach server — offline progress is still saved locally." };
      }
    },
    [refreshMe],
  );

  const logout = useCallback(async () => {
    flushCloudNow();
    await fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
    try {
      if (typeof window !== "undefined") localStorage.removeItem(LS_PROFILE);
    } catch {}
    setProfileModalOpen(false);
    setAuthModalOpen(false);
    // Return straight to Zero-Login Guest Mode ("Vanishree") — never trap on a login wall!
    loadGuest();
  }, [flushCloudNow, loadGuest]);

  // ---- Cloud Profile Helpers ----
  const selectProfile = useCallback(
    (id: string) => {
      const acct = accountRef.current;
      const prof = acct?.profiles.find((p) => p.id === id) || null;
      if (acct && prof) {
        setProfileModalOpen(false);
        void activateCloudProfile(acct, prof);
      }
    },
    [activateCloudProfile],
  );

  const addProfile = useCallback(
    async (name: string, avatar: string) => {
      const res = await fetch("/api/profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, avatar }),
      });
      if (!res.ok) {
        const e = await res.json().catch(() => ({}));
        throw new Error(e.error || "Could not save learner. Please try again.");
      }
      const data = await res.json();
      const acct = data.account as Account;
      setAccount(acct);
      const created = acct.profiles[acct.profiles.length - 1];
      if (created) {
        setProfileModalOpen(false);
        await activateCloudProfile(acct, created);
      }
    },
    [activateCloudProfile],
  );

  const editProfile = useCallback(async (id: string, name: string, avatar: string) => {
    const res = await fetch("/api/profiles", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name, avatar }),
    });
    if (!res.ok) {
      const e = await res.json().catch(() => ({}));
      throw new Error(e.error || "Could not update learner.");
    }
    const data = await res.json();
    const acct = data.account as Account;
    setAccount(acct);
    setActiveProfile((prev) => (prev && prev.id === id ? acct.profiles.find((p) => p.id === id) || prev : prev));
  }, []);

  const deleteProfile = useCallback(
    async (id: string) => {
      const res = await fetch("/api/profiles", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        const data = await res.json().catch(() => null);
        const acct = (data?.account as Account | undefined) || null;
        if (acct) setAccount(acct);
        if (activeProfile?.id === id) {
          try {
            localStorage.removeItem(LS_PROFILE);
          } catch {}
          const remaining = acct?.profiles || [];
          if (acct && remaining.length > 0) {
            await activateCloudProfile(acct, remaining[0]);
          } else {
            loadGuest();
          }
        }
      }
    },
    [activateCloudProfile, activeProfile, loadGuest],
  );

  const openAuthModal = useCallback(() => setAuthModalOpen(true), []);
  const closeAuthModal = useCallback(() => setAuthModalOpen(false), []);
  const openProfileModal = useCallback(() => setProfileModalOpen(true), []);
  const closeProfileModal = useCallback(() => setProfileModalOpen(false), []);

  const value = useMemo<StoreValue>(
    () => ({
      status,
      mode,
      guest: mode === "guest",
      account,
      activeProfile,
      progress,
      theme,
      setTheme,
      toggleTheme,
      loadGuest,
      updateGuestProfile,
      resetGuestProgress,
      authModalOpen,
      profileModalOpen,
      openAuthModal,
      closeAuthModal,
      openProfileModal,
      closeProfileModal,
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
      awardActivity,
      recordChallenge,
      heartbeat,
      setGoal,
      dueReviews,
      isGuideRead,
    }),
    [
      status,
      mode,
      account,
      activeProfile,
      progress,
      theme,
      setTheme,
      toggleTheme,
      loadGuest,
      updateGuestProfile,
      resetGuestProgress,
      authModalOpen,
      profileModalOpen,
      openAuthModal,
      closeAuthModal,
      openProfileModal,
      closeProfileModal,
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
      awardActivity,
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
