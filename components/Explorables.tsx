"use client";

import { useState } from "react";

function Wrap({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card p-4">
      <div className="font-bold mb-2 flex items-center gap-2">🎛️ {title}</div>
      {children}
    </div>
  );
}

// ---- pH slider ----
function PhSlider() {
  const [ph, setPh] = useState(7);
  const color =
    ph < 3 ? "#ef4444" : ph < 7 ? "#f97316" : ph === 7 ? "#22c55e" : ph < 11 ? "#3b82f6" : "#7c3aed";
  const label = ph < 7 ? "Acidic" : ph === 7 ? "Neutral" : "Alkaline";
  return (
    <Wrap title="pH explorer">
      <div className="diagram mb-3">
        <svg viewBox="0 0 300 80" role="img" aria-label="pH colour scale">
          <defs>
            <linearGradient id="phg" x1="0" x2="1">
              <stop offset="0" stopColor="#ef4444" />
              <stop offset="0.5" stopColor="#22c55e" />
              <stop offset="1" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          <rect x="10" y="20" width="280" height="20" rx="6" fill="url(#phg)" />
          <circle cx={10 + (ph / 14) * 280} cy="30" r="10" fill={color} stroke="#fff" strokeWidth="2" />
          <text x="150" y="62" fill="#b7bce0" fontSize="12" textAnchor="middle">
            pH {ph} — {label}
          </text>
        </svg>
      </div>
      <input
        type="range"
        min={0}
        max={14}
        value={ph}
        onChange={(e) => setPh(Number(e.target.value))}
        className="w-full"
      />
      <p className="text-sm text-ink-soft mt-2">
        Each step down in pH means <strong>10× more</strong> H⁺ ions. pH 3 is 10 000× more acidic than
        pH 7!
      </p>
    </Wrap>
  );
}

// ---- Photosynthesis rate vs light ----
function PhotoRate() {
  const [light, setLight] = useState(40);
  const rate = Math.round(Math.min(100, 8 + light * 0.9)); // plateaus
  const plateau = light > 70;
  return (
    <Wrap title="Photosynthesis rate">
      <div className="diagram mb-3">
        <svg viewBox="0 0 300 150" role="img" aria-label="Rate of photosynthesis against light intensity">
          <line x1="30" y1="120" x2="290" y2="120" stroke="#64748b" />
          <line x1="30" y1="120" x2="30" y2="15" stroke="#64748b" />
          <path
            d="M30 118 Q 120 30 180 28 L 290 28"
            fill="none"
            stroke="#34d399"
            strokeWidth="3"
          />
          <circle cx={30 + (light / 100) * 260} cy={120 - (rate / 100) * 95} r="6" fill="#fbbf24" />
          <text x="160" y="140" fill="#b7bce0" fontSize="11" textAnchor="middle">
            Light intensity →
          </text>
        </svg>
      </div>
      <input type="range" min={0} max={100} value={light} onChange={(e) => setLight(Number(e.target.value))} className="w-full" />
      <p className="text-sm text-ink-soft mt-2">
        Rate ≈ <strong>{rate}%</strong>.{" "}
        {plateau
          ? "Now light is no longer limiting — temperature or CO₂ has taken over."
          : "Light is the limiting factor — more light, faster rate."}
      </p>
    </Wrap>
  );
}

// ---- Reaction rate (temperature) ----
function ReactionRate() {
  const [temp, setTemp] = useState(20);
  const rate = Math.round(Math.pow(2, (temp - 20) / 10) * 10) / 10; // doubles per 10°C
  return (
    <Wrap title="Collision theory">
      <div className="diagram mb-3">
        <svg viewBox="0 0 300 110" role="img" aria-label="Particles moving at a temperature">
          {Array.from({ length: 9 }).map((_, i) => {
            const speed = (temp / 100) * 8;
            const x = 30 + ((i * 47 + temp * 2) % 240);
            const y = 25 + ((i * 31 + temp) % 60);
            return <circle key={i} cx={x} cy={y} r={5 + speed / 4} fill="#a78bfa" opacity="0.85" />;
          })}
        </svg>
      </div>
      <input type="range" min={0} max={80} value={temp} onChange={(e) => setTemp(Number(e.target.value))} className="w-full" />
      <p className="text-sm text-ink-soft mt-2">
        {temp}°C → relative rate ≈ <strong>{rate}×</strong>. Heat gives particles more energy, so they
        collide <strong>more often</strong> and <strong>harder</strong>.
      </p>
    </Wrap>
  );
}

