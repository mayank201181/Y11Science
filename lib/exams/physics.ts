import type { ComprehensiveExam } from "../types";

export const physicsExam: ComprehensiveExam = {
  id: "exam-physics",
  subject: "physics",
  title: "Physics — Full Mock Exam",

  mcqPapers: [
    {
      id: "exam-physics-mcq-1",
      title: "Mock Exam — MCQ Paper 1",
      description:
        "25 multiple-choice questions spanning the full Cambridge IGCSE 0625 Extended syllabus. Allow 45 minutes.",
      questions: [
        {
          id: "exam-physics-mcq-p1-01",
          question:
            "Which of these is a vector quantity?",
          options: ["Speed", "Mass", "Velocity", "Energy"],
          answerIndex: 2,
          explanation:
            "A vector has both magnitude and direction. Velocity is speed in a stated direction. Speed, mass and energy are scalars (magnitude only).",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p1-02",
          question:
            "A car travels 150 m in 6.0 s at constant speed. What is its speed?",
          options: ["0.04 m/s", "25 m/s", "900 m/s", "144 m/s"],
          answerIndex: 1,
          explanation:
            "Speed = distance ÷ time = 150 ÷ 6.0 = 25 m/s. Option C multiplies; option A inverts the division.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p1-03",
          question:
            "A ball is dropped from rest. Ignoring air resistance, what is its speed after 3.0 s? (g = 10 m/s²)",
          options: ["3.3 m/s", "10 m/s", "30 m/s", "90 m/s"],
          answerIndex: 2,
          explanation:
            "v = u + at = 0 + 10 × 3.0 = 30 m/s. Option D is the distance fallen (½gt² = 45 m is actually distance; 90 comes from gt²).",
          difficulty: "core",
          hints: [
            "Starts from rest, so u = 0.",
            "Use v = u + at with a = g.",
            "v = gt = 10 × 3.0.",
          ],
        },
        {
          id: "exam-physics-mcq-p1-04",
          question:
            "A 5.0 kg object has a resultant force of 20 N acting on it. What is its acceleration?",
          options: ["4.0 m/s²", "0.25 m/s²", "100 m/s²", "15 m/s²"],
          answerIndex: 0,
          explanation:
            "a = F/m = 20/5.0 = 4.0 m/s². Option B inverts; option C multiplies.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p1-05",
          question:
            "The weight of an object on Earth (g = 10 N/kg) is 80 N. What is its mass?",
          options: ["800 kg", "80 kg", "0.8 kg", "8.0 kg"],
          answerIndex: 3,
          explanation:
            "W = mg, so m = W/g = 80/10 = 8.0 kg. Mass is unchanged anywhere; only weight depends on g.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p1-06",
          question:
            "A spring obeys Hooke's law. A 2.0 N force extends it by 4.0 cm. What extension is produced by a 5.0 N force?",
          options: ["8.0 cm", "1.6 cm", "10 cm", "20 cm"],
          answerIndex: 2,
          explanation:
            "Extension ∝ force (Hooke's law). k = F/x = 2.0/4.0 = 0.50 N/cm. x = F/k = 5.0/0.50 = 10 cm. Or by ratio: 4.0 × (5.0/2.0) = 10 cm.",
          difficulty: "core",
          hints: [
            "Hooke's law: extension is proportional to force.",
            "Find the spring constant from the first pair of values.",
            "Then scale up to the new force.",
          ],
        },
        {
          id: "exam-physics-mcq-p1-07",
          question:
            "A force of 12 N acts at a perpendicular distance of 0.50 m from a pivot. What is the moment?",
          options: ["24 N m", "12.5 N m", "0.042 N m", "6.0 N m"],
          answerIndex: 3,
          explanation:
            "Moment = force × perpendicular distance = 12 × 0.50 = 6.0 N m. Option A divides by 0.5 instead of multiplying.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p1-08",
          question:
            "A pressure of 200 Pa is exerted by a force on an area of 0.50 m². What is the force?",
          options: ["400 N", "0.0025 N", "200 N", "100 N"],
          answerIndex: 3,
          explanation:
            "p = F/A, so F = pA = 200 × 0.50 = 100 N. Option A divides instead of multiplying.",
          difficulty: "core",
          hints: [
            "Pressure = force ÷ area.",
            "Rearrange to F = p × A.",
            "F = 200 × 0.50.",
          ],
        },
        {
          id: "exam-physics-mcq-p1-09",
          question:
            "The pressure due to a column of liquid of density 1000 kg/m³ at a depth of 2.0 m is: (g = 10 m/s²)",
          options: ["2.0 × 10⁴ Pa", "2000 Pa", "5.0 Pa", "2.0 × 10⁵ Pa"],
          answerIndex: 0,
          explanation:
            "p = ρgh = 1000 × 10 × 2.0 = 20 000 Pa = 2.0 × 10⁴ Pa. Option B omits g; option D adds atmospheric incorrectly.",
          difficulty: "core",
          hints: [
            "Use p = ρgh.",
            "ρ = 1000, g = 10, h = 2.0.",
            "Multiply all three together.",
          ],
        },
        {
          id: "exam-physics-mcq-p1-10",
          question:
            "Which energy transfer occurs in a hydroelectric power station as water falls and turns a turbine connected to a generator?",
          options: [
            "Chemical → kinetic → electrical",
            "Gravitational potential → kinetic → electrical",
            "Nuclear → thermal → electrical",
            "Elastic → kinetic → electrical",
          ],
          answerIndex: 1,
          explanation:
            "Stored water has gravitational potential energy; as it falls this becomes kinetic energy of moving water, which turns the turbine/generator to produce electrical energy.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p1-11",
          question:
            "A machine has a useful power output of 600 W and a total power input of 800 W. What is its efficiency?",
          options: ["75%", "133%", "25%", "48%"],
          answerIndex: 0,
          explanation:
            "Efficiency = useful output ÷ total input × 100 = 600/800 × 100 = 75%.",
          difficulty: "core",
          hints: [
            "Efficiency = useful energy (or power) out ÷ total in.",
            "Multiply by 100 for a percentage.",
            "600 ÷ 800 = 0.75.",
          ],
        },
        {
          id: "exam-physics-mcq-p1-12",
          question:
            "Which statement best describes the arrangement and motion of particles in a gas?",
          options: [
            "Closely packed in a regular lattice, vibrating about fixed positions",
            "Closely packed but irregular, able to slide past each other",
            "Far apart, moving rapidly and randomly in all directions",
            "Far apart, fixed in position and not moving",
          ],
          answerIndex: 2,
          explanation:
            "In a gas, particles are far apart with negligible forces between them, moving rapidly and randomly. Option A describes a solid; option B a liquid.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p1-13",
          question:
            "A fixed mass of gas at constant temperature has its volume halved. By Boyle's law, the new pressure is:",
          options: [
            "Halved",
            "Doubled",
            "Unchanged",
            "Quartered",
          ],
          answerIndex: 1,
          explanation:
            "At constant temperature pV = constant. If V halves, p must double to keep the product constant.",
          difficulty: "core",
          hints: [
            "Boyle's law: pV = constant at constant temperature.",
            "If volume goes down, pressure goes up.",
            "Half the volume means double the pressure.",
          ],
        },
        {
          id: "exam-physics-mcq-p1-14",
          question:
            "How much energy is needed to raise the temperature of 0.50 kg of water by 30 °C? (c = 4200 J/(kg °C))",
          options: ["6.3 × 10⁴ J", "2.5 × 10⁵ J", "1.26 × 10⁵ J", "63 J"],
          answerIndex: 0,
          explanation:
            "Q = mcΔT = 0.50 × 4200 × 30 = 63 000 J = 6.3 × 10⁴ J.",
          difficulty: "core",
          hints: [
            "Use Q = mcΔT.",
            "m = 0.50, c = 4200, ΔT = 30.",
            "Multiply all three.",
          ],
        },
        {
          id: "exam-physics-mcq-p1-15",
          question:
            "Which method of heat transfer can occur through a vacuum?",
          options: ["Conduction", "Convection", "Radiation", "Evaporation"],
          answerIndex: 2,
          explanation:
            "Thermal radiation is electromagnetic (infrared) and needs no medium, so it can cross a vacuum. Conduction and convection both need particles.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p1-16",
          question:
            "A wave has frequency 50 Hz and wavelength 6.0 m. What is its speed?",
          options: ["300 m/s", "56 m/s", "8.3 m/s", "0.12 m/s"],
          answerIndex: 0,
          explanation:
            "v = fλ = 50 × 6.0 = 300 m/s. Option B adds; option C divides.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p1-17",
          question:
            "Light passes from air into water. Which quantities change?",
          options: [
            "Frequency only",
            "Speed and wavelength, but not frequency",
            "Frequency and speed, but not wavelength",
            "All three are unchanged",
          ],
          answerIndex: 1,
          explanation:
            "At a boundary the frequency is fixed by the source. Speed decreases in water and wavelength decreases in proportion (v = fλ), but frequency stays the same.",
          difficulty: "core",
          hints: [
            "Frequency is set by the source, not the medium.",
            "v = fλ, with f constant.",
            "If v changes, λ must change too.",
          ],
        },
        {
          id: "exam-physics-mcq-p1-18",
          question:
            "Which list of electromagnetic waves is in order of increasing frequency?",
          options: [
            "Radio, infrared, visible, X-rays",
            "X-rays, visible, infrared, radio",
            "Visible, infrared, radio, X-rays",
            "Infrared, radio, X-rays, visible",
          ],
          answerIndex: 0,
          explanation:
            "Increasing frequency (decreasing wavelength): radio < microwave < infrared < visible < ultraviolet < X-rays < gamma. Option A follows this order.",
          difficulty: "core",
          hints: [
            "Recall the EM spectrum order by wavelength.",
            "Radio has the longest wavelength (lowest frequency).",
            "Frequency increases as wavelength decreases.",
          ],
        },
        {
          id: "exam-physics-mcq-p1-19",
          question:
            "A resistor has a current of 2.0 A through it when the voltage across it is 12 V. What is its resistance?",
          options: ["24 Ω", "0.17 Ω", "14 Ω", "6.0 Ω"],
          answerIndex: 3,
          explanation:
            "R = V/I = 12/2.0 = 6.0 Ω. Option A multiplies V × I.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p1-20",
          question:
            "Two 6.0 Ω resistors are connected in parallel. What is the combined resistance?",
          options: ["12 Ω", "6.0 Ω", "3.0 Ω", "0.33 Ω"],
          answerIndex: 2,
          explanation:
            "For two equal resistors in parallel, R = R/2 = 6.0/2 = 3.0 Ω. (1/R = 1/6 + 1/6 = 2/6, so R = 3.0 Ω.)",
          difficulty: "core",
          hints: [
            "For parallel resistors, 1/R = 1/R₁ + 1/R₂.",
            "Two equal resistors in parallel give half the resistance.",
            "6.0 ÷ 2 = 3.0 Ω.",
          ],
        },
        {
          id: "exam-physics-mcq-p1-21",
          question:
            "An appliance is rated 230 V, 2.0 A. What is its power?",
          options: ["115 W", "230 W", "0.0087 W", "460 W"],
          answerIndex: 3,
          explanation:
            "P = VI = 230 × 2.0 = 460 W. Option A divides.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p1-22",
          question:
            "A current-carrying wire is placed in a magnetic field, perpendicular to it. What is the direction of the force on the wire?",
          options: [
            "Parallel to the current",
            "Parallel to the magnetic field",
            "Perpendicular to both the current and the field",
            "There is no force",
          ],
          answerIndex: 2,
          explanation:
            "The motor effect produces a force perpendicular to both the current and the magnetic field, given by Fleming's left-hand rule.",
          difficulty: "core",
          hints: [
            "This is the motor effect.",
            "Use Fleming's left-hand rule.",
            "The force is at right angles to both current and field.",
          ],
        },
        {
          id: "exam-physics-mcq-p1-23",
          question:
            "A transformer has 200 turns on the primary and 50 turns on the secondary. If the primary voltage is 240 V, what is the secondary voltage?",
          options: ["960 V", "240 V", "15 V", "60 V"],
          answerIndex: 3,
          explanation:
            "Vs/Vp = Ns/Np → Vs = 240 × (50/200) = 240 × 0.25 = 60 V. It is a step-down transformer.",
          difficulty: "core",
          hints: [
            "Vp/Vs = Np/Ns.",
            "Fewer secondary turns means lower secondary voltage.",
            "Vs = 240 × 50/200.",
          ],
        },
        {
          id: "exam-physics-mcq-p1-24",
          question:
            "Which type of nuclear radiation is the most penetrating?",
          options: [
            "Alpha",
            "Beta",
            "Gamma",
            "All are equally penetrating",
          ],
          answerIndex: 2,
          explanation:
            "Gamma radiation is the most penetrating (stopped only by thick lead/concrete). Alpha is the least penetrating (stopped by paper); beta is intermediate (stopped by a few mm of aluminium).",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p1-25",
          question:
            "A radioactive isotope has a half-life of 8.0 days. What fraction of the original sample remains after 24 days?",
          options: ["1/2", "1/3", "1/8", "1/6"],
          answerIndex: 2,
          explanation:
            "24 days = 3 half-lives. After each half-life the amount halves: 1 → 1/2 → 1/4 → 1/8. So 1/8 remains.",
          difficulty: "core",
          hints: [
            "Number of half-lives = total time ÷ half-life.",
            "24 ÷ 8 = 3 half-lives.",
            "Halve three times: (1/2)³ = 1/8.",
          ],
        },
      ],
    },
    {
      id: "exam-physics-mcq-2",
      title: "Mock Exam — MCQ Paper 2",
      description:
        "25 multiple-choice questions spanning the full Cambridge IGCSE 0625 Extended syllabus. Allow 45 minutes.",
      questions: [
        {
          id: "exam-physics-mcq-p2-01",
          question:
            "What is the SI unit of acceleration?",
          options: ["m/s", "m/s²", "m²/s", "N"],
          answerIndex: 1,
          explanation:
            "Acceleration is the rate of change of velocity, so its unit is (m/s)/s = m/s². Option A is velocity; option D is force.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p2-02",
          question:
            "An object travels at a constant velocity. What is the resultant force on it?",
          options: ["Equal to its weight", "Zero", "Equal to ma", "Increasing"],
          answerIndex: 1,
          explanation:
            "Constant velocity means no acceleration, so by Newton's first law the resultant (net) force is zero; the forces are balanced.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p2-03",
          question:
            "A 1500 kg car accelerates from 10 m/s to 30 m/s in 8.0 s. What resultant force acts on it?",
          options: ["3750 N", "5625 N", "37 500 N", "300 N"],
          answerIndex: 0,
          explanation:
            "a = Δv/t = (30 − 10)/8.0 = 2.5 m/s². F = ma = 1500 × 2.5 = 3750 N.",
          difficulty: "core",
          hints: [
            "First find the acceleration: a = (v − u)/t.",
            "Then apply F = ma.",
            "a = 20/8.0 = 2.5 m/s².",
          ],
        },
        {
          id: "exam-physics-mcq-p2-04",
          question:
            "A skydiver reaches terminal velocity. This happens when:",
          options: [
            "Air resistance is zero",
            "Weight is greater than air resistance",
            "Air resistance equals weight, giving zero resultant force",
            "The skydiver stops moving",
          ],
          answerIndex: 2,
          explanation:
            "At terminal velocity the upward air resistance has grown to equal the downward weight; the resultant force is zero so acceleration is zero and velocity is constant.",
          difficulty: "core",
          hints: [
            "Terminal velocity means constant velocity.",
            "Constant velocity means balanced forces.",
            "Air resistance increases with speed until it matches weight.",
          ],
        },
        {
          id: "exam-physics-mcq-p2-05",
          question:
            "The momentum of a 0.20 kg ball moving at 15 m/s is:",
          options: ["3.0 kg m/s", "75 kg m/s", "0.013 kg m/s", "30 kg m/s"],
          answerIndex: 0,
          explanation:
            "p = mv = 0.20 × 15 = 3.0 kg m/s.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p2-06",
          question:
            "A uniform metre rule is pivoted at its centre. A 2.0 N weight hangs at the 20 cm mark. To balance it, a 4.0 N weight should hang at:",
          options: ["65 cm", "70 cm", "80 cm", "60 cm"],
          answerIndex: 0,
          explanation:
            "Pivot at 50 cm. Anticlockwise moment = 2.0 × (50 − 20) = 2.0 × 30 = 60 N cm. For balance, 4.0 × d = 60 → d = 15 cm from pivot, so at 50 + 15 = 65 cm.",
          difficulty: "challenge",
          hints: [
            "Take moments about the central pivot.",
            "Moment = force × distance from pivot.",
            "Set clockwise moment = anticlockwise moment, then find the distance and add to 50 cm.",
          ],
        },
        {
          id: "exam-physics-mcq-p2-07",
          question:
            "The density of a 240 g block of volume 30 cm³ is:",
          options: ["8.0 g/cm³", "0.125 g/cm³", "7200 g/cm³", "270 g/cm³"],
          answerIndex: 0,
          explanation:
            "ρ = m/V = 240/30 = 8.0 g/cm³.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p2-08",
          question:
            "A hydraulic system has a small piston of area 0.0020 m² and a large piston of area 0.040 m². A force of 50 N is applied to the small piston. What force is exerted by the large piston?",
          options: ["2.5 N", "1000 N", "500 N", "100 N"],
          answerIndex: 1,
          explanation:
            "Pressure is transmitted equally: p = 50/0.0020 = 25 000 Pa. Force on large piston = p × A = 25 000 × 0.040 = 1000 N. (Force multiplies by the area ratio 0.040/0.0020 = 20.)",
          difficulty: "challenge",
          hints: [
            "Pressure is the same throughout the fluid.",
            "p = F/A on the small piston.",
            "Multiply that pressure by the large area.",
          ],
        },
        {
          id: "exam-physics-mcq-p2-09",
          question:
            "How much work is done lifting a 25 N box through a vertical height of 3.0 m?",
          options: ["8.3 J", "75 J", "28 J", "750 J"],
          answerIndex: 1,
          explanation:
            "W = Fd = 25 × 3.0 = 75 J (force is the weight, distance is the height moved in the direction of the force).",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p2-10",
          question:
            "A 0.40 kg ball moving at 5.0 m/s has kinetic energy of:",
          options: ["1.0 J", "2.0 J", "10 J", "5.0 J"],
          answerIndex: 3,
          explanation:
            "KE = ½mv² = ½ × 0.40 × 5.0² = ½ × 0.40 × 25 = 5.0 J.",
          difficulty: "core",
          hints: [
            "Use KE = ½mv².",
            "Square the speed first: 5.0² = 25.",
            "½ × 0.40 × 25.",
          ],
        },
        {
          id: "exam-physics-mcq-p2-11",
          question:
            "Which of these is a renewable energy resource?",
          options: ["Coal", "Natural gas", "Wind", "Nuclear (uranium)"],
          answerIndex: 2,
          explanation:
            "Wind is renewable — it is replenished continuously. Coal, gas (fossil fuels) and uranium are non-renewable.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p2-12",
          question:
            "An immersion heater supplies 84 000 J to a 2.0 kg block of metal, raising its temperature by 50 °C. What is the specific heat capacity of the metal?",
          options: ["840 J/(kg °C)", "420 J/(kg °C)", "8.4 × 10⁶ J/(kg °C)", "1680 J/(kg °C)"],
          answerIndex: 0,
          explanation:
            "Q = mcΔT → c = Q/(mΔT) = 84 000/(2.0 × 50) = 84 000/100 = 840 J/(kg °C).",
          difficulty: "core",
          hints: [
            "Rearrange Q = mcΔT for c.",
            "c = Q/(mΔT).",
            "Denominator: 2.0 × 50 = 100.",
          ],
        },
        {
          id: "exam-physics-mcq-p2-13",
          question:
            "When a liquid evaporates, the temperature of the remaining liquid tends to fall because:",
          options: [
            "The slowest molecules escape, lowering the average energy",
            "The fastest, most energetic molecules escape, lowering the average energy",
            "Energy is added to the liquid",
            "The liquid expands",
          ],
          answerIndex: 1,
          explanation:
            "Evaporation lets the most energetic molecules escape from the surface, so the average kinetic energy of those remaining falls and the temperature drops (cooling effect).",
          difficulty: "core",
          hints: [
            "Temperature relates to average kinetic energy.",
            "Which molecules can escape the surface?",
            "Losing the fastest molecules lowers the average.",
          ],
        },
        {
          id: "exam-physics-mcq-p2-14",
          question:
            "A gas at 27 °C is heated at constant pressure. To double its volume, its temperature (in K) must be:",
          options: ["54 °C", "600 K", "327 K", "300 K"],
          answerIndex: 1,
          explanation:
            "At constant pressure V ∝ T (in kelvin). 27 °C = 300 K. To double V, T must double to 600 K (= 327 °C). Option A wrongly doubles the Celsius value.",
          difficulty: "challenge",
          hints: [
            "Convert temperature to kelvin: K = °C + 273.",
            "At constant pressure, V ∝ T (kelvin).",
            "Double the kelvin temperature, not the Celsius.",
          ],
        },
        {
          id: "exam-physics-mcq-p2-15",
          question:
            "Which property of a sound wave determines its loudness?",
          options: ["Frequency", "Wavelength", "Amplitude", "Speed"],
          answerIndex: 2,
          explanation:
            "Amplitude determines loudness (larger amplitude = louder). Frequency determines pitch.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p2-16",
          question:
            "An echo returns 0.40 s after a sound is made. If the speed of sound is 340 m/s, how far away is the reflecting surface?",
          options: ["136 m", "850 m", "272 m", "68 m"],
          answerIndex: 3,
          explanation:
            "Total distance = v × t = 340 × 0.40 = 136 m. This is there-and-back, so distance to wall = 136/2 = 68 m.",
          difficulty: "core",
          hints: [
            "The sound travels to the wall and back.",
            "Total distance = speed × time.",
            "Halve the total to get the distance to the wall.",
          ],
        },
        {
          id: "exam-physics-mcq-p2-17",
          question:
            "A ray of light reflects from a plane mirror. The angle of incidence is 35°. What is the angle of reflection?",
          options: ["55°", "70°", "35°", "0°"],
          answerIndex: 2,
          explanation:
            "The law of reflection states angle of reflection = angle of incidence (both measured from the normal). So 35°.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p2-18",
          question:
            "Light travels from air into a transparent material. The angle of incidence is 50° and the angle of refraction is 30°. The refractive index is: (sin 50° = 0.766, sin 30° = 0.500)",
          options: ["1.53", "0.65", "1.67", "0.92"],
          answerIndex: 0,
          explanation:
            "n = sin i / sin r = sin 50° / sin 30° = 0.766/0.500 = 1.53.",
          difficulty: "core",
          hints: [
            "Use n = sin i / sin r.",
            "Incidence is in air, refraction in the material.",
            "0.766 ÷ 0.500.",
          ],
        },
        {
          id: "exam-physics-mcq-p2-19",
          question:
            "A converging (convex) lens is used as a magnifying glass. The object must be placed:",
          options: [
            "Beyond 2F",
            "At 2F",
            "Between the lens and the focal point F",
            "At the focal point F",
          ],
          answerIndex: 2,
          explanation:
            "Placing the object inside the focal length produces a magnified, upright, virtual image — this is how a magnifying glass works.",
          difficulty: "core",
          hints: [
            "A magnifying glass gives an upright, virtual, enlarged image.",
            "This requires the object inside the focal length.",
            "Object distance < f.",
          ],
        },
        {
          id: "exam-physics-mcq-p2-20",
          question:
            "How much charge flows when a current of 3.0 A flows for 20 s?",
          options: ["6.7 C", "0.15 C", "23 C", "60 C"],
          answerIndex: 3,
          explanation:
            "Q = It = 3.0 × 20 = 60 C.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p2-21",
          question:
            "In a series circuit with a 12 V battery and two resistors of 4.0 Ω and 8.0 Ω, the current is:",
          options: ["3.0 A", "1.5 A", "1.0 A", "0.5 A"],
          answerIndex: 2,
          explanation:
            "Total resistance in series = 4.0 + 8.0 = 12 Ω. I = V/R = 12/12 = 1.0 A.",
          difficulty: "core",
          hints: [
            "Add series resistances to get the total.",
            "Then apply I = V/R.",
            "Total R = 12 Ω.",
          ],
        },
        {
          id: "exam-physics-mcq-p2-22",
          question:
            "Which material is the best electrical insulator?",
          options: ["Copper", "Plastic", "Iron", "Silver"],
          answerIndex: 1,
          explanation:
            "Plastic is an insulator (few free charges). Copper, iron and silver are conductors (silver and copper are excellent conductors).",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p2-23",
          question:
            "A wire carries a current at right angles to a magnetic field. To reverse the direction of the force on the wire, you could:",
          options: [
            "Increase the current",
            "Reverse the current direction only",
            "Increase the magnetic field strength",
            "Move the wire faster",
          ],
          answerIndex: 1,
          explanation:
            "Reversing the current (or reversing the field) reverses the force direction. Increasing current or field strength changes the size of the force, not its direction.",
          difficulty: "core",
          hints: [
            "Use Fleming's left-hand rule.",
            "Force direction depends on current and field directions.",
            "Reversing either one reverses the force.",
          ],
        },
        {
          id: "exam-physics-mcq-p2-24",
          question:
            "An ideal transformer steps 240 V down to 12 V. If the output current is 5.0 A, the input current is: (assume 100% efficiency)",
          options: ["0.25 A", "5.0 A", "100 A", "20 A"],
          answerIndex: 0,
          explanation:
            "For an ideal transformer, power in = power out: Vp Ip = Vs Is → Ip = (Vs Is)/Vp = (12 × 5.0)/240 = 60/240 = 0.25 A.",
          difficulty: "challenge",
          hints: [
            "For an ideal transformer, power in = power out.",
            "Vp Ip = Vs Is.",
            "Ip = (12 × 5.0)/240.",
          ],
        },
        {
          id: "exam-physics-mcq-p2-25",
          question:
            "An atom of an element has nucleon number 23 and proton number 11. How many neutrons does it have?",
          options: ["11", "12", "23", "34"],
          answerIndex: 1,
          explanation:
            "Number of neutrons = nucleon number − proton number = 23 − 11 = 12.",
          difficulty: "warmup",
        },
      ],
    },
    {
      id: "exam-physics-mcq-3",
      title: "Mock Exam — MCQ Paper 3",
      description:
        "25 multiple-choice questions spanning the full Cambridge IGCSE 0625 Extended syllabus. Allow 45 minutes.",
      questions: [
        {
          id: "exam-physics-mcq-p3-01",
          question:
            "A cyclist travels 1.2 km in 4.0 minutes. What is the average speed in m/s?",
          options: ["5.0 m/s", "0.30 m/s", "300 m/s", "18 m/s"],
          answerIndex: 0,
          explanation:
            "1.2 km = 1200 m; 4.0 min = 240 s. v = 1200/240 = 5.0 m/s.",
          difficulty: "core",
          hints: [
            "Convert km to m and minutes to seconds.",
            "1200 m and 240 s.",
            "Speed = distance ÷ time.",
          ],
        },
        {
          id: "exam-physics-mcq-p3-02",
          question:
            "The area under a speed–time graph represents:",
          options: ["Acceleration", "Distance travelled", "Force", "Velocity"],
          answerIndex: 1,
          explanation:
            "On a speed–time graph the gradient gives acceleration and the area underneath gives the distance travelled.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p3-03",
          question:
            "A 0.50 kg ball hits a wall at 8.0 m/s and bounces straight back at 6.0 m/s. The magnitude of the change in momentum is:",
          options: ["1.0 kg m/s", "7.0 kg m/s", "14 kg m/s", "10 kg m/s"],
          answerIndex: 1,
          explanation:
            "Taking towards the wall as positive: initial p = 0.50 × 8.0 = +4.0; final p = 0.50 × (−6.0) = −3.0. Change = final − initial = −3.0 − 4.0 = −7.0 kg m/s, magnitude 7.0 kg m/s.",
          difficulty: "challenge",
          hints: [
            "Momentum is a vector — assign opposite signs to opposite directions.",
            "Change = final momentum − initial momentum.",
            "0.50 × (−6.0) − 0.50 × (8.0).",
          ],
        },
        {
          id: "exam-physics-mcq-p3-04",
          question:
            "The extension of a spring is plotted against the load. Beyond a certain point the line curves. This point is the:",
          options: ["Spring constant", "Limit of proportionality", "Resultant force", "Centre of mass"],
          answerIndex: 1,
          explanation:
            "Up to the limit of proportionality the extension is proportional to load (Hooke's law, straight line). Beyond it the graph curves and Hooke's law no longer holds.",
          difficulty: "core",
          hints: [
            "Hooke's law gives a straight line.",
            "Where does proportionality stop?",
            "It is called the limit of proportionality.",
          ],
        },
        {
          id: "exam-physics-mcq-p3-05",
          question:
            "Two forces of 8.0 N and 6.0 N act at right angles on a point. The magnitude of the resultant is:",
          options: ["14 N", "2.0 N", "10 N", "48 N"],
          answerIndex: 2,
          explanation:
            "Perpendicular forces combine by Pythagoras: R = √(8.0² + 6.0²) = √(64 + 36) = √100 = 10 N.",
          difficulty: "challenge",
          hints: [
            "The forces are perpendicular, so use a vector triangle.",
            "Use Pythagoras: R = √(F₁² + F₂²).",
            "√(64 + 36) = √100.",
          ],
        },
        {
          id: "exam-physics-mcq-p3-06",
          question:
            "Atmospheric pressure is about 1.0 × 10⁵ Pa. The force on a window of area 2.0 m² due to atmospheric pressure is:",
          options: ["2.0 × 10⁵ N", "5.0 × 10⁴ N", "2.0 × 10⁵ Pa", "50 000 N"],
          answerIndex: 0,
          explanation:
            "F = pA = 1.0 × 10⁵ × 2.0 = 2.0 × 10⁵ N. (In practice the force is balanced by air on the other side.)",
          difficulty: "core",
          hints: [
            "Force = pressure × area.",
            "F = pA.",
            "1.0 × 10⁵ × 2.0.",
          ],
        },
        {
          id: "exam-physics-mcq-p3-07",
          question:
            "A 2.0 kW electric motor lifts a load. In 10 s it raises the load through 8.0 m. The useful work output is 16 000 J. What is the efficiency?",
          options: ["80%", "100%", "20%", "50%"],
          answerIndex: 0,
          explanation:
            "Total energy input = P × t = 2000 × 10 = 20 000 J. Efficiency = useful/total × 100 = 16 000/20 000 × 100 = 80%.",
          difficulty: "core",
          hints: [
            "Total input energy = power × time.",
            "Input = 2000 × 10 = 20 000 J.",
            "Efficiency = 16 000 ÷ 20 000 × 100.",
          ],
        },
        {
          id: "exam-physics-mcq-p3-08",
          question:
            "A roller-coaster car of mass 500 kg is at the top of a 20 m drop. Ignoring friction, its speed at the bottom is: (g = 10 m/s²)",
          options: ["20 m/s", "14 m/s", "200 m/s", "10 m/s"],
          answerIndex: 0,
          explanation:
            "mgh = ½mv² → v = √(2gh) = √(2 × 10 × 20) = √400 = 20 m/s. Mass cancels.",
          difficulty: "challenge",
          hints: [
            "GPE at the top converts to KE at the bottom.",
            "mgh = ½mv²; mass cancels.",
            "v = √(2gh) = √400.",
          ],
        },
        {
          id: "exam-physics-mcq-p3-09",
          question:
            "Which statement about specific latent heat of fusion is correct?",
          options: [
            "It is the energy to change the temperature of 1 kg by 1 °C",
            "It is the energy to melt 1 kg of a substance with no temperature change",
            "It is the energy to boil 1 kg of a substance",
            "It depends on the mass of the sample",
          ],
          answerIndex: 1,
          explanation:
            "Specific latent heat of fusion is the energy needed to change 1 kg from solid to liquid at constant temperature. Option A is specific heat capacity; option C is vaporisation.",
          difficulty: "core",
          hints: [
            "Fusion means melting.",
            "Latent heat involves no temperature change.",
            "It is defined per kilogram.",
          ],
        },
        {
          id: "exam-physics-mcq-p3-10",
          question:
            "Ice at 0 °C is converted to water at 0 °C. The specific latent heat of fusion of ice is 3.3 × 10⁵ J/kg. How much energy melts 0.20 kg of ice?",
          options: ["6.6 × 10⁴ J", "1.65 × 10⁶ J", "3.3 × 10⁴ J", "66 J"],
          answerIndex: 0,
          explanation:
            "Q = mL = 0.20 × 3.3 × 10⁵ = 6.6 × 10⁴ J.",
          difficulty: "core",
          hints: [
            "Use Q = mL (constant temperature melting).",
            "m = 0.20, L = 3.3 × 10⁵.",
            "0.20 × 330 000.",
          ],
        },
        {
          id: "exam-physics-mcq-p3-11",
          question:
            "Why is the inside of a vacuum flask silvered?",
          options: [
            "To increase conduction",
            "To reduce heat transfer by radiation",
            "To allow convection currents",
            "To increase evaporation",
          ],
          answerIndex: 1,
          explanation:
            "Shiny silvered surfaces are poor emitters and good reflectors of infrared radiation, reducing heat loss/gain by radiation. The vacuum stops conduction and convection.",
          difficulty: "core",
          hints: [
            "Shiny surfaces and radiation.",
            "Silvered surfaces are poor emitters and good reflectors.",
            "The vacuum already stops conduction/convection.",
          ],
        },
        {
          id: "exam-physics-mcq-p3-12",
          question:
            "A transverse wave differs from a longitudinal wave because in a transverse wave:",
          options: [
            "The vibrations are parallel to the direction of energy travel",
            "The vibrations are perpendicular to the direction of energy travel",
            "It cannot travel through a solid",
            "It has no frequency",
          ],
          answerIndex: 1,
          explanation:
            "In a transverse wave the oscillations are at right angles to the direction of energy transfer. In a longitudinal wave they are parallel (e.g. sound).",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p3-13",
          question:
            "A wave of speed 1500 m/s in water has a frequency of 250 kHz (used in sonar). Its wavelength is:",
          options: ["6.0 m", "0.375 m", "0.006 m", "0.0060 m"],
          answerIndex: 2,
          explanation:
            "λ = v/f = 1500/(250 000) = 0.0060 m = 6.0 mm. (250 kHz = 2.5 × 10⁵ Hz.)",
          difficulty: "core",
          hints: [
            "Rearrange v = fλ for λ.",
            "Convert 250 kHz to 250 000 Hz.",
            "λ = 1500 ÷ 250 000.",
          ],
        },
        {
          id: "exam-physics-mcq-p3-14",
          question:
            "Which electromagnetic radiation is used in optical fibres for high-speed communication?",
          options: ["Radio waves", "Microwaves", "Infrared / visible light", "Gamma rays"],
          answerIndex: 2,
          explanation:
            "Infrared and visible light are guided along optical fibres by total internal reflection for fast, high-capacity communication.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p3-15",
          question:
            "A microwave oven uses radiation of frequency 2.45 × 10⁹ Hz. The speed of EM waves is 3.0 × 10⁸ m/s. The wavelength is approximately:",
          options: ["0.12 m", "8.2 m", "0.012 m", "1.2 m"],
          answerIndex: 0,
          explanation:
            "λ = c/f = (3.0 × 10⁸)/(2.45 × 10⁹) = 0.122 m ≈ 0.12 m.",
          difficulty: "challenge",
          hints: [
            "Use c = fλ, so λ = c/f.",
            "Divide 3.0 × 10⁸ by 2.45 × 10⁹.",
            "Watch the powers of ten: 10⁸/10⁹ = 10⁻¹.",
          ],
        },
        {
          id: "exam-physics-mcq-p3-16",
          question:
            "Which of these increases the resistance of a metal wire?",
          options: [
            "Increasing its length",
            "Increasing its cross-sectional area",
            "Decreasing its length",
            "Cooling it (for most metals)",
          ],
          answerIndex: 0,
          explanation:
            "Resistance increases with length and decreases with cross-sectional area. (For most metals, cooling decreases resistance.) So increasing length increases resistance.",
          difficulty: "core",
          hints: [
            "Think about how electrons flow through a longer path.",
            "Longer wire = more resistance.",
            "Wider wire = less resistance.",
          ],
        },
        {
          id: "exam-physics-mcq-p3-17",
          question:
            "A 60 W lamp operates for 5.0 hours. The energy it transfers is:",
          options: ["300 J", "1.08 × 10⁶ J", "12 J", "3.6 × 10⁵ J"],
          answerIndex: 1,
          explanation:
            "E = Pt; t = 5.0 × 3600 = 18 000 s. E = 60 × 18 000 = 1 080 000 J = 1.08 × 10⁶ J. (Option D would be 100 W; check: 60×18000=1.08×10⁶.)",
          difficulty: "core",
          hints: [
            "Convert hours to seconds: × 3600.",
            "E = P × t.",
            "60 × 18 000.",
          ],
        },
        {
          id: "exam-physics-mcq-p3-18",
          question:
            "Two resistors, 3.0 Ω and 6.0 Ω, are connected in parallel across a 6.0 V supply. The total current from the supply is:",
          options: ["0.67 A", "3.0 A", "1.5 A", "9.0 A"],
          answerIndex: 1,
          explanation:
            "Currents add in parallel: I₁ = 6.0/3.0 = 2.0 A; I₂ = 6.0/6.0 = 1.0 A; total = 3.0 A. (Or R_parallel = 2.0 Ω, I = 6.0/2.0 = 3.0 A.)",
          difficulty: "challenge",
          hints: [
            "In parallel, each resistor has the full supply voltage.",
            "Find each branch current with I = V/R.",
            "Add the branch currents.",
          ],
        },
        {
          id: "exam-physics-mcq-p3-19",
          question:
            "In the UK three-pin plug, the earth wire is connected to a metal appliance casing to:",
          options: [
            "Increase the current",
            "Provide a low-resistance path so a fault current blows the fuse and the case stays safe",
            "Reduce the voltage",
            "Store charge",
          ],
          answerIndex: 1,
          explanation:
            "If a live wire touches the metal case, the earth wire gives a low-resistance path; a large current flows, the fuse melts and disconnects the supply, keeping the case at a safe (earth) potential.",
          difficulty: "core",
          hints: [
            "The earth wire is a safety feature.",
            "It connects the metal case to earth.",
            "A fault current then blows the fuse.",
          ],
        },
        {
          id: "exam-physics-mcq-p3-20",
          question:
            "A straight wire carries a current. The magnetic field pattern around it is:",
          options: [
            "Straight lines along the wire",
            "Concentric circles around the wire",
            "Radial lines pointing outward",
            "No field is produced",
          ],
          answerIndex: 1,
          explanation:
            "A current in a straight wire produces concentric circular magnetic field lines around it; their direction is given by the right-hand grip rule.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p3-21",
          question:
            "A wire of length 0.20 m carries a current of 4.0 A at right angles to a magnetic field of flux density 0.50 T. The force on the wire is:",
          options: ["0.40 N", "0.025 N", "2.5 N", "10 N"],
          answerIndex: 0,
          explanation:
            "F = BIL = 0.50 × 4.0 × 0.20 = 0.40 N.",
          difficulty: "core",
          hints: [
            "Use F = BIL.",
            "B = 0.50, I = 4.0, L = 0.20.",
            "Multiply all three.",
          ],
        },
        {
          id: "exam-physics-mcq-p3-22",
          question:
            "An a.c. generator produces an alternating e.m.f. because:",
          options: [
            "The coil's resistance changes",
            "The coil cuts magnetic field lines and the direction of cutting reverses each half-turn",
            "The magnet gets stronger",
            "The current is direct",
          ],
          answerIndex: 1,
          explanation:
            "As the coil rotates it cuts field lines, inducing an e.m.f.; each half-turn the sides move the opposite way through the field, reversing the e.m.f. and giving alternating current.",
          difficulty: "core",
          hints: [
            "Electromagnetic induction needs the coil to cut field lines.",
            "What happens each half-rotation?",
            "The direction of induced e.m.f. reverses.",
          ],
        },
        {
          id: "exam-physics-mcq-p3-23",
          question:
            "Beta-minus decay occurs when:",
          options: [
            "A proton changes into a neutron, emitting a positron",
            "A neutron changes into a proton, emitting an electron",
            "An alpha particle is emitted",
            "Two protons are emitted",
          ],
          answerIndex: 1,
          explanation:
            "In β⁻ decay a neutron becomes a proton, emitting a fast electron (the beta particle). The proton number increases by 1; the nucleon number is unchanged.",
          difficulty: "core",
          hints: [
            "A beta-minus particle is a high-speed electron.",
            "It comes from a neutron in the nucleus.",
            "Neutron → proton + electron.",
          ],
        },
        {
          id: "exam-physics-mcq-p3-24",
          question:
            "A nuclide is written ²³⁸₉₂U. After emitting one alpha particle, the new nuclide has:",
          options: [
            "Nucleon number 234, proton number 90",
            "Nucleon number 237, proton number 91",
            "Nucleon number 238, proton number 90",
            "Nucleon number 234, proton number 92",
          ],
          answerIndex: 0,
          explanation:
            "An alpha particle is ⁴₂He, so nucleon number falls by 4 (238 → 234) and proton number falls by 2 (92 → 90).",
          difficulty: "challenge",
          hints: [
            "An alpha particle has nucleon number 4, proton number 2.",
            "Subtract 4 from the nucleon number.",
            "Subtract 2 from the proton number.",
          ],
        },
        {
          id: "exam-physics-mcq-p3-25",
          question:
            "Which planet of the Solar System has the longest orbital period?",
          options: ["Mercury", "Earth", "Jupiter", "Neptune"],
          answerIndex: 3,
          explanation:
            "The further a planet is from the Sun, the longer its orbital period. Neptune is the most distant of these and so takes the longest to orbit the Sun.",
          difficulty: "warmup",
        },
      ],
    },
    {
      id: "exam-physics-mcq-4",
      title: "Mock Exam — MCQ Paper 4",
      description:
        "25 multiple-choice questions spanning the full Cambridge IGCSE 0625 Extended syllabus. Allow 45 minutes.",
      questions: [
        {
          id: "exam-physics-mcq-p4-01",
          question:
            "A runner accelerates from 2.0 m/s to 8.0 m/s in 3.0 s. Her acceleration is:",
          options: ["2.0 m/s²", "3.3 m/s²", "10 m/s²", "18 m/s²"],
          answerIndex: 0,
          explanation:
            "a = (v − u)/t = (8.0 − 2.0)/3.0 = 6.0/3.0 = 2.0 m/s².",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p4-02",
          question:
            "Which statement is an example of Newton's third law?",
          options: [
            "A heavier object falls faster",
            "A rocket pushes gas backwards and the gas pushes the rocket forwards",
            "An object at rest stays at rest",
            "Force equals mass times acceleration",
          ],
          answerIndex: 1,
          explanation:
            "Newton's third law: every action has an equal and opposite reaction. The rocket pushes gas back; the gas pushes the rocket forward with an equal force.",
          difficulty: "core",
          hints: [
            "Newton's third law is about action–reaction pairs.",
            "Forces come in equal and opposite pairs on different bodies.",
            "Look for two objects pushing on each other.",
          ],
        },
        {
          id: "exam-physics-mcq-p4-03",
          question:
            "A 1000 kg car moving at 20 m/s collides and sticks to a stationary 1500 kg van. Their common velocity afterwards is:",
          options: ["8.0 m/s", "12 m/s", "20 m/s", "13.3 m/s"],
          answerIndex: 0,
          explanation:
            "Conservation of momentum: (1000 × 20) + 0 = (1000 + 1500)v → 20 000 = 2500v → v = 8.0 m/s.",
          difficulty: "challenge",
          hints: [
            "Total momentum before = total momentum after.",
            "They stick together, so use combined mass after.",
            "20 000 = 2500 × v.",
          ],
        },
        {
          id: "exam-physics-mcq-p4-04",
          question:
            "The centre of mass of a uniform rectangular sheet is located:",
          options: [
            "At one corner",
            "At the midpoint of the longest side",
            "At the point where the diagonals cross",
            "Outside the sheet",
          ],
          answerIndex: 2,
          explanation:
            "For a uniform symmetrical sheet the centre of mass is at its geometric centre — where the diagonals intersect.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p4-05",
          question:
            "An object floats in water. This tells you that the object's density is:",
          options: [
            "Greater than that of water",
            "Equal to that of water",
            "Less than that of water",
            "Zero",
          ],
          answerIndex: 2,
          explanation:
            "An object floats when its average density is less than that of the fluid; the upthrust can then balance its weight.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p4-06",
          question:
            "A diver is 15 m below the surface of seawater of density 1030 kg/m³. The pressure due to the water alone is: (g = 10 m/s²)",
          options: ["1.5 × 10⁵ Pa", "6.9 × 10² Pa", "1.55 × 10⁵ Pa", "1.03 × 10⁴ Pa"],
          answerIndex: 2,
          explanation:
            "p = ρgh = 1030 × 10 × 15 = 154 500 Pa ≈ 1.55 × 10⁵ Pa.",
          difficulty: "core",
          hints: [
            "Use p = ρgh.",
            "ρ = 1030, g = 10, h = 15.",
            "1030 × 10 × 15.",
          ],
        },
        {
          id: "exam-physics-mcq-p4-07",
          question:
            "Which of these is a correct unit equivalence?",
          options: ["1 W = 1 J/s", "1 N = 1 kg m", "1 J = 1 N/m", "1 Pa = 1 N m"],
          answerIndex: 0,
          explanation:
            "Power is energy per unit time: 1 watt = 1 joule per second. (1 N = 1 kg m/s²; 1 J = 1 N m; 1 Pa = 1 N/m².)",
          difficulty: "core",
          hints: [
            "Power = energy ÷ time.",
            "The unit of power is the watt.",
            "1 W = 1 J/s.",
          ],
        },
        {
          id: "exam-physics-mcq-p4-08",
          question:
            "A 0.30 kg ball is thrown vertically upward and rises to a maximum height of 5.0 m. The kinetic energy it had at launch was: (g = 10 m/s², ignore air resistance)",
          options: ["1.5 J", "150 J", "50 J", "15 J"],
          answerIndex: 3,
          explanation:
            "At maximum height all KE has become GPE: KE = mgh = 0.30 × 10 × 5.0 = 15 J.",
          difficulty: "core",
          hints: [
            "At the top, KE = 0 and all energy is GPE.",
            "Launch KE = gain in GPE = mgh.",
            "0.30 × 10 × 5.0.",
          ],
        },
        {
          id: "exam-physics-mcq-p4-09",
          question:
            "Which energy resource does NOT ultimately depend on energy from the Sun?",
          options: ["Wind", "Wave", "Geothermal", "Biofuel"],
          answerIndex: 2,
          explanation:
            "Geothermal energy comes from heat within the Earth (largely from radioactive decay), not from the Sun. Wind, waves and biofuels all trace back to solar energy.",
          difficulty: "challenge",
          hints: [
            "Trace each resource back to its origin.",
            "Wind, waves and plants are driven by the Sun.",
            "Which one comes from heat inside the Earth?",
          ],
        },
        {
          id: "exam-physics-mcq-p4-10",
          question:
            "A 0.40 kg metal block at 90 °C is placed in 0.30 kg of water at 20 °C. Assuming no heat loss, the principle used to find the final temperature is:",
          options: [
            "Energy lost by water = energy gained by metal",
            "Energy lost by metal = energy gained by water",
            "The temperatures simply average",
            "The metal stays at 90 °C",
          ],
          answerIndex: 1,
          explanation:
            "Conservation of energy: the hotter metal loses thermal energy and the cooler water gains it. Energy lost by metal = energy gained by water (mcΔT for each).",
          difficulty: "core",
          hints: [
            "Heat flows from hot to cold.",
            "Conservation of energy: heat lost = heat gained.",
            "The metal cools, the water warms.",
          ],
        },
        {
          id: "exam-physics-mcq-p4-11",
          question:
            "On a Celsius–kelvin scale, a temperature of −123 °C is equal to:",
          options: ["150 K", "396 K", "−150 K", "123 K"],
          answerIndex: 0,
          explanation:
            "T(K) = θ(°C) + 273 = −123 + 273 = 150 K.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p4-12",
          question:
            "Why do gases exert pressure on the walls of their container?",
          options: [
            "The molecules are tightly packed and push on the walls",
            "Gas molecules collide with the walls, and each collision exerts a small force",
            "Gravity pulls the gas down onto the walls",
            "The walls attract the molecules",
          ],
          answerIndex: 1,
          explanation:
            "Gas pressure arises from countless molecular collisions with the walls; each collision exerts a tiny force, and the total force per unit area is the pressure.",
          difficulty: "core",
          hints: [
            "Think about the kinetic model of gases.",
            "Molecules move and hit the walls.",
            "Many collisions per second give a steady force.",
          ],
        },
        {
          id: "exam-physics-mcq-p4-13",
          question:
            "A guitar string vibrates at 256 Hz. If the period of the sound wave produced is needed, it is:",
          options: ["256 s", "0.039 s", "0.0039 s", "3.9 s"],
          answerIndex: 2,
          explanation:
            "T = 1/f = 1/256 = 0.0039 s (about 3.9 ms).",
          difficulty: "core",
          hints: [
            "Period and frequency are reciprocals.",
            "T = 1/f.",
            "1 ÷ 256.",
          ],
        },
        {
          id: "exam-physics-mcq-p4-14",
          question:
            "The normal range of human hearing is approximately:",
          options: ["2 Hz to 200 Hz", "20 Hz to 20 000 Hz", "200 Hz to 2 000 000 Hz", "20 000 Hz to 200 000 Hz"],
          answerIndex: 1,
          explanation:
            "The audible range for a healthy human ear is about 20 Hz to 20 kHz (20 000 Hz). Frequencies above this are ultrasound.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p4-15",
          question:
            "Light travels at 3.0 × 10⁸ m/s in air and at 2.0 × 10⁸ m/s in a glass. The refractive index of the glass is:",
          options: ["1.5", "0.67", "6.0", "2.0"],
          answerIndex: 0,
          explanation:
            "n = c(air)/c(glass) = (3.0 × 10⁸)/(2.0 × 10⁸) = 1.5.",
          difficulty: "core",
          hints: [
            "Use n = speed in air ÷ speed in medium.",
            "n = c/v.",
            "3.0 ÷ 2.0.",
          ],
        },
        {
          id: "exam-physics-mcq-p4-16",
          question:
            "A material has a critical angle of 42°. For total internal reflection to occur, light inside the material must strike the boundary at an angle of incidence:",
          options: [
            "Less than 42°",
            "Exactly 0°",
            "Greater than 42°",
            "Equal to 90°",
          ],
          answerIndex: 2,
          explanation:
            "Total internal reflection occurs only when the angle of incidence (in the denser medium) exceeds the critical angle. Below it, light mostly refracts out.",
          difficulty: "core",
          hints: [
            "TIR needs the angle to exceed the critical angle.",
            "It only happens going from dense to less dense.",
            "Angle of incidence > critical angle.",
          ],
        },
        {
          id: "exam-physics-mcq-p4-17",
          question:
            "Which statement about a step-up transformer is correct?",
          options: [
            "It has more turns on the primary than the secondary",
            "It increases voltage and (ideally) decreases current",
            "It works with direct current",
            "It increases both voltage and current",
          ],
          answerIndex: 1,
          explanation:
            "A step-up transformer has more secondary turns, increasing voltage. Since power is conserved (P = VI), increasing voltage means decreasing current. Transformers need alternating current.",
          difficulty: "challenge",
          hints: [
            "Step-up means higher output voltage.",
            "Power in ≈ power out for an ideal transformer.",
            "If V goes up, I must go down.",
          ],
        },
        {
          id: "exam-physics-mcq-p4-18",
          question:
            "High voltages are used for transmitting electrical power across the National Grid because:",
          options: [
            "Higher voltage means a lower current for the same power, reducing energy lost as heat in the cables",
            "Higher voltage makes the current faster",
            "It is cheaper to make high-voltage cables",
            "Low voltage cannot travel long distances",
          ],
          answerIndex: 0,
          explanation:
            "For a fixed power, raising the voltage lowers the current (P = VI). Power lost in cables is I²R, so a smaller current greatly reduces heating losses.",
          difficulty: "challenge",
          hints: [
            "Power loss in cables depends on I²R.",
            "For fixed power, higher V means lower I.",
            "Lower current means much less I²R loss.",
          ],
        },
        {
          id: "exam-physics-mcq-p4-19",
          question:
            "A charge of 36 C flows past a point in a circuit in 12 s. The current is:",
          options: ["3.0 A", "0.33 A", "432 A", "24 A"],
          answerIndex: 0,
          explanation:
            "I = Q/t = 36/12 = 3.0 A.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p4-20",
          question:
            "A thermistor's resistance changes with temperature. As the temperature increases, the resistance of a typical (NTC) thermistor:",
          options: ["Increases", "Decreases", "Stays the same", "Becomes infinite"],
          answerIndex: 1,
          explanation:
            "For a negative temperature coefficient (NTC) thermistor, resistance decreases as temperature rises. This makes it useful in temperature-sensing circuits.",
          difficulty: "core",
          hints: [
            "Thermistors are temperature-dependent resistors.",
            "The common (NTC) type responds inversely to temperature.",
            "Hotter means lower resistance.",
          ],
        },
        {
          id: "exam-physics-mcq-p4-21",
          question:
            "When a magnet is pushed into a coil of wire connected to a sensitive meter, the meter deflects because:",
          options: [
            "The coil's resistance drops to zero",
            "A changing magnetic field through the coil induces an e.m.f.",
            "The magnet supplies current directly",
            "The coil becomes a permanent magnet",
          ],
          answerIndex: 1,
          explanation:
            "Electromagnetic induction: moving the magnet changes the magnetic flux linking the coil, inducing an e.m.f. (and current). Stopping the magnet stops the deflection.",
          difficulty: "core",
          hints: [
            "This is electromagnetic induction.",
            "A changing magnetic field is needed.",
            "Movement changes the flux through the coil.",
          ],
        },
        {
          id: "exam-physics-mcq-p4-22",
          question:
            "Which is the correct nuclear notation for an alpha particle?",
          options: ["⁰₋₁e", "⁴₂He", "¹₀n", "¹₁H"],
          answerIndex: 1,
          explanation:
            "An alpha particle is a helium-4 nucleus: ⁴₂He (2 protons, 2 neutrons). ⁰₋₁e is a beta particle; ¹₀n a neutron.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-mcq-p4-23",
          question:
            "A sample's activity falls from 800 Bq to 100 Bq in 30 minutes. The half-life of the source is:",
          options: ["5 minutes", "10 minutes", "15 minutes", "30 minutes"],
          answerIndex: 1,
          explanation:
            "800 → 400 → 200 → 100 is 3 halvings. 3 half-lives = 30 min, so one half-life = 10 minutes.",
          difficulty: "challenge",
          hints: [
            "Count how many times the activity halves.",
            "800 → 400 → 200 → 100 is 3 halvings.",
            "30 min ÷ 3 = one half-life.",
          ],
        },
        {
          id: "exam-physics-mcq-p4-24",
          question:
            "A satellite of orbital radius 7.0 × 10⁶ m takes 5800 s to orbit the Earth. Its orbital speed is approximately:",
          options: ["7.6 × 10³ m/s", "1.2 × 10³ m/s", "4.4 × 10¹⁰ m/s", "2.4 × 10³ m/s"],
          answerIndex: 0,
          explanation:
            "v = 2πr/T = (2 × π × 7.0 × 10⁶)/5800 = (4.40 × 10⁷)/5800 ≈ 7.6 × 10³ m/s.",
          difficulty: "challenge",
          hints: [
            "Orbital speed v = 2πr/T.",
            "Circumference = 2πr.",
            "Divide the circumference by the period.",
          ],
        },
        {
          id: "exam-physics-mcq-p4-25",
          question:
            "Light from distant galaxies shows redshift. This is evidence that:",
          options: [
            "The galaxies are moving towards us",
            "The Universe is contracting",
            "The galaxies are moving away from us (the Universe is expanding)",
            "Light slows down over long distances",
          ],
          answerIndex: 2,
          explanation:
            "Redshift means the observed wavelength is longer; distant galaxies are receding. More distant galaxies show greater redshift, supporting an expanding Universe and the Big Bang theory.",
          difficulty: "core",
          hints: [
            "Redshift stretches wavelengths to the red end.",
            "It indicates motion away from us.",
            "More distant = faster recession.",
          ],
        },
      ],
    },
  ],
  qaPapers: [
    {
      id: "exam-physics-qa-1",
      title: "Mock Exam — Structured Paper 1",
      description:
        "20 structured questions spanning the full syllabus. Show all working and include units. Suggested time: 90 minutes.",
      questions: [
        {
          id: "exam-physics-qa-p1-01",
          question:
            "A car accelerates uniformly from rest, reaching 20 m/s after 8.0 s.\n\n(a) Calculate its acceleration. [2]\n(b) Calculate the distance travelled in this time. [2]\n(c) State the difference between distance and displacement. [1]",
          marks: 5,
          modelAnswer:
            "(a) a = (v − u)/t = (20 − 0)/8.0 = 2.5 m/s²\n\n(b) s = ½(u + v)t = ½(0 + 20)(8.0) = 80 m\n\n(c) Distance is the total path length travelled (a scalar); displacement is the straight-line distance from start to finish in a stated direction (a vector).",
          markScheme: [
            "(a) a = (v − u)/t used [1]",
            "(a) 2.5 m/s² with unit [1]",
            "(b) correct method (½(u+v)t or equivalent) [1]",
            "(b) 80 m with unit [1]",
            "(c) distance = scalar/path length; displacement = vector/straight-line with direction [1]",
          ],
          commonError:
            "Using s = vt with the final velocity instead of the average velocity for accelerated motion.",
          difficulty: "warmup",
          solutions: [
            {
              label: "Acceleration and distance",
              steps: [
                "a = (v − u)/t = (20 − 0)/8.0 = 2.5 m/s²",
                "s = ½(u + v)t = ½(20)(8.0) = 80 m",
                "Check with s = ut + ½at² = 0 + ½(2.5)(8.0²) = ½ × 2.5 × 64 = 80 m ✓",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p1-02",
          question:
            "A 1200 kg car experiences a forward driving force of 4000 N and a total resistive force of 1000 N.\n\n(a) Calculate the resultant force. [1]\n(b) Calculate the acceleration. [2]\n(c) The car later moves at constant velocity. State the size of the resultant force and explain your answer. [2]",
          marks: 5,
          modelAnswer:
            "(a) Resultant force = 4000 − 1000 = 3000 N (forward)\n\n(b) a = F/m = 3000/1200 = 2.5 m/s²\n\n(c) Resultant force = 0 N. At constant velocity there is no acceleration, so by Newton's first law the forces must be balanced (driving force equals resistive force).",
          markScheme: [
            "(a) 3000 N [1]",
            "(b) a = F/m used [1]",
            "(b) 2.5 m/s² with unit [1]",
            "(c) resultant = 0 [1]",
            "(c) constant velocity ⇒ no acceleration ⇒ balanced forces [1]",
          ],
          commonError:
            "Using the driving force alone (4000 N) in F = ma instead of the resultant force.",
          difficulty: "core",
          hints: [
            "Resultant = driving force − resistive force.",
            "Then use F = ma with the resultant.",
            "Constant velocity means zero acceleration.",
          ],
          solutions: [
            {
              label: "Newton's second law",
              steps: [
                "Resultant F = 4000 − 1000 = 3000 N",
                "a = F/m = 3000/1200 = 2.5 m/s²",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p1-03",
          question:
            "A boy of mass 50 kg climbs a flight of stairs of vertical height 4.0 m in 10 s. (g = 10 m/s²)\n\n(a) Calculate the gain in gravitational potential energy. [2]\n(b) Calculate the useful power developed. [2]",
          marks: 4,
          modelAnswer:
            "(a) ΔGPE = mgΔh = 50 × 10 × 4.0 = 2000 J\n\n(b) P = E/t = 2000/10 = 200 W",
          markScheme: [
            "(a) GPE = mgh used [1]",
            "(a) 2000 J with unit [1]",
            "(b) P = E/t used [1]",
            "(b) 200 W with unit [1]",
          ],
          commonError:
            "Forgetting to use the vertical height (using the length of the staircase instead of the height gained).",
          difficulty: "warmup",
          solutions: [
            {
              label: "Energy then power",
              steps: [
                "ΔGPE = mgΔh = 50 × 10 × 4.0 = 2000 J",
                "P = E/t = 2000/10 = 200 W",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p1-04",
          question:
            "An immersion heater of power 1500 W heats 2.0 kg of water. (c of water = 4200 J/(kg °C))\n\n(a) Calculate the energy needed to raise the temperature by 40 °C. [2]\n(b) Assuming no heat loss, calculate the time taken. [2]\n(c) In practice, the time taken is longer. Explain why. [1]",
          marks: 5,
          modelAnswer:
            "(a) Q = mcΔT = 2.0 × 4200 × 40 = 336 000 J\n\n(b) t = Q/P = 336 000/1500 = 224 s\n\n(c) Some thermal energy is lost to the surroundings (and to heating the container), so more energy than the calculated value must be supplied, taking longer.",
          markScheme: [
            "(a) Q = mcΔT used [1]",
            "(a) 336 000 J / 336 kJ [1]",
            "(b) t = Q/P used [1]",
            "(b) 224 s (ecf) [1]",
            "(c) energy lost to surroundings/container [1]",
          ],
          commonError:
            "Mixing up power and energy, or dividing energy by power incorrectly.",
          difficulty: "core",
          hints: [
            "Use Q = mcΔT for the energy.",
            "Then t = Q/P.",
            "Real systems lose heat to the surroundings.",
          ],
          solutions: [
            {
              label: "Heating then timing",
              steps: [
                "Q = mcΔT = 2.0 × 4200 × 40 = 336 000 J",
                "t = Q/P = 336 000/1500 = 224 s",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p1-05",
          question:
            "A sound wave in air has a frequency of 170 Hz. The speed of sound in air is 340 m/s.\n\n(a) Calculate the wavelength of the sound. [2]\n(b) State whether sound is a transverse or longitudinal wave. [1]\n(c) Describe how the displacement of air particles relates to the direction of energy travel for this type of wave. [1]",
          marks: 4,
          modelAnswer:
            "(a) λ = v/f = 340/170 = 2.0 m\n\n(b) Longitudinal.\n\n(c) The air particles vibrate (oscillate) parallel to the direction in which the wave energy travels, forming compressions and rarefactions.",
          markScheme: [
            "(a) λ = v/f used [1]",
            "(a) 2.0 m with unit [1]",
            "(b) longitudinal [1]",
            "(c) particle vibration parallel to energy travel / compressions and rarefactions [1]",
          ],
          commonError:
            "Calling sound a transverse wave, or multiplying v × f instead of dividing.",
          difficulty: "warmup",
          solutions: [
            {
              label: "Wave equation",
              steps: [
                "v = fλ → λ = v/f",
                "λ = 340/170 = 2.0 m",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p1-06",
          question:
            "A ray of light passes from air into a glass block of refractive index 1.5. The angle of incidence in air is 40°. (sin 40° = 0.643)\n\n(a) Calculate the angle of refraction in the glass. [3]\n(b) State what happens to the speed of the light as it enters the glass. [1]",
          marks: 4,
          modelAnswer:
            "(a) n = sin i / sin r → sin r = sin i / n = 0.643/1.5 = 0.4287\nr = sin⁻¹(0.4287) = 25.4° ≈ 25°\n\n(b) The light slows down (speed decreases) on entering the denser glass.",
          markScheme: [
            "(a) n = sin i / sin r rearranged [1]",
            "(a) sin r = 0.429 [1]",
            "(a) r ≈ 25° [1]",
            "(b) speed decreases [1]",
          ],
          commonError:
            "Multiplying sin i by n instead of dividing, giving an angle that is too large.",
          difficulty: "core",
          hints: [
            "Use n = sin i / sin r.",
            "Rearrange: sin r = sin i / n.",
            "Take the inverse sine to find r.",
          ],
          solutions: [
            {
              label: "Snell's law",
              steps: [
                "sin r = sin i / n = 0.643/1.5 = 0.4287",
                "r = sin⁻¹(0.4287) = 25.4° ≈ 25°",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p1-07",
          question:
            "A resistor of resistance 8.0 Ω is connected to a 12 V battery of negligible internal resistance.\n\n(a) Calculate the current in the resistor. [2]\n(b) Calculate the power dissipated in the resistor. [2]\n(c) Calculate the energy transferred in 2.0 minutes. [2]",
          marks: 6,
          modelAnswer:
            "(a) I = V/R = 12/8.0 = 1.5 A\n\n(b) P = VI = 12 × 1.5 = 18 W (or P = I²R = 1.5² × 8.0 = 18 W)\n\n(c) t = 2.0 × 60 = 120 s; E = Pt = 18 × 120 = 2160 J",
          markScheme: [
            "(a) I = V/R used [1]",
            "(a) 1.5 A [1]",
            "(b) P = VI or I²R used [1]",
            "(b) 18 W [1]",
            "(c) t = 120 s and E = Pt used [1]",
            "(c) 2160 J (ecf) [1]",
          ],
          commonError:
            "Forgetting to convert minutes to seconds before using E = Pt.",
          difficulty: "core",
          hints: [
            "Start with Ohm's law I = V/R.",
            "Power can be found from P = VI.",
            "Convert minutes to seconds for energy.",
          ],
          solutions: [
            {
              label: "Ohm's law, power, energy",
              steps: [
                "I = V/R = 12/8.0 = 1.5 A",
                "P = VI = 12 × 1.5 = 18 W",
                "E = Pt = 18 × (2.0 × 60) = 18 × 120 = 2160 J",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p1-08",
          question:
            "Two resistors, 3.0 Ω and 6.0 Ω, are connected in parallel across a 9.0 V supply.\n\n(a) Calculate the combined resistance. [2]\n(b) Calculate the total current drawn from the supply. [2]\n(c) State which resistor carries the larger current and explain why. [2]",
          marks: 6,
          modelAnswer:
            "(a) 1/R = 1/3.0 + 1/6.0 = 2/6 + 1/6 = 3/6 → R = 2.0 Ω\n\n(b) I = V/R = 9.0/2.0 = 4.5 A\n\n(c) The 3.0 Ω resistor carries the larger current. In parallel both resistors have the same voltage (9.0 V) across them, and I = V/R, so the smaller resistance carries the larger current.",
          markScheme: [
            "(a) 1/R = 1/R₁ + 1/R₂ used [1]",
            "(a) R = 2.0 Ω [1]",
            "(b) I = V/R used [1]",
            "(b) 4.5 A (ecf) [1]",
            "(c) 3.0 Ω resistor [1]",
            "(c) same voltage, smaller R ⇒ larger I [1]",
          ],
          commonError:
            "Adding parallel resistances directly (3 + 6 = 9 Ω) instead of using the reciprocal formula.",
          difficulty: "core",
          hints: [
            "Use 1/R = 1/R₁ + 1/R₂ for parallel.",
            "The combined resistance is less than the smallest resistor.",
            "In parallel, the voltage is the same across each branch.",
          ],
          solutions: [
            {
              label: "Parallel combination",
              steps: [
                "1/R = 1/3.0 + 1/6.0 = 0.333 + 0.167 = 0.500",
                "R = 1/0.500 = 2.0 Ω",
                "I = V/R = 9.0/2.0 = 4.5 A",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p1-09",
          question:
            "A transformer is used to step down 240 V a.c. to 12 V a.c. to run a model railway. The primary coil has 1000 turns.\n\n(a) Calculate the number of turns on the secondary coil. [2]\n(b) The transformer is 100% efficient and the railway draws 2.0 A. Calculate the current in the primary coil. [2]\n(c) Explain why a transformer will not work with a steady direct current. [2]",
          marks: 6,
          modelAnswer:
            "(a) Vp/Vs = Np/Ns → Ns = Np × Vs/Vp = 1000 × 12/240 = 50 turns\n\n(b) Power in = power out: Vp Ip = Vs Is → Ip = Vs Is / Vp = (12 × 2.0)/240 = 0.10 A\n\n(c) A transformer needs a changing magnetic field to induce an e.m.f. in the secondary. A steady d.c. produces a constant (unchanging) magnetic field, so no e.m.f. is induced in the secondary and no output is produced.",
          markScheme: [
            "(a) Vp/Vs = Np/Ns used [1]",
            "(a) 50 turns [1]",
            "(b) Vp Ip = Vs Is used [1]",
            "(b) 0.10 A [1]",
            "(c) transformer needs a changing magnetic field/flux [1]",
            "(c) steady d.c. gives constant field so no induced e.m.f. [1]",
          ],
          commonError:
            "Inverting the turns ratio, or assuming the primary current equals the secondary current.",
          difficulty: "challenge",
          hints: [
            "Voltage ratio equals turns ratio.",
            "For an ideal transformer, VpIp = VsIs.",
            "Induction needs a changing magnetic field.",
          ],
          solutions: [
            {
              label: "Transformer equations",
              steps: [
                "Ns = Np × Vs/Vp = 1000 × 12/240 = 50 turns",
                "Ip = Vs Is / Vp = (12 × 2.0)/240 = 24/240 = 0.10 A",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p1-10",
          question:
            "A radioactive source has a half-life of 6.0 hours. A detector initially records a corrected count rate of 4800 counts per minute.\n\n(a) Define the term half-life. [1]\n(b) Calculate the count rate after 18 hours. [2]\n(c) Explain why a background radiation reading is taken and subtracted before such measurements. [2]",
          marks: 5,
          modelAnswer:
            "(a) Half-life is the time taken for half the (radioactive) nuclei in a sample to decay, or for the activity/count rate to fall to half its value.\n\n(b) 18 hours = 3 half-lives. 4800 → 2400 → 1200 → 600 counts per minute.\n\n(c) Background radiation is always present (from rocks, cosmic rays, etc.) and adds to the detector reading. It is measured and subtracted to give the corrected count rate due to the source alone, making the results accurate.",
          markScheme: [
            "(a) time for half the nuclei to decay / activity to halve [1]",
            "(b) 18 h = 3 half-lives [1]",
            "(b) 600 counts per minute [1]",
            "(c) background radiation always present / adds to reading [1]",
            "(c) subtract to find count due to source only [1]",
          ],
          commonError:
            "Dividing the count rate by 3 instead of halving it three times.",
          difficulty: "core",
          hints: [
            "Find the number of half-lives: 18 ÷ 6.0.",
            "Halve the count rate once per half-life.",
            "Background must be removed for a fair measurement.",
          ],
          solutions: [
            {
              label: "Half-life decay",
              steps: [
                "Number of half-lives = 18/6.0 = 3",
                "4800 → 2400 (1 half-life) → 1200 (2) → 600 (3)",
                "Count rate = 600 counts per minute",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p1-11",
          question:
            "(a) State Newton's first law of motion. [1]\n(b) A book rests on a table. Name the two forces acting on the book and state how they compare. [2]\n(c) Explain why a passenger lurches forward when a moving bus brakes suddenly. [2]",
          marks: 5,
          modelAnswer:
            "(a) An object remains at rest, or continues to move at constant velocity (constant speed in a straight line), unless acted on by a resultant (unbalanced) force.\n\n(b) The weight of the book acting downward and the normal contact force from the table acting upward. They are equal in size and opposite in direction (the book is in equilibrium).\n\n(c) The passenger's body tends to continue moving forward at the original speed (inertia). When the bus decelerates, there is no large forward force to stop the upper body immediately, so it lurches forward relative to the bus.",
          markScheme: [
            "(a) stays at rest or constant velocity unless resultant force acts [1]",
            "(b) weight (down) and normal/contact force (up) [1]",
            "(b) equal and opposite [1]",
            "(c) body has inertia / tends to keep moving [1]",
            "(c) bus slows but body continues forward [1]",
          ],
          commonError:
            "Saying the table 'pushes the book up because it is heavy' without identifying the normal contact force, or confusing inertia with a force.",
          difficulty: "core",
          hints: [
            "Newton's first law is about balanced forces.",
            "On the book: gravity and the surface push.",
            "Inertia is the tendency to keep the same motion.",
          ],
        },
        {
          id: "exam-physics-qa-p1-12",
          question:
            "A uniform beam of weight 200 N and length 4.0 m rests horizontally on two supports, one at each end (A on the left, B on the right). A 300 N load is placed 1.0 m from end A.\n\n(a) State the principle of moments. [1]\n(b) By taking moments about A, calculate the upward force provided by support B. [3]\n(c) Hence calculate the upward force provided by support A. [2]",
          marks: 6,
          modelAnswer:
            "(a) For a body in equilibrium, the sum of the clockwise moments about any point equals the sum of the anticlockwise moments about that point.\n\n(b) Taking moments about A (the beam's weight acts at its centre, 2.0 m from A):\nClockwise moments = (300 × 1.0) + (200 × 2.0) = 300 + 400 = 700 N m\nAnticlockwise moment = B × 4.0\nB × 4.0 = 700 → B = 175 N\n\n(c) Total upward force = total downward force: A + B = 300 + 200 = 500 N\nA = 500 − 175 = 325 N",
          markScheme: [
            "(a) clockwise moments = anticlockwise moments (in equilibrium) [1]",
            "(b) moments about A: weight at 2.0 m, load at 1.0 m [1]",
            "(b) B × 4.0 = 700 [1]",
            "(b) B = 175 N [1]",
            "(c) A + B = 500 N used [1]",
            "(c) A = 325 N (ecf) [1]",
          ],
          commonError:
            "Forgetting the beam's own weight acts at its centre (2.0 m from A), or using the wrong distances.",
          difficulty: "challenge",
          hints: [
            "Take moments about A so that A's force has no moment.",
            "The beam's weight acts at its midpoint.",
            "Then use the fact that total up = total down forces.",
          ],
          solutions: [
            {
              label: "Moments and force balance",
              steps: [
                "Moments about A: B × 4.0 = (300 × 1.0) + (200 × 2.0)",
                "B × 4.0 = 300 + 400 = 700 → B = 175 N",
                "Vertical balance: A + B = 300 + 200 = 500 N",
                "A = 500 − 175 = 325 N",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p1-13",
          question:
            "0.50 kg of ice at 0 °C is heated until it becomes water at 0 °C. (Specific latent heat of fusion of ice = 3.3 × 10⁵ J/kg; c of water = 4200 J/(kg °C))\n\n(a) Calculate the energy needed to melt the ice. [2]\n(b) The resulting water is then heated to 30 °C. Calculate the additional energy needed. [2]\n(c) Explain, in terms of particles, why energy is needed to melt ice even though the temperature does not rise. [2]",
          marks: 6,
          modelAnswer:
            "(a) Q = mL = 0.50 × 3.3 × 10⁵ = 1.65 × 10⁵ J\n\n(b) Q = mcΔT = 0.50 × 4200 × 30 = 63 000 J = 6.3 × 10⁴ J\n\n(c) The energy supplied is used to break/weaken the bonds (forces of attraction) between the particles, allowing them to move past each other (change from solid to liquid). It increases the potential energy of the particles, not their kinetic energy, so the temperature stays constant.",
          markScheme: [
            "(a) Q = mL used [1]",
            "(a) 1.65 × 10⁵ J [1]",
            "(b) Q = mcΔT used [1]",
            "(b) 6.3 × 10⁴ J / 63 000 J [1]",
            "(c) energy breaks/weakens bonds between particles [1]",
            "(c) increases potential energy not kinetic ⇒ temperature constant [1]",
          ],
          commonError:
            "Using mcΔT for the melting stage (where ΔT = 0), which would wrongly give zero energy.",
          difficulty: "core",
          hints: [
            "Melting at constant temperature uses Q = mL.",
            "Heating the water uses Q = mcΔT.",
            "During melting, energy weakens particle bonds.",
          ],
          solutions: [
            {
              label: "Latent then sensible heat",
              steps: [
                "Melting: Q = mL = 0.50 × 3.3 × 10⁵ = 1.65 × 10⁵ J",
                "Heating: Q = mcΔT = 0.50 × 4200 × 30 = 63 000 J",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p1-14",
          question:
            "A converging lens has a focal length of 10 cm. An object is placed 30 cm from the lens.\n\n(a) State what is meant by the principal focus (focal point) of a converging lens. [1]\n(b) The image formed is real, inverted and diminished. State one practical use of a lens producing this kind of image. [1]\n(c) Describe how the nature of the image changes as the object is moved from 30 cm towards the focal point. [3]",
          marks: 5,
          modelAnswer:
            "(a) The principal focus is the point on the principal axis where rays travelling parallel to the axis converge (meet) after passing through the lens.\n\n(b) A camera (or the eye, or a projector forms a real image — for a diminished real image specifically a camera).\n\n(c) Between 2F and F (object 30 cm > 2F = 20 cm, image is real, inverted, diminished). As the object moves to 2F (20 cm), the image is real, inverted and the same size. Between 2F and F the image is real, inverted and magnified (enlarged). At F the rays emerge parallel and no image forms. Inside F the image becomes virtual, upright and magnified.",
          markScheme: [
            "(a) point where parallel rays converge after the lens [1]",
            "(b) camera / eye (any device giving a real diminished image) [1]",
            "(c) at 2F: same size, real, inverted [1]",
            "(c) between 2F and F: magnified, real, inverted [1]",
            "(c) inside F: virtual, upright, magnified (magnifying glass) [1]",
          ],
          commonError:
            "Confusing the principal focus with the centre of the lens, or stating the image stays real all the way to the lens.",
          difficulty: "challenge",
          hints: [
            "Compare object distance with f and 2f.",
            "At 2F the image is the same size as the object.",
            "Inside the focal length the image becomes virtual and upright.",
          ],
        },
        {
          id: "exam-physics-qa-p1-15",
          question:
            "(a) State two properties common to all electromagnetic waves. [2]\n(b) Give one use and one danger of ultraviolet radiation. [2]\n(c) Microwaves and radio waves are both used for communication. State one advantage of using microwaves to communicate with satellites rather than radio waves. [1]",
          marks: 5,
          modelAnswer:
            "(a) Any two of: they are transverse waves; they travel at the same speed (3.0 × 10⁸ m/s) in a vacuum; they transfer energy; they can travel through a vacuum; they can be reflected/refracted.\n\n(b) Use: sterilising/security marking/detecting forged banknotes/sun-tanning beds. Danger: can damage skin cells/cause skin cancer or damage the eyes.\n\n(c) Microwaves can pass through the atmosphere (and ionosphere) with little absorption/refraction and can be sent in a narrow beam to the satellite, whereas some radio waves are reflected by the ionosphere.",
          markScheme: [
            "(a) any two correct common properties [2]",
            "(b) one valid use of UV [1]",
            "(b) one valid danger of UV [1]",
            "(c) microwaves pass through the atmosphere/ionosphere (radio reflected) [1]",
          ],
          commonError:
            "Stating that all EM waves travel at the same speed in any medium — they only share the same speed in a vacuum.",
          difficulty: "core",
          hints: [
            "Think about what every EM wave shares.",
            "All EM waves are transverse and travel at c in a vacuum.",
            "Satellites are above the atmosphere.",
          ],
        },
        {
          id: "exam-physics-qa-p1-16",
          question:
            "A 230 V mains kettle has a heating element of resistance 23 Ω.\n\n(a) Calculate the current in the element. [2]\n(b) Calculate the power of the kettle. [2]\n(c) The kettle is fitted with a fuse. Choose the most suitable fuse value (3 A, 5 A or 13 A) and justify your choice. [2]",
          marks: 6,
          modelAnswer:
            "(a) I = V/R = 230/23 = 10 A\n\n(b) P = VI = 230 × 10 = 2300 W (= 2.3 kW)\n\n(c) The normal operating current is 10 A. The fuse must be rated just above this, so a 13 A fuse is suitable. A 3 A or 5 A fuse would blow during normal use; the 13 A fuse allows normal current but will melt if a fault makes the current much larger.",
          markScheme: [
            "(a) I = V/R used [1]",
            "(a) 10 A [1]",
            "(b) P = VI or I²R used [1]",
            "(b) 2300 W / 2.3 kW [1]",
            "(c) 13 A chosen [1]",
            "(c) just above normal current of 10 A [1]",
          ],
          commonError:
            "Choosing a fuse rating below the normal operating current, which would blow immediately.",
          difficulty: "core",
          hints: [
            "Find the normal current first with I = V/R.",
            "Power can be found from P = VI.",
            "A fuse should be rated just above the normal current.",
          ],
          solutions: [
            {
              label: "Current, power, fuse",
              steps: [
                "I = V/R = 230/23 = 10 A",
                "P = VI = 230 × 10 = 2300 W",
                "Fuse just above 10 A ⇒ 13 A",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p1-17",
          question:
            "(a) Describe the structure of an atom in terms of protons, neutrons and electrons, including their relative charges. [3]\n(b) An ion has 11 protons, 12 neutrons and 10 electrons. State its overall charge and explain. [2]",
          marks: 5,
          modelAnswer:
            "(a) An atom has a small, dense central nucleus containing positively charged protons and uncharged (neutral) neutrons. Negatively charged electrons orbit the nucleus in shells/energy levels. Protons have charge +1, electrons −1 (equal and opposite), and neutrons 0. Most of the atom is empty space.\n\n(b) Overall charge = +1 (singly positive). There are 11 positive protons but only 10 negative electrons, so there is one more positive charge than negative, giving a net charge of +1.",
          markScheme: [
            "(a) nucleus of protons and neutrons [1]",
            "(a) electrons orbit/in shells [1]",
            "(a) charges: proton +, electron −, neutron 0 [1]",
            "(b) charge = +1 [1]",
            "(b) 11 protons vs 10 electrons ⇒ net +1 [1]",
          ],
          commonError:
            "Saying neutrons are negative, or that the number of neutrons affects the charge.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-qa-p1-18",
          question:
            "Complete and explain the following nuclear decay. A nucleus of thorium ²³⁴₉₀Th decays by beta-minus emission to form an element X.\n\n(a) State the change that occurs to a neutron during beta-minus decay. [1]\n(b) Determine the nucleon number and proton number of X. [2]\n(c) State why the mass (nucleon) number is unchanged in beta decay. [1]",
          marks: 4,
          modelAnswer:
            "(a) A neutron changes into a proton (and an electron, the beta particle, is emitted).\n\n(b) Beta-minus emission: nucleon number unchanged at 234; proton number increases by 1, from 90 to 91. So X has nucleon number 234 and proton number 91.\n\n(c) A neutron is converted into a proton, so the total number of nucleons (protons + neutrons) stays the same; only the proton/neutron split changes.",
          markScheme: [
            "(a) neutron → proton (+ emitted electron) [1]",
            "(b) nucleon number = 234 [1]",
            "(b) proton number = 91 [1]",
            "(c) neutron becomes a proton so total nucleons unchanged [1]",
          ],
          commonError:
            "Decreasing the proton number in beta-minus decay (it increases by 1) or changing the nucleon number.",
          difficulty: "core",
          hints: [
            "In β⁻ decay a neutron becomes a proton.",
            "Proton number rises by 1; nucleon number stays the same.",
            "The emitted electron has negligible mass.",
          ],
          solutions: [
            {
              label: "Conserving nucleons and charge",
              steps: [
                "²³⁴₉₀Th → ²³⁴₉₁X + ⁰₋₁e",
                "Nucleon numbers: 234 = 234 + 0 ✓",
                "Proton numbers: 90 = 91 + (−1) ✓",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p1-19",
          question:
            "A planet orbits a star in a circular orbit of radius 1.5 × 10¹¹ m, taking 3.0 × 10⁷ s to complete one orbit.\n\n(a) Calculate the orbital speed of the planet. [3]\n(b) State the force that keeps the planet in orbit and its direction. [2]",
          marks: 5,
          modelAnswer:
            "(a) v = 2πr/T = (2 × π × 1.5 × 10¹¹)/(3.0 × 10⁷)\n= (9.42 × 10¹¹)/(3.0 × 10⁷) = 3.1 × 10⁴ m/s\n\n(b) Gravitational attraction (gravity) between the star and the planet. It acts towards the centre of the orbit (towards the star), providing the centripetal force.",
          markScheme: [
            "(a) v = 2πr/T used [1]",
            "(a) circumference = 2πr = 9.4 × 10¹¹ m [1]",
            "(a) 3.1 × 10⁴ m/s [1]",
            "(b) gravitational force / gravity [1]",
            "(b) directed towards the star/centre [1]",
          ],
          commonError:
            "Forgetting the factor of 2π (using r instead of the full circumference), or giving the wrong direction for the force.",
          difficulty: "challenge",
          hints: [
            "Speed = distance ÷ time; the distance is the circumference.",
            "Circumference = 2πr.",
            "Gravity provides the inward (centripetal) force.",
          ],
          solutions: [
            {
              label: "Orbital speed",
              steps: [
                "Circumference = 2πr = 2 × π × 1.5 × 10¹¹ = 9.42 × 10¹¹ m",
                "v = circumference / T = 9.42 × 10¹¹ / 3.0 × 10⁷",
                "v = 3.14 × 10⁴ ≈ 3.1 × 10⁴ m/s",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p1-20",
          question:
            "(a) State what is meant by redshift. [1]\n(b) Explain how redshift of light from distant galaxies provides evidence for the Big Bang theory. [3]\n(c) State one other observation that supports the Big Bang theory. [1]",
          marks: 5,
          modelAnswer:
            "(a) Redshift is the increase in the observed wavelength (shift towards the red end of the spectrum) of light from a source that is moving away from the observer.\n\n(b) Light from distant galaxies is redshifted, showing they are moving away from us. More distant galaxies show greater redshift, so they are moving away faster. This means the Universe is expanding. Tracing the expansion backwards in time, all matter was once together at a single point, which is the basis of the Big Bang theory.\n\n(c) The cosmic microwave background radiation (CMBR) detected coming from all directions.",
          markScheme: [
            "(a) increase in wavelength / shift to red as source recedes [1]",
            "(b) galaxies moving away (redshift) [1]",
            "(b) more distant galaxies recede faster ⇒ Universe expanding [1]",
            "(b) reversing expansion ⇒ single origin / Big Bang [1]",
            "(c) cosmic microwave background radiation [1]",
          ],
          commonError:
            "Saying redshift means galaxies are moving towards us, or confusing redshift with the Doppler effect for sound only.",
          difficulty: "core",
          hints: [
            "Redshift stretches wavelengths longer.",
            "Greater distance correlates with greater redshift.",
            "The CMBR is the 'afterglow' of the Big Bang.",
          ],
        },
      ],
    },
    {
      id: "exam-physics-qa-2",
      title: "Mock Exam — Structured Paper 2",
      description:
        "20 structured questions spanning the full syllabus. Show all working and include units. Suggested time: 90 minutes.",
      questions: [
        {
          id: "exam-physics-qa-p2-01",
          question:
            "A cyclist travels at a steady speed of 8.0 m/s for 25 s, then decelerates uniformly to rest in a further 10 s.\n\n(a) Calculate the distance travelled at steady speed. [2]\n(b) Calculate the distance travelled while decelerating. [2]\n(c) Calculate the average speed for the whole journey. [2]",
          marks: 6,
          modelAnswer:
            "(a) s = vt = 8.0 × 25 = 200 m\n\n(b) s = ½(u + v)t = ½(8.0 + 0)(10) = 40 m\n\n(c) Total distance = 200 + 40 = 240 m; total time = 25 + 10 = 35 s\nAverage speed = 240/35 = 6.86 ≈ 6.9 m/s",
          markScheme: [
            "(a) s = vt used [1]",
            "(a) 200 m [1]",
            "(b) ½(u+v)t or area used [1]",
            "(b) 40 m [1]",
            "(c) average speed = total distance/total time [1]",
            "(c) 6.9 m/s (ecf) [1]",
          ],
          commonError:
            "Averaging the two speeds instead of using total distance ÷ total time.",
          difficulty: "core",
          hints: [
            "Steady speed: distance = speed × time.",
            "Deceleration: use the average velocity (½ of 8.0).",
            "Average speed = total distance ÷ total time.",
          ],
          solutions: [
            {
              label: "Distances then average",
              steps: [
                "Steady: s = 8.0 × 25 = 200 m",
                "Decelerating: s = ½(8.0 + 0)(10) = 40 m",
                "Average speed = (200 + 40)/(25 + 10) = 240/35 = 6.9 m/s",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p2-02",
          question:
            "A 0.15 kg ball is dropped and hits the ground at 12 m/s. It rebounds vertically at 8.0 m/s. The contact with the ground lasts 0.050 s.\n\n(a) Calculate the change in momentum of the ball. [3]\n(b) Calculate the average force exerted by the ground on the ball. [2]",
          marks: 5,
          modelAnswer:
            "(a) Take upward as positive. Initial momentum (downward) = 0.15 × (−12) = −1.8 kg m/s. Final momentum (upward) = 0.15 × (+8.0) = +1.2 kg m/s.\nChange = final − initial = 1.2 − (−1.8) = 3.0 kg m/s (upward)\n\n(b) F = Δp/Δt = 3.0/0.050 = 60 N (upward)",
          markScheme: [
            "(a) momentum is a vector; opposite signs used [1]",
            "(a) change = final − initial [1]",
            "(a) 3.0 kg m/s [1]",
            "(b) F = Δp/Δt used [1]",
            "(b) 60 N [1]",
          ],
          commonError:
            "Treating both velocities as positive and getting a change of only 0.6 kg m/s (forgetting the direction reverses).",
          difficulty: "challenge",
          hints: [
            "Choose a positive direction and assign signs.",
            "Change in momentum = final − initial (with signs).",
            "Force = change in momentum ÷ time.",
          ],
          solutions: [
            {
              label: "Impulse-momentum",
              steps: [
                "Δp = m(v − u) = 0.15 × (8.0 − (−12)) = 0.15 × 20 = 3.0 kg m/s",
                "F = Δp/Δt = 3.0/0.050 = 60 N",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p2-03",
          question:
            "A crane lifts a 500 kg load at a constant speed of 0.40 m/s. (g = 10 m/s²)\n\n(a) Calculate the weight of the load. [2]\n(b) Calculate the tension in the cable (assume the load moves at constant speed). [1]\n(c) Calculate the power needed to lift the load at this speed. [2]",
          marks: 5,
          modelAnswer:
            "(a) W = mg = 500 × 10 = 5000 N\n\n(b) At constant speed the forces are balanced, so tension = weight = 5000 N.\n\n(c) P = Fv = 5000 × 0.40 = 2000 W (= 2.0 kW). (Or P = W/t using mgh per second.)",
          markScheme: [
            "(a) W = mg used [1]",
            "(a) 5000 N [1]",
            "(b) tension = 5000 N (balanced forces) [1]",
            "(c) P = Fv (or mgh/t) used [1]",
            "(c) 2000 W / 2.0 kW [1]",
          ],
          commonError:
            "Forgetting that at constant speed the tension equals the weight, or using the wrong relation for power.",
          difficulty: "core",
          hints: [
            "Weight = mg.",
            "Constant speed means tension balances weight.",
            "Power lifting at steady speed: P = force × velocity.",
          ],
          solutions: [
            {
              label: "Weight then power",
              steps: [
                "W = mg = 500 × 10 = 5000 N",
                "P = Fv = 5000 × 0.40 = 2000 W",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p2-04",
          question:
            "A solar panel of area 2.0 m² receives solar power of 800 W per square metre. It converts this to electrical energy with an efficiency of 18%.\n\n(a) Calculate the total solar power falling on the panel. [2]\n(b) Calculate the useful electrical power output. [2]\n(c) Suggest one reason why the efficiency is not 100%. [1]",
          marks: 5,
          modelAnswer:
            "(a) Power in = 800 × 2.0 = 1600 W\n\n(b) Useful output = efficiency × input = 0.18 × 1600 = 288 W\n\n(c) Some energy is reflected from the surface, or transferred to thermal energy (heat) in the panel rather than to electrical energy.",
          markScheme: [
            "(a) 800 × 2.0 used [1]",
            "(a) 1600 W [1]",
            "(b) output = efficiency × input [1]",
            "(b) 288 W [1]",
            "(c) energy lost as heat / reflected [1]",
          ],
          commonError:
            "Dividing by efficiency instead of multiplying, or forgetting to multiply the intensity by the area.",
          difficulty: "core",
          hints: [
            "Power in = intensity × area.",
            "Useful output = efficiency × power in.",
            "Convert 18% to 0.18.",
          ],
          solutions: [
            {
              label: "Efficiency calculation",
              steps: [
                "Power in = 800 × 2.0 = 1600 W",
                "Output = 0.18 × 1600 = 288 W",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p2-05",
          question:
            "(a) Describe how thermal energy is transferred through a metal bar by conduction, in terms of particles. [3]\n(b) Explain why metals are much better thermal conductors than non-metals such as wood. [2]",
          marks: 5,
          modelAnswer:
            "(a) At the hot end the particles (atoms/ions) vibrate more vigorously and gain kinetic energy. They collide with neighbouring particles, passing on some of this energy. In this way kinetic energy is transferred along the bar from the hot end to the cold end, while the particles themselves stay roughly in place.\n\n(b) Metals contain free (delocalised) electrons that can move through the structure. These electrons gain kinetic energy at the hot end and quickly transfer it throughout the metal by colliding with particles, giving fast conduction. Non-metals have no free electrons, so they rely only on slower particle vibrations.",
          markScheme: [
            "(a) particles at hot end vibrate more / gain kinetic energy [1]",
            "(a) collide with neighbours passing on energy [1]",
            "(a) energy transferred hot → cold (particles stay in place) [1]",
            "(b) metals have free/delocalised electrons [1]",
            "(b) electrons move and transfer energy quickly [1]",
          ],
          commonError:
            "Saying particles 'flow' along the bar (they vibrate in place); confusing conduction with convection.",
          difficulty: "core",
          hints: [
            "Conduction transfers energy without the particles travelling.",
            "Think about vibrations and collisions.",
            "Metals have a special feature: free electrons.",
          ],
        },
        {
          id: "exam-physics-qa-p2-06",
          question:
            "A fixed mass of gas has a volume of 0.030 m³ at a pressure of 1.0 × 10⁵ Pa. It is compressed at constant temperature to a pressure of 2.5 × 10⁵ Pa.\n\n(a) State Boyle's law. [1]\n(b) Calculate the new volume of the gas. [3]\n(c) Explain, using the kinetic model, why reducing the volume increases the pressure (at constant temperature). [2]",
          marks: 6,
          modelAnswer:
            "(a) For a fixed mass of gas at constant temperature, the pressure is inversely proportional to the volume (pV = constant).\n\n(b) p₁V₁ = p₂V₂ → V₂ = p₁V₁/p₂ = (1.0 × 10⁵ × 0.030)/(2.5 × 10⁵)\n= (3000)/(2.5 × 10⁵) = 0.012 m³\n\n(c) The same number of gas molecules are now in a smaller volume, so they hit the walls more frequently (more collisions per second per unit area). Each collision exerts a force, so more frequent collisions mean a greater total force per unit area, i.e. higher pressure.",
          markScheme: [
            "(a) p inversely proportional to V at constant T (pV = constant) [1]",
            "(b) p₁V₁ = p₂V₂ used [1]",
            "(b) correct substitution [1]",
            "(b) 0.012 m³ [1]",
            "(c) molecules hit walls more often in smaller volume [1]",
            "(c) more frequent collisions ⇒ greater force per area ⇒ higher pressure [1]",
          ],
          commonError:
            "Multiplying instead of using the inverse relationship (p₁V₁ = p₂V₂), or saying molecules move faster (they do not at constant temperature).",
          difficulty: "core",
          hints: [
            "Boyle's law: pV is constant at constant temperature.",
            "Rearrange p₁V₁ = p₂V₂ for V₂.",
            "Smaller volume means more frequent wall collisions.",
          ],
          solutions: [
            {
              label: "Boyle's law",
              steps: [
                "p₁V₁ = p₂V₂",
                "V₂ = (1.0 × 10⁵ × 0.030)/(2.5 × 10⁵)",
                "V₂ = 3000/250000 = 0.012 m³",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p2-07",
          question:
            "A student investigates refraction using a semicircular glass block of refractive index 1.5.\n\n(a) Calculate the critical angle for the glass–air boundary. (sin⁻¹(0.667) = 41.8°) [3]\n(b) State what happens to a ray that strikes the boundary from inside the glass at 30°. [1]\n(c) State what happens to a ray that strikes the boundary from inside the glass at 60°. [1]",
          marks: 5,
          modelAnswer:
            "(a) sin c = 1/n = 1/1.5 = 0.667 → c = sin⁻¹(0.667) = 41.8°\n\n(b) 30° is less than the critical angle (41.8°), so the ray is mostly refracted out of the glass (bending away from the normal), with some weak reflection.\n\n(c) 60° is greater than the critical angle (41.8°), so total internal reflection occurs and the ray is reflected back into the glass.",
          markScheme: [
            "(a) sin c = 1/n used [1]",
            "(a) sin c = 0.667 [1]",
            "(a) c = 41.8° [1]",
            "(b) 30° < c ⇒ refracts out (escapes) [1]",
            "(c) 60° > c ⇒ total internal reflection [1]",
          ],
          commonError:
            "Using sin c = n instead of sin c = 1/n, giving an impossible value greater than 1.",
          difficulty: "core",
          hints: [
            "At the critical angle, sin c = 1/n.",
            "Compare each angle with the critical angle.",
            "Above the critical angle gives total internal reflection.",
          ],
          solutions: [
            {
              label: "Critical angle",
              steps: [
                "sin c = 1/n = 1/1.5 = 0.667",
                "c = sin⁻¹(0.667) = 41.8°",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p2-08",
          question:
            "A ship uses sonar to find the depth of the sea bed. A pulse of sound is sent down and its echo returns 0.30 s later. The speed of sound in seawater is 1500 m/s.\n\n(a) Calculate the depth of the sea bed. [3]\n(b) Sound is a longitudinal wave. State what is meant by a longitudinal wave. [2]",
          marks: 5,
          modelAnswer:
            "(a) Total distance travelled = v × t = 1500 × 0.30 = 450 m. This is down and back up, so depth = 450/2 = 225 m.\n\n(b) A longitudinal wave is one in which the particles of the medium vibrate (oscillate) back and forth parallel to the direction in which the wave (energy) travels, producing compressions and rarefactions.",
          markScheme: [
            "(a) total distance = v × t = 450 m [1]",
            "(a) halving for there-and-back [1]",
            "(a) depth = 225 m [1]",
            "(b) vibrations parallel to direction of travel [1]",
            "(b) compressions and rarefactions [1]",
          ],
          commonError:
            "Forgetting that the pulse travels twice the depth (down and back), giving double the correct depth.",
          difficulty: "core",
          hints: [
            "The pulse goes down and comes back.",
            "Total distance = speed × time.",
            "Depth is half the total distance.",
          ],
          solutions: [
            {
              label: "Echo depth",
              steps: [
                "Total distance = 1500 × 0.30 = 450 m",
                "Depth = 450/2 = 225 m",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p2-09",
          question:
            "A 12 V battery is connected to a 2.0 Ω resistor and a 4.0 Ω resistor in series.\n\n(a) Calculate the current in the circuit. [2]\n(b) Calculate the potential difference across the 4.0 Ω resistor. [2]\n(c) Show that the sum of the potential differences across the two resistors equals the battery voltage. [2]",
          marks: 6,
          modelAnswer:
            "(a) Total R = 2.0 + 4.0 = 6.0 Ω; I = V/R = 12/6.0 = 2.0 A\n\n(b) V = IR = 2.0 × 4.0 = 8.0 V\n\n(c) V across 2.0 Ω = IR = 2.0 × 2.0 = 4.0 V. Sum = 4.0 + 8.0 = 12 V, which equals the battery voltage. ✓",
          markScheme: [
            "(a) total R = 6.0 Ω and I = V/R [1]",
            "(a) 2.0 A [1]",
            "(b) V = IR used [1]",
            "(b) 8.0 V [1]",
            "(c) V across 2.0 Ω = 4.0 V [1]",
            "(c) 4.0 + 8.0 = 12 V = battery voltage [1]",
          ],
          commonError:
            "Assuming each resistor has the full 12 V across it (that applies to parallel, not series).",
          difficulty: "core",
          hints: [
            "Add resistances in series to find total R.",
            "Same current flows through both resistors.",
            "V = IR for each resistor; they add to the supply.",
          ],
          solutions: [
            {
              label: "Series circuit",
              steps: [
                "Total R = 2.0 + 4.0 = 6.0 Ω",
                "I = 12/6.0 = 2.0 A",
                "V(4 Ω) = 2.0 × 4.0 = 8.0 V; V(2 Ω) = 2.0 × 2.0 = 4.0 V",
                "8.0 + 4.0 = 12 V ✓",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p2-10",
          question:
            "(a) Describe how to charge a polythene rod negatively by friction, in terms of electron transfer. [3]\n(b) Two identical negatively charged spheres are brought close together. State and explain what happens to them. [2]",
          marks: 5,
          modelAnswer:
            "(a) Rub the polythene rod with a dry cloth (duster). Friction transfers electrons from the cloth onto the rod. The rod gains electrons and so becomes negatively charged; the cloth loses electrons and becomes positively charged. Only electrons move, not the positive nuclei.\n\n(b) They repel each other (move apart). Like charges repel, and both spheres carry negative charge, so there is a repulsive electrostatic force between them.",
          markScheme: [
            "(a) friction/rubbing with a cloth [1]",
            "(a) electrons transferred onto the rod [1]",
            "(a) rod gains electrons ⇒ negative (cloth positive) [1]",
            "(b) they repel / move apart [1]",
            "(b) like charges repel [1]",
          ],
          commonError:
            "Saying positive charge moves onto the rod — only electrons (negative charges) are transferred.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-qa-p2-11",
          question:
            "A simple d.c. motor consists of a coil in a magnetic field.\n\n(a) State the rule used to find the direction of the force on a current-carrying wire in a magnetic field. [1]\n(b) Explain why the coil experiences a turning effect (a couple). [2]\n(c) State the purpose of the split-ring commutator. [2]",
          marks: 5,
          modelAnswer:
            "(a) Fleming's left-hand rule.\n\n(b) The two sides of the coil carry current in opposite directions across the magnetic field. By the motor effect, the forces on the two sides act in opposite directions (one up, one down), producing a turning effect (a couple) that rotates the coil.\n\n(c) The split-ring commutator reverses the direction of the current in the coil every half-turn. This keeps the force on each side acting in the right direction so the coil continues to rotate the same way (continuous rotation).",
          markScheme: [
            "(a) Fleming's left-hand rule [1]",
            "(b) opposite forces on the two sides of the coil [1]",
            "(b) producing a turning effect/couple [1]",
            "(c) reverses current every half-turn [1]",
            "(c) so the coil keeps rotating in the same direction [1]",
          ],
          commonError:
            "Confusing the split-ring commutator (motor, d.c.) with slip rings (a.c. generator).",
          difficulty: "core",
          hints: [
            "The two coil sides feel forces in opposite directions.",
            "Use Fleming's left-hand rule for each side.",
            "The commutator swaps the current direction each half-turn.",
          ],
        },
        {
          id: "exam-physics-qa-p2-12",
          question:
            "A wire of length 0.30 m carries a current of 6.0 A at right angles to a uniform magnetic field of flux density 0.40 T.\n\n(a) Calculate the force on the wire. [2]\n(b) State two ways the force could be increased. [2]\n(c) State the effect on the force if the wire were placed parallel to the field instead. [1]",
          marks: 5,
          modelAnswer:
            "(a) F = BIL = 0.40 × 6.0 × 0.30 = 0.72 N\n\n(b) Any two of: increase the current; increase the magnetic flux density (stronger magnet); increase the length of wire in the field.\n\n(c) The force would be zero (there is no force when the current is parallel to the field).",
          markScheme: [
            "(a) F = BIL used [1]",
            "(a) 0.72 N [1]",
            "(b) increase current [1]",
            "(b) increase B / use longer wire [1]",
            "(c) force = 0 when parallel [1]",
          ],
          commonError:
            "Forgetting the force is maximum when the wire is perpendicular to the field and zero when parallel.",
          difficulty: "core",
          hints: [
            "Use F = BIL.",
            "Force depends on B, I and L.",
            "When current is along the field, there is no force.",
          ],
          solutions: [
            {
              label: "Motor effect force",
              steps: [
                "F = BIL = 0.40 × 6.0 × 0.30",
                "F = 0.72 N",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p2-13",
          question:
            "An ideal step-up transformer increases voltage from 25 000 V to 400 000 V for transmission across the National Grid.\n\n(a) Calculate the turns ratio Ns/Np. [2]\n(b) Explain why electrical energy is transmitted at very high voltage. [3]",
          marks: 5,
          modelAnswer:
            "(a) Ns/Np = Vs/Vp = 400 000/25 000 = 16\n\n(b) For a given power P = VI, increasing the voltage decreases the current (since I = P/V). The power lost as heat in the transmission cables is given by I²R, so a smaller current greatly reduces the energy wasted in the cables, making transmission more efficient.",
          markScheme: [
            "(a) Ns/Np = Vs/Vp [1]",
            "(a) 16 [1]",
            "(b) higher V ⇒ lower current (P = VI) [1]",
            "(b) power loss in cables = I²R [1]",
            "(b) lower current ⇒ much less energy wasted as heat [1]",
          ],
          commonError:
            "Saying high voltage 'pushes the current faster'; the key point is that high voltage allows a low current, reducing I²R losses.",
          difficulty: "challenge",
          hints: [
            "Turns ratio equals voltage ratio.",
            "For fixed power, higher voltage means lower current.",
            "Cable heating loss depends on current squared.",
          ],
          solutions: [
            {
              label: "Turns ratio",
              steps: [
                "Ns/Np = Vs/Vp = 400 000/25 000",
                "= 16",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p2-14",
          question:
            "(a) Describe the differences between alpha, beta and gamma radiation in terms of their nature and penetrating power. [4]\n(b) A radioactive source is to be stored safely. Suggest two precautions that should be taken. [2]",
          marks: 6,
          modelAnswer:
            "(a) Alpha (α) is a helium nucleus (2 protons + 2 neutrons), positively charged, and the least penetrating — stopped by paper or a few cm of air. Beta (β) is a fast electron, negatively charged, more penetrating — stopped by a few mm of aluminium. Gamma (γ) is high-frequency electromagnetic radiation, uncharged, and the most penetrating — only reduced by thick lead or concrete.\n\n(b) Any two of: store in a lead-lined container; keep at a distance / use tongs to handle (do not touch with bare hands); limit the time of exposure; keep away from people / label clearly; wear protective clothing/monitoring badge.",
          markScheme: [
            "(a) alpha = helium nucleus, stopped by paper [1]",
            "(a) beta = electron, stopped by a few mm aluminium [1]",
            "(a) gamma = EM wave, stopped by thick lead/concrete [1]",
            "(a) correct order of penetration α < β < γ [1]",
            "(b) one valid safety precaution [1]",
            "(b) a second valid safety precaution [1]",
          ],
          commonError:
            "Saying gamma is a particle, or that alpha is the most penetrating (it is the most ionising but least penetrating).",
          difficulty: "core",
          hints: [
            "Alpha is a helium nucleus; beta is an electron; gamma is an EM wave.",
            "Penetration order: alpha < beta < gamma.",
            "Safety: shielding, distance, time.",
          ],
        },
        {
          id: "exam-physics-qa-p2-15",
          question:
            "A sample of a radioactive isotope contains 8.0 × 10⁶ undecayed nuclei. Its half-life is 5.0 years.\n\n(a) Calculate the number of undecayed nuclei remaining after 15 years. [3]\n(b) Explain why it is impossible to predict exactly when a particular nucleus will decay. [2]",
          marks: 5,
          modelAnswer:
            "(a) 15 years = 15/5.0 = 3 half-lives. After each half-life the number halves: 8.0 × 10⁶ → 4.0 × 10⁶ → 2.0 × 10⁶ → 1.0 × 10⁶ undecayed nuclei.\n\n(b) Radioactive decay is a random (spontaneous) process. Each nucleus has the same fixed chance of decaying in a given time, but we cannot say which nucleus will decay or exactly when — only the average behaviour of a large number can be predicted.",
          markScheme: [
            "(a) 15 years = 3 half-lives [1]",
            "(a) halving applied three times [1]",
            "(a) 1.0 × 10⁶ nuclei [1]",
            "(b) decay is random/spontaneous [1]",
            "(b) only the average/statistical behaviour is predictable [1]",
          ],
          commonError:
            "Dividing by 3 instead of halving three times, or thinking decay can be timed precisely.",
          difficulty: "core",
          hints: [
            "Number of half-lives = 15 ÷ 5.0.",
            "Halve the number once per half-life.",
            "Decay is a random process.",
          ],
          solutions: [
            {
              label: "Half-life count",
              steps: [
                "Half-lives = 15/5.0 = 3",
                "8.0 × 10⁶ → 4.0 × 10⁶ → 2.0 × 10⁶ → 1.0 × 10⁶",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p2-16",
          question:
            "(a) List the planets of the Solar System in order, starting from the Sun. [2]\n(b) Explain why the orbital speed of the planets decreases with distance from the Sun. [2]\n(c) State the difference between a planet and a comet in terms of their orbits. [1]",
          marks: 5,
          modelAnswer:
            "(a) Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.\n\n(b) The Sun's gravitational pull is weaker at greater distances. A weaker gravitational (centripetal) force at a larger orbit corresponds to a lower orbital speed needed to maintain a stable orbit, so more distant planets move more slowly.\n\n(c) A planet has a nearly circular orbit, whereas a comet has a highly elliptical (elongated) orbit; the comet's speed varies a lot, moving fastest when closest to the Sun.",
          markScheme: [
            "(a) correct order of inner planets [1]",
            "(a) correct order of outer planets [1]",
            "(b) gravity weaker further from the Sun [1]",
            "(b) weaker force ⇒ lower orbital speed [1]",
            "(c) planet near-circular, comet highly elliptical [1]",
          ],
          commonError:
            "Including Pluto as a planet, or stating comets have circular orbits.",
          difficulty: "core",
          hints: [
            "Remember the order out from the Sun.",
            "Gravity gets weaker with distance.",
            "Comets have stretched, elliptical orbits.",
          ],
        },
        {
          id: "exam-physics-qa-p2-17",
          question:
            "A 2.0 kW kettle is used to heat 1.2 kg of water from 18 °C to its boiling point of 100 °C. (c of water = 4200 J/(kg °C))\n\n(a) Calculate the energy needed to heat the water to boiling. [2]\n(b) Calculate the minimum time taken, assuming all the electrical energy heats the water. [2]\n(c) The actual time is longer than calculated. Give two reasons. [2]",
          marks: 6,
          modelAnswer:
            "(a) Q = mcΔT = 1.2 × 4200 × (100 − 18) = 1.2 × 4200 × 82 = 413 280 J ≈ 4.13 × 10⁵ J\n\n(b) t = Q/P = 413 280/2000 = 206.6 s ≈ 207 s\n\n(c) Any two of: some thermal energy is lost to the surroundings (and the kettle body/element heats up too); the kettle is not 100% efficient; some water may evaporate before boiling.",
          markScheme: [
            "(a) Q = mcΔT with ΔT = 82 [1]",
            "(a) 4.13 × 10⁵ J [1]",
            "(b) t = Q/P used [1]",
            "(b) ≈ 207 s (ecf) [1]",
            "(c) energy lost to surroundings/kettle [1]",
            "(c) a second valid reason [1]",
          ],
          commonError:
            "Using ΔT = 100 °C instead of 82 °C (forgetting to subtract the starting temperature).",
          difficulty: "core",
          hints: [
            "ΔT = 100 − 18 = 82 °C.",
            "Q = mcΔT, then t = Q/P.",
            "Real kettles lose heat to the surroundings.",
          ],
          solutions: [
            {
              label: "Heat and time",
              steps: [
                "Q = mcΔT = 1.2 × 4200 × 82 = 413 280 J",
                "t = Q/P = 413 280/2000 = 207 s",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p2-18",
          question:
            "A trolley of mass 2.0 kg moving at 3.0 m/s collides with a stationary trolley of mass 1.0 kg. After the collision they move off together.\n\n(a) Calculate the velocity of the combined trolleys after the collision. [3]\n(b) Show whether kinetic energy is conserved in this collision. [3]",
          marks: 6,
          modelAnswer:
            "(a) Conservation of momentum: m₁u₁ = (m₁ + m₂)v → (2.0)(3.0) = (2.0 + 1.0)v → 6.0 = 3.0v → v = 2.0 m/s\n\n(b) KE before = ½ × 2.0 × 3.0² = ½ × 2.0 × 9.0 = 9.0 J\nKE after = ½ × 3.0 × 2.0² = ½ × 3.0 × 4.0 = 6.0 J\nKE after (6.0 J) is less than KE before (9.0 J), so kinetic energy is NOT conserved — 3.0 J is transferred to other forms (heat/sound). The collision is inelastic.",
          markScheme: [
            "(a) conservation of momentum used [1]",
            "(a) 6.0 = 3.0v [1]",
            "(a) v = 2.0 m/s [1]",
            "(b) KE before = 9.0 J [1]",
            "(b) KE after = 6.0 J [1]",
            "(b) KE not conserved (3.0 J lost) ⇒ inelastic [1]",
          ],
          commonError:
            "Assuming kinetic energy is always conserved; momentum is conserved but KE is not in an inelastic collision.",
          difficulty: "challenge",
          hints: [
            "Use conservation of momentum for the velocity.",
            "Compare ½mv² before and after.",
            "If KE decreases, the collision is inelastic.",
          ],
          solutions: [
            {
              label: "Momentum and energy",
              steps: [
                "Momentum: (2.0)(3.0) = (3.0)v → v = 2.0 m/s",
                "KE before = ½(2.0)(3.0²) = 9.0 J",
                "KE after = ½(3.0)(2.0²) = 6.0 J",
                "9.0 J ≠ 6.0 J ⇒ KE not conserved",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p2-19",
          question:
            "(a) Define the moment of a force. [1]\n(b) A spanner is used to undo a nut. A force of 25 N is applied at the end of the spanner, 0.18 m from the nut, perpendicular to the spanner. Calculate the moment about the nut. [2]\n(c) Explain why a longer spanner makes it easier to undo a tight nut. [2]",
          marks: 5,
          modelAnswer:
            "(a) The moment of a force is the force multiplied by the perpendicular distance from the pivot (line of action) to the pivot: moment = force × perpendicular distance.\n\n(b) Moment = F × d = 25 × 0.18 = 4.5 N m\n\n(c) A longer spanner gives a greater perpendicular distance from the nut. For the same applied force, this produces a larger moment (turning effect), so the nut is easier to turn. (Or: a smaller force gives the same moment.)",
          markScheme: [
            "(a) moment = force × perpendicular distance [1]",
            "(b) 25 × 0.18 used [1]",
            "(b) 4.5 N m [1]",
            "(c) longer spanner ⇒ greater distance [1]",
            "(c) greater distance ⇒ larger moment for same force [1]",
          ],
          commonError:
            "Using the distance in cm without converting, or forgetting that the distance must be perpendicular to the force.",
          difficulty: "warmup",
          solutions: [
            {
              label: "Moment of a force",
              steps: [
                "Moment = F × d = 25 × 0.18",
                "= 4.5 N m",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p2-20",
          question:
            "A 60 W filament lamp and a 11 W LED lamp give out the same amount of light. Both are used for 3.0 hours.\n\n(a) Calculate the electrical energy used by the filament lamp in 3.0 hours, in joules. [3]\n(b) Calculate the energy saved by using the LED instead, in joules. [2]\n(c) Suggest why the filament lamp uses more energy for the same light output. [1]",
          marks: 6,
          modelAnswer:
            "(a) t = 3.0 × 3600 = 10 800 s; E = Pt = 60 × 10 800 = 648 000 J = 6.48 × 10⁵ J\n\n(b) Energy used by LED = 11 × 10 800 = 118 800 J. Energy saved = 648 000 − 118 800 = 529 200 J ≈ 5.3 × 10⁵ J\n\n(c) The filament lamp is much less efficient — a large fraction of the electrical energy is transferred to thermal energy (heat) rather than light, so it needs more power for the same light output.",
          markScheme: [
            "(a) t = 10 800 s [1]",
            "(a) E = Pt used [1]",
            "(a) 6.48 × 10⁵ J [1]",
            "(b) LED energy = 118 800 J [1]",
            "(b) saving ≈ 5.3 × 10⁵ J [1]",
            "(c) filament wastes more energy as heat (less efficient) [1]",
          ],
          commonError:
            "Forgetting to convert hours to seconds, giving energy values 3600 times too small.",
          difficulty: "core",
          hints: [
            "Convert 3.0 hours to seconds (× 3600).",
            "E = P × t for each lamp.",
            "Subtract the LED energy from the filament energy.",
          ],
          solutions: [
            {
              label: "Energy comparison",
              steps: [
                "t = 3.0 × 3600 = 10 800 s",
                "Filament: E = 60 × 10 800 = 648 000 J",
                "LED: E = 11 × 10 800 = 118 800 J",
                "Saving = 648 000 − 118 800 = 529 200 J ≈ 5.3 × 10⁵ J",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "exam-physics-qa-3",
      title: "Mock Exam — Structured Paper 3",
      description:
        "20 structured questions spanning the full syllabus. Show all working and include units. Suggested time: 90 minutes.",
      questions: [
        {
          id: "exam-physics-qa-p3-01",
          question:
            "An object is thrown vertically upwards at 15 m/s. (g = 10 m/s², ignore air resistance)\n\n(a) Calculate the time taken to reach its highest point. [2]\n(b) Calculate the maximum height reached. [2]",
          marks: 4,
          modelAnswer:
            "(a) At the highest point v = 0. Using v = u + at (a = −g): 0 = 15 − 10t → t = 1.5 s\n\n(b) Using v² = u² + 2as: 0 = 15² + 2(−10)s → 0 = 225 − 20s → s = 225/20 = 11.25 m ≈ 11 m",
          markScheme: [
            "(a) v = u + at with v = 0 [1]",
            "(a) t = 1.5 s [1]",
            "(b) v² = u² + 2as (or ½(u+v)t) used [1]",
            "(b) 11.25 m ≈ 11 m [1]",
          ],
          commonError:
            "Forgetting that velocity is zero at the highest point, or using g as positive while taking up as positive.",
          difficulty: "core",
          hints: [
            "At the top, the velocity is momentarily zero.",
            "Use v = u + at to find the time.",
            "Use v² = u² + 2as for the height.",
          ],
          solutions: [
            {
              label: "Kinematics upward",
              steps: [
                "0 = 15 − 10t → t = 1.5 s",
                "0 = 15² + 2(−10)s → s = 225/20 = 11.25 m",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p3-02",
          question:
            "A 2.0 kg block is pulled along a rough horizontal surface by a horizontal force of 12 N. The friction force is 4.0 N.\n\n(a) Calculate the resultant force on the block. [1]\n(b) Calculate the acceleration of the block. [2]\n(c) The pulling force is removed while the block is moving. Describe and explain the subsequent motion. [2]",
          marks: 5,
          modelAnswer:
            "(a) Resultant force = 12 − 4.0 = 8.0 N\n\n(b) a = F/m = 8.0/2.0 = 4.0 m/s²\n\n(c) The block decelerates and eventually stops. With the pull removed, the only horizontal force is friction (4.0 N) acting backwards, which is now the resultant force; it decelerates the block until it comes to rest.",
          markScheme: [
            "(a) 8.0 N [1]",
            "(b) a = F/m used [1]",
            "(b) 4.0 m/s² [1]",
            "(c) block slows down / decelerates and stops [1]",
            "(c) friction is now the (backward) resultant force [1]",
          ],
          commonError:
            "Using the applied force (12 N) instead of the resultant when finding acceleration.",
          difficulty: "core",
          hints: [
            "Resultant = applied force − friction.",
            "Then a = F/m.",
            "After the pull stops, friction still acts.",
          ],
          solutions: [
            {
              label: "Resultant and acceleration",
              steps: [
                "Resultant = 12 − 4.0 = 8.0 N",
                "a = 8.0/2.0 = 4.0 m/s²",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p3-03",
          question:
            "A metal block has a mass of 0.81 kg and a volume of 3.0 × 10⁻⁴ m³.\n\n(a) Calculate the density of the metal in kg/m³. [2]\n(b) The block is lowered into water (density 1000 kg/m³). State and explain whether it floats or sinks. [2]",
          marks: 4,
          modelAnswer:
            "(a) ρ = m/V = 0.81/(3.0 × 10⁻⁴) = 2700 kg/m³\n\n(b) It sinks. Its density (2700 kg/m³) is greater than that of water (1000 kg/m³), so its weight is greater than the maximum upthrust the water can provide.",
          markScheme: [
            "(a) ρ = m/V used [1]",
            "(a) 2700 kg/m³ [1]",
            "(b) sinks [1]",
            "(b) density greater than water [1]",
          ],
          commonError:
            "Misplacing the power of ten when dividing by 3.0 × 10⁻⁴.",
          difficulty: "core",
          hints: [
            "Density = mass ÷ volume.",
            "Dividing by 10⁻⁴ is the same as multiplying by 10⁴.",
            "Compare with the density of water.",
          ],
          solutions: [
            {
              label: "Density",
              steps: [
                "ρ = m/V = 0.81/(3.0 × 10⁻⁴)",
                "= 0.81/0.0003 = 2700 kg/m³",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p3-04",
          question:
            "A hydraulic braking system has a master piston of cross-sectional area 1.5 × 10⁻⁴ m². A force of 90 N is applied to it.\n\n(a) Calculate the pressure produced in the brake fluid. [2]\n(b) This pressure is transmitted to a slave piston of area 6.0 × 10⁻⁴ m². Calculate the force on the slave piston. [2]\n(c) State the property of liquids that makes hydraulic systems possible. [1]",
          marks: 5,
          modelAnswer:
            "(a) p = F/A = 90/(1.5 × 10⁻⁴) = 6.0 × 10⁵ Pa\n\n(b) F = pA = 6.0 × 10⁵ × 6.0 × 10⁻⁴ = 360 N\n\n(c) Liquids are (virtually) incompressible, so the pressure applied is transmitted equally throughout the fluid.",
          markScheme: [
            "(a) p = F/A used [1]",
            "(a) 6.0 × 10⁵ Pa [1]",
            "(b) F = pA used [1]",
            "(b) 360 N [1]",
            "(c) liquids are incompressible / transmit pressure equally [1]",
          ],
          commonError:
            "Errors with the powers of ten, or forgetting that the same pressure acts on both pistons.",
          difficulty: "challenge",
          hints: [
            "Pressure = force ÷ area on the master piston.",
            "Same pressure acts on the slave piston.",
            "Force on slave = pressure × its area.",
          ],
          solutions: [
            {
              label: "Hydraulic force multiplication",
              steps: [
                "p = 90/(1.5 × 10⁻⁴) = 6.0 × 10⁵ Pa",
                "F = pA = 6.0 × 10⁵ × 6.0 × 10⁻⁴ = 360 N",
                "(Force multiplied by area ratio 6.0/1.5 = 4)",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p3-05",
          question:
            "A 0.20 kg ball is dropped from a height of 1.8 m onto the ground. (g = 10 m/s², ignore air resistance)\n\n(a) Calculate the gravitational potential energy lost as it falls. [2]\n(b) Calculate the speed of the ball just before it hits the ground, using energy. [3]",
          marks: 5,
          modelAnswer:
            "(a) ΔGPE = mgh = 0.20 × 10 × 1.8 = 3.6 J\n\n(b) All GPE becomes KE: ½mv² = 3.6 J → v² = (2 × 3.6)/0.20 = 7.2/0.20 = 36 → v = √36 = 6.0 m/s",
          markScheme: [
            "(a) GPE = mgh used [1]",
            "(a) 3.6 J [1]",
            "(b) ½mv² = GPE used [1]",
            "(b) v² = 36 [1]",
            "(b) v = 6.0 m/s [1]",
          ],
          commonError:
            "Forgetting the factor of ½ in kinetic energy, giving v² too small.",
          difficulty: "core",
          hints: [
            "GPE = mgh.",
            "All GPE converts to KE = ½mv².",
            "Rearrange to v = √(2 × KE / m).",
          ],
          solutions: [
            {
              label: "Energy conservation",
              steps: [
                "ΔGPE = mgh = 0.20 × 10 × 1.8 = 3.6 J",
                "½mv² = 3.6 → v² = 7.2/0.20 = 36",
                "v = 6.0 m/s",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p3-06",
          question:
            "(a) Describe how a convection current forms when water in a beaker is heated from below. [3]\n(b) Explain why heating elements in kettles are placed near the bottom. [2]",
          marks: 5,
          modelAnswer:
            "(a) The water near the bottom is heated, expands and becomes less dense. This warmer, less dense water rises. Cooler, denser water from above sinks to take its place, where it is heated in turn. This sets up a continuous circulation — a convection current — that transfers thermal energy through the water.\n\n(b) Placing the element at the bottom means the heated water rises and cooler water sinks to be heated, so convection currents circulate and heat all the water. If the element were at the top, the hot water would stay at the top and the rest would heat only slowly (by conduction).",
          markScheme: [
            "(a) heated water expands / becomes less dense [1]",
            "(a) less dense water rises [1]",
            "(a) cooler denser water sinks to replace it (circulation) [1]",
            "(b) bottom heating drives convection so all water heats [1]",
            "(b) top heating ⇒ no convection / heats slowly [1]",
          ],
          commonError:
            "Saying hot water sinks (it rises because it is less dense), or describing conduction instead of convection.",
          difficulty: "core",
          hints: [
            "Heated fluid expands and becomes less dense.",
            "Less dense fluid rises; denser fluid sinks.",
            "Think about where heating drives circulation.",
          ],
        },
        {
          id: "exam-physics-qa-p3-07",
          question:
            "Water waves in a ripple tank have a wavelength of 0.025 m and a frequency of 12 Hz.\n\n(a) Calculate the speed of the waves. [2]\n(b) The waves pass into a shallower region where their speed decreases to 0.24 m/s. The frequency stays the same. Calculate the new wavelength. [3]",
          marks: 5,
          modelAnswer:
            "(a) v = fλ = 12 × 0.025 = 0.30 m/s\n\n(b) λ = v/f = 0.24/12 = 0.020 m. So the wavelength decreases to 0.020 m (2.0 cm).",
          markScheme: [
            "(a) v = fλ used [1]",
            "(a) 0.30 m/s [1]",
            "(b) frequency unchanged stated/used [1]",
            "(b) λ = v/f used [1]",
            "(b) 0.020 m [1]",
          ],
          commonError:
            "Assuming the frequency changes when the wave enters the shallow region — it is the speed and wavelength that change.",
          difficulty: "core",
          hints: [
            "Use v = fλ to find the original speed.",
            "Frequency stays constant across the boundary.",
            "New wavelength = new speed ÷ frequency.",
          ],
          solutions: [
            {
              label: "Wave speed and wavelength",
              steps: [
                "v = fλ = 12 × 0.025 = 0.30 m/s",
                "λ = v/f = 0.24/12 = 0.020 m",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p3-08",
          question:
            "(a) Draw/describe the path of a ray of light through a rectangular glass block, entering at an angle to the normal, and explain why the emerging ray is parallel to the incoming ray. [3]\n(b) State one way the speed and direction of the light change as it enters the glass. [2]",
          marks: 5,
          modelAnswer:
            "(a) On entering the glass the ray bends towards the normal (it refracts). It travels in a straight line through the block, then on leaving it bends away from the normal by an equal amount. Because the two surfaces are parallel, the angle of incidence on entry equals the angle of refraction on exit, so the emerging ray is parallel to the original incident ray (but laterally displaced/shifted sideways).\n\n(b) On entering the glass the light slows down (its speed decreases), and it changes direction by bending towards the normal.",
          markScheme: [
            "(a) bends towards normal on entry [1]",
            "(a) bends away from normal on exit [1]",
            "(a) parallel surfaces ⇒ emergent ray parallel (laterally displaced) [1]",
            "(b) speed decreases [1]",
            "(b) bends towards the normal [1]",
          ],
          commonError:
            "Saying the ray exits along the same line as it entered (it is shifted sideways), or that it speeds up in glass.",
          difficulty: "core",
          hints: [
            "Light bends towards the normal entering a denser medium.",
            "The two faces of the block are parallel.",
            "Equal-and-opposite bends keep the rays parallel.",
          ],
        },
        {
          id: "exam-physics-qa-p3-09",
          question:
            "A 9.0 V battery is connected to two resistors in series: a 10 Ω resistor and a variable resistor R. The current in the circuit is 0.30 A.\n\n(a) Calculate the total resistance of the circuit. [2]\n(b) Calculate the resistance of the variable resistor R. [2]\n(c) State what happens to the current if R is increased. [1]",
          marks: 5,
          modelAnswer:
            "(a) R_total = V/I = 9.0/0.30 = 30 Ω\n\n(b) R = R_total − 10 = 30 − 10 = 20 Ω\n\n(c) The current decreases (increasing the total resistance reduces the current, since I = V/R).",
          markScheme: [
            "(a) R = V/I used [1]",
            "(a) 30 Ω [1]",
            "(b) R = total − 10 [1]",
            "(b) 20 Ω [1]",
            "(c) current decreases [1]",
          ],
          commonError:
            "Forgetting to subtract the fixed resistor's value to isolate R, or multiplying V and I.",
          difficulty: "core",
          hints: [
            "Total resistance = V ÷ I.",
            "In series, resistances add, so subtract the 10 Ω.",
            "Higher resistance gives lower current.",
          ],
          solutions: [
            {
              label: "Series resistance",
              steps: [
                "R_total = 9.0/0.30 = 30 Ω",
                "R = 30 − 10 = 20 Ω",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p3-10",
          question:
            "(a) State the difference between direct current (d.c.) and alternating current (a.c.). [2]\n(b) A mains supply is 230 V. A heater connected to it has a power of 1150 W. Calculate the current it draws. [2]\n(c) Calculate the resistance of the heater. [2]",
          marks: 6,
          modelAnswer:
            "(a) In direct current the charge flows in one direction only (constant direction), whereas in alternating current the direction of flow reverses regularly (back and forth).\n\n(b) P = VI → I = P/V = 1150/230 = 5.0 A\n\n(c) R = V/I = 230/5.0 = 46 Ω (or R = V²/P = 230²/1150 = 46 Ω)",
          markScheme: [
            "(a) d.c. flows one direction only [1]",
            "(a) a.c. reverses direction regularly [1]",
            "(b) I = P/V used [1]",
            "(b) 5.0 A [1]",
            "(c) R = V/I used [1]",
            "(c) 46 Ω [1]",
          ],
          commonError:
            "Mixing up the power equations, e.g. using R = P/V instead of R = V/I or V²/P.",
          difficulty: "core",
          hints: [
            "d.c. is one-directional; a.c. reverses.",
            "Current from P = VI.",
            "Resistance from R = V/I.",
          ],
          solutions: [
            {
              label: "Power, current, resistance",
              steps: [
                "I = P/V = 1150/230 = 5.0 A",
                "R = V/I = 230/5.0 = 46 Ω",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p3-11",
          question:
            "(a) Describe how to plot the magnetic field pattern around a bar magnet using a compass. [2]\n(b) State what happens to the magnetic field strength as you move further from the magnet, and how this is shown on a field-line diagram. [2]\n(c) Define the direction of a magnetic field line. [1]",
          marks: 5,
          modelAnswer:
            "(a) Place the bar magnet on paper. Put a small plotting compass near one pole, mark dots at the ends of the compass needle, then move the compass so its tail is where the head was, marking again. Repeat to build up a line, then join the dots; repeat from different starting points to map the whole field.\n\n(b) The field gets weaker as you move further from the magnet. On a field-line diagram this is shown by the lines being further apart (less closely spaced) where the field is weaker.\n\n(c) The direction of a magnetic field line is the direction a free north pole would move / points from north pole to south pole outside the magnet.",
          markScheme: [
            "(a) use a plotting compass and mark its positions [1]",
            "(a) join the dots / repeat to map field [1]",
            "(b) field weakens with distance [1]",
            "(b) shown by lines spaced further apart [1]",
            "(c) direction a free north pole would move (N to S outside) [1]",
          ],
          commonError:
            "Saying field lines point from south to north outside the magnet (they point from north to south outside).",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-qa-p3-12",
          question:
            "A coil is rotated in a magnetic field to act as an a.c. generator.\n\n(a) State two ways to increase the peak e.m.f. produced by the generator. [2]\n(b) Sketch and describe the shape of the output voltage against time. [2]\n(c) State the function of the slip rings. [1]",
          marks: 5,
          modelAnswer:
            "(a) Any two of: rotate the coil faster (higher frequency); use more turns on the coil; use a stronger magnet (greater flux density); use a coil of larger area.\n\n(b) The output is alternating: a sine curve that goes positive then negative, repeating. The voltage is zero when the coil is parallel to the field (moving along the field lines, cutting none) and maximum when the coil is perpendicular (cutting field lines fastest).\n\n(c) Slip rings (with brushes) make a continuous sliding electrical contact between the rotating coil and the external circuit, allowing the alternating current to be carried out without the wires twisting.",
          markScheme: [
            "(a) rotate faster / more turns / stronger magnet / larger area (any two) [2]",
            "(b) sine curve, alternating positive and negative [1]",
            "(b) zero/max linked to coil orientation [1]",
            "(c) slip rings give continuous contact to external circuit [1]",
          ],
          commonError:
            "Describing a split-ring commutator (used in motors / d.c. generators) instead of slip rings for a.c.",
          difficulty: "core",
          hints: [
            "More turns, stronger field, faster rotation all help.",
            "The output is a sine wave (alternating).",
            "Slip rings keep contact without twisting wires.",
          ],
        },
        {
          id: "exam-physics-qa-p3-13",
          question:
            "(a) Describe the plum-pudding model of the atom. [2]\n(b) Describe the result of the alpha-particle scattering experiment and explain how it led to the nuclear model of the atom. [3]",
          marks: 5,
          modelAnswer:
            "(a) In the plum-pudding model the atom was thought to be a sphere of positive charge (the 'pudding') with negatively charged electrons (the 'plums') embedded throughout it. The positive charge and mass were spread evenly through the whole atom.\n\n(b) Alpha particles were fired at a thin gold foil. Most passed straight through with little or no deflection, but a few were deflected through large angles and a very small number bounced almost straight back. The fact that most passed through showed the atom is mostly empty space; the large-angle deflections showed there is a small, dense, positively charged region — the nucleus — that repels the positive alpha particles. This led to the nuclear model of the atom.",
          markScheme: [
            "(a) sphere of positive charge [1]",
            "(a) electrons embedded in it [1]",
            "(b) most alpha particles pass straight through ⇒ mostly empty space [1]",
            "(b) a few deflected through large angles / bounce back [1]",
            "(b) implies small, dense, positive nucleus [1]",
          ],
          commonError:
            "Saying most alpha particles were deflected (most actually passed straight through), or that the nucleus is negative.",
          difficulty: "core",
          hints: [
            "Plum-pudding: positive 'dough' with electron 'plums'.",
            "Most alphas went straight through the foil.",
            "Large deflections imply a tiny, dense, positive nucleus.",
          ],
        },
        {
          id: "exam-physics-qa-p3-14",
          question:
            "A nuclear reaction is written: ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + x ¹₀n.\n\n(a) Using conservation of nucleon number and proton number, determine the value of x. [3]\n(b) State what type of nuclear reaction this is. [1]",
          marks: 4,
          modelAnswer:
            "(a) Nucleon numbers: left = 235 + 1 = 236. Right = 141 + 92 + x(1) = 233 + x. So 236 = 233 + x → x = 3.\nCheck proton numbers: left = 92 + 0 = 92; right = 56 + 36 + 0 = 92. ✓ (neutrons have proton number 0)\nSo x = 3 neutrons.\n\n(b) Nuclear fission.",
          markScheme: [
            "(a) nucleon numbers balanced: 236 = 233 + x [1]",
            "(a) proton numbers balanced (92 = 92) checked [1]",
            "(a) x = 3 [1]",
            "(b) nuclear fission [1]",
          ],
          commonError:
            "Forgetting to include the bombarding neutron's nucleon number on the left-hand side.",
          difficulty: "challenge",
          hints: [
            "Total nucleon number is conserved.",
            "Add the neutron's nucleon number (1) to the uranium's 235.",
            "236 = 141 + 92 + x.",
          ],
          solutions: [
            {
              label: "Balancing nucleon numbers",
              steps: [
                "Left nucleon total = 235 + 1 = 236",
                "Right = 141 + 92 + x = 233 + x",
                "236 = 233 + x → x = 3 neutrons",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p3-15",
          question:
            "The Sun is a main-sequence star.\n\n(a) State the process by which the Sun releases energy and the main fuel involved. [2]\n(b) Describe what will happen to the Sun when it runs out of hydrogen in its core. [3]",
          marks: 5,
          modelAnswer:
            "(a) The Sun releases energy by nuclear fusion, in which hydrogen nuclei fuse together (to form helium). Hydrogen is the main fuel.\n\n(b) When the hydrogen in the core is used up, the Sun (a relatively low-mass star) will expand and cool to become a red giant. It will later shed its outer layers (as a planetary nebula), leaving a hot, dense core that becomes a white dwarf, which will gradually cool down over a very long time.",
          markScheme: [
            "(a) nuclear fusion [1]",
            "(a) hydrogen (to helium) [1]",
            "(b) becomes a red giant [1]",
            "(b) sheds outer layers / planetary nebula [1]",
            "(b) leaves a white dwarf [1]",
          ],
          commonError:
            "Saying the Sun will become a supernova/black hole — that is the fate of much more massive stars, not the Sun.",
          difficulty: "core",
          hints: [
            "Stars shine by fusing hydrogen into helium.",
            "A Sun-like star swells into a red giant first.",
            "It ends as a white dwarf, not a supernova.",
          ],
        },
        {
          id: "exam-physics-qa-p3-16",
          question:
            "A 0.50 kg block of aluminium is heated by a 40 W heater for 90 s. Its temperature rises from 20 °C to 28 °C.\n\n(a) Calculate the electrical energy supplied. [2]\n(b) Use your answer to calculate the specific heat capacity of aluminium, assuming no heat loss. [3]",
          marks: 5,
          modelAnswer:
            "(a) E = Pt = 40 × 90 = 3600 J\n\n(b) Q = mcΔT → c = Q/(mΔT) = 3600/(0.50 × (28 − 20)) = 3600/(0.50 × 8) = 3600/4.0 = 900 J/(kg °C)",
          markScheme: [
            "(a) E = Pt used [1]",
            "(a) 3600 J [1]",
            "(b) c = Q/(mΔT) used [1]",
            "(b) ΔT = 8 °C and denominator = 4.0 [1]",
            "(b) 900 J/(kg °C) [1]",
          ],
          commonError:
            "Using ΔT = 28 °C instead of 8 °C, or forgetting that energy supplied = Pt.",
          difficulty: "core",
          hints: [
            "Energy supplied = power × time.",
            "Q = mcΔT, rearranged for c.",
            "ΔT = 28 − 20 = 8 °C.",
          ],
          solutions: [
            {
              label: "Specific heat capacity",
              steps: [
                "E = Pt = 40 × 90 = 3600 J",
                "c = Q/(mΔT) = 3600/(0.50 × 8)",
                "= 3600/4.0 = 900 J/(kg °C)",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p3-17",
          question:
            "A spring has an unstretched length of 8.0 cm. When a 4.0 N weight is hung from it, its length becomes 12 cm. It obeys Hooke's law.\n\n(a) Calculate the spring constant in N/cm. [2]\n(b) Calculate the length of the spring when a 6.0 N weight is hung from it. [3]",
          marks: 5,
          modelAnswer:
            "(a) Extension = 12 − 8.0 = 4.0 cm. k = F/x = 4.0/4.0 = 1.0 N/cm\n\n(b) Extension for 6.0 N: x = F/k = 6.0/1.0 = 6.0 cm. New length = 8.0 + 6.0 = 14 cm",
          markScheme: [
            "(a) extension = 4.0 cm [1]",
            "(a) k = 1.0 N/cm [1]",
            "(b) extension = F/k = 6.0 cm [1]",
            "(b) add to natural length [1]",
            "(b) 14 cm [1]",
          ],
          commonError:
            "Using the total length (12 cm) as the extension instead of subtracting the natural length, or forgetting to add the natural length back in part (b).",
          difficulty: "core",
          hints: [
            "Extension = stretched length − natural length.",
            "k = force ÷ extension.",
            "Final length = natural length + new extension.",
          ],
          solutions: [
            {
              label: "Hooke's law",
              steps: [
                "Extension at 4.0 N = 12 − 8.0 = 4.0 cm",
                "k = 4.0/4.0 = 1.0 N/cm",
                "Extension at 6.0 N = 6.0/1.0 = 6.0 cm",
                "Length = 8.0 + 6.0 = 14 cm",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p3-18",
          question:
            "An ultrasound scanner uses sound of frequency 2.0 MHz. In soft tissue the speed of ultrasound is 1540 m/s.\n\n(a) Calculate the wavelength of the ultrasound in soft tissue. [3]\n(b) State one medical use of ultrasound. [1]\n(c) State why ultrasound rather than X-rays is used to scan a developing baby. [1]",
          marks: 5,
          modelAnswer:
            "(a) λ = v/f = 1540/(2.0 × 10⁶) = 7.7 × 10⁻⁴ m (0.77 mm)\n\n(b) Pre-natal scanning of a fetus (or imaging organs, breaking down kidney stones, measuring depth/flow).\n\n(c) Ultrasound is non-ionising and does not damage cells, whereas X-rays are ionising and could harm the developing baby's cells.",
          markScheme: [
            "(a) λ = v/f used, f = 2.0 × 10⁶ Hz [1]",
            "(a) correct substitution [1]",
            "(a) 7.7 × 10⁻⁴ m [1]",
            "(b) valid medical use [1]",
            "(c) ultrasound non-ionising / X-rays harmful to cells [1]",
          ],
          commonError:
            "Forgetting that 2.0 MHz = 2.0 × 10⁶ Hz, giving a wavelength a million times too big.",
          difficulty: "challenge",
          hints: [
            "Convert MHz to Hz: 2.0 MHz = 2.0 × 10⁶ Hz.",
            "λ = v/f.",
            "Ultrasound is safer than ionising X-rays.",
          ],
          solutions: [
            {
              label: "Ultrasound wavelength",
              steps: [
                "f = 2.0 MHz = 2.0 × 10⁶ Hz",
                "λ = v/f = 1540/(2.0 × 10⁶)",
                "= 7.7 × 10⁻⁴ m",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p3-19",
          question:
            "A 100 W electric motor is used to lift a 5.0 kg mass vertically. In 8.0 s it raises the mass through 12 m. (g = 10 m/s²)\n\n(a) Calculate the useful work done in lifting the mass. [2]\n(b) Calculate the total electrical energy supplied to the motor in this time. [2]\n(c) Calculate the efficiency of the motor. [2]",
          marks: 6,
          modelAnswer:
            "(a) Useful work = mgh = 5.0 × 10 × 12 = 600 J\n\n(b) Total energy supplied = Pt = 100 × 8.0 = 800 J\n\n(c) Efficiency = useful/total × 100 = 600/800 × 100 = 75%",
          markScheme: [
            "(a) useful work = mgh used [1]",
            "(a) 600 J [1]",
            "(b) E = Pt used [1]",
            "(b) 800 J [1]",
            "(c) efficiency = useful/total × 100 [1]",
            "(c) 75% [1]",
          ],
          commonError:
            "Swapping useful and total energy in the efficiency formula, giving a value over 100%.",
          difficulty: "core",
          hints: [
            "Useful work lifting = mgh.",
            "Total energy in = power × time.",
            "Efficiency = useful out ÷ total in × 100.",
          ],
          solutions: [
            {
              label: "Efficiency of a motor",
              steps: [
                "Useful work = mgh = 5.0 × 10 × 12 = 600 J",
                "Total in = Pt = 100 × 8.0 = 800 J",
                "Efficiency = 600/800 × 100 = 75%",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p3-20",
          question:
            "A satellite is in a stable circular orbit around the Earth.\n\n(a) Explain why the satellite is accelerating even though its speed is constant. [2]\n(b) The satellite's orbital radius is 8.0 × 10⁶ m and it completes one orbit in 7100 s. Calculate its orbital speed. [3]",
          marks: 5,
          modelAnswer:
            "(a) The satellite moves in a circle, so its direction is constantly changing. Velocity is a vector (it includes direction), so a changing direction means a changing velocity, which is an acceleration — even though the speed (magnitude) stays constant. The acceleration is directed towards the centre of the orbit.\n\n(b) v = 2πr/T = (2 × π × 8.0 × 10⁶)/7100 = (5.027 × 10⁷)/7100 = 7.1 × 10³ m/s",
          markScheme: [
            "(a) direction changes continuously [1]",
            "(a) changing velocity (vector) ⇒ acceleration (towards centre) [1]",
            "(b) v = 2πr/T used [1]",
            "(b) circumference = 5.0 × 10⁷ m [1]",
            "(b) 7.1 × 10³ m/s [1]",
          ],
          commonError:
            "Saying there is no acceleration because the speed is constant — velocity also depends on direction.",
          difficulty: "challenge",
          hints: [
            "Velocity includes direction, not just speed.",
            "Circular motion means direction always changes.",
            "Speed v = 2πr/T (circumference ÷ period).",
          ],
          solutions: [
            {
              label: "Orbital speed",
              steps: [
                "Circumference = 2πr = 2 × π × 8.0 × 10⁶ = 5.03 × 10⁷ m",
                "v = 5.03 × 10⁷ / 7100",
                "= 7.1 × 10³ m/s",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "exam-physics-qa-4",
      title: "Mock Exam — Structured Paper 4",
      description:
        "20 structured questions spanning the full syllabus. Show all working and include units. Suggested time: 90 minutes.",
      questions: [
        {
          id: "exam-physics-qa-p4-01",
          question:
            "A car of mass 900 kg accelerates from rest to 24 m/s in 12 s along a straight road.\n\n(a) Calculate the acceleration. [2]\n(b) Calculate the resultant force on the car. [2]\n(c) Calculate the distance travelled during the 12 s. [2]",
          marks: 6,
          modelAnswer:
            "(a) a = (v − u)/t = (24 − 0)/12 = 2.0 m/s²\n\n(b) F = ma = 900 × 2.0 = 1800 N\n\n(c) s = ½(u + v)t = ½(0 + 24)(12) = 144 m",
          markScheme: [
            "(a) a = (v − u)/t used [1]",
            "(a) 2.0 m/s² [1]",
            "(b) F = ma used [1]",
            "(b) 1800 N [1]",
            "(c) ½(u+v)t or equivalent used [1]",
            "(c) 144 m [1]",
          ],
          commonError:
            "Using s = vt with the final velocity instead of the average velocity.",
          difficulty: "core",
          hints: [
            "Acceleration = change in velocity ÷ time.",
            "Force = mass × acceleration.",
            "Distance = average velocity × time.",
          ],
          solutions: [
            {
              label: "Motion and force",
              steps: [
                "a = 24/12 = 2.0 m/s²",
                "F = 900 × 2.0 = 1800 N",
                "s = ½(24)(12) = 144 m",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p4-02",
          question:
            "A rocket of total mass 5.0 × 10⁴ kg has engines that produce a thrust of 8.0 × 10⁵ N at lift-off. (g = 10 m/s²)\n\n(a) Calculate the weight of the rocket. [2]\n(b) Calculate the resultant upward force at lift-off. [1]\n(c) Calculate the initial acceleration of the rocket. [2]",
          marks: 5,
          modelAnswer:
            "(a) W = mg = 5.0 × 10⁴ × 10 = 5.0 × 10⁵ N\n\n(b) Resultant = thrust − weight = 8.0 × 10⁵ − 5.0 × 10⁵ = 3.0 × 10⁵ N\n\n(c) a = F/m = (3.0 × 10⁵)/(5.0 × 10⁴) = 6.0 m/s²",
          markScheme: [
            "(a) W = mg used [1]",
            "(a) 5.0 × 10⁵ N [1]",
            "(b) resultant = 3.0 × 10⁵ N [1]",
            "(c) a = F/m used [1]",
            "(c) 6.0 m/s² [1]",
          ],
          commonError:
            "Using the thrust alone in F = ma instead of the resultant force (thrust − weight).",
          difficulty: "challenge",
          hints: [
            "Weight = mg.",
            "Resultant = thrust − weight (upward positive).",
            "a = resultant force ÷ mass.",
          ],
          solutions: [
            {
              label: "Rocket lift-off",
              steps: [
                "W = 5.0 × 10⁴ × 10 = 5.0 × 10⁵ N",
                "Resultant = 8.0 × 10⁵ − 5.0 × 10⁵ = 3.0 × 10⁵ N",
                "a = 3.0 × 10⁵ / 5.0 × 10⁴ = 6.0 m/s²",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p4-03",
          question:
            "(a) State the principle of conservation of energy. [1]\n(b) A 0.040 kg arrow leaves a bow at 50 m/s. The bowstring was pulled back doing 60 J of work on the arrow. Calculate the kinetic energy of the arrow as it leaves and comment on the efficiency of the energy transfer. [4]",
          marks: 5,
          modelAnswer:
            "(a) Energy cannot be created or destroyed, only transferred (transformed) from one form (or store) to another; the total energy is constant.\n\n(b) KE = ½mv² = ½ × 0.040 × 50² = ½ × 0.040 × 2500 = 50 J. The bow did 60 J of work but the arrow gains only 50 J of kinetic energy, so the transfer is not 100% efficient. Efficiency = 50/60 × 100 = 83%. The 'missing' 10 J is transferred to other forms such as heat and sound in the bow and string.",
          markScheme: [
            "(a) energy cannot be created or destroyed, only transferred [1]",
            "(b) KE = ½mv² used [1]",
            "(b) KE = 50 J [1]",
            "(b) efficiency = 50/60 × 100 = 83% [1]",
            "(b) remaining energy transferred to heat/sound [1]",
          ],
          commonError:
            "Forgetting to square the speed, or assuming all 60 J becomes kinetic energy.",
          difficulty: "core",
          hints: [
            "KE = ½mv²; square the speed first.",
            "Compare the KE gained with the 60 J input.",
            "Efficiency = useful out ÷ total in.",
          ],
          solutions: [
            {
              label: "Kinetic energy and efficiency",
              steps: [
                "KE = ½ × 0.040 × 50² = ½ × 0.040 × 2500 = 50 J",
                "Efficiency = 50/60 × 100 = 83%",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p4-04",
          question:
            "(a) Compare the spacing, arrangement and motion of the particles in solids, liquids and gases. [3]\n(b) Explain, in terms of particles, why a solid has a fixed shape but a liquid takes the shape of its container. [2]",
          marks: 5,
          modelAnswer:
            "(a) In a solid, particles are very close together in a regular fixed arrangement (lattice) and only vibrate about fixed positions. In a liquid, particles are close together but irregularly arranged and can move/slide past one another. In a gas, particles are far apart, randomly arranged and move quickly in all directions.\n\n(b) In a solid the strong forces between particles hold them in fixed positions, so the solid keeps a fixed shape. In a liquid the forces are weaker and the particles can move past each other, so the liquid flows and takes the shape of its container (but keeps a fixed volume).",
          markScheme: [
            "(a) solid: close, regular, vibrate in place [1]",
            "(a) liquid: close, irregular, slide past each other [1]",
            "(a) gas: far apart, random, fast in all directions [1]",
            "(b) solid: strong forces hold particles in fixed positions [1]",
            "(b) liquid: particles can move past each other so it flows [1]",
          ],
          commonError:
            "Saying liquid particles are far apart (they are close together, like a solid; it is the arrangement and freedom of movement that differ).",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-qa-p4-05",
          question:
            "A fixed mass of gas in a sealed rigid container is heated.\n\n(a) State what happens to the pressure of the gas and explain why, using the kinetic model. [3]\n(b) The gas is initially at 27 °C and 1.0 × 10⁵ Pa. It is heated to 327 °C. The volume is constant. Calculate the new pressure. [3]",
          marks: 6,
          modelAnswer:
            "(a) The pressure increases. Heating increases the average kinetic energy of the molecules, so they move faster. They hit the container walls more often and with greater force, so the force per unit area (pressure) increases.\n\n(b) Convert to kelvin: T₁ = 27 + 273 = 300 K; T₂ = 327 + 273 = 600 K. At constant volume p/T = constant: p₂ = p₁ × T₂/T₁ = 1.0 × 10⁵ × (600/300) = 2.0 × 10⁵ Pa",
          markScheme: [
            "(a) pressure increases [1]",
            "(a) molecules move faster / more kinetic energy [1]",
            "(a) hit walls more often and harder ⇒ higher pressure [1]",
            "(b) temperatures converted to kelvin (300 K, 600 K) [1]",
            "(b) p₂ = p₁ × T₂/T₁ used [1]",
            "(b) 2.0 × 10⁵ Pa [1]",
          ],
          commonError:
            "Using temperatures in °C instead of kelvin in the pressure law (must use absolute temperature).",
          difficulty: "challenge",
          hints: [
            "Heating speeds up the molecules.",
            "Convert temperatures to kelvin (add 273).",
            "At constant volume, p ∝ T (kelvin).",
          ],
          solutions: [
            {
              label: "Pressure law (constant volume)",
              steps: [
                "T₁ = 300 K, T₂ = 600 K",
                "p₂ = p₁ × T₂/T₁ = 1.0 × 10⁵ × 600/300",
                "= 2.0 × 10⁵ Pa",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p4-06",
          question:
            "A loudspeaker produces a sound of frequency 256 Hz.\n\n(a) State what is meant by the frequency of a wave. [1]\n(b) The speed of sound in air is 340 m/s. Calculate the wavelength. [2]\n(c) The loudspeaker is moved into a room where the temperature is higher, so the speed of sound is greater. State the effect on (i) the frequency and (ii) the wavelength of the sound. [2]",
          marks: 5,
          modelAnswer:
            "(a) Frequency is the number of complete waves (oscillations) produced or passing a point per second.\n\n(b) λ = v/f = 340/256 = 1.33 m ≈ 1.3 m\n\n(c) (i) The frequency is unchanged (it is set by the loudspeaker/source). (ii) Since v = fλ and v has increased while f is constant, the wavelength increases.",
          markScheme: [
            "(a) number of waves per second [1]",
            "(b) λ = v/f used [1]",
            "(b) 1.3 m [1]",
            "(c) (i) frequency unchanged [1]",
            "(c) (ii) wavelength increases [1]",
          ],
          commonError:
            "Thinking frequency changes when the speed changes — frequency is fixed by the source.",
          difficulty: "core",
          hints: [
            "Frequency = waves per second.",
            "λ = v/f.",
            "The source sets the frequency; v = fλ then fixes λ.",
          ],
          solutions: [
            {
              label: "Wavelength of sound",
              steps: [
                "λ = v/f = 340/256",
                "= 1.33 m ≈ 1.3 m",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p4-07",
          question:
            "A ray of light travels from water (refractive index 1.33) into air.\n\n(a) Explain why the ray bends away from the normal as it enters the air. [2]\n(b) Calculate the critical angle for the water–air boundary. (sin⁻¹(0.752) = 48.8°) [3]",
          marks: 5,
          modelAnswer:
            "(a) Light travels faster in air (the less dense/optically less dense medium) than in water. When it speeds up on entering the air it bends away from the normal.\n\n(b) sin c = 1/n = 1/1.33 = 0.752 → c = sin⁻¹(0.752) = 48.8°",
          markScheme: [
            "(a) light speeds up entering air [1]",
            "(a) so it bends away from the normal [1]",
            "(b) sin c = 1/n used [1]",
            "(b) sin c = 0.752 [1]",
            "(b) c = 48.8° [1]",
          ],
          commonError:
            "Using sin c = n (= 1.33), which is impossible since sine cannot exceed 1.",
          difficulty: "core",
          hints: [
            "Going to a less dense medium, light speeds up.",
            "Faster light bends away from the normal.",
            "sin c = 1/n for the critical angle.",
          ],
          solutions: [
            {
              label: "Critical angle water–air",
              steps: [
                "sin c = 1/n = 1/1.33 = 0.752",
                "c = sin⁻¹(0.752) = 48.8°",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p4-08",
          question:
            "(a) State two properties of an image formed in a plane mirror. [2]\n(b) An object is placed 8.0 cm in front of a plane mirror. State how far behind the mirror the image appears, and the distance between the object and its image. [2]\n(c) Explain what is meant by saying the image is 'virtual'. [1]",
          marks: 5,
          modelAnswer:
            "(a) Any two of: the image is the same size as the object; upright (the same way up); laterally inverted (left–right swapped); virtual; as far behind the mirror as the object is in front.\n\n(b) The image is 8.0 cm behind the mirror (the same distance as the object is in front). The object-to-image distance = 8.0 + 8.0 = 16 cm.\n\n(c) A virtual image is one from which light rays only appear to come; the rays do not actually pass through the image position, so it cannot be projected onto a screen.",
          markScheme: [
            "(a) two correct properties [2]",
            "(b) image 8.0 cm behind mirror [1]",
            "(b) object–image distance 16 cm [1]",
            "(c) rays only appear to come from it / cannot be projected on a screen [1]",
          ],
          commonError:
            "Saying the image is real, or that it can be formed on a screen.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-qa-p4-09",
          question:
            "A 230 V mains circuit supplies a room. A 2300 W heater, a 920 W microwave and a 230 W lamp are all switched on at once, in parallel.\n\n(a) Calculate the current drawn by the heater. [2]\n(b) Calculate the total current drawn from the supply by all three appliances. [3]",
          marks: 5,
          modelAnswer:
            "(a) I = P/V = 2300/230 = 10 A\n\n(b) Microwave: I = 920/230 = 4.0 A; lamp: I = 230/230 = 1.0 A. In parallel the currents add: total = 10 + 4.0 + 1.0 = 15 A. (Or total power = 2300 + 920 + 230 = 3450 W; I = 3450/230 = 15 A.)",
          markScheme: [
            "(a) I = P/V used [1]",
            "(a) 10 A [1]",
            "(b) currents (or powers) of the other appliances found [1]",
            "(b) currents added (parallel) [1]",
            "(b) 15 A [1]",
          ],
          commonError:
            "Adding resistances or voltages instead of adding the parallel branch currents.",
          difficulty: "core",
          hints: [
            "Current of each appliance: I = P/V.",
            "In parallel, the branch currents add up.",
            "Or add the powers and divide by 230.",
          ],
          solutions: [
            {
              label: "Parallel appliance currents",
              steps: [
                "Heater: 2300/230 = 10 A",
                "Microwave: 920/230 = 4.0 A",
                "Lamp: 230/230 = 1.0 A",
                "Total = 10 + 4.0 + 1.0 = 15 A",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p4-10",
          question:
            "(a) Explain, in terms of free electrons, why a metal is a good conductor of electricity. [2]\n(b) A current of 0.50 A flows through a lamp. Calculate the charge that passes through the lamp in 4.0 minutes. [3]",
          marks: 5,
          modelAnswer:
            "(a) A metal contains free (delocalised) electrons that are not bound to individual atoms and are free to move through the structure. When a potential difference is applied, these electrons drift through the metal, carrying charge — this flow of charge is the electric current.\n\n(b) t = 4.0 × 60 = 240 s. Q = It = 0.50 × 240 = 120 C",
          markScheme: [
            "(a) metals have free/delocalised electrons [1]",
            "(a) electrons move/drift to carry charge (current) [1]",
            "(b) t converted to 240 s [1]",
            "(b) Q = It used [1]",
            "(b) 120 C [1]",
          ],
          commonError:
            "Forgetting to convert minutes to seconds before using Q = It.",
          difficulty: "core",
          hints: [
            "Metals conduct because of free electrons.",
            "Convert 4.0 minutes to seconds.",
            "Q = I × t.",
          ],
          solutions: [
            {
              label: "Charge flow",
              steps: [
                "t = 4.0 × 60 = 240 s",
                "Q = It = 0.50 × 240 = 120 C",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p4-11",
          question:
            "A solenoid (coil) carries a direct current and behaves like a bar magnet.\n\n(a) State two ways to increase the strength of the magnetic field produced by the solenoid. [2]\n(b) State one advantage of an electromagnet over a permanent magnet. [1]\n(c) Give one practical use of an electromagnet. [1]",
          marks: 4,
          modelAnswer:
            "(a) Any two of: increase the current; increase the number of turns on the coil; add a soft iron core (place an iron core inside the coil).\n\n(b) An electromagnet can be switched on and off (and its strength can be varied), whereas a permanent magnet is always magnetic.\n\n(c) Any one of: a crane in a scrapyard for lifting iron/steel; an electric bell; a relay; a loudspeaker; magnetic door locks.",
          markScheme: [
            "(a) increase current [1]",
            "(a) more turns / add iron core [1]",
            "(b) can be switched on/off (or strength varied) [1]",
            "(c) valid practical use [1]",
          ],
          commonError:
            "Stating that a permanent magnet can be switched off — that is the advantage of the electromagnet.",
          difficulty: "warmup",
        },
        {
          id: "exam-physics-qa-p4-12",
          question:
            "An ideal transformer has 800 turns on the primary coil and 200 turns on the secondary coil. The primary is connected to a 240 V a.c. supply.\n\n(a) Calculate the secondary voltage. [2]\n(b) The secondary delivers a power of 36 W. Calculate the secondary current. [2]\n(c) State the primary current, assuming the transformer is 100% efficient. [2]",
          marks: 6,
          modelAnswer:
            "(a) Vs = Vp × Ns/Np = 240 × 200/800 = 240 × 0.25 = 60 V\n\n(b) P = Vs Is → Is = P/Vs = 36/60 = 0.60 A\n\n(c) Power in = power out = 36 W. Ip = P/Vp = 36/240 = 0.15 A",
          markScheme: [
            "(a) Vs = Vp × Ns/Np used [1]",
            "(a) 60 V [1]",
            "(b) Is = P/Vs used [1]",
            "(b) 0.60 A [1]",
            "(c) Ip = P/Vp (power conserved) [1]",
            "(c) 0.15 A [1]",
          ],
          commonError:
            "Assuming the primary and secondary currents are equal, or inverting the turns ratio.",
          difficulty: "challenge",
          hints: [
            "Voltage ratio equals turns ratio.",
            "Secondary current: Is = P/Vs.",
            "For an ideal transformer, power in = power out.",
          ],
          solutions: [
            {
              label: "Transformer voltages and currents",
              steps: [
                "Vs = 240 × 200/800 = 60 V",
                "Is = 36/60 = 0.60 A",
                "Ip = 36/240 = 0.15 A",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p4-13",
          question:
            "(a) State what is meant by an isotope. [2]\n(b) Carbon has isotopes ¹²₆C and ¹⁴₆C. State how the nuclei of these two isotopes differ. [2]\n(c) Carbon-14 is radioactive and is used in carbon dating. State the type of decay it undergoes (alpha, beta or gamma). [1]",
          marks: 5,
          modelAnswer:
            "(a) Isotopes are atoms of the same element (same number of protons / same proton number) that have different numbers of neutrons (and so different nucleon/mass numbers).\n\n(b) Both have 6 protons. Carbon-12 has 6 neutrons (12 − 6) while carbon-14 has 8 neutrons (14 − 6), so carbon-14 has two more neutrons.\n\n(c) Beta (β⁻) decay.",
          markScheme: [
            "(a) same number of protons / same element [1]",
            "(a) different number of neutrons [1]",
            "(b) both have 6 protons [1]",
            "(b) C-12 has 6 neutrons, C-14 has 8 neutrons [1]",
            "(c) beta [1]",
          ],
          commonError:
            "Saying isotopes have different numbers of protons — they have the same proton number but different neutron numbers.",
          difficulty: "core",
          hints: [
            "Isotopes share the proton number.",
            "Neutrons = nucleon number − proton number.",
            "Carbon-14 decays by beta emission.",
          ],
        },
        {
          id: "exam-physics-qa-p4-14",
          question:
            "A radioactive sample has an activity of 6400 Bq. After 36 hours its activity has fallen to 400 Bq.\n\n(a) Determine the number of half-lives that have passed. [2]\n(b) Calculate the half-life of the sample. [2]\n(c) Predict the activity after a further 12 hours from the 36-hour point. [2]",
          marks: 6,
          modelAnswer:
            "(a) 6400 → 3200 → 1600 → 800 → 400 is 4 halvings, so 4 half-lives have passed.\n\n(b) 4 half-lives = 36 hours → one half-life = 36/4 = 9.0 hours\n\n(c) A further 12 hours from 400 Bq: 12 hours is between 1 and 2 half-lives (9 h and 18 h). After 9 more hours (1 half-life): 400 → 200 Bq. After a total of 12 hours the activity is a little below 200 Bq (about 159 Bq). Acceptable answer: 200 Bq after one half-life (9 hours); ≈ 160 Bq after 12 hours.",
          markScheme: [
            "(a) 6400 → … → 400 is 4 halvings [1]",
            "(a) 4 half-lives [1]",
            "(b) half-life = 36/4 used [1]",
            "(b) 9.0 hours [1]",
            "(c) recognises 12 h is between 1 and 2 half-lives [1]",
            "(c) activity ≈ 160 Bq (accept 200 Bq for 9 h) [1]",
          ],
          commonError:
            "Dividing 36 by 4 incorrectly, or assuming activity falls linearly rather than halving.",
          difficulty: "challenge",
          hints: [
            "Count how many times 6400 halves to reach 400.",
            "Half-life = total time ÷ number of half-lives.",
            "12 hours is just over one (9-hour) half-life.",
          ],
          solutions: [
            {
              label: "Half-life from activity",
              steps: [
                "6400 → 3200 → 1600 → 800 → 400 = 4 half-lives",
                "Half-life = 36/4 = 9.0 hours",
                "After 9 more hours: 400 → 200 Bq; after 12 h: ≈ 160 Bq",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p4-15",
          question:
            "(a) Describe the life cycle of a star much more massive than the Sun, from main sequence onwards. [4]\n(b) State what is meant by the term 'nebula'. [1]",
          marks: 5,
          modelAnswer:
            "(a) A massive star spends most of its life on the main sequence, fusing hydrogen into helium. When the core hydrogen runs out it expands to become a red supergiant. It then explodes in a supernova. The remaining core collapses to form either a neutron star or, if massive enough, a black hole.\n\n(b) A nebula is a cloud of gas and dust (in space) from which stars form (and which can also be ejected when stars die).",
          markScheme: [
            "(a) main sequence: fuses hydrogen to helium [1]",
            "(a) expands to a red supergiant [1]",
            "(a) explodes as a supernova [1]",
            "(a) leaves a neutron star or black hole [1]",
            "(b) cloud of gas and dust (where stars form) [1]",
          ],
          commonError:
            "Saying a massive star ends as a white dwarf — that is the fate of low-mass stars like the Sun.",
          difficulty: "core",
          hints: [
            "Massive stars become red supergiants.",
            "They end in a supernova explosion.",
            "The remnant is a neutron star or black hole.",
          ],
        },
        {
          id: "exam-physics-qa-p4-16",
          question:
            "A 1500 kg car travelling at 25 m/s skids to a stop. The maximum frictional braking force from the road is 9000 N.\n\n(a) Calculate the deceleration of the car. [2]\n(b) Calculate the time taken to stop. [2]\n(c) Calculate the stopping (braking) distance using the work–energy idea. [3]",
          marks: 7,
          modelAnswer:
            "(a) a = F/m = 9000/1500 = 6.0 m/s² (deceleration)\n\n(b) Using v = u + at: 0 = 25 + (−6.0)t → t = 25/6.0 = 4.17 s ≈ 4.2 s\n\n(c) KE = ½mv² = ½ × 1500 × 25² = ½ × 1500 × 625 = 468 750 J. Work done by friction = F × d = KE → d = KE/F = 468 750/9000 = 52.1 m ≈ 52 m",
          markScheme: [
            "(a) a = F/m used [1]",
            "(a) 6.0 m/s² [1]",
            "(b) v = u + at used [1]",
            "(b) 4.2 s (ecf) [1]",
            "(c) KE = ½mv² = 468 750 J [1]",
            "(c) d = KE/F used [1]",
            "(c) 52 m [1]",
          ],
          commonError:
            "Forgetting to square the speed in ½mv², or using F = ma incorrectly for the distance.",
          difficulty: "challenge",
          hints: [
            "Deceleration: a = F/m.",
            "Stopping time from v = u + at.",
            "Braking distance: KE = F × d, so d = KE/F.",
          ],
          solutions: [
            {
              label: "Braking with work–energy",
              steps: [
                "a = 9000/1500 = 6.0 m/s²",
                "t = 25/6.0 = 4.2 s",
                "KE = ½ × 1500 × 25² = 468 750 J",
                "d = 468 750/9000 = 52 m",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p4-17",
          question:
            "(a) Explain how an electric kettle's heating element is used safely with an earth wire and a fuse. [3]\n(b) The kettle is double-insulated (Class II) version with a plastic casing. Explain why such an appliance does not need an earth wire. [2]",
          marks: 5,
          modelAnswer:
            "(a) The metal casing is connected to the earth wire. If a fault makes the live wire touch the casing, a large current flows to earth through the low-resistance earth wire. This large current melts/blows the fuse, breaking the circuit and disconnecting the live supply, so the casing cannot give a user an electric shock.\n\n(b) A double-insulated appliance has a casing made of an insulating material (plastic), and the wiring has two layers of insulation. There is no exposed metal that could become live, so it is impossible for the user to touch a live metal part — therefore no earth wire is needed.",
          markScheme: [
            "(a) earth wire connects to metal casing [1]",
            "(a) fault current flows to earth (large current) [1]",
            "(a) fuse blows, disconnecting the supply [1]",
            "(b) casing is an insulator / no exposed metal [1]",
            "(b) user cannot touch a live part, so no earth needed [1]",
          ],
          commonError:
            "Saying the fuse protects the user directly — the fuse protects by disconnecting the supply; the earth wire provides the safe path.",
          difficulty: "core",
          hints: [
            "The earth wire connects to the metal case.",
            "A fault sends a large current that blows the fuse.",
            "Double insulation means no exposed metal.",
          ],
        },
        {
          id: "exam-physics-qa-p4-18",
          question:
            "A 0.30 kg mass of water at 80 °C is mixed with 0.50 kg of water at 20 °C in an insulated container. (c of water = 4200 J/(kg °C))\n\n(a) Write an energy-balance equation for the mixture. [1]\n(b) Calculate the final temperature of the mixture. [4]",
          marks: 5,
          modelAnswer:
            "(a) Energy lost by hot water = energy gained by cold water: m₁c(80 − θ) = m₂c(θ − 20), where θ is the final temperature.\n\n(b) The c cancels: 0.30(80 − θ) = 0.50(θ − 20)\n24 − 0.30θ = 0.50θ − 10\n24 + 10 = 0.50θ + 0.30θ\n34 = 0.80θ → θ = 34/0.80 = 42.5 °C ≈ 43 °C",
          markScheme: [
            "(a) energy lost by hot = energy gained by cold [1]",
            "(b) m₁(80 − θ) = m₂(θ − 20) set up (c cancels) [1]",
            "(b) 24 − 0.30θ = 0.50θ − 10 [1]",
            "(b) 34 = 0.80θ [1]",
            "(b) θ = 42.5 °C ≈ 43 °C [1]",
          ],
          commonError:
            "Simply averaging the two temperatures (50 °C) — that only works when the masses are equal; here the masses differ.",
          difficulty: "challenge",
          hints: [
            "Heat lost by hot water = heat gained by cold water.",
            "The specific heat capacity cancels from both sides.",
            "Solve the linear equation for θ.",
          ],
          solutions: [
            {
              label: "Method of mixtures",
              steps: [
                "0.30 × 4200 × (80 − θ) = 0.50 × 4200 × (θ − 20)",
                "0.30(80 − θ) = 0.50(θ − 20)",
                "24 − 0.30θ = 0.50θ − 10",
                "34 = 0.80θ → θ = 42.5 °C ≈ 43 °C",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p4-19",
          question:
            "(a) State what is meant by the term 'specific latent heat of vaporisation'. [1]\n(b) A 2.0 kW kettle boils dry, evaporating 0.50 kg of water already at 100 °C. The specific latent heat of vaporisation of water is 2.3 × 10⁶ J/kg. Calculate the time taken to boil this water away. [3]\n(c) Explain why much more energy is needed to boil away 0.50 kg of water than to heat it from 20 °C to 100 °C. [2]",
          marks: 6,
          modelAnswer:
            "(a) The specific latent heat of vaporisation is the energy needed to change 1 kg of a substance from liquid to gas (vapour) at its boiling point, with no change in temperature.\n\n(b) Energy needed Q = mL = 0.50 × 2.3 × 10⁶ = 1.15 × 10⁶ J. Time t = Q/P = (1.15 × 10⁶)/2000 = 575 s ≈ 5.8 × 10² s (about 9.6 minutes).\n\n(c) Heating from 20 °C to 100 °C requires Q = mcΔT = 0.50 × 4200 × 80 = 168 000 J, but boiling it away requires 1.15 × 10⁶ J. Boiling needs much more energy because it must completely separate the molecules (break the bonds between them) so they become a gas, which takes far more energy than simply increasing their kinetic energy by 80 °C.",
          markScheme: [
            "(a) energy to change 1 kg liquid to gas at boiling point (no temp change) [1]",
            "(b) Q = mL = 1.15 × 10⁶ J [1]",
            "(b) t = Q/P used [1]",
            "(b) 575 s ≈ 5.8 × 10² s [1]",
            "(c) boiling separates molecules / breaks bonds [1]",
            "(c) requires more energy than raising temperature [1]",
          ],
          commonError:
            "Confusing latent heat with specific heat capacity, or forgetting that boiling occurs at constant temperature.",
          difficulty: "challenge",
          hints: [
            "Latent heat: Q = mL, at constant temperature.",
            "Time = energy ÷ power.",
            "Boiling fully separates the molecules.",
          ],
          solutions: [
            {
              label: "Latent heat and time",
              steps: [
                "Q = mL = 0.50 × 2.3 × 10⁶ = 1.15 × 10⁶ J",
                "t = Q/P = 1.15 × 10⁶ / 2000 = 575 s",
              ],
            },
          ],
        },
        {
          id: "exam-physics-qa-p4-20",
          question:
            "A geostationary satellite orbits the Earth once every 24 hours at a radius of 4.2 × 10⁷ m from the Earth's centre.\n\n(a) State what is meant by a geostationary orbit. [2]\n(b) Calculate the orbital speed of the satellite. [3]\n(c) State one use of geostationary satellites. [1]",
          marks: 6,
          modelAnswer:
            "(a) A geostationary orbit is an orbit in which the satellite stays above the same point on the Earth's surface (above the equator), because it orbits in the same time as the Earth rotates (24 hours) and in the same direction.\n\n(b) T = 24 h = 24 × 3600 = 86 400 s. v = 2πr/T = (2 × π × 4.2 × 10⁷)/86 400 = (2.64 × 10⁸)/86 400 = 3.1 × 10³ m/s\n\n(c) Any one of: communications/TV broadcasting (satellite TV); weather monitoring; relaying telephone/internet signals.",
          markScheme: [
            "(a) stays above the same point on Earth [1]",
            "(a) period 24 h, same as Earth's rotation [1]",
            "(b) T = 86 400 s and v = 2πr/T [1]",
            "(b) circumference = 2.6 × 10⁸ m [1]",
            "(b) 3.1 × 10³ m/s [1]",
            "(c) valid use (communications/weather) [1]",
          ],
          commonError:
            "Forgetting to convert 24 hours to seconds, or using r instead of 2πr for the orbital distance.",
          difficulty: "challenge",
          hints: [
            "Geostationary = stays over one point, 24-hour period.",
            "Convert 24 hours to seconds (× 3600).",
            "v = 2πr/T (circumference ÷ period).",
          ],
          solutions: [
            {
              label: "Geostationary orbital speed",
              steps: [
                "T = 24 × 3600 = 86 400 s",
                "Circumference = 2πr = 2 × π × 4.2 × 10⁷ = 2.64 × 10⁸ m",
                "v = 2.64 × 10⁸ / 86 400 = 3.1 × 10³ m/s",
              ],
            },
          ],
        },
      ],
    },
  ],
};
