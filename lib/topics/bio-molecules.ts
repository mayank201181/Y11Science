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
      // ── MCQ PAPER 1 ── elements, monomers/polymers, carbohydrates, water
      {
        id: "bio-molecules-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Chemical elements, monomers and polymers, carbohydrates, and the importance of water.",
        questions: [
          {
            id: "bio-molecules-bm1-01",
            question: "Which three elements are found in ALL carbohydrates?",
            options: [
              "Carbon, hydrogen, nitrogen",
              "Carbon, hydrogen, oxygen",
              "Carbon, oxygen, nitrogen",
              "Carbon, hydrogen, sulfur",
            ],
            answerIndex: 1,
            explanation: "Carbohydrates contain only carbon, hydrogen, and oxygen, with the hydrogen and oxygen in a 2:1 ratio (CH₂O)ₙ. Nitrogen is found in proteins; sulfur in some proteins. No carbohydrate contains N or S.",
            difficulty: "warmup",
            guideRef: "Elements in Biological Molecules",
          },
          {
            id: "bio-molecules-bm1-02",
            question: "What is the monomer (building block) of starch, glycogen, and cellulose?",
            options: ["Amino acid", "Glycerol", "Glucose", "Fatty acid"],
            answerIndex: 2,
            explanation: "Starch, glycogen, and cellulose are all polymers of the single sugar glucose. They differ only in how the glucose units are bonded and arranged. Amino acids build proteins; glycerol and fatty acids build lipids.",
            difficulty: "warmup",
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bm1-03",
            question: "A reaction joins two monomers and releases a molecule of water. This reaction is called:",
            options: ["Hydrolysis", "Condensation", "Respiration", "Oxidation"],
            answerIndex: 1,
            explanation: "Condensation joins two molecules together and releases water. Hydrolysis is the reverse — it uses water to break a bond. Respiration and oxidation are unrelated processes.",
            difficulty: "warmup",
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bm1-04",
            question: "Why is glycogen, rather than starch, used as the carbohydrate energy store in animals such as humans?",
            options: [
              "Glycogen contains nitrogen, which animals need.",
              "Glycogen is more highly branched, so glucose can be released quickly when energy demand is high.",
              "Glycogen is soluble, so it dissolves easily in the blood.",
              "Glycogen is made of fructose, which animals respire faster.",
            ],
            answerIndex: 1,
            explanation: "Glycogen is more branched than starch. The many free ends allow enzymes to release glucose rapidly when an animal suddenly needs energy (e.g. during exercise). Glycogen is still made of glucose, is insoluble, and contains no nitrogen.",
            difficulty: "core",
            hints: [
              "Both starch and glycogen are made of glucose — so the difference must be in the structure.",
              "Glycogen has more branches than starch. What is at the end of each branch?",
              "Animals can move suddenly — do they need glucose released slowly or quickly?",
            ],
            guideRef: "Linking Molecule Structure to Function",
          },
          {
            id: "bio-molecules-bm1-05",
            question: "Which property of water explains why aquatic habitats and large organisms resist sudden temperature changes?",
            options: [
              "Water is a polar molecule.",
              "Water has a high specific heat capacity.",
              "Water has a high latent heat of vaporisation.",
              "Water is a good solvent.",
            ],
            answerIndex: 1,
            explanation: "A high specific heat capacity means a large amount of energy is needed to change water's temperature, so water (and the organisms/habitats made largely of it) warms and cools slowly — buffering against sudden change. Latent heat of vaporisation relates to cooling by evaporation, not general temperature stability.",
            difficulty: "core",
            hints: [
              "Which property is about how much energy water needs to change temperature?",
              "Specific heat capacity = energy to raise temperature; latent heat = energy to evaporate.",
              "Resisting temperature change is about heating/cooling, not evaporation.",
            ],
            guideRef: "The Importance of Water",
          },
          {
            id: "bio-molecules-bm1-06",
            question: "Cellulose and starch are both made from glucose, yet humans can digest starch but not cellulose. The best explanation is that:",
            options: [
              "Cellulose contains a different element from starch.",
              "Starch has alpha glycosidic bonds (broken by amylase) while cellulose has beta glycosidic bonds (humans lack cellulase).",
              "Cellulose molecules are too large to enter cells.",
              "Starch is soluble and cellulose is not.",
            ],
            answerIndex: 1,
            explanation: "The two polymers differ in the type of glycosidic bond. Starch's alpha bonds are broken by the human enzyme amylase; cellulose's beta bonds require cellulase, which humans do not produce. Both contain only C, H, O. Solubility is not the reason cellulose is indigestible.",
            difficulty: "challenge",
            hints: [
              "Same monomer (glucose), different function — focus on the bonds between glucose units.",
              "Alpha and beta glycosidic bonds have different shapes.",
              "Which enzyme do humans have — amylase or cellulase?",
              "An enzyme only works on a bond whose shape fits its active site.",
            ],
            guideRef: "Linking Molecule Structure to Function",
          },
          {
            id: "bio-molecules-bm1-07",
            question: "Sucrose, a disaccharide, is made by condensation. How many water molecules are released when one sucrose molecule is formed from its two monosaccharides?",
            options: ["0", "1", "2", "3"],
            answerIndex: 1,
            explanation: "Sucrose forms from one glucose + one fructose joined by a single glycosidic bond. Forming one bond by condensation releases exactly one water molecule.",
            difficulty: "core",
            hints: [
              "How many glycosidic bonds join two monosaccharides into a disaccharide?",
              "Each condensation bond releases one water molecule.",
              "One bond → how many water molecules?",
            ],
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bm1-08",
            question: "Which statement about the storage carbohydrate starch is correct?",
            options: [
              "It is soluble, so it dissolves and is easily transported in the blood.",
              "It is insoluble, so it does not affect the water potential of the cell and stays where it is stored.",
              "It contains nitrogen, which makes it a good energy store.",
              "It is made of fatty acids joined by ester bonds.",
            ],
            answerIndex: 1,
            explanation: "Starch is insoluble, so it does not draw water into the cell by osmosis and does not dissolve away — ideal for compact storage. It is made of glucose (not fatty acids) and contains no nitrogen.",
            difficulty: "core",
            hints: [
              "A good store should not dissolve away or change the cell's water balance.",
              "Is starch soluble or insoluble?",
              "Insoluble molecules do not affect water potential.",
            ],
            guideRef: "Linking Molecule Structure to Function",
          },
          {
            id: "bio-molecules-bm1-09",
            question: "Which of the following is a reactant in hydrolysis but a product of condensation?",
            options: ["Glucose", "Water", "Carbon dioxide", "Oxygen"],
            answerIndex: 1,
            explanation: "Water is added (used up) in hydrolysis to break bonds, and water is released (produced) in condensation when bonds form. This dual role makes water central to building and breaking biological polymers.",
            difficulty: "core",
            hints: [
              "Condensation releases a small molecule — which one?",
              "Hydrolysis uses the same small molecule to break bonds.",
              "The word 'hydro-lysis' contains a clue.",
            ],
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bm1-10",
            question: "A plant cell needs to store a large amount of glucose without affecting the cell's water balance. Storing it as starch rather than as free glucose is advantageous because:",
            options: [
              "Starch contains more energy per molecule than glucose.",
              "Starch is insoluble and compact, so it does not lower the cell's water potential or take up much space.",
              "Starch can leave the cell more easily than glucose.",
              "Starch is broken down faster than glucose can be made.",
            ],
            answerIndex: 1,
            explanation: "Many dissolved glucose molecules would lower water potential and draw in water by osmosis, and would diffuse away. Converting them to one large, insoluble, compact starch molecule avoids both problems. Starch does not contain 'more' energy than the glucose it is made of — it simply stores it conveniently.",
            difficulty: "challenge",
            hints: [
              "Think about osmosis: many small dissolved molecules vs one large insoluble one.",
              "Soluble glucose would lower water potential — what does insoluble starch avoid?",
              "Also consider space (compactness) and whether the molecule can diffuse out of the cell.",
            ],
            guideRef: "Linking Molecule Structure to Function",
          },
        ],
      },
      // ── MCQ PAPER 2 ── proteins, lipids, elements, structure-function
      {
        id: "bio-molecules-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Proteins, amino acids, lipids, the elements in each class, and structure linked to function.",
        questions: [
          {
            id: "bio-molecules-bm2-01",
            question: "Which element is present in proteins but NOT in carbohydrates or lipids?",
            options: ["Carbon", "Oxygen", "Nitrogen", "Hydrogen"],
            answerIndex: 2,
            explanation: "Proteins contain C, H, O, and nitrogen (N) — and often sulfur. Nitrogen is the key element that distinguishes proteins from carbohydrates and lipids, which contain only C, H, and O.",
            difficulty: "warmup",
            guideRef: "Elements in Biological Molecules",
          },
          {
            id: "bio-molecules-bm2-02",
            question: "A triglyceride (fat) is built from which subunits?",
            options: [
              "Three glycerol molecules and one fatty acid",
              "One glycerol molecule and three fatty acids",
              "Three amino acids and one glycerol",
              "One glucose and three fatty acids",
            ],
            answerIndex: 1,
            explanation: "A triglyceride is made of one glycerol molecule joined to three fatty acid molecules by three ester bonds. Glucose and amino acids are not part of a triglyceride.",
            difficulty: "warmup",
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bm2-03",
            question: "What name is given to the bond that joins two amino acids together?",
            options: ["Ester bond", "Glycosidic bond", "Peptide bond", "Hydrogen bond"],
            answerIndex: 2,
            explanation: "Amino acids are joined by peptide bonds, formed by condensation between the amino group (–NH₂) of one and the carboxyl group (–COOH) of the next. Ester bonds join fatty acids to glycerol; glycosidic bonds join sugars.",
            difficulty: "warmup",
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bm2-04",
            question: "Per gram, fats release more than twice as much energy as carbohydrates when respired. The best reason is that:",
            options: [
              "Fats contain nitrogen, which stores extra energy.",
              "Fats have a higher proportion of hydrogen (more C–H bonds) and less oxygen than carbohydrates.",
              "Fats are insoluble in water.",
              "Fats are smaller molecules than carbohydrates.",
            ],
            answerIndex: 1,
            explanation: "Fats are far richer in hydrogen (long hydrocarbon chains, mostly C–H bonds) and contain proportionally less oxygen than carbohydrates. Oxidising these many C–H bonds releases a lot of energy, so fats are more energy-dense. Insolubility and molecule size are not the reason.",
            difficulty: "core",
            hints: [
              "Energy comes from oxidising bonds — especially C–H bonds.",
              "Compare the proportion of hydrogen in a fat versus a carbohydrate.",
              "Carbohydrates are already partly oxidised (more oxygen); fats are not.",
            ],
            guideRef: "Linking Molecule Structure to Function",
          },
          {
            id: "bio-molecules-bm2-05",
            question: "A protein's primary structure is best described as:",
            options: [
              "The 3-D folded shape of the protein.",
              "The sequence (order) of amino acids in the polypeptide chain.",
              "The number of glucose units in the chain.",
              "The fatty acids attached to the glycerol backbone.",
            ],
            answerIndex: 1,
            explanation: "The primary structure of a protein is the specific sequence (order) of its amino acids, determined by the gene. This sequence then determines how the chain folds into its 3-D shape. Glucose and fatty acids are not part of proteins.",
            difficulty: "core",
            hints: [
              "Proteins are polymers of amino acids — what is the simplest thing about a chain?",
              "Primary = the basic order/sequence, before any folding.",
              "Folding into 3-D shape comes later and depends on this sequence.",
            ],
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bm2-06",
            question: "Some proteins contain sulfur. Sulfur is important because it:",
            options: [
              "Provides the main energy store of the protein.",
              "Forms bridges between parts of protein chains, helping to hold the 3-D shape steady.",
              "Joins amino acids together into the chain.",
              "Makes proteins soluble in water.",
            ],
            answerIndex: 1,
            explanation: "Sulfur (from amino acids such as cysteine) forms bridges (disulfide bridges) that link parts of a protein chain together, stabilising its 3-D shape. Amino acids are joined by peptide bonds, not sulfur bridges; sulfur is not an energy store.",
            difficulty: "challenge",
            hints: [
              "Sulfur is found in the side groups of certain amino acids.",
              "A protein needs to hold a precise 3-D shape — what could lock parts together?",
              "Think 'bridges' between different points on the folded chain.",
              "This is different from the peptide bonds that join amino acids in sequence.",
            ],
            guideRef: "Elements in Biological Molecules",
          },
          {
            id: "bio-molecules-bm2-07",
            question: "An enzyme works on only one type of substrate because:",
            options: [
              "The enzyme is made of fatty acids shaped like the substrate.",
              "The enzyme's active site has a specific 3-D shape, complementary to the substrate (lock-and-key).",
              "The enzyme contains nitrogen and the substrate does not.",
              "The substrate dissolves the enzyme.",
            ],
            answerIndex: 1,
            explanation: "An enzyme is a protein whose precise amino acid sequence folds into a specific 3-D shape. Its active site is complementary to one substrate (the lock-and-key model), so it is specific. Enzymes are proteins, not fats.",
            difficulty: "core",
            hints: [
              "Enzymes are proteins — their function depends on shape.",
              "The active site fits one substrate like a lock fits one key.",
              "What determines a protein's shape? Its amino acid sequence.",
            ],
            guideRef: "Linking Molecule Structure to Function",
          },
          {
            id: "bio-molecules-bm2-08",
            question: "Which structural feature makes fats good for waterproofing (e.g. the waxy cuticle of leaves) and for forming cell membranes?",
            options: [
              "Their long, non-polar hydrocarbon tails make them hydrophobic (water-repelling).",
              "Their nitrogen content makes them slippery.",
              "They are soluble in water and spread out evenly.",
              "They are made of glucose, which repels water.",
            ],
            answerIndex: 0,
            explanation: "Fats have long non-polar hydrocarbon tails, making them hydrophobic. This water-repelling property suits them to waterproofing and to forming the hydrophobic core of cell membranes. Fats contain no nitrogen and are not made of glucose.",
            difficulty: "core",
            hints: [
              "'Hydrophobic' means water-repelling — which part of a fat causes this?",
              "Are the hydrocarbon tails polar or non-polar?",
              "Non-polar regions do not mix with water — useful for a barrier.",
            ],
            guideRef: "Linking Molecule Structure to Function",
          },
          {
            id: "bio-molecules-bm2-09",
            question: "A long polypeptide is completely hydrolysed. What is produced?",
            options: ["Glucose units", "Amino acids", "Glycerol and fatty acids", "Maltose"],
            answerIndex: 1,
            explanation: "Proteins are polymers of amino acids joined by peptide bonds. Hydrolysis adds water to break every peptide bond, releasing the individual amino acids. Glucose, glycerol, and maltose come from carbohydrates or lipids, not proteins.",
            difficulty: "warmup",
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bm2-10",
            question: "Two fats, one solid (a fat) and one liquid (an oil) at room temperature, contain the same elements. The difference between them is mainly due to:",
            options: [
              "The number of nitrogen atoms present.",
              "The degree of saturation of the fatty acid chains.",
              "Whether they contain glucose or glycerol.",
              "Whether they were made by condensation or hydrolysis.",
            ],
            answerIndex: 1,
            explanation: "Fats (solid) and oils (liquid) both contain C, H, and O and are both triglycerides. The difference is the saturation of the fatty acid chains — saturated chains pack tightly (solid fats), unsaturated chains have kinks and pack loosely (liquid oils). Neither contains nitrogen.",
            difficulty: "challenge",
            hints: [
              "Fats and oils are both triglycerides with the same elements — so look at the fatty acid chains.",
              "Saturated chains are straight and pack tightly; unsaturated chains have kinks.",
              "Tighter packing → solid; looser packing → liquid.",
              "This is the saturated vs unsaturated distinction.",
            ],
            guideRef: "Linking Molecule Structure to Function",
          },
        ],
      },
      // ── MCQ PAPER 3 ── food tests (qualitative + semi-quantitative)
      {
        id: "bio-molecules-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Food tests: iodine, Benedict's (and semi-quantitative), Biuret, ethanol emulsion, and DCPIP.",
        questions: [
          {
            id: "bio-molecules-bm3-01",
            question: "Which reagent and positive colour change correctly identify starch?",
            options: [
              "Benedict's solution → brick-red",
              "Iodine solution → blue-black",
              "Biuret reagent → purple",
              "Ethanol → cloudy white",
            ],
            answerIndex: 1,
            explanation: "Iodine solution (orange-brown) turns blue-black in the presence of starch. Benedict's tests reducing sugars, Biuret tests protein, and the ethanol emulsion test detects fats.",
            difficulty: "warmup",
            guideRef: "Food Tests",
          },
          {
            id: "bio-molecules-bm3-02",
            question: "Which test requires the sample to be HEATED in a water bath to give a valid result?",
            options: ["Iodine test for starch", "Biuret test for protein", "Benedict's test for reducing sugar", "Ethanol test for fat"],
            answerIndex: 2,
            explanation: "Benedict's solution must be heated (water bath, ~80 °C) for the reducing sugar to reduce Cu²⁺ to Cu⁺, forming the brick-red precipitate. The iodine, Biuret, and ethanol tests are carried out at room temperature.",
            difficulty: "warmup",
            guideRef: "Food Tests",
          },
          {
            id: "bio-molecules-bm3-03",
            question: "A positive Biuret test for protein produces which colour?",
            options: ["Brick-red", "Blue-black", "Purple/violet", "Cloudy white"],
            answerIndex: 2,
            explanation: "Biuret reagent (blue) turns purple/violet when protein is present, because Cu²⁺ ions coordinate with the peptide bonds in alkaline conditions. Brick-red = reducing sugar; blue-black = starch; cloudy white = fat.",
            difficulty: "warmup",
            guideRef: "Food Tests",
          },
          {
            id: "bio-molecules-bm3-04",
            question: "In the ethanol emulsion test for fats, a positive result is a cloudy white emulsion. This forms because:",
            options: [
              "Fat reacts chemically with ethanol to form a white solid.",
              "Fat dissolves in ethanol but is insoluble in water, so it forms tiny droplets when poured into water.",
              "Ethanol turns cloudy when heated with fat.",
              "Fat reduces the ethanol to a white precipitate.",
            ],
            answerIndex: 1,
            explanation: "Fat dissolves in ethanol but is insoluble in water. When the fat-in-ethanol solution is poured into water, the fat comes out of solution as countless tiny droplets, scattering light and producing a milky emulsion. No chemical reaction occurs.",
            difficulty: "core",
            hints: [
              "Is fat soluble in ethanol? Is it soluble in water?",
              "What happens to dissolved fat when its ethanol solvent meets water?",
              "Tiny droplets suspended in water scatter light — what does that look like?",
            ],
            guideRef: "Food Tests",
          },
          {
            id: "bio-molecules-bm3-05",
            question: "Benedict's test can be made semi-quantitative. A sample giving a GREEN colour after heating, compared with one giving a BRICK-RED colour, contains:",
            options: [
              "A higher concentration of reducing sugar.",
              "A lower concentration of reducing sugar.",
              "No reducing sugar at all.",
              "Protein instead of sugar.",
            ],
            answerIndex: 1,
            explanation: "As reducing sugar concentration increases, Benedict's result moves blue → green → yellow → orange → brick-red. A green result therefore means a LOWER reducing-sugar concentration than a brick-red result. Green is still positive (some sugar present).",
            difficulty: "core",
            hints: [
              "Recall the colour sequence: blue → green → yellow → orange → brick-red.",
              "Which end of that sequence means MORE sugar?",
              "Green is nearer the blue (negative) end than red is.",
            ],
            guideRef: "Food Tests",
          },
          {
            id: "bio-molecules-bm3-06",
            question: "A food sample is tested with Benedict's solution and stays blue after heating, but turns brick-red after it is boiled with dilute hydrochloric acid, cooled, neutralised, and re-tested. The sample contains:",
            options: ["A reducing sugar only", "Sucrose (a non-reducing sugar)", "Starch", "Protein"],
            answerIndex: 1,
            explanation: "Sucrose is a non-reducing sugar, so it gives a negative (blue) Benedict's result at first. Boiling with acid hydrolyses sucrose into glucose and fructose (reducing sugars), which then give the positive brick-red result. This sequence is diagnostic for sucrose.",
            difficulty: "challenge",
            hints: [
              "The first Benedict's test was negative — so no reducing sugar at first.",
              "What does boiling with acid do to a sugar?",
              "Sucrose is non-reducing until it is hydrolysed into glucose + fructose.",
              "A positive result only AFTER hydrolysis points to one specific sugar.",
            ],
            guideRef: "Food Tests",
          },
          {
            id: "bio-molecules-bm3-07",
            question: "Why must dilute hydrochloric acid be neutralised (e.g. with sodium hydrogencarbonate) before re-testing a hydrolysed sample with Benedict's solution?",
            options: [
              "Acid would dissolve the test tube.",
              "Benedict's test does not work properly in acidic conditions, so a false negative may result.",
              "The acid changes the sugar into a protein.",
              "Neutralising makes the solution turn purple.",
            ],
            answerIndex: 1,
            explanation: "Benedict's reagent requires alkaline conditions to reduce Cu²⁺ to the brick-red Cu⁺. If acid remains, the test may not work and could give a false negative. Neutralising with sodium hydrogencarbonate restores suitable conditions.",
            difficulty: "core",
            hints: [
              "Benedict's solution is alkaline — what would leftover acid do to it?",
              "Think about why a wrong (false negative) result might occur.",
              "Neutralisation removes the interfering acid.",
            ],
            guideRef: "Designing and Interpreting Food-Test Experiments",
          },
          {
            id: "bio-molecules-bm3-08",
            question: "In a DCPIP test, fresh juice needs 5 drops to decolourise the blue dye, while stored juice needs 15 drops. This shows the stored juice has:",
            options: [
              "More vitamin C than fresh juice.",
              "Less vitamin C than fresh juice.",
              "No vitamin C.",
              "More protein than fresh juice.",
            ],
            answerIndex: 1,
            explanation: "The more concentrated the vitamin C, the fewer drops are needed to decolourise DCPIP. Stored juice needs MORE drops, so each drop contains less vitamin C — the stored juice is less concentrated (vitamin C lost during storage). It still contains some, so 'none' is wrong.",
            difficulty: "core",
            hints: [
              "Fewer drops to decolourise = more concentrated vitamin C.",
              "Stored juice needed MORE drops — more or less concentrated?",
              "More drops needed means each drop is weaker in vitamin C.",
            ],
            guideRef: "Designing and Interpreting Food-Test Experiments",
          },
          {
            id: "bio-molecules-bm3-09",
            question: "A student tests a food and gets: iodine → blue-black; Benedict's → stays blue; Biuret → purple. Which molecules are definitely present?",
            options: [
              "Starch and reducing sugar",
              "Starch and protein",
              "Reducing sugar and protein",
              "Protein and fat",
            ],
            answerIndex: 1,
            explanation: "Blue-black with iodine confirms starch. Benedict's staying blue means no reducing sugar detected. Purple with Biuret confirms protein. So starch and protein are present; reducing sugar is not (and fat was not tested).",
            difficulty: "core",
            hints: [
              "Take each test in turn and decide positive or negative.",
              "Iodine blue-black = starch present; Benedict's blue = no reducing sugar.",
              "Biuret purple = protein present.",
            ],
            guideRef: "Food Tests",
          },
          {
            id: "bio-molecules-bm3-10",
            question: "A student forgets to heat the tube in a Benedict's test and records 'blue — no reducing sugar present' for a sample that actually contains glucose. This error is best described as a:",
            options: ["False positive", "False negative", "Correct result", "Control error only"],
            answerIndex: 1,
            explanation: "The sample DOES contain reducing sugar, but without heating the reaction cannot occur, so the test wrongly shows a negative (blue) result. Recording 'absent' when the molecule is actually present is a false negative.",
            difficulty: "challenge",
            hints: [
              "The glucose is really there, but the test said 'negative'.",
              "A test wrongly saying 'absent' is which kind of error?",
              "False positive = wrongly present; false negative = wrongly absent.",
            ],
            guideRef: "Designing and Interpreting Food-Test Experiments",
          },
        ],
      },
      // ── MCQ PAPER 4 ── synthesis, DNA basics, calculations, mixed challenge
      {
        id: "bio-molecules-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Integrated questions: DNA bases, condensation counting, water roles, and structure-function challenge.",
        questions: [
          {
            id: "bio-molecules-bm4-01",
            question: "DNA is described as having two strands. The bases on opposite strands pair as:",
            options: [
              "A with C, and G with T",
              "A with T, and C with G",
              "A with G, and C with T",
              "A with A, and C with C",
            ],
            answerIndex: 1,
            explanation: "In DNA, adenine (A) always pairs with thymine (T), and cytosine (C) always pairs with guanine (G). This complementary base pairing holds the two strands together and underlies how genetic information is copied.",
            difficulty: "warmup",
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bm4-02",
            question: "DNA consists of two strands twisted together. The overall shape of the DNA molecule is best described as a:",
            options: ["Single straight chain", "Double helix", "Branched sphere", "Flat sheet"],
            answerIndex: 1,
            explanation: "DNA is a double helix — two strands wound around each other in a spiral. The strands are held together by base pairing (A-T, C-G).",
            difficulty: "warmup",
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bm4-03",
            question: "Five glucose molecules are joined into a single short chain by condensation. How many water molecules are released?",
            options: ["3", "4", "5", "6"],
            answerIndex: 1,
            explanation: "Joining n monomers in a chain requires (n − 1) bonds, and each condensation bond releases one water molecule. For 5 glucose units: 5 − 1 = 4 bonds, so 4 water molecules are released.",
            difficulty: "core",
            hints: [
              "How many bonds are needed to join 5 units in a row?",
              "Joining n units needs (n − 1) bonds.",
              "Each bond releases one water molecule — so count the bonds.",
            ],
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bm4-04",
            question: "Which row correctly matches each food molecule to the elements it contains?",
            options: [
              "Carbohydrate: C,H,O,N | Protein: C,H,O | Lipid: C,H,O",
              "Carbohydrate: C,H,O | Protein: C,H,O,N | Lipid: C,H,O",
              "Carbohydrate: C,H,O,N | Protein: C,H,O,N | Lipid: C,H,O,N",
              "Carbohydrate: C,H,O | Protein: C,H,O | Lipid: C,H,O,N",
            ],
            answerIndex: 1,
            explanation: "Carbohydrates and lipids both contain only C, H, and O. Proteins additionally contain nitrogen (and often sulfur). Only option B reflects this correctly.",
            difficulty: "core",
            hints: [
              "Which class has the extra element nitrogen?",
              "Carbohydrates and lipids share the same three elements.",
              "Only proteins add N (and sometimes S).",
            ],
            guideRef: "Elements in Biological Molecules",
          },
          {
            id: "bio-molecules-bm4-05",
            question: "A scientist measures the water content of three tissues. Which value is most realistic for a typical living tissue?",
            options: ["About 5%", "About 30%", "About 70%", "About 99%"],
            answerIndex: 2,
            explanation: "Water typically makes up about 60–80% of cell/tissue content, so ~70% is the realistic value. 5% and 30% are far too low for active living tissue, and 99% is too high (it would leave almost no room for other molecules).",
            difficulty: "core",
            hints: [
              "Living cells are mostly water but still contain many other molecules.",
              "The typical figure is in the 60–80% range.",
              "Which option falls inside that range?",
            ],
            guideRef: "The Importance of Water",
          },
          {
            id: "bio-molecules-bm4-06",
            question: "A long-distance migrating bird stores energy as fat rather than as carbohydrate. The MAIN advantage is that fat:",
            options: [
              "Contains nitrogen for building muscle.",
              "Releases more energy per gram, reducing the mass the bird must carry.",
              "Dissolves in the blood for quick transport.",
              "Is digested without any enzymes.",
            ],
            answerIndex: 1,
            explanation: "Fat releases more than twice the energy per gram of carbohydrate, so storing energy as fat means less mass to carry — a clear advantage for a flying migrant. Fat contains no nitrogen and is insoluble in water.",
            difficulty: "core",
            hints: [
              "For a flying animal, carrying less mass matters.",
              "Compare energy released per gram: fat vs carbohydrate.",
              "More energy per gram → less mass needed for the same energy.",
            ],
            guideRef: "Linking Molecule Structure to Function",
          },
          {
            id: "bio-molecules-bm4-07",
            question: "An enzyme (a protein) is heated strongly and loses its 3-D shape, so it can no longer bind its substrate. This shows that protein function depends on:",
            options: [
              "The number of nitrogen atoms present.",
              "The specific 3-D shape produced by the folded amino acid chain.",
              "The fatty acids attached to the protein.",
              "The protein being soluble in ethanol.",
            ],
            answerIndex: 1,
            explanation: "A protein's function depends on its precise 3-D shape, which arises from how its amino acid sequence folds. Heating disrupts this shape (denaturation), so the active site no longer fits the substrate. Function is not about nitrogen count or fatty acids.",
            difficulty: "challenge",
            hints: [
              "Why would heat stop an enzyme working if the chemistry of the chain is unchanged?",
              "Heat changes the protein's shape, not its sequence.",
              "If the active-site shape is lost, the substrate no longer fits.",
              "This links 3-D shape directly to function.",
            ],
            guideRef: "Linking Molecule Structure to Function",
          },
          {
            id: "bio-molecules-bm4-08",
            question: "A sample of pure cooking oil is tested with the four standard food tests. Which set of results is expected?",
            options: [
              "Iodine: blue-black; Benedict's: brick-red; Biuret: purple; ethanol: clear",
              "Iodine: orange-brown; Benedict's: blue; Biuret: blue; ethanol: cloudy white",
              "Iodine: blue-black; Benedict's: blue; Biuret: purple; ethanol: cloudy white",
              "Iodine: orange-brown; Benedict's: brick-red; Biuret: blue; ethanol: clear",
            ],
            answerIndex: 1,
            explanation: "Pure oil contains only fat. So: iodine stays orange-brown (no starch), Benedict's stays blue (no reducing sugar), Biuret stays blue (no protein), and the ethanol emulsion test gives a cloudy white emulsion (fat present). Only option B matches.",
            difficulty: "challenge",
            hints: [
              "Pure oil is fat only — so three tests should be negative.",
              "Which test is positive for fat, and what colour/appearance is it?",
              "Negative iodine = orange-brown; negative Benedict's/Biuret = blue.",
              "Match all four results to 'only fat present'.",
            ],
            guideRef: "Food Tests",
          },
          {
            id: "bio-molecules-bm4-09",
            question: "Which statement correctly describes the role of water as a reactant in the body?",
            options: [
              "Water is only a solvent and never takes part in reactions.",
              "Water is used to break down food polymers during digestion (hydrolysis).",
              "Water is released when food polymers are digested.",
              "Water is used to join glucose units into starch.",
            ],
            answerIndex: 1,
            explanation: "During digestion, large polymers are broken into monomers by hydrolysis, which uses (adds) water. Water is released — not used — in condensation (e.g. building starch). So option B is correct; the others misstate water's role.",
            difficulty: "core",
            hints: [
              "Digestion breaks polymers down — does that use or release water?",
              "Hydrolysis = adding water to break bonds.",
              "Condensation (building polymers) releases water instead.",
            ],
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bm4-10",
            question: "A DNA strand has the base sequence A–T–G–C–C–A. What is the sequence of the complementary strand (read against it)?",
            options: ["T–A–C–G–G–T", "A–T–G–C–C–A", "T–A–G–C–C–T", "U–A–C–G–G–U"],
            answerIndex: 0,
            explanation: "Each base pairs with its partner: A-T and C-G. So A→T, T→A, G→C, C→G, C→G, A→T gives T–A–C–G–G–T. (Uracil/U occurs in RNA, not DNA, so option D is wrong.)",
            difficulty: "challenge",
            hints: [
              "Pair each base: A with T, C with G (and vice versa).",
              "Work base by base along the given strand.",
              "A→T, T→A, G→C, C→G…",
              "Remember DNA uses T, not U.",
            ],
            guideRef: "Small Molecules Building Large Ones",
          },
        ],
      },
    ],
    qaPapers: [
      // ── QA PAPER 1 ── elements, monomers/polymers, carbohydrates
      {
        id: "bio-molecules-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Chemical elements, monomers and polymers, and carbohydrate structure and function.",
        questions: [
          {
            id: "bio-molecules-bq1-01",
            question: "State the elements present in (a) a carbohydrate, and (b) a protein. [2]",
            marks: 2,
            modelAnswer: "(a) A carbohydrate contains carbon, hydrogen, and oxygen only. (b) A protein contains carbon, hydrogen, oxygen, and nitrogen (and often sulfur).",
            markScheme: [
              "(a) Carbon, hydrogen and oxygen (only) (1)",
              "(b) Carbon, hydrogen, oxygen and nitrogen / also sulfur accepted (1)",
            ],
            commonError: "Adding nitrogen to carbohydrates, or forgetting nitrogen in proteins. Nitrogen is the element that distinguishes proteins.",
            difficulty: "warmup",
            guideRef: "Elements in Biological Molecules",
          },
          {
            id: "bio-molecules-bq1-02",
            question: "Name the monomer of starch, and name the type of bond that joins these monomers together. [2]",
            marks: 2,
            modelAnswer: "The monomer of starch is glucose. The monomers are joined by glycosidic bonds (formed by condensation).",
            markScheme: [
              "Monomer is glucose (1)",
              "Glycosidic bond / condensation bond (1)",
            ],
            commonError: "Writing 'peptide bond' (that joins amino acids) or 'ester bond' (lipids) instead of glycosidic bond.",
            difficulty: "warmup",
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bq1-03",
            question: "Describe the difference between a condensation reaction and a hydrolysis reaction. Use the word 'water' in your answer. [3]",
            marks: 3,
            modelAnswer: "A condensation reaction joins two molecules (monomers) together to form a larger molecule, and a water molecule is released each time a bond forms. A hydrolysis reaction is the reverse: it breaks a larger molecule into smaller ones (monomers) by adding a water molecule to break the bond. So condensation releases water and builds polymers, while hydrolysis uses water and breaks them down.",
            markScheme: [
              "Condensation joins molecules / builds larger molecules (1)",
              "Condensation releases water (1)",
              "Hydrolysis breaks molecules apart by adding/using water (1)",
            ],
            commonError: "Stating that both reactions release water, or mixing up which reaction uses and which releases water.",
            difficulty: "core",
            hints: [
              "One reaction builds polymers; the other breaks them down.",
              "Decide whether each reaction releases or uses water.",
              "Condensation = join + release water; hydrolysis = break + add water.",
            ],
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bq1-04",
            question: "Glucose can be stored as starch in plant cells. Explain two ways in which the properties of starch make it suitable for storing glucose. [4]",
            marks: 4,
            modelAnswer: "Starch is insoluble in water, so it does not dissolve and does not lower the water potential of the cell — therefore it does not cause water to enter the cell by osmosis, and it stays where it is stored. Starch is also compact: its glucose units are coiled (alpha glycosidic bonds) and branched, so a large amount of glucose can be packed into a small space. When glucose is needed, the starch can be hydrolysed back to glucose by enzymes.",
            markScheme: [
              "Insoluble (1)",
              "Does not affect water potential / does not cause osmosis / does not dissolve away (1)",
              "Compact / coiled / branched (1)",
              "Can be hydrolysed back to glucose when needed (1)",
            ],
            commonError: "Saying starch 'has more energy' than glucose — it does not; it simply stores the same glucose conveniently. Forgetting the osmosis/water-potential link.",
            difficulty: "core",
            hints: [
              "Think about solubility and what dissolved sugar would do by osmosis.",
              "Think about how compact a coiled, branched molecule is.",
              "Each property should link to WHY it helps storage.",
              "How is the stored glucose recovered later?",
            ],
            guideRef: "Linking Molecule Structure to Function",
          },
          {
            id: "bio-molecules-bq1-05",
            question: "Compare the structure and function of glycogen and cellulose. [4]",
            marks: 4,
            modelAnswer: "Both glycogen and cellulose are polymers of glucose. Glycogen has alpha glycosidic bonds and is highly branched, making it compact with many free ends, so glucose can be released quickly; it is used as an energy store in animals. Cellulose has beta glycosidic bonds, which produce long, straight, unbranched chains that lie parallel and form hydrogen bonds between chains, creating strong fibres; it is used for structural support in plant cell walls. So glycogen suits storage while cellulose suits structure.",
            markScheme: [
              "Both are polymers of glucose (1)",
              "Glycogen: branched / alpha bonds → compact, fast glucose release → energy store in animals (1)",
              "Cellulose: straight chains / beta bonds → form fibres / hydrogen bonds between chains (1)",
              "Cellulose used for structure / cell wall strength (1)",
            ],
            commonError: "Treating glycogen and cellulose as completely different molecules instead of recognising both are glucose polymers differing in bond type and branching.",
            difficulty: "challenge",
            hints: [
              "Start with what the two molecules have in common (the monomer).",
              "Compare bond type: alpha vs beta glycosidic bonds.",
              "Branched/compact vs straight/fibrous — link each to a function.",
              "Glycogen = storage; cellulose = structure.",
            ],
            strategy: "Structure → shape → property → function, applied to each molecule then contrasted.",
            guideRef: "Linking Molecule Structure to Function",
          },
          {
            id: "bio-molecules-bq1-06",
            question: "A short carbohydrate chain is made by joining 8 glucose molecules in a single row by condensation. Calculate the number of water molecules released, and explain your reasoning. [3]",
            marks: 3,
            modelAnswer: "To join 8 glucose molecules in a row, the number of bonds needed is (8 − 1) = 7. Each condensation reaction that forms a bond releases one water molecule. Therefore 7 water molecules are released.",
            markScheme: [
              "Number of bonds = n − 1 = 8 − 1 = 7 (1)",
              "Each bond/condensation releases one water (1)",
              "Answer: 7 water molecules (1)",
            ],
            commonError: "Writing 8 instead of 7 — there are (n − 1) bonds for n units joined in a chain, not n bonds.",
            difficulty: "core",
            hints: [
              "How many bonds join n units in a single row?",
              "It is one fewer than the number of units: (n − 1).",
              "Each bond releases one water molecule.",
            ],
            solutions: [
              {
                label: "Counting bonds",
                steps: [
                  "Step 1: Joining n monomers in a chain needs (n − 1) bonds.",
                  "Step 2: For 8 glucose units: 8 − 1 = 7 bonds.",
                  "Step 3: Each condensation bond releases 1 water molecule → 7 × 1 = 7 water molecules.",
                ],
              },
            ],
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bq1-07",
            question: "Explain why humans can digest starch but cannot digest cellulose, even though both are made of glucose. [3]",
            marks: 3,
            modelAnswer: "Starch is made of glucose joined by alpha glycosidic bonds, which the human enzyme amylase can break down (hydrolyse) into glucose. Cellulose is made of glucose joined by beta glycosidic bonds. Humans do not produce the enzyme cellulase needed to break beta bonds, so cellulose passes through the gut undigested as dietary fibre.",
            markScheme: [
              "Starch has alpha glycosidic bonds / cellulose has beta glycosidic bonds (1)",
              "Humans have amylase to break starch's alpha bonds (1)",
              "Humans lack cellulase, so cannot break cellulose's beta bonds (1)",
            ],
            commonError: "Saying cellulose 'is too tough' without naming the bond type or the missing enzyme (cellulase).",
            difficulty: "core",
            hints: [
              "Same monomer, different bonds — name the two bond types.",
              "Which enzyme breaks starch?",
              "Which enzyme do humans NOT have for cellulose?",
            ],
            guideRef: "Linking Molecule Structure to Function",
          },
          {
            id: "bio-molecules-bq1-08",
            question: "Name one reducing sugar and one storage polysaccharide, and state where in living organisms the storage polysaccharide is found. [3]",
            marks: 3,
            modelAnswer: "A reducing sugar is glucose (accept fructose, maltose, or galactose). A storage polysaccharide is starch, found in plant cells (e.g. in chloroplasts/leaves and storage organs such as potatoes); glycogen is the equivalent in animals, found in the liver and muscles.",
            markScheme: [
              "Reducing sugar named: glucose / fructose / maltose / galactose (1)",
              "Storage polysaccharide named: starch / glycogen (1)",
              "Location correct for the polysaccharide named: starch in plants / glycogen in liver and muscle (1)",
            ],
            commonError: "Naming sucrose as a reducing sugar (it is non-reducing), or naming cellulose as a storage polysaccharide (it is structural).",
            difficulty: "warmup",
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bq1-09",
            question: "A student writes: 'A polymer and a monomer are the same thing because they are both molecules.' Explain why this statement is incorrect, using glucose and starch as examples. [3]",
            marks: 3,
            modelAnswer: "A monomer is a small single subunit, whereas a polymer is a large molecule made of many monomers joined together. Glucose is a monomer — a single small sugar. Starch is a polymer — it is made of many glucose monomers joined by condensation (glycosidic bonds). So although both are molecules, they differ greatly in size and structure: starch is built from many glucose units, while glucose is just one.",
            markScheme: [
              "Monomer = small single subunit / building block (1)",
              "Polymer = large molecule of many monomers joined together (1)",
              "Glucose is the monomer; starch is the polymer made of many glucose units (1)",
            ],
            commonError: "Failing to give the size/number distinction (one unit vs many units joined).",
            difficulty: "core",
            hints: [
              "Define 'monomer' and 'polymer' clearly.",
              "How many subunits are in a monomer? In a polymer?",
              "Map glucose to monomer and starch to polymer.",
            ],
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bq1-10",
            question: "Glycogen is more highly branched than starch. Explain how this difference suits glycogen to the needs of an active animal. [3]",
            marks: 3,
            modelAnswer: "Because glycogen is more branched, it has many more free ends than starch. Enzymes can act on all of these ends at once, so glucose can be released (by hydrolysis) very rapidly. An active animal can suddenly need a large amount of glucose for respiration during fast movement, so rapid glucose release is an advantage. Plants do not move and have lower, slower energy demands, so starch (less branched) is sufficient for them.",
            markScheme: [
              "More branches → more free ends (1)",
              "Enzymes can release glucose rapidly / quickly (1)",
              "Active animals have sudden/high energy demands, so rapid release is useful (1)",
            ],
            commonError: "Saying glycogen 'has more energy' than starch — the advantage is the SPEED of release, not the amount of energy.",
            difficulty: "challenge",
            hints: [
              "What does branching create at the ends of the chains?",
              "More free ends mean enzymes can work where?",
              "Link this to the sudden energy demands of a moving animal.",
            ],
            guideRef: "Linking Molecule Structure to Function",
          },
        ],
      },
      // ── QA PAPER 2 ── proteins, lipids, structure-function
      {
        id: "bio-molecules-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Proteins, amino acids, lipids, energy, and structure linked to function.",
        questions: [
          {
            id: "bio-molecules-bq2-01",
            question: "Name the monomer of a protein and the type of bond that joins these monomers. [2]",
            marks: 2,
            modelAnswer: "The monomer of a protein is an amino acid. Amino acids are joined together by peptide bonds (formed by condensation).",
            markScheme: [
              "Monomer is amino acid (1)",
              "Peptide bond (1)",
            ],
            commonError: "Writing 'glycosidic bond' (sugars) or 'protein bond'. The correct term is peptide bond.",
            difficulty: "warmup",
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bq2-02",
            question: "Name the two types of subunit that make up a triglyceride, and state how many of each are present in one triglyceride molecule. [2]",
            marks: 2,
            modelAnswer: "A triglyceride is made from one molecule of glycerol and three molecules of fatty acid, joined by ester bonds.",
            markScheme: [
              "One glycerol (1)",
              "Three fatty acids (1)",
            ],
            commonError: "Reversing the numbers (three glycerol + one fatty acid) — there is one glycerol and three fatty acids.",
            difficulty: "warmup",
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bq2-03",
            question: "Explain why fats and oils release more energy per gram than carbohydrates when respired. [3]",
            marks: 3,
            modelAnswer: "Fats and oils are made of long hydrocarbon chains that contain a high proportion of hydrogen and a relatively low proportion of oxygen. They therefore have many C–H bonds, which release a large amount of energy when oxidised in respiration. Carbohydrates contain proportionally more oxygen (they are already partly oxidised), so they release less energy per gram. As a result, fats release more than twice the energy per gram of carbohydrate.",
            markScheme: [
              "Fats have a high proportion of hydrogen / many C–H bonds / low oxygen content (1)",
              "Oxidising these bonds releases a large amount of energy (1)",
              "Carbohydrates are more oxidised / contain more oxygen, so release less energy per gram (1)",
            ],
            commonError: "Saying fats 'are bigger' so contain more energy — the key is the high hydrogen (C–H bond) content per gram, not molecule size.",
            difficulty: "core",
            hints: [
              "Energy is released by oxidising bonds, especially C–H bonds.",
              "Compare the hydrogen and oxygen content of fats and carbohydrates.",
              "Carbohydrates are already partly oxidised; fats are not.",
            ],
            guideRef: "Linking Molecule Structure to Function",
          },
          {
            id: "bio-molecules-bq2-04",
            question: "A triglyceride is formed from one glycerol and three fatty acids. State how many water molecules are released, and name the type of bond formed. [2]",
            marks: 2,
            modelAnswer: "Three ester bonds are formed (one between glycerol and each fatty acid). Each condensation reaction releases one water molecule, so three water molecules are released in total.",
            markScheme: [
              "Three water molecules released (1)",
              "Ester bonds (1)",
            ],
            commonError: "Saying one water molecule — each of the three ester bonds releases its own water, giving three.",
            difficulty: "core",
            hints: [
              "How many fatty acids join to glycerol? How many bonds is that?",
              "Each bond formed by condensation releases one water.",
              "Three bonds → how many water molecules?",
            ],
            solutions: [
              {
                label: "Counting bonds",
                steps: [
                  "Step 1: One glycerol joins three fatty acids → three ester bonds form.",
                  "Step 2: Each condensation reaction releases 1 water molecule.",
                  "Step 3: 3 bonds × 1 water = 3 water molecules released.",
                ],
              },
            ],
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bq2-05",
            question: "Explain how the structure of a protein determines its function, using an enzyme as an example. [4]",
            marks: 4,
            modelAnswer: "A protein is made of a specific sequence of amino acids (its primary structure), determined by the gene. This sequence causes the polypeptide chain to fold into a precise 3-D shape. In an enzyme, this folding produces an active site with a shape that is complementary to a particular substrate. Only that substrate fits the active site (the lock-and-key model), so the enzyme catalyses one specific reaction. If the shape is changed (for example by heat, which denatures the protein), the substrate no longer fits and the enzyme stops working — showing that function depends on the precise 3-D structure.",
            markScheme: [
              "Specific sequence of amino acids / primary structure determines folding (1)",
              "Folds into a precise 3-D shape (1)",
              "Active site complementary to substrate / lock-and-key → specificity (1)",
              "If shape changes (denaturation), substrate no longer fits / enzyme stops working (1)",
            ],
            commonError: "Describing what enzymes do without linking it back to the amino acid sequence and the resulting 3-D shape.",
            difficulty: "challenge",
            hints: [
              "Start with what determines a protein's shape (its amino acid sequence).",
              "How does the shape create an active site?",
              "Why is only one substrate able to bind?",
              "What happens to function if the shape is lost?",
            ],
            strategy: "Sequence → folded 3-D shape → complementary active site → specific function.",
            guideRef: "Linking Molecule Structure to Function",
          },
          {
            id: "bio-molecules-bq2-06",
            question: "Describe two functions of lipids (fats) in living organisms and, for each, link the function to a property of the lipid. [4]",
            marks: 4,
            modelAnswer: "First, lipids are an energy store: they release more than twice the energy per gram of carbohydrate (because of their high proportion of C–H bonds), making them an efficient long-term store. Second, lipids provide thermal insulation: a layer of fat under the skin reduces heat loss, because fat is a poor conductor of heat. (Other acceptable answers: waterproofing — fats are hydrophobic; protection — fat cushions organs; making cell membranes — phospholipids form the bilayer.) Each function is linked to a property: energy density for storage, poor heat conduction for insulation, hydrophobic tails for waterproofing.",
            markScheme: [
              "Function 1 named (e.g. energy store) (1)",
              "Property linked to function 1 (e.g. high energy per gram / many C–H bonds) (1)",
              "Function 2 named (e.g. insulation / waterproofing / membranes / protection) (1)",
              "Property linked to function 2 (e.g. poor heat conductor / hydrophobic) (1)",
            ],
            commonError: "Listing functions without linking each to a relevant property of lipids, which is required for full marks.",
            difficulty: "core",
            hints: [
              "List two roles of fat in the body.",
              "For each role, ask: which property of fat makes it suitable?",
              "Energy store ↔ energy density; insulation ↔ poor heat conductor; waterproofing ↔ hydrophobic.",
            ],
            guideRef: "Linking Molecule Structure to Function",
          },
          {
            id: "bio-molecules-bq2-07",
            question: "All amino acids share two functional groups. Name these two groups and state which element each contributes that helps make proteins distinctive. [3]",
            marks: 3,
            modelAnswer: "Every amino acid has an amino group (–NH₂) and a carboxyl group (–COOH). The amino group contains nitrogen, which is the element that makes proteins distinctive (carbohydrates and lipids lack nitrogen). The carboxyl group contains oxygen (and carbon). When two amino acids join, the amino group of one reacts with the carboxyl group of the other to form a peptide bond.",
            markScheme: [
              "Amino group / –NH₂ (1)",
              "Carboxyl group / –COOH (1)",
              "Amino group provides nitrogen — the distinctive element of proteins (1)",
            ],
            commonError: "Confusing the amino group with the carboxyl group, or not identifying nitrogen as coming from the amino group.",
            difficulty: "challenge",
            hints: [
              "An amino acid has two key groups at its ends.",
              "One group provides the nitrogen that proteins are known for.",
              "Name both groups, then say which element each adds.",
            ],
            guideRef: "Elements in Biological Molecules",
          },
          {
            id: "bio-molecules-bq2-08",
            question: "State what is meant by the 'primary structure' of a protein, and explain why it is so important. [3]",
            marks: 3,
            modelAnswer: "The primary structure of a protein is the specific sequence (order) of amino acids in the polypeptide chain. It is important because this sequence determines how the chain folds into its 3-D shape, and the 3-D shape determines the protein's function (for example the shape of an enzyme's active site). A change in the sequence can therefore change the shape and stop the protein from working properly.",
            markScheme: [
              "Primary structure = sequence/order of amino acids (1)",
              "Sequence determines the folding / 3-D shape (1)",
              "3-D shape determines function (e.g. active site) (1)",
            ],
            commonError: "Describing primary structure as the 3-D shape itself — primary structure is just the linear sequence; folding produces the shape.",
            difficulty: "core",
            hints: [
              "Primary = the simplest level: the order of amino acids.",
              "What does that order go on to determine?",
              "Shape then determines function.",
            ],
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bq2-09",
            question: "A fat is solid at room temperature, while an oil is liquid. Both are triglycerides containing the same elements. Explain the difference between them. [3]",
            marks: 3,
            modelAnswer: "The difference lies in the fatty acid chains. A solid fat contains mostly saturated fatty acids, whose straight chains can pack closely together, so the fat is solid at room temperature. An oil contains more unsaturated fatty acids, whose chains have kinks (because of double bonds), so they cannot pack closely together and the oil remains liquid at room temperature. Both still contain only carbon, hydrogen, and oxygen and are triglycerides.",
            markScheme: [
              "Difference is in the fatty acids / their saturation (1)",
              "Saturated chains pack closely → solid fat (1)",
              "Unsaturated chains have kinks / cannot pack closely → liquid oil (1)",
            ],
            commonError: "Suggesting fats and oils contain different elements — they do not; the difference is the saturation of the fatty acid chains.",
            difficulty: "challenge",
            hints: [
              "Same elements, both triglycerides — so look at the fatty acid chains.",
              "Saturated chains are straight; unsaturated chains have kinks.",
              "Close packing → solid; loose packing → liquid.",
            ],
            guideRef: "Linking Molecule Structure to Function",
          },
          {
            id: "bio-molecules-bq2-10",
            question: "Explain why proteins, but not carbohydrates or lipids, are needed in the diet to provide the body with a source of nitrogen. [3]",
            marks: 3,
            modelAnswer: "Proteins contain the element nitrogen (in the amino groups of their amino acids), whereas carbohydrates and lipids contain only carbon, hydrogen, and oxygen. When proteins are digested, amino acids are released and the body can use the nitrogen they contain to build its own proteins (and other nitrogen-containing molecules). Because carbohydrates and lipids contain no nitrogen, they cannot supply this element, so dietary protein is the source of nitrogen.",
            markScheme: [
              "Proteins contain nitrogen; carbohydrates and lipids do not (1)",
              "Nitrogen is in the amino acids / amino groups of protein (1)",
              "Body uses the nitrogen to build its own proteins / other N-containing molecules (1)",
            ],
            commonError: "Forgetting to state that carbohydrates and lipids lack nitrogen, which is the whole reason protein is required for it.",
            difficulty: "core",
            hints: [
              "Which element do proteins have that the other two classes lack?",
              "Where in the protein is that element found?",
              "What does the body do with the nitrogen from digested protein?",
            ],
            guideRef: "Elements in Biological Molecules",
          },
        ],
      },
      // ── QA PAPER 3 ── food tests (qualitative + semi-quantitative)
      {
        id: "bio-molecules-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Carrying out and interpreting food tests, including semi-quantitative Benedict's and DCPIP.",
        questions: [
          {
            id: "bio-molecules-bq3-01",
            question: "Describe how you would test a food sample for starch, including the reagent used and the positive result. [3]",
            marks: 3,
            modelAnswer: "Place a small amount of the food sample in a dish or test tube. Add a few drops of iodine solution (which is orange-brown). If starch is present, the iodine solution turns blue-black. If no starch is present, the iodine stays orange-brown.",
            markScheme: [
              "Add iodine solution to the sample (1)",
              "Positive result: blue-black colour (1)",
              "Negative / no starch: stays orange-brown (1)",
            ],
            commonError: "Confusing the iodine test with Benedict's (heating, brick-red) — the iodine test needs no heating and gives blue-black.",
            difficulty: "warmup",
            guideRef: "Food Tests",
          },
          {
            id: "bio-molecules-bq3-02",
            question: "Describe how you would carry out the Benedict's test for a reducing sugar, and state the positive result. [4]",
            marks: 4,
            modelAnswer: "Place a sample of the food solution in a test tube and add an equal volume of blue Benedict's solution. Heat the tube in a water bath at about 80 °C for a few minutes. If a reducing sugar is present, the solution forms a brick-red (or orange/yellow) precipitate. If no reducing sugar is present, the solution stays blue.",
            markScheme: [
              "Add Benedict's solution to the sample (1)",
              "Heat in a water bath / boil (1)",
              "Positive: brick-red / orange / yellow precipitate (1)",
              "Negative: stays blue (1)",
            ],
            commonError: "Forgetting the heating step — without heating, no colour change occurs and a false negative results.",
            difficulty: "core",
            hints: [
              "Which reagent detects reducing sugar, and what condition is essential?",
              "Benedict's must be heated — how?",
              "State both the positive (brick-red) and negative (blue) results.",
            ],
            guideRef: "Food Tests",
          },
          {
            id: "bio-molecules-bq3-03",
            question: "A student tests four solutions with the ethanol emulsion test. State the reagent steps and explain why a positive result appears cloudy. [4]",
            marks: 4,
            modelAnswer: "Add ethanol to the sample and shake, so that any fat dissolves in the ethanol. Then pour the ethanol mixture into a test tube of cold water. If fat is present, a cloudy white emulsion forms. This happens because fat is soluble in ethanol but insoluble in water; when the ethanol solution is poured into water, the fat comes out of solution as many tiny droplets suspended in the water, which scatter light and make the mixture look cloudy/milky.",
            markScheme: [
              "Add ethanol and shake to dissolve fat (1)",
              "Pour into (cold) water (1)",
              "Positive result: cloudy white emulsion (1)",
              "Explanation: fat insoluble in water forms tiny droplets / emulsion that scatters light (1)",
            ],
            commonError: "Saying a chemical reaction occurs — the test is physical: fat simply comes out of solution as droplets when ethanol meets water.",
            difficulty: "core",
            hints: [
              "First dissolve any fat in ethanol, then add water.",
              "Fat is soluble in ethanol but not in water.",
              "Why does the fat appear as tiny droplets when it meets water?",
            ],
            guideRef: "Food Tests",
          },
          {
            id: "bio-molecules-bq3-04",
            question: "A student tests a food and records: iodine → orange-brown; Benedict's (after heating) → brick-red; Biuret → blue. State which molecules are present and which are absent, giving a reason for each. [4]",
            marks: 4,
            modelAnswer: "Iodine stays orange-brown, so starch is absent (a blue-black colour would indicate starch). Benedict's turns brick-red, so a reducing sugar is present (this positive colour shows reducing sugar). Biuret stays blue, so protein is absent (a purple colour would indicate protein). Therefore the food contains a reducing sugar but no starch and no protein.",
            markScheme: [
              "Starch absent — iodine stayed orange-brown (1)",
              "Reducing sugar present — Benedict's turned brick-red (1)",
              "Protein absent — Biuret stayed blue (1)",
              "Overall correct combined conclusion (1)",
            ],
            commonError: "Stating molecules present/absent without justifying each with the matching colour result.",
            difficulty: "core",
            hints: [
              "Take each test in turn and decide positive or negative.",
              "Match each colour to present or absent.",
              "Justify every conclusion with the colour observed.",
            ],
            guideRef: "Food Tests",
          },
          {
            id: "bio-molecules-bq3-05",
            question: "A food gives a negative Benedict's result, but after boiling with dilute hydrochloric acid, cooling, neutralising, and re-testing, it gives a brick-red result. Explain what these results show, and explain the purpose of the neutralising step. [4]",
            marks: 4,
            modelAnswer: "The first negative (blue) result shows there is no reducing sugar in the food. The positive (brick-red) result only after boiling with acid shows that a non-reducing sugar — sucrose — was present: boiling with acid hydrolyses sucrose into glucose and fructose, which are reducing sugars and give the positive result. The neutralising step (e.g. adding sodium hydrogencarbonate) is needed because Benedict's solution works in alkaline conditions; if the acid were not neutralised, the test might not work and could give a false negative.",
            markScheme: [
              "First negative result: no reducing sugar present (1)",
              "Positive only after hydrolysis: non-reducing sugar / sucrose present (1)",
              "Acid hydrolyses sucrose into reducing sugars (glucose + fructose) (1)",
              "Neutralise because Benedict's needs alkaline conditions / acid would give a false result (1)",
            ],
            commonError: "Concluding sucrose is present but forgetting to explain why neutralisation is needed (Benedict's must be alkaline).",
            difficulty: "challenge",
            hints: [
              "What does the FIRST (negative) result tell you?",
              "What does boiling with acid do to a non-reducing sugar?",
              "A positive result only after hydrolysis points to which sugar?",
              "Why must acid be removed before the second Benedict's test?",
            ],
            strategy: "Interpret each stage in sequence: negative → hydrolyse → positive → identify sucrose, then justify the procedure.",
            guideRef: "Designing and Interpreting Food-Test Experiments",
          },
          {
            id: "bio-molecules-bq3-06",
            question: "A scientist measures vitamin C content using DCPIP. She adds each juice drop by drop to 2 cm³ of DCPIP and counts the drops needed to decolourise it. Juice A needs 6 drops; juice B needs 18 drops. (a) Which juice contains more vitamin C? Explain. [2] (b) State two variables she must keep the same for a fair comparison. [2]",
            marks: 4,
            modelAnswer: "(a) Juice A contains more vitamin C. Fewer drops were needed to decolourise the DCPIP, which means each drop of juice A contained more vitamin C, so juice A is more concentrated. (b) Any two of: the volume of DCPIP used (2 cm³ each); the concentration of DCPIP; the temperature; the size/volume of each drop (e.g. by using the same dropper or a calibrated pipette).",
            markScheme: [
              "(a) Juice A (1)",
              "(a) Fewer drops needed → more concentrated vitamin C / each drop contains more vitamin C (1)",
              "(b) One valid controlled variable (volume of DCPIP / concentration of DCPIP / temperature / drop size) (1)",
              "(b) A second valid controlled variable (1)",
            ],
            commonError: "Choosing the juice that needed MORE drops as having more vitamin C — it is the opposite: fewer drops means more concentrated.",
            difficulty: "core",
            hints: [
              "Fewer drops to decolourise means a stronger (more concentrated) vitamin C.",
              "Compare 6 drops vs 18 drops — which juice is stronger?",
              "For a fair test, keep DCPIP volume, drop size and temperature constant.",
            ],
            guideRef: "Designing and Interpreting Food-Test Experiments",
          },
          {
            id: "bio-molecules-bq3-07",
            question: "Explain why a food-test investigation should include both a positive control and a negative control. [3]",
            marks: 3,
            modelAnswer: "A positive control is a solution known to contain the molecule being tested (for example glucose for the Benedict's test). It should give a positive result, confirming that the reagent is working correctly. A negative control is a solution known not to contain the molecule (for example distilled water). It should give a negative result, confirming that the reagent does not give a false positive. Together, the controls validate the experiment, so any result from the test samples can be trusted.",
            markScheme: [
              "Positive control: known to contain the molecule → should give positive result / shows reagent works (1)",
              "Negative control: known not to contain it (e.g. distilled water) → should give negative result (1)",
              "Controls validate results / show the test is reliable / detect false results (1)",
            ],
            commonError: "Describing only one type of control, or not explaining what each control confirms.",
            difficulty: "core",
            hints: [
              "What does a 'known positive' sample confirm about the reagent?",
              "What does a 'known negative' sample (e.g. water) confirm?",
              "Why do both together make the results trustworthy?",
            ],
            guideRef: "Designing and Interpreting Food-Test Experiments",
          },
          {
            id: "bio-molecules-bq3-08",
            question: "Name the reagent and positive result for the test that detects protein, and briefly explain why the colour change occurs. [3]",
            marks: 3,
            modelAnswer: "Protein is detected with Biuret reagent (or sodium hydroxide solution followed by a few drops of copper sulfate solution). A positive result is a purple/violet colour. The colour change occurs because copper(II) ions (Cu²⁺) in alkaline conditions coordinate with the peptide bonds in the protein chain, forming a purple complex. With no protein, the solution stays blue.",
            markScheme: [
              "Reagent: Biuret reagent / NaOH then CuSO₄ (1)",
              "Positive result: purple / violet (1)",
              "Cu²⁺ ions interact with peptide bonds (in alkaline conditions) (1)",
            ],
            commonError: "Stating the colour as 'pink' or 'red' — the protein-positive colour is purple/violet.",
            difficulty: "core",
            hints: [
              "Which reagent tests for protein?",
              "What colour is a positive result?",
              "What part of the protein do the copper ions interact with?",
            ],
            guideRef: "Food Tests",
          },
          {
            id: "bio-molecules-bq3-09",
            question: "Semi-quantitative Benedict's test: a student records the colour after heating for five solutions of glucose at increasing concentration. Describe the sequence of colours she should expect from the lowest to the highest concentration, and explain how this makes the test semi-quantitative. [3]",
            marks: 3,
            modelAnswer: "As glucose concentration increases, the colour after heating changes in the order: blue (no/low sugar) → green → yellow → orange → brick-red (highest concentration). The test is semi-quantitative because the final colour gives an approximate (not exact) measure of how much reducing sugar is present — a more red/orange colour indicates a higher concentration, so different samples can be ranked or roughly compared by colour, although it does not give a precise numerical value.",
            markScheme: [
              "Colour sequence low→high: blue → green → yellow → orange → brick-red (1)",
              "More red/orange = higher concentration of reducing sugar (1)",
              "Gives an approximate/comparative measure (not exact) → semi-quantitative (1)",
            ],
            commonError: "Reversing the colour order, or claiming the test gives an exact concentration (it only gives an approximate/comparative value).",
            difficulty: "challenge",
            hints: [
              "Recall the order from negative (blue) to most concentrated.",
              "Which colour means the most reducing sugar?",
              "Why is this 'semi'-quantitative rather than fully quantitative?",
            ],
            guideRef: "Designing and Interpreting Food-Test Experiments",
          },
          {
            id: "bio-molecules-bq3-10",
            question: "A student tests a dark-coloured fruit juice for reducing sugar using Benedict's solution and finds the colour change hard to judge. Suggest one problem this causes and one improvement she could make. [2]",
            marks: 2,
            modelAnswer: "The dark colour of the juice can mask or interfere with the colour change of Benedict's solution, making it hard to tell whether a positive (brick-red) result has formed — this could lead to a wrong conclusion. One improvement is to dilute the juice (or filter/decolourise it) so the Benedict's colour change is clearer, and to include a colour control (a blank) for comparison.",
            markScheme: [
              "Problem: dark colour masks/interferes with the Benedict's colour change → hard to judge result (1)",
              "Improvement: dilute / filter / decolourise the juice, or use a colour control/blank for comparison (1)",
            ],
            commonError: "Suggesting 'add more Benedict's' which does not solve the colour interference; the issue is the sample's own colour.",
            difficulty: "core",
            hints: [
              "Why is a strongly coloured sample a problem for a colour-change test?",
              "How could you reduce the interfering colour?",
              "A comparison blank can also help.",
            ],
            guideRef: "Designing and Interpreting Food-Test Experiments",
          },
        ],
      },
      // ── QA PAPER 4 ── integrated: water, DNA, synthesis, mixed challenge
      {
        id: "bio-molecules-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Integrated questions: the importance of water, DNA basics, condensation/hydrolysis, and synthesis.",
        questions: [
          {
            id: "bio-molecules-bq4-01",
            question: "State two reasons why water is important to living organisms. [2]",
            marks: 2,
            modelAnswer: "Water is a solvent in which many substances dissolve and are transported (e.g. in blood plasma and cytoplasm), and metabolic reactions take place in solution. Water is also a reactant — for example it is used in hydrolysis reactions during digestion. (Other acceptable answers: it has a high specific heat capacity that buffers temperature; it cools organisms by evaporation; it provides support/turgor in plant cells; it is a habitat.)",
            markScheme: [
              "Any valid importance, e.g. solvent / transport medium (1)",
              "A second valid importance, e.g. reactant in hydrolysis / temperature buffering / cooling by evaporation / support (1)",
            ],
            commonError: "Giving two versions of the same point (e.g. 'dissolves things' and 'is a solvent') rather than two distinct reasons.",
            difficulty: "warmup",
            guideRef: "The Importance of Water",
          },
          {
            id: "bio-molecules-bq4-02",
            question: "Explain why water is described as a good solvent and why this property is important in the body. [3]",
            marks: 3,
            modelAnswer: "Water is a polar molecule (slightly negative at the oxygen end and slightly positive at the hydrogen ends). This allows it to surround and dissolve ionic and polar substances such as glucose, amino acids, and mineral ions. This is important because dissolved substances can then be transported around the body (for example in blood plasma), and because metabolic reactions take place in aqueous solution inside cells.",
            markScheme: [
              "Water is polar (1)",
              "Dissolves ionic / polar substances (e.g. glucose, ions, amino acids) (1)",
              "Importance: transport of dissolved substances / reactions occur in solution (1)",
            ],
            commonError: "Stating water 'dissolves everything' — it dissolves polar/ionic substances, not non-polar ones such as fats.",
            difficulty: "core",
            hints: [
              "Why can water dissolve charged and polar substances? Think about its polarity.",
              "Which substances dissolve in water in the body?",
              "Why does dissolving matter for transport and reactions?",
            ],
            guideRef: "The Importance of Water",
          },
          {
            id: "bio-molecules-bq4-03",
            question: "DNA is made of two strands. (a) Name the base that pairs with adenine and the base that pairs with cytosine. [2] (b) State what holds the two strands together. [1]",
            marks: 3,
            modelAnswer: "(a) Adenine pairs with thymine (A-T), and cytosine pairs with guanine (C-G). (b) The two strands are held together by the pairing (bonding) between these complementary bases.",
            markScheme: [
              "(a) Adenine pairs with thymine (1)",
              "(a) Cytosine pairs with guanine (1)",
              "(b) Held together by base pairing / bonds between the complementary bases (1)",
            ],
            commonError: "Pairing adenine with cytosine or guanine — the correct pairs are A-T and C-G.",
            difficulty: "warmup",
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bq4-04",
            question: "One strand of DNA has the base sequence T–A–C–G–A–T. Write the base sequence of the complementary strand, and explain how you worked it out. [3]",
            marks: 3,
            modelAnswer: "The complementary strand is A–T–G–C–T–A. This is worked out using the base-pairing rules: adenine (A) always pairs with thymine (T), and cytosine (C) always pairs with guanine (G). So each base on the first strand is replaced by its partner: T→A, A→T, C→G, G→C, A→T, T→A.",
            markScheme: [
              "Correct complementary sequence A–T–G–C–T–A (1)",
              "Uses base-pairing rules A-T and C-G (1)",
              "Each base replaced by its complementary partner (working shown) (1)",
            ],
            commonError: "Forgetting that DNA uses thymine (T), not uracil (U), or pairing bases incorrectly.",
            difficulty: "core",
            hints: [
              "Use the rules: A pairs with T, C pairs with G.",
              "Replace each base in turn with its partner.",
              "T→A, A→T, C→G, G→C…",
            ],
            solutions: [
              {
                label: "Base-by-base pairing",
                steps: [
                  "Step 1: Rules — A↔T and C↔G.",
                  "Step 2: T→A, A→T, C→G, G→C, A→T, T→A.",
                  "Step 3: Read off the complementary strand: A–T–G–C–T–A.",
                ],
              },
            ],
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bq4-05",
            question: "Using examples from this topic, give one reaction in which water is used up and one in which water is released. [3]",
            marks: 3,
            modelAnswer: "Water is used up in hydrolysis: for example, during digestion a polymer such as starch is broken down into glucose by adding water to break the glycosidic bonds. Water is released in condensation: for example, when amino acids join to form a protein, or when glucose molecules join to form starch, a water molecule is released as each bond forms. So hydrolysis uses water and condensation releases it.",
            markScheme: [
              "Water used up: a named hydrolysis example (e.g. digestion of starch to glucose) (1)",
              "Water released: a named condensation example (e.g. amino acids joining / glucose joining to form starch) (1)",
              "Clear link: hydrolysis uses water, condensation releases water (1)",
            ],
            commonError: "Mixing up the two reactions — condensation releases water (builds polymers); hydrolysis uses water (breaks them down).",
            difficulty: "core",
            hints: [
              "Which reaction breaks polymers down using water?",
              "Which reaction builds polymers and releases water?",
              "Give a concrete named example of each.",
            ],
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bq4-06",
            question: "Water has a high specific heat capacity and a high latent heat of vaporisation. Explain how EACH of these properties benefits living organisms. [4]",
            marks: 4,
            modelAnswer: "A high specific heat capacity means a large amount of energy is needed to change water's temperature. Because organisms (and aquatic habitats) are largely water, they warm up and cool down slowly, so their internal temperature stays relatively stable. This keeps conditions suitable for enzymes. A high latent heat of vaporisation means a large amount of energy is needed to evaporate water. When water evaporates (e.g. sweating in animals or transpiration in plants), it removes a large amount of heat, providing effective cooling.",
            markScheme: [
              "High specific heat capacity → resists temperature change / large energy to change temperature (1)",
              "Benefit: stable internal temperature / suitable for enzymes (1)",
              "High latent heat of vaporisation → large energy needed to evaporate water (1)",
              "Benefit: evaporation (sweating/transpiration) removes a lot of heat → cooling (1)",
            ],
            commonError: "Confusing the two properties — specific heat capacity buffers temperature change; latent heat of vaporisation provides cooling by evaporation.",
            difficulty: "challenge",
            hints: [
              "Specific heat capacity is about heating/cooling the water itself.",
              "Latent heat of vaporisation is about evaporating the water.",
              "Link each property to a clear biological benefit.",
              "One gives temperature stability; the other gives cooling.",
            ],
            strategy: "Take each property in turn: state what it means, then state the biological benefit.",
            guideRef: "The Importance of Water",
          },
          {
            id: "bio-molecules-bq4-07",
            question: "A nutritionist analyses a breakfast cereal and finds it contains starch, reducing sugar, and protein, but no fat. Describe the results she would obtain from the four standard food tests (iodine, Benedict's, Biuret, ethanol emulsion). [4]",
            marks: 4,
            modelAnswer: "Iodine test: the sample would turn blue-black, showing starch is present. Benedict's test (with heating): the sample would form a brick-red precipitate, showing a reducing sugar is present. Biuret test: the sample would turn purple/violet, showing protein is present. Ethanol emulsion test: the sample would stay clear (no cloudy emulsion forms), showing fat is absent.",
            markScheme: [
              "Iodine → blue-black (starch present) (1)",
              "Benedict's (heated) → brick-red (reducing sugar present) (1)",
              "Biuret → purple/violet (protein present) (1)",
              "Ethanol emulsion → stays clear / no emulsion (no fat) (1)",
            ],
            commonError: "Giving the wrong colour for a test, or stating a positive ethanol result despite the cereal containing no fat.",
            difficulty: "core",
            hints: [
              "Match each molecule present to its test and positive colour.",
              "Fat is ABSENT, so what does the ethanol test show?",
              "Remember Benedict's needs heating to give brick-red.",
            ],
            guideRef: "Food Tests",
          },
          {
            id: "bio-molecules-bq4-08",
            question: "Explain why cooling by the evaporation of sweat depends on water having a high latent heat of vaporisation. [3]",
            marks: 3,
            modelAnswer: "Latent heat of vaporisation is the energy needed to change liquid water into water vapour. Because water has a high latent heat of vaporisation, a large amount of heat energy must be absorbed for sweat to evaporate. This heat energy is taken from the surface of the skin/body, so as the sweat evaporates, the body loses a large amount of heat and is cooled. If water had a low latent heat of vaporisation, much less heat would be removed per gram and cooling would be far less effective.",
            markScheme: [
              "Latent heat of vaporisation = energy needed to evaporate water (1)",
              "Evaporation of sweat absorbs a large amount of heat (because it is high) (1)",
              "Heat is taken from the body/skin → cooling (1)",
            ],
            commonError: "Saying sweat 'cools by being wet' rather than explaining that the evaporation (using heat from the body) is what removes heat.",
            difficulty: "core",
            hints: [
              "Define latent heat of vaporisation.",
              "Where does the energy to evaporate sweat come from?",
              "Removing heat from the body produces the cooling effect.",
            ],
            guideRef: "The Importance of Water",
          },
          {
            id: "bio-molecules-bq4-09",
            question: "Glucose, an amino acid, and a fatty acid are three small molecules. For each, name the larger molecule (polymer or macromolecule) it can help to build, and name the bond formed. [4]",
            marks: 4,
            modelAnswer: "Glucose builds polysaccharides such as starch, glycogen, or cellulose, with glucose units joined by glycosidic bonds. Amino acids build proteins (polypeptides), with amino acids joined by peptide bonds. Fatty acids (together with glycerol) build triglycerides (fats/oils), with fatty acids joined to glycerol by ester bonds.",
            markScheme: [
              "Glucose → starch/glycogen/cellulose, glycosidic bond (1)",
              "Amino acid → protein/polypeptide, peptide bond (1)",
              "Fatty acid → triglyceride/fat (with glycerol), ester bond (1)",
              "All bonds correctly matched to the right molecule (1)",
            ],
            commonError: "Mixing up the bonds — glycosidic (sugars), peptide (proteins), ester (lipids).",
            difficulty: "core",
            hints: [
              "Each monomer builds a different class of large molecule.",
              "Match each to its polymer/macromolecule.",
              "Then name the specific bond: glycosidic, peptide, or ester.",
            ],
            guideRef: "Small Molecules Building Large Ones",
          },
          {
            id: "bio-molecules-bq4-10",
            question: "A student claims: 'Carbohydrates, proteins, and lipids all contain the same elements, so the food tests are unnecessary.' Evaluate this claim. [4]",
            marks: 4,
            modelAnswer: "The claim is only partly true. Carbohydrates and lipids do both contain the same three elements — carbon, hydrogen, and oxygen — but proteins contain nitrogen as well (and often sulfur), so not all three classes contain the same elements. Even where elements are shared, the molecules differ greatly in structure and arrangement, so simply listing elements cannot tell them apart. Food tests are necessary because they detect the specific structure of each class (for example the helix of starch with iodine, peptide bonds of protein with Biuret, or the insolubility of fat in water with the ethanol test), allowing us to identify which molecules are actually present. So the claim is incorrect: food tests are needed.",
            markScheme: [
              "Recognises carbohydrates and lipids share C, H, O (claim partly true) (1)",
              "Corrects the claim: proteins also contain nitrogen (and sometimes sulfur) (1)",
              "Elements alone cannot distinguish molecules of different structure (1)",
              "Food tests detect specific structures, so are necessary to identify the molecules (1)",
            ],
            commonError: "Either fully agreeing or fully rejecting the claim without recognising the part that is true (carbohydrates and lipids share C, H, O) and the part that is false (proteins also have N).",
            difficulty: "challenge",
            hints: [
              "Which classes really do share the same elements?",
              "Which class has an extra element, and what is it?",
              "Even with shared elements, what else differs between the molecules?",
              "Explain what the food tests actually detect.",
            ],
            strategy: "Evaluate = weigh what is correct against what is wrong, then give a justified conclusion.",
            guideRef: "Elements in Biological Molecules",
          },
        ],
      },
    ],
  },
};
