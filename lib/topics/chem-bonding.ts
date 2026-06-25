import type { Topic } from "../types";

export const chemBonding: Topic = {
  id: "chem-bonding",
  title: "Chemical Bonding & Structure",
  subject: "chemistry",
  icon: "🔗",
  blurb: "Ionic, covalent and metallic bonding — from dot-and-cross diagrams to giant structures and their properties.",
  intro: "Every material around you — from table salt to diamond to copper wire — gets its properties from the way its atoms bond together. In this topic you will master three types of chemical bonding (ionic, covalent, metallic), draw dot-and-cross diagrams, build giant-structure models in your mind, and use structure-to-property reasoning to explain why substances behave the way they do — exactly the skills Cambridge IGCSE examiners reward.",

  // ─── GUIDE ──────────────────────────────────────────────────────────────
  guide: [
    {
      heading: "Ionic Bonding",
      body: `When a metal atom meets a non-metal atom, electrons are **transferred** from the metal to the non-metal. The metal loses electrons and becomes a **positive ion (cation)**; the non-metal gains electrons and becomes a **negative ion (anion)**. The two oppositely charged ions are then held together by a **strong electrostatic attraction** — this is ionic bonding.

The number of electrons transferred depends on which Group each element is in:

- Group 1 metals lose 1 electron → +1 ion (e.g. Na → Na⁺)
- Group 2 metals lose 2 electrons → +2 ion (e.g. Mg → Mg²⁺)
- Group 6 non-metals gain 2 electrons → −2 ion (e.g. O → O²⁻)
- Group 7 non-metals gain 1 electron → −1 ion (e.g. Cl → Cl⁻)

After transfer each ion has a full outer shell — the same electron configuration as a noble gas.`,
      diagrams: [
        {
          caption: "Dot-and-cross diagrams for NaCl and MgO showing electron transfer",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Dot-and-cross diagrams for NaCl and MgO">
  <!-- NaCl -->
  <text x="10" y="18" font-size="11" fill="#b7bce0" font-family="sans-serif">NaCl</text>
  <!-- Na atom -->
  <circle cx="52" cy="80" r="28" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
  <circle cx="52" cy="80" r="18" fill="none" stroke="#38bdf8" stroke-width="1"/>
  <circle cx="52" cy="80" r="8" fill="none" stroke="#38bdf8" stroke-width="1"/>
  <!-- Na outer electron (dot) -->
  <circle cx="52" cy="62" r="3" fill="#fbbf24"/>
  <text x="38" y="118" font-size="10" fill="#38bdf8" font-family="sans-serif">Na (2,8,1)</text>
  <!-- arrow -->
  <text x="84" y="84" font-size="18" fill="#34d399" font-family="sans-serif">→</text>
  <!-- Na+ ion -->
  <circle cx="120" cy="80" r="18" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
  <circle cx="120" cy="80" r="8" fill="none" stroke="#38bdf8" stroke-width="1"/>
  <text x="108" y="84" font-size="10" fill="#38bdf8" font-family="sans-serif">Na+</text>
  <!-- Cl atom -->
  <circle cx="200" cy="80" r="28" fill="none" stroke="#a78bfa" stroke-width="1.5"/>
  <circle cx="200" cy="80" r="18" fill="none" stroke="#a78bfa" stroke-width="1"/>
  <circle cx="200" cy="80" r="8" fill="none" stroke="#a78bfa" stroke-width="1"/>
  <!-- Cl outer electrons (7 crosses) -->
  <text x="194" y="54" font-size="9" fill="#fb7185" font-family="sans-serif">x</text>
  <text x="219" y="61" font-size="9" fill="#fb7185" font-family="sans-serif">x</text>
  <text x="225" y="77" font-size="9" fill="#fb7185" font-family="sans-serif">x</text>
  <text x="219" y="98" font-size="9" fill="#fb7185" font-family="sans-serif">x</text>
  <text x="194" y="106" font-size="9" fill="#fb7185" font-family="sans-serif">x</text>
  <text x="173" y="98" font-size="9" fill="#fb7185" font-family="sans-serif">x</text>
  <text x="168" y="77" font-size="9" fill="#fb7185" font-family="sans-serif">x</text>
  <text x="182" y="118" font-size="10" fill="#a78bfa" font-family="sans-serif">Cl (2,8,7)</text>
  <!-- transferred dot on Cl -->
  <circle cx="200" cy="54" r="3" fill="#fbbf24"/>
  <!-- arrow -->
  <text x="232" y="84" font-size="18" fill="#34d399" font-family="sans-serif">→</text>
  <!-- Cl- ion -->
  <circle cx="275" cy="80" r="22" fill="none" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="263" y="84" font-size="10" fill="#a78bfa" font-family="sans-serif">Cl−</text>
  <!-- labels -->
  <text x="60" y="145" font-size="9" fill="#b7bce0" font-family="sans-serif">loses 1e−</text>
  <text x="178" y="145" font-size="9" fill="#b7bce0" font-family="sans-serif">gains 1e−</text>
  <text x="90" y="175" font-size="9" fill="#34d399" font-family="sans-serif">Strong electrostatic attraction between Na+ and Cl−</text>
</svg>`,
        },
        {
          caption: "The giant ionic lattice of NaCl — alternating Na⁺ and Cl⁻ ions in a 3-D arrangement",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Giant ionic lattice of NaCl showing alternating positive and negative ions">
  <!-- background label -->
  <text x="8" y="16" font-size="11" fill="#b7bce0" font-family="sans-serif">NaCl Giant Ionic Lattice</text>
  <!-- draw a 4x4 grid of alternating ions to suggest 3D lattice -->
  <!-- Row 1 -->
  <circle cx="60" cy="50" r="14" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="54" y="54" font-size="9" fill="#38bdf8" font-family="sans-serif">Na+</text>
  <circle cx="110" cy="50" r="18" fill="#a78bfa" fill-opacity="0.25" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="103" y="54" font-size="9" fill="#a78bfa" font-family="sans-serif">Cl−</text>
  <circle cx="165" cy="50" r="14" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="159" y="54" font-size="9" fill="#38bdf8" font-family="sans-serif">Na+</text>
  <circle cx="215" cy="50" r="18" fill="#a78bfa" fill-opacity="0.25" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="208" y="54" font-size="9" fill="#a78bfa" font-family="sans-serif">Cl−</text>
  <!-- Row 2 -->
  <circle cx="60" cy="110" r="18" fill="#a78bfa" fill-opacity="0.25" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="53" y="114" font-size="9" fill="#a78bfa" font-family="sans-serif">Cl−</text>
  <circle cx="110" cy="110" r="14" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="104" y="114" font-size="9" fill="#38bdf8" font-family="sans-serif">Na+</text>
  <circle cx="165" cy="110" r="18" fill="#a78bfa" fill-opacity="0.25" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="158" y="114" font-size="9" fill="#a78bfa" font-family="sans-serif">Cl−</text>
  <circle cx="215" cy="110" r="14" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="209" y="114" font-size="9" fill="#38bdf8" font-family="sans-serif">Na+</text>
  <!-- Row 3 -->
  <circle cx="60" cy="165" r="14" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="54" y="169" font-size="9" fill="#38bdf8" font-family="sans-serif">Na+</text>
  <circle cx="110" cy="165" r="18" fill="#a78bfa" fill-opacity="0.25" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="103" y="169" font-size="9" fill="#a78bfa" font-family="sans-serif">Cl−</text>
  <circle cx="165" cy="165" r="14" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="159" y="169" font-size="9" fill="#38bdf8" font-family="sans-serif">Na+</text>
  <circle cx="215" cy="165" r="18" fill="#a78bfa" fill-opacity="0.25" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="208" y="169" font-size="9" fill="#a78bfa" font-family="sans-serif">Cl−</text>
  <!-- bond lines suggest lattice -->
  <line x1="74" y1="50" x2="92" y2="50" stroke="#b7bce0" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="128" y1="50" x2="151" y2="50" stroke="#b7bce0" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="179" y1="50" x2="197" y2="50" stroke="#b7bce0" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="60" y1="64" x2="60" y2="92" stroke="#b7bce0" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="110" y1="68" x2="110" y2="96" stroke="#b7bce0" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="165" y1="64" x2="165" y2="92" stroke="#b7bce0" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="215" y1="68" x2="215" y2="96" stroke="#b7bce0" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="60" y1="128" x2="60" y2="151" stroke="#b7bce0" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="110" y1="124" x2="110" y2="147" stroke="#b7bce0" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="165" y1="128" x2="165" y2="147" stroke="#b7bce0" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="215" y1="124" x2="215" y2="147" stroke="#b7bce0" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="74" y1="110" x2="92" y2="110" stroke="#b7bce0" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="128" y1="110" x2="147" y2="110" stroke="#b7bce0" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="183" y1="110" x2="201" y2="110" stroke="#b7bce0" stroke-width="1" stroke-dasharray="3,2"/>
  <!-- annotation -->
  <text x="248" y="90" font-size="9" fill="#34d399" font-family="sans-serif">Many</text>
  <text x="244" y="102" font-size="9" fill="#34d399" font-family="sans-serif">electrostatic</text>
  <text x="244" y="114" font-size="9" fill="#34d399" font-family="sans-serif">attractions</text>
  <text x="244" y="126" font-size="9" fill="#34d399" font-family="sans-serif">hold lattice</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Ionic bonding is the transfer of electrons from a metal atom to a non-metal atom.",
        "The resulting oppositely charged ions are held by strong electrostatic attraction.",
        "Each ion achieves a full outer shell (noble-gas configuration).",
        "The formula of an ionic compound is determined by balancing the total charges to zero.",
        "Dot-and-cross diagrams show only outer-shell electrons; use dots for one element and crosses for the other.",
      ],
      discovery: {
        problem: "Sodium (Group 1) reacts with chlorine (Group 7) to form NaCl. Before reading on: how many electrons must move, and in which direction, to leave both atoms with full outer shells?",
        idea: "Sodium has 1 outer electron it can donate; chlorine needs 1 to complete its outer shell. One electron transfers Na → Cl, giving Na⁺ (2,8) and Cl⁻ (2,8,8) — both have noble-gas configurations. The 1:1 ratio gives the formula NaCl.",
      },
      whyItWorks: "Electrostatic attraction between opposite charges follows Coulomb's law: force ∝ charge × charge / distance². The small, highly charged ions in an ionic lattice sit very close together, so the attraction is extremely strong — hence the high melting points and low compressibility of ionic crystals.",
      strategies: ["Identify group number to find charge", "Draw outer shell only in dot-and-cross", "Check formula by balancing charges"],
    },

    {
      heading: "Properties of Ionic Compounds",
      body: `Because ionic compounds consist of millions of ions arranged in a **giant ionic lattice**, their properties can all be traced back to the strength of the electrostatic forces holding the lattice together.

**High melting and boiling points** — a large amount of energy is needed to overcome the many strong electrostatic attractions between oppositely charged ions throughout the lattice.

**Electrical conductivity:**
- **Solid state**: ions are fixed in their lattice positions — they **cannot move**, so ionic solids do **not conduct electricity**.
- **Molten (liquid) state**: heating breaks down the lattice; ions are free to move. The mobile ions carry charge, so molten ionic compounds **do conduct electricity**.
- **Aqueous solution**: when dissolved in water, the lattice dissociates into free-moving ions. These ions carry charge, so ionic solutions **do conduct electricity**.

**Brittleness**: if a force shifts one layer of ions, like charges align and repel — the crystal shatters rather than deforming.

**Solubility**: many ionic compounds dissolve in water (polar solvent) because water molecules are attracted to the ions and pull them away from the lattice.`,
      keyPoints: [
        "Ionic compounds have high melting and boiling points due to the many strong electrostatic forces in the lattice.",
        "Ionic solids cannot conduct electricity because ions are fixed in position.",
        "Ionic compounds conduct electricity when molten or dissolved in water — ions are then free to move.",
        "Ionic compounds are brittle because displacing layers brings like charges into alignment, causing repulsion.",
        "Many ionic compounds are soluble in water; the polar water molecules attract and separate the ions.",
      ],
      thinkDeeper: "Why does dissolving NaCl in water let it conduct electricity, but dissolving sugar (a covalent molecular compound) does not? Consider what particles are released in each case.",
      whyItWorks: "Electrical conduction requires mobile charge carriers. In a solid ionic lattice, ions are locked into fixed positions by electrostatic attraction in all directions — there are no free-moving electrons and no mobile ions. Melting or dissolving breaks enough of those attractions to liberate the ions, giving them the freedom to drift towards electrodes and carry current.",
      strategies: ["Link each property back to the strength and number of electrostatic attractions", "Always state 'free-moving ions' when explaining conductivity"],
    },

    {
      heading: "Covalent Bonding & Simple Molecules",
      body: `Covalent bonding occurs between **non-metal atoms** that **share pairs of electrons**. Each shared pair is a covalent bond. Sharing allows both atoms to achieve a full outer shell without fully gaining or losing electrons.

**Key examples and their dot-and-cross diagrams:**

- **H₂**: one shared pair (single bond) between two hydrogen atoms — each gets a full shell of 2.
- **Cl₂**: one shared pair; each Cl also has three lone pairs.
- **H₂O**: oxygen forms two single bonds with H; oxygen has two lone pairs.
- **NH₃**: nitrogen forms three single bonds with H; nitrogen has one lone pair.
- **CH₄**: carbon forms four single bonds with H (no lone pairs on carbon).
- **CO₂**: carbon forms two double bonds with each oxygen (each bond = 2 shared pairs).
- **N₂**: triple bond (3 shared pairs) between the two nitrogen atoms — very strong.

**Simple molecular substances** consist of small, discrete molecules. Within each molecule the covalent bonds are strong, but the **intermolecular forces** (attractions between molecules) are weak.

- **Low melting and boiling points** — only the weak intermolecular forces need to be broken when melting/boiling, not the covalent bonds themselves.
- **Do not conduct electricity** — no free ions or delocalised electrons.
- Many are gases or liquids at room temperature.`,
      diagrams: [
        {
          caption: "Dot-and-cross diagrams: H₂O (water), NH₃ (ammonia) and CO₂ (carbon dioxide)",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Dot-and-cross diagrams for water, ammonia and carbon dioxide">
  <!-- H2O -->
  <text x="10" y="16" font-size="11" fill="#b7bce0" font-family="sans-serif">H2O</text>
  <!-- O circle -->
  <circle cx="55" cy="75" r="22" fill="none" stroke="#34d399" stroke-width="1.5"/>
  <!-- O lone pairs (dots) -->
  <circle cx="42" cy="56" r="2.5" fill="#34d399"/>
  <circle cx="50" cy="54" r="2.5" fill="#34d399"/>
  <circle cx="66" cy="54" r="2.5" fill="#34d399"/>
  <circle cx="74" cy="56" r="2.5" fill="#34d399"/>
  <!-- O-H shared pairs -->
  <circle cx="36" cy="75" r="2.5" fill="#34d399"/>
  <circle cx="74" cy="75" r="2.5" fill="#34d399"/>
  <!-- H left -->
  <circle cx="22" cy="75" r="10" fill="none" stroke="#fbbf24" stroke-width="1.2"/>
  <circle cx="36" cy="75" r="2.5" fill="#fbbf24" opacity="0.6"/>
  <text x="17" y="78" font-size="8" fill="#fbbf24" font-family="sans-serif">H</text>
  <!-- H right -->
  <circle cx="88" cy="75" r="10" fill="none" stroke="#fbbf24" stroke-width="1.2"/>
  <circle cx="74" cy="75" r="2.5" fill="#fbbf24" opacity="0.6"/>
  <text x="83" y="78" font-size="8" fill="#fbbf24" font-family="sans-serif">H</text>
  <text x="18" y="105" font-size="8" fill="#b7bce0" font-family="sans-serif">2 bonds, 2 lone pairs on O</text>

  <!-- NH3 -->
  <text x="115" y="16" font-size="11" fill="#b7bce0" font-family="sans-serif">NH3</text>
  <!-- N circle -->
  <circle cx="168" cy="75" r="22" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
  <!-- N lone pair -->
  <circle cx="158" cy="55" r="2.5" fill="#38bdf8"/>
  <circle cx="168" cy="53" r="2.5" fill="#38bdf8"/>
  <!-- three N-H shared pairs and H circles -->
  <!-- H top-right -->
  <circle cx="185" cy="57" r="2.5" fill="#38bdf8"/>
  <circle cx="197" cy="47" r="10" fill="none" stroke="#fbbf24" stroke-width="1.2"/>
  <text x="192" y="50" font-size="8" fill="#fbbf24" font-family="sans-serif">H</text>
  <!-- H left -->
  <circle cx="147" cy="82" r="2.5" fill="#38bdf8"/>
  <circle cx="133" cy="82" r="10" fill="none" stroke="#fbbf24" stroke-width="1.2"/>
  <text x="128" y="85" font-size="8" fill="#fbbf24" font-family="sans-serif">H</text>
  <!-- H bottom -->
  <circle cx="168" cy="97" r="2.5" fill="#38bdf8"/>
  <circle cx="168" cy="112" r="10" fill="none" stroke="#fbbf24" stroke-width="1.2"/>
  <text x="163" y="115" font-size="8" fill="#fbbf24" font-family="sans-serif">H</text>
  <text x="120" y="140" font-size="8" fill="#b7bce0" font-family="sans-serif">3 bonds, 1 lone pair on N</text>

  <!-- CO2 -->
  <text x="228" y="16" font-size="11" fill="#b7bce0" font-family="sans-serif">CO2</text>
  <!-- C circle -->
  <circle cx="265" cy="100" r="16" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="260" y="104" font-size="9" fill="#fbbf24" font-family="sans-serif">C</text>
  <!-- double bond left (2 pairs) -->
  <line x1="249" y1="96" x2="233" y2="96" stroke="#fb7185" stroke-width="1.5"/>
  <line x1="249" y1="104" x2="233" y2="104" stroke="#fb7185" stroke-width="1.5"/>
  <!-- O left -->
  <circle cx="218" cy="100" r="16" fill="none" stroke="#fb7185" stroke-width="1.5"/>
  <text x="213" y="104" font-size="9" fill="#fb7185" font-family="sans-serif">O</text>
  <!-- O left lone pairs -->
  <circle cx="204" cy="93" r="2.2" fill="#fb7185"/>
  <circle cx="204" cy="107" r="2.2" fill="#fb7185"/>
  <!-- double bond right -->
  <line x1="281" y1="96" x2="297" y2="96" stroke="#fb7185" stroke-width="1.5"/>
  <line x1="281" y1="104" x2="297" y2="104" stroke="#fb7185" stroke-width="1.5"/>
  <!-- O right -->
  <circle cx="308" cy="100" r="8" fill="none" stroke="#fb7185" stroke-width="1.2"/>
  <text x="303" y="104" font-size="9" fill="#fb7185" font-family="sans-serif">O</text>
  <!-- labels -->
  <text x="228" y="170" font-size="8" fill="#b7bce0" font-family="sans-serif">2 double bonds on C</text>
  <text x="228" y="182" font-size="8" fill="#b7bce0" font-family="sans-serif">Linear molecule</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Covalent bonds form between non-metal atoms by sharing one or more pairs of electrons.",
        "Each shared pair is one covalent bond; double or triple bonds involve 2 or 3 shared pairs.",
        "Simple molecular substances have weak intermolecular forces, giving low melting/boiling points.",
        "Simple molecular substances do not conduct electricity — no free ions or electrons.",
        "Lone pairs are non-bonding electron pairs shown in dot-and-cross diagrams but do not form bonds.",
      ],
      discovery: {
        problem: "Carbon dioxide is a gas at room temperature (bp −78 °C) even though each C=O bond is very strong. How can a molecule with strong bonds have such a low boiling point?",
        idea: "Boiling point depends on the forces BETWEEN molecules (intermolecular forces), not on the strength of bonds WITHIN them. When CO₂ boils, the weak intermolecular forces between separate CO₂ molecules are overcome — the covalent C=O bonds stay intact. The molecules are small and non-polar overall, so intermolecular forces are very weak, giving a very low boiling point.",
      },
      whyItWorks: "Covalent bonds are localised between specific pairs of atoms — they have no 'excess' electrons available to carry charge. Because both atoms pull equally (or nearly equally) on the shared electrons, no full charges develop, so there are no ions to carry current either.",
      strategies: ["Distinguish between breaking bonds within molecules vs. between molecules", "Count shared pairs = number of bonds"],
    },

    {
      heading: "Giant Covalent Structures",
      body: `Some covalent substances do not form simple small molecules. Instead, each atom bonds covalently to many others in a continuous **giant covalent (macromolecular) lattice**. Breaking down the structure requires breaking many strong covalent bonds — hence very high melting points.

**Diamond (C)**
- Each carbon atom is bonded to **4 others** by single covalent bonds in a tetrahedral arrangement.
- No free electrons; no ions.
- **Very hard** (all bonds must break to scratch it) → used in cutting tools and drill bits.
- **Very high melting point** (>3500 °C) — enormous number of strong C–C bonds.
- **Does not conduct electricity** — no mobile electrons or ions.

**Graphite (C)**
- Each carbon atom is bonded to **3 others** in flat hexagonal layers; the fourth outer electron is **delocalised** between layers.
- Layers are held together by weak intermolecular forces and can slide over each other.
- **Soft and slippery** → used as a lubricant and in pencil 'leads'.
- **High melting point** — still a giant structure with many C–C bonds.
- **Conducts electricity** — delocalised electrons are free to move along the layers.

**Silicon(IV) oxide (SiO₂)**
- Each silicon is bonded to 4 oxygen atoms; each oxygen is bonded to 2 silicon atoms.
- Giant covalent network — very high melting point (∼1710 °C), very hard, does not conduct.
- Used in glass and optical fibres.`,
      diagrams: [
        {
          caption: "Diamond (left) and graphite (right) structures compared",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Comparison of diamond and graphite structures">
  <!-- Diamond label -->
  <text x="10" y="16" font-size="11" fill="#38bdf8" font-family="sans-serif">Diamond</text>
  <text x="10" y="29" font-size="8" fill="#b7bce0" font-family="sans-serif">Each C bonded to 4 others</text>
  <!-- Diamond tetrahedral nodes -->
  <circle cx="75" cy="90" r="7" fill="#38bdf8"/>
  <circle cx="45" cy="60" r="7" fill="#38bdf8"/>
  <circle cx="105" cy="60" r="7" fill="#38bdf8"/>
  <circle cx="45" cy="120" r="7" fill="#38bdf8"/>
  <circle cx="105" cy="120" r="7" fill="#38bdf8"/>
  <circle cx="75" cy="155" r="7" fill="#38bdf8"/>
  <!-- Diamond bonds -->
  <line x1="75" y1="90" x2="45" y2="60" stroke="#38bdf8" stroke-width="2"/>
  <line x1="75" y1="90" x2="105" y2="60" stroke="#38bdf8" stroke-width="2"/>
  <line x1="75" y1="90" x2="45" y2="120" stroke="#38bdf8" stroke-width="2"/>
  <line x1="75" y1="90" x2="105" y2="120" stroke="#38bdf8" stroke-width="2"/>
  <line x1="75" y1="90" x2="75" y2="155" stroke="#38bdf8" stroke-width="2"/>
  <!-- annotation -->
  <text x="10" y="178" font-size="8" fill="#b7bce0" font-family="sans-serif">Hard, high mp, no conduction</text>

  <!-- Divider -->
  <line x1="155" y1="10" x2="155" y2="195" stroke="#b7bce0" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- Graphite label -->
  <text x="162" y="16" font-size="11" fill="#34d399" font-family="sans-serif">Graphite</text>
  <text x="162" y="29" font-size="8" fill="#b7bce0" font-family="sans-serif">Hexagonal layers; delocalised e−</text>
  <!-- Layer 1 hexagons (simplified) -->
  <!-- hex 1 -->
  <polygon points="195,45 210,35 225,45 225,65 210,75 195,65" fill="none" stroke="#34d399" stroke-width="1.5"/>
  <polygon points="225,45 240,35 255,45 255,65 240,75 225,65" fill="none" stroke="#34d399" stroke-width="1.5"/>
  <!-- Layer 2 (offset) -->
  <polygon points="200,105 215,95 230,105 230,125 215,135 200,125" fill="none" stroke="#34d399" stroke-width="1" stroke-dasharray="3,2"/>
  <polygon points="230,105 245,95 260,105 260,125 245,135 230,125" fill="none" stroke="#34d399" stroke-width="1" stroke-dasharray="3,2"/>
  <!-- Weak force arrows between layers -->
  <line x1="210" y1="78" x2="215" y2="93" stroke="#b7bce0" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="240" y1="78" x2="245" y2="93" stroke="#b7bce0" stroke-width="1" stroke-dasharray="2,2"/>
  <!-- delocalised electron cloud -->
  <text x="162" y="165" font-size="8" fill="#34d399" font-family="sans-serif">Delocalised e− between atoms</text>
  <text x="162" y="177" font-size="8" fill="#34d399" font-family="sans-serif">in each layer → conducts</text>
  <text x="162" y="189" font-size="8" fill="#b7bce0" font-family="sans-serif">Weak forces between layers → soft</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Diamond, graphite, and SiO₂ are giant covalent structures — millions of atoms bonded covalently throughout.",
        "All giant covalent structures have very high melting points because many strong covalent bonds must be broken.",
        "Diamond is the hardest natural substance — each carbon has four covalent bonds in all directions.",
        "Graphite conducts electricity because one electron per carbon is delocalised and free to move.",
        "Graphite is soft because the layers can slide over each other (only weak forces between layers).",
      ],
      thinkDeeper: "Graphene is a single layer of graphite. It is one of the strongest materials known yet conducts electricity better than copper. How does the giant covalent structure explain both properties simultaneously?",
      whyItWorks: "In graphite each carbon uses three of its four outer electrons to form strong covalent bonds within the layer, leaving the fourth electron delocalised across the entire layer. These delocalised electrons can move freely in response to an applied voltage — just like the electrons in a metal — giving graphite its metallic-like conductivity despite being a non-metal.",
      strategies: ["Compare structures: 4 bonds (diamond) vs 3 bonds (graphite)", "Ask: are there free electrons or ions?"],
    },

    {
      heading: "Metallic Bonding",
      body: `In a metal, atoms release their outer (valence) electrons into a shared **'sea' of delocalised electrons**. The remaining atoms become positive ions. The entire structure — positive ions held together by the mobile electron sea — is called a **metallic lattice**.

**Properties explained by metallic bonding:**

- **Electrical conductivity**: delocalised electrons drift through the lattice when a voltage is applied, carrying charge.
- **Thermal conductivity**: mobile electrons also transfer kinetic energy rapidly through the metal.
- **Malleability and ductility**: layers of positive ions can slide over each other without breaking bonds, because the electron sea simply reforms around the new positions. The metal bends rather than shatters.
- **High melting and boiling points** (for most metals): the strong attraction between positive ions and the electron sea requires a lot of energy to overcome.

**Alloys** can be explained by metallic bonding: mixing differently-sized atoms distorts the lattice, making it harder for layers to slide — so alloys are often harder and stronger than pure metals.`,
      keyPoints: [
        "Metallic bonding is the attraction between positive metal ions and a 'sea' of delocalised electrons.",
        "Delocalised electrons carry electrical (and thermal) energy, explaining conductivity.",
        "Metals are malleable because ions can slide without breaking — the electron sea reforms around them.",
        "Most metals have high melting points due to strong attraction between ions and electrons.",
        "Alloys are harder than pure metals because different-sized atoms disrupt the regular lattice.",
      ],
      discovery: {
        problem: "Copper conducts electricity; diamond does not — yet both are solids with billions of atoms bonded together. What single structural difference explains this?",
        idea: "In copper, each atom releases electrons into a delocalised sea — those electrons are free to move and carry charge. In diamond, all four outer electrons of each carbon are localised in specific C–C bonds; none are free to drift. The key is whether electrons are delocalised (free to move) or localised (fixed in bonds).",
      },
      whyItWorks: "The delocalised electrons in a metal are not 'owned' by any particular ion — they belong to the lattice as a whole. Applied voltage exerts a force on these free electrons, accelerating them through the lattice to produce a current. No such free charges exist in ionic solids (fixed ions) or simple covalent molecules (localised bond electrons).",
      strategies: ["Always mention 'delocalised electrons' and 'free to move' for conductivity", "Link malleability to layer sliding without bond breaking"],
    },

    {
      heading: "Structure, Bonding & Properties — Putting It Together",
      body: `The four bonding types produce four distinct structures, each with its own signature set of properties. The table below is a quick reference — learn to derive it, not just memorise it.

| Type | Particles | Forces broken on melting | mp/bp | Conducts solid? | Conducts liquid/aqueous? |
|---|---|---|---|---|---|
| Ionic | Ions | Electrostatic (strong) | High | No | Yes |
| Simple molecular | Molecules | Intermolecular (weak) | Low | No | No |
| Giant covalent | Atoms | Covalent bonds (strong) | Very high | No (except graphite) | No |
| Metallic | Ions + e− sea | Metallic (strong) | High | Yes | Yes |

**Strategy for exam questions asking you to explain a property:**
1. Identify the structure and bonding type.
2. State the particles present.
3. State whether relevant particles (ions, electrons) are free to move.
4. Link to the property in the question.

For melting/boiling point questions, always state **which forces must be overcome** and whether they are strong or weak.`,
      keyPoints: [
        "Simple molecular substances have low melting points because only weak intermolecular forces need to be overcome.",
        "Giant structures (ionic, giant covalent, metallic) all have high melting points — many strong bonds must be broken.",
        "Only metals and graphite conduct in the solid state — both have free, mobile electrons.",
        "Ionic compounds only conduct when molten or dissolved — ions must be free to move.",
        "Exam answers must link structure → particles → mobility → property.",
      ],
      strategies: ["Identify structure type first", "Name the force broken on melting", "State whether charge carriers are mobile"],
    },
  ],

  // ─── LEARN SMART ────────────────────────────────────────────────────────
  learn: {
    keyFacts: [
      "Ionic bonding = transfer of electrons from metal to non-metal; ions held by strong electrostatic attraction.",
      "Covalent bonding = sharing of electron pairs between non-metal atoms.",
      "Metallic bonding = positive ions in a sea of delocalised electrons.",
      "Giant ionic and metallic lattices have high melting points; simple molecules have low melting points.",
      "Ionic compounds conduct electricity when molten or dissolved in water (free ions), but not as a solid.",
      "Diamond: each C bonded to 4 others → very hard, does not conduct, very high melting point.",
      "Graphite: each C bonded to 3 others, one delocalised electron per C → conducts electricity, soft.",
      "Metals conduct because delocalised electrons are free to move through the lattice.",
      "Graphite is soft because weak forces exist between layers, allowing them to slide.",
      "N₂ has a triple bond (3 shared pairs) — the strongest and shortest diatomic covalent bond.",
    ],
    flashcards: [
      { front: "What is ionic bonding?", back: "Transfer of electrons from a metal atom to a non-metal atom, forming oppositely charged ions held by strong electrostatic attraction." },
      { front: "Why do ionic compounds have high melting points?", back: "Many strong electrostatic attractions between oppositely charged ions in the giant lattice must all be overcome — this requires a large amount of energy." },
      { front: "Why can ionic compounds conduct electricity when dissolved in water but not as a solid?", back: "In solution, the lattice breaks down to give free-moving ions that carry charge. In a solid, ions are fixed in position and cannot move." },
      { front: "What is a covalent bond?", back: "A shared pair of electrons between two non-metal atoms, with each atom achieving a full outer shell." },
      { front: "Why do simple molecular substances have low boiling points?", back: "Only the weak intermolecular forces between molecules need to be overcome — the strong covalent bonds within each molecule remain intact." },
      { front: "Why does diamond not conduct electricity?", back: "All four outer electrons of each carbon are used in strong localised covalent bonds — there are no free electrons or ions to carry charge." },
      { front: "Why does graphite conduct electricity?", back: "Each carbon bonds to only 3 others, leaving one delocalised electron per carbon free to move through the layers and carry charge." },
      { front: "Why is graphite soft?", back: "Graphite consists of hexagonal layers; only weak intermolecular forces act between layers, so layers can slide over each other easily." },
      { front: "What is metallic bonding?", back: "The attraction between a regular lattice of positive metal ions and a surrounding sea of delocalised electrons." },
      { front: "Why are metals malleable?", back: "Layers of positive ions can slide over each other without breaking bonds, because the delocalised electron sea simply reforms around new positions." },
      { front: "How many bonds does carbon form in diamond?", back: "4 (four single covalent bonds in a tetrahedral arrangement to four neighbouring carbon atoms)." },
      { front: "What type of bond is found in N₂?", back: "A triple covalent bond — three shared pairs of electrons between the two nitrogen atoms." },
    ],
    keyTerms: [
      { term: "Ionic bonding", definition: "The electrostatic attraction between oppositely charged ions formed by electron transfer from a metal to a non-metal." },
      { term: "Covalent bonding", definition: "The strong attraction between two nuclei and a shared pair of electrons between non-metal atoms." },
      { term: "Metallic bonding", definition: "The attraction between a lattice of positive metal ions and a sea of delocalised (free) electrons." },
      { term: "Giant ionic lattice", definition: "A three-dimensional regular arrangement of alternating positive and negative ions held by electrostatic forces extending throughout the structure." },
      { term: "Delocalised electrons", definition: "Electrons that are not associated with any one particular atom or bond and are free to move through the structure." },
      { term: "Intermolecular forces", definition: "Weak attractive forces between separate molecules (not the covalent bonds within a molecule)." },
      { term: "Giant covalent structure", definition: "A macromolecular lattice in which all atoms are joined by covalent bonds extending throughout, giving very high melting points." },
      { term: "Dot-and-cross diagram", definition: "A diagram showing outer-shell electrons as dots (one element) and crosses (another element) to illustrate bond formation." },
      { term: "Ion", definition: "An atom or group of atoms that has lost or gained electrons, giving it a positive or negative charge." },
      { term: "Electrostatic attraction", definition: "The force of attraction between particles carrying opposite electrical charges." },
      { term: "Lone pair", definition: "A pair of electrons in the outer shell of an atom that is not involved in a covalent bond." },
      { term: "Malleability", definition: "The ability of a material (typically a metal) to be hammered or rolled into thin sheets without breaking." },
    ],
  },

  // ─── QUICK QUIZ ─────────────────────────────────────────────────────────
  quiz: {
    mcq: [
      {
        id: "chem-bonding-mcq-q01",
        question: "Which statement best describes ionic bonding?",
        options: [
          "Sharing of electron pairs between two non-metal atoms",
          "Transfer of electrons from a metal to a non-metal, forming oppositely charged ions",
          "A sea of delocalised electrons surrounding positive metal ions",
          "Weak attractions between separate neutral molecules",
        ],
        answerIndex: 1,
        explanation: "Ionic bonding involves the transfer of one or more electrons from a metal atom to a non-metal atom, producing a positive ion (metal) and a negative ion (non-metal) held together by electrostatic attraction. Sharing electrons is covalent bonding; the electron sea describes metallic bonding.",
        difficulty: "warmup",
        guideRef: "Ionic Bonding",
      },
      {
        id: "chem-bonding-mcq-q02",
        question: "Why does solid sodium chloride not conduct electricity?",
        options: [
          "It has no ions",
          "Its ions are fixed in position and cannot move",
          "It has no electrons",
          "Its electrons are delocalised",
        ],
        answerIndex: 1,
        explanation: "Solid NaCl does contain ions (Na⁺ and Cl⁻), but in the solid state they are held rigidly in the lattice by strong electrostatic forces and cannot move. Electrical conduction requires mobile charge carriers. Delocalised electrons are a feature of graphite and metals, not ionic solids.",
        difficulty: "warmup",
        guideRef: "Properties of Ionic Compounds",
      },
      {
        id: "chem-bonding-mcq-q03",
        question: "Which of these molecules contains a triple covalent bond?",
        options: ["H₂O", "NH₃", "N₂", "CO₂"],
        answerIndex: 2,
        explanation: "N₂ contains a triple bond — three shared pairs of electrons between the two nitrogen atoms. H₂O and NH₃ have only single bonds. CO₂ has two double bonds (2 shared pairs each).",
        difficulty: "warmup",
        guideRef: "Covalent Bonding & Simple Molecules",
      },
      {
        id: "chem-bonding-mcq-q04",
        question: "Diamond has a very high melting point because:",
        options: [
          "It contains ions held by strong electrostatic attraction",
          "It has weak intermolecular forces between molecules",
          "Every carbon atom is joined to four others by strong covalent bonds throughout the giant structure",
          "It contains delocalised electrons that resist movement",
        ],
        answerIndex: 2,
        explanation: "Diamond is a giant covalent structure. Each carbon forms four strong covalent bonds to four neighbouring carbon atoms, producing a rigid 3-D network. An enormous number of these strong bonds must be broken to melt diamond, requiring very high temperatures. Diamond has no ions and no molecules.",
        difficulty: "core",
        hints: [
          "Think about what type of structure diamond has — is it molecular or giant?",
          "In a giant structure, what must happen for melting to occur?",
          "Consider the number and strength of the bonds that must be broken.",
        ],
        guideRef: "Giant Covalent Structures",
      },
      {
        id: "chem-bonding-mcq-q05",
        question: "Graphite conducts electricity. Which property of graphite is responsible for this?",
        options: [
          "It has Na⁺ and Cl⁻ ions that are free to move",
          "It has weak intermolecular forces between its layers",
          "Each carbon atom forms only three bonds, leaving one electron delocalised per carbon",
          "Its covalent bonds are longer than in diamond",
        ],
        answerIndex: 2,
        explanation: "In graphite, each carbon uses 3 of its 4 outer electrons for covalent bonds within the hexagonal layer. The remaining electron is not bound to any single atom — it is delocalised throughout the layer. These mobile electrons carry charge and enable conductivity. Graphite contains no ions; its weak interlayer forces explain softness, not conductivity.",
        difficulty: "core",
        hints: [
          "Count how many bonds each carbon makes in graphite vs diamond.",
          "What happens to the 'leftover' fourth electron in graphite?",
          "Define delocalised — what makes an electron able to carry current?",
        ],
        guideRef: "Giant Covalent Structures",
      },
      {
        id: "chem-bonding-mcq-q06",
        question: "Magnesium oxide (MgO) has a much higher melting point than sodium chloride (NaCl). The best explanation is:",
        options: [
          "MgO has a larger lattice than NaCl",
          "MgO has greater ionic charges (Mg²⁺ and O²⁻) so stronger electrostatic forces",
          "MgO molecules are heavier than NaCl molecules",
          "MgO contains covalent bonds but NaCl does not",
        ],
        answerIndex: 1,
        explanation: "Both MgO and NaCl are ionic compounds with giant lattices. The strength of the ionic attraction depends on the magnitude of the charges and the distance between ions. MgO has doubly-charged ions (Mg²⁺, O²⁻) producing much stronger electrostatic forces than NaCl (Na⁺, Cl⁻, each singly charged). Greater force → more energy to melt → higher melting point. Neither compound has molecules or covalent bonds.",
        difficulty: "challenge",
        hints: [
          "Both are ionic — focus on what differs: the charges on the ions.",
          "Coulomb's law: force ∝ q₁ × q₂ / r². What does doubling each charge do?",
          "Mg²⁺ × O²⁻ = charge product of 4; Na⁺ × Cl⁻ = charge product of 1.",
          "Stronger force → more energy to break lattice → higher melting point.",
        ],
        guideRef: "Properties of Ionic Compounds",
        strategy: "Coulomb's law reasoning",
      },
    ],
    qa: [
      {
        id: "chem-bonding-qa-q01",
        question: "Draw a dot-and-cross diagram for a molecule of methane (CH₄) and explain why methane has a very low boiling point (−161 °C). [4 marks]",
        marks: 4,
        modelAnswer: "Dot-and-cross diagram: central C with 4 single bonds to 4 H atoms; each bond shown as one C-electron (cross) and one H-electron (dot) between the atoms; C has no lone pairs; each H has no lone pairs. Methane has a very low boiling point because it is a simple molecular substance. The covalent bonds within each CH₄ molecule are strong, but the intermolecular forces between separate CH₄ molecules are very weak. Very little energy is needed to overcome these weak intermolecular forces, so methane boils at a very low temperature.",
        markScheme: [
          "Correct dot-and-cross diagram with C central and 4 H atoms / shared pairs shown correctly",
          "No lone pairs shown on C; one or two lone pairs not shown on H (H only needs 2 electrons total)",
          "States methane is a simple molecular substance",
          "Weak intermolecular forces between molecules (not 'weak bonds')",
          "Little energy needed to overcome intermolecular forces → low boiling point",
        ],
        commonError: "Students often say 'the bonds in methane are weak' — the covalent bonds are strong; it is the forces BETWEEN molecules that are weak. The covalent bonds are not broken on boiling.",
        guideRef: "Covalent Bonding & Simple Molecules",
        difficulty: "core",
        hints: [
          "For the diagram, start with C in the centre and add one H on each side — 4 H atoms total.",
          "Use a dot for H's electron and a cross for C's electron in each shared pair.",
          "To explain the boiling point, first state what TYPE of substance methane is.",
          "Distinguish between the forces within the molecule and the forces between molecules.",
        ],
        strategy: "draw a diagram, then identify structure type",
      },
      {
        id: "chem-bonding-qa-q02",
        question: "Compare the electrical conductivity of (i) solid NaCl, (ii) molten NaCl, and (iii) graphite. Explain each answer in terms of structure and bonding. [6 marks]",
        marks: 6,
        modelAnswer: "(i) Solid NaCl does NOT conduct electricity. Although it contains Na⁺ and Cl⁻ ions, these ions are held rigidly in fixed positions in the giant ionic lattice by strong electrostatic forces. They cannot move, so they cannot carry an electric current. (ii) Molten NaCl DOES conduct electricity. When heated until molten, the lattice breaks down and the Na⁺ and Cl⁻ ions become free to move throughout the liquid. These mobile ions act as charge carriers, allowing current to flow. (iii) Graphite DOES conduct electricity. In graphite, each carbon atom forms three covalent bonds to neighbours within a layer, leaving one electron per carbon atom delocalised — free to move throughout the layer. These mobile delocalised electrons act as charge carriers, carrying the current. This behaviour is similar to that of a metal.",
        markScheme: [
          "(i) Solid NaCl does not conduct",
          "Ions are fixed / cannot move in the solid lattice",
          "(ii) Molten NaCl does conduct",
          "Ions are free to move when molten / lattice breaks down",
          "(iii) Graphite does conduct",
          "Delocalised electrons free to move through the layers",
        ],
        commonError: "A very common error is to say solid NaCl 'has no electrons' — it does have electrons, but they are all localised in ionic bonds. The issue is mobility, not existence of charge carriers.",
        guideRef: "Structure, Bonding & Properties — Putting It Together",
        difficulty: "challenge",
        hints: [
          "For each case, ask: what charge carriers are present (ions? electrons?).",
          "Then ask: are those charge carriers free to move?",
          "For solid NaCl: ions exist but consider whether they can leave their lattice positions.",
          "For graphite: recall that only 3 of carbon's 4 outer electrons are used in bonds — what happens to the fourth?",
        ],
        strategy: "identify charge carrier, then assess mobility",
        solutions: [
          {
            label: "Structure-by-structure approach",
            steps: [
              "Identify the bonding type for each material: NaCl = ionic; graphite = giant covalent.",
              "For ionic materials, ask whether ions can move: NO in solid (fixed lattice) → no conduction; YES in liquid (lattice broken) → conduction.",
              "For graphite, identify the delocalised electron: 4 outer e⁻ on C, 3 used in bonds, 1 delocalised → conduction.",
              "State the conclusion for each with reason: 'does/does not conduct because...'",
            ],
          },
        ],
      },
      {
        id: "chem-bonding-qa-q03",
        question: "Silicon(IV) oxide (SiO₂) and ice (H₂O) are both oxides that are solids at room temperature. However, SiO₂ has a melting point of 1710 °C while ice melts at 0 °C. Explain this large difference in melting points in terms of structure and bonding. [5 marks]",
        marks: 5,
        modelAnswer: "Ice (H₂O) is a simple molecular solid. It consists of small, discrete H₂O molecules held together by weak intermolecular forces. Very little energy is needed to overcome these weak forces, so ice melts at a low temperature (0 °C). Silicon(IV) oxide has a giant covalent structure. Every silicon atom is bonded to four oxygen atoms by strong covalent bonds, and every oxygen atom bonds to two silicon atoms, forming a continuous three-dimensional network throughout the solid. To melt SiO₂, a very large number of strong covalent bonds must be broken throughout the entire structure — this requires an enormous amount of energy, giving a very high melting point (1710 °C).",
        markScheme: [
          "Ice / H₂O identified as a simple molecular substance",
          "Weak intermolecular forces between H₂O molecules",
          "Little energy to overcome weak forces → low melting point",
          "SiO₂ identified as a giant covalent structure",
          "Strong covalent bonds throughout the entire lattice",
          "Many strong bonds must be broken → large energy needed → very high melting point",
        ],
        commonError: "Students sometimes say 'SiO₂ has stronger bonds than H₂O' — this conflates bond strength (both have strong covalent bonds within each unit) with structure type. The key difference is giant vs. simple molecular, not bond strength per se.",
        guideRef: "Giant Covalent Structures",
        difficulty: "challenge",
        hints: [
          "Identify the structure type of each substance first — don't jump to explaining.",
          "For ice: are the forces BETWEEN molecules strong or weak?",
          "For SiO₂: how many atoms are covalently bonded together?",
          "The question asks about melting — what must be overcome during melting?",
        ],
        strategy: "compare structure types, then forces broken on melting",
      },
    ],
  },

  // ─── QUESTION BANK ──────────────────────────────────────────────────────
  questionBank: {
    mcqPapers: [
      {
        id: "chem-bonding-bank-mcq-1",
        title: "Chemical Bonding — MCQ Paper 1",
        description: "12 multiple-choice questions on ionic and covalent bonding, dot-and-cross diagrams, and simple molecular substances.",
        questions: [
          {
            id: "chem-bonding-bank-mcq1-q01",
            question: "When magnesium reacts with oxygen, the magnesium atom loses two electrons. What is the electron configuration of the Mg²⁺ ion formed?",
            options: ["2,8,2", "2,8", "2,8,8", "2,6"],
            answerIndex: 1,
            explanation: "Magnesium's electron configuration is 2,8,2. It loses 2 outer electrons to form Mg²⁺ with configuration 2,8 — the same as the noble gas neon. It does not gain the 8-electron outer shell; it loses electrons to reveal the already-full inner shell.",
            difficulty: "warmup",
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bank-mcq1-q02",
            question: "Which formula correctly represents magnesium chloride?",
            options: ["MgCl", "Mg₂Cl", "MgCl₂", "Mg₂Cl₃"],
            answerIndex: 2,
            explanation: "Mg forms Mg²⁺; Cl forms Cl⁻. To balance charges: one Mg²⁺ requires two Cl⁻ ions. Formula = MgCl₂. MgCl would imply Mg⁺ (not formed); Mg₂Cl would imply Mg⁰·⁵⁺ — impossible.",
            difficulty: "warmup",
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bank-mcq1-q03",
            question: "In a dot-and-cross diagram for H₂O, how many lone pairs are shown on the oxygen atom?",
            options: ["0", "1", "2", "3"],
            answerIndex: 2,
            explanation: "Oxygen has 6 outer electrons. It uses 2 to form single bonds with the two hydrogen atoms (one electron per bond from O). The remaining 4 electrons form 2 lone pairs. These lone pairs must be shown in the dot-and-cross diagram.",
            difficulty: "warmup",
            guideRef: "Covalent Bonding & Simple Molecules",
          },
          {
            id: "chem-bonding-bank-mcq1-q04",
            question: "Ammonia (NH₃) and methane (CH₄) are both simple molecular gases. Compared with methane, ammonia has a slightly higher boiling point. Which of the following best explains this?",
            options: [
              "Ammonia has stronger covalent bonds than methane",
              "Ammonia molecules have a lone pair on nitrogen, allowing stronger intermolecular attractions",
              "Ammonia is ionic, while methane is covalent",
              "Methane has a higher relative molecular mass than ammonia",
            ],
            answerIndex: 1,
            explanation: "Both are simple molecular substances with weak intermolecular forces. Ammonia (Mr = 17) has a lone pair on nitrogen and is a polar molecule, leading to stronger intermolecular attractions (including hydrogen bonding) than the non-polar methane (Mr = 16). This is an extension point — the core answer is that NH₃ has stronger intermolecular forces than CH₄. Option D is wrong: Mr(CH₄) = 16 < Mr(NH₃) = 17, so if anything mass favours CH₄ having a higher bp.",
            difficulty: "challenge",
            hints: [
              "Both are simple molecular — so boiling point depends on intermolecular forces.",
              "Consider polarity: which molecule has an uneven distribution of charge?",
              "The lone pair on N makes NH₃ polar — polar molecules attract each other more strongly.",
            ],
            guideRef: "Covalent Bonding & Simple Molecules",
            strategy: "compare intermolecular forces between molecules",
          },
          {
            id: "chem-bonding-bank-mcq1-q05",
            question: "Which substance has a giant ionic lattice and conducts electricity when dissolved in water?",
            options: ["Diamond", "Methane", "Copper", "Potassium bromide"],
            answerIndex: 3,
            explanation: "Potassium bromide (KBr) is an ionic compound — it forms a giant ionic lattice and produces free-moving K⁺ and Br⁻ ions when dissolved in water, enabling conduction. Diamond is giant covalent (no ions, no free electrons, no conduction). Methane is simple molecular. Copper is metallic — it conducts but not via ions in solution.",
            difficulty: "core",
            hints: [
              "Which options are ionic compounds? Ionic compounds conduct in solution.",
              "Eliminate covalent structures first.",
            ],
            guideRef: "Properties of Ionic Compounds",
          },
          {
            id: "chem-bonding-bank-mcq1-q06",
            question: "Which correctly describes the particles present in molten sodium chloride?",
            options: [
              "Na atoms and Cl atoms",
              "Na⁺ ions and Cl⁻ ions that are fixed in position",
              "Na⁺ ions and Cl⁻ ions that are free to move",
              "Na and Cl molecules",
            ],
            answerIndex: 2,
            explanation: "Molten NaCl still consists of Na⁺ and Cl⁻ ions (the ionic bonds have partially broken down by heating, freeing the ions from the lattice). These ions are free to move in the liquid and carry charge. They are not atoms or molecules, and they are not fixed — that describes the solid.",
            difficulty: "warmup",
            guideRef: "Properties of Ionic Compounds",
          },
        ],
      },
      {
        id: "chem-bonding-bank-mcq-2",
        title: "Chemical Bonding — MCQ Paper 2",
        description: "12 multiple-choice questions on giant structures, metallic bonding, and structure-to-property reasoning.",
        questions: [
          {
            id: "chem-bonding-bank-mcq2-q01",
            question: "Which property of metals is best explained by the 'sea of delocalised electrons'?",
            options: [
              "High density",
              "Electrical conductivity",
              "Brittleness",
              "Solubility in water",
            ],
            answerIndex: 1,
            explanation: "The delocalised electrons in the metallic lattice are free to drift under an applied voltage, carrying charge through the metal and producing an electric current. Density relates to how closely atoms pack. Metals are not brittle — they are malleable. Most metals do not dissolve in water.",
            difficulty: "warmup",
            guideRef: "Metallic Bonding",
          },
          {
            id: "chem-bonding-bank-mcq2-q02",
            question: "Why are metals malleable?",
            options: [
              "Ionic layers repel and slide apart cleanly",
              "Strong covalent bonds act as hinges",
              "Layers of ions can slide over each other while the electron sea maintains the bonding",
              "Intermolecular forces break easily",
            ],
            answerIndex: 2,
            explanation: "In a metal, positive ions are arranged in regular layers. A mechanical force can cause one layer to slide over another; as the ions move, the delocalised electron sea redistributes around them, maintaining the overall metallic bonding. No bonds are broken as in an ionic crystal (which would shatter). Metals have no molecules and no covalent bond hinges.",
            difficulty: "core",
            hints: [
              "What happens to the electron sea when the layer shifts?",
              "Compare with an ionic lattice — why do ionic crystals shatter?",
            ],
            guideRef: "Metallic Bonding",
          },
          {
            id: "chem-bonding-bank-mcq2-q03",
            question: "Silicon(IV) oxide (SiO₂) does not conduct electricity. Which statement explains this?",
            options: [
              "It is an ionic compound, so ions are fixed in the lattice",
              "It is a giant covalent structure with no free ions or electrons",
              "It is a simple molecular substance with no ions",
              "Its molecules are non-polar so electrons cannot move",
            ],
            answerIndex: 1,
            explanation: "SiO₂ is a giant covalent structure — all electrons are localised in Si–O covalent bonds; there are no free electrons and no ions. This rules out conduction. SiO₂ is not ionic (no ions), and it is not a simple molecular substance (there are no individual SiO₂ molecules — the lattice is continuous).",
            difficulty: "core",
            hints: [
              "First determine the structure type of SiO₂.",
              "Ask: are there free electrons? Are there free ions?",
            ],
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bank-mcq2-q04",
            question: "An unknown solid has a very high melting point, conducts electricity in the solid state, and is malleable. What is the bonding type?",
            options: ["Ionic", "Simple covalent", "Metallic", "Giant covalent"],
            answerIndex: 2,
            explanation: "The solid conducts electricity in the solid state — this rules out ionic (which only conducts when molten/dissolved) and giant covalent (which generally does not conduct, except graphite which is not malleable). Giant covalent structures are very hard, not malleable. Only metallic bonding explains all three: high mp (strong metal-electron sea attraction), solid-state conductivity (free electrons), and malleability (layers slide without breaking bonds).",
            difficulty: "core",
            hints: [
              "Which bonding types allow solid-state electrical conductivity?",
              "Which of those is also malleable?",
            ],
            guideRef: "Metallic Bonding",
            strategy: "elimination using multiple properties",
          },
          {
            id: "chem-bonding-bank-mcq2-q05",
            question: "Which of the following correctly matches a substance to its structure and an explanation of a property?",
            options: [
              "NaCl — simple molecular — dissolves to give free molecules in solution",
              "Diamond — giant covalent — very hard because of many strong directional covalent bonds",
              "Copper — ionic — conducts due to free-moving ions",
              "Chlorine (Cl₂) — giant covalent — high boiling point due to many strong bonds",
            ],
            answerIndex: 1,
            explanation: "Diamond is correctly identified as a giant covalent structure; its hardness is correctly attributed to the rigid three-dimensional network of strong directional C–C covalent bonds that resist all deformation. NaCl is ionic, not molecular, and dissolves to give free-moving ions (not molecules). Copper is metallic; it conducts via delocalised electrons, not ions. Cl₂ is simple molecular with a low boiling point.",
            difficulty: "challenge",
            hints: [
              "Work through each option: check the structure type is correct, then check the explanation.",
              "Option A: what structure is NaCl really?",
              "Option C: how does copper conduct — ions or electrons?",
              "Option D: what is the bp of Cl₂ — is it high?",
            ],
            guideRef: "Structure, Bonding & Properties — Putting It Together",
            strategy: "systematic elimination",
          },
          {
            id: "chem-bonding-bank-mcq2-q06",
            question: "Aluminium oxide (Al₂O₃) is an ionic compound with a melting point of 2072 °C, while aluminium chloride (AlCl₃) sublimes at just 180 °C and forms covalent bonds. Which explanation accounts for the very different melting behaviour?",
            options: [
              "Al₂O₃ has a larger molecular mass than AlCl₃",
              "Al₂O₃ has a giant ionic lattice with Al³⁺ (3+ charge) and O²⁻ (2− charge) producing very strong electrostatic forces; AlCl₃ is a simple covalent molecule with only weak intermolecular forces",
              "AlCl₃ has a giant covalent structure, so it should have a higher mp",
              "Al₂O₃ has weaker bonds because it is ionic",
            ],
            answerIndex: 1,
            explanation: "Al₂O₃ is an ionic compound with highly charged ions (Al³⁺ and O²⁻). The very high charges produce extremely strong electrostatic attractions across the giant lattice, requiring a huge amount of energy to melt — hence the very high melting point. AlCl₃, by contrast, forms a simple covalent (molecular) structure with only weak intermolecular forces between Al₂Cl₆ dimer units; very little energy is needed to overcome those weak forces. Molar mass is irrelevant here. AlCl₃ is not giant covalent.",
            difficulty: "challenge",
            hints: [
              "Identify the structure type of each: Al₂O₃ (ionic giant) vs AlCl₃ (simple molecular covalent).",
              "What forces need to be overcome to melt each?",
              "Consider the charges on Al³⁺ and O²⁻ — how do these compare to typical +1/−1 ions?",
              "Higher charges → stronger electrostatic force → more energy → higher mp.",
            ],
            guideRef: "Properties of Ionic Compounds",
            strategy: "compare structure type and charge magnitude",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "chem-bonding-bank-qa-1",
        title: "Chemical Bonding — Structured Questions Paper 1",
        description: "Structured questions on ionic and covalent bonding, dot-and-cross diagrams, and giant structures.",
        questions: [
          {
            id: "chem-bonding-bank-qa1-q01",
            question: "Magnesium reacts with oxygen to form magnesium oxide (MgO). (a) State what happens to electrons when the ionic bond forms in MgO. [2] (b) Draw a dot-and-cross diagram for MgO, showing the electronic configuration of each ion. [3] (c) Explain why MgO has a higher melting point than NaCl. [3]",
            marks: 8,
            modelAnswer: "(a) The magnesium atom loses 2 electrons (transferred to the oxygen atom). The oxygen atom gains 2 electrons. The resulting Mg²⁺ and O²⁻ ions are held together by strong electrostatic attraction. (b) Dot-and-cross diagram showing Mg²⁺ with 2 filled shells (configuration 2,8 — drawn as 2 inner electrons and 8 outer) and O²⁻ with 3 filled shells (configuration 2,8 — drawn as 2 inner and 8 outer). Use dots for Mg electrons and crosses for O electrons. Label each ion with its charge. (c) Both MgO and NaCl are ionic compounds with giant lattices. However, MgO has ions with greater charges (Mg²⁺ and O²⁻) compared with NaCl (Na⁺ and Cl⁻). The electrostatic force of attraction is proportional to the product of the charges, so MgO has much stronger electrostatic forces in its lattice. More energy is required to overcome these stronger forces, giving MgO a higher melting point than NaCl.",
            markScheme: [
              "(a) Mg loses 2 electrons / 2 electrons transferred from Mg to O",
              "(a) O gains 2 electrons",
              "(b) Mg²⁺ shown with 2,8 outer configuration (no outer shell electrons)",
              "(b) O²⁻ shown with 2,8 configuration (full outer shell of 8)",
              "(b) Ions correctly labelled with charges",
              "(c) Both have giant ionic lattices",
              "(c) MgO has higher charges on its ions (2+ and 2−) / Mg²⁺ and O²⁻",
              "(c) Stronger electrostatic forces / greater electrostatic attraction in MgO",
              "(c) More energy required to overcome forces → higher melting point",
            ],
            commonError: "Students often omit the charges on the ions in their diagrams, or forget to explain why higher charges mean stronger forces. The explanation must include the link 'greater charges → stronger forces → more energy needed → higher mp'.",
            guideRef: "Ionic Bonding",
            difficulty: "core",
            hints: [
              "(a) Identify which element is the metal (loses electrons) and which is the non-metal (gains electrons). How many electrons must move to give each a noble-gas configuration?",
              "(b) Draw Mg with 3 shells (2,8,2) first, then remove the outer 2 electrons for Mg²⁺. Draw O with 2 shells (2,6), then add 2 electrons to give O²⁻ (2,8).",
              "(c) Compare the charges: Mg²⁺ vs Na⁺, O²⁻ vs Cl⁻. Use Coulomb's law idea: force depends on charge × charge.",
              "(c) Link your comparison back to: stronger force → need more energy → higher melting point.",
            ],
            strategy: "identify charge difference, apply Coulomb reasoning",
          },
          {
            id: "chem-bonding-bank-qa1-q02",
            question: "Chlorine forms both a simple molecule (Cl₂) and can react to form ionic compounds. (a) Draw the dot-and-cross diagram for Cl₂, showing all outer-shell electrons. [3] (b) Explain why Cl₂ has a low boiling point (−34 °C). [3] (c) State the type of bonding in Cl₂ and explain why Cl₂ does not conduct electricity. [2]",
            marks: 8,
            modelAnswer: "(a) Cl₂ dot-and-cross diagram: two chlorine atoms, each drawn with an outer shell of 7 electrons (3 lone pairs and one bonding electron). The single covalent bond is shown as one dot and one cross between the two atoms (one shared pair). Each Cl therefore has 3 lone pairs and participates in 1 bonding pair — total 8 electrons in the outer shell. (b) Cl₂ is a simple molecular substance. Each molecule consists of two chlorine atoms joined by a strong covalent bond. Between the Cl₂ molecules there are only weak intermolecular forces. Very little energy is needed to overcome these weak forces, so Cl₂ boils at a low temperature. Note: the strong Cl–Cl covalent bond is NOT broken when Cl₂ boils. (c) Cl₂ has covalent bonding. Cl₂ does not conduct electricity because it has no free ions and no delocalised electrons — all electrons are localised in bonds or lone pairs within the molecule.",
            markScheme: [
              "(a) One shared pair (one dot + one cross) shown between Cl atoms",
              "(a) Three lone pairs shown on each Cl atom (6 electrons per Cl outside the bond)",
              "(a) Diagram roughly symmetric",
              "(b) Simple molecular substance",
              "(b) Weak intermolecular forces between Cl₂ molecules",
              "(b) Little energy to overcome weak forces → low boiling point",
              "(c) Covalent bonding stated",
              "(c) No free ions / no delocalised electrons → cannot conduct",
            ],
            commonError: "Students draw only the bonding pair and forget the lone pairs on each Cl — the diagram must show all 7 outer electrons per Cl (3 lone pairs + 1 bonding electron shown as part of the shared pair).",
            guideRef: "Covalent Bonding & Simple Molecules",
            difficulty: "core",
            hints: [
              "(a) Cl is in Group 7 — it has 7 outer electrons. Draw 6 as lone pairs (3 pairs) and 1 as the bonding electron.",
              "(b) Ask yourself: what type of structure is Cl₂? Then think: what forces hold the molecules together?",
              "(b) Importantly — state that the COVALENT bond is NOT broken on boiling.",
              "(c) For conductivity: ask 'are there any free charges to carry the current?'",
            ],
            strategy: "count outer electrons carefully for lone pairs",
          },
          {
            id: "chem-bonding-bank-qa1-q03",
            question: "Graphite and diamond are both allotropes of carbon. Compare and contrast their structures and explain how the differences account for the properties listed in the table: [8]\n\n| Property | Diamond | Graphite |\n|---|---|---|  \n| Melting point | >3500 °C | ∼3650 °C (sublimes) |\n| Hardness | Extremely hard | Soft, flaky |\n| Electrical conductivity | Does not conduct | Conducts electricity |",
            marks: 8,
            modelAnswer: "Both diamond and graphite are giant covalent structures consisting entirely of carbon atoms bonded by strong covalent bonds. Both therefore have very high melting/sublimation points because an enormous number of strong C–C covalent bonds must be broken throughout the lattice — this requires a very large amount of energy. The key differences: In diamond, each carbon atom forms 4 covalent bonds in a rigid, three-dimensional tetrahedral network. All four outer electrons of each carbon are used in bonds. This continuous 3-D bonding in all directions makes diamond extremely hard — there is no easy plane of cleavage and every direction is reinforced by strong bonds. There are no free electrons, so diamond does not conduct. In graphite, each carbon atom forms only 3 covalent bonds, producing flat hexagonal layers. The fourth outer electron from each carbon is delocalised throughout the layer — it is not bound to any particular atom. These delocalised electrons move freely and carry charge, giving graphite its electrical conductivity (similar to a metal). The layers are held to each other only by weak intermolecular forces (not covalent bonds). These weak interlayer forces mean the layers can slide over each other easily — making graphite soft and slippery.",
            markScheme: [
              "Both are giant covalent structures / all C atoms bonded throughout",
              "Both have very high mp because many strong covalent bonds must be broken",
              "Diamond: each C bonds to 4 others in a 3-D network",
              "Diamond: all 4 outer electrons in bonds → no free electrons → does not conduct",
              "Diamond: rigid 3-D bonding in all directions → extremely hard",
              "Graphite: each C bonds to 3 others forming layers",
              "Graphite: one delocalised electron per C / fourth electron delocalised",
              "Delocalised electrons free to move → conducts electricity",
              "Weak forces between layers → layers slide → soft/flaky",
            ],
            commonError: "Students often state that 'graphite has weak bonds' — this is wrong. The C–C bonds within each layer of graphite are strong. It is only the forces BETWEEN layers that are weak.",
            guideRef: "Giant Covalent Structures",
            difficulty: "challenge",
            hints: [
              "Start by identifying what diamond and graphite have in common (both giant covalent structures of C).",
              "For diamond: count the bonds on each C and consider whether any electrons are left over.",
              "For graphite: count the bonds (3) and ask what happens to the 4th outer electron.",
              "For hardness vs softness: think about whether there are strong bonds in ALL directions or just within layers.",
            ],
            strategy: "compare bond count per C atom, then deduce electron availability and structural rigidity",
            solutions: [
              {
                label: "Electrons-first approach",
                steps: [
                  "C has 4 outer electrons. In diamond: all 4 → 4 bonds → none left. In graphite: 3 → bonds + 1 delocalised.",
                  "Delocalised electron in graphite → conducts (like metal free electrons). No delocalised e⁻ in diamond → no conduction.",
                  "Diamond: 4 bonds per C in all 3D directions → rigid → hard.",
                  "Graphite: only 3 bonds per C within layers → layers held by weak forces → soft.",
                  "Both: many strong C-C bonds throughout the structure → very high melting/sublimation points.",
                ],
              },
            ],
          },
          {
            id: "chem-bonding-bank-qa1-q04",
            question: "A student is given four unlabelled solids: copper metal (Cu), iodine (I₂), calcium oxide (CaO), and silicon(IV) oxide (SiO₂). The student carries out three tests: measures the melting point, tests electrical conductivity in solid form, and tests solubility in water. The results are shown below:\n\n| Solid | Melting point | Solid conductivity | Dissolves in water? |\n|---|---|---|---|\n| W | 1085 °C | Yes | No |\n| X | 114 °C | No | No |\n| Y | 2614 °C | No | No |\n| Z | 2580 °C | No | Yes (conducts in solution) |\n\nIdentify each solid (W, X, Y, Z) and justify each identification by reference to bonding and structure. [8]",
            marks: 8,
            modelAnswer: "W is copper (Cu). Evidence: high melting point (consistent with strong metallic bonding in the giant metallic lattice) and electrical conductivity in the solid state (delocalised electrons are free to move). Copper is not soluble in water. X is iodine (I₂). Evidence: low melting point (114 °C) consistent with a simple molecular structure — only weak intermolecular forces between I₂ molecules need to be overcome. It does not conduct (no free ions or electrons) and is not soluble in water. Y is silicon(IV) oxide (SiO₂). Evidence: very high melting point (2614 °C) indicates a giant covalent structure with many strong Si–O covalent bonds throughout. It does not conduct (no free electrons or ions) and does not dissolve in water (polar solvent cannot break the lattice). Z is calcium oxide (CaO). Evidence: very high melting point (2580 °C) due to its giant ionic lattice — Ca²⁺ and O²⁻ have high charges producing very strong electrostatic forces. It dissolves in water (ionic compounds often dissolve in the polar solvent) and the solution conducts because Ca²⁺ and OH⁻ ions are free to move (CaO reacts with water: CaO + H₂O → Ca(OH)₂).",
            markScheme: [
              "W = copper; conducts in solid state → metallic bonding / delocalised electrons",
              "W: high mp consistent with strong metallic lattice",
              "X = iodine; low mp → simple molecular / weak intermolecular forces only",
              "X: no conduction → no free ions or electrons",
              "Y = SiO₂; very high mp + no conduction → giant covalent structure",
              "Y: no free electrons or ions in giant covalent lattice",
              "Z = CaO; high mp + dissolves in water + solution conducts → giant ionic lattice",
              "Z: free-moving ions in solution carry charge",
            ],
            commonError: "Students often confuse Y and Z because both have very high melting points. The distinguishing clue is solubility and conductivity in solution: ionic compounds (CaO) dissolve in water and conduct; giant covalent structures (SiO₂) do not.",
            guideRef: "Structure, Bonding & Properties — Putting It Together",
            difficulty: "challenge",
            hints: [
              "Start with the easiest to identify: which substance has a LOW melting point? That must be the simple molecular one.",
              "Which substance conducts in the SOLID state? Only metals do — this identifies the metallic substance.",
              "Of the two remaining high-mp non-conductors in solid form: which one dissolves and conducts in solution? Ionic compounds dissolve in water; giant covalent structures generally do not.",
              "The fourth solid is therefore the giant covalent structure.",
            ],
            strategy: "elimination — use each test result to rule out structure types",
            solutions: [
              {
                label: "Elimination table method",
                steps: [
                  "Solid-state conductivity narrows to metallic: only W. W = Cu.",
                  "Low melting point (114 °C) → simple molecular. X = I₂.",
                  "Remaining Y and Z: both high mp, non-conducting solid. Z dissolves + conducts in solution → ionic. Z = CaO.",
                  "Y: high mp, no conduction, no dissolution → giant covalent. Y = SiO₂.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "chem-bonding-bank-qa-2",
        title: "Chemical Bonding — Structured Questions Paper 2",
        description: "Structured questions on metallic bonding, dot-and-cross analysis, and synoptic structure-to-property reasoning.",
        questions: [
          {
            id: "chem-bonding-bank-qa2-q01",
            question: "Iron is a metal used to make steel. (a) Describe metallic bonding in iron. [3] (b) Explain why iron can be bent into shape (is malleable) without breaking. [3] (c) Steel is an alloy of iron and carbon. Suggest why steel is harder than pure iron. [2]",
            marks: 8,
            modelAnswer: "(a) In iron, each atom loses its outer electrons to form a positive iron ion. The ions are arranged in a regular lattice. The released electrons are delocalised — they do not belong to any particular ion but move freely throughout the whole structure. The metallic bond is the strong electrostatic attraction between the lattice of positive ions and the surrounding sea of delocalised electrons. (b) When a force is applied to iron, the layers of positive ions can slide over each other. As they slide, the delocalised electron sea adjusts and maintains the attraction between the ions. No bonds are permanently broken, so the metal is not destroyed — it is permanently deformed (bent) but remains intact. This is why metals are malleable. (c) In steel, carbon atoms (which are much smaller than iron atoms) occupy spaces between the iron ions in the lattice, or substitute for some iron ions. This disrupts the regular arrangement of the lattice and makes it harder for layers to slide over one another. Therefore steel is harder and stronger than pure iron.",
            markScheme: [
              "(a) Lattice of positive ions",
              "(a) Sea of delocalised electrons",
              "(a) Strong electrostatic attraction between ions and electrons",
              "(b) Layers of ions slide when force applied",
              "(b) Electron sea adjusts/reforms around new positions / no bonds broken",
              "(b) Metal deforms without breaking → malleable",
              "(c) Carbon atoms (different size) disrupt the regular lattice",
              "(c) Harder for layers to slide → harder/stronger",
            ],
            commonError: "Students often say 'the bonds break and reform' when explaining malleability — this is vague and not credited. The electron sea does not 'break'; it simply redistributes. The key point is that no bonds are permanently broken.",
            guideRef: "Metallic Bonding",
            difficulty: "core",
            hints: [
              "(a) Name the two types of particle in the metallic lattice — what are they and what holds them together?",
              "(b) Imagine one layer sliding over another. What happens to the electron sea — does it stop the sliding or accommodate it?",
              "(c) Think about why a regular lattice slides easily. What would happen if some atoms were a different size?",
            ],
            strategy: "visualise layer sliding; link disruption to hardness",
          },
          {
            id: "chem-bonding-bank-qa2-q02",
            question: "Carbon dioxide (CO₂) and silicon(IV) oxide (SiO₂) have the same empirical formula in terms of the ratio of atoms (one C or Si for every two O atoms). However, CO₂ is a gas at room temperature while SiO₂ is a solid that melts at 1710 °C. (a) Name the type of structure of each substance. [2] (b) Explain the difference in melting points using ideas about bonding and structure. [5]",
            marks: 7,
            modelAnswer: "(a) CO₂: simple molecular (covalent) structure. SiO₂: giant covalent (macromolecular) structure. (b) In CO₂, each carbon atom forms two double covalent bonds with two separate oxygen atoms. This produces small, discrete CO₂ molecules. The covalent bonds within each molecule are strong, but the intermolecular forces between separate CO₂ molecules are very weak. Only the weak intermolecular forces need to be overcome to melt or boil CO₂, so it requires very little energy and has a very low melting point (it is actually a gas at room temperature). In SiO₂, every silicon atom is bonded to four oxygen atoms by strong covalent bonds, and every oxygen atom bonds to two silicon atoms. This creates a continuous three-dimensional covalent network — there are no separate SiO₂ molecules. To melt SiO₂, an enormous number of strong Si–O covalent bonds throughout the giant lattice must be broken. This requires a very large amount of energy, giving SiO₂ a very high melting point of 1710 °C.",
            markScheme: [
              "(a) CO₂: simple molecular",
              "(a) SiO₂: giant covalent",
              "(b) CO₂ forms discrete molecules / small molecules",
              "(b) Only weak intermolecular forces between CO₂ molecules",
              "(b) Little energy to overcome weak forces → very low mp",
              "(b) SiO₂: continuous covalent network / no discrete molecules",
              "(b) Many strong Si-O covalent bonds throughout the lattice",
              "(b) Much more energy required → very high mp",
            ],
            commonError: "Students often describe CO₂ and SiO₂ as having 'the same bonds' because both contain C=O or Si–O. The critical difference is not bond strength but structural type: discrete molecules vs. infinite 3-D network.",
            guideRef: "Giant Covalent Structures",
            difficulty: "core",
            hints: [
              "(a) Is CO₂ a small, discrete molecule or does it extend continuously? What about SiO₂?",
              "(b) For CO₂: what forces act BETWEEN separate molecules?",
              "(b) For SiO₂: what must be broken to melt the solid? Count how many bonds — is it a few or many?",
              "(b) For each substance, link 'force to overcome' to 'energy needed' to 'melting point'.",
            ],
            strategy: "compare structure type before comparing forces",
          },
          {
            id: "chem-bonding-bank-qa2-q03",
            question: "A student wants to test whether four solutions — aqueous NaCl, aqueous glucose (C₆H₁₂O₆), molten NaCl, and liquid mercury (Hg) — conduct electricity. Predict and explain the result for each. [8]",
            marks: 8,
            modelAnswer: "Aqueous NaCl: conducts electricity. When NaCl dissolves in water, the lattice breaks down to give free-moving Na⁺ and Cl⁻ ions in solution. These mobile ions carry charge and allow current to flow. Aqueous glucose (C₆H₁₂O₆): does NOT conduct electricity. Glucose is a simple molecular (covalent) compound. When it dissolves in water, it does not form ions — it disperses as neutral molecules. There are no free ions or electrons to carry charge, so the solution does not conduct. Molten NaCl: conducts electricity. Heating NaCl until molten breaks down the ionic lattice, freeing the Na⁺ and Cl⁻ ions to move. These mobile ions carry charge and allow current to flow. Liquid mercury (Hg): conducts electricity. Mercury is a metal. Even in its liquid state, mercury retains delocalised (free) electrons that can move under an applied voltage. These mobile electrons carry charge, enabling conduction.",
            markScheme: [
              "Aqueous NaCl: conducts",
              "Free-moving Na⁺ and Cl⁻ ions in solution carry charge",
              "Aqueous glucose: does not conduct",
              "Dissolves as neutral molecules / no ions formed in solution",
              "Molten NaCl: conducts",
              "Ions (Na⁺ and Cl⁻) freed from lattice and free to move",
              "Liquid Hg: conducts",
              "Retains delocalised/free electrons even as a liquid — electrons carry charge",
            ],
            commonError: "Students sometimes predict that glucose solution conducts because it is a solution — they confuse the act of dissolving with forming ions. Only electrolytes (compounds that form ions in solution) conduct; glucose is a non-electrolyte.",
            guideRef: "Structure, Bonding & Properties — Putting It Together",
            difficulty: "challenge",
            hints: [
              "For each case, ask: what charge carriers are present (ions? electrons?)?",
              "For aqueous solutions: does the dissolved substance release ions, or stay as neutral molecules?",
              "For molten NaCl: compare with solid NaCl — what changes when it melts?",
              "For mercury: it is a metal — what do all metals retain even when melted?",
            ],
            strategy: "identify charge carrier type and assess mobility for each case",
          },
          {
            id: "chem-bonding-bank-qa2-q04",
            question: "Nitrogen gas (N₂) is very unreactive under normal conditions. (a) Draw the dot-and-cross diagram for N₂, showing all outer-shell electrons. [3] (b) Explain why nitrogen molecules are very stable (unreactive). [2] (c) In the Haber process, nitrogen and hydrogen react together to form ammonia. Suggest why high temperatures and pressures and a catalyst are required. [3]",
            marks: 8,
            modelAnswer: "(a) N₂ dot-and-cross: Two N atoms drawn with their outer shells. Each N has 5 outer electrons. Three are shared (one dot from N, one cross from N per pair) as three bonding pairs — shown as three shared pairs between the atoms. Each N also has one lone pair (2 non-bonding electrons). Total outer electrons per N: 3 bonding + 2 non-bonding = 5. The diagram shows a triple bond between the two N atoms. (b) N₂ contains a triple covalent bond (three shared pairs of electrons) between the two nitrogen atoms. This triple bond is extremely strong (bond energy ≈ 945 kJ mol⁻¹). A very large amount of energy is required to break the N≡N bond, so nitrogen molecules are very stable and unreactive under normal conditions. (c) High temperature is needed to provide enough energy (activation energy) to break the very strong N≡N triple bond and the H–H bonds so that the atoms can react. High pressure increases the concentration of gas molecules, increasing the rate of successful collisions and also favouring the forward reaction (which produces fewer gas molecules — 4 mol gas → 2 mol NH₃). A catalyst (iron) provides an alternative reaction pathway with a lower activation energy, increasing the rate of reaction without being consumed.",
            markScheme: [
              "(a) Triple bond shown as 3 shared pairs between the N atoms",
              "(a) One lone pair on each N atom",
              "(a) Correct use of dots and crosses / N has 5 outer electrons total",
              "(b) Triple bond / N≡N is very strong (high bond energy)",
              "(b) Large amount of energy needed to break the bond → very stable / unreactive",
              "(c) High temperature to provide activation energy / break strong N≡N and H-H bonds",
              "(c) High pressure increases collision frequency / rate; also favours fewer gas molecules side",
              "(c) Catalyst provides lower activation energy pathway / increases rate",
            ],
            commonError: "Students often say nitrogen is unreactive because it is 'inert like a noble gas'. Nitrogen is NOT a noble gas — it is unreactive because its N≡N triple bond has an extremely high bond energy, not because it has a full outer shell.",
            guideRef: "Covalent Bonding & Simple Molecules",
            difficulty: "challenge",
            hints: [
              "(a) N is in Group 5 — 5 outer electrons. Three will be shared in the triple bond; 2 remain as a lone pair.",
              "(b) Count the bonds in N₂. What does a triple bond mean for bond strength?",
              "(c) Think about what must happen before any reaction: which bonds need to break?",
              "(c) The three conditions (temperature, pressure, catalyst) each address a different aspect of the rate or yield.",
            ],
            strategy: "link bond count to stability; apply collision theory to Haber conditions",
            solutions: [
              {
                label: "Bond-energy reasoning",
                steps: [
                  "N≡N bond energy ≈ 945 kJ mol⁻¹ — among the highest for any diatomic bond.",
                  "Before N₂ can react, this bond must be broken — requiring 945 kJ per mole of N₂.",
                  "At room temperature, few collisions have sufficient energy to do this → reaction is extremely slow.",
                  "High temperature provides the activation energy to break N≡N and H–H (436 kJ mol⁻¹) bonds.",
                  "Catalyst lowers activation energy, increasing the fraction of collisions that lead to reaction.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
