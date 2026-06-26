# Engagement-extras authoring spec

You write ONE extras file that adds engagement features for a topic WITHOUT touching the audited
content. Extras are separate so answer keys are never at risk.

## What you write
A single file at `lib/extras/<id>.ts` exporting `export const extras: TopicExtras = {...}` where
`topicId` equals the topic's id. DO NOT edit `lib/extras/index.ts` — the index is generated
automatically from the files in this directory. Only write your one `lib/extras/<id>.ts` file.

## The TopicExtras type (from lib/types.ts)
```ts
TopicExtras { topicId: string; hook?: string; didYouKnow?: string[];
  experiments?: Experiment[]; bonusDiagrams?: SvgDiagram[]; interactive?: string }
Experiment { title: string; materials: string[]; steps: string[]; science: string; safety?: string }
SvgDiagram { caption: string; svg: string }
```

## What to include
- `hook`: one or two vivid sentences that make the topic feel exciting/relevant (real-world or
  surprising). 
- `didYouKnow`: 4–6 genuinely interesting, ACCURATE science facts tied to the topic.
- `experiments`: 1–2 safe at-home/kitchen activities with materials, numbered steps, an explanation
  of the underlying science, and a `safety` note where relevant. Must be genuinely doable and safe
  for a 15–16 year old at home. No dangerous chemicals, no high heat hazards without an adult note.
- `interactive`: OPTIONAL — set ONLY if a matching widget exists in the Explorables registry. Valid
  keys are exactly: "ph-slider", "photosynthesis-rate", "reaction-rate", "particle-states",
  "half-life", "circuit-lab". Use the one that fits this topic, else omit the field.
- `bonusDiagrams`: OPTIONAL 0–1 extra labelled SVG (follow the SVG rules below).

## SVG rules (if you include bonusDiagrams)
Inline SVG string with `viewBox`, `xmlns="http://www.w3.org/2000/svg"`, `role="img"`, `aria-label`.
NO backticks and NO `${` anywhere. Light-on-dark colours (#38bdf8,#34d399,#a78bfa,#fbbf24,#fb7185;
text fill #b7bce0). 

## Output
Write the file, update `lib/extras/index.ts`, ensure valid TypeScript, then reply with a 1-line
summary. Keep facts accurate — this is still an educational app.
