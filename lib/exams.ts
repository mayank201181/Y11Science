import type { ComprehensiveExam } from "./types";
import { biologyExam } from "./exams/biology";
import { chemistryExam } from "./exams/chemistry";
import { physicsExam } from "./exams/physics";

// Cross-topic "big exam" per subject, authored in lib/exams/<subject>.ts.
export const EXAMS: ComprehensiveExam[] = [biologyExam, chemistryExam, physicsExam];
