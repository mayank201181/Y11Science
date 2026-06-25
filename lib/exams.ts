import type { ComprehensiveExam } from "./types";

// Cross-topic "big exam" per subject. Questions are added by the content pass;
// these start as empty shells so the build is green from the start.
export const EXAMS: ComprehensiveExam[] = [
  {
    id: "exam-biology",
    subject: "biology",
    title: "Biology — Full Mock Exam",
    mcqPapers: [
      { id: "exam-biology-mcq-1", title: "Paper 1 — Multiple Choice", questions: [] },
    ],
    qaPapers: [
      { id: "exam-biology-qa-1", title: "Paper 4 — Theory (Structured)", questions: [] },
    ],
  },
  {
    id: "exam-chemistry",
    subject: "chemistry",
    title: "Chemistry — Full Mock Exam",
    mcqPapers: [
      { id: "exam-chemistry-mcq-1", title: "Paper 1 — Multiple Choice", questions: [] },
    ],
    qaPapers: [
      { id: "exam-chemistry-qa-1", title: "Paper 4 — Theory (Structured)", questions: [] },
    ],
  },
  {
    id: "exam-physics",
    subject: "physics",
    title: "Physics — Full Mock Exam",
    mcqPapers: [
      { id: "exam-physics-mcq-1", title: "Paper 1 — Multiple Choice", questions: [] },
    ],
    qaPapers: [
      { id: "exam-physics-qa-1", title: "Paper 4 — Theory (Structured)", questions: [] },
    ],
  },
];
