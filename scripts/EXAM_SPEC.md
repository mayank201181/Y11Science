# Mock-exam EXPANSION spec

## ⛔ DO IT YOURSELF — NO DELEGATION
Complete this task yourself using only Read/Edit/Write. Do NOT use Task/Agent tools, do NOT
spawn sub-agents, do NOT create scratch/draft files. Write the file directly.

You write ONE fragment file for ONE subject's mock exam — either the MCQ papers OR the QA papers.
Curriculum: Cambridge IGCSE Biology 0610 / Chemistry 0620 / Physics 0625 (Extended). Accuracy is paramount.

## What a fragment file looks like
MCQ fragment (`lib/exams/<subject>-mcq.ts`):
```
import type { Paper, MCQ } from "../types";
export const <subject>ExamMcqPapers: Paper<MCQ>[] = [ <4 papers, each 25 MCQs> ];
```
QA fragment (`lib/exams/<subject>-qa.ts`):
```
import type { Paper, QA } from "../types";
export const <subject>ExamQaPapers: Paper<QA>[] = [ <4 papers, each 20 QAs> ];
```
`<subject>` is one of biology / chemistry / physics (camelCase export: biologyExamMcqPapers etc.).

## Paper objects & ids
- MCQ papers: ids `exam-<subject>-mcq-1` … `exam-<subject>-mcq-4`; titles "Paper 1 — Multiple Choice" … 4.
  Each paper has EXACTLY 25 MCQs. Question ids `exam-<subject>-m{paper}-{nn}` → m1-01..m1-25 … m4-25.
- QA papers: ids `exam-<subject>-qa-1` … `exam-<subject>-qa-4`; titles "Paper 1 — Structured" … 4.
  Each paper has EXACTLY 20 QAs. Question ids `exam-<subject>-q{paper}-{nn}` → q1-01..q1-20 … q4-20.
All question ids MUST be globally unique (they feed a global QUESTION_INDEX). Give each paper a `description`.

## Content (this is a cross-topic WHOLE-SUBJECT mock — span the entire syllabus)
- Cover the full breadth of the subject across the 4 papers (every major topic represented).
- Difficulty spread: ~30% warmup, ~45% core, ~25% challenge; tag every question with `difficulty`.
- Every MCQ: exactly 4 `options`, correct `answerIndex` (0-based) that genuinely matches, a teaching
  `explanation`; add a `hints` ladder (3–4) on core/challenge and a `strategy` where useful.
- Every QA: `marks`, full `modelAnswer`, keyword `markScheme` (use " / " for acceptable alternatives),
  `commonError` on most, `hints` (3–4) on core/challenge, and a `solutions` worked method on every
  calculation (working, SI units, sig figs). Re-check every number and balanced equation literally.
- Markdown-lite text only (no headings). No SVG needed. NO backtick and NO `${` anywhere in strings.

## Output
Write the whole fragment file (with the import line and the single exported const). Ensure it is valid
TypeScript. Reply with a 2-line summary: per-paper counts and difficulty split.
