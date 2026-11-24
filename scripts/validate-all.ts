// Validate all 37 IGCSE Science topics and 3 comprehensive subject exams.
// Usage:
//   node scripts/validate-all.ts                     # validate everything
//   node scripts/validate-all.ts --subject biology   # validate one subject (+ its exam)
//   node scripts/validate-all.ts bio-cells           # validate one topic or exam id
import { register } from "node:module";

const hooks = `
import { existsSync } from "node:fs";
export async function resolve(spec, ctx, next) {
  if (spec.startsWith(".") && ctx.parentURL?.startsWith("file:") && !/\\.[cm]?[jt]sx?$/.test(spec)) {
    const u = new URL(spec + ".ts", ctx.parentURL);
    if (existsSync(u)) return { url: u.href, shortCircuit: true };
    const idx = new URL(spec + "/index.ts", ctx.parentURL);
    if (existsSync(idx)) return { url: idx.href, shortCircuit: true };
  }
  return next(spec, ctx);
}`;
register("data:text/javascript," + encodeURIComponent(hooks));

const { TOPICS, EXAMS } = await import("../lib/content");
const { validateTopic, validateExam } = await import("../lib/validate");

const args = process.argv.slice(2);
let subjectFilter: string | null = null;
let idFilter: string | null = null;
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--subject" && args[i + 1]) {
    subjectFilter = args[++i];
  } else if (!args[i].startsWith("--")) {
    idFilter = args[i];
  }
}

const seenIds = new Set<string>();
let failedBlocks = 0;
let totalIssues = 0;
let totalMcqs = 0;
let totalQas = 0;

for (const t of TOPICS) {
  if (subjectFilter && t.subject !== subjectFilter) continue;
  if (idFilter && t.id !== idFilter) continue;
  const { issues, counts } = validateTopic(t, seenIds);
  totalMcqs += counts.mcqs;
  totalQas += counts.qas;
  if (issues.length === 0) {
    console.log(`✓ ${t.id} (${counts.mcqs} MCQ, ${counts.qas} QA)`);
  } else {
    failedBlocks++;
    totalIssues += issues.length;
    console.log(`✗ ${t.id} (${issues.length} issue${issues.length === 1 ? "" : "s"})`);
    for (const iss of issues.slice(0, 10)) {
      console.log(`  - ${iss.where}: ${iss.problem}`);
    }
    if (issues.length > 10) {
      console.log(`  … and ${issues.length - 10} more`);
    }
  }
}

for (const e of EXAMS) {
  if (subjectFilter && e.subject !== subjectFilter) continue;
  if (idFilter && e.id !== idFilter) continue;
  const { issues, counts } = validateExam(e, seenIds);
  totalMcqs += counts.mcqs;
  totalQas += counts.qas;
  if (issues.length === 0) {
    console.log(`✓ ${e.id} (${counts.mcqs} MCQ, ${counts.qas} QA)`);
  } else {
    failedBlocks++;
    totalIssues += issues.length;
    console.log(`✗ ${e.id} (${issues.length} issue${issues.length === 1 ? "" : "s"})`);
    for (const iss of issues.slice(0, 10)) {
      console.log(`  - ${iss.where}: ${iss.problem}`);
    }
    if (issues.length > 10) {
      console.log(`  … and ${issues.length - 10} more`);
    }
  }
}

console.log(
  failedBlocks
    ? `\n${failedBlocks} module(s) failed (${totalIssues} total issues across ${totalMcqs} MCQs & ${totalQas} QAs)`
    : `\nAll content checks passed (${totalMcqs} MCQs, ${totalQas} QAs, 0 issues)`,
);
process.exit(failedBlocks ? 1 : 0);
