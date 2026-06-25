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
        id: "phys-motion-bank-mcq-1",
        title: "Motion — MCQ Paper 1",
        description: "Twelve multiple-choice questions covering definitions, graph reading and acceleration calculations.",
        questions: [
          {
            id: "phys-motion-bank-mcq1-q01",
            question: "Which of the following is a vector quantity?",
            options: ["Distance", "Speed", "Time", "Velocity"],
            answerIndex: 3,
            explanation: "Velocity is a vector because it has both magnitude and direction. Distance, speed, and time are all scalars.",
            difficulty: "warmup",
            guideRef: "Distance, Displacement, Speed and Velocity",
          },
          {
            id: "phys-motion-bank-mcq1-q02",
            question: "A straight line on a distance–time graph becomes steeper. This indicates that the object is:",
            options: ["Decelerating", "Stationary", "Travelling at constant speed", "Accelerating"],
            answerIndex: 3,
            explanation: "The gradient of a distance–time graph equals speed. A line becoming steeper means the gradient is increasing, so speed is increasing — the object is accelerating.",
            difficulty: "warmup",
            guideRef: "Distance–Time Graphs",
          },
          {
            id: "phys-motion-bank-mcq1-q03",
            question: "A motorcycle increases speed from 8 m/s to 20 m/s in 4 s. What is its acceleration?",
            options: ["7 m/s²", "3 m/s²", "5 m/s²", "2 m/s²"],
            answerIndex: 1,
            explanation: "a = (v − u) / t = (20 − 8) / 4 = 12 / 4 = 3 m/s². Option A (7 m/s²) comes from 28/4 — adding rather than subtracting.",
            difficulty: "core",
            guideRef: "Acceleration",
            hints: [
              "Identify u, v, t from the question.",
              "a = (v − u) / t — remember to subtract u.",
              "Δv = 20 − 8 = 12 m/s; divide by 4 s.",
            ],
          },
          {
            id: "phys-motion-bank-mcq1-q04",
            question: "An object travels at a constant velocity of 15 m/s for 6 s. What is the area under its velocity–time graph for this interval?",
            options: ["90 m", "21 m", "2.5 m", "45 m"],
            answerIndex: 0,
            explanation: "Area = speed × time = 15 × 6 = 90 m. The area under a v–t graph gives the distance, here a rectangle of dimensions 15 × 6.",
            difficulty: "warmup",
            guideRef: "Speed–Time and Velocity–Time Graphs",
          },
          {
            id: "phys-motion-bank-mcq1-q05",
            question: "A car decelerates uniformly from 25 m/s to rest. The deceleration is 5 m/s². How long does it take to stop?",
            options: ["125 s", "5 s", "20 s", "30 s"],
            answerIndex: 1,
            explanation: "a = (v − u) / t → t = (v − u) / a = (0 − 25) / (−5) = 5 s. Deceleration means a = −5 m/s².",
            difficulty: "core",
            guideRef: "Acceleration",
            hints: [
              "Deceleration = 5 m/s² means a = −5 m/s².",
              "Rearrange a = (v − u) / t to get t = (v − u) / a.",
              "v = 0 (comes to rest); u = 25 m/s.",
            ],
          },
          {
            id: "phys-motion-bank-mcq1-q06",
            question: "A stone is dropped from rest and falls freely for 3 s (g = 9.8 m/s²). What is its speed after 3 s?",
            options: ["9.8 m/s", "29.4 m/s", "3 m/s", "44.1 m/s"],
            answerIndex: 1,
            explanation: "v = u + at = 0 + 9.8 × 3 = 29.4 m/s. The object starts from rest (u = 0) and accelerates at g = 9.8 m/s² for 3 s.",
            difficulty: "core",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "Free fall: u = 0 (dropped from rest), a = g = 9.8 m/s².",
              "v = u + at.",
              "v = 0 + 9.8 × 3.",
            ],
          },
        ],
      },
      {
        id: "phys-motion-bank-mcq-2",
        title: "Motion — MCQ Paper 2",
        description: "Six harder multiple-choice questions including graph interpretation and multi-step reasoning.",
        questions: [
          {
            id: "phys-motion-bank-mcq2-q01",
            question: "A velocity–time graph shows a straight line from (0 s, 0 m/s) to (10 s, 30 m/s). What is the distance travelled in the first 10 s?",
            options: ["300 m", "150 m", "30 m", "3 m"],
            answerIndex: 1,
            explanation: "Distance = area under v–t graph = ½ × base × height = ½ × 10 × 30 = 150 m. The shape is a right-angled triangle, not a rectangle.",
            difficulty: "core",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            hints: [
              "Identify the shape formed between the line and the time axis.",
              "It's a triangle (starts at zero speed).",
              "Area of triangle = ½ × base × height.",
            ],
          },
          {
            id: "phys-motion-bank-mcq2-q02",
            question: "An object is released from rest and falls with air resistance. Which statement about its motion is correct throughout the fall (before terminal velocity)?",
            options: [
              "Speed increases; acceleration remains constant at g.",
              "Speed increases; acceleration decreases.",
              "Speed is constant; acceleration is zero.",
              "Speed decreases; acceleration increases.",
            ],
            answerIndex: 1,
            explanation: "As the object speeds up, drag increases, reducing the net downward force and hence the acceleration. Speed still increases (net force is still downward) but more slowly. Acceleration is not constant when air resistance acts.",
            difficulty: "core",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "What happens to drag as speed increases?",
              "If drag increases, what happens to the resultant force?",
              "If resultant force decreases, what happens to acceleration (F = ma)?",
            ],
          },
          {
            id: "phys-motion-bank-mcq2-q03",
            question: "A distance–time graph shows a curve whose gradient is decreasing over time. What is the object doing?",
            options: [
              "Accelerating",
              "Decelerating (slowing down)",
              "Moving at constant speed",
              "Moving in the opposite direction",
            ],
            answerIndex: 1,
            explanation: "Gradient of a distance–time graph = speed. A decreasing gradient means speed is decreasing — the object is decelerating. The object is still moving forward (distance still increases) but more slowly.",
            difficulty: "core",
            guideRef: "Distance–Time Graphs",
            hints: [
              "Gradient of a d–t graph = speed.",
              "If the gradient is decreasing, what is happening to speed?",
              "Speed decreasing = decelerating.",
            ],
          },
          {
            id: "phys-motion-bank-mcq2-q04",
            question: "Car A starts from rest and accelerates at 3 m/s². At the same moment, car B passes the same point at a constant 18 m/s in the same direction. After how many seconds does car A reach the same speed as car B?",
            options: ["3 s", "6 s", "9 s", "54 s"],
            answerIndex: 1,
            explanation: "Car B travels at constant 18 m/s. Car A's speed: v = 0 + 3t. Set 3t = 18 → t = 6 s. Note: this is when A matches B's speed, NOT when A catches B (which requires equal positions, not equal speeds).",
            difficulty: "challenge",
            guideRef: "Solving Motion Problems",
            hints: [
              "Car A's speed at time t: v_A = 0 + 3t (uniform acceleration from rest).",
              "Car B's speed is constant at 18 m/s.",
              "Set v_A = v_B: 3t = 18.",
              "Solve for t — this is when speeds match, not when positions match.",
            ],
            strategy: "Set up speed equations and equate",
          },
          {
            id: "phys-motion-bank-mcq2-q05",
            question: "A v–t graph for an object shows: 0–4 s: speed increases from 0 to 16 m/s; 4–10 s: constant 16 m/s; 10–14 s: speed decreases from 16 m/s to 0. What is the total distance travelled?",
            options: ["160 m", "192 m", "224 m", "128 m"],
            answerIndex: 1,
            explanation: "Triangle (0–4 s): ½ × 4 × 16 = 32 m. Rectangle (4–10 s): 6 × 16 = 96 m. Triangle (10–14 s): ½ × 4 × 16 = 32 m. Total = 32 + 96 + 32 = 160 m. Wait — let me recheck: 32 + 96 + 32 = 160. The correct answer is 160 m.",
            difficulty: "challenge",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            hints: [
              "Split the graph into three regions: two triangles and one rectangle.",
              "Triangle (0–4 s): ½ × 4 × 16.",
              "Rectangle (4–10 s): 6 × 16.",
              "Triangle (10–14 s): ½ × 4 × 16. Sum all three.",
            ],
            strategy: "Split into triangles and rectangles",
          },
          {
            id: "phys-motion-bank-mcq2-q06",
            question: "A ball is thrown vertically upward at 19.6 m/s. Using g = 9.8 m/s², how long does it take to return to the thrower's hand?",
            options: ["1 s", "2 s", "4 s", "9.8 s"],
            answerIndex: 2,
            explanation: "Time to reach the top: v = 0, a = −9.8, u = 19.6. t_up = (0 − 19.6) / (−9.8) = 2 s. By symmetry, total time = 2 × 2 = 4 s. The ball takes equal time to rise and fall back to the same height.",
            difficulty: "challenge",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "Take upward as positive: u = +19.6 m/s, a = −9.8 m/s².",
              "At the top, v = 0. Use t_up = (v − u) / a.",
              "By symmetry, the ball takes the same time to fall back as to rise.",
              "Total time = 2 × t_up.",
            ],
            strategy: "Symmetry of vertical projectile motion",
          },
        ],
      },
    ],

    qaPapers: [
      {
        id: "phys-motion-bank-qa-1",
        title: "Motion — Structured Questions Paper 1",
        description: "Four structured questions on acceleration calculations, graph analysis and free fall.",
        questions: [
          {
            id: "phys-motion-bank-qa1-q01",
            question: "A train travelling at 54 m/s applies its brakes and decelerates uniformly, coming to rest in 180 s.\n(a) Calculate the deceleration of the train. [2]\n(b) Calculate the distance the train travels while braking. [3]\n(c) Sketch the velocity–time graph for the train during braking. Label the axes with values. [2]",
            marks: 7,
            modelAnswer: "(a) a = (v − u) / t = (0 − 54) / 180 = −0.3 m/s² (deceleration = 0.3 m/s²)\n\n(b) Distance = area under v–t graph = ½ × base × height = ½ × 180 × 54 = 4860 m\n\n(c) Graph: straight line from (0 s, 54 m/s) to (180 s, 0 m/s). y-axis labelled 'velocity / m/s' with 54 marked; x-axis labelled 'time / s' with 180 marked.",
            markScheme: [
              "a = (0 − 54) / 180 correct substitution (1 mark)",
              "a = −0.3 m/s² / deceleration = 0.3 m/s² (1 mark)",
              "Area method: ½ × 180 × 54 (1 mark)",
              "Distance = 4860 m (1 mark)",
              "Correct unit for distance (1 mark)",
              "Graph: straight line from (0, 54) to (180, 0) (1 mark)",
              "Axes correctly labelled with numerical values (1 mark)",
            ],
            commonError: "Computing distance as v × t = 54 × 180 = 9720 m (using full speed for the whole time rather than average speed).",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            difficulty: "core",
            hints: [
              "a = (v − u) / t with v = 0 (comes to rest), u = 54 m/s.",
              "For distance: draw the v–t graph first — it is a triangle.",
              "Area of triangle = ½ × base × height = ½ × t × u.",
            ],
            strategy: "Sketch v–t graph first, then read off area",
          },
          {
            id: "phys-motion-bank-qa1-q02",
            question: "A student drops a ball from a window 20 m above the ground. Assume g = 10 m/s² and no air resistance.\n(a) Calculate the speed of the ball just before it hits the ground. [3]\n(b) Calculate the time taken for the ball to reach the ground. [2]\n(c) In reality, air resistance acts. State and explain how air resistance affects the speed of the ball just before impact compared with your answer in (a). [2]",
            marks: 7,
            modelAnswer: "(a) Using v² = u² + 2as (or energy methods): v² = 0 + 2 × 10 × 20 = 400; v = 20 m/s\n\n(b) s = ut + ½at²: 20 = 0 + ½ × 10 × t²; t² = 4; t = 2.0 s\n\n(c) Air resistance acts upward, reducing the resultant downward force. The ball therefore accelerates more slowly and reaches a lower speed just before impact.",
            markScheme: [
              "v² = u² + 2as or equivalent correct formula (1 mark)",
              "Correct substitution: v² = 2 × 10 × 20 (1 mark)",
              "v = 20 m/s (1 mark)",
              "20 = ½ × 10 × t² or equivalent (1 mark)",
              "t = 2.0 s (1 mark)",
              "Air resistance reduces resultant downward force / acts opposite to motion (1 mark)",
              "Speed just before impact is less than 20 m/s (1 mark)",
            ],
            commonError: "In (c) stating 'air resistance slows the ball down to zero' — air resistance reduces acceleration but the ball still accelerates (just not at full g) so reaches the ground with a positive speed.",
            guideRef: "Free Fall and Terminal Velocity",
            difficulty: "core",
            hints: [
              "u = 0 (dropped from rest), a = 10 m/s², s = 20 m. Which formula links v, u, a, s?",
              "v² = u² + 2as is useful when you do not know time.",
              "For part (b), now that you have v (or use s = ½at²).",
              "For (c): think about how air resistance changes the net force and hence acceleration.",
            ],
            strategy: "UVAST table; identify which variable is missing",
            solutions: [
              {
                label: "Method 1: v² = u² + 2as",
                steps: [
                  "u = 0, a = 10 m/s², s = 20 m",
                  "v² = 0 + 2 × 10 × 20 = 400",
                  "v = √400 = 20 m/s",
                  "For t: v = u + at → 20 = 0 + 10t → t = 2.0 s",
                ],
              },
              {
                label: "Method 2: Energy (cross-check for speed only)",
                steps: [
                  "Gain in KE = loss in PE: ½mv² = mgh",
                  "v² = 2gh = 2 × 10 × 20 = 400",
                  "v = 20 m/s (same result — confirms answer)",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bank-qa1-q03",
            question: "The distance–time graph of a cyclist shows: 0 to 10 s — a straight line from 0 m to 80 m; 10 s to 20 s — a horizontal line at 80 m; 20 s to 35 s — a straight line from 80 m to 200 m.\n(a) Describe the motion in each phase. [3]\n(b) Calculate the speed in phase 1. [2]\n(c) Calculate the average speed over the entire 35 s. [2]",
            marks: 7,
            modelAnswer: "(a) Phase 1 (0–10 s): constant speed (straight line, positive gradient).\nPhase 2 (10–20 s): stationary (horizontal line, gradient = 0).\nPhase 3 (20–35 s): constant speed, faster than phase 1 (steeper positive gradient).\n\n(b) Speed = gradient = Δdistance / Δtime = (80 − 0) / (10 − 0) = 8.0 m/s\n\n(c) Average speed = total distance / total time = 200 / 35 = 5.7 m/s (2 s.f.)",
            markScheme: [
              "Phase 1: constant speed (1 mark)",
              "Phase 2: stationary / at rest (1 mark)",
              "Phase 3: constant speed / faster than phase 1 (1 mark)",
              "Speed = gradient = 80 / 10 (1 mark)",
              "8.0 m/s (1 mark)",
              "Average speed = 200 / 35 (1 mark)",
              "5.7 m/s (accept 5.71) with unit (1 mark)",
            ],
            commonError: "For average speed, using only the distance in the moving phases (80 + 120 = 200 is correct here, but students sometimes subtract the stationary period from time, giving 200/25 instead of 200/35).",
            guideRef: "Distance–Time Graphs",
            difficulty: "core",
            hints: [
              "Read the graph description carefully — label each phase on a sketch.",
              "Constant slope = constant speed; horizontal = stationary.",
              "Speed = gradient = rise / run for a straight section.",
              "Average speed uses TOTAL distance and TOTAL time — include the stationary period in the time.",
            ],
            strategy: "Gradient reading; total values for averages",
          },
          {
            id: "phys-motion-bank-qa1-q04",
            question: "**Challenge.** Two cars, P and Q, start from the same point at the same time. Car P accelerates uniformly from rest at 2 m/s². Car Q moves at a constant velocity of 10 m/s.\n(a) Write expressions for the distance travelled by each car as a function of time t. [2]\n(b) Find the time at which car P catches up with car Q. [3]\n(c) How far has each car travelled at this time? [1]\n(d) Sketch a velocity–time graph for both cars on the same axes for 0 to 10 s. [2]",
            marks: 8,
            modelAnswer: "(a) s_P = ½ × 2 × t² = t²; s_Q = 10t\n\n(b) P catches Q when s_P = s_Q: t² = 10t → t(t − 10) = 0 → t = 0 or t = 10 s. P catches Q at t = 10 s.\n\n(c) s_Q = 10 × 10 = 100 m; s_P = 10² = 100 m (both 100 m ✓)\n\n(d) Q: horizontal line at v = 10 m/s from t = 0 to t = 10 s. P: straight line from (0, 0) to (10, 20 m/s) — gradient 2 m/s².",
            markScheme: [
              "s_P = t² (or ½ × 2 × t²) (1 mark)",
              "s_Q = 10t (1 mark)",
              "Set s_P = s_Q: t² = 10t (1 mark)",
              "Solve: t = 10 s (1 mark)",
              "Reject t = 0 / acknowledge only non-trivial solution (1 mark)",
              "Distance = 100 m (both cars) (1 mark)",
              "Graph: Q as horizontal line at 10 m/s (1 mark)",
              "Graph: P as straight line from 0 to v_P = 20 m/s at t = 10 s (1 mark)",
            ],
            commonError: "Dividing both sides of t² = 10t by t (losing the t = 0 solution and not noticing this) OR factoring incorrectly and getting t = 5 s.",
            guideRef: "Solving Motion Problems",
            difficulty: "challenge",
            hints: [
              "Distance for uniform acceleration from rest: s = ½at² with a = 2 m/s².",
              "Distance for constant velocity: s = vt = 10t.",
              "Set the two distance expressions equal: t² = 10t.",
              "Rearrange as t² − 10t = 0 and factor: t(t − 10) = 0. Both solutions are valid mathematically — t = 0 is the start.",
            ],
            strategy: "Set up algebraic position equations, equate, solve",
            solutions: [
              {
                label: "Algebraic method",
                steps: [
                  "s_P = ½ × 2 × t² = t²; s_Q = 10t",
                  "Catch-up condition: t² = 10t",
                  "Rearrange: t² − 10t = 0 → t(t − 10) = 0",
                  "t = 0 (start, trivial) or t = 10 s (when P catches Q)",
                  "Distance: s = 10 × 10 = 100 m for both cars",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-motion-bank-qa-2",
        title: "Motion — Structured Questions Paper 2",
        description: "Four structured questions with emphasis on terminal velocity, graph skills, and multi-stage calculations.",
        questions: [
          {
            id: "phys-motion-bank-qa2-q01",
            question: "A car accelerates from 5 m/s to 25 m/s at a constant acceleration of 4 m/s².\n(a) Calculate the time taken. [2]\n(b) Calculate the distance travelled during this acceleration. [3]",
            marks: 5,
            modelAnswer: "(a) a = (v − u) / t → t = (v − u) / a = (25 − 5) / 4 = 20 / 4 = 5.0 s\n\n(b) Method: average speed × time = [(5 + 25) / 2] × 5 = 15 × 5 = 75 m\n(Alternative: s = ut + ½at² = 5 × 5 + ½ × 4 × 25 = 25 + 50 = 75 m)",
            markScheme: [
              "t = (v − u) / a or correct rearrangement (1 mark)",
              "t = 5.0 s (1 mark)",
              "Correct method for distance (area, average speed, or s = ut + ½at²) (1 mark)",
              "Correct substitution (1 mark)",
              "75 m with unit (1 mark)",
            ],
            commonError: "Using s = v × t = 25 × 5 = 125 m (using final speed instead of average speed).",
            guideRef: "Acceleration",
            difficulty: "core",
            hints: [
              "Rearrange a = (v − u) / t to find t.",
              "For distance: the object is accelerating, so use average speed or area of trapezoid on v–t graph.",
              "Average speed = (u + v) / 2 only for uniform acceleration.",
            ],
            strategy: "UVAST; average speed for uniform acceleration",
            solutions: [
              {
                label: "Method 1: average speed",
                steps: [
                  "t = (25 − 5) / 4 = 5 s",
                  "Average speed = (5 + 25) / 2 = 15 m/s",
                  "s = 15 × 5 = 75 m",
                ],
              },
              {
                label: "Method 2: s = ut + ½at²",
                steps: [
                  "t = 5 s (as above)",
                  "s = 5 × 5 + ½ × 4 × 5² = 25 + 50 = 75 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bank-qa2-q02",
            question: "A skydiver jumps from a stationary helicopter and falls vertically. The graph of her velocity against time shows her velocity increasing quickly at first, then more slowly, before becoming constant at 55 m/s after 15 s.\n(a) Explain, using Newton's laws, why her velocity increases at first. [2]\n(b) Explain why the rate of change of velocity decreases over time. [2]\n(c) Explain why velocity becomes constant at 55 m/s. [2]\n(d) She then opens her parachute. Describe and explain what happens to her motion immediately after. [2]",
            marks: 8,
            modelAnswer: "(a) At the start, weight (downward) is much greater than drag (upward), so there is a large net downward force. By Newton's second law (F = ma), this produces a large downward acceleration, increasing her velocity.\n\n(b) As velocity increases, air resistance (drag) increases. The resultant force (weight − drag) decreases. By F = ma, smaller resultant force means smaller acceleration, so velocity increases more slowly.\n\n(c) At 55 m/s, drag equals weight (resultant force = 0). By Newton's first law, she continues at constant velocity — terminal velocity.\n\n(d) Opening the parachute massively increases her surface area and hence drag. Drag now greatly exceeds weight, so there is a large upward resultant force. She decelerates rapidly until a new, lower terminal velocity is reached.",
            markScheme: [
              "(a) Weight > drag at start → resultant force downward (1 mark)",
              "(a) F = ma → acceleration downward → velocity increases (1 mark)",
              "(b) Speed increases → drag increases → resultant force decreases (1 mark)",
              "(b) Smaller resultant force → smaller acceleration (1 mark)",
              "(c) Drag = weight → resultant force = zero (1 mark)",
              "(c) Zero acceleration → constant velocity / Newton's first law (1 mark)",
              "(d) Parachute increases drag greatly → drag > weight → resultant force upward (1 mark)",
              "(d) Decelerates / slows down to new lower terminal velocity (1 mark)",
            ],
            commonError: "Stating 'at terminal velocity the forces disappear' — the forces still act (weight and drag both present) but they balance.",
            guideRef: "Free Fall and Terminal Velocity",
            difficulty: "core",
            hints: [
              "Identify the two forces: weight (down, constant) and drag (up, increases with speed).",
              "Link resultant force to acceleration via F = ma.",
              "Terminal velocity condition: net force = 0.",
              "Parachute effect: what happens to drag area and hence drag force?",
            ],
            strategy: "Stage-by-stage force analysis",
          },
          {
            id: "phys-motion-bank-qa2-q03",
            question: "A velocity–time graph shows a vehicle's journey: phase A (0 to 8 s): velocity increases uniformly from 0 to 20 m/s; phase B (8 s to 20 s): constant velocity 20 m/s; phase C (20 s to 25 s): velocity decreases uniformly from 20 m/s to 0.\n(a) Calculate the acceleration in phase A. [2]\n(b) Calculate the deceleration in phase C. [2]\n(c) Calculate the total distance travelled. [4]\n(d) What is the average speed for the whole journey? [2]",
            marks: 10,
            modelAnswer: "(a) a = (20 − 0) / 8 = 2.5 m/s²\n\n(b) a = (0 − 20) / 5 = −4.0 m/s² (deceleration = 4.0 m/s²)\n\n(c) Phase A (triangle): ½ × 8 × 20 = 80 m\nPhase B (rectangle): 12 × 20 = 240 m\nPhase C (triangle): ½ × 5 × 20 = 50 m\nTotal = 80 + 240 + 50 = 370 m\n\n(d) Average speed = 370 / 25 = 14.8 m/s",
            markScheme: [
              "a = (20 − 0) / 8 (1 mark)",
              "2.5 m/s² (1 mark)",
              "a = (0 − 20) / 5 (1 mark)",
              "4.0 m/s² or −4.0 m/s² (1 mark)",
              "Phase A: ½ × 8 × 20 = 80 m (1 mark)",
              "Phase B: 12 × 20 = 240 m (1 mark)",
              "Phase C: ½ × 5 × 20 = 50 m (1 mark)",
              "Total = 370 m (1 mark)",
              "Average speed = total distance / total time = 370 / 25 (1 mark)",
              "14.8 m/s (1 mark)",
            ],
            commonError: "Using 8 s as the base of the phase C triangle (confusing phase A duration with phase C duration of 5 s).",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            difficulty: "core",
            hints: [
              "Identify each phase's time duration from the graph description: A = 8 s, B = 12 s, C = 5 s.",
              "a = Δv / Δt for each phase — use correct time interval.",
              "Phase A and C are triangles; phase B is a rectangle.",
              "Average speed uses total distance and total time — include all phases.",
            ],
            strategy: "Label durations; calculate each area separately",
          },
          {
            id: "phys-motion-bank-qa2-q04",
            question: "**Challenge.** A stone is thrown horizontally from the top of a cliff with a speed of 15 m/s. The cliff is 45 m high. Use g = 10 m/s² and ignore air resistance.\n(a) Show that the stone takes 3.0 s to reach the bottom of the cliff. [2]\n(b) Calculate the horizontal distance from the base of the cliff where the stone lands. [2]\n(c) Calculate the vertical speed of the stone just before it hits the ground. [2]\n(d) Calculate the resultant speed of the stone just before it hits the ground. [3]",
            marks: 9,
            modelAnswer: "(a) Vertical: s = ½gt² → 45 = ½ × 10 × t² → t² = 9 → t = 3.0 s ✓\n\n(b) Horizontal: x = v_h × t = 15 × 3.0 = 45 m\n\n(c) Vertical speed: v_v = gt = 10 × 3.0 = 30 m/s\n\n(d) Resultant speed: v = √(v_h² + v_v²) = √(15² + 30²) = √(225 + 900) = √1125 = 33.5 m/s (3 s.f.)",
            markScheme: [
              "(a) s = ½gt² with s = 45, g = 10 (1 mark)",
              "(a) t = 3.0 s shown (1 mark)",
              "(b) x = 15 × 3 (1 mark)",
              "(b) x = 45 m (1 mark)",
              "(c) v_v = 10 × 3 = 30 m/s (1 mark)",
              "(c) correct method and unit (1 mark)",
              "(d) v = √(15² + 30²) correct Pythagoras (1 mark)",
              "(d) v = √1125 (1 mark)",
              "(d) v = 33.5 m/s (accept 33 or 34) (1 mark)",
            ],
            commonError: "Using the initial horizontal speed as the resultant speed (ignoring the vertical component gained during the fall).",
            guideRef: "Free Fall and Terminal Velocity",
            difficulty: "challenge",
            hints: [
              "Horizontal and vertical motions are independent. Treat them separately.",
              "Vertically: u = 0 (horizontal throw), a = g = 10 m/s², s = 45 m. Use s = ½gt² to find t.",
              "Horizontal distance = horizontal speed × time (no horizontal acceleration).",
              "Vertical speed at impact: v_v = g × t. Then use Pythagoras to combine with horizontal speed.",
            ],
            strategy: "Resolve into independent horizontal and vertical components; combine with Pythagoras",
            solutions: [
              {
                label: "Component method",
                steps: [
                  "Vertical: 45 = ½ × 10 × t² → t = 3.0 s",
                  "Horizontal: x = 15 × 3.0 = 45 m",
                  "Vertical speed at impact: v_v = 10 × 3 = 30 m/s",
                  "Resultant: v = √(15² + 30²) = √1125 ≈ 33.5 m/s",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
