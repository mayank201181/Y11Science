import type { ComprehensiveExam } from "../types";

// Cross-topic Biology mock exam. Filled by the exam-builder pass.
export const biologyExam: ComprehensiveExam = {
  id: "exam-biology",
  subject: "biology",
  title: "Biology — Full Mock Exam",
  mcqPapers: [{ id: "exam-biology-mcq-1", title: "Paper 1 — Multiple Choice", questions: [] }],
  qaPapers: [{ id: "exam-biology-qa-1", title: "Paper 4 — Theory (Structured)", questions: [] }],
};
