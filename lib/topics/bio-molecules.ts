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
        id: "bio-molecules-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "10 MCQs: elements in biological molecules, condensation/hydrolysis, polymer monomers, and food-test basics.",
        questions: [
          {
            id: "bio-molecules-bm1-01",
            question: "Which elements are found in ALL three classes of biological molecule — carbohydrates, fats, and proteins?",
            options: ["C, H, O, N", "C, H, O only", "C, H, N, S", "C, O, N only"],
            answerIndex: 1,
            explanation: "Carbon, hydrogen, and oxygen are present in carbohydrates, fats, and proteins. Nitrogen is found in proteins but not in carbohydrates or fats. Sulfur is found in many proteins but is not universal even there.",
            guideRef: "Elements in Biological Molecules",
            difficulty: "warmup",
          },
          {
            id: "bio-molecules-bm1-02",
            question: "Glucose has the molecular formula C₆H₁₂O₆. What is the ratio of hydrogen to oxygen atoms in glucose?",
            options: ["1:1", "2:1", "6:1", "3:2"],
            answerIndex: 1,
            explanation: "Glucose has 12 hydrogen atoms and 6 oxygen atoms, giving a ratio of 12:6 = 2:1. This 2:1 H:O ratio is characteristic of all carbohydrates and is encoded in the empirical formula (CH₂O)ₙ.",
            guideRef: "Elements in Biological Molecules",
            difficulty: "warmup",
          },
          {
            id: "bio-molecules-bm1-03",
            question: "What is the monomer of both starch and cellulose?",
            options: ["Maltose", "Fructose", "Amino acid", "Glucose"],
            answerIndex: 3,
            explanation: "Both starch and cellulose are polymers of glucose. The key difference is the type of glycosidic bond: alpha bonds in starch, beta bonds in cellulose. The monomer (glucose) is identical in both.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "warmup",
          },
          {
            id: "bio-molecules-bm1-04",
            question: "Which statement correctly describes condensation?",
            options: [
              "A large molecule is broken down by adding water.",
              "Two molecules join together and water is released.",
              "A monomer is oxidised to release energy.",
              "A polymer dissolves in water to form monomers.",
            ],
            answerIndex: 1,
            explanation: "Condensation (dehydration synthesis) joins two molecules by forming a covalent bond and releasing one molecule of water. Hydrolysis is the reverse — adding water to break bonds. Oxidation and dissolution are separate processes.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "warmup",
          },
          {
            id: "bio-molecules-bm1-05",
            question: "A student tests a solution with iodine solution and observes a blue-black colour. What does this result indicate?",
            options: ["Glucose is present.", "Starch is present.", "Protein is present.", "Fat is present."],
            answerIndex: 1,
            explanation: "Iodine solution (orange-brown) turns blue-black only in the presence of starch. The I₃⁻ ions slot into the helical coils of the starch molecule to produce the blue-black complex. Glucose, protein, and fat do not give this colour change.",
            guideRef: "Food Tests",
            difficulty: "warmup",
          },
          {
            id: "bio-molecules-bm1-06",
            question: "Which bond joins amino acids together in a polypeptide chain?",
            options: ["Ester bond", "Glycosidic bond", "Peptide bond", "Hydrogen bond"],
            answerIndex: 2,
            explanation: "Amino acids are joined by peptide bonds, formed by condensation between the –NH₂ group of one amino acid and the –COOH group of the next. Ester bonds join fatty acids to glycerol; glycosidic bonds join monosaccharides; hydrogen bonds are non-covalent and maintain 3-D structure.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "warmup",
          },
          {
            id: "bio-molecules-bm1-07",
            question: "A triglyceride is formed from one glycerol molecule and three fatty acids. How many ester bonds are formed, and how many water molecules are released?",
            options: ["1 ester bond; 1 water", "2 ester bonds; 2 water", "3 ester bonds; 3 water", "6 ester bonds; 6 water"],
            answerIndex: 2,
            explanation: "Each fatty acid joins to one –OH group of glycerol by condensation, forming one ester bond and releasing one water molecule. With three fatty acids, three ester bonds form and three water molecules are released.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "core",
            hints: [
              "How many fatty acids attach to one glycerol?",
              "Each condensation reaction forms one bond and releases one water.",
              "Count the number of new bonds formed.",
            ],
          },
          {
            id: "bio-molecules-bm1-08",
            question: "The Benedict's test for reducing sugars requires heating. What is the positive result?",
            options: ["Blue to purple", "Orange-brown to blue-black", "Blue to brick-red precipitate", "Clear to cloudy white emulsion"],
            answerIndex: 2,
            explanation: "Benedict's solution is blue. When heated with a reducing sugar, Cu²⁺ ions are reduced to Cu⁺ (copper(I) oxide, Cu₂O), which forms a brick-red precipitate. Orange-brown to blue-black is the iodine test for starch; cloudy white emulsion is the ethanol test for fat.",
            guideRef: "Food Tests",
            difficulty: "warmup",
          },
          {
            id: "bio-molecules-bm1-09",
            question: "Glycogen is the energy-storage polysaccharide in animal cells. Compared with starch, glycogen is:",
            options: [
              "Less branched, allowing slower glucose release.",
              "More branched, allowing faster glucose release from many free ends.",
              "Made from a different monomer (fructose instead of glucose).",
              "Composed of beta glycosidic bonds, giving it structural rigidity.",
            ],
            answerIndex: 1,
            explanation: "Glycogen is more branched than starch. More branching means more free ends from which glucose can be cleaved by enzymes simultaneously, enabling rapid glucose release when energy demand is high (e.g. during exercise). Glycogen's monomer is glucose, and it has alpha glycosidic bonds.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "core",
            hints: [
              "Think about what having more 'ends' on a branched molecule means for the speed of enzyme action.",
              "Compare the branching of starch (amylopectin) with glycogen.",
              "Why might an animal need energy released more quickly than a plant?",
            ],
          },
          {
            id: "bio-molecules-bm1-10",
            question: "A student adds DCPIP solution to a fruit-juice sample drop by drop. The DCPIP is decolourised after 5 drops. She repeats the test with a different juice; this time 12 drops are needed. What can she conclude?",
            options: [
              "The second juice contains no vitamin C.",
              "The first juice has a higher vitamin C concentration than the second.",
              "DCPIP is a test for reducing sugars, not vitamin C.",
              "The second juice has more vitamin C because more drops were added.",
            ],
            answerIndex: 1,
            explanation: "Fewer drops to decolourise a fixed volume of DCPIP means a higher concentration of vitamin C per drop. The first juice needed only 5 drops, so it is more concentrated in vitamin C. The second juice needed 12 drops — lower concentration. The second juice still contains vitamin C; it is simply less concentrated.",
            guideRef: "Food Tests",
            difficulty: "core",
            hints: [
              "Does more drops mean more or less vitamin C per drop?",
              "DCPIP is decolourised by vitamin C — so both juices contain some vitamin C.",
              "Compare concentration, not total amount.",
            ],
          },
        ],
      },
      {
        id: "bio-molecules-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "10 MCQs: water properties, food-test application, structure-function, and experimental design.",
        questions: [
          {
            id: "bio-molecules-bm2-01",
            question: "Which property of water is directly responsible for the transpiration stream being pulled up through xylem vessels?",
            options: [
              "High specific heat capacity",
              "Water is a good solvent",
              "Cohesion — hydrogen bonds between water molecules",
              "High latent heat of vaporisation",
            ],
            answerIndex: 2,
            explanation: "Cohesion refers to the attraction between water molecules due to hydrogen bonding. This allows water to form continuous columns that can be pulled upward through xylem as water evaporates from leaves. Without cohesion, the water column would break.",
            guideRef: "The Importance of Water",
            difficulty: "core",
            hints: [
              "Transpiration pulls water from roots to leaves — what keeps the water column intact?",
              "Which property describes water molecules sticking to each other?",
            ],
          },
          {
            id: "bio-molecules-bm2-02",
            question: "A food sample gives a negative Benedict's result before hydrolysis but a positive (brick-red) result after boiling with dilute HCl, cooling, and neutralising with NaHCO₃. What does this show?",
            options: [
              "The sample contains starch.",
              "The sample contains sucrose (a non-reducing sugar).",
              "The sample contains protein.",
              "The sample contains fat.",
            ],
            answerIndex: 1,
            explanation: "Sucrose is a non-reducing sugar — it does not reduce Cu²⁺ in Benedict's solution. Boiling with dilute HCl hydrolyses sucrose into glucose and fructose (both reducing sugars), which then give a positive Benedict's result. Starch would be detected with iodine, not Benedict's; protein with Biuret; fat with the ethanol test.",
            guideRef: "Food Tests",
            difficulty: "core",
            hints: [
              "Why was the first Benedict's test negative? What kind of sugar does not reduce Cu²⁺?",
              "What does boiling with HCl do to sucrose?",
              "After hydrolysis, what reducing sugars are produced from sucrose?",
            ],
          },
          {
            id: "bio-molecules-bm2-03",
            question: "Why does water have a high specific heat capacity?",
            options: [
              "Water molecules are very large and therefore store more heat.",
              "The hydrogen bonds between water molecules must be broken before the temperature can rise, requiring a large input of energy.",
              "Water reflects solar radiation efficiently.",
              "Water molecules move slowly, so they absorb energy without changing temperature.",
            ],
            answerIndex: 1,
            explanation: "A large amount of energy is needed to raise water's temperature because energy must first break the many hydrogen bonds between water molecules before the molecules can move faster (higher temperature). This gives water its high specific heat capacity, buffering organisms and aquatic environments against temperature changes.",
            guideRef: "The Importance of Water",
            difficulty: "core",
            hints: [
              "What intermolecular forces exist between water molecules?",
              "What must happen to these forces before the kinetic energy (temperature) of molecules can increase?",
            ],
          },
          {
            id: "bio-molecules-bm2-04",
            question: "Which of the following correctly explains why cellulose cannot be digested by humans but starch can?",
            options: [
              "Cellulose contains a different monomer (fructose) that human enzymes cannot recognise.",
              "Starch has beta glycosidic bonds that human amylase breaks; cellulose has alpha bonds that it cannot.",
              "Humans lack the enzyme cellulase to break the beta glycosidic bonds in cellulose; amylase breaks the alpha glycosidic bonds in starch.",
              "Cellulose dissolves in water, so it passes through the gut too quickly.",
            ],
            answerIndex: 2,
            explanation: "Both starch and cellulose are made of glucose, but starch has alpha-1,4 glycosidic bonds and cellulose has beta-1,4 glycosidic bonds. Human digestive enzymes (amylase) are complementary to the alpha bond geometry and can hydrolyse starch. Humans lack cellulase, the enzyme needed to break beta bonds, so cellulose is indigestible.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "core",
            hints: [
              "What is the monomer of both starch and cellulose?",
              "What is the key structural difference between them?",
              "Which enzyme breaks starch? Does it work on cellulose?",
            ],
          },
          {
            id: "bio-molecules-bm2-05",
            question: "A scientist uses the ethanol emulsion test on a sample. She shakes the sample with ethanol, then pours the ethanol layer into water. A cloudy white emulsion forms. What does this confirm?",
            options: ["Protein is present.", "Starch is present.", "Reducing sugar is present.", "Fat (lipid) is present."],
            answerIndex: 3,
            explanation: "In the ethanol emulsion test, fat dissolves in ethanol. When the ethanol is poured into water, the fat is insoluble in water and precipitates as tiny droplets, forming a cloudy white emulsion. A clear result would indicate no fat. The test is specific to lipids; protein, starch, and reducing sugars use different reagents.",
            guideRef: "Food Tests",
            difficulty: "warmup",
          },
          {
            id: "bio-molecules-bm2-06",
            question: "Which statement about proteins is correct?",
            options: [
              "All proteins have the same amino acid sequence but different 3-D shapes.",
              "The specific sequence of amino acids determines the 3-D shape and therefore the function of a protein.",
              "Proteins are polymers of glucose joined by peptide bonds.",
              "Proteins contain only carbon, hydrogen, and oxygen.",
            ],
            answerIndex: 1,
            explanation: "Each protein has a unique sequence of amino acids (its primary structure) encoded by a gene. The sequence determines how the chain folds (secondary and tertiary structure), which determines the protein's function. Proteins are polymers of amino acids (not glucose), joined by peptide bonds, and they contain nitrogen (and often sulfur).",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "core",
            hints: [
              "What is the monomer of proteins?",
              "What determines how a protein folds into its 3-D shape?",
              "Which elements are found in proteins that are not found in carbohydrates?",
            ],
          },
          {
            id: "bio-molecules-bm2-07",
            question: "A student plans a food-test experiment but does not include any controls. Which of the following problems does this cause?",
            options: [
              "The colours produced will be wrong.",
              "She cannot tell whether a colour change is due to the food or to a faulty/contaminated reagent.",
              "She cannot heat the Benedict's reagent without a control tube.",
              "The volume of food sample used will be inconsistent.",
            ],
            answerIndex: 1,
            explanation: "Controls validate the reagents. A positive control (known substance) shows the reagent works; a negative control (distilled water) shows the baseline colour. Without controls, an unexpected colour in the test tube cannot be distinguished from reagent contamination or failure, making results uninterpretable.",
            guideRef: "Designing and Interpreting Food-Test Experiments",
            difficulty: "core",
            hints: [
              "What is the purpose of a negative control (distilled water)?",
              "What is the purpose of a positive control (known substance)?",
              "What would you conclude if your negative control turned brick-red?",
            ],
          },
          {
            id: "bio-molecules-bm2-08",
            question: "Ice floats on liquid water. What is the biological importance of this fact?",
            options: [
              "Ice provides a surface for organisms to walk on.",
              "A layer of ice on a lake insulates the water below, allowing aquatic organisms to survive winter.",
              "Ice is less salty than liquid water, providing fresh water for animals.",
              "Floating ice reflects sunlight, cooling the water below.",
            ],
            answerIndex: 1,
            explanation: "Because ice is less dense than liquid water (water is densest at 4 °C), ice forms at the surface of ponds and lakes. This ice layer acts as an insulator, reducing heat loss from the liquid water below, which stays at above 0 °C and allows aquatic organisms to survive freezing winters.",
            guideRef: "The Importance of Water",
            difficulty: "core",
            hints: [
              "What happens to the water beneath a layer of ice on a lake in winter?",
              "Why is the insulating effect of ice biologically important?",
            ],
          },
          {
            id: "bio-molecules-bm2-09",
            question: "Fats release approximately 37 kJ g⁻¹ when respired, while carbohydrates release approximately 17 kJ g⁻¹. The main reason for this difference is:",
            options: [
              "Fats have more carbon atoms per molecule than carbohydrates.",
              "Fats contain nitrogen, which releases extra energy when oxidised.",
              "Fats have a much higher ratio of hydrogen to oxygen, providing far more C–H bonds to be oxidised.",
              "Carbohydrates are already partly oxidised and so release less heat on combustion.",
            ],
            answerIndex: 2,
            explanation: "Carbohydrates have the formula (CH₂O)ₙ — a 2:1 H:O ratio. Fats have long hydrocarbon chains (–CH₂–) with very little oxygen; their H:O ratio is far greater. Since respiration oxidises C–H bonds to release energy, fats have far more energy-releasing bonds per gram. Option D is also correct reasoning but option C is the primary mechanistic explanation. Option B is incorrect — fats do not contain nitrogen.",
            guideRef: "Elements in Biological Molecules",
            difficulty: "challenge",
            hints: [
              "Write the empirical formula of a carbohydrate: (CH₂O)ₙ. How much oxygen is built in?",
              "A fatty acid chain is mostly –CH₂– groups. How many oxygen atoms are in that chain?",
              "In respiration, which bonds are oxidised to release energy?",
              "More C–H bonds per gram means more energy per gram.",
            ],
            strategy: "Compare H:O ratios: carbohydrates are pre-oxidised (H:O = 2:1); fats are hydrogen-rich (H:O >> 2:1). More H relative to O means more energy on oxidation.",
          },
          {
            id: "bio-molecules-bm2-10",
            question: "A student carries out the Biuret test on a sample and sees a purple colour. She then repeats the test on the same sample after boiling it with dilute HCl and neutralising. The result is now blue. Which of the following best explains this?",
            options: [
              "Boiling with HCl destroyed the copper ions in the reagent.",
              "Hydrolysis broke the peptide bonds, producing free amino acids, which do not give a positive Biuret result.",
              "The HCl reacted with the protein to produce starch.",
              "Neutralisation with NaHCO₃ removed the protein from solution.",
            ],
            answerIndex: 1,
            explanation: "The Biuret test detects peptide bonds. Boiling with HCl (acid hydrolysis) breaks all peptide bonds, converting the protein into individual amino acids. Free amino acids do not contain peptide bonds and therefore do not produce the purple complex with Cu²⁺ in alkaline conditions — the result is blue (negative).",
            guideRef: "Food Tests",
            difficulty: "challenge",
            hints: [
              "What does the Biuret test actually detect — the protein molecule itself, or the peptide bonds within it?",
              "What does boiling with dilute HCl do to peptide bonds?",
              "If all peptide bonds are broken, what is left — intact protein or free amino acids?",
              "Do free amino acids give a positive Biuret test?",
            ],
            strategy: "Ask: what structural feature does the Biuret test detect? Then ask: does acid hydrolysis destroy that feature?",
          },
        ],
      },
      {
        id: "bio-molecules-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "10 MCQs: deeper application of structure-function, experimental interpretation, and synoptic links.",
        questions: [
          {
            id: "bio-molecules-bm3-01",
            question: "A student dissolves starch in water and adds amylase. After 10 minutes she tests the solution with Benedict's reagent and heats it. A brick-red precipitate forms. What does this confirm?",
            options: [
              "Starch is still present.",
              "Amylase has hydrolysed starch, producing a reducing sugar (maltose or glucose).",
              "The amylase has been denatured.",
              "Fat has been released from the starch by the amylase.",
            ],
            answerIndex: 1,
            explanation: "Amylase hydrolyses starch, producing maltose (a disaccharide) and eventually glucose. Both maltose and glucose are reducing sugars that give a brick-red result with Benedict's. The positive Benedict's result therefore confirms that the amylase has broken down the starch into reducing-sugar products.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "core",
            hints: [
              "What products does amylase produce from starch?",
              "Are those products reducing sugars?",
              "Which test detects reducing sugars?",
            ],
          },
          {
            id: "bio-molecules-bm3-02",
            question: "Which of the following is a correct description of hydrolysis?",
            options: [
              "Joining monomers to form a polymer, releasing water.",
              "Breaking a covalent bond by adding water, producing smaller molecules.",
              "Oxidising a polymer to release energy.",
              "Dissolving a molecule in water without breaking any bonds.",
            ],
            answerIndex: 1,
            explanation: "Hydrolysis uses water to break covalent bonds in polymers, splitting them into smaller units (e.g. proteins → amino acids; starch → glucose; triglycerides → glycerol + fatty acids). Joining monomers with water release is condensation. Oxidation and dissolution are different processes.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "warmup",
          },
          {
            id: "bio-molecules-bm3-03",
            question: "A food sample contains both reducing sugar and protein. Which combination of tests would identify both?",
            options: [
              "Iodine test and ethanol emulsion test",
              "Benedict's test (heated) and Biuret test",
              "DCPIP test and iodine test",
              "Benedict's test (heated) and iodine test",
            ],
            answerIndex: 1,
            explanation: "Benedict's test (with heating) detects reducing sugars (brick-red positive); Biuret test detects protein (purple positive). These are two independent tests that each target a different class of molecule. Iodine detects starch; ethanol emulsion detects fat; DCPIP detects vitamin C.",
            guideRef: "Food Tests",
            difficulty: "core",
            hints: [
              "Which test detects reducing sugars?",
              "Which test detects protein?",
              "Do either of those tests interfere with each other?",
            ],
          },
          {
            id: "bio-molecules-bm3-04",
            question: "The diagram below represents a section of a polysaccharide chain. The bonds between the glucose units are alpha-1,4 glycosidic bonds. The molecule is most likely:",
            options: ["Cellulose", "Starch", "Glycerol", "A protein"],
            answerIndex: 1,
            explanation: "Alpha-1,4 glycosidic bonds are found in starch (and glycogen). These cause the chain to coil into a helix. Cellulose has beta-1,4 glycosidic bonds, which produce straight chains. Glycerol is not a polysaccharide; a protein is not made of glucose.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "core",
            hints: [
              "Alpha bonds → coiled/helical chain. Beta bonds → straight chain.",
              "Which polysaccharide uses alpha glycosidic bonds?",
            ],
          },
          {
            id: "bio-molecules-bm3-05",
            question: "A student sweats during exercise. Explain which property of water makes sweating an effective cooling mechanism.",
            options: [
              "Water has a low specific heat capacity, so it heats up quickly.",
              "Water has a high latent heat of vaporisation, so evaporation removes large amounts of heat energy from the body.",
              "Water is a good solvent, so it carries heat away in the sweat.",
              "Water has cohesion, which pulls heat up through sweat glands.",
            ],
            answerIndex: 1,
            explanation: "Water's high latent heat of vaporisation means a large amount of energy is required to convert liquid water to vapour. This energy comes from the body surface, removing heat efficiently. A high (not low) specific heat capacity is what buffers temperature change — the question is specifically about evaporative cooling.",
            guideRef: "The Importance of Water",
            difficulty: "core",
            hints: [
              "What does 'latent heat of vaporisation' mean?",
              "Where does the energy come from when water evaporates from skin?",
              "Higher latent heat = more energy needed per gram evaporated = more cooling per gram.",
            ],
          },
          {
            id: "bio-molecules-bm3-06",
            question: "Which of the following molecules is a disaccharide formed by condensation of two glucose molecules?",
            options: ["Glycogen", "Cellulose", "Maltose", "Starch"],
            answerIndex: 2,
            explanation: "Maltose is a disaccharide formed when two glucose molecules join by a condensation reaction (releasing water) to form an alpha-1,4 glycosidic bond. Glycogen, cellulose, and starch are all polysaccharides — polymers of many glucose units.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "warmup",
          },
          {
            id: "bio-molecules-bm3-07",
            question: "A scientist tests two white powders, X and Y. Powder X gives a blue-black colour with iodine. Powder Y gives a purple colour with Biuret reagent. Which of the following is correct?",
            options: [
              "X is protein; Y is starch.",
              "X is starch; Y is protein.",
              "X is fat; Y is a reducing sugar.",
              "Both X and Y are carbohydrates.",
            ],
            answerIndex: 1,
            explanation: "Blue-black with iodine is the positive result for starch, so X is starch. Purple with Biuret reagent is the positive result for protein, so Y is protein. Fat gives a cloudy white emulsion with the ethanol test; reducing sugars give brick-red with Benedict's.",
            guideRef: "Food Tests",
            difficulty: "warmup",
          },
          {
            id: "bio-molecules-bm3-08",
            question: "Phospholipids are the main component of cell membranes. They have a glycerol backbone, two fatty acid tails, and a phosphate group. Their tails are described as hydrophobic. Why does this property make them suited to forming a membrane bilayer?",
            options: [
              "Hydrophobic tails dissolve in the watery cytoplasm, anchoring the membrane.",
              "Hydrophobic tails face away from water (inward), while hydrophilic heads face the watery environments on either side, forming a stable bilayer.",
              "Hydrophobic tails repel each other and push membrane proteins outward.",
              "Hydrophobic tails form peptide bonds with adjacent phospholipids.",
            ],
            answerIndex: 1,
            explanation: "Phospholipid bilayers form because the hydrophobic (water-repelling) fatty acid tails avoid water by facing inward, while the hydrophilic (water-attracting) phosphate heads face outward into the aqueous cytoplasm and extracellular fluid. This self-assembly is driven by the hydrophobic effect and creates a stable, selective barrier.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "challenge",
            hints: [
              "Hydrophobic means 'water-fearing' — where would a hydrophobic tail position itself in an aqueous environment?",
              "In a bilayer, there are two layers of phospholipids — what do the tails of each layer face?",
              "What does the hydrophilic head face?",
              "This arrangement is driven by minimising contact between hydrophobic tails and water.",
            ],
            strategy: "Think about where each part (head/tail) ends up: hydrophilic parts face water; hydrophobic parts face away from water.",
          },
          {
            id: "bio-molecules-bm3-09",
            question: "A scientist wants to test whether a food sample contains fat but has no ethanol available. She decides to use iodine solution instead. Why would this be an incorrect method?",
            options: [
              "Iodine solution reacts with fats to give a red colour.",
              "Iodine solution tests for starch, not fat — using it to test for fat is applying the wrong reagent.",
              "Iodine solution must be heated to detect fat.",
              "Fat does not dissolve in iodine solution.",
            ],
            answerIndex: 1,
            explanation: "Each food test uses a specific reagent for a specific molecule class. Iodine solution detects starch (blue-black positive). It does not test for fat. To test for fat, the correct reagent/procedure is the ethanol emulsion test. Applying an incorrect reagent gives no meaningful result for the intended molecule.",
            guideRef: "Food Tests",
            difficulty: "core",
            hints: [
              "What does iodine solution detect?",
              "What is the correct test for fat?",
              "Why can't you substitute one reagent for another in food tests?",
            ],
          },
          {
            id: "bio-molecules-bm3-10",
            question: "A polypeptide chain is heated to 90 °C. The protein denatures. Which bonds are most likely broken, causing denaturation?",
            options: [
              "Peptide bonds in the primary structure.",
              "Covalent bonds between carbon atoms in the backbone.",
              "Hydrogen bonds and other non-covalent interactions maintaining the 3-D shape.",
              "Glycosidic bonds between glucose residues.",
            ],
            answerIndex: 2,
            explanation: "Denaturation is the loss of a protein's 3-D shape. The primary structure (amino acid sequence, held by peptide bonds) is maintained, but the secondary and tertiary structures — held by hydrogen bonds, hydrophobic interactions, ionic bonds, and disulfide bridges — are disrupted by heat. Peptide bonds are strong covalent bonds not broken by moderate heat. Glycosidic bonds are found in polysaccharides, not proteins.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "challenge",
            hints: [
              "Denaturation changes 3-D shape but does NOT break the primary amino acid sequence.",
              "What types of bonds maintain the 3-D folded shape (secondary/tertiary structure)?",
              "Peptide bonds (the backbone) are strong covalent bonds — are they broken by 90 °C?",
              "Hydrogen bonds are weak — are they disrupted by increased thermal energy?",
            ],
            strategy: "Distinguish primary structure (peptide bonds, very stable) from 3-D shape (hydrogen bonds, hydrophobic interactions — disrupted by heat).",
          },
        ],
      },
      {
        id: "bio-molecules-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "10 MCQs: challenge and synoptic questions requiring multi-step reasoning across all sub-topics.",
        questions: [
          {
            id: "bio-molecules-bm4-01",
            question: "A scientist hydrolyses a sample of starch completely. She then carries out the iodine test and the Benedict's test (with heating) on the hydrolysed solution. What results would she obtain?",
            options: [
              "Iodine: blue-black; Benedict's: blue",
              "Iodine: orange-brown; Benedict's: brick-red",
              "Iodine: blue-black; Benedict's: brick-red",
              "Iodine: orange-brown; Benedict's: blue",
            ],
            answerIndex: 1,
            explanation: "Complete hydrolysis of starch converts it entirely to glucose (a reducing sugar). No starch remains, so iodine stays orange-brown (negative). Glucose is a reducing sugar, so Benedict's with heating gives brick-red (positive). This shows how hydrolysis converts a non-reducing-sugar-test-positive molecule (starch, detected by iodine) into a reducing-sugar-test-positive molecule (glucose, detected by Benedict's).",
            guideRef: "Food Tests",
            difficulty: "core",
            hints: [
              "What is produced when starch is completely hydrolysed?",
              "Is the product a reducing sugar?",
              "After complete hydrolysis, is any starch left to react with iodine?",
            ],
          },
          {
            id: "bio-molecules-bm4-02",
            question: "Which of the following statements about sucrose is correct?",
            options: [
              "Sucrose is a reducing sugar that gives a positive Benedict's test directly.",
              "Sucrose is a non-reducing sugar; it must be hydrolysed into glucose and fructose before giving a positive Benedict's test.",
              "Sucrose is a polysaccharide made of many fructose units.",
              "Sucrose can be detected directly using the ethanol emulsion test.",
            ],
            answerIndex: 1,
            explanation: "Sucrose is a disaccharide (glucose + fructose) with both anomeric carbons locked in the glycosidic bond, leaving no free aldehyde/ketone group to reduce Cu²⁺. It is a non-reducing sugar. Boiling with dilute HCl hydrolyses it to glucose and fructose, both of which are reducing sugars and give a positive Benedict's result.",
            guideRef: "Food Tests",
            difficulty: "core",
            hints: [
              "Does sucrose have a free aldehyde or ketone group? If not, can it reduce Cu²⁺?",
              "What two monosaccharides make up sucrose?",
              "After hydrolysis, are those products reducing sugars?",
            ],
          },
          {
            id: "bio-molecules-bm4-03",
            question: "A student tests a food sample and obtains positive results for both the Biuret test and the ethanol emulsion test. Which combination of molecules is most likely present?",
            options: [
              "Starch and reducing sugar",
              "Protein and fat",
              "Reducing sugar and vitamin C",
              "Starch and protein",
            ],
            answerIndex: 1,
            explanation: "Biuret test positive (purple) = protein present. Ethanol emulsion test positive (cloudy white) = fat (lipid) present. Therefore the sample contains both protein and fat — consistent with many natural foods (e.g. meat, eggs).",
            guideRef: "Food Tests",
            difficulty: "warmup",
          },
          {
            id: "bio-molecules-bm4-04",
            question: "Water has a maximum density at 4 °C. Which graph correctly shows how the density of water changes with temperature from 0 °C to 10 °C?",
            options: [
              "Density increases steadily from 0 °C to 10 °C.",
              "Density is constant across 0–10 °C.",
              "Density increases from 0 °C to a peak at 4 °C, then decreases.",
              "Density decreases steadily from 0 °C to 10 °C.",
            ],
            answerIndex: 2,
            explanation: "Water reaches its maximum density at 4 °C. From 0 °C to 4 °C, density increases as the ice crystal lattice collapses; from 4 °C to 10 °C, density decreases as thermal expansion becomes dominant. This anomalous behaviour means ice (0 °C) is less dense than liquid water at 4 °C, which is why ice floats.",
            guideRef: "The Importance of Water",
            difficulty: "core",
            hints: [
              "At what exact temperature is water densest?",
              "Below 4 °C, does the density increase or decrease as temperature falls towards 0 °C?",
              "Above 4 °C, what happens to density as temperature rises?",
            ],
          },
          {
            id: "bio-molecules-bm4-05",
            question: "Collagen is a structural protein found in tendons and skin. It is made of three polypeptide chains coiled together. Which feature of proteins does collagen illustrate?",
            options: [
              "Proteins can catalyse chemical reactions.",
              "Protein function is determined by its specific 3-D shape — collagen's fibrous triple helix gives it tensile strength.",
              "Proteins are insoluble in all conditions.",
              "All proteins have exactly three polypeptide chains.",
            ],
            answerIndex: 1,
            explanation: "Collagen illustrates the structure-function principle: its triple helix (three intertwined polypeptides) gives it exceptionally high tensile strength, making it ideal for tendons, ligaments, and skin. Not all proteins are fibrous, insoluble, or composed of three chains — haemoglobin has four chains, and many enzymes are globular.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "core",
            hints: [
              "What is collagen's function in the body?",
              "How does its triple-helix structure contribute to that function?",
              "Which general principle (structure → function) does this illustrate?",
            ],
          },
          {
            id: "bio-molecules-bm4-06",
            question: "A student tests a piece of bread before and after salivary digestion in the mouth. Before digestion: iodine = blue-black; Benedict's = blue. After 2 minutes of chewing: iodine = orange-brown; Benedict's = brick-red. What has occurred?",
            options: [
              "The bread gained water by condensation, forming maltose.",
              "Salivary amylase hydrolysed starch into reducing sugars (maltose/glucose).",
              "The bread lost water to the saliva, converting glucose into starch.",
              "Heating in the mouth denatured the starch and turned it into sugar.",
            ],
            answerIndex: 1,
            explanation: "Saliva contains amylase, which hydrolyses starch (detected by blue-black iodine before digestion) into maltose and glucose (reducing sugars, detected by brick-red Benedict's after digestion). After complete digestion, no starch remains, so iodine stays orange-brown. This is hydrolysis, not condensation.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "core",
            hints: [
              "What enzyme is present in saliva?",
              "What does that enzyme do to starch?",
              "Are the products of starch hydrolysis reducing sugars?",
            ],
          },
          {
            id: "bio-molecules-bm4-07",
            question: "Which of the following correctly summarises the process by which a dipeptide is formed from two amino acids?",
            options: [
              "Two amino acids combine; water is added; a peptide bond forms.",
              "Two amino acids combine; water is released; a peptide bond forms.",
              "Two amino acids combine; water is released; a glycosidic bond forms.",
              "Two amino acids combine; an ester bond forms; water is absorbed.",
            ],
            answerIndex: 1,
            explanation: "Condensation joins two amino acids by forming a peptide bond between the –NH₂ of one and the –COOH of the other, releasing one water molecule. Adding water (hydrolysis) would break bonds, not form them. Glycosidic bonds join sugars; ester bonds join fatty acids to glycerol.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "warmup",
          },
          {
            id: "bio-molecules-bm4-08",
            question: "A biologist finds that a newly discovered enzyme stops working at pH 4 but functions normally at pH 7. The enzyme is a protein. Which explanation is most likely?",
            options: [
              "At pH 4, the reducing sugars in the enzyme are hydrolysed.",
              "At pH 4, hydrogen ions change the ionisation of R-groups in the active site, altering its shape so the substrate no longer fits.",
              "At pH 4, the glycosidic bonds in the enzyme break down.",
              "At pH 4, the fatty acid tails of the enzyme separate from the glycerol.",
            ],
            answerIndex: 1,
            explanation: "Enzymes are proteins whose active-site shape depends on the ionisation state of amino acid R-groups. At non-optimal pH values, altered H⁺ concentration changes the charge on R-groups, disrupting hydrogen bonds and other interactions. This changes the 3-D shape of the active site, reducing or abolishing substrate binding. The enzyme is not denatured at pH 4 (it returns to activity at pH 7), but its shape is reversibly altered. Reducing sugars, glycosidic bonds, and fatty acids are not found in proteins.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "challenge",
            hints: [
              "What does pH measure? How do H⁺ ions affect charged groups in amino acid R-groups?",
              "Which part of the enzyme must have the correct shape for the substrate to bind?",
              "Is the inactivation at pH 4 reversible or irreversible? Does that affect your answer?",
              "Which molecular feature of a protein is disrupted by pH changes?",
            ],
            strategy: "Trace the chain: pH change → R-group ionisation change → hydrogen bond disruption → active site shape change → substrate no longer fits.",
          },
          {
            id: "bio-molecules-bm4-09",
            question: "A student is told that molecule X contains C, H, and O only, with a H:O ratio much greater than 2:1. Molecule X is most likely:",
            options: ["A protein", "A carbohydrate", "A lipid (fat or oil)", "Vitamin C"],
            answerIndex: 2,
            explanation: "Carbohydrates contain C, H, O with a H:O ratio of exactly 2:1. Fats contain C, H, O but with a H:O ratio far greater than 2:1 (hydrocarbon chains are almost entirely C–H bonds with very little oxygen). Proteins contain N as well. Vitamin C contains C, H, O but is not a polymer and its H:O ratio is close to 2:1 (ascorbic acid, C₆H₈O₆).",
            guideRef: "Elements in Biological Molecules",
            difficulty: "challenge",
            hints: [
              "Carbohydrates: C, H, O with H:O ratio = 2:1 exactly.",
              "Fats: C, H, O with H:O ratio >> 2:1 (hydrogen-rich hydrocarbon chains).",
              "Proteins: contain N in addition to C, H, O.",
              "The clue is H:O >> 2:1 with no other elements — which class fits?",
            ],
          },
          {
            id: "bio-molecules-bm4-10",
            question: "A student adds iodine solution to a plant cell. The starch grains inside chloroplasts turn blue-black, but the cell wall does not. Why does the cell wall not turn blue-black even though it is a glucose polymer?",
            options: [
              "The cell wall contains fructose, not glucose.",
              "The cell wall is made of cellulose with beta glycosidic bonds; iodine cannot slot into straight chains as it does into starch helices.",
              "The cell wall is too thick for iodine to penetrate.",
              "Iodine solution reacts only with animal cells, not plant cells.",
            ],
            answerIndex: 1,
            explanation: "Starch gives a blue-black colour because iodine (I₃⁻) ions slot into the helical coils created by alpha glycosidic bonds. Cellulose has beta glycosidic bonds that produce long, straight chains — no helix is formed, so iodine cannot form the inclusion complex. The cell wall stays orange-brown despite being a glucose polymer. Both cell wall and starch granules are in the same plant cell, so iodine penetration is not the issue.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "challenge",
            hints: [
              "What structural feature of starch allows iodine to produce the blue-black colour?",
              "Does cellulose have the same structural feature? Why not?",
              "The bond type (alpha vs. beta) determines the chain shape — coiled or straight?",
              "Iodine forms an inclusion complex inside the starch helix — can it do this with a straight cellulose chain?",
            ],
            strategy: "Link bond type → chain shape → ability of iodine to form an inclusion complex → colour change (or absence of it).",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "bio-molecules-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "10 structured questions on elements, condensation, food tests, and water properties.",
        questions: [
          {
            id: "bio-molecules-bq1-01",
            question: "State the elements found in (a) carbohydrates, (b) fats, and (c) proteins. For each, identify any element(s) present that distinguish it from the other two classes. [5]",
            marks: 5,
            modelAnswer: "(a) Carbohydrates contain carbon (C), hydrogen (H), and oxygen (O) only. The H:O ratio is always 2:1. (b) Fats also contain C, H, and O only, but with a much higher H:O ratio than carbohydrates (hydrocarbon chains are H-rich). (c) Proteins contain C, H, O, and nitrogen (N); most also contain sulfur (S). The distinguishing element for proteins is nitrogen — it is present in the amino group (–NH₂) of every amino acid and is absent from carbohydrates and fats.",
            markScheme: [
              "Carbohydrates: C, H, O only.",
              "Fats: C, H, O only (same elements as carbohydrates, but higher H:O ratio).",
              "Proteins: C, H, O, N (and usually S).",
              "Nitrogen is the element that distinguishes proteins from carbohydrates and fats.",
              "Accept sulfur as a second distinguishing element for proteins.",
            ],
            commonError: "Students often say carbohydrates and fats are identical in elemental composition without noting the H:O ratio difference. Also, many omit sulfur or say nitrogen is only sometimes present in proteins — nitrogen is present in all proteins (every amino acid has –NH₂).",
            guideRef: "Elements in Biological Molecules",
            difficulty: "warmup",
            hints: [
              "Write out the empirical formula of a carbohydrate: (CH₂O)ₙ. What elements are present?",
              "Fats have long hydrocarbon chains — do they have any nitrogen?",
              "What functional group in amino acids contains nitrogen?",
            ],
          },
          {
            id: "bio-molecules-bq1-02",
            question: "Explain the difference between condensation and hydrolysis, giving one example of each in the context of biological molecules. [4]",
            marks: 4,
            modelAnswer: "Condensation is a reaction in which two molecules join together and a molecule of water is released. It forms a new covalent bond — for example, two glucose molecules join by condensation to form the disaccharide maltose (an alpha-1,4 glycosidic bond forms and one water molecule is released). Hydrolysis is the reverse process: a covalent bond in a large molecule is broken by the addition of water, producing two smaller molecules. For example, a triglyceride is hydrolysed by adding water to break each ester bond, releasing glycerol and three fatty acids.",
            markScheme: [
              "Condensation: two molecules join / covalent bond forms; water is released.",
              "Condensation example: glucose + glucose → maltose (or any correct condensation, e.g. amino acid + amino acid → dipeptide; glycerol + fatty acid → ester bond).",
              "Hydrolysis: a bond is broken by addition of water; two smaller molecules produced.",
              "Hydrolysis example: triglyceride → glycerol + fatty acids (or starch → glucose; protein → amino acids).",
            ],
            commonError: "Students often confuse the two processes or state that water is released in hydrolysis (it is added). The mnemonic: CONdensation = CONnect + lose water; HYDROlysis = use water to break.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "warmup",
            hints: [
              "Condensation: joining → water OUT.",
              "Hydrolysis: breaking → water IN.",
              "Give an example that involves specific named molecules, not just 'monomers and polymers'.",
            ],
          },
          {
            id: "bio-molecules-bq1-03",
            question: "A student wants to test whether a food sample contains (i) starch, (ii) protein, and (iii) fat. Describe the reagent(s) and expected positive result for each test. [6]",
            marks: 6,
            modelAnswer: "(i) Starch: add iodine solution (orange-brown) to the sample. A positive result is a blue-black colour. (ii) Protein: add Biuret reagent (or NaOH solution followed by a few drops of dilute copper sulfate solution) to the sample. A positive result is a purple or violet colour. (iii) Fat: dissolve the sample in ethanol by shaking, then pour the ethanol layer into cold water. A positive result is a cloudy white emulsion forming in the water. A negative result (no fat) is a clear solution.",
            markScheme: [
              "(i) Starch: iodine solution → blue-black positive.",
              "(ii) Protein: Biuret reagent (or NaOH + CuSO₄) → purple/violet positive.",
              "(iii) Fat: ethanol emulsion test → cloudy white emulsion positive.",
              "Each test requires both the correct reagent AND the correct positive result description (1 mark each for reagent + result, up to 6 marks total across three tests).",
            ],
            commonError: "Students often describe the iodine test for starch when asked about protein, or forget to describe both the reagent AND the result. Stating 'it turns blue' without specifying the shade (blue-black) or the test is insufficient.",
            guideRef: "Food Tests",
            difficulty: "core",
            hints: [
              "For each molecule, name the specific reagent (not just 'add a chemical').",
              "State what happens in a positive result — the specific colour change or observation.",
              "Don't confuse the tests: blue-black = starch (iodine); purple = protein (Biuret); cloudy white = fat (ethanol).",
            ],
          },
          {
            id: "bio-molecules-bq1-04",
            question: "A student heats a Benedict's test solution without adding any food sample. The solution remains blue. She then adds a glucose solution and heats again. The solution turns brick-red.\n\n(a) What is the role of the first test (no food sample added)? [1]\n(b) Name the chemical responsible for the brick-red colour. [1]\n(c) Explain, in terms of electron transfer, why glucose produces this colour change. [2]",
            marks: 4,
            modelAnswer: "(a) The first test (blue result with no food sample) is a negative control. It shows that the Benedict's reagent itself does not produce a colour change, confirming that any positive result in subsequent tests is due to the food sample and not contamination or faulty reagent.\n(b) Copper(I) oxide (Cu₂O).\n(c) Glucose is a reducing sugar — it donates electrons to the copper(II) ions (Cu²⁺) in Benedict's solution, reducing them to copper(I) ions (Cu⁺). Cu⁺ then precipitates as insoluble copper(I) oxide (Cu₂O), which is brick-red. The glucose is simultaneously oxidised.",
            markScheme: [
              "(a) Negative control — confirms the reagent does not produce a colour change on its own.",
              "(b) Copper(I) oxide / Cu₂O.",
              "(c) Glucose (reducing sugar) donates electrons to Cu²⁺, reducing it to Cu⁺.",
              "(c) Cu⁺ precipitates as Cu₂O (copper(I) oxide) — brick-red precipitate.",
            ],
            commonError: "Students often say the brick-red colour is due to copper sulfate — but copper sulfate is the blue starting material. The brick-red precipitate is copper(I) oxide, a different compound formed by reduction.",
            guideRef: "Food Tests",
            difficulty: "core",
            hints: [
              "A negative control contains no test substance — what should it show?",
              "What ion is reduced in Benedict's test? From what to what?",
              "When Cu²⁺ is reduced to Cu⁺, what compound precipitates?",
            ],
          },
          {
            id: "bio-molecules-bq1-05",
            question: "State three properties of water and, for each, explain the biological importance of that property. [6]",
            marks: 6,
            modelAnswer: "Property 1 — Solvent: Water is a polar molecule and can dissolve ionic and polar substances such as glucose, mineral ions, and oxygen. Biological importance: metabolic reactions in cells occur in aqueous solution, and water transports dissolved substances in blood plasma and xylem sap.\n\nProperty 2 — High specific heat capacity: A large amount of energy is needed to raise water's temperature by 1 °C. Biological importance: bodies and aquatic environments resist rapid temperature changes, maintaining stable conditions for enzyme activity and cell function.\n\nProperty 3 — High latent heat of vaporisation: A large amount of energy is needed to evaporate water. Biological importance: sweating in animals and transpiration in plants removes large amounts of heat energy per gram of water evaporated, providing effective cooling.",
            markScheme: [
              "Solvent: dissolves polar/ionic substances → metabolic reactions in aqueous solution / transport in blood.",
              "High specific heat capacity: resists temperature change → stable enzyme/cellular conditions.",
              "High latent heat of vaporisation: evaporation removes large amounts of heat → effective cooling by sweating/transpiration.",
              "Cohesion: hydrogen bonds between water molecules → continuous water column in xylem (transpiration stream).",
              "Reactant: water used in hydrolysis reactions / released in condensation → essential for digestion and biosynthesis.",
              "Ice floats (maximum density at 4 °C): ice insulates aquatic habitats in winter.",
              "(Award 2 marks per property: 1 for naming/describing the property, 1 for the biological significance. Any three correct for full marks.)",
            ],
            commonError: "Students name properties without the biological explanation (e.g. 'water has high specific heat capacity' scores 0.5; adding 'this keeps enzymes at a stable temperature' scores the second mark). Both parts are needed.",
            guideRef: "The Importance of Water",
            difficulty: "core",
            hints: [
              "Name the property first, then say what that means for a biological process or organism.",
              "Try: solvent → transport; high SHC → temperature buffering; high LHV → cooling; cohesion → transpiration stream.",
              "Always include a named biological process — 'it is useful for organisms' is too vague.",
            ],
            strategy: "Property → consequence → biological example (three-step chain for each of the three reasons).",
          },
          {
            id: "bio-molecules-bq1-06",
            question: "A student investigates whether different fruit juices contain vitamin C using the DCPIP test. She adds each juice drop by drop to 2 cm³ of DCPIP until the DCPIP is decolourised. Her results are shown below:\n\nApple juice: 14 drops\nOrange juice: 5 drops\nLemon juice: 3 drops\nDistilled water: did not decolourise DCPIP\n\n(a) Which juice has the highest concentration of vitamin C? Explain your answer. [2]\n(b) What is the role of distilled water in this experiment? [1]\n(c) State one variable that must be controlled to make the comparison of juices valid. [1]",
            marks: 4,
            modelAnswer: "(a) Lemon juice has the highest concentration of vitamin C. Only 3 drops were needed to decolourise the DCPIP, meaning each drop contained more vitamin C than the other juices. Fewer drops needed = higher concentration per drop.\n(b) Distilled water is the negative control. It confirms that the DCPIP is not spontaneously decolourised by anything other than vitamin C, validating that any decolouration seen with the fruit juices is due to the vitamin C they contain.\n(c) Any one of: volume of DCPIP in each tube (must be 2 cm³ for each); concentration of DCPIP solution; size/volume of each drop (use the same dropper for all juices); temperature of solutions.",
            markScheme: [
              "(a) Lemon juice — fewest drops needed to decolourise DCPIP.",
              "(a) Fewer drops = higher vitamin C concentration per drop / more vitamin C per unit volume.",
              "(b) Negative control — confirms DCPIP is not decolourised by water alone / validates the test.",
              "(c) Any valid controlled variable: volume of DCPIP / drop size / temperature / concentration of DCPIP.",
            ],
            commonError: "Students often say 'more drops means more vitamin C' — this is backwards. More drops means each drop has less vitamin C, so concentration is lower. Fewer drops = more concentrated.",
            guideRef: "Designing and Interpreting Food-Test Experiments",
            difficulty: "core",
            hints: [
              "If concentration is high, does it take more or fewer drops to decolourise a fixed volume of DCPIP?",
              "What should a negative control contain, and what result should it give?",
              "For a fair comparison, what must stay the same across all tests?",
            ],
          },
          {
            id: "bio-molecules-bq1-07",
            question: "Describe and explain the procedure for testing whether a food sample contains sucrose (a non-reducing sugar). Your answer should include why the standard Benedict's test must be modified. [5]",
            marks: 5,
            modelAnswer: "First, carry out the standard Benedict's test on the sample by adding Benedict's solution and heating in a water bath at ~80 °C. If the result is negative (remains blue), sucrose may be present but cannot yet be confirmed (reducing sugars are absent or undetectable). To test for sucrose: take a fresh portion of the sample and boil it with dilute hydrochloric acid (HCl) for 2–3 minutes. This hydrolyses any sucrose into its component monosaccharides — glucose and fructose — both of which are reducing sugars. Cool the mixture, then neutralise it by adding sodium hydrogencarbonate (NaHCO₃) solution until fizzing stops. This step is essential because HCl would otherwise destroy the Cu²⁺ in Benedict's reagent (acidic conditions prevent the test from working). Now add Benedict's solution and heat. A brick-red precipitate indicates sucrose was present. If the result is still blue after hydrolysis and neutralisation, no sucrose was present.",
            markScheme: [
              "Carry out standard Benedict's test first — negative (blue) result confirms no reducing sugar.",
              "Boil sample with dilute HCl to hydrolyse sucrose into glucose and fructose.",
              "Cool the mixture after hydrolysis.",
              "Neutralise with sodium hydrogencarbonate (NaHCO₃) — must state this step and explain it prevents HCl from interfering with Benedict's.",
              "Add Benedict's solution and heat — brick-red positive indicates sucrose was present.",
            ],
            commonError: "The most common error is omitting the neutralisation step. Students who skip it may correctly describe hydrolysis but fail to explain why Benedict's test won't work in acidic conditions. Also, many students add Benedict's before neutralising.",
            guideRef: "Food Tests",
            difficulty: "core",
            hints: [
              "Why is sucrose not detected by the standard Benedict's test? (It is a non-reducing sugar — no free aldehyde/ketone.)",
              "What does boiling with HCl do to the sucrose molecule?",
              "Why must you neutralise the HCl before adding Benedict's?",
              "What is the purpose of the final Benedict's test?",
            ],
          },
          {
            id: "bio-molecules-bq1-08",
            question: "Explain why carbohydrates and lipids both contain only C, H, and O, yet they are considered different classes of molecules. In your answer, refer to their elemental ratios, monomers, and bonds. [4]",
            marks: 4,
            modelAnswer: "Although both carbohydrates and lipids contain only carbon, hydrogen, and oxygen, they differ in several ways. First, the H:O ratio differs significantly: carbohydrates have an H:O ratio of 2:1 (encoded in the formula (CH₂O)ₙ), whereas lipids (fats/oils) have a much higher H:O ratio because they consist of long hydrocarbon chains (–CH₂–) with very little oxygen. Second, their monomers and building blocks differ: carbohydrates are built from monosaccharides such as glucose (a monomer), whereas lipids are not true polymers — they are formed from glycerol and fatty acids, which are joined by ester bonds (not glycosidic bonds). Third, the bonds differ: carbohydrates use glycosidic bonds between monosaccharides; lipids use ester bonds between fatty acids and glycerol.",
            markScheme: [
              "Both contain C, H, O only — accepted as a starting point.",
              "H:O ratio: carbohydrates = 2:1 (CH₂O)ₙ; lipids have far more H relative to O (H:O >> 2:1).",
              "Monomers/subunits differ: carbohydrate monomer = glucose (or other monosaccharide); lipid = glycerol + fatty acids (not a true polymer).",
              "Bonds differ: glycosidic bonds in carbohydrates; ester bonds in lipids.",
            ],
            commonError: "Students often say 'carbohydrates and lipids are different molecules' without giving chemical reasons. The question asks for elemental ratios, monomers, and bonds — all three must be addressed.",
            guideRef: "Elements in Biological Molecules",
            difficulty: "challenge",
            hints: [
              "What is the empirical formula of a carbohydrate? What does this tell you about the H:O ratio?",
              "What is the building-block (monomer) of carbohydrates versus lipids?",
              "What type of bond joins glucose units in starch? What joins fatty acids to glycerol?",
            ],
            strategy: "Use three specific differences: (1) H:O ratio, (2) monomers/subunits, (3) bond types.",
          },
          {
            id: "bio-molecules-bq1-09",
            question: "A scientist adds amylase to a starch solution and monitors the reaction using the iodine test every minute.\n\n(a) Describe the colour change the scientist would observe in the iodine test over time. [2]\n(b) Predict what would happen if the temperature were raised to 80 °C before starting the experiment. Explain your answer. [3]",
            marks: 5,
            modelAnswer: "(a) At the start, the iodine gives a blue-black colour because starch is present. Over time, the colour becomes progressively lighter (the blue-black fades) as amylase hydrolyses the starch into maltose. Eventually the iodine stays orange-brown (no colour change), indicating that all the starch has been broken down and none remains.\n(b) If the temperature were raised to 80 °C, amylase would be denatured. At this temperature, the heat energy disrupts the hydrogen bonds and other interactions that maintain the 3-D shape of the enzyme, including the active site. The active site shape would change so it is no longer complementary to starch (its substrate). The enzyme would no longer catalyse starch hydrolysis. Therefore, the iodine test would remain blue-black throughout, indicating starch is still present and is not being broken down.",
            markScheme: [
              "(a) Initially blue-black (starch present).",
              "(a) Colour fades over time; eventually stays orange-brown (all starch hydrolysed).",
              "(b) Amylase is denatured at 80 °C.",
              "(b) Heat breaks hydrogen bonds / disrupts 3-D shape / active site shape changes.",
              "(b) Active site no longer complementary to starch → no catalysis → starch remains → iodine stays blue-black throughout.",
            ],
            commonError: "For (b), students often say 'the amylase dies' — enzymes are not alive and do not die; they are denatured. Also, denaturation is irreversible at high temperatures, so the enzyme cannot recover even if cooled.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "core",
            hints: [
              "For (a): trace what happens to starch concentration over the experiment — how does this affect iodine colour?",
              "For (b): what temperature is the optimum for amylase? What happens above this?",
              "For (b): denaturation affects the active site shape — link this to enzyme function.",
            ],
          },
          {
            id: "bio-molecules-bq1-10",
            question: "A student claims: 'Carbohydrates and fats both store energy; therefore, they must have very similar structures.' Evaluate this claim using your knowledge of molecular structure. [4]",
            marks: 4,
            modelAnswer: "The claim is incorrect. Although both carbohydrates and fats store chemical energy and both contain only C, H, and O, their structures are substantially different. Carbohydrates (e.g. starch, glycogen) are polymers of glucose monomers joined by glycosidic bonds; their formula is (CH₂O)ₙ with a H:O ratio of 2:1. Fats (triglycerides) are not polymers — they consist of one glycerol molecule joined to three fatty acid molecules by ester bonds. Fatty acid chains are long hydrocarbon chains (–CH₂–) with a H:O ratio far greater than 2:1 and very little oxygen. This structural difference explains why fats release approximately twice as much energy per gram as carbohydrates (~37 kJ g⁻¹ vs ~17 kJ g⁻¹): fats have far more C–H bonds to be oxidised in respiration. Therefore, while both store energy, they do so via very different structures and at very different energy densities.",
            markScheme: [
              "Both contain C, H, O — this part of the claim is correct.",
              "Structures differ significantly: carbohydrates are polymers of glucose (glycosidic bonds); fats are triglycerides (glycerol + 3 fatty acids; ester bonds).",
              "H:O ratio differs: carbohydrates 2:1; fats >> 2:1 (hydrocarbon chains).",
              "Fats release more energy per gram due to more C–H bonds available for oxidation (~37 vs ~17 kJ g⁻¹).",
            ],
            commonError: "Students often agree with the claim because both 'contain C, H, O' without critically addressing the fundamental structural differences (polymer vs. not-polymer; glycosidic vs. ester bonds; H:O ratio).",
            guideRef: "Elements in Biological Molecules",
            difficulty: "challenge",
            hints: [
              "Are carbohydrates and fats both polymers? If not, which one is not?",
              "Compare the H:O ratio of a carbohydrate (CH₂O)ₙ with a fatty acid chain (–CH₂–).",
              "Why do fats store more energy per gram? Link to C–H bond number.",
              "Evaluate = identify what is correct AND what is incorrect in the claim.",
            ],
            strategy: "Evaluate = agree where correct + refute where wrong + give evidence (structural details + energy values).",
          },
        ],
      },
      {
        id: "bio-molecules-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "10 structured questions on polysaccharide structure-function, triglyceride synthesis, and experimental design.",
        questions: [
          {
            id: "bio-molecules-bq2-01",
            question: "Starch, glycogen, and cellulose are all polymers of glucose, yet they have very different functions. Explain how differences in their molecular structure account for these different functions. [6]",
            marks: 6,
            modelAnswer: "Starch is formed from alpha glycosidic bonds (alpha-1,4 and alpha-1,6 in amylopectin). The alpha bonds cause the chain to coil into a helix (amylose) or branch (amylopectin), making starch compact and insoluble in water. This makes it ideal as an energy store in plants — it does not lower the water potential of cells and occupies little volume. Glycogen also has alpha glycosidic bonds but is more branched than starch. The greater branching means many free ends are available for simultaneous enzyme action, allowing rapid glucose release when energy demand is high (e.g. during exercise in animals). Cellulose has beta-1,4 glycosidic bonds, which cause every other glucose to be flipped 180°. This produces long, straight, unbranched chains. Neighbouring chains form hydrogen bonds between their –OH groups, creating microfibrils of very high tensile strength. This structure makes cellulose ideal for the plant cell wall, providing structural rigidity without being digestible by the plant itself.",
            markScheme: [
              "Starch: alpha glycosidic bonds → helical / branched structure → compact and insoluble → energy storage in plants.",
              "Glycogen: also alpha bonds but more highly branched than starch → more free ends → faster glucose release → suited to animal energy storage (rapid mobilisation).",
              "Cellulose: beta-1,4 glycosidic bonds → every other glucose flipped 180° → straight chains.",
              "Straight cellulose chains pack in parallel → hydrogen bonds between chains → microfibrils → high tensile strength.",
              "Cellulose function: structural support in plant cell wall.",
              "Award up to 6 marks for fully explained structure-function links for all three polysaccharides.",
            ],
            commonError: "Students often say starch is 'coiled' without explaining why (alpha bonds). For cellulose, many say 'it is straight' without mentioning beta bonds or the hydrogen bonding between chains that gives it strength.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "core",
            hints: [
              "For each polysaccharide: state the bond type, the resulting chain shape, and the function that shape enables.",
              "Alpha bonds → coiled or branched (compact, insoluble = storage). Beta bonds → straight (strong = structural).",
              "Why is more branching useful for glycogen? Think about rate of glucose release.",
              "Why do straight cellulose chains have high tensile strength? Think about hydrogen bonding between chains.",
            ],
            strategy: "Bond type → chain shape → physical property → biological function (four-step chain for each of the three polysaccharides).",
          },
          {
            id: "bio-molecules-bq2-02",
            question: "Describe how a triglyceride molecule is formed, naming the components, the type of reaction, the bonds formed, and the by-products. [4]",
            marks: 4,
            modelAnswer: "A triglyceride is formed from one glycerol molecule and three fatty acid molecules. The reaction is condensation (dehydration synthesis). Each fatty acid reacts with one of the three –OH (hydroxyl) groups on the glycerol molecule. The carboxyl group (–COOH) of the fatty acid reacts with the –OH of glycerol, forming an ester bond and releasing one molecule of water. Since three fatty acids join to the glycerol, three ester bonds are formed in total and three molecules of water are released.",
            markScheme: [
              "Components: glycerol + three fatty acids.",
              "Type of reaction: condensation (dehydration synthesis).",
              "Bond formed: ester bond (one per fatty acid; three in total).",
              "By-product: three water molecules released (one per ester bond).",
            ],
            commonError: "Students frequently say 'peptide bond' instead of 'ester bond', or state 'two water molecules' instead of three. Also, some say 'one fatty acid joins glycerol' — there are three.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "warmup",
            hints: [
              "How many fatty acids join to one glycerol?",
              "What type of bond joins fatty acids to glycerol?",
              "What is released in a condensation reaction?",
            ],
          },
          {
            id: "bio-molecules-bq2-03",
            question: "A student tests three unknown solutions (A, B, C) with four food tests. The results are shown below:\n\nSolution A: Iodine = blue-black; Benedict's = blue; Biuret = blue; Ethanol = clear\nSolution B: Iodine = orange-brown; Benedict's = brick-red; Biuret = blue; Ethanol = clear\nSolution C: Iodine = orange-brown; Benedict's = blue; Biuret = purple; Ethanol = cloudy\n\n(a) Identify the most likely contents of solutions A, B, and C. Justify your answer. [4]\n(b) Solution B gave a negative Benedict's test before the experiment was repeated with a positive control. The positive control also gave a negative result. What conclusion should the student draw, and what should she do next? [2]",
            marks: 6,
            modelAnswer: "(a) Solution A: starch only — blue-black with iodine (starch present); no reducing sugar, protein, or fat detected. Solution B: reducing sugar (e.g. glucose or maltose) only — brick-red with Benedict's; negative for starch, protein, and fat. Solution C: protein and fat — purple with Biuret (protein present); cloudy white emulsion with ethanol test (fat present); no starch or reducing sugar detected.\n(b) If the positive control (known glucose or reducing sugar solution) also gave a negative Benedict's result, the reagent is faulty (e.g. the Benedict's solution may be degraded or contaminated). The student should replace the Benedict's reagent and repeat both the positive control and the test with solution B from scratch.",
            markScheme: [
              "(a) Solution A: starch (iodine blue-black; all others negative).",
              "(a) Solution B: reducing sugar (Benedict's brick-red; all others negative).",
              "(a) Solution C: protein AND fat (Biuret purple + ethanol cloudy; others negative) — needs both for full marks.",
              "(a) Justifications must reference the specific test results, not just name the molecule.",
              "(b) Conclusion: Benedict's reagent is faulty / not working correctly.",
              "(b) Action: replace reagent / obtain fresh Benedict's solution; repeat test from the start.",
            ],
            commonError: "For (b), students often say 'the food sample is wrong' — but if the positive control (known substance) also fails, the reagent is at fault, not the sample. Always check the positive control first.",
            guideRef: "Designing and Interpreting Food-Test Experiments",
            difficulty: "core",
            hints: [
              "For (a): match each positive result to the molecule it detects. Multiple positives = multiple molecules.",
              "For (b): the positive control uses a known substance. If even the positive control fails, what does that mean?",
              "When a positive control fails, blame the reagent, not the sample.",
            ],
          },
          {
            id: "bio-molecules-bq2-04",
            question: "Explain why proteins are described as 'structurally versatile' molecules. In your answer refer to the variety of amino acids, the type of bonds in proteins, and at least two different functional roles of proteins in living organisms. [5]",
            marks: 5,
            modelAnswer: "Proteins are structurally versatile because there are 20 different amino acids, each with a different R-group (side chain) with different chemical properties (charged, polar, non-polar, etc.). The sequence of these amino acids in a polypeptide chain is unique for each protein (determined by its gene) and determines how the chain folds. The chain is held in its 3-D shape by multiple types of bond: hydrogen bonds between backbone groups, hydrophobic interactions between non-polar R-groups, ionic bonds between charged R-groups, and disulfide bridges (covalent S–S bonds) between cysteine residues. This gives each protein a highly specific and precise 3-D shape. Because sequence (and therefore shape) can vary almost infinitely, proteins can perform many different roles: enzymes have a specific active-site shape complementary to their substrate, allowing catalysis of specific reactions; structural proteins such as collagen form fibrous triple helices with high tensile strength, providing support in tendons and skin; transport proteins such as haemoglobin have a specific shape to bind and release oxygen.",
            markScheme: [
              "20 different amino acids with different R-groups → huge variety of possible sequences.",
              "Amino acid sequence (primary structure) determines 3-D folding/shape.",
              "Bonds holding 3-D shape: hydrogen bonds, hydrophobic interactions, ionic bonds, disulfide bridges (any two or more).",
              "Functional role 1: enzymes — specific active-site shape → substrate specificity / catalysis.",
              "Functional role 2: structural proteins (e.g. collagen, keratin) — fibrous shape → tensile strength / support. OR transport proteins (e.g. haemoglobin) — specific shape to bind O₂.",
            ],
            commonError: "Students often say 'proteins are versatile because they have many atoms' — the key is sequence variation leading to shape variation. Also, many list only one type of bond maintaining 3-D structure (usually hydrogen bonds) when multiple types exist.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "challenge",
            hints: [
              "How many different amino acids are there? Why does variety of amino acids matter?",
              "What determines the 3-D shape of a protein?",
              "Name at least two types of bond that hold the 3-D shape together (not just peptide bonds — those are the backbone).",
              "Give two examples of proteins with very different functions — how does their shape relate to their function?",
            ],
            strategy: "Sequence diversity → shape diversity → functional diversity (three-step chain, illustrated with specific examples).",
          },
          {
            id: "bio-molecules-bq2-05",
            question: "A researcher investigates the breakdown of a protein by the enzyme protease at different pH values. She measures the absorbance of the solution (which decreases as protein is broken down) at pH 4, pH 7, and pH 10. At pH 7, absorbance falls rapidly; at pH 4 and pH 10, absorbance barely changes.\n\n(a) Explain why the absorbance falls at pH 7 but not at pH 4 or pH 10. [3]\n(b) Name the products formed when the protease fully digests the protein at pH 7. [1]\n(c) State the type of reaction catalysed by the protease. [1]",
            marks: 5,
            modelAnswer: "(a) Protease has an optimum pH of 7. At this pH, the R-groups of amino acids in the active site are ionised in a way that gives the active site a shape that is complementary to the protein substrate. Enzyme–substrate complexes form readily, and the peptide bonds of the protein are hydrolysed quickly. At pH 4 or pH 10, the altered concentration of H⁺ ions changes the ionisation of R-groups in the active site, distorting its shape so it is no longer complementary to the substrate. The enzyme–substrate complex cannot form (or forms very slowly), so the protein is not digested and absorbance does not decrease significantly.\n(b) Amino acids (free amino acids).\n(c) Hydrolysis (of peptide bonds).",
            markScheme: [
              "(a) pH 7 = optimum pH for protease; active site shape complementary to protein substrate → enzyme–substrate complexes form.",
              "(a) At pH 4 and pH 10: ionisation of R-groups in active site changes → active site shape altered → not complementary to substrate.",
              "(a) Therefore enzyme-substrate complexes do not form / enzyme activity minimal / protein not digested.",
              "(b) Amino acids.",
              "(c) Hydrolysis.",
            ],
            commonError: "Students often say the enzyme is 'denatured' at pH 4 and 10 — but the question implies activity returns at pH 7 (optimum), suggesting the shape change is reversible. Denaturation usually implies irreversible loss of structure. Use 'active site shape changed' rather than 'denatured'.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "core",
            hints: [
              "Why does an enzyme have an optimum pH? What determines the 3-D shape of the active site?",
              "pH affects ionisation of R-groups — how does this affect active site shape?",
              "What are the monomers of a protein? What is produced when all peptide bonds are broken?",
              "What type of reaction breaks peptide bonds?",
            ],
          },
          {
            id: "bio-molecules-bq2-06",
            question: "A student dissolves a sample of cheese in ethanol and then pours the ethanol solution into cold water. A cloudy white emulsion forms. She also tests a piece of bread from the same meal.\n\n(a) What does the cloudy white emulsion indicate? [1]\n(b) Explain the chemistry of why the emulsion forms. [2]\n(c) The student wants to test whether the bread contains starch AND reducing sugar. Describe how she should do this, including the reagents, procedure, and expected positive results. [3]",
            marks: 6,
            modelAnswer: "(a) The cloudy white emulsion indicates that fat (lipid) is present in the cheese.\n(b) Fat is non-polar and dissolves in ethanol (also relatively non-polar). When the ethanol solution is poured into cold water (a polar solvent), the fat is insoluble in water. It re-precipitates as tiny droplets suspended in the water, scattering light and producing the cloudy white appearance (an emulsion).\n(c) For starch: add a few drops of iodine solution to a solution of the bread sample. A positive result (starch present) is a blue-black colour; negative is orange-brown. For reducing sugar: add Benedict's solution to a fresh portion of the bread solution and heat in a water bath at approximately 80 °C for 2–5 minutes. A positive result (reducing sugar present) is a brick-red precipitate; negative is the solution remains blue.",
            markScheme: [
              "(a) Fat / lipid is present.",
              "(b) Fat dissolves in ethanol (non-polar dissolves in non-polar).",
              "(b) Fat is insoluble in water — precipitates as tiny droplets (emulsion) when ethanol layer added to water.",
              "(c) Starch: iodine solution → blue-black positive.",
              "(c) Reducing sugar: Benedict's solution + heat (water bath ~80 °C) → brick-red positive.",
              "(c) Both tests described with specific reagents and positive results.",
            ],
            commonError: "For (b), students often just say 'fat does not dissolve in water' without explaining the first step (fat dissolves in ethanol first, then precipitates when ethanol is diluted into water). Both steps are needed.",
            guideRef: "Food Tests",
            difficulty: "core",
            hints: [
              "For (b): what solvent does fat dissolve in? What happens when that solvent is diluted into water?",
              "For (c): identify which reagent detects starch and which detects reducing sugar — they are different tests.",
              "For (c): state the colour change for each positive result.",
            ],
          },
          {
            id: "bio-molecules-bq2-07",
            question: "Water is often described as the 'universal biological solvent.' Explain what makes water a good solvent, and describe two biological processes that depend on water's ability to dissolve substances. [4]",
            marks: 4,
            modelAnswer: "Water is a good solvent because it is a polar molecule: the oxygen atom strongly attracts electrons, making the O end slightly negative (δ–) and the H ends slightly positive (δ+). Polar and ionic substances (such as glucose, mineral ions, amino acids, and oxygen) are attracted to water molecules and become surrounded by them (solvation), allowing them to dissolve. Non-polar substances (such as fats) do not dissolve in water. Two biological processes that depend on this: (1) Transport in blood — nutrients such as glucose, amino acids, and mineral ions dissolve in the plasma (the watery component of blood) and are transported around the body. (2) Metabolic reactions — most enzyme-catalysed reactions in cells occur in the cytoplasm, which is an aqueous solution. Reactants must be dissolved so they can collide with enzymes and react.",
            markScheme: [
              "Water is polar: O is δ–, H is δ+ → forms hydrogen bonds / attracts ionic and polar substances.",
              "Polar/ionic substances dissolve; non-polar substances do not.",
              "Process 1: transport in blood — dissolved glucose, amino acids, mineral ions carried in plasma.",
              "Process 2: metabolic reactions occur in aqueous solution — reactants dissolved in cytoplasm.",
              "(Accept other valid processes: urine formation; mineral ion uptake in roots; digestion in gut.)",
            ],
            commonError: "Students often say 'water dissolves everything' — this is incorrect; non-polar substances such as fats do not dissolve in water. Also, descriptions of the polarity of water often omit which end is δ– and which is δ+.",
            guideRef: "The Importance of Water",
            difficulty: "core",
            hints: [
              "What does 'polar' mean for a molecule? Which end of water is negative?",
              "Why do ionic substances (like NaCl) dissolve in water?",
              "Name two specific biological fluids or compartments that are aqueous and support dissolved substances.",
            ],
          },
          {
            id: "bio-molecules-bq2-08",
            question: "A student designs an experiment to compare the protein content of cow's milk, soya milk, and almond milk using the Biuret test.\n\n(a) State the independent variable, dependent variable, and two controlled variables in this experiment. [4]\n(b) The student's results show that cow's milk gives a darker purple than soya milk, which gives a lighter purple; almond milk gives a very faint purple. What can the student conclude about the relative protein content of the three milks? [2]",
            marks: 6,
            modelAnswer: "(a) Independent variable: the type of milk (cow's milk, soya milk, or almond milk). Dependent variable: the colour/intensity of purple produced in the Biuret test (depth/shade of purple colour). Controlled variables (any two of): volume of each milk sample used; volume of Biuret reagent added; concentration of Biuret reagent; temperature; time allowed for the reaction before observing.\n(b) Cow's milk has the highest protein content — it produces the darkest purple with Biuret reagent, indicating the most peptide bonds present. Soya milk has an intermediate protein content (lighter purple). Almond milk has the lowest protein content (very faint purple). The darker the purple, the more protein present.",
            markScheme: [
              "(a) IV: type of milk used.",
              "(a) DV: intensity/depth of purple colour in Biuret test.",
              "(a) CV: any two of — volume of milk; volume of Biuret reagent; concentration of Biuret reagent; temperature; time.",
              "(b) Cow's milk has the highest protein content (darkest purple).",
              "(b) Soya milk has intermediate protein; almond milk lowest (faintest purple).",
              "(b) Darker purple = more protein (more peptide bonds reacting with Cu²⁺ in alkaline conditions).",
            ],
            commonError: "For (a), students often list the type of milk as both IV and DV, or confuse the DV (colour intensity) with the outcome ('which milk is best'). For (b), students sometimes say 'almond milk contains no protein' — the question states 'very faint purple', which still indicates some protein.",
            guideRef: "Designing and Interpreting Food-Test Experiments",
            difficulty: "core",
            hints: [
              "IV = what you change; DV = what you measure; CV = what you keep the same.",
              "What specific observation is being recorded in the Biuret test?",
              "For (b): does a fainter purple mean less protein or no protein?",
            ],
          },
          {
            id: "bio-molecules-bq2-09",
            question: "[CHALLENGE] A scientist discovers a new polysaccharide, molecule Z, in a plant. She finds that:\n— Molecule Z gives a negative result with iodine solution.\n— Amylase does not digest molecule Z.\n— Cellulase (the enzyme that digests cellulose) does digest molecule Z.\n— Molecule Z provides structural support in the plant.\n\nUsing this information, deduce the type of glycosidic bond in molecule Z and explain the reasoning behind each of your deductions. [5]",
            marks: 5,
            modelAnswer: "Deduction 1 — Molecule Z is not starch or glycogen: the negative iodine result shows no starch-like helical coils are present. Iodine only produces blue-black with starch because the I₃⁻ ions slot into the helical structure created by alpha glycosidic bonds. A negative result means molecule Z does not have this helical structure.\n\nDeduction 2 — Molecule Z has beta glycosidic bonds: amylase cannot digest molecule Z (amylase is specific to alpha glycosidic bonds), but cellulase can (cellulase is specific to beta glycosidic bonds). Since molecule Z is digested by cellulase but not by amylase, its bonds must be beta glycosidic bonds.\n\nDeduction 3 — consistent with structural role: beta glycosidic bonds produce straight chains, which can pack in parallel and form hydrogen bonds between chains, giving high tensile strength — consistent with molecule Z's structural role in the plant, analogous to cellulose.",
            markScheme: [
              "Negative iodine: molecule Z is not starch; no helical structure; alpha bonds not present.",
              "Amylase does not digest → molecule Z does not have alpha glycosidic bonds (amylase is specific to alpha bonds).",
              "Cellulase digests → molecule Z has beta glycosidic bonds (cellulase is specific to beta bonds).",
              "Beta bonds → straight chains → hydrogen bonding between chains → tensile strength → consistent with structural role.",
              "Full logical chain of deduction required for all 5 marks.",
            ],
            commonError: "Students often identify the bond type correctly but fail to give the reasoning from the enzyme specificity evidence. The question says 'deduce and explain reasoning' — the logic chain is required, not just the answer.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "challenge",
            hints: [
              "Iodine only reacts with the helical structure of starch. What bond type creates that helix?",
              "Amylase is specific to alpha glycosidic bonds; cellulase is specific to beta glycosidic bonds. What does each enzyme result tell you?",
              "Combine the two enzyme results to deduce which bond type molecule Z must have.",
              "Link the bond type to the structural evidence — how do beta bonds lead to structural strength?",
            ],
            strategy: "Use enzyme specificity as the key evidence: if amylase cannot digest it but cellulase can, the bond must be the type that cellulase recognises (beta). Build the reasoning from the evidence, not from assumption.",
          },
          {
            id: "bio-molecules-bq2-10",
            question: "[CHALLENGE — synoptic] Lactose is a disaccharide found in milk. It is formed from glucose and galactose by condensation. People with lactose intolerance lack the enzyme lactase in their small intestine.\n\n(a) Describe how lactose is formed from its components. [2]\n(b) Explain what happens to lactose in people who are NOT lactose intolerant (have functioning lactase). [2]\n(c) In lactose-intolerant individuals, undigested lactose passes to the large intestine where bacteria ferment it, producing gas and causing discomfort. Explain why lactose can be used by bacteria as a carbon source even though the human gut cannot digest it. [2]",
            marks: 6,
            modelAnswer: "(a) Lactose is formed by a condensation reaction between one glucose molecule and one galactose molecule. The –OH group of one monosaccharide reacts with the –OH of the other, forming a glycosidic bond and releasing one molecule of water.\n(b) Lactase catalyses the hydrolysis of lactose. The lactase active site is complementary in shape to lactose (its substrate), allowing it to bind lactose and break the glycosidic bond by adding water. This splits lactose into glucose and galactose, which are then absorbed through the intestinal wall into the bloodstream.\n(c) Bacteria possess the enzyme lactase (or a functionally equivalent enzyme) and can therefore hydrolyse the beta glycosidic bond in lactose, releasing glucose and galactose as a carbon/energy source. The human intestinal cells lack lactase — they cannot hydrolyse this bond. Enzyme specificity means only cells producing the correct enzyme can digest a given substrate; the inability to digest lactose is not a property of lactose itself but of the absence of the enzyme in the host.",
            markScheme: [
              "(a) Condensation reaction between glucose and galactose.",
              "(a) Glycosidic bond formed; one water molecule released.",
              "(b) Lactase (enzyme) binds lactose at the active site; catalyses hydrolysis.",
              "(b) Products: glucose + galactose; absorbed into bloodstream.",
              "(c) Bacteria produce lactase / an enzyme that can hydrolyse the glycosidic bond in lactose.",
              "(c) Human intestinal cells lack lactase, so cannot break the bond — enzyme specificity principle.",
            ],
            commonError: "For (c), students often say 'bacteria eat the lactose' without explaining the enzymatic basis. The key point is that bacteria have the enzyme (lactase or equivalent) to hydrolyse the glycosidic bond; human gut cells do not. The principle is enzyme specificity.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "challenge",
            hints: [
              "For (a): what type of reaction joins monosaccharides? What bond is formed? What is released?",
              "For (b): describe what lactase does to lactose — which type of reaction? What products?",
              "For (c): why can some organisms digest a molecule that others cannot? Think about enzyme specificity and which enzyme is needed.",
            ],
            strategy: "Enzyme function depends on having the right enzyme for the right substrate — organisms that lack a particular enzyme cannot digest that molecule, regardless of its chemical energy content.",
          },
        ],
      },
      {
        id: "bio-molecules-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "10 structured questions on food-test planning, water properties, macromolecule structure, and synoptic links.",
        questions: [
          {
            id: "bio-molecules-bq3-01",
            question: "A student wants to find out which of three snack foods (crisps, bread, and boiled egg white) contains fat, reducing sugar, and protein. She will use three food tests.\n\n(a) Name the three food tests she should use, stating the reagent and expected positive result for each. [6]\n(b) Explain why she should include a negative control in each test. [2]",
            marks: 8,
            modelAnswer: "(a) Test 1 — Fat: ethanol emulsion test. Dissolve the food in ethanol; pour into cold water. Positive result: cloudy white emulsion. Test 2 — Reducing sugar: Benedict's test. Add Benedict's solution and heat in a water bath at ~80 °C. Positive result: brick-red precipitate. Test 3 — Protein: Biuret test. Add Biuret reagent (NaOH then CuSO₄ solution). Positive result: purple/violet colour.\n(b) A negative control (distilled water tested with each reagent) shows what a negative result looks like and confirms that the reagent does not produce a colour change spontaneously. If the negative control gives a positive result (e.g. the distilled water turns brick-red with Benedict's), the reagent is contaminated or faulty and the experimental results cannot be trusted.",
            markScheme: [
              "(a) Ethanol emulsion test — ethanol then water — cloudy white emulsion positive.",
              "(a) Benedict's test — Benedict's solution + heat — brick-red precipitate positive.",
              "(a) Biuret test — Biuret reagent (NaOH + CuSO₄) — purple/violet positive.",
              "(Award 2 marks per test: 1 for reagent, 1 for positive result. Total 6.)",
              "(b) Negative control (distilled water) shows baseline/expected negative result.",
              "(b) Confirms reagent is not faulty/contaminated; validates positive results in test tubes.",
            ],
            commonError: "Students often omit the heating step for Benedict's test. Also, for the Biuret test, many write 'Benedict's reagent' instead of Biuret reagent — these are completely different tests.",
            guideRef: "Food Tests",
            difficulty: "warmup",
            hints: [
              "Match each molecule class to its specific test — they are not interchangeable.",
              "For Benedict's, what extra step is always needed?",
              "Why does distilled water serve as a negative control rather than another food sample?",
            ],
          },
          {
            id: "bio-molecules-bq3-02",
            question: "A student claims that 'water is just a passive carrier of nutrients — it does not participate in any chemical reactions in living organisms.' Evaluate this claim. [4]",
            marks: 4,
            modelAnswer: "The claim is incorrect. Water is an active participant in two fundamental types of chemical reaction in living organisms, not merely a carrier. First, water is a reactant in hydrolysis reactions: digestion of starch to glucose, proteins to amino acids, and triglycerides to glycerol and fatty acids all require water molecules to break covalent bonds (glycosidic, peptide, and ester bonds respectively). Second, water is a product of condensation reactions: every time monomers join to form polymers (e.g. glucose → starch, amino acids → proteins, fatty acids + glycerol → triglycerides), a water molecule is released. Additionally, water is a reactant in photosynthesis (light-dependent stage: water is split to release oxygen and H⁺ ions), and a product of aerobic respiration. The student is correct that water acts as a transport medium and solvent, but these roles are in addition to its chemical involvement.",
            markScheme: [
              "Claim is incorrect — water participates in chemical reactions.",
              "Water as reactant in hydrolysis: digestion of starch/protein/triglycerides uses water.",
              "Water as product in condensation: polymer synthesis releases water.",
              "Water as reactant in photosynthesis / product of aerobic respiration (accept either).",
              "Acknowledge the partial truth: water is also a solvent/transport medium.",
            ],
            commonError: "Students often only identify one role (hydrolysis) and miss the others, or write vague statements such as 'water is important for reactions' without specifying which reactions.",
            guideRef: "The Importance of Water",
            difficulty: "core",
            hints: [
              "What happens to water in hydrolysis? In condensation?",
              "Name specific reactions where water is consumed or produced.",
              "Evaluate = identify what the claim gets right AND what it gets wrong.",
            ],
          },
          {
            id: "bio-molecules-bq3-03",
            question: "Explain why fats are said to be 'hydrophobic' and describe how this property makes fats useful as (a) a component of cell membranes and (b) a waterproofing material in organisms. [5]",
            marks: 5,
            modelAnswer: "Fats are hydrophobic ('water-fearing') because they consist largely of long hydrocarbon chains (–CH₂– groups) that are non-polar. Water is polar and forms hydrogen bonds with other polar/ionic molecules, but it cannot form hydrogen bonds with non-polar hydrocarbon chains. Therefore fats and water do not interact favourably, and fats do not dissolve in water.\n(a) Cell membranes: phospholipids are the main membrane component. They have a hydrophilic phosphate head and two hydrophobic fatty acid tails. In an aqueous environment (cytoplasm and extracellular fluid), the hydrophobic tails face inward (away from water), while the hydrophilic heads face outward into the aqueous environment. This self-assembly forms the bilayer — a stable, selectively permeable barrier around the cell.\n(b) Waterproofing: fats and waxes (lipids) form waterproof coatings on surfaces such as insect cuticles, leaf surfaces (waxy cuticle), and feathers. Because fats are hydrophobic, water cannot penetrate through a lipid layer, preventing water loss or water uptake by osmosis.",
            markScheme: [
              "Hydrophobic: non-polar hydrocarbon chains → cannot interact with polar water molecules / not attracted to water.",
              "(a) Phospholipid bilayer: hydrophobic tails face inward; hydrophilic heads face water on each side → stable membrane barrier.",
              "(a) Selective permeability of the membrane due to hydrophobic interior.",
              "(b) Lipid layers (wax/fat) on surface (cuticle, feathers) are non-polar → water cannot penetrate → waterproofing.",
              "(b) Named organism or structure (e.g. leaf waxy cuticle, insect cuticle, feathers).",
            ],
            commonError: "Students often say 'fat repels water' without explaining why (non-polar chains cannot interact with polar water). For (a), many describe the bilayer correctly but fail to explain the driving force for its formation (hydrophobic effect — tails avoid water).",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "core",
            hints: [
              "Hydrophobic means 'water-fearing' — why would a non-polar molecule not dissolve in polar water?",
              "For (a): in a phospholipid bilayer, where do the tails go? Where do the heads go?",
              "For (b): what physical property of a lipid layer prevents water from crossing it?",
            ],
          },
          {
            id: "bio-molecules-bq3-04",
            question: "The DCPIP test can be used to estimate the relative vitamin C concentrations of different fruit juices. A student adds 2 cm³ of DCPIP to each of three test tubes and then adds juice drop by drop until the DCPIP is decolourised. Results: Juice P = 4 drops; Juice Q = 10 drops; Juice R = 20 drops.\n\n(a) Rank the juices in order of vitamin C concentration (highest first) and explain your reasoning. [2]\n(b) Calculate the relative vitamin C concentration of juice Q compared with juice P (juice P = 1 unit). Show your working. [2]\n(c) Identify one limitation of this method as a way of measuring absolute vitamin C concentration. [1]",
            marks: 5,
            modelAnswer: "(a) Order (highest to lowest): Juice P > Juice Q > Juice R. Reasoning: fewer drops are needed to decolourise a fixed volume of DCPIP when vitamin C concentration is higher, because each drop delivers more vitamin C. Juice P needed only 4 drops, meaning it has the highest concentration per drop.\n(b) Juice P needed 4 drops; Juice Q needed 10 drops. If Juice P = 1 unit, then Juice Q = 4/10 = 0.4 units (i.e. Juice Q has 0.4 times the vitamin C concentration of Juice P). Working: ratio = drops for P ÷ drops for Q = 4/10 = 0.4.\n(c) Any valid limitation: the method only gives relative concentrations (more or fewer drops), not absolute values in mg/100 cm³ or similar units; the drop size may not be perfectly constant; the test is affected by other reducing agents in the juice that could also decolourise DCPIP (giving a false high vitamin C reading).",
            markScheme: [
              "(a) P > Q > R (highest to lowest).",
              "(a) Fewer drops to decolourise = higher concentration per drop.",
              "(b) Ratio = drops(P) / drops(Q) = 4/10 = 0.4 units; correct working shown.",
              "(c) Any one valid limitation: only gives relative not absolute concentration; drop size variability; other reducing agents may decolourise DCPIP; cannot be used to express concentration in standard units.",
            ],
            commonError: "For (b), students often invert the ratio (10/4 = 2.5) — but the question asks for Q relative to P. More drops needed means lower concentration, so Q/P < 1. Also, students often omit 'show your working' step.",
            guideRef: "Designing and Interpreting Food-Test Experiments",
            difficulty: "core",
            hints: [
              "For (a): does more drops = more or less vitamin C?",
              "For (b): if P = 1 unit and Q needs 10/4 times as many drops, what fraction of P's concentration does Q have?",
              "For (c): think about what this test cannot tell you that a standard lab assay could.",
            ],
            solutions: [
              {
                label: "Calculation",
                steps: [
                  "Juice P decolourises DCPIP in 4 drops → P = 1 unit (given).",
                  "Juice Q decolourises DCPIP in 10 drops.",
                  "Relative concentration of Q = drops needed for P ÷ drops needed for Q = 4 ÷ 10 = 0.4.",
                  "Juice Q has 0.4 times the vitamin C concentration of Juice P.",
                ],
              },
            ],
          },
          {
            id: "bio-molecules-bq3-05",
            question: "Explain how the structure of starch makes it a suitable energy-storage molecule in plant cells. Refer to the type of bond, shape, solubility, and how glucose is released. [5]",
            marks: 5,
            modelAnswer: "Starch is made from glucose monomers joined by alpha-1,4 glycosidic bonds (and alpha-1,6 bonds in amylopectin). The alpha bonds cause the chain to coil into a tight helix (in amylose) or to form a branched structure (in amylopectin). The coiled/branched structure is very compact, so starch can store large amounts of glucose in a small volume. Starch is insoluble in water — this is important because it means starch does not affect the water potential of the cell (it does not cause osmotic movement of water into the cell, which would cause it to swell). When glucose is needed for respiration, the enzyme amylase hydrolyses the alpha glycosidic bonds, cleaving glucose units from the ends of the starch chain. Because the chain can be broken down progressively from many ends (especially in branched amylopectin), glucose can be released steadily as needed.",
            markScheme: [
              "Alpha-1,4 (and alpha-1,6) glycosidic bonds joining glucose monomers.",
              "Alpha bonds → helical coiling / branching → compact molecule → efficient storage.",
              "Starch is insoluble → does not affect water potential of cell / does not cause osmosis.",
              "Amylase hydrolyses alpha glycosidic bonds → releases glucose for respiration.",
              "Branching (amylopectin) allows more free ends for enzyme action → controlled release of glucose.",
            ],
            commonError: "Students often say 'starch is insoluble so it cannot leave the cell' — this is not the primary reason; the key is that insolubility means it has no osmotic effect. Also, many say amylase 'breaks starch apart' without specifying which bond it breaks and what product is released.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "core",
            hints: [
              "What bond type does amylase recognise in starch?",
              "Why does insolubility matter for an energy store in a cell?",
              "How does a compact (coiled/branched) shape relate to storage efficiency?",
            ],
          },
          {
            id: "bio-molecules-bq3-06",
            question: "Amino acids all share a common basic structure: an amino group (–NH₂), a carboxyl group (–COOH), a hydrogen atom, and a variable R-group, all attached to a central carbon.\n\n(a) Which elements are always present in an amino acid? [1]\n(b) Name the bond formed when two amino acids are joined by condensation. [1]\n(c) Explain why there can be a huge variety of proteins in living organisms even though they are all made from the same 20 amino acids. [3]",
            marks: 5,
            modelAnswer: "(a) Carbon (C), hydrogen (H), oxygen (O), and nitrogen (N) are always present in an amino acid. (The –NH₂ group provides N; the –COOH group provides O; the central carbon provides C; H is present throughout.)\n(b) Peptide bond.\n(c) The 20 different amino acids can be arranged in any order and in any length of chain. A protein may contain hundreds of amino acids, so the number of possible sequences is astronomically large (20ⁿ for a chain of n amino acids). Each different sequence folds into a different 3-D shape, because the interactions between R-groups (hydrogen bonds, ionic bonds, hydrophobic interactions) depend on which R-groups are adjacent. Each different 3-D shape gives a different function. Therefore, even with only 20 amino acids as building blocks, an essentially unlimited variety of proteins with different structures and functions can be produced.",
            markScheme: [
              "(a) C, H, O, N (all four required).",
              "(b) Peptide bond.",
              "(c) 20 amino acids can be arranged in any sequence and any length → enormous number of possible sequences.",
              "(c) Different sequence → different R-group interactions → different 3-D folding / shape.",
              "(c) Different 3-D shape → different function.",
            ],
            commonError: "For (c), students often say 'there are millions of combinations' without explaining the mechanistic link: sequence → shape → function. The number of combinations alone does not explain protein diversity; the sequence-shape-function chain of reasoning is needed.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "core",
            hints: [
              "For (c): how many possible sequences exist for a chain of just 3 amino acids? How does this scale with chain length?",
              "What determines the 3-D shape of a protein?",
              "What determines the function of a protein?",
            ],
          },
          {
            id: "bio-molecules-bq3-07",
            question: "A student observes that the cell walls of plant cells are not digested when she adds amylase solution to plant tissue, even though amylase can digest starch. Explain this observation fully. [4]",
            marks: 4,
            modelAnswer: "Starch and cellulose (the main component of plant cell walls) are both polymers of glucose, but they differ in the type of glycosidic bond. Starch contains alpha-1,4 (and alpha-1,6) glycosidic bonds, while cellulose contains beta-1,4 glycosidic bonds. Amylase is specific to alpha glycosidic bonds — its active site is shaped to be complementary to the geometry of the alpha bond in starch. When amylase meets cellulose, the beta bond creates a different geometry: the active site of amylase is not complementary to the beta bond, so it cannot bind and catalyse hydrolysis. Therefore cellulose is not digested by amylase. To digest cellulose, the enzyme cellulase (with an active site complementary to beta-1,4 glycosidic bonds) would be needed — humans and most animals do not produce cellulase.",
            markScheme: [
              "Both starch and cellulose are glucose polymers.",
              "Key difference: starch has alpha-1,4 glycosidic bonds; cellulose has beta-1,4 glycosidic bonds.",
              "Amylase active site is complementary to alpha glycosidic bonds (not beta).",
              "Amylase cannot bind to/catalyse hydrolysis of cellulose — enzyme specificity.",
            ],
            commonError: "Students say 'amylase does not work on cellulose because they are different molecules' — both are glucose polymers; the difference is the bond type. The answer must mention alpha vs. beta bonds and enzyme specificity explicitly.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "core",
            hints: [
              "What is the monomer of both starch and cellulose?",
              "What is the structural difference between starch and cellulose?",
              "Enzyme specificity: what determines which substrate an enzyme can act on?",
              "What would be the correct enzyme to digest cellulose?",
            ],
          },
          {
            id: "bio-molecules-bq3-08",
            question: "A student heats a solution of egg white protein (albumin) in a water bath at 80 °C for 5 minutes. She observes the solution turns cloudy and white, forming a solid clump (coagulation).\n\n(a) Explain what has happened to the albumin at the molecular level. [3]\n(b) After cooling back to 37 °C, the albumin does not return to its original clear solution. What does this suggest about the type of denaturation? [1]\n(c) The student tests the cooled denatured albumin with Biuret reagent. Predict the result and explain your answer. [2]",
            marks: 6,
            modelAnswer: "(a) At 80 °C, the heat energy disrupts the bonds (hydrogen bonds, hydrophobic interactions, ionic bonds, and disulfide bridges) that maintain the 3-D folded structure (tertiary structure) of albumin. The polypeptide chain unfolds. The exposed hydrophobic regions of different unfolded chains then interact with each other (hydrophobic interactions), causing the chains to aggregate and clump together — this produces the white, cloudy, insoluble solid. The primary structure (peptide bonds, amino acid sequence) is not broken.\n(b) The denaturation is irreversible — the protein does not refold when cooled. This indicates that the 3-D structure has been permanently lost, likely because the exposed hydrophobic regions have formed new interactions between multiple chains, preventing refolding.\n(c) The result would be purple/violet (positive Biuret test). Even though the albumin is denatured, the peptide bonds — which is what the Biuret test detects — are still intact. Denaturation breaks the non-covalent bonds maintaining 3-D shape but does not hydrolyse peptide bonds. There is still protein (still has peptide bonds) in the denatured clump.",
            markScheme: [
              "(a) Heat disrupts non-covalent bonds (hydrogen bonds, hydrophobic interactions) maintaining 3-D / tertiary structure.",
              "(a) Polypeptide chain unfolds / denatures.",
              "(a) Exposed hydrophobic regions of different chains aggregate → clumps / insoluble (coagulation).",
              "(b) Irreversible denaturation — chains cannot refold due to new hydrophobic interactions between chains.",
              "(c) Purple/violet positive Biuret result.",
              "(c) Peptide bonds still intact — Biuret detects peptide bonds, not protein 3-D structure — denaturation does not break peptide bonds.",
            ],
            commonError: "For (c), students often predict a negative Biuret result because 'the protein is denatured'. This is wrong — denaturation disrupts 3-D shape but leaves peptide bonds intact. Biuret detects peptide bonds, so denatured protein still gives a positive result.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "challenge",
            hints: [
              "For (a): denaturation = loss of 3-D shape. Which bonds maintain 3-D shape? Are peptide bonds (primary structure) broken?",
              "For (b): if protein doesn't refold when cooled, what does this say about the denaturation?",
              "For (c): the Biuret test detects peptide bonds. Does denaturation break peptide bonds?",
            ],
            strategy: "Distinguish primary structure (peptide bonds — very stable) from 3-D structure (non-covalent bonds — disrupted by heat). Biuret detects peptide bonds, so denatured protein still tests positive.",
          },
          {
            id: "bio-molecules-bq3-09",
            question: "Insulin is a protein hormone made of 51 amino acids arranged in two polypeptide chains held together by disulfide bridges.\n\n(a) Name the bond that joins adjacent amino acids within each polypeptide chain. [1]\n(b) What type of bond is a disulfide bridge, and which amino acid contains the sulfur atoms that form this bond? [2]\n(c) Explain why heating insulin to 100 °C would prevent it from working as a hormone. [3]",
            marks: 6,
            modelAnswer: "(a) Peptide bond.\n(b) A disulfide bridge is a covalent bond (S–S bond) formed between the sulfur-containing R-groups of two cysteine residues. Cysteine is the amino acid involved.\n(c) Heating insulin to 100 °C would denature it. The heat energy disrupts the hydrogen bonds, hydrophobic interactions, and ionic bonds that maintain the 3-D shape of insulin. The disulfide bridges (covalent bonds) may also be broken under extreme conditions. As a result, the 3-D shape of insulin changes — it unfolds and loses its specific structure. Insulin works as a hormone by binding to specific receptor proteins on target cell membranes; this binding depends on the precise 3-D shape of insulin being complementary to the shape of the receptor. With the 3-D shape lost, insulin can no longer bind to its receptor and cannot trigger the cellular response. Therefore, denatured insulin would not function as a hormone.",
            markScheme: [
              "(a) Peptide bond.",
              "(b) Disulfide bridge = covalent (S–S) bond; formed from cysteine residues.",
              "(c) Heat denatures insulin — disrupts non-covalent bonds maintaining 3-D shape.",
              "(c) 3-D shape of insulin changes / it unfolds.",
              "(c) Cannot bind to (insulin) receptor on target cell — shape no longer complementary.",
              "(c) Therefore cannot trigger hormonal response / does not function as a hormone.",
            ],
            commonError: "For (c), students often say 'insulin is destroyed' or 'broken down' — denaturation is not the same as chemical decomposition. The amino acid sequence (primary structure) remains but the functional shape is lost. Also, students must explain WHY the changed shape prevents function (cannot bind receptor).",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "challenge",
            hints: [
              "For (b): which amino acid contains sulfur in its R-group?",
              "For (c): what does denaturation do to a protein's shape?",
              "For (c): how does a hormone work? It must bind to a receptor — what determines if binding can occur?",
              "Link: denaturation → shape change → cannot bind receptor → no hormonal effect.",
            ],
          },
          {
            id: "bio-molecules-bq3-10",
            question: "[CHALLENGE — synoptic] A marathon runner stores energy as both glycogen (in muscles and liver) and fat (in adipose tissue). During the race, glycogen is used first; after glycogen stores are depleted, fat is mobilised.\n\n(a) Compare the energy content per gram of glycogen and fat, and explain the structural reason for the difference. [3]\n(b) Explain why glycogen is used first during intense exercise, rather than fat. Refer to the molecular structure of glycogen. [2]\n(c) Triglycerides from adipose tissue must be hydrolysed before they can be used in respiration. Name the products of this hydrolysis and name the type of bond broken. [2]",
            marks: 7,
            modelAnswer: "(a) Fat releases approximately 37 kJ per gram, whereas glycogen (a carbohydrate) releases approximately 17 kJ per gram — fat yields about twice as much energy per gram. The structural reason is that fat molecules contain long hydrocarbon chains (–CH₂–) with a very high H:O ratio (far greater than 2:1). Carbohydrates have a H:O ratio of 2:1 (formula (CH₂O)ₙ) — they are effectively more oxidised. Since aerobic respiration oxidises C–H bonds to release energy, fat with its many C–H bonds per gram releases more energy per gram than carbohydrate.\n(b) Glycogen is used first because it can release glucose more rapidly than fat can be mobilised. Glycogen is a highly branched polymer of glucose — many free ends allow the enzyme glycogen phosphorylase to cleave glucose units simultaneously from multiple ends. Fat mobilisation requires lipolysis (hydrolysis of ester bonds) and further transport and processing before fatty acids enter respiration pathways — this is slower. During intense exercise, rapid energy release is required, favouring the faster glycogen pathway.\n(c) Products: glycerol and three fatty acids (or: glycerol + fatty acids). Bond broken: ester bond (between glycerol and each fatty acid).",
            markScheme: [
              "(a) Fat ~37 kJ g⁻¹; glycogen (carbohydrate) ~17 kJ g⁻¹.",
              "(a) Fat has higher H:O ratio / more C–H bonds per gram / hydrocarbon chains → more energy released per gram on oxidation.",
              "(a) Carbohydrate formula (CH₂O)ₙ — H:O ratio 2:1 — relatively oxidised — less energy per gram.",
              "(b) Glycogen is highly branched → many free ends → rapid glucose release by enzyme action.",
              "(b) Fat mobilisation is slower — requires hydrolysis of ester bonds and further metabolic processing.",
              "(c) Products: glycerol + fatty acids (three fatty acid molecules).",
              "(c) Bond broken: ester bond.",
            ],
            commonError: "For (b), students often say 'glycogen is used first because it contains more energy' — this is wrong; fat has more energy per gram. The correct reason is speed of mobilisation (branching = rapid enzyme access). For (c), 'peptide bond' is a common error — peptide bonds are in proteins; ester bonds are in triglycerides.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "challenge",
            hints: [
              "For (a): compare H:O ratios of carbohydrate and fat. Which has more C–H bonds per gram?",
              "For (b): the question says glycogen is used first during INTENSE exercise — why is speed important? How does branching relate to speed of glucose release?",
              "For (c): what bonds hold a triglyceride together? What are the components of a triglyceride?",
            ],
            strategy: "For energy comparisons: H:O ratio → C–H bond density → energy per gram. For glycogen use: branching → rapid glucose release → preferred during high-intensity exercise.",
            solutions: [
              {
                label: "Energy density argument",
                steps: [
                  "Carbohydrate empirical formula: (CH₂O)ₙ. H:O ratio = 2:1.",
                  "Fatty acid chains: mainly –CH₂– units. H:O ratio >> 2:1 (very little oxygen).",
                  "Aerobic respiration oxidises C–H bonds: more C–H bonds per gram → more ATP → more energy released.",
                  "Fat: ~37 kJ g⁻¹; carbohydrate (glycogen): ~17 kJ g⁻¹.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "bio-molecules-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "10 structured challenge and synoptic questions linking all sub-topics to exam-style multi-part problems.",
        questions: [
          {
            id: "bio-molecules-bq4-01",
            question: "A student tests four food samples (W, X, Y, Z) with all five food tests. The results are:\n\nW: iodine blue-black; Benedict's blue; Biuret purple; ethanol clear; DCPIP not decolourised\nX: iodine orange-brown; Benedict's brick-red; Biuret blue; ethanol cloudy; DCPIP decolourised\nY: iodine orange-brown; Benedict's blue; Biuret blue; ethanol cloudy; DCPIP not decolourised\nZ: iodine orange-brown; Benedict's blue; Biuret blue; ethanol clear; DCPIP decolourised\n\n(a) Which sample contains the greatest variety of biological molecules? Justify your answer. [2]\n(b) Which sample contains fat but no protein and no starch? [1]\n(c) Sample W gave a negative Benedict's result. Describe how the student could determine whether sample W contains sucrose. [3]",
            marks: 6,
            modelAnswer: "(a) Sample X contains the greatest variety — it gives positive results for reducing sugar (Benedict's brick-red), fat (ethanol cloudy), and vitamin C (DCPIP decolourised): three different classes detected.\n(b) Sample Y — cloudy ethanol (fat present); Biuret blue (no protein); iodine orange-brown (no starch).\n(c) Take a fresh portion of sample W. Add dilute hydrochloric acid and boil for 2–3 minutes to hydrolyse any sucrose present into glucose and fructose. Cool the mixture. Neutralise by adding sodium hydrogencarbonate (NaHCO₃) solution until fizzing stops. Then add Benedict's solution and heat in a water bath at ~80 °C. If a brick-red precipitate forms, sucrose was present in sample W. If the result remains blue, no sucrose is present.",
            markScheme: [
              "(a) Sample X — three positives: reducing sugar (Benedict's), fat (ethanol), vitamin C (DCPIP).",
              "(a) Justification references specific positive test results.",
              "(b) Sample Y.",
              "(c) Add dilute HCl and boil to hydrolyse sucrose.",
              "(c) Cool; neutralise with NaHCO₃.",
              "(c) Add Benedict's + heat; brick-red = sucrose present.",
            ],
            commonError: "For (a), students often choose sample W (starch + protein, two positives) instead of X (three positives). Counting all five tests carefully is essential. For (c), the neutralisation step is the most commonly omitted step.",
            guideRef: "Food Tests",
            difficulty: "core",
            hints: [
              "For (a): count the number of positive results for each sample — which has the most?",
              "For (b): which tests indicate fat, protein, and starch? Which sample has fat positive but protein and starch negative?",
              "For (c): why can't Benedict's detect sucrose directly? What must be done first?",
            ],
          },
          {
            id: "bio-molecules-bq4-02",
            question: "The cohesion of water molecules allows water to rise to great heights in tall trees via the transpiration stream.\n\n(a) Explain what is meant by cohesion in water. [2]\n(b) Describe the chain of events that pulls water up through xylem from roots to leaves. [3]",
            marks: 5,
            modelAnswer: "(a) Cohesion is the attraction between water molecules, caused by hydrogen bonding. Each water molecule can form hydrogen bonds with up to four neighbouring water molecules (via its two –OH groups and lone pairs on oxygen). These hydrogen bonds between adjacent water molecules pull them together, allowing water to form continuous columns without breaking when tension is applied.\n(b) Water evaporates from leaf cells into air spaces and then out through stomata (transpiration). This evaporation removes water molecules from the top of the water columns in leaf xylem vessels. The cohesion of water molecules means that as water evaporates, it pulls the water column upward — the strong hydrogen bonds allow tension to be transmitted down the whole column. This creates a continuous pull (transpiration pull / tension) that draws water up from the roots through the stem xylem. Water enters the root hairs from soil water by osmosis (down a water-potential gradient) to replace what is lost at the leaves.",
            markScheme: [
              "(a) Cohesion: attraction between water molecules due to hydrogen bonding.",
              "(a) Allows continuous water column to remain intact under tension.",
              "(b) Evaporation of water from leaves (transpiration) through stomata.",
              "(b) Cohesion pulls water column upward as surface water evaporates — tension transmitted.",
              "(b) Water drawn up xylem from roots; enters root hair cells from soil by osmosis.",
            ],
            commonError: "Students often describe adhesion (water sticking to xylem walls) instead of cohesion (water molecules sticking to each other). Also, many say water is 'pushed' up from the roots — it is pulled (by transpiration pull) from the top.",
            guideRef: "The Importance of Water",
            difficulty: "core",
            hints: [
              "Cohesion = water-water attraction (hydrogen bonds). Adhesion = water-wall attraction.",
              "What drives water loss from the leaf?",
              "How do hydrogen bonds between water molecules create a tension that pulls the column upward?",
            ],
          },
          {
            id: "bio-molecules-bq4-03",
            question: "Explain why a molecule with the formula C₅₇H₁₁₀O₆ is most likely a fat rather than a carbohydrate, and why it would release more energy per gram than a carbohydrate of similar mass. [4]",
            marks: 4,
            modelAnswer: "The H:O ratio in this molecule is 110:6 ≈ 18.3:1, which is far greater than 2:1. Carbohydrates always have a H:O ratio of exactly 2:1 (formula (CH₂O)ₙ). A H:O ratio of 18:1 is consistent with a fat/triglyceride, which consists of glycerol plus long fatty acid hydrocarbon chains that are almost entirely C–H bonds with very little oxygen. This formula is approximately consistent with a triglyceride (e.g. tripalmitin, C₅₁H₉₈O₆, has a similar structure; the formula given is close to a medium-chain triglyceride). The high H:O ratio means the molecule has many more C–H bonds per gram than a carbohydrate. In aerobic respiration, C–H bonds are oxidised to CO₂ and H₂O, releasing energy. More C–H bonds per gram → more ATP produced → more energy released per gram (~37 kJ g⁻¹ for fat vs ~17 kJ g⁻¹ for carbohydrate).",
            markScheme: [
              "H:O ratio of molecule = 110:6 ≈ 18:1 — far greater than 2:1 of carbohydrates.",
              "Carbohydrates have H:O ratio of exactly 2:1 (CH₂O)ₙ — this molecule does not fit.",
              "H:O ratio >> 2:1 is consistent with a fat (hydrocarbon chains contain very little oxygen).",
              "More C–H bonds per gram in fat → more bonds oxidised in respiration → more energy per gram.",
            ],
            commonError: "Students often just say 'fats have more energy' without providing the numerical comparison of H:O ratios. The examiner is looking for the specific ratio calculation and the reasoning from C–H bond oxidation.",
            guideRef: "Elements in Biological Molecules",
            difficulty: "challenge",
            hints: [
              "Calculate the H:O ratio from the formula: 110 H ÷ 6 O = ?",
              "Carbohydrate H:O ratio = 2:1. Does this molecule match?",
              "Which class of molecule has a H:O ratio much greater than 2:1?",
              "Why does a high H:O ratio mean more energy per gram?",
            ],
            solutions: [
              {
                label: "H:O ratio analysis",
                steps: [
                  "Formula: C₅₇H₁₁₀O₆. H:O ratio = 110 ÷ 6 ≈ 18.3:1.",
                  "Carbohydrate H:O ratio = 2:1 (by definition, formula (CH₂O)ₙ). This molecule does NOT match.",
                  "H:O ratio of 18:1 is consistent with a triglyceride (fat): fatty acid chains are mostly –CH₂– with minimal O.",
                  "More C–H bonds per gram → more oxidation in respiration → fat yields ~37 kJ g⁻¹ vs carbohydrate ~17 kJ g⁻¹.",
                ],
              },
            ],
          },
          {
            id: "bio-molecules-bq4-04",
            question: "Enzymes are biological catalysts made of protein. Amylase breaks down starch; protease breaks down protein; lipase breaks down fat.\n\n(a) State the products of (i) amylase acting on starch, (ii) protease acting on a protein, (iii) lipase acting on a triglyceride. [3]\n(b) In each case, name the bond broken and the type of reaction. [3]",
            marks: 6,
            modelAnswer: "(a) (i) Amylase on starch → maltose (and glucose). (ii) Protease on protein → amino acids. (iii) Lipase on triglyceride → glycerol + fatty acids (three fatty acid molecules).\n(b) (i) Amylase breaks alpha-1,4 glycosidic bonds by hydrolysis. (ii) Protease breaks peptide bonds by hydrolysis. (iii) Lipase breaks ester bonds by hydrolysis.",
            markScheme: [
              "(a)(i) Maltose / glucose (accept either or both).",
              "(a)(ii) Amino acids.",
              "(a)(iii) Glycerol and (three) fatty acids.",
              "(b)(i) Glycosidic bond (alpha-1,4); hydrolysis.",
              "(b)(ii) Peptide bond; hydrolysis.",
              "(b)(iii) Ester bond; hydrolysis.",
            ],
            commonError: "Students often say protease produces 'proteins' rather than amino acids. Also, 'ester bond' is frequently replaced with 'peptide bond' for lipase — each enzyme breaks a specific bond type.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "core",
            hints: [
              "Products = monomers/subunits of each polymer.",
              "Each enzyme breaks the specific bond that holds that polymer together.",
              "All three processes are hydrolysis — they all add water to break bonds.",
            ],
          },
          {
            id: "bio-molecules-bq4-05",
            question: "A scientist adds a small volume of oil to water and shakes the mixture. She observes an emulsion forming temporarily, but it separates back into layers after a few minutes. She then repeats the experiment, adding a few drops of bile salts before shaking.\n\n(a) Explain why the oil and water separate into layers when no bile salts are present. [2]\n(b) Describe the role of bile salts in preventing separation of the oil and water layers (emulsification). [2]\n(c) Explain why emulsification of fat in the small intestine is beneficial for digestion. [2]",
            marks: 6,
            modelAnswer: "(a) Oil (fat) consists of non-polar hydrocarbon chains that cannot form hydrogen bonds with water (a polar molecule). Non-polar and polar molecules do not mix — oil is hydrophobic and water-repelling, so the two liquids separate into two distinct layers, with oil (less dense) floating on top of water.\n(b) Bile salts are amphiphilic — they have a hydrophilic (polar) end and a hydrophobic end. The hydrophobic end of each bile-salt molecule embeds into the oil droplets, while the hydrophilic end faces the surrounding water. This surrounds the oil droplets with a hydrophilic coating, preventing them from coalescing back into a single oil layer. The result is a stable emulsion of small oil droplets dispersed in water.\n(c) Emulsification greatly increases the total surface area of the fat exposed to the aqueous environment of the intestine. Lipase (the enzyme that digests fat) is water-soluble and can only act at the surface of fat droplets. Smaller droplets = much greater total surface area = more enzyme-substrate contact = faster rate of fat digestion.",
            markScheme: [
              "(a) Oil is non-polar / hydrophobic; water is polar / hydrophilic → they cannot mix / separate into layers.",
              "(a) Oil is less dense than water → floats on top.",
              "(b) Bile salts are amphiphilic — hydrophobic end embeds in oil; hydrophilic end faces water.",
              "(b) Surrounds oil droplets → prevents coalescence → stable emulsion of small droplets.",
              "(c) Emulsification increases surface area of fat droplets.",
              "(c) Greater surface area → more contact between lipase and fat → faster hydrolysis / digestion.",
            ],
            commonError: "For (c), students often say 'bile salts digest fat' — bile salts do not digest fat; they emulsify it to increase surface area for lipase. The distinction between physical emulsification and enzymatic digestion is frequently confused.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "challenge",
            hints: [
              "For (a): what does 'non-polar' mean for solubility in water?",
              "For (b): what is 'amphiphilic'? How does an amphiphilic molecule stabilise an oil-water boundary?",
              "For (c): lipase works at the surface of fat droplets — how does more droplets (smaller size) help?",
            ],
            strategy: "Emulsification = physical breakdown into smaller droplets = increased surface area = faster enzymatic digestion. Bile does not digest fat — lipase does.",
          },
          {
            id: "bio-molecules-bq4-06",
            question: "A student is studying two carbohydrates: starch and sucrose. Both are white solids that dissolve in water.\n\n(a) Describe one food test that would distinguish between starch and sucrose. State the reagent(s), procedure, and expected results for both substances. [4]\n(b) Starch is a polysaccharide; sucrose is a disaccharide. Explain what these terms mean and how they differ. [2]",
            marks: 6,
            modelAnswer: "(a) Iodine test: add a few drops of iodine solution (orange-brown) to a solution of each substance. Starch: the iodine turns blue-black (positive) because iodine molecules slot into the helical coils of the starch polymer. Sucrose: the iodine stays orange-brown (negative) because sucrose does not have a helical polymer structure. This test clearly distinguishes starch from sucrose. (Alternatively: Benedict's test after hydrolysis to detect sucrose as a non-reducing sugar, but the iodine test is simpler and more direct.)\n(b) Polysaccharide: a large polymer made of many monosaccharide (sugar) monomers joined by glycosidic bonds. Starch is made of hundreds or thousands of glucose units. Disaccharide: a molecule made of exactly two monosaccharide units joined by a glycosidic bond (condensation). Sucrose consists of one glucose + one fructose joined by a glycosidic bond. The key difference is the number of monomers: polysaccharide = many (polymer); disaccharide = exactly two.",
            markScheme: [
              "(a) Iodine test: add iodine solution.",
              "(a) Starch: blue-black positive; sucrose: stays orange-brown (negative).",
              "(a) Reason: starch has helical coils for iodine inclusion; sucrose does not.",
              "(a) Full method including both expected results for both substances.",
              "(b) Polysaccharide: many monosaccharide monomers joined by glycosidic bonds → polymer (e.g. starch = many glucose).",
              "(b) Disaccharide: exactly two monosaccharide units joined by one glycosidic bond (e.g. sucrose = glucose + fructose).",
            ],
            commonError: "For (a), students often suggest Benedict's test, which would give a negative result for both starch and sucrose (neither is a reducing sugar) — this cannot distinguish them. The iodine test is the most direct test for starch.",
            guideRef: "Food Tests",
            difficulty: "core",
            hints: [
              "For (a): which food test is specific to starch? What colour does starch give?",
              "For (a): does sucrose give the same result as starch with that test?",
              "For (b): how many monomer units does a polysaccharide have vs. a disaccharide?",
            ],
          },
          {
            id: "bio-molecules-bq4-07",
            question: "Haemoglobin is a transport protein made of four polypeptide chains, each associated with an iron-containing haem group. Haemoglobin carries oxygen in red blood cells.\n\n(a) Haemoglobin is described as a globular protein. What does this mean, and why is it suited to haemoglobin's function? [2]\n(b) Explain how a specific sequence of amino acids allows haemoglobin to bind oxygen. [3]",
            marks: 5,
            modelAnswer: "(a) A globular protein has a roughly spherical 3-D shape, with hydrophilic R-groups on the outside (facing the aqueous cytoplasm) and hydrophobic R-groups buried inside. Haemoglobin's globular shape makes it soluble in the aqueous cytoplasm of red blood cells — this is essential for its function as a transport protein, since it must be dissolved in the cell to be carried around the body.\n(b) The specific sequence of amino acids in each polypeptide chain of haemoglobin determines how the chain folds. The folding brings the haem group (containing iron) into a precise position within the protein structure. The iron (Fe²⁺) in the haem group can reversibly bind one oxygen molecule (O₂). The specific 3-D environment around the iron — determined by the surrounding amino acids — allows oxygen binding at high oxygen concentrations (e.g. lungs) and oxygen release at low concentrations (e.g. respiring tissues). Any change in the amino acid sequence (e.g. in sickle-cell disease) can alter the 3-D shape enough to disrupt normal oxygen transport.",
            markScheme: [
              "(a) Globular: spherical/compact shape; hydrophilic surface → water-soluble.",
              "(a) Solubility essential for transport function in aqueous cytoplasm of red blood cells.",
              "(b) Amino acid sequence determines 3-D folding → positions haem group precisely.",
              "(b) Iron (Fe²⁺) in haem binds O₂ reversibly.",
              "(b) Specific 3-D environment (determined by sequence) allows O₂ loading and unloading at appropriate sites.",
            ],
            commonError: "Students often say 'haemoglobin binds oxygen because it contains iron' without explaining how the amino acid sequence positions the iron and creates the specific binding environment. The question asks for the amino acid sequence link.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "challenge",
            hints: [
              "For (a): globular = soluble in water. Why is solubility important for a transport protein?",
              "For (b): how does amino acid sequence determine the 3-D shape around the haem group?",
              "For (b): what role does the specific 3-D environment play in oxygen binding and release?",
            ],
          },
          {
            id: "bio-molecules-bq4-08",
            question: "Explain the biological importance of hydrolysis reactions in living organisms, using three specific examples from different topic areas in this unit. [6]",
            marks: 6,
            modelAnswer: "Hydrolysis is the breaking of a covalent bond by the addition of water, producing smaller molecules. Three biological examples: (1) Digestion of starch: amylase catalyses the hydrolysis of alpha-1,4 glycosidic bonds in starch, breaking it into maltose and then glucose. This releases glucose for absorption and use in respiration. Without hydrolysis, starch (a polymer) is too large to be absorbed through the intestinal wall. (2) Digestion of protein: protease enzymes in the stomach and small intestine catalyse hydrolysis of peptide bonds in dietary proteins, releasing amino acids. These are absorbed and used to synthesise new proteins in the body. (3) Hydrolysis of triglycerides by lipase: ester bonds in triglycerides are hydrolysed to release glycerol and fatty acids. These are absorbed in the small intestine and used for energy (respiration) or for membrane phospholipid synthesis.",
            markScheme: [
              "Hydrolysis: breaking a bond by addition of water — stated or implied.",
              "Example 1: starch → glucose/maltose; alpha glycosidic bonds broken by amylase; biological importance (energy/absorption).",
              "Example 2: protein → amino acids; peptide bonds broken by protease; biological importance (synthesis of new proteins).",
              "Example 3: triglycerides → glycerol + fatty acids; ester bonds broken by lipase; biological importance (energy / membrane synthesis).",
              "(Award 2 marks per example: 1 for the chemistry, 1 for the biological significance. Any three well-explained examples for 6 marks.)",
            ],
            commonError: "Students often list three examples but omit the biological significance of each hydrolysis. Why does it matter that starch is hydrolysed? Why does it matter that triglycerides are hydrolysed? Both the chemistry and the consequence are needed.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "core",
            hints: [
              "For each example: name the molecule, name the bond broken, name the enzyme, state the products, state the biological significance.",
              "Think across the full topic: starch digestion, protein digestion, fat digestion, and also polymer synthesis (condensation) as contrast.",
            ],
            strategy: "Each example: molecule → bond broken → products → why it matters (biological significance).",
          },
          {
            id: "bio-molecules-bq4-09",
            question: "[CHALLENGE] A biologist discovers a novel organism that lives in extremely acidic hot springs (pH 2, temperature 80 °C). The organism produces enzymes that function normally in these conditions.\n\n(a) Predict and explain what the optimal pH and temperature for this organism's enzymes would be. [2]\n(b) Explain, in terms of protein structure, why the enzymes of humans would be denatured in these conditions. [3]\n(c) Suggest how the amino acid composition or structure of the hot-spring enzymes might differ from human enzymes, to allow stability at 80 °C. [2]",
            marks: 7,
            modelAnswer: "(a) The optimal pH for these enzymes would be approximately pH 2 (acidic), and the optimal temperature would be approximately 80 °C. These are the conditions in which the organism normally lives — natural selection would favour enzymes whose active-site shape is complementary to their substrates under these exact conditions.\n(b) Human enzymes typically have an optimal pH of around 7 and an optimal temperature of 37 °C. At pH 2, the greatly increased H⁺ ion concentration would change the ionisation state of charged R-groups in the active site and throughout the protein. This disrupts the ionic bonds and hydrogen bonds maintaining the 3-D structure, changing the active-site shape so it is no longer complementary to the substrate. At 80 °C, excess thermal energy disrupts all non-covalent interactions (hydrogen bonds, hydrophobic interactions, ionic bonds) that maintain the protein's secondary and tertiary structure. The protein unfolds (denatures), losing its functional shape permanently.\n(c) The hot-spring enzymes may have: (1) more disulfide bridges (covalent S–S bonds between cysteine residues) — covalent bonds are stronger than hydrogen bonds and resist disruption at high temperatures; (2) a higher proportion of hydrophobic R-groups buried in the core of the protein — hydrophobic cores are compact and more resistant to thermal unfolding; (3) modified R-groups in the active site that are stable in their ionisation state at pH 2.",
            markScheme: [
              "(a) Optimal pH ≈ 2; optimal temperature ≈ 80 °C.",
              "(a) These are the conditions the enzyme normally works in — natural selection for complementary active-site shape under these conditions.",
              "(b) pH 2: high H⁺ changes ionisation of R-groups → disrupts ionic bonds and H-bonds → 3-D shape changes / active site not complementary to substrate.",
              "(b) 80 °C: excess thermal energy disrupts all non-covalent bonds → protein unfolds / denatures → active site destroyed.",
              "(b) Human enzymes optimised for pH 7, 37 °C — outside these conditions, 3-D shape is lost.",
              "(c) More disulfide bridges (covalent bonds resist heat).",
              "(c) More hydrophobic core / compact structure / OR other valid structural adaptation with explanation.",
            ],
            commonError: "For (c), students often say 'the enzymes are made of a different material' — this is not sufficient. The answer must refer to specific amino acid or structural features (disulfide bridges, hydrophobic cores) that provide additional stability.",
            guideRef: "Linking Molecule Structure to Function",
            difficulty: "challenge",
            hints: [
              "For (a): an enzyme's optimum conditions are the conditions it normally operates in.",
              "For (b): think separately about the effect of low pH (charges on R-groups) and high temperature (non-covalent bonds).",
              "For (c): what types of bond in a protein are covalent (and therefore harder to break by heat)? What amino acid forms disulfide bridges?",
            ],
            strategy: "Optimal conditions = conditions enzyme lives in. Denaturation = loss of non-covalent bonds → shape change. Thermostability = more covalent or strong interactions (disulfide bridges, hydrophobic cores).",
          },
          {
            id: "bio-molecules-bq4-10",
            question: "[CHALLENGE — synoptic] A student states: 'All biological polymers are made by condensation and broken down by hydrolysis; therefore condensation and hydrolysis are the two most fundamental reactions in living organisms.'\n\nEvaluate this statement by considering: (a) the accuracy of the claim about condensation and hydrolysis in polymer synthesis/breakdown; (b) whether these reactions are truly the most fundamental; (c) other reactions in biology that are equally or more fundamental. [6]",
            marks: 6,
            modelAnswer: "(a) The statement is largely accurate regarding biological polymers. Condensation reactions do synthesise all three major classes of polymer: glycosidic bonds form polysaccharides from monosaccharides; peptide bonds form proteins from amino acids; and ester bonds form triglycerides from glycerol and fatty acids (though technically triglycerides are not polymers — each one has only three fatty acids). Each condensation releases one water molecule. Hydrolysis (addition of water) breaks all these bonds in the reverse direction during digestion. So the core claim is correct.\n(b) Whether these reactions are 'the most fundamental' is debatable. They are certainly very widespread — virtually every process of digestion and biosynthesis uses them. However, ATP hydrolysis and phosphorylation, redox reactions (oxidation and reduction in respiration and photosynthesis), and phosphorylation of signal molecules are equally fundamental to life.\n(c) Equally or more fundamental reactions include: aerobic respiration (glucose oxidation — C–H bonds oxidised; ATP synthesised — not simply hydrolysis); photosynthesis (CO₂ fixation; ATP synthesis; light-driven redox reactions); and DNA replication (phosphodiester bond formation — another condensation, but driven by specific polymerase enzymes with energy from nucleotide triphosphates). So condensation and hydrolysis are important but not uniquely fundamental — life depends on many interconnected reaction types.",
            markScheme: [
              "(a) Condensation: correct — builds polysaccharides (glycosidic bonds), proteins (peptide bonds), triglycerides (ester bonds); water released each time.",
              "(a) Hydrolysis: correct — breaks all these bonds in digestion; water added.",
              "(a) Minor qualification: triglycerides are not true polymers (only three fatty acids) — 1 mark for noting this or for full accuracy.",
              "(b) Condensation and hydrolysis are widespread but not uniquely 'most fundamental' — debatable.",
              "(c) Other fundamental reactions: redox reactions in respiration/photosynthesis; ATP hydrolysis/synthesis; phosphorylation.",
              "(c) Concise, reasoned evaluation with examples — not just a list.",
            ],
            commonError: "Students often simply agree with the statement and list examples of condensation and hydrolysis without evaluating whether the claim is the complete picture. Evaluation requires both identifying what is correct AND challenging/qualifying the claim.",
            guideRef: "Small Molecules Building Large Ones",
            difficulty: "challenge",
            hints: [
              "For (a): check each polymer class — does condensation build it? Does hydrolysis break it?",
              "For (b): think of other reactions in biology that are equally important (respiration, photosynthesis).",
              "For (c): ATP hydrolysis/synthesis is not the same as macromolecule hydrolysis — it is a different process.",
              "Evaluate = agree where correct, qualify where incomplete, give counter-examples.",
            ],
            strategy: "Evaluate = correct what is right + qualify/challenge what is overstated + support with specific biological examples.",
          },
        ],
      },
    ],
  },
};
