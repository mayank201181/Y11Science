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
        id: "chem-environment-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Ten multiple-choice questions on water tests, purity, and water treatment.",
        questions: [
          {
            id: "chem-environment-bm1-01",
            question: "Anhydrous copper(II) sulfate is added to a colourless liquid and turns blue. What does this prove?",
            options: [
              "The liquid is pure water",
              "Water is present in the liquid",
              "The liquid is an acid",
              "The liquid contains dissolved salt",
            ],
            answerIndex: 1,
            explanation: "The white-to-blue change of anhydrous CuSO₄ confirms only that water is PRESENT — it says nothing about purity. The liquid could be a solution. Acidity and salt content are not tested by this reagent.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm1-02",
            question: "Dry cobalt(II) chloride paper is which colour before it touches water?",
            options: ["Pink", "Blue", "White", "Green"],
            answerIndex: 1,
            explanation: "Cobalt(II) chloride paper is blue when dry and turns pink when water is present. Pink is the wet colour; white and green are not part of this test.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm1-03",
            question: "A liquid boils at exactly 100 °C at standard atmospheric pressure and turns cobalt(II) chloride paper pink. What can be concluded?",
            options: [
              "It is impure water",
              "It is pure water",
              "It is water vapour only",
              "It is an aqueous salt solution",
            ],
            answerIndex: 1,
            explanation: "Cobalt chloride paper turning pink confirms water is present. Boiling at exactly 100 °C at standard pressure confirms it is pure (a dissolved solute would elevate the boiling point). Together these show it is pure water.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "core",
            hints: [
              "What does the cobalt chloride result tell you — presence or purity?",
              "What is the boiling point of pure water at 1 atm?",
              "Combine both pieces of information.",
            ],
          },
          {
            id: "chem-environment-bm1-04",
            question: "Why is the white-to-blue change of anhydrous copper(II) sulfate described as reversible?",
            options: [
              "The blue salt can be filtered back to white",
              "Gentle heating drives the water off, restoring the white anhydrous form",
              "Adding acid turns the blue salt white again",
              "The colour fades over time on standing",
            ],
            answerIndex: 1,
            explanation: "CuSO₄(s) + 5H₂O(l) → CuSO₄·5H₂O(s) is reversible: heating the blue hydrated salt drives off the water, regenerating white anhydrous CuSO₄. Filtration, acid, and standing do not reverse the hydration.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "core",
            hints: [
              "What physical change removes water from a hydrated salt?",
              "Think about how you would dry a damp salt in the lab.",
            ],
          },
          {
            id: "chem-environment-bm1-05",
            question: "Which process in domestic water treatment is responsible for killing harmful bacteria?",
            options: ["Filtration", "Sedimentation", "Chlorination", "Screening"],
            answerIndex: 2,
            explanation: "Chlorination adds chlorine, a powerful oxidising agent that kills bacteria and other pathogens. Filtration, sedimentation, and screening physically remove particles but do not kill microorganisms.",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm1-06",
            question: "Filtration through beds of sand and gravel in a water treatment works mainly achieves which of the following?",
            options: [
              "Killing all bacteria in the water",
              "Removing dissolved salts",
              "Removing suspended solids and some microorganisms",
              "Removing dissolved chlorine",
            ],
            answerIndex: 2,
            explanation: "Sand/gravel filtration removes suspended solids and larger microorganisms but does NOT kill bacteria or remove dissolved salts. Chlorination is needed to kill remaining pathogens.",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "core",
            hints: [
              "Filtration is a physical separation — what does it act on?",
              "Can a sand filter remove substances that are dissolved?",
            ],
          },
          {
            id: "chem-environment-bm1-07",
            question: "Distillation can produce very pure water but is not used for the public water supply mainly because:",
            options: [
              "It does not kill bacteria",
              "It is too energy-intensive and expensive on a large scale",
              "It leaves harmful salts in the water",
              "It makes the water acidic",
            ],
            answerIndex: 1,
            explanation: "Distillation requires boiling huge volumes of water, which is far too energy-intensive and costly for domestic-scale supply. Filtration plus chlorination is the practical solution. (Distillation actually does kill bacteria and removes salts.)",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "core",
            hints: [
              "What does distillation require a lot of?",
              "Compare the cost of distilling millions of litres vs filtering and chlorinating.",
            ],
          },
          {
            id: "chem-environment-bm1-08",
            question: "Seawater is found to boil at 100.6 °C and freeze at -1.1 °C at standard pressure. Which conclusion is correct?",
            options: [
              "Seawater is pure because both values are close to those of water",
              "Dissolved salts raise the boiling point and lower the freezing point",
              "Dissolved salts lower the boiling point and raise the freezing point",
              "The thermometer must be faulty",
            ],
            answerIndex: 1,
            explanation: "Dissolved solutes elevate the boiling point (above 100 °C) and depress the freezing/melting point (below 0 °C). Seawater boiling at 100.6 °C and freezing at -1.1 °C is the classic signature of an impure (salty) sample.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "core",
            hints: [
              "Compare each value with pure water (100 °C and 0 °C).",
              "Does the boiling point go up or down with impurities? And the freezing point?",
            ],
          },
          {
            id: "chem-environment-bm1-09",
            question: "A factory needs water free of all dissolved ions for use in steam boilers, but the local treatment works only filters and chlorinates river water. Which additional process would best meet the factory's requirement, and why?",
            options: [
              "More chlorination, because chlorine removes ions",
              "Distillation, because boiling and condensing leaves dissolved ions behind",
              "Extra filtration, because fine filters trap dissolved ions",
              "Sedimentation, because ions settle out over time",
            ],
            answerIndex: 1,
            explanation: "Dissolved ions are not removed by filtration, chlorination, or sedimentation. Distillation evaporates the water and condenses pure vapour, leaving non-volatile dissolved ions behind in the residue — giving ion-free water suitable for boilers.",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "challenge",
            hints: [
              "Which processes act only on suspended (not dissolved) material?",
              "How can you separate a liquid from non-volatile dissolved solids?",
              "Think about a change of state: liquid → gas → liquid.",
            ],
            strategy: "Match the separation method to whether the impurity is suspended or dissolved",
          },
          {
            id: "chem-environment-bm1-10",
            question: "A student claims any liquid that turns anhydrous CuSO₄ blue must be pure water. Which single observation best disproves this claim?",
            options: [
              "A salt solution turns anhydrous CuSO₄ blue but boils above 100 °C",
              "Ethanol turns anhydrous CuSO₄ blue and boils at 78 °C",
              "Pure water turns cobalt chloride paper blue",
              "Anhydrous CuSO₄ stays white in oil",
            ],
            answerIndex: 0,
            explanation: "A salt (aqueous) solution contains water, so it turns anhydrous CuSO₄ blue, yet it boils above 100 °C, proving it is impure. This directly disproves the claim. Ethanol contains no water and would not turn CuSO₄ blue, so that option is factually wrong.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "challenge",
            hints: [
              "The test detects water presence, not purity — find a counterexample that contains water but is impure.",
              "An aqueous solution still contains water molecules.",
              "Check each option is itself chemically correct before choosing.",
            ],
            strategy: "Disprove a universal claim with one valid counterexample",
          },
        ],
      },
      {
        id: "chem-environment-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Ten multiple-choice questions on the composition of air and air pollutants.",
        questions: [
          {
            id: "chem-environment-bm2-01",
            question: "What is the approximate percentage by volume of oxygen in clean dry air?",
            options: ["78%", "21%", "1%", "0.04%"],
            answerIndex: 1,
            explanation: "Oxygen is ~21% of clean dry air. Nitrogen is ~78%, argon (and other noble gases) ~1%, and carbon dioxide ~0.04%.",
            guideRef: "Composition of Clean Dry Air",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm2-02",
            question: "Which gas in clean dry air is present at approximately 0.04% by volume?",
            options: ["Nitrogen", "Carbon dioxide", "Argon", "Oxygen"],
            answerIndex: 1,
            explanation: "Carbon dioxide is a trace gas at ~0.04%. Despite this small amount it is vital — it is a greenhouse gas and the carbon source for photosynthesis.",
            guideRef: "Composition of Clean Dry Air",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm2-03",
            question: "Carbon monoxide is produced mainly by:",
            options: [
              "Complete combustion of hydrocarbons",
              "Incomplete combustion of carbon-containing fuels",
              "The reaction of nitrogen with oxygen",
              "Combustion of sulfur impurities in fuel",
            ],
            answerIndex: 1,
            explanation: "CO forms when carbon-containing fuels burn in a limited supply of oxygen (incomplete combustion). Complete combustion gives CO₂; N₂ + O₂ gives NOₓ; sulfur gives SO₂.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "core",
            hints: [
              "CO has one oxygen, CO₂ has two — which forms when oxygen is short?",
              "Match each pollutant to the element being burned.",
            ],
          },
          {
            id: "chem-environment-bm2-04",
            question: "Oxides of nitrogen (NOₓ) form in car engines because:",
            options: [
              "Sulfur impurities in petrol are oxidised",
              "Incomplete combustion produces nitrogen oxides",
              "High temperatures cause atmospheric N₂ and O₂ to react",
              "Nitrogen is added deliberately to the fuel",
            ],
            answerIndex: 2,
            explanation: "At the very high temperatures inside an engine, atmospheric nitrogen and oxygen react: N₂ + O₂ → 2NO. This is not from the fuel; it is the air drawn into the engine. Sulfur gives SO₂, not NOₓ.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "core",
            hints: [
              "Where do the nitrogen and oxygen come from — the fuel or the air?",
              "What condition inside an engine overcomes the very high activation energy?",
            ],
          },
          {
            id: "chem-environment-bm2-05",
            question: "Which adverse effect is caused mainly by particulates (PM)?",
            options: [
              "Binding to haemoglobin and preventing oxygen transport",
              "Respiratory and cardiovascular disease from particles lodging in the lungs",
              "Acid rain that dissolves limestone",
              "The greenhouse effect",
            ],
            answerIndex: 1,
            explanation: "Fine particulates (e.g. PM2.5) penetrate deep into the lungs, causing respiratory and heart disease, and reduce visibility. Haemoglobin binding is CO; acid rain is SO₂/NOₓ; the greenhouse effect is CO₂/CH₄.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "core",
            hints: [
              "Particulates are tiny solids — where do they end up when inhaled?",
              "Match each effect to its specific pollutant.",
            ],
          },
          {
            id: "chem-environment-bm2-06",
            question: "Why is nitrogen relatively unreactive at room temperature?",
            options: [
              "It is a noble gas with a full outer shell",
              "Its molecules are too large to react",
              "It has a very strong N≡N triple bond that is hard to break",
              "It is denser than oxygen",
            ],
            answerIndex: 2,
            explanation: "N₂ has a very strong triple bond (≈945 kJ/mol), one of the strongest covalent bonds, so a large activation energy is needed to make it react. Nitrogen is not a noble gas; molecular size and density are irrelevant to its low reactivity.",
            guideRef: "Composition of Clean Dry Air",
            difficulty: "core",
            hints: [
              "What kind of bond holds the two N atoms together?",
              "Strong bonds mean a high activation energy — how does that affect reactivity?",
            ],
          },
          {
            id: "chem-environment-bm2-07",
            question: "A catalytic converter is fitted to a car exhaust. Which reaction does it carry out, and which catalysts does it use?",
            options: [
              "2CO + 2NO → 2CO₂ + N₂, using platinum and rhodium",
              "S + O₂ → SO₂, using iron",
              "N₂ + O₂ → 2NO, using nickel",
              "CaCO₃ → CaO + CO₂, using vanadium(V) oxide",
            ],
            answerIndex: 0,
            explanation: "Catalytic converters use platinum and rhodium to convert toxic CO and NOₓ into harmless CO₂ and N₂: 2CO + 2NO → 2CO₂ + N₂. The other reactions are unrelated to the converter's role.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "core",
            hints: [
              "A converter removes pollutants — it should not create NO.",
              "Recall the precious-metal catalysts named for converters.",
            ],
          },
          {
            id: "chem-environment-bm2-08",
            question: "The volume of clean dry air in a sealed syringe is passed repeatedly over heated copper until no further change occurs. Copper reacts with oxygen only. If the starting volume was 100 cm³, what volume of gas would remain?",
            options: ["79 cm³", "21 cm³", "100 cm³", "0 cm³"],
            answerIndex: 0,
            explanation: "Heated copper removes the oxygen (≈21%) by forming copper(II) oxide. The remaining gas is mostly nitrogen plus argon and CO₂, ≈79% of 100 cm³ = 79 cm³. This is the classic experiment proving air is ~21% oxygen.",
            guideRef: "Composition of Clean Dry Air",
            difficulty: "challenge",
            hints: [
              "Which gas does the copper remove?",
              "What fraction of air is oxygen?",
              "Subtract the oxygen volume from the total.",
            ],
            strategy: "Use the percentage composition of air to calculate the residual volume",
          },
          {
            id: "chem-environment-bm2-09",
            question: "A town replaces all petrol/diesel cars with electric cars but keeps its coal-fired power station. Which pollutant is LEAST likely to fall significantly?",
            options: [
              "Carbon monoxide (CO)",
              "Oxides of nitrogen (NOₓ) from vehicles",
              "Sulfur dioxide (SO₂)",
              "Vehicle particulates",
            ],
            answerIndex: 2,
            explanation: "Removing vehicles cuts CO, vehicle NOₓ, and vehicle particulates. But SO₂ comes from sulfur in the coal burned at the power station, which still operates — so SO₂ is least likely to fall significantly.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "challenge",
            hints: [
              "Which pollutants come mainly from car engines?",
              "Which pollutant comes from sulfur impurities in coal?",
              "What is still running in this town?",
            ],
            strategy: "Separate vehicle sources from power-station sources before judging the change",
          },
          {
            id: "chem-environment-bm2-10",
            question: "Catalytic converters only work effectively once the engine has warmed up (above ~300 °C). What is the main environmental implication of this fact?",
            options: [
              "Converters increase fuel consumption when cold",
              "Pollutant emissions are higher during the first minutes of a cold-start journey",
              "Converters release CO when cold",
              "Cold converters produce more CO₂ than warm ones",
            ],
            answerIndex: 1,
            explanation: "Before the converter reaches its operating temperature it cannot catalyse the conversion of CO and NOₓ, so emissions of these pollutants spike during cold starts. This is a key argument for hybrids/electric drive at low speeds.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "challenge",
            hints: [
              "If the catalyst is inactive when cold, what happens to untreated exhaust gases?",
              "Think about the start of a short journey from cold.",
            ],
            strategy: "Link the temperature requirement of a catalyst to real-world emission timing",
          },
        ],
      },
      {
        id: "chem-environment-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Ten multiple-choice questions on acid rain and the greenhouse effect.",
        questions: [
          {
            id: "chem-environment-bm3-01",
            question: "Acid rain is generally defined as rain with a pH:",
            options: ["above 7", "exactly 7", "below 5.6", "below 0"],
            answerIndex: 2,
            explanation: "Natural rain is slightly acidic (~pH 5.6) because of dissolved CO₂. Acid rain is precipitation with a pH significantly below 5.6, caused by SO₂ and NOₓ forming strong acids.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm3-02",
            question: "Which two gases are the main causes of acid rain?",
            options: [
              "CO₂ and CH₄",
              "SO₂ and NOₓ",
              "CO and O₂",
              "N₂ and Ar",
            ],
            answerIndex: 1,
            explanation: "Sulfur dioxide forms sulfuric acid and oxides of nitrogen form nitric acid in rain. CO₂/CH₄ are greenhouse gases; CO is toxic but not a major acid-rain gas; N₂ and Ar are unreactive.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm3-03",
            question: "Which sequence correctly shows the formation of sulfuric acid in rain?",
            options: [
              "S → H₂SO₄ → SO₂ → SO₃",
              "S → SO₂ → SO₃ → H₂SO₄",
              "SO₃ → SO₂ → S → H₂SO₄",
              "SO₂ → H₂SO₄ → SO₃ → S",
            ],
            answerIndex: 1,
            explanation: "Sulfur burns to SO₂ (S + O₂ → SO₂), which is oxidised to SO₃ (2SO₂ + O₂ → 2SO₃), which dissolves in rain to give H₂SO₄ (SO₃ + H₂O → H₂SO₄).",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "core",
            hints: [
              "Start with elemental sulfur burning in the fuel.",
              "Each step adds oxygen, ending with water to make the acid.",
            ],
          },
          {
            id: "chem-environment-bm3-04",
            question: "Acid rain damages a marble (CaCO₃) statue. Which products form when CaCO₃ reacts with sulfuric acid?",
            options: [
              "CaSO₄ + H₂O + CO₂",
              "CaSO₃ + H₂",
              "CaO + SO₂",
              "Ca(OH)₂ + CO₂",
            ],
            answerIndex: 0,
            explanation: "Carbonate + acid → salt + water + carbon dioxide. With sulfuric acid: CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂. The other options are not the products of an acid–carbonate reaction.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "core",
            hints: [
              "Recall the general pattern: acid + carbonate → ?",
              "The salt from sulfuric acid contains the sulfate ion.",
            ],
          },
          {
            id: "chem-environment-bm3-05",
            question: "In the greenhouse effect, what type of radiation do greenhouse gases mainly absorb?",
            options: [
              "Incoming ultraviolet radiation",
              "Incoming visible light",
              "Outgoing infrared radiation",
              "Outgoing X-rays",
            ],
            answerIndex: 2,
            explanation: "Short-wavelength solar radiation passes through and warms the surface; Earth re-radiates longer-wavelength infrared. Greenhouse gases absorb this outgoing infrared and re-radiate it, warming the surface.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "core",
            hints: [
              "What wavelength does a warm surface emit?",
              "Sunlight comes in short; Earth radiates out long.",
            ],
          },
          {
            id: "chem-environment-bm3-06",
            question: "Which pair are the two greenhouse gases you must know for IGCSE?",
            options: [
              "Carbon dioxide and methane",
              "Nitrogen and oxygen",
              "Sulfur dioxide and carbon monoxide",
              "Argon and water vapour",
            ],
            answerIndex: 0,
            explanation: "At IGCSE the key greenhouse gases are carbon dioxide (CO₂) and methane (CH₄). N₂ and O₂ are not greenhouse gases; SO₂ and CO are pollutants but not the named GHGs here.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm3-07",
            question: "Which of these is a major source of methane emissions?",
            options: [
              "Burning sulfur-rich coal",
              "Cattle digestion (enteric fermentation) and landfill decomposition",
              "Lightning strikes",
              "Catalytic converters",
            ],
            answerIndex: 1,
            explanation: "Methane is released by anaerobic decomposition of organic matter — in cattle digestion, landfill sites, wetlands, and rice paddies — and from natural gas leaks. Coal burning gives SO₂/CO₂; lightning gives NOₓ.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "core",
            hints: [
              "Methane comes from biological decay, not combustion.",
              "Think of farms and rubbish tips.",
            ],
          },
          {
            id: "chem-environment-bm3-08",
            question: "Why are N₂ and O₂ NOT greenhouse gases, while CO₂ is?",
            options: [
              "N₂ and O₂ are too heavy to rise into the atmosphere",
              "N₂ and O₂ lack the IR-active vibrational modes that CO₂ has",
              "N₂ and O₂ react with sunlight before reaching the upper atmosphere",
              "CO₂ is denser, so it traps more heat by sinking",
            ],
            answerIndex: 1,
            explanation: "CO₂ has bond vibrations (bending/asymmetric stretching) that change its dipole and absorb infrared. Symmetric diatomic N₂ and O₂ have no such IR-active modes, so they cannot absorb the outgoing infrared and are not greenhouse gases.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "challenge",
            hints: [
              "Greenhouse behaviour depends on absorbing infrared, which needs a changing dipole.",
              "Compare the vibrations of a symmetric diatomic molecule with a triatomic one.",
            ],
            strategy: "Link molecular structure to infrared absorption",
          },
          {
            id: "chem-environment-bm3-09",
            question: "A city replaces a coal power station with a gas (methane) power station. Per unit of energy, methane combustion releases less CO₂ and almost no SO₂. Which is the BEST overall environmental judgement?",
            options: [
              "It is fully sustainable because no greenhouse gases are produced",
              "Acid rain risk falls and CO₂ per unit energy falls, but it still emits CO₂ and methane leaks are a concern",
              "It is worse for climate change because methane is a greenhouse gas",
              "There is no environmental difference between coal and gas",
            ],
            answerIndex: 1,
            explanation: "Switching coal → gas cuts SO₂ (less acid rain) and lowers CO₂ per unit energy, a real improvement. But combustion still emits CO₂, and leaked unburnt methane is a potent greenhouse gas — so it is better, not a complete solution.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "challenge",
            hints: [
              "List the benefits (SO₂, CO₂) and the remaining problems (still CO₂, leaks).",
              "A balanced judgement avoids 'fully sustainable' and 'no difference'.",
            ],
            strategy: "Weigh benefits against residual drawbacks for a balanced evaluation",
          },
          {
            id: "chem-environment-bm3-10",
            question: "Which combination of measures would most effectively reduce BOTH acid rain and the enhanced greenhouse effect?",
            options: [
              "Adding limestone to lakes and planting more crops",
              "Flue-gas desulfurisation plus a switch to renewable energy",
              "Fitting catalytic converters and increasing coal use",
              "Using low-sulfur fuel and burning more wood",
            ],
            answerIndex: 1,
            explanation: "FGD removes SO₂ (cutting acid rain) and renewables produce no combustion CO₂ (cutting greenhouse emissions), so together they tackle both problems. Liming treats only the symptom; increasing coal or burning more wood raises CO₂/particulates.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "challenge",
            hints: [
              "Which measure targets SO₂ at the source?",
              "Which measure avoids producing CO₂ altogether?",
              "Reject any option that increases combustion.",
            ],
            strategy: "Choose measures that address the root cause of each problem simultaneously",
          },
        ],
      },
      {
        id: "chem-environment-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Ten multiple-choice questions on fertilisers, eutrophication, and synoptic environmental chemistry.",
        questions: [
          {
            id: "chem-environment-bm4-01",
            question: "Which three elements are supplied by NPK fertilisers?",
            options: [
              "Nitrogen, phosphorus, potassium",
              "Nitrogen, phosphorus, potassium oxide only",
              "Sodium, phosphorus, potassium",
              "Nitrogen, phosphorus, calcium",
            ],
            answerIndex: 0,
            explanation: "NPK stands for the three macronutrients nitrogen (N), phosphorus (P) and potassium (K). Sodium and calcium are not the NPK elements.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm4-02",
            question: "Which compound is a common nitrogen fertiliser?",
            options: [
              "Calcium carbonate (CaCO₃)",
              "Ammonium nitrate (NH₄NO₃)",
              "Sodium chloride (NaCl)",
              "Copper(II) sulfate (CuSO₄)",
            ],
            answerIndex: 1,
            explanation: "Ammonium nitrate (NH₄NO₃) is a widely used nitrogen fertiliser, supplying nitrogen in both ammonium and nitrate forms. CaCO₃, NaCl and CuSO₄ are not nitrogen fertilisers.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bm4-03",
            question: "In eutrophication, what is the immediate cause of fish death?",
            options: [
              "Toxicity of nitrate ions",
              "Depletion of dissolved oxygen",
              "Increased acidity",
              "Rising water temperature",
            ],
            answerIndex: 1,
            explanation: "Fish die because aerobic bacteria decomposing dead algae consume the dissolved oxygen, causing the fish to suffocate. Nitrate ions are not directly toxic at typical levels; acidity and temperature are not the eutrophication mechanism.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "core",
            hints: [
              "What do decomposer bacteria use up as they break down dead algae?",
              "Fish need this gas dissolved in the water.",
            ],
          },
          {
            id: "chem-environment-bm4-04",
            question: "Place the eutrophication steps in the correct order: 1 algal bloom, 2 excess nitrate enters water, 3 oxygen depleted, 4 plants die and bacteria decompose them.",
            options: [
              "2 → 1 → 4 → 3",
              "1 → 2 → 3 → 4",
              "2 → 4 → 1 → 3",
              "3 → 2 → 1 → 4",
            ],
            answerIndex: 0,
            explanation: "Excess nitrate enters (2) → algal bloom forms and blocks light (1) → submerged plants die and bacteria decompose them (4) → dissolved oxygen is consumed (3), killing aquatic life.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "core",
            hints: [
              "What starts the whole chain — the nutrient input or the algae?",
              "Decomposition must happen before oxygen runs out.",
            ],
          },
          {
            id: "chem-environment-bm4-05",
            question: "Why is leaching of fertilisers into rivers a problem?",
            options: [
              "It directly poisons fish with ammonia",
              "It supplies excess nutrients that trigger eutrophication",
              "It raises the river temperature",
              "It removes all nitrogen from the soil immediately",
            ],
            answerIndex: 1,
            explanation: "Leaching washes dissolved nitrate/phosphate into waterways, supplying excess nutrients that cause algal blooms and the eutrophication chain leading to oxygen depletion. It is the nutrient enrichment, not direct poisoning or temperature change, that matters.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "core",
            hints: [
              "What do fertilisers add to the water?",
              "Link 'excess nutrients' to the process they cause.",
            ],
          },
          {
            id: "chem-environment-bm4-06",
            question: "Which measure would best reduce eutrophication from a farm beside a river?",
            options: [
              "Applying more fertiliser to boost crop uptake",
              "Leaving a buffer strip of vegetation between fields and the river",
              "Watering the fields just before heavy rain",
              "Switching to a fertiliser with more phosphate",
            ],
            answerIndex: 1,
            explanation: "A vegetation buffer strip absorbs nutrient run-off before it reaches the river, reducing leaching. Applying more fertiliser, watering before rain, or adding more phosphate all increase nutrient run-off and worsen eutrophication.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "core",
            hints: [
              "You want to stop nutrients reaching the water.",
              "Which option intercepts run-off rather than adding nutrients?",
            ],
          },
          {
            id: "chem-environment-bm4-07",
            question: "The relative formula mass of ammonium nitrate, NH₄NO₃, is 80. What is the percentage by mass of nitrogen? (Ar: N = 14, H = 1, O = 16)",
            options: ["17.5%", "28%", "35%", "52.5%"],
            answerIndex: 2,
            explanation: "NH₄NO₃ contains 2 N atoms: mass of N = 2 × 14 = 28. Percentage N = (28 / 80) × 100 = 35%. This high nitrogen content is why ammonium nitrate is a valued fertiliser.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "challenge",
            hints: [
              "How many nitrogen atoms are in NH₄NO₃?",
              "Total mass of N = number of N × 14.",
              "Percentage = (mass of N ÷ 80) × 100.",
            ],
            strategy: "Count atoms of the element, then divide by the relative formula mass",
          },
          {
            id: "chem-environment-bm4-08",
            question: "Ammonia (NH₃) is neutralised by nitric acid to make the fertiliser ammonium nitrate. Which equation correctly represents this reaction?",
            options: [
              "NH₃ + HNO₃ → NH₄NO₃",
              "2NH₃ + H₂SO₄ → (NH₄)₂SO₄",
              "NH₃ + HCl → NH₄Cl",
              "NH₄NO₃ → N₂O + 2H₂O",
            ],
            answerIndex: 0,
            explanation: "Ammonia + nitric acid → ammonium nitrate: NH₃ + HNO₃ → NH₄NO₃. The atoms balance directly. The other equations make different salts or describe thermal decomposition, not this neutralisation.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "challenge",
            hints: [
              "Acid + base (ammonia) → a salt only (no water, since ammonia is the base here).",
              "Combine NH₃ with HNO₃ and check each atom balances.",
            ],
            strategy: "Identify the acid and base, then combine to form the named salt",
          },
          {
            id: "chem-environment-bm4-09",
            question: "A lake suffering eutrophication has a foul smell of rotten eggs at depth. Which statement best explains this synoptically?",
            options: [
              "Photosynthesis at depth releases hydrogen sulfide",
              "Oxygen has been depleted, so anaerobic decomposition produces H₂S and CH₄",
              "Dissolved nitrate has been reduced to ammonia by sunlight",
              "Acid rain has reacted with limestone in the lake bed",
            ],
            answerIndex: 1,
            explanation: "Once dissolved oxygen is exhausted, decomposition becomes anaerobic, producing gases such as hydrogen sulfide (rotten-egg smell) and methane. Photosynthesis needs light (absent at depth) and produces O₂, not H₂S.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "challenge",
            hints: [
              "Rotten-egg smell is hydrogen sulfide — does its formation need oxygen?",
              "Once O₂ is gone, what kind of decomposition takes over?",
            ],
            strategy: "Trace the chain past oxygen depletion to anaerobic products",
          },
          {
            id: "chem-environment-bm4-10",
            question: "Which single human activity contributes to acid rain, the enhanced greenhouse effect, AND particulate pollution at the same time?",
            options: [
              "Spreading nitrogen fertiliser on fields",
              "Burning coal that contains sulfur in a power station",
              "Chlorinating drinking water",
              "Adding limestone to acidified lakes",
            ],
            answerIndex: 1,
            explanation: "Burning sulfur-containing coal releases SO₂ (→ acid rain), CO₂ (→ enhanced greenhouse effect) and particulates/soot from incomplete combustion — all three at once. Fertiliser causes eutrophication; chlorination and liming do not produce these pollutants.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "challenge",
            hints: [
              "Which activity is a combustion process involving sulfur and carbon?",
              "List what coal burning emits: SO₂, CO₂, soot.",
            ],
            strategy: "Find the source whose products span all three named problems",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "chem-environment-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Ten structured questions on water tests, purity, and water treatment.",
        questions: [
          {
            id: "chem-environment-bq1-01",
            question: "State the colour change seen when anhydrous copper(II) sulfate is added to water, and write a word equation for the change. [2 marks]",
            marks: 2,
            modelAnswer: "The white anhydrous copper(II) sulfate turns blue. Word equation: anhydrous copper(II) sulfate + water → hydrated copper(II) sulfate.",
            markScheme: [
              "White → blue [1]",
              "anhydrous copper(II) sulfate + water → hydrated copper(II) sulfate [1]",
            ],
            commonError: "Stating the change as blue → white (that is the reverse, dehydration) or confusing it with the cobalt chloride pink colour.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bq1-02",
            question: "Explain the difference between testing for the PRESENCE of water and testing for the PURITY of water. Give one method for each. [4 marks]",
            marks: 4,
            modelAnswer: "Testing for presence shows only that water is there; it does not show whether anything is dissolved in it. A presence test is adding anhydrous copper(II) sulfate (white → blue) or using cobalt(II) chloride paper (blue → pink). Testing for purity checks whether the water contains dissolved substances. A purity test is measuring the boiling point: pure water boils at exactly 100 °C at standard pressure, while an impure (e.g. salty) sample boils above 100 °C. So a positive chemical test plus a boiling point of exactly 100 °C is needed to show pure water.",
            markScheme: [
              "Presence test only shows water is present / not whether pure [1]",
              "Named presence test: anhydrous CuSO₄ white→blue OR cobalt chloride paper blue→pink [1]",
              "Purity test: measure boiling point (or melting point) [1]",
              "Pure water boils at exactly 100 °C at standard pressure / impurities raise it [1]",
            ],
            commonError: "Suggesting 'filtering' as a purity test — filtration only removes suspended solids, not dissolved impurities.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "core",
            hints: [
              "Presence and purity are two different questions.",
              "Chemical reagents detect water molecules; what physical measurement detects dissolved solutes?",
            ],
          },
          {
            id: "chem-environment-bq1-03",
            question: "A sample of water boils at 101 °C and freezes at -1 °C at standard pressure. State whether it is pure and explain your answer in terms of dissolved impurities. [3 marks]",
            marks: 3,
            modelAnswer: "The water is impure. Pure water boils at exactly 100 °C and freezes at exactly 0 °C at standard pressure. This sample boils above 100 °C and freezes below 0 °C. Dissolved impurities raise the boiling point and lower the freezing/melting point, so the deviations from 100 °C and 0 °C show that solutes are dissolved in the water.",
            markScheme: [
              "Sample is impure [1]",
              "Pure water boils at 100 °C and freezes at 0 °C (reference values) [1]",
              "Dissolved impurities raise boiling point and lower freezing point [1]",
            ],
            commonError: "Saying the impurities lower the boiling point — they raise it; impurities lower the freezing point, not raise it.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "core",
            hints: [
              "Compare each value to the value for pure water.",
              "State the direction of the effect of impurities on each value.",
            ],
          },
          {
            id: "chem-environment-bq1-04",
            question: "Describe the TWO main stages used to treat reservoir water for the domestic supply, and state the purpose of each. [4 marks]",
            marks: 4,
            modelAnswer: "Stage 1 — Filtration: the water is passed through beds of fine sand and gravel. This removes suspended solid particles and some larger microorganisms. Stage 2 — Chlorination: a carefully controlled amount of chlorine is dissolved in the water. Chlorine is an oxidising agent that kills harmful bacteria and other pathogens, making the water safe (potable) to drink.",
            markScheme: [
              "Filtration through sand/gravel [1]",
              "Purpose: removes suspended solids / particles / microorganisms [1]",
              "Chlorination: adding chlorine [1]",
              "Purpose: kills bacteria / pathogens / makes water safe [1]",
            ],
            commonError: "Saying filtration kills bacteria — it does not; only chlorination does that.",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bq1-05",
            question: "Distillation produces very pure water. Explain why it is NOT used to treat the public water supply, and give one situation where distilled water IS needed. [3 marks]",
            marks: 3,
            modelAnswer: "Distillation involves boiling and condensing large volumes of water, which requires a great deal of energy and is therefore very expensive on the scale needed for a public supply; filtration plus chlorination is far cheaper. Distilled water is needed where dissolved ions must be absent — for example in car/steam batteries and boilers, or for making up chemical solutions in a laboratory.",
            markScheme: [
              "Distillation is too energy-intensive / expensive on large scale [1]",
              "Filtration + chlorination is cheaper / practical alternative [1]",
              "One valid use of distilled water (batteries / boilers / lab solutions) [1]",
            ],
            commonError: "Claiming distillation does not remove bacteria or salts — it removes both; the issue is cost/energy.",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "core",
            hints: [
              "Think about the energy needed to boil millions of litres.",
              "Where would even traces of dissolved ions cause a problem?",
            ],
          },
          {
            id: "chem-environment-bq1-06",
            question: "Cobalt(II) chloride paper is used to detect moisture in a stream of gas. (a) State the colour change observed if the gas is damp. [1] (b) Explain why this is a test for presence of water and not for purity. [2]",
            marks: 3,
            modelAnswer: "(a) The paper changes from blue (dry) to pink (when water/moisture is present). (b) The colour change only tells you that water molecules are present in the gas. It gives no information about what else might be dissolved or mixed in, so it cannot show whether the water is pure — it confirms presence only.",
            markScheme: [
              "(a) blue → pink [1]",
              "(b) test only shows water is present [1]",
              "(b) gives no information about dissolved impurities / purity [1]",
            ],
            commonError: "Stating the dry paper is pink; it is blue when dry and pink when wet.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "core",
            hints: [
              "Recall the dry and wet colours of cobalt chloride paper.",
              "What does detecting water molecules tell you about other dissolved substances?",
            ],
          },
          {
            id: "chem-environment-bq1-07",
            question: "The white-to-blue change of anhydrous copper(II) sulfate can be reversed. (a) Describe how to reverse it. [1] (b) Write the balanced symbol equation, with state symbols, for the hydration of anhydrous copper(II) sulfate. [2]",
            marks: 3,
            modelAnswer: "(a) Gently heat the blue hydrated copper(II) sulfate; this drives off the water as vapour and leaves the white anhydrous form. (b) CuSO₄(s) + 5H₂O(l) → CuSO₄·5H₂O(s).",
            markScheme: [
              "(a) heat the hydrated salt to drive off water [1]",
              "(b) correct formulae CuSO₄ + 5H₂O → CuSO₄·5H₂O [1]",
              "(b) correct state symbols (s, l, s) [1]",
            ],
            commonError: "Omitting the 5H₂O or writing the wrong water of crystallisation; forgetting state symbols.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "core",
            hints: [
              "How do you remove water from a hydrated salt?",
              "Hydrated copper sulfate is the pentahydrate — how many waters?",
            ],
            solutions: [
              {
                label: "Building the equation",
                steps: [
                  "Reactant: anhydrous salt CuSO₄(s) (white)",
                  "Add 5 water molecules per formula unit: 5H₂O(l)",
                  "Product: hydrated (blue) salt CuSO₄·5H₂O(s)",
                  "Equation: CuSO₄(s) + 5H₂O(l) → CuSO₄·5H₂O(s)",
                  "Check: 1 Cu, 1 S, and O: 4 + 5 = 9 each side; H: 10 each side ✓",
                ],
              },
            ],
          },
          {
            id: "chem-environment-bq1-08",
            question: "Explain, in terms of particles, why dissolved salt raises the boiling point of water above 100 °C. [3 marks]",
            marks: 3,
            modelAnswer: "Dissolved salt particles (ions) are spread through the water and reduce the proportion of water molecules at the surface that can escape, lowering the vapour pressure of the water at a given temperature. To make the vapour pressure equal to atmospheric pressure (the condition for boiling), the solution must be heated to a higher temperature than 100 °C. This boiling-point elevation increases with the amount of dissolved solute.",
            markScheme: [
              "Dissolved particles/ions lower the (vapour) pressure / hinder water molecules escaping [1]",
              "A higher temperature is needed to reach atmospheric pressure / to boil [1]",
              "Therefore boiling point is raised above 100 °C / effect increases with solute amount [1]",
            ],
            commonError: "Saying salt 'adds energy' or 'makes water heavier' — the correct idea is reduced escape of water molecules / lowered vapour pressure.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "challenge",
            hints: [
              "Boiling occurs when vapour pressure equals atmospheric pressure.",
              "How do dissolved particles affect water molecules escaping at the surface?",
              "If escape is reduced, what must you do to reach boiling?",
            ],
          },
          {
            id: "chem-environment-bq1-09",
            question: "A factory's steam boiler is damaged by scale and corrosion when filtered, chlorinated tap water is used. (a) Explain why tap water still contains dissolved substances after treatment. [2] (b) Recommend a treatment that would give suitable boiler water and justify it. [2]",
            marks: 4,
            modelAnswer: "(a) Filtration only removes suspended solids and chlorination only kills bacteria; neither process removes substances that are dissolved as ions (such as calcium and magnesium salts). So dissolved minerals remain in the treated tap water and form scale or cause corrosion in the boiler. (b) Distillation (or deionisation) should be used: boiling the water and condensing the vapour leaves the non-volatile dissolved ions behind, producing water essentially free of dissolved salts. This prevents scale and corrosion in the boiler.",
            markScheme: [
              "(a) filtration removes only suspended solids / chlorination only kills bacteria [1]",
              "(a) dissolved ions/salts are not removed by these steps [1]",
              "(b) distillation (or deionisation) recommended [1]",
              "(b) justification: removes dissolved ions, leaving pure water / prevents scale [1]",
            ],
            commonError: "Recommending 'more filtration' — filters cannot remove dissolved ions.",
            guideRef: "Treatment of the Domestic Water Supply",
            difficulty: "challenge",
            hints: [
              "Which kind of impurity (suspended or dissolved) survives filtration and chlorination?",
              "What separation method removes non-volatile dissolved solids from water?",
            ],
            strategy: "Match the impurity type (dissolved vs suspended) to the right separation method",
          },
          {
            id: "chem-environment-bq1-10",
            question: "A student writes: 'If a liquid turns cobalt chloride paper pink and boils at 100 °C, it must be pure water.' Evaluate this statement, identifying any flaw and the conditions under which the conclusion is valid. [4 marks]",
            marks: 4,
            modelAnswer: "The cobalt chloride test correctly confirms that water is present (blue → pink). Boiling at 100 °C suggests purity, but the conclusion is only valid if the boiling point is measured precisely at standard atmospheric pressure, because pressure affects boiling point — at lower pressure (e.g. high altitude) even pure water boils below 100 °C and an impure sample might appear to boil at 100 °C. Provided the pressure is standard and the temperature is measured accurately as exactly 100 °C, the statement is reasonable: the cobalt test shows water and the exact boiling point shows purity. The flaw is failing to state 'at standard pressure' and assuming a single test of presence proves purity by itself.",
            markScheme: [
              "Cobalt chloride result correctly confirms presence of water [1]",
              "Boiling point only indicates purity if measured at standard pressure [1]",
              "Pressure affects boiling point (e.g. altitude lowers it) — could mislead [1]",
              "Valid conclusion only with exact 100 °C at standard pressure / both presence and purity considered [1]",
            ],
            commonError: "Either accepting the statement uncritically or rejecting it entirely; the nuance is the need to specify standard pressure and accurate measurement.",
            guideRef: "Testing for Water and Its Purity",
            difficulty: "challenge",
            hints: [
              "Is the cobalt chloride part correct?",
              "What external condition must be fixed for boiling point to indicate purity?",
              "Think about how altitude changes boiling point.",
            ],
            strategy: "Evaluate a claim by checking each sub-claim and the hidden assumptions",
          },
        ],
      },
      {
        id: "chem-environment-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Ten structured questions on the composition of air and air pollutants.",
        questions: [
          {
            id: "chem-environment-bq2-01",
            question: "State the approximate composition of clean dry air by volume, naming the gases and their percentages. [3 marks]",
            marks: 3,
            modelAnswer: "Clean dry air is approximately 78% nitrogen (N₂), 21% oxygen (O₂), about 1% argon (and other noble gases), and about 0.04% carbon dioxide (CO₂).",
            markScheme: [
              "Nitrogen ~78% [1]",
              "Oxygen ~21% [1]",
              "Argon ~1% AND carbon dioxide ~0.04% [1]",
            ],
            commonError: "Including water vapour in 'clean dry air' (it is dry by definition) or swapping the N₂ and O₂ percentages.",
            guideRef: "Composition of Clean Dry Air",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bq2-02",
            question: "Carbon monoxide is a dangerous pollutant. (a) State how it is formed. [1] (b) Explain why it is toxic to humans. [2]",
            marks: 3,
            modelAnswer: "(a) Carbon monoxide is formed by the incomplete combustion of carbon-containing fuels (when there is insufficient oxygen). (b) CO binds to haemoglobin in red blood cells, forming carboxyhaemoglobin. This binding is very strong, so the haemoglobin can no longer carry oxygen around the body, starving tissues of oxygen — which can be fatal.",
            markScheme: [
              "(a) incomplete combustion of carbon-containing fuel / limited oxygen [1]",
              "(b) CO binds to haemoglobin (forms carboxyhaemoglobin) [1]",
              "(b) prevents haemoglobin carrying oxygen / oxygen transport blocked [1]",
            ],
            commonError: "Saying CO 'replaces oxygen in the lungs' rather than binding to haemoglobin and blocking oxygen transport.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bq2-03",
            question: "Oxides of nitrogen (NOₓ) are produced in car engines. (a) Write a balanced equation for the formation of nitrogen monoxide in an engine. [1] (b) Explain why this reaction occurs in engines but not in air at room temperature. [2]",
            marks: 3,
            modelAnswer: "(a) N₂ + O₂ → 2NO. (b) The reaction has a very high activation energy because the N≡N triple bond is extremely strong. Inside an engine, combustion temperatures are very high (over 2000 °C), providing enough energy to overcome this activation energy. At room temperature there is insufficient energy, so the reaction is negligibly slow.",
            markScheme: [
              "(a) N₂ + O₂ → 2NO (balanced) [1]",
              "(b) reaction needs high activation energy / strong N≡N bond [1]",
              "(b) engine's high temperature supplies the energy; room temperature does not [1]",
            ],
            commonError: "Writing N₂ + O₂ → NO₂ directly, or forgetting to balance to 2NO.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "core",
            hints: [
              "The product is nitrogen monoxide, NO — balance N and O.",
              "Why does a strong triple bond need high temperature to react?",
            ],
          },
          {
            id: "chem-environment-bq2-04",
            question: "Describe how a catalytic converter reduces the pollutants from a car exhaust. Include a balanced equation and name the catalysts used. [4 marks]",
            marks: 4,
            modelAnswer: "A catalytic converter contains a honeycomb coated with platinum and rhodium catalysts, giving a large surface area. As the hot exhaust gases pass over it, the toxic carbon monoxide and oxides of nitrogen react together on the catalyst surface and are converted to harmless gases: 2CO + 2NO → 2CO₂ + N₂. This removes both CO and NOₓ, releasing carbon dioxide and nitrogen instead.",
            markScheme: [
              "Catalysts: platinum and rhodium (Pt/Rh) [1]",
              "Large surface area / exhaust gases pass over catalyst [1]",
              "Converts CO and NOₓ to harmless products [1]",
              "Balanced equation: 2CO + 2NO → 2CO₂ + N₂ [1]",
            ],
            commonError: "Writing an unbalanced equation, or claiming the converter removes particulates or SO₂ (it does not).",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "core",
            hints: [
              "Which two pollutants does the converter act on?",
              "Balance: 2CO + 2NO → ? + ?",
              "Name the precious-metal catalysts.",
            ],
          },
          {
            id: "chem-environment-bq2-05",
            question: "Particulates (PM2.5) are a serious air pollutant. (a) State one source of particulates. [1] (b) Describe two harmful effects of particulates. [2]",
            marks: 3,
            modelAnswer: "(a) Incomplete combustion of diesel/wood/coal (soot), or volcanic eruptions/dust. (b) Effect 1: fine particles are inhaled and lodge deep in the lungs, causing respiratory disease and contributing to heart disease. Effect 2: they reduce visibility and can block sunlight (haze); they may also carry toxic compounds into the lungs.",
            markScheme: [
              "(a) one valid source: incomplete combustion / diesel / soot / volcanic dust [1]",
              "(b) effect 1: lung/respiratory disease (particles lodge in lungs) [1]",
              "(b) effect 2: heart disease / reduced visibility / carry toxins [1]",
            ],
            commonError: "Confusing particulate effects with acid rain or CO toxicity; particulates are solid particles causing physical lung damage.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "core",
            hints: [
              "Particulates are tiny solids — what produces soot?",
              "Where do inhaled fine particles end up?",
            ],
          },
          {
            id: "chem-environment-bq2-06",
            question: "Explain why nitrogen makes up most of the atmosphere yet is relatively unreactive. [3 marks]",
            marks: 3,
            modelAnswer: "Nitrogen exists as N₂ molecules held together by a very strong triple covalent bond (N≡N), with a bond energy of about 945 kJ/mol — one of the strongest covalent bonds. Breaking this bond needs a large amount of energy (a high activation energy), so at ordinary temperatures nitrogen reacts very slowly. This kinetic stability means it remains in the atmosphere without being consumed by reactions, so it accumulates as the major component (~78%).",
            markScheme: [
              "N₂ has a strong triple bond (N≡N) [1]",
              "Large bond energy / high activation energy needed to react [1]",
              "Reacts very slowly at ordinary temperatures, so persists/accumulates [1]",
            ],
            commonError: "Calling nitrogen a noble gas; it is unreactive due to its strong triple bond, not a full outer shell.",
            guideRef: "Composition of Clean Dry Air",
            difficulty: "core",
            hints: [
              "What type of bond is in an N₂ molecule?",
              "Link bond strength to activation energy and reaction rate.",
            ],
          },
          {
            id: "chem-environment-bq2-07",
            question: "In a classic experiment, 120 cm³ of air is passed repeatedly over heated copper until no further volume change occurs; 95 cm³ of gas remains. (a) Explain what the copper removes. [1] (b) Calculate the percentage of oxygen in this air sample, showing your working. [2] (c) Comment on whether the result agrees with the accepted value. [1]",
            marks: 4,
            modelAnswer: "(a) The heated copper removes the oxygen from the air by reacting with it to form copper(II) oxide (2Cu + O₂ → 2CuO). (b) Volume of oxygen removed = 120 - 95 = 25 cm³. Percentage of oxygen = (25 / 120) × 100 = 20.8% ≈ 21% (2 s.f.). (c) Yes — 20.8% is very close to the accepted value of about 21%, so the result agrees well.",
            markScheme: [
              "(a) copper removes/reacts with oxygen (forms copper oxide) [1]",
              "(b) oxygen volume = 120 - 95 = 25 cm³ [1]",
              "(b) % oxygen = (25/120) × 100 = 20.8% ≈ 21% [1]",
              "(c) agrees with accepted ~21% [1]",
            ],
            commonError: "Dividing by the remaining volume (95) instead of the original total (120), or forgetting to subtract to find the oxygen volume.",
            guideRef: "Composition of Clean Dry Air",
            difficulty: "challenge",
            hints: [
              "Which gas reacts with hot copper?",
              "Oxygen volume = starting volume - final volume.",
              "Percentage = (oxygen volume ÷ original total) × 100.",
            ],
            solutions: [
              {
                label: "Step-by-step calculation",
                steps: [
                  "Identify the gas removed: oxygen (reacts with Cu to form CuO)",
                  "Volume of oxygen removed = 120 - 95 = 25 cm³",
                  "Percentage = (volume of O₂ ÷ original volume) × 100",
                  "= (25 ÷ 120) × 100 = 20.83...%",
                  "Round to 2 s.f.: 21%, which matches the accepted value",
                ],
              },
            ],
          },
          {
            id: "chem-environment-bq2-08",
            question: "Catalytic converters only function once they reach about 300 °C. (a) Explain why pollutant emissions are higher just after a cold start. [2] (b) Suggest how a hybrid car reduces this problem. [2]",
            marks: 4,
            modelAnswer: "(a) Below its operating temperature the catalyst is inactive, so it cannot speed up the conversion of CO and NOₓ into CO₂ and N₂. During the first minutes after a cold start the exhaust passes through largely untreated, so emissions of these pollutants are higher. (b) A hybrid car can use its electric motor at low speeds and when starting, so the petrol engine runs less (or not at all) during this cold period. This reduces the amount of untreated exhaust produced before the converter warms up, lowering cold-start emissions.",
            markScheme: [
              "(a) catalyst inactive below operating temperature [1]",
              "(a) exhaust passes through untreated, so CO/NOₓ emissions higher [1]",
              "(b) hybrid uses electric motor at start/low speed [1]",
              "(b) so engine runs less while converter is cold / fewer untreated emissions [1]",
            ],
            commonError: "Stating the converter 'breaks' when cold; it is simply inactive until warm.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "challenge",
            hints: [
              "A catalyst needs to be at temperature to work — what happens to exhaust before then?",
              "How can a hybrid avoid running the petrol engine at the start?",
            ],
            strategy: "Connect the catalyst's temperature requirement to when emissions occur",
          },
          {
            id: "chem-environment-bq2-09",
            question: "A city is choosing between (i) requiring catalytic converters on all petrol cars and (ii) banning diesel vehicles. Discuss which policy better reduces carbon monoxide and which better reduces particulates, justifying each choice. [4 marks]",
            marks: 4,
            modelAnswer: "For carbon monoxide, policy (i) is better: catalytic converters directly convert CO into CO₂ (2CO + 2NO → 2CO₂ + N₂), strongly reducing CO from petrol cars, which are the main CO source. For particulates, policy (ii) is better: diesel engines produce far more particulate matter (soot/PM2.5) than petrol engines, and catalytic converters do not remove solid particulates. Banning diesel vehicles therefore cuts particulate emissions much more effectively. So each policy targets a different pollutant best, and a combination would be most effective overall.",
            markScheme: [
              "CO: catalytic converters (policy i) better; converts CO to CO₂ [1]",
              "Justification: petrol cars are main CO source / converter acts on CO [1]",
              "Particulates: diesel ban (policy ii) better; diesel produces most particulates [1]",
              "Justification: converters do not remove particulates [1]",
            ],
            commonError: "Assuming catalytic converters remove particulates — they act on gases (CO, NOₓ), not solid soot.",
            guideRef: "Air Pollutants: Sources and Adverse Effects",
            difficulty: "challenge",
            hints: [
              "What does a catalytic converter act on — gases or solids?",
              "Which engine type produces the most particulates?",
              "Match each policy to the pollutant it controls best.",
            ],
            strategy: "Match each policy to the pollutant whose source it targets",
          },
          {
            id: "chem-environment-bq2-10",
            question: "Burning coal contaminated with sulfur produces several pollutants. (a) Name three different pollutants released and state the harm each causes. [3] (b) For each, suggest one method to reduce its release or impact. [3]",
            marks: 6,
            modelAnswer: "(a) Sulfur dioxide (SO₂): causes acid rain and respiratory damage. Carbon dioxide (CO₂): a greenhouse gas contributing to the enhanced greenhouse effect and climate change. Particulates (soot): cause respiratory and cardiovascular disease and reduce visibility. (b) SO₂: fit flue-gas desulfurisation (FGD) to remove SO₂ from the exhaust gases, or use low-sulfur fuel. CO₂: switch to renewable energy or use carbon capture and storage (CCS). Particulates: fit filters/electrostatic precipitators to the chimney to trap soot, or improve combustion efficiency.",
            markScheme: [
              "(a) SO₂ — acid rain / respiratory damage [1]",
              "(a) CO₂ — greenhouse gas / climate change [1]",
              "(a) particulates — respiratory/heart disease / reduced visibility [1]",
              "(b) SO₂ reduction: FGD / low-sulfur fuel [1]",
              "(b) CO₂ reduction: renewables / CCS [1]",
              "(b) particulate reduction: filters / electrostatic precipitators [1]",
            ],
            commonError: "Listing CO as a coal-power pollutant is acceptable, but pairing each pollutant with the WRONG control (e.g. catalytic converter for SO₂) loses marks; FGD targets SO₂.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "challenge",
            hints: [
              "List the products of burning sulfur-rich coal: from sulfur, from carbon, and solids.",
              "Match each pollutant to a control that targets its source.",
              "FGD is for SO₂; CCS/renewables for CO₂; filters for particulates.",
            ],
            strategy: "Pair each pollutant with a control method that targets its specific source",
          },
        ],
      },
      {
        id: "chem-environment-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Ten structured questions on acid rain and the greenhouse effect.",
        questions: [
          {
            id: "chem-environment-bq3-01",
            question: "State what is meant by 'acid rain' and name the two gases mainly responsible for it. [3 marks]",
            marks: 3,
            modelAnswer: "Acid rain is rain (precipitation) with a pH significantly below 5.6, made acidic by dissolved pollutant gases. The two gases mainly responsible are sulfur dioxide (SO₂) and oxides of nitrogen (NOₓ), which form sulfuric and nitric acids in the rain.",
            markScheme: [
              "Acid rain = precipitation with pH below ~5.6 / abnormally acidic rain [1]",
              "Sulfur dioxide (SO₂) [1]",
              "Oxides of nitrogen (NOₓ) [1]",
            ],
            commonError: "Naming CO₂ as a main cause; CO₂ gives only weakly acidic natural rain, not the damaging acid rain.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bq3-02",
            question: "Sulfur dioxide from a coal-fired power station leads to acid rain. Write the THREE balanced equations for the formation of sulfuric acid, from burning sulfur to the acid in rain. [3 marks]",
            marks: 3,
            modelAnswer: "Step 1: S + O₂ → SO₂. Step 2: 2SO₂ + O₂ → 2SO₃. Step 3: SO₃ + H₂O → H₂SO₄.",
            markScheme: [
              "S + O₂ → SO₂ [1]",
              "2SO₂ + O₂ → 2SO₃ (balanced) [1]",
              "SO₃ + H₂O → H₂SO₄ [1]",
            ],
            commonError: "Forgetting the balancing coefficient in 2SO₂ + O₂ → 2SO₃, or going straight from SO₂ to H₂SO₄.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "core",
            hints: [
              "Start by burning sulfur in the coal.",
              "Oxidise the dioxide to the trioxide (remember to balance).",
              "React the trioxide with water.",
            ],
            solutions: [
              {
                label: "Balancing the three steps",
                steps: [
                  "Step 1: sulfur burns: S + O₂ → SO₂ (1 S, 2 O each side)",
                  "Step 2: oxidation: SO₂ + ½O₂ → SO₃; double to clear the fraction: 2SO₂ + O₂ → 2SO₃",
                  "Check step 2: S 2=2, O 4+2=6 = 2×3 ✓",
                  "Step 3: SO₃ + H₂O → H₂SO₄ (S 1=1, O 3+1=4, H 2=2) ✓",
                ],
              },
            ],
          },
          {
            id: "chem-environment-bq3-03",
            question: "Describe THREE harmful effects of acid rain on the environment or human-made structures. [3 marks]",
            marks: 3,
            modelAnswer: "1. It lowers the pH of lakes and rivers, killing fish and invertebrates (also leaching toxic aluminium ions from soils into the water). 2. It damages forests by leaching essential minerals (such as Mg²⁺ and Ca²⁺) from the soil and damaging leaves directly. 3. It corrodes and dissolves limestone and marble buildings/statues (CaCO₃ reacts with the acid) and speeds up the corrosion of metals.",
            markScheme: [
              "Acidifies lakes/rivers, killing aquatic life [1]",
              "Damages forests / leaches minerals from soil [1]",
              "Dissolves limestone/marble buildings / corrodes metals [1]",
            ],
            commonError: "Giving three versions of the same effect (e.g. 'kills fish, kills frogs, kills insects') — examiners want three distinct effects.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "core",
            hints: [
              "Think of effects on water, on land/plants, and on buildings.",
              "Make sure the three points are genuinely different.",
            ],
          },
          {
            id: "chem-environment-bq3-04",
            question: "Acid rain dissolves a limestone (CaCO₃) building. (a) Write a balanced equation for its reaction with nitric acid, HNO₃. [2] (b) Suggest one way to reduce the NOₓ emissions that cause this nitric acid. [1]",
            marks: 3,
            modelAnswer: "(a) CaCO₃ + 2HNO₃ → Ca(NO₃)₂ + H₂O + CO₂. (b) Fit catalytic converters to vehicles to convert NOₓ (and CO) into N₂ and CO₂, reducing the nitrogen oxides released.",
            markScheme: [
              "(a) correct products Ca(NO₃)₂ + H₂O + CO₂ [1]",
              "(a) correctly balanced (2HNO₃) [1]",
              "(b) catalytic converters / reduce vehicle use / lower combustion temperature [1]",
            ],
            commonError: "Writing CaNO₃ instead of Ca(NO₃)₂, or failing to balance the 2HNO₃ needed for the 2+ calcium ion.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "core",
            hints: [
              "Calcium is 2+, nitrate is 1- — so the salt is Ca(NO₃)₂.",
              "Balance the hydrogens by using 2HNO₃.",
            ],
            solutions: [
              {
                label: "Balancing the acid–carbonate reaction",
                steps: [
                  "Pattern: carbonate + acid → salt + water + CO₂",
                  "Salt of Ca²⁺ with nitrate (NO₃⁻): Ca(NO₃)₂",
                  "Unbalanced: CaCO₃ + HNO₃ → Ca(NO₃)₂ + H₂O + CO₂",
                  "Balance N: need 2 nitrate, so 2HNO₃",
                  "Final: CaCO₃ + 2HNO₃ → Ca(NO₃)₂ + H₂O + CO₂ (Ca 1=1, C 1=1, N 2=2, H 2=2, O 3+6=3+1+... check: left 3+6=9, right 6+1+2=9 ✓)",
                ],
              },
            ],
          },
          {
            id: "chem-environment-bq3-05",
            question: "Explain, step by step, how the greenhouse effect keeps the Earth's surface warm. [4 marks]",
            marks: 4,
            modelAnswer: "1. Short-wavelength solar radiation (visible/UV) passes through the atmosphere and is absorbed by the Earth's surface, warming it. 2. The warm surface re-radiates energy as longer-wavelength infrared (IR) radiation. 3. Greenhouse gases such as CO₂ and CH₄ in the atmosphere absorb this outgoing infrared radiation. 4. They re-radiate it in all directions, including back towards the surface, which traps energy and keeps the surface warmer than it would otherwise be.",
            markScheme: [
              "Solar (short-wavelength) radiation passes through atmosphere and warms surface [1]",
              "Surface re-emits longer-wavelength infrared radiation [1]",
              "Greenhouse gases (CO₂/CH₄) absorb the outgoing infrared [1]",
              "Re-radiated back to surface, trapping energy / warming surface [1]",
            ],
            commonError: "Saying greenhouse gases 'trap heat like a blanket' without mentioning infrared absorption and re-radiation.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "core",
            hints: [
              "What comes in from the Sun, and what wavelength is it?",
              "What does the Earth emit, and what absorbs it?",
            ],
          },
          {
            id: "chem-environment-bq3-06",
            question: "Methane is a greenhouse gas. (a) State two sources of methane. [2] (b) Suggest one strategy to reduce methane emissions. [1]",
            marks: 3,
            modelAnswer: "(a) Any two of: decomposition of organic matter in landfill sites; digestion in cattle (enteric fermentation); rice paddy fields (anaerobic decay); leaks from natural gas infrastructure; wetlands. (b) Capture methane from landfill sites (and burn it for energy), or change livestock diets to reduce the methane cattle produce.",
            markScheme: [
              "(a) one valid source (landfill / cattle / rice paddies / gas leaks / wetlands) [1]",
              "(a) a second different valid source [1]",
              "(b) one valid strategy (landfill gas capture / dietary change for livestock / reduce cattle farming) [1]",
            ],
            commonError: "Naming combustion of fossil fuels as a methane source — that mainly releases CO₂; methane comes from anaerobic decay and gas leaks.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bq3-07",
            question: "Explain why carbon dioxide can absorb infrared radiation whereas oxygen cannot, relating your answer to molecular structure. [3 marks]",
            marks: 3,
            modelAnswer: "Carbon dioxide is a triatomic molecule (O=C=O) whose bonds can bend and stretch asymmetrically; these vibrations change the molecule's dipole moment, so they can absorb infrared radiation. Oxygen is a symmetric diatomic molecule (O=O); its only vibration is a symmetric stretch that does not change the dipole moment, so it cannot absorb infrared radiation. Because CO₂ can absorb (and re-radiate) IR, it is a greenhouse gas, while O₂ is not.",
            markScheme: [
              "CO₂ has vibrations (bending/asymmetric stretch) that change its dipole / absorb IR [1]",
              "O₂ is symmetric diatomic, vibration does not change dipole [1]",
              "Therefore CO₂ absorbs IR (greenhouse gas) but O₂ does not [1]",
            ],
            commonError: "Saying O₂ 'has no bonds to vibrate' — it does, but the symmetric vibration is IR-inactive.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "challenge",
            hints: [
              "Compare a triatomic molecule's vibrations with a symmetric diatomic's.",
              "Infrared absorption needs a change in dipole moment.",
            ],
          },
          {
            id: "chem-environment-bq3-08",
            question: "Describe THREE different strategies that could reduce the emission of greenhouse gases, explaining how each works. [6 marks]",
            marks: 6,
            modelAnswer: "1. Switch to renewable energy (solar, wind, hydroelectric): these generate electricity without burning fossil fuels, so no CO₂ is released during operation, cutting emissions at source. 2. Carbon capture and storage (CCS): CO₂ is captured from power-station flue gases before it reaches the atmosphere and stored underground, preventing it adding to atmospheric CO₂. 3. Reforestation: planting trees increases photosynthesis, which absorbs CO₂ from the atmosphere and locks the carbon into wood (acting as a carbon sink). (Other valid strategies: improving energy efficiency, reducing methane from agriculture/landfill, international agreements.)",
            markScheme: [
              "Strategy 1 named (renewables) [1]; explanation: no combustion / no CO₂ [1]",
              "Strategy 2 named (CCS) [1]; explanation: captures and stores CO₂ before release [1]",
              "Strategy 3 named (reforestation) [1]; explanation: photosynthesis absorbs CO₂ / carbon sink [1]",
            ],
            commonError: "Naming three strategies but not explaining how each reduces emissions; explanation marks are lost.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "core",
            hints: [
              "Think: avoid producing CO₂, capture CO₂, or absorb CO₂.",
              "Give a mechanism for each strategy, not just its name.",
            ],
          },
          {
            id: "chem-environment-bq3-09",
            question: "A power company switches a station from coal to natural gas (methane). Evaluate the environmental impact of this switch, considering acid rain, carbon dioxide, and methane leaks. [4 marks]",
            marks: 4,
            modelAnswer: "Burning natural gas produces almost no sulfur dioxide because methane contains no sulfur, so the switch greatly reduces SO₂ and therefore acid rain — a clear benefit. Methane combustion also releases less carbon dioxide per unit of energy than coal (because more of the energy comes from forming H₂O), so CO₂ emissions fall, reducing the greenhouse contribution somewhat. However, the station still emits CO₂, so it is not carbon-free. In addition, unburnt methane that leaks from extraction and pipelines is itself a potent greenhouse gas, which can offset some of the CO₂ benefit. Overall the switch is an improvement (less acid rain, less CO₂) but not a complete solution, and leak control is important.",
            markScheme: [
              "Less/no SO₂ from gas → less acid rain (benefit) [1]",
              "Lower CO₂ per unit energy than coal (benefit) [1]",
              "Still emits CO₂ / not carbon-free (limitation) [1]",
              "Methane leaks are a potent greenhouse gas / offset benefit (limitation) [1]",
            ],
            commonError: "Concluding the switch is 'completely clean' or 'no greenhouse gases' — it still emits CO₂ and risks methane leaks.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "challenge",
            hints: [
              "Does methane contain sulfur? What does that mean for acid rain?",
              "Compare CO₂ output of gas vs coal.",
              "What is the danger of unburnt methane escaping?",
            ],
            strategy: "Weigh each benefit against a matching limitation for a balanced evaluation",
          },
          {
            id: "chem-environment-bq3-10",
            question: "Per molecule, methane causes far more warming than carbon dioxide, yet international policy focuses heavily on reducing CO₂. Explain, using ideas about concentration and atmospheric lifetime, why CO₂ is still a priority. [4 marks]",
            marks: 4,
            modelAnswer: "Although each methane molecule traps more infrared than each CO₂ molecule (methane has a higher global warming potential), carbon dioxide is present in the atmosphere at a far higher concentration (hundreds of ppm) than methane (around 2 ppm), so the total warming contribution of CO₂ is greater. In addition, CO₂ remains in the atmosphere for hundreds of years, whereas methane breaks down within roughly a decade, so CO₂ causes sustained, long-term warming. Finally, the largest single human source of greenhouse gas by volume is CO₂ from burning fossil fuels. For these reasons, reducing CO₂ has the greatest long-term impact, so it remains a priority even though methane is more potent per molecule.",
            markScheme: [
              "Methane is more potent per molecule / higher GWP (acknowledged) [1]",
              "CO₂ is at much higher concentration, so greater total warming [1]",
              "CO₂ persists far longer (hundreds of years vs ~decade for CH₄) [1]",
              "CO₂ from fossil fuels is the largest source by volume / greatest long-term impact [1]",
            ],
            commonError: "Arguing only 'there is more CO₂' without mentioning its long atmospheric lifetime, or ignoring that methane really is more potent per molecule.",
            guideRef: "The Greenhouse Effect, Climate Change, and Strategies to Reduce Emissions",
            difficulty: "challenge",
            hints: [
              "Separate per-molecule potency from total amount present.",
              "How long does each gas stay in the atmosphere?",
              "Which gas comes from the largest human source by volume?",
            ],
            strategy: "Distinguish per-molecule effect from total effect, and factor in atmospheric lifetime",
          },
        ],
      },
      {
        id: "chem-environment-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Ten structured questions on fertilisers, eutrophication, and synoptic environmental chemistry.",
        questions: [
          {
            id: "chem-environment-bq4-01",
            question: "State what the letters N, P and K stand for in NPK fertilisers, and why plants need nitrogen. [3 marks]",
            marks: 3,
            modelAnswer: "N stands for nitrogen, P for phosphorus and K for potassium. Plants need nitrogen to make proteins (and chlorophyll) for healthy growth; nitrogen is the nutrient most often lacking in soils, so nitrogen fertilisers are widely used.",
            markScheme: [
              "N = nitrogen, P = phosphorus, K = potassium [1]",
              "Nitrogen needed for protein / growth / chlorophyll [1]",
              "Nitrogen is often the limiting nutrient in soil [1]",
            ],
            commonError: "Giving K as 'kalium' is acceptable but 'potassium' is expected; do not write K as carbon or calcium.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "warmup",
          },
          {
            id: "chem-environment-bq4-02",
            question: "Describe, in order, the sequence of events in eutrophication that follows excess fertiliser entering a river, ending with the death of fish. [5 marks]",
            marks: 5,
            modelAnswer: "1. Excess nitrate (and phosphate) from fertiliser enters the river by leaching or run-off. 2. The extra nutrients cause rapid growth of algae and water plants — an algal bloom — which covers the surface. 3. The algae block sunlight, so submerged plants cannot photosynthesise and they die. 4. Aerobic bacteria decompose the large amount of dead plant/algal material, using up dissolved oxygen as they respire. 5. The dissolved oxygen level falls so low that fish and other aerobic organisms can no longer respire and they die (suffocate).",
            markScheme: [
              "Excess nitrate/phosphate enters water (leaching/run-off) [1]",
              "Algal bloom / rapid algae growth [1]",
              "Algae block light, submerged plants die [1]",
              "Aerobic bacteria decompose dead matter, using up oxygen [1]",
              "Dissolved oxygen falls, fish die / suffocate [1]",
            ],
            commonError: "Saying fish die because nitrate is poisonous, or omitting the bacterial decomposition step that consumes the oxygen.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "core",
            hints: [
              "Start with the nutrient entering the water.",
              "What grows first, and what does it do to light?",
              "Why does the oxygen run out, and what consumes it?",
            ],
          },
          {
            id: "chem-environment-bq4-03",
            question: "Suggest TWO ways a farmer could reduce eutrophication caused by their fields, and explain how each works. [4 marks]",
            marks: 4,
            modelAnswer: "1. Apply fertiliser in the correct amount and at the right time (e.g. not just before heavy rain): this means less unused fertiliser is available to be washed off, reducing the nutrients leaching into rivers. 2. Leave a buffer strip of vegetation between the fields and the waterway: the plants absorb nutrients from run-off before it reaches the river, so fewer nutrients enter the water. (Other valid answers: use slow-release fertilisers; do not over-apply.)",
            markScheme: [
              "Method 1: apply correct amount / right time / avoid before rain [1]; explanation: less leaching/run-off of excess nutrients [1]",
              "Method 2: buffer strip of vegetation [1]; explanation: absorbs nutrients before they reach water [1]",
            ],
            commonError: "Suggesting 'use more fertiliser so plants absorb it all' — excess application increases run-off and worsens the problem.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "core",
            hints: [
              "How can the amount/timing of fertiliser reduce run-off?",
              "What physical barrier could intercept nutrients before the river?",
            ],
          },
          {
            id: "chem-environment-bq4-04",
            question: "Ammonium sulfate, (NH₄)₂SO₄, is a nitrogen fertiliser. Calculate its percentage by mass of nitrogen. (Ar: N = 14, H = 1, S = 32, O = 16) Show your working. [3 marks]",
            marks: 3,
            modelAnswer: "Relative formula mass of (NH₄)₂SO₄ = 2×(14 + 4×1) + 32 + 4×16 = 2×18 + 32 + 64 = 36 + 32 + 64 = 132. Mass of nitrogen = 2 × 14 = 28. Percentage of nitrogen = (28 / 132) × 100 = 21.2% (3 s.f.).",
            markScheme: [
              "Mr of (NH₄)₂SO₄ = 132 [1]",
              "Mass of N = 2 × 14 = 28 [1]",
              "% N = (28/132) × 100 = 21.2% [1]",
            ],
            commonError: "Counting only one nitrogen atom, or miscalculating Mr by forgetting the subscript 2 outside the bracket.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "challenge",
            hints: [
              "There are two NH₄ groups — count atoms carefully.",
              "Mr = 2×(N + 4H) + S + 4O.",
              "% N = (mass of N ÷ Mr) × 100.",
            ],
            solutions: [
              {
                label: "Step-by-step percentage by mass",
                steps: [
                  "Each NH₄ = 14 + 4 = 18; two of them = 36",
                  "Add SO₄ = 32 + (4 × 16) = 32 + 64 = 96",
                  "Mr = 36 + 96 = 132",
                  "Mass of N = 2 × 14 = 28",
                  "% N = (28 ÷ 132) × 100 = 21.21... = 21.2% (3 s.f.)",
                ],
              },
            ],
          },
          {
            id: "chem-environment-bq4-05",
            question: "Ammonium nitrate is made by neutralising ammonia with nitric acid. (a) Write a balanced equation for the reaction. [1] (b) Explain why ammonium nitrate is a particularly valuable nitrogen fertiliser. [2]",
            marks: 3,
            modelAnswer: "(a) NH₃ + HNO₃ → NH₄NO₃. (b) Ammonium nitrate has a high percentage of nitrogen by mass (about 35%) and it supplies nitrogen in two forms (ammonium and nitrate ions), both of which can be taken up by plants. It is also very soluble, so it dissolves readily and is available to plant roots.",
            markScheme: [
              "(a) NH₃ + HNO₃ → NH₄NO₃ [1]",
              "(b) high % nitrogen by mass (~35%) [1]",
              "(b) supplies nitrogen in two usable forms / very soluble [1]",
            ],
            commonError: "Adding water as a product (there is none here, since ammonia is the base) or unbalancing the equation.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "core",
            hints: [
              "Ammonia is a base; combine it directly with nitric acid.",
              "Think about nitrogen content and solubility for part (b).",
            ],
          },
          {
            id: "chem-environment-bq4-06",
            question: "Why are aerobic bacteria, rather than the algae themselves, responsible for the fall in dissolved oxygen during eutrophication? [3 marks]",
            marks: 3,
            modelAnswer: "While the algae are alive and the bloom is forming, they actually produce oxygen by photosynthesis. The oxygen falls only after the algae and plants die. Then aerobic decomposer bacteria multiply rapidly and break down the large amount of dead organic matter by aerobic respiration, which consumes dissolved oxygen (organic matter + O₂ → CO₂ + H₂O). Because there is so much dead material, the bacteria use oxygen faster than it is replaced, so the dissolved oxygen level crashes — this is why the bacteria, not the living algae, cause the depletion.",
            markScheme: [
              "Living algae produce oxygen (photosynthesis) / oxygen falls only after they die [1]",
              "Aerobic bacteria decompose dead matter by respiration [1]",
              "Respiration consumes dissolved oxygen faster than replaced → O₂ falls [1]",
            ],
            commonError: "Stating that algae 'use up all the oxygen' while alive — living algae photosynthesise and add oxygen; it is the decomposition of dead algae that removes it.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "challenge",
            hints: [
              "What do living algae do to oxygen levels?",
              "When does the oxygen actually fall — before or after the algae die?",
              "Which organisms respire on the dead material?",
            ],
          },
          {
            id: "chem-environment-bq4-07",
            question: "A scientist samples a river downstream of a farm and records dissolved oxygen of 9 mg/L upstream, 2 mg/L just below the outflow, and 8 mg/L two kilometres further on. Explain this pattern, naming the process responsible for the dip and the reasons for the recovery. [5 marks]",
            marks: 5,
            modelAnswer: "Upstream, 9 mg/L is a healthy, well-oxygenated level. Just below the outflow, excess nitrate from fertiliser run-off causes an algal bloom; when the algae die, aerobic bacteria decompose the dead matter and consume dissolved oxygen by respiration, causing the sharp dip to 2 mg/L (an 'oxygen sag') — at this level many fish would suffocate. Two kilometres further on, the oxygen recovers to 8 mg/L because: the nutrients have been diluted by clean river water; the supply of dead organic matter has been used up, so fewer bacteria are respiring; and the river re-aerates from the atmosphere (and surviving plants photosynthesise), restoring the oxygen level.",
            markScheme: [
              "Upstream 9 mg/L = healthy baseline [1]",
              "Outflow: excess nitrate → algal bloom → algae die [1]",
              "Aerobic bacteria decompose dead matter, consuming O₂ (process named) → dip [1]",
              "Recovery reason 1: dilution / exhaustion of organic matter → fewer bacteria [1]",
              "Recovery reason 2: re-aeration from atmosphere / photosynthesis restores O₂ [1]",
            ],
            commonError: "Saying 'the bacteria make oxygen' (they consume it) or explaining the recovery only as 'the pollution moves away' without dilution, substrate exhaustion, or re-aeration.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "challenge",
            hints: [
              "Use the upstream value as a baseline for comparison.",
              "Name the process that causes the dip (aerobic decomposition).",
              "Give at least two reasons the oxygen recovers downstream.",
            ],
            strategy: "Apply the oxygen-sag model: cause of dip, then mechanisms of recovery",
          },
          {
            id: "chem-environment-bq4-08",
            question: "Compare eutrophication and acid rain as forms of water pollution. For each, state the main cause and the main effect on aquatic life, and give one way to reduce it. [6 marks]",
            marks: 6,
            modelAnswer: "Eutrophication: main cause — excess nitrate/phosphate nutrients entering water from fertiliser run-off; main effect on aquatic life — algal bloom leads to decomposition that removes dissolved oxygen, so fish suffocate; one way to reduce — apply less fertiliser/use buffer strips to cut nutrient run-off. Acid rain: main cause — SO₂ and NOₓ from burning fossil fuels dissolving in rain to form sulfuric and nitric acids; main effect on aquatic life — lowers the pH of lakes/rivers, harming or killing fish (and leaching toxic aluminium ions); one way to reduce — flue-gas desulfurisation to remove SO₂ (or low-sulfur fuels / catalytic converters for NOₓ). So eutrophication kills by oxygen depletion while acid rain kills by lowering pH; both can be reduced by tackling the source of the pollutant.",
            markScheme: [
              "Eutrophication cause: excess nutrients/nitrate run-off [1]",
              "Eutrophication effect: oxygen depletion kills fish [1]",
              "Eutrophication reduction: less fertiliser / buffer strips [1]",
              "Acid rain cause: SO₂/NOₓ from fossil fuels forming acids [1]",
              "Acid rain effect: lowers pH, harms/kills fish [1]",
              "Acid rain reduction: FGD / low-sulfur fuel / catalytic converters [1]",
            ],
            commonError: "Mixing the mechanisms up — e.g. saying acid rain causes algal blooms, or that eutrophication lowers pH; keep oxygen-depletion (eutrophication) separate from low pH (acid rain).",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "challenge",
            hints: [
              "For each, identify cause, effect on life, and a control.",
              "Eutrophication kills via oxygen; acid rain kills via pH.",
              "Match each control to the correct cause.",
            ],
            strategy: "Use a structured compare-and-contrast: cause, effect, control for each",
          },
          {
            id: "chem-environment-bq4-09",
            question: "A region experiences three problems: an acidified lake, a smog-bound city, and a eutrophic river. For each problem, identify the most likely chemical cause and one practical solution. [6 marks]",
            marks: 6,
            modelAnswer: "Acidified lake: most likely caused by acid rain from SO₂ (and NOₓ) produced by burning fossil fuels, which dissolves in rain to form sulfuric/nitric acid; practical solution — reduce SO₂ at source using flue-gas desulfurisation or low-sulfur fuels (liming the lake gives temporary relief). Smog-bound city: photochemical smog caused by NOₓ from vehicle engines reacting with unburnt hydrocarbons in sunlight; practical solution — fit catalytic converters and reduce vehicle emissions (e.g. promote electric vehicles). Eutrophic river: caused by excess nitrate/phosphate from fertiliser run-off; practical solution — reduce fertiliser use/use buffer strips to limit nutrient run-off.",
            markScheme: [
              "Acidified lake cause: acid rain from SO₂/NOₓ [1]; solution: FGD / low-sulfur fuel / liming [1]",
              "Smog cause: NOₓ + hydrocarbons in sunlight (photochemical smog) [1]; solution: catalytic converters / reduce vehicles [1]",
              "Eutrophic river cause: excess nitrate/phosphate run-off [1]; solution: less fertiliser / buffer strips [1]",
            ],
            commonError: "Attributing the lake's acidity to fertiliser, or the river's problem to acid rain; match each environmental problem to its specific pollutant source.",
            guideRef: "Acid Rain: Formation and Effects",
            difficulty: "challenge",
            hints: [
              "Acid lake → think SO₂/NOₓ; smog → think NOₓ + sunlight; eutrophic river → think nutrients.",
              "Give a source-targeting solution for each.",
            ],
            strategy: "Diagnose each symptom by matching it to its characteristic pollutant",
          },
          {
            id: "chem-environment-bq4-10",
            question: "A farmer plans to drain a wetland to create more cropland and apply nitrogen fertiliser. Discuss the possible environmental consequences of this plan, referring to greenhouse gases and eutrophication. [6 marks]",
            marks: 6,
            modelAnswer: "Draining the wetland and using it for crops has several environmental effects. First, wetlands store large amounts of carbon in waterlogged organic matter; draining them allows this matter to decompose aerobically, releasing carbon dioxide, while disturbance can also release methane — both greenhouse gases that contribute to the enhanced greenhouse effect. Second, applying nitrogen fertiliser to the new cropland risks leaching/run-off of excess nitrate into nearby rivers, causing eutrophication: an algal bloom, followed by decomposition that depletes dissolved oxygen and kills fish. Third, the loss of the wetland removes a natural habitat and a natural filter that previously absorbed nutrients. To reduce harm, the farmer could keep the wetland as a buffer, apply fertiliser carefully (correct amount and timing), and use slow-release fertilisers. Overall the plan risks increasing greenhouse gas emissions and causing eutrophication, so it should be weighed carefully against the benefit of extra cropland.",
            markScheme: [
              "Draining releases stored carbon as CO₂ (decomposition) [1]",
              "Possible methane release / both are greenhouse gases / enhanced greenhouse effect [1]",
              "Fertiliser leaching/run-off of nitrate into water [1]",
              "Eutrophication: algal bloom → oxygen depletion → fish die [1]",
              "Loss of habitat / loss of natural nutrient filter [1]",
              "Mitigation: careful fertiliser use / buffer strips / slow-release fertiliser [1]",
            ],
            commonError: "Discussing only eutrophication or only greenhouse gases; the question requires both, plus a balanced judgement.",
            guideRef: "Fertilisers and Eutrophication",
            difficulty: "challenge",
            hints: [
              "What happens to carbon stored in a drained wetland?",
              "What does excess nitrogen fertiliser do to nearby water?",
              "Suggest mitigations and give a balanced conclusion.",
            ],
            strategy: "Address each named issue (greenhouse gases and eutrophication), then evaluate with mitigations",
          },
        ],
      },
    ],
  },
};
