import type { Topic } from "../types";

export const physMotion: Topic = {
  id: "phys-motion",
  title: "Motion",
  subject: "physics",
  icon: "🏃",
  blurb: "Distance, displacement, speed, velocity, acceleration and motion graphs — the foundations of mechanics.",
  intro: "Motion is the study of how objects move — how far they travel, how fast, and whether they are speeding up or slowing down. In this topic you will build the language of kinematics (distance, displacement, speed, velocity, acceleration), master distance–time and velocity–time graphs, and apply these ideas to free fall and terminal velocity. These concepts underpin almost every other area of physics.",

  guide: [
    {
      heading: "Distance, Displacement, Speed and Velocity",
      body: `**Distance** is the total length of the path an object travels. It is a scalar — it has magnitude only and is always positive (or zero).

**Displacement** is the straight-line distance from the start to the finish point, measured in a specific direction. It is a vector — it has both magnitude and direction. Displacement can be negative if you choose a positive direction convention.

**Speed** is the rate at which distance is covered. It is a scalar.

**Velocity** is speed in a stated direction. It is a vector. An object moving in a circle at constant speed has a *changing* velocity because its direction is continuously changing.

- Average speed = total distance / total time
- Average velocity = total displacement / total time

Units for both: m/s (or km/h, cm/s, etc.). Always state units in answers.

**Example.** A runner completes a 400 m lap of a circular track in 50 s and returns exactly to the start.
- Average speed = 400 / 50 = 8.0 m/s
- Average velocity = 0 / 50 = 0 m/s (displacement is zero — same start and finish point)`,

      diagrams: [
        {
          caption: "Distance vs. Displacement: a curved path (distance) vs. the straight-line displacement vector",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing a curved path representing distance and a straight arrow representing displacement between start and finish points">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- curved path -->
  <path d="M 40 160 Q 120 60 200 100 Q 260 130 280 60" stroke="#38bdf8" stroke-width="2.5" fill="none" stroke-dasharray="6,3"/>
  <!-- displacement arrow -->
  <line x1="40" y1="160" x2="280" y2="60" stroke="#34d399" stroke-width="2.5"/>
  <polygon points="280,60 268,68 274,55" fill="#34d399"/>
  <!-- labels -->
  <circle cx="40" cy="160" r="5" fill="#fbbf24"/>
  <text x="14" y="178" fill="#b7bce0" font-size="12" font-family="sans-serif">Start</text>
  <circle cx="280" cy="60" r="5" fill="#fb7185"/>
  <text x="284" y="58" fill="#b7bce0" font-size="12" font-family="sans-serif">Finish</text>
  <!-- legend -->
  <line x1="20" y1="20" x2="50" y2="20" stroke="#38bdf8" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="55" y="24" fill="#b7bce0" font-size="11" font-family="sans-serif">Distance (curved path)</text>
  <line x1="20" y1="38" x2="50" y2="38" stroke="#34d399" stroke-width="2"/>
  <polygon points="50,38 43,34 43,42" fill="#34d399"/>
  <text x="55" y="42" fill="#b7bce0" font-size="11" font-family="sans-serif">Displacement (straight-line vector)</text>
</svg>`,
        },
      ],

      keyPoints: [
        "Distance is a scalar (magnitude only); displacement is a vector (magnitude + direction).",
        "Speed is scalar; velocity is vector — velocity = speed in a given direction.",
        "Average speed = total distance / total time (unit: m/s).",
        "A complete lap returns displacement to zero even though distance is the full lap length.",
        "Always state direction when giving a velocity (e.g. 12 m/s north).",
      ],

      discovery: {
        problem: "A car drives 60 km east, then 60 km west, taking 2 hours total. What is its average speed? What is its average velocity? Are they the same?",
        idea: "Average speed = total distance / time = 120 km / 2 h = 60 km/h. Average velocity = displacement / time = 0 / 2 h = 0 km/h. They differ because the car returned to its start — speed cannot be zero, but velocity can be when net displacement is zero.",
      },

      whyItWorks: "Velocity must be a vector because Newton's second law (F = ma) involves forces which are vectors — to be consistent, the quantities derived from position must also carry direction information. Displacement is the vector version of distance, and velocity is displacement per unit time.",

      strategies: ["Draw a number line or sketch and mark start/finish to identify displacement direction.", "Distinguish 'how far travelled' (distance) from 'how far from start' (displacement)."],
    },

    {
      heading: "Acceleration",
      body: `**Acceleration** is the rate of change of velocity.

> a = Δv / t = (v − u) / t

where u = initial velocity, v = final velocity, t = time taken.

Units: m/s² (metres per second squared).

**Deceleration** is simply negative acceleration — the object is slowing down (velocity and acceleration point in opposite directions). Cambridge IGCSE accepts "deceleration = x m/s²" or "acceleration = −x m/s²" as equivalent.

**Worked example 1.** A car accelerates from rest to 20 m/s in 8 s.
- a = (20 − 0) / 8 = **2.5 m/s²**

**Worked example 2.** A train slows from 30 m/s to 10 m/s in 5 s.
- a = (10 − 30) / 5 = −20 / 5 = **−4 m/s²** (deceleration of 4 m/s²)

**Key distinction.** Acceleration is a vector. An object moving at constant speed in a circle is *still accelerating* because direction (and hence velocity) changes continuously.`,

      keyPoints: [
        "a = (v − u) / t, units m/s².",
        "Deceleration is negative acceleration (a < 0 when object slows along positive direction).",
        "Acceleration is a vector — direction matters.",
        "A body can have zero speed momentarily but non-zero acceleration (e.g. a ball at the top of its throw).",
        "Constant velocity means zero acceleration, not zero speed.",
      ],

      discovery: {
        problem: "A cyclist is travelling at 15 m/s. She brakes and stops in 6 s. Before calculating, predict: is the acceleration positive or negative? Why?",
        idea: "Taking the initial direction of motion as positive, final velocity = 0, so Δv = 0 − 15 = −15 m/s. Therefore a = −15 / 6 = −2.5 m/s². Negative — confirming deceleration. The sign tells us the acceleration opposes the motion.",
      },

      whyItWorks: "The definition a = Δv / t is derived from Newton's second law F = ma. If a net force acts in the direction of motion, v increases (positive a); if the net force opposes motion, v decreases (negative a). Deceleration is not a separate physical quantity — it is just a negative acceleration.",

      strategies: ["Always define a positive direction first, then assign signs to u and v.", "Unit analysis: (m/s) / s = m/s² confirms the formula structure."],
    },

    {
      heading: "Distance–Time Graphs",
      body: `A **distance–time graph** (or position–time graph) plots distance from a reference point on the y-axis against time on the x-axis.

**Reading the graph:**
- **Gradient (slope) = speed.** A steeper line means greater speed.
- **Horizontal line** → object is stationary (speed = 0).
- **Straight line with positive gradient** → constant speed.
- **Curved line (getting steeper)** → increasing speed (acceleration).
- **Curved line (getting shallower)** → decreasing speed (deceleration).

**Calculating speed from the graph.**
Speed = rise / run = Δdistance / Δtime. Draw a large right-angled triangle on a straight section and read off the two legs carefully, including units.

For a curved graph, the **instantaneous speed** at a point is found by drawing a **tangent** to the curve at that point and calculating its gradient.`,

      diagrams: [
        {
          caption: "Distance–time graph: stationary (flat), constant speed (straight), accelerating (curved) and decelerating (curved shallowing)",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Distance-time graph showing four regions: stationary flat section, constant speed straight line, accelerating curved section, and decelerating curved section">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- axes -->
  <line x1="40" y1="170" x2="300" y2="170" stroke="#b7bce0" stroke-width="1.5"/>
  <line x1="40" y1="170" x2="40" y2="20" stroke="#b7bce0" stroke-width="1.5"/>
  <!-- axis labels -->
  <text x="150" y="192" fill="#b7bce0" font-size="12" font-family="sans-serif" text-anchor="middle">Time (s)</text>
  <text x="12" y="100" fill="#b7bce0" font-size="12" font-family="sans-serif" text-anchor="middle" transform="rotate(-90,12,100)">Distance (m)</text>
  <!-- Stationary segment: flat from x=40 to x=80, y=150 -->
  <line x1="40" y1="150" x2="80" y2="150" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="55" y="144" fill="#38bdf8" font-size="10" font-family="sans-serif">Stationary</text>
  <!-- Constant speed: straight line from (80,150) to (140,110) -->
  <line x1="80" y1="150" x2="140" y2="110" stroke="#34d399" stroke-width="2.5"/>
  <text x="95" y="125" fill="#34d399" font-size="10" font-family="sans-serif">Constant speed</text>
  <!-- Accelerating: curve from (140,110) to (210,50) -->
  <path d="M 140 110 Q 160 100 210 50" stroke="#fbbf24" stroke-width="2.5" fill="none"/>
  <text x="148" y="80" fill="#fbbf24" font-size="10" font-family="sans-serif">Accelerating</text>
  <!-- Decelerating: curve from (210,50) to (280,35) -->
  <path d="M 210 50 Q 250 42 280 35" stroke="#fb7185" stroke-width="2.5" fill="none"/>
  <text x="218" y="32" fill="#fb7185" font-size="10" font-family="sans-serif">Decelerating</text>
  <!-- origin label -->
  <text x="32" y="184" fill="#b7bce0" font-size="10" font-family="sans-serif">O</text>
</svg>`,
        },
      ],

      keyPoints: [
        "Gradient of a distance–time graph = speed.",
        "Flat (horizontal) section = zero speed (stationary).",
        "Straight line = constant speed; steeper = faster.",
        "Curve getting steeper = acceleration; curve getting shallower = deceleration.",
        "Instantaneous speed at a point on a curve = gradient of the tangent at that point.",
      ],

      thinkDeeper: "A distance–time graph can never have a gradient that is vertical (infinite) or negative — distance cannot decrease (you cannot un-travel a path). However, a displacement–time graph CAN have a negative gradient (object moving back toward the origin) and CAN show displacement returning to zero.",

      strategies: ["Always identify the graph region first (flat / straight / curved increasing / curved decreasing) before calculating.", "For gradient calculations, use the largest triangle you can draw to reduce reading errors."],
    },

    {
      heading: "Speed–Time and Velocity–Time Graphs",
      body: `A **speed–time graph** (or velocity–time graph) plots speed (or velocity) on the y-axis against time on the x-axis.

**Reading the graph:**
- **Gradient = acceleration.** Positive gradient → acceleration; negative gradient → deceleration.
- **Horizontal line** → constant speed (zero acceleration).
- **Area under the graph = distance travelled.** For irregular shapes, break into triangles, rectangles, and trapezoids.

**Calculating area:**
- Rectangle: area = length × height = t × v (units: s × m/s = m ✓)
- Triangle: area = ½ × base × height

**Worked example.** A car accelerates uniformly from 0 to 24 m/s in 6 s, then travels at 24 m/s for 4 s.
- Gradient (acceleration phase) = (24 − 0) / 6 = 4 m/s²
- Distance in acceleration phase = ½ × 6 × 24 = 72 m
- Distance in constant-speed phase = 24 × 4 = 96 m
- Total distance = 72 + 96 = **168 m**`,

      diagrams: [
        {
          caption: "Speed–time graph with area (distance) shaded: triangular acceleration phase and rectangular constant-speed phase",
          svg: `<svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Speed-time graph showing a triangular shaded area during acceleration from 0 to v-max, then a rectangular shaded area during constant speed, illustrating that area equals distance travelled">
  <rect width="320" height="210" fill="#0f172a"/>
  <!-- axes -->
  <line x1="45" y1="175" x2="300" y2="175" stroke="#b7bce0" stroke-width="1.5"/>
  <line x1="45" y1="175" x2="45" y2="25" stroke="#b7bce0" stroke-width="1.5"/>
  <!-- axis labels -->
  <text x="170" y="198" fill="#b7bce0" font-size="12" font-family="sans-serif" text-anchor="middle">Time (s)</text>
  <text x="12" y="105" fill="#b7bce0" font-size="12" font-family="sans-serif" text-anchor="middle" transform="rotate(-90,12,105)">Speed (m/s)</text>
  <!-- Speed axis tick: v_max at y=55 -->
  <line x1="40" y1="55" x2="45" y2="55" stroke="#b7bce0" stroke-width="1"/>
  <text x="8" y="59" fill="#b7bce0" font-size="10" font-family="sans-serif">v</text>
  <!-- Time ticks: t1=135 (end of accel), t2=255 (end of const) -->
  <line x1="135" y1="175" x2="135" y2="180" stroke="#b7bce0" stroke-width="1"/>
  <text x="130" y="192" fill="#b7bce0" font-size="10" font-family="sans-serif">t1</text>
  <line x1="255" y1="175" x2="255" y2="180" stroke="#b7bce0" stroke-width="1"/>
  <text x="250" y="192" fill="#b7bce0" font-size="10" font-family="sans-serif">t2</text>
  <!-- Shaded triangle (acceleration) -->
  <polygon points="45,175 135,55 45,55" fill="#a78bfa" fill-opacity="0.3"/>
  <polygon points="45,175 135,175 135,55" fill="#38bdf8" fill-opacity="0.25"/>
  <!-- Shaded rectangle (constant speed) -->
  <polygon points="135,55 255,55 255,175 135,175" fill="#34d399" fill-opacity="0.2"/>
  <!-- Graph line -->
  <line x1="45" y1="175" x2="135" y2="55" stroke="#38bdf8" stroke-width="2.5"/>
  <line x1="135" y1="55" x2="255" y2="55" stroke="#34d399" stroke-width="2.5"/>
  <!-- Area labels -->
  <text x="62" y="130" fill="#a78bfa" font-size="10" font-family="sans-serif">Area = dist</text>
  <text x="63" y="142" fill="#a78bfa" font-size="10" font-family="sans-serif">(triangle)</text>
  <text x="162" y="120" fill="#34d399" font-size="10" font-family="sans-serif">Area = dist</text>
  <text x="162" y="132" fill="#34d399" font-size="10" font-family="sans-serif">(rectangle)</text>
  <!-- Gradient annotation -->
  <text x="60" y="90" fill="#fbbf24" font-size="10" font-family="sans-serif">gradient = a</text>
  <!-- origin -->
  <text x="30" y="187" fill="#b7bce0" font-size="10" font-family="sans-serif">O</text>
</svg>`,
        },
      ],

      keyPoints: [
        "Gradient of a speed–time (or velocity–time) graph = acceleration.",
        "Horizontal line on a v–t graph = constant speed (a = 0).",
        "Area under a v–t graph = distance travelled.",
        "For acceleration phase (triangle): distance = ½ × base × height.",
        "For constant-speed phase (rectangle): distance = speed × time.",
      ],

      whyItWorks: "The area under a v–t graph equals distance because distance = speed × time (for constant speed). For varying speed, we integrate — the definite integral of velocity with respect to time is displacement. Graphically, this integral is the area between the curve and the time axis. For straight-line segments, elementary geometry gives exact answers without calculus.",

      thinkDeeper: "If a velocity–time graph shows a line that dips below the time axis (negative velocity), the object is moving in the opposite direction. The area below the axis counts as negative displacement — subtract it from the area above to find net displacement, or add absolute values to find total distance.",

      strategies: ["Label every shaded region (triangle or rectangle) separately before summing areas.", "Check units: speed (m/s) × time (s) = metres — confirming area gives distance."],
    },

    {
      heading: "Free Fall and Terminal Velocity",
      body: `**Free fall** occurs when the only force acting on an object is gravity (no air resistance). All objects in free fall near Earth's surface accelerate downward at the same rate regardless of mass.

**Acceleration of free fall g ≈ 9.8 m/s²** (Cambridge IGCSE also accepts 10 m/s² — state which value you use).

**Falling with air resistance — terminal velocity:**

When an object falls through a fluid (e.g. air), two forces act:
- **Weight (W = mg)** — downward, constant.
- **Air resistance / drag (F_d)** — upward, increases with speed.

As the object speeds up, drag increases until drag = weight. At this point the **resultant force is zero**, so acceleration is zero and the object falls at a **constant (terminal) velocity**.

**Qualitative stages (for a skydiver):**
1. Object released from rest → weight > drag → accelerates downward.
2. Speed increases → drag increases → resultant force decreases → acceleration decreases.
3. Drag = weight → resultant force = 0 → **terminal velocity reached** (constant speed).
4. (Parachute opens → drag instantly large → resultant force upward → decelerates to new, lower terminal velocity.)`,

      diagrams: [
        {
          caption: "Forces on a falling object at three stages: accelerating, approaching terminal, and at terminal velocity",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three side-by-side diagrams showing a falling sphere with weight arrow down and drag arrow up. Stage 1: weight much larger than drag (accelerating). Stage 2: weight slightly larger than drag. Stage 3: equal arrows showing terminal velocity.">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Stage 1 -->
  <circle cx="56" cy="90" r="18" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="56" y="94" fill="#eef0ff" font-size="10" font-family="sans-serif" text-anchor="middle">ball</text>
  <!-- Weight arrow down (long) -->
  <line x1="56" y1="108" x2="56" y2="160" stroke="#fb7185" stroke-width="2.5"/>
  <polygon points="56,162 51,152 61,152" fill="#fb7185"/>
  <text x="68" y="140" fill="#fb7185" font-size="10" font-family="sans-serif">W</text>
  <!-- Drag arrow up (short) -->
  <line x1="56" y1="72" x2="56" y2="42" stroke="#34d399" stroke-width="2"/>
  <polygon points="56,40 51,50 61,50" fill="#34d399"/>
  <text x="66" y="60" fill="#34d399" font-size="10" font-family="sans-serif">F_d</text>
  <text x="56" y="185" fill="#b7bce0" font-size="10" font-family="sans-serif" text-anchor="middle">Accelerating</text>
  <!-- Stage 2 -->
  <circle cx="160" cy="90" r="18" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="160" y="94" fill="#eef0ff" font-size="10" font-family="sans-serif" text-anchor="middle">ball</text>
  <line x1="160" y1="108" x2="160" y2="155" stroke="#fb7185" stroke-width="2.5"/>
  <polygon points="160,157 155,147 165,147" fill="#fb7185"/>
  <text x="172" y="135" fill="#fb7185" font-size="10" font-family="sans-serif">W</text>
  <line x1="160" y1="72" x2="160" y2="32" stroke="#34d399" stroke-width="2"/>
  <polygon points="160,30 155,40 165,40" fill="#34d399"/>
  <text x="170" y="52" fill="#34d399" font-size="10" font-family="sans-serif">F_d</text>
  <text x="160" y="185" fill="#b7bce0" font-size="10" font-family="sans-serif" text-anchor="middle">a decreasing</text>
  <!-- Stage 3 -->
  <circle cx="264" cy="90" r="18" fill="#1e3a5f" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="264" y="94" fill="#eef0ff" font-size="10" font-family="sans-serif" text-anchor="middle">ball</text>
  <line x1="264" y1="108" x2="264" y2="150" stroke="#fb7185" stroke-width="2.5"/>
  <polygon points="264,152 259,142 269,142" fill="#fb7185"/>
  <text x="276" y="132" fill="#fb7185" font-size="10" font-family="sans-serif">W</text>
  <line x1="264" y1="72" x2="264" y2="30" stroke="#34d399" stroke-width="2.5"/>
  <polygon points="264,28 259,38 269,38" fill="#34d399"/>
  <text x="274" y="50" fill="#34d399" font-size="10" font-family="sans-serif">F_d</text>
  <text x="264" y="185" fill="#b7bce0" font-size="10" font-family="sans-serif" text-anchor="middle">Terminal v</text>
</svg>`,
        },
      ],

      keyPoints: [
        "Free fall: only gravity acts; acceleration = g ≈ 9.8 m/s² downward.",
        "All objects in free fall accelerate at the same rate regardless of mass (in the absence of air resistance).",
        "Drag increases with speed; terminal velocity is reached when drag = weight (resultant force = 0).",
        "At terminal velocity: constant speed, zero acceleration, but non-zero forces acting.",
        "Opening a parachute dramatically increases drag, causing deceleration to a new, lower terminal velocity.",
      ],

      whyItWorks: "Newton's second law: F_net = ma. In free fall, F_net = W = mg, so a = g regardless of m (the m cancels). When drag grows to equal weight, F_net = W − F_d = 0, so a = 0 and velocity stays constant. This is why heavier skydivers reach a higher terminal velocity — they need a larger drag force (achieved at higher speed) to balance their greater weight.",

      strategies: ["Draw a force diagram at each stage to identify direction and size of resultant force.", "Link acceleration to resultant force, not individual forces."],
    },

    {
      heading: "Solving Motion Problems",
      body: `Most IGCSE motion calculation problems can be solved with three tools:

1. **Definitions:** v = Δs/t (speed), a = Δv/t (acceleration).
2. **Graph reading:** gradient = rate of change; area = accumulated quantity.
3. **Multi-stage reasoning:** treat each segment separately, then combine.

**Strategy checklist:**
- Identify what is given (u, v, a, t, s) and what is asked.
- Choose positive direction; label a diagram.
- Pick the correct formula or graph method.
- Show all working with units at every step.
- Check your answer is physically reasonable (positive distance, plausible speed).

**Common errors:**
- Confusing distance and displacement.
- Forgetting to halve the area of a triangle (using base × height instead of ½ × base × height).
- Using the wrong segment of a graph.
- Dividing by the wrong time interval.

**Challenge example — two-object problem:**
Car A is at rest. Car B passes car A at 20 m/s. Car A then accelerates at 4 m/s². When does A catch B, and how far have they each travelled?

*Let t = time after A starts.* Position of A: s_A = ½ × 4 × t² = 2t². Position of B: s_B = 20t.
Set equal: 2t² = 20t → t(2t − 20) = 0 → t = 0 or t = 10 s.
At t = 10 s: s_A = s_B = 200 m. Car A catches Car B after 10 s and 200 m.`,

      keyPoints: [
        "Label a diagram with u, v, a, t and a positive direction before calculating.",
        "Multi-stage problems: find final velocity of each stage; it becomes the initial velocity of the next.",
        "Two-object problems: set up position equations for each, then solve s_A = s_B.",
        "Always check units and physical plausibility of your answer.",
        "Area under a v–t graph requires correct identification of shape (triangle, rectangle, trapezoid).",
      ],

      strategies: ["Tabulate knowns/unknowns (UVAST table).", "Sketch the v–t graph even if it is not given — it reveals which formula to use.", "For area questions: shade the region, name the shape, calculate."],
    },
  ],

  learn: {
    keyFacts: [
      "Distance is a scalar; displacement is a vector (straight-line distance in a given direction).",
      "Speed is scalar; velocity is vector — velocity = speed in a stated direction.",
      "Average speed = total distance / total time (m/s).",
      "Acceleration a = (v − u) / t, units m/s²; deceleration is negative acceleration.",
      "Gradient of a distance–time graph = speed.",
      "Gradient of a speed–time (velocity–time) graph = acceleration.",
      "Area under a speed–time graph = distance travelled.",
      "Acceleration of free fall g ≈ 9.8 m/s² (or 10 m/s² — state which you use).",
      "Terminal velocity: reached when drag = weight, so resultant force = 0 and acceleration = 0.",
      "At terminal velocity the object moves at constant speed (non-zero) with non-zero forces balancing.",
    ],

    flashcards: [
      { front: "What is displacement?", back: "The straight-line distance from start to finish in a specified direction. It is a vector." },
      { front: "Formula for average speed", back: "average speed = total distance / total time (unit: m/s)" },
      { front: "Formula for acceleration", back: "a = (v − u) / t, where u = initial velocity, v = final velocity, t = time (unit: m/s²)" },
      { front: "What does the gradient of a distance–time graph represent?", back: "The speed of the object at that point." },
      { front: "What does the gradient of a velocity–time graph represent?", back: "The acceleration of the object." },
      { front: "What does the area under a velocity–time graph represent?", back: "The distance (or displacement) travelled." },
      { front: "What is the acceleration of free fall near Earth's surface?", back: "g ≈ 9.8 m/s² (or 10 m/s² — state which value you use)." },
      { front: "What is terminal velocity?", back: "The constant maximum speed reached when drag (air resistance) equals weight, so the resultant force and acceleration are both zero." },
      { front: "How does a curved distance–time graph getting steeper indicate?", back: "Increasing speed (acceleration)." },
      { front: "What is deceleration?", back: "Negative acceleration — the object is slowing down. Acceleration and velocity point in opposite directions." },
      { front: "A flat (horizontal) line on a velocity–time graph means…?", back: "Constant speed (zero acceleration)." },
      { front: "Why does a parachutist slow down after opening a parachute?", back: "The open parachute greatly increases drag, making drag > weight, so resultant force acts upward (against motion), decelerating the parachutist to a new, lower terminal velocity." },
    ],

    keyTerms: [
      { term: "Distance", definition: "The total length of the path travelled by an object; a scalar quantity (magnitude only)." },
      { term: "Displacement", definition: "The straight-line distance from the starting point to the finishing point, measured in a specified direction; a vector quantity." },
      { term: "Speed", definition: "The rate of change of distance with time; a scalar quantity (unit: m/s)." },
      { term: "Velocity", definition: "The rate of change of displacement with time; speed in a specified direction; a vector quantity (unit: m/s)." },
      { term: "Acceleration", definition: "The rate of change of velocity with time (a = Δv / t); a vector quantity (unit: m/s²)." },
      { term: "Deceleration", definition: "Negative acceleration; the magnitude of velocity is decreasing." },
      { term: "Free fall", definition: "Motion under gravity alone with no air resistance; all objects accelerate at g ≈ 9.8 m/s² downward." },
      { term: "Terminal velocity", definition: "The constant velocity reached by a falling object when the upward drag force equals the downward weight, giving zero resultant force and zero acceleration." },
      { term: "Drag (air resistance)", definition: "The resistive force exerted by a fluid on a moving object, opposing its motion and increasing with speed." },
      { term: "Scalar", definition: "A quantity that has magnitude only (e.g. distance, speed, time, mass)." },
      { term: "Vector", definition: "A quantity that has both magnitude and direction (e.g. displacement, velocity, acceleration, force)." },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "phys-motion-mcq-q01",
        question: "A jogger runs 300 m north, then 400 m east. What is the magnitude of her displacement from her starting point?",
        options: ["700 m", "500 m", "300 m", "100 m"],
        answerIndex: 1,
        explanation: "Displacement is the straight-line distance from start to finish. Using Pythagoras: d = √(300² + 400²) = √(90000 + 160000) = √250000 = 500 m. '700 m' is the total distance travelled (a scalar), not displacement.",
        difficulty: "core",
        guideRef: "Distance, Displacement, Speed and Velocity",
        hints: [
          "Displacement is the straight-line distance from start to finish — draw the two legs on a coordinate grid.",
          "The two legs are perpendicular (north and east), so they form a right-angled triangle.",
          "Apply Pythagoras: d = √(a² + b²).",
          "√(300² + 400²) = √250 000 = 500 m.",
        ],
        strategy: "Draw a diagram",
      },
      {
        id: "phys-motion-mcq-q02",
        question: "A car travels 240 m in 12 s. What is its average speed?",
        options: ["2880 m/s", "252 m/s", "20 m/s", "228 m/s"],
        answerIndex: 2,
        explanation: "Average speed = distance / time = 240 / 12 = 20 m/s. The other options result from multiplying or adding instead of dividing.",
        difficulty: "warmup",
        guideRef: "Distance, Displacement, Speed and Velocity",
      },
      {
        id: "phys-motion-mcq-q03",
        question: "A ball is thrown upward and reaches its highest point. At that instant, which statement is correct?",
        options: [
          "Both speed and acceleration are zero.",
          "Speed is zero but acceleration is approximately 9.8 m/s² downward.",
          "Speed is zero and acceleration is zero.",
          "Speed is 9.8 m/s upward and acceleration is zero.",
        ],
        answerIndex: 1,
        explanation: "At the highest point the ball momentarily stops so speed = 0. However, gravity still acts; the ball is still in a gravitational field, so acceleration = g ≈ 9.8 m/s² downward. Acceleration never becomes zero unless there is no net force.",
        difficulty: "core",
        guideRef: "Acceleration",
        hints: [
          "Speed is zero at the top — correct. But what about acceleration?",
          "Is gravity 'switched off' at the highest point?",
          "The only force acting (ignoring air resistance) is weight = mg, so F_net = mg ≠ 0.",
        ],
        strategy: "Force diagram",
      },
      {
        id: "phys-motion-mcq-q04",
        question: "On a speed–time graph, which feature gives the distance travelled?",
        options: [
          "The gradient of the line",
          "The y-intercept",
          "The area between the line and the time axis",
          "The x-intercept",
        ],
        answerIndex: 2,
        explanation: "Distance = speed × time. On a speed–time graph, this is represented geometrically as the area between the graph line and the time axis. The gradient gives acceleration.",
        difficulty: "warmup",
        guideRef: "Speed–Time and Velocity–Time Graphs",
      },
      {
        id: "phys-motion-mcq-q05",
        question: "A vehicle accelerates uniformly from 10 m/s to 34 m/s in 8 s. What is its acceleration?",
        options: ["4.25 m/s²", "3 m/s²", "5.5 m/s²", "2.4 m/s²"],
        answerIndex: 1,
        explanation: "a = (v − u) / t = (34 − 10) / 8 = 24 / 8 = 3 m/s². Note: 4.25 = 34/8 (forgetting to subtract u), a common error.",
        difficulty: "core",
        guideRef: "Acceleration",
        hints: [
          "Write down u, v, and t first.",
          "a = (v − u) / t — subtract u from v before dividing.",
          "Δv = 34 − 10 = 24 m/s; t = 8 s.",
        ],
        strategy: "UVAST table",
      },
      {
        id: "phys-motion-mcq-q06",
        question: "A skydiver reaches terminal velocity. Which statement correctly describes the forces on her at this moment?",
        options: [
          "Weight is greater than drag; she is still accelerating.",
          "Drag is greater than weight; she is decelerating.",
          "Weight equals drag; she moves at constant speed.",
          "No forces act on her; she is weightless.",
        ],
        answerIndex: 2,
        explanation: "At terminal velocity the resultant force is zero: weight = drag. By Newton's first law, she continues at constant (terminal) velocity. She is not weightless — weight still acts, but it is exactly balanced by drag.",
        difficulty: "core",
        guideRef: "Free Fall and Terminal Velocity",
        hints: [
          "Terminal velocity means constant speed — what does that say about acceleration?",
          "Zero acceleration → zero resultant force (Newton's first/second law).",
          "Zero resultant force → the two forces must be equal in magnitude.",
        ],
      },
    ],

    qa: [
      {
        id: "phys-motion-qa-q01",
        question: "A cyclist starts from rest and accelerates uniformly to 12 m/s in 6 s. She then travels at constant speed for 10 s.\n(a) Calculate the acceleration during the first 6 s. [2]\n(b) Calculate the total distance travelled. [3]",
        marks: 5,
        modelAnswer: "(a) a = (v − u) / t = (12 − 0) / 6 = 2.0 m/s²\n\n(b) Distance in acceleration phase = area of triangle = ½ × 6 × 12 = 36 m\nDistance in constant-speed phase = 12 × 10 = 120 m\nTotal distance = 36 + 120 = 156 m",
        markScheme: [
          "a = (v − u) / t or correct substitution (1 mark)",
          "a = 2.0 m/s² with unit (1 mark)",
          "Distance (accel phase) = ½ × 6 × 12 = 36 m / area of triangle method (1 mark)",
          "Distance (const. phase) = 12 × 10 = 120 m (1 mark)",
          "Total = 156 m with unit (1 mark)",
        ],
        commonError: "Using base × height (72 m) instead of ½ × base × height for the triangular area, doubling the acceleration-phase distance.",
        guideRef: "Speed–Time and Velocity–Time Graphs",
        difficulty: "core",
        hints: [
          "Sketch a velocity–time graph with the two phases labelled.",
          "For acceleration: a = Δv / t.",
          "For distance: each phase is a distinct region on the v–t graph — identify the shape.",
          "Triangle area = ½ × base × height; rectangle area = base × height.",
        ],
        strategy: "Sketch v–t graph, then calculate areas",
        solutions: [
          {
            label: "Method 1: Graph areas",
            steps: [
              "a = (12 − 0) / 6 = 2.0 m/s²",
              "Phase 1 is a triangle (0 to 6 s, speed 0 to 12 m/s): area = ½ × 6 × 12 = 36 m",
              "Phase 2 is a rectangle (6 to 16 s, speed 12 m/s): area = 12 × 10 = 120 m",
              "Total distance = 36 + 120 = 156 m",
            ],
          },
          {
            label: "Method 2: Equation of motion for phase 1",
            steps: [
              "a = 2.0 m/s² (as before)",
              "Phase 1: s = ut + ½at² = 0 × 6 + ½ × 2 × 36 = 36 m",
              "Phase 2: s = 12 × 10 = 120 m",
              "Total = 156 m",
            ],
          },
        ],
      },
      {
        id: "phys-motion-qa-q02",
        question: "Describe, in terms of forces, the motion of a raindrop falling from a cloud to the ground. Include the terms weight, drag, resultant force, acceleration, and terminal velocity. [5]",
        marks: 5,
        modelAnswer: "Initially the raindrop accelerates downward because its weight (downward) is greater than the drag force (upward), so there is a net downward resultant force. As the raindrop's speed increases, the drag force increases. The resultant force decreases, so the acceleration decreases. Eventually the drag force equals the weight; the resultant force becomes zero. The raindrop then falls at a constant speed called the terminal velocity — it no longer accelerates.",
        markScheme: [
          "Initially weight > drag / resultant force is downward (1 mark)",
          "Raindrop accelerates downward (1 mark)",
          "As speed increases, drag increases (1 mark)",
          "When drag = weight, resultant force = 0 (1 mark)",
          "Constant speed reached = terminal velocity (1 mark)",
        ],
        commonError: "Stating that 'forces balance so the drop stops' — it stops accelerating, not stops moving; it continues at terminal velocity.",
        guideRef: "Free Fall and Terminal Velocity",
        difficulty: "core",
        hints: [
          "Start at release: what is the speed, and which force is larger?",
          "As speed builds up, what happens to drag?",
          "What condition must be met for acceleration to reach zero?",
          "Zero acceleration does not mean zero speed.",
        ],
        strategy: "Stage-by-stage force diagram",
      },
      {
        id: "phys-motion-qa-q03",
        question: "The velocity–time graph for an object shows a straight line from (0, 0) to (5 s, 20 m/s), then a straight line from (5 s, 20 m/s) to (9 s, 0 m/s).\n(a) Calculate the acceleration in each phase. [4]\n(b) Calculate the total distance travelled over 9 s. [3]",
        marks: 7,
        modelAnswer: "(a) Phase 1 (0–5 s): a = (20 − 0) / 5 = 4.0 m/s²\nPhase 2 (5–9 s): a = (0 − 20) / 4 = −5.0 m/s² (deceleration of 5.0 m/s²)\n\n(b) Distance phase 1 = ½ × 5 × 20 = 50 m\nDistance phase 2 = ½ × 4 × 20 = 40 m\nTotal distance = 50 + 40 = 90 m",
        markScheme: [
          "Phase 1: a = (20 − 0) / 5 (1 mark)",
          "a = 4.0 m/s² (1 mark)",
          "Phase 2: a = (0 − 20) / 4 (1 mark)",
          "a = −5.0 m/s² / deceleration = 5.0 m/s² (1 mark)",
          "Phase 1 distance = ½ × 5 × 20 = 50 m (1 mark)",
          "Phase 2 distance = ½ × 4 × 20 = 40 m (1 mark)",
          "Total = 90 m (1 mark)",
        ],
        commonError: "Using the time from 0 to 9 (total 9 s) as the base of one big triangle, giving ½ × 9 × 20 = 90 m — coincidentally correct here but wrong method; would fail if the peak speed occurred at a different time.",
        guideRef: "Speed–Time and Velocity–Time Graphs",
        difficulty: "core",
        hints: [
          "Read the coordinates at the key points: (0,0), (5,20), (9,0).",
          "a = Δv / Δt for each segment — be careful which Δt to use for each phase.",
          "Each segment is a triangle — use area = ½ × base × height.",
          "Total distance = sum of both triangular areas.",
        ],
        strategy: "Segment-by-segment calculation",
        solutions: [
          {
            label: "Method 1: Gradient and area",
            steps: [
              "Phase 1: a = (20 − 0)/(5 − 0) = 4.0 m/s²",
              "Phase 2: a = (0 − 20)/(9 − 5) = −20/4 = −5.0 m/s²",
              "Distance 1 = ½ × 5 × 20 = 50 m",
              "Distance 2 = ½ × 4 × 20 = 40 m",
              "Total = 90 m",
            ],
          },
        ],
      },
    ],
  },


  questionBank: {
    mcqPapers: [
      {
        id: "phys-motion-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Ten multiple-choice questions covering distance/displacement, speed calculations, acceleration, and graph interpretation.",
        questions: [
          {
            id: "phys-motion-bm1-01",
            question: "A jogger runs 600 m north, then 600 m south back to the start. Which statement is correct?",
            options: [
              "Distance = 0 m, displacement = 1200 m",
              "Distance = 1200 m, displacement = 0 m",
              "Distance = 600 m, displacement = 600 m",
              "Distance = 0 m, displacement = 0 m",
            ],
            answerIndex: 1,
            explanation: "Distance is the total path length: 600 + 600 = 1200 m. Displacement is the straight-line distance from start to finish — the jogger ends where they started, so displacement = 0 m.",
            difficulty: "warmup",
            guideRef: "Distance, Displacement, Speed and Velocity",
          },
          {
            id: "phys-motion-bm1-02",
            question: "A car travels 240 m in 12 s at constant speed. What is its speed?",
            options: ["20 m/s", "2880 m/s", "0.05 m/s", "12 m/s"],
            answerIndex: 0,
            explanation: "Speed = distance / time = 240 / 12 = 20 m/s.",
            difficulty: "warmup",
            guideRef: "Distance, Displacement, Speed and Velocity",
          },
          {
            id: "phys-motion-bm1-03",
            question: "Which formula correctly defines acceleration?",
            options: ["a = v x t", "a = (v + u) / t", "a = (v - u) / t", "a = s / t"],
            answerIndex: 2,
            explanation: "Acceleration = change in velocity / time = (v - u) / t, where v is final velocity and u is initial velocity.",
            difficulty: "warmup",
            guideRef: "Acceleration",
          },
          {
            id: "phys-motion-bm1-04",
            question: "On a distance-time graph, a horizontal line represents an object that is:",
            options: ["Moving at constant speed", "Accelerating", "Stationary", "Decelerating"],
            answerIndex: 2,
            explanation: "A horizontal line means distance is not changing with time — the object is stationary. Speed = gradient = 0.",
            difficulty: "core",
            guideRef: "Distance–Time Graphs",
            hints: [
              "Gradient of a d-t graph = speed.",
              "What gradient does a horizontal line have?",
              "Zero gradient means zero speed.",
            ],
          },
          {
            id: "phys-motion-bm1-05",
            question: "A swimmer completes 4 lengths of a 50 m pool in 200 s. What is her average speed?",
            options: ["1.0 m/s", "0.5 m/s", "0.25 m/s", "8.0 m/s"],
            answerIndex: 0,
            explanation: "Total distance = 4 x 50 = 200 m. Average speed = 200 / 200 = 1.0 m/s.",
            difficulty: "core",
            guideRef: "Distance, Displacement, Speed and Velocity",
            hints: [
              "Total distance = number of lengths x pool length.",
              "Average speed = total distance / total time.",
              "200 / 200 = 1.0 m/s.",
            ],
          },
          {
            id: "phys-motion-bm1-06",
            question: "A bus slows from 18 m/s to 6 m/s in 4 s. What is the magnitude of its deceleration?",
            options: ["3 m/s²", "6 m/s²", "4.5 m/s²", "12 m/s²"],
            answerIndex: 0,
            explanation: "a = (v - u) / t = (6 - 18) / 4 = -12 / 4 = -3 m/s². Magnitude of deceleration = 3 m/s².",
            difficulty: "core",
            guideRef: "Acceleration",
            hints: [
              "a = (v - u) / t where v = 6 m/s and u = 18 m/s.",
              "The change in velocity is 6 - 18 = -12 m/s.",
              "Divide by time: -12 / 4 = -3 m/s². Deceleration = 3 m/s².",
            ],
          },
          {
            id: "phys-motion-bm1-07",
            question: "A vehicle's v-t graph shows a straight line from (0 s, 4 m/s) to (8 s, 4 m/s). What are the acceleration and distance travelled?",
            options: [
              "a = 0.5 m/s², s = 32 m",
              "a = 0 m/s², s = 32 m",
              "a = 0 m/s², s = 16 m",
              "a = 4 m/s², s = 16 m",
            ],
            answerIndex: 1,
            explanation: "A horizontal line on a v-t graph means constant velocity, so a = 0. Distance = area of rectangle = 4 x 8 = 32 m.",
            difficulty: "core",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            hints: [
              "A flat (horizontal) line on a v-t graph indicates constant velocity.",
              "Acceleration = gradient of v-t graph = 0.",
              "Distance = area = width x height = 8 x 4 = 32 m.",
            ],
          },
          {
            id: "phys-motion-bm1-08",
            question: "An object is in free fall. Which statement about it is correct (ignoring air resistance)?",
            options: [
              "Its speed is constant at g.",
              "Its acceleration decreases as it falls.",
              "Its acceleration is constant at g downward.",
              "Its speed decreases as it falls.",
            ],
            answerIndex: 2,
            explanation: "In free fall with no air resistance, the only force is gravity. Acceleration = g = constant (9.8 m/s² downward). Speed increases uniformly, but acceleration is constant.",
            difficulty: "core",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "Free fall = only gravitational force acts.",
              "F = ma gives a = F/m = mg/m = g (constant).",
              "Since air resistance is ignored, no force varies, so a stays constant.",
            ],
          },
          {
            id: "phys-motion-bm1-09",
            question: "A train accelerates uniformly from rest and covers 400 m in 20 s. What is its acceleration?",
            options: ["20 m/s²", "2 m/s²", "10 m/s²", "40 m/s²"],
            answerIndex: 1,
            explanation: "Using s = ut + (1/2)at² with u = 0: 400 = 0 + (1/2) x a x 400, so a = 400/200 = 2 m/s².",
            difficulty: "challenge",
            guideRef: "Solving Motion Problems",
            hints: [
              "u = 0 (starts from rest), s = 400 m, t = 20 s.",
              "Use s = ut + (1/2)at².",
              "0 + (1/2) x a x 20² = 400, so 200a = 400.",
              "a = 400/200 = 2 m/s².",
            ],
            strategy: "Identify known UVAST variables; choose the equation with no unknowns other than the target",
          },
          {
            id: "phys-motion-bm1-10",
            question: "A car travels 200 m at 10 m/s, then 200 m at 40 m/s. What is the average speed for the whole 400 m journey?",
            options: ["25.0 m/s", "16.0 m/s", "20.0 m/s", "30.0 m/s"],
            answerIndex: 1,
            explanation: "Time 1 = 200/10 = 20 s. Time 2 = 200/40 = 5 s. Total time = 25 s. Average speed = 400/25 = 16.0 m/s. Trap: (10 + 40)/2 = 25 m/s is wrong — that only works for equal time intervals.",
            difficulty: "challenge",
            guideRef: "Solving Motion Problems",
            hints: [
              "Find time for each segment: t = d/v.",
              "Time 1: 200/10 = 20 s; Time 2: 200/40 = 5 s.",
              "Total distance = 400 m; total time = 25 s.",
              "Average speed = 400/25 = 16.0 m/s.",
            ],
            strategy: "Calculate time for each leg separately; avoid the equal-time-average trap",
          },
        ],
      },
      {
        id: "phys-motion-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Ten multiple-choice questions on vectors, v-t graphs, free fall, and multi-phase problems.",
        questions: [
          {
            id: "phys-motion-bm2-01",
            question: "Which of the following pairs are BOTH vector quantities?",
            options: [
              "Distance and speed",
              "Velocity and displacement",
              "Speed and time",
              "Distance and acceleration",
            ],
            answerIndex: 1,
            explanation: "Vectors have both magnitude and direction. Velocity and displacement are both vectors. Distance, speed, and time are scalars. In option D, distance is scalar so that pair is mixed.",
            difficulty: "warmup",
            guideRef: "Distance, Displacement, Speed and Velocity",
          },
          {
            id: "phys-motion-bm2-02",
            question: "What does the gradient of a velocity-time graph represent?",
            options: ["Distance", "Speed", "Acceleration", "Displacement"],
            answerIndex: 2,
            explanation: "Gradient = change in velocity / change in time = acceleration. The area under the v-t graph gives distance.",
            difficulty: "warmup",
            guideRef: "Speed–Time and Velocity–Time Graphs",
          },
          {
            id: "phys-motion-bm2-03",
            question: "A vehicle travels for 10 s at a constant 12 m/s. What is the area under its v-t graph?",
            options: ["22 m", "1.2 m", "120 m", "60 m"],
            answerIndex: 2,
            explanation: "Area = rectangle = width x height = 10 x 12 = 120 m. This equals the distance travelled.",
            difficulty: "warmup",
            guideRef: "Speed–Time and Velocity–Time Graphs",
          },
          {
            id: "phys-motion-bm2-04",
            question: "A d-t graph shows: 0 to 5 s — a straight line from 0 to 30 m; 5 to 10 s — horizontal at 30 m. What is the speed in the first phase?",
            options: ["6 m/s", "3 m/s", "30 m/s", "150 m/s"],
            answerIndex: 0,
            explanation: "Speed = gradient = rise/run = (30 - 0)/(5 - 0) = 30/5 = 6 m/s.",
            difficulty: "core",
            guideRef: "Distance–Time Graphs",
            hints: [
              "Speed = gradient of d-t graph.",
              "Gradient = change in distance / change in time.",
              "30 m in 5 s: speed = 30/5 = 6 m/s.",
            ],
          },
          {
            id: "phys-motion-bm2-05",
            question: "A sprinter accelerates from rest to 9 m/s in 3 s. What is their acceleration?",
            options: ["27 m/s²", "0.33 m/s²", "3 m/s²", "6 m/s²"],
            answerIndex: 2,
            explanation: "a = (v - u) / t = (9 - 0) / 3 = 3 m/s².",
            difficulty: "core",
            guideRef: "Acceleration",
            hints: [
              "u = 0 (from rest), v = 9 m/s, t = 3 s.",
              "a = (v - u) / t.",
              "a = (9 - 0) / 3 = 3 m/s².",
            ],
          },
          {
            id: "phys-motion-bm2-06",
            question: "A ball is dropped from rest and reaches terminal velocity after some time. What is true at the moment terminal velocity is reached?",
            options: [
              "The weight is zero.",
              "The drag force equals the weight.",
              "The ball is still accelerating downward.",
              "The drag force is zero.",
            ],
            answerIndex: 1,
            explanation: "Terminal velocity is reached when drag force equals weight. The resultant force is zero, so acceleration is zero and velocity is constant.",
            difficulty: "core",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "Terminal velocity means zero acceleration.",
              "Newton's second law: F_net = ma = 0 at terminal velocity.",
              "F_net = weight - drag = 0, so drag = weight.",
            ],
          },
          {
            id: "phys-motion-bm2-07",
            question: "On a v-t graph, a straight line slopes upward from left to right. This means the object is:",
            options: [
              "Decelerating at constant rate",
              "Moving at constant velocity",
              "Accelerating at constant rate",
              "Stationary",
            ],
            answerIndex: 2,
            explanation: "A straight line with positive gradient on a v-t graph means constant (uniform) positive acceleration — velocity is increasing at a steady rate.",
            difficulty: "core",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            hints: [
              "Gradient of v-t graph = acceleration.",
              "A straight (not curved) line means constant gradient = constant acceleration.",
              "Upward slope = positive acceleration = speeding up.",
            ],
          },
          {
            id: "phys-motion-bm2-08",
            question: "A bird flies 30 m east, then 40 m north. What is its displacement from the start?",
            options: ["70 m", "50 m at an angle", "10 m", "50 m north-east exactly"],
            answerIndex: 1,
            explanation: "Displacement uses the straight-line distance from start to finish. Using Pythagoras: d = sqrt(30² + 40²) = sqrt(900 + 1600) = sqrt(2500) = 50 m. The direction is north of east, so 50 m at an angle is correct.",
            difficulty: "core",
            guideRef: "Distance, Displacement, Speed and Velocity",
            hints: [
              "Displacement is the straight-line distance from start to finish, with direction.",
              "Use Pythagoras theorem: d = sqrt(30² + 40²).",
              "sqrt(900 + 1600) = sqrt(2500) = 50 m at an angle NE.",
            ],
          },
          {
            id: "phys-motion-bm2-09",
            question: "A rocket starting from rest accelerates at 20 m/s² for 5 s, then coasts at constant velocity for another 10 s. What is the total distance covered?",
            options: ["250 m", "1250 m", "1500 m", "2000 m"],
            answerIndex: 1,
            explanation: "Phase 1: s1 = (1/2) x 20 x 5² = 250 m; velocity after phase 1: v = 0 + 20 x 5 = 100 m/s. Phase 2: s2 = 100 x 10 = 1000 m. Total = 250 + 1000 = 1250 m.",
            difficulty: "challenge",
            guideRef: "Solving Motion Problems",
            hints: [
              "Phase 1 (acceleration): u = 0, a = 20, t = 5. Use s = (1/2)at².",
              "(1/2) x 20 x 25 = 250 m. Final velocity = at = 100 m/s.",
              "Phase 2 (constant velocity): s = 100 x 10 = 1000 m.",
              "Total = 250 + 1000 = 1250 m.",
            ],
            strategy: "Break multi-phase problem into separate stages; carry the velocity forward",
          },
          {
            id: "phys-motion-bm2-10",
            question: "A ball is dropped from rest at height h. Using g = 10 m/s², what height gives a final speed of 20 m/s just before impact?",
            options: ["2 m", "10 m", "20 m", "40 m"],
            answerIndex: 2,
            explanation: "v² = u² + 2as gives 20² = 0 + 2 x 10 x h, so 400 = 20h, so h = 20 m.",
            difficulty: "challenge",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "u = 0 (dropped), v = 20 m/s, a = g = 10 m/s².",
              "Use v² = u² + 2as (here s = h).",
              "400 = 20h, so h = 20 m.",
            ],
            strategy: "Use v² = u² + 2as; identify target variable",
          },
        ],
      },
      {
        id: "phys-motion-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Ten multiple-choice questions on units, graph shapes, deceleration, and multi-shape v-t areas.",
        questions: [
          {
            id: "phys-motion-bm3-01",
            question: "Speed is measured in which SI unit?",
            options: ["m/s²", "m/s", "kg·m/s", "m²/s"],
            answerIndex: 1,
            explanation: "Speed = distance / time, so its SI unit is metres per second (m/s). m/s² is the unit of acceleration.",
            difficulty: "warmup",
            guideRef: "Distance, Displacement, Speed and Velocity",
          },
          {
            id: "phys-motion-bm3-02",
            question: "Two objects are shown on the same d-t graph. Object A has a steeper line than object B. Which is faster?",
            options: ["B", "A", "Both the same speed", "Cannot tell"],
            answerIndex: 1,
            explanation: "Gradient of a d-t graph = speed. A steeper line means a greater gradient and therefore a higher speed. A is faster.",
            difficulty: "warmup",
            guideRef: "Distance–Time Graphs",
          },
          {
            id: "phys-motion-bm3-03",
            question: "Negative acceleration (when motion is in the positive direction) means the object is:",
            options: ["Moving backwards", "Speeding up", "Slowing down", "Stationary"],
            answerIndex: 2,
            explanation: "If an object moves in the positive direction (positive velocity) and has a negative acceleration, the speed is decreasing — it is slowing down (decelerating).",
            difficulty: "warmup",
            guideRef: "Acceleration",
          },
          {
            id: "phys-motion-bm3-04",
            question: "A v-t graph shows a straight line from (0 s, 0 m/s) to (6 s, 18 m/s). What are the acceleration and distance?",
            options: [
              "a = 3 m/s², s = 108 m",
              "a = 3 m/s², s = 54 m",
              "a = 18 m/s², s = 54 m",
              "a = 3 m/s², s = 36 m",
            ],
            answerIndex: 1,
            explanation: "Acceleration = gradient = (18 - 0)/(6 - 0) = 3 m/s². Distance = area of triangle = (1/2) x 6 x 18 = 54 m.",
            difficulty: "core",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            hints: [
              "Gradient of v-t graph = acceleration = rise/run.",
              "(18 - 0)/(6 - 0) = 3 m/s².",
              "Shape is a triangle (starts at 0): area = (1/2) x base x height = (1/2) x 6 x 18 = 54 m.",
            ],
          },
          {
            id: "phys-motion-bm3-05",
            question: "A d-t graph shows a straight line from (0 s, 0 m) to (10 s, 60 m), then a curve that gets gradually less steep up to (20 s, 90 m). What best describes the motion from 10 s to 20 s?",
            options: ["Constant speed", "Uniform acceleration", "Decelerating", "Accelerating from rest"],
            answerIndex: 2,
            explanation: "The curve gets less steep, meaning the gradient (speed) is decreasing. The object is decelerating between 10 s and 20 s.",
            difficulty: "core",
            guideRef: "Distance–Time Graphs",
            hints: [
              "Gradient of d-t graph = speed.",
              "If gradient decreases, speed decreases.",
              "Decreasing speed = decelerating.",
            ],
          },
          {
            id: "phys-motion-bm3-06",
            question: "A ball is thrown upward with speed 15 m/s. Using g = 10 m/s², how long does it take to reach maximum height?",
            options: ["1.5 s", "150 s", "0.67 s", "3.0 s"],
            answerIndex: 0,
            explanation: "At maximum height, v = 0. Taking upward as positive: u = 15 m/s, a = -10 m/s². t = (v - u)/a = (0 - 15)/(-10) = 1.5 s.",
            difficulty: "core",
            guideRef: "Acceleration",
            hints: [
              "At max height, v = 0.",
              "Take upward as positive: u = +15 m/s, a = -10 m/s².",
              "t = (v - u)/a = (0 - 15)/(-10) = 1.5 s.",
            ],
          },
          {
            id: "phys-motion-bm3-07",
            question: "Which of the following describes how the drag force on a falling object changes as speed increases?",
            options: [
              "Drag decreases as speed increases.",
              "Drag stays constant regardless of speed.",
              "Drag increases as speed increases.",
              "Drag first increases then becomes zero.",
            ],
            answerIndex: 2,
            explanation: "Drag (air resistance) increases with speed. This is why falling objects reach terminal velocity — as drag increases, it eventually equals weight, stopping acceleration.",
            difficulty: "core",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "Think about how much harder it is to push through air at higher speed.",
              "Drag force is proportional to speed (or speed squared for fast motion).",
              "Increasing drag reduces net force and hence acceleration.",
            ],
          },
          {
            id: "phys-motion-bm3-08",
            question: "An athlete runs 800 m around a circular track and returns to the start in 160 s. What are their average speed and average velocity?",
            options: [
              "Speed = 5 m/s, velocity = 5 m/s",
              "Speed = 5 m/s, velocity = 0 m/s",
              "Speed = 0 m/s, velocity = 5 m/s",
              "Speed = 160 m/s, velocity = 0 m/s",
            ],
            answerIndex: 1,
            explanation: "Average speed = total distance / total time = 800/160 = 5 m/s. Average velocity = total displacement / total time = 0/160 = 0 m/s (returns to start, so displacement = 0).",
            difficulty: "core",
            guideRef: "Distance, Displacement, Speed and Velocity",
            hints: [
              "Average speed uses total distance travelled.",
              "Average velocity uses displacement (start to finish, straight line).",
              "Returns to start: displacement = 0, so average velocity = 0.",
            ],
          },
          {
            id: "phys-motion-bm3-09",
            question: "A v-t graph shows: 0-3 s: velocity increases from 0 to 12 m/s; 3-7 s: velocity constant at 12 m/s; 7-10 s: velocity decreases from 12 m/s to 0. What is the total distance?",
            options: ["120 m", "78 m", "96 m", "84 m"],
            answerIndex: 3,
            explanation: "Triangle (0-3 s): (1/2) x 3 x 12 = 18 m. Rectangle (3-7 s): 4 x 12 = 48 m. Triangle (7-10 s): (1/2) x 3 x 12 = 18 m. Total = 18 + 48 + 18 = 84 m.",
            difficulty: "challenge",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            hints: [
              "Split the journey into three sections.",
              "Triangles: area = (1/2) x base x height. Rectangle: area = base x height.",
              "(1/2)(3)(12) + (4)(12) + (1/2)(3)(12) = 18 + 48 + 18.",
              "Total = 84 m.",
            ],
            strategy: "Split v-t graph into triangles and rectangles; sum the areas",
          },
          {
            id: "phys-motion-bm3-10",
            question: "Using v² = u² + 2as: a ball rolls from rest and reaches 6 m/s after rolling 9 m. What is its acceleration?",
            options: ["4 m/s²", "1 m/s²", "3 m/s²", "2 m/s²"],
            answerIndex: 3,
            explanation: "v² = u² + 2as gives 36 = 0 + 2 x a x 9, so 36 = 18a, so a = 2 m/s².",
            difficulty: "challenge",
            guideRef: "Solving Motion Problems",
            hints: [
              "u = 0 (starts from rest), v = 6 m/s, s = 9 m.",
              "v² = u² + 2as gives 6² = 0 + 2 x a x 9.",
              "36 = 18a, so a = 2 m/s².",
            ],
            strategy: "Rearrange v² = u² + 2as for the unknown acceleration",
          },
        ],
      },
      {
        id: "phys-motion-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Ten multiple-choice questions on distance calculations, stopping distance, drag forces, and projectile motion.",
        questions: [
          {
            id: "phys-motion-bm4-01",
            question: "A car travels at 30 m/s for 5 s. How far does it travel?",
            options: ["6 m", "35 m", "150 m", "25 m"],
            answerIndex: 2,
            explanation: "Distance = speed x time = 30 x 5 = 150 m.",
            difficulty: "warmup",
            guideRef: "Distance, Displacement, Speed and Velocity",
          },
          {
            id: "phys-motion-bm4-02",
            question: "An object has a constant velocity of 8 m/s. What is its acceleration?",
            options: ["8 m/s²", "0 m/s²", "1 m/s²", "Cannot be determined"],
            answerIndex: 1,
            explanation: "Constant velocity means no change in velocity. a = (v - u)/t = 0/t = 0 m/s².",
            difficulty: "warmup",
            guideRef: "Acceleration",
          },
          {
            id: "phys-motion-bm4-03",
            question: "What does the area under a velocity-time graph represent?",
            options: ["Acceleration", "Distance", "Speed", "Time"],
            answerIndex: 1,
            explanation: "Area under a v-t graph = distance travelled. Gradient of a v-t graph = acceleration.",
            difficulty: "warmup",
            guideRef: "Speed–Time and Velocity–Time Graphs",
          },
          {
            id: "phys-motion-bm4-04",
            question: "A d-t graph shows object X with a straight line of gradient 5 m/s and object Y with a straight line of gradient 2 m/s. After 8 s, how much further ahead is X than Y?",
            options: ["3 m", "56 m", "24 m", "40 m"],
            answerIndex: 2,
            explanation: "Distance X = 5 x 8 = 40 m. Distance Y = 2 x 8 = 16 m. Difference = 40 - 16 = 24 m.",
            difficulty: "core",
            guideRef: "Distance–Time Graphs",
            hints: [
              "Distance = speed x time for constant speed.",
              "X travels: 5 x 8 = 40 m; Y travels: 2 x 8 = 16 m.",
              "Difference = 40 - 16 = 24 m.",
            ],
          },
          {
            id: "phys-motion-bm4-05",
            question: "A vehicle accelerates uniformly from 4 m/s to 28 m/s. The acceleration is 6 m/s². How far does it travel during this acceleration?",
            options: ["32 m", "64 m", "54 m", "52 m"],
            answerIndex: 1,
            explanation: "Using v² = u² + 2as: 28² = 4² + 2 x 6 x s gives 784 = 16 + 12s, so 12s = 768, so s = 64 m. Check: t = (28-4)/6 = 4 s; average speed = (4+28)/2 = 16 m/s; s = 16 x 4 = 64 m.",
            difficulty: "core",
            guideRef: "Acceleration",
            hints: [
              "Use v² = u² + 2as: 28² = 4² + 2 x 6 x s.",
              "784 - 16 = 12s, so s = 768/12.",
              "Or find t first: t = (v-u)/a = 4 s, then s = average speed x t.",
            ],
          },
          {
            id: "phys-motion-bm4-06",
            question: "A skydiver reaches terminal velocity at 50 m/s. Her mass is 60 kg (g = 10 m/s²). What is the drag force at terminal velocity?",
            options: ["300 N downward", "600 N upward", "600 N downward", "60 N upward"],
            answerIndex: 1,
            explanation: "At terminal velocity, drag = weight. Weight = mg = 60 x 10 = 600 N. The drag force is 600 N acting upward (opposing motion).",
            difficulty: "core",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "Terminal velocity: drag = weight (net force = 0).",
              "Weight = mg = 60 x 10 = 600 N.",
              "Drag acts upward (opposing downward motion) = 600 N upward.",
            ],
          },
          {
            id: "phys-motion-bm4-07",
            question: "A v-t graph for a braking car shows a straight line from (0 s, 30 m/s) to (6 s, 0 m/s). What are the deceleration and the braking distance?",
            options: [
              "a = 5 m/s², s = 90 m",
              "a = -5 m/s², s = 90 m",
              "a = -5 m/s², s = 180 m",
              "a = 5 m/s², s = 45 m",
            ],
            answerIndex: 1,
            explanation: "Acceleration = gradient = (0 - 30)/(6 - 0) = -5 m/s² (deceleration = 5 m/s²). Braking distance = area of triangle = (1/2) x 6 x 30 = 90 m.",
            difficulty: "core",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            hints: [
              "Gradient = (v - u)/(t2 - t1) = (0 - 30)/6 = -5 m/s².",
              "Negative gradient = deceleration.",
              "Distance = area of triangle = (1/2) x base x height = (1/2) x 6 x 30 = 90 m.",
            ],
          },
          {
            id: "phys-motion-bm4-08",
            question: "A boat sails 60 km east in 3 hours, then 80 km north in 4 hours. What is the average speed for the whole voyage?",
            options: ["20 km/h", "35 km/h", "28 km/h", "25 km/h"],
            answerIndex: 0,
            explanation: "Total distance = 60 + 80 = 140 km. Total time = 3 + 4 = 7 hours. Average speed = 140/7 = 20 km/h.",
            difficulty: "core",
            guideRef: "Distance, Displacement, Speed and Velocity",
            hints: [
              "Average speed = total distance / total time.",
              "Total distance = 60 + 80 = 140 km.",
              "Total time = 3 + 4 = 7 hours. Average speed = 140/7 = 20 km/h.",
            ],
          },
          {
            id: "phys-motion-bm4-09",
            question: "A ball is thrown vertically upward at 14 m/s (g = 10 m/s²). What is the maximum height reached?",
            options: ["1.4 m", "9.8 m", "19.6 m", "140 m"],
            answerIndex: 1,
            explanation: "At max height, v = 0. Using v² = u² + 2as: 0 = 14² - 2 x 10 x h gives 0 = 196 - 20h, so h = 196/20 = 9.8 m.",
            difficulty: "challenge",
            guideRef: "Solving Motion Problems",
            hints: [
              "At maximum height, v = 0. Take upward as positive: a = -10 m/s².",
              "Use v² = u² + 2as: 0 = 196 - 20h.",
              "20h = 196, so h = 9.8 m.",
            ],
            strategy: "Set v = 0 at max height; use v² = u² + 2as",
          },
          {
            id: "phys-motion-bm4-10",
            question: "A car travelling at 20 m/s begins decelerating at 4 m/s². How far does it travel before stopping?",
            options: ["100 m", "5 m", "40 m", "50 m"],
            answerIndex: 3,
            explanation: "Using v² = u² + 2as with v = 0: 0 = 400 - 8s, so 8s = 400, so s = 50 m. Check: t = (0-20)/(-4) = 5 s; average speed = 10 m/s; s = 10 x 5 = 50 m.",
            difficulty: "challenge",
            guideRef: "Solving Motion Problems",
            hints: [
              "v = 0 (stops), u = 20 m/s, a = -4 m/s².",
              "Use v² = u² + 2as: 0 = 400 + 2(-4)s.",
              "0 = 400 - 8s, so s = 50 m.",
            ],
            strategy: "Use v² = u² + 2as with v = 0 for stopping distance",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "phys-motion-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Ten structured questions on speed/velocity definitions, acceleration, graph analysis, and projectile motion.",
        questions: [
          {
            id: "phys-motion-bq1-01",
            question: "Define speed and state its SI unit. Explain how speed differs from velocity. [2]",
            marks: 2,
            modelAnswer: "Speed is the rate at which distance is covered — it is a scalar with magnitude only. Its SI unit is metres per second (m/s). Velocity is speed in a stated direction — it is a vector with both magnitude and direction. Two objects can have the same speed but different velocities if they move in different directions.",
            markScheme: [
              "Speed: distance covered per unit time / scalar quantity (1 mark)",
              "Velocity: speed with direction / vector; distinguishes direction from speed (1 mark)",
            ],
            commonError: "Confusing scalar and vector — saying velocity is faster than speed rather than explaining the direction component.",
            difficulty: "warmup",
            guideRef: "Distance, Displacement, Speed and Velocity",
          },
          {
            id: "phys-motion-bq1-02",
            question: "A car increases its velocity from 10 m/s to 22 m/s in 6 s. Calculate its acceleration and state the unit. [2]",
            marks: 2,
            modelAnswer: "a = (v - u) / t = (22 - 10) / 6 = 12 / 6 = 2 m/s²",
            markScheme: [
              "Correct substitution: (22 - 10) / 6 or 12/6 (1 mark)",
              "a = 2 m/s² with unit (1 mark)",
            ],
            commonError: "Using a = (v + u) / t instead of (v - u) / t.",
            difficulty: "warmup",
            guideRef: "Acceleration",
          },
          {
            id: "phys-motion-bq1-03",
            question: "A distance-time graph shows two straight-line sections: 0 to 8 s — from 0 m to 64 m; 8 s to 14 s — from 64 m to 100 m. (a) Calculate the speed in each section. [2] (b) Calculate the average speed over the entire 14 s. [2]",
            marks: 4,
            modelAnswer: "(a) Section 1: speed = 64/8 = 8.0 m/s. Section 2: speed = (100 - 64)/(14 - 8) = 36/6 = 6.0 m/s. (b) Average speed = total distance / total time = 100/14 = 7.14 m/s (3 s.f.)",
            markScheme: [
              "Section 1: speed = 64/8 = 8.0 m/s (1 mark)",
              "Section 2: speed = 36/6 = 6.0 m/s (1 mark)",
              "Average speed = 100/14 (1 mark)",
              "7.1 m/s (accept 7.14) with unit (1 mark)",
            ],
            commonError: "Averaging the two speeds (8 + 6)/2 = 7 m/s rather than using total distance/total time — the sections have different durations.",
            difficulty: "core",
            guideRef: "Distance–Time Graphs",
            hints: [
              "Speed = gradient = rise/run for each section.",
              "Section 2 rise = 100 - 64 = 36 m; run = 14 - 8 = 6 s.",
              "Average speed uses the TOTAL distance (100 m) and TOTAL time (14 s).",
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "Section 1: speed = 64/8 = 8.0 m/s",
                  "Section 2: speed = (100 - 64)/(14 - 8) = 36/6 = 6.0 m/s",
                  "Average speed = 100/14 = 7.1 m/s (3 s.f.)",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq1-04",
            question: "A cyclist is travelling at 2 m/s and accelerates uniformly at 0.5 m/s² for 10 s. (a) Calculate the final velocity of the cyclist. [2] (b) Calculate the distance covered during this acceleration. [2]",
            marks: 4,
            modelAnswer: "(a) v = u + at = 2 + 0.5 x 10 = 2 + 5 = 7 m/s. (b) s = ut + (1/2)at² = 2 x 10 + (1/2) x 0.5 x 100 = 20 + 25 = 45 m.",
            markScheme: [
              "v = u + at = 2 + 0.5 x 10 (1 mark)",
              "v = 7 m/s (1 mark)",
              "s = ut + (1/2)at² or average speed method (1 mark)",
              "s = 45 m with unit (1 mark)",
            ],
            commonError: "Using s = v x t = 7 x 10 = 70 m (using the final speed for the whole time rather than accounting for acceleration).",
            difficulty: "core",
            guideRef: "Acceleration",
            hints: [
              "v = u + at: substitute u = 2, a = 0.5, t = 10.",
              "For distance: use s = ut + (1/2)at² or average speed x time.",
              "Average speed = (u + v)/2 = (2 + 7)/2 = 4.5 m/s; s = 4.5 x 10 = 45 m.",
            ],
            solutions: [
              {
                label: "Method 1: kinematic equation",
                steps: [
                  "v = u + at = 2 + 0.5 x 10 = 7 m/s",
                  "s = ut + (1/2)at² = 20 + 25 = 45 m",
                ],
              },
              {
                label: "Method 2: average speed",
                steps: [
                  "v = 7 m/s (as above)",
                  "Average speed = (2 + 7)/2 = 4.5 m/s",
                  "s = 4.5 x 10 = 45 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq1-05",
            question: "A v-t graph shows a vehicle that: accelerates uniformly from 0 to 15 m/s in 5 s; maintains 15 m/s for 10 s; decelerates uniformly to rest in 3 s. (a) Calculate the acceleration in the first phase. [2] (b) Calculate the total distance. [3]",
            marks: 5,
            modelAnswer: "(a) a = (v - u)/t = (15 - 0)/5 = 3 m/s². (b) Triangle (0-5 s): (1/2) x 5 x 15 = 37.5 m. Rectangle (5-15 s): 10 x 15 = 150 m. Triangle (15-18 s): (1/2) x 3 x 15 = 22.5 m. Total = 37.5 + 150 + 22.5 = 210 m.",
            markScheme: [
              "a = (15 - 0)/5 (1 mark)",
              "3 m/s² (1 mark)",
              "Area of first triangle: (1/2) x 5 x 15 = 37.5 m (1 mark)",
              "Rectangle: 10 x 15 = 150 m (1 mark)",
              "Area of final triangle: (1/2) x 3 x 15 = 22.5 m; total = 210 m (1 mark)",
            ],
            commonError: "Using 18 s as the base of the final triangle instead of 3 s — the final phase lasts only 3 s.",
            difficulty: "core",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            hints: [
              "a = (v - u)/t for the first phase with u = 0, v = 15, t = 5.",
              "Distance = area under v-t graph. Split into three shapes.",
              "Phase 1: triangle; Phase 2: rectangle; Phase 3: triangle.",
            ],
            solutions: [
              {
                label: "Area method",
                steps: [
                  "Phase 1 (triangle): (1/2) x 5 x 15 = 37.5 m",
                  "Phase 2 (rectangle): 10 x 15 = 150 m",
                  "Phase 3 (triangle): (1/2) x 3 x 15 = 22.5 m",
                  "Total = 37.5 + 150 + 22.5 = 210 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq1-06",
            question: "A feather and a hammer are dropped simultaneously from the same height. On Earth they land at different times; on the Moon (no atmosphere) they land at the same time. Explain why. [3]",
            marks: 3,
            modelAnswer: "On Earth, air resistance acts upward on both objects. The feather, being lighter and having a larger surface area relative to its weight, experiences a much greater air resistance relative to its weight than the hammer. This greatly reduces its acceleration. The hammer is barely affected by air resistance relative to its large weight, so it falls nearly at g. On the Moon there is no atmosphere and hence no air resistance; both objects experience only gravity and fall with the same acceleration g regardless of mass.",
            markScheme: [
              "On Earth, air resistance acts on both (1 mark)",
              "Feather has relatively larger air resistance compared to its weight, reducing its acceleration much more than the hammer (1 mark)",
              "On Moon, no atmosphere/air resistance; both accelerate at g regardless of mass (1 mark)",
            ],
            commonError: "Saying the feather is lighter so gravity is less — gravity (weight) and acceleration due to gravity are not the same; g is the same for all masses.",
            difficulty: "core",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "Air resistance depends on surface area and speed, not mass alone.",
              "Compare air resistance force to weight for each object.",
              "On the Moon: no atmosphere, so the only force is gravity on each.",
            ],
          },
          {
            id: "phys-motion-bq1-07",
            question: "A person walks 500 m east, rests for 2 minutes, then walks 500 m west back to the start. The walk takes 4 minutes each way. (a) Calculate the average speed for the whole trip. [2] (b) State the average velocity for the whole trip and explain your reasoning. [2]",
            marks: 4,
            modelAnswer: "(a) Total distance = 1000 m. Total time = 4 + 2 + 4 = 10 minutes = 600 s. Average speed = 1000/600 = 1.67 m/s (3 s.f.). (b) Average velocity = 0 m/s. The person returns to the start, so displacement = 0. Average velocity = displacement/time = 0/600 = 0.",
            markScheme: [
              "Total distance = 1000 m, total time = 600 s (1 mark)",
              "Average speed = 1000/600 = 1.67 m/s (1 mark)",
              "Displacement = 0 (returns to start) (1 mark)",
              "Average velocity = 0 m/s (1 mark)",
            ],
            commonError: "Not including the rest time in the total time when calculating average speed.",
            difficulty: "core",
            guideRef: "Distance, Displacement, Speed and Velocity",
            hints: [
              "Include the 2-minute rest in total time: 4 + 2 + 4 = 10 min.",
              "Average speed = total distance / total time.",
              "Displacement = final position - initial position = 0 (returns to start).",
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "Total distance = 500 + 500 = 1000 m",
                  "Total time = (4 + 2 + 4) min = 10 min = 600 s",
                  "Average speed = 1000/600 = 1.67 m/s",
                  "Displacement = 0 (same start and end), so average velocity = 0 m/s",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq1-08",
            question: "A car is at rest at traffic lights. As the lights turn green, it begins accelerating at 2.5 m/s². At the same moment, a lorry passes the lights at constant 10 m/s in the same direction. (a) Write distance expressions for the car and lorry as functions of time t. [2] (b) At what time does the car reach the same speed as the lorry? [2] (c) At what time and distance from the lights does the car pass the lorry? [3]",
            marks: 7,
            modelAnswer: "(a) Car: s_car = (1/2) x 2.5 x t² = 1.25t². Lorry: s_lorry = 10t. (b) Speed of car: v = 0 + 2.5t. Set equal to lorry speed: 2.5t = 10, so t = 4 s. (c) Catch-up: 1.25t² = 10t, divide by t (t not 0): 1.25t = 10, so t = 8 s. Distance = 10 x 8 = 80 m.",
            markScheme: [
              "s_car = 1.25t² or (1/2)(2.5)t² (1 mark)",
              "s_lorry = 10t (1 mark)",
              "2.5t = 10, so t = 4 s (1 mark)",
              "Award method mark for equal speed (1 mark)",
              "1.25t² = 10t set up (1 mark)",
              "t = 8 s (1 mark)",
              "distance = 80 m (1 mark)",
            ],
            commonError: "Confusing same speed with same position — same speed occurs at t = 4 s but the car has not caught up yet; it catches up at t = 8 s.",
            difficulty: "challenge",
            guideRef: "Solving Motion Problems",
            hints: [
              "s_car = (1/2)at² with a = 2.5; s_lorry = 10t.",
              "Same speed: v_car = v_lorry gives 2.5t = 10, so t = 4 s.",
              "Same position: 1.25t² = 10t gives t(1.25t - 10) = 0, so t = 8 s.",
              "Check: s_lorry = 10 x 8 = 80 m; s_car = 1.25 x 64 = 80 m.",
            ],
            strategy: "Set up position equations; equate for same position (not same speed)",
            solutions: [
              {
                label: "Algebraic method",
                steps: [
                  "s_car = 1.25t²; s_lorry = 10t",
                  "Same speed: 2.5t = 10, so t = 4 s",
                  "Same position: 1.25t² = 10t, so 1.25t = 10, so t = 8 s",
                  "Distance from lights: s = 10 x 8 = 80 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq1-09",
            question: "A rocket decelerates from 800 m/s to 200 m/s over a distance of 3000 m. (a) Calculate the deceleration of the rocket. [3] (b) Calculate the time taken. [2]",
            marks: 5,
            modelAnswer: "(a) v² = u² + 2as gives 200² = 800² + 2 x a x 3000, so 40000 = 640000 + 6000a, so 6000a = -600000, so a = -100 m/s² (deceleration = 100 m/s²). (b) v = u + at gives 200 = 800 + (-100)t, so -600 = -100t, so t = 6 s.",
            markScheme: [
              "v² = u² + 2as set up (1 mark)",
              "40000 = 640000 + 6000a (1 mark)",
              "a = -100 m/s² / deceleration = 100 m/s² (1 mark)",
              "v = u + at gives t = (200-800)/(-100) (1 mark)",
              "t = 6 s (1 mark)",
            ],
            commonError: "Forgetting to square u and v — using 200 and 800 directly instead of 40000 and 640000.",
            difficulty: "challenge",
            guideRef: "Acceleration",
            hints: [
              "Use v² = u² + 2as: v = 200, u = 800, s = 3000.",
              "200² = 40000; 800² = 640000.",
              "Solve for a, then use v = u + at to find t.",
            ],
            strategy: "Use v² = u² + 2as when time is not given",
            solutions: [
              {
                label: "UVAST method",
                steps: [
                  "u = 800 m/s, v = 200 m/s, s = 3000 m",
                  "v² = u² + 2as: 40000 = 640000 + 6000a",
                  "6000a = -600000, so a = -100 m/s²",
                  "v = u + at: 200 = 800 - 100t, so t = 6 s",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq1-10",
            question: "A ball is launched vertically upward from the ground at 30 m/s (g = 10 m/s², ignore air resistance). (a) Calculate the time to reach maximum height. [2] (b) Calculate the maximum height. [2] (c) Calculate the total time in the air before hitting the ground. [2]",
            marks: 6,
            modelAnswer: "(a) At max height, v = 0. t = (v - u)/a = (0 - 30)/(-10) = 3 s. (b) h = u x t + (1/2) x a x t² = 30 x 3 + (1/2) x (-10) x 9 = 90 - 45 = 45 m. (Or: v² = u² + 2ah gives 0 = 900 - 20h, so h = 45 m.) (c) By symmetry, time to fall = time to rise = 3 s. Total time = 6 s.",
            markScheme: [
              "v = u + at with v = 0, u = 30, a = -10 (1 mark)",
              "t = 3 s (1 mark)",
              "h = 30 x 3 - (1/2)(10)(9) = 90 - 45 (1 mark)",
              "h = 45 m (1 mark)",
              "Total time = 2 x 3 s (by symmetry) (1 mark)",
              "Total time = 6 s (1 mark)",
            ],
            commonError: "Using t = 3 s as the total airtime instead of doubling it for the descent.",
            difficulty: "challenge",
            guideRef: "Solving Motion Problems",
            hints: [
              "At max height, v = 0. Use v = u + at with a = -g = -10 m/s².",
              "h = ut + (1/2)at² with t = 3 s, or v² = u² + 2as.",
              "The ball takes the same time to fall back as to rise (symmetry, no air resistance).",
            ],
            strategy: "Use symmetry for total airtime; vertical motion equations for height",
            solutions: [
              {
                label: "Kinematic method",
                steps: [
                  "Take upward as positive: u = +30 m/s, a = -10 m/s²",
                  "(a) t_up = (0 - 30)/(-10) = 3 s",
                  "(b) h = 30 x 3 + (1/2)(-10)(9) = 90 - 45 = 45 m",
                  "Cross-check: v² = 900 - 20 x 45 = 0 (confirmed)",
                  "(c) Total time = 2 x 3 = 6 s (symmetry)",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-motion-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Ten structured questions on v-t graphs, unit conversion, multi-phase acceleration, and stopping distance.",
        questions: [
          {
            id: "phys-motion-bq2-01",
            question: "Describe what the gradient and the area under a velocity-time graph each represent. [2]",
            marks: 2,
            modelAnswer: "The gradient (slope) of a velocity-time graph represents acceleration. The area under the graph represents the distance travelled (displacement if direction is consistent).",
            markScheme: [
              "Gradient = acceleration (1 mark)",
              "Area = distance travelled (1 mark)",
            ],
            commonError: "Swapping the two — saying gradient = distance or area = acceleration.",
            difficulty: "warmup",
            guideRef: "Speed–Time and Velocity–Time Graphs",
          },
          {
            id: "phys-motion-bq2-02",
            question: "A train travels at 50 m/s for 3 minutes. Calculate the distance it covers. [2]",
            marks: 2,
            modelAnswer: "Time = 3 x 60 = 180 s. Distance = speed x time = 50 x 180 = 9000 m (9.0 km).",
            markScheme: [
              "Convert time: 3 min = 180 s (1 mark)",
              "Distance = 50 x 180 = 9000 m (1 mark)",
            ],
            commonError: "Not converting minutes to seconds — using 50 x 3 = 150 m.",
            difficulty: "warmup",
            guideRef: "Distance, Displacement, Speed and Velocity",
          },
          {
            id: "phys-motion-bq2-03",
            question: "A car starting from rest accelerates uniformly for 8 s, reaching 24 m/s. (a) Calculate the acceleration. [2] (b) How far does it travel in these 8 s? [2]",
            marks: 4,
            modelAnswer: "(a) a = (v - u)/t = (24 - 0)/8 = 3 m/s². (b) s = ut + (1/2)at² = 0 + (1/2) x 3 x 64 = 96 m. Alternatively: average speed = (0 + 24)/2 = 12 m/s; s = 12 x 8 = 96 m.",
            markScheme: [
              "a = 24/8 (1 mark)",
              "a = 3 m/s² (1 mark)",
              "Correct method: (1/2)at² or average speed (1 mark)",
              "s = 96 m (1 mark)",
            ],
            commonError: "Using s = v x t = 24 x 8 = 192 m (using final speed rather than average).",
            difficulty: "core",
            guideRef: "Acceleration",
            hints: [
              "u = 0 (from rest), v = 24 m/s, t = 8 s.",
              "a = (v - u)/t.",
              "s = ut + (1/2)at² or average speed x time.",
            ],
            solutions: [
              {
                label: "Kinematic equations",
                steps: [
                  "a = (24 - 0)/8 = 3 m/s²",
                  "s = (1/2) x 3 x 8² = (1/2) x 3 x 64 = 96 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq2-04",
            question: "A runner's d-t graph has the following features: 0 to 4 s — straight line from 0 to 20 m; 4 to 8 s — horizontal line at 20 m; 8 to 12 s — straight line from 20 m to 44 m. (a) Calculate the runner's speed in the first phase and the third phase. [2] (b) Explain what happens in the second phase. [1] (c) Calculate the average speed over the whole 12 s. [1]",
            marks: 4,
            modelAnswer: "(a) Phase 1: speed = 20/4 = 5.0 m/s. Phase 3: speed = (44 - 20)/(12 - 8) = 24/4 = 6.0 m/s. (b) The runner is stationary (the graph is horizontal, gradient = 0, so speed = 0). (c) Average speed = 44/12 = 3.67 m/s (3 s.f.).",
            markScheme: [
              "Phase 1 speed = 5.0 m/s (1 mark)",
              "Phase 3 speed = 6.0 m/s (1 mark)",
              "Phase 2: stationary / not moving (1 mark)",
              "Average speed = 44/12 = 3.67 m/s with unit (1 mark)",
            ],
            commonError: "For average speed, using only the time when moving (8 s) instead of total time (12 s).",
            difficulty: "core",
            guideRef: "Distance–Time Graphs",
            hints: [
              "Speed = gradient = rise/run for each straight section.",
              "Horizontal section: gradient = 0, so speed = 0 (stationary).",
              "Average speed uses total distance (44 m) and total time (12 s).",
            ],
          },
          {
            id: "phys-motion-bq2-05",
            question: "A bus journey is described by its v-t graph: 0-10 s: uniform acceleration from 0 to 20 m/s; 10-30 s: constant 20 m/s; 30-36 s: uniform deceleration to rest. (a) Find the acceleration in the first phase. [1] (b) Find the deceleration in the final phase. [1] (c) Calculate the total distance. [3]",
            marks: 5,
            modelAnswer: "(a) a = (20 - 0)/10 = 2 m/s². (b) a = (0 - 20)/6 = -3.33 m/s² (deceleration approximately 3.3 m/s²). (c) Phase 1 (triangle): (1/2) x 10 x 20 = 100 m. Phase 2 (rectangle): 20 x 20 = 400 m. Phase 3 (triangle): (1/2) x 6 x 20 = 60 m. Total = 100 + 400 + 60 = 560 m.",
            markScheme: [
              "a = 20/10 = 2 m/s² (1 mark)",
              "deceleration = 20/6 = 3.3 m/s² (accept 10/3) (1 mark)",
              "Phase 1 area: 100 m (1 mark)",
              "Phase 2 area: 400 m (1 mark)",
              "Phase 3 area: 60 m; total = 560 m (1 mark)",
            ],
            commonError: "Using 36 s as the base of the last triangle instead of 6 s (phase 3 runs from 30 to 36 s, so lasts 6 s).",
            difficulty: "core",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            hints: [
              "Phase 3 duration = 36 - 30 = 6 s, not 36 s.",
              "Deceleration: gradient = (0 - 20)/6.",
              "Sum the three areas separately.",
            ],
            solutions: [
              {
                label: "Area method",
                steps: [
                  "Phase 1 (triangle, 0-10 s): (1/2)(10)(20) = 100 m",
                  "Phase 2 (rectangle, 10-30 s): (20)(20) = 400 m",
                  "Phase 3 (triangle, 30-36 s): (1/2)(6)(20) = 60 m",
                  "Total = 560 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq2-06",
            question: "A ball is dropped from rest from a height of 45 m. Use g = 10 m/s² and ignore air resistance. (a) Calculate the speed of the ball just before it hits the ground. [2] (b) Calculate the time taken to fall. [2]",
            marks: 4,
            modelAnswer: "(a) v² = u² + 2as = 0 + 2 x 10 x 45 = 900. v = 30 m/s. (b) v = u + at gives 30 = 0 + 10t, so t = 3.0 s.",
            markScheme: [
              "v² = 2 x 10 x 45 = 900 (1 mark)",
              "v = 30 m/s (1 mark)",
              "v = u + at gives t = 30/10 (1 mark)",
              "t = 3.0 s (1 mark)",
            ],
            commonError: "Arithmetic errors from not squaring first. Also confusing s = 45 m with a different reference height.",
            difficulty: "core",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "u = 0 (dropped from rest), a = g = 10 m/s², s = 45 m.",
              "Use v² = u² + 2as first (time not needed).",
              "Then v = u + at to find t.",
            ],
            solutions: [
              {
                label: "UVAST method",
                steps: [
                  "u = 0, a = 10, s = 45",
                  "v² = 0 + 2 x 10 x 45 = 900, so v = 30 m/s",
                  "30 = 0 + 10t, so t = 3.0 s",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq2-07",
            question: "A car's brakes produce a deceleration of 8 m/s². The car is initially moving at 32 m/s. (a) Calculate the stopping time. [1] (b) Calculate the stopping distance. [2]",
            marks: 3,
            modelAnswer: "(a) t = (v - u)/a = (0 - 32)/(-8) = 4 s. (b) Average speed = 16 m/s; s = 16 x 4 = 64 m. (Or: v² = u² + 2as gives 0 = 1024 - 16s, so s = 64 m.)",
            markScheme: [
              "t = 32/8 = 4 s (1 mark)",
              "s = 64 m (1 mark)",
              "Correct method shown (1 mark)",
            ],
            commonError: "Using s = v x t = 0 x 4 = 0 m (using final speed of zero rather than average speed).",
            difficulty: "core",
            guideRef: "Acceleration",
            hints: [
              "a = -8 m/s² (deceleration); u = 32 m/s, v = 0.",
              "t = (0 - 32)/(-8).",
              "For distance: v² = u² + 2as or use average speed x time.",
            ],
            solutions: [
              {
                label: "Kinematic method",
                steps: [
                  "t = (0 - 32)/(-8) = 4 s",
                  "Average speed = (32 + 0)/2 = 16 m/s",
                  "s = 16 x 4 = 64 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq2-08",
            question: "Explain, in terms of forces, why a skydiver falls faster than a feather even though both experience the same gravitational field strength. [4]",
            marks: 4,
            modelAnswer: "Both the skydiver and the feather experience the same gravitational field strength (g approximately 10 N/kg) and therefore the same acceleration due to gravity alone. However, air resistance (drag) also acts on both as they fall. The feather has a much smaller weight relative to its large surface area, so drag quickly becomes comparable to its weight. This reduces the net downward force significantly, making the feather reach a very low terminal velocity. The skydiver is much heavier, so drag is much smaller relative to their weight. The net downward force remains large for longer, and terminal velocity is much higher (around 55 m/s).",
            markScheme: [
              "Both experience same gravitational field strength / g is the same (1 mark)",
              "Air resistance / drag acts on both, opposing motion (1 mark)",
              "Feather has small weight relative to drag — drag quickly equals weight — low terminal velocity (1 mark)",
              "Skydiver has large weight relative to drag — higher terminal velocity (1 mark)",
            ],
            commonError: "Stating that gravity is greater on the skydiver because they are heavier — gravity (g) is the same; weight (mg) is greater, but so is mass.",
            difficulty: "core",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "Compare the ratio of drag to weight for each object.",
              "Both fall in the same g, so any difference must be due to drag.",
              "Terminal velocity depends on when drag = weight.",
            ],
          },
          {
            id: "phys-motion-bq2-09",
            question: "A train is initially travelling at 30 m/s and brakes uniformly, coming to rest in 45 s. (a) Calculate the braking deceleration. [2] (b) Calculate the braking distance. [2] (c) The driver realises they need to brake 600 m before a station. Is the train's braking distance safe (i.e., within 600 m)? Show your working. [2]",
            marks: 6,
            modelAnswer: "(a) a = (0 - 30)/45 = -0.667 m/s² (deceleration = 2/3 m/s²). (b) Average speed = 15 m/s; s = 15 x 45 = 675 m. (Or: v² = u² + 2as gives s = 675 m.) (c) Braking distance = 675 m > 600 m. The train will NOT stop in time.",
            markScheme: [
              "a = (0-30)/45 = -2/3 m/s² (1 mark)",
              "Correct value: 0.667 m/s² (1 mark)",
              "s = average speed x time = 15 x 45 = 675 m (or equivalent method) (1 mark)",
              "675 m (1 mark)",
              "Compare 675 m with 600 m (1 mark)",
              "Conclusion: NOT safe / will not stop in time (1 mark)",
            ],
            commonError: "Using s = v x t = 0 x 45 = 0 m or s = u x t = 30 x 45 = 1350 m rather than using average speed or kinematic equations.",
            difficulty: "challenge",
            guideRef: "Solving Motion Problems",
            hints: [
              "a = (v - u)/t with v = 0, u = 30, t = 45.",
              "Use average speed = (u + v)/2 = 15 m/s, then s = 15 x 45.",
              "Compare your answer to 600 m and draw a conclusion.",
            ],
            strategy: "Calculate; compare to constraint; form conclusion",
            solutions: [
              {
                label: "Average speed method",
                steps: [
                  "a = (0 - 30)/45 = -0.667 m/s²",
                  "Average speed = (30 + 0)/2 = 15 m/s",
                  "s = 15 x 45 = 675 m",
                  "675 m > 600 m: train will NOT stop in time",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq2-10",
            question: "A motorcycle accelerates from rest at 3 m/s² for 8 s, then maintains constant velocity for 12 s, then brakes to rest with deceleration 4 m/s². (a) Find the maximum velocity reached. [2] (b) Find the distance during braking. [2] (c) Find the total distance of the journey. [2]",
            marks: 6,
            modelAnswer: "(a) v = u + at = 0 + 3 x 8 = 24 m/s. (b) Braking: v = 0, u = 24, a = -4. s = (v² - u²)/(2a) = (0 - 576)/(-8) = 72 m. (c) Phase 1: (1/2) x 3 x 64 = 96 m. Phase 2: 24 x 12 = 288 m. Phase 3: 72 m. Total = 96 + 288 + 72 = 456 m.",
            markScheme: [
              "v = 3 x 8 = 24 m/s (1 mark)",
              "Correct method for braking distance (1 mark)",
              "Braking distance = 72 m (1 mark)",
              "Phase 1 = 96 m; Phase 2 = 288 m (1 mark)",
              "Total = 456 m (1 mark)",
              "Units correct throughout (1 mark)",
            ],
            commonError: "In phase 3 using v = 24 m/s instead of v = 0 in the stopping distance formula.",
            difficulty: "challenge",
            guideRef: "Solving Motion Problems",
            hints: [
              "Phase 1: v = u + at = 0 + 3 x 8 = 24 m/s.",
              "Phase 3 braking: u = 24, v = 0, a = -4 m/s²; use v² = u² + 2as.",
              "Sum all three phase distances.",
            ],
            strategy: "Three-phase problem: handle each phase separately, carry velocity forward",
            solutions: [
              {
                label: "Phase-by-phase",
                steps: [
                  "Phase 1: v = 24 m/s; s1 = (1/2)(3)(8²) = 96 m",
                  "Phase 2: s2 = 24 x 12 = 288 m",
                  "Phase 3: v² = u² + 2as gives 0 = 576 + 2(-4)s, so s = 72 m",
                  "Total = 96 + 288 + 72 = 456 m",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-motion-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Ten structured questions on terminal velocity, projectile motion, forces on falling objects, and multi-phase journeys.",
        questions: [
          {
            id: "phys-motion-bq3-01",
            question: "Define terminal velocity and state the condition that must be met for it to occur. [2]",
            marks: 2,
            modelAnswer: "Terminal velocity is the constant (maximum) velocity reached by a falling object when the drag force exactly equals the weight of the object. At this point, the resultant force is zero and acceleration is zero.",
            markScheme: [
              "Terminal velocity: constant/maximum velocity of a falling object (1 mark)",
              "Condition: drag force equals weight / resultant force = 0 (1 mark)",
            ],
            commonError: "Saying all forces are zero at terminal velocity — the forces (weight and drag) are still present but balanced.",
            difficulty: "warmup",
            guideRef: "Free Fall and Terminal Velocity",
          },
          {
            id: "phys-motion-bq3-02",
            question: "State the units of acceleration and write the formula for acceleration in terms of initial velocity (u), final velocity (v), and time (t). [2]",
            marks: 2,
            modelAnswer: "Units: m/s² (metres per second squared). Formula: a = (v - u) / t.",
            markScheme: [
              "Unit: m/s² (1 mark)",
              "a = (v - u)/t (1 mark)",
            ],
            commonError: "Writing a = (u - v)/t (subtracting in wrong order) or a = v/t (forgetting the initial velocity).",
            difficulty: "warmup",
            guideRef: "Acceleration",
          },
          {
            id: "phys-motion-bq3-03",
            question: "A car's journey is described by a distance-time graph with three sections: Section 1 (0-5 s): straight line from 0 to 40 m; Section 2 (5-9 s): straight line from 40 m to 40 m (horizontal); Section 3 (9-15 s): straight line from 40 m to 100 m. (a) Calculate the speed in sections 1 and 3. [2] (b) Calculate the average speed for the whole journey. [2]",
            marks: 4,
            modelAnswer: "(a) Section 1: speed = 40/5 = 8.0 m/s. Section 3: speed = (100 - 40)/(15 - 9) = 60/6 = 10 m/s. (b) Average speed = 100/15 = 6.67 m/s (3 s.f.).",
            markScheme: [
              "Section 1 speed = 8.0 m/s (1 mark)",
              "Section 3 speed = 10 m/s (1 mark)",
              "Average speed = 100/15 (1 mark)",
              "6.67 m/s with unit (1 mark)",
            ],
            commonError: "For average speed, averaging 8 and 10 to get 9 m/s rather than using total distance/total time.",
            difficulty: "core",
            guideRef: "Distance–Time Graphs",
            hints: [
              "Section 1: gradient = 40/5 = 8 m/s. Section 3: gradient = 60/6 = 10 m/s.",
              "Average speed: total distance = 100 m, total time = 15 s.",
              "100/15 = 6.67 m/s.",
            ],
            solutions: [
              {
                label: "Gradient and total method",
                steps: [
                  "Speed 1 = 40/5 = 8.0 m/s",
                  "Speed 3 = (100-40)/(15-9) = 60/6 = 10 m/s",
                  "Avg speed = 100/15 = 6.67 m/s",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq3-04",
            question: "A v-t graph for a car shows a straight line from (0 s, 6 m/s) to (12 s, 30 m/s). (a) Calculate the acceleration. [2] (b) Calculate the distance travelled. [2]",
            marks: 4,
            modelAnswer: "(a) a = (30 - 6)/12 = 24/12 = 2.0 m/s². (b) Distance = area of trapezoid = (1/2)(u + v) x t = (1/2)(6 + 30) x 12 = (1/2) x 36 x 12 = 216 m.",
            markScheme: [
              "a = (30 - 6)/12 = 2.0 m/s² (1 mark)",
              "Correct value with unit (1 mark)",
              "Area = (1/2)(u + v) x t or trapezoid method (1 mark)",
              "Distance = 216 m (1 mark)",
            ],
            commonError: "Using just a rectangle (30 x 12 = 360 m) or just a triangle ((1/2) x 12 x 30 = 180 m) instead of the trapezoid.",
            difficulty: "core",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            hints: [
              "a = gradient = (v - u)/(t2 - t1) = (30 - 6)/12.",
              "Shape: a trapezoid (starts at 6 m/s, not 0).",
              "Area of trapezoid = (1/2)(sum of parallel sides) x height = (1/2)(6 + 30) x 12.",
            ],
            solutions: [
              {
                label: "Trapezoid area method",
                steps: [
                  "a = (30 - 6)/12 = 2 m/s²",
                  "Area = (1/2)(6 + 30) x 12 = (1/2)(36)(12) = 216 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq3-05",
            question: "A parachutist of mass 80 kg jumps from a plane. Use g = 10 m/s². (a) Calculate the weight of the parachutist. [1] (b) Initially, the drag force is 200 N. Calculate the resultant force and initial acceleration. [2] (c) After the parachute opens, drag increases to 1200 N. Calculate the new resultant force and state the direction of acceleration. [2]",
            marks: 5,
            modelAnswer: "(a) W = mg = 80 x 10 = 800 N. (b) Resultant = W - drag = 800 - 200 = 600 N downward. a = F/m = 600/80 = 7.5 m/s² downward. (c) Resultant = drag - W = 1200 - 800 = 400 N upward. Acceleration is upward (the parachutist decelerates).",
            markScheme: [
              "W = mg = 800 N (1 mark)",
              "Resultant = 600 N downward (1 mark)",
              "a = 600/80 = 7.5 m/s² (1 mark)",
              "New resultant = 1200 - 800 = 400 N upward (1 mark)",
              "Acceleration is upward / parachutist decelerates (1 mark)",
            ],
            commonError: "In part (c), forgetting to state direction — 400 N must be identified as upward.",
            difficulty: "core",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "Weight = mg. Resultant = weight - drag (taking down as positive).",
              "F = ma, so a = F/m.",
              "When drag > weight, net force is upward: deceleration.",
            ],
            solutions: [
              {
                label: "Force analysis",
                steps: [
                  "W = 80 x 10 = 800 N",
                  "F_net = 800 - 200 = 600 N down; a = 600/80 = 7.5 m/s²",
                  "After parachute: F_net = 1200 - 800 = 400 N upward; parachutist decelerates",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq3-06",
            question: "A stone is fired horizontally at 20 m/s from the top of a building. It lands 40 m from the base of the building. Use g = 10 m/s² and ignore air resistance. (a) Find the time of flight. [2] (b) Find the height of the building. [2]",
            marks: 4,
            modelAnswer: "(a) Horizontal: x = v_h x t gives 40 = 20 x t, so t = 2.0 s. (b) Vertical: s = (1/2)g x t² = (1/2) x 10 x 4 = 20 m.",
            markScheme: [
              "40 = 20 x t set up (1 mark)",
              "t = 2.0 s (1 mark)",
              "s = (1/2)(10)(2²) = (1/2)(10)(4) (1 mark)",
              "height = 20 m (1 mark)",
            ],
            commonError: "Using horizontal and vertical motions interchangeably — applying the horizontal speed to the vertical calculation.",
            difficulty: "core",
            guideRef: "Solving Motion Problems",
            hints: [
              "Horizontal and vertical motions are independent.",
              "Horizontal: no acceleration; x = v_h x t gives t.",
              "Vertical: u = 0 (horizontal launch), a = g = 10 m/s²; s = (1/2)gt².",
            ],
            solutions: [
              {
                label: "Component method",
                steps: [
                  "Horizontal: 40 = 20t, so t = 2.0 s",
                  "Vertical: s = (1/2)(10)(2²) = 20 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq3-07",
            question: "A remote-controlled car takes 25 s to travel around a rectangular track of dimensions 8 m by 5 m, returning to its starting position. (a) Calculate the distance travelled. [1] (b) State the displacement. [1] (c) Calculate the average speed. [1]",
            marks: 3,
            modelAnswer: "(a) Perimeter = 2(8 + 5) = 26 m. Distance = 26 m. (b) Displacement = 0 m (returns to starting position). (c) Average speed = 26/25 = 1.04 m/s.",
            markScheme: [
              "Distance = 26 m (perimeter) (1 mark)",
              "Displacement = 0 m (1 mark)",
              "Average speed = 26/25 = 1.04 m/s with unit (1 mark)",
            ],
            commonError: "Using 8 + 5 = 13 m for the perimeter (only half the perimeter).",
            difficulty: "core",
            guideRef: "Distance, Displacement, Speed and Velocity",
            hints: [
              "Perimeter of rectangle = 2(length + width).",
              "Displacement = 0 because start and finish are the same point.",
              "Average speed = distance / time.",
            ],
          },
          {
            id: "phys-motion-bq3-08",
            question: "Two cars start from the same point at the same time. Car A moves at a constant 15 m/s. Car B starts from rest and accelerates at 3 m/s². (a) At what time does Car B reach the same speed as Car A? [2] (b) Show that Car A is still ahead of Car B at this time. [3]",
            marks: 5,
            modelAnswer: "(a) Speed of B = 3t. Set 3t = 15: t = 5 s. (b) At t = 5 s: Position of A = 15 x 5 = 75 m. Position of B = (1/2) x 3 x 25 = 37.5 m. Car A is 75 - 37.5 = 37.5 m ahead.",
            markScheme: [
              "3t = 15, so t = 5 s (1 mark)",
              "Correct method (1 mark)",
              "Position A = 75 m (1 mark)",
              "Position B = 37.5 m (1 mark)",
              "A is ahead by 37.5 m — correctly concludes A leads (1 mark)",
            ],
            commonError: "Thinking that when B matches A's speed, B has caught up — equal speeds do not mean equal positions.",
            difficulty: "challenge",
            guideRef: "Solving Motion Problems",
            hints: [
              "Speed of B: v_B = 3t. Set v_B = v_A = 15 m/s.",
              "Position of A at t = 5 s: s_A = 15 x 5.",
              "Position of B at t = 5 s: s_B = (1/2)(3)(5²).",
            ],
            strategy: "Equal speeds is not equal positions — check positions separately",
            solutions: [
              {
                label: "Speed and position analysis",
                steps: [
                  "t = 5 s when speeds equal (3t = 15)",
                  "s_A = 15 x 5 = 75 m; s_B = (1/2)(3)(25) = 37.5 m",
                  "A leads by 37.5 m at t = 5 s",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq3-09",
            question: "A van accelerates from rest at 4 m/s² for 8 s, then brakes to rest with deceleration 8 m/s². (a) Find the speed at the end of acceleration. [1] (b) Find the time taken to brake to rest. [2] (c) Find the total distance of the journey. [2]",
            marks: 5,
            modelAnswer: "(a) v = u + at = 0 + 4 x 8 = 32 m/s. (b) Braking: 0 = 32 - 8t, so t = 4 s. (c) Phase 1 distance: (1/2) x 8 x 32 = 128 m. Phase 2 distance: (1/2) x 4 x 32 = 64 m. Total = 128 + 64 = 192 m.",
            markScheme: [
              "v = 32 m/s (1 mark)",
              "t = 32/8 = 4 s (1 mark)",
              "Correct method for braking time (1 mark)",
              "Phase 1: (1/2)(8)(32) = 128 m (1 mark)",
              "Phase 2: (1/2)(4)(32) = 64 m; total = 192 m (1 mark)",
            ],
            commonError: "In phase 2, using s = v x t = 32 x 4 = 128 m (using initial speed of braking phase rather than average).",
            difficulty: "challenge",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            hints: [
              "Phase 1: v = u + at. Phase 2: v = 0, u = 32, a = -8.",
              "Braking time: t = (0 - 32)/(-8) = 4 s.",
              "Each phase distance = area of triangle on v-t graph.",
            ],
            solutions: [
              {
                label: "Kinematic method",
                steps: [
                  "Phase 1: v = 4 x 8 = 32 m/s; s1 = (1/2)(8)(32) = 128 m",
                  "Phase 2: t = 32/8 = 4 s; s2 = (1/2)(4)(32) = 64 m",
                  "Total = 128 + 64 = 192 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq3-10",
            question: "A ball is thrown vertically downward from the top of a 60 m building with an initial speed of 5 m/s. Use g = 10 m/s². (a) Calculate the speed of the ball just before it hits the ground. [3] (b) Calculate the time taken to reach the ground. [3]",
            marks: 6,
            modelAnswer: "(a) Taking downward as positive: u = 5 m/s, a = 10 m/s², s = 60 m. v² = u² + 2as = 25 + 2 x 10 x 60 = 25 + 1200 = 1225. v = 35 m/s. (b) v = u + at gives 35 = 5 + 10t, so 10t = 30, so t = 3.0 s.",
            markScheme: [
              "Correct formula v² = u² + 2as (1 mark)",
              "v² = 25 + 1200 = 1225 (1 mark)",
              "v = 35 m/s (1 mark)",
              "v = u + at gives 35 = 5 + 10t (1 mark)",
              "t = 30/10 (1 mark)",
              "t = 3.0 s (1 mark)",
            ],
            commonError: "Using u = 0 (treating it as a dropped ball) rather than u = 5 m/s as given.",
            difficulty: "challenge",
            guideRef: "Solving Motion Problems",
            hints: [
              "u = 5 m/s (thrown downward), a = g = 10 m/s², s = 60 m.",
              "v² = u² + 2as = 5² + 2(10)(60).",
              "After finding v, use v = u + at to find t.",
            ],
            strategy: "Define positive direction; use v² = u² + 2as then v = u + at",
            solutions: [
              {
                label: "UVAST method",
                steps: [
                  "u = 5, a = 10, s = 60 (down positive)",
                  "v² = 25 + 1200 = 1225, so v = 35 m/s",
                  "35 = 5 + 10t, so t = 3.0 s",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-motion-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Ten structured questions on unit conversion, v-t graphs, raindrop forces, and three-phase journeys.",
        questions: [
          {
            id: "phys-motion-bq4-01",
            question: "A cyclist rides 3 km in 10 minutes. Calculate their average speed in m/s. [2]",
            marks: 2,
            modelAnswer: "Distance = 3000 m. Time = 10 x 60 = 600 s. Average speed = 3000/600 = 5.0 m/s.",
            markScheme: [
              "Convert: 3 km = 3000 m AND 10 min = 600 s (1 mark)",
              "Speed = 3000/600 = 5.0 m/s (1 mark)",
            ],
            commonError: "Not converting both distance and time to SI units — using 3/10 = 0.3 km/min.",
            difficulty: "warmup",
            guideRef: "Distance, Displacement, Speed and Velocity",
          },
          {
            id: "phys-motion-bq4-02",
            question: "A v-t graph shows a horizontal line at v = 6 m/s for 15 s. State the acceleration and calculate the distance. [2]",
            marks: 2,
            modelAnswer: "Acceleration = 0 m/s² (horizontal line means constant velocity). Distance = area = 6 x 15 = 90 m.",
            markScheme: [
              "Acceleration = 0 m/s² (1 mark)",
              "Distance = 6 x 15 = 90 m (1 mark)",
            ],
            commonError: "Confusing horizontal v-t graph (constant velocity) with horizontal d-t graph (stationary).",
            difficulty: "warmup",
            guideRef: "Speed–Time and Velocity–Time Graphs",
          },
          {
            id: "phys-motion-bq4-03",
            question: "A train decelerates uniformly from 40 m/s to rest. The deceleration is 2.5 m/s². (a) Find the time to stop. [2] (b) Find the stopping distance. [2]",
            marks: 4,
            modelAnswer: "(a) t = (v - u)/a = (0 - 40)/(-2.5) = 16 s. (b) Average speed = (40 + 0)/2 = 20 m/s. s = 20 x 16 = 320 m. (Or: v² = u² + 2as gives 0 = 1600 - 5s, so s = 320 m.)",
            markScheme: [
              "t = 40/2.5 = 16 s (1 mark)",
              "Correct method/formula (1 mark)",
              "Average speed = 20 m/s or v² = u² + 2as used (1 mark)",
              "s = 320 m (1 mark)",
            ],
            commonError: "Using s = v x t = 0 x 16 = 0 m (using the final speed of zero).",
            difficulty: "core",
            guideRef: "Acceleration",
            hints: [
              "t = (v - u)/a: v = 0, u = 40, a = -2.5.",
              "For distance: use average speed = (u + v)/2, then s = average speed x t.",
              "Or: v² = u² + 2as, solve for s.",
            ],
            solutions: [
              {
                label: "Two methods",
                steps: [
                  "t = (0 - 40)/(-2.5) = 16 s",
                  "Method 1: average speed = 20 m/s; s = 20 x 16 = 320 m",
                  "Method 2: 0 = 1600 + 2(-2.5)s, so 5s = 1600, so s = 320 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq4-04",
            question: "Describe fully the motion of an object whose distance-time graph is a curve whose gradient is increasing over time. [4]",
            marks: 4,
            modelAnswer: "A distance-time graph with an increasing gradient means the object is moving and its speed is increasing (accelerating). The gradient equals the speed at any instant; as the gradient increases, so does the speed. If the graph curves upward more steeply over time, the object is undergoing positive acceleration. This contrasts with a straight line (constant speed) or a curve with decreasing gradient (decelerating). A common example is free fall from rest, where the object speeds up continuously.",
            markScheme: [
              "Speed = gradient of d-t graph (1 mark)",
              "Increasing gradient means increasing speed (1 mark)",
              "Object is accelerating (1 mark)",
              "Example or further elaboration (e.g. a curved d-t means non-uniform acceleration) (1 mark)",
            ],
            commonError: "Confusing with a v-t graph — a positive slope on a v-t graph means constant acceleration, but a curved d-t graph means non-uniform acceleration.",
            difficulty: "core",
            guideRef: "Distance–Time Graphs",
            hints: [
              "Gradient of d-t graph = instantaneous speed.",
              "If gradient increases: speed increases.",
              "Increasing speed = accelerating.",
            ],
          },
          {
            id: "phys-motion-bq4-05",
            question: "Describe the forces acting on a raindrop as it falls from a cloud to the ground. Explain how those forces change as the drop falls, and what happens to its motion at each stage. [5]",
            marks: 5,
            modelAnswer: "When the raindrop first starts to fall, the only significant force is its weight (downward, constant). Drag (air resistance, upward) is initially very small because the drop is slow. By Newton's second law, the large net downward force gives it a large downward acceleration, so it speeds up. As speed increases, drag increases (drag is proportional to speed). The net downward force (weight minus drag) decreases, so acceleration decreases. The drop continues to speed up but more slowly. Eventually, drag equals weight; the net force is zero and acceleration is zero. The drop now falls at constant (terminal) velocity for the rest of the fall.",
            markScheme: [
              "At start: weight > drag; net force downward; accelerates quickly (1 mark)",
              "As speed increases, drag increases (1 mark)",
              "Net force decreases so acceleration decreases (still positive) (1 mark)",
              "Terminal velocity when drag = weight / net force = 0 (1 mark)",
              "Constant velocity maintained (1 mark)",
            ],
            commonError: "Saying the drop stops accelerating and then stops moving — at terminal velocity, the drop continues moving at constant speed.",
            difficulty: "core",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "Name both forces: weight (constant, down) and drag (increases with speed, up).",
              "Link net force to acceleration via Newton's 2nd law.",
              "Terminal velocity: net force = 0, acceleration = 0, constant speed.",
            ],
          },
          {
            id: "phys-motion-bq4-06",
            question: "A v-t graph for a cyclist shows: Phase 1 (0-6 s): uniform increase from 0 to 18 m/s; Phase 2 (6-16 s): constant 18 m/s; Phase 3 (16-21 s): uniform decrease from 18 m/s to 0. (a) Calculate the acceleration in Phase 1. [1] (b) Calculate the distance in Phase 2. [1] (c) Calculate the total distance. [2]",
            marks: 4,
            modelAnswer: "(a) a = (18 - 0)/6 = 3 m/s². (b) Phase 2 distance = 18 x 10 = 180 m. (c) Phase 1 (triangle): (1/2)(6)(18) = 54 m. Phase 3 (triangle): (1/2)(5)(18) = 45 m. Total = 54 + 180 + 45 = 279 m.",
            markScheme: [
              "a = 3 m/s² (1 mark)",
              "Phase 2 distance = 180 m (1 mark)",
              "Phase 1 = 54 m and Phase 3 = 45 m (1 mark)",
              "Total = 279 m (1 mark)",
            ],
            commonError: "Phase 3 duration = 21 - 16 = 5 s, not 21 s or 16 s.",
            difficulty: "core",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            hints: [
              "Phase 1: a = (v - u)/t. Phase 2: constant velocity rectangle. Phase 3: triangle.",
              "Phase 3 lasts 21 - 16 = 5 s.",
              "Total = areas of two triangles plus rectangle.",
            ],
            solutions: [
              {
                label: "Area method",
                steps: [
                  "Phase 1: (1/2)(6)(18) = 54 m",
                  "Phase 2: 18 x 10 = 180 m",
                  "Phase 3: (1/2)(5)(18) = 45 m",
                  "Total = 279 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq4-07",
            question: "A ball is rolled along a flat surface at 5 m/s and decelerates at 0.2 m/s² due to friction. (a) How far does the ball travel before stopping? [2] (b) How long does it take to stop? [1]",
            marks: 3,
            modelAnswer: "(a) v² = u² + 2as: 0 = 25 - 0.4s, so s = 25/0.4 = 62.5 m. (b) t = (v - u)/a = (0 - 5)/(-0.2) = 25 s.",
            markScheme: [
              "v² = u² + 2as used correctly (1 mark)",
              "s = 62.5 m (1 mark)",
              "t = 25 s (1 mark)",
            ],
            commonError: "Using a = 0.2 m/s² (positive) rather than a = -0.2 m/s² (deceleration) — getting a negative distance.",
            difficulty: "core",
            guideRef: "Solving Motion Problems",
            hints: [
              "v = 0 (stops), u = 5 m/s, a = -0.2 m/s².",
              "v² = u² + 2as: 0 = 25 + 2(-0.2)s, so 0.4s = 25.",
              "t = (v - u)/a = -5/(-0.2) = 25 s.",
            ],
            solutions: [
              {
                label: "UVAST",
                steps: [
                  "v = 0, u = 5, a = -0.2",
                  "v² = u² + 2as: 0 = 25 - 0.4s, so s = 62.5 m",
                  "t = (0 - 5)/(-0.2) = 25 s",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq4-08",
            question: "A cyclist accelerates from 4 m/s to 16 m/s over 150 m. (a) Calculate the acceleration. [3] (b) Calculate the time taken. [2]",
            marks: 5,
            modelAnswer: "(a) v² = u² + 2as: 256 = 16 + 2 x a x 150, so 240 = 300a, so a = 0.8 m/s². (b) v = u + at gives 16 = 4 + 0.8t, so 12 = 0.8t, so t = 15 s.",
            markScheme: [
              "v² = u² + 2as with correct values (1 mark)",
              "256 = 16 + 300a (1 mark)",
              "a = 0.8 m/s² (1 mark)",
              "v = u + at used (1 mark)",
              "t = 15 s (1 mark)",
            ],
            commonError: "Using a = (v - u)/t before finding t (circular — need to use v² = u² + 2as first since time is not given).",
            difficulty: "challenge",
            guideRef: "Solving Motion Problems",
            hints: [
              "u = 4 m/s, v = 16 m/s, s = 150 m — time is not given, so use v² = u² + 2as.",
              "16² = 4² + 2(a)(150).",
              "Then t = (v - u)/a.",
            ],
            strategy: "When time is unknown, use v² = u² + 2as; then find t",
            solutions: [
              {
                label: "v² = u² + 2as then v = u + at",
                steps: [
                  "16² = 4² + 2a(150): 256 = 16 + 300a, so a = 0.8 m/s²",
                  "v = u + at: 16 = 4 + 0.8t, so t = 12/0.8 = 15 s",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq4-09",
            question: "An object is released from rest and falls through a fluid. Its velocity-time graph is a curve that starts steeply and flattens off to a horizontal line at v = 4 m/s. The object has mass 0.2 kg and g = 10 m/s². (a) Calculate the weight of the object. [1] (b) State the drag force when the object reaches terminal velocity and explain your reasoning. [2] (c) Explain the shape of the v-t curve before terminal velocity is reached. [2]",
            marks: 5,
            modelAnswer: "(a) W = mg = 0.2 x 10 = 2 N. (b) Drag force at terminal velocity = 2 N (equal to weight). At terminal velocity, acceleration = 0, so net force = 0. Therefore drag = weight = 2 N. (c) Initially drag is small, so net force is large, giving large acceleration — curve is steep. As velocity increases, drag increases, reducing the net force and hence the acceleration. The curve becomes less steep (gradient decreases). The acceleration approaches zero as terminal velocity is reached.",
            markScheme: [
              "W = 0.2 x 10 = 2 N (1 mark)",
              "Drag = 2 N (1 mark)",
              "Because net force = 0 at terminal velocity (1 mark)",
              "Curve steep at first: large net force, large acceleration (1 mark)",
              "Curve flattens: increasing drag reduces net force and acceleration (1 mark)",
            ],
            commonError: "Not explaining WHY drag equals weight — simply stating drag = weight at terminal velocity without linking to F_net = 0.",
            difficulty: "challenge",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "W = mg. At terminal velocity, a = 0, so F_net = 0: drag = weight.",
              "The curve shape reflects how acceleration changes — steep = large a, flat = small a.",
              "Link each part of the curve to the net force at that stage.",
            ],
          },
          {
            id: "phys-motion-bq4-10",
            question: "A train accelerates from rest at 1.5 m/s² for 40 s. It then travels at constant speed for a further 5 minutes. It then brakes at 2 m/s² to rest. (a) Find the constant speed reached after acceleration. [1] (b) Find the total distance of the journey. [5]",
            marks: 6,
            modelAnswer: "(a) v = u + at = 0 + 1.5 x 40 = 60 m/s. (b) Phase 1: s1 = (1/2)(1.5)(40²) = (1/2)(1.5)(1600) = 1200 m. Phase 2 time: 5 min = 300 s. Phase 2 distance: s2 = 60 x 300 = 18000 m. Phase 3 braking: v = 0, u = 60, a = -2. s3 = (60²)/(2 x 2) = 3600/4 = 900 m (or: average speed 30 m/s x 30 s = 900 m). Total = 1200 + 18000 + 900 = 20100 m.",
            markScheme: [
              "v = 60 m/s (1 mark)",
              "Phase 1: s1 = (1/2)(1.5)(1600) = 1200 m (1 mark)",
              "Phase 2: convert 5 min = 300 s (1 mark)",
              "Phase 2: s2 = 60 x 300 = 18000 m (1 mark)",
              "Phase 3: braking distance = 900 m (1 mark)",
              "Total = 20100 m (1 mark)",
            ],
            commonError: "Not converting 5 minutes to seconds for the constant-speed phase.",
            difficulty: "challenge",
            guideRef: "Solving Motion Problems",
            hints: [
              "Phase 1: v = 0 + 1.5 x 40. Phase 2: t = 5 min = 300 s.",
              "Phase 3 braking: v² = u² + 2as, v = 0, u = 60, a = -2.",
              "Sum all three distances.",
            ],
            strategy: "Three-phase journey: handle each phase separately",
            solutions: [
              {
                label: "Phase-by-phase calculation",
                steps: [
                  "Phase 1: v = 60 m/s; s1 = (1/2)(1.5)(1600) = 1200 m",
                  "Phase 2: t = 300 s; s2 = 60 x 300 = 18000 m",
                  "Phase 3: 0 = 3600 - 4s3, so s3 = 900 m",
                  "Total = 1200 + 18000 + 900 = 20100 m",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
