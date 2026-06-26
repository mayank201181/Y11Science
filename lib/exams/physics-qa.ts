import type { Paper, QA } from "../types";

// Whole-subject mock exam — Structured (QA) papers for Cambridge IGCSE Physics 0625 (Extended).
// Four papers of 20 structured questions each (80 total), spanning the full syllabus.
// g = 10 N/kg throughout (IGCSE convention). No backtick or dollar-brace inside any string.

export const physicsExamQaPapers: Paper<QA>[] = [
  // ══════════════════════════════════════════════════════════════════════════
  // PAPER 1 — Structured
  // Focus: motion/kinematics, forces, moments, momentum, pressure, Hooke, density.
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "exam-physics-qa-1",
    title: "Paper 1 — Structured",
    description:
      "Structured questions on motion, forces, moments, momentum, pressure and elasticity. Show all working and include units throughout. Suggested time: 75 minutes.",
    questions: [
      {
        id: "exam-physics-q1-01",
        question:
          "Define the following terms and state the SI unit of each.\n(a) Speed. [2]\n(b) Acceleration. [2]",
        marks: 4,
        modelAnswer:
          "(a) Speed is the distance travelled per unit time (the rate of change of distance). SI unit: metre per second, m/s.\n(b) Acceleration is the rate of change of velocity (change in velocity per unit time). SI unit: metre per second squared, m/s squared.",
        markScheme: [
          "(a) speed = distance / time / rate of change of distance [1]",
          "(a) unit m/s [1]",
          "(b) acceleration = change in velocity / time / rate of change of velocity [1]",
          "(b) unit m/s squared [1]",
        ],
        commonError:
          "Defining acceleration as change of speed rather than velocity, or giving the unit of velocity for acceleration.",
        difficulty: "warmup",
        guideRef: "Motion and Kinematics",
      },
      {
        id: "exam-physics-q1-02",
        question:
          "A cyclist travels 1500 m in 100 s at a steady speed.\n(a) Calculate the cyclist's speed. [2]\n(b) State the difference between speed and velocity. [1]",
        marks: 3,
        modelAnswer:
          "(a) speed = distance / time = 1500 / 100 = 15 m/s\n(b) Velocity is speed in a stated direction (a vector); speed has magnitude only (a scalar).",
        markScheme: [
          "(a) speed = distance / time [1]",
          "(a) 15 m/s with unit [1]",
          "(b) velocity has direction / is a vector, speed is a scalar [1]",
        ],
        commonError: "Omitting the unit, or stating they are identical quantities.",
        difficulty: "warmup",
        guideRef: "Motion and Kinematics",
        solutions: [
          {
            label: "Direct substitution",
            steps: [
              "List data: distance d = 1500 m, time t = 100 s",
              "speed v = d / t = 1500 / 100",
              "v = 15 m/s (2 sig figs)",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q1-03",
        question:
          "A car accelerates uniformly from rest to 24 m/s in 8.0 s.\n(a) Calculate the acceleration. [2]\n(b) Calculate the distance travelled during this time. [3]",
        marks: 5,
        modelAnswer:
          "(a) a = (v - u) / t = (24 - 0) / 8.0 = 3.0 m/s squared\n(b) Using s = ½(u + v)t = ½(0 + 24)(8.0) = 96 m. (Or s = ut + ½at² = 0 + ½ × 3.0 × 8.0² = 96 m.)",
        markScheme: [
          "(a) a = (v - u)/t used [1]",
          "(a) a = 3.0 m/s squared with unit [1]",
          "(b) correct equation s = ½(u + v)t or s = ut + ½at² [1]",
          "(b) substitution shown [1]",
          "(b) s = 96 m with unit [1]",
        ],
        commonError:
          "Using s = vt = 24 × 8 = 192 m, forgetting that the speed is not constant so the average speed (12 m/s) must be used.",
        difficulty: "core",
        guideRef: "Motion and Kinematics",
        hints: [
          "Acceleration = change in velocity divided by time taken.",
          "The car starts from rest, so u = 0.",
          "For uniform acceleration, average velocity = (u + v)/2.",
          "Distance = average velocity × time.",
        ],
        strategy: "pick the kinematic equation that uses the quantities you have",
        solutions: [
          {
            label: "Average velocity method",
            steps: [
              "Data: u = 0, v = 24 m/s, t = 8.0 s",
              "a = (v - u)/t = (24 - 0)/8.0 = 3.0 m/s squared",
              "average velocity = (u + v)/2 = (0 + 24)/2 = 12 m/s",
              "s = average velocity × t = 12 × 8.0 = 96 m",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q1-04",
        question:
          "The velocity-time graph of a journey shows: a straight line from (0 s, 0 m/s) to (10 s, 20 m/s), then a horizontal line from (10 s, 20 m/s) to (30 s, 20 m/s).\n(a) Describe the motion in each stage. [2]\n(b) Calculate the total distance travelled. [3]",
        marks: 5,
        modelAnswer:
          "(a) Stage 1 (0-10 s): the object accelerates uniformly from rest to 20 m/s. Stage 2 (10-30 s): the object travels at constant velocity of 20 m/s.\n(b) Distance = area under the graph. Stage 1 (triangle) = ½ × 10 × 20 = 100 m. Stage 2 (rectangle) = 20 × 20 = 400 m. Total = 100 + 400 = 500 m.",
        markScheme: [
          "(a) stage 1 uniform acceleration from rest [1]",
          "(a) stage 2 constant velocity [1]",
          "(b) area under graph used = distance [1]",
          "(b) triangle 100 m and rectangle 400 m [1]",
          "(b) total 500 m with unit [1]",
        ],
        commonError:
          "Reading the gradient as the distance, or only counting one of the two regions under the graph.",
        difficulty: "core",
        guideRef: "Motion and Kinematics",
        hints: [
          "Gradient of a velocity-time graph gives acceleration.",
          "Area under a velocity-time graph gives distance.",
          "Split the area into a triangle and a rectangle.",
        ],
        strategy: "area under a v-t graph = distance",
        solutions: [
          {
            label: "Area decomposition",
            steps: [
              "Triangle (0-10 s): area = ½ × base × height = ½ × 10 × 20 = 100 m",
              "Rectangle (10-30 s): area = width × height = 20 × 20 = 400 m",
              "Total distance = 100 + 400 = 500 m",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q1-05",
        question:
          "State Newton's first law of motion and use it to explain why a passenger in a car lurches forward when the car brakes suddenly. [3]",
        marks: 3,
        modelAnswer:
          "Newton's first law: an object remains at rest, or continues to move at constant velocity in a straight line, unless acted on by a resultant (unbalanced) force. When the car brakes, a backward force acts on the car body but no large forward-stopping force acts on the passenger; by inertia the passenger tends to keep moving forward at the original velocity, so they lurch forward relative to the car.",
        markScheme: [
          "Newton's first law stated correctly (rest or constant velocity unless resultant force) [1]",
          "passenger tends to continue moving / has inertia [1]",
          "no (sufficient) force acts on the passenger to decelerate them with the car [1]",
        ],
        commonError:
          "Saying a force pushes the passenger forward — there is no forward force; it is the absence of a backward force plus inertia.",
        difficulty: "warmup",
        guideRef: "Forces and Newton's Laws",
      },
      {
        id: "exam-physics-q1-06",
        question:
          "A resultant force of 18 N acts on a trolley of mass 4.0 kg.\n(a) Calculate the acceleration produced. [2]\n(b) The same force now acts on a 6.0 kg trolley. Calculate the new acceleration. [2]",
        marks: 4,
        modelAnswer:
          "(a) a = F / m = 18 / 4.0 = 4.5 m/s squared\n(b) a = F / m = 18 / 6.0 = 3.0 m/s squared",
        markScheme: [
          "(a) F = ma rearranged to a = F/m [1]",
          "(a) a = 4.5 m/s squared with unit [1]",
          "(b) a = 18/6.0 [1]",
          "(b) a = 3.0 m/s squared with unit [1]",
        ],
        commonError: "Multiplying force by mass instead of dividing.",
        difficulty: "warmup",
        guideRef: "Forces and Newton's Laws",
        solutions: [
          {
            label: "Newton's second law",
            steps: [
              "F = ma, so a = F/m",
              "(a) a = 18 / 4.0 = 4.5 m/s squared",
              "(b) a = 18 / 6.0 = 3.0 m/s squared",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q1-07",
        question:
          "A 1200 kg car travelling at 20 m/s brakes to rest over a distance of 40 m.\n(a) Calculate the deceleration. [3]\n(b) Calculate the braking force. [2]\n(c) Calculate the time taken to stop. [2]",
        marks: 7,
        modelAnswer:
          "(a) Using v² = u² + 2as: 0 = 20² + 2a(40) → a = -400 / 80 = -5.0 m/s squared (deceleration of 5.0 m/s squared).\n(b) F = ma = 1200 × 5.0 = 6000 N (opposing motion).\n(c) Using v = u + at: 0 = 20 + (-5.0)t → t = 4.0 s.",
        markScheme: [
          "(a) v² = u² + 2as used [1]",
          "(a) substitution 0 = 400 + 80a [1]",
          "(a) a = 5.0 m/s squared (magnitude) [1]",
          "(b) F = ma = 1200 × 5.0 [1]",
          "(b) F = 6000 N with unit [1]",
          "(c) t = (v - u)/a = 4.0 s [2]",
        ],
        commonError:
          "Forgetting the negative sign on acceleration when finding time, giving a negative or nonsensical answer.",
        difficulty: "core",
        guideRef: "Forces and Newton's Laws",
        hints: [
          "You know u, v and s, so use v² = u² + 2as to find a.",
          "Then F = ma gives the braking force.",
          "Use v = u + at for the time, taking a as negative (deceleration).",
        ],
        strategy: "kinematics first, then Newton's second law",
        solutions: [
          {
            label: "Kinematics then Newton's second law",
            steps: [
              "v² = u² + 2as → 0 = 400 + 2a(40)",
              "a = -400 / 80 = -5.0 m/s squared (deceleration 5.0 m/s squared)",
              "F = ma = 1200 × 5.0 = 6000 N",
              "v = u + at → 0 = 20 - 5.0t → t = 4.0 s",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q1-08",
        question:
          "Explain the difference between mass and weight, and calculate the weight of a 60 kg astronaut (a) on Earth where g = 10 N/kg and (b) on the Moon where g = 1.6 N/kg. [4]",
        marks: 4,
        modelAnswer:
          "Mass is the amount of matter in an object (in kg) and is the same everywhere; weight is the gravitational force on the object (in N) and depends on the gravitational field strength g, so it changes with location.\n(a) W = mg = 60 × 10 = 600 N\n(b) W = mg = 60 × 1.6 = 96 N",
        markScheme: [
          "mass = amount of matter (kg) / constant everywhere [1]",
          "weight = gravitational force (N) / depends on g [1]",
          "(a) W = 600 N [1]",
          "(b) W = 96 N [1]",
        ],
        commonError: "Stating that mass changes on the Moon — only weight changes.",
        difficulty: "core",
        guideRef: "Forces and Newton's Laws",
        hints: [
          "Mass is measured in kilograms; weight is a force in newtons.",
          "Weight W = mg.",
          "Use the local value of g for each place.",
        ],
        solutions: [
          {
            label: "Weight on each body",
            steps: [
              "Earth: W = mg = 60 × 10 = 600 N",
              "Moon: W = mg = 60 × 1.6 = 96 N",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q1-09",
        question:
          "A uniform metre rule is pivoted at its centre. A 2.0 N weight hangs 30 cm to the left of the pivot. A weight W hangs 20 cm to the right of the pivot. The rule is balanced.\n(a) State the principle of moments. [1]\n(b) Calculate W. [3]",
        marks: 4,
        modelAnswer:
          "(a) For a body in equilibrium, the sum of the clockwise moments about a pivot equals the sum of the anticlockwise moments about the same pivot.\n(b) Anticlockwise moment = 2.0 × 0.30 = 0.60 N m. Clockwise moment = W × 0.20. For balance: W × 0.20 = 0.60 → W = 0.60 / 0.20 = 3.0 N.",
        markScheme: [
          "(a) clockwise moments = anticlockwise moments (in equilibrium) [1]",
          "(b) moment = force × perpendicular distance used [1]",
          "(b) 2.0 × 0.30 = W × 0.20 [1]",
          "(b) W = 3.0 N with unit [1]",
        ],
        commonError:
          "Mixing centimetres and metres inconsistently, or forgetting the rule is balanced at its centre so its own weight produces no moment.",
        difficulty: "core",
        guideRef: "Moments and Equilibrium",
        hints: [
          "Moment = force × perpendicular distance from the pivot.",
          "Use consistent units for the distances.",
          "Set total clockwise moment equal to total anticlockwise moment.",
        ],
        strategy: "balance moments about the pivot",
        solutions: [
          {
            label: "Principle of moments",
            steps: [
              "Convert distances: 30 cm = 0.30 m, 20 cm = 0.20 m",
              "Anticlockwise moment = 2.0 × 0.30 = 0.60 N m",
              "Clockwise moment = W × 0.20",
              "Balance: W × 0.20 = 0.60 → W = 3.0 N",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q1-10",
        question:
          "A spring obeys Hooke's law. A force of 4.0 N extends it by 8.0 cm.\n(a) State Hooke's law. [1]\n(b) Calculate the spring constant in N/m. [2]\n(c) Calculate the extension produced by a 10 N force, assuming the limit of proportionality is not exceeded. [2]",
        marks: 5,
        modelAnswer:
          "(a) Hooke's law: the extension of a spring is directly proportional to the load applied, provided the limit of proportionality is not exceeded.\n(b) k = F / x = 4.0 / 0.080 = 50 N/m.\n(c) x = F / k = 10 / 50 = 0.20 m = 20 cm.",
        markScheme: [
          "(a) extension proportional to force/load (within limit) [1]",
          "(b) k = F/x with x in metres (0.080 m) [1]",
          "(b) k = 50 N/m [1]",
          "(c) x = F/k = 10/50 [1]",
          "(c) x = 0.20 m / 20 cm [1]",
        ],
        commonError:
          "Leaving the extension in centimetres when computing k, giving k = 0.5 N/m instead of 50 N/m.",
        difficulty: "core",
        guideRef: "Forces and Elasticity",
        hints: [
          "Convert the extension to metres before calculating k.",
          "Spring constant k = force / extension.",
          "Rearrange F = kx to find the new extension.",
        ],
        strategy: "F = kx; keep extension in metres",
        solutions: [
          {
            label: "Hooke's law calculation",
            steps: [
              "Convert: 8.0 cm = 0.080 m",
              "k = F/x = 4.0 / 0.080 = 50 N/m",
              "New extension: x = F/k = 10 / 50 = 0.20 m (20 cm)",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q1-11",
        question:
          "Define density and calculate the density of a block of mass 240 g and volume 30 cm³. Give your answer in g/cm³ and in kg/m³. [4]",
        marks: 4,
        modelAnswer:
          "Density is mass per unit volume. density = mass / volume = 240 / 30 = 8.0 g/cm³. Converting: 8.0 g/cm³ × 1000 = 8000 kg/m³ (since 1 g/cm³ = 1000 kg/m³).",
        markScheme: [
          "density = mass / volume defined [1]",
          "240 / 30 = 8.0 g/cm³ [1]",
          "conversion factor 1 g/cm³ = 1000 kg/m³ used [1]",
          "8000 kg/m³ [1]",
        ],
        commonError: "Using the wrong conversion factor (1 g/cm³ is 1000 kg/m³, not 100 or 10).",
        difficulty: "core",
        guideRef: "Density and Pressure",
        hints: [
          "Density = mass / volume.",
          "1 g/cm³ equals 1000 kg/m³.",
        ],
        solutions: [
          {
            label: "Density and unit conversion",
            steps: [
              "density = m/V = 240 / 30 = 8.0 g/cm³",
              "1 g/cm³ = 1000 kg/m³",
              "8.0 g/cm³ = 8000 kg/m³",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q1-12",
        question:
          "A rectangular block of weight 60 N has a base measuring 0.20 m by 0.30 m.\n(a) Calculate the pressure it exerts on the ground when resting on this base. [3]\n(b) State and explain what happens to the pressure if the block is stood on a smaller face. [2]",
        marks: 5,
        modelAnswer:
          "(a) Area = 0.20 × 0.30 = 0.060 m². p = F / A = 60 / 0.060 = 1000 Pa.\n(b) The pressure increases. The same weight (force) acts on a smaller area, and since p = F/A a smaller area gives a larger pressure.",
        markScheme: [
          "(a) area = 0.060 m squared [1]",
          "(a) p = F/A used [1]",
          "(a) p = 1000 Pa with unit [1]",
          "(b) pressure increases [1]",
          "(b) because area is smaller and p = F/A (force unchanged) [1]",
        ],
        commonError: "Adding the side lengths instead of multiplying to find the area.",
        difficulty: "core",
        guideRef: "Density and Pressure",
        hints: [
          "Pressure = force / area.",
          "Area of a rectangle = length × width.",
          "Same force on smaller area gives more pressure.",
        ],
        strategy: "p = F/A",
        solutions: [
          {
            label: "Pressure on the base",
            steps: [
              "Area = 0.20 × 0.30 = 0.060 m squared",
              "p = F/A = 60 / 0.060 = 1000 Pa",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q1-13",
        question:
          "A diver descends to a depth of 15 m in seawater of density 1030 kg/m³.\n(a) Calculate the pressure due to the water at this depth. (g = 10 N/kg) [3]\n(b) State why a submarine's hull must be very strong at large depths. [1]",
        marks: 4,
        modelAnswer:
          "(a) p = ρgh = 1030 × 10 × 15 = 154 500 Pa (about 1.5 × 10^5 Pa).\n(b) Pressure increases with depth, so at large depths the water exerts a very large force on the hull; a strong hull is needed to avoid being crushed.",
        markScheme: [
          "(a) p = (rho)gh used [1]",
          "(a) substitution 1030 × 10 × 15 [1]",
          "(a) 154 500 Pa / 1.5 × 10^5 Pa [1]",
          "(b) pressure increases with depth / very large force on hull [1]",
        ],
        commonError: "Forgetting that this is the pressure due to the water only (atmospheric pressure would be added for total pressure).",
        difficulty: "core",
        guideRef: "Density and Pressure",
        hints: [
          "Pressure in a liquid p = density × g × depth.",
          "Keep all quantities in SI units.",
        ],
        strategy: "liquid pressure p = (rho)gh",
        solutions: [
          {
            label: "Hydrostatic pressure",
            steps: [
              "p = (rho)gh = 1030 × 10 × 15",
              "p = 154 500 Pa (1.5 × 10^5 Pa to 2 sig figs)",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q1-14",
        question:
          "Two trolleys are stationary on a frictionless track with a compressed spring between them. The spring is released. Trolley A (mass 2.0 kg) moves right at 6.0 m/s.\n(a) State the law of conservation of momentum. [1]\n(b) Calculate the velocity of trolley B (mass 3.0 kg). [3]",
        marks: 4,
        modelAnswer:
          "(a) In a closed system (no external resultant force), the total momentum before an interaction equals the total momentum after it.\n(b) Total momentum before = 0 (both at rest). After: momentum of A + momentum of B = 0. So (2.0 × 6.0) + (3.0 × v) = 0 → 12 + 3.0v = 0 → v = -4.0 m/s. Trolley B moves at 4.0 m/s in the opposite direction (to the left).",
        markScheme: [
          "(a) total momentum conserved when no external force [1]",
          "(a)/(b) total momentum before = 0 [1]",
          "(b) (2.0 × 6.0) + (3.0 × v) = 0 [1]",
          "(b) v = 4.0 m/s to the left (opposite direction) [1]",
        ],
        commonError:
          "Forgetting that the two velocities are in opposite directions, so the momenta must have opposite signs and sum to zero.",
        difficulty: "challenge",
        guideRef: "Momentum",
        hints: [
          "Before release both trolleys are at rest, so total momentum is zero.",
          "Momentum = mass × velocity, and direction matters (use + and -).",
          "Total momentum after release must also be zero.",
          "Solve for v of trolley B.",
        ],
        strategy: "conservation of momentum: total before = total after",
        solutions: [
          {
            label: "Conservation of momentum",
            steps: [
              "Before: total momentum = 0 (both stationary)",
              "After: 2.0 × 6.0 + 3.0 × v = 0",
              "12 + 3.0v = 0 → v = -4.0 m/s",
              "Trolley B moves at 4.0 m/s in the opposite direction",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q1-15",
        question:
          "A 0.15 kg ball travelling at 12 m/s is struck and rebounds straight back at 8.0 m/s. The contact time is 0.020 s.\n(a) Calculate the change in momentum of the ball. [3]\n(b) Calculate the average force exerted on the ball. [2]",
        marks: 5,
        modelAnswer:
          "(a) Taking the initial direction as positive: initial momentum = 0.15 × 12 = 1.8 kg m/s; final momentum = 0.15 × (-8.0) = -1.2 kg m/s. Change = final - initial = -1.2 - 1.8 = -3.0 kg m/s (magnitude 3.0 kg m/s).\n(b) F = change in momentum / time = 3.0 / 0.020 = 150 N.",
        markScheme: [
          "(a) momenta computed with opposite signs (1.8 and -1.2) [1]",
          "(a) change = final - initial [1]",
          "(a) magnitude 3.0 kg m/s [1]",
          "(b) F = (change in momentum)/time [1]",
          "(b) F = 150 N with unit [1]",
        ],
        commonError:
          "Treating the rebound speed as the same direction, giving a change of only 0.15 × (12 - 8) = 0.6 kg m/s instead of accounting for the reversal.",
        difficulty: "challenge",
        guideRef: "Momentum",
        hints: [
          "Momentum is a vector — the rebound velocity is negative.",
          "Change in momentum = final momentum - initial momentum.",
          "Force = change in momentum divided by contact time.",
        ],
        strategy: "impulse = change in momentum = F × t",
        solutions: [
          {
            label: "Impulse-momentum",
            steps: [
              "Initial p = 0.15 × 12 = 1.8 kg m/s",
              "Final p = 0.15 × (-8.0) = -1.2 kg m/s",
              "Change = -1.2 - 1.8 = -3.0 kg m/s (magnitude 3.0 kg m/s)",
              "F = (change in momentum)/t = 3.0 / 0.020 = 150 N",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q1-16",
        question:
          "A skydiver falls from a plane and eventually reaches terminal velocity.\n(a) Explain, in terms of forces, why the skydiver's acceleration decreases as she speeds up. [2]\n(b) Explain what is meant by terminal velocity. [2]",
        marks: 4,
        modelAnswer:
          "(a) As speed increases, air resistance increases. The resultant downward force (weight minus air resistance) gets smaller, so by F = ma the acceleration decreases.\n(b) Terminal velocity is the constant maximum velocity reached when air resistance has grown to equal the weight, so the resultant force is zero and there is no further acceleration.",
        markScheme: [
          "(a) air resistance increases with speed [1]",
          "(a) resultant force decreases so acceleration decreases [1]",
          "(b) air resistance equals weight / resultant force zero [1]",
          "(b) constant (maximum) velocity, no acceleration [1]",
        ],
        commonError:
          "Saying the weight decreases — the weight stays constant; it is the air resistance that increases.",
        difficulty: "core",
        guideRef: "Forces and Newton's Laws",
        hints: [
          "Two forces act: weight (constant) and air resistance (grows with speed).",
          "Acceleration depends on the resultant force.",
          "Terminal velocity is when the forces balance.",
        ],
      },
      {
        id: "exam-physics-q1-17",
        question:
          "A force of 30 N is applied to the end of a spanner of length 0.25 m to turn a nut. The force is applied at right angles to the spanner.\n(a) Calculate the moment of the force about the nut. [2]\n(b) Explain why a longer spanner makes the nut easier to turn. [2]",
        marks: 4,
        modelAnswer:
          "(a) moment = force × perpendicular distance = 30 × 0.25 = 7.5 N m.\n(b) A longer spanner gives a greater perpendicular distance from the pivot, so for the same force the moment is larger; a larger turning effect makes the nut easier to undo (or less force is needed for the same moment).",
        markScheme: [
          "(a) moment = force × distance [1]",
          "(a) 7.5 N m with unit [1]",
          "(b) longer spanner increases the distance [1]",
          "(b) larger moment for the same force / less force needed [1]",
        ],
        commonError: "Giving the unit as N instead of N m for a moment.",
        difficulty: "warmup",
        guideRef: "Moments and Equilibrium",
        solutions: [
          {
            label: "Moment of a force",
            steps: [
              "moment = force × perpendicular distance",
              "moment = 30 × 0.25 = 7.5 N m",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q1-18",
        question:
          "A car of mass 900 kg accelerates from 8.0 m/s to 20 m/s.\n(a) Calculate the change in the car's momentum. [3]\n(b) If this change takes 6.0 s, calculate the average resultant force on the car. [2]",
        marks: 5,
        modelAnswer:
          "(a) Initial momentum = 900 × 8.0 = 7200 kg m/s; final momentum = 900 × 20 = 18 000 kg m/s. Change = 18 000 - 7200 = 10 800 kg m/s.\n(b) F = change in momentum / time = 10 800 / 6.0 = 1800 N.",
        markScheme: [
          "(a) initial and final momentum calculated [1]",
          "(a) change = final - initial [1]",
          "(a) 10 800 kg m/s [1]",
          "(b) F = (change in momentum)/time [1]",
          "(b) 1800 N with unit [1]",
        ],
        commonError: "Using only the change in speed × mass without computing both momenta clearly, or mixing up the time.",
        difficulty: "core",
        guideRef: "Momentum",
        hints: [
          "Momentum = mass × velocity.",
          "Change in momentum = final - initial.",
          "Force = rate of change of momentum.",
        ],
        strategy: "F = change in momentum / time",
        solutions: [
          {
            label: "Momentum change and force",
            steps: [
              "Initial p = 900 × 8.0 = 7200 kg m/s",
              "Final p = 900 × 20 = 18 000 kg m/s",
              "Change = 18 000 - 7200 = 10 800 kg m/s",
              "F = 10 800 / 6.0 = 1800 N",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q1-19",
        question:
          "Describe an experiment to determine the density of an irregularly shaped stone, naming the apparatus and the measurements taken. [4]",
        marks: 4,
        modelAnswer:
          "Measure the mass of the stone using a balance. Partly fill a measuring cylinder with water and record the volume. Lower the stone in gently and record the new volume. The volume of the stone equals the rise in water level (the difference between the two readings). Calculate density = mass / volume. (A displacement/eureka can may be used instead to collect and measure the displaced water.)",
        markScheme: [
          "measure mass with a balance [1]",
          "use a measuring cylinder / displacement can with water [1]",
          "volume of stone = rise in water level / displaced water [1]",
          "density = mass / volume [1]",
        ],
        commonError: "Trying to measure the volume of an irregular solid with a ruler, which only works for regular shapes.",
        difficulty: "core",
        guideRef: "Density and Pressure",
        hints: [
          "You can find mass directly with a balance.",
          "An irregular volume can be found by water displacement.",
          "Combine with density = mass / volume.",
        ],
      },
      {
        id: "exam-physics-q1-20",
        question:
          "A 70 kg crate is pulled along the ground at a constant velocity by a horizontal force of 210 N.\n(a) State the size and direction of the frictional force on the crate. [2]\n(b) The pulling force is increased to 350 N while friction stays the same. Calculate the resulting acceleration. [3]",
        marks: 5,
        modelAnswer:
          "(a) At constant velocity the resultant force is zero, so friction balances the pull: friction = 210 N, acting backwards (opposite to motion).\n(b) Resultant force = 350 - 210 = 140 N. a = F / m = 140 / 70 = 2.0 m/s squared.",
        markScheme: [
          "(a) friction = 210 N [1]",
          "(a) acting backwards / opposing motion [1]",
          "(b) resultant = 350 - 210 = 140 N [1]",
          "(b) a = F/m used [1]",
          "(b) a = 2.0 m/s squared with unit [1]",
        ],
        commonError: "Using the full 350 N (not the resultant) in F = ma, ignoring friction.",
        difficulty: "core",
        guideRef: "Forces and Newton's Laws",
        hints: [
          "Constant velocity means balanced forces.",
          "Resultant force = applied force - friction.",
          "Then a = resultant force / mass.",
        ],
        strategy: "find the resultant force before applying F = ma",
        solutions: [
          {
            label: "Resultant force then acceleration",
            steps: [
              "Constant velocity: friction = pull = 210 N (backwards)",
              "New resultant = 350 - 210 = 140 N",
              "a = F/m = 140 / 70 = 2.0 m/s squared",
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PAPER 2 — Structured
  // Focus: energy/work/power/efficiency, thermal physics, specific & latent heat,
  // gas laws, kinetic theory.
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "exam-physics-qa-2",
    title: "Paper 2 — Structured",
    description:
      "Structured questions on energy, work, power, efficiency, thermal physics, specific and latent heat, and the gas laws. Show all working and include units. Suggested time: 75 minutes.",
    questions: [
      {
        id: "exam-physics-q2-01",
        question:
          "State the principle of conservation of energy and give one everyday example of an energy transfer. [3]",
        marks: 3,
        modelAnswer:
          "Energy cannot be created or destroyed; it can only be transferred from one store to another (the total energy of a closed system is constant). Example: a falling ball transfers gravitational potential energy to kinetic energy (any sensible example accepted).",
        markScheme: [
          "energy cannot be created or destroyed [1]",
          "only transferred / total constant in a closed system [1]",
          "a valid example of a transfer [1]",
        ],
        commonError: "Saying energy is 'used up' — energy is transferred, not destroyed.",
        difficulty: "warmup",
        guideRef: "Energy, Work and Power",
      },
      {
        id: "exam-physics-q2-02",
        question:
          "A 0.50 kg ball is dropped from a height of 1.8 m.\n(a) Calculate its gravitational potential energy before release. (g = 10 N/kg) [2]\n(b) Assuming no air resistance, calculate its speed just before it hits the ground. [3]",
        marks: 5,
        modelAnswer:
          "(a) GPE = mgh = 0.50 × 10 × 1.8 = 9.0 J.\n(b) All GPE converts to kinetic energy: ½mv² = 9.0 → v² = 2 × 9.0 / 0.50 = 36 → v = 6.0 m/s.",
        markScheme: [
          "(a) GPE = mgh [1]",
          "(a) 9.0 J [1]",
          "(a)/(b) KE = GPE used [1]",
          "(b) v² = 2 × KE / m [1]",
          "(b) v = 6.0 m/s [1]",
        ],
        commonError: "Forgetting the factor of ½ in kinetic energy, giving v = √(2 × 9/0.5) wrong, or taking the square root incorrectly.",
        difficulty: "core",
        guideRef: "Energy, Work and Power",
        hints: [
          "GPE = mgh.",
          "At the bottom all GPE has become kinetic energy.",
          "Rearrange ½mv² for v: v = square root of (2 × KE / m).",
        ],
        strategy: "set KE gained = GPE lost",
        solutions: [
          {
            label: "Energy conservation",
            steps: [
              "GPE = mgh = 0.50 × 10 × 1.8 = 9.0 J",
              "KE at bottom = 9.0 J",
              "½mv² = 9.0 → v² = 2 × 9.0 / 0.50 = 36",
              "v = square root of 36 = 6.0 m/s",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q2-03",
        question:
          "A crane lifts a 500 kg load through a vertical height of 12 m in 8.0 s.\n(a) Calculate the work done against gravity. [2]\n(b) Calculate the useful power output of the crane. [2]\n(c) The crane's motor draws 12 kW of electrical power. Calculate its efficiency. [2]",
        marks: 6,
        modelAnswer:
          "(a) W = mgh = 500 × 10 × 12 = 60 000 J (60 kJ).\n(b) P = W / t = 60 000 / 8.0 = 7500 W (7.5 kW).\n(c) efficiency = useful power / total power × 100% = 7500 / 12 000 × 100% = 62.5%.",
        markScheme: [
          "(a) W = mgh = 60 000 J [2]",
          "(b) P = W/t = 7500 W [2]",
          "(c) efficiency = useful/total × 100% [1]",
          "(c) 62.5% (allow 63%) [1]",
        ],
        commonError: "Comparing energy with power directly; useful and total must both be powers (or both energies).",
        difficulty: "core",
        guideRef: "Energy, Work and Power",
        hints: [
          "Work against gravity = mgh.",
          "Power = work / time.",
          "Efficiency = useful power / total power × 100%.",
        ],
        strategy: "energy, then power, then efficiency",
        solutions: [
          {
            label: "Work, power, efficiency",
            steps: [
              "W = mgh = 500 × 10 × 12 = 60 000 J",
              "P = W/t = 60 000 / 8.0 = 7500 W",
              "efficiency = 7500 / 12 000 × 100% = 62.5%",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q2-04",
        question:
          "A car of mass 1000 kg travels at 25 m/s.\n(a) Calculate its kinetic energy. [2]\n(b) The car brakes to rest. Explain what happens to this kinetic energy. [2]",
        marks: 4,
        modelAnswer:
          "(a) KE = ½mv² = ½ × 1000 × 25² = ½ × 1000 × 625 = 312 500 J (about 3.1 × 10^5 J).\n(b) Work is done by friction in the brakes; the kinetic energy is transferred to thermal energy (heat) in the brake discs, tyres and surroundings, raising their temperature. Energy is dissipated, not destroyed.",
        markScheme: [
          "(a) KE = ½mv² [1]",
          "(a) 312 500 J / 3.1 × 10^5 J [1]",
          "(b) energy transferred to heat / thermal energy [1]",
          "(b) by friction in brakes / dissipated to surroundings [1]",
        ],
        commonError: "Forgetting to square the velocity, giving ½ × 1000 × 25 = 12 500 J.",
        difficulty: "core",
        guideRef: "Energy, Work and Power",
        hints: [
          "KE = ½mv²; square the speed first.",
          "Brakes heat up — where does the energy go?",
        ],
        solutions: [
          {
            label: "Kinetic energy",
            steps: [
              "KE = ½mv² = ½ × 1000 × 25²",
              "25² = 625",
              "KE = 0.5 × 1000 × 625 = 312 500 J",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q2-05",
        question:
          "Describe, in terms of the arrangement and motion of particles, the differences between the solid, liquid and gas states of matter. [6]",
        marks: 6,
        modelAnswer:
          "Solid: particles are packed closely in a regular fixed arrangement (lattice); they vibrate about fixed positions but cannot move from place to place; strong forces of attraction hold them in place; fixed shape and volume.\nLiquid: particles are still close together but in an irregular arrangement; they can move/slide past one another; forces are weaker than in a solid; fixed volume but takes the shape of its container.\nGas: particles are far apart in a random arrangement; they move quickly in all directions; forces of attraction are negligible; no fixed shape or volume and the gas fills its container.",
        markScheme: [
          "solid: regular, fixed arrangement / vibrate about fixed positions [1]",
          "solid: fixed shape and volume [1]",
          "liquid: close together but able to move/slide past each other [1]",
          "liquid: fixed volume, shape of container [1]",
          "gas: far apart, random rapid motion [1]",
          "gas: no fixed shape or volume / fills container [1]",
        ],
        commonError: "Saying liquid particles are far apart — they are still close together, only able to move past one another.",
        difficulty: "warmup",
        guideRef: "Thermal Physics",
      },
      {
        id: "exam-physics-q2-06",
        question:
          "A 2.0 kg block of aluminium is heated from 20 °C to 70 °C. The specific heat capacity of aluminium is 900 J/(kg °C).\n(a) Calculate the thermal energy supplied. [3]\n(b) State one assumption you have made. [1]",
        marks: 4,
        modelAnswer:
          "(a) Q = mcΔT = 2.0 × 900 × (70 - 20) = 2.0 × 900 × 50 = 90 000 J (90 kJ).\n(b) Assumption: no thermal energy is lost to the surroundings (all the energy goes into heating the aluminium).",
        markScheme: [
          "(a) Q = mc(delta T) [1]",
          "(a) delta T = 50 used [1]",
          "(a) 90 000 J / 90 kJ [1]",
          "(b) no heat lost to surroundings (or similar) [1]",
        ],
        commonError: "Using the final temperature (70) rather than the temperature change (50).",
        difficulty: "core",
        guideRef: "Thermal Physics",
        hints: [
          "Use Q = mc × temperature change.",
          "The temperature change is the difference, not the final value.",
        ],
        strategy: "Q = mc(delta T)",
        solutions: [
          {
            label: "Specific heat capacity",
            steps: [
              "delta T = 70 - 20 = 50 °C",
              "Q = mc(delta T) = 2.0 × 900 × 50",
              "Q = 90 000 J (90 kJ)",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q2-07",
        question:
          "An immersion heater rated at 60 W is used to heat 0.30 kg of water. In 5.0 minutes the temperature rises by 14 °C.\n(a) Calculate the electrical energy supplied. [2]\n(b) Calculate the experimental value of the specific heat capacity of water. [3]\n(c) Explain why this value is likely to be higher than the accepted value of 4200 J/(kg °C). [1]",
        marks: 6,
        modelAnswer:
          "(a) E = Pt = 60 × (5.0 × 60) = 60 × 300 = 18 000 J.\n(b) Assuming all energy heats the water, c = Q / (mΔT) = 18 000 / (0.30 × 14) = 18 000 / 4.2 = 4286 J/(kg °C) (about 4300 J/(kg °C)).\n(c) Some heat is lost to the surroundings, so more energy is recorded than actually warms the water, making the calculated c too high.",
        markScheme: [
          "(a) E = Pt with t = 300 s [1]",
          "(a) 18 000 J [1]",
          "(b) c = Q/(m delta T) [1]",
          "(b) substitution 18000/(0.30×14) [1]",
          "(b) c about 4290 J/(kg °C) [1]",
          "(c) heat lost to surroundings raises the apparent value [1]",
        ],
        commonError: "Leaving the time in minutes (5) instead of converting to seconds (300).",
        difficulty: "challenge",
        guideRef: "Thermal Physics",
        hints: [
          "Convert minutes to seconds before using E = Pt.",
          "Rearrange Q = mc(delta T) to find c.",
          "Think about energy escaping to the surroundings.",
        ],
        strategy: "energy in = Pt; then c = Q / (m delta T)",
        solutions: [
          {
            label: "Heater experiment",
            steps: [
              "t = 5.0 min = 300 s",
              "E = Pt = 60 × 300 = 18 000 J",
              "c = Q/(m delta T) = 18 000 / (0.30 × 14)",
              "c = 18 000 / 4.2 = 4286 J/(kg °C) (about 4300)",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q2-08",
        question:
          "0.20 kg of ice at 0 °C is melted completely. The specific latent heat of fusion of ice is 3.3 × 10^5 J/kg.\n(a) Define specific latent heat of fusion. [1]\n(b) Calculate the energy needed to melt the ice. [2]\n(c) Explain why the temperature does not change while the ice melts. [2]",
        marks: 5,
        modelAnswer:
          "(a) The specific latent heat of fusion is the energy required to change 1 kg of a substance from solid to liquid with no change in temperature.\n(b) Q = mL = 0.20 × 3.3 × 10^5 = 66 000 J (6.6 × 10^4 J).\n(c) The energy supplied is used to break the bonds/overcome the forces between the particles (increasing potential energy) rather than increasing their kinetic energy, so the temperature stays constant.",
        markScheme: [
          "(a) energy to change 1 kg solid to liquid with no temperature change [1]",
          "(b) Q = mL [1]",
          "(b) 66 000 J / 6.6 × 10^4 J [1]",
          "(c) energy used to break bonds / weaken forces between particles [1]",
          "(c) not used to raise kinetic energy / temperature [1]",
        ],
        commonError: "Using Q = mc(delta T) — there is no temperature change during melting, so the latent heat formula is required.",
        difficulty: "core",
        guideRef: "Thermal Physics",
        hints: [
          "During a change of state, use Q = mL.",
          "The energy separates the particles rather than speeding them up.",
        ],
        strategy: "change of state: Q = mL (no temperature change)",
        solutions: [
          {
            label: "Latent heat of fusion",
            steps: [
              "Q = mL = 0.20 × 3.3 × 10^5",
              "Q = 66 000 J (6.6 × 10^4 J)",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q2-09",
        question:
          "Describe the three ways in which thermal energy can be transferred and state, for each, whether it can occur in a vacuum. [6]",
        marks: 6,
        modelAnswer:
          "Conduction: thermal energy passes through a material as particles vibrate and pass energy to neighbours (and via free electrons in metals); it cannot occur in a vacuum as it needs a medium.\nConvection: in fluids, heated regions expand, become less dense and rise while cooler denser fluid sinks, setting up a convection current; it cannot occur in a vacuum as it needs a fluid.\nRadiation: thermal energy is transferred as infrared electromagnetic waves; it can travel through a vacuum (this is how the Sun's energy reaches Earth).",
        markScheme: [
          "conduction: energy passed by vibrating particles / free electrons [1]",
          "conduction: cannot occur in a vacuum [1]",
          "convection: less dense warm fluid rises, denser cool fluid sinks [1]",
          "convection: cannot occur in a vacuum [1]",
          "radiation: infrared / electromagnetic waves [1]",
          "radiation: can travel through a vacuum [1]",
        ],
        commonError: "Stating that radiation needs a medium — it is the only one that can cross a vacuum.",
        difficulty: "core",
        guideRef: "Thermal Physics",
      },
      {
        id: "exam-physics-q2-10",
        question:
          "A fixed mass of gas has a volume of 0.040 m³ at a pressure of 1.0 × 10^5 Pa. The gas is compressed at constant temperature to a pressure of 2.5 × 10^5 Pa.\n(a) State the relationship between pressure and volume for a fixed mass of gas at constant temperature. [1]\n(b) Calculate the new volume. [3]",
        marks: 4,
        modelAnswer:
          "(a) For a fixed mass of gas at constant temperature, pressure is inversely proportional to volume (pV = constant, Boyle's law).\n(b) p1V1 = p2V2 → V2 = p1V1 / p2 = (1.0 × 10^5 × 0.040) / (2.5 × 10^5) = 4000 / 250 000 = 0.016 m³.",
        markScheme: [
          "(a) p inversely proportional to V / pV = constant [1]",
          "(b) p1V1 = p2V2 [1]",
          "(b) substitution shown [1]",
          "(b) V2 = 0.016 m³ [1]",
        ],
        commonError: "Multiplying instead of dividing by the new pressure, or forgetting that volume decreases when pressure increases.",
        difficulty: "core",
        guideRef: "Gas Laws",
        hints: [
          "At constant temperature, pV = constant.",
          "Rearrange p1V1 = p2V2 for V2.",
          "Higher pressure means smaller volume — check your answer is smaller.",
        ],
        strategy: "Boyle's law: p1V1 = p2V2",
        solutions: [
          {
            label: "Boyle's law",
            steps: [
              "p1V1 = p2V2",
              "V2 = p1V1 / p2 = (1.0 × 10^5 × 0.040) / (2.5 × 10^5)",
              "V2 = 4000 / 250 000 = 0.016 m³",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q2-11",
        question:
          "Explain, using the kinetic theory of gases, why the pressure of a gas in a sealed rigid container increases when its temperature is raised. [4]",
        marks: 4,
        modelAnswer:
          "Raising the temperature increases the average kinetic energy of the gas particles, so they move faster on average. The particles then collide with the container walls more frequently and with greater force. Since pressure is the total force of these collisions per unit area, and the volume is fixed, the pressure increases.",
        markScheme: [
          "higher temperature gives higher average kinetic energy / faster particles [1]",
          "collide with walls more frequently [1]",
          "collide with greater force / momentum change [1]",
          "pressure = force per unit area, so pressure increases (volume fixed) [1]",
        ],
        commonError: "Saying the particles expand or get bigger — particle size is unchanged; it is their speed that increases.",
        difficulty: "core",
        guideRef: "Gas Laws",
        hints: [
          "Temperature is linked to average kinetic energy.",
          "Faster particles hit the walls more often and harder.",
          "Pressure is force per unit area on the walls.",
        ],
      },
      {
        id: "exam-physics-q2-12",
        question:
          "A solar panel has an efficiency of 18%. It receives 800 W of solar power on each square metre of its surface.\n(a) Calculate the electrical power produced by 1.0 m² of panel. [2]\n(b) Calculate the area of panel needed to produce 2160 W. [2]",
        marks: 4,
        modelAnswer:
          "(a) Useful power = efficiency × input = 0.18 × 800 = 144 W per square metre.\n(b) Area = 2160 / 144 = 15 m².",
        markScheme: [
          "(a) 0.18 × 800 [1]",
          "(a) 144 W [1]",
          "(b) area = required power / power per m squared [1]",
          "(b) 15 m squared [1]",
        ],
        commonError: "Using the efficiency as a percentage (18) rather than a decimal (0.18) in the multiplication.",
        difficulty: "core",
        guideRef: "Energy, Work and Power",
        hints: [
          "Convert the percentage efficiency to a decimal.",
          "Useful power = efficiency × input power.",
          "Number of square metres = total power needed / power per square metre.",
        ],
        strategy: "useful = efficiency × input",
        solutions: [
          {
            label: "Solar panel output",
            steps: [
              "Useful power per m squared = 0.18 × 800 = 144 W",
              "Area = 2160 / 144 = 15 m squared",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q2-13",
        question:
          "Explain why a vacuum flask (Thermos) is able to keep a hot drink hot for a long time, referring to each feature of its design. [4]",
        marks: 4,
        modelAnswer:
          "The double walls have a vacuum between them, which prevents heat loss by conduction and convection (there are no particles to carry energy). The walls are silvered/shiny so that infrared radiation is reflected back, reducing heat loss by radiation. The stopper is made of an insulating material (plastic/cork) and seals the top, reducing conduction and convection through the opening.",
        markScheme: [
          "vacuum stops conduction and convection [1]",
          "silvered/shiny surfaces reduce radiation (reflect IR) [1]",
          "insulating stopper reduces heat loss through the top [1]",
          "links each feature to the relevant transfer method [1]",
        ],
        commonError: "Naming the features without saying which heat-transfer process each one reduces.",
        difficulty: "core",
        guideRef: "Thermal Physics",
        hints: [
          "There are three ways heat can be transferred.",
          "Match each part of the flask to the transfer it blocks.",
        ],
      },
      {
        id: "exam-physics-q2-14",
        question:
          "A 1500 W kettle is 85% efficient at heating water.\n(a) Calculate the useful power delivered to the water. [2]\n(b) The kettle heats 0.50 kg of water from 18 °C to 100 °C. Calculate the minimum time required, given the specific heat capacity of water is 4200 J/(kg °C). [4]",
        marks: 6,
        modelAnswer:
          "(a) Useful power = 0.85 × 1500 = 1275 W.\n(b) Energy needed = mcΔT = 0.50 × 4200 × (100 - 18) = 0.50 × 4200 × 82 = 172 200 J. Time = energy / useful power = 172 200 / 1275 = 135 s (about 2 minutes 15 s).",
        markScheme: [
          "(a) 0.85 × 1500 = 1275 W [2]",
          "(b) Q = mc delta T with delta T = 82 [1]",
          "(b) Q = 172 200 J [1]",
          "(b) time = Q / useful power [1]",
          "(b) t = 135 s (allow 130-136 s) [1]",
        ],
        commonError: "Dividing the energy by the full 1500 W rather than the useful 1275 W.",
        difficulty: "challenge",
        guideRef: "Thermal Physics",
        hints: [
          "Useful power = efficiency × rated power.",
          "Energy needed comes from Q = mc(delta T).",
          "Time = energy / useful power.",
        ],
        strategy: "find energy required, then divide by useful power",
        solutions: [
          {
            label: "Efficiency with heating",
            steps: [
              "Useful power = 0.85 × 1500 = 1275 W",
              "delta T = 100 - 18 = 82 °C",
              "Q = mc delta T = 0.50 × 4200 × 82 = 172 200 J",
              "t = Q / useful power = 172 200 / 1275 = 135 s",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q2-15",
        question:
          "A pump raises 150 kg of water each second from a reservoir to a height of 24 m.\n(a) Calculate the useful power output of the pump. [3]\n(b) If the pump is 75% efficient, calculate the input power required. [2]",
        marks: 5,
        modelAnswer:
          "(a) Energy gained per second = mgh = 150 × 10 × 24 = 36 000 J. Useful power = 36 000 W (36 kW).\n(b) Input power = useful power / efficiency = 36 000 / 0.75 = 48 000 W (48 kW).",
        markScheme: [
          "(a) energy per second = mgh [1]",
          "(a) 36 000 J per second [1]",
          "(a) useful power = 36 000 W [1]",
          "(b) input = useful / efficiency [1]",
          "(b) 48 000 W / 48 kW [1]",
        ],
        commonError: "Multiplying by efficiency instead of dividing, which would give an input smaller than the useful output (impossible).",
        difficulty: "core",
        guideRef: "Energy, Work and Power",
        hints: [
          "Power is energy transferred per second.",
          "Useful power = mgh per second.",
          "Input power = useful power / efficiency.",
          "Input must be greater than the useful output.",
        ],
        strategy: "power = energy per second; input = useful / efficiency",
        solutions: [
          {
            label: "Pump power",
            steps: [
              "Energy per second = mgh = 150 × 10 × 24 = 36 000 J",
              "Useful power = 36 000 W",
              "Input power = 36 000 / 0.75 = 48 000 W",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q2-16",
        question:
          "Distinguish between renewable and non-renewable energy resources, giving two examples of each. [4]",
        marks: 4,
        modelAnswer:
          "A renewable resource is one that is naturally replenished and will not run out on a human timescale; examples include solar, wind, hydroelectric, tidal, wave, geothermal or biofuel. A non-renewable resource cannot be replenished within a human timescale and will eventually be used up; examples include coal, oil, natural gas and nuclear fuel (uranium).",
        markScheme: [
          "renewable defined (naturally replenished / will not run out) [1]",
          "two valid renewable examples [1]",
          "non-renewable defined (finite / will run out) [1]",
          "two valid non-renewable examples [1]",
        ],
        commonError: "Listing nuclear as renewable — uranium is a finite fuel and is non-renewable.",
        difficulty: "warmup",
        guideRef: "Energy Resources",
      },
      {
        id: "exam-physics-q2-17",
        question:
          "A child of mass 30 kg climbs a 4.0 m rope in 6.0 s.\n(a) Calculate the work done against gravity. [2]\n(b) Calculate the average power developed. [2]",
        marks: 4,
        modelAnswer:
          "(a) W = mgh = 30 × 10 × 4.0 = 1200 J.\n(b) P = W / t = 1200 / 6.0 = 200 W.",
        markScheme: [
          "(a) W = mgh [1]",
          "(a) 1200 J [1]",
          "(b) P = W/t [1]",
          "(b) 200 W with unit [1]",
        ],
        commonError: "Confusing power and energy, or forgetting to divide by time.",
        difficulty: "warmup",
        guideRef: "Energy, Work and Power",
        solutions: [
          {
            label: "Work and power",
            steps: [
              "W = mgh = 30 × 10 × 4.0 = 1200 J",
              "P = W/t = 1200 / 6.0 = 200 W",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q2-18",
        question:
          "Steam at 100 °C can cause far worse burns than the same mass of water at 100 °C. Explain why, using ideas about latent heat. [3]",
        marks: 3,
        modelAnswer:
          "When steam touches the skin it condenses to water at 100 °C, releasing its specific latent heat of vaporisation to the skin. This is a large amount of additional energy released before the water then cools. Water at 100 °C only releases the energy from cooling, so steam transfers much more energy to the skin and causes worse burns.",
        markScheme: [
          "steam condenses on the skin [1]",
          "releasing latent heat of vaporisation [1]",
          "this is extra energy compared with water cooling, so worse burns [1]",
        ],
        commonError: "Saying steam is hotter than the water — both are at 100 °C; the difference is the latent heat released on condensing.",
        difficulty: "challenge",
        guideRef: "Thermal Physics",
        hints: [
          "Both are at the same temperature.",
          "Steam must condense before it cools.",
          "Condensation releases latent heat.",
        ],
      },
      {
        id: "exam-physics-q2-19",
        question:
          "Outline how a coal-fired power station converts the chemical energy of coal into electrical energy, naming the main energy transfers at each stage. [4]",
        marks: 4,
        modelAnswer:
          "Coal is burned, transferring chemical energy to thermal energy. The thermal energy boils water to make steam (heating). The steam drives a turbine, transferring thermal energy to kinetic energy of the turbine. The spinning turbine turns a generator, which transfers kinetic energy to electrical energy.",
        markScheme: [
          "burning coal: chemical to thermal energy [1]",
          "thermal energy boils water to steam [1]",
          "steam turns turbine: thermal to kinetic energy [1]",
          "turbine drives generator: kinetic to electrical energy [1]",
        ],
        commonError: "Omitting the turbine-generator stage or muddling the order of energy transfers.",
        difficulty: "core",
        guideRef: "Energy Resources",
      },
      {
        id: "exam-physics-q2-20",
        question:
          "A 0.30 kg copper block at 90 °C is placed in 0.50 kg of water at 15 °C in an insulated cup. Specific heat capacity of copper is 380 J/(kg °C), of water is 4200 J/(kg °C). Calculate the final temperature reached, assuming no heat is lost to the surroundings. [5]",
        marks: 5,
        modelAnswer:
          "Heat lost by copper = heat gained by water. Let final temperature be T.\n0.30 × 380 × (90 - T) = 0.50 × 4200 × (T - 15)\n114(90 - T) = 2100(T - 15)\n10 260 - 114T = 2100T - 31 500\n10 260 + 31 500 = 2100T + 114T\n41 760 = 2214T\nT = 41 760 / 2214 = 18.9 °C (about 19 °C).",
        markScheme: [
          "heat lost by copper = heat gained by water [1]",
          "0.30 × 380 × (90 - T) = 0.50 × 4200 × (T - 15) [1]",
          "correct expansion of both sides [1]",
          "collecting terms: 41 760 = 2214T [1]",
          "T = 18.9 °C (allow 19 °C) [1]",
        ],
        commonError: "Setting the temperature changes the wrong way round (copper cools, so use 90 - T; water warms, so use T - 15).",
        difficulty: "challenge",
        guideRef: "Thermal Physics",
        hints: [
          "Energy is conserved: heat lost by copper = heat gained by water.",
          "Use Q = mc(delta T) for each, with T as the unknown final temperature.",
          "Copper falls from 90 to T; water rises from 15 to T.",
          "Solve the resulting equation for T.",
        ],
        strategy: "method of mixtures: heat lost = heat gained",
        solutions: [
          {
            label: "Method of mixtures",
            steps: [
              "Heat lost by copper = heat gained by water",
              "0.30 × 380 × (90 - T) = 0.50 × 4200 × (T - 15)",
              "114(90 - T) = 2100(T - 15)",
              "10 260 - 114T = 2100T - 31 500",
              "41 760 = 2214T → T = 18.9 °C",
            ],
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PAPER 3 — Structured
  // Focus: waves, reflection, refraction, TIR, lenses, sound, EM spectrum,
  // electricity and circuits.
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "exam-physics-qa-3",
    title: "Paper 3 — Structured",
    description:
      "Structured questions on waves, reflection, refraction, total internal reflection, lenses, sound, the electromagnetic spectrum and electric circuits. Show all working and include units. Suggested time: 75 minutes.",
    questions: [
      {
        id: "exam-physics-q3-01",
        question:
          "(a) State the difference between a transverse and a longitudinal wave, giving one example of each. [3]\n(b) Define the amplitude of a wave. [1]",
        marks: 4,
        modelAnswer:
          "(a) In a transverse wave the oscillations (vibrations) are perpendicular to the direction of energy travel; example: light or any electromagnetic wave (or water waves). In a longitudinal wave the oscillations are parallel to the direction of energy travel; example: sound.\n(b) Amplitude is the maximum displacement of a point on the wave from its rest (undisturbed) position.",
        markScheme: [
          "(a) transverse: vibrations perpendicular to energy travel [1]",
          "(a) longitudinal: vibrations parallel to energy travel [1]",
          "(a) one correct example of each [1]",
          "(b) maximum displacement from rest position [1]",
        ],
        commonError: "Giving sound as a transverse wave; sound is longitudinal.",
        difficulty: "warmup",
        guideRef: "Waves",
      },
      {
        id: "exam-physics-q3-02",
        question:
          "A wave has a frequency of 50 Hz and a wavelength of 6.0 m.\n(a) State the wave equation. [1]\n(b) Calculate the speed of the wave. [2]\n(c) Calculate the period of the wave. [2]",
        marks: 5,
        modelAnswer:
          "(a) v = f × (lambda) (wave speed = frequency × wavelength).\n(b) v = f(lambda) = 50 × 6.0 = 300 m/s.\n(c) T = 1 / f = 1 / 50 = 0.020 s.",
        markScheme: [
          "(a) v = f × wavelength [1]",
          "(b) substitution 50 × 6.0 [1]",
          "(b) 300 m/s [1]",
          "(c) T = 1/f [1]",
          "(c) 0.020 s [1]",
        ],
        commonError: "Confusing period and frequency; period is the reciprocal of frequency.",
        difficulty: "core",
        guideRef: "Waves",
        hints: [
          "Wave speed = frequency × wavelength.",
          "Period = 1 / frequency.",
        ],
        strategy: "v = f(lambda) and T = 1/f",
        solutions: [
          {
            label: "Wave equation and period",
            steps: [
              "v = f × wavelength = 50 × 6.0 = 300 m/s",
              "T = 1/f = 1/50 = 0.020 s",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q3-03",
        question:
          "A ray of light strikes a plane mirror at an angle of incidence of 35°.\n(a) State the law of reflection. [1]\n(b) State the angle of reflection. [1]\n(c) Describe two properties of the image formed in a plane mirror. [2]",
        marks: 4,
        modelAnswer:
          "(a) The angle of incidence equals the angle of reflection (both measured from the normal); the incident ray, reflected ray and normal lie in the same plane.\n(b) Angle of reflection = 35°.\n(c) The image is virtual and upright; it is the same size as the object and is laterally inverted; it is as far behind the mirror as the object is in front. (Any two.)",
        markScheme: [
          "(a) angle of incidence = angle of reflection [1]",
          "(b) 35° [1]",
          "(c) two correct properties (virtual, upright, same size, laterally inverted, equal distance behind) [2]",
        ],
        commonError: "Measuring the angles from the mirror surface rather than from the normal.",
        difficulty: "warmup",
        guideRef: "Reflection and Refraction",
      },
      {
        id: "exam-physics-q3-04",
        question:
          "Light travels from air into glass. The angle of incidence is 40° and the angle of refraction is 25°.\n(a) Calculate the refractive index of the glass. [2]\n(b) Explain why the light bends as it enters the glass. [2]",
        marks: 4,
        modelAnswer:
          "(a) n = sin i / sin r = sin 40° / sin 25° = 0.643 / 0.423 = 1.52.\n(b) Light slows down when it enters the denser glass; because it slows, the ray bends towards the normal at the boundary.",
        markScheme: [
          "(a) n = sin i / sin r [1]",
          "(a) n = 1.52 (allow 1.5) [1]",
          "(b) light slows down in the denser medium [1]",
          "(b) so it bends towards the normal [1]",
        ],
        commonError: "Inverting the ratio (sin r / sin i), which gives a refractive index less than 1.",
        difficulty: "core",
        guideRef: "Reflection and Refraction",
        hints: [
          "Refractive index n = sin(angle of incidence) / sin(angle of refraction).",
          "sin 40° is about 0.643; sin 25° is about 0.423.",
          "n should be greater than 1 for glass.",
        ],
        strategy: "Snell's law: n = sin i / sin r",
        solutions: [
          {
            label: "Snell's law",
            steps: [
              "n = sin i / sin r = sin 40° / sin 25°",
              "= 0.643 / 0.423",
              "n = 1.52",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q3-05",
        question:
          "(a) Explain what is meant by the critical angle. [2]\n(b) The refractive index of a glass is 1.50. Calculate its critical angle. [3]",
        marks: 5,
        modelAnswer:
          "(a) The critical angle is the angle of incidence (in the denser medium) for which the angle of refraction is 90°; at angles greater than this, total internal reflection occurs.\n(b) sin c = 1 / n = 1 / 1.50 = 0.667. c = sin^-1 (0.667) = 41.8° (about 42°).",
        markScheme: [
          "(a) angle of incidence for which refraction angle is 90° [1]",
          "(a) beyond this total internal reflection occurs [1]",
          "(b) sin c = 1/n [1]",
          "(b) sin c = 0.667 [1]",
          "(b) c = 41.8° (allow 42°) [1]",
        ],
        commonError: "Using sin c = n instead of sin c = 1/n.",
        difficulty: "core",
        guideRef: "Total Internal Reflection",
        hints: [
          "At the critical angle, the refracted ray grazes the surface at 90°.",
          "sin(critical angle) = 1 / refractive index.",
          "Take the inverse sine of the result.",
        ],
        strategy: "sin c = 1/n",
        solutions: [
          {
            label: "Critical angle",
            steps: [
              "sin c = 1/n = 1/1.50 = 0.667",
              "c = inverse sine of 0.667",
              "c = 41.8° (about 42°)",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q3-06",
        question:
          "Describe how optical fibres use total internal reflection to carry signals, and state one practical use. [4]",
        marks: 4,
        modelAnswer:
          "Light (or infrared) is sent into one end of a thin glass fibre. Each time the light meets the boundary between the core and the outer cladding, the angle of incidence is greater than the critical angle, so total internal reflection occurs and no light escapes. The light therefore zig-zags along the fibre, even around bends, until it reaches the other end. A practical use is in telecommunications (carrying telephone/internet data) or in medical endoscopes.",
        markScheme: [
          "light hits the core boundary at more than the critical angle [1]",
          "total internal reflection keeps light inside [1]",
          "light travels along the fibre / around bends [1]",
          "valid use (communications / endoscope) [1]",
        ],
        commonError: "Saying the light refracts along the fibre — it is repeated total internal reflection, not refraction, that keeps it inside.",
        difficulty: "core",
        guideRef: "Total Internal Reflection",
        hints: [
          "The angle inside must exceed the critical angle.",
          "Total internal reflection means no light escapes.",
        ],
      },
      {
        id: "exam-physics-q3-07",
        question:
          "A converging (convex) lens has a focal length of 15 cm. An object is placed 25 cm from the lens.\n(a) Describe what is meant by the principal focus of a converging lens. [2]\n(b) State the nature of the image formed in this case (real/virtual, magnified/diminished, upright/inverted). [3]",
        marks: 5,
        modelAnswer:
          "(a) The principal focus is the point on the principal axis where rays parallel to the axis converge (meet) after passing through the lens.\n(b) The object is beyond the focal length (25 cm > 15 cm) but the exact position is between f and 2f (2f = 30 cm). So the image is real, inverted and magnified, formed on the far side of the lens beyond 2f.",
        markScheme: [
          "(a) rays parallel to the axis converge there [1]",
          "(a) point on the principal axis [1]",
          "(b) real [1]",
          "(b) inverted [1]",
          "(b) magnified [1]",
        ],
        commonError: "Assuming the image is always diminished; between f and 2f the image is magnified.",
        difficulty: "challenge",
        guideRef: "Lenses",
        hints: [
          "Compare the object distance with f and 2f.",
          "2f = 30 cm here.",
          "An object between f and 2f gives a real, inverted, magnified image.",
        ],
        strategy: "compare object distance to f and 2f to classify the image",
      },
      {
        id: "exam-physics-q3-08",
        question:
          "(a) List the regions of the electromagnetic spectrum in order of increasing frequency. [3]\n(b) State one use of microwaves and one danger of ultraviolet radiation. [2]",
        marks: 5,
        modelAnswer:
          "(a) Radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays (increasing frequency).\n(b) Microwaves: used for cooking food or for satellite/mobile phone communications. Ultraviolet danger: can cause skin cancer (or eye damage / sunburn).",
        markScheme: [
          "(a) correct order radio to gamma [2]",
          "(a) all seven regions named [1]",
          "(b) valid use of microwaves [1]",
          "(b) valid danger of ultraviolet [1]",
        ],
        commonError: "Reversing the order (gamma has the highest frequency, radio the lowest).",
        difficulty: "warmup",
        guideRef: "Electromagnetic Spectrum",
      },
      {
        id: "exam-physics-q3-09",
        question:
          "An echo-sounder on a boat sends a sound pulse downwards and receives the reflection from the seabed 0.40 s later. The speed of sound in seawater is 1500 m/s.\n(a) Calculate the depth of the seabed. [3]\n(b) Explain why sound cannot travel through the vacuum of space. [1]",
        marks: 4,
        modelAnswer:
          "(a) Total distance travelled = speed × time = 1500 × 0.40 = 600 m. This is there and back, so the depth = 600 / 2 = 300 m.\n(b) Sound is a longitudinal wave that needs particles (a medium) to transmit the vibrations; a vacuum has no particles, so sound cannot travel through it.",
        markScheme: [
          "(a) total distance = v × t = 600 m [1]",
          "(a) divide by 2 for there-and-back [1]",
          "(a) depth = 300 m [1]",
          "(b) sound needs a medium / particles to travel [1]",
        ],
        commonError: "Forgetting to halve the distance — the pulse travels to the seabed and back.",
        difficulty: "core",
        guideRef: "Sound",
        hints: [
          "Distance = speed × time gives the total path.",
          "The pulse goes down and comes back up.",
          "Depth is half the total distance.",
        ],
        strategy: "echo distance = speed × time, then halve",
        solutions: [
          {
            label: "Echo sounding",
            steps: [
              "Total distance = v × t = 1500 × 0.40 = 600 m",
              "Depth = 600 / 2 = 300 m",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q3-10",
        question:
          "(a) State Ohm's law. [1]\n(b) A resistor carries a current of 0.25 A when a potential difference of 6.0 V is applied across it. Calculate its resistance. [2]\n(c) Calculate the current when the p.d. is increased to 9.0 V, assuming the resistance is unchanged. [2]",
        marks: 5,
        modelAnswer:
          "(a) The current through a metallic conductor is directly proportional to the potential difference across it, provided the temperature is constant.\n(b) R = V / I = 6.0 / 0.25 = 24 ohms.\n(c) I = V / R = 9.0 / 24 = 0.375 A (about 0.38 A).",
        markScheme: [
          "(a) current proportional to p.d. (constant temperature) [1]",
          "(b) R = V/I [1]",
          "(b) 24 ohms [1]",
          "(c) I = V/R = 9.0/24 [1]",
          "(c) 0.375 A / 0.38 A [1]",
        ],
        commonError: "Mixing up the rearrangement of V = IR, e.g. multiplying V by I instead of dividing.",
        difficulty: "core",
        guideRef: "Electricity and Circuits",
        hints: [
          "V = IR.",
          "Rearrange to R = V/I for part (b).",
          "Rearrange to I = V/R for part (c).",
        ],
        strategy: "V = IR, rearrange as needed",
        solutions: [
          {
            label: "Ohm's law calculations",
            steps: [
              "R = V/I = 6.0 / 0.25 = 24 ohms",
              "I = V/R = 9.0 / 24 = 0.375 A",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q3-11",
        question:
          "Two resistors of 6.0 ohms and 3.0 ohms are connected in (a) series and (b) parallel.\n(a) Calculate the total resistance in series. [1]\n(b) Calculate the total resistance in parallel. [3]",
        marks: 4,
        modelAnswer:
          "(a) Series: R = 6.0 + 3.0 = 9.0 ohms.\n(b) Parallel: 1/R = 1/6.0 + 1/3.0 = 1/6 + 2/6 = 3/6 = 1/2, so R = 2.0 ohms.",
        markScheme: [
          "(a) 9.0 ohms [1]",
          "(b) 1/R = 1/6 + 1/3 used [1]",
          "(b) 1/R = 1/2 [1]",
          "(b) R = 2.0 ohms [1]",
        ],
        commonError: "Adding resistances directly in parallel, or forgetting to take the reciprocal at the end.",
        difficulty: "core",
        guideRef: "Electricity and Circuits",
        hints: [
          "In series, resistances simply add.",
          "In parallel, add the reciprocals then invert.",
          "The parallel total is always less than the smallest resistor.",
        ],
        strategy: "series adds; parallel uses reciprocals",
        solutions: [
          {
            label: "Series and parallel",
            steps: [
              "Series: R = 6.0 + 3.0 = 9.0 ohms",
              "Parallel: 1/R = 1/6 + 1/3 = 1/6 + 2/6 = 3/6",
              "1/R = 1/2 → R = 2.0 ohms",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q3-12",
        question:
          "An electric heater is rated at 230 V, 2300 W.\n(a) Calculate the current it draws. [2]\n(b) Calculate its resistance. [2]\n(c) Calculate the energy it transfers in 5.0 minutes. [2]",
        marks: 6,
        modelAnswer:
          "(a) P = VI → I = P / V = 2300 / 230 = 10 A.\n(b) R = V / I = 230 / 10 = 23 ohms.\n(c) E = Pt = 2300 × (5.0 × 60) = 2300 × 300 = 690 000 J (690 kJ).",
        markScheme: [
          "(a) I = P/V = 10 A [2]",
          "(b) R = V/I = 23 ohms [2]",
          "(c) E = Pt with t = 300 s [1]",
          "(c) 690 000 J / 690 kJ [1]",
        ],
        commonError: "Leaving time in minutes for the energy calculation instead of converting to seconds.",
        difficulty: "core",
        guideRef: "Electricity and Circuits",
        hints: [
          "Power P = VI.",
          "Resistance R = V/I (or use P = V squared / R).",
          "Energy E = Pt; convert minutes to seconds.",
        ],
        strategy: "P = VI; E = Pt",
        solutions: [
          {
            label: "Electrical power and energy",
            steps: [
              "I = P/V = 2300 / 230 = 10 A",
              "R = V/I = 230 / 10 = 23 ohms",
              "t = 5.0 min = 300 s",
              "E = Pt = 2300 × 300 = 690 000 J",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q3-13",
        question:
          "(a) Explain the difference between an analogue and a digital signal. [2]\n(b) State two advantages of sending information as digital signals. [2]",
        marks: 4,
        modelAnswer:
          "(a) An analogue signal varies continuously and can take any value; a digital signal has only two discrete values (on/off, 1 and 0).\n(b) Digital signals can be regenerated cleanly so noise does not build up, giving higher quality; they can be processed/stored by computers; more information can be sent (compressed) along the same channel. (Any two.)",
        markScheme: [
          "(a) analogue varies continuously [1]",
          "(a) digital has discrete values (0 and 1) [1]",
          "(b) two valid advantages [2]",
        ],
        commonError: "Saying digital signals never have noise — they do pick up noise, but it can be removed when the signal is regenerated.",
        difficulty: "warmup",
        guideRef: "Electromagnetic Spectrum",
      },
      {
        id: "exam-physics-q3-14",
        question:
          "A 12 V battery is connected to two resistors, 4.0 ohms and 8.0 ohms, in series.\n(a) Calculate the current in the circuit. [3]\n(b) Calculate the potential difference across the 8.0 ohm resistor. [2]",
        marks: 5,
        modelAnswer:
          "(a) Total resistance = 4.0 + 8.0 = 12 ohms. I = V / R = 12 / 12 = 1.0 A.\n(b) V = IR = 1.0 × 8.0 = 8.0 V.",
        markScheme: [
          "(a) total resistance = 12 ohms [1]",
          "(a) I = V/R [1]",
          "(a) I = 1.0 A [1]",
          "(b) V = IR = 1.0 × 8.0 [1]",
          "(b) 8.0 V [1]",
        ],
        commonError: "Using the supply voltage across just one resistor; in series the voltages share according to resistance.",
        difficulty: "core",
        guideRef: "Electricity and Circuits",
        hints: [
          "In series the current is the same everywhere.",
          "Find total resistance first, then I = V/R.",
          "Voltage across one resistor = I × that resistance.",
        ],
        strategy: "series: same current; V splits by resistance",
        solutions: [
          {
            label: "Series circuit",
            steps: [
              "Total R = 4.0 + 8.0 = 12 ohms",
              "I = V/R = 12 / 12 = 1.0 A",
              "V across 8.0 ohm = IR = 1.0 × 8.0 = 8.0 V",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q3-15",
        question:
          "Describe how the loudness and pitch of a sound are related to the amplitude and frequency of the sound wave. [3]",
        marks: 3,
        modelAnswer:
          "A larger amplitude gives a louder sound; a smaller amplitude gives a quieter sound. A higher frequency gives a higher-pitched sound; a lower frequency gives a lower-pitched sound. Loudness depends on amplitude and pitch depends on frequency.",
        markScheme: [
          "larger amplitude = louder sound [1]",
          "higher frequency = higher pitch [1]",
          "links loudness to amplitude and pitch to frequency [1]",
        ],
        commonError: "Swapping the two relationships (pitch with amplitude, loudness with frequency).",
        difficulty: "warmup",
        guideRef: "Sound",
      },
      {
        id: "exam-physics-q3-16",
        question:
          "A charge of 30 C passes a point in a circuit in 2.0 minutes.\n(a) Calculate the current. [3]\n(b) Define the coulomb in terms of current and time. [1]",
        marks: 4,
        modelAnswer:
          "(a) t = 2.0 × 60 = 120 s. I = Q / t = 30 / 120 = 0.25 A.\n(b) One coulomb is the charge that passes a point when a current of one ampere flows for one second (1 C = 1 A s).",
        markScheme: [
          "(a) time converted to 120 s [1]",
          "(a) I = Q/t [1]",
          "(a) 0.25 A [1]",
          "(b) 1 C = 1 A × 1 s / charge for 1 A in 1 s [1]",
        ],
        commonError: "Not converting minutes to seconds before using I = Q/t.",
        difficulty: "core",
        guideRef: "Electricity and Circuits",
        hints: [
          "Convert the time to seconds.",
          "Current = charge / time.",
        ],
        strategy: "I = Q/t",
        solutions: [
          {
            label: "Current from charge",
            steps: [
              "t = 2.0 min = 120 s",
              "I = Q/t = 30 / 120 = 0.25 A",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q3-17",
        question:
          "Explain why the resistance of a filament lamp increases as the current through it increases. [3]",
        marks: 3,
        modelAnswer:
          "As the current increases, the filament heats up. The higher temperature makes the metal ions/atoms vibrate more, so the electrons collide with them more often as they drift through. This increases the opposition to the flow of charge, so the resistance increases. This is why a filament lamp is a non-ohmic component (its I-V graph is a curve).",
        markScheme: [
          "larger current heats the filament [1]",
          "ions/atoms vibrate more at higher temperature [1]",
          "more collisions oppose electron flow, so resistance increases [1]",
        ],
        commonError: "Stating resistance is constant — a filament lamp is non-ohmic, so resistance rises with temperature.",
        difficulty: "challenge",
        guideRef: "Electricity and Circuits",
        hints: [
          "Current causes heating.",
          "Think about what hotter atoms do to passing electrons.",
        ],
      },
      {
        id: "exam-physics-q3-18",
        question:
          "Water waves travel from deep water into shallow water, where they slow down. The frequency stays the same.\n(a) State what happens to the wavelength. [1]\n(b) Explain your answer using the wave equation. [2]",
        marks: 3,
        modelAnswer:
          "(a) The wavelength decreases.\n(b) From v = f(lambda), the wavelength = v / f. The frequency f is unchanged but the speed v decreases, so the wavelength must decrease in proportion to the speed.",
        markScheme: [
          "(a) wavelength decreases [1]",
          "(b) v = f × wavelength quoted/rearranged [1]",
          "(b) f constant, v smaller, so wavelength smaller [1]",
        ],
        commonError: "Saying the frequency changes — frequency is set by the source and stays constant.",
        difficulty: "core",
        guideRef: "Waves",
        hints: [
          "Frequency is fixed by the source.",
          "Use v = f × wavelength and see what must change.",
        ],
      },
      {
        id: "exam-physics-q3-19",
        question:
          "An object is placed 10 cm from a converging lens of focal length 15 cm.\n(a) State the nature of the image (real/virtual, upright/inverted, magnified/diminished). [3]\n(b) State one device that uses a lens in this way. [1]",
        marks: 4,
        modelAnswer:
          "(a) The object is inside the focal length (10 cm < 15 cm), so the image is virtual, upright and magnified, formed on the same side as the object.\n(b) A magnifying glass.",
        markScheme: [
          "(a) virtual [1]",
          "(a) upright [1]",
          "(a) magnified [1]",
          "(b) magnifying glass [1]",
        ],
        commonError: "Treating it as a real image; when the object is inside f, the image is virtual and magnified.",
        difficulty: "core",
        guideRef: "Lenses",
        hints: [
          "Compare the object distance with the focal length.",
          "Object inside f gives a magnifying-glass image.",
        ],
      },
      {
        id: "exam-physics-q3-20",
        question:
          "A mains circuit includes a fuse, an earth wire and a switch.\n(a) Explain the purpose of the fuse. [2]\n(b) Explain how the earth wire protects the user of an appliance with a metal case. [2]",
        marks: 4,
        modelAnswer:
          "(a) The fuse contains a thin wire that melts and breaks the circuit if the current exceeds its rating, preventing overheating, fire and damage to the appliance.\n(b) The earth wire connects the metal case to earth. If a live wire touches the case, a large current flows to earth through the low-resistance earth wire; this large current blows the fuse, disconnecting the supply so the case cannot give the user an electric shock.",
        markScheme: [
          "(a) fuse melts/breaks if current too large [1]",
          "(a) prevents overheating/fire [1]",
          "(b) earth provides a low-resistance path / large current to earth [1]",
          "(b) blows the fuse / case stays safe, no shock [1]",
        ],
        commonError: "Saying the earth wire carries current in normal operation — it only does so in a fault.",
        difficulty: "core",
        guideRef: "Electricity and Circuits",
        hints: [
          "A fuse responds to too much current.",
          "The earth wire only acts when there is a fault.",
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PAPER 4 — Structured
  // Focus: magnetism, electromagnetism, transformers, nuclear physics,
  // half-life, space and astrophysics.
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: "exam-physics-qa-4",
    title: "Paper 4 — Structured",
    description:
      "Structured questions on magnetism, electromagnetism, the motor effect, transformers, atomic and nuclear physics, radioactivity, half-life and astrophysics. Show all working and include units. Suggested time: 75 minutes.",
    questions: [
      {
        id: "exam-physics-q4-01",
        question:
          "(a) State two properties of magnetic field lines. [2]\n(b) Describe how you could plot the magnetic field pattern around a bar magnet using a small compass. [2]",
        marks: 4,
        modelAnswer:
          "(a) Field lines point from north to south (outside the magnet); they never cross; the closer together they are, the stronger the field.\n(b) Place the magnet on paper. Put a small plotting compass near one pole and mark dots at the ends of the needle. Move the compass so its tail sits on the previous dot and mark again, building a chain of dots. Join the dots with a smooth line and add an arrow from N to S. Repeat from different starting points to map the whole field.",
        markScheme: [
          "(a) two valid properties (N to S, never cross, closer = stronger) [2]",
          "(b) use a plotting compass and mark the needle positions [1]",
          "(b) join the dots to form field lines with direction [1]",
        ],
        commonError: "Drawing field lines that cross or showing them going from S to N outside the magnet.",
        difficulty: "warmup",
        guideRef: "Magnetism",
      },
      {
        id: "exam-physics-q4-02",
        question:
          "Explain the difference between a permanent magnet and an electromagnet, and state one advantage of an electromagnet. [3]",
        marks: 3,
        modelAnswer:
          "A permanent magnet keeps its magnetism all the time and cannot be switched off; an electromagnet is magnetic only while a current flows through its coil. An advantage of an electromagnet is that it can be switched on and off (or its strength can be varied by changing the current, or its poles reversed by reversing the current).",
        markScheme: [
          "permanent magnet is always magnetic [1]",
          "electromagnet is magnetic only when current flows [1]",
          "advantage: can be switched on/off / strength varied / poles reversed [1]",
        ],
        commonError: "Saying an electromagnet is always stronger — it depends on the current and number of turns.",
        difficulty: "warmup",
        guideRef: "Electromagnetism",
      },
      {
        id: "exam-physics-q4-03",
        question:
          "A current-carrying wire is placed at right angles to a magnetic field.\n(a) State the name of the effect that causes the wire to experience a force. [1]\n(b) State two ways the size of the force could be increased. [2]\n(c) State how the direction of the force could be reversed. [1]",
        marks: 4,
        modelAnswer:
          "(a) The motor effect.\n(b) Increase the current; increase the strength of the magnetic field (or use more wires/turns). (Any two.)\n(c) Reverse the direction of the current, or reverse the direction of the magnetic field (reversing either one).",
        markScheme: [
          "(a) the motor effect [1]",
          "(b) two of: increase current / increase field strength / more turns [2]",
          "(c) reverse current or reverse field [1]",
        ],
        commonError: "Saying reverse both current and field — that leaves the force in the same direction.",
        difficulty: "core",
        guideRef: "Electromagnetism",
        hints: [
          "The motor effect acts on a current in a field.",
          "Force depends on current and field strength.",
          "Reversing either the current or the field flips the force.",
        ],
      },
      {
        id: "exam-physics-q4-04",
        question:
          "Describe how a simple d.c. electric motor works, explaining the purpose of the split-ring commutator. [5]",
        marks: 5,
        modelAnswer:
          "A coil carrying a current sits in a magnetic field. By the motor effect, the two sides of the coil experience forces in opposite directions (one up, one down), producing a turning effect (a couple) that rotates the coil. The split-ring commutator reverses the direction of the current in the coil every half turn. This keeps the force on each side acting in the right direction so the coil continues to rotate the same way, instead of stopping or reversing when it passes the vertical.",
        markScheme: [
          "current in coil in a magnetic field [1]",
          "forces on the two sides act in opposite directions (motor effect) [1]",
          "this produces a turning effect that rotates the coil [1]",
          "split-ring commutator reverses the current every half turn [1]",
          "so the coil keeps turning in the same direction [1]",
        ],
        commonError: "Confusing the split-ring commutator (d.c. motor) with the slip rings of an a.c. generator.",
        difficulty: "challenge",
        guideRef: "Electromagnetism",
        hints: [
          "Each side of the coil feels a force from the motor effect.",
          "Opposite forces on opposite sides give a turning effect.",
          "Think about what would happen without the commutator after half a turn.",
        ],
      },
      {
        id: "exam-physics-q4-05",
        question:
          "(a) State what is meant by electromagnetic induction. [2]\n(b) State three ways to increase the size of the induced e.m.f. when a magnet is moved into a coil. [3]",
        marks: 5,
        modelAnswer:
          "(a) Electromagnetic induction is the production of an e.m.f. (voltage) across a conductor when there is a change in the magnetic field linking it (for example when a magnet moves relative to a coil and field lines are cut).\n(b) Move the magnet faster; use a stronger magnet; use more turns on the coil. (Also acceptable: use a coil of larger area, or add a soft-iron core.)",
        markScheme: [
          "(a) e.m.f. induced when magnetic field changes / field lines cut [1]",
          "(a) requires relative movement / changing field [1]",
          "(b) three valid factors (faster, stronger magnet, more turns, larger area, iron core) [3]",
        ],
        commonError: "Saying a stationary magnet inside a coil induces an e.m.f. — there must be a change in the field.",
        difficulty: "core",
        guideRef: "Electromagnetism",
        hints: [
          "Induction needs a changing magnetic field.",
          "Faster change gives a bigger e.m.f.",
          "More turns and a stronger magnet both help.",
        ],
      },
      {
        id: "exam-physics-q4-06",
        question:
          "A transformer has 200 turns on its primary coil and 50 turns on its secondary coil. The primary is connected to a 230 V a.c. supply.\n(a) State whether this is a step-up or step-down transformer. [1]\n(b) Calculate the secondary voltage. [3]",
        marks: 4,
        modelAnswer:
          "(a) Step-down (fewer turns on the secondary, so the voltage is reduced).\n(b) Vs / Vp = Ns / Np → Vs = Vp × (Ns / Np) = 230 × (50 / 200) = 230 × 0.25 = 57.5 V.",
        markScheme: [
          "(a) step-down [1]",
          "(b) Vs/Vp = Ns/Np used [1]",
          "(b) substitution 230 × 50/200 [1]",
          "(b) Vs = 57.5 V [1]",
        ],
        commonError: "Inverting the turns ratio, giving 920 V (a step-up result) instead of 57.5 V.",
        difficulty: "core",
        guideRef: "Transformers",
        hints: [
          "Fewer secondary turns means a lower voltage.",
          "Vs/Vp = Ns/Np.",
          "Rearrange for Vs and substitute.",
        ],
        strategy: "transformer ratio Vs/Vp = Ns/Np",
        solutions: [
          {
            label: "Transformer equation",
            steps: [
              "Vs/Vp = Ns/Np",
              "Vs = Vp × Ns/Np = 230 × 50/200",
              "Vs = 230 × 0.25 = 57.5 V",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q4-07",
        question:
          "A 100% efficient transformer has an output of 12 V and supplies a current of 5.0 A to a device.\n(a) Calculate the output power. [2]\n(b) The input voltage is 240 V. Calculate the input current. [3]",
        marks: 5,
        modelAnswer:
          "(a) Output power = Vs × Is = 12 × 5.0 = 60 W.\n(b) For a 100% efficient transformer, input power = output power = 60 W. Ip = P / Vp = 60 / 240 = 0.25 A. (Equivalently, Vp Ip = Vs Is.)",
        markScheme: [
          "(a) P = VI = 60 W [2]",
          "(b) input power = output power (100% efficient) [1]",
          "(b) Ip = P/Vp = 60/240 [1]",
          "(b) Ip = 0.25 A [1]",
        ],
        commonError: "Assuming the current is the same on both sides; for a transformer the power is conserved, not the current.",
        difficulty: "challenge",
        guideRef: "Transformers",
        hints: [
          "Power = voltage × current on the output side.",
          "For an ideal transformer, input power = output power.",
          "Use input power and input voltage to find input current.",
        ],
        strategy: "ideal transformer: Vp Ip = Vs Is",
        solutions: [
          {
            label: "Power conservation",
            steps: [
              "Output power = Vs Is = 12 × 5.0 = 60 W",
              "Ideal transformer: input power = 60 W",
              "Ip = P/Vp = 60 / 240 = 0.25 A",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q4-08",
        question:
          "Explain why electrical energy is transmitted across the country at very high voltage. [3]",
        marks: 3,
        modelAnswer:
          "Transmitting at high voltage means the current in the cables is small (since power = voltage × current, a high voltage allows the same power to be delivered with a low current). The power wasted as heat in the cables is given by I squared × R, so a smaller current greatly reduces the energy lost. This makes transmission more efficient (and allows thinner, cheaper cables).",
        markScheme: [
          "high voltage means low current (for the same power) [1]",
          "power loss in cables = I squared × R [1]",
          "smaller current greatly reduces heat losses / more efficient [1]",
        ],
        commonError: "Saying high voltage directly reduces resistance — it reduces the current, which reduces I squared R losses.",
        difficulty: "core",
        guideRef: "Transformers",
        hints: [
          "Power = voltage × current.",
          "Heat loss in cables depends on current squared.",
        ],
      },
      {
        id: "exam-physics-q4-09",
        question:
          "(a) Describe the nuclear model of the atom, naming the particles and where they are found. [3]\n(b) For an atom of carbon written as carbon-14 with proton number 6, state the number of protons, neutrons and electrons. [3]",
        marks: 6,
        modelAnswer:
          "(a) An atom has a tiny, dense, positively charged nucleus at its centre containing protons (positive) and neutrons (neutral). Negatively charged electrons orbit the nucleus in the surrounding space. Most of the atom is empty space.\n(b) Protons = 6 (the proton number). Neutrons = mass number - proton number = 14 - 6 = 8. Electrons = 6 (equal to protons in a neutral atom).",
        markScheme: [
          "(a) central nucleus, positive, contains protons and neutrons [1]",
          "(a) electrons orbit the nucleus [1]",
          "(a) nucleus tiny/dense, most of atom empty space [1]",
          "(b) protons = 6 [1]",
          "(b) neutrons = 8 [1]",
          "(b) electrons = 6 [1]",
        ],
        commonError: "Treating the mass number (14) as the number of neutrons rather than protons + neutrons.",
        difficulty: "core",
        guideRef: "Atomic and Nuclear Physics",
        hints: [
          "The nucleus holds protons and neutrons.",
          "Neutrons = mass number - proton number.",
          "A neutral atom has equal protons and electrons.",
        ],
        solutions: [
          {
            label: "Counting nucleons",
            steps: [
              "Protons = proton number = 6",
              "Neutrons = mass number - proton number = 14 - 6 = 8",
              "Electrons = protons = 6 (neutral atom)",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q4-10",
        question:
          "Compare alpha, beta and gamma radiation in terms of their nature, charge and penetrating power. [6]",
        marks: 6,
        modelAnswer:
          "Alpha: a helium nucleus (2 protons + 2 neutrons), charge +2; strongly ionising but least penetrating, stopped by a sheet of paper or a few cm of air.\nBeta: a fast-moving electron from the nucleus, charge -1; moderately ionising and moderately penetrating, stopped by a few mm of aluminium.\nGamma: a high-frequency electromagnetic wave, no charge; weakly ionising but most penetrating, reduced by thick lead or concrete (never fully stopped).",
        markScheme: [
          "alpha: helium nucleus, charge +2 [1]",
          "alpha: stopped by paper / least penetrating [1]",
          "beta: electron, charge -1 [1]",
          "beta: stopped by a few mm of aluminium [1]",
          "gamma: electromagnetic wave, no charge [1]",
          "gamma: most penetrating, needs lead/concrete [1]",
        ],
        commonError: "Saying gamma is the most ionising — it is the least ionising but the most penetrating.",
        difficulty: "core",
        guideRef: "Radioactivity",
      },
      {
        id: "exam-physics-q4-11",
        question:
          "A radioactive source has a half-life of 6.0 hours. A sample initially has an activity of 800 counts per second (above background).\n(a) Define half-life. [1]\n(b) Calculate the activity after 18 hours. [3]",
        marks: 4,
        modelAnswer:
          "(a) Half-life is the time taken for half the radioactive nuclei in a sample to decay (or for the activity to fall to half its value).\n(b) 18 hours = 3 half-lives. Activity halves each half-life: 800 → 400 (6 h) → 200 (12 h) → 100 (18 h). Activity = 100 counts per second.",
        markScheme: [
          "(a) time for half the nuclei to decay / activity to halve [1]",
          "(b) 18 h = 3 half-lives [1]",
          "(b) halving three times [1]",
          "(b) 100 counts per second [1]",
        ],
        commonError: "Dividing the activity by 3 (the number of half-lives) instead of halving it 3 times.",
        difficulty: "core",
        guideRef: "Radioactivity",
        hints: [
          "Work out how many half-lives fit into the total time.",
          "The activity halves once per half-life.",
          "Halve 800 three times.",
        ],
        strategy: "count the half-lives, then halve repeatedly",
        solutions: [
          {
            label: "Half-life decay",
            steps: [
              "Number of half-lives = 18 / 6.0 = 3",
              "After 1: 800/2 = 400 cps",
              "After 2: 400/2 = 200 cps",
              "After 3: 200/2 = 100 cps",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q4-12",
        question:
          "A sample of a radioactive isotope decays from 6400 atoms to 400 atoms in 24 days.\n(a) Calculate the number of half-lives that have passed. [3]\n(b) Calculate the half-life of the isotope. [2]",
        marks: 5,
        modelAnswer:
          "(a) Halving: 6400 → 3200 → 1600 → 800 → 400. That is 4 halvings, so 4 half-lives. (Check: 6400 / 2^4 = 6400 / 16 = 400.)\n(b) Half-life = total time / number of half-lives = 24 / 4 = 6.0 days.",
        markScheme: [
          "(a) repeated halving from 6400 to 400 [1]",
          "(a) recognises factor of 16 = 2^4 [1]",
          "(a) 4 half-lives [1]",
          "(b) half-life = 24/4 [1]",
          "(b) 6.0 days [1]",
        ],
        commonError: "Dividing 24 by the ratio 16 instead of by the number of half-lives (4).",
        difficulty: "challenge",
        guideRef: "Radioactivity",
        hints: [
          "Find how many times you must halve 6400 to reach 400.",
          "6400 / 400 = 16, and 16 = 2 to the power 4.",
          "Half-life = total time / number of half-lives.",
        ],
        strategy: "find the factor, express as a power of 2, then divide the time",
        solutions: [
          {
            label: "Half-life from a ratio",
            steps: [
              "6400 / 400 = 16 = 2^4, so 4 half-lives",
              "Half-life = total time / number of half-lives",
              "Half-life = 24 / 4 = 6.0 days",
            ],
          },
        ],
      },
      {
        id: "exam-physics-q4-13",
        question:
          "When a nucleus emits an alpha particle, state how its proton number and mass (nucleon) number change. Give the changes for beta-minus emission as well. [4]",
        marks: 4,
        modelAnswer:
          "Alpha emission: the nucleus loses 2 protons and 2 neutrons, so the proton number decreases by 2 and the mass (nucleon) number decreases by 4.\nBeta-minus emission: a neutron changes into a proton (and an electron is emitted), so the proton number increases by 1 and the mass (nucleon) number stays the same.",
        markScheme: [
          "alpha: proton number decreases by 2 [1]",
          "alpha: nucleon number decreases by 4 [1]",
          "beta: proton number increases by 1 [1]",
          "beta: nucleon number unchanged [1]",
        ],
        commonError: "Saying the nucleon number changes in beta decay — it stays the same because a neutron becomes a proton.",
        difficulty: "core",
        guideRef: "Radioactivity",
      },
      {
        id: "exam-physics-q4-14",
        question:
          "Background radiation is always present.\n(a) State two natural sources of background radiation. [2]\n(b) Explain why background radiation must be measured and subtracted when investigating a radioactive source. [2]",
        marks: 4,
        modelAnswer:
          "(a) Two natural sources: radon gas from rocks/soil; cosmic rays from space; rocks and building materials; food and drink. (Any two.)\n(b) The detector counts background radiation as well as radiation from the source. To find the true count rate due to the source alone, the background count rate must be measured separately and subtracted from the readings; otherwise the activity of the source is overestimated.",
        markScheme: [
          "(a) two valid natural sources [2]",
          "(b) detector also records background [1]",
          "(b) subtract background to get the count due to the source [1]",
        ],
        commonError: "Listing only man-made sources (e.g. nuclear power) when natural sources are asked for.",
        difficulty: "warmup",
        guideRef: "Radioactivity",
      },
      {
        id: "exam-physics-q4-15",
        question:
          "(a) State the order of the planets outward from the Sun. [2]\n(b) Explain why a planet further from the Sun takes longer to complete one orbit. [2]",
        marks: 4,
        modelAnswer:
          "(a) Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.\n(b) A planet further from the Sun has a much longer orbital path to travel and also moves more slowly (the Sun's gravitational pull is weaker at greater distance, giving a smaller orbital speed), so it takes much longer to complete one orbit.",
        markScheme: [
          "(a) correct order Mercury to Neptune [2]",
          "(b) larger orbit / longer path to travel [1]",
          "(b) weaker gravity so slower orbital speed [1]",
        ],
        commonError: "Including Pluto as a planet, or reversing the order.",
        difficulty: "warmup",
        guideRef: "Space Physics",
      },
      {
        id: "exam-physics-q4-16",
        question:
          "Describe the life cycle of a star about the same mass as our Sun, from nebula to its final stage. [5]",
        marks: 5,
        modelAnswer:
          "A star forms from a cloud of gas and dust (a nebula) that is pulled together by gravity, becoming a protostar. When it is hot and dense enough, nuclear fusion of hydrogen into helium begins and it becomes a stable main-sequence star (like the Sun), where the inward pull of gravity is balanced by the outward pressure from fusion. When the hydrogen runs low, it expands and cools to become a red giant. It then sheds its outer layers as a planetary nebula, leaving a hot dense core called a white dwarf, which gradually cools.",
        markScheme: [
          "forms from a nebula / cloud of gas and dust pulled by gravity [1]",
          "becomes a protostar then a main-sequence star (fusion of hydrogen) [1]",
          "gravity balanced by radiation/fusion pressure (stable) [1]",
          "expands to a red giant when hydrogen runs out [1]",
          "becomes a white dwarf (after shedding a planetary nebula) [1]",
        ],
        commonError: "Giving the supernova/neutron star/black hole route, which is for stars much more massive than the Sun.",
        difficulty: "core",
        guideRef: "Space Physics",
        hints: [
          "Stars begin in a nebula.",
          "A Sun-like star is stable on the main sequence while fusing hydrogen.",
          "Think about what happens when the hydrogen fuel runs out.",
        ],
      },
      {
        id: "exam-physics-q4-17",
        question:
          "A relay uses a small current to switch on a larger circuit.\n(a) Explain how an electromagnet allows a relay to do this. [3]\n(b) State one situation where a relay is useful. [1]",
        marks: 4,
        modelAnswer:
          "(a) A small current flows through the relay's coil, turning it into an electromagnet. The electromagnet attracts a soft-iron armature, which pivots and closes (or opens) a separate set of contacts in the second circuit, switching the larger current on. When the small current stops, the electromagnet loses its magnetism and the contacts spring back.\n(b) Useful for switching a high-power circuit (such as a car starter motor) safely with a small, low-power switch; or to allow a low-voltage control circuit to operate a dangerous mains circuit.",
        markScheme: [
          "small current makes the coil an electromagnet [1]",
          "electromagnet attracts an iron armature [1]",
          "armature closes the contacts of the second (larger) circuit [1]",
          "valid use (e.g. car starter motor / mains switching) [1]",
        ],
        commonError: "Describing the two circuits as electrically joined; the point of a relay is that they are separate.",
        difficulty: "challenge",
        guideRef: "Electromagnetism",
        hints: [
          "A small current makes the coil magnetic.",
          "The magnet moves an iron piece to close another switch.",
        ],
      },
      {
        id: "exam-physics-q4-18",
        question:
          "Nuclear fission is used in power stations.\n(a) Describe what happens during nuclear fission. [3]\n(b) Explain what is meant by a chain reaction. [2]",
        marks: 5,
        modelAnswer:
          "(a) A slow-moving neutron is absorbed by a large unstable nucleus (such as uranium-235), making it even more unstable. The nucleus splits into two smaller daughter nuclei, releasing a large amount of energy and two or three more neutrons.\n(b) The neutrons released by one fission can be absorbed by other uranium nuclei, causing them to undergo fission and release more neutrons. This self-sustaining sequence of fissions is a chain reaction, which is controlled in a reactor (e.g. using control rods).",
        markScheme: [
          "(a) neutron absorbed by a large/unstable nucleus [1]",
          "(a) nucleus splits into smaller nuclei [1]",
          "(a) energy and 2-3 neutrons released [1]",
          "(b) released neutrons cause further fissions [1]",
          "(b) self-sustaining sequence (controlled in a reactor) [1]",
        ],
        commonError: "Confusing fission (splitting heavy nuclei) with fusion (joining light nuclei).",
        difficulty: "core",
        guideRef: "Atomic and Nuclear Physics",
        hints: [
          "Fission starts when a neutron is absorbed.",
          "The nucleus splits and releases more neutrons.",
          "Those neutrons can trigger further fissions.",
        ],
      },
      {
        id: "exam-physics-q4-19",
        question:
          "The Sun produces its energy by nuclear fusion.\n(a) Describe what happens during nuclear fusion in the Sun. [2]\n(b) Explain why extremely high temperatures and pressures are needed for fusion to occur. [2]",
        marks: 4,
        modelAnswer:
          "(a) Hydrogen nuclei join together (fuse) to form helium nuclei, releasing a very large amount of energy.\n(b) Nuclei are positively charged and repel each other strongly (electrostatic repulsion). Very high temperatures give the nuclei enough kinetic energy, and very high pressures bring them close enough together, to overcome this repulsion so they can fuse.",
        markScheme: [
          "(a) hydrogen nuclei fuse to form helium [1]",
          "(a) releasing energy [1]",
          "(b) nuclei are positive and repel each other [1]",
          "(b) high temperature/pressure overcomes the repulsion (enough energy/closeness) [1]",
        ],
        commonError: "Describing fusion as splitting nuclei — that is fission. Fusion joins light nuclei.",
        difficulty: "core",
        guideRef: "Space Physics",
        hints: [
          "Fusion joins light nuclei into heavier ones.",
          "Positive nuclei repel, so they need a lot of energy to get close.",
        ],
      },
      {
        id: "exam-physics-q4-20",
        question:
          "Carbon-14 dating is used to find the age of ancient wood. Carbon-14 has a half-life of about 5700 years. A sample of old wood contains one quarter of the carbon-14 found in living wood.\n(a) Calculate the approximate age of the wood. [3]\n(b) State one assumption made in carbon-14 dating. [1]",
        marks: 4,
        modelAnswer:
          "(a) One quarter means the activity has halved twice (1 → 1/2 → 1/4), so 2 half-lives have passed. Age = 2 × 5700 = 11 400 years.\n(b) Assumption: the proportion of carbon-14 in the atmosphere (and so in living things) has stayed constant over time. (Also acceptable: the sample has not been contaminated / no carbon-14 has been added or removed except by decay.)",
        markScheme: [
          "(a) one quarter = 2 half-lives [1]",
          "(a) age = 2 × 5700 [1]",
          "(a) 11 400 years [1]",
          "(b) valid assumption (constant atmospheric C-14 / no contamination) [1]",
        ],
        commonError: "Treating one quarter as a single half-life (which would give 5700 years) instead of two.",
        difficulty: "challenge",
        guideRef: "Radioactivity",
        hints: [
          "How many times must you halve to reach a quarter?",
          "One quarter = (1/2) × (1/2), so two half-lives.",
          "Age = number of half-lives × half-life.",
        ],
        strategy: "convert the fraction remaining into a number of half-lives",
        solutions: [
          {
            label: "Carbon dating",
            steps: [
              "Fraction remaining = 1/4 = (1/2)^2, so 2 half-lives",
              "Age = number of half-lives × half-life",
              "Age = 2 × 5700 = 11 400 years",
            ],
          },
        ],
      },
    ],
  },
];
