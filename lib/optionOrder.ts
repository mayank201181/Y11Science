// Stable per-question option order. Authored answers cluster on option B, so
// every MCQ is rendered in a deterministic shuffled order (identical across
// reloads and devices). Purely numeric option sets sharing the same unit are
// sorted ascending instead, matching printed Edexcel IGCSE papers.
// Returns AUTHORED indices (e.g. [2, 0, 3, 1]).

/** Hash a string to a 32-bit FNV-1a seed. */
export function seedFrom(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Deterministic mulberry32 PRNG returning floats in [0, 1). */
export function makeRng(seed: number): { next: () => number; shuffle: <T>(items: readonly T[]) => T[] } {
  let a = seed >>> 0 || 0x9e3779b9;
  const next = () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  return {
    next,
    shuffle<T>(items: readonly T[]): T[] {
      const out = [...items];
      for (let i = out.length - 1; i > 0; i--) {
        const j = Math.floor(next() * (i + 1));
        [out[i], out[j]] = [out[j], out[i]];
      }
      return out;
    },
  };
}

const SUP_MAP: Record<string, string> = {
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
  "⁻": "-",
};

function parseNumericOption(option: string): { value: number; unit: string } | null {
  const plain = option
    .replace(/\{\{|\}\}/g, "")
    .replace(/[−–—]/g, "-")
    .replace(/[×✕]/g, "*")
    .replace(/,/g, "")
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+/g, (m) => `^${m.split("").map((c) => SUP_MAP[c] ?? c).join("")}`)
    .trim();

  // Scientific notation: e.g. "3.0 * 10^8 m/s"
  const sci = plain.match(
    /^([+-]?\d+(?:\.\d+)?)\s*\*\s*10\s*\^\s*\(?([+-]?\d+)\)?\s*([a-z%°Ωμ/\s^0-9-]*)$/i,
  );
  if (sci) {
    const mant = Number(sci[1]);
    const exp = Number(sci[2]);
    const unit = sci[3].trim().toLowerCase().replace(/\s+/g, "");
    if (Number.isFinite(mant) && Number.isFinite(exp) && !/[a-z]{5,}/i.test(unit)) {
      return { value: mant * 10 ** exp, unit };
    }
  }

  // Plain integer, decimal, or fraction with optional short SI unit (e.g. "60 C", "2.5 m/s", "50%", "80 °C")
  const frac = plain.match(/^([+-]?\d+)\s*\/\s*(\d+)\s*([a-z%°Ωμ/\s^0-9-]*)$/i);
  if (frac) {
    const num = Number(frac[1]);
    const den = Number(frac[2]);
    const unit = frac[3].trim().toLowerCase().replace(/\s+/g, "");
    if (den !== 0 && !/[a-z]{5,}/i.test(unit)) {
      return { value: num / den, unit };
    }
  }

  const numMatch = plain.match(/^([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*([a-z%°Ωμ/\s^0-9-]*)$/i);
  if (!numMatch) return null;
  const value = Number(numMatch[1]);
  const unit = numMatch[2].trim().toLowerCase().replace(/\s+/g, "");
  if (!Number.isFinite(value)) return null;
  // Reject prose trailing text (e.g. "2 chromosomes per gamete"); keep SI units/symbols only
  if (unit && !/^(?:%|°[cf]?|Ω|[a-zμ]{1,4}(?:\^[+-]?\d+)?(?:\/[a-zμ]{1,4}(?:\^[+-]?\d+)?)?)$/i.test(unit)) {
    return null;
  }
  return { value, unit };
}

/**
 * Deterministic display order of AUTHORED indices for an MCQ's options.
 * - If all options are distinct numbers with the same unit, sort ascending.
 * - Otherwise shuffle deterministically from `opt:${qid}`.
 */
export function optionOrder(qid: string, options: readonly string[]): number[] {
  const idx = options.map((_, i) => i);
  if (options.length <= 1) return idx;
  const parsed = options.map(parseNumericOption);
  if (parsed.every((p) => p !== null)) {
    const units = new Set(parsed.map((p) => p!.unit));
    const vals = parsed.map((p) => p!.value);
    if (units.size === 1 && new Set(vals).size === vals.length) {
      return idx.sort((a, b) => vals[a] - vals[b]);
    }
  }
  return makeRng(seedFrom(`opt:${qid}`)).shuffle(idx);
}
