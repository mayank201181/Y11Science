import type { Topic } from "../types";

export const physMotion: Topic = {
  id: "phys-motion",
  title: "Motion",
  subject: "physics",
  icon: "🏃",
  blurb: "Distance, displacement, speed, velocity, acceleration and motion graphs — the foundations of mechanics.",
  intro: "Motion is the study of how objects move — how far they travel, how fast, and whether they are speeding up or slowing down. In this topic you will build the language of kinematics (distance, displacement, speed, velocity, acceleration), master distance–time and velocity–time graphs, use the equations of motion (SUVAT) for constant acceleration, learn how speed, acceleration and g are measured, and apply these ideas to free fall and terminal velocity. These concepts underpin almost every other area of physics.",

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

**Deceleration** is simply negative acceleration — the object is slowing down (velocity and acceleration point in opposite directions). IGCSE examiners accept "deceleration = x m/s²" or "acceleration = −x m/s²" as equivalent.

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
      heading: "Equations of Motion (SUVAT)",
      body: `When acceleration is **uniform (constant)**, the motion is linked by a set of equations that connect five quantities. Learn the symbols — this is the *UVAST* (or *SUVAT*) table:

- **s** = displacement (m)
- **u** = initial velocity (m/s)
- **v** = final velocity (m/s)
- **a** = acceleration (m/s²)
- **t** = time (s)

**The three IGCSE equations of motion:**

> v = u + at

> s = ((u + v) / 2) × t     (distance = average velocity × time)

> v² = u² + 2as

Edexcel 4PH1 quotes the last one in words: **(final velocity)² = (initial velocity)² + 2 × acceleration × distance.** A fourth, **s = ut + ½at²**, is also widely used (it follows by combining the first two), and Cambridge accepts it.

**Choosing the right equation.** List what you know and what you want, then pick the equation that contains exactly those quantities:
- Missing **s** (distance not involved) → use **v = u + at**.
- Missing **a** → use **s = ((u + v)/2) × t**.
- Missing **t** (time not involved) → use **v² = u² + 2as**.

**Worked example 1 (no time given).** A car accelerates from 8 m/s to 20 m/s over 56 m. Find a.
- Time is unknown, so use v² = u² + 2as: 20² = 8² + 2 × a × 56 → 400 = 64 + 112a → a = 336 / 112 = **3.0 m/s²**.

**Worked example 2 (find distance).** A train starts from rest and accelerates at 0.5 m/s² for 40 s.
- s = ut + ½at² = 0 + ½ × 0.5 × 40² = ½ × 0.5 × 1600 = **400 m**.

**Worked example 3 (find final velocity).** A cyclist at 4 m/s accelerates at 1.2 m/s² for 5 s.
- v = u + at = 4 + 1.2 × 5 = **10 m/s**.`,

      keyPoints: [
        "SUVAT equations apply ONLY when acceleration is uniform (constant).",
        "v = u + at (no s); s = ((u + v)/2) × t (no a); v² = u² + 2as (no t).",
        "s = ut + ½at² is the combined form, accepted by both boards.",
        "Edexcel states v² = u² + 2as in words: (final velocity)² = (initial velocity)² + 2 × acceleration × distance.",
        "Choose the equation that omits the quantity you neither know nor want.",
        "For an object starting from rest, u = 0, which simplifies every equation.",
      ],

      discovery: {
        problem: "A car brakes from 30 m/s to rest with a uniform deceleration of 5 m/s². You are NOT told the time. How far does it travel while stopping?",
        idea: "Time is missing, so reach for v² = u² + 2as. Deceleration means a = −5 m/s². 0 = 30² + 2(−5)s → 0 = 900 − 10s → s = 90 m. The trick is recognising which variable is absent and matching it to the equation that leaves it out.",
      },

      whyItWorks: "These equations come straight from the velocity–time graph for constant acceleration (a straight, sloping line). v = u + at is simply gradient × time added to the start value. s = ((u + v)/2) × t is the area of the trapezium under the line (average of the parallel sides × width). Substituting v = u + at into the area equation and eliminating t gives v² = u² + 2as, so no new physics is needed — only the geometry of the graph.",

      strategies: ["Write a UVAST table: list s, u, v, a, t and fill in the three you know.", "Identify the missing quantity, then pick the equation that does not contain it.", "Take 'starts from rest' to mean u = 0, and 'comes to rest' to mean v = 0."],
    },

    {
      heading: "Measuring Speed, Acceleration and g",
      body: `Exams expect you to describe **experiments** that measure speed, acceleration, and the acceleration of free fall g.

**Measuring speed (average): speed = distance / time.**
Measure a known distance with a ruler/tape and time the object over it with a stopwatch (or, more precisely, electronically). Average speed = distance ÷ time. The main uncertainty is human **reaction time** when starting and stopping a stopwatch — about 0.2 s — so electronic timing is preferred for short intervals.

**Light gates.** A light gate has a beam of light and a sensor; an object (or a card on it) breaks the beam. A data logger records the time the beam is blocked.
- **Speed at one point:** speed = (length of the card that breaks the beam) ÷ (time the beam is blocked).
- **Acceleration:** use a card with **two segments** (or two light gates a known distance apart). Find the speed at each gate, then a = (v − u) ÷ (time between gates). Light gates avoid reaction-time error, giving far more accurate results than a stopwatch.

**Ticker-tape timer.** A vibrating arm makes dots on a paper tape pulled through it, usually **50 dots per second** (so the gap between adjacent dots = 1/50 = 0.02 s).
- Equal dot spacing → constant speed; dots getting further apart → accelerating; dots getting closer → decelerating.
- Cut the tape into strips of (say) 5 spaces (= 0.1 s). Each strip's length ÷ 0.1 s gives the speed for that interval; lining the strips up side by side builds a speed–time graph, whose gradient is the acceleration.

**Measuring g (acceleration of free fall).**
Drop a steel ball from rest through a measured height **h** and time the fall **t** (ideally with an electronic timer triggered by release and a trapdoor switch, to remove reaction-time error). Because u = 0, h = ½gt², so **g = 2h / t²**.
- Repeat for several heights, plot **h against t²**: the graph is a straight line through the origin with gradient = ½g, so **g = 2 × gradient**.
- Repeat readings and average to reduce random error; a typical result is close to 9.8 m/s².`,

      keyPoints: [
        "Average speed is measured as distance ÷ time; reaction time (~0.2 s) limits stopwatch accuracy.",
        "Light gates time a card breaking a beam: speed = card length ÷ time blocked.",
        "Acceleration with light gates: find speed at two points, then a = (v − u) ÷ time between them.",
        "A ticker-tape timer marks 50 dots per second, so adjacent dots are 0.02 s apart; spacing shows the motion.",
        "Measure g by dropping a ball through height h from rest: g = 2h / t².",
        "Plotting h against t² gives a straight line of gradient ½g, so g = 2 × gradient.",
      ],

      whyItWorks: "Electronic methods (light gates, trapdoor timers) beat a hand-held stopwatch because they remove the ~0.2 s human reaction time, which is a large fraction of a short fall. For g, starting from rest makes u = 0 so s = ut + ½at² reduces to h = ½gt², and rearranging gives g = 2h/t² — measuring h and t is enough to find g.",

      strategies: ["State HOW each quantity is measured (instrument) and what reduces the error (electronic timing, repeats, averaging).", "For g, prefer h = ½gt² rearranged to g = 2h/t², or the gradient of an h–t² graph."],

      thinkDeeper: "Why time many dot-spaces rather than one? Each dot has a small position uncertainty. Measuring across many spaces makes the timed distance much larger than that uncertainty, so the percentage error in the speed is far smaller — the same reason you draw the largest possible triangle when finding a gradient.",
    },

    {
      heading: "Free Fall and Terminal Velocity",
      body: `**Free fall** occurs when the only force acting on an object is gravity (no air resistance). All objects in free fall near Earth's surface accelerate downward at the same rate regardless of mass.

**Acceleration of free fall g ≈ 9.8 m/s²** (Edexcel 4PH1 typically uses 10 m/s² — state which value you use). It can be measured by timing a ball dropped from rest through a known height h and using g = 2h / t² (see "Measuring Speed, Acceleration and g").

Because free fall is motion with constant acceleration, the SUVAT equations apply with a = g: for a dropped object (u = 0) the fall is v = gt, s = ½gt², and v² = 2gs. For objects thrown upward, take a sign convention (e.g. up positive, so a = −g) and at the highest point v = 0.

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
      "Equations of motion (constant a only): v = u + at; s = ((u + v)/2)t; v² = u² + 2as; s = ut + ½at².",
      "Edexcel form of the last equation: (final velocity)² = (initial velocity)² + 2 × acceleration × distance.",
      "Choose the SUVAT equation that omits the quantity you neither know nor want.",
      "Measure g by dropping a ball from rest through height h: g = 2h / t² (gradient of h vs t² = ½g).",
      "Light gates / ticker tape measure speed and acceleration; a ticker timer makes 50 dots per second (0.02 s apart).",
      "Electronic timing beats a stopwatch because it removes the ~0.2 s human reaction-time error.",
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
      { front: "State the three IGCSE equations of motion (constant acceleration).", back: "v = u + at;  s = ((u + v)/2) × t;  v² = u² + 2as.  (Also s = ut + ½at².)" },
      { front: "When can you use the SUVAT equations of motion?", back: "Only when the acceleration is uniform (constant). They do not apply if a changes." },
      { front: "Which equation of motion has no time t in it?", back: "v² = u² + 2as — use it when time is neither given nor wanted." },
      { front: "How do you measure the acceleration of free fall g?", back: "Drop a ball from rest through a measured height h and time the fall t (electronically). Then g = 2h / t². Plotting h against t² gives a line of gradient ½g." },
      { front: "How can a light gate measure speed?", back: "An object (or a card on it) breaks a light beam; the data logger times how long the beam is blocked. speed = length of card ÷ time blocked." },
      { front: "How does a ticker-tape timer show acceleration?", back: "It prints dots at a fixed rate (usually 50 per second, 0.02 s apart). Dots getting further apart show the object is accelerating; equal spacing means constant speed." },
      { front: "Why is electronic timing better than a stopwatch?", back: "It removes the human reaction-time error (about 0.2 s), which is a large fraction of a short time interval." },
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
      { term: "Uniform acceleration", definition: "Acceleration that stays constant in size and direction; the condition required for the SUVAT equations of motion to apply." },
      { term: "Equations of motion (SUVAT)", definition: "A set of equations linking s, u, v, a and t for constant acceleration: v = u + at, s = ((u + v)/2)t, v² = u² + 2as (and s = ut + ½at²)." },
      { term: "Light gate", definition: "A sensor with a light beam that is broken by a passing object; a data logger times how long the beam is blocked to find speed (and, with two gates, acceleration)." },
      { term: "Ticker-tape timer", definition: "A device that prints dots on a moving paper tape at a fixed rate (commonly 50 per second), so dot spacing reveals speed and acceleration." },
      { term: "Reaction time", definition: "The short delay (about 0.2 s) between a person seeing an event and responding; a source of random error when timing by hand, reduced by electronic timing." },
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
        description: "Speed, velocity, acceleration and scalars/vectors — fundamentals and definitions.",
        questions: [
          {
            id: "phys-motion-bm1-01",
            question: "Which of the following is a vector quantity?",
            options: ["Distance", "Speed", "Velocity", "Time"],
            answerIndex: 2,
            explanation: "A vector has both magnitude and direction. Velocity is speed in a stated direction, so it is a vector. Distance, speed and time are scalars (magnitude only).",
            difficulty: "warmup",
            guideRef: "Distance, Displacement, Speed and Velocity",
          },
          {
            id: "phys-motion-bm1-02",
            question: "A car travels 360 m in 18 s at constant speed. What is its speed?",
            options: ["6480 m/s", "20 m/s", "342 m/s", "0.05 m/s"],
            answerIndex: 1,
            explanation: "speed = distance / time = 360 / 18 = 20 m/s. The other options arise from multiplying, subtracting, or inverting the calculation.",
            difficulty: "warmup",
            guideRef: "Distance, Displacement, Speed and Velocity",
          },
          {
            id: "phys-motion-bm1-03",
            question: "What is the SI unit of acceleration?",
            options: ["m/s", "m/s²", "m²/s", "s/m"],
            answerIndex: 1,
            explanation: "Acceleration is change of velocity (m/s) divided by time (s), giving (m/s)/s = m/s².",
            difficulty: "warmup",
            guideRef: "Acceleration",
          },
          {
            id: "phys-motion-bm1-04",
            question: "A car accelerates uniformly from 6 m/s to 30 m/s in 8 s. What is its acceleration?",
            options: ["4.5 m/s²", "3.0 m/s²", "2.4 m/s²", "24 m/s²"],
            answerIndex: 1,
            explanation: "a = (v − u) / t = (30 − 6) / 8 = 24 / 8 = 3.0 m/s². Option A (4.5) comes from 36/8 (adding instead of subtracting).",
            difficulty: "core",
            guideRef: "Acceleration",
            hints: [
              "Write down u = 6 m/s, v = 30 m/s, t = 8 s.",
              "a = (v − u) / t — subtract u before dividing.",
              "Δv = 30 − 6 = 24 m/s; then divide by 8 s.",
            ],
          },
          {
            id: "phys-motion-bm1-05",
            question: "An athlete runs once around a 400 m circular track in 50 s, finishing exactly where she started. What is her average velocity for the lap?",
            options: ["8 m/s", "0 m/s", "400 m/s", "4 m/s"],
            answerIndex: 1,
            explanation: "Average velocity = displacement / time. She returns to her start, so displacement = 0, giving 0 m/s. (Her average speed is 400/50 = 8 m/s — a different quantity.)",
            difficulty: "core",
            guideRef: "Distance, Displacement, Speed and Velocity",
            hints: [
              "Velocity uses displacement, not distance.",
              "Where does she finish relative to where she started?",
              "Displacement for a complete loop back to the start is zero.",
            ],
          },
          {
            id: "phys-motion-bm1-06",
            question: "A walker goes 30 m east, then 40 m north. What is the magnitude of her displacement from the start?",
            options: ["70 m", "10 m", "50 m", "35 m"],
            answerIndex: 2,
            explanation: "The two legs are perpendicular, so displacement = √(30² + 40²) = √(900 + 1600) = √2500 = 50 m. 70 m is the total distance, not the displacement.",
            difficulty: "core",
            guideRef: "Distance, Displacement, Speed and Velocity",
            hints: [
              "East and north are at right angles — sketch the right-angled triangle.",
              "Use Pythagoras: displacement = √(a² + b²).",
              "√(30² + 40²) = √2500.",
            ],
            strategy: "Draw a diagram and apply Pythagoras",
          },
          {
            id: "phys-motion-bm1-07",
            question: "A train decelerates uniformly from 40 m/s to 16 m/s in 6 s. What is its acceleration?",
            options: ["−4 m/s²", "+4 m/s²", "−9.3 m/s²", "−24 m/s²"],
            answerIndex: 0,
            explanation: "a = (v − u) / t = (16 − 40) / 6 = −24 / 6 = −4 m/s². The negative sign shows deceleration (it is slowing down).",
            difficulty: "core",
            guideRef: "Acceleration",
            hints: [
              "Take the direction of motion as positive: u = 40 m/s, v = 16 m/s.",
              "a = (v − u) / t.",
              "Because the train slows, the answer should be negative.",
            ],
          },
          {
            id: "phys-motion-bm1-08",
            question: "An object moves in a circle at a constant speed of 5 m/s. Which statement is correct?",
            options: [
              "Its velocity is constant because its speed is constant.",
              "Its velocity is changing because its direction is changing.",
              "It is not accelerating because its speed does not change.",
              "Its displacement increases steadily forever.",
            ],
            answerIndex: 1,
            explanation: "Velocity is a vector. Even at constant speed, the direction of motion changes continuously around the circle, so the velocity changes — and a changing velocity means the object is accelerating.",
            difficulty: "core",
            guideRef: "Distance, Displacement, Speed and Velocity",
            hints: [
              "Velocity includes direction, not just how fast.",
              "Does the direction of motion change as the object goes round?",
              "A changing velocity means there is an acceleration.",
            ],
          },
          {
            id: "phys-motion-bm1-09",
            question: "A car starts from rest and reaches 18 m/s after accelerating uniformly at 2.5 m/s². How long did this take?",
            options: ["45 s", "7.2 s", "20.5 s", "0.14 s"],
            answerIndex: 1,
            explanation: "From a = (v − u) / t, t = (v − u) / a = (18 − 0) / 2.5 = 7.2 s.",
            difficulty: "core",
            guideRef: "Acceleration",
            hints: [
              "Rearrange a = (v − u) / t to make t the subject.",
              "t = (v − u) / a, with u = 0 (starts from rest).",
              "t = 18 / 2.5.",
            ],
          },
          {
            id: "phys-motion-bm1-10",
            question: "A cheetah accelerates from rest at 8 m/s² for 3.0 s, then runs at constant speed. What constant speed does it reach?",
            options: ["2.7 m/s", "11 m/s", "24 m/s", "27 m/s"],
            answerIndex: 2,
            explanation: "v = u + at = 0 + 8 × 3.0 = 24 m/s. The cheetah then keeps this speed.",
            difficulty: "challenge",
            guideRef: "Acceleration",
            hints: [
              "Use v = u + at with u = 0.",
              "Multiply the acceleration by the time.",
              "v = 8 × 3.0.",
            ],
            strategy: "Apply v = u + at for the acceleration phase",
          },
        ],
      },
      {
        id: "phys-motion-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Distance–time and speed–time graphs — reading gradients and areas.",
        questions: [
          {
            id: "phys-motion-bm2-01",
            question: "On a distance–time graph, what does a horizontal (flat) line represent?",
            options: ["Constant speed", "The object is stationary", "Acceleration", "The object moving backwards"],
            answerIndex: 1,
            explanation: "Gradient of a distance–time graph = speed. A horizontal line has zero gradient, so the speed is zero — the object is stationary.",
            difficulty: "warmup",
            guideRef: "Distance–Time Graphs",
          },
          {
            id: "phys-motion-bm2-02",
            question: "What does the gradient of a velocity–time graph represent?",
            options: ["Distance", "Speed", "Acceleration", "Displacement"],
            answerIndex: 2,
            explanation: "The gradient of a velocity–time graph is the rate of change of velocity with time, which is the acceleration. (The area under it gives distance.)",
            difficulty: "warmup",
            guideRef: "Speed–Time and Velocity–Time Graphs",
          },
          {
            id: "phys-motion-bm2-03",
            question: "A distance–time graph shows a straight line from the origin to (4 s, 32 m). What is the speed?",
            options: ["128 m/s", "8 m/s", "0.125 m/s", "28 m/s"],
            answerIndex: 1,
            explanation: "Speed = gradient = Δdistance / Δtime = 32 / 4 = 8 m/s.",
            difficulty: "warmup",
            guideRef: "Distance–Time Graphs",
          },
          {
            id: "phys-motion-bm2-04",
            question: "A velocity–time graph shows a straight line from (0 s, 0 m/s) to (8 s, 12 m/s). What distance is travelled in these 8 s?",
            options: ["96 m", "48 m", "24 m", "1.5 m"],
            answerIndex: 1,
            explanation: "Distance = area under the v–t graph. The shape is a triangle: area = ½ × base × height = ½ × 8 × 12 = 48 m.",
            difficulty: "core",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            hints: [
              "Area under a v–t graph gives the distance.",
              "The line rises from zero, so the region is a triangle.",
              "Triangle area = ½ × base × height = ½ × 8 × 12.",
            ],
          },
          {
            id: "phys-motion-bm2-05",
            question: "A distance–time graph curves so that it becomes steeper and steeper. What is the object doing?",
            options: ["Decelerating", "Moving at constant speed", "Accelerating", "Stationary"],
            answerIndex: 2,
            explanation: "Gradient = speed. A steepening curve means the gradient (and so the speed) is increasing — the object is accelerating.",
            difficulty: "core",
            guideRef: "Distance–Time Graphs",
            hints: [
              "Steepness of a distance–time graph tells you the speed.",
              "Steeper means faster.",
              "Speed increasing = accelerating.",
            ],
          },
          {
            id: "phys-motion-bm2-06",
            question: "A vehicle moves at 18 m/s for 5 s, then accelerates uniformly to 30 m/s over the next 4 s. What total distance does it travel?",
            options: ["90 m", "186 m", "282 m", "210 m"],
            answerIndex: 1,
            explanation: "Phase 1 (rectangle): 18 × 5 = 90 m. Phase 2 (trapezium / average speed): [(18 + 30)/2] × 4 = 24 × 4 = 96 m. Total = 90 + 96 = 186 m.",
            difficulty: "core",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            hints: [
              "Treat the two phases separately, then add.",
              "Phase 1 is constant speed: distance = speed × time.",
              "Phase 2 accelerates uniformly: use average speed (u + v)/2 × time.",
              "Add the two distances together.",
            ],
            strategy: "Split into phases; use area / average speed",
          },
          {
            id: "phys-motion-bm2-07",
            question: "On a velocity–time graph, a horizontal straight line above the time axis represents:",
            options: [
              "Increasing acceleration",
              "Constant velocity (zero acceleration)",
              "The object slowing down",
              "The object at rest",
            ],
            answerIndex: 1,
            explanation: "A horizontal line on a v–t graph has zero gradient, so acceleration is zero. The velocity is non-zero (line above the axis) and constant — the object moves at steady speed.",
            difficulty: "core",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            hints: [
              "Gradient of a v–t graph = acceleration.",
              "A flat line has zero gradient.",
              "The line is above the axis, so velocity is not zero.",
            ],
          },
          {
            id: "phys-motion-bm2-08",
            question: "To find the instantaneous speed at a point on a curved distance–time graph, you should:",
            options: [
              "Find the area under the curve up to that point",
              "Draw a tangent at that point and find its gradient",
              "Divide the total distance by the total time",
              "Read off the value on the time axis",
            ],
            answerIndex: 1,
            explanation: "Instantaneous speed is the gradient at a single instant. On a curve, this is found by drawing a tangent at that point and calculating the tangent's gradient.",
            difficulty: "core",
            guideRef: "Distance–Time Graphs",
            hints: [
              "Speed is the gradient of a distance–time graph.",
              "At one instant on a curve, the gradient is the slope of the tangent line.",
              "Draw the tangent, make a large triangle, find rise/run.",
            ],
          },
          {
            id: "phys-motion-bm2-09",
            question: "A velocity–time graph shows: 0–4 s velocity rises from 0 to 20 m/s; 4–10 s constant 20 m/s; 10–12 s falls from 20 m/s to 0. What is the total distance travelled?",
            options: ["240 m", "180 m", "200 m", "160 m"],
            answerIndex: 0,
            explanation: "Triangle (0–4 s): ½ × 4 × 20 = 40 m. Rectangle (4–10 s): 6 × 20 = 120 m. Triangle (10–12 s): ½ × 2 × 20 = 20 m. Total = 40 + 120 + 20 = 180 m.",
            difficulty: "challenge",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            hints: [
              "Split into two triangles and a rectangle.",
              "Triangle 1: ½ × 4 × 20. Rectangle: 6 × 20. Triangle 2: ½ × 2 × 20.",
              "The constant-speed phase lasts 6 s (from 4 s to 10 s), not 10 s.",
              "Add all three areas.",
            ],
            strategy: "Split the area into standard shapes",
          },
          {
            id: "phys-motion-bm2-10",
            question: "A car decelerates uniformly from 24 m/s to 8 m/s over a distance shown on a velocity–time graph lasting 4 s. What distance does it cover during this deceleration?",
            options: ["96 m", "64 m", "32 m", "128 m"],
            answerIndex: 1,
            explanation: "For uniform acceleration, distance = average speed × time = [(24 + 8)/2] × 4 = 16 × 4 = 64 m. (This is the area of the trapezium under the v–t graph.)",
            difficulty: "challenge",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            hints: [
              "The region under the line is a trapezium.",
              "Area of trapezium = average of the two parallel sides × width.",
              "Average speed = (24 + 8)/2 = 16 m/s; multiply by 4 s.",
            ],
            strategy: "Use average speed (trapezium area) for uniform deceleration",
          },
        ],
      },
      {
        id: "phys-motion-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Free fall, acceleration of free fall, terminal velocity and air resistance.",
        questions: [
          {
            id: "phys-motion-bm3-01",
            question: "Ignoring air resistance, two balls of different mass are dropped from the same height at the same time. Which hits the ground first?",
            options: [
              "The heavier ball",
              "The lighter ball",
              "They land at the same time",
              "It depends on their colour",
            ],
            answerIndex: 2,
            explanation: "In free fall all objects accelerate at g regardless of mass, because the larger weight of a heavier object is exactly offset by its larger inertia. Without air resistance, both land together.",
            difficulty: "warmup",
            guideRef: "Free Fall and Terminal Velocity",
          },
          {
            id: "phys-motion-bm3-02",
            question: "Using g = 9.8 m/s², what is the speed of an object dropped from rest after falling for 2.0 s (ignore air resistance)?",
            options: ["4.9 m/s", "9.8 m/s", "19.6 m/s", "11.8 m/s"],
            answerIndex: 2,
            explanation: "v = u + gt = 0 + 9.8 × 2.0 = 19.6 m/s.",
            difficulty: "warmup",
            guideRef: "Free Fall and Terminal Velocity",
          },
          {
            id: "phys-motion-bm3-03",
            question: "A falling object reaches terminal velocity. What is its acceleration at this point?",
            options: ["9.8 m/s²", "Zero", "Increasing", "Equal to its weight"],
            answerIndex: 1,
            explanation: "At terminal velocity, drag equals weight, so the resultant force is zero. By F = ma, zero resultant force means zero acceleration — the object moves at constant speed.",
            difficulty: "core",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "Terminal velocity means the speed is constant.",
              "Constant speed in a straight line means no change in velocity.",
              "No change in velocity means zero acceleration.",
            ],
          },
          {
            id: "phys-motion-bm3-04",
            question: "A skydiver has reached terminal velocity before opening her parachute. Immediately after the parachute opens, what happens?",
            options: [
              "Drag becomes much larger than weight, so she decelerates.",
              "Weight becomes larger than drag, so she speeds up.",
              "The resultant force stays zero, so nothing changes.",
              "Her weight suddenly increases.",
            ],
            answerIndex: 0,
            explanation: "Opening the parachute greatly increases surface area and so drag. Drag now exceeds weight, giving an upward resultant force, so she decelerates to a new, lower terminal velocity.",
            difficulty: "core",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "A parachute increases the area facing the air.",
              "Larger area means much larger drag at the same speed.",
              "If drag > weight, the resultant force points upward.",
            ],
          },
          {
            id: "phys-motion-bm3-05",
            question: "An object falls from rest with air resistance. Before reaching terminal velocity, how do its speed and acceleration change?",
            options: [
              "Speed increases; acceleration stays constant at g.",
              "Speed increases; acceleration decreases.",
              "Speed decreases; acceleration increases.",
              "Both stay constant.",
            ],
            answerIndex: 1,
            explanation: "As speed rises, drag increases, so the resultant downward force falls. By F = ma, the acceleration decreases, but it is still positive — so the speed keeps increasing (just more slowly).",
            difficulty: "core",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "What happens to drag as the object speeds up?",
              "If drag rises, what happens to the resultant force?",
              "Smaller resultant force means smaller acceleration (F = ma).",
            ],
          },
          {
            id: "phys-motion-bm3-06",
            question: "A stone is dropped from rest. Using g = 10 m/s², how far does it fall in the first 3.0 s (ignore air resistance)?",
            options: ["30 m", "45 m", "90 m", "15 m"],
            answerIndex: 1,
            explanation: "s = ut + ½gt² = 0 + ½ × 10 × 3.0² = ½ × 10 × 9 = 45 m.",
            difficulty: "core",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "Use s = ut + ½at² with u = 0 and a = g = 10 m/s².",
              "s = ½ × 10 × t².",
              "Remember to square the time: 3.0² = 9.",
            ],
            strategy: "Apply s = ½gt² for a dropped object",
          },
          {
            id: "phys-motion-bm3-07",
            question: "Why does a heavier skydiver reach a higher terminal velocity than a lighter one of the same shape?",
            options: [
              "A heavier person experiences less drag.",
              "A larger weight needs a larger drag to balance it, which only occurs at a higher speed.",
              "Heavier objects fall with a larger value of g.",
              "Weight has no effect on terminal velocity.",
            ],
            answerIndex: 1,
            explanation: "Terminal velocity is reached when drag = weight. A greater weight requires a greater drag force to balance it, and drag only grows with speed, so balance occurs at a higher speed.",
            difficulty: "core",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "Terminal velocity occurs when drag balances weight.",
              "A bigger weight needs a bigger drag to balance.",
              "Drag increases with speed, so a bigger drag means a higher speed.",
            ],
          },
          {
            id: "phys-motion-bm3-08",
            question: "Using g = 9.8 m/s², a ball is thrown straight up at 14.7 m/s. How long does it take to reach its highest point?",
            options: ["1.5 s", "3.0 s", "0.67 s", "14.7 s"],
            answerIndex: 0,
            explanation: "At the top v = 0. Taking up as positive: t = (v − u)/a = (0 − 14.7)/(−9.8) = 1.5 s.",
            difficulty: "challenge",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "Take upward as positive: u = +14.7 m/s, a = −9.8 m/s².",
              "At the highest point the velocity is momentarily zero.",
              "Use t = (v − u)/a with v = 0.",
            ],
            strategy: "At the top, v = 0; solve for time",
          },
          {
            id: "phys-motion-bm3-09",
            question: "Using g = 10 m/s², a ball is thrown straight up at 20 m/s. What is its velocity 1.0 s later (take upward as positive)?",
            options: ["30 m/s", "10 m/s", "−10 m/s", "20 m/s"],
            answerIndex: 1,
            explanation: "v = u + at = 20 + (−10)(1.0) = 10 m/s. After 1.0 s the ball is still moving upward at 10 m/s.",
            difficulty: "challenge",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "Take up as positive: u = +20 m/s, a = −10 m/s².",
              "Use v = u + at.",
              "v = 20 + (−10)(1.0).",
            ],
            strategy: "Apply v = u + at with a sign convention",
          },
          {
            id: "phys-motion-bm3-10",
            question: "Using g = 10 m/s², a stone is dropped down a well and a splash is heard after the stone has fallen for 2.0 s. How deep is the water surface (ignore air resistance and the time for sound to travel)?",
            options: ["10 m", "20 m", "40 m", "5 m"],
            answerIndex: 1,
            explanation: "s = ut + ½gt² = 0 + ½ × 10 × 2.0² = ½ × 10 × 4 = 20 m.",
            difficulty: "challenge",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "Use s = ut + ½gt² with u = 0, g = 10 m/s².",
              "s = ½ × 10 × t².",
              "t² = 2.0² = 4.",
            ],
            strategy: "Apply s = ½gt² to find the depth",
          },
        ],
      },
      {
        id: "phys-motion-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Mixed and multi-step motion problems, equations of motion and graph reasoning.",
        questions: [
          {
            id: "phys-motion-bm4-01",
            question: "Which list contains only scalar quantities?",
            options: [
              "Velocity, displacement, acceleration",
              "Distance, speed, time",
              "Force, velocity, displacement",
              "Speed, velocity, distance",
            ],
            answerIndex: 1,
            explanation: "Scalars have magnitude only. Distance, speed and time are all scalars. The other lists each contain at least one vector (velocity, displacement, acceleration or force).",
            difficulty: "warmup",
            guideRef: "Distance, Displacement, Speed and Velocity",
          },
          {
            id: "phys-motion-bm4-02",
            question: "A car covers 1.5 km in 60 s. What is its average speed?",
            options: ["0.025 m/s", "25 m/s", "90 m/s", "2.5 m/s"],
            answerIndex: 1,
            explanation: "Convert: 1.5 km = 1500 m. Average speed = 1500 / 60 = 25 m/s.",
            difficulty: "warmup",
            guideRef: "Distance, Displacement, Speed and Velocity",
          },
          {
            id: "phys-motion-bm4-03",
            question: "A car accelerates uniformly from rest at 3 m/s² for 6 s. What distance does it cover?",
            options: ["18 m", "54 m", "108 m", "9 m"],
            answerIndex: 1,
            explanation: "s = ut + ½at² = 0 + ½ × 3 × 6² = ½ × 3 × 36 = 54 m.",
            difficulty: "core",
            guideRef: "Solving Motion Problems",
            hints: [
              "Starts from rest, so u = 0.",
              "Use s = ut + ½at².",
              "s = ½ × 3 × 6² (and 6² = 36).",
            ],
          },
          {
            id: "phys-motion-bm4-04",
            question: "A motorcyclist accelerates uniformly from 12 m/s to 30 m/s while travelling 126 m. What is the acceleration?",
            options: ["3.0 m/s²", "6.0 m/s²", "1.5 m/s²", "9.0 m/s²"],
            answerIndex: 0,
            explanation: "Use v² = u² + 2as: 30² = 12² + 2a(126) → 900 = 144 + 252a → 756 = 252a → a = 3.0 m/s².",
            difficulty: "core",
            guideRef: "Solving Motion Problems",
            hints: [
              "You know u, v and s but not t — use v² = u² + 2as.",
              "30² = 12² + 2a × 126.",
              "900 − 144 = 252a, so a = 756/252.",
            ],
            strategy: "Choose v² = u² + 2as when time is unknown",
          },
          {
            id: "phys-motion-bm4-05",
            question: "A cyclist travels 4 km north in 10 minutes, then 3 km south in 5 minutes. What is the magnitude of the average velocity for the whole trip?",
            options: ["0.78 m/s", "1.1 m/s", "7.8 m/s", "28 m/s"],
            answerIndex: 1,
            explanation: "Displacement = 4 km north − 3 km south = 1 km north = 1000 m. Total time = 15 min = 900 s. Average velocity = 1000 / 900 = 1.1 m/s (north).",
            difficulty: "core",
            guideRef: "Distance, Displacement, Speed and Velocity",
            hints: [
              "Average velocity uses displacement, not total distance.",
              "Net displacement = 4 km − 3 km = 1 km north = 1000 m.",
              "Convert 15 minutes to 900 s, then divide.",
            ],
            strategy: "Find net displacement, convert units, then divide",
          },
          {
            id: "phys-motion-bm4-06",
            question: "A ball is dropped (g = 10 m/s²). On a velocity–time graph for its fall (ignoring air resistance), the line is:",
            options: [
              "Horizontal",
              "A straight line through the origin with gradient 10 m/s²",
              "A curve that levels off",
              "A straight line with negative gradient",
            ],
            answerIndex: 1,
            explanation: "With no air resistance the acceleration is constant at g = 10 m/s². On a v–t graph, constant acceleration is a straight line; starting from rest it passes through the origin with gradient equal to g.",
            difficulty: "core",
            guideRef: "Free Fall and Terminal Velocity",
            hints: [
              "Gradient of a v–t graph = acceleration.",
              "In free fall the acceleration is constant.",
              "Constant gradient means a straight line; it starts from rest at the origin.",
            ],
          },
          {
            id: "phys-motion-bm4-07",
            question: "A train accelerates uniformly from rest and reaches 40 m/s after 800 m. What is its acceleration?",
            options: ["0.05 m/s²", "1.0 m/s²", "2.0 m/s²", "20 m/s²"],
            answerIndex: 1,
            explanation: "v² = u² + 2as: 40² = 0 + 2a(800) → 1600 = 1600a → a = 1.0 m/s².",
            difficulty: "core",
            guideRef: "Solving Motion Problems",
            hints: [
              "Time is unknown, so use v² = u² + 2as.",
              "40² = 2 × a × 800.",
              "1600 = 1600a.",
            ],
            strategy: "Use v² = u² + 2as",
          },
          {
            id: "phys-motion-bm4-08",
            question: "Car A starts from rest and accelerates at 2 m/s². At the same instant car B passes it at a constant 12 m/s. How long until they are again side by side?",
            options: ["6 s", "12 s", "24 s", "3 s"],
            answerIndex: 1,
            explanation: "They meet when distances are equal: ½ × 2 × t² = 12t → t² = 12t → t = 12 s (rejecting t = 0). At t = 12 s both have travelled 144 m.",
            difficulty: "challenge",
            guideRef: "Solving Motion Problems",
            hints: [
              "Write each car's distance: s_A = ½ × 2 × t², s_B = 12t.",
              "They are side by side when s_A = s_B.",
              "t² = 12t → t(t − 12) = 0.",
              "Reject t = 0 (the start) and take t = 12 s.",
            ],
            strategy: "Equate the two position expressions and solve",
          },
          {
            id: "phys-motion-bm4-09",
            question: "A car brakes from 30 m/s to rest with a uniform deceleration of 6 m/s². What distance does it travel while stopping?",
            options: ["5 m", "75 m", "150 m", "90 m"],
            answerIndex: 1,
            explanation: "v² = u² + 2as: 0 = 30² + 2(−6)s → 0 = 900 − 12s → s = 900/12 = 75 m.",
            difficulty: "challenge",
            guideRef: "Solving Motion Problems",
            hints: [
              "Deceleration means a = −6 m/s².",
              "Use v² = u² + 2as with v = 0.",
              "0 = 900 − 12s.",
            ],
            strategy: "Use v² = u² + 2as for stopping distance",
          },
          {
            id: "phys-motion-bm4-10",
            question: "A lift accelerates upward from rest at 1.5 m/s² for 4 s, then moves at constant velocity for 10 s, then decelerates uniformly to rest in 3 s. What is the maximum (constant) velocity reached?",
            options: ["1.5 m/s", "6.0 m/s", "9.0 m/s", "15 m/s"],
            answerIndex: 1,
            explanation: "During the acceleration phase: v = u + at = 0 + 1.5 × 4 = 6.0 m/s, which is then held constant.",
            difficulty: "challenge",
            guideRef: "Solving Motion Problems",
            hints: [
              "The maximum velocity is reached at the end of the acceleration phase.",
              "Use v = u + at for the first 4 s.",
              "v = 1.5 × 4.",
            ],
            strategy: "Find the velocity at the end of the acceleration phase",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "phys-motion-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Speed, velocity, acceleration and scalars/vectors — definitions and basic calculations.",
        questions: [
          {
            id: "phys-motion-bq1-01",
            question: "(a) State the difference between a scalar quantity and a vector quantity. [2]\n(b) For each of the following, state whether it is a scalar or a vector: speed, velocity, distance, acceleration. [2]",
            marks: 4,
            modelAnswer: "(a) A scalar has magnitude only. A vector has both magnitude and direction.\n\n(b) speed — scalar; velocity — vector; distance — scalar; acceleration — vector.",
            markScheme: [
              "Scalar = magnitude only (1 mark)",
              "Vector = magnitude and direction (1 mark)",
              "speed scalar AND distance scalar (1 mark)",
              "velocity vector AND acceleration vector (1 mark)",
            ],
            commonError: "Calling velocity a scalar — it is a vector because it specifies a direction as well as a magnitude.",
            guideRef: "Distance, Displacement, Speed and Velocity",
            difficulty: "warmup",
          },
          {
            id: "phys-motion-bq1-02",
            question: "A car travels 900 m along a straight road in 45 s at a steady speed.\n(a) Calculate its speed. [2]\n(b) The car then continues at the same speed for a further 2.0 minutes. Calculate the extra distance travelled. [2]",
            marks: 4,
            modelAnswer: "(a) speed = distance / time = 900 / 45 = 20 m/s\n\n(b) time = 2.0 min = 120 s; distance = speed × time = 20 × 120 = 2400 m",
            markScheme: [
              "speed = distance / time / correct substitution (1 mark)",
              "20 m/s (1 mark)",
              "time = 120 s AND distance = 20 × 120 (1 mark)",
              "2400 m (1 mark)",
            ],
            commonError: "Forgetting to convert 2.0 minutes into 120 s before using distance = speed × time.",
            guideRef: "Distance, Displacement, Speed and Velocity",
            difficulty: "warmup",
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "speed = 900 / 45 = 20 m/s",
                  "Convert time: 2.0 min = 2.0 × 60 = 120 s",
                  "distance = speed × time = 20 × 120 = 2400 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq1-03",
            question: "A van accelerates uniformly from 8.0 m/s to 26 m/s in 9.0 s.\n(a) Calculate its acceleration. [2]\n(b) State what is meant by the term acceleration. [1]",
            marks: 3,
            modelAnswer: "(a) a = (v − u) / t = (26 − 8.0) / 9.0 = 18 / 9.0 = 2.0 m/s²\n\n(b) Acceleration is the rate of change of velocity (with time).",
            markScheme: [
              "a = (v − u)/t / correct substitution (1 mark)",
              "2.0 m/s² with unit (1 mark)",
              "rate of change of velocity (1 mark)",
            ],
            commonError: "Writing a = 26/9 (forgetting to subtract the initial velocity u).",
            guideRef: "Acceleration",
            difficulty: "core",
            hints: [
              "List u = 8.0 m/s, v = 26 m/s, t = 9.0 s.",
              "a = (v − u) / t.",
              "Δv = 26 − 8.0 = 18 m/s; divide by 9.0 s.",
            ],
            strategy: "UVAST table then substitute",
            solutions: [
              {
                label: "Acceleration calculation",
                steps: [
                  "u = 8.0 m/s, v = 26 m/s, t = 9.0 s",
                  "a = (26 − 8.0) / 9.0",
                  "a = 18 / 9.0 = 2.0 m/s²",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq1-04",
            question: "A runner travels 120 m due east in 20 s, then turns and runs 50 m due west in 10 s.\n(a) Calculate the total distance travelled. [1]\n(b) Calculate the magnitude of the displacement from the start. [2]\n(c) Calculate the average speed and the magnitude of the average velocity for the whole run. [3]",
            marks: 6,
            modelAnswer: "(a) Total distance = 120 + 50 = 170 m\n\n(b) Displacement = 120 m east − 50 m west = 70 m east\n\n(c) Total time = 20 + 10 = 30 s.\nAverage speed = total distance / time = 170 / 30 = 5.7 m/s (2 s.f.)\nAverage velocity = displacement / time = 70 / 30 = 2.3 m/s east (2 s.f.)",
            markScheme: [
              "Total distance = 170 m (1 mark)",
              "Displacement = 70 m (east) (1 mark)",
              "direction stated / east (1 mark)",
              "Average speed = 170/30 = 5.7 m/s (1 mark)",
              "Average velocity = 70/30 = 2.3 m/s (1 mark)",
              "average velocity direction = east (1 mark)",
            ],
            commonError: "Using 170 m for both speed and velocity — displacement (70 m) is smaller than distance (170 m) because the runner doubled back.",
            guideRef: "Distance, Displacement, Speed and Velocity",
            difficulty: "core",
            hints: [
              "Distance just adds the path lengths.",
              "Displacement is net: subtract the westward leg from the eastward leg.",
              "Speed uses total distance; velocity uses displacement.",
              "Both use the total time of 30 s.",
            ],
            strategy: "Separate distance from displacement throughout",
            solutions: [
              {
                label: "Distance vs displacement",
                steps: [
                  "Distance = 120 + 50 = 170 m; time = 30 s",
                  "Displacement = 120 − 50 = 70 m east",
                  "Average speed = 170 / 30 = 5.7 m/s",
                  "Average velocity = 70 / 30 = 2.3 m/s east",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq1-05",
            question: "A cyclist accelerates uniformly from rest to 15 m/s in 5.0 s.\n(a) Calculate the acceleration. [2]\n(b) Calculate the distance travelled during this time using an equation of motion. [3]",
            marks: 5,
            modelAnswer: "(a) a = (v − u) / t = (15 − 0) / 5.0 = 3.0 m/s²\n\n(b) s = ut + ½at² = 0 + ½ × 3.0 × 5.0² = ½ × 3.0 × 25 = 37.5 m\n(or s = average speed × time = (15/2) × 5.0 = 37.5 m)",
            markScheme: [
              "a = (15 − 0)/5.0 (1 mark)",
              "3.0 m/s² (1 mark)",
              "correct equation s = ut + ½at² or average-speed method (1 mark)",
              "correct substitution (1 mark)",
              "37.5 m (accept 38 m) (1 mark)",
            ],
            commonError: "Using s = v × t = 15 × 5 = 75 m (using the final speed for the whole journey instead of the average speed).",
            guideRef: "Acceleration",
            difficulty: "core",
            hints: [
              "a = (v − u)/t with u = 0.",
              "For distance, you can use s = ut + ½at² or average speed × time.",
              "Average speed = (0 + 15)/2 = 7.5 m/s.",
              "37.5 m by either route.",
            ],
            strategy: "Find a first, then choose a distance formula",
            solutions: [
              {
                label: "Method 1: s = ut + ½at²",
                steps: [
                  "a = (15 − 0)/5.0 = 3.0 m/s²",
                  "s = 0 × 5.0 + ½ × 3.0 × 5.0²",
                  "s = ½ × 3.0 × 25 = 37.5 m",
                ],
              },
              {
                label: "Method 2: average speed",
                steps: [
                  "Average speed = (0 + 15)/2 = 7.5 m/s",
                  "s = 7.5 × 5.0 = 37.5 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq1-06",
            question: "A high-speed train slows uniformly from 60 m/s to 12 m/s in 16 s.\n(a) Calculate the deceleration. [2]\n(b) Calculate the distance travelled while slowing down. [3]",
            marks: 5,
            modelAnswer: "(a) a = (v − u) / t = (12 − 60) / 16 = −48 / 16 = −3.0 m/s² (deceleration = 3.0 m/s²)\n\n(b) distance = average speed × time = [(60 + 12)/2] × 16 = 36 × 16 = 576 m",
            markScheme: [
              "a = (12 − 60)/16 (1 mark)",
              "−3.0 m/s² / deceleration 3.0 m/s² (1 mark)",
              "average speed = (60 + 12)/2 = 36 m/s OR area method (1 mark)",
              "distance = 36 × 16 (1 mark)",
              "576 m (1 mark)",
            ],
            commonError: "Using only the final speed (12 m/s) or only the initial speed (60 m/s) instead of the average speed when finding the distance.",
            guideRef: "Acceleration",
            difficulty: "core",
            hints: [
              "Deceleration gives a negative acceleration.",
              "a = (v − u)/t.",
              "For distance under uniform deceleration, use average speed = (u + v)/2.",
              "Multiply average speed by time.",
            ],
            strategy: "Average speed for uniform deceleration",
            solutions: [
              {
                label: "Deceleration and distance",
                steps: [
                  "a = (12 − 60)/16 = −48/16 = −3.0 m/s²",
                  "Average speed = (60 + 12)/2 = 36 m/s",
                  "distance = 36 × 16 = 576 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq1-07",
            question: "Explain why an object moving around a circular track at a constant speed is described as accelerating, even though its speed does not change. [3]",
            marks: 3,
            modelAnswer: "Velocity is a vector — it has both magnitude (speed) and direction. As the object moves around the circle, its direction of motion changes continuously. A changing direction means the velocity is changing, even though the speed stays the same. Acceleration is the rate of change of velocity, so a continuously changing velocity means the object is accelerating.",
            markScheme: [
              "velocity is a vector / has direction as well as magnitude (1 mark)",
              "direction of motion changes (continuously) around the circle (1 mark)",
              "changing velocity = acceleration (even at constant speed) (1 mark)",
            ],
            commonError: "Arguing that constant speed must mean no acceleration — this ignores that velocity also depends on direction.",
            guideRef: "Distance, Displacement, Speed and Velocity",
            difficulty: "core",
            hints: [
              "Recall the definition of velocity (not just speed).",
              "What changes as the object goes around the circle?",
              "Acceleration is the rate of change of velocity.",
            ],
            strategy: "Argue from the vector definition of velocity",
          },
          {
            id: "phys-motion-bq1-08",
            question: "A sprinter accelerates uniformly from rest and covers 100 m in 12.5 s, finishing at her top speed.\n(a) Calculate her average speed over the 100 m. [2]\n(b) Assuming uniform acceleration from rest, show that her top speed at the finish is about 16 m/s. [2]\n(c) Calculate her acceleration. [2]",
            marks: 6,
            modelAnswer: "(a) average speed = total distance / time = 100 / 12.5 = 8.0 m/s\n\n(b) For uniform acceleration from rest, average speed = (0 + v)/2 = v/2. So v = 2 × average speed = 2 × 8.0 = 16 m/s ✓\n\n(c) a = (v − u)/t = (16 − 0)/12.5 = 1.28 m/s² (≈ 1.3 m/s²)",
            markScheme: [
              "average speed = 100/12.5 (1 mark)",
              "8.0 m/s (1 mark)",
              "uses average speed = v/2 for uniform acceleration from rest (1 mark)",
              "v = 2 × 8.0 = 16 m/s shown (1 mark)",
              "a = (16 − 0)/12.5 (1 mark)",
              "1.28 m/s² (accept 1.3 m/s²) (1 mark)",
            ],
            commonError: "Taking the average speed (8.0 m/s) as the final speed — for uniform acceleration from rest the final speed is twice the average speed.",
            guideRef: "Solving Motion Problems",
            difficulty: "challenge",
            hints: [
              "Average speed = total distance / total time.",
              "For uniform acceleration from rest, average speed is exactly half the final speed.",
              "So final speed = 2 × average speed.",
              "Then a = (v − u)/t with u = 0.",
            ],
            strategy: "Link average speed to final speed for uniform acceleration",
            solutions: [
              {
                label: "Average speed to acceleration",
                steps: [
                  "Average speed = 100 / 12.5 = 8.0 m/s",
                  "Uniform acceleration from rest: average speed = v/2, so v = 16 m/s",
                  "a = (16 − 0)/12.5 = 1.28 m/s² ≈ 1.3 m/s²",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq1-09",
            question: "A car accelerates uniformly from 10 m/s to 22 m/s while covering 96 m.\n(a) Use an equation of motion to calculate the acceleration. [3]\n(b) Calculate the time taken for this change. [2]",
            marks: 5,
            modelAnswer: "(a) v² = u² + 2as: 22² = 10² + 2a(96) → 484 = 100 + 192a → 384 = 192a → a = 2.0 m/s²\n\n(b) a = (v − u)/t → t = (v − u)/a = (22 − 10)/2.0 = 6.0 s",
            markScheme: [
              "uses v² = u² + 2as (1 mark)",
              "484 = 100 + 192a / correct substitution (1 mark)",
              "a = 2.0 m/s² (1 mark)",
              "t = (v − u)/a = 12/2.0 (1 mark)",
              "t = 6.0 s (1 mark)",
            ],
            commonError: "Forgetting to square the velocities in v² = u² + 2as, or using 22 − 10 in place of 22² − 10².",
            guideRef: "Solving Motion Problems",
            difficulty: "challenge",
            hints: [
              "Time is unknown but distance is known — use v² = u² + 2as.",
              "22² − 10² = 2a × 96.",
              "Solve for a, then use a = (v − u)/t for the time.",
            ],
            strategy: "v² = u² + 2as for a, then v = u + at for t",
            solutions: [
              {
                label: "Two-equation method",
                steps: [
                  "v² = u² + 2as → 484 = 100 + 192a",
                  "384 = 192a → a = 2.0 m/s²",
                  "t = (v − u)/a = (22 − 10)/2.0 = 6.0 s",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq1-10",
            question: "Define average velocity, and explain how it can be zero for a journey in which the object never stops moving. Use a clear example. [4]",
            marks: 4,
            modelAnswer: "Average velocity = total displacement / total time. Displacement is the straight-line distance from start to finish in a stated direction. If an object returns to its exact starting point, the displacement is zero, so the average velocity is zero — even though it has been moving the whole time and has a non-zero average speed. Example: a runner completes one full lap of a track, returning to the start; the displacement is zero, so the average velocity is zero, while the average speed equals lap length / time.",
            markScheme: [
              "average velocity = displacement / time (1 mark)",
              "displacement is zero when start and finish points coincide (1 mark)",
              "therefore average velocity = 0 even while moving (1 mark)",
              "valid example, e.g. one complete lap / there-and-back journey (1 mark)",
            ],
            commonError: "Confusing average velocity with average speed — speed cannot be zero for a moving object, but velocity can be if displacement is zero.",
            guideRef: "Distance, Displacement, Speed and Velocity",
            difficulty: "core",
            hints: [
              "Start from the definition involving displacement.",
              "When is displacement zero?",
              "Choose an example that returns to the start, such as a full lap.",
            ],
            strategy: "Define, then illustrate with a return journey",
          },
        ],
      },
      {
        id: "phys-motion-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Distance–time and speed–time graphs — gradients, areas and interpretation.",
        questions: [
          {
            id: "phys-motion-bq2-01",
            question: "A distance–time graph for a walker shows a straight line from the origin to (8.0 s, 12 m).\n(a) Describe the motion shown. [1]\n(b) Calculate the speed. [2]",
            marks: 3,
            modelAnswer: "(a) The walker moves at a constant speed (the line is straight with a steady positive gradient).\n\n(b) speed = gradient = Δdistance / Δtime = 12 / 8.0 = 1.5 m/s",
            markScheme: [
              "constant speed (1 mark)",
              "speed = gradient = 12/8.0 (1 mark)",
              "1.5 m/s (1 mark)",
            ],
            commonError: "Reading speed off the y-axis value (12 m) instead of taking the gradient.",
            guideRef: "Distance–Time Graphs",
            difficulty: "warmup",
            solutions: [
              {
                label: "Gradient = speed",
                steps: [
                  "speed = gradient = rise / run",
                  "= (12 − 0)/(8.0 − 0)",
                  "= 1.5 m/s",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq2-02",
            question: "A velocity–time graph shows a straight line from (0 s, 0 m/s) to (10 s, 24 m/s).\n(a) Calculate the acceleration. [2]\n(b) Calculate the distance travelled. [2]",
            marks: 4,
            modelAnswer: "(a) a = gradient = (24 − 0)/(10 − 0) = 2.4 m/s²\n\n(b) distance = area under graph = ½ × base × height = ½ × 10 × 24 = 120 m",
            markScheme: [
              "a = gradient = 24/10 (1 mark)",
              "2.4 m/s² (1 mark)",
              "distance = area of triangle = ½ × 10 × 24 (1 mark)",
              "120 m (1 mark)",
            ],
            commonError: "Using base × height (240 m) for the triangular area instead of ½ × base × height.",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            difficulty: "warmup",
            solutions: [
              {
                label: "Gradient and area",
                steps: [
                  "Acceleration = gradient = 24/10 = 2.4 m/s²",
                  "Distance = area = ½ × 10 × 24",
                  "= 120 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq2-03",
            question: "A velocity–time graph for a bus shows three phases: 0–6 s velocity rises uniformly from 0 to 18 m/s; 6–14 s constant at 18 m/s; 14–18 s falls uniformly from 18 m/s to 0.\n(a) Calculate the acceleration in the first phase. [2]\n(b) Calculate the total distance travelled. [4]\n(c) Calculate the average speed over the whole journey. [2]",
            marks: 8,
            modelAnswer: "(a) a = (18 − 0)/6 = 3.0 m/s²\n\n(b) Phase 1 (triangle): ½ × 6 × 18 = 54 m. Phase 2 (rectangle): 8 × 18 = 144 m. Phase 3 (triangle): ½ × 4 × 18 = 36 m. Total = 54 + 144 + 36 = 234 m\n\n(c) average speed = total distance / total time = 234 / 18 = 13 m/s",
            markScheme: [
              "a = (18 − 0)/6 = 3.0 m/s² (1 mark)",
              "unit/value correct for (a) (1 mark)",
              "Phase 1 = ½ × 6 × 18 = 54 m (1 mark)",
              "Phase 2 = 8 × 18 = 144 m (1 mark)",
              "Phase 3 = ½ × 4 × 18 = 36 m (1 mark)",
              "Total = 234 m (1 mark)",
              "average speed = 234/18 (1 mark)",
              "13 m/s (1 mark)",
            ],
            commonError: "Taking the constant-speed phase as 14 s (the end time) rather than its duration of 8 s (from 6 s to 14 s).",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            difficulty: "core",
            hints: [
              "Acceleration in phase 1 = gradient = Δv/Δt.",
              "Split the area into a triangle, a rectangle and a triangle.",
              "Phase 2 lasts 14 − 6 = 8 s; phase 3 lasts 18 − 14 = 4 s.",
              "Average speed uses total distance over total time (18 s).",
            ],
            strategy: "Label each phase's duration before finding areas",
            solutions: [
              {
                label: "Phase-by-phase areas",
                steps: [
                  "a = (18 − 0)/6 = 3.0 m/s²",
                  "Triangle 1 = ½ × 6 × 18 = 54 m",
                  "Rectangle = 8 × 18 = 144 m",
                  "Triangle 2 = ½ × 4 × 18 = 36 m",
                  "Total = 234 m; average speed = 234/18 = 13 m/s",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq2-04",
            question: "A distance–time graph for a delivery driver shows: 0–20 s a straight line from 0 to 300 m; 20–35 s a horizontal line at 300 m; 35–50 s a straight line from 300 m to 600 m.\n(a) Describe the motion in each of the three phases. [3]\n(b) Calculate the speed in phase 1 and in phase 3. [4]\n(c) Calculate the average speed for the whole journey. [2]",
            marks: 9,
            modelAnswer: "(a) Phase 1: constant speed (straight line, positive gradient). Phase 2: stationary / at rest (horizontal line, zero gradient). Phase 3: constant speed, faster than phase 1 (steeper line).\n\n(b) Phase 1 speed = 300/20 = 15 m/s. Phase 3 speed = (600 − 300)/(50 − 35) = 300/15 = 20 m/s.\n\n(c) average speed = total distance / total time = 600 / 50 = 12 m/s",
            markScheme: [
              "Phase 1 constant speed (1 mark)",
              "Phase 2 stationary / at rest (1 mark)",
              "Phase 3 constant speed / faster than phase 1 (1 mark)",
              "Phase 1 speed = 300/20 = 15 m/s (1 mark)",
              "Phase 3 speed = 300/15 = 20 m/s (1 mark)",
              "units correct for both speeds (1 mark)",
              "average speed = 600/50 (1 mark)",
              "12 m/s (1 mark)",
            ],
            commonError: "For the average speed, dividing by the moving time (35 s) instead of the total time (50 s) — the stationary period still counts as time.",
            guideRef: "Distance–Time Graphs",
            difficulty: "core",
            hints: [
              "On a distance–time graph, slope = speed and flat = stationary.",
              "Phase 3 uses the change in distance over the change in time for that segment.",
              "Average speed uses total distance (600 m) and total time (50 s), including the stop.",
            ],
            strategy: "Read each segment's gradient; use totals for the average",
            solutions: [
              {
                label: "Gradients and average",
                steps: [
                  "Phase 1 speed = 300/20 = 15 m/s",
                  "Phase 3 speed = (600 − 300)/(50 − 35) = 300/15 = 20 m/s",
                  "Average speed = 600/50 = 12 m/s",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq2-05",
            question: "Explain how you would find the instantaneous speed of an object at a particular time from a curved distance–time graph. [3]",
            marks: 3,
            modelAnswer: "Draw a tangent to the curve at the point corresponding to that time. Then find the gradient of the tangent by constructing a large right-angled triangle on it and dividing the change in distance (rise) by the change in time (run). This gradient equals the instantaneous speed at that moment.",
            markScheme: [
              "draw a tangent at the required point (1 mark)",
              "find the gradient of the tangent (rise/run) (1 mark)",
              "this gradient = instantaneous speed (1 mark)",
            ],
            commonError: "Calculating the gradient between two widely separated points on the curve — this gives an average speed, not the instantaneous speed at one point.",
            guideRef: "Distance–Time Graphs",
            difficulty: "core",
            hints: [
              "Instantaneous means at a single instant.",
              "A straight line that just touches the curve at the point is the tangent.",
              "Gradient = rise / run; use a large triangle for accuracy.",
            ],
            strategy: "Tangent then gradient",
          },
          {
            id: "phys-motion-bq2-06",
            question: "A velocity–time graph shows a car: 0–5 s constant velocity 8 m/s; 5–9 s accelerating uniformly from 8 m/s to 20 m/s.\n(a) Calculate the acceleration during the second phase. [2]\n(b) Calculate the total distance travelled over the 9 s. [4]",
            marks: 6,
            modelAnswer: "(a) a = (20 − 8)/(9 − 5) = 12/4 = 3.0 m/s²\n\n(b) Phase 1 (rectangle): 8 × 5 = 40 m. Phase 2 (trapezium): [(8 + 20)/2] × 4 = 14 × 4 = 56 m. Total = 40 + 56 = 96 m",
            markScheme: [
              "a = (20 − 8)/4 (1 mark)",
              "3.0 m/s² (1 mark)",
              "Phase 1 = 8 × 5 = 40 m (1 mark)",
              "Phase 2 area = (8 + 20)/2 × 4 / average speed method (1 mark)",
              "Phase 2 = 56 m (1 mark)",
              "Total = 96 m (1 mark)",
            ],
            commonError: "Treating phase 2 as a triangle (½ × 4 × 20 = 40 m) instead of a trapezium — the velocity does not start from zero in that phase.",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            difficulty: "core",
            hints: [
              "Acceleration in phase 2 = gradient over that segment only.",
              "Phase 1 is a rectangle; phase 2 is a trapezium (starts at 8 m/s).",
              "Trapezium area = average of parallel sides × width = (8 + 20)/2 × 4.",
              "Add the two distances.",
            ],
            strategy: "Identify the correct shape for each phase",
            solutions: [
              {
                label: "Rectangle plus trapezium",
                steps: [
                  "a = (20 − 8)/4 = 3.0 m/s²",
                  "Phase 1 = 8 × 5 = 40 m",
                  "Phase 2 = (8 + 20)/2 × 4 = 56 m",
                  "Total = 96 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq2-07",
            question: "A velocity–time graph shows an object: 0–4 s velocity rises uniformly from 0 to 12 m/s; 4–10 s velocity continues rising uniformly from 12 m/s to 30 m/s.\n(a) Show that the acceleration is the same in both phases. [3]\n(b) Calculate the total distance travelled. [3]",
            marks: 6,
            modelAnswer: "(a) Phase 1: a = (12 − 0)/4 = 3.0 m/s². Phase 2: a = (30 − 12)/(10 − 4) = 18/6 = 3.0 m/s². The two gradients are equal, so the acceleration is the same (3.0 m/s²) throughout.\n\n(b) Phase 1 (triangle): ½ × 4 × 12 = 24 m. Phase 2 (trapezium): [(12 + 30)/2] × 6 = 21 × 6 = 126 m. Total = 24 + 126 = 150 m",
            markScheme: [
              "Phase 1: a = 12/4 = 3.0 m/s² (1 mark)",
              "Phase 2: a = 18/6 = 3.0 m/s² (1 mark)",
              "states accelerations equal / same gradient (1 mark)",
              "Phase 1 = ½ × 4 × 12 = 24 m (1 mark)",
              "Phase 2 = (12 + 30)/2 × 6 = 126 m (1 mark)",
              "Total = 150 m (1 mark)",
            ],
            commonError: "Using the wrong time interval for phase 2 (using 10 s instead of the 6 s duration), or treating phase 2 as a triangle from zero.",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            difficulty: "challenge",
            hints: [
              "Find the gradient of each phase separately and compare.",
              "Phase 2 lasts 10 − 4 = 6 s.",
              "Phase 1 is a triangle; phase 2 is a trapezium.",
              "Add the two areas for the total distance.",
            ],
            strategy: "Compare gradients; then sum the shape areas",
            solutions: [
              {
                label: "Equal gradients, two areas",
                steps: [
                  "Phase 1: a = (12 − 0)/4 = 3.0 m/s²",
                  "Phase 2: a = (30 − 12)/6 = 3.0 m/s² (equal)",
                  "Phase 1 area = ½ × 4 × 12 = 24 m",
                  "Phase 2 area = (12 + 30)/2 × 6 = 126 m",
                  "Total = 150 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq2-08",
            question: "Compare a distance–time graph and a velocity–time graph for the same object moving at a constant speed in a straight line. State the shape of each graph and what its gradient represents. [4]",
            marks: 4,
            modelAnswer: "On a distance–time graph, constant speed appears as a straight line with a constant positive gradient; the gradient represents the speed. On a velocity–time graph, constant speed appears as a horizontal straight line (zero gradient); the gradient represents the acceleration, which is zero here. So the same motion looks like a sloping line on one graph and a flat line on the other.",
            markScheme: [
              "distance–time: straight sloping line (1 mark)",
              "distance–time gradient = speed (1 mark)",
              "velocity–time: horizontal line (1 mark)",
              "velocity–time gradient = acceleration (= 0 here) (1 mark)",
            ],
            commonError: "Saying the velocity–time graph also slopes upward — at constant speed the velocity does not change, so the line is horizontal.",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            difficulty: "core",
            hints: [
              "Constant speed means distance increases steadily but velocity stays the same.",
              "Think about what the gradient means on each axis pair.",
              "One graph slopes; the other is flat.",
            ],
            strategy: "Contrast the two graph types for the same motion",
          },
          {
            id: "phys-motion-bq2-09",
            question: "A velocity–time graph shows a car: 0–10 s constant 20 m/s; 10–20 s decelerating uniformly from 20 m/s to 0; the car then remains at rest until 25 s.\n(a) Calculate the deceleration between 10 s and 20 s. [2]\n(b) Calculate the total distance travelled. [3]\n(c) Calculate the average speed over the full 25 s. [2]",
            marks: 7,
            modelAnswer: "(a) a = (0 − 20)/(20 − 10) = −20/10 = −2.0 m/s² (deceleration = 2.0 m/s²)\n\n(b) Phase 1 (rectangle): 20 × 10 = 200 m. Phase 2 (triangle): ½ × 10 × 20 = 100 m. Phase 3 (at rest): 0 m. Total = 200 + 100 = 300 m\n\n(c) average speed = total distance / total time = 300 / 25 = 12 m/s",
            markScheme: [
              "a = (0 − 20)/10 (1 mark)",
              "−2.0 m/s² / deceleration 2.0 m/s² (1 mark)",
              "Phase 1 = 20 × 10 = 200 m (1 mark)",
              "Phase 2 = ½ × 10 × 20 = 100 m (1 mark)",
              "Total = 300 m (1 mark)",
              "average speed = 300/25 (1 mark)",
              "12 m/s (1 mark)",
            ],
            commonError: "Leaving the at-rest phase out of the total time, dividing 300 by 20 instead of 25.",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            difficulty: "challenge",
            hints: [
              "Deceleration = gradient of the falling segment.",
              "Phase 1 is a rectangle; phase 2 a triangle; phase 3 contributes no distance.",
              "Average speed still divides by the full 25 s.",
            ],
            strategy: "Sum distances, then divide by total time including the stop",
            solutions: [
              {
                label: "Full journey",
                steps: [
                  "a = (0 − 20)/10 = −2.0 m/s²",
                  "Rectangle = 20 × 10 = 200 m",
                  "Triangle = ½ × 10 × 20 = 100 m",
                  "Total = 300 m; average speed = 300/25 = 12 m/s",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq2-10",
            question: "Explain why the area under a velocity–time graph gives the distance travelled. Refer to a phase of constant velocity in your answer. [3]",
            marks: 3,
            modelAnswer: "For a phase of constant velocity, distance = velocity × time. On a velocity–time graph this phase is a horizontal line, and velocity × time is exactly the area of the rectangle between the line and the time axis. For changing velocity, the region can be split into thin strips (or standard shapes such as triangles and trapezia), each of which is velocity × small time = a small distance; adding the strip areas gives the total distance. So the area under the graph always represents the distance travelled.",
            markScheme: [
              "distance = velocity × time for constant velocity (1 mark)",
              "this product equals the rectangular area under the line (1 mark)",
              "for changing velocity, summing areas (strips/shapes) gives total distance (1 mark)",
            ],
            commonError: "Saying the gradient gives the distance — the gradient gives acceleration; the area gives distance.",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            difficulty: "core",
            hints: [
              "Start with the constant-velocity case: distance = speed × time.",
              "What geometric quantity does speed × time correspond to on the graph?",
              "Extend the idea to changing velocity by adding many small areas.",
            ],
            strategy: "Reason from the rectangle area for constant velocity",
          },
        ],
      },
      {
        id: "phys-motion-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Free fall, acceleration of free fall and terminal velocity.",
        questions: [
          {
            id: "phys-motion-bq3-01",
            question: "(a) State what is meant by free fall. [1]\n(b) State the approximate value of the acceleration of free fall near the Earth's surface, including its unit. [1]\n(c) State why, in the absence of air resistance, a heavy ball and a light ball dropped together reach the ground at the same time. [2]",
            marks: 4,
            modelAnswer: "(a) Free fall is motion under gravity alone, with no air resistance (the only force acting is weight).\n\n(b) g ≈ 9.8 m/s² (10 m/s² also accepted).\n\n(c) In free fall every object accelerates at the same value g regardless of mass, because a larger weight is exactly matched by a larger mass (inertia), so the acceleration is the same. They therefore fall together and land at the same time.",
            markScheme: [
              "free fall = falling under gravity only / no air resistance (1 mark)",
              "g ≈ 9.8 m/s² (or 10 m/s²) with unit (1 mark)",
              "all objects accelerate at the same g regardless of mass (1 mark)",
              "larger weight balanced by larger mass/inertia (1 mark)",
            ],
            commonError: "Stating that the heavier ball falls faster — without air resistance, mass does not affect the rate of fall.",
            guideRef: "Free Fall and Terminal Velocity",
            difficulty: "warmup",
          },
          {
            id: "phys-motion-bq3-02",
            question: "A ball is dropped from rest. Using g = 10 m/s² and ignoring air resistance:\n(a) Calculate its speed after 2.5 s. [2]\n(b) Calculate the distance it has fallen in that time. [3]",
            marks: 5,
            modelAnswer: "(a) v = u + gt = 0 + 10 × 2.5 = 25 m/s\n\n(b) s = ut + ½gt² = 0 + ½ × 10 × 2.5² = ½ × 10 × 6.25 = 31.25 m ≈ 31 m",
            markScheme: [
              "v = u + gt / correct substitution (1 mark)",
              "25 m/s (1 mark)",
              "s = ut + ½gt² or s = ½gt² (1 mark)",
              "correct substitution with t² = 6.25 (1 mark)",
              "31.25 m (accept 31 m) (1 mark)",
            ],
            commonError: "Forgetting to square the time in s = ½gt² (using 2.5 instead of 6.25).",
            guideRef: "Free Fall and Terminal Velocity",
            difficulty: "warmup",
            solutions: [
              {
                label: "Speed and distance",
                steps: [
                  "v = 0 + 10 × 2.5 = 25 m/s",
                  "s = ½ × 10 × 2.5²",
                  "= ½ × 10 × 6.25 = 31.25 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq3-03",
            question: "A skydiver of total weight 800 N falls and reaches terminal velocity.\n(a) State the size and direction of the air resistance acting on her at terminal velocity. [2]\n(b) State the resultant force and the acceleration at terminal velocity. [2]\n(c) Explain why she does not continue to accelerate. [2]",
            marks: 6,
            modelAnswer: "(a) Air resistance = 800 N, directed upward (it equals the weight).\n\n(b) Resultant force = 0 N; acceleration = 0 m/s².\n\n(c) At terminal velocity the upward drag has grown to equal the downward weight, so the forces are balanced and the resultant force is zero. With no resultant force there is no acceleration (F = ma), so the velocity stays constant.",
            markScheme: [
              "air resistance = 800 N (1 mark)",
              "directed upward (1 mark)",
              "resultant force = 0 N (1 mark)",
              "acceleration = 0 m/s² (1 mark)",
              "drag has grown to equal weight / forces balanced (1 mark)",
              "no resultant force → no acceleration → constant velocity (1 mark)",
            ],
            commonError: "Saying the air resistance is more than the weight at terminal velocity — it is exactly equal, giving zero resultant force.",
            guideRef: "Free Fall and Terminal Velocity",
            difficulty: "core",
            hints: [
              "At terminal velocity the speed is constant.",
              "Constant velocity means zero resultant force.",
              "If the resultant is zero, drag must equal weight in size.",
            ],
            strategy: "Use the terminal-velocity force balance",
          },
          {
            id: "phys-motion-bq3-04",
            question: "Describe and explain, in terms of forces, the motion of a small steel ball dropped into a tall column of oil. It speeds up at first and then falls at a steady speed. [5]",
            marks: 5,
            modelAnswer: "When first released, the ball's weight (downward) is greater than the drag from the oil (upward), so there is a downward resultant force and the ball accelerates. As the ball speeds up, the drag from the oil increases. The resultant force therefore decreases and the acceleration falls. Eventually the upward drag grows until it equals the downward weight, the resultant force becomes zero, and the ball continues at a constant (terminal) velocity.",
            markScheme: [
              "initially weight > drag → resultant force downward (1 mark)",
              "ball accelerates (downward) (1 mark)",
              "as speed increases, drag increases (1 mark)",
              "resultant force decreases so acceleration decreases (1 mark)",
              "drag = weight → resultant = 0 → constant/terminal velocity (1 mark)",
            ],
            commonError: "Stating that the ball stops when the forces balance — it stops accelerating but keeps moving at terminal velocity.",
            guideRef: "Free Fall and Terminal Velocity",
            difficulty: "core",
            hints: [
              "Identify the two forces: weight (constant, down) and drag (up, grows with speed).",
              "Use F = ma to connect the resultant force to the acceleration.",
              "What condition gives a steady speed?",
              "Steady speed is not the same as stopping.",
            ],
            strategy: "Stage-by-stage force balance",
          },
          {
            id: "phys-motion-bq3-05",
            question: "A ball is thrown vertically upward at 24 m/s. Using g = 10 m/s² and ignoring air resistance:\n(a) Calculate the time to reach the highest point. [2]\n(b) Calculate the maximum height reached. [3]\n(c) State the total time of flight until it returns to the throwing height. [1]",
            marks: 6,
            modelAnswer: "(a) Taking up as positive: at the top v = 0. t = (v − u)/a = (0 − 24)/(−10) = 2.4 s\n\n(b) Using v² = u² + 2as: 0 = 24² + 2(−10)s → 0 = 576 − 20s → s = 576/20 = 28.8 m\n\n(c) By symmetry, total flight time = 2 × 2.4 = 4.8 s",
            markScheme: [
              "uses v = 0 at the top with a = −10 m/s² (1 mark)",
              "t = 2.4 s (1 mark)",
              "uses v² = u² + 2as with v = 0 (1 mark)",
              "0 = 576 − 20s / correct substitution (1 mark)",
              "s = 28.8 m (accept 29 m) (1 mark)",
              "total time = 4.8 s (1 mark)",
            ],
            commonError: "Forgetting that the upward time equals the downward time, so the total flight time is double the time to the top.",
            guideRef: "Free Fall and Terminal Velocity",
            difficulty: "core",
            hints: [
              "Take up as positive: u = +24 m/s, a = −10 m/s².",
              "At the highest point the velocity is zero.",
              "For height, use v² = u² + 2as (or s = ut + ½at²).",
              "Rise time equals fall time, so double it for total flight.",
            ],
            strategy: "Use the symmetry of vertical projectile motion",
            solutions: [
              {
                label: "Up-and-down motion",
                steps: [
                  "t to top: t = (0 − 24)/(−10) = 2.4 s",
                  "Height: 0 = 24² + 2(−10)s → s = 576/20 = 28.8 m",
                  "Total flight time = 2 × 2.4 = 4.8 s",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq3-06",
            question: "(a) Sketch the shape of the velocity–time graph for a skydiver from the moment of jumping until just before the parachute opens, given that she reaches terminal velocity. [2]\n(b) Explain the shape of the graph in terms of forces. [3]",
            marks: 5,
            modelAnswer: "(a) The graph starts at the origin and rises steeply, then the gradient gradually decreases (the curve bends over) until it becomes a horizontal line at the terminal velocity.\n\n(b) At first weight greatly exceeds drag, so the resultant force and hence the acceleration are large — the line is steep. As speed increases, drag increases, the resultant force falls, so the acceleration (gradient) decreases and the curve bends over. When drag equals weight the resultant force is zero, the acceleration is zero, and the velocity stays constant — a horizontal line at terminal velocity.",
            markScheme: [
              "graph rises from origin then curves and levels off (1 mark)",
              "becomes horizontal at terminal velocity (1 mark)",
              "initially large resultant force → steep gradient / large acceleration (1 mark)",
              "drag increases with speed → resultant force decreases → gradient decreases (1 mark)",
              "drag = weight → zero resultant → constant velocity / horizontal line (1 mark)",
            ],
            commonError: "Drawing a straight diagonal line all the way — that would mean constant acceleration, which only holds with no air resistance.",
            guideRef: "Free Fall and Terminal Velocity",
            difficulty: "challenge",
            hints: [
              "Gradient of a v–t graph is the acceleration.",
              "The acceleration is large at first, then decreases.",
              "What does the line look like once acceleration reaches zero?",
              "Link each part of the curve to the size of the resultant force.",
            ],
            strategy: "Connect graph gradient to the changing resultant force",
          },
          {
            id: "phys-motion-bq3-07",
            question: "An object is dropped from rest. Using g = 10 m/s² and ignoring air resistance, calculate how long it takes to reach the ground from a height of 80 m, and its speed on impact. [5]",
            marks: 5,
            modelAnswer: "Time: s = ut + ½gt² → 80 = 0 + ½ × 10 × t² → 80 = 5t² → t² = 16 → t = 4.0 s\nSpeed on impact: v = u + gt = 0 + 10 × 4.0 = 40 m/s (or v² = 2 × 10 × 80 = 1600, v = 40 m/s)",
            markScheme: [
              "uses s = ½gt² with s = 80 (1 mark)",
              "80 = 5t² → t² = 16 (1 mark)",
              "t = 4.0 s (1 mark)",
              "v = gt or v² = 2gs (1 mark)",
              "v = 40 m/s (1 mark)",
            ],
            commonError: "Taking the square root incorrectly (e.g. t² = 16 giving t = 8) or mixing up the formulas for time and speed.",
            guideRef: "Free Fall and Terminal Velocity",
            difficulty: "core",
            hints: [
              "Find the time first using s = ½gt² with s = 80 m.",
              "80 = 5t², so t² = 16.",
              "Then use v = gt for the impact speed.",
            ],
            strategy: "Find time, then speed",
            solutions: [
              {
                label: "Two-step free fall",
                steps: [
                  "80 = ½ × 10 × t² → 80 = 5t² → t² = 16 → t = 4.0 s",
                  "v = u + gt = 0 + 10 × 4.0 = 40 m/s",
                  "Check: v² = 2gs = 2 × 10 × 80 = 1600 → v = 40 m/s ✓",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq3-08",
            question: "Two skydivers of the same size and shape but different masses jump from the same aircraft. Explain why the heavier skydiver reaches a higher terminal velocity. [4]",
            marks: 4,
            modelAnswer: "Terminal velocity is reached when the upward drag equals the downward weight. The heavier skydiver has a greater weight, so a greater drag force is needed to balance it. Because drag increases with speed, this larger drag is only reached at a higher speed. Therefore the heavier skydiver must fall faster before the forces balance, giving a higher terminal velocity.",
            markScheme: [
              "terminal velocity when drag = weight (1 mark)",
              "heavier skydiver has greater weight (1 mark)",
              "needs greater drag to balance the greater weight (1 mark)",
              "drag increases with speed, so balance occurs at a higher speed (1 mark)",
            ],
            commonError: "Claiming the heavier skydiver experiences a larger g — g is the same for both; it is the larger weight needing a larger balancing drag that matters.",
            guideRef: "Free Fall and Terminal Velocity",
            difficulty: "challenge",
            hints: [
              "Write down the condition for terminal velocity.",
              "Compare the weights of the two skydivers.",
              "A larger weight needs a larger drag to balance.",
              "How does drag depend on speed?",
            ],
            strategy: "Reason from the drag = weight balance",
          },
          {
            id: "phys-motion-bq3-09",
            question: "A ball is dropped from rest from a height of 45 m (g = 10 m/s², ignore air resistance).\n(a) Calculate the time taken to fall. [2]\n(b) Calculate the velocity after it has fallen 20 m. [3]",
            marks: 5,
            modelAnswer: "(a) s = ½gt² → 45 = ½ × 10 × t² → 45 = 5t² → t² = 9 → t = 3.0 s\n\n(b) v² = u² + 2gs = 0 + 2 × 10 × 20 = 400 → v = √400 = 20 m/s",
            markScheme: [
              "45 = 5t² (1 mark)",
              "t = 3.0 s (1 mark)",
              "uses v² = u² + 2gs with s = 20 m (1 mark)",
              "v² = 400 (1 mark)",
              "v = 20 m/s (1 mark)",
            ],
            commonError: "In (b) using the full 45 m instead of 20 m, or using the total fall time rather than the distance equation.",
            guideRef: "Free Fall and Terminal Velocity",
            difficulty: "core",
            hints: [
              "Time uses s = ½gt² with the full 45 m.",
              "For the velocity after 20 m, use v² = u² + 2gs with s = 20 m.",
              "v² = 2 × 10 × 20.",
            ],
            strategy: "Pick the equation matching the variables given",
            solutions: [
              {
                label: "Time then velocity",
                steps: [
                  "45 = ½ × 10 × t² → t² = 9 → t = 3.0 s",
                  "v² = 2 × 10 × 20 = 400",
                  "v = 20 m/s",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq3-10",
            question: "A coin and a feather are released at the same instant inside a long sealed tube.\n(a) In normal conditions (air present), which lands first and why? [2]\n(b) The air is then pumped out and the experiment repeated. Describe and explain what is observed. [3]",
            marks: 5,
            modelAnswer: "(a) The coin lands first. With air present, air resistance has a much greater effect on the light feather (large drag relative to its small weight), slowing it considerably, while the heavier, denser coin is affected far less, so the coin falls faster.\n\n(b) With the air removed there is no air resistance, so both objects are in free fall and accelerate at the same value g regardless of mass. The coin and feather fall together and land at the same time.",
            markScheme: [
              "coin lands first (1 mark)",
              "air resistance affects the feather much more than the coin (1 mark)",
              "with air removed there is no air resistance (1 mark)",
              "both accelerate at the same g regardless of mass (1 mark)",
              "they land at the same time / fall together (1 mark)",
            ],
            commonError: "Saying that in a vacuum the feather falls faster or that gravity is stronger on the coin — without air both fall at the same rate.",
            guideRef: "Free Fall and Terminal Velocity",
            difficulty: "core",
            hints: [
              "In air, which object is affected more by drag?",
              "Drag is large compared with weight for the light feather.",
              "Removing the air removes air resistance entirely.",
              "In free fall, acceleration does not depend on mass.",
            ],
            strategy: "Compare the role of air resistance with and without air",
          },
        ],
      },
      {
        id: "phys-motion-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Mixed multi-stage motion problems combining graphs, equations of motion and free fall.",
        questions: [
          {
            id: "phys-motion-bq4-01",
            question: "A car accelerates uniformly from rest at 2.5 m/s² for 8.0 s.\n(a) Calculate its final speed. [2]\n(b) Calculate the distance travelled. [2]",
            marks: 4,
            modelAnswer: "(a) v = u + at = 0 + 2.5 × 8.0 = 20 m/s\n\n(b) s = ut + ½at² = 0 + ½ × 2.5 × 8.0² = ½ × 2.5 × 64 = 80 m",
            markScheme: [
              "v = u + at / correct substitution (1 mark)",
              "20 m/s (1 mark)",
              "s = ut + ½at² or average speed method (1 mark)",
              "80 m (1 mark)",
            ],
            commonError: "Forgetting to square the time in ½at² (using 8.0 instead of 64).",
            guideRef: "Solving Motion Problems",
            difficulty: "warmup",
            solutions: [
              {
                label: "Speed then distance",
                steps: [
                  "v = 0 + 2.5 × 8.0 = 20 m/s",
                  "s = ½ × 2.5 × 8.0² = ½ × 2.5 × 64",
                  "= 80 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq4-02",
            question: "A cyclist travels at a steady 9.0 m/s for 40 s.\n(a) Calculate the distance covered. [2]\n(b) State what the velocity–time graph for this journey looks like, and what the area under it represents. [2]",
            marks: 4,
            modelAnswer: "(a) distance = speed × time = 9.0 × 40 = 360 m\n\n(b) The velocity–time graph is a horizontal straight line at 9.0 m/s. The area under it (a rectangle, 9.0 × 40) represents the distance travelled.",
            markScheme: [
              "distance = speed × time = 9.0 × 40 (1 mark)",
              "360 m (1 mark)",
              "horizontal line at 9.0 m/s (1 mark)",
              "area under the line = distance travelled (1 mark)",
            ],
            commonError: "Describing the graph as a sloping line — at constant speed the velocity does not change, so the line is horizontal.",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            difficulty: "warmup",
          },
          {
            id: "phys-motion-bq4-03",
            question: "A train journey has three stages. Stage 1: accelerates uniformly from rest to 30 m/s in 20 s. Stage 2: travels at 30 m/s for 100 s. Stage 3: decelerates uniformly to rest in 15 s.\n(a) Calculate the acceleration in stage 1 and the deceleration in stage 3. [4]\n(b) Calculate the total distance travelled. [4]",
            marks: 8,
            modelAnswer: "(a) Stage 1: a = (30 − 0)/20 = 1.5 m/s². Stage 3: a = (0 − 30)/15 = −2.0 m/s² (deceleration = 2.0 m/s²).\n\n(b) Stage 1 (triangle): ½ × 20 × 30 = 300 m. Stage 2 (rectangle): 30 × 100 = 3000 m. Stage 3 (triangle): ½ × 15 × 30 = 225 m. Total = 300 + 3000 + 225 = 3525 m",
            markScheme: [
              "Stage 1: a = (30 − 0)/20 = 1.5 m/s² (1 mark)",
              "unit/value for stage 1 (1 mark)",
              "Stage 3: a = (0 − 30)/15 = −2.0 m/s² / deceleration 2.0 m/s² (1 mark)",
              "value for stage 3 (1 mark)",
              "Stage 1 distance = ½ × 20 × 30 = 300 m (1 mark)",
              "Stage 2 distance = 30 × 100 = 3000 m (1 mark)",
              "Stage 3 distance = ½ × 15 × 30 = 225 m (1 mark)",
              "Total = 3525 m (1 mark)",
            ],
            commonError: "Mixing the stage times (e.g. using 20 s for stage 3) or using base × height instead of ½ × base × height for the triangular stages.",
            guideRef: "Solving Motion Problems",
            difficulty: "core",
            hints: [
              "Acceleration = Δv/Δt for each stage; mind the sign in stage 3.",
              "Sketch the v–t graph: triangle, rectangle, triangle.",
              "Use ½ × base × height for the triangles and base × height for the rectangle.",
              "Add the three distances.",
            ],
            strategy: "Sketch the v–t graph and sum the areas",
            solutions: [
              {
                label: "Three-stage journey",
                steps: [
                  "Stage 1: a = 30/20 = 1.5 m/s²; distance = ½ × 20 × 30 = 300 m",
                  "Stage 2: distance = 30 × 100 = 3000 m",
                  "Stage 3: a = −30/15 = −2.0 m/s²; distance = ½ × 15 × 30 = 225 m",
                  "Total = 300 + 3000 + 225 = 3525 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq4-04",
            question: "A car moving at 28 m/s brakes to rest with a uniform deceleration of 7.0 m/s².\n(a) Calculate the time taken to stop. [2]\n(b) Calculate the braking distance using an equation of motion. [3]",
            marks: 5,
            modelAnswer: "(a) t = (v − u)/a = (0 − 28)/(−7.0) = 4.0 s\n\n(b) v² = u² + 2as → 0 = 28² + 2(−7.0)s → 0 = 784 − 14s → s = 784/14 = 56 m\n(or s = average speed × time = 14 × 4.0 = 56 m)",
            markScheme: [
              "t = (0 − 28)/(−7.0) (1 mark)",
              "4.0 s (1 mark)",
              "v² = u² + 2as with v = 0 / average-speed method (1 mark)",
              "0 = 784 − 14s / correct substitution (1 mark)",
              "56 m (1 mark)",
            ],
            commonError: "Using s = u × t = 28 × 4 = 112 m (full speed for the whole time) instead of the average speed or the v² = u² + 2as equation.",
            guideRef: "Solving Motion Problems",
            difficulty: "core",
            hints: [
              "Deceleration means a = −7.0 m/s².",
              "Time: t = (v − u)/a with v = 0.",
              "Distance: use v² = u² + 2as, or average speed × time.",
            ],
            strategy: "Stopping time then braking distance",
            solutions: [
              {
                label: "Time and distance",
                steps: [
                  "t = (0 − 28)/(−7.0) = 4.0 s",
                  "v² = u² + 2as → 0 = 784 − 14s → s = 56 m",
                  "Check: average speed = 14 m/s × 4.0 s = 56 m ✓",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq4-05",
            question: "**Challenge.** Two cars start from the same point at the same instant, travelling in the same direction. Car X moves at a constant 15 m/s. Car Y starts from rest and accelerates uniformly at 3.0 m/s².\n(a) Write expressions for the distance travelled by each car after time t. [2]\n(b) Calculate the time when car Y catches car X. [3]\n(c) Calculate the distance each has travelled at that moment. [2]",
            marks: 7,
            modelAnswer: "(a) s_X = 15t; s_Y = ½ × 3.0 × t² = 1.5t²\n\n(b) Y catches X when s_Y = s_X: 1.5t² = 15t → 1.5t² − 15t = 0 → 1.5t(t − 10) = 0 → t = 0 or t = 10 s. So Y catches X at t = 10 s.\n\n(c) s_X = 15 × 10 = 150 m; s_Y = 1.5 × 10² = 150 m (both 150 m ✓)",
            markScheme: [
              "s_X = 15t (1 mark)",
              "s_Y = 1.5t² (1 mark)",
              "sets 1.5t² = 15t (1 mark)",
              "factorises / solves to t = 10 s (1 mark)",
              "rejects t = 0 (start) (1 mark)",
              "distance = 150 m (both cars) (1 mark)",
              "shows both equal / correct substitution (1 mark)",
            ],
            commonError: "Dividing both sides by t and losing the t = 0 root, or solving 1.5t² = 15t as t = 15/1.5 = 10 by chance without correct algebra.",
            guideRef: "Solving Motion Problems",
            difficulty: "challenge",
            hints: [
              "Constant speed: s_X = vt. Uniform acceleration from rest: s_Y = ½at².",
              "Catch-up means equal distances: s_Y = s_X.",
              "1.5t² = 15t → 1.5t² − 15t = 0.",
              "Factor out t: 1.5t(t − 10) = 0; take the non-zero root.",
            ],
            strategy: "Set position equations equal and solve",
            solutions: [
              {
                label: "Catch-up algebra",
                steps: [
                  "s_X = 15t; s_Y = ½ × 3.0 × t² = 1.5t²",
                  "1.5t² = 15t → 1.5t(t − 10) = 0",
                  "t = 0 (start) or t = 10 s (catch-up)",
                  "Distance = 15 × 10 = 150 m for each car",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq4-06",
            question: "A motorcyclist accelerates uniformly from 6.0 m/s to 24 m/s over a distance of 90 m.\n(a) Calculate the acceleration. [3]\n(b) Calculate the time taken. [2]",
            marks: 5,
            modelAnswer: "(a) v² = u² + 2as → 24² = 6.0² + 2a(90) → 576 = 36 + 180a → 540 = 180a → a = 3.0 m/s²\n\n(b) t = (v − u)/a = (24 − 6.0)/3.0 = 18/3.0 = 6.0 s",
            markScheme: [
              "uses v² = u² + 2as (1 mark)",
              "576 = 36 + 180a / correct substitution (1 mark)",
              "a = 3.0 m/s² (1 mark)",
              "t = (24 − 6.0)/3.0 (1 mark)",
              "6.0 s (1 mark)",
            ],
            commonError: "Forgetting to square the speeds, e.g. writing 24 − 6 = 180a instead of 24² − 6² = 180a.",
            guideRef: "Solving Motion Problems",
            difficulty: "core",
            hints: [
              "Distance known, time unknown → use v² = u² + 2as.",
              "24² − 6.0² = 2a × 90.",
              "Then find time from a = (v − u)/t.",
            ],
            strategy: "v² = u² + 2as for a, then v = u + at for t",
            solutions: [
              {
                label: "Acceleration then time",
                steps: [
                  "576 = 36 + 180a → 540 = 180a → a = 3.0 m/s²",
                  "t = (24 − 6.0)/3.0 = 18/3.0",
                  "= 6.0 s",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq4-07",
            question: "A lift starts from rest, accelerates uniformly to 4.0 m/s in 5.0 s, travels at 4.0 m/s for 12 s, then decelerates uniformly to rest in 2.0 s.\n(a) Calculate the acceleration and the deceleration. [3]\n(b) Calculate the total distance travelled. [4]",
            marks: 7,
            modelAnswer: "(a) Acceleration = (4.0 − 0)/5.0 = 0.80 m/s². Deceleration: a = (0 − 4.0)/2.0 = −2.0 m/s² (deceleration = 2.0 m/s²).\n\n(b) Stage 1 (triangle): ½ × 5.0 × 4.0 = 10 m. Stage 2 (rectangle): 4.0 × 12 = 48 m. Stage 3 (triangle): ½ × 2.0 × 4.0 = 4.0 m. Total = 10 + 48 + 4.0 = 62 m",
            markScheme: [
              "acceleration = (4.0 − 0)/5.0 = 0.80 m/s² (1 mark)",
              "deceleration = (0 − 4.0)/2.0 = 2.0 m/s² (1 mark)",
              "values/units correct (1 mark)",
              "Stage 1 = ½ × 5.0 × 4.0 = 10 m (1 mark)",
              "Stage 2 = 4.0 × 12 = 48 m (1 mark)",
              "Stage 3 = ½ × 2.0 × 4.0 = 4.0 m (1 mark)",
              "Total = 62 m (1 mark)",
            ],
            commonError: "Swapping the stage durations (using 2.0 s for the acceleration phase and 5.0 s for the deceleration phase).",
            guideRef: "Solving Motion Problems",
            difficulty: "core",
            hints: [
              "Acceleration = Δv/Δt for each changing phase.",
              "Sketch the v–t graph: small triangle, long rectangle, small triangle.",
              "Triangle areas use ½ × base × height; rectangle uses base × height.",
              "Add all three distances.",
            ],
            strategy: "Sketch the trapezoidal v–t profile and sum areas",
            solutions: [
              {
                label: "Lift journey",
                steps: [
                  "Acceleration = 4.0/5.0 = 0.80 m/s²; deceleration = 4.0/2.0 = 2.0 m/s²",
                  "Stage 1 = ½ × 5.0 × 4.0 = 10 m",
                  "Stage 2 = 4.0 × 12 = 48 m",
                  "Stage 3 = ½ × 2.0 × 4.0 = 4.0 m",
                  "Total = 62 m",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq4-08",
            question: "**Challenge.** A ball is thrown vertically upward from ground level at 30 m/s. Using g = 10 m/s² and ignoring air resistance:\n(a) Calculate the maximum height reached. [3]\n(b) Calculate the total time the ball is in the air before returning to the ground. [2]\n(c) Calculate the ball's velocity 4.0 s after being thrown, stating its direction. [3]",
            marks: 8,
            modelAnswer: "(a) Taking up as positive, v = 0 at the top. v² = u² + 2as → 0 = 30² + 2(−10)s → 0 = 900 − 20s → s = 45 m\n\n(b) Time to top: t = (0 − 30)/(−10) = 3.0 s. Total time of flight = 2 × 3.0 = 6.0 s\n\n(c) v = u + at = 30 + (−10)(4.0) = 30 − 40 = −10 m/s. The negative sign means it is moving downward at 10 m/s.",
            markScheme: [
              "uses v² = u² + 2as with v = 0 (1 mark)",
              "0 = 900 − 20s (1 mark)",
              "maximum height = 45 m (1 mark)",
              "time to top = 3.0 s (1 mark)",
              "total time = 6.0 s (1 mark)",
              "v = 30 + (−10)(4.0) (1 mark)",
              "v = −10 m/s (1 mark)",
              "direction: downward (1 mark)",
            ],
            commonError: "In (c), giving the speed as +10 m/s upward — after 4.0 s the ball has already passed the top (at 3.0 s) and is moving downward.",
            guideRef: "Solving Motion Problems",
            difficulty: "challenge",
            hints: [
              "Take upward as positive: u = +30 m/s, a = −10 m/s².",
              "At the top v = 0; use v² = u² + 2as for height.",
              "Rise time = fall time, so double it for total flight.",
              "For (c), use v = u + at; a negative result means downward.",
            ],
            strategy: "Sign convention with vertical motion equations",
            solutions: [
              {
                label: "Vertical throw",
                steps: [
                  "Height: 0 = 900 − 20s → s = 45 m",
                  "Time to top: (0 − 30)/(−10) = 3.0 s → total = 6.0 s",
                  "v at 4.0 s: 30 + (−10)(4.0) = −10 m/s (downward)",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq4-09",
            question: "A velocity–time graph for a cyclist shows: 0–5 s velocity rises uniformly from 4 m/s to 14 m/s; 5–15 s constant 14 m/s; 15–20 s falls uniformly from 14 m/s to 4 m/s.\n(a) Calculate the acceleration in the first phase. [2]\n(b) Calculate the total distance travelled. [4]\n(c) Calculate the average speed for the whole journey. [2]",
            marks: 8,
            modelAnswer: "(a) a = (14 − 4)/5 = 10/5 = 2.0 m/s²\n\n(b) Phase 1 (trapezium): [(4 + 14)/2] × 5 = 9 × 5 = 45 m. Phase 2 (rectangle): 14 × 10 = 140 m. Phase 3 (trapezium): [(14 + 4)/2] × 5 = 9 × 5 = 45 m. Total = 45 + 140 + 45 = 230 m\n\n(c) average speed = 230 / 20 = 11.5 m/s",
            markScheme: [
              "a = (14 − 4)/5 (1 mark)",
              "2.0 m/s² (1 mark)",
              "Phase 1 = (4 + 14)/2 × 5 = 45 m (1 mark)",
              "Phase 2 = 14 × 10 = 140 m (1 mark)",
              "Phase 3 = (14 + 4)/2 × 5 = 45 m (1 mark)",
              "Total = 230 m (1 mark)",
              "average speed = 230/20 (1 mark)",
              "11.5 m/s (1 mark)",
            ],
            commonError: "Treating phases 1 and 3 as triangles from zero — the velocity starts and ends at 4 m/s, so they are trapezia.",
            guideRef: "Speed–Time and Velocity–Time Graphs",
            difficulty: "challenge",
            hints: [
              "Acceleration is the gradient of the first segment.",
              "Phases 1 and 3 are trapezia (velocity does not reach zero); phase 2 is a rectangle.",
              "Trapezium area = average of the parallel sides × width.",
              "Average speed uses total distance over total time (20 s).",
            ],
            strategy: "Use trapezium areas where velocity is non-zero at both ends",
            solutions: [
              {
                label: "Trapezium areas",
                steps: [
                  "a = (14 − 4)/5 = 2.0 m/s²",
                  "Phase 1 = (4 + 14)/2 × 5 = 45 m",
                  "Phase 2 = 14 × 10 = 140 m",
                  "Phase 3 = (14 + 4)/2 × 5 = 45 m",
                  "Total = 230 m; average speed = 230/20 = 11.5 m/s",
                ],
              },
            ],
          },
          {
            id: "phys-motion-bq4-10",
            question: "A car accelerates uniformly from rest. After travelling 50 m it has reached a speed of 20 m/s.\n(a) Calculate the acceleration. [3]\n(b) Calculate the time taken to travel this 50 m. [2]\n(c) The car then continues at 20 m/s for a further 8.0 s. Calculate the total distance travelled from the start. [2]",
            marks: 7,
            modelAnswer: "(a) v² = u² + 2as → 20² = 0 + 2a(50) → 400 = 100a → a = 4.0 m/s²\n\n(b) t = (v − u)/a = (20 − 0)/4.0 = 5.0 s\n\n(c) Distance in constant phase = 20 × 8.0 = 160 m. Total distance = 50 + 160 = 210 m",
            markScheme: [
              "v² = u² + 2as → 400 = 100a (1 mark)",
              "a = 4.0 m/s² (1 mark)",
              "method/unit correct for (a) (1 mark)",
              "t = (20 − 0)/4.0 = 5.0 s (1 mark)",
              "value/unit for time (1 mark)",
              "constant phase distance = 20 × 8.0 = 160 m (1 mark)",
              "total = 210 m (1 mark)",
            ],
            commonError: "Adding the times rather than the distances, or forgetting to include the first 50 m in the total distance.",
            guideRef: "Solving Motion Problems",
            difficulty: "core",
            hints: [
              "Distance known, time unknown → v² = u² + 2as for the acceleration.",
              "Then t = (v − u)/a for the time of the first phase.",
              "Constant phase: distance = speed × time.",
              "Total distance = 50 m + constant-phase distance.",
            ],
            strategy: "Two-phase distance accumulation",
            solutions: [
              {
                label: "Acceleration, time, total distance",
                steps: [
                  "v² = u² + 2as → 400 = 100a → a = 4.0 m/s²",
                  "t = (20 − 0)/4.0 = 5.0 s",
                  "Constant phase = 20 × 8.0 = 160 m",
                  "Total = 50 + 160 = 210 m",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
