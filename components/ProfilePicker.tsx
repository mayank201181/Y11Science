"use client";

import { useState } from "react";
import { useStore } from "@/lib/store";

const AVATARS = ["🧑‍🔬", "👩‍🔬", "👨‍🔬", "🦊", "🐬", "🦉", "🐼", "🦄", "🚀", "🌟", "🧠", "🐙"];

export function ProfilePicker() {
  const { account, selectProfile, addProfile, editProfile, deleteProfile, logout } = useStore();
  const [adding, setAdding] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(AVATARS[0]);
  const [busy, setBusy] = useState(false);

  const profiles = account?.profiles || [];

  async function save() {
    if (!name.trim()) return;
    setBusy(true);
    if (editId) await editProfile(editId, name.trim(), avatar);
    else await addProfile(name.trim(), avatar);
    setBusy(false);
    setAdding(false);
    setEditId(null);
    setName("");
    setAvatar(AVATARS[0]);
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black">Who&apos;s studying?</h1>
          <p className="text-ink-soft mt-1">{account?.familyName}</p>
        </div>

        {!adding && !editId && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {profiles.map((p) => (
              <div key={p.id} className="card p-4 flex flex-col items-center gap-2 group">
                <button
                  onClick={() => selectProfile(p.id)}
                  className="flex flex-col items-center gap-2 w-full"
                >
                  <span className="text-5xl">{p.avatar}</span>
                  <span className="font-bold">{p.name}</span>
                </button>
                <div className="flex gap-2 opacity-70">
                  <button
                    className="text-xs underline text-ink-soft"
                    onClick={() => {
                      setEditId(p.id);
                      setName(p.name);
                      setAvatar(p.avatar);
                    }}
                  >
                    edit
                  </button>
                  <button
                    className="text-xs underline text-rose-300"
                    onClick={() => {
                      if (confirm(`Remove ${p.name}? Their progress will be deleted.`))
                        deleteProfile(p.id);
                    }}
                  >
                    remove
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={() => setAdding(true)}
              className="card p-4 flex flex-col items-center justify-center gap-2 border-dashed text-ink-soft hover:text-ink min-h-[8rem]"
            >
              <span className="text-4xl">＋</span>
              <span className="font-semibold">Add learner</span>
            </button>
          </div>
        )}

        {(adding || editId) && (
          <div className="card p-6 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">{editId ? "Edit learner" : "New learner"}</h2>
            <label className="text-sm font-semibold text-ink-soft">Name</label>
            <input
              className="input mt-1 mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name"
            />
            <label className="text-sm font-semibold text-ink-soft">Pick an avatar</label>
            <div className="grid grid-cols-6 gap-2 mt-2 mb-5">
              {AVATARS.map((a) => (
                <button
                  key={a}
                  onClick={() => setAvatar(a)}
                  className={`text-3xl p-2 rounded-xl border ${
                    avatar === a ? "border-indigo-400 bg-indigo-500/15" : "border-line"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button className="btn btn-primary flex-1" onClick={save} disabled={busy}>
                {busy ? "Saving…" : "Save"}
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => {
                  setAdding(false);
                  setEditId(null);
                  setName("");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <button className="text-sm text-ink-soft underline" onClick={logout}>
            Sign out of {account?.familyName}
          </button>
        </div>
      </div>
    </div>
  );
}
