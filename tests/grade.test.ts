import test from "node:test";
import assert from "node:assert/strict";
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

const { gradeAnswer } = await import("../lib/grade");
const { TOPICS, EXAMS } = await import("../lib/content");

test("gradeAnswer rejects blanks, non-answers, and verbatim question copies", () => {
  const scheme = [
    "Active site changes shape / enzyme is denatured (1 mark)",
    "Substrate can no longer fit / bind to the active site (1 mark)",
    "Fewer enzyme-substrate complexes form so rate of reaction falls to zero (1 mark)",
  ];
  const prompt = "Explain why heating an enzyme far above its optimum temperature stops the reaction.";

  for (const bad of ["", "   ", "I don't know", "idk", "???", "science is important in everyday life"]) {
    const r = gradeAnswer(bad, scheme, prompt);
    assert.equal(r.verdict, "needs-work", `expected needs-work for "${bad}"`);
    assert.equal(r.matched.length, 0);
  }

  const copied = gradeAnswer(prompt, scheme, prompt);
  assert.equal(copied.verdict, "needs-work");
  assert.equal(copied.matched.length, 0);
});

test("gradeAnswer rewards accurate science wording, chemical synonyms, and partial responses", () => {
  const scheme = [
    "Carbon dioxide / CO2 is absorbed from the atmosphere (1 mark)",
    "Light energy is absorbed by chlorophyll (1 mark)",
    "Glucose and oxygen are produced (1 mark)",
  ];
  const prompt = "Describe the process of photosynthesis in green leaves.";

  const full = gradeAnswer(
    "Chlorophyll absorbs light energy so CO₂ and water react to produce glucose and oxygen.",
    scheme,
    prompt,
  );
  assert.equal(full.verdict, "correct");
  assert.equal(full.matched.length, 3);

  const partial = gradeAnswer(
    "Chlorophyll absorbs light energy in the leaf.",
    scheme,
    prompt,
  );
  assert.equal(partial.matched.length, 1);
});

test("gradeAnswer never awards marks to copied stems or 'I don't know' across all 1,835 QAs", () => {
  let count = 0;
  for (const t of [...TOPICS, ...EXAMS]) {
    const qas =
      "quiz" in t
        ? [...t.quiz.qa, ...t.questionBank.qaPapers.flatMap((p) => p.questions)]
        : t.qaPapers.flatMap((p) => p.questions);
    for (const q of qas) {
      count++;
      const stem = gradeAnswer(q.question, q.markScheme, q.question, q.modelAnswer);
      assert.equal(stem.matched.length, 0, `${q.id}: copying question stem must score 0`);
      const idk = gradeAnswer("I don't know", q.markScheme, q.question, q.modelAnswer);
      assert.equal(idk.matched.length, 0, `${q.id}: 'I don't know' must score 0`);
      const model = gradeAnswer(q.modelAnswer, q.markScheme, q.question, q.modelAnswer);
      assert.ok(model.matched.length > 0, `${q.id}: modelAnswer must match at least 1 mark point`);
    }
  }
  assert.ok(count >= 1800, `expected >= 1800 QAs, got ${count}`);
});
