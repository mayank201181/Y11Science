import type { ComprehensiveExam } from "../types";

// Cross-topic Chemistry mock exam. Filled by the exam-builder pass.
export const chemistryExam: ComprehensiveExam = {
  id: "exam-chemistry",
  subject: "chemistry",
  title: "Chemistry — Full Mock Exam",
  mcqPapers: [{ id: "exam-chemistry-mcq-1", title: "Paper 1 — Multiple Choice", questions: [] }],
  qaPapers: [{ id: "exam-chemistry-qa-1", title: "Paper 4 — Theory (Structured)", questions: [] }],
};
