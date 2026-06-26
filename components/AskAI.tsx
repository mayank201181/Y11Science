"use client";

import { useState } from "react";

interface Msg {
  role: "user" | "assistant";
  text: string;
}

const PRESETS = [
  { label: "Explain simply", prompt: "Explain this topic simply, like I'm new to it." },
  { label: "Give an example", prompt: "Give me a clear worked example." },
  { label: "Explain why", prompt: "Explain WHY this works, not just the fact." },
  { label: "Hint", prompt: "Give me just one small hint to get started — don't tell me the answer." },
];

export function AskAI({ context, compact = false }: { context: string; compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);

  async function send(text: string) {
    if (!text.trim() || busy) return;
    const next = [...msgs, { role: "user" as const, text }];
    setMsgs(next);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, context }),
      });
      const data = await res.json();
      setMsgs([
        ...next,
        { role: "assistant", text: res.ok ? data.reply : data.error || "Something went wrong." },
      ]);
    } catch {
      setMsgs([...next, { role: "assistant", text: "Couldn't reach the tutor. Try again." }]);
    } finally {
      setBusy(false);
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className={compact ? "btn btn-ghost text-sm" : "btn btn-primary"}
      >
        🦉 Ask Professor Photon
      </button>
    );
  }

  return (
    <div className="card p-4 mt-3">
      <div className="flex items-center justify-between mb-2">
        <div className="font-bold flex items-center gap-2">🦉 Professor Photon</div>
        <button className="text-ink-soft hover:text-ink" onClick={() => setOpen(false)}>
          ✕
        </button>
      </div>

      <div className="space-y-2 max-h-72 overflow-y-auto mb-3">
        {msgs.length === 0 && (
          <p className="text-sm text-ink-soft">
            I&apos;ll help you think it through — I won&apos;t just hand over answers. What are you stuck on?
          </p>
        )}
        {msgs.map((m, i) => (
          <div
            key={i}
            className={`text-sm rounded-xl px-3 py-2 ${
              m.role === "user"
                ? "bg-indigo-500/20 border border-indigo-500/30 ml-6"
                : "bg-bg-soft border border-line mr-6 whitespace-pre-wrap"
            }`}
          >
            {m.text}
          </div>
        ))}
        {busy && <div className="text-sm text-ink-soft mr-6">Professor Photon is thinking…</div>}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-2">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            onClick={() => send(p.prompt)}
            disabled={busy}
            className="chip hover:text-ink"
          >
            {p.label}
          </button>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex gap-2"
      >
        <input
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question…"
        />
        <button className="btn btn-primary" disabled={busy || !input.trim()}>
          Ask
        </button>
      </form>
    </div>
  );
}
