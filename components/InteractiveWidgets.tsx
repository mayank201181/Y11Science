"use client";

// Registry + resolver for the per-topic Interactive tab.
//
// Two sources of widgets:
//   1. EXPLORABLES_BASE — the original name-keyed widgets (ph-slider, half-life, …),
//      wired to topics via `extras.interactive` / `extras.interactives[]`.
//   2. TOPIC_WIDGETS — bespoke widgets keyed directly by topic id (one per topic),
//      authored in components/widgets/<batch>.tsx.
//
// EXPLORABLES_ALL merges both so any key resolves. Every topic gets an Interactive tab.

import type { ReactElement } from "react";
import { EXPLORABLES_BASE } from "./Explorables";
import { getExtras } from "@/lib/extras";
import { AtomBuilder } from "./widgets/atomBuilder";

// Bespoke per-topic widgets (keyed by topic id). Batch files are merged here as
// they are authored; each exports `widgets: Record<topicId, () => ReactElement>`.
import { widgets as batchA } from "./widgets/batchA";
import { widgets as batchB } from "./widgets/batchB";
import { widgets as batchC } from "./widgets/batchC";
import { widgets as batchD } from "./widgets/batchD";
import { widgets as batchE } from "./widgets/batchE";
import { widgets as batchF } from "./widgets/batchF";

export const TOPIC_WIDGETS: Record<string, () => ReactElement> = {
  "chem-atoms": AtomBuilder,
  ...batchA,
  ...batchB,
  ...batchC,
  ...batchD,
  ...batchE,
  ...batchF,
};

/** Combined registry: name-keyed base widgets + topic-id-keyed bespoke widgets. */
export const EXPLORABLES_ALL: Record<string, () => ReactElement> = {
  ...EXPLORABLES_BASE,
  ...TOPIC_WIDGETS,
};

/** Does this topic have any interactive widget to show? */
export function hasInteractive(topicId: string): boolean {
  if (TOPIC_WIDGETS[topicId]) return true;
  const e = getExtras(topicId);
  const keys = [e?.interactive, ...(e?.interactives ?? [])].filter(Boolean) as string[];
  return keys.some((k) => EXPLORABLES_ALL[k]);
}

/**
 * Render the Interactive tab content for a topic: any explicitly-listed explorable
 * keys (extras.interactive / interactives), plus the topic's bespoke widget.
 */
export function InteractiveView({ topicId }: { topicId: string }) {
  const e = getExtras(topicId);
  const named = [e?.interactive, ...(e?.interactives ?? [])].filter(Boolean) as string[];

  const seen = new Set<string>();
  const items: ReactElement[] = [];

  for (const k of named) {
    if (seen.has(k)) continue;
    const Comp = EXPLORABLES_ALL[k];
    if (Comp) {
      seen.add(k);
      items.push(<Comp key={`named-${k}`} />);
    }
  }

  // The bespoke per-topic widget (skip if a named key already rendered it).
  const Topic = TOPIC_WIDGETS[topicId];
  if (Topic && !seen.has(topicId)) {
    items.push(<Topic key={`topic-${topicId}`} />);
  }

  if (items.length === 0) {
    return (
      <div className="card p-6 text-center text-ink-soft">
        An interactive explorer for this topic is on its way. Check back soon!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-ink-soft text-sm">
        🔬 Change the inputs and watch the science respond — this is your topic&apos;s live lab.
      </p>
      {items}
    </div>
  );
}