// ---- Particle states ----
function ParticleStates() {
  const [state, setState] = useState<"solid" | "liquid" | "gas">("solid");
  const positions =
    state === "solid"
      ? Array.from({ length: 16 }).map((_, i) => ({ x: 60 + (i % 4) * 50, y: 25 + Math.floor(i / 4) * 28 }))
      : state === "liquid"
        ? Array.from({ length: 16 }).map((_, i) => ({ x: 50 + ((i * 37) % 200), y: 30 + ((i * 53) % 70) }))
        : Array.from({ length: 16 }).map((_, i) => ({ x: 30 + ((i * 71) % 240), y: 15 + ((i * 47) % 90) }));
  return (
    <Wrap title="States of matter">
      <div className="diagram mb-3">
        <svg viewBox="0 0 300 120" role="img" aria-label="Particle arrangement in three states">
          <rect x="20" y="10" width="260" height="100" rx="8" fill="none" stroke="#313870" />
          {positions.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="8" fill="#38bdf8" />
          ))}
        </svg>
      </div>
      <div className="flex gap-2">
        {(["solid", "liquid", "gas"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setState(s)}
            className={`btn text-sm ${state === s ? "btn-primary" : "btn-ghost"}`}
          >
            {s}
          </button>
        ))}
      </div>
      <p className="text-sm text-ink-soft mt-2">
        {state === "solid" && "Fixed positions, vibrating — regular lattice, fixed shape & volume."}
        {state === "liquid" && "Touching but free to move — fixed volume, takes the container's shape."}
        {state === "gas" && "Far apart, fast, random — fills all available space."}
      </p>
    </Wrap>
  );
}

// ---- Radioactive half-life ----
function HalfLife() {
  const [t, setT] = useState(0); // half-lives elapsed
  const remaining = Math.round(100 * Math.pow(0.5, t));
  return (
    <Wrap title="Half-life decay">
      <div className="diagram mb-3">
        <svg viewBox="0 0 300 130" role="img" aria-label="Radioactive decay curve">
          <line x1="30" y1="110" x2="290" y2="110" stroke="#64748b" />
          <line x1="30" y1="110" x2="30" y2="10" stroke="#64748b" />
          <path d="M30 12 Q 90 70 160 95 T 290 108" fill="none" stroke="#fb7185" strokeWidth="3" />
          <circle cx={30 + (t / 6) * 260} cy={110 - (remaining / 100) * 98} r="6" fill="#fbbf24" />
        </svg>
      </div>
      <input type="range" min={0} max={6} step={1} value={t} onChange={(e) => setT(Number(e.target.value))} className="w-full" />
      <p className="text-sm text-ink-soft mt-2">
        After <strong>{t}</strong> half-lives, <strong>{remaining}%</strong> of the nuclei remain. Each
        half-life always halves what is left — never reaching zero.
      </p>
    </Wrap>
  );
}

// ---- Simple circuit (series resistance) ----
function CircuitLab() {
  const [r, setR] = useState(4);
  const v = 12;
  const i = Math.round((v / r) * 100) / 100;
  return (
    <Wrap title="Ohm's law lab">
      <div className="diagram mb-3">
        <svg viewBox="0 0 300 120" role="img" aria-label="Simple circuit with a battery and resistor">
          <rect x="20" y="20" width="260" height="80" rx="8" fill="none" stroke="#38bdf8" strokeWidth="3" />
          <rect x="35" y="8" width="30" height="24" fill="#1d2142" stroke="#fbbf24" />
          <text x="50" y="25" fill="#fbbf24" fontSize="11" textAnchor="middle">
            {v}V
          </text>
          <rect x="200" y="88" width="50" height="22" fill="#1d2142" stroke="#a78bfa" />
          <text x="225" y="103" fill="#a78bfa" fontSize="11" textAnchor="middle">
            {r}Ω
          </text>
        </svg>
      </div>
      <input type="range" min={1} max={12} value={r} onChange={(e) => setR(Number(e.target.value))} className="w-full" />
      <p className="text-sm text-ink-soft mt-2">
        I = V / R = {v} / {r} = <strong>{i} A</strong>. Bigger resistance → smaller current.
      </p>
    </Wrap>
  );
}

export const EXPLORABLES_BASE: Record<string, () => React.ReactElement> = {
  "ph-slider": PhSlider,
  "photosynthesis-rate": PhotoRate,
  "reaction-rate": ReactionRate,
  "particle-states": ParticleStates,
  "half-life": HalfLife,
  "circuit-lab": CircuitLab,
};

const REGISTRY = EXPLORABLES_BASE;

export function Explorable({ name }: { name: string }) {
  const Comp = REGISTRY[name];
  if (!Comp) return null;
  return <Comp />;
}

export const EXPLORABLE_KEYS = Object.keys(REGISTRY);
