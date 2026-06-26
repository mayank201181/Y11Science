# 🔬 Year 11 Science Lab — Cambridge IGCSE

An interactive study guide & question bank for **Cambridge IGCSE Biology (0610), Chemistry (0620)
and Physics (0625)** — three separate sciences, Extended tier. Built for a Year 11 student at
Tanglin Trust School.

**Live:** https://y11science.vercel.app

## What's inside
- **37 topics** (Biology 14 · Chemistry 13 · Physics 10), each with an illustrated guide,
  "Learn Smart" flashcards, a quick quiz, and a heavy question bank — **~1,150 questions** in total,
  plus a full cross-topic **mock exam** per subject.
- **Art of Problem Solving pedagogy**: every topic opens problems before methods, derives the "why",
  ladders hints, shows multiple solution methods, and tiers difficulty (warm-up → core → challenge).
- **Learning engine**: self-marking papers with resume, spaced-repetition review (1/3/7/16/35 days),
  gamification (stars, ranks, daily streak, goal, timed challenge), and **Professor Photon**, a
  Socratic AI tutor.
- **Family accounts & cloud sync**: one family login → multiple learner profiles, progress synced
  across devices, plus a **PIN-protected parent dashboard** (time on task, accuracy, per-topic
  breakdown, weekly chart).
- **Installable PWA** with offline shell.

## Tech
Next.js 16 (App Router) · TypeScript · Tailwind v4 · Vercel Blob (storage) · Anthropic SDK (tutor).

## Develop
```bash
npm install
npm run dev      # http://localhost:3000  (use dev for auth — secure cookies need https in prod)
npm run build    # production build
```

### Environment variables (set in Vercel)
| Variable | Purpose |
|---|---|
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob store (accounts + progress) — auto-injected |
| `AUTH_SECRET` | HMAC secret for session cookies |
| `ANTHROPIC_API_KEY` | AI tutor |
| `AI_MODEL` | optional model override (default `claude-opus-4-8`) |

## Content architecture
- Audited exam content: `lib/topics/<id>.ts` (guide + quiz + question bank).
- Engagement extras (hooks, fun facts, at-home experiments, interactive widgets):
  `lib/extras/<id>.ts` — kept **separate** so answer keys are never touched.
- Mock exams: `lib/exams/<subject>.ts`. Types: `lib/types.ts`. Content scripts: `scripts/`.
