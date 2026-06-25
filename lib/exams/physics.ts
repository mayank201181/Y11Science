import type { ComprehensiveExam } from "../types";

export const physicsExam: ComprehensiveExam = {
  id: "exam-physics",
  subject: "physics",
  title: "Physics — Full Mock Exam",

  mcqPapers: [
    {
      id: "exam-physics-mcq-1",
      title: "Paper 1 — Multiple Choice",
      description:
        "20 multiple-choice questions spanning the full Cambridge IGCSE 0625 Extended syllabus. Allow 45 minutes.",
      questions: [
        // ── MOTION ──────────────────────────────────────────────────────────
        {
          id: "exam-physics-mcq-01",
          question:
            "A car accelerates uniformly from rest to 24 m/s in 8.0 s. What distance does it travel during this time?",
          options: ["48 m", "96 m", "192 m", "3.0 m"],
          answerIndex: 1,
          explanation:
            "Using s = ½(u + v)t = ½(0 + 24)(8.0) = 96 m. Option A omits the factor of ½; option C doubles instead of halving; option D is the acceleration (a = Δv/t = 24/8 = 3.0 m/s²), not the distance.",
          difficulty: "core",
          hints: [
            "The car starts from rest so u = 0.",
            "Average velocity = (u + v)/2 for uniform acceleration.",
            "Distance = average velocity × time.",
          ],
          strategy: "select the right kinematic equation",
        },
        {
          id: "exam-physics-mcq-02",
          question:
            "A velocity–time graph shows a straight line with negative gradient that crosses the time axis. What does the region below the time axis represent?",
          options: [
            "The object has stopped moving.",
            "The object is moving in the opposite direction to its initial motion.",
            "The object is accelerating in its initial direction.",
            "The speed of the object is increasing.",
          ],
          answerIndex: 1,
          explanation:
            "Velocity is a vector; negative velocity means motion in the opposite direction. The object decelerates, passes through zero speed (crosses the time axis), then moves the other way. Speed (magnitude) first decreases to zero, then increases again, so option D is incorrect.",
          difficulty: "core",
          hints: [
            "Velocity has both magnitude and direction.",
            "Crossing the time axis means v = 0 at that instant.",
          ],
          strategy: "interpret a velocity–time graph carefully",
        },
        // ── FORCES & MOMENTUM ────────────────────────────────────────────────
        {
          id: "exam-physics-mcq-03",
          question:
            "Two trolleys of masses 2.0 kg and 3.0 kg are stationary on a frictionless track. An explosion between them gives the 2.0 kg trolley a velocity of 6.0 m/s to the right. What is the velocity of the 3.0 kg trolley?",
          options: [
            "4.0 m/s to the right",
            "4.0 m/s to the left",
            "9.0 m/s to the left",
            "9.0 m/s to the right",
          ],
          answerIndex: 1,
          explanation:
            "Conservation of momentum: total initial momentum = 0. So m₁v₁ + m₂v₂ = 0 → (2.0)(6.0) + (3.0)v₂ = 0 → v₂ = −4.0 m/s. The negative sign means 4.0 m/s to the left (opposite to the 2 kg trolley).",
          difficulty: "core",
          hints: [
            "The system starts at rest so total momentum = 0.",
            "Conservation of momentum: m₁v₁ = −m₂v₂.",
          ],
          strategy: "conservation of momentum",
        },
        {
          id: "exam-physics-mcq-04",
          question:
            "A 60 kg person stands in a lift that accelerates upward at 2.0 m/s². What is the normal contact force on the person? (g = 10 m/s²)",
          options: ["480 N", "600 N", "720 N", "120 N"],
          answerIndex: 2,
          explanation:
            "Applying Newton's 2nd law upward: N − W = ma → N = m(g + a) = 60(10 + 2.0) = 720 N. Weight alone is 600 N; 120 N is just ma; 480 N would occur if the lift accelerated downward.",
          difficulty: "core",
          hints: [
            "Draw a free-body diagram: weight down, normal force up.",
            "Net force = ma, directed upward.",
            "N − mg = ma, so N = m(g + a).",
          ],
          strategy: "free-body diagram then Newton's 2nd law",
        },
        // ── ENERGY / WORK / POWER ────────────────────────────────────────────
        {
          id: "exam-physics-mcq-05",
          question:
            "A pump raises 500 kg of water through a vertical height of 8.0 m in 20 s. What is the minimum power output of the pump? (g = 10 m/s²)",
          options: ["200 W", "2000 W", "40 000 W", "400 W"],
          answerIndex: 1,
          explanation:
            "Work done W = mgh = 500 × 10 × 8.0 = 40 000 J. Power P = W/t = 40 000/20 = 2000 W. Option C is the work done (not power); option A divides only mg by 20; option D is 500 × 8.0/10.",
          difficulty: "core",
          hints: [
            "Work done against gravity = mgh.",
            "Power = work done ÷ time taken.",
          ],
          strategy: "energy then power",
        },
        {
          id: "exam-physics-mcq-06",
          question:
            "A ball of mass 0.50 kg is dropped from rest at a height of 5.0 m above the ground. Ignoring air resistance, what is its kinetic energy just before it hits the ground? (g = 10 m/s²)",
          options: ["5.0 J", "12.5 J", "25 J", "50 J"],
          answerIndex: 2,
          explanation:
            "All gravitational PE converts to KE: KE = mgh = 0.50 × 10 × 5.0 = 25 J. Option D uses m = 1 kg; option B uses ½mgh.",
          difficulty: "warmup",
          strategy: "conservation of energy",
        },
        // ── THERMAL PHYSICS ──────────────────────────────────────────────────
        {
          id: "exam-physics-mcq-07",
          question:
            "2.0 kg of water is heated from 20 °C to 70 °C. The specific heat capacity of water is 4200 J/(kg °C). How much energy is supplied?",
          options: [
            "84 000 J",
            "420 000 J",
            "8 400 J",
            "168 000 J",
          ],
          answerIndex: 1,
          explanation:
            "Q = mcΔT = 2.0 × 4200 × (70 − 20) = 2.0 × 4200 × 50 = 420 000 J (option B). Option A (84 000 J) uses ΔT = 10 °C instead of 50 °C; option C (8400 J) forgets to multiply by ΔT; option D (168 000 J) uses ΔT = 20 °C.",
          difficulty: "warmup",
          hints: ["Q = mcΔT", "ΔT = 70 − 20 = 50 °C"],
          strategy: "thermal energy equation",
        },
        {
          id: "exam-physics-mcq-08",
          question:
            "Which process transfers thermal energy without requiring a medium (can occur through a vacuum)?",
          options: ["Conduction", "Convection", "Radiation", "Evaporation"],
          answerIndex: 2,
          explanation:
            "Radiation (infrared electromagnetic waves) requires no medium. Conduction and convection both require particles — a material medium. Evaporation is a change of state, not a method of heat transfer by itself.",
          difficulty: "warmup",
          strategy: "classify heat transfer mechanisms",
        },
        // ── WAVES & LIGHT ────────────────────────────────────────────────────
        {
          id: "exam-physics-mcq-09",
          question:
            "A water wave has a frequency of 4.0 Hz and a wavelength of 0.75 m. What is the wave speed?",
          options: ["0.19 m/s", "3.0 m/s", "5.3 m/s", "4.75 m/s"],
          answerIndex: 1,
          explanation:
            "v = fλ = 4.0 × 0.75 = 3.0 m/s. Option A is λ/f; option C is f/λ; option D adds f and λ.",
          difficulty: "warmup",
          strategy: "wave equation v = fλ",
        },
        {
          id: "exam-physics-mcq-10",
          question:
            "A ray of light travels from glass (refractive index 1.5) into air. The angle of incidence at the glass–air boundary is 30°. What is the angle of refraction in air? (sin 30° = 0.500, sin 48.6° ≈ 0.750)",
          options: ["20°", "48.6°", "30°", "90°"],
          answerIndex: 1,
          explanation:
            "Snell's law: n₁ sin θ₁ = n₂ sin θ₂ → 1.5 × sin 30° = 1.0 × sin θ₂ → sin θ₂ = 0.750 → θ₂ ≈ 48.6°. The ray bends away from the normal when going from a denser to a less dense medium.",
          difficulty: "core",
          hints: [
            "n₁ sin θ₁ = n₂ sin θ₂ (Snell's law).",
            "Light going from glass to air bends away from the normal.",
            "sin θ₂ = 1.5 × 0.500 = 0.750.",
          ],
          strategy: "Snell's law",
        },
        // ── SOUND & EM SPECTRUM ───────────────────────────────────────────────
        {
          id: "exam-physics-mcq-11",
          question:
            "A ship sends a sonar pulse downward and receives the echo 0.40 s later. The speed of sound in seawater is 1500 m/s. What is the depth of the seabed below the ship?",
          options: ["600 m", "300 m", "750 m", "3750 m"],
          answerIndex: 1,
          explanation:
            "The pulse travels to the seabed and back: total distance = 1500 × 0.40 = 600 m. Depth = 600/2 = 300 m. A common error is forgetting to halve the distance.",
          difficulty: "core",
          hints: [
            "Distance = speed × time gives the total path (down and back).",
            "Divide by 2 to get the one-way depth.",
          ],
          strategy: "echo timing — remember to halve",
        },
        {
          id: "exam-physics-mcq-12",
          question:
            "Which electromagnetic wave has the shortest wavelength in the electromagnetic spectrum?",
          options: ["Radio waves", "Visible light", "X-rays", "Gamma rays"],
          answerIndex: 3,
          explanation:
            "Gamma rays have the shortest wavelength (< 10⁻¹¹ m) and therefore the highest frequency and photon energy. X-rays have slightly longer wavelengths; visible light is ~400–700 nm; radio waves have the longest wavelengths.",
          difficulty: "warmup",
          strategy: "order the EM spectrum",
        },
        // ── ELECTRICITY & CIRCUITS ────────────────────────────────────────────
        {
          id: "exam-physics-mcq-13",
          question:
            "Three resistors of 6 Ω, 3 Ω and 2 Ω are connected in parallel. What is the combined resistance?",
          options: ["11 Ω", "1.0 Ω", "5.5 Ω", "0.91 Ω"],
          answerIndex: 1,
          explanation:
            "1/R = 1/6 + 1/3 + 1/2 = 1/6 + 2/6 + 3/6 = 6/6 = 1 → R = 1.0 Ω. The combined resistance is always less than the smallest individual resistor (2 Ω), so 11 Ω and 5.5 Ω are immediately eliminated.",
          difficulty: "core",
          hints: [
            "For parallel: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃.",
            "Convert to a common denominator of 6.",
          ],
          strategy: "parallel resistance formula",
        },
        {
          id: "exam-physics-mcq-14",
          question:
            "A 12 V battery is connected to a 4.0 Ω resistor and a 2.0 Ω resistor in series. What is the potential difference across the 4.0 Ω resistor?",
          options: ["4.0 V", "8.0 V", "6.0 V", "12 V"],
          answerIndex: 1,
          explanation:
            "Total resistance = 4.0 + 2.0 = 6.0 Ω. Current I = V/R = 12/6.0 = 2.0 A. V across 4.0 Ω = IR = 2.0 × 4.0 = 8.0 V. The 2.0 Ω resistor takes 4.0 V, and the voltages sum to 12 V (consistent).",
          difficulty: "core",
          hints: [
            "Find total current using the total resistance.",
            "Apply V = IR to the 4.0 Ω resistor alone.",
          ],
          strategy: "series circuit: same current, voltage divides",
        },
        {
          id: "exam-physics-mcq-15",
          question:
            "A 60 W lamp is connected to the 230 V mains supply. What current does it draw?",
          options: ["13 800 A", "0.26 A", "3.8 A", "26 A"],
          answerIndex: 1,
          explanation:
            "P = IV → I = P/V = 60/230 ≈ 0.26 A. Option A is P × V; option C is √(P/R) with an error; option D is P × V / 1000.",
          difficulty: "warmup",
          strategy: "P = IV rearranged",
        },
        // ── MAGNETISM & ELECTROMAGNETISM ─────────────────────────────────────
        {
          id: "exam-physics-mcq-16",
          question:
            "A transformer has 200 turns on the primary coil and 50 turns on the secondary coil. The primary voltage is 240 V. What is the secondary voltage?",
          options: ["60 V", "960 V", "120 V", "24 V"],
          answerIndex: 0,
          explanation:
            "V_s/V_p = N_s/N_p → V_s = 240 × (50/200) = 240 × 0.25 = 60 V. This is a step-down transformer (fewer turns on secondary). Option B would apply if the ratio were inverted (step-up).",
          difficulty: "core",
          hints: [
            "Transformer ratio: V_s/V_p = N_s/N_p.",
            "Fewer secondary turns → lower secondary voltage.",
          ],
          strategy: "transformer turns ratio",
        },
        {
          id: "exam-physics-mcq-17",
          question:
            "A straight wire carrying a current is placed perpendicular to a uniform magnetic field. Which rule correctly predicts the direction of the force on the wire?",
          options: [
            "The right-hand grip rule",
            "Fleming's left-hand rule",
            "Fleming's right-hand rule",
            "Lenz's law",
          ],
          answerIndex: 1,
          explanation:
            "Fleming's left-hand rule (motor rule): the thumb, index finger, and middle finger represent Force, Field, and Current respectively. Fleming's right-hand rule applies to generators. The grip rule gives the field around a wire. Lenz's law concerns induced current direction.",
          difficulty: "warmup",
          strategy: "recall which Fleming rule for motors vs. generators",
        },
        // ── NUCLEAR PHYSICS ──────────────────────────────────────────────────
        {
          id: "exam-physics-mcq-18",
          question:
            "A radioactive isotope has a half-life of 12 days. A sample initially contains 6.4 × 10⁸ atoms. How many atoms remain after 48 days?",
          options: [
            "4.0 × 10⁷",
            "1.6 × 10⁸",
            "8.0 × 10⁶",
            "3.2 × 10⁷",
          ],
          answerIndex: 0,
          explanation:
            "Number of half-lives = 48/12 = 4. Remaining = 6.4 × 10⁸ × (1/2)⁴ = 6.4 × 10⁸ / 16 = 4.0 × 10⁷ atoms.",
          difficulty: "core",
          hints: [
            "Count how many half-lives fit into 48 days.",
            "Multiply by (½)^n for each half-life.",
          ],
          strategy: "half-life decay: N = N₀ × (½)^n",
        },
        {
          id: "exam-physics-mcq-19",
          question:
            "Which statement correctly describes beta-minus (β⁻) decay?",
          options: [
            "A neutron is emitted from the nucleus.",
            "A proton is converted to a neutron, emitting a positron.",
            "A neutron is converted to a proton, emitting an electron and an antineutrino.",
            "An alpha particle is emitted alongside an electron.",
          ],
          answerIndex: 2,
          explanation:
            "In β⁻ decay a neutron → proton + electron (β⁻ particle) + antineutrino. The mass number stays the same; atomic number increases by 1. Option B describes β⁺ (positron) decay.",
          difficulty: "core",
          strategy: "recall the nuclear transformation in β⁻ decay",
        },
        // ── SPACE PHYSICS ────────────────────────────────────────────────────
        {
          id: "exam-physics-mcq-20",
          question:
            "A star much more massive than the Sun eventually exhausts its nuclear fuel. Which sequence correctly describes its final stages?",
          options: [
            "Red giant → planetary nebula → white dwarf",
            "Red supergiant → supernova → neutron star or black hole",
            "Red supergiant → planetary nebula → neutron star",
            "Red giant → supernova → white dwarf",
          ],
          answerIndex: 1,
          explanation:
            "Very massive stars (many solar masses) become red supergiants, then explode as supernovae, leaving a neutron star (or, for the most massive, a black hole). The planetary nebula → white dwarf path belongs to stars of similar mass to the Sun.",
          difficulty: "core",
          strategy: "trace stellar evolution by initial mass",
        },
      ],
    },
  ],

  qaPapers: [
    {
      id: "exam-physics-qa-1",
      title: "Paper 4 — Theory (Structured)",
      description:
        "8 structured questions. Show all working and include units. Suggested time: 75 minutes.",
      questions: [
        // ── Q1 MOTION ────────────────────────────────────────────────────────
        {
          id: "exam-physics-qa-01",
          question:
            "A train accelerates uniformly from rest to 30 m/s in 60 s, travels at constant speed for 120 s, then decelerates uniformly to rest in 40 s.\n\n(a) Calculate the acceleration during the first stage. [2]\n(b) Calculate the total distance travelled by the train. [4]\n(c) Sketch a velocity–time graph for the complete journey, labelling the axes with values. [3]",
          marks: 9,
          modelAnswer:
            "(a) a = Δv/t = (30 − 0)/60 = 0.50 m/s²\n\n(b) Stage 1 (accelerating): s₁ = ½(u + v)t = ½(0 + 30)(60) = 900 m\nStage 2 (constant speed): s₂ = vt = 30 × 120 = 3600 m\nStage 3 (decelerating): s₃ = ½(30 + 0)(40) = 600 m\nTotal distance = 900 + 3600 + 600 = 5100 m\n\n(c) Graph: v-axis labelled with 0 and 30 m/s; t-axis labelled 0, 60, 180, 220 s. Straight line from (0,0) to (60,30); horizontal line from (60,30) to (180,30); straight line from (180,30) to (220,0).",
          markScheme: [
            "(a) correct formula a = Δv/t [1]",
            "(a) answer 0.50 m/s² with unit [1]",
            "(b) correct method for at least one trapezoidal area [1]",
            "(b) s₁ = 900 m [1]",
            "(b) s₂ = 3600 m [1]",
            "(b) total = 5100 m (ecf) [1]",
            "(c) correct shape — three stages [1]",
            "(c) correct velocity values on v-axis (0 and 30) [1]",
            "(c) correct time values 60, 180, 220 on t-axis [1]",
          ],
          commonError:
            "Using s = vt for the accelerating/decelerating stages instead of the trapezium area (or kinematic equations).",
          difficulty: "core",
          hints: [
            "Acceleration = change in velocity ÷ time taken.",
            "Area under a v–t graph gives distance; the three sections form a trapezium and a rectangle.",
            "For each stage, identify u, v, and t, then apply the correct kinematic formula.",
          ],
          strategy: "v–t graph: area = distance",
          solutions: [
            {
              label: "Method 1: kinematic equations for each stage",
              steps: [
                "Stage 1: s = ½(u + v)t = ½(0 + 30)(60) = 900 m",
                "Stage 2: s = vt = 30 × 120 = 3600 m",
                "Stage 3: s = ½(30 + 0)(40) = 600 m",
                "Total = 900 + 3600 + 600 = 5100 m",
              ],
            },
            {
              label: "Method 2: trapezium area on v–t graph",
              steps: [
                "The v–t graph forms a trapezium over the full journey.",
                "Parallel sides: top = 120 s (constant speed phase), bottom = 220 s (total time).",
                "Area = ½(top + bottom) × height = ½(120 + 220) × 30 = ½ × 340 × 30 = 5100 m",
              ],
            },
          ],
        },
        // ── Q2 FORCES ────────────────────────────────────────────────────────
        {
          id: "exam-physics-qa-02",
          question:
            "A 1200 kg car travelling at 20 m/s brakes to a stop over a distance of 40 m.\n\n(a) Calculate the braking force acting on the car. [3]\n(b) Calculate the braking time. [2]\n(c) Explain, using ideas about momentum, why wearing a seatbelt reduces injury in a collision. [3]",
          marks: 8,
          modelAnswer:
            "(a) Using v² = u² + 2as: 0 = (20)² + 2a(40) → a = −400/80 = −5.0 m/s²\nForce F = ma = 1200 × 5.0 = 6000 N (braking force, opposing motion)\n\n(b) Using v = u + at: 0 = 20 + (−5.0)t → t = 4.0 s\n\n(c) In a collision the car stops very rapidly (small time). The seatbelt exerts a force on the passenger to change their momentum from mv to zero. Without a seatbelt the passenger continues at 20 m/s and hits the dashboard/windscreen, stopping in a much shorter time; the force F = Δp/Δt is very large, causing injury. The seatbelt stretches slightly, increasing the stopping time Δt, so the force F = Δp/Δt is smaller.",
          markScheme: [
            "(a) correct kinematic equation to find deceleration [1]",
            "(a) a = 5.0 m/s² (magnitude) [1]",
            "(a) F = 6000 N with unit [1]",
            "(b) t = 4.0 s (ecf on a) [2]",
            "(c) momentum must be changed to zero (impulse = change in momentum) [1]",
            "(c) seatbelt increases the time over which the force acts [1]",
            "(c) larger Δt → smaller force F = Δp/Δt, reducing injury [1]",
          ],
          commonError:
            "In (a) using F = mv²/2s directly without finding acceleration first, or forgetting to give the force as a magnitude.",
          difficulty: "core",
          hints: [
            "(a) Use v² = u² + 2as to find acceleration; then F = ma.",
            "(b) v = u + at, solving for t.",
            "(c) Think about impulse: F × t = change in momentum.",
          ],
          strategy: "impulse-momentum theorem for safety devices",
          solutions: [
            {
              label: "Method 1: kinematics then Newton's 2nd law",
              steps: [
                "v² = u² + 2as → 0 = 400 + 2a(40) → a = −5.0 m/s²",
                "F = ma = 1200 × 5.0 = 6000 N",
              ],
            },
            {
              label: "Method 2: work–energy theorem",
              steps: [
                "KE lost = ½mv² = ½ × 1200 × 400 = 240 000 J",
                "Work done by braking force = F × d → F = 240 000 / 40 = 6000 N",
              ],
            },
          ],
        },
        // ── Q3 THERMAL ───────────────────────────────────────────────────────
        {
          id: "exam-physics-qa-03",
          question:
            "An electric kettle contains 1.5 kg of water at 20 °C. The kettle has a power rating of 2.5 kW.\n(Specific heat capacity of water: 4200 J kg⁻¹ °C⁻¹; specific latent heat of vaporisation of water: 2.26 × 10⁶ J/kg.)\n\n(a) Calculate the energy required to heat the water from 20 °C to 100 °C. [2]\n(b) Calculate the minimum time for the kettle to bring the water to 100 °C. [2]\n(c) Once at 100 °C, the kettle continues to boil. Calculate the mass of water converted to steam in 30 s. [3]",
          marks: 7,
          modelAnswer:
            "(a) Q = mcΔT = 1.5 × 4200 × (100 − 20) = 1.5 × 4200 × 80 = 504 000 J\n\n(b) t = Q/P = 504 000 / 2500 = 201.6 s ≈ 202 s\n\n(c) Energy supplied in 30 s = P × t = 2500 × 30 = 75 000 J\nQ = mL → m = Q/L = 75 000 / (2.26 × 10⁶) = 0.033 kg (33 g)",
          markScheme: [
            "(a) Q = mcΔT with correct substitution [1]",
            "(a) 504 000 J / 504 kJ [1]",
            "(b) t = Q/P [1]",
            "(b) t ≈ 202 s (ecf) [1]",
            "(c) energy in 30 s = 75 000 J [1]",
            "(c) m = Q/L correctly applied [1]",
            "(c) m = 0.033 kg / 33 g (ecf) [1]",
          ],
          commonError:
            "In (c), using the specific heat capacity formula instead of the latent heat formula — temperature does not change during a change of state.",
          difficulty: "core",
          hints: [
            "(a) Q = mcΔT; ΔT = 80 °C.",
            "(b) Power = energy/time, rearrange for time.",
            "(c) During boiling temperature is constant; use Q = mL.",
          ],
          strategy: "distinguish sensible heat (mcΔT) from latent heat (mL)",
        },
        // ── Q4 WAVES ─────────────────────────────────────────────────────────
        {
          id: "exam-physics-qa-04",
          question:
            "Light of wavelength 600 nm travels from air into a glass block (refractive index n = 1.50).\n\n(a) Calculate the speed of light in the glass. (Speed of light in air = 3.0 × 10⁸ m/s.) [2]\n(b) Calculate the wavelength of light inside the glass. [2]\n(c) A ray strikes the glass–air boundary from inside at an angle of incidence of 45°. Show that total internal reflection occurs and calculate the critical angle. (sin⁻¹(0.667) = 41.8°) [4]",
          marks: 8,
          modelAnswer:
            "(a) n = c_air / c_glass → c_glass = c_air / n = (3.0 × 10⁸) / 1.50 = 2.0 × 10⁸ m/s\n\n(b) The frequency is unchanged: f = c_air/λ_air = (3.0 × 10⁸)/(600 × 10⁻⁹) = 5.0 × 10¹⁴ Hz\nλ_glass = c_glass / f = (2.0 × 10⁸) / (5.0 × 10¹⁴) = 400 nm\nAlternatively: λ_glass = λ_air / n = 600/1.50 = 400 nm\n\n(c) Critical angle θ_c: sin θ_c = 1/n = 1/1.50 = 0.667 → θ_c = 41.8°\nThe angle of incidence (45°) > θ_c (41.8°), so total internal reflection occurs.",
          markScheme: [
            "(a) n = c_air/c_glass stated or used [1]",
            "(a) c_glass = 2.0 × 10⁸ m/s [1]",
            "(b) λ_glass = 400 nm (any valid method) [2]",
            "(c) sin θ_c = 1/n = 0.667 [1]",
            "(c) θ_c = 41.8° [1]",
            "(c) 45° > 41.8° stated as the condition for TIR [1]",
            "(c) conclusion: TIR occurs [1]",
          ],
          commonError:
            "Assuming frequency changes when light enters glass — only speed and wavelength change; frequency is set by the source.",
          difficulty: "challenge",
          hints: [
            "(a) n = c₁/c₂; rearrange to find c_glass.",
            "(b) Frequency is constant at a boundary; use v = fλ in each medium.",
            "(c) TIR occurs when angle of incidence ≥ critical angle; sin θ_c = n₂/n₁ = 1/n.",
          ],
          strategy: "refractive index links speed, wavelength, and critical angle",
          solutions: [
            {
              label: "Method for (b): ratio of wavelengths",
              steps: [
                "Since f is constant: λ ∝ v",
                "λ_glass / λ_air = v_glass / v_air = 1/n",
                "λ_glass = 600/1.50 = 400 nm",
              ],
            },
          ],
        },
        // ── Q5 ELECTRICITY ────────────────────────────────────────────────────
        {
          id: "exam-physics-qa-05",
          question:
            "A circuit consists of a 12 V battery (negligible internal resistance) connected to a 6.0 Ω resistor in series with a parallel combination of a 4.0 Ω and 12 Ω resistor.\n\n(a) Calculate the combined resistance of the parallel combination. [2]\n(b) Calculate the total circuit resistance and the current from the battery. [2]\n(c) Calculate the potential difference across the parallel combination and hence the current through the 12 Ω resistor. [3]",
          marks: 7,
          modelAnswer:
            "(a) 1/R_p = 1/4.0 + 1/12 = 3/12 + 1/12 = 4/12 → R_p = 3.0 Ω\n\n(b) R_total = 6.0 + 3.0 = 9.0 Ω; I_total = V/R = 12/9.0 = 1.33 A\n\n(c) V_parallel = I_total × R_p = 1.33 × 3.0 = 4.0 V\nI through 12 Ω = V/R = 4.0/12 = 0.33 A",
          markScheme: [
            "(a) correct formula for parallel resistance [1]",
            "(a) R_p = 3.0 Ω [1]",
            "(b) R_total = 9.0 Ω [1]",
            "(b) I = 1.33 A (allow 4/3 A) [1]",
            "(c) V_parallel = 4.0 V [1]",
            "(c) I₁₂ = 0.33 A (allow 1/3 A) [2]",
          ],
          commonError:
            "Adding resistances in the parallel combination as if they were in series.",
          difficulty: "core",
          hints: [
            "Find the equivalent resistance of the two parallel resistors first.",
            "Then add this to the series resistor for the total resistance.",
            "Use V = IR to find the PD across the parallel section, then apply it to each resistor.",
          ],
          strategy: "simplify complex circuits step by step",
        },
        // ── Q6 ELECTROMAGNETISM ────────────────────────────────────────────────
        {
          id: "exam-physics-qa-06",
          question:
            "A generator coil rotates at 50 Hz in a magnetic field and produces a peak e.m.f. of 325 V.\n\n(a) Calculate the r.m.s. voltage. [2]\n(b) A step-down transformer reduces this to 12 V r.m.s. The secondary coil has 60 turns. Calculate the number of turns on the primary coil. [2]\n(c) The secondary circuit delivers 5.0 A. Assuming 100% efficiency, calculate the current in the primary coil. [2]",
          marks: 6,
          modelAnswer:
            "(a) V_rms = V_peak / √2 = 325 / 1.414 ≈ 230 V\n\n(b) N_p/N_s = V_p/V_s → N_p = N_s × (V_p/V_s) = 60 × (230/12) = 60 × 19.17 ≈ 1150 turns\n\n(c) For 100% efficiency: P_primary = P_secondary → V_p I_p = V_s I_s\nI_p = (V_s I_s) / V_p = (12 × 5.0) / 230 = 0.26 A",
          markScheme: [
            "(a) V_rms = V_peak/√2 stated or used [1]",
            "(a) V_rms ≈ 230 V [1]",
            "(b) correct turns ratio formula [1]",
            "(b) N_p ≈ 1150 turns (ecf on V_p) [1]",
            "(c) power in = power out used [1]",
            "(c) I_p ≈ 0.26 A (ecf) [1]",
          ],
          commonError:
            "Using peak voltage in the transformer ratio instead of the r.m.s. voltage.",
          difficulty: "challenge",
          hints: [
            "(a) r.m.s. = peak ÷ √2 for a sinusoidal supply.",
            "(b) Turns ratio equals voltage ratio for an ideal transformer.",
            "(c) Efficiency = 100% means input power = output power: V_p I_p = V_s I_s.",
          ],
          strategy: "r.m.s. values, transformer ratios, and power conservation",
          solutions: [
            {
              label: "Power conservation check for (c)",
              steps: [
                "P_secondary = 12 V × 5.0 A = 60 W",
                "P_primary = 60 W (100% efficient)",
                "I_p = 60 W / 230 V = 0.26 A",
              ],
            },
          ],
        },
        // ── Q7 NUCLEAR ────────────────────────────────────────────────────────
        {
          id: "exam-physics-qa-07",
          question:
            "Uranium-238 (²³⁸₉₂U) undergoes alpha decay.\n\n(a) Write a balanced nuclear equation for this decay, identifying the daughter nucleus. [3]\n(b) A sample of ²³⁸U has an activity of 8000 Bq. After 3 half-lives the activity has fallen to 1000 Bq. Verify this result by calculation. [2]\n(c) Explain why alpha radiation is the most ionising but least penetrating of the three types. [3]",
          marks: 8,
          modelAnswer:
            "(a) ²³⁸₉₂U → ⁴₂He + ²³⁴₉₀Th\n(Mass numbers: 238 = 4 + 234 ✓; Proton numbers: 92 = 2 + 90 ✓)\nDaughter nucleus: thorium-234 (Th)\n\n(b) After 1 half-life: 8000/2 = 4000 Bq\nAfter 2 half-lives: 4000/2 = 2000 Bq\nAfter 3 half-lives: 2000/2 = 1000 Bq ✓\nAlternatively: A = A₀ × (½)³ = 8000/8 = 1000 Bq\n\n(c) An alpha particle (⁴₂He nucleus) has a charge of +2 and is relatively massive. Its large charge causes strong electrostatic interactions with electrons in surrounding atoms, ionising many atoms per unit path length. This rapid energy loss means it is stopped quickly — a few centimetres of air or a sheet of paper. Beta particles (charge +1 or −1, much lighter) ionise less strongly per unit path and penetrate further. Gamma rays (uncharged) ionise very rarely and penetrate the most.",
          markScheme: [
            "(a) correct alpha particle symbol ⁴₂He [1]",
            "(a) daughter nucleus ²³⁴₉₀Th [1]",
            "(a) mass numbers and proton numbers both balance [1]",
            "(b) correct step-by-step halving to 1000 Bq OR A₀(½)³ = 1000 Bq [2]",
            "(c) alpha has large charge (+2) → strong ionisation [1]",
            "(c) rapid energy loss → stopped in short range [1]",
            "(c) correct comparison: beta less ionising / more penetrating; gamma least ionising / most penetrating [1]",
          ],
          commonError:
            "In (a), changing the proton number by 4 and the mass number by 2 (reversing the changes made by alpha decay).",
          difficulty: "core",
          hints: [
            "(a) Alpha particle is ⁴₂He; mass number decreases by 4, atomic number by 2.",
            "(b) Activity halves each half-life; apply three times.",
            "(c) Think about charge and mass of each particle type.",
          ],
          strategy: "balance nuclear equations; link ionisation to charge and mass",
        },
        // ── Q8 CHALLENGE: ENERGY & SPACE ─────────────────────────────────────
        {
          id: "exam-physics-qa-08",
          question:
            "A communications satellite of mass 2000 kg orbits the Earth in a geostationary orbit at a radius of 4.22 × 10⁷ m from the Earth's centre. The gravitational field strength at this radius is 0.224 N/kg.\n\n(a) Calculate the gravitational force on the satellite. [1]\n(b) The satellite travels in a circular orbit. Show that its orbital speed is 3070 m/s. [3]\n(c) Calculate the orbital period of the satellite and confirm it equals 24 hours. [3]\n(d) The satellite's solar panels produce 4.0 kW of electrical power. A thruster motor uses 800 W to maintain orbit. What percentage of the solar panel output is used by the thruster? [1]\n(e) Explain why a geostationary orbit must be above the equator and at one specific altitude. [3]",
          marks: 11,
          modelAnswer:
            "(a) F = mg = 2000 × 0.224 = 448 N\n\n(b) For circular orbit: gravitational force provides centripetal force\nF = mv²/r → v² = Fr/m = (448 × 4.22 × 10⁷) / 2000\nv² = 18 905 600 / 2000 ≈ 9 452 800… \nRecalculate: v² = (448 × 4.22 × 10⁷) / 2000 = 448 × 21 100 = 9 452 800 m²/s²\nv = √9 452 800 ≈ 3074 m/s ≈ 3070 m/s ✓\n\n(c) Circumference = 2πr = 2π × 4.22 × 10⁷ = 2.651 × 10⁸ m\nT = circumference / v = (2.651 × 10⁸) / 3070 = 86 350 s\n86 350 / 3600 ≈ 24.0 hours ✓\n\n(d) % = (800/4000) × 100 = 20%\n\n(e) Geostationary means the satellite appears stationary relative to the ground. For this: (1) its orbital period must equal Earth's rotation period (24 h), which fixes the orbital radius to one specific altitude (≈ 36 000 km). (2) It must orbit in the same direction as Earth's rotation (eastward). (3) It must orbit in the equatorial plane — any tilt would cause the satellite to appear to move north and south as seen from the ground, rather than remaining fixed above one point.",
          markScheme: [
            "(a) F = 448 N [1]",
            "(b) gravitational force = centripetal force stated [1]",
            "(b) correct algebra: v² = Fr/m [1]",
            "(b) v ≈ 3070 m/s shown [1]",
            "(c) T = 2πr/v [1]",
            "(c) T ≈ 86 400 s [1]",
            "(c) T ÷ 3600 ≈ 24 h confirmed [1]",
            "(d) 20% [1]",
            "(e) period must equal 24 h → fixes altitude [1]",
            "(e) orbit must be eastward (same direction as Earth's spin) [1]",
            "(e) must be in the equatorial plane to avoid apparent north-south oscillation [1]",
          ],
          commonError:
            "In (b), forgetting that the gravitational force IS the centripetal force — no additional 'centripetal force' needs to be added.",
          difficulty: "challenge",
          hints: [
            "(a) Weight = mass × gravitational field strength.",
            "(b) Set gravitational force equal to centripetal force mv²/r; solve for v.",
            "(c) Period = distance / speed = 2πr / v.",
            "(e) Consider what 'geostationary' means: same position above Earth's surface at all times.",
          ],
          strategy: "circular orbit: gravity provides centripetal force",
          solutions: [
            {
              label: "Method for (b): dimensional check",
              steps: [
                "F = 448 N; r = 4.22 × 10⁷ m; m = 2000 kg",
                "v² = F × r / m = (448 × 4.22 × 10⁷) / 2000",
                "= (1.891 × 10¹⁰) / 2000 = 9.453 × 10⁶ m²/s²",
                "v = 3074 m/s ≈ 3070 m/s",
              ],
            },
          ],
        },
      ],
    },
  ],
};
