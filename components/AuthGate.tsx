"use client";

import { useState } from "react";
import { useStore } from "@/lib/store";

export function AuthGate() {
  const { login, signup } = useStore();
  const [mode, setMode] = useState<"login" | "signup">("signup");
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
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <div className="text-6xl animate-floaty">🧪</div>
          <h1 className="text-3xl font-black mt-3">Science Lab</h1>
          <p className="text-ink-soft mt-1">
            IGCSE Year 11 — Biology, Chemistry & Physics
          </p>
        </div>

        <div className="card p-6">
          <div className="flex gap-2 mb-5 p-1 rounded-xl bg-bg-soft border border-line">
            {(["signup", "login"] as const).map((m) => (
              <button
                key={m}
                onClick={() => {
                  setMode(m);
                  setError(null);
                }}
                className={`flex-1 py-2 rounded-lg text-sm font-bold transition ${
                  mode === m ? "bg-indigo-600 text-white" : "text-ink-soft"
                }`}
              >
                {m === "signup" ? "Create family" : "Sign in"}
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
                placeholder="e.g. The Sharma Family"
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
                <label className="text-sm font-semibold text-ink-soft">
                  Parent PIN (4–6 digits)
                </label>
                <input
                  className="input mt-1"
                  inputMode="numeric"
                  value={pin}
                  onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
                  placeholder="Unlocks the parent dashboard"
                />
              </div>
            )}

            {error && (
              <div className="text-sm rounded-lg px-3 py-2 bg-rose-500/15 text-rose-200 border border-rose-500/30">
                {error}
              </div>
            )}

            <button className="btn btn-primary w-full" disabled={busy}>
              {busy ? "Please wait…" : mode === "signup" ? "Create family account" : "Sign in"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-ink-soft mt-4 leading-relaxed">
          One family account can hold several learners. Progress syncs across all your devices.
        </p>
      </div>
    </div>
  );
}
