"use client";

import { useState } from "react";
import { Wrap, Stepper, Slider, Choice, Readout, Caption } from "./kit";

// ───────────────────────────────────────────────────────────────────────────
// bio-inheritance → Punnett square generator (monohybrid cross)
// ───────────────────────────────────────────────────────────────────────────
type Allele = "A" | "a";

// Order a two-allele genotype consistently: dominant first (e.g. "Aa" not "aA").
function order(g: string): string {
  return g.split("").sort((x, y) => (x === y ? 0 : x === "A" ? -1 : 1)).join("");
}

function PunnettSquare() {
  // Each parent is two allele toggles.
  const [p1, setP1] = useState<[Allele, Allele]>(["A", "a"]);
  const [p2, setP2] = useState<[Allele, Allele]>(["A", "a"]);

  const flip = (a: Allele): Allele => (a === "A" ? "a" : "A");
  const toggleP1 = (i: 0 | 1) =>
    setP1((p) => (i === 0 ? [flip(p[0]), p[1]] : [p[0], flip(p[1])]));
  const toggleP2 = (i: 0 | 1) =>
    setP2((p) => (i === 0 ? [flip(p[0]), p[1]] : [p[0], flip(p[1])]));

  const geno = (p: [Allele, Allele]) => order(p.join(""));

  // 2×2 offspring grid: row = p1 gamete, col = p2 gamete.
  const cells: string[] = [];
  for (const a of p1) for (const b of p2) cells.push(order(a + b));

  // Genotype counts.
  const gCount: Record<string, number> = {};
  for (const c of cells) gCount[c] = (gCount[c] || 0) + 1;

  // Phenotype: dominant if any "A" present, else recessive.
  const isDom = (g: string) => g.includes("A");
  const domN = cells.filter(isDom).length;
  const recN = 4 - domN;

  // Build readable ratios (reduce to simplest among non-zero parts).
  function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
  }
  function ratio(parts: number[]): string {
    const nz = parts.filter((n) => n > 0);
    if (nz.length <= 1) return nz.length === 1 ? "all" : "—";
    const g = nz.reduce((acc, n) => gcd(acc, n));
    return nz.map((n) => n / g).join(" : ");
  }

  const genoOrder = ["AA", "Aa", "aa"].filter((g) => gCount[g] > 0);
  const genoRatio = ratio(genoOrder.map((g) => gCount[g]));
  const phenoRatio = ratio([domN, recN]);

  const AlleleBtn = ({ a, on }: { a: Allele; on: () => void }) => (
    <button onClick={on} className="btn btn-ghost px-2.5 py-0.5 font-black text-base leading-none">
      {a}
    </button>
  );

  const cellFill = (g: string) => (isDom(g) ? "#1e3a5f" : "#3a1e2e");
  const cellInk = (g: string) => (isDom(g) ? "#34d399" : "#fb7185");

  return (
    <Wrap title="Punnett Square Generator (monohybrid cross)">
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="rounded-xl bg-bg-soft border border-line p-2 text-center">
          <div className="text-xs text-ink-soft mb-1">Parent 1 alleles</div>
          <div className="flex items-center justify-center gap-1">
            <AlleleBtn a={p1[0]} on={() => toggleP1(0)} />
            <AlleleBtn a={p1[1]} on={() => toggleP1(1)} />
          </div>
          <div className="text-xs text-ink-soft mt-1">genotype {geno(p1)}</div>
        </div>
        <div className="rounded-xl bg-bg-soft border border-line p-2 text-center">
          <div className="text-xs text-ink-soft mb-1">Parent 2 alleles</div>
          <div className="flex items-center justify-center gap-1">
            <AlleleBtn a={p2[0]} on={() => toggleP2(0)} />
            <AlleleBtn a={p2[1]} on={() => toggleP2(1)} />
          </div>
          <div className="text-xs text-ink-soft mt-1">genotype {geno(p2)}</div>
        </div>
      </div>

      <div className="diagram mb-3">
        <svg viewBox="0 0 220 220" role="img" aria-label={`Punnett square for ${geno(p1)} crossed with ${geno(p2)}`}>
          {/* corner label */}
          <text x="30" y="34" fill="#b7bce0" fontSize="11" textAnchor="middle">♀×♂</text>
          {/* column headers = parent 2 gametes */}
          <text x="110" y="34" fill="#fde68a" fontSize="20" fontWeight="bold" textAnchor="middle">{p2[0]}</text>
          <text x="180" y="34" fill="#fde68a" fontSize="20" fontWeight="bold" textAnchor="middle">{p2[1]}</text>
          {/* row headers = parent 1 gametes */}
          <text x="30" y="108" fill="#38bdf8" fontSize="20" fontWeight="bold" textAnchor="middle">{p1[0]}</text>
          <text x="30" y="178" fill="#38bdf8" fontSize="20" fontWeight="bold" textAnchor="middle">{p1[1]}</text>
          {/* 4 cells */}
          {cells.map((g, i) => {
            const col = i % 2;
            const row = Math.floor(i / 2);
            const x = 70 + col * 75;
            const y = 50 + row * 75;
            return (
              <g key={i}>
                <rect x={x} y={y} width="70" height="70" rx="6" fill={cellFill(g)} stroke="#475569" strokeWidth="1.5" />
                <text x={x + 35} y={y + 40} fill={cellInk(g)} fontSize="22" fontWeight="bold" textAnchor="middle">{g}</text>
                <text x={x + 35} y={y + 56} fill="#b7bce0" fontSize="9" textAnchor="middle">{isDom(g) ? "dominant" : "recessive"}</text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-1">
        <Readout label="Genotype ratio" value={genoRatio} hint={genoOrder.join(" : ")} />
        <Readout label="Phenotype ratio" value={phenoRatio} hint="dominant : recessive" />
      </div>

      <Caption>
        Each parent passes <strong>one</strong> of its two alleles to each gamete. The grid combines
        every parent-1 gamete (rows) with every parent-2 gamete (columns) to show the four equally
        likely offspring. A capital <strong>A</strong> is dominant, so any genotype containing an A
        shows the dominant phenotype; only <strong>aa</strong> shows the recessive one. A classic{" "}
        <strong>Aa × Aa</strong> cross gives genotypes 1 AA : 2 Aa : 1 aa and phenotypes 3 : 1.
      </Caption>
    </Wrap>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// bio-reproduction → Menstrual cycle explorer
// ───────────────────────────────────────────────────────────────────────────

// Relative hormone level (0–1) for a given day of a 28-day cycle.
// Shaped to match the IGCSE description: oestrogen peaks ~day 12–13 (triggers
// LH surge), LH spikes ~day 13–14 (ovulation), progesterone peaks ~day 21.
function fsh(d: number): number {
  // High early (stimulates follicle), small surge near ovulation, low in luteal.
  const early = Math.exp(-((d - 3) ** 2) / 18) * 0.8;
  const surge = Math.exp(-((d - 13) ** 2) / 4) * 0.5;
  return Math.min(1, 0.25 + early + surge);
}
function lh(d: number): number {
  // Sharp surge at day ~13.
  return Math.min(1, 0.12 + Math.exp(-((d - 13) ** 2) / 1.6) * 0.95);
}
function oestrogen(d: number): number {
  const rise = Math.exp(-((d - 12.5) ** 2) / 10) * 0.95;
  const luteal = Math.exp(-((d - 21) ** 2) / 26) * 0.45;
  return Math.min(1, 0.1 + rise + luteal);
}
function progesterone(d: number): number {
  return Math.min(1, 0.05 + Math.exp(-((d - 21) ** 2) / 18) * 0.95);
}

function phaseOf(d: number): { name: string; note: string } {
  if (d <= 5) return { name: "Menstruation", note: "uterine lining is shed (days 1–5)" };
  if (d < 14) return { name: "Follicular phase", note: "lining repairs & thickens (oestrogen rising)" };
  if (d <= 15) return { name: "Ovulation (~day 14)", note: "LH surge releases the egg" };
  return { name: "Luteal phase", note: "progesterone maintains the lining (days 15–28)" };
}

function MenstrualCycle() {
  const [day, setDay] = useState(14);
  const phase = phaseOf(day);

  // Build SVG polyline points for a curve fn across days 1..28.
  const W = 300;
  const H = 150;
  const x0 = 30;
  const y0 = 130;
  const plotW = W - x0 - 8;
  const plotH = y0 - 14;
  const px = (d: number) => x0 + ((d - 1) / 27) * plotW;
  const py = (v: number) => y0 - v * plotH;
  const curve = (fn: (d: number) => number) => {
    const pts: string[] = [];
    for (let d = 1; d <= 28; d += 0.5) pts.push(`${px(d).toFixed(1)},${py(fn(d)).toFixed(1)}`);
    return pts.join(" ");
  };

  const markX = px(day);
  const lvl = (fn: (d: number) => number) => Math.round(fn(day) * 100);

  const Legend = ({ c, label }: { c: string; label: string }) => (
    <span className="inline-flex items-center gap-1 text-xs text-ink-soft mr-2">
      <span style={{ background: c }} className="inline-block w-3 h-1 rounded" /> {label}
    </span>
  );

  return (
    <Wrap title="Menstrual Cycle Explorer (28-day cycle)">
      <div className="diagram mb-2">
        <svg viewBox="0 0 300 168" role="img" aria-label={`Hormone levels on day ${day} of the menstrual cycle`}>
          {/* axes */}
          <line x1={x0} y1="14" x2={x0} y2={y0} stroke="#64748b" strokeWidth="1" />
          <line x1={x0} y1={y0} x2={W - 8} y2={y0} stroke="#64748b" strokeWidth="1" />
          <text x="6" y="78" fill="#94a3b8" fontSize="8" transform="rotate(-90 6 78)" textAnchor="middle">hormone level</text>
          {/* day ticks */}
          {[1, 7, 14, 21, 28].map((d) => (
            <text key={d} x={px(d)} y={y0 + 11} fill="#94a3b8" fontSize="8" textAnchor="middle">{d}</text>
          ))}
          <text x={(x0 + W) / 2} y="166" fill="#94a3b8" fontSize="8" textAnchor="middle">day of cycle</text>
          {/* menstruation band */}
          <rect x={px(1)} y="14" width={px(5) - px(1)} height={plotH} fill="#fb7185" opacity="0.12" />
          {/* curves */}
          <polyline points={curve(fsh)} fill="none" stroke="#38bdf8" strokeWidth="1.6" />
          <polyline points={curve(lh)} fill="none" stroke="#fbbf24" strokeWidth="1.6" />
          <polyline points={curve(oestrogen)} fill="none" stroke="#fb7185" strokeWidth="2" />
          <polyline points={curve(progesterone)} fill="none" stroke="#a78bfa" strokeWidth="2" />
          {/* day marker */}
          <line x1={markX} y1="14" x2={markX} y2={y0} stroke="#e8e9f5" strokeWidth="1.2" strokeDasharray="3,2" />
          <circle cx={markX} cy="14" r="3" fill="#e8e9f5" />
        </svg>
      </div>

      <div className="mb-2">
        <Legend c="#38bdf8" label="FSH" />
        <Legend c="#fbbf24" label="LH" />
        <Legend c="#fb7185" label="oestrogen" />
        <Legend c="#a78bfa" label="progesterone" />
      </div>

      <Slider label="Day of cycle" value={day} set={setDay} min={1} max={28} display={`Day ${day}`} />

      <div className="grid grid-cols-2 gap-2 my-2">
        <Readout label="Phase" value={phase.name} hint={phase.note} />
        <Readout label="Relative levels" value={`O ${lvl(oestrogen)}% · P ${lvl(progesterone)}%`} hint={`FSH ${lvl(fsh)}% · LH ${lvl(lh)}%`} />
      </div>

      <Caption>
        <strong>FSH</strong> (from the pituitary) matures a follicle and stimulates{" "}
        <strong>oestrogen</strong>, which repairs and thickens the uterine lining. High oestrogen
        triggers an <strong>LH</strong> surge around day 13, causing <strong>ovulation</strong> on
        day ~14. The empty follicle becomes the corpus luteum, secreting{" "}
        <strong>progesterone</strong> to maintain the lining. If no pregnancy occurs, progesterone
        falls and menstruation restarts the cycle.
      </Caption>
    </Wrap>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// bio-molecules → Condensation polymer builder
// ───────────────────────────────────────────────────────────────────────────

function PolymerBuilder() {
  const [n, setN] = useState(4); // number of glucose monomers
  const water = Math.max(0, n - 1); // condensation: n monomers → n−1 bonds → n−1 water

  const polymerName =
    n === 1 ? "glucose (single monomer)" : n === 2 ? "maltose (disaccharide)" : `a starch chain (${n} glucose units)`;

  // Draw up to N monomer hexagons in a chain, wrapping rows.
  const perRow = 6;
  const rows = Math.ceil(n / perRow);
  const cellW = 44;
  const cellH = 40;
  const svgW = 300;
  const svgH = 24 + rows * cellH + 10;

  const hexes: { x: number; y: number; i: number }[] = [];
  for (let i = 0; i < n; i++) {
    const r = Math.floor(i / perRow);
    const c = i % perRow;
    hexes.push({ x: 12 + c * cellW, y: 20 + r * cellH, i });
  }

  return (
    <Wrap title="Condensation Polymer Builder">
      <div className="diagram mb-3">
        <svg viewBox={`0 0 ${svgW} ${svgH}`} role="img" aria-label={`${n} glucose monomers joined into a polymer, releasing ${water} water molecules`}>
          {hexes.map(({ x, y, i }) => {
            const cx = x + 18;
            const cy = y + 16;
            // simple hexagon
            const pts = Array.from({ length: 6 }, (_, k) => {
              const ang = (Math.PI / 3) * k - Math.PI / 6;
              return `${(cx + 15 * Math.cos(ang)).toFixed(1)},${(cy + 15 * Math.sin(ang)).toFixed(1)}`;
            }).join(" ");
            return (
              <g key={i}>
                {/* glycosidic bond link to previous in same row */}
                {i % perRow !== 0 && (
                  <line x1={x - cellW + 33} y1={cy} x2={x + 3} y2={cy} stroke="#a78bfa" strokeWidth="2" />
                )}
                <polygon points={pts} fill="#1e3a5f" stroke="#38bdf8" strokeWidth="1.5" />
                <text x={cx} y={cy + 3} fill="#38bdf8" fontSize="8" textAnchor="middle">Glu</text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-3">
        <Readout label="Monomers" value={n} hint="glucose units" />
        <Readout label="Bonds formed" value={water} hint="glycosidic" />
        <Readout label="Water released" value={water} hint="H₂O molecules" />
      </div>

      <Stepper label="Glucose monomers (n)" value={n} set={setN} min={1} max={12} />

      <Caption>
        Joining <strong>{n}</strong> monomers needs <strong>{water}</strong> bond
        {water === 1 ? "" : "s"}, and each bond formed by <strong>condensation</strong> releases one
        water molecule — so <strong>n monomers → (n − 1) water</strong>. This builds {polymerName}.
        The reverse reaction, <strong>hydrolysis</strong>, adds water back to break each bond and
        release the monomers again (as in digestion).
      </Caption>
    </Wrap>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// bio-human-nutrition → Energy balance
// ───────────────────────────────────────────────────────────────────────────

const ACTIVITY = ["Sedentary", "Moderate", "Very active"] as const;
type Activity = (typeof ACTIVITY)[number];
// Typical extra energy used above a resting baseline, kJ/day (illustrative).
const ACTIVITY_USE: Record<Activity, number> = {
  Sedentary: 9000,
  Moderate: 11000,
  "Very active": 14000,
};

function EnergyBalance() {
  const [intake, setIntake] = useState(10000); // kJ/day
  const [activity, setActivity] = useState<Activity>("Moderate");
  const used = ACTIVITY_USE[activity];

  const balance = intake - used; // + surplus, − deficit
  const surplus = balance > 0;
  const roughlyBalanced = Math.abs(balance) < 400;

  // ~1 g body fat stores ~37 kJ → mass change per day from balance.
  const gramsPerDay = Math.round(Math.abs(balance) / 37);

  const verdict = roughlyBalanced
    ? "In balance"
    : surplus
      ? "Energy surplus"
      : "Energy deficit";
  const meaning = roughlyBalanced
    ? "intake ≈ energy used, so body mass stays about the same"
    : surplus
      ? `extra energy is stored as fat (≈ +${gramsPerDay} g/day)`
      : `stored fat is broken down for energy (≈ −${gramsPerDay} g/day)`;

  // Bar widths.
  const maxKJ = 16000;
  const w = (v: number) => `${Math.min(100, (v / maxKJ) * 100)}%`;

  return (
    <Wrap title="Energy Balance">
      <div className="space-y-2 mb-3">
        <div>
          <div className="flex justify-between text-xs text-ink-soft mb-0.5">
            <span>Energy IN (intake)</span>
            <span className="tabular-nums">{intake.toLocaleString()} kJ</span>
          </div>
          <div className="h-4 rounded-full bg-bg-soft border border-line overflow-hidden">
            <div className="h-full bg-emerald-400" style={{ width: w(intake) }} />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs text-ink-soft mb-0.5">
            <span>Energy OUT (used)</span>
            <span className="tabular-nums">{used.toLocaleString()} kJ</span>
          </div>
          <div className="h-4 rounded-full bg-bg-soft border border-line overflow-hidden">
            <div className="h-full bg-sky-400" style={{ width: w(used) }} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <Readout
          label="Daily balance"
          value={`${balance > 0 ? "+" : balance < 0 ? "−" : ""}${Math.abs(balance).toLocaleString()} kJ`}
          hint={verdict}
        />
        <Readout label="What it means" value={roughlyBalanced ? "Stable" : surplus ? "Store fat" : "Lose mass"} hint={meaning} />
      </div>

      <Slider label="Energy intake" value={intake} set={setIntake} min={4000} max={16000} step={250} display={`${intake.toLocaleString()} kJ`} />
      <div className="py-1">
        <div className="text-sm mb-1">Activity level (energy used)</div>
        <Choice options={ACTIVITY} value={activity} set={setActivity} />
      </div>

      <Caption>
        Body mass stays constant when <strong>energy in = energy out</strong>. A lasting{" "}
        <strong>surplus</strong> is stored as fat (weight gain); a lasting <strong>deficit</strong>{" "}
        makes the body break down its fat stores (weight loss). More active people use more energy,
        so they can eat more for the same balance. A <strong>balanced diet</strong> supplies the
        right amount of energy plus all the nutrients, vitamins, minerals, fibre and water the body
        needs.
      </Caption>
    </Wrap>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// bio-gas-respiration → Aerobic vs anaerobic respiration
// ───────────────────────────────────────────────────────────────────────────

const MODE = ["Aerobic", "Anaerobic"] as const;
type Mode = (typeof MODE)[number];
const ORGANISM = ["Human muscle", "Yeast"] as const;
type Organism = (typeof ORGANISM)[number];

function RespirationExplorer() {
  const [mode, setMode] = useState<Mode>("Aerobic");
  const [organism, setOrganism] = useState<Organism>("Human muscle");
  const [glucose, setGlucose] = useState(2); // moles (or "units") of glucose

  const aerobic = mode === "Aerobic";

  // Relative ATP yield (IGCSE: aerobic ~ much higher). Use a simple per-glucose factor.
  // Illustrative: aerobic ≈ 38 ATP, anaerobic ≈ 2 ATP per glucose.
  const atpPer = aerobic ? 38 : 2;
  const atpTotal = atpPer * glucose;

  let wordEq: string;
  let products: string;
  let location: string;
  if (aerobic) {
    wordEq = "glucose + oxygen → carbon dioxide + water";
    products = `${6 * glucose} CO₂ + ${6 * glucose} H₂O`;
    location = "mitochondria";
  } else if (organism === "Human muscle") {
    wordEq = "glucose → lactic acid";
    products = `${glucose} lactic acid`;
    location = "cytoplasm";
  } else {
    wordEq = "glucose → ethanol + carbon dioxide";
    products = `${2 * glucose} ethanol + ${2 * glucose} CO₂`;
    location = "cytoplasm";
  }

  // ATP bar (cap relative to a 4-glucose aerobic max so the difference is dramatic).
  const maxAtp = 38 * 4;
  const atpW = `${Math.min(100, (atpTotal / maxAtp) * 100)}%`;

  return (
    <Wrap title="Aerobic vs Anaerobic Respiration">
      <div className="py-1">
        <div className="text-sm mb-1">Respiration type</div>
        <Choice options={MODE} value={mode} set={setMode} />
      </div>
      {!aerobic && (
        <div className="py-1">
          <div className="text-sm mb-1">Organism</div>
          <Choice options={ORGANISM} value={organism} set={setOrganism} />
        </div>
      )}
      <Stepper label="Glucose (units)" value={glucose} set={setGlucose} min={1} max={4} />

      <div className="rounded-xl bg-bg-soft border border-line p-3 my-3 text-center">
        <div className="text-xs text-ink-soft mb-1">Word equation</div>
        <div className="font-bold">{wordEq}</div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <Readout label="Products" value={products} hint={`in the ${location}`} />
        <Readout label="ATP / energy" value={atpTotal} hint={`${aerobic ? "high" : "low"} yield (~${atpPer}/glucose)`} />
      </div>

      <div className="mb-1">
        <div className="flex justify-between text-xs text-ink-soft mb-0.5">
          <span>Relative energy yield</span>
          <span className="tabular-nums">{atpTotal} ATP</span>
        </div>
        <div className="h-4 rounded-full bg-bg-soft border border-line overflow-hidden">
          <div className={`h-full ${aerobic ? "bg-emerald-400" : "bg-amber-400"}`} style={{ width: atpW }} />
        </div>
      </div>

      <Caption>
        <strong>Aerobic</strong> respiration uses oxygen to fully oxidise glucose in the{" "}
        <strong>mitochondria</strong>, releasing far more energy ({"C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O"}).
        <strong> Anaerobic</strong> respiration happens in the cytoplasm without oxygen and releases
        much less:{" "}
        {organism === "Yeast" && !aerobic
          ? "yeast ferments glucose to ethanol + CO₂ (used in brewing and baking)."
          : "human muscle produces lactic acid, which builds up and causes fatigue."}{" "}
        After hard exercise, extra oxygen is taken in to break down the lactic acid — the{" "}
        <strong>oxygen debt</strong>.
      </Caption>
    </Wrap>
  );
}

import type { ReactElement } from "react";
export const widgets: Record<string, () => ReactElement> = {
  "bio-inheritance": PunnettSquare,
  "bio-reproduction": MenstrualCycle,
  "bio-molecules": PolymerBuilder,
  "bio-human-nutrition": EnergyBalance,
  "bio-gas-respiration": RespirationExplorer,
};
