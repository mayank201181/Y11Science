"use client";

import { useState } from "react";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { todayKey } from "@/lib/gamify";

export function Mascot() {
  const { progress, dueReviews } = useStore();
  const [open, setOpen] = useState(true);

  const due = dueReviews().length;
  const today = progress.analytics.perDay[todayKey()];
  const mins = today?.minutes ?? 0;
  const goal = progress.goalMinutes;

  let msg: React.ReactNode = "Pick a topic and let's learn something brilliant today!";
  let link: { href: string; label: string } | null = null;

  if (due > 0) {
    msg = `You have ${due} review${due > 1 ? "s" : ""} due. A quick recap locks it into memory!`;
    link = { href: "/review", label: "Start review" };
  } else if (mins < goal) {
    const left = Math.max(1, Math.ceil(goal - mins));
    msg = `${Math.round(mins)} / ${goal} min today. Just ${left} more to hit your goal! 🔥`;
  } else {
    msg = `Goal smashed — ${Math.round(mins)} minutes today! Want a Challenge to earn bonus stars?`;
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-40 text-4xl animate-floaty drop-shadow-lg"
        aria-label="Open Professor Photon"
      >
        🦉
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-[18rem]">
      <div className="card p-3 pr-7 relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-1.5 right-2 text-ink-soft hover:text-ink"
          aria-label="Dismiss"
        >
          ✕
        </button>
        <div className="flex gap-2.5 items-start">
          <span className="text-3xl shrink-0 animate-floaty">🦉</span>
          <div>
            <div className="text-xs font-bold text-ink-soft">Professor Photon</div>
            <p className="text-sm leading-snug mt-0.5">{msg}</p>
            {link && (
              <Link
                href={link.href}
                className="inline-block mt-2 text-xs font-bold text-indigo-300 underline"
                onClick={() => setOpen(false)}
              >
                {link.label} →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
