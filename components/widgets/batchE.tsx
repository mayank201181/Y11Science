"use client";

import { useState } from "react";
import { Wrap, Stepper, Slider, Choice, Readout, Caption } from "./kit";

// ─────────────────────────────────────────────────────────────
// chem-stoichiometry → Mole calculator
// n = m / Mr,  m = n × Mr,  particles = n × Nₐ
// ─────────────────────────────────────────────────────────────
const NA = 6.02e23;

function fmt(n: number): string {
  if (!isFinite(n)) return "—";
  if (n !== 0 && (Math.abs(n) >= 1e4 || Math.abs(n) < 1e-3)) {
    return n.toExponential(2);
  }
  return Number(n.toFixed(3)).toString();
}

function MoleCalculator() {
  // Solve for whichever quantity is NOT being held; user picks two of {mass, Mr} → moles.
  const [solveFor, setSolveFor] = useState<"moles" | "mass">("moles");
  const [mass, setMass] = useState(18); // g
  const [mr, setMr] = useState(18); // relative formula mass
  const [moles, setMoles] = useState(1); // mol

  const computedMoles = solveFor === "moles" ? (mr > 0 ? mass / mr : 0) : moles;
  const computedMass = solveFor === "mass" ? moles * mr : mass;
  const particles = computedMoles * NA;

  return (
    <Wrap title="Mole calculator">
      {/* Mole triangle */}
      <div className="diagram mb-3">
        <svg viewBox="0 0 300 150" role="img" aria-label="Mole triangle: mass over moles times Mr">
          <polygon points="150,18 30,132 270,132" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
          <line x1="90" y1="75" x2="210" y2="75" stroke="#38bdf8" strokeWidth="2" />
          <line x1="150" y1="75" x2="150" y2="132" stroke="#38bdf8" strokeWidth="2" />
          <text x="150" y="60" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#fbbf24">
            m
          </text>
          <text x="150" y="74" textAnchor="middle" fontSize="9" fill="#b7bce0">
            {fmt(computedMass)} g
          </text>
          <text x="90" y="118" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#34d399">
            n
          </text>
          <text x="90" y="130" textAnchor="middle" fontSize="9" fill="#b7bce0">
            {fmt(computedMoles)} mol
          </text>
          <text x="210" y="118" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#a78bfa">
            Mr
          </text>
          <text x="210" y="130" textAnchor="middle" fontSize="9" fill="#b7bce0">
            {mr}
          </text>
        </svg>
      </div>

      <div className="mb-3">
        <Choice
          options={["moles", "mass"] as const}
          value={solveFor}
          set={(v) => setSolveFor(v)}
        />
      </div>

      {solveFor === "moles" ? (
        <>
          <Slider label="Mass m" value={mass} set={setMass} min={0} max={500} step={0.5} display={`${mass} g`} />
          <Slider label="Relative formula mass Mr" value={mr} set={setMr} min={1} max={400} step={1} />
        </>
      ) : (
        <>
          <Slider label="Moles n" value={moles} set={setMoles} min={0} max={10} step={0.05} display={`${moles} mol`} />
          <Slider label="Relative formula mass Mr" value={mr} set={setMr} min={1} max={400} step={1} />
        </>
      )}

      <div className="grid grid-cols-3 gap-2 mt-3">
        <Readout label="Moles (mol)" value={fmt(computedMoles)} />
        <Readout label="Mass (g)" value={fmt(computedMass)} />
        <Readout label="Particles" value={fmt(particles)} hint="n × 6.02×10²³" />
      </div>

      <Caption>
        A <strong>mole</strong> is 6.02×10²³ particles (the Avogadro constant). The mole triangle links{" "}
        mass, moles and Mr: <strong>n = m / Mr</strong>, so m = n × Mr.{" "}
        {solveFor === "moles"
          ? `Here ${fmt(computedMass)} g ÷ ${mr} = ${fmt(computedMoles)} mol`
          : `Here ${fmt(computedMoles)} mol × ${mr} = ${fmt(computedMass)} g`}
        , containing <strong>{fmt(particles)}</strong> particles.
      </Caption>
    </Wrap>
  );
}

