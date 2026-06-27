// Core content types for the IGCSE Science study app.
// Audited exam content (guides, quizzes, question banks) lives in lib/topics/<id>.ts.
// Engagement extras live separately in lib/extras/<id>.ts so content edits never
// touch the answer keys.

export type SubjectId = "biology" | "chemistry" | "physics";

export type Difficulty = "warmup" | "core" | "challenge";

/** A worked solution path — AoPS style, where a second method is illuminating. */
export interface Solution {
  label: string; // e.g. "Method 1: using moles" or "Visual approach"
  steps: string[]; // ordered worked steps
}

/** A section of the illustrated study guide. */
export interface GuideSection {
  heading: string;
  body: string; // markdown-lite (paragraphs, **bold**, *italic*, - bullets)
  diagrams?: SvgDiagram[];
  keyPoints?: string[];
  thinkDeeper?: string; // a stretch idea to ponder
  // AoPS additions:
  discovery?: { problem: string; idea: string }; // pose a problem, then reveal the idea
  strategies?: string[]; // named thinking moves relevant to this section
  whyItWorks?: string; // short derivation / reason a rule holds
}

export interface SvgDiagram {
  caption: string;
  svg: string; // inline SVG markup (no backticks / ${} inside)
}

/** Multiple-choice question. */
export interface MCQ {
  id: string; // globally unique, e.g. "bio-cells-mcq-01"
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  guideRef?: string; // heading of the guide section that teaches this
  difficulty?: Difficulty;
  hints?: string[]; // laddered hints (gentle -> key step)
  strategy?: string;
}

/** Structured / extended-response question with a keyword mark scheme. */
export interface QA {
  id: string; // globally unique, e.g. "bio-cells-qa-01"
  question: string;
  marks?: number;
  modelAnswer: string;
  markScheme: string[]; // keyword/marking points used for self-assessment
  commonError?: string;
  guideRef?: string;
  difficulty?: Difficulty;
  hints?: string[];
  strategy?: string;
  solutions?: Solution[];
}

/** "Learn Smart" — quick recall flashcards + key facts for a topic. */
export interface LearnSmart {
  keyFacts: string[];
  flashcards: { front: string; back: string }[];
  keyTerms: { term: string; definition: string }[];
}

export interface Paper<T> {
  id: string;
  title: string;
  description?: string;
  questions: T[];
}

export interface Topic {
  id: string;
  title: string;
  subject: SubjectId;
  icon: string; // emoji for the topic card
  blurb: string; // one-line summary for cards
  intro: string; // short intro paragraph for the guide
  guide: GuideSection[];
  learn: LearnSmart;
  quiz: { mcq: MCQ[]; qa: QA[] }; // the topic's core quick quiz
  questionBank: { mcqPapers: Paper<MCQ>[]; qaPapers: Paper<QA>[] };
}

/** A cross-topic exam for a whole subject. */
export interface ComprehensiveExam {
  id: string;
  subject: SubjectId;
  title: string;
  mcqPapers: Paper<MCQ>[];
  qaPapers: Paper<QA>[];
}

// ---- Engagement extras (kept separate from audited content) ----

export interface Experiment {
  title: string;
  materials: string[];
  steps: string[];
  science: string; // the explanation of what happens & why
  safety?: string;
}

export interface TopicExtras {
  topicId: string;
  hook?: string; // an attention-grabbing opener banner
  didYouKnow?: string[];
  experiments?: Experiment[];
  bonusDiagrams?: SvgDiagram[];
  interactive?: string; // key into the Explorables registry (single widget)
  interactives?: string[]; // optional: several explorable keys for the Interactive tab
}

export interface SubjectMeta {
  id: SubjectId;
  title: string;
  icon: string;
  color: string; // tailwind-ish accent token name we map in CSS
  blurb: string;
}
