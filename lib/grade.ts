// Hardened self-assessment helper for written Edexcel structured answers against a mark scheme.
// Pure TypeScript (no React) so it can be verified across all 1,835 structured QAs.

import { TOPICS, EXAMS } from "./content";

export type GradeVerdict = "correct" | "partial" | "needs-work";

export interface GradeResult {
  verdict: GradeVerdict;
  matched: string[];
  missed: string[];
  score: number; // 0..1 fraction of mark-scheme points hit
}

// Lazy O(1) lookup of q.modelAnswer for open-ended rubric bullets even when callers pass only 2–3 args
let schemeToModel: WeakMap<readonly string[], string> | null = null;
let promptToModel: Map<string, string> | null = null;

function lookupModelAnswer(markScheme: readonly string[], questionPrompt?: string): string | undefined {
  if (!schemeToModel || !promptToModel) {
    schemeToModel = new WeakMap();
    promptToModel = new Map();
    for (const t of TOPICS) {
      for (const q of t.quiz.qa) {
        schemeToModel.set(q.markScheme, q.modelAnswer);
        promptToModel.set(q.question, q.modelAnswer);
      }
      for (const p of t.questionBank.qaPapers) {
        for (const q of p.questions) {
          schemeToModel.set(q.markScheme, q.modelAnswer);
          promptToModel.set(q.question, q.modelAnswer);
        }
      }
    }
    for (const e of EXAMS) {
      for (const p of e.qaPapers) {
        for (const q of p.questions) {
          schemeToModel.set(q.markScheme, q.modelAnswer);
          promptToModel.set(q.question, q.modelAnswer);
        }
      }
    }
  }
  return (
    schemeToModel.get(markScheme) ??
    (questionPrompt ? promptToModel.get(questionPrompt) : undefined)
  );
}

const SUB_MAP: Record<string, string> = {
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "⁺": "+",
  "⁻": "-",
};