// ─────────────────────────────────────────────────────────────
// chem-periodic → Periodic group explorer
// ─────────────────────────────────────────────────────────────
type GroupKey = "Group I" | "Group VII" | "Group 0";
interface ElInfo {
  sym: string;
  name: string;
  config: string;
  note: string;
}
const GROUP_DATA: Record<GroupKey, { trend: string; members: ElInfo[] }> = {
  "Group I": {
    trend: "Reactivity INCREASES down the group",
    members: [
      { sym: "Li", name: "Lithium", config: "2,1", note: "Reacts steadily with water" },
      { sym: "Na", name: "Sodium", config: "2,8,1", note: "Reacts vigorously, melts to a ball" },
      { sym: "K", name: "Potassium", config: "2,8,8,1", note: "Very vigorous, lilac flame" },
    ],
  },
  "Group VII": {
    trend: "Reactivity DECREASES down the group",
    members: [
      { sym: "F", name: "Fluorine", config: "2,7", note: "Pale yellow gas — most reactive halogen" },
      { sym: "Cl", name: "Chlorine", config: "2,8,7", note: "Yellow-green gas" },
      { sym: "Br", name: "Bromine", config: "2,8,8,7", note: "Red-brown liquid" },
      { sym: "I", name: "Iodine", config: "2,8,18,18,7", note: "Grey-black solid (least reactive shown)" },
    ],
  },
  "Group 0": {
    trend: "All inert — full outer shells (no trend in reactivity)",
    members: [
      { sym: "He", name: "Helium", config: "2", note: "Full shell of 2 — used in balloons" },
      { sym: "Ne", name: "Neon", config: "2,8", note: "Used in discharge tubes" },
      { sym: "Ar", name: "Argon", config: "2,8,8", note: "Fills light bulbs" },
    ],
  },
};

function GroupExplorer() {
  const [group, setGroup] = useState<GroupKey>("Group I");
  const [idx, setIdx] = useState(0);

  const data = GROUP_DATA[group];
  const safeIdx = Math.min(idx, data.members.length - 1);
  const el = data.members[safeIdx];
  const outer = group === "Group I" ? 1 : group === "Group VII" ? 7 : el.sym === "He" ? 2 : 8;
  const reactiveDown = group === "Group I";

  return (
    <Wrap title="Periodic group explorer">
      <div className="mb-3">
        <Choice
          options={["Group I", "Group VII", "Group 0"] as const}
          value={group}
          set={(g) => {
            setGroup(g);
            setIdx(0);
          }}
        />
      </div>

      {/* Vertical group strip with the selected element highlighted */}
      <div className="diagram mb-3">
        <svg viewBox="0 0 300 170" role="img" aria-label={`${group} elements top to bottom`}>
          <text x="150" y="14" textAnchor="middle" fontSize="10" fill="#b7bce0">
            {group} — top → bottom
          </text>
          {data.members.map((m, i) => {
            const y = 26 + i * 34;
            const sel = i === safeIdx;
            return (
              <g key={m.sym}>
                <rect
                  x="110"
                  y={y}
                  width="80"
                  height="28"
                  rx="6"
                  fill={sel ? "#38bdf8" : "#1d2142"}
                  stroke={sel ? "#fbbf24" : "#313870"}
                  strokeWidth={sel ? "2.5" : "1.5"}
                />
                <text
                  x="150"
                  y={y + 19}
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="bold"
                  fill={sel ? "#0f172a" : "#eef0ff"}
                >
                  {m.sym}
                </text>
              </g>
            );
          })}
          {/* trend arrow */}
          <line
            x1="60"
            y1="30"
            x2="60"
            y2={26 + (data.members.length - 1) * 34 + 24}
            stroke="#fbbf24"
            strokeWidth="2"
            markerEnd="url(#ga)"
          />
          <defs>
            <marker id="ga" markerWidth="6" markerHeight="6" refX="3" refY="5" orient="auto">
              <polygon points="0,0 6,0 3,6" fill="#fbbf24" />
            </marker>
          </defs>
          <text x="48" y={26 + data.members.length * 17} textAnchor="middle" fontSize="8" fill="#fbbf24" transform={`rotate(-90,48,${26 + data.members.length * 17})`}>
            down group
          </text>
        </svg>
      </div>

      <Stepper
        label={`Element (${el.name})`}
        value={safeIdx + 1}
        set={(n) => setIdx(n - 1)}
        min={1}
        max={data.members.length}
      />

      <div className="grid grid-cols-3 gap-2 mt-3">
        <Readout label="Element" value={el.sym} hint={el.name} />
        <Readout label="Config" value={el.config} hint={`${outer} outer e⁻`} />
        <Readout label="Group" value={group.replace("Group ", "")} />
      </div>

      <Caption>
        <strong>{el.name}</strong> ({el.config}) is in <strong>{group}</strong> with{" "}
        <strong>{outer}</strong> outer electron{outer === 1 ? "" : "s"}. {el.note}.{" "}
        <strong>{data.trend}.</strong>{" "}
        {group === "Group 0"
          ? "A full outer shell means there is no tendency to gain or lose electrons."
          : reactiveDown
            ? "Down the group the outer electron is further out and more shielded, so it is LOST more easily → more reactive."
            : "Down the group an incoming electron is added further out and more shielded, so it is GAINED less easily → less reactive."}
      </Caption>
    </Wrap>
  );
}

