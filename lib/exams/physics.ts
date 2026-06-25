import type { ComprehensiveExam } from "../types";

// Cross-topic Physics mock exam. Filled by the exam-builder pass.
export const physicsExam: ComprehensiveExam = {
  id: "exam-physics",
  subject: "physics",
  title: "Physics — Full Mock Exam",
  mcqPapers: [{ id: "exam-physics-mcq-1", title: "Paper 1 — Multiple Choice", questions: [] }],
  qaPapers: [{ id: "exam-physics-qa-1", title: "Paper 4 — Theory (Structured)", questions: [] }],
};
