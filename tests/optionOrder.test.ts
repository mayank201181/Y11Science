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

const { optionOrder } = await import("../lib/optionOrder");
const { TOPICS, EXAMS } = await import("../lib/content");

test("optionOrder is deterministic and returns a valid permutation of 0..n-1", () => {
  const opts = [
    "Mitochondria carry out aerobic respiration",
    "Ribosomes synthesise cellular proteins",
    "Chloroplasts absorb light for photosynthesis",
    "Vacuoles store cell sap to maintain turgor",
  ];
  const first = optionOrder("bio-cells-mcq-01", opts);
  const second = optionOrder("bio-cells-mcq-01", opts);
  assert.deepEqual(first, second);
  assert.deepEqual([...first].sort(), [0, 1, 2, 3]);
});

test("optionOrder sorts purely numeric same-unit options ascending", () => {
  assert.deepEqual(optionOrder("phys-q1", ["20 N", "5 N", "40 N", "10 N"]), [1, 3, 0, 2]);
  assert.deepEqual(optionOrder("chem-q1", ["0.5", "2.0", "0.25", "1.0"]), [2, 0, 3, 1]);
  assert.deepEqual(optionOrder("phys-q2", ["3.0 × 10⁸ m/s", "3.0 × 10⁶ m/s", "3.0 × 10⁷ m/s", "3.0 × 10⁵ m/s"]), [3, 1, 2, 0]);
});

test("optionOrder shuffles instead of naively sorting when units differ", () => {
  const opts = ["10 mm", "1 cm", "1 m", "1 km"];
  const order = optionOrder("phys-units-01", opts);
  assert.deepEqual([...order].sort(), [0, 1, 2, 3]);
});

test("optionOrder eliminates the Option B bias across all MCQs in Y11Science", () => {
  const displaySpread = [0, 0, 0, 0];
  let total = 0;
  for (const t of TOPICS) {
    for (const q of [...t.quiz.mcq, ...t.questionBank.mcqPapers.flatMap((p) => p.questions)]) {
      const order = optionOrder(q.id, q.options);
      assert.deepEqual([...order].sort(), [0, 1, 2, 3], `${q.id} must be a valid permutation`);
      displaySpread[order.indexOf(q.answerIndex)]++;
      total++;
    }
  }
  for (const e of EXAMS) {
    for (const q of e.mcqPapers.flatMap((p) => p.questions)) {
      const order = optionOrder(q.id, q.options);
      assert.deepEqual([...order].sort(), [0, 1, 2, 3], `${q.id} must be a valid permutation`);
      displaySpread[order.indexOf(q.answerIndex)]++;
      total++;
    }
  }
  assert.ok(total >= 1700, `expected >= 1700 MCQs, got ${total}`);
  for (let i = 0; i < 4; i++) {
    const share = displaySpread[i] / total;
    assert.ok(
      share >= 0.18 && share <= 0.34,
      `display position ${i} share ${(share * 100).toFixed(1)}% out of balanced range [18%, 34%] (${JSON.stringify(displaySpread)})`,
    );
  }
});