// ─────────────────────────────────────────────────────────────
// phys-energy → Energy calculator  (g = 10 N/kg, IGCSE)
// KE = ½mv²,  GPE = mgh,  efficiency = useful/total ×100%
// ─────────────────────────────────────────────────────────────
const G = 10; // N/kg, IGCSE value used throughout phys-energy.ts

function EnergyCalculator() {
  const [mode, setMode] = useState<"Kinetic" | "GPE" | "Efficiency">("Kinetic");
  const [mass, setMass] = useState(2); // kg
  const [v, setV] = useState(10); // m/s
  const [h, setH] = useState(5); // m
  const [useful, setUseful] = useState(60); // J
  const [total, setTotal] = useState(100); // J

  const ke = 0.5 * mass * v * v;
  const gpe = mass * G * h;
  const eff = total > 0 ? (useful / total) * 100 : 0;

  return (
    <Wrap title="Energy calculator">
      <div className="mb-3">
        <Choice
          options={["Kinetic", "GPE", "Efficiency"] as const}
          value={mode}
          set={(m) => setMode(m)}
        />
      </div>

      <div className="diagram mb-3">
        <svg viewBox="0 0 300 90" role="img" aria-label="energy bar">
          {mode === "Efficiency" ? (
            <>
              <rect x="20" y="30" width="260" height="26" rx="6" fill="#1d2142" stroke="#313870" />
              <rect
                x="20"
                y="30"
                width={Math.max(0, Math.min(260, (eff / 100) * 260))}
                height="26"
                rx="6"
                fill="#34d399"
              />
              <text x="150" y="48" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
                {eff.toFixed(0)}% useful
              </text>
              <text x="150" y="76" textAnchor="middle" fontSize="10" fill="#b7bce0">
                wasted: {Math.max(0, total - useful)} J
              </text>
            </>
          ) : (
            <>
              <text x="150" y="35" textAnchor="middle" fontSize="13" fill="#fbbf24" fontWeight="bold">
                {mode === "Kinetic" ? "Kinetic store" : "Gravitational store"}
              </text>
              <text x="150" y="65" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#38bdf8">
                {(mode === "Kinetic" ? ke : gpe).toFixed(1)} J
              </text>
            </>
          )}
        </svg>
      </div>

      {mode === "Kinetic" && (
        <>
          <Slider label="Mass m" value={mass} set={setMass} min={0.1} max={50} step={0.1} display={`${mass} kg`} />
          <Slider label="Speed v" value={v} set={setV} min={0} max={50} step={0.5} display={`${v} m/s`} />
          <Readout label="Kinetic energy = ½mv²" value={`${ke.toFixed(1)} J`} />
        </>
      )}
      {mode === "GPE" && (
        <>
          <Slider label="Mass m" value={mass} set={setMass} min={0.1} max={50} step={0.1} display={`${mass} kg`} />
          <Slider label="Height h" value={h} set={setH} min={0} max={100} step={0.5} display={`${h} m`} />
          <Readout label="GPE = mgh (g = 10 N/kg)" value={`${gpe.toFixed(1)} J`} />
        </>
      )}
      {mode === "Efficiency" && (
        <>
          <Slider label="Useful energy out" value={useful} set={setUseful} min={0} max={500} step={1} display={`${useful} J`} />
          <Slider label="Total energy in" value={total} set={setTotal} min={1} max={500} step={1} display={`${total} J`} />
          <Readout label="Efficiency = useful/total ×100%" value={`${eff.toFixed(1)}%`} />
        </>
      )}

      <Caption>
        {mode === "Kinetic" &&
          `A moving object stores kinetic energy ½mv² = ½ × ${mass} × ${v}² = ${ke.toFixed(1)} J. Doubling speed quadruples the energy (v is squared).`}
        {mode === "GPE" &&
          `Raising a mass stores gravitational PE = mgh = ${mass} × ${G} × ${h} = ${gpe.toFixed(1)} J. IGCSE uses g = 10 N/kg.`}
        {mode === "Efficiency" &&
          `Efficiency = useful ÷ total × 100% = ${useful}/${total} × 100% = ${eff.toFixed(1)}%. Energy is conserved — the wasted ${Math.max(0, total - useful)} J is usually dissipated as heat.`}
      </Caption>
    </Wrap>
  );
}

