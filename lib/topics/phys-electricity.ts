import type { Topic } from "../types";

export const physElectricity: Topic = {
  id: "phys-electricity",
  title: "Electricity & Circuits",
  subject: "physics",
  icon: "🔋",
  blurb: "Charge, current, voltage, resistance and circuit rules — from static electricity to power bills.",
  intro: "Electricity underpins almost every technology you use, from the phone in your pocket to the power grid outside. In this topic you will build up from the microscopic picture of electrons transferring charge, through the quantitative laws that govern current, voltage and resistance, to the rules governing series and parallel circuits — and finish by calculating how much your appliances cost to run.",

  guide: [
    {
      heading: "Static Electricity",
      body: `All matter contains positive protons (in the nucleus) and negative electrons. Normally they balance, so the object is **neutral**.

When two insulators are rubbed together, **electrons** (not protons — protons are locked in nuclei) are transferred from one surface to the other. The object that **gains** electrons becomes **negatively charged**; the one that **loses** electrons becomes **positively charged**.

**Attraction and repulsion:**
- Like charges **repel** each other.
- Unlike charges **attract** each other.

**Electric fields** exist in the space around any charged object. A small positive test charge placed in the field experiences a force. Field lines point from positive to negative; closer lines indicate a stronger field.

**Induction (attracting neutral objects):** a charged object can attract a small *neutral* object (e.g. tiny pieces of paper). The charge on the rod pushes like charges in the paper to the far side and pulls unlike charges to the near side. Because the attracting (near) charges are slightly closer than the repelling (far) charges, the net force is attraction.

**USES of static electricity:**
- **Inkjet printer:** tiny ink droplets are given a charge, then deflected by charged plates so each droplet lands at the correct spot on the paper.
- **Photocopier:** a charged drum is exposed to an image; charged toner powder sticks only to the charged regions of the drum, then transfers to the paper and is fixed by heat.
- **Electrostatic spray painting / powder coating:** paint droplets are charged so they repel each other (giving an even spread) and are attracted to the oppositely charged metal object — even reaching the back ("wrap-around"), which reduces waste.
- **Smoke / dust precipitators** in chimneys: charged plates attract charged smoke particles, cleaning the exhaust gases.

**DANGERS of static electricity:**
- **Refuelling aircraft and tankers:** friction between the flowing fuel and the pipe builds up charge. A spark could ignite the fuel vapour and cause an explosion. The risk is reduced by **earthing (bonding)** — a conducting wire links the tanker to the aircraft/ground so charge flows safely away.
- **Sensitive electronic components** can be damaged by a sudden electrostatic discharge.
- **Lightning** — a large discharge between a charged cloud and the ground; buildings are protected by earthed metal lightning conductors.

**Reducing the risk:** connect a conductor to **earth** (earthing). Charge then flows to or from the ground, preventing a dangerous build-up. Anti-static sprays, conductive flooring and humid (damp) air also let charge leak away gradually.

Other everyday examples:
- A plastic rod rubbed with a cloth becoming charged by friction.
- Dust particles attracted to a charged television or computer screen.
- A small shock on touching a metal door handle after walking across a carpet — you become charged and then discharge through the handle.`,
      diagrams: [
        {
          caption: "Electric field between two oppositely charged parallel plates (field lines from + to −)",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Electric field lines between two parallel plates, positive on left and negative on right">
  <!-- Positive plate -->
  <rect x="20" y="30" width="18" height="140" rx="3" fill="#38bdf8" opacity="0.85"/>
  <text x="29" y="22" text-anchor="middle" fill="#38bdf8" font-size="14" font-family="sans-serif">+</text>
  <text x="29" y="185" text-anchor="middle" fill="#38bdf8" font-size="10" font-family="sans-serif">+plate</text>
  <!-- Negative plate -->
  <rect x="282" y="30" width="18" height="140" rx="3" fill="#fb7185" opacity="0.85"/>
  <text x="291" y="22" text-anchor="middle" fill="#fb7185" font-size="14" font-family="sans-serif">−</text>
  <text x="291" y="185" text-anchor="middle" fill="#fb7185" font-size="10" font-family="sans-serif">−plate</text>
  <!-- Field lines with arrowheads -->
  <defs>
    <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#fbbf24"/>
    </marker>
  </defs>
  <line x1="38" y1="55"  x2="282" y2="55"  stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arr)"/>
  <line x1="38" y1="80"  x2="282" y2="80"  stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arr)"/>
  <line x1="38" y1="100" x2="282" y2="100" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arr)"/>
  <line x1="38" y1="120" x2="282" y2="120" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arr)"/>
  <line x1="38" y1="145" x2="282" y2="145" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arr)"/>
  <text x="160" y="170" text-anchor="middle" fill="#b7bce0" font-size="11" font-family="sans-serif">Uniform field — equal spacing, parallel lines</text>
</svg>`
        }
      ],
      keyPoints: [
        "Only electrons are transferred — protons remain fixed in the nucleus.",
        "Charging by friction: object gaining electrons becomes negative; object losing electrons becomes positive.",
        "Like charges repel; unlike charges attract.",
        "Electric field lines point from positive to negative and are closer where the field is stronger.",
        "A charged object can attract small neutral objects by inducing charge separation (induction).",
        "Uses: inkjet printers, photocopiers, electrostatic spray painting, smoke precipitators.",
        "Dangers: sparks when refuelling (fuel vapour explosion), damage to electronics, lightning.",
        "Earthing (a conducting path to ground) lets charge flow away safely and reduces the risk."
      ],
      discovery: {
        problem: "A polythene rod is rubbed with a woollen cloth. The rod becomes negatively charged. Explain why, in terms of electron transfer, and state what charge the cloth acquires.",
        idea: "Electrons transfer FROM the cloth TO the rod. The rod gains electrons → negative. The cloth loses electrons → positive. Charge is conserved: the total charge (rod + cloth) remains zero."
      },
      whyItWorks: "Electrons are in the outer shells of atoms and are held less tightly than protons. During friction, surface electrons on the cloth have enough energy to transfer to the rod material, which has a greater electron affinity. The charges are equal and opposite because charge is conserved — no charge is created or destroyed."
    },

    {
      heading: "Current, Charge and EMF",
      body: `**Electric current** is the rate of flow of charge past a point in a circuit.

**Formula:** I = Q / t

where I is current in amperes (A), Q is charge in coulombs (C), and t is time in seconds (s).

One ampere = one coulomb per second (1 A = 1 C s⁻¹).

**Conventional current** flows from the positive terminal of a source, around the external circuit, to the negative terminal. This convention was fixed before electrons were discovered. **Electrons** actually flow in the **opposite** direction — from negative to positive.

**Electromotive force (e.m.f.)** is the energy transferred per unit charge by a source (battery, generator) to the circuit:

e.m.f. ε = W / Q (unit: volts, V; equivalent to J C⁻¹)

**Potential difference (p.d.)** is the energy transferred per unit charge between two points in the circuit by a component (e.g. a resistor):

V = W / Q

The p.d. across a component equals the work done per unit charge as charge passes through it. A voltmeter is connected in **parallel** with a component to measure p.d.; an ammeter is connected in **series** to measure current.`,
      keyPoints: [
        "I = Q / t; current (A) = charge (C) ÷ time (s).",
        "Conventional current: positive to negative (external); electron flow: negative to positive (external).",
        "e.m.f. and p.d. both use V = W/Q but e.m.f. is the source's energy input; p.d. is a component's energy output.",
        "Ammeter: in series (low resistance). Voltmeter: in parallel (high resistance).",
        "One coulomb = the charge transported by 1 A flowing for 1 s."
      ],
      discovery: {
        problem: "A current of 2 A flows through a lamp for 5 minutes. How much charge flows through the lamp? If the lamp converts 3600 J of energy in that time, what is the p.d. across it?",
        idea: "Q = I × t = 2 × 300 = 600 C. Then V = W / Q = 3600 / 600 = 6 V. Notice how Q links the two formulae."
      },
      whyItWorks: "Current is defined as the rate of charge flow because that is what produces observable effects (heating, magnetic fields). The ampere is an SI base unit; the coulomb is derived from it. e.m.f. measures how much chemical (or other) energy a source converts to electrical energy per coulomb — it is NOT the same as p.d., which measures electrical energy converted to other forms by a load.",
      strategies: ["Write out what you know (I, Q, t, W, V)", "Unit analysis to check formula direction", "Identify whether a quantity describes a source or a load"]
    },

    {
      heading: "Resistance and Ohm's Law",
      body: `**Resistance** (R) is the opposition to the flow of current. It is defined by:

R = V / I (unit: ohm, Ω)

**Ohm's Law** states that the current through a metallic conductor is directly proportional to the potential difference across it, provided temperature remains constant:

V ∝ I, or equivalently V = IR (constant R)

**I–V characteristic graphs** show how a component behaves:

- **Fixed resistor (ohmic conductor):** straight line through the origin — R is constant.
- **Filament lamp:** curve that flattens as voltage increases. As current increases, the filament heats up, increasing resistance, so I increases less than proportionally with V.
- **Diode:** allows current in one direction only. In the forward direction, once a threshold voltage (~0.6–0.7 V for silicon) is exceeded, current rises steeply. In reverse bias, current is effectively zero.

