import type { TopicExtras } from "./types";

// Engagement extras, keyed by topic id. Populated by the extras pass
// (lib/extras/<id>.ts). Kept separate from audited content so answer keys are
// never touched when adding hooks / fun facts / experiments.
import { EXTRAS_LIST } from "./extras/index";

const REGISTRY: Record<string, TopicExtras> = Object.fromEntries(
  EXTRAS_LIST.map((e) => [e.topicId, e]),
);

export function getExtras(topicId: string): TopicExtras | undefined {
  return REGISTRY[topicId];
}
