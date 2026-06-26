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
        description: "Ten multiple-choice questions covering forces, Newton's laws, weight, Hooke's law, moments and momentum.",
        questions: [
          {
            id: "phys-forces-bm1-01",
            question: "Which of the following is a vector quantity?",
            options: ["Mass", "Force", "Speed", "Energy"],
            answerIndex: 1,
            explanation: "Force has both magnitude and direction, so it is a vector. Mass, speed and energy are scalars (magnitude only). Note: velocity is a vector but speed is not.",
            guideRef: "What Is a Force?",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm1-02",
            question: "A 4 kg object accelerates at 2.5 m/s². What resultant force acts on it?",
            options: ["1.6 N", "6.5 N", "10 N", "40 N"],
            answerIndex: 2,
            explanation: "F = ma = 4 × 2.5 = 10 N. Option A divides m by a; option B adds; option D confuses with weight using g = 10.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm1-03",
            question: "An astronaut has a mass of 90 kg. What is her weight on Earth where g = 10 N/kg?",
            options: ["9 N", "90 N", "900 N", "9000 N"],
            answerIndex: 2,
            explanation: "W = mg = 90 × 10 = 900 N. Mass stays 90 kg everywhere, but weight is the gravitational force, measured in newtons.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm1-04",
            question: "A spring extends by 0.20 m when a force of 50 N is applied (within the limit of proportionality). What is its spring constant?",
            options: ["0.004 N/m", "10 N/m", "100 N/m", "250 N/m"],
            answerIndex: 3,
            explanation: "k = F/x = 50/0.20 = 250 N/m. Option A divides x by F; option C multiplies F by x; option B halves wrongly.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "core",
            hints: [
              "Hooke's law is F = kx; rearrange for k.",
              "k = F ÷ x with x in metres.",
              "k = 50 ÷ 0.20.",
            ],
          },
          {
            id: "phys-forces-bm1-05",
            question: "Two forces act on a box along the same line: 12 N to the right and 7 N to the left. What is the resultant force?",
            options: ["5 N to the left", "5 N to the right", "19 N to the right", "84 N to the right"],
            answerIndex: 1,
            explanation: "Along one line, subtract opposing forces: 12 − 7 = 5 N, in the direction of the larger force (right). Option C adds them; option D multiplies.",
            guideRef: "What Is a Force?",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm1-06",
            question: "A force of 6 N acts at a perpendicular distance of 0.25 m from a pivot. What is the moment about the pivot?",
            options: ["0.042 N m", "1.5 N m", "6.25 N m", "24 N m"],
            answerIndex: 1,
            explanation: "Moment = F × d = 6 × 0.25 = 1.5 N m. Option D divides; option A inverts; option C adds.",
            guideRef: "Moments and Stability",
            difficulty: "core",
            hints: [
              "Moment = force × perpendicular distance from the pivot.",
              "Use distance in metres.",
              "6 × 0.25 = ?",
            ],
          },
          {
            id: "phys-forces-bm1-07",
            question: "Which statement best describes a Newton's third law force pair?",
            options: [
              "Two forces on the same object that balance to give zero resultant.",
              "Equal and opposite forces of the same type acting on two different objects.",
              "A force and the friction it produces on the same surface.",
              "Two forces that are always at right angles to each other.",
            ],
            answerIndex: 1,
            explanation: "N3L pairs are equal in size, opposite in direction, the same type of force, and act on two different objects, so they never cancel. Option A describes balanced forces (N1L), not an N3L pair.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "Do the two forces act on the same object or different objects?",
              "An N3L pair acts on different objects, so it cannot 'balance' on one object.",
              "They are the same type of force, equal and opposite.",
            ],
          },
          {
            id: "phys-forces-bm1-08",
            question: "A 2.0 kg trolley moving at 3.0 m/s collides with and sticks to a stationary 1.0 kg trolley. What is their common velocity afterwards?",
            options: ["1.0 m/s", "2.0 m/s", "3.0 m/s", "6.0 m/s"],
            answerIndex: 1,
            explanation: "Momentum before = 2.0 × 3.0 + 1.0 × 0 = 6.0 kg m/s. Combined mass = 3.0 kg. v = 6.0/3.0 = 2.0 m/s. Option C ignores the added mass; option A halves wrongly.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "core",
            hints: [
              "Total momentum is conserved: p before = p after.",
              "p before = 2.0 × 3.0 = 6.0 kg m/s.",
              "After sticking, total mass = 3.0 kg, so v = 6.0 ÷ 3.0.",
            ],
            strategy: "conservation of momentum with combined mass after a 'stick together' collision",
          },
          {
            id: "phys-forces-bm1-09",
            question: "A spring obeys Hooke's law up to 30 N. The area under its force–extension graph at an extension of 0.10 m (with k = 200 N/m) gives which quantity, and what is its value?",
            options: [
              "Spring constant, 200 N/m",
              "Elastic potential energy, 1.0 J",
              "Work done against gravity, 2.0 J",
              "Elastic potential energy, 20 J",
            ],
            answerIndex: 1,
            explanation: "Area under an F–x graph = elastic potential energy = ½kx² = ½ × 200 × 0.10² = ½ × 200 × 0.01 = 1.0 J. Option D forgets to square x; the rest misidentify the quantity.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "challenge",
            hints: [
              "The area under a force–extension graph represents stored energy.",
              "Elastic PE = ½kx².",
              "x = 0.10 m, so x² = 0.01 m²; then ½ × 200 × 0.01.",
            ],
            strategy: "identify area under F–x graph as ½kx²; square the extension carefully",
          },
          {
            id: "phys-forces-bm1-10",
            question: "A 1200 kg car changes velocity from 8 m/s to 20 m/s in 4.0 s along a straight road. What resultant force acted on it?",
            options: ["2400 N", "3600 N", "6000 N", "9600 N"],
            answerIndex: 1,
            explanation: "a = (20 − 8)/4.0 = 3.0 m/s². F = ma = 1200 × 3.0 = 3600 N. Option C uses a = 20/4; option A uses a = 8/4; option D adds velocities.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "challenge",
            hints: [
              "First find acceleration: a = (v − u)/t.",
              "a = (20 − 8)/4.0 = 3.0 m/s².",
              "Then F = ma = 1200 × 3.0.",
            ],
            strategy: "two-step: kinematics for a, then F = ma",
          },
        ],
      },
      {
        id: "phys-forces-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Ten multiple-choice questions on pressure, fluids, moments, stability and momentum.",
        questions: [
          {
            id: "phys-forces-bm2-01",
            question: "What is the SI unit of pressure?",
            options: ["Newton (N)", "Pascal (Pa)", "Joule (J)", "Newton metre (N m)"],
            answerIndex: 1,
            explanation: "Pressure = force/area, so its unit is the pascal (Pa), equal to 1 N/m². The newton is force, the joule is energy, and N m is a moment.",
            guideRef: "Pressure",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm2-02",
            question: "A force of 200 N acts on an area of 0.05 m². What pressure is exerted?",
            options: ["10 Pa", "40 Pa", "400 Pa", "4000 Pa"],
            answerIndex: 3,
            explanation: "p = F/A = 200/0.05 = 4000 Pa. Dividing 200 by 0.05 is the same as multiplying by 20. Option C divides by 0.5 instead.",
            guideRef: "Pressure",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm2-03",
            question: "Why does a sharp knife cut more easily than a blunt one for the same applied force?",
            options: [
              "It applies a larger force to the object.",
              "Its smaller contact area produces a greater pressure.",
              "It has more mass.",
              "It reduces friction with the object.",
            ],
            answerIndex: 1,
            explanation: "p = F/A. A sharp edge has a very small contact area A, so for the same force F the pressure is much higher, letting it cut. The force is unchanged.",
            guideRef: "Pressure",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm2-04",
            question: "What is the pressure due to water at a depth of 8.0 m? (ρ = 1000 kg/m³, g = 10 N/kg)",
            options: ["800 Pa", "8000 Pa", "80 000 Pa", "800 000 Pa"],
            answerIndex: 2,
            explanation: "p = ρgh = 1000 × 10 × 8.0 = 80 000 Pa (80 kPa). Each other option is out by a factor of ten.",
            guideRef: "Pressure",
            difficulty: "core",
            hints: [
              "Use the liquid-pressure formula p = ρgh.",
              "Substitute ρ = 1000, g = 10, h = 8.0.",
              "1000 × 10 × 8.0 = ?",
            ],
          },
          {
            id: "phys-forces-bm2-05",
            question: "A uniform beam is pivoted at its centre. A 5 N weight hangs 0.6 m to the left. A weight is placed 0.3 m to the right to balance the beam. What is that weight?",
            options: ["2.5 N", "5 N", "10 N", "15 N"],
            answerIndex: 2,
            explanation: "ACW moment = 5 × 0.6 = 3.0 N m. For balance W × 0.3 = 3.0 → W = 10 N. The closer weight must be larger.",
            guideRef: "Moments and Stability",
            difficulty: "core",
            hints: [
              "Compute the anticlockwise moment of the 5 N weight.",
              "Set clockwise moment equal: W × 0.3 = 5 × 0.6.",
              "W = 3.0 ÷ 0.3.",
            ],
          },
          {
            id: "phys-forces-bm2-06",
            question: "Which change would make an object MORE stable?",
            options: [
              "Raising its centre of mass.",
              "Narrowing its base.",
              "Lowering its centre of mass and widening its base.",
              "Increasing its height with the same base.",
            ],
            answerIndex: 2,
            explanation: "Stability increases with a lower centre of mass and a wider base, because the vertical line through the centre of mass is then harder to push outside the base area.",
            guideRef: "Moments and Stability",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm2-07",
            question: "A 0.15 kg ball travelling at 20 m/s is struck and rebounds straight back at 20 m/s. What is the magnitude of the change in momentum?",
            options: ["0 kg m/s", "3.0 kg m/s", "6.0 kg m/s", "20 kg m/s"],
            answerIndex: 2,
            explanation: "Take initial direction as positive: p_initial = 0.15 × 20 = +3.0; p_final = 0.15 × (−20) = −3.0. Δp = −3.0 − (+3.0) = −6.0, magnitude 6.0 kg m/s. Option B forgets the reversal of direction.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "challenge",
            hints: [
              "Momentum is a vector; the rebound reverses its sign.",
              "p_initial = +3.0 kg m/s, p_final = −3.0 kg m/s.",
              "Δp = p_final − p_initial = −3.0 − 3.0 = −6.0 kg m/s.",
            ],
            strategy: "assign signs for direction; Δp accounts for the reversal, doubling the magnitude",
          },
          {
            id: "phys-forces-bm2-08",
            question: "A hydraulic system has input piston area 0.01 m² and output piston area 0.05 m². A force of 40 N is applied to the input. What force does the output piston exert?",
            options: ["8 N", "40 N", "200 N", "2000 N"],
            answerIndex: 2,
            explanation: "Pressure is constant: p = 40/0.01 = 4000 Pa. Output force = p × A = 4000 × 0.05 = 200 N. Force is multiplied by the area ratio 0.05/0.01 = 5, so 40 × 5 = 200 N.",
            guideRef: "Pressure",
            difficulty: "core",
            hints: [
              "Pressure is the same throughout the fluid (Pascal's principle).",
              "p = F_in/A_in = 40/0.01 = 4000 Pa.",
              "F_out = p × A_out = 4000 × 0.05.",
            ],
            strategy: "Pascal's principle: same pressure, then F_out = p × A_out",
          },
          {
            id: "phys-forces-bm2-09",
            question: "A rifle of mass 5.0 kg fires a 0.020 kg bullet at 400 m/s. What is the recoil speed of the rifle? (System initially at rest.)",
            options: ["0.10 m/s", "1.6 m/s", "8.0 m/s", "16 m/s"],
            answerIndex: 1,
            explanation: "Total momentum starts at 0. 0.020 × 400 = 8.0 kg m/s forward, so rifle gains 8.0 kg m/s backward. v = 8.0/5.0 = 1.6 m/s. Option C forgets to divide by rifle mass.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "challenge",
            hints: [
              "Initial momentum of the system is zero.",
              "Bullet momentum = 0.020 × 400 = 8.0 kg m/s.",
              "Rifle momentum must be equal and opposite: 5.0 × v = 8.0.",
            ],
            strategy: "explosion-type problem: total momentum = 0; solve 5.0v = 8.0",
          },
          {
            id: "phys-forces-bm2-10",
            question: "A solid cube of side 0.20 m and mass 16 kg rests on the floor. What pressure does it exert? (g = 10 N/kg)",
            options: ["400 Pa", "800 Pa", "4000 Pa", "8000 Pa"],
            answerIndex: 2,
            explanation: "Weight = mg = 16 × 10 = 160 N. Base area = 0.20 × 0.20 = 0.04 m². p = F/A = 160/0.04 = 4000 Pa. Option B uses area 0.20 m; option A forgets to multiply by g correctly.",
            guideRef: "Pressure",
            difficulty: "challenge",
            hints: [
              "First find the weight: W = mg.",
              "Find the base area of the cube: side × side = 0.20 × 0.20.",
              "p = W/A = 160 ÷ 0.04.",
            ],
            strategy: "multi-step: W = mg, then base area = side², then p = F/A",
          },
        ],
      },
      {
        id: "phys-forces-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Ten multiple-choice questions on Newton's laws, friction, impulse, Hooke's law and equilibrium.",
        questions: [
          {
            id: "phys-forces-bm3-01",
            question: "An object moves at a constant velocity in a straight line. What is the resultant force on it?",
            options: ["Equal to its weight", "Zero", "Increasing with speed", "Equal to mass × velocity"],
            answerIndex: 1,
            explanation: "Constant velocity means zero acceleration, so by Newton's first law the resultant force is zero (the forces are balanced).",
            guideRef: "Newton's Laws of Motion",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm3-02",
            question: "What does the gradient of the linear region of a force–extension graph represent?",
            options: ["The extension", "The elastic potential energy", "The spring constant k", "The weight of the load"],
            answerIndex: 2,
            explanation: "In the Hooke's-law region F = kx, so the gradient (rise/run = F/x) is the spring constant k, in N/m.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm3-03",
            question: "A 1500 kg car travelling at 12 m/s comes to rest in 3.0 s. What is the average braking force?",
            options: ["500 N", "4000 N", "6000 N", "18 000 N"],
            answerIndex: 2,
            explanation: "a = (0 − 12)/3.0 = −4.0 m/s². |F| = ma = 1500 × 4.0 = 6000 N. Option B uses a = 12/4.5; option D multiplies mass by velocity.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "Deceleration a = (v − u)/t.",
              "a = (0 − 12)/3.0 = −4.0 m/s².",
              "Magnitude of force = ma = 1500 × 4.0.",
            ],
            strategy: "kinematics for a, then F = ma; take the magnitude for the braking force",
          },
          {
            id: "phys-forces-bm3-04",
            question: "A force acts on an object for 0.50 s and produces a change in momentum of 12 kg m/s. What is the average force?",
            options: ["6 N", "12 N", "24 N", "60 N"],
            answerIndex: 2,
            explanation: "Impulse = F × Δt = Δp, so F = Δp/Δt = 12/0.50 = 24 N. Option A multiplies; the others mis-divide.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "core",
            hints: [
              "Impulse: F × Δt = change in momentum.",
              "Rearrange for F = Δp ÷ Δt.",
              "F = 12 ÷ 0.50.",
            ],
            strategy: "use impulse = FΔt = Δp",
          },
          {
            id: "phys-forces-bm3-05",
            question: "Why do crumple zones reduce the force experienced by passengers in a crash?",
            options: [
              "They reduce the change in momentum.",
              "They increase the time over which the momentum changes, reducing the force.",
              "They increase the mass of the car.",
              "They convert momentum into energy.",
            ],
            answerIndex: 1,
            explanation: "The change in momentum is fixed by the speed change. F = Δp/Δt, so increasing the collision time Δt reduces the average force on the occupants.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "core",
            hints: [
              "The momentum change in the crash is roughly fixed.",
              "Use F = Δp/Δt — what happens to F if Δt increases?",
              "A longer impact time gives a smaller force.",
            ],
          },
          {
            id: "phys-forces-bm3-06",
            question: "A box on a horizontal floor is pushed with 30 N but does not move. What is the friction force on the box?",
            options: ["0 N", "15 N", "30 N", "60 N"],
            answerIndex: 2,
            explanation: "The box is in equilibrium (not moving), so the resultant force is zero. Friction must therefore balance the push exactly: 30 N, in the opposite direction.",
            guideRef: "What Is a Force?",
            difficulty: "core",
            hints: [
              "Is the box accelerating? What does that tell you about the resultant force?",
              "If resultant = 0, friction must equal the applied force.",
              "Friction = 30 N opposing the push.",
            ],
          },
          {
            id: "phys-forces-bm3-07",
            question: "A 0.40 kg ball falls and hits the ground at 6.0 m/s, bouncing back up at 4.0 m/s. Taking upward as positive, what is its change in momentum during the bounce?",
            options: ["0.80 kg m/s", "2.4 kg m/s", "4.0 kg m/s", "10 kg m/s"],
            answerIndex: 2,
            explanation: "p_before = 0.40 × (−6.0) = −2.4 kg m/s; p_after = 0.40 × (+4.0) = +1.6 kg m/s. Δp = 1.6 − (−2.4) = +4.0 kg m/s. Option A subtracts speeds first; sign care is essential.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "challenge",
            hints: [
              "Downward velocity is negative if up is positive.",
              "p_before = 0.40 × (−6.0); p_after = 0.40 × (+4.0).",
              "Δp = p_after − p_before = 1.6 − (−2.4).",
            ],
            strategy: "assign signs by direction; subtract initial from final momentum",
          },
          {
            id: "phys-forces-bm3-08",
            question: "Two springs each of constant 100 N/m are joined end to end (in series) and a 20 N load is hung from the combination. What is the total extension?",
            options: ["0.10 m", "0.20 m", "0.40 m", "4.0 m"],
            answerIndex: 2,
            explanation: "Each spring carries the full 20 N. Each extends x = F/k = 20/100 = 0.20 m. In series the extensions add: total = 0.20 + 0.20 = 0.40 m. Option B treats them as a single spring.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "challenge",
            hints: [
              "In series, each spring feels the same full load of 20 N.",
              "Each extension = F/k = 20/100 = 0.20 m.",
              "Add the two extensions together.",
            ],
            strategy: "series springs: same force in each; total extension is the sum",
          },
          {
            id: "phys-forces-bm3-09",
            question: "A 60 kg skydiver falls at terminal velocity. What is the air resistance acting on her? (g = 10 N/kg)",
            options: ["0 N", "60 N", "600 N", "6000 N"],
            answerIndex: 2,
            explanation: "At terminal velocity the resultant force is zero, so air resistance equals the weight: W = mg = 60 × 10 = 600 N. Option B confuses mass with force.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "At terminal velocity, resultant force = 0.",
              "So air resistance must equal the weight.",
              "W = mg = 60 × 10.",
            ],
          },
          {
            id: "phys-forces-bm3-10",
            question: "A trolley of mass 1.5 kg moving at 4.0 m/s is brought to rest by a constant force in 0.30 s. What is the size of this force?",
            options: ["5.0 N", "12 N", "20 N", "180 N"],
            answerIndex: 2,
            explanation: "Δp = mΔv = 1.5 × 4.0 = 6.0 kg m/s. F = Δp/Δt = 6.0/0.30 = 20 N. Option B uses Δt = 0.5 s; option A divides incorrectly.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "challenge",
            hints: [
              "Find the change in momentum: Δp = mΔv.",
              "Δp = 1.5 × 4.0 = 6.0 kg m/s.",
              "F = Δp/Δt = 6.0 ÷ 0.30.",
            ],
            strategy: "Δp = mΔv, then F = Δp/Δt (impulse–momentum)",
          },
        ],
      },
      {
        id: "phys-forces-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Ten mixed multiple-choice questions spanning the whole topic, with several challenge calculations.",
        questions: [
          {
            id: "phys-forces-bm4-01",
            question: "Which quantity is measured in newtons?",
            options: ["Mass", "Weight", "Pressure", "Momentum"],
            answerIndex: 1,
            explanation: "Weight is a force, so it is measured in newtons. Mass is in kg, pressure in Pa, and momentum in kg m/s.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm4-02",
            question: "A resultant force of 0 N acts on a moving object. What happens to its motion?",
            options: [
              "It speeds up.",
              "It slows down and stops.",
              "It continues at constant velocity.",
              "It changes direction.",
            ],
            answerIndex: 2,
            explanation: "By Newton's first law, with zero resultant force the velocity does not change — the object keeps moving at constant speed in a straight line.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bm4-03",
            question: "A spring extends 0.05 m under a 4 N load. What load would extend it 0.15 m, assuming Hooke's law holds?",
            options: ["1.3 N", "4 N", "12 N", "60 N"],
            answerIndex: 2,
            explanation: "k = 4/0.05 = 80 N/m. F = kx = 80 × 0.15 = 12 N. Alternatively, three times the extension needs three times the force: 3 × 4 = 12 N.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "core",
            hints: [
              "Find k from the first reading: k = F/x.",
              "k = 4/0.05 = 80 N/m.",
              "Then F = kx = 80 × 0.15.",
            ],
            strategy: "find k from one data point, then use F = kx; or scale by the proportionality",
          },
          {
            id: "phys-forces-bm4-04",
            question: "A diver experiences a water pressure of 150 000 Pa due to the water alone. How deep is she? (ρ = 1000 kg/m³, g = 10 N/kg)",
            options: ["1.5 m", "15 m", "150 m", "1500 m"],
            answerIndex: 1,
            explanation: "h = p/(ρg) = 150 000/(1000 × 10) = 150 000/10 000 = 15 m. Each other option is out by a power of ten.",
            guideRef: "Pressure",
            difficulty: "core",
            hints: [
              "Rearrange p = ρgh for h.",
              "h = p ÷ (ρ × g).",
              "h = 150 000 ÷ (1000 × 10).",
            ],
            strategy: "rearrange p = ρgh; watch the powers of ten",
          },
          {
            id: "phys-forces-bm4-05",
            question: "A 0.50 kg ball is dropped and lands at 8.0 m/s. The ground stops it in 0.040 s. What average force does the ground exert on the ball during the stop?",
            options: ["4.0 N", "100 N", "160 N", "320 N"],
            answerIndex: 1,
            explanation: "Δp = mΔv = 0.50 × 8.0 = 4.0 kg m/s. F = Δp/Δt = 4.0/0.040 = 100 N. Option C uses 8.0 directly without mass; option A is the momentum value.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "challenge",
            hints: [
              "Find the change in momentum: Δp = mΔv = 0.50 × 8.0.",
              "F = Δp/Δt.",
              "F = 4.0 ÷ 0.040.",
            ],
            strategy: "impulse–momentum: Δp = mΔv, then F = Δp/Δt",
          },
          {
            id: "phys-forces-bm4-06",
            question: "A uniform 1.0 m beam of weight 12 N is pivoted at the 0.25 m mark. A single upward force is applied at the left end (0 m mark) to keep the beam horizontal. What is the size of this force?",
            options: ["3.0 N", "8.0 N", "12 N", "16 N"],
            answerIndex: 2,
            explanation: "The weight (12 N) acts at the centre (0.50 m), which is 0.25 m to the right of the pivot: clockwise moment = 12 × 0.25 = 3.0 N m. The applied force at the 0 m mark is 0.25 m to the left of the pivot, giving an anticlockwise moment. For balance: F × 0.25 = 3.0 → F = 12 N. Option A is the moment value, not the force.",
            guideRef: "Moments and Stability",
            difficulty: "challenge",
            hints: [
              "The beam's weight acts at its centre (0.50 m), which is 0.25 m right of the pivot.",
              "Clockwise moment of the weight = 12 × 0.25 = 3.0 N m.",
              "The upward force at the left end is 0.25 m from the pivot: F × 0.25 = 3.0.",
            ],
            strategy: "locate the centre of gravity relative to the pivot; balance the moments",
          },
          {
            id: "phys-forces-bm4-07",
            question: "An object of mass 8.0 kg is acted on by two perpendicular forces: 30 N north and 40 N east. What is the magnitude of the resultant force?",
            options: ["10 N", "35 N", "50 N", "70 N"],
            answerIndex: 2,
            explanation: "Perpendicular forces combine by Pythagoras: R = √(30² + 40²) = √(900 + 1600) = √2500 = 50 N. Option D simply adds them; that is only valid along the same line.",
            guideRef: "What Is a Force?",
            difficulty: "challenge",
            hints: [
              "The forces are at right angles, so you cannot just add them.",
              "Use Pythagoras: R = √(30² + 40²).",
              "√(900 + 1600) = √2500.",
            ],
            strategy: "resolve/combine perpendicular vectors with Pythagoras",
          },
          {
            id: "phys-forces-bm4-08",
            question: "A 1000 kg car moving at 20 m/s collides with a 1000 kg stationary car; they lock together. What fraction of the original kinetic energy remains after the collision?",
            options: ["1/4", "1/2", "3/4", "All of it"],
            answerIndex: 1,
            explanation: "By momentum: v = (1000 × 20)/2000 = 10 m/s. KE_before = ½ × 1000 × 20² = 200 000 J. KE_after = ½ × 2000 × 10² = 100 000 J. Ratio = 100 000/200 000 = 1/2. Half the KE is lost (inelastic).",
            guideRef: "Momentum and Its Conservation",
            difficulty: "challenge",
            hints: [
              "Find the common velocity using conservation of momentum.",
              "v = (1000 × 20)/2000 = 10 m/s.",
              "Compare KE_after = ½ × 2000 × 10² with KE_before = ½ × 1000 × 20².",
            ],
            strategy: "momentum gives v; then take the ratio of KE after to KE before",
          },
          {
            id: "phys-forces-bm4-09",
            question: "A force–extension graph for a spring is a straight line through the origin. The line for a stiffer spring would be:",
            options: [
              "Steeper (greater gradient).",
              "Less steep (smaller gradient).",
              "Horizontal.",
              "Curved from the start.",
            ],
            answerIndex: 0,
            explanation: "Gradient = k, the spring constant. A stiffer spring has a larger k, so its line is steeper (more force needed per unit extension).",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "core",
            hints: [
              "The gradient of the line equals k.",
              "A stiffer spring has a larger k.",
              "Larger gradient means a steeper line.",
            ],
          },
          {
            id: "phys-forces-bm4-10",
            question: "A box of weight 240 N stands on a square base. To halve the pressure it exerts on the floor, what should be done to the side length of the base?",
            options: [
              "Halve the side length.",
              "Double the side length.",
              "Multiply the side length by √2.",
              "Keep it the same.",
            ],
            answerIndex: 2,
            explanation: "p = F/A and A = side². To halve p the area must double. If new side = √2 × old, the new area = (√2)² × old = 2 × old. So multiply the side by √2 (≈1.41).",
            guideRef: "Pressure",
            difficulty: "challenge",
            hints: [
              "Pressure halves when the area doubles (force fixed).",
              "Area = side², so you need (new side)² = 2 × (old side)².",
              "new side = √2 × old side.",
            ],
            strategy: "p = F/A with A = side²; relate area change to side change via the square",
          },
        ],
      },
    ],

    qaPapers: [
      {
        id: "phys-forces-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Ten structured questions on forces, Newton's laws, weight, friction and Hooke's law.",
        questions: [
          {
            id: "phys-forces-bq1-01",
            question: "Define a force and state its SI unit. Give two different effects a force can have on an object.",
            marks: 4,
            modelAnswer: "A force is a push or a pull that one object exerts on another. Its SI unit is the newton (N). Two effects: it can change an object's speed (accelerate or decelerate it) / change its direction of motion / change its shape.",
            markScheme: [
              "A force is a push or pull",
              "SI unit is the newton / N",
              "Effect 1: changes speed / accelerates / decelerates",
              "Effect 2: changes direction / changes shape (any second distinct effect)",
            ],
            commonError: "Giving 'movement' as both effects without distinguishing speed, direction and shape.",
            guideRef: "What Is a Force?",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bq1-02",
            question: "A box has a mass of 25 kg. (a) Calculate its weight on Earth where g = 10 N/kg. (b) State the value of its mass and weight on the Moon, where g = 1.6 N/kg. (c) Explain why mass and weight are different quantities.",
            marks: 5,
            modelAnswer: "(a) W = mg = 25 × 10 = 250 N. (b) On the Moon the mass is still 25 kg (unchanged). Weight = mg = 25 × 1.6 = 40 N. (c) Mass is the amount of matter in an object (kg) and is the same everywhere; weight is the gravitational force on that mass (N) and depends on the gravitational field strength g, so it changes with location.",
            markScheme: [
              "W = 25 × 10 = 250 N",
              "Mass on Moon = 25 kg (unchanged)",
              "Weight on Moon = 25 × 1.6 = 40 N",
              "Mass = amount of matter, same everywhere (kg)",
              "Weight = gravitational force, depends on g (N)",
            ],
            commonError: "Stating that mass changes on the Moon — only weight changes because g changes.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bq1-03",
            question: "A 1500 kg van experiences a forward driving force of 4500 N and a total resistive force (friction + drag) of 1500 N. (a) Calculate the resultant force on the van. (b) Calculate its acceleration. (c) The driver increases speed until the resistive force rises to 4500 N. Describe the van's motion now and explain why.",
            marks: 6,
            modelAnswer: "(a) Resultant = 4500 − 1500 = 3000 N (forward). (b) a = F/m = 3000/1500 = 2.0 m/s². (c) When resistive force = driving force = 4500 N, the resultant force is 0 N, so acceleration is 0. The van moves at a constant (maximum) velocity, because by Newton's first law a zero resultant force means no change in velocity.",
            markScheme: [
              "Resultant = 4500 − 1500 = 3000 N",
              "a = F/m used",
              "a = 3000/1500 = 2.0 m/s²",
              "Resultant force becomes 0 N",
              "Acceleration = 0",
              "Constant velocity (Newton's first law)",
            ],
            commonError: "Saying the van stops when the forces balance, rather than continuing at constant velocity.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "Resultant = driving force − resistive force.",
              "a = F/m.",
              "When the two forces are equal, what is the resultant?",
              "Zero resultant means no change in velocity, not zero velocity.",
            ],
            strategy: "resultant force first, then F = ma; relate balanced forces to constant velocity",
            solutions: [
              {
                label: "Method: resultant force then F = ma",
                steps: [
                  "Resultant = 4500 − 1500 = 3000 N forward",
                  "a = F/m = 3000/1500 = 2.0 m/s²",
                  "When drag rises to 4500 N: resultant = 4500 − 4500 = 0 N",
                  "a = 0 → constant velocity",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq1-04",
            question: "A student investigates a spring by hanging masses on it and measuring the extension. (a) State Hooke's law. (b) The spring extends 0.08 m when a 6.0 N weight is hung from it. Calculate the spring constant. (c) Predict the extension produced by a 9.0 N weight, assuming the limit of proportionality is not exceeded.",
            marks: 6,
            modelAnswer: "(a) Hooke's law: the extension of a spring is directly proportional to the applied force, provided the limit of proportionality is not exceeded (F = kx). (b) k = F/x = 6.0/0.08 = 75 N/m. (c) x = F/k = 9.0/75 = 0.12 m (12 cm).",
            markScheme: [
              "Extension ∝ force / F = kx, with proviso about limit of proportionality",
              "k = F/x used",
              "k = 6.0/0.08 = 75 N/m",
              "x = F/k used for part (c)",
              "x = 9.0/75",
              "x = 0.12 m",
            ],
            commonError: "Forgetting the condition 'up to the limit of proportionality' when stating Hooke's law.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "core",
            hints: [
              "Hooke's law links extension to force, with a condition.",
              "k = F/x.",
              "For part (c), rearrange F = kx to find x.",
              "x = 9.0/75.",
            ],
            strategy: "find k from given data, then use F = kx to predict the new extension",
            solutions: [
              {
                label: "Method: find k, then predict x",
                steps: [
                  "k = F/x = 6.0/0.08 = 75 N/m",
                  "x = F/k = 9.0/75 = 0.12 m",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq1-05",
            question: "A 4.0 kg block is pulled along a rough horizontal floor by a horizontal force of 18 N. The frictional force is 6.0 N. (a) Draw or describe the horizontal forces acting on the block. (b) Calculate the resultant horizontal force. (c) Calculate the acceleration of the block. (d) State one way the driver of the force could increase the acceleration.",
            marks: 6,
            modelAnswer: "(a) Two horizontal forces: the applied force 18 N forward and friction 6.0 N backward (opposing motion). (b) Resultant = 18 − 6.0 = 12 N forward. (c) a = F/m = 12/4.0 = 3.0 m/s². (d) Increase the applied force (or reduce the friction, e.g. by lubricating/smoothing the surface, or reduce the mass).",
            markScheme: [
              "Applied force 18 N forward; friction 6.0 N backward",
              "Resultant = 18 − 6.0 = 12 N",
              "a = F/m used",
              "a = 12/4.0 = 3.0 m/s²",
              "Valid way to increase a (increase force / reduce friction / reduce mass)",
              "Direction of resultant stated as forward (in direction of motion)",
            ],
            commonError: "Using the applied force (18 N) directly in F = ma instead of the resultant force.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "List the horizontal forces and their directions.",
              "Resultant = applied force − friction.",
              "a = resultant force ÷ mass.",
              "To raise a for fixed mass, change the forces.",
            ],
            strategy: "free-body thinking → resultant → F = ma",
            solutions: [
              {
                label: "Method: resultant then F = ma",
                steps: [
                  "Resultant = 18 − 6.0 = 12 N forward",
                  "a = F/m = 12/4.0 = 3.0 m/s²",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq1-06",
            question: "Explain, using Newton's third law, how a rocket accelerates upward in space where there is no air to push against.",
            marks: 4,
            modelAnswer: "The rocket burns fuel and pushes hot exhaust gases downward (backward) with a large force. By Newton's third law, the gases push back on the rocket with an equal and opposite force upward (forward). This upward force (thrust) on the rocket is the action–reaction pair of the rocket's force on the gases. Because the forces act on different objects, the upward force on the rocket produces a resultant force and so the rocket accelerates upward — no surrounding air is needed.",
            markScheme: [
              "Rocket pushes exhaust gases downward/backward",
              "By N3L the gases push the rocket upward/forward with an equal and opposite force",
              "Forces act on different objects (gas and rocket)",
              "Upward force on rocket gives resultant force → acceleration; no air required",
            ],
            commonError: "Saying the exhaust 'pushes against the air/ground' — N3L pairs act between the rocket and the gases, so it works in a vacuum.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "What does the rocket push on, and in which direction?",
              "Apply N3L: the gases push back on the rocket.",
              "Which two objects do the paired forces act on?",
              "Why does this still work without air?",
            ],
          },
          {
            id: "phys-forces-bq1-07",
            question: "A 0.50 kg ball is thrown vertically and momentarily comes to rest at the top of its flight. (a) State the only significant force acting on it at the top (ignore air resistance) and give its size. (g = 10 N/kg) (b) State the acceleration of the ball at the top and explain your answer. (c) Explain why the ball does not stay at rest at the top.",
            marks: 6,
            modelAnswer: "(a) The only significant force is its weight, W = mg = 0.50 × 10 = 5.0 N, acting downward. (b) Acceleration = g = 10 m/s² downward. Even though the velocity is momentarily zero, the resultant force (weight) is not zero, so by F = ma there is still an acceleration of 10 m/s² downward. (c) Because there is a downward resultant force, the ball is accelerating downward; zero velocity is only instantaneous, so it immediately starts moving downward again.",
            markScheme: [
              "Only force is weight",
              "W = 0.50 × 10 = 5.0 N (downward)",
              "Acceleration = 10 m/s² downward",
              "Zero velocity does not mean zero acceleration",
              "Resultant force (weight) ≠ 0, so a ≠ 0 (F = ma)",
              "Ball accelerates downward → does not stay at rest",
            ],
            commonError: "Assuming that because the ball is momentarily at rest, its acceleration is zero — velocity and acceleration are independent.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "challenge",
            hints: [
              "What forces act once it has left the hand (ignore air resistance)?",
              "W = mg.",
              "Does zero velocity mean zero resultant force?",
              "Apply F = ma to find the acceleration.",
            ],
            strategy: "distinguish velocity from acceleration; weight gives a = g even at the highest point",
            solutions: [
              {
                label: "Method: weight gives the acceleration",
                steps: [
                  "W = mg = 0.50 × 10 = 5.0 N downward",
                  "a = F/m = 5.0/0.50 = 10 m/s² downward (= g)",
                  "Velocity = 0 only for an instant; force ≠ 0 so it accelerates down",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq1-08",
            question: "A spring has a spring constant of 400 N/m. (a) Calculate the force needed to extend it by 0.06 m. (b) Calculate the elastic potential energy stored at this extension. (c) The spring is now extended to 0.12 m (still within the limit of proportionality). State how many times greater the stored energy is, and justify your answer.",
            marks: 6,
            modelAnswer: "(a) F = kx = 400 × 0.06 = 24 N. (b) E = ½kx² = ½ × 400 × 0.06² = ½ × 400 × 0.0036 = 0.72 J. (c) Doubling the extension makes the stored energy 4 times greater, because E ∝ x² (E = ½kx²), and 2² = 4. (Check: E = ½ × 400 × 0.12² = ½ × 400 × 0.0144 = 2.88 J = 4 × 0.72 J.)",
            markScheme: [
              "F = kx = 400 × 0.06 = 24 N",
              "E = ½kx² used",
              "E = ½ × 400 × 0.0036 = 0.72 J",
              "Energy becomes 4 times greater",
              "Justification: E ∝ x², so doubling x gives 2² = 4",
              "Optional check: 2.88 J = 4 × 0.72 J",
            ],
            commonError: "Assuming doubling the extension doubles the stored energy — energy depends on x², so it quadruples.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "challenge",
            hints: [
              "F = kx for part (a).",
              "Elastic PE = ½kx²; remember to square x.",
              "x = 0.06 m → x² = 0.0036 m².",
              "For part (c), note E depends on x², not x.",
            ],
            strategy: "F = kx; E = ½kx²; use the x² dependence for the scaling argument",
            solutions: [
              {
                label: "Method: F = kx then E = ½kx²",
                steps: [
                  "F = 400 × 0.06 = 24 N",
                  "E = ½ × 400 × 0.06² = ½ × 400 × 0.0036 = 0.72 J",
                  "At 0.12 m: E = ½ × 400 × 0.0144 = 2.88 J",
                  "2.88/0.72 = 4 → 4 times greater (E ∝ x²)",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq1-09",
            question: "State Newton's first law of motion and use it to explain why a passenger in a car lurches forward when the car brakes sharply.",
            marks: 4,
            modelAnswer: "Newton's first law: an object remains at rest or continues at constant velocity in a straight line unless acted on by a resultant force. When the car brakes, a backward (braking) force acts on the car, but there is little force acting on the upper body of the passenger. By inertia (N1L), the passenger's body tends to continue moving forward at its original speed, so it lurches forward relative to the decelerating car (until the seat belt provides the backward force).",
            markScheme: [
              "N1L stated correctly (rest or constant velocity unless resultant force acts)",
              "Idea of inertia / tendency to keep moving",
              "Passenger continues forward at original velocity",
              "Because little/no resultant force acts on the passenger as the car decelerates",
            ],
            commonError: "Saying a force 'throws' the passenger forward — no forward force acts; it is the absence of a backward force (inertia).",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "State the law precisely (mention constant velocity and resultant force).",
              "What keeps the passenger moving forward?",
              "Is there actually a forward force on the passenger?",
              "Link 'inertia' to N1L.",
            ],
          },
          {
            id: "phys-forces-bq1-10",
            question: "A cyclist and bicycle have a combined mass of 80 kg. Starting from rest, the cyclist reaches 12 m/s in 8.0 s. (a) Calculate the acceleration. (b) Calculate the resultant force. (c) If the total resistive force is 50 N, calculate the forward force the cyclist must produce by pedalling. (d) Calculate the cyclist's momentum at 12 m/s.",
            marks: 7,
            modelAnswer: "(a) a = (v − u)/t = (12 − 0)/8.0 = 1.5 m/s². (b) Resultant = ma = 80 × 1.5 = 120 N. (c) Forward force − resistive force = resultant → Forward force = 120 + 50 = 170 N. (d) p = mv = 80 × 12 = 960 kg m/s.",
            markScheme: [
              "a = (12 − 0)/8.0 = 1.5 m/s²",
              "Resultant = ma = 80 × 1.5 = 120 N",
              "Forward force = resultant + resistive force",
              "Forward force = 120 + 50 = 170 N",
              "p = mv used",
              "p = 80 × 12 = 960 kg m/s",
              "Correct units throughout (m/s², N, kg m/s)",
            ],
            commonError: "Taking the forward force as equal to the resultant (120 N), forgetting that it must also overcome the 50 N resistance.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "challenge",
            hints: [
              "a = (v − u)/t.",
              "Resultant force = ma.",
              "Forward force must overcome resistance AND provide the resultant.",
              "Momentum p = mv.",
            ],
            strategy: "kinematics → F = ma → force balance → p = mv (multi-step)",
            solutions: [
              {
                label: "Method: step through each part",
                steps: [
                  "a = (12 − 0)/8.0 = 1.5 m/s²",
                  "Resultant = 80 × 1.5 = 120 N",
                  "Forward force = 120 + 50 = 170 N",
                  "p = 80 × 12 = 960 kg m/s",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-forces-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Ten structured questions on moments, equilibrium, centre of mass, pressure and fluids.",
        questions: [
          {
            id: "phys-forces-bq2-01",
            question: "(a) Define the moment of a force. (b) A spanner is used to undo a nut. A force of 25 N is applied at the end of the spanner, 0.18 m from the nut and perpendicular to the spanner. Calculate the moment about the nut. (c) State one way to increase the moment without increasing the force.",
            marks: 5,
            modelAnswer: "(a) The moment of a force is the turning effect of the force about a pivot: moment = force × perpendicular distance from the pivot to the line of action of the force. (b) Moment = F × d = 25 × 0.18 = 4.5 N m. (c) Use a longer spanner (increase the perpendicular distance from the nut).",
            markScheme: [
              "Moment = force × perpendicular distance from pivot",
              "Moment = 25 × 0.18",
              "= 4.5 N m (correct unit)",
              "Way to increase: apply force further from the pivot / longer spanner",
              "(reason: moment ∝ distance for fixed force)",
            ],
            commonError: "Omitting the word 'perpendicular' in the definition, or giving the unit as N rather than N m.",
            guideRef: "Moments and Stability",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bq2-02",
            question: "A see-saw pivots at its centre. A child of weight 300 N sits 1.2 m to the left of the pivot. (a) Calculate the anticlockwise moment produced. (b) A second child of weight 450 N sits on the right. Calculate how far from the pivot they must sit to balance the see-saw. (c) Explain why the heavier child sits closer to the pivot.",
            marks: 6,
            modelAnswer: "(a) ACW moment = 300 × 1.2 = 360 N m. (b) For balance, CW moment = ACW moment: 450 × d = 360 → d = 360/450 = 0.80 m. (c) The principle of moments requires equal moments on each side. Moment = force × distance, so a larger force (heavier child) needs a smaller distance to give the same moment; therefore the heavier child sits closer to the pivot.",
            markScheme: [
              "ACW moment = 300 × 1.2 = 360 N m",
              "450 × d = 360 (principle of moments)",
              "d = 360/450",
              "d = 0.80 m",
              "Equal moments needed for balance",
              "Larger force × smaller distance = same moment → heavier child closer",
            ],
            commonError: "Setting 450 × d = 300 × 1.2 but then dividing the wrong way (e.g. 450/360).",
            guideRef: "Moments and Stability",
            difficulty: "core",
            hints: [
              "ACW moment = weight × distance.",
              "Set CW moment = ACW moment.",
              "450 × d = 360, so d = 360/450.",
              "Think about how force and distance trade off for a fixed moment.",
            ],
            strategy: "principle of moments: equate CW and ACW moments, then solve for distance",
            solutions: [
              {
                label: "Method: principle of moments",
                steps: [
                  "ACW = 300 × 1.2 = 360 N m",
                  "450 × d = 360",
                  "d = 360/450 = 0.80 m",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq2-03",
            question: "A uniform plank of weight 120 N and length 3.0 m rests on two supports, one at each end (P on the left, Q on the right). A person of weight 600 N stands 1.0 m from the left end P. (a) State where the plank's weight acts. (b) By taking moments about P, calculate the upward force at Q. (c) Calculate the upward force at P.",
            marks: 8,
            modelAnswer: "(a) The plank is uniform, so its weight acts at its centre of gravity, the midpoint, 1.5 m from P. (b) Taking moments about P (clockwise from the two downward weights, anticlockwise from Q): CW moments = person (600 × 1.0) + plank (120 × 1.5) = 600 + 180 = 780 N m. ACW moment = Q × 3.0. So Q × 3.0 = 780 → Q = 260 N. (c) Vertical equilibrium: P + Q = total weight = 600 + 120 = 720 N → P = 720 − 260 = 460 N.",
            markScheme: [
              "Plank's weight acts at the midpoint, 1.5 m from P",
              "Moment of person about P = 600 × 1.0 = 600 N m",
              "Moment of plank about P = 120 × 1.5 = 180 N m",
              "Total CW moment = 780 N m; Q × 3.0 = 780",
              "Q = 260 N",
              "P + Q = 720 N (vertical equilibrium)",
              "P = 720 − 260 = 460 N",
              "Correct units (N) throughout",
            ],
            commonError: "Forgetting the moment of the plank's own weight when taking moments about P.",
            guideRef: "Moments and Stability",
            difficulty: "challenge",
            hints: [
              "A uniform plank's weight acts at its centre.",
              "Taking moments about P removes the force at P from the equation.",
              "Include both the person and the plank as clockwise moments.",
              "Use vertical force balance to find P.",
            ],
            strategy: "take moments about one support to find the other reaction; then use force balance",
            solutions: [
              {
                label: "Method: moments about P, then force balance",
                steps: [
                  "Plank weight acts at 1.5 m from P",
                  "CW moments about P: 600 × 1.0 + 120 × 1.5 = 600 + 180 = 780 N m",
                  "Q × 3.0 = 780 → Q = 260 N",
                  "P + Q = 720 N → P = 460 N",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq2-04",
            question: "(a) Write the equation linking pressure, force and area. (b) A woman of weight 600 N stands on one stiletto heel of area 0.0001 m². Calculate the pressure on the floor. (c) She then stands flat on both feet, total area 0.03 m². Calculate the new pressure. (d) Explain why stiletto heels can damage soft floors.",
            marks: 7,
            modelAnswer: "(a) pressure = force ÷ area (p = F/A). (b) p = 600/0.0001 = 6 000 000 Pa (6 MPa). (c) p = 600/0.03 = 20 000 Pa (20 kPa). (d) The very small contact area of the heel gives an extremely high pressure for the same weight; this large pressure can dent or pierce a soft floor, whereas spreading the weight over both feet greatly reduces the pressure.",
            markScheme: [
              "p = F/A",
              "p (heel) = 600/0.0001 = 6 000 000 Pa",
              "p (feet) = 600/0.03",
              "= 20 000 Pa",
              "Small area → high pressure for same force",
              "High pressure dents/damages the floor",
            ],
            commonError: "Errors in handling 0.0001 m² (e.g. getting 60 000 Pa) — dividing by 1 × 10⁻⁴ multiplies by 10 000.",
            guideRef: "Pressure",
            difficulty: "core",
            hints: [
              "Use p = F/A.",
              "Dividing by 0.0001 is the same as multiplying by 10 000.",
              "Repeat with the larger area.",
              "Compare the two pressures to explain the damage.",
            ],
            strategy: "apply p = F/A twice and compare; small area gives large pressure",
            solutions: [
              {
                label: "Method: p = F/A for each case",
                steps: [
                  "Heel: p = 600/0.0001 = 6 000 000 Pa",
                  "Both feet: p = 600/0.03 = 20 000 Pa",
                  "Ratio ≈ 300× larger pressure on the heel",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq2-05",
            question: "A rectangular dam holds back water. (a) State the equation for pressure at a depth h in a liquid. (b) Calculate the water pressure at the base of the dam where the depth is 12 m. (ρ = 1000 kg/m³, g = 10 N/kg) (c) Explain why dam walls are built much thicker at the base than at the top.",
            marks: 6,
            modelAnswer: "(a) p = ρgh. (b) p = 1000 × 10 × 12 = 120 000 Pa (120 kPa). (c) Pressure in a liquid increases with depth (p = ρgh), so the water pushes hardest at the base of the dam. The wall must be thicker (stronger) at the base to withstand this much greater pressure; near the surface the pressure is small, so less thickness is needed.",
            markScheme: [
              "p = ρgh",
              "p = 1000 × 10 × 12",
              "= 120 000 Pa",
              "Pressure increases with depth",
              "Greatest pressure at the base",
              "Thicker base resists the larger force/pressure",
            ],
            commonError: "Using the wrong value of h (e.g. half the depth) or omitting a factor of g.",
            guideRef: "Pressure",
            difficulty: "core",
            hints: [
              "Use p = ρgh.",
              "Substitute ρ = 1000, g = 10, h = 12.",
              "Where in the liquid is the pressure greatest?",
              "Link that to the wall thickness.",
            ],
            strategy: "p = ρgh, then relate depth-dependence of pressure to the structure",
            solutions: [
              {
                label: "Method: p = ρgh",
                steps: [
                  "p = 1000 × 10 × 12 = 120 000 Pa",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq2-06",
            question: "A hydraulic braking system has a master (input) piston of area 2.0 cm² and a slave (output) piston of area 10 cm². The driver pushes the master piston with a force of 60 N. (a) Convert both areas to m². (b) Calculate the pressure transmitted through the brake fluid. (c) Calculate the force on the slave piston. (d) State the physics principle that makes this force multiplication possible.",
            marks: 7,
            modelAnswer: "(a) 2.0 cm² = 2.0 × 10⁻⁴ m²; 10 cm² = 10 × 10⁻⁴ m² = 1.0 × 10⁻³ m². (b) p = F/A = 60/(2.0 × 10⁻⁴) = 300 000 Pa (300 kPa). (c) F = p × A = 300 000 × 1.0 × 10⁻³ = 300 N. (d) Pascal's principle: pressure applied to an enclosed fluid is transmitted equally (undiminished) throughout the fluid, so the same pressure acts on the larger output piston giving a larger force.",
            markScheme: [
              "2.0 cm² = 2.0 × 10⁻⁴ m²; 10 cm² = 1.0 × 10⁻³ m²",
              "p = 60/(2.0 × 10⁻⁴)",
              "p = 300 000 Pa",
              "F = p × A = 300 000 × 1.0 × 10⁻³",
              "F = 300 N",
              "Pascal's principle named",
              "Pressure transmitted equally through an enclosed fluid",
            ],
            commonError: "Failing to convert cm² to m² (1 cm² = 1 × 10⁻⁴ m²), giving answers 10 000× too large or small.",
            guideRef: "Pressure",
            difficulty: "challenge",
            hints: [
              "1 cm² = 1 × 10⁻⁴ m².",
              "p = F/A for the input piston.",
              "The same pressure acts on the output piston: F = p × A.",
              "Name the principle about pressure in an enclosed fluid.",
            ],
            strategy: "convert units, p = F/A on input, then F = p × A on output (Pascal's principle)",
            solutions: [
              {
                label: "Method: Pascal's principle with unit conversion",
                steps: [
                  "A_in = 2.0 × 10⁻⁴ m²; A_out = 1.0 × 10⁻³ m²",
                  "p = 60/(2.0 × 10⁻⁴) = 300 000 Pa",
                  "F_out = 300 000 × 1.0 × 10⁻³ = 300 N",
                  "Force multiplied by A_out/A_in = 5",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq2-07",
            question: "(a) Define the centre of mass of an object. (b) Describe an experiment to find the centre of mass of a flat irregular sheet of card using a plumb line. (c) Explain how the position of the centre of mass affects the stability of a tall object.",
            marks: 6,
            modelAnswer: "(a) The centre of mass is the single point at which the whole weight of the object may be considered to act. (b) Make a small hole near the edge of the card and hang it freely from a pin so it can swing. Hang a plumb line (a mass on a string) from the same pin and draw the vertical line it makes on the card. Repeat by hanging the card from a different hole and drawing a second vertical line. The centre of mass is where the lines cross (a third line is a useful check). (c) A lower centre of mass makes an object more stable, because the vertical line through the centre of mass is less likely to fall outside the base when the object is tilted; a high centre of mass topples more easily.",
            markScheme: [
              "Centre of mass = point where the whole weight acts",
              "Hang card freely from a pin so it can swing",
              "Use a plumb line to mark the vertical",
              "Repeat from a second point; centre of mass is where lines cross",
              "Lower centre of mass → more stable",
              "Reason: vertical through CoM stays within the base when tilted",
            ],
            commonError: "Forgetting that the card must be free to swing/rotate so it settles with its centre of mass directly below the pivot.",
            guideRef: "Moments and Stability",
            difficulty: "core",
            hints: [
              "Define it in terms of where the weight acts.",
              "Why must the card hang freely?",
              "What does the plumb line show, and why repeat from another hole?",
              "Link stability to where the vertical line through the CoM falls.",
            ],
          },
          {
            id: "phys-forces-bq2-08",
            question: "A uniform metre rule (weight 1.2 N) is pivoted at the 30 cm mark. (a) State where the weight of the rule acts. (b) Calculate the moment of the rule's weight about the pivot, and state its direction (clockwise or anticlockwise). (c) A 0.50 N weight is hung on the short side of the pivot to balance the rule. Calculate where it must be placed.",
            marks: 7,
            modelAnswer: "(a) The rule is uniform, so its weight acts at the centre, the 50 cm mark. (b) The centre (50 cm) is 20 cm = 0.20 m to the right of the 30 cm pivot. Moment = 1.2 × 0.20 = 0.24 N m, clockwise (the long side tips down on the right). (c) The 0.50 N weight must be on the short (left) side to give an anticlockwise moment of 0.24 N m: 0.50 × d = 0.24 → d = 0.48 m = 48 cm from the pivot. But the rule only extends 30 cm to the left of the pivot, so this is impossible — 48 cm exceeds the 30 cm available, so the rule cannot be balanced by a single 0.50 N weight on the left.",
            markScheme: [
              "Weight of uniform rule acts at the 50 cm mark",
              "Distance from pivot = 0.20 m",
              "Moment = 1.2 × 0.20 = 0.24 N m",
              "Direction clockwise",
              "0.50 × d = 0.24 set up correctly",
              "d = 0.48 m = 48 cm required",
              "Recognise 48 cm > 30 cm available → cannot balance with this weight",
            ],
            commonError: "Calculating d = 0.48 m and stopping, without checking it is beyond the end of the rule (only 30 cm available on the left).",
            guideRef: "Moments and Stability",
            difficulty: "challenge",
            hints: [
              "The uniform rule's weight acts at 50 cm.",
              "Distance from the 30 cm pivot to 50 cm is 20 cm.",
              "Moment = weight × distance; which way does it turn?",
              "Set 0.50 × d = 0.24 — then check if d fits on the rule.",
            ],
            strategy: "find the rule's moment; equate, solve for d, then sanity-check against the rule length",
            solutions: [
              {
                label: "Method: moments with a feasibility check",
                steps: [
                  "Rule weight acts at 50 cm, 0.20 m right of pivot",
                  "Moment = 1.2 × 0.20 = 0.24 N m clockwise",
                  "Balance: 0.50 × d = 0.24 → d = 0.48 m = 48 cm",
                  "Only 30 cm available on the left → not possible",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq2-09",
            question: "Atmospheric pressure is about 100 000 Pa. (a) Calculate the force the atmosphere exerts on a flat window of area 1.5 m². (b) Explain why the window does not break under this force. (c) A suction cup of area 0.0020 m² is stuck to a smooth wall with the air removed from behind it. Estimate the maximum pulling force it can withstand before coming off.",
            marks: 6,
            modelAnswer: "(a) F = p × A = 100 000 × 1.5 = 150 000 N. (b) Atmospheric pressure also acts on the inside of the window with almost the same force in the opposite direction, so the resultant force is approximately zero and the glass is not broken. (c) The atmosphere presses the cup onto the wall with a force F = p × A = 100 000 × 0.0020 = 200 N. So the cup can withstand a pulling force of up to about 200 N before it is pulled off.",
            markScheme: [
              "F = p × A = 100 000 × 1.5",
              "= 150 000 N",
              "Air pushes on both sides → resultant ≈ 0",
              "So window does not break",
              "Suction force F = 100 000 × 0.0020",
              "= 200 N",
            ],
            commonError: "Forgetting that atmospheric pressure acts on both sides of the window, so it does not produce a large resultant force.",
            guideRef: "Pressure",
            difficulty: "challenge",
            hints: [
              "Use F = p × A.",
              "Does the air push on only one side of the window?",
              "For the cup, the atmosphere holds it on with F = p × A.",
              "A_cup = 0.0020 m².",
            ],
            strategy: "F = p × A; remember pressure acts on both sides of a free surface",
            solutions: [
              {
                label: "Method: F = p × A",
                steps: [
                  "Window: F = 100 000 × 1.5 = 150 000 N (balanced by inside air)",
                  "Suction cup: F = 100 000 × 0.0020 = 200 N",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq2-10",
            question: "A solid steel block has dimensions 0.40 m × 0.20 m × 0.10 m and a mass of 64 kg. (g = 10 N/kg) (a) Calculate its weight. (b) Calculate the maximum and minimum pressure it can exert on a flat floor, depending on which face it rests on. (c) State which face must be downward for the minimum pressure, and explain why.",
            marks: 7,
            modelAnswer: "(a) W = mg = 64 × 10 = 640 N. (b) Largest face = 0.40 × 0.20 = 0.08 m² → minimum pressure = 640/0.08 = 8000 Pa. Smallest face = 0.20 × 0.10 = 0.02 m² → maximum pressure = 640/0.02 = 32 000 Pa. (c) The block must rest on its largest face (0.40 m × 0.20 m) for minimum pressure, because pressure = force/area: for a fixed weight, the larger the contact area, the smaller the pressure.",
            markScheme: [
              "W = 64 × 10 = 640 N",
              "Largest face area = 0.40 × 0.20 = 0.08 m²",
              "Minimum pressure = 640/0.08 = 8000 Pa",
              "Smallest face area = 0.20 × 0.10 = 0.02 m²",
              "Maximum pressure = 640/0.02 = 32 000 Pa",
              "Largest face down for minimum pressure",
              "Reason: p = F/A, larger area → smaller pressure",
            ],
            commonError: "Pairing the largest face with the largest pressure — minimum pressure comes from the largest area.",
            guideRef: "Pressure",
            difficulty: "challenge",
            hints: [
              "Weight W = mg first.",
              "List the three possible face areas.",
              "Minimum pressure uses the largest face area; maximum uses the smallest.",
              "Apply p = F/A to the extreme cases.",
            ],
            strategy: "W = mg; identify largest and smallest faces; p = F/A for each extreme",
            solutions: [
              {
                label: "Method: W = mg then p = F/A for extreme faces",
                steps: [
                  "W = 64 × 10 = 640 N",
                  "Largest face = 0.40 × 0.20 = 0.08 m² → p = 640/0.08 = 8000 Pa (minimum)",
                  "Smallest face = 0.20 × 0.10 = 0.02 m² → p = 640/0.02 = 32 000 Pa (maximum)",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-forces-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Ten structured questions on momentum, impulse, collisions, explosions and safety.",
        questions: [
          {
            id: "phys-forces-bq3-01",
            question: "(a) Define momentum and state its SI unit. (b) Calculate the momentum of a 1200 kg car travelling at 25 m/s. (c) State the direction of the momentum.",
            marks: 4,
            modelAnswer: "(a) Momentum = mass × velocity (p = mv). Its SI unit is kg m/s (equivalent to N s). (b) p = mv = 1200 × 25 = 30 000 kg m/s. (c) The momentum is in the same direction as the velocity (the direction the car is travelling).",
            markScheme: [
              "Momentum = mass × velocity / p = mv",
              "Unit kg m/s (accept N s)",
              "p = 1200 × 25 = 30 000 kg m/s",
              "Direction = same as velocity / direction of travel",
            ],
            commonError: "Giving the unit as kg m/s² (that is force-like) instead of kg m/s.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "warmup",
          },
          {
            id: "phys-forces-bq3-02",
            question: "(a) State the principle of conservation of momentum, including the condition for it to apply. (b) Explain briefly why momentum is conserved in a collision, referring to Newton's third law.",
            marks: 5,
            modelAnswer: "(a) In a closed system (one with no external resultant force), the total momentum before an event equals the total momentum after. (b) During a collision the two objects exert forces on each other. By Newton's third law these forces are equal and opposite, and they act for the same time, so the impulses (F × Δt) are equal and opposite. Therefore the momentum gained by one object equals the momentum lost by the other, and the total momentum stays constant.",
            markScheme: [
              "Total momentum before = total momentum after",
              "Condition: closed system / no external resultant force",
              "Objects exert forces on each other in the collision",
              "By N3L these forces are equal and opposite (for the same time)",
              "Equal and opposite impulses → momentum change of one cancels the other",
            ],
            commonError: "Omitting the condition 'no external/resultant force' (closed system) when stating the principle.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "core",
            hints: [
              "What must be true of external forces for the principle to hold?",
              "Compare total momentum before and after.",
              "What does N3L say about the forces during the collision?",
              "Link equal-and-opposite forces to equal-and-opposite impulses.",
            ],
          },
          {
            id: "phys-forces-bq3-03",
            question: "A 0.060 kg tennis ball travelling at 30 m/s is struck by a racket and returns along the same line at 40 m/s. The contact lasts 0.0050 s. (a) Taking the return direction as positive, calculate the change in momentum of the ball. (b) Calculate the average force the racket exerts on the ball.",
            marks: 6,
            modelAnswer: "(a) Take return direction as positive. Initial velocity = −30 m/s; final velocity = +40 m/s. Δp = m(v − u) = 0.060 × (40 − (−30)) = 0.060 × 70 = 4.2 kg m/s. (b) F = Δp/Δt = 4.2/0.0050 = 840 N.",
            markScheme: [
              "Recognise initial and final velocities have opposite signs",
              "Δv = 40 − (−30) = 70 m/s",
              "Δp = 0.060 × 70 = 4.2 kg m/s",
              "F = Δp/Δt used",
              "F = 4.2/0.0050",
              "F = 840 N",
            ],
            commonError: "Using Δv = 40 − 30 = 10 m/s and forgetting that the ball reverses direction (should be 70 m/s).",
            guideRef: "Momentum and Its Conservation",
            difficulty: "challenge",
            hints: [
              "The ball reverses direction, so one velocity is negative.",
              "Δv = v − u = 40 − (−30) = 70 m/s.",
              "Δp = mΔv.",
              "F = Δp/Δt = 4.2/0.0050.",
            ],
            strategy: "sign convention; Δp = mΔv with reversal; F = Δp/Δt",
            solutions: [
              {
                label: "Method: impulse–momentum with direction",
                steps: [
                  "u = −30 m/s, v = +40 m/s",
                  "Δp = 0.060 × (40 − (−30)) = 0.060 × 70 = 4.2 kg m/s",
                  "F = Δp/Δt = 4.2/0.0050 = 840 N",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq3-04",
            question: "A 3.0 kg trolley moving at 2.0 m/s collides with a stationary 1.0 kg trolley. After the collision the 3.0 kg trolley continues at 1.0 m/s in the same direction. (a) Calculate the total momentum before the collision. (b) Calculate the velocity of the 1.0 kg trolley after the collision. (c) Is momentum conserved? Show how your answer demonstrates this.",
            marks: 7,
            modelAnswer: "(a) p_before = 3.0 × 2.0 + 1.0 × 0 = 6.0 kg m/s. (b) By conservation: 3.0 × 1.0 + 1.0 × v = 6.0 → 3.0 + v = 6.0 → v = 3.0 m/s. (c) Yes. Total momentum after = 3.0 × 1.0 + 1.0 × 3.0 = 3.0 + 3.0 = 6.0 kg m/s, which equals the momentum before (6.0 kg m/s), so momentum is conserved.",
            markScheme: [
              "p_before = 3.0 × 2.0 = 6.0 kg m/s",
              "Conservation equation: 3.0 × 1.0 + 1.0 × v = 6.0",
              "v = 3.0 m/s",
              "p_after = 3.0 × 1.0 + 1.0 × 3.0",
              "= 6.0 kg m/s",
              "Equal to p_before → momentum conserved",
              "Correct units kg m/s",
            ],
            commonError: "Forgetting the 3.0 kg trolley still has momentum after the collision (3.0 × 1.0) when solving for v.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "core",
            hints: [
              "p_before = m₁u₁ + m₂u₂; the second trolley is stationary.",
              "After: total = 3.0 × 1.0 + 1.0 × v.",
              "Set total after = total before and solve for v.",
              "Add up the momenta after to check.",
            ],
            strategy: "conservation of momentum; substitute the known post-collision velocity",
            solutions: [
              {
                label: "Method: conservation of momentum",
                steps: [
                  "p_before = 3.0 × 2.0 = 6.0 kg m/s",
                  "3.0 × 1.0 + 1.0 × v = 6.0 → v = 3.0 m/s",
                  "Check: 3.0 + 3.0 = 6.0 kg m/s ✓",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq3-05",
            question: "A stationary firework of mass 1.2 kg explodes into two pieces. A 0.40 kg piece flies horizontally to the east at 18 m/s. (a) State the total momentum of the system immediately before the explosion. (b) Calculate the velocity (magnitude and direction) of the remaining 0.80 kg piece. (c) State the principle you used.",
            marks: 6,
            modelAnswer: "(a) Zero, because the firework is stationary before the explosion. (b) Total momentum after must also be zero. Momentum of small piece = 0.40 × 18 = 7.2 kg m/s east. So the 0.80 kg piece must have 7.2 kg m/s west. v = p/m = 7.2/0.80 = 9.0 m/s to the west. (c) Conservation of momentum (in a closed system the total momentum is unchanged).",
            markScheme: [
              "Momentum before = 0 (stationary)",
              "Momentum after also = 0",
              "Small piece momentum = 0.40 × 18 = 7.2 kg m/s (east)",
              "0.80 kg piece momentum = 7.2 kg m/s west",
              "v = 7.2/0.80 = 9.0 m/s (west)",
              "Principle: conservation of momentum",
            ],
            commonError: "Forgetting to state the opposite direction (west) for the larger piece.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "core",
            hints: [
              "What is the momentum before the explosion?",
              "Total after must equal total before.",
              "Find the momentum of the small piece, then set the other equal and opposite.",
              "v = p/m for the larger piece.",
            ],
            strategy: "explosion: total momentum = 0; equal and opposite momenta",
            solutions: [
              {
                label: "Method: conservation from rest",
                steps: [
                  "p_before = 0",
                  "Small piece: 0.40 × 18 = 7.2 kg m/s east",
                  "Large piece: 7.2 kg m/s west",
                  "v = 7.2/0.80 = 9.0 m/s west",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq3-06",
            question: "Explain, in terms of momentum and force, how each of the following safety features reduces injury in a car crash: (a) a seat belt that stretches slightly, (b) an air bag, (c) a crumple zone.",
            marks: 6,
            modelAnswer: "In a crash the occupant's momentum must be reduced to (almost) zero. Because F = Δp/Δt, for a fixed change in momentum, increasing the time Δt over which the momentum changes reduces the average force on the body. (a) A seat belt that stretches slightly increases the stopping time, lowering the force on the chest. (b) An air bag increases the time taken for the head to stop and spreads the force over a larger area, reducing the force (and pressure) on the head. (c) A crumple zone deforms during the impact, lengthening the collision time, which reduces the force transmitted to the occupants.",
            markScheme: [
              "Crash reduces occupant's momentum to ~zero / change in momentum is fixed",
              "F = Δp/Δt → larger Δt gives smaller force",
              "Seat belt stretches → longer stopping time → smaller force",
              "Air bag → longer time (and larger area) → smaller force/pressure",
              "Crumple zone deforms → longer collision time → smaller force",
              "Any clear, correct link between increased time and reduced force",
            ],
            commonError: "Saying these features 'reduce the momentum change' — the momentum change is essentially fixed; it is the time that is increased to reduce the force.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "core",
            hints: [
              "What is the change in momentum the occupant must undergo?",
              "Recall F = Δp/Δt.",
              "How does each feature change the time of the impact?",
              "Longer time means smaller force for the same Δp.",
            ],
          },
          {
            id: "phys-forces-bq3-07",
            question: "A 1000 kg car moving east at 24 m/s collides head-on with a 1500 kg van moving west at 16 m/s. They lock together. (Take east as positive.) (a) Calculate the total momentum before the collision. (b) Calculate the velocity of the wreckage immediately after, stating its direction. (c) State whether kinetic energy is conserved in this collision and name this type of collision.",
            marks: 8,
            modelAnswer: "(a) p_before = (1000 × +24) + (1500 × −16) = 24 000 − 24 000 = 0 kg m/s. (b) Total mass = 2500 kg. v = p/m = 0/2500 = 0 m/s. The wreckage is momentarily stationary (no direction). (c) Kinetic energy is NOT conserved: before, KE = ½ × 1000 × 24² + ½ × 1500 × 16² = 288 000 + 192 000 = 480 000 J; after, KE = 0 (since v = 0). All the kinetic energy is converted to other forms (heat, sound, deformation). This is an inelastic collision.",
            markScheme: [
              "Assign signs: car +24, van −16",
              "p_before = 24 000 − 24 000 = 0 kg m/s",
              "Total mass = 2500 kg",
              "v = 0/2500 = 0 m/s (wreckage stationary)",
              "KE_before = 288 000 + 192 000 = 480 000 J",
              "KE_after = 0 J",
              "KE not conserved → inelastic collision",
            ],
            commonError: "Adding the momenta as if both were positive (getting 48 000 kg m/s) instead of using opposite signs for opposite directions.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "challenge",
            hints: [
              "Assign + and − for east and west before substituting.",
              "p_before = 1000(+24) + 1500(−16).",
              "Combined mass = 2500 kg; v = p/m.",
              "Compute KE before and after to classify the collision.",
            ],
            strategy: "signed momentum sum; v = p/m; KE audit to classify the collision",
            solutions: [
              {
                label: "Method: signed momentum then KE audit",
                steps: [
                  "p_before = 1000(+24) + 1500(−16) = 24 000 − 24 000 = 0",
                  "v = 0/2500 = 0 m/s (wreckage stops)",
                  "KE_before = 0.5×1000×24² + 0.5×1500×16² = 288 000 + 192 000 = 480 000 J",
                  "KE_after = 0 J → all KE lost → inelastic",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq3-08",
            question: "A 2.0 kg ball is dropped from rest and falls freely for 1.5 s before hitting the ground. (g = 10 m/s²) (a) Calculate its velocity just before impact. (b) Calculate its momentum just before impact. (c) The ground brings it to rest in 0.025 s. Calculate the average force exerted by the ground on the ball.",
            marks: 7,
            modelAnswer: "(a) v = u + at = 0 + 10 × 1.5 = 15 m/s (downward). (b) p = mv = 2.0 × 15 = 30 kg m/s (downward). (c) The ball's momentum changes from 30 kg m/s to 0, so Δp = 30 kg m/s. F = Δp/Δt = 30/0.025 = 1200 N (upward). (This is the force needed to stop the ball; the net force differs slightly once weight is included, but the impact force on this timescale is dominated by this value.)",
            markScheme: [
              "v = u + at = 0 + 10 × 1.5 = 15 m/s",
              "p = mv = 2.0 × 15 = 30 kg m/s",
              "Δp = 30 kg m/s (brought to rest)",
              "F = Δp/Δt used",
              "F = 30/0.025",
              "F = 1200 N",
              "Direction upward (on the ball)",
            ],
            commonError: "Using the impact time incorrectly or forgetting to first find the impact velocity from the free fall.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "challenge",
            hints: [
              "Find impact velocity from v = u + at (u = 0).",
              "Momentum p = mv just before impact.",
              "Δp equals this momentum (brought to rest).",
              "F = Δp/Δt with Δt = 0.025 s.",
            ],
            strategy: "kinematics for v, then p = mv, then F = Δp/Δt (three linked steps)",
            solutions: [
              {
                label: "Method: free fall then impulse",
                steps: [
                  "v = 0 + 10 × 1.5 = 15 m/s",
                  "p = 2.0 × 15 = 30 kg m/s",
                  "F = Δp/Δt = 30/0.025 = 1200 N",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq3-09",
            question: "A 5.0 kg object moving at 4.0 m/s catches up with and collides with a 3.0 kg object moving in the same direction at 1.0 m/s. After the collision the 5.0 kg object moves at 2.5 m/s in the same direction. (a) Calculate the total momentum before the collision. (b) Calculate the velocity of the 3.0 kg object after the collision. (c) Check that your answer is physically sensible by commenting on the relative speeds after the collision.",
            marks: 7,
            modelAnswer: "(a) p_before = 5.0 × 4.0 + 3.0 × 1.0 = 20 + 3.0 = 23 kg m/s. (b) By conservation: 5.0 × 2.5 + 3.0 × v = 23 → 12.5 + 3.0v = 23 → 3.0v = 10.5 → v = 3.5 m/s. (c) Sensible: after the collision the front (3.0 kg) object moves at 3.5 m/s and the rear (5.0 kg) object at 2.5 m/s, so the rear object is now slower than the front object. This means they are separating, which is physically required (the rear object cannot pass through the front one).",
            markScheme: [
              "p_before = 5.0 × 4.0 + 3.0 × 1.0 = 23 kg m/s",
              "Conservation: 5.0 × 2.5 + 3.0v = 23",
              "12.5 + 3.0v = 23",
              "3.0v = 10.5",
              "v = 3.5 m/s",
              "Comment: front object (3.5 m/s) faster than rear (2.5 m/s)",
              "So the objects separate → physically sensible",
            ],
            commonError: "Getting v but not checking it is greater than the rear object's final speed; an answer where the rear object is faster would be impossible.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "challenge",
            hints: [
              "Add both momenta before (both moving the same way).",
              "Apply conservation with the known 5.0 kg final velocity.",
              "Solve 3.0v = 23 − 12.5.",
              "Compare the two final speeds for a sensibility check.",
            ],
            strategy: "conservation of momentum with two moving bodies; then a physical reasonableness check",
            solutions: [
              {
                label: "Method: conservation then check",
                steps: [
                  "p_before = 20 + 3.0 = 23 kg m/s",
                  "5.0 × 2.5 + 3.0v = 23 → 3.0v = 10.5",
                  "v = 3.5 m/s",
                  "3.5 m/s > 2.5 m/s → objects separate (sensible)",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq3-10",
            question: "(a) Define impulse and give its unit. (b) The graph of force against time for a kick on a 0.45 kg football is a triangle: the force rises from 0 to a peak of 600 N and back to 0 over 0.020 s. The area under this graph (the impulse) is 6.0 N s. Calculate the speed the ball gains, assuming it starts from rest. (c) Explain why a follow-through (keeping the foot in contact longer) increases the speed of the ball.",
            marks: 7,
            modelAnswer: "(a) Impulse = force × time for which it acts (impulse = FΔt), and it equals the change in momentum. Its unit is the newton second (N s), equivalent to kg m/s. (b) Impulse = Δp = mΔv. So 6.0 = 0.45 × Δv → Δv = 6.0/0.45 = 13.3 m/s. Starting from rest, the ball's speed is 13.3 m/s (3 s.f.). (c) A longer contact time increases Δt; since impulse = FΔt, a larger time (for a similar force) gives a larger impulse, hence a larger change in momentum and a greater final speed.",
            markScheme: [
              "Impulse = force × time / FΔt (= change in momentum)",
              "Unit N s (accept kg m/s)",
              "Impulse = mΔv used: 6.0 = 0.45 × Δv",
              "Δv = 6.0/0.45",
              "Δv = 13.3 m/s (accept 13 m/s)",
              "Longer contact time → larger impulse (FΔt)",
              "Larger impulse → larger Δp → greater speed",
            ],
            commonError: "Confusing the peak force (600 N) with the impulse — the impulse is the area under the graph, not the peak value.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "challenge",
            hints: [
              "Impulse equals the change in momentum.",
              "The area under the F–t graph is the impulse (given as 6.0 N s).",
              "6.0 = mΔv → solve for Δv.",
              "For part (c), think about how Δt affects FΔt.",
            ],
            strategy: "impulse = area under F–t graph = Δp = mΔv; relate Δt to impulse",
            solutions: [
              {
                label: "Method: impulse = mΔv",
                steps: [
                  "Impulse = 6.0 N s (area under graph)",
                  "6.0 = 0.45 × Δv",
                  "Δv = 6.0/0.45 = 13.3 m/s",
                  "From rest → final speed ≈ 13.3 m/s",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-forces-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Ten mixed structured questions integrating Newton's laws, moments, pressure, Hooke's law and momentum.",
        questions: [
          {
            id: "phys-forces-bq4-01",
            question: "Two forces act on an object at a point: 8.0 N to the east and 6.0 N to the north. (a) Explain why these forces cannot simply be added to 14 N. (b) Calculate the magnitude of the resultant force. (c) Describe (in words) the direction of the resultant relative to the east direction.",
            marks: 5,
            modelAnswer: "(a) The forces act at right angles (different directions), so they cannot be added arithmetically; they must be combined as vectors. Simple addition only works for forces along the same line. (b) Using Pythagoras: R = √(8.0² + 6.0²) = √(64 + 36) = √100 = 10 N. (c) The resultant points between east and north (north of east), at an angle θ above the east direction where tan θ = 6.0/8.0 = 0.75, so θ ≈ 37° north of east.",
            markScheme: [
              "Forces are perpendicular / in different directions → vectors",
              "Cannot add arithmetically; only same-line forces add directly",
              "R = √(8² + 6²) = √100",
              "R = 10 N",
              "Direction north of east / tan θ = 6/8 (θ ≈ 37°)",
            ],
            commonError: "Adding perpendicular forces arithmetically (8 + 6 = 14 N) instead of using vector addition.",
            guideRef: "What Is a Force?",
            difficulty: "core",
            hints: [
              "Are the two forces along the same line?",
              "Perpendicular forces combine with Pythagoras.",
              "R = √(8² + 6²).",
              "For direction, use tan θ = opposite/adjacent.",
            ],
            strategy: "vector addition of perpendicular forces (Pythagoras and tangent)",
            solutions: [
              {
                label: "Method: Pythagoras and direction",
                steps: [
                  "R = √(8.0² + 6.0²) = √(64 + 36) = √100 = 10 N",
                  "tan θ = 6.0/8.0 = 0.75 → θ ≈ 37° north of east",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq4-02",
            question: "A crate of mass 50 kg is lifted vertically by a cable. (g = 10 N/kg) (a) Calculate the weight of the crate. (b) The cable tension is 600 N as the crate accelerates upward. Calculate the resultant force and the acceleration. (c) Later the crate moves up at constant velocity. State the new cable tension and justify your answer.",
            marks: 7,
            modelAnswer: "(a) W = mg = 50 × 10 = 500 N. (b) Resultant = tension − weight = 600 − 500 = 100 N upward. a = F/m = 100/50 = 2.0 m/s² upward. (c) At constant velocity the acceleration is zero, so the resultant force is zero. Therefore the tension equals the weight: 500 N. (By Newton's first law, balanced forces mean constant velocity.)",
            markScheme: [
              "W = 50 × 10 = 500 N",
              "Resultant = 600 − 500 = 100 N upward",
              "a = F/m = 100/50 = 2.0 m/s²",
              "Constant velocity → a = 0 → resultant = 0",
              "Tension = weight = 500 N",
              "Justified using Newton's first law",
            ],
            commonError: "Thinking a larger tension is needed to keep moving at constant velocity — at constant velocity tension just equals the weight.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "core",
            hints: [
              "Weight W = mg.",
              "Resultant = tension − weight (up positive).",
              "a = resultant ÷ mass.",
              "At constant velocity, what is the resultant force?",
            ],
            strategy: "free-body up vs down; F = ma; balanced forces for constant velocity",
            solutions: [
              {
                label: "Method: vertical force analysis",
                steps: [
                  "W = 50 × 10 = 500 N",
                  "Resultant = 600 − 500 = 100 N up",
                  "a = 100/50 = 2.0 m/s² up",
                  "Constant velocity → tension = weight = 500 N",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq4-03",
            question: "A diver of weight 700 N stands at the end of a uniform diving board of weight 300 N and length 4.0 m. The board is bolted at the left end (point A) and rests on a support (point B) 1.0 m from A. (a) State where the board's weight acts. (b) Taking moments about B, find the downward force the bolt at A must provide. (c) Briefly explain why the bolt at A is in tension (pulled up or down?).",
            marks: 8,
            modelAnswer: "(a) The board is uniform, so its weight (300 N) acts at the centre, 2.0 m from A (i.e. 1.0 m to the right of B). (b) Take moments about B. Clockwise (about B) from weights to the right of B: board weight 300 N at 1.0 m → 300 × 1.0 = 300 N m; diver 700 N at (4.0 − 1.0) = 3.0 m → 700 × 3.0 = 2100 N m. Total CW = 2400 N m. The bolt at A is 1.0 m to the left of B; for equilibrium it must provide an anticlockwise moment about B: F_A × 1.0 = 2400 → F_A = 2400 N. (c) The board tends to rotate clockwise about B (tipping the diver's end down and lifting the A end up), so the bolt at A must pull the board DOWN to hold it — the bolt is in tension, providing a 2400 N downward force.",
            markScheme: [
              "Board weight acts at centre, 2.0 m from A (1.0 m right of B)",
              "Moment of board weight about B = 300 × 1.0 = 300 N m",
              "Moment of diver about B = 700 × 3.0 = 2100 N m",
              "Total clockwise moment about B = 2400 N m",
              "F_A × 1.0 = 2400 (moments about B)",
              "F_A = 2400 N",
              "Bolt pulls the board down (tension) to balance the tipping",
              "Correct identification of which side of B",
            ],
            commonError: "Measuring the diver's distance from A (4.0 m) instead of from the pivot B (3.0 m) when taking moments about B.",
            guideRef: "Moments and Stability",
            difficulty: "challenge",
            hints: [
              "The uniform board's weight acts at its midpoint (2.0 m from A).",
              "Take moments about B; distances are measured from B.",
              "Diver is at 4.0 − 1.0 = 3.0 m from B.",
              "Balance the bolt's moment (1.0 m on the other side of B) against the rest.",
            ],
            strategy: "moments about the support B; careful distances from the pivot; deduce tension direction",
            solutions: [
              {
                label: "Method: moments about B",
                steps: [
                  "Board weight at 1.0 m right of B: 300 × 1.0 = 300 N m (CW)",
                  "Diver at 3.0 m right of B: 700 × 3.0 = 2100 N m (CW)",
                  "Total CW = 2400 N m",
                  "Bolt 1.0 m left of B: F_A × 1.0 = 2400 → F_A = 2400 N downward (tension)",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq4-04",
            question: "A spring requires a force of 2.0 N to produce each 0.04 m of extension (within the limit of proportionality). (a) Calculate the spring constant. (b) Two such identical springs are used side by side (in parallel) to support a load of 12 N. Calculate the extension of the combination. (c) Compare this extension with that of a single spring carrying the same 12 N load.",
            marks: 7,
            modelAnswer: "(a) k = F/x = 2.0/0.04 = 50 N/m. (b) In parallel the two springs share the load equally: each carries 6.0 N. Extension of each (and of the combination) = F/k = 6.0/50 = 0.12 m. (c) A single spring carrying 12 N would extend x = 12/50 = 0.24 m. So the parallel pair extends half as much (0.12 m vs 0.24 m), because each spring supports only half the load.",
            markScheme: [
              "k = F/x = 2.0/0.04 = 50 N/m",
              "Parallel springs share load: each carries 6.0 N",
              "Extension = 6.0/50 = 0.12 m",
              "Single spring: x = 12/50 = 0.24 m",
              "Parallel extension is half the single-spring extension",
              "Reason: each spring carries half the load",
            ],
            commonError: "Treating parallel springs as sharing extension rather than load, or giving each spring the full 12 N.",
            guideRef: "Hooke's Law and Force–Extension Graphs",
            difficulty: "challenge",
            hints: [
              "k = F/x from the given data.",
              "In parallel, the load is shared between the springs.",
              "Each spring carries 6.0 N; find its extension.",
              "Compare with a single spring carrying the full 12 N.",
            ],
            strategy: "find k; parallel springs share the load equally; compare extensions",
            solutions: [
              {
                label: "Method: k then parallel sharing",
                steps: [
                  "k = 2.0/0.04 = 50 N/m",
                  "Parallel: each spring carries 6.0 N → x = 6.0/50 = 0.12 m",
                  "Single spring: x = 12/50 = 0.24 m → parallel pair extends half as much",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq4-05",
            question: "A block of mass 2.0 kg rests on a smooth horizontal surface. A constant horizontal force of 5.0 N acts on it for 3.0 s starting from rest. (a) Calculate the acceleration. (b) Calculate the velocity after 3.0 s. (c) Calculate the momentum after 3.0 s, and verify it equals the impulse of the force.",
            marks: 7,
            modelAnswer: "(a) a = F/m = 5.0/2.0 = 2.5 m/s². (b) v = u + at = 0 + 2.5 × 3.0 = 7.5 m/s. (c) p = mv = 2.0 × 7.5 = 15 kg m/s. Impulse = F × t = 5.0 × 3.0 = 15 N s. Since 15 kg m/s = 15 N s, the momentum gained equals the impulse, confirming impulse = change in momentum.",
            markScheme: [
              "a = F/m = 5.0/2.0 = 2.5 m/s²",
              "v = u + at = 0 + 2.5 × 3.0 = 7.5 m/s",
              "p = mv = 2.0 × 7.5 = 15 kg m/s",
              "Impulse = Ft = 5.0 × 3.0 = 15 N s",
              "Recognise kg m/s ≡ N s",
              "Conclude impulse = change in momentum",
            ],
            commonError: "Not recognising that kg m/s and N s are the same unit, so failing to see that impulse equals momentum change.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "core",
            hints: [
              "a = F/m.",
              "v = u + at with u = 0.",
              "p = mv; impulse = Ft.",
              "Compare the two numbers and their units.",
            ],
            strategy: "F = ma → kinematics → p = mv; then compare with impulse Ft",
            solutions: [
              {
                label: "Method: link impulse and momentum",
                steps: [
                  "a = 5.0/2.0 = 2.5 m/s²",
                  "v = 0 + 2.5 × 3.0 = 7.5 m/s",
                  "p = 2.0 × 7.5 = 15 kg m/s",
                  "Impulse = 5.0 × 3.0 = 15 N s = p ✓",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq4-06",
            question: "(a) Explain what is meant by the centre of gravity of an object. (b) A bus is tested for stability on a tilting platform. Explain, in terms of the centre of gravity and the base, what determines the angle at which it topples. (c) State two design features that would let a bus tilt to a larger angle before toppling.",
            marks: 6,
            modelAnswer: "(a) The centre of gravity is the point at which the entire weight of the object can be considered to act. (b) As the platform tilts, the line of action of the weight (vertical, through the centre of gravity) moves toward the lower edge of the base. The bus topples at the angle where this vertical line passes outside the base (beyond the lowest wheels); beyond that point the weight produces a turning moment that rotates the bus over. (c) Any two: lower the centre of gravity (e.g. heavy components low down / passengers only on the lower deck); widen the wheelbase/base; increase the mass low in the vehicle.",
            markScheme: [
              "Centre of gravity = point where the whole weight acts",
              "As it tilts, vertical line through CoG moves toward edge of base",
              "Topples when this line passes outside the base",
              "Then weight gives a toppling moment",
              "Design feature 1: lower the centre of gravity",
              "Design feature 2: widen the base/wheelbase (or add mass low down)",
            ],
            commonError: "Saying a heavier bus is automatically more stable — it is the position of the centre of gravity and the base width that matter, not the total weight.",
            guideRef: "Moments and Stability",
            difficulty: "core",
            hints: [
              "Define it in terms of where the weight acts.",
              "Track the vertical line through the CoG as the bus tilts.",
              "When does it topple?",
              "What design changes keep that line inside the base for longer?",
            ],
          },
          {
            id: "phys-forces-bq4-07",
            question: "A submarine hatch is a circular disc of area 0.50 m². The submarine dives in seawater of density 1025 kg/m³. (g = 10 N/kg) (a) Calculate the water pressure at a depth of 60 m (due to the water alone). (b) Calculate the force the water exerts on the hatch at this depth. (c) Explain why it becomes harder to open the hatch outward as the submarine dives deeper.",
            marks: 7,
            modelAnswer: "(a) p = ρgh = 1025 × 10 × 60 = 615 000 Pa (615 kPa). (b) F = p × A = 615 000 × 0.50 = 307 500 N (≈ 3.1 × 10⁵ N). (c) Pressure increases with depth (p = ρgh), so the inward force on the hatch (F = pA) increases as the submarine dives. To open the hatch outward you must overcome this growing force, so it becomes progressively harder with depth.",
            markScheme: [
              "p = ρgh = 1025 × 10 × 60",
              "p = 615 000 Pa",
              "F = p × A = 615 000 × 0.50",
              "F = 307 500 N (≈ 3.1 × 10⁵ N)",
              "Pressure increases with depth (p = ρgh)",
              "So inward force F = pA increases → harder to open",
            ],
            commonError: "Forgetting to multiply pressure by area to get the force, or using freshwater density instead of the given 1025 kg/m³.",
            guideRef: "Pressure",
            difficulty: "challenge",
            hints: [
              "Pressure first: p = ρgh.",
              "Use the given seawater density 1025 kg/m³.",
              "Force on the hatch: F = p × A.",
              "How does p (and so F) change with depth?",
            ],
            strategy: "p = ρgh, then F = pA; link increasing depth to increasing force",
            solutions: [
              {
                label: "Method: p = ρgh then F = pA",
                steps: [
                  "p = 1025 × 10 × 60 = 615 000 Pa",
                  "F = 615 000 × 0.50 = 307 500 N",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq4-08",
            question: "A 0.020 kg bullet is fired horizontally at 250 m/s into a stationary wooden block of mass 0.980 kg resting on a frictionless surface. The bullet embeds in the block. (a) Calculate the momentum of the bullet before impact. (b) Calculate the velocity of the block-and-bullet immediately after. (c) Calculate the kinetic energy before and after, and hence the energy 'lost', commenting on where it goes.",
            marks: 9,
            modelAnswer: "(a) p = mv = 0.020 × 250 = 5.0 kg m/s. (b) Total mass after = 0.020 + 0.980 = 1.00 kg. By conservation of momentum: v = p/m = 5.0/1.00 = 5.0 m/s. (c) KE before = ½ × 0.020 × 250² = ½ × 0.020 × 62 500 = 625 J. KE after = ½ × 1.00 × 5.0² = ½ × 1.00 × 25 = 12.5 J. Energy 'lost' = 625 − 12.5 = 612.5 J. This kinetic energy is transferred mainly to heat (and some sound and deformation) as the bullet embeds in the wood. The collision is highly inelastic.",
            markScheme: [
              "p = 0.020 × 250 = 5.0 kg m/s",
              "Total mass after = 1.00 kg",
              "Conservation: v = 5.0/1.00 = 5.0 m/s",
              "KE_before = ½ × 0.020 × 250² = 625 J",
              "KE_after = ½ × 1.00 × 5.0² = 12.5 J",
              "Energy lost = 625 − 12.5 = 612.5 J",
              "Energy → heat/sound/deformation",
              "Collision described as (highly) inelastic",
            ],
            commonError: "Using the bullet's mass alone in the after-collision KE, or squaring velocity incorrectly (250² = 62 500).",
            guideRef: "Momentum and Its Conservation",
            difficulty: "challenge",
            hints: [
              "Bullet momentum p = mv.",
              "After impact the combined mass is 1.00 kg; use conservation for v.",
              "KE = ½mv² — be careful squaring 250.",
              "Energy lost = KE before − KE after.",
            ],
            strategy: "conservation of momentum for v; then KE before/after to find the energy dissipated",
            solutions: [
              {
                label: "Method: momentum then energy audit",
                steps: [
                  "p_bullet = 0.020 × 250 = 5.0 kg m/s",
                  "v = 5.0/(0.020 + 0.980) = 5.0/1.00 = 5.0 m/s",
                  "KE_before = 0.5 × 0.020 × 250² = 625 J",
                  "KE_after = 0.5 × 1.00 × 5.0² = 12.5 J",
                  "Energy lost = 625 − 12.5 = 612.5 J → heat/sound",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq4-09",
            question: "A 1500 kg lift (elevator) hangs from a cable. (g = 10 N/kg) (a) Calculate the weight of the lift. (b) The lift accelerates upward at 1.5 m/s². Calculate the cable tension. (c) The cable can safely withstand 20 000 N. Calculate the maximum upward acceleration before the cable reaches this limit.",
            marks: 8,
            modelAnswer: "(a) W = mg = 1500 × 10 = 15 000 N. (b) For upward acceleration: T − W = ma → T = W + ma = 15 000 + 1500 × 1.5 = 15 000 + 2250 = 17 250 N. (c) At the limit T = 20 000 N: T − W = ma → 20 000 − 15 000 = 1500 × a → 5000 = 1500a → a = 5000/1500 = 3.33 m/s² (3 s.f.). The maximum safe upward acceleration is about 3.3 m/s².",
            markScheme: [
              "W = 1500 × 10 = 15 000 N",
              "T − W = ma (Newton's second law, upward)",
              "T = 15 000 + 1500 × 1.5 = 17 250 N",
              "At limit: 20 000 − 15 000 = 1500 × a",
              "5000 = 1500a",
              "a = 3.33 m/s²",
              "Stated as maximum safe acceleration ≈ 3.3 m/s²",
            ],
            commonError: "Writing T = ma (forgetting weight) instead of T − W = ma for the accelerating lift.",
            guideRef: "Newton's Laws of Motion",
            difficulty: "challenge",
            hints: [
              "Weight W = mg.",
              "Upward: resultant = T − W = ma.",
              "Rearrange to find T for part (b).",
              "Set T to the maximum and solve for a in part (c).",
            ],
            strategy: "apply T − W = ma; rearrange for T, then for a at the cable limit",
            solutions: [
              {
                label: "Method: Newton's second law on the lift",
                steps: [
                  "W = 1500 × 10 = 15 000 N",
                  "T = W + ma = 15 000 + 1500 × 1.5 = 17 250 N",
                  "Limit: 20 000 − 15 000 = 1500a → a = 5000/1500 = 3.33 m/s²",
                ],
              },
            ],
          },
          {
            id: "phys-forces-bq4-10",
            question: "A 1200 kg car is fitted with a crumple zone. In a crash it hits a wall at 18 m/s and is brought to rest. (a) Calculate the momentum of the car just before impact. (b) Without a crumple zone the car stops in 0.10 s; with a crumple zone it stops in 0.30 s. Calculate the average force on the car in each case. (c) Use your answers to explain how the crumple zone protects the occupants.",
            marks: 9,
            modelAnswer: "(a) p = mv = 1200 × 18 = 21 600 kg m/s. (b) The change in momentum is the same in both cases: Δp = 21 600 kg m/s (brought to rest). Without crumple zone: F = Δp/Δt = 21 600/0.10 = 216 000 N. With crumple zone: F = 21 600/0.30 = 72 000 N. (c) The crumple zone increases the stopping time from 0.10 s to 0.30 s (three times longer). Because F = Δp/Δt for the same change in momentum, the average force is reduced by a factor of three (from 216 000 N to 72 000 N). A smaller force on the car means a smaller force on the occupants, reducing the risk of injury.",
            markScheme: [
              "p = 1200 × 18 = 21 600 kg m/s",
              "Δp the same (= 21 600 kg m/s) in both cases",
              "Without: F = 21 600/0.10 = 216 000 N",
              "With: F = 21 600/0.30 = 72 000 N",
              "Crumple zone increases the stopping time (×3)",
              "F = Δp/Δt → larger Δt gives smaller force",
              "Force reduced (×3) → smaller force on occupants",
              "Reduced injury risk",
            ],
            commonError: "Assuming the crumple zone changes the momentum change — it changes the time, not Δp, so the force falls.",
            guideRef: "Momentum and Its Conservation",
            difficulty: "challenge",
            hints: [
              "Momentum before impact: p = mv.",
              "Δp is the same (car stops) in both scenarios.",
              "F = Δp/Δt for each stopping time.",
              "Compare the forces to explain the protection.",
            ],
            strategy: "p = mv; F = Δp/Δt with the same Δp but different Δt; compare forces",
            solutions: [
              {
                label: "Method: impulse–momentum with two stopping times",
                steps: [
                  "p = 1200 × 18 = 21 600 kg m/s",
                  "Without: F = 21 600/0.10 = 216 000 N",
                  "With: F = 21 600/0.30 = 72 000 N",
                  "Three times longer time → one third the force",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
