"use client";

import { useState } from "react";
import { Wrap, Stepper, Slider, Choice, Readout, Caption } from "./kit";

// ───────────────────────────────────────────────────────────────────────────
// chem-energetics → Bond-energy ΔH calculator
// ΔH = Σ(bonds broken) − Σ(bonds made). Negative → exothermic.
// ───────────────────────────────────────────────────────────────────────────

// Presets carry the exact bond totals from the IGCSE worked examples.
const ENERGY_PRESETS: Record<
  string,
  { label: string; broken: number; made: number; brokenNote: string; madeNote: string }
> = {
  hcl: {
    label: "H₂ + Cl₂ → 2HCl",
    broken: 679, // H–H 436 + Cl–Cl 243
    made: 864, // 2 × H–Cl (2 × 432)
    brokenNote: "H–H 436 + Cl–Cl 243",
    madeNote: "2 × H–Cl (2 × 432)",
  },
  methane: {
    label: "CH₄ + 2O₂ → CO₂ + 2H₂O",
    broken: 2648, // 4×C–H (1652) + 2×O=O (996)
    made: 3466, // 2×C=O (1610) + 4×O–H (1856)
    brokenNote: "4×C–H 1652 + 2×O=O 996",
    madeNote: "2×C=O 1610 + 4×O–H 1856",
  },
  ammonia: {
    label: "N₂ + 3H₂ → 2NH₃",
    broken: 2253, // N≡N 945 + 3×H–H 1308
    made: 2346, // 6 × N–H (2346)
    brokenNote: "N≡N 945 + 3×H–H 1308",
    madeNote: "6 × N–H (2346)",
  },
};

