"use client";

import { useEffect, useRef } from "react";
import { useStore } from "./store";

// Records time-on-task in ~30s ticks while the page is visible.
export function useHeartbeat(topicId?: string) {
  const { heartbeat } = useStore();
  const acc = useRef(0);

  useEffect(() => {
    const TICK = 30_000;
    const id = setInterval(() => {
      if (document.visibilityState === "visible") {
        acc.current += TICK / 60000; // minutes
        if (acc.current >= 0.5) {
          heartbeat(acc.current, topicId);
          acc.current = 0;
        }
      }
    }, TICK);
    return () => {
      if (acc.current > 0) heartbeat(acc.current, topicId);
      clearInterval(id);
    };
  }, [heartbeat, topicId]);
}
