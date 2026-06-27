"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Wrap, Stepper, Slider, Choice, Readout, Caption } from "./kit";

// ─────────────────────────────────────────────────────────────────────────
// bio-transport-cell → Osmosis explorer
// ─────────────────────────────────────────────────────────────────────────
function OsmosisExplorer() {
  // 0 = very dilute (high water potential outside), 100 = very concentrated.
  // 50 = isotonic (same as the cell).
  const [conc, setConc] = useState(50);
  const [cellType, setCellType] = useState<"Animal cell" | "Plant cell">("Animal cell");

  const isAnimal = cellType === "Animal cell";

  // Relative external solution vs the cell.
  // diff > 0 → outside MORE concentrated (lower water potential) → water LEAVES cell.
  // diff < 0 → outside MORE dilute (higher water potential) → water ENTERS cell.
  const diff = conc - 50;
  let direction: string;
  let state: string;
  let stateColor: string;
  if (diff < -8) {
    direction = "Water moves INTO the cell";
    state = isAnimal ? "Swollen → may burst (lysis/haemolysis)" : "Turgid";
    stateColor = isAnimal ? "#fb7185" : "#34d399";
  } else if (diff > 8) {
    direction = "Water moves OUT of the cell";
    state = isAnimal ? "Shrunken & wrinkled (crenated)" : "Plasmolysed";
    stateColor = "#fbbf24";
  } else {
    direction = "No net movement of water";
    state = isAnimal ? "Normal" : "Flaccid / unchanged";
    stateColor = "#38bdf8";
  }

  // Visual cell radius — swells when water enters, shrinks when it leaves.
  // scale from -1 (very dilute, full) to +1 (very concentrated, shrunk).
  const t = Math.max(-1, Math.min(1, -diff / 50)); // +1 = swell, -1 = shrink
  const baseR = 42;
  const r = baseR + t * 16; // 26 .. 58
  const wallSide = 86; // plant cell wall is a fixed square

  const concLabel =
    diff < -8 ? "Dilute (higher water potential)" : diff > 8 ? "Concentrated (lower water potential)" : "Same as cell (isotonic)";

  return (
    <Wrap title="Osmosis Explorer">
      <div className="diagram mb-3">
        <svg viewBox="0 0 220 150" role="img" aria-label={`${cellType} in a ${concLabel} solution, currently ${state}`}>
          {/* solution background tint */}
          <rect x="0" y="0" width="220" height="150" rx="8" fill={diff > 8 ? "#7c2d12" : diff < -8 ? "#0c4a6e" : "#1e293b"} fillOpacity="0.35" />
          {isAnimal ? (
            <>
              {/* animal cell: just a membrane circle that swells/shrinks */}
              <circle cx="110" cy="75" r={r} fill="#fb7185" fillOpacity="0.3" stroke="#fb7185" strokeWidth="2.5" />
            </>
          ) : (
            <>
              {/* plant cell wall (fixed) */}
              <rect x={110 - wallSide / 2} y={75 - wallSide / 2} width={wallSide} height={wallSide} rx="6" fill="none" stroke="#fbbf24" strokeWidth="4" />
              {/* membrane + contents pull away from wall when plasmolysed */}
              <ellipse cx="110" cy="75" rx={Math.min(40, r)} ry={Math.min(40, r)} fill="#1d4ed8" fillOpacity="0.4" stroke="#34d399" strokeWidth="2" />
            </>
          )}
          {/* water movement arrow */}
          {diff < -8 && (
            <path d="M16,75 L40,75" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#oin)" />
          )}
          {diff > 8 && (
            <path d="M40,75 L16,75" stroke="#fbbf24" strokeWidth="2.5" markerEnd="url(#oout)" />
          )}
          <defs>
            <marker id="oin" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 z" fill="#38bdf8" /></marker>
            <marker id="oout" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 z" fill="#fbbf24" /></marker>
          </defs>
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <Readout label="Net water movement" value={<span className="text-base">{diff < -8 ? "In →" : diff > 8 ? "← Out" : "None"}</span>} hint={concLabel} />
        <Readout label="Cell state" value={<span className="text-base" style={{ color: stateColor }}>{state}</span>} />
      </div>

      <div className="mb-2">
        <Choice options={["Animal cell", "Plant cell"] as const} value={cellType} set={setCellType} />
      </div>
      <Slider
        label="External solution concentration"
        value={conc}
        set={setConc}
        min={0}
        max={100}
        display={diff < -8 ? "dilute" : diff > 8 ? "concentrated" : "isotonic"}
      />

      <Caption>
        {direction}. Water moves from <strong>higher water potential</strong> (more dilute) to <strong>lower water potential</strong> (more
        concentrated) through the partially permeable membrane.{" "}
        {isAnimal
          ? "Animal cells have no wall, so they burst in dilute solutions (lysis) and shrivel (crenate) in concentrated ones."
          : "The rigid cell wall stops a plant cell bursting: it becomes turgid in dilute solutions and plasmolysed (membrane pulls away from the wall) in concentrated ones."}
      </Caption>
    </Wrap>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// bio-transport-plants → Transpiration-rate explorer
// ─────────────────────────────────────────────────────────────────────────
function Transpiration() {
  const [temp, setTemp] = useState(20); // °C
  const [humidity, setHumidity] = useState(50); // %
  const [wind, setWind] = useState(2); // 0–5 arbitrary
  const [light, setLight] = useState(50); // %

  // Build a relative index (1.0 ≈ baseline). Each factor pushes correctly:
  // hot ↑, dry (low humidity) ↑, windy ↑, bright ↑.
  const tempF = 0.4 + (temp / 20) * 0.6; // 5°C→0.55, 20°C→1.0, 40°C→1.6
  const humF = 1.4 - (humidity / 100) * 1.2; // 0%→1.4, 50%→0.8, 100%→0.2
  const windF = 0.5 + wind * 0.3; // 0→0.5, 2→1.1, 5→2.0
  const lightF = 0.4 + (light / 100) * 1.0; // 0%→0.4, 50%→0.9, 100%→1.4
  const raw = tempF * humF * windF * lightF;
  // Normalise so the default (20°C,50%,wind2,50%) ≈ 1.0; clamp display.
  const baseline = 1.0 * 0.8 * 1.1 * 0.9; // ≈ 0.792
  const rel = raw / baseline;
  const relClamped = Math.max(0.05, Math.min(5, rel));

  const barW = Math.round((relClamped / 5) * 180);
  const speedWord = rel < 0.5 ? "very slow" : rel < 0.9 ? "slow" : rel < 1.3 ? "moderate" : rel < 2.2 ? "fast" : "very fast";

  return (
    <Wrap title="Transpiration-Rate Explorer">
      <div className="diagram mb-3">
        <svg viewBox="0 0 220 90" role="img" aria-label={`Relative transpiration rate ${relClamped.toFixed(1)} times, ${speedWord}`}>
          <rect x="0" y="0" width="220" height="90" rx="8" fill="#1e293b" />
          {/* leaf */}
          <ellipse cx="28" cy="45" rx="16" ry="24" fill="#1e3a2f" stroke="#34d399" strokeWidth="2" />
          <line x1="28" y1="22" x2="28" y2="68" stroke="#34d399" strokeWidth="1" />
          {/* water vapour dots leaving */}
          {Array.from({ length: Math.min(8, Math.round(relClamped * 2)) }).map((_, i) => (
            <circle key={i} cx={48 + i * 4} cy={30 - (i % 3) * 6} r="2.2" fill="#38bdf8" fillOpacity="0.8" />
          ))}
          {/* bar */}
          <rect x="20" y="74" width="180" height="10" rx="5" fill="#0f172a" stroke="#334155" />
          <rect x="20" y="74" width={barW} height="10" rx="5" fill="#38bdf8" />
        </svg>
      </div>

      <Readout label="Relative transpiration rate" value={`${relClamped.toFixed(1)}×`} hint={`${speedWord} (1× ≈ typical conditions)`} />

      <div className="mt-3">
        <Slider label="Temperature" value={temp} set={setTemp} min={5} max={40} display={`${temp} °C`} />
        <Slider label="Humidity" value={humidity} set={setHumidity} min={0} max={100} display={`${humidity}%`} />
        <Slider label="Wind / air movement" value={wind} set={setWind} min={0} max={5} display={["still", "light", "breeze", "windy", "strong", "gale"][wind]} />
        <Slider label="Light intensity" value={light} set={setLight} min={0} max={100} display={`${light}%`} />
      </div>

      <Caption>
        Transpiration is water evaporating from the moist mesophyll cell walls and diffusing out through the <strong>stomata</strong>.{" "}
        <strong>Hot</strong>, <strong>dry</strong> (low humidity), <strong>windy</strong> and <strong>bright</strong> conditions all speed it up:
        heat raises evaporation, while low humidity and wind keep a steep water-vapour gradient, and light opens the stomata wider.
      </Caption>
    </Wrap>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// bio-transport-animals → Cardiac output calculator
// ─────────────────────────────────────────────────────────────────────────
function CardiacOutput() {
  const [sv, setSv] = useState(70); // cm³ per beat (≈70 at rest)
  const [hr, setHr] = useState(70); // bpm

  const co = sv * hr; // cm³ per minute
  const coDm3 = co / 1000; // dm³ per minute (1 dm³ = 1000 cm³)

  const preset = (svP: number, hrP: number) => {
    setSv(svP);
    setHr(hrP);
  };

  return (
    <Wrap title="Cardiac Output Calculator">
      <div className="grid grid-cols-2 gap-2 mb-3">
        <Readout label="Cardiac output" value={`${co.toLocaleString()} cm³/min`} hint={`${coDm3.toFixed(1)} dm³/min`} />
        <Readout label="Formula" value={<span className="text-base">SV × HR</span>} hint={`${sv} × ${hr}`} />
      </div>

      <Stepper label="Stroke volume (cm³ per beat)" value={sv} set={setSv} min={40} max={130} step={5} suffix=" cm³" />
      <Stepper label="Heart rate (bpm)" value={hr} set={setHr} min={40} max={200} step={5} suffix=" bpm" />

      <div className="mt-3 flex flex-wrap gap-2">
        <button className="btn btn-ghost text-sm chip" onClick={() => preset(70, 70)}>
          At rest (70 × 70)
        </button>
        <button className="btn btn-ghost text-sm chip" onClick={() => preset(110, 160)}>
          During exercise (110 × 160)
        </button>
      </div>

      <Caption>
        <strong>Cardiac output = stroke volume × heart rate.</strong> Stroke volume is the blood pumped by the left ventricle per beat (about 70 cm³
        at rest); heart rate is beats per minute. So at rest the heart pumps ≈ {(70 * 70 / 1000).toFixed(1)} dm³ each minute. During{" "}
        <strong>exercise</strong> both rise — the heart beats faster and harder — increasing cardiac output to deliver more oxygen and remove CO₂
        more quickly.
      </Caption>
    </Wrap>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// chem-bonding → Bond-type predictor
// ─────────────────────────────────────────────────────────────────────────
type ElInfo = { sym: string; name: string; metal: boolean; valence: number };
// "valence" = combining power: metals = + charge, non-metals = shared/− magnitude.
const BOND_ELEMENTS: ElInfo[] = [
  { sym: "Na", name: "Sodium", metal: true, valence: 1 },
  { sym: "Mg", name: "Magnesium", metal: true, valence: 2 },
  { sym: "Ca", name: "Calcium", metal: true, valence: 2 },
  { sym: "H", name: "Hydrogen", metal: false, valence: 1 },
  { sym: "C", name: "Carbon", metal: false, valence: 4 },
  { sym: "O", name: "Oxygen", metal: false, valence: 2 },
  { sym: "F", name: "Fluorine", metal: false, valence: 1 },
  { sym: "Cl", name: "Chlorine", metal: false, valence: 1 },
];

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

// Build a likely formula from two combining powers, e.g. Mg(2) + Cl(1) → MgCl₂.
function combineFormula(a: ElInfo, b: ElInfo): string {
  const g = gcd(a.valence, b.valence);
  const na = b.valence / g;
  const nb = a.valence / g;
  const sub = (n: number) => (n === 1 ? "" : n === 2 ? "₂" : n === 3 ? "₃" : n === 4 ? "₄" : `${n}`);
  // Order: metal/less-electronegative first (matches Na first, etc.). Keep selection order otherwise.
  return `${a.sym}${sub(na)}${b.sym}${sub(nb)}`;
}

function BondPredictor() {
  const [aSym, setASym] = useState("Na");
  const [bSym, setBSym] = useState("Cl");

  const a = BOND_ELEMENTS.find((e) => e.sym === aSym)!;
  const b = BOND_ELEMENTS.find((e) => e.sym === bSym)!;

  const bothNonMetal = !a.metal && !b.metal;
  const oneEach = a.metal !== b.metal;
  const bothMetal = a.metal && b.metal;

  let bondType: string;
  let detail: ReactNode;
  if (oneEach) {
    bondType = "Ionic";
    const metal = a.metal ? a : b;
    const nonmetal = a.metal ? b : a;
    detail = (
      <>
        Electrons are <strong>transferred</strong> from {metal.name} to {nonmetal.name}:{" "}
        {metal.sym}
        <sup>{metal.valence}+</sup> and {nonmetal.sym}
        <sup>{nonmetal.valence}−</sup>.
      </>
    );
  } else if (bothNonMetal) {
    bondType = "Covalent";
    detail = (
      <>
        The two non-metals <strong>share electron pairs</strong> to fill their outer shells.
      </>
    );
  } else {
    bondType = "Metallic";
    detail = (
      <>
        Two metals form an <strong>alloy / metallic</strong> bonding — positive ions in a sea of delocalised electrons (not a simple compound).
      </>
    );
  }

  // Formula: order metal first for ionic; for two non-metals put the one with lower
  // group/electronegativity tendency first — use selection order a then b.
  let formula: string;
  if (oneEach) {
    const metal = a.metal ? a : b;
    const nonmetal = a.metal ? b : a;
    formula = combineFormula(metal, nonmetal);
  } else if (bothNonMetal) {
    formula = combineFormula(a, b);
  } else {
    formula = `${a.sym}/${b.sym} mixture`;
  }

  const typeColor = bondType === "Ionic" ? "#fbbf24" : bondType === "Covalent" ? "#34d399" : "#a78bfa";

  return (
    <Wrap title="Bond-Type Predictor">
      <div className="diagram mb-3">
        <svg viewBox="0 0 220 80" role="img" aria-label={`${a.name} and ${b.name} form ${bondType} bonding`}>
          <rect x="0" y="0" width="220" height="80" rx="8" fill="#1e293b" />
          <circle cx="70" cy="40" r="24" fill="none" stroke={a.metal ? "#38bdf8" : "#a78bfa"} strokeWidth="2.5" />
          <text x="70" y="45" textAnchor="middle" fontSize="16" fontWeight="bold" fill={a.metal ? "#38bdf8" : "#a78bfa"}>{a.sym}</text>
          <text x="70" y="72" textAnchor="middle" fontSize="8" fill="#b7bce0">{a.metal ? "metal" : "non-metal"}</text>
          <circle cx="150" cy="40" r="24" fill="none" stroke={b.metal ? "#38bdf8" : "#a78bfa"} strokeWidth="2.5" />
          <text x="150" y="45" textAnchor="middle" fontSize="16" fontWeight="bold" fill={b.metal ? "#38bdf8" : "#a78bfa"}>{b.sym}</text>
          <text x="150" y="72" textAnchor="middle" fontSize="8" fill="#b7bce0">{b.metal ? "metal" : "non-metal"}</text>
          {oneEach ? (
            <path d="M98,40 L122,40" stroke="#fbbf24" strokeWidth="2.5" markerEnd="url(#bt)" />
          ) : (
            <line x1="98" y1="40" x2="122" y2="40" stroke={typeColor} strokeWidth="2.5" />
          )}
          <defs>
            <marker id="bt" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 z" fill="#fbbf24" /></marker>
          </defs>
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <Readout label="Bond type" value={<span style={{ color: typeColor }}>{bondType}</span>} />
        <Readout label="Likely formula" value={formula} />
      </div>

      <div className="mb-2">
        <div className="text-sm mb-1">First element</div>
        <Choice options={BOND_ELEMENTS.map((e) => e.sym) as readonly string[]} value={aSym} set={setASym} />
      </div>
      <div>
        <div className="text-sm mb-1">Second element</div>
        <Choice options={BOND_ELEMENTS.map((e) => e.sym) as readonly string[]} value={bSym} set={setBSym} />
      </div>

      <Caption>
        {detail}{" "}
        {oneEach
          ? "A metal + a non-metal → ionic bonding (electron transfer)."
          : bothNonMetal
            ? "A non-metal + a non-metal → covalent bonding (electron sharing)."
            : "Two metals do not form a compound this way."}{" "}
        The formula is found by balancing combining powers so the charges cancel.
      </Caption>
    </Wrap>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// chem-analysis → Chromatography Rf calculator
// ─────────────────────────────────────────────────────────────────────────
function RfCalculator() {
  const [solvent, setSolvent] = useState(90); // mm, solvent front distance
  const [spot, setSpot] = useState(36); // mm, spot distance

  // Spot can never travel further than the solvent front.
  const spotClamped = Math.min(spot, solvent);
  const rf = solvent > 0 ? spotClamped / solvent : 0;

  // SVG geometry: paper from y=10 (top) to y=130 (baseline).
  const baseY = 130;
  const topY = 10;
  const usableH = baseY - topY; // 120 px
  const frontY = baseY - (solvent / 100) * usableH; // solvent max 100mm fills paper
  const spotY = baseY - (spotClamped / 100) * usableH;

  return (
    <Wrap title="Chromatography Rf Calculator">
      <div className="diagram mb-3">
        <svg viewBox="0 0 220 150" role="img" aria-label={`Chromatogram with Rf value ${rf.toFixed(2)}`}>
          {/* paper */}
          <rect x="60" y="8" width="100" height="135" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
          {/* solvent front */}
          <line x1="60" y1={frontY} x2="160" y2={frontY} stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="5,3" />
          <text x="164" y={frontY + 3} fontSize="8" fill="#fbbf24">front</text>
          {/* baseline */}
          <line x1="60" y1={baseY} x2="160" y2={baseY} stroke="#a78bfa" strokeWidth="1.5" />
          <text x="164" y={baseY + 3} fontSize="8" fill="#a78bfa">base</text>
          {/* spot */}
          <ellipse cx="110" cy={spotY} rx="9" ry="5" fill="#34d399" fillOpacity="0.85" />
          <text x="164" y={spotY + 3} fontSize="8" fill="#34d399">spot</text>
          {/* original spot on baseline */}
          <ellipse cx="110" cy={baseY} rx="5" ry="3" fill="#b7bce0" />
          {/* measure arrows on left */}
          <line x1="48" y1={baseY} x2="48" y2={spotY} stroke="#34d399" strokeWidth="1.2" markerEnd="url(#rfa)" />
          <line x1="34" y1={baseY} x2="34" y2={frontY} stroke="#fbbf24" strokeWidth="1.2" markerEnd="url(#rfb)" />
          <defs>
            <marker id="rfa" markerWidth="7" markerHeight="7" refX="3" refY="3" orient="auto"><path d="M0,6 L3,0 L6,6 z" fill="#34d399" /></marker>
            <marker id="rfb" markerWidth="7" markerHeight="7" refX="3" refY="3" orient="auto"><path d="M0,6 L3,0 L6,6 z" fill="#fbbf24" /></marker>
          </defs>
        </svg>
      </div>

      <Readout label="Rf value" value={rf.toFixed(2)} hint={`${spotClamped} mm ÷ ${solvent} mm (no units)`} />

      <div className="mt-3">
        <Slider label="Distance moved by spot" value={spot} set={setSpot} min={0} max={100} display={`${spotClamped} mm`} />
        <Slider label="Distance moved by solvent front" value={solvent} set={setSolvent} min={10} max={100} display={`${solvent} mm`} />
      </div>

      <Caption>
        <strong>Rf = distance moved by the spot ÷ distance moved by the solvent front</strong>, both measured from the pencil baseline. It is a ratio
        between 0 and 1 with <strong>no units</strong>. Because each substance has a characteristic Rf in a given solvent, comparing it with a known
        reference identifies the substance.
      </Caption>
    </Wrap>
  );
}

import type { ReactElement } from "react";
export const widgets: Record<string, () => ReactElement> = {
  "bio-transport-cell": OsmosisExplorer,
  "bio-transport-plants": Transpiration,
  "bio-transport-animals": CardiacOutput,
  "chem-bonding": BondPredictor,
  "chem-analysis": RfCalculator,
};