function normalizeUnicode(s: string): string {
  return (s ?? "")
    .replace(/⁻([¹²³⁴⁵⁶⁷⁸⁹])/g, (_, d: string) => `^-${SUB_MAP[d] ?? d}`)
    .replace(/[₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]/g, (ch) => SUB_MAP[ch] ?? ch)
    .replace(/Δ/g, "delta")
    .replace(/Σ/g, "sum")
    .replace(/π/g, " pi ")
    .replace(/½/g, " 0.5 ")
    .replace(/¼/g, " 0.25 ")
    .replace(/¾/g, " 0.75 ")
    .replace(/⅓/g, " 0.33 ")
    .replace(/[’‘]/g, "'")
    .replace(/[−–—]/g, "-")
    .replace(/\*\*|__|`/g, "");
}

const NON_ANSWER_RE =
  /^(?:i\s*(?:don'?t|do\s*not)\s*know|idk|dunno|(?:i'?m\s*|i\s*am\s*)?(?:not\s*sure|unsure)|(?:i\s*have\s*)?no\s*idea|no\s*clue|not\s*a\s*clue|skip|pass|none|nothing|n\/a|na|tbd|\?+|makes\s+the\s+reader\s+want\s+to\s+read\s+on|science\s+is\s+(?:very\s+)?important\s+in\s+everyday\s+life|i\s+like\s+(?:eating\s+)?pizza.*)+$/i;

interface WordSpan {
  norm: string;
  start: number;
  end: number;
}

function wordSpans(s: string): WordSpan[] {
  const out: WordSpan[] = [];
  for (const m of s.matchAll(/[a-z0-9]+(?:\.[0-9]+)?(?:'[a-z0-9]+)*/gi)) {
    out.push({ norm: m[0].toLowerCase(), start: m.index!, end: m.index! + m[0].length });
  }
  return out;
}

/**
 * Scrub contiguous >=4-word runs copied verbatim from the question stem (plus exact stem equality),
 * without penalising valid answers that reorder, pair, or classify terms from the prompt.
 */
function stripCopiedStemRuns(question: string, answer: string): string {
  const qClean = normalizeUnicode(question);
  const aClean = normalizeUnicode(answer);
  const qWords = wordSpans(qClean);
  const aWords = wordSpans(aClean);

  if (aWords.length === 0) return "";
  if (
    qWords.length > 0 &&
    qWords.map((w) => w.norm).join(" ") === aWords.map((w) => w.norm).join(" ")
  ) {
    return "";
  }
  if (qWords.length < 4 || aWords.length < 4) return aClean;

  const ngrams = new Set<string>();
  for (let i = 0; i + 3 < qWords.length; i++) {
    ngrams.add(
      `${qWords[i].norm} ${qWords[i + 1].norm} ${qWords[i + 2].norm} ${qWords[i + 3].norm}`,
    );
  }

  const copied = new Uint8Array(aWords.length);
  for (let i = 0; i + 3 < aWords.length; i++) {
    const key = `${aWords[i].norm} ${aWords[i + 1].norm} ${aWords[i + 2].norm} ${aWords[i + 3].norm}`;
    if (ngrams.has(key)) {
      copied[i] = copied[i + 1] = copied[i + 2] = copied[i + 3] = 1;
    }
  }

  const chars = aClean.split("");
  let i = 0;
  while (i < aWords.length) {
    if (!copied[i]) {
      i++;
      continue;
    }
    let j = i;
    while (j + 1 < aWords.length && copied[j + 1]) j++;
    let from = aWords[i].start;
    let to = aWords[j].end;
    while (from > 0 && /[%°+$£€]/.test(chars[from - 1])) from--;
    while (to < chars.length && /[%°+]/.test(chars[to])) to++;
    for (let p = from; p < to; p++) chars[p] = " ";
    i = j + 1;
  }
  return chars.join("");
}

// Strictly English function words + true mark-scheme editorial/rubric tags (NO science content nouns)
const META_STOPWORDS = new Set([
  // English function / connective words
  "the",
  "and",
  "for",
  "with",
  "from",
  "that",
  "this",
  "these",
  "those",
  "into",
  "onto",
  "after",
  "before",
  "between",
  "through",
  "during",
  "about",
  "under",
  "over",
  "each",
  "both",
  "all",
  "any",
  "either",
  "other",
  "others",
  "their",
  "there",
  "where",
  "when",
  "which",
  "while",
  "than",
  "then",
  "also",
  "only",
  "very",
  "more",
  "most",
  "less",
  "same",
  "such",
  "have",
  "has",
  "had",
  "been",
  "being",
  "were",
  "was",
  "are",
  "will",
  "would",
  "could",
  "should",
  "must",
  "can",
  "may",
  "does",
  "did",
  "how",
  "why",
  "what",
  "because",
  "therefore",
  "hence",
  "until",
  "otherwise",
  "per",
  "via",
  // Generic filler words (excluded when mining fallback keywords from modelAnswer too)
  "science",
  "important",
  "importance",
  "everyday",
  "life",
  "reader",
  "want",
  "read",
  "makes",
  "make",
  "like",
  "without",
  "ready",
  "made",
  "interest",
  "interesting",
  "question",
  "nature",
  "experiment",
  "relationship",
  "variables",
  "variable",
  // Pure rubric / examiner instruction words
  "use",
  "uses",
  "used",
  "using",
  "correct",
  "correctly",
  "appropriate",
  "suitable",
  "valid",
  "sensible",
  "clear",
  "clearly",
  "formula",
  "formulae",
  "equation",
  "equations",
  "expression",
  "working",
  "calculation",
  "calculated",
  "calculate",
  "method",
  "answer",
  "answers",
  "final",
  "substitution",
  "substituted",
  "substituting",
  "rearranged",
  "rearrange",
  "rearranging",
  "rearrangement",
  "factorises",
  "factorised",
  "solves",
  "solved",
  "shows",
  "shown",
  "showing",
  "named",
  "naming",
  "name",
  "example",
  "examples",
  "applied",
  "accept",
  "accepted",
  "allow",
  "allows",
  "allowed",
  "ignore",
  "reject",
  "rejects",
  "marks",
  "mark",
  "full",
  "required",
  "needed",
  "order",
  "placed",
  "labelled",
  "labels",
  "label",
  "drawn",
  "diagram",
  "round",
  "rounds",
  "rounded",
  "rounding",
  "significant",
  "figures",
  "figure",
  "decimal",
  "places",
  "place",
  "stated",
  "states",
  "state",
  "explained",
  "explains",
  "explain",
  "explanation",
  "described",
  "describes",
  "describe",
  "description",
  "identified",
  "identifies",
  "identify",
  "recognises",
  "gives",
  "given",
  "give",
  "chosen",
  "referring",
  "justification",
  "value",
  "values",
  "unit",
  "units",
  "symbol",
  "symbols",
  "balanced",
  "balancing",
  "total",
  "step",
  "stage",
  "part",
  "first",
  "second",
  "third",
  "fourth",
  "one",
  "two",
  "three",
  "four",
  "different",
  "characteristic",
  "characteristics",
  "feature",
  "features",
  "difference",
  "differences",
  "similarity",
  "similarities",
  "linked",
  "linking",
  "link",
  "point",
  "points",
]);

const SHORT_SCIENCE_KEEP = new Set([
  "ab",
  "ph",
  "rf",
  "uv",
  "ir",
  "ac",
  "dc",
  "ke",
  "ek",
  "pe",
  "mr",
  "ar",
  "pi",
  "ly",
  "na",
  "cl",
  "cu",
  "zn",
  "fe",
  "mg",
  "ca",
  "ag",
  "pb",
  "al",
  "li",
  "br",
  "he",
  "ne",
  "kr",
  "au",
  "hg",
  "co",
  "no",
  "so",
  "oh",
  "lh",
  "aa",
  "xx",
  "xy",
  "cm",
  "mm",
  "km",
  "nm",
  "kg",
  "mg",
  "kj",
  "mj",
  "kw",
  "mw",
  "hz",
  "pa",
  "bq",
  "dm",
]);

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function stripRubricBoilerplate(point: string): { cleaned: string; extraAlts: string[] } {
  const extraAlts: string[] = [];
  let s = normalizeUnicode(point);

  // Pull "(accept ...)" / "(allow ...)" / "(or ...)" / "(e.g. ...)" into extra alternatives
  s = s.replace(/\(\s*(?:accept|allow|or|e\.g\.)\b[:\s]*([^)]*)\)/gi, (_, inner: string) => {
    if (inner && inner.trim()) {
      for (const piece of inner.split(/\s*\/\s*|\s+or\s+|,\s*/i)) {
        if (piece.trim()) extraAlts.push(piece.trim());
      }
    }
    return " ";
  });
  s = s.replace(/^\s*\(\s*accept\s*\)\s*/i, "");

  // Remove mark annotations like "(1 mark)", "(2 marks — ...)", "[1]", "(1)", "— 1 mark."
  s = s
    .replace(/\bpositive\s+result\s*:/gi, " ")
    .replace(
      /\b(?:difference|point|step|stage|part|feature|characteristic|item|statement|method|route|adaptation|fraction|region|function|resource|situation|nutrient)\s+[1-9]\b/gi,
      " ",
    )
    .replace(/\(\s*\d+\s*marks?[^)]*\)/gi, " ")
    .replace(/\(\s*\d+\s*each[^)]*\)/gi, " ")
    .replace(/\(\s*max\s+\d+[^)]*\)/gi, " ")
    .replace(/\(\s*different[^)]*\)/gi, " ")
    .replace(/\[\s*\d+(?:\s*marks?)?\s*\]/gi, " ")
    .replace(/(?:^|\s)-\s*\d+\s*marks?\.?/gi, " ")
    .replace(/\bup\s+to\s+\d+\s*marks?\.?/gi, " ")
    .replace(/\(\s*\d+\s*\)/g, " ")
    .replace(/^\s*\([a-d1-9ivx]+\)\s*/i, " ")
    .replace(/\b(?:s\.f\.|d\.p\.|e\.g\.|i\.e\.)\b/gi, " ")
    .replace(
      /\((?:correctly[^)]*|in this order|both[^)]*|all[^)]*|must\s+match[^)]*|any\s+two[^)]*|one\s+mark[^)]*|start|at start|or equivalent|ora|owtte)\)/gi,
      " ",
    );

  return { cleaned: s.trim(), extraAlts };
}

function extractTokens(alt: string): string[] {
  const lower = alt.toLowerCase();
  const rawMatches = lower.match(/[a-z0-9]+(?:\.[0-9]+)?(?:\^[a-z0-9+-]+)?/g) || [];
  const out: string[] = [];

  for (const tok of rawMatches) {
    if (META_STOPWORDS.has(tok)) continue;
    const hasDigit = /\d/.test(tok);
    const hasCaret = tok.includes("^");
    if (hasDigit || hasCaret || SHORT_SCIENCE_KEEP.has(tok) || tok.length >= 3) {
      out.push(tok);
    }
  }
  return out;
}

const SYNONYM_MAP: Record<string, string[]> = {
  pi: ["3.14", "3.142"],
  uv: ["ultraviolet"],
  "0": ["zero", "none"],
  zero: ["0"],
  na: ["sodium"],
  mg: ["magnesium"],
  al: ["aluminium"],
  fe: ["iron"],
  cu: ["copper"],
  zn: ["zinc"],
  ca: ["calcium"],
  li: ["lithium"],
  ag: ["silver"],
  pb: ["lead"],
  au: ["gold"],
  hcl: ["hydrochloric"],
  h2so4: ["sulfuric"],
  hno3: ["nitric"],
  nh3: ["ammonia"],
  ch4: ["methane"],
  co2: ["carbon dioxide"],
  o2: ["oxygen"],
  h2: ["hydrogen"],
  n2: ["nitrogen"],
  h2o: ["water"],
  nacl: ["sodium chloride"],
  caco3: ["calcium carbonate"],
  ch3cooh: ["ethanoic", "ch3coona"],
  ethanoate: ["ch3coona"],
  enters: ["into", "inward", "diffuses"],
  destroyed: ["killed", "eliminated", "neutralised", "phagocytosis"],
  recognise: ["recognises", "detect", "detects", "bind", "binds", "respond", "responds"],
  illness: ["disease", "symptoms", "sick", "infection"],
  lowered: ["decreases", "falls", "drops", "reduces", "reduced"],
  raised: ["increases", "rises", "restores", "restored"],
  available: ["reach", "reaches", "present", "supply"],
  seconds: ["3600", "60", "21600"],
  halving: ["half-life", "falls", "half"],
  finishes: ["stops", "constant"],
  turning: ["torque", "moment"],
  rotation: ["turn", "spin", "rotates", "torque"],
  rectangular: ["rectangle"],
  fixed: ["constant"],
  biodegradable: ["decompose", "decomposes", "rot", "landfill"],
};

function tokenMatchesAnswer(answerLower: string, answerWordSet: Set<string>, tok: string): boolean {
  if (answerWordSet.has(tok)) return true;

  const syns = SYNONYM_MAP[tok];
  if (
    syns &&
    syns.some((syn) => answerWordSet.has(syn) || (syn.length >= 4 && answerLower.includes(syn)))
  ) {
    return true;
  }

  // Numeric equivalence: e.g. "3.0" vs "3" or "0.5" vs "1/2"
  if (/^\d+(?:\.\d+)?$/.test(tok)) {
    const num = Number(tok);
    if (Number.isFinite(num)) {
      const canonical = String(num);
      if (answerWordSet.has(canonical)) return true;
      if (num === 0.5 && /\b1\s*\/\s*2\b/.test(answerLower)) return true;
      if (num === 0.25 && /\b1\s*\/\s*4\b/.test(answerLower)) return true;
      if (num === 0.75 && /\b3\s*\/\s*4\b/.test(answerLower)) return true;
    }
    const esc = escapeRegex(tok);
    return new RegExp(`(?<![0-9.])${esc}(?![0-9.])`).test(answerLower);
  }

  // Short tokens (<= 4 chars or with ^ or digits) require strict word-boundary match
  if (tok.length <= 4 || /\d|\^/.test(tok)) {
    const esc = escapeRegex(tok);
    return new RegExp(`(?<![a-z0-9])${esc}(?![a-z0-9])`).test(answerLower);
  }

  // Word-start anchored match so tokens never match inside unrelated longer words
  const escTok = escapeRegex(tok);
  if (new RegExp(`(?<![a-z0-9])${escTok}`).test(answerLower)) return true;

  // Morphological stem forgiveness only for longer words (>= 7 chars -> >= 5-char word-start stem)
  if (tok.length >= 7) {
    const stem = escapeRegex(tok.slice(0, tok.length - 2));
    if (new RegExp(`(?<![a-z0-9])${stem}`).test(answerLower)) return true;
  }
  return false;
}

/**
 * Fallback for open-ended rubric placeholders (e.g. "First characteristic correctly named and explained",
 * "one valid safety precaution", "correct order of inner planets") where the rubric bullet itself does not
 * list the specific scientific answer words: match against concrete non-question science vocabulary in modelAnswer.
 */
function matchesModelAnswerScienceVocab(
  strippedLower: string,
  strippedWordSet: Set<string>,
  modelFallbackTokens: string[],
): boolean {
  if (modelFallbackTokens.length === 0) return false;
  const matched = modelFallbackTokens.filter((tok) =>
    tokenMatchesAnswer(strippedLower, strippedWordSet, tok),
  );
  const minNeeded = Math.min(2, modelFallbackTokens.length);
  return matched.length >= minNeeded;
}

function pointHit(
  strippedAnswer: string,
  fullCleanAnswer: string,
  rawPoint: string,
  questionWordSet: Set<string>,
  modelFallbackTokens: string[],
): boolean {
  const strippedLower = strippedAnswer.toLowerCase();
  const fullLower = fullCleanAnswer.toLowerCase();

  // Special case: rubric point specifically awarding state symbols (s), (l), (g), (aq)
  if (/\bstate\s+symbols?\b/i.test(rawPoint) && !/formula|balanced/i.test(rawPoint)) {
    return /\(\s*(?:s|l|g|aq)\s*\)/i.test(strippedAnswer);
  }

  const { cleaned, extraAlts } = stripRubricBoilerplate(rawPoint);

  // Split ONLY on spaced " / ", " or ", or "; " so fractions ("1/2") and units ("m/s") stay intact
  const baseAlts = cleaned
    .split(/\s+\/\s+|\s+or\s+|;\s+/i)
    .map((x) => x.trim())
    .filter(Boolean);
  const alts = [...baseAlts, ...extraAlts.map((x) => x.trim()).filter(Boolean)];

  const strippedWordSet = new Set(
    strippedLower.match(/[a-z0-9]+(?:\.[0-9]+)?(?:\^[a-z0-9+-]+)?/g) || [],
  );
  const fullWordSet = new Set(
    fullLower.match(/[a-z0-9]+(?:\.[0-9]+)?(?:\^[a-z0-9+-]+)?/g) || [],
  );

  let hadConcreteNonQuestionTokens = false;
  for (const alt of alts) {
    const allTokens = extractTokens(alt);
    if (allTokens.length === 0) continue;

    const targetTokens = allTokens.filter((t) => !questionWordSet.has(t));
    if (targetTokens.length > 0) {
      hadConcreteNonQuestionTokens = true;
      const hits = targetTokens.filter((tok) =>
        tokenMatchesAnswer(fullLower, fullWordSet, tok),
      ).length;
      const threshold = targetTokens.length === 1 ? 1 : 0.55;
      if (hits / targetTokens.length >= threshold) return true;
    } else {
      // Every keyword in this rubric bullet came from the question stem itself:
      // Handles ordering/classification Qs (e.g. "Oesophagus → stomach", "Condensation: energy released")
      const hits = allTokens.filter((tok) =>
        tokenMatchesAnswer(strippedLower, strippedWordSet, tok),
      ).length;
      const threshold = allTokens.length === 1 ? 1 : 0.55;
      if (hits / allTokens.length >= threshold) return true;
    }
  }

  // Open-ended rubric bullet with zero concrete non-question target keywords (e.g. "one valid safety precaution",
  // "first characteristic correctly named", "correct substitution"): require concrete science terms/values from modelAnswer!
  if (!hadConcreteNonQuestionTokens) {
    return matchesModelAnswerScienceVocab(strippedLower, strippedWordSet, modelFallbackTokens);
  }

  return false;
}

export function gradeAnswer(
  answer: string,
  markScheme: string[],
  questionPrompt?: string,
  modelAnswer?: string,
): GradeResult {
  const cleanRaw = normalizeUnicode(answer).trim();
  const alphaCheck = cleanRaw
    .replace(/[^a-z0-9'\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!alphaCheck || alphaCheck.replace(/\s+/g, "").length === 0 || NON_ANSWER_RE.test(alphaCheck)) {
    return { verdict: "needs-work", matched: [], missed: markScheme, score: 0 };
  }

  const stripped = questionPrompt ? stripCopiedStemRuns(questionPrompt, answer) : cleanRaw;
  const strippedAlpha = stripped.replace(/[^a-z0-9]/gi, "").trim();
  if (strippedAlpha.length === 0) {
    return { verdict: "needs-work", matched: [], missed: markScheme, score: 0 };
  }

  const qClean = questionPrompt ? normalizeUnicode(questionPrompt).toLowerCase() : "";
  const questionWordSet = new Set(
    qClean.match(/[a-z0-9]+(?:\.[0-9]+)?(?:\^[a-z0-9+-]+)?/g) || [],
  );

  // Extract concrete non-question science vocabulary from modelAnswer for open-ended rubric bullets
  const resolvedModel = modelAnswer ?? lookupModelAnswer(markScheme, questionPrompt);
  const modelFallbackTokens = resolvedModel
    ? Array.from(
        new Set(
          extractTokens(normalizeUnicode(resolvedModel)).filter((t) => !questionWordSet.has(t)),
        ),
      )
    : [];

  const matched: string[] = [];
  const missed: string[] = [];

  for (const point of markScheme) {
    if (pointHit(stripped, cleanRaw, point, questionWordSet, modelFallbackTokens)) {
      matched.push(point);
    } else {
      missed.push(point);
    }
  }

  const score = markScheme.length ? matched.length / markScheme.length : 0;
  let verdict: GradeVerdict = "needs-work";
  if (score >= 0.75) verdict = "correct";
  else if (score >= 0.4) verdict = "partial";
  return { verdict, matched, missed, score };
}
