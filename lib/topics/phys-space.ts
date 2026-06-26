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
      {
        id: "phys-space-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "10 questions · Solar System, orbits, and stellar life cycles",
        questions: [
          {
            id: "phys-space-bm1-01",
            question: "In which region of the Solar System is the asteroid belt found?",
            options: [
              "Between Earth and Mars",
              "Between Mars and Jupiter",
              "Between Jupiter and Saturn",
              "Beyond Neptune",
            ],
            answerIndex: 1,
            explanation: "The asteroid belt lies between Mars and Jupiter, at roughly 2.2–3.2 AU from the Sun. It is rocky debris left over from the Solar System's formation.",
            guideRef: "The Solar System",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bm1-02",
            question: "Which list places the planets in the correct order of increasing distance from the Sun?",
            options: [
              "Mercury, Venus, Mars, Earth, Jupiter, Saturn, Neptune, Uranus",
              "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune",
              "Venus, Mercury, Earth, Mars, Saturn, Jupiter, Uranus, Neptune",
              "Mercury, Earth, Venus, Mars, Jupiter, Saturn, Uranus, Neptune",
            ],
            answerIndex: 1,
            explanation: "The order from the Sun is Mercury, Venus, Earth, Mars (rocky), then Jupiter, Saturn, Uranus, Neptune (gas/ice giants).",
            guideRef: "The Solar System",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bm1-03",
            question: "What provides the centripetal force that keeps a planet in orbit around the Sun?",
            options: [
              "The planet's own rotation",
              "Gravitational attraction between the planet and the Sun",
              "Radiation pressure from the Sun",
              "The magnetic field of the Sun",
            ],
            answerIndex: 1,
            explanation: "Gravitational attraction between the planet and the Sun acts toward the centre of the orbit, providing the centripetal force required for circular motion.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bm1-04",
            question: "A satellite orbits at radius r with period T. Which expression gives its orbital speed?",
            options: ["2πrT", "2πr / T", "πr² / T", "T / (2πr)"],
            answerIndex: 1,
            explanation: "In one period the satellite travels one circumference, 2πr, so speed = distance / time = 2πr / T.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bm1-05",
            question: "Planet X orbits a star at twice the orbital radius of planet Y. Compared with Y, planet X has:",
            options: [
              "A shorter period and higher speed",
              "A shorter period and lower speed",
              "A longer period and lower speed",
              "A longer period and higher speed",
            ],
            answerIndex: 2,
            explanation: "A larger orbital radius means a weaker gravitational force, so a lower orbital speed. The larger circumference combined with the lower speed gives a longer period (T ∝ r^{3/2}).",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "core",
            hints: [
              "From v = 2πr/T: if r increases and v decreases, what happens to T?",
              "Gravity weakens with distance, so a planet farther out moves more slowly.",
              "More distance to cover at a lower speed means a much longer period.",
            ],
          },
          {
            id: "phys-space-bm1-06",
            question: "During which stage of a star's life does hydrogen fusion first ignite in the core?",
            options: ["Nebula", "Protostar", "Main-sequence star", "Red giant"],
            answerIndex: 2,
            explanation: "A protostar is still contracting and too cool for fusion. When the core becomes hot and dense enough, hydrogen fusion ignites and the star joins the main sequence.",
            guideRef: "The Life Cycle of a Star",
            difficulty: "core",
            hints: [
              "Fusion needs extremely high temperature and pressure.",
              "A protostar has not yet reached fusion conditions.",
              "The stable, long-lasting fusing phase is the main sequence.",
            ],
          },
          {
            id: "phys-space-bm1-07",
            question: "A comet moves in a highly elliptical orbit around the Sun. At which point is it moving fastest?",
            options: [
              "At aphelion (farthest from the Sun)",
              "At perihelion (closest to the Sun)",
              "At the midpoint of the orbit",
              "Its speed is constant throughout",
            ],
            answerIndex: 1,
            explanation: "Gravitational potential energy is lowest when closest to the Sun, so kinetic energy and speed are greatest at perihelion. The comet slows as it moves back outward.",
            guideRef: "The Solar System",
            difficulty: "core",
            hints: [
              "Energy is conserved: GPE + KE is constant.",
              "Where is GPE smallest (most negative)?",
              "Smallest GPE means largest KE, hence highest speed.",
            ],
          },
          {
            id: "phys-space-bm1-08",
            question: "Which sequence correctly describes the final stages in the life of a star similar in mass to the Sun?",
            options: [
              "Red giant → supernova → neutron star",
              "Red supergiant → white dwarf → black hole",
              "Red giant → planetary nebula → white dwarf",
              "Main sequence → supernova → white dwarf",
            ],
            answerIndex: 2,
            explanation: "A Sun-like star expands to a red giant, sheds its outer layers as a planetary nebula, and leaves a white dwarf. Supernovae and neutron stars are the fate of much more massive stars.",
            guideRef: "The Life Cycle of a Star",
            difficulty: "core",
            hints: [
              "Supernovae happen only to massive stars.",
              "What happens to a red giant's outer layers?",
              "The remaining hot, dense core is the white dwarf.",
            ],
          },
          {
            id: "phys-space-bm1-09",
            question: "The Moon orbits Earth at a radius of 3.84 × 10⁸ m with a period of 2.36 × 10⁶ s. What is its orbital speed?",
            options: ["1.0 × 10² m/s", "1.0 × 10³ m/s", "1.6 × 10³ m/s", "1.0 × 10⁴ m/s"],
            answerIndex: 1,
            explanation: "v = 2πr / T = (2π × 3.84 × 10⁸) / (2.36 × 10⁶) = 2.413 × 10⁹ / 2.36 × 10⁶ ≈ 1.0 × 10³ m/s (about 1 km/s).",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "challenge",
            hints: [
              "Use v = 2πr / T; both quantities are already in SI units.",
              "Circumference = 2π × 3.84 × 10⁸ ≈ 2.41 × 10⁹ m.",
              "Divide by T = 2.36 × 10⁶ s.",
            ],
            strategy: "Substitute directly; check the power of ten in the final answer.",
          },
          {
            id: "phys-space-bm1-10",
            question: "Two planets orbit the same star. Planet P is at four times the orbital radius of planet Q. By what factor is P's orbital period longer than Q's?",
            options: ["2", "4", "8", "16"],
            answerIndex: 2,
            explanation: "Since T ∝ r^{3/2}, multiplying r by 4 multiplies T by 4^{3/2} = (4^{1/2})³ = 2³ = 8.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "challenge",
            hints: [
              "Combine v = 2πr/T with v ∝ 1/√r to get T ∝ r^{3/2}.",
              "A factor of 4 in r gives 4^{3/2} in T.",
              "4^{3/2} = (√4)³ = 2³.",
            ],
            strategy: "Use the T ∝ r^{3/2} relationship (Kepler's Third Law) for ratio problems.",
          },
        ],
      },
      {
        id: "phys-space-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "10 questions · Orbital calculations, the Big Bang, and stellar end-states",
        questions: [
          {
            id: "phys-space-bm2-01",
            question: "What is a natural satellite?",
            options: [
              "A spacecraft launched by humans",
              "A moon orbiting a planet",
              "A comet passing close to the Sun",
              "A star at the centre of a planetary system",
            ],
            answerIndex: 1,
            explanation: "A natural satellite is a body, such as a moon, that orbits a planet and is held in place by gravitational attraction. Artificial satellites are launched by humans.",
            guideRef: "The Solar System",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bm2-02",
            question: "What provides the evidence that the Universe is expanding?",
            options: [
              "The Sun emits light in all directions",
              "Distant galaxies show redshift, with more distant ones receding faster",
              "Stars have different colours depending on their temperature",
              "The Milky Way is a spiral galaxy",
            ],
            answerIndex: 1,
            explanation: "Redshift of light from distant galaxies, greater for more distant galaxies, shows they are all moving away — consistent with universal expansion.",
            guideRef: "The Expanding Universe and the Big Bang",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bm2-03",
            question: "Which process is the source of the Sun's energy?",
            options: [
              "Burning (combustion) of hydrogen gas",
              "Nuclear fission of uranium",
              "Nuclear fusion of hydrogen into helium",
              "Radioactive decay of heavy elements",
            ],
            answerIndex: 2,
            explanation: "In the Sun's core, hydrogen nuclei fuse to form helium, releasing energy. Burning is a chemical reaction, and fission splits heavy nuclei — neither is the Sun's source.",
            guideRef: "The Sun and Stellar Energy",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bm2-04",
            question: "A satellite orbits Earth at a radius of 6.7 × 10⁶ m with a period of 5400 s. What is its orbital speed?",
            options: ["3.9 × 10³ m/s", "7.8 × 10³ m/s", "1.2 × 10⁴ m/s", "2.4 × 10⁴ m/s"],
            answerIndex: 1,
            explanation: "v = 2πr / T = (2π × 6.7 × 10⁶) / 5400 = 4.21 × 10⁷ / 5400 ≈ 7.8 × 10³ m/s.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "core",
            hints: [
              "Use v = 2πr / T; both r and T are already in SI units.",
              "Circumference = 2π × 6.7 × 10⁶ ≈ 4.21 × 10⁷ m.",
              "Divide by T = 5400 s.",
            ],
            strategy: "Substitute directly; no unit conversion needed here.",
          },
          {
            id: "phys-space-bm2-05",
            question: "A neutron star is most likely formed from which type of star?",
            options: [
              "A Sun-like star after it becomes a red giant",
              "A Sun-like star after it becomes a white dwarf",
              "A massive star after a supernova explosion",
              "Any star after it leaves the main sequence",
            ],
            answerIndex: 2,
            explanation: "Neutron stars form when a massive star explodes as a supernova and the remnant core (up to ~3 solar masses) is compressed to an extremely dense state. Sun-like stars become white dwarfs.",
            guideRef: "The Life Cycle of a Star",
            difficulty: "core",
            hints: [
              "Only massive stars undergo supernovae.",
              "What are the two possible remnants left after a supernova?",
              "A more massive remnant core becomes a black hole instead.",
            ],
          },
          {
            id: "phys-space-bm2-06",
            question: "Why is fusion of hydrogen into helium able to release energy?",
            options: [
              "The helium nucleus is larger than the four hydrogen nuclei",
              "The helium nucleus has slightly less mass than the hydrogen nuclei that fused, and this mass is converted to energy",
              "Energy is absorbed from the surrounding plasma",
              "The reaction produces extra hydrogen as a by-product",
            ],
            answerIndex: 1,
            explanation: "The helium nucleus has slightly less mass than the four hydrogen nuclei (the mass defect). By E = mc² this lost mass is released as energy.",
            guideRef: "The Sun and Stellar Energy",
            difficulty: "core",
            hints: [
              "Compare the mass of the product with the total mass of the reactants.",
              "A small mass is 'missing' after fusion.",
              "Recall E = mc² links mass loss to energy released.",
            ],
          },
          {
            id: "phys-space-bm2-07",
            question: "Astronomers detect spectral lines from a distant galaxy shifted to longer wavelengths than the same lines in a laboratory. This is best explained by:",
            options: [
              "The galaxy being much hotter than a lab source",
              "The galaxy moving away from Earth due to the expansion of the Universe",
              "Absorption of light by interstellar dust",
              "The galaxy rotating very slowly",
            ],
            answerIndex: 1,
            explanation: "A shift to longer wavelength (redshift) is a Doppler effect caused by the galaxy receding — the key evidence for the expanding Universe.",
            guideRef: "The Expanding Universe and the Big Bang",
            difficulty: "core",
            hints: [
              "What does the Doppler effect do to wavelength when a source moves away?",
              "Longer wavelength means the source is receding.",
            ],
          },
          {
            id: "phys-space-bm2-08",
            question: "Approximately how long ago did the Big Bang occur, according to current theory?",
            options: ["4.6 billion years", "13.8 billion years", "100 million years", "93 billion years"],
            answerIndex: 1,
            explanation: "The Big Bang is estimated to have occurred about 13.8 billion years ago. (4.6 billion years is the age of the Solar System; 93 billion ly is the diameter of the observable Universe.)",
            guideRef: "The Expanding Universe and the Big Bang",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bm2-09",
            question: "Two planets, P and Q, orbit the same star. P is at twice the orbital radius of Q. How does the orbital period of P compare with that of Q?",
            options: [
              "P's period is 2 times Q's period",
              "P's period is √2 times Q's period",
              "P's period is 4 times Q's period",
              "P's period is 2√2 times Q's period",
            ],
            answerIndex: 3,
            explanation: "Since T ∝ r^{3/2}, doubling r multiplies T by 2^{3/2} = 2√2 ≈ 2.83.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "challenge",
            hints: [
              "Combine v = 2πr/T with v ∝ 1/√r to express T in terms of r.",
              "T = 2πr/v; if v ∝ r^{-1/2} then T ∝ r^{3/2}.",
              "Doubling r scales T by 2^{3/2} = 2 × √2.",
            ],
            strategy: "Use T ∝ r^{3/2} for orbital ratio problems.",
          },
          {
            id: "phys-space-bm2-10",
            question: "A student claims: 'The Sun is unusual because it is the only star to have planets.' Which statement best evaluates this claim?",
            options: [
              "Correct — the Solar System formed in a unique way",
              "Incorrect — all stars must have planets",
              "Incorrect — the Milky Way contains billions of stars, and many are known to host planetary systems",
              "Correct — planets require conditions found only in our Solar System",
            ],
            answerIndex: 2,
            explanation: "The Milky Way contains hundreds of billions of stars, and observations confirm exoplanetary systems are common. Accretion from a nebular disc is a general process, not unique to the Sun.",
            guideRef: "The Solar System",
            difficulty: "challenge",
            hints: [
              "Consider the scale of the galaxy.",
              "Is the accretion process that formed our planets unique to the Sun?",
              "Evaluate by comparing the claim with known evidence about other stars.",
            ],
          },
        ],
      },
      {
        id: "phys-space-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "10 questions · Stars, galaxies, scale of the Universe, and redshift",
        questions: [
          {
            id: "phys-space-bm3-01",
            question: "What is a galaxy?",
            options: [
              "A single very large star",
              "A collection of billions of stars held together by gravity",
              "A cloud of gas with no stars",
              "The region between two planets",
            ],
            answerIndex: 1,
            explanation: "A galaxy is a large collection of billions of stars, together with gas and dust, held together by gravity. The Milky Way is our galaxy.",
            guideRef: "Galaxies and the Scale of the Universe",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bm3-02",
            question: "Which type of galaxy is the Milky Way?",
            options: ["Elliptical", "Irregular", "Barred-spiral", "Lenticular"],
            answerIndex: 2,
            explanation: "The Milky Way is a barred-spiral galaxy containing an estimated 200–400 billion stars.",
            guideRef: "Galaxies and the Scale of the Universe",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bm3-03",
            question: "Approximately how far does light travel in one light-year?",
            options: ["9.46 × 10⁸ m", "9.46 × 10¹² m", "9.46 × 10¹⁵ m", "9.46 × 10¹⁸ m"],
            answerIndex: 2,
            explanation: "One light-year ≈ 9.46 × 10¹⁵ m — the distance light travels through a vacuum in one year.",
            guideRef: "Galaxies and the Scale of the Universe",
            difficulty: "core",
            hints: [
              "Light travels at 3.0 × 10⁸ m/s.",
              "One year ≈ 3.15 × 10⁷ s.",
              "Multiply speed by time: 3.0 × 10⁸ × 3.15 × 10⁷ ≈ 9.5 × 10¹⁵ m.",
            ],
            strategy: "Estimate from distance = speed × time to confirm the power of ten.",
          },
          {
            id: "phys-space-bm3-04",
            question: "When we observe a galaxy that is 100 million light-years away, we are seeing it:",
            options: [
              "Exactly as it is right now",
              "As it was 100 million years ago",
              "As it will be in 100 million years",
              "At a randomly chosen time",
            ],
            answerIndex: 1,
            explanation: "Light takes time to travel, so light arriving now left the galaxy 100 million years ago — we are looking back in time.",
            guideRef: "Galaxies and the Scale of the Universe",
            difficulty: "core",
            hints: [
              "Light is not infinitely fast.",
              "How long did the light take to reach us?",
              "We see the galaxy as it was when that light set out.",
            ],
          },
          {
            id: "phys-space-bm3-05",
            question: "What determines the colour of a star such as the Sun?",
            options: [
              "Its distance from Earth",
              "Its surface temperature",
              "The size of its orbit",
              "Its age in light-years",
            ],
            answerIndex: 1,
            explanation: "A star's colour depends on its surface temperature: hotter stars appear blue-white, cooler ones orange or red. The Sun's ~5500 °C surface gives a yellow-white colour.",
            guideRef: "The Sun and Stellar Energy",
            difficulty: "core",
            hints: [
              "Think about why a hotter object glows differently from a cooler one.",
              "Blue-white indicates a higher temperature than red.",
            ],
          },
          {
            id: "phys-space-bm3-06",
            question: "Which statement about the Sun's equilibrium is correct?",
            options: [
              "Gravity and radiation pressure both act inward",
              "Inward gravitational force is balanced by outward pressure from hot gas and radiation",
              "There are no forces acting because the Sun is in space",
              "Magnetic forces hold the Sun together",
            ],
            answerIndex: 1,
            explanation: "The Sun is stable because the inward pull of gravity is balanced by the outward pressure of hot gas and radiation generated by fusion.",
            guideRef: "The Sun and Stellar Energy",
            difficulty: "core",
            hints: [
              "Stability means two effects in balance.",
              "One acts inward (gravity); what acts outward?",
              "Fusion produces radiation and hot gas pushing outward.",
            ],
          },
          {
            id: "phys-space-bm3-07",
            question: "Which observation is the best evidence that there is no special centre to the expansion of the Universe?",
            options: [
              "The Sun is at the centre of the Solar System",
              "Every distant galaxy is observed to be receding from us, with speed proportional to distance",
              "Some galaxies are blueshifted",
              "The Milky Way is the largest galaxy",
            ],
            answerIndex: 1,
            explanation: "Every galaxy receding with speed proportional to distance is what an observer would see from any point in a uniformly expanding Universe — like points on an inflating balloon — so there is no special centre.",
            guideRef: "The Expanding Universe and the Big Bang",
            difficulty: "challenge",
            hints: [
              "Picture dots on an inflating balloon.",
              "From any dot, all others appear to move away.",
              "This pattern looks the same from every point — no unique centre.",
            ],
            strategy: "Use the expanding-balloon model to reason about uniform expansion.",
          },
          {
            id: "phys-space-bm3-08",
            question: "Proxima Centauri is about 4.2 light-years from the Sun. Roughly how far is this in metres?",
            options: ["4.0 × 10¹⁵ m", "4.0 × 10¹⁶ m", "4.0 × 10¹⁷ m", "4.0 × 10¹⁸ m"],
            answerIndex: 1,
            explanation: "Distance = 4.2 × 9.46 × 10¹⁵ ≈ 3.97 × 10¹⁶ m ≈ 4.0 × 10¹⁶ m.",
            guideRef: "Galaxies and the Scale of the Universe",
            difficulty: "core",
            hints: [
              "Multiply the number of light-years by 9.46 × 10¹⁵ m.",
              "4.2 × 9.46 ≈ 40.",
              "40 × 10¹⁵ = 4.0 × 10¹⁶ m.",
            ],
            strategy: "Convert light-years to metres by multiplying by 9.46 × 10¹⁵.",
          },
          {
            id: "phys-space-bm3-09",
            question: "Light from a galaxy shows its spectral lines shifted toward shorter wavelengths (blueshift). What does this indicate?",
            options: [
              "The galaxy is moving away from us",
              "The galaxy is moving toward us",
              "The galaxy is stationary",
              "The galaxy is extremely cold",
            ],
            answerIndex: 1,
            explanation: "Blueshift is a shift to shorter wavelengths, indicating the source is approaching. (A few nearby galaxies, such as Andromeda, are blueshifted.)",
            guideRef: "The Expanding Universe and the Big Bang",
            difficulty: "core",
            hints: [
              "Blueshift is the opposite of redshift.",
              "Shorter wavelength is associated with approach.",
            ],
          },
          {
            id: "phys-space-bm3-10",
            question: "Why are heavy elements such as iron and gold found in the Solar System at all?",
            options: [
              "They were created during the Big Bang only",
              "They are continuously made by the Sun today",
              "They were forged inside earlier massive stars and scattered by supernovae",
              "They formed by accretion of dust without any stellar process",
            ],
            answerIndex: 2,
            explanation: "Heavy elements are produced by fusion inside massive stars and dispersed by supernovae, enriching the nebula from which later stars and planets (including ours) formed.",
            guideRef: "The Life Cycle of a Star",
            difficulty: "challenge",
            hints: [
              "The Sun fuses hydrogen to helium, not heavy elements.",
              "Where are elements heavier than helium forged?",
              "What event scatters them into space?",
            ],
          },
        ],
      },
      {
        id: "phys-space-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "10 questions · Mixed: orbits, fusion, life cycles, and cosmology",
        questions: [
          {
            id: "phys-space-bm4-01",
            question: "Which of these is NOT held in orbit primarily by the Sun's gravity?",
            options: ["A planet", "A comet", "An asteroid in the belt", "A moon orbiting Jupiter"],
            answerIndex: 3,
            explanation: "A moon of Jupiter is held in orbit mainly by Jupiter's gravity, not the Sun's. Planets, comets, and asteroids orbit the Sun directly.",
            guideRef: "The Solar System",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bm4-02",
            question: "Which list correctly classifies the four inner (rocky) planets?",
            options: [
              "Mercury, Venus, Earth, Mars",
              "Jupiter, Saturn, Uranus, Neptune",
              "Mercury, Venus, Jupiter, Saturn",
              "Earth, Mars, Jupiter, Saturn",
            ],
            answerIndex: 0,
            explanation: "The four inner, rocky planets are Mercury, Venus, Earth, and Mars. The outer four are gas/ice giants.",
            guideRef: "The Solar System",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bm4-03",
            question: "A geostationary satellite must orbit:",
            options: [
              "Above any point on Earth's surface",
              "Above the equator, with a period of 24 hours",
              "Above the poles, with a period of 90 minutes",
              "At any radius, provided the speed is high enough",
            ],
            answerIndex: 1,
            explanation: "A geostationary satellite orbits above the equator with a period of 24 hours, matching Earth's rotation so it stays above the same point.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "core",
            hints: [
              "Geostationary means it appears fixed above one point.",
              "Its period must match Earth's rotation.",
              "The orbit plane must lie over the equator.",
            ],
          },
          {
            id: "phys-space-bm4-04",
            question: "A planet orbits a star with orbital speed 3.0 × 10⁴ m/s and period 3.0 × 10⁷ s. What is its orbital radius? (Use r = vT / 2π.)",
            options: ["1.4 × 10¹¹ m", "1.4 × 10¹² m", "9.0 × 10¹¹ m", "5.7 × 10¹⁰ m"],
            answerIndex: 0,
            explanation: "r = vT / 2π = (3.0 × 10⁴ × 3.0 × 10⁷) / (2π) = 9.0 × 10¹¹ / 6.283 ≈ 1.4 × 10¹¹ m.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "core",
            hints: [
              "Rearrange v = 2πr/T to r = vT / (2π).",
              "vT = 3.0 × 10⁴ × 3.0 × 10⁷ = 9.0 × 10¹¹.",
              "Divide by 2π ≈ 6.28.",
            ],
            strategy: "Rearrange the orbital-speed formula before substituting.",
          },
          {
            id: "phys-space-bm4-05",
            question: "Which statement correctly describes the start of every star's life?",
            options: [
              "A supernova compresses gas into a new star",
              "A nebula contracts under gravity to form a protostar",
              "Two white dwarfs merge",
              "A black hole emits matter that becomes a star",
            ],
            answerIndex: 1,
            explanation: "All stars begin when a nebula (cloud of gas and dust) contracts under gravity, heating up to form a protostar before fusion begins.",
            guideRef: "The Life Cycle of a Star",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bm4-06",
            question: "After a Sun-like star becomes a red giant, what does it form next?",
            options: [
              "A supernova",
              "A planetary nebula, leaving a white dwarf",
              "A neutron star",
              "A black hole",
            ],
            answerIndex: 1,
            explanation: "A red giant expels its outer layers as a planetary nebula, leaving behind a hot, dense white dwarf that slowly cools.",
            guideRef: "The Life Cycle of a Star",
            difficulty: "core",
            hints: [
              "Sun-like stars do not explode as supernovae.",
              "The outer layers are expelled — what is this cloud called?",
              "The leftover core is a white dwarf.",
            ],
          },
          {
            id: "phys-space-bm4-07",
            question: "Which best explains why a planet farther from the Sun moves more slowly than one closer in?",
            options: [
              "It has more mass, so it resists motion more",
              "Gravity is weaker at a greater radius, so less centripetal force is available",
              "There is more friction in deep space",
              "Sunlight pushes it backward",
            ],
            answerIndex: 1,
            explanation: "Gravitational force decreases with distance (F ∝ 1/r²). At a greater radius, less centripetal force is available, so the orbital speed is lower (v ∝ 1/√r).",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "core",
            hints: [
              "How does gravitational force change with distance?",
              "Centripetal force is provided by gravity.",
              "Less force means a lower orbital speed.",
            ],
          },
          {
            id: "phys-space-bm4-08",
            question: "Earth orbits the Sun at 1.50 × 10¹¹ m and Saturn at about 1.43 × 10¹² m. Roughly how many times larger is Saturn's orbital radius?",
            options: ["About 2 times", "About 5 times", "About 10 times", "About 50 times"],
            answerIndex: 2,
            explanation: "1.43 × 10¹² / 1.50 × 10¹¹ ≈ 9.5, which is about 10 times larger.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "core",
            hints: [
              "Divide Saturn's radius by Earth's radius.",
              "1.43 × 10¹² ÷ 1.50 × 10¹¹ = 14.3 / 1.5.",
              "14.3 / 1.5 ≈ 9.5 ≈ 10.",
            ],
          },
          {
            id: "phys-space-bm4-09",
            question: "The fractional redshift z of a galaxy is approximately z ≈ v/c. A galaxy recedes at 3.0 × 10⁶ m/s. What is its approximate redshift? (c = 3.0 × 10⁸ m/s.)",
            options: ["0.001", "0.01", "0.1", "1.0"],
            answerIndex: 1,
            explanation: "z ≈ v/c = (3.0 × 10⁶) / (3.0 × 10⁸) = 1.0 × 10⁻² = 0.01.",
            guideRef: "The Expanding Universe and the Big Bang",
            difficulty: "challenge",
            hints: [
              "Use z ≈ v/c.",
              "Divide 3.0 × 10⁶ by 3.0 × 10⁸.",
              "The powers of ten give 10⁻², i.e. 0.01.",
            ],
            strategy: "Cancel the matching coefficients, then subtract the powers of ten.",
          },
          {
            id: "phys-space-bm4-10",
            question: "A massive star's remnant core after a supernova has a mass of about 5 solar masses. What does it most likely become?",
            options: ["A white dwarf", "A neutron star", "A black hole", "A new main-sequence star"],
            answerIndex: 2,
            explanation: "A remnant core more massive than about 3 solar masses collapses to form a black hole; up to ~3 solar masses gives a neutron star.",
            guideRef: "The Life Cycle of a Star",
            difficulty: "challenge",
            hints: [
              "White dwarfs form from Sun-like stars, not supernova remnants.",
              "Compare 5 solar masses with the ~3 solar mass threshold.",
              "Above the threshold, the core collapses completely.",
            ],
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "phys-space-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "10 questions · Orbits, the Solar System, and stellar life cycles",
        questions: [
          {
            id: "phys-space-bq1-01",
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
            id: "phys-space-bq1-02",
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
            id: "phys-space-bq1-03",
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
            id: "phys-space-bq1-04",
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
          {
            id: "phys-space-bq1-05",
            question:
              "State the names of the eight planets in order of increasing distance from the Sun, and state which two regions of small bodies lie (a) between Mars and Jupiter and (b) beyond Neptune.",
            marks: 4,
            modelAnswer:
              "In order from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.\n(a) The asteroid belt lies between Mars and Jupiter.\n(b) Beyond Neptune lies the outer Solar System, the source of many comets (and dwarf planets).",
            markScheme: [
              "Mercury, Venus, Earth, Mars in correct order [1]",
              "Jupiter, Saturn, Uranus, Neptune in correct order [1]",
              "Asteroid belt between Mars and Jupiter [1]",
              "Comets / dwarf planets beyond Neptune [1]",
            ],
            commonError:
              "Swapping the order of Uranus and Neptune, or placing the asteroid belt between Earth and Mars.",
            guideRef: "The Solar System",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bq1-06",
            question:
              "Explain what is meant by a centripetal force, and state what provides this force for (a) a moon orbiting a planet and (b) a planet orbiting the Sun.",
            marks: 3,
            modelAnswer:
              "A centripetal force is the resultant force directed toward the centre of a circular path, required to keep an object moving in a circle.\n(a) For a moon, the centripetal force is the gravitational attraction between the moon and the planet.\n(b) For a planet, it is the gravitational attraction between the planet and the Sun.",
            markScheme: [
              "Centripetal force is directed toward the centre of the circle / orbit [1]",
              "Moon: gravitational attraction between moon and planet [1]",
              "Planet: gravitational attraction between planet and Sun [1]",
            ],
            commonError:
              "Describing the force as acting outward (centrifugal) — the centripetal force always acts inward toward the centre.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bq1-07",
            question:
              "A communications satellite is in a circular orbit of radius 4.23 × 10⁷ m from Earth's centre, with a period of 24 hours.\n(a) Calculate the orbital speed of the satellite. Give your answer to 2 significant figures.\n(b) State the name given to this type of orbit and one reason it is useful for communications.",
            marks: 5,
            modelAnswer:
              "(a) T = 24 × 3600 = 8.64 × 10⁴ s.\nv = 2πr / T = (2π × 4.23 × 10⁷) / (8.64 × 10⁴)\nv = 2.658 × 10⁸ / 8.64 × 10⁴ ≈ 3.1 × 10³ m/s.\n\n(b) It is a geostationary orbit. Because the satellite stays above the same point on Earth's surface, a ground dish can be fixed and aimed permanently at it, giving a continuous signal without tracking.",
            markScheme: [
              "T converted to seconds (8.64 × 10⁴ s) [1]",
              "Correct substitution into v = 2πr / T [1]",
              "v ≈ 3.1 × 10³ m/s (accept 3.0–3.1 × 10³) [1]",
              "Geostationary orbit [1]",
              "Stays above same point / fixed dish / continuous signal / no tracking needed [1]",
            ],
            commonError:
              "Forgetting to convert 24 hours into seconds before substituting.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "core",
            hints: [
              "Convert the 24-hour period into seconds first.",
              "v = 2πr / T with r = 4.23 × 10⁷ m.",
              "A satellite that stays above one point has a special name.",
              "Think about whether a ground antenna needs to move.",
            ],
            strategy: "Convert units → substitute → recall the geostationary property.",
            solutions: [
              {
                label: "Direct substitution",
                steps: [
                  "T = 24 × 3600 = 8.64 × 10⁴ s",
                  "v = 2π × 4.23 × 10⁷ / 8.64 × 10⁴",
                  "v = 2.658 × 10⁸ / 8.64 × 10⁴",
                  "v ≈ 3.1 × 10³ m/s",
                ],
              },
            ],
          },
          {
            id: "phys-space-bq1-08",
            question:
              "Describe the energy changes that occur as a comet travels from aphelion (farthest from the Sun) to perihelion (closest to the Sun), and explain why the comet travels fastest at perihelion.",
            marks: 4,
            modelAnswer:
              "As the comet moves from aphelion toward perihelion it falls inward through the Sun's gravitational field. Gravity does work on the comet, so its gravitational potential energy decreases and is transferred to kinetic energy. Because total energy (GPE + KE) is conserved, the kinetic energy is greatest where the potential energy is lowest — at perihelion. Greater kinetic energy means greater speed, so the comet travels fastest at perihelion.",
            markScheme: [
              "Comet falls inward / gravity does work on it [1]",
              "Gravitational potential energy decreases [1]",
              "Kinetic energy increases (energy is conserved / transferred) [1]",
              "Maximum KE at perihelion → highest speed there [1]",
            ],
            commonError:
              "Stating the comet is fastest at aphelion, or that its speed is constant throughout the orbit.",
            guideRef: "The Solar System",
            difficulty: "core",
            hints: [
              "Which way does gravity act as the comet approaches?",
              "What happens to GPE as the comet falls inward?",
              "Energy is conserved: GPE lost becomes KE.",
              "Where is KE (and hence speed) greatest?",
            ],
          },
          {
            id: "phys-space-bq1-09",
            question:
              "Explain why a planet in a larger orbit has both a lower orbital speed and a longer orbital period than a planet in a smaller orbit around the same star.",
            marks: 4,
            modelAnswer:
              "Gravitational force decreases with distance (F ∝ 1/r²). At a larger orbital radius the gravitational force, which provides the centripetal force, is weaker, so the planet moves more slowly (v ∝ 1/√r). The period is the time for one orbit: T = 2πr / v. A larger radius means a longer circumference to travel, and the speed is also lower, so the time taken for one orbit is much greater. Both effects together make the period longer.",
            markScheme: [
              "Gravitational force weaker at larger radius (F ∝ 1/r²) [1]",
              "Weaker centripetal force → lower orbital speed [1]",
              "Larger radius → longer circumference / greater distance per orbit [1]",
              "Lower speed and greater distance → longer period [1]",
            ],
            commonError:
              "Claiming a larger orbit means a higher speed because 'there is further to travel' — in fact gravity weakens faster than the circumference grows, so the speed falls.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "core",
            hints: [
              "How does gravity change with distance?",
              "Gravity provides the centripetal force — what does weaker gravity do to speed?",
              "Period depends on both the distance per orbit and the speed.",
            ],
            strategy: "Treat speed and period separately, then combine the two effects.",
          },
          {
            id: "phys-space-bq1-10",
            question:
              "Two satellites, A and B, orbit Earth. Satellite A has an orbital radius of 8.0 × 10⁶ m. Satellite B orbits at four times this radius.\n(a) State and explain whether satellite B has a greater or smaller orbital speed than satellite A.\n(b) Using the relationship T ∝ r^{3/2}, calculate how many times longer satellite B's period is than satellite A's.",
            marks: 5,
            modelAnswer:
              "(a) Satellite B has a smaller orbital speed. At a larger radius the gravitational force (providing the centripetal force) is weaker, so the satellite must move more slowly to stay in orbit (v ∝ 1/√r).\n\n(b) Using T ∝ r^{3/2}, multiplying the radius by 4 multiplies the period by 4^{3/2} = (√4)³ = 2³ = 8. So satellite B's period is 8 times longer than satellite A's.",
            markScheme: [
              "Satellite B has a smaller orbital speed [1]",
              "Reason: weaker gravity / smaller centripetal force at larger radius / v ∝ 1/√r [1]",
              "Recognise factor in r is 4 [1]",
              "4^{3/2} evaluated as (√4)³ = 2³ [1]",
              "Period is 8 times longer [1]",
            ],
            commonError:
              "Multiplying the period by 4 (treating T ∝ r) instead of by 4^{3/2} = 8.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "challenge",
            hints: [
              "For (a), recall how gravity changes with radius and what that does to speed.",
              "For (b), substitute the factor 4 into r^{3/2}.",
              "4^{3/2} = (4^{1/2})³ = 2³.",
            ],
            strategy: "Apply v ∝ 1/√r for speed and T ∝ r^{3/2} for period.",
            solutions: [
              {
                label: "Ratio using T ∝ r^{3/2}",
                steps: [
                  "Radius factor: r_B / r_A = 4",
                  "Period factor = 4^{3/2}",
                  "4^{3/2} = (√4)³ = 2³ = 8",
                  "So T_B = 8 × T_A",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-space-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "10 questions · Expansion of the Universe, stellar fusion, and challenge problems",
        questions: [
          {
            id: "phys-space-bq2-01",
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
            id: "phys-space-bq2-02",
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
            id: "phys-space-bq2-03",
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
            id: "phys-space-bq2-04",
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
          {
            id: "phys-space-bq2-05",
            question:
              "Describe the nuclear process occurring in the core of the Sun, and explain why this process releases energy. Include the overall reaction in words.",
            marks: 4,
            modelAnswer:
              "In the Sun's core, the extreme temperature (~15 million °C) and pressure force hydrogen nuclei to join together (fuse) to form helium nuclei: hydrogen → helium (four hydrogen nuclei fuse to form one helium nucleus). This is nuclear fusion. The helium nucleus formed has slightly less mass than the four hydrogen nuclei that fused; this 'missing' mass (the mass defect) is converted into energy according to E = mc². Because c² is very large, even a tiny mass loss releases a large amount of energy.",
            markScheme: [
              "Nuclear fusion of hydrogen nuclei in the core [1]",
              "Overall reaction: hydrogen → helium [1]",
              "Product helium nucleus has less mass than the reacting hydrogen (mass defect) [1]",
              "Lost mass converted to energy (E = mc²) [1]",
            ],
            commonError:
              "Saying the Sun 'burns' hydrogen — fusion is a nuclear process, not combustion, and releases far more energy per kilogram.",
            guideRef: "The Sun and Stellar Energy",
            difficulty: "warmup",
            hints: [
              "Name the process: fusion, not fission or burning.",
              "What two nuclei are involved (reactant and product)?",
              "Compare the masses of the products and reactants.",
              "Link the mass difference to energy with E = mc².",
            ],
          },
          {
            id: "phys-space-bq2-06",
            question:
              "(a) Define a light-year.\n(b) The Andromeda Galaxy is about 2.5 × 10⁶ light-years from Earth. Calculate this distance in metres. (1 light-year = 9.46 × 10¹⁵ m.)\n(c) Explain why astronomers use the light-year rather than the metre to express such distances.",
            marks: 5,
            modelAnswer:
              "(a) A light-year is the distance that light travels through a vacuum in one year (≈ 9.46 × 10¹⁵ m).\n\n(b) distance = 2.5 × 10⁶ × 9.46 × 10¹⁵ = 2.365 × 10²² m ≈ 2.4 × 10²² m.\n\n(c) Distances between galaxies are so vast that expressing them in metres gives extremely large, unwieldy numbers. The light-year gives more manageable values and also conveys the light-travel time (and so how far back in time we are seeing).",
            markScheme: [
              "Light-year = distance light travels in one year (in a vacuum) [1]",
              "Correct method: 2.5 × 10⁶ × 9.46 × 10¹⁵ [1]",
              "Answer ≈ 2.4 × 10²² m (accept 2.36–2.4 × 10²²) [1]",
              "Distances in metres are too large / unwieldy [1]",
              "Light-year gives manageable numbers / conveys look-back time [1]",
            ],
            commonError:
              "Treating the light-year as a unit of time rather than distance.",
            guideRef: "Galaxies and the Scale of the Universe",
            difficulty: "core",
            hints: [
              "A light-year measures distance, not time.",
              "Multiply the number of light-years by 9.46 × 10¹⁵ m.",
              "2.5 × 9.46 ≈ 23.7, and combine the powers of ten.",
              "Think about how large the number would be if written in metres.",
            ],
            strategy: "Multiply coefficients, add the exponents (10⁶ × 10¹⁵ = 10²¹).",
            solutions: [
              {
                label: "Unit conversion",
                steps: [
                  "distance = 2.5 × 10⁶ ly × 9.46 × 10¹⁵ m/ly",
                  "= (2.5 × 9.46) × 10^(6+15)",
                  "= 23.65 × 10²¹",
                  "= 2.4 × 10²² m",
                ],
              },
            ],
          },
          {
            id: "phys-space-bq2-07",
            question:
              "Explain, using the idea of the Doppler effect, why light from a galaxy moving away from Earth is redshifted. State clearly what happens to the wavelength and what redshift tells us about the galaxy's motion.",
            marks: 4,
            modelAnswer:
              "The Doppler effect occurs when a source of waves moves relative to an observer. When a galaxy moves away from Earth, the wavelengths of the light it emits are stretched, so the observed wavelength is longer than the wavelength measured for the same source at rest. A shift to longer wavelength is toward the red end of the spectrum, so this is called redshift. Observing redshift therefore tells us the galaxy is moving away from us (receding).",
            markScheme: [
              "Doppler effect: source moving relative to observer changes observed wavelength [1]",
              "Receding source → wavelength stretched / increased [1]",
              "Longer wavelength = shift toward red end = redshift [1]",
              "Redshift indicates the galaxy is moving away from us [1]",
            ],
            commonError:
              "Saying the galaxy 'turns red' — it is the spectral lines that shift to longer wavelength, not a visible change in the galaxy's colour.",
            guideRef: "The Expanding Universe and the Big Bang",
            difficulty: "core",
            hints: [
              "What does the Doppler effect do to waves from a receding source?",
              "Stretched waves means longer or shorter wavelength?",
              "Longer wavelength corresponds to which end of the spectrum?",
              "Redshift links to which direction of motion?",
            ],
          },
          {
            id: "phys-space-bq2-08",
            question:
              "A galaxy is observed to be receding from Earth at a speed of 1.5 × 10⁷ m/s.\n(a) Using z ≈ v/c with c = 3.0 × 10⁸ m/s, calculate the fractional redshift z of the galaxy.\n(b) A second galaxy has a fractional redshift twice as large. State and explain what this implies about its distance compared with the first galaxy.",
            marks: 5,
            modelAnswer:
              "(a) z ≈ v/c = (1.5 × 10⁷) / (3.0 × 10⁸) = 0.05.\n\n(b) The second galaxy has twice the redshift, so it is receding about twice as fast. Since recession speed is proportional to distance (more distant galaxies recede faster), the second galaxy is roughly twice as far from Earth as the first.",
            markScheme: [
              "Correct substitution into z = v/c [1]",
              "z = 0.05 [1]",
              "Twice the redshift → roughly twice the recession speed [1]",
              "Recession speed proportional to distance [1]",
              "Second galaxy is about twice as far away [1]",
            ],
            commonError:
              "Forgetting that recession speed (and hence redshift) is proportional to distance, so a larger redshift means a more distant galaxy.",
            guideRef: "The Expanding Universe and the Big Bang",
            difficulty: "challenge",
            hints: [
              "Use z ≈ v/c directly.",
              "Divide 1.5 × 10⁷ by 3.0 × 10⁸.",
              "For (b), recall that recession speed is proportional to distance.",
              "Double the speed implies roughly double the distance.",
            ],
            strategy: "Compute z first, then apply the speed-distance proportionality.",
            solutions: [
              {
                label: "Calculating z",
                steps: [
                  "z = v / c",
                  "z = 1.5 × 10⁷ / 3.0 × 10⁸",
                  "z = 0.5 × 10⁻¹ = 0.05",
                ],
              },
            ],
          },
          {
            id: "phys-space-bq2-09",
            question:
              "The Sun has a mass of about 2 × 10³⁰ kg and converts about 4 × 10⁹ kg of mass into energy each second.\n(a) Assuming this rate stayed constant, estimate how many seconds it would take to convert 0.1% of the Sun's total mass into energy.\n(b) Comment briefly on why the Sun can remain a stable main-sequence star for billions of years despite this enormous rate.",
            marks: 5,
            modelAnswer:
              "(a) Mass to be converted = 0.1% of 2 × 10³⁰ kg = 0.001 × 2 × 10³⁰ = 2 × 10²⁷ kg.\nTime = mass / rate = (2 × 10²⁷) / (4 × 10⁹) = 0.5 × 10¹⁸ = 5 × 10¹⁷ s.\n(That is roughly 1.6 × 10¹⁰ years, i.e. tens of billions of years.)\n\n(b) The Sun is so massive that, even at a rate of billions of kilograms per second, only a tiny fraction of its mass is consumed over billions of years. As long as hydrogen fuel remains in the core, fusion continues to balance gravity, keeping the Sun stable on the main sequence.",
            markScheme: [
              "0.1% of mass = 2 × 10²⁷ kg [1]",
              "Time = mass / rate set up correctly [1]",
              "Time ≈ 5 × 10¹⁷ s [1]",
              "Sun is extremely massive, so fraction consumed is tiny [1]",
              "Fusion balances gravity while fuel lasts → long-term stability [1]",
            ],
            commonError:
              "Slipping a power of ten when dividing 2 × 10²⁷ by 4 × 10⁹ — the coefficient 2/4 = 0.5 must be rewritten as 5 × 10⁻¹.",
            guideRef: "The Sun and Stellar Energy",
            difficulty: "challenge",
            hints: [
              "0.1% means multiply by 0.001.",
              "Time = mass to convert ÷ rate of conversion.",
              "Watch the coefficient: 2/4 = 0.5 = 5 × 10⁻¹.",
              "For (b), compare the consumed mass with the Sun's total mass.",
            ],
            strategy: "Find the mass first, then divide by the rate; track powers of ten carefully.",
            solutions: [
              {
                label: "Mass-then-time method",
                steps: [
                  "Mass converted = 0.001 × 2 × 10³⁰ = 2 × 10²⁷ kg",
                  "Time = mass / rate = 2 × 10²⁷ / 4 × 10⁹",
                  "= 0.5 × 10¹⁸",
                  "= 5 × 10¹⁷ s",
                ],
              },
            ],
          },
          {
            id: "phys-space-bq2-10",
            question:
              "Summarise the evidence that supports the Big Bang theory, and explain how this evidence leads to the conclusion that the Universe had a beginning.",
            marks: 5,
            modelAnswer:
              "The main evidence is the redshift of light from distant galaxies: their spectral lines are shifted to longer wavelengths, showing that the galaxies are all moving away from us. Furthermore, more distant galaxies show greater redshift, meaning they are receding faster — recession speed is proportional to distance. This pattern is exactly what is expected for a uniformly expanding Universe with no special centre. (A further piece of evidence, beyond the basic syllabus, is the cosmic microwave background radiation detected uniformly from all directions.) If the Universe is expanding, then running the expansion backward in time implies that everything was once concentrated in an extremely hot, dense state. This leads to the conclusion that the Universe had a beginning — the Big Bang, about 13.8 billion years ago.",
            markScheme: [
              "Redshift of distant galaxies → galaxies moving away [1]",
              "More distant galaxies recede faster (speed proportional to distance) [1]",
              "Consistent with uniform expansion / no special centre (or CMB credited) [1]",
              "Reversing the expansion implies a hot, dense origin [1]",
              "Conclusion: Universe had a beginning / Big Bang ~13.8 billion years ago [1]",
            ],
            commonError:
              "Stating the Big Bang was an explosion 'in space' — it is better described as the expansion of space itself from a hot, dense state.",
            guideRef: "The Expanding Universe and the Big Bang",
            difficulty: "core",
            hints: [
              "Start from the redshift observations.",
              "Note the link between distance and recession speed.",
              "What does running the expansion backward in time suggest?",
              "Name the theory and the approximate age of the Universe.",
            ],
            strategy: "Evidence → expansion → reverse in time → beginning (Big Bang).",
          },
        ],
      },
      {
        id: "phys-space-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "10 questions · Solar System, gravitational field, and the scale of the Universe",
        questions: [
          {
            id: "phys-space-bq3-01",
            question:
              "(a) State what is meant by a 'moon'.\n(b) State the name given to the icy bodies that follow highly elliptical orbits and grow bright tails when near the Sun.",
            marks: 2,
            modelAnswer:
              "(a) A moon is a natural satellite that orbits a planet, held in place by gravitational attraction.\n(b) Comets.",
            markScheme: [
              "Moon = natural satellite orbiting a planet [1]",
              "Comets [1]",
            ],
            commonError:
              "Confusing comets (icy, highly elliptical orbits) with asteroids (rocky, in the belt between Mars and Jupiter).",
            guideRef: "The Solar System",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bq3-02",
            question:
              "State the orbital-speed formula and define each symbol with its SI unit.",
            marks: 3,
            modelAnswer:
              "v = 2πr / T, where v is the orbital speed in metres per second (m/s), r is the orbital radius in metres (m), and T is the orbital period in seconds (s).",
            markScheme: [
              "v = 2πr / T [1]",
              "v = orbital speed (m/s); r = orbital radius (m) [1]",
              "T = orbital period (s) [1]",
            ],
            commonError:
              "Quoting the formula but leaving T in days or hours rather than seconds.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bq3-03",
            question:
              "The International Space Station orbits Earth at a radius of 6.79 × 10⁶ m with an orbital speed of 7660 m/s.\n(a) Calculate its orbital period in seconds.\n(b) Convert this period into minutes and comment on whether it agrees with the often-quoted '90 minutes per orbit'.",
            marks: 5,
            modelAnswer:
              "(a) From v = 2πr / T: T = 2πr / v = (2π × 6.79 × 10⁶) / 7660 = 4.266 × 10⁷ / 7660 ≈ 5570 s.\n\n(b) 5570 / 60 ≈ 92.8 minutes ≈ 93 minutes. This agrees well with the commonly quoted figure of about 90 minutes per orbit.",
            markScheme: [
              "Rearrangement T = 2πr / v [1]",
              "Correct substitution (2π × 6.79 × 10⁶) / 7660 [1]",
              "T ≈ 5570 s (accept 5500–5600 s) [1]",
              "Convert to minutes: ≈ 93 min (÷60) [1]",
              "Comment: consistent with ~90 minutes per orbit [1]",
            ],
            commonError:
              "Dividing the radius (not the circumference) by the speed, i.e. forgetting the factor of 2π.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "core",
            hints: [
              "Rearrange v = 2πr / T to make T the subject.",
              "T = 2πr / v.",
              "Compute the circumference 2πr first, then divide by v.",
              "Divide the seconds by 60 to get minutes.",
            ],
            strategy: "Rearrange → substitute → convert units → compare with expected value.",
            solutions: [
              {
                label: "Rearranged calculation",
                steps: [
                  "T = 2πr / v = (2π × 6.79 × 10⁶) / 7660",
                  "= 4.266 × 10⁷ / 7660",
                  "≈ 5570 s",
                  "5570 / 60 ≈ 93 min",
                ],
              },
            ],
          },
          {
            id: "phys-space-bq3-04",
            question:
              "(a) State what is meant by the gravitational field strength of a planet.\n(b) The gravitational field strength at Earth's surface is about 9.8 N/kg. State what this value means for a 1 kg mass.\n(c) Explain qualitatively why the gravitational field strength decreases with height above Earth's surface.",
            marks: 5,
            modelAnswer:
              "(a) The gravitational field strength is the gravitational force acting per unit mass on an object placed at that point (g = F/m), measured in newtons per kilogram (N/kg).\n(b) A 1 kg mass at Earth's surface experiences a gravitational force (weight) of about 9.8 N.\n(c) Gravitational force follows an inverse-square law (F ∝ 1/r²): as the distance from the centre of the Earth increases, the force on a given mass decreases, so the force per unit mass — the field strength — also decreases.",
            markScheme: [
              "Gravitational field strength = force per unit mass (g = F/m) [1]",
              "Unit: N/kg [1]",
              "1 kg mass experiences a force / weight of about 9.8 N [1]",
              "Force follows inverse-square law / weakens with distance [1]",
              "Greater height → greater r → smaller force per kg → smaller g [1]",
            ],
            commonError:
              "Confusing gravitational field strength (N/kg) with weight (N) — field strength is force per unit mass, not the force itself.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "core",
            hints: [
              "Field strength is a 'per kilogram' quantity.",
              "For a 1 kg mass, the force equals the field strength numerically.",
              "How does gravitational force change with distance from the centre?",
            ],
          },
          {
            id: "phys-space-bq3-05",
            question:
              "An astronaut has a mass of 80 kg. The gravitational field strength on the Moon's surface is 1.6 N/kg.\n(a) Calculate the astronaut's weight on the Moon.\n(b) Calculate the astronaut's weight on Earth, where g = 9.8 N/kg.\n(c) State what happens to the astronaut's mass when they travel from Earth to the Moon.",
            marks: 5,
            modelAnswer:
              "(a) W = mg = 80 × 1.6 = 128 N.\n(b) W = mg = 80 × 9.8 = 784 N.\n(c) The astronaut's mass stays the same (80 kg); mass is the amount of matter and does not depend on location. Only the weight changes.",
            markScheme: [
              "Use of W = mg [1]",
              "Weight on Moon = 128 N [1]",
              "Weight on Earth = 784 N [1]",
              "Mass is unchanged / stays 80 kg [1]",
              "Reason: mass is the amount of matter, independent of g / location [1]",
            ],
            commonError:
              "Saying the astronaut's mass decreases on the Moon — it is the weight that decreases; mass is constant.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "core",
            hints: [
              "Weight = mass × gravitational field strength.",
              "Use the same mass with each value of g.",
              "Does mass depend on where you are?",
            ],
            strategy: "Apply W = mg for each location; keep mass constant.",
            solutions: [
              {
                label: "Using W = mg",
                steps: [
                  "Moon: W = 80 × 1.6 = 128 N",
                  "Earth: W = 80 × 9.8 = 784 N",
                  "Mass = 80 kg in both places (unchanged)",
                ],
              },
            ],
          },
          {
            id: "phys-space-bq3-06",
            question:
              "(a) State two reasons why the light-year is used to measure astronomical distances.\n(b) The Milky Way has a diameter of about 100 000 light-years. Explain what is meant by the statement that, when we look at a star on the far side of the galaxy, we are 'looking back in time'.",
            marks: 4,
            modelAnswer:
              "(a) (i) Distances between stars and galaxies are so large that values in metres would be enormous and hard to work with; the light-year gives more manageable numbers. (ii) It also conveys the time light has taken to travel, which is useful in astronomy.\n(b) Light travels at a finite speed, so light from a star 100 000 light-years away has taken 100 000 years to reach us. We therefore see the star as it was 100 000 years ago, not as it is now — we are looking back in time.",
            markScheme: [
              "Reason 1: distances in metres are too large / unwieldy [1]",
              "Reason 2: conveys light-travel time / look-back time [1]",
              "Light has finite speed, so takes time to travel the distance [1]",
              "We see the object as it was when the light left it (in the past) [1]",
            ],
            commonError:
              "Assuming we see distant objects as they are 'now' — because light has a finite speed, we always see them as they were in the past.",
            guideRef: "Galaxies and the Scale of the Universe",
            difficulty: "core",
            hints: [
              "Think about how big the numbers would be in metres.",
              "A light-year also tells you a travel time.",
              "Light is fast but not infinitely fast.",
              "What does the finite travel time mean for what we observe?",
            ],
          },
          {
            id: "phys-space-bq3-07",
            question:
              "(a) State the approximate number of galaxies in the observable Universe.\n(b) State the approximate diameter of the observable Universe in light-years.\n(c) Explain why no special 'centre' of the Universe can be identified from the way galaxies recede.",
            marks: 4,
            modelAnswer:
              "(a) About 2 trillion (2 × 10¹²) galaxies.\n(b) About 93 billion light-years.\n(c) Every galaxy is observed to be moving away from us, with more distant galaxies receding faster. The same pattern would be seen by an observer in any galaxy — like dots on an inflating balloon, where every dot sees all the others moving away. Because no point is preferred, no special centre of the expansion can be identified.",
            markScheme: [
              "About 2 trillion / 2 × 10¹² galaxies [1]",
              "About 93 billion light-years [1]",
              "All galaxies recede from us, faster with distance [1]",
              "Same observation from any galaxy / balloon analogy → no special centre [1]",
            ],
            commonError:
              "Assuming Earth or the Milky Way must be at the centre because everything moves away from us.",
            guideRef: "Galaxies and the Scale of the Universe",
            difficulty: "challenge",
            hints: [
              "Recall the rough number of galaxies.",
              "Recall the rough size of the observable Universe.",
              "Picture dots on an inflating balloon.",
              "From any dot, what do the other dots appear to do?",
            ],
            strategy: "Use the balloon analogy to justify the absence of a centre.",
          },
          {
            id: "phys-space-bq3-08",
            question:
              "Light leaving the Sun takes about 8.3 minutes to reach Earth.\n(a) Using speed = distance / time with the speed of light c = 3.0 × 10⁸ m/s, calculate the distance from the Sun to the Earth in metres.\n(b) Compare your answer with the value 1.50 × 10¹¹ m used elsewhere and comment.",
            marks: 5,
            modelAnswer:
              "(a) time = 8.3 × 60 = 498 s.\ndistance = c × t = 3.0 × 10⁸ × 498 = 1.494 × 10¹¹ m ≈ 1.5 × 10¹¹ m.\n\n(b) This is essentially the same as the quoted Earth–Sun distance of 1.50 × 10¹¹ m, so the two values agree (to 2 significant figures). The small difference is due to rounding the light-travel time.",
            markScheme: [
              "Convert time to seconds: 8.3 × 60 = 498 s [1]",
              "Use distance = c × t [1]",
              "Substitution: 3.0 × 10⁸ × 498 [1]",
              "distance ≈ 1.5 × 10¹¹ m [1]",
              "Comment: agrees with 1.50 × 10¹¹ m (to 2 s.f.) [1]",
            ],
            commonError:
              "Leaving the time in minutes, which gives an answer 60 times too small in the wrong unit.",
            guideRef: "Galaxies and the Scale of the Universe",
            difficulty: "core",
            hints: [
              "Convert 8.3 minutes to seconds first.",
              "distance = speed × time.",
              "Multiply 3.0 × 10⁸ by 498.",
              "Compare your result with 1.50 × 10¹¹ m.",
            ],
            strategy: "Convert to SI units, then apply distance = speed × time.",
            solutions: [
              {
                label: "Distance from light-travel time",
                steps: [
                  "t = 8.3 × 60 = 498 s",
                  "distance = c × t = 3.0 × 10⁸ × 498",
                  "= 1.494 × 10¹¹ m",
                  "≈ 1.5 × 10¹¹ m (agrees with 1.50 × 10¹¹ m)",
                ],
              },
            ],
          },
          {
            id: "phys-space-bq3-09",
            question:
              "Explain why the planets closer to the Sun (such as Mercury) are rocky, whereas those farther out (such as Jupiter and Saturn) are gas giants, in terms of conditions during the formation of the Solar System. (A qualitative answer is expected.)",
            marks: 3,
            modelAnswer:
              "When the Solar System formed by accretion from the nebular disc, the region close to the Sun was very hot, so only materials with high melting points (rock and metal) could condense there, forming small rocky planets. Farther from the Sun it was much colder, allowing ices and large amounts of light gases (hydrogen and helium) to be retained and accreted, so the outer planets grew much larger and became gas giants.",
            markScheme: [
              "Inner region hot → only rock/metal (high melting point) condenses → rocky planets [1]",
              "Outer region cold → ices and gases can condense / be retained [1]",
              "Outer planets accreted more material / light gases → gas giants [1]",
            ],
            commonError:
              "Attributing the difference only to size, without linking it to temperature during formation.",
            guideRef: "The Solar System",
            difficulty: "challenge",
            hints: [
              "Think about temperature near the Sun versus far away.",
              "Which materials can stay solid close to a hot Sun?",
              "What can condense and be retained where it is cold?",
            ],
          },
          {
            id: "phys-space-bq3-10",
            question:
              "A comet has an orbital period of 76 years. Its closest approach to the Sun is 8.8 × 10¹⁰ m and its farthest distance is 5.3 × 10¹² m.\n(a) State at which of these two points the comet moves faster, and explain why.\n(b) Explain why the comet is visible from Earth only for a short part of its 76-year orbit.",
            marks: 5,
            modelAnswer:
              "(a) The comet moves faster at its closest approach (perihelion, 8.8 × 10¹⁰ m). As the comet falls toward the Sun, gravity does work on it, converting gravitational potential energy into kinetic energy, so its speed is greatest where it is closest to the Sun.\n(b) The comet spends only a small fraction of its orbit close to the Sun. A bright tail of gas and dust forms only when the comet is near the Sun and is heated strongly; for most of the 76 years it is far away, moving slowly, cold and faint, and therefore not visible from Earth.",
            markScheme: [
              "Faster at closest approach / perihelion [1]",
              "Gravity does work / GPE converted to KE as it falls inward [1]",
              "Greatest speed where closest to the Sun [1]",
              "Tail forms / comet brightens only when heated near the Sun [1]",
              "Spends most of the orbit far from the Sun, faint and slow → visible only briefly [1]",
            ],
            commonError:
              "Thinking the comet is brightest or fastest when far from the Sun.",
            guideRef: "The Solar System",
            difficulty: "challenge",
            hints: [
              "Use energy conservation: where is KE greatest?",
              "Gravity does work as the comet approaches the Sun.",
              "What causes the bright tail, and when does it form?",
              "How much of the 76-year orbit is spent near the Sun?",
            ],
            strategy: "Apply energy conservation for speed; link heating to visibility.",
          },
        ],
      },
      {
        id: "phys-space-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "10 questions · Mixed synoptic: stars, orbits, and cosmology",
        questions: [
          {
            id: "phys-space-bq4-01",
            question:
              "(a) Name the process by which a nebula becomes a star.\n(b) State, in order, the two stages a nebula passes through before it becomes a main-sequence star.",
            marks: 3,
            modelAnswer:
              "(a) Gravitational contraction (the nebula contracts under gravity, heating up).\n(b) Nebula → protostar → (then) main-sequence star. So the two stages before the main sequence are the nebula and the protostar.",
            markScheme: [
              "Contraction / collapse under gravity [1]",
              "Nebula stage [1]",
              "Protostar stage [1]",
            ],
            commonError:
              "Placing the main-sequence stage before the protostar, or omitting the protostar entirely.",
            guideRef: "The Life Cycle of a Star",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bq4-02",
            question:
              "State whether each of the following is the fate of a Sun-like star or a massive star: (a) white dwarf; (b) supernova; (c) red supergiant; (d) planetary nebula.",
            marks: 4,
            modelAnswer:
              "(a) White dwarf — Sun-like star.\n(b) Supernova — massive star.\n(c) Red supergiant — massive star.\n(d) Planetary nebula — Sun-like star.",
            markScheme: [
              "White dwarf = Sun-like [1]",
              "Supernova = massive [1]",
              "Red supergiant = massive [1]",
              "Planetary nebula = Sun-like [1]",
            ],
            commonError:
              "Confusing red giant (Sun-like) with red supergiant (massive), or planetary nebula (Sun-like) with supernova (massive).",
            guideRef: "The Life Cycle of a Star",
            difficulty: "warmup",
          },
          {
            id: "phys-space-bq4-03",
            question:
              "A planet orbits a star at a radius of 7.8 × 10¹¹ m with an orbital period of 3.7 × 10⁸ s.\n(a) Calculate the orbital speed of the planet to 2 significant figures.\n(b) The star is more massive than the Sun. State what this means for the gravitational force on the planet compared with a Sun-mass star at the same radius.",
            marks: 5,
            modelAnswer:
              "(a) v = 2πr / T = (2π × 7.8 × 10¹¹) / (3.7 × 10⁸) = 4.901 × 10¹² / 3.7 × 10⁸ ≈ 1.3 × 10⁴ m/s.\n\n(b) A more massive star produces a stronger gravitational force on the planet at the same radius (gravitational force is proportional to the mass of the central body), so a greater centripetal force acts on the planet.",
            markScheme: [
              "Correct substitution into v = 2πr / T [1]",
              "Circumference 2π × 7.8 × 10¹¹ ≈ 4.9 × 10¹² m [1]",
              "v ≈ 1.3 × 10⁴ m/s (accept 1.3–1.4 × 10⁴) [1]",
              "More massive star → stronger gravitational force [1]",
              "Greater centripetal force at the same radius [1]",
            ],
            commonError:
              "Slipping a power of ten when dividing 4.9 × 10¹² by 3.7 × 10⁸ (should give ~10⁴, not 10³).",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "core",
            hints: [
              "Use v = 2πr / T; both values are in SI units.",
              "Compute 2π × 7.8 × 10¹¹ first.",
              "Divide by 3.7 × 10⁸; check the power of ten.",
              "Gravitational force depends on the mass of the central body.",
            ],
            strategy: "Substitute carefully, tracking powers of ten in the division.",
            solutions: [
              {
                label: "Orbital speed",
                steps: [
                  "v = 2π × 7.8 × 10¹¹ / 3.7 × 10⁸",
                  "= 4.901 × 10¹² / 3.7 × 10⁸",
                  "= 1.32 × 10⁴ m/s",
                  "≈ 1.3 × 10⁴ m/s",
                ],
              },
            ],
          },
          {
            id: "phys-space-bq4-04",
            question:
              "Explain how the colour of a star is related to its surface temperature, and use this to compare a blue-white star with a red star.",
            marks: 3,
            modelAnswer:
              "A star's colour depends on its surface temperature: hotter stars emit light that appears blue-white, while cooler stars appear orange or red. Therefore a blue-white star has a higher surface temperature than a red star. (The Sun, at about 5500 °C, is yellow-white, between these extremes.)",
            markScheme: [
              "Colour depends on surface temperature [1]",
              "Hotter → blue-white; cooler → red [1]",
              "Blue-white star is hotter than the red star [1]",
            ],
            commonError:
              "Assuming red stars are hottest because red is associated with heat — in fact blue-white stars are hotter.",
            guideRef: "The Sun and Stellar Energy",
            difficulty: "core",
            hints: [
              "Which colour corresponds to higher temperature?",
              "Compare the two stars using the colour-temperature link.",
            ],
          },
          {
            id: "phys-space-bq4-05",
            question:
              "Explain why heavy elements such as carbon, oxygen, and iron are found on Earth, with reference to the life cycle of massive stars.",
            marks: 4,
            modelAnswer:
              "Heavy elements are formed by nuclear fusion of lighter elements inside massive stars during their lifetimes. When a massive star reaches the end of its life it explodes as a supernova, which disperses these heavy elements into space, enriching the surrounding nebula. Our Solar System later formed by accretion from such an enriched nebula, so the heavy elements (including those now on Earth and in living things) were originally made inside earlier stars.",
            markScheme: [
              "Heavy elements formed by fusion inside massive stars [1]",
              "Supernova explosion disperses them into space [1]",
              "Enriches the nebula / interstellar medium [1]",
              "Solar System (and Earth) formed from this enriched material by accretion [1]",
            ],
            commonError:
              "Claiming the Sun makes heavy elements like iron — the Sun only fuses hydrogen into helium; heavier elements come from more massive stars and supernovae.",
            guideRef: "The Life Cycle of a Star",
            difficulty: "core",
            hints: [
              "Where are elements heavier than helium forged?",
              "What event scatters them into space?",
              "How did this material end up in our Solar System?",
            ],
          },
          {
            id: "phys-space-bq4-06",
            question:
              "A geostationary satellite orbits at a radius of about 4.2 × 10⁷ m, while a low Earth orbit (LEO) satellite orbits at about 6.8 × 10⁶ m.\n(a) State which satellite has the longer orbital period, and justify your answer using the relationship between radius and period.\n(b) Give one practical use for which a LEO satellite is more suitable than a geostationary satellite, and explain why.",
            marks: 5,
            modelAnswer:
              "(a) The geostationary satellite has the longer period. It orbits at a much greater radius, and since the period increases with radius (T ∝ r^{3/2}), the larger orbit gives a longer period (24 hours, compared with about 90 minutes for the LEO satellite).\n(b) A LEO satellite is more suitable for high-resolution Earth imaging (e.g. weather or surface monitoring) because it is much closer to the surface, giving more detailed images. (Accept: lower signal delay, or full surface coverage as it passes over different regions.)",
            markScheme: [
              "Geostationary satellite has the longer period [1]",
              "Justification: larger radius → longer period (T ∝ r^{3/2} or T increases with r) [1]",
              "Quote approximate periods (24 h vs ~90 min) or clear comparison [1]",
              "LEO use: closer to surface for imaging / lower delay / surface coverage [1]",
              "Explanation linking closeness to the chosen advantage [1]",
            ],
            commonError:
              "Thinking the LEO satellite has the longer period because it is 'going around a smaller circle slowly' — in fact a smaller radius gives a much shorter period.",
            guideRef: "Orbits and Gravitational Force",
            difficulty: "core",
            hints: [
              "How does period depend on orbital radius?",
              "Compare the two radii.",
              "A geostationary period is fixed at 24 hours.",
              "Why might being close to Earth be an advantage?",
            ],
            strategy: "Use T increasing with r for part (a); link altitude to function for part (b).",
          },
          {
            id: "phys-space-bq4-07",
            question:
              "A galaxy's light shows a fractional redshift of z = 0.08.\n(a) Using v ≈ zc with c = 3.0 × 10⁸ m/s, calculate the recession speed of the galaxy.\n(b) Express this speed as a percentage of the speed of light.\n(c) State what a larger value of z would indicate about a galaxy's distance.",
            marks: 5,
            modelAnswer:
              "(a) v ≈ zc = 0.08 × 3.0 × 10⁸ = 2.4 × 10⁷ m/s.\n(b) As a fraction of c: v/c = z = 0.08, which is 8% of the speed of light.\n(c) A larger z means a greater recession speed; since recession speed is proportional to distance, the galaxy would be farther away.",
            markScheme: [
              "Correct use of v = zc [1]",
              "v = 2.4 × 10⁷ m/s [1]",
              "v/c = 0.08 = 8% of c [1]",
              "Larger z → greater recession speed [1]",
              "Greater recession speed → greater distance [1]",
            ],
            commonError:
              "Forgetting that z is already the fraction v/c, so the percentage of c is simply z × 100%.",
            guideRef: "The Expanding Universe and the Big Bang",
            difficulty: "challenge",
            hints: [
              "Use v ≈ zc.",
              "Multiply 0.08 by 3.0 × 10⁸.",
              "z itself equals v/c, so the percentage is z × 100.",
              "Recall the link between recession speed and distance.",
            ],
            strategy: "Compute v from zc; note z = v/c gives the percentage directly.",
            solutions: [
              {
                label: "Recession speed from redshift",
                steps: [
                  "v = z × c = 0.08 × 3.0 × 10⁸",
                  "= 2.4 × 10⁷ m/s",
                  "v/c = 0.08 = 8% of c",
                ],
              },
            ],
          },
          {
            id: "phys-space-bq4-08",
            question:
              "A student writes: 'The Big Bang was an explosion of matter into empty space from a single point, and the Earth is at the centre because all galaxies move away from us.' Identify and correct the two errors in this statement.",
            marks: 4,
            modelAnswer:
              "Error 1: The Big Bang was not an explosion of matter into pre-existing empty space; it is better described as the expansion of space itself from an extremely hot, dense state. Matter did not fly out into space — space itself has been expanding ever since.\nError 2: The Earth is not at the centre. All galaxies appear to move away from any observer in a uniformly expanding Universe (like dots on an inflating balloon), so the fact that galaxies recede from us does not put us at the centre — there is no special centre.",
            markScheme: [
              "Identify error 1: not an explosion into empty space [1]",
              "Correction: expansion of space itself from a hot, dense state [1]",
              "Identify error 2: Earth is not at the centre [1]",
              "Correction: all observers see the same recession / no special centre (balloon analogy) [1]",
            ],
            commonError:
              "Accepting the 'explosion into space' picture, which wrongly implies an edge and a centre to the Universe.",
            guideRef: "The Expanding Universe and the Big Bang",
            difficulty: "challenge",
            hints: [
              "Was the Big Bang an explosion into existing space, or an expansion of space?",
              "Does every observer see galaxies receding, or only us?",
              "Use the inflating-balloon picture for the second point.",
            ],
            strategy: "Treat each clause as a claim; correct the physics behind each.",
          },
          {
            id: "phys-space-bq4-09",
            question:
              "(a) Outline, in order, the stages in the life cycle of the Sun from the present day until it becomes a white dwarf.\n(b) Estimate roughly how much longer the Sun will remain on the main sequence, given that its total main-sequence lifetime is about 10 billion years and it is currently about 4.6 billion years old.",
            marks: 5,
            modelAnswer:
              "(a) From the present (a main-sequence star), the Sun will: remain on the main sequence until its core hydrogen is used up; then expand and cool to become a red giant; then expel its outer layers as a planetary nebula; leaving behind a white dwarf, which slowly cools.\n(b) Remaining main-sequence time ≈ 10 − 4.6 = 5.4 billion years (roughly 5 billion years).",
            markScheme: [
              "Currently a main-sequence star [1]",
              "Becomes a red giant when core hydrogen is exhausted [1]",
              "Expels outer layers as a planetary nebula → white dwarf [1]",
              "Subtraction: 10 − 4.6 [1]",
              "≈ 5.4 (about 5) billion years remaining [1]",
            ],
            commonError:
              "Including a supernova or neutron-star stage for the Sun — these only occur for much more massive stars.",
            guideRef: "The Life Cycle of a Star",
            difficulty: "core",
            hints: [
              "The Sun is Sun-like (obviously), so use the Sun-like pathway.",
              "Order: main sequence → red giant → planetary nebula → white dwarf.",
              "Subtract the current age from the total main-sequence lifetime.",
            ],
            strategy: "List the Sun-like pathway, then do a simple subtraction for the time estimate.",
            solutions: [
              {
                label: "Remaining main-sequence time",
                steps: [
                  "Total main-sequence lifetime ≈ 10 billion years",
                  "Current age ≈ 4.6 billion years",
                  "Remaining ≈ 10 − 4.6 = 5.4 billion years",
                ],
              },
            ],
          },
          {
            id: "phys-space-bq4-10",
            question:
              "Two galaxies are observed. Galaxy P is 5.0 × 10⁸ light-years away and recedes at 1.1 × 10⁷ m/s. Galaxy Q is 1.5 × 10⁹ light-years away.\n(a) Assuming recession speed is proportional to distance, estimate the recession speed of galaxy Q.\n(b) Explain how this proportional relationship between speed and distance supports the idea of a uniformly expanding Universe.",
            marks: 5,
            modelAnswer:
              "(a) Galaxy Q is (1.5 × 10⁹) / (5.0 × 10⁸) = 3.0 times as far away as galaxy P. Since recession speed is proportional to distance, its recession speed ≈ 3.0 × 1.1 × 10⁷ = 3.3 × 10⁷ m/s.\n\n(b) If every galaxy recedes at a speed proportional to its distance, then the whole pattern is exactly what is produced when space expands uniformly: every separation grows by the same fractional amount in a given time, so more distant galaxies move apart faster. This proportionality (greater distance → greater speed) is the signature of a uniform expansion with no special centre.",
            markScheme: [
              "Distance ratio = (1.5 × 10⁹)/(5.0 × 10⁸) = 3.0 [1]",
              "Speed of Q = 3.0 × 1.1 × 10⁷ [1]",
              "≈ 3.3 × 10⁷ m/s [1]",
              "Uniform expansion → each separation grows by the same fraction [1]",
              "So speed proportional to distance / more distant galaxies recede faster [1]",
            ],
            commonError:
              "Adding the distances or speeds rather than using the proportional ratio.",
            guideRef: "The Expanding Universe and the Big Bang",
            difficulty: "challenge",
            hints: [
              "Find how many times farther Q is than P.",
              "Multiply P's speed by that ratio.",
              "Why does uniform expansion give speed proportional to distance?",
              "Think about every gap growing by the same fraction.",
            ],
            strategy: "Use the distance ratio to scale the speed, then justify with uniform expansion.",
            solutions: [
              {
                label: "Scaling by distance ratio",
                steps: [
                  "Distance ratio = 1.5 × 10⁹ / 5.0 × 10⁸ = 3.0",
                  "v_Q = 3.0 × v_P = 3.0 × 1.1 × 10⁷",
                  "= 3.3 × 10⁷ m/s",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
