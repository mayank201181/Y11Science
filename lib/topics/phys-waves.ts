import type { Topic } from "../types";

export const physWaves: Topic = {
  id: "phys-waves",
  title: "Waves & Light",
  subject: "physics",
  icon: "🌊",
  blurb: "Wave properties, reflection, refraction, lenses, and dispersion — with worked calculations.",
  intro: "Waves carry energy across space without transporting matter — from the ripples on a pond to the light reaching your eyes from a distant star. In this topic you will master the vocabulary and equations that describe all waves, then trace exactly what happens when light reflects off mirrors, bends through glass, focuses through a convex lens, and splits into a rainbow through a prism.",

  guide: [
    {
      heading: "Describing Waves",
      body: `A **wave** is a periodic disturbance that transfers energy from one place to another **without transferring matter** — the medium oscillates but does not travel with the wave.

**Transverse waves** — the oscillation is *perpendicular* to the direction of energy transfer.
- Examples: light and all electromagnetic waves, water surface waves, waves on a string.
- Key features: **crests** (highest points), **troughs** (lowest points).

**Longitudinal waves** — the oscillation is *parallel* to the direction of energy transfer.
- Example: sound in air, P-waves (seismic).
- Key features: **compressions** (regions of high pressure / close-together particles) and **rarefactions** (regions of low pressure / spread-out particles).

**Wavefronts** are imaginary lines connecting all points that are at the same stage (phase) of oscillation — e.g. all the crests in a water tank.`,
      diagrams: [
        {
          caption: "Transverse wave: labelled anatomy (wavelength, amplitude, crest, trough)",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Transverse wave diagram showing wavelength, amplitude, crest and trough">
  <!-- background -->
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- equilibrium line -->
  <line x1="10" y1="100" x2="310" y2="100" stroke="#475569" stroke-width="1" stroke-dasharray="4 4"/>
  <!-- wave path: one full cycle then partial -->
  <path d="M10,100 C40,100 50,30 80,30 C110,30 120,100 150,100 C180,100 190,170 220,170 C250,170 260,100 290,100" stroke="#38bdf8" stroke-width="2.5" fill="none"/>
  <!-- crest arrow -->
  <line x1="80" y1="30" x2="80" y2="100" stroke="#fbbf24" stroke-width="1.2" stroke-dasharray="3 3"/>
  <text x="85" y="28" font-size="11" fill="#fbbf24" font-family="sans-serif">Crest</text>
  <!-- trough arrow -->
  <line x1="220" y1="170" x2="220" y2="100" stroke="#fb7185" stroke-width="1.2" stroke-dasharray="3 3"/>
  <text x="225" y="185" font-size="11" fill="#fb7185" font-family="sans-serif">Trough</text>
  <!-- amplitude brace -->
  <line x1="8" y1="30" x2="8" y2="100" stroke="#34d399" stroke-width="1.5"/>
  <line x1="4" y1="30" x2="12" y2="30" stroke="#34d399" stroke-width="1.5"/>
  <line x1="4" y1="100" x2="12" y2="100" stroke="#34d399" stroke-width="1.5"/>
  <text x="14" y="70" font-size="10" fill="#34d399" font-family="sans-serif">Amplitude (A)</text>
  <!-- wavelength brace -->
  <line x1="80" y1="15" x2="80" y2="22" stroke="#a78bfa" stroke-width="1.5"/>
  <line x1="220" y1="15" x2="220" y2="22" stroke="#a78bfa" stroke-width="1.5"/>
  <line x1="80" y1="18" x2="220" y2="18" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="125" y="14" font-size="10" fill="#a78bfa" font-family="sans-serif">Wavelength (lambda)</text>
  <!-- direction arrow -->
  <line x1="260" y1="120" x2="305" y2="120" stroke="#b7bce0" stroke-width="1.5" marker-end="url(#arr)"/>
  <defs>
    <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#b7bce0"/>
    </marker>
  </defs>
  <text x="258" y="135" font-size="10" fill="#b7bce0" font-family="sans-serif">Direction of travel</text>
  <text x="10" y="195" font-size="9" fill="#475569" font-family="sans-serif">Oscillation perpendicular to travel = TRANSVERSE</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Waves transfer energy without transferring matter — the medium oscillates in place.",
        "Transverse: oscillation perpendicular to travel (e.g. light, waves on a string).",
        "Longitudinal: oscillation parallel to travel (e.g. sound); has compressions and rarefactions.",
        "Wavefronts connect all points at the same phase of oscillation.",
        "Crests and troughs are features of transverse waves; compressions and rarefactions of longitudinal.",
      ],
      discovery: {
        problem: "Drop a stone in a still pond. The ripples spread outward in circles. A leaf floating 50 cm away bobs up and down but does NOT drift toward the shore. What does this tell you about what waves actually carry?",
        idea: "The leaf bobs but stays put — it is moved by the wave's energy, not swept along by a flow of water. This shows that waves transfer **energy** but not matter. The water molecules oscillate up and down locally; the energy (the disturbance) travels outward.",
      },
      whyItWorks: "In a transverse wave, each particle is pulled by its neighbour slightly ahead of it in phase. The restoring force (e.g. tension, surface tension) returns each particle toward equilibrium, but the phase delay means the pattern propagates. No net displacement of matter occurs across the medium because each particle's displacement averages to zero over a full cycle.",
    },

    {
      heading: "Wave Quantities and the Wave Equation",
      body: `**Wavelength (λ)** — the distance between two successive points that are in phase (e.g. crest to crest, or compression to compression). Unit: metre (m).

**Frequency (f)** — the number of complete waves (cycles) passing a point per second. Unit: hertz (Hz). 1 Hz = 1 cycle per second.

**Period (T)** — the time for one complete wave to pass a fixed point. Unit: second (s).

**Amplitude (A)** — the maximum displacement of a particle from its equilibrium position. Unit: metre (m). The energy carried by a wave is proportional to amplitude squared.

**Relationship between period and frequency:**

T = 1 / f   (and equivalently f = 1 / T)

**The wave equation:**

v = f × λ

where v = wave speed (m/s), f = frequency (Hz), λ = wavelength (m).

This holds for ALL types of wave.

**Worked example 1:** A water wave has a frequency of 0.5 Hz and a wavelength of 3.0 m. Find its speed.
v = f × λ = 0.5 × 3.0 = **1.5 m/s**

**Worked example 2:** Sound travels at 340 m/s. A note has a period of 2.5 × 10⁻³ s. Find its wavelength.
f = 1/T = 1/(2.5 × 10⁻³) = 400 Hz
λ = v/f = 340/400 = **0.85 m**`,
      keyPoints: [
        "T = 1/f: period and frequency are reciprocals.",
        "Wave equation: v = fλ — applies to every type of wave.",
        "Amplitude is the maximum displacement from equilibrium; energy ∝ A².",
        "Wavelength is measured between any two successive points in phase.",
        "Speed is a property of the medium; frequency is set by the source.",
      ],
      discovery: {
        problem: "A student measures that 20 complete wave crests pass a fixed point in 4 seconds, and each crest is 0.6 m apart. Without using the wave equation directly, estimate the wave speed. Then confirm with v = fλ.",
        idea: "In 4 s, 20 waves pass → f = 20/4 = 5 Hz → T = 0.2 s. In one period the crest moves one wavelength forward, so v = λ/T = 0.6/0.2 = 3 m/s. Checking: v = fλ = 5 × 0.6 = 3 m/s. ✓ Both routes give the same answer because v = λ/T = λ × (1/T) = λf.",
      },
      whyItWorks: "In time T (one period) the wave pattern shifts exactly one wavelength λ forward. So speed = distance/time = λ/T. Since f = 1/T, substituting gives v = λf. The equation is a direct consequence of the definitions of wavelength, frequency, and period.",
      strategies: ["unit analysis", "rearrange-then-substitute", "ratio reasoning"],
      thinkDeeper: "The wave equation v = fλ tells you that if a wave slows down (lower v) while frequency stays constant (set by the source), the wavelength must decrease. This is exactly what happens when light enters a denser medium — the same equation underpins refraction.",
    },

    {
      heading: "Reflection of Light",
      body: `**The law of reflection:** the angle of incidence equals the angle of reflection — both measured from the **normal** (the line perpendicular to the reflecting surface at the point of incidence).

angle of incidence (i) = angle of reflection (r)

**Plane mirror image:** when you look at yourself in a flat mirror, the image is:
- **Virtual** — rays appear to come from behind the mirror; no light actually reaches the image position.
- **Upright** — not inverted top-to-bottom.
- **Laterally inverted** — left and right are swapped (your right hand appears as the left hand of the image).
- **Same size** as the object.
- **As far behind** the mirror as the object is in front.

To find the image in a plane mirror by ray construction:
1. Draw two rays from the object hitting the mirror.
2. Apply the law of reflection to find each reflected ray.
3. Extend reflected rays *behind* the mirror with dashed lines — where they meet is the virtual image.`,
      keyPoints: [
        "Angles of incidence and reflection are measured from the normal, not the surface.",
        "Law of reflection: i = r (angle of incidence equals angle of reflection).",
        "Plane mirror image: virtual, upright, same size, laterally inverted, same distance behind mirror.",
        "Virtual image — reflected rays only appear to diverge from it; no light passes through it.",
        "Ray construction: two rays + their reflections; trace backwards to locate virtual image.",
      ],
      strategies: ["draw a diagram", "measure from the normal not the surface"],
    },

    {
      heading: "Refraction and Refractive Index",
      body: `**Refraction** occurs when a wave crosses a boundary between two media with different speeds. The change in speed causes a change in **direction** (unless the wave strikes the boundary at 90°, i.e. along the normal).

Rules:
- Light entering a **denser** medium (higher refractive index) **slows down and bends toward the normal** (angle decreases).
- Light entering a **less dense** medium **speeds up and bends away from the normal** (angle increases).
- The frequency does NOT change on crossing the boundary; wavelength changes in proportion to speed.

**Snell's law / refractive index:**

n = sin i / sin r

where i is the angle of incidence (in the less dense medium, e.g. air), r is the angle of refraction (in the denser medium), and n is the refractive index of the denser medium (relative to air/vacuum).

**Worked example:** A ray in air strikes glass at i = 40°. The refracted angle is 25°. Find n.
n = sin 40° / sin 25° = 0.6428 / 0.4226 = **1.52** (typical glass)

**Refractive index and speed:**

n = c / v   (where c = speed of light in vacuum = 3.0 × 10⁸ m/s, v = speed in medium)

So a medium with n = 1.5 has light speed = 3.0 × 10⁸ / 1.5 = 2.0 × 10⁸ m/s.`,
      diagrams: [
        {
          caption: "Refraction at an air-glass boundary: incident, normal, refracted ray, and angles labelled",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Refraction diagram showing ray bending at air-glass boundary with labelled angles of incidence and refraction">
  <!-- background -->
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- air region label -->
  <text x="8" y="20" font-size="11" fill="#b7bce0" font-family="sans-serif">Air (n = 1.0)</text>
  <!-- glass region -->
  <rect x="0" y="100" width="320" height="100" fill="#1e3a5f" opacity="0.5"/>
  <text x="8" y="190" font-size="11" fill="#38bdf8" font-family="sans-serif">Glass (n = 1.5)</text>
  <!-- boundary -->
  <line x1="0" y1="100" x2="320" y2="100" stroke="#475569" stroke-width="1.5"/>
  <!-- normal line -->
  <line x1="160" y1="10" x2="160" y2="190" stroke="#64748b" stroke-width="1" stroke-dasharray="5 4"/>
  <text x="165" y="18" font-size="10" fill="#64748b" font-family="sans-serif">Normal</text>
  <!-- incident ray -->
  <line x1="80" y1="10" x2="160" y2="100" stroke="#fbbf24" stroke-width="2" marker-end="url(#iarr)"/>
  <defs>
    <marker id="iarr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#fbbf24"/>
    </marker>
    <marker id="rarr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#34d399"/>
    </marker>
  </defs>
  <!-- refracted ray (bends toward normal) -->
  <line x1="160" y1="100" x2="200" y2="190" stroke="#34d399" stroke-width="2" marker-end="url(#rarr)"/>
  <!-- angle i arc -->
  <path d="M160,100 m0,-30 a30,30 0 0,0 -22,-22" stroke="#fbbf24" stroke-width="1.2" fill="none"/>
  <text x="118" y="77" font-size="11" fill="#fbbf24" font-family="sans-serif">i</text>
  <!-- angle r arc -->
  <path d="M160,100 m0,25 a25,25 0 0,1 10,22" stroke="#34d399" stroke-width="1.2" fill="none"/>
  <text x="175" y="140" font-size="11" fill="#34d399" font-family="sans-serif">r</text>
  <!-- labels -->
  <text x="58" y="65" font-size="10" fill="#fbbf24" font-family="sans-serif">Incident ray</text>
  <text x="202" y="155" font-size="10" fill="#34d399" font-family="sans-serif">Refracted ray</text>
  <text x="165" y="97" font-size="9" fill="#b7bce0" font-family="sans-serif">boundary</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Refraction: wave changes speed (and direction) at a boundary between two media.",
        "Into denser medium: slows, bends toward normal (angle r less than i).",
        "Into less dense medium: speeds up, bends away from normal (angle r greater than i).",
        "Snell's law: n = sin i / sin r (angles measured from the normal).",
        "Speed in medium: v = c/n; wavelength changes on crossing boundary but frequency stays constant.",
      ],
      discovery: {
        problem: "Place a straight straw in a glass of water. It appears to bend at the water surface. Draw a sketch showing the path of light from the submerged part of the straw to your eye. Why does the straw appear to bend?",
        idea: "Light from the straw travels from water (denser, n ≈ 1.33) into air (n = 1.0) and bends *away* from the normal, increasing the angle. Your eye/brain assumes light travels in straight lines and traces it backward — the apparent position of the straw end is shifted upward and sideways, making the straw look broken.",
      },
      whyItWorks: "Wavefronts must remain continuous across the boundary. If part of a wavefront enters the denser medium and slows while the rest is still in the fast medium, the wavefront tilts — this tilt IS the change in direction. Snell's law follows from the geometric requirement that the wavefront tilt matches the speed ratio: sin i / sin r = v₁ / v₂ = n₂ / n₁.",
      strategies: ["draw a diagram", "identify which medium is denser", "measure angles from the normal"],
      thinkDeeper: "Snell's law can be derived from Fermat's Principle: light takes the path that minimises travel time. This is the same mathematics that determines the most efficient swimming-then-running route a lifeguard should take to reach a drowning swimmer.",
    },

    {
      heading: "Total Internal Reflection and Critical Angle",
      body: `When light travels from a **denser** medium to a **less dense** medium (e.g. glass to air), it bends away from the normal. As the angle of incidence increases, the refracted ray bends further from the normal.

**Critical angle (c):** the angle of incidence (in the denser medium) at which the refracted ray grazes along the boundary (angle of refraction = 90°). At this exact angle, the refracted ray travels along the surface.

**Total internal reflection (TIR):** if the angle of incidence **exceeds** the critical angle, ALL the light is reflected back into the denser medium — no refraction occurs. This is TIR.

**Calculating the critical angle:**
At the critical angle, r = 90° and sin 90° = 1, so Snell's law gives:
n = sin i / sin r   →   n = sin c / 1   →   sin c = 1/n   →   **n = 1/sin c**

For glass (n = 1.5): sin c = 1/1.5 = 0.667, so c = 41.8° ≈ 42°.

**Uses of TIR:**
- **Optical fibres:** light travels along a thin glass fibre, repeatedly TIR-ing off the walls. Used in broadband internet, endoscopes (medical cameras), and decorative lighting.
- **Prisms as reflectors:** a 45–45–90° glass prism can turn a light beam by 90° or 180° with TIR. Used in binoculars, periscopes, and SLR cameras.`,
      keyPoints: [
        "TIR occurs only when light travels from a denser into a less dense medium.",
        "Critical angle c: angle of incidence at which refracted ray is at 90° (along boundary).",
        "Formula: n = 1/sin c, equivalently sin c = 1/n.",
        "For i > c: total internal reflection — no light escapes, angle of reflection = angle of incidence.",
        "Applications: optical fibres (communications, medicine) and reflecting prisms (binoculars, periscopes).",
      ],
      strategies: ["identify the denser medium", "set r = 90° to derive the critical angle formula"],
    },

    {
      heading: "Converging Lenses, Ray Diagrams, and Dispersion",
      body: `**Converging (convex) lens:** a lens that is thicker at the centre than the edges. It refracts parallel rays so that they converge at the **principal focus (F)**.

**Focal length (f):** the distance from the optical centre of the lens to F. Measured in metres; a more powerful lens has a shorter focal length.

**Standard ray diagram rules — 3 standard rays from a point on the object:**
1. A ray parallel to the principal axis → refracts through F on the other side.
2. A ray through the optical centre → passes straight through undeviated.
3. A ray through F on the object side → refracts parallel to the principal axis.

**Real image (object beyond F):**
Object beyond 2F → image between F and 2F on opposite side; diminished, real, inverted.
Object at 2F → image at 2F; same size, real, inverted.
Object between F and 2F → image beyond 2F on opposite side; magnified, real, inverted.
Real images can be formed on a screen.

**Virtual image (object inside F — magnifying glass):**
Object between lens and F → image on same side as object; magnified, virtual, upright.
Virtual images cannot be formed on a screen; they are seen by looking through the lens.

**Magnification:**

magnification = image height / object height = image distance / object distance

(No unit — it is a ratio.)

**Dispersion by a prism:**
White light is a mixture of all visible wavelengths (colours). When it enters a glass prism, each colour travels at a slightly different speed in the glass, so each is refracted by a slightly different amount. Violet light is refracted most, red light least. The result is a visible **spectrum**: red, orange, yellow, green, blue, indigo, violet (ROYGBIV). Dispersion occurs because n varies with wavelength — shorter wavelengths (violet) have a higher refractive index in glass.`,
      diagrams: [
        {
          caption: "Converging lens ray diagram: object beyond 2F producing a real, inverted, diminished image",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Converging lens ray diagram with three standard rays forming a real inverted image beyond the focal point">
  <!-- background -->
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- principal axis -->
  <line x1="10" y1="100" x2="310" y2="100" stroke="#475569" stroke-width="1" stroke-dasharray="4 3"/>
  <!-- lens (vertical line with arrowheads top and bottom) -->
  <line x1="170" y1="30" x2="170" y2="170" stroke="#38bdf8" stroke-width="2.5"/>
  <polygon points="170,30 164,42 176,42" fill="#38bdf8"/>
  <polygon points="170,170 164,158 176,158" fill="#38bdf8"/>
  <text x="175" y="25" font-size="10" fill="#38bdf8" font-family="sans-serif">Lens</text>
  <!-- focal points -->
  <!-- F on right side: x=220 -->
  <circle cx="220" cy="100" r="3" fill="#fbbf24"/>
  <text x="224" y="113" font-size="10" fill="#fbbf24" font-family="sans-serif">F</text>
  <!-- 2F on right: x=270 -->
  <circle cx="270" cy="100" r="3" fill="#fbbf24"/>
  <text x="274" y="113" font-size="10" fill="#fbbf24" font-family="sans-serif">2F</text>
  <!-- F on left: x=120 -->
  <circle cx="120" cy="100" r="3" fill="#fbbf24"/>
  <text x="105" y="113" font-size="10" fill="#fbbf24" font-family="sans-serif">F</text>
  <!-- 2F on left: x=70 -->
  <circle cx="70" cy="100" r="3" fill="#fbbf24"/>
  <text x="55" y="113" font-size="10" fill="#fbbf24" font-family="sans-serif">2F</text>
  <!-- Object at x=55, top at y=50, bottom at y=100 -->
  <line x1="55" y1="100" x2="55" y2="55" stroke="#34d399" stroke-width="2"/>
  <polygon points="55,55 50,67 60,67" fill="#34d399"/>
  <text x="28" y="52" font-size="10" fill="#34d399" font-family="sans-serif">Object</text>
  <!-- Ray 1: parallel to axis from top of object (55,55) -> hits lens at (170,55) -> through F (220,100) -> extends -->
  <line x1="55" y1="55" x2="170" y2="55" stroke="#fb7185" stroke-width="1.5"/>
  <line x1="170" y1="55" x2="300" y2="140" stroke="#fb7185" stroke-width="1.5"/>
  <!-- Ray 2: through centre (55,55) -> (170,100) would be off, use straight through centre -->
  <!-- Centre ray: from (55,55) through (170,100)-> extended -->
  <line x1="55" y1="55" x2="290" y2="127" stroke="#a78bfa" stroke-width="1.5"/>
  <!-- Ray 3: through F on object side (120,100) -> top of object -> lens -> parallel -->
  <!-- from (55,55) heading toward F at (120,100): slope = (100-55)/(120-55) = 45/65 -->
  <!-- at lens x=170: y = 55 + (170-55)*45/65 = 55 + 115*0.692 = 55+79.6=134.6, but use approximate -->
  <line x1="55" y1="55" x2="170" y2="134" stroke="#38bdf8" stroke-width="1.5"/>
  <line x1="170" y1="134" x2="300" y2="134" stroke="#38bdf8" stroke-width="1.5"/>
  <!-- Image (intersection ~x=290, y~133) - show image arrow -->
  <line x1="290" y1="100" x2="290" y2="133" stroke="#b7bce0" stroke-width="2"/>
  <polygon points="290,133 285,121 295,121" fill="#b7bce0" transform="rotate(180,290,133)"/>
  <text x="258" y="148" font-size="9" fill="#b7bce0" font-family="sans-serif">Image (real, inverted)</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Converging lens: thicker at centre; parallel rays meet at principal focus F.",
        "Three standard rays: parallel→through F; through centre→undeviated; through F→parallel.",
        "Object beyond F: real, inverted image on opposite side of lens.",
        "Object inside F: virtual, upright, magnified image on same side as object (magnifying glass).",
        "Dispersion: white light splits into a spectrum because n varies with wavelength (violet refracted most).",
      ],
      thinkDeeper: "A converging lens with a shorter focal length is more powerful (higher power in dioptres, P = 1/f). Spectacle lenses for long-sighted (hyperopic) people are converging; they bring the focal point forward onto the retina. The camera in your phone contains several lens elements to correct for chromatic aberration — the dispersion effect that would otherwise make images blurry with colour fringes.",
      strategies: ["draw all three standard rays", "check real vs virtual by which side of lens the image forms"],
    },
  ],

  learn: {
    keyFacts: [
      "Waves transfer energy without transferring matter.",
      "Transverse waves oscillate perpendicular to the direction of travel (e.g. light, water surface).",
      "Longitudinal waves oscillate parallel to the direction of travel (e.g. sound).",
      "Wave equation: v = fλ (speed = frequency × wavelength).",
      "Period and frequency are reciprocals: T = 1/f.",
      "Law of reflection: angle of incidence = angle of reflection (both from the normal).",
      "Plane mirror image is virtual, upright, same size, and laterally inverted.",
      "Snell's law / refractive index: n = sin i / sin r.",
      "Critical angle formula: n = 1/sin c; total internal reflection occurs when i > c.",
      "Converging lens: object beyond F gives real, inverted image; object inside F gives virtual, upright, magnified image.",
      "Magnification = image height / object height = image distance / object distance.",
      "Dispersion: violet refracted most, red least; n is higher for shorter wavelengths in glass.",
    ],
    flashcards: [
      { front: "What is a transverse wave? Give two examples.", back: "Oscillation perpendicular to direction of energy transfer. Examples: light (and all EM waves), waves on a string, water surface waves." },
      { front: "What is a longitudinal wave? Give one example.", back: "Oscillation parallel to direction of energy transfer. Example: sound in air. Features compressions and rarefactions." },
      { front: "State the wave equation and define each symbol.", back: "v = fλ. v = wave speed (m/s), f = frequency (Hz), λ = wavelength (m)." },
      { front: "What is the relationship between period T and frequency f?", back: "T = 1/f. Period is the reciprocal of frequency. If f = 200 Hz, T = 0.005 s." },
      { front: "State the law of reflection.", back: "The angle of incidence equals the angle of reflection. Both angles are measured from the normal to the surface at the point of incidence." },
      { front: "List four properties of the image in a plane mirror.", back: "Virtual, upright, same size as object, laterally inverted (left-right swapped), and as far behind the mirror as the object is in front." },
      { front: "What is refractive index n? Give the formula.", back: "A measure of how much a medium slows light compared to a vacuum. n = sin i / sin r (Snell's law). Also n = c / v." },
      { front: "Define critical angle and state its formula.", back: "The angle of incidence (in the denser medium) at which the refracted ray grazes along the boundary (r = 90°). Formula: n = 1/sin c, so sin c = 1/n." },
      { front: "What conditions are required for total internal reflection?", back: "1. Light must be travelling from a denser to a less dense medium. 2. Angle of incidence must be greater than the critical angle." },
      { front: "State two uses of total internal reflection.", back: "Optical fibres (internet/endoscopes) and totally reflecting prisms (binoculars, periscopes, cameras)." },
      { front: "A converging lens forms a real image. What does real mean?", back: "Rays of light actually converge at that point — the image can be projected onto a screen. It forms on the opposite side of the lens from the object." },
      { front: "When does a converging lens act as a magnifying glass?", back: "When the object is placed between the lens and the principal focus (inside F). The image is virtual, upright, and magnified." },
      { front: "Why does a prism disperse white light into a spectrum?", back: "Different colours (wavelengths) travel at slightly different speeds in glass, so each is refracted by a different amount. Violet is refracted most, red least." },
      { front: "What is amplitude and how does it relate to energy?", back: "Amplitude is the maximum displacement of a particle from equilibrium. Energy carried by a wave is proportional to the square of amplitude (E ∝ A²)." },
    ],
    keyTerms: [
      { term: "Transverse wave", definition: "A wave in which the oscillation of particles is perpendicular to the direction of energy transfer." },
      { term: "Longitudinal wave", definition: "A wave in which the oscillation of particles is parallel (along) the direction of energy transfer, producing compressions and rarefactions." },
      { term: "Wavelength (λ)", definition: "The distance between two adjacent points that are in phase (e.g. crest to crest). Measured in metres." },
      { term: "Frequency (f)", definition: "The number of complete wave cycles passing a point per second. Unit: hertz (Hz)." },
      { term: "Period (T)", definition: "The time for one complete wave cycle. T = 1/f. Unit: second (s)." },
      { term: "Amplitude (A)", definition: "The maximum displacement of a particle from its equilibrium position. Unit: metre (m)." },
      { term: "Wavefront", definition: "An imaginary line (or surface) connecting all points in a wave that are at the same phase of oscillation." },
      { term: "Refractive index (n)", definition: "The ratio of the sine of the angle of incidence to the sine of the angle of refraction (n = sin i / sin r); also n = c/v." },
      { term: "Critical angle (c)", definition: "The angle of incidence in the denser medium at which the refracted ray travels along the boundary (r = 90°). Given by sin c = 1/n." },
      { term: "Total internal reflection", definition: "Complete reflection of a wave back into the denser medium when the angle of incidence exceeds the critical angle." },
      { term: "Principal focus (F)", definition: "The point on the principal axis of a converging lens at which rays parallel to the axis converge after refraction." },
      { term: "Focal length", definition: "The distance from the optical centre of a lens to its principal focus. Unit: metre (m)." },
      { term: "Real image", definition: "An image formed where rays of light actually converge; can be projected onto a screen; formed on the opposite side of the lens from the object." },
      { term: "Virtual image", definition: "An image from which rays appear to diverge but do not actually pass through; cannot be projected onto a screen." },
      { term: "Magnification", definition: "The ratio of image height to object height (= image distance / object distance). A dimensionless number." },
      { term: "Dispersion", definition: "The separation of white light into its component colours by a prism, because different wavelengths have different refractive indices in the medium." },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "phys-waves-mcq-q01",
        question: "Which of the following is a longitudinal wave?",
        options: ["Light from the Sun", "Water surface waves", "Sound in air", "Waves on a guitar string"],
        answerIndex: 2,
        explanation: "Sound in air is longitudinal — air molecules oscillate parallel to the direction the sound travels, creating compressions and rarefactions. All the other options are transverse waves.",
        guideRef: "Describing Waves",
        difficulty: "warmup",
      },
      {
        id: "phys-waves-mcq-q02",
        question: "A wave has a frequency of 250 Hz and a wavelength of 1.4 m. What is its speed?",
        options: ["178.6 m/s", "250 m/s", "350 m/s", "1.4 m/s"],
        answerIndex: 2,
        explanation: "v = fλ = 250 × 1.4 = 350 m/s. Option A results from dividing instead of multiplying. Option B is just the frequency.",
        guideRef: "Wave Quantities and the Wave Equation",
        difficulty: "warmup",
      },
      {
        id: "phys-waves-mcq-q03",
        question: "A ray of light hits a plane mirror at 35° to the mirror surface. What is the angle of reflection (measured from the normal)?",
        options: ["35°", "55°", "70°", "90°"],
        answerIndex: 1,
        explanation: "The angle of incidence is measured from the normal. If the ray makes 35° with the surface, it makes 90° − 35° = 55° with the normal. By the law of reflection, the angle of reflection is also 55°.",
        guideRef: "Reflection of Light",
        difficulty: "core",
        hints: [
          "Remember: angles in optics are always measured from the normal (perpendicular), not from the surface.",
          "If the ray makes 35° with the surface, what angle does it make with the normal?",
          "Normal and surface are 90° apart, so angle from normal = 90° − angle from surface.",
        ],
      },
      {
        id: "phys-waves-mcq-q04",
        question: "Light travels from glass (n = 1.5) into air. The angle of incidence in glass is 50°. Which statement is correct?",
        options: [
          "The light bends toward the normal; angle of refraction < 50°",
          "The light bends away from the normal; angle of refraction > 50°",
          "Total internal reflection occurs because 50° > critical angle (≈ 42°)",
          "The angle of refraction is exactly 50° — no bending occurs",
        ],
        answerIndex: 2,
        explanation: "For glass with n = 1.5, the critical angle c satisfies sin c = 1/1.5 = 0.667, giving c ≈ 41.8°. Since the angle of incidence (50°) exceeds this critical angle, total internal reflection occurs — the light does not enter the air at all.",
        guideRef: "Total Internal Reflection and Critical Angle",
        difficulty: "core",
        hints: [
          "First calculate the critical angle for glass-to-air: sin c = 1/n.",
          "Compare 50° with the critical angle you found.",
          "If i > c, TIR happens and there is no refracted ray.",
        ],
      },
      {
        id: "phys-waves-mcq-q05",
        question: "An object is placed 8 cm from a converging lens of focal length 12 cm. What type of image is formed?",
        options: [
          "Real, inverted, diminished",
          "Real, inverted, magnified",
          "Virtual, upright, magnified",
          "Virtual, inverted, diminished",
        ],
        answerIndex: 2,
        explanation: "The object is at 8 cm, which is less than the focal length (12 cm), so it is inside F. An object inside F always produces a virtual, upright, magnified image on the same side as the object — this is the magnifying glass case.",
        guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
        difficulty: "core",
        hints: [
          "Compare the object distance to the focal length.",
          "Is the object inside F or beyond F?",
          "Object inside F → virtual image (magnifying glass case).",
        ],
      },
      {
        id: "phys-waves-mcq-q06",
        question: "A glass prism disperses white light into a spectrum. Which colour is deviated the most?",
        options: ["Red", "Yellow", "Green", "Violet"],
        answerIndex: 3,
        explanation: "Violet light has the shortest wavelength of visible light and the highest refractive index in glass, so it is refracted (deviated) the most. Red light is deviated the least.",
        guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
        difficulty: "warmup",
      },
    ],
    qa: [
      {
        id: "phys-waves-qa-q01",
        question: "A student measures that 40 complete water waves pass a fixed point in 8 seconds, and adjacent crests are 0.25 m apart.\n(a) Calculate the frequency of the waves. [1]\n(b) Calculate the period of the waves. [1]\n(c) Calculate the wave speed. [2]",
        marks: 4,
        modelAnswer: "(a) f = number of waves / time = 40 / 8 = 5 Hz\n(b) T = 1/f = 1/5 = 0.20 s\n(c) v = fλ = 5 × 0.25 = 1.25 m/s\n(Alternative for c: v = λ/T = 0.25 / 0.20 = 1.25 m/s ✓)",
        markScheme: [
          "f = 40/8 = 5 Hz (1 mark)",
          "T = 1/5 = 0.2 s (1 mark)",
          "Correct substitution into v = fλ or v = λ/T (1 mark)",
          "v = 1.25 m/s with unit (1 mark)",
        ],
        commonError: "Confusing period and frequency — e.g. writing T = 40/8 = 5 s instead of using T = 1/f. Also forgetting units on the final answer.",
        guideRef: "Wave Quantities and the Wave Equation",
        difficulty: "core",
        hints: [
          "Frequency = number of complete cycles per second.",
          "Period is the reciprocal of frequency.",
          "Use v = fλ, making sure λ is in metres.",
        ],
        solutions: [
          {
            label: "Method 1: via frequency",
            steps: [
              "f = 40 waves / 8 s = 5 Hz",
              "T = 1/f = 1/5 = 0.20 s",
              "v = fλ = 5 Hz × 0.25 m = 1.25 m/s",
            ],
          },
          {
            label: "Method 2: via period",
            steps: [
              "T = 8 s / 40 waves = 0.20 s (time for one wave)",
              "In time T, wave travels one wavelength: v = λ/T = 0.25/0.20 = 1.25 m/s",
            ],
          },
        ],
      },
      {
        id: "phys-waves-qa-q02",
        question: "A ray of light in air strikes a glass block at an angle of incidence of 48°. The angle of refraction inside the glass is 30°.\n(a) Calculate the refractive index of the glass. [2]\n(b) Calculate the critical angle for this glass. [2]\n(c) State what happens to a ray inside the glass that hits the glass-air boundary at 45°. Justify your answer. [2]",
        marks: 6,
        modelAnswer: "(a) n = sin i / sin r = sin 48° / sin 30° = 0.7431 / 0.5000 = 1.49 (3 s.f.)\n(b) sin c = 1/n = 1/1.49 = 0.6711 → c = sin⁻¹(0.6711) = 42.2° ≈ 42°\n(c) Total internal reflection occurs. 45° > 42° (the critical angle), so the light does not pass into the air; it is completely reflected back into the glass, obeying the law of reflection.",
        markScheme: [
          "n = sin 48° / sin 30° (correct substitution) (1 mark)",
          "n = 1.49 (accept 1.48–1.50) with no unit (1 mark)",
          "sin c = 1/1.49 correctly used (1 mark)",
          "c = 42° (accept 41°–43°) (1 mark)",
          "States total internal reflection (1 mark)",
          "Justifies: 45° > critical angle / i > c (1 mark)",
        ],
        commonError: "Inverting Snell's law and writing n = sin r / sin i (giving n less than 1 for glass). Also: forgetting to check whether TIR occurs by comparing angles.",
        guideRef: "Total Internal Reflection and Critical Angle",
        difficulty: "core",
        hints: [
          "Snell's law: n = sin(angle in air) / sin(angle in glass). Which angle is which here?",
          "For the critical angle, set r = 90° in Snell's law so sin r = 1.",
          "Compare 45° with the critical angle you calculated to decide about TIR.",
        ],
        solutions: [
          {
            label: "Method: Snell's law then critical angle",
            steps: [
              "n = sin 48° / sin 30° = 0.7431 / 0.5000 = 1.49",
              "sin c = 1/n = 1/1.49 = 0.6711",
              "c = arcsin(0.6711) ≈ 42°",
              "Since 45° > 42°, total internal reflection occurs at the glass-air boundary.",
            ],
          },
        ],
      },
      {
        id: "phys-waves-qa-q03",
        question: "A student uses a converging lens of focal length 5 cm to examine a postage stamp placed 3 cm from the lens.\n(a) State whether the image is real or virtual, and upright or inverted. Explain why. [2]\n(b) Calculate the magnification if the image is 7.5 cm from the lens. [2]\n(c) Explain how optical fibres use total internal reflection to transmit information over long distances. [3]",
        marks: 7,
        modelAnswer: "(a) Virtual and upright. The object (3 cm) is inside the focal length (5 cm), so the lens acts as a magnifying glass. Rays diverge after the lens and only appear to come from a point on the same side as the object.\n(b) Magnification = image distance / object distance = 7.5 / 3 = 2.5 (no unit)\n(c) Light enters the glass fibre and strikes the wall at an angle greater than the critical angle. Total internal reflection occurs — all light reflects back into the glass. This repeats along the entire length of the fibre, so the light (carrying the signal) travels from one end to the other with very little loss. The signal can carry data (e.g. broadband internet) encoded as pulses of light.",
        markScheme: [
          "Virtual (1 mark)",
          "Upright / same side as object; object inside F / inside focal length (1 mark)",
          "Magnification = 7.5 / 3 = 2.5 (1 mark for correct formula and substitution, 1 mark for answer with no unit)",
          "Light hits wall at angle greater than critical angle (1 mark)",
          "Total internal reflection keeps light inside the fibre (1 mark)",
          "Signal travels along fibre from one end to the other / carries data as pulses (1 mark)",
        ],
        commonError: "For part (b): using image height and object height instead of image and object distances (both methods are valid, but students sometimes mix them). For part (c): saying light is reflected by mirrors inside the fibre, rather than TIR.",
        guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
        difficulty: "core",
        hints: [
          "Check: is the object inside or outside the focal length?",
          "Magnification formula has no units — it is a pure ratio of distances (or heights).",
          "For the fibre question: what angle condition triggers TIR?",
        ],
        solutions: [
          {
            label: "Magnification calculation",
            steps: [
              "Object distance u = 3 cm, image distance v = 7.5 cm",
              "Magnification = v / u = 7.5 / 3.0 = 2.5",
              "No unit (it is a ratio).",
            ],
          },
        ],
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "phys-waves-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Ten multiple-choice questions across wave properties, the wave equation, reflection, and refraction.",
        questions: [
          {
            id: "phys-waves-bm1-01",
            question: "Which statement about a wave is always true?",
            options: [
              "It transfers both energy and matter from place to place",
              "It transfers energy without transferring matter",
              "It can only travel through a solid medium",
              "It transfers matter but not energy",
            ],
            answerIndex: 1,
            explanation: "A wave is a periodic disturbance that transfers energy from one place to another without transferring matter — the medium oscillates in place. Some waves (e.g. electromagnetic) need no medium at all.",
            guideRef: "Describing Waves",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm1-02",
            question: "Which feature is found only in a longitudinal wave?",
            options: ["Crests", "Troughs", "Compressions and rarefactions", "Amplitude"],
            answerIndex: 2,
            explanation: "Compressions (high-pressure, close-together particles) and rarefactions (low-pressure, spread-out particles) are features of longitudinal waves such as sound. Crests and troughs belong to transverse waves; amplitude is common to both.",
            guideRef: "Describing Waves",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm1-03",
            question: "A wave has a frequency of 50 Hz and a wavelength of 4.0 m. What is its speed?",
            options: ["12.5 m/s", "54 m/s", "200 m/s", "0.08 m/s"],
            answerIndex: 2,
            explanation: "v = fλ = 50 × 4.0 = 200 m/s. Option A divides instead of multiplying; option D inverts the calculation.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm1-04",
            question: "The period of a wave is 0.005 s. What is its frequency?",
            options: ["5 Hz", "20 Hz", "200 Hz", "500 Hz"],
            answerIndex: 2,
            explanation: "f = 1/T = 1/0.005 = 200 Hz. Period and frequency are reciprocals.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "core",
            hints: [
              "Period and frequency are reciprocals: f = 1/T.",
              "1/0.005 is the same as 1000/5.",
              "1000/5 = 200.",
            ],
          },
          {
            id: "phys-waves-bm1-05",
            question: "A ray of light strikes a plane mirror so that it makes an angle of 25° with the mirror surface. What is the angle of incidence?",
            options: ["25°", "50°", "65°", "115°"],
            answerIndex: 2,
            explanation: "The angle of incidence is measured from the normal, which is 90° to the surface. So angle of incidence = 90° − 25° = 65°.",
            guideRef: "Reflection of Light",
            difficulty: "core",
            hints: [
              "Angles in optics are measured from the normal, not the surface.",
              "The normal is 90° to the surface.",
              "Angle from normal = 90° − angle from surface.",
            ],
          },
          {
            id: "phys-waves-bm1-06",
            question: "Which list correctly describes the image of an object seen in a plane mirror?",
            options: [
              "Real, inverted, magnified",
              "Virtual, upright, same size, laterally inverted",
              "Real, upright, diminished",
              "Virtual, inverted, same size",
            ],
            answerIndex: 1,
            explanation: "A plane mirror forms a virtual, upright, same-size image that is laterally inverted (left-right swapped) and as far behind the mirror as the object is in front.",
            guideRef: "Reflection of Light",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm1-07",
            question: "Light passes from air into water. Which row correctly describes what happens?",
            options: [
              "Speeds up; bends away from the normal",
              "Slows down; bends toward the normal",
              "Slows down; bends away from the normal",
              "Speed unchanged; no bending",
            ],
            answerIndex: 1,
            explanation: "Water is optically denser than air, so light slows down on entering it and bends toward the normal (angle of refraction smaller than angle of incidence).",
            guideRef: "Refraction and Refractive Index",
            difficulty: "core",
            hints: [
              "Is water denser or less dense than air?",
              "Light entering a denser medium slows down.",
              "Slowing on entry means bending toward the normal.",
            ],
          },
          {
            id: "phys-waves-bm1-08",
            question: "A ray in air enters glass with an angle of incidence of 45° and an angle of refraction of 28°. What is the refractive index of the glass? (sin 45° = 0.707, sin 28° = 0.469)",
            options: ["0.66", "1.51", "1.61", "2.13"],
            answerIndex: 1,
            explanation: "n = sin i / sin r = 0.707 / 0.469 = 1.51. Option A is the inverse (sin r / sin i).",
            guideRef: "Refraction and Refractive Index",
            difficulty: "core",
            hints: [
              "Use n = sin i / sin r.",
              "i is the angle in air (45°), r is the angle in glass (28°).",
              "0.707 / 0.469 ≈ 1.51.",
            ],
          },
          {
            id: "phys-waves-bm1-09",
            question: "Light travels through a transparent plastic at 2.0 × 10⁸ m/s. Taking c = 3.0 × 10⁸ m/s, what is the refractive index of the plastic?",
            options: ["0.67", "1.5", "2.0", "6.0"],
            answerIndex: 1,
            explanation: "n = c/v = (3.0 × 10⁸) / (2.0 × 10⁸) = 1.5. The refractive index is the ratio by which the medium slows light relative to a vacuum.",
            guideRef: "Refraction and Refractive Index",
            difficulty: "core",
            hints: [
              "Use n = c / v.",
              "Both speeds have the same power of ten, so divide 3.0 by 2.0.",
              "3.0 / 2.0 = 1.5.",
            ],
          },
          {
            id: "phys-waves-bm1-10",
            question: "A wave travels at 300 m/s. Its source frequency is increased from 100 Hz to 150 Hz while the medium is unchanged. What happens to the wavelength?",
            options: [
              "It increases from 2.0 m to 3.0 m",
              "It decreases from 3.0 m to 2.0 m",
              "It stays at 3.0 m",
              "It decreases from 2.0 m to 1.5 m",
            ],
            answerIndex: 1,
            explanation: "Speed is fixed by the medium (300 m/s). At 100 Hz, λ = v/f = 300/100 = 3.0 m. At 150 Hz, λ = 300/150 = 2.0 m. Raising the frequency at constant speed shortens the wavelength.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "challenge",
            hints: [
              "Wave speed is set by the medium, not the source frequency.",
              "Use λ = v/f at each frequency.",
              "λ₁ = 300/100 = 3.0 m; λ₂ = 300/150 = 2.0 m.",
              "Higher frequency at constant speed means shorter wavelength.",
            ],
            strategy: "hold the constant quantity fixed and recompute",
          },
        ],
      },
      {
        id: "phys-waves-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Ten multiple-choice questions on refraction, critical angle, total internal reflection, and optical fibres.",
        questions: [
          {
            id: "phys-waves-bm2-01",
            question: "When light passes along the normal (perpendicular) into a glass block, what happens to its direction?",
            options: [
              "It bends toward the normal",
              "It bends away from the normal",
              "It does not change direction",
              "It is totally internally reflected",
            ],
            answerIndex: 2,
            explanation: "If light strikes a boundary along the normal (angle of incidence 0°), there is no change of direction — although the speed still changes. Bending only occurs when the wave meets the boundary at an angle.",
            guideRef: "Refraction and Refractive Index",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm2-02",
            question: "Which quantity stays the same when a wave is refracted at a boundary?",
            options: ["Speed", "Wavelength", "Frequency", "Direction"],
            answerIndex: 2,
            explanation: "Frequency is set by the source and does not change on crossing a boundary. Speed and wavelength change together (v = fλ), and the direction usually changes too.",
            guideRef: "Refraction and Refractive Index",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm2-03",
            question: "A glass has a refractive index of 1.50. What is its critical angle? (sin⁻¹ 0.667 = 41.8°)",
            options: ["33.6°", "41.8°", "48.6°", "90°"],
            answerIndex: 1,
            explanation: "sin c = 1/n = 1/1.50 = 0.667, so c = sin⁻¹(0.667) = 41.8°. At this angle of incidence the refracted ray would graze the boundary (r = 90°).",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "core",
            hints: [
              "Use sin c = 1/n.",
              "1/1.50 = 0.667.",
              "Take the inverse sine of 0.667.",
            ],
          },
          {
            id: "phys-waves-bm2-04",
            question: "Total internal reflection can occur only when light travels...",
            options: [
              "from a less dense medium to a denser medium, at any angle",
              "from a denser medium to a less dense medium, with i greater than the critical angle",
              "from a denser medium to a less dense medium, with i less than the critical angle",
              "along the normal between any two media",
            ],
            answerIndex: 1,
            explanation: "TIR requires the light to be going from a denser to a less dense medium AND the angle of incidence to exceed the critical angle. Below the critical angle the light refracts out.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "core",
            hints: [
              "TIR needs the correct direction across the boundary.",
              "Which medium must the light start in — denser or less dense?",
              "How does the angle of incidence compare with the critical angle?",
            ],
          },
          {
            id: "phys-waves-bm2-05",
            question: "Which of these is NOT an application of total internal reflection?",
            options: [
              "Optical fibres carrying broadband signals",
              "A periscope built from 45° glass prisms",
              "An endoscope used to see inside the body",
              "A converging lens focusing sunlight to a point",
            ],
            answerIndex: 3,
            explanation: "A converging lens works by refraction, not TIR. Optical fibres, reflecting prisms (periscopes/binoculars), and endoscopes all rely on total internal reflection.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm2-06",
            question: "A ray in air (n = 1.0) enters water (n = 1.33) at an angle of incidence of 40°. What is the angle of refraction? (sin 40° = 0.643)",
            options: ["28.9°", "31.5°", "40.0°", "58.7°"],
            answerIndex: 0,
            explanation: "Using n = sin i / sin r → sin r = sin i / n = 0.643 / 1.33 = 0.483, so r = sin⁻¹(0.483) = 28.9°. The ray bends toward the normal entering the denser water.",
            guideRef: "Refraction and Refractive Index",
            difficulty: "core",
            hints: [
              "Rearrange n = sin i / sin r to sin r = sin i / n.",
              "sin r = 0.643 / 1.33 = 0.483.",
              "r = sin⁻¹(0.483) ≈ 28.9°.",
            ],
          },
          {
            id: "phys-waves-bm2-07",
            question: "An optical fibre core has refractive index 1.50. Light inside the core hits the wall (with air outside) at an angle of incidence of 45°. What happens?",
            options: [
              "It refracts out of the fibre at a small angle",
              "It refracts out of the fibre at a large angle",
              "It is totally internally reflected because 45° exceeds the critical angle of about 42°",
              "It travels straight through the wall undeviated",
            ],
            answerIndex: 2,
            explanation: "The critical angle for n = 1.50 is sin⁻¹(1/1.50) = 41.8°. Since 45° > 41.8°, the light undergoes total internal reflection and stays in the fibre.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "core",
            hints: [
              "First find the critical angle: sin c = 1/1.50.",
              "c = sin⁻¹(0.667) ≈ 42°.",
              "Compare 45° with the critical angle.",
            ],
          },
          {
            id: "phys-waves-bm2-08",
            question: "A substance has a critical angle of 30° (with air). What is its refractive index? (sin 30° = 0.5)",
            options: ["0.5", "1.5", "2.0", "2.5"],
            answerIndex: 2,
            explanation: "n = 1/sin c = 1/sin 30° = 1/0.5 = 2.0. A small critical angle corresponds to a high refractive index.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "core",
            hints: [
              "Rearrange sin c = 1/n to n = 1/sin c.",
              "sin 30° = 0.5.",
              "1/0.5 = 2.0.",
            ],
          },
          {
            id: "phys-waves-bm2-09",
            question: "Light enters glass and slows from 3.0 × 10⁸ m/s to 1.96 × 10⁸ m/s. Which value is closest to the critical angle of this glass? (n = c/v)",
            options: ["29°", "33°", "41°", "49°"],
            answerIndex: 2,
            explanation: "n = c/v = 3.0×10⁸ / 1.96×10⁸ = 1.53. sin c = 1/1.53 = 0.654, so c = sin⁻¹(0.654) = 40.8° ≈ 41°. This is a two-step problem: find n from speeds, then find the critical angle.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "challenge",
            hints: [
              "Step 1: find n using n = c/v.",
              "n = 3.0×10⁸ / 1.96×10⁸ ≈ 1.53.",
              "Step 2: sin c = 1/n = 1/1.53 = 0.654.",
              "c = sin⁻¹(0.654) ≈ 41°.",
            ],
            strategy: "break a two-step problem into named stages",
          },
          {
            id: "phys-waves-bm2-10",
            question: "A diver underwater (n = 1.33) shines a torch up toward the flat surface. Beyond a certain angle of incidence the beam cannot escape into the air. The critical angle is about 48.8°. If the diver aims the beam at 55° to the normal, what does an observer above the surface see from that beam?",
            options: [
              "A bright refracted beam emerging almost along the surface",
              "Nothing from that beam — it is totally internally reflected back down",
              "A beam refracted toward the normal",
              "The beam splitting into a spectrum at the surface",
            ],
            answerIndex: 1,
            explanation: "At 55° the angle of incidence exceeds the critical angle (48.8°), so total internal reflection occurs. The beam is reflected back into the water; none escapes into the air, so the observer above sees nothing from that beam.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "challenge",
            hints: [
              "Compare the 55° angle with the critical angle (48.8°).",
              "If i > c, what happens to the light?",
              "TIR keeps all the light in the denser medium (water).",
              "So no light from that beam reaches the air above.",
            ],
            strategy: "compare i with c before predicting the outcome",
          },
        ],
      },
      {
        id: "phys-waves-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Ten multiple-choice questions on lenses, ray diagrams, magnification, and dispersion.",
        questions: [
          {
            id: "phys-waves-bm3-01",
            question: "Where do rays parallel to the principal axis meet after passing through a converging lens?",
            options: [
              "At the optical centre",
              "At the principal focus F",
              "At twice the focal length (2F)",
              "They do not meet — they stay parallel",
            ],
            answerIndex: 1,
            explanation: "A converging lens refracts rays parallel to the principal axis so they pass through the principal focus F. The distance from the lens centre to F is the focal length.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm3-02",
            question: "Which standard construction ray passes straight through a thin lens without bending?",
            options: [
              "The ray parallel to the principal axis",
              "The ray through the principal focus F",
              "The ray through the optical centre of the lens",
              "The ray at twice the focal length",
            ],
            answerIndex: 2,
            explanation: "A ray passing through the optical centre of a thin lens is undeviated — it continues in a straight line. The other standard rays are bent by the lens.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm3-03",
            question: "An object is placed at exactly 2F from a converging lens. The image is...",
            options: [
              "real, inverted, same size, at 2F on the other side",
              "virtual, upright, magnified, on the same side",
              "real, inverted, magnified, beyond 2F",
              "real, inverted, diminished, between F and 2F",
            ],
            answerIndex: 0,
            explanation: "With the object at 2F, the image forms at 2F on the opposite side, is real, inverted, and the same size as the object (magnification = 1).",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "Recall the special case where object distance equals 2F.",
              "The image distance also equals 2F in this case.",
              "Equal distances mean equal sizes (magnification 1).",
            ],
          },
          {
            id: "phys-waves-bm3-04",
            question: "A magnifying glass produces an image that is...",
            options: [
              "real, inverted, and can be projected onto a screen",
              "virtual, upright, magnified, and seen by looking through the lens",
              "real, upright, and diminished",
              "virtual, inverted, and the same size",
            ],
            answerIndex: 1,
            explanation: "When the object is inside the focal length, a converging lens acts as a magnifying glass: the image is virtual, upright, magnified, and on the same side as the object. It cannot be projected onto a screen.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "A magnifying glass is used with the object inside F.",
              "Object inside F gives a virtual image.",
              "Virtual images from a converging lens are upright and magnified.",
            ],
          },
          {
            id: "phys-waves-bm3-05",
            question: "An object 2.0 cm tall produces an image 6.0 cm tall through a converging lens. What is the magnification?",
            options: ["0.33", "3.0", "4.0", "12"],
            answerIndex: 1,
            explanation: "Magnification = image height / object height = 6.0 / 2.0 = 3.0 (no unit). The image is three times the object size.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm3-06",
            question: "An object is 12 cm from a converging lens and its real image forms 24 cm from the lens on the other side. What is the magnification?",
            options: ["0.5", "2.0", "12", "36"],
            answerIndex: 1,
            explanation: "Magnification = image distance / object distance = 24 / 12 = 2.0. The image is real, inverted, and twice as large as the object.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "Magnification can be found from distances: image distance / object distance.",
              "Here that is 24 / 12.",
              "24 / 12 = 2.0.",
            ],
          },
          {
            id: "phys-waves-bm3-07",
            question: "Which colour of visible light is refracted (deviated) the LEAST when white light passes through a glass prism?",
            options: ["Violet", "Blue", "Green", "Red"],
            answerIndex: 3,
            explanation: "Red light has the longest wavelength and the lowest refractive index in glass, so it is deviated the least. Violet is deviated the most.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm3-08",
            question: "Why does a prism disperse white light into a spectrum?",
            options: [
              "Because the prism adds colour to the white light",
              "Because different wavelengths have different refractive indices in glass and so are refracted by different amounts",
              "Because total internal reflection separates the colours",
              "Because the glass absorbs some colours and reflects others",
            ],
            answerIndex: 1,
            explanation: "Dispersion occurs because the refractive index of glass varies with wavelength. Violet (short wavelength) has a higher n and is bent more; red (long wavelength) is bent less, so the colours spread out into a spectrum.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "White light is already a mixture of all colours.",
              "Each colour has a different wavelength.",
              "n in glass depends on wavelength, so each colour bends by a different amount.",
            ],
          },
          {
            id: "phys-waves-bm3-09",
            question: "A converging lens forms a sharp image of a distant tree on a screen 15 cm behind the lens. The same lens is then used to look at small print held 6 cm away. What kind of image is now seen?",
            options: [
              "Real, inverted, diminished",
              "Real, inverted, magnified",
              "Virtual, upright, magnified",
              "No image can form",
            ],
            answerIndex: 2,
            explanation: "The distant tree focuses at the focal point, so f = 15 cm. The print at 6 cm is inside F (6 cm < 15 cm), so the lens acts as a magnifying glass: the image is virtual, upright, and magnified.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "challenge",
            hints: [
              "A distant object focuses at the focal point, so f = 15 cm.",
              "Compare the print distance (6 cm) with f (15 cm).",
              "6 cm is inside F.",
              "Object inside F → magnifying glass → virtual, upright, magnified.",
            ],
            strategy: "extract the hidden focal length from the distant-object clue",
          },
          {
            id: "phys-waves-bm3-10",
            question: "An object 4.0 mm tall is placed 30 cm from a converging lens of focal length 10 cm. The real image forms 15 cm from the lens. How tall is the image?",
            options: ["2.0 mm", "4.0 mm", "8.0 mm", "12 mm"],
            answerIndex: 0,
            explanation: "Magnification = image distance / object distance = 15 / 30 = 0.5. Image height = magnification × object height = 0.5 × 4.0 mm = 2.0 mm. The image is real, inverted, and diminished (object beyond 2F).",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "challenge",
            hints: [
              "First find the magnification from the distances.",
              "m = image distance / object distance = 15 / 30 = 0.5.",
              "Image height = m × object height.",
              "0.5 × 4.0 mm = 2.0 mm.",
            ],
            strategy: "find magnification first, then scale the height",
          },
        ],
      },
      {
        id: "phys-waves-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Ten mixed multiple-choice questions spanning the whole Waves & Light syllabus, with synoptic calculations.",
        questions: [
          {
            id: "phys-waves-bm4-01",
            question: "Which of the following is a transverse wave?",
            options: ["Sound in air", "A compression pulse along a slinky", "Light from a lamp", "An ultrasound pulse in tissue"],
            answerIndex: 2,
            explanation: "Light (and all electromagnetic waves) is transverse — the oscillation is perpendicular to the direction of travel. Sound, slinky compressions, and ultrasound are longitudinal.",
            guideRef: "Describing Waves",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm4-02",
            question: "What does the amplitude of a wave represent?",
            options: [
              "The distance between two adjacent crests",
              "The number of waves per second",
              "The maximum displacement of a particle from its equilibrium position",
              "The speed of the wave",
            ],
            answerIndex: 2,
            explanation: "Amplitude is the maximum displacement of a particle from its rest (equilibrium) position. The energy carried by a wave is proportional to amplitude squared.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm4-03",
            question: "A radio wave travels at 3.0 × 10⁸ m/s and has a wavelength of 1500 m. What is its frequency?",
            options: ["2.0 × 10⁵ Hz", "5.0 × 10⁵ Hz", "2.0 × 10¹¹ Hz", "4.5 × 10¹¹ Hz"],
            answerIndex: 0,
            explanation: "f = v/λ = (3.0 × 10⁸) / 1500 = 2.0 × 10⁵ Hz (200 kHz). This is a typical medium-wave radio frequency.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "core",
            hints: [
              "Rearrange v = fλ to f = v/λ.",
              "f = 3.0 × 10⁸ / 1500.",
              "3.0 × 10⁸ / 1.5 × 10³ = 2.0 × 10⁵ Hz.",
            ],
          },
          {
            id: "phys-waves-bm4-04",
            question: "Two waves arrive at a point. Compared with a quiet wave, a wave carrying four times the energy has an amplitude that is...",
            options: ["half as large", "twice as large", "four times as large", "sixteen times as large"],
            answerIndex: 1,
            explanation: "Energy ∝ amplitude². If energy increases by a factor of 4, amplitude increases by √4 = 2. So the amplitude doubles.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "challenge",
            hints: [
              "Recall E ∝ A².",
              "If E becomes 4 times larger, then A² becomes 4 times larger.",
              "A becomes √4 times larger.",
              "√4 = 2, so amplitude doubles.",
            ],
            strategy: "invert the proportionality with a square root",
          },
          {
            id: "phys-waves-bm4-05",
            question: "Two plane mirrors are placed at right angles (90° to each other). A ray reflecting off both mirrors emerges...",
            options: [
              "parallel to its original direction but reversed",
              "perpendicular to its original direction",
              "at 45° to its original direction",
              "along the same path it came in",
            ],
            answerIndex: 0,
            explanation: "Two mirrors at 90° reverse a ray's direction: it leaves parallel to (and opposite to) the incoming ray. This is the basis of corner reflectors used in bicycle and road reflectors.",
            guideRef: "Reflection of Light",
            difficulty: "challenge",
            hints: [
              "Apply the law of reflection at each mirror in turn.",
              "The total turning from two reflections at perpendicular mirrors is 180°.",
              "A 180° turn sends the ray back parallel but opposite.",
            ],
            strategy: "apply i = r at each surface in sequence",
          },
          {
            id: "phys-waves-bm4-06",
            question: "Light slows from 3.0 × 10⁸ m/s in air to 2.25 × 10⁸ m/s in a liquid. What is the refractive index of the liquid?",
            options: ["0.75", "1.33", "1.50", "1.75"],
            answerIndex: 1,
            explanation: "n = c/v = (3.0 × 10⁸) / (2.25 × 10⁸) = 1.33. This is the refractive index of water.",
            guideRef: "Refraction and Refractive Index",
            difficulty: "core",
            hints: [
              "Use n = c/v.",
              "Divide 3.0 by 2.25.",
              "3.0 / 2.25 = 1.33.",
            ],
          },
          {
            id: "phys-waves-bm4-07",
            question: "A ray inside a glass block (n = 1.5) reaches the glass-air boundary at an angle of incidence of 35°, which is below the critical angle. What happens to the ray?",
            options: [
              "It is totally internally reflected",
              "It is refracted and bends toward the normal as it exits",
              "It is refracted and bends away from the normal as it exits",
              "It travels along the boundary",
            ],
            answerIndex: 2,
            explanation: "Since 35° is below the critical angle (≈42°), the ray refracts and exits into the air. Going from dense glass to less dense air, it bends away from the normal.",
            guideRef: "Refraction and Refractive Index",
            difficulty: "core",
            hints: [
              "35° is below the critical angle, so the ray does escape.",
              "It is going from a denser to a less dense medium.",
              "Light entering a less dense medium bends away from the normal.",
            ],
          },
          {
            id: "phys-waves-bm4-08",
            question: "An object is placed between F and 2F of a converging lens. The image is...",
            options: [
              "real, inverted, magnified, beyond 2F",
              "real, inverted, diminished, between F and 2F",
              "virtual, upright, magnified, on the same side",
              "real, inverted, same size, at 2F",
            ],
            answerIndex: 0,
            explanation: "Object between F and 2F gives a real, inverted, magnified image formed beyond 2F on the opposite side. This is the projector arrangement.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "Recall the four object positions for a converging lens.",
              "Between F and 2F is the projector case.",
              "The image is real, inverted, and magnified, beyond 2F.",
            ],
          },
          {
            id: "phys-waves-bm4-09",
            question: "An ultrasound scanner emits pulses at 2.0 MHz that travel through soft tissue at 1540 m/s. What is the wavelength in the tissue?",
            options: ["7.7 × 10⁻⁴ m", "7.7 × 10⁻³ m", "1.3 × 10⁻³ m", "3.08 × 10⁹ m"],
            answerIndex: 0,
            explanation: "λ = v/f = 1540 / (2.0 × 10⁶) = 7.7 × 10⁻⁴ m (0.77 mm). Remember to convert 2.0 MHz to 2.0 × 10⁶ Hz first.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "challenge",
            hints: [
              "Convert 2.0 MHz to Hz: 2.0 × 10⁶ Hz.",
              "Use λ = v/f.",
              "λ = 1540 / (2.0 × 10⁶).",
              "= 7.7 × 10⁻⁴ m.",
            ],
            strategy: "convert prefixes to SI before substituting",
          },
          {
            id: "phys-waves-bm4-10",
            question: "Light of frequency 5.0 × 10¹⁴ Hz travels in a vacuum, then enters glass of refractive index 1.5. Which row gives the speed and wavelength inside the glass? (c = 3.0 × 10⁸ m/s)",
            options: [
              "Speed 2.0 × 10⁸ m/s; wavelength 4.0 × 10⁻⁷ m",
              "Speed 3.0 × 10⁸ m/s; wavelength 6.0 × 10⁻⁷ m",
              "Speed 2.0 × 10⁸ m/s; wavelength 6.0 × 10⁻⁷ m",
              "Speed 4.5 × 10⁸ m/s; wavelength 9.0 × 10⁻⁷ m",
            ],
            answerIndex: 0,
            explanation: "Speed in glass v = c/n = (3.0 × 10⁸)/1.5 = 2.0 × 10⁸ m/s. Frequency is unchanged (5.0 × 10¹⁴ Hz), so wavelength in glass = v/f = (2.0 × 10⁸)/(5.0 × 10¹⁴) = 4.0 × 10⁻⁷ m. (In vacuum the wavelength was 6.0 × 10⁻⁷ m, so it shortens on entering glass.)",
            guideRef: "Refraction and Refractive Index",
            difficulty: "challenge",
            hints: [
              "Step 1: speed in glass v = c/n = 3.0×10⁸ / 1.5.",
              "v = 2.0 × 10⁸ m/s.",
              "Step 2: frequency is unchanged, so λ = v/f.",
              "λ = 2.0×10⁸ / 5.0×10¹⁴ = 4.0 × 10⁻⁷ m.",
            ],
            strategy: "use n=c/v then v=fλ with frequency held constant",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "phys-waves-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Ten structured questions on wave description, the wave equation, and reflection.",
        questions: [
          {
            id: "phys-waves-bq1-01",
            question: "(a) State the difference between a transverse and a longitudinal wave. [2]\n(b) Give one example of each. [2]\n(c) Explain what is meant by saying a wave 'transfers energy but not matter'. [2]",
            marks: 6,
            modelAnswer: "(a) In a transverse wave the oscillation (vibration) is perpendicular to the direction of energy transfer; in a longitudinal wave the oscillation is parallel to the direction of energy transfer.\n(b) Transverse: light / water surface waves / waves on a string. Longitudinal: sound in air.\n(c) The particles of the medium oscillate about fixed positions and do not travel along with the wave; only the energy (the disturbance) moves forward. A floating object bobs up and down but is not carried along.",
            markScheme: [
              "Transverse: oscillation perpendicular to direction of travel (1 mark)",
              "Longitudinal: oscillation parallel to direction of travel (1 mark)",
              "Correct transverse example: light / water / string (1 mark)",
              "Correct longitudinal example: sound (1 mark)",
              "Particles oscillate about fixed positions / do not move along with wave (1 mark)",
              "Only energy is transferred forward (1 mark)",
            ],
            commonError: "Saying longitudinal waves have crests and troughs (these belong to transverse waves; longitudinal waves have compressions and rarefactions).",
            guideRef: "Describing Waves",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bq1-02",
            question: "Define each of the following wave quantities and state its SI unit:\n(a) wavelength [1]\n(b) frequency [1]\n(c) period [1]\n(d) amplitude [1]",
            marks: 4,
            modelAnswer: "(a) Wavelength: the distance between two successive points in phase (e.g. crest to crest). Unit: metre (m).\n(b) Frequency: the number of complete waves passing a point per second. Unit: hertz (Hz).\n(c) Period: the time for one complete wave to pass a point. Unit: second (s).\n(d) Amplitude: the maximum displacement of a particle from its equilibrium position. Unit: metre (m).",
            markScheme: [
              "Wavelength = distance between successive in-phase points, unit m (1 mark)",
              "Frequency = waves per second, unit Hz (1 mark)",
              "Period = time for one wave, unit s (1 mark)",
              "Amplitude = maximum displacement from equilibrium, unit m (1 mark)",
            ],
            commonError: "Confusing period (time per wave) with frequency (waves per time) and giving the wrong unit.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bq1-03",
            question: "A wave on the sea has a wavelength of 12 m and a frequency of 0.40 Hz.\n(a) Calculate the speed of the wave. [2]\n(b) Calculate the period of the wave. [2]\n(c) How far does the wave travel in 1 minute? [2]",
            marks: 6,
            modelAnswer: "(a) v = fλ = 0.40 × 12 = 4.8 m/s\n(b) T = 1/f = 1/0.40 = 2.5 s\n(c) distance = speed × time = 4.8 × 60 = 288 m",
            markScheme: [
              "v = 0.40 × 12 substitution (1 mark)",
              "v = 4.8 m/s with unit (1 mark)",
              "T = 1/0.40 (1 mark)",
              "T = 2.5 s with unit (1 mark)",
              "distance = 4.8 × 60 (1 mark)",
              "distance = 288 m with unit (1 mark)",
            ],
            commonError: "Forgetting to convert 1 minute to 60 s before multiplying by speed.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "core",
            hints: [
              "Use v = fλ for the speed.",
              "Period is the reciprocal of frequency.",
              "Distance = speed × time, with time in seconds (1 min = 60 s).",
            ],
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "v = fλ = 0.40 Hz × 12 m = 4.8 m/s",
                  "T = 1/f = 1/0.40 = 2.5 s",
                  "t = 1 min = 60 s; distance = vt = 4.8 × 60 = 288 m",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq1-04",
            question: "A bat emits an ultrasonic squeak with a period of 4.0 × 10⁻⁵ s. The speed of sound in air is 340 m/s.\n(a) Calculate the frequency of the squeak. [2]\n(b) Calculate its wavelength in air. [2]\n(c) The bat hears an echo 0.030 s after the squeak. How far away is the object? [3]",
            marks: 7,
            modelAnswer: "(a) f = 1/T = 1/(4.0 × 10⁻⁵) = 2.5 × 10⁴ Hz (25 kHz)\n(b) λ = v/f = 340 / (2.5 × 10⁴) = 0.0136 m ≈ 1.4 × 10⁻² m\n(c) The sound travels to the object and back, so total distance = v × t = 340 × 0.030 = 10.2 m. Distance to object = 10.2 / 2 = 5.1 m.",
            markScheme: [
              "f = 1/(4.0 × 10⁻⁵) (1 mark)",
              "f = 2.5 × 10⁴ Hz (1 mark)",
              "λ = 340 / (2.5 × 10⁴) substitution (1 mark)",
              "λ = 0.0136 m / 1.4 × 10⁻² m (1 mark)",
              "Total distance = 340 × 0.030 = 10.2 m (1 mark)",
              "Recognises sound travels there and back / divides by 2 (1 mark)",
              "Distance = 5.1 m with unit (1 mark)",
            ],
            commonError: "Forgetting that the echo travels twice the distance (to the object and back), so failing to halve the total distance.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "challenge",
            hints: [
              "Frequency is the reciprocal of period.",
              "Use λ = v/f for the wavelength.",
              "For the echo: the sound goes out AND comes back.",
              "Distance to object = (v × t) / 2.",
            ],
            solutions: [
              {
                label: "Echo calculation",
                steps: [
                  "f = 1/T = 1/(4.0 × 10⁻⁵) = 2.5 × 10⁴ Hz",
                  "λ = v/f = 340 / (2.5 × 10⁴) = 0.0136 m",
                  "Total path = v × t = 340 × 0.030 = 10.2 m",
                  "Distance to object = 10.2 / 2 = 5.1 m",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq1-05",
            question: "(a) State the law of reflection. [2]\n(b) A ray of light strikes a plane mirror at an angle of incidence of 30°. Draw (describe) the incident ray, normal, and reflected ray, and state the angle of reflection. [3]",
            marks: 5,
            modelAnswer: "(a) The angle of incidence equals the angle of reflection, and both are measured from the normal (the line perpendicular to the surface at the point of incidence). (The incident ray, reflected ray, and normal all lie in the same plane.)\n(b) The normal is drawn perpendicular to the mirror at the point where the ray hits. The incident ray comes in at 30° to the normal; the reflected ray leaves on the other side of the normal at 30°. Angle of reflection = 30°.",
            markScheme: [
              "Angle of incidence = angle of reflection (1 mark)",
              "Both measured from the normal (1 mark)",
              "Normal drawn perpendicular to mirror at point of incidence (1 mark)",
              "Reflected ray on opposite side of normal (1 mark)",
              "Angle of reflection = 30° (1 mark)",
            ],
            commonError: "Measuring angles from the mirror surface rather than from the normal.",
            guideRef: "Reflection of Light",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bq1-06",
            question: "An object is placed 8 cm in front of a plane mirror.\n(a) State four properties of the image formed. [4]\n(b) State the distance of the image from the mirror, and the distance between the object and its image. [2]",
            marks: 6,
            modelAnswer: "(a) The image is: virtual (rays only appear to come from behind the mirror); upright (same way up as the object); same size as the object; laterally inverted (left and right swapped).\n(b) The image is 8 cm behind the mirror (as far behind as the object is in front). The distance between the object and its image = 8 + 8 = 16 cm.",
            markScheme: [
              "Virtual (1 mark)",
              "Upright (1 mark)",
              "Same size (1 mark)",
              "Laterally inverted (1 mark)",
              "Image 8 cm behind mirror (1 mark)",
              "Object-to-image distance = 16 cm (1 mark)",
            ],
            commonError: "Stating the image is real, or forgetting that the total object-image separation is twice the object distance.",
            guideRef: "Reflection of Light",
            difficulty: "core",
            hints: [
              "Recall the standard properties of a plane-mirror image.",
              "The image is as far behind the mirror as the object is in front.",
              "Total separation = object distance + image distance.",
            ],
          },
          {
            id: "phys-waves-bq1-07",
            question: "A periscope can be built using two plane mirrors.\n(a) Explain how two plane mirrors arranged at 45° allow a person to see over a wall. [3]\n(b) State one advantage of using two 45° glass prisms instead of plane mirrors in a high-quality periscope. [2]",
            marks: 5,
            modelAnswer: "(a) Light from the object hits the top mirror, which is set at 45° to the horizontal. By the law of reflection it is reflected through 90° down the tube. It then hits the bottom mirror, also at 45°, and is reflected through 90° again into the observer's eye. The two reflections allow the observer to see an object that is higher than the direct line of sight.\n(b) Prisms use total internal reflection, which reflects nearly 100% of the light (mirrors lose some light and silvered backings can tarnish or produce faint double images). So prisms give a brighter, clearer image.",
            markScheme: [
              "Top mirror at 45° reflects light through 90° (1 mark)",
              "Bottom mirror at 45° reflects through 90° again into the eye (1 mark)",
              "Allows viewing over an obstacle / higher line of sight (1 mark)",
              "Prisms use total internal reflection (1 mark)",
              "TIR reflects nearly all the light / brighter image / no tarnishing or double images (1 mark)",
            ],
            commonError: "Saying the mirrors are at 90° to each other rather than 45° to the light path; or claiming prisms refract the light through 90° rather than reflect it by TIR.",
            guideRef: "Reflection of Light",
            difficulty: "core",
            hints: [
              "Each mirror turns the light through 90°.",
              "Two 90° turns let you see over an obstacle.",
              "Prisms rely on total internal reflection, which is very efficient.",
            ],
          },
          {
            id: "phys-waves-bq1-08",
            question: "Water waves in a ripple tank travel from a deep region into a shallow region, where they slow down.\n(a) State what happens to the frequency of the waves as they cross into the shallow region. [1]\n(b) State and explain what happens to the wavelength. [3]\n(c) Wave fronts approach the boundary at an angle. State what happens to their direction and name this effect. [2]",
            marks: 6,
            modelAnswer: "(a) The frequency stays the same (it is set by the source/dipper).\n(b) The wavelength decreases. Since v = fλ and frequency is constant, if the speed v decreases then λ must decrease in proportion.\n(c) The wave fronts change direction (bend toward the normal as they slow). This is refraction.",
            markScheme: [
              "Frequency unchanged (1 mark)",
              "Wavelength decreases (1 mark)",
              "Because v = fλ with f constant / λ proportional to v (1 mark)",
              "Reasoned link: slower speed → shorter wavelength (1 mark)",
              "Direction changes / bends toward normal (1 mark)",
              "Effect named: refraction (1 mark)",
            ],
            commonError: "Thinking the frequency changes when the wave slows down; in fact frequency is fixed by the source and it is the wavelength that changes.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "core",
            hints: [
              "Frequency is set by the source, not the medium.",
              "Apply v = fλ with f held constant.",
              "If v falls and f is fixed, what must λ do?",
              "The change of direction on slowing has a name.",
            ],
          },
          {
            id: "phys-waves-bq1-09",
            question: "A student counts that 15 complete waves pass a post on a pier in 30 seconds. Adjacent crests are 2.0 m apart.\n(a) Calculate the frequency. [2]\n(b) Calculate the wave speed. [2]\n(c) The student then sees a larger storm wave with the same speed but double the wavelength. Calculate its frequency, and state what has happened to its period. [3]",
            marks: 7,
            modelAnswer: "(a) f = number of waves / time = 15 / 30 = 0.50 Hz\n(b) v = fλ = 0.50 × 2.0 = 1.0 m/s\n(c) Same speed (1.0 m/s), wavelength doubled to 4.0 m. f = v/λ = 1.0 / 4.0 = 0.25 Hz. The period T = 1/f = 1/0.25 = 4.0 s, which is double the original period (originally T = 1/0.50 = 2.0 s). So the period has doubled.",
            markScheme: [
              "f = 15/30 = 0.50 Hz (1 mark)",
              "v = 0.50 × 2.0 = 1.0 m/s (1 mark for substitution, accept method)",
              "v = 1.0 m/s with unit (1 mark)",
              "New f = 1.0 / 4.0 = 0.25 Hz (1 mark)",
              "States period has doubled (1 mark)",
              "Supporting value T = 4.0 s (1 mark)",
            ],
            commonError: "Assuming a longer wavelength means a higher frequency; at constant speed, doubling λ halves f and doubles T.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "core",
            hints: [
              "Frequency = waves counted ÷ time.",
              "Use v = fλ for the speed.",
              "For the storm wave, speed is the same; use f = v/λ with the new λ.",
              "Period is the reciprocal of the new frequency.",
            ],
            solutions: [
              {
                label: "Full working",
                steps: [
                  "f = 15/30 = 0.50 Hz",
                  "v = fλ = 0.50 × 2.0 = 1.0 m/s",
                  "New λ = 4.0 m, same v = 1.0 m/s → f = v/λ = 1.0/4.0 = 0.25 Hz",
                  "T = 1/f = 1/0.25 = 4.0 s (doubled from 2.0 s)",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq1-10",
            question: "(Challenge) A loudspeaker produces a sound of frequency 256 Hz in air, where the speed of sound is 340 m/s. The same sound then passes into water, where the speed of sound is 1500 m/s.\n(a) Calculate the wavelength of the sound in air. [2]\n(b) Calculate the wavelength of the sound in water. [2]\n(c) Explain why the wavelength changes but the pitch (frequency) heard does not. [2]",
            marks: 6,
            modelAnswer: "(a) λ_air = v/f = 340 / 256 = 1.33 m\n(b) λ_water = v/f = 1500 / 256 = 5.86 m\n(c) The frequency is set by the vibrating source (the loudspeaker) and does not change when the sound enters a new medium. Because v = fλ and the speed in water is much greater while f is fixed, the wavelength increases in proportion. Pitch depends on frequency, so the pitch is unchanged.",
            markScheme: [
              "λ_air = 340/256 substitution (1 mark)",
              "λ_air = 1.33 m (accept 1.3 m) (1 mark)",
              "λ_water = 1500/256 substitution (1 mark)",
              "λ_water = 5.86 m (accept 5.9 m) (1 mark)",
              "Frequency fixed by the source / unchanged across boundary (1 mark)",
              "v = fλ with f constant so λ scales with v / pitch depends on frequency (1 mark)",
            ],
            commonError: "Assuming the frequency changes when the medium changes; in fact frequency is conserved and the wavelength changes with the speed.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "challenge",
            hints: [
              "Use λ = v/f in each medium.",
              "The frequency (256 Hz) is the same in both media.",
              "Speed in water is larger, so wavelength is larger.",
              "Pitch depends on frequency, which is unchanged.",
            ],
            solutions: [
              {
                label: "Wavelengths in two media",
                steps: [
                  "λ_air = v/f = 340 / 256 = 1.33 m",
                  "λ_water = v/f = 1500 / 256 = 5.86 m",
                  "f is fixed by the source, so larger v gives larger λ.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-waves-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Ten structured questions on refraction, refractive index, critical angle, and total internal reflection.",
        questions: [
          {
            id: "phys-waves-bq2-01",
            question: "(a) Define refractive index in terms of the angles of incidence and refraction. [1]\n(b) A ray of light passes from air into glass with an angle of incidence of 60° and an angle of refraction of 35°. Calculate the refractive index of the glass. Show your working. [3] (sin 60° = 0.866, sin 35° = 0.574)",
            marks: 4,
            modelAnswer: "(a) Refractive index n = sin i / sin r, where i is the angle of incidence (in air) and r is the angle of refraction (in the medium), both measured from the normal.\n(b) n = sin i / sin r = sin 60° / sin 35° = 0.866 / 0.574 = 1.51 (3 s.f.)",
            markScheme: [
              "n = sin i / sin r definition (1 mark)",
              "Correct substitution 0.866 / 0.574 (1 mark)",
              "Correct division (1 mark)",
              "n = 1.51 (accept 1.5) no unit (1 mark)",
            ],
            commonError: "Writing n = sin r / sin i (which would give a value less than 1 for glass).",
            guideRef: "Refraction and Refractive Index",
            difficulty: "warmup",
            solutions: [
              {
                label: "Snell's law",
                steps: [
                  "n = sin i / sin r",
                  "n = sin 60° / sin 35° = 0.866 / 0.574",
                  "n = 1.51",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq2-02",
            question: "(a) State two things that happen to a ray of light when it passes from air into a denser medium at an angle. [2]\n(b) State what happens to the frequency of the light as it crosses the boundary. [1]\n(c) Explain why a swimming pool looks shallower than it really is. [3]",
            marks: 6,
            modelAnswer: "(a) The light slows down, and it bends toward the normal (the angle of refraction is smaller than the angle of incidence).\n(b) The frequency stays the same.\n(c) Light from the bottom of the pool travels from water (denser) into air (less dense) and bends away from the normal at the surface. Your eye and brain assume light has travelled in a straight line, so they trace the rays back along straighter lines. The apparent position of the bottom is therefore higher than its true position, making the pool look shallower.",
            markScheme: [
              "Light slows down (1 mark)",
              "Bends toward the normal (1 mark)",
              "Frequency unchanged (1 mark)",
              "Light from pool bottom refracts away from normal going water → air (1 mark)",
              "Brain assumes light travels in straight lines / traces rays back (1 mark)",
              "Apparent depth is less than real depth / bottom appears raised (1 mark)",
            ],
            commonError: "Saying the light bends away from the normal when entering the denser water (it bends toward the normal entering a denser medium).",
            guideRef: "Refraction and Refractive Index",
            difficulty: "core",
            hints: [
              "Entering a denser medium: slower and bends toward the normal.",
              "Frequency is fixed by the source.",
              "For the pool: trace light from the bottom up to your eye.",
              "Your brain assumes straight-line travel.",
            ],
          },
          {
            id: "phys-waves-bq2-03",
            question: "A ray of light in air enters a glass block of refractive index 1.52 at an angle of incidence of 42°.\n(a) Calculate the angle of refraction inside the glass. [3] (sin 42° = 0.669)\n(b) Calculate the speed of light in the glass. (c = 3.0 × 10⁸ m/s) [2]",
            marks: 5,
            modelAnswer: "(a) n = sin i / sin r → sin r = sin i / n = 0.669 / 1.52 = 0.4401\nr = sin⁻¹(0.4401) = 26.1° ≈ 26°\n(b) n = c/v → v = c/n = (3.0 × 10⁸) / 1.52 = 1.97 × 10⁸ m/s",
            markScheme: [
              "sin r = sin i / n rearrangement (1 mark)",
              "sin r = 0.669 / 1.52 = 0.440 (1 mark)",
              "r = 26° (accept 26°–26.1°) (1 mark)",
              "v = c/n = 3.0 × 10⁸ / 1.52 (1 mark)",
              "v = 1.97 × 10⁸ m/s (accept 2.0 × 10⁸) with unit (1 mark)",
            ],
            commonError: "Multiplying sin i by n instead of dividing when finding sin r.",
            guideRef: "Refraction and Refractive Index",
            difficulty: "core",
            hints: [
              "Rearrange n = sin i / sin r to sin r = sin i / n.",
              "sin r = 0.669 / 1.52.",
              "Take the inverse sine to get r.",
              "For speed, use v = c/n.",
            ],
            solutions: [
              {
                label: "Refraction angle and speed",
                steps: [
                  "sin r = sin i / n = 0.669 / 1.52 = 0.440",
                  "r = sin⁻¹(0.440) = 26°",
                  "v = c/n = 3.0 × 10⁸ / 1.52 = 1.97 × 10⁸ m/s",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq2-04",
            question: "(a) Define the critical angle. [2]\n(b) State the two conditions necessary for total internal reflection to occur. [2]\n(c) The critical angle for a certain glass is 39°. Calculate the refractive index of the glass. [2] (sin 39° = 0.629)",
            marks: 6,
            modelAnswer: "(a) The critical angle is the angle of incidence, in the denser medium, for which the angle of refraction is 90° (the refracted ray travels along the boundary).\n(b) (1) The light must be travelling from a denser medium toward a less dense medium. (2) The angle of incidence must be greater than the critical angle.\n(c) n = 1/sin c = 1/sin 39° = 1/0.629 = 1.59",
            markScheme: [
              "Critical angle: angle of incidence for which refraction angle = 90° (1 mark)",
              "Measured in the denser medium (1 mark)",
              "Condition 1: travelling from denser to less dense medium (1 mark)",
              "Condition 2: i greater than critical angle (1 mark)",
              "n = 1/sin 39° = 1/0.629 (1 mark)",
              "n = 1.59 (1 mark)",
            ],
            commonError: "Stating only one condition for TIR (e.g. just 'i > c') and omitting that the light must go from denser to less dense.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "core",
            hints: [
              "The critical angle gives a refraction angle of exactly 90°.",
              "TIR needs the right direction across the boundary AND i > c.",
              "Rearrange sin c = 1/n to n = 1/sin c.",
              "n = 1/0.629.",
            ],
            solutions: [
              {
                label: "Refractive index from critical angle",
                steps: [
                  "sin c = 1/n, so n = 1/sin c",
                  "n = 1/sin 39° = 1/0.629",
                  "n = 1.59",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq2-05",
            question: "Explain how an optical fibre transmits a light signal along its length, even when the fibre is bent around corners. Refer to total internal reflection and the critical angle in your answer. [4]",
            marks: 4,
            modelAnswer: "Light is sent into one end of the thin glass fibre so that it strikes the inner wall at an angle of incidence greater than the critical angle. Because the light is in the dense glass core meeting a less dense boundary (cladding/air) at i > c, total internal reflection occurs and all the light is reflected back into the core with no loss. This repeats every time the light meets the wall, so the light zig-zags along the fibre. Even when the fibre bends gently, the angle of incidence at the wall stays above the critical angle, so the light continues to be totally internally reflected and follows the fibre around the bend.",
            markScheme: [
              "Light hits the wall at an angle greater than the critical angle (1 mark)",
              "Total internal reflection occurs (no light escapes) (1 mark)",
              "Repeated TIR makes the light travel along the fibre (1 mark)",
              "When bent, angle of incidence stays above critical angle so TIR continues (1 mark)",
            ],
            commonError: "Saying the light is reflected by mirrors lining the fibre, rather than by total internal reflection.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "core",
            hints: [
              "What angle condition triggers TIR?",
              "TIR loses no light, unlike a mirror.",
              "The light reflects repeatedly along the fibre.",
              "Explain why a gentle bend does not let the light escape.",
            ],
          },
          {
            id: "phys-waves-bq2-06",
            question: "A glass block has a refractive index of 1.50.\n(a) Calculate its critical angle. [2] (sin⁻¹ 0.667 = 41.8°)\n(b) A ray inside the glass hits the surface at an angle of incidence of 45°. State and explain what happens. [2]\n(c) A second ray hits the same surface at 38°. State and explain what happens. [2]",
            marks: 6,
            modelAnswer: "(a) sin c = 1/n = 1/1.50 = 0.667 → c = 41.8° ≈ 42°\n(b) At 45°, the angle of incidence is greater than the critical angle (45° > 42°), so total internal reflection occurs — the ray is reflected back into the glass and none escapes.\n(c) At 38°, the angle of incidence is less than the critical angle (38° < 42°), so the ray refracts and passes out of the glass, bending away from the normal.",
            markScheme: [
              "sin c = 1/1.50 = 0.667 (1 mark)",
              "c = 41.8° / 42° (1 mark)",
              "At 45°: TIR because 45° > c (1 mark)",
              "Ray reflected back into glass (1 mark)",
              "At 38°: refraction because 38° < c (1 mark)",
              "Ray exits, bending away from the normal (1 mark)",
            ],
            commonError: "Treating both rays the same; the key is to compare each angle of incidence with the critical angle.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "core",
            hints: [
              "Find the critical angle from sin c = 1/n.",
              "Compare 45° with the critical angle.",
              "Compare 38° with the critical angle.",
              "i > c gives TIR; i < c gives refraction out.",
            ],
            solutions: [
              {
                label: "Critical angle and two rays",
                steps: [
                  "sin c = 1/1.50 = 0.667 → c = 41.8°",
                  "45° > 41.8° → total internal reflection",
                  "38° < 41.8° → refraction out of the glass",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq2-07",
            question: "A semicircular glass block is used to investigate refraction. A ray is directed at the flat face along the radius so that it reaches the centre of the flat side. The refractive index of the glass is 1.49.\n(a) Explain why directing the ray along a radius means it enters the curved surface without bending. [2]\n(b) Calculate the critical angle of the glass. [2] (sin⁻¹ 0.671 = 42.2°)\n(c) The ray meets the flat face from inside at 50°. State what the student observes. [2]",
            marks: 6,
            modelAnswer: "(a) A ray travelling along a radius strikes the curved surface along the normal (the radius is perpendicular to the curved surface at that point). Since the angle of incidence is 0°, there is no bending as it enters the glass.\n(b) sin c = 1/n = 1/1.49 = 0.671 → c = sin⁻¹(0.671) = 42.2° ≈ 42°\n(c) The angle of incidence at the flat face (50°) is greater than the critical angle (42°), so total internal reflection occurs. The student observes a bright reflected ray inside the glass and no ray emerging from the flat face.",
            markScheme: [
              "A radius meets the curved surface along the normal (1 mark)",
              "Angle of incidence 0° so no refraction/bending (1 mark)",
              "sin c = 1/1.49 = 0.671 (1 mark)",
              "c = 42.2° / 42° (1 mark)",
              "50° > critical angle so total internal reflection (1 mark)",
              "No ray emerges / bright internal reflected ray observed (1 mark)",
            ],
            commonError: "Forgetting that the radius is the normal to the curved surface, and so wrongly expecting refraction at the curved face.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "challenge",
            hints: [
              "Where does a radius point relative to the curved surface?",
              "Along the normal there is no bending.",
              "Find the critical angle from sin c = 1/n.",
              "Compare 50° with the critical angle.",
            ],
            solutions: [
              {
                label: "Critical angle and observation",
                steps: [
                  "Ray along a radius hits the curved face at 0° (along the normal) → no bending",
                  "sin c = 1/1.49 = 0.671 → c = 42.2°",
                  "50° > 42.2° → total internal reflection at the flat face",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq2-08",
            question: "A ray of light passes from water (n = 1.33) directly into glass (n = 1.50).\n(a) Calculate the critical angle for light travelling from glass back into water. [3] (use n_relative = n_glass / n_water; sin⁻¹ 0.887 = 62.5°)\n(b) Explain why this critical angle is larger than the critical angle for the same glass with air outside. [2]",
            marks: 5,
            modelAnswer: "(a) For TIR at the glass-water boundary, use the relative refractive index n = n_glass / n_water = 1.50 / 1.33 = 1.128. sin c = 1/n = 1/1.128 = 0.887, so c = sin⁻¹(0.887) = 62.5° ≈ 63°.\n(b) Water is denser than air, so the difference in refractive index between glass and water is smaller than between glass and air. A smaller refractive-index ratio gives a larger value of sin c (closer to 1), and therefore a larger critical angle. (For glass-air, c ≈ 42°; for glass-water, c ≈ 63°.)",
            markScheme: [
              "n_relative = 1.50 / 1.33 = 1.128 (1 mark)",
              "sin c = 1/1.128 = 0.887 (1 mark)",
              "c = 62.5° / 63° (1 mark)",
              "Smaller refractive-index difference between glass and water than glass and air (1 mark)",
              "Smaller ratio → larger sin c → larger critical angle (1 mark)",
            ],
            commonError: "Using n = 1.50 alone (the glass-air value) instead of the relative refractive index between glass and water.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "challenge",
            hints: [
              "TIR at a glass-water boundary needs the relative refractive index.",
              "n_relative = n_glass / n_water = 1.50 / 1.33.",
              "sin c = 1/n_relative.",
              "A smaller ratio gives a larger critical angle.",
            ],
            solutions: [
              {
                label: "Relative critical angle",
                steps: [
                  "n_relative = 1.50 / 1.33 = 1.128",
                  "sin c = 1/1.128 = 0.887",
                  "c = sin⁻¹(0.887) = 62.5°",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq2-09",
            question: "A 45-45-90° glass prism (n = 1.5) is used in a pair of binoculars to reflect light.\n(a) Calculate the critical angle of the glass. [2] (sin⁻¹ 0.667 = 41.8°)\n(b) Explain why light striking the longest (sloping) face from inside at 45° is totally internally reflected. [2]\n(c) State one advantage of using such a prism rather than a plane mirror. [2]",
            marks: 6,
            modelAnswer: "(a) sin c = 1/n = 1/1.5 = 0.667 → c = 41.8° ≈ 42°\n(b) The light meets the sloping face at an angle of incidence of 45°. Since 45° is greater than the critical angle (42°), and the light is travelling from dense glass toward less dense air, total internal reflection occurs and all the light is reflected.\n(c) A prism reflects almost 100% of the light (mirrors lose some at the silvered surface and the glass front), giving a brighter image. Also there is no tarnishing of a silvered coating and no faint secondary reflections.",
            markScheme: [
              "sin c = 1/1.5 = 0.667 (1 mark)",
              "c = 41.8° / 42° (1 mark)",
              "45° > critical angle so TIR (1 mark)",
              "Light going from dense glass to less dense air (1 mark)",
              "Advantage: brighter image / nearly 100% reflection / no tarnishing / no double images (1 mark for one valid advantage, 1 mark for development) (2 marks)",
            ],
            commonError: "Saying the prism refracts the light rather than totally internally reflecting it.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "core",
            hints: [
              "Find the critical angle from sin c = 1/n.",
              "Compare 45° with the critical angle.",
              "Check the light goes from dense to less dense.",
              "Think about light losses at a mirror versus a prism.",
            ],
            solutions: [
              {
                label: "Critical angle",
                steps: [
                  "sin c = 1/1.5 = 0.667",
                  "c = sin⁻¹(0.667) = 41.8°",
                  "45° > 41.8° so TIR occurs at the sloping face",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq2-10",
            question: "(Challenge — synoptic) An optical fibre core has a refractive index of 1.48 and is surrounded by cladding of refractive index 1.46.\n(a) Calculate the critical angle for the core-cladding boundary. [3] (sin⁻¹ 0.9865 = 80.6°)\n(b) Light of frequency 2.0 × 10¹⁴ Hz travels through the core. The speed of light in the core is 2.03 × 10⁸ m/s. Calculate the wavelength of this light in the core. [2]\n(c) Suggest why the core and cladding refractive indices are kept very close together. [2]",
            marks: 7,
            modelAnswer: "(a) n_relative = n_core / n_cladding = 1.48 / 1.46 = 1.0137. sin c = 1/n_relative = 1/1.0137 = 0.9865, so c = sin⁻¹(0.9865) = 80.6° ≈ 81°.\n(b) λ = v/f = (2.03 × 10⁸) / (2.0 × 10¹⁴) = 1.015 × 10⁻⁶ m ≈ 1.0 × 10⁻⁶ m (1.0 μm, infrared).\n(c) A very small difference in refractive index gives a very large critical angle (≈ 81°), so only rays travelling nearly straight along the fibre are guided. This reduces the spread in path lengths between rays, so pulses stay sharp over long distances (less 'modal dispersion'), keeping the signal clear.",
            markScheme: [
              "n_relative = 1.48 / 1.46 = 1.0137 (1 mark)",
              "sin c = 1/1.0137 = 0.9865 (1 mark)",
              "c = 80.6° / 81° (1 mark)",
              "λ = v/f = 2.03 × 10⁸ / 2.0 × 10¹⁴ (1 mark)",
              "λ = 1.0 × 10⁻⁶ m (accept 1.015 × 10⁻⁶ m) (1 mark)",
              "Small index difference → large critical angle / only near-axial rays guided (1 mark)",
              "Keeps pulses sharp / reduces dispersion over long distances (1 mark)",
            ],
            commonError: "Using n = 1.48 alone for the critical angle instead of the relative index between core and cladding; also using c (3 × 10⁸) instead of the speed in the core for the wavelength.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "challenge",
            hints: [
              "Use the relative refractive index n_core / n_cladding.",
              "sin c = 1/n_relative.",
              "For the wavelength, use λ = v/f with the speed in the core.",
              "Think about how the critical angle controls which rays are guided.",
            ],
            solutions: [
              {
                label: "Critical angle and wavelength",
                steps: [
                  "n_relative = 1.48 / 1.46 = 1.0137",
                  "sin c = 1/1.0137 = 0.9865 → c = 80.6°",
                  "λ = v/f = 2.03 × 10⁸ / 2.0 × 10¹⁴ = 1.0 × 10⁻⁶ m",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-waves-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Ten structured questions on converging lenses, ray diagrams, magnification, and dispersion.",
        questions: [
          {
            id: "phys-waves-bq3-01",
            question: "(a) State what is meant by the principal focus of a converging lens. [1]\n(b) State what is meant by the focal length. [1]\n(c) State the three standard rays used to locate an image formed by a thin converging lens. [3]",
            marks: 5,
            modelAnswer: "(a) The principal focus is the point on the principal axis to which rays parallel to the axis converge after passing through the lens.\n(b) The focal length is the distance from the optical centre of the lens to the principal focus.\n(c) (1) A ray parallel to the principal axis refracts through the principal focus F. (2) A ray through the optical centre passes straight on undeviated. (3) A ray through the principal focus on the object side refracts to travel parallel to the principal axis.",
            markScheme: [
              "Principal focus: where parallel rays converge after the lens (1 mark)",
              "Focal length: distance from optical centre to principal focus (1 mark)",
              "Ray 1: parallel to axis → through F (1 mark)",
              "Ray 2: through optical centre → straight on (1 mark)",
              "Ray 3: through F → emerges parallel to axis (1 mark)",
            ],
            commonError: "Describing the ray through the centre as being bent; it passes straight through undeviated.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bq3-02",
            question: "A converging lens has a focal length of 10 cm.\n(a) An object is placed 25 cm from the lens. State the nature of the image (real/virtual, upright/inverted, magnified/diminished). [3]\n(b) Explain how you reached your answer by comparing the object distance with f and 2F. [2]",
            marks: 5,
            modelAnswer: "(a) The image is real, inverted, and diminished.\n(b) The focal length is 10 cm, so 2F is at 20 cm. The object distance (25 cm) is greater than 2F (20 cm). When the object is beyond 2F, a converging lens forms a real, inverted, diminished image between F and 2F on the opposite side.",
            markScheme: [
              "Real (1 mark)",
              "Inverted (1 mark)",
              "Diminished (1 mark)",
              "2F = 20 cm and object (25 cm) is beyond 2F (1 mark)",
              "Object beyond 2F → real, inverted, diminished image (1 mark)",
            ],
            commonError: "Forgetting that 2F = twice the focal length, and so misclassifying the object position.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "Work out 2F = 2 × focal length.",
              "Compare the object distance with 2F.",
              "Object beyond 2F gives a diminished real image.",
            ],
          },
          {
            id: "phys-waves-bq3-03",
            question: "An object 3.0 cm tall is placed in front of a converging lens. The image formed is 9.0 cm tall.\n(a) Calculate the magnification. [2]\n(b) The image distance from the lens is 36 cm. Calculate the object distance. [2]\n(c) State whether the image is real or virtual, given that it is inverted. [1]",
            marks: 5,
            modelAnswer: "(a) Magnification = image height / object height = 9.0 / 3.0 = 3.0 (no unit).\n(b) Magnification = image distance / object distance → object distance = image distance / magnification = 36 / 3.0 = 12 cm.\n(c) The image is real (a real image from a converging lens is inverted; a virtual one would be upright).",
            markScheme: [
              "Magnification = 9.0 / 3.0 (1 mark)",
              "Magnification = 3.0 no unit (1 mark)",
              "Object distance = 36 / 3.0 (1 mark)",
              "Object distance = 12 cm (1 mark)",
              "Image is real (1 mark)",
            ],
            commonError: "Multiplying instead of dividing when finding the object distance from magnification and image distance.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "Magnification = image height / object height.",
              "Also magnification = image distance / object distance.",
              "Rearrange to find object distance = image distance / magnification.",
              "Inverted image from a converging lens means it is real.",
            ],
            solutions: [
              {
                label: "Magnification and distances",
                steps: [
                  "m = image height / object height = 9.0 / 3.0 = 3.0",
                  "m = image distance / object distance → object distance = 36 / 3.0 = 12 cm",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq3-04",
            question: "Describe how to use a converging lens as a magnifying glass.\n(a) State where the object must be placed relative to the lens. [1]\n(b) State three properties of the image seen. [3]\n(c) Explain why this image cannot be projected onto a screen. [2]",
            marks: 6,
            modelAnswer: "(a) The object must be placed between the lens and the principal focus (inside the focal length).\n(b) The image is virtual, upright, and magnified (and on the same side of the lens as the object).\n(c) The image is virtual: the refracted rays do not actually meet — they only appear to diverge from a point behind the object. Because no light actually passes through the image position, it cannot be captured on a screen; it can only be seen by looking through the lens.",
            markScheme: [
              "Object inside the focal length / between lens and F (1 mark)",
              "Virtual (1 mark)",
              "Upright (1 mark)",
              "Magnified (1 mark)",
              "Rays do not actually meet / only appear to diverge (1 mark)",
              "No real light at image position so cannot be projected (1 mark)",
            ],
            commonError: "Saying a magnifying glass gives an inverted image; a virtual image from a converging lens is always upright.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "A magnifying glass works with the object close to the lens.",
              "Inside F gives a virtual image.",
              "Virtual images from a converging lens are upright and magnified.",
              "A screen needs real rays to actually meet.",
            ],
          },
          {
            id: "phys-waves-bq3-05",
            question: "A converging lens of focal length 12 cm is used to form an image of an object placed 18 cm from the lens. The image is found 36 cm from the lens on the other side.\n(a) Calculate the magnification. [2]\n(b) The object is 5.0 mm tall. Calculate the height of the image. [2]\n(c) State the nature of the image (real/virtual, upright/inverted). [2]",
            marks: 6,
            modelAnswer: "(a) Magnification = image distance / object distance = 36 / 18 = 2.0.\n(b) Image height = magnification × object height = 2.0 × 5.0 = 10 mm.\n(c) The object (18 cm) is between F (12 cm) and 2F (24 cm), so the image is real, inverted, and magnified.",
            markScheme: [
              "Magnification = 36 / 18 (1 mark)",
              "Magnification = 2.0 (1 mark)",
              "Image height = 2.0 × 5.0 (1 mark)",
              "Image height = 10 mm (1 mark)",
              "Real and inverted (1 mark)",
              "Object between F and 2F so magnified (1 mark)",
            ],
            commonError: "Forgetting to multiply the object height by the magnification, or giving the image height in the wrong unit.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "Magnification from distances = image distance / object distance.",
              "Image height = magnification × object height.",
              "Compare object distance with F and 2F to find the nature.",
            ],
            solutions: [
              {
                label: "Magnification and image height",
                steps: [
                  "m = 36 / 18 = 2.0",
                  "image height = m × object height = 2.0 × 5.0 mm = 10 mm",
                  "Object between F (12) and 2F (24) → real, inverted, magnified",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq3-06",
            question: "(a) Describe an experiment to measure the focal length of a converging lens approximately, using a distant object. [4]\n(b) Explain why a distant object is used. [2]",
            marks: 6,
            modelAnswer: "(a) Place the lens in a holder and point it at a distant bright object such as a window or a tree across the room (at least 10 m away). Hold a white screen on the other side of the lens and move it back and forth until a sharp, clear image of the object is formed on the screen. Measure the distance from the centre of the lens to the screen with a metre rule; this is the focal length. Repeat a few times and average for reliability.\n(b) For a distant object the rays arriving at the lens are very nearly parallel to the principal axis. A converging lens brings parallel rays to a focus at the principal focus, so the sharp image forms at a distance equal to the focal length — making the measurement simple and direct.",
            markScheme: [
              "Use lens, screen and distant object (1 mark)",
              "Move screen to obtain a sharp image (1 mark)",
              "Measure lens-to-screen distance = focal length (1 mark)",
              "Repeat and average (1 mark)",
              "Distant object gives nearly parallel rays (1 mark)",
              "Parallel rays focus at the principal focus = focal length (1 mark)",
            ],
            commonError: "Using a nearby object, which gives an image distance larger than the focal length and so overestimates f.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "You need a lens, a screen, and a far-away object.",
              "Adjust the screen until the image is sharp.",
              "The lens-to-screen distance is the focal length.",
              "Distant object → parallel rays → focus at F.",
            ],
          },
          {
            id: "phys-waves-bq3-07",
            question: "White light is shone through a triangular glass prism and a spectrum appears on a screen.\n(a) Name the effect that separates the colours. [1]\n(b) Explain, in terms of speed and refractive index, why the colours separate. [3]\n(c) State the colour deviated most and the colour deviated least. [2]",
            marks: 6,
            modelAnswer: "(a) Dispersion.\n(b) White light is a mixture of colours (wavelengths). In glass, different wavelengths travel at slightly different speeds and so have slightly different refractive indices. Violet light has the highest refractive index (slowest in glass) and is refracted most; red light has the lowest refractive index (fastest in glass) and is refracted least. Because n = sin i / sin r, the different refractive indices mean each colour bends by a different amount, so the colours spread out.\n(c) Violet is deviated the most; red is deviated the least.",
            markScheme: [
              "Dispersion (1 mark)",
              "Different wavelengths have different speeds / refractive indices in glass (1 mark)",
              "Violet: highest n / slowest; red: lowest n / fastest (1 mark)",
              "Different n → different angle of refraction → colours spread (1 mark)",
              "Violet deviated most (1 mark)",
              "Red deviated least (1 mark)",
            ],
            commonError: "Saying the prism 'adds' colours to white light; in fact white light already contains all the colours and the prism merely separates them.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "The separation of colours has a specific name.",
              "Each colour has a different wavelength and speed in glass.",
              "Different speeds mean different refractive indices.",
              "Different n means different bending.",
            ],
          },
          {
            id: "phys-waves-bq3-08",
            question: "A slide projector uses a converging lens to throw a large image of a slide onto a screen.\n(a) State where the slide (object) must be placed relative to the lens to give a magnified real image. [1]\n(b) The slide is 3.6 cm wide and the image on the screen is 1.8 m wide. Calculate the magnification. [3]\n(c) Explain why the slide must be put into the projector upside down. [2]",
            marks: 6,
            modelAnswer: "(a) The slide must be placed between F and 2F (just outside the focal length).\n(b) Convert to the same units: image width = 1.8 m = 180 cm. Magnification = image width / object width = 180 / 3.6 = 50.\n(c) A converging lens forming a real image always inverts it (top-to-bottom and left-to-right). If the slide were the right way up, the projected image would appear upside down on the screen. Putting the slide in upside down means the inverted image appears the right way up.",
            markScheme: [
              "Slide placed between F and 2F (1 mark)",
              "Converts units to the same (180 cm and 3.6 cm) (1 mark)",
              "Magnification = 180 / 3.6 (1 mark)",
              "Magnification = 50 (1 mark)",
              "Real image from converging lens is inverted (1 mark)",
              "Slide inverted so projected image is upright (1 mark)",
            ],
            commonError: "Failing to convert metres to centimetres (or vice versa) before dividing, giving a magnification 100 times too small.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "challenge",
            hints: [
              "For a magnified real image, the object is between F and 2F.",
              "Convert both widths to the same unit before dividing.",
              "1.8 m = 180 cm.",
              "A real image from a converging lens is inverted.",
            ],
            solutions: [
              {
                label: "Projector magnification",
                steps: [
                  "image width = 1.8 m = 180 cm",
                  "magnification = 180 / 3.6 = 50",
                  "Real image is inverted, so the slide is loaded upside down",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq3-09",
            question: "An object is placed at four different positions in front of a converging lens of focal length 8.0 cm: at 4 cm, at 8 cm, at 12 cm, and at 20 cm.\n(a) For each position, state the nature of the image (real/virtual; upright/inverted; magnified/same size/diminished). [4]\n(b) State which position would be used for a camera photographing a near object, and justify your choice. [2]",
            marks: 6,
            modelAnswer: "(a) f = 8 cm, so 2F = 16 cm.\n- 4 cm (inside F): virtual, upright, magnified.\n- 8 cm (at F): no image forms (rays emerge parallel; image at infinity).\n- 12 cm (between F and 2F): real, inverted, magnified.\n- 20 cm (beyond 2F): real, inverted, diminished.\n(b) The 20 cm position (object beyond 2F) gives a real, inverted, diminished image — exactly what a camera needs to fit the scene onto a small sensor/film. (A camera produces a small real image of a relatively distant object.)",
            markScheme: [
              "4 cm: virtual, upright, magnified (1 mark)",
              "8 cm: no image / image at infinity / rays parallel (1 mark)",
              "12 cm: real, inverted, magnified (1 mark)",
              "20 cm: real, inverted, diminished (1 mark)",
              "Camera uses object beyond 2F (the 20 cm position) (1 mark)",
              "Justification: gives a small real image to fit on sensor/film (1 mark)",
            ],
            commonError: "Forgetting the special case at F where no clear image forms because the refracted rays emerge parallel.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "challenge",
            hints: [
              "Work out 2F = 16 cm first.",
              "Classify each distance as inside F, at F, between F and 2F, or beyond 2F.",
              "At F, the rays come out parallel.",
              "A camera needs a small real image.",
            ],
          },
          {
            id: "phys-waves-bq3-10",
            question: "(Challenge — synoptic) A camera lens of focal length 5.0 cm forms a real image of a flower on its sensor.\n(a) The flower is 4.0 cm tall and its image on the sensor is 0.50 cm tall. Calculate the magnification. [2]\n(b) The image distance (lens to sensor) is 5.5 cm. Use magnification = image distance / object distance to calculate how far the flower is from the lens. [3]\n(c) Explain, using your answer to (b), why the image is real and inverted. [2]",
            marks: 7,
            modelAnswer: "(a) Magnification = image height / object height = 0.50 / 4.0 = 0.125.\n(b) magnification = image distance / object distance → object distance = image distance / magnification = 5.5 / 0.125 = 44 cm.\n(c) The object distance (44 cm) is well beyond 2F (= 10 cm), so the object is outside 2F of the lens. A converging lens with the object beyond 2F always forms a real, inverted image (here diminished), which is why the image on the sensor is real and inverted.",
            markScheme: [
              "Magnification = 0.50 / 4.0 (1 mark)",
              "Magnification = 0.125 (1 mark)",
              "object distance = image distance / magnification (1 mark)",
              "object distance = 5.5 / 0.125 (1 mark)",
              "object distance = 44 cm (1 mark)",
              "44 cm is beyond 2F (=10 cm) (1 mark)",
              "Object beyond 2F → real, inverted image (1 mark)",
            ],
            commonError: "Multiplying instead of dividing in part (b); a magnification less than 1 (diminished image) means the object distance is larger than the image distance.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "challenge",
            hints: [
              "Magnification = image height / object height.",
              "Rearrange m = image distance / object distance to find object distance.",
              "object distance = image distance / magnification = 5.5 / 0.125.",
              "Compare the object distance with 2F to explain real and inverted.",
            ],
            solutions: [
              {
                label: "Camera geometry",
                steps: [
                  "m = image height / object height = 0.50 / 4.0 = 0.125",
                  "object distance = image distance / m = 5.5 / 0.125 = 44 cm",
                  "44 cm > 2F (10 cm) → real, inverted, diminished image",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-waves-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Ten mixed structured questions spanning the whole Waves & Light syllabus, including synoptic calculations.",
        questions: [
          {
            id: "phys-waves-bq4-01",
            question: "(a) State the wave equation and define each symbol with its unit. [3]\n(b) A microwave oven produces waves of frequency 2.45 × 10⁹ Hz that travel at 3.0 × 10⁸ m/s. Calculate the wavelength. [2]",
            marks: 5,
            modelAnswer: "(a) v = fλ, where v = wave speed (m/s), f = frequency (Hz), λ = wavelength (m).\n(b) λ = v/f = (3.0 × 10⁸) / (2.45 × 10⁹) = 0.122 m ≈ 0.12 m (12 cm).",
            markScheme: [
              "v = fλ stated (1 mark)",
              "v = speed (m/s) (1 mark)",
              "f = frequency (Hz) and λ = wavelength (m) (1 mark)",
              "λ = 3.0 × 10⁸ / 2.45 × 10⁹ substitution (1 mark)",
              "λ = 0.12 m (accept 0.122 m) with unit (1 mark)",
            ],
            commonError: "Mishandling the powers of ten, e.g. getting 1.2 m instead of 0.12 m.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "warmup",
            solutions: [
              {
                label: "Microwave wavelength",
                steps: [
                  "λ = v/f = 3.0 × 10⁸ / 2.45 × 10⁹",
                  "= 0.122 m ≈ 0.12 m",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq4-02",
            question: "(a) Describe how the particles move in a longitudinal wave compared with a transverse wave. [2]\n(b) Sketch (describe in words) how compressions and rarefactions appear in a sound wave travelling through air. [2]",
            marks: 4,
            modelAnswer: "(a) In a longitudinal wave the particles oscillate back and forth parallel to the direction the wave travels. In a transverse wave the particles oscillate at right angles (perpendicular) to the direction the wave travels.\n(b) A sound wave consists of regions where the air particles are pushed close together (compressions, high pressure) alternating with regions where they are spread apart (rarefactions, low pressure). These regions travel outward from the source at the speed of sound, one wavelength apart from one compression to the next.",
            markScheme: [
              "Longitudinal: particles oscillate parallel to travel (1 mark)",
              "Transverse: particles oscillate perpendicular to travel (1 mark)",
              "Compressions = particles close together / high pressure (1 mark)",
              "Rarefactions = particles spread apart / low pressure (1 mark)",
            ],
            commonError: "Describing sound as transverse, or drawing crests and troughs for a longitudinal sound wave.",
            guideRef: "Describing Waves",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bq4-03",
            question: "A ray of light strikes a plane mirror. The angle between the incident ray and the reflected ray is 70°.\n(a) Calculate the angle of incidence. [2]\n(b) The mirror is now rotated by 8° while the incident ray is kept fixed. Calculate the new angle between the incident and reflected rays. [3]",
            marks: 5,
            modelAnswer: "(a) The angle between incident and reflected rays = 2 × angle of incidence. So angle of incidence = 70° / 2 = 35°.\n(b) When the mirror rotates by 8°, the normal also rotates by 8°, so the angle of incidence changes by 8° to 35° + 8° = 43° (or 35° − 8° = 27°, depending on direction). The angle between the rays = 2 × new angle of incidence = 2 × 43° = 86° (or 2 × 27° = 54°). Accept either, provided the working is consistent. (A neat general result: rotating the mirror by 8° rotates the reflected ray by 16°.)",
            markScheme: [
              "Angle between rays = 2 × angle of incidence (1 mark)",
              "Angle of incidence = 35° (1 mark)",
              "Normal rotates with the mirror by 8° (1 mark)",
              "New angle of incidence = 43° (or 27°) (1 mark)",
              "New angle between rays = 86° (or 54°), consistent with chosen direction (1 mark)",
            ],
            commonError: "Forgetting that the angle between the rays is twice the angle of incidence, or that rotating the mirror rotates the normal by the same amount.",
            guideRef: "Reflection of Light",
            difficulty: "challenge",
            hints: [
              "The angle between incident and reflected rays is twice the angle of incidence.",
              "Halve 70° to find the original angle of incidence.",
              "Rotating the mirror rotates the normal by the same angle.",
              "Recompute 2 × (new angle of incidence).",
            ],
            solutions: [
              {
                label: "Mirror rotation",
                steps: [
                  "angle between rays = 2i → i = 70/2 = 35°",
                  "mirror (and normal) rotate 8° → new i = 35° + 8° = 43°",
                  "new angle between rays = 2 × 43° = 86° (reflected ray turns 16°)",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq4-04",
            question: "A ray of light in air enters a transparent block at an angle of incidence of 50°. The angle of refraction is 30°.\n(a) Calculate the refractive index of the block. [2] (sin 50° = 0.766, sin 30° = 0.500)\n(b) Calculate the speed of light in the block. (c = 3.0 × 10⁸ m/s) [2]\n(c) Calculate the critical angle for the block. [2] (sin⁻¹ 0.653 = 40.8°)",
            marks: 6,
            modelAnswer: "(a) n = sin i / sin r = sin 50° / sin 30° = 0.766 / 0.500 = 1.53.\n(b) v = c/n = (3.0 × 10⁸) / 1.53 = 1.96 × 10⁸ m/s.\n(c) sin c = 1/n = 1/1.53 = 0.653 → c = sin⁻¹(0.653) = 40.8° ≈ 41°.",
            markScheme: [
              "n = 0.766 / 0.500 (1 mark)",
              "n = 1.53 (1 mark)",
              "v = c/n = 3.0 × 10⁸ / 1.53 (1 mark)",
              "v = 1.96 × 10⁸ m/s (accept 2.0 × 10⁸) (1 mark)",
              "sin c = 1/1.53 = 0.653 (1 mark)",
              "c = 40.8° / 41° (1 mark)",
            ],
            commonError: "Inverting Snell's law, or using v = c × n instead of v = c/n.",
            guideRef: "Refraction and Refractive Index",
            difficulty: "core",
            hints: [
              "Find n with n = sin i / sin r.",
              "Find the speed with v = c/n.",
              "Find the critical angle with sin c = 1/n.",
            ],
            solutions: [
              {
                label: "Three-part calculation",
                steps: [
                  "n = sin 50° / sin 30° = 0.766 / 0.500 = 1.53",
                  "v = c/n = 3.0 × 10⁸ / 1.53 = 1.96 × 10⁸ m/s",
                  "sin c = 1/1.53 = 0.653 → c = 40.8°",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq4-05",
            question: "(a) State two conditions required for total internal reflection. [2]\n(b) Describe how a doctor uses an endoscope (containing optical fibres) to see inside a patient. [3]",
            marks: 5,
            modelAnswer: "(a) (1) The light must travel from a denser medium toward a less dense medium. (2) The angle of incidence must be greater than the critical angle.\n(b) An endoscope contains bundles of thin optical fibres. One bundle carries light down into the body to illuminate the inside (for example the stomach). Light reflected from the tissues travels back up a second bundle of fibres by repeated total internal reflection, so an image of the inside is carried out to an eyepiece or camera. The doctor can then view the inside of the body without surgery.",
            markScheme: [
              "Light travels from denser to less dense medium (1 mark)",
              "Angle of incidence greater than critical angle (1 mark)",
              "Fibres carry light in to illuminate the inside (1 mark)",
              "Reflected light carried back by total internal reflection (1 mark)",
              "Image viewed at eyepiece/camera / sees inside without surgery (1 mark)",
            ],
            commonError: "Giving only one TIR condition, or saying the fibres use mirrors rather than total internal reflection.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "core",
            hints: [
              "TIR needs the right direction and i > c.",
              "An endoscope uses bundles of optical fibres.",
              "One set of fibres lights the inside; another carries the image back.",
              "The light travels by repeated TIR.",
            ],
          },
          {
            id: "phys-waves-bq4-06",
            question: "A converging lens of focal length 15 cm forms a real image of an object placed 25 cm away. The image is 37.5 cm from the lens.\n(a) Calculate the magnification. [2]\n(b) The object is 8.0 cm tall. Calculate the height of the image. [2]\n(c) State two differences between this image and the image formed when the same object is placed 10 cm from the lens. [2]",
            marks: 6,
            modelAnswer: "(a) Magnification = image distance / object distance = 37.5 / 25 = 1.5.\n(b) Image height = magnification × object height = 1.5 × 8.0 = 12 cm.\n(c) At 25 cm (between F = 15 cm and 2F = 30 cm) the image is real and inverted. At 10 cm the object is inside F (15 cm), so the image becomes virtual and upright (instead of real and inverted), and it appears on the same side of the lens as the object rather than the opposite side.",
            markScheme: [
              "Magnification = 37.5 / 25 (1 mark)",
              "Magnification = 1.5 (1 mark)",
              "Image height = 1.5 × 8.0 (1 mark)",
              "Image height = 12 cm (1 mark)",
              "First image real/inverted; at 10 cm becomes virtual/upright (1 mark)",
              "Image moves to same side as object (1 mark)",
            ],
            commonError: "Not realising that moving the object from outside F to inside F switches the image from real/inverted to virtual/upright.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "Magnification = image distance / object distance.",
              "Image height = magnification × object height.",
              "Compare the two object positions with F (15 cm).",
              "Inside F gives a virtual, upright image.",
            ],
            solutions: [
              {
                label: "Magnification and image height",
                steps: [
                  "m = 37.5 / 25 = 1.5",
                  "image height = 1.5 × 8.0 = 12 cm",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq4-07",
            question: "Sound travels at 1480 m/s in seawater. A ship sends a sonar pulse straight down and receives the echo from the seabed 0.40 s later.\n(a) Calculate the depth of the seabed below the ship. [3]\n(b) The sonar frequency is 50 kHz. Calculate the wavelength of the sound in seawater. [2]",
            marks: 5,
            modelAnswer: "(a) The pulse travels down and back, so total distance = speed × time = 1480 × 0.40 = 592 m. Depth = 592 / 2 = 296 m.\n(b) Convert: f = 50 kHz = 50 000 Hz = 5.0 × 10⁴ Hz. λ = v/f = 1480 / 50 000 = 0.0296 m ≈ 3.0 × 10⁻² m (about 3 cm).",
            markScheme: [
              "Total distance = 1480 × 0.40 = 592 m (1 mark)",
              "Recognises echo travels twice the depth / divides by 2 (1 mark)",
              "Depth = 296 m (1 mark)",
              "Converts 50 kHz to 50 000 Hz and uses λ = v/f (1 mark)",
              "λ = 0.0296 m / 3.0 × 10⁻² m (1 mark)",
            ],
            commonError: "Forgetting to halve the total distance to get the depth, or not converting kHz to Hz.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "core",
            hints: [
              "The pulse travels to the seabed AND back.",
              "Depth = (speed × time) / 2.",
              "Convert 50 kHz to 50 000 Hz.",
              "Use λ = v/f.",
            ],
            solutions: [
              {
                label: "Sonar depth and wavelength",
                steps: [
                  "total distance = 1480 × 0.40 = 592 m",
                  "depth = 592 / 2 = 296 m",
                  "f = 50 000 Hz; λ = v/f = 1480 / 50 000 = 0.0296 m",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq4-08",
            question: "(a) Explain why a glass prism can be used to disperse white light but a single-colour (monochromatic) laser beam passing through the same prism is not dispersed. [3]\n(b) State the order of the visible spectrum from the colour refracted least to the colour refracted most. [1]",
            marks: 4,
            modelAnswer: "(a) White light contains many wavelengths (all the colours). Each wavelength has a slightly different refractive index in the glass, so each is refracted by a different amount, spreading the colours out into a spectrum (dispersion). A monochromatic laser beam is a single wavelength, so all of it has the same refractive index and is refracted by exactly the same amount — there is nothing to separate, so no dispersion occurs (the beam simply bends as one).\n(b) Red, orange, yellow, green, blue, indigo, violet (red least, violet most).",
            markScheme: [
              "White light contains many wavelengths/colours (1 mark)",
              "Each wavelength has a different n and is refracted differently → dispersion (1 mark)",
              "Monochromatic = single wavelength so no spread / refracted by one amount (1 mark)",
              "ROYGBIV order red (least) to violet (most) (1 mark)",
            ],
            commonError: "Thinking a laser is not refracted at all; it is refracted (bent), but it is not dispersed because there is only one wavelength.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "How many wavelengths are in white light versus a laser?",
              "Dispersion needs different colours to bend by different amounts.",
              "One wavelength bends by a single amount.",
              "Recall the spectral order.",
            ],
          },
          {
            id: "phys-waves-bq4-09",
            question: "(Challenge — synoptic) Light of frequency 5.0 × 10¹⁴ Hz travels through air (n = 1.00) and then enters a glass block of refractive index 1.50. (c = 3.0 × 10⁸ m/s)\n(a) Calculate the wavelength of the light in air. [2]\n(b) Calculate the speed of the light in the glass. [2]\n(c) Calculate the wavelength of the light in the glass, and comment on how it compares with the wavelength in air. [3]",
            marks: 7,
            modelAnswer: "(a) In air the speed is essentially c. λ_air = c/f = (3.0 × 10⁸) / (5.0 × 10¹⁴) = 6.0 × 10⁻⁷ m (600 nm).\n(b) v_glass = c/n = (3.0 × 10⁸) / 1.50 = 2.0 × 10⁸ m/s.\n(c) Frequency is unchanged on entering the glass (5.0 × 10¹⁴ Hz). λ_glass = v_glass / f = (2.0 × 10⁸) / (5.0 × 10¹⁴) = 4.0 × 10⁻⁷ m (400 nm). This is shorter than the wavelength in air (600 nm) by the factor n = 1.50 (600/400 = 1.5), because the light slows down while the frequency stays the same.",
            markScheme: [
              "λ_air = c/f = 3.0 × 10⁸ / 5.0 × 10¹⁴ (1 mark)",
              "λ_air = 6.0 × 10⁻⁷ m (1 mark)",
              "v_glass = c/n = 3.0 × 10⁸ / 1.50 (1 mark)",
              "v_glass = 2.0 × 10⁸ m/s (1 mark)",
              "Frequency unchanged; λ_glass = v_glass/f (1 mark)",
              "λ_glass = 4.0 × 10⁻⁷ m (1 mark)",
              "Shorter than in air by factor n (= 1.5) (1 mark)",
            ],
            commonError: "Using c instead of the slower glass speed for the wavelength in glass, or changing the frequency at the boundary.",
            guideRef: "Refraction and Refractive Index",
            difficulty: "challenge",
            hints: [
              "In air, use λ = c/f.",
              "In glass, first find the speed v = c/n.",
              "The frequency does not change on crossing the boundary.",
              "Then λ_glass = v_glass / f.",
            ],
            solutions: [
              {
                label: "Wavelength in two media",
                steps: [
                  "λ_air = c/f = 3.0 × 10⁸ / 5.0 × 10¹⁴ = 6.0 × 10⁻⁷ m",
                  "v_glass = c/n = 3.0 × 10⁸ / 1.50 = 2.0 × 10⁸ m/s",
                  "λ_glass = v_glass/f = 2.0 × 10⁸ / 5.0 × 10¹⁴ = 4.0 × 10⁻⁷ m (shorter by factor 1.5)",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq4-10",
            question: "(Challenge — synoptic) A swimming pool underwater lamp (water n = 1.33) shines light up toward the flat surface.\n(a) Calculate the critical angle for the water-air boundary. [3] (sin⁻¹ 0.752 = 48.8°)\n(b) Light from the lamp hits the surface at an angle of incidence of 40°. Calculate the angle at which it leaves into the air. [3] (sin 40° = 0.643)\n(c) Explain what an observer above the pool would see if the lamp were aimed so the light hit the surface at 60°. [2]",
            marks: 8,
            modelAnswer: "(a) sin c = 1/n = 1/1.33 = 0.752 → c = sin⁻¹(0.752) = 48.8° ≈ 49°.\n(b) Going from water to air: n_water × sin(40°) = n_air × sin(θ_air), i.e. 1.33 × 0.643 = 1.00 × sin θ. sin θ = 0.855, so θ = sin⁻¹(0.855) = 58.8° ≈ 59°. The ray bends away from the normal as it leaves the denser water.\n(c) At 60°, the angle of incidence exceeds the critical angle (48.8°), so total internal reflection occurs. No light escapes from that beam into the air, so the observer above sees nothing from it — the surface acts like a mirror for that ray, reflecting it back into the pool.",
            markScheme: [
              "sin c = 1/1.33 = 0.752 (1 mark)",
              "c = 48.8° / 49° (1 mark for method, 1 mark for value) (2 marks)",
              "Uses n_water sin i = n_air sin θ / sin θ = 1.33 × 0.643 (1 mark)",
              "sin θ = 0.855 (1 mark)",
              "θ = 58.8° / 59° (1 mark)",
              "60° > critical angle → total internal reflection (1 mark)",
              "No light escapes; observer sees nothing from that beam (1 mark)",
            ],
            commonError: "In (b), forgetting that light from water to air bends away from the normal (so the exit angle is larger). In (c), not comparing 60° with the critical angle.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "challenge",
            hints: [
              "For (a), use sin c = 1/n.",
              "For (b), apply n_water sin i = n_air sin θ with n_air = 1.",
              "sin θ = 1.33 × sin 40°.",
              "For (c), compare 60° with the critical angle.",
            ],
            solutions: [
              {
                label: "Critical angle and refraction out of water",
                steps: [
                  "sin c = 1/1.33 = 0.752 → c = 48.8°",
                  "n_water sin 40° = n_air sin θ → sin θ = 1.33 × 0.643 = 0.855 → θ = 58.8°",
                  "At 60° > 48.8° → total internal reflection; no light escapes",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
