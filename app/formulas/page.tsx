"use client";

import { useState } from "react";
import Link from "next/link";
import type { SubjectId } from "@/lib/types";
import { useHeartbeat } from "@/lib/useHeartbeat";

interface FormulaEntry {
  spec: string;
  name: string;
  formula: string;
  units: string;
  examNote: string;
}

const FORMULA_DATA: Record<SubjectId, FormulaEntry[]> = {
  physics: [
    {
      spec: "4PH1 · Motion",
      name: "Average Speed & Acceleration",
      formula: "v = s / t    and    a = (v − u) / t    and    v² = u² + 2as",
      units: "v, u in m/s · s in m · t in s · a in m/s²",
      examNote: "On v–t graphs: gradient = acceleration; area under graph = distance travelled.",
    },
    {
      spec: "4PH1 · Forces",
      name: "Resultant Force, Weight & Hooke's Law",
      formula: "F = m × a    ·    W = m × g    ·    F = k × e",
      units: "F, W in N · m in kg · g ≈ 10 N/kg · e in m",
      examNote: "Always use RESULTANT force in F = ma. Stopping distance = thinking + braking.",
    },
    {
      spec: "4PH1 · Momentum & Moments",
      name: "Momentum, Impulse & Principle of Moments",
      formula: "p = m × v    ·    F = (mv − mu) / t    ·    Moment = F × d⊥",
      units: "p in kg m/s · Moment in N m",
      examNote: "Distance d must be PERPENDICULAR to the line of action of the force.",
    },
    {
      spec: "4PH1 · Energy & Power",
      name: "Work, GPE, KE, Power & Efficiency",
      formula: "W = F × d  ·  GPE = mgh  ·  KE = ½mv²  ·  P = E / t  ·  Eff = Useful / Total",
      units: "W, E in J · P in W (J/s)",
      examNote: "Equating mgh = ½mv² gives impact speed v = √(2gh) (mass cancels if no drag).",
    },
    {
      spec: "4PH1 · Pressure & Thermal",
      name: "Pressure, Specific Heat & Gas Laws",
      formula: "P = F / A  ·  P = hρg  ·  ΔQ = mcΔT  ·  P₁V₁ = P₂V₂  ·  P₁/T₁ = P₂/T₂",
      units: "P in Pa (N/m²) · ρ in kg/m³ · c in J/(kg °C) · T in Kelvin (K = °C + 273)",
      examNote: "ALWAYS convert °C to Kelvin (+273) before using P₁/T₁ = P₂/T₂!",
    },
    {
      spec: "4PH1 · Waves & Optics",
      name: "Wave Equation, Snell's Law & Critical Angle",
      formula: "v = f × λ    ·    f = 1 / T    ·    n = sin i / sin r    ·    sin c = 1 / n",
      units: "v in m/s · f in Hz · λ in m · T in s · angles measured from the 90° NORMAL",
      examNote: "Echo/sonar questions: sound travels there AND back, so v = 2d / t.",
    },
    {
      spec: "4PH1 · Electricity",
      name: "Charge, Ohm's Law, Electrical Power & Energy",
      formula: "Q = I × t    ·    V = I × R    ·    E = Q × V    ·    P = I × V = I²R    ·    E = I × V × t",
      units: "Q in C · I in A · t in s · V in V · R in Ω · P in W · E in J",
      examNote: "Convert minutes/hours into seconds before calculating Q = It or E = IVt!",
    },
    {
      spec: "4PH1 · Magnetism & Space",
      name: "Transformers & Orbital Speed",
      formula: "Vp / Vs = Np / Ns    ·    Vp × Ip = Vs × Is (100% eff.)    ·    v = 2πr / T",
      units: "r = orbital radius in m · T = orbital period in s",
      examNote: "Transformers ONLY work with AC (changing magnetic flux), never steady DC.",
    },
  ],
  chemistry: [
    {
      spec: "4CH1 · Moles & Masses",
      name: "Moles of Solid, Solution & Gas (r.t.p.)",
      formula: "n = m / Mr    ·    n = c × V(dm³)    ·    V(gas at r.t.p.) = n × 24 dm³",
      units: "m in g · c in mol/dm³ · V in dm³ (divide cm³ by 1000!)",
      examNote: "For empirical formula: divide % or mass by Ar (NOT atomic number!), then divide by smallest.",
    },
    {
      spec: "4CH1 · Yield & Atom Economy",
      name: "Percentage Yield & Relative Atomic Mass",
      formula: "% Yield = (Actual / Theoretical) × 100  ·  Ar = Σ(% × isotope mass) / 100",
      units: "Dimensionless / g mol⁻¹",
      examNote: "Give Chlorine Ar to 1 d.p. (35.5); check significant figures asked in the question.",
    },
    {
      spec: "4CH1 · Energetics",
      name: "Calorimetry & Bond Enthalpy",
      formula: "Q = m × c × ΔT  ·  ΔH = −Q / (1000 × n)  ·  ΔH = Σ(Bonds Broken) − Σ(Bonds Made)",
      units: "Q in J · m = mass of water/solution (g) · c = 4.18 J/(g °C) · ΔH in kJ/mol",
      examNote: "MEXOBENDO: Breaking bonds is Endothermic (+); Making bonds is Exothermic (−). Add minus sign to ΔH if temperature rose!",
    },
    {
      spec: "4CH1 · Electrochemistry",
      name: "PANIC & OIL RIG Electrode Rules",
      formula: "Anode (+) = Oxidation (Loss of e⁻)    ·    Cathode (−) = Reduction (Gain of e⁻)",
      units: "Half-equations must balance atoms AND charges",
      examNote: "Aqueous cathode → H₂ unless metal is less reactive than H (Cu, Ag). Aqueous anode → halogen (Cl₂/Br₂/I₂) if concentrated halide, else O₂.",
    },
    {
      spec: "4CH1 · Chemical Analysis",
      name: "Chromatography Rf, Flame Tests & Ion Tests",
      formula: "Rf = distance moved by spot / distance moved by solvent front",
      units: "0 < Rf < 1 (no units; baseline drawn in PENCIL)",
      examNote: "Flames: Li⁺ crimson, Na⁺ yellow, K⁺ lilac, Ca²⁺ orange-red, Cu²⁺ blue-green. Halides (HNO₃ + AgNO₃): Cl⁻ white, Br⁻ cream, I⁻ yellow.",
    },
  ],
  biology: [
    {
      spec: "4BI1 · Cells & Microscopy",
      name: "Magnification (I = A × M) & Unit Conversions",
      formula: "Magnification (M) = Image size (I) / Actual size (A)",
      units: "1 mm = 1,000 µm    ·    Convert I and A to the SAME unit before dividing!",
      examNote: "Measure scale bars or drawings in mm, multiply by 1000 for µm, then divide by M.",
    },
    {
      spec: "4BI1 · Osmosis & Practical Data",
      name: "Percentage Change in Mass",
      formula: "% Change = ((Final mass − Initial mass) / Initial mass) × 100",
      units: "% (keep + or − sign!)",
      examNote: "We use % change rather than raw mass change because potato cylinders have slightly different starting masses.",
    },
    {
      spec: "4BI1 · Bioenergetics",
      name: "Photosynthesis & Cellular Respiration Equations",
      formula: "Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂  ·  Aerobic: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O",
      units: "Anaerobic (muscle): Glucose → Lactic acid  ·  Anaerobic (yeast): Glucose → Ethanol + CO₂",
      examNote: "NEVER write respiration 'produces/creates energy' — write 'RELEASES energy (ATP)'.",
    },
    {
      spec: "4BI1 · Molecules & Food Tests",
      name: "Core Biochemical Reagent Tests",
      formula: "Starch: Iodine (orange-brown → blue-black)  ·  Glucose: Benedict's + 80 °C bath (blue → brick-red)",
      units: "Protein: Biuret (blue → lilac, NO heat)  ·  Lipids: Ethanol + water (cloudy white emulsion)",
      examNote: "Forgetting 'heat / 80 °C water bath' on Benedict's test loses a mark every time!",
    },
    {
      spec: "4BI1 · Ecology & Sampling",
      name: "Quadrat Population Estimate & Trophic Efficiency",
      formula: "Total Pop = Mean per quadrat × (Total area / Quadrat area)  ·  % Transfer = (Next level / Previous) × 100",
      units: "Place quadrats RANDOMLY (random number coordinates), never 'thrown over shoulder'!",
      examNote: "~90% of energy is lost between trophic levels via respiration heat, movement, and undigested faeces.",
    },
  ],
};

