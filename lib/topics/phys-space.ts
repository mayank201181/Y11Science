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
            '<text x="10" y="185" font-size="8.5" fill="#a78bfa" font-family="sans-serif">v = 2&#x03C0;r / T</text>' +
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
      // ── MCQ PAPER 1 ── Solar System structure, orbits, Sun
      {
        id: "phys-space-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "The Solar System, planetary order, orbits, and the Sun.",
        questions: [
          {
            id: "phys-space-bm1-01",
            question: "Which list gives the four inner (rocky) planets in the correct order from the Sun?",
            options: [
              "Mercury, Venus, Earth, Mars",
              "Venus, Mercury, Earth, Mars",
              "Mercury, Earth, Venus, Mars",
              "Mars, Earth, Venus, Mercury",
            ],
            answerIndex: 0,
            explanation:
              "The order outward from the Sun is Mercury, Venus, Earth, Mars (then Jupiter, Saturn, Uranus, Neptune). The four inner planets are small and rocky.",
            difficulty: "warmup",
            guideRef: "The Solar System",
          },
          {
            id: "phys-space-bm1-02",
            question: "Which body provides the centripetal force that keeps a planet in orbit around the Sun?",
            options: [
              "The magnetic field of the Sun",
              "The gravitational attraction of the Sun on the planet",
              "The solar wind pushing the planet",
              "The gravitational attraction of nearby planets",
            ],
            answerIndex: 1,
            explanation:
              "Gravitational attraction between the Sun and the planet acts toward the centre of the orbit, providing the centripetal force needed for circular (or elliptical) motion.",
            difficulty: "warmup",
            guideRef: "Orbits and Gravitational Force",
          },
          {
            id: "phys-space-bm1-03",
            question: "Which statement correctly compares the outer gas giants with the inner planets?",
            options: [
              "The gas giants are smaller and denser than the rocky planets",
              "The gas giants are larger, less dense, and orbit more slowly than the rocky planets",
              "The gas giants are closer to the Sun and orbit faster",
              "The gas giants and rocky planets all orbit at the same speed",
            ],
            answerIndex: 1,
            explanation:
              "Gas giants (Jupiter, Saturn, Uranus, Neptune) are much larger but far less dense than the rocky inner planets. Being farther out, gravity is weaker there, so they orbit more slowly and have longer periods.",
            difficulty: "core",
            hints: [
              "Compare size: are Jupiter and Saturn bigger or smaller than Earth?",
              "Compare density: gas vs rock — which packs more mass per unit volume?",
              "Farther from the Sun means weaker gravity, so a slower orbital speed.",
            ],
            guideRef: "The Solar System",
          },
          {
            id: "phys-space-bm1-04",
            question: "A moon orbits a planet of radius r with period T. Which expression gives its orbital speed?",
            options: ["v = πr / T", "v = 2πr × T", "v = 2πr / T", "v = r / (2πT)"],
            answerIndex: 2,
            explanation:
              "In one period the moon travels the full circumference 2πr. Speed = distance / time = 2πr / T.",
            difficulty: "warmup",
            guideRef: "Orbits and Gravitational Force",
          },
          {
            id: "phys-space-bm1-05",
            question: "Why does Neptune take much longer than Earth to complete one orbit of the Sun?",
            options: [
              "Neptune is more massive, so it moves more slowly",
              "Neptune has a much larger orbit and a lower orbital speed",
              "Neptune is pushed back by the solar wind",
              "Neptune orbits in the opposite direction to Earth",
            ],
            answerIndex: 1,
            explanation:
              "Neptune's orbital radius is about 30 times Earth's, so its orbit is far longer. The Sun's gravity is also much weaker there, giving Neptune a lower orbital speed. A longer path travelled more slowly gives a far longer period (~165 years).",
            difficulty: "core",
            hints: [
              "Period depends on both the distance to travel and the speed.",
              "How does the size of Neptune's orbit compare with Earth's?",
              "Does a planet farther out move faster or slower?",
            ],
            guideRef: "Orbits and Gravitational Force",
          },
          {
            id: "phys-space-bm1-06",
            question: "The Sun is best described as:",
            options: [
              "A planet made mostly of rock and iron",
              "A main-sequence star made mostly of hydrogen and helium",
              "A red giant nearing the end of its life",
              "A cloud of gas and dust that has not yet ignited",
            ],
            answerIndex: 1,
            explanation:
              "The Sun is a stable main-sequence star composed mainly of hydrogen and helium, generating energy by fusing hydrogen into helium in its core.",
            difficulty: "warmup",
            guideRef: "The Sun and Stellar Energy",
          },
          {
            id: "phys-space-bm1-07",
            question: "A comet has a highly elliptical orbit. Compared with when it is far from the Sun, when it is close to the Sun the comet has:",
            options: [
              "Lower speed and lower kinetic energy",
              "Higher speed and higher kinetic energy",
              "The same speed throughout its orbit",
              "Higher speed but lower kinetic energy",
            ],
            answerIndex: 1,
            explanation:
              "As the comet falls toward the Sun, gravity does work on it: gravitational potential energy is converted to kinetic energy, so it moves fastest (highest KE) at perihelion, the closest point.",
            difficulty: "core",
            hints: [
              "Use conservation of energy: GPE + KE is constant.",
              "GPE is lowest when closest to the Sun — so KE is greatest there.",
              "Greater KE means greater speed.",
            ],
            guideRef: "The Solar System",
          },
          {
            id: "phys-space-bm1-08",
            question: "The Solar System is thought to have formed by accretion. This means:",
            options: [
              "A single huge planet broke apart into smaller pieces",
              "Material in a rotating cloud of gas and dust gradually clumped together under gravity",
              "The Sun captured ready-made planets passing nearby",
              "Stars exploded and the fragments cooled into planets",
            ],
            answerIndex: 1,
            explanation:
              "Accretion is the gradual accumulation of gas and dust under gravity. In a rotating nebula, most mass formed the Sun while the remaining disc material clumped together to build planets, moons, and smaller bodies.",
            difficulty: "core",
            hints: [
              "The root of 'accretion' means 'to grow by adding material'.",
              "Where did the gas and dust come from? A rotating nebula.",
              "Gravity pulls material together rather than apart.",
            ],
            guideRef: "The Solar System",
          },
          {
            id: "phys-space-bm1-09",
            question: "A satellite is moved to a higher orbit (larger radius) around Earth. Which statement is correct?",
            options: [
              "Its orbital speed increases and its period decreases",
              "Its orbital speed decreases and its period increases",
              "Both its orbital speed and period increase",
              "Both its orbital speed and period decrease",
            ],
            answerIndex: 1,
            explanation:
              "At a larger radius, Earth's gravity is weaker, so less centripetal force is available and the orbital speed is lower. A larger, slower orbit means a longer period (geostationary orbits at ~36 000 km take 24 h, far longer than low orbits at ~90 min).",
            difficulty: "challenge",
            hints: [
              "Gravity provides the centripetal force; how does it change with distance?",
              "Setting GMm/r² = mv²/r gives v² = GM/r, so v falls as r rises.",
              "A bigger circumference covered at a lower speed means a longer period.",
              "Compare a 90-minute low orbit with a 24-hour geostationary orbit.",
            ],
            strategy: "Equate gravitational and centripetal force to see how v and T depend on r.",
            guideRef: "Orbits and Gravitational Force",
          },
          {
            id: "phys-space-bm1-10",
            question: "In the Sun's core, fusion releases energy because:",
            options: [
              "Hydrogen nuclei are split into smaller particles",
              "The helium nucleus formed has slightly more mass than the hydrogen nuclei",
              "The helium nucleus formed has slightly less mass than the hydrogen nuclei that fused, and the lost mass becomes energy",
              "Chemical bonds form between hydrogen atoms, releasing heat",
            ],
            answerIndex: 2,
            explanation:
              "Four hydrogen nuclei fuse to form one helium nucleus, which has slightly less mass than the reactants. This mass defect is converted to energy via E = mc². Fusion joins nuclei (it is not fission, and it is not a chemical reaction).",
            difficulty: "challenge",
            hints: [
              "Fusion joins light nuclei; fission splits heavy ones — which is happening here?",
              "Compare the total mass before and after the reaction.",
              "A small loss of mass releases a large amount of energy (E = mc²).",
              "This is a nuclear process, not a chemical one involving bonds.",
            ],
            strategy: "Track mass before vs after; the missing mass becomes the released energy.",
            guideRef: "The Sun and Stellar Energy",
          },
        ],
      },
      // ── MCQ PAPER 2 ── orbital calculations, period-radius, comets
      {
        id: "phys-space-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Orbital-speed calculations, the radius–period relationship, and satellites.",
        questions: [
          {
            id: "phys-space-bm2-01",
            question: "A planet orbits a star at radius 6.0 × 10¹⁰ m with a period of 1.0 × 10⁷ s. What is its orbital speed?",
            options: ["1.9 × 10³ m/s", "3.8 × 10⁴ m/s", "6.0 × 10³ m/s", "1.9 × 10⁵ m/s"],
            answerIndex: 1,
            explanation:
              "v = 2πr / T = (2π × 6.0 × 10¹⁰) / (1.0 × 10⁷) = (3.77 × 10¹¹) / (1.0 × 10⁷) ≈ 3.8 × 10⁴ m/s.",
            difficulty: "core",
            hints: [
              "Use v = 2πr / T; both values are already in SI units.",
              "First find the circumference: 2π × 6.0 × 10¹⁰ ≈ 3.77 × 10¹¹ m.",
              "Divide by T = 1.0 × 10⁷ s.",
            ],
            strategy: "Compute circumference, then divide by period.",
            guideRef: "Orbits and Gravitational Force",
          },
          {
            id: "phys-space-bm2-02",
            question: "Which of these planets has the longest orbital period?",
            options: ["Mercury", "Earth", "Jupiter", "Neptune"],
            answerIndex: 3,
            explanation:
              "Neptune is the farthest of the four from the Sun, so it has the largest orbit and the slowest orbital speed, giving the longest period (~165 years).",
            difficulty: "warmup",
            guideRef: "Orbits and Gravitational Force",
          },
          {
            id: "phys-space-bm2-03",
            question: "The Moon orbits Earth at a radius of 3.84 × 10⁸ m with a period of about 2.36 × 10⁶ s (27.3 days). Its orbital speed is closest to:",
            options: ["1.0 × 10² m/s", "1.0 × 10³ m/s", "1.0 × 10⁴ m/s", "1.0 × 10⁵ m/s"],
            answerIndex: 1,
            explanation:
              "v = 2πr / T = (2π × 3.84 × 10⁸) / (2.36 × 10⁶) = (2.41 × 10⁹) / (2.36 × 10⁶) ≈ 1.0 × 10³ m/s (about 1 km/s).",
            difficulty: "core",
            hints: [
              "The period is already given in seconds — no conversion needed.",
              "Circumference = 2π × 3.84 × 10⁸ ≈ 2.41 × 10⁹ m.",
              "Divide by 2.36 × 10⁶ s.",
            ],
            strategy: "Substitute directly into v = 2πr / T.",
            guideRef: "Orbits and Gravitational Force",
          },
          {
            id: "phys-space-bm2-04",
            question: "A geostationary satellite must have an orbital period of:",
            options: ["About 90 minutes", "Exactly 12 hours", "Exactly 24 hours", "Exactly 1 year"],
            answerIndex: 2,
            explanation:
              "A geostationary satellite orbits in the same time Earth takes to rotate once (24 hours), so it stays above the same point on the equator.",
            difficulty: "warmup",
            guideRef: "Orbits and Gravitational Force",
          },
          {
            id: "phys-space-bm2-05",
            question: "A satellite in low Earth orbit (radius 6.8 × 10⁶ m) has an orbital speed of about 7.6 × 10³ m/s. What is its approximate orbital period?",
            options: ["About 90 minutes", "About 12 hours", "About 24 hours", "About 6 minutes"],
            answerIndex: 0,
            explanation:
              "Rearrange v = 2πr / T to T = 2πr / v = (2π × 6.8 × 10⁶) / (7.6 × 10³) = (4.27 × 10⁷) / (7.6 × 10³) ≈ 5.6 × 10³ s ≈ 93 minutes.",
            difficulty: "core",
            hints: [
              "Rearrange v = 2πr / T to make T the subject: T = 2πr / v.",
              "Circumference = 2π × 6.8 × 10⁶ ≈ 4.27 × 10⁷ m.",
              "Divide by 7.6 × 10³ m/s, then convert seconds to minutes.",
            ],
            strategy: "Rearrange the orbital-speed formula for T, then convert to minutes.",
            guideRef: "Orbits and Gravitational Force",
          },
          {
            id: "phys-space-bm2-06",
            question: "For planets orbiting the Sun, which graph relationship correctly describes how orbital speed v depends on orbital radius r?",
            options: [
              "v increases as r increases",
              "v decreases as r increases",
              "v is independent of r",
              "v increases then decreases as r increases",
            ],
            answerIndex: 1,
            explanation:
              "Gravity weakens with distance, so planets at larger radii orbit more slowly: v decreases as r increases (in fact v ∝ 1/√r).",
            difficulty: "core",
            hints: [
              "Equate gravity to centripetal force: GMm/r² = mv²/r.",
              "This gives v² = GM/r, so v gets smaller as r grows.",
              "Mercury (small r) is the fastest planet; Neptune (large r) the slowest.",
            ],
            guideRef: "Orbits and Gravitational Force",
          },
          {
            id: "phys-space-bm2-07",
            question: "Two satellites orbit Earth. Satellite A has a period of 2 h; satellite B has a period of 24 h. Which statement is correct?",
            options: [
              "A has the larger orbital radius",
              "B has the larger orbital radius and the lower orbital speed",
              "B has the larger orbital radius and the higher orbital speed",
              "Both have the same orbital radius",
            ],
            answerIndex: 1,
            explanation:
              "A longer period corresponds to a larger orbit. Satellite B (24 h) orbits farther out, where gravity is weaker, so it moves at a lower orbital speed than A.",
            difficulty: "core",
            hints: [
              "Longer period generally means a bigger orbit.",
              "Farther out means weaker gravity and a slower speed.",
              "Compare with low orbit (~90 min) vs geostationary (24 h).",
            ],
            guideRef: "Orbits and Gravitational Force",
          },
          {
            id: "phys-space-bm2-08",
            question: "A comet's speed is 50 km/s at perihelion and 1 km/s at aphelion. Which best explains this difference?",
            options: [
              "The Sun's gravity does work on the comet, converting GPE to KE as it falls inward",
              "Friction with space slows the comet at aphelion",
              "The comet's mass changes during the orbit",
              "The Sun pushes the comet faster when it is close",
            ],
            answerIndex: 0,
            explanation:
              "As the comet falls toward the Sun, gravitational potential energy is converted to kinetic energy, so it is fastest at perihelion. Moving back out, KE converts to GPE and it slows. There is no friction in space.",
            difficulty: "core",
            hints: [
              "Think about energy conservation, not friction.",
              "Falling inward: GPE decreases, so KE (and speed) increases.",
              "Moving outward: KE converts back to GPE, so it slows.",
            ],
            guideRef: "The Solar System",
          },
          {
            id: "phys-space-bm2-09",
            question: "Planet P orbits the Sun at four times the radius of planet Q. Using the qualitative relationship for circular orbits, P's orbital speed compared with Q's is:",
            options: [
              "Twice as large",
              "Four times as large",
              "Half as large",
              "One quarter as large",
            ],
            answerIndex: 2,
            explanation:
              "Since v ∝ 1/√r, multiplying r by 4 divides v by √4 = 2. So P moves at half the speed of Q.",
            difficulty: "challenge",
            hints: [
              "Equate gravity and centripetal force: GMm/r² = mv²/r, so v² = GM/r.",
              "This means v ∝ 1/√r.",
              "If r becomes 4r, then √r becomes 2√r.",
              "So v is divided by 2.",
            ],
            strategy: "Use v ∝ 1/√r and substitute the radius factor.",
            guideRef: "Orbits and Gravitational Force",
          },
          {
            id: "phys-space-bm2-10",
            question: "A spacecraft orbits a planet at radius 8.0 × 10⁶ m with speed 5.0 × 10³ m/s. What is its orbital period?",
            options: ["1.0 × 10⁴ s", "1.0 × 10³ s", "8.0 × 10³ s", "2.5 × 10⁴ s"],
            answerIndex: 0,
            explanation:
              "T = 2πr / v = (2π × 8.0 × 10⁶) / (5.0 × 10³) = (5.03 × 10⁷) / (5.0 × 10³) ≈ 1.0 × 10⁴ s.",
            difficulty: "challenge",
            hints: [
              "Rearrange v = 2πr / T to T = 2πr / v.",
              "Circumference = 2π × 8.0 × 10⁶ ≈ 5.03 × 10⁷ m.",
              "Divide by 5.0 × 10³ m/s.",
            ],
            strategy: "Rearrange for T, then substitute.",
            guideRef: "Orbits and Gravitational Force",
          },
        ],
      },
      // ── MCQ PAPER 3 ── Sun, fusion, stellar life cycles
      {
        id: "phys-space-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Stellar energy, fusion, and the life cycles of low- and high-mass stars.",
        questions: [
          {
            id: "phys-space-bm3-01",
            question: "What is the correct early sequence in the formation of a star?",
            options: [
              "Protostar → nebula → main-sequence star",
              "Nebula → protostar → main-sequence star",
              "Nebula → main-sequence star → protostar",
              "Main-sequence star → protostar → nebula",
            ],
            answerIndex: 1,
            explanation:
              "A nebula (gas and dust) contracts under gravity to form a protostar, which heats up until fusion ignites and it joins the main sequence.",
            difficulty: "warmup",
            guideRef: "The Life Cycle of a Star",
          },
          {
            id: "phys-space-bm3-02",
            question: "The Sun is mainly composed of which two elements?",
            options: ["Oxygen and nitrogen", "Hydrogen and helium", "Carbon and oxygen", "Hydrogen and carbon"],
            answerIndex: 1,
            explanation:
              "The Sun is mostly hydrogen, with helium the second most abundant element. Fusion converts hydrogen into helium.",
            difficulty: "warmup",
            guideRef: "The Sun and Stellar Energy",
          },
          {
            id: "phys-space-bm3-03",
            question: "Which sequence shows the final stages for a star with a similar mass to the Sun?",
            options: [
              "Red giant → planetary nebula → white dwarf",
              "Red supergiant → supernova → neutron star",
              "Red giant → supernova → black hole",
              "Red supergiant → planetary nebula → white dwarf",
            ],
            answerIndex: 0,
            explanation:
              "A Sun-like star becomes a red giant, sheds its outer layers as a planetary nebula, and leaves a hot dense core — a white dwarf. Supernovae and neutron stars/black holes are the fate of much more massive stars.",
            difficulty: "core",
            hints: [
              "Only massive stars explode as supernovae.",
              "A Sun-like star gently ejects its outer layers — what is this called?",
              "The remnant core of a Sun-like star is a white dwarf.",
            ],
            guideRef: "The Life Cycle of a Star",
          },
          {
            id: "phys-space-bm3-04",
            question: "What keeps a main-sequence star stable in size over billions of years?",
            options: [
              "There are no forces acting on the star",
              "Inward gravity is balanced by outward pressure from radiation and hot gas",
              "The star is held together by magnetic fields only",
              "The star is solid and cannot change shape",
            ],
            answerIndex: 1,
            explanation:
              "A main-sequence star is in equilibrium: the inward pull of gravity is balanced by the outward pressure produced by the energy released in fusion (radiation and hot gas). This keeps its size stable.",
            difficulty: "core",
            hints: [
              "Two opposing influences keep the star the same size.",
              "Gravity acts inward — what acts outward?",
              "Fusion in the core produces hot gas and radiation pressure.",
            ],
            guideRef: "The Sun and Stellar Energy",
          },
          {
            id: "phys-space-bm3-05",
            question: "A red supergiant explodes. The most massive possible remnant left behind is:",
            options: ["A white dwarf", "A planetary nebula", "A neutron star", "A black hole"],
            answerIndex: 3,
            explanation:
              "After a supernova, the remnant core forms a neutron star if it is up to ~3 solar masses, or collapses into a black hole if it is more massive. The black hole is the most massive remnant.",
            difficulty: "core",
            hints: [
              "Supernovae leave one of two remnants.",
              "The more massive the core, the more extreme the remnant.",
              "Nothing, not even light, escapes the most massive one.",
            ],
            guideRef: "The Life Cycle of a Star",
          },
          {
            id: "phys-space-bm3-06",
            question: "Why do massive stars spend far less time on the main sequence than Sun-like stars?",
            options: [
              "They contain less hydrogen fuel in total",
              "They fuse their fuel much faster because of higher core temperature and pressure",
              "They never reach the temperature needed for fusion",
              "They lose all their mass as a planetary nebula very early",
            ],
            answerIndex: 1,
            explanation:
              "Although massive stars have more fuel, their far higher core temperature and pressure make them fuse hydrogen at a much greater rate, so they exhaust their fuel in millions rather than billions of years.",
            difficulty: "challenge",
            hints: [
              "It is the rate of fusion, not just the amount of fuel, that matters.",
              "A massive star has a hotter, denser core.",
              "A hotter core fuses fuel much faster, burning through it quickly.",
              "Lifetime ≈ fuel available ÷ rate of use.",
            ],
            strategy: "Compare lifetime as fuel ÷ rate of consumption, not fuel alone.",
            guideRef: "The Life Cycle of a Star",
          },
          {
            id: "phys-space-bm3-07",
            question: "Elements heavier than helium, such as carbon and iron, are mainly produced:",
            options: [
              "In nebulae before stars form",
              "By fusion inside stars and scattered by supernovae",
              "By the Sun's solar wind",
              "Only during the Big Bang",
            ],
            answerIndex: 1,
            explanation:
              "Heavier elements are forged by fusion inside stars; supernovae of massive stars scatter these elements into space, enriching the nebulae from which later stars and planets form.",
            difficulty: "challenge",
            hints: [
              "The Big Bang produced mainly hydrogen and helium.",
              "Where does fusion of heavier nuclei occur?",
              "How are these elements then spread into space?",
            ],
            strategy: "Link element formation (fusion in stars) to dispersal (supernovae).",
            guideRef: "The Life Cycle of a Star",
          },
          {
            id: "phys-space-bm3-08",
            question: "A hot star appears blue-white while a cooler star appears red. This shows that a star's colour depends on its:",
            options: ["Distance from Earth", "Surface temperature", "Mass only", "Age only"],
            answerIndex: 1,
            explanation:
              "A star's colour is determined mainly by its surface temperature: hotter stars appear blue-white, cooler stars orange or red. The Sun, at ~5500 °C, appears yellow-white.",
            difficulty: "warmup",
            guideRef: "The Sun and Stellar Energy",
          },
          {
            id: "phys-space-bm3-09",
            question: "Which stage is common to the life cycle of BOTH a Sun-like star and a massive star?",
            options: [
              "Supernova",
              "White dwarf",
              "Main-sequence (hydrogen-fusing) star",
              "Black hole",
            ],
            answerIndex: 2,
            explanation:
              "Both kinds of star form from a nebula, become a protostar, and spend a long stable period as a main-sequence star fusing hydrogen. Their paths diverge only afterwards.",
            difficulty: "core",
            hints: [
              "Find the stage that appears in both pathways before they split.",
              "White dwarfs and black holes are end-states of different masses.",
              "Both stars fuse hydrogen for most of their lives.",
            ],
            guideRef: "The Life Cycle of a Star",
          },
          {
            id: "phys-space-bm3-10",
            question: "A protostar continues to contract but has not yet become a main-sequence star. The key event still to occur is:",
            options: [
              "The onset of nuclear fusion in the core",
              "The expansion into a red giant",
              "The ejection of a planetary nebula",
              "A supernova explosion",
            ],
            answerIndex: 0,
            explanation:
              "A protostar becomes a main-sequence star only when its core becomes hot and dense enough for hydrogen fusion to begin. The other events occur much later (or only for some stars).",
            difficulty: "core",
            hints: [
              "What defines a main-sequence star?",
              "A protostar is still heating up as it contracts.",
              "Fusion must start before it joins the main sequence.",
            ],
            guideRef: "The Life Cycle of a Star",
          },
        ],
      },
      // ── MCQ PAPER 4 ── galaxies, light-year, redshift, Big Bang
      {
        id: "phys-space-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Galaxies, the light-year, redshift, and the expanding Universe.",
        questions: [
          {
            id: "phys-space-bm4-01",
            question: "Our Sun belongs to which galaxy?",
            options: ["Andromeda", "The Milky Way", "The Large Magellanic Cloud", "The Local Group"],
            answerIndex: 1,
            explanation:
              "The Sun is one of hundreds of billions of stars in the Milky Way, a barred-spiral galaxy. (The Local Group is a cluster of galaxies, not a single galaxy.)",
            difficulty: "warmup",
            guideRef: "Galaxies and the Scale of the Universe",
          },
          {
            id: "phys-space-bm4-02",
            question: "A light-year is a unit of:",
            options: ["Time", "Distance", "Speed", "Brightness"],
            answerIndex: 1,
            explanation:
              "A light-year is the distance light travels in one year (≈ 9.46 × 10¹⁵ m). Despite the word 'year', it measures distance, not time.",
            difficulty: "warmup",
            guideRef: "Galaxies and the Scale of the Universe",
          },
          {
            id: "phys-space-bm4-03",
            question: "Light from a distant galaxy has its spectral lines shifted toward longer wavelengths. This is called:",
            options: ["Blueshift", "Refraction", "Redshift", "Diffraction"],
            answerIndex: 2,
            explanation:
              "A shift to longer (redder) wavelengths is redshift, caused by the galaxy moving away from us — evidence that the Universe is expanding.",
            difficulty: "warmup",
            guideRef: "The Expanding Universe and the Big Bang",
          },
          {
            id: "phys-space-bm4-04",
            question: "Taking the speed of light as 3.0 × 10⁸ m/s and one year as 3.15 × 10⁷ s, approximately how far is one light-year?",
            options: ["9.5 × 10¹⁵ m", "9.5 × 10¹² m", "9.5 × 10¹⁸ m", "4.8 × 10¹⁵ m"],
            answerIndex: 0,
            explanation:
              "distance = speed × time = (3.0 × 10⁸) × (3.15 × 10⁷) = 9.45 × 10¹⁵ m ≈ 9.5 × 10¹⁵ m.",
            difficulty: "core",
            hints: [
              "Use distance = speed × time.",
              "Multiply 3.0 × 10⁸ m/s by the number of seconds in a year.",
              "Add the powers of ten: 10⁸ × 10⁷ = 10¹⁵.",
            ],
            strategy: "distance = speed × time; combine the powers of ten.",
            guideRef: "Galaxies and the Scale of the Universe",
          },
          {
            id: "phys-space-bm4-05",
            question: "Astronomers observe that more distant galaxies have greater redshifts. What does this strongly suggest?",
            options: [
              "Distant galaxies are hotter",
              "The Universe is expanding, with more distant galaxies receding faster",
              "Light slows down over large distances",
              "Distant galaxies are made of different elements",
            ],
            answerIndex: 1,
            explanation:
              "Greater redshift means faster recession. The pattern 'more distant = faster' is exactly what a uniformly expanding Universe predicts, supporting the Big Bang theory.",
            difficulty: "core",
            hints: [
              "Greater redshift corresponds to a higher recession speed.",
              "What does 'farther away means moving away faster' imply about the whole Universe?",
              "Think of dots on an inflating balloon.",
            ],
            guideRef: "The Expanding Universe and the Big Bang",
          },
          {
            id: "phys-space-bm4-06",
            question: "Why do astronomers use the light-year instead of the metre to measure distances between galaxies?",
            options: [
              "The metre cannot be defined in space",
              "Distances in metres would be impractically large numbers",
              "Light-years are more accurate than metres",
              "Galaxies do not have a measurable size in metres",
            ],
            answerIndex: 1,
            explanation:
              "Intergalactic distances in metres run to 10²² and beyond. The light-year (≈ 9.46 × 10¹⁵ m) gives far more manageable numbers — e.g. 'about 2.5 million ly to Andromeda'.",
            difficulty: "core",
            hints: [
              "Think about how many metres lie between galaxies.",
              "Very large numbers are awkward to write and compare.",
              "The light-year scales the numbers down to something usable.",
            ],
            guideRef: "Galaxies and the Scale of the Universe",
          },
          {
            id: "phys-space-bm4-07",
            question: "Proxima Centauri is about 4.2 light-years away. Roughly how far is this in metres? (1 ly ≈ 9.46 × 10¹⁵ m)",
            options: ["4.0 × 10¹⁶ m", "4.0 × 10¹⁵ m", "2.3 × 10¹⁵ m", "4.0 × 10¹⁴ m"],
            answerIndex: 0,
            explanation:
              "distance = 4.2 × 9.46 × 10¹⁵ = 39.7 × 10¹⁵ ≈ 4.0 × 10¹⁶ m.",
            difficulty: "core",
            hints: [
              "Multiply the number of light-years by the metres in one light-year.",
              "4.2 × 9.46 ≈ 39.7.",
              "39.7 × 10¹⁵ = 3.97 × 10¹⁶ m.",
            ],
            strategy: "Multiply ly by 9.46 × 10¹⁵ m, then tidy the standard form.",
            guideRef: "Galaxies and the Scale of the Universe",
          },
          {
            id: "phys-space-bm4-08",
            question: "When we observe a galaxy 100 million light-years away, we are seeing it:",
            options: [
              "As it is right now",
              "As it was 100 million years ago",
              "As it will be in 100 million years",
              "Exactly as the Milky Way looks",
            ],
            answerIndex: 1,
            explanation:
              "Light takes 100 million years to reach us from a galaxy 100 million ly away, so we see it as it was 100 million years ago — observing distant objects means looking back in time.",
            difficulty: "core",
            hints: [
              "A light-year is the distance light travels in one year.",
              "How long did the light take to reach us from that distance?",
              "We see the galaxy as it was when the light left it.",
            ],
            guideRef: "Galaxies and the Scale of the Universe",
          },
          {
            id: "phys-space-bm4-09",
            question: "Galaxy A shows twice the redshift of galaxy B. Using the qualitative Hubble relationship, galaxy A is approximately:",
            options: [
              "Half as far away as B",
              "The same distance as B",
              "Twice as far away as B",
              "Four times as far away as B",
            ],
            answerIndex: 2,
            explanation:
              "Redshift indicates recession speed, and recession speed is proportional to distance (v = H₀d). Twice the redshift means roughly twice the speed and therefore about twice the distance.",
            difficulty: "challenge",
            hints: [
              "Redshift increases with recession speed.",
              "Recession speed is proportional to distance.",
              "If speed doubles, distance roughly doubles too.",
            ],
            strategy: "Use v ∝ redshift and v ∝ distance to link redshift with distance.",
            guideRef: "The Expanding Universe and the Big Bang",
          },
          {
            id: "phys-space-bm4-10",
            question: "Besides the redshift of galaxies, which additional observation supports the Big Bang theory?",
            options: [
              "The Sun's daily motion across the sky",
              "The cosmic microwave background radiation detected from all directions",
              "The phases of the Moon",
              "The existence of the asteroid belt",
            ],
            answerIndex: 1,
            explanation:
              "The cosmic microwave background radiation (CMBR) is faint microwave radiation arriving uniformly from all directions — the cooled afterglow of the hot, dense early Universe predicted by the Big Bang theory.",
            difficulty: "challenge",
            hints: [
              "Look for evidence about the early, hot Universe.",
              "It is a faint radiation coming from everywhere in the sky.",
              "It lies in the microwave part of the spectrum.",
            ],
            strategy: "Recall the two main lines of Big Bang evidence: redshift and the CMBR.",
            guideRef: "The Expanding Universe and the Big Bang",
          },
        ],
      },
    ],
    qaPapers: [
      // ── QA PAPER 1 ── Solar System and orbits
      {
        id: "phys-space-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "The Solar System, planetary order, and gravitational orbits.",
        questions: [
          {
            id: "phys-space-bq1-01",
            question:
              "(a) Name the eight planets of the Solar System in order of increasing distance from the Sun.\n(b) State which of these are described as rocky planets and which are gas giants.\n(c) Where in the Solar System is the asteroid belt located?",
            marks: 5,
            modelAnswer:
              "(a) Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.\n(b) Rocky planets: Mercury, Venus, Earth, Mars (the four inner planets). Gas giants: Jupiter, Saturn, Uranus, Neptune (the four outer planets).\n(c) The asteroid belt lies between the orbits of Mars and Jupiter.",
            markScheme: [
              "All eight planets named in the correct order [1]",
              "Rocky planets correctly identified as Mercury, Venus, Earth, Mars [1]",
              "Gas giants correctly identified as Jupiter, Saturn, Uranus, Neptune [1]",
              "Asteroid belt located between Mars and Jupiter [1]",
              "Clear distinction made between inner (rocky) and outer (gas) groups [1]",
            ],
            commonError:
              "Swapping the order of Uranus and Neptune, or placing the asteroid belt beyond Neptune instead of between Mars and Jupiter.",
            difficulty: "warmup",
            guideRef: "The Solar System",
          },
          {
            id: "phys-space-bq1-02",
            question:
              "Explain why a planet orbiting the Sun does not fly off into space in a straight line, even though no engine pushes it along its path.",
            marks: 4,
            modelAnswer:
              "Any object moving in a circle needs a resultant force directed toward the centre of the circle, called the centripetal force. For a planet, this force is provided by the gravitational attraction between the planet and the Sun. This force continuously changes the direction of the planet's velocity, pulling it toward the Sun and curving its path into an orbit instead of a straight line. Without gravity the planet would travel in a straight line (Newton's first law).",
            markScheme: [
              "Circular motion requires a centripetal force directed toward the centre [1]",
              "This force is provided by gravitational attraction between planet and Sun [1]",
              "The force changes the direction of the planet's velocity / acts at right angles to motion [1]",
              "Without this force the planet would move in a straight line [1]",
            ],
            commonError:
              "Saying gravity 'speeds the planet up' or that a forward force keeps it moving — gravity acts toward the Sun and changes direction, not forward speed, in a circular orbit.",
            difficulty: "core",
            hints: [
              "What kind of force is needed for any circular motion?",
              "Which body provides that force for a planet?",
              "In which direction does this force act?",
              "What would happen to the planet if the force suddenly disappeared?",
            ],
            strategy: "Identify the centripetal force, its source, and its effect on direction.",
            guideRef: "Orbits and Gravitational Force",
          },
          {
            id: "phys-space-bq1-03",
            question:
              "The Earth orbits the Sun at a radius of 1.50 × 10¹¹ m with a period of 365 days.\n(a) Show that the orbital speed of the Earth is approximately 3.0 × 10⁴ m/s. Show your working.\n(b) State and explain how the orbital speed of Mars (orbital radius ~2.3 × 10¹¹ m) compares with that of the Earth.",
            marks: 6,
            modelAnswer:
              "(a) Convert the period to seconds: T = 365 × 24 × 3600 = 3.15 × 10⁷ s.\nv = 2πr / T = (2π × 1.50 × 10¹¹) / (3.15 × 10⁷) = (9.42 × 10¹¹) / (3.15 × 10⁷) ≈ 3.0 × 10⁴ m/s. ✓\n(b) Mars orbits more slowly than the Earth. It is farther from the Sun, so the Sun's gravitational attraction is weaker there; less centripetal force is available, giving a lower orbital speed.",
            markScheme: [
              "Period converted to seconds (≈ 3.15 × 10⁷ s) [1]",
              "Correct substitution into v = 2πr / T [1]",
              "Answer ≈ 3.0 × 10⁴ m/s [1]",
              "Mars orbits more slowly than Earth [1]",
              "Because Mars is farther from the Sun [1]",
              "Weaker gravity / smaller centripetal force at larger radius → lower speed [1]",
            ],
            commonError:
              "Leaving the period in days, which gives a meaningless answer; or stating Mars moves faster because it 'has farther to go'.",
            difficulty: "core",
            hints: [
              "Convert the period to seconds before substituting.",
              "Use v = 2πr / T with r in metres.",
              "For part (b), think about how gravity changes with distance.",
              "Weaker gravity means a smaller centripetal force and a lower speed.",
            ],
            strategy: "Convert units, substitute, then reason qualitatively for the comparison.",
            solutions: [
              {
                label: "Method: orbital-speed formula",
                steps: [
                  "T = 365 × 24 × 3600 = 3.1536 × 10⁷ s (≈ 3.15 × 10⁷ s)",
                  "Circumference = 2πr = 2π × 1.50 × 10¹¹ = 9.42 × 10¹¹ m",
                  "v = 9.42 × 10¹¹ / 3.15 × 10⁷ = 2.99 × 10⁴ ≈ 3.0 × 10⁴ m/s",
                ],
              },
            ],
            guideRef: "Orbits and Gravitational Force",
          },
          {
            id: "phys-space-bq1-04",
            question:
              "A comet moves in a highly elliptical orbit around the Sun.\n(a) State at which point in its orbit the comet moves fastest, and name that point.\n(b) Explain, in terms of energy, why the comet speeds up as it approaches the Sun.",
            marks: 4,
            modelAnswer:
              "(a) The comet moves fastest at perihelion — the point in its orbit closest to the Sun.\n(b) As the comet approaches the Sun, the Sun's gravity does work on it. Gravitational potential energy is converted into kinetic energy, so the comet's kinetic energy (and therefore its speed) increases. As it moves away again, kinetic energy is converted back to gravitational potential energy and it slows.",
            markScheme: [
              "Fastest when closest to the Sun [1]",
              "Named as perihelion [1]",
              "Gravity does work / GPE converted to KE as it approaches [1]",
              "Increased KE means increased speed [1]",
            ],
            commonError:
              "Saying the Sun 'pushes' the comet faster, rather than that gravity converts GPE into KE as the comet falls inward.",
            difficulty: "core",
            hints: [
              "Where is the comet's speed greatest — near or far from the Sun?",
              "The closest point has a special name (perihelion).",
              "Use energy conservation: GPE + KE = constant.",
              "As the comet falls inward, GPE decreases — where does that energy go?",
            ],
            strategy: "Use energy conservation: falling inward converts GPE to KE.",
            guideRef: "The Solar System",
          },
          {
            id: "phys-space-bq1-05",
            question:
              "A geostationary communications satellite orbits Earth at a radius of 4.23 × 10⁷ m (measured from Earth's centre) with a period of exactly 24 hours.\n(a) Calculate its orbital speed. Show your working.\n(b) State one advantage of a geostationary orbit for communications.",
            marks: 5,
            modelAnswer:
              "(a) Convert the period to seconds: T = 24 × 3600 = 8.64 × 10⁴ s.\nv = 2πr / T = (2π × 4.23 × 10⁷) / (8.64 × 10⁴) = (2.658 × 10⁸) / (8.64 × 10⁴) ≈ 3.08 × 10³ m/s (about 3.1 × 10³ m/s).\n(b) A geostationary satellite stays above the same point on the Earth's surface, so a ground antenna (e.g. a satellite dish) can be fixed in one direction and does not need to track the satellite.",
            markScheme: [
              "Period converted to seconds (8.64 × 10⁴ s) [1]",
              "Correct substitution into v = 2πr / T [1]",
              "Answer ≈ 3.1 × 10³ m/s (allow 3.0–3.1 × 10³) [1]",
              "Advantage stated: stays above the same point on Earth [1]",
              "So the receiving dish/antenna can stay fixed / no tracking needed [1]",
            ],
            commonError:
              "Forgetting to convert 24 hours into seconds, or using 12 hours instead of 24.",
            difficulty: "core",
            hints: [
              "Convert 24 hours into seconds first.",
              "Use v = 2πr / T with r in metres.",
              "Circumference = 2π × 4.23 × 10⁷ m.",
              "For the advantage, think about whether the dish must move.",
            ],
            strategy: "Convert the period, substitute, then state a practical benefit.",
            solutions: [
              {
                label: "Method: orbital-speed formula",
                steps: [
                  "T = 24 × 3600 = 8.64 × 10⁴ s",
                  "Circumference = 2π × 4.23 × 10⁷ = 2.658 × 10⁸ m",
                  "v = 2.658 × 10⁸ / 8.64 × 10⁴ = 3.08 × 10³ ≈ 3.1 × 10³ m/s",
                ],
              },
            ],
            guideRef: "Orbits and Gravitational Force",
          },
          {
            id: "phys-space-bq1-06",
            question:
              "Describe the accretion model for the formation of the Solar System, starting from a nebula. Explain why most of the mass ended up in the Sun.",
            marks: 5,
            modelAnswer:
              "The Solar System formed from a rotating cloud of gas and dust called a nebula. Gravity pulled this material together. Most of the mass collapsed toward the centre, where the high density and temperature eventually allowed fusion to begin, forming the Sun. The remaining material formed a rotating disc; over time, dust and gas in the disc clumped together under gravity — a process called accretion — building up larger and larger bodies that became the planets, moons, asteroids, and comets. Most of the mass ended up at the centre because gravity drew the bulk of the material inward to the densest region, leaving only a small fraction in the surrounding disc.",
            markScheme: [
              "Started from a (rotating) cloud of gas and dust / nebula [1]",
              "Gravity pulled material together [1]",
              "Most mass collapsed to the centre to form the Sun [1]",
              "Remaining disc material clumped together (accretion) to form planets/moons/asteroids [1]",
              "Most mass at centre because gravity drew the bulk of material inward [1]",
            ],
            commonError:
              "Describing the planets forming first and the Sun forming from leftover planets, which reverses the actual sequence.",
            difficulty: "challenge",
            hints: [
              "Name the starting cloud and what it is made of.",
              "What force pulls the material together?",
              "Where does most of the mass go, and what does it form?",
              "Define accretion: gradual clumping of material under gravity.",
            ],
            strategy: "Sequence: nebula → gravity → central Sun → disc → accretion of planets.",
            guideRef: "The Solar System",
          },
          {
            id: "phys-space-bq1-07",
            question:
              "Two satellites orbit the Earth. Satellite X is in a low orbit (period ~90 minutes) and satellite Y is in a higher, geostationary orbit (period 24 hours).\n(a) State which satellite has the greater orbital radius.\n(b) Explain why that satellite also has the lower orbital speed.",
            marks: 4,
            modelAnswer:
              "(a) Satellite Y (geostationary, 24-hour period) has the greater orbital radius.\n(b) At a larger orbital radius the Earth's gravitational attraction is weaker (gravity decreases with distance). A weaker gravitational force means a smaller centripetal force is available, so the satellite must orbit at a lower speed. Combining v = 2πr / T, the very long period compared with the modest increase in circumference also indicates a lower speed.",
            markScheme: [
              "Satellite Y has the greater orbital radius [1]",
              "At larger radius, gravitational force is weaker [1]",
              "Weaker / smaller centripetal force available [1]",
              "Therefore lower orbital speed [1]",
            ],
            commonError:
              "Assuming the higher satellite must move faster because it has a longer period — in fact the longer period reflects a slower speed over a larger orbit.",
            difficulty: "core",
            hints: [
              "A longer period corresponds to a larger orbit.",
              "How does gravity change as the orbital radius increases?",
              "Less centripetal force available means what for the speed?",
              "Geostationary (24 h) orbits are much higher than 90-minute orbits.",
            ],
            strategy: "Relate radius to gravitational force strength, then to orbital speed.",
            guideRef: "Orbits and Gravitational Force",
          },
          {
            id: "phys-space-bq1-08",
            question:
              "Distinguish between a planet, a moon, and a comet. Give one defining feature of each.",
            marks: 3,
            modelAnswer:
              "A planet is a large body that orbits the Sun directly and has cleared its orbital path of other material. A moon (natural satellite) is a body that orbits a planet rather than the Sun directly. A comet is a small icy body that orbits the Sun in a highly elliptical path, growing a tail of gas and dust when heated near the Sun.",
            markScheme: [
              "Planet: large body that orbits the Sun (directly) [1]",
              "Moon: natural satellite that orbits a planet [1]",
              "Comet: small icy body in a highly elliptical orbit / develops a tail near the Sun [1]",
            ],
            commonError:
              "Defining a moon as anything that orbits the Sun, which fails to distinguish it from a planet.",
            difficulty: "warmup",
            guideRef: "The Solar System",
          },
          {
            id: "phys-space-bq1-09",
            question:
              "The planet Jupiter has an orbital radius of about 7.8 × 10¹¹ m and an orbital period of about 3.7 × 10⁸ s.\n(a) Calculate Jupiter's orbital speed. Show your working.\n(b) Earth's orbital speed is about 3.0 × 10⁴ m/s. Comment on how your answer compares and why.",
            marks: 5,
            modelAnswer:
              "(a) v = 2πr / T = (2π × 7.8 × 10¹¹) / (3.7 × 10⁸) = (4.90 × 10¹²) / (3.7 × 10⁸) ≈ 1.3 × 10⁴ m/s.\n(b) Jupiter's orbital speed (~1.3 × 10⁴ m/s) is lower than Earth's (~3.0 × 10⁴ m/s). Jupiter is much farther from the Sun, so the Sun's gravity is weaker there; a smaller centripetal force gives a lower orbital speed.",
            markScheme: [
              "Correct substitution into v = 2πr / T [1]",
              "Circumference 2πr ≈ 4.9 × 10¹² m [1]",
              "Answer ≈ 1.3 × 10⁴ m/s [1]",
              "Jupiter is slower than Earth [1]",
              "Because it is farther out / gravity weaker / less centripetal force [1]",
            ],
            commonError:
              "Arithmetic slips with powers of ten when dividing 10¹² by 10⁸ (should give 10⁴).",
            difficulty: "core",
            hints: [
              "Both r and T are already in SI units, so substitute directly.",
              "Circumference = 2π × 7.8 × 10¹¹ m.",
              "Divide by 3.7 × 10⁸ s; subtract the indices (12 − 8 = 4).",
              "Compare with Earth and explain using distance and gravity.",
            ],
            strategy: "Substitute into v = 2πr / T, then compare using the gravity–radius link.",
            solutions: [
              {
                label: "Method: orbital-speed formula",
                steps: [
                  "Circumference = 2π × 7.8 × 10¹¹ = 4.90 × 10¹² m",
                  "v = 4.90 × 10¹² / 3.7 × 10⁸",
                  "v = 1.32 × 10⁴ ≈ 1.3 × 10⁴ m/s (slower than Earth)",
                ],
              },
            ],
            guideRef: "Orbits and Gravitational Force",
          },
          {
            id: "phys-space-bq1-10",
            question:
              "For a planet in a circular orbit, the gravitational force provides the centripetal force. Use this idea to explain qualitatively why planets farther from the Sun take longer to complete one orbit. (You are not required to derive an equation.)",
            marks: 4,
            modelAnswer:
              "For a planet farther from the Sun there are two effects. First, the orbit is larger, so there is a greater circumference to travel. Second, the Sun's gravitational force is weaker at a larger radius, so the centripetal force is smaller and the planet's orbital speed is lower. A longer distance covered at a lower speed means the time for one orbit (the period) is much longer. (More precisely, T² is proportional to r³, but the qualitative reasoning is enough.)",
            markScheme: [
              "Larger orbit = greater distance/circumference to travel [1]",
              "Gravity is weaker at larger radius [1]",
              "Smaller centripetal force → lower orbital speed [1]",
              "Greater distance at lower speed → longer period [1]",
            ],
            commonError:
              "Considering only the larger circumference and forgetting that the orbital speed is also lower — both effects lengthen the period.",
            difficulty: "challenge",
            hints: [
              "There are two reasons the period is longer; try to find both.",
              "Think about the size of the orbit (distance to travel).",
              "Think about how gravity, and hence speed, changes with radius.",
              "Combine: longer distance and slower speed both increase the period.",
            ],
            strategy: "Combine two effects — bigger orbit and lower speed — to explain the longer period.",
            guideRef: "Orbits and Gravitational Force",
          },
        ],
      },
      // ── QA PAPER 2 ── the Sun and stellar life cycles
      {
        id: "phys-space-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "The Sun as a star, nuclear fusion, and stellar evolution.",
        questions: [
          {
            id: "phys-space-bq2-01",
            question:
              "(a) Name the two elements that make up most of the Sun.\n(b) Name the process by which the Sun releases energy in its core, and write a word/symbol summary of what happens.",
            marks: 4,
            modelAnswer:
              "(a) Hydrogen (most abundant) and helium.\n(b) Nuclear fusion. In the core, hydrogen nuclei fuse together to form helium nuclei, releasing energy: 4 ¹H → ⁴He + energy.",
            markScheme: [
              "Hydrogen named [1]",
              "Helium named [1]",
              "Process named as nuclear fusion [1]",
              "Hydrogen fusing/joining to form helium (with energy released) [1]",
            ],
            commonError:
              "Writing 'nuclear fission' instead of fusion — the Sun joins light nuclei, it does not split heavy ones.",
            difficulty: "warmup",
            guideRef: "The Sun and Stellar Energy",
          },
          {
            id: "phys-space-bq2-02",
            question:
              "Explain how a main-sequence star such as the Sun stays the same size for billions of years. Refer to the forces or pressures involved.",
            marks: 4,
            modelAnswer:
              "A main-sequence star is in equilibrium. Gravity acts inward, tending to make the star collapse. Energy released by nuclear fusion in the core produces an outward pressure from the hot gas and radiation. These two effects are balanced: the outward pressure exactly opposes the inward pull of gravity, so the star neither collapses nor expands and stays the same size while fusion continues.",
            markScheme: [
              "Gravity acts inward / tends to collapse the star [1]",
              "Fusion produces outward pressure (radiation / hot gas) [1]",
              "The two are balanced / in equilibrium [1]",
              "So the star stays a constant size while fusion continues [1]",
            ],
            commonError:
              "Mentioning only gravity or only radiation pressure, instead of explaining the balance between the two.",
            difficulty: "core",
            hints: [
              "Identify the force that acts inward.",
              "Identify what produces an outward push.",
              "How do the two compare in a stable star?",
              "Use the word 'equilibrium' or 'balanced'.",
            ],
            strategy: "Name the inward and outward effects, then state that they balance.",
            guideRef: "The Sun and Stellar Energy",
          },
          {
            id: "phys-space-bq2-03",
            question:
              "Describe the life cycle of a star with a similar mass to the Sun, from a nebula to its final stage. Name each stage in order.",
            marks: 6,
            modelAnswer:
              "A nebula (cloud of gas and dust) contracts under gravity. As material falls inward it heats up, forming a protostar. When the core is hot and dense enough, hydrogen fusion begins and the star becomes a stable main-sequence star, lasting billions of years. When the core hydrogen runs out, the core contracts while the outer layers expand and cool, so the star becomes a red giant. The red giant then ejects its outer layers as a planetary nebula, leaving behind a hot, dense core — a white dwarf — which slowly cools over time.",
            markScheme: [
              "Nebula contracts under gravity [1]",
              "Protostar forms as material heats up [1]",
              "Main-sequence star (hydrogen fusion begins) [1]",
              "Red giant (core hydrogen exhausted, outer layers expand/cool) [1]",
              "Planetary nebula (outer layers ejected) [1]",
              "White dwarf (hot dense remnant core) [1]",
            ],
            commonError:
              "Adding a supernova or neutron star to a Sun-like star's life cycle — those belong to massive stars.",
            difficulty: "core",
            hints: [
              "Start with the nebula and the role of gravity.",
              "What forms before fusion starts?",
              "Name the long stable phase.",
              "End with the planetary nebula and white dwarf — no supernova.",
            ],
            strategy: "List the stages in order; remember Sun-like stars do not explode.",
            guideRef: "The Life Cycle of a Star",
          },
          {
            id: "phys-space-bq2-04",
            question:
              "(a) State the two possible final remnants of a massive star after a supernova.\n(b) Explain what determines which of these forms.",
            marks: 4,
            modelAnswer:
              "(a) A neutron star or a black hole.\n(b) The remnant depends on the mass of the core left after the supernova. If the remnant core is up to about 3 solar masses, it forms a neutron star. If the remnant core is more massive than this, gravity is so strong that it collapses further into a black hole.",
            markScheme: [
              "Neutron star [1]",
              "Black hole [1]",
              "Outcome depends on the mass of the remnant core [1]",
              "More massive core → black hole; less massive → neutron star [1]",
            ],
            commonError:
              "Stating that the original star's brightness or temperature decides the remnant, rather than the remnant core's mass.",
            difficulty: "core",
            hints: [
              "There are exactly two possible remnants.",
              "What property of the remnant core decides between them?",
              "Greater mass leads to the more extreme object.",
              "A black hole forms from the most massive cores.",
            ],
            strategy: "Name both remnants, then link the outcome to remnant mass.",
            guideRef: "The Life Cycle of a Star",
          },
          {
            id: "phys-space-bq2-05",
            question:
              "Each second, the Sun converts about 4 × 10⁹ kg of mass into energy. The energy released per second (its power output) can be estimated using E = mc², with c = 3.0 × 10⁸ m/s.\n(a) Calculate the energy released by the Sun each second. Show your working.\n(b) Explain why the Sun can keep shining for billions of years despite this huge rate.",
            marks: 5,
            modelAnswer:
              "(a) E = mc² = (4 × 10⁹) × (3.0 × 10⁸)² = (4 × 10⁹) × (9.0 × 10¹⁶) = 3.6 × 10²⁶ J. So the Sun releases about 3.6 × 10²⁶ joules each second.\n(b) The Sun is enormously massive (about 2 × 10³⁰ kg). Even converting billions of kilograms of mass to energy every second, this is a tiny fraction of its total mass, so its hydrogen fuel supply lasts for billions of years on the main sequence.",
            markScheme: [
              "c² evaluated correctly: (3.0 × 10⁸)² = 9.0 × 10¹⁶ [1]",
              "Correct substitution E = (4 × 10⁹) × (9.0 × 10¹⁶) [1]",
              "Answer ≈ 3.6 × 10²⁶ J [1]",
              "Sun is extremely massive [1]",
              "Mass lost each second is a tiny fraction of the total, so fuel lasts billions of years [1]",
            ],
            commonError:
              "Forgetting to square the speed of light, or squaring only the 3.0 and not the power of ten.",
            difficulty: "challenge",
            hints: [
              "Square the speed of light first: (3.0 × 10⁸)² = 9.0 × 10¹⁶.",
              "Multiply by the mass converted each second.",
              "Add the indices: 10⁹ × 10¹⁶ = 10²⁵, times 9 × 4 = 36.",
              "For (b), compare the mass lost per second with the Sun's total mass.",
            ],
            strategy: "Square c, multiply by m, tidy the standard form; then reason about total mass.",
            solutions: [
              {
                label: "Method: E = mc²",
                steps: [
                  "c² = (3.0 × 10⁸)² = 9.0 × 10¹⁶ m²/s²",
                  "E = mc² = (4 × 10⁹) × (9.0 × 10¹⁶)",
                  "E = 36 × 10²⁵ = 3.6 × 10²⁶ J per second",
                ],
              },
            ],
            guideRef: "The Sun and Stellar Energy",
          },
          {
            id: "phys-space-bq2-06",
            question:
              "Compare the life cycle of a massive star with that of a Sun-like star after they leave the main sequence. Give two differences.",
            marks: 4,
            modelAnswer:
              "After the main sequence, a Sun-like star becomes a red giant, whereas a massive star becomes a (larger) red supergiant. A Sun-like star then gently ejects its outer layers as a planetary nebula, leaving a white dwarf; a massive star instead explodes violently as a supernova, leaving a neutron star or a black hole. Massive stars also spend much less time on the main sequence because they fuse fuel faster.",
            markScheme: [
              "Sun-like → red giant; massive → red supergiant [1]",
              "Sun-like leaves a white dwarf (via planetary nebula) [1]",
              "Massive star explodes as a supernova [1]",
              "Massive star leaves a neutron star or black hole [1]",
            ],
            commonError:
              "Mixing the terms 'red giant' and 'red supergiant', or giving a Sun-like star a supernova.",
            difficulty: "core",
            hints: [
              "Compare the giant stage: giant vs supergiant.",
              "Compare how each star ends: gentle ejection vs explosion.",
              "Compare the remnants: white dwarf vs neutron star/black hole.",
              "Pick two clear differences and state both sides.",
            ],
            strategy: "Match each stage side by side and highlight the differences.",
            guideRef: "The Life Cycle of a Star",
          },
          {
            id: "phys-space-bq2-07",
            question:
              "Explain how heavy elements such as carbon and iron come to be present in planets like the Earth, given that the early Universe contained mainly hydrogen and helium.",
            marks: 4,
            modelAnswer:
              "Heavy elements are produced by nuclear fusion inside stars, where lighter nuclei are fused into heavier ones. When a massive star reaches the end of its life it explodes as a supernova, scattering these heavier elements into space. This enriched material becomes part of new nebulae, from which later stars and planets — including the Earth — form by accretion. So the heavy elements in the Earth were made inside earlier generations of stars.",
            markScheme: [
              "Heavy elements made by fusion inside stars [1]",
              "Supernova explosions scatter these elements into space [1]",
              "Enriched material forms new nebulae [1]",
              "New stars and planets (e.g. Earth) form from this material [1]",
            ],
            commonError:
              "Claiming the heavy elements were made in the Big Bang — the Big Bang produced mainly hydrogen and helium.",
            difficulty: "challenge",
            hints: [
              "Where does fusion of heavier nuclei take place?",
              "How are these elements released into space?",
              "What do later stars and planets form from?",
              "Connect supernova debris to the formation of the Solar System.",
            ],
            strategy: "Trace the path: fusion in stars → supernova dispersal → new nebula → planets.",
            guideRef: "The Life Cycle of a Star",
          },
          {
            id: "phys-space-bq2-08",
            question:
              "A protostar is contracting but is not yet a main-sequence star.\n(a) State what must happen for it to become a main-sequence star.\n(b) Explain why the protostar heats up as it contracts.",
            marks: 4,
            modelAnswer:
              "(a) Hydrogen fusion must begin in the core — this happens when the core becomes hot and dense enough.\n(b) As gravity pulls the gas and dust inward, the material loses gravitational potential energy, which is transferred to kinetic energy of the particles. Faster-moving particles mean a higher temperature, so the protostar heats up as it contracts.",
            markScheme: [
              "Hydrogen fusion must start [1]",
              "Occurs when core is hot/dense enough [1]",
              "Contraction converts gravitational PE to kinetic energy of particles [1]",
              "Faster particles = higher temperature, so it heats up [1]",
            ],
            commonError:
              "Saying the protostar is already fusing hydrogen — fusion only begins once it joins the main sequence.",
            difficulty: "core",
            hints: [
              "What process defines a main-sequence star?",
              "What conditions are needed for fusion to begin?",
              "As material falls inward, what happens to its potential energy?",
              "Faster particles correspond to a higher temperature.",
            ],
            strategy: "Link gravitational contraction to a rise in temperature, then to fusion.",
            guideRef: "The Life Cycle of a Star",
          },
          {
            id: "phys-space-bq2-09",
            question:
              "The colour of a star is related to its surface temperature. The Sun appears yellow-white at about 5500 °C.\n(a) State the colour of a star much hotter than the Sun.\n(b) State the colour of a star much cooler than the Sun.\n(c) Explain why a red giant is red.",
            marks: 4,
            modelAnswer:
              "(a) A much hotter star appears blue-white.\n(b) A much cooler star appears orange or red.\n(c) A red giant has expanded enormously, so its outer surface has a much lower temperature than before. Cooler surfaces emit light toward the red end of the spectrum, so the star appears red.",
            markScheme: [
              "Hotter star: blue / blue-white [1]",
              "Cooler star: orange / red [1]",
              "Red giant has a low surface temperature [1]",
              "Cool surfaces emit red light, so it appears red [1]",
            ],
            commonError:
              "Assuming a bigger star must be hotter; a red giant is large but its expanded surface is cooler.",
            difficulty: "core",
            hints: [
              "Hotter stars sit at the blue end of the colour scale.",
              "Cooler stars sit at the red end.",
              "A red giant has expanded — what does that do to its surface temperature?",
              "Lower temperature means redder light.",
            ],
            strategy: "Use the temperature–colour link, then apply it to the cool, expanded red giant.",
            guideRef: "The Sun and Stellar Energy",
          },
          {
            id: "phys-space-bq2-10",
            question:
              "Explain why nuclear fusion releases energy, referring to the masses of the particles involved. Use the relationship E = mc² in your answer.",
            marks: 4,
            modelAnswer:
              "When light nuclei such as hydrogen fuse to form a heavier nucleus such as helium, the mass of the product nucleus is slightly less than the total mass of the nuclei that fused. This 'missing' mass (the mass defect, Δm) is not destroyed — it is converted into energy according to E = mc². Because c² is an extremely large number, even a very small mass defect releases a large amount of energy, which is why fusion is such a powerful energy source.",
            markScheme: [
              "Product nucleus has less mass than the reactant nuclei (mass defect) [1]",
              "This mass is converted to energy [1]",
              "Using E = mc² [1]",
              "c² is very large, so a small mass loss gives a large energy release [1]",
            ],
            commonError:
              "Saying mass is 'lost' or destroyed; it is converted into energy, conserving mass-energy overall.",
            difficulty: "challenge",
            hints: [
              "Compare the total mass before and after fusion.",
              "What happens to the small difference in mass?",
              "Apply E = mc² to that mass difference.",
              "Why does a tiny mass produce so much energy? Look at the size of c².",
            ],
            strategy: "Identify the mass defect, then convert it to energy with E = mc².",
            guideRef: "The Sun and Stellar Energy",
          },
        ],
      },
      // ── QA PAPER 3 ── galaxies, scale, light-year
      {
        id: "phys-space-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Galaxies, the Milky Way, the light-year, and the scale of the Universe.",
        questions: [
          {
            id: "phys-space-bq3-01",
            question:
              "(a) Define the term 'galaxy'.\n(b) Name our galaxy and state approximately how many stars it contains.",
            marks: 3,
            modelAnswer:
              "(a) A galaxy is a large collection of billions of stars (together with gas and dust) held together by gravity.\n(b) Our galaxy is the Milky Way, which contains roughly 200–400 billion stars (accept 'hundreds of billions').",
            markScheme: [
              "Galaxy: a (large) collection of billions of stars held together by gravity [1]",
              "Our galaxy is the Milky Way [1]",
              "Contains hundreds of billions of stars (e.g. ~200–400 billion) [1]",
            ],
            commonError:
              "Confusing a galaxy (billions of stars) with the Solar System (one star).",
            difficulty: "warmup",
            guideRef: "Galaxies and the Scale of the Universe",
          },
          {
            id: "phys-space-bq3-02",
            question:
              "(a) Define a light-year.\n(b) Given the speed of light c = 3.0 × 10⁸ m/s and that one year is about 3.15 × 10⁷ s, show that one light-year is approximately 9.5 × 10¹⁵ m.",
            marks: 4,
            modelAnswer:
              "(a) A light-year is the distance that light travels (through a vacuum) in one year.\n(b) distance = speed × time = (3.0 × 10⁸) × (3.15 × 10⁷) = 9.45 × 10¹⁵ m ≈ 9.5 × 10¹⁵ m. ✓",
            markScheme: [
              "Light-year defined as a distance (the distance light travels in one year) [1]",
              "Uses distance = speed × time [1]",
              "Correct substitution (3.0 × 10⁸) × (3.15 × 10⁷) [1]",
              "Answer ≈ 9.5 × 10¹⁵ m [1]",
            ],
            commonError:
              "Defining a light-year as a time rather than a distance.",
            difficulty: "core",
            hints: [
              "A light-year measures distance, despite the word 'year'.",
              "Use distance = speed × time.",
              "Multiply 3.0 × 10⁸ by 3.15 × 10⁷.",
              "Add the indices: 10⁸ × 10⁷ = 10¹⁵.",
            ],
            strategy: "Apply distance = speed × time with c and the seconds in a year.",
            solutions: [
              {
                label: "Method: distance = speed × time",
                steps: [
                  "time for one year = 3.15 × 10⁷ s",
                  "distance = (3.0 × 10⁸) × (3.15 × 10⁷)",
                  "distance = 9.45 × 10¹⁵ ≈ 9.5 × 10¹⁵ m",
                ],
              },
            ],
            guideRef: "Galaxies and the Scale of the Universe",
          },
          {
            id: "phys-space-bq3-03",
            question:
              "The nearest star to the Sun, Proxima Centauri, is about 4.2 light-years away. Taking one light-year as 9.46 × 10¹⁵ m, calculate this distance in metres. Show your working.",
            marks: 3,
            modelAnswer:
              "distance = 4.2 × 9.46 × 10¹⁵ = 39.7 × 10¹⁵ = 3.97 × 10¹⁶ m ≈ 4.0 × 10¹⁶ m.",
            markScheme: [
              "Recognises distance = number of ly × metres per ly [1]",
              "Correct substitution 4.2 × 9.46 × 10¹⁵ [1]",
              "Answer ≈ 4.0 × 10¹⁶ m (allow 3.97 × 10¹⁶ m) [1]",
            ],
            commonError:
              "Leaving the answer as 39.7 × 10¹⁵ m without converting to proper standard form (3.97 × 10¹⁶ m).",
            difficulty: "core",
            hints: [
              "Multiply the number of light-years by the metres in one light-year.",
              "4.2 × 9.46 ≈ 39.7.",
              "Rewrite 39.7 × 10¹⁵ in standard form as 3.97 × 10¹⁶ m.",
            ],
            strategy: "Multiply, then express the result in proper standard form.",
            solutions: [
              {
                label: "Method: convert light-years to metres",
                steps: [
                  "distance = 4.2 × (9.46 × 10¹⁵)",
                  "= 39.7 × 10¹⁵ m",
                  "= 3.97 × 10¹⁶ ≈ 4.0 × 10¹⁶ m",
                ],
              },
            ],
            guideRef: "Galaxies and the Scale of the Universe",
          },
          {
            id: "phys-space-bq3-04",
            question:
              "Explain why astronomers measure distances to galaxies in light-years rather than in metres.",
            marks: 3,
            modelAnswer:
              "Distances between galaxies are extremely large — typically 10²² m or more — so expressing them in metres gives enormously large, unwieldy numbers that are hard to write and compare. The light-year (≈ 9.46 × 10¹⁵ m) is a much larger unit, so the same distances become manageable numbers, for example '2.5 million light-years to Andromeda'. This makes the values easier to understand and compare.",
            markScheme: [
              "Intergalactic distances are extremely large in metres [1]",
              "Metres give unwieldy / very large numbers [1]",
              "The light-year scales the numbers down to manageable values [1]",
            ],
            commonError:
              "Saying the light-year is more accurate, when in fact it is simply a more convenient (larger) unit.",
            difficulty: "warmup",
            guideRef: "Galaxies and the Scale of the Universe",
          },
          {
            id: "phys-space-bq3-05",
            question:
              "The Andromeda Galaxy is about 2.5 million light-years away.\n(a) Explain what this tells us about how long ago the light we see now left Andromeda.\n(b) State what this means about observing very distant objects in general.",
            marks: 3,
            modelAnswer:
              "(a) Light from Andromeda takes 2.5 million years to reach us, so the light we see now left Andromeda about 2.5 million years ago — we see it as it was then, not as it is today.\n(b) Observing very distant objects means looking back in time: the farther away an object is, the further into the past we see it.",
            markScheme: [
              "Light takes 2.5 million years to travel the distance [1]",
              "So we see Andromeda as it was 2.5 million years ago [1]",
              "Observing distant objects = looking back in time [1]",
            ],
            commonError:
              "Assuming we see distant galaxies as they are 'now', ignoring the travel time of light.",
            difficulty: "core",
            hints: [
              "A light-year is the distance light travels in a year.",
              "How long did the light take to cross 2.5 million light-years?",
              "We see the galaxy as it was when the light set off.",
            ],
            strategy: "Link distance in light-years directly to light-travel time, then generalise.",
            guideRef: "Galaxies and the Scale of the Universe",
          },
          {
            id: "phys-space-bq3-06",
            question:
              "Place the following in order of increasing size: the Solar System, a galaxy, the observable Universe, a planet. For each step, state roughly how the scale changes.",
            marks: 4,
            modelAnswer:
              "In order of increasing size: planet → Solar System → galaxy → observable Universe. A planet (e.g. Earth, ~10⁷ m across) is far smaller than the Solar System (light-hours to light-days across). The Solar System is, in turn, tiny compared with a galaxy like the Milky Way (~100 000 light-years across). The galaxy is itself a very small part of the observable Universe (~93 billion light-years across), which contains an estimated 2 trillion galaxies. Each step up represents an enormous increase in scale.",
            markScheme: [
              "Correct order: planet → Solar System → galaxy → observable Universe [1]",
              "Planet much smaller than the Solar System [1]",
              "Solar System much smaller than a galaxy (~100 000 ly) [1]",
              "Galaxy a tiny part of the observable Universe (~93 billion ly / 2 trillion galaxies) [1]",
            ],
            commonError:
              "Placing the Solar System larger than a galaxy, or treating 'Universe' and 'galaxy' as similar in size.",
            difficulty: "challenge",
            hints: [
              "Start with the smallest single body.",
              "A star system contains a planet; a galaxy contains many star systems.",
              "The Universe contains all the galaxies.",
              "Each step is many orders of magnitude larger.",
            ],
            strategy: "Nest each object inside the next larger one to fix the order.",
            guideRef: "Galaxies and the Scale of the Universe",
          },
          {
            id: "phys-space-bq3-07",
            question:
              "Light from the Sun takes about 500 s to reach the Earth. Taking the speed of light as 3.0 × 10⁸ m/s, calculate the distance from the Sun to the Earth. Show your working and give your answer in standard form.",
            marks: 3,
            modelAnswer:
              "distance = speed × time = (3.0 × 10⁸) × 500 = 1.5 × 10¹¹ m. This matches the known Earth–Sun distance of about 1.5 × 10¹¹ m.",
            markScheme: [
              "Uses distance = speed × time [1]",
              "Correct substitution (3.0 × 10⁸) × 500 [1]",
              "Answer = 1.5 × 10¹¹ m (standard form) [1]",
            ],
            commonError:
              "Writing the answer as 150 000 000 000 m without converting to standard form, or multiplying by the wrong time.",
            difficulty: "core",
            hints: [
              "Use distance = speed × time.",
              "Multiply 3.0 × 10⁸ by 500 (= 5.0 × 10²).",
              "Combine: 3.0 × 5.0 = 15 and 10⁸ × 10² = 10¹⁰.",
              "Tidy 15 × 10¹⁰ to 1.5 × 10¹¹ m.",
            ],
            strategy: "Apply distance = speed × time, then convert to standard form.",
            solutions: [
              {
                label: "Method: distance = speed × time",
                steps: [
                  "time = 500 s = 5.0 × 10² s",
                  "distance = (3.0 × 10⁸) × (5.0 × 10²)",
                  "= 15 × 10¹⁰ = 1.5 × 10¹¹ m",
                ],
              },
            ],
            guideRef: "Galaxies and the Scale of the Universe",
          },
          {
            id: "phys-space-bq3-08",
            question:
              "State two things that are held together by gravitational attraction on the scale of galaxies, and explain the role gravity plays in each.",
            marks: 4,
            modelAnswer:
              "Within a galaxy, gravity holds the billions of stars (and gas and dust) together, preventing them from drifting apart and keeping the galaxy bound as a single system. On a larger scale, gravity also holds galaxies together in groups and clusters, binding neighbouring galaxies (such as the Milky Way and Andromeda in the Local Group). In each case, gravitational attraction provides the force that keeps the objects bound rather than dispersing into space.",
            markScheme: [
              "Gravity holds the stars (and gas/dust) within a galaxy together [1]",
              "Without it the stars would drift apart [1]",
              "Gravity holds galaxies together in groups/clusters [1]",
              "Provides the binding force keeping the systems together [1]",
            ],
            commonError:
              "Describing gravity as only acting between the Sun and its planets, ignoring its role on galactic and intergalactic scales.",
            difficulty: "core",
            hints: [
              "Think about what keeps the stars in a galaxy from flying apart.",
              "Think about whether galaxies themselves cluster together.",
              "Gravity is an attractive force on every scale.",
              "State the role gravity plays in each case.",
            ],
            strategy: "Apply the same attractive role of gravity at two different scales.",
            guideRef: "Galaxies and the Scale of the Universe",
          },
          {
            id: "phys-space-bq3-09",
            question:
              "A radio signal is sent from Earth to a spacecraft orbiting a planet 1.2 × 10¹² m away. Radio waves travel at 3.0 × 10⁸ m/s.\n(a) Calculate the time for the signal to reach the spacecraft. Show your working.\n(b) Use your answer to comment on why controlling such a spacecraft in real time is difficult.",
            marks: 4,
            modelAnswer:
              "(a) time = distance / speed = (1.2 × 10¹²) / (3.0 × 10⁸) = 4.0 × 10³ s (about 67 minutes).\n(b) Because the signal takes over an hour to arrive (and the reply takes just as long again), controllers cannot react to events in real time — by the time a command arrives, the situation at the spacecraft may have changed. Spacecraft far from Earth must therefore operate largely autonomously.",
            markScheme: [
              "Uses time = distance / speed [1]",
              "Correct substitution (1.2 × 10¹²) / (3.0 × 10⁸) [1]",
              "Answer = 4.0 × 10³ s (≈ 67 minutes) [1]",
              "Comment: long delay means no real-time control / round trip even longer [1]",
            ],
            commonError:
              "Dividing the powers of ten incorrectly (10¹² / 10⁸ = 10⁴, not 10³ before the 1.2/3.0 factor).",
            difficulty: "challenge",
            hints: [
              "Rearrange speed = distance / time to time = distance / speed.",
              "Divide 1.2 × 10¹² by 3.0 × 10⁸.",
              "1.2 / 3.0 = 0.4 and 10¹² / 10⁸ = 10⁴, giving 0.4 × 10⁴ = 4.0 × 10³ s.",
              "Think about the round-trip delay for a command and its reply.",
            ],
            strategy: "Use time = distance / speed; handle the indices carefully, then interpret.",
            solutions: [
              {
                label: "Method: time = distance / speed",
                steps: [
                  "time = (1.2 × 10¹²) / (3.0 × 10⁸)",
                  "= 0.4 × 10⁴ s",
                  "= 4.0 × 10³ s ≈ 67 minutes",
                ],
              },
            ],
            guideRef: "Galaxies and the Scale of the Universe",
          },
          {
            id: "phys-space-bq3-10",
            question:
              "A student says: 'The Milky Way is the whole Universe.' Evaluate this statement, referring to the relative scales of galaxies and the Universe.",
            marks: 4,
            modelAnswer:
              "The statement is incorrect. The Milky Way is just one galaxy, about 100 000 light-years across, containing a few hundred billion stars. The observable Universe is vastly larger — around 93 billion light-years across — and contains an estimated 2 trillion (2 × 10¹²) galaxies, of which the Milky Way is only one. So the Milky Way is an extremely small part of the whole Universe, not the entire Universe.",
            markScheme: [
              "States the statement is incorrect [1]",
              "Milky Way is a single galaxy (~100 000 ly, hundreds of billions of stars) [1]",
              "The Universe contains a huge number of galaxies (~2 trillion) [1]",
              "Milky Way is therefore a tiny part of the Universe [1]",
            ],
            commonError:
              "Agreeing with the statement, or confusing 'galaxy' with 'Universe' as if they were the same scale.",
            difficulty: "core",
            hints: [
              "Is the Milky Way one galaxy or all of them?",
              "How big is the Milky Way compared with the observable Universe?",
              "Roughly how many galaxies does the Universe contain?",
              "Conclude whether the statement is right or wrong.",
            ],
            strategy: "Compare one galaxy with the total number of galaxies to judge the claim.",
            guideRef: "Galaxies and the Scale of the Universe",
          },
        ],
      },
      // ── QA PAPER 4 ── redshift, expanding Universe, Big Bang
      {
        id: "phys-space-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Redshift, the expanding Universe, the Big Bang, and the CMBR.",
        questions: [
          {
            id: "phys-space-bq4-01",
            question:
              "(a) State what is meant by redshift.\n(b) State what the redshift of light from a distant galaxy tells us about the motion of that galaxy.",
            marks: 3,
            modelAnswer:
              "(a) Redshift is an increase in the observed wavelength of light (a shift toward the red end of the spectrum) compared with the wavelength measured from a stationary laboratory source.\n(b) It tells us that the galaxy is moving away from us (receding).",
            markScheme: [
              "Redshift: increase in observed wavelength / shift to red end of spectrum [1]",
              "Compared with a stationary (lab) source [1]",
              "Means the galaxy is moving away from us [1]",
            ],
            commonError:
              "Saying redshift means the light has 'turned red' rather than that its wavelength is longer than expected.",
            difficulty: "warmup",
            guideRef: "The Expanding Universe and the Big Bang",
          },
          {
            id: "phys-space-bq4-02",
            question:
              "Explain how the redshift of light from distant galaxies provides evidence that the Universe is expanding. Refer to the observation that more distant galaxies have greater redshifts.",
            marks: 4,
            modelAnswer:
              "Light from distant galaxies is redshifted, which shows that the galaxies are moving away from us. Crucially, the more distant a galaxy, the greater its redshift, meaning it is receding faster. This pattern — every galaxy moving away, with recession speed increasing with distance — is exactly what is expected if the whole of space is expanding and carrying the galaxies apart. There is no special centre; from any galaxy, all the others appear to recede. This is strong evidence that the Universe is expanding.",
            markScheme: [
              "Redshift shows galaxies are moving away from us [1]",
              "More distant galaxies have greater redshift / recede faster [1]",
              "This pattern is what an expanding Universe predicts [1]",
              "No special centre / all galaxies recede from each other [1]",
            ],
            commonError:
              "Concluding only that galaxies move away, without using the 'farther = faster' pattern that specifically indicates expansion.",
            difficulty: "core",
            hints: [
              "What does redshift on its own tell you about each galaxy?",
              "What is special about the redshift of more distant galaxies?",
              "What overall motion would produce 'farther = faster'?",
              "Think of dots on an inflating balloon — is there a centre?",
            ],
            strategy: "Build the argument: redshift → recession → farther = faster → expansion.",
            guideRef: "The Expanding Universe and the Big Bang",
          },
          {
            id: "phys-space-bq4-03",
            question:
              "(a) State the name of the theory describing the origin of the Universe.\n(b) Describe, in outline, what this theory proposes.\n(c) State approximately how long ago this is thought to have happened.",
            marks: 4,
            modelAnswer:
              "(a) The Big Bang theory.\n(b) It proposes that the Universe began as an extremely hot, dense state and has been expanding (and cooling) ever since, which is why galaxies are now moving apart.\n(c) About 13.8 billion years ago.",
            markScheme: [
              "Big Bang theory [1]",
              "Universe began as a hot, dense state/point [1]",
              "Has been expanding ever since [1]",
              "About 13.8 billion years ago (accept ~14 billion) [1]",
            ],
            commonError:
              "Describing the Big Bang as an explosion 'in' space, rather than an expansion of space itself.",
            difficulty: "core",
            hints: [
              "The theory has a 'beginning' built into its name.",
              "What was the early Universe like — hot or cold, dense or sparse?",
              "What has been happening to the Universe ever since?",
              "The accepted age is just under 14 billion years.",
            ],
            strategy: "Name the theory, describe the hot dense start and expansion, give the age.",
            guideRef: "The Expanding Universe and the Big Bang",
          },
          {
            id: "phys-space-bq4-04",
            question:
              "Besides the redshift of galaxies, scientists also point to the cosmic microwave background radiation (CMBR) as evidence for the Big Bang.\n(a) State one observable property of the CMBR.\n(b) Explain briefly why its existence supports the Big Bang theory.",
            marks: 3,
            modelAnswer:
              "(a) The CMBR is faint microwave radiation that is detected coming almost uniformly from all directions in space.\n(b) The Big Bang theory predicts that the early Universe was extremely hot and filled with radiation. As the Universe expanded and cooled, this radiation stretched to longer wavelengths and is now detected as cool microwave radiation from all directions — exactly as observed, so it supports the theory.",
            markScheme: [
              "CMBR comes from all directions / is uniform / is in the microwave region [1]",
              "Big Bang predicts a hot early Universe filled with radiation [1]",
              "Expansion cooled/stretched this radiation to microwaves we now detect [1]",
            ],
            commonError:
              "Confusing the CMBR with the redshift of galaxies; they are two separate pieces of evidence.",
            difficulty: "challenge",
            hints: [
              "From which directions in the sky is the CMBR detected?",
              "Which part of the electromagnetic spectrum is it in?",
              "What does the Big Bang predict about the early Universe's temperature?",
              "What happens to that radiation as the Universe expands?",
            ],
            strategy: "State a property of the CMBR, then link it to the cooling of a hot early Universe.",
            guideRef: "The Expanding Universe and the Big Bang",
          },
          {
            id: "phys-space-bq4-05",
            question:
              "Two galaxies, A and B, are observed. Galaxy A shows a much larger redshift than galaxy B.\n(a) State which galaxy is receding faster.\n(b) State which galaxy is farther away, and justify your answer.",
            marks: 4,
            modelAnswer:
              "(a) Galaxy A is receding faster, because a larger redshift corresponds to a higher recession speed.\n(b) Galaxy A is farther away. In an expanding Universe, recession speed increases with distance (more distant galaxies recede faster), so the faster-receding galaxy A must be the more distant one.",
            markScheme: [
              "Galaxy A recedes faster [1]",
              "Because larger redshift = higher recession speed [1]",
              "Galaxy A is farther away [1]",
              "Because recession speed increases with distance [1]",
            ],
            commonError:
              "Reversing the relationship and assuming the larger redshift means the galaxy is nearer.",
            difficulty: "core",
            hints: [
              "Larger redshift means a higher recession speed.",
              "In an expanding Universe, how do speed and distance relate?",
              "Faster recession implies a greater distance.",
              "Apply 'farther = faster' to identify the more distant galaxy.",
            ],
            strategy: "Link redshift → speed, then speed → distance using the expansion relationship.",
            guideRef: "The Expanding Universe and the Big Bang",
          },
          {
            id: "phys-space-bq4-06",
            question:
              "Light from a galaxy is found to have a spectral line at a wavelength of 6.6 × 10⁻⁷ m, whereas the same line measured in a laboratory has a wavelength of 6.0 × 10⁻⁷ m.\n(a) Calculate the change in wavelength.\n(b) State whether this is a redshift or a blueshift, and what it implies about the galaxy's motion.",
            marks: 4,
            modelAnswer:
              "(a) change in wavelength = 6.6 × 10⁻⁷ − 6.0 × 10⁻⁷ = 0.6 × 10⁻⁷ = 6.0 × 10⁻⁸ m.\n(b) The observed wavelength is longer than the laboratory wavelength, so this is a redshift. It implies the galaxy is moving away from us (receding).",
            markScheme: [
              "Subtracts wavelengths: 6.6 × 10⁻⁷ − 6.0 × 10⁻⁷ [1]",
              "Change = 6.0 × 10⁻⁸ m (or 0.6 × 10⁻⁷ m) [1]",
              "Identified as a redshift (observed wavelength is longer) [1]",
              "Galaxy is moving away / receding [1]",
            ],
            commonError:
              "Calling it a blueshift, or giving the change as 0.6 × 10⁻⁷ but mis-stating the standard form.",
            difficulty: "core",
            hints: [
              "Subtract the laboratory wavelength from the observed wavelength.",
              "0.6 × 10⁻⁷ m can be written as 6.0 × 10⁻⁸ m.",
              "Is the observed wavelength longer or shorter than the lab value?",
              "Longer wavelength means redshift, so the source is receding.",
            ],
            strategy: "Find the wavelength change, then judge red/blue shift from its sign.",
            solutions: [
              {
                label: "Method: difference in wavelength",
                steps: [
                  "Δλ = λ(observed) − λ(lab) = 6.6 × 10⁻⁷ − 6.0 × 10⁻⁷",
                  "Δλ = 0.6 × 10⁻⁷ m",
                  "Δλ = 6.0 × 10⁻⁸ m (positive → longer wavelength → redshift)",
                ],
              },
            ],
            guideRef: "The Expanding Universe and the Big Bang",
          },
          {
            id: "phys-space-bq4-07",
            question:
              "Explain, using the idea of the Doppler effect, why light from a galaxy moving away from us is redshifted.",
            marks: 3,
            modelAnswer:
              "As the galaxy moves away, each successive wave crest is emitted from a position slightly farther from us than the previous one. This stretches the waves out, so the wavelength reaching us is longer than it would be from a stationary source. Longer wavelength means the light is shifted toward the red end of the spectrum — a redshift. This is the Doppler effect applied to light.",
            markScheme: [
              "As the source recedes, successive crests are emitted from farther away [1]",
              "Waves are stretched / wavelength increased [1]",
              "Longer wavelength = shift toward red (redshift) [1]",
            ],
            commonError:
              "Describing the light slowing down; the speed of light is constant, it is the wavelength that increases.",
            difficulty: "core",
            hints: [
              "Think about where each successive wave crest is emitted from.",
              "If the source moves away, are the crests bunched or stretched?",
              "Stretched waves means a longer or shorter wavelength?",
              "Longer wavelength corresponds to the red end of the spectrum.",
            ],
            strategy: "Describe wave stretching for a receding source, then link to longer wavelength.",
            guideRef: "The Expanding Universe and the Big Bang",
          },
          {
            id: "phys-space-bq4-08",
            question:
              "A student models the expanding Universe by drawing dots on a balloon and then inflating it.\n(a) Explain what the dots and the balloon's surface represent.\n(b) Explain how this model demonstrates that there is no special centre to the expansion.",
            marks: 4,
            modelAnswer:
              "(a) The dots represent galaxies and the stretchy surface of the balloon represents space itself.\n(b) As the balloon inflates, the surface stretches and every dot moves away from every other dot. From the point of view of any one dot, all the others appear to be receding, and more distant dots move away faster. No dot is at the 'centre' of this expansion — the centre of the balloon is not on the surface — so the model shows that the expansion has no special centre, just as we observe for the real Universe.",
            markScheme: [
              "Dots represent galaxies [1]",
              "Balloon surface represents space (which expands) [1]",
              "Every dot moves away from every other as the surface stretches [1]",
              "From any dot all others recede → no special centre [1]",
            ],
            commonError:
              "Treating the inside of the balloon as part of the model; only the 2-D surface represents space in this analogy.",
            difficulty: "challenge",
            hints: [
              "What do the dots stand for, and what does the rubber surface stand for?",
              "As the balloon inflates, what happens to the spacing between dots?",
              "Choose any one dot — how do the others appear to move?",
              "Is any dot on the surface the obvious centre of the expansion?",
            ],
            strategy: "Map each part of the model to the real Universe, then reason about the 'centre'.",
            guideRef: "The Expanding Universe and the Big Bang",
          },
          {
            id: "phys-space-bq4-09",
            question:
              "Outline the chain of reasoning that leads from the observation of redshift to the conclusion that the Universe began with a Big Bang.",
            marks: 4,
            modelAnswer:
              "Light from distant galaxies is redshifted, showing that the galaxies are moving away from us. Because more distant galaxies recede faster, the most natural explanation is that the whole Universe is expanding, carrying galaxies apart. If the Universe is expanding now, then running time backwards means everything was once much closer together — and in the distant past it must have been concentrated in an extremely hot, dense state. The expansion of the Universe from this hot, dense beginning is the Big Bang, thought to have occurred about 13.8 billion years ago.",
            markScheme: [
              "Redshift → galaxies moving away [1]",
              "Farther = faster → Universe is expanding [1]",
              "Running expansion backwards → everything was once together / hot and dense [1]",
              "This beginning is the Big Bang (~13.8 billion years ago) [1]",
            ],
            commonError:
              "Jumping straight from redshift to the Big Bang without the intermediate step that expansion implies a hot, dense origin.",
            difficulty: "challenge",
            hints: [
              "Start with what redshift tells you about galaxy motion.",
              "Add the 'farther = faster' pattern to reach expansion.",
              "Now imagine playing the expansion backwards in time.",
              "What state must the Universe have been in at the start?",
            ],
            strategy: "Chain the steps: redshift → recession → expansion → reverse in time → hot dense start.",
            guideRef: "The Expanding Universe and the Big Bang",
          },
          {
            id: "phys-space-bq4-10",
            question:
              "Distinguish between redshift and blueshift, and explain what each would tell you about a galaxy's motion relative to the Earth.",
            marks: 4,
            modelAnswer:
              "Redshift is an increase in the observed wavelength of light (a shift toward the red end of the spectrum); it occurs when a source is moving away from us, so a redshifted galaxy is receding. Blueshift is a decrease in the observed wavelength (a shift toward the blue end of the spectrum); it occurs when a source is moving toward us, so a blueshifted galaxy would be approaching. Almost all distant galaxies show redshift, which is why we conclude the Universe is expanding.",
            markScheme: [
              "Redshift: longer wavelength / shift to red [1]",
              "Redshift means the galaxy is moving away [1]",
              "Blueshift: shorter wavelength / shift to blue [1]",
              "Blueshift means the galaxy is moving toward us [1]",
            ],
            commonError:
              "Mixing up the two — associating redshift with approaching or blueshift with receding.",
            difficulty: "core",
            hints: [
              "Which shift corresponds to longer wavelength?",
              "Longer wavelength means the source is moving which way?",
              "Blueshift is the opposite case — shorter wavelength.",
              "State the direction of motion implied by each.",
            ],
            strategy: "Pair each shift with its wavelength change and the implied direction of motion.",
            guideRef: "The Expanding Universe and the Big Bang",
          },
        ],
      },
    ],
  },
};
