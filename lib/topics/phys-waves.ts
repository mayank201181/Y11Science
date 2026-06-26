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
        description: "Describing waves, the wave equation, period and frequency.",
        questions: [
          {
            id: "phys-waves-bm1-01",
            question: "Which statement about all waves is correct?",
            options: [
              "They transfer matter from one place to another",
              "They transfer energy without transferring matter",
              "They can only travel through a solid",
              "They always travel at the speed of light",
            ],
            answerIndex: 1,
            explanation: "A wave is a disturbance that transfers energy without transferring matter — the medium oscillates in place but does not travel with the wave. Only the energy moves through the medium.",
            guideRef: "Describing Waves",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm1-02",
            question: "In a longitudinal wave, the particles of the medium oscillate:",
            options: [
              "perpendicular to the direction of energy transfer",
              "in circles around their rest position",
              "parallel to the direction of energy transfer",
              "only when the wave is a sound wave in a solid",
            ],
            answerIndex: 2,
            explanation: "In a longitudinal wave the oscillation is parallel to the direction the wave travels, producing compressions and rarefactions. Sound in air is the standard example.",
            guideRef: "Describing Waves",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm1-03",
            question: "What do wavefronts represent on a diagram of a water wave?",
            options: [
              "Lines joining points moving in opposite directions",
              "Lines joining all points that are in phase, e.g. all the crests",
              "The path a single water molecule follows",
              "The boundary between two different media",
            ],
            answerIndex: 1,
            explanation: "Wavefronts are imaginary lines joining all points at the same stage (phase) of oscillation — for example a line drawn along a crest. The spacing between successive wavefronts equals one wavelength.",
            guideRef: "Describing Waves",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm1-04",
            question: "A wave has a period of 0.02 s. What is its frequency?",
            options: ["0.02 Hz", "2 Hz", "50 Hz", "500 Hz"],
            answerIndex: 2,
            explanation: "f = 1/T = 1/0.02 = 50 Hz. The period and frequency are reciprocals of one another.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm1-05",
            question: "A wave travels at 2.0 m/s and has a wavelength of 0.5 m. What is its frequency?",
            options: ["1.0 Hz", "2.5 Hz", "4.0 Hz", "0.25 Hz"],
            answerIndex: 2,
            explanation: "From v = fλ, f = v/λ = 2.0 / 0.5 = 4.0 Hz. Rearrange the wave equation to make frequency the subject before substituting.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "core",
            hints: [
              "Start from the wave equation v = fλ.",
              "Rearrange to make f the subject: f = v/λ.",
              "Substitute v = 2.0 m/s and λ = 0.5 m.",
            ],
          },
          {
            id: "phys-waves-bm1-06",
            question: "A radio station broadcasts at a frequency of 100 MHz. Radio waves travel at 3.0 × 10⁸ m/s. What is the wavelength?",
            options: ["0.30 m", "3.0 m", "30 m", "3.0 × 10⁶ m"],
            answerIndex: 1,
            explanation: "λ = v/f = (3.0 × 10⁸) / (100 × 10⁶) = (3.0 × 10⁸) / (1.0 × 10⁸) = 3.0 m. Converting 100 MHz to 1.0 × 10⁸ Hz first avoids errors.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "core",
            hints: [
              "Convert 100 MHz to hertz: 1 MHz = 1 × 10⁶ Hz.",
              "Rearrange v = fλ to λ = v/f.",
              "Divide 3.0 × 10⁸ by 1.0 × 10⁸.",
            ],
          },
          {
            id: "phys-waves-bm1-07",
            question: "The amplitude of a wave is best described as:",
            options: [
              "the distance between two adjacent crests",
              "the number of waves passing a point each second",
              "the maximum displacement of a particle from its rest position",
              "the time taken for one complete oscillation",
            ],
            answerIndex: 2,
            explanation: "Amplitude is the maximum displacement of a particle from its equilibrium (rest) position. The distance between adjacent crests is the wavelength; the number of waves per second is the frequency; the time for one oscillation is the period.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "core",
            hints: [
              "Amplitude is a measure of how far the medium moves, not how often.",
              "It is measured from the rest line to the peak.",
              "The energy of a wave depends on its amplitude.",
            ],
          },
          {
            id: "phys-waves-bm1-08",
            question: "In 5 seconds, 20 complete waves pass a fixed point. Adjacent crests are 0.30 m apart. What is the wave speed?",
            options: ["0.075 m/s", "1.2 m/s", "1.5 m/s", "12 m/s"],
            answerIndex: 1,
            explanation: "f = 20/5 = 4 Hz. Then v = fλ = 4 × 0.30 = 1.2 m/s. This is a two-step problem: first find frequency, then apply the wave equation.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "core",
            hints: [
              "First find the frequency: number of waves divided by time.",
              "f = 20 / 5 = 4 Hz.",
              "Then use v = fλ with λ = 0.30 m.",
            ],
          },
          {
            id: "phys-waves-bm1-09",
            question: "A sound wave and a light wave both travel through air. The sound wave has a much lower speed and a much lower frequency than the light wave. Which statement is definitely TRUE?",
            options: [
              "Sound and light have the same wavelength in air",
              "Sound and light have the same speed in air",
              "For each wave separately, v = fλ holds",
              "Light is a longitudinal wave like sound",
            ],
            answerIndex: 2,
            explanation: "The wave equation v = fλ applies to every type of wave individually. Sound and light have very different speeds, frequencies and wavelengths in air, and light is transverse (not longitudinal), so the only universally true statement is that v = fλ holds for each.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "challenge",
            hints: [
              "v = fλ is a universal relationship — does it apply to one type of wave only, or all?",
              "Compare the speeds of sound (~340 m/s) and light (3 × 10⁸ m/s) in air.",
              "Recall whether light is transverse or longitudinal.",
              "Eliminate the options that are physically false to find the one that must be true.",
            ],
            strategy: "eliminate the impossible options first",
          },
          {
            id: "phys-waves-bm1-10",
            question: "A water wave of frequency 5 Hz moves from deep to shallow water, where it slows from 2.0 m/s to 1.2 m/s. The frequency does not change. What is the new wavelength in the shallow water?",
            options: ["0.24 m", "0.40 m", "0.60 m", "1.0 m"],
            answerIndex: 0,
            explanation: "Frequency is fixed by the source (5 Hz). In shallow water λ = v/f = 1.2 / 5 = 0.24 m. (In deep water it was 2.0/5 = 0.40 m, so the wavelength decreases as the wave slows — exactly what happens in refraction.)",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "challenge",
            hints: [
              "Which quantity stays constant when a wave changes medium — frequency or wavelength?",
              "Frequency is set by the source, so it stays at 5 Hz.",
              "Use λ = v/f with the new (shallow) speed of 1.2 m/s.",
              "Check: a slower wave at the same frequency must have a shorter wavelength.",
            ],
            strategy: "identify the constant quantity",
          },
        ],
      },
      {
        id: "phys-waves-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Reflection, the plane mirror, and the start of refraction.",
        questions: [
          {
            id: "phys-waves-bm2-01",
            question: "In optics, the angle of incidence is always measured between the incident ray and:",
            options: ["the reflecting surface", "the normal", "the horizontal", "the reflected ray"],
            answerIndex: 1,
            explanation: "All angles in reflection and refraction are measured from the normal — the line drawn perpendicular to the surface at the point where the ray meets it.",
            guideRef: "Reflection of Light",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm2-02",
            question: "The image formed in a plane mirror is:",
            options: [
              "real, inverted and the same size",
              "virtual, upright and the same size",
              "real, upright and magnified",
              "virtual, inverted and diminished",
            ],
            answerIndex: 1,
            explanation: "A plane mirror produces a virtual, upright image that is the same size as the object, laterally inverted, and as far behind the mirror as the object is in front.",
            guideRef: "Reflection of Light",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm2-03",
            question: "An object stands 12 cm in front of a plane mirror. How far is the image from the object?",
            options: ["6 cm", "12 cm", "24 cm", "0 cm"],
            answerIndex: 2,
            explanation: "The image is as far behind the mirror as the object is in front, i.e. 12 cm behind. The distance from object to image is therefore 12 + 12 = 24 cm.",
            guideRef: "Reflection of Light",
            difficulty: "core",
            hints: [
              "The image forms the same distance behind the mirror as the object is in front.",
              "So the image is 12 cm behind the mirror.",
              "Add the object distance and the image distance to find object-to-image separation.",
            ],
          },
          {
            id: "phys-waves-bm2-04",
            question: "A ray of light strikes a plane mirror making an angle of 25° with the mirror surface. What is the angle of reflection?",
            options: ["25°", "50°", "65°", "75°"],
            answerIndex: 2,
            explanation: "The angle is measured from the normal: angle of incidence = 90° − 25° = 65°. By the law of reflection the angle of reflection is also 65°.",
            guideRef: "Reflection of Light",
            difficulty: "core",
            hints: [
              "Angles are measured from the normal, not from the surface.",
              "Normal and surface are 90° apart, so subtract from 90°.",
              "Angle of incidence = 90° − 25° = 65°, and reflection equals incidence.",
            ],
          },
          {
            id: "phys-waves-bm2-05",
            question: "Why is a virtual image called 'virtual'?",
            options: [
              "Because it is upside down",
              "Because light rays only appear to come from it; no light actually passes through it",
              "Because it can be projected onto a screen",
              "Because it is always smaller than the object",
            ],
            answerIndex: 1,
            explanation: "A virtual image is formed where reflected (or refracted) rays only appear to diverge from. No real light reaches that point, so it cannot be captured on a screen.",
            guideRef: "Reflection of Light",
            difficulty: "core",
            hints: [
              "Think about whether light actually reaches the image position.",
              "A real image can be caught on a screen; a virtual one cannot.",
              "The rays only appear to come from behind a plane mirror.",
            ],
          },
          {
            id: "phys-waves-bm2-06",
            question: "Light passes from air into glass along the normal (angle of incidence = 0°). What happens?",
            options: [
              "It bends toward the normal",
              "It bends away from the normal",
              "It slows down but does not change direction",
              "It is totally internally reflected",
            ],
            answerIndex: 2,
            explanation: "A ray travelling along the normal still slows down on entering the denser glass, but because it meets the boundary head-on there is no change of direction. Refraction (bending) only occurs when the ray meets the boundary at an angle.",
            guideRef: "Refraction and Refractive Index",
            difficulty: "core",
            hints: [
              "Refraction always involves a change of speed at the boundary.",
              "Does a change of direction require the ray to hit at an angle?",
              "Along the normal, i = 0°, so there is nothing to bend.",
            ],
          },
          {
            id: "phys-waves-bm2-07",
            question: "Light enters a glass block (n = 1.5) from air at an angle of incidence of 30°. What is the angle of refraction?",
            options: ["19.5°", "30°", "45°", "48.6°"],
            answerIndex: 0,
            explanation: "n = sin i / sin r, so sin r = sin i / n = sin 30° / 1.5 = 0.5 / 1.5 = 0.333. Then r = arcsin(0.333) = 19.5°. The ray bends toward the normal because glass is denser than air.",
            guideRef: "Refraction and Refractive Index",
            difficulty: "core",
            hints: [
              "Rearrange n = sin i / sin r to make sin r the subject.",
              "sin r = sin i / n = sin 30° / 1.5.",
              "sin 30° = 0.5, so sin r = 0.333; take the inverse sine.",
            ],
          },
          {
            id: "phys-waves-bm2-08",
            question: "A ray reflects off a plane mirror. The mirror is then rotated by 8° while the incident ray is kept fixed. By how many degrees does the reflected ray rotate?",
            options: ["4°", "8°", "16°", "0°"],
            answerIndex: 2,
            explanation: "When a plane mirror rotates by an angle θ (with the incident ray fixed), the normal also rotates by θ, so both the angle of incidence and the angle of reflection change by θ. The reflected ray therefore rotates by 2θ = 2 × 8° = 16°.",
            guideRef: "Reflection of Light",
            difficulty: "challenge",
            hints: [
              "Rotating the mirror by θ rotates the normal by the same angle θ.",
              "The angle of incidence changes by θ, and reflection equals incidence.",
              "The reflected ray turns through the change in incidence plus the change in reflection.",
              "Total rotation of the reflected ray = 2θ.",
            ],
            strategy: "track the normal as the mirror turns",
          },
          {
            id: "phys-waves-bm2-09",
            question: "Light of wavelength 600 nm in air (n = 1.0) enters glass of refractive index 1.5. The frequency stays constant. What is the wavelength inside the glass?",
            options: ["300 nm", "400 nm", "600 nm", "900 nm"],
            answerIndex: 1,
            explanation: "Frequency is unchanged at a boundary, and speed falls by the factor n. Since v = fλ, the wavelength falls by the same factor: λ_glass = λ_air / n = 600 / 1.5 = 400 nm.",
            guideRef: "Refraction and Refractive Index",
            difficulty: "challenge",
            hints: [
              "Frequency does not change when light crosses a boundary.",
              "Speed in glass = c/n, so the speed is reduced by a factor of n.",
              "Since v = fλ and f is fixed, λ is reduced by the same factor n.",
              "λ_glass = 600 nm / 1.5.",
            ],
            strategy: "use v = fλ with frequency constant",
          },
          {
            id: "phys-waves-bm2-10",
            question: "A ray of light in air strikes a transparent block and the measured angles are i = 45° and r = 28°. What is the refractive index of the block (to 2 d.p.)?",
            options: ["0.66", "1.51", "1.61", "2.30"],
            answerIndex: 1,
            explanation: "n = sin i / sin r = sin 45° / sin 28° = 0.7071 / 0.4695 = 1.51. Option A is the inverted (incorrect) ratio sin r / sin i, which would wrongly give a value below 1 for a denser medium.",
            guideRef: "Refraction and Refractive Index",
            difficulty: "challenge",
            hints: [
              "Use Snell's law: n = sin i / sin r.",
              "i is the angle in air (45°), r is the angle in the block (28°).",
              "Evaluate sin 45° and sin 28° before dividing.",
              "A denser medium must give n greater than 1 — check your ratio is the right way up.",
            ],
            strategy: "check the answer is physically sensible (n greater than 1)",
          },
        ],
      },
      {
        id: "phys-waves-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Refractive index, total internal reflection, the critical angle and diffraction.",
        questions: [
          {
            id: "phys-waves-bm3-01",
            question: "The refractive index of a material is 1.5. What is the speed of light in this material? (c = 3.0 × 10⁸ m/s)",
            options: ["2.0 × 10⁸ m/s", "3.0 × 10⁸ m/s", "4.5 × 10⁸ m/s", "1.5 × 10⁸ m/s"],
            answerIndex: 0,
            explanation: "n = c/v, so v = c/n = (3.0 × 10⁸) / 1.5 = 2.0 × 10⁸ m/s. Light always travels slower in a medium than in a vacuum, so v must be less than c.",
            guideRef: "Refraction and Refractive Index",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm3-02",
            question: "Total internal reflection can only occur when light travels:",
            options: [
              "from a less dense to a denser medium",
              "from a denser to a less dense medium, at an angle greater than the critical angle",
              "along the normal between any two media",
              "from air into glass at any angle",
            ],
            answerIndex: 1,
            explanation: "TIR requires the light to be in the denser (higher-n) medium and to strike the boundary at an angle of incidence greater than the critical angle. Going from less dense to denser, refraction always occurs and there is no critical angle.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm3-03",
            question: "When light passes through a narrow gap of similar width to its wavelength, it spreads out. This effect is called:",
            options: ["refraction", "dispersion", "diffraction", "reflection"],
            answerIndex: 2,
            explanation: "Diffraction is the spreading of waves as they pass through a gap or around an obstacle. The spreading is greatest when the gap width is comparable to the wavelength.",
            guideRef: "Describing Waves",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm3-04",
            question: "Which change to a ripple-tank experiment would produce the GREATEST amount of diffraction through a gap?",
            options: [
              "A wider gap and a shorter wavelength",
              "A narrower gap and a longer wavelength",
              "A wider gap and a longer wavelength",
              "A narrower gap and a shorter wavelength",
            ],
            answerIndex: 1,
            explanation: "Diffraction is greatest when the gap is narrow (close to the wavelength) and the wavelength is long. A narrow gap and a long wavelength together give the most pronounced spreading.",
            guideRef: "Describing Waves",
            difficulty: "core",
            hints: [
              "Diffraction increases as the gap gets closer in size to the wavelength.",
              "Think about both factors: gap width and wavelength.",
              "Narrow gap + long wavelength gives the strongest spreading.",
            ],
          },
          {
            id: "phys-waves-bm3-05",
            question: "A material has a critical angle of 42°. What is its refractive index (to 2 d.p.)?",
            options: ["0.67", "1.49", "1.50", "1.34"],
            answerIndex: 2,
            explanation: "n = 1 / sin c = 1 / sin 42° = 1 / 0.6691 = 1.49–1.50. To 2 d.p. this is 1.50, the standard value for crown glass (sin 42° ≈ 0.669).",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "core",
            hints: [
              "The critical angle formula is sin c = 1/n.",
              "Rearrange to n = 1 / sin c.",
              "Evaluate sin 42° then take the reciprocal.",
            ],
          },
          {
            id: "phys-waves-bm3-06",
            question: "Light travels from glass (n = 1.5) toward air and strikes the boundary at an angle of incidence of 50°. The critical angle for glass is about 42°. What happens?",
            options: [
              "The ray refracts and bends toward the normal",
              "The ray refracts and exits along the boundary",
              "Total internal reflection occurs; the ray reflects back into the glass",
              "Half the light refracts and half reflects equally",
            ],
            answerIndex: 2,
            explanation: "Since 50° is greater than the critical angle of 42°, the ray cannot escape into the air. It undergoes total internal reflection and is reflected back into the glass, obeying the law of reflection.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "core",
            hints: [
              "Compare the angle of incidence (50°) with the critical angle (42°).",
              "If i is greater than c, refraction cannot happen.",
              "All the light is reflected back into the denser medium.",
            ],
          },
          {
            id: "phys-waves-bm3-07",
            question: "Optical fibres carry telephone and internet signals over long distances mainly because:",
            options: [
              "the glass absorbs all unwanted colours",
              "light repeatedly undergoes total internal reflection and stays inside the fibre",
              "the fibre refracts light toward the normal at each surface",
              "diffraction guides the light around bends",
            ],
            answerIndex: 1,
            explanation: "Light entering an optical fibre hits the walls at an angle greater than the critical angle, so it is totally internally reflected over and over and stays trapped inside the fibre, carrying the signal with very little loss.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "core",
            hints: [
              "Which property keeps light trapped inside the fibre?",
              "The light bounces off the walls without escaping.",
              "This requires the angle of incidence to exceed the critical angle.",
            ],
          },
          {
            id: "phys-waves-bm3-08",
            question: "The refractive index of diamond is 2.42. What is its critical angle (to the nearest degree)?",
            options: ["24°", "42°", "48°", "66°"],
            answerIndex: 0,
            explanation: "sin c = 1/n = 1/2.42 = 0.413, so c = arcsin(0.413) = 24.4° ≈ 24°. Diamond's very high refractive index gives a very small critical angle, causing light to undergo TIR easily — this is why cut diamonds sparkle.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "challenge",
            hints: [
              "Use sin c = 1/n.",
              "Compute 1/2.42 ≈ 0.413.",
              "Take the inverse sine of 0.413.",
              "A high refractive index gives a small critical angle.",
            ],
            strategy: "apply sin c = 1/n then take arcsin",
          },
          {
            id: "phys-waves-bm3-09",
            question: "A 45-45-90° glass prism (n = 1.5, critical angle ≈ 42°) is used in a periscope. A ray strikes the long sloping face at 45°. What happens at that face?",
            options: [
              "The ray refracts straight through with little bending",
              "The ray is totally internally reflected because 45° > 42°",
              "The ray splits into a spectrum",
              "The ray is partly reflected and partly refracted in equal amounts",
            ],
            answerIndex: 1,
            explanation: "At the sloping face the angle of incidence inside the glass is 45°, which exceeds the critical angle of about 42°. The ray therefore undergoes total internal reflection and is turned through 90°, acting like a perfect mirror.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "challenge",
            hints: [
              "Find the critical angle for the glass: sin c = 1/1.5.",
              "Compare the 45° angle of incidence with that critical angle.",
              "Since 45° > 42°, what must happen to the ray?",
              "A 45-45-90 prism is used precisely because 45° exceeds the critical angle of glass.",
            ],
            strategy: "compare the angle of incidence with the critical angle",
          },
          {
            id: "phys-waves-bm3-10",
            question: "Two transparent materials meet at a boundary. Light passes from material X (n = 1.5) into material Y (n = 1.33). For total internal reflection to be possible at this boundary, the light must:",
            options: [
              "travel from Y into X, since X is denser",
              "travel from X into Y at an angle of incidence above the critical angle",
              "travel along the normal between X and Y",
              "be a longitudinal wave",
            ],
            answerIndex: 1,
            explanation: "TIR requires light to go from the denser medium (X, n = 1.5) into the less dense medium (Y, n = 1.33) and to strike the boundary above the critical angle (here sin c = 1.33/1.5, so c ≈ 62°). Going from Y into X (less dense to denser) refraction always occurs.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "challenge",
            hints: [
              "Which of X and Y is the denser (higher-n) medium?",
              "TIR only happens going from the denser into the less dense medium.",
              "The relative critical angle uses sin c = n(less dense)/n(denser) = 1.33/1.5.",
              "The angle of incidence must exceed that critical angle.",
            ],
            strategy: "identify the denser medium before applying TIR rules",
          },
        ],
      },
      {
        id: "phys-waves-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Converging lenses, ray diagrams, magnification and dispersion.",
        questions: [
          {
            id: "phys-waves-bm4-01",
            question: "A converging (convex) lens is one that:",
            options: [
              "is thinner at the centre than at the edges",
              "is thicker at the centre than at the edges and brings parallel rays to a focus",
              "always produces a virtual image",
              "spreads parallel rays apart",
            ],
            answerIndex: 1,
            explanation: "A converging lens is thicker in the middle than at the edges. It refracts parallel rays so they meet at the principal focus, F.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm4-02",
            question: "The principal focal length of a lens is the distance from the:",
            options: [
              "object to the image",
              "optical centre of the lens to the principal focus",
              "top of the object to the bottom of the image",
              "lens to the screen for any object distance",
            ],
            answerIndex: 1,
            explanation: "The focal length f is the distance from the optical centre of the lens to its principal focus F. A more powerful lens has a shorter focal length.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm4-03",
            question: "An image is 6 cm tall and the object is 2 cm tall. What is the magnification?",
            options: ["0.33", "3", "4", "12"],
            answerIndex: 1,
            explanation: "Magnification = image height / object height = 6 / 2 = 3. It is a ratio and has no unit.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm4-04",
            question: "A converging lens acts as a magnifying glass when the object is placed:",
            options: [
              "beyond 2F",
              "exactly at 2F",
              "between F and 2F",
              "between the lens and F (inside the focal length)",
            ],
            answerIndex: 3,
            explanation: "When the object is closer to the lens than the principal focus (inside F), the lens produces a virtual, upright, magnified image — the magnifying-glass case.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "A magnifying glass gives an upright, enlarged virtual image.",
              "This happens only for one range of object positions.",
              "Compare the object distance with the focal length.",
            ],
          },
          {
            id: "phys-waves-bm4-05",
            question: "An object is placed beyond 2F from a converging lens. The image is:",
            options: [
              "real, inverted and diminished",
              "real, upright and magnified",
              "virtual, upright and magnified",
              "virtual, inverted and the same size",
            ],
            answerIndex: 0,
            explanation: "When the object is beyond 2F, the image forms between F and 2F on the other side of the lens and is real, inverted and diminished (smaller than the object). This is how a camera forms its image.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "An object beyond 2F gives an image closer to the lens than the object.",
              "Real images from a converging lens are inverted.",
              "If the image is between F and 2F, it is smaller than the object.",
            ],
          },
          {
            id: "phys-waves-bm4-06",
            question: "Which standard ray rule is correct for a converging lens?",
            options: [
              "A ray through the optical centre is bent toward the focus",
              "A ray parallel to the principal axis passes through F after the lens",
              "A ray through F on the object side emerges through the optical centre",
              "A ray parallel to the axis emerges parallel to the axis",
            ],
            answerIndex: 1,
            explanation: "A ray travelling parallel to the principal axis is refracted through the principal focus F on the far side. A ray through the optical centre passes straight through undeviated, and a ray through F on the object side emerges parallel to the axis.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "Recall the three standard construction rays.",
              "The ray through the centre is undeviated, so options about bending it are wrong.",
              "A parallel ray and a focal ray swap roles either side of the lens.",
            ],
          },
          {
            id: "phys-waves-bm4-07",
            question: "White light is passed through a triangular glass prism. Which colour is refracted (deviated) the most?",
            options: ["Red", "Yellow", "Green", "Violet"],
            answerIndex: 3,
            explanation: "Violet light has the shortest wavelength and the highest refractive index in glass, so it is refracted the most. Red light has the longest wavelength and is refracted the least.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bm4-08",
            question: "An object 2 cm tall is placed in front of a converging lens. The magnification is 3 and the image is real. What is the height of the image?",
            options: ["0.67 cm", "5 cm", "6 cm", "9 cm"],
            answerIndex: 2,
            explanation: "Magnification = image height / object height, so image height = magnification × object height = 3 × 2 = 6 cm. As the image is real it is also inverted.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "Start from magnification = image height / object height.",
              "Rearrange to image height = magnification × object height.",
              "Substitute magnification = 3 and object height = 2 cm.",
            ],
          },
          {
            id: "phys-waves-bm4-09",
            question: "An object 1.5 cm tall is 12 cm from a converging lens, and the real image forms 36 cm from the lens on the other side. What is the height of the image?",
            options: ["0.50 cm", "1.5 cm", "4.5 cm", "54 cm"],
            answerIndex: 2,
            explanation: "First find the magnification from the distances: m = image distance / object distance = 36 / 12 = 3. Then image height = m × object height = 3 × 1.5 = 4.5 cm. The image is also inverted, since it is real.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "challenge",
            hints: [
              "Magnification can be found from distances as well as heights.",
              "m = image distance / object distance = 36 / 12.",
              "Then use image height = m × object height.",
              "Multiply your magnification by the 1.5 cm object height.",
            ],
            strategy: "find the magnification first, then scale the height",
          },
          {
            id: "phys-waves-bm4-10",
            question: "A converging lens of focal length 10 cm forms a real image with a magnification of 3. Using magnification = image distance / object distance, and given the object distance is 13.3 cm, which statement is correct?",
            options: [
              "The image distance is about 40 cm and the image is real and inverted",
              "The image distance is about 4.4 cm and the image is virtual",
              "The magnification is impossible for a converging lens",
              "The image is upright because the magnification is greater than 1",
            ],
            answerIndex: 0,
            explanation: "image distance = magnification × object distance = 3 × 13.3 = 40 cm. The image is real, so it is inverted. A real image from a converging lens is always inverted, even when magnified, so the 'upright' option is wrong.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "challenge",
            hints: [
              "Rearrange magnification = image distance / object distance to find the image distance.",
              "image distance = magnification × object distance = 3 × 13.3.",
              "A real image from a converging lens is inverted, regardless of size.",
              "Check each statement against 'real images are inverted'.",
            ],
            strategy: "rearrange the magnification relation, then check orientation",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "phys-waves-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Describing waves and wave-equation calculations.",
        questions: [
          {
            id: "phys-waves-bq1-01",
            question: "(a) State one difference between a transverse wave and a longitudinal wave. [1]\n(b) Give one example of each type of wave. [2]\n(c) State what all waves transfer, and what they do NOT transfer. [1]",
            marks: 4,
            modelAnswer: "(a) In a transverse wave the oscillation is perpendicular to the direction of energy transfer; in a longitudinal wave it is parallel to the direction of energy transfer.\n(b) Transverse: light / any electromagnetic wave / water surface wave / wave on a string. Longitudinal: sound in air / a seismic P-wave.\n(c) All waves transfer energy; they do not transfer matter (the medium oscillates but does not travel with the wave).",
            markScheme: [
              "Transverse = oscillation perpendicular to travel; longitudinal = oscillation parallel to travel (1 mark)",
              "Correct transverse example, e.g. light / water surface / string (1 mark)",
              "Correct longitudinal example, e.g. sound (1 mark)",
              "Transfer energy but not matter / not the medium (1 mark)",
            ],
            commonError: "Saying waves transfer 'particles' or matter — only energy is transferred.",
            guideRef: "Describing Waves",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bq1-02",
            question: "(a) Define the term wavelength. [1]\n(b) Define the term frequency, and state its unit. [2]\n(c) Write down the equation linking period T and frequency f. [1]",
            marks: 4,
            modelAnswer: "(a) Wavelength is the distance between two successive points that are in phase, e.g. from one crest to the next crest.\n(b) Frequency is the number of complete waves (cycles) passing a point each second. Its unit is the hertz (Hz).\n(c) T = 1/f (equivalently f = 1/T).",
            markScheme: [
              "Wavelength = distance between successive in-phase points / crest to crest (1 mark)",
              "Frequency = number of complete waves per second / cycles per second (1 mark)",
              "Unit hertz / Hz (1 mark)",
              "T = 1/f (1 mark)",
            ],
            commonError: "Defining wavelength as 'crest to trough' (that is only half a wavelength).",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bq1-03",
            question: "A wave on a rope has a frequency of 4.0 Hz and a wavelength of 0.50 m.\n(a) Calculate the speed of the wave. [2]\n(b) Calculate the period of the wave. [2]",
            marks: 4,
            modelAnswer: "(a) v = fλ = 4.0 × 0.50 = 2.0 m/s\n(b) T = 1/f = 1/4.0 = 0.25 s",
            markScheme: [
              "Correct substitution v = 4.0 × 0.50 (1 mark)",
              "v = 2.0 m/s with unit (1 mark)",
              "T = 1/f = 1/4.0 (1 mark)",
              "T = 0.25 s with unit (1 mark)",
            ],
            commonError: "Forgetting the unit on the final answers, or using T = f instead of T = 1/f.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "core",
            hints: [
              "Use v = fλ for the speed.",
              "Use T = 1/f for the period.",
              "Keep wavelength in metres and include units in the answer.",
            ],
            solutions: [
              {
                label: "Speed and period",
                steps: [
                  "v = fλ = 4.0 Hz × 0.50 m = 2.0 m/s",
                  "T = 1/f = 1 / 4.0 Hz = 0.25 s",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq1-04",
            question: "A loudspeaker produces a sound of frequency 170 Hz. The speed of sound in air is 340 m/s.\n(a) Calculate the wavelength of the sound. [2]\n(b) The loudspeaker now plays a higher-pitched note. State and explain what happens to the wavelength if the speed of sound stays the same. [2]",
            marks: 4,
            modelAnswer: "(a) λ = v/f = 340 / 170 = 2.0 m\n(b) The wavelength decreases. A higher-pitched note has a higher frequency. Since v = fλ and v is constant, increasing f must decrease λ (they are inversely proportional at fixed speed).",
            markScheme: [
              "λ = v/f = 340/170 (1 mark)",
              "λ = 2.0 m with unit (1 mark)",
              "Wavelength decreases (1 mark)",
              "Because f increases and v = fλ with v constant / λ inversely proportional to f (1 mark)",
            ],
            commonError: "Thinking a louder sound (greater amplitude) changes the wavelength — pitch (frequency), not loudness, is what matters here.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "core",
            hints: [
              "Rearrange v = fλ to λ = v/f for part (a).",
              "A higher-pitched note means a higher frequency.",
              "With v fixed, how does λ respond when f rises?",
            ],
            solutions: [
              {
                label: "Wavelength of the sound",
                steps: [
                  "λ = v/f = 340 m/s ÷ 170 Hz",
                  "λ = 2.0 m",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq1-05",
            question: "In a ripple tank, a vibrating bar makes 30 complete water waves in 6.0 s. The distance between the first and the sixth crest (i.e. across 5 wavelengths) is measured as 0.60 m.\n(a) Calculate the frequency of the waves. [1]\n(b) Calculate the wavelength of the waves. [2]\n(c) Calculate the speed of the waves. [2]",
            marks: 5,
            modelAnswer: "(a) f = number of waves / time = 30 / 6.0 = 5.0 Hz\n(b) 5 wavelengths span 0.60 m, so λ = 0.60 / 5 = 0.12 m\n(c) v = fλ = 5.0 × 0.12 = 0.60 m/s",
            markScheme: [
              "f = 30/6.0 = 5.0 Hz (1 mark)",
              "λ = 0.60/5 (1 mark)",
              "λ = 0.12 m (1 mark)",
              "v = fλ = 5.0 × 0.12 (1 mark)",
              "v = 0.60 m/s with unit (1 mark)",
            ],
            commonError: "Treating 0.60 m as a single wavelength instead of 5 wavelengths — always count the number of gaps between the crests, not the number of crests.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "core",
            hints: [
              "Frequency = number of complete waves divided by the time.",
              "The 0.60 m covers 5 wavelengths (the gaps between 6 crests), so divide by 5.",
              "Then use v = fλ.",
            ],
            solutions: [
              {
                label: "Three-step ripple-tank calculation",
                steps: [
                  "f = 30 waves / 6.0 s = 5.0 Hz",
                  "λ = 0.60 m / 5 = 0.12 m (5 gaps between 6 crests)",
                  "v = fλ = 5.0 Hz × 0.12 m = 0.60 m/s",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq1-06",
            question: "A radio wave has a wavelength of 1500 m. Radio waves travel at 3.0 × 10⁸ m/s.\n(a) Calculate the frequency of the radio wave. [2]\n(b) Calculate the period of the radio wave. [2]",
            marks: 4,
            modelAnswer: "(a) f = v/λ = (3.0 × 10⁸) / 1500 = 2.0 × 10⁵ Hz (200 kHz)\n(b) T = 1/f = 1 / (2.0 × 10⁵) = 5.0 × 10⁻⁶ s",
            markScheme: [
              "f = v/λ = 3.0 × 10⁸ / 1500 (1 mark)",
              "f = 2.0 × 10⁵ Hz (1 mark)",
              "T = 1/f = 1 / (2.0 × 10⁵) (1 mark)",
              "T = 5.0 × 10⁻⁶ s with unit (1 mark)",
            ],
            commonError: "Errors handling standard form — write the numbers in powers of ten before dividing.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "core",
            hints: [
              "Rearrange v = fλ to f = v/λ.",
              "Divide 3.0 × 10⁸ by 1500 carefully.",
              "Then take the reciprocal of f to get the period.",
            ],
            solutions: [
              {
                label: "Frequency then period",
                steps: [
                  "f = v/λ = (3.0 × 10^8 m/s) / 1500 m = 2.0 × 10^5 Hz",
                  "T = 1/f = 1 / (2.0 × 10^5 Hz) = 5.0 × 10^-6 s",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq1-07",
            question: "(a) Describe what is meant by diffraction. [1]\n(b) Waves in a ripple tank pass through a gap. State and explain two changes that would make the diffraction MORE noticeable. [4]",
            marks: 5,
            modelAnswer: "(a) Diffraction is the spreading out of waves as they pass through a gap or around the edge of an obstacle.\n(b) (1) Make the gap narrower (closer to the wavelength): the closer the gap size is to the wavelength, the more the waves spread. (2) Increase the wavelength (lower the frequency of the bar): longer wavelengths diffract more for a given gap. Either change brings the gap size and wavelength closer together, so the spreading is greater.",
            markScheme: [
              "Diffraction = spreading of waves through a gap / around an obstacle (1 mark)",
              "Narrower gap (1 mark) — explanation: gap size closer to wavelength gives more spreading (1 mark)",
              "Longer wavelength / lower frequency (1 mark) — explanation: longer wavelength diffracts more (1 mark)",
            ],
            commonError: "Saying a wider gap increases diffraction — it is the opposite; a narrow gap (comparable to the wavelength) maximises diffraction.",
            guideRef: "Describing Waves",
            difficulty: "core",
            hints: [
              "Diffraction depends on how the gap width compares with the wavelength.",
              "Spreading is greatest when the gap is about the same size as the wavelength.",
              "To increase wavelength in a ripple tank, lower the frequency of the vibrating bar.",
            ],
          },
          {
            id: "phys-waves-bq1-08",
            question: "A water wave travels from a deep region into a shallow region of a ripple tank. In the deep water the speed is 0.30 m/s and the frequency is 6.0 Hz.\n(a) Calculate the wavelength in the deep water. [2]\n(b) In the shallow water the speed falls to 0.18 m/s. The frequency is unchanged. Calculate the new wavelength. [2]\n(c) Explain why the frequency does not change as the wave crosses the boundary. [1]",
            marks: 5,
            modelAnswer: "(a) λ = v/f = 0.30 / 6.0 = 0.050 m\n(b) λ = v/f = 0.18 / 6.0 = 0.030 m\n(c) The frequency is set by the source (the vibrating bar). The number of waves arriving at and leaving the boundary each second must be the same, otherwise waves would pile up or disappear, so the frequency is unchanged.",
            markScheme: [
              "λ = 0.30/6.0 (1 mark)",
              "λ = 0.050 m (1 mark)",
              "λ = 0.18/6.0 = 0.030 m (1 mark for method and answer)",
              "Frequency stays the same — explained as set by source / waves cannot accumulate at the boundary (1 mark)",
            ],
            commonError: "Assuming the frequency changes when the wave slows — it is the wavelength that changes, not the frequency.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "challenge",
            hints: [
              "Use λ = v/f in both regions.",
              "The frequency stays at 6.0 Hz in both regions.",
              "For part (c), think about how many waves per second cross the boundary.",
              "Compare the two wavelengths — the slower wave has the shorter wavelength.",
            ],
            solutions: [
              {
                label: "Wavelength in each region",
                steps: [
                  "Deep: λ = v/f = 0.30 m/s ÷ 6.0 Hz = 0.050 m",
                  "Shallow: λ = v/f = 0.18 m/s ÷ 6.0 Hz = 0.030 m",
                  "Frequency constant, so the slower shallow wave has the shorter wavelength.",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq1-09",
            question: "A bat emits ultrasound of frequency 50 kHz. The speed of sound in air is 340 m/s.\n(a) Convert 50 kHz to hertz. [1]\n(b) Calculate the wavelength of the ultrasound. [2]\n(c) The bat detects an echo 0.020 s after emitting a pulse. Calculate the distance to the object the sound reflected from. [3]",
            marks: 6,
            modelAnswer: "(a) 50 kHz = 50 × 10³ Hz = 50 000 Hz\n(b) λ = v/f = 340 / 50 000 = 0.0068 m = 6.8 mm\n(c) The sound travels to the object and back. Total distance = speed × time = 340 × 0.020 = 6.8 m. This is the there-and-back distance, so the distance to the object = 6.8 / 2 = 3.4 m.",
            markScheme: [
              "50 kHz = 50 000 Hz (1 mark)",
              "λ = 340/50 000 (1 mark)",
              "λ = 0.0068 m / 6.8 mm (1 mark)",
              "Total distance = 340 × 0.020 = 6.8 m (1 mark)",
              "Recognise this is there-and-back, so divide by 2 (1 mark)",
              "Distance to object = 3.4 m (1 mark)",
            ],
            commonError: "Forgetting to halve the distance in (c) — the echo travels to the object AND back, so the path is twice the distance to the object.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "challenge",
            hints: [
              "Convert the frequency to hertz first.",
              "Use λ = v/f for the wavelength.",
              "For (c), distance = speed × time gives the total path of the echo.",
              "The pulse goes there and back, so halve the total distance.",
            ],
            solutions: [
              {
                label: "Wavelength and echo distance",
                steps: [
                  "f = 50 kHz = 50 000 Hz",
                  "λ = v/f = 340 / 50 000 = 0.0068 m = 6.8 mm",
                  "Total path = v × t = 340 m/s × 0.020 s = 6.8 m",
                  "Distance to object = 6.8 m ÷ 2 = 3.4 m",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq1-10",
            question: "Light of frequency 5.0 × 10¹⁴ Hz travels through a vacuum at 3.0 × 10⁸ m/s.\n(a) Calculate the wavelength of this light in a vacuum. [2]\n(b) The light enters glass of refractive index 1.5. Calculate its speed in the glass. [2]\n(c) Calculate the wavelength of the light inside the glass, and comment on whether its colour (frequency) changes. [3]",
            marks: 7,
            modelAnswer: "(a) λ = v/f = (3.0 × 10⁸) / (5.0 × 10¹⁴) = 6.0 × 10⁻⁷ m (600 nm)\n(b) v = c/n = (3.0 × 10⁸) / 1.5 = 2.0 × 10⁸ m/s\n(c) Inside the glass the frequency is unchanged at 5.0 × 10¹⁴ Hz, so λ = v/f = (2.0 × 10⁸) / (5.0 × 10¹⁴) = 4.0 × 10⁻⁷ m (400 nm). The colour is determined by the frequency, which does not change, so the colour stays the same even though the wavelength shortens.",
            markScheme: [
              "λ = v/f = 3.0 × 10⁸ / 5.0 × 10¹⁴ (1 mark)",
              "λ = 6.0 × 10⁻⁷ m / 600 nm (1 mark)",
              "v = c/n = 3.0 × 10⁸ / 1.5 (1 mark)",
              "v = 2.0 × 10⁸ m/s (1 mark)",
              "λ in glass = 2.0 × 10⁸ / 5.0 × 10¹⁴ = 4.0 × 10⁻⁷ m (1 mark)",
              "Frequency unchanged → colour unchanged (1 mark)",
              "Wavelength shortens in glass (1 mark)",
            ],
            commonError: "Using the vacuum speed (3.0 × 10⁸) to find the wavelength inside the glass — you must use the slower speed in the glass (2.0 × 10⁸ m/s).",
            guideRef: "Refraction and Refractive Index",
            difficulty: "challenge",
            hints: [
              "Use λ = v/f with the vacuum speed for part (a).",
              "Use n = c/v rearranged to v = c/n for the speed in glass.",
              "Frequency does not change when entering the glass.",
              "For (c), use the slower glass speed in λ = v/f.",
            ],
            solutions: [
              {
                label: "Wavelength, speed and wavelength in glass",
                steps: [
                  "λ_vacuum = v/f = (3.0 × 10^8) / (5.0 × 10^14) = 6.0 × 10^-7 m",
                  "v_glass = c/n = (3.0 × 10^8) / 1.5 = 2.0 × 10^8 m/s",
                  "λ_glass = v/f = (2.0 × 10^8) / (5.0 × 10^14) = 4.0 × 10^-7 m",
                  "Frequency (and hence colour) unchanged; wavelength shortens by the factor n.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-waves-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Reflection, plane mirrors and the law of reflection.",
        questions: [
          {
            id: "phys-waves-bq2-01",
            question: "(a) State the law of reflection. [1]\n(b) Explain what is meant by the normal at a reflecting surface. [1]\n(c) List three properties of the image formed in a plane mirror. [3]",
            marks: 5,
            modelAnswer: "(a) The angle of incidence equals the angle of reflection (both measured from the normal).\n(b) The normal is the line drawn perpendicular (at 90°) to the surface at the point where the ray strikes it.\n(c) Any three of: virtual; upright; same size as the object; laterally inverted (left-right swapped); as far behind the mirror as the object is in front.",
            markScheme: [
              "Angle of incidence = angle of reflection (1 mark)",
              "Normal = line perpendicular to the surface at the point of incidence (1 mark)",
              "Three correct properties from: virtual / upright / same size / laterally inverted / same distance behind (1 mark each, max 3)",
            ],
            commonError: "Omitting 'measured from the normal' when stating the law of reflection.",
            guideRef: "Reflection of Light",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bq2-02",
            question: "A ray of light strikes a plane mirror. The angle between the incident ray and the mirror surface is 35°.\n(a) Calculate the angle of incidence. [1]\n(b) State the angle of reflection. [1]\n(c) Calculate the total angle between the incident ray and the reflected ray. [2]",
            marks: 4,
            modelAnswer: "(a) Angle of incidence = 90° − 35° = 55° (measured from the normal).\n(b) Angle of reflection = 55° (equal to the angle of incidence).\n(c) The angle between the incident and reflected rays = angle of incidence + angle of reflection = 55° + 55° = 110°.",
            markScheme: [
              "Angle of incidence = 90° − 35° = 55° (1 mark)",
              "Angle of reflection = 55° (1 mark)",
              "Angle between rays = 55° + 55° (1 mark)",
              "= 110° (1 mark)",
            ],
            commonError: "Using 35° as the angle of incidence — the 35° is measured from the surface, so the angle from the normal is 90° − 35°.",
            guideRef: "Reflection of Light",
            difficulty: "core",
            hints: [
              "Angles are measured from the normal, so subtract from 90°.",
              "The angle of reflection equals the angle of incidence.",
              "The angle between the two rays is the sum of the two equal angles.",
            ],
            solutions: [
              {
                label: "Angle between incident and reflected rays",
                steps: [
                  "Angle of incidence = 90° − 35° = 55°",
                  "Angle of reflection = 55° (law of reflection)",
                  "Angle between rays = 55° + 55° = 110°",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq2-03",
            question: "An object is placed 8.0 cm in front of a plane mirror.\n(a) State how far behind the mirror the image is formed. [1]\n(b) Calculate the distance between the object and its image. [1]\n(c) The object is moved so it is now 5.0 cm from the mirror. Calculate the new object-to-image distance. [2]",
            marks: 4,
            modelAnswer: "(a) The image is 8.0 cm behind the mirror (as far behind as the object is in front).\n(b) Object-to-image distance = 8.0 + 8.0 = 16 cm.\n(c) New image is 5.0 cm behind the mirror, so object-to-image distance = 5.0 + 5.0 = 10 cm.",
            markScheme: [
              "Image 8.0 cm behind mirror (1 mark)",
              "Object-to-image = 16 cm (1 mark)",
              "New image 5.0 cm behind / uses 5.0 + 5.0 (1 mark)",
              "New object-to-image distance = 10 cm (1 mark)",
            ],
            commonError: "Giving only the image distance behind the mirror instead of the full object-to-image separation (which is twice the object distance).",
            guideRef: "Reflection of Light",
            difficulty: "core",
            hints: [
              "The image is the same distance behind the mirror as the object is in front.",
              "The object-to-image distance is the object distance plus the image distance.",
              "Both equal the object distance, so the total is twice the object distance.",
            ],
            solutions: [
              {
                label: "Object-to-image distances",
                steps: [
                  "Image distance behind mirror = object distance = 8.0 cm",
                  "Object-to-image = 8.0 + 8.0 = 16 cm",
                  "After moving: 5.0 + 5.0 = 10 cm",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq2-04",
            question: "Describe how you would use a ray box, a plane mirror, a protractor and paper to verify the law of reflection. Include how you would take and use your measurements. [5]",
            marks: 5,
            modelAnswer: "Place the mirror on the paper and draw a line along its reflecting surface. At a chosen point on this line, draw the normal (perpendicular line). Direct a single ray from the ray box at this point and mark the incident and reflected rays with dots, then draw them. Using the protractor, measure the angle of incidence and the angle of reflection, both from the normal. Repeat for several different angles of incidence. In each case the angle of reflection should equal the angle of incidence, verifying the law of reflection. Repeating and tabulating the angles improves reliability.",
            markScheme: [
              "Draw the mirror line and the normal at the point of incidence (1 mark)",
              "Shine a single ray and mark/draw incident and reflected rays (1 mark)",
              "Measure angle of incidence and angle of reflection from the normal with a protractor (1 mark)",
              "Repeat for several angles of incidence (1 mark)",
              "Conclusion: angle of reflection = angle of incidence each time (1 mark)",
            ],
            commonError: "Measuring the angles from the mirror surface rather than from the normal.",
            guideRef: "Reflection of Light",
            difficulty: "core",
            hints: [
              "Start by drawing the mirror line and the normal.",
              "Use a single narrow ray so the rays are easy to mark.",
              "Always measure angles from the normal, and repeat for several angles.",
            ],
          },
          {
            id: "phys-waves-bq2-05",
            question: "A periscope can be made using two plane mirrors.\n(a) State the angle each mirror should make with the horizontal in a simple periscope. [1]\n(b) Explain, using the law of reflection, how the periscope allows a person to see over the top of a wall. [3]\n(c) Give one advantage of using totally internally reflecting prisms instead of mirrors in a high-quality periscope. [1]",
            marks: 5,
            modelAnswer: "(a) Each mirror is set at 45° to the horizontal.\n(b) Light from the object travels horizontally and strikes the top mirror at 45° to the surface, i.e. at 45° to the normal. By the law of reflection it reflects at 45° and is turned through 90° to travel vertically downward. It then strikes the lower mirror, also at 45°, and is reflected through 90° again to travel horizontally into the observer's eye. The two reflections shift the line of sight upward so the person can see over the wall.\n(c) Prisms give a brighter, sharper image because total internal reflection reflects (almost) all the light, whereas a mirror surface absorbs some and can produce faint double images from the front glass.",
            markScheme: [
              "Each mirror at 45° (1 mark)",
              "Light hits top mirror at 45° and reflects through 90° (1 mark)",
              "Light hits lower mirror at 45° and reflects through 90° again (1 mark)",
              "Overall the line of sight is raised so the observer sees over the wall (1 mark)",
              "Prisms: brighter/sharper image / no light loss / no double images via TIR (1 mark)",
            ],
            commonError: "Saying the mirrors are at 90° to each other but forgetting they are at 45° to the incoming light path.",
            guideRef: "Reflection of Light",
            difficulty: "core",
            hints: [
              "Each mirror turns the light through 90°.",
              "A 45° mirror reflects a horizontal ray to a vertical one.",
              "Apply the law of reflection at each mirror in turn.",
              "Think about how much light a mirror loses compared with TIR in a prism.",
            ],
          },
          {
            id: "phys-waves-bq2-06",
            question: "A ray of light reflects from a plane mirror. The mirror is then rotated through 12° while the incident ray is held fixed.\n(a) Explain what happens to the direction of the normal when the mirror rotates. [1]\n(b) Calculate the angle through which the reflected ray turns. [2]\n(c) State one practical use of this 'lever' effect, where a small rotation produces a larger movement of a reflected beam. [1]",
            marks: 4,
            modelAnswer: "(a) The normal is fixed perpendicular to the mirror, so when the mirror rotates by 12° the normal also rotates by 12°.\n(b) When the mirror turns by angle θ, the angle of incidence changes by θ and so does the angle of reflection, so the reflected ray turns by 2θ = 2 × 12° = 24°.\n(c) Used in an optical lever / mirror galvanometer (or a laser pointer reflected off a small rotating mirror, e.g. in a barcode scanner) to amplify a small angular movement into a large beam deflection.",
            markScheme: [
              "Normal rotates by the same 12° as the mirror (1 mark)",
              "Reflected ray turns by 2 × 12° (1 mark)",
              "= 24° (1 mark)",
              "Sensible use: optical lever / galvanometer / scanning mirror (1 mark)",
            ],
            commonError: "Stating the reflected ray turns by only 12° — it actually turns by twice the mirror's rotation.",
            guideRef: "Reflection of Light",
            difficulty: "challenge",
            hints: [
              "The normal stays perpendicular to the mirror, so it rotates with the mirror.",
              "Both the incidence and reflection angles change by the rotation angle.",
              "Add the two changes to find the total turn of the reflected ray.",
              "The reflected ray turns by 2θ, double the mirror's rotation.",
            ],
            solutions: [
              {
                label: "Reflected-ray rotation",
                steps: [
                  "Mirror rotates by θ = 12°, so the normal rotates by 12°.",
                  "Angle of incidence changes by 12°; reflection equals incidence, so it also changes by 12°.",
                  "Reflected ray turns by 2θ = 2 × 12° = 24°.",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq2-07",
            question: "A student writes the word 'AMBULANCE' on the front of a vehicle so that it reads correctly in a driver's rear-view mirror.\n(a) Explain why the word must be printed reversed on the vehicle. [2]\n(b) State which property of the mirror image is responsible for this. [1]",
            marks: 3,
            modelAnswer: "(a) A plane mirror laterally inverts the image (swaps left and right). If 'AMBULANCE' were printed normally, the rear-view mirror would show it reversed and hard to read. By printing it reversed on the vehicle, the mirror's lateral inversion flips it back so the driver ahead sees it the right way round.\n(b) Lateral inversion (left-right reversal) of the plane-mirror image.",
            markScheme: [
              "Mirror image is laterally inverted / left-right swapped (1 mark)",
              "Reversing the printing cancels this so the mirror shows it correctly (1 mark)",
              "Names the property: lateral inversion (1 mark)",
            ],
            commonError: "Describing the effect as the image being 'upside down' — a plane mirror does not invert top-to-bottom, it reverses left-to-right.",
            guideRef: "Reflection of Light",
            difficulty: "core",
            hints: [
              "Recall what a plane mirror does to left and right.",
              "It is lateral inversion, not vertical inversion.",
              "Reversing the print beforehand cancels the mirror's reversal.",
            ],
          },
          {
            id: "phys-waves-bq2-08",
            question: "Two plane mirrors are placed at right angles (90°) to each other. A ray of light strikes the first mirror at an angle of incidence of 30°.\n(a) Calculate the angle of reflection at the first mirror. [1]\n(b) Show, using the geometry of reflection, that after reflecting off both mirrors the ray emerges travelling back parallel to its original direction (but in the opposite sense). [3]",
            marks: 4,
            modelAnswer: "(a) Angle of reflection at the first mirror = angle of incidence = 30°.\n(b) At the first mirror the ray reflects at 30° to that mirror's normal. The reflected ray then meets the second mirror. Because the two mirrors are perpendicular, the angle of incidence at the second mirror is 90° − 30° = 60°, and it reflects at 60°. Adding the turns: the ray is turned through 2 × 30° = 60° at the first mirror and 2 × 60° = 120° at the second, giving a total deviation of 60° + 120° = 180°. A 180° deviation means the ray emerges travelling back parallel to its original path but in the opposite direction. (This is why a corner reflector sends light straight back to its source.)",
            markScheme: [
              "Angle of reflection at first mirror = 30° (1 mark)",
              "Angle of incidence at second mirror = 60° (from perpendicular mirrors) (1 mark)",
              "Total deviation = 2(30°) + 2(60°) = 180° (1 mark)",
              "180° deviation → emerges antiparallel / back parallel to original direction (1 mark)",
            ],
            commonError: "Not realising the deviation at each mirror is twice the angle of incidence, or forgetting that perpendicular mirrors make the two incidence angles add to 90°.",
            guideRef: "Reflection of Light",
            difficulty: "challenge",
            hints: [
              "At each mirror, the ray is deviated by twice the angle of incidence.",
              "Because the mirrors are perpendicular, the two angles of incidence add to 90°.",
              "Add the two deviations to find the total turn.",
              "A total deviation of 180° means the ray comes straight back.",
            ],
            solutions: [
              {
                label: "Corner-reflector geometry",
                steps: [
                  "First mirror: reflects at 30°; deviation = 2 × 30° = 60°.",
                  "Second mirror (perpendicular): angle of incidence = 90° − 30° = 60°; deviation = 2 × 60° = 120°.",
                  "Total deviation = 60° + 120° = 180°.",
                  "A 180° deviation means the ray returns parallel to its original direction.",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq2-09",
            question: "(a) Explain the difference between a real image and a virtual image. [2]\n(b) State whether the image in a plane mirror is real or virtual, and explain why it cannot be projected onto a screen. [2]",
            marks: 4,
            modelAnswer: "(a) A real image forms where light rays actually meet (converge), and it can be captured on a screen. A virtual image forms where rays only appear to come from; the rays do not actually pass through the image position, so no light is really there.\n(b) The plane-mirror image is virtual. The reflected rays diverge as if coming from behind the mirror, but no light actually travels to or through that point, so there is nothing for a screen placed there to catch.",
            markScheme: [
              "Real image: rays actually meet / can be put on a screen (1 mark)",
              "Virtual image: rays only appear to come from it / cannot be put on a screen (1 mark)",
              "Plane-mirror image is virtual (1 mark)",
              "Explanation: no real light reaches the image position behind the mirror (1 mark)",
            ],
            commonError: "Believing a virtual image is simply 'imaginary' or non-existent — it is seen by the eye, but it just cannot be projected onto a screen.",
            guideRef: "Reflection of Light",
            difficulty: "core",
            hints: [
              "A real image can be caught on a screen; a virtual one cannot.",
              "Think about whether light actually reaches behind the mirror.",
              "The plane-mirror rays only appear to come from behind the glass.",
            ],
          },
          {
            id: "phys-waves-bq2-10",
            question: "A periscope-style instrument uses a plane mirror that can be rotated to scan a beam of light across a distant screen.\n(a) A laser beam reflects off the mirror onto a screen 5.0 m away. The mirror is rotated by 2.0°. Calculate the angle through which the reflected beam turns. [1]\n(b) Estimate how far the laser spot moves along the screen. Use: distance moved ≈ (angle in radians) × (distance to screen), where angle in radians = angle in degrees × π/180. [3]",
            marks: 4,
            modelAnswer: "(a) The reflected beam turns through twice the mirror rotation: 2 × 2.0° = 4.0°.\n(b) Convert 4.0° to radians: 4.0 × π/180 = 4.0 × 0.01745 = 0.0698 rad. Distance moved ≈ angle (rad) × distance = 0.0698 × 5.0 = 0.349 m ≈ 0.35 m (about 35 cm).",
            markScheme: [
              "Reflected beam turns by 2 × 2.0° = 4.0° (1 mark)",
              "Convert 4.0° to radians: 4.0 × π/180 = 0.0698 rad (1 mark)",
              "Distance ≈ 0.0698 × 5.0 (1 mark)",
              "≈ 0.35 m with unit (1 mark)",
            ],
            commonError: "Using 2.0° instead of 4.0° for the beam — remember the reflected beam turns by twice the mirror's rotation.",
            guideRef: "Reflection of Light",
            difficulty: "challenge",
            hints: [
              "The reflected beam turns by twice the mirror rotation.",
              "Convert the beam's turn from degrees to radians using × π/180.",
              "Multiply the angle in radians by the 5.0 m distance.",
              "Check the spot moves a fraction of a metre, not several metres.",
            ],
            solutions: [
              {
                label: "Beam deflection on a screen",
                steps: [
                  "Beam turn = 2 × mirror rotation = 2 × 2.0° = 4.0°",
                  "In radians: 4.0 × π/180 = 0.0698 rad",
                  "Spot displacement ≈ 0.0698 × 5.0 m = 0.35 m",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-waves-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Refraction, refractive index, total internal reflection and the critical angle.",
        questions: [
          {
            id: "phys-waves-bq3-01",
            question: "(a) State what happens to the speed and direction of a ray of light as it passes from air into glass at an angle. [2]\n(b) State Snell's law in the form of an equation, defining each symbol. [2]",
            marks: 4,
            modelAnswer: "(a) The light slows down (glass is optically denser than air) and bends toward the normal.\n(b) n = sin i / sin r, where n is the refractive index of the glass (relative to air), i is the angle of incidence (in air) and r is the angle of refraction (in the glass). Both angles are measured from the normal.",
            markScheme: [
              "Slows down on entering glass (1 mark)",
              "Bends toward the normal (1 mark)",
              "n = sin i / sin r (1 mark)",
              "Symbols defined: i = angle of incidence, r = angle of refraction, both from the normal (1 mark)",
            ],
            commonError: "Saying the light speeds up entering glass — it slows down in the denser medium.",
            guideRef: "Refraction and Refractive Index",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bq3-02",
            question: "A ray of light passes from air into a glass block. The angle of incidence is 50° and the angle of refraction is 30°.\n(a) Calculate the refractive index of the glass. [2]\n(b) State whether the ray bends toward or away from the normal, and explain why. [2]",
            marks: 4,
            modelAnswer: "(a) n = sin i / sin r = sin 50° / sin 30° = 0.7660 / 0.5000 = 1.53\n(b) The ray bends toward the normal (the angle decreases from 50° to 30°). This is because glass is optically denser than air, so the light slows down, and a slowing wave bends toward the normal.",
            markScheme: [
              "n = sin 50° / sin 30° (1 mark)",
              "n = 1.53 (accept 1.5) (1 mark)",
              "Bends toward the normal (1 mark)",
              "Because glass is denser / light slows down (1 mark)",
            ],
            commonError: "Inverting the ratio to sin r / sin i, which gives a value less than 1.",
            guideRef: "Refraction and Refractive Index",
            difficulty: "core",
            hints: [
              "Use n = sin i / sin r with i = 50° and r = 30°.",
              "Evaluate the sines before dividing.",
              "Entering a denser medium, light bends toward the normal.",
            ],
            solutions: [
              {
                label: "Refractive index calculation",
                steps: [
                  "n = sin i / sin r = sin 50° / sin 30°",
                  "= 0.7660 / 0.5000 = 1.53",
                  "Angle decreases, so the ray bends toward the normal.",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq3-03",
            question: "The refractive index of water is 1.33. The speed of light in a vacuum is 3.0 × 10⁸ m/s.\n(a) Calculate the speed of light in water. [2]\n(b) A ray enters water from air at an angle of incidence of 40°. Calculate the angle of refraction. [3]",
            marks: 5,
            modelAnswer: "(a) v = c/n = (3.0 × 10⁸) / 1.33 = 2.26 × 10⁸ m/s\n(b) n = sin i / sin r, so sin r = sin i / n = sin 40° / 1.33 = 0.6428 / 1.33 = 0.4833. r = arcsin(0.4833) = 28.9° ≈ 29°.",
            markScheme: [
              "v = c/n = 3.0 × 10⁸ / 1.33 (1 mark)",
              "v = 2.26 × 10⁸ m/s (accept 2.3 × 10⁸) (1 mark)",
              "sin r = sin 40° / 1.33 (1 mark)",
              "sin r = 0.483 (1 mark)",
              "r = 29° (accept 28°–29°) (1 mark)",
            ],
            commonError: "Multiplying by n instead of dividing when finding sin r, or using c instead of v.",
            guideRef: "Refraction and Refractive Index",
            difficulty: "core",
            hints: [
              "For (a) use n = c/v rearranged to v = c/n.",
              "For (b) rearrange n = sin i / sin r to sin r = sin i / n.",
              "Take the inverse sine of 0.483 to find r.",
            ],
            solutions: [
              {
                label: "Speed in water and refraction angle",
                steps: [
                  "v = c/n = (3.0 × 10^8) / 1.33 = 2.26 × 10^8 m/s",
                  "sin r = sin 40° / 1.33 = 0.6428 / 1.33 = 0.4833",
                  "r = arcsin(0.4833) = 28.9° ≈ 29°",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq3-04",
            question: "(a) Define the critical angle. [1]\n(b) State the two conditions necessary for total internal reflection to occur. [2]\n(c) The refractive index of a type of glass is 1.50. Calculate its critical angle. [2]",
            marks: 5,
            modelAnswer: "(a) The critical angle is the angle of incidence in the denser medium for which the angle of refraction is 90° (the refracted ray travels along the boundary).\n(b) (1) The light must be travelling from a denser to a less dense medium. (2) The angle of incidence must be greater than the critical angle.\n(c) sin c = 1/n = 1/1.50 = 0.6667. c = arcsin(0.6667) = 41.8° ≈ 42°.",
            markScheme: [
              "Critical angle = angle of incidence giving angle of refraction of 90° (1 mark)",
              "Condition 1: denser to less dense medium (1 mark)",
              "Condition 2: i greater than critical angle (1 mark)",
              "sin c = 1/1.50 = 0.667 (1 mark)",
              "c = 42° (accept 41°–42°) (1 mark)",
            ],
            commonError: "Stating only one condition for TIR, or forgetting that the light must start in the denser medium.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "core",
            hints: [
              "At the critical angle, the angle of refraction is exactly 90°.",
              "TIR needs both the right direction and i greater than c.",
              "Use sin c = 1/n then take the inverse sine.",
            ],
            solutions: [
              {
                label: "Critical-angle calculation",
                steps: [
                  "sin c = 1/n = 1/1.50 = 0.6667",
                  "c = arcsin(0.6667) = 41.8° ≈ 42°",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq3-05",
            question: "A semicircular glass block (n = 1.52) is used to investigate refraction. A ray enters the flat face along the normal (passing the curved surface without bending) and reaches the centre of the flat face from inside.\n(a) Explain why the ray entering through the curved surface is not refracted. [1]\n(b) Calculate the critical angle for this glass. [2]\n(c) The ray strikes the centre of the flat face at an angle of incidence of 45° from inside the glass. State and explain what happens. [2]",
            marks: 5,
            modelAnswer: "(a) The ray travels along a radius of the curved surface, so it meets that surface along the normal (angle of incidence 0°). With i = 0° there is no bending — only a change of speed.\n(b) sin c = 1/n = 1/1.52 = 0.6579. c = arcsin(0.6579) = 41.1° ≈ 41°.\n(c) The angle of incidence (45°) is greater than the critical angle (41°), so total internal reflection occurs at the flat face: the ray is reflected back into the glass and none escapes into the air.",
            markScheme: [
              "Ray enters along a radius / along the normal, so i = 0° and no bending (1 mark)",
              "sin c = 1/1.52 = 0.658 (1 mark)",
              "c = 41° (accept 41°–42°) (1 mark)",
              "45° > critical angle → total internal reflection (1 mark)",
              "Ray reflected back into glass / no light escapes (1 mark)",
            ],
            commonError: "Forgetting that entering along a radius means the angle of incidence at the curved surface is zero, so it does not bend.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "core",
            hints: [
              "A ray along a radius meets the curved surface head-on (i = 0°).",
              "Use sin c = 1/n for the critical angle.",
              "Compare the 45° angle with the critical angle to decide what happens.",
            ],
            solutions: [
              {
                label: "Critical angle and behaviour at the flat face",
                steps: [
                  "sin c = 1/n = 1/1.52 = 0.6579",
                  "c = arcsin(0.6579) = 41.1° ≈ 41°",
                  "45° > 41°, so total internal reflection occurs at the flat face.",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq3-06",
            question: "An optical fibre is made of glass with refractive index 1.50.\n(a) Explain how total internal reflection allows the fibre to carry a light signal along its length. [3]\n(b) Calculate the critical angle for the glass. [2]\n(c) State one use of optical fibres and one advantage they have over copper wires. [2]",
            marks: 7,
            modelAnswer: "(a) Light entering the fibre strikes the wall at an angle of incidence greater than the critical angle. Because the light is going from the denser glass toward the less dense surroundings and exceeds the critical angle, total internal reflection occurs, so all the light is reflected back into the fibre. This happens repeatedly all the way along the fibre, so the light (and the signal it carries) travels from one end to the other with very little loss.\n(b) sin c = 1/n = 1/1.50 = 0.6667. c = arcsin(0.6667) = 41.8° ≈ 42°.\n(c) Use: broadband internet / telephone communications / medical endoscopes. Advantage: carries much more information / faster data rate / lower signal loss / immune to electrical interference (any one).",
            markScheme: [
              "Light hits the wall above the critical angle (1 mark)",
              "Total internal reflection occurs, reflecting all the light back in (1 mark)",
              "Repeated along the fibre, carrying the signal with little loss (1 mark)",
              "sin c = 1/1.50 = 0.667 (1 mark)",
              "c = 42° (1 mark)",
              "Valid use: internet / phone / endoscope (1 mark)",
              "Valid advantage: more data / less loss / no interference (1 mark)",
            ],
            commonError: "Saying the light is reflected by mirrors lining the fibre — it is total internal reflection at the glass boundary, not mirrors.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "core",
            hints: [
              "What angle condition makes light stay inside the fibre?",
              "The light reflects off the walls repeatedly without escaping.",
              "Use sin c = 1/n for the critical angle.",
              "Think about data capacity and interference for the advantage.",
            ],
            solutions: [
              {
                label: "Critical angle of the fibre",
                steps: [
                  "sin c = 1/n = 1/1.50 = 0.6667",
                  "c = arcsin(0.6667) = 41.8° ≈ 42°",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq3-07",
            question: "A ray of light passes from air into a transparent plastic block. The angle of incidence is 58° and the angle of refraction is 33°.\n(a) Calculate the refractive index of the plastic. [2]\n(b) Calculate the speed of light in the plastic. (c = 3.0 × 10⁸ m/s) [2]\n(c) Calculate the critical angle for this plastic. [2]",
            marks: 6,
            modelAnswer: "(a) n = sin i / sin r = sin 58° / sin 33° = 0.8480 / 0.5446 = 1.56\n(b) v = c/n = (3.0 × 10⁸) / 1.56 = 1.92 × 10⁸ m/s\n(c) sin c = 1/n = 1/1.56 = 0.6410. c = arcsin(0.6410) = 39.9° ≈ 40°.",
            markScheme: [
              "n = sin 58° / sin 33° (1 mark)",
              "n = 1.56 (accept 1.55–1.57) (1 mark)",
              "v = c/n = 3.0 × 10⁸ / 1.56 (1 mark)",
              "v = 1.92 × 10⁸ m/s (accept 1.9 × 10⁸) (1 mark)",
              "sin c = 1/1.56 = 0.641 (1 mark)",
              "c = 40° (accept 39°–40°) (1 mark)",
            ],
            commonError: "Carrying a rounded value of n through all three parts and accumulating errors — keep extra figures until the final answer.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "challenge",
            hints: [
              "Find n from Snell's law first.",
              "Use v = c/n for the speed in the plastic.",
              "Use sin c = 1/n for the critical angle.",
              "Keep an unrounded value of n through the calculation.",
            ],
            solutions: [
              {
                label: "n, speed, and critical angle",
                steps: [
                  "n = sin 58° / sin 33° = 0.8480 / 0.5446 = 1.56",
                  "v = c/n = (3.0 × 10^8) / 1.56 = 1.92 × 10^8 m/s",
                  "sin c = 1/1.56 = 0.641, so c = arcsin(0.641) ≈ 40°",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq3-08",
            question: "A 45-45-90° prism made of glass (n = 1.50) is used to turn a beam of light through 90° in a pair of binoculars.\n(a) Calculate the critical angle of the glass. [2]\n(b) Explain why the prism turns the beam by total internal reflection rather than letting it pass straight through the sloping face. [3]\n(c) State one advantage of using a prism rather than a silvered mirror for this purpose. [1]",
            marks: 6,
            modelAnswer: "(a) sin c = 1/n = 1/1.50 = 0.6667. c = arcsin(0.6667) = 41.8° ≈ 42°.\n(b) Light entering the prism strikes the long sloping face at an angle of incidence of 45° (inside the glass). Since 45° is greater than the critical angle of 42°, total internal reflection occurs, so all the light is reflected and turned through 90° instead of passing out through that face.\n(c) Total internal reflection reflects (almost) all the light, so the image is brighter; a mirror absorbs some light and its silvering can tarnish. (Accept: no ghost/double images.)",
            markScheme: [
              "sin c = 1/1.50 = 0.667 (1 mark)",
              "c = 42° (1 mark)",
              "Ray meets sloping face at 45° (1 mark)",
              "45° > 42° critical angle, so TIR occurs (1 mark)",
              "All light reflected / turned 90° (1 mark)",
              "Advantage: brighter image / no light lost / no tarnishing (1 mark)",
            ],
            commonError: "Claiming the prism works by ordinary reflection or refraction — it specifically relies on the 45° angle exceeding the critical angle, giving TIR.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "challenge",
            hints: [
              "Find the critical angle from sin c = 1/n.",
              "The ray hits the sloping face at 45° inside the glass.",
              "Compare 45° with the critical angle.",
              "Because 45° > 42°, the ray is totally internally reflected.",
            ],
            solutions: [
              {
                label: "Critical angle and prism behaviour",
                steps: [
                  "sin c = 1/n = 1/1.50 = 0.6667",
                  "c = arcsin(0.6667) = 41.8° ≈ 42°",
                  "Ray meets sloping face at 45°; since 45° > 42°, TIR occurs and the beam turns 90°.",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq3-09",
            question: "A ray of light travels inside a glass block (n = 1.50) and reaches the boundary with air.\n(a) Calculate the critical angle. [2]\n(b) The ray strikes the boundary at an angle of incidence of 35°. Calculate the angle of refraction in the air. [3]\n(c) The ray now strikes a different part of the boundary at 48°. State what happens, and justify your answer. [2]",
            marks: 7,
            modelAnswer: "(a) sin c = 1/n = 1/1.50 = 0.6667. c = arcsin(0.6667) = 41.8° ≈ 42°.\n(b) Going from glass to air, n = sin r / sin i where r is the angle in air (the light bends away from the normal). So sin r = n × sin i = 1.50 × sin 35° = 1.50 × 0.5736 = 0.8604. r = arcsin(0.8604) = 59.4° ≈ 59°. (Since 35° < 42° critical angle, the ray does refract out.)\n(c) 48° is greater than the critical angle of 42°, so total internal reflection occurs — the ray is reflected back into the glass and no light passes into the air.",
            markScheme: [
              "sin c = 1/1.50 = 0.667 → c = 42° (1 mark each, 2 total)",
              "Recognises light bends away from normal: sin r = n sin i / uses glass-to-air form (1 mark)",
              "sin r = 1.50 × sin 35° = 0.860 (1 mark)",
              "r = 59° (accept 59°–60°) (1 mark)",
              "At 48°: 48° > 42° so total internal reflection (1 mark)",
              "Justification: angle of incidence exceeds the critical angle (1 mark)",
            ],
            commonError: "Using n = sin i / sin r the wrong way round when going from glass to air — here the larger angle is in the air, so sin r = n sin i.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "challenge",
            hints: [
              "Find the critical angle first with sin c = 1/n.",
              "Going glass-to-air, the ray bends away from the normal; sin r = n × sin i.",
              "Check 35° is below the critical angle so refraction does happen.",
              "At 48°, compare with the critical angle to decide on TIR.",
            ],
            solutions: [
              {
                label: "Critical angle, refraction out, and TIR",
                steps: [
                  "sin c = 1/1.50 = 0.6667 → c = 41.8° ≈ 42°",
                  "Glass to air at 35°: sin r = n sin i = 1.50 × sin 35° = 1.50 × 0.5736 = 0.8604",
                  "r = arcsin(0.8604) = 59.4° ≈ 59°",
                  "At 48° > 42°, total internal reflection occurs (no refracted ray).",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq3-10",
            question: "Light of frequency 5.0 × 10¹⁴ Hz passes from air into a glass block of refractive index 1.50.\n(a) Calculate the speed of the light in the glass. (c = 3.0 × 10⁸ m/s) [2]\n(b) Calculate the wavelength of the light in the air and in the glass. [3]\n(c) The ray strikes the inner surface of the glass at 50°. The critical angle is about 42°. State and explain what happens, and describe what happens to the wavelength of the light if it were to escape into the air. [2]",
            marks: 7,
            modelAnswer: "(a) v = c/n = (3.0 × 10⁸) / 1.50 = 2.0 × 10⁸ m/s\n(b) In air: λ = c/f = (3.0 × 10⁸) / (5.0 × 10¹⁴) = 6.0 × 10⁻⁷ m. In glass: λ = v/f = (2.0 × 10⁸) / (5.0 × 10¹⁴) = 4.0 × 10⁻⁷ m.\n(c) Since 50° > 42° (the critical angle), total internal reflection occurs and the light does not escape into the air. If it did escape, the wavelength would increase back to the air value (6.0 × 10⁻⁷ m) because the light speeds up again while its frequency stays constant.",
            markScheme: [
              "v = c/n = 3.0 × 10⁸ / 1.50 = 2.0 × 10⁸ m/s (1 mark each: method and answer)",
              "λ_air = c/f = 6.0 × 10⁻⁷ m (1 mark)",
              "λ_glass = v/f = 4.0 × 10⁻⁷ m (1 mark)",
              "Both wavelengths correct (1 mark)",
              "50° > 42° → total internal reflection (1 mark)",
              "If escaping, wavelength increases (back to 6.0 × 10⁻⁷ m) as speed rises and f is constant (1 mark)",
            ],
            commonError: "Saying the frequency changes between media — frequency is constant; it is the speed and wavelength that change.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "challenge",
            hints: [
              "Use v = c/n for the speed in glass.",
              "Use λ = v/f separately in air and in glass, keeping f constant.",
              "Compare 50° with the critical angle of 42° for part (c).",
              "When light speeds up at the same frequency, its wavelength increases.",
            ],
            solutions: [
              {
                label: "Speed, wavelengths, and TIR",
                steps: [
                  "v = c/n = (3.0 × 10^8) / 1.50 = 2.0 × 10^8 m/s",
                  "λ_air = c/f = (3.0 × 10^8) / (5.0 × 10^14) = 6.0 × 10^-7 m",
                  "λ_glass = v/f = (2.0 × 10^8) / (5.0 × 10^14) = 4.0 × 10^-7 m",
                  "50° > 42° critical angle → total internal reflection; if it escaped, λ would rise back to 6.0 × 10^-7 m.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-waves-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Converging lenses, ray diagrams, magnification and dispersion.",
        questions: [
          {
            id: "phys-waves-bq4-01",
            question: "(a) Describe what a converging (convex) lens does to rays of light that are parallel to its principal axis. [1]\n(b) Define the focal length of a lens. [1]\n(c) State which has the shorter focal length: a more powerful lens or a less powerful lens. [1]",
            marks: 3,
            modelAnswer: "(a) It refracts them so that they converge (meet) at the principal focus F.\n(b) The focal length is the distance from the optical centre of the lens to the principal focus.\n(c) A more powerful lens has the shorter focal length.",
            markScheme: [
              "Parallel rays converge at the principal focus F (1 mark)",
              "Focal length = distance from optical centre to principal focus (1 mark)",
              "More powerful lens has shorter focal length (1 mark)",
            ],
            commonError: "Confusing focal length with object or image distance — focal length is fixed for a given lens.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bq4-02",
            question: "(a) State the three standard rays used to construct a ray diagram for a converging lens. [3]\n(b) State what is meant by a real image. [1]",
            marks: 4,
            modelAnswer: "(a) (1) A ray parallel to the principal axis, which refracts through the principal focus F on the far side. (2) A ray through the optical centre, which passes straight through undeviated. (3) A ray through the principal focus on the object side, which emerges parallel to the principal axis.\n(b) A real image is one formed where light rays actually meet (converge); it can be projected onto a screen.",
            markScheme: [
              "Parallel ray → through F (1 mark)",
              "Ray through centre → undeviated (1 mark)",
              "Ray through F → emerges parallel to axis (1 mark)",
              "Real image = rays actually meet / can be shown on a screen (1 mark)",
            ],
            commonError: "Saying the ray through the optical centre bends — it passes straight through without deviation.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bq4-03",
            question: "An object 3.0 cm tall produces an image 9.0 cm tall in a converging lens.\n(a) Calculate the magnification. [2]\n(b) The object is 4.0 cm from the lens. Calculate the image distance, using magnification = image distance / object distance. [2]",
            marks: 4,
            modelAnswer: "(a) Magnification = image height / object height = 9.0 / 3.0 = 3.0 (no unit).\n(b) magnification = image distance / object distance, so image distance = magnification × object distance = 3.0 × 4.0 = 12 cm.",
            markScheme: [
              "Magnification = 9.0/3.0 (1 mark)",
              "= 3.0 with no unit (1 mark)",
              "image distance = 3.0 × 4.0 (1 mark)",
              "= 12 cm (1 mark)",
            ],
            commonError: "Writing a unit on the magnification — it is a pure ratio with no unit.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "Magnification = image height / object height.",
              "Magnification also equals image distance / object distance.",
              "Rearrange to find image distance = magnification × object distance.",
            ],
            solutions: [
              {
                label: "Magnification and image distance",
                steps: [
                  "Magnification = image height / object height = 9.0 / 3.0 = 3.0",
                  "image distance = magnification × object distance = 3.0 × 4.0 cm = 12 cm",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq4-04",
            question: "A converging lens has a focal length of 10 cm. An object is placed 25 cm from the lens.\n(a) State whether the object is inside F, between F and 2F, or beyond 2F. [1]\n(b) Describe the nature of the image (real/virtual, upright/inverted, magnified/diminished). [3]\n(c) State one device that uses a converging lens in this way. [1]",
            marks: 5,
            modelAnswer: "(a) 2F = 20 cm, so the object at 25 cm is beyond 2F.\n(b) The image is real, inverted and diminished (smaller than the object). It forms between F and 2F on the opposite side of the lens.\n(c) A camera (or the eye) forms a real, diminished, inverted image of a distant object in this way.",
            markScheme: [
              "Object beyond 2F (since 2F = 20 cm) (1 mark)",
              "Real (1 mark)",
              "Inverted (1 mark)",
              "Diminished (1 mark)",
              "Device: camera / eye / projector-with-distant-object (1 mark)",
            ],
            commonError: "Forgetting to compare the object distance with 2F (= twice the focal length), not just with F.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "Work out 2F = 2 × focal length.",
              "Compare the 25 cm object distance with both F and 2F.",
              "Object beyond 2F gives a real, inverted, diminished image.",
            ],
          },
          {
            id: "phys-waves-bq4-05",
            question: "A magnifying glass is a converging lens of focal length 8.0 cm. A stamp is placed 5.0 cm from the lens.\n(a) State whether the image is real or virtual, and upright or inverted. Explain your reasoning. [3]\n(b) The image is found to be 13.3 cm from the lens. Calculate the magnification. [2]",
            marks: 5,
            modelAnswer: "(a) The object distance (5.0 cm) is less than the focal length (8.0 cm), so the object is inside F. The lens therefore acts as a magnifying glass and produces a virtual, upright image on the same side as the object.\n(b) Magnification = image distance / object distance = 13.3 / 5.0 = 2.66 ≈ 2.7 (no unit).",
            markScheme: [
              "Object inside F (5.0 cm < 8.0 cm) (1 mark)",
              "Virtual (1 mark)",
              "Upright (1 mark)",
              "Magnification = 13.3/5.0 (1 mark)",
              "= 2.7 (accept 2.6–2.7), no unit (1 mark)",
            ],
            commonError: "Saying the magnifying-glass image is real and inverted — an object inside F always gives a virtual, upright, magnified image.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "Compare the object distance (5.0 cm) with the focal length (8.0 cm).",
              "An object inside F gives a virtual, upright, magnified image.",
              "Magnification = image distance / object distance.",
            ],
            solutions: [
              {
                label: "Magnifying-glass magnification",
                steps: [
                  "Object distance 5.0 cm < focal length 8.0 cm, so object is inside F (virtual, upright image).",
                  "Magnification = image distance / object distance = 13.3 / 5.0 = 2.66 ≈ 2.7",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq4-06",
            question: "Describe an experiment to determine the focal length of a converging lens using a distant object. Include the apparatus, the method, and how the focal length is obtained. [5]",
            marks: 5,
            modelAnswer: "Apparatus: the converging lens in a holder, a white screen, a metre rule, and a distant bright object such as a window or a lamp several metres away. Method: point the lens toward the distant object so that the rays arriving are effectively parallel. Move the screen on the other side of the lens until a sharp, clear image of the distant object appears on it. Measure the distance from the centre of the lens to the screen with the metre rule. Because the object is effectively at infinity, parallel rays converge at the principal focus, so this lens-to-screen distance is the focal length. Repeat and average for reliability.",
            markScheme: [
              "Apparatus: lens + screen + metre rule (1 mark)",
              "Use a distant object so rays are parallel (1 mark)",
              "Move screen until image is sharp (1 mark)",
              "Measure lens-to-screen distance = focal length (1 mark)",
              "Repeat and average for reliability (1 mark)",
            ],
            commonError: "Saying you look through the lens at the object — the real image of a distant object must be caught on a screen.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "A distant object gives nearly parallel rays.",
              "Parallel rays converge at the focal point.",
              "Catch the sharp image on a screen and measure the lens-to-screen distance.",
            ],
          },
          {
            id: "phys-waves-bq4-07",
            question: "White light is passed through a triangular glass prism and a spectrum appears on a screen.\n(a) Name the process that produces the spectrum. [1]\n(b) State the colour deviated the most and the colour deviated the least. [2]\n(c) Explain, in terms of speed and refractive index, why the prism separates the colours. [3]",
            marks: 6,
            modelAnswer: "(a) Dispersion.\n(b) Violet is deviated the most; red is deviated the least.\n(c) White light is a mixture of colours of different wavelengths. Each colour travels at a slightly different speed in the glass: violet (shortest wavelength) travels slowest and has the highest refractive index, while red (longest wavelength) travels fastest and has the lowest refractive index. Since the amount of refraction depends on the refractive index (n = sin i / sin r), the colours are refracted by different amounts and so spread out into a spectrum.",
            markScheme: [
              "Dispersion (1 mark)",
              "Violet deviated most (1 mark)",
              "Red deviated least (1 mark)",
              "Different colours have different speeds / refractive indices in glass (1 mark)",
              "Violet highest n / slowest; red lowest n / fastest (1 mark)",
              "Different n means different refraction, so colours spread out (1 mark)",
            ],
            commonError: "Confusing dispersion (the spreading of colours) with simple refraction (the bending) — dispersion is the difference in bending between colours.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "The process that splits white light is dispersion.",
              "Violet bends most; red bends least.",
              "Different colours have different speeds and refractive indices in glass.",
              "More refraction for higher n means the colours separate.",
            ],
          },
          {
            id: "phys-waves-bq4-08",
            question: "An object 2.0 cm tall is placed 30 cm from a converging lens of focal length 10 cm. The real image forms 15 cm from the lens.\n(a) Calculate the magnification of the image. [2]\n(b) Calculate the height of the image. [2]\n(c) State two properties of this image other than its size. [2]",
            marks: 6,
            modelAnswer: "(a) Magnification = image distance / object distance = 15 / 30 = 0.50 (no unit).\n(b) image height = magnification × object height = 0.50 × 2.0 = 1.0 cm.\n(c) The image is real and inverted. (It is also on the opposite side of the lens from the object.)",
            markScheme: [
              "Magnification = 15/30 (1 mark)",
              "= 0.50 (1 mark)",
              "image height = 0.50 × 2.0 (1 mark)",
              "= 1.0 cm (1 mark)",
              "Real (1 mark)",
              "Inverted (1 mark)",
            ],
            commonError: "Treating magnification less than 1 as an error — a magnification below 1 simply means the image is diminished (smaller than the object).",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "Magnification = image distance / object distance.",
              "A magnification less than 1 means a diminished image.",
              "image height = magnification × object height.",
            ],
            solutions: [
              {
                label: "Magnification and image height",
                steps: [
                  "Magnification = image distance / object distance = 15 / 30 = 0.50",
                  "image height = magnification × object height = 0.50 × 2.0 cm = 1.0 cm",
                  "Object beyond 2F → real, inverted, diminished image.",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq4-09",
            question: "A slide projector uses a converging lens of focal length 12 cm. A slide (the object) 2.0 cm tall is placed 16 cm from the lens, and a sharp image forms on a screen 48 cm from the lens.\n(a) State whether the slide is between F and 2F or beyond 2F, and hence predict the nature of the image. [2]\n(b) Calculate the magnification. [2]\n(c) Calculate the height of the image on the screen. [2]\n(d) Explain why the slide must be put into the projector upside down. [1]",
            marks: 7,
            modelAnswer: "(a) F = 12 cm and 2F = 24 cm, so the slide at 16 cm is between F and 2F. The image is therefore real, inverted and magnified, formed beyond 2F on the far side.\n(b) Magnification = image distance / object distance = 48 / 16 = 3.0 (no unit).\n(c) image height = magnification × object height = 3.0 × 2.0 = 6.0 cm.\n(d) The lens produces an inverted image, so to make the picture appear upright on the screen the slide must be inserted upside down (and reversed), so that the inversion turns it the right way up.",
            markScheme: [
              "Slide between F (12 cm) and 2F (24 cm) (1 mark)",
              "Image real, inverted, magnified (1 mark)",
              "Magnification = 48/16 = 3.0 (1 mark)",
              "States no unit / correct value (1 mark)",
              "image height = 3.0 × 2.0 (1 mark)",
              "= 6.0 cm (1 mark)",
              "Slide inverted because the lens inverts the image / to get an upright picture (1 mark)",
            ],
            commonError: "Computing magnification from distances but then forgetting to multiply by the object height to get the image height.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "challenge",
            hints: [
              "Find F and 2F, then place the 16 cm object between them.",
              "An object between F and 2F gives a real, inverted, magnified image.",
              "Magnification = image distance / object distance = 48/16.",
              "image height = magnification × object height.",
            ],
            solutions: [
              {
                label: "Projector magnification and image height",
                steps: [
                  "F = 12 cm, 2F = 24 cm; object at 16 cm is between F and 2F → real, inverted, magnified.",
                  "Magnification = image distance / object distance = 48 / 16 = 3.0",
                  "image height = magnification × object height = 3.0 × 2.0 cm = 6.0 cm",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bq4-10",
            question: "A camera uses a converging lens of focal length 5.0 cm to photograph a tree 12 m tall standing 30 m away.\n(a) The image distance is approximately equal to the focal length (5.0 cm) because the object is very far away. Calculate the magnification. [2]\n(b) Calculate the height of the image of the tree on the sensor. [2]\n(c) State and explain the nature of the image formed on the camera sensor. [3]",
            marks: 7,
            modelAnswer: "(a) Convert to consistent units: object distance = 30 m = 3000 cm, image distance = 5.0 cm. Magnification = image distance / object distance = 5.0 / 3000 = 1.67 × 10⁻³ (no unit).\n(b) Object height = 12 m = 1200 cm. image height = magnification × object height = 1.67 × 10⁻³ × 1200 = 2.0 cm. (Equivalently 1.67 × 10⁻³ × 12 m = 0.020 m = 2.0 cm.)\n(c) The image is real (it forms on the sensor, where the rays actually meet), inverted, and greatly diminished (the 12 m tree becomes a 2.0 cm image). A converging lens forms a real, inverted image of a distant object beyond F.",
            markScheme: [
              "Consistent units used (object 3000 cm or 30 m, image 5.0 cm or 0.05 m) (1 mark)",
              "Magnification = 5.0/3000 = 1.67 × 10⁻³ (1 mark)",
              "image height = magnification × object height (1 mark)",
              "= 2.0 cm / 0.020 m (1 mark)",
              "Real (1 mark)",
              "Inverted (1 mark)",
              "Diminished, with reasoning (1 mark)",
            ],
            commonError: "Mixing metres and centimetres in the magnification ratio — both distances must be in the same unit before dividing.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "challenge",
            hints: [
              "Convert all distances to the same unit first.",
              "Magnification = image distance / object distance.",
              "image height = magnification × object height (use matching units).",
              "A distant object through a converging lens gives a real, inverted, diminished image.",
            ],
            solutions: [
              {
                label: "Camera magnification and image height",
                steps: [
                  "Object distance = 30 m = 3000 cm; image distance = 5.0 cm.",
                  "Magnification = 5.0 / 3000 = 1.67 × 10^-3",
                  "image height = magnification × object height = 1.67 × 10^-3 × 1200 cm = 2.0 cm",
                  "Image is real, inverted and greatly diminished.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
