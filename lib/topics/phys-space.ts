import type { Topic } from "../types";

export const physSpace: Topic = {
  id: "phys-space",
  title: "Space Physics",
  subject: "physics",
  icon: "🚀",
  blurb: "The Solar System, stellar life cycles, galaxies, and the expanding Universe.",
  intro:
    "From the eight planets orbiting our Sun to the billions of galaxies hurtling apart after the Big Bang, space physics reveals the forces and processes that shape everything on the largest scales. In this topic you will master orbital mechanics, trace the life and death of stars, and examine the evidence that our Universe had a beginning and is still expanding.",

  guide: [
    {
      heading: "The Solar System",
      body:
        "Our Solar System formed about 4.6 billion years ago from a rotating cloud of gas and dust called a **nebula**. As gravity pulled material inward, most of the mass collapsed to form the **Sun**; the remaining disc of material gradually clumped together — a process called **accretion** — to produce the planets, moons, asteroids, and comets.\n\n" +
        "The **Sun** sits at the centre. The eight planets, in order of increasing distance, are:\n" +
        "- Mercury, Venus, Earth, Mars *(rocky, inner planets)*\n" +
        "- Jupiter, Saturn, Uranus, Neptune *(gas/ice giants, outer planets)*\n\n" +
        "Between Mars and Jupiter lies the **asteroid belt**, a region of rocky debris left over from the Solar System's formation. Beyond Neptune lies the outer Solar System, home to dwarf planets and the source of many **comets**.\n\n" +
        "**Moons** are natural satellites that orbit planets; Earth has one, while Jupiter and Saturn each have dozens. **Comets** are icy bodies with highly elliptical orbits that take them far from the Sun, then swing in close — growing a bright tail of gas and dust when heated by the Sun.",
      diagrams: [
        {
          caption: "The Solar System — planets in order from the Sun (not to scale)",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Diagram of the Solar System showing the Sun and eight planets in order">' +
            '<rect width="320" height="200" fill="#0f172a"/>' +
            // Sun
            '<circle cx="22" cy="100" r="18" fill="#fbbf24" opacity="0.95"/>' +
            '<text x="22" y="125" text-anchor="middle" font-size="7" fill="#fbbf24" font-family="sans-serif">Sun</text>' +
            // Orbital lines
            '<line x1="22" y1="100" x2="310" y2="100" stroke="#1e293b" stroke-width="1"/>' +
            // Mercury
            '<circle cx="52" cy="100" r="3" fill="#94a3b8"/>' +
            '<text x="52" y="115" text-anchor="middle" font-size="6" fill="#b7bce0" font-family="sans-serif">Mer</text>' +
            // Venus
            '<circle cx="74" cy="100" r="4" fill="#fde68a"/>' +
            '<text x="74" y="116" text-anchor="middle" font-size="6" fill="#b7bce0" font-family="sans-serif">Ven</text>' +
            // Earth
            '<circle cx="98" cy="100" r="4" fill="#38bdf8"/>' +
            '<text x="98" y="116" text-anchor="middle" font-size="6" fill="#b7bce0" font-family="sans-serif">Ear</text>' +
            // Mars
            '<circle cx="120" cy="100" r="3" fill="#fb7185"/>' +
            '<text x="120" y="115" text-anchor="middle" font-size="6" fill="#b7bce0" font-family="sans-serif">Mar</text>' +
            // Asteroid belt
            '<text x="143" y="104" text-anchor="middle" font-size="5.5" fill="#6b7280" font-family="sans-serif">Belt</text>' +
            // Jupiter
            '<circle cx="175" cy="100" r="9" fill="#d97706"/>' +
            '<text x="175" y="118" text-anchor="middle" font-size="6" fill="#b7bce0" font-family="sans-serif">Jup</text>' +
            // Saturn (with ring)
            '<ellipse cx="213" cy="100" rx="13" ry="4" fill="none" stroke="#a78bfa" stroke-width="1.5" opacity="0.7"/>' +
            '<circle cx="213" cy="100" r="7" fill="#c2b280"/>' +
            '<text x="213" y="118" text-anchor="middle" font-size="6" fill="#b7bce0" font-family="sans-serif">Sat</text>' +
            // Uranus
            '<circle cx="249" cy="100" r="6" fill="#34d399"/>' +
            '<text x="249" y="116" text-anchor="middle" font-size="6" fill="#b7bce0" font-family="sans-serif">Ura</text>' +
            // Neptune
            '<circle cx="281" cy="100" r="6" fill="#38bdf8" opacity="0.7"/>' +
            '<text x="281" y="116" text-anchor="middle" font-size="6" fill="#b7bce0" font-family="sans-serif">Nep</text>' +
            '</svg>',
        },
      ],
      keyPoints: [
        "The Solar System formed by accretion from a rotating nebula ~4.6 billion years ago.",
        "Eight planets orbit the Sun in order: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.",
        "The asteroid belt lies between Mars and Jupiter.",
        "Comets have highly elliptical orbits; they are fastest when closest to the Sun.",
        "Moons are natural satellites of planets; they are held in orbit by gravitational attraction.",
      ],
      discovery: {
        problem:
          "Comets have been observed to speed up dramatically as they approach the Sun. What force could cause this, and why does it act more strongly when the comet is closer?",
        idea:
          "The Sun's gravitational field pulls the comet toward it. Gravity is an inverse-square-law force — it gets stronger as distance decreases. As the comet falls inward it gains kinetic energy (and loses gravitational potential energy), so it moves fastest at its closest point (perihelion) and slowest at its farthest point (aphelion).",
      },
      whyItWorks:
        "Gravity follows an inverse-square law: F = GMm/r². Halving the separation quadruples the gravitational force. As a comet falls sunward, work is done on it by gravity, converting gravitational potential energy to kinetic energy and so increasing speed.",
    },

    {
      heading: "Orbits and Gravitational Force",
      body:
        "Any object moving in a circular path requires a **centripetal force** directed toward the centre of the circle. For planets, moons, and satellites orbiting a central body, this centripetal force is provided entirely by **gravitational attraction**.\n\n" +
        "The orbital speed of a satellite or planet can be calculated from its orbital radius *r* and orbital period *T*:\n\n" +
        "`v = 2πr / T`\n\n" +
        "where *v* is orbital speed (m/s), *r* is orbital radius (m), and *T* is the orbital period (s).\n\n" +
        "**How radius and period are related:** planets farther from the Sun have larger orbits and — crucially — *slower* orbital speeds and *longer* periods. This is because the gravitational force decreases with distance (F ∝ 1/r²), so less centripetal force is needed and the planet moves more slowly. Kepler's Third Law states that T² ∝ r³ (not required for IGCSE, but the qualitative relationship is).\n\n" +
        "**Worked example:** The Moon orbits Earth at a radius of 3.84 × 10⁸ m with a period of 27.3 days.\n" +
        "- Convert period: T = 27.3 × 24 × 3600 = 2.36 × 10⁶ s\n" +
        "- v = 2π × 3.84 × 10⁸ / 2.36 × 10⁶ = 1020 m/s (≈ 1.0 km/s)\n\n" +
        "Artificial satellites in **low Earth orbit** (~300–500 km altitude) have periods of ~90 minutes. **Geostationary** satellites orbit at ~36 000 km and have a period of exactly 24 hours, so they remain above the same point on Earth.",
      diagrams: [
        {
          caption: "Centripetal force and orbital velocity — gravitational attraction acts toward the centre",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Diagram showing a planet orbiting the Sun with centripetal force and velocity vectors labelled">' +
            '<rect width="320" height="200" fill="#0f172a"/>' +
            // Orbit circle
            '<circle cx="160" cy="100" r="70" fill="none" stroke="#334155" stroke-width="1.5" stroke-dasharray="5,4"/>' +
            // Sun
            '<circle cx="160" cy="100" r="14" fill="#fbbf24"/>' +
            '<text x="160" y="104" text-anchor="middle" font-size="8" fill="#0f172a" font-family="sans-serif" font-weight="bold">Sun</text>' +
            // Planet position (top of orbit)
            '<circle cx="160" cy="30" r="7" fill="#38bdf8"/>' +
            '<text x="178" y="33" font-size="8" fill="#b7bce0" font-family="sans-serif">Planet</text>' +
            // Velocity arrow (tangential, rightward)
            '<line x1="167" y1="30" x2="215" y2="30" stroke="#34d399" stroke-width="2" marker-end="url(#arrowG)"/>' +
            '<text x="220" y="34" font-size="8" fill="#34d399" font-family="sans-serif">v</text>' +
            // Centripetal force arrow (downward toward Sun)
            '<line x1="160" y1="37" x2="160" y2="82" stroke="#fb7185" stroke-width="2" marker-end="url(#arrowR)"/>' +
            '<text x="165" y="62" font-size="7.5" fill="#fb7185" font-family="sans-serif">F (gravity)</text>' +
            // Arrow markers
            '<defs>' +
            '<marker id="arrowG" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#34d399"/></marker>' +
            '<marker id="arrowR" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#fb7185"/></marker>' +
            '</defs>' +
            // r label
            '<line x1="160" y1="100" x2="160" y2="30" stroke="#475569" stroke-width="1" stroke-dasharray="3,3"/>' +
            '<text x="143" y="68" font-size="7.5" fill="#94a3b8" font-family="sans-serif">r</text>' +
            // Formula
            '<text x="10" y="185" font-size="8.5" fill="#a78bfa" font-family="sans-serif">v = 2r / T</text>' +
            '</svg>',
        },
      ],
      keyPoints: [
        "Gravitational attraction provides the centripetal force that keeps planets, moons and satellites in circular orbits.",
        "Orbital speed: v = 2πr / T (r in metres, T in seconds, v in m/s).",
        "A greater orbital radius means a longer period and a slower orbital speed.",
        "Comets travel fastest at perihelion (closest to the Sun) and slowest at aphelion.",
        "Geostationary satellites have a period of 24 hours and remain above the same point on Earth.",
      ],
      discovery: {
        problem:
          "Mars orbits the Sun at roughly 1.5 times Earth's orbital radius. Should Mars have a longer or shorter year than Earth, and should it move faster or slower? Try to predict before reading on.",
        idea:
          "Mars has a longer year (~1.88 Earth years) and moves more slowly (~24 km/s vs Earth's ~30 km/s). A larger orbit means more distance to cover, and the weaker gravity at that radius provides less centripetal force — both effects slow the planet down and lengthen the period.",
      },
      strategies: ["Use v = 2πr / T; always convert T to seconds first.", "Identify which body provides the centripetal force before calculating."],
      whyItWorks:
        "Setting gravitational force equal to centripetal force: GMm/r² = mv²/r gives v² = GM/r, so v ∝ 1/√r. Larger r → smaller v. Period T = 2πr/v = 2πr^(3/2) / √(GM), so T ∝ r^(3/2) — Kepler's Third Law.",
      thinkDeeper:
        "A geostationary satellite must orbit at one specific radius (~42 300 km from Earth's centre). Why can it only be placed directly above the equator, not above Singapore or London? Think about the direction of the centripetal force and what 'geostationary' actually requires.",
    },

    {
      heading: "The Sun and Stellar Energy",
      body:
        "The Sun is a **main-sequence star** — a stable, self-luminous ball of plasma that has been shining for about 4.6 billion years and will continue for roughly the same again before it changes.\n\n" +
        "**Energy source:** The Sun generates energy through **nuclear fusion** in its core, where extreme temperature (~15 million °C) and pressure force hydrogen nuclei together to form helium nuclei. Each fusion reaction releases a tiny amount of energy (because the helium nucleus has slightly less mass than the four hydrogen nuclei that fused; this mass difference is converted to energy via E = mc²).\n\n" +
        "`4 ¹H → ⁴He + energy`\n\n" +
        "This energy travels outward as electromagnetic radiation — mostly in the infrared, visible, and ultraviolet parts of the spectrum. The Sun is in **equilibrium**: gravitational collapse is balanced by the outward pressure of radiation and hot gas.\n\n" +
        "The Sun's surface temperature is about 5500 °C, giving it a yellow-white colour. Hotter stars appear blue-white; cooler stars appear orange or red.",
      keyPoints: [
        "The Sun is powered by nuclear fusion of hydrogen into helium in its core.",
        "Fusion releases energy because the product nucleus has slightly less mass than the reactants.",
        "The Sun is in equilibrium: radiation pressure outward balances gravitational collapse inward.",
        "Surface temperature determines a star's colour: blue-white (hotter) → yellow → orange → red (cooler).",
        "The Sun has been a stable main-sequence star for ~4.6 billion years.",
      ],
      whyItWorks:
        "Einstein's mass-energy equivalence E = mc² means even a tiny mass defect (Δm) in each fusion reaction releases enormous energy. For hydrogen → helium, ~0.7% of the hydrogen mass is converted to energy. Given the Sun's mass (~2 × 10³⁰ kg), this fuel supply lasts ~10 billion years on the main sequence.",
    },

    {
      heading: "The Life Cycle of a Star",
      body:
        "All stars form from nebulae and end their lives in ways determined by their **initial mass**. The sequence for a **Sun-like star** and a **massive star** diverges after the red giant/red supergiant stage.\n\n" +
        "**Nebula → Protostar:** A cloud of gas and dust (nebula) begins to contract under gravity. As material falls inward it heats up, forming a **protostar**. Fusion has not yet begun.\n\n" +
        "**Protostar → Main-sequence star:** When core temperature and pressure are sufficient to ignite hydrogen fusion, the star joins the **main sequence** — a long stable period (billions of years for Sun-like stars, millions for massive stars).\n\n" +
        "**Main sequence → Red giant / Red supergiant:** When the hydrogen fuel in the core is exhausted, fusion stops. The core contracts and heats up, while the outer layers expand and cool, making the star enormous and red:\n" +
        "- Sun-like star → **red giant**\n" +
        "- Massive star → **red supergiant**\n\n" +
        "**End of a Sun-like star:** The red giant expels its outer layers as a **planetary nebula**, leaving a hot dense core — a **white dwarf** — which slowly cools over billions of years.\n\n" +
        "**End of a massive star:** The red supergiant undergoes a violent **supernova** explosion, which:\n" +
        "- Disperses heavy elements (formed by fusion of heavier elements in the star) into space.\n" +
        "- Leaves a **neutron star** (if the remnant core is up to ~3 solar masses) or a **black hole** (if the remnant core is more massive).",
      diagrams: [
        {
          caption: "Stellar life cycle — two pathways depending on initial mass",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Flow diagram of stellar life cycle showing two pathways: Sun-like stars ending as white dwarfs, massive stars ending as neutron stars or black holes">' +
            '<rect width="320" height="200" fill="#0f172a"/>' +
            // Nebula (shared start)
            '<rect x="2" y="82" width="52" height="24" rx="4" fill="#1e293b" stroke="#a78bfa" stroke-width="1.2"/>' +
            '<text x="28" y="97" text-anchor="middle" font-size="7.5" fill="#a78bfa" font-family="sans-serif">Nebula</text>' +
            // Arrow to protostar
            '<line x1="54" y1="94" x2="70" y2="94" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#arr)"/>' +
            // Protostar
            '<rect x="70" y="82" width="52" height="24" rx="4" fill="#1e293b" stroke="#fbbf24" stroke-width="1.2"/>' +
            '<text x="96" y="97" text-anchor="middle" font-size="7.5" fill="#fbbf24" font-family="sans-serif">Protostar</text>' +
            // Arrow to main sequence
            '<line x1="122" y1="94" x2="138" y2="94" stroke="#94a3b8" stroke-width="1.2" marker-end="url(#arr)"/>' +
            // Main sequence
            '<rect x="138" y="82" width="52" height="24" rx="4" fill="#1e293b" stroke="#34d399" stroke-width="1.2"/>' +
            '<text x="164" y="91" text-anchor="middle" font-size="7" fill="#34d399" font-family="sans-serif">Main</text>' +
            '<text x="164" y="101" text-anchor="middle" font-size="7" fill="#34d399" font-family="sans-serif">Sequence</text>' +
            // Fork: upper path (massive star)
            '<line x1="190" y1="90" x2="200" y2="55" stroke="#94a3b8" stroke-width="1" marker-end="url(#arr)"/>' +
            // Red supergiant
            '<rect x="200" y="40" width="56" height="24" rx="4" fill="#1e293b" stroke="#fb7185" stroke-width="1.2"/>' +
            '<text x="228" y="49" text-anchor="middle" font-size="7" fill="#fb7185" font-family="sans-serif">Red</text>' +
            '<text x="228" y="58" text-anchor="middle" font-size="7" fill="#fb7185" font-family="sans-serif">Supergiant</text>' +
            // Supernova
            '<line x1="256" y1="52" x2="270" y2="52" stroke="#94a3b8" stroke-width="1" marker-end="url(#arr)"/>' +
            '<rect x="270" y="40" width="46" height="24" rx="4" fill="#1e293b" stroke="#fb7185" stroke-width="1.2"/>' +
            '<text x="293" y="55" text-anchor="middle" font-size="7" fill="#fb7185" font-family="sans-serif">Supernova</text>' +
            // Neutron star / black hole (below supernova)
            '<text x="293" y="75" text-anchor="middle" font-size="6.5" fill="#94a3b8" font-family="sans-serif">Neutron star</text>' +
            '<text x="293" y="85" text-anchor="middle" font-size="6.5" fill="#94a3b8" font-family="sans-serif">/ Black hole</text>' +
            // Fork: lower path (Sun-like)
            '<line x1="190" y1="98" x2="200" y2="133" stroke="#94a3b8" stroke-width="1" marker-end="url(#arr)"/>' +
            // Red giant
            '<rect x="200" y="120" width="52" height="24" rx="4" fill="#1e293b" stroke="#fb7185" stroke-width="1.2"/>' +
            '<text x="226" y="129" text-anchor="middle" font-size="7" fill="#fb7185" font-family="sans-serif">Red</text>' +
            '<text x="226" y="139" text-anchor="middle" font-size="7" fill="#fb7185" font-family="sans-serif">Giant</text>' +
            // White dwarf
            '<line x1="252" y1="132" x2="266" y2="132" stroke="#94a3b8" stroke-width="1" marker-end="url(#arr)"/>' +
            '<rect x="266" y="120" width="52" height="24" rx="4" fill="#1e293b" stroke="#e2e8f0" stroke-width="1.2"/>' +
            '<text x="292" y="129" text-anchor="middle" font-size="7" fill="#e2e8f0" font-family="sans-serif">White</text>' +
            '<text x="292" y="139" text-anchor="middle" font-size="7" fill="#e2e8f0" font-family="sans-serif">Dwarf</text>' +
            // Labels on fork
            '<text x="196" y="75" font-size="6.5" fill="#94a3b8" font-family="sans-serif">Massive</text>' +
            '<text x="193" y="117" font-size="6.5" fill="#94a3b8" font-family="sans-serif">Sun-like</text>' +
            // Arrow marker
            '<defs><marker id="arr" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#94a3b8"/></marker></defs>' +
            '</svg>',
        },
      ],
      keyPoints: [
        "All stars begin as nebulae that contract under gravity to form protostars.",
        "A star joins the main sequence when hydrogen fusion ignites in its core.",
        "Sun-like stars: main sequence → red giant → white dwarf.",
        "Massive stars: main sequence → red supergiant → supernova → neutron star or black hole.",
        "Supernovae disperse heavy elements into space, enriching future nebulae.",
      ],
      discovery: {
        problem:
          "The Sun is currently converting about 4 million tonnes of mass into energy every second. Even so, it will remain on the main sequence for billions more years. How can this be consistent? Estimate roughly how long the Sun's hydrogen fuel supply might last.",
        idea:
          "The Sun's mass is about 2 × 10³⁰ kg, and ~10% is available for fusion in the core. At 4 × 10⁹ kg/s converted: time ≈ (0.1 × 2 × 10³⁰) / (4 × 10⁹) ≈ 5 × 10¹⁸ s ≈ 150 billion years. (The real figure is ~10 billion years because only ~0.7% of fused hydrogen mass becomes energy, not 100%.) The key insight: stars are enormously massive, so even a huge rate of consumption is sustainable for billions of years.",
      },
      thinkDeeper:
        "Heavy elements such as iron, gold, and carbon are forged inside massive stars and scattered by supernovae. This means every atom of iron in your blood was made inside a star that exploded before our Solar System formed. How does this change your understanding of the connection between the life cycles of stars and life on Earth?",
    },

    {
      heading: "Galaxies and the Scale of the Universe",
      body:
        "A **galaxy** is a collection of billions of stars (along with gas, dust, and dark matter) held together by gravity. Our own galaxy — the **Milky Way** — is a barred-spiral galaxy containing an estimated 200–400 billion stars. The Solar System is located about two-thirds of the way from the centre of the Milky Way.\n\n" +
        "The Universe contains an estimated 2 trillion (2 × 10¹²) galaxies, each containing billions of stars. To express such vast distances astronomers use the **light-year (ly)**: the distance light travels in one year.\n\n" +
        "`1 light-year ≈ 9.46 × 10¹⁵ m`\n\n" +
        "Key distances:\n" +
        "- Nearest star to the Sun (Proxima Centauri): ~4.2 ly\n" +
        "- Diameter of the Milky Way: ~100 000 ly\n" +
        "- Distance to Andromeda Galaxy: ~2.5 million ly\n" +
        "- Diameter of the observable Universe: ~93 billion ly\n\n" +
        "The light-year is used rather than metres because the numbers in metres are too large to be useful. When we observe a galaxy 100 million light-years away, we are seeing it as it was 100 million years ago — we are looking back in time.",
      diagrams: [
        {
          caption: "Scale of the Universe — from the Solar System to the observable Universe",
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Logarithmic scale diagram comparing Solar System, Milky Way, and observable Universe sizes">' +
            '<rect width="320" height="200" fill="#0f172a"/>' +
            // Scale bar background
            '<rect x="10" y="60" width="300" height="30" rx="4" fill="#1e293b"/>' +
            // Solar System section
            '<rect x="10" y="60" width="38" height="30" rx="4" fill="#fbbf24" opacity="0.25"/>' +
            '<text x="29" y="79" text-anchor="middle" font-size="6.5" fill="#fbbf24" font-family="sans-serif">Solar</text>' +
            '<text x="29" y="87" text-anchor="middle" font-size="6.5" fill="#fbbf24" font-family="sans-serif">System</text>' +
            // Milky Way section
            '<rect x="48" y="60" width="80" height="30" fill="#38bdf8" opacity="0.18"/>' +
            '<text x="88" y="79" text-anchor="middle" font-size="7" fill="#38bdf8" font-family="sans-serif">Milky Way</text>' +
            '<text x="88" y="88" text-anchor="middle" font-size="6.5" fill="#38bdf8" font-family="sans-serif">~100 000 ly</text>' +
            // Local Group
            '<rect x="128" y="60" width="60" height="30" fill="#34d399" opacity="0.15"/>' +
            '<text x="158" y="79" text-anchor="middle" font-size="6.5" fill="#34d399" font-family="sans-serif">Local</text>' +
            '<text x="158" y="87" text-anchor="middle" font-size="6.5" fill="#34d399" font-family="sans-serif">Group</text>' +
            // Observable Universe
            '<rect x="188" y="60" width="122" height="30" rx="4" fill="#a78bfa" opacity="0.12"/>' +
            '<text x="249" y="79" text-anchor="middle" font-size="6.5" fill="#a78bfa" font-family="sans-serif">Observable Universe</text>' +
            '<text x="249" y="87" text-anchor="middle" font-size="6.5" fill="#a78bfa" font-family="sans-serif">~93 billion ly</text>' +
            // Labels above
            '<text x="160" y="30" text-anchor="middle" font-size="9" fill="#eef0ff" font-family="sans-serif" font-weight="bold">Scale of the Universe (not linear)</text>' +
            // Light-year box
            '<rect x="10" y="115" width="300" height="30" rx="4" fill="#1e293b" stroke="#a78bfa" stroke-width="1"/>' +
            '<text x="160" y="130" text-anchor="middle" font-size="8" fill="#a78bfa" font-family="sans-serif">1 light-year = distance light travels in 1 year</text>' +
            '<text x="160" y="141" text-anchor="middle" font-size="7.5" fill="#b7bce0" font-family="sans-serif">= 9.46 x 10^15 m</text>' +
            '</svg>',
        },
      ],
      keyPoints: [
        "A galaxy is a collection of billions of stars held together by gravity.",
        "The Milky Way is a barred-spiral galaxy containing ~200–400 billion stars.",
        "A light-year is the distance light travels in one year: ≈ 9.46 × 10¹⁵ m.",
        "The observable Universe contains an estimated 2 trillion galaxies.",
        "Observing distant objects means looking back in time, because light takes time to travel.",
      ],
    },

    {
      heading: "The Expanding Universe and the Big Bang",
      body:
        "**Evidence for expansion — redshift:** When a light source moves away from an observer, its wavelength is stretched to longer (redder) values — this is the **Doppler effect** applied to light, called **redshift**. Measurements of light from distant galaxies show that their spectral lines are all shifted toward longer wavelengths, meaning they are all moving **away from us**. The more distant the galaxy, the **greater the redshift** and the **faster it is receding**.\n\n" +
        "This pattern — every galaxy receding, with recession speed proportional to distance — is exactly what you would expect if the entire **Universe is expanding**. There is no special 'centre'; an ant on an expanding balloon sees every other point moving away from it.\n\n" +
        "**The Big Bang theory:** If the Universe is expanding, running time backwards implies that everything was once concentrated in an extremely hot, dense state. The **Big Bang** is the name for this beginning, approximately **13.8 billion years ago**. The expansion has been continuing ever since.\n\n" +
        "**Cosmic microwave background radiation (CMB):** An additional piece of evidence (beyond IGCSE but worth knowing) is the faint microwave radiation detected uniformly from all directions — the afterglow of the Big Bang.\n\n" +
        "Key evidence for the Big Bang:\n" +
        "- **Redshift of light from distant galaxies** — all galaxies moving away.\n" +
        "- **More distant galaxies recede faster** — consistent with uniform expansion.\n" +
        "- (CMB — background microwave radiation detected from all directions.)",
      keyPoints: [
        "Redshift: light from galaxies is shifted to longer wavelengths because the galaxies are moving away.",
        "More distant galaxies show greater redshift and recede faster — the Universe is expanding.",
        "Running expansion backward implies the Universe began as a hot, dense point — the Big Bang (~13.8 billion years ago).",
        "Redshift is evidence for the expanding Universe and supports the Big Bang theory.",
        "The Doppler effect explains why a receding source emits longer-wavelength (redshifted) light.",
      ],
      strategies: ["Distinguish redshift (moving away / longer wavelength) from blueshift (moving toward / shorter wavelength).", "Link evidence → conclusion: redshift → expansion → Big Bang."],
      whyItWorks:
        "The Doppler effect: when a source moves away at speed v, the observed wavelength increases by a factor (1 + v/c). For galaxies, v ≪ c, so the fractional redshift z ≈ v/c. Hubble found z (and hence v) proportional to distance d: v = H₀d (Hubble's Law, not required by name in IGCSE but the qualitative relationship is). This directly implies a uniform expansion with no special centre.",
    },
  ],

  learn: {
    keyFacts: [
      "The eight planets in order from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.",
      "Orbital speed formula: v = 2πr / T (v in m/s, r in m, T in s).",
      "Gravitational attraction provides the centripetal force for all orbits.",
      "Planets farther from the Sun move slower and have longer orbital periods.",
      "The Sun is powered by nuclear fusion: hydrogen → helium, releasing energy.",
      "Star life cycle (Sun-like): nebula → protostar → main sequence → red giant → white dwarf.",
      "Star life cycle (massive): nebula → protostar → main sequence → red supergiant → supernova → neutron star or black hole.",
      "A light-year is the distance light travels in one year ≈ 9.46 × 10¹⁵ m.",
      "Redshift of light from distant galaxies is evidence that the Universe is expanding.",
      "More distant galaxies recede faster — consistent with the Big Bang theory.",
    ],
    flashcards: [
      { front: "What force provides the centripetal force for planetary orbits?", back: "Gravitational attraction between the planet and the Sun." },
      { front: "State the formula for orbital speed.", back: "v = 2πr / T, where r is orbital radius (m) and T is period (s)." },
      { front: "How does orbital period change as orbital radius increases?", back: "Period increases — planets farther from the Sun take longer to complete one orbit." },
      { front: "What is the Sun's energy source?", back: "Nuclear fusion of hydrogen nuclei (protons) into helium nuclei in its core." },
      { front: "What is a white dwarf?", back: "The dense, hot remnant core left after a Sun-like star expels its outer layers as a planetary nebula." },
      { front: "What is a supernova?", back: "A violent stellar explosion that occurs at the end of a massive star's life, dispersing heavy elements into space." },
      { front: "Define a light-year.", back: "The distance that light travels through a vacuum in one year; approximately 9.46 × 10¹⁵ m." },
      { front: "What is redshift?", back: "The increase in wavelength (shift toward red end of the spectrum) of light from a source moving away from the observer." },
      { front: "What does the redshift of distant galaxies tell us about the Universe?", back: "The Universe is expanding — all galaxies are moving away from us, with more distant ones receding faster." },
      { front: "What is the Big Bang theory?", back: "The theory that the Universe began ~13.8 billion years ago as an extremely hot, dense point and has been expanding ever since." },
      { front: "What is a nebula?", back: "A cloud of gas and dust in space; the starting point for star formation." },
      { front: "Name the stages in the life cycle of a massive star after the main sequence.", back: "Red supergiant → supernova → neutron star or black hole." },
    ],
    keyTerms: [
      { term: "Accretion", definition: "The gradual accumulation of material (gas and dust) under gravity to form larger bodies such as planets and stars." },
      { term: "Centripetal force", definition: "The resultant force directed toward the centre of a circular orbit; provided by gravity for planets and satellites." },
      { term: "Orbital period (T)", definition: "The time taken for one complete orbit; measured in seconds (or other time units)." },
      { term: "Orbital radius (r)", definition: "The distance from the orbiting body to the centre of the body it orbits." },
      { term: "Nuclear fusion", definition: "The joining of two light nuclei to form a heavier nucleus, releasing energy; the Sun's energy source." },
      { term: "Main-sequence star", definition: "A stable star in the long phase of its life where it fuses hydrogen into helium in its core." },
      { term: "Red giant / Red supergiant", definition: "A large, cool, red star formed when a main-sequence star exhausts its core hydrogen; red giants are Sun-like, red supergiants are more massive." },
      { term: "White dwarf", definition: "The small, dense, hot remnant of a Sun-like star after it sheds its outer layers; no longer undergoing fusion." },
      { term: "Neutron star", definition: "An extremely dense stellar remnant formed after a supernova, composed almost entirely of neutrons." },
      { term: "Black hole", definition: "A region of space with gravity so strong that nothing, not even light, can escape; formed from the most massive stellar remnants." },
      { term: "Light-year (ly)", definition: "A unit of astronomical distance equal to the distance light travels in one year: ≈ 9.46 × 10¹⁵ m." },
      { term: "Redshift", definition: "The observed increase in wavelength of electromagnetic radiation from a source moving away from the observer." },
      { term: "Big Bang theory", definition: "The scientific theory that the Universe originated ~13.8 billion years ago from an extremely hot, dense state and has been expanding ever since." },
      { term: "Galaxy", definition: "A large collection of billions of stars, gas, and dust held together by gravity; the Milky Way is our galaxy." },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "phys-space-mcq-q01",
        question: "Which planet is the fifth from the Sun?",
        options: ["Mars", "Saturn", "Jupiter", "Uranus"],
        answerIndex: 2,
        explanation: "The planets in order are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Jupiter is fifth.",
        guideRef: "The Solar System",
        difficulty: "warmup",
      },
      {
        id: "phys-space-mcq-q02",
        question: "A moon orbits a planet at radius r with period T. What is its orbital speed?",
        options: ["v = 2πT / r", "v = 2πr / T", "v = πr / T", "v = 2πr × T"],
        answerIndex: 1,
        explanation: "Orbital speed = circumference / time = 2πr / T. The other options have the variables incorrectly arranged.",
        guideRef: "Orbits and Gravitational Force",
        difficulty: "warmup",
      },
      {
        id: "phys-space-mcq-q03",
        question: "What force keeps a satellite in orbit around Earth?",
        options: ["Magnetic force", "Electrostatic force", "Gravitational attraction", "Normal contact force"],
        answerIndex: 2,
        explanation: "Gravitational attraction between the satellite and Earth provides the centripetal force needed for circular orbital motion.",
        guideRef: "Orbits and Gravitational Force",
        difficulty: "warmup",
      },
      {
        id: "phys-space-mcq-q04",
        question: "The Sun generates energy by nuclear fusion. Which elements are involved?",
        options: ["Helium fusing into carbon", "Hydrogen fusing into helium", "Carbon fusing into oxygen", "Uranium undergoing fission"],
        answerIndex: 1,
        explanation: "The Sun fuses hydrogen nuclei into helium nuclei, releasing energy. Fission (splitting heavy nuclei) is not the Sun's energy source.",
        guideRef: "The Sun and Stellar Energy",
        difficulty: "warmup",
      },
      {
        id: "phys-space-mcq-q05",
        question: "A star of similar mass to the Sun is approaching the end of its life. What is the correct sequence of final stages?",
        options: [
          "Red giant → supernova → neutron star",
          "Red supergiant → white dwarf → black hole",
          "Red giant → planetary nebula → white dwarf",
          "Main sequence → supernova → white dwarf",
        ],
        answerIndex: 2,
        explanation: "A Sun-like star expands to a red giant, then sheds its outer layers as a planetary nebula, leaving a white dwarf. Supernovae and neutron stars are the fate of much more massive stars.",
        guideRef: "The Life Cycle of a Star",
        difficulty: "core",
        hints: [
          "Recall: supernovae occur only for massive stars, not Sun-like stars.",
          "After the red giant phase, what happens to the outer layers?",
          "The core that remains after the outer layers are shed is the white dwarf.",
        ],
      },
      {
        id: "phys-space-mcq-q06",
        question: "Light from a distant galaxy is observed to have its spectral lines shifted toward longer wavelengths compared with laboratory sources. What does this indicate?",
        options: [
          "The galaxy is moving toward us",
          "The galaxy is moving away from us",
          "The galaxy is very hot",
          "The galaxy is very cold",
        ],
        answerIndex: 1,
        explanation: "A shift to longer wavelengths is redshift, caused by the Doppler effect when the source is moving away. Blueshift (shorter wavelengths) would indicate approach.",
        guideRef: "The Expanding Universe and the Big Bang",
        difficulty: "core",
        hints: [
          "Longer wavelengths correspond to the red end of the spectrum — this is called redshift.",
          "The Doppler effect: a receding source stretches the wavelength of the waves it emits.",
        ],
      },
    ],
    qa: [
      {
        id: "phys-space-qa-q01",
        question: "The Earth orbits the Sun at a radius of 1.50 × 10¹¹ m with a period of 365.25 days.\n(a) Show that the orbital speed of the Earth is approximately 3.0 × 10⁴ m/s.\n(b) State the direction of the centripetal force acting on the Earth during its orbit.",
        marks: 4,
        modelAnswer:
          "(a) First, convert the period to seconds: T = 365.25 × 24 × 3600 = 3.156 × 10⁷ s.\nUsing v = 2πr / T:\nv = (2π × 1.50 × 10¹¹) / (3.156 × 10⁷)\nv = (9.425 × 10¹¹) / (3.156 × 10⁷)\nv ≈ 2.99 × 10⁴ m/s ≈ 3.0 × 10⁴ m/s ✓\n\n(b) The centripetal force acts toward the Sun (toward the centre of the orbit).",
        markScheme: [
          "T converted to seconds correctly (3.156 × 10⁷ s or equivalent) [1]",
          "Correct substitution into v = 2πr / T [1]",
          "Answer ≈ 3.0 × 10⁴ m/s (allow 2.9–3.0 × 10⁴) [1]",
          "Centripetal force directed toward the Sun / toward the centre of the orbit [1]",
        ],
        commonError:
          "Forgetting to convert the period from days to seconds — using T = 365.25 gives an answer in m/day rather than m/s.",
        guideRef: "Orbits and Gravitational Force",
        difficulty: "core",
        hints: [
          "The formula is v = 2πr / T — identify what units T must be in.",
          "Convert days to seconds: multiply by 24 × 60 × 60.",
          "Substitute r = 1.50 × 10¹¹ m and the converted T into the formula.",
          "Centripetal force is always directed toward the centre of the circular path.",
        ],
        strategy: "Unit conversion before substitution",
        solutions: [
          {
            label: "Method 1: Direct substitution",
            steps: [
              "T = 365.25 days × 24 h/day × 3600 s/h = 3.156 × 10⁷ s",
              "v = 2πr / T = (2π × 1.50 × 10¹¹) / (3.156 × 10⁷)",
              "v = 9.425 × 10¹¹ / 3.156 × 10⁷ = 2.99 × 10⁴ m/s ≈ 3.0 × 10⁴ m/s",
            ],
          },
        ],
      },
      {
        id: "phys-space-qa-q02",
        question: "Describe the life cycle of a star much more massive than the Sun, starting from a nebula. Include the names of all key stages and the final two possible outcomes.",
        marks: 6,
        modelAnswer:
          "A nebula (cloud of gas and dust) contracts under gravity. As material falls inward, it heats up to form a protostar — fusion has not yet begun. When core temperature and pressure are sufficient, hydrogen fusion ignites and the star joins the main sequence, where it remains stable for millions of years (shorter than a Sun-like star because it burns fuel faster). When hydrogen in the core is exhausted, the core contracts, the outer layers expand and cool, and the star becomes a red supergiant. The star then undergoes a supernova — a violent explosion that ejects material into space. Depending on the mass of the remnant core: if it is up to ~3 solar masses, a neutron star forms; if it is more massive, it collapses into a black hole.",
        markScheme: [
          "Nebula (gas and dust cloud contracting under gravity) [1]",
          "Protostar formed as material heats up; fusion not yet started [1]",
          "Main-sequence star: hydrogen fusion begins; stable phase [1]",
          "Red supergiant: core hydrogen exhausted; outer layers expand and cool [1]",
          "Supernova: violent explosion, ejects material / heavy elements into space [1]",
          "Neutron star or black hole (both must be mentioned, or context makes both clear) [1]",
        ],
        commonError:
          "Confusing the fate of massive stars with Sun-like stars — a common error is to say the massive star becomes a red giant and then a white dwarf.",
        guideRef: "The Life Cycle of a Star",
        difficulty: "core",
        hints: [
          "Start from the very beginning: nebula.",
          "Identify where the fork occurs — what stage comes just before a supernova?",
          "The supernova has two possible remnants depending on the mass of the core.",
          "Use the correct term: 'red supergiant', not 'red giant', for massive stars.",
        ],
        strategy: "Sequence the stages chronologically; identify the decision point for final outcome.",
      },
      {
        id: "phys-space-qa-q03",
        question: "Astronomers observe that light from distant galaxies is redshifted, and that the redshift is greater for more distant galaxies.\n(a) Explain what redshift is and why it occurs for distant galaxies.\n(b) State what this evidence tells us about the Universe.\n(c) Name the theory that this evidence supports.",
        marks: 5,
        modelAnswer:
          "(a) Redshift is an increase in the observed wavelength of light (shift toward the red end of the spectrum). It occurs because distant galaxies are moving away from us; the Doppler effect stretches the wavelength of light as the source recedes.\n(b) The Universe is expanding — all galaxies are moving away from us, and more distant galaxies are receding faster.\n(c) The Big Bang theory.",
        markScheme: [
          "Redshift: observed wavelength longer than expected / shifted toward red end of spectrum [1]",
          "Caused by galaxies moving away from us / Doppler effect for a receding source [1]",
          "Universe is expanding [1]",
          "More distant galaxies recede faster / recession speed proportional to distance [1]",
          "Big Bang theory [1]",
        ],
        commonError:
          "Stating that redshift means the light itself becomes red, rather than that the wavelength is longer than it would be from a stationary source.",
        guideRef: "The Expanding Universe and the Big Bang",
        difficulty: "core",
        hints: [
          "Redshift is about wavelength change, not colour change.",
          "Think about what the Doppler effect does to wavelength when a source moves away.",
          "If all galaxies are moving away, what must the Universe as a whole be doing?",
          "The theory with a 'beginning' ~13.8 billion years ago.",
        ],
        strategy: "Evidence → observation → conclusion → theory name.",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "phys-space-bank-mcq-1",
        title: "Space Physics MCQ — Paper 1",
        description: "18 minutes · 6 questions · Solar System, orbits, stellar life cycles",
        questions: [
          {
            id: "phys-space-bank-mcq1-q01",
            question: "In which region of the Solar System is the asteroid belt found?",
            options: [
              "Between Earth and Mars",
              "Between Mars and Jupiter",
              "Between Jupiter and Saturn",
              "Beyond Neptune",
            ],
            answerIndex: 1,
            explanation: "The asteroid belt lies between Mars and Jupiter, at roughly 2.2–3.2 AU from the Sun.",
            guideRef: "The Solar System",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bank-mcq1-q02",
            question: "A geostationary satellite has an orbital period of:",
            options: ["90 minutes", "12 hours", "24 hours", "365 days"],
            answerIndex: 2,
            explanation: "A geostationary satellite must have a period of exactly 24 hours so that it orbits at the same rate as Earth rotates, remaining stationary above one point on the equator.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bank-mcq1-q03",
            question: "Planet X orbits a star at twice the orbital radius of planet Y. Compared with Y, planet X has:",
            options: [
              "A shorter period and higher speed",
              "A shorter period and lower speed",
              "A longer period and lower speed",
              "A longer period and higher speed",
            ],
            answerIndex: 2,
            explanation: "A larger orbital radius means a weaker gravitational force, so less centripetal acceleration and a lower orbital speed. The larger circumference combined with lower speed gives a much longer period (T ∝ r^3/2).",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "core",
            hints: [
              "From v = 2πr/T: if r increases and v decreases, what happens to T?",
              "Gravity weakens with distance, so a planet farther out moves more slowly.",
            ],
          },
          {
            id: "phys-space-bank-mcq1-q04",
            question: "During which stage of a star's life does hydrogen fusion first ignite?",
            options: ["Nebula", "Protostar", "Main-sequence star", "Red giant"],
            answerIndex: 2,
            explanation: "Hydrogen fusion begins when the star joins the main sequence. A protostar is still contracting and too cool for fusion to start; a nebula is even earlier.",
            guideRef: "The Life Cycle of a Star",
            difficulty: "core",
            hints: [
              "Fusion requires extremely high temperature and pressure — does the protostar yet have this?",
              "The main sequence begins when the star is hot enough to sustain fusion.",
            ],
          },
          {
            id: "phys-space-bank-mcq1-q05",
            question: "A comet travels in a highly elliptical orbit around the Sun. At which point in its orbit is the comet moving fastest?",
            options: [
              "At the point farthest from the Sun (aphelion)",
              "At the point closest to the Sun (perihelion)",
              "At the midpoint of the orbit",
              "Its speed is constant throughout",
            ],
            answerIndex: 1,
            explanation: "Gravitational potential energy is lowest (most negative) when closest to the Sun, so kinetic energy (and speed) is greatest. As the comet moves away, it slows as kinetic energy is converted back to gravitational potential energy.",
            guideRef: "The Solar System",
            difficulty: "core",
            hints: [
              "Consider energy conservation: GPE + KE = constant.",
              "Where is GPE at its minimum? What does that mean for KE?",
            ],
          },
          {
            id: "phys-space-bank-mcq1-q06",
            question: "Which of the following is the best unit for expressing the distance between two galaxies?",
            options: ["Metre (m)", "Kilometre (km)", "Astronomical unit (AU)", "Light-year (ly)"],
            answerIndex: 3,
            explanation: "Intergalactic distances are measured in millions of light-years. Metres, kilometres, and astronomical units give unwieldy numbers at these scales. The light-year (≈ 9.46 × 10¹⁵ m) is the standard astronomical unit for such distances.",
            guideRef: "Galaxies and the Scale of the Universe",
            difficulty: "warmup",
          },
        ],
      },
      {
        id: "phys-space-bank-mcq-2",
        title: "Space Physics MCQ — Paper 2",
        description: "18 minutes · 6 questions · Orbits (calculation), Big Bang, stellar end-states",
        questions: [
          {
            id: "phys-space-bank-mcq2-q01",
            question: "A satellite orbits Earth at a radius of 6.7 × 10⁶ m with a period of 5400 s. What is its orbital speed?",
            options: ["3.9 × 10³ m/s", "7.8 × 10³ m/s", "1.2 × 10⁴ m/s", "2.4 × 10⁴ m/s"],
            answerIndex: 1,
            explanation: "v = 2πr / T = (2π × 6.7 × 10⁶) / 5400 = (4.21 × 10⁷) / 5400 ≈ 7800 m/s = 7.8 × 10³ m/s.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "core",
            hints: [
              "Use v = 2πr / T; both r and T are already in SI units.",
              "Calculate the circumference first: 2π × 6.7 × 10⁶ ≈ 4.21 × 10⁷ m.",
              "Then divide by T = 5400 s.",
            ],
            strategy: "Substitute directly; no unit conversion needed here.",
          },
          {
            id: "phys-space-bank-mcq2-q02",
            question: "What provides the evidence that the Universe is expanding?",
            options: [
              "The Sun emits light in all directions",
              "Distant galaxies show redshift, with more distant ones receding faster",
              "Stars have different colours depending on their temperature",
              "The Milky Way is a spiral galaxy",
            ],
            answerIndex: 1,
            explanation: "Redshift of light from distant galaxies, with greater redshift for more distant galaxies, shows they are all moving away — consistent with universal expansion.",
            guideRef: "The Expanding Universe and the Big Bang",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bank-mcq2-q03",
            question: "A neutron star is most likely formed from which type of star?",
            options: [
              "A Sun-like star after it becomes a red giant",
              "A Sun-like star after it becomes a white dwarf",
              "A massive star after a supernova explosion",
              "Any star after it leaves the main sequence",
            ],
            answerIndex: 2,
            explanation: "Neutron stars form when a massive star explodes as a supernova and the remnant core (up to ~3 solar masses) is compressed to an extremely dense state. Sun-like stars become white dwarfs, not neutron stars.",
            guideRef: "The Life Cycle of a Star",
            difficulty: "core",
            hints: [
              "Only massive stars undergo supernovae.",
              "What are the two possible remnants left after a supernova?",
            ],
          },
          {
            id: "phys-space-bank-mcq2-q04",
            question: "Two planets, P and Q, orbit the same star. P is at twice the orbital radius of Q. How does the orbital period of P compare with that of Q?",
            options: [
              "P's period is 2 times Q's period",
              "P's period is √2 times Q's period",
              "P's period is 4 times Q's period",
              "P's period is 2√2 times Q's period",
            ],
            answerIndex: 3,
            explanation: "By Kepler's Third Law, T ∝ r^(3/2). If r doubles, T increases by 2^(3/2) = 2√2 ≈ 2.83. So P's period is 2√2 times Q's period.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "challenge",
            hints: [
              "From v = 2πr/T and the fact that v ∝ 1/√r (from gravity providing centripetal force), combine to find T in terms of r.",
              "T = 2πr/v. If v ∝ r^(-1/2), then T ∝ r / r^(-1/2) = r^(3/2).",
              "If r doubles: T scales by 2^(3/2) = 2 × √2.",
            ],
            strategy: "Combine v = 2πr/T with v ∝ 1/√r to derive T ∝ r^(3/2).",
          },
          {
            id: "phys-space-bank-mcq2-q05",
            question: "Astronomers detect spectral lines from a distant galaxy that are shifted to longer wavelengths than the same lines observed in a laboratory. This observation is best explained by:",
            options: [
              "The galaxy being much hotter than a lab source",
              "The galaxy moving away from Earth due to the expansion of the Universe",
              "Absorption of light by interstellar dust",
              "The galaxy rotating very slowly",
            ],
            answerIndex: 1,
            explanation: "Longer wavelength (redshift) is a Doppler effect caused by the galaxy receding. This is the key evidence for the expanding Universe.",
            guideRef: "The Expanding Universe and the Big Bang",
            difficulty: "core",
            hints: [
              "What does the Doppler effect predict for wavelength when a source moves away?",
              "A longer wavelength means the source is receding.",
            ],
          },
          {
            id: "phys-space-bank-mcq2-q06",
            question: "A student claims: 'The Sun is unusual because it is the only star to have planets.' Which statement best evaluates this claim?",
            options: [
              "Correct — the Solar System formed in a unique way",
              "Incorrect — all stars must have planets",
              "Incorrect — the Milky Way contains billions of stars, many of which are known to host planetary systems",
              "Correct — planets require the exact conditions found only in our Solar System",
            ],
            answerIndex: 2,
            explanation: "The Milky Way contains hundreds of billions of stars, and observations (e.g., with the Kepler space telescope) have confirmed that exoplanetary systems are common. The Solar System's accretion process is not unique.",
            guideRef: "The Solar System",
            difficulty: "core",
            hints: [
              "Think about the scale of the galaxy and whether our Solar System's formation is unique.",
              "Accretion from a nebular disc is a general process, not specific to our Sun.",
            ],
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "phys-space-bank-qa-1",
        title: "Space Physics Structured Questions — Paper 1",
        description: "4 questions · Orbits, the Solar System, and stellar life cycles",
        questions: [
          {
            id: "phys-space-bank-qa1-q01",
            question:
              "Mars orbits the Sun at an orbital radius of 2.28 × 10¹¹ m.\n(a) The orbital period of Mars is 687 days. Calculate the orbital speed of Mars. Give your answer in m/s to 2 significant figures.\n(b) State the name and direction of the force that keeps Mars in its orbit.\n(c) Explain why Mars has a longer orbital period than Earth, which orbits at a radius of 1.50 × 10¹¹ m.",
            marks: 6,
            modelAnswer:
              "(a) T = 687 × 24 × 3600 = 5.936 × 10⁷ s\nv = 2πr / T = (2π × 2.28 × 10¹¹) / (5.936 × 10⁷)\nv = 1.433 × 10¹² / 5.936 × 10⁷ ≈ 2.4 × 10⁴ m/s\n\n(b) Gravitational attraction / gravitational force directed toward the Sun / toward the centre of the orbit.\n\n(c) Mars has a larger orbital radius than Earth. A larger radius means the gravitational force (and hence centripetal force) is weaker, so Mars moves more slowly. The orbit is also longer in circumference. Both effects (lower speed, greater distance) result in a longer period.",
            markScheme: [
              "T converted correctly to seconds (5.93–5.94 × 10⁷ s) [1]",
              "Correct substitution into v = 2πr / T [1]",
              "v = 2.4 × 10⁴ m/s (accept 2.3–2.5 × 10⁴) [1]",
              "Gravitational attraction / gravitational force [1]",
              "Directed toward the Sun / toward the centre of the orbit [1]",
              "Larger radius → weaker gravity / lower orbital speed / longer circumference → longer period [1]",
            ],
            commonError:
              "Omitting the direction of the centripetal force, or stating it acts 'outward' — centripetal force always acts inward toward the centre.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "core",
            hints: [
              "Convert T to seconds before using the formula.",
              "v = 2πr / T — circumference divided by time for one orbit.",
              "Name the force and state its direction (toward what object?).",
              "Compare radii and recall how speed and period depend on orbital radius.",
            ],
            strategy: "Unit conversion → substitution → compare with Earth qualitatively.",
            solutions: [
              {
                label: "Standard calculation",
                steps: [
                  "T = 687 × 86400 = 5.936 × 10⁷ s",
                  "v = 2π × 2.28 × 10¹¹ / 5.936 × 10⁷",
                  "v = 1.433 × 10¹² / 5.936 × 10⁷",
                  "v ≈ 2.4 × 10⁴ m/s",
                ],
              },
            ],
          },
          {
            id: "phys-space-bank-qa1-q02",
            question:
              "Describe how the Solar System is thought to have formed. In your answer, refer to the role of gravity and include the term 'accretion'.",
            marks: 4,
            modelAnswer:
              "The Solar System formed from a large, rotating cloud of gas and dust called a nebula. Gravity caused the nebula to contract (collapse inward). Most of the mass concentrated at the centre, heating up to form the protostar that became the Sun. In the surrounding disc, solid particles collided and stuck together, gradually growing into larger bodies through a process called accretion. Over millions of years, accretion built up the planets, moons, and other smaller bodies (asteroids, comets) of the Solar System.",
            markScheme: [
              "Began as a nebula / rotating cloud of gas and dust [1]",
              "Gravity caused the cloud to contract / collapse [1]",
              "Most mass formed the Sun at the centre / protostar [1]",
              "Remaining material formed planets/moons by accretion (particles colliding and sticking together to form larger bodies) [1]",
            ],
            commonError:
              "Describing the process as an explosion rather than a gravitational collapse — stars form by contraction, not explosion.",
            guideRef: "The Solar System",
            difficulty: "core",
            hints: [
              "Start with the nebula.",
              "What force drives the contraction?",
              "Where did most of the mass go?",
              "Accretion = particles sticking together to grow larger.",
            ],
          },
          {
            id: "phys-space-bank-qa1-q03",
            question:
              "Compare the life cycles of a star similar in mass to the Sun and a star of much greater mass. Your answer should include all major stages for each and identify where the life cycles diverge.",
            marks: 6,
            modelAnswer:
              "Both stars begin as a nebula that contracts under gravity to form a protostar, then join the main sequence when hydrogen fusion ignites. This is where the life cycles are identical. They diverge after hydrogen is exhausted in the core:\n- Sun-like star: expands to become a red giant, then sheds outer layers as a planetary nebula, leaving a white dwarf that gradually cools.\n- Massive star: expands to become a red supergiant, then explodes as a supernova, leaving either a neutron star (if remnant mass ≤ ~3 solar masses) or a black hole (if more massive).",
            markScheme: [
              "Both start: nebula → protostar → main sequence [1]",
              "Diverge when core hydrogen is exhausted [1]",
              "Sun-like: red giant → planetary nebula → white dwarf [1]",
              "Massive: red supergiant → supernova [1]",
              "Supernova remnant: neutron star or black hole [1]",
              "Clear distinction that Sun-like → white dwarf (not supernova) and massive → supernova (not white dwarf) [1]",
            ],
            commonError:
              "Stating that a Sun-like star undergoes a supernova, or that a massive star becomes a white dwarf — these are the reverse of what actually happens.",
            guideRef: "The Life Cycle of a Star",
            difficulty: "core",
            hints: [
              "Both begin the same — up to and including the main sequence.",
              "The fork occurs when the core hydrogen runs out.",
              "Use the correct term: red giant (Sun-like) vs red supergiant (massive).",
              "List both possible final remnants for the massive star.",
            ],
            strategy: "Parallel structure: trace both paths simultaneously; mark where they fork.",
          },
          {
            id: "phys-space-bank-qa1-q04",
            question:
              "A satellite is placed in a circular orbit at a height where its orbital speed is 5600 m/s and its period is 8100 s.\n(a) Calculate the orbital radius of the satellite.\n(b) A second satellite orbits at a greater radius. State and explain whether this satellite has a greater or smaller orbital speed than the first.\n(c) Explain why geostationary satellites are used for television broadcasting rather than satellites in low Earth orbit.",
            marks: 7,
            modelAnswer:
              "(a) From v = 2πr / T: r = vT / (2π) = (5600 × 8100) / (2π) = 45 360 000 / 6.283 ≈ 7.22 × 10⁶ m\n\n(b) The second satellite has a smaller orbital speed. At a greater radius, the gravitational force (providing centripetal force) is weaker. A smaller centripetal force corresponds to a smaller centripetal acceleration for the same orbit radius, which means a lower speed. (Formally, v ∝ 1/√r.)\n\n(c) A geostationary satellite remains stationary above the same point on Earth's surface (because its period = 24 h matches Earth's rotation). A dish antenna on the ground can therefore be fixed and aimed permanently at the satellite. A low Earth orbit satellite moves rapidly across the sky, requiring tracking equipment and causing signal interruptions — unsuitable for continuous broadcasting.",
            markScheme: [
              "Rearrangement: r = vT / (2π) [1]",
              "Correct substitution: (5600 × 8100) / (2π) [1]",
              "r ≈ 7.2 × 10⁶ m (accept 7.1–7.3 × 10⁶ m) [1]",
              "Second satellite has smaller orbital speed [1]",
              "Gravitational force weaker at greater radius / gravity ∝ 1/r² [1]",
              "Geostationary satellite remains above the same point on Earth [1]",
              "Fixed dish can be used / no tracking needed / continuous signal [1]",
            ],
            commonError:
              "Rearranging the formula incorrectly — students sometimes write r = vT × 2π (multiplying instead of dividing by 2π).",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "challenge",
            hints: [
              "Rearrange v = 2πr / T for r: multiply both sides by T and divide by 2π.",
              "r = vT / (2π).",
              "For part (b), think about what provides centripetal force and how it changes with distance.",
              "For part (c), 'geostationary' means fixed above one point — what does that mean for a dish antenna?",
            ],
            strategy: "Rearrange formula algebraically before substituting numbers.",
            solutions: [
              {
                label: "Rearrangement from v = 2πr / T",
                steps: [
                  "v = 2πr / T → r = vT / (2π)",
                  "r = (5600 × 8100) / (2 × 3.1416)",
                  "r = 45 360 000 / 6.283",
                  "r ≈ 7.22 × 10⁶ m",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-space-bank-qa-2",
        title: "Space Physics Structured Questions — Paper 2",
        description: "4 questions · Expansion of the Universe, stellar fusion, challenge problems",
        questions: [
          {
            id: "phys-space-bank-qa2-q01",
            question:
              "Astronomers measure the spectra of three galaxies (A, B, and C) and observe the following redshifts: galaxy A has a small redshift, galaxy B has a moderate redshift, and galaxy C has a large redshift.\n(a) State what redshift indicates about the motion of a galaxy.\n(b) Which galaxy is farthest from Earth? Explain your reasoning.\n(c) Explain how this pattern of redshifts supports the Big Bang theory.",
            marks: 6,
            modelAnswer:
              "(a) Redshift indicates that the galaxy is moving away from Earth (receding).\n\n(b) Galaxy C is farthest. A larger redshift means the galaxy is receding faster, and more distant galaxies recede at greater speeds (the recession speed is proportional to distance). So C has the greatest speed and greatest distance.\n\n(c) All galaxies show redshift — they are all moving away from us. More distant galaxies recede faster, consistent with a uniform expansion of the Universe. If the Universe is expanding, running time backward implies it was once much smaller and concentrated in a hot, dense state. The Big Bang theory states this is how the Universe began (~13.8 billion years ago), and the redshift pattern is direct evidence for ongoing expansion.",
            markScheme: [
              "Redshift indicates galaxy moving away from Earth / receding [1]",
              "Galaxy C is farthest [1]",
              "Greater redshift → greater recession speed → greater distance [1]",
              "All galaxies receding → Universe is expanding [1]",
              "More distant galaxies recede faster → uniform expansion [1]",
              "Expansion implies Universe was once concentrated in a hot, dense state / supports Big Bang [1]",
            ],
            commonError:
              "Claiming that redshift means the galaxy is 'getting redder' — redshift is about wavelength change of spectral lines, not the visual colour of the galaxy.",
            guideRef: "The Expanding Universe and the Big Bang",
            difficulty: "core",
            hints: [
              "Redshift → galaxy moving away.",
              "Greater redshift → moving away faster → farther away.",
              "If everything is moving away, what was happening to the Universe in the past?",
              "Link to Big Bang: reverse the expansion to find a single hot, dense origin.",
            ],
            strategy: "Chain of reasoning: observation → interpretation → theoretical implication.",
          },
          {
            id: "phys-space-bank-qa2-q02",
            question:
              "Explain why the Sun has remained stable for about 4.6 billion years and will continue to be stable for roughly the same period again. In your answer, refer to the process occurring in the core and the forces involved in maintaining equilibrium.",
            marks: 5,
            modelAnswer:
              "The Sun is stable because it is in a state of equilibrium between two competing effects: gravity, which tends to compress the Sun inward, and the outward pressure of hot gas and radiation produced by nuclear fusion. In the core, extreme temperature and pressure cause hydrogen nuclei to fuse, forming helium nuclei and releasing a large amount of energy (because the helium nucleus has less mass than the hydrogen nuclei that combined). This energy travels outward as radiation, creating an outward radiation pressure that exactly balances the inward gravitational force. As long as sufficient hydrogen fuel remains, this balance is maintained. The Sun has enough hydrogen in its core to sustain fusion for approximately 10 billion years in total, so it has roughly 5 billion years of main-sequence life remaining.",
            markScheme: [
              "Equilibrium between gravity (inward) and radiation/gas pressure (outward) [1]",
              "Core hydrogen fusion: hydrogen → helium, releasing energy [1]",
              "Energy released because helium has less mass than reacting hydrogen (mass defect / E = mc²) [1]",
              "Outward radiation pressure balances gravitational compression [1]",
              "Sufficient hydrogen fuel for ~10 billion years total / ~5 billion years remaining [1]",
            ],
            commonError:
              "Stating the Sun 'burns' hydrogen — combustion (burning) is a chemical reaction; fusion is a nuclear reaction and releases far more energy per kilogram.",
            guideRef: "The Sun and Stellar Energy",
            difficulty: "core",
            hints: [
              "Stability = equilibrium between two opposing forces.",
              "Name the nuclear process in the core.",
              "Why does fusion release energy? (Mass of products vs reactants.)",
              "How long does the fuel last?",
            ],
          },
          {
            id: "phys-space-bank-qa2-q03",
            question:
              "The Hubble Space Telescope is placed in a circular orbit at a radius of 6.92 × 10⁶ m from Earth's centre.\n(a) Its orbital speed is 7660 m/s. Show that its orbital period is approximately 5670 s.\n(b) A proposed replacement telescope would orbit at a radius of 1.50 × 10⁶ m less than the Hubble telescope. Predict whether its orbital speed would be greater or smaller, and whether its period would be greater or smaller. Justify each answer.\n(c) Calculate the orbital speed of the replacement telescope. (r = 5.42 × 10⁶ m, T = 4429 s)",
            marks: 8,
            modelAnswer:
              "(a) From v = 2πr / T: T = 2πr / v = (2π × 6.92 × 10⁶) / 7660 = (4.35 × 10⁷) / 7660 ≈ 5673 s ≈ 5670 s ✓\n\n(b) The replacement telescope orbits at a smaller radius (5.42 × 10⁶ m). At a smaller radius, gravity is stronger, providing a larger centripetal force. This means the satellite must travel faster to maintain its circular orbit. Therefore its orbital speed is **greater**. A smaller radius also means a shorter circumference, and a higher speed; both effects reduce the time for one orbit, so its orbital period is **smaller**.\n\n(c) v = 2πr / T = (2π × 5.42 × 10⁶) / 4429 = (3.405 × 10⁷) / 4429 ≈ 7690 m/s",
            markScheme: [
              "T = 2πr / v shown explicitly [1]",
              "Correct calculation giving T ≈ 5670 s [1]",
              "Orbital speed greater (at smaller radius) [1]",
              "Justification: stronger gravity / larger centripetal force at smaller r [1]",
              "Period smaller [1]",
              "Justification: smaller circumference and/or higher speed → shorter time [1]",
              "Correct substitution: v = 2π × 5.42 × 10⁶ / 4429 [1]",
              "v ≈ 7690 m/s (accept 7600–7800) [1]",
            ],
            commonError:
              "Confusing the effect of radius on speed: students sometimes think a larger radius means higher speed because 'it has further to go'. The key is that gravity weakens more quickly than the circumference grows.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "challenge",
            hints: [
              "For (a): rearrange v = 2πr / T to give T = 2πr / v.",
              "For (b): think about gravity — does it get stronger or weaker as you move closer to Earth?",
              "For (b): stronger gravity → more centripetal force → satellite must move faster.",
              "For (c): use v = 2πr / T directly with the given values.",
            ],
            strategy: "Rearrange formula for 'show that' parts; use qualitative reasoning before calculating.",
            solutions: [
              {
                label: "Method: rearranging v = 2πr / T",
                steps: [
                  "(a) T = 2πr / v = (2π × 6.92 × 10⁶) / 7660 = 4.348 × 10⁷ / 7660 ≈ 5673 s",
                  "(c) v = 2π × 5.42 × 10⁶ / 4429 = 3.405 × 10⁷ / 4429 ≈ 7690 m/s",
                ],
              },
            ],
          },
          {
            id: "phys-space-bank-qa2-q04",
            question:
              "A student studying star life cycles makes the following statements:\n(i) 'All stars eventually become black holes.'\n(ii) 'A white dwarf is a star that has begun to fuse helium instead of hydrogen.'\n(iii) 'Supernovae are important because they scatter heavy elements into space.'\nFor each statement, state whether it is correct or incorrect and explain your reasoning.",
            marks: 6,
            modelAnswer:
              "(i) Incorrect. Only the most massive stellar remnants (with remnant core mass greater than ~3 solar masses) become black holes. Sun-like stars become white dwarfs; less massive stellar remnants after a supernova become neutron stars. Most stars (including the Sun) never become black holes.\n\n(ii) Incorrect. A white dwarf is the dense, hot remnant core left after a Sun-like red giant has expelled its outer layers as a planetary nebula. No fusion is occurring in a white dwarf — it is simply cooling down. The student may be confusing white dwarfs with the helium-fusing phase during the red giant stage.\n\n(iii) Correct. During a supernova, the explosion is so energetic that it disperses the heavy elements (such as carbon, oxygen, iron) that were formed by nuclear fusion within the massive star. These elements are ejected into space, enriching the interstellar medium and providing the material from which future planetary systems can form.",
            markScheme: [
              "(i) Incorrect [1]; only massive stellar remnants (core >~3 solar masses) / Sun-like stars become white dwarfs, not black holes [1]",
              "(ii) Incorrect [1]; white dwarf is a cooling remnant core after planetary nebula phase / no fusion occurring in a white dwarf [1]",
              "(iii) Correct [1]; supernova explosion scatters/disperses heavy elements formed by stellar fusion into space / enriches interstellar medium [1]",
            ],
            commonError:
              "Thinking that all stars end as black holes — the final fate depends entirely on the remnant core mass, and the vast majority of stars end as white dwarfs.",
            guideRef: "The Life Cycle of a Star",
            difficulty: "challenge",
            hints: [
              "For (i): recall the two possible end states after a supernova, and remember that most stars never undergo a supernova.",
              "For (ii): what processes occur (or don't occur) in a white dwarf?",
              "For (iii): think about where the heavy elements in the Universe came from.",
            ],
            strategy: "Evaluate each claim: state correct/incorrect, then cite specific scientific evidence.",
          },
        ],
      },
    ],
  },
};
