import type { Topic } from "../types";

export const bioMolecules: Topic = {
  id: "bio-molecules",
  title: "Biological Molecules",
  subject: "biology",
  icon: "🧪",
  blurb: "Carbohydrates, proteins, fats, water and food tests — the chemical building blocks of life.",
  intro: "Every living cell is built from a small set of chemical molecules: carbohydrates for energy and structure, proteins for catalysis and support, lipids for membranes and insulation, and water as the universal solvent. Understanding how small subunits join into giant polymers — and how we detect each class in the lab — is a cornerstone of IGCSE Biology and underpins all of cell biology, nutrition, and disease.",

  guide: [
    {
      heading: "Elements in Biological Molecules",
      body: `All biological molecules are organic — they contain **carbon**. But different classes differ in which other elements they contain.

**Carbohydrates** contain only carbon (C), hydrogen (H), and oxygen (O). The hydrogen and oxygen are always in a 2:1 ratio, just like in water — hence the name *carbo-hydrate* (watered carbon).

**Fats and oils (lipids)** also contain only C, H, and O. The proportions differ from carbohydrates: fats are much richer in hydrogen relative to oxygen, which is why they release more than twice as much energy per gram when respired.

**Proteins** contain C, H, O, and also **nitrogen (N)**. Most proteins also contain sulfur (S), which forms bridges between protein chains that hold 3-D shape steady.

A useful memory trick: "CHON" covers everything in proteins, and carbohydrates / lipids simply drop the N.`,
      keyPoints: [
        "Carbohydrates: C, H, O only (H:O ratio 2:1).",
        "Fats/lipids: C, H, O only (H-rich, O-poor compared with carbohydrates).",
        "Proteins: C, H, O, N (also commonly S).",
        "All biological molecules are carbon-based (organic).",
        "Nitrogen is the key element that distinguishes proteins from the other two classes.",
      ],
      discovery: {
        problem: "A molecule contains only carbon, hydrogen, and oxygen. Is it definitely a carbohydrate? Try to think of a reason it might not be.",
        idea: "No — fats also contain only C, H, and O. The ratio of H to O distinguishes them: carbohydrates have a 2:1 H:O ratio (like water), while fats have far more H relative to O. You need to test for the class of molecule (e.g. with food tests), not just list the elements.",
      },
      whyItWorks: "Carbohydrates are literally 'hydrated carbons' — their empirical formula (CH₂O)ₙ shows the 2:1 H:O ratio in every unit. Fats have the same three elements but a very different arrangement, with long hydrocarbon chains that are almost all C–H bonds, making them far less oxidised and therefore more energy-dense.",
      strategies: ["List elements first, then consider ratios and proportions."],
    },

    {
      heading: "Small Molecules Building Large Ones",
      body: `Large biological molecules (polymers) are built by joining many small subunits (monomers) together. This process is called **condensation** (or dehydration synthesis): a water molecule is released each time two subunits join. The reverse — breaking a polymer into monomers by adding water — is **hydrolysis**.

**Carbohydrates**
- Monomer: **glucose** (a simple sugar, C₆H₁₂O₆).
- Two glucose units join → **maltose** (a disaccharide).
- Many glucose units join → **starch** (energy store in plants), **glycogen** (energy store in animals and liver), or **cellulose** (structural, in plant cell walls).

Starch and glycogen are **branched or coiled** so they are compact and insoluble — ideal for storage. Cellulose forms long, straight chains that pack into strong fibres — ideal for structure.

**Proteins**
- Monomer: **amino acids** (20 different types; all share an amino group –NH₂ and a carboxyl group –COOH).
- Amino acids join via **peptide bonds**, forming a polypeptide chain.
- One or more polypeptides fold into a specific 3-D shape → a **protein**.

**Lipids**
- Built from **glycerol** (1 molecule) + **fatty acids** (3 molecules) joined by **ester bonds** → a **triglyceride** (fat or oil).
- Fats are solid at room temperature; oils are liquid — the difference is in the degree of saturation of the fatty acid chains.`,
      keyPoints: [
        "Condensation joins monomers and releases water; hydrolysis breaks polymers and adds water.",
        "Glucose is the monomer of starch, glycogen, and cellulose.",
        "Amino acids (joined by peptide bonds) are the monomers of proteins.",
        "Fatty acids + glycerol (joined by ester bonds) form triglycerides.",
        "Starch/glycogen are compact and insoluble (storage); cellulose is straight and strong (structure).",
      ],
      diagrams: [
        {
          caption: "Condensation reaction: two glucose molecules join to form maltose, releasing water.",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Condensation of two glucose molecules to form maltose and water">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Glucose 1 -->
  <rect x="10" y="70" width="80" height="40" rx="8" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="50" y="95" text-anchor="middle" font-size="12" fill="#38bdf8" font-family="sans-serif">Glucose</text>
  <!-- Glucose 2 -->
  <rect x="120" y="70" width="80" height="40" rx="8" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="160" y="95" text-anchor="middle" font-size="12" fill="#38bdf8" font-family="sans-serif">Glucose</text>
  <!-- Arrow -->
  <line x1="210" y1="90" x2="240" y2="90" stroke="#fbbf24" stroke-width="2" marker-end="url(#arr)"/>
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#fbbf24"/>
    </marker>
  </defs>
  <!-- Maltose -->
  <rect x="248" y="60" width="60" height="30" rx="6" fill="none" stroke="#34d399" stroke-width="2"/>
  <text x="278" y="80" text-anchor="middle" font-size="11" fill="#34d399" font-family="sans-serif">Maltose</text>
  <!-- Water released -->
  <text x="278" y="115" text-anchor="middle" font-size="11" fill="#fb7185" font-family="sans-serif">+ H2O</text>
  <text x="278" y="130" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="sans-serif">released</text>
  <!-- OH label on G1 -->
  <text x="88" y="108" text-anchor="start" font-size="10" fill="#b7bce0" font-family="sans-serif">–OH</text>
  <!-- H label on G2 -->
  <text x="110" y="108" text-anchor="end" font-size="10" fill="#b7bce0" font-family="sans-serif">H–</text>
  <!-- Bond arrow between molecules -->
  <path d="M90,90 Q106,90 120,90" stroke="#a78bfa" stroke-width="1.5" fill="none" stroke-dasharray="4,2"/>
  <!-- Title -->
  <text x="160" y="20" text-anchor="middle" font-size="13" fill="#eef0ff" font-family="sans-serif" font-weight="bold">Condensation Reaction</text>
  <text x="160" y="38" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="sans-serif">–OH + H– → glycosidic bond + H2O</text>
  <text x="160" y="175" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="sans-serif">Hydrolysis is the reverse: add H2O to break the bond</text>
</svg>`,
        },
        {
          caption: "Triglyceride formation: glycerol + 3 fatty acids → fat + 3 water molecules.",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Triglyceride formation from glycerol and three fatty acids">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Glycerol -->
  <rect x="8" y="30" width="60" height="130" rx="8" fill="none" stroke="#a78bfa" stroke-width="2"/>
  <text x="38" y="100" text-anchor="middle" font-size="11" fill="#a78bfa" font-family="sans-serif">Glycerol</text>
  <!-- Three OH groups -->
  <text x="38" y="58" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="sans-serif">–OH</text>
  <text x="38" y="100" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="sans-serif">–OH</text>
  <text x="38" y="142" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="sans-serif">–OH</text>
  <!-- Plus -->
  <text x="78" y="100" font-size="18" fill="#fbbf24" font-family="sans-serif">+</text>
  <!-- Fatty acids -->
  <rect x="90" y="30" width="80" height="30" rx="6" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="130" y="50" text-anchor="middle" font-size="10" fill="#38bdf8" font-family="sans-serif">Fatty acid 1</text>
  <rect x="90" y="80" width="80" height="30" rx="6" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="130" y="100" text-anchor="middle" font-size="10" fill="#38bdf8" font-family="sans-serif">Fatty acid 2</text>
  <rect x="90" y="130" width="80" height="30" rx="6" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="130" y="150" text-anchor="middle" font-size="10" fill="#38bdf8" font-family="sans-serif">Fatty acid 3</text>
  <!-- Arrow -->
  <line x1="178" y1="95" x2="198" y2="95" stroke="#fbbf24" stroke-width="2" marker-end="url(#arr2)"/>
  <defs>
    <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#fbbf24"/>
    </marker>
  </defs>
  <!-- Triglyceride -->
  <rect x="205" y="55" width="80" height="70" rx="8" fill="none" stroke="#34d399" stroke-width="2"/>
  <text x="245" y="85" text-anchor="middle" font-size="11" fill="#34d399" font-family="sans-serif">Triglyceride</text>
  <text x="245" y="102" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="sans-serif">(fat / oil)</text>
  <!-- Water -->
  <text x="245" y="148" text-anchor="middle" font-size="11" fill="#fb7185" font-family="sans-serif">+ 3 H2O</text>
  <!-- Title -->
  <text x="160" y="18" text-anchor="middle" font-size="12" fill="#eef0ff" font-family="sans-serif" font-weight="bold">Triglyceride Formation</text>
  <text x="160" y="185" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="sans-serif">Three ester bonds formed; three water molecules released</text>
</svg>`,
        },
      ],
      discovery: {
        problem: "Cellulose and starch are both made from glucose — exactly the same monomer. Yet starch is digestible by humans and cellulose is not. What could possibly cause such a big difference in function from the same building block?",
        idea: "The difference is the *type* of glycosidic bond. In starch, glucose units are joined by alpha (α) glycosidic bonds, creating a helical or branched shape that our digestive enzymes (amylase) can recognise and break. In cellulose, the bonds are beta (β) glycosidic bonds, producing straight, rigid chains that pack into tough fibres. Humans lack the enzyme (cellulase) to break β bonds, so cellulose passes through as dietary fibre.",
      },
      whyItWorks: "The alpha versus beta distinction changes the geometry of every junction in the chain. In the alpha form, the chain curls into a helix (compact, amylase-accessible). In the beta form, alternating glucose flips 180°, straightening the chain. Thousands of straight chains line up and form hydrogen bonds between chains, creating the strength of plant cell walls.",
      thinkDeeper: "Glycogen is more branched than starch. Why might an animal benefit from a more branched energy store than a plant? Think about the speed of glucose release when bursting into activity.",
      strategies: ["Compare structure to function: what shape does the monomer arrangement create, and how does that suit its role?"],
    },

    {
      heading: "The Importance of Water",
      body: `Water (H₂O) is the most abundant molecule in living organisms — typically 60–80% of cell content. Its unique properties arise from its **polar** nature: the oxygen atom pulls electrons strongly, making water molecules slightly negative at the O end and slightly positive at the H end. This creates hydrogen bonds between molecules.

**Key properties and their biological importance:**

- **Solvent**: Water dissolves ionic and polar substances (e.g. glucose, amino acids, mineral ions), allowing them to be transported in blood plasma and cytoplasm. Metabolic reactions occur in aqueous solution.
- **High specific heat capacity**: A large amount of energy is needed to raise water's temperature, so bodies and aquatic environments resist rapid temperature change, maintaining stable conditions for enzymes.
- **High latent heat of vaporisation**: Evaporating water (sweating, transpiration) removes a large amount of heat, providing effective cooling.
- **Cohesion**: Hydrogen bonds between water molecules allow continuous water columns to be pulled up through xylem in plants (transpiration stream).
- **Reactant**: Water is consumed in hydrolysis reactions (digestion) and produced in condensation reactions.
- **Habitat**: Many organisms live in or on water; its maximum density at 4 °C means ice floats, insulating aquatic life in winter.`,
      keyPoints: [
        "Water is a polar molecule, enabling hydrogen bonding and its special properties.",
        "Water is the universal biological solvent — metabolic reactions occur in aqueous solution.",
        "High specific heat capacity buffers organisms against temperature swings.",
        "Evaporation of water (sweating/transpiration) cools organisms efficiently.",
        "Water is a reactant in hydrolysis and is released in condensation reactions.",
      ],
      thinkDeeper: "A student says 'water is just a carrier — it doesn't take part in reactions.' Give two examples from this topic that contradict this claim.",
      strategies: ["Link each physical property of water to at least one biological process."],
    },

    {
      heading: "Food Tests",
      body: `Food tests are qualitative chemical tests that identify which class of biological molecule is present in a food sample. Each test has a specific **reagent**, **procedure**, and **positive result** (colour change).

**1. Starch — Iodine solution test**
Add a few drops of iodine solution (orange-brown) to the sample.
- Positive result: **blue-black** colour.
- Negative: stays orange-brown.
- The iodine molecules (as I₃⁻ ions) slot into the helical coils of the starch molecule, producing the blue-black complex.

**2. Reducing sugars — Benedict's test**
Add Benedict's solution (blue) to the sample and **heat in a water bath** at ~80 °C for 2–5 minutes.
- Positive result: **brick-red / orange / yellow** precipitate (colour depends on sugar concentration).
- Negative: stays blue.
- Reducing sugars (glucose, maltose, fructose, galactose) donate electrons to Cu²⁺ in Benedict's reagent, reducing it to Cu⁺ (copper(I) oxide, Cu₂O), which is the brick-red precipitate.
- Note: sucrose is a **non-reducing** sugar — it must be hydrolysed to glucose + fructose first (boil with dilute HCl, cool, neutralise with sodium hydrogencarbonate, then apply Benedict's).

**3. Protein — Biuret test**
Add Biuret reagent (or NaOH then a few drops of CuSO₄ solution) to the sample.
- Positive result: **purple / violet** colour.
- Negative: stays blue.
- Cu²⁺ ions in alkaline solution coordinate with the peptide bonds in the protein chain, producing the purple complex.

**4. Fats — Ethanol emulsion test**
Shake the sample with **ethanol**, then pour the ethanol layer into cold water.
- Positive result: **cloudy white emulsion** (milky appearance).
- Negative: stays clear.
- Fat dissolves in ethanol but is insoluble in water; when poured into water, fat re-precipitates as tiny droplets, forming a milky emulsion.

**5. Vitamin C — DCPIP test**
Add the food sample (or fruit juice) drop by drop to a fixed volume of **DCPIP** (blue dye).
- Positive result: DCPIP is **decolourised** (blue → colourless).
- The more concentrated the vitamin C, the fewer drops are needed to decolourise the DCPIP.
- Vitamin C (ascorbic acid) is a reducing agent that reduces DCPIP.

**Designing a food-test experiment**
Good experimental design requires:
- A **positive control** (known solution containing the molecule) and a **negative control** (distilled water) to validate results.
- Only one independent variable changed at a time (e.g. food type), all others kept constant (volume, temperature, reagent concentration).
- Results recorded as a table with clear observations.`,
      keyPoints: [
        "Starch + iodine solution → blue-black (positive); stays orange-brown (negative).",
        "Reducing sugars + Benedict's + heat → brick-red precipitate (positive); stays blue (negative).",
        "Protein + Biuret reagent → purple/violet (positive); stays blue (negative).",
        "Fat + ethanol emulsion test → cloudy white emulsion (positive); stays clear (negative).",
        "Vitamin C + DCPIP → DCPIP decolourised (positive); DCPIP stays blue (negative).",
      ],
      diagrams: [
        {
          caption: "Summary of food test colour changes — positive results highlighted.",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Food test colour change summary table">
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Header -->
  <rect x="4" y="4" width="312" height="22" rx="4" fill="#1e293b"/>
  <text x="160" y="19" text-anchor="middle" font-size="12" fill="#eef0ff" font-family="sans-serif" font-weight="bold">Food Test Colour Changes</text>
  <!-- Column headers -->
  <text x="70" y="42" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="sans-serif" font-weight="bold">Test</text>
  <text x="160" y="42" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="sans-serif" font-weight="bold">Reagent colour</text>
  <text x="270" y="42" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="sans-serif" font-weight="bold">Positive result</text>
  <!-- Row 1: Starch -->
  <text x="70" y="60" text-anchor="middle" font-size="10" fill="#eef0ff" font-family="sans-serif">Starch (iodine)</text>
  <circle cx="145" cy="56" r="7" fill="#f97316"/>
  <text x="165" y="61" font-size="10" fill="#b7bce0" font-family="sans-serif">orange-brown</text>
  <circle cx="245" cy="56" r="7" fill="#1e3a5f"/>
  <text x="258" y="61" font-size="10" fill="#38bdf8" font-family="sans-serif">blue-black</text>
  <!-- Row 2: Red sugar -->
  <text x="70" y="85" text-anchor="middle" font-size="10" fill="#eef0ff" font-family="sans-serif">Red. sugar (Ben.)</text>
  <circle cx="145" cy="81" r="7" fill="#3b82f6"/>
  <text x="165" y="86" font-size="10" fill="#b7bce0" font-family="sans-serif">blue</text>
  <circle cx="245" cy="81" r="7" fill="#b45309"/>
  <text x="258" y="86" font-size="10" fill="#fbbf24" font-family="sans-serif">brick-red</text>
  <!-- Row 3: Protein -->
  <text x="70" y="110" text-anchor="middle" font-size="10" fill="#eef0ff" font-family="sans-serif">Protein (Biuret)</text>
  <circle cx="145" cy="106" r="7" fill="#3b82f6"/>
  <text x="165" y="111" font-size="10" fill="#b7bce0" font-family="sans-serif">blue</text>
  <circle cx="245" cy="106" r="7" fill="#7c3aed"/>
  <text x="258" y="111" font-size="10" fill="#a78bfa" font-family="sans-serif">purple</text>
  <!-- Row 4: Fat -->
  <text x="70" y="135" text-anchor="middle" font-size="10" fill="#eef0ff" font-family="sans-serif">Fat (ethanol)</text>
  <circle cx="145" cy="131" r="7" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/>
  <text x="165" y="136" font-size="10" fill="#b7bce0" font-family="sans-serif">clear</text>
  <circle cx="245" cy="131" r="7" fill="#f1f5f9" stroke="#64748b" stroke-width="1"/>
  <text x="258" y="136" font-size="10" fill="#eef0ff" font-family="sans-serif">cloudy/white</text>
  <!-- Row 5: Vit C -->
  <text x="70" y="160" text-anchor="middle" font-size="10" fill="#eef0ff" font-family="sans-serif">Vit C (DCPIP)</text>
  <circle cx="145" cy="156" r="7" fill="#3b82f6"/>
  <text x="165" y="161" font-size="10" fill="#b7bce0" font-family="sans-serif">blue</text>
  <circle cx="245" cy="156" r="7" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
  <text x="258" y="161" font-size="10" fill="#34d399" font-family="sans-serif">colourless</text>
  <!-- Divider lines -->
  <line x1="4" y1="46" x2="316" y2="46" stroke="#334155" stroke-width="1"/>
  <line x1="4" y1="70" x2="316" y2="70" stroke="#1e293b" stroke-width="1"/>
  <line x1="4" y1="95" x2="316" y2="95" stroke="#1e293b" stroke-width="1"/>
  <line x1="4" y1="120" x2="316" y2="120" stroke="#1e293b" stroke-width="1"/>
  <line x1="4" y1="145" x2="316" y2="145" stroke="#1e293b" stroke-width="1"/>
  <text x="160" y="190" text-anchor="middle" font-size="9" fill="#64748b" font-family="sans-serif">Always include positive and negative controls in experiments</text>
</svg>`,
        },
      ],
      discovery: {
        problem: "A student tests a food sample with iodine solution and Benedict's solution. The iodine goes blue-black, but Benedict's stays blue after heating. She concludes 'there is starch but no sugar in this food.' Is her conclusion fully supported? What additional test could she do?",
        idea: "Her conclusion is largely correct but incomplete. The blue-black iodine result confirms starch is present. Benedict's staying blue tells her there is no *reducing* sugar. However, *sucrose* (a non-reducing sugar) would also give a negative Benedict's test even if present. To test for sucrose, she should hydrolyse the sample by boiling with dilute hydrochloric acid, cooling, neutralising with sodium hydrogencarbonate solution, then re-testing with Benedict's. If it now turns brick-red, sucrose was present.",
      },
      whyItWorks: "Sucrose is a *non-reducing* sugar because the anomeric carbons (the reactive ends) of its two glucose/fructose units are locked in the glycosidic bond — there is no free aldehyde or ketone group to donate electrons to Cu²⁺. Hydrolysis breaks the bond and frees these reactive groups, allowing reduction of Benedict's reagent.",
      strategies: ["When interpreting a negative result, ask: 'Which molecules would also give a negative result?' — a negative does not mean absent."],
    },

    {
      heading: "Linking Molecule Structure to Function",
      body: `The shape and chemical nature of a molecule determines what it can do. This theme runs throughout biology.

**Starch vs. glycogen vs. cellulose (all glucose polymers)**
- Starch (plants): helical alpha chains → compact, insoluble → good energy store; doesn't draw in water by osmosis.
- Glycogen (animals, liver, muscle): more branched than starch → even more compact; many free ends means glucose can be released rapidly when needed.
- Cellulose (plants): straight beta chains, cross-linked by hydrogen bonds → strong, insoluble, rigid → ideal cell wall material.

**Proteins — structure determines function**
- A protein's unique sequence of amino acids (determined by genes) folds into a precise 3-D shape.
- Enzymes: active site shape is complementary to the substrate (lock-and-key model).
- Structural proteins (collagen, keratin): long, fibrous, providing strength.
- Transport proteins (haemoglobin): specific shape to bind and release oxygen.

**Fats — structure determines function**
- Long, non-polar hydrocarbon tails make fats **hydrophobic** (water-repelling) → ideal for waterproofing (waxy cuticle) and for forming the bilayer of cell membranes (phospholipids).
- High H:C ratio means more chemical energy per gram than carbohydrates → ideal long-term energy store.
- Layer under skin (subcutaneous fat) acts as thermal insulation.

**Challenge connection**: The fact that cellulose cannot be digested by human gut enzymes but *can* be fermented by gut bacteria illustrates how molecular structure shapes entire ecological relationships — humans depend on bacterial enzymes to access some nutritional value from plant material.`,
      keyPoints: [
        "Alpha glycosidic bonds → coiled/branched polymers (starch, glycogen) for storage; beta bonds → straight, cross-linked chains (cellulose) for structure.",
        "Protein function depends on 3-D shape, which is determined by amino acid sequence.",
        "Fats are hydrophobic due to non-polar hydrocarbon tails — this drives membrane and waterproofing roles.",
        "Glycogen is more branched than starch, enabling faster glucose mobilisation in animals.",
        "Molecule structure determines whether enzymes can hydrolyse it — humans lack cellulase.",
      ],
      thinkDeeper: "Haemoglobin is a protein with four polypeptide chains, each holding an iron-containing haem group. When one oxygen binds, the shape of the whole molecule subtly changes, making the next oxygen easier to bind. How does this 'cooperativity' depend on protein having a specific 3-D structure rather than just a random chain of amino acids?",
      strategies: ["For any molecule, ask: What shape does it form? Is it soluble? Is it polar or non-polar? Each answer points to a function."],
    },

    {
      heading: "Designing and Interpreting Food-Test Experiments",
      body: `Exam questions often ask you to **plan** a food-test investigation or to **evaluate** results from one. Use the following framework.

**Planning**
1. State the **aim** (e.g. to find out which of three foods contains reducing sugar).
2. List the **independent variable** (the food sample tested), **dependent variable** (the colour change / result of the test), and **controlled variables** (volume of food solution, volume of reagent, temperature, time of heating).
3. Describe the **method** step by step: quantities, reagent added, conditions (e.g. water bath temperature).
4. Include a **positive control** (known glucose solution for Benedict's test) and a **negative control** (distilled water).
5. Describe how results will be **recorded** (table with food sample, colour before heating, colour after heating, conclusion).

**Interpreting results**
- A colour change matching the expected positive result → molecule is **present**.
- No colour change → molecule is **absent** (or below the detection limit).
- An unexpected result in the positive control → **reagent may be faulty**; repeat.
- Always state conclusions in terms of the molecule detected, not just the colour.

**Quantitative food tests**
The DCPIP test for vitamin C can be made **semi-quantitative**: add fruit juice drop by drop to a fixed volume of DCPIP solution and count the number of drops to decolourise it. Fewer drops → more concentrated vitamin C. This allows comparison of vitamin C content across different juices.

**Common errors in experiments**
- Not heating Benedict's test → false negative.
- Forgetting to neutralise HCl before the second Benedict's test for sucrose → NaHCO₃ neutralisation step is essential.
- Using opaque or dark-coloured food samples without a blank/control → colour interference.`,
      keyPoints: [
        "Always include positive and negative controls in food-test experiments.",
        "State all controlled variables and explain why they are kept constant.",
        "A negative result means the molecule is absent (or undetectable), not that the test failed.",
        "Benedict's test must be heated (water bath, ~80 °C) to give a valid result.",
        "DCPIP test can be made semi-quantitative by counting drops of juice needed to decolourise.",
      ],
      strategies: ["Use the 'IV, DV, CV' framework to plan any experiment quickly.", "Always ask: what would a false positive / false negative look like, and how would I detect it?"],
    },
  ],

  learn: {
    keyFacts: [
      "Carbohydrates contain C, H, O in the ratio (CH₂O)ₙ — a 2:1 ratio of H to O.",
      "Proteins contain C, H, O, and N (and usually S); their monomers are amino acids joined by peptide bonds.",
      "Lipids (fats/oils) contain C, H, O; they are made from glycerol + 3 fatty acids joined by ester bonds.",
      "Condensation reactions join monomers and release water; hydrolysis breaks polymers using water.",
      "Starch gives a blue-black colour with iodine solution; reducing sugars give brick-red with Benedict's + heat.",
      "Proteins give a purple/violet colour with Biuret reagent; fats give a cloudy white emulsion with the ethanol test.",
      "Vitamin C decolourises DCPIP solution (blue to colourless).",
      "Cellulose (beta glycosidic bonds) forms straight chains for cell wall structure; starch (alpha bonds) coils for energy storage.",
      "Water's polarity gives it high specific heat capacity, high latent heat of vaporisation, and cohesion.",
      "Glycogen (animal energy store) is more branched than starch (plant energy store) for faster glucose release.",
    ],
    flashcards: [
      { front: "What elements are found in carbohydrates?", back: "Carbon (C), Hydrogen (H), Oxygen (O) — in the ratio (CH₂O)ₙ." },
      { front: "What extra element do proteins contain compared with carbohydrates and fats?", back: "Nitrogen (N) — and usually sulfur (S) as well." },
      { front: "What is the monomer of starch, glycogen, and cellulose?", back: "Glucose (C₆H₁₂O₆)." },
      { front: "What type of bond joins amino acids in a protein?", back: "Peptide bond (formed by condensation)." },
      { front: "What three components make up a triglyceride?", back: "One glycerol molecule + three fatty acid molecules, joined by ester bonds." },
      { front: "Positive result: starch + iodine solution?", back: "Blue-black colour." },
      { front: "Positive result: reducing sugar + Benedict's + heat?", back: "Brick-red (or orange/yellow) precipitate." },
      { front: "Positive result: protein + Biuret reagent?", back: "Purple / violet colour." },
      { front: "Positive result: fat + ethanol emulsion test?", back: "Cloudy white emulsion." },
      { front: "Positive result: vitamin C + DCPIP?", back: "DCPIP is decolourised (blue → colourless)." },
      { front: "Why is cellulose not digestible by humans but starch is?", back: "Cellulose has beta glycosidic bonds; humans lack cellulase to break them. Starch has alpha bonds, broken by amylase." },
      { front: "Why does glycogen suit animals as an energy store better than starch?", back: "Glycogen is more branched, so glucose can be released more rapidly from many free ends when energy demand is high." },
    ],
    keyTerms: [
      { term: "Carbohydrate", definition: "An organic molecule containing C, H, and O in the ratio (CH₂O)ₙ; includes sugars, starch, glycogen, and cellulose." },
      { term: "Monomer", definition: "A small molecule that is the repeating subunit of a polymer (e.g. glucose is the monomer of starch)." },
      { term: "Polymer", definition: "A large molecule made of many monomers joined by condensation reactions." },
      { term: "Condensation reaction", definition: "A chemical reaction that joins two molecules together and releases a water molecule." },
      { term: "Hydrolysis", definition: "The breaking of a chemical bond by the addition of water, splitting a polymer into smaller units." },
      { term: "Peptide bond", definition: "The covalent bond formed between the amino group of one amino acid and the carboxyl group of another during condensation." },
      { term: "Glycosidic bond", definition: "The covalent bond formed between two monosaccharides in a condensation reaction; alpha type in starch/glycogen, beta type in cellulose." },
      { term: "Ester bond", definition: "The bond formed between glycerol and a fatty acid in a triglyceride during condensation." },
      { term: "Reducing sugar", definition: "A sugar that can donate electrons to reduce copper(II) ions in Benedict's solution; includes glucose, fructose, maltose, and galactose." },
      { term: "Benedict's test", definition: "A food test using blue Benedict's solution that turns brick-red on heating in the presence of a reducing sugar." },
      { term: "Biuret test", definition: "A food test that turns purple/violet in the presence of protein, due to Cu²⁺ ions coordinating with peptide bonds in alkaline conditions." },
      { term: "Ethanol emulsion test", definition: "A food test for lipids: fat dissolves in ethanol, then forms a cloudy white emulsion when the ethanol solution is poured into water." },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "bio-molecules-mcq-q01",
        question: "Which elements are present in a fat molecule?",
        options: ["Carbon, hydrogen, oxygen, and nitrogen", "Carbon, hydrogen, and oxygen only", "Carbon, oxygen, and nitrogen only", "Carbon, hydrogen, nitrogen, and sulfur"],
        answerIndex: 1,
        explanation: "Fats (triglycerides) contain only carbon, hydrogen, and oxygen — the same three elements as carbohydrates. Nitrogen is found in proteins, not fats.",
        guideRef: "Elements in Biological Molecules",
        difficulty: "warmup",
      },
      {
        id: "bio-molecules-mcq-q02",
        question: "A food sample is tested with Benedict's solution and heated. The solution remains blue. Which conclusion is correct?",
        options: [
          "The food contains no sugars at all.",
          "The food contains no reducing sugars, but may contain sucrose.",
          "The food definitely contains protein.",
          "The iodine test should now be applied to confirm starch.",
        ],
        answerIndex: 1,
        explanation: "A blue (negative) Benedict's result means no reducing sugars are detected. However, sucrose is a non-reducing sugar and would also give a negative result. The food could still contain sucrose. The result tells us nothing about protein or starch.",
        guideRef: "Food Tests",
        difficulty: "core",
        hints: [
          "Which sugars does Benedict's test detect — all sugars or only some?",
          "Think about the difference between reducing and non-reducing sugars.",
          "Sucrose cannot donate electrons to Cu²⁺ — what would its Benedict's result look like?",
          "A negative result only means 'not detected', not 'definitely absent for all sugar types'.",
        ],
      },
      {
        id: "bio-molecules-mcq-q03",
        question: "What type of bond joins amino acids together in a protein chain?",
        options: ["Glycosidic bond", "Ester bond", "Peptide bond", "Hydrogen bond"],
        answerIndex: 2,
        explanation: "Amino acids are joined by peptide bonds, formed by condensation between the amino group (–NH₂) of one amino acid and the carboxyl group (–COOH) of the next. Glycosidic bonds join sugars, ester bonds join fatty acids to glycerol, and hydrogen bonds hold the 3-D shape of proteins (not the primary chain).",
        guideRef: "Small Molecules Building Large Ones",
        difficulty: "warmup",
      },
      {
        id: "bio-molecules-mcq-q04",
        question: "A student adds iodine solution to two solutions: solution A (starch) and solution B (glucose). What colours will she observe?",
        options: [
          "A: blue-black; B: blue-black",
          "A: orange-brown; B: blue-black",
          "A: blue-black; B: orange-brown",
          "A: brick-red; B: orange-brown",
        ],
        answerIndex: 2,
        explanation: "Iodine solution gives a blue-black colour only in the presence of starch. Glucose (a simple sugar) does not give the blue-black colour — iodine stays orange-brown. Brick-red is the result of Benedict's test, not iodine.",
        guideRef: "Food Tests",
        difficulty: "warmup",
      },
      {
        id: "bio-molecules-mcq-q05",
        question: "Why does evaporating water cool an organism effectively?",
        options: [
          "Because water has a low specific heat capacity.",
          "Because water molecules lose kinetic energy as they enter the liquid phase.",
          "Because water has a high latent heat of vaporisation, so evaporation removes a large amount of heat energy.",
          "Because water is a good solvent and dissolves heat.",
        ],
        answerIndex: 2,
        explanation: "Water has a very high latent heat of vaporisation: a large amount of energy is needed to convert liquid water to vapour. This energy is taken from the body surface, removing heat efficiently. Low specific heat capacity would actually make cooling inefficient.",
        guideRef: "The Importance of Water",
        difficulty: "core",
        hints: [
          "What does 'latent heat of vaporisation' mean?",
          "When water evaporates, where does the energy come from?",
          "Higher latent heat means more energy is needed to evaporate — is that more or less cooling per gram?",
        ],
      },
      {
        id: "bio-molecules-mcq-q06",
        question: "A triglyceride is formed from glycerol and three fatty acids by condensation. How many water molecules are released in total?",
        options: ["1", "2", "3", "6"],
        answerIndex: 2,
        explanation: "Each ester bond formation between glycerol and one fatty acid releases one water molecule. Since three fatty acids join to glycerol, three ester bonds are formed and three water molecules are released in total.",
        guideRef: "Small Molecules Building Large Ones",
        difficulty: "core",
        hints: [
          "How many fatty acids join to one glycerol?",
          "Each bond formed in condensation releases one water molecule.",
          "Count the number of new ester bonds formed.",
        ],
      },
    ],
    qa: [
      {
        id: "bio-molecules-qa-q01",
        question: "A student wishes to find out whether a sample of cow's milk contains protein. Describe how she should carry out the Biuret test, including the expected result if protein is present. [4]",
        marks: 4,
        modelAnswer: "The student should place a small volume of milk in a test tube. She adds an equal volume of Biuret reagent (or, alternatively, adds sodium hydroxide solution first and then a few drops of copper sulfate solution). She gently swirls the tube and observes the colour. If protein is present, the mixture turns purple or violet. A negative result (protein absent) would be a blue colour.",
        markScheme: [
          "Adds Biuret reagent (or NaOH then CuSO₄ solution) to the milk sample.",
          "Observation: positive result is purple / violet colour.",
          "Negative result (no protein): blue colour remains.",
          "Reference to swirling / mixing to ensure reaction occurs (accept any valid procedural point such as using a control).",
        ],
        commonError: "Many students write 'add iodine solution' — iodine tests for starch, not protein. Others forget to state the negative result colour (blue).",
        guideRef: "Food Tests",
        difficulty: "core",
        hints: [
          "Which reagent detects protein?",
          "What colour does the reagent start as, and what colour does a positive result give?",
          "What would you observe if there were no protein?",
        ],
      },
      {
        id: "bio-molecules-qa-q02",
        question: "Explain why starch is a suitable molecule for energy storage in plants, while cellulose is suitable for forming cell walls. Refer to the structure of each molecule in your answer. [5]",
        marks: 5,
        modelAnswer: "Starch is made from glucose monomers joined by alpha glycosidic bonds. This causes the chain to coil into a helix, and starch can also be branched (amylopectin). The coiled/branched structure is compact, so starch occupies little space. It is also insoluble in water, so it does not affect the water potential of the cell and does not dissolve away. When energy is needed, amylase can hydrolyse the alpha bonds to release glucose rapidly. Cellulose is also made from glucose, but the bonds are beta glycosidic bonds, which cause alternating glucose units to flip 180°. This produces long, straight, unbranched chains that can pack tightly together and form hydrogen bonds between neighbouring chains. The result is a strong, rigid fibre that provides structural support in the plant cell wall and resists stretching.",
        markScheme: [
          "Starch has alpha glycosidic bonds / alpha-1,4 or alpha-1,6 linkages.",
          "Alpha bonds cause coiling / branching → compact molecule.",
          "Starch is insoluble in water → does not lower water potential / stays in cell.",
          "Cellulose has beta glycosidic bonds.",
          "Beta bonds cause straight chains; neighbouring chains form hydrogen bonds → strong/rigid fibres for structural support.",
        ],
        commonError: "Students often state that starch and cellulose are 'different molecules' without explaining that the difference lies in the type of glycosidic bond between identical glucose monomers.",
        guideRef: "Linking Molecule Structure to Function",
        difficulty: "challenge",
        hints: [
          "Both are made from glucose — so what makes them different? Think about the type of bond.",
          "How does the bond type affect the shape of the polymer chain?",
          "Link chain shape to physical property (compact vs. straight), then to biological function (storage vs. structure).",
          "For cellulose, consider what happens when many straight chains lie parallel to each other.",
        ],
        strategy: "Structure → shape → property → function (a four-step chain of reasoning).",
        solutions: [
          {
            label: "Alpha vs. Beta bond approach",
            steps: [
              "Step 1: Identify bond type — starch uses alpha-1,4 (and alpha-1,6) glycosidic bonds; cellulose uses beta-1,4 glycosidic bonds.",
              "Step 2: Alpha bonds cause chain to coil (helix) or branch → compact shape → efficient, insoluble storage molecule.",
              "Step 3: Beta bonds flip every other glucose 180° → straight, unbranched chain.",
              "Step 4: Straight chains align in parallel → hydrogen bonds between chains → high tensile strength → cell wall structural material.",
            ],
          },
        ],
      },
      {
        id: "bio-molecules-qa-q03",
        question: "A scientist compares the vitamin C content of fresh orange juice and stored orange juice using the DCPIP test. She uses 2 cm³ of DCPIP in each test tube. Fresh juice required 8 drops to decolourise the DCPIP, while stored juice required 20 drops. (a) What does the DCPIP result tell you about vitamin C in stored juice? [2] (b) Suggest one variable the scientist must control to make the comparison valid. [1] (c) Explain why DCPIP is decolourised by vitamin C. [2]",
        marks: 5,
        modelAnswer: "(a) The stored juice has a lower concentration of vitamin C than the fresh juice. More drops were needed to decolourise the DCPIP, meaning each drop contained less vitamin C. This suggests that vitamin C is broken down or lost during storage. (b) Any one of: volume of DCPIP used; concentration of DCPIP; temperature; size/volume of each drop (e.g. using a calibrated pipette or dropper). (c) Vitamin C (ascorbic acid) is a reducing agent. It donates electrons to DCPIP, reducing it. DCPIP changes from blue (oxidised form) to colourless (reduced form) when it gains electrons from vitamin C.",
        markScheme: [
          "(a) Stored juice has lower vitamin C concentration than fresh juice / more drops needed means less vitamin C per drop.",
          "(a) Vitamin C is lost / broken down during storage (accept 'oxidised').",
          "(b) Any valid controlled variable: volume of DCPIP / concentration of DCPIP / temperature / drop size (1 mark for any one).",
          "(c) Vitamin C is a reducing agent / donates electrons to DCPIP.",
          "(c) DCPIP is reduced and changes from blue to colourless.",
        ],
        commonError: "Students often say 'there is no vitamin C in stored juice' — but 20 drops still decolourised it, so vitamin C is present; it is just less concentrated.",
        guideRef: "Food Tests",
        difficulty: "core",
        hints: [
          "Fewer drops to decolourise means higher concentration — think about what more drops means.",
          "What does 'decolourise' mean chemically — is it oxidation or reduction?",
          "A reducing agent donates electrons — which molecule here is the reducing agent?",
        ],
        strategy: "Translate experimental observation (drop count) into chemical meaning (concentration), then into biological interpretation (storage effect).",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "bio-molecules-bank-mcq-1",
        title: "Biological Molecules — MCQ Paper 1",
        description: "12 multiple-choice questions on chemical composition, macromolecule formation, and water.",
        questions: [
          {
            id: "bio-molecules-bank-mcq1-q01",
            question: "Which of the following correctly lists the elements found in all amino acids?",
            options: ["C, H, O only", "C, H, O, N", "C, H, N, S", "C, H, O, N, S"],
            answerIndex: 1,
            explanation: "All amino acids contain C, H, O, and N (the amino group –NH₂ provides nitrogen; the carboxyl group –COOH provides oxygen). Sulfur is present in some amino acids (e.g. cysteine) but not all. The minimal set shared by every amino acid is C, H, O, N.",
            guideRef: "Elements in Biological Molecules",
            difficulty: "core",
            hints: [
              "Draw the general structure of an amino acid: H₂N–CHR–COOH.",
              "Identify which elements are in the amino group (–NH₂) and the carboxyl group (–COOH).",
              "Sulfur is only in R-groups of specific amino acids, not all.",
            ],
          },
          {
            id: "bio-molecules-bank-mcq1-q02",
            question: "The process by which two glucose molecules join to form maltose is an example of:",
            options: ["Hydrolysis", "Oxidation", "Condensation", "Digestion"],
            answerIndex: 2,
            explanation: "When two monosaccharides join to form a disaccharide, a water molecule is released — this is condensation (also called dehydration synthesis). Hydrolysis is the reverse (adding water to break bonds). Oxidation and digestion are separate processes.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "warmup",
          },
          {
            id: "bio-molecules-bank-mcq1-q03",
            question: "Which property of water allows it to act as a transport medium for dissolved substances in blood plasma?",
            options: ["High latent heat of vaporisation", "Cohesion between molecules", "Water is a good solvent for polar and ionic substances", "Low specific heat capacity"],
            answerIndex: 2,
            explanation: "Water's polarity means it can surround and dissolve ionic and polar substances (e.g. glucose, mineral ions, proteins in plasma). This makes it an excellent transport medium. Cohesion allows the transpiration stream, and high latent heat aids cooling — but neither is the reason water transports dissolved solutes.",
            guideRef: "The Importance of Water",
            difficulty: "core",
            hints: [
              "What does 'transport medium' mean — what needs to be dissolved?",
              "Is blood plasma aqueous (water-based)? What kinds of substances dissolve in water?",
            ],
          },
          {
            id: "bio-molecules-bank-mcq1-q04",
            question: "A triglyceride is hydrolysed completely. Which products are formed?",
            options: ["Glucose and fatty acids", "Glycerol and fatty acids", "Amino acids and glycerol", "Glycerol and glucose"],
            answerIndex: 1,
            explanation: "A triglyceride is formed from glycerol + 3 fatty acids. Hydrolysis (adding water) breaks the three ester bonds and regenerates glycerol and three fatty acid molecules. Glucose and amino acids are not components of triglycerides.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "warmup",
          },
          {
            id: "bio-molecules-bank-mcq1-q05",
            question: "A student adds Biuret reagent to four solutions and observes the following colours after 2 minutes:\n\nSolution 1: blue\nSolution 2: purple\nSolution 3: blue\nSolution 4: purple\n\nWhich solutions contain protein?",
            options: ["Solutions 1 and 3", "Solutions 2 and 4", "All four solutions", "Solution 2 only"],
            answerIndex: 1,
            explanation: "A purple/violet colour with Biuret reagent is a positive result for protein. Solutions 2 and 4 turned purple, so they contain protein. Solutions 1 and 3 stayed blue — no protein detected.",
            guideRef: "Food Tests",
            difficulty: "warmup",
          },
          {
            id: "bio-molecules-bank-mcq1-q06",
            question: "Starch is described as a polymer. What does this mean?",
            options: [
              "Starch contains many different types of monomer molecules.",
              "Starch is a large molecule made of many small, repeating subunits joined together.",
              "Starch can be dissolved in water to release energy.",
              "Starch is formed by hydrolysis of glucose.",
            ],
            answerIndex: 1,
            explanation: "A polymer is a large molecule built from many smaller repeating subunits (monomers) joined by covalent bonds. Starch is a polymer of glucose monomers linked by condensation. Option A is wrong because starch has only one monomer type (glucose). Option C is about function, not definition. Option D has the process backwards — condensation, not hydrolysis, builds starch.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "warmup",
          },
        ],
      },
      {
        id: "bio-molecules-bank-mcq-2",
        title: "Biological Molecules — MCQ Paper 2",
        description: "12 multiple-choice questions including harder application and experimental design questions.",
        questions: [
          {
            id: "bio-molecules-bank-mcq2-q01",
            question: "A food sample gives a negative result with Benedict's test even after hydrolysis with dilute HCl and neutralisation with sodium hydrogencarbonate. What can you conclude?",
            options: [
              "The food contains sucrose.",
              "The food contains cellulose.",
              "The food contains neither reducing sugars nor sucrose.",
              "The food must contain protein.",
            ],
            answerIndex: 2,
            explanation: "If Benedict's test is negative even after hydrolysis (which converts sucrose into glucose and fructose) and neutralisation, it means neither reducing sugars nor sucrose are present. If sucrose were present, hydrolysis would produce reducing sugars that would give a positive (brick-red) result.",
            guideRef: "Food Tests",
            difficulty: "core",
            hints: [
              "What does hydrolysis with HCl do to sucrose?",
              "If sucrose were present, what would the second Benedict's test show?",
              "The second test is negative — what does that eliminate?",
            ],
          },
          {
            id: "bio-molecules-bank-mcq2-q02",
            question: "During a condensation reaction, which bond is formed between a fatty acid and glycerol?",
            options: ["Peptide bond", "Glycosidic bond", "Hydrogen bond", "Ester bond"],
            answerIndex: 3,
            explanation: "The bond between a fatty acid carboxyl group (–COOH) and a hydroxyl group (–OH) of glycerol is an ester bond. Peptide bonds join amino acids; glycosidic bonds join sugars; hydrogen bonds are non-covalent and hold 3-D structures together.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "core",
            hints: [
              "Which two functional groups react when a fatty acid meets glycerol?",
              "Name the type of bond formed when –COOH and –OH react.",
            ],
          },
          {
            id: "bio-molecules-bank-mcq2-q03",
            question: "Which of the following correctly explains why ice floats on water?",
            options: [
              "Ice has a higher specific heat capacity than liquid water.",
              "Water is densest at 4 °C — ice (0 °C) is less dense than liquid water and floats.",
              "Ice has more hydrogen bonds per molecule than liquid water, making it heavier.",
              "Evaporation of liquid water makes the surface denser than ice.",
            ],
            answerIndex: 1,
            explanation: "Water reaches its maximum density at 4 °C. Below 4 °C, the hydrogen-bonded crystal lattice of ice is less dense than liquid water, so ice floats. This biological importance is that a layer of ice insulates the water below, allowing aquatic life to survive winter. Option C is incorrect — ice has more hydrogen bonds but they space molecules further apart, making ice less dense.",
            guideRef: "The Importance of Water",
            difficulty: "core",
            hints: [
              "At what temperature is liquid water at its maximum density?",
              "Is ice more or less dense than liquid water?",
              "Think about hydrogen bonds in ice — do they hold molecules closer together or further apart compared with liquid water?",
            ],
          },
          {
            id: "bio-molecules-bank-mcq2-q04",
            question: "A student tests a liquid food sample with the ethanol emulsion test. She dissolves the sample in ethanol, then pours the ethanol solution into water. The water remains clear. What conclusion can she draw?",
            options: [
              "The food contains a small amount of fat.",
              "The food does not contain fat (lipid).",
              "The food contains protein instead of fat.",
              "She should now heat the mixture to see if fat is present.",
            ],
            answerIndex: 1,
            explanation: "A clear result (no cloudiness) in the ethanol emulsion test means no fat/lipid is present (or is present in undetectable amounts). Fat dissolves in ethanol and re-precipitates as a cloudy emulsion when poured into water — if no cloudiness forms, no fat was detected. The test does not need heating.",
            guideRef: "Food Tests",
            difficulty: "warmup",
          },
          {
            id: "bio-molecules-bank-mcq2-q05",
            question: "A scientist compares the energy content of 1 g of fat with 1 g of starch. Which is correct, and why?",
            options: [
              "Starch releases more energy per gram because it contains more glucose units.",
              "Fat releases more energy per gram because it has a much higher ratio of hydrogen to oxygen, providing more bonds to oxidise.",
              "They release the same energy because both contain C, H, and O.",
              "Fat releases less energy per gram because it is solid and harder to digest.",
            ],
            answerIndex: 1,
            explanation: "Fat releases approximately 37 kJ g⁻¹ versus about 17 kJ g⁻¹ for carbohydrates. This is because fat molecules have far more C–H bonds (hydrogen-rich hydrocarbon chains) relative to oxygen, meaning there are more bonds available to be oxidised during respiration. Carbohydrates already have a 2:1 H:O ratio — they are more 'pre-oxidised'.",
            guideRef: "Elements in Biological Molecules",
            difficulty: "challenge",
            hints: [
              "Compare the H:O ratio in a fat molecule versus a carbohydrate — which has more hydrogen?",
              "In respiration, C–H bonds are oxidised to release energy. More C–H bonds → more energy.",
              "The formula (CH₂O)ₙ for carbohydrates already has oxygen 'built in' — fats have long chains that are almost all C–H bonds.",
              "This is why fat is a better long-term energy store per unit mass than glycogen.",
            ],
            strategy: "Compare the oxidation state (H:O ratio) of the two molecule classes, then link to energy released per gram.",
          },
          {
            id: "bio-molecules-bank-mcq2-q06",
            question: "A food sample contains protein. A student carries out the Biuret test and observes no colour change from blue. Which of the following is the MOST likely reason for this?",
            options: [
              "She forgot to add iodine solution.",
              "She did not heat the Biuret reagent.",
              "She forgot to add the NaOH (alkaline) component of the Biuret reagent, so the conditions were not alkaline.",
              "The protein concentration was too high.",
            ],
            answerIndex: 2,
            explanation: "The Biuret test requires alkaline conditions (NaOH) so that Cu²⁺ can coordinate with peptide bonds to form the purple complex. If NaOH is omitted, the pH will not be alkaline enough for the complex to form, giving a false negative. The Biuret test does not require heating. Iodine is for starch, not protein. A high protein concentration would give a stronger purple, not no colour.",
            guideRef: "Food Tests",
            difficulty: "challenge",
            hints: [
              "What are the two components of the Biuret test (or Biuret reagent)?",
              "What role does NaOH play? Does Cu²⁺ coordinate with peptide bonds under neutral or alkaline conditions?",
              "Which step, if omitted, would prevent the purple complex from forming even if protein is present?",
              "Consider: does the Biuret test need heating? (It does not.)",
            ],
            strategy: "Work through each component of the reagent and ask: 'What would happen if this were missing?'",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-molecules-bank-qa-1",
        title: "Biological Molecules — Structured Questions Paper 1",
        description: "Four structured questions on composition, macromolecule synthesis, and food tests.",
        questions: [
          {
            id: "bio-molecules-bank-qa1-q01",
            question: "The diagram below represents a protein molecule being built from amino acids.\n\n(a) Name the type of reaction by which amino acids are joined together. [1]\n(b) State the name of the bond formed between adjacent amino acids. [1]\n(c) State two elements found in proteins that are NOT found in fats. [2]\n(d) Explain how the structure of a protein is related to its function as an enzyme. [3]",
            marks: 7,
            modelAnswer: "(a) Condensation reaction (also accept: condensation polymerisation / dehydration synthesis).\n(b) Peptide bond.\n(c) Nitrogen and sulfur (accept either two from: N, S — nitrogen is required; sulfur is common but not universal).\n(d) Each protein has a unique sequence of amino acids (determined by the gene), which causes the polypeptide chain to fold into a specific 3-D shape. The active site of an enzyme has a shape that is complementary to its specific substrate (lock-and-key model). This allows the substrate to bind, lowering the activation energy of the reaction. If the shape changes (e.g. by heat or pH), the enzyme is denatured and loses function.",
            markScheme: [
              "(a) Condensation (reaction) / dehydration synthesis.",
              "(b) Peptide bond.",
              "(c) Nitrogen (N) — must be stated.",
              "(c) Sulfur (S) — also accepted for second mark.",
              "(d) Unique amino acid sequence → specific 3-D shape / folding.",
              "(d) Active site shape is complementary to specific substrate.",
              "(d) Change in shape (denaturation) → loss of enzyme function.",
            ],
            commonError: "Students often say 'proteins contain more elements than fats' without naming nitrogen specifically. For part (d), many students describe what enzymes do (lower activation energy) without linking enzyme function back to the specific 3-D shape of the protein.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "core",
            hints: [
              "Condensation joins monomers — what is released?",
              "CHON: which of these letters are NOT in C, H, O (the elements in fats)?",
              "For (d): how does amino acid sequence determine shape, and how does shape determine substrate specificity?",
            ],
          },
          {
            id: "bio-molecules-bank-qa1-q02",
            question: "A student carries out food tests on four food samples (A, B, C, D). The results are shown in the table:\n\nSample A: Iodine = blue-black; Benedict's = blue; Biuret = blue; Ethanol = cloudy\nSample B: Iodine = orange-brown; Benedict's = brick-red; Biuret = purple; Ethanol = clear\nSample C: Iodine = orange-brown; Benedict's = blue; Biuret = purple; Ethanol = clear\nSample D: Iodine = blue-black; Benedict's = blue; Biuret = blue; Ethanol = clear\n\n(a) Which sample contains starch but no fat? [1]\n(b) Which sample contains the widest variety of biological molecules? [1]\n(c) Explain why the student should include a tube of distilled water in each test. [2]\n(d) The student suspects Sample C also contains sucrose. Describe how she could test this. [3]",
            marks: 7,
            modelAnswer: "(a) Sample D — blue-black iodine (starch present), clear ethanol result (no fat).\n(b) Sample B — it gives positive results for reducing sugar (Benedict's brick-red), protein (Biuret purple), AND fat (ethanol cloudy). Three different classes detected.\n(c) Distilled water is a negative control. It should give a negative result with every reagent. If the negative control gives a positive result (e.g. turns brick-red with Benedict's), the reagent is contaminated or faulty and the results cannot be trusted.\n(d) Take a fresh portion of Sample C. Boil it with dilute hydrochloric acid for 2–3 minutes to hydrolyse any sucrose into glucose and fructose. Cool the mixture, then neutralise it by adding sodium hydrogencarbonate solution until fizzing stops (pH neutral). Now add Benedict's solution and heat in a water bath at ~80 °C. If the mixture turns brick-red/orange, sucrose was present in Sample C.",
            markScheme: [
              "(a) Sample D.",
              "(b) Sample B (positive for reducing sugar, protein, and fat — three classes).",
              "(c) Acts as a negative control / shows what a negative result looks like.",
              "(c) If the control gives a positive result, the reagent is faulty / results unreliable.",
              "(d) Heat with dilute HCl to hydrolyse sucrose.",
              "(d) Cool and neutralise with sodium hydrogencarbonate / NaHCO₃.",
              "(d) Add Benedict's solution and heat; brick-red result indicates sucrose was present.",
            ],
            commonError: "For (a), students often choose Sample A (which has starch but also fat). Reading all columns carefully is essential. For (d), many students forget the neutralisation step — heating Benedict's with HCl present would give an invalid result.",
            guideRef: "Food Tests",
            difficulty: "core",
            hints: [
              "For (a): starch = blue-black iodine; no fat = clear ethanol result. Which sample matches both?",
              "For (b): count how many positive results each sample has.",
              "For (d): why can't you do Benedict's directly if HCl was added? Think about what you need to neutralise.",
            ],
            strategy: "Read all columns before selecting — it is easy to choose a sample that satisfies one criterion but fails another.",
          },
          {
            id: "bio-molecules-bank-qa1-q03",
            question: "Water makes up about 70% of the cytoplasm of a typical cell. Explain why water is essential for life, giving three different reasons. [6]",
            marks: 6,
            modelAnswer: "First, water is the universal solvent: it dissolves polar and ionic substances (e.g. glucose, mineral ions, oxygen), allowing metabolic reactions to occur in aqueous solution and enabling substances to be transported in body fluids such as blood plasma. Second, water has a high specific heat capacity, meaning a large amount of energy is needed to raise its temperature by 1 °C. This buffers the cell and body against rapid temperature changes, maintaining stable conditions for enzyme activity. Third, water is a reactant in hydrolysis reactions — for example, the digestion of starch to glucose and proteins to amino acids requires water molecules to break the bonds between monomers. Water is also released in condensation reactions that build macromolecules.",
            markScheme: [
              "Water is a solvent / dissolves polar and ionic substances → allows metabolic reactions to occur in aqueous solution.",
              "High specific heat capacity → resists temperature change → stable conditions for enzymes.",
              "High latent heat of vaporisation → evaporation (sweating/transpiration) removes large amounts of heat → cooling.",
              "Water is a reactant in hydrolysis → digestion / breakdown of polymers.",
              "Cohesion of water molecules → continuous water column in xylem / transpiration stream.",
              "Habitat for aquatic organisms; ice floats (insulates) / density maximum at 4 °C.",
              "(Award 2 marks per reason: 1 mark for stating the property, 1 mark for the biological significance. Max 6 marks for any three fully explained reasons.)",
            ],
            commonError: "Students often list properties (high specific heat capacity) without explaining the biological consequence (stable conditions for enzymes). Both parts of the explanation are needed for full marks.",
            guideRef: "The Importance of Water",
            difficulty: "core",
            hints: [
              "Think of three different roles: transport, temperature regulation, chemical reactions.",
              "For each role, name the specific property of water that makes it suited to that role.",
              "Always link the property to a biological process or organism-level effect.",
            ],
            strategy: "Property → consequence → biological example (three-part chain for each reason).",
          },
          {
            id: "bio-molecules-bank-qa1-q04",
            question: "A scientist investigates the rate at which amylase breaks down starch. She takes a starch solution and adds amylase. Every 30 seconds she removes a small drop and tests it with iodine solution.\n\n(a) Describe and explain what she would observe with the iodine test over time. [3]\n(b) Explain why the experiment should be carried out at pH 7 and 37 °C. [3]\n(c) The scientist repeats the experiment using cellulose instead of starch. Predict what she would observe and explain why. [2]",
            marks: 8,
            modelAnswer: "(a) At the start, the iodine solution turns blue-black because starch is present. As time progresses, the blue-black colour becomes less intense (lighter) because the amylase is hydrolysing the starch into maltose (and eventually glucose). After sufficient time, the iodine stays orange-brown (no colour change) because all the starch has been broken down and none remains. (b) pH 7 is the optimum pH for amylase — at this pH the active site has the correct shape to bind starch (its substrate). 37 °C is close to the optimum temperature for amylase; at this temperature, enzyme–substrate collisions are frequent enough for rapid hydrolysis, and the enzyme is not denatured. Higher temperatures would denature the enzyme and different pH values would change the ionisation of the active site, altering its shape and reducing activity. (c) No colour change from orange-brown at any time point. Amylase cannot break down cellulose because cellulose has beta glycosidic bonds, whereas amylase is only complementary (specific) to alpha glycosidic bonds in starch. The cellulose would remain intact throughout.",
            markScheme: [
              "(a) Initially blue-black — starch present.",
              "(a) Colour fades / becomes lighter over time as starch is hydrolysed.",
              "(a) Eventually stays orange-brown — all starch broken down / no starch remains.",
              "(b) pH 7 = optimum pH for amylase; active site shape complementary to starch at this pH.",
              "(b) 37 °C ≈ optimum temperature; maximises enzyme–substrate collisions without denaturation.",
              "(c) Iodine stays orange-brown throughout — no starch being formed; cellulose not digested by amylase.",
              "(c) Amylase active site not complementary to beta glycosidic bonds of cellulose.",
            ],
            commonError: "In (c), students often say 'amylase cannot break down cellulose because they are different molecules' without explaining the structural reason (beta vs. alpha bonds and enzyme specificity).",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "challenge",
            hints: [
              "For (a): what colour does iodine give with starch, and what happens as starch is broken down?",
              "For (b): what happens to enzyme active site shape if pH or temperature is far from optimum?",
              "For (c): what is the key structural difference between starch and cellulose? Can amylase recognise beta bonds?",
              "Remember enzyme specificity — the active site is complementary only to the correct substrate.",
            ],
            strategy: "Apply the lock-and-key model: if the bond type changes, the 'lock' (active site) no longer fits the 'key' (substrate).",
          },
        ],
      },
      {
        id: "bio-molecules-bank-qa-2",
        title: "Biological Molecules — Structured Questions Paper 2",
        description: "Four structured questions including synoptic and challenge questions linking molecule structure to function.",
        questions: [
          {
            id: "bio-molecules-bank-qa2-q01",
            question: "A student is given an unknown white powder. She suspects it may be either starch or a protein.\n\n(a) Plan an experiment to determine which molecule the powder contains. Your plan should include reagents, method, expected results, and controls. [5]\n(b) The powder turns out to be a mixture of both starch and protein. Explain whether the tests could still identify both molecules in the mixture. [2]",
            marks: 7,
            modelAnswer: "(a) Dissolve a sample of the powder in water. Divide the solution into two tubes. In tube 1: add a few drops of iodine solution and observe the colour. A blue-black result indicates starch; orange-brown indicates starch is absent. In tube 2: add Biuret reagent (NaOH then CuSO₄ solution) and observe. A purple/violet colour indicates protein; blue indicates no protein. Include a positive control (known starch solution for tube 1; known albumin/egg white solution for tube 2) and a negative control (distilled water for each test) to validate the reagents.\n(b) Yes — the iodine test and Biuret test are independent and detect different molecules. A mixture of starch and protein would give blue-black with iodine AND purple with Biuret, allowing both to be identified simultaneously. Neither test interferes with the other.",
            markScheme: [
              "(a) Dissolves powder in water / makes a solution.",
              "(a) Iodine test: adds iodine solution; blue-black = starch present.",
              "(a) Biuret test: adds NaOH then CuSO₄ (or Biuret reagent); purple = protein present.",
              "(a) Positive control named (e.g. starch solution, egg white) AND negative control (distilled water).",
              "(a) States expected results for both positive and negative outcomes.",
              "(b) Yes — both tests detect different molecules and do not interfere.",
              "(b) Mixture would give blue-black (iodine) AND purple (Biuret) — both molecules identified.",
            ],
            commonError: "Students often forget both a positive AND a negative control, or describe only one of the two tests. Stating expected results (not just procedures) is required for full marks.",
            guideRef: "Designing and Interpreting Food-Test Experiments",
            difficulty: "core",
            hints: [
              "You need two different tests — one for each molecule.",
              "What is the purpose of a positive control? What is the purpose of a negative control?",
              "For (b): do the iodine test and Biuret test detect the same thing? Do they interfere?",
            ],
          },
          {
            id: "bio-molecules-bank-qa2-q02",
            question: "The diagram shows the structure of a triglyceride.\n\n(a) Name the bond labelled X between glycerol and a fatty acid. [1]\n(b) Describe how a triglyceride molecule is formed from its subunits. [3]\n(c) Explain why fats are a more efficient long-term energy store than glycogen per unit mass. [3]\n(d) Suggest why subcutaneous fat (fat stored under the skin) is beneficial to animals living in cold environments. [2]",
            marks: 9,
            modelAnswer: "(a) Ester bond.\n(b) Glycerol and three fatty acids are joined by condensation reactions. The carboxyl group (–COOH) of each fatty acid reacts with a hydroxyl group (–OH) on the glycerol. Three ester bonds are formed and three molecules of water are released, one per bond.\n(c) Fat molecules contain a much higher proportion of hydrogen relative to oxygen compared with glycogen (which has a 2:1 H:O ratio as a carbohydrate). In cellular respiration, C–H bonds are oxidised to release energy. Fat has far more C–H bonds per gram than glycogen, so releases approximately twice as much energy per gram (~37 kJ g⁻¹ for fat versus ~17 kJ g⁻¹ for carbohydrate). This makes fat a more efficient long-term store — the same mass of fat stores more than twice as much energy.\n(d) Subcutaneous fat is a poor conductor of heat. It forms an insulating layer that reduces the rate of heat loss from the body to the cold surroundings. This helps the animal maintain a stable body temperature (thermoregulation) and reduces the energy cost of keeping warm.",
            markScheme: [
              "(a) Ester bond.",
              "(b) Condensation reaction(s) — water released / one water per bond.",
              "(b) Three ester bonds formed between –OH groups of glycerol and –COOH of fatty acids.",
              "(b) Three water molecules released in total.",
              "(c) Fat has higher H:O ratio / more C–H bonds per gram than glycogen.",
              "(c) More C–H bonds oxidised in respiration → more energy released per gram.",
              "(c) Fat releases ~twice the energy per gram compared with carbohydrate / ~37 kJ g⁻¹ vs ~17 kJ g⁻¹.",
              "(d) Fat is a poor heat conductor / acts as thermal insulation.",
              "(d) Reduces heat loss to surroundings / helps maintain body temperature.",
            ],
            commonError: "For (c), students often say 'fat has more energy because it has more carbon' — but carbon alone is not the reason. The key is the H:O ratio and the abundance of C–H bonds that can be oxidised.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "challenge",
            hints: [
              "For (b): what is released in each condensation? How many bonds form?",
              "For (c): compare the H:O ratio of a fat (CH₂ chain) with a carbohydrate ((CH₂O)ₙ).",
              "For (c): respiration oxidises C–H bonds — which molecule has more of them per gram?",
              "For (d): think about what physical property of fat makes it a good insulator.",
            ],
            strategy: "For energy comparisons, always compare H:O ratios — it is the key to understanding why fats yield more energy per gram than carbohydrates.",
            solutions: [
              {
                label: "H:O ratio argument",
                steps: [
                  "Carbohydrate empirical formula: (CH₂O)ₙ — one oxygen per carbon, H:O ratio 2:1.",
                  "Fatty acid chain: mainly –CH₂– units — almost no oxygen; H:O ratio >> 2:1.",
                  "In respiration, C–H bonds are oxidised: C–H + O₂ → CO₂ + H₂O + energy.",
                  "More C–H bonds per gram in fat → more ATP produced per gram → ~37 kJ g⁻¹ (fat) vs ~17 kJ g⁻¹ (carbohydrate).",
                ],
              },
            ],
          },
          {
            id: "bio-molecules-bank-qa2-q03",
            question: "A scientist measures the vitamin C content of orange juice freshly squeezed, stored at room temperature for 24 hours, and stored in a refrigerator for 24 hours. She uses DCPIP solution.\n\n(a) State the positive result for the DCPIP test for vitamin C. [1]\n(b) The scientist adds juice drop by drop to 1 cm³ of DCPIP. She records the number of drops needed to decolourise the DCPIP. Explain why fewer drops needed indicates higher vitamin C concentration. [2]\n(c) Her results: Fresh = 6 drops; Room temperature 24 h = 15 drops; Refrigerator 24 h = 8 drops. Conclude what these results suggest about vitamin C stability. [3]\n(d) State one control the scientist should have used and explain its purpose. [2]",
            marks: 8,
            modelAnswer: "(a) DCPIP is decolourised — changes from blue to colourless.\n(b) Each drop contains a fixed volume of juice with a certain amount of vitamin C. If the concentration is higher, each drop contains more vitamin C, so fewer drops are needed to supply enough vitamin C to reduce all the DCPIP and decolourise it. If concentration is lower, more drops are needed to deliver the same total amount of vitamin C.\n(c) The results suggest that vitamin C is unstable and is broken down (oxidised) over time, but that cold storage slows this degradation. Fresh juice had the highest vitamin C (fewest drops needed). Storage at room temperature for 24 hours greatly reduced vitamin C (15 drops — about 2.5× more than fresh). Refrigeration slowed the loss: 8 drops after 24 h in the fridge, compared with 15 drops at room temperature. The scientist can conclude that refrigeration preserves vitamin C better than room temperature storage.\n(d) A positive control: use a solution of known concentration of vitamin C (ascorbic acid). This confirms the DCPIP is working correctly and decolourises with a known amount of vitamin C. Without it, a clear (negative) result could mean either no vitamin C or faulty DCPIP.",
            markScheme: [
              "(a) DCPIP changes from blue to colourless (decolourised).",
              "(b) Higher concentration → more vitamin C per drop → fewer drops needed to reduce all DCPIP.",
              "(b) Each drop delivers a fixed volume; concentration determines how much vitamin C is in each drop.",
              "(c) Vitamin C decreases over time (room temperature 24 h needs more drops than fresh).",
              "(c) Refrigeration slows degradation of vitamin C (fewer drops than room temperature after 24 h).",
              "(c) Correct comparison of all three results to support conclusion.",
              "(d) Positive control: known vitamin C solution — confirms DCPIP reagent is working.",
              "(d) Without positive control, cannot distinguish faulty reagent from genuine absence of vitamin C.",
            ],
            commonError: "In (b), students often just say 'more vitamin C decolourises it faster' without explaining the per-drop logic. In (c), many students compare only two values and miss the full three-way conclusion.",
            guideRef: "Designing and Interpreting Food-Test Experiments",
            difficulty: "core",
            hints: [
              "For (b): each drop has the same volume — what changes between high- and low-concentration samples?",
              "For (c): rank the three conditions by drop count and state what that means for vitamin C concentration.",
              "For (d): a positive control checks the reagent is working — what known substance would you use?",
            ],
            strategy: "When interpreting quantitative food-test data, always convert 'drops needed' back to concentration meaning before drawing biological conclusions.",
          },
          {
            id: "bio-molecules-bank-qa2-q04",
            question: "[CHALLENGE — synoptic] Sickle cell disease is caused by a single amino acid change in the haemoglobin protein: glutamic acid (charged, hydrophilic) is replaced by valine (uncharged, hydrophobic) at one position in the chain.\n\n(a) Explain how a single amino acid substitution can change the 3-D shape of a protein. [3]\n(b) In deoxygenated conditions, sickle haemoglobin molecules stick together, forming rigid fibres that distort red blood cells into a sickle shape. Use your knowledge of amino acid properties to explain why valine, but not glutamic acid, causes this sticking. [3]\n(c) Explain what this example tells us about the relationship between a protein's amino acid sequence and its function. [2]",
            marks: 8,
            modelAnswer: "(a) The sequence of amino acids in a polypeptide chain determines the interactions between neighbouring amino acids (e.g. hydrogen bonds, disulfide bridges, hydrophobic interactions). Changing one amino acid changes the chemical nature of that part of the chain. This alters the folding pattern because the new amino acid forms different interactions with surrounding amino acids. Even one substitution in the hundreds of amino acids in haemoglobin can alter the overall 3-D shape enough to change function.\n(b) Valine has a non-polar, hydrophobic R-group. When haemoglobin is deoxygenated, a hydrophobic 'pocket' is exposed on the surface of the protein. The valine residue on another haemoglobin molecule can slot into this pocket (hydrophobic interaction — like dissolves like). Glutamic acid has a charged, hydrophilic R-group that would repel or be incompatible with a hydrophobic pocket, preventing this interaction. Therefore glutamic acid does not cause sticking.\n(c) This example demonstrates that protein function depends absolutely on its specific 3-D shape, which in turn is determined by the precise sequence of amino acids. Even a single amino acid change can alter the shape enough to produce a dramatically different (and in this case, dangerous) function. The amino acid sequence (primary structure) encodes all the information needed for the protein to fold correctly and function.",
            markScheme: [
              "(a) Amino acid sequence determines folding / interactions between R-groups (hydrogen bonds, hydrophobic interactions etc.).",
              "(a) New amino acid has different chemical properties → different interactions with neighbours.",
              "(a) Different interactions → altered folding → different 3-D shape.",
              "(b) Valine is hydrophobic / non-polar — interacts with hydrophobic pocket on adjacent molecule.",
              "(b) Glutamic acid is hydrophilic / charged — cannot enter hydrophobic pocket / repelled.",
              "(b) Therefore sickle haemoglobin molecules stick together; normal haemoglobin does not.",
              "(c) Protein function depends on specific 3-D shape.",
              "(c) A single amino acid change can alter shape sufficiently to change / destroy function — the sequence encodes function.",
            ],
            commonError: "Students often describe sickle cell disease in general terms (anaemia, oxygen transport) without specifically explaining the hydrophobic/hydrophilic interaction between valine and the pocket. The question asks for molecular-level reasoning.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "challenge",
            hints: [
              "For (a): how do R-groups interact with each other to fold the protein? What happens if one R-group changes?",
              "For (b): valine = hydrophobic; glutamic acid = hydrophilic. What happens when a hydrophobic residue meets a hydrophobic pocket?",
              "For (b): 'like dissolves like' — hydrophobic groups cluster together; hydrophilic groups avoid hydrophobic environments.",
              "For (c): state the general principle about sequence → structure → function, using this example as evidence.",
            ],
            strategy: "Molecular property → interaction → structural consequence → functional outcome (four-step reasoning chain).",
            solutions: [
              {
                label: "Hydrophobic interaction argument",
                steps: [
                  "Step 1: Valine's R-group is non-polar (hydrophobic). Glutamic acid's R-group is charged (hydrophilic).",
                  "Step 2: In deoxygenated sickle haemoglobin, a hydrophobic pocket is exposed on the protein surface.",
                  "Step 3: Valine on one molecule inserts into the hydrophobic pocket of another (hydrophobic interaction — minimises contact with water).",
                  "Step 4: Glutamic acid's charged R-group cannot enter a hydrophobic pocket — electrostatic and thermodynamic barrier prevents binding.",
                  "Step 5: Result: sickle Hb polymerises into fibres under deoxygenated conditions; normal Hb does not.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
