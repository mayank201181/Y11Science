import type { Topic } from "@/lib/types";
import { getMemoryVault } from "@/lib/memoryPitfalls";

export interface QuestionTrapItem {
  question: string;
  commonError: string;
}

export interface CramMisconception {
  spec?: string;
  verdict?: string;
  wrong: string;
  right: string;
  why?: string;
}

export interface TopicCramPack {
  id: string;
  title: string;
  strand: string;
  specRefs: string;
  icon: string;
  summary: string;
  mustKnow: string[];
  examMistakes: string[];
  misconceptions: CramMisconception[];
  mnemonics: { topic: string; device: string; explanation: string }[];
  keyFacts: { name: string; value: string }[];
  questionTraps: QuestionTrapItem[];
}

const STRAND_LABELS: Record<Topic["subject"], string> = {
  biology: "🧬 Biology (4BI1)",
  chemistry: "⚗️ Chemistry (4CH1)",
  physics: "⚡ Physics (4PH1)",
};

export function buildTopicCramPack(topic: Topic): TopicCramPack {
  const vault = getMemoryVault(topic.id);
  const strand = STRAND_LABELS[topic.subject];
  const specRefs = vault?.specRefs || strand;

  // 1. Collect structured-paper commonError traps across quiz + questionBank
  const seenErrors = new Set<string>();
  const questionTraps: QuestionTrapItem[] = [];
  const allQa = [
    ...(topic.quiz?.qa ?? []),
    ...(topic.questionBank?.qaPapers ?? []).flatMap((p) => p.questions ?? []),
  ];
  for (const q of allQa) {
    if (q.commonError) {
      const norm = q.commonError.trim().toLowerCase();
      if (!seenErrors.has(norm)) {
        seenErrors.add(norm);
        const firstLine = q.question.split("\n").find((ln) => ln.trim()) ?? q.question;
        questionTraps.push({
          question: firstLine.length > 140 ? `${firstLine.slice(0, 137)}…` : firstLine,
          commonError: q.commonError.trim(),
        });
      }
      if (questionTraps.length >= 6) break;
    }
  }

  // 2. Misconceptions ("Never Write This -> Write This Instead") from Edexcel memoryPitfalls vault
  const misconceptions: CramMisconception[] = (vault?.pitfalls ?? []).map((p) => ({
    spec: p.spec,
    verdict: p.verdict,
    wrong: p.wrong,
    right: p.right,
    why: p.why,
  }));

  // 3. Concise examMistakes summary list
  const examMistakes: string[] = (vault?.pitfalls ?? []).map((p) =>
    p.why ? `${p.verdict} — Never write “${p.wrong}” (${p.why})` : `${p.verdict} — Never write “${p.wrong}”`,
  );

  // 4. Must-Know exam checkpoints (LearnSmart keyFacts + Rapid Mark-Scheme Checks)
  const mustKnow: string[] = [...(topic.learn?.keyFacts ?? [])];
  for (const rc of vault?.rapidChecks ?? []) {
    mustKnow.push(`[${rc.marks}] ${rc.q} → ${rc.points.join(" · ")}`);
  }

  // 5. Mnemonics & Formula Hooks
  const mnemonics = (vault?.mnemonics ?? []).map((m) => ({
    topic: m.label,
    device: m.hook,
    explanation: m.detail,
  }));

  // 6. Key Terms & Guide Key Points
  const keyFacts: { name: string; value: string }[] = [];
  for (const kt of (topic.learn?.keyTerms ?? []).slice(0, 6)) {
    keyFacts.push({ name: kt.term, value: kt.definition });
  }
  for (const sec of topic.guide ?? []) {
    for (const kp of (sec.keyPoints ?? []).slice(0, 2)) {
      keyFacts.push({ name: sec.heading, value: kp });
    }
  }

  return {
    id: topic.id,
    title: topic.title,
    strand,
    specRefs,
    icon: topic.icon,
    summary: topic.blurb,
    mustKnow: mustKnow.slice(0, 14),
    examMistakes: examMistakes.slice(0, 8),
    misconceptions,
    mnemonics,
    keyFacts: keyFacts.slice(0, 12),
    questionTraps,
  };
}
