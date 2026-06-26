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
      {
        id: "phys-magnetism-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Permanent magnets, magnetic materials, fields and induced magnetism.",
        questions: [
          {
            id: "phys-magnetism-bm1-01",
            question: "Which list contains only magnetic materials?",
            options: [
              "Iron, copper, cobalt",
              "Iron, steel, nickel",
              "Aluminium, nickel, cobalt",
              "Steel, brass, iron",
            ],
            answerIndex: 1,
            explanation: "The magnetic materials at IGCSE are iron, steel, nickel and cobalt. Copper, aluminium and brass are all non-magnetic, so only the list iron, steel, nickel contains magnetic materials throughout.",
            difficulty: "warmup",
            guideRef: "Magnets, Poles and Magnetic Fields",
          },
          {
            id: "phys-magnetism-bm1-02",
            question: "Two magnets are arranged so that a north pole faces a north pole. What do they do?",
            options: ["Repel", "Attract", "Neither attract nor repel", "Attract only if iron is between them"],
            answerIndex: 0,
            explanation: "Like poles repel. Two north poles facing each other are like poles, so they repel one another.",
            difficulty: "warmup",
            guideRef: "Magnets, Poles and Magnetic Fields",
          },
          {
            id: "phys-magnetism-bm1-03",
            question: "Which statement about magnetic field lines is correct?",
            options: [
              "They run from S to N outside the magnet",
              "They can cross one another where the field is strong",
              "They run from N to S outside the magnet and never cross",
              "They are closest together where the field is weakest",
            ],
            answerIndex: 2,
            explanation: "Outside a magnet, field lines run from N to S. They never cross (the field has a single direction at each point) and they are closest together where the field is strongest.",
            difficulty: "warmup",
            guideRef: "Magnets, Poles and Magnetic Fields",
          },
          {
            id: "phys-magnetism-bm1-04",
            question: "An unmagnetised steel bar is stroked repeatedly in one direction with the N pole of a magnet, then the magnet is removed. What is the result?",
            options: [
              "The steel keeps no magnetism because the magnet was removed",
              "The steel becomes a temporary magnet that loses its magnetism instantly",
              "The steel becomes a permanent magnet and retains its magnetism",
              "The steel is now non-magnetic",
            ],
            answerIndex: 2,
            explanation: "Steel is a magnetically hard material. Stroking aligns its domains, and because steel has high coercivity it retains the magnetism after the magnet is removed — it becomes a permanent magnet.",
            difficulty: "core",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            hints: [
              "Distinguish magnetically hard (steel) from soft (iron) materials.",
              "Which one keeps its magnetism after the magnetising field is removed?",
              "Steel is hard → high coercivity → permanent magnet.",
            ],
          },
          {
            id: "phys-magnetism-bm1-05",
            question: "A piece of soft iron is brought near a magnet and becomes magnetised. The end nearest the magnet's S pole becomes which pole, and what happens when the magnet is taken far away?",
            options: [
              "An N pole; the iron keeps its magnetism",
              "An S pole; the iron keeps its magnetism",
              "An N pole; the iron loses almost all its magnetism",
              "An S pole; the iron loses almost all its magnetism",
            ],
            answerIndex: 2,
            explanation: "By induced magnetism the nearest end becomes the opposite pole, so next to an S pole it becomes an N pole (unlike poles attract). Soft iron is magnetically soft, so it loses almost all of its induced magnetism once the external field is removed.",
            difficulty: "core",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            hints: [
              "Induced magnetism: the near end becomes the opposite (unlike) pole.",
              "Opposite an S pole, the induced pole is N.",
              "Soft iron has low coercivity → loses magnetism when the field is removed.",
            ],
          },
          {
            id: "phys-magnetism-bm1-06",
            question: "Two bar magnets are placed end to end with a small gap, N pole facing S pole. Which best describes the field in the gap between them?",
            options: [
              "Zero everywhere (a neutral region)",
              "Roughly uniform: parallel, evenly-spaced lines from the N pole to the S pole",
              "Field lines that bow outward away from the gap",
              "Circular field lines around the gap",
            ],
            answerIndex: 1,
            explanation: "Between unlike poles (N facing S), field lines run straight across the gap from N to S, evenly spaced and parallel — a nearly uniform field. (Bowing-out lines and a neutral point occur between like poles.)",
            difficulty: "core",
            guideRef: "Magnets, Poles and Magnetic Fields",
            hints: [
              "Recall the difference between the field between unlike poles and between like poles.",
              "Unlike poles: lines go straight across; like poles: lines bow out with a neutral point.",
              "N facing S → unlike poles → uniform field.",
            ],
          },
          {
            id: "phys-magnetism-bm1-07",
            question: "A plotting compass is used to map the field of a bar magnet. The compass needle's north end points along the field. Where the field is strongest, the compass...",
            options: [
              "responds most weakly and turns slowly",
              "spins continuously",
              "always points to the Earth's geographic north",
              "aligns most strongly and definitely with the field direction",
            ],
            answerIndex: 3,
            explanation: "Where the magnet's field is strongest (field lines closest together, near the poles), it dominates over the weak Earth field, so the compass aligns strongly and definitely along the magnet's field direction.",
            difficulty: "core",
            guideRef: "Magnets, Poles and Magnetic Fields",
            hints: [
              "The compass needle aligns with the resultant magnetic field.",
              "Near the poles the magnet's field is much stronger than the Earth's.",
              "Stronger field → more definite alignment.",
            ],
          },
          {
            id: "phys-magnetism-bm1-08",
            question: "The Earth behaves as if it contains a bar magnet. A freely-suspended compass needle's north pole points towards the Earth's geographic North. This means that, magnetically, the Earth's geographic North acts as a:",
            options: ["magnetic north pole", "magnetic south pole", "neutral point", "non-magnetic region"],
            answerIndex: 1,
            explanation: "A compass needle's north end is attracted towards the Earth's geographic North, so by 'unlike poles attract' the Earth's geographic North must be a magnetic south pole.",
            difficulty: "challenge",
            guideRef: "Magnets, Poles and Magnetic Fields",
            hints: [
              "Use 'unlike poles attract'.",
              "The compass NORTH end is attracted to geographic North.",
              "For attraction, geographic North must be the opposite pole — a magnetic south.",
            ],
          },
          {
            id: "phys-magnetism-bm1-09",
            question: "Why is steel, not soft iron, used to make a permanent magnet, while soft iron, not steel, is used for an electromagnet core?",
            options: [
              "Steel is cheaper and soft iron is stronger",
              "Steel retains magnetism (magnetically hard); soft iron magnetises and demagnetises easily (magnetically soft)",
              "Steel is non-magnetic and soft iron is magnetic",
              "Soft iron retains magnetism; steel loses it quickly",
            ],
            answerIndex: 1,
            explanation: "A permanent magnet must keep its magnetism, so it uses a magnetically hard material (steel). An electromagnet core must switch on and off, so it uses a magnetically soft material (soft iron) that magnetises strongly when current flows and demagnetises when it stops.",
            difficulty: "challenge",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            hints: [
              "Match the property to the job: 'keep magnetism' vs 'switchable magnetism'.",
              "Hard (steel) = retains; soft (iron) = easily magnetised and demagnetised.",
              "Permanent magnet wants retention; electromagnet core wants switchability.",
            ],
          },
          {
            id: "phys-magnetism-bm1-10",
            question: "A magnet is repeatedly cut into smaller and smaller pieces. What is true of each tiny piece?",
            options: [
              "Eventually a single isolated north pole is obtained",
              "Each piece is a complete magnet with its own N and S pole",
              "The pieces become non-magnetic once small enough",
              "Half the pieces are N poles and half are S poles",
            ],
            answerIndex: 1,
            explanation: "Magnetic poles always occur in N–S pairs. Cutting a magnet never isolates a single pole — every piece, however small, is a complete magnet with both a north and a south pole.",
            difficulty: "warmup",
            guideRef: "Magnets, Poles and Magnetic Fields",
          },
        ],
      },
      {
        id: "phys-magnetism-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "The magnetic effect of a current, solenoids and electromagnet uses.",
        questions: [
          {
            id: "phys-magnetism-bm2-01",
            question: "A current flows through a long straight vertical wire. The magnetic field lines around the wire are:",
            options: [
              "straight lines pointing along the wire",
              "concentric circles in planes at right angles to the wire",
              "radial lines pointing outward from the wire",
              "loops shaped like a bar magnet's field",
            ],
            answerIndex: 1,
            explanation: "The field around a straight current-carrying wire forms concentric circles centred on the wire, lying in planes perpendicular to it. The lines are closer together near the wire (stronger field).",
            difficulty: "warmup",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
          },
          {
            id: "phys-magnetism-bm2-02",
            question: "A current flows vertically upward through a straight wire. Using the right-hand grip rule (thumb points along the conventional current), the field lines circle the wire in which sense when viewed from above?",
            options: ["Clockwise", "Anticlockwise", "There is no field", "Up and down along the wire"],
            answerIndex: 1,
            explanation: "Grip the wire with the right hand, thumb pointing up (current direction); the fingers curl anticlockwise when viewed from above. So the field circulates anticlockwise as seen from the top.",
            difficulty: "core",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            hints: [
              "Use the right-hand grip rule: thumb = conventional current direction.",
              "Current is upward, so thumb points up.",
              "Curl your fingers — viewed from above (looking down the thumb tip) they go anticlockwise.",
            ],
          },
          {
            id: "phys-magnetism-bm2-03",
            question: "Which of these increases the strength of the magnetic field produced by a solenoid?",
            options: [
              "Reducing the current in the coil",
              "Removing the soft-iron core",
              "Increasing the number of turns per unit length",
              "Reversing the current direction",
            ],
            answerIndex: 2,
            explanation: "Solenoid field strength increases with more current, more turns (turns per unit length), or by adding a soft-iron core. Reversing the current only swaps the N and S ends; it does not change the field strength.",
            difficulty: "warmup",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
          },
          {
            id: "phys-magnetism-bm2-04",
            question: "Looking at one end of a solenoid, the conventional current flows anticlockwise around the coil. Which pole faces you at that end?",
            options: ["North pole", "South pole", "It depends on the core material", "No pole forms at the ends"],
            answerIndex: 0,
            explanation: "Using the end rule: if the current appears to flow anticlockwise when you look at that end, the letter 'N' can be traced (aNticlockwise = North), so that end is a north pole. (Clockwise = South.)",
            difficulty: "core",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            hints: [
              "Use the end rule for a solenoid.",
              "Anticlockwise current (as you look at the end) → traces an N.",
              "Clockwise → S. Here it is anticlockwise.",
            ],
          },
          {
            id: "phys-magnetism-bm2-05",
            question: "In a relay, the purpose of the electromagnet is to:",
            options: [
              "carry the large current to the load directly",
              "step up the voltage of the control circuit",
              "use a small control current to switch a separate, larger-current circuit",
              "generate an alternating current",
            ],
            answerIndex: 2,
            explanation: "A relay lets a small control current energise an electromagnet, which moves an armature to close (or open) the contacts of a separate, electrically isolated high-current circuit. This provides isolation and lets a weak signal switch a powerful load.",
            difficulty: "core",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            hints: [
              "Think about why a relay has two separate circuits.",
              "The control circuit current is small; the switched circuit current is large.",
              "The electromagnet links them magnetically, keeping them electrically isolated.",
            ],
          },
          {
            id: "phys-magnetism-bm2-06",
            question: "A scrapyard crane uses an electromagnet rather than a permanent magnet to lift iron and steel scrap. The main advantage is that:",
            options: [
              "the electromagnet is lighter than a permanent magnet",
              "switching off the current releases the load instantly",
              "the electromagnet can lift non-magnetic metals such as copper",
              "the electromagnet works without any electrical supply",
            ],
            answerIndex: 1,
            explanation: "The key advantage of an electromagnet for a lifting crane is control: switching the current on lifts the scrap and switching it off drops it. A permanent magnet could pick up the load but could not release it on demand. (It still only lifts magnetic metals.)",
            difficulty: "warmup",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
          },
          {
            id: "phys-magnetism-bm2-07",
            question: "A magnetic circuit breaker switches off a circuit when the current becomes too large. How does the electromagnet achieve this?",
            options: [
              "A large current strengthens the electromagnet enough to pull a soft-iron bolt and trip the switch open",
              "A large current melts a thin wire in the electromagnet",
              "The electromagnet stores charge until it overflows",
              "The electromagnet steps down the dangerous current",
            ],
            answerIndex: 0,
            explanation: "In a magnetic circuit breaker, the operating current flows through the electromagnet coil. If the current rises too high, the electromagnet becomes strong enough to attract a soft-iron catch/bolt, which releases a spring-loaded switch and breaks the circuit. It can be reset, unlike a fuse.",
            difficulty: "core",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            hints: [
              "The dangerous current itself flows through the electromagnet.",
              "Larger current → stronger electromagnet.",
              "A strong enough pull releases a catch that opens the switch.",
            ],
          },
          {
            id: "phys-magnetism-bm2-08",
            question: "Two long parallel wires carry current in the SAME direction. What happens to them, and why (in terms of their magnetic fields)?",
            options: [
              "They repel, because their fields add up between the wires",
              "They neither attract nor repel",
              "They attract only if the currents are unequal",
              "They attract, because the field in the region between them is weakened/cancelled, leaving a net inward force",
            ],
            answerIndex: 3,
            explanation: "For currents in the same direction, the circular fields point in opposite senses in the region between the wires, partly cancelling there and reinforcing outside; the wires are pushed together (attract). Each wire sits in the other's field and experiences a motor-effect force directed towards the other.",
            difficulty: "challenge",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            hints: [
              "Sketch the circular field of each wire (right-hand grip rule).",
              "Look at the region between the wires — do the two fields add or cancel there?",
              "Each wire experiences a force (motor effect) in the other's field; same-direction currents attract.",
            ],
          },
          {
            id: "phys-magnetism-bm2-09",
            question: "The field pattern of a current-carrying solenoid most closely resembles the field of:",
            options: ["a bar magnet", "a single straight wire", "a horseshoe magnet's gap", "two like poles"],
            answerIndex: 0,
            explanation: "Outside the solenoid the field is that of a bar magnet — emerging from one end (N) and entering the other (S). Inside, the field is strong and nearly uniform, running along the axis.",
            difficulty: "warmup",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
          },
          {
            id: "phys-magnetism-bm2-10",
            question: "An electromagnet is made from a coil of 100 turns carrying 2.0 A. To roughly double its magnetic field strength using the SAME wire and supply current, the best single change is to:",
            options: [
              "halve the number of turns to 50",
              "wind 200 turns instead of 100 over the same core",
              "reverse the current direction",
              "remove the soft-iron core",
            ],
            answerIndex: 1,
            explanation: "Field strength depends on the ampere-turns (current × turns). With the current fixed at 2.0 A, doubling the turns to 200 roughly doubles the ampere-turns and hence the field. Halving the turns would halve it; reversing the current only swaps the poles; removing the core would greatly weaken the field. So winding 200 turns is the right change.",
            difficulty: "challenge",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            hints: [
              "Field strength ∝ current × number of turns (ampere-turns).",
              "The current is fixed, so change the turns.",
              "Doubling turns roughly doubles the field; check why the other options fail.",
            ],
          },
        ],
      },
      {
        id: "phys-magnetism-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "The motor effect, Fleming's left-hand rule and the d.c. motor.",
        questions: [
          {
            id: "phys-magnetism-bm3-01",
            question: "A current-carrying wire lies between the poles of a magnet. It experiences a force because:",
            options: [
              "the wire is heated by the current",
              "the magnetic field of the current interacts with the field of the magnet",
              "the wire becomes permanently magnetised",
              "the current charges the wire electrostatically",
            ],
            answerIndex: 1,
            explanation: "This is the motor effect. The wire's own circular magnetic field interacts with the external field of the magnet; the two fields combine to give a resultant that pushes the wire (a force F = BIL).",
            difficulty: "warmup",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
          },
          {
            id: "phys-magnetism-bm3-02",
            question: "In Fleming's Left-Hand Rule, the first finger, second finger and thumb represent, in order:",
            options: [
              "Field, Current, Motion (force)",
              "Force, Current, Field",
              "Current, Field, Motion",
              "Field, Motion, Current",
            ],
            answerIndex: 0,
            explanation: "First finger = Field, seCond finger = Current, thuMb = Motion (force). The three are held mutually perpendicular.",
            difficulty: "warmup",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
          },
          {
            id: "phys-magnetism-bm3-03",
            question: "A horizontal wire carries current from south to north. The magnetic field points vertically upward at the wire. In which direction is the force on the wire?",
            options: ["East", "West", "Upward", "Downward"],
            answerIndex: 1,
            explanation: "Fleming's Left-Hand Rule: first finger (Field) points up; second finger (Current) points north; the thumb (force) then points west.",
            difficulty: "core",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            hints: [
              "Use Fleming's Left-Hand Rule with field up and current pointing north.",
              "Point first finger up, second finger north.",
              "Your thumb then points to the west.",
            ],
          },
          {
            id: "phys-magnetism-bm3-04",
            question: "A wire carries 3.0 A and lies perpendicular to a 0.20 T field. The length in the field is 0.50 m. What is the force on the wire?",
            options: ["0.30 N", "0.60 N", "1.2 N", "3.0 N"],
            answerIndex: 0,
            explanation: "F = BIL = 0.20 × 3.0 × 0.50 = 0.30 N.",
            difficulty: "core",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            hints: [
              "Use F = BIL.",
              "Substitute B = 0.20 T, I = 3.0 A, L = 0.50 m.",
              "0.20 × 3.0 × 0.50 = 0.30 N.",
            ],
          },
          {
            id: "phys-magnetism-bm3-05",
            question: "A current-carrying conductor is placed parallel to a magnetic field. What is the force on it?",
            options: [
              "Maximum, because the current is largest",
              "Half the maximum value",
              "Zero, because there is no component of current perpendicular to the field",
              "Equal to BIL regardless of angle",
            ],
            answerIndex: 2,
            explanation: "The motor-effect force is F = BIL sin θ, where θ is the angle between the current and the field. When the conductor is parallel to the field, θ = 0° and sin 0° = 0, so the force is zero.",
            difficulty: "core",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            hints: [
              "Recall F = BIL sin θ.",
              "θ is the angle between current direction and field.",
              "Parallel → θ = 0° → sin 0° = 0 → force = 0.",
            ],
          },
          {
            id: "phys-magnetism-bm3-06",
            question: "Which change would NOT increase the force on a current-carrying conductor in a magnetic field?",
            options: [
              "Increasing the current",
              "Using a stronger magnet",
              "Increasing the length of conductor in the field",
              "Reversing the current direction",
            ],
            answerIndex: 3,
            explanation: "F = BIL: increasing B, I or L all increase the force. Reversing the current only reverses the direction of the force; its magnitude is unchanged.",
            difficulty: "core",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            hints: [
              "List the factors in F = BIL.",
              "Three of the options change B, I or L.",
              "Reversing current changes direction, not size.",
            ],
          },
          {
            id: "phys-magnetism-bm3-07",
            question: "What is the purpose of the split-ring commutator in a d.c. motor?",
            options: [
              "To increase the supply voltage to the coil",
              "To convert the d.c. supply into a.c.",
              "To keep the coil stationary at the dead-centre position",
              "To reverse the current in the coil every half-turn so rotation continues in one direction",
            ],
            answerIndex: 3,
            explanation: "The split-ring commutator reverses the direction of current in the coil every half-turn, just as the coil passes the vertical (dead-centre) position, so the torque always acts in the same rotational sense and the coil keeps spinning one way.",
            difficulty: "warmup",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
          },
          {
            id: "phys-magnetism-bm3-08",
            question: "In a d.c. motor, when is the turning effect (torque) on the rectangular coil at its MAXIMUM?",
            options: [
              "When the plane of the coil is parallel to the magnetic field",
              "When the plane of the coil is perpendicular to the magnetic field",
              "Only at the instant the commutator switches",
              "Torque is constant throughout the rotation",
            ],
            answerIndex: 0,
            explanation: "Torque is greatest when the forces on the two sides act at the greatest perpendicular distance — this happens when the plane of the coil is parallel to the field (coil sides perpendicular to the field, cutting straight across it). When the plane is perpendicular to the field (dead-centre), the torque is zero.",
            difficulty: "challenge",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            hints: [
              "Torque = force × perpendicular distance.",
              "Consider when the two forces act as a couple turning the coil most effectively.",
              "Plane of coil parallel to field → maximum torque; perpendicular → zero (dead-centre).",
            ],
          },
          {
            id: "phys-magnetism-bm3-09",
            question: "A simple d.c. motor spins too slowly. Which single change would NOT help it spin faster?",
            options: [
              "Adding more turns to the coil",
              "Using a stronger magnet",
              "Increasing the current",
              "Replacing the split-ring commutator with two slip rings",
            ],
            answerIndex: 3,
            explanation: "More turns, a stronger field, and more current all increase the torque (the coil experiences a larger F = BIL on each turn). Replacing the commutator with slip rings would stop the motor working as a d.c. motor — the coil would oscillate rather than spin continuously.",
            difficulty: "core",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            hints: [
              "Three options increase torque via B, I or number of turns.",
              "The commutator is essential for continuous one-way rotation on d.c.",
              "Slip rings would break continuous rotation, not speed it up.",
            ],
          },
          {
            id: "phys-magnetism-bm3-10",
            question: "A wire experiences a force of 0.12 N when 4.0 A flows through 0.30 m of it in a magnetic field, at right angles to the field. What is the magnetic flux density of the field?",
            options: ["0.010 T", "0.10 T", "0.40 T", "1.0 T"],
            answerIndex: 1,
            explanation: "From F = BIL, B = F / (IL) = 0.12 / (4.0 × 0.30) = 0.12 / 1.2 = 0.10 T.",
            difficulty: "challenge",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            hints: [
              "Start from F = BIL and rearrange for B.",
              "B = F / (I × L).",
              "B = 0.12 / (4.0 × 0.30) = 0.12 / 1.2 = 0.10 T.",
            ],
          },
        ],
      },
      {
        id: "phys-magnetism-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Electromagnetic induction, the a.c. generator and transformers.",
        questions: [
          {
            id: "phys-magnetism-bm4-01",
            question: "An e.m.f. is induced in a coil when:",
            options: [
              "the magnetic flux through it changes",
              "a steady current flows through it",
              "it is at rest in a constant magnetic field",
              "it is made from a magnetic material",
            ],
            answerIndex: 0,
            explanation: "Electromagnetic induction produces an e.m.f. only when the magnetic flux through the coil changes — for example by relative motion of a magnet, or by a changing current in a nearby coil. A steady flux induces nothing.",
            difficulty: "warmup",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
          },
          {
            id: "phys-magnetism-bm4-02",
            question: "A magnet is held stationary inside a coil connected to a sensitive ammeter. The ammeter reads:",
            options: ["a large steady current", "a small steady current", "zero", "an alternating current"],
            answerIndex: 2,
            explanation: "With the magnet stationary, the flux through the coil is constant — there is no change in flux, so no e.m.f. is induced and the ammeter reads zero.",
            difficulty: "warmup",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
          },
          {
            id: "phys-magnetism-bm4-03",
            question: "Which change would NOT increase the e.m.f. induced when a magnet is moved into a coil?",
            options: [
              "Moving the magnet faster",
              "Using a stronger magnet",
              "Using a coil with more turns",
              "Pausing the magnet halfway in",
            ],
            answerIndex: 3,
            explanation: "Faster movement, a stronger magnet and more turns all increase the rate of change of flux and so the induced e.m.f. Pausing the magnet stops the flux changing, so the e.m.f. falls to zero.",
            difficulty: "core",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            hints: [
              "Induced e.m.f. depends on the rate of change of flux and the number of turns.",
              "Faster, stronger, more turns → larger e.m.f.",
              "Pausing means no flux change → no e.m.f.",
            ],
          },
          {
            id: "phys-magnetism-bm4-04",
            question: "By Lenz's law, the direction of an induced current is always such that it:",
            options: [
              "reinforces the change in flux that caused it",
              "is at right angles to the magnetic field",
              "opposes the change in flux that caused it",
              "increases steadily with time",
            ],
            answerIndex: 2,
            explanation: "Lenz's law states the induced current opposes the change producing it (a consequence of conservation of energy). If it reinforced the change, energy would be created from nothing.",
            difficulty: "core",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            hints: [
              "Lenz's law is a statement of energy conservation.",
              "If the current reinforced the change, energy would appear from nowhere.",
              "So the induced current opposes the change.",
            ],
          },
          {
            id: "phys-magnetism-bm4-05",
            question: "In an a.c. generator, the induced e.m.f. is at its MAXIMUM when the coil is:",
            options: [
              "horizontal, with its plane parallel to the field, sides cutting field lines fastest",
              "vertical, with its plane perpendicular to the field",
              "at rest",
              "aligned with the slip rings",
            ],
            answerIndex: 0,
            explanation: "The e.m.f. is greatest when the coil sides cut the field lines at the fastest rate — this happens when the plane of the coil is parallel to the field (the sides moving perpendicular to the field). When the plane is perpendicular to the field, the sides move parallel to the lines and the e.m.f. is momentarily zero.",
            difficulty: "challenge",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            hints: [
              "e.m.f. depends on the rate at which the coil sides cut field lines.",
              "Maximum rate of cutting → maximum e.m.f.",
              "Plane parallel to field → sides cut lines fastest → maximum e.m.f.",
            ],
          },
          {
            id: "phys-magnetism-bm4-06",
            question: "An a.c. generator uses slip rings rather than a split-ring commutator because slip rings:",
            options: [
              "reverse the connections every half-turn to give d.c.",
              "increase the output voltage",
              "are needed only for very fast rotation",
              "keep each end of the coil permanently connected to the same output terminal, so the output alternates",
            ],
            answerIndex: 3,
            explanation: "Slip rings keep each end of the coil connected to the same external terminal throughout the rotation, so the naturally alternating e.m.f. is delivered to the circuit as a.c. (A commutator would swap the connections each half-turn, rectifying the output.)",
            difficulty: "core",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            hints: [
              "Compare slip rings (generator) with the commutator (motor).",
              "Slip rings = continuous rings → connections never swap.",
              "Unswapped connections deliver the alternating e.m.f. as a.c.",
            ],
          },
          {
            id: "phys-magnetism-bm4-07",
            question: "A transformer has 800 primary turns and 200 secondary turns. The primary voltage is 240 V. What is the secondary voltage?",
            options: ["60 V", "120 V", "480 V", "960 V"],
            answerIndex: 0,
            explanation: "Vs = Vp × (Ns/Np) = 240 × (200/800) = 240 × 0.25 = 60 V. This is a step-down transformer (fewer secondary turns).",
            difficulty: "warmup",
            guideRef: "Transformers and the National Grid",
          },
          {
            id: "phys-magnetism-bm4-08",
            question: "Why must a transformer be supplied with alternating current, not direct current?",
            options: [
              "d.c. would overheat the primary coil",
              "d.c. cannot flow through a coil",
              "Only a.c. produces a continually changing flux in the core to induce an e.m.f. in the secondary",
              "a.c. has a higher voltage than d.c.",
            ],
            answerIndex: 2,
            explanation: "Induction needs a changing flux. Alternating current produces a continually changing magnetic flux in the core, which induces a continually changing e.m.f. in the secondary. A steady d.c. gives constant flux and so no induced secondary e.m.f.",
            difficulty: "core",
            guideRef: "Transformers and the National Grid",
            hints: [
              "Induction requires a CHANGING flux.",
              "a.c. continually changes; steady d.c. does not.",
              "Constant flux → no induced e.m.f. in the secondary.",
            ],
          },
          {
            id: "phys-magnetism-bm4-09",
            question: "An ideal transformer steps 240 V up to 1200 V. The primary current is 5.0 A. What is the secondary current?",
            options: ["0.20 A", "1.0 A", "5.0 A", "25 A"],
            answerIndex: 1,
            explanation: "For an ideal transformer VpIp = VsIs, so Is = VpIp/Vs = (240 × 5.0)/1200 = 1200/1200 = 1.0 A. The voltage stepped up ×5, so the current stepped down ×5 (5.0 A → 1.0 A) — on the high-voltage side the current is smaller, not larger.",
            difficulty: "challenge",
            guideRef: "Transformers and the National Grid",
            hints: [
              "Use VpIp = VsIs.",
              "Rearrange: Is = (Vp × Ip) / Vs.",
              "Is = (240 × 5.0)/1200 = 1.0 A; the stepped-up side carries the smaller current.",
            ],
          },
          {
            id: "phys-magnetism-bm4-10",
            question: "Electricity is transmitted across the country at very high voltage mainly because, for a fixed power, high voltage gives:",
            options: [
              "a higher current and so less heating in the cables",
              "a lower current and so much less power wasted as heat (P = I²R) in the cables",
              "a stronger magnetic field around the cables",
              "thicker cables that carry more power",
            ],
            answerIndex: 1,
            explanation: "For fixed power P = VI, raising V lowers I. Cable heating loss is P_loss = I²R, so a small current means far less wasted power. The voltage is stepped up for transmission and stepped down again before use.",
            difficulty: "core",
            guideRef: "Transformers and the National Grid",
            hints: [
              "For fixed power, P = VI links voltage and current.",
              "High V → low I.",
              "Cable loss is I²R, so low I gives much smaller loss.",
            ],
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "phys-magnetism-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Magnets, magnetic materials, fields and induced magnetism.",
        questions: [
          {
            id: "phys-magnetism-bq1-01",
            question: "State the basic law of magnetic poles, and use it to explain what happens when the north pole of one bar magnet is brought close to the south pole of another.",
            marks: 3,
            modelAnswer:
              "The law of magnetic poles is: like poles repel and unlike poles attract. A north pole and a south pole are unlike poles, so they attract each other — the two magnets are pulled together.",
            markScheme: [
              "Like poles repel / unlike poles attract",
              "North and south are unlike poles",
              "They attract / are pulled together",
            ],
            commonError: "Writing 'opposite poles repel' — it is opposite (unlike) poles that attract.",
            guideRef: "Magnets, Poles and Magnetic Fields",
            difficulty: "warmup",
          },
          {
            id: "phys-magnetism-bq1-02",
            question: "Describe how you would use a plotting compass to find the shape and direction of the magnetic field around a bar magnet placed on paper. State two features of the field lines you would draw.",
            marks: 5,
            modelAnswer:
              "Place the bar magnet on a sheet of paper and draw round it. Put a plotting compass near one pole and mark a dot at each end of the needle. Move the compass so the tail end sits on the previous dot, and mark the new tip; repeat across the paper. Join the dots with a smooth line and add an arrowhead showing the direction the compass north pointed (from N to S outside the magnet). Repeat starting from different points to build up the pattern. Two features: the lines run from the north pole to the south pole outside the magnet (they have a definite direction); the lines are closer together where the field is stronger (near the poles) and never cross.",
            markScheme: [
              "Place compass near the magnet and mark the needle ends with dots",
              "Move compass so its tail is on the previous dot; repeat to trace a line",
              "Add arrows showing direction (N to S outside the magnet)",
              "Field lines run from N to S outside the magnet / have direction",
              "Lines are closer where the field is stronger / never cross",
            ],
            commonError: "Forgetting to mark the direction (arrows) on the field lines, or drawing lines that cross.",
            guideRef: "Magnets, Poles and Magnetic Fields",
            difficulty: "core",
            hints: [
              "Describe the step-by-step plotting method using the compass needle ends.",
              "Explain how successive dots are joined into a line.",
              "Recall properties of field lines: direction (N→S outside), spacing and that they never cross.",
            ],
          },
          {
            id: "phys-magnetism-bq1-03",
            question: "Explain the difference between a magnetically hard material and a magnetically soft material. Give one example of each and state a use for each that depends on this property.",
            marks: 6,
            modelAnswer:
              "A magnetically hard material is difficult to magnetise but, once magnetised, retains its magnetism strongly; it is used for permanent magnets. An example is steel, used to make permanent bar magnets, compass needles and loudspeaker magnets. A magnetically soft material is easy to magnetise and easy to demagnetise — it loses its magnetism as soon as the magnetising field is removed. An example is soft iron, used as the core of an electromagnet (e.g. in a relay or electric bell) because it magnetises strongly when current flows and demagnetises when it stops.",
            markScheme: [
              "Hard: hard to magnetise but retains magnetism / keeps magnetism when field removed",
              "Hard example: steel (or alnico) — used for a permanent magnet / compass needle",
              "Soft: easily magnetised AND easily demagnetised / loses magnetism when field removed",
              "Soft example: soft iron — used as an electromagnet core / relay / bell",
              "Hard use depends on retaining magnetism",
              "Soft use depends on switchable magnetism (on/off)",
            ],
            commonError: "Saying soft iron 'cannot be magnetised' — it magnetises easily; the point is that it also loses the magnetism easily.",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            difficulty: "core",
            hints: [
              "Define 'hard' and 'soft' in terms of retaining vs losing magnetism.",
              "Pick a clear example for each (steel; soft iron).",
              "Match each use to the property it relies on.",
            ],
          },
          {
            id: "phys-magnetism-bq1-04",
            question: "An iron rod is held near, but not touching, the north pole of a strong magnet, and is attracted to it. (a) Explain, in terms of induced magnetism, why the iron rod is attracted. (b) State what happens to the rod's magnetism when the magnet is removed, and why iron behaves this way.",
            marks: 5,
            modelAnswer:
              "(a) The magnet's field induces magnetism in the iron rod. The end of the rod nearest the magnet's north pole becomes an induced south pole (unlike poles attract), and the far end becomes a north pole. Because the near end is an unlike pole to the magnet, the rod is attracted towards the magnet. (b) When the magnet is removed, the iron rod loses almost all of its magnetism, because soft iron is magnetically soft (low coercivity): its domains return to random alignment as soon as the external field is removed.",
            markScheme: [
              "Magnet induces magnetism in the iron",
              "Near end becomes the opposite (induced south) pole to the magnet's north",
              "Unlike poles attract → rod attracted",
              "Iron loses (almost all) its magnetism when the magnet is removed",
              "Because soft iron is magnetically soft / domains return to random alignment",
            ],
            commonError: "Saying the near end becomes a north pole — induced magnetism always makes the near end the unlike (attracting) pole.",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            difficulty: "core",
            hints: [
              "Induced magnetism makes the near end the opposite pole.",
              "Opposite a north pole, the induced pole is south → attraction.",
              "Soft iron loses induced magnetism when the field is removed.",
            ],
          },
          {
            id: "phys-magnetism-bq1-05",
            question: "Sketch (describe in words) the magnetic field pattern between (a) two unlike poles (N facing S) and (b) two like poles (N facing N). For (b), explain what a 'neutral point' is.",
            marks: 5,
            modelAnswer:
              "(a) Between two unlike poles, the field lines run straight across the gap from the north pole to the south pole. They are roughly parallel and evenly spaced in the middle — a nearly uniform field. (b) Between two like poles (N facing N), the field lines from each magnet point away from their poles and push against each other, so the lines bow outward (curve away) on either side and do not pass straight through. Midway between the two poles there is a neutral point: a point where the two equal and opposite fields exactly cancel, so the resultant magnetic field is zero and a plotting compass there has no definite direction.",
            markScheme: [
              "Unlike poles: straight lines from N to S across the gap / parallel, evenly spaced / uniform",
              "Like poles: lines bow outward / curve away from each other",
              "Lines do not pass straight across between like poles",
              "Neutral point = where the two fields cancel / resultant field is zero",
              "Compass has no definite direction at the neutral point",
            ],
            commonError: "Describing a neutral point as a place of maximum field — it is the opposite: the field is zero there.",
            guideRef: "Magnets, Poles and Magnetic Fields",
            difficulty: "core",
            hints: [
              "Contrast the straight, parallel pattern (unlike poles) with the bowing-out pattern (like poles).",
              "A neutral point is where fields cancel.",
              "At a neutral point the resultant field is zero.",
            ],
          },
          {
            id: "phys-magnetism-bq1-06",
            question: "A student has two identical-looking steel bars. One is a permanent magnet and one is an unmagnetised piece of steel. Describe a test, using only the two bars, that reliably identifies which is the magnet. Explain why your test works.",
            marks: 4,
            modelAnswer:
              "Hold one bar fixed and bring an END of one bar near the MIDDLE (centre) of the other. A magnet's field is strongest at its poles (the ends) and weakest at its middle, where there is effectively no external pole. If the bar you are holding is the magnet, its end will attract the middle of the other bar (the other bar's middle is magnetic material and is attracted). But the middle of a magnet produces no attraction, so if you bring the end of the non-magnet to the middle of the magnet you feel little or no force. So: the bar whose END attracts the MIDDLE of the other is the magnet; if you bring an end to the middle and feel no attraction, the bar providing the middle is the magnet. (Repulsion is the definitive test of magnetism, but only attraction/no-attraction is available with the middle.) The test works because attraction can happen with either a magnet or unmagnetised steel, but the MIDDLE of a magnet exerts almost no force — so testing at the middle distinguishes them.",
            markScheme: [
              "Bring the end of one bar to the MIDDLE/centre of the other",
              "A magnet's poles (ends) are strong but its middle is (almost) neutral",
              "End of the magnet attracts the middle of the other bar",
              "Bringing a non-magnet end to the magnet's middle gives little/no attraction → identifies which is the magnet (only repulsion / the neutral-middle test is conclusive)",
            ],
            commonError: "Saying 'see which one attracts the other' — both bars attract (a magnet attracts unmagnetised steel), so plain attraction does not identify the magnet; you must use the neutral middle or test for repulsion.",
            guideRef: "Magnets, Poles and Magnetic Fields",
            difficulty: "challenge",
            hints: [
              "Plain attraction is not conclusive — unmagnetised steel is attracted to a magnet too.",
              "Only repulsion, or the neutral middle of a magnet, gives a definitive answer.",
              "A magnet's middle exerts almost no force; test an end against the middle.",
            ],
          },
          {
            id: "phys-magnetism-bq1-07",
            question: "Explain why cutting a bar magnet in half does not produce one separate north pole and one separate south pole. Refer to magnetic domains in your answer.",
            marks: 4,
            modelAnswer:
              "A magnet is made of many tiny aligned magnetic domains (regions whose atomic magnets point the same way). The poles appear at the ends because that is where the aligned domains meet the surface; the interior fields effectively cancel side to side. When you cut the magnet in half, each half still contains a full set of aligned domains, so each half develops its own north and south pole at its ends. You therefore get two complete magnets, never a single isolated pole — magnetic poles always exist in N–S pairs.",
            markScheme: [
              "Magnet contains many aligned magnetic domains",
              "Poles appear at the ends of the aligned arrangement",
              "Cutting leaves each half with aligned domains → each gains its own N and S pole",
              "Result is two complete magnets / poles always occur in N–S pairs",
            ],
            commonError: "Thinking the north and south 'halves' can be physically separated — the poles are a property of the whole aligned arrangement, not separate objects inside the magnet.",
            guideRef: "Magnets, Poles and Magnetic Fields",
            difficulty: "challenge",
            hints: [
              "Think about why the poles appear at the ends (aligned domains).",
              "Each piece still contains aligned domains after cutting.",
              "So each piece becomes a complete magnet with both poles.",
            ],
          },
          {
            id: "phys-magnetism-bq1-08",
            question: "State three magnetic materials and two non-magnetic materials. Explain what is meant by saying a material is 'non-magnetic'.",
            marks: 4,
            modelAnswer:
              "Magnetic materials (any three): iron, steel, nickel, cobalt. Non-magnetic materials (any two): copper, aluminium, brass, plastic, wood. A non-magnetic material is one that is not attracted to a magnet (and is not repelled by it either) — it is simply unaffected by a magnetic field and cannot itself be magnetised.",
            markScheme: [
              "Three magnetic materials from: iron / steel / nickel / cobalt",
              "Two non-magnetic materials from: copper / aluminium / brass / plastic / wood",
              "Non-magnetic = not attracted to a magnet",
              "Not repelled either / unaffected by the field / cannot be magnetised",
            ],
            commonError: "Listing copper or aluminium as magnetic — these conduct electricity well but are not magnetic.",
            guideRef: "Magnets, Poles and Magnetic Fields",
            difficulty: "warmup",
          },
          {
            id: "phys-magnetism-bq1-09",
            question: "The Earth has a magnetic field similar to that of a giant bar magnet. (a) State which magnetic pole (N or S) is located near the Earth's geographic North. (b) Explain how this is consistent with the way a freely-suspended compass needle behaves.",
            marks: 4,
            modelAnswer:
              "(a) A magnetic south pole is located near the Earth's geographic North. (b) The north-seeking (north) pole of a freely-suspended compass needle points towards the Earth's geographic North. Since unlike poles attract, the compass's north pole must be attracted by a magnetic south pole; therefore the Earth's geographic North must act as a magnetic south pole. The compass needle aligns with the Earth's field, which runs (outside the Earth) towards that southern-type pole in the geographic north.",
            markScheme: [
              "Geographic North is a magnetic south pole",
              "Compass north (north-seeking) pole points to geographic North",
              "Unlike poles attract",
              "So the attracting pole at geographic North is a magnetic south pole",
            ],
            commonError: "Assuming the geographic North is a magnetic north pole — it must be a magnetic south for the compass's north end to be attracted to it.",
            guideRef: "Magnets, Poles and Magnetic Fields",
            difficulty: "core",
            hints: [
              "Recall which end of a compass points north.",
              "Use 'unlike poles attract' on the compass's north end.",
              "The attracting pole at geographic North must therefore be magnetic south.",
            ],
          },
          {
            id: "phys-magnetism-bq1-10",
            question: "A horseshoe magnet has its two poles close together facing one another. Explain why the magnetic field in the gap between the poles is strong and nearly uniform, and give one practical reason this is useful.",
            marks: 4,
            modelAnswer:
              "In a horseshoe magnet the north and south poles are brought close together and face each other across a small gap. This is like having two unlike poles close together: the field lines run straight across the gap from N to S, they are concentrated into a small region (so closely spaced → strong) and parallel and evenly spaced (→ uniform). A strong, uniform field is useful, for example, in a moving-coil meter or the field magnet of a motor, where a constant force on a current-carrying coil is needed for a steady, even response or torque.",
            markScheme: [
              "Poles face each other across a small gap (unlike poles close together)",
              "Field lines run straight across from N to S, concentrated → strong (closely spaced)",
              "Parallel and evenly spaced → uniform",
              "Useful application: e.g. motor / moving-coil meter needing a constant force / steady torque",
            ],
            commonError: "Confusing 'strong' with 'uniform' — the close spacing makes it strong; the parallel, even spacing makes it uniform.",
            guideRef: "Magnets, Poles and Magnetic Fields",
            difficulty: "core",
            hints: [
              "A horseshoe brings unlike poles close together.",
              "Closely-spaced lines → strong; parallel even lines → uniform.",
              "Name a device that needs a constant force (motor / meter).",
            ],
          },
        ],
      },
      {
        id: "phys-magnetism-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "The magnetic effect of a current, solenoids and electromagnet applications.",
        questions: [
          {
            id: "phys-magnetism-bq2-01",
            question: "Describe the shape of the magnetic field around a long straight wire carrying a current, and explain how its strength varies with distance from the wire. State how the field direction is found.",
            marks: 4,
            modelAnswer:
              "The field around a long straight current-carrying wire consists of concentric circles centred on the wire, lying in planes at right angles to the wire. The field is strongest close to the wire (where the circles are most closely spaced) and gets weaker further away. The direction of the field is found using the right-hand grip rule: grip the wire with the right hand so the thumb points in the direction of the conventional current; the curled fingers then show the direction in which the field lines circle the wire.",
            markScheme: [
              "Field lines are concentric circles around the wire (in planes perpendicular to it)",
              "Field is strongest near the wire / lines closer together near the wire",
              "Field weakens with distance from the wire",
              "Direction found by the right-hand grip rule (thumb = conventional current, fingers curl = field)",
            ],
            commonError: "Describing the field as straight lines along the wire — the lines circle the wire.",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            difficulty: "core",
            hints: [
              "The lines form closed circles around the wire.",
              "Closeness of lines indicates strength — strongest near the wire.",
              "Use the right-hand grip rule for direction.",
            ],
          },
          {
            id: "phys-magnetism-bq2-02",
            question: "State three ways of increasing the strength of an electromagnet. For each, briefly explain why it works.",
            marks: 6,
            modelAnswer:
              "1. Increase the current in the coil: the magnetic field is proportional to the current, so more current gives a stronger field. 2. Increase the number of turns on the coil: the field depends on the ampere-turns (current × turns), so more turns over the same length increases the field. 3. Add (or use) a soft-iron core: the iron becomes magnetised by induction and its domains align with the coil's field, adding a much larger field of their own and concentrating the field lines, greatly strengthening the electromagnet.",
            markScheme: [
              "Increase current — field ∝ current",
              "Increase number of turns — field depends on ampere-turns / more turns add their fields",
              "Add a soft-iron core",
              "Iron magnetises by induction / domains align and add to the field / concentrates field lines",
              "Any correct reasoning linking each change to a stronger field (2 marks across explanations)",
              "All three distinct factors given",
            ],
            commonError: "Listing 'use a longer wire' or 'higher voltage' vaguely — the factors are current, number of turns, and a soft-iron core.",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            difficulty: "core",
            hints: [
              "Think about what the field depends on: current and turns.",
              "There is also a material factor — the core.",
              "Explain the core in terms of induced magnetism in the iron.",
            ],
          },
          {
            id: "phys-magnetism-bq2-03",
            question: "Describe the construction and action of a relay. Explain clearly how a small current in one circuit is able to switch on a much larger current in a separate circuit, and state one advantage of using a relay.",
            marks: 6,
            modelAnswer:
              "A relay has an electromagnet (a coil on a soft-iron core) in the control (low-current) circuit, a pivoted soft-iron armature, and a pair of contacts in the separate high-current circuit. When a small current flows in the control circuit, it magnetises the electromagnet, which attracts the soft-iron armature. The armature pivots and pushes the contacts of the second circuit together, completing it and switching on the large current. When the control current stops, the soft iron loses its magnetism, a spring pulls the armature back, and the contacts open, switching the large current off. One advantage: the two circuits are electrically isolated, so a small, safe control current (e.g. from a sensor or low-voltage switch) can safely switch a high-current/high-voltage circuit.",
            markScheme: [
              "Electromagnet (coil on soft-iron core) in the control circuit",
              "Pivoted soft-iron armature and contacts in the separate circuit",
              "Small current magnetises electromagnet → attracts armature",
              "Armature moves and closes the contacts of the second circuit → large current flows",
              "When control current stops, soft iron demagnetises, spring returns armature, contacts open",
              "Advantage: electrical isolation / a small/safe current switches a large/dangerous one",
            ],
            commonError: "Implying the large current flows through the electromagnet — the two circuits are separate and isolated.",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            difficulty: "core",
            hints: [
              "Identify the two separate circuits and the parts in each.",
              "Describe the chain: control current → electromagnet → armature → contacts close.",
              "State the isolation advantage.",
            ],
          },
          {
            id: "phys-magnetism-bq2-04",
            question: "A solenoid is wound on a cardboard tube. Looking at the right-hand end, the conventional current flows clockwise around the coil. (a) State which pole is at the right-hand end. (b) State the rule you used. (c) State what happens to the poles if the current direction is reversed.",
            marks: 4,
            modelAnswer:
              "(a) The right-hand end is a south pole. (b) The end rule (clock rule): viewed from the end, a clockwise current traces an 'S' (south pole); an anticlockwise current traces an 'N' (north pole). (Equivalently the right-hand grip rule for a solenoid.) (c) If the current is reversed, the poles swap over: the right-hand end becomes a north pole and the left-hand end becomes a south pole.",
            markScheme: [
              "Right-hand end is a south pole",
              "Rule named: end rule / clock rule / right-hand grip rule for a solenoid",
              "Clockwise (viewed from the end) = S / anticlockwise = N (correct reasoning)",
              "Reversing the current swaps the poles (right end becomes north)",
            ],
            commonError: "Forgetting that the viewing end matters — clockwise as seen from one end is anticlockwise from the other.",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            difficulty: "core",
            hints: [
              "Use the clock/end rule: clockwise = S, anticlockwise = N (as you look at that end).",
              "Apply it to the right-hand end.",
              "Reversing current swaps N and S.",
            ],
          },
          {
            id: "phys-magnetism-bq2-05",
            question: "Explain why a soft-iron core (rather than a steel core) is used in an electromagnet, in a relay, and in an electric bell. Refer to what the core must do each time the current changes.",
            marks: 5,
            modelAnswer:
              "These devices need a magnet that switches on and off rapidly. Soft iron is magnetically soft: it magnetises strongly when current flows (greatly increasing the field by induction) and demagnetises almost completely the instant the current stops. In a relay or electric bell the armature must be released as soon as the control current is interrupted, so the core must lose its magnetism immediately — soft iron does this. Steel is magnetically hard: it would retain its magnetism after the current stopped, so the armature would stay attracted and the relay/bell would not reset or repeat. Therefore soft iron, with its low coercivity, is essential for any electromagnet whose magnetism must switch off cleanly.",
            markScheme: [
              "Devices need magnetism that switches on AND off",
              "Soft iron magnetises strongly when current flows (amplifies field by induction)",
              "Soft iron demagnetises immediately when current stops",
              "Steel would retain magnetism / stay magnetised after current stops",
              "So armature would not be released / bell would not repeat / relay would not reset — soft iron needed",
            ],
            commonError: "Saying soft iron is used 'because it is stronger' — the real reason is that it loses its magnetism instantly when the current stops.",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            difficulty: "core",
            hints: [
              "These devices switch the magnet on and off.",
              "Soft iron magnetises easily AND loses magnetism easily.",
              "Steel would stay magnetised and the mechanism would not reset.",
            ],
          },
          {
            id: "phys-magnetism-bq2-06",
            question: "Describe the construction and action of an electric bell, explaining why it rings repeatedly rather than just once when the switch is held down.",
            marks: 6,
            modelAnswer:
              "An electric bell has an electromagnet (coil on a soft-iron core), a springy soft-iron armature carrying a striker (hammer), a gong, and a make-and-break contact. When the switch is pressed, current flows through the electromagnet, which magnetises and attracts the armature. The armature moves towards the electromagnet, so the striker hits the gong and makes a sound. As the armature moves, it separates from the contact, breaking the circuit. With no current the soft-iron core instantly loses its magnetism, so the spring pulls the armature back to its original position. This remakes the contact, current flows again, and the whole cycle repeats. Because the contact is repeatedly made and broken while the switch is held down, the striker hits the gong over and over, producing a continuous ringing.",
            markScheme: [
              "Electromagnet (coil on soft-iron core), springy armature with striker, gong, make-and-break contact",
              "Current magnetises electromagnet → attracts armature → striker hits gong (sound)",
              "Armature movement breaks the contact / circuit",
              "Soft iron loses magnetism → spring returns armature",
              "Contact remade → current flows again",
              "Cycle repeats continuously → repeated ringing",
            ],
            commonError: "Omitting the make-and-break contact — without it the armature would be pulled in once and stay there, giving a single ring only.",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            difficulty: "core",
            hints: [
              "List the parts, including the make-and-break contact.",
              "Trace the cycle: attract → strike → break circuit → release → remake.",
              "Explain that the make-and-break makes it repeat.",
            ],
          },
          {
            id: "phys-magnetism-bq2-07",
            question: "Two long straight parallel wires carry currents in opposite directions. (a) State whether the wires attract or repel. (b) Explain your answer using the magnetic fields of the two wires.",
            marks: 4,
            modelAnswer:
              "(a) The wires repel each other. (b) Each wire produces a circular magnetic field around itself (right-hand grip rule). With currents in opposite directions, in the region between the wires the two circular fields point in the same direction, so they add and the field there is strong; outside the pair the fields tend to cancel. Each wire lies in the field of the other and experiences a motor-effect force (F = BIL) directed away from the other wire, so the wires are pushed apart — they repel.",
            markScheme: [
              "Wires repel",
              "Each wire produces a circular field (right-hand grip rule)",
              "Opposite currents → fields add between the wires (strong field between)",
              "Each wire feels a motor-effect force pushing it away from the other → repulsion",
            ],
            commonError: "Mixing up the cases: same-direction currents attract, opposite-direction currents repel.",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            difficulty: "challenge",
            hints: [
              "Sketch each wire's circular field.",
              "Opposite currents → fields reinforce between the wires.",
              "Each wire experiences a motor-effect force in the other's field — here outward.",
            ],
          },
          {
            id: "phys-magnetism-bq2-08",
            question: "Sketch (describe) the magnetic field pattern of a current-carrying solenoid, and explain why it is so similar to that of a bar magnet. State one difference between the two.",
            marks: 5,
            modelAnswer:
              "Outside the solenoid the field lines emerge from one end (the north pole) and curve round to enter the other end (the south pole), exactly like the field of a bar magnet. Inside the solenoid the field lines are straight, close together, parallel to the axis, and point from the south end to the north end, giving a strong, nearly uniform field. The pattern matches a bar magnet because the aligned circular fields of each turn add together along the axis to produce a single overall N–S field. One difference: the solenoid's magnetism can be switched off (by stopping the current) and its poles reversed (by reversing the current), whereas a permanent bar magnet's field is always present and fixed.",
            markScheme: [
              "Outside: lines emerge from N end and enter S end (like a bar magnet)",
              "Inside: straight, parallel, closely spaced lines → strong, nearly uniform field",
              "Pattern matches bar magnet because the turns' fields add to a single N–S field",
              "Difference: solenoid field is switchable (on/off)",
              "And/or its poles can be reversed by reversing the current",
            ],
            commonError: "Forgetting the inside field — the strong, uniform internal field is a key feature of the solenoid.",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            difficulty: "core",
            hints: [
              "Describe both the external (bar-magnet-like) and internal (uniform) fields.",
              "Explain why: the turns' fields combine into one N–S field.",
              "A key difference is switchability / reversibility.",
            ],
          },
          {
            id: "phys-magnetism-bq2-09",
            question: "A magnetic circuit breaker is used instead of a fuse to protect a circuit. (a) Explain how the electromagnet inside it switches off the circuit when the current is too large. (b) State one advantage of a circuit breaker over a fuse.",
            marks: 5,
            modelAnswer:
              "(a) The circuit current flows through the electromagnet's coil. Under normal current the electromagnet is too weak to operate the switch. If the current becomes too large (e.g. a fault), the electromagnet becomes strong enough to attract a soft-iron catch/bolt. This releases a spring-loaded contact, which springs apart and breaks the circuit, stopping the current. (b) Advantage: a circuit breaker can be reset (switched back on) after the fault is cleared, whereas a fuse must be replaced. (It also operates faster than a fuse.)",
            markScheme: [
              "Circuit current flows through the electromagnet coil",
              "Too-large current makes the electromagnet strong enough to attract a soft-iron catch/bolt",
              "This releases a spring / trips the switch open, breaking the circuit",
              "Current stops",
              "Advantage: can be reset rather than replaced / operates faster than a fuse",
            ],
            commonError: "Describing a fuse (a wire that melts) instead of the electromagnetic tripping mechanism of a circuit breaker.",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            difficulty: "core",
            hints: [
              "The protected current itself passes through the electromagnet.",
              "A large current strengthens it enough to release a catch.",
              "Compare resetting vs replacing for the advantage.",
            ],
          },
          {
            id: "phys-magnetism-bq2-10",
            question: "A magnetic crane in a scrapyard uses an electromagnet of 500 turns to lift steel. The operator wants it to lift a heavier load. (a) Suggest two changes that would increase the lifting force, and explain each. (b) Explain why a permanent magnet of the same strength could not be used for this job.",
            marks: 5,
            modelAnswer:
              "(a) Increase the current through the coil: the magnetic field strength is proportional to the current, so a stronger field grips the steel more firmly. Increase the number of turns on the coil (e.g. above 500): the field depends on the ampere-turns, so more turns at the same current give a stronger field. (A soft-iron core also concentrates the field.) (b) A permanent magnet would pick up the steel but could not release it on demand — there is no way to switch its magnetism off. The whole point of the crane is to lift the scrap, carry it, and then drop it where required by switching off the current; only an electromagnet allows this controlled release.",
            markScheme: [
              "Increase the current — field ∝ current → stronger grip",
              "Increase the number of turns — more ampere-turns → stronger field (or: soft-iron core concentrates field)",
              "Correct explanation linking each change to a stronger field/force",
              "Permanent magnet cannot be switched off",
              "Crane must release the load on demand → needs switchable (electro)magnet",
            ],
            commonError: "Suggesting 'use a bigger permanent magnet' — the essential feature is being able to switch the magnetism off to drop the load.",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            difficulty: "core",
            hints: [
              "Recall the factors that strengthen an electromagnet.",
              "Pick two and explain each in terms of the field.",
              "The crane must DROP the load — what does that require?",
            ],
          },
        ],
      },
      {
        id: "phys-magnetism-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "The motor effect, Fleming's left-hand rule and the d.c. motor.",
        questions: [
          {
            id: "phys-magnetism-bq3-01",
            question: "A straight wire carries a current of 6.0 A at right angles to a uniform magnetic field of flux density 0.30 T. The length of wire in the field is 0.20 m. (a) Calculate the force on the wire. (b) State the direction of the force relative to the current and the field.",
            marks: 4,
            modelAnswer:
              "(a) F = BIL = 0.30 × 6.0 × 0.20 = 0.36 N. (b) The force is at right angles (perpendicular) to both the current and the magnetic field; its precise direction is given by Fleming's Left-Hand Rule.",
            markScheme: [
              "F = BIL / F = 0.30 × 6.0 × 0.20",
              "F = 0.36 N (with unit)",
              "Force is perpendicular to both current and field",
              "Direction given by Fleming's Left-Hand Rule",
            ],
            commonError: "Quoting the answer without a unit, or thinking the force lies along the current or field.",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "warmup",
            solutions: [
              {
                label: "Direct substitution",
                steps: [
                  "F = BIL",
                  "F = 0.30 T × 6.0 A × 0.20 m",
                  "F = 0.36 N",
                  "Direction: perpendicular to both I and B (Fleming's Left-Hand Rule)",
                ],
              },
            ],
          },
          {
            id: "phys-magnetism-bq3-02",
            question: "State Fleming's Left-Hand Rule in full, identifying what each of the first finger, second finger and thumb represents. Then use it to find the direction of the force on a wire in which the conventional current flows due east while the magnetic field points due north (both horizontal).",
            marks: 5,
            modelAnswer:
              "Fleming's Left-Hand Rule: hold the thumb, first finger and second finger of the left hand mutually at right angles. The First finger points in the direction of the magnetic Field (N to S), the seCond finger points in the direction of the conventional Current, and the thuMb points in the direction of the Motion (force). With the field pointing north (first finger north) and the current pointing east (second finger east), the left hand gives the thumb pointing vertically downward — so the force on the wire is directed downward.",
            markScheme: [
              "First finger = Field (N to S)",
              "Second finger = (conventional) Current",
              "Thumb = Motion / force",
              "Fingers held mutually perpendicular",
              "Force is directed downward (field north, current east → force down)",
            ],
            commonError: "Using the right hand (that is for induction/generators) or pointing the second finger along electron flow instead of conventional current.",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "core",
            hints: [
              "Assign First = Field, seCond = Current, thuMb = Motion.",
              "Point first finger north, second finger east.",
              "Read off the thumb direction — it points down.",
            ],
          },
          {
            id: "phys-magnetism-bq3-03",
            question: "State the factors that determine the size of the force on a current-carrying conductor in a magnetic field, giving the equation. Explain what happens to the force as the angle between the conductor and the field changes from 90° to 0°.",
            marks: 5,
            modelAnswer:
              "The force depends on the magnetic flux density B, the current I, and the length L of conductor in the field, when the conductor is perpendicular to the field: F = BIL. More generally F = BIL sin θ, where θ is the angle between the conductor (current) and the field. When the conductor is perpendicular to the field (θ = 90°, sin 90° = 1), the force is at its maximum, F = BIL. As θ decreases towards 0°, sin θ decreases, so the force decreases. When the conductor is parallel to the field (θ = 0°, sin 0° = 0), the force is zero.",
            markScheme: [
              "Force depends on B, I and L (the length in the field)",
              "F = BIL (perpendicular) / F = BIL sin θ",
              "Force is maximum when conductor is perpendicular to field (θ = 90°)",
              "Force decreases as the angle decreases (sin θ falls)",
              "Force is zero when conductor is parallel to the field (θ = 0°)",
            ],
            commonError: "Stating the force is constant for all angles — it varies as sin θ and is zero when the wire is parallel to the field.",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "core",
            hints: [
              "Name the three quantities in F = BIL.",
              "Bring in the angle: F = BIL sin θ.",
              "Maximum at 90°, zero at 0°.",
            ],
          },
          {
            id: "phys-magnetism-bq3-04",
            question: "A 0.25 m length of wire experiences a force of 0.45 N when it carries a current at right angles to a 0.60 T magnetic field. Calculate the current in the wire.",
            marks: 3,
            modelAnswer:
              "Rearrange F = BIL for I: I = F / (BL) = 0.45 / (0.60 × 0.25) = 0.45 / 0.15 = 3.0 A.",
            markScheme: [
              "Rearrangement I = F / (BL)",
              "I = 0.45 / (0.60 × 0.25) = 0.45 / 0.15",
              "I = 3.0 A (with unit)",
            ],
            commonError: "Forgetting to multiply B and L together in the denominator (dividing by only one of them).",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "core",
            hints: [
              "Start from F = BIL.",
              "Rearrange to make I the subject: I = F / (BL).",
              "I = 0.45 / (0.60 × 0.25).",
            ],
            solutions: [
              {
                label: "Rearrange and substitute",
                steps: [
                  "F = BIL",
                  "I = F / (BL)",
                  "I = 0.45 N / (0.60 T × 0.25 m)",
                  "I = 0.45 / 0.15 = 3.0 A",
                ],
              },
            ],
          },
          {
            id: "phys-magnetism-bq3-05",
            question: "Describe the structure and action of a simple d.c. motor. Your answer should explain how continuous rotation in one direction is achieved.",
            marks: 6,
            modelAnswer:
              "A simple d.c. motor has a rectangular coil of wire mounted on an axle so it can rotate, placed between the poles of a permanent magnet, with the ends of the coil connected to a split-ring commutator. Carbon brushes press against the commutator to carry current from the d.c. supply to the coil. When current flows, each side of the coil carries current at right angles to the field, so by the motor effect (F = BIL) the two sides experience forces in opposite directions (Fleming's Left-Hand Rule). This pair of forces forms a couple that produces a turning effect (torque), rotating the coil. As the coil passes the vertical (dead-centre) position, the split-ring commutator reverses the current direction in the coil. This keeps the forces acting in the correct sense so that the torque always turns the coil the same way, giving continuous rotation in one direction.",
            markScheme: [
              "Rectangular coil on an axle between magnet poles",
              "Connected via split-ring commutator and carbon brushes to a d.c. supply",
              "Current + field → force on each side (motor effect / F = BIL), opposite on the two sides",
              "Forces form a couple → turning effect / torque rotates the coil",
              "Commutator reverses the current each half-turn (at the vertical position)",
              "So torque acts in the same rotational sense → continuous one-way rotation",
            ],
            commonError: "Omitting the commutator's role, or saying it 'keeps the current the same' — it reverses the current each half-turn to maintain one-way rotation.",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "core",
            hints: [
              "List the parts: coil, magnet, commutator, brushes, supply.",
              "Explain the forces on the two sides (motor effect → couple → torque).",
              "Explain how the commutator gives continuous one-way rotation.",
            ],
          },
          {
            id: "phys-magnetism-bq3-06",
            question: "Explain what happens to the turning effect on the coil of a d.c. motor as it rotates from the position where its plane is parallel to the field, to the position where its plane is perpendicular to the field. Explain the role of the commutator at the perpendicular position.",
            marks: 5,
            modelAnswer:
              "When the plane of the coil is parallel to the field, the two long sides are perpendicular to the field and the forces on them act tangentially, at the maximum perpendicular distance — so the turning effect (torque) is at its maximum. As the coil rotates towards the position where its plane is perpendicular to the field, the perpendicular distance over which the forces act decreases, so the torque falls, reaching zero when the plane is perpendicular to the field (the dead-centre position), where the forces act straight along the coil and produce no turning effect. At this dead-centre position the split-ring commutator reverses the current in the coil. The coil carries on past dead-centre by its own momentum, and because the current has reversed, the forces now act in the correct sense to keep turning the coil the same way rather than pushing it back.",
            markScheme: [
              "Plane parallel to field → torque is maximum (forces at greatest perpendicular distance)",
              "As coil turns, torque decreases",
              "Plane perpendicular to field (dead-centre) → torque is zero",
              "At dead-centre the commutator reverses the current in the coil",
              "Reversed current keeps the torque in the same rotational sense → coil keeps turning one way (helped by momentum)",
            ],
            commonError: "Thinking torque is maximum when the coil plane is perpendicular to the field — it is actually zero there (dead-centre).",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "challenge",
            hints: [
              "Torque = force × perpendicular distance.",
              "Maximum torque when plane is parallel to the field; zero when perpendicular.",
              "At the zero-torque (dead-centre) point the commutator reverses the current.",
            ],
          },
          {
            id: "phys-magnetism-bq3-07",
            question: "A rectangular coil of 50 turns is placed in a magnetic field of flux density 0.080 T. Each of the two sides that lie across the field has length 0.060 m, and the coil carries a current of 4.0 A. (a) Calculate the total force on ONE of these sides (remember the coil has 50 turns). (b) State the direction of the forces on the two opposite sides relative to each other.",
            marks: 4,
            modelAnswer:
              "(a) Force per turn on one side: F = BIL = 0.080 × 4.0 × 0.060 = 0.0192 N. For 50 turns: F = 50 × 0.0192 = 0.96 N. (b) The forces on the two opposite sides are equal in size but opposite in direction (one up, one down), forming a couple that turns the coil.",
            markScheme: [
              "F per turn = BIL = 0.080 × 4.0 × 0.060 = 0.0192 N",
              "Multiply by 50 turns",
              "F = 0.96 N (with unit)",
              "Forces on opposite sides are equal and opposite (form a couple)",
            ],
            commonError: "Forgetting to multiply by the number of turns (50), giving only 0.0192 N.",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "challenge",
            hints: [
              "First find the force on a single turn: F = BIL.",
              "Multiply by the number of turns (50).",
              "The two long sides carry current in opposite directions → opposite forces.",
            ],
            solutions: [
              {
                label: "Per-turn then total",
                steps: [
                  "Force on one side per turn: F = BIL = 0.080 × 4.0 × 0.060 = 0.0192 N",
                  "For 50 turns: F = 50 × 0.0192 = 0.96 N",
                  "Opposite side carries current the other way → equal and opposite force (a couple)",
                ],
              },
            ],
          },
          {
            id: "phys-magnetism-bq3-08",
            question: "A beam of electrons travels horizontally from left to right through a vacuum tube. A magnetic field is applied pointing into the page. (a) State the direction of the conventional current associated with the moving electrons. (b) Use Fleming's Left-Hand Rule to find the direction of the force on the beam.",
            marks: 4,
            modelAnswer:
              "(a) Electrons are negative, so the conventional current is in the opposite direction to the electron motion: the conventional current points from right to left. (b) Apply Fleming's Left-Hand Rule: first finger (Field) points into the page; second finger (Current) points to the left; the thumb (force) then points downward. So the electron beam is deflected downward.",
            markScheme: [
              "Conventional current is opposite to electron flow → points right to left",
              "First finger into page (field), second finger to the left (current)",
              "Apply Fleming's Left-Hand Rule",
              "Force / deflection is downward",
            ],
            commonError: "Using the electron direction as the current direction — conventional current is opposite to electron flow, which flips the force.",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "challenge",
            hints: [
              "Electrons are negative, so conventional current points the opposite way.",
              "Current is therefore right-to-left.",
              "Apply the left-hand rule with field into the page → force downward.",
            ],
          },
          {
            id: "phys-magnetism-bq3-09",
            question: "List three changes that would increase the turning effect (and hence the speed) of a simple d.c. motor, and briefly justify each using the idea of the force on the coil sides.",
            marks: 5,
            modelAnswer:
              "1. Increase the current in the coil: the force on each side is F = BIL, so a larger current gives a larger force and greater torque. 2. Use a stronger magnet (larger flux density B): again F = BIL, so a stronger field increases the force on each side. 3. Increase the number of turns on the coil: each turn contributes a force, so more turns multiply the total force and torque. (Adding a soft-iron core to the coil, or increasing the coil area, also helps.) A larger turning effect makes the motor accelerate to a higher speed.",
            markScheme: [
              "Increase current — larger I in F = BIL → larger force",
              "Stronger magnet / larger B — larger force (F = BIL)",
              "More turns on the coil — each turn adds force → larger total force/torque",
              "Correct justification referring to F = BIL on the coil sides",
              "Greater turning effect → faster rotation",
            ],
            commonError: "Listing 'higher voltage' alone without linking it to a larger current and hence a larger force.",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "core",
            hints: [
              "Use F = BIL to identify what increases the force.",
              "Larger I, larger B, more turns all help.",
              "Link a larger force to a larger torque and faster spin.",
            ],
          },
          {
            id: "phys-magnetism-bq3-10",
            question: "A wire carrying a current sits between the poles of a magnet. A student notices the wire is pushed out of the field. (a) Explain, in terms of the two magnetic fields present, why the wire experiences a force. (b) State what the student should do to reverse the direction of this force, giving two separate methods.",
            marks: 5,
            modelAnswer:
              "(a) Two magnetic fields are present: the uniform field of the magnet, and the circular field produced by the current in the wire. These two fields combine: on one side of the wire they reinforce (field stronger) and on the other side they partly cancel (field weaker). The wire is pushed from the strong-field side towards the weak-field side — this is the motor-effect force. (b) To reverse the force: (i) reverse the direction of the current in the wire; or (ii) reverse the magnetic field by swapping the magnet's poles (turning the magnet around). Doing either one reverses the force; doing both together would leave the force unchanged.",
            markScheme: [
              "Two fields present: magnet's field and the wire's circular field",
              "Fields combine: reinforce on one side, cancel on the other (stronger/weaker regions)",
              "Wire pushed from strong-field side to weak-field side (motor-effect force)",
              "Reverse the current (one method)",
              "Reverse the field / swap the magnet's poles (second method)",
            ],
            commonError: "Saying reversing both the current and the field reverses the force — reversing both leaves the force direction unchanged.",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "core",
            hints: [
              "Identify the two fields: the magnet's and the current's.",
              "They reinforce on one side and cancel on the other → a push.",
              "Reversing current OR field reverses the force (not both).",
            ],
          },
        ],
      },
      {
        id: "phys-magnetism-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Electromagnetic induction, the a.c. generator and transformers.",
        questions: [
          {
            id: "phys-magnetism-bq4-01",
            question: "State what is meant by electromagnetic induction. List three ways of increasing the size of the e.m.f. induced when a bar magnet is moved into a coil.",
            marks: 4,
            modelAnswer:
              "Electromagnetic induction is the production of an e.m.f. (and a current, if the circuit is complete) in a conductor when the magnetic flux through it changes. Three ways to increase the induced e.m.f.: move the magnet faster (greater rate of change of flux); use a stronger magnet (greater flux density); use a coil with more turns.",
            markScheme: [
              "Induction = production of an e.m.f. when the magnetic flux (through the conductor) changes",
              "Move the magnet faster / faster relative motion",
              "Use a stronger magnet / greater flux density",
              "Use more turns on the coil",
            ],
            commonError: "Saying 'increase the current' — there is no supply current here; the e.m.f. is induced by movement, so the factors are speed, field strength and turns.",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            difficulty: "warmup",
          },
          {
            id: "phys-magnetism-bq4-02",
            question: "A magnet is pushed into a coil connected to a galvanometer, then pulled out again. (a) Describe and explain, using Lenz's law, the deflections seen on the galvanometer. (b) State what is observed if the magnet is held still inside the coil, and why.",
            marks: 5,
            modelAnswer:
              "(a) As the magnet is pushed in, the flux through the coil increases, so an e.m.f. is induced and the galvanometer deflects one way. By Lenz's law the induced current flows in the direction that opposes the increase — the coil end facing the magnet becomes the same pole as the approaching pole, repelling it. When the magnet is pulled out, the flux decreases, so the e.m.f. and current reverse, and the galvanometer deflects the opposite way; the coil now attracts the magnet, opposing its removal. (b) When the magnet is held still inside the coil, the galvanometer reads zero, because the flux is no longer changing and so no e.m.f. is induced.",
            markScheme: [
              "Pushing in: flux increases → e.m.f. induced → deflection one way",
              "Pulling out: flux decreases → e.m.f. reverses → deflection the opposite way",
              "Lenz's law: induced current opposes the change (repels magnet entering / attracts it leaving)",
              "Magnet held still → no deflection",
              "Because the flux is not changing → no induced e.m.f.",
            ],
            commonError: "Thinking a stationary magnet inside the coil still gives a current — there must be a CHANGING flux for an e.m.f.",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            difficulty: "core",
            hints: [
              "Pushing in increases flux; pulling out decreases it → opposite deflections.",
              "Use Lenz's law: induced current opposes the change.",
              "A stationary magnet means constant flux → zero e.m.f.",
            ],
          },
          {
            id: "phys-magnetism-bq4-03",
            question: "Describe the structure and action of a simple a.c. generator (alternator). Explain how it produces an alternating output, and state the function of the slip rings.",
            marks: 6,
            modelAnswer:
              "A simple a.c. generator has a coil of wire mounted on an axle so it can be rotated between the poles of a permanent magnet. The ends of the coil are connected to two slip rings, against which carbon brushes press to connect to the external circuit. When the coil is rotated (by a mechanical input), its sides cut through the magnetic field lines, so an e.m.f. is induced (electromagnetic induction). As the coil turns, the rate at which the sides cut field lines varies: it is greatest when the coil's plane is parallel to the field and zero when the plane is perpendicular to the field. Furthermore, each side moves up through the field during one half-turn and down through it during the next half-turn, so the induced e.m.f. reverses direction every half-turn — the output is alternating. The slip rings keep each end of the coil permanently connected to the same output terminal as the coil spins, so the alternating e.m.f. is delivered to the external circuit as a.c.",
            markScheme: [
              "Coil on an axle rotated between magnet poles",
              "Coil ends connected to two slip rings with brushes",
              "Rotation makes the sides cut field lines → induced e.m.f.",
              "e.m.f. is maximum (plane parallel to field) and zero (plane perpendicular) during a turn",
              "e.m.f. reverses every half-turn → alternating output",
              "Slip rings keep each coil end connected to the same terminal → delivers a.c.",
            ],
            commonError: "Saying the generator uses a commutator — that would rectify the output; an a.c. generator uses slip rings.",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            difficulty: "core",
            hints: [
              "List the parts: coil, magnet, slip rings, brushes.",
              "Rotation → sides cut field lines → e.m.f.",
              "Explain why it reverses each half-turn, and what slip rings do.",
            ],
          },
          {
            id: "phys-magnetism-bq4-04",
            question: "A transformer has 1200 turns on its primary coil and 100 turns on its secondary coil. The primary is connected to a 240 V a.c. supply. (a) Calculate the secondary voltage. (b) State whether this is a step-up or step-down transformer. (c) Explain why the transformer would not work if the 240 V supply were replaced by a 240 V d.c. supply.",
            marks: 5,
            modelAnswer:
              "(a) Using Vp/Vs = Np/Ns, Vs = Vp × (Ns/Np) = 240 × (100/1200) = 240 × (1/12) = 20 V. (b) It is a step-down transformer, because the secondary has fewer turns and the voltage is reduced. (c) With a steady d.c. supply the current in the primary is constant, so the magnetic flux in the core is constant (not changing). A changing flux is needed to induce an e.m.f. in the secondary; with no change in flux, no e.m.f. is induced and there is no output.",
            markScheme: [
              "Vs = Vp × Ns/Np / Vs = 240 × 100/1200",
              "Vs = 20 V (with unit)",
              "Step-down transformer (fewer secondary turns / lower voltage)",
              "d.c. gives constant current → constant (unchanging) flux in the core",
              "No changing flux → no induced e.m.f. in the secondary → no output",
            ],
            commonError: "Inverting the ratio and getting 2880 V — for a step-down (fewer secondary turns) the output voltage must be smaller than the input.",
            guideRef: "Transformers and the National Grid",
            difficulty: "core",
            hints: [
              "Use Vp/Vs = Np/Ns and make Vs the subject.",
              "Vs = 240 × (100/1200).",
              "For (c), think about whether d.c. gives a changing flux.",
            ],
            solutions: [
              {
                label: "Turns/voltage equation",
                steps: [
                  "Vp/Vs = Np/Ns",
                  "Vs = Vp × (Ns/Np) = 240 × (100/1200)",
                  "Vs = 240 × (1/12) = 20 V",
                  "Fewer secondary turns and lower voltage → step-down",
                ],
              },
            ],
          },
          {
            id: "phys-magnetism-bq4-05",
            question: "An ideal transformer is used to step a 230 V supply down to 9.0 V to run a device that draws 1.5 A. (a) Calculate the primary current. (b) Calculate the power delivered to the device, and state the power drawn from the 230 V supply.",
            marks: 5,
            modelAnswer:
              "(a) For an ideal transformer VpIp = VsIs, so Ip = VsIs/Vp = (9.0 × 1.5)/230 = 13.5/230 = 0.0587 A ≈ 0.059 A. (b) Power delivered to the device = VsIs = 9.0 × 1.5 = 13.5 W. Because the transformer is ideal (100% efficient), the power drawn from the supply equals the output power = 13.5 W. (Check: VpIp = 230 × 0.0587 = 13.5 W.)",
            markScheme: [
              "VpIp = VsIs / Ip = VsIs/Vp",
              "Ip = (9.0 × 1.5)/230 = 0.059 A (allow 0.0587 A)",
              "Output power = VsIs = 9.0 × 1.5 = 13.5 W",
              "Input power = output power for an ideal transformer",
              "Power drawn from supply = 13.5 W",
            ],
            commonError: "Computing the primary current as larger than the secondary current — in a step-down transformer the primary current is SMALLER than the secondary current.",
            guideRef: "Transformers and the National Grid",
            difficulty: "core",
            hints: [
              "Use the power equation VpIp = VsIs.",
              "Rearrange for Ip = VsIs/Vp.",
              "For an ideal transformer, input power = output power.",
            ],
            solutions: [
              {
                label: "Ideal transformer power",
                steps: [
                  "VpIp = VsIs",
                  "Ip = VsIs / Vp = (9.0 × 1.5) / 230 = 13.5 / 230",
                  "Ip = 0.059 A",
                  "Output power = VsIs = 9.0 × 1.5 = 13.5 W = input power (ideal)",
                ],
              },
            ],
          },
          {
            id: "phys-magnetism-bq4-06",
            question: "Explain why electrical energy is transmitted across the country at very high voltage. Use the equations P = VI and P_loss = I²R in your explanation, and state the role of transformers at each end of the transmission line.",
            marks: 6,
            modelAnswer:
              "The power to be transmitted is fixed at P = VI. If the voltage V is made very high, then for the same power P the current I must be small (since I = P/V). The power wasted as heat in the transmission cables is P_loss = I²R, where R is the cable resistance. Because this loss depends on the square of the current, a small current means a very much smaller power loss, so transmitting at high voltage greatly reduces the energy wasted in the cables. A step-up transformer at the power-station end raises the generated voltage to a very high value (e.g. 132 kV–400 kV) for transmission, reducing the current. A step-down transformer near homes and factories then lowers the voltage again to a safe value (e.g. 230 V) for consumers to use.",
            markScheme: [
              "Power transmitted P = VI; for fixed P, high V means small I",
              "Power loss in cables P_loss = I²R",
              "Loss depends on I² → smaller current gives much smaller loss",
              "So high-voltage transmission reduces wasted energy/heat in cables",
              "Step-up transformer at the power station raises voltage (lowers current)",
              "Step-down transformer near consumers lowers voltage to a safe value",
            ],
            commonError: "Saying high voltage 'gives more power' — the power is the same; high voltage simply lowers the current and so the I²R loss.",
            guideRef: "Transformers and the National Grid",
            difficulty: "core",
            hints: [
              "Use P = VI: for fixed P, raising V lowers I.",
              "Then use P_loss = I²R to show low I means low loss.",
              "Name the transformer at each end and what it does.",
            ],
          },
          {
            id: "phys-magnetism-bq4-07",
            question: "A power station delivers 800 kW of power to a transmission line at 40 kV. The transmission cables have a total resistance of 6.0 Ω. (a) Calculate the current in the cables. (b) Calculate the power lost as heat in the cables. (c) Calculate the percentage of the transmitted power that is lost in the cables.",
            marks: 6,
            modelAnswer:
              "(a) I = P/V = 800 000 / 40 000 = 20 A. (b) P_loss = I²R = 20² × 6.0 = 400 × 6.0 = 2400 W = 2.4 kW. (c) Percentage lost = (P_loss / P) × 100 = (2400 / 800 000) × 100 = 0.30%.",
            markScheme: [
              "I = P/V = 800 000 / 40 000",
              "I = 20 A (with unit)",
              "P_loss = I²R = 20² × 6.0",
              "P_loss = 2400 W / 2.4 kW",
              "Percentage = (2400 / 800 000) × 100",
              "Percentage lost = 0.30% (allow 0.3%)",
            ],
            commonError: "Using P = VI with the 40 kV transmission voltage to find the cable loss — for cable loss you must use P_loss = I²R with the cable resistance.",
            guideRef: "Transformers and the National Grid",
            difficulty: "challenge",
            hints: [
              "First find the line current with I = P/V (use the 40 kV).",
              "Cable loss is P_loss = I²R (not P = VI).",
              "Percentage = (loss / total power) × 100.",
            ],
            solutions: [
              {
                label: "Three-step calculation",
                steps: [
                  "(a) I = P/V = 800 000 W / 40 000 V = 20 A",
                  "(b) P_loss = I²R = (20)² × 6.0 = 400 × 6.0 = 2400 W = 2.4 kW",
                  "(c) % lost = (2400 / 800 000) × 100 = 0.30%",
                ],
              },
            ],
          },
          {
            id: "phys-magnetism-bq4-08",
            question: "A transformer steps up 250 V to 10 000 V. The primary has 600 turns. (a) Calculate the number of turns on the secondary. (b) The transformer is ideal and the output power is 5.0 kW. Calculate the primary current and the secondary current. (c) Comment on how the currents compare and why.",
            marks: 7,
            modelAnswer:
              "(a) Ns = Np × (Vs/Vp) = 600 × (10 000/250) = 600 × 40 = 24 000 turns. (b) Output power = 5000 W. Secondary current Is = P/Vs = 5000/10 000 = 0.50 A. For an ideal transformer the input power equals the output power, so primary current Ip = P/Vp = 5000/250 = 20 A. (c) The primary current (20 A) is much larger than the secondary current (0.50 A) — it is 40 times larger. This is because the transformer steps the voltage up by a factor of 40, so the current is stepped down by the same factor (VpIp = VsIs), keeping the power the same.",
            markScheme: [
              "Ns = Np × Vs/Vp = 600 × (10 000/250)",
              "Ns = 24 000 turns",
              "Is = P/Vs = 5000/10 000 = 0.50 A",
              "Ip = P/Vp = 5000/250 = 20 A (or Ip = Is × Vs/Vp)",
              "Primary current is larger than secondary current",
              "Voltage stepped up ×40 → current stepped down ×40",
              "Power is conserved (VpIp = VsIs)",
            ],
            commonError: "Thinking the higher-voltage (secondary) side carries the higher current — in a step-up transformer the high-voltage side carries the SMALLER current.",
            guideRef: "Transformers and the National Grid",
            difficulty: "challenge",
            hints: [
              "Find Ns with Ns = Np × (Vs/Vp).",
              "Use P = VI on each side: Is = P/Vs and Ip = P/Vp.",
              "Compare the two currents and relate to the turns ratio (VpIp = VsIs).",
            ],
            solutions: [
              {
                label: "Turns then currents",
                steps: [
                  "(a) Ns = Np × (Vs/Vp) = 600 × (10 000/250) = 600 × 40 = 24 000 turns",
                  "(b) Is = P/Vs = 5000/10 000 = 0.50 A",
                  "Ip = P/Vp = 5000/250 = 20 A (check: VpIp = 250 × 20 = 5000 W = VsIs)",
                  "(c) Ip (20 A) is 40× larger than Is (0.50 A); voltage up ×40 → current down ×40",
                ],
              },
            ],
          },
          {
            id: "phys-magnetism-bq4-09",
            question: "Compare Fleming's Left-Hand Rule and Fleming's Right-Hand Rule. State which rule applies to each of the motor effect and electromagnetic induction, and explain the difference in what is the 'cause' and what is the 'effect' in each case.",
            marks: 5,
            modelAnswer:
              "Fleming's Left-Hand Rule applies to the motor effect: a current in a conductor placed in a magnetic field experiences a force. Here the current (driven by an external supply) is the cause, and the resulting force/motion is the effect — electrical energy is converted to kinetic energy. Fleming's Right-Hand Rule applies to electromagnetic induction (generators): a conductor is moved through a magnetic field and an e.m.f./current is induced. Here the motion is the cause, and the induced current is the effect — kinetic energy is converted to electrical energy. In both rules the first finger is the Field and the thumb is the Motion, but in the left hand the second finger is the supplied current (cause) whereas in the right hand it is the induced current (effect). Different hands are needed because the causal roles of current and motion are swapped between the two situations.",
            markScheme: [
              "Left-Hand Rule → motor effect (force on a current-carrying conductor)",
              "Right-Hand Rule → electromagnetic induction (induced e.m.f./current)",
              "Motor: current is the cause, motion/force is the effect (electrical → kinetic)",
              "Induction: motion is the cause, induced current is the effect (kinetic → electrical)",
              "Different hand needed because the roles of current and motion are reversed",
            ],
            commonError: "Using the left hand for generators or the right hand for motors — the motor effect uses the LEFT hand, induction uses the RIGHT hand.",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            difficulty: "challenge",
            hints: [
              "Match each rule to motor (left) or generator (right).",
              "Identify cause and effect: current→motion vs motion→current.",
              "Explain why swapped causal roles need different hands.",
            ],
          },
          {
            id: "phys-magnetism-bq4-10",
            question: "A model wind turbine drives a small a.c. generator. (a) State three changes to the generator (not the wind speed) that would increase the peak output voltage. (b) The student then connects the output to an ideal step-up transformer with a turns ratio Np : Ns = 1 : 25. If the generator produces 12 V, calculate the transformer output voltage. (c) State one reason a real transformer is less than 100% efficient.",
            marks: 6,
            modelAnswer:
              "(a) Any three: increase the number of turns on the generator coil; use stronger magnets (greater flux density); rotate the coil faster (increase the speed of rotation); wind the coil on a soft-iron core / increase the coil area. (b) For the transformer Vs/Vp = Ns/Np = 25/1, so Vs = Vp × (Ns/Np) = 12 × 25 = 300 V. (c) Any one: resistance of the copper coils dissipates heat (I²R / 'copper losses'); the alternating magnetisation of the iron core wastes energy as heat (hysteresis); induced eddy currents in the core dissipate energy as heat (reduced by laminating the core); some flux leaks and does not link both coils.",
            markScheme: [
              "Three from: more turns on coil / stronger magnets / rotate faster / soft-iron core / larger coil area",
              "Vs/Vp = Ns/Np = 25",
              "Vs = 12 × 25",
              "Vs = 300 V (with unit)",
              "One valid efficiency loss: resistance/heating in coils / hysteresis / eddy currents / flux leakage",
            ],
            commonError: "For (b), dividing by 25 instead of multiplying — a 1 : 25 step-up transformer multiplies the voltage by 25.",
            guideRef: "Transformers and the National Grid",
            difficulty: "core",
            hints: [
              "Generator e.m.f. depends on turns, field strength and rotation speed.",
              "Step-up by 1 : 25 means Vs = Vp × 25.",
              "Real transformers lose energy in the coils and core.",
            ],
            solutions: [
              {
                label: "Step-up transformer voltage",
                steps: [
                  "Vs/Vp = Ns/Np = 25/1 = 25",
                  "Vs = Vp × 25 = 12 V × 25",
                  "Vs = 300 V",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
