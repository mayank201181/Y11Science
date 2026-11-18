"use client";

import { useState } from "react";
import { useStore } from "@/lib/store";

export function AuthGate() {
  const { login, signup, closeAuthModal, activeProfile } = useStore();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [familyName, setFamilyName] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const res =
      mode === "signup"
        ? await signup(familyName, password, pin)
        : await login(familyName, password);
    setBusy(false);
    if (!res.ok) setError(res.error || "Something went wrong.");
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-sm px-4 py-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Optional family cloud sync"
    >
      <div className="w-full max-w-md card p-6 relative">
        <button
          type="button"
          onClick={closeAuthModal}
          className="absolute top-3 right-3 chip"
          aria-label="Close cloud sign-in"
        >
          ✕ Close
        </button>

        <div className="text-center mb-5">
          <div className="text-4xl">☁️</div>
          <h2 className="text-2xl font-black mt-2">Optional Cloud Sync</h2>
          <p className="text-xs text-ink-soft mt-1">
            Progress for <strong>{activeProfile?.name || "Vanishree"}</strong> is already saved
            automatically on this device. Sign in only if you want cross-device family sync.
          </p>
        </div>

        <div className="flex gap-2 mb-4 p-1 rounded-xl bg-bg-soft border border-line">
          {(["login", "signup"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => {
                setMode(m);
                setError(null);
              }}
              className={`flex-1 py-2 rounded-lg text-sm font-bold transition ${
                mode === m ? "bg-indigo-600 text-white" : "text-ink-soft"
              }`}
            >
              {m === "login" ? "Sign in" : "Create family"}
            </button>
          ))}
        </div>

        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="text-sm font-semibold text-ink-soft">Family name</label>
            <input
              className="input mt-1"
              value={familyName}
              onChange={(e) => setFamilyName(e.target.value)}
              placeholder="e.g. The Rawat Family"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-ink-soft">Password</label>
            <input
              className="input mt-1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              autoComplete={mode === "signup" ? "new-password" : "current-password"}
            />
          </div>
          {mode === "signup" && (
            <div>
              <label className="text-sm font-semibold text-ink-soft">Parent PIN (4–6 digits)</label>
              <input
                className="input mt-1"
                inputMode="numeric"
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
                placeholder="Unlocks the cloud parent dashboard"
              />
            </div>
          )}

          {error && (
            <div className="text-sm rounded-lg px-3 py-2 bg-rose-500/15 tone-rose border border-rose-500/30">
              {error}
            </div>
          )}

          <button className="btn btn-primary w-full" disabled={busy}>
            {busy ? "Please wait…" : mode === "signup" ? "Create family account" : "Sign in"}
          </button>
        </form>

        <button
          type="button"
          onClick={closeAuthModal}
          className="btn btn-ghost w-full mt-3 text-sm"
        >
          ← Continue on this device without signing in
        </button>
      </div>
    </div>
  );
}
