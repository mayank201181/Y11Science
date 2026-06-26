import type { ComprehensiveExam } from "../types";
import { chemistryExamMcqPapers } from "./chemistry-mcq";
import { chemistryExamQaPapers } from "./chemistry-qa";

// Cross-topic "big exam" for Chemistry: 4 MCQ papers (25 each) + 4 structured papers (20 each).
// Paper content lives in ./chemistry-mcq.ts and ./chemistry-qa.ts.
export const chemistryExam: ComprehensiveExam = {
  id: "exam-chemistry",
  subject: "chemistry",
  title: "Chemistry — Full Mock Exam",
  mcqPapers: chemistryExamMcqPapers,
  qaPapers: chemistryExamQaPapers,
};
