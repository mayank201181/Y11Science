"use client";

import { useState } from "react";
import type { ReactElement } from "react";
import { Wrap, Stepper, Slider, Choice, Readout, Caption } from "./kit";

/* ============================================================================
   bio-cells — Magnification calculator
   magnification = image size ÷ actual size  (rearrangeable triangle)
   ========================================================================== */

function CellMagnification(): ReactElement {
  // Work internally in micrometres (µm). Image size shown in mm.
  const [imageMm, setImageMm] = useState(24); // image/drawing size in mm
  const [mag, setMag] = useState(400); // magnification ×

  const imageUm = imageMm * 1000; // 1 mm = 1000 µm
  const actualUm = imageUm / mag; // µm
  const actualMm = actualUm / 1000;

  // Friendly display for actual size: use µm if < 1 mm, else mm.
  const actualDisplay =
    actualMm >= 1 ? `${actualMm.toFixed(2)} mm` : `${actualUm.toFixed(1)} µm`;

  return (
    <Wrap title="Magnification Calculator">
      <div className="diagram mb-3">
        <svg viewBox="0 0 300 170" role="img" aria-label="Magnification formula triangle: image size over actual size times magnification">
          {/* Formula triangle */}
          <polygon points="150,20 40,150 260,150" fill="none" stroke="#313870" strokeWidth="2" />
          <line x1="95" y1="85" x2="205" y2="85" stroke="#313870" strokeWidth="2" />
          <line x1="150" y1="85" x2="150" y2="150" stroke="#313870" strokeWidth="2" />
          {/* Top: Image size */}
          <text x="150" y="60" fill="#fde68a" fontSize="15" fontWeight="bold" textAnchor="middle">
            I
          </text>
          <text x="150" y="76" fill="#b7bce0" fontSize="9" textAnchor="middle">
            image
          </text>
          {/* Bottom-left: Actual size */}
          <text x="110" y="120" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle">
            A
          </text>
          <text x="110" y="135" fill="#b7bce0" fontSize="9" textAnchor="middle">
            actual
          </text>
          {/* Bottom-right: Magnification */}
          <text x="190" y="120" fill="#fb7185" fontSize="15" fontWeight="bold" textAnchor="middle">
            M
          </text>
          <text x="190" y="135" fill="#b7bce0" fontSize="9" textAnchor="middle">
            mag
          </text>
          {/* Live substitution */}
          <text x="150" y="166" fill="#e8e9f5" fontSize="9" textAnchor="middle">
            A = I ÷ M = {imageUm.toLocaleString()} µm ÷ {mag} = {actualUm.toFixed(1)} µm
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <Readout label="Image size" value={`${imageMm} mm`} hint={`= ${imageUm.toLocaleString()} µm`} />
        <Readout label="Actual size" value={actualDisplay} hint={`I ÷ M`} />
      </div>

      <Stepper label="Image size (mm)" value={imageMm} set={setImageMm} min={1} max={200} step={1} />
      <Slider
        label="Magnification (×)"
        value={mag}
        set={setMag}
        min={10}
        max={2000}
        step={10}
        display={`×${mag}`}
      />

      <Caption>
        Cover the quantity you want in the triangle: <strong>actual size = image ÷ magnification</strong>.
        Both sizes must be in the <strong>same unit</strong>, so the image ({imageMm} mm) is converted to{" "}
        {imageUm.toLocaleString()} µm (1 mm = 1000 µm) before dividing by ×{mag}. The real object is{" "}
        <strong>{actualDisplay}</strong> across — usually far smaller than the magnified image you see.
      </Caption>
    </Wrap>
  );
}

/* ============================================================================
   bio-enzymes — Enzyme activity explorer
   Relative rate vs temperature (rises with kinetic energy to an optimum,
   then falls sharply due to denaturation). pH choice shifts the optimum.
   ========================================================================== */

const PH_OPTIONS = ["pH 2 (pepsin)", "pH 7 (amylase)", "pH 8 (trypsin)"] as const;
type PhOpt = (typeof PH_OPTIONS)[number];
const PH_OPTIMUM: Record<PhOpt, number> = {
  "pH 2 (pepsin)": 2,
  "pH 7 (amylase)": 7,
  "pH 8 (trypsin)": 8,
};

