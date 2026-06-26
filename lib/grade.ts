// Lightweight self-assessment of written answers against a keyword mark scheme.
// Not a real marker — it nudges the learner toward an honest self-check.

export type GradeVerdict = "correct" | "partial" | "needs-work";

export interface GradeResult {
  verdict: GradeVerdict;
  matched: string[];
  missed: string[];
  score: number; // 0..1 fraction of mark-scheme points hit
}

function normalise(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s+\-/]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// A mark-scheme point may list acceptable alternatives separated by " / ".
// The point is hit if ANY alternative's key words appear in the answer.
function pointHit(answer: string, point: string): boolean {
  const alts = point.split("/").map((a) => normalise(a)).filter(Boolean);
  for (const alt of alts) {
    const words = alt.split(" ").filter((w) => w.length > 2);
    if (words.length === 0) continue;
    const hits = words.filter((w) => answer.includes(w)).length;
    // hit if most key words of this alternative are present
    if (hits / words.length >= 0.6) return true;
  }
  return false;
}

export function gradeAnswer(answer: string, markScheme: string[]): GradeResult {
  const a = normalise(answer);
  const matched: string[] = [];
  const missed: string[] = [];
  if (a.length === 0) {
    return { verdict: "needs-work", matched: [], missed: markScheme, score: 0 };
  }
  for (const point of markScheme) {
    if (pointHit(a, point)) matched.push(point);
    else missed.push(point);
  }
  const score = markScheme.length ? matched.length / markScheme.length : 0;
  let verdict: GradeVerdict = "needs-work";
  if (score >= 0.75) verdict = "correct";
  else if (score >= 0.4) verdict = "partial";
  return { verdict, matched, missed, score };
}