// ─────────────────────────────────────────────────────────────
// phys-forces → Moments balance (seesaw)
// moment = force × distance from pivot; balanced when CW = ACW
// ─────────────────────────────────────────────────────────────
function MomentsBalance() {
  const [fL, setFL] = useState(20); // N, left (anticlockwise)
  const [dL, setDL] = useState(2); // m
  const [fR, setFR] = useState(40); // N, right (clockwise)
  const [dR, setDR] = useState(1); // m

  const acw = fL * dL; // left side turns anticlockwise
  const cw = fR * dR; // right side turns clockwise
  const diff = cw - acw;
  const balanced = Math.abs(diff) < 0.05;

  // tilt angle (degrees), clamped; positive diff → right side down
  const tilt = Math.max(-14, Math.min(14, diff / 8));
  const cx = 150;
  const cy = 95;
  const halfLen = 110;
  const rad = (tilt * Math.PI) / 180;
  const x1 = cx - halfLen * Math.cos(rad);
  const y1 = cy + halfLen * Math.sin(rad);
  const x2 = cx + halfLen * Math.cos(rad);
  const y2 = cy - halfLen * Math.sin(rad);

  return (
    <Wrap title="Moments balance (seesaw)">
      <div className="diagram mb-3">
        <svg viewBox="0 0 300 150" role="img" aria-label="Seesaw balancing two moments about a pivot">
          {/* pivot triangle */}
          <polygon points={`${cx},${cy} ${cx - 16},${cy + 36} ${cx + 16},${cy + 36}`} fill="#a78bfa" />
          {/* beam */}
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
          {/* left weight */}
          <circle cx={x1 + 18 * Math.cos(rad)} cy={y1 - 18 * Math.sin(rad)} r="11" fill="#34d399" />
          <text x={x1 + 18 * Math.cos(rad)} y={y1 - 18 * Math.sin(rad) + 4} textAnchor="middle" fontSize="9" fill="#0f172a" fontWeight="bold">
            {fL}N
          </text>
          {/* right weight */}
          <circle cx={x2 - 18 * Math.cos(rad)} cy={y2 + 18 * Math.sin(rad)} r="11" fill="#fb7185" />
          <text x={x2 - 18 * Math.cos(rad)} y={y2 + 18 * Math.sin(rad) + 4} textAnchor="middle" fontSize="9" fill="#0f172a" fontWeight="bold">
            {fR}N
          </text>
          <text x="150" y="146" textAnchor="middle" fontSize="11" fill={balanced ? "#34d399" : "#fbbf24"} fontWeight="bold">
            {balanced ? "BALANCED" : diff > 0 ? "tips right ↓" : "tips left ↓"}
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <div className="text-xs text-ink-soft mb-1">Left (anticlockwise)</div>
          <Slider label="Force" value={fL} set={setFL} min={0} max={100} step={1} display={`${fL} N`} />
          <Slider label="Distance" value={dL} set={setDL} min={0} max={5} step={0.1} display={`${dL} m`} />
        </div>
        <div>
          <div className="text-xs text-ink-soft mb-1">Right (clockwise)</div>
          <Slider label="Force" value={fR} set={setFR} min={0} max={100} step={1} display={`${fR} N`} />
          <Slider label="Distance" value={dR} set={setDR} min={0} max={5} step={0.1} display={`${dR} m`} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-3">
        <Readout label="Anticlockwise" value={`${acw.toFixed(1)} N·m`} hint={`${fL} × ${dL}`} />
        <Readout label="Clockwise" value={`${cw.toFixed(1)} N·m`} hint={`${fR} × ${dR}`} />
      </div>

      <Caption>
        A <strong>moment</strong> = force × perpendicular distance from the pivot. By the{" "}
        <strong>principle of moments</strong>, the seesaw balances when total clockwise = total
        anticlockwise. Here {cw.toFixed(1)} vs {acw.toFixed(1)} N·m →{" "}
        <strong>{balanced ? "balanced" : diff > 0 ? "it tips to the right" : "it tips to the left"}</strong>.
      </Caption>
    </Wrap>
  );
}