// Relative rate (0–1) for a given temperature (enzyme at its optimum pH).
// Optimum temperature ~40 °C; denaturation above it.
function enzymeRate(tempC: number): number {
  const optT = 40;
  let r: number;
  if (tempC <= optT) {
    // Rising limb: roughly Q10 ≈ 2 (gentle exponential up to optimum).
    r = Math.pow(2, (tempC - optT) / 10);
  } else {
    // Falling limb: steep denaturation, rate near zero by ~60 °C.
    r = Math.max(0, 1 - Math.pow((tempC - optT) / 20, 2));
  }
  return Math.max(0, Math.min(1, r));
}

function EnzymeExplorer(): ReactElement {
  const [temp, setTemp] = useState(37);
  const [ph, setPh] = useState<PhOpt>("pH 7 (amylase)");

  // Each enzyme is modelled working at its OWN optimum pH (peak at full height);
  // the choice relabels the optimum pH and the temperature curve is shared.
  const rate = enzymeRate(temp);

  // Build SVG curve across 0–80 °C.
  const x0 = 36;
  const y0 = 150;
  const plotW = 250;
  const plotH = 120;
  const tToX = (t: number) => x0 + (t / 80) * plotW;
  const rToY = (r: number) => y0 - r * plotH;

  const pts: string[] = [];
  for (let t = 0; t <= 80; t += 2) {
    pts.push(`${tToX(t).toFixed(1)},${rToY(enzymeRate(t)).toFixed(1)}`);
  }
  const path = `M ${pts.join(" L ")}`;
  const markerX = tToX(temp);
  const markerY = rToY(rate);

  const phase =
    temp < 40 ? "kinetic (rising)" : temp === 40 ? "optimum" : "denaturing (falling)";

  return (
    <Wrap title="Enzyme Activity Explorer">
      <div className="diagram mb-3">
        <svg viewBox="0 0 300 180" role="img" aria-label="Graph of relative enzyme rate versus temperature with optimum near 40 degrees and denaturation beyond">
          {/* axes */}
          <line x1={x0} y1={y0} x2={x0 + plotW} y2={y0} stroke="#313870" strokeWidth="1.5" />
          <line x1={x0} y1={y0} x2={x0} y2={y0 - plotH - 6} stroke="#313870" strokeWidth="1.5" />
          {/* x ticks */}
          {[0, 20, 40, 60, 80].map((t) => (
            <text key={t} x={tToX(t)} y={y0 + 14} fill="#b7bce0" fontSize="8" textAnchor="middle">
              {t}
            </text>
          ))}
          <text x={x0 + plotW / 2} y={y0 + 27} fill="#b7bce0" fontSize="9" textAnchor="middle">
            Temperature (°C)
          </text>
          <text x={x0 - 6} y={y0 - plotH - 10} fill="#b7bce0" fontSize="8" textAnchor="middle">
            rate
          </text>
          {/* optimum guide line */}
          <line x1={tToX(40)} y1={y0} x2={tToX(40)} y2={rToY(1)} stroke="#fbbf24" strokeWidth="0.8" strokeDasharray="3,2" />
          <text x={tToX(40)} y={rToY(1) - 4} fill="#fbbf24" fontSize="8" textAnchor="middle">
            optimum
          </text>
          {/* curve */}
          <path d={path} fill="none" stroke="#34d399" strokeWidth="2.5" />
          {/* marker */}
          <line x1={markerX} y1={y0} x2={markerX} y2={markerY} stroke="#fb7185" strokeWidth="1" strokeDasharray="2,2" />
          <circle cx={markerX} cy={markerY} r="4.5" fill="#fb7185" />
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <Readout label="Relative rate" value={`${(rate * 100).toFixed(0)}%`} hint={phase} />
        <Readout label="Optimum pH" value={`${PH_OPTIMUM[ph]}`} hint={ph.replace(/pH \d+ /, "")} />
      </div>

      <Slider
        label="Temperature"
        value={temp}
        set={setTemp}
        min={0}
        max={80}
        step={1}
        display={`${temp} °C`}
      />
      <div className="py-1">
        <div className="text-sm mb-1">Enzyme (sets optimum pH)</div>
        <Choice options={PH_OPTIONS} value={ph} set={setPh} />
      </div>

      <Caption>
        Below ~40 °C, heating gives molecules more <strong>kinetic energy</strong>, so substrate and
        enzyme collide more often and the rate climbs (≈ doubling per 10 °C). Above the optimum the
        enzyme is <strong>denatured</strong> — its active site changes shape permanently — so the rate
        falls steeply to zero. Each enzyme also has an <strong>optimum pH</strong> (here{" "}
        {PH_OPTIMUM[ph]}); extreme pH denatures it too. Enzymes are not "killed" — they are not alive.
      </Caption>
    </Wrap>
  );
}

