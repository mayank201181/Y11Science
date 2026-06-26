import type { Paper, MCQ } from "../types";

export const physicsExamMcqPapers: Paper<MCQ>[] = [
  {
    id: "exam-physics-mcq-1",
    title: "Paper 1 — Multiple Choice",
    description:
      "25 multiple-choice questions on motion, forces, momentum, pressure and energy from the Cambridge IGCSE 0625 Extended syllabus. Allow 45 minutes.",
    questions: [
      {
        id: "exam-physics-m1-01",
        question:
          "A runner completes 400 m around a circular track and finishes exactly where she started. What are her total distance and her displacement?",
        options: [
          "Distance 400 m, displacement 400 m",
          "Distance 400 m, displacement 0 m",
          "Distance 0 m, displacement 400 m",
          "Distance 0 m, displacement 0 m",
        ],
        answerIndex: 1,
        explanation:
          "Distance is the total path length (400 m). Displacement is the straight-line vector from start to finish; she ends where she began, so displacement is 0 m.",
        difficulty: "warmup",
        strategy: "distinguish scalar distance from vector displacement",
      },
      {
        id: "exam-physics-m1-02",
        question:
          "A car accelerates uniformly from 5.0 m/s to 25 m/s in 4.0 s. What is its acceleration?",
        options: ["5.0 m/s²", "7.5 m/s²", "20 m/s²", "0.20 m/s²"],
        answerIndex: 0,
        explanation:
          "a = (v − u)/t = (25 − 5.0)/4.0 = 20/4.0 = 5.0 m/s². Option C forgets to subtract the initial velocity; option D inverts the fraction.",
        difficulty: "warmup",
        strategy: "use the definition of acceleration",
      },
      {
        id: "exam-physics-m1-03",
        question:
          "An object falls freely from rest near the Earth's surface. Ignoring air resistance, how far does it fall in the first 3.0 s? (g = 10 m/s²)",
        options: ["15 m", "30 m", "45 m", "90 m"],
        answerIndex: 2,
        explanation:
          "s = ut + ½at² = 0 + ½(10)(3.0)² = ½(10)(9.0) = 45 m. Option D forgets the factor of ½; option B uses t instead of t².",
        difficulty: "core",
        hints: [
          "The object starts from rest, so u = 0.",
          "Use s = ut + ½at² with a = g.",
          "Square the time before multiplying.",
        ],
        strategy: "select the right kinematic equation",
      },
      {
        id: "exam-physics-m1-04",
        question:
          "On a distance–time graph, what does a horizontal (flat) line represent?",
        options: [
          "The object moving at constant speed",
          "The object accelerating",
          "The object stationary",
          "The object moving backwards",
        ],
        answerIndex: 2,
        explanation:
          "Gradient of a distance–time graph is speed. A flat line has zero gradient, so the speed is zero — the object is at rest.",
        difficulty: "warmup",
        strategy: "read the gradient of a distance–time graph",
      },
      {
        id: "exam-physics-m1-05",
        question:
          "The area under a velocity–time graph represents which quantity?",
        options: ["Acceleration", "Distance travelled", "Average speed", "Force"],
        answerIndex: 1,
        explanation:
          "Velocity × time has units of m/s × s = m, so the area under a velocity–time graph gives the distance travelled. The gradient (not the area) gives acceleration.",
        difficulty: "warmup",
        strategy: "interpret areas and gradients of motion graphs",
      },
      {
        id: "exam-physics-m1-06",
        question:
          "A 1200 kg car experiences a resultant driving force of 3000 N. What is its acceleration?",
        options: ["0.40 m/s²", "2.5 m/s²", "3.6 m/s²", "3 600 000 m/s²"],
        answerIndex: 1,
        explanation:
          "a = F/m = 3000/1200 = 2.5 m/s². Option A inverts the ratio; option D multiplies instead of dividing.",
        difficulty: "warmup",
        strategy: "apply Newton's second law",
      },
      {
        id: "exam-physics-m1-07",
        question:
          "A skydiver reaches terminal velocity. Which statement is correct?",
        options: [
          "The weight is greater than the air resistance.",
          "The air resistance is greater than the weight.",
          "The weight and air resistance are equal and the resultant force is zero.",
          "Both forces are zero.",
        ],
        answerIndex: 2,
        explanation:
          "At terminal velocity the upward air resistance has grown to equal the downward weight, so the resultant force is zero and the skydiver falls at constant velocity (no acceleration).",
        difficulty: "core",
        hints: [
          "Terminal velocity means constant velocity.",
          "Constant velocity means zero resultant force.",
          "Balance the weight against the drag.",
        ],
        strategy: "link constant velocity to balanced forces",
      },
      {
        id: "exam-physics-m1-08",
        question:
          "A force of 12 N is applied to a spring, extending it by 4.0 cm. Assuming Hooke's law holds, what is the spring constant?",
        options: ["3.0 N/cm", "48 N/cm", "0.33 N/cm", "16 N/cm"],
        answerIndex: 0,
        explanation:
          "k = F/x = 12/4.0 = 3.0 N/cm (equivalently 300 N/m). Option C inverts the ratio; option B multiplies.",
        difficulty: "core",
        hints: [
          "Hooke's law: F = kx.",
          "Rearrange to k = F divided by x.",
          "Keep the units consistent (N and cm).",
        ],
        strategy: "apply Hooke's law",
      },
      {
        id: "exam-physics-m1-09",
        question:
          "A uniform metre rule is pivoted at its centre. A 2.0 N weight hangs 30 cm from the pivot on the left. Where must a 3.0 N weight hang on the right to balance it?",
        options: ["20 cm", "30 cm", "45 cm", "60 cm"],
        answerIndex: 0,
        explanation:
          "Principle of moments: clockwise moment = anticlockwise moment. 2.0 × 30 = 3.0 × d, so d = 60/3.0 = 20 cm.",
        difficulty: "core",
        hints: [
          "Moment = force × perpendicular distance from the pivot.",
          "For balance, total clockwise moment = total anticlockwise moment.",
          "Solve 2.0 × 30 = 3.0 × d.",
        ],
        strategy: "apply the principle of moments",
      },
      {
        id: "exam-physics-m1-10",
        question:
          "Which condition is required for an object to be in equilibrium?",
        options: [
          "The resultant force is zero only.",
          "The resultant moment is zero only.",
          "Both the resultant force and the resultant moment are zero.",
          "The object must be stationary.",
        ],
        answerIndex: 2,
        explanation:
          "For full equilibrium there must be no resultant force (no linear acceleration) AND no resultant moment about any point (no angular acceleration). An object can be in equilibrium while moving at constant velocity, so being stationary is not required.",
        difficulty: "core",
        hints: [
          "Equilibrium covers both translation and rotation.",
          "Think about what stops it spinning as well as moving.",
        ],
        strategy: "state both equilibrium conditions",
      },
      {
        id: "exam-physics-m1-11",
        question:
          "Two trolleys, 2.0 kg and 3.0 kg, are at rest on a frictionless track. A spring between them is released; the 2.0 kg trolley moves off at 6.0 m/s to the right. What is the velocity of the 3.0 kg trolley?",
        options: [
          "4.0 m/s to the right",
          "4.0 m/s to the left",
          "9.0 m/s to the left",
          "6.0 m/s to the left",
        ],
        answerIndex: 1,
        explanation:
          "Total initial momentum is zero. m₁v₁ + m₂v₂ = 0 → (2.0)(6.0) + (3.0)v₂ = 0 → v₂ = −4.0 m/s, i.e. 4.0 m/s to the left.",
        difficulty: "core",
        hints: [
          "The system starts at rest, so total momentum = 0.",
          "Momentum is conserved: m₁v₁ = −m₂v₂.",
          "The negative sign means the opposite direction.",
        ],
        strategy: "conservation of momentum",
      },
      {
        id: "exam-physics-m1-12",
        question:
          "A 0.15 kg ball travelling at 20 m/s is struck and rebounds straight back at 20 m/s. What is the magnitude of the change in momentum?",
        options: ["0 kg m/s", "3.0 kg m/s", "6.0 kg m/s", "60 kg m/s"],
        answerIndex: 2,
        explanation:
          "Taking the initial direction as positive: Δp = m(v − u) = 0.15(−20 − 20) = 0.15 × (−40) = −6.0 kg m/s. The magnitude is 6.0 kg m/s. Option B forgets the reversal of direction.",
        difficulty: "challenge",
        hints: [
          "Momentum is a vector; choose a positive direction.",
          "The rebound velocity is negative.",
          "Δp = m(v − u), so use −20 − (+20).",
        ],
        strategy: "treat momentum change as a vector subtraction",
      },
      {
        id: "exam-physics-m1-13",
        question:
          "A force of 50 N acts on an area of 0.25 m². What is the pressure exerted?",
        options: ["12.5 Pa", "200 Pa", "50 Pa", "0.005 Pa"],
        answerIndex: 1,
        explanation:
          "p = F/A = 50/0.25 = 200 Pa. Option A multiplies; option D inverts the ratio.",
        difficulty: "warmup",
        strategy: "apply the definition of pressure",
      },
      {
        id: "exam-physics-m1-14",
        question:
          "A diver is 12 m below the surface of a lake. What is the additional pressure due to the water? (density of water = 1000 kg/m³, g = 10 m/s²)",
        options: ["1200 Pa", "12 000 Pa", "120 000 Pa", "1 200 000 Pa"],
        answerIndex: 2,
        explanation:
          "p = ρgh = 1000 × 10 × 12 = 120 000 Pa. Each factor must be included; option B omits g.",
        difficulty: "core",
        hints: [
          "Use the liquid pressure formula p = ρgh.",
          "Substitute density, g and depth in SI units.",
          "1000 × 10 × 12 gives the answer.",
        ],
        strategy: "apply p = ρgh",
      },
      {
        id: "exam-physics-m1-15",
        question:
          "A pump raises 500 kg of water through a vertical height of 8.0 m in 20 s. What is the minimum power output? (g = 10 m/s²)",
        options: ["200 W", "2000 W", "40 000 W", "400 W"],
        answerIndex: 1,
        explanation:
          "Work done = mgh = 500 × 10 × 8.0 = 40 000 J. Power = W/t = 40 000/20 = 2000 W. Option C gives the work, not the power.",
        difficulty: "core",
        hints: [
          "Work done against gravity = mgh.",
          "Power = work done divided by time.",
          "Divide 40 000 J by 20 s.",
        ],
        strategy: "energy then power",
      },
      {
        id: "exam-physics-m1-16",
        question:
          "A ball of mass 0.50 kg is dropped from rest at a height of 5.0 m. Ignoring air resistance, what is its kinetic energy just before impact? (g = 10 m/s²)",
        options: ["5.0 J", "12.5 J", "25 J", "50 J"],
        answerIndex: 2,
        explanation:
          "All gravitational PE becomes KE: KE = mgh = 0.50 × 10 × 5.0 = 25 J. Option D uses m = 1 kg; option B halves it unnecessarily.",
        difficulty: "warmup",
        strategy: "conservation of energy",
      },
      {
        id: "exam-physics-m1-17",
        question:
          "A motor takes in 800 J of electrical energy and produces 600 J of useful mechanical energy. What is its efficiency?",
        options: ["75%", "133%", "25%", "200%"],
        answerIndex: 0,
        explanation:
          "Efficiency = (useful output / total input) × 100 = (600/800) × 100 = 75%. Option B inverts the ratio.",
        difficulty: "warmup",
        strategy: "use the efficiency formula",
      },
      {
        id: "exam-physics-m1-18",
        question:
          "A 0.20 kg arrow leaves a bow at 40 m/s. What is its kinetic energy?",
        options: ["4.0 J", "8.0 J", "160 J", "320 J"],
        answerIndex: 2,
        explanation:
          "KE = ½mv² = ½ × 0.20 × 40² = ½ × 0.20 × 1600 = 160 J. Option D forgets the factor of ½; option B forgets to square v.",
        difficulty: "challenge",
        hints: [
          "Kinetic energy = ½mv².",
          "Square the speed first (40² = 1600).",
          "Then multiply by ½ and the mass.",
        ],
        strategy: "apply the kinetic energy formula carefully",
      },
      {
        id: "exam-physics-m1-19",
        question:
          "A crane lifts a 250 kg load at a steady speed of 0.40 m/s. What useful power is delivered? (g = 10 m/s²)",
        options: ["100 W", "625 W", "1000 W", "1250 W"],
        answerIndex: 2,
        explanation:
          "Weight = mg = 250 × 10 = 2500 N. At steady speed the upward force equals the weight, so P = Fv = 2500 × 0.40 = 1000 W.",
        difficulty: "challenge",
        hints: [
          "At steady speed the lifting force equals the weight.",
          "Power can be found from P = force × velocity.",
          "Multiply 2500 N by 0.40 m/s.",
        ],
        strategy: "use P = Fv for steady lifting",
      },
      {
        id: "exam-physics-m1-20",
        question:
          "Which of the following is a vector quantity?",
        options: ["Mass", "Energy", "Speed", "Velocity"],
        answerIndex: 3,
        explanation:
          "Velocity has both magnitude and direction, so it is a vector. Mass, energy and speed have magnitude only and are scalars.",
        difficulty: "warmup",
        strategy: "classify scalars and vectors",
      },
      {
        id: "exam-physics-m1-21",
        question:
          "Two forces, 3.0 N due east and 4.0 N due north, act on a point. What is the magnitude of the resultant force?",
        options: ["1.0 N", "5.0 N", "7.0 N", "12 N"],
        answerIndex: 1,
        explanation:
          "The forces are perpendicular, so the resultant is √(3.0² + 4.0²) = √(9 + 16) = √25 = 5.0 N. Option C simply adds them, which is only valid for parallel forces.",
        difficulty: "challenge",
        hints: [
          "Perpendicular vectors combine using Pythagoras.",
          "Resultant = √(F₁² + F₂²).",
          "Compute √(9 + 16).",
        ],
        strategy: "add perpendicular vectors with Pythagoras",
      },
      {
        id: "exam-physics-m1-22",
        question:
          "The mass of an object is 12 kg. What is its weight on Earth where g = 9.8 N/kg?",
        options: ["1.2 N", "12 N", "118 N", "21.8 N"],
        answerIndex: 2,
        explanation:
          "W = mg = 12 × 9.8 = 117.6 N ≈ 118 N. Mass and weight are different quantities; weight depends on the gravitational field strength.",
        difficulty: "warmup",
        strategy: "distinguish mass from weight",
      },
      {
        id: "exam-physics-m1-23",
        question:
          "A car of mass 900 kg travelling at 20 m/s brakes to rest over a distance of 50 m. What is the average braking force?",
        options: ["180 N", "3600 N", "7200 N", "9000 N"],
        answerIndex: 1,
        explanation:
          "Use the work–energy principle: work done by brakes = initial KE. F × d = ½mv² → F = ½ × 900 × 20² / 50 = 180 000/50 = 3600 N.",
        difficulty: "challenge",
        hints: [
          "The braking work removes all the kinetic energy.",
          "½mv² = F × d.",
          "Compute KE = ½ × 900 × 400, then divide by 50 m.",
        ],
        strategy: "apply the work–energy principle",
      },
      {
        id: "exam-physics-m1-24",
        question:
          "Why does a wide, flat snowshoe stop a walker sinking into soft snow?",
        options: [
          "It reduces the walker's weight.",
          "It increases the contact area, reducing the pressure.",
          "It increases the pressure on the snow.",
          "It reduces the force of gravity.",
        ],
        answerIndex: 1,
        explanation:
          "Pressure = force/area. The weight stays the same, but spreading it over a larger area lowers the pressure on the snow, so the walker does not sink.",
        difficulty: "core",
        strategy: "relate pressure to contact area",
      },
      {
        id: "exam-physics-m1-25",
        question:
          "A hydraulic system has a small piston of area 0.0020 m² and a large piston of area 0.040 m². A force of 30 N is applied to the small piston. What force is produced at the large piston?",
        options: ["1.5 N", "30 N", "600 N", "1200 N"],
        answerIndex: 2,
        explanation:
          "Pressure is transmitted equally: p = 30/0.0020 = 15 000 Pa. Force on large piston = p × A = 15 000 × 0.040 = 600 N. The force is multiplied by the ratio of areas (0.040/0.0020 = 20).",
        difficulty: "challenge",
        hints: [
          "Pressure is the same throughout the fluid.",
          "Find p = F/A on the small piston first.",
          "Then F = p × A on the large piston.",
        ],
        strategy: "use equal pressure to find force multiplication",
      },
    ],
  },
  {
    id: "exam-physics-mcq-2",
    title: "Paper 2 — Multiple Choice",
    description:
      "25 multiple-choice questions on thermal physics, kinetic theory, specific and latent heat, gas laws and heat transfer. Allow 45 minutes.",
    questions: [
      {
        id: "exam-physics-m2-01",
        question:
          "Which statement best describes the arrangement of particles in a solid?",
        options: [
          "Far apart and moving randomly at high speed",
          "Close together in a regular lattice, vibrating about fixed positions",
          "Close together but free to move past one another",
          "Far apart and held in fixed positions",
        ],
        answerIndex: 1,
        explanation:
          "In a solid the particles are packed closely in a fixed, regular arrangement and can only vibrate about fixed positions. Liquids have particles close together but free to move; gases are far apart and move randomly.",
        difficulty: "warmup",
        strategy: "describe the kinetic model of solids",
      },
      {
        id: "exam-physics-m2-02",
        question:
          "What is the temperature 27 °C expressed in kelvin?",
        options: ["246 K", "300 K", "27 K", "327 K"],
        answerIndex: 1,
        explanation:
          "T(K) = θ(°C) + 273 = 27 + 273 = 300 K. Option A subtracts instead of adding.",
        difficulty: "warmup",
        strategy: "convert between Celsius and kelvin",
      },
      {
        id: "exam-physics-m2-03",
        question:
          "How much energy is needed to heat 2.0 kg of water from 20 °C to 70 °C? (specific heat capacity of water = 4200 J/(kg °C))",
        options: ["84 000 J", "168 000 J", "420 000 J", "588 000 J"],
        answerIndex: 2,
        explanation:
          "E = mcΔθ = 2.0 × 4200 × (70 − 20) = 2.0 × 4200 × 50 = 420 000 J. Option A forgets the mass factor of 2; option B uses Δθ = 20.",
        difficulty: "core",
        hints: [
          "Use E = mcΔθ.",
          "The temperature change Δθ = 70 − 20 = 50 °C.",
          "Multiply 2.0 × 4200 × 50.",
        ],
        strategy: "apply the specific heat capacity equation",
      },
      {
        id: "exam-physics-m2-04",
        question:
          "A 0.50 kg block of metal is given 9000 J of energy and its temperature rises by 40 °C. What is the specific heat capacity of the metal?",
        options: ["180 J/(kg °C)", "450 J/(kg °C)", "720 J/(kg °C)", "1800 J/(kg °C)"],
        answerIndex: 1,
        explanation:
          "c = E/(mΔθ) = 9000/(0.50 × 40) = 9000/20 = 450 J/(kg °C).",
        difficulty: "core",
        hints: [
          "Rearrange E = mcΔθ to c = E/(mΔθ).",
          "Find mΔθ = 0.50 × 40 = 20.",
          "Divide 9000 by 20.",
        ],
        strategy: "rearrange the heat capacity equation",
      },
      {
        id: "exam-physics-m2-05",
        question:
          "During boiling, energy is supplied to water at 100 °C but the temperature does not rise. Where does the energy go?",
        options: [
          "It is destroyed.",
          "It increases the average kinetic energy of the molecules.",
          "It breaks the bonds between molecules, increasing their potential energy.",
          "It is reflected back to the heater.",
        ],
        answerIndex: 2,
        explanation:
          "At a change of state the energy (latent heat) goes into separating the molecules — increasing their potential energy and breaking intermolecular bonds — rather than raising their kinetic energy, so the temperature stays constant.",
        difficulty: "core",
        hints: [
          "Temperature is linked to average kinetic energy.",
          "If temperature is constant, kinetic energy is constant.",
          "Think about what changes during a change of state.",
        ],
        strategy: "explain latent heat at constant temperature",
      },
      {
        id: "exam-physics-m2-06",
        question:
          "The specific latent heat of fusion of ice is 3.4 × 10⁵ J/kg. How much energy is needed to melt 0.20 kg of ice at 0 °C?",
        options: ["6.8 × 10⁴ J", "3.4 × 10⁵ J", "1.7 × 10⁶ J", "6.8 × 10⁶ J"],
        answerIndex: 0,
        explanation:
          "E = mL = 0.20 × 3.4 × 10⁵ = 6.8 × 10⁴ J. No temperature change occurs during melting, so only the latent heat term is needed.",
        difficulty: "core",
        hints: [
          "Use E = mL for a change of state.",
          "Multiply the mass by the latent heat.",
          "0.20 × 3.4 × 10⁵.",
        ],
        strategy: "apply E = mL",
      },
      {
        id: "exam-physics-m2-07",
        question:
          "A fixed mass of gas at constant temperature has its volume halved. What happens to its pressure? (Assume ideal behaviour.)",
        options: [
          "It halves.",
          "It stays the same.",
          "It doubles.",
          "It quadruples.",
        ],
        answerIndex: 2,
        explanation:
          "At constant temperature, pV = constant (Boyle's law). Halving V means p must double so that the product is unchanged.",
        difficulty: "core",
        hints: [
          "At constant temperature, pV is constant.",
          "If V goes down, p must go up.",
          "Halving V doubles p.",
        ],
        strategy: "apply Boyle's law",
      },
      {
        id: "exam-physics-m2-08",
        question:
          "A gas has a pressure of 100 kPa and volume 0.60 m³. At constant temperature it is compressed to 0.20 m³. What is the new pressure?",
        options: ["33 kPa", "100 kPa", "300 kPa", "600 kPa"],
        answerIndex: 2,
        explanation:
          "p₁V₁ = p₂V₂ → 100 × 0.60 = p₂ × 0.20 → p₂ = 60/0.20 = 300 kPa.",
        difficulty: "challenge",
        hints: [
          "Use p₁V₁ = p₂V₂ at constant temperature.",
          "p₂ = p₁V₁ / V₂.",
          "Compute (100 × 0.60)/0.20.",
        ],
        strategy: "use Boyle's law numerically",
      },
      {
        id: "exam-physics-m2-09",
        question:
          "Why does the pressure of a fixed volume of gas increase when it is heated?",
        options: [
          "The molecules become larger.",
          "The molecules move faster and collide with the walls more often and harder.",
          "The number of molecules increases.",
          "The molecules stick to the walls.",
        ],
        answerIndex: 1,
        explanation:
          "Heating raises the average kinetic energy, so molecules move faster, striking the walls more frequently and with greater force. The total force per unit area (pressure) rises.",
        difficulty: "core",
        hints: [
          "Higher temperature means faster molecules.",
          "Pressure comes from molecular collisions with the walls.",
          "Faster, more frequent collisions raise the pressure.",
        ],
        strategy: "explain gas pressure using kinetic theory",
      },
      {
        id: "exam-physics-m2-10",
        question:
          "Which process transfers thermal energy through a vacuum?",
        options: ["Conduction", "Convection", "Radiation", "Evaporation"],
        answerIndex: 2,
        explanation:
          "Conduction and convection both need a medium of particles; only thermal radiation (infrared electromagnetic waves) can travel through the vacuum of space.",
        difficulty: "warmup",
        strategy: "identify which transfer needs no medium",
      },
      {
        id: "exam-physics-m2-11",
        question:
          "Which surface is the best emitter of thermal radiation?",
        options: [
          "Shiny silver",
          "Polished white",
          "Dull black",
          "Smooth and reflective",
        ],
        answerIndex: 2,
        explanation:
          "Dull, dark surfaces are the best emitters (and absorbers) of infrared radiation, while shiny, light surfaces are poor emitters and good reflectors.",
        difficulty: "warmup",
        strategy: "recall good emitters of radiation",
      },
      {
        id: "exam-physics-m2-12",
        question:
          "In a metal, thermal conduction is so effective mainly because of which mechanism?",
        options: [
          "Slow movement of the metal ions",
          "Movement of free (delocalised) electrons carrying energy",
          "Convection currents inside the metal",
          "Radiation between the atoms",
        ],
        answerIndex: 1,
        explanation:
          "Metals contain free delocalised electrons that move quickly and carry kinetic energy through the material, making metals far better conductors than non-metals, which rely only on lattice vibrations.",
        difficulty: "core",
        hints: [
          "Metals have a special type of charge carrier.",
          "These carriers are also responsible for electrical conduction.",
          "Think about free electrons.",
        ],
        strategy: "explain conduction in metals",
      },
      {
        id: "exam-physics-m2-13",
        question:
          "Why does warm air rise in a room, setting up a convection current?",
        options: [
          "Warm air is denser than cold air.",
          "Warm air expands, becomes less dense, and is pushed up by denser cold air.",
          "Warm air has more particles.",
          "Cold air radiates upward.",
        ],
        answerIndex: 1,
        explanation:
          "When air is heated it expands, so the same mass occupies more volume and its density falls. The surrounding denser, cooler air sinks and pushes the warm air upward, forming a convection current.",
        difficulty: "challenge",
        hints: [
          "Heating makes a fluid expand.",
          "Expansion lowers the density.",
          "Less dense fluid floats above denser fluid.",
        ],
        strategy: "explain convection using density changes",
      },
      {
        id: "exam-physics-m2-14",
        question:
          "Evaporation cools the remaining liquid because:",
        options: [
          "The slowest molecules escape, lowering the average energy left behind.",
          "The fastest, most energetic molecules escape, lowering the average energy left behind.",
          "Energy is created at the surface.",
          "The liquid absorbs cold from the air.",
        ],
        answerIndex: 1,
        explanation:
          "The most energetic molecules escape from the surface during evaporation, so the average kinetic energy of those remaining falls, which means the temperature of the liquid drops.",
        difficulty: "core",
        hints: [
          "Only some molecules have enough energy to escape.",
          "Which molecules are most likely to leave?",
          "Removing the fastest lowers the average energy.",
        ],
        strategy: "explain cooling by evaporation",
      },
      {
        id: "exam-physics-m2-15",
        question:
          "A bimetallic strip of brass and steel is heated. It bends because:",
        options: [
          "Brass and steel expand by the same amount.",
          "The two metals expand by different amounts for the same temperature rise.",
          "Only the steel expands.",
          "The metals contract on heating.",
        ],
        answerIndex: 1,
        explanation:
          "The two metals have different rates of thermal expansion. Brass expands more than steel for the same temperature rise, so the strip bends, with brass on the outside of the curve.",
        difficulty: "warmup",
        strategy: "explain a bimetallic strip",
      },
      {
        id: "exam-physics-m2-16",
        question:
          "A vacuum flask keeps a drink hot. The vacuum between the walls reduces heat loss mainly by stopping which processes?",
        options: [
          "Radiation only",
          "Conduction and convection",
          "Evaporation only",
          "All forms of radiation",
        ],
        answerIndex: 1,
        explanation:
          "A vacuum has almost no particles, so it prevents conduction and convection (both need a medium). Radiation is reduced separately by the silvered surfaces of the flask.",
        difficulty: "challenge",
        hints: [
          "Which transfers need particles to work?",
          "A vacuum has no particles.",
          "Radiation is dealt with by the shiny coating instead.",
        ],
        strategy: "analyse heat loss in a vacuum flask",
      },
      {
        id: "exam-physics-m2-17",
        question:
          "How much energy is released when 0.30 kg of steam at 100 °C condenses to water at 100 °C? (specific latent heat of vaporisation = 2.3 × 10⁶ J/kg)",
        options: ["6.9 × 10⁴ J", "6.9 × 10⁵ J", "2.3 × 10⁶ J", "6.9 × 10⁶ J"],
        answerIndex: 1,
        explanation:
          "E = mL = 0.30 × 2.3 × 10⁶ = 6.9 × 10⁵ J. Condensation releases the same latent heat that boiling absorbs.",
        difficulty: "challenge",
        hints: [
          "Condensation releases latent heat: E = mL.",
          "Multiply 0.30 by 2.3 × 10⁶.",
          "Express the answer in standard form.",
        ],
        strategy: "use E = mL for condensation",
      },
      {
        id: "exam-physics-m2-18",
        question:
          "1.0 kg of water at 100 °C is mixed with 1.0 kg of water at 20 °C in an insulated container. What is the final temperature?",
        options: ["40 °C", "50 °C", "60 °C", "80 °C"],
        answerIndex: 2,
        explanation:
          "Equal masses of the same liquid reach the mean temperature: (100 + 20)/2 = 60 °C. Energy lost by the hot water equals energy gained by the cold water.",
        difficulty: "core",
        hints: [
          "Energy lost by hot water = energy gained by cold water.",
          "The masses and specific heat capacities are equal.",
          "The final temperature is the average.",
        ],
        strategy: "apply conservation of energy to mixing",
      },
      {
        id: "exam-physics-m2-19",
        question:
          "A 2.0 kW kettle heats 0.50 kg of water from 20 °C to 100 °C. Ignoring losses, how long does this take? (c = 4200 J/(kg °C))",
        options: ["42 s", "84 s", "168 s", "336 s"],
        answerIndex: 1,
        explanation:
          "E = mcΔθ = 0.50 × 4200 × 80 = 168 000 J. Time = E/P = 168 000/2000 = 84 s.",
        difficulty: "challenge",
        hints: [
          "First find the energy with E = mcΔθ (Δθ = 80 °C).",
          "Power = energy / time.",
          "Divide the energy by 2000 W.",
        ],
        strategy: "combine heat energy with electrical power",
      },
      {
        id: "exam-physics-m2-20",
        question:
          "Which graph feature shows a substance changing state as it is heated steadily?",
        options: [
          "A steadily rising straight line",
          "A horizontal (flat) section of the temperature–time graph",
          "A steeply falling line",
          "A curved line that keeps rising",
        ],
        answerIndex: 1,
        explanation:
          "During a change of state the temperature stays constant while energy is supplied, producing a horizontal plateau on a temperature–time graph.",
        difficulty: "warmup",
        strategy: "read a heating curve",
      },
      {
        id: "exam-physics-m2-21",
        question:
          "A fixed mass of gas is heated at constant volume. Which quantity is conserved (kept constant)?",
        options: ["Pressure", "Temperature", "Volume", "Density of the gas"],
        answerIndex: 2,
        explanation:
          "Heating at constant volume means the volume is fixed. Since the mass is fixed and the volume is fixed, the density is also constant, but the defining constraint described is that the volume is kept constant; pressure and temperature both rise.",
        difficulty: "core",
        hints: [
          "Read the conditions stated in the question.",
          "Constant volume is given.",
          "Pressure and temperature change when heated.",
        ],
        strategy: "identify the fixed variable in a gas process",
      },
      {
        id: "exam-physics-m2-22",
        question:
          "Brownian motion of smoke particles in air provides evidence that:",
        options: [
          "Air molecules are large and slow.",
          "Air consists of tiny, fast-moving molecules colliding randomly with the particles.",
          "Smoke particles attract one another.",
          "Air has no particles.",
        ],
        answerIndex: 1,
        explanation:
          "The random, jerky paths of smoke particles are caused by collisions with vast numbers of tiny, fast, randomly moving air molecules — direct evidence for the kinetic particle model.",
        difficulty: "core",
        hints: [
          "What makes the smoke particles jiggle?",
          "Something invisible is hitting them.",
          "Think about random molecular collisions.",
        ],
        strategy: "interpret Brownian motion",
      },
      {
        id: "exam-physics-m2-23",
        question:
          "An immersion heater of power 60 W is switched on for 5.0 minutes. How much energy does it transfer?",
        options: ["300 J", "1800 J", "18 000 J", "300 000 J"],
        answerIndex: 2,
        explanation:
          "E = Pt = 60 × (5.0 × 60) = 60 × 300 = 18 000 J. The time must be converted to seconds before multiplying.",
        difficulty: "warmup",
        hints: [
          "Energy = power × time.",
          "Convert minutes to seconds (5.0 × 60 = 300 s).",
          "Multiply 60 W by 300 s.",
        ],
        strategy: "convert time to seconds for energy",
      },
      {
        id: "exam-physics-m2-24",
        question:
          "Two identical cans of hot water cool down. One is shiny and one is matt black. Which cools faster and why?",
        options: [
          "The shiny can, because it emits more radiation.",
          "The matt black can, because it emits more radiation.",
          "They cool at the same rate.",
          "The shiny can, because it absorbs more radiation.",
        ],
        answerIndex: 1,
        explanation:
          "Matt black surfaces are better emitters of infrared radiation than shiny surfaces, so the black can loses thermal energy faster and cools more quickly.",
        difficulty: "warmup",
        strategy: "compare emission from surfaces",
      },
      {
        id: "exam-physics-m2-25",
        question:
          "0.10 kg of ice at 0 °C is added to a drink and melts completely, then warms to 10 °C. Which two energy terms are needed to calculate the total energy absorbed by the (melted) ice? (L_f = 3.4 × 10⁵ J/kg, c_water = 4200 J/(kg °C))",
        options: [
          "mL only",
          "mcΔθ only",
          "mL to melt the ice, then mcΔθ to warm the melt water",
          "mcΔθ to cool, then mL to freeze",
        ],
        answerIndex: 2,
        explanation:
          "First the ice melts at 0 °C requiring mL = 0.10 × 3.4 × 10⁵ = 34 000 J, then the resulting water warms from 0 °C to 10 °C requiring mcΔθ = 0.10 × 4200 × 10 = 4200 J. Both terms must be added.",
        difficulty: "challenge",
        hints: [
          "Melting and warming are two separate stages.",
          "Use mL for the change of state at 0 °C.",
          "Use mcΔθ for the temperature rise afterwards.",
        ],
        strategy: "break a heating problem into stages",
      },
    ],
  },
  {
    id: "exam-physics-mcq-3",
    title: "Paper 3 — Multiple Choice",
    description:
      "25 multiple-choice questions on waves, reflection, refraction, lenses, sound and the electromagnetic spectrum. Allow 45 minutes.",
    questions: [
      {
        id: "exam-physics-m3-01",
        question:
          "A wave has a frequency of 50 Hz and a wavelength of 6.0 m. What is its speed?",
        options: ["8.3 m/s", "56 m/s", "300 m/s", "0.12 m/s"],
        answerIndex: 2,
        explanation:
          "v = fλ = 50 × 6.0 = 300 m/s. Option A divides f by λ; option D divides λ by f.",
        difficulty: "warmup",
        strategy: "apply the wave equation",
      },
      {
        id: "exam-physics-m3-02",
        question:
          "Which of the following is a transverse wave?",
        options: [
          "Sound in air",
          "A compression wave in a spring",
          "A light wave",
          "An ultrasound pulse in water",
        ],
        answerIndex: 2,
        explanation:
          "Light is a transverse electromagnetic wave — the oscillations are perpendicular to the direction of travel. Sound and ultrasound are longitudinal, with oscillations parallel to the direction of travel.",
        difficulty: "warmup",
        strategy: "classify transverse and longitudinal waves",
      },
      {
        id: "exam-physics-m3-03",
        question:
          "A radio station broadcasts at 100 MHz. Radio waves travel at 3.0 × 10⁸ m/s. What is the wavelength?",
        options: ["0.33 m", "3.0 m", "30 m", "300 m"],
        answerIndex: 1,
        explanation:
          "λ = v/f = (3.0 × 10⁸)/(100 × 10⁶) = (3.0 × 10⁸)/(1.0 × 10⁸) = 3.0 m.",
        difficulty: "core",
        hints: [
          "Rearrange v = fλ to λ = v/f.",
          "100 MHz = 1.0 × 10⁸ Hz.",
          "Divide 3.0 × 10⁸ by 1.0 × 10⁸.",
        ],
        strategy: "convert units then use the wave equation",
      },
      {
        id: "exam-physics-m3-04",
        question:
          "When a ray of light reflects from a plane mirror, the angle of incidence is 35° (measured from the normal). What is the angle of reflection?",
        options: ["35°", "55°", "70°", "145°"],
        answerIndex: 0,
        explanation:
          "The law of reflection states that the angle of reflection equals the angle of incidence, both measured from the normal, so it is 35°.",
        difficulty: "warmup",
        strategy: "apply the law of reflection",
      },
      {
        id: "exam-physics-m3-05",
        question:
          "Light passes from air into glass. Which statement is correct?",
        options: [
          "It speeds up and bends away from the normal.",
          "It slows down and bends towards the normal.",
          "It slows down and bends away from the normal.",
          "Its speed is unchanged.",
        ],
        answerIndex: 1,
        explanation:
          "Glass is optically denser than air, so light slows on entering and refracts towards the normal. Going the other way (glass to air) it would speed up and bend away from the normal.",
        difficulty: "core",
        hints: [
          "Glass is optically denser than air.",
          "Light slows entering a denser medium.",
          "Towards the denser medium it bends towards the normal.",
        ],
        strategy: "predict refraction direction",
      },
      {
        id: "exam-physics-m3-06",
        question:
          "The refractive index of glass is 1.5. What is the speed of light in the glass? (speed in vacuum = 3.0 × 10⁸ m/s)",
        options: ["4.5 × 10⁸ m/s", "2.0 × 10⁸ m/s", "1.5 × 10⁸ m/s", "3.0 × 10⁸ m/s"],
        answerIndex: 1,
        explanation:
          "n = c/v, so v = c/n = (3.0 × 10⁸)/1.5 = 2.0 × 10⁸ m/s. Light always travels slower in a medium than in vacuum.",
        difficulty: "challenge",
        hints: [
          "Refractive index n = c/v.",
          "Rearrange to v = c/n.",
          "Divide 3.0 × 10⁸ by 1.5.",
        ],
        strategy: "relate refractive index to wave speed",
      },
      {
        id: "exam-physics-m3-07",
        question:
          "A ray strikes a glass–air boundary at an angle greater than the critical angle. What happens?",
        options: [
          "It refracts out of the glass.",
          "It is totally internally reflected.",
          "It is absorbed.",
          "It travels along the boundary.",
        ],
        answerIndex: 1,
        explanation:
          "When light inside the denser medium meets the boundary at an angle greater than the critical angle, none escapes — it is all reflected back inside. This total internal reflection is used in optical fibres and prisms.",
        difficulty: "core",
        hints: [
          "Beyond the critical angle no light escapes.",
          "All of it stays inside the glass.",
          "This is total internal reflection.",
        ],
        strategy: "recall total internal reflection",
      },
      {
        id: "exam-physics-m3-08",
        question:
          "The critical angle for a glass with refractive index 1.5 is found from sin c = 1/n. What is the critical angle? (sin⁻¹ 0.667 ≈ 41.8°)",
        options: ["19°", "30°", "42°", "67°"],
        answerIndex: 2,
        explanation:
          "sin c = 1/n = 1/1.5 = 0.667, so c = sin⁻¹ (0.667) ≈ 42°.",
        difficulty: "challenge",
        hints: [
          "Use sin c = 1/n.",
          "1/1.5 = 0.667.",
          "Take the inverse sine of 0.667.",
        ],
        strategy: "calculate a critical angle",
      },
      {
        id: "exam-physics-m3-09",
        question:
          "An object is placed beyond 2F (twice the focal length) of a converging lens. The image formed is:",
        options: [
          "Real, inverted and diminished",
          "Real, inverted and magnified",
          "Virtual, upright and magnified",
          "Virtual, upright and diminished",
        ],
        answerIndex: 0,
        explanation:
          "For an object beyond 2F of a converging lens, the image is real, inverted and smaller than the object (diminished), formed between F and 2F on the other side — as in a camera.",
        difficulty: "challenge",
        hints: [
          "Draw a ray diagram with the object beyond 2F.",
          "Beyond 2F the image is real and inverted.",
          "Compare the image size to the object size.",
        ],
        strategy: "use the converging-lens image rules",
      },
      {
        id: "exam-physics-m3-10",
        question:
          "A magnifying glass produces a magnified, upright image. The object must be placed:",
        options: [
          "Beyond 2F",
          "At 2F",
          "Between the lens and F (inside the focal length)",
          "At F",
        ],
        answerIndex: 2,
        explanation:
          "When the object is closer to a converging lens than its focal point F, a magnified, upright, virtual image is produced — this is how a magnifying glass works.",
        difficulty: "core",
        hints: [
          "A magnifier gives an upright virtual image.",
          "This only happens for an object inside F.",
          "The object is between the lens and the focal point.",
        ],
        strategy: "identify the magnifying-glass configuration",
      },
      {
        id: "exam-physics-m3-11",
        question:
          "White light is passed through a glass prism. Why does it spread into a spectrum?",
        options: [
          "All colours travel at the same speed in glass.",
          "Different colours are refracted by different amounts because they have different wavelengths.",
          "The prism adds colour to the light.",
          "The light reflects off each face.",
        ],
        answerIndex: 1,
        explanation:
          "Dispersion occurs because the refractive index of glass differs slightly for each wavelength. Violet light slows most and refracts most; red refracts least, so the colours separate.",
        difficulty: "challenge",
        hints: [
          "Each colour has a different wavelength.",
          "Refraction depends slightly on wavelength.",
          "Different bending angles separate the colours.",
        ],
        strategy: "explain dispersion",
      },
      {
        id: "exam-physics-m3-12",
        question:
          "Which property is the same for all waves in the electromagnetic spectrum in a vacuum?",
        options: ["Frequency", "Wavelength", "Speed", "Energy per photon"],
        answerIndex: 2,
        explanation:
          "All electromagnetic waves travel at the same speed in a vacuum, 3.0 × 10⁸ m/s. They differ in frequency and wavelength (and therefore photon energy).",
        difficulty: "core",
        strategy: "recall the common property of EM waves",
      },
      {
        id: "exam-physics-m3-13",
        question:
          "Which lists parts of the electromagnetic spectrum in order of increasing frequency?",
        options: [
          "Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma",
          "Gamma, X-ray, ultraviolet, visible, infrared, microwave, radio",
          "Visible, infrared, radio, microwave, ultraviolet, X-ray, gamma",
          "Radio, infrared, microwave, visible, X-ray, ultraviolet, gamma",
        ],
        answerIndex: 0,
        explanation:
          "Increasing frequency (and decreasing wavelength) runs: radio, microwave, infrared, visible, ultraviolet, X-rays, gamma rays.",
        difficulty: "core",
        hints: [
          "Radio waves have the lowest frequency.",
          "Gamma rays have the highest frequency.",
          "Visible light sits between infrared and ultraviolet.",
        ],
        strategy: "order the EM spectrum",
      },
      {
        id: "exam-physics-m3-14",
        question:
          "Which electromagnetic radiation is used in everyday communication via mobile phones and satellites?",
        options: ["Gamma rays", "Microwaves", "X-rays", "Ultraviolet"],
        answerIndex: 1,
        explanation:
          "Microwaves pass easily through the atmosphere and are used for mobile phone and satellite communications. Gamma rays and X-rays are ionising and unsuitable for everyday signalling.",
        difficulty: "warmup",
        strategy: "match EM waves to uses",
      },
      {
        id: "exam-physics-m3-15",
        question:
          "Why is overexposure to ultraviolet and higher-frequency radiation harmful to humans?",
        options: [
          "It has very long wavelengths.",
          "It carries enough energy to ionise atoms and damage cells.",
          "It travels too slowly.",
          "It cannot pass through the skin at all.",
        ],
        answerIndex: 1,
        explanation:
          "UV, X-rays and gamma rays have high photon energy and are ionising; they can damage or kill living cells and cause mutations, which is why exposure must be controlled.",
        difficulty: "core",
        hints: [
          "Higher frequency means higher photon energy.",
          "Enough energy can knock electrons off atoms.",
          "Ionisation damages living cells.",
        ],
        strategy: "link EM frequency to biological hazard",
      },
      {
        id: "exam-physics-m3-16",
        question:
          "The speed of sound in air is about 340 m/s. A person hears an echo 2.0 s after shouting at a cliff. How far away is the cliff?",
        options: ["170 m", "340 m", "680 m", "1360 m"],
        answerIndex: 1,
        explanation:
          "The sound travels to the cliff and back, a total distance of 340 × 2.0 = 680 m. The cliff is half of this: 680/2 = 340 m.",
        difficulty: "challenge",
        hints: [
          "The sound travels there and back.",
          "Total distance = speed × time = 680 m.",
          "Halve the total distance for the one-way distance.",
        ],
        strategy: "account for the round trip in echo problems",
      },
      {
        id: "exam-physics-m3-17",
        question:
          "Increasing the amplitude of a sound wave changes which property of the sound?",
        options: ["Its pitch", "Its loudness", "Its speed", "Its frequency"],
        answerIndex: 1,
        explanation:
          "Amplitude determines the loudness (volume) of a sound. Pitch is determined by frequency, which is unaffected by amplitude.",
        difficulty: "warmup",
        strategy: "link amplitude to loudness",
      },
      {
        id: "exam-physics-m3-18",
        question:
          "Which is the approximate range of human hearing?",
        options: [
          "2 Hz to 200 Hz",
          "20 Hz to 20 000 Hz",
          "200 Hz to 2 000 000 Hz",
          "0 Hz to 20 Hz",
        ],
        answerIndex: 1,
        explanation:
          "A healthy young human can hear frequencies from about 20 Hz up to about 20 000 Hz (20 kHz). Frequencies above this are called ultrasound.",
        difficulty: "warmup",
        strategy: "recall the audible frequency range",
      },
      {
        id: "exam-physics-m3-19",
        question:
          "Ultrasound is used for prenatal scanning because it:",
        options: [
          "Is strongly ionising and kills harmful cells.",
          "Reflects at boundaries between tissues and is non-ionising, so it is safe.",
          "Travels faster than X-rays.",
          "Cannot pass through soft tissue.",
        ],
        answerIndex: 1,
        explanation:
          "Ultrasound (sound above 20 kHz) reflects at boundaries between different tissues, allowing images to be built up. It is non-ionising, making it safe for scanning a developing fetus, unlike X-rays.",
        difficulty: "core",
        hints: [
          "Ultrasound is sound, not an EM wave.",
          "It partly reflects at tissue boundaries.",
          "It is non-ionising and therefore safe.",
        ],
        strategy: "explain a medical use of ultrasound",
      },
      {
        id: "exam-physics-m3-20",
        question:
          "When a wave passes from deep to shallow water it slows down. Its frequency is set by the source. What happens to the wavelength?",
        options: [
          "It increases.",
          "It decreases.",
          "It stays the same.",
          "It becomes zero.",
        ],
        answerIndex: 1,
        explanation:
          "Frequency is fixed by the source. Since v = fλ and the speed falls while f is constant, the wavelength must decrease too.",
        difficulty: "core",
        hints: [
          "The frequency does not change at a boundary.",
          "Use v = fλ with f constant.",
          "If v falls and f is fixed, λ must fall.",
        ],
        strategy: "use the wave equation at a boundary",
      },
      {
        id: "exam-physics-m3-21",
        question:
          "When water waves pass through a narrow gap of width similar to their wavelength, they:",
        options: [
          "Stop completely",
          "Spread out (diffract) into the region beyond the gap",
          "Speed up",
          "Reflect straight back",
        ],
        answerIndex: 1,
        explanation:
          "Diffraction is greatest when the gap width is about equal to the wavelength; the waves spread out into the space beyond with nearly circular wavefronts.",
        difficulty: "core",
        hints: [
          "Waves bend around edges and through gaps.",
          "The effect is strongest when the gap ≈ wavelength.",
          "This spreading is called diffraction.",
        ],
        strategy: "recall the conditions for diffraction",
      },
      {
        id: "exam-physics-m3-22",
        question:
          "A wave of speed 320 m/s has a period of 0.0040 s. What is its wavelength?",
        options: ["0.80 m", "1.28 m", "8.0 m", "80 000 m"],
        answerIndex: 1,
        explanation:
          "Frequency f = 1/T = 1/0.0040 = 250 Hz. Wavelength λ = v/f = 320/250 = 1.28 m. Alternatively λ = v × T = 320 × 0.0040 = 1.28 m.",
        difficulty: "challenge",
        hints: [
          "Frequency is the reciprocal of the period.",
          "Or use λ = v × T directly.",
          "320 × 0.0040 gives the wavelength.",
        ],
        strategy: "combine period, frequency and the wave equation",
      },
      {
        id: "exam-physics-m3-23",
        question:
          "In an optical fibre, the light signal stays inside the fibre because of:",
        options: [
          "Refraction out of the sides",
          "Total internal reflection at the walls",
          "Absorption by the glass",
          "Diffraction around the core",
        ],
        answerIndex: 1,
        explanation:
          "Light enters the fibre at a steep angle and strikes the walls beyond the critical angle, so it is totally internally reflected repeatedly and travels along the fibre with little loss.",
        difficulty: "core",
        hints: [
          "The light keeps bouncing inside the fibre.",
          "None of it escapes through the walls.",
          "This is total internal reflection.",
        ],
        strategy: "apply TIR to optical fibres",
      },
      {
        id: "exam-physics-m3-24",
        question:
          "A converging lens has a focal length of 0.20 m. What is its power?",
        options: ["0.20 D", "5.0 D", "0.50 D", "20 D"],
        answerIndex: 1,
        explanation:
          "Lens power P = 1/f (with f in metres) = 1/0.20 = 5.0 dioptres (D).",
        difficulty: "challenge",
        hints: [
          "Power of a lens = 1/f with f in metres.",
          "f = 0.20 m.",
          "Take the reciprocal of 0.20.",
        ],
        strategy: "calculate lens power",
      },
      {
        id: "exam-physics-m3-25",
        question:
          "Infrared radiation is detected by night-vision cameras mainly because:",
        options: [
          "Cold objects emit the most infrared.",
          "All objects emit infrared, and warmer objects emit more.",
          "Infrared is visible to the human eye.",
          "Infrared has a higher frequency than X-rays.",
        ],
        answerIndex: 1,
        explanation:
          "Every object emits infrared radiation; the hotter it is, the more it emits. Night-vision and thermal cameras detect these differences in emitted infrared, even in darkness.",
        difficulty: "core",
        hints: [
          "Warm objects glow in the infrared.",
          "Hotter objects emit more infrared.",
          "Cameras detect the temperature differences.",
        ],
        strategy: "link infrared emission to temperature",
      },
    ],
  },
  {
    id: "exam-physics-mcq-4",
    title: "Paper 4 — Multiple Choice",
    description:
      "25 multiple-choice questions on electricity, circuits, magnetism, electromagnetism, transformers, radioactivity and space physics. Allow 45 minutes.",
    questions: [
      {
        id: "exam-physics-m4-01",
        question:
          "A current of 2.0 A flows for 30 s. How much charge passes a point in the circuit?",
        options: ["15 C", "32 C", "60 C", "0.067 C"],
        answerIndex: 2,
        explanation:
          "Q = It = 2.0 × 30 = 60 C. Option A divides instead of multiplying; option B adds.",
        difficulty: "warmup",
        strategy: "apply Q = It",
      },
      {
        id: "exam-physics-m4-02",
        question:
          "A 12 V supply drives a current of 3.0 A through a resistor. What is the resistance?",
        options: ["4.0 Ω", "9.0 Ω", "36 Ω", "0.25 Ω"],
        answerIndex: 0,
        explanation:
          "R = V/I = 12/3.0 = 4.0 Ω. Option D inverts the ratio; option C multiplies.",
        difficulty: "warmup",
        strategy: "apply Ohm's law",
      },
      {
        id: "exam-physics-m4-03",
        question:
          "Two resistors of 4.0 Ω and 6.0 Ω are connected in series. What is their combined resistance?",
        options: ["2.4 Ω", "5.0 Ω", "10 Ω", "24 Ω"],
        answerIndex: 2,
        explanation:
          "Series resistances add: R = 4.0 + 6.0 = 10 Ω. Option A is the parallel combination.",
        difficulty: "warmup",
        strategy: "add series resistances",
      },
      {
        id: "exam-physics-m4-04",
        question:
          "Two resistors of 4.0 Ω and 12 Ω are connected in parallel. What is their combined resistance?",
        options: ["3.0 Ω", "8.0 Ω", "16 Ω", "48 Ω"],
        answerIndex: 0,
        explanation:
          "1/R = 1/4.0 + 1/12 = 3/12 + 1/12 = 4/12, so R = 12/4 = 3.0 Ω. The parallel combination is always less than the smallest resistor.",
        difficulty: "core",
        hints: [
          "For parallel: 1/R = 1/R₁ + 1/R₂.",
          "Use a common denominator of 12.",
          "1/4 + 1/12 = 4/12, then invert.",
        ],
        strategy: "combine parallel resistances",
      },
      {
        id: "exam-physics-m4-05",
        question:
          "An electric heater is rated 230 V, 2000 W. What current does it draw at normal operation?",
        options: ["0.115 A", "8.7 A", "11.5 A", "115 A"],
        answerIndex: 1,
        explanation:
          "P = VI, so I = P/V = 2000/230 = 8.7 A. Option C uses 173 instead of 230; option A inverts.",
        difficulty: "challenge",
        hints: [
          "Power P = VI.",
          "Rearrange to I = P/V.",
          "Divide 2000 W by 230 V.",
        ],
        strategy: "use the electrical power equation",
      },
      {
        id: "exam-physics-m4-06",
        question:
          "How much energy does a 60 W lamp transfer in 5.0 minutes?",
        options: ["300 J", "1800 J", "18 000 J", "300 000 J"],
        answerIndex: 2,
        explanation:
          "E = Pt = 60 × (5.0 × 60) = 60 × 300 = 18 000 J. Convert minutes to seconds first.",
        difficulty: "core",
        hints: [
          "Energy = power × time.",
          "5.0 minutes = 300 s.",
          "Multiply 60 W by 300 s.",
        ],
        strategy: "convert time then use E = Pt",
      },
      {
        id: "exam-physics-m4-07",
        question:
          "A resistor of resistance 5.0 Ω carries a current of 2.0 A. What is the power dissipated?",
        options: ["10 W", "20 W", "2.5 W", "50 W"],
        answerIndex: 1,
        explanation:
          "P = I²R = (2.0)² × 5.0 = 4.0 × 5.0 = 20 W. Option A forgets to square the current.",
        difficulty: "core",
        hints: [
          "Power in a resistor: P = I²R.",
          "Square the current first (2.0² = 4.0).",
          "Multiply by the resistance.",
        ],
        strategy: "use P = I²R",
      },
      {
        id: "exam-physics-m4-08",
        question:
          "In a series circuit, which quantity is the same at every point?",
        options: [
          "The voltage across each component",
          "The current",
          "The resistance of each component",
          "The power of each component",
        ],
        answerIndex: 1,
        explanation:
          "In a series circuit there is only one path, so the current is the same everywhere. The supply voltage is shared between the components in proportion to their resistances.",
        difficulty: "core",
        strategy: "recall series-circuit rules",
      },
      {
        id: "exam-physics-m4-09",
        question:
          "The resistance of a thermistor as its temperature rises:",
        options: [
          "Increases",
          "Decreases",
          "Stays constant",
          "Becomes infinite",
        ],
        answerIndex: 1,
        explanation:
          "A standard (NTC) thermistor's resistance decreases as temperature increases, which makes it useful as a temperature sensor in circuits.",
        difficulty: "core",
        hints: [
          "Thermistors are temperature-dependent resistors.",
          "Heating frees more charge carriers.",
          "More carriers means lower resistance.",
        ],
        strategy: "recall thermistor behaviour",
      },
      {
        id: "exam-physics-m4-10",
        question:
          "Why is the live wire fitted with a fuse and a switch in a household appliance?",
        options: [
          "To save electricity when the appliance is on",
          "So the appliance is isolated from the high potential and protected from excessive current",
          "To increase the current",
          "Because the neutral wire is dangerous",
        ],
        answerIndex: 1,
        explanation:
          "The live wire carries the high potential. Placing the switch and fuse in the live wire means that when off the appliance is disconnected from the dangerous potential, and a fault current melts the fuse, cutting the supply.",
        difficulty: "challenge",
        hints: [
          "The live wire is the dangerous one.",
          "The fuse melts if the current is too high.",
          "Switching the live wire isolates the appliance safely.",
        ],
        strategy: "explain electrical safety features",
      },
      {
        id: "exam-physics-m4-11",
        question:
          "A wire carries a current in a magnetic field directed at right angles to it. The direction of the force on the wire can be found using:",
        options: [
          "The right-hand grip rule",
          "Fleming's left-hand rule",
          "Lenz's law only",
          "The inverse-square law",
        ],
        answerIndex: 1,
        explanation:
          "Fleming's left-hand rule gives the direction of the force (thumb) when the first finger points along the field and the second finger along the current. The right-hand grip rule gives the field direction around a wire instead.",
        difficulty: "core",
        hints: [
          "There are two related hand rules.",
          "The grip rule is for the field around a wire.",
          "The motor effect force uses the left hand.",
        ],
        strategy: "choose the correct hand rule",
      },
      {
        id: "exam-physics-m4-12",
        question:
          "What happens to the magnetic field of a solenoid if the current through it is reversed?",
        options: [
          "The field disappears.",
          "The field direction reverses (poles swap).",
          "The field doubles in strength.",
          "Nothing changes.",
        ],
        answerIndex: 1,
        explanation:
          "Reversing the current reverses the direction of the magnetic field, swapping the north and south poles of the solenoid. The strength is unchanged if the current size is the same.",
        difficulty: "warmup",
        strategy: "relate current direction to field direction",
      },
      {
        id: "exam-physics-m4-13",
        question:
          "How can the strength of an electromagnet be increased?",
        options: [
          "Decrease the current",
          "Increase the number of turns on the coil",
          "Remove the iron core",
          "Use a shorter wire only",
        ],
        answerIndex: 1,
        explanation:
          "Increasing the number of turns (or the current, or adding a soft-iron core) strengthens an electromagnet. Removing the iron core or reducing the current would weaken it.",
        difficulty: "core",
        strategy: "recall factors affecting electromagnet strength",
      },
      {
        id: "exam-physics-m4-14",
        question:
          "An e.m.f. is induced in a coil only when:",
        options: [
          "A steady current flows nearby.",
          "The magnetic flux through the coil changes.",
          "The coil is at rest in a constant field.",
          "The coil is made of iron.",
        ],
        answerIndex: 1,
        explanation:
          "Electromagnetic induction requires a changing magnetic flux through the coil — from a moving magnet, a changing current in a nearby coil, or relative motion. A steady, unchanging flux induces no e.m.f.",
        difficulty: "core",
        hints: [
          "Induction needs change.",
          "A stationary magnet in a still coil does nothing.",
          "It is the changing flux that matters.",
        ],
        strategy: "state the condition for induction",
      },
      {
        id: "exam-physics-m4-15",
        question:
          "A transformer has 200 turns on the primary and 50 turns on the secondary. If the primary voltage is 240 V, what is the secondary voltage?",
        options: ["60 V", "240 V", "480 V", "960 V"],
        answerIndex: 0,
        explanation:
          "Vs/Vp = Ns/Np, so Vs = 240 × (50/200) = 240 × 0.25 = 60 V. Fewer secondary turns gives a step-down transformer.",
        difficulty: "core",
        hints: [
          "Use Vs/Vp = Ns/Np.",
          "The turns ratio is 50/200 = 0.25.",
          "Multiply 240 V by 0.25.",
        ],
        strategy: "apply the transformer turns equation",
      },
      {
        id: "exam-physics-m4-16",
        question:
          "An ideal step-up transformer raises the voltage. What happens to the current in the secondary compared with the primary?",
        options: [
          "It also increases.",
          "It decreases.",
          "It stays the same.",
          "It becomes zero.",
        ],
        answerIndex: 1,
        explanation:
          "An ideal transformer conserves power: VpIp = VsIs. If the voltage is stepped up, the current must step down in the same ratio so that power is conserved.",
        difficulty: "core",
        hints: [
          "An ideal transformer conserves power.",
          "Power in = power out: VpIp = VsIs.",
          "If voltage rises, current must fall.",
        ],
        strategy: "use power conservation in a transformer",
      },
      {
        id: "exam-physics-m4-17",
        question:
          "Why is electrical power transmitted across the country at very high voltage?",
        options: [
          "To make the cables lighter",
          "To reduce the current, lowering energy lost as heat in the cables",
          "To increase the current in the cables",
          "Because high voltage is safer to touch",
        ],
        answerIndex: 1,
        explanation:
          "For a given power, higher voltage means lower current. Power lost in the cables is I²R, so reducing the current greatly reduces heat losses, making transmission far more efficient.",
        difficulty: "challenge",
        hints: [
          "Power = VI, so high V means low I.",
          "Heat loss in cables is I²R.",
          "Lower current dramatically lowers the loss.",
        ],
        strategy: "explain high-voltage transmission",
      },
      {
        id: "exam-physics-m4-18",
        question:
          "Which type of radiation is a high-energy electron emitted from a nucleus?",
        options: ["Alpha", "Beta-minus", "Gamma", "Neutron"],
        answerIndex: 1,
        explanation:
          "Beta-minus radiation is a fast-moving electron emitted when a neutron in the nucleus changes into a proton. Alpha is a helium nucleus and gamma is electromagnetic radiation.",
        difficulty: "warmup",
        strategy: "identify types of radiation",
      },
      {
        id: "exam-physics-m4-19",
        question:
          "Which type of nuclear radiation is the most ionising but the least penetrating?",
        options: ["Alpha", "Beta", "Gamma", "X-ray"],
        answerIndex: 0,
        explanation:
          "Alpha particles are large and highly charged, so they ionise strongly but lose energy quickly and are stopped by a sheet of paper or a few centimetres of air — the least penetrating.",
        difficulty: "challenge",
        hints: [
          "More charge and mass means more ionisation.",
          "Strong ionisers lose energy fastest.",
          "Alpha is stopped by paper.",
        ],
        strategy: "compare ionising and penetrating power",
      },
      {
        id: "exam-physics-m4-20",
        question:
          "A radioactive isotope has a half-life of 6.0 hours. A sample starts with 800 undecayed nuclei. How many remain after 18 hours?",
        options: ["400", "200", "100", "50"],
        answerIndex: 2,
        explanation:
          "18 hours is three half-lives (18/6.0 = 3). The count halves each time: 800 → 400 → 200 → 100. So 100 nuclei remain.",
        difficulty: "core",
        hints: [
          "Find how many half-lives have passed.",
          "18/6.0 = 3 half-lives.",
          "Halve the number three times.",
        ],
        strategy: "apply half-life to count down",
      },
      {
        id: "exam-physics-m4-21",
        question:
          "In the nuclide notation, an atom of carbon-14 is written with proton number 6 and nucleon number 14. How many neutrons does it contain?",
        options: ["6", "8", "14", "20"],
        answerIndex: 1,
        explanation:
          "Number of neutrons = nucleon number − proton number = 14 − 6 = 8.",
        difficulty: "core",
        strategy: "use nucleon and proton numbers",
      },
      {
        id: "exam-physics-m4-22",
        question:
          "When a nucleus emits an alpha particle, how do its nucleon number and proton number change?",
        options: [
          "Nucleon number falls by 4, proton number falls by 2.",
          "Nucleon number falls by 2, proton number falls by 4.",
          "Nucleon number unchanged, proton number rises by 1.",
          "Both increase by 2.",
        ],
        answerIndex: 0,
        explanation:
          "An alpha particle is a helium nucleus (2 protons, 2 neutrons), so emitting it reduces the nucleon number by 4 and the proton number by 2, forming a new element.",
        difficulty: "challenge",
        hints: [
          "An alpha particle contains 2 protons and 2 neutrons.",
          "Total nucleons removed = 4.",
          "Protons removed = 2.",
        ],
        strategy: "track changes in alpha decay",
      },
      {
        id: "exam-physics-m4-23",
        question:
          "Which statement about the life cycle of a star like the Sun is correct?",
        options: [
          "It will explode as a supernova and become a black hole.",
          "It will swell into a red giant, then become a white dwarf.",
          "It will become a neutron star.",
          "It will remain a main-sequence star forever.",
        ],
        answerIndex: 1,
        explanation:
          "A star of about the Sun's mass spends most of its life on the main sequence, then expands into a red giant, sheds its outer layers as a planetary nebula and ends as a white dwarf. Supernovae, neutron stars and black holes form from much more massive stars.",
        difficulty: "core",
        hints: [
          "The Sun is a low-to-medium mass star.",
          "Such stars do not go supernova.",
          "They end as small, dense white dwarfs.",
        ],
        strategy: "recall stellar evolution for Sun-like stars",
      },
      {
        id: "exam-physics-m4-24",
        question:
          "What is the main source of energy released by the Sun?",
        options: [
          "Chemical burning of hydrogen",
          "Nuclear fusion of hydrogen nuclei into helium",
          "Nuclear fission of uranium",
          "Radioactive decay of carbon",
        ],
        answerIndex: 1,
        explanation:
          "The Sun's energy comes from nuclear fusion: hydrogen nuclei fuse to form helium under enormous pressure and temperature in the core, releasing huge amounts of energy.",
        difficulty: "warmup",
        strategy: "recall the Sun's energy source",
      },
      {
        id: "exam-physics-m4-25",
        question:
          "Light from distant galaxies shows red-shift, and more distant galaxies show greater red-shift. This is evidence that:",
        options: [
          "The galaxies are cooling down.",
          "The Universe is expanding, with more distant galaxies receding faster.",
          "Light slows as it travels.",
          "The galaxies are moving towards us.",
        ],
        answerIndex: 1,
        explanation:
          "Red-shift means the wavelength of light is stretched as galaxies move away. Greater red-shift for more distant galaxies shows they recede faster, which is strong evidence for an expanding Universe and supports the Big Bang theory.",
        difficulty: "challenge",
        hints: [
          "Red-shift means moving away.",
          "More distant galaxies are shifted more.",
          "Faster recession with distance implies expansion.",
        ],
        strategy: "interpret red-shift as evidence for expansion",
      },
    ],
  },
];