export default function FormulasSheetPage() {
  useHeartbeat();
  const [subj, setSubj] = useState<"all" | SubjectId>("all");

  const sections: SubjectId[] =
    subj === "all" ? ["physics", "chemistry", "biology"] : [subj];

  const LABELS: Record<SubjectId, { icon: string; title: string }> = {
    physics: { icon: "⚡", title: "Physics (Edexcel 4PH1) — Equations & SI Units" },
    chemistry: { icon: "⚗️", title: "Chemistry (Edexcel 4CH1) — Moles, ΔH & Ion Tests" },
    biology: { icon: "🧬", title: "Biology (Edexcel 4BI1) — Calculations, Equations & Food Tests" },
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-2 flex-wrap print:hidden">
        <Link href="/" className="chip">
          ← Home
        </Link>
        <div className="flex items-center gap-2 flex-wrap">
          <Link href="/pitfalls" className="chip tone-emerald">
            🛡️ Marks-Saver Pitfalls Vault
          </Link>
          <button type="button" onClick={() => window.print()} className="chip">
            🖨️ Print Cheat Sheet
          </button>
        </div>
      </div>

      <header className="space-y-2">
        <span className="chip tone-indigo">📐 Edexcel IGCSE Triple Science · 4PH1 · 4CH1 · 4BI1</span>
        <h1 className="text-2xl sm:text-3xl font-black">
          📐 Exam Equations, Units &amp; Practical Tests Vault
        </h1>
        <p className="text-sm text-ink-soft max-w-3xl">
          Every core calculation formula, SI unit conversion, and practical reagent test across
          Edexcel Physics, Chemistry, and Biology — paired with the #1 unit/method slip examiners
          penalise.
        </p>
      </header>

      <div className="flex flex-wrap gap-2 print:hidden">
        <button
          type="button"
          onClick={() => setSubj("all")}
          className={`btn text-xs sm:text-sm py-2 px-3.5 ${subj === "all" ? "btn-primary" : "btn-ghost"}`}
        >
          All 3 Sciences
        </button>
        <button
          type="button"
          onClick={() => setSubj("physics")}
          className={`btn text-xs sm:text-sm py-2 px-3.5 ${subj === "physics" ? "btn-primary" : "btn-ghost"}`}
        >
          ⚡ Physics 4PH1
        </button>
        <button
          type="button"
          onClick={() => setSubj("chemistry")}
          className={`btn text-xs sm:text-sm py-2 px-3.5 ${subj === "chemistry" ? "btn-primary" : "btn-ghost"}`}
        >
          ⚗️ Chemistry 4CH1
        </button>
        <button
          type="button"
          onClick={() => setSubj("biology")}
          className={`btn text-xs sm:text-sm py-2 px-3.5 ${subj === "biology" ? "btn-primary" : "btn-ghost"}`}
        >
          🧬 Biology 4BI1
        </button>
      </div>

      {sections.map((s) => (
        <section key={s} className={`space-y-3 accent-${s}`}>
          <h2 className="text-xl font-black" style={{ color: "var(--accent)" }}>
            {LABELS[s].icon} {LABELS[s].title}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {FORMULA_DATA[s].map((f, i) => (
              <div key={i} className="card p-4 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="chip text-[0.68rem]">{f.spec}</span>
                </div>
                <div className="font-black text-base">{f.name}</div>
                <div className="rounded-xl bg-bg-soft border border-line px-3 py-2 font-mono text-xs sm:text-sm font-bold">
                  {f.formula}
                </div>
                <div className="text-xs text-ink-soft">
                  <strong className="text-ink">Units / Key:</strong> {f.units}
                </div>
                <div className="text-xs tone-emerald font-semibold">
                  🛡️ Marks-Saver: {f.examNote}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
