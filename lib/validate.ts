// ---------------------------------------------------------------------------
// Structural & exam-hygiene validation of all 37 IGCSE Science topics and
// 3 comprehensive subject exams. Pure TypeScript — no React, no Next.
// ---------------------------------------------------------------------------
import type { ComprehensiveExam, MCQ, QA, Topic } from "./types";
import { gradeAnswer } from "./grade";

export interface Issue {
  where: string;
  problem: string;
}

const CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\t]/;
const BAD_INTERPOLATION = /\bundefined\b|\bNaN\b|\[object Object\]/;
const BANNED_OPTIONS =
  /\b(?:all(?:\s+\w+)?|none)\s+of\s+the\s+above\b|\bboth\s+[A-D]\s+and\s+[A-D]\b/i;
// Catch positional references (e.g. "Option A", "Choice B", "the first option", or clause-leading "A) ...")
// without false-positiving on scientific parentheticals like "(°C)", "(A)", "(blood group A)".
const POSITIONAL_REF =
  /\b(?:option|answer|choice)\s*\(?[A-D]\)?(?![a-z])|(?:^|[.!?;:\n]\s*)[A-D]\)\s|\bthe (?:first|second|third|fourth|last) (?:option|answer|choice)\b/i;

/** Maximum allowed ratio of correct option length to the longest distractor length. */
export const MAX_CORRECT_LENGTH_RATIO = 1.6;

export function checkText(where: string, s: unknown, issues: Issue[]): void {
  if (typeof s !== "string") {
    issues.push({ where, problem: `expected string, got ${typeof s}` });
    return;
  }
  if (!s.trim()) {
    issues.push({ where, problem: "empty string" });
    return;
  }
  if (CONTROL.test(s)) {
    issues.push({ where, problem: "contains a control character or tab (bad escape?)" });
  }
  if (BAD_INTERPOLATION.test(s)) {
    issues.push({ where, problem: "contains undefined/NaN/[object Object]" });
  }
}

export function checkSvg(where: string, svg: unknown, issues: Issue[]): void {
  if (typeof svg !== "string") {
    issues.push({ where, problem: "diagram is not a string" });
    return;
  }
  if (!/^\s*<svg[\s>]/.test(svg)) issues.push({ where, problem: "diagram must start with <svg" });
  if (!/<\/svg>\s*$/.test(svg)) issues.push({ where, problem: "diagram must end with </svg>" });
  if (/<script|on[a-z]+=/i.test(svg)) issues.push({ where, problem: "svg contains script/event handler" });
  if (svg.includes("`") || svg.includes("${")) issues.push({ where, problem: "svg contains a backtick or ${" });
}

export function checkMcq(where: string, q: MCQ, issues: Issue[]): void {
  checkText(`${where}.question`, q.question, issues);
  checkText(`${where}.explanation`, q.explanation, issues);

  if (!Array.isArray(q.options) || q.options.length !== 4) {
    issues.push({ where, problem: `MCQ must have exactly 4 options (got ${q.options?.length ?? 0})` });
    return;
  }

  q.options.forEach((opt, i) => {
    checkText(`${where}.options[${i}]`, opt, issues);
    if (/^[A-D]$/i.test(opt.trim())) {
      issues.push({ where: `${where}.options[${i}]`, problem: "bare letter option breaks when shuffled" });
    }
  });

  // Duplicate options check (normalised whitespace + case-insensitive)
  const norm = q.options.map((o) => o.replace(/\s+/g, "").toLowerCase());
  if (new Set(norm).size !== norm.length) {
    issues.push({ where, problem: `duplicate options: ${JSON.stringify(q.options)}` });
  }

  if (!Number.isInteger(q.answerIndex) || q.answerIndex < 0 || q.answerIndex >= q.options.length) {
    issues.push({ where, problem: `answerIndex out of range (${q.answerIndex})` });
    return;
  }

  if (BANNED_OPTIONS.test(q.options.join(" "))) {
    issues.push({
      where,
      problem: "'all/none of the above' or 'both A and B' breaks when options are shuffled",
    });
  }

  if (POSITIONAL_REF.test(q.explanation)) {
    issues.push({
      where,
      problem: "explanation refers to an option by letter/position (options are shuffled)",
    });
  }
  q.hints?.forEach((h, hi) => {
    checkText(`${where}.hints[${hi}]`, h, issues);
    if (POSITIONAL_REF.test(h)) {
      issues.push({
        where: `${where}.hints[${hi}]`,
        problem: "hint refers to an option by letter/position (options are shuffled)",
      });
    }
  });

  // Rule (a): correct option must not be conspicuously longer than the longest distractor (> 1.6x)
  const correctLen = q.options[q.answerIndex].trim().length;
  const longestDistractor = Math.max(
    ...q.options.filter((_, i) => i !== q.answerIndex).map((o) => o.trim().length),
  );
  if (longestDistractor > 0 && correctLen > MAX_CORRECT_LENGTH_RATIO * longestDistractor) {
    issues.push({
      where,
      problem: `correct option is conspicuously longest (${correctLen} chars vs longest distractor ${longestDistractor} chars, ratio ${(correctLen / longestDistractor).toFixed(2)}x > ${MAX_CORRECT_LENGTH_RATIO}x)`,
    });
  }
}

