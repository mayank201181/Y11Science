"use client";

import { useState } from "react";
import { Wrap, Stepper, Readout, Caption } from "./kit";

// Elements 1–20 (the IGCSE core) — proton number → symbol + name.
const ELEMENTS: { sym: string; name: string }[] = [
  { sym: "H", name: "Hydrogen" },
  { sym: "He", name: "Helium" },
  { sym: "Li", name: "Lithium" },
  { sym: "Be", name: "Beryllium" },
  { sym: "B", name: "Boron" },
  { sym: "C", name: "Carbon" },
  { sym: "N", name: "Nitrogen" },
  { sym: "O", name: "Oxygen" },
  { sym: "F", name: "Fluorine" },
  { sym: "Ne", name: "Neon" },
  { sym: "Na", name: "Sodium" },
  { sym: "Mg", name: "Magnesium" },
  { sym: "Al", name: "Aluminium" },
  { sym: "Si", name: "Silicon" },
  { sym: "P", name: "Phosphorus" },
  { sym: "S", name: "Sulfur" },
  { sym: "Cl", name: "Chlorine" },
  { sym: "Ar", name: "Argon" },
  { sym: "K", name: "Potassium" },
  { sym: "Ca", name: "Calcium" },
];

// Fill electron shells 2, 8, 8, 2 for up to 20 electrons.
function shells(electrons: number): number[] {
  const cap = [2, 8, 8, 2];
  const out: number[] = [];
  let left = electrons;
  for (const c of cap) {
    const n = Math.min(c, left);
    out.push(n);
    left -= n;
    if (left <= 0) break;
  }
  return out;
}

export function AtomBuilder() {
  const [p, setP] = useState(6); // protons
  const [n, setN] = useState(6); // neutrons
  const [e, setE] = useState(6); // electrons

  const el = ELEMENTS[p - 1];
  const mass = p + n;
  const charge = p - e; // + if fewer electrons than protons
  const isAtom = charge === 0;
  const chargeStr = charge === 0 ? "0" : charge > 0 ? `${charge}+` : `${-charge}−`;
  const sh = shells(e);

  const cx = 150;
  const cy = 95;
  const shellRadii = [26, 46, 66, 84];

  return (
    <Wrap title="Atom & Element Builder">
      <div className="diagram mb-3">
        <svg viewBox="0 0 300 190" role="img" aria-label="Bohr model of the built atom">
          {/* shells */}
          {sh.map((count, i) => (
            <circle
              key={`r${i}`}
              cx={cx}
              cy={cy}
              r={shellRadii[i]}
              fill="none"
              stroke="#313870"
              strokeWidth="1.5"
            />
          ))}
          {/* nucleus */}
          <circle cx={cx} cy={cy} r="16" fill="#fb7185" />
          <text x={cx} y={cy - 1} fill="#fff" fontSize="9" textAnchor="middle">
            {p}p
          </text>
          <text x={cx} y={cy + 9} fill="#fff" fontSize="9" textAnchor="middle">
            {n}n
          </text>
          {/* electrons on shells */}
          {sh.map((count, si) =>
            Array.from({ length: count }).map((_, k) => {
              const ang = (k / count) * Math.PI * 2 - Math.PI / 2;
              const r = shellRadii[si];
              return (
                <circle
                  key={`e${si}-${k}`}
                  cx={cx + r * Math.cos(ang)}
                  cy={cy + r * Math.sin(ang)}
                  r="3.5"
                  fill="#38bdf8"
                />
              );
            }),
          )}
          {/* symbol + mass/proton numbers */}
          <text x="30" y="40" fill="#e8e9f5" fontSize="13" textAnchor="middle">
            {mass}
          </text>
          <text x="30" y="58" fill="#b7bce0" fontSize="11" textAnchor="middle">
            {p}
          </text>
          <text x="52" y="52" fill="#fde68a" fontSize="22" fontWeight="bold">
            {el?.sym ?? "?"}
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-3">
        <Readout label="Element" value={el?.sym ?? "?"} hint={el?.name} />
        <Readout label="Mass number" value={mass} hint={`${p}p + ${n}n`} />
        <Readout
          label={isAtom ? "Neutral atom" : "Ion"}
          value={chargeStr}
          hint={isAtom ? "p = e" : charge > 0 ? "lost electrons" : "gained electrons"}
        />
      </div>

      <Stepper label="Protons (atomic number)" value={p} set={setP} min={1} max={20} />
      <Stepper label="Neutrons" value={n} set={setN} min={0} max={24} />
      <Stepper label="Electrons" value={e} set={setE} min={0} max={20} />

      <Caption>
        The number of <strong>protons</strong> decides which element it is ({el?.name ?? "—"}).{" "}
        <strong>Protons + neutrons</strong> = mass number ({mass}). The electron arrangement is{" "}
        <strong>{sh.join(", ")}</strong>.{" "}
        {isAtom
          ? "Equal protons and electrons → a neutral atom."
          : charge > 0
            ? `It lost ${charge} electron(s), so it is a ${chargeStr} ion.`
            : `It gained ${-charge} electron(s), so it is a ${chargeStr} ion.`}
      </Caption>
    </Wrap>
  );
}
