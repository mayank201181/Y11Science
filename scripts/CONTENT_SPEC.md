# Content authoring spec — IGCSE Year 11 Science Lab

You are authoring ONE topic content file for a Cambridge IGCSE revision web app used by a
Year 11 student at Tanglin Trust School (Singapore). Curriculum: Cambridge IGCSE — Biology 0610,
Chemistry 0620, Physics 0625 (the three SEPARATE sciences, Extended tier). Accuracy is paramount —
this is exam prep. Write at the level and terminology of the Cambridge IGCSE syllabus.

## What you write
A single TypeScript file at `lib/topics/<id>.ts` that exports `export const <camelCaseId>: Topic = {...}`.
OVERWRITE the existing stub. Keep the SAME `id` and the SAME export name. Do not touch any other file.

## The exact Topic type (from lib/types.ts) — match it precisely
```ts
Topic { id, title, subject, icon, blurb, intro, guide: GuideSection[], learn: LearnSmart,
        quiz: {mcq:MCQ[], qa:QA[]}, questionBank: {mcqPapers:Paper<MCQ>[], qaPapers:Paper<QA>[]} }
GuideSection { heading, body, diagrams?: SvgDiagram[], keyPoints?: string[], thinkDeeper?: string,
               discovery?: {problem, idea}, strategies?: string[], whyItWorks? }
SvgDiagram { caption: string, svg: string }
MCQ { id, question, options: string[], answerIndex: number, explanation, guideRef?,
      difficulty?: "warmup"|"core"|"challenge", hints?: string[], strategy? }
QA  { id, question, marks?: number, modelAnswer, markScheme: string[], commonError?, guideRef?,
      difficulty?, hints?: string[], strategy?, solutions?: {label, steps:string[]}[] }
LearnSmart { keyFacts: string[], flashcards: {front,back}[], keyTerms: {term,definition}[] }
Paper<T> { id, title, description?, questions: T[] }
```
`body` is markdown-lite: paragraphs separated by blank lines; `- ` bullets; `**bold**`, `*italic*`,
`` `code` ``. No headings (#) — the heading field handles that.

## Required structure & DEPTH (this is the "heavy" tier)
- `intro`: 2–3 sentence inviting overview.
- `guide`: 4–6 GuideSection entries that fully teach the topic. EVERY section needs `keyPoints`
  (3–5). At least 2 sections must include a `discovery` (a problem to attempt, then the idea) and a
  `whyItWorks`. Add `strategies` tags where useful. Add `thinkDeeper` on 1–2 sections.
- `diagrams`: include at least 3 inline SVG diagrams across the guide (see SVG RULES).
- `learn`: 6+ keyFacts, 8+ flashcards, 8+ keyTerms with crisp IGCSE definitions.
- `quiz.mcq`: 6 MCQs. `quiz.qa`: 3 structured questions. (This is the quick quiz.)
- `questionBank.mcqPapers`: 2 papers of 6 MCQs each (12 MCQ).
- `questionBank.qaPapers`: 2 papers of 4 structured questions each (8 QA).
- TOTAL ≈ 18 MCQ + 11 structured ≈ 29 questions. Spread difficulty across all of them:
  roughly 30% warmup, 45% core, 25% challenge. Include AT LEAST 3 genuine `challenge` questions
  that would stretch a strong student (multi-step, synoptic, application/calculation).

## AoPS pedagogy (apply throughout)
- Problem-first: `discovery` poses something to attempt before the idea is given.
- Derive don't decree: `whyItWorks` gives the reason/derivation, not just a restatement.
- Laddered hints: every `core` and `challenge` question gets a `hints` array of 3–4 steps
  (gentle nudge → bigger hint → key step → near-solution). Warmups may omit hints.
- Multiple methods: where a second approach illuminates (esp. calculations), add `solutions`
  with 1–2 labelled methods, each a `steps` array.
- Mistakes as data: use `commonError` on most QA to name the classic misconception.
- Mark schemes reward method: `markScheme` lists the marking points (keyword phrases). Where
  several wordings are acceptable, separate alternatives with " / " within one point.
- `modelAnswer` is a full, exemplary answer (with units and working for calculations).
- `strategy` tags name the move (e.g. "unit analysis", "draw a diagram", "balance the equation").

## Correctness rules (CRITICAL)
- For every MCQ, `answerIndex` MUST point to the genuinely correct option, and `explanation` must
  justify THAT option (and ideally why others are wrong). Double-check each key.
- Use correct IGCSE values, formulae, SI units, and significant figures. Show working in solutions.
- Chemical equations balanced; state symbols where relevant. Biology terminology exam-accurate.

## ID rules (MUST be globally unique)
Prefix every id with the topic id. Use:
- MCQ quick quiz: `<id>-mcq-q01` … ; QA quick quiz: `<id>-qa-q01` …
- Bank MCQ paper 1: `<id>-bank-mcq1-q01` …; paper 2: `<id>-bank-mcq2-q01` …
- Bank QA paper 1: `<id>-bank-qa1-q01` …; paper 2: `<id>-bank-qa2-q01` …
- Paper ids: `<id>-bank-mcq-1`, `<id>-bank-mcq-2`, `<id>-bank-qa-1`, `<id>-bank-qa-2`.
`guideRef` should match one of your GuideSection `heading` strings.

## SVG RULES (strict — files are compiled as TS template strings)
- Inline SVG string. MUST include `viewBox`, `xmlns="http://www.w3.org/2000/svg"`, `role="img"`,
  and `aria-label`.
- ABSOLUTELY NO backticks (`) and NO `${` anywhere inside the svg string. Use plain text/quotes.
- Keep colours light-on-dark friendly (the app background is dark navy): use strokes/fills like
  #38bdf8, #34d399, #a78bfa, #fbbf24, #fb7185, and label text fill #b7bce0 or #eef0ff.
- Diagrams should be genuinely informative (labelled), not decorative. viewBox around 0 0 320 200.

## Output
Write the file with the Write tool. Then reply with a 2-line summary: question counts by difficulty
and any value you want the auditor to double-check. The FILE is the deliverable.
Make sure the TypeScript is valid (it must compile under `tsc`/Next build).
