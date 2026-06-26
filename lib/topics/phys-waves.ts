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
        title: "Waves & Light — MCQ Paper 1",
        description: "Six multiple-choice questions covering wave properties, wave equation, and reflection.",
        questions: [
          {
            id: "phys-waves-bank-mcq1-q01",
            question: "Which row correctly describes the features of a transverse wave?",
            options: [
              "Oscillation parallel to travel; has compressions and rarefactions",
              "Oscillation perpendicular to travel; has compressions and rarefactions",
              "Oscillation parallel to travel; has crests and troughs",
              "Oscillation perpendicular to travel; has crests and troughs",
            ],
            answerIndex: 3,
            explanation: "Transverse waves oscillate perpendicular to the direction of travel and show crests and troughs. Compressions and rarefactions are features of longitudinal waves.",
            guideRef: "Describing Waves",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bank-mcq1-q02",
            question: "A sound wave has a frequency of 680 Hz and a speed of 340 m/s. What is its wavelength?",
            options: ["0.25 m", "0.50 m", "2.0 m", "231 000 m"],
            answerIndex: 1,
            explanation: "λ = v/f = 340/680 = 0.50 m. Option A results from halving the correct answer incorrectly; option C inverts the fraction.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bank-mcq1-q03",
            question: "A wave has period 0.04 s. What is its frequency?",
            options: ["0.04 Hz", "4 Hz", "25 Hz", "40 Hz"],
            answerIndex: 2,
            explanation: "f = 1/T = 1/0.04 = 25 Hz. A common error is reading T as f; another is forgetting to invert.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bank-mcq1-q04",
            question: "The amplitude of a water wave doubles. Which statement is correct?",
            options: [
              "The frequency doubles",
              "The wavelength doubles",
              "The energy carried by the wave quadruples",
              "The wave speed doubles",
            ],
            answerIndex: 2,
            explanation: "Energy carried by a wave is proportional to amplitude squared (E ∝ A²). If A doubles, E increases by a factor of 4. Speed, frequency, and wavelength are independent of amplitude.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "core",
            hints: [
              "Recall the relationship between energy and amplitude.",
              "E ∝ A² — what happens when A is multiplied by 2?",
            ],
          },
          {
            id: "phys-waves-bank-mcq1-q05",
            question: "A ray hits a plane mirror at 20° to the normal. The mirror is then tilted by 10° without moving the incident ray. What is the new angle between the incident and reflected rays?",
            options: ["20°", "40°", "60°", "80°"],
            answerIndex: 2,
            explanation: "Originally: angle of incidence = 20°, angle of reflection = 20°, total between rays = 40°. After tilting the mirror by 10°, the normal tilts by 10°, so the new angle of incidence = 30°, angle of reflection = 30°, and the angle between incident and reflected rays = 60°.",
            guideRef: "Reflection of Light",
            difficulty: "challenge",
            hints: [
              "The angle between incident and reflected rays = 2 × angle of incidence.",
              "Tilting the mirror by 10° changes the normal by 10°.",
              "If the normal tilts, the angle of incidence changes by 10°.",
              "New angle of incidence = 30°, so new angle between rays = 2 × 30° = 60°.",
            ],
            strategy: "track the normal, not the surface",
          },
          {
            id: "phys-waves-bank-mcq1-q06",
            question: "Which property of light changes when it passes from air into glass?",
            options: [
              "Frequency only",
              "Speed and wavelength only",
              "Speed, wavelength, and frequency",
              "Wavelength only",
            ],
            answerIndex: 1,
            explanation: "When light crosses from air into glass, its speed decreases and its wavelength decreases proportionally (v = fλ, f is constant). Frequency is set by the source and does NOT change at the boundary.",
            guideRef: "Refraction and Refractive Index",
            difficulty: "core",
            hints: [
              "The source determines the frequency — does the boundary change the source?",
              "If speed decreases and frequency stays constant, what must happen to wavelength?",
            ],
          },
        ],
      },
      {
        id: "phys-waves-bank-mcq-2",
        title: "Waves & Light — MCQ Paper 2",
        description: "Six multiple-choice questions covering refraction, TIR, lenses, and dispersion.",
        questions: [
          {
            id: "phys-waves-bank-mcq2-q01",
            question: "A ray in air hits a glass surface at i = 30°. The glass has n = 1.5. What is the angle of refraction?",
            options: ["19.5°", "20°", "30°", "48.6°"],
            answerIndex: 0,
            explanation: "n = sin i / sin r → sin r = sin 30° / 1.5 = 0.5/1.5 = 0.3333 → r = arcsin(0.3333) ≈ 19.5°. The ray bends toward the normal because it is entering a denser medium.",
            guideRef: "Refraction and Refractive Index",
            difficulty: "core",
            hints: [
              "Rearrange n = sin i / sin r to make sin r the subject.",
              "sin r = sin i / n = sin 30° / 1.5.",
              "sin 30° = 0.5, so sin r = 0.5/1.5 = 0.333.",
            ],
          },
          {
            id: "phys-waves-bank-mcq2-q02",
            question: "The refractive index of diamond is 2.42. What is its critical angle (to the nearest degree)?",
            options: ["24°", "28°", "42°", "66°"],
            answerIndex: 0,
            explanation: "sin c = 1/n = 1/2.42 = 0.4132 → c = arcsin(0.4132) ≈ 24.4° ≈ 24°. Diamond's very high refractive index gives it a very small critical angle, which is why it sparkles so brilliantly — light undergoes TIR over a wide range of angles.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "core",
            hints: [
              "Use sin c = 1/n.",
              "1/2.42 ≈ 0.413.",
              "Find arcsin(0.413).",
            ],
          },
          {
            id: "phys-waves-bank-mcq2-q03",
            question: "An object is placed 30 cm from a converging lens of focal length 10 cm. Which describes the image?",
            options: [
              "Virtual, upright, magnified — formed 15 cm from lens on same side as object",
              "Real, inverted, diminished — formed 15 cm from lens on opposite side",
              "Real, inverted, same size — formed 20 cm from lens on opposite side",
              "Virtual, upright, same size — formed 30 cm from lens on same side as object",
            ],
            answerIndex: 1,
            explanation: "Object at 30 cm = 3f (beyond 2F = 20 cm). Using the lens formula: 1/v − 1/u is not required at IGCSE, but from ray diagram rules — object beyond 2F gives a real, inverted, diminished image between F and 2F on the far side. The image forms at 15 cm (between F = 10 cm and 2F = 20 cm).",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "Compare object distance (30 cm) with 2F (20 cm) and F (10 cm).",
              "Object beyond 2F → image between F and 2F on opposite side.",
              "Object beyond 2F always gives a diminished real image.",
            ],
          },
          {
            id: "phys-waves-bank-mcq2-q04",
            question: "Light travels from water (n = 1.33) into glass (n = 1.5). Which statement is correct?",
            options: [
              "Light speeds up and bends away from the normal",
              "Light slows down and bends toward the normal",
              "Total internal reflection can occur in the water",
              "No refraction occurs because both media are transparent",
            ],
            answerIndex: 1,
            explanation: "Glass is optically denser than water (n_glass > n_water). Light entering a denser medium slows down and bends toward the normal. TIR can only occur in the denser medium (glass) when light tries to exit to a less dense medium, not going from water to glass.",
            guideRef: "Refraction and Refractive Index",
            difficulty: "core",
            hints: [
              "Compare the refractive indices: which medium is denser?",
              "Light entering a denser medium slows and bends toward the normal.",
            ],
          },
          {
            id: "phys-waves-bank-mcq2-q05",
            question: "A student sets up a ray box, a glass prism, and a screen. White light enters one face of the prism and exits another. Which observation is correct?",
            options: [
              "Red light is deviated most; violet light is deviated least",
              "All colours exit at the same angle because they have the same speed in glass",
              "Violet light is deviated most; red light is deviated least",
              "The prism reflects the light back by total internal reflection",
            ],
            answerIndex: 2,
            explanation: "Dispersion: shorter wavelengths (violet) have a higher refractive index in glass and are thus refracted (deviated) more. Red light (longest visible wavelength) is deviated least. This produces the visible spectrum ROYGBIV.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "warmup",
          },
          {
            id: "phys-waves-bank-mcq2-q06",
            question: "An image formed by a converging lens has a height of 4 cm while the object has a height of 1.5 cm. What is the magnification, and is the image real or virtual?",
            options: [
              "Magnification = 2.67; real image",
              "Magnification = 2.67; could be real or virtual without more information",
              "Magnification = 0.375; real image",
              "Magnification = 2.67; virtual image because magnification > 1",
            ],
            answerIndex: 1,
            explanation: "Magnification = image height / object height = 4/1.5 = 2.67. A magnification greater than 1 means the image is larger than the object, but this is possible for BOTH a real magnified image (object between F and 2F) and a virtual image (object inside F — magnifying glass). Without knowing the object distance relative to F, we cannot determine real/virtual from magnification alone.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "challenge",
            hints: [
              "Calculate magnification straightforwardly: image height / object height.",
              "Think: can a real image be magnified? (Yes, when object is between F and 2F.)",
              "Think: is a virtual image always magnified? (Yes, for a converging lens.) So both cases give m > 1.",
              "You need object distance relative to F to distinguish real from virtual.",
            ],
            strategy: "consider all cases before choosing an answer",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "phys-waves-bank-qa-1",
        title: "Waves & Light — Structured Questions Paper 1",
        description: "Four structured questions focusing on wave properties, reflection, and refraction calculations.",
        questions: [
          {
            id: "phys-waves-bank-qa1-q01",
            question: "A teacher makes waves on a long spring by shaking one end.\n(a) State whether the waves on a spring (shaken sideways) are transverse or longitudinal. [1]\n(b) The teacher observes that 6 complete waves are produced per second, and adjacent crests are 0.40 m apart. Calculate the wave speed. [2]\n(c) The teacher doubles the shaking frequency while keeping the spring the same. State and explain what happens to: (i) the wavelength, (ii) the amplitude. [3]",
            marks: 6,
            modelAnswer: "(a) Transverse — the spring oscillates sideways (perpendicular) to the direction of wave travel.\n(b) v = fλ = 6 × 0.40 = 2.4 m/s\n(c)(i) The wavelength halves. Speed in the spring is constant (determined by tension and mass per unit length, not frequency). Since v = fλ, if f doubles and v stays constant, λ must halve.\n(c)(ii) The amplitude does not change automatically — it depends on the energy the teacher puts in with each shake. Frequency and amplitude are independent; the teacher could keep the amplitude the same or change it. (Accept: amplitude is unchanged if the teacher keeps shaking with the same vigour.)",
            markScheme: [
              "Transverse (1 mark)",
              "v = 6 × 0.40 (1 mark for correct substitution)",
              "v = 2.4 m/s with unit (1 mark)",
              "(i) Wavelength halves (1 mark) because v = fλ / speed is constant / v is fixed by the medium (1 mark)",
              "(ii) Amplitude unchanged / depends only on how hard teacher shakes, not frequency (1 mark)",
            ],
            commonError: "Saying the wave speed doubles when frequency doubles — wave speed is a property of the medium, not the source.",
            guideRef: "Wave Quantities and the Wave Equation",
            difficulty: "core",
            hints: [
              "Use v = fλ for part (b).",
              "For (c)(i): wave speed in the spring is determined by the spring, not by how fast you shake.",
              "If v is fixed and f doubles, what must happen to λ from v = fλ?",
              "Amplitude and frequency are independent quantities.",
            ],
          },
          {
            id: "phys-waves-bank-qa1-q02",
            question: "A student investigates reflection using a ray box and plane mirror.\n(a) The student directs a ray at the mirror, measuring the angle between the ray and the mirror surface as 62°. Calculate the angle of reflection. [2]\n(b) Describe four properties of the image formed in a plane mirror. [4]\n(c) The student moves the object 3 cm closer to the mirror. State and explain how the image distance changes. [2]",
            marks: 8,
            modelAnswer: "(a) Angle of incidence from normal = 90° − 62° = 28°. By the law of reflection, angle of reflection = 28°.\n(b) The image is: virtual (no light actually passes through the image position); upright (same orientation as object); laterally inverted (left-right reversed); same size as the object; located as far behind the mirror as the object is in front.\n(c) The image moves 3 cm further from the mirror (now 3 cm deeper behind it). The image in a plane mirror is always as far behind the mirror as the object is in front — so any change in object distance produces an equal change in image distance.",
            markScheme: [
              "Angle of incidence = 90° − 62° = 28° (1 mark for method)",
              "Angle of reflection = 28° (1 mark, angle of incidence = angle of reflection stated or implied)",
              "Virtual (1 mark)",
              "Upright (1 mark)",
              "Laterally inverted / left-right reversed (1 mark)",
              "Same size / image distance = object distance (1 mark — accept this as the fourth property)",
              "Image moves 3 cm further behind mirror (1 mark)",
              "Image distance always equals object distance for plane mirror (1 mark)",
            ],
            commonError: "Measuring angles from the surface instead of the normal — giving 62° instead of 28°.",
            guideRef: "Reflection of Light",
            difficulty: "core",
            hints: [
              "The angle in optics is always from the normal (the perpendicular to the surface).",
              "If the ray makes 62° with the surface, what angle does it make with the normal?",
              "For the image distance: in a plane mirror, image distance = object distance always.",
            ],
          },
          {
            id: "phys-waves-bank-qa1-q03",
            question: "Light travels from air into a rectangular glass block (n = 1.60) at an angle of incidence of 55°.\n(a) Calculate the angle of refraction as light enters the glass. Show your working. [3]\n(b) Calculate the critical angle for this glass. [2]\n(c) The light hits the bottom face of the block from inside. State the condition needed for total internal reflection, and explain whether it occurs if the angle of incidence at the bottom face is 38°. [3]",
            marks: 8,
            modelAnswer: "(a) n = sin i / sin r\n1.60 = sin 55° / sin r\nsin r = sin 55° / 1.60 = 0.8192 / 1.60 = 0.5120\nr = arcsin(0.5120) = 30.8° ≈ 31°\n(b) sin c = 1/n = 1/1.60 = 0.625\nc = arcsin(0.625) = 38.7° ≈ 39°\n(c) For TIR: light must be in the denser medium trying to enter the less dense medium, AND the angle of incidence must exceed the critical angle. Here, angle at bottom face = 38°, critical angle ≈ 39°. Since 38° < 39°, total internal reflection does NOT occur — the light refracts and exits the glass (though only just, as the angle is very close to the critical angle).",
            markScheme: [
              "Correct use of n = sin i / sin r, rearranged to sin r = sin i / n (1 mark)",
              "sin r = sin 55° / 1.60 = 0.512 (1 mark)",
              "r = 30.8° (accept 30°–31°) (1 mark)",
              "sin c = 1/1.60 = 0.625 (1 mark)",
              "c = 38.7° (accept 38°–39°) (1 mark)",
              "Condition stated: i must exceed the critical angle / i > c (1 mark)",
              "38° < critical angle (38.7°) so TIR does NOT occur (1 mark)",
              "Light refracts/exits at the boundary (1 mark)",
            ],
            commonError: "In (c): incorrectly concluding TIR occurs because 38° is 'close to' the critical angle. The comparison must be strict: i must be GREATER THAN c.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "challenge",
            hints: [
              "For (a): rearrange n = sin i / sin r to make sin r the subject.",
              "For (b): set r = 90° (sin r = 1) in Snell's law.",
              "For (c): calculate the critical angle first, then compare 38° with it — which is larger?",
              "TIR requires BOTH: correct direction (dense to less dense) AND i > c.",
            ],
            solutions: [
              {
                label: "Full calculation sequence",
                steps: [
                  "sin r = sin 55° / 1.60 = 0.8192 / 1.60 = 0.5120 → r = 30.8°",
                  "sin c = 1/n = 1/1.60 = 0.625 → c = 38.7°",
                  "38° < 38.7° → TIR does NOT occur; light refracts and exits.",
                ],
              },
            ],
          },
          {
            id: "phys-waves-bank-qa1-q04",
            question: "(Challenge) An optical fibre made of glass (n = 1.55) is surrounded by a cladding material (n = 1.45).\n(a) Explain why cladding with a lower refractive index (rather than air) is used around the fibre. [2]\n(b) Calculate the critical angle for the glass-cladding boundary. Use n_relative = n_glass / n_cladding. [3]\n(c) A signal is sent through the fibre as pulses of infrared light of frequency 2.3 × 10¹⁴ Hz. The speed of light in the glass fibre is 1.94 × 10⁸ m/s. Calculate the wavelength of the infrared in the fibre. [2]",
            marks: 7,
            modelAnswer: "(a) The cladding still allows TIR (since n_cladding < n_glass), but prevents light from leaking between adjacent fibres if they touch — bare fibres touching would allow light to cross at that contact point. The cladding also provides mechanical protection.\n(b) n_relative = 1.55 / 1.45 = 1.069\nsin c = 1 / n_relative = 1 / 1.069 = 0.9355\nc = arcsin(0.9355) = 69.4° ≈ 69°\n(c) λ = v/f = (1.94 × 10⁸) / (2.3 × 10¹⁴) = 8.43 × 10⁻⁷ m ≈ 843 nm",
            markScheme: [
              "Prevents light leaking/crossing between fibres that touch / maintains TIR while insulating fibres from each other (1 mark)",
              "Mechanical protection (1 mark — accept either of the two points for 2 marks)",
              "n_relative = 1.55/1.45 = 1.069 (1 mark)",
              "sin c = 1/1.069 = 0.9355 → c = 69.4° (accept 69°–70°) (2 marks: 1 for method, 1 for answer)",
              "λ = v/f = 1.94 × 10⁸ / 2.3 × 10¹⁴ (1 mark)",
              "λ = 8.4 × 10⁻⁷ m (accept 8.3–8.5 × 10⁻⁷ m) (1 mark)",
            ],
            commonError: "Using n = 1.55 alone for the critical angle calculation instead of the relative refractive index at the glass-cladding boundary. The critical angle at glass-cladding is larger than at glass-air because the refractive index difference is smaller.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "challenge",
            hints: [
              "TIR at the glass-cladding boundary depends on the relative refractive index between the two materials.",
              "n_relative = n_glass / n_cladding; use this in sin c = 1/n_relative.",
              "A larger n_relative gives a smaller critical angle; a smaller n_relative gives a larger critical angle.",
              "For (c): use λ = v/f with the speed inside the glass (not c in vacuum).",
            ],
            solutions: [
              {
                label: "Critical angle at glass-cladding",
                steps: [
                  "n_relative = n_glass / n_cladding = 1.55 / 1.45 = 1.069",
                  "sin c = 1 / 1.069 = 0.9355",
                  "c = arcsin(0.9355) ≈ 69.4°",
                ],
              },
              {
                label: "Wavelength in fibre",
                steps: [
                  "λ = v / f = (1.94 × 10^8 m/s) / (2.3 × 10^14 Hz)",
                  "λ = 8.43 × 10^-7 m = 843 nm (infrared)",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-waves-bank-qa-2",
        title: "Waves & Light — Structured Questions Paper 2",
        description: "Four structured questions on lenses, ray diagrams, magnification, and synoptic challenges.",
        questions: [
          {
            id: "phys-waves-bank-qa2-q01",
            question: "A converging lens has a focal length of 8 cm.\n(a) An object is placed 20 cm from the lens. Draw a ray diagram (describe the three standard rays and where the image forms) to determine the nature of the image. [4]\n(b) The object is now moved to 5 cm from the lens. State three properties of the new image. [3]\n(c) Calculate the magnification if the image in (b) is found to be 13.3 cm from the lens (same side as the object). [2]",
            marks: 9,
            modelAnswer: "(a) Three standard rays from the top of the object at 20 cm (beyond 2F = 16 cm):\nRay 1: parallel to axis → refracts through F (8 cm on far side).\nRay 2: through optical centre → straight through.\nRay 3: through F on near side → refracts parallel to axis.\nThe three rays converge on the far side of the lens between F (8 cm) and 2F (16 cm). The image is real, inverted, and diminished.\n(b) The object at 5 cm is inside F (8 cm). Image is: virtual, upright, magnified. (Also: formed on same side as object.)\n(c) Magnification = image distance / object distance = 13.3 / 5 = 2.66 ≈ 2.7 (no unit).",
            markScheme: [
              "Ray 1: parallel to axis → through F on far side (1 mark)",
              "Ray 2: through centre → straight (1 mark)",
              "Image correctly located on far side, between F and 2F (1 mark)",
              "Image described as real, inverted, diminished (1 mark)",
              "Virtual (1 mark)",
              "Upright (1 mark)",
              "Magnified (1 mark)",
              "Magnification = 13.3/5 (correct formula and substitution) (1 mark)",
              "= 2.66 (accept 2.6–2.7) no unit (1 mark)",
            ],
            commonError: "In (b): saying the image is inverted when the object is inside F. A magnifying glass always gives an upright virtual image.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "For (a): is 20 cm beyond 2F (=16 cm)? Yes — so expect real, inverted, diminished.",
              "For (b): 5 cm < 8 cm (focal length) — object inside F → magnifying glass.",
              "For (c): magnification = image distance / object distance (no unit).",
            ],
          },
          {
            id: "phys-waves-bank-qa2-q02",
            question: "Describe an experiment to find the focal length of a converging lens using a distant object. Include: the apparatus, the procedure, how you determine the focal length, and one source of error. [6]",
            marks: 6,
            modelAnswer: "Apparatus: converging lens, lens holder, screen (white card), metre rule.\nProcedure: Point the lens toward a distant bright object (e.g. a window or lamp at least 10 m away — light rays are effectively parallel). Move the screen on the far side of the lens until a sharp, clear image of the object appears on the screen. Measure the distance from the optical centre of the lens to the screen.\nDetermining focal length: because the object is effectively at infinity, parallel rays enter the lens and converge at the principal focus F. The distance from lens to the sharp image = focal length.\nRepeat 3 times and calculate a mean for reliability.\nSource of error: difficulty judging when the image is 'sharpest' (leading to an uncertainty in the image position); also, the object may not be truly at infinity so the image distance is slightly greater than the true focal length.",
            markScheme: [
              "Lens + screen identified as apparatus (1 mark)",
              "Uses distant object so rays are approximately parallel (1 mark)",
              "Moves screen to get sharp image (1 mark)",
              "Measures distance from lens to screen = focal length (1 mark)",
              "Repeats and averages (1 mark)",
              "Named source of error: difficulty judging sharpness / object not truly at infinity / parallax in ruler measurement (1 mark)",
            ],
            commonError: "Saying the image is virtual or that you look through the lens — a real image from a distant object forms on a screen.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "core",
            hints: [
              "If the object is very far away, its rays are nearly parallel — what does a converging lens do to parallel rays?",
              "The image of a very distant object forms at the focal point.",
              "How do you find a sharp image on a screen?",
            ],
          },
          {
            id: "phys-waves-bank-qa2-q03",
            question: "White light passes through a glass prism and produces a spectrum on a screen.\n(a) Explain, in terms of refractive index and wave speed, why the prism separates the colours of white light. [3]\n(b) State the order of colours in the spectrum from least deviated to most deviated. [1]\n(c) A student claims: 'If you use a prism made of a material with a higher refractive index, the dispersion will be greater.' Evaluate this claim. [2]",
            marks: 6,
            modelAnswer: "(a) White light is a mixture of colours (wavelengths). Different wavelengths travel at different speeds in glass: violet (short wavelength) travels slowest and has the highest refractive index; red (long wavelength) travels fastest and has the lowest refractive index. Since n = sin i / sin r, different n values mean different angles of refraction — violet is bent most, red least. The colours spread apart, producing a spectrum.\n(b) Red, orange, yellow, green, blue, indigo, violet (red deviated least, violet most).\n(c) The claim is broadly correct. A higher refractive index means each colour is refracted more. More importantly, dispersion depends on how much n varies across the visible spectrum (not just the absolute value of n). A material with high refractive index usually also has greater variation of n with wavelength, so the spread between red and violet increases — greater dispersion. However, this is not guaranteed; the claim should specify 'higher variation of n across wavelengths' for full accuracy.",
            markScheme: [
              "Different colours have different speeds in glass / different refractive indices (1 mark)",
              "Violet has highest n / slowest speed; red has lowest n / fastest speed (1 mark)",
              "Different n → different angle of refraction → colours spread out (1 mark)",
              "ROYGBIV (red to violet) in order from least to most deviated (1 mark)",
              "Claim is broadly correct — higher n leads to greater refraction (1 mark)",
              "Dispersion depends on variation of n with wavelength, not just n alone / nuanced evaluation (1 mark)",
            ],
            commonError: "Confusing 'refraction' (bending) with 'dispersion' (spreading of colours). All colours are refracted; dispersion is the differential refraction.",
            guideRef: "Converging Lenses, Ray Diagrams, and Dispersion",
            difficulty: "challenge",
            hints: [
              "Think: what is different about violet vs red light in glass?",
              "Refractive index n = c/v — if n is higher, what is the speed?",
              "Higher n means more bending. If red and violet have different n values, they bend by different amounts.",
              "For (c): think about what 'dispersion' specifically means — is it just bending, or the DIFFERENCE in bending?",
            ],
          },
          {
            id: "phys-waves-bank-qa2-q04",
            question: "(Challenge — synoptic) A submarine uses a periscope consisting of two 45-45-90° glass prisms (n = 1.5) to let crew members see above the surface of the water.\n(a) Calculate the critical angle for the glass used (n = 1.5). [2]\n(b) Explain, with the aid of a clearly described ray path, how the two prisms allow a person to see objects above the water using total internal reflection. [4]\n(c) The speed of sound in water is 1500 m/s. A sonar pulse of frequency 30 kHz is emitted by the submarine. Calculate: (i) the wavelength of the sonar in water, and (ii) the period of the sonar pulse. [3]",
            marks: 9,
            modelAnswer: "(a) sin c = 1/1.5 = 0.6667 → c = arcsin(0.6667) = 41.8° ≈ 42°\n(b) Light from above the water enters the top face of the upper prism and strikes the sloped face at 45°. Since 45° > 42° (critical angle), total internal reflection occurs and the ray is turned 90° downward. It then exits through the bottom face of the upper prism. The ray enters the top face of the lower prism and again strikes the sloped face at 45°, where TIR turns it 90° again — now horizontal, toward the observer's eye. The overall effect is that the image is shifted downward (periscope effect) without inversion in the vertical plane. (Each TIR acts like a perfect mirror.)\n(c)(i) λ = v/f = 1500 / (30 × 10³) = 1500 / 30 000 = 0.05 m = 5 cm\n(c)(ii) T = 1/f = 1 / (30 × 10³) = 3.3 × 10⁻⁵ s",
            markScheme: [
              "sin c = 1/1.5 = 0.667 (1 mark)",
              "c = 41.8° (accept 41°–42°) (1 mark)",
              "Light hits sloped face of upper prism at 45° (1 mark)",
              "45° > critical angle → TIR occurs / ray turns 90° (1 mark)",
              "Ray enters lower prism and undergoes TIR again (1 mark)",
              "Ray emerges directed toward observer's eye / overall 90° + 90° path described (1 mark)",
              "λ = 1500 / 30 000 = 0.05 m (1 mark)",
              "T = 1 / 30 000 = 3.3 × 10⁻⁵ s (1 mark)",
              "Units correct on both answers (1 mark — accept if both are correct)",
            ],
            commonError: "Confusing refraction with TIR in the prism — the prism works by TIR (all light reflected), not by partial reflection. Also: not converting kHz to Hz before calculating T or λ.",
            guideRef: "Total Internal Reflection and Critical Angle",
            difficulty: "challenge",
            hints: [
              "For (a): sin c = 1/n. What is 1/1.5?",
              "For (b): each sloped face of the 45-45-90 prism is hit at 45° — compare with the critical angle.",
              "Two TIRs, each deflecting 90°: trace the ray step by step.",
              "For (c): convert 30 kHz to Hz first (30 000 Hz), then use λ = v/f and T = 1/f.",
            ],
            solutions: [
              {
                label: "Sonar wavelength and period",
                steps: [
                  "f = 30 kHz = 30 000 Hz",
                  "λ = v/f = 1500 m/s / 30 000 Hz = 0.05 m",
                  "T = 1/f = 1/30 000 = 3.33 × 10^-5 s",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