function EnergyProfile() {
  const [preset, setPreset] = useState<"hcl" | "methane" | "ammonia" | "custom">("hcl");
  const [broken, setBroken] = useState(679);
  const [made, setMade] = useState(864);

  const usePreset = (key: "hcl" | "methane" | "ammonia") => {
    setPreset(key);
    setBroken(ENERGY_PRESETS[key].broken);
    setMade(ENERGY_PRESETS[key].made);
  };

  const dH = broken - made;
  const exo = dH < 0;
  const verdict = dH === 0 ? "No net change" : exo ? "Exothermic" : "Endothermic";

  // Energy-profile geometry. Reactants level fixed; products shifted by ΔH.
  const rY = 70; // reactants baseline (px from top)
  const scale = 0.03; // px per kJ for the products offset
  const pY = Math.max(20, Math.min(150, rY + dH * scale));
  const peakY = Math.min(rY, pY) - 30; // activation-energy hump above the higher level
  const pathD = `M50,${rY} C95,${rY} 105,${peakY} 150,${peakY} C195,${peakY} 205,${pY} 250,${pY}`;

  return (
    <Wrap title="Bond-energy ΔH calculator">
      <div className="mb-3">
        <Choice
          options={["H₂+Cl₂", "CH₄+O₂", "N₂+H₂", "Custom"] as const}
          value={
            preset === "hcl"
              ? "H₂+Cl₂"
              : preset === "methane"
                ? "CH₄+O₂"
                : preset === "ammonia"
                  ? "N₂+H₂"
                  : "Custom"
          }
          set={(v) => {
            if (v === "H₂+Cl₂") usePreset("hcl");
            else if (v === "CH₄+O₂") usePreset("methane");
            else if (v === "N₂+H₂") usePreset("ammonia");
            else setPreset("custom");
          }}
        />
      </div>

      <div className="diagram mb-3">
        <svg viewBox="0 0 300 180" role="img" aria-label="Energy profile diagram for the chosen reaction">
          <line x1="30" y1="10" x2="30" y2="170" stroke="#64748b" strokeWidth="1.5" />
          <line x1="30" y1="170" x2="290" y2="170" stroke="#64748b" strokeWidth="1.5" />
          <text x="14" y="92" fill="#b7bce0" fontSize="9" textAnchor="middle" transform="rotate(-90,14,92)">
            Energy
          </text>
          <text x="160" y="182" fill="#b7bce0" fontSize="9" textAnchor="middle">
            Reaction pathway
          </text>
          {/* pathway curve */}
          <path d={pathD} fill="none" stroke="#fbbf24" strokeWidth="2.5" />
          {/* reactants level */}
          <line x1="40" y1={rY} x2="80" y2={rY} stroke="#34d399" strokeWidth="2" />
          <text x="42" y={rY - 5} fill="#34d399" fontSize="9">
            Reactants
          </text>
          {/* products level */}
          <line x1="220" y1={pY} x2="270" y2={pY} stroke="#38bdf8" strokeWidth="2" />
          <text x="222" y={pY + (pY > rY ? 13 : -5)} fill="#38bdf8" fontSize="9">
            Products
          </text>
          {/* ΔH arrow */}
          <line x1="255" y1={rY} x2="255" y2={pY} stroke="#a78bfa" strokeWidth="1.5" />
          <polygon
            points={
              pY > rY
                ? `255,${pY + 6} 251,${pY - 4} 259,${pY - 4}`
                : `255,${pY - 6} 251,${pY + 4} 259,${pY + 4}`
            }
            fill="#a78bfa"
          />
          <text x="262" y={(rY + pY) / 2} fill="#a78bfa" fontSize="9">
            ΔH {exo ? "−" : dH === 0 ? "" : "+"}
          </text>
          {/* Ea hump label */}
          <text x="150" y={peakY - 4} fill="#fb7185" fontSize="9" textAnchor="middle">
            Ea
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-3">
        <Readout label="Broken" value={broken} hint="energy IN (kJ)" />
        <Readout label="Made" value={made} hint="energy OUT (kJ)" />
        <Readout
          label="ΔH"
          value={`${dH > 0 ? "+" : ""}${dH}`}
          hint={`kJ/mol · ${verdict}`}
        />
      </div>

      {preset !== "custom" ? (
        <p className="text-xs text-ink-soft mb-2">
          Broken: {ENERGY_PRESETS[preset].brokenNote} · Made: {ENERGY_PRESETS[preset].madeNote}. Pick
          “Custom” to enter your own totals.
        </p>
      ) : (
        <>
          <Stepper
            label="Bonds broken total"
            value={broken}
            set={(n) => {
              setBroken(n);
              setPreset("custom");
            }}
            min={0}
            max={5000}
            step={1}
            suffix=" kJ"
          />
          <Stepper
            label="Bonds made total"
            value={made}
            set={(n) => {
              setMade(n);
              setPreset("custom");
            }}
            min={0}
            max={5000}
            step={1}
            suffix=" kJ"
          />
        </>
      )}

      <Caption>
        <strong>Breaking</strong> bonds <strong>absorbs</strong> energy (endothermic); <strong>making</strong>{" "}
        bonds <strong>releases</strong> energy (exothermic). ΔH = broken − made = {broken} − {made} ={" "}
        <strong>
          {dH > 0 ? "+" : ""}
          {dH} kJ/mol
        </strong>
        .{" "}
        {dH === 0
          ? "Equal energy in and out — no net change."
          : exo
            ? "More energy is released than absorbed, so ΔH is negative → exothermic (products sit lower)."
            : "More energy is absorbed than released, so ΔH is positive → endothermic (products sit higher)."}
      </Caption>
    </Wrap>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// chem-electrochemistry → Electrolysis products predictor
// ───────────────────────────────────────────────────────────────────────────

type Cell = {
  label: string;
  cathode: string;
  cathodeEq: string;
  anode: string;
  anodeEq: string;
  why: string;
};

const CELLS: Record<string, Cell> = {
  "molten PbBr₂": {
    label: "Molten PbBr₂",
    cathode: "Lead (Pb)",
    cathodeEq: "Pb²⁺ + 2e⁻ → Pb",
    anode: "Bromine (Br₂)",
    anodeEq: "2Br⁻ → Br₂ + 2e⁻",
    why: "Molten — only Pb²⁺ and Br⁻ present, no water, so the metal is deposited and the halogen is released.",
  },
  "molten Al₂O₃": {
    label: "Molten Al₂O₃",
    cathode: "Aluminium (Al)",
    cathodeEq: "Al³⁺ + 3e⁻ → Al",
    anode: "Oxygen (O₂)",
    anodeEq: "2O²⁻ → O₂ + 4e⁻",
    why: "Molten (in cryolite) — only Al³⁺ and O²⁻ present. Industrial extraction of aluminium.",
  },
  "dilute NaCl(aq)": {
    label: "Dilute NaCl(aq)",
    cathode: "Hydrogen (H₂)",
    cathodeEq: "2H⁺ + 2e⁻ → H₂",
    anode: "Oxygen (O₂)",
    anodeEq: "4OH⁻ → O₂ + 2H₂O + 4e⁻",
    why: "Na⁺ is more reactive than H, so H₂ forms. Chloride is dilute, so OH⁻ wins → O₂.",
  },
  "conc NaCl(aq)": {
    label: "Conc. NaCl(aq)",
    cathode: "Hydrogen (H₂)",
    cathodeEq: "2H⁺ + 2e⁻ → H₂",
    anode: "Chlorine (Cl₂)",
    anodeEq: "2Cl⁻ → Cl₂ + 2e⁻",
    why: "Na⁺ more reactive than H → H₂. High [Cl⁻] outcompetes OH⁻ → Cl₂ (chlor-alkali process).",
  },
  "CuSO₄(aq) inert": {
    label: "CuSO₄(aq), inert",
    cathode: "Copper (Cu)",
    cathodeEq: "Cu²⁺ + 2e⁻ → Cu",
    anode: "Oxygen (O₂)",
    anodeEq: "4OH⁻ → O₂ + 2H₂O + 4e⁻",
    why: "Cu is less reactive than H, so copper is deposited (blue fades). No halide → O₂ at anode.",
  },
  "dilute H₂SO₄": {
    label: "Dilute H₂SO₄",
    cathode: "Hydrogen (H₂)",
    cathodeEq: "2H⁺ + 2e⁻ → H₂",
    anode: "Oxygen (O₂)",
    anodeEq: "4OH⁻ → O₂ + 2H₂O + 4e⁻",
    why: "No metal less reactive than H and no halide → water is decomposed into H₂ and O₂ (2:1).",
  },
};

function ElectrolysisPredictor() {
  const keys = Object.keys(CELLS) as (keyof typeof CELLS)[];
  const [sel, setSel] = useState<string>("molten PbBr₂");
  const c = CELLS[sel];

  return (
    <Wrap title="Electrolysis products predictor">
      <div className="mb-3">
        <Choice options={keys.map((k) => CELLS[k].label) as string[]} value={c.label} set={(label) => {
          const key = keys.find((k) => CELLS[k].label === label);
          if (key) setSel(key as string);
        }} />
      </div>

      <div className="diagram mb-3">
        <svg viewBox="0 0 300 170" role="img" aria-label={`Electrolysis cell for ${c.label}`}>
          {/* supply */}
          <line x1="70" y1="18" x2="230" y2="18" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="150" y="13" fill="#94a3b8" fontSize="8" textAnchor="middle">
            d.c. supply
          </text>
          <line x1="90" y1="18" x2="90" y2="48" stroke="#94a3b8" strokeWidth="2" />
          <line x1="210" y1="18" x2="210" y2="48" stroke="#94a3b8" strokeWidth="2" />
          {/* cell */}
          <rect x="50" y="46" width="200" height="100" rx="6" fill="none" stroke="#38bdf8" strokeWidth="2" />
          <rect x="58" y="54" width="184" height="84" rx="3" fill="#1e3a5f" opacity="0.6" />
          {/* cathode (left, −) */}
          <rect x="82" y="48" width="16" height="78" rx="2" fill="#34d399" />
          <text x="90" y="44" fill="#34d399" fontSize="11" textAnchor="middle">
            −
          </text>
          <text x="90" y="160" fill="#34d399" fontSize="8" textAnchor="middle">
            Cathode
          </text>
          {/* anode (right, +) */}
          <rect x="202" y="48" width="16" height="78" rx="2" fill="#fbbf24" />
          <text x="210" y="44" fill="#fbbf24" fontSize="11" textAnchor="middle">
            +
          </text>
          <text x="210" y="160" fill="#fbbf24" fontSize="8" textAnchor="middle">
            Anode
          </text>
          {/* products */}
          <text x="120" y="90" fill="#34d399" fontSize="9">
            → {c.cathode.split(" ")[0]}
          </text>
          <text x="150" y="115" fill="#fbbf24" fontSize="9" textAnchor="end">
            {c.anode.split(" ")[0]} ←
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-2">
        <Readout label="Cathode (−)" value={c.cathode} hint={c.cathodeEq} />
        <Readout label="Anode (+)" value={c.anode} hint={c.anodeEq} />
      </div>

      <Caption>{c.why}</Caption>
    </Wrap>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// chem-metals → Reactivity & displacement + extraction method
// ───────────────────────────────────────────────────────────────────────────

// Reactivity series (most → least reactive). Carbon sits between Al and Zn.
const METALS = ["K", "Na", "Ca", "Mg", "Al", "Zn", "Fe", "Cu", "Ag"] as const;
type Metal = (typeof METALS)[number];

const METAL_NAME: Record<Metal, string> = {
  K: "potassium",
  Na: "sodium",
  Ca: "calcium",
  Mg: "magnesium",
  Al: "aluminium",
  Zn: "zinc",
  Fe: "iron",
  Cu: "copper",
  Ag: "silver",
};
// Common ionic charge for forming the salt formula.
const CHARGE: Record<Metal, number> = { K: 1, Na: 1, Ca: 2, Mg: 2, Al: 3, Zn: 2, Fe: 2, Cu: 2, Ag: 1 };

// Carbon's rank for extraction (index in METALS where carbon would sit: above Zn).
const CARBON_RANK = METALS.indexOf("Zn"); // metals before this index are above carbon

function extractionMethod(m: Metal): { method: string; detail: string } {
  if (m === "Cu" || m === "Ag")
    return {
      method: "Found native / simple processing",
      detail: "Very unreactive — sometimes found uncombined; ores need only roasting or minimal reduction.",
    };
  const idx = METALS.indexOf(m);
  if (idx < CARBON_RANK)
    return {
      method: "Electrolysis of molten compound",
      detail: "Above carbon in the series — the oxide is too stable for carbon to reduce.",
    };
  return {
    method: "Reduction with carbon",
    detail: "Below carbon in the series — its oxide is reduced by carbon/CO in a furnace.",
  };
}

// Sulfate formula for the displacement equation (Ag uses nitrate as AgSO₄ is unusual; keep sulfate generic).
function salt(m: Metal): string {
  const ch = CHARGE[m];
  return ch === 1 ? `${m}₂SO₄` : ch === 2 ? `${m}SO₄` : `${m}₂(SO₄)₃`;
}

function ReactivityDisplacement() {
  const [metal, setMetal] = useState<Metal>("Zn");
  const [ionMetal, setIonMetal] = useState<Metal>("Cu");

  const mi = METALS.indexOf(metal);
  const ii = METALS.indexOf(ionMetal);
  const same = metal === ionMetal;
  const displaces = mi < ii; // lower index = more reactive
  const ex = extractionMethod(metal);

  const wordEq = `${METAL_NAME[metal]} + ${METAL_NAME[ionMetal]} sulfate → ${METAL_NAME[metal]} sulfate + ${METAL_NAME[ionMetal]}`;
  const symEq = `${metal} + ${salt(ionMetal)} → ${salt(metal)} + ${ionMetal}`;

  return (
    <Wrap title="Reactivity & displacement">
      <div className="mb-2 text-sm">Metal added:</div>
      <div className="mb-3">
        <Choice options={METALS} value={metal} set={(v) => setMetal(v)} />
      </div>
      <div className="mb-2 text-sm">…into the sulfate solution of:</div>
      <div className="mb-3">
        <Choice options={METALS} value={ionMetal} set={(v) => setIonMetal(v)} />
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <Readout
          label="Displacement?"
          value={same ? "Same metal" : displaces ? "Yes" : "No"}
          hint={same ? "no reaction" : displaces ? "more reactive wins" : "less reactive — no reaction"}
        />
        <Readout label={`Extract ${metal}`} value={ex.method.split(" ")[0]} hint={ex.method} />
      </div>

      {displaces && !same && (
        <div className="rounded-xl bg-bg-soft border border-line p-2 mb-2 text-xs">
          <div className="font-bold mb-0.5">Word equation</div>
          <div className="mb-1">{wordEq}</div>
          <div className="font-bold mb-0.5">Symbol equation</div>
          <div className="tabular-nums">{symEq}</div>
        </div>
      )}

      <Caption>
        {same ? (
          <>A metal cannot displace itself — no reaction.</>
        ) : displaces ? (
          <>
            <strong>{METAL_NAME[metal]}</strong> is more reactive than <strong>{METAL_NAME[ionMetal]}</strong>,
            so it displaces it from solution — the more reactive metal “pushes out” the less reactive one.
          </>
        ) : (
          <>
            <strong>{METAL_NAME[metal]}</strong> is less reactive than <strong>{METAL_NAME[ionMetal]}</strong>,
            so it cannot displace it — no reaction occurs.
          </>
        )}{" "}
        Extraction of {METAL_NAME[metal]}: <strong>{ex.method}</strong>. {ex.detail}
      </Caption>
    </Wrap>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// chem-organic → Hydrocarbon builder
// ───────────────────────────────────────────────────────────────────────────

const STEMS = ["meth", "eth", "prop", "but", "pent", "hex", "hept", "oct"];

// Subscript a number for display, e.g. 12 → "₁₂".
function sub(n: number): string {
  const map = "₀₁₂₃₄₅₆₇₈₉";
  return String(n)
    .split("")
    .map((d) => map[Number(d)])
    .join("");
}

function HydrocarbonBuilder() {
  const [c, setC] = useState(3);
  const [kind, setKind] = useState<"Alkane" | "Alkene">("Alkane");

  const isAlkane = kind === "Alkane";
  // Alkene needs at least 2 carbons (needs a C=C).
  const validAlkene = !isAlkane && c < 2;
  const hCount = isAlkane ? 2 * c + 2 : 2 * c;
  const formula = `C${c > 1 ? sub(c) : ""}H${sub(hCount)}`;
  const name = `${STEMS[c - 1]}${isAlkane ? "ane" : "ene"}`;

  // Complete combustion: CxHy + (x + y/4) O2 → x CO2 + (y/2) H2O.
  const o2 = c + hCount / 4;
  const h2o = hCount / 2;
  const fmtO2 = o2 % 1 === 0 ? `${o2}` : `${o2 * 2}/2`; // show fractional O2 as halves
  const combustion = `${formula} + ${o2 === 1 ? "" : fmtO2}O₂ → ${c === 1 ? "" : c}CO₂ + ${h2o === 1 ? "" : h2o}H₂O`;

  return (
    <Wrap title="Hydrocarbon builder">
      <div className="mb-3">
        <Choice options={["Alkane", "Alkene"] as const} value={kind} set={(v) => setKind(v)} />
      </div>
      <Stepper label="Number of carbon atoms" value={c} set={setC} min={1} max={8} />

      <div className="grid grid-cols-3 gap-2 my-3">
        <Readout label="Formula" value={validAlkene ? "—" : formula} hint={isAlkane ? "CₙH₂ₙ₊₂" : "CₙH₂ₙ"} />
        <Readout label="Name" value={validAlkene ? "—" : name} hint={isAlkane ? "saturated" : "unsaturated"} />
        <Readout label="C=C?" value={isAlkane ? "No" : validAlkene ? "n/a" : "Yes"} hint={isAlkane ? "single bonds" : "double bond"} />
      </div>

      {validAlkene ? (
        <Caption>
          An alkene needs a C=C double bond, so it must have at least <strong>2 carbon atoms</strong>.
          Increase the carbon count, or switch to an alkane.
        </Caption>
      ) : (
        <Caption>
          <strong>{name}</strong> ({formula}) belongs to the{" "}
          <strong>{isAlkane ? "alkane" : "alkene"}</strong> homologous series — a family with the same
          general formula <strong>{isAlkane ? "CₙH₂ₙ₊₂" : "CₙH₂ₙ"}</strong> and similar chemistry.{" "}
          {isAlkane
            ? "Alkanes are saturated (only single C–C bonds)."
            : "Alkenes are unsaturated (one C=C double bond) and decolourise bromine water."}{" "}
          Complete combustion: <strong>{combustion}</strong>.
        </Caption>
      )}
    </Wrap>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// chem-environment → Combustion explorer
// ───────────────────────────────────────────────────────────────────────────

function CombustionExplorer() {
  const [o2, setO2] = useState(100); // % oxygen supply: 100 = plenty, 0 = very limited
  const [sulfur, setSulfur] = useState(false);

  const mode = o2 >= 70 ? "complete" : o2 >= 35 ? "partial" : "very limited";

  const products =
    mode === "complete"
      ? "CO₂ + H₂O"
      : mode === "partial"
        ? "CO + H₂O"
        : "C (soot) + CO + H₂O";

  const flame = mode === "complete" ? "#38bdf8" : mode === "partial" ? "#fbbf24" : "#f97316";
  const flameLabel = mode === "complete" ? "clean blue" : mode === "partial" ? "yellow" : "smoky orange";

  return (
    <Wrap title="Combustion explorer">
      <div className="diagram mb-3">
        <svg viewBox="0 0 300 150" role="img" aria-label={`Hydrocarbon flame with ${mode} combustion`}>
          {/* burner */}
          <rect x="135" y="110" width="30" height="25" rx="3" fill="#475569" />
          <rect x="146" y="80" width="8" height="35" fill="#334155" />
          {/* flame */}
          <path
            d="M150,40 C172,70 168,105 150,108 C132,105 128,70 150,40 Z"
            fill={flame}
            opacity="0.85"
          />
          {mode === "very limited" && (
            <>
              <circle cx="150" cy="34" r="4" fill="#1e293b" opacity="0.7" />
              <circle cx="160" cy="26" r="3" fill="#1e293b" opacity="0.6" />
              <circle cx="142" cy="22" r="3.5" fill="#1e293b" opacity="0.6" />
              <text x="200" y="30" fill="#94a3b8" fontSize="9">
                soot
              </text>
            </>
          )}
          <text x="150" y="148" fill="#b7bce0" fontSize="9" textAnchor="middle">
            {flameLabel} flame
          </text>
        </svg>
      </div>

      <Slider
        label="Oxygen supply"
        value={o2}
        set={setO2}
        min={0}
        max={100}
        step={5}
        display={o2 >= 70 ? "plenty" : o2 >= 35 ? "limited" : "very limited"}
      />
      <div className="mt-2 mb-1">
        <Choice
          options={["No sulfur impurity", "Sulfur in fuel"] as const}
          value={sulfur ? "Sulfur in fuel" : "No sulfur impurity"}
          set={(v) => setSulfur(v === "Sulfur in fuel")}
        />
      </div>

      <div className="grid grid-cols-2 gap-2 my-3">
        <Readout
          label="Combustion"
          value={mode === "complete" ? "Complete" : "Incomplete"}
          hint={products}
        />
        <Readout
          label="Pollutants"
          value={mode === "complete" ? (sulfur ? "SO₂" : "None*") : sulfur ? "CO, soot, SO₂" : "CO, soot"}
          hint={mode === "complete" ? "*plus CO₂ + NOₓ at high T" : "toxic / harmful"}
        />
      </div>

      <Caption>
        {mode === "complete" ? (
          <>
            With <strong>plenty of oxygen</strong>, the fuel burns completely to{" "}
            <strong>CO₂ + H₂O</strong> with a clean blue flame.
          </>
        ) : (
          <>
            With <strong>limited oxygen</strong>, combustion is <strong>incomplete</strong>, giving{" "}
            <strong>{products}</strong>. <strong>Carbon monoxide (CO)</strong> is a toxic, colourless,
            odourless gas that binds to haemoglobin and stops oxygen transport; <strong>soot</strong>{" "}
            (carbon particulates) causes respiratory disease and dirties surfaces.
          </>
        )}{" "}
        {sulfur && (
          <>
            Sulfur impurities also burn (S + O₂ → SO₂); <strong>sulfur dioxide</strong> dissolves in rain
            to cause acid rain.
          </>
        )}{" "}
        At high engine temperatures nitrogen and oxygen also form <strong>NOₓ</strong> — another acid-rain
        and smog pollutant.
      </Caption>
    </Wrap>
  );
}

import type { ReactElement } from "react";
export const widgets: Record<string, () => ReactElement> = {
  "chem-energetics": EnergyProfile,
  "chem-electrochemistry": ElectrolysisPredictor,
  "chem-metals": ReactivityDisplacement,
  "chem-organic": HydrocarbonBuilder,
  "chem-environment": CombustionExplorer,
};