/* ============================================================================
   bio-disease-immunity — Immune response grapher
   Antibody concentration vs time: secondary response is faster, higher, longer.
   ========================================================================== */

type Exposure = "First exposure" | "Second exposure";
const EXPOSURES = ["First exposure", "Second exposure"] as const;

function ImmuneResponse(): ReactElement {
  const [exposure, setExposure] = useState<Exposure>("First exposure");
  const secondary = exposure === "Second exposure";

  const W = 300;
  const H = 180;
  const x0 = 30;
  const y0 = 150;
  const plotW = 256;
  const plotH = 122;

  // time 0–1 → x ; antibody 0–1 → y
  const tx = (t: number) => x0 + t * plotW;
  const ay = (a: number) => y0 - a * plotH;

  // Primary: slow start (lag), modest peak. Secondary: short lag, ~4x peak, slower decline.
  const lag = secondary ? 0.05 : 0.18;
  const peakT = secondary ? 0.32 : 0.5;
  const peak = secondary ? 0.92 : 0.35;
  const decay = secondary ? 1.4 : 2.4; // larger = faster decline

  function level(t: number): number {
    if (t < lag) return 0;
    const u = t - lag;
    // rise to peak then exponential-ish decline
    const rise = 1 - Math.exp(-(u / peakT) * 3);
    const fall = Math.exp(-Math.max(0, u - peakT) * decay);
    return Math.max(0, peak * rise * fall);
  }

  const pts: string[] = [];
  for (let i = 0; i <= 100; i++) {
    const t = i / 100;
    pts.push(`${tx(t).toFixed(1)},${ay(level(t)).toFixed(1)}`);
  }
  const path = `M ${pts.join(" L ")}`;

  return (
    <Wrap title="Immune Response Grapher">
      <div className="diagram mb-3">
        <svg viewBox="0 0 300 180" role="img" aria-label="Graph of antibody concentration against time comparing primary and secondary immune responses">
          <line x1={x0} y1={y0} x2={x0 + plotW} y2={y0} stroke="#313870" strokeWidth="1.5" />
          <line x1={x0} y1={y0} x2={x0} y2={y0 - plotH - 6} stroke="#313870" strokeWidth="1.5" />
          {/* exposure arrow */}
          <line x1={tx(secondary ? 0.05 : 0.0)} y1={y0} x2={tx(secondary ? 0.05 : 0.0)} y2={y0 - plotH} stroke="#a78bfa" strokeWidth="0.8" strokeDasharray="3,2" />
          <text x={tx(0.06)} y={y0 - plotH + 6} fill="#a78bfa" fontSize="8">
            pathogen enters
          </text>
          {/* faint reference: the OTHER curve for contrast */}
          <path d={path} fill="none" stroke="#34d399" strokeWidth="2.5" />
          <text x={x0 + plotW / 2} y={y0 + 22} fill="#b7bce0" fontSize="9" textAnchor="middle">
            Time after exposure →
          </text>
          <text x={x0 - 4} y={y0 - plotH - 10} fill="#b7bce0" fontSize="8" textAnchor="middle">
            antibody
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-3">
        <Readout label="Speed" value={secondary ? "Fast" : "Slow"} hint={secondary ? "short lag" : "days–weeks lag"} />
        <Readout label="Peak level" value={secondary ? "High" : "Lower"} hint={secondary ? "~×4 higher" : "modest"} />
        <Readout label="Duration" value={secondary ? "Longer" : "Shorter"} hint={secondary ? "memory cells" : "—"} />
      </div>

      <div className="py-1">
        <Choice options={EXPOSURES} value={exposure} set={setExposure} />
      </div>

      <Caption>
        On the <strong>first exposure</strong> the body has no matching antibodies yet, so there is a
        long lag while B-lymphocytes find the antigen, divide and make plasma cells — the response is
        slow and the antibody peak is modest. Crucially, some B-cells become long-lived{" "}
        <strong>memory cells</strong>. On a <strong>second exposure</strong> to the same pathogen these
        memory cells act at once, so antibodies are produced <strong>faster, in much greater amounts,
        and for longer</strong> — usually destroying the pathogen before you feel ill. This is how
        vaccines protect you.
      </Caption>
    </Wrap>
  );
}

