"use client";

import { useState } from "react";
import { useStore } from "@/lib/store";

const AVATARS = ["👩‍🔬", "🧑‍🔬", "👨‍🔬", "🦊", "🐬", "🦉", "🐼", "🦄", "🚀", "🌟", "🧠", "🐙"];

export function ProfilePicker() {
  const {
    account,
    selectProfile,
    addProfile,
    editProfile,
    deleteProfile,
    logout,
    closeProfileModal,
  } = useStore();
  const [adding, setAdding] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(AVATARS[0]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const profiles = account?.profiles || [];

  async function save() {
    if (!name.trim()) return;
    setBusy(true);
    setError(null);
    try {
      if (editId) await editProfile(editId, name.trim(), avatar);
      else await addProfile(name.trim(), avatar);
      setAdding(false);
      setEditId(null);
      setName("");
      setAvatar(AVATARS[0]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not save. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-sm px-4 py-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Choose learner profile"
    >
      <div className="w-full max-w-2xl card p-6 relative">
        <button
          type="button"
          onClick={closeProfileModal}
          className="absolute top-3 right-3 chip"
          aria-label="Close learner switcher"
        >
          ✕ Close
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-black">Who&apos;s studying?</h2>
          <p className="text-ink-soft text-sm mt-1">{account?.familyName}</p>
        </div>

        {!adding && !editId && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {profiles.map((p) => (
              <div key={p.id} className="card p-4 flex flex-col items-center gap-2 group">
                <button
                  type="button"
                  onClick={() => selectProfile(p.id)}
                  className="flex flex-col items-center gap-2 w-full"
                >
                  <span className="text-5xl">{p.avatar}</span>
                  <span className="font-bold">{p.name}</span>
                </button>
                <div className="flex gap-2 opacity-70">
                  <button
                    type="button"
                    className="text-xs underline text-ink-soft"
                    onClick={() => {
                      setError(null);
                      setEditId(p.id);
                      setName(p.name);
                      setAvatar(p.avatar);
                    }}
                  >
                    edit
                  </button>
                  <button
                    type="button"
                    className="text-xs underline tone-rose"
                    onClick={() => {
                      if (confirm(`Remove ${p.name}? Their cloud progress will be deleted.`))
                        void deleteProfile(p.id);
                    }}
                  >
                    remove
                  </button>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() => {
                setError(null);
                setAdding(true);
              }}
              className="card p-4 flex flex-col items-center justify-center gap-2 border-dashed text-ink-soft hover:text-ink min-h-[8rem]"
            >
              <span className="text-4xl">＋</span>
              <span className="font-semibold">Add learner</span>
            </button>
          </div>
        )}

        {(adding || editId) && (
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-bold mb-3">{editId ? "Edit learner" : "New learner"}</h3>
            <label className="text-sm font-semibold text-ink-soft">Name</label>
            <input
              className="input mt-1 mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Vanishree"
            />
            <label className="text-sm font-semibold text-ink-soft">Pick an avatar</label>
            <div className="grid grid-cols-6 gap-2 mt-2 mb-5">
              {AVATARS.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setAvatar(a)}
                  className={`text-3xl p-2 rounded-xl border ${
                    avatar === a ? "border-indigo-400 bg-indigo-500/15" : "border-line"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
            {error && (
              <div className="text-sm rounded-lg px-3 py-2 mb-3 bg-rose-500/15 tone-rose border border-rose-500/30">
                {error}
              </div>
            )}
            <div className="flex gap-2">
              <button type="button" className="btn btn-primary flex-1" onClick={save} disabled={busy}>
                {busy ? "Saving…" : "Save"}
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => {
                  setAdding(false);
                  setEditId(null);
                  setName("");
                  setError(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-line text-xs">
          <button type="button" className="text-ink-soft underline" onClick={closeProfileModal}>
            ← Back to Science Lab
          </button>
          <button type="button" className="tone-rose underline" onClick={() => void logout()}>
            Sign out of {account?.familyName} (use device storage)
          </button>
        </div>
      </div>
    </div>
  );
}
