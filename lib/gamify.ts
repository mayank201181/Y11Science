// Ranks, helpers and SRS scheduling logic shared across the app.

export interface Rank {
  name: string;
  minStars: number;
  icon: string;
}

export const RANKS: Rank[] = [
  { name: "Lab Newcomer", minStars: 0, icon: "🧫" },
  { name: "Junior Scientist", minStars: 25, icon: "🔬" },
  { name: "Lab Technician", minStars: 75, icon: "⚗️" },
  { name: "Research Assistant", minStars: 150, icon: "🧪" },
  { name: "Science Scholar", minStars: 280, icon: "🎓" },
  { name: "IGCSE Master", minStars: 450, icon: "🏅" },
  { name: "Professor", minStars: 700, icon: "🧠" },
];

export function rankForStars(stars: number): { rank: Rank; next?: Rank; progress: number } {
  let rank = RANKS[0];
  for (const r of RANKS) if (stars >= r.minStars) rank = r;
  const next = RANKS.find((r) => r.minStars > stars);
  const progress = next
    ? (stars - rank.minStars) / (next.minStars - rank.minStars)
    : 1;
  return { rank, next, progress };
}

export function todayKey(now = Date.now()): string {
  return new Date(now).toISOString().slice(0, 10);
}

export function yesterdayKey(now = Date.now()): string {
  return new Date(now - 86400000).toISOString().slice(0, 10);
}

// Stars awarded for a question by difficulty and hints used (AoPS: fewer hints -> more stars).
export function starsFor(
  difficulty: "warmup" | "core" | "challenge" | undefined,
  correct: boolean,
  hintsUsed: number,
): number {
  if (!correct) return 0;
  const base = difficulty === "challenge" ? 3 : difficulty === "core" ? 2 : 1;
  const bonus = hintsUsed === 0 ? 1 : 0; // bonus star for solving with no hints
  return base + bonus;
}
