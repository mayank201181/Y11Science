# Question-bank EXPANSION spec (v2)

## ⛔ DO THE WORK YOURSELF — NO DELEGATION
You MUST complete this task yourself in THIS session using only the Read, Edit and Write tools.
Do NOT use the Task or Agent tools. Do NOT spawn, launch, or delegate to any sub-agent. Do NOT
"wait to be notified". Write all the questions yourself and apply the edit before you reply. If you
delegate, the work is lost and the task fails.

You are EXPANDING the question bank of ONE existing, audited topic file for a Cambridge IGCSE
revision app. Curriculum: Cambridge IGCSE Biology 0610 / Chemistry 0620 / Physics 0625 (Extended).
Accuracy is paramount (exam prep).

## CRITICAL: what to change and what to preserve
1. Open the target file `lib/topics/<id>.ts` and READ it fully.
2. Look at the EXISTING content to match its house style, difficulty tagging, AoPS features
   (discovery/hints/solutions), and SVG conventions.
3. Replace ONLY the `questionBank: { ... }` value (it is the LAST field of the exported topic
   object, after `quiz`). Keep EVERYTHING ELSE byte-for-byte: `id`, `title`, `subject`, `icon`,
   `blurb`, `intro`, `guide`, `learn`, and `quiz` must NOT change.
   - Use the Edit tool to replace the existing `questionBank: { ... },`/`questionBank: { ... }`
     block (from `questionBank: {` to its matching closing brace just before the final `};`).
   - Do not touch any other file.

## New questionBank shape (this is the whole point)
```
questionBank: {
  mcqPapers: [ <4 papers>, each Paper<MCQ> with EXACTLY 10 MCQs ],
  qaPapers:  [ <4 papers>, each Paper<QA>  with EXACTLY 10 structured QAs ],
}
```
So: 4 MCQ papers × 10 = 40 MCQs, and 4 QA papers × 10 = 40 structured questions — 80 NEW questions.

Paper objects:
- mcqPapers ids: `<id>-bankmcq-1` … `<id>-bankmcq-4`; titles "Question Bank — MCQ Paper 1" … 4.
- qaPapers ids: `<id>-bankqa-1` … `<id>-bankqa-4`; titles "Question Bank — Structured Paper 1" … 4.

## Question IDs (MUST be globally unique; do NOT reuse the quiz ids)
- MCQ: `<id>-bm{paper}-{nn}` → e.g. `bio-cells-bm1-01` … `bio-cells-bm1-10`, `…-bm2-01` …, up to `-bm4-10`.
- QA:  `<id>-bq{paper}-{nn}` → e.g. `bio-cells-bq1-01` … `bio-cells-bq4-10`.
(These differ from the quick-quiz ids `<id>-mcq-q..`/`<id>-qa-q..`, so there is no collision.)

## Content requirements (per the app's AoPS pedagogy)
- Cover the topic's full syllabus breadth across the 4 papers; don't repeat the quick-quiz questions.
- Difficulty spread across the 80 questions: ~30% warmup, ~45% core, ~25% challenge. Include a real
  spread in EVERY paper (each paper should have a couple of warmups, several core, and at least
  ~2 challenge). Tag every question with `difficulty`.
- Every MCQ: 4 options, correct `answerIndex` (0-based) that genuinely matches, and a teaching
  `explanation`. Add a `hints` ladder (3–4) on core/challenge MCQs and a `strategy` where useful.
- Every QA: `marks`, a full `modelAnswer`, a keyword `markScheme` (use " / " for acceptable
  alternatives within a point), `commonError` on most, `hints` (3–4) on core/challenge, and a
  `solutions` worked method on calculations (show working, units, sig figs).
- CALCULATIONS: re-check every numerical answer literally. Balanced equations, correct SI units and
  IGCSE values. For Chemistry/Physics calc topics, lean into multi-step problems.
- `guideRef` on questions should match one of the file's existing GuideSection `heading` strings.

## SVG / formatting
Markdown-lite in question/answer text (no headings). If you add any inline SVG, it must include
`viewBox`, `xmlns`, `role="img"`, `aria-label`, and contain NO backtick and NO `${`. (Most bank
questions need no SVG.)

## Output
Make the edit, ensure the file still compiles as valid TypeScript, then reply with a 2-line summary:
counts per paper and difficulty split, and anything the auditor should double-check.
