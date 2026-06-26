import type { Topic } from "../types";

export const physMagnetism: Topic = {
  id: "phys-magnetism",
  title: "Magnetism & Electromagnetism",
  subject: "physics",
  icon: "🧲",
  blurb: "Magnets, fields, motors, generators and transformers — the backbone of all electrical technology.",
  intro:
    "Magnetism and electromagnetism underpin almost every electrical device you use, from the motor in your phone's vibration unit to the transformer on every power line. In this topic you will build from the simple idea of magnetic poles and field lines, through the force on current-carrying conductors (the motor effect), electromagnetic induction, and finally to transformers — discovering along the way why the National Grid transmits electricity at hundreds of thousands of volts.",

  // ─────────────────────────────────────────────────────────────
  // GUIDE
  // ─────────────────────────────────────────────────────────────
  guide: [
    // ── SECTION 1 ──────────────────────────────────────────────
    {
      heading: "Magnets, Poles and Magnetic Fields",
      body: `A **magnet** is an object that produces a magnetic field. Every magnet has two poles — a **north (N) pole** and a **south (S) pole**. The fundamental rule is: **like poles repel; unlike poles attract**. A single isolated magnetic pole does not exist — cutting a magnet in half always produces two complete magnets, each with an N and an S pole.

**Magnetic field lines** (also called lines of force) are used to represent a magnetic field:
- They run from N to S outside the magnet (and S to N inside).
- The closer the field lines, the stronger the field.
- Field lines never cross.
- The direction of the field at any point is the direction a free north pole would move.

Around a **bar magnet** the field lines form closed loops, curving from the N pole, spreading outward, converging at the S pole. Between **opposite poles** the lines are roughly parallel and evenly spaced in the centre (a nearly uniform field). Between **like poles** the lines bow outward and there is a neutral point between them where the fields cancel.

**Magnetic materials** (iron, steel, nickel, cobalt) are attracted to magnets. **Non-magnetic materials** (copper, aluminium, wood, plastic) are not attracted and are not repelled either — they are simply unaffected.`,
      diagrams: [
        {
          caption: "Magnetic field lines around a bar magnet (N on left, S on right)",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Magnetic field lines around a bar magnet">
  <!-- magnet body -->
  <rect x="90" y="85" width="60" height="30" rx="4" fill="#38bdf8" opacity="0.85"/>
  <rect x="170" y="85" width="60" height="30" rx="4" fill="#fb7185" opacity="0.85"/>
  <text x="120" y="105" text-anchor="middle" font-size="14" font-weight="bold" fill="#eef0ff">N</text>
  <text x="200" y="105" text-anchor="middle" font-size="14" font-weight="bold" fill="#eef0ff">S</text>
  <!-- field lines (approximate arcs) -->
  <!-- outer top arc -->
  <path d="M150,85 Q160,30 170,85" stroke="#34d399" stroke-width="1.5" fill="none"/>
  <!-- mid top arc -->
  <path d="M130,85 Q160,15 190,85" stroke="#34d399" stroke-width="1.5" fill="none"/>
  <!-- wide top arc -->
  <path d="M105,90 Q160,5 215,90" stroke="#34d399" stroke-width="1.5" fill="none"/>
  <!-- outer bottom arc -->
  <path d="M150,115 Q160,170 170,115" stroke="#34d399" stroke-width="1.5" fill="none"/>
  <!-- mid bottom arc -->
  <path d="M130,115 Q160,185 190,115" stroke="#34d399" stroke-width="1.5" fill="none"/>
  <!-- wide bottom arc -->
  <path d="M105,110 Q160,195 215,110" stroke="#34d399" stroke-width="1.5" fill="none"/>
  <!-- left side lines -->
  <line x1="90" y1="100" x2="40" y2="100" stroke="#34d399" stroke-width="1.5"/>
  <path d="M40,100 Q20,100 40,80" stroke="#34d399" stroke-width="1.5" fill="none"/>
  <path d="M40,100 Q20,100 40,120" stroke="#34d399" stroke-width="1.5" fill="none"/>
  <!-- right side lines -->
  <line x1="230" y1="100" x2="280" y2="100" stroke="#34d399" stroke-width="1.5"/>
  <path d="M280,100 Q300,100 280,80" stroke="#34d399" stroke-width="1.5" fill="none"/>
  <path d="M280,100 Q300,100 280,120" stroke="#34d399" stroke-width="1.5" fill="none"/>
  <!-- direction arrows on top mid arc -->
  <polygon points="163,45 158,55 168,55" fill="#34d399" transform="rotate(90,163,45)"/>
  <!-- labels -->
  <text x="160" y="195" text-anchor="middle" font-size="10" fill="#b7bce0">Field lines run N to S outside magnet</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Like poles repel; unlike poles attract.",
        "Magnetic field lines run from N to S outside the magnet and never cross.",
        "Denser field lines indicate a stronger field.",
        "Magnetic materials (iron, steel, nickel, cobalt) are attracted; non-magnetic materials are unaffected.",
        "Magnetic poles always occur in N–S pairs — isolating a single pole is impossible.",
      ],
      discovery: {
        problem:
          "If you cut a bar magnet in half, do you get one north pole and one south pole as separate pieces, or something else? Predict, then explain.",
        idea:
          "You get two complete magnets, each with its own N and S pole. This is because magnetism arises from aligned magnetic dipoles (tiny atomic magnets) throughout the material — breaking the magnet in half simply creates two shorter arrays of aligned dipoles, each forming a complete magnet.",
      },
      whyItWorks:
        "Magnetism at the atomic level is caused by the spin and orbital motion of electrons. In magnetic materials, quantum-mechanical exchange coupling aligns electron spins in small regions called **magnetic domains**. In an unmagnetised piece of iron the domains point in random directions and cancel. When an external field is applied, domains aligned with the field grow and others rotate — the material becomes magnetised. Cutting it in half does not isolate a domain; each half still contains fully aligned domains with both effective N and S ends.",
      thinkDeeper:
        "At the neutral point between two like poles the magnetic field is zero. Could you suspend a small unmagnetised iron ball there? Why or why not? (Consider what happens to induced magnetism in the ball as it drifts slightly off-centre.)",
    },

    // ── SECTION 2 ──────────────────────────────────────────────
    {
      heading: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
      body: `**Induced magnetism** occurs when a magnetic material (iron or steel) is placed in a magnetic field. The end of the material nearest the magnet's N pole becomes an S pole (attraction). When the external field is removed:
- **Soft iron** quickly loses its magnetism — it is a **temporary magnet**. This makes it ideal for electromagnet cores.
- **Steel** retains most of its magnetism — it is a **permanent magnet**.

**Permanent magnets** are made from magnetically hard materials (steel, alnico, neodymium alloys). They maintain their magnetism without an external field.

**Electromagnets** are produced by passing a direct current through a solenoid (a coil of wire). The magnetic field of a solenoid closely resembles that of a bar magnet: field lines emerge from one end (N) and enter the other (S), with a nearly uniform field inside the coil.

The strength of an electromagnet can be increased by:
- Increasing the **current** in the coil.
- Increasing the **number of turns** of wire.
- Adding a **soft-iron core** (it becomes magnetised by induction, greatly amplifying the field).

**Uses of electromagnets:**
- **Relay**: a small control current switches an electromagnet that opens/closes a separate, high-current circuit — providing electrical isolation.
- **Electric bell**: the electromagnet attracts the iron armature/striker; this breaks the circuit, the magnet switches off, the spring pulls the armature back, circuit is remade — cycle repeats producing ringing.
- **Scrapyard (lifting) crane**: electromagnet lifts iron/steel scrap; switching off the current releases the load instantly.`,
      diagrams: [
        {
          caption: "Magnetic field of a solenoid (current into page on top, out on bottom — N pole at right)",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Solenoid magnetic field diagram">
  <!-- solenoid body -->
  <rect x="80" y="80" width="160" height="40" rx="6" fill="none" stroke="#a78bfa" stroke-width="2"/>
  <!-- coil turns -->
  <line x1="100" y1="80" x2="100" y2="120" stroke="#fbbf24" stroke-width="2"/>
  <line x1="120" y1="80" x2="120" y2="120" stroke="#fbbf24" stroke-width="2"/>
  <line x1="140" y1="80" x2="140" y2="120" stroke="#fbbf24" stroke-width="2"/>
  <line x1="160" y1="80" x2="160" y2="120" stroke="#fbbf24" stroke-width="2"/>
  <line x1="180" y1="80" x2="180" y2="120" stroke="#fbbf24" stroke-width="2"/>
  <line x1="200" y1="80" x2="200" y2="120" stroke="#fbbf24" stroke-width="2"/>
  <!-- internal field lines -->
  <line x1="85" y1="95" x2="235" y2="95" stroke="#34d399" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="85" y1="105" x2="235" y2="105" stroke="#34d399" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- external field arcs right -->
  <path d="M240,100 Q280,60 270,100" stroke="#34d399" stroke-width="1.5" fill="none"/>
  <path d="M240,100 Q290,100 270,100" stroke="#34d399" stroke-width="1.5" fill="none"/>
  <path d="M240,100 Q280,140 270,100" stroke="#34d399" stroke-width="1.5" fill="none"/>
  <!-- external field arcs left -->
  <path d="M80,100 Q40,60 50,100" stroke="#34d399" stroke-width="1.5" fill="none"/>
  <path d="M80,100 Q30,100 50,100" stroke="#34d399" stroke-width="1.5" fill="none"/>
  <path d="M80,100 Q40,140 50,100" stroke="#34d399" stroke-width="1.5" fill="none"/>
  <!-- pole labels -->
  <text x="72" y="104" text-anchor="middle" font-size="12" font-weight="bold" fill="#fb7185">S</text>
  <text x="248" y="104" text-anchor="middle" font-size="12" font-weight="bold" fill="#38bdf8">N</text>
  <!-- current symbols -->
  <text x="110" y="75" text-anchor="middle" font-size="10" fill="#fbbf24">x</text>
  <text x="110" y="132" text-anchor="middle" font-size="10" fill="#fbbf24">.</text>
  <!-- label -->
  <text x="160" y="165" text-anchor="middle" font-size="10" fill="#b7bce0">Solenoid: uniform field inside, dipole field outside</text>
  <text x="160" y="178" text-anchor="middle" font-size="10" fill="#b7bce0">Current direction determines which end is N pole</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Soft iron loses magnetism easily (temporary); steel retains it (permanent).",
        "Electromagnet strength increases with greater current, more turns, or a soft-iron core.",
        "The solenoid's field pattern is identical to that of a bar magnet.",
        "Relay: uses a small current to switch a larger current via electromagnetic attraction.",
        "Scrapyard crane: switching off the current releases the load — not possible with a permanent magnet.",
      ],
      strategies: ["Compare and contrast permanent vs temporary magnets using concrete examples.", "Use the right-hand grip rule: thumb along N-pole direction, fingers curl in direction of conventional current."],
      whyItWorks:
        "A soft-iron core dramatically amplifies the solenoid's field because the iron's magnetic domains align with the applied field, adding their own strong field to that of the coil. The relative permeability of soft iron can be several thousand times that of air — the core 'concentrates' the field lines. When the current stops, the domains quickly return to random orientations (low coercivity), so the magnetism disappears.",
    },

    // ── SECTION 3 ──────────────────────────────────────────────
    {
      heading: "The Motor Effect and Fleming's Left-Hand Rule",
      body: `When a current-carrying conductor is placed in a magnetic field, it experiences a **force** (the motor effect). This is the principle behind every electric motor.

**Fleming's Left-Hand Rule (FLHR)** gives the direction of the force:
- **First finger** → direction of the magnetic **F**ield (N to S)
- **seCond finger** → direction of **C**onventional **C**urrent (+ to −)
- **thuMb** → direction of the **M**otion (force/thrust)

Hold the three fingers mutually perpendicular.

**Factors affecting the size of the force** (F = BIL):
- **Magnetic flux density B** (T): stronger field → larger force.
- **Current I** (A): larger current → larger force.
- **Length L** (m) of conductor in the field: longer conductor → larger force.
- The force is **zero** when the conductor is parallel to the field (sin θ = 0).
- The force is **maximum** when the conductor is perpendicular to the field.

**The d.c. motor** uses the motor effect to produce continuous rotation:
1. A rectangular **coil** carries current in a magnetic field; opposite sides experience forces in opposite directions → a **torque** (turning effect) rotates the coil.
2. As the coil passes through the vertical (plane of the coil perpendicular to field), the **split-ring commutator** reverses the current direction in the coil. This ensures the torque always acts in the same rotational direction.
3. **Brushes** (carbon) make sliding contact with the commutator rings, allowing current to flow to the rotating coil.

Without the commutator, the coil would oscillate back and forth instead of spinning continuously.`,
      diagrams: [
        {
          caption: "Fleming's Left-Hand Rule — force on a current-carrying conductor in a magnetic field",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Fleming left-hand rule diagram showing three mutually perpendicular fingers">
  <!-- hand outline (stylised) -->
  <!-- thumb pointing up (Motion) -->
  <line x1="160" y1="160" x2="160" y2="80" stroke="#fbbf24" stroke-width="6" stroke-linecap="round"/>
  <polygon points="160,72 154,88 166,88" fill="#fbbf24"/>
  <text x="168" y="76" font-size="11" fill="#fbbf24">Motion (thuMb)</text>
  <!-- first finger pointing right (Field) -->
  <line x1="160" y1="120" x2="240" y2="120" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
  <polygon points="248,120 232,114 232,126" fill="#38bdf8"/>
  <text x="252" y="124" font-size="11" fill="#38bdf8">Field (1st)</text>
  <!-- second finger pointing into page / lower-left (Current) -->
  <line x1="160" y1="120" x2="100" y2="160" stroke="#fb7185" stroke-width="6" stroke-linecap="round"/>
  <polygon points="93,165 107,154 114,168" fill="#fb7185"/>
  <text x="18" y="165" font-size="11" fill="#fb7185">Current (2nd)</text>
  <!-- origin dot -->
  <circle cx="160" cy="120" r="5" fill="#eef0ff"/>
  <!-- reminder label -->
  <text x="160" y="195" text-anchor="middle" font-size="10" fill="#b7bce0">Three fingers mutually perpendicular</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Motor effect: a current-carrying conductor in a magnetic field experiences a force F = BIL.",
        "Fleming's Left-Hand Rule: First finger = Field; seCond finger = Current; thuMb = Motion.",
        "Force is maximum when current is perpendicular to field; zero when parallel.",
        "The split-ring commutator reverses current every half-turn to maintain continuous rotation.",
        "Increasing B, I, or L (or the number of turns on the coil) increases the motor's torque.",
      ],
      discovery: {
        problem:
          "A rectangular coil in a motor has reached the position where the plane of the coil is perpendicular to the magnetic field (the coil sides are now parallel to the field). At this instant, what is the torque on the coil? What would happen if the commutator did not act at this point?",
        idea:
          "At this position the force on each coil side is along the plane of the coil (not tangential), so the turning effect is zero. If the commutator did not reverse the current at this moment, the coil would swing back the way it came (the torque would reverse direction). The commutator flips the current at exactly this dead-centre point so that the torque remains in the original rotational direction — the coil carries through on its momentum and continues to spin.",
      },
      strategies: [
        "Use FLHR mnemonic: FBI (Field-first finger, Current-seCond finger, Motion-thuMb) — same letter order as the rule.",
        "Always check if the conductor is parallel or perpendicular to the field before applying F = BIL.",
      ],
      whyItWorks:
        "The force arises because a moving charge in a magnetic field experiences a Lorentz force F = qv × B. For a current of I amperes, n charges per second each carrying charge q pass a point; the result for a straight conductor of length L perpendicular to field B is F = BIL. The direction follows from the cross product, which is what FLHR encodes.",
    },

    // ── SECTION 4 ──────────────────────────────────────────────
    {
      heading: "Electromagnetic Induction and the A.C. Generator",
      body: `**Electromagnetic induction** is the production of an e.m.f. (and hence a current, if the circuit is complete) when there is a change in the magnetic flux through a conductor.

An e.m.f. is induced when:
- A conductor **moves** relative to a magnetic field (or a magnetic field moves relative to a conductor).
- The **flux through a coil changes** (e.g. by changing the current in a nearby coil — mutual induction, used in transformers).

**Factors affecting the size of the induced e.m.f.:**
- **Speed** of relative movement: faster → larger e.m.f.
- **Magnetic flux density B**: stronger field → larger e.m.f.
- **Number of turns N** on the coil (for a coil rotating in a field or a solenoid).

**Direction of the induced e.m.f.:** Given by **Lenz's Law**: the induced current always flows in a direction that **opposes the change causing it** (a consequence of energy conservation). For a straight conductor moving in a field, **Fleming's Right-Hand Rule** gives the direction: First finger = Field; seCond finger = induced Current; thuMb = Motion of conductor.

**The a.c. generator (alternator):**
1. A rectangular coil rotates in a uniform magnetic field driven by a mechanical input.
2. As the coil rotates, the rate of change of flux through it varies sinusoidally → the induced e.m.f. is sinusoidal (alternating).
3. **Slip rings** (two separate rings, one connected to each end of the coil) and carbon brushes allow the coil to rotate freely while maintaining electrical contact — the output current alternates direction every half-turn.
4. The e.m.f. is **maximum** when the coil sides cut field lines at right angles (coil plane parallel to field).
5. The e.m.f. is **zero** when the coil sides move parallel to the field (coil plane perpendicular to field).

*Key contrast with d.c. motor:* generator uses slip rings (produces a.c.); motor uses split-ring commutator (needs d.c. input). Mechanically the designs are very similar — a motor can act as a generator and vice versa.`,
      keyPoints: [
        "An e.m.f. is induced whenever there is relative motion between a conductor and a magnetic field.",
        "Lenz's Law: induced current opposes the change that caused it (energy conservation).",
        "Fleming's Right-Hand Rule: First finger = Field; seCond finger = induced Current; thuMb = Motion.",
        "The a.c. generator uses slip rings (not a commutator) so the output alternates.",
        "Increasing speed, field strength, or number of turns increases the induced e.m.f.",
      ],
      thinkDeeper:
        "Why does Lenz's Law have to be true? If the induced current reinforced the change that caused it, moving a magnet towards a coil would accelerate the magnet further — energy would appear from nowhere. Lenz's Law is simply the statement that electromagnetic induction obeys conservation of energy.",
      strategies: [
        "Generator vs motor: generator = right-hand rule + slip rings; motor = left-hand rule + commutator.",
        "When asked about direction of induced current, apply Lenz's Law first (oppose the change), then use FRHR to confirm.",
      ],
    },

    // ── SECTION 5 ──────────────────────────────────────────────
    {
      heading: "Transformers and the National Grid",
      body: `A **transformer** transfers electrical energy between two circuits by **electromagnetic induction** (mutual induction). It works only with **alternating current**.

**Construction:**
- **Primary coil** (Np turns) connected to the input (primary) voltage Vp.
- **Secondary coil** (Ns turns) connected to the output (secondary) voltage Vs.
- Both wound on a **soft-iron core** which channels (concentrates) the magnetic flux from the primary to the secondary.

**The turns ratio equation (voltage ratio):**

  Vp / Vs = Np / Ns

- **Step-up transformer**: Ns > Np → Vs > Vp (voltage increases).
- **Step-down transformer**: Ns < Np → Vs < Vp (voltage decreases).

**The ideal transformer power equation:**
For a 100% efficient (ideal) transformer, no energy is lost, so:

  Vp × Ip = Vs × Is   (input power = output power)

In a step-up transformer the voltage rises but the current falls by the same ratio (and vice versa for a step-down).

**Why transformers require a.c.:**
A steady d.c. current produces a constant (not changing) magnetic flux — no change in flux means no induced e.m.f. in the secondary. An alternating current produces a continuously changing flux, inducing a continuously alternating e.m.f. in the secondary.

**The National Grid and high-voltage transmission:**
Electrical power is transmitted from power stations to consumers via the National Grid. Power loss in cables is given by P_loss = I² R, where R is the cable resistance.

- Step-up transformers near the power station raise the voltage (to 132 kV–400 kV) and thereby **reduce the current** for the same power (P = VI).
- Lower current → much less power wasted as heat in the cables (P_loss ∝ I²).
- Step-down transformers near homes and factories reduce the voltage to safe levels (230 V in Singapore/UK).

**Example:** Transmitting 1 MW at 1000 V through 10 Ω of cable: I = 1 000 000 / 1000 = 1000 A; P_loss = 1000² × 10 = 10 MW — more than the actual power! Stepping up to 100 000 V: I = 10 A; P_loss = 10² × 10 = 1000 W. The saving is dramatic.`,
      diagrams: [
        {
          caption: "Transformer construction — primary and secondary coils on a shared soft-iron core",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Transformer diagram showing primary coil, secondary coil and soft-iron core">
  <!-- iron core (rectangular loop) -->
  <rect x="60" y="50" width="200" height="100" rx="8" fill="none" stroke="#a78bfa" stroke-width="3"/>
  <!-- core fill hint -->
  <rect x="65" y="55" width="190" height="90" rx="6" fill="#a78bfa" opacity="0.12"/>
  <!-- primary coil (left side, vertical) -->
  <rect x="50" y="70" width="40" height="60" rx="4" fill="none" stroke="#38bdf8" stroke-width="3"/>
  <!-- coil turns represented by horizontal lines -->
  <line x1="50" y1="80" x2="90" y2="80" stroke="#38bdf8" stroke-width="1.5"/>
  <line x1="50" y1="90" x2="90" y2="90" stroke="#38bdf8" stroke-width="1.5"/>
  <line x1="50" y1="100" x2="90" y2="100" stroke="#38bdf8" stroke-width="1.5"/>
  <line x1="50" y1="110" x2="90" y2="110" stroke="#38bdf8" stroke-width="1.5"/>
  <line x1="50" y1="120" x2="90" y2="120" stroke="#38bdf8" stroke-width="1.5"/>
  <!-- secondary coil (right side, vertical) -->
  <rect x="230" y="70" width="40" height="60" rx="4" fill="none" stroke="#34d399" stroke-width="3"/>
  <line x1="230" y1="80" x2="270" y2="80" stroke="#34d399" stroke-width="1.5"/>
  <line x1="230" y1="87" x2="270" y2="87" stroke="#34d399" stroke-width="1.5"/>
  <line x1="230" y1="94" x2="270" y2="94" stroke="#34d399" stroke-width="1.5"/>
  <line x1="230" y1="101" x2="270" y2="101" stroke="#34d399" stroke-width="1.5"/>
  <line x1="230" y1="108" x2="270" y2="108" stroke="#34d399" stroke-width="1.5"/>
  <line x1="230" y1="115" x2="270" y2="115" stroke="#34d399" stroke-width="1.5"/>
  <line x1="230" y1="122" x2="270" y2="122" stroke="#34d399" stroke-width="1.5"/>
  <!-- input leads -->
  <line x1="30" y1="80" x2="50" y2="80" stroke="#38bdf8" stroke-width="2"/>
  <line x1="30" y1="120" x2="50" y2="120" stroke="#38bdf8" stroke-width="2"/>
  <text x="18" y="103" font-size="10" fill="#38bdf8">Vp</text>
  <!-- output leads -->
  <line x1="270" y1="80" x2="290" y2="80" stroke="#34d399" stroke-width="2"/>
  <line x1="270" y1="120" x2="290" y2="120" stroke="#34d399" stroke-width="2"/>
  <text x="292" y="103" font-size="10" fill="#34d399">Vs</text>
  <!-- labels -->
  <text x="70" y="145" text-anchor="middle" font-size="10" fill="#38bdf8">Primary</text>
  <text x="70" y="156" text-anchor="middle" font-size="10" fill="#38bdf8">Np turns</text>
  <text x="250" y="145" text-anchor="middle" font-size="10" fill="#34d399">Secondary</text>
  <text x="250" y="156" text-anchor="middle" font-size="10" fill="#34d399">Ns turns</text>
  <text x="160" y="170" text-anchor="middle" font-size="10" fill="#a78bfa">Soft-iron core</text>
  <text x="160" y="183" text-anchor="middle" font-size="9" fill="#b7bce0">Vp/Vs = Np/Ns     VpIp = VsIs (ideal)</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Transformers work only with a.c. — a steady d.c. produces no changing flux and no induction.",
        "Turns ratio equation: Vp/Vs = Np/Ns.",
        "Ideal transformer: VpIp = VsIs (power in = power out).",
        "Step-up raises voltage and reduces current; step-down does the reverse.",
        "High-voltage transmission minimises power loss in cables because P_loss = I²R and I is very small.",
      ],
      discovery: {
        problem:
          "A transformer has 200 turns on the primary and 1000 turns on the secondary. The primary is connected to a 230 V a.c. supply and draws 0.5 A. What is (a) the secondary voltage and (b) the secondary current? What type of transformer is this? Work it out before reading on.",
        idea:
          "(a) Vs = Vp × (Ns/Np) = 230 × (1000/200) = 230 × 5 = 1150 V. (b) Using ideal transformer: Is = (Vp × Ip)/Vs = (230 × 0.5)/1150 = 115/1150 = 0.1 A. This is a step-up transformer (Vs > Vp). Notice how the current dropped by a factor of 5 when the voltage rose by a factor of 5 — power is conserved.",
      },
      whyItWorks:
        "The alternating current in the primary creates an alternating magnetic flux in the soft-iron core. By Faraday's Law, the induced e.m.f. in any coil is proportional to the number of turns multiplied by the rate of change of flux. Since both coils share the same core, they experience the same rate of flux change; the ratio of their e.m.f.s equals the ratio of their turns. The soft-iron core is chosen because its high permeability concentrates virtually all the flux through both coils (minimising 'leakage flux'), and its low coercivity means the domains reverse easily at 50 Hz with little energy loss to heat.",
    },
  ],

  // ─────────────────────────────────────────────────────────────
  // LEARN SMART
  // ─────────────────────────────────────────────────────────────
  learn: {
    keyFacts: [
      "Like magnetic poles repel; unlike poles attract.",
      "Magnetic field lines run from N to S outside a magnet, never cross, and are denser where the field is stronger.",
      "Soft iron is a temporary magnet (loses magnetism easily); steel is a permanent magnet.",
      "Electromagnet strength increases with more current, more turns, or a soft-iron core.",
      "Motor effect force: F = BIL (maximum when conductor is perpendicular to field).",
      "Fleming's Left-Hand Rule: First finger = Field; seCond finger = Current; thuMb = Motion.",
      "The split-ring commutator in a d.c. motor reverses the current every half-turn to maintain continuous rotation.",
      "An e.m.f. is induced whenever the magnetic flux through a conductor changes.",
      "Lenz's Law: the induced current opposes the change producing it.",
      "The a.c. generator uses slip rings (not a commutator), so the output is alternating.",
      "Transformer turns ratio: Vp/Vs = Np/Ns; ideal power: VpIp = VsIs.",
      "High-voltage transmission reduces current → reduces power loss P = I²R in cables.",
    ],
    flashcards: [
      { front: "What is Fleming's Left-Hand Rule used for?", back: "Finding the direction of the force (motor effect) on a current-carrying conductor in a magnetic field. First finger = Field; seCond = Current; thuMb = Motion." },
      { front: "What is the turns ratio equation for a transformer?", back: "Vp / Vs = Np / Ns" },
      { front: "Why does a transformer NOT work with d.c.?", back: "A steady d.c. produces constant magnetic flux — no change in flux means no induced e.m.f. in the secondary coil." },
      { front: "What is Lenz's Law?", back: "The induced current always flows in a direction that opposes the change in flux that caused it. It is a consequence of energy conservation." },
      { front: "How does a split-ring commutator make a d.c. motor work?", back: "It reverses the current through the coil every half-turn so the torque always acts in the same rotational direction, maintaining continuous rotation." },
      { front: "What is the ideal transformer power equation?", back: "Vp × Ip = Vs × Is (input power equals output power for an ideal transformer)." },
      { front: "What is the motor effect?", back: "The force experienced by a current-carrying conductor placed in a magnetic field. Described by F = BIL." },
      { front: "Why is soft iron used for electromagnet cores?", back: "Soft iron has high magnetic permeability (amplifies the field greatly) and low coercivity (easily demagnetised when the current stops)." },
      { front: "What is electromagnetic induction?", back: "The production of an e.m.f. (and current, if the circuit is complete) when the magnetic flux through a conductor changes." },
      { front: "Why is electrical power transmitted at high voltage?", back: "High voltage → low current for the same power (P = VI). Lower current → much less power wasted as heat in the cables (P_loss = I²R)." },
      { front: "What are slip rings used for in a generator?", back: "They allow the rotating coil to maintain electrical contact with the external circuit, enabling the alternating current to flow out without being rectified." },
      { front: "State two ways to increase the induced e.m.f. in a generator.", back: "Increase the speed of rotation; increase the magnetic flux density; increase the number of turns on the coil." },
    ],
    keyTerms: [
      { term: "Magnetic field", definition: "A region in which a magnetic material or current-carrying conductor experiences a force; represented by field lines from N to S." },
      { term: "Induced magnetism", definition: "Temporary magnetism produced in a magnetic material when it is placed in an external magnetic field." },
      { term: "Permanent magnet", definition: "A magnet made from a magnetically hard material (e.g. steel) that retains its magnetism after the magnetising field is removed." },
      { term: "Electromagnet", definition: "A solenoid (often with a soft-iron core) that acts as a magnet only when a current flows through the coil." },
      { term: "Motor effect", definition: "The force experienced by a current-carrying conductor in a magnetic field, direction given by Fleming's Left-Hand Rule; F = BIL." },
      { term: "Split-ring commutator", definition: "A device in a d.c. motor that reverses the current through the rotating coil every half-turn, maintaining continuous rotation in one direction." },
      { term: "Electromagnetic induction", definition: "The production of an e.m.f. in a conductor due to a change in the magnetic flux through it." },
      { term: "Lenz's Law", definition: "The direction of an induced current is always such as to oppose the change in flux that caused it." },
      { term: "Slip rings", definition: "Rings in an a.c. generator that allow the rotating coil to remain in continuous electrical contact with the external circuit, producing an alternating output." },
      { term: "Transformer", definition: "An electrical device that uses mutual electromagnetic induction to change the voltage (and current) of an alternating supply, with the ratio Vp/Vs = Np/Ns." },
      { term: "Step-up transformer", definition: "A transformer in which the secondary coil has more turns than the primary (Ns > Np), so the secondary voltage is higher than the primary voltage." },
      { term: "Step-down transformer", definition: "A transformer in which the secondary coil has fewer turns than the primary (Ns < Np), so the secondary voltage is lower than the primary voltage." },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUICK QUIZ
  // ─────────────────────────────────────────────────────────────
  quiz: {
    mcq: [
      {
        id: "phys-magnetism-mcq-q01",
        question: "Which pair of magnetic poles will repel each other?",
        options: ["N and S", "S and N", "N and N", "N and S when one is reversed"],
        answerIndex: 2,
        explanation: "Like poles repel; unlike poles attract. N and N are like poles and therefore repel. N–S and S–N are unlike and attract.",
        difficulty: "warmup",
        guideRef: "Magnets, Poles and Magnetic Fields",
      },
      {
        id: "phys-magnetism-mcq-q02",
        question: "A student wraps 200 turns of wire around a soft-iron core and passes 3 A through it. She then doubles the current and doubles the number of turns. By what factor does the electromagnet's strength increase?",
        options: ["2", "4", "6", "8"],
        answerIndex: 1,
        explanation: "Electromagnet strength is proportional to both current and number of turns (their product = the ampere-turns). Doubling each multiplies the product by 2 × 2 = 4.",
        difficulty: "core",
        guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
        hints: [
          "Electromagnet strength ∝ current × number of turns.",
          "Find the new current and new number of turns separately.",
          "Compute the ratio of new ampere-turns to original ampere-turns.",
        ],
      },
      {
        id: "phys-magnetism-mcq-q03",
        question: "A horizontal wire carries a current directed to the east. The magnetic field at the wire points vertically downward. In which direction does the wire experience a force?",
        options: ["North", "South", "Upward", "Downward"],
        answerIndex: 0,
        explanation: "Apply Fleming's Left-Hand Rule: First finger (Field) points down; seCond finger (Current) points east; the thuMb (force/motion) points north.",
        difficulty: "core",
        guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
        hints: [
          "Use Fleming's Left-Hand Rule.",
          "Point your first finger downward (field direction).",
          "Point your second finger to the east (current direction).",
          "Your thumb now points north — that is the force direction.",
        ],
      },
      {
        id: "phys-magnetism-mcq-q04",
        question: "Which change would NOT increase the e.m.f. induced in a generator?",
        options: [
          "Increasing the speed of rotation of the coil",
          "Increasing the number of turns on the coil",
          "Using a stronger magnet",
          "Replacing the slip rings with a split-ring commutator",
        ],
        answerIndex: 3,
        explanation: "Replacing slip rings with a commutator converts the generator to d.c. but does not increase the peak e.m.f. — it merely rectifies the output. The other three changes all increase the rate of change of flux and therefore the induced e.m.f.",
        difficulty: "core",
        guideRef: "Electromagnetic Induction and the A.C. Generator",
        hints: [
          "Recall the three factors that increase induced e.m.f.",
          "The question asks what does NOT increase e.m.f.",
          "Consider whether changing the type of ring affects the size or just the shape of the output.",
        ],
      },
      {
        id: "phys-magnetism-mcq-q05",
        question: "A transformer has 500 turns on the primary and 50 turns on the secondary. It is connected to a 240 V a.c. supply. What is the output (secondary) voltage?",
        options: ["2400 V", "24 V", "240 V", "480 V"],
        answerIndex: 1,
        explanation: "Vs = Vp × (Ns/Np) = 240 × (50/500) = 240 × 0.1 = 24 V. This is a step-down transformer (fewer secondary turns).",
        difficulty: "warmup",
        guideRef: "Transformers and the National Grid",
      },
      {
        id: "phys-magnetism-mcq-q06",
        question: "Why is electrical energy transmitted across the National Grid at very high voltages?",
        options: [
          "To increase the resistance of the cables",
          "To reduce the current, thereby reducing the power wasted as heat in the cables",
          "To increase the power available to consumers",
          "Because transformers only work at high voltages",
        ],
        answerIndex: 1,
        explanation: "Power loss in cables is P = I²R. Transmitting at high voltage (using a step-up transformer near the power station) reduces the current for the same power (P = VI), so the I²R loss is dramatically reduced. The total power available to consumers is unchanged.",
        difficulty: "warmup",
        guideRef: "Transformers and the National Grid",
      },
    ],

    qa: [
      {
        id: "phys-magnetism-qa-q01",
        question: "A straight wire carries a current of 4.0 A. It lies perpendicular to a magnetic field of flux density 0.25 T. A length of 0.30 m of the wire is inside the field. (a) Calculate the force on the wire. (b) State what happens to the force if the current is doubled and the wire is turned so it is parallel to the field.",
        marks: 4,
        modelAnswer:
          "(a) F = BIL = 0.25 × 4.0 × 0.30 = 0.30 N, directed perpendicular to both field and current (direction given by Fleming's Left-Hand Rule). (b) When the wire is parallel to the field, F = BIL sin 0° = 0 N. The force is zero regardless of the current, because there is no component of current perpendicular to the field.",
        markScheme: [
          "Correct use of F = BIL / F = 0.25 × 4.0 × 0.30",
          "F = 0.30 N (with unit)",
          "Force is zero when wire is parallel to field / sin θ = 0",
          "Correct reasoning: no perpendicular component / current parallel to field lines gives no force",
        ],
        commonError: "Doubling the current and then simply stating the force doubles — forgetting that the force becomes zero because the wire is now parallel to the field.",
        guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
        difficulty: "core",
        hints: [
          "Write down F = BIL and identify B, I, and L.",
          "Calculate F = 0.25 × 4.0 × 0.30.",
          "For part (b), think about the angle between the wire and the field.",
          "When a wire is parallel to the field, the force is F = BIL sin θ with θ = 0°.",
        ],
        solutions: [
          {
            label: "Direct substitution",
            steps: [
              "F = BIL",
              "F = 0.25 T × 4.0 A × 0.30 m",
              "F = 0.30 N",
              "(b) Wire parallel to field → angle between wire and field = 0°; F = BIL sin 0° = 0 N",
            ],
          },
        ],
      },
      {
        id: "phys-magnetism-qa-q02",
        question: "Describe how a relay uses an electromagnet to allow a small control current to switch a large current in a separate circuit. Include a description of what happens when the control current is switched on.",
        marks: 4,
        modelAnswer:
          "When a small control current flows through the relay's electromagnet coil, it magnetises the soft-iron core and creates a strong magnetic field. This field attracts the soft-iron armature (a pivoting metal strip), pulling it towards the electromagnet. The movement of the armature closes the contacts in the second (high-current) circuit, allowing the large current to flow. When the control current is switched off, the electromagnet demagnetises (soft iron loses its magnetism), the spring returns the armature to its original position, and the high-current circuit is broken.",
        markScheme: [
          "Control current in coil magnetises the electromagnet / attracts soft-iron armature",
          "Armature pivots / moves towards the electromagnet",
          "Contacts in the separate circuit close / high-current circuit is completed",
          "Switching off control current demagnetises core; spring returns armature; high-current circuit breaks",
        ],
        commonError: "Describing the relay as passing the large current through the electromagnet itself — the key point is that the two circuits are electrically isolated.",
        guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
        difficulty: "core",
        hints: [
          "Start by describing what the electromagnet does when the control current flows.",
          "Explain what the armature does — how does it move?",
          "Describe the effect on the second circuit.",
          "State what happens when the control current is removed.",
        ],
      },
      {
        id: "phys-magnetism-qa-q03",
        question: "A power station generates 500 MW at 25 kV. A step-up transformer raises this to 400 kV for transmission along cables of total resistance 4.0 Ω. (a) Calculate the current in the transmission cables. (b) Calculate the power wasted in the cables. (c) Suggest why it would not be practical to transmit the power at 25 kV instead.",
        marks: 6,
        modelAnswer:
          "(a) I = P/V = 500 × 10⁶ / 400 × 10³ = 1250 A.\n(b) P_loss = I²R = 1250² × 4.0 = 1 562 500 × 4.0 = 6.25 × 10⁶ W = 6.25 MW.\n(c) At 25 kV: I = 500 × 10⁶ / 25 × 10³ = 20 000 A; P_loss = 20 000² × 4.0 = 1.6 × 10¹⁰ W = 16 000 MW. This is 32 times the power being generated — the losses would far exceed the power available and would require impossibly thick cables.",
        markScheme: [
          "I = P/V / I = 500×10⁶ / 400×10³",
          "I = 1250 A (with unit)",
          "P_loss = I²R / P_loss = 1250² × 4.0",
          "P_loss = 6.25 MW / 6 250 000 W (allow 6.3 MW)",
          "At 25 kV, current would be 20 000 A / 20 kA",
          "Power loss would be enormous / exceed the generated power / cables would overheat — not practical",
        ],
        commonError: "Using P = VI to calculate cable power loss instead of P = I²R — V here is the voltage drop across the cables (not the transmission voltage).",
        guideRef: "Transformers and the National Grid",
        difficulty: "challenge",
        hints: [
          "Use I = P/V to find the transmission current at 400 kV.",
          "Use P_loss = I²R (not P = VI) for cable losses — R is the cable resistance.",
          "For part (c), recalculate the current if the same 500 MW were sent at 25 kV instead.",
          "Compare the resulting I²R loss to 500 MW to show it is impractical.",
        ],
        solutions: [
          {
            label: "Step-by-step calculation",
            steps: [
              "(a) I = P / V = 500 × 10⁶ W / 400 × 10³ V = 1250 A",
              "(b) P_loss = I² × R = (1250)² × 4.0 = 1 562 500 × 4 = 6 250 000 W = 6.25 MW",
              "(c) At 25 kV: I = 500×10⁶ / 25×10³ = 20 000 A",
              "P_loss = (20 000)² × 4.0 = 1.6 × 10¹⁰ W = 16 000 MW",
              "16 000 MW >> 500 MW generated — entirely impractical; cables would melt",
            ],
          },
        ],
        strategy: "Always use P = I²R for cable power loss, never P = VI (unless you know the exact voltage drop across the cable).",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION BANK
  // ─────────────────────────────────────────────────────────────
  questionBank: {
    mcqPapers: [
      // ── BANK MCQ PAPER 1 ──────────────────────────────────────
      {
        id: "phys-magnetism-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Magnets, poles, field patterns, induced magnetism and electromagnets.",
        questions: [
          {
            id: "phys-magnetism-bm1-01",
            question: "Which list contains only magnetic materials?",
            options: ["Iron, copper, nickel", "Iron, steel, cobalt", "Aluminium, nickel, cobalt", "Steel, brass, iron"],
            answerIndex: 1,
            explanation: "The magnetic materials are iron, steel, nickel and cobalt. Copper, aluminium and brass are non-magnetic, so any list containing them is wrong. Iron, steel and cobalt are all magnetic.",
            difficulty: "warmup",
            guideRef: "Magnets, Poles and Magnetic Fields",
          },
          {
            id: "phys-magnetism-bm1-02",
            question: "Two bar magnets are placed end to end and attract each other strongly. Which statement must be true?",
            options: [
              "Two like poles are facing each other",
              "Two unlike poles are facing each other",
              "Both magnets have lost their magnetism",
              "One magnet is made of soft iron",
            ],
            answerIndex: 1,
            explanation: "Unlike poles (N facing S) attract; like poles repel. Strong attraction therefore means unlike poles are facing.",
            difficulty: "warmup",
            guideRef: "Magnets, Poles and Magnetic Fields",
          },
          {
            id: "phys-magnetism-bm1-03",
            question: "A magnetic field is represented by field lines. Which statement is correct?",
            options: [
              "Field lines cross where the field is strongest",
              "Field lines run from S to N outside a magnet",
              "Field lines are closer together where the field is stronger",
              "Field lines point in the direction a free south pole would move",
            ],
            answerIndex: 2,
            explanation: "Field lines never cross, run from N to S outside the magnet, point in the direction a free north pole would move, and are closer together where the field is stronger. Only the third option is correct.",
            difficulty: "warmup",
            guideRef: "Magnets, Poles and Magnetic Fields",
          },
          {
            id: "phys-magnetism-bm1-04",
            question: "A bar magnet is cut exactly in half across its middle. What is the result?",
            options: [
              "One piece with only a N pole and one piece with only a S pole",
              "Two complete magnets, each with a N and a S pole",
              "Two unmagnetised pieces of iron",
              "One magnet twice as strong",
            ],
            answerIndex: 1,
            explanation: "An isolated single pole cannot exist. Cutting a magnet produces two shorter but complete magnets, each with its own N and S pole, because magnetism comes from aligned domains throughout the material.",
            difficulty: "core",
            guideRef: "Magnets, Poles and Magnetic Fields",
            hints: [
              "Can a single magnetic pole exist on its own?",
              "Think about what each new end of the cut becomes.",
              "Magnetism comes from aligned domains spread throughout the whole material.",
            ],
          },
          {
            id: "phys-magnetism-bm1-05",
            question: "Why is soft iron, rather than steel, used for the core of an electromagnet?",
            options: [
              "Soft iron is cheaper than steel",
              "Soft iron stays magnetised permanently",
              "Soft iron magnetises strongly and loses its magnetism quickly when the current stops",
              "Soft iron is not attracted to magnets",
            ],
            answerIndex: 2,
            explanation: "Soft iron has high permeability (it magnetises strongly, boosting the field) and low coercivity (it demagnetises almost instantly when the current stops). Steel would retain magnetism, so the electromagnet could not be switched off.",
            difficulty: "core",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            hints: [
              "An electromagnet must switch off when the current is removed.",
              "Compare how soft iron and steel behave once the magnetising field is removed.",
              "Think about both the strength gained and the ability to demagnetise.",
            ],
          },
          {
            id: "phys-magnetism-bm1-06",
            question: "An electromagnet is too weak. Which single change would NOT increase its strength?",
            options: [
              "Increasing the current in the coil",
              "Adding more turns to the coil",
              "Inserting a soft-iron core",
              "Replacing the soft-iron core with a wooden one",
            ],
            answerIndex: 3,
            explanation: "Wood is non-magnetic, so a wooden core does nothing (it is no better than air). Increasing current, adding turns, or inserting a soft-iron core all increase the field strength.",
            difficulty: "core",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            hints: [
              "Recall the three ways to strengthen an electromagnet.",
              "The question asks which change does NOT help.",
              "Consider whether wood is a magnetic material.",
            ],
          },
          {
            id: "phys-magnetism-bm1-07",
            question: "A steel bar is stroked repeatedly in the same direction with one pole of a magnet, then the magnet is removed. What happens?",
            options: [
              "The steel becomes permanently magnetised",
              "The steel loses all magnetism immediately",
              "The steel becomes a temporary magnet only",
              "The steel becomes non-magnetic",
            ],
            answerIndex: 0,
            explanation: "Steel is magnetically hard — once its domains are aligned by stroking, it retains the alignment after the magnet is removed, becoming a permanent magnet.",
            difficulty: "core",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            hints: [
              "Is steel magnetically hard or soft?",
              "What happens to the domains when steel is magnetised?",
              "Does steel keep or lose its magnetism after the field is removed?",
            ],
          },
          {
            id: "phys-magnetism-bm1-08",
            question: "A solenoid carries a direct current. Looking at one end of the coil, the conventional current flows anticlockwise. Which pole faces you at that end?",
            options: ["North pole", "South pole", "No pole forms at the ends", "It alternates rapidly"],
            answerIndex: 0,
            explanation: "Using the right-hand grip rule (or the clock rule: aNticlockwise = North), an end where the current appears to flow anticlockwise is a north pole.",
            difficulty: "core",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            hints: [
              "Use the right-hand grip rule, or the clock rule for solenoid ends.",
              "Anticlockwise current letters spell out the pole: aNticlockwise = North.",
              "Clockwise would be a South pole; anticlockwise a North pole.",
            ],
          },
          {
            id: "phys-magnetism-bm1-09",
            question: "Why does a scrapyard crane use an electromagnet rather than a permanent magnet to move steel scrap?",
            options: [
              "A permanent magnet is too weak to lift steel",
              "The electromagnet can be switched off to release the load",
              "A permanent magnet would attract aluminium as well",
              "The electromagnet works without any electrical supply",
            ],
            answerIndex: 1,
            explanation: "The key advantage is control: switching off the current removes the field instantly, dropping the load exactly where wanted. A permanent magnet could not release the scrap.",
            difficulty: "warmup",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
          },
          {
            id: "phys-magnetism-bm1-10",
            question: "At the neutral point between two like poles (N facing N), why is the resultant magnetic field zero?",
            options: [
              "Both magnets have been demagnetised there",
              "The two fields point in opposite directions and cancel",
              "Field lines cross at that point",
              "The point is too far from both magnets to feel any field",
            ],
            answerIndex: 1,
            explanation: "At the neutral point the fields from the two like poles are equal in size but opposite in direction, so they cancel to give zero resultant field. Field lines do not cross; they bow away from the neutral point.",
            difficulty: "challenge",
            guideRef: "Magnets, Poles and Magnetic Fields",
            hints: [
              "A magnetic field is a vector — it has both size and direction.",
              "Between two like poles the two fields oppose each other.",
              "At the neutral point the opposing fields are equal in magnitude.",
            ],
          },
        ],
      },

      // ── BANK MCQ PAPER 2 ──────────────────────────────────────
      {
        id: "phys-magnetism-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "The motor effect, Fleming's Left-Hand Rule and the d.c. motor.",
        questions: [
          {
            id: "phys-magnetism-bm2-01",
            question: "In Fleming's Left-Hand Rule, what does the first finger represent?",
            options: ["The current", "The motion (force)", "The magnetic field", "The voltage"],
            answerIndex: 2,
            explanation: "First finger = Field, seCond finger = Current, thuMb = Motion. The first finger represents the magnetic field (pointing N to S).",
            difficulty: "warmup",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
          },
          {
            id: "phys-magnetism-bm2-02",
            question: "A current-carrying wire is placed in a magnetic field. The force on the wire is largest when the wire is:",
            options: [
              "Parallel to the field",
              "Perpendicular to the field",
              "At 45° to the field",
              "Removed from the field",
            ],
            answerIndex: 1,
            explanation: "F = BIL sin θ. The force is maximum when θ = 90° (wire perpendicular to field, sin 90° = 1) and zero when the wire is parallel to the field (sin 0° = 0).",
            difficulty: "warmup",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
          },
          {
            id: "phys-magnetism-bm2-03",
            question: "A wire carries a current vertically upward. The magnetic field points horizontally to the north. In which direction is the force on the wire?",
            options: ["To the east", "To the west", "Upward", "Downward"],
            answerIndex: 1,
            explanation: "Apply Fleming's Left-Hand Rule: first finger (Field) points north, second finger (Current) points up, thumb (Motion) points to the west.",
            difficulty: "core",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            hints: [
              "Use Fleming's Left-Hand Rule with the left hand.",
              "First finger north (field), second finger up (current).",
              "Read off the direction your thumb points — that is the force.",
            ],
          },
          {
            id: "phys-magnetism-bm2-04",
            question: "A wire of length 0.20 m carries a current of 3.0 A perpendicular to a field of flux density 0.50 T. What is the force on the wire?",
            options: ["0.30 N", "0.60 N", "1.2 N", "3.0 N"],
            answerIndex: 0,
            explanation: "F = BIL = 0.50 × 3.0 × 0.20 = 0.30 N.",
            difficulty: "warmup",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
          },
          {
            id: "phys-magnetism-bm2-05",
            question: "The force on a wire in a magnetic field is 0.24 N when the current is 4.0 A. If the current is increased to 10 A with everything else unchanged, what is the new force?",
            options: ["0.096 N", "0.24 N", "0.60 N", "2.4 N"],
            answerIndex: 2,
            explanation: "F = BIL, so F ∝ I. New force = 0.24 × (10/4.0) = 0.24 × 2.5 = 0.60 N.",
            difficulty: "core",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            hints: [
              "Force is proportional to the current (F = BIL).",
              "Find the factor by which the current changes: 10/4.0.",
              "Multiply the original force by that factor.",
            ],
          },
          {
            id: "phys-magnetism-bm2-06",
            question: "A single current-carrying coil sits between the poles of a magnet. What produces the turning effect (torque) on the coil?",
            options: [
              "The two long sides experience forces in opposite directions",
              "All four sides are pushed in the same direction",
              "The coil is attracted bodily towards the north pole",
              "The current heats the coil, making it expand",
            ],
            answerIndex: 0,
            explanation: "The two opposite sides of the coil carry current in opposite directions, so by Fleming's Left-Hand Rule they experience forces in opposite directions. This pair of forces (a couple) produces a torque that turns the coil.",
            difficulty: "core",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            hints: [
              "Consider the current direction in opposite sides of the coil.",
              "Apply Fleming's Left-Hand Rule to each side separately.",
              "Two equal, opposite forces on opposite sides form a couple → torque.",
            ],
          },
          {
            id: "phys-magnetism-bm2-07",
            question: "What is the purpose of the carbon brushes in a d.c. motor?",
            options: [
              "To reverse the current every half-turn",
              "To make sliding electrical contact with the rotating commutator",
              "To increase the magnetic field strength",
              "To convert a.c. into d.c.",
            ],
            answerIndex: 1,
            explanation: "The brushes press against the rotating split-ring commutator to maintain electrical contact while the coil spins. It is the commutator (not the brushes) that reverses the current every half-turn.",
            difficulty: "core",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            hints: [
              "Distinguish the job of the brushes from that of the commutator.",
              "The coil rotates but the supply wires do not — how does current still reach the coil?",
              "Brushes provide a sliding contact; the commutator does the reversing.",
            ],
          },
          {
            id: "phys-magnetism-bm2-08",
            question: "Without a split-ring commutator, a simple d.c. motor coil would:",
            options: [
              "Spin faster in one direction",
              "Rotate continuously but in the opposite direction",
              "Swing back and forth (oscillate) instead of rotating fully",
              "Not move at all",
            ],
            answerIndex: 2,
            explanation: "Without commutation the current direction in the coil stays fixed, so once past the vertical the torque reverses and the coil swings back. The result is oscillation rather than continuous rotation.",
            difficulty: "core",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            hints: [
              "What does the commutator do at the dead-centre position?",
              "If the current never reverses, what happens to the torque direction past vertical?",
              "A torque that keeps reversing direction produces back-and-forth motion.",
            ],
          },
          {
            id: "phys-magnetism-bm2-09",
            question: "Which set of changes would give the LARGEST increase in the turning effect of a d.c. motor?",
            options: [
              "Halve the current and halve the number of turns",
              "Double the current and double the number of turns",
              "Double the current and use a weaker magnet",
              "Keep everything the same but spin it by hand",
            ],
            answerIndex: 1,
            explanation: "Torque increases with current, number of turns, field strength and coil area. Doubling both the current and the number of turns multiplies the turning effect by 2 × 2 = 4 — the largest increase offered.",
            difficulty: "core",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            hints: [
              "List the factors that increase a motor's torque.",
              "Work out the multiplying factor for each option.",
              "Doubling two independent factors multiplies the effect by 4.",
            ],
          },
          {
            id: "phys-magnetism-bm2-10",
            question: "A straight wire 0.40 m long lies at 30° to a uniform field of 0.20 T and carries 6.0 A. Using F = BIL sin θ, what is the force on the wire?",
            options: ["0.24 N", "0.42 N", "0.48 N", "0.96 N"],
            answerIndex: 0,
            explanation: "F = BIL sin θ = 0.20 × 6.0 × 0.40 × sin 30° = 0.48 × 0.5 = 0.24 N. (sin 30° = 0.5.)",
            difficulty: "challenge",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            hints: [
              "The wire is not perpendicular, so include sin θ.",
              "First compute BIL = 0.20 × 6.0 × 0.40 = 0.48 N.",
              "Then multiply by sin 30° = 0.5.",
            ],
            strategy: "When a conductor is not perpendicular to the field, always use F = BIL sin θ rather than just F = BIL.",
          },
        ],
      },

      // ── BANK MCQ PAPER 3 ──────────────────────────────────────
      {
        id: "phys-magnetism-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Electromagnetic induction, Lenz's Law and the a.c. generator.",
        questions: [
          {
            id: "phys-magnetism-bm3-01",
            question: "An e.m.f. is induced in a coil only when:",
            options: [
              "A steady current flows through it",
              "The magnetic flux through it is changing",
              "It is held stationary in a steady field",
              "It is made of a non-magnetic material",
            ],
            answerIndex: 1,
            explanation: "Electromagnetic induction requires a changing magnetic flux through the conductor. A steady field with no relative motion induces no e.m.f.",
            difficulty: "warmup",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
          },
          {
            id: "phys-magnetism-bm3-02",
            question: "Which of these will NOT induce an e.m.f. in a coil?",
            options: [
              "Moving a magnet into the coil",
              "Holding a magnet stationary inside the coil",
              "Pulling a magnet out of the coil",
              "Switching a current on in a nearby coil",
            ],
            answerIndex: 1,
            explanation: "A stationary magnet inside the coil gives constant flux — no change, so no induced e.m.f. The other three all change the flux through the coil.",
            difficulty: "warmup",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
          },
          {
            id: "phys-magnetism-bm3-03",
            question: "Lenz's Law states that the induced current flows in a direction that:",
            options: [
              "Reinforces the change in flux that caused it",
              "Opposes the change in flux that caused it",
              "Is always clockwise when viewed from the north",
              "Depends only on the resistance of the coil",
            ],
            answerIndex: 1,
            explanation: "Lenz's Law: the induced current always opposes the change producing it. This is a direct consequence of conservation of energy.",
            difficulty: "warmup",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
          },
          {
            id: "phys-magnetism-bm3-04",
            question: "Why is Lenz's Law a consequence of conservation of energy?",
            options: [
              "Because the induced current always increases the kinetic energy of the magnet",
              "Because if the induced current aided the change, energy would be created from nothing",
              "Because magnetic fields store no energy",
              "Because current always flows from high to low potential",
            ],
            answerIndex: 1,
            explanation: "If the induced current reinforced the change, a magnet pushed towards a coil would be pulled in faster and faster, generating energy from nothing. Opposing the change means work must be done to move the magnet, which becomes the electrical energy — energy is conserved.",
            difficulty: "core",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            hints: [
              "Imagine the induced current pulled the magnet in instead of pushing it away.",
              "Where would the extra kinetic and electrical energy come from?",
              "Opposing the change forces you to do work to keep moving the magnet.",
            ],
          },
          {
            id: "phys-magnetism-bm3-05",
            question: "An a.c. generator uses slip rings rather than a split-ring commutator because:",
            options: [
              "Slip rings make the output direct current",
              "Slip rings allow the coil to rotate while the output stays alternating",
              "Slip rings increase the e.m.f. produced",
              "Slip rings reverse the current every half-turn",
            ],
            answerIndex: 1,
            explanation: "Slip rings (two complete rings) keep each end of the coil connected to the same output terminal throughout, so the naturally alternating e.m.f. appears unchanged as a.c. A commutator would reverse the connections every half-turn, rectifying the output.",
            difficulty: "core",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            hints: [
              "Compare slip rings (two full rings) with a commutator (split ring).",
              "Which one reverses the connection every half-turn?",
              "An a.c. generator must preserve the alternating output.",
            ],
          },
          {
            id: "phys-magnetism-bm3-06",
            question: "In an a.c. generator, the induced e.m.f. is at its MAXIMUM when the coil is:",
            options: [
              "Vertical, with its plane perpendicular to the field",
              "Horizontal, with its plane parallel to the field so the sides cut field lines fastest",
              "At rest",
              "Aligned exactly with the magnetic field axis",
            ],
            answerIndex: 1,
            explanation: "The e.m.f. is greatest when the coil sides move perpendicular to the field, cutting field lines at the fastest rate — this happens when the plane of the coil is parallel to the field. It is zero when the sides move parallel to the field.",
            difficulty: "core",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            hints: [
              "e.m.f. depends on the rate at which the coil sides cut field lines.",
              "When are the sides moving directly across the field lines?",
              "Maximum cutting rate occurs when the coil plane is parallel to the field.",
            ],
          },
          {
            id: "phys-magnetism-bm3-07",
            question: "A coil rotates in a magnetic field at 50 revolutions per second, producing a peak e.m.f. of 4.0 V. If the rotation speed is tripled, the new peak e.m.f. is approximately:",
            options: ["1.3 V", "4.0 V", "12 V", "150 V"],
            answerIndex: 2,
            explanation: "Peak e.m.f. is proportional to the rotation speed. Tripling the speed triples the peak e.m.f.: 4.0 × 3 = 12 V.",
            difficulty: "core",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            hints: [
              "Peak e.m.f. ∝ rate of change of flux ∝ rotation speed.",
              "The speed is multiplied by 3.",
              "Multiply the peak e.m.f. by the same factor.",
            ],
          },
          {
            id: "phys-magnetism-bm3-08",
            question: "Fleming's Right-Hand Rule is used to find the direction of:",
            options: [
              "The force on a current in a motor",
              "The induced current in a generator (dynamo rule)",
              "The magnetic field around a wire",
              "The voltage across a resistor",
            ],
            answerIndex: 1,
            explanation: "Fleming's Right-Hand Rule (the dynamo rule) gives the direction of the induced current in a conductor moving through a field: first finger = Field, thumb = Motion, second finger = induced Current. The Left-Hand Rule is for the motor effect.",
            difficulty: "core",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            hints: [
              "Right hand is for generators; left hand is for motors.",
              "The 'dynamo rule' relates motion of a conductor to induced current.",
              "Distinguish cause (motion) and effect (current) in induction.",
            ],
          },
          {
            id: "phys-magnetism-bm3-09",
            question: "A magnet is dropped through a vertical copper tube. Compared with dropping it through a plastic tube, the magnet falls:",
            options: [
              "Faster, because copper is a good conductor",
              "More slowly, because induced (eddy) currents in the copper oppose its motion",
              "At the same rate, because copper is non-magnetic",
              "Upward, because copper repels all magnets",
            ],
            answerIndex: 1,
            explanation: "As the magnet falls, the changing flux induces eddy currents in the copper. By Lenz's Law these currents oppose the magnet's motion, exerting a retarding force, so the magnet falls more slowly. Copper is non-magnetic but still conducts the induced currents; plastic does not.",
            difficulty: "challenge",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            hints: [
              "The falling magnet changes the flux through rings of the copper tube.",
              "Changing flux induces currents in the copper.",
              "Apply Lenz's Law: the induced currents oppose the change (the fall).",
            ],
          },
          {
            id: "phys-magnetism-bm3-10",
            question: "A straight wire is moved downward at constant speed between the poles of a magnet, with the field pointing from N (left) to S (right). Using Fleming's Right-Hand Rule, in which direction is the induced current along the wire?",
            options: [
              "There is no induced current",
              "From the front of the wire to the back (into the page)",
              "From the back of the wire to the front (out of the page)",
              "Vertically, along the direction of motion",
            ],
            answerIndex: 1,
            explanation: "With the right hand: first finger points right (field, N→S), thumb points down (motion). The second finger then points into the page, so the induced current flows from front to back (into the page) along the wire. The current is along the wire, never along the motion direction.",
            difficulty: "challenge",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            hints: [
              "Use Fleming's Right-Hand Rule for induced current.",
              "First finger = field (to the right), thumb = motion (downward).",
              "The second finger then gives the current direction (into the page).",
            ],
            strategy: "For induction always use the RIGHT hand: Field (first finger), Motion (thumb), induced Current (second finger).",
          },
        ],
      },

      // ── BANK MCQ PAPER 4 ──────────────────────────────────────
      {
        id: "phys-magnetism-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Transformers, the turns ratio, power and the National Grid.",
        questions: [
          {
            id: "phys-magnetism-bm4-01",
            question: "A transformer works only with alternating current because:",
            options: [
              "Direct current is too dangerous",
              "A steady d.c. gives a constant flux, so no e.m.f. is induced in the secondary",
              "Direct current cannot pass through a coil",
              "Alternating current has a higher voltage",
            ],
            answerIndex: 1,
            explanation: "A transformer relies on a changing magnetic flux to induce an e.m.f. in the secondary. Steady d.c. produces a constant flux (no change), so no e.m.f. is induced. A.c. continually changes the flux.",
            difficulty: "warmup",
            guideRef: "Transformers and the National Grid",
          },
          {
            id: "phys-magnetism-bm4-02",
            question: "Which equation correctly gives the transformer turns ratio?",
            options: ["Vp/Vs = Ns/Np", "Vp/Vs = Np/Ns", "Vp × Vs = Np × Ns", "Vp/Np = Ns/Vs"],
            answerIndex: 1,
            explanation: "The turns ratio equation is Vp/Vs = Np/Ns: the ratio of primary to secondary voltage equals the ratio of primary to secondary turns.",
            difficulty: "warmup",
            guideRef: "Transformers and the National Grid",
          },
          {
            id: "phys-magnetism-bm4-03",
            question: "A transformer has more turns on the secondary than on the primary. It is a:",
            options: [
              "Step-down transformer; voltage decreases",
              "Step-up transformer; voltage increases",
              "Step-up transformer; current increases",
              "Step-down transformer; current decreases",
            ],
            answerIndex: 1,
            explanation: "More secondary turns (Ns > Np) means Vs > Vp — a step-up transformer that increases the voltage (and, for an ideal transformer, decreases the current).",
            difficulty: "warmup",
            guideRef: "Transformers and the National Grid",
          },
          {
            id: "phys-magnetism-bm4-04",
            question: "A transformer steps 240 V down to 12 V. The primary has 2000 turns. How many turns are on the secondary?",
            options: ["40", "100", "400", "40000"],
            answerIndex: 1,
            explanation: "Ns = Np × (Vs/Vp) = 2000 × (12/240) = 2000 × 0.05 = 100 turns.",
            difficulty: "core",
            guideRef: "Transformers and the National Grid",
            hints: [
              "Use Vp/Vs = Np/Ns, rearranged to Ns = Np × Vs/Vp.",
              "Vs/Vp = 12/240 = 0.05.",
              "Multiply 2000 by 0.05.",
            ],
          },
          {
            id: "phys-magnetism-bm4-05",
            question: "An ideal transformer has an input power of 60 W. If the secondary delivers 5.0 A at 11 V, the transformer is:",
            options: [
              "Not ideal — output exceeds input",
              "Ideal — output power equals input power (55 W ≈ 60 W only if losses occur)",
              "Delivering exactly 60 W, confirming ideal behaviour",
              "Delivering 55 W, so it is NOT consistent with an ideal 60 W input",
            ],
            answerIndex: 3,
            explanation: "Output power = Vs × Is = 11 × 5.0 = 55 W. An ideal transformer would have output = input = 60 W, but 55 W ≠ 60 W, so these figures are not consistent with an ideal transformer (there would be a 5 W loss).",
            difficulty: "core",
            guideRef: "Transformers and the National Grid",
            hints: [
              "Calculate the output power: Vs × Is.",
              "For an ideal transformer, output power = input power.",
              "Compare 55 W with the stated 60 W input.",
            ],
          },
          {
            id: "phys-magnetism-bm4-06",
            question: "An ideal step-up transformer doubles the voltage. What happens to the current?",
            options: [
              "It doubles",
              "It halves",
              "It stays the same",
              "It becomes four times larger",
            ],
            answerIndex: 1,
            explanation: "For an ideal transformer VpIp = VsIs (power conserved). If the voltage doubles, the current must halve so that the product (power) is unchanged.",
            difficulty: "core",
            guideRef: "Transformers and the National Grid",
            hints: [
              "Power in = power out for an ideal transformer.",
              "If V × I is constant and V doubles, what must I do?",
              "Voltage up by a factor means current down by the same factor.",
            ],
          },
          {
            id: "phys-magnetism-bm4-07",
            question: "Electricity is transmitted across the National Grid at very high voltage mainly to:",
            options: [
              "Increase the power delivered to consumers",
              "Reduce the current and so reduce I²R power losses in the cables",
              "Increase the resistance of the cables",
              "Make transformers unnecessary",
            ],
            answerIndex: 1,
            explanation: "For a given power, raising the voltage reduces the current (P = VI). Since cable loss is P_loss = I²R, a smaller current greatly reduces the energy wasted as heat in the cables.",
            difficulty: "core",
            guideRef: "Transformers and the National Grid",
            hints: [
              "For fixed power, how are voltage and current related?",
              "Cable loss depends on current squared (I²R).",
              "Lower current means much lower loss.",
            ],
          },
          {
            id: "phys-magnetism-bm4-08",
            question: "Power of 20 kW is sent through a cable of resistance 2.0 Ω. At 200 V the current is 100 A. At 2000 V, by what factor is the cable power loss reduced compared with 200 V?",
            options: ["10", "20", "100", "1000"],
            answerIndex: 2,
            explanation: "Raising the voltage ×10 (200 V → 2000 V) lowers the current ×10 (100 A → 10 A). Since P_loss = I²R, the loss falls by 10² = 100 times. (Check: 100²×2 = 20000 W vs 10²×2 = 200 W; ratio = 100.)",
            difficulty: "challenge",
            guideRef: "Transformers and the National Grid",
            hints: [
              "Find the new current at 2000 V using I = P/V.",
              "The current drops by a factor of 10.",
              "P_loss ∝ I², so loss drops by 10².",
            ],
          },
          {
            id: "phys-magnetism-bm4-09",
            question: "A power station outputs 100 MW. A step-up transformer raises the voltage to 250 kV for transmission. What is the transmission current (assume no losses)?",
            options: ["40 A", "250 A", "400 A", "2500 A"],
            answerIndex: 2,
            explanation: "I = P/V = 100 × 10⁶ / 250 × 10³ = 100 000 000 / 250 000 = 400 A.",
            difficulty: "core",
            guideRef: "Transformers and the National Grid",
            hints: [
              "Use I = P/V.",
              "Convert: P = 100 × 10⁶ W, V = 250 × 10³ V.",
              "Divide to get the current in amps.",
            ],
          },
          {
            id: "phys-magnetism-bm4-10",
            question: "A transformer's soft-iron core is laminated (made of thin insulated layers) rather than solid. The main reason is to:",
            options: [
              "Increase the number of turns possible",
              "Reduce energy losses caused by eddy currents in the core",
              "Make the transformer lighter and cheaper",
              "Allow the transformer to work on direct current",
            ],
            answerIndex: 1,
            explanation: "The alternating flux would induce eddy currents in a solid core, wasting energy as heat. Laminating the core (thin layers separated by insulation) breaks up these current paths, reducing eddy-current losses and improving efficiency.",
            difficulty: "challenge",
            guideRef: "Transformers and the National Grid",
            hints: [
              "The changing flux induces currents in the core itself.",
              "These eddy currents dissipate energy as heat.",
              "Thin insulated layers interrupt the eddy-current paths.",
            ],
          },
        ],
      },
    ],

    qaPapers: [
      // ── BANK QA PAPER 1 ───────────────────────────────────────
      {
        id: "phys-magnetism-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Magnets, field patterns, induced magnetism and electromagnets.",
        questions: [
          {
            id: "phys-magnetism-bq1-01",
            question: "(a) State the rule for the forces between magnetic poles. (b) Name two magnetic materials and one non-magnetic metal.",
            marks: 3,
            modelAnswer:
              "(a) Like poles repel; unlike poles attract. (b) Magnetic materials (any two): iron, steel, nickel, cobalt. Non-magnetic metal (any one): copper / aluminium / brass.",
            markScheme: [
              "Like poles repel and unlike poles attract",
              "Two magnetic materials named (iron / steel / nickel / cobalt)",
              "One non-magnetic metal named (copper / aluminium / brass)",
            ],
            commonError: "Naming copper or aluminium as magnetic — these metals are not attracted to magnets.",
            guideRef: "Magnets, Poles and Magnetic Fields",
            difficulty: "warmup",
          },
          {
            id: "phys-magnetism-bq1-02",
            question: "Describe how you would use a plotting compass to plot the magnetic field pattern around a bar magnet, and state two properties of magnetic field lines.",
            marks: 5,
            modelAnswer:
              "Place the bar magnet on paper and draw round it. Put a plotting compass near one pole and mark a dot at each end of the needle. Move the compass so the tail sits on the previous dot and mark the new head position; repeat to build a chain of dots from the N pole to the S pole. Join the dots in a smooth curved line with an arrow pointing N to S — this is one field line. Repeat starting from different points to plot several lines. Two properties: field lines run from N to S outside the magnet; they never cross; they are closer together where the field is stronger (any two).",
            markScheme: [
              "Place compass near magnet and mark the needle ends with dots",
              "Move compass head to previous dot and repeat to build a chain",
              "Join dots in a smooth line with an arrow from N to S",
              "Repeat from different starting points for several lines",
              "Two correct properties of field lines (N→S outside / never cross / closer = stronger)",
            ],
            commonError: "Drawing field lines that cross, or omitting the arrows showing direction from N to S.",
            guideRef: "Magnets, Poles and Magnetic Fields",
            difficulty: "core",
            hints: [
              "Start by drawing round the magnet and placing the compass near a pole.",
              "Explain how each compass position adds to a chain of dots.",
              "Remember to add direction arrows and recall the key properties of field lines.",
            ],
          },
          {
            id: "phys-magnetism-bq1-03",
            question: "Explain the difference between a permanent magnet and a temporary (induced) magnet. Refer to the materials used and to what happens when the magnetising field is removed.",
            marks: 4,
            modelAnswer:
              "A permanent magnet is made from a magnetically hard material such as steel; once magnetised it keeps its magnetism after the external (magnetising) field is removed, because its domains stay aligned. A temporary magnet is made from a magnetically soft material such as soft iron; it becomes magnetised by induction when placed in a field but loses almost all of its magnetism as soon as the field is removed, because its domains return to random directions.",
            markScheme: [
              "Permanent magnet made from magnetically hard material / steel",
              "Permanent magnet keeps its magnetism after the field is removed",
              "Temporary magnet made from magnetically soft material / soft iron",
              "Temporary magnet loses its magnetism when the field is removed",
            ],
            commonError: "Stating that a temporary magnet keeps no magnetism at all while in the field — it IS magnetised while the field is present; it loses it only when the field is removed.",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            difficulty: "core",
            hints: [
              "Match each magnet type to a material (steel vs soft iron).",
              "Focus on what happens after the magnetising field is removed.",
              "Mention the behaviour of the domains in each case.",
            ],
          },
          {
            id: "phys-magnetism-bq1-04",
            question: "A student builds an electromagnet from a coil of wire wrapped around a soft-iron nail, connected to a battery. (a) State three ways the student could make the electromagnet stronger. (b) Explain why a soft-iron core is used rather than a steel one.",
            marks: 5,
            modelAnswer:
              "(a) Any three: increase the current through the coil; increase the number of turns of wire on the coil; use a soft-iron core (or a larger/thicker core); wind the turns more closely. (b) Soft iron magnetises strongly by induction (high permeability), greatly increasing the field, and it loses its magnetism almost instantly when the current is switched off (low coercivity). A steel core would retain magnetism, so the electromagnet could not be switched off and would behave like a permanent magnet.",
            markScheme: [
              "Increase the current",
              "Increase the number of turns",
              "Use/add a soft-iron core (or wind turns closer)",
              "Soft iron magnetises strongly / boosts the field",
              "Soft iron loses magnetism when current stops (steel would retain it / can't switch off)",
            ],
            commonError: "Saying 'increase the voltage' without linking it to a larger current — it is the current (ampere-turns) that matters.",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            difficulty: "core",
            hints: [
              "Recall the factors that set an electromagnet's strength.",
              "For part (b), compare soft iron and steel after the current is switched off.",
              "An electromagnet must be able to turn off — which material allows that?",
            ],
          },
          {
            id: "phys-magnetism-bq1-05",
            question: "Describe how a relay allows a small current in one circuit to switch on a much larger current in a separate circuit. State one advantage of this arrangement.",
            marks: 5,
            modelAnswer:
              "A small control current flows through the relay's electromagnet coil, magnetising the soft-iron core. The resulting magnetic field attracts a pivoted soft-iron armature. As the armature moves, it closes a pair of contacts in the second (high-current) circuit, allowing the large current to flow. When the control current is switched off, the core demagnetises, a spring returns the armature, and the contacts open, breaking the high-current circuit. Advantage: the two circuits are electrically isolated, so a small, safe current can control a large or high-voltage circuit safely.",
            markScheme: [
              "Control current magnetises the electromagnet / core",
              "Magnetic field attracts the (soft-iron) armature",
              "Armature movement closes contacts in the separate circuit → large current flows",
              "Switching off control current: core demagnetises, spring returns armature, contacts open",
              "Advantage: electrical isolation / small safe current controls a large or high-voltage circuit",
            ],
            commonError: "Implying the large current passes through the electromagnet coil — the two circuits are separate and isolated.",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            difficulty: "core",
            hints: [
              "Begin with what the control current does to the electromagnet.",
              "Explain how the armature movement affects the second circuit.",
              "State what happens when the control current is removed, then give the isolation advantage.",
            ],
          },
          {
            id: "phys-magnetism-bq1-06",
            question: "Two identical bar magnets are placed in a line with their north poles facing each other, a small gap apart. (a) Sketch in words the field pattern between them, including the neutral point. (b) Explain what is meant by a neutral point.",
            marks: 4,
            modelAnswer:
              "(a) Field lines emerge from each north pole and curve away from the gap; between the two N poles the lines bow outward (away from the central region) and do not pass straight across. Midway between the poles there is a point where no field lines pass — the neutral point. (b) A neutral point is a position where the magnetic fields from the two magnets are equal in magnitude but opposite in direction, so they cancel and the resultant magnetic field there is zero.",
            markScheme: [
              "Field lines emerge from both N poles / curve away from the gap (do not join across)",
              "Lines bow outward leaving a gap in the middle",
              "Neutral point lies midway between the like poles",
              "Neutral point: fields equal and opposite / cancel → resultant field zero",
            ],
            commonError: "Drawing field lines passing straight from one N pole to the other — like poles repel, so the lines push apart and a neutral point forms.",
            guideRef: "Magnets, Poles and Magnetic Fields",
            difficulty: "core",
            hints: [
              "Remember that like poles repel, so the field lines push apart.",
              "Look for where the opposing fields cancel.",
              "Define the neutral point in terms of vector cancellation.",
            ],
          },
          {
            id: "phys-magnetism-bq1-07",
            question: "Explain, in terms of magnetic domains, what happens inside a piece of soft iron when (a) it is placed in a strong magnetic field, and (b) the field is then removed.",
            marks: 4,
            modelAnswer:
              "(a) Before the field is applied, the magnetic domains in the soft iron point in random directions and their effects cancel, so the iron is unmagnetised. When placed in a strong field, the domains rotate/align with the applied field (and domains aligned with the field grow), so the iron becomes magnetised — it gains its own N and S poles by induction. (b) When the field is removed, because soft iron has low coercivity the domains quickly return to (nearly) random orientations, so the iron loses almost all of its magnetism.",
            markScheme: [
              "Initially domains point in random directions and cancel",
              "In a field the domains align with / rotate towards the applied field",
              "Aligned domains make the iron magnetised (induced magnetism)",
              "On removing the field the domains return to random directions → magnetism (almost all) lost",
            ],
            commonError: "Saying the domains are created by the field — the domains already exist; the field aligns them.",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            difficulty: "core",
            hints: [
              "Describe the domain arrangement before any field is applied.",
              "What does the external field do to the domains?",
              "Soft iron has low coercivity — what does that mean when the field is removed?",
            ],
          },
          {
            id: "phys-magnetism-bq1-08",
            question: "A solenoid is connected to a d.c. supply. (a) State how the magnetic field pattern of a solenoid compares with that of a bar magnet. (b) Explain how you could reverse the polarity (swap which end is N) of the solenoid. (c) Describe the field inside the solenoid.",
            marks: 4,
            modelAnswer:
              "(a) The field pattern of a current-carrying solenoid is the same as that of a bar magnet: field lines emerge from one end (the N pole) and enter the other (the S pole), with the same dipole shape outside. (b) Reverse the direction of the current (e.g. swap the connections to the battery); this reverses which end is the N pole. (c) Inside the solenoid the field is strong and (nearly) uniform — the field lines are parallel, evenly spaced and point along the axis from the S end towards the N end.",
            markScheme: [
              "Solenoid field pattern is the same as a bar magnet (N and S ends, dipole field outside)",
              "Reverse the current direction to swap the poles",
              "Field inside is strong and nearly uniform",
              "Field lines inside are parallel / evenly spaced / along the axis",
            ],
            commonError: "Saying you reverse the poles by adding a soft-iron core — the core strengthens the field but does not change which end is N.",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            difficulty: "warmup",
          },
          {
            id: "phys-magnetism-bq1-09",
            question: "(Challenge) A coil of 500 turns is wound on a soft-iron core and carries a current of 0.40 A, acting as an electromagnet of a certain strength. (a) The 'ampere-turns' of a coil is the product of the current and the number of turns. Calculate the ampere-turns. (b) A second electromagnet must have the same ampere-turns but is limited to a current of 0.10 A. How many turns must it have? (c) Explain why using a soft-iron core lets both electromagnets be far stronger than coils with the same ampere-turns in air.",
            marks: 6,
            modelAnswer:
              "(a) Ampere-turns = I × N = 0.40 × 500 = 200 A-turns.\n(b) N = (ampere-turns)/I = 200/0.10 = 2000 turns.\n(c) The magnetic field of the coil magnetises the soft-iron core by induction. Soft iron has a very high relative permeability (typically several thousand), so its aligned domains add a much larger field of their own, concentrating the field lines. The total field is therefore multiplied by roughly the relative permeability compared with an air-cored coil of the same ampere-turns.",
            markScheme: [
              "Ampere-turns = I × N = 0.40 × 500",
              "= 200 A-turns",
              "N = 200/0.10",
              "= 2000 turns",
              "Soft iron magnetised by induction / domains align and add their own field",
              "High relative permeability concentrates flux → field multiplied (vs air core)",
            ],
            commonError: "Forgetting that ampere-turns is current × turns, so a smaller current needs proportionally more turns to keep the same product.",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            difficulty: "challenge",
            hints: [
              "Ampere-turns = current × number of turns.",
              "Keep the product constant: if current falls ×4, turns must rise ×4.",
              "For (c), think about what soft iron's high permeability does to the field.",
            ],
            solutions: [
              {
                label: "Ampere-turns method",
                steps: [
                  "(a) I × N = 0.40 A × 500 = 200 A-turns",
                  "(b) Same ampere-turns: N = 200 / 0.10 A = 2000 turns",
                  "(c) Soft-iron core magnetises by induction; high relative permeability (thousands) concentrates flux, multiplying the field versus an air core",
                ],
              },
            ],
          },
          {
            id: "phys-magnetism-bq1-10",
            question: "(Challenge) A student suggests building an electromagnet that stays magnetised after the current is switched off, by using a steel core instead of soft iron. (a) Explain why this would NOT make a useful electromagnet for a scrapyard crane. (b) Suggest a device for which a steel (permanent) magnet IS the right choice, and justify it.",
            marks: 5,
            modelAnswer:
              "(a) A scrapyard crane must be able to release its load. With a steel core the magnetism would remain after the current is switched off (steel is magnetically hard, high coercivity), so the scrap could not be dropped where wanted — the crane would not work. A soft-iron core is needed so the field disappears when the current stops. (b) A permanent (steel/alnico/neodymium) magnet is the right choice for something like a fridge-door catch, a compass needle, or a loudspeaker, because these need a constant magnetic field that is always present without any electrical supply.",
            markScheme: [
              "Crane must release its load / drop the scrap",
              "Steel core would stay magnetised when current is off (high coercivity) → cannot release",
              "Soft iron is needed so the field disappears when current stops",
              "Names a suitable permanent-magnet device (fridge catch / compass / loudspeaker / motor magnet)",
              "Justification: needs a constant field with no electrical supply",
            ],
            commonError: "Suggesting a device that actually needs to switch on and off (e.g. a relay) as a use for a permanent magnet.",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            difficulty: "challenge",
            hints: [
              "What is the essential action a crane must perform with its load?",
              "Link steel's high coercivity to the inability to switch off.",
              "Choose a device that benefits from an always-on field.",
            ],
          },
        ],
      },

      // ── BANK QA PAPER 2 ───────────────────────────────────────
      {
        id: "phys-magnetism-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "The motor effect, Fleming's Left-Hand Rule and the d.c. motor.",
        questions: [
          {
            id: "phys-magnetism-bq2-01",
            question: "State Fleming's Left-Hand Rule, naming what each of the three fingers represents and the direction each should point.",
            marks: 3,
            modelAnswer:
              "Hold the thumb, first finger and second finger of the left hand mutually at right angles. The First finger points in the direction of the magnetic Field (N to S). The seCond finger points in the direction of the conventional Current (+ to −). The thuMb then points in the direction of the Motion (force/thrust) on the conductor.",
            markScheme: [
              "First finger = Field (N to S)",
              "seCond finger = Current (conventional, + to −)",
              "thuMb = Motion / force (fingers held mutually perpendicular)",
            ],
            commonError: "Mixing up the fingers, or using the right hand (the right hand is for the generator/induction rule).",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "warmup",
          },
          {
            id: "phys-magnetism-bq2-02",
            question: "A horizontal wire carries a current from west to east. It lies in a magnetic field that points from south to north (horizontally). (a) Use Fleming's Left-Hand Rule to find the direction of the force on the wire. (b) State what happens to the force if the current is reversed.",
            marks: 3,
            modelAnswer:
              "(a) First finger (Field) points north; second finger (Current) points east; the thumb (Motion) points vertically upward — so the force on the wire is directed upward. (b) If the current is reversed (now east to west), the force reverses direction too — it now points vertically downward.",
            markScheme: [
              "Correct application of Fleming's Left-Hand Rule (field N, current E)",
              "Force is directed upward",
              "Reversing the current reverses the force → downward",
            ],
            commonError: "Forgetting that reversing only the current (with the field unchanged) reverses the force direction.",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "core",
            hints: [
              "Set up your left hand: field north, current east.",
              "Read off the thumb direction for the force.",
              "Reversing one of field or current flips the force.",
            ],
          },
          {
            id: "phys-magnetism-bq2-03",
            question: "A straight wire of length 0.25 m lies perpendicular to a uniform magnetic field of flux density 0.30 T and carries a current of 8.0 A. (a) Calculate the force on the wire. (b) State and explain what the force becomes if the wire is rotated so that it lies parallel to the field.",
            marks: 4,
            modelAnswer:
              "(a) F = BIL = 0.30 × 8.0 × 0.25 = 0.60 N, in a direction perpendicular to both the field and the current (found by Fleming's Left-Hand Rule). (b) When the wire is parallel to the field the angle θ = 0°, so F = BIL sin 0° = 0 N. There is no force because there is no component of the current perpendicular to the field.",
            markScheme: [
              "F = BIL / F = 0.30 × 8.0 × 0.25",
              "F = 0.60 N (with unit)",
              "Force = 0 when wire is parallel to the field",
              "Reason: sin 0° = 0 / no perpendicular component of current",
            ],
            commonError: "Assuming the force is unchanged when the wire is turned parallel to the field — it actually drops to zero.",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "core",
            hints: [
              "Write F = BIL and substitute the values.",
              "Multiply 0.30 × 8.0 × 0.25.",
              "For (b), use F = BIL sin θ with θ = 0°.",
            ],
            solutions: [
              {
                label: "Direct substitution",
                steps: [
                  "(a) F = BIL = 0.30 T × 8.0 A × 0.25 m = 0.60 N",
                  "(b) Parallel: θ = 0°, F = BIL sin 0° = 0 N",
                ],
              },
            ],
          },
          {
            id: "phys-magnetism-bq2-04",
            question: "Describe the structure of a simple d.c. motor and explain how it produces continuous rotation. Your answer should refer to the coil, the magnetic field, the split-ring commutator and the brushes.",
            marks: 6,
            modelAnswer:
              "A simple d.c. motor has a rectangular coil of wire mounted on an axle so it can rotate between the poles of a permanent magnet, which provides the magnetic field. The ends of the coil are connected to a split-ring commutator (two half-rings), against which two carbon brushes press to carry current to the rotating coil from the supply. When current flows, the two opposite sides of the coil carry current in opposite directions, so by Fleming's Left-Hand Rule they experience forces in opposite directions — a couple that produces a turning effect (torque) and rotates the coil. Every half-turn, as the coil passes the vertical (dead-centre) position, the split-ring commutator swaps the connections, reversing the current in the coil. This keeps the torque acting in the same rotational direction, so the coil continues to rotate continuously in one direction.",
            markScheme: [
              "Coil mounted on an axle between the poles of a magnet (magnet supplies the field)",
              "Brushes press on the split-ring commutator to supply current to the coil",
              "Opposite sides of the coil carry current in opposite directions",
              "Forces on the two sides are opposite (Fleming's Left-Hand Rule) → couple/torque turns the coil",
              "Commutator reverses the current every half-turn (at the vertical position)",
              "This keeps the torque in the same direction → continuous rotation",
            ],
            commonError: "Saying the brushes reverse the current — it is the split-ring commutator that reverses the current; the brushes merely make sliding contact.",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "core",
            hints: [
              "Describe the parts: coil, magnet, commutator, brushes.",
              "Explain how opposite sides give opposite forces (a couple).",
              "State clearly what the commutator does every half-turn and why.",
            ],
          },
          {
            id: "phys-magnetism-bq2-05",
            question: "Explain what happens to the turning effect on the coil of a d.c. motor as it rotates from the position where its plane is parallel to the field to the position where its plane is perpendicular to the field. State where the torque is maximum and where it is zero.",
            marks: 4,
            modelAnswer:
              "When the plane of the coil is parallel to the field, the coil sides are perpendicular to the field and the forces on them act tangentially (at the greatest perpendicular distance from the axle), so the turning effect (torque) is at its maximum. As the coil rotates towards the position where its plane is perpendicular to the field, the line of action of the forces moves closer to the axle, so the torque decreases. When the plane is perpendicular to the field (the dead-centre position) the forces act along the plane of the coil (through/parallel to the axle line), giving zero turning effect. At this point the commutator reverses the current so the coil carries on past.",
            markScheme: [
              "Torque is maximum when the coil plane is parallel to the field",
              "Torque decreases as the coil rotates towards the perpendicular position",
              "Torque is zero when the coil plane is perpendicular to the field (dead centre)",
              "At the dead-centre the forces act through/along the axle line (no turning effect) / commutator reverses current",
            ],
            commonError: "Believing the force on the sides changes size during rotation — its magnitude stays the same (F = BIL); it is the perpendicular distance / line of action that changes the torque.",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "challenge",
            hints: [
              "Torque = force × perpendicular distance of the line of action from the axle.",
              "When is that perpendicular distance greatest, and when is it zero?",
              "The force size stays constant; the geometry changes the torque.",
            ],
          },
          {
            id: "phys-magnetism-bq2-06",
            question: "A rectangular coil of 50 turns measures 5.0 cm by 8.0 cm. It carries a current of 1.5 A in a uniform field of 0.20 T, with the plane of the coil parallel to the field. (a) Calculate the force on each 8.0 cm side. (b) Calculate the maximum torque on the coil. (c) State one change that would increase this torque.",
            marks: 7,
            modelAnswer:
              "(a) The 8.0 cm (0.080 m) sides are perpendicular to the field. Force per turn = BIL = 0.20 × 1.5 × 0.080 = 0.024 N. For 50 turns: F = 50 × 0.024 = 1.2 N on each 8.0 cm side.\n(b) The two 1.2 N forces form a couple. The perpendicular distance between them is the coil width = 5.0 cm = 0.050 m. Maximum torque = F × d = 1.2 × 0.050 = 0.060 N m.\n(c) Any one of: increase the current; increase the number of turns; use a stronger magnet (larger B); increase the coil area.",
            markScheme: [
              "Force per turn = BIL = 0.20 × 1.5 × 0.080 (use 0.080 m side)",
              "× 50 turns → F = 1.2 N per side",
              "Torque = force × perpendicular distance (the two forces form a couple)",
              "Perpendicular distance = coil width = 0.050 m",
              "Torque = 1.2 × 0.050",
              "= 0.060 N m",
              "One valid way to increase torque (more current / more turns / stronger B / larger area)",
            ],
            commonError: "Using the 5.0 cm side in the force calculation, or using the wrong dimension as the perpendicular distance for the torque.",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "challenge",
            hints: [
              "The force acts on the sides that are perpendicular to the field (the 8.0 cm sides).",
              "Force = BIL × number of turns.",
              "Torque of a couple = force × width of the coil (the perpendicular distance between the two forces).",
            ],
            solutions: [
              {
                label: "Force then torque",
                steps: [
                  "(a) F per turn = 0.20 × 1.5 × 0.080 = 0.024 N; × 50 = 1.2 N",
                  "(b) Torque = F × width = 1.2 × 0.050 = 0.060 N m",
                  "(c) e.g. increase current, turns, B, or coil area",
                ],
              },
            ],
          },
          {
            id: "phys-magnetism-bq2-07",
            question: "An electron beam (a flow of negative charge) travels horizontally to the right through a magnetic field that points into the page. (a) State the direction of the conventional current. (b) Use Fleming's Left-Hand Rule to find the direction of the force on the beam.",
            marks: 3,
            modelAnswer:
              "(a) Conventional current is in the opposite direction to the flow of negative electrons, so the conventional current is directed to the left. (b) Using Fleming's Left-Hand Rule: first finger (Field) points into the page; second finger (Current) points to the left; the thumb (Motion) then points downward — so the force on the beam is downward.",
            markScheme: [
              "Conventional current is opposite to electron flow → to the left",
              "Correct use of FLHR (field into page, current to the left)",
              "Force is directed downward",
            ],
            commonError: "Forgetting that electrons (negative) move opposite to the conventional current, which reverses the direction obtained from the rule.",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "challenge",
            hints: [
              "Conventional current points opposite to the electron flow.",
              "Set the second finger along the conventional current (to the left).",
              "First finger into the page; read off the thumb.",
            ],
            strategy: "Always convert electron flow into conventional current (opposite direction) before applying Fleming's Left-Hand Rule.",
          },
          {
            id: "phys-magnetism-bq2-08",
            question: "Two long parallel wires carry currents in the same direction. (a) State whether they attract or repel each other. (b) Explain your answer using the idea of each wire sitting in the magnetic field of the other.",
            marks: 4,
            modelAnswer:
              "(a) The wires attract each other. (b) Each wire produces a magnetic field around itself. The second wire sits in the field of the first and carries a current, so it experiences a force given by the motor effect (Fleming's Left-Hand Rule). When the currents are in the same direction, applying the rule shows the force on each wire points towards the other, so they attract. (If the currents were in opposite directions, the forces would point apart and the wires would repel.)",
            markScheme: [
              "Wires attract (currents in the same direction)",
              "Each wire creates a magnetic field around itself",
              "The other wire carries current in this field → experiences a motor-effect force",
              "Applying FLHR shows the forces point towards each other → attraction",
            ],
            commonError: "Assuming same-direction currents repel (like the rule for like charges) — parallel currents in the same direction actually attract.",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "challenge",
            hints: [
              "Each wire creates a circular field that the other wire sits in.",
              "Apply the motor effect to the second wire in the first wire's field.",
              "Same-direction currents give an attractive force.",
            ],
          },
          {
            id: "phys-magnetism-bq2-09",
            question: "State three factors that affect the size of the force on a current-carrying conductor in a magnetic field, and for each state how increasing it changes the force.",
            marks: 3,
            modelAnswer:
              "Using F = BIL: (1) the magnetic flux density B — a stronger field gives a larger force; (2) the current I — a larger current gives a larger force; (3) the length L of conductor in the field — a longer length in the field gives a larger force. (Also, the force is largest when the conductor is perpendicular to the field.)",
            markScheme: [
              "Magnetic flux density B — larger B → larger force",
              "Current I — larger current → larger force",
              "Length L in the field — longer length → larger force",
            ],
            commonError: "Listing 'voltage' as a factor — it is the current (not the voltage directly) that appears in F = BIL.",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "warmup",
          },
          {
            id: "phys-magnetism-bq2-10",
            question: "A loudspeaker uses the motor effect. (a) Briefly explain how a varying current in the speaker coil produces sound. (b) State why the current must vary (alternate) rather than being steady.",
            marks: 4,
            modelAnswer:
              "(a) The speaker has a coil attached to a paper cone, sitting in the field of a permanent magnet. When current flows through the coil it experiences a force (motor effect, Fleming's Left-Hand Rule). As the current varies in size and direction (matching the audio signal), the force on the coil varies, so the coil and cone move in and out. The moving cone pushes the air back and forth, creating sound waves. (b) The current must alternate so that the force, and hence the cone, moves both outward and inward, vibrating to produce a sound wave. A steady current would give a constant force that simply pushes the cone to one fixed position, producing no continuing sound.",
            markScheme: [
              "Coil (on cone) in a magnetic field experiences a force (motor effect)",
              "Varying current → varying force → coil and cone move in and out",
              "Moving cone makes the air vibrate → sound waves",
              "Current must alternate so the cone vibrates both ways (steady current = fixed position, no sound)",
            ],
            commonError: "Saying a steady current makes the cone vibrate — a constant current gives a constant force and a fixed cone position, so no sound is produced.",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "core",
            hints: [
              "Identify the coil, magnet and cone, and the force on the coil.",
              "Link the varying current to the in-and-out motion of the cone.",
              "Explain why the cone must move both ways to make sound.",
            ],
          },
        ],
      },

      // ── BANK QA PAPER 3 ───────────────────────────────────────
      {
        id: "phys-magnetism-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Electromagnetic induction, Lenz's Law and the a.c. generator.",
        questions: [
          {
            id: "phys-magnetism-bq3-01",
            question: "(a) State what is meant by electromagnetic induction. (b) State two ways an e.m.f. can be induced in a coil.",
            marks: 3,
            modelAnswer:
              "(a) Electromagnetic induction is the production of an e.m.f. (and a current, if the circuit is complete) in a conductor when the magnetic flux through it changes. (b) Any two: move a magnet into or out of the coil (relative motion of magnet and coil); change/switch the current in a nearby coil so the flux linking this coil changes; move/rotate the coil in a magnetic field.",
            markScheme: [
              "Induction = production of an e.m.f. when the magnetic flux (linking the conductor) changes",
              "One correct way (move magnet relative to coil)",
              "A second correct way (change current in a nearby coil / move or rotate coil in a field)",
            ],
            commonError: "Stating that a constant field or a stationary magnet induces an e.m.f. — the flux must be changing.",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            difficulty: "warmup",
          },
          {
            id: "phys-magnetism-bq3-02",
            question: "A magnet is pushed into a coil connected to a sensitive ammeter, and a current is recorded. (a) State three changes that would increase the size of the induced current. (b) State what the ammeter reads if the magnet is then held still inside the coil, and explain why.",
            marks: 5,
            modelAnswer:
              "(a) Any three: move the magnet faster (greater speed); use a stronger magnet (greater flux density); use a coil with more turns; (use a coil with a larger cross-sectional area). (b) The ammeter reads zero. With the magnet stationary, the magnetic flux through the coil is constant — there is no change in flux, so no e.m.f. is induced and no current flows.",
            markScheme: [
              "Move the magnet faster",
              "Use a stronger magnet / greater flux density",
              "Use more turns on the coil (or larger coil area)",
              "Ammeter reads zero when magnet is stationary",
              "No change in flux → no induced e.m.f./current",
            ],
            commonError: "Stating that a steady reading is obtained while the magnet is held inside — it is zero, because nothing is changing.",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            difficulty: "core",
            hints: [
              "Recall the factors that set the size of an induced e.m.f.",
              "For (b), ask whether the flux is changing when the magnet is still.",
              "No change in flux means no induced current.",
            ],
          },
          {
            id: "phys-magnetism-bq3-03",
            question: "State Lenz's Law and explain how it is a consequence of the conservation of energy. Use the example of a magnet being pushed north-pole-first towards a coil.",
            marks: 5,
            modelAnswer:
              "Lenz's Law states that the direction of an induced current is always such that it opposes the change in flux that produces it. When a magnet is pushed north-pole-first towards a coil, the induced current flows in a direction that makes the near face of the coil a north pole, which repels the incoming magnet and so opposes its motion. Because the induced current opposes the magnet's motion, work must be done by the person pushing the magnet against this repulsion. This work is the source of the electrical energy generated — so energy is conserved. If instead the induced current attracted the magnet, the magnet would accelerate and electrical energy would be produced from nothing, violating conservation of energy.",
            markScheme: [
              "Lenz's Law: induced current opposes the change (in flux) that causes it",
              "Magnet approaching N-first → coil near face becomes a N pole and repels it",
              "Induced current opposes the magnet's motion",
              "Work must be done against this opposition → source of the electrical energy",
              "If it aided the motion, energy would come from nothing (violates conservation of energy)",
            ],
            commonError: "Stating Lenz's Law correctly but failing to link the opposing force to the work done and hence to energy conservation.",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            difficulty: "core",
            hints: [
              "State the law first, then apply it to the approaching magnet.",
              "Which pole forms on the near face of the coil, and what does it do to the magnet?",
              "Connect the opposing force to the work done and where the electrical energy comes from.",
            ],
          },
          {
            id: "phys-magnetism-bq3-04",
            question: "Describe the structure and operation of a simple a.c. generator (alternator). Explain why the output is alternating and state the role of the slip rings.",
            marks: 6,
            modelAnswer:
              "A simple a.c. generator has a rectangular coil mounted on an axle so it can be rotated (by a mechanical input) in the uniform field between the poles of a magnet. The two ends of the coil are connected to two slip rings, against which carbon brushes press to connect the coil to the external circuit. As the coil is turned, its sides cut through magnetic field lines, inducing an e.m.f. (electromagnetic induction). As the coil rotates, the rate at which the sides cut field lines varies — it is maximum when the coil plane is parallel to the field and zero when the coil plane is perpendicular to the field. Moreover, each half-turn the sides move in the opposite sense across the field, so the induced e.m.f. reverses direction every half-turn — the output is therefore an alternating (sinusoidal) e.m.f. The slip rings keep each end of the coil permanently connected to the same brush, allowing the coil to rotate freely while passing the naturally alternating current out to the circuit (unlike a commutator, they do not reverse the connections).",
            markScheme: [
              "Coil rotated (mechanically) in a magnetic field between magnet poles",
              "Coil sides cut field lines → e.m.f. induced",
              "e.m.f. is maximum when coil plane is parallel to field, zero when perpendicular",
              "Each half-turn the sides cut the field in the opposite sense → e.m.f. reverses → alternating output",
              "Slip rings (two complete rings) maintain continuous contact via brushes",
              "Slip rings do not reverse the connection (unlike a commutator), so output stays a.c.",
            ],
            commonError: "Describing a commutator instead of slip rings — a generator that uses a commutator produces a (rectified) d.c.-like output, not a.c.",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            difficulty: "core",
            hints: [
              "Describe the rotating coil, the magnet and the slip rings/brushes.",
              "Explain when the e.m.f. is largest and when it is zero during a turn.",
              "Say why the e.m.f. reverses each half-turn and what the slip rings do.",
            ],
          },
          {
            id: "phys-magnetism-bq3-05",
            question: "A generator coil produces a peak output e.m.f. of 6.0 V when rotated at 25 revolutions per second. (a) State two changes that would increase the peak e.m.f. (b) Estimate the peak e.m.f. if the rotation speed is increased to 75 revolutions per second, with everything else unchanged.",
            marks: 4,
            modelAnswer:
              "(a) Any two: rotate the coil faster; use a stronger magnet (greater flux density); use a coil with more turns; (use a coil of larger area / add a soft-iron core to the coil). (b) Peak e.m.f. is proportional to the rotation speed. The speed increases by a factor of 75/25 = 3, so the peak e.m.f. = 6.0 × 3 = 18 V.",
            markScheme: [
              "Two valid ways to increase peak e.m.f. (faster rotation / stronger magnet / more turns / larger area)",
              "Recognise peak e.m.f. ∝ rotation speed",
              "Factor = 75/25 = 3",
              "Peak e.m.f. = 6.0 × 3 = 18 V",
            ],
            commonError: "Adding the speeds or treating the relationship as non-proportional — peak e.m.f. is directly proportional to rotation speed.",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            difficulty: "core",
            hints: [
              "List the factors that raise the induced e.m.f.",
              "Peak e.m.f. is directly proportional to rotation speed.",
              "Multiply by the factor 75/25 = 3.",
            ],
            solutions: [
              {
                label: "Proportional reasoning",
                steps: [
                  "Peak e.m.f. ∝ rotation speed",
                  "Speed factor = 75 / 25 = 3",
                  "New peak e.m.f. = 6.0 V × 3 = 18 V",
                ],
              },
            ],
          },
          {
            id: "phys-magnetism-bq3-06",
            question: "Sketch in words how the output e.m.f. of an a.c. generator varies during one complete rotation of the coil, starting from the position where the coil plane is parallel to the field. Mark where the e.m.f. is maximum and where it is zero.",
            marks: 4,
            modelAnswer:
              "Starting with the coil plane parallel to the field, the sides are cutting field lines at the fastest rate, so the e.m.f. is at its positive maximum. As the coil turns through a quarter-turn to where its plane is perpendicular to the field, the cutting rate falls to zero, so the e.m.f. falls to zero. Continuing to the next quarter-turn (plane parallel again, but sides now moving in the opposite sense), the e.m.f. rises to a maximum in the opposite (negative) direction. After three-quarters of a turn the e.m.f. is zero again, and after a full turn it is back to the positive maximum. The graph of e.m.f. against time is therefore a sine curve, with peaks when the coil plane is parallel to the field and zeros when it is perpendicular.",
            markScheme: [
              "e.m.f. is maximum when the coil plane is parallel to the field",
              "e.m.f. is zero when the coil plane is perpendicular to the field",
              "e.m.f. reverses direction (goes negative) after half a turn",
              "Output is a sine (sinusoidal) curve over one rotation",
            ],
            commonError: "Putting the maximum e.m.f. where the coil plane is perpendicular to the field — it is actually maximum when the plane is parallel (sides cutting field lines fastest).",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            difficulty: "challenge",
            hints: [
              "e.m.f. depends on the rate at which sides cut field lines.",
              "Identify the two positions: plane parallel (max) and plane perpendicular (zero).",
              "Track the sign through one full rotation to get a sine shape.",
            ],
          },
          {
            id: "phys-magnetism-bq3-07",
            question: "A straight horizontal wire is connected to a sensitive voltmeter. (a) Explain why a voltage is registered when the wire is moved vertically downward across a horizontal magnetic field. (b) State two ways to increase the induced voltage. (c) State what is read if the wire is moved parallel to the field lines, and why.",
            marks: 5,
            modelAnswer:
              "(a) Moving the wire downward across the field makes the wire cut through magnetic field lines, changing the flux linked with the circuit. This induces an e.m.f. (a voltage) across the wire by electromagnetic induction, registered by the voltmeter. (b) Any two: move the wire faster; use a stronger magnet (greater flux density); use a longer length of wire in the field. (c) The voltmeter reads zero. Moving the wire parallel to the field lines means it does not cut any field lines, so there is no change in flux and no e.m.f. is induced.",
            markScheme: [
              "Moving the wire makes it cut field lines / change the flux",
              "This induces an e.m.f. (voltage) by electromagnetic induction",
              "Two valid ways to increase it (faster / stronger field / longer wire)",
              "Voltmeter reads zero when wire moves parallel to the field lines",
              "Reason: no field lines cut / no change in flux → no e.m.f.",
            ],
            commonError: "Thinking any movement of the wire induces an e.m.f. — only motion that cuts field lines (a component perpendicular to the field) does.",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            difficulty: "core",
            hints: [
              "Link the wire's motion to cutting field lines.",
              "Recall the factors that increase induced e.m.f.",
              "If the wire moves along the field lines, does it cut any?",
            ],
          },
          {
            id: "phys-magnetism-bq3-08",
            question: "Compare a d.c. motor and an a.c. generator. State (i) one similarity in their construction, (ii) the key difference in their electrical contacts, and (iii) the energy conversion that each carries out.",
            marks: 5,
            modelAnswer:
              "(i) Similarity: both have a coil that rotates in the magnetic field of a magnet, mounted on an axle with brushes making contact (the basic construction is almost identical). (ii) Key difference: the d.c. motor uses a split-ring commutator (which reverses the current every half-turn), whereas the a.c. generator uses slip rings (two complete rings that do not reverse the connection). (iii) Energy conversion: a motor converts electrical energy into kinetic (mechanical) energy; a generator converts kinetic (mechanical) energy into electrical energy — the reverse process.",
            markScheme: [
              "Similarity: both have a coil rotating in a magnetic field (similar construction)",
              "Motor uses a split-ring commutator",
              "Generator uses slip rings (not a commutator)",
              "Motor: electrical → kinetic energy",
              "Generator: kinetic → electrical energy",
            ],
            commonError: "Saying the generator uses a commutator — it uses slip rings so the output is true a.c.",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            difficulty: "warmup",
          },
          {
            id: "phys-magnetism-bq3-09",
            question: "(Challenge) A bar magnet is dropped, north pole downward, straight through a horizontal copper ring. (a) State the direction of the induced current in the ring as the magnet approaches (viewed from above), and explain using Lenz's Law. (b) State and explain the direction of the induced current as the magnet falls away below the ring. (c) State what happens to the magnet's acceleration compared with free fall.",
            marks: 6,
            modelAnswer:
              "(a) As the N pole approaches from above, the downward flux through the ring increases. By Lenz's Law the induced current opposes this increase, so it flows to make the top of the ring a north pole (to repel the approaching magnet). Viewed from above, this induced current flows anticlockwise. (b) Once the magnet has passed through and is falling away below, the downward flux through the ring is decreasing. The induced current now opposes the decrease, flowing to make the bottom of the ring a south pole (to attract the receding magnet and try to keep it). Viewed from above, the current now flows clockwise — the opposite direction. (c) In both stages the induced currents oppose the magnet's motion (repelling it on the way in, attracting it back on the way out), so they exert a retarding force. The magnet's downward acceleration is therefore less than g (less than free fall).",
            markScheme: [
              "Approaching: flux increasing → induced current makes top of ring a N pole (repels magnet)",
              "Approaching current is anticlockwise viewed from above",
              "Receding: flux decreasing → induced current makes bottom of ring a S pole (attracts magnet)",
              "Receding current is clockwise viewed from above (opposite direction)",
              "Induced currents oppose the motion in both stages (Lenz's Law)",
              "Magnet's acceleration is less than g / less than free fall",
            ],
            commonError: "Giving the same current direction for approach and recession — the flux is increasing in one case and decreasing in the other, so the induced current reverses.",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            difficulty: "challenge",
            hints: [
              "Decide whether the downward flux is increasing or decreasing in each stage.",
              "Apply Lenz's Law: the induced current opposes the change in flux.",
              "Both effects oppose the magnet's motion, so think about the net force versus gravity.",
            ],
          },
          {
            id: "phys-magnetism-bq3-10",
            question: "(Challenge) Explain why Fleming's Left-Hand Rule and Fleming's Right-Hand Rule apply to different situations. State which rule applies to a motor and which to a generator, and explain the physical difference between the two situations.",
            marks: 5,
            modelAnswer:
              "Fleming's Left-Hand Rule applies to the motor effect (a motor): here a current is supplied to a conductor in a magnetic field and the rule gives the direction of the resulting force (motion). The cause is the current; the effect is the force — electrical energy is converted to kinetic energy. Fleming's Right-Hand Rule applies to electromagnetic induction (a generator/dynamo): here a conductor is moved through a magnetic field and the rule gives the direction of the induced current. The cause is the motion; the effect is the current — kinetic energy is converted to electrical energy. The two situations are physically reversed (which quantity is the cause and which the effect is swapped), so different hands are needed; using the wrong hand would give the wrong direction. Both, however, are consistent with the same underlying physics (the force on moving charges in a field).",
            markScheme: [
              "Left-Hand Rule applies to the motor (motor effect): gives the force direction",
              "Motor: current is the cause, force/motion the effect (electrical → kinetic)",
              "Right-Hand Rule applies to the generator (induction): gives the induced current direction",
              "Generator: motion is the cause, current the effect (kinetic → electrical)",
              "The cause–effect roles are reversed, so a different hand is needed",
            ],
            commonError: "Treating the two rules as interchangeable — they give opposite results because cause and effect are swapped between motor and generator.",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            difficulty: "challenge",
            hints: [
              "Match each hand to motor or generator.",
              "Identify the cause and the effect in each situation.",
              "Explain how reversing cause and effect requires the other hand.",
            ],
            strategy: "Remember: Left hand = motor (current in, motion out); Right hand = generator (motion in, current out).",
          },
        ],
      },

      // ── BANK QA PAPER 4 ───────────────────────────────────────
      {
        id: "phys-magnetism-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Transformers, the turns ratio, power and the National Grid.",
        questions: [
          {
            id: "phys-magnetism-bq4-01",
            question: "(a) State the turns-ratio equation for a transformer. (b) State the ideal-transformer power equation. (c) State why a transformer does not work with direct current.",
            marks: 4,
            modelAnswer:
              "(a) Vp/Vs = Np/Ns (the ratio of primary to secondary voltage equals the ratio of primary to secondary turns). (b) For an ideal transformer, Vp × Ip = Vs × Is (input power = output power). (c) A steady direct current produces a constant magnetic flux in the core. Because the flux is not changing, no e.m.f. is induced in the secondary coil, so the transformer does not work with d.c.",
            markScheme: [
              "Vp/Vs = Np/Ns",
              "Vp × Ip = Vs × Is (ideal transformer)",
              "d.c. gives constant flux → no changing flux",
              "No change in flux → no induced e.m.f. in secondary",
            ],
            commonError: "Writing the turns ratio upside down (Vp/Vs = Ns/Np) — primary voltage goes with primary turns.",
            guideRef: "Transformers and the National Grid",
            difficulty: "warmup",
          },
          {
            id: "phys-magnetism-bq4-02",
            question: "A transformer has 1200 turns on the primary and 100 turns on the secondary. The primary is connected to a 240 V a.c. supply. (a) Calculate the secondary voltage. (b) State whether this is a step-up or step-down transformer.",
            marks: 3,
            modelAnswer:
              "(a) Vs = Vp × (Ns/Np) = 240 × (100/1200) = 240 × 0.0833 = 20 V. (b) The secondary voltage (20 V) is lower than the primary voltage (240 V), so this is a step-down transformer.",
            markScheme: [
              "Vs = Vp × Ns/Np / Vs = 240 × (100/1200)",
              "Vs = 20 V (with unit)",
              "Step-down transformer (Vs < Vp)",
            ],
            commonError: "Inverting the ratio and getting 2880 V — check that fewer secondary turns must give a lower voltage.",
            guideRef: "Transformers and the National Grid",
            difficulty: "warmup",
            solutions: [
              {
                label: "Turns-ratio substitution",
                steps: [
                  "Vp/Vs = Np/Ns → Vs = Vp × Ns/Np",
                  "Vs = 240 × (100/1200) = 240 × 0.0833 = 20 V",
                  "Vs < Vp → step-down",
                ],
              },
            ],
          },
          {
            id: "phys-magnetism-bq4-03",
            question: "An ideal transformer steps up 230 V to 4600 V. The primary current is 8.0 A. (a) Calculate the turns ratio Np : Ns. (b) Calculate the secondary current.",
            marks: 4,
            modelAnswer:
              "(a) Np/Ns = Vp/Vs = 230/4600 = 1/20, so Np : Ns = 1 : 20. (b) For an ideal transformer VpIp = VsIs, so Is = VpIp/Vs = (230 × 8.0)/4600 = 1840/4600 = 0.40 A. (Check: voltage stepped up ×20, so current stepped down ×20: 8.0/20 = 0.40 A.)",
            markScheme: [
              "Np/Ns = Vp/Vs = 230/4600 = 1 : 20",
              "Use VpIp = VsIs, rearranged Is = VpIp/Vs",
              "Is = (230 × 8.0)/4600",
              "Is = 0.40 A",
            ],
            commonError: "Using the turns ratio the wrong way for current — current changes in the opposite sense to voltage (steps down when voltage steps up).",
            guideRef: "Transformers and the National Grid",
            difficulty: "core",
            hints: [
              "Turns ratio: Np/Ns = Vp/Vs.",
              "For current use the power equation VpIp = VsIs.",
              "Rearrange to Is = VpIp/Vs and substitute.",
            ],
            solutions: [
              {
                label: "Ratio and power method",
                steps: [
                  "(a) Np : Ns = Vp : Vs = 230 : 4600 = 1 : 20",
                  "(b) Is = VpIp/Vs = (230 × 8.0)/4600 = 1840/4600 = 0.40 A",
                ],
              },
            ],
          },
          {
            id: "phys-magnetism-bq4-04",
            question: "A laptop charger contains a transformer that steps 230 V mains down to 19 V. The laptop draws 3.5 A at 19 V. Assuming the transformer is ideal, (a) calculate the output power, and (b) calculate the current drawn from the mains.",
            marks: 4,
            modelAnswer:
              "(a) Output power = Vs × Is = 19 × 3.5 = 66.5 W ≈ 67 W. (b) For an ideal transformer, input power = output power = 66.5 W. Primary current Ip = power/Vp = 66.5/230 = 0.289 A ≈ 0.29 A. (Equivalently Ip = VsIs/Vp = (19 × 3.5)/230 = 0.29 A.)",
            markScheme: [
              "Output power = Vs × Is = 19 × 3.5",
              "= 66.5 W (allow 67 W)",
              "Ip = power/Vp = 66.5/230 (or VsIs/Vp)",
              "Ip = 0.29 A (allow 0.289 A)",
            ],
            commonError: "Using the secondary current (3.5 A) as the mains current — the primary current is much smaller because the voltage is higher.",
            guideRef: "Transformers and the National Grid",
            difficulty: "core",
            hints: [
              "Output power = Vs × Is.",
              "For an ideal transformer, input power equals output power.",
              "Ip = input power / Vp.",
            ],
            solutions: [
              {
                label: "Power then current",
                steps: [
                  "(a) P = Vs × Is = 19 × 3.5 = 66.5 W",
                  "(b) Ip = P/Vp = 66.5/230 = 0.29 A",
                ],
              },
            ],
          },
          {
            id: "phys-magnetism-bq4-05",
            question: "Explain why electrical energy is transmitted across the country at very high voltage. Refer to the relationships P = VI and P_loss = I²R in your answer.",
            marks: 4,
            modelAnswer:
              "For a given amount of power P to be transmitted, P = VI shows that increasing the transmission voltage V reduces the current I (since their product is fixed). The power wasted as heat in the cables is given by P_loss = I²R, where R is the cable resistance. Because this loss depends on the square of the current, even a modest reduction in current produces a large reduction in wasted power. Transmitting at very high voltage therefore makes the current small and keeps the I²R losses low, so far more of the generated power reaches consumers. (Step-up transformers raise the voltage for transmission; step-down transformers lower it again for safe use.)",
            markScheme: [
              "For fixed power, higher voltage means lower current (P = VI)",
              "Cable loss P_loss = I²R depends on the current",
              "Loss depends on I² so reducing I reduces loss greatly",
              "High voltage → small current → low I²R loss → more power delivered",
            ],
            commonError: "Saying high voltage reduces loss directly — it is the reduced current (a consequence of high voltage) that reduces the I²R loss.",
            guideRef: "Transformers and the National Grid",
            difficulty: "core",
            hints: [
              "Use P = VI to relate voltage and current for fixed power.",
              "Use P_loss = I²R for the cable loss.",
              "Emphasise the squared dependence on current.",
            ],
          },
          {
            id: "phys-magnetism-bq4-06",
            question: "A power station transmits 2.0 MW of power along cables of total resistance 5.0 Ω at a transmission voltage of 100 kV. (a) Calculate the current in the cables. (b) Calculate the power lost in the cables. (c) Calculate the percentage of the transmitted power that is lost.",
            marks: 6,
            modelAnswer:
              "(a) I = P/V = 2.0 × 10⁶ / 100 × 10³ = 2 000 000/100 000 = 20 A.\n(b) P_loss = I²R = 20² × 5.0 = 400 × 5.0 = 2000 W = 2.0 kW.\n(c) Percentage lost = (P_loss/P) × 100 = (2000 / 2 000 000) × 100 = 0.10%.",
            markScheme: [
              "I = P/V = 2.0×10⁶ / 100×10³",
              "I = 20 A",
              "P_loss = I²R = 20² × 5.0",
              "P_loss = 2000 W / 2.0 kW",
              "Percentage = (2000/2 000 000) × 100",
              "= 0.10% (allow 0.1%)",
            ],
            commonError: "Using P = VI with 100 kV to find the cable loss — cable loss must use P_loss = I²R with the cable resistance, not the transmission voltage.",
            guideRef: "Transformers and the National Grid",
            difficulty: "core",
            hints: [
              "Find the current with I = P/V.",
              "Use P_loss = I²R for the cable loss (not P = VI).",
              "Percentage = (loss / transmitted power) × 100.",
            ],
            solutions: [
              {
                label: "Three-step calculation",
                steps: [
                  "(a) I = P/V = 2.0×10⁶ / 100×10³ = 20 A",
                  "(b) P_loss = I²R = (20)² × 5.0 = 400 × 5.0 = 2000 W",
                  "(c) % = 2000 / 2 000 000 × 100 = 0.10%",
                ],
              },
            ],
          },
          {
            id: "phys-magnetism-bq4-07",
            question: "Describe the construction of a transformer and explain how an alternating voltage applied to the primary coil produces an alternating voltage in the secondary coil.",
            marks: 6,
            modelAnswer:
              "A transformer consists of two coils — a primary coil (Np turns) and a secondary coil (Ns turns) — wound on the same soft-iron core, which forms a closed loop linking the two coils. When an alternating voltage is applied to the primary coil, an alternating current flows in it, which produces a continuously changing magnetic flux in the soft-iron core. The soft-iron core channels (concentrates) this flux so that nearly all of it passes through the secondary coil. Because the flux through the secondary coil is continually changing, an alternating e.m.f. (voltage) is induced in the secondary by electromagnetic induction. The size of the secondary voltage depends on the number of turns: Vp/Vs = Np/Ns. (The core is soft iron because it magnetises and demagnetises easily, following the alternating flux with little energy loss.)",
            markScheme: [
              "Primary and secondary coils wound on a (shared) soft-iron core",
              "A.c. in the primary produces a changing/alternating magnetic flux",
              "Soft-iron core channels/concentrates the flux through the secondary",
              "Changing flux through the secondary induces an e.m.f. (electromagnetic induction)",
              "Induced e.m.f. is alternating because the flux is continually changing",
              "Voltage depends on turns: Vp/Vs = Np/Ns",
            ],
            commonError: "Saying current flows directly from the primary to the secondary — the coils are not electrically connected; energy is transferred only by the changing magnetic flux.",
            guideRef: "Transformers and the National Grid",
            difficulty: "core",
            hints: [
              "Describe the two coils and the soft-iron core.",
              "Explain how a.c. in the primary makes a changing flux.",
              "Link the changing flux through the secondary to the induced alternating e.m.f.",
            ],
          },
          {
            id: "phys-magnetism-bq4-08",
            question: "A real transformer is 95% efficient. Its primary draws 4.0 A from a 230 V supply. (a) Calculate the input power. (b) Calculate the useful output power. (c) State what happens to the 'lost' power and give one reason a real transformer is not 100% efficient.",
            marks: 5,
            modelAnswer:
              "(a) Input power = Vp × Ip = 230 × 4.0 = 920 W.\n(b) Output power = efficiency × input power = 0.95 × 920 = 874 W.\n(c) The 'lost' power (920 − 874 = 46 W) is dissipated as heat (and a little as sound/vibration). One reason for less than 100% efficiency: resistance of the copper coils causes I²R heating; OR eddy currents induced in the core dissipate energy as heat; OR repeated magnetisation/demagnetisation of the core (hysteresis) wastes energy; OR some flux leaks and does not link the secondary.",
            markScheme: [
              "Input power = Vp × Ip = 230 × 4.0 = 920 W",
              "Output power = 0.95 × 920",
              "Output power = 874 W",
              "Lost power becomes heat (and some sound) in the transformer",
              "One valid reason for inefficiency (coil resistance/I²R / eddy currents / hysteresis / flux leakage)",
            ],
            commonError: "Dividing by 0.95 instead of multiplying — when the input is known, output = efficiency × input.",
            guideRef: "Transformers and the National Grid",
            difficulty: "core",
            hints: [
              "Input power = Vp × Ip.",
              "Output = efficiency (as a decimal) × input power.",
              "Recall the energy-loss mechanisms in a real transformer.",
            ],
            solutions: [
              {
                label: "Efficiency calculation",
                steps: [
                  "(a) P_in = Vp × Ip = 230 × 4.0 = 920 W",
                  "(b) P_out = 0.95 × 920 = 874 W",
                  "(c) Loss = 920 − 874 = 46 W as heat; due to coil resistance / eddy currents / hysteresis / flux leakage",
                ],
              },
            ],
          },
          {
            id: "phys-magnetism-bq4-09",
            question: "(Challenge) A town requires 5.0 MW of power. It is supplied through cables of total resistance 0.80 Ω. Compare transmitting this power at 25 kV with transmitting it at 250 kV by calculating, for each, (a) the cable current and (b) the power lost in the cables. (c) State the factor by which the loss is reduced and explain why high voltage is used.",
            marks: 8,
            modelAnswer:
              "At 25 kV: (a) I = P/V = 5.0 × 10⁶ / 25 × 10³ = 200 A. (b) P_loss = I²R = 200² × 0.80 = 40 000 × 0.80 = 32 000 W = 32 kW.\nAt 250 kV: (a) I = P/V = 5.0 × 10⁶ / 250 × 10³ = 20 A. (b) P_loss = I²R = 20² × 0.80 = 400 × 0.80 = 320 W = 0.32 kW.\n(c) The loss is reduced from 32 000 W to 320 W — a factor of 100. Raising the voltage ×10 reduced the current ×10, and because P_loss = I²R depends on the square of the current, the loss fell by 10² = 100. High voltage is used because it minimises the current and therefore the I²R heating losses in the cables, so much more of the power reaches consumers.",
            markScheme: [
              "At 25 kV: I = 5.0×10⁶ / 25×10³ = 200 A",
              "At 25 kV: P_loss = 200² × 0.80 = 32 000 W / 32 kW",
              "At 250 kV: I = 5.0×10⁶ / 250×10³ = 20 A",
              "At 250 kV: P_loss = 20² × 0.80 = 320 W",
              "Loss reduced by a factor of 100",
              "Because voltage ×10 → current ÷10 and P_loss ∝ I² → ÷100",
              "High voltage minimises current and so the I²R losses",
            ],
            commonError: "Concluding the loss falls by a factor of 10 (same as the voltage) — it falls by 10² = 100 because loss depends on the square of the current.",
            guideRef: "Transformers and the National Grid",
            difficulty: "challenge",
            hints: [
              "For each voltage, find the current with I = P/V.",
              "Then find each loss with P_loss = I²R.",
              "Compare the two losses; note P_loss ∝ I² so a ×10 current change gives ×100 in loss.",
            ],
            solutions: [
              {
                label: "Compare two voltages",
                steps: [
                  "25 kV: I = 5.0×10⁶/25×10³ = 200 A; P_loss = 200²×0.80 = 32 000 W",
                  "250 kV: I = 5.0×10⁶/250×10³ = 20 A; P_loss = 20²×0.80 = 320 W",
                  "Reduction factor = 32 000/320 = 100",
                  "Voltage ×10 → current ÷10 → loss ÷100 (since P_loss ∝ I²)",
                ],
              },
            ],
          },
          {
            id: "phys-magnetism-bq4-10",
            question: "(Challenge) A transformer steps 240 V up to 9600 V. (a) Calculate the turns ratio Np : Ns. (b) The primary coil has 500 turns; calculate the number of secondary turns. (c) The transformer supplies 0.50 A to a load at 9600 V. Assuming it is ideal, calculate the primary current. (d) The same transformer is connected to a 240 V battery (d.c.) instead of an a.c. supply. State and explain the secondary voltage.",
            marks: 8,
            modelAnswer:
              "(a) Np/Ns = Vp/Vs = 240/9600 = 1/40, so Np : Ns = 1 : 40.\n(b) Ns = Np × (Vs/Vp) = 500 × (9600/240) = 500 × 40 = 20 000 turns.\n(c) For an ideal transformer VpIp = VsIs, so Ip = VsIs/Vp = (9600 × 0.50)/240 = 4800/240 = 20 A.\n(d) The secondary voltage is zero (after any brief initial pulse). A battery gives a steady direct current, which produces a constant magnetic flux in the core. Because the flux is not changing, no e.m.f. is induced in the secondary, so the output voltage is zero.",
            markScheme: [
              "Np : Ns = 240 : 9600 = 1 : 40",
              "Ns = 500 × (9600/240) = 500 × 40",
              "Ns = 20 000 turns",
              "Ip = VsIs/Vp = (9600 × 0.50)/240",
              "Ip = 20 A",
              "With d.c.: secondary voltage is zero",
              "Reason: steady d.c. → constant flux → no change in flux → no induced e.m.f.",
            ],
            commonError: "Assuming the transformer would step the battery voltage up to 9600 V — transformers do not work with steady d.c. because the flux is constant.",
            guideRef: "Transformers and the National Grid",
            difficulty: "challenge",
            hints: [
              "Turns ratio: Np/Ns = Vp/Vs.",
              "Find Ns from Ns = Np × Vs/Vp.",
              "Use VpIp = VsIs for the primary current; then recall what a transformer does on d.c.",
            ],
            solutions: [
              {
                label: "Full transformer analysis",
                steps: [
                  "(a) Np : Ns = 240 : 9600 = 1 : 40",
                  "(b) Ns = 500 × (9600/240) = 500 × 40 = 20 000 turns",
                  "(c) Ip = VsIs/Vp = (9600 × 0.50)/240 = 4800/240 = 20 A",
                  "(d) d.c. → constant flux → no induced e.m.f. → secondary voltage = 0 V",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
