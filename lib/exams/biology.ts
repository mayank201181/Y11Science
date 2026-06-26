import type { ComprehensiveExam } from "../types";
import { biologyExamMcqPapers } from "./biology-mcq";
import { biologyExamQaPapers } from "./biology-qa";

// Cross-topic "big exam" for Biology: 4 MCQ papers (25 each) + 4 structured papers (20 each).
// Paper content lives in ./biology-mcq.ts and ./biology-qa.ts.
export const biologyExam: ComprehensiveExam = {
  id: "exam-biology",
  subject: "biology",
  title: "Biology — Full Mock Exam",
  mcqPapers: biologyExamMcqPapers,
  qaPapers: biologyExamQaPapers,
};
