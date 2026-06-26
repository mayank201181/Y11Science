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
        id: "phys-forces-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Forces, Newton's laws, F = ma, mass and weight.",
        questions: [
          {
            id: "phys-forces-bm1-01",
            question: "Which of the following is a non-contact (field) force?",
            options: ["Friction", "Gravitational force", "Air resistance", "Tension in a rope"],
            answerIndex: 1,
            explanation: "Gravitational force acts at a distance without the objects touching, so it is a non-contact force. Friction, air resistance and tension all require physical contact.",
            guideRef: "What Is a Force?",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm1-02",
            question: "Two forces act on a box along the same line: 12 N to the right and 7 N to the left. What is the resultant force?",
            options: ["5 N to the right", "5 N to the left", "19 N to the right", "84 N to the right"],
            answerIndex: 0,
            explanation: "Along one line, subtract opposing forces: 12 − 7 = 5 N, in the direction of the larger force (right). Adding gives 19 N (wrong); multiplying gives 84 (wrong).",
            guideRef: "What Is a Force?",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm1-03",
            question: "A resultant force of zero acts on a moving car. What can be said about its motion?",
            options: [
              "It must be at rest.",
              "It must be slowing down.",
              "It continues at constant velocity.",
              "It accelerates uniformly.",
            ],
            answerIndex: 2,
            explanation: "By Newton's first law, a zero resultant force means no change in velocity. A moving object keeps moving at constant velocity in a straight line; it need not be at rest.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm1-04",
            question: "A resultant force of 18 N acts on an object, giving it an acceleration of 4 m/s². What is the mass of the object?",
            options: ["0.22 kg", "4.5 kg", "14 kg", "72 kg"],
            answerIndex: 1,
            explanation: "F = ma → m = F/a = 18/4 = 4.5 kg. Option D multiplies (18 × 4); option C subtracts; option A inverts the division.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "Start from F = ma and rearrange to make m the subject.",
              "m = F / a.",
              "m = 18 / 4 = 4.5 kg.",
            ],
          },
          {
            id: "phys-forces-bm1-05",
            question: "An astronaut has a mass of 90 kg. What is the difference between her weight on Earth (g = 10 N/kg) and on the Moon (g = 1.6 N/kg)?",
            options: ["144 N", "756 N", "846 N", "900 N"],
            answerIndex: 1,
            explanation: "Earth weight = 90 × 10 = 900 N; Moon weight = 90 × 1.6 = 144 N. Difference = 900 − 144 = 756 N. Option D is the Earth weight, option A the Moon weight.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "Calculate the weight on each body using W = mg.",
              "Earth: 90 × 10 = 900 N. Moon: 90 × 1.6 = 144 N.",
              "Subtract the smaller from the larger.",
            ],
          },
          {
            id: "phys-forces-bm1-06",
            question: "Which statement correctly distinguishes mass from weight?",
            options: [
              "Mass is a force in newtons; weight is in kilograms.",
              "Mass is constant everywhere; weight depends on gravitational field strength.",
              "Mass and weight are always numerically equal.",
              "Weight is a scalar; mass is a vector.",
            ],
            answerIndex: 1,
            explanation: "Mass (kg) is the amount of matter and is the same everywhere. Weight (N) = mg is the gravitational force and changes with g. Weight is the vector (a force); mass is the scalar.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "Which quantity is measured in newtons?",
              "Which quantity changes if you travel to the Moon?",
              "Weight = mg, so it depends on g.",
            ],
          },
          {
            id: "phys-forces-bm1-07",
            question: "A 1200 kg car experiences a forward driving force of 4000 N and a total resistive force of 1000 N. What is its acceleration?",
            options: ["0.83 m/s²", "2.5 m/s²", "3.3 m/s²", "4.2 m/s²"],
            answerIndex: 1,
            explanation: "Resultant = 4000 − 1000 = 3000 N. a = F/m = 3000/1200 = 2.5 m/s². Using 4000 N alone gives 3.33 m/s² (option C, a common error).",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "First find the resultant force by subtracting the resistive force.",
              "Resultant = 4000 − 1000 = 3000 N.",
              "a = F/m = 3000/1200.",
            ],
          },
          {
            id: "phys-forces-bm1-08",
            question: "A book sits on a table. Which is the Newton's-third-law pair of the gravitational pull of the Earth on the book?",
            options: [
              "The normal contact force of the table on the book.",
              "The gravitational pull of the book on the Earth.",
              "The weight of the table.",
              "The friction between book and table.",
            ],
            answerIndex: 1,
            explanation: "An N3L pair is the same type of force acting on the other object. The Earth pulls the book down (gravity); the partner is the book pulling the Earth up (gravity). The normal force is a contact force on the same object, so it is NOT the N3L pair.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "challenge",
            hints: [
              "N3L pairs are the same TYPE of force.",
              "They act on DIFFERENT objects.",
              "If the Earth pulls the book, what does the book pull?",
              "The normal force acts on the same object (the book), so it is not the gravity partner.",
            ],
            strategy: "identify the two interacting objects, then swap the roles for the same force type",
          },
          {
            id: "phys-forces-bm1-09",
            question: "A lift of total mass 800 kg accelerates upward at 1.5 m/s². What is the tension in the supporting cable? (g = 10 N/kg)",
            options: ["6800 N", "8000 N", "9200 N", "12000 N"],
            answerIndex: 2,
            explanation: "Weight = 800 × 10 = 8000 N (down). For upward acceleration: T − W = ma → T = ma + W = 800 × 1.5 + 8000 = 1200 + 8000 = 9200 N. Option A subtracts; option B ignores acceleration.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "challenge",
            hints: [
              "Draw a free-body diagram: tension up, weight down.",
              "Resultant force = T − W and it must be upward.",
              "T − W = ma, so T = ma + W.",
              "T = 800 × 1.5 + 800 × 10 = 1200 + 8000.",
            ],
            strategy: "free-body diagram; resultant = ma in the direction of acceleration",
          },
          {
            id: "phys-forces-bm1-10",
            question: "A constant resultant force acts on an object. Which graph quantity stays constant?",
            options: ["Velocity", "Acceleration", "Displacement", "Momentum"],
            answerIndex: 1,
            explanation: "F = ma: a constant resultant force on a constant mass gives a constant acceleration. Velocity, displacement and momentum all keep changing as the object accelerates.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "warmup",
          },
        ],
      },
      {
        id: "phys-forces-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Friction, drag, terminal velocity, Hooke's law and springs.",
        questions: [
          {
            id: "phys-forces-bm2-01",
            question: "Which statement about friction is correct?",
            options: [
              "Friction always acts in the direction of motion.",
              "Friction opposes the relative motion of surfaces in contact.",
              "Friction only acts when an object is moving.",
              "Friction increases the speed of a sliding object.",
            ],
            answerIndex: 1,
            explanation: "Friction is a contact force that opposes relative motion (or attempted motion) between surfaces. It acts against motion, can act on stationary objects (static friction), and slows sliding objects.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm2-02",
            question: "A spring extends by 0.08 m when a force of 20 N is applied. What is its spring constant?",
            options: ["1.6 N/m", "160 N/m", "250 N/m", "2500 N/m"],
            answerIndex: 2,
            explanation: "k = F/x = 20/0.08 = 250 N/m. Multiplying gives 1.6 (wrong). Forgetting to convert or misplacing the decimal gives 160 or 2500.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm2-03",
            question: "A spring obeys Hooke's law. If the force applied is tripled (within the limit of proportionality), the extension will be:",
            options: ["unchanged", "tripled", "nine times larger", "one third"],
            answerIndex: 1,
            explanation: "Below the limit of proportionality, F = kx means extension is directly proportional to force. Tripling F triples x.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm2-04",
            question: "An object falls through air and reaches terminal velocity. At this instant its acceleration is:",
            options: ["10 m/s² downward", "zero", "increasing", "equal to g/2"],
            answerIndex: 1,
            explanation: "At terminal velocity the velocity is constant, so acceleration = 0. By F = ma this means the resultant force is zero: drag has grown to equal the weight.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "Terminal velocity means the velocity is no longer changing.",
              "If velocity is constant, what is the acceleration?",
              "Zero acceleration implies zero resultant force.",
            ],
          },
          {
            id: "phys-forces-bm2-05",
            question: "A spring has spring constant 500 N/m. What is the elastic potential energy stored when it is extended by 0.10 m (within its limit of proportionality)?",
            options: ["2.5 J", "5.0 J", "25 J", "50 J"],
            answerIndex: 0,
            explanation: "E = ½kx² = ½ × 500 × (0.10)² = ½ × 500 × 0.01 = 2.5 J. Forgetting the square (using 0.10 not 0.01) gives 25 J; omitting the ½ doubles it.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "core",
            hints: [
              "Energy stored = area under the F–x graph = ½kx².",
              "Square the extension: (0.10)² = 0.01 m².",
              "E = 0.5 × 500 × 0.01.",
            ],
            strategy: "use E = ½kx²; square the extension before multiplying",
          },
          {
            id: "phys-forces-bm2-06",
            question: "Two identical springs each of spring constant 120 N/m are joined end to end (in series) and a 6 N load is hung from the combination. What is the total extension?",
            options: ["0.025 m", "0.05 m", "0.10 m", "0.20 m"],
            answerIndex: 2,
            explanation: "Each spring carries the full 6 N load. Each extends x = F/k = 6/120 = 0.05 m. In series the extensions add: 0.05 + 0.05 = 0.10 m. (Equivalently, series springs give a smaller combined constant of 60 N/m, so 6/60 = 0.10 m.)",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "challenge",
            hints: [
              "In a series chain, each spring feels the full load.",
              "Find the extension of one spring: x = F/k = 6/120.",
              "Add the extensions of both springs.",
              "0.05 + 0.05 = 0.10 m.",
            ],
            strategy: "treat each series spring separately; extensions add",
          },
          {
            id: "phys-forces-bm2-07",
            question: "On a load–extension graph for a metal wire, the line is straight then begins to curve at point X. What does point X mark?",
            options: [
              "The breaking point.",
              "The limit of proportionality.",
              "The point of zero extension.",
              "The maximum stiffness.",
            ],
            answerIndex: 1,
            explanation: "Point X is where the load is no longer proportional to extension — the limit of proportionality, beyond which Hooke's law no longer holds. The breaking point is further along, where the wire snaps.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "core",
            hints: [
              "Straight line = proportional region.",
              "The curve begins where proportionality ends.",
              "This boundary is the limit of proportionality.",
            ],
          },
          {
            id: "phys-forces-bm2-08",
            question: "A skydiver opens her parachute. Immediately afterwards, which describes her motion before she reaches a new, lower terminal velocity?",
            options: [
              "Drag exceeds weight, so she decelerates.",
              "Weight exceeds drag, so she accelerates downward.",
              "Drag equals weight, so velocity is constant.",
              "There is no air resistance once the parachute opens.",
            ],
            answerIndex: 0,
            explanation: "Opening the parachute greatly increases the surface area and so increases drag. Drag now exceeds weight, giving an upward resultant force, so she decelerates until drag falls back to equal weight at a new, lower terminal velocity.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "Opening the parachute increases the area, so drag increases sharply.",
              "Compare the new drag with the (unchanged) weight.",
              "If drag > weight, the resultant force is upward.",
            ],
          },
          {
            id: "phys-forces-bm2-09",
            question: "A spring stretches 4.0 cm under a 2.0 N load. Within the limit of proportionality, what load gives a 7.0 cm extension?",
            options: ["1.14 N", "3.5 N", "4.0 N", "14 N"],
            answerIndex: 1,
            explanation: "k = F/x = 2.0/0.040 = 50 N/m. F = kx = 50 × 0.070 = 3.5 N. Alternatively, by proportion: 2.0 × (7.0/4.0) = 3.5 N.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "core",
            hints: [
              "Hooke's law: force is proportional to extension.",
              "Find k first: k = 2.0/0.040 = 50 N/m.",
              "Then F = k × 0.070, or scale 2.0 N by 7.0/4.0.",
            ],
            strategy: "find k, then use F = kx — or scale by the ratio of extensions",
          },
          {
            id: "phys-forces-bm2-10",
            question: "A spring stores 8 J of elastic potential energy at an extension x. Within its limit of proportionality, how much energy is stored at extension 2x?",
            options: ["8 J", "16 J", "24 J", "32 J"],
            answerIndex: 3,
            explanation: "E = ½kx² is proportional to x². Doubling the extension multiplies the energy by 2² = 4, so 8 × 4 = 32 J.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "challenge",
            hints: [
              "Elastic PE depends on the SQUARE of extension: E = ½kx².",
              "If x doubles, x² becomes four times larger.",
              "Multiply the original energy by 4.",
            ],
            strategy: "use the proportionality E ∝ x²",
          },
        ],
      },
      {
        id: "phys-forces-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Moments, principle of moments, centre of mass and stability.",
        questions: [
          {
            id: "phys-forces-bm3-01",
            question: "A force of 25 N acts at a perpendicular distance of 0.40 m from a pivot. What is the moment?",
            options: ["0.016 N m", "10 N m", "25.4 N m", "62.5 N m"],
            answerIndex: 1,
            explanation: "Moment = F × d = 25 × 0.40 = 10 N m. Dividing gives 62.5 (wrong); adding gives 25.4 (wrong).",
            guideRef: "Moments and Stability",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm3-02",
            question: "What is the correct unit for the moment of a force?",
            options: ["N/m", "N m", "N/m²", "m/N"],
            answerIndex: 1,
            explanation: "Moment = force × distance = newton × metre = N m. N/m is a spring constant; N/m² (Pa) is pressure.",
            guideRef: "Moments and Stability",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm3-03",
            question: "A see-saw balances with a 30 N weight 1.6 m left of the pivot. A weight on the right is 1.2 m from the pivot. What is that weight?",
            options: ["22.5 N", "40 N", "48 N", "57.6 N"],
            answerIndex: 1,
            explanation: "Principle of moments: W × 1.2 = 30 × 1.6 = 48 N m → W = 48/1.2 = 40 N. Option C is the moment value (48), not the force.",
            guideRef: "Moments and Stability",
            difficulty: "core",
            hints: [
              "Anticlockwise moment = 30 × 1.6.",
              "Set clockwise moment equal: W × 1.2 = 48.",
              "W = 48 / 1.2.",
            ],
          },
          {
            id: "phys-forces-bm3-04",
            question: "Where is the centre of mass of a uniform rectangular sheet of metal?",
            options: [
              "At one corner.",
              "At the midpoint of the longest edge.",
              "At the point where its diagonals cross.",
              "It has no centre of mass.",
            ],
            answerIndex: 2,
            explanation: "For a uniform, regular lamina the centre of mass is at its geometric centre — where the diagonals intersect.",
            guideRef: "Moments and Stability",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm3-05",
            question: "Which change would make a tall bookcase LESS likely to topple?",
            options: [
              "Raising its centre of mass.",
              "Making its base narrower.",
              "Loading heavy books on the lowest shelves.",
              "Loading heavy books on the highest shelves.",
            ],
            answerIndex: 2,
            explanation: "Stability improves with a lower centre of mass and a wider base. Putting heavy books low lowers the centre of mass, making toppling less likely.",
            guideRef: "Moments and Stability",
            difficulty: "core",
            hints: [
              "Stable objects have a low centre of mass and a wide base.",
              "Where should the heaviest mass go to lower the centre of mass?",
              "Heavy books on low shelves lower the centre of mass.",
            ],
          },
          {
            id: "phys-forces-bm3-06",
            question: "A uniform plank of weight 80 N and length 2.0 m rests on a single pivot 0.5 m from its left end. What downward force at the left end is needed to keep it horizontal?",
            options: ["40 N", "60 N", "80 N", "120 N"],
            answerIndex: 2,
            explanation: "The plank's weight (80 N) acts at its centre, 1.0 m from the left end, i.e. 0.5 m right of the pivot → clockwise moment = 80 × 0.5 = 40 N m. The left end is 0.5 m left of the pivot. For balance: F × 0.5 = 40 → F = 80 N.",
            guideRef: "Moments and Stability",
            difficulty: "challenge",
            hints: [
              "The weight acts at the centre of the plank (1.0 m from the left end).",
              "Find the distance of the centre from the pivot: 1.0 − 0.5 = 0.5 m.",
              "Clockwise moment of weight = 80 × 0.5 = 40 N m.",
              "F × 0.5 = 40, so solve for F.",
            ],
            strategy: "locate the weight at the centre of mass; take moments about the pivot",
          },
          {
            id: "phys-forces-bm3-07",
            question: "A nut is loosened with a spanner. The force applied stays the same but the spanner is replaced by a longer one. The moment about the nut:",
            options: ["decreases", "increases", "stays the same", "becomes zero"],
            answerIndex: 1,
            explanation: "Moment = force × perpendicular distance. A longer spanner increases the distance, so for the same force the moment increases — making the nut easier to turn.",
            guideRef: "Moments and Stability",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm3-08",
            question: "Two children sit on a balanced see-saw. The 40 kg child sits 1.5 m from the pivot. The 30 kg child sits on the other side. How far from the pivot is the 30 kg child? (g = 10 N/kg)",
            options: ["1.125 m", "1.5 m", "2.0 m", "2.5 m"],
            answerIndex: 2,
            explanation: "Weights: 40 × 10 = 400 N and 30 × 10 = 300 N. Moments balance: 400 × 1.5 = 300 × d → 600 = 300d → d = 2.0 m. (The g cancels, so 40 × 1.5 = 30 × d also gives d = 2.0 m.)",
            guideRef: "Moments and Stability",
            difficulty: "core",
            hints: [
              "Convert masses to weights, or note g cancels both sides.",
              "Moment of heavier child = 400 × 1.5 = 600 N m.",
              "300 × d = 600.",
            ],
          },
          {
            id: "phys-forces-bm3-09",
            question: "A uniform metre rule is pivoted at the 30 cm mark. A 4.0 N weight hangs at the 10 cm mark. The rule's weight acts at the 50 cm mark. What is the weight of the rule?",
            options: ["2.0 N", "4.0 N", "8.0 N", "16 N"],
            answerIndex: 1,
            explanation: "Weight at 10 cm is 20 cm (0.20 m) left of the pivot → ACW moment = 4.0 × 0.20 = 0.80 N m. The rule's weight at 50 cm is 20 cm (0.20 m) right of the pivot → CW moment = W × 0.20. Balance: W × 0.20 = 0.80 → W = 4.0 N.",
            guideRef: "Moments and Stability",
            difficulty: "challenge",
            hints: [
              "Distances are measured from the 30 cm pivot.",
              "The 4.0 N weight is 0.20 m from the pivot (ACW).",
              "The rule's weight at 50 cm is also 0.20 m from the pivot (CW).",
              "Equal distances mean equal forces balance: W × 0.20 = 4.0 × 0.20.",
            ],
            strategy: "measure every distance from the pivot; apply the principle of moments",
          },
          {
            id: "phys-forces-bm3-10",
            question: "Why does a bus carrying standing passengers on its upper deck become less stable?",
            options: [
              "Its weight decreases.",
              "Its base area increases.",
              "Its centre of mass is raised.",
              "Its mass moves below the axle.",
            ],
            answerIndex: 2,
            explanation: "Passengers high up raise the centre of mass. A higher centre of mass tips over the edge of the base at a smaller angle, so the bus is less stable.",
            guideRef: "Moments and Stability",
            difficulty: "core",
            hints: [
              "Passengers upstairs add mass high up.",
              "What happens to the centre of mass?",
              "A higher centre of mass reduces stability.",
            ],
          },
        ],
      },
      {
        id: "phys-forces-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Pressure, pressure in liquids, density relationships and mixed forces.",
        questions: [
          {
            id: "phys-forces-bm4-01",
            question: "A force of 60 N acts on an area of 0.020 m². What is the pressure?",
            options: ["1.2 Pa", "300 Pa", "1200 Pa", "3000 Pa"],
            answerIndex: 3,
            explanation: "p = F/A = 60/0.020 = 3000 Pa. Multiplying (60 × 0.02) gives 1.2; misplacing the decimal gives 300 or 1200.",
            guideRef: "Pressure",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm4-02",
            question: "Why does a drawing pin have a sharp point?",
            options: [
              "To reduce the force you apply.",
              "To increase the contact area and lower the pressure.",
              "To decrease the contact area and raise the pressure.",
              "To make the pin lighter.",
            ],
            answerIndex: 2,
            explanation: "A sharp point has a very small contact area. For the same force, p = F/A is large, so the pressure is high enough to pierce the surface.",
            guideRef: "Pressure",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm4-03",
            question: "What is the pressure due to water at a depth of 8.0 m? (ρ = 1000 kg/m³, g = 10 N/kg)",
            options: ["800 Pa", "8000 Pa", "80 000 Pa", "800 000 Pa"],
            answerIndex: 2,
            explanation: "p = ρgh = 1000 × 10 × 8.0 = 80 000 Pa (80 kPa). Each missing or extra factor of 10 gives the other options.",
            guideRef: "Pressure",
            difficulty: "core",
            hints: [
              "Use the liquid-pressure equation p = ρgh.",
              "Substitute ρ = 1000, g = 10, h = 8.0.",
              "1000 × 10 × 8.0 = 80 000 Pa.",
            ],
          },
          {
            id: "phys-forces-bm4-04",
            question: "At a fixed depth in a liquid, the pressure acts:",
            options: [
              "only downward",
              "only sideways",
              "equally in all directions",
              "only upward (the upthrust)",
            ],
            answerIndex: 2,
            explanation: "Pressure in a static liquid acts equally in all directions at a given depth — the basis of Pascal's principle and hydraulic systems.",
            guideRef: "Pressure",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm4-05",
            question: "The pressure at the base of a 2.5 m column of liquid is 20 000 Pa. (g = 10 N/kg) What is the density of the liquid?",
            options: ["80 kg/m³", "800 kg/m³", "1250 kg/m³", "50 000 kg/m³"],
            answerIndex: 1,
            explanation: "ρ = p/(gh) = 20 000/(10 × 2.5) = 20 000/25 = 800 kg/m³. Forgetting a factor of 10 gives 80; dividing the wrong way gives 1250.",
            guideRef: "Pressure",
            difficulty: "core",
            hints: [
              "Rearrange p = ρgh to make ρ the subject.",
              "ρ = p / (g × h).",
              "ρ = 20 000 / (10 × 2.5) = 20 000 / 25.",
            ],
            strategy: "rearrange p = ρgh; divide by g and h",
          },
          {
            id: "phys-forces-bm4-06",
            question: "A cube of side 0.50 m has a mass of 100 kg and rests on one face. What pressure does it exert on the ground? (g = 10 N/kg)",
            options: ["400 Pa", "1000 Pa", "2000 Pa", "4000 Pa"],
            answerIndex: 3,
            explanation: "Weight = 100 × 10 = 1000 N. Area of one face = 0.50 × 0.50 = 0.25 m². p = F/A = 1000/0.25 = 4000 Pa. Forgetting to square the side (using 0.50 m²) gives 2000 Pa.",
            guideRef: "Pressure",
            difficulty: "challenge",
            hints: [
              "Find the weight: W = mg = 100 × 10.",
              "Find the base area: a face of the cube is side × side.",
              "Area = 0.50 × 0.50 = 0.25 m².",
              "p = 1000 / 0.25.",
            ],
            strategy: "weight first (W = mg), then area of the contact face, then p = F/A",
          },
          {
            id: "phys-forces-bm4-07",
            question: "Two liquids X and Y are at the same depth h. X has twice the density of Y. How does the pressure due to X compare with that due to Y?",
            options: [
              "It is half as large.",
              "It is the same.",
              "It is twice as large.",
              "It is four times as large.",
            ],
            answerIndex: 2,
            explanation: "p = ρgh. At equal depth and g, pressure is proportional to density. Doubling ρ doubles p.",
            guideRef: "Pressure",
            difficulty: "core",
            hints: [
              "Compare using p = ρgh with h and g equal.",
              "Pressure is proportional to density.",
              "If density doubles, pressure doubles.",
            ],
          },
          {
            id: "phys-forces-bm4-08",
            question: "A hydraulic system has a small piston of area 0.0010 m² and a large piston of area 0.050 m². A force of 30 N pushes the small piston. What output force does the large piston give? (Neglect friction.)",
            options: ["0.6 N", "600 N", "1500 N", "15 000 N"],
            answerIndex: 2,
            explanation: "Pressure transmitted = F/A = 30/0.0010 = 30 000 Pa. Output force = p × A = 30 000 × 0.050 = 1500 N. Equivalently, force scales by the area ratio 0.050/0.0010 = 50, so 30 × 50 = 1500 N.",
            guideRef: "Pressure",
            difficulty: "challenge",
            hints: [
              "The pressure is the same throughout the fluid (Pascal's principle).",
              "p = F/A on the small piston = 30/0.0010.",
              "Output force = p × area of the large piston.",
              "Or just scale by the area ratio: 0.050/0.0010 = 50.",
            ],
            strategy: "same pressure on both pistons; multiply input force by the area ratio",
          },
          {
            id: "phys-forces-bm4-09",
            question: "A swimming pool is 3.0 m deep. By how much is the water pressure at the bottom greater than at a depth of 1.0 m? (ρ = 1000 kg/m³, g = 10 N/kg)",
            options: ["10 000 Pa", "20 000 Pa", "30 000 Pa", "40 000 Pa"],
            answerIndex: 1,
            explanation: "The difference depends only on the change in depth: Δp = ρg·Δh = 1000 × 10 × (3.0 − 1.0) = 1000 × 10 × 2.0 = 20 000 Pa.",
            guideRef: "Pressure",
            difficulty: "core",
            hints: [
              "Use Δp = ρg·Δh with the change in depth.",
              "Δh = 3.0 − 1.0 = 2.0 m.",
              "Δp = 1000 × 10 × 2.0.",
            ],
          },
          {
            id: "phys-forces-bm4-10",
            question: "A 800 N person stands on snow. With boots the contact area is 0.040 m²; with snowshoes it is 0.40 m². How does using snowshoes change the pressure?",
            options: [
              "It increases from 2000 Pa to 20 000 Pa.",
              "It decreases from 20 000 Pa to 2000 Pa.",
              "It stays at 2000 Pa.",
              "It decreases from 2000 Pa to 200 Pa.",
            ],
            answerIndex: 1,
            explanation: "Boots: p = 800/0.040 = 20 000 Pa. Snowshoes: p = 800/0.40 = 2000 Pa. The larger area gives a smaller pressure, so the person sinks less.",
            guideRef: "Pressure",
            difficulty: "core",
            hints: [
              "Calculate p = F/A for each area.",
              "Boots: 800/0.040 = 20 000 Pa.",
              "Snowshoes: 800/0.40 = 2000 Pa.",
            ],
          },
        ],
      },
    ],

    qaPapers: [
      {
        id: "phys-forces-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Forces, Newton's laws, F = ma, mass and weight.",
        questions: [
          {
            id: "phys-forces-bq1-01",
            question: "Define a force and state two effects a force can have on an object. State the SI unit of force.",
            marks: 4,
            modelAnswer: "A force is a push or a pull on an object. Two effects (any two): it can change the object's shape, change its speed, or change its direction of motion. The SI unit of force is the newton (N).",
            markScheme: [
              "Force is a push or a pull",
              "Effect 1: change shape / change speed / change direction",
              "Effect 2: a second, different effect from the list",
              "Unit: newton / N",
            ],
            commonError: "Giving 'speeds up' and 'slows down' as two separate effects — both are changes of speed and count as one effect.",
            guideRef: "What Is a Force?",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bq1-02",
            question: "A box of weight 60 N rests on a horizontal floor. (a) State the size and direction of the normal contact force from the floor. (b) The box is then pushed horizontally with a force of 18 N, and friction of 18 N acts on it. State the resultant horizontal force and describe the box's motion. (c) Explain, using Newton's first law, why the vertical forces do not change the box's vertical motion.",
            marks: 5,
            modelAnswer: "(a) The normal contact force is 60 N upward (it balances the weight). (b) Resultant horizontal force = 18 − 18 = 0 N. With zero resultant force the box stays at rest (or moves at constant velocity if already moving). (c) The weight (down) and the normal force (up) are equal and opposite, giving a zero resultant in the vertical direction. By Newton's first law a zero resultant means no change in vertical motion, so the box neither rises nor sinks.",
            markScheme: [
              "Normal force = 60 N upward",
              "Resultant horizontal force = 0 N",
              "Box stays at rest / constant velocity",
              "Vertical forces balance (60 N up = 60 N down)",
              "Zero resultant → no change in motion (N1L)",
            ],
            commonError: "Saying the box must be stationary when a zero resultant only means no change in velocity — it could already be moving at constant speed.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bq1-03",
            question: "A trolley of mass 2.5 kg is pulled along a bench. The forward pull is 12 N and friction is 4.5 N. (a) Calculate the resultant force on the trolley. (b) Calculate its acceleration. (c) The same forces now act on a trolley of mass 5.0 kg. Without further calculation, state and explain how the acceleration changes.",
            marks: 6,
            modelAnswer: "(a) Resultant = 12 − 4.5 = 7.5 N forward. (b) a = F/m = 7.5/2.5 = 3.0 m/s². (c) The acceleration halves (to 1.5 m/s²). By F = ma with the same resultant force, acceleration is inversely proportional to mass, so doubling the mass halves the acceleration.",
            markScheme: [
              "Resultant = 12 − 4.5 = 7.5 N",
              "a = F/m used",
              "a = 7.5/2.5 = 3.0 m/s²",
              "Acceleration halves / becomes 1.5 m/s²",
              "Reason: a ∝ 1/m for fixed F (F = ma)",
            ],
            commonError: "Using the 12 N pull alone in F = ma and forgetting to subtract friction first.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "Find the resultant force before using F = ma.",
              "Resultant = pull − friction.",
              "a = F/m = 7.5/2.5.",
              "For part (c) use F = ma: same F, double m.",
            ],
            strategy: "resultant force first, then a = F/m; use proportionality for part (c)",
            solutions: [
              {
                label: "Method: resultant force then F = ma",
                steps: [
                  "Resultant F = 12 − 4.5 = 7.5 N",
                  "a = F/m = 7.5 / 2.5 = 3.0 m/s²",
                  "Double the mass: a = 7.5 / 5.0 = 1.5 m/s² (halved)",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq1-04",
            question: "A student writes: 'My mass is 50 kg, so my weight is 50 N.' (a) Identify the error in this statement. (b) Calculate the student's correct weight on Earth. (g = 10 N/kg) (c) State what the student's mass and weight would be on a planet where g = 25 N/kg.",
            marks: 5,
            modelAnswer: "(a) The student has confused mass with weight. Mass (kg) is the amount of matter; weight (N) is the gravitational force = mg. They are not numerically equal (except by coincidence) and have different units. (b) W = mg = 50 × 10 = 500 N. (c) Mass is unchanged at 50 kg (mass is the same everywhere). Weight = mg = 50 × 25 = 1250 N.",
            markScheme: [
              "Error: mass and weight confused / weight = mg not mass",
              "Weight is a force in N; mass is in kg",
              "W = 50 × 10 = 500 N",
              "Mass on other planet still 50 kg",
              "Weight = 50 × 25 = 1250 N",
            ],
            commonError: "Saying mass changes when g changes — only weight changes; mass is constant.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "Look carefully at the units the student has used.",
              "Weight = mass × gravitational field strength.",
              "W = 50 × 10 for part (b).",
              "Mass does not change with location; recompute weight with the new g.",
            ],
            strategy: "separate the concepts of mass and weight; apply W = mg with the correct g",
            solutions: [
              {
                label: "Method: apply W = mg",
                steps: [
                  "On Earth: W = 50 × 10 = 500 N",
                  "Mass is constant: still 50 kg",
                  "On the other planet: W = 50 × 25 = 1250 N",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq1-05",
            question: "A 0.150 kg ball is thrown and, while in the air, the only significant force on it is gravity. (g = 10 N/kg) (a) Calculate the weight of the ball. (b) Calculate its acceleration while in flight, and state its direction. (c) Explain why the horizontal velocity of the ball stays (nearly) constant during the flight.",
            marks: 6,
            modelAnswer: "(a) W = mg = 0.150 × 10 = 1.5 N. (b) The only force is the weight (1.5 N down). a = F/m = 1.5/0.150 = 10 m/s², directed downward. (This is g — every object in free fall has the same acceleration.) (c) There is no horizontal force acting (air resistance is negligible), so the resultant horizontal force is zero. By Newton's first law, with no resultant force the horizontal velocity does not change.",
            markScheme: [
              "W = 0.150 × 10 = 1.5 N",
              "a = F/m = 1.5/0.150",
              "a = 10 m/s² downward",
              "No horizontal force (air resistance negligible)",
              "Zero horizontal resultant → constant horizontal velocity (N1L)",
            ],
            commonError: "Thinking a heavier ball would accelerate faster — in free fall a = g for all masses because both F and m scale together.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "Weight = mg.",
              "The only vertical force is the weight; use a = F/m.",
              "Notice the mass cancels, giving a = g.",
              "Horizontally, is there any force? Apply N1L.",
            ],
            strategy: "W = mg, then a = F/m (mass cancels to give g); N1L horizontally",
            solutions: [
              {
                label: "Method: weight then acceleration",
                steps: [
                  "W = mg = 0.150 × 10 = 1.5 N",
                  "a = F/m = 1.5 / 0.150 = 10 m/s² downward",
                  "Mass cancels: a = g for any falling object",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq1-06",
            question: "A 1500 kg car accelerates uniformly from rest to 24 m/s in 8.0 s along a straight road. (a) Calculate the acceleration. (b) Calculate the resultant force on the car. (c) The total resistive force (friction and drag) is 1200 N. Calculate the forward driving force from the engine.",
            marks: 6,
            modelAnswer: "(a) a = (v − u)/t = (24 − 0)/8.0 = 3.0 m/s². (b) Resultant force = ma = 1500 × 3.0 = 4500 N. (c) Driving force − resistive force = resultant. Driving force = 4500 + 1200 = 5700 N.",
            markScheme: [
              "a = (24 − 0)/8.0 = 3.0 m/s²",
              "Resultant F = ma used",
              "Resultant = 1500 × 3.0 = 4500 N",
              "Driving force = resultant + resistance",
              "Driving force = 4500 + 1200 = 5700 N",
            ],
            commonError: "Forgetting that the driving force must both produce the resultant AND overcome resistance, so resistance is added on.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "Acceleration = change in velocity ÷ time.",
              "Resultant force = ma.",
              "Driving force = resultant + resistive force.",
              "5700 N is the engine's forward force.",
            ],
            strategy: "find a, then resultant = ma, then add resistance to get the driving force",
            solutions: [
              {
                label: "Method: kinematics then F = ma",
                steps: [
                  "a = (24 − 0)/8.0 = 3.0 m/s²",
                  "Resultant F = ma = 1500 × 3.0 = 4500 N",
                  "Driving force = 4500 + 1200 = 5700 N",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq1-07",
            question: "Explain, using Newton's third law, how a rocket accelerates upward when its engines fire, even in the near-vacuum of space. Identify the action–reaction pair clearly.",
            marks: 4,
            modelAnswer: "The rocket engine pushes the exhaust gases downward with a large force (the action). By Newton's third law, the gases push the rocket upward with an equal and opposite force (the reaction). This upward force (thrust) is the resultant force on the rocket once it exceeds any weight, so the rocket accelerates upward. The pair are: rocket pushes gases down; gases push rocket up — equal in size, opposite in direction, acting on different objects. No surrounding air is needed because the reaction comes from the ejected gases, not from pushing on air.",
            markScheme: [
              "Engine/rocket pushes exhaust gases downward",
              "By N3L gases push rocket upward (equal and opposite)",
              "Forces act on different objects",
              "No air needed / reaction is from the ejected gas",
            ],
            commonError: "Saying the rocket 'pushes against the air' — it works in a vacuum because the reaction is to expelling the exhaust gas.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "What does the rocket push on, and in which direction?",
              "N3L: the partner force is equal and opposite, on a different object.",
              "The gases push back on the rocket.",
              "Explain why no surrounding air is required.",
            ],
            strategy: "name the action force, then state its N3L reaction on the rocket",
          },
          {
            id: "phys-forces-bq1-08",
            question: "A lift and its contents have a total mass of 600 kg. (g = 10 N/kg) (a) Calculate the total weight. (b) The lift accelerates downward at 2.0 m/s². Calculate the tension in the cable. (c) State and explain how the tension compares with the weight, and what a passenger would feel.",
            marks: 7,
            modelAnswer: "(a) W = mg = 600 × 10 = 6000 N. (b) The lift accelerates downward, so the resultant force is downward: W − T = ma → T = W − ma = 6000 − 600 × 2.0 = 6000 − 1200 = 4800 N. (c) The tension (4800 N) is LESS than the weight (6000 N). The resultant downward force is what accelerates the lift down. A passenger would feel lighter than normal (the floor pushes up on them with less than their weight).",
            markScheme: [
              "W = 600 × 10 = 6000 N",
              "Resultant is downward: W − T = ma",
              "T = 6000 − 600 × 2.0",
              "T = 4800 N",
              "Tension < weight",
              "Passenger feels lighter / reduced apparent weight",
            ],
            commonError: "Adding ma to the weight; for downward acceleration the tension must be LESS than the weight, so ma is subtracted.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "challenge",
            hints: [
              "Draw a free-body diagram: tension up, weight down.",
              "The lift accelerates downward, so the resultant is downward.",
              "W − T = ma, so T = W − ma.",
              "T = 6000 − 600 × 2.0.",
            ],
            strategy: "free-body diagram; resultant = ma in the direction of acceleration (downward)",
            solutions: [
              {
                label: "Method: resultant = ma downward",
                steps: [
                  "W = mg = 600 × 10 = 6000 N",
                  "Downward resultant: W − T = ma",
                  "T = W − ma = 6000 − 600 × 2.0 = 6000 − 1200",
                  "T = 4800 N (less than the weight)",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq1-09",
            question: "A box is pushed across a rough floor at a steady (constant) speed by a horizontal force of 30 N. (a) State the size of the friction force. Explain your reasoning. (b) The push is increased to 45 N while friction stays at 30 N. Calculate the resultant force. (c) If the box has a mass of 6.0 kg, calculate its acceleration once the push is 45 N.",
            marks: 6,
            modelAnswer: "(a) Friction = 30 N. At constant speed the resultant force is zero (Newton's first law), so friction must exactly balance the 30 N push. (b) Resultant = 45 − 30 = 15 N in the direction of the push. (c) a = F/m = 15/6.0 = 2.5 m/s².",
            markScheme: [
              "Friction = 30 N",
              "Reason: constant speed → zero resultant (N1L)",
              "Resultant = 45 − 30 = 15 N",
              "a = F/m used",
              "a = 15/6.0 = 2.5 m/s²",
            ],
            commonError: "Assuming friction increases to 45 N when the push increases — here friction is given as staying at 30 N, so a resultant appears.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "Constant speed means zero resultant force.",
              "So friction must equal the steady push.",
              "When the push rises, resultant = push − friction.",
              "a = resultant / mass.",
            ],
            strategy: "use N1L for constant speed; then resultant = ma",
            solutions: [
              {
                label: "Method: N1L then F = ma",
                steps: [
                  "Constant speed → friction = push = 30 N",
                  "New resultant = 45 − 30 = 15 N",
                  "a = F/m = 15/6.0 = 2.5 m/s²",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq1-10",
            question: "Describe an experiment to investigate how the acceleration of a trolley depends on the resultant force applied to it, keeping the mass constant. State the independent, dependent and control variables, and state the relationship you expect to find.",
            marks: 6,
            modelAnswer: "Set up a trolley on a runway, attached over a pulley to a hanging mass that provides the pulling force; tilt the runway slightly to compensate for friction. Use light gates (or a ticker-timer / motion sensor) to measure the trolley's acceleration. Vary the pulling force by moving masses from the trolley to the hanger (so the total mass stays constant) and record the acceleration each time. Independent variable: resultant force. Dependent variable: acceleration. Control variable: total mass of the system (kept constant). Expected result: acceleration is directly proportional to the resultant force (a ∝ F), giving a straight line through the origin, in agreement with F = ma.",
            markScheme: [
              "Method to apply/measure force (hanging mass over pulley)",
              "Method to measure acceleration (light gates / ticker-timer / sensor)",
              "Vary force by moving masses from trolley to hanger (mass constant)",
              "Independent variable = (resultant) force",
              "Dependent variable = acceleration; control = total mass",
              "Expected: a ∝ F (straight line through origin) / F = ma",
            ],
            commonError: "Adding mass to the hanger from outside the system, which changes the total mass being accelerated and spoils the 'constant mass' condition.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "challenge",
            hints: [
              "How will you produce and change the resultant force?",
              "How will you measure acceleration?",
              "To keep the mass constant, move masses between the trolley and the hanger.",
              "What relationship does F = ma predict between a and F?",
            ],
            strategy: "name the variables; keep total mass fixed by transferring masses; predict a ∝ F",
          },
        ],
      },
      {
        id: "phys-forces-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Friction, drag, terminal velocity, Hooke's law and energy stored in springs.",
        questions: [
          {
            id: "phys-forces-bq2-01",
            question: "(a) State Hooke's law. (b) A spring extends by 6.0 cm when a force of 9.0 N is applied. Calculate the spring constant. (c) State the unit of the spring constant.",
            marks: 5,
            modelAnswer: "(a) Hooke's law: the extension of a spring is directly proportional to the applied force, provided the limit of proportionality is not exceeded (F = kx). (b) Convert 6.0 cm = 0.060 m. k = F/x = 9.0/0.060 = 150 N/m. (c) The unit of the spring constant is newtons per metre (N/m).",
            markScheme: [
              "Hooke's law: extension proportional to force",
              "Condition: up to the limit of proportionality",
              "Convert 6.0 cm to 0.060 m",
              "k = F/x = 9.0/0.060 = 150 N/m",
              "Unit: N/m",
            ],
            commonError: "Forgetting to convert cm to m, giving k = 9.0/6.0 = 1.5 N/m (a factor of 100 out).",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "warmup",
            solutions: [
              {
                label: "Method: F = kx",
                steps: [
                  "Convert: 6.0 cm = 0.060 m",
                  "k = F/x = 9.0 / 0.060",
                  "k = 150 N/m",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq2-02",
            question: "A student loads a spring and records the extension. Up to a load of 10 N the graph of load against extension is a straight line through the origin; above 10 N it curves. (a) Name the point where the graph stops being straight. (b) State what F = kx tells you about the straight-line region. (c) Explain what has happened to the spring beyond this point.",
            marks: 5,
            modelAnswer: "(a) The limit of proportionality. (b) In the straight-line region the extension is directly proportional to the load (F = kx), and the gradient of the line equals the spring constant k. (c) Beyond the limit of proportionality the extension is no longer proportional to the load; if the load is increased further past the elastic limit the spring is permanently deformed and will not return to its original length when the load is removed.",
            markScheme: [
              "Limit of proportionality",
              "Extension proportional to load (F = kx)",
              "Gradient of line = spring constant k",
              "Beyond: extension no longer proportional",
              "Permanent deformation / does not return to original length (past elastic limit)",
            ],
            commonError: "Treating the limit of proportionality and the elastic limit as the same point; the elastic limit (start of permanent deformation) is slightly beyond the limit of proportionality.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "core",
            hints: [
              "Where does the straight line end?",
              "What does a straight line through the origin tell you about F and x?",
              "What does the gradient represent?",
              "What is no longer true beyond the point?",
            ],
            strategy: "link the straight line to F = kx; describe loss of proportionality beyond",
          },
          {
            id: "phys-forces-bq2-03",
            question: "A spring of spring constant 80 N/m is extended by 0.25 m, within its limit of proportionality. (a) Calculate the force needed to produce this extension. (b) Calculate the elastic potential energy stored. (c) The spring is now released to fire a 0.20 kg ball. Assuming all the stored energy becomes kinetic energy, calculate the launch speed of the ball.",
            marks: 7,
            modelAnswer: "(a) F = kx = 80 × 0.25 = 20 N. (b) E = ½kx² = ½ × 80 × (0.25)² = ½ × 80 × 0.0625 = 2.5 J. (c) KE = ½mv² = 2.5 J → v² = 2 × 2.5 / 0.20 = 5.0/0.20 = 25 → v = √25 = 5.0 m/s.",
            markScheme: [
              "F = kx = 80 × 0.25 = 20 N",
              "E = ½kx² used",
              "E = ½ × 80 × 0.0625 = 2.5 J",
              "Set ½mv² = 2.5 J",
              "v² = 2 × 2.5 / 0.20 = 25",
              "v = 5.0 m/s",
            ],
            commonError: "Forgetting to square the extension in ½kx², or forgetting to take the square root when finding v.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "challenge",
            hints: [
              "Part (a): F = kx.",
              "Part (b): elastic PE = ½kx²; square the extension.",
              "Part (c): set ½mv² equal to the stored energy.",
              "Rearrange for v: v = √(2E/m).",
            ],
            strategy: "F = kx; then E = ½kx²; then equate to ½mv² and solve for v",
            solutions: [
              {
                label: "Method: spring energy to kinetic energy",
                steps: [
                  "F = kx = 80 × 0.25 = 20 N",
                  "E = ½kx² = 0.5 × 80 × 0.0625 = 2.5 J",
                  "½mv² = 2.5 → v² = 2 × 2.5 / 0.20 = 25",
                  "v = √25 = 5.0 m/s",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq2-04",
            question: "A parachutist of mass 75 kg jumps from a helicopter and falls. (g = 10 N/kg) (a) Calculate her weight. (b) Describe and explain how the resultant force on her changes from the moment she jumps until she reaches terminal velocity, with the parachute still closed. (c) State the value of the air resistance at terminal velocity.",
            marks: 7,
            modelAnswer: "(a) W = mg = 75 × 10 = 750 N. (b) At the instant she jumps her speed is zero so air resistance is zero; the resultant force equals her weight (750 N down) and she accelerates. As she speeds up, air resistance increases, so the resultant (weight − air resistance) decreases and her acceleration decreases. Eventually air resistance grows until it equals her weight; the resultant force becomes zero and she falls at constant (terminal) velocity. (c) At terminal velocity the air resistance equals the weight = 750 N.",
            markScheme: [
              "W = 75 × 10 = 750 N",
              "At start: air resistance = 0, resultant = weight (max acceleration)",
              "As speed increases, air resistance increases",
              "Resultant force decreases, so acceleration decreases",
              "Terminal velocity when resistance = weight, resultant = 0",
              "Air resistance at terminal velocity = 750 N",
            ],
            commonError: "Saying air resistance becomes greater than weight at terminal velocity; at terminal velocity they are exactly equal (resultant = 0).",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "Weight = mg.",
              "What is the air resistance at the moment she jumps (speed = 0)?",
              "How does air resistance change as she speeds up?",
              "Terminal velocity: resultant = 0, so resistance = weight.",
            ],
            strategy: "track weight (constant) vs drag (rises with speed) until they balance",
            solutions: [
              {
                label: "Method: weight and force balance",
                steps: [
                  "W = mg = 75 × 10 = 750 N",
                  "Start: drag = 0 → resultant = 750 N down (accelerates)",
                  "Drag rises with speed → resultant falls → acceleration falls",
                  "Terminal velocity: drag = weight = 750 N, resultant = 0",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq2-05",
            question: "A car has a streamlined shape. (a) State what is meant by drag (air resistance). (b) Explain why a streamlined shape allows a car to reach a higher top speed for the same engine power. (c) Explain, in terms of forces, why every vehicle has a maximum (top) speed.",
            marks: 6,
            modelAnswer: "(a) Drag is the resistive force that acts on an object moving through a fluid (such as air); it opposes the motion and increases as speed increases. (b) A streamlined shape reduces the drag at a given speed, so the driving force balances drag at a higher speed; the car can therefore go faster before reaching the speed where driving force = drag. (c) As a vehicle speeds up, drag increases. The top speed is reached when the drag (plus other resistive forces) grows to equal the maximum driving force; the resultant force is then zero, acceleration is zero, and the speed stays constant — this is the maximum speed.",
            markScheme: [
              "Drag = resistive force from a fluid opposing motion",
              "Drag increases with speed",
              "Streamlining reduces drag at a given speed",
              "Balance (driving force = drag) occurs at a higher speed",
              "Top speed when driving force = total resistive force",
              "Resultant = 0, acceleration = 0 at top speed",
            ],
            commonError: "Saying the engine simply 'runs out of power' — the limit is a force balance (driving force = drag), not a lack of fuel.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "Define drag and note how it depends on speed.",
              "Streamlining changes the drag for a given speed.",
              "Top speed is a force-balance condition.",
              "At top speed, resultant force = 0.",
            ],
            strategy: "relate top speed to the balance between driving force and drag",
          },
          {
            id: "phys-forces-bq2-06",
            question: "A spring is tested. The table shows the load and extension: 2.0 N → 1.0 cm; 4.0 N → 2.0 cm; 6.0 N → 3.0 cm; 8.0 N → 5.0 cm. (a) State, with a reason, between which readings Hooke's law no longer holds. (b) Calculate the spring constant in the proportional region (in N/m). (c) Predict the extension you would expect at 6.0 N if the spring had continued to obey Hooke's law, and compare with the measured value.",
            marks: 6,
            modelAnswer: "(a) From 2.0 N to 6.0 N the extension is proportional (1.0, 2.0, 3.0 cm — equal 0.5 cm per N). Between 6.0 N and 8.0 N proportionality breaks: 8.0 N gives 5.0 cm, but proportionality predicts 4.0 cm. So Hooke's law fails between the 6.0 N and 8.0 N readings (the limit of proportionality lies between them). (b) Using a proportional point, e.g. 6.0 N at 3.0 cm = 0.030 m: k = F/x = 6.0/0.030 = 200 N/m. (c) At 6.0 N the spring is still in the proportional region, so the predicted extension equals the measured value, 3.0 cm. (If asked at 8.0 N: predicted 4.0 cm vs measured 5.0 cm.)",
            markScheme: [
              "Proportional up to 6.0 N (0.5 cm per N) ",
              "8.0 N gives 5.0 cm, not the expected 4.0 cm",
              "Hooke's law fails between 6.0 N and 8.0 N",
              "k from a proportional point: 6.0/0.030",
              "k = 200 N/m",
              "At 6.0 N predicted = measured = 3.0 cm (still proportional)",
            ],
            commonError: "Calculating k from the 8.0 N reading, which is beyond the limit of proportionality and so gives the wrong gradient.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "challenge",
            hints: [
              "Check whether extension increases by equal steps per equal load.",
              "Which reading breaks the pattern?",
              "Use only a proportional point to find k.",
              "k = F/x with x in metres.",
            ],
            strategy: "test for constant extension-per-newton; use only proportional data for k",
            solutions: [
              {
                label: "Method: detect non-linearity, then find k",
                steps: [
                  "Steps: 2N→1cm, 4N→2cm, 6N→3cm (0.5 cm/N, proportional)",
                  "8N→5cm but proportionality predicts 4cm → fails between 6N and 8N",
                  "k = F/x = 6.0/0.030 = 200 N/m",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq2-07",
            question: "A 0.40 kg trolley moves at 3.0 m/s and is brought to rest by a constant frictional force in a distance of 1.8 m. (a) Calculate the trolley's deceleration. (b) Calculate the frictional force acting. (c) State one way the stopping distance would change if the trolley's speed were doubled, and justify it.",
            marks: 7,
            modelAnswer: "(a) Use v² = u² + 2as with v = 0: 0 = 3.0² + 2a(1.8) → 0 = 9.0 + 3.6a → a = −9.0/3.6 = −2.5 m/s² (a deceleration of 2.5 m/s²). (b) F = ma = 0.40 × 2.5 = 1.0 N. (c) The stopping distance would increase to four times (about 7.2 m) for the same friction. Because v² = u² + 2as with the same deceleration, the distance s is proportional to u²; doubling the speed multiplies u² by 4, so the distance becomes 4 times larger.",
            markScheme: [
              "Use v² = u² + 2as with v = 0",
              "0 = 9.0 + 3.6a → a = −2.5 m/s²",
              "Deceleration = 2.5 m/s²",
              "F = ma = 0.40 × 2.5 = 1.0 N",
              "Distance ∝ u² for same deceleration",
              "Doubling speed → 4× distance (≈ 7.2 m)",
            ],
            commonError: "Thinking doubling the speed doubles the stopping distance; for constant deceleration the distance scales with the square of the speed (×4).",
            guideRef: "Newton's Laws of Motion",
            difficulty: "challenge",
            hints: [
              "Use the equation v² = u² + 2as with final velocity zero.",
              "Solve for a, then take its magnitude as the deceleration.",
              "F = ma gives the friction force.",
              "For part (c), how does s depend on u in v² = u² + 2as?",
            ],
            strategy: "kinematics for a, then F = ma; use s ∝ u² for the comparison",
            solutions: [
              {
                label: "Method: kinematics then F = ma",
                steps: [
                  "v² = u² + 2as → 0 = 3.0² + 2a(1.8)",
                  "3.6a = −9.0 → a = −2.5 m/s² (deceleration 2.5 m/s²)",
                  "F = ma = 0.40 × 2.5 = 1.0 N",
                  "s ∝ u²: doubling u gives 4 × 1.8 = 7.2 m",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq2-08",
            question: "Explain why a moving cyclist who stops pedalling will gradually slow down and eventually stop, with reference to the forces involved and Newton's first law.",
            marks: 4,
            modelAnswer: "When the cyclist stops pedalling there is no longer a forward driving force, but resistive forces (friction in the wheels and bearings, and air resistance/drag) still act backward. There is now a resultant force acting backward (opposite to the motion). By Newton's first law, a non-zero resultant force changes the motion: it decelerates the cyclist. As long as the resultant opposes the motion, the cyclist keeps slowing until they stop.",
            markScheme: [
              "No forward driving force after pedalling stops",
              "Resistive forces (friction + air resistance) still act",
              "Resultant force acts backward (opposes motion)",
              "Non-zero resultant changes motion (N1L) → decelerates / stops",
            ],
            commonError: "Saying the cyclist stops 'because there is no force' — in fact there IS a resultant (resistive) force; the missing force is the forward driving force.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "What force disappears when pedalling stops?",
              "What forces still act on the cyclist?",
              "Is the resultant force now zero or non-zero?",
              "Apply N1L to a non-zero resultant.",
            ],
            strategy: "identify the remaining (resistive) forces and apply N1L",
          },
          {
            id: "phys-forces-bq2-09",
            question: "A spring has a natural length of 12.0 cm. When a 5.0 N weight hangs from it, its length becomes 17.0 cm. (g = 10 N/kg) (a) Calculate the spring constant. (b) Calculate the mass that would give a total length of 20.0 cm, assuming the spring still obeys Hooke's law. (c) State one assumption you have made.",
            marks: 7,
            modelAnswer: "(a) Extension = 17.0 − 12.0 = 5.0 cm = 0.050 m. k = F/x = 5.0/0.050 = 100 N/m. (b) For length 20.0 cm, extension = 20.0 − 12.0 = 8.0 cm = 0.080 m. F = kx = 100 × 0.080 = 8.0 N. Mass = W/g = 8.0/10 = 0.80 kg. (c) Assumption (any one): the spring is still within its limit of proportionality / the spring's own weight is negligible / Hooke's law still holds.",
            markScheme: [
              "Extension = 17.0 − 12.0 = 5.0 cm = 0.050 m",
              "k = F/x = 5.0/0.050 = 100 N/m",
              "New extension = 20.0 − 12.0 = 0.080 m",
              "F = kx = 100 × 0.080 = 8.0 N",
              "Mass = W/g = 8.0/10 = 0.80 kg",
              "Assumption: limit of proportionality not exceeded / spring weight negligible",
            ],
            commonError: "Using the total length (17.0 cm or 20.0 cm) as the extension instead of subtracting the natural length first.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "challenge",
            hints: [
              "Extension = stretched length − natural length.",
              "k = F/x (convert cm to m).",
              "For part (b), find the new extension, then F = kx, then mass = W/g.",
              "State a Hooke's-law-related assumption.",
            ],
            strategy: "extension = length − natural length; k = F/x; then F = kx and m = W/g",
            solutions: [
              {
                label: "Method: extension, k, then mass",
                steps: [
                  "Extension = 17.0 − 12.0 = 5.0 cm = 0.050 m",
                  "k = 5.0/0.050 = 100 N/m",
                  "New extension = 20.0 − 12.0 = 8.0 cm = 0.080 m",
                  "F = kx = 100 × 0.080 = 8.0 N",
                  "m = W/g = 8.0/10 = 0.80 kg",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq2-10",
            question: "A 60 kg cyclist and bicycle (combined) are travelling at a constant 8.0 m/s on a level road. (a) State what the resultant force on the cyclist is, and why. (b) The forward driving force is 25 N. State the size of the total resistive force. (c) The cyclist then increases the driving force to 75 N. If the resistive force momentarily stays at 25 N, calculate the initial acceleration.",
            marks: 6,
            modelAnswer: "(a) The resultant force is zero, because the cyclist moves at constant velocity (Newton's first law). (b) At constant velocity the driving force equals the total resistive force, so the resistive force = 25 N. (c) Resultant = 75 − 25 = 50 N. a = F/m = 50/60 = 0.83 m/s² (to 2 s.f.).",
            markScheme: [
              "Resultant force = 0",
              "Reason: constant velocity (N1L)",
              "Resistive force = 25 N (equals driving force)",
              "Resultant = 75 − 25 = 50 N",
              "a = F/m = 50/60",
              "a = 0.83 m/s² (accept 0.8)",
            ],
            commonError: "Using the full 75 N driving force in F = ma instead of the resultant (75 − 25).",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "Constant velocity means zero resultant force.",
              "So driving force = resistive force.",
              "When the driving force rises, resultant = 75 − 25.",
              "a = resultant / total mass.",
            ],
            strategy: "N1L for constant velocity; resultant = ma when forces become unbalanced",
            solutions: [
              {
                label: "Method: force balance then F = ma",
                steps: [
                  "Constant velocity → resultant = 0 → resistive force = 25 N",
                  "New resultant = 75 − 25 = 50 N",
                  "a = F/m = 50/60 = 0.83 m/s²",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-forces-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Moments, principle of moments, beams, centre of mass and stability.",
        questions: [
          {
            id: "phys-forces-bq3-01",
            question: "(a) Define the moment of a force. (b) A spanner is used to apply a force of 40 N at a perpendicular distance of 0.18 m from the centre of a bolt. Calculate the moment. (c) State the principle of moments for a body in equilibrium.",
            marks: 5,
            modelAnswer: "(a) The moment of a force = force × perpendicular distance from the pivot to the line of action of the force (the turning effect of the force). (b) Moment = F × d = 40 × 0.18 = 7.2 N m. (c) Principle of moments: for a body in equilibrium, the sum of the clockwise moments about any point equals the sum of the anticlockwise moments about that point.",
            markScheme: [
              "Moment = force × perpendicular distance from pivot",
              "Moment = 40 × 0.18",
              "= 7.2 N m",
              "Principle: sum of clockwise moments = sum of anticlockwise moments",
              "about the same point / pivot (in equilibrium)",
            ],
            commonError: "Omitting the word 'perpendicular' in the definition, or giving the unit as N/m instead of N m.",
            guideRef: "Moments and Stability",
            difficulty: "warmup",
            solutions: [
              {
                label: "Method: moment = F × d",
                steps: [
                  "Moment = F × d",
                  "= 40 × 0.18",
                  "= 7.2 N m",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq3-02",
            question: "A uniform beam is pivoted at its centre. A 12 N weight is hung 0.30 m to the left of the pivot. (a) Calculate the anticlockwise moment. (b) A 8.0 N weight is to be hung on the right. Calculate the distance from the pivot for balance. (c) State why the weight of the uniform beam itself does not need to be included in this calculation.",
            marks: 6,
            modelAnswer: "(a) ACW moment = 12 × 0.30 = 3.6 N m. (b) For balance: 8.0 × d = 3.6 → d = 3.6/8.0 = 0.45 m to the right of the pivot. (c) The beam is uniform, so its weight acts at its centre of mass, which is at the pivot. Its perpendicular distance from the pivot is zero, so it produces no moment.",
            markScheme: [
              "ACW moment = 12 × 0.30 = 3.6 N m",
              "8.0 × d = 3.6 (principle of moments)",
              "d = 0.45 m",
              "to the right of the pivot",
              "Beam's weight acts at its centre (the pivot)",
              "Distance = 0, so no moment",
            ],
            commonError: "Trying to include the beam's weight even though it acts at the pivot and so has zero moment.",
            guideRef: "Moments and Stability",
            difficulty: "core",
            hints: [
              "ACW moment = force × distance.",
              "Set the clockwise moment equal to the anticlockwise moment.",
              "8.0 × d = 3.6.",
              "Where does a uniform beam's weight act when pivoted at its centre?",
            ],
            strategy: "apply the principle of moments; note the central weight has zero moment arm",
            solutions: [
              {
                label: "Method: principle of moments",
                steps: [
                  "ACW moment = 12 × 0.30 = 3.6 N m",
                  "8.0 × d = 3.6",
                  "d = 0.45 m to the right",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq3-03",
            question: "A uniform plank of length 3.0 m and weight 150 N rests horizontally on two supports, one at each end (A at the left, B at the right). A child of weight 300 N stands 1.0 m from end A. (a) State where the plank's weight acts. (b) By taking moments about A, calculate the upward force from support B. (c) Calculate the upward force from support A.",
            marks: 8,
            modelAnswer: "(a) The plank is uniform, so its weight acts at its centre, 1.5 m from each end. (b) Taking moments about A (distances from A): clockwise moments = child (300 N at 1.0 m) + plank (150 N at 1.5 m) = 300 × 1.0 + 150 × 1.5 = 300 + 225 = 525 N m. Support B provides the anticlockwise moment at 3.0 m: F_B × 3.0 = 525 → F_B = 175 N. (c) Vertical equilibrium: F_A + F_B = total weight = 300 + 150 = 450 N → F_A = 450 − 175 = 275 N.",
            markScheme: [
              "Plank's weight acts at centre, 1.5 m from each end",
              "Moment of child about A = 300 × 1.0 = 300 N m",
              "Moment of plank about A = 150 × 1.5 = 225 N m",
              "F_B × 3.0 = 525",
              "F_B = 175 N",
              "F_A + F_B = 450 N (vertical balance)",
              "F_A = 275 N",
            ],
            commonError: "Forgetting the moment of the plank's own weight, or measuring the child's distance from the wrong support.",
            guideRef: "Moments and Stability",
            difficulty: "challenge",
            hints: [
              "A uniform plank's weight acts at its midpoint.",
              "Take moments about A so F_A has zero moment arm.",
              "Add the moments of BOTH the child and the plank's weight.",
              "Use the vertical force balance to find F_A.",
            ],
            strategy: "take moments about one support to find the other, then use vertical equilibrium",
            solutions: [
              {
                label: "Method: moments about A, then force balance",
                steps: [
                  "Plank weight acts at centre, 1.5 m from A",
                  "Clockwise about A = 300 × 1.0 + 150 × 1.5 = 525 N m",
                  "F_B × 3.0 = 525 → F_B = 175 N",
                  "F_A = (300 + 150) − 175 = 275 N",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq3-04",
            question: "(a) Explain what is meant by the centre of mass of an object. (b) Describe an experiment to find the centre of mass of an irregular flat card (lamina) using a plumb line. (c) Explain how the result of the experiment locates the centre of mass.",
            marks: 6,
            modelAnswer: "(a) The centre of mass is the single point at which the whole weight of the object can be considered to act. (b) Make a small hole near the edge of the card and hang it freely from a pin so it can swing. Hang a plumb line (a mass on a thread) from the same pin and, when both are still, draw a line on the card along the plumb line. Repeat by hanging the card from a different hole and drawing a second line. (c) When an object hangs freely, its centre of mass lies directly below the point of suspension (otherwise there would be a resultant moment turning it). Each plumb line passes through the centre of mass, so the point where the lines cross is the centre of mass.",
            markScheme: [
              "Centre of mass = point where the whole weight appears to act",
              "Hang card freely from a hole/pin so it can swing",
              "Use a plumb line from the same point; mark the vertical line",
              "Repeat from a different hole and mark a second line",
              "Centre of mass hangs directly below the suspension point",
              "Intersection of the lines = centre of mass",
            ],
            commonError: "Drawing only one line — at least two suspension points are needed to fix the point of intersection.",
            guideRef: "Moments and Stability",
            difficulty: "core",
            hints: [
              "Define centre of mass in terms of where the weight acts.",
              "Hang the card freely and use a plumb line to mark a vertical.",
              "Why must you repeat from a second hole?",
              "Where does the centre of mass sit relative to the suspension point?",
            ],
            strategy: "freely hanging object → centre of mass directly below pivot; two lines intersect",
          },
          {
            id: "phys-forces-bq3-05",
            question: "A see-saw is 4.0 m long and pivoted at its centre. A 250 N child sits at the far left end. (a) Calculate the moment of this child about the pivot. (b) A 400 N adult sits on the right. How far from the pivot must the adult sit to balance the see-saw? (c) The 250 N child is now joined by a 150 N child sitting next to them (also at the far left end). State and explain whether the adult must move closer to or further from the pivot to rebalance.",
            marks: 7,
            modelAnswer: "(a) The child is 2.0 m from the central pivot. Moment = 250 × 2.0 = 500 N m (anticlockwise). (b) 400 × d = 500 → d = 500/400 = 1.25 m from the pivot. (c) The total left-hand weight is now 250 + 150 = 400 N at 2.0 m, giving 400 × 2.0 = 800 N m. To balance, 400 × d = 800 → d = 2.0 m. The adult must move further from the pivot (from 1.25 m to 2.0 m) because the anticlockwise moment has increased.",
            markScheme: [
              "Child distance = 2.0 m (half of 4.0 m)",
              "Moment = 250 × 2.0 = 500 N m",
              "400 × d = 500",
              "d = 1.25 m",
              "New left moment = 400 × 2.0 = 800 N m",
              "New d = 2.0 m → adult moves further out",
            ],
            commonError: "Using the full 4.0 m length instead of 2.0 m (the distance from the central pivot to the end).",
            guideRef: "Moments and Stability",
            difficulty: "core",
            hints: [
              "The pivot is at the centre, so the end is half the length away.",
              "Moment = force × distance from pivot.",
              "Set clockwise = anticlockwise to find d.",
              "Adding weight increases the left moment — which way must the adult move?",
            ],
            strategy: "measure distances from the central pivot; apply the principle of moments twice",
            solutions: [
              {
                label: "Method: principle of moments, before and after",
                steps: [
                  "Child 2.0 m from pivot: moment = 250 × 2.0 = 500 N m",
                  "400 × d = 500 → d = 1.25 m",
                  "Two children: 400 N at 2.0 m → 800 N m",
                  "400 × d = 800 → d = 2.0 m (further out)",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq3-06",
            question: "A crane uses a horizontal arm pivoted at a tower. The load of 5000 N hangs 8.0 m from the pivot on one side. A counterweight hangs 2.0 m from the pivot on the other side. (a) Calculate the moment produced by the load. (b) Calculate the counterweight needed to balance the load's moment. (c) Explain why, in practice, the counterweight is often made adjustable.",
            marks: 7,
            modelAnswer: "(a) Moment of load = 5000 × 8.0 = 40 000 N m. (b) For balance: W × 2.0 = 40 000 → W = 40 000/2.0 = 20 000 N. (c) The load lifted by a crane varies (different masses are lifted) and the load can be moved along the arm, changing its moment. An adjustable counterweight lets the operator keep the clockwise and anticlockwise moments balanced so the crane does not topple.",
            markScheme: [
              "Moment of load = 5000 × 8.0 = 40 000 N m",
              "W × 2.0 = 40 000 (principle of moments)",
              "W = 20 000 N",
              "Load/its position varies in use",
              "Adjustable counterweight keeps moments balanced / prevents toppling",
            ],
            commonError: "Dividing the moment by the load distance (8.0 m) instead of the counterweight distance (2.0 m).",
            guideRef: "Moments and Stability",
            difficulty: "core",
            hints: [
              "Moment of the load = force × its distance from the pivot.",
              "Balance: counterweight moment = load moment.",
              "W × 2.0 = 40 000.",
              "Why might the load (and so its moment) change during use?",
            ],
            strategy: "apply the principle of moments; relate adjustability to varying loads",
            solutions: [
              {
                label: "Method: principle of moments",
                steps: [
                  "Load moment = 5000 × 8.0 = 40 000 N m",
                  "W × 2.0 = 40 000",
                  "W = 20 000 N",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq3-07",
            question: "A uniform metre rule is balanced on a knife-edge pivot. When a 0.20 N weight is hung at the 15 cm mark, the rule balances with the pivot at the 40 cm mark. (a) State where the weight of the rule acts. (b) Taking moments about the pivot, calculate the weight of the rule. (c) Hence calculate the mass of the rule. (g = 10 N/kg)",
            marks: 8,
            modelAnswer: "(a) The rule is uniform, so its weight acts at its centre, the 50 cm mark. (b) Pivot at 40 cm. The 0.20 N weight at 15 cm is 25 cm = 0.25 m to the left of the pivot → anticlockwise moment = 0.20 × 0.25 = 0.050 N m. The rule's weight at 50 cm is 10 cm = 0.10 m to the right of the pivot → clockwise moment = W × 0.10. Balance: W × 0.10 = 0.050 → W = 0.50 N. (c) Mass = W/g = 0.50/10 = 0.050 kg (50 g).",
            markScheme: [
              "Rule's weight acts at 50 cm mark",
              "Distance of 0.20 N weight from pivot = 0.25 m",
              "ACW moment = 0.20 × 0.25 = 0.050 N m",
              "Rule's weight distance from pivot = 0.10 m",
              "W × 0.10 = 0.050 → W = 0.50 N",
              "Mass = W/g = 0.50/10 = 0.050 kg (50 g)",
            ],
            commonError: "Measuring distances from the ends of the rule rather than from the pivot at the 40 cm mark.",
            guideRef: "Moments and Stability",
            difficulty: "challenge",
            hints: [
              "A uniform rule's weight acts at the 50 cm mark.",
              "Find each distance from the 40 cm pivot (in metres).",
              "ACW moment = 0.20 × 0.25; CW moment = W × 0.10.",
              "Set them equal, then use mass = W/g.",
            ],
            strategy: "the rule's weight acts at 50 cm; take moments about the pivot, then m = W/g",
            solutions: [
              {
                label: "Method: moments about the pivot",
                steps: [
                  "0.20 N weight is 0.25 m left of the 40 cm pivot",
                  "ACW moment = 0.20 × 0.25 = 0.050 N m",
                  "Rule's weight (at 50 cm) is 0.10 m right of pivot",
                  "W × 0.10 = 0.050 → W = 0.50 N",
                  "m = W/g = 0.50/10 = 0.050 kg",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq3-08",
            question: "(a) State two factors that affect the stability of an object. (b) Explain why a racing car is designed with a wide wheelbase and a low body. (c) A tall, narrow vase is more easily knocked over than a wide bowl of the same mass. Explain this in terms of the centre of mass and the base.",
            marks: 6,
            modelAnswer: "(a) Two factors: the width of the base (a wider base is more stable) and the height of the centre of mass (a lower centre of mass is more stable). (b) A wide wheelbase gives a wide base area and a low body keeps the centre of mass low. This means the car can tilt a long way before the vertical line through its centre of mass passes outside its wheels, so it is very stable and unlikely to roll over. (c) The tall narrow vase has a high centre of mass and a small base, so only a small tilt moves the line of action of its weight outside the base, creating a toppling moment. The wide bowl has a low centre of mass and a large base, so it must be tilted much further before its weight acts outside the base; it is harder to topple.",
            markScheme: [
              "Factor 1: width of base (wider = more stable)",
              "Factor 2: height of centre of mass (lower = more stable)",
              "Racing car: wide wheelbase = wide base",
              "Low body = low centre of mass",
              "Vase: high centre of mass + small base topples with small tilt",
              "Topples when weight line passes outside the base",
            ],
            commonError: "Saying a heavier object is automatically more stable; stability depends on base width and centre-of-mass height, not mass alone.",
            guideRef: "Moments and Stability",
            difficulty: "core",
            hints: [
              "Name the two geometric factors that govern stability.",
              "Relate the racing car's design to each factor.",
              "Toppling happens when the weight acts outside the base.",
              "Compare tilt angles for the vase and the bowl.",
            ],
            strategy: "link stability to base width and centre-of-mass height; toppling = weight outside base",
          },
          {
            id: "phys-forces-bq3-09",
            question: "A door of width 0.80 m is opened by pushing at right angles to it. (a) A force of 15 N is applied at the handle, on the edge furthest from the hinge. Calculate the moment about the hinge. (b) A second person pushes with the same 15 N force but only 0.30 m from the hinge. Calculate their moment. (c) Explain why door handles are placed on the edge furthest from the hinge.",
            marks: 6,
            modelAnswer: "(a) Moment = F × d = 15 × 0.80 = 12 N m. (b) Moment = 15 × 0.30 = 4.5 N m. (c) Placing the handle on the edge furthest from the hinge gives the largest perpendicular distance, so the same force produces the largest moment (turning effect). This makes the door easiest to open.",
            markScheme: [
              "Moment = 15 × 0.80 = 12 N m",
              "Moment = 15 × 0.30 = 4.5 N m",
              "Handle far from hinge = largest distance",
              "Largest distance → largest moment for the same force",
              "Door easiest to open",
            ],
            commonError: "Thinking the force determines how easy the door is to open; for a fixed force it is the distance from the hinge (the moment) that matters.",
            guideRef: "Moments and Stability",
            difficulty: "warmup",
            solutions: [
              {
                label: "Method: moment = F × d",
                steps: [
                  "At the handle: 15 × 0.80 = 12 N m",
                  "Near the hinge: 15 × 0.30 = 4.5 N m",
                  "Larger distance → larger moment",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq3-10",
            question: "A uniform shelf bracket carries a 60 N flowerpot. The bracket is bolted to a wall; the bolt acts as a pivot at the bottom. The flowerpot hangs 0.25 m horizontally from the wall. (a) Calculate the clockwise moment of the flowerpot about the bolt. (b) A horizontal stay (support) is fixed to the wall 0.20 m above the bolt and pulls the bracket back toward the wall. Calculate the tension force in the stay needed to balance the flowerpot's moment. (c) Explain why this tension is greater than the weight of the flowerpot.",
            marks: 8,
            modelAnswer: "(a) Clockwise moment of flowerpot = 60 × 0.25 = 15 N m. (b) The stay's tension acts horizontally at 0.20 m above the bolt, providing an anticlockwise moment T × 0.20. For balance: T × 0.20 = 15 → T = 15/0.20 = 75 N. (c) The stay acts at a smaller perpendicular distance from the pivot (0.20 m) than the flowerpot (0.25 m). To produce an equal moment from a shorter lever arm, the force must be larger; hence T (75 N) is greater than the flowerpot's weight (60 N).",
            markScheme: [
              "Clockwise moment = 60 × 0.25 = 15 N m",
              "Stay provides anticlockwise moment T × 0.20",
              "T × 0.20 = 15 (principle of moments)",
              "T = 75 N",
              "Stay's lever arm (0.20 m) < flowerpot's (0.25 m)",
              "Shorter lever arm needs larger force for equal moment",
            ],
            commonError: "Assuming the tension equals the weight; the different perpendicular distances mean the forces differ even though the moments are equal.",
            guideRef: "Moments and Stability",
            difficulty: "challenge",
            hints: [
              "Clockwise moment = weight × horizontal distance.",
              "The stay's moment = tension × its distance above the bolt.",
              "Set the two moments equal: T × 0.20 = 15.",
              "Compare the two lever-arm distances to explain part (c).",
            ],
            strategy: "balance the two moments about the bolt; smaller lever arm needs a larger force",
            solutions: [
              {
                label: "Method: principle of moments about the bolt",
                steps: [
                  "Flowerpot moment = 60 × 0.25 = 15 N m (clockwise)",
                  "Stay moment = T × 0.20 (anticlockwise)",
                  "T × 0.20 = 15 → T = 75 N",
                  "0.20 m < 0.25 m, so T > 60 N",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-forces-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Pressure, pressure in liquids, density relationships and hydraulics.",
        questions: [
          {
            id: "phys-forces-bq4-01",
            question: "(a) Define pressure and give the equation linking pressure, force and area. (b) State the SI unit of pressure and what it is equivalent to. (c) A force of 200 N acts on an area of 0.50 m². Calculate the pressure.",
            marks: 5,
            modelAnswer: "(a) Pressure is the force acting per unit area, at right angles to a surface: p = F/A. (b) The SI unit is the pascal (Pa), which is equivalent to one newton per square metre (1 Pa = 1 N/m²). (c) p = F/A = 200/0.50 = 400 Pa.",
            markScheme: [
              "Pressure = force per unit area (perpendicular)",
              "p = F/A",
              "Unit: pascal / Pa",
              "1 Pa = 1 N/m²",
              "p = 200/0.50 = 400 Pa",
            ],
            commonError: "Giving the unit as N/m (newtons per metre) rather than N/m² (newtons per square metre).",
            guideRef: "Pressure",
            difficulty: "warmup",
            solutions: [
              {
                label: "Method: p = F/A",
                steps: [
                  "p = F/A",
                  "= 200 / 0.50",
                  "= 400 Pa",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq4-02",
            question: "A brick has dimensions 0.20 m × 0.10 m × 0.060 m and a weight of 24 N. (a) Calculate the pressure it exerts when resting on its largest face. (b) Calculate the pressure when resting on its smallest face. (c) State which orientation gives the greater pressure and explain why.",
            marks: 7,
            modelAnswer: "(a) Largest face = 0.20 × 0.10 = 0.020 m². p = F/A = 24/0.020 = 1200 Pa. (b) Smallest face = 0.10 × 0.060 = 0.0060 m². p = F/A = 24/0.0060 = 4000 Pa. (c) Resting on the smallest face gives the greater pressure (4000 Pa). For the same weight (force), a smaller contact area gives a larger pressure, since p = F/A.",
            markScheme: [
              "Largest face area = 0.20 × 0.10 = 0.020 m²",
              "p = 24/0.020 = 1200 Pa",
              "Smallest face area = 0.10 × 0.060 = 0.0060 m²",
              "p = 24/0.0060 = 4000 Pa",
              "Smallest face gives greater pressure",
              "Reason: smaller area → larger pressure for same force",
            ],
            commonError: "Choosing the wrong pair of dimensions for a face, or mixing up which face is largest/smallest.",
            guideRef: "Pressure",
            difficulty: "core",
            hints: [
              "The area of a face = product of the two relevant side lengths.",
              "Largest face uses the two largest sides; smallest face uses the two smallest.",
              "p = F/A with F = 24 N.",
              "Smaller area gives larger pressure.",
            ],
            strategy: "compute each face area, then p = F/A; relate pressure inversely to area",
            solutions: [
              {
                label: "Method: p = F/A for each face",
                steps: [
                  "Largest face: 0.20 × 0.10 = 0.020 m² → p = 24/0.020 = 1200 Pa",
                  "Smallest face: 0.10 × 0.060 = 0.0060 m² → p = 24/0.0060 = 4000 Pa",
                  "Smallest face → greatest pressure",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq4-03",
            question: "A dam holds back fresh water. (ρ = 1000 kg/m³, g = 10 N/kg) (a) Calculate the water pressure at a depth of 12 m. (b) Explain why dams are built much thicker at the base than at the top. (c) State whether the pressure at a given depth depends on the surface area of the lake. Justify your answer.",
            marks: 7,
            modelAnswer: "(a) p = ρgh = 1000 × 10 × 12 = 120 000 Pa (120 kPa). (b) Pressure in a liquid increases with depth (p = ρgh). The water pushes hardest at the bottom of the dam, so the dam must be thicker and stronger there to withstand the larger force. (c) No — the pressure at a given depth depends only on ρ, g and h, not on the surface area or total volume of water. A narrow deep column and a wide lake have the same pressure at the same depth.",
            markScheme: [
              "p = ρgh = 1000 × 10 × 12",
              "= 120 000 Pa (120 kPa)",
              "Pressure increases with depth",
              "Greatest force at the base, so thicker there",
              "Pressure does not depend on surface area",
              "Justify: p = ρgh depends only on ρ, g, h",
            ],
            commonError: "Thinking a larger lake gives a higher pressure; pressure at depth depends only on depth, density and g.",
            guideRef: "Pressure",
            difficulty: "core",
            hints: [
              "Use p = ρgh for part (a).",
              "How does pressure change as depth increases?",
              "Where is the pressure (and force) on the dam greatest?",
              "Does p = ρgh contain any area term?",
            ],
            strategy: "apply p = ρgh; note it depends only on depth, density and g",
            solutions: [
              {
                label: "Method: p = ρgh",
                steps: [
                  "p = ρgh = 1000 × 10 × 12",
                  "= 120 000 Pa (120 kPa)",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq4-04",
            question: "A measuring cylinder contains a liquid. The pressure at the bottom, due to the liquid alone, is 6800 Pa and the depth of liquid is 0.85 m. (g = 10 N/kg) (a) Calculate the density of the liquid. (b) Suggest, with a reason, what the liquid might be from this density. (c) State the new pressure at the bottom if the depth of the same liquid were doubled.",
            marks: 6,
            modelAnswer: "(a) ρ = p/(gh) = 6800/(10 × 0.85) = 6800/8.5 = 800 kg/m³. (b) A density of 800 kg/m³ is less than water (1000 kg/m³); the liquid could be oil (e.g. cooking/olive oil or paraffin), which typically has a density around 800–920 kg/m³ and floats on water. (c) Pressure is proportional to depth (p = ρgh), so doubling the depth doubles the pressure: 2 × 6800 = 13 600 Pa.",
            markScheme: [
              "ρ = p/(gh) used",
              "ρ = 6800/(10 × 0.85) = 6800/8.5",
              "ρ = 800 kg/m³",
              "Less dense than water → e.g. oil",
              "Pressure ∝ depth (p = ρgh)",
              "Doubling depth → 13 600 Pa",
            ],
            commonError: "Dividing p by g only (forgetting h) or by h only (forgetting g) when finding the density.",
            guideRef: "Pressure",
            difficulty: "core",
            hints: [
              "Rearrange p = ρgh for ρ.",
              "ρ = p / (g × h).",
              "ρ = 6800 / (10 × 0.85).",
              "For part (c), how does p depend on h?",
            ],
            strategy: "rearrange p = ρgh for ρ; use proportionality for the depth change",
            solutions: [
              {
                label: "Method: rearrange p = ρgh",
                steps: [
                  "ρ = p/(gh) = 6800/(10 × 0.85)",
                  "= 6800/8.5 = 800 kg/m³",
                  "Doubling depth doubles pressure: 13 600 Pa",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq4-05",
            question: "A diver descends in seawater of density 1030 kg/m³. (g = 10 N/kg) Atmospheric pressure at the surface is 100 000 Pa. (a) Calculate the pressure due to the seawater alone at a depth of 20 m. (b) Calculate the total pressure on the diver at this depth. (c) Explain why a diver must exhale steadily while rising to the surface.",
            marks: 7,
            modelAnswer: "(a) p_water = ρgh = 1030 × 10 × 20 = 206 000 Pa. (b) Total pressure = atmospheric + water pressure = 100 000 + 206 000 = 306 000 Pa. (c) As the diver rises, the surrounding pressure decreases. Gas in the lungs is at the higher pressure of depth; as external pressure falls, this gas expands. If the diver holds their breath the expanding air could over-inflate and damage the lungs, so they must exhale steadily to release the expanding gas.",
            markScheme: [
              "p_water = ρgh = 1030 × 10 × 20",
              "= 206 000 Pa",
              "Total = atmospheric + water pressure",
              "= 100 000 + 206 000",
              "= 306 000 Pa",
              "Rising → pressure falls → trapped lung gas expands; exhale to avoid lung damage",
            ],
            commonError: "Forgetting to add atmospheric pressure when asked for the TOTAL pressure (giving only the gauge pressure).",
            guideRef: "Pressure",
            difficulty: "challenge",
            hints: [
              "First find the water pressure with p = ρgh.",
              "Total pressure also includes atmospheric pressure.",
              "Add the two pressures for part (b).",
              "Think about how trapped gas behaves as pressure decreases.",
            ],
            strategy: "p = ρgh for water; add atmospheric for total; gas expands as pressure falls",
            solutions: [
              {
                label: "Method: gauge then total pressure",
                steps: [
                  "p_water = ρgh = 1030 × 10 × 20 = 206 000 Pa",
                  "Total = 100 000 + 206 000",
                  "= 306 000 Pa",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq4-06",
            question: "A hydraulic car jack has a small input piston of area 0.0020 m² and a large output piston of area 0.040 m². (a) A force of 90 N is applied to the input piston. Calculate the pressure in the fluid. (b) Calculate the force exerted by the output piston. (c) State the assumption you made about the hydraulic fluid, and explain why a liquid rather than a gas is used.",
            marks: 8,
            modelAnswer: "(a) p = F/A = 90/0.0020 = 45 000 Pa. (b) Pressure is transmitted equally through the fluid (Pascal's principle), so output force = p × A = 45 000 × 0.040 = 1800 N. (c) Assumption: the fluid is incompressible (and the system is frictionless / pressure is transmitted undiminished). A liquid is used because liquids are virtually incompressible, so the input movement is transmitted directly to the output. A gas would compress, absorbing the motion, so the force transfer would be inefficient.",
            markScheme: [
              "p = F/A = 90/0.0020 = 45 000 Pa",
              "Pascal's principle: pressure transmitted equally",
              "Output force = p × A = 45 000 × 0.040",
              "= 1800 N",
              "Assumption: fluid incompressible / transmits pressure fully",
              "Liquid used because (nearly) incompressible; a gas would compress",
            ],
            commonError: "Forgetting that the pressure is the same on both pistons, or multiplying by the wrong area when finding the output force.",
            guideRef: "Pressure",
            difficulty: "challenge",
            hints: [
              "Pressure on the input piston = F/A.",
              "Pascal's principle: the same pressure acts on the output piston.",
              "Output force = pressure × output area.",
              "Why must the fluid not compress?",
            ],
            strategy: "find the fluid pressure from the input, then multiply by the output area",
            solutions: [
              {
                label: "Method: Pascal's principle",
                steps: [
                  "p = F/A = 90/0.0020 = 45 000 Pa",
                  "Same pressure acts on the output piston",
                  "F_out = p × A = 45 000 × 0.040 = 1800 N",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq4-07",
            question: "A rectangular swimming pool is 25 m long, 10 m wide and filled with water to a depth of 2.0 m. (ρ = 1000 kg/m³, g = 10 N/kg) (a) Calculate the pressure on the bottom of the pool due to the water. (b) Calculate the total force the water exerts on the flat bottom of the pool. (c) Show that this force equals the weight of the water in the pool.",
            marks: 8,
            modelAnswer: "(a) p = ρgh = 1000 × 10 × 2.0 = 20 000 Pa. (b) Area of bottom = 25 × 10 = 250 m². Force = p × A = 20 000 × 250 = 5 000 000 N (5.0 MN). (c) Volume of water = 25 × 10 × 2.0 = 500 m³. Mass = ρ × V = 1000 × 500 = 500 000 kg. Weight = mg = 500 000 × 10 = 5 000 000 N. This equals the force on the bottom, as expected, because the water's weight is supported by the pressure acting over the base.",
            markScheme: [
              "p = ρgh = 1000 × 10 × 2.0 = 20 000 Pa",
              "Area = 25 × 10 = 250 m²",
              "Force = p × A = 20 000 × 250 = 5 000 000 N",
              "Volume = 25 × 10 × 2.0 = 500 m³",
              "Mass = ρV = 500 000 kg; weight = mg = 5 000 000 N",
              "Force on bottom = weight of water",
            ],
            commonError: "Using the wrong area (e.g. a side wall) when calculating the force on the bottom, or mixing up volume and area.",
            guideRef: "Pressure",
            difficulty: "challenge",
            hints: [
              "Pressure on the bottom uses p = ρgh.",
              "Force = pressure × area of the bottom.",
              "For part (c): find the volume, then mass = ρV, then weight = mg.",
              "Compare the weight with the force from part (b).",
            ],
            strategy: "p = ρgh then F = pA; cross-check with weight = ρVg",
            solutions: [
              {
                label: "Method: pressure–force and weight check",
                steps: [
                  "p = ρgh = 1000 × 10 × 2.0 = 20 000 Pa",
                  "Bottom area = 25 × 10 = 250 m²",
                  "Force = 20 000 × 250 = 5 000 000 N",
                  "Volume = 500 m³; mass = 500 000 kg; weight = 5 000 000 N (matches)",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq4-08",
            question: "A simple barometer and a manometer both use the height of a liquid column to measure pressure. (a) Explain why mercury (ρ ≈ 13 600 kg/m³) is used in a barometer rather than water. (b) Atmospheric pressure is 101 000 Pa. Calculate the height of a mercury column it can support. (g = 10 N/kg) (c) Calculate the height of a water column (ρ = 1000 kg/m³) the same pressure would support, and comment on the practicality.",
            marks: 8,
            modelAnswer: "(a) Mercury is much denser than water, so atmospheric pressure supports a much shorter column (p = ρgh, so larger ρ gives smaller h for the same p). A water barometer would need to be impractically tall (about 10 m). (b) h = p/(ρg) = 101 000/(13 600 × 10) = 101 000/136 000 = 0.743 m ≈ 0.74 m (about 74 cm). (c) For water: h = p/(ρg) = 101 000/(1000 × 10) = 101 000/10 000 = 10.1 m. A 10 m tube is far too tall to be practical, which is why dense mercury is used.",
            markScheme: [
              "Mercury much denser → shorter column for same pressure (p = ρgh)",
              "h = p/(ρg) used",
              "Mercury: h = 101 000/(13 600 × 10) = 0.74 m",
              "Water: h = 101 000/(1000 × 10)",
              "Water: h = 10.1 m",
              "10 m column is impractical → mercury preferred",
            ],
            commonError: "Multiplying instead of dividing, or forgetting that larger density means a shorter (not taller) column.",
            guideRef: "Pressure",
            difficulty: "challenge",
            hints: [
              "Rearrange p = ρgh for h.",
              "h = p/(ρg).",
              "Use ρ = 13 600 for mercury and ρ = 1000 for water.",
              "Compare the two heights to explain the choice.",
            ],
            strategy: "rearrange p = ρgh for h; compare column heights for the two densities",
            solutions: [
              {
                label: "Method: rearrange p = ρgh",
                steps: [
                  "Mercury: h = p/(ρg) = 101 000/(13 600 × 10) = 0.74 m",
                  "Water: h = 101 000/(1000 × 10) = 10.1 m",
                  "Denser mercury gives a practical, short column",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq4-09",
            question: "A U-tube contains water (ρ = 1000 kg/m³). Oil (ρ = 800 kg/m³) is poured into the left arm and floats on the water. The oil column is 0.15 m tall. (g = 10 N/kg) (a) Calculate the pressure at the bottom of the oil column due to the oil. (b) This pressure must equal the pressure due to a column of water in the right arm at the same level. Calculate the height of that water column. (c) Explain why the oil column is taller than the equivalent water column.",
            marks: 8,
            modelAnswer: "(a) p = ρgh = 800 × 10 × 0.15 = 1200 Pa. (b) For equal pressure: ρ_water × g × h_water = 1200 → 1000 × 10 × h = 1200 → h = 1200/10 000 = 0.12 m (12 cm). (c) Oil is less dense than water. To produce the same pressure (p = ρgh), a less dense liquid needs a greater height, so the oil column (0.15 m) is taller than the water column (0.12 m).",
            markScheme: [
              "p = ρgh = 800 × 10 × 0.15 = 1200 Pa",
              "Set equal to water column pressure: 1000 × 10 × h = 1200",
              "h = 1200/10 000",
              "h = 0.12 m (12 cm)",
              "Oil less dense than water",
              "Lower density needs greater height for same pressure",
            ],
            commonError: "Equating the heights of the two columns rather than the pressures; the columns balance when the PRESSURES are equal.",
            guideRef: "Pressure",
            difficulty: "challenge",
            hints: [
              "Pressure due to the oil = ρ_oil × g × h_oil.",
              "Set the oil and water pressures equal at the same level.",
              "1000 × 10 × h = 1200, so solve for h.",
              "Why does a lighter liquid need a taller column?",
            ],
            strategy: "equate pressures (not heights) at the same level; ρgh = ρgh",
            solutions: [
              {
                label: "Method: balance the pressures",
                steps: [
                  "Oil pressure = 800 × 10 × 0.15 = 1200 Pa",
                  "Water column: 1000 × 10 × h = 1200",
                  "h = 0.12 m",
                  "Less dense oil → taller column for the same pressure",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq4-10",
            question: "A flat-bottomed barge has a base area of 30 m² and floats in fresh water (ρ = 1000 kg/m³, g = 10 N/kg). When loaded, it sinks until its base is 1.2 m below the surface. (a) Calculate the water pressure on the base of the barge. (b) Calculate the upward force (upthrust) on the base from this pressure. (c) Hence estimate the total weight of the loaded barge, and state the assumption you made.",
            marks: 8,
            modelAnswer: "(a) p = ρgh = 1000 × 10 × 1.2 = 12 000 Pa. (b) Upward force on the base = p × A = 12 000 × 30 = 360 000 N. (c) For a floating barge the upthrust balances the weight, so the total weight ≈ 360 000 N (360 kN). Assumption: the barge floats in equilibrium, so the upward force on the base equals the weight (the sides are vertical, so horizontal pressures cancel and only the base contributes the net upward force).",
            markScheme: [
              "p = ρgh = 1000 × 10 × 1.2 = 12 000 Pa",
              "Upward force = p × A = 12 000 × 30",
              "= 360 000 N",
              "Floating: upthrust = weight",
              "Total weight ≈ 360 000 N (360 kN)",
              "Assumption: barge floats in equilibrium / vertical sides so side forces cancel",
            ],
            commonError: "Forgetting that for a floating object the upthrust equals the weight, or using the wrong depth for the pressure.",
            guideRef: "Pressure",
            difficulty: "challenge",
            hints: [
              "Pressure on the base uses p = ρgh with h = 1.2 m.",
              "Force = pressure × base area.",
              "For a floating object, how do upthrust and weight compare?",
              "State that the barge is in equilibrium.",
            ],
            strategy: "p = ρgh, then F = pA; floating equilibrium gives weight = upthrust",
            solutions: [
              {
                label: "Method: pressure, force, then equilibrium",
                steps: [
                  "p = ρgh = 1000 × 10 × 1.2 = 12 000 Pa",
                  "Upward force = p × A = 12 000 × 30 = 360 000 N",
                  "Floating: weight = upthrust ≈ 360 000 N",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
