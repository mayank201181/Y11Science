import test from "node:test";
import assert from "node:assert/strict";
import { register } from "node:module";
import { mkdtempSync } from "node:fs";
import os from "node:os";
import path from "node:path";

const fakeAnthropic = `
export default class Anthropic {
  static RateLimitError = class RateLimitError extends Error {};
  static APIError = class APIError extends Error {
    constructor(msg, status = 500) { super(msg); this.status = status; }
  };
  beta = {
    messages: {
      create: async (params) => {
        (globalThis.__anthropicCalls ??= []).push(params);
        return {
          stop_reason: "end_turn",
          content: [{ type: "text", text: "Think about which organelle releases energy via aerobic respiration." }],
        };
      },
    },
  };
}
`;

const fakeNextServer = `
export const NextResponse = {
  json(body, init = {}) {
    return new Response(JSON.stringify(body), {
      status: init.status ?? 200,
      headers: { "content-type": "application/json" },
    });
  },
};
`;

const rootHref = new URL("..", import.meta.url).href;
const hooks = `
import { existsSync } from "node:fs";
export async function resolve(spec, ctx, next) {
  if (spec === "server-only") return { url: "data:text/javascript,export{}", shortCircuit: true };
  if (spec === "next/headers") return { url: "data:text/javascript,export async function cookies(){return{get(){return undefined}}}", shortCircuit: true };
  if (spec === "next/server") return { url: "data:text/javascript," + encodeURIComponent(${JSON.stringify(fakeNextServer)}), shortCircuit: true };
  if (spec === "@anthropic-ai/sdk") return { url: "data:text/javascript," + encodeURIComponent(${JSON.stringify(fakeAnthropic)}), shortCircuit: true };
  if (spec.startsWith("@/")) {
    const u = new URL(spec.slice(2) + ".ts", ${JSON.stringify(rootHref)});
    if (existsSync(u)) return { url: u.href, shortCircuit: true };
  }
  if (spec.startsWith(".") && ctx.parentURL?.startsWith("file:") && !/\\.[cm]?[jt]sx?$/.test(spec)) {
    const u = new URL(spec + ".ts", ctx.parentURL);
    if (existsSync(u)) return { url: u.href, shortCircuit: true };
    const idx = new URL(spec + "/index.ts", ctx.parentURL);
    if (existsSync(idx)) return { url: idx.href, shortCircuit: true };
  }
  return next(spec, ctx);
}`;
register("data:text/javascript," + encodeURIComponent(hooks));

process.env.LOCAL_BLOB_DIR = mkdtempSync(path.join(os.tmpdir(), "y11sci-ai-test-"));
process.env.AUTH_SECRET = "test-secret-ai-route";

const { POST } = await import("../app/api/ai/route");
const { resetThrottleBuckets } = await import("../lib/server/ratelimit");

function aiReq(body: unknown, ip = "203.0.113.10"): Request {
  return new Request("https://y11science.vercel.app/api/ai", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify(body),
  });
}

test("/api/ai returns 503 when ANTHROPIC_API_KEY is missing", async () => {
  const prev = process.env.ANTHROPIC_API_KEY;
  delete process.env.ANTHROPIC_API_KEY;
  try {
    const res = await POST(aiReq({ message: "What is osmosis?" }));
    assert.equal(res.status, 503);
  } finally {
    if (prev !== undefined) process.env.ANTHROPIC_API_KEY = prev;
  }
});

test("/api/ai accepts both { message } and { messages } for guest UX and uses claude-opus-5-5 low effort", async () => {
  resetThrottleBuckets();
  process.env.ANTHROPIC_API_KEY = "sk-ant-test-key";
  (globalThis as unknown as { __anthropicCalls?: Array<Record<string, unknown>> }).__anthropicCalls = [];

  const r1 = await POST(aiReq({ message: "What do mitochondria do?", context: "Cell Biology" }, "203.0.113.1"));
  assert.equal(r1.status, 200);
  const d1 = (await r1.json()) as { reply?: string };
  assert.ok(d1.reply && d1.reply.length > 0);

  const r2 = await POST(
    aiReq({ messages: [{ role: "user", content: "Explain active transport" }] }, "203.0.113.2"),
  );
  assert.equal(r2.status, 200);

  const calls = (globalThis as unknown as { __anthropicCalls: Array<Record<string, unknown>> })
    .__anthropicCalls;
  assert.equal(calls.length, 2);
  assert.equal(calls[0].model, "claude-opus-5-5");
  assert.deepEqual(calls[0].output_config, { effort: "low" });
  assert.deepEqual(calls[0].betas, ["server-side-fallback-2026-07-01"]);
  assert.equal(calls[0].fallbacks, "default");
});

