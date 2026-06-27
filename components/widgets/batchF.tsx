"use client";

import { useState } from "react";
import { Wrap, Slider, Choice, Readout, Caption } from "./kit";

// ─────────────────────────────────────────────────────────────────────────────
// phys-motion → Motion grapher (velocity–time)
//   v = u + at ; distance = area under the v–t graph.
// ─────────────────────────────────────────────────────────────────────────────
function MotionGrapher() {
  const [u, setU] = useState(0); // initial velocity (m/s)
  const [a, setA] = useState(2); // acceleration (m/s²)
  const [t, setT] = useState(6); // time (s)

  const v = u + a * t; // final velocity
  const distance = u * t + 0.5 * a * t * t; // area under the line (trapezium)

  // SVG plot geometry
  const PX0 = 40; // x of axis origin
  const PY0 = 130; // y of axis origin (time axis)
  const PW = 250; // plot width
  const PH = 110; // plot height (above axis)
  const tMax = 20;
  const vMax = 40; // y-axis caps at 40 m/s for scaling

  // velocities can go negative; clamp for drawing only
  const xAt = (time: number) => PX0 + (time / tMax) * PW;
  const yAt = (vel: number) => PY0 - (Math.max(0, Math.min(vMax, vel)) / vMax) * PH;

  const x0 = xAt(0);
  const xT = xAt(t);
  const yU = yAt(u);
  const yV = yAt(v);

  return (
    <Wrap title="Motion grapher (v–t)">
      <div className="diagram mb-3">
        <svg viewBox="0 0 300 160" role="img" aria-label="Velocity–time graph with the area under the line shaded to show distance">
          {/* axes */}
          <line x1={PX0} y1={PY0} x2={PX0 + PW} y2={PY0} stroke="#64748b" strokeWidth="1.5" />
          <line x1={PX0} y1={PY0} x2={PX0} y2={PY0 - PH - 5} stroke="#64748b" strokeWidth="1.5" />
          {/* shaded area = distance */}
          <polygon points={`${x0},${PY0} ${x0},${yU} ${xT},${yV} ${xT},${PY0}`} fill="#38bdf8" fillOpacity="0.25" />
          {/* the v–t line */}
          <line x1={x0} y1={yU} x2={xT} y2={yV} stroke="#fbbf24" strokeWidth="2.5" />
          <circle cx={xT} cy={yV} r="3.5" fill="#fbbf24" />
          {/* axis labels */}
          <text x={PX0 + PW / 2} y={PY0 + 22} fill="#b7bce0" fontSize="10" textAnchor="middle">
            time (s) →
          </text>
          <text x="12" y={PY0 - PH / 2} fill="#b7bce0" fontSize="10" textAnchor="middle" transform={`rotate(-90,12,${PY0 - PH / 2})`}>
            velocity (m/s)
          </text>
          <text x={(x0 + xT) / 2} y={PY0 - 10} fill="#38bdf8" fontSize="9" textAnchor="middle">
            area = distance
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <Readout label="Final velocity v = u + at" value={`${v.toFixed(1)} m/s`} hint={`${u} + ${a}×${t}`} />
        <Readout label="Distance (area)" value={`${distance.toFixed(1)} m`} hint="u·t + ½·a·t²" />
      </div>

      <Slider label="Initial velocity u" value={u} set={setU} min={0} max={20} step={1} display={`${u} m/s`} />
      <Slider label="Acceleration a" value={a} set={setA} min={-5} max={8} step={0.5} display={`${a} m/s²`} />
      <Slider label="Time t" value={t} set={setT} min={1} max={20} step={1} display={`${t} s`} />

      <Caption>
        On a velocity–time graph the <strong>gradient = acceleration</strong> ({a} m/s²) and the{" "}
        <strong>area under the line = distance travelled</strong> ({distance.toFixed(1)} m). After {t} s the
        velocity reaches {v.toFixed(1)} m/s.{" "}
        {a < 0 ? "A downward slope means it is decelerating." : a === 0 ? "A flat line means constant velocity." : "An upward slope means it is speeding up."}
      </Caption>
    </Wrap>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// phys-waves → Wave & refraction explorer
//   (a) v = f λ ; (b) Snell's law n = sin i / sin r, critical angle sin c = 1/n.
// ─────────────────────────────────────────────────────────────────────────────
function WaveRefraction() {
  const [mode, setMode] = useState<"Wave speed" | "Refraction">("Wave speed");

  // mode (a): wave speed
  const [f, setF] = useState(5); // frequency Hz
  const [lambda, setLambda] = useState(2); // wavelength m
  const v = f * lambda;

  // mode (b): refraction
  const [iDeg, setIDeg] = useState(40); // angle of incidence (degrees)
  const [n, setN] = useState(1.5); // refractive index of denser medium

  const iRad = (iDeg * Math.PI) / 180;
  const sinR = Math.sin(iRad) / n; // air → denser medium
  const refracts = sinR <= 1;
  const rDeg = refracts ? (Math.asin(sinR) * 180) / Math.PI : 0;
  const critDeg = (Math.asin(1 / n) * 180) / Math.PI;

  // SVG ray geometry (boundary horizontal at y=80, normal vertical at x=150)
  const BX = 150;
  const BY = 80;
  const L = 70;
  const incX = BX - L * Math.sin(iRad);
  const incY = BY - L * Math.cos(iRad);
  const refX = BX + L * Math.sin((rDeg * Math.PI) / 180);
  const refY = BY + L * Math.cos((rDeg * Math.PI) / 180);
  // reflected ray (used when TIR or always shown faintly) — angle = i on same side below? reflect upward
  const reflX = BX + L * Math.sin(iRad);
  const reflY = BY - L * Math.cos(iRad);

  return (
    <Wrap title="Wave & refraction explorer">
      <div className="mb-3">
        <Choice options={["Wave speed", "Refraction"] as const} value={mode} set={setMode} />
      </div>

      {mode === "Wave speed" ? (
        <>
          <div className="mb-3">
            <Readout label="Wave speed v = f λ" value={`${v.toFixed(1)} m/s`} hint={`${f} Hz × ${lambda} m`} />
          </div>
          <Slider label="Frequency f" value={f} set={setF} min={1} max={20} step={1} display={`${f} Hz`} />
          <Slider label="Wavelength λ" value={lambda} set={setLambda} min={0.5} max={5} step={0.5} display={`${lambda} m`} />
          <Caption>
            The wave equation <strong>v = f λ</strong> applies to every wave. Speed is set by the medium;
            raising the frequency or the wavelength of a wave in that medium gives a faster wave here:{" "}
            {f} × {lambda} = <strong>{v.toFixed(1)} m/s</strong>.
          </Caption>
        </>
      ) : (
        <>
          <div className="diagram mb-3">
            <svg viewBox="0 0 300 160" role="img" aria-label="Light ray refracting at a boundary between air and a denser medium">
              {/* denser medium block */}
              <rect x="0" y={BY} width="300" height={160 - BY} fill="#1e3a5f" opacity="0.5" />
              <line x1="0" y1={BY} x2="300" y2={BY} stroke="#475569" strokeWidth="1.5" />
              {/* normal */}
              <line x1={BX} y1="10" x2={BX} y2="150" stroke="#64748b" strokeWidth="1" strokeDasharray="5 4" />
              <text x="8" y="22" fill="#b7bce0" fontSize="9">air (n=1)</text>
              <text x="8" y={BY + 18} fill="#38bdf8" fontSize="9">medium (n={n.toFixed(2)})</text>
              {/* incident ray */}
              <line x1={incX} y1={incY} x2={BX} y2={BY} stroke="#fbbf24" strokeWidth="2" />
              {refracts ? (
                <line x1={BX} y1={BY} x2={refX} y2={refY} stroke="#34d399" strokeWidth="2" />
              ) : (
                <line x1={BX} y1={BY} x2={reflX} y2={reflY} stroke="#fb7185" strokeWidth="2" />
              )}
              <text x={incX - 4} y={incY - 4} fill="#fbbf24" fontSize="9" textAnchor="end">i</text>
              {refracts ? (
                <text x={refX + 4} y={refY} fill="#34d399" fontSize="9">r</text>
              ) : (
                <text x={reflX + 4} y={reflY} fill="#fb7185" fontSize="9">TIR</text>
              )}
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <Readout
              label="Angle of refraction r"
              value={refracts ? `${rDeg.toFixed(1)}°` : "—"}
              hint={refracts ? "sin r = sin i / n" : "ray reflected"}
            />
            <Readout label="Critical angle c" value={`${critDeg.toFixed(1)}°`} hint="sin c = 1/n" />
          </div>
          <Slider label="Angle of incidence i" value={iDeg} set={setIDeg} min={0} max={89} step={1} display={`${iDeg}°`} />
          <Slider label="Refractive index n" value={n} set={setN} min={1.1} max={2.4} step={0.05} display={n.toFixed(2)} />
          <Caption>
            Snell's law: <strong>n = sin i / sin r</strong>. Going into a denser medium the ray bends{" "}
            <strong>toward the normal</strong> (r &lt; i). Note this widget bends air → medium; the{" "}
            <strong>critical angle</strong> (c = {critDeg.toFixed(1)}°, from sin c = 1/n) only matters for the
            reverse trip — a ray inside the medium hitting the boundary above c is totally internally reflected.
          </Caption>
        </>
      )}
    </Wrap>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// phys-sound-em → Wave speed & EM spectrum
//   v = f λ, plus a clickable EM spectrum strip (radio → gamma).
// ─────────────────────────────────────────────────────────────────────────────
const EM_BANDS = [
  { name: "Radio", color: "#ef4444", use: "TV & radio broadcasting, Wi-Fi" },
  { name: "Micro", color: "#f97316", use: "Microwave ovens, mobile phones, satellites" },
  { name: "IR", color: "#eab308", use: "TV remotes, thermal imaging, heating" },
  { name: "Visible", color: "#22c55e", use: "Human sight, photography" },
  { name: "UV", color: "#3b82f6", use: "Sterilising, fluorescent lamps, sun-tanning" },
  { name: "X-ray", color: "#8b5cf6", use: "Medical imaging of bones, airport security" },
  { name: "Gamma", color: "#d946ef", use: "Killing cancer cells, sterilising equipment" },
] as const;

function WaveSpectrum() {
  const [f, setF] = useState(170); // Hz
  const [lambda, setLambda] = useState(2); // m
  const [band, setBand] = useState(3); // index into EM_BANDS (Visible)

  const v = f * lambda;
  const near = Math.abs(v - 340) < 30 ? "≈ speed of sound (340 m/s)" : v > 1e6 ? "fast like light" : "";
  const sel = EM_BANDS[band];

  return (
    <Wrap title="Wave speed & EM spectrum">
      <div className="mb-3">
        <Readout label="Wave speed v = f λ" value={`${v.toFixed(0)} m/s`} hint={`${f} Hz × ${lambda} m`} />
      </div>
      <Slider label="Frequency f" value={f} set={setF} min={20} max={1000} step={10} display={`${f} Hz`} />
      <Slider label="Wavelength λ" value={lambda} set={setLambda} min={0.2} max={5} step={0.2} display={`${lambda.toFixed(1)} m`} />

      <div className="diagram mb-2 mt-3">
        <svg viewBox="0 0 300 60" role="img" aria-label="Electromagnetic spectrum strip from radio to gamma rays">
          {EM_BANDS.map((b, i) => {
            const w = 300 / EM_BANDS.length;
            return (
              <g key={b.name} onClick={() => setBand(i)} style={{ cursor: "pointer" }}>
                <rect x={i * w} y="10" width={w - 1} height="26" fill={b.color} opacity={i === band ? 1 : 0.55} />
                <text x={i * w + w / 2} y="27" fill="#fff" fontSize="7.5" textAnchor="middle">
                  {b.name}
                </text>
                {i === band && <rect x={i * w} y="10" width={w - 1} height="26" fill="none" stroke="#fff" strokeWidth="2" />}
              </g>
            );
          })}
          <text x="4" y="50" fill="#b7bce0" fontSize="8">← long λ, low f</text>
          <text x="296" y="50" fill="#b7bce0" fontSize="8" textAnchor="end">short λ, high f →</text>
        </svg>
      </div>
      <div className="flex flex-wrap gap-1 mb-1">
        {EM_BANDS.map((b, i) => (
          <button key={b.name} onClick={() => setBand(i)} className={`chip text-xs ${i === band ? "btn-primary" : ""}`}>
            {b.name}
          </button>
        ))}
      </div>
      <Readout label={`${sel.name} — one use`} value={<span className="text-base">{sel.use}</span>} />

      <Caption>
        <strong>v = f λ</strong> holds for every wave: here {f} × {lambda.toFixed(1)} = {v.toFixed(0)} m/s{" "}
        {near && <em>({near})</em>}. Compare sound in air (≈ 340 m/s) with light/EM waves (c ≈ 3×10⁸ m/s). The EM
        spectrum runs <strong>radio → micro → infrared → visible → UV → X-ray → gamma</strong>: wavelength falls
        and frequency rises left to right.
      </Caption>
    </Wrap>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// phys-thermal → Heat energy calculator
//   (a) E = m c ΔT ; (b) Boyle's law p₁V₁ = p₂V₂.
// ─────────────────────────────────────────────────────────────────────────────
function HeatCalculator() {
  const [mode, setMode] = useState<"Heat (E=mcΔT)" | "Boyle (p₁V₁=p₂V₂)">("Heat (E=mcΔT)");

  // mode (a)
  const [m, setM] = useState(1); // kg
  const [c, setC] = useState(4200); // J/(kg·K) — water default
  const [dT, setDT] = useState(20); // K
  const E = m * c * dT;

  // mode (b)
  const [p1, setP1] = useState(100); // kPa
  const [v1, setV1] = useState(4); // (any consistent volume unit)
  const [v2, setV2] = useState(2);
  const p2 = (p1 * v1) / v2;

  // piston fill fraction for SVG (relative to v1 baseline of 5)
  const fill = Math.max(0.1, Math.min(1, v2 / 5));

  return (
    <Wrap title="Heat energy calculator">
      <div className="mb-3">
        <Choice options={["Heat (E=mcΔT)", "Boyle (p₁V₁=p₂V₂)"] as const} value={mode} set={setMode} />
      </div>

      {mode === "Heat (E=mcΔT)" ? (
        <>
          <div className="diagram mb-3">
            <svg viewBox="0 0 300 50" role="img" aria-label="Heating bar shaded to show temperature rise">
              <rect x="20" y="15" width="260" height="20" rx="6" fill="#1d2142" stroke="#475569" />
              <rect x="20" y="15" width={(Math.min(100, dT) / 100) * 260} height="20" rx="6" fill="#fb7185" />
              <text x="150" y="46" fill="#b7bce0" fontSize="10" textAnchor="middle">
                ΔT = {dT} °C
              </text>
            </svg>
          </div>
          <div className="mb-3">
            <Readout label="Energy E = m c ΔT" value={`${E.toLocaleString()} J`} hint={`${m} × ${c} × ${dT}`} />
          </div>
          <Slider label="Mass m" value={m} set={setM} min={0.1} max={5} step={0.1} display={`${m.toFixed(1)} kg`} />
          <Slider label="Specific heat c" value={c} set={setC} min={100} max={4200} step={100} display={`${c} J/(kg·K)`} />
          <Slider label="Temp change ΔT" value={dT} set={setDT} min={1} max={100} step={1} display={`${dT} °C`} />
          <Caption>
            <strong>E = m c ΔT</strong>: the energy to heat {m.toFixed(1)} kg by {dT} °C is{" "}
            <strong>{E.toLocaleString()} J</strong>. A high specific heat (water = 4200 J/(kg·K)) means a
            substance needs lots of energy for each degree — so water heats and cools slowly.
          </Caption>
        </>
      ) : (
        <>
          <div className="diagram mb-3">
            <svg viewBox="0 0 300 90" role="img" aria-label="Gas piston showing volume compressed and pressure rising">
              <rect x="40" y="20" width="180" height="50" fill="none" stroke="#475569" strokeWidth="2" />
              <rect x="42" y="22" width={176 * fill} height="46" fill="#38bdf8" fillOpacity="0.4" />
              {/* piston rod */}
              <rect x={42 + 176 * fill} y="22" width="8" height="46" fill="#a78bfa" />
              <line x1={42 + 176 * fill + 8} y1="45" x2="270" y2="45" stroke="#a78bfa" strokeWidth="3" />
              <text x="130" y="84" fill="#b7bce0" fontSize="10" textAnchor="middle">
                gas compressed → pressure rises
              </text>
            </svg>
          </div>
          <div className="mb-3">
            <Readout label="New pressure p₂ = p₁V₁ / V₂" value={`${p2.toFixed(0)} kPa`} hint={`${p1}×${v1} / ${v2}`} />
          </div>
          <Slider label="Pressure p₁" value={p1} set={setP1} min={50} max={300} step={10} display={`${p1} kPa`} />
          <Slider label="Volume V₁" value={v1} set={setV1} min={1} max={5} step={0.5} display={`${v1}`} />
          <Slider label="Volume V₂" value={v2} set={setV2} min={0.5} max={5} step={0.5} display={`${v2}`} />
          <Caption>
            <strong>Boyle's law p₁V₁ = p₂V₂</strong> (constant temperature, fixed mass of gas): pressure and
            volume are <strong>inversely proportional</strong>. Squeezing the gas from V₁ = {v1} to V₂ = {v2}{" "}
            raises the pressure to <strong>{p2.toFixed(0)} kPa</strong> — halve the volume and the pressure doubles.
          </Caption>
        </>
      )}
    </Wrap>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// phys-space → Orbital speed explorer
//   v = 2πr / T.
// ─────────────────────────────────────────────────────────────────────────────
const BODIES: { name: string; r: number; T: number }[] = [
  // r in metres, T in seconds
  { name: "ISS", r: 6.78e6, T: 92.7 * 60 },
  { name: "Moon", r: 3.84e8, T: 27.3 * 24 * 3600 },
  { name: "Geo-sat", r: 4.23e7, T: 24 * 3600 },
  { name: "Earth→Sun", r: 1.5e11, T: 365.25 * 24 * 3600 },
  { name: "Mars→Sun", r: 2.28e11, T: 687 * 24 * 3600 },
];

function OrbitalSpeed() {
  const [bi, setBi] = useState(1); // Moon
  const [angle, setAngle] = useState(0); // for the SVG marker (degrees)

  const body = BODIES[bi];
  const v = (2 * Math.PI * body.r) / body.T; // m/s
  const vkm = v / 1000;
  const days = body.T / (24 * 3600);

  const rad = (angle * Math.PI) / 180;
  const cx = 150;
  const cy = 75;
  const orbitR = 55;

  return (
    <Wrap title="Orbital speed explorer">
      <div className="mb-3">
        <Choice options={BODIES.map((b) => b.name)} value={body.name} set={(nm) => setBi(BODIES.findIndex((b) => b.name === nm))} />
      </div>

      <div className="diagram mb-3">
        <svg viewBox="0 0 300 150" role="img" aria-label="Orbiting body moving around a central body">
          <circle cx={cx} cy={cy} r={orbitR} fill="none" stroke="#475569" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx={cx} cy={cy} r="13" fill="#fbbf24" />
          <text x={cx} y={cy + 4} fill="#0f172a" fontSize="8" textAnchor="middle" fontWeight="bold">
            ●
          </text>
          {/* orbiting body */}
          <circle cx={cx + orbitR * Math.cos(rad)} cy={cy + orbitR * Math.sin(rad)} r="6" fill="#38bdf8" />
          {/* velocity readout in middle bottom */}
          <text x={cx} y="140" fill="#a78bfa" fontSize="10" textAnchor="middle">
            v = 2πr / T
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <Readout label="Orbital speed v = 2πr/T" value={`${vkm.toFixed(2)} km/s`} hint={`${v.toFixed(0)} m/s`} />
        <Readout label="Period T" value={days < 1 ? `${(days * 24).toFixed(1)} h` : `${days.toFixed(0)} days`} hint={`r = ${body.r.toExponential(2)} m`} />
      </div>

      <Slider label="Move body around orbit" value={angle} set={setAngle} min={0} max={360} step={5} display={`${angle}°`} />

      <Caption>
        <strong>v = 2πr / T</strong>: in one period the body travels the full circumference 2πr. For {body.name}{" "}
        that gives <strong>{vkm.toFixed(2)} km/s</strong>. Larger orbits take <strong>longer</strong> and move{" "}
        <strong>slower</strong> — gravity is weaker far out, so less centripetal force is needed (compare Earth ≈ 30 km/s
        with Mars ≈ 24 km/s).
      </Caption>
    </Wrap>
  );
}

import type { ReactElement } from "react";
export const widgets: Record<string, () => ReactElement> = {
  "phys-motion": MotionGrapher,
  "phys-waves": WaveRefraction,
  "phys-sound-em": WaveSpectrum,
  "phys-thermal": HeatCalculator,
  "phys-space": OrbitalSpeed,
};