// ─────────────────────────────────────────────────────────────
// phys-magnetism → Transformer calculator
// Vs = Vp × Ns/Np ;  step-up if Ns>Np
// ─────────────────────────────────────────────────────────────
function TransformerCalc() {
  const [np, setNp] = useState(200); // primary turns
  const [ns, setNs] = useState(1000); // secondary turns
  const [vp, setVp] = useState(230); // primary voltage

  const vs = np > 0 ? vp * (ns / np) : 0;
  const type = ns > np ? "Step-up" : ns < np ? "Step-down" : "1:1 (isolating)";

  // coil turn counts for the SVG (visual only)
  const pTurns = Math.max(2, Math.min(8, Math.round(np / 150)));
  const sTurns = Math.max(2, Math.min(8, Math.round(ns / 150)));

  return (
    <Wrap title="Transformer calculator">
      <div className="diagram mb-3">
        <svg viewBox="0 0 300 150" role="img" aria-label="Transformer core with primary and secondary coils">
          {/* soft-iron core */}
          <rect x="120" y="20" width="60" height="110" rx="4" fill="none" stroke="#94a3b8" strokeWidth="10" />
          {/* primary coil */}
          {Array.from({ length: pTurns }).map((_, i) => (
            <ellipse
              key={`p${i}`}
              cx="120"
              cy={36 + (i * 90) / pTurns}
              rx="14"
              ry="6"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
            />
          ))}
          {/* secondary coil */}
          {Array.from({ length: sTurns }).map((_, i) => (
            <ellipse
              key={`s${i}`}
              cx="180"
              cy={36 + (i * 90) / sTurns}
              rx="14"
              ry="6"
              fill="none"
              stroke="#fb7185"
              strokeWidth="2.5"
            />
          ))}
          <text x="80" y="18" textAnchor="middle" fontSize="10" fill="#38bdf8">
            Np {np}
          </text>
          <text x="220" y="18" textAnchor="middle" fontSize="10" fill="#fb7185">
            Ns {ns}
          </text>
          <text x="80" y="144" textAnchor="middle" fontSize="10" fill="#38bdf8">
            Vp {vp} V
          </text>
          <text x="220" y="144" textAnchor="middle" fontSize="10" fill="#fb7185">
            Vs {vs.toFixed(0)} V
          </text>
        </svg>
      </div>

      <Stepper label="Primary turns Np" value={np} set={setNp} min={10} max={2000} step={10} />
      <Stepper label="Secondary turns Ns" value={ns} set={setNs} min={10} max={2000} step={10} />
      <Stepper label="Primary voltage Vp" value={vp} set={setVp} min={1} max={500} step={1} suffix=" V" />

      <div className="grid grid-cols-2 gap-2 mt-3">
        <Readout label="Secondary voltage Vs" value={`${vs.toFixed(1)} V`} hint="Vp × Ns/Np" />
        <Readout label="Type" value={type} hint={`Ns/Np = ${(ns / np).toFixed(2)}`} />
      </div>

      <Caption>
        A transformer obeys the turns ratio <strong>Vp/Vs = Np/Ns</strong>, so{" "}
        <strong>Vs = Vp × Ns/Np = {vp} × {ns}/{np} = {vs.toFixed(1)} V</strong>. With more turns on
        the secondary (Ns &gt; Np) the voltage rises — a <strong>step-up</strong> transformer; fewer
        turns gives a <strong>step-down</strong>. This is how the National Grid changes voltage.
      </Caption>
    </Wrap>
  );
}

import type { ReactElement } from "react";
export const widgets: Record<string, () => ReactElement> = {
  "chem-stoichiometry": MoleCalculator,
  "chem-periodic": GroupExplorer,
  "phys-energy": EnergyCalculator,
  "phys-forces": MomentsBalance,
  "phys-magnetism": TransformerCalc,
};
