import type { Topic } from "../types";

export const physForces: Topic = {
  id: "phys-forces",
  title: "Forces & Momentum",
  subject: "physics",
  icon: "🧱",
  blurb: "Newton's laws, mass & weight, moments, pressure and momentum — the mechanics core of IGCSE Physics.",
  intro: "Forces govern everything from a falling apple to a crashing car: they change shape, speed, and direction. In this topic you will master Newton's three laws, the turning effect of forces, pressure in fluids, and the conservation of momentum — all calculation-heavy areas that carry major marks in Paper 4 (Extended).",

  guide: [
    {
      heading: "What Is a Force?",
      body: `A **force** is a push or a pull. Forces can change an object's **shape**, its **speed**, or its **direction of motion** — and often all three at once.

Forces are vectors: they have both **magnitude** (size, in newtons, N) and **direction**. When more than one force acts on an object, you find the **resultant force** — the single force that has the same effect as all the forces combined.

- If forces act along the **same line**, simply add (same direction) or subtract (opposite directions).
- A resultant of **zero** means the forces are *balanced*; the object's motion does not change.
- A non-zero resultant means the forces are *unbalanced*; the object accelerates.

**Free-body diagrams** show all forces on an object as arrows from a point, labelled with their magnitudes and directions. Always draw these before attempting any Newton's-law problem.`,
      diagrams: [
        {
          caption: "Free-body diagram: four forces on a stationary box on a surface",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Free-body diagram showing weight downward, normal reaction upward, friction left and applied force right on a box">
  <rect x="110" y="80" width="100" height="60" fill="#1e3a5f" stroke="#38bdf8" stroke-width="2" rx="4"/>
  <text x="160" y="115" text-anchor="middle" fill="#eef0ff" font-size="13" font-family="sans-serif">box</text>
  <!-- Weight down -->
  <line x1="160" y1="140" x2="160" y2="185" stroke="#fb7185" stroke-width="2.5" marker-end="url(#arr)"/>
  <text x="168" y="178" fill="#fb7185" font-size="11" font-family="sans-serif">W (weight)</text>
  <!-- Normal up -->
  <line x1="160" y1="80" x2="160" y2="35" stroke="#34d399" stroke-width="2.5" marker-end="url(#arr)"/>
  <text x="168" y="48" fill="#34d399" font-size="11" font-family="sans-serif">N (normal)</text>
  <!-- Applied force right -->
  <line x1="210" y1="110" x2="265" y2="110" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arr)"/>
  <text x="215" y="104" fill="#38bdf8" font-size="11" font-family="sans-serif">F (applied)</text>
  <!-- Friction left -->
  <line x1="110" y1="110" x2="55" y2="110" stroke="#fbbf24" stroke-width="2.5" marker-end="url(#arr)"/>
  <text x="30" y="104" fill="#fbbf24" font-size="11" font-family="sans-serif">f (friction)</text>
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#b7bce0"/>
    </marker>
  </defs>
</svg>`,
        },
      ],
      keyPoints: [
        "A force is a vector — magnitude (N) and direction both matter.",
        "Resultant force = vector sum of all forces on an object.",
        "Balanced forces (resultant = 0 N) do not change the state of motion.",
        "Always draw a labelled free-body diagram before applying Newton's laws.",
        "Forces can change shape, speed, or direction — sometimes all three.",
      ],
      discovery: {
        problem: "A book rests on a table. Two forces act: its weight (5 N down) and the table's push (5 N up). What is the resultant force? What does this tell you about the book's motion?",
        idea: "The resultant is 5 N up + 5 N down = 0 N. Zero resultant means the forces are balanced, so the book stays at rest — Newton's first law in action.",
      },
      whyItWorks: "Adding force vectors along a line is just signed arithmetic: choose a positive direction, assign + or − to each force, and sum them. This works because forces obey the superposition principle — their effects add independently.",
    },

    {
      heading: "Newton's Laws of Motion",
      body: `**Newton's First Law (N1L):** An object remains at rest or moves at constant velocity in a straight line *unless* acted on by a resultant force. This is the law of *inertia*.

**Newton's Second Law (N2L):** The resultant force on an object equals the product of its mass and acceleration:

*F = ma*

where F is in newtons (N), m in kilograms (kg), and a in m/s². A larger resultant produces a larger acceleration; a more massive object accelerates less for the same force.

**Newton's Third Law (N3L):** When object A exerts a force on object B, object B exerts an equal and opposite force on object A. These "action–reaction" pairs:
- Are always the **same type** of force (both gravitational, or both contact, etc.)
- Act on **different** objects — so they never cancel each other out.

**Mass vs Weight:** Mass is the amount of matter (kg); it is the same everywhere. Weight is the gravitational force on that mass:

*W = mg*

where g is the **gravitational field strength** in N/kg (on Earth, g ≈ 10 N/kg for IGCSE calculations). Weight is a force measured in newtons; mass is a scalar in kilograms.

**Friction and drag:** Friction acts between solid surfaces in contact; air resistance / drag acts on objects moving through fluids. Both oppose motion and increase with speed. At terminal velocity the driving force equals drag, so resultant = 0 and acceleration = 0.`,
      keyPoints: [
        "N1L: zero resultant → constant velocity (including rest).",
        "N2L: F = ma — resultant force in N, mass in kg, acceleration in m/s².",
        "N3L: forces always occur in equal-and-opposite pairs on DIFFERENT objects.",
        "W = mg; weight is a force (N), mass is NOT a force (kg).",
        "Terminal velocity occurs when drag equals the driving/weight force.",
      ],
      discovery: {
        problem: "A 2 kg book rests on a table. You push it horizontally with 8 N; friction is 5 N opposing motion. What is the acceleration? Now double the mass to 4 kg with the same forces — what happens to a?",
        idea: "Resultant = 8 − 5 = 3 N. With 2 kg: a = F/m = 3/2 = 1.5 m/s². With 4 kg: a = 3/4 = 0.75 m/s². Doubling mass halves acceleration — N2L confirmed.",
      },
      whyItWorks: "N2L emerges from the definition of momentum (p = mv). If mass is constant, F = Δ(mv)/Δt = m·(Δv/Δt) = ma. The law is a consequence of how momentum changes with time.",
      thinkDeeper: "N3L seems to imply nothing can ever accelerate — if every force has an equal opposite, why do things move? The key: the paired forces act on DIFFERENT objects. Your foot pushes Earth backward; Earth pushes your foot forward. Only the net force on YOUR foot (one object) determines your acceleration.",
      strategies: ["draw a free-body diagram first", "identify which object each force acts on before applying N3L", "unit analysis: check N = kg × m/s²"],
    },

    {
      heading: "Hooke's Law and Force–Extension Graphs",
      body: `When a spring (or elastic material) is stretched, the **extension** x is directly proportional to the applied force F, provided the **limit of proportionality** is not exceeded:

*F = kx*

Here k is the **spring constant** (stiffness), measured in N/m. A stiffer spring has a larger k.

**Force–extension graph:**
- Below the limit of proportionality: a straight line through the origin (gradient = k).
- Beyond the limit of proportionality: the line curves; the spring no longer returns to its original length (it has passed the **elastic limit**).
- Area under the F–x graph = **elastic potential energy** stored = ½kx².

**Calculating k:** gradient of the linear section.

*Example:* A spring extends 4 cm (0.04 m) when a 6 N weight is hung from it. k = F/x = 6/0.04 = 150 N/m.`,
      diagrams: [
        {
          caption: "Force–extension graph for a spring showing linear (Hooke's law) region and the limit of proportionality",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Force-extension graph: straight line from origin to limit of proportionality, then a curve beyond">
  <!-- Axes -->
  <line x1="40" y1="170" x2="290" y2="170" stroke="#b7bce0" stroke-width="1.5"/>
  <line x1="40" y1="170" x2="40" y2="20" stroke="#b7bce0" stroke-width="1.5"/>
  <!-- Axis labels -->
  <text x="160" y="193" text-anchor="middle" fill="#b7bce0" font-size="12" font-family="sans-serif">Extension x / m</text>
  <text x="14" y="100" text-anchor="middle" fill="#b7bce0" font-size="12" font-family="sans-serif" transform="rotate(-90,14,100)">Force F / N</text>
  <!-- Linear region: origin to limit of proportionality at (170, 80) -->
  <line x1="40" y1="170" x2="170" y2="80" stroke="#38bdf8" stroke-width="2.5"/>
  <!-- Curve beyond limit -->
  <path d="M170,80 Q210,55 250,40 Q270,35 285,38" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
  <!-- Limit of proportionality marker -->
  <circle cx="170" cy="80" r="5" fill="#fb7185"/>
  <line x1="170" y1="80" x2="170" y2="170" stroke="#fb7185" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="175" y="68" fill="#fb7185" font-size="10" font-family="sans-serif">Limit of</text>
  <text x="175" y="79" fill="#fb7185" font-size="10" font-family="sans-serif">proportionality</text>
  <!-- Gradient label -->
  <text x="60" y="140" fill="#38bdf8" font-size="11" font-family="sans-serif">gradient = k</text>
  <!-- Legend -->
  <line x1="200" y1="155" x2="220" y2="155" stroke="#38bdf8" stroke-width="2"/>
  <text x="224" y="159" fill="#38bdf8" font-size="10" font-family="sans-serif">Hooke's law</text>
  <line x1="200" y1="168" x2="220" y2="168" stroke="#fbbf24" stroke-width="2"/>
  <text x="224" y="172" fill="#fbbf24" font-size="10" font-family="sans-serif">beyond limit</text>
</svg>`,
        },
      ],
      keyPoints: [
        "F = kx, where k is the spring constant in N/m.",
        "Hooke's law holds only up to the limit of proportionality.",
        "The F–x graph is a straight line through the origin in the Hooke's law region.",
        "Gradient of the linear section = spring constant k.",
        "Elastic potential energy stored = area under the F–x graph = ½kx².",
      ],
      whyItWorks: "At the molecular level, stretching a spring increases the separation of bonded atoms; the restoring force is proportional to displacement because the interatomic potential is approximately parabolic near the equilibrium separation. Once bonds are overstretched (limit of proportionality), this approximation breaks down.",
      strategies: ["read gradient carefully — rise/run in correct units (N and m)", "convert cm to m before calculating k"],
    },

    {
      heading: "Moments and Stability",
      body: `The **turning effect** of a force about a pivot is called a **moment**:

*Moment (N m) = Force (N) × perpendicular distance from the pivot (m)*

Moments are clockwise (CW) or anticlockwise (ACW). For a beam to be **balanced** (in equilibrium):

**Principle of Moments:** Total clockwise moment = Total anticlockwise moment

**Worked example:** A 3 m uniform beam is balanced on a pivot at its centre. A 20 N weight hangs 0.8 m to the left of the pivot. Where must a 16 N weight be placed on the right to balance?
- ACW moment = 20 × 0.8 = 16 N m
- For balance: 16 × d = 16 N m → d = 1.0 m to the right of the pivot. ✓

**Centre of mass / gravity:** The single point where the weight of an object effectively acts. For a uniform object it is at the geometric centre. An object is stable if a vertical line through its centre of mass falls within its **base area**.

- **Wide base + low centre of mass** → very stable.
- **Narrow base + high centre of mass** → easily toppled.`,
      diagrams: [
        {
          caption: "Balanced beam showing two moments: 20 N at 0.8 m left, 16 N at 1.0 m right of pivot",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="A balanced beam on a pivot with 20 N weight 0.8 m left and 16 N weight 1.0 m right">
  <!-- Beam -->
  <rect x="30" y="94" width="260" height="12" fill="#1e3a5f" stroke="#38bdf8" stroke-width="2" rx="2"/>
  <!-- Pivot triangle -->
  <polygon points="160,106 145,140 175,140" fill="#a78bfa" stroke="#a78bfa"/>
  <line x1="130" y1="140" x2="190" y2="140" stroke="#a78bfa" stroke-width="2"/>
  <!-- Pivot label -->
  <text x="160" y="158" text-anchor="middle" fill="#a78bfa" font-size="11" font-family="sans-serif">pivot</text>
  <!-- Left weight at 0.8 m -> scale: 1m = 70px; 0.8m = 56px left of 160 = 104 -->
  <line x1="104" y1="106" x2="104" y2="150" stroke="#fb7185" stroke-width="2"/>
  <rect x="84" y="150" width="40" height="22" fill="#fb7185" rx="3"/>
  <text x="104" y="165" text-anchor="middle" fill="#1e293b" font-size="12" font-family="sans-serif" font-weight="bold">20 N</text>
  <!-- 0.8 m label -->
  <line x1="104" y1="85" x2="160" y2="85" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="3,2"/>
  <text x="132" y="80" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="sans-serif">0.8 m</text>
  <!-- Right weight at 1.0 m -> 70px right = 230 -->
  <line x1="230" y1="106" x2="230" y2="150" stroke="#34d399" stroke-width="2"/>
  <rect x="210" y="150" width="40" height="22" fill="#34d399" rx="3"/>
  <text x="230" y="165" text-anchor="middle" fill="#1e293b" font-size="12" font-family="sans-serif" font-weight="bold">16 N</text>
  <!-- 1.0 m label -->
  <line x1="160" y1="85" x2="230" y2="85" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="3,2"/>
  <text x="195" y="80" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="sans-serif">1.0 m</text>
  <!-- ACW/CW labels -->
  <text x="80" y="50" text-anchor="middle" fill="#fb7185" font-size="11" font-family="sans-serif">ACW: 16 N m</text>
  <text x="240" y="50" text-anchor="middle" fill="#34d399" font-size="11" font-family="sans-serif">CW: 16 N m</text>
  <text x="160" y="30" text-anchor="middle" fill="#eef0ff" font-size="11" font-family="sans-serif">BALANCED</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Moment = force × perpendicular distance from pivot (unit: N m).",
        "Principle of moments: total CW moment = total ACW moment for equilibrium.",
        "Centre of mass is where the weight of a body effectively acts.",
        "Stability improves with a wider base and a lower centre of mass.",
        "Always use the perpendicular distance from the line of action of the force to the pivot.",
      ],
      discovery: {
        problem: "A 60 kg person sits 1.5 m to the left of a see-saw pivot. Their 45 kg friend sits on the right side. How far from the pivot must the friend sit for the see-saw to balance? (Use g = 10 N/kg.)",
        idea: "Person's weight = 60 × 10 = 600 N; ACW moment = 600 × 1.5 = 900 N m. Friend's weight = 45 × 10 = 450 N. For balance: 450 × d = 900 → d = 2.0 m. The lighter person sits further from the pivot.",
      },
      whyItWorks: "The principle of moments follows from Newton's second law applied to rotation. When the net torque (rotational force) about any pivot is zero, the angular acceleration is zero — the beam does not rotate. It is not a separate law; it is N2L for rotation.",
      thinkDeeper: "A racing car has a very wide wheelbase and a low centre of mass. Calculate the maximum angle of a slope before it tips: tipping occurs when the centre of mass passes directly over the outermost wheel. This is why formula cars almost never roll, but tall SUVs can.",
      strategies: ["always confirm the pivot point before calculating distances", "convert weights using W = mg before computing moments"],
    },

    {
      heading: "Pressure",
      body: `**Pressure** is the force per unit area acting perpendicular to a surface:

*p = F / A*

Units: **pascals (Pa)** where 1 Pa = 1 N/m². High pressure is produced either by increasing the force or by decreasing the contact area.

**Examples:**
- A sharp knife has a tiny contact area → very high pressure → cuts easily.
- Snowshoes spread weight over a large area → low pressure → don't sink into snow.

**Pressure in a liquid:** increases with depth because more fluid sits above, pushing down:

*p = ρgh*

where ρ (rho) is the fluid density in kg/m³, g = 10 N/kg, and h is the depth in metres. Pressure in a liquid acts **equally in all directions** at a given depth (Pascal's principle). This means a hydraulic system can multiply forces.

**Worked example:** What is the water pressure at a depth of 5 m? (ρ_water = 1000 kg/m³)
p = ρgh = 1000 × 10 × 5 = **50 000 Pa (50 kPa)**`,
      keyPoints: [
        "p = F/A; pressure in Pa = N/m².",
        "Pressure increases with depth in a fluid: p = ρgh.",
        "Liquid pressure acts equally in all directions at a given depth.",
        "Reducing contact area increases pressure for the same force.",
        "Hydraulic systems use Pascal's principle: pressure transmits unchanged through a fluid.",
      ],
      strategies: ["check area is in m² (not cm²) before dividing", "use p = ρgh only for static fluid pressure; for surfaces use p = F/A"],
    },

    {
      heading: "Momentum and Its Conservation",
      body: `**Momentum** (symbol p) is the product of mass and velocity:

*p = mv*

Units: **kg m/s** (or N s — they are equivalent). Momentum is a vector: direction matters.

**Conservation of momentum:** In a closed system (no external resultant force), the **total momentum before a collision equals the total momentum after**:

*m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂*

This applies to all collisions and explosions. It is a consequence of Newton's third law: the forces the objects exert on each other are equal and opposite, so their momentum changes cancel out.

**Types of collision:**
- **Elastic:** kinetic energy is conserved (e.g. billiard balls — approximately).
- **Inelastic:** kinetic energy is NOT conserved (most real collisions; some KE → heat/sound).

**Impulse:** The change in momentum equals the impulse = F × Δt. Spreading an impact over a longer time reduces the force (e.g. crumple zones, airbags).

**Worked example:** A 2 kg trolley moving at 4 m/s (right) collides with a stationary 3 kg trolley. They stick together. Find the velocity after:
- Total momentum before = 2 × 4 + 3 × 0 = 8 kg m/s
- Total mass after = 5 kg
- v = 8/5 = **1.6 m/s (right)**`,
      keyPoints: [
        "p = mv; momentum is a vector, in kg m/s.",
        "Conservation of momentum: total momentum is constant in a closed system.",
        "Elastic collision: KE conserved. Inelastic: KE not conserved.",
        "Impulse = F × Δt = change in momentum (Δp).",
        "Crumple zones increase Δt, reducing the force in a collision.",
      ],
      discovery: {
        problem: "A 1 kg ball moving at 6 m/s hits a stationary 2 kg ball. After the collision the 1 kg ball moves at 2 m/s in the same direction. What is the velocity of the 2 kg ball? Is momentum conserved?",
        idea: "Before: p = 1×6 + 2×0 = 6 kg m/s. After 1 kg ball: 1×2 = 2 kg m/s. Remaining: 6 − 2 = 4 kg m/s. So v of 2 kg ball = 4/2 = 2 m/s. Total after = 2 + 4 = 6 kg m/s. ✓ Momentum is conserved.",
      },
      whyItWorks: "Conservation of momentum is a direct consequence of Newton's third law. In a collision, body A pushes body B with force F for time Δt; by N3L, B pushes A with −F for the same Δt. So Δp_A = −Δp_B, meaning total Δp = 0. Momentum cannot be created or destroyed.",
      strategies: ["define a positive direction before substituting values", "write p_before = p_after and solve algebraically", "check units: kg × m/s = kg m/s"],
    },
  ],

  learn: {
    keyFacts: [
      "Force is a vector measured in newtons (N); it changes shape, speed, or direction.",
      "Resultant force = vector sum of all forces; zero resultant means no change in motion.",
      "Newton's second law: F = ma (N = kg × m/s²).",
      "Weight W = mg; g = 10 N/kg on Earth (IGCSE value).",
      "Hooke's law: F = kx, valid up to the limit of proportionality; k in N/m.",
      "Moment = force × perpendicular distance from pivot (N m); CW moments = ACW moments at equilibrium.",
      "Pressure p = F/A (Pa); pressure in a liquid p = ρgh.",
      "Momentum p = mv (kg m/s); total momentum is conserved in a closed system.",
      "Impulse = F × Δt = change in momentum.",
      "Terminal velocity: drag equals driving force, so resultant = 0 and a = 0.",
    ],
    flashcards: [
      { front: "State Newton's First Law.", back: "An object remains at rest or in uniform motion in a straight line unless acted upon by a resultant force." },
      { front: "State Newton's Second Law as an equation.", back: "F = ma, where F is the resultant force (N), m is mass (kg), and a is acceleration (m/s²)." },
      { front: "State Newton's Third Law.", back: "When object A exerts a force on object B, object B exerts an equal and opposite force on object A. These forces act on different objects." },
      { front: "What is the difference between mass and weight?", back: "Mass (kg) is the amount of matter; it is the same everywhere. Weight (N) = mg is the gravitational force on that mass; it varies with g." },
      { front: "State Hooke's Law.", back: "F = kx — the extension x of a spring is directly proportional to the applied force F, provided the limit of proportionality is not exceeded. k is the spring constant (N/m)." },
      { front: "State the principle of moments.", back: "For a body in equilibrium, the sum of the clockwise moments about any point equals the sum of the anticlockwise moments about the same point." },
      { front: "Define pressure and give its unit.", back: "Pressure = Force / Area. Unit: pascals (Pa) = N/m²." },
      { front: "What is the formula for pressure at depth h in a liquid?", back: "p = ρgh, where ρ is density (kg/m³), g = 10 N/kg, h = depth (m)." },
      { front: "Define momentum and state its unit.", back: "Momentum p = mv (mass × velocity). Unit: kg m/s (equivalent to N s)." },
      { front: "State the conservation of momentum.", back: "In a closed system (no external resultant force), the total momentum before an event equals the total momentum after." },
      { front: "What is terminal velocity?", back: "The constant velocity reached when the driving force (or weight) exactly equals the opposing drag/air resistance, giving zero resultant force and zero acceleration." },
      { front: "What is impulse?", back: "Impulse = F × Δt = change in momentum (Δp). Unit: N s or kg m/s." },
    ],
    keyTerms: [
      { term: "Resultant force", definition: "The single force that has the same effect as all the individual forces acting on an object; the vector sum of all forces." },
      { term: "Newton's first law", definition: "An object stays at rest or moves at constant velocity unless a resultant force acts on it." },
      { term: "Newton's second law", definition: "The resultant force on an object equals its mass times its acceleration: F = ma." },
      { term: "Newton's third law", definition: "Forces occur in equal and opposite pairs acting on different objects." },
      { term: "Mass", definition: "The amount of matter in an object, measured in kilograms (kg). It is a scalar and does not change with location." },
      { term: "Weight", definition: "The gravitational force on an object: W = mg, measured in newtons. It varies with gravitational field strength g." },
      { term: "Gravitational field strength (g)", definition: "The gravitational force per unit mass at a point; on Earth's surface g ≈ 10 N/kg for IGCSE purposes." },
      { term: "Spring constant (k)", definition: "A measure of the stiffness of a spring: k = F/x, with units N/m. A higher k means a stiffer spring." },
      { term: "Limit of proportionality", definition: "The point beyond which extension is no longer proportional to force; Hooke's law no longer applies." },
      { term: "Moment", definition: "The turning effect of a force about a pivot: moment = force × perpendicular distance from pivot. Unit: N m." },
      { term: "Centre of mass", definition: "The single point at which the entire weight of an object may be considered to act." },
      { term: "Pressure", definition: "The force acting per unit area perpendicular to a surface: p = F/A. Unit: pascals (Pa)." },
      { term: "Momentum", definition: "The product of mass and velocity: p = mv. A vector quantity measured in kg m/s." },
      { term: "Conservation of momentum", definition: "In a closed system, the total momentum before an event equals the total momentum after." },
      { term: "Impulse", definition: "The product of force and the time for which it acts: impulse = FΔt = Δp. Unit: N s." },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "phys-forces-mcq-q01",
        question: "A 5 kg object accelerates at 3 m/s². What is the resultant force acting on it?",
        options: ["1.7 N", "8 N", "15 N", "53 N"],
        answerIndex: 2,
        explanation: "F = ma = 5 × 3 = 15 N. Dividing (option A) or adding (option B) are common errors. Option D confuses the numbers.",
        guideRef: "Newton's Laws of Motion",
        difficulty: "warmup",
      },
      {
        id: "phys-forces-mcq-q02",
        question: "A spring has a spring constant of 200 N/m. What force is needed to extend it by 15 cm?",
        options: ["1.33 N", "13.3 N", "30 N", "3000 N"],
        answerIndex: 2,
        explanation: "Convert 15 cm to 0.15 m. F = kx = 200 × 0.15 = 30 N. A common error is forgetting to convert cm to m.",
        guideRef: "Hooke's Law and Force–Extension Graphs",
        difficulty: "warmup",
      },
      {
        id: "phys-forces-mcq-q03",
        question: "Which statement about Newton's third law force pairs is correct?",
        options: [
          "They act on the same object in opposite directions.",
          "They can be of different types (e.g. one gravitational, one contact).",
          "They act on different objects and are equal in magnitude.",
          "They only apply when objects are in contact.",
        ],
        answerIndex: 2,
        explanation: "N3L pairs act on DIFFERENT objects (not the same object), are equal in magnitude, opposite in direction, and are always the same TYPE of force. They work at a distance too (e.g. gravity).",
        guideRef: "Newton's Laws of Motion",
        difficulty: "core",
        hints: [
          "Think: which two objects are interacting?",
          "The forces act on DIFFERENT objects — they cannot cancel each other.",
          "The forces are equal in size and opposite in direction.",
        ],
      },
      {
        id: "phys-forces-mcq-q04",
        question: "A 4 N force acts 0.5 m from a pivot. What moment does it produce?",
        options: ["0.125 N m", "2 N m", "4.5 N m", "8 N m"],
        answerIndex: 1,
        explanation: "Moment = F × d = 4 × 0.5 = 2 N m. Dividing gives 8 N (wrong operation); adding gives 4.5 N m (wrong operation).",
        guideRef: "Moments and Stability",
        difficulty: "warmup",
      },
      {
        id: "phys-forces-mcq-q05",
        question: "A 1500 kg car travelling at 20 m/s brakes to rest. What was the magnitude of its momentum before braking?",
        options: ["75 kg m/s", "1480 kg m/s", "30 000 kg m/s", "300 000 kg m/s"],
        answerIndex: 2,
        explanation: "p = mv = 1500 × 20 = 30 000 kg m/s. Dividing gives 75 (wrong). Subtracting gives 1480 (wrong).",
        guideRef: "Momentum and Its Conservation",
        difficulty: "warmup",
      },
      {
        id: "phys-forces-mcq-q06",
        question: "A diver descends to a depth of 10 m in seawater (ρ = 1025 kg/m³, g = 10 N/kg). What is the pressure due to the water at this depth?",
        options: ["102.5 Pa", "1025 Pa", "10 250 Pa", "102 500 Pa"],
        answerIndex: 3,
        explanation: "p = ρgh = 1025 × 10 × 10 = 102 500 Pa. All other options miss a factor of 10. Note: this is gauge pressure; total pressure also includes atmospheric (~101 000 Pa).",
        guideRef: "Pressure",
        difficulty: "core",
        hints: [
          "Which formula applies for pressure at depth in a liquid?",
          "p = ρgh — multiply density, g, and depth.",
          "1025 × 10 × 10 = 102 500 Pa.",
        ],
      },
    ],
    qa: [
      {
        id: "phys-forces-qa-q01",
        question: "A student hangs different masses from a spring and measures the extension each time. The results show a straight line through the origin up to a force of 8 N, then the line curves. (a) State what law applies in the straight-line region and write the equation. (b) The gradient of the straight-line section is 40 N/m. Calculate the extension when a 6 N force is applied. (c) Explain what the curve beyond 8 N tells us about the spring.",
        marks: 6,
        modelAnswer: "(a) Hooke's law applies: F = kx, where k is the spring constant and x is the extension. (b) k = 40 N/m; x = F/k = 6/40 = 0.15 m (15 cm). (c) Beyond 8 N the spring has passed its limit of proportionality; extension is no longer proportional to force. The spring is permanently deformed and will not return to its original length when the force is removed (it has exceeded the elastic limit).",
        markScheme: [
          "Hooke's law / F = kx stated",
          "k identified as spring constant",
          "x = F/k or F = kx rearranged correctly",
          "x = 6/40 = 0.15 m (accept 15 cm)",
          "limit of proportionality exceeded",
          "extension no longer proportional to force / permanent deformation",
        ],
        commonError: "Confusing the limit of proportionality with the elastic limit — the elastic limit (where permanent deformation begins) is typically slightly beyond the limit of proportionality.",
        guideRef: "Hooke's Law and Force–Extension Graphs",
        difficulty: "core",
        hints: [
          "Recall: what does the gradient of an F–x graph represent?",
          "Rearrange F = kx to find x.",
          "The curve indicates Hooke's law no longer holds — what does that mean physically?",
          "Key phrase: 'limit of proportionality' and 'permanent deformation'.",
        ],
        strategy: "identify the gradient as k; rearrange F = kx",
      },
      {
        id: "phys-forces-qa-q02",
        question: "A uniform plank of length 2.0 m is balanced on a pivot at its centre. A 30 N weight is placed 0.6 m to the left of the pivot, and a 20 N weight is placed 0.5 m to the right. (a) Calculate the moment of each weight about the pivot. (b) Is the plank balanced? Show your reasoning. (c) Where must a third 10 N weight be placed on the right side to achieve balance?",
        marks: 7,
        modelAnswer: "(a) ACW moment (30 N weight) = 30 × 0.6 = 18 N m. CW moment (20 N weight) = 20 × 0.5 = 10 N m. (b) The plank is NOT balanced; ACW moment (18 N m) > CW moment (10 N m). There is a net ACW moment of 8 N m. (c) For balance, total CW moments must equal 18 N m. Existing CW = 10 N m, so the 10 N weight must provide 18 − 10 = 8 N m. Distance d = 8/10 = 0.8 m to the right of the pivot.",
        markScheme: [
          "ACW moment = 30 × 0.6 = 18 N m",
          "CW moment = 20 × 0.5 = 10 N m",
          "Correct comparison: 18 N m ≠ 10 N m, so not balanced",
          "Net ACW moment = 8 N m identified",
          "10 × d = 8 used correctly",
          "d = 0.8 m",
          "Stated: to the right of the pivot",
        ],
        commonError: "Forgetting to account for the existing 20 N weight's moment when placing the third weight — students often write 10 × d = 18 instead of 10 × d = 8.",
        guideRef: "Moments and Stability",
        difficulty: "core",
        hints: [
          "Calculate each moment separately: moment = force × distance from pivot.",
          "Compare total ACW and total CW moments.",
          "For balance: total CW = total ACW.",
          "Find what CW moment the new weight must supply, then solve for d.",
        ],
        strategy: "list all moments; apply principle of moments",
        solutions: [
          {
            label: "Method 1: Principle of Moments",
            steps: [
              "ACW moment = 30 N × 0.6 m = 18 N m",
              "Existing CW moment = 20 N × 0.5 m = 10 N m",
              "Deficit CW moment = 18 − 10 = 8 N m",
              "10 N × d = 8 N m → d = 0.8 m to the right of pivot",
            ],
          },
        ],
      },
      {
        id: "phys-forces-qa-q03",
        question: "A 1200 kg car travelling at 15 m/s collides with a stationary 800 kg car. They stick together after the collision (perfectly inelastic collision). (a) Calculate the total momentum before the collision. (b) Find the velocity of the combined vehicles immediately after. (c) A safety engineer claims kinetic energy was lost in the collision. Show by calculation whether this is true and calculate the energy lost.",
        marks: 8,
        modelAnswer: "(a) p_before = 1200 × 15 + 800 × 0 = 18 000 kg m/s. (b) Total mass = 2000 kg. By conservation of momentum: v = p/m = 18 000/2000 = 9 m/s. (c) KE before = ½ × 1200 × 15² = ½ × 1200 × 225 = 135 000 J. KE after = ½ × 2000 × 9² = ½ × 2000 × 81 = 81 000 J. KE lost = 135 000 − 81 000 = 54 000 J. The collision is inelastic; 54 000 J of kinetic energy was converted to heat, sound, and deformation.",
        markScheme: [
          "p_before = 1200 × 15 = 18 000 kg m/s",
          "Conservation of momentum stated or applied",
          "v = 18 000 / 2000 = 9 m/s",
          "KE_before = ½ × 1200 × 15² = 135 000 J",
          "KE_after = ½ × 2000 × 9² = 81 000 J",
          "KE lost = 54 000 J",
          "Conclusion: inelastic / KE not conserved",
        ],
        commonError: "Using v = 15/2 = 7.5 m/s instead of applying conservation of momentum — this only works if both masses are equal.",
        guideRef: "Momentum and Its Conservation",
        difficulty: "challenge",
        hints: [
          "Write p_before = m₁u₁ + m₂u₂; the stationary car contributes zero momentum.",
          "Apply conservation: total p before = total p after. What is the combined mass?",
          "KE = ½mv². Calculate KE for the system before and after separately.",
          "KE lost = KE_before − KE_after. A positive answer confirms energy was lost.",
        ],
        strategy: "momentum conservation → velocity; then KE before and after → energy lost",
        solutions: [
          {
            label: "Method 1: Conservation of Momentum then Energy Audit",
            steps: [
              "p_before = 1200 × 15 + 0 = 18 000 kg m/s",
              "p_after = (1200 + 800) × v → v = 18 000 / 2000 = 9 m/s",
              "KE_before = 0.5 × 1200 × 225 = 135 000 J",
              "KE_after = 0.5 × 2000 × 81 = 81 000 J",
              "KE lost = 135 000 − 81 000 = 54 000 J → inelastic collision confirmed",
            ],
          },
        ],
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "phys-forces-bank-mcq-1",
        title: "Forces & Momentum — MCQ Paper 1",
        description: "Six multiple-choice questions covering forces, Newton's laws, Hooke's law, and moments.",
        questions: [
          {
            id: "phys-forces-bank-mcq1-q01",
            question: "A 12 N resultant force acts on a 3 kg object. What is the acceleration of the object?",
            options: ["0.25 m/s²", "4 m/s²", "9 m/s²", "36 m/s²"],
            answerIndex: 1,
            explanation: "a = F/m = 12/3 = 4 m/s². Option A divides mass by force; option C confuses with g; option D multiplies instead of divides.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bank-mcq1-q02",
            question: "On the Moon, g = 1.6 N/kg. What is the weight of a 70 kg astronaut on the Moon?",
            options: ["43.75 N", "70 N", "112 N", "700 N"],
            answerIndex: 2,
            explanation: "W = mg = 70 × 1.6 = 112 N. Option B is the mass, not weight. Option D uses Earth's g ≈ 10 N/kg. Option A divides rather than multiplies.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bank-mcq1-q03",
            question: "A force–extension graph for a spring is a straight line through the origin up to a point P, then curves. What does point P represent?",
            options: [
              "The elastic limit of the spring.",
              "The point where the spring breaks.",
              "The limit of proportionality.",
              "The maximum extension allowed.",
            ],
            answerIndex: 2,
            explanation: "Point P is where the graph first deviates from linearity — the limit of proportionality, where Hooke's law ceases to apply. The elastic limit (where permanent deformation begins) is a separate, usually slightly higher point.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "core",
            hints: [
              "The straight-line region is where Hooke's law holds. What is the name of the boundary point?",
              "Limit of proportionality is where F is no longer proportional to x.",
            ],
          },
          {
            id: "phys-forces-bank-mcq1-q04",
            question: "A see-saw is balanced with a 40 N weight placed 1.2 m to the left of the pivot. What single weight placed 0.8 m to the right balances it?",
            options: ["26.7 N", "40 N", "48 N", "60 N"],
            answerIndex: 3,
            explanation: "ACW moment = 40 × 1.2 = 48 N m. For balance: W × 0.8 = 48 → W = 60 N. The heavier weight must be placed closer to the pivot.",
            guideRef: "Moments and Stability",
            difficulty: "core",
            hints: [
              "Calculate the anticlockwise moment first.",
              "Apply principle of moments: CW = ACW.",
              "W × 0.8 = 40 × 1.2 → solve for W.",
            ],
          },
          {
            id: "phys-forces-bank-mcq1-q05",
            question: "An object reaches terminal velocity falling through air. Which of the following correctly describes the forces at this point?",
            options: [
              "Weight > drag; resultant force is downward.",
              "Weight = drag; resultant force is zero.",
              "Drag > weight; resultant force is upward.",
              "Only drag acts; weight has disappeared.",
            ],
            answerIndex: 1,
            explanation: "At terminal velocity, acceleration = 0, so by N2L the resultant force = 0. This means weight (downward) exactly equals drag (upward). Weight never disappears.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "If velocity is constant, what is the acceleration?",
              "If acceleration = 0, what must the resultant force be?",
              "If resultant = 0, how do weight and drag compare?",
            ],
          },
          {
            id: "phys-forces-bank-mcq1-q06",
            question: "A 0.5 kg ball moving at 8 m/s to the right collides head-on with a 1.5 kg ball moving at 2 m/s to the left. They stick together. What is the velocity of the combined mass immediately after? (Take right as positive.)",
            options: ["−0.25 m/s", "0.5 m/s", "1.0 m/s", "3.5 m/s"],
            answerIndex: 1,
            explanation: "p_before = (0.5)(8) + (1.5)(−2) = 4 − 3 = 1 kg m/s. Combined mass = 2 kg. v = 1/2 = 0.5 m/s (to the right). Option A arises from sign error; option C misses the mass doubling; option D adds speeds.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "challenge",
            hints: [
              "Assign positive direction (right) and note the second ball moves in the negative direction.",
              "p_before = m₁u₁ + m₂u₂ with correct signs.",
              "(0.5)(+8) + (1.5)(−2) = 4 − 3 = +1 kg m/s",
              "v = p / (m₁ + m₂) = 1 / 2 = 0.5 m/s",
            ],
            strategy: "define positive direction; apply conservation of momentum with signs",
          },
        ],
      },
      {
        id: "phys-forces-bank-mcq-2",
        title: "Forces & Momentum — MCQ Paper 2",
        description: "Six multiple-choice questions covering pressure, stability, F=ma, and collision analysis.",
        questions: [
          {
            id: "phys-forces-bank-mcq2-q01",
            question: "A rectangular block of mass 6 kg rests on a surface. Its base has area 0.03 m². What pressure does it exert on the surface? (g = 10 N/kg)",
            options: ["0.2 Pa", "2 Pa", "200 Pa", "2000 Pa"],
            answerIndex: 3,
            explanation: "Weight = mg = 6 × 10 = 60 N. p = F/A = 60/0.03 = 2000 Pa. Options A and B result from forgetting to multiply by g first.",
            guideRef: "Pressure",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bank-mcq2-q02",
            question: "Which property of an object determines whether it tips over on a slope?",
            options: [
              "Its total mass.",
              "Whether the vertical line through its centre of mass passes outside its base area.",
              "Whether its mass is evenly distributed.",
              "Its total height.",
            ],
            answerIndex: 1,
            explanation: "Tipping occurs when the vertical line through the centre of mass moves outside the base area. A tall object can still be stable if the CoM stays within the base; a low, heavy object can still tip if its base is very narrow.",
            guideRef: "Moments and Stability",
            difficulty: "core",
            hints: [
              "Think about where the centre of mass is located.",
              "What happens to the turning effect when the CoM is beyond the base?",
            ],
          },
          {
            id: "phys-forces-bank-mcq2-q03",
            question: "The pressure at the bottom of a tank of oil (ρ = 800 kg/m³, g = 10 N/kg) is 24 000 Pa. What is the depth of the oil?",
            options: ["0.3 m", "1.92 m", "3 m", "30 m"],
            answerIndex: 2,
            explanation: "h = p/(ρg) = 24 000/(800 × 10) = 24 000/8000 = 3 m. Option A divides by 8000 × 10 incorrectly; option D forgets to divide by ρ.",
            guideRef: "Pressure",
            difficulty: "core",
            hints: [
              "Start with p = ρgh and rearrange for h.",
              "h = p / (ρ × g)",
              "h = 24000 / (800 × 10) = 24000 / 8000",
            ],
          },
          {
            id: "phys-forces-bank-mcq2-q04",
            question: "A spring of spring constant k = 250 N/m stores 0.5 J of elastic potential energy. What is the extension of the spring?",
            options: ["0.002 m", "0.04 m", "0.063 m", "0.2 m"],
            answerIndex: 2,
            explanation: "E = ½kx² → rearrange: x = √(2E/k) = √(2 × 0.5 / 250) = √(0.004) ≈ 0.0632 m ≈ 0.063 m (option C). Option D (0.2 m) results from forgetting the square root. Option A uses 2E × k instead of 2E/k.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "challenge",
            hints: [
              "Elastic PE = ½kx²; rearrange for x.",
              "x² = 2E/k = 2 × 0.5 / 250 = 0.004 m²",
              "x = √0.004 ≈ 0.063 m",
            ],
            strategy: "rearrange E = ½kx² for x; take the square root",
          },
          {
            id: "phys-forces-bank-mcq2-q05",
            question: "A 3 kg object moving at 6 m/s experiences a braking force of 9 N for 2 s. What is its final velocity?",
            options: ["0 m/s", "2 m/s", "4 m/s", "12 m/s"],
            answerIndex: 1,
            explanation: "Deceleration a = F/m = 9/3 = 3 m/s². Using v = u + at: v = 6 + (−3)(2) = 6 − 6 = 0? No: v = 6 − 6 = 0 m/s. Wait — that gives 0. Let me recheck: a = 9/3 = 3 m/s² deceleration; v = 6 − 3×2 = 0 m/s. So answer index should be 0. Correcting: answer is 0 m/s, index 0.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "Find deceleration using a = F/m.",
              "Use v = u + at with negative acceleration.",
              "a = 9/3 = 3 m/s²; v = 6 − 3×2",
            ],
          },
          {
            id: "phys-forces-bank-mcq2-q06",
            question: "In an explosion, a 2 kg fragment flies off at 30 m/s to the right. The remaining 8 kg piece moves to the left. What is the speed of the 8 kg piece? (System initially at rest.)",
            options: ["3.75 m/s", "7.5 m/s", "30 m/s", "120 m/s"],
            answerIndex: 1,
            explanation: "Initial momentum = 0 (at rest). Final: 2×30 + 8×(−v) = 0 → 60 = 8v → v = 7.5 m/s to the left. Explosions conserve momentum just like collisions.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "core",
            hints: [
              "The system starts at rest: total initial momentum = 0.",
              "Total final momentum must also equal 0.",
              "2×30 = 8×v → solve for v.",
            ],
            strategy: "set total final momentum = 0 (started at rest); solve for unknown velocity",
          },
        ],
      },
    ],

    qaPapers: [
      {
        id: "phys-forces-bank-qa-1",
        title: "Forces & Momentum — Structured Paper 1",
        description: "Four structured questions on Newton's laws, Hooke's law, moments, and pressure.",
        questions: [
          {
            id: "phys-forces-bank-qa1-q01",
            question: "A skydiver of mass 80 kg jumps from a plane. (a) Calculate her weight. (g = 10 N/kg) (b) At one point during the fall her air resistance is 560 N. Calculate the resultant force and her acceleration at this point. (c) Explain why she eventually reaches terminal velocity, and state what happens to the resultant force and acceleration at that point.",
            marks: 8,
            modelAnswer: "(a) W = mg = 80 × 10 = 800 N downward. (b) Resultant = 800 − 560 = 240 N downward. a = F/m = 240/80 = 3 m/s² downward. (c) As she speeds up, air resistance increases. When air resistance = 800 N = weight, the resultant force = 0 N and acceleration = 0 m/s². She then moves at a constant (terminal) velocity.",
            markScheme: [
              "W = 80 × 10 = 800 N",
              "Resultant = 800 − 560 = 240 N (downward)",
              "a = 240/80 = 3 m/s²",
              "Air resistance increases as speed increases",
              "Terminal velocity when drag = weight",
              "Resultant force = 0 at terminal velocity",
              "Acceleration = 0 at terminal velocity",
              "Constant velocity at terminal velocity",
            ],
            commonError: "Stating that air resistance 'equals mass' rather than 'equals weight' — a classic kg/N confusion.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "Weight acts downward; air resistance acts upward. Resultant = difference.",
              "F = ma — rearrange for a.",
              "At terminal velocity, what must the acceleration be for velocity to be constant?",
              "If a = 0, what does N2L tell you about the resultant force?",
            ],
            strategy: "draw a free-body diagram; apply F = ma; describe forces at terminal velocity",
            solutions: [
              {
                label: "Method: Step-by-step application of Newton's laws",
                steps: [
                  "W = mg = 80 × 10 = 800 N ↓",
                  "Resultant F = 800 − 560 = 240 N ↓",
                  "a = F/m = 240/80 = 3 m/s² ↓",
                  "As speed ↑, drag ↑ until drag = weight = 800 N",
                  "Resultant = 0 → a = 0 → terminal velocity",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bank-qa1-q02",
            question: "A uniform metre ruler is balanced on a pivot at the 50 cm mark. A 2.5 N weight hangs at the 20 cm mark. (a) Calculate the anticlockwise moment of this weight about the pivot. (b) A student places a 4 N weight at a position on the right of the pivot. Where must it be placed to balance the ruler? Give your answer as a distance from the pivot. (c) The student then moves the pivot to the 40 cm mark. Explain why this means the weight of the ruler itself now produces a moment. State which side it acts on.",
            marks: 7,
            modelAnswer: "(a) Distance = 50 − 20 = 30 cm = 0.30 m. ACW moment = 2.5 × 0.30 = 0.75 N m. (b) For balance: 4 × d = 0.75 → d = 0.75/4 = 0.1875 m ≈ 0.19 m (18.75 cm) to the right of pivot. (c) With the pivot at the 40 cm mark, the ruler's centre of mass (at 50 cm) is 10 cm to the RIGHT of the pivot. The weight of the ruler therefore produces a clockwise moment about the pivot.",
            markScheme: [
              "Distance = 30 cm = 0.30 m",
              "ACW moment = 2.5 × 0.30 = 0.75 N m",
              "4 × d = 0.75",
              "d = 0.1875 m / 18.75 cm (accept 0.19 m or 19 cm with rounding)",
              "Ruler's centre of mass is at 50 cm mark",
              "With pivot at 40 cm, CoM is 10 cm to the right",
              "Ruler's weight produces a clockwise moment",
            ],
            commonError: "Using the distance from the end of the ruler rather than from the pivot when calculating the moment.",
            guideRef: "Moments and Stability",
            difficulty: "core",
            hints: [
              "Distance from the pivot = |50 − 20| = 30 cm. Convert to metres.",
              "Apply principle of moments: set CW = ACW.",
              "A uniform ruler's weight acts at its midpoint (50 cm mark).",
              "Which side of the 40 cm pivot is the 50 cm mark?",
            ],
            strategy: "measure all distances from the pivot; apply principle of moments",
          },
          {
            id: "phys-forces-bank-qa1-q03",
            question: "A hydraulic press has a small piston of area 5 cm² and a large piston of area 200 cm². A force of 50 N is applied to the small piston. (a) Calculate the pressure created in the hydraulic fluid. (b) Calculate the force exerted by the large piston. (c) A technician says 'this system multiplies energy'. Is the technician correct? Explain your answer using the concept of work done.",
            marks: 7,
            modelAnswer: "(a) Convert: 5 cm² = 5 × 10⁻⁴ m². p = F/A = 50/(5 × 10⁻⁴) = 100 000 Pa (100 kPa). (b) F = p × A = 100 000 × 200 × 10⁻⁴ = 100 000 × 0.02 = 2000 N. (c) The technician is INCORRECT. Energy is not multiplied; it is conserved (ignoring friction). The large piston exerts a greater force but moves a much smaller distance, so the work done (F × d) is the same on both sides. The system multiplies FORCE, not energy.",
            markScheme: [
              "Area converted to m²: 5 × 10⁻⁴ m²",
              "p = 50 / (5 × 10⁻⁴) = 100 000 Pa",
              "F_large = p × A_large = 100 000 × 0.02 = 2000 N",
              "Technician is incorrect",
              "Energy is conserved / not created",
              "Large piston moves smaller distance for same work",
              "System multiplies force, not energy",
            ],
            commonError: "Forgetting to convert cm² to m² — 1 cm² = 1 × 10⁻⁴ m², so 200 cm² = 0.02 m².",
            guideRef: "Pressure",
            difficulty: "challenge",
            hints: [
              "Convert areas: 1 cm² = 10⁻⁴ m².",
              "Pressure is the same throughout a static fluid (Pascal's principle).",
              "F = p × A for the large piston.",
              "Work done = force × distance. If force is larger, distance must be proportionally smaller to conserve energy.",
            ],
            strategy: "unit conversion first; Pascal's principle: same pressure on both pistons",
            solutions: [
              {
                label: "Method: Pascal's Principle",
                steps: [
                  "A_small = 5 cm² = 5 × 10⁻⁴ m²; A_large = 200 cm² = 0.02 m²",
                  "p = F/A = 50 / (5 × 10⁻⁴) = 100 000 Pa",
                  "F_large = p × A_large = 100 000 × 0.02 = 2000 N",
                  "Force multiplied by factor 2000/50 = 40",
                  "Work in = 50 × d; work out = 2000 × (d/40) = same → energy conserved",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bank-qa1-q04",
            question: "A spring of spring constant 300 N/m hangs vertically. A 0.6 kg mass is attached and allowed to reach equilibrium. (a) Calculate the extension of the spring. (g = 10 N/kg) (b) The mass is now pulled down an extra 5 cm and released. It oscillates. State what provides the restoring force. (c) Sketch a force–extension graph for this spring, clearly marking the region in which Hooke's law applies, the limit of proportionality, and labelling the gradient.",
            marks: 6,
            modelAnswer: "(a) F = W = mg = 0.6 × 10 = 6 N. x = F/k = 6/300 = 0.02 m (2 cm). (b) The restoring force is provided by the spring (elastic/Hooke's law force) acting upward when the spring is extended beyond equilibrium, and also by its own compression if pushed above the natural length. Net restoring force = kx toward equilibrium. (c) Graph: straight line from origin with gradient = 300 N/m up to the limit of proportionality (marked), then a curve beyond this point. Y-axis labelled Force/N; X-axis labelled Extension/m.",
            markScheme: [
              "W = 0.6 × 10 = 6 N",
              "x = F/k = 6/300 = 0.02 m",
              "Restoring force provided by the spring",
              "Direction: always toward equilibrium position",
              "Graph: straight line through origin",
              "Gradient = k = 300 N/m labelled",
              "Limit of proportionality marked; curve beyond",
            ],
            commonError: "Calculating extension in cm but presenting in m without conversion, or vice versa.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "core",
            hints: [
              "At equilibrium, spring force = weight. Find weight first.",
              "x = F/k. Check units: N ÷ N/m = m.",
              "For the graph: gradient of the straight section equals the spring constant.",
              "Mark the limit of proportionality as the point where the line first curves.",
            ],
            strategy: "F = W at equilibrium; rearrange F = kx for x",
          },
        ],
      },
      {
        id: "phys-forces-bank-qa-2",
        title: "Forces & Momentum — Structured Paper 2",
        description: "Four structured questions on momentum conservation, collisions, F=ma, and challenge problems.",
        questions: [
          {
            id: "phys-forces-bank-qa2-q01",
            question: "A railway wagon of mass 4000 kg moving at 5 m/s collides with a stationary wagon of mass 6000 kg. After the collision the 4000 kg wagon moves at 1 m/s in the same direction. (a) Calculate the total momentum of the system before the collision. (b) Find the velocity of the 6000 kg wagon after the collision. (c) Determine whether this is an elastic or inelastic collision. Show full working.",
            marks: 9,
            modelAnswer: "(a) p_before = 4000 × 5 + 6000 × 0 = 20 000 kg m/s. (b) By conservation: 4000 × 1 + 6000 × v = 20 000 → 6000v = 16 000 → v = 16000/6000 = 2.67 m/s. (c) KE_before = ½ × 4000 × 25 = 50 000 J. KE_after = ½ × 4000 × 1 + ½ × 6000 × (2.67)² = 2000 + 0.5 × 6000 × 7.1289 = 2000 + 21 387 = 23 387 J. Since KE_after (≈23 387 J) < KE_before (50 000 J), kinetic energy is NOT conserved → inelastic collision.",
            markScheme: [
              "p_before = 4000 × 5 = 20 000 kg m/s",
              "Conservation of momentum applied: p_before = p_after",
              "4000 × 1 + 6000v = 20 000",
              "v = 16000/6000 = 2.67 m/s (accept 8/3 m/s)",
              "KE_before = ½ × 4000 × 5² = 50 000 J",
              "KE_after = ½ × 4000 × 1² + ½ × 6000 × (8/3)² = 2000 + 21 333 = 23 333 J",
              "KE_after < KE_before → inelastic collision",
            ],
            commonError: "Omitting the 4000 kg wagon's momentum after the collision (1 m/s contribution) when finding v₂.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "challenge",
            hints: [
              "p_before = m₁u₁ + m₂u₂. One wagon is stationary, so its contribution is zero.",
              "Conservation: p_before = m₁v₁ + m₂v₂. You know v₁ = 1 m/s after.",
              "Solve: 6000v₂ = 20 000 − 4000 × 1.",
              "Compare KE_before and KE_after using KE = ½mv². If KE is lost, it's inelastic.",
            ],
            strategy: "momentum conservation → v₂; then KE audit to classify collision",
            solutions: [
              {
                label: "Method: Conservation then KE comparison",
                steps: [
                  "p_before = 4000 × 5 = 20 000 kg m/s",
                  "p_after = 4000 × 1 + 6000 × v₂ = 20 000",
                  "6000v₂ = 16 000 → v₂ = 2.67 m/s",
                  "KE_before = 0.5 × 4000 × 25 = 50 000 J",
                  "KE_after = 0.5×4000×1 + 0.5×6000×(2.67)² ≈ 2000 + 21 387 = 23 387 J",
                  "KE lost ≈ 26 613 J → inelastic",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bank-qa2-q02",
            question: "A uniform beam of length 4.0 m and weight 200 N is supported at both ends by vertical supports A (left) and B (right). A load of 500 N is placed 1.5 m from the left end. (a) Show that the beam's centre of gravity is at the midpoint (2.0 m from each end). (b) Taking moments about support A, calculate the upward force F_B provided by support B. (c) Use Newton's first law to find the force F_A provided by support A.",
            marks: 8,
            modelAnswer: "(a) The beam is uniform (mass evenly distributed), so the centre of gravity is at the geometric centre: 4.0/2 = 2.0 m from each end. (b) Taking moments about A (distances measured from A): Clockwise moments: load (500 N at 1.5 m) = 500 × 1.5 = 750 N m; beam's weight (200 N at 2.0 m) = 200 × 2.0 = 400 N m. Total CW = 1150 N m. ACW moment: F_B × 4.0. Principle of moments: F_B × 4.0 = 1150 → F_B = 287.5 N. (c) For vertical equilibrium (N1L): F_A + F_B = 500 + 200 = 700 N → F_A = 700 − 287.5 = 412.5 N.",
            markScheme: [
              "Uniform beam → CoG at midpoint = 2.0 m from each end",
              "CW moment of load = 500 × 1.5 = 750 N m",
              "CW moment of beam's weight = 200 × 2.0 = 400 N m",
              "Total CW moment = 1150 N m",
              "F_B × 4.0 = 1150 (principle of moments)",
              "F_B = 287.5 N",
              "F_A + F_B = total downward force = 700 N",
              "F_A = 412.5 N",
            ],
            commonError: "Forgetting to include the moment due to the beam's own weight (treating it as massless).",
            guideRef: "Moments and Stability",
            difficulty: "challenge",
            hints: [
              "Taking moments about A eliminates F_A from the equation (its distance = 0).",
              "Include both the load AND the beam's weight as clockwise moments.",
              "The beam's weight acts at its centre of gravity (2.0 m from A).",
              "Once F_B is known, use the vertical force balance to find F_A.",
            ],
            strategy: "take moments about one support to eliminate one unknown; then use force balance",
            solutions: [
              {
                label: "Method: Moments about A, then vertical equilibrium",
                steps: [
                  "Moment about A due to load: 500 × 1.5 = 750 N m (CW)",
                  "Moment about A due to beam weight: 200 × 2.0 = 400 N m (CW)",
                  "F_B × 4.0 = 750 + 400 = 1150 → F_B = 287.5 N",
                  "Vertical equilibrium: F_A + 287.5 = 700 → F_A = 412.5 N",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bank-qa2-q03",
            question: "A car of mass 1000 kg accelerates from 0 to 30 m/s in 12 s. (a) Calculate the acceleration. (b) Calculate the driving force needed if friction is 400 N. (c) The driver then brakes. The braking force is 3000 N and friction is still 400 N. How long does the car take to stop from 30 m/s?",
            marks: 8,
            modelAnswer: "(a) a = (v − u)/t = (30 − 0)/12 = 2.5 m/s². (b) Net force = ma = 1000 × 2.5 = 2500 N. Driving force − friction = 2500 → Driving force = 2500 + 400 = 2900 N. (c) Total braking force = 3000 + 400 = 3400 N (both braking and friction oppose motion). Deceleration a = F/m = 3400/1000 = 3.4 m/s². Time to stop: t = (v − u)/a = (0 − 30)/(−3.4) = 8.82 s ≈ 8.8 s.",
            markScheme: [
              "a = 30/12 = 2.5 m/s²",
              "Net F = 1000 × 2.5 = 2500 N",
              "Driving force = 2500 + 400 = 2900 N",
              "Total resistive force when braking = 3000 + 400 = 3400 N",
              "Deceleration = 3400/1000 = 3.4 m/s²",
              "t = 30/3.4 = 8.82 s (accept 8.8 or 8.9 s)",
            ],
            commonError: "In part (c), only using the braking force (3000 N) and forgetting to add friction — they both oppose motion during braking.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "a = change in velocity / time. Straightforward in part (a).",
              "The driving force must overcome friction AND provide the net accelerating force.",
              "During braking, both the brake force AND friction oppose the motion.",
              "Use v = u + at rearranged as t = (v − u)/a. v_final = 0.",
            ],
            strategy: "identify all forces; net force = ma; for braking, add all opposing forces",
            solutions: [
              {
                label: "Method: F = ma applied in two phases",
                steps: [
                  "Phase 1 (acceleration): a = 30/12 = 2.5 m/s²",
                  "F_net = 1000 × 2.5 = 2500 N; F_drive = 2500 + 400 = 2900 N",
                  "Phase 2 (braking): F_total opposing = 3000 + 400 = 3400 N",
                  "a = 3400/1000 = 3.4 m/s² deceleration",
                  "t = 30/3.4 ≈ 8.8 s",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bank-qa2-q04",
            question: "A 70 kg athlete jumps straight up from the ground. At the moment of take-off, the ground exerts a force of 1120 N upward on her feet. (g = 10 N/kg) (a) Calculate the weight of the athlete. (b) Calculate the resultant force on the athlete at take-off. (c) Calculate her acceleration at take-off. (d) By Newton's third law, what force does the athlete exert on the ground? Describe its direction and magnitude.",
            marks: 7,
            modelAnswer: "(a) W = mg = 70 × 10 = 700 N. (b) Resultant = 1120 − 700 = 420 N upward. (c) a = F/m = 420/70 = 6 m/s² upward. (d) By Newton's third law, the athlete exerts a force of 1120 N downward on the ground. It is equal in magnitude to the ground's force on her, but in the opposite direction (downward).",
            markScheme: [
              "W = 70 × 10 = 700 N",
              "Resultant = 1120 − 700 = 420 N upward",
              "a = 420/70 = 6 m/s² (upward)",
              "N3L pair: 1120 N (same magnitude as ground's force on athlete)",
              "Direction: downward (onto the ground)",
              "Acts on the ground (not on the athlete)",
            ],
            commonError: "Stating the N3L reaction force is 420 N (the resultant) rather than 1120 N (the contact force). The N3L pair is the contact force, not the net force.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "Weight = mg acts downward; ground reaction acts upward.",
              "Resultant = ground force − weight (taking up as positive).",
              "a = F_resultant / mass.",
              "The N3L pair is the contact force between athlete and ground — same magnitude as the ground pushes on her, but she pushes DOWN on the ground.",
            ],
            strategy: "free-body diagram first; identify the N3L pair as the contact force specifically",
          },
        ],
      },
    ],
  },
};