/* ============================================================================
   bio-ecology — Energy-transfer pyramid
   ~10% rule: producer → primary → secondary → tertiary consumer.
   ========================================================================== */

function EnergyPyramid(): ReactElement {
  const [producerKj, setProducerKj] = useState(10000);
  const efficiency = 0.1; // ~10% transfer between trophic levels

  const levels = [
    { name: "Producer (TL1)", note: "plant / algae" },
    { name: "Primary consumer (TL2)", note: "herbivore" },
    { name: "Secondary consumer (TL3)", note: "carnivore" },
    { name: "Tertiary consumer (TL4)", note: "top carnivore" },
  ];
  const energies = levels.map((_, i) => producerKj * Math.pow(efficiency, i));

  const fmt = (n: number) =>
    n >= 1 ? `${Math.round(n).toLocaleString()} kJ` : `${n.toFixed(2)} kJ`;

  // Pyramid SVG: bars centred, width ∝ log of energy so all stay visible.
  const W = 300;
  const colours = ["#34d399", "#38bdf8", "#fbbf24", "#fb7185"];
  const maxBar = 240;
  const barH = 30;
  const gap = 8;

  return (
    <Wrap title="Energy-Transfer Pyramid">
      <div className="diagram mb-3">
        <svg viewBox="0 0 300 180" role="img" aria-label="Pyramid of energy showing roughly ten percent transfer between trophic levels">
          {levels.map((lv, i) => {
            // bar width scales with log so tiny levels still show
            const frac = Math.max(0.12, (Math.log10(energies[i] + 1) + 1) / (Math.log10(producerKj + 1) + 1));
            const w = maxBar * frac;
            const x = (W - w) / 2;
            const y = 14 + i * (barH + gap);
            return (
              <g key={lv.name}>
                <rect x={x} y={y} width={w} height={barH} rx="4" fill={colours[i]} fillOpacity="0.85" />
                <text x={W / 2} y={y + 13} fill="#0f172a" fontSize="9" fontWeight="bold" textAnchor="middle">
                  {lv.name}
                </text>
                <text x={W / 2} y={y + 24} fill="#0f172a" fontSize="9" textAnchor="middle">
                  {fmt(energies[i])}
                </text>
                {i < levels.length - 1 && (
                  <text x={W - 6} y={y + barH + gap / 2 + 4} fill="#b7bce0" fontSize="8" textAnchor="end">
                    ↓ ×0.1
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <Stepper
        label="Producer energy (kJ)"
        value={producerKj}
        set={setProducerKj}
        min={1000}
        max={100000}
        step={1000}
      />

      <div className="grid grid-cols-2 gap-2 my-3">
        <Readout label="Reaches TL2" value={fmt(energies[1])} hint="primary consumer" />
        <Readout label="Reaches TL4" value={fmt(energies[3])} hint="tertiary consumer" />
      </div>

      <Caption>
        Only about <strong>10%</strong> of the energy at one trophic level passes to the next; the rest
        is lost as <strong>heat from respiration</strong>, in movement, and in undigested or excreted
        material. So {fmt(producerKj)} fixed by the producer leaves just{" "}
        <strong>{fmt(energies[3])}</strong> for a tertiary consumer. Because energy shrinks ten-fold at
        each step, there is rarely enough left to support a fifth level — which is why{" "}
        <strong>food chains are short</strong>.
      </Caption>
    </Wrap>
  );
}

/* ============================================================================
   bio-coordination — Negative-feedback thermostat
   Slider sets core temperature → homeostatic response pulling back to 37 °C.
   ========================================================================== */

function Thermostat(): ReactElement {
  const [temp, setTemp] = useState(37);
  const setPoint = 37;
  const dev = temp - setPoint;
  const hot = dev > 0.3;
  const cold = dev < -0.3;
  const normal = !hot && !cold;

  const state = hot ? "TOO HOT" : cold ? "TOO COLD" : "NORMAL";
  const stateColour = hot ? "#fb7185" : cold ? "#38bdf8" : "#34d399";

  const responses = hot
    ? ["Sweating (evaporative cooling)", "Vasodilation — vessels widen, more heat lost", "Hairs lie flat"]
    : cold
    ? ["Shivering (muscles release heat)", "Vasoconstriction — vessels narrow, less heat lost", "Hairs stand erect"]
    : ["No correction needed — at the set point"];

  // Thermometer SVG
  const W = 300;
  const H = 150;
  const tubeX = 40;
  const tubeTop = 20;
  const tubeBot = 120;
  // map 33–41 °C to tube height
  const tMin = 33;
  const tMax = 41;
  const frac = Math.max(0, Math.min(1, (temp - tMin) / (tMax - tMin)));
  const fillY = tubeBot - frac * (tubeBot - tubeTop);
  const setY = tubeBot - ((setPoint - tMin) / (tMax - tMin)) * (tubeBot - tubeTop);

  return (
    <Wrap title="Negative-Feedback Thermostat">
      <div className="diagram mb-3">
        <svg viewBox="0 0 300 150" role="img" aria-label="Thermometer showing core body temperature and the homeostatic response toward 37 degrees">
          {/* tube */}
          <rect x={tubeX - 7} y={tubeTop} width="14" height={tubeBot - tubeTop} rx="7" fill="#1e2247" stroke="#313870" strokeWidth="1.5" />
          {/* mercury */}
          <rect x={tubeX - 4} y={fillY} width="8" height={tubeBot - fillY} fill={stateColour} />
          <circle cx={tubeX} cy={tubeBot + 8} r="11" fill={stateColour} />
          {/* set point line */}
          <line x1={tubeX + 12} y1={setY} x2={tubeX + 40} y2={setY} stroke="#34d399" strokeWidth="1" strokeDasharray="3,2" />
          <text x={tubeX + 44} y={setY + 3} fill="#34d399" fontSize="8">
            set point 37 °C
          </text>
          {/* current temp readout */}
          <text x={tubeX - 18} y={fillY + 3} fill="#e8e9f5" fontSize="9" textAnchor="end">
            {temp.toFixed(1)}°
          </text>
          {/* state + response panel */}
          <text x="150" y="30" fill={stateColour} fontSize="13" fontWeight="bold">
            {state}
          </text>
          {responses.map((r, i) => (
            <text key={i} x="150" y={50 + i * 16} fill="#b7bce0" fontSize="8.5">
              • {r}
            </text>
          ))}
          {/* feedback arrow back to set point */}
          {!normal && (
            <text x="150" y={50 + responses.length * 16 + 8} fill="#fbbf24" fontSize="9">
              ⟲ pulls temperature back toward 37 °C
            </text>
          )}
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <Readout label="Core temperature" value={`${temp.toFixed(1)} °C`} hint={`${dev >= 0 ? "+" : ""}${dev.toFixed(1)} from set point`} />
        <Readout label="Detected by" value="Hypothalamus" hint="the body's thermostat" />
      </div>

      <Slider
        label="Core temperature"
        value={temp}
        set={setTemp}
        min={33}
        max={41}
        step={0.1}
        display={`${temp.toFixed(1)} °C`}
      />

      <Caption>
        The <strong>hypothalamus</strong> detects blood temperature and keeps it near the set point of{" "}
        <strong>37 °C</strong>. {hot && "Above it, sweating and vasodilation increase heat loss. "}
        {cold && "Below it, shivering and vasoconstriction reduce heat loss and generate heat. "}
        {normal && "At the set point no correction is needed. "}
        Each response <strong>opposes</strong> the change that triggered it, pulling temperature back —
        this is <strong>negative feedback</strong>, the basis of homeostasis. The bigger the deviation,
        the stronger the correction, so the system rarely overshoots.
      </Caption>
    </Wrap>
  );
}

/* ========================================================================== */

export const widgets: Record<string, () => ReactElement> = {
  "bio-cells": CellMagnification,
  "bio-enzymes": EnzymeExplorer,
  "bio-disease-immunity": ImmuneResponse,
  "bio-ecology": EnergyPyramid,
  "bio-coordination": Thermostat,
};