export function checkQa(where: string, q: QA, issues: Issue[]): void {
  checkText(`${where}.question`, q.question, issues);
  checkText(`${where}.modelAnswer`, q.modelAnswer, issues);
  if (q.commonError) checkText(`${where}.commonError`, q.commonError, issues);
  q.hints?.forEach((h, hi) => checkText(`${where}.hints[${hi}]`, h, issues));

  if (!Array.isArray(q.markScheme) || q.markScheme.length === 0) {
    issues.push({ where, problem: "QA must have at least one markScheme point" });
    return;
  }
  q.markScheme.forEach((pt, i) => checkText(`${where}.markScheme[${i}]`, pt, issues));

  // Rule (b): markScheme must have at least as many marking points as the marks available
  if (typeof q.marks === "number" && q.markScheme.length < q.marks) {
    issues.push({
      where,
      problem: `markScheme has ${q.markScheme.length} point(s) for ${q.marks} marks (must be >= marks)`,
    });
  }

  // Verify grader sanity: model answer must score > 0, while copied stem and non-answers score 0
  const modelGrade = gradeAnswer(q.modelAnswer, q.markScheme, q.question, q.modelAnswer);
  if (modelGrade.matched.length === 0) {
    issues.push({ where, problem: "modelAnswer matches 0 markScheme points under gradeAnswer" });
  }
  if (gradeAnswer(q.question, q.markScheme, q.question, q.modelAnswer).matched.length > 0) {
    issues.push({ where, problem: "copying question stem scores marks under gradeAnswer" });
  }
  if (gradeAnswer("I don't know", q.markScheme, q.question, q.modelAnswer).matched.length > 0) {
    issues.push({ where, problem: "'I don't know' scores marks under gradeAnswer" });
  }
}

export interface ValidationCounts {
  mcqs: number;
  qas: number;
  answerIndexSpread: number[];
}

export function validateTopic(
  t: Topic,
  seenIds: Set<string> = new Set(),
): { issues: Issue[]; counts: ValidationCounts } {
  const issues: Issue[] = [];
  const spread = [0, 0, 0, 0];
  let mcqs = 0;
  let qas = 0;

  checkText(`${t.id}.title`, t.title, issues);
  checkText(`${t.id}.blurb`, t.blurb, issues);
  checkText(`${t.id}.intro`, t.intro, issues);
  if (t.courseYear !== 10 && t.courseYear !== 11) {
    issues.push({ where: `${t.id}.courseYear`, problem: `expected 10 or 11, got ${String(t.courseYear)}` });
  }

  for (const s of t.guide) {
    const w = `${t.id}.guide[${s.heading}]`;
    checkText(`${w}.heading`, s.heading, issues);
    checkText(`${w}.body`, s.body, issues);
    s.diagrams?.forEach((d, di) => {
      checkText(`${w}.diagrams[${di}].caption`, d.caption, issues);
      checkSvg(`${w}.diagrams[${di}].svg`, d.svg, issues);
    });
  }

  const visitMcq = (q: MCQ, where: string) => {
    mcqs++;
    if (seenIds.has(q.id)) issues.push({ where, problem: `duplicate question id ${q.id}` });
    seenIds.add(q.id);
    if (q.answerIndex >= 0 && q.answerIndex < 4) spread[q.answerIndex]++;
    checkMcq(where, q, issues);
  };

  const visitQa = (q: QA, where: string) => {
    qas++;
    if (seenIds.has(q.id)) issues.push({ where, problem: `duplicate question id ${q.id}` });
    seenIds.add(q.id);
    checkQa(where, q, issues);
  };

  t.quiz.mcq.forEach((q) => visitMcq(q, `${t.id}.quiz.mcq[${q.id}]`));
  t.quiz.qa.forEach((q) => visitQa(q, `${t.id}.quiz.qa[${q.id}]`));
  t.questionBank.mcqPapers.forEach((p) =>
    p.questions.forEach((q) => visitMcq(q, `${t.id}.${p.id}[${q.id}]`)),
  );
  t.questionBank.qaPapers.forEach((p) =>
    p.questions.forEach((q) => visitQa(q, `${t.id}.${p.id}[${q.id}]`)),
  );

  return { issues, counts: { mcqs, qas, answerIndexSpread: spread } };
}

export function validateExam(
  exam: ComprehensiveExam,
  seenIds: Set<string> = new Set(),
): { issues: Issue[]; counts: ValidationCounts } {
  const issues: Issue[] = [];
  const spread = [0, 0, 0, 0];
  let mcqs = 0;
  let qas = 0;

  checkText(`${exam.id}.title`, exam.title, issues);

  exam.mcqPapers.forEach((p) =>
    p.questions.forEach((q) => {
      mcqs++;
      const where = `${exam.id}.${p.id}[${q.id}]`;
      if (seenIds.has(q.id)) issues.push({ where, problem: `duplicate question id ${q.id}` });
      seenIds.add(q.id);
      if (q.answerIndex >= 0 && q.answerIndex < 4) spread[q.answerIndex]++;
      checkMcq(where, q, issues);
    }),
  );

  exam.qaPapers.forEach((p) =>
    p.questions.forEach((q) => {
      qas++;
      const where = `${exam.id}.${p.id}[${q.id}]`;
      if (seenIds.has(q.id)) issues.push({ where, problem: `duplicate question id ${q.id}` });
      seenIds.add(q.id);
      checkQa(where, q, issues);
    }),
  );

  return { issues, counts: { mcqs, qas, answerIndexSpread: spread } };
}