test("/api/ai enforces per-IP burst throttle (returns 429 on 9th anonymous request) without calling Anthropic on empty body", async () => {
  resetThrottleBuckets();
  process.env.ANTHROPIC_API_KEY = "sk-ant-test-key";
  (globalThis as unknown as { __anthropicCalls?: Array<Record<string, unknown>> }).__anthropicCalls = [];

  for (let i = 1; i <= 8; i++) {
    const res = await POST(aiReq({ message: "" }, "203.0.113.55"));
    assert.equal(res.status, 400, `request ${i} should pass throttle and return 400`);
  }
  const ninth = await POST(aiReq({ message: "Still blocked?" }, "203.0.113.55"));
  assert.equal(ninth.status, 429, "9th request from same IP must return 429");

  const otherIp = await POST(aiReq({ message: "Different learner IP" }, "203.0.113.56"));
  assert.equal(otherIp.status, 200, "different IP is not affected");

  const calls = (globalThis as unknown as { __anthropicCalls: Array<Record<string, unknown>> })
    .__anthropicCalls;
  assert.equal(calls.length, 1, "only the 1 valid unthrottled request reached Anthropic");
});

test("/api/ai enforces per-IP guest daily cap and site-wide daily cap via Blob allowance", async () => {
  resetThrottleBuckets();
  process.env.ANTHROPIC_API_KEY = "sk-ant-test-key";
  const prevGuest = process.env.AI_GUEST_DAILY_LIMIT;
  const prevSite = process.env.AI_DAILY_LIMIT;
  process.env.AI_GUEST_DAILY_LIMIT = "2";
  process.env.AI_DAILY_LIMIT = "100";
  try {
    const ip = "203.0.113.77";
    assert.equal((await POST(aiReq({ message: "Q1" }, ip))).status, 200);
    assert.equal((await POST(aiReq({ message: "Q2" }, ip))).status, 200);
    const r3 = await POST(aiReq({ message: "Q3" }, ip));
    assert.equal(r3.status, 429, "3rd request exceeds AI_GUEST_DAILY_LIMIT=2");

    // Now test site-wide cap: set AI_DAILY_LIMIT=1 so a fresh IP hits the already-spent site cap
    process.env.AI_DAILY_LIMIT = "1";
    const siteHit = await POST(aiReq({ message: "Fresh IP" }, "203.0.113.78"));
    assert.equal(siteHit.status, 429, "fresh IP blocked once site-wide AI_DAILY_LIMIT is reached");
  } finally {
    if (prevGuest === undefined) delete process.env.AI_GUEST_DAILY_LIMIT;
    else process.env.AI_GUEST_DAILY_LIMIT = prevGuest;
    if (prevSite === undefined) delete process.env.AI_DAILY_LIMIT;
    else process.env.AI_DAILY_LIMIT = prevSite;
  }
});

test("/api/ai fails closed (503) in production when Blob storage is unconfigured", async () => {
  resetThrottleBuckets();
  process.env.ANTHROPIC_API_KEY = "sk-ant-test-key";
  const prevEnv = process.env.NODE_ENV;
  const prevBlob = process.env.BLOB_READ_WRITE_TOKEN;
  const prevLocal = process.env.LOCAL_BLOB_DIR;
  (process.env as Record<string, string | undefined>).NODE_ENV = "production";
  delete process.env.BLOB_READ_WRITE_TOKEN;
  delete process.env.LOCAL_BLOB_DIR;
  try {
    const res = await POST(aiReq({ message: "Should fail closed" }, "203.0.113.99"));
    assert.equal(res.status, 503);
  } finally {
    (process.env as Record<string, string | undefined>).NODE_ENV = prevEnv;
    if (prevBlob !== undefined) process.env.BLOB_READ_WRITE_TOKEN = prevBlob;
    if (prevLocal !== undefined) process.env.LOCAL_BLOB_DIR = prevLocal;
  }
});

test("/api/ai fails closed (503) when Blob storage throws an error", async () => {
  resetThrottleBuckets();
  process.env.ANTHROPIC_API_KEY = "sk-ant-test-key";
  const prevLocal = process.env.LOCAL_BLOB_DIR;
  // Point LOCAL_BLOB_DIR to a file path so mkdir/write fails with ENOTDIR
  process.env.LOCAL_BLOB_DIR = "/dev/null/impossible-blob-dir";
  try {
    const res = await POST(aiReq({ message: "Blob error test" }, "203.0.113.100"));
    assert.equal(res.status, 503);
  } finally {
    if (prevLocal !== undefined) process.env.LOCAL_BLOB_DIR = prevLocal;
    else delete process.env.LOCAL_BLOB_DIR;
  }
});