**Factors affecting resistance of a wire:**
- Longer wire → greater resistance (R ∝ length).
- Greater cross-sectional area (CSA) → lower resistance (R ∝ 1/CSA).
- Material (resistivity) affects R.
- Temperature: for a metal, higher temperature → higher resistance.`,
      diagrams: [
        {
          caption: "I–V characteristic curves: fixed resistor (straight), filament lamp (curve), diode (asymmetric)",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="I-V characteristic graphs showing straight line for fixed resistor, curved line for filament lamp, and diode characteristic">
  <!-- Axes -->
  <line x1="50" y1="170" x2="300" y2="170" stroke="#b7bce0" stroke-width="1.5"/>
  <line x1="50" y1="10"  x2="50"  y2="170" stroke="#b7bce0" stroke-width="1.5"/>
  <text x="305" y="174" fill="#b7bce0" font-size="11" font-family="sans-serif">V</text>
  <text x="38"  y="10"  fill="#b7bce0" font-size="11" font-family="sans-serif">I</text>
  <!-- Fixed resistor: straight line -->
  <line x1="50" y1="170" x2="280" y2="30" stroke="#38bdf8" stroke-width="2.2"/>
  <text x="256" y="25" fill="#38bdf8" font-size="10" font-family="sans-serif">Resistor</text>
  <!-- Filament lamp: curve (flattening) approximated by quadratic path -->
  <path d="M50,170 Q130,120 200,85 Q240,65 280,60" fill="none" stroke="#fbbf24" stroke-width="2.2"/>
  <text x="208" y="55" fill="#fbbf24" font-size="10" font-family="sans-serif">Lamp</text>
  <!-- Diode: near-zero until threshold then steep -->
  <polyline points="50,170 180,169 195,155 210,100 225,30" fill="none" stroke="#34d399" stroke-width="2.2"/>
  <!-- Reverse bias: flat -->
  <line x1="50" y1="170" x2="10" y2="170" stroke="#34d399" stroke-width="2.2"/>
  <text x="218" y="28" fill="#34d399" font-size="10" font-family="sans-serif">Diode</text>
  <!-- Origin label -->
  <text x="38" y="183" fill="#b7bce0" font-size="10" font-family="sans-serif">O</text>
</svg>`
        }
      ],
      keyPoints: [
        "R = V / I; unit is ohm (Ω).",
        "Ohm's Law applies only when temperature is constant; a straight I–V line through the origin indicates an ohmic conductor.",
        "Filament lamp: resistance increases with temperature — the I–V graph curves and flattens.",
        "Diode: conducts in one direction only; current is almost zero below the threshold voltage in forward bias.",
        "For a wire: R increases with length; R decreases with cross-sectional area."
      ],
      thinkDeeper: "The filament lamp's I–V curve is symmetric about the origin (same shape for negative V) because the tungsten filament heats identically regardless of current direction. Why does this symmetry NOT hold for a diode?",
      whyItWorks: "Resistance arises because electrons collide with the lattice of positive ions as they drift through a conductor. A longer wire means more collisions; a wider wire provides more parallel paths. At higher temperatures the ions vibrate more vigorously, causing more frequent collisions and increasing resistance — this is why the lamp's resistance rises as it glows.",
      strategies: ["Sketch the I–V graph shape first before calculating", "Check: does R stay constant? If yes, Ohm's law applies"]
    },

    {
      heading: "Sensors: LDRs and Thermistors",
      body: `Two special resistors change their resistance in response to their surroundings. They are used as **input sensors** in control circuits.

**Light-dependent resistor (LDR):**
- In **bright** light its resistance is **low** (a few hundred ohms).
- In the **dark** its resistance is **high** (millions of ohms).
- So: more light → lower resistance.

**Thermistor** (the common "negative temperature coefficient" type used at IGCSE):
- When **hot**, its resistance is **low**.
- When **cold**, its resistance is **high**.
- So: higher temperature → lower resistance.

**Using a sensor in a potential divider:** a sensor is connected in series with a fixed resistor across a supply. The supply voltage is shared between the two in proportion to their resistances. As the sensor's resistance changes, the share of voltage across each part changes, and this changing output voltage can switch a circuit on or off.

For two resistors R₁ and R₂ in series across a supply V_s, the p.d. across R₂ is:

V_out = V_s × R₂ / (R₁ + R₂)

**Worked example:** A thermistor (R = 2000 Ω when cold) is in series with a 1000 Ω fixed resistor across a 6 V supply, with V_out taken across the fixed resistor.
- V_out = 6 × 1000 / (2000 + 1000) = 6 × 1000/3000 = 2 V (cold)
- When warm, the thermistor falls to, say, 500 Ω: V_out = 6 × 1000 / (500 + 1000) = 4 V.
- So as it heats up, V_out rises — this rising voltage can trigger a cooling fan.

**Applications:** LDRs switch on street lights / security lights at dusk; thermistors act as temperature sensors in thermostats, fire alarms, ovens and car engines.`,
      diagrams: [
        {
          caption: "Resistance versus light (LDR) and resistance versus temperature (thermistor): both fall as the stimulus increases",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Two falling curves showing LDR resistance decreasing with light intensity and thermistor resistance decreasing with temperature">
  <line x1="50" y1="170" x2="300" y2="170" stroke="#b7bce0" stroke-width="1.5"/>
  <line x1="50" y1="20"  x2="50"  y2="170" stroke="#b7bce0" stroke-width="1.5"/>
  <text x="38"  y="18"  fill="#b7bce0" font-size="11" font-family="sans-serif">R</text>
  <text x="250" y="186" fill="#b7bce0" font-size="10" font-family="sans-serif">light / temperature</text>
  <path d="M60,35 Q110,150 290,165" fill="none" stroke="#fbbf24" stroke-width="2.4"/>
  <text x="120" y="60" fill="#fbbf24" font-size="10" font-family="sans-serif">LDR: R falls as light increases</text>
  <text x="120" y="78" fill="#34d399" font-size="10" font-family="sans-serif">Thermistor: R falls as temperature rises</text>
</svg>`
        }
      ],
      keyPoints: [
        "LDR: resistance is LOW in bright light and HIGH in the dark.",
        "Thermistor (ntc): resistance is LOW when hot and HIGH when cold.",
        "Both are non-ohmic — resistance depends on conditions, not just V and I.",
        "In a potential divider, V_out = V_s × R₂ / (R₁ + R₂); a changing sensor resistance changes V_out.",
        "Uses: LDRs in light-activated switches (street lights); thermistors in thermostats and fire alarms."
      ],
      discovery: {
        problem: "An LDR (R = 200 Ω in light, 20 000 Ω in dark) is in series with a 1000 Ω resistor across a 9 V supply. V_out is taken across the LDR. Does V_out rise or fall as it gets dark?",
        idea: "Light: V_out = 9 × 200/(200+1000) = 1.5 V. Dark: V_out = 9 × 20000/(20000+1000) ≈ 8.6 V. As it gets dark the LDR's resistance dominates, so V_out RISES — this can switch a lamp on."
      },
      whyItWorks: "In an LDR, light gives electrons enough energy to break free and carry current, so more light means more free charge carriers and lower resistance. In an ntc thermistor, heating frees more charge carriers in the semiconductor, again lowering resistance — the opposite trend to an ordinary metal wire, whose resistance rises with temperature.",
      strategies: ["State the resistance trend first (low/high), then feed it into the potential-divider formula", "Check the limiting cases (very bright/very dark, very hot/very cold)"]
    },

    {
      heading: "Series and Parallel Circuits",
      body: `Understanding how components combine is central to circuit analysis.

**Series circuits** (components connected end-to-end in one loop):
- The same current I flows through every component: I = I₁ = I₂ = I₃
- Total p.d. equals the sum of individual p.d.s: V_total = V₁ + V₂ + V₃
- Total resistance equals the sum: R_total = R₁ + R₂ + R₃

**Parallel circuits** (components connected across the same two nodes):
- The p.d. is the same across each branch: V = V₁ = V₂ = V₃
- Total current equals the sum of branch currents: I_total = I₁ + I₂ + I₃
- Combined resistance is less than the smallest branch resistance:
  1/R_total = 1/R₁ + 1/R₂ + ... (for two resistors: R_total = R₁R₂ / (R₁ + R₂))

**Worked example — Series:**
Two resistors, 6 Ω and 4 Ω, are connected in series to a 20 V supply. Find the current and the p.d. across each.
- R_total = 6 + 4 = 10 Ω
- I = V / R = 20 / 10 = 2 A
- V₁ = 2 × 6 = 12 V; V₂ = 2 × 4 = 8 V ✓ (12 + 8 = 20 V)

**Worked example — Parallel:**
Two resistors, 6 Ω and 3 Ω, are connected in parallel to a 12 V supply. Find the total current.
- I₁ = 12/6 = 2 A; I₂ = 12/3 = 4 A
- I_total = 2 + 4 = 6 A
- (Check: R_total = (6×3)/(6+3) = 18/9 = 2 Ω; I = 12/2 = 6 A ✓)`,
      diagrams: [
        {
          caption: "Series circuit (two resistors and a lamp in series with a battery)",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Series circuit diagram showing battery, two resistors and a lamp connected in series">
  <!-- Wires forming rectangle -->
  <rect x="30" y="40" width="260" height="120" rx="8" fill="none" stroke="#b7bce0" stroke-width="1.8"/>
  <!-- Battery symbol left side -->
  <line x1="30" y1="80"  x2="30"  y2="100" stroke="#38bdf8" stroke-width="3"/>
  <line x1="22" y1="80"  x2="38"  y2="80"  stroke="#38bdf8" stroke-width="2.5"/>
  <line x1="25" y1="90"  x2="35"  y2="90"  stroke="#38bdf8" stroke-width="1.5"/>
  <line x1="22" y1="100" x2="38"  y2="100" stroke="#38bdf8" stroke-width="2.5"/>
  <line x1="25" y1="110" x2="35"  y2="110" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="10" y="75" fill="#38bdf8" font-size="9" font-family="sans-serif">+</text>
  <text x="10" y="115" fill="#38bdf8" font-size="9" font-family="sans-serif">−</text>
  <text x="3" y="130" fill="#38bdf8" font-size="9" font-family="sans-serif">Battery</text>
  <!-- Resistor 1 top-left: zig-zag symbol -->
  <polyline points="80,40 90,30 100,50 110,30 120,50 130,30 140,40" fill="none" stroke="#fbbf24" stroke-width="2"/>
  <text x="100" y="24" fill="#fbbf24" font-size="9" font-family="sans-serif" text-anchor="middle">R1=6Ω</text>
  <!-- Resistor 2 top-right -->
  <polyline points="175,40 185,30 195,50 205,30 215,50 225,30 235,40" fill="none" stroke="#fbbf24" stroke-width="2"/>
  <text x="205" y="24" fill="#fbbf24" font-size="9" font-family="sans-serif" text-anchor="middle">R2=4Ω</text>
  <!-- Lamp bottom: circle with cross -->
  <circle cx="160" cy="160" r="14" fill="none" stroke="#34d399" stroke-width="2"/>
  <line x1="150" y1="150" x2="170" y2="170" stroke="#34d399" stroke-width="1.8"/>
  <line x1="170" y1="150" x2="150" y2="170" stroke="#34d399" stroke-width="1.8"/>
  <text x="160" y="188" fill="#34d399" font-size="9" font-family="sans-serif" text-anchor="middle">Lamp</text>
  <!-- Current arrow -->
  <text x="160" y="55" fill="#b7bce0" font-size="9" font-family="sans-serif" text-anchor="middle">Same I throughout</text>
</svg>`
        },
        {
          caption: "Parallel circuit (two resistors connected in parallel with a battery)",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Parallel circuit diagram showing battery and two resistors in parallel branches">
  <!-- Outer loop wires -->
  <line x1="30"  y1="40"  x2="290" y2="40"  stroke="#b7bce0" stroke-width="1.8"/>
  <line x1="30"  y1="160" x2="290" y2="160" stroke="#b7bce0" stroke-width="1.8"/>
  <line x1="30"  y1="40"  x2="30"  y2="160" stroke="#b7bce0" stroke-width="1.8"/>
  <line x1="290" y1="40"  x2="290" y2="160" stroke="#b7bce0" stroke-width="1.8"/>
  <!-- Battery on left -->
  <line x1="30" y1="85"  x2="30"  y2="115" stroke="#38bdf8" stroke-width="3"/>
  <line x1="22" y1="85"  x2="38"  y2="85"  stroke="#38bdf8" stroke-width="2.5"/>
  <line x1="25" y1="95"  x2="35"  y2="95"  stroke="#38bdf8" stroke-width="1.5"/>
  <line x1="22" y1="105" x2="38"  y2="105" stroke="#38bdf8" stroke-width="2.5"/>
  <line x1="25" y1="115" x2="35"  y2="115" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="8"  y="82"  fill="#38bdf8" font-size="9" font-family="sans-serif">+</text>
  <text x="8"  y="120" fill="#38bdf8" font-size="9" font-family="sans-serif">−</text>
  <text x="3"  y="135" fill="#38bdf8" font-size="9" font-family="sans-serif">12 V</text>
  <!-- Branch 1 vertical wire left -->
  <line x1="130" y1="40" x2="130" y2="160" stroke="#b7bce0" stroke-width="1.8"/>
  <!-- Branch 2 vertical wire right -->
  <line x1="210" y1="40" x2="210" y2="160" stroke="#b7bce0" stroke-width="1.8"/>
  <!-- Resistor on branch 1 -->
  <polyline points="130,75 120,83 140,91 120,99 140,107 120,115 130,123" fill="none" stroke="#fbbf24" stroke-width="2"/>
  <text x="105" y="100" fill="#fbbf24" font-size="9" font-family="sans-serif">6 Ω</text>
  <!-- Resistor on branch 2 -->
  <polyline points="210,75 200,83 220,91 200,99 220,107 200,115 210,123" fill="none" stroke="#a78bfa" stroke-width="2"/>
  <text x="223" y="100" fill="#a78bfa" font-size="9" font-family="sans-serif">3 Ω</text>
  <!-- Labels -->
  <text x="160" y="20" fill="#b7bce0" font-size="10" font-family="sans-serif" text-anchor="middle">Same V (12 V) across each branch</text>
  <text x="130" y="175" fill="#fbbf24" font-size="9" font-family="sans-serif" text-anchor="middle">I=2A</text>
  <text x="210" y="175" fill="#a78bfa" font-size="9" font-family="sans-serif" text-anchor="middle">I=4A</text>
</svg>`
        }
      ],
      keyPoints: [
        "Series: same current everywhere; p.d.s add; resistances add (R_T = R₁ + R₂).",
        "Parallel: same p.d. across branches; currents add; 1/R_T = 1/R₁ + 1/R₂.",
        "Parallel combined resistance is always LESS than the smallest individual resistance.",
        "Adding a component in parallel reduces total resistance and increases total current from the supply.",
        "Adding a component in series increases total resistance and decreases total current."
      ],
      thinkDeeper: "In your home, lights and sockets are wired in parallel — not series. What would happen if one lamp blew in a series circuit? Why is parallel wiring essential for domestic circuits?",
      discovery: {
        problem: "Three resistors of 2 Ω, 3 Ω and 6 Ω are connected in parallel. What single resistance is equivalent to all three?",
        idea: "1/R_T = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1. So R_T = 1 Ω. Notice this is less than the smallest (2 Ω) — adding parallel paths always lowers total resistance."
      },
      whyItWorks: "In series, the same charge must pass through each component in turn, so resistances simply add. In parallel, charge is split between branches; more branches means more paths, effectively widening the conductor — which is why resistance falls. The formula 1/R_T = Σ(1/Rᵢ) comes directly from the fact that total current = sum of branch currents, each governed by Ohm's law with the same V."
    },

    {
      heading: "Electrical Power and Energy",
      body: `**Electrical power** is the rate of energy transfer:

P = IV (unit: watt, W)

Since V = IR, we can substitute to get:
- P = I²R (useful when V is unknown)
- P = V²/R (useful when I is unknown)

**Electrical energy** transferred:

E = IVt = Pt (unit: joule, J)

**The kilowatt-hour (kWh)** is the commercial unit of electrical energy:
1 kWh = energy transferred by a 1 kW device running for 1 hour = 3 600 000 J = 3.6 MJ

**Cost of electricity:**
Cost = Power (kW) × Time (h) × Price per kWh

**Worked example:**
A 2 kW electric kettle runs for 5 minutes. Electricity costs $0.28 per kWh.
- Energy = 2 kW × (5/60) h = 1/6 kWh ≈ 0.167 kWh
- Cost = 0.167 × $0.28 ≈ $0.047 (about 5 cents)`,
      keyPoints: [
        "P = IV; also P = I²R and P = V²/R.",
        "Energy E = Pt = IVt (joules).",
        "1 kWh = 3.6 × 10⁶ J — the domestic unit of energy.",
        "Cost = power in kW × time in hours × cost per kWh.",
        "A 60 W lamp uses 60 J of electrical energy every second."
      ],
      strategies: ["Choose the power formula based on which two of I, V, R you know", "Convert minutes to hours before calculating kWh cost"],
      whyItWorks: "Power is derived from P = W/t (rate of doing work) combined with V = W/Q and I = Q/t: P = (W/Q) × (Q/t) = W/t = IV. The kilowatt-hour is simply a more convenient unit than the joule for everyday quantities — a typical home uses ~10–20 kWh per day."
    },

    {
      heading: "Mains Electricity & Safety",
      body: `**Direct current (d.c.) vs alternating current (a.c.):**
- **Direct current (d.c.)** flows in **one direction only**. The current is steady and the supply has a fixed positive and negative terminal. Cells and batteries provide d.c.
- **Alternating current (a.c.)** repeatedly **reverses direction**, many times per second. On a graph it is a wave that goes positive then negative. Generators and the mains supply provide a.c.
- The UK/Singapore mains is about **230 V a.c. at a frequency of 50 Hz** (it reverses 50 times each second). Mains supplies are a.c. because a.c. voltages are easy to step up and down with transformers for efficient transmission.

**Mains electricity** (230 V a.c. in the UK/Singapore) is lethal, so several safety features are used.

**Three-pin plug wiring (UK standard):**
- **Live (brown):** carries the alternating voltage (~230 V).
- **Neutral (blue):** completes the circuit; approximately 0 V.
- **Earth (green/yellow):** connected to the metal case of the appliance and to ground (0 V). Provides a low-resistance path if the live wire touches the case, causing a large current that blows the fuse.

**Fuse:** a thin wire in the live wire that melts (blows) if the current exceeds its rated value, breaking the circuit. Choose a fuse rating just above the normal operating current.

**Circuit breaker:** an electromagnetic or electronic switch that trips and opens the circuit when current exceeds a set value. Can be reset — unlike a fuse which must be replaced.

**Earth wire:** connects the metal case to ground. If the live wire touches the case, current flows through the earth wire → fuse blows → circuit disconnected.

**Double insulation:** an appliance with two layers of insulation around live parts does not need an earth wire (e.g. a hair dryer or electric drill with a plastic case — Class II). Indicated by the double-square symbol.

**Residual current device (RCD):** detects tiny imbalances between live and neutral currents (caused by current leaking through a person) and cuts off the supply in milliseconds — far faster than a fuse.

**Why the fuse goes in the LIVE wire:** so that when it blows, the appliance is cut off from the dangerous live (230 V) supply. If the fuse were in the neutral wire, the appliance would still be connected to the live wire and could give a shock even when "off". For the same reason the switch is also placed in the live wire.`,
      diagrams: [
        {
          caption: "Direct current (steady, one direction) compared with alternating current (a wave that reverses direction)",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Graph comparing direct current as a flat horizontal line and alternating current as a sine wave crossing the time axis">
  <line x1="40" y1="60" x2="300" y2="60" stroke="#b7bce0" stroke-width="1.2"/>
  <text x="6" y="40" fill="#b7bce0" font-size="10" font-family="sans-serif">I / V</text>
  <line x1="40" y1="40" x2="300" y2="40" stroke="#38bdf8" stroke-width="2.4"/>
  <text x="250" y="34" fill="#38bdf8" font-size="10" font-family="sans-serif">d.c. (steady)</text>
  <line x1="40" y1="150" x2="300" y2="150" stroke="#b7bce0" stroke-width="1.2"/>
  <text x="150" y="195" fill="#b7bce0" font-size="10" font-family="sans-serif">time</text>
  <path d="M40,150 Q70,110 100,150 Q130,190 160,150 Q190,110 220,150 Q250,190 280,150" fill="none" stroke="#fbbf24" stroke-width="2.4"/>
  <text x="225" y="120" fill="#fbbf24" font-size="10" font-family="sans-serif">a.c. (reverses)</text>
</svg>`
        },
        {
          caption: "Three-pin plug: live (brown) with fuse, neutral (blue), earth (green/yellow) to the larger top pin",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 220" role="img" aria-label="Wiring of a three-pin plug showing the earth pin at top connected by green and yellow wire, the live pin with a fuse connected by brown wire, and the neutral pin connected by blue wire">
  <rect x="60" y="20" width="200" height="180" rx="14" fill="none" stroke="#b7bce0" stroke-width="2"/>
  <!-- Earth pin (top) -->
  <rect x="150" y="2" width="20" height="30" rx="3" fill="#34d399"/>
  <text x="200" y="22" fill="#34d399" font-size="10" font-family="sans-serif">Earth (green/yellow)</text>
  <line x1="160" y1="32" x2="160" y2="90" stroke="#34d399" stroke-width="2.5"/>
  <!-- Live pin (bottom right) with fuse -->
  <rect x="210" y="190" width="20" height="28" rx="3" fill="#a16207"/>
  <text x="232" y="208" fill="#a16207" font-size="10" font-family="sans-serif">Live (brown)</text>
  <line x1="220" y1="190" x2="220" y2="150" stroke="#a16207" stroke-width="2.5"/>
  <rect x="208" y="120" width="24" height="30" rx="3" fill="none" stroke="#fbbf24" stroke-width="2"/>
  <text x="236" y="138" fill="#fbbf24" font-size="9" font-family="sans-serif">Fuse</text>
  <line x1="220" y1="120" x2="220" y2="95" stroke="#a16207" stroke-width="2.5"/>
  <line x1="220" y1="95" x2="160" y2="95" stroke="#a16207" stroke-width="2.5"/>
  <!-- Neutral pin (bottom left) -->
  <rect x="90" y="190" width="20" height="28" rx="3" fill="#38bdf8"/>
  <text x="40" y="208" fill="#38bdf8" font-size="10" font-family="sans-serif">Neutral (blue)</text>
  <line x1="100" y1="190" x2="100" y2="105" stroke="#38bdf8" stroke-width="2.5"/>
  <line x1="100" y1="105" x2="160" y2="105" stroke="#38bdf8" stroke-width="2.5"/>
  <!-- Cable grip -->
  <rect x="135" y="100" width="50" height="14" rx="4" fill="#475569"/>
  <text x="160" y="135" fill="#b7bce0" font-size="9" font-family="sans-serif" text-anchor="middle">cable grip</text>
</svg>`
        }
      ],
      keyPoints: [
        "d.c. flows in one direction (cells/batteries); a.c. repeatedly reverses direction (mains, generators).",
        "UK/Singapore mains: ~230 V a.c. at 50 Hz.",
        "Live wire (brown): 230 V alternating; neutral (blue): ~0 V; earth (green/yellow): safety path to ground.",
        "Fuse: melts in the LIVE wire if current is too high, breaking the circuit permanently until replaced.",
        "Circuit breaker: trips electromagnetically; can be reset; protects entire circuits.",
        "Earth wire protects metal-cased appliances; if live touches the case, current surges → fuse blows.",
        "Double-insulated appliances (Class II) need no earth wire as plastic cases cannot become live."
      ],
      thinkDeeper: "A fuse blows only after a fault has already passed a dangerous current for a short time. An RCD trips on a tiny current imbalance (≈30 mA). Why is an RCD much better at protecting a *person* from electrocution than a fuse is?"
    }
  ],

  learn: {
    keyFacts: [
      "Electrons transfer during charging by friction; the object gaining electrons becomes negative.",
      "I = Q / t: current (A) = charge (C) ÷ time (s).",
      "Conventional current flows positive → negative; electrons flow negative → positive.",
      "e.m.f. and p.d. both = W/Q (J C⁻¹ = V); e.m.f. is energy input from a source, p.d. is energy output at a load.",
      "R = V / I (ohms); Ohm's law holds at constant temperature for metallic conductors.",
      "Series circuit: R_T = R₁ + R₂; current same; p.d.s add.",
      "Parallel circuit: 1/R_T = 1/R₁ + 1/R₂; p.d. same; currents add.",
      "P = IV = I²R = V²/R; E = IVt; 1 kWh = 3.6 × 10⁶ J.",
      "Cost of electricity = power (kW) × time (h) × price per kWh.",
      "Earth wire + fuse protect metal-cased appliances; double insulation removes the need for an earth wire.",
      "LDR: resistance low in light, high in the dark. Thermistor (ntc): resistance low when hot, high when cold.",
      "Potential divider: V_out = V_s × R₂ / (R₁ + R₂).",
      "a.c. reverses direction repeatedly (mains, ~230 V, 50 Hz); d.c. flows one way (cells/batteries).",
      "The fuse and switch go in the LIVE wire so the appliance is isolated from 230 V when they open.",
      "Static uses: inkjet printers, photocopiers, spray painting, smoke precipitators; dangers reduced by earthing."
    ],
    flashcards: [
      { front: "Define electric current.", back: "Electric current is the rate of flow of charge: I = Q/t (unit: ampere, A)." },
      { front: "What is the difference between e.m.f. and potential difference?", back: "e.m.f. is the energy transferred TO the circuit per unit charge by a source. p.d. is the energy transferred FROM the circuit per unit charge by a component." },
      { front: "State Ohm's Law.", back: "The current through a metallic conductor is directly proportional to the p.d. across it, provided temperature is constant (V = IR)." },
      { front: "How does resistance of a wire change with length and cross-sectional area?", back: "Resistance is proportional to length (longer → more resistance) and inversely proportional to cross-sectional area (wider → less resistance)." },
      { front: "Give the three rules for a series circuit.", back: "1) Current is the same throughout. 2) p.d.s across components add to the supply p.d. 3) Resistances add: R_T = R₁ + R₂ + ..." },
      { front: "Give the three rules for a parallel circuit.", back: "1) p.d. is the same across each branch. 2) Currents in branches add to give total current. 3) 1/R_T = 1/R₁ + 1/R₂ + ..." },
      { front: "Write three forms of the power formula.", back: "P = IV; P = I²R; P = V²/R" },
      { front: "What is a kilowatt-hour?", back: "The energy transferred by a device of power 1 kW running for 1 hour: 1 kWh = 3.6 × 10⁶ J." },
      { front: "What is the purpose of the earth wire in a three-pin plug?", back: "It connects the metal case to ground (0 V). If the live wire touches the case, current flows through the earth wire, blowing the fuse and making the appliance safe." },
      { front: "Why does a filament lamp have a non-linear I–V graph?", back: "As current increases, the filament temperature rises, increasing resistance. So I increases less than proportionally with V — the graph curves and flattens." },
      { front: "What charge does an object acquire when it gains electrons?", back: "Negative charge (it has more electrons than protons)." },
      { front: "What does double insulation mean and what advantage does it have?", back: "Two layers of insulation around live parts. The appliance is safe without an earth wire — ideal for plastic-cased devices (Class II)." },
      { front: "How does the resistance of an LDR change with light?", back: "In bright light its resistance is low; in the dark its resistance is high. More light → lower resistance." },
      { front: "How does the resistance of an (ntc) thermistor change with temperature?", back: "When hot its resistance is low; when cold its resistance is high. Higher temperature → lower resistance." },
      { front: "Give the potential-divider output formula.", back: "V_out = V_s × R₂ / (R₁ + R₂), where V_out is the p.d. across R₂." },
      { front: "What is the difference between a.c. and d.c.?", back: "d.c. (direct current) flows in one direction only (cells). a.c. (alternating current) repeatedly reverses direction (mains: ~230 V, 50 Hz)." },
      { front: "Why is the fuse placed in the live wire (not the neutral)?", back: "So that when it blows, the appliance is disconnected from the 230 V live supply, making it safe to touch." },
      { front: "Give one use and one danger of static electricity.", back: "Use: inkjet printer / photocopier / electrostatic spray painting. Danger: a spark when refuelling can ignite fuel vapour — reduced by earthing." }
    ],
    keyTerms: [
      { term: "Electric current (I)", definition: "The rate of flow of charge past a point in a circuit; I = Q/t, unit: ampere (A)." },
      { term: "Coulomb (C)", definition: "The SI unit of electric charge; 1 C is the charge transported by a current of 1 A in 1 s." },
      { term: "Electromotive force (e.m.f.)", definition: "The energy transferred to the circuit per unit charge by a source (battery, generator); unit: volt (V)." },
      { term: "Potential difference (p.d.)", definition: "The energy transferred per unit charge between two points in a circuit; V = W/Q, unit: volt (V)." },
      { term: "Resistance (R)", definition: "The opposition to current flow; R = V/I, unit: ohm (Ω)." },
      { term: "Ohm's Law", definition: "The current in a metallic conductor is directly proportional to the p.d. across it at constant temperature." },
      { term: "Series circuit", definition: "A circuit in which components are connected end-to-end so the same current passes through each." },
      { term: "Parallel circuit", definition: "A circuit in which components are connected across the same two points so the same p.d. appears across each branch." },
      { term: "Kilowatt-hour (kWh)", definition: "Commercial unit of electrical energy; 1 kWh = 3.6 × 10⁶ J." },
      { term: "Fuse", definition: "A thin wire in the live wire that melts if the current exceeds its rated value, breaking the circuit." },
      { term: "Earth wire", definition: "A safety wire (green/yellow) connecting a metal appliance case to ground (0 V) to prevent electric shock." },
      { term: "Double insulation", definition: "Two layers of insulation around live parts; such appliances (Class II) do not need an earth wire." },
      { term: "Light-dependent resistor (LDR)", definition: "A resistor whose resistance is high in the dark and low in bright light; used in light-activated switches." },
      { term: "Thermistor", definition: "A resistor whose resistance changes with temperature; the common (ntc) type has high resistance when cold and low resistance when hot." },
      { term: "Potential divider", definition: "Two resistors in series that share the supply voltage in proportion to their resistances; V_out = V_s × R₂/(R₁+R₂)." },
      { term: "Alternating current (a.c.)", definition: "Current that repeatedly reverses direction; the mains supply is a.c. (~230 V, 50 Hz)." },
      { term: "Direct current (d.c.)", definition: "Current that flows in one direction only, as provided by a cell or battery." },
      { term: "Circuit breaker", definition: "A switch that automatically trips to break a circuit when the current is too high; unlike a fuse it can be reset." },
      { term: "Residual current device (RCD)", definition: "A safety device that cuts off the supply within milliseconds if the live and neutral currents become unbalanced (current leaking to earth)." }
    ]
  },

  quiz: {
    mcq: [
      {
        id: "phys-electricity-mcq-q01",
        question: "A current of 3 A flows through a wire for 20 s. What charge passes through the wire?",
        options: ["6.67 C", "17 C", "60 C", "23 C"],
        answerIndex: 2,
        explanation: "Q = I × t = 3 × 20 = 60 C. Current (A) multiplied by time (s) gives charge in coulombs.",
        difficulty: "warmup",
        guideRef: "Current, Charge and EMF"
      },
      {
        id: "phys-electricity-mcq-q02",
        question: "Which of the following correctly describes what happens when a polythene rod is rubbed with a woollen cloth?",
        options: [
          "Protons transfer from cloth to rod; rod becomes positive",
          "Electrons transfer from rod to cloth; rod becomes positive",
          "Electrons transfer from cloth to rod; rod becomes negative",
          "Protons transfer from rod to cloth; rod becomes negative"
        ],
        answerIndex: 2,
        explanation: "Only electrons can transfer. Polythene gains electrons from the wool, so the rod becomes negatively charged. The cloth loses electrons and becomes positive. Protons are fixed in nuclei.",
        difficulty: "warmup",
        guideRef: "Static Electricity"
      },
      {
        id: "phys-electricity-mcq-q03",
        question: "A resistor has a p.d. of 12 V across it and a current of 0.4 A through it. What is its resistance?",
        options: ["4.8 Ω", "30 Ω", "0.033 Ω", "12.4 Ω"],
        answerIndex: 1,
        explanation: "R = V / I = 12 / 0.4 = 30 Ω. Dividing voltage by current gives resistance in ohms.",
        difficulty: "warmup",
        guideRef: "Resistance and Ohm's Law"
      },
      {
        id: "phys-electricity-mcq-q04",
        question: "Two resistors of 8 Ω and 4 Ω are connected in series across a 24 V supply. What current flows?",
        options: ["1 A", "2 A", "3 A", "6 A"],
        answerIndex: 1,
        explanation: "R_T = 8 + 4 = 12 Ω. I = V / R = 24 / 12 = 2 A. In series, resistances add before applying Ohm's law.",
        difficulty: "core",
        hints: [
          "In a series circuit, what happens to the resistances?",
          "Find the total resistance first: R_T = R₁ + R₂.",
          "Then apply Ohm's law: I = V / R_T.",
          "I = 24 / 12 = ?"
        ],
        guideRef: "Series and Parallel Circuits"
      },
      {
        id: "phys-electricity-mcq-q05",
        question: "An electrical appliance is rated 500 W and operates for 2 hours. The electricity cost is $0.30 per kWh. What is the total cost?",
        options: ["$0.15", "$0.30", "$0.60", "$1.00"],
        answerIndex: 1,
        explanation: "Energy = 0.5 kW × 2 h = 1 kWh. Cost = 1 × $0.30 = $0.30.",
        difficulty: "core",
        hints: [
          "Convert 500 W to kilowatts.",
          "Energy (kWh) = power (kW) × time (h).",
          "Cost = energy (kWh) × price per kWh."
        ],
        guideRef: "Electrical Power and Energy"
      },
      {
        id: "phys-electricity-mcq-q06",
        question: "Which I–V graph shape correctly represents a diode?",
        options: [
          "A straight line through the origin with positive gradient",
          "A curve that flattens at high voltages",
          "A near-zero current for negative and small positive voltages, then a steep rise",
          "A symmetrical curve about the voltage axis"
        ],
        answerIndex: 2,
        explanation: "A diode conducts only in the forward direction. In reverse bias the current is effectively zero. In forward bias, current remains very small until the threshold voltage (~0.6–0.7 V) is crossed, then rises steeply. The graph is highly asymmetric — option C describes this correctly.",
        difficulty: "core",
        hints: [
          "What is special about a diode — in which direction does current flow?",
          "Think about what happens in reverse bias (negative voltage).",
          "What shape is associated with a component where R is constant?"
        ],
        guideRef: "Resistance and Ohm's Law"
      }
    ],
    qa: [
      {
        id: "phys-electricity-qa-q01",
        question: "A battery of e.m.f. 9 V is connected to a 6 Ω resistor and a 3 Ω resistor in series.\n(a) Calculate the total resistance of the circuit. [1]\n(b) Calculate the current flowing from the battery. [2]\n(c) Calculate the p.d. across the 6 Ω resistor. [2]",
        marks: 5,
        modelAnswer: "(a) R_T = 6 + 3 = 9 Ω\n(b) I = V / R = 9 / 9 = 1 A\n(c) V₆ = I × R = 1 × 6 = 6 V",
        markScheme: [
          "R_T = 9 Ω (1 mark)",
          "I = V / R_T with V = 9 V / correct substitution (1 mark)",
          "I = 1 A (1 mark)",
          "V = IR for the 6 Ω resistor / V = 1 × 6 (1 mark)",
          "V₆ = 6 V (1 mark)"
        ],
        commonError: "Students often calculate the total p.d. (9 V) divided by one resistor alone, ignoring that p.d. is shared in series.",
        difficulty: "core",
        hints: [
          "In series, how do you find total resistance?",
          "Use Ohm's law with the total voltage and total resistance to find current.",
          "Current is the same through both resistors — use V = IR for just the 6 Ω resistor."
        ],
        guideRef: "Series and Parallel Circuits",
        strategy: "Draw the circuit and label knowns before calculating"
      },
      {
        id: "phys-electricity-qa-q02",
        question: "A 1200 W kettle and a 60 W lamp are both connected to the 230 V mains supply.\n(a) Calculate the current drawn by the kettle. [2]\n(b) Calculate the resistance of the lamp filament when operating normally. [2]\n(c) A fuse must be chosen for the kettle from values 3 A, 5 A or 13 A. State which fuse is most appropriate and explain why. [2]",
        marks: 6,
        modelAnswer: "(a) I = P / V = 1200 / 230 ≈ 5.2 A\n(b) R = V² / P = 230² / 60 = 52900 / 60 ≈ 882 Ω\n(c) The 13 A fuse. The kettle draws ~5.2 A, so a 5 A fuse would blow during normal operation. The 13 A fuse is just above the operating current and will blow safely if a fault causes excess current.",
        markScheme: [
          "I = P / V (1 mark)",
          "I = 1200 / 230 = 5.2 A (accept 5.0–5.3 A) (1 mark)",
          "R = V² / P or R = V/I (1 mark)",
          "R ≈ 882 Ω (accept 860–900 Ω) (1 mark)",
          "13 A fuse selected (1 mark)",
          "Reason: operating current ~5.2 A exceeds 5 A / 13 A is just above normal current so blows only on fault (1 mark)"
        ],
        commonError: "Choosing the 5 A fuse without checking if it exceeds the operating current (5.2 A > 5 A means it would blow immediately).",
        difficulty: "core",
        hints: [
          "For the kettle current, rearrange P = IV to find I.",
          "For the lamp resistance, you know V and P — can you get a formula for R?",
          "A fuse must be rated ABOVE the normal operating current but as close to it as possible."
        ],
        guideRef: "Electrical Power and Energy",
        strategy: "Rearrange P = IV to find the missing quantity"
      },
      {
        id: "phys-electricity-qa-q03",
        question: "Explain, using ideas about electrons, why a filament lamp has a non-linear (curved) I–V characteristic. In your answer include a description of what the graph looks like and why the resistance changes. [5]",
        marks: 5,
        modelAnswer: "As the potential difference across the lamp increases, the current increases but not proportionally — the graph curves and flattens (becomes less steep). This is because as current increases, the filament temperature rises significantly. At higher temperatures, the positive ions in the tungsten lattice vibrate more vigorously. Electrons moving through the filament collide more frequently with these ions, so resistance increases. Because R = V/I increases as V increases, I does not increase as quickly as V — hence the non-linear graph.",
        markScheme: [
          "Graph curves / becomes less steep at higher voltage (not a straight line) (1 mark)",
          "As current increases, filament temperature increases / the lamp gets hotter (1 mark)",
          "Ions vibrate more vigorously at higher temperature (1 mark)",
          "Electrons collide more frequently with ions / more collisions (1 mark)",
          "Resistance increases (with temperature) / R is not constant (1 mark)"
        ],
        commonError: "Saying 'the lamp is non-ohmic because it uses alternating current' — the non-linear behaviour is due to temperature change, not AC/DC.",
        difficulty: "core",
        hints: [
          "What happens to the filament temperature as current increases?",
          "How does temperature affect the ions in the metal lattice?",
          "How does increased ion vibration affect electron flow?",
          "What does this imply for resistance — and therefore the shape of the graph?"
        ],
        guideRef: "Resistance and Ohm's Law",
        strategy: "Link microscopic (electron/ion) picture to macroscopic (R, I–V graph) observation"
      }
    ]
  },

  questionBank: {
    mcqPapers: [
      {
        id: "phys-electricity-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Ten questions on static electricity, current, charge, EMF and basic Ohm's Law.",
        questions: [
          {
            id: "phys-electricity-bm1-01",
            question: "Which particles are transferred when two insulators are rubbed together?",
            options: [
              "Protons only",
              "Electrons only",
              "Both protons and electrons",
              "Neutrons"
            ],
            answerIndex: 1,
            explanation: "Only electrons can be transferred; protons are held firmly in the nucleus. Neutrons have no charge and play no role in charging.",
            difficulty: "warmup",
            guideRef: "Static Electricity"
          },
          {
            id: "phys-electricity-bm1-02",
            question: "A glass rod rubbed with silk becomes positively charged. What happened during rubbing?",
            options: [
              "Electrons transferred from rod to silk",
              "Protons transferred from silk to rod",
              "Electrons transferred from silk to rod",
              "Neutrons transferred from rod to silk"
            ],
            answerIndex: 0,
            explanation: "The glass rod loses electrons to the silk. Silk gains electrons and becomes negative; the rod loses electrons and becomes positive.",
            difficulty: "warmup",
            guideRef: "Static Electricity"
          },
          {
            id: "phys-electricity-bm1-03",
            question: "An ammeter reads 0.5 A for 4 minutes. What charge flows?",
            options: ["2 C", "8 C", "120 C", "480 C"],
            answerIndex: 2,
            explanation: "Q = I x t = 0.5 x (4 x 60) = 0.5 x 240 = 120 C. Convert minutes to seconds first.",
            difficulty: "warmup",
            guideRef: "Current, Charge and EMF"
          },
          {
            id: "phys-electricity-bm1-04",
            question: "In which direction does conventional current flow in an external circuit?",
            options: [
              "From negative terminal to positive terminal",
              "From positive terminal to negative terminal",
              "In both directions simultaneously",
              "It does not flow in the external circuit"
            ],
            answerIndex: 1,
            explanation: "Conventional current is defined as flowing from the positive terminal, through the external circuit, to the negative terminal — opposite to the actual electron flow direction.",
            difficulty: "warmup",
            guideRef: "Current, Charge and EMF"
          },
          {
            id: "phys-electricity-bm1-05",
            question: "A source transfers 240 J of energy to 40 C of charge. What is the emf of the source?",
            options: ["0.17 V", "6 V", "200 V", "9600 V"],
            answerIndex: 1,
            explanation: "emf = W/Q = 240/40 = 6 V. EMF equals energy transferred per unit charge by the source.",
            difficulty: "core",
            hints: [
              "Write the formula for emf in terms of work and charge",
              "emf = W/Q — divide energy (J) by charge (C)",
              "Units: J/C = V"
            ],
            guideRef: "Current, Charge and EMF"
          },
          {
            id: "phys-electricity-bm1-06",
            question: "A lamp has a resistance of 40 Ohm when a current of 0.5 A flows through it. What is the potential difference across the lamp?",
            options: ["0.0125 V", "20 V", "40.5 V", "80 V"],
            answerIndex: 1,
            explanation: "V = IR = 0.5 x 40 = 20 V.",
            difficulty: "core",
            hints: [
              "Use V = IR",
              "Substitute I = 0.5 A and R = 40 Ohm"
            ],
            guideRef: "Resistance and Ohm's Law"
          },
          {
            id: "phys-electricity-bm1-07",
            question: "A potential difference of 9 V is applied across a 1500 Ohm resistor. What current flows?",
            options: ["0.006 A", "0.06 A", "6 mA", "Both A and C are correct"],
            answerIndex: 3,
            explanation: "I = V/R = 9/1500 = 0.006 A = 6 mA. Options A and C express the same value (0.006 A = 6 x 10^-3 A = 6 mA).",
            difficulty: "core",
            hints: [
              "I = V/R — divide voltage by resistance",
              "9 / 1500 = 0.006",
              "Convert to mA: multiply by 1000"
            ],
            guideRef: "Resistance and Ohm's Law"
          },
          {
            id: "phys-electricity-bm1-08",
            question: "Which of the following correctly states Ohm's Law?",
            options: [
              "Current is proportional to resistance at constant temperature",
              "Current is proportional to potential difference at constant temperature",
              "Resistance is proportional to potential difference at constant current",
              "Potential difference is inversely proportional to current at constant resistance"
            ],
            answerIndex: 1,
            explanation: "Ohm's Law states I is proportional to V at constant temperature, meaning a straight-line I-V graph through the origin. Resistance R = V/I is constant for an ohmic conductor.",
            difficulty: "core",
            hints: [
              "What does 'proportional' mean on a graph?",
              "What is held constant in Ohm's Law?"
            ],
            guideRef: "Resistance and Ohm's Law"
          },
          {
            id: "phys-electricity-bm1-09",
            question: "A device transfers 540 J of energy as 3 C of charge passes through it every 5 seconds. What is the current?",
            options: ["0.6 A", "1.8 A", "36 A", "108 A"],
            answerIndex: 0,
            explanation: "I = Q/t = 3/5 = 0.6 A. The energy figure is a distractor — it is not needed to find current.",
            difficulty: "challenge",
            hints: [
              "Which formula connects current, charge and time?",
              "I = Q/t — identify Q and t from the question",
              "The energy value is not needed for this calculation"
            ],
            strategy: "Identify which quantities are needed for the specific formula — ignore distractors",
            guideRef: "Current, Charge and EMF"
          },
          {
            id: "phys-electricity-bm1-10",
            question: "The charge on one electron is 1.6 x 10^-19 C. How many electrons pass a point in 2 s when the current is 3.2 A?",
            options: ["4 x 10^18", "2 x 10^19", "4 x 10^19", "6.4 x 10^19"],
            answerIndex: 2,
            explanation: "Q = It = 3.2 x 2 = 6.4 C. Number of electrons = Q/e = 6.4 / (1.6 x 10^-19) = 4 x 10^19.",
            difficulty: "challenge",
            hints: [
              "First find total charge: Q = It",
              "Then divide by charge per electron: n = Q/e",
              "6.4 / (1.6 x 10^-19) = 4 x 10^19"
            ],
            guideRef: "Current, Charge and EMF"
          }
        ]
      },
      {
        id: "phys-electricity-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Ten questions on resistance factors, I-V characteristics, and series/parallel circuits.",
        questions: [
          {
            id: "phys-electricity-bm2-01",
            question: "How does the resistance of a metallic wire change when its length is doubled (other factors constant)?",
            options: ["It halves", "It stays the same", "It doubles", "It quadruples"],
            answerIndex: 2,
            explanation: "R is proportional to length. Doubling length doubles resistance.",
            difficulty: "warmup",
            guideRef: "Resistance and Ohm's Law"
          },
          {
            id: "phys-electricity-bm2-02",
            question: "A component has a straight I-V graph passing through the origin. What type of component is it?",
            options: [
              "Filament lamp",
              "Diode",
              "Thermistor",
              "Fixed resistor (ohmic conductor)"
            ],
            answerIndex: 3,
            explanation: "A straight I-V graph through the origin indicates constant resistance — this is an ohmic conductor (e.g. a fixed resistor at constant temperature). Lamps, diodes and thermistors all have non-linear I-V graphs.",
            difficulty: "warmup",
            guideRef: "Resistance and Ohm's Law"
          },
          {
            id: "phys-electricity-bm2-03",
            question: "Three 12 Ohm resistors are connected in series. What is the total resistance?",
            options: ["4 Ohm", "12 Ohm", "36 Ohm", "144 Ohm"],
            answerIndex: 2,
            explanation: "In series: R_T = 12 + 12 + 12 = 36 Ohm.",
            difficulty: "warmup",
            guideRef: "Series and Parallel Circuits"
          },
          {
            id: "phys-electricity-bm2-04",
            question: "A nichrome wire has resistance R. A second wire of the same material has half the length and twice the cross-sectional area. What is its resistance?",
            options: ["R/4", "R/2", "R", "2R"],
            answerIndex: 0,
            explanation: "R is proportional to L/A. Halving L multiplies R by 1/2; doubling A multiplies R by 1/2. Combined factor = 1/2 x 1/2 = 1/4. New R = R/4.",
            difficulty: "core",
            hints: [
              "R is proportional to L/A — both length AND area change",
              "Half length gives factor 1/2; double area gives factor 1/2",
              "Multiply the two factors: 1/2 x 1/2 = 1/4"
            ],
            guideRef: "Resistance and Ohm's Law"
          },
          {
            id: "phys-electricity-bm2-05",
            question: "The I-V graph of a component curves steeply upward after a threshold of about 0.6 V, but shows nearly zero current for negative voltages. What is the component?",
            options: [
              "Fixed resistor",
              "Filament lamp",
              "Silicon diode",
              "LDR (light-dependent resistor)"
            ],
            answerIndex: 2,
            explanation: "The described graph is exactly the I-V characteristic of a silicon diode: no conduction in reverse bias, a 0.6-0.7 V forward threshold, then steep current rise. A fixed resistor gives a straight line; a lamp gives a curve that flattens; an LDR changes resistance with light but has an ohmic I-V graph at constant illumination.",
            difficulty: "core",
            hints: [
              "Which component only conducts in one direction?",
              "What voltage threshold is associated with silicon?"
            ],
            guideRef: "Resistance and Ohm's Law"
          },
          {
            id: "phys-electricity-bm2-06",
            question: "A 6 Ohm and a 12 Ohm resistor are connected in parallel. What is the combined resistance?",
            options: ["2 Ohm", "4 Ohm", "6 Ohm", "18 Ohm"],
            answerIndex: 1,
            explanation: "R_T = (6 x 12)/(6 + 12) = 72/18 = 4 Ohm. The combined parallel resistance is always less than the smallest individual resistance (4 < 6).",
            difficulty: "core",
            hints: [
              "Use R_T = R1 x R2 / (R1 + R2)",
              "Numerator: 6 x 12 = 72; denominator: 6 + 12 = 18",
              "72/18 = 4"
            ],
            guideRef: "Series and Parallel Circuits"
          },
          {
            id: "phys-electricity-bm2-07",
            question: "In a series circuit, which quantity is the SAME through all components?",
            options: ["Potential difference", "Power", "Current", "Resistance"],
            answerIndex: 2,
            explanation: "In a series circuit, the same current flows through every component because there is only one path for charge to flow. p.d. and power vary with resistance; resistance values are fixed properties, not a shared quantity.",
            difficulty: "core",
            guideRef: "Series and Parallel Circuits"
          },
          {
            id: "phys-electricity-bm2-08",
            question: "A 5 Ohm and a 20 Ohm resistor are connected in parallel across a 10 V supply. What is the current through the 20 Ohm resistor?",
            options: ["0.4 A", "0.5 A", "2 A", "2.5 A"],
            answerIndex: 1,
            explanation: "In parallel, the same 10 V appears across each branch. I = V/R = 10/20 = 0.5 A.",
            difficulty: "core",
            hints: [
              "In parallel, what is the pd across each branch?",
              "Apply Ohm's law to the 20 Ohm branch alone: I = 10/20"
            ],
            guideRef: "Series and Parallel Circuits"
          },
          {
            id: "phys-electricity-bm2-09",
            question: "Two resistors, 8 Ohm and 24 Ohm, are connected in parallel. This combination is connected in series with a 4 Ohm resistor and a 20 V supply. What is the current through the 4 Ohm resistor?",
            options: ["0.67 A", "2 A", "2.5 A", "5 A"],
            answerIndex: 1,
            explanation: "R_parallel = (8 x 24)/(8 + 24) = 192/32 = 6 Ohm. R_T = 6 + 4 = 10 Ohm. I = V/R_T = 20/10 = 2 A. The full 2 A passes through the 4 Ohm series resistor.",
            difficulty: "challenge",
            hints: [
              "Find the parallel combination resistance first",
              "Add the series resistor to get R_T",
              "I = V/R_T = 20/10 = 2 A"
            ],
            strategy: "Reduce parallel branches first, then treat the result as a series circuit",
            guideRef: "Series and Parallel Circuits"
          },
          {
            id: "phys-electricity-bm2-10",
            question: "Using the same circuit as the previous question (8 Ohm and 24 Ohm in parallel, in series with 4 Ohm and 20 V), what is the current through the 8 Ohm resistor?",
            options: ["0.5 A", "1.0 A", "1.5 A", "2.0 A"],
            answerIndex: 2,
            explanation: "The p.d. across the parallel pair = I_total x R_parallel = 2 x 6 = 12 V. Current through 8 Ohm: I = 12/8 = 1.5 A. (Check: I through 24 Ohm = 12/24 = 0.5 A; 1.5 + 0.5 = 2 A.)",
            difficulty: "challenge",
            hints: [
              "Find the p.d. across the parallel combination: V = I_total x R_parallel",
              "Then apply Ohm's law to the 8 Ohm branch alone"
            ],
            guideRef: "Series and Parallel Circuits"
          }
        ]
      },
      {
        id: "phys-electricity-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Ten questions on electrical power, energy and cost calculations.",
        questions: [
          {
            id: "phys-electricity-bm3-01",
            question: "A 60 W lamp is left on for 1 hour. How much energy does it transfer?",
            options: ["60 J", "216 J", "3600 J", "216 000 J"],
            answerIndex: 3,
            explanation: "E = Pt = 60 W x 3600 s = 216 000 J. One hour = 3600 s.",
            difficulty: "warmup",
            guideRef: "Electrical Power and Energy"
          },
          {
            id: "phys-electricity-bm3-02",
            question: "What is 1 kWh in joules?",
            options: ["1000 J", "3600 J", "3.6 x 10^5 J", "3.6 x 10^6 J"],
            answerIndex: 3,
            explanation: "1 kWh = 1000 W x 3600 s = 3 600 000 J = 3.6 x 10^6 J.",
            difficulty: "warmup",
            guideRef: "Electrical Power and Energy"
          },
          {
            id: "phys-electricity-bm3-03",
            question: "A 4 Ohm resistor carries a current of 3 A. What power is dissipated?",
            options: ["12 W", "36 W", "48 W", "144 W"],
            answerIndex: 1,
            explanation: "P = I^2 x R = 3^2 x 4 = 9 x 4 = 36 W.",
            difficulty: "warmup",
            guideRef: "Electrical Power and Energy"
          },
          {
            id: "phys-electricity-bm3-04",
            question: "An iron has a resistance of 52 Ohm and is connected to a 230 V mains supply. What is its power rating?",
            options: ["4.4 W", "442 W", "1018 W", "2756 W"],
            answerIndex: 2,
            explanation: "P = V^2/R = 230^2/52 = 52900/52 = 1017.3 W, approximately 1018 W.",
            difficulty: "core",
            hints: [
              "Which power formula uses only V and R?",
              "P = V^2/R — substitute V = 230 V and R = 52 Ohm",
              "230^2 = 52900; divide by 52"
            ],
            guideRef: "Electrical Power and Energy"
          },
          {
            id: "phys-electricity-bm3-05",
            question: "A 2.5 kW electric shower runs for 8 minutes. How much energy is transferred in kWh?",
            options: ["0.02 kWh", "0.33 kWh", "1.2 kWh", "20 kWh"],
            answerIndex: 1,
            explanation: "Time = 8/60 h. E = 2.5 x (8/60) = 20/60 = 1/3 kWh, approximately 0.33 kWh.",
            difficulty: "core",
            hints: [
              "Convert 8 minutes to hours: 8/60",
              "E = P(kW) x t(h)",
              "2.5 x (8/60) = 0.333 kWh"
            ],
            guideRef: "Electrical Power and Energy"
          },
          {
            id: "phys-electricity-bm3-06",
            question: "Electricity costs $0.32 per kWh. An 800 W microwave is used for 15 minutes every day for 30 days. What is the total cost?",
            options: ["$0.32", "$0.96", "$1.92", "$3.84"],
            answerIndex: 2,
            explanation: "Total time = (15/60) h x 30 = 7.5 h. E = 0.8 kW x 7.5 h = 6 kWh. Cost = 6 x $0.32 = $1.92.",
            difficulty: "core",
            hints: [
              "Find total time in hours: (15 min / 60) x 30 days",
              "E = 0.8 kW x total hours",
              "Cost = E x price per kWh"
            ],
            guideRef: "Electrical Power and Energy"
          },
          {
            id: "phys-electricity-bm3-07",
            question: "Which formula gives the correct power dissipated in a resistor when only the current and resistance are known?",
            options: ["P = V/I", "P = IV", "P = I^2 x R", "P = V^2 x R"],
            answerIndex: 2,
            explanation: "P = I^2 x R is used when current and resistance are known (no need to find voltage first). P = V/I is dimensionally incorrect. P = IV requires both I and V. P = V^2 x R is wrong — it should be P = V^2/R.",
            difficulty: "core",
            guideRef: "Electrical Power and Energy"
          },
          {
            id: "phys-electricity-bm3-08",
            question: "A resistor dissipates 48 W when a potential difference of 12 V is across it. What current flows through it?",
            options: ["0.25 A", "4 A", "576 A", "Cannot be determined without resistance"],
            answerIndex: 1,
            explanation: "P = IV, so I = P/V = 48/12 = 4 A. Alternatively R = V^2/P = 144/48 = 3 Ohm, then I = V/R = 12/3 = 4 A.",
            difficulty: "challenge",
            hints: [
              "P = IV; rearrange for I = P/V",
              "Substitute P = 48 W and V = 12 V"
            ],
            guideRef: "Electrical Power and Energy"
          },
          {
            id: "phys-electricity-bm3-09",
            question: "A student says: 'A 100 W lamp is always brighter than a 60 W lamp.' Under what condition is this statement FALSE?",
            options: [
              "When both lamps are connected in parallel to the mains",
              "When both lamps are connected in series to the mains",
              "When the 100 W lamp is at a lower temperature",
              "When the 60 W lamp uses AC and the 100 W lamp uses DC"
            ],
            answerIndex: 1,
            explanation: "When connected in series, the same current flows through both. Power = I^2 x R. The 60 W lamp has a higher resistance (at rated conditions, R = V^2/P = 230^2/60 = 882 Ohm) compared to the 100 W lamp (R = 230^2/100 = 529 Ohm). So in series, the 60 W lamp dissipates more power and is brighter.",
            difficulty: "challenge",
            hints: [
              "In series, current is the same for both",
              "Use P = I^2 x R — which lamp has higher R?",
              "R = V^2/P at rated conditions: which has larger R?"
            ],
            strategy: "Check which power formula (P = IV vs P = I^2 x R vs P = V^2/R) is most appropriate for the circuit type",
            guideRef: "Electrical Power and Energy"
          },
          {
            id: "phys-electricity-bm3-10",
            question: "A 10 Ohm and a 40 Ohm resistor are connected in parallel across a 20 V supply. What is the total power delivered by the supply?",
            options: ["10 W", "40 W", "50 W", "500 W"],
            answerIndex: 2,
            explanation: "P(10 Ohm) = V^2/R = 400/10 = 40 W. P(40 Ohm) = 400/40 = 10 W. Total = 50 W. Or: R_T = (10 x 40)/(10 + 40) = 400/50 = 8 Ohm; P = V^2/R_T = 400/8 = 50 W.",
            difficulty: "challenge",
            hints: [
              "In parallel, each branch has the same voltage (20 V)",
              "P = V^2/R for each branch",
              "Add the individual powers"
            ],
            guideRef: "Electrical Power and Energy"
          }
        ]
      },
      {
        id: "phys-electricity-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Ten questions on electrical safety, combined circuits and mixed challenge analysis.",
        questions: [
          {
            id: "phys-electricity-bm4-01",
            question: "What is the colour of the neutral wire in a modern UK three-pin plug?",
            options: ["Brown", "Blue", "Green and yellow", "Red"],
            answerIndex: 1,
            explanation: "Blue = neutral; brown = live; green/yellow = earth. The old colours were black = neutral, red = live.",
            difficulty: "warmup",
            guideRef: "Electrical Safety"
          },
          {
            id: "phys-electricity-bm4-02",
            question: "What happens to a fuse when the current through it exceeds its rated value?",
            options: [
              "It increases its resistance",
              "It vibrates and breaks the circuit",
              "Its wire melts, permanently breaking the circuit",
              "It increases the voltage to reduce current"
            ],
            answerIndex: 2,
            explanation: "A fuse contains a thin wire. If current exceeds the rated value, the wire heats up and melts (blows), permanently breaking the circuit. Unlike a circuit breaker, a blown fuse must be replaced.",
            difficulty: "warmup",
            guideRef: "Electrical Safety"
          },
          {
            id: "phys-electricity-bm4-03",
            question: "Which type of appliance does NOT need an earth wire?",
            options: [
              "An electric kettle with a metal body",
              "A microwave oven with a metal outer case",
              "A plastic-bodied hairdryer (Class II, double insulated)",
              "A metal-cased electric drill connected to mains"
            ],
            answerIndex: 2,
            explanation: "Class II (double-insulated) appliances have two layers of insulation and a non-conducting outer casing, so the casing cannot become live even if a fault occurs internally. No earth wire is needed.",
            difficulty: "warmup",
            guideRef: "Electrical Safety"
          },
          {
            id: "phys-electricity-bm4-04",
            question: "Why must the fuse be placed in the LIVE wire rather than the neutral wire?",
            options: [
              "The neutral wire cannot carry enough current for the fuse to work",
              "If the fuse were in the neutral wire, the appliance would still be connected to the live supply even after the fuse blows",
              "Fuses in neutral wires would cause sparking",
              "The live wire has a lower resistance, so the fuse must be there"
            ],
            answerIndex: 1,
            explanation: "If the fuse blows in the neutral wire, the circuit current stops — but the live wire remains connected to the appliance terminal. The appliance casing can still be at 230 V, posing a shock risk. The fuse must be in the live wire so that blowing disconnects the appliance from the dangerous live supply completely.",
            difficulty: "core",
            hints: [
              "What voltage is on the live wire?",
              "If the fuse blows in the neutral wire, is the appliance fully isolated?"
            ],
            guideRef: "Electrical Safety"
          },
          {
            id: "phys-electricity-bm4-05",
            question: "A residual current device (RCD) trips when it detects a small current imbalance between the live and neutral wires. Why does this protect against electric shock?",
            options: [
              "It increases circuit resistance to limit current through the user",
              "It disconnects the supply in milliseconds when current leaks through a person or fault",
              "It provides an alternative path to earth for fault current",
              "It reduces the mains voltage to a safe level"
            ],
            answerIndex: 1,
            explanation: "If current leaks through a person to earth, the return current in the neutral wire becomes smaller than the live current — an imbalance. The RCD detects this in milliseconds and cuts the supply, far faster than a fuse would melt. This speed is critical because a fuse protecting against overcurrent would not respond quickly enough to prevent a fatal shock.",
            difficulty: "core",
            hints: [
              "What causes an imbalance between live and neutral currents?",
              "How quickly does an RCD react compared to a fuse?"
            ],
            guideRef: "Electrical Safety"
          },
          {
            id: "phys-electricity-bm4-06",
            question: "In a parallel circuit, adding an extra branch with a resistor:",
            options: [
              "Increases total resistance and decreases total current",
              "Decreases total resistance and increases total current",
              "Keeps total resistance the same and increases total current",
              "Decreases total current because the new branch takes some of the current"
            ],
            answerIndex: 1,
            explanation: "Adding a parallel branch provides an additional current path, reducing total resistance (1/R_T increases). With lower R_T and the same supply voltage, I_total = V/R_T increases.",
            difficulty: "core",
            hints: [
              "How does 1/R_T change when you add another term?",
              "If R_T decreases and V is constant, what happens to I?"
            ],
            guideRef: "Series and Parallel Circuits"
          },
          {
            id: "phys-electricity-bm4-07",
            question: "A circuit has a 4 Ohm and a 12 Ohm resistor in series, connected to a 32 V supply. What is the p.d. across the 12 Ohm resistor?",
            options: ["8 V", "16 V", "24 V", "32 V"],
            answerIndex: 2,
            explanation: "R_T = 4 + 12 = 16 Ohm. I = 32/16 = 2 A. V(12 Ohm) = I x R = 2 x 12 = 24 V. (Check: V(4 Ohm) = 2 x 4 = 8 V; 8 + 24 = 32 V.)",
            difficulty: "core",
            hints: [
              "Find total resistance: 4 + 12 = 16 Ohm",
              "Find current: I = 32/16 = 2 A",
              "V across 12 Ohm = I x R = 2 x 12"
            ],
            guideRef: "Series and Parallel Circuits"
          },
          {
            id: "phys-electricity-bm4-08",
            question: "A toaster rated 1150 W is used for 3 minutes. Electricity costs $0.25 per kWh. What is the cost?",
            options: ["$0.0014", "$0.0144", "$0.0575", "$0.144"],
            answerIndex: 1,
            explanation: "Time = 3/60 = 0.05 h. E = 1.15 kW x 0.05 h = 0.0575 kWh. Cost = 0.0575 x $0.25 = $0.014375, approximately $0.0144.",
            difficulty: "core",
            hints: [
              "Convert 3 minutes to hours: 3/60 = 0.05 h",
              "E = 1.15 kW x 0.05 h = 0.0575 kWh",
              "Cost = 0.0575 x $0.25"
            ],
            guideRef: "Electrical Power and Energy"
          },
          {
            id: "phys-electricity-bm4-09",
            question: "A 15 Ohm and a 30 Ohm resistor are connected in parallel. This combination is in series with a 5 Ohm resistor and a 30 V battery. What is the power dissipated in the 5 Ohm resistor?",
            options: ["20 W", "45 W", "80 W", "180 W"],
            answerIndex: 0,
            explanation: "R_parallel = (15 x 30)/(15 + 30) = 450/45 = 10 Ohm. R_T = 10 + 5 = 15 Ohm. I = 30/15 = 2 A. P(5 Ohm) = I^2 x R = 2^2 x 5 = 4 x 5 = 20 W.",
            difficulty: "challenge",
            hints: [
              "Find R_parallel first",
              "Add series R to get R_T",
              "I = V/R_T; then P = I^2 x R for the 5 Ohm"
            ],
            strategy: "Always find the current through a series resistor using the full circuit analysis",
            guideRef: "Series and Parallel Circuits"
          },
          {
            id: "phys-electricity-bm4-10",
            question: "A student plots the I-V characteristic of a component. As voltage increases from 0 to 6 V, the gradient of the graph (delta-I / delta-V) decreases. What does this tell us about the resistance of the component?",
            options: [
              "The resistance is constant",
              "The resistance is decreasing",
              "The resistance is increasing",
              "The resistance first increases then decreases"
            ],
            answerIndex: 2,
            explanation: "Gradient of I-V graph = delta-I/delta-V = 1/R. If the gradient decreases, 1/R decreases, meaning R increases. This is the behaviour of a filament lamp: as temperature rises with increasing current, resistance increases.",
            difficulty: "challenge",
            hints: [
              "What does the gradient delta-I/delta-V represent?",
              "If gradient = 1/R, and gradient decreases, what happens to R?"
            ],
            guideRef: "Resistance and Ohm's Law"
          }
        ]
      }
    ],
    qaPapers: [
      {
        id: "phys-electricity-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Ten structured questions on static electricity, charge/current and basic Ohm's Law.",
        questions: [
          {
            id: "phys-electricity-bq1-01",
            question: "Name the type of charge on a polythene rod after it has been rubbed with a woollen cloth, and state which particles were transferred to make the rod charged.",
            marks: 2,
            modelAnswer: "The rod becomes negatively charged. Electrons were transferred from the woollen cloth to the polythene rod.",
            markScheme: [
              "Negatively charged (1 mark)",
              "Electrons transferred from cloth to rod (1 mark)"
            ],
            commonError: "Saying protons were transferred from rod to cloth — protons are fixed in the nucleus.",
            difficulty: "warmup",
            guideRef: "Static Electricity"
          },
          {
            id: "phys-electricity-bq1-02",
            question: "Two charged rods are brought close together and they attract. State what you can conclude about their charges.",
            marks: 2,
            modelAnswer: "The two rods have opposite charges (one is positive and the other is negative). Unlike charges attract.",
            markScheme: [
              "Opposite charges / unlike charges (1 mark)",
              "One positive, one negative / unlike charges attract (1 mark)"
            ],
            commonError: "Concluding that one rod must be neutral — a neutral object is attracted to any charged object due to induction, but two neutral objects do not attract each other.",
            difficulty: "warmup",
            guideRef: "Static Electricity"
          },
          {
            id: "phys-electricity-bq1-03",
            question: "A current of 0.4 A flows through a resistor. (a) Calculate the charge that flows through the resistor in 5 minutes. [2] (b) State the unit of charge. [1]",
            marks: 3,
            modelAnswer: "(a) Q = It = 0.4 x (5 x 60) = 0.4 x 300 = 120 C. (b) Coulomb (C).",
            markScheme: [
              "t = 300 s (or t in seconds seen in working) (1 mark)",
              "Q = 120 C (1 mark)",
              "Coulomb / C (1 mark)"
            ],
            commonError: "Using t = 5 (minutes) instead of t = 300 s, giving Q = 2 C.",
            difficulty: "warmup",
            guideRef: "Current, Charge and EMF"
          },
          {
            id: "phys-electricity-bq1-04",
            question: "A source of emf has a potential difference of 9 V across its terminals (internal resistance negligible). (a) Explain the meaning of emf = 9 V. [2] (b) If 270 J of energy is transferred to the circuit, how much charge flowed? [2]",
            marks: 4,
            modelAnswer: "(a) The source transfers 9 joules of electrical energy to the circuit for every coulomb of charge that flows (emf = W/Q = energy per unit charge). (b) Q = W/emf = 270/9 = 30 C.",
            markScheme: [
              "9 joules per coulomb / energy transferred per unit charge (1 mark)",
              "from source to circuit (1 mark)",
              "Q = W/emf used / 270/9 (1 mark)",
              "Q = 30 C (1 mark)"
            ],
            commonError: "Confusing emf and p.d. — emf is energy given to the circuit by the source; p.d. across a component is energy taken from the circuit.",
            difficulty: "core",
            hints: [
              "What does 'per unit charge' mean?",
              "emf = W/Q — rearrange for Q",
              "Q = 270 / 9 = 30 C"
            ],
            guideRef: "Current, Charge and EMF"
          },
          {
            id: "phys-electricity-bq1-05",
            question: "A student investigates a resistor. She measures I = 0.20 A when V = 4.0 V, and I = 0.40 A when V = 8.0 V. (a) Calculate the resistance at each pair of values. [2] (b) State whether the resistor is ohmic. Justify your answer. [2]",
            marks: 4,
            modelAnswer: "(a) R1 = V/I = 4.0/0.20 = 20 Ohm; R2 = V/I = 8.0/0.40 = 20 Ohm. (b) The resistor is ohmic because its resistance is the same (20 Ohm) at both measurements, confirming that I is proportional to V (constant R at constant temperature).",
            markScheme: [
              "R = V/I used (1 mark)",
              "Both values give R = 20 Ohm (1 mark)",
              "Ohmic stated (1 mark)",
              "Reason: constant resistance / I proportional to V (1 mark)"
            ],
            commonError: "Checking only one point and concluding it's ohmic — you must show R is constant over a range.",
            difficulty: "core",
            hints: [
              "Calculate R = V/I for each measurement",
              "Compare the two resistance values",
              "What does 'ohmic' mean in terms of R?"
            ],
            guideRef: "Resistance and Ohm's Law"
          },
          {
            id: "phys-electricity-bq1-06",
            question: "A lamp is rated 12 V, 3 W. (a) Calculate the normal operating current. [2] (b) Calculate the resistance of the filament at its normal operating temperature. [2]",
            marks: 4,
            modelAnswer: "(a) I = P/V = 3/12 = 0.25 A. (b) R = V/I = 12/0.25 = 48 Ohm (or R = V^2/P = 144/3 = 48 Ohm).",
            markScheme: [
              "I = P/V (1 mark)",
              "I = 0.25 A (1 mark)",
              "R = V/I or V^2/P (1 mark)",
              "R = 48 Ohm (1 mark)"
            ],
            commonError: "Using P = I^2 x R without first finding I — not wrong, but students often make algebra errors without finding I first.",
            difficulty: "core",
            hints: [
              "P = IV — rearrange for I = P/V",
              "Then use R = V/I",
              "Check: I x V = 0.25 x 12 = 3 W"
            ],
            guideRef: "Resistance and Ohm's Law"
          },
          {
            id: "phys-electricity-bq1-07",
            question: "A charged plastic ball hanging from a thread is brought near to a metal sphere mounted on an insulating stand. The ball swings towards the sphere and initially sticks. After a moment the ball swings away. Explain both observations using ideas about charge. [5]",
            marks: 5,
            modelAnswer: "When the negatively charged ball approaches the metal sphere, electrons in the sphere are repelled to the far side. This leaves the near side of the sphere with an induced positive charge. The ball (negative) is attracted to the positive near side of the sphere — the near force is stronger than the far repulsion — so the ball swings towards and sticks to the sphere. When they touch, electrons transfer from the ball to the sphere until both have the same sign of charge (both become negative). Like charges repel, so the ball then swings away.",
            markScheme: [
              "Electrons repelled to far side of metal sphere (induced charge separation) (1 mark)",
              "Near side of sphere becomes positively charged (1 mark)",
              "Attraction: unlike charges / positive sphere near-side attracts negative ball (1 mark)",
              "On contact: charge/electrons transfer from ball to sphere (1 mark)",
              "Both objects now have same sign of charge, causing repulsion / ball swings away (1 mark)"
            ],
            commonError: "Not explaining why the ball initially sticks — students often skip the induction step and cannot explain attraction if the sphere started neutral.",
            difficulty: "challenge",
            hints: [
              "What happens to electrons in a conductor when a negative charge is nearby?",
              "Which side of the sphere will be positive?",
              "What happens to charge when the two objects touch?",
              "What happens when both objects have the same sign of charge?"
            ],
            guideRef: "Static Electricity"
          },
          {
            id: "phys-electricity-bq1-08",
            question: "Conventional current flows from the positive terminal of a battery. Electrons flow in the opposite direction. (a) Why do electrons flow from negative to positive externally? [2] (b) Explain why conventional current was defined in the opposite direction to electron flow. [2]",
            marks: 4,
            modelAnswer: "(a) Electrons (negative charges) are repelled from the negative terminal (like charges repel) and attracted towards the positive terminal (unlike charges attract). (b) Conventional current was defined before the discovery of the electron. Scientists assumed positive charges flowed in the external circuit. Although this is incorrect, the convention is retained for consistency.",
            markScheme: [
              "Electrons repelled by negative terminal (1 mark)",
              "Electrons attracted to positive terminal / move towards positive terminal (1 mark)",
              "Conventional current defined before electrons discovered / historical convention (1 mark)",
              "Positive charges assumed to flow / convention retained for consistency (1 mark)"
            ],
            commonError: "Saying electrons are attracted to the negative terminal — electrons are negative, so they are repelled by negative and attracted by positive.",
            difficulty: "core",
            hints: [
              "Like charges repel; unlike attract",
              "What did scientists assume before electrons were discovered?"
            ],
            guideRef: "Current, Charge and EMF"
          },
          {
            id: "phys-electricity-bq1-09",
            question: "A torch uses two 1.5 V cells in series to power a lamp. The lamp has a resistance of 6 Ohm. (a) State the total emf of the two cells in series. [1] (b) Calculate the current through the lamp. [2] (c) Calculate the charge that flows through the lamp in 10 minutes. [2] (d) Calculate the energy transferred by the battery to the circuit in 10 minutes. [1]",
            marks: 6,
            modelAnswer: "(a) emf = 1.5 + 1.5 = 3.0 V. (b) I = V/R = 3.0/6 = 0.5 A. (c) Q = It = 0.5 x 600 = 300 C. (d) E = emf x Q = 3.0 x 300 = 900 J. (Or E = Pt = IVt = 0.5 x 3.0 x 600 = 900 J.)",
            markScheme: [
              "emf = 3.0 V (1 mark)",
              "I = V/R = 3/6 (1 mark)",
              "I = 0.5 A (1 mark)",
              "t = 600 s / 10 min converted to seconds (1 mark)",
              "Q = 0.5 x 600 = 300 C (1 mark)",
              "E = 900 J (1 mark)"
            ],
            commonError: "Using t = 10 for the charge calculation (minutes instead of seconds).",
            difficulty: "challenge",
            hints: [
              "Cells in series: add emfs",
              "I = V/R using total emf",
              "Q = It — convert minutes to seconds",
              "E = emf x Q or E = IVt"
            ],
            solutions: [
              {
                label: "Step by step",
                steps: [
                  "emf_total = 1.5 + 1.5 = 3.0 V",
                  "I = V/R = 3.0/6 = 0.5 A",
                  "t = 10 x 60 = 600 s",
                  "Q = It = 0.5 x 600 = 300 C",
                  "E = emf x Q = 3.0 x 300 = 900 J"
                ]
              }
            ],
            guideRef: "Current, Charge and EMF"
          },
          {
            id: "phys-electricity-bq1-10",
            question: "A student wants to find the resistance of an unknown component X using an ammeter and voltmeter. (a) Describe how to connect the meters correctly to measure the resistance of X. [2] (b) She obtains these readings: V = 3 V, I = 150 mA. Calculate the resistance. [2] (c) She repeats the measurement and finds that as she increases V, the ratio V/I also increases. What does this tell her about component X? Suggest what X might be. [2]",
            marks: 6,
            modelAnswer: "(a) Connect the ammeter in series with X (to measure current through X). Connect the voltmeter in parallel with X (to measure p.d. across X). (b) I = 150 mA = 0.15 A. R = V/I = 3/0.15 = 20 Ohm. (c) V/I = R is increasing, so the resistance of X is increasing as voltage (and therefore current and temperature) increases. X is likely a filament lamp.",
            markScheme: [
              "Ammeter in series with X (1 mark)",
              "Voltmeter in parallel with X (1 mark)",
              "I = 0.15 A (unit conversion) (1 mark)",
              "R = 20 Ohm (1 mark)",
              "Resistance is increasing (1 mark)",
              "Filament lamp / temperature-dependent resistor suggested (1 mark)"
            ],
            commonError: "Connecting the ammeter in parallel — this would give a near-zero reading and could damage the meter.",
            difficulty: "challenge",
            hints: [
              "Ammeter measures current — in which configuration does the same current pass through the meter AND the component?",
              "Voltmeter measures p.d. — how must it be connected to measure the same p.d. as across X?",
              "If R = V/I is increasing, what is happening to resistance?"
            ],
            guideRef: "Resistance and Ohm's Law"
          }
        ]
      },
      {
        id: "phys-electricity-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Ten structured questions on series and parallel circuit analysis.",
        questions: [
          {
            id: "phys-electricity-bq2-01",
            question: "State the rule for current in a series circuit and the rule for current in a parallel circuit.",
            marks: 2,
            modelAnswer: "Series circuit: the current is the same through every component. Parallel circuit: the total current equals the sum of the individual branch currents.",
            markScheme: [
              "Series: same current throughout / current does not split (1 mark)",
              "Parallel: currents in branches add to give total current (1 mark)"
            ],
            commonError: "Mixing up the rules — students often state the voltage rule for current and vice versa.",
            difficulty: "warmup",
            guideRef: "Series and Parallel Circuits"
          },
          {
            id: "phys-electricity-bq2-02",
            question: "Two identical 10 Ohm resistors are connected in series to a 20 V battery. Calculate (a) total resistance [1], (b) current [1], (c) pd across one resistor [1].",
            marks: 3,
            modelAnswer: "(a) R_T = 10 + 10 = 20 Ohm. (b) I = V/R = 20/20 = 1 A. (c) V = IR = 1 x 10 = 10 V.",
            markScheme: [
              "R_T = 20 Ohm (1 mark)",
              "I = 1 A (1 mark)",
              "V = 10 V (1 mark)"
            ],
            commonError: "Dividing 20 V by 10 Ohm directly without first finding total resistance.",
            difficulty: "warmup",
            guideRef: "Series and Parallel Circuits"
          },
          {
            id: "phys-electricity-bq2-03",
            question: "Two 6 Ohm resistors are connected in parallel across a 12 V supply. Calculate (a) combined resistance [1], (b) total current [1], (c) current through each resistor [1].",
            marks: 3,
            modelAnswer: "(a) R_T = (6 x 6)/(6 + 6) = 36/12 = 3 Ohm. (b) I_total = V/R_T = 12/3 = 4 A. (c) Each resistor has 12 V across it: I = 12/6 = 2 A. (Check: 2 + 2 = 4 A.)",
            markScheme: [
              "R_T = 3 Ohm (1 mark)",
              "I_total = 4 A (1 mark)",
              "I each = 2 A (1 mark)"
            ],
            commonError: "Not recognising that both resistors have the same pd in parallel.",
            difficulty: "warmup",
            guideRef: "Series and Parallel Circuits"
          },
          {
            id: "phys-electricity-bq2-04",
            question: "A circuit has a battery of emf 24 V (internal resistance negligible) connected to three resistors: R1 = 6 Ohm in series with a parallel combination of R2 = 8 Ohm and R3 = 24 Ohm. (a) Calculate the combined resistance of R2 and R3. [2] (b) Calculate the total circuit resistance. [1] (c) Calculate the total current. [1] (d) Calculate the pd across R1. [2]",
            marks: 6,
            modelAnswer: "(a) R_parallel = (8 x 24)/(8 + 24) = 192/32 = 6 Ohm. (b) R_T = 6 + 6 = 12 Ohm. (c) I = 24/12 = 2 A. (d) V_R1 = I x R1 = 2 x 6 = 12 V.",
            markScheme: [
              "R_parallel calculation shown (1 mark)",
              "R_parallel = 6 Ohm (1 mark)",
              "R_T = 12 Ohm (1 mark)",
              "I = 2 A (1 mark)",
              "V = IR for R1 (1 mark)",
              "V_R1 = 12 V (1 mark)"
            ],
            commonError: "Adding all three resistances in series instead of recognising the parallel combination.",
            difficulty: "core",
            hints: [
              "Identify the parallel pair first — reduce it to one equivalent resistance",
              "Add that to R1 in series",
              "Use I = V/R_T to find total current",
              "V1 = I x R1 — the same total current flows through R1"
            ],
            solutions: [
              {
                label: "Method",
                steps: [
                  "R_p = (8 x 24)/(8 + 24) = 192/32 = 6 Ohm",
                  "R_T = R1 + R_p = 6 + 6 = 12 Ohm",
                  "I = V/R_T = 24/12 = 2 A",
                  "V_R1 = I x R1 = 2 x 6 = 12 V"
                ]
              }
            ],
            guideRef: "Series and Parallel Circuits"
          },
          {
            id: "phys-electricity-bq2-05",
            question: "Continuing from the previous question (24 V, R1 = 6 Ohm in series with R2 = 8 Ohm parallel R3 = 24 Ohm): (a) Calculate the pd across the parallel combination. [1] (b) Calculate the current through R2. [2] (c) Verify by calculating the current through R3 and checking that branch currents add to the total current. [2]",
            marks: 5,
            modelAnswer: "(a) V_parallel = V_total - V_R1 = 24 - 12 = 12 V. (Or V_parallel = I x R_p = 2 x 6 = 12 V.) (b) I2 = V_parallel/R2 = 12/8 = 1.5 A. (c) I3 = V_parallel/R3 = 12/24 = 0.5 A. Check: I2 + I3 = 1.5 + 0.5 = 2.0 A = I_total.",
            markScheme: [
              "V_parallel = 12 V (1 mark)",
              "I2 = V/R2 = 12/8 (1 mark)",
              "I2 = 1.5 A (1 mark)",
              "I3 = 12/24 = 0.5 A (1 mark)",
              "1.5 + 0.5 = 2 A = total current — check confirmed (1 mark)"
            ],
            commonError: "Using the 24 V supply across R2 directly — the parallel combination only has 12 V across it, not the full 24 V.",
            difficulty: "core",
            hints: [
              "V_parallel = V_total - V_R1",
              "Then I2 = V_parallel/R2",
              "I3 = V_parallel/R3; add and compare to I_total"
            ],
            solutions: [
              {
                label: "Verification",
                steps: [
                  "V_parallel = 24 - 12 = 12 V (or 2 x 6 = 12 V)",
                  "I2 = 12/8 = 1.5 A",
                  "I3 = 12/24 = 0.5 A",
                  "I2 + I3 = 1.5 + 0.5 = 2.0 A = I_total confirmed"
                ]
              }
            ],
            guideRef: "Series and Parallel Circuits"
          },
          {
            id: "phys-electricity-bq2-06",
            question: "A student connects four 20 Ohm resistors. Calculate the total resistance when they are connected: (a) all in series [1], (b) all in parallel [2], (c) two in series, and this series pair in parallel with the other two in series [2].",
            marks: 5,
            modelAnswer: "(a) R_T = 4 x 20 = 80 Ohm. (b) All 4 in parallel: 1/R_T = 4/20 = 1/5, so R_T = 5 Ohm. (c) Each pair in series: R_pair = 20 + 20 = 40 Ohm. Two 40 Ohm in parallel: R_T = (40 x 40)/(40 + 40) = 1600/80 = 20 Ohm.",
            markScheme: [
              "R = 80 Ohm (1 mark)",
              "1/R_T = 4/20; R_T = 5 Ohm (2 marks)",
              "Each pair = 40 Ohm (1 mark)",
              "Two 40 Ohm in parallel = 20 Ohm (1 mark)"
            ],
            commonError: "For part (c), not recognising that two resistors in series first form a 40 Ohm equivalent before combining in parallel.",
            difficulty: "core",
            hints: [
              "(a) Add all four",
              "(b) 1/R_T = 1/R x 4; or R/n for n identical",
              "(c) Build up in stages: series pair first, then parallel of two pairs"
            ],
            guideRef: "Series and Parallel Circuits"
          },
          {
            id: "phys-electricity-bq2-07",
            question: "Explain the difference between adding a component in series versus in parallel to an existing circuit containing one resistor connected to a fixed voltage supply. In each case state what happens to: (i) total resistance, (ii) total current from the supply, (iii) the pd across the original resistor. [5]",
            marks: 5,
            modelAnswer: "Series: (i) total resistance increases; (ii) total current from supply decreases; (iii) pd across original resistor decreases (it must share the supply pd with the new component). Parallel: (i) total resistance decreases; (ii) total current from supply increases; (iii) pd across original resistor is unchanged (both are connected directly across the supply, so both have the full supply pd).",
            markScheme: [
              "Series: R increases (1 mark)",
              "Series: current decreases (1 mark)",
              "Series: pd across original resistor decreases / it now shares the pd (1 mark)",
              "Parallel: R decreases (1 mark)",
              "Parallel: pd across original resistor unchanged / full supply pd (1 mark)"
            ],
            commonError: "Thinking that adding a component in parallel 'takes some voltage away' from the original resistor — in parallel, both components always have the full supply pd.",
            difficulty: "core",
            hints: [
              "Series: one path; resistances add; V is shared",
              "Parallel: extra path; more current from supply; same V across each branch"
            ],
            guideRef: "Series and Parallel Circuits"
          },
          {
            id: "phys-electricity-bq2-08",
            question: "A voltmeter reads 0 V when connected across a lamp in a series circuit, even though the battery is good. What is the likely fault, and explain why the voltmeter reads 0 V? [4]",
            marks: 4,
            modelAnswer: "The likely fault is a short circuit across the lamp — a wire or low-resistance connection directly across it. If the lamp is bypassed by a short circuit, effectively R_lamp = 0, so V = IR = I x 0 = 0 V. (Note: if the lamp were open-circuit, no current flows and the full supply pd would appear across the lamp, NOT 0 V.)",
            markScheme: [
              "Fault: short circuit across the lamp / lamp shorted (1 mark)",
              "V = IR — if R across that section is 0, then V = 0 (1 mark)",
              "Explanation links short circuit to zero resistance to zero pd (1 mark)",
              "Correctly rejects open-circuit explanation (lamp open-circuit gives full supply pd, not 0 V) (1 mark)"
            ],
            commonError: "Saying the lamp has an open-circuit fault — if the lamp were open-circuit, no current flows anywhere in the series circuit, so the full supply pd appears across the lamp (not 0 V).",
            difficulty: "core",
            hints: [
              "V = IR — what resistance would give V = 0?",
              "A short circuit has almost zero resistance"
            ],
            guideRef: "Series and Parallel Circuits"
          },
          {
            id: "phys-electricity-bq2-09",
            question: "A battery of emf 12 V and negligible internal resistance is connected to a 3 Ohm resistor in series with two parallel branches — branch A contains a 4 Ohm resistor, branch B contains a 12 Ohm resistor. (a) Calculate the resistance of the parallel combination. [2] (b) Calculate the total circuit resistance. [1] (c) Calculate the current from the battery. [1] (d) Calculate the current in branch A (4 Ohm). [2] (e) Calculate the power dissipated in the 3 Ohm series resistor. [1]",
            marks: 7,
            modelAnswer: "(a) R_p = (4 x 12)/(4 + 12) = 48/16 = 3 Ohm. (b) R_T = 3 + 3 = 6 Ohm. (c) I = 12/6 = 2 A. (d) V_p = I x R_p = 2 x 3 = 6 V. I_A = V_p/4 = 6/4 = 1.5 A. (e) P = I^2 x R = 2^2 x 3 = 12 W.",
            markScheme: [
              "R_p = (4 x 12)/(4 + 12) (1 mark)",
              "R_p = 3 Ohm (1 mark)",
              "R_T = 6 Ohm (1 mark)",
              "I = 2 A (1 mark)",
              "V_p = 2 x 3 = 6 V (1 mark)",
              "I_A = 6/4 = 1.5 A (1 mark)",
              "P = 2^2 x 3 = 12 W (1 mark)"
            ],
            commonError: "Using the full 12 V across branch A instead of finding the pd across the parallel combination first.",
            difficulty: "challenge",
            hints: [
              "Find R_p first",
              "R_T = R_series + R_p; I = V/R_T",
              "V_p = I x R_p (not the full 12 V)",
              "I_A = V_p / R_A"
            ],
            solutions: [
              {
                label: "Full solution",
                steps: [
                  "R_p = (4 x 12)/(4 + 12) = 48/16 = 3 Ohm",
                  "R_T = 3 + 3 = 6 Ohm",
                  "I = 12/6 = 2 A",
                  "V_p = 2 x 3 = 6 V",
                  "I_A = 6/4 = 1.5 A",
                  "P(3 Ohm) = I^2 x R = 4 x 3 = 12 W"
                ]
              }
            ],
            guideRef: "Series and Parallel Circuits"
          },
          {
            id: "phys-electricity-bq2-10",
            question: "A battery of emf 18 V (negligible internal resistance) is connected to a circuit with R1 = 2 Ohm in series with the battery, and R2 = 6 Ohm in parallel with R3 = 3 Ohm. (a) Calculate the equivalent resistance of R2 parallel R3. [2] (b) Find R_total. [1] (c) Find the total current. [1] (d) Find the pd across R1. [1] (e) Find the pd across the parallel combination. [1] (f) Find the power dissipated in R2. [1]",
            marks: 7,
            modelAnswer: "(a) R_p = (6 x 3)/(6 + 3) = 18/9 = 2 Ohm. (b) R_T = 2 + 2 = 4 Ohm. (c) I = 18/4 = 4.5 A. (d) V_R1 = 4.5 x 2 = 9 V. (e) V_p = 18 - 9 = 9 V. (Or V_p = I x R_p = 4.5 x 2 = 9 V.) (f) P_R2 = V_p^2/R2 = 9^2/6 = 81/6 = 13.5 W.",
            markScheme: [
              "R_p = (6 x 3)/(6 + 3) (1 mark)",
              "R_p = 2 Ohm (1 mark)",
              "R_T = 4 Ohm (1 mark)",
              "I = 18/4 = 4.5 A (1 mark)",
              "V_R1 = 9 V (1 mark)",
              "V_p = 9 V (1 mark)",
              "P_R2 = 81/6 = 13.5 W (1 mark)"
            ],
            commonError: "Using the total current (4.5 A) in P = I^2 x R for R2 — the 4.5 A does not all go through R2; it splits at the parallel junction.",
            difficulty: "challenge",
            hints: [
              "Find R_p; then R_T; then I",
              "V_R1 = I x R1; V_p = V_total - V_R1",
              "P_R2 = V_p^2/R2 — use the pd across the parallel combination"
            ],
            solutions: [
              {
                label: "Step by step",
                steps: [
                  "R_p = (6 x 3)/(6 + 3) = 2 Ohm",
                  "R_T = 2 + 2 = 4 Ohm",
                  "I_total = 18/4 = 4.5 A",
                  "V_R1 = 4.5 x 2 = 9 V",
                  "V_p = 18 - 9 = 9 V",
                  "P_R2 = V_p^2/R2 = 81/6 = 13.5 W"
                ]
              }
            ],
            guideRef: "Series and Parallel Circuits"
          }
        ]
      },
      {
        id: "phys-electricity-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Ten structured questions on electrical power, energy and cost calculations.",
        questions: [
          {
            id: "phys-electricity-bq3-01",
            question: "State the three forms of the power formula for an electrical component.",
            marks: 2,
            modelAnswer: "P = IV; P = I^2 x R; P = V^2/R.",
            markScheme: [
              "P = IV (1 mark)",
              "P = I^2 x R AND P = V^2/R (1 mark)"
            ],
            commonError: "Writing P = V/I — this is not a power formula; that expression equals resistance.",
            difficulty: "warmup",
            guideRef: "Electrical Power and Energy"
          },
          {
            id: "phys-electricity-bq3-02",
            question: "A 40 W lamp is switched on for 6 hours. (a) Calculate the energy transferred in joules. [2] (b) Convert this energy to kWh. [1]",
            marks: 3,
            modelAnswer: "(a) E = Pt = 40 W x (6 x 3600) s = 40 x 21600 = 864 000 J. (b) 864 000 / 3 600 000 = 0.24 kWh. (Or: 0.04 kW x 6 h = 0.24 kWh directly.)",
            markScheme: [
              "E = Pt with t in seconds (1 mark)",
              "E = 864 000 J (1 mark)",
              "0.24 kWh (1 mark)"
            ],
            commonError: "Calculating in kWh directly as 40 x 6 = 240 kWh — forgetting to convert watts to kilowatts.",
            difficulty: "warmup",
            guideRef: "Electrical Power and Energy"
          },
          {
            id: "phys-electricity-bq3-03",
            question: "Calculate the power of a 230 V appliance that draws a current of 5 A, and state the unit.",
            marks: 3,
            modelAnswer: "P = IV = 5 x 230 = 1150 W. Unit: watt (W).",
            markScheme: [
              "P = IV used (1 mark)",
              "P = 1150 W (1 mark)",
              "Watt / W stated (1 mark)"
            ],
            commonError: "Giving the answer in kW without converting: 1.15 kW (accept if unit is also correct and consistent).",
            difficulty: "warmup",
            guideRef: "Electrical Power and Energy"
          },
          {
            id: "phys-electricity-bq3-04",
            question: "An electric heater has a resistance of 23 Ohm and is connected to the 230 V mains supply. (a) Calculate the current through the heater. [2] (b) Calculate the power of the heater. [1] (c) The heater is used for 2.5 hours. Calculate the energy transferred in kWh and joules. [2]",
            marks: 5,
            modelAnswer: "(a) I = V/R = 230/23 = 10 A. (b) P = IV = 10 x 230 = 2300 W = 2.3 kW. (Or P = V^2/R = 230^2/23 = 52900/23 = 2300 W.) (c) E = 2.3 kW x 2.5 h = 5.75 kWh. In joules: 5.75 x 3.6 x 10^6 = 2.07 x 10^7 J.",
            markScheme: [
              "I = V/R (1 mark)",
              "I = 10 A (1 mark)",
              "P = 2300 W (1 mark)",
              "E = 5.75 kWh (1 mark)",
              "E = 2.07 x 10^7 J (1 mark)"
            ],
            commonError: "Computing P = I^2 x R = 100 x 23 = 2300 W correctly but then stating kWh incorrectly by not dividing by 1000.",
            difficulty: "core",
            hints: [
              "I = V/R; then P = IV or P = V^2/R",
              "E in kWh = P(kW) x t(h)",
              "E in joules = kWh x 3.6 x 10^6"
            ],
            solutions: [
              {
                label: "Via current",
                steps: [
                  "I = 230/23 = 10 A",
                  "P = IV = 10 x 230 = 2300 W = 2.3 kW",
                  "E = 2.3 x 2.5 = 5.75 kWh",
                  "E = 5.75 x 3 600 000 = 2.07 x 10^7 J"
                ]
              }
            ],
            guideRef: "Electrical Power and Energy"
          },
          {
            id: "phys-electricity-bq3-05",
            question: "A student uses a 900 W microwave for 5 minutes and a 1500 W kettle for 3 minutes each day for 20 days. Electricity costs $0.28 per kWh. Calculate (a) the energy used by each appliance in kWh over 20 days [3] and (b) the total cost [2].",
            marks: 5,
            modelAnswer: "(a) Microwave: E = 0.9 kW x (5/60) h x 20 = 1.5 kWh. Kettle: E = 1.5 kW x (3/60) h x 20 = 1.5 kWh. (b) Total E = 1.5 + 1.5 = 3.0 kWh. Cost = 3.0 x $0.28 = $0.84.",
            markScheme: [
              "Microwave: time in hours = 5/60 h per day (1 mark)",
              "Microwave energy = 1.5 kWh (1 mark)",
              "Kettle energy = 1.5 kWh (1 mark)",
              "Total = 3.0 kWh (1 mark)",
              "Cost = $0.84 (1 mark)"
            ],
            commonError: "Using minutes instead of hours: getting 0.9 x 5 x 20 = 90 kWh (factor of 60 error).",
            difficulty: "core",
            hints: [
              "Convert minutes to hours for each appliance",
              "E = P(kW) x t(h) x days",
              "Total cost = total kWh x price/kWh"
            ],
            solutions: [
              {
                label: "Detailed",
                steps: [
                  "Microwave: t = 5/60 h; E = 0.9 x (5/60) x 20 = 1.5 kWh",
                  "Kettle: t = 3/60 h; E = 1.5 x (3/60) x 20 = 1.5 kWh",
                  "Total = 3.0 kWh",
                  "Cost = 3.0 x 0.28 = $0.84"
                ]
              }
            ],
            guideRef: "Electrical Power and Energy"
          },
          {
            id: "phys-electricity-bq3-06",
            question: "A 12 V battery is connected to a resistor of 8 Ohm. (a) Calculate the power dissipated. [2] (b) Calculate the energy transferred in 5 minutes. [2]",
            marks: 4,
            modelAnswer: "(a) P = V^2/R = 144/8 = 18 W. (Or: I = 12/8 = 1.5 A; P = IV = 1.5 x 12 = 18 W.) (b) E = Pt = 18 x (5 x 60) = 18 x 300 = 5400 J.",
            markScheme: [
              "P = V^2/R or P = I^2 x R (with I calculated first) (1 mark)",
              "P = 18 W (1 mark)",
              "E = Pt with t in seconds (1 mark)",
              "E = 5400 J (1 mark)"
            ],
            commonError: "Using t = 5 minutes as 5 s instead of 300 s.",
            difficulty: "core",
            hints: [
              "P = V^2/R (no need to find I first)",
              "E = Pt — convert 5 minutes to seconds"
            ],
            solutions: [
              {
                label: "Method",
                steps: [
                  "P = V^2/R = 144/8 = 18 W",
                  "t = 5 x 60 = 300 s",
                  "E = Pt = 18 x 300 = 5400 J"
                ]
              }
            ],
            guideRef: "Electrical Power and Energy"
          },
          {
            id: "phys-electricity-bq3-07",
            question: "A component dissipates 75 W when a current of 5 A passes through it. (a) Calculate the resistance of the component. [2] (b) Calculate the pd across it. [2]",
            marks: 4,
            modelAnswer: "(a) P = I^2 x R, so R = P/I^2 = 75/25 = 3 Ohm. (b) V = IR = 5 x 3 = 15 V. (Or V = P/I = 75/5 = 15 V.)",
            markScheme: [
              "R = P/I^2 (1 mark)",
              "R = 3 Ohm (1 mark)",
              "V = IR or P/I (1 mark)",
              "V = 15 V (1 mark)"
            ],
            commonError: "Using P = IV and V = IR together but substituting incorrectly — always rearrange first for the unknown.",
            difficulty: "core",
            hints: [
              "P = I^2 x R — rearrange for R = P/I^2",
              "Then V = IR or use P/I"
            ],
            solutions: [
              {
                label: "Method",
                steps: [
                  "R = P/I^2 = 75/5^2 = 75/25 = 3 Ohm",
                  "V = IR = 5 x 3 = 15 V"
                ]
              }
            ],
            guideRef: "Electrical Power and Energy"
          },
          {
            id: "phys-electricity-bq3-08",
            question: "A student investigates two resistors A (10 Ohm) and B (40 Ohm) connected in series to a 20 V supply. (a) Find the current. [2] (b) Find the power dissipated in each resistor. [2] (c) Show that the total power equals the supply power. [1]",
            marks: 5,
            modelAnswer: "(a) R_T = 50 Ohm; I = 20/50 = 0.4 A. (b) P_A = I^2 x R_A = (0.4)^2 x 10 = 0.16 x 10 = 1.6 W; P_B = I^2 x R_B = 0.16 x 40 = 6.4 W. (c) P_total = 1.6 + 6.4 = 8.0 W. Supply power: P = IV = 0.4 x 20 = 8.0 W.",
            markScheme: [
              "R_T = 50 Ohm (1 mark)",
              "I = 0.4 A (1 mark)",
              "P_A = 1.6 W (1 mark)",
              "P_B = 6.4 W (1 mark)",
              "Sum = 8.0 W = supply power confirmed (1 mark)"
            ],
            commonError: "Using V = 20 V for each resistor instead of finding the current in a series circuit first.",
            difficulty: "core",
            hints: [
              "Series: find I first using total R",
              "P = I^2 x R for each resistor",
              "Check: sum of resistor powers = supply power"
            ],
            solutions: [
              {
                label: "Series power check",
                steps: [
                  "R_T = 10 + 40 = 50 Ohm",
                  "I = 20/50 = 0.4 A",
                  "P_A = 0.4^2 x 10 = 1.6 W",
                  "P_B = 0.4^2 x 40 = 6.4 W",
                  "Total = 8.0 W = 0.4 x 20 = 8.0 W confirmed"
                ]
              }
            ],
            guideRef: "Electrical Power and Energy"
          },
          {
            id: "phys-electricity-bq3-09",
            question: "A household uses the following appliances daily: a 2.5 kW tumble dryer for 45 minutes, a 1.8 kW dishwasher for 1.5 hours, and six 8 W LED lamps for 4 hours. Electricity costs $0.30 per kWh. (a) Calculate the daily energy consumption in kWh. [3] (b) Calculate the monthly cost (30 days). [2] (c) Suggest one way the household could reduce its electricity bill. [1]",
            marks: 6,
            modelAnswer: "(a) Dryer: 2.5 x (45/60) = 2.5 x 0.75 = 1.875 kWh. Dishwasher: 1.8 x 1.5 = 2.7 kWh. LEDs: (6 x 0.008) x 4 = 0.048 x 4 = 0.192 kWh. Daily total = 1.875 + 2.7 + 0.192 = 4.767 kWh. (b) Monthly energy = 4.767 x 30 = 143.0 kWh. Cost = 143.0 x $0.30 = $42.90. (c) Any one of: use the dryer less / only run the dishwasher when full / switch to lower-wattage lights / reduce dryer time.",
            markScheme: [
              "Dryer: 1.875 kWh (1 mark)",
              "Dishwasher: 2.7 kWh (1 mark)",
              "LEDs: 6 x 0.008 x 4 = 0.192 kWh (1 mark)",
              "Monthly cost: 4.767 x 30 x 0.30 = $42.90 (2 marks — 1 for kWh x 30, 1 for x price)",
              "Sensible suggestion (1 mark)"
            ],
            commonError: "Not converting LED power from W to kW before using E = P(kW) x t(h).",
            difficulty: "challenge",
            hints: [
              "Convert all powers to kW",
              "E = P(kW) x t(h) for each appliance",
              "Total kWh per day x 30 days x price/kWh"
            ],
            solutions: [
              {
                label: "Detailed",
                steps: [
                  "Dryer: 2.5 x (45/60) = 1.875 kWh/day",
                  "Dishwasher: 1.8 x 1.5 = 2.7 kWh/day",
                  "LEDs: 6 x 0.008 kW x 4 = 0.192 kWh/day",
                  "Daily = 4.767 kWh",
                  "Monthly = 4.767 x 30 = 143.01 kWh",
                  "Cost = 143.01 x $0.30 = $42.90"
                ]
              }
            ],
            guideRef: "Electrical Power and Energy"
          },
          {
            id: "phys-electricity-bq3-10",
            question: "A 230 V, 60 W incandescent lamp and a 230 V, 12 W LED lamp give roughly the same light output. Both are used 5 hours per day for a year (365 days). Electricity costs $0.25 per kWh. (a) Calculate the annual energy used by each lamp in kWh. [2] (b) Calculate the annual saving in electricity cost by using the LED. [2] (c) The LED costs $12 to buy; the incandescent lamp costs $1. How long (to the nearest month) will it take for the LED to pay for itself in energy savings? [2]",
            marks: 6,
            modelAnswer: "(a) Incandescent: 0.06 kW x 5 h x 365 = 109.5 kWh. LED: 0.012 kW x 5 h x 365 = 21.9 kWh. (b) Energy saving = 109.5 - 21.9 = 87.6 kWh/year. Cost saving = 87.6 x $0.25 = $21.90/year. (c) Extra cost of LED = $12 - $1 = $11. Time to pay back = $11 / $21.90 per year = 0.502 years, approximately 6 months.",
            markScheme: [
              "Incandescent: 109.5 kWh (1 mark)",
              "LED: 21.9 kWh (1 mark)",
              "Annual saving = $21.90 (2 marks: 1 for energy difference, 1 for cost)",
              "Extra cost = $11; payback approximately 6 months (2 marks)"
            ],
            commonError: "Not subtracting the purchase price of the incandescent lamp from the LED cost when finding the net extra expenditure.",
            difficulty: "challenge",
            hints: [
              "E = P(kW) x hours/day x 365 for each lamp",
              "Annual saving = difference in cost",
              "Extra LED cost = price difference; payback = extra cost / annual saving"
            ],
            solutions: [
              {
                label: "Method",
                steps: [
                  "E_incand = 0.06 x 5 x 365 = 109.5 kWh; Cost = 109.5 x 0.25 = $27.375",
                  "E_LED = 0.012 x 5 x 365 = 21.9 kWh; Cost = 21.9 x 0.25 = $5.475",
                  "Annual saving = 27.375 - 5.475 = $21.90",
                  "Net extra cost of LED = 12 - 1 = $11",
                  "Payback = 11/21.90 = 0.502 years, approximately 6 months"
                ]
              }
            ],
            guideRef: "Electrical Power and Energy"
          }
        ]
      },
      {
        id: "phys-electricity-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Ten structured questions: safety, resistance factors, and synoptic challenges.",
        questions: [
          {
            id: "phys-electricity-bq4-01",
            question: "State the function of the earth wire in a three-pin plug.",
            marks: 2,
            modelAnswer: "The earth wire connects the metal casing of the appliance to earth (0 V). If a fault causes the live wire to touch the metal casing, a large current flows through the earth wire, blowing the fuse and disconnecting the circuit, preventing electric shock.",
            markScheme: [
              "Connects metal casing to earth/ground (1 mark)",
              "If live touches casing, current flows through earth wire, fuse blows / circuit disconnected (1 mark)"
            ],
            commonError: "Saying the earth wire carries the normal operating current — the earth wire carries no current during normal operation.",
            difficulty: "warmup",
            guideRef: "Electrical Safety"
          },
          {
            id: "phys-electricity-bq4-02",
            question: "A 230 V, 460 W hair dryer is double-insulated (Class II). (a) Calculate the normal operating current. [2] (b) Explain why no earth wire is needed. [1]",
            marks: 3,
            modelAnswer: "(a) I = P/V = 460/230 = 2 A. (b) The hair dryer has two layers of insulation between all live parts and any surface a user could touch. Even if one layer fails, the casing cannot become live, so there is no risk of electric shock through the casing and no earth wire is needed.",
            markScheme: [
              "I = P/V = 460/230 (1 mark)",
              "I = 2 A (1 mark)",
              "Two layers of insulation prevent casing from becoming live / no conducting surface to earth (1 mark)"
            ],
            commonError: "Saying the low current means no earth is needed — the reason is the double insulation, not the current level.",
            difficulty: "warmup",
            guideRef: "Electrical Safety"
          },
          {
            id: "phys-electricity-bq4-03",
            question: "Compare a fuse and a circuit breaker as safety devices, giving one advantage of each.",
            marks: 3,
            modelAnswer: "A fuse contains a thin wire that melts when the current exceeds its rated value, permanently breaking the circuit. A circuit breaker is an electromagnetic switch that trips when excess current flows and can be reset after a fault is cleared. Advantage of fuse: simple, cheap, no moving parts. Advantage of circuit breaker: can be reset (reusable); responds quickly to overcurrent.",
            markScheme: [
              "Fuse melts/blows permanently; circuit breaker trips and can be reset (1 mark)",
              "Advantage of fuse: cheap/simple/no moving parts (1 mark)",
              "Advantage of circuit breaker: reusable/can be reset / faster trip time (1 mark)"
            ],
            commonError: "Saying the circuit breaker has lower resistance than a fuse — both have very low resistance in normal operation.",
            difficulty: "warmup",
            guideRef: "Electrical Safety"
          },
          {
            id: "phys-electricity-bq4-04",
            question: "A student investigates resistance by connecting different lengths of constantan wire (diameter 0.4 mm) to a circuit and measuring resistance. Results: 0.20 m gives 1.4 Ohm; 0.40 m gives 2.8 Ohm; 0.60 m gives 4.2 Ohm. (a) What conclusion can be drawn about the relationship between length and resistance? [2] (b) Predict the resistance of 0.80 m of the same wire. [1] (c) A second wire of the same material and length (0.40 m) has diameter 0.8 mm. Predict its resistance. [2]",
            marks: 5,
            modelAnswer: "(a) Resistance is directly proportional to length (doubling length doubles resistance). The ratio R/L = 1.4/0.20 = 7 Ohm/m is constant. (b) R = 7 x 0.80 = 5.6 Ohm. (c) Doubling the diameter quadruples the cross-sectional area (A is proportional to d^2). R is proportional to 1/A, so resistance is divided by 4. R = 2.8/4 = 0.7 Ohm.",
            markScheme: [
              "R proportional to L / resistance proportional to length stated or shown (1 mark)",
              "Evidence: constant R/L ratio = 7 Ohm/m / doubling length doubles R (1 mark)",
              "R = 5.6 Ohm (1 mark)",
              "Diameter doubled gives CSA x 4, so R / 4 (1 mark)",
              "R = 0.7 Ohm (1 mark)"
            ],
            commonError: "Doubling diameter and saying area doubles — area goes as d^2, so doubling d quadruples area.",
            difficulty: "core",
            hints: [
              "Check whether R/L is constant",
              "Predict using the constant ratio",
              "CSA = pi x (d/2)^2 — squaring the diameter relationship"
            ],
            solutions: [
              {
                label: "Method",
                steps: [
                  "R/L = 1.4/0.20 = 7 Ohm/m (constant, so R is proportional to L)",
                  "R at 0.80 m = 7 x 0.80 = 5.6 Ohm",
                  "Diameter doubled gives area x 4, so R = 2.8/4 = 0.7 Ohm"
                ]
              }
            ],
            guideRef: "Resistance and Ohm's Law"
          },
          {
            id: "phys-electricity-bq4-05",
            question: "Explain why the resistance of a metal wire increases with temperature, using a model involving electrons and positive ions. [5]",
            marks: 5,
            modelAnswer: "In a metal, positive ions are arranged in a lattice and free electrons move through the gaps between them, carrying charge (current). When the temperature of the wire increases, the ions vibrate with greater amplitude (more vigorously). The increased vibration means electrons moving through the lattice collide more frequently with the ions. Each collision impedes the electron's progress, transferring kinetic energy to the ion as heat. More frequent collisions means greater opposition to electron flow — that is, greater resistance. Therefore, as temperature increases, resistance increases.",
            markScheme: [
              "Metal contains free electrons moving through a lattice of positive ions (1 mark)",
              "Higher temperature gives ions vibrate more vigorously / greater amplitude (1 mark)",
              "Electrons collide more frequently with vibrating ions (1 mark)",
              "Collisions oppose electron flow / impede current (1 mark)",
              "Therefore resistance increases (1 mark)"
            ],
            commonError: "Saying the wire gets thinner when hot, or that electrons move faster so resistance decreases — faster drift would decrease resistance; it is increased collision frequency that increases resistance.",
            difficulty: "core",
            hints: [
              "What are the charge carriers in a metal?",
              "What happens to ion vibration when temperature increases?",
              "How does increased vibration affect collisions?",
              "What is the link between collision frequency and resistance?"
            ],
            guideRef: "Resistance and Ohm's Law"
          },
          {
            id: "phys-electricity-bq4-06",
            question: "A photocopier uses static electricity to print. Explain how a charged drum attracts toner (ink) to form an image. [4] Then state one other application of static electricity. [1]",
            marks: 5,
            modelAnswer: "The drum is given a uniform positive charge. When light (from the document being copied) hits areas of the drum corresponding to white parts of the document, those areas lose their charge (become neutral). Dark areas (black text/images) are not illuminated and retain their positive charge. Negatively charged toner particles are attracted to the positively charged (dark image) areas of the drum and repelled from or not attracted to the neutral areas. The toner is then transferred to paper and fused to make it permanent. Other application: spray painting / crop spraying / air filters / inkjet printing.",
            markScheme: [
              "Drum given charge (positive) (1 mark)",
              "Light removes charge from bright/white areas (1 mark)",
              "Toner (opposite charge) attracted to charged (dark) areas (1 mark)",
              "Pattern of toner transferred to paper (1 mark)",
              "Any correct application: spray painting / crop spraying / inkjet printing / electrostatic precipitator (1 mark)"
            ],
            commonError: "Describing the process in reverse (saying dark areas lose charge) — light discharges the illuminated area, leaving the dark image area charged.",
            difficulty: "core",
            hints: [
              "What effect does light have on the charged drum?",
              "What charge is on the toner?",
              "Opposite charges attract — where does toner stick?"
            ],
            guideRef: "Static Electricity"
          },
          {
            id: "phys-electricity-bq4-07",
            question: "A 230 V electric lawnmower rated 1200 W is protected by an RCD. (a) Calculate the operating current. [2] (b) The RCD trips if the live-neutral current difference exceeds 30 mA. Explain why this trip level protects a person who accidentally cuts through the cable. [3]",
            marks: 5,
            modelAnswer: "(a) I = P/V = 1200/230 = 5.2 A (to 2 s.f.). (b) If the cable is cut, the live wire may contact a person or damp grass. Current flows through the person to earth instead of returning through the neutral wire. This creates an imbalance: live current is approximately 5.2 A but neutral current drops by the amount flowing through the person. If this difference exceeds 30 mA, the RCD detects the imbalance and disconnects the supply within about 30 ms — far too fast for the 5.2 A fuse to blow. A current of 30 mA through a person can be fatal, so the RCD must trip at this low threshold to prevent a lethal shock.",
            markScheme: [
              "I = P/V = 1200/230 (1 mark)",
              "I = 5.2 A (1 mark)",
              "Cutting cable creates path for current through person to earth (1 mark)",
              "Imbalance between live and neutral current / return current reduced (1 mark)",
              "RCD disconnects supply very quickly / faster than fuse / 30 mA can be fatal (1 mark)"
            ],
            commonError: "Saying the fuse provides the same protection as the RCD — a fuse rated above 5 A would not respond to a 30 mA leakage current.",
            difficulty: "core",
            hints: [
              "I = P/V for operating current",
              "Where does the current go if the cable is cut and someone touches the live wire?",
              "What is the difference between live and neutral current in that case?",
              "Why can't the fuse provide this protection?"
            ],
            solutions: [
              {
                label: "Part (a)",
                steps: [
                  "I = P/V = 1200/230 = 5.217 A, approximately 5.2 A"
                ]
              }
            ],
            guideRef: "Electrical Safety"
          },
          {
            id: "phys-electricity-bq4-08",
            question: "A student sets up a circuit with a 6 V battery, an ammeter (in series), and two identical lamps (each 3 Ohm) connected in parallel. (a) Calculate the reading on the ammeter. [3] (b) One lamp fails as an open circuit. State the new ammeter reading and explain what happens to the brightness of the remaining lamp. [2]",
            marks: 5,
            modelAnswer: "(a) R_parallel = (3 x 3)/(3 + 3) = 9/6 = 1.5 Ohm. I = V/R = 6/1.5 = 4 A. (b) New R = 3 Ohm (only one lamp). I = 6/3 = 2 A. The remaining lamp now has the full 6 V across it (same as before, since it is in parallel across the battery), so its brightness is unchanged.",
            markScheme: [
              "R_parallel = 1.5 Ohm (1 mark)",
              "I = V/R = 6/1.5 (1 mark)",
              "I = 4 A (1 mark)",
              "New I = 2 A (1 mark)",
              "Brightness unchanged — full 6 V still across working lamp (1 mark)"
            ],
            commonError: "Saying the remaining lamp gets brighter because it now 'gets all the current' — the current through the single lamp is V/R = 6/3 = 2 A both before and after (unchanged), because the pd is still 6 V.",
            difficulty: "core",
            hints: [
              "Find R_parallel for two identical 3 Ohm lamps",
              "I = V/R_parallel",
              "After failure: only one lamp remains across the same 6 V — what is its current?"
            ],
            guideRef: "Series and Parallel Circuits"
          },
          {
            id: "phys-electricity-bq4-09",
            question: "A battery of emf 20 V (negligible internal resistance) is connected to: resistor P (5 Ohm) in series with the battery, and resistors Q (10 Ohm) and R (10 Ohm) in parallel with each other, themselves in series with P. (a) Find the equivalent resistance of Q and R in parallel. [1] (b) Find total circuit resistance. [1] (c) Find the current through P. [1] (d) Find the pd across the parallel combination (Q and R). [1] (e) Calculate I through Q and the power in Q. [2] (f) Confirm energy conservation: show that the power supplied by the battery equals the total power dissipated. [2]",
            marks: 8,
            modelAnswer: "(a) R_QR = (10 x 10)/(10 + 10) = 100/20 = 5 Ohm. (b) R_T = R_P + R_QR = 5 + 5 = 10 Ohm. (c) I = V/R_T = 20/10 = 2 A (through P). (d) V_QR = I x R_QR = 2 x 5 = 10 V. (e) I_Q = V_QR/R_Q = 10/10 = 1 A; P_Q = I_Q^2 x R_Q = 1 x 10 = 10 W. (f) P_supply = emf x I_total = 20 x 2 = 40 W. P_P = I^2 x R_P = 4 x 5 = 20 W. P_Q = 10 W. P_R = I_R^2 x R_R = 1^2 x 10 = 10 W. Total dissipated = 20 + 10 + 10 = 40 W = P_supply.",
            markScheme: [
              "R_QR = 5 Ohm (1 mark)",
              "R_T = 10 Ohm (1 mark)",
              "I = 2 A (1 mark)",
              "V_QR = 10 V (1 mark)",
              "I_Q = 1 A / method shown (1 mark)",
              "P_Q = 10 W (1 mark)",
              "P_supply = 40 W; P_P + P_Q + P_R = 20 + 10 + 10 = 40 W (1 mark)",
              "Conservation confirmed (1 mark)"
            ],
            commonError: "Using I = 2 A for the current through Q — the 2 A splits at the parallel junction; each branch carries 1 A.",
            difficulty: "challenge",
            hints: [
              "Q and R are in parallel — find R_QR",
              "I through P = total current from battery",
              "V across Q = I_total x R_QR (not the full 20 V)",
              "I_Q = V_QR / R_Q"
            ],
            solutions: [
              {
                label: "Full solution",
                steps: [
                  "R_QR = (10 x 10)/20 = 5 Ohm",
                  "R_T = 5 + 5 = 10 Ohm",
                  "I = 20/10 = 2 A",
                  "V_QR = 2 x 5 = 10 V",
                  "I_Q = 10/10 = 1 A; P_Q = 1^2 x 10 = 10 W",
                  "P_P = 2^2 x 5 = 20 W; P_R = 1^2 x 10 = 10 W",
                  "P_supply = 20 x 2 = 40 W = 20 + 10 + 10 confirmed"
                ]
              }
            ],
            guideRef: "Series and Parallel Circuits"
          },
          {
            id: "phys-electricity-bq4-10",
            question: "A 230 V mains supply powers a circuit: a 10 Ohm resistor X in series with the supply, and a 40 Ohm resistor Y in parallel with a 60 Ohm resistor Z (this parallel pair in series with X). (a) Calculate R_YZ. [2] (b) Calculate total resistance. [1] (c) Calculate total current. [1] (d) Calculate the pd across X. [1] (e) Calculate the pd across Y. [1] (f) Calculate the total power dissipated. [1] (g) A student says 'the power in Y equals V_supply^2/R_Y'. Identify the error and give the correct approach. [1]",
            marks: 8,
            modelAnswer: "(a) R_YZ = (40 x 60)/(40 + 60) = 2400/100 = 24 Ohm. (b) R_T = 10 + 24 = 34 Ohm. (c) I = 230/34 = 6.76 A. (d) V_X = I x R_X = 6.76 x 10 = 67.6 V. (e) V_YZ = 230 - 67.6 = 162.4 V. (f) P_total = V x I = 230 x 6.76 = 1555 W. (g) Error: the student used the full supply voltage (230 V) rather than the pd across Y (162.4 V). Correct value: P_Y = V_YZ^2/R_Y = (162.4)^2/40 = 26374/40 = 659 W.",
            markScheme: [
              "R_YZ = (40 x 60)/100 (1 mark)",
              "R_YZ = 24 Ohm (1 mark)",
              "R_T = 34 Ohm (1 mark)",
              "I = 6.76 A (1 mark)",
              "V_X = 67.6 V (1 mark)",
              "V_YZ = 162.4 V (1 mark)",
              "P_total = 1555 W (1 mark)",
              "Error: used 230 V instead of 162 V / must use pd across Y, not supply pd (1 mark)"
            ],
            commonError: "Using the supply voltage when the parallel combination does not span the full supply — this is exactly the error in part (g).",
            difficulty: "challenge",
            hints: [
              "R_YZ = R_Y x R_Z / (R_Y + R_Z)",
              "V_YZ = V_supply - V_X (or I x R_YZ)",
              "Power formula for Y uses only the pd across Y"
            ],
            solutions: [
              {
                label: "Step by step",
                steps: [
                  "R_YZ = (40 x 60)/100 = 24 Ohm",
                  "R_T = 10 + 24 = 34 Ohm",
                  "I = 230/34 = 6.765 A",
                  "V_X = 6.765 x 10 = 67.65 V",
                  "V_YZ = 230 - 67.65 = 162.35 V",
                  "P_total = 230 x 6.765 = 1556 W",
                  "P_Y = 162.35^2/40 = 26337/40 = 658 W (not 230^2/40 = 1322.5 W as student's error gives)"
                ]
              }
            ],
            guideRef: "Electrical Power and Energy"
          }
        ]
      }
    ]
  }
};
