import type { Topic } from "../types";

export const chemEnvironment: Topic = {
  id: "chem-environment",
  title: "Chemistry of the Environment",
  subject: "chemistry",
  icon: "🌫️",
  blurb: "Test for water purity, air composition, pollutants, greenhouse gases, and eutrophication.",
  intro: "From the quality of drinking water to the composition of the atmosphere and the gases driving climate change, environmental chemistry shapes the world we live in. This topic equips you to test for water, explain why clean dry air is mostly nitrogen, identify the sources and effects of key pollutants, and critically evaluate strategies to protect our environment — essential knowledge for Cambridge IGCSE 0620 Extended.",

  guide: [
    {
      heading: "Testing for Water and Its Purity",
      body: `Water is a compound, not an element, and two classical chemical tests confirm its presence.

**Test 1 — Anhydrous copper(II) sulfate:** The white powder turns blue when water is added. The water molecules are incorporated into the crystal lattice forming the blue hydrated salt: CuSO₄(s) + 5H₂O(l) → CuSO₄·5H₂O(s). The colour change is reversible — gentle heating drives the water back out.

**Test 2 — Cobalt(II) chloride paper:** Dry cobalt(II) chloride paper is blue. On contact with water it turns pink (hydrated form). It is used as a fast indicator, e.g. to check for moisture in a gas stream.

**Testing for purity:** A pure substance has sharp, reproducible physical properties. For water:
- Melting point: exactly 0 °C
- Boiling point: exactly 100 °C at standard atmospheric pressure

Any dissolved substance (salt, sugar, etc.) **depresses** the melting point and **elevates** the boiling point. So a sample boiling above 100 °C or melting below 0 °C is impure. This is a non-chemical purity test — no reagents needed, just accurate thermometry.`,
      diagrams: [
        {
          caption: "Colour changes in the two tests for water",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing colour changes in tests for water: anhydrous copper sulfate white to blue, cobalt chloride paper blue to pink">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- CuSO4 section -->
  <rect x="10" y="30" width="70" height="60" rx="6" fill="#f1f5f9" stroke="#38bdf8" stroke-width="2"/>
  <text x="45" y="68" text-anchor="middle" font-size="11" fill="#0f172a" font-weight="bold">White</text>
  <text x="45" y="82" text-anchor="middle" font-size="9" fill="#334155">CuSO4(anhydrous)</text>
  <text x="90" y="65" text-anchor="middle" font-size="18" fill="#fbbf24">+H2O</text>
  <polygon points="108,60 120,65 108,70" fill="#38bdf8"/>
  <rect x="124" y="30" width="70" height="60" rx="6" fill="#3b82f6" stroke="#38bdf8" stroke-width="2"/>
  <text x="159" y="68" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">Blue</text>
  <text x="159" y="82" text-anchor="middle" font-size="9" fill="#bfdbfe">CuSO4.5H2O</text>
  <text x="45" y="15" text-anchor="middle" font-size="10" fill="#b7bce0">Test 1: CuSO4 powder</text>
  <!-- CoCl2 section -->
  <rect x="10" y="120" width="70" height="60" rx="6" fill="#1e40af" stroke="#38bdf8" stroke-width="2"/>
  <text x="45" y="155" text-anchor="middle" font-size="11" fill="#bfdbfe" font-weight="bold">Blue</text>
  <text x="45" y="169" text-anchor="middle" font-size="9" fill="#93c5fd">CoCl2 paper (dry)</text>
  <text x="90" y="155" text-anchor="middle" font-size="18" fill="#fbbf24">+H2O</text>
  <polygon points="108,150 120,155 108,160" fill="#38bdf8"/>
  <rect x="124" y="120" width="70" height="60" rx="6" fill="#ec4899" stroke="#fb7185" stroke-width="2"/>
  <text x="159" y="155" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">Pink</text>
  <text x="159" y="169" text-anchor="middle" font-size="9" fill="#fbcfe8">CoCl2 paper (wet)</text>
  <text x="45" y="110" text-anchor="middle" font-size="10" fill="#b7bce0">Test 2: CoCl2 paper</text>
  <!-- purity note -->
  <rect x="210" y="20" width="100" height="160" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="260" y="38" text-anchor="middle" font-size="10" fill="#a78bfa" font-weight="bold">PURITY TEST</text>
  <text x="260" y="56" text-anchor="middle" font-size="9" fill="#eef0ff">Pure water:</text>
  <text x="260" y="72" text-anchor="middle" font-size="9" fill="#34d399">b.p. = 100 C</text>
  <text x="260" y="88" text-anchor="middle" font-size="9" fill="#34d399">m.p. = 0 C</text>
  <text x="260" y="108" text-anchor="middle" font-size="9" fill="#fb7185">Impure water:</text>
  <text x="260" y="124" text-anchor="middle" font-size="9" fill="#fb7185">b.p. above 100 C</text>
  <text x="260" y="140" text-anchor="middle" font-size="9" fill="#fb7185">m.p. below 0 C</text>
  <text x="260" y="162" text-anchor="middle" font-size="8" fill="#b7bce0">(dissolved solutes</text>
  <text x="260" y="174" text-anchor="middle" font-size="8" fill="#b7bce0">alter both values)</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Anhydrous CuSO₄ (white) turns blue with water; the change is reversible on heating.",
        "Cobalt(II) chloride paper turns from blue (dry) to pink (wet).",
        "Pure water has a melting point of exactly 0 °C and boiling point of exactly 100 °C at 1 atm.",
        "Dissolved impurities lower the melting point and raise the boiling point.",
        "Melting/boiling point tests are physical purity tests requiring no chemical reagents.",
      ],
      discovery: {
        problem: "A student tests a water sample with cobalt(II) chloride paper and anhydrous CuSO₄. Both tests are positive. Does this prove the water is pure? What further test is needed, and what result would confirm purity?",
        idea: "No — the chemical tests only confirm water is PRESENT. They say nothing about dissolved impurities. To test purity, measure the boiling point: exactly 100 °C at standard pressure confirms a pure sample. Any elevation indicates dissolved solutes.",
      },
      whyItWorks: "The CuSO₄ test works because the water molecules bond as ligands to Cu²⁺ ions, changing the coordination geometry and the wavelengths of visible light absorbed, hence the colour change from white to blue. Boiling-point elevation is a colligative property: dissolved particles reduce the vapour pressure of water, so a higher temperature is needed to reach atmospheric pressure.",
    },

    {
      heading: "Treatment of the Domestic Water Supply",
      body: `Rainwater collected in reservoirs is not safe to drink directly — it may contain suspended solids, bacteria, and dissolved chemicals. Water treatment plants apply two key stages before supply:

**1. Filtration:** Water is passed through beds of fine sand and gravel. Particles and microorganisms too large to pass are removed. This does **not** kill bacteria.

**2. Chlorination:** A carefully controlled amount of chlorine (or a chlorine-releasing compound such as chloramine) is dissolved in the water. Chlorine kills harmful bacteria and other pathogens by oxidising key biochemicals. The dose must be sufficient to be effective but low enough to avoid taste problems and the formation of harmful by-products.

Note: distillation can produce very pure water but is too energy-intensive for large-scale domestic supply. Filtration + chlorination is the practical solution.`,
      keyPoints: [
        "Filtration through sand/gravel beds removes suspended solids and some microorganisms.",
        "Chlorination kills harmful bacteria; chlorine is a powerful oxidising agent.",
        "Distillation produces very pure water but is not used at large scale due to high energy cost.",
        "Both steps together make water safe (potable) for drinking.",
        "Chlorine levels are carefully controlled to be effective without creating harmful by-products.",
      ],
      strategies: ["Compare methods by energy cost and scale", "Identify the purpose of each stage"],
    },

    {
      heading: "Composition of Clean Dry Air",
      body: `The atmosphere is a mixture of gases. Clean dry air (with water vapour removed) has a remarkably consistent composition:

| Gas | Approximate % by volume |
|---|---|
| Nitrogen (N₂) | ~78% |
| Oxygen (O₂) | ~21% |
| Argon and other noble gases | ~1% |
| Carbon dioxide (CO₂) | ~0.04% |

Key points about these components:
- **Nitrogen** is the dominant gas; relatively unreactive at room temperature.
- **Oxygen** supports combustion and respiration.
- **Argon** is the most abundant noble gas; completely inert.
- **Carbon dioxide** is present in a small but crucial amount — it is a greenhouse gas and the substrate for photosynthesis.

Note the distinction between 'clean dry air' and actual atmospheric air, which also contains variable amounts of water vapour (1–4%), and in polluted areas contains additional trace gases.`,
      diagrams: [
        {
          caption: "Pie chart of clean dry air composition by volume",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pie chart showing composition of clean dry air: nitrogen 78%, oxygen 21%, argon 1%, carbon dioxide 0.04%">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Pie chart centred at 110,100 radius 80 -->
  <!-- N2: 78% = 280.8 degrees. Start at top (270 deg), sweep 280.8 deg clockwise -->
  <!-- Path for N2 (78%): from 270 deg to 190.8 deg (270+280.8=550.8 mod360=190.8) -->
  <!-- Using large arc flag: 280.8>180 so large-arc=1 -->
  <!-- Start point (top): 110+80*cos(270)=110, 100+80*sin(270)=20 -->
  <!-- End point at 190.8 deg from positive x: cos(190.8)= -0.9823, sin(190.8)= -0.1874 wait, need to be careful -->
  <!-- Let me use a simpler approach: compute in SVG units -->
  <!-- Angles measured from 12 o'clock clockwise (matching percentage) -->
  <!-- N2 78%: 0 to 280.8 deg from north -->
  <!-- north = (110, 20); end at 280.8 deg clockwise from north -->
  <!-- 280.8 deg from north = 280.8-90=190.8 deg in standard math angles -->
  <!-- end x = 110 + 80*cos(190.8*pi/180) = 110 + 80*(-0.982) = 110-78.6 = 31.4 -->
  <!-- end y = 100 + 80*sin(190.8*pi/180) = 100 + 80*(-0.187) = 100-15.0 = 85.0 -->
  <path d="M110,100 L110,20 A80,80 0 1,1 31.5,85.1 Z" fill="#38bdf8" stroke="#0f172a" stroke-width="1.5"/>
  <!-- O2 21%: 280.8 to 356.4 deg from north = 75.6 deg sweep -->
  <!-- start: 280.8 deg from north = (31.5, 85.1) -->
  <!-- end: 356.4 deg from north = 266.4 deg math angle -->
  <!-- end x = 110+80*cos(266.4*pi/180) = 110+80*(-0.0628)= 110-5.0=105.0 -->
  <!-- end y = 100+80*sin(266.4*pi/180) = 100+80*(-0.998)=100-79.9=20.1 -->
  <path d="M110,100 L31.5,85.1 A80,80 0 0,1 105.0,20.1 Z" fill="#34d399" stroke="#0f172a" stroke-width="1.5"/>
  <!-- Ar 1%: 356.4 to 360 deg (3.6 deg sweep) -->
  <!-- start: 105.0,20.1 end: 110,20 -->
  <path d="M110,100 L105.0,20.1 A80,80 0 0,1 110,20 Z" fill="#a78bfa" stroke="#0f172a" stroke-width="1.5"/>
  <!-- CO2 0.04% - too small to show as slice; indicate with label arrow only -->
  <!-- Legend -->
  <rect x="205" y="30" width="14" height="14" fill="#38bdf8" rx="2"/>
  <text x="224" y="42" font-size="11" fill="#eef0ff">N2 ~78%</text>
  <rect x="205" y="52" width="14" height="14" fill="#34d399" rx="2"/>
  <text x="224" y="64" font-size="11" fill="#eef0ff">O2 ~21%</text>
  <rect x="205" y="74" width="14" height="14" fill="#a78bfa" rx="2"/>
  <text x="224" y="86" font-size="11" fill="#eef0ff">Ar ~1%</text>
  <rect x="205" y="96" width="14" height="14" fill="#fbbf24" rx="2"/>
  <text x="224" y="108" font-size="11" fill="#eef0ff">CO2 0.04%</text>
  <!-- CO2 arrow pointing to edge of pie -->
  <line x1="205" y1="103" x2="155" y2="28" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,2"/>
  <circle cx="155" cy="28" r="3" fill="#fbbf24"/>
  <text x="110" y="185" text-anchor="middle" font-size="9" fill="#b7bce0">CO2 slice too small to show to scale</text>
  <text x="110" y="107" text-anchor="middle" font-size="9" fill="#0f172a" font-weight="bold">Air</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Clean dry air is approximately 78% N₂, 21% O₂, 1% Ar, and 0.04% CO₂.",
        "Nitrogen is the most abundant gas and is relatively unreactive at room temperature.",
        "Argon is the most abundant noble gas; it is completely inert.",
        "Carbon dioxide is a trace gas but drives the greenhouse effect and photosynthesis.",
        "Real air also contains variable amounts of water vapour (not present in 'clean dry' air).",
      ],
      thinkDeeper: "Why is nitrogen so unreactive? The N≡N triple bond has a bond energy of ~945 kJ/mol — one of the strongest covalent bonds. Breaking it to allow chemical reactions requires extreme conditions (e.g. the Haber process at 450 °C, 200 atm). Yet nitrogen-fixing bacteria manage this at room temperature using the enzyme nitrogenase — a remarkable feat of biochemistry.",
    },

    {
      heading: "Air Pollutants: Sources and Adverse Effects",
      body: `Human activities release gases that alter the natural composition of air, causing harm to living things and the environment. The four main pollutants in IGCSE are:

**Carbon monoxide (CO)**
- *Source:* Incomplete combustion of carbon-containing fuels (e.g. in car engines with insufficient oxygen, faulty gas boilers).
- *Effect:* Highly toxic. CO binds irreversibly to haemoglobin forming carboxyhaemoglobin, preventing oxygen transport. Even low concentrations can be fatal.

**Sulfur dioxide (SO₂)**
- *Source:* Combustion of fossil fuels (especially coal and oil) that contain sulfur impurities. S + O₂ → SO₂.
- *Effect:* Causes acid rain (see below); irritates the respiratory system and damages lungs.

**Oxides of nitrogen (NOₓ — mainly NO and NO₂)**
- *Source 1:* Car engines — high temperatures cause atmospheric N₂ and O₂ to react: N₂ + O₂ → 2NO, which further oxidises to NO₂.
- *Source 2:* Lightning strikes provide the activation energy for the same reaction naturally.
- *Effect:* Causes acid rain; contributes to photochemical smog (reacts with sunlight and unburnt hydrocarbons to form ground-level ozone and peroxyacyl nitrates — irritants harmful to lungs and crops).

**Particulates**
- *Source:* Incomplete combustion (soot/carbon particles from diesel engines, burning wood), volcanic eruptions, dust.
- *Effect:* Inhaled fine particles (PM2.5) lodge deep in lungs, causing respiratory disease and heart disease; block sunlight, reducing visibility; carry toxic compounds.

**Catalytic converters** in car exhausts use platinum and rhodium catalysts to convert CO and NOₓ into harmless CO₂ and N₂:
2CO + 2NO → 2CO₂ + N₂`,
      diagrams: [
        {
          caption: "Pollutant sources and their primary adverse effects",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Table diagram linking pollutants to their sources and effects: CO from incomplete combustion causes toxicity, SO2 from fossil fuels causes acid rain, NOx from car engines causes acid rain and smog, particulates from combustion cause respiratory disease">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Header -->
  <rect x="5" y="5" width="310" height="22" rx="4" fill="#1e3a5f"/>
  <text x="70" y="20" font-size="10" fill="#38bdf8" font-weight="bold">Pollutant</text>
  <text x="155" y="20" font-size="10" fill="#38bdf8" font-weight="bold">Main Source</text>
  <text x="240" y="20" font-size="10" fill="#38bdf8" font-weight="bold">Key Effect</text>
  <!-- CO row -->
  <rect x="5" y="30" width="310" height="34" rx="2" fill="#0f2a3d"/>
  <text x="20" y="47" font-size="10" fill="#fbbf24" font-weight="bold">CO</text>
  <text x="20" y="59" font-size="8" fill="#b7bce0">carbon monoxide</text>
  <text x="120" y="48" font-size="9" fill="#eef0ff">Incomplete</text>
  <text x="120" y="60" font-size="9" fill="#eef0ff">combustion</text>
  <text x="230" y="48" font-size="9" fill="#fb7185">Toxic (blocks O2</text>
  <text x="230" y="60" font-size="9" fill="#fb7185">transport)</text>
  <!-- SO2 row -->
  <rect x="5" y="67" width="310" height="34" rx="2" fill="#0d1f2d"/>
  <text x="20" y="84" font-size="10" fill="#fbbf24" font-weight="bold">SO2</text>
  <text x="20" y="96" font-size="8" fill="#b7bce0">sulfur dioxide</text>
  <text x="120" y="84" font-size="9" fill="#eef0ff">Fossil fuel</text>
  <text x="120" y="96" font-size="9" fill="#eef0ff">combustion</text>
  <text x="230" y="84" font-size="9" fill="#fb7185">Acid rain;</text>
  <text x="230" y="96" font-size="9" fill="#fb7185">lung damage</text>
  <!-- NOx row -->
  <rect x="5" y="104" width="310" height="34" rx="2" fill="#0f2a3d"/>
  <text x="20" y="121" font-size="10" fill="#fbbf24" font-weight="bold">NOx</text>
  <text x="20" y="133" font-size="8" fill="#b7bce0">oxides of nitrogen</text>
  <text x="120" y="121" font-size="9" fill="#eef0ff">Car engines /</text>
  <text x="120" y="133" font-size="9" fill="#eef0ff">lightning</text>
  <text x="230" y="121" font-size="9" fill="#fb7185">Acid rain +</text>
  <text x="230" y="133" font-size="9" fill="#fb7185">photochem. smog</text>
  <!-- Particulates row -->
  <rect x="5" y="141" width="310" height="34" rx="2" fill="#0d1f2d"/>
  <text x="20" y="158" font-size="10" fill="#fbbf24" font-weight="bold">PM</text>
  <text x="20" y="170" font-size="8" fill="#b7bce0">particulates</text>
  <text x="120" y="158" font-size="9" fill="#eef0ff">Incomplete</text>
  <text x="120" y="170" font-size="9" fill="#eef0ff">combustion / dust</text>
  <text x="230" y="158" font-size="9" fill="#fb7185">Lung/heart</text>
  <text x="230" y="170" font-size="9" fill="#fb7185">disease</text>
  <!-- divider lines -->
  <line x1="110" y1="5" x2="110" y2="195" stroke="#334155" stroke-width="1"/>
  <line x1="220" y1="5" x2="220" y2="195" stroke="#334155" stroke-width="1"/>
  <!-- catalytic converter note -->
  <text x="160" y="195" text-anchor="middle" font-size="8" fill="#34d399">Catalytic converter: 2CO + 2NO -> 2CO2 + N2</text>
</svg>`,
        },
      ],
      keyPoints: [
        "CO forms from incomplete combustion; it is toxic because it binds to haemoglobin.",
        "SO₂ comes from sulfur impurities in fossil fuels and causes acid rain and respiratory damage.",
        "NOₓ forms in car engines (high T causes N₂ + O₂ reaction); causes acid rain and photochemical smog.",
        "Particulates (soot, dust) cause respiratory and cardiovascular disease.",
        "Catalytic converters convert CO and NOₓ to CO₂ and N₂ using Pt/Rh catalysts.",
      ],
      discovery: {
        problem: "A city bans all petrol and diesel vehicles but still burns coal in power stations. Which air pollutants would decrease significantly, and which would remain a problem? Predict the effect on acid rain levels.",
        idea: "NOₓ and CO from car engines would drop markedly (fewer high-temperature combustion events). Particulates would fall too. But SO₂ would remain high because coal combustion releases sulfur. Acid rain from SO₂ + H₂O + O₂ → H₂SO₄ would persist, so total acid rain impact might be only partially reduced.",
      },
      whyItWorks: "In car engines, peak combustion temperatures exceed 2000 °C. At these temperatures the activation energy for N₂ + O₂ → 2NO is overcome. At normal atmospheric temperatures this reaction is vanishingly slow — N₂ is kinetically inert even though the reaction is slightly exothermic. High temperature is the key, not thermodynamic feasibility.",
      strategies: ["Separate source from effect", "Match pollutant to combustion type"],
      thinkDeeper: "Catalytic converters require the engine to reach operating temperature (~300 °C) before they work. During cold starts, the converter is inactive and pollutant emissions spike. Hybrid cars that use electric power at low speeds avoid this cold-start problem — another environmental argument for electrification.",
    },

    {
      heading: "Acid Rain: Formation and Effects",
      body: `Acid rain is rain (or any precipitation) with a pH significantly below 5.6 (the natural slight acidity of rain from dissolved CO₂).

**Formation — sulfuric acid pathway:**
1. S + O₂ → SO₂ (combustion of sulfur in fossil fuels)
2. 2SO₂ + O₂ → 2SO₃ (oxidation in the atmosphere)
3. SO₃ + H₂O → H₂SO₄ (dissolved in rain → sulfuric acid)

**Formation — nitric acid pathway:**
1. N₂ + O₂ → 2NO (in car engines or lightning)
2. 2NO + O₂ → 2NO₂
3. 4NO₂ + O₂ + 2H₂O → 4HNO₃ (nitric acid in rain)

**Effects of acid rain:**
- **Aquatic ecosystems:** lowers lake/river pH, killing fish and invertebrates (aluminium ions leached from soils at low pH are particularly toxic to fish).
- **Forests:** acid soil leaches essential minerals (Mg²⁺, Ca²⁺), weakening trees; SO₂ also damages leaf surfaces directly.
- **Buildings and statues:** limestone and marble (CaCO₃) are dissolved — CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂. Metals corrode faster.
- **Human health:** SO₂ and NO₂ irritate airways, worsen asthma.

**Reducing acid rain:**
- Use low-sulfur fuels; fit flue-gas desulfurisation (FGD) to power stations.
- Use catalytic converters to reduce NOₓ from vehicles.
- Add lime/limestone to affected lakes (neutralisation).`,
      keyPoints: [
        "Acid rain has pH below 5.6; it forms when SO₂ or NOₓ dissolve and oxidise in rain.",
        "SO₂ → SO₃ → H₂SO₄; NOₓ → HNO₃ — both yield strong acids in precipitation.",
        "Acid rain kills aquatic life, damages forests, corrodes limestone buildings, and harms health.",
        "CaCO₃ (limestone) reacts with H₂SO₄, dissolving stone structures.",
        "Remedies include FGD at power stations, catalytic converters, and liming affected lakes.",
      ],
    },

    {
      heading: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
      body: `**The natural greenhouse effect** is essential for life: without it, Earth's average surface temperature would be about -18 °C instead of the current +15 °C.

**How it works:**
1. Short-wavelength solar radiation (visible/UV) passes through the atmosphere and warms Earth's surface.
2. Earth radiates energy back as longer-wavelength infrared (IR) radiation.
3. Greenhouse gases (GHGs) absorb this outgoing IR and re-radiate it in all directions — including back to Earth's surface.
4. This trapping of energy raises surface temperatures above what they would otherwise be.

**Greenhouse gases (IGCSE scope):**
- **Carbon dioxide (CO₂):** released by combustion of fossil fuels, deforestation (less CO₂ absorbed), cement production.
- **Methane (CH₄):** released by decomposition of organic matter in landfill and wetlands, cattle digestion (enteric fermentation), rice paddies, leaks from natural gas infrastructure.

**Enhanced greenhouse effect and climate change:**
Increasing concentrations of GHGs since industrialisation trap more IR, raising average global temperatures. Predicted effects: melting ice caps, rising sea levels, more extreme weather events, altered precipitation patterns, ecosystem disruption.

**Strategies to reduce emissions:**
- Shift to renewable energy (solar, wind, hydroelectric) — no combustion, no CO₂.
- Improve energy efficiency (better insulation, LED lighting, efficient engines).
- Carbon capture and storage (CCS) — capturing CO₂ from power stations before it enters the atmosphere.
- Reforestation — trees act as carbon sinks (absorb CO₂ by photosynthesis).
- Reduce methane from agriculture (dietary changes for livestock, capture from landfill).
- International agreements (e.g. Paris Agreement) to limit emissions.`,
      diagrams: [
        {
          caption: "The greenhouse effect: solar radiation in, infrared trapped by greenhouse gases",
          svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of the greenhouse effect: sunlight enters atmosphere, Earth surface emits infrared, greenhouse gas molecules absorb and re-radiate infrared back to surface">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Space background -->
  <rect x="0" y="0" width="320" height="90" fill="#0a0f1e"/>
  <!-- Stars -->
  <circle cx="20" cy="15" r="1" fill="#eef0ff"/>
  <circle cx="80" cy="8" r="1" fill="#eef0ff"/>
  <circle cx="150" cy="20" r="1" fill="#eef0ff"/>
  <circle cx="230" cy="10" r="1" fill="#eef0ff"/>
  <circle cx="300" cy="18" r="1" fill="#eef0ff"/>
  <!-- Atmosphere layer -->
  <rect x="0" y="90" width="320" height="40" rx="0" fill="#1e3a5f" opacity="0.7"/>
  <text x="160" y="107" text-anchor="middle" font-size="9" fill="#93c5fd">A T M O S P H E R E</text>
  <!-- GHG molecules -->
  <ellipse cx="80" cy="110" rx="12" ry="8" fill="#34d399" opacity="0.7"/>
  <text x="80" y="114" text-anchor="middle" font-size="7" fill="#0f172a" font-weight="bold">CO2</text>
  <ellipse cx="160" cy="105" rx="11" ry="7" fill="#34d399" opacity="0.7"/>
  <text x="160" y="109" text-anchor="middle" font-size="7" fill="#0f172a" font-weight="bold">CH4</text>
  <ellipse cx="240" cy="112" rx="12" ry="8" fill="#34d399" opacity="0.7"/>
  <text x="240" y="116" text-anchor="middle" font-size="7" fill="#0f172a" font-weight="bold">CO2</text>
  <!-- Earth surface -->
  <rect x="0" y="130" width="320" height="70" fill="#15803d"/>
  <text x="160" y="170" text-anchor="middle" font-size="10" fill="#bbf7d0">Earth's Surface</text>
  <!-- Sun -->
  <circle cx="290" cy="30" r="20" fill="#fbbf24"/>
  <text x="290" y="35" text-anchor="middle" font-size="8" fill="#0f172a" font-weight="bold">SUN</text>
  <!-- Solar radiation arrows (yellow, short wavelength) -->
  <line x1="265" y1="45" x2="200" y2="120" stroke="#fbbf24" stroke-width="2"/>
  <polygon points="200,120 196,108 208,112" fill="#fbbf24"/>
  <text x="215" y="85" font-size="7" fill="#fbbf24">Visible/UV</text>
  <!-- IR from surface arrows (red, long wavelength) going up -->
  <line x1="120" y1="130" x2="90" y2="90" stroke="#fb7185" stroke-width="2" stroke-dasharray="4,2"/>
  <polygon points="90,90 88,102 96,98" fill="#fb7185"/>
  <text x="55" y="85" font-size="7" fill="#fb7185">IR out</text>
  <!-- IR re-radiated back down -->
  <line x1="88" y1="118" x2="100" y2="130" stroke="#fb7185" stroke-width="2" stroke-dasharray="4,2"/>
  <polygon points="100,130 96,118 104,122" fill="#fb7185"/>
  <text x="15" y="130" font-size="7" fill="#fb7185">IR back</text>
  <text x="15" y="140" font-size="7" fill="#fb7185">to surface</text>
  <!-- Labels -->
  <text x="160" y="195" text-anchor="middle" font-size="8" fill="#b7bce0">GHGs absorb outgoing IR and re-radiate — warming the surface</text>
</svg>`,
        },
      ],
      keyPoints: [
        "The greenhouse effect traps outgoing infrared radiation, keeping Earth's surface warm.",
        "CO₂ (from combustion/deforestation) and CH₄ (from landfill/cattle) are the key GHGs at IGCSE.",
        "Enhanced greenhouse effect is increasing global average temperatures (climate change).",
        "Effects include melting ice, rising seas, extreme weather, and ecosystem disruption.",
        "Strategies include renewables, energy efficiency, CCS, reforestation, and reduced agricultural methane.",
      ],
      discovery: {
        problem: "Venus has an atmosphere of ~96% CO₂ and a surface temperature of ~465 °C — hotter than Mercury despite being farther from the Sun. What does this tell you about the greenhouse effect? Use this to predict what would happen to Earth if CO₂ levels tripled.",
        idea: "Venus is a real-world extreme greenhouse — its dense CO₂ atmosphere traps nearly all outgoing IR. This confirms that CO₂ concentration is the key variable driving surface temperature, independent of distance from the Sun. Tripling Earth's CO₂ would substantially increase IR trapping, raising global temperatures — the degree depends on feedback loops (water vapour, ice-albedo), but the direction is certain.",
      },
      whyItWorks: "Greenhouse gases are molecules with bonds that vibrate at frequencies matching infrared wavelengths (e.g. O=C=O in CO₂, C-H in CH₄). When an IR photon is absorbed, the molecule vibrates and then re-emits radiation in a random direction — including back toward Earth. Monatomic gases like Ar and diatomic gases like N₂ and O₂ lack these IR-active vibrational modes and cannot absorb IR, so they are NOT greenhouse gases.",
      strategies: ["Cause-and-effect chain", "Compare to extreme case (Venus analogy)"],
    },

    {
      heading: "Fertilisers and Eutrophication",
      body: `Plants require nitrogen, phosphorus, and potassium (NPK) for healthy growth. Nitrogen is the nutrient most often deficient in agricultural soils, which is why nitrogen-based fertilisers are used extensively.

**Common nitrogen fertilisers:** ammonium nitrate (NH₄NO₃), ammonium sulfate ((NH₄)₂SO₄), urea (CO(NH₂)₂).

**Eutrophication — the problem of excess fertiliser:**
When fertilisers are applied in excess or washed from fields by rain (leaching/run-off), they enter rivers and lakes. The sequence of events:

1. **Excess nitrate/phosphate** enters the waterway.
2. **Algae and water plants** grow explosively (algal bloom), covering the water surface.
3. **Algae block sunlight**, preventing photosynthesis in submerged plants, which die.
4. **Aerobic bacteria** decompose the dead plant matter, consuming dissolved oxygen.
5. **Oxygen levels crash** (deoxygenation). Fish and other aquatic animals die from lack of oxygen.
6. Further anaerobic decomposition produces methane and hydrogen sulfide — the water becomes foul-smelling and biologically dead.

**Prevention:**
- Apply fertilisers at the right time and in the correct amounts.
- Use slow-release fertiliser formulations.
- Create buffer strips of vegetation between fields and waterways to absorb run-off.`,
      keyPoints: [
        "NPK fertilisers provide nitrogen, phosphorus, and potassium; nitrogen is the nutrient most often lacking in soils.",
        "Leaching of excess nitrates/phosphates into waterways causes eutrophication.",
        "Algal blooms block sunlight, killing submerged plants.",
        "Aerobic bacteria decompose dead matter, consuming dissolved oxygen and suffocating aquatic life.",
        "Prevention includes careful fertiliser management and buffer vegetation strips.",
      ],
      whyItWorks: "Nitrogen is the limiting nutrient in most freshwater ecosystems — a small addition causes large growth responses in algae. Phosphorus is often limiting in lakes. Once the bloom dies, it represents an enormous organic input to the decomposer community. Decomposition is an aerobic process (aerobic respiration: organic matter + O₂ → CO₂ + H₂O), so oxygen demand spikes and dissolved O₂ rapidly approaches zero.",
      strategies: ["Sequence cause-and-effect chain", "Identify the limiting step"],
    },
  ],

  learn: {
    keyFacts: [
      "Anhydrous copper(II) sulfate (white) turns blue in the presence of water.",
      "Cobalt(II) chloride paper turns from blue (dry) to pink (wet) in the presence of water.",
      "Pure water has a melting point of 0 °C and a boiling point of 100 °C at standard pressure.",
      "Clean dry air is approximately 78% N₂, 21% O₂, 1% Ar, and 0.04% CO₂ by volume.",
      "Carbon monoxide (CO) from incomplete combustion binds to haemoglobin, causing toxicity.",
      "Sulfur dioxide (SO₂) from fossil fuel combustion causes acid rain and respiratory damage.",
      "Oxides of nitrogen (NOₓ) form in car engines at high temperatures and cause acid rain and photochemical smog.",
      "Catalytic converters convert CO and NOₓ to CO₂ and N₂: 2CO + 2NO → 2CO₂ + N₂.",
      "CO₂ and CH₄ are the main greenhouse gases covered at IGCSE; they absorb outgoing infrared radiation.",
      "Eutrophication results from excess nitrogen/phosphorus in waterways, leading to algal blooms, oxygen depletion, and death of aquatic life.",
      "Acid rain forms when SO₂ or NOₓ dissolve in rainwater to form H₂SO₄ or HNO₃.",
      "Dissolved impurities raise the boiling point and lower the melting point of water.",
    ],
    flashcards: [
      { front: "What colour change does anhydrous CuSO₄ undergo in the presence of water?", back: "White → blue (forms blue hydrated CuSO₄·5H₂O)" },
      { front: "What colour change does cobalt(II) chloride paper show in the presence of water?", back: "Blue → pink" },
      { front: "How do you test whether a water sample is pure?", back: "Measure the melting point (should be exactly 0 °C) and/or boiling point (should be exactly 100 °C at 1 atm). Any deviation indicates impurities." },
      { front: "What are the approximate percentages of gases in clean dry air?", back: "N₂ ~78%, O₂ ~21%, Ar ~1%, CO₂ ~0.04%" },
      { front: "Why is carbon monoxide toxic?", back: "It binds irreversibly to haemoglobin forming carboxyhaemoglobin, blocking oxygen transport in the blood." },
      { front: "What are the two main sources of sulfur dioxide in the atmosphere?", back: "Combustion of sulfur-containing fossil fuels (coal, oil) in power stations and industrial processes." },
      { front: "How does acid rain form from NOₓ?", back: "N₂ + O₂ → 2NO (in engines/lightning) → 2NO₂ → 4HNO₃ dissolved in rain; or simplified: NOₓ dissolves and oxidises to nitric acid in the atmosphere." },
      { front: "What does a catalytic converter do?", back: "It converts toxic CO and NOₓ to harmless CO₂ and N₂ using platinum/rhodium catalysts: 2CO + 2NO → 2CO₂ + N₂." },
      { front: "Name the two greenhouse gases you must know for IGCSE.", back: "Carbon dioxide (CO₂) and methane (CH₄)." },
      { front: "Why is N₂ not a greenhouse gas but CO₂ is?", back: "N₂ is diatomic and lacks IR-active vibrational modes; CO₂ has bending/stretching vibrations that absorb infrared radiation." },
      { front: "Describe the sequence of events in eutrophication.", back: "Excess nitrates/phosphates → algal bloom → blocked sunlight → submerged plants die → aerobic decomposition by bacteria → oxygen depletion → fish/invertebrates die." },
      { front: "What effect does acid rain have on limestone buildings?", back: "CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂; the limestone dissolves and the structure is damaged." },
    ],
    keyTerms: [
      { term: "Anhydrous", definition: "Without water; describes a substance from which water has been removed (e.g. anhydrous CuSO₄ is white)." },
      { term: "Potable water", definition: "Water that is safe for human consumption; produced by filtration and chlorination of reservoir water." },
      { term: "Chlorination", definition: "Addition of chlorine to water supplies to kill harmful bacteria and pathogens." },
      { term: "Acid rain", definition: "Precipitation with pH below 5.6 caused by dissolution of SO₂ or NOₓ in rain, forming sulfuric or nitric acid." },
      { term: "Greenhouse gas", definition: "A gas that absorbs and re-radiates infrared radiation, contributing to warming of Earth's surface; CO₂ and CH₄ are key examples." },
      { term: "Greenhouse effect", definition: "The trapping of outgoing infrared radiation by greenhouse gases in the atmosphere, raising surface temperature." },
      { term: "Photochemical smog", definition: "A mixture of pollutants (ground-level ozone, peroxyacyl nitrates) formed when NOₓ and unburnt hydrocarbons react in sunlight." },
      { term: "Catalytic converter", definition: "A device in vehicle exhaust systems containing Pt/Rh catalysts that converts CO and NOₓ into CO₂ and N₂." },
      { term: "Eutrophication", definition: "The process by which excess nutrients (nitrates/phosphates) cause rapid algal growth in water, leading to oxygen depletion and death of aquatic organisms." },
      { term: "Particulates (PM2.5)", definition: "Fine solid or liquid particles suspended in air from combustion; particles smaller than 2.5 µm penetrate deep into the lungs and cause respiratory and cardiovascular disease." },
      { term: "Leaching", definition: "The process by which water dissolves and carries substances (e.g. nitrate ions from fertilisers) through soil into groundwater or waterways." },
      { term: "Flue-gas desulfurisation (FGD)", definition: "A technology used at power stations to remove SO₂ from exhaust gases (e.g. by reacting with calcium oxide) before they are released, reducing acid rain." },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "chem-environment-mcq-q01",
        question: "Anhydrous copper(II) sulfate is used as a test for water. What is the colour change observed when water is added?",
        options: ["Blue to white", "White to blue", "Blue to pink", "White to pink"],
        answerIndex: 1,
        explanation: "Anhydrous CuSO₄ is white. Water molecules are incorporated into the crystal lattice forming the hydrated salt CuSO₄·5H₂O, which is blue. 'Blue to white' describes the reverse (dehydration); 'blue to pink' describes cobalt(II) chloride paper.",
        guideRef: "Testing for Water and Its Purity",
        difficulty: "warmup",
      },
      {
        id: "chem-environment-mcq-q02",
        question: "A water sample boils at 101.3 °C at standard pressure. What can be concluded?",
        options: [
          "The sample is pure water",
          "The sample contains dissolved impurities",
          "The sample is below sea level",
          "The sample contains suspended particles only",
        ],
        answerIndex: 1,
        explanation: "Pure water boils at exactly 100 °C at standard pressure. Boiling point elevation is caused by dissolved solutes (a colligative property). Suspended particles do not raise the boiling point. The location relative to sea level would lower, not raise, the boiling point.",
        guideRef: "Testing for Water and Its Purity",
        difficulty: "core",
        hints: [
          "Recall the boiling point of pure water at standard pressure.",
          "Think about whether dissolved or suspended particles affect boiling point.",
        ],
      },
      {
        id: "chem-environment-mcq-q03",
        question: "Which gas makes up approximately 78% of clean dry air?",
        options: ["Oxygen", "Argon", "Nitrogen", "Carbon dioxide"],
        answerIndex: 2,
        explanation: "Nitrogen (N₂) is the dominant gas at ~78% by volume. Oxygen is ~21%, argon ~1%, and CO₂ ~0.04%.",
        guideRef: "Composition of Clean Dry Air",
        difficulty: "warmup",
      },
      {
        id: "chem-environment-mcq-q04",
        question: "Carbon monoxide is a toxic pollutant because it:",
        options: [
          "Reacts with rainwater to form carbonic acid",
          "Binds to haemoglobin, preventing oxygen transport",
          "Causes photochemical smog with sunlight",
          "Dissolves ozone in the upper atmosphere",
        ],
        answerIndex: 1,
        explanation: "CO has a very high affinity for haemoglobin, forming carboxyhaemoglobin irreversibly, so the red blood cells can no longer carry oxygen. CO₂ (not CO) forms carbonic acid in rain; NOₓ + hydrocarbons cause smog; CO is not involved in ozone depletion at IGCSE.",
        guideRef: "Air Pollutants: Sources and Adverse Effects",
        difficulty: "core",
        hints: [
          "CO is produced by incomplete combustion — where does oxygen transport happen in the body?",
          "Think about what carries oxygen in blood.",
        ],
      },
      {
        id: "chem-environment-mcq-q05",
        question: "Which of the following correctly describes the reaction occurring in a catalytic converter?",
        options: [
          "N₂ + O₂ → 2NO",
          "2CO + 2NO → 2CO₂ + N₂",
          "SO₂ + H₂O → H₂SO₃",
          "C + O₂ → CO₂",
        ],
        answerIndex: 1,
        explanation: "In a catalytic converter, CO and NO react on the platinum/rhodium surface: 2CO + 2NO → 2CO₂ + N₂. This converts two pollutants (CO and NOₓ) into harmless CO₂ and N₂. Option A is the source reaction forming NO in engines. Options C and D are unrelated.",
        guideRef: "Air Pollutants: Sources and Adverse Effects",
        difficulty: "core",
        hints: [
          "The converter reduces pollutants to harmless gases — what are the products of complete combustion and the main component of air?",
        ],
      },
      {
        id: "chem-environment-mcq-q06",
        question: "During eutrophication, the immediate cause of fish death is:",
        options: [
          "Direct toxicity of nitrate ions",
          "Increased water temperature",
          "Depletion of dissolved oxygen",
          "Increased acidity of the water",
        ],
        answerIndex: 2,
        explanation: "The sequence is: algal bloom → blocks light → submerged plants die → aerobic bacteria decompose dead matter → dissolved oxygen is consumed → fish and invertebrates suffocate. Nitrate ions are not directly toxic to fish at typical concentrations; temperature and acidity are not the primary mechanism in eutrophication.",
        guideRef: "Fertilisers and Eutrophication",
        difficulty: "core",
        hints: [
          "Trace the chain: fertiliser → algae → what happens when algae die?",
          "Aerobic decomposition consumes which gas dissolved in water?",
        ],
      },
    ],
    qa: [
      {
        id: "chem-environment-qa-q01",
        question: "A student suspects that a liquid is water but wants to confirm its presence and test whether it is pure. Describe TWO tests to confirm it is water, and ONE test to determine whether it is pure water. Include observations.",
        marks: 5,
        modelAnswer: "Test 1: Add a spatula of anhydrous copper(II) sulfate (white powder). If water is present, the powder turns blue as it forms hydrated CuSO₄·5H₂O. Test 2: Place a piece of cobalt(II) chloride paper in the liquid. If water is present, the paper changes from blue to pink. Purity test: Measure the boiling point of the liquid using a thermometer. If it boils at exactly 100 °C at standard atmospheric pressure, it is pure water. A boiling point above 100 °C indicates dissolved impurities are present.",
        markScheme: [
          "Test 1: anhydrous CuSO₄ / white to blue [1]",
          "Test 2: cobalt(II) chloride paper / blue to pink [1]",
          "Purity test: measure boiling point [1]",
          "Expected result for pure sample: boiling point = 100 °C (at standard pressure) [1]",
          "Interpretation: above 100 °C indicates impurities / dissolved solutes [1]",
        ],
        commonError: "Many students confuse the two water tests — saying CuSO₄ turns pink (it turns blue) or saying cobalt chloride turns blue when wet (it starts blue and turns pink). Also, students often say 'filter the water' as a purity test, which only removes suspended solids, not dissolved impurities.",
        guideRef: "Testing for Water and Its Purity",
        difficulty: "core",
        hints: [
          "Two tests: one uses a powder, one uses paper — recall the colour changes for each.",
          "Purity and presence are different things; a chemical test only tells you water is there.",
          "What physical property of pure water can be measured precisely to confirm purity?",
        ],
      },
      {
        id: "chem-environment-qa-q02",
        question: "Explain, using balanced equations where appropriate, how sulfur dioxide released from a coal-fired power station contributes to acid rain, and describe TWO damaging effects of acid rain.",
        marks: 6,
        modelAnswer: "Sulfur in coal burns to form sulfur dioxide: S + O₂ → SO₂. In the atmosphere, SO₂ is oxidised to SO₃: 2SO₂ + O₂ → 2SO₃. SO₃ dissolves in rain water to form sulfuric acid: SO₃ + H₂O → H₂SO₄. This acid rain has a pH below 5.6. Effect 1: Acid rain lowers the pH of lakes and rivers, killing fish and invertebrates because enzymes are denatured at low pH; aluminium ions (leached from soil) are also toxic to aquatic organisms. Effect 2: Acid rain dissolves limestone and marble buildings/statues because CaCO₃ reacts with H₂SO₄: CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂, eroding the structure.",
        markScheme: [
          "S + O₂ → SO₂ (balanced) [1]",
          "SO₂ oxidised to SO₃ in atmosphere (2SO₂ + O₂ → 2SO₃) OR SO₂ dissolves directly; forms H₂SO₄/H₂SO₃ in rain [1]",
          "Acid rain has pH below 5.6 / rain becomes acidic [1]",
          "Effect 1: harms aquatic ecosystems / kills fish (accept: low pH damages fish / aluminium ions toxic) [1]",
          "Effect 2: corrodes/dissolves limestone/marble buildings (accept: CaCO₃ + H₂SO₄ equation) [1]",
          "Any third distinct effect (e.g. forest damage by leaching minerals from soil) [1]",
        ],
        commonError: "Students often state SO₂ directly dissolves in water to form sulfuric acid. In reality, SO₂ forms the weaker H₂SO₃ (sulfurous acid) directly; atmospheric oxidation to SO₃ is needed for H₂SO₄. At IGCSE, either pathway is acceptable, but confusing the two oxides or acids loses marks.",
        guideRef: "Acid Rain: Formation and Effects",
        difficulty: "core",
        hints: [
          "Start with the combustion of sulfur — what gas is produced?",
          "What happens to this gas in the atmosphere? Write an equation for its oxidation.",
          "What acid forms when this oxide dissolves in rain? What pH does this create?",
          "Now think: what reacts with acid? Limestone buildings contain CaCO₃.",
        ],
        solutions: [
          {
            label: "Step-by-step equation approach",
            steps: [
              "Step 1: S + O₂ → SO₂ (sulfur burns in coal)",
              "Step 2: 2SO₂ + O₂ → 2SO₃ (oxidation in the atmosphere)",
              "Step 3: SO₃ + H₂O → H₂SO₄ (sulfuric acid in rain)",
              "Effect A: H₂SO₄(aq) + CaCO₃(s) → CaSO₄(s) + H₂O(l) + CO₂(g) — stone dissolves",
              "Effect B: low pH kills aquatic organisms / denatured enzymes in fish",
            ],
          },
        ],
      },
      {
        id: "chem-environment-qa-q03",
        question: "Explain the greenhouse effect and discuss how increasing concentrations of methane from agricultural sources contribute to climate change. Include in your answer a named strategy to reduce methane emissions and one predicted consequence of rising global temperatures. [6 marks]",
        marks: 6,
        modelAnswer: "The greenhouse effect: solar radiation (visible/UV) passes through the atmosphere and is absorbed by Earth's surface, warming it. Earth re-radiates energy as infrared (IR) radiation. Greenhouse gases such as methane (CH₄) and CO₂ absorb this outgoing IR and re-radiate it in all directions, including back towards Earth's surface. This raises the surface temperature above what it would be without these gases — this is the natural greenhouse effect. Agricultural sources of methane include enteric fermentation in cattle (digestive process producing CH₄), rice paddies (anaerobic decomposition of organic matter), and landfill sites. As the global cattle population and rice production increase, atmospheric CH₄ concentration rises. CH₄ is a more potent greenhouse gas than CO₂ per molecule, so even small increases significantly enhance the greenhouse effect, leading to climate change. Strategy: changing livestock diets (e.g. adding seaweed supplements to feed) has been shown to reduce CH₄ output from cattle by up to 80%. Alternatively, capturing landfill methane for use as fuel. Consequence: melting of polar ice caps and glaciers raises sea levels, threatening low-lying coastal areas and islands with flooding.",
        markScheme: [
          "Solar radiation (visible/UV) passes through atmosphere and warms surface [1]",
          "Surface re-emits infrared / longer wavelength radiation [1]",
          "Greenhouse gas (CH₄/CO₂) absorbs and re-radiates IR back to surface [1]",
          "Agricultural source of CH₄ named (cattle / rice paddies / landfill) [1]",
          "Named strategy to reduce CH₄ (dietary changes for livestock / landfill gas capture / reduced cattle farming) [1]",
          "Named consequence of rising temperatures (sea level rise / melting ice / extreme weather / ecosystem disruption) [1]",
        ],
        commonError: "A very common error is to say greenhouse gases 'trap heat like a blanket' without explaining the mechanism — this loses the marks about IR absorption. Another error is confusing the greenhouse effect (which is natural and necessary) with its enhancement (which is the problem). Claiming that ozone depletion causes global warming is also incorrect at IGCSE.",
        guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
        difficulty: "challenge",
        hints: [
          "The greenhouse effect has two parts: what comes IN from the Sun (short wavelength) and what tries to go OUT from Earth (infrared).",
          "What is special about greenhouse gas molecules that lets them absorb IR?",
          "Name a specific agricultural source of CH₄ and a specific strategy to reduce it.",
          "Climate change consequence: think about what melting ice does to ocean levels.",
        ],
        strategy: "Cause-and-effect chain; mechanism before implication",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "chem-environment-bank-mcq-1",
        title: "Question Bank MCQ Paper 1 — Water, Air Composition and Pollutants",
        description: "6 multiple-choice questions covering water tests, purity, air composition, and pollutant sources.",
        questions: [
          {
            id: "chem-environment-bank-mcq1-q01",
            question: "Which of the following correctly states the observation when cobalt(II) chloride paper is held in steam?",
            options: [
              "Paper remains blue",
              "Paper turns white",
              "Paper turns pink",
              "Paper turns yellow",
            ],
            answerIndex: 2,
            explanation: "Cobalt(II) chloride paper is blue when dry and turns pink when water is present. Steam is water vapour, so the paper turns pink. Yellow and white are not associated with this test.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bank-mcq1-q02",
            question: "A water sample from a salt lake has a melting point of -2 °C. What does this tell you about the sample?",
            options: [
              "It contains dissolved salts",
              "It is pure water below sea level",
              "It has been heated recently",
              "It is a mixture of water and ice",
            ],
            answerIndex: 0,
            explanation: "The melting point of pure water is 0 °C. A depression below 0 °C indicates dissolved solutes (here, salts). The freezing-point depression is a colligative property of dissolved particles. Location below sea level and previous heating do not affect melting point.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "core",
            hints: [
              "Compare the observed melting point to the expected value for pure water.",
              "What effect do dissolved substances have on the melting point?",
            ],
          },
          {
            id: "chem-environment-bank-mcq1-q03",
            question: "Domestic water is treated to make it potable. Which pair of processes correctly describes the main treatment steps?",
            options: [
              "Distillation and neutralisation",
              "Filtration and chlorination",
              "Electrolysis and filtration",
              "Chlorination and neutralisation",
            ],
            answerIndex: 1,
            explanation: "Water treatment involves filtration through sand/gravel to remove particles and microorganisms, followed by chlorination to kill bacteria. Distillation is too energy-intensive for large scale. Electrolysis and neutralisation are not standard steps in domestic water treatment.",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bank-mcq1-q04",
            question: "Which statement about the composition of clean dry air is correct?",
            options: [
              "Oxygen is more abundant than nitrogen",
              "Carbon dioxide makes up approximately 21% of clean dry air",
              "Argon is the most abundant noble gas in the atmosphere",
              "Water vapour makes up approximately 1% of clean dry air",
            ],
            answerIndex: 2,
            explanation: "Argon (~1%) is by far the most abundant noble gas in the atmosphere. Nitrogen (~78%) is more abundant than oxygen (~21%) — not the other way round. CO₂ is only ~0.04%, not 21%. Water vapour is not present in 'clean dry air' by definition.",
            guideRef: "Composition of Clean Dry Air",
            difficulty: "core",
            hints: [
              "List the approximate percentages: N₂ 78%, O₂ 21%, Ar 1%, CO₂ 0.04%.",
              "The question asks about noble gases — which one is in the 1%?",
            ],
          },
          {
            id: "chem-environment-bank-mcq1-q05",
            question: "Photochemical smog is formed when:",
            options: [
              "SO₂ reacts with rain to form H₂SO₄",
              "CO binds to haemoglobin in the blood",
              "NOₓ and unburnt hydrocarbons react in sunlight",
              "Particulates block sunlight over cities",
            ],
            answerIndex: 2,
            explanation: "Photochemical smog forms when oxides of nitrogen (NOₓ) and unburnt volatile organic compounds react in the presence of sunlight to produce ground-level ozone and other oxidants. Option A describes acid rain formation; option B is CO toxicity; option D describes particulate haze, not photochemical smog.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "core",
            hints: [
              "The word 'photochemical' tells you sunlight is involved.",
              "Which pollutant from car engines reacts with sunlight?",
            ],
          },
          {
            id: "chem-environment-bank-mcq1-q06",
            question: "A power station burns coal with a high sulfur content. Which strategy would MOST directly reduce its contribution to acid rain?",
            options: [
              "Installing catalytic converters on the power station chimneys",
              "Using flue-gas desulfurisation (FGD) to remove SO₂ from exhaust gases",
              "Adding limestone to nearby lakes",
              "Switching to a higher-pressure turbine",
            ],
            answerIndex: 1,
            explanation: "Flue-gas desulfurisation removes SO₂ from combustion gases before they are released — directly reducing the precursor to H₂SO₄ acid rain. Catalytic converters work on CO and NOₓ from vehicle exhaust, not power station SO₂. Adding limestone to lakes treats the effect but not the source. Higher-pressure turbines improve efficiency but do not reduce sulfur emissions per unit of coal burned.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "challenge",
            hints: [
              "The question asks about acid rain caused by SO₂ from coal.",
              "You need to reduce SO₂ at the source — where does SO₂ exit the power station?",
              "Catalytic converters are for cars and reduce NOₓ/CO — do they apply here?",
            ],
            strategy: "Distinguish source reduction from effect mitigation",
          },
        ],
      },
      {
        id: "chem-environment-bank-mcq-2",
        title: "Question Bank MCQ Paper 2 — Greenhouse Effect, Eutrophication and Synoptic",
        description: "6 multiple-choice questions covering climate change, fertilisers, eutrophication, and synoptic application.",
        questions: [
          {
            id: "chem-environment-bank-mcq2-q01",
            question: "Which gas absorbs infrared radiation and contributes to the greenhouse effect?",
            options: ["Nitrogen (N₂)", "Oxygen (O₂)", "Argon (Ar)", "Methane (CH₄)"],
            answerIndex: 3,
            explanation: "Methane (CH₄) is a greenhouse gas because its C-H bonds vibrate at frequencies matching infrared wavelengths, allowing it to absorb and re-radiate IR. N₂, O₂, and Ar are symmetric diatomic/monatomic species with no IR-active vibrational modes and are NOT greenhouse gases.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bank-mcq2-q02",
            question: "Which of the following is a source of methane (CH₄) emissions?",
            options: [
              "Combustion of petrol in car engines",
              "Combustion of coal in power stations",
              "Enteric fermentation in cattle",
              "Reaction of nitrogen with oxygen at high temperatures",
            ],
            answerIndex: 2,
            explanation: "Enteric fermentation — the digestive process in cattle and other ruminants — produces methane as a by-product of microbial digestion of plant material. Options A and B produce CO₂, CO, and SO₂ but not primarily CH₄. Option D produces NOₓ.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "core",
            hints: [
              "Think about which source involves biological processes rather than combustion.",
              "Cattle digestion is anaerobic — what gas is produced?",
            ],
          },
          {
            id: "chem-environment-bank-mcq2-q03",
            question: "The first observable effect of eutrophication in a lake is:",
            options: [
              "Fish dying from lack of oxygen",
              "Rapid growth of algae on the water surface",
              "Anaerobic decomposition producing methane",
              "Depletion of dissolved oxygen in the water",
            ],
            answerIndex: 1,
            explanation: "The sequence is: excess nutrients → algal bloom (first observable effect) → blocked sunlight → plant death → bacterial decomposition → O₂ depletion → fish death → anaerobic conditions. The algal bloom is the first step; oxygen depletion and fish death are downstream consequences.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "core",
            hints: [
              "Order the events in eutrophication: what do nutrients directly cause first?",
            ],
          },
          {
            id: "chem-environment-bank-mcq2-q04",
            question: "A farmer applies excess ammonium nitrate fertiliser before heavy rain. The run-off enters a river. What is the likely long-term consequence?",
            options: [
              "The river becomes more acidic due to nitric acid formation",
              "Fish populations increase due to improved nutrient supply",
              "Dissolved oxygen in the river decreases, killing fish",
              "The river water becomes alkaline due to the ammonium ions",
            ],
            answerIndex: 2,
            explanation: "Excess nitrate run-off causes eutrophication: algal blooms, then death of plants, then aerobic decomposition consuming dissolved oxygen, leading to suffocation of fish. Rivers do not become acidic this way. Fish do not benefit — they die. Ammonium ions do not make rivers alkaline at the concentrations involved.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "core",
            hints: [
              "Trace the eutrophication chain from nitrate input to the final effect on fish.",
            ],
          },
          {
            id: "chem-environment-bank-mcq2-q05",
            question: "Which statement correctly explains why switching from fossil fuels to wind energy reduces climate change?",
            options: [
              "Wind turbines produce oxygen, replacing the O₂ consumed by fossil fuels",
              "Wind energy produces no CO₂ during operation, reducing greenhouse gas concentration",
              "Wind turbines remove CO₂ directly from the atmosphere",
              "Wind energy produces water vapour instead of CO₂",
            ],
            answerIndex: 1,
            explanation: "Wind turbines generate electricity without combustion, so no CO₂ is released during operation. This reduces the rate at which greenhouse gases accumulate in the atmosphere. Wind turbines do not produce oxygen, remove CO₂, or produce water vapour as a by-product.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "core",
            hints: [
              "Think about what combustion produces that wind does not.",
            ],
          },
          {
            id: "chem-environment-bank-mcq2-q06",
            question: "A student claims: 'Reforestation is better than carbon capture and storage (CCS) because trees also provide oxygen.' Evaluate this claim. Which response gives the most complete scientific assessment?",
            options: [
              "The claim is correct because oxygen is the most important product of forests",
              "The claim is incorrect because CCS produces more oxygen than trees",
              "The claim is partially correct: reforestation does absorb CO₂, but CCS can store larger volumes more reliably; the oxygen argument is not the main scientific reason to prefer reforestation",
              "The claim is incorrect because trees release CO₂ at night, cancelling any benefit",
            ],
            answerIndex: 2,
            explanation: "Reforestation does absorb CO₂ via photosynthesis (a genuine benefit) but trees also release CO₂ when they respire and decompose; the net effect is positive only for living growing forests. CCS can capture CO₂ from point sources at industrial scale. The claim about oxygen being a primary reason to prefer reforestation over CCS is not the main scientific argument. Option D is incorrect — trees photosynthesise far more than they respire, giving a net uptake of CO₂ over their lifetime.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "challenge",
            hints: [
              "Consider: do trees always absorb CO₂, or can they also release it?",
              "Compare the scale and reliability of each strategy before evaluating the oxygen argument.",
              "A scientific evaluation should acknowledge merit but also limitations.",
            ],
            strategy: "Evaluate claims by separating valid points from partial reasoning",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "chem-environment-bank-qa-1",
        title: "Question Bank Structured Paper 1 — Water and Pollutants",
        description: "4 structured questions on water testing, treatment, pollutants and acid rain.",
        questions: [
          {
            id: "chem-environment-bank-qa1-q01",
            question: "Describe how domestic water is made safe to drink. State the purpose of each stage. [4 marks]",
            marks: 4,
            modelAnswer: "Stage 1 — Filtration: Water from the reservoir is passed through beds of coarse gravel and fine sand. This removes suspended solid particles and some microorganisms that are too large to pass through the filter medium. Stage 2 — Chlorination: A controlled amount of chlorine (or chloramine) is added to the filtered water. Chlorine is a powerful oxidising agent that kills remaining harmful bacteria and other pathogens, making the water safe for consumption. The dose is carefully controlled to be effective without causing harmful by-products or unacceptable taste.",
            markScheme: [
              "Filtration through sand/gravel [1]",
              "Purpose of filtration: removes suspended particles / microorganisms [1]",
              "Chlorination: addition of chlorine to water [1]",
              "Purpose: kills bacteria/pathogens / water made safe to drink [1]",
            ],
            commonError: "Students often say 'boiling' or 'distillation' as treatment steps. While boiling kills bacteria, it is not used on a large scale. Distillation is too energy-intensive. The two IGCSE-required steps are filtration and chlorination.",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bank-qa1-q02",
            question: "A match-the-pollutant task: For EACH of the following adverse effects, identify the pollutant responsible and state its source. (a) Acute toxicity by preventing oxygen transport in red blood cells. (b) Lowering the pH of lakes, killing freshwater invertebrates. (c) Formation of photochemical smog in cities. (d) Fine particles penetrating deep into lung tissue. [8 marks]",
            marks: 8,
            modelAnswer: "(a) Carbon monoxide (CO). Source: incomplete combustion of carbon-containing fuels, e.g. in car engines with insufficient air or faulty gas boilers. CO binds irreversibly to haemoglobin forming carboxyhaemoglobin. (b) Sulfur dioxide (SO₂) or oxides of nitrogen (NOₓ). Source: SO₂ from combustion of sulfur-containing coal/oil; NOₓ from car engines at high temperature. Both dissolve in rain to form strong acids (H₂SO₄ / HNO₃) which lower lake pH. (c) Oxides of nitrogen (NOₓ). Source: car engines (N₂ + O₂ → 2NO at high temperature) and lightning. NOₓ reacts with unburnt hydrocarbons in sunlight to form ground-level ozone and other photochemical oxidants. (d) Particulates (soot/carbon particles / PM2.5). Source: incomplete combustion of diesel, wood, or coal; also volcanic eruptions and construction dust. Fine particles below 2.5 µm bypass the respiratory system's defences and lodge in alveoli.",
            markScheme: [
              "(a) CO identified [1]; incomplete combustion named as source [1]",
              "(b) SO₂ or NOₓ identified [1]; fossil fuel combustion / car engines as source [1]",
              "(c) NOₓ identified [1]; car engines (high temp.) / lightning as source [1]",
              "(d) Particulates / PM / soot identified [1]; incomplete combustion / diesel / coal as source [1]",
            ],
            commonError: "For (b), students often name only CO₂ as the acid rain culprit — CO₂ produces carbonic acid, which is too weak to cause the damage described. The main acid rain culprits are H₂SO₄ (from SO₂) and HNO₃ (from NOₓ).",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "core",
            hints: [
              "(a) Which gas binds to haemoglobin? What type of combustion produces it?",
              "(b) Which gases dissolve in rain to form strong acids? Which fuels contain sulfur?",
              "(c) Photochemical = sunlight involved. Which car exhaust gas + sunlight = smog?",
              "(d) 'Fine particles' — what is the combustion residue that is solid?",
            ],
            strategy: "Match each effect to its mechanism, then trace back to source",
          },
          {
            id: "chem-environment-bank-qa1-q03",
            question: "Acid rain damages marble (CaCO₃) statues. (a) Write a balanced equation for the reaction between CaCO₃ and sulfuric acid. [2 marks] (b) Suggest why a statue in an industrial city shows more damage than one in a rural area. [2 marks] (c) Explain why adding powdered limestone to an acidified lake is only a temporary solution. [2 marks]",
            marks: 6,
            modelAnswer: "(a) CaCO₃(s) + H₂SO₄(aq) → CaSO₄(s/aq) + H₂O(l) + CO₂(g) [balanced, with state symbols for full marks]. (b) Industrial cities burn more fossil fuels (coal, oil) in factories and power stations, releasing more SO₂ and NOₓ into the atmosphere. These react with water in the atmosphere to produce sulfuric acid and nitric acid rain, which falls at higher concentrations in the urban area. Traffic also produces more NOₓ in cities. (c) Limestone (CaCO₃) reacts with the acid in the lake: CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂, neutralising it temporarily. However, if the source of acid rain (SO₂/NOₓ emissions) is not reduced, acidic rain continues to fall on the lake. Eventually, the added limestone is consumed and the lake becomes acidic again. It treats the symptom, not the cause.",
            markScheme: [
              "(a) CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂ (balanced, correct products) [2 — deduct 1 for unbalanced or wrong products]",
              "(b) More fossil fuel combustion in industrial areas → higher SO₂/NOₓ emissions [1]; forms stronger acid rain / higher acid concentration [1]",
              "(c) Limestone neutralises acid temporarily [1]; source emissions continue so acid rain keeps falling / limestone is eventually used up [1]",
            ],
            commonError: "A common error in (a) is writing HCl as the acid or omitting CO₂ as a product. In (c) students often say 'limestone dissolves' without explaining that the acid rain source continues — failing to distinguish treating effect vs. cause.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "core",
            hints: [
              "(a) CaCO₃ + acid → salt + water + carbon dioxide. Which salt does H₂SO₄ form with Ca²⁺?",
              "(b) What does 'industrial' mean in terms of fuel combustion?",
              "(c) Is the lake's problem local or from far away? What happens after the limestone reacts?",
            ],
            solutions: [
              {
                label: "Balancing equation (a) step by step",
                steps: [
                  "Reactants: CaCO₃ and H₂SO₄",
                  "Products of acid + carbonate: salt + water + CO₂",
                  "Salt formed: CaSO₄ (calcium sulfate — insoluble, white solid)",
                  "Full equation: CaCO₃(s) + H₂SO₄(aq) → CaSO₄(s) + H₂O(l) + CO₂(g)",
                  "Check balance: Ca:1=1, C:1=1, O:3+4=4+1+2 → 7=7 ✓, S:1=1, H:2=2 ✓",
                ],
              },
            ],
          },
          {
            id: "chem-environment-bank-qa1-q04",
            question: "CHALLENGE: A scientist measures the dissolved oxygen (DO) content of a river at three points: upstream of a farm (DO = 9 mg/L), 100 m downstream of the farm outflow (DO = 3 mg/L), and 2 km downstream (DO = 8 mg/L). Explain these measurements in terms of eutrophication and natural recovery. Include the role of aerobic bacteria in your answer. [7 marks]",
            marks: 7,
            modelAnswer: "Upstream: DO = 9 mg/L represents a healthy, unpolluted level — normal for a well-oxygenated river. 100 m downstream of the farm outflow: DO drops to 3 mg/L. Excess nitrates/phosphates from fertiliser run-off enter the river here, causing rapid growth of algae (algal bloom). When the algae die, aerobic decomposing bacteria break down the large quantity of organic matter by aerobic respiration: organic matter + O₂ → CO₂ + H₂O. This process consumes dissolved oxygen rapidly, causing the sharp drop to 3 mg/L (the 'oxygen sag'). At this point, fish and other aerobic organisms may suffocate. 2 km downstream: DO recovers to 8 mg/L. The fertiliser concentration has been diluted by mixing with clean river water. The supply of dead algal matter is exhausted. Fewer bacteria are decomposing organic matter, so O₂ consumption decreases. Meanwhile, remaining aquatic plants and algae (if not completely depleted) photosynthesize, adding O₂ back. The river naturally re-aerates from the atmosphere. This is the 'oxygen sag curve' — a classic pattern of organic pollution followed by recovery.",
            markScheme: [
              "Upstream: DO = 9 mg/L is a normal healthy level [1]",
              "Fertiliser run-off causes excess nitrates → algal bloom [1]",
              "Algae/plants die, aerobic bacteria decompose → consume dissolved O₂ [1]",
              "Equation or description: aerobic respiration of organic matter uses O₂ [1]",
              "DO drops to 3 mg/L = 'oxygen sag' / aquatic organisms may suffocate [1]",
              "2 km downstream: dilution/exhaustion of nutrients → bacterial activity decreases [1]",
              "Re-aeration from atmosphere / photosynthesis by surviving plants → DO recovers [1]",
            ],
            commonError: "Students often state that 'the bacteria produce oxygen' — bacteria involved in decomposition are aerobic and CONSUME oxygen. Only photosynthetic organisms produce oxygen. Also, many students omit the recovery mechanism, simply saying 'the pollutant moves away' without explaining dilution, exhaustion of organic substrate, and re-aeration.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "challenge",
            hints: [
              "The upstream reading gives your baseline. What does 9 mg/L tell you about water quality?",
              "At 100 m: link the farm outflow to the cause (fertiliser → nutrients → algae → decomposition).",
              "Aerobic bacteria respire — they use O₂, not produce it. Write a word equation for aerobic respiration.",
              "Recovery at 2 km: three possible reasons — dilution, substrate exhaustion, and photosynthesis/re-aeration.",
            ],
            strategy: "Apply the oxygen sag curve model; distinguish O₂ consumers from O₂ producers",
          },
        ],
      },
      {
        id: "chem-environment-bank-qa-2",
        title: "Question Bank Structured Paper 2 — Greenhouse Effect, Climate Change and Synoptic",
        description: "4 structured questions on the greenhouse effect, climate change strategies, and synoptic reasoning.",
        questions: [
          {
            id: "chem-environment-bank-qa2-q01",
            question: "Explain why carbon dioxide is a greenhouse gas but nitrogen is not. In your answer, refer to the absorption of infrared radiation. [3 marks]",
            marks: 3,
            modelAnswer: "Greenhouse gases must be able to absorb infrared radiation. CO₂ is a triatomic molecule with bonds (C=O) that vibrate (stretching and bending) at frequencies that match the wavelengths of infrared radiation emitted by Earth's surface. When CO₂ absorbs IR, the molecule gains vibrational energy and then re-emits it in all directions, including back towards Earth, warming the surface. Nitrogen (N₂) is a diatomic molecule with a symmetrical N≡N triple bond. The symmetric stretching of this bond does not produce a change in dipole moment, so it does not have IR-active vibrational modes and cannot absorb infrared radiation. Therefore N₂ passes IR through rather than trapping it.",
            markScheme: [
              "CO₂ has vibrational modes that match IR frequencies / absorbs IR [1]",
              "CO₂ re-emits IR towards Earth's surface (trapping heat) [1]",
              "N₂ is symmetrical / has no IR-active modes / does not absorb IR [1]",
            ],
            commonError: "Students often simply say 'CO₂ absorbs heat but N₂ doesn't' without linking to infrared radiation specifically, or they confuse absorbing IR with 'blocking sunlight'.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "core",
            hints: [
              "Think about what type of radiation Earth emits (not the same as what the Sun sends).",
              "What property of a molecule allows it to absorb infrared?",
              "Compare CO₂ (triatomic, asymmetric vibrations) with N₂ (symmetric diatomic).",
            ],
          },
          {
            id: "chem-environment-bank-qa2-q02",
            question: "Deforestation has been linked to increasing atmospheric CO₂ concentrations. (a) Explain TWO ways in which cutting down forests increases CO₂ in the atmosphere. [4 marks] (b) Suggest why planting fast-growing trees is considered a better strategy than planting slow-growing trees for reducing atmospheric CO₂ in the short term. [2 marks]",
            marks: 6,
            modelAnswer: "(a) Way 1: When trees are cut down and burned (slash-and-burn agriculture), the carbon stored in wood is oxidised to CO₂: wood (carbon compounds) + O₂ → CO₂ + H₂O. This directly releases large amounts of stored carbon into the atmosphere. Way 2: Living trees absorb CO₂ by photosynthesis: CO₂ + H₂O → glucose + O₂. When trees are removed, this CO₂-absorbing capacity is lost. The atmosphere is no longer being 'cleaned' of CO₂ at the same rate — so CO₂ concentration rises even without combustion. (b) Fast-growing trees fix carbon more rapidly per unit time because they have a higher rate of photosynthesis and biomass production. In the short term, they absorb more CO₂ from the atmosphere than slow-growing trees of the same age. This makes them more effective for rapid carbon sequestration, which is more valuable when trying to reduce current CO₂ levels quickly.",
            markScheme: [
              "Way 1: combustion of trees / burning releases CO₂ stored in wood [1]; combustion equation or explanation [1]",
              "Way 2: fewer trees means less photosynthesis / less CO₂ absorbed [1]; loss of carbon sink [1]",
              "(b) Fast-growing trees photosynthesise / sequester carbon more rapidly [1]; greater short-term CO₂ removal than slow-growing alternatives [1]",
            ],
            commonError: "Many students give only combustion as the reason, forgetting that the removal of trees also reduces the carbon sink (photosynthesis). Both mechanisms should be stated for full marks.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "core",
            hints: [
              "(a) Think about two roles trees play: as a carbon store AND as an active carbon absorber.",
              "(a) Burning releases stored carbon as CO₂. Removing living trees means less photosynthesis.",
              "(b) Carbon fixation rate is proportional to growth rate — faster growth = more CO₂ absorbed per year.",
            ],
          },
          {
            id: "chem-environment-bank-qa2-q03",
            question: "A government is considering two policies to reduce air pollution from vehicles: (i) mandating catalytic converters on all petrol cars, and (ii) banning the sale of new diesel cars. Compare the effectiveness of these two policies in reducing: (a) carbon monoxide emissions, (b) particulate emissions, and (c) sulfur dioxide emissions. [6 marks]",
            marks: 6,
            modelAnswer: "(a) Carbon monoxide: Catalytic converters (policy i) directly and effectively reduce CO emissions by the reaction 2CO + 2NO → 2CO₂ + N₂ on the Pt/Rh surface. Banning diesel cars (policy ii) has less impact on CO specifically because diesel engines generally produce less CO than petrol engines (diesel burns at higher efficiency). Policy (i) is more effective for CO. (b) Particulates: Diesel engines produce significantly more particulate matter (soot, PM2.5) than petrol engines because diesel combustion is more heterogeneous. Banning new diesel cars (policy ii) would substantially reduce particulate emissions from vehicles over time. Catalytic converters do not directly remove particulates (they target gas-phase pollutants). Policy (ii) is more effective for particulates. (c) Sulfur dioxide: Both policies have limited direct effect on SO₂ because automotive SO₂ is now minor — modern fuels have very low sulfur content. The main SO₂ source is power stations, not vehicle engines. Neither policy directly reduces SO₂ significantly; FGD at power stations would be more effective.",
            markScheme: [
              "(a) Catalytic converters reduce CO (2CO + 2NO → 2CO₂ + N₂) [1]; diesel ban less relevant for CO [1]",
              "(b) Diesel produces more particulates; diesel ban more effective [1]; catalytic converters do not remove particulates [1]",
              "(c) Both policies have limited effect on SO₂ [1]; main source is power stations, not cars / SO₂ from vehicles is low due to low-sulfur fuel [1]",
            ],
            commonError: "Students often assume catalytic converters remove all pollutants including particulates and SO₂ — they specifically target CO and NOₓ and do not capture solid particulates or SO₂.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "challenge",
            hints: [
              "(a) What does a catalytic converter specifically convert? 2CO + 2NO → ?",
              "(b) Which engine type is notorious for particulates — petrol or diesel?",
              "(c) What is the main source of SO₂ — vehicles or power stations?",
              "Think about whether each policy targets the right source for each pollutant.",
            ],
            strategy: "Match each pollutant to its source, then evaluate each policy against that source",
          },
          {
            id: "chem-environment-bank-qa2-q04",
            question: "CHALLENGE — Climate reasoning: A scientist states: 'Reducing methane emissions will have a greater impact on climate change per molecule reduced than reducing an equal number of CO₂ molecules, but CO₂ reduction should still be the priority.' Evaluate this statement using your knowledge of greenhouse gases and climate change. [6 marks]",
            marks: 6,
            modelAnswer: "The first part of the statement is scientifically correct. Methane is a more potent greenhouse gas than CO₂ on a per-molecule basis: over a 20-year period, one molecule of CH₄ causes approximately 80 times more warming than one molecule of CO₂ (global warming potential, GWP). This is because CH₄ has more IR-active vibrational modes and absorbs at a wider range of infrared wavelengths. However, the second part — that CO₂ reduction should be the priority — is also scientifically defensible, for three reasons. First, atmospheric CO₂ concentration (~420 ppm currently) is far higher than CH₄ (~1.9 ppm), so it contributes more total warming despite lower per-molecule potency. Second, CO₂ persists in the atmosphere for hundreds to thousands of years, whereas CH₄ breaks down in ~12 years, meaning CO₂ causes sustained long-term warming. Third, the main anthropogenic source of CO₂ — fossil fuel combustion — represents the largest single driver of current climate change by volume. Therefore, reducing CO₂ at scale has greater long-term impact. The statement is a nuanced but scientifically defensible position: both gases matter, and their relative priority depends on the time horizon considered.",
            markScheme: [
              "CH₄ is more potent per molecule than CO₂ / higher GWP [1]",
              "CH₄ has more IR-active vibrational modes / absorbs at more wavelengths [1]",
              "CO₂ concentration is far higher in the atmosphere so total warming contribution is greater [1]",
              "CO₂ persists much longer in the atmosphere (hundreds of years vs ~12 years for CH₄) [1]",
              "Fossil fuel combustion is the dominant source of anthropogenic CO₂ / largest driver by volume [1]",
              "Balanced evaluation: both gases matter; time horizon affects which is the priority [1]",
            ],
            commonError: "Students who simply state 'CO₂ is worse because there is more of it' miss the per-molecule potency argument. Those who say 'reduce CH₄ first because it is more powerful' ignore persistence and absolute concentration. The strongest answers acknowledge both sides.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "challenge",
            hints: [
              "The statement has two parts — address each separately: is per-molecule potency of CH₄ correct? Then why might CO₂ still be the priority?",
              "Think about: (1) concentration in atmosphere, (2) lifetime in atmosphere, (3) which source is larger.",
              "What does 'global warming potential' (GWP) mean? How does persistence affect long-term warming?",
              "A strong evaluation weighs both sides — acknowledge where each argument has merit.",
            ],
            strategy: "Evaluate by separating per-molecule effect from total effect; consider time horizons",
          },
        ],
      },
    ],
  },
};
