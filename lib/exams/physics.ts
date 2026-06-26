import type { ComprehensiveExam } from "../types";
import { physicsExamMcqPapers } from "./physics-mcq";
import { physicsExamQaPapers } from "./physics-qa";

// Cross-topic "big exam" for Physics: 4 MCQ papers (25 each) + 4 structured papers (20 each).
// Paper content lives in ./physics-mcq.ts and ./physics-qa.ts.
export const physicsExam: ComprehensiveExam = {
  id: "exam-physics",
  subject: "physics",
  title: "Physics — Full Mock Exam",
  mcqPapers: physicsExamMcqPapers,
  qaPapers: physicsExamQaPapers,
};
