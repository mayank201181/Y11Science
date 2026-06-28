import type { Topic, SubjectMeta, SubjectId, ComprehensiveExam, MCQ, QA } from "./types";

// ---- Subjects ----
export const SUBJECTS: SubjectMeta[] = [
  {
    id: "biology",
    title: "Biology",
    icon: "🧬",
    color: "emerald",
    blurb: "Cells to ecosystems — Edexcel IGCSE 4BI1.",
  },
  {
    id: "chemistry",
    title: "Chemistry",
    icon: "⚗️",
    color: "violet",
    blurb: "Atoms to organic reactions — Edexcel IGCSE 4CH1.",
  },
  {
    id: "physics",
    title: "Physics",
    icon: "🧲",
    color: "sky",
    blurb: "Forces to the cosmos — Edexcel IGCSE 4PH1.",
  },
];

export function subjectMeta(id: SubjectId): SubjectMeta {
  return SUBJECTS.find((s) => s.id === id)!;
}

// ---- Topics ----
// Topic modules are imported here as they are authored. Keep this list in
// syllabus order per subject.
import { biologyTopics } from "./topics/biology";
import { chemistryTopics } from "./topics/chemistry";
import { physicsTopics } from "./topics/physics";

export const TOPICS: Topic[] = [
  ...biologyTopics,
  ...chemistryTopics,
  ...physicsTopics,
];

export function topicsBySubject(subject: SubjectId): Topic[] {
  return TOPICS.filter((t) => t.subject === subject);
}

export function getTopic(id: string): Topic | undefined {
  return TOPICS.find((t) => t.id === id);
}

// ---- Comprehensive exams (built from the per-subject exam modules) ----
import { EXAMS } from "./exams";
export { EXAMS };

export function examsBySubject(subject: SubjectId): ComprehensiveExam[] {
  return EXAMS.filter((e) => e.subject === subject);
}

export function getExam(id: string): ComprehensiveExam | undefined {
  return EXAMS.find((e) => e.id === id);
}

// ---- Global question index (powers review + challenge by id alone) ----
export interface IndexedQuestion {
  kind: "mcq" | "qa";
  question: MCQ | QA;
  topicId?: string;
  topicTitle?: string;
  subject?: SubjectId;
}

function buildIndex(): Record<string, IndexedQuestion> {
  const idx: Record<string, IndexedQuestion> = {};
  for (const t of TOPICS) {
    const add = (kind: "mcq" | "qa", q: MCQ | QA) => {
      idx[q.id] = { kind, question: q, topicId: t.id, topicTitle: t.title, subject: t.subject };
    };
    t.quiz.mcq.forEach((q) => add("mcq", q));
    t.quiz.qa.forEach((q) => add("qa", q));
    t.questionBank.mcqPapers.forEach((p) => p.questions.forEach((q) => add("mcq", q)));
    t.questionBank.qaPapers.forEach((p) => p.questions.forEach((q) => add("qa", q)));
  }
  for (const e of EXAMS) {
    e.mcqPapers.forEach((p) =>
      p.questions.forEach((q) => {
        idx[q.id] = { kind: "mcq", question: q, subject: e.subject };
      }),
    );
    e.qaPapers.forEach((p) =>
      p.questions.forEach((q) => {
        idx[q.id] = { kind: "qa", question: q, subject: e.subject };
      }),
    );
  }
  return idx;
}

export const QUESTION_INDEX: Record<string, IndexedQuestion> = buildIndex();

export function getQuestion(qid: string): IndexedQuestion | undefined {
  return QUESTION_INDEX[qid];
}

/** Count of every question in the app (for stats). */
export function totalQuestionCount(): number {
  return Object.keys(QUESTION_INDEX).length;
}

/** All challenge-difficulty questions for a topic (MCQ + QA), for Challenge mode. */
export function challengeQuestions(topicId: string): (MCQ | QA)[] {
  const t = getTopic(topicId);
  if (!t) return [];
  const all: (MCQ | QA)[] = [
    ...t.quiz.mcq,
    ...t.quiz.qa,
    ...t.questionBank.mcqPapers.flatMap((p) => p.questions),
    ...t.questionBank.qaPapers.flatMap((p) => p.questions),
  ];
  return all.filter((q) => q.difficulty === "challenge");
}
