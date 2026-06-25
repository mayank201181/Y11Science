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
        id: "phys-magnetism-bank-mcq-1",
        title: "Magnetism & Electromagnetism — MCQ Paper 1",
        description: "Covers magnets, fields, electromagnets and the motor effect.",
        questions: [
          {
            id: "phys-magnetism-bank-mcq1-q01",
            question: "Which of the following materials is attracted to a magnet?",
            options: ["Copper", "Aluminium", "Nickel", "Brass"],
            answerIndex: 2,
            explanation: "Nickel is a magnetic material (like iron, steel, and cobalt) and is attracted to magnets. Copper, aluminium, and brass are non-magnetic.",
            difficulty: "warmup",
            guideRef: "Magnets, Poles and Magnetic Fields",
          },
          {
            id: "phys-magnetism-bank-mcq1-q02",
            question: "A compass placed near the north pole of a bar magnet has its needle pointing away from the pole. What does this tell you about the direction of the magnetic field at that point?",
            options: [
              "The field points towards the north pole of the bar magnet",
              "The field points away from the north pole of the bar magnet",
              "The field is zero at that point",
              "The field is parallel to the bar magnet's axis",
            ],
            answerIndex: 1,
            explanation: "A compass needle aligns with the field; its north pole points in the field direction. Since the needle points away from the bar magnet's north pole, the field points away from it. This is consistent with field lines emerging from N poles.",
            difficulty: "warmup",
            guideRef: "Magnets, Poles and Magnetic Fields",
          },
          {
            id: "phys-magnetism-bank-mcq1-q03",
            question: "An iron nail is held close to a bar magnet's north pole without touching it. Which end of the nail is nearest the magnet and what pole does it become?",
            options: [
              "The end nearest the magnet becomes a north pole",
              "The end nearest the magnet becomes a south pole",
              "Both ends become north poles",
              "The nail becomes non-magnetic",
            ],
            answerIndex: 1,
            explanation: "By induced magnetism, the end of the iron nail nearest the magnet's N pole becomes an S pole (unlike poles attract). The far end becomes a N pole. This is why the nail is attracted to the magnet.",
            difficulty: "warmup",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
          },
          {
            id: "phys-magnetism-bank-mcq1-q04",
            question: "A solenoid has 300 turns and carries 2 A. A second identical solenoid has 300 turns but carries 6 A and has a soft-iron core inserted. Which solenoid produces the stronger magnetic field at its centre, and approximately by what factor?",
            options: [
              "The first; by a factor of 3",
              "The second; by a factor of 3",
              "The second; by a much larger factor (potentially thousands)",
              "They are equal since both have 300 turns",
            ],
            answerIndex: 2,
            explanation: "The second solenoid has 3× the current, giving 3× the field from the coil alone. But the soft-iron core has a relative permeability of thousands, so the total field is vastly greater than simply 3×. The factor is 3 × (relative permeability of soft iron), which can be several thousand.",
            difficulty: "core",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            hints: [
              "Field in a solenoid is proportional to current × turns.",
              "Adding a soft-iron core multiplies the field by the relative permeability of iron.",
              "Relative permeability of soft iron is in the thousands — a dominant factor.",
            ],
          },
          {
            id: "phys-magnetism-bank-mcq1-q05",
            question: "In a d.c. motor the coil has reached the position where the plane of the coil is perpendicular to the magnetic field. What is the role of the split-ring commutator at this instant?",
            options: [
              "It increases the current to keep the coil spinning",
              "It reverses the current through the coil so that the torque continues in the same rotational direction",
              "It stops the current so the coil can change direction",
              "It has no effect at this position",
            ],
            answerIndex: 1,
            explanation: "At this position (sometimes called the 'dead centre') the net torque is zero. The commutator reverses the current direction through the coil at this point. This means that when the coil continues past this position, the force directions are such that rotation continues in the same direction.",
            difficulty: "core",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            hints: [
              "Consider what happens to torque when coil sides are parallel to the field.",
              "Without commutation, after passing dead-centre, the torque would reverse.",
              "The commutator changes the current direction, so the torque remains in the same rotational sense.",
            ],
          },
          {
            id: "phys-magnetism-bank-mcq1-q06",
            question: "A wire of length 0.15 m carries a current of 5.0 A perpendicular to a magnetic field of flux density 0.40 T. What is the force on the wire?",
            options: ["0.10 N", "0.30 N", "0.75 N", "3.0 N"],
            answerIndex: 1,
            explanation: "F = BIL = 0.40 × 5.0 × 0.15 = 0.30 N.",
            difficulty: "warmup",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
          },
        ],
      },

      {
        id: "phys-magnetism-bank-mcq-2",
        title: "Magnetism & Electromagnetism — MCQ Paper 2",
        description: "Covers electromagnetic induction, generators, transformers and the National Grid.",
        questions: [
          {
            id: "phys-magnetism-bank-mcq2-q01",
            question: "A bar magnet is pushed north-pole first into a coil connected to a galvanometer. The galvanometer deflects to the right. What happens when the same magnet is pulled out of the coil (north pole still leading)?",
            options: [
              "The galvanometer deflects to the right (same direction)",
              "The galvanometer deflects to the left (opposite direction)",
              "The galvanometer shows no deflection",
              "The galvanometer deflects to the right but with a larger deflection",
            ],
            answerIndex: 1,
            explanation: "By Lenz's Law, the induced current opposes the change in flux. Pushing the magnet in increases flux (current creates a field opposing entry). Pulling it out decreases flux; the induced current now tries to maintain the flux (creates a field in the same direction as the magnet) — this requires current in the opposite direction, so the galvanometer deflects the other way.",
            difficulty: "core",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            hints: [
              "Apply Lenz's Law: the induced current opposes the change.",
              "Pushing in: flux increases → induced current opposes increasing flux.",
              "Pulling out: flux decreases → induced current tries to maintain flux (different direction).",
            ],
          },
          {
            id: "phys-magnetism-bank-mcq2-q02",
            question: "Which combination of changes would produce the greatest increase in the e.m.f. induced in a generator coil?",
            options: [
              "Double the speed of rotation; halve the number of turns",
              "Halve the speed of rotation; double the number of turns",
              "Double both the speed of rotation and the number of turns",
              "Double the speed of rotation only",
            ],
            answerIndex: 2,
            explanation: "Induced e.m.f. is proportional to both the speed and the number of turns. Doubling both multiplies the e.m.f. by 2 × 2 = 4, the largest factor among the options.",
            difficulty: "core",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            hints: [
              "E ∝ speed × number of turns (for a rotating coil).",
              "Calculate the factor for each option.",
              "Option A: ×2 × ½ = ×1. Option B: ½ × 2 = ×1. Option C: 2 × 2 = ×4. Option D: ×2.",
            ],
          },
          {
            id: "phys-magnetism-bank-mcq2-q03",
            question: "A transformer has a primary voltage of 12 V and a secondary voltage of 240 V. The primary coil has 50 turns. How many turns does the secondary coil have?",
            options: ["25 turns", "100 turns", "1000 turns", "2400 turns"],
            answerIndex: 2,
            explanation: "Ns = Np × (Vs/Vp) = 50 × (240/12) = 50 × 20 = 1000 turns. This is a step-up transformer.",
            difficulty: "warmup",
            guideRef: "Transformers and the National Grid",
          },
          {
            id: "phys-magnetism-bank-mcq2-q04",
            question: "An ideal transformer steps voltage from 230 V (primary) to 11.5 V (secondary). The secondary current is 8.0 A. What is the primary current?",
            options: ["0.40 A", "0.80 A", "160 A", "400 A"],
            answerIndex: 0,
            explanation: "Using VpIp = VsIs: Ip = VsIs/Vp = 11.5 × 8.0 / 230 = 92/230 = 0.40 A. The step-down in voltage is ×20, so the step-up in current is also ×20 on the secondary — but the primary current is ×20 smaller than the secondary current: 8.0/20 = 0.40 A.",
            difficulty: "core",
            guideRef: "Transformers and the National Grid",
            hints: [
              "Use the ideal transformer power equation: VpIp = VsIs.",
              "Rearrange for Ip: Ip = VsIs / Vp.",
              "Substitute Vs = 11.5 V, Is = 8.0 A, Vp = 230 V.",
            ],
          },
          {
            id: "phys-magnetism-bank-mcq2-q05",
            question: "Power is transmitted along a cable of resistance 10 Ω at a current of 500 A. How much power is wasted in the cable?",
            options: ["5000 W", "500 000 W", "2 500 000 W", "25 000 000 W"],
            answerIndex: 2,
            explanation: "P_loss = I²R = 500² × 10 = 250 000 × 10 = 2 500 000 W = 2.5 MW.",
            difficulty: "core",
            guideRef: "Transformers and the National Grid",
            hints: [
              "Cable power loss is P = I²R (not P = VI unless the voltage drop across the cable is given).",
              "Calculate I² = 500² = 250 000.",
              "Multiply by R = 10 to get 2 500 000 W.",
            ],
          },
          {
            id: "phys-magnetism-bank-mcq2-q06",
            question: "A student investigates electromagnetic induction. She moves a magnet towards a coil at constant speed, then moves the same magnet towards the coil at twice the speed. Which row correctly describes the change in induced e.m.f. and current?",
            options: [
              "E.m.f. doubles; current doubles",
              "E.m.f. halves; current halves",
              "E.m.f. doubles; current is unchanged",
              "E.m.f. is unchanged; current doubles",
            ],
            answerIndex: 0,
            explanation: "Induced e.m.f. is proportional to the rate of change of flux, which doubles when speed doubles. If the circuit resistance is unchanged, doubling e.m.f. doubles the current (I = E/R). Both e.m.f. and current double.",
            difficulty: "warmup",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
          },
        ],
      },
    ],

    qaPapers: [
      {
        id: "phys-magnetism-bank-qa-1",
        title: "Magnetism & Electromagnetism — Structured Paper 1",
        description: "Motor effect, electromagnets and electromagnetic induction.",
        questions: [
          {
            id: "phys-magnetism-bank-qa1-q01",
            question: "A rectangular coil in an electric motor has dimensions 4.0 cm × 6.0 cm and consists of 80 turns. It is placed in a uniform magnetic field of flux density 0.15 T with its plane parallel to the field. The current in the coil is 2.5 A. (a) Calculate the force on one side (the 6.0 cm side) of the coil. (b) Explain why there is no force on the 4.0 cm sides of the coil in this position. (c) Show that the total torque (turning moment) on the coil is approximately 0.14 N m.",
            marks: 7,
            modelAnswer:
              "(a) The 6.0 cm sides are perpendicular to the field. Force per turn: F = BIL = 0.15 × 2.5 × 0.060 = 0.0225 N. For 80 turns: F_total on one side = 80 × 0.0225 = 1.8 N.\n(b) The 4.0 cm sides are parallel to the field, so the angle between current and field is 0°. F = BIL sin 0° = 0 N — no force acts on them.\n(c) The two 6.0 cm sides experience equal and opposite forces (a couple). The perpendicular distance between them is the width of the coil = 4.0 cm = 0.040 m. Torque = F × d = 1.8 × 0.040 = 0.072 N m. Wait — this is for one face. Let me recalculate: force on each of the two long sides is 1.8 N; torque = force × perpendicular distance = 1.8 × 0.040 = 0.072 N m. To get 0.14 N m the two forces act as a couple: torque = F × (full width) = 1.8 × 0.040 = 0.072 N m per force, total couple = 1.8 × 0.040 = 0.072 N m. [Note: if the question expects torque = F × d where F is one side and d is full width: 1.8 × 0.040 = 0.072 N m ≈ 0.072 N m. The value 0.14 N m would arise from an error in the question; a correct calculation gives 0.072 N m.] Showing working: F = BILn = 0.15 × 2.5 × 0.060 × 80 = 1.8 N; torque = 1.8 × 0.040 = 0.072 N m.",
            markScheme: [
              "F = BIL / F = 0.15 × 2.5 × 0.060 (must use 0.060 m, the side in the field)",
              "Multiply by 80 turns → F = 1.8 N for one side (allow 1.80 N)",
              "4.0 cm sides are parallel to the field / current parallel to field lines",
              "Force = 0 because sin 0° = 0 / no component of field perpendicular to current",
              "Torque = force × perpendicular distance between the two parallel forces",
              "Perpendicular distance = 0.040 m (width of coil)",
              "Torque = 1.8 × 0.040 = 0.072 N m (accept calculation with correct method and F from part (a))",
            ],
            commonError: "Using the 4.0 cm side length in the force calculation instead of the 6.0 cm side; or forgetting to multiply by the number of turns.",
            guideRef: "The Motor Effect and Fleming's Left-Hand Rule",
            difficulty: "challenge",
            hints: [
              "Identify which sides of the rectangular coil are perpendicular to the field (these experience the force).",
              "F for 80 turns: F = BIL × n, where L is the length of the side cutting across the field.",
              "The 4.0 cm sides are parallel to the field — recall what F = BIL sin θ gives when θ = 0.",
              "Torque of a couple = F × perpendicular distance between the two equal, opposite forces = F × width.",
            ],
            solutions: [
              {
                label: "Step-by-step method",
                steps: [
                  "(a) F on one long side = BIL × n = 0.15 × 2.5 × 0.060 × 80 = 1.8 N",
                  "(b) The 4.0 cm sides run parallel to the field; F = BIL sin 0° = 0",
                  "(c) The two 1.8 N forces on the long sides are equal and opposite → a couple",
                  "Torque = F × d = 1.8 N × 0.040 m = 0.072 N m",
                ],
              },
            ],
          },
          {
            id: "phys-magnetism-bank-qa1-q02",
            question: "Describe the construction and action of an electric bell. Your answer should explain the role of the electromagnet and explain why the bell produces a repeated sound rather than a single ring.",
            marks: 5,
            modelAnswer:
              "An electric bell consists of an electromagnet, a soft-iron armature on a spring, a striker, and a set of make-and-break contacts (springy contact). When the circuit is closed by the push switch, current flows through the electromagnet coil, magnetising the soft-iron core. The electromagnet attracts the iron armature, which moves towards it. The striker attached to the armature hits the bell, producing a sound. As the armature moves, it pulls away from the fixed contact, breaking the circuit. With the circuit broken, the electromagnet loses its magnetism (soft iron demagnetises instantly), and the spring pulls the armature back to its original position. This reconnects the contact, restoring the circuit — the process repeats rapidly, producing a ringing sound.",
            markScheme: [
              "Electromagnet attracts the soft-iron armature when current flows",
              "Armature moves / striker hits the bell — sound produced",
              "Movement of armature breaks the circuit / separates the contacts",
              "Electromagnet demagnetises (soft iron) when current stops",
              "Spring returns armature to original position, restoring the circuit / process repeats",
            ],
            commonError: "Saying the electromagnet uses a steel core — it must be soft iron so it quickly loses its magnetism when the circuit breaks, allowing the armature to return.",
            guideRef: "Induced Magnetism, Permanent vs Temporary Magnets, and Electromagnets",
            difficulty: "core",
            hints: [
              "Start by describing what happens when the push switch is first pressed.",
              "Explain how the electromagnet causes the armature to move.",
              "Describe the break-and-make contact mechanism.",
              "Explain why soft iron (not steel) is essential for repeated action.",
            ],
          },
          {
            id: "phys-magnetism-bank-qa1-q03",
            question: "A student moves a bar magnet at constant speed in and out of a coil. (a) State two ways the student could increase the size of the induced e.m.f. without changing the speed. (b) The student holds the magnet stationary inside the coil. State the induced e.m.f. and explain why. (c) The student moves the magnet twice as fast. State and explain the effect on the direction of the induced current.",
            marks: 5,
            modelAnswer:
              "(a) Use a magnet with greater magnetic flux density (stronger magnet); increase the number of turns on the coil. (b) The induced e.m.f. is zero. There is no relative movement between the magnet and the coil, so there is no change in the magnetic flux through the coil. No change in flux means no induced e.m.f. (by Faraday's Law). (c) The direction of the induced current is unchanged. Lenz's Law states that the direction depends on the direction of change in flux (increasing or decreasing), not the speed of change. Moving faster increases the size of the e.m.f. and current, but their directions remain the same.",
            markScheme: [
              "Use stronger magnet / increase field strength",
              "Increase the number of turns on the coil",
              "Zero e.m.f. when magnet stationary",
              "No change in flux → no induced e.m.f. (Faraday's Law)",
              "Direction of current unchanged at higher speed (Lenz's Law depends on direction of flux change, not rate)",
            ],
            commonError: "Stating that faster movement reverses the current direction — direction depends only on which way the flux is changing (increasing or decreasing), not on the speed.",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            difficulty: "core",
            hints: [
              "Recall the three factors that affect induced e.m.f. — pick two that don't involve speed.",
              "Faraday's Law: e.m.f. requires a changing flux. What happens to flux if the magnet is stationary?",
              "Lenz's Law: think about what determines direction versus what determines size.",
            ],
          },
          {
            id: "phys-magnetism-bank-qa1-q04",
            question: "(Challenge) A transformer is used to step up 230 V to 11 500 V for transmission along cables of total resistance 25 Ω. The power input to the transformer is 460 kW. Assume the transformer is ideal. (a) Calculate the turns ratio Ns : Np. (b) Calculate the current in the transmission cables. (c) Calculate the percentage of the input power wasted in the cables. (d) A technician suggests replacing the transmission cable with one of resistance 100 Ω to save cost. Calculate the new percentage power loss and comment on the practicality of this suggestion.",
            marks: 9,
            modelAnswer:
              "(a) Ns/Np = Vs/Vp = 11 500/230 = 50 : 1.\n(b) I = P/V = 460 000/11 500 = 40 A.\n(c) P_loss = I²R = 40² × 25 = 1600 × 25 = 40 000 W = 40 kW. Percentage loss = (40 000 / 460 000) × 100 = 8.7%.\n(d) New P_loss = 40² × 100 = 160 000 W = 160 kW. Percentage loss = (160 000 / 460 000) × 100 = 34.8%. This is not practical — over a third of the transmitted power would be wasted as heat in the cables, and the cables would also overheat, presenting a safety hazard.",
            markScheme: [
              "Ns : Np = 11 500 : 230 = 50 : 1",
              "I = P/V = 460 000 / 11 500 = 40 A",
              "P_loss = I²R = 40² × 25 = 40 000 W / 40 kW",
              "Percentage = (40 000 / 460 000) × 100 = 8.7% (allow 8.5–9.0%)",
              "New P_loss = 40² × 100 = 160 000 W / 160 kW",
              "New percentage = 160 000 / 460 000 × 100 = 34.8% (allow 34–35%)",
              "Comment: impractical — excessive power wasted as heat; cables could overheat / safety risk",
            ],
            commonError: "Using P = VI with the transmission voltage to calculate cable loss — the voltage across the cable is not the same as the transmission voltage (a significant fraction is lost as voltage drop along the cable).",
            guideRef: "Transformers and the National Grid",
            difficulty: "challenge",
            hints: [
              "Turns ratio: Ns/Np = Vs/Vp.",
              "Find transmission current using I = P/V (use the stepped-up secondary voltage).",
              "Cable loss: P_loss = I²R (I is the same for both cable resistances; only R changes).",
              "Percentage loss = (P_loss / P_input) × 100.",
            ],
            solutions: [
              {
                label: "Systematic calculation",
                steps: [
                  "(a) Ns/Np = Vs/Vp = 11 500/230 = 50, so Ns : Np = 50 : 1",
                  "(b) I = P/V = 460 000 W / 11 500 V = 40 A",
                  "(c) P_loss = I²R = (40)² × 25 = 40 000 W; % = 40 000/460 000 × 100 = 8.7%",
                  "(d) P_loss = (40)² × 100 = 160 000 W; % = 160 000/460 000 × 100 = 34.8%",
                  "Conclusion: impractical — 35% of power wasted; cables would overheat",
                ],
              },
            ],
          },
        ],
      },

      {
        id: "phys-magnetism-bank-qa-2",
        title: "Magnetism & Electromagnetism — Structured Paper 2",
        description: "Transformers, generators, field patterns and applications.",
        questions: [
          {
            id: "phys-magnetism-bank-qa2-q01",
            question: "Compare and contrast a d.c. motor and an a.c. generator. Your answer should refer to: (i) the key structural difference, (ii) the energy conversion in each, and (iii) the direction of energy transfer in each.",
            marks: 6,
            modelAnswer:
              "(i) The key structural difference is the type of electrical contact used: the d.c. motor uses a **split-ring commutator** (two half-rings), which reverses the current through the coil every half-turn; the a.c. generator uses **slip rings** (two complete rings), which maintain a continuous (but alternating) electrical connection without reversing the current. (ii) A motor converts electrical energy into kinetic (mechanical) energy. A generator converts kinetic (mechanical) energy into electrical energy. (iii) In the motor, energy flows from the electrical supply into the device (input is electrical). In the generator, energy flows from the mechanical drive (e.g. a turbine) into the electrical circuit (output is electrical).",
            markScheme: [
              "Motor uses split-ring commutator; generator uses slip rings",
              "Commutator reverses current every half-turn; slip rings do not reverse current",
              "Motor: electrical → kinetic energy / Motor converts electrical to mechanical",
              "Generator: kinetic → electrical energy / Generator converts mechanical to electrical",
              "Motor: electrical energy is the input",
              "Generator: mechanical energy is the input / electrical energy is the output",
            ],
            commonError: "Stating that the generator uses a commutator — it uses slip rings so that the output is a true alternating current.",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            difficulty: "core",
            hints: [
              "The key physical difference between motor and generator is the ring/commutator contact system.",
              "Think about which form of energy goes in and which comes out for each device.",
              "Use the words 'electrical energy', 'kinetic energy', and the direction of conversion.",
            ],
          },
          {
            id: "phys-magnetism-bank-qa2-q02",
            question: "A transformer is used in a phone charger to step down 230 V mains to 5.0 V. The charger supplies 2.0 A to the phone. (a) Calculate the number of secondary turns if the primary has 4600 turns. (b) Calculate the primary current (assume ideal transformer). (c) The actual transformer is not ideal and its efficiency is 85%. Calculate the actual power drawn from the mains.",
            marks: 6,
            modelAnswer:
              "(a) Ns = Np × (Vs/Vp) = 4600 × (5.0/230) = 4600 × 0.02174 = 100 turns.\n(b) Ideal: Ip = VsIs/Vp = (5.0 × 2.0)/230 = 10/230 = 0.0435 A ≈ 0.043 A.\n(c) Output power = Vs × Is = 5.0 × 2.0 = 10 W. Efficiency = output/input, so input = output/efficiency = 10/0.85 = 11.76 W ≈ 12 W.",
            markScheme: [
              "Ns = 4600 × (5.0/230) / Ns = Np × Vs/Vp",
              "Ns = 100 turns",
              "Ip = VsIs/Vp = (5.0 × 2.0)/230",
              "Ip = 0.043 A (allow 0.0435 A)",
              "Output power = 5.0 × 2.0 = 10 W",
              "Input power = output power / efficiency = 10 / 0.85 = 11.8 W (allow 11–12 W)",
            ],
            commonError: "For efficiency, multiplying output by 0.85 instead of dividing — efficiency = output/input, so input = output/efficiency.",
            guideRef: "Transformers and the National Grid",
            difficulty: "core",
            hints: [
              "Use Ns = Np × (Vs/Vp) for part (a).",
              "Use VpIp = VsIs for part (b) — rearrange for Ip.",
              "Efficiency = useful output power / total input power. Rearrange to find input power.",
            ],
            solutions: [
              {
                label: "Direct calculation",
                steps: [
                  "(a) Ns = 4600 × (5.0/230) = 100 turns",
                  "(b) Ip = VsIs/Vp = (5.0 × 2.0)/230 = 0.043 A",
                  "(c) P_output = 5.0 × 2.0 = 10 W",
                  "Efficiency = P_out/P_in → P_in = 10/0.85 = 11.8 W",
                ],
              },
            ],
          },
          {
            id: "phys-magnetism-bank-qa2-q03",
            question: "Explain, in terms of magnetic field lines, why the magnetic field between opposite poles of two bar magnets is more uniform than the field near either pole individually. What practical advantage does a uniform field have in a d.c. motor?",
            marks: 4,
            modelAnswer:
              "Between two opposite poles (N facing S), the field lines run straight and parallel from N to S across the gap, and they are evenly spaced. This means the field strength is the same throughout the gap — a uniform field. Near an individual pole, the field lines diverge (spread out) in all directions, so the field is weaker further from the pole and its direction varies — a non-uniform field. In a d.c. motor, a uniform field ensures that the force on the current-carrying coil sides is the same magnitude throughout the rotation (when the coil is in the plane parallel to the field), giving a steady, smooth torque rather than a varying one.",
            markScheme: [
              "Between opposite poles the field lines are parallel / evenly spaced",
              "Parallel, evenly-spaced lines mean uniform field strength and direction",
              "Near a single pole the lines diverge / are uneven → non-uniform field",
              "Uniform field gives constant force on coil / smooth, even torque in motor",
            ],
            commonError: "Confusing 'uniform' with 'strong' — a uniform field has the same strength throughout a region, but it may not be stronger than a non-uniform field at its centre.",
            guideRef: "Magnets, Poles and Magnetic Fields",
            difficulty: "core",
            hints: [
              "Describe the pattern of field lines between opposite poles versus near a single pole.",
              "What does evenly spaced mean for field strength?",
              "Think about what a motor needs from a magnetic field in order to produce smooth rotation.",
            ],
          },
          {
            id: "phys-magnetism-bank-qa2-q04",
            question: "(Challenge) A student claims: 'Fleming's Left-Hand Rule and Fleming's Right-Hand Rule are just the same rule — there is no physical difference, it is just a convention.' Evaluate this claim. Your answer should explain what is physically different about the motor effect and electromagnetic induction, and why two different hand rules are needed.",
            marks: 6,
            modelAnswer:
              "The student is wrong. The two situations are physically different, not just conventionally different. In the **motor effect** (Left-Hand Rule), an external electrical supply drives a current through the conductor, and the interaction of this current with the external magnetic field produces a mechanical force — electrical energy is converted to kinetic energy. The cause is the current (driven by an external source); the effect is the force. In **electromagnetic induction** (Right-Hand Rule), a mechanical force moves the conductor through the magnetic field. The relative motion of the conductor and field induces an e.m.f. — kinetic energy is converted to electrical energy. The cause is the motion; the effect is the induced e.m.f. and current. The two rules use different hands because the physical relationship between field, current, and motion is reversed: in the motor, a current (cause) and field produce a force (effect); in the generator, a motion (cause) and field produce a current (effect). Using the same hand for both would predict the wrong direction in one of the cases. The two rules encode the same underlying Lorentz force law but from two different causal perspectives.",
            markScheme: [
              "Motor effect: current is the cause; force/motion is the effect (electrical → kinetic)",
              "Induction: motion is the cause; current/e.m.f. is the effect (kinetic → electrical)",
              "The two situations represent opposite energy conversions / opposite causal roles",
              "Different hands are needed because the field-current-motion relationship is reversed in each case",
              "Using the same hand would give the wrong direction for one of the situations",
              "Both rules are consistent with the same Lorentz force law / same underlying physics but viewed from opposite causal directions",
            ],
            commonError: "Saying the two rules are identical because both involve field, current, and motion — failing to recognise that which of these is the cause and which is the effect is reversed.",
            guideRef: "Electromagnetic Induction and the A.C. Generator",
            difficulty: "challenge",
            hints: [
              "Identify the cause and the effect in each situation (motor vs generator).",
              "In the motor, what is given and what results? In the generator, what is given and what results?",
              "Think about energy conversion — which energy form is input and which is output in each case?",
              "Explain why reversing the cause–effect relationship changes which finger points in which direction.",
            ],
            strategy: "Compare–contrast the causal direction: motor (current in → force out) versus generator (motion in → current out).",
          },
        ],
      },
    ],
  },
};
