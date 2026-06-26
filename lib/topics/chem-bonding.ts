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
        id: "chem-bonding-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Ionic bonding, ion charges, dot-and-cross diagrams and ionic-compound formulae.",
        questions: [
          {
            id: "chem-bonding-bm1-01",
            question: "Which type of element loses electrons when an ionic bond forms?",
            options: ["A non-metal", "A metal", "A noble gas", "A halogen"],
            answerIndex: 1,
            explanation: "In ionic bonding the metal atom loses its outer electron(s) to become a positive ion (cation); the non-metal atom gains those electrons to become a negative ion (anion). Halogens are non-metals and gain electrons; noble gases already have full shells and do not normally form ions.",
            difficulty: "warmup",
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bm1-02",
            question: "What is the charge on an ion formed by a Group 2 metal such as calcium?",
            options: ["+1", "+2", "−2", "−1"],
            answerIndex: 1,
            explanation: "Group 2 metals have 2 electrons in their outer shell. They lose both to reach a full outer shell, forming a 2+ ion (e.g. Ca → Ca²⁺ + 2e⁻). Metals form positive ions, ruling out the negative options.",
            difficulty: "warmup",
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bm1-03",
            question: "An oxygen atom (Group 6) gains electrons to form an ion. What is that ion?",
            options: ["O⁺", "O²⁺", "O²⁻", "O⁻"],
            answerIndex: 2,
            explanation: "Oxygen has 6 outer electrons and needs 2 more to complete its outer shell of 8. It gains 2 electrons, becoming O²⁻ with the electron configuration of neon (2,8). Non-metals gain electrons, so the ion is negative.",
            difficulty: "warmup",
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bm1-04",
            question: "In a dot-and-cross diagram of sodium chloride, how is the bonding between Na⁺ and Cl⁻ best described?",
            options: [
              "A shared pair of electrons between the two ions",
              "A strong electrostatic attraction between the oppositely charged ions",
              "A sea of delocalised electrons around the ions",
              "Weak intermolecular forces between separate molecules",
            ],
            answerIndex: 1,
            explanation: "Once the electron has transferred from Na to Cl, there are no shared electrons. The bond is the strong electrostatic attraction between the Na⁺ and Cl⁻ ions. Sharing is covalent; the electron sea is metallic; intermolecular forces act between molecules, not ions.",
            difficulty: "core",
            hints: [
              "After electron transfer, are any electrons shared between Na and Cl?",
              "What kind of force holds two oppositely charged particles together?",
              "Name the type of force — it is described by Coulomb's law.",
            ],
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bm1-05",
            question: "Which of these compounds has the formula derived from a +3 metal ion and a −1 non-metal ion?",
            options: ["AlCl₂", "AlCl₃", "Al₃Cl", "Al₂Cl₃"],
            answerIndex: 1,
            explanation: "Aluminium forms Al³⁺ and chlorine forms Cl⁻. To balance a 3+ charge you need three 1− ions, giving AlCl₃. The total positive charge (+3) then equals the total negative charge (3 × −1 = −3), so the compound is neutral.",
            difficulty: "core",
            hints: [
              "Write down the charge on each ion: Al³⁺ and Cl⁻.",
              "How many Cl⁻ ions are needed to cancel a single +3 charge?",
              "The total positive charge must equal the total negative charge.",
            ],
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bm1-06",
            question: "Calcium reacts with fluorine. Using their ion charges (Ca²⁺ and F⁻), what is the formula of the product?",
            options: ["CaF", "CaF₂", "Ca₂F", "Ca₂F₃"],
            answerIndex: 1,
            explanation: "Ca²⁺ has a 2+ charge; each F⁻ has a 1− charge. Two F⁻ ions are needed to balance one Ca²⁺, giving CaF₂. This is the same ratio reasoning as MgCl₂.",
            difficulty: "core",
            hints: [
              "Find the charge on each ion from its group: Group 2 metal and Group 7 non-metal.",
              "How many −1 ions balance one +2 ion?",
              "Write the metal first, then the non-metal with its subscript.",
            ],
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bm1-07",
            question: "In the dot-and-cross diagram for the formation of Na⁺ from a sodium atom, the Na⁺ ion is shown with which outer shell?",
            options: [
              "An outer shell of 1 electron",
              "An empty outermost shell, with 2,8 shown",
              "An outer shell of 8 electrons drawn as crosses",
              "An outer shell of 2 electrons",
            ],
            answerIndex: 1,
            explanation: "Sodium is 2,8,1. Losing the single outer electron leaves the configuration 2,8 — the third shell is now empty, so the Na⁺ ion is drawn with a complete 2,8 arrangement and no electrons in what was its outer shell. The lost electron appears on the chlorine, not on the sodium.",
            difficulty: "core",
            hints: [
              "Write sodium's configuration: 2,8,1.",
              "Which electron is lost when Na⁺ forms?",
              "After losing that electron, what is the new outer (full) shell?",
            ],
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bm1-08",
            question: "Which pair of ions would combine in a 1:1 ratio to form a neutral ionic compound?",
            options: ["Mg²⁺ and Cl⁻", "Na⁺ and O²⁻", "K⁺ and Br⁻", "Al³⁺ and O²⁻"],
            answerIndex: 2,
            explanation: "K⁺ (1+) and Br⁻ (1−) balance exactly in a 1:1 ratio, giving KBr. Mg²⁺ and Cl⁻ give MgCl₂ (1:2); Na⁺ and O²⁻ give Na₂O (2:1); Al³⁺ and O²⁻ give Al₂O₃ (2:3).",
            difficulty: "core",
            hints: [
              "A 1:1 ratio means the two ion charges must be equal in size.",
              "Compare the magnitude of the positive and negative charge in each pair.",
              "Look for one +1 ion paired with one −1 ion.",
            ],
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bm1-09",
            question: "Lithium oxide is formed from lithium (Group 1) and oxygen (Group 6). Which equation correctly shows the electron transfer for the metal ions formed?",
            options: [
              "2 Li → 2 Li⁺ + 2e⁻",
              "Li → Li⁻ + e⁻",
              "Li + e⁻ → Li⁺",
              "2 Li → 2 Li²⁺ + 4e⁻",
            ],
            answerIndex: 0,
            explanation: "Each lithium atom loses 1 electron to form Li⁺. The single O atom needs 2 electrons (to become O²⁻), so two Li atoms each donate one electron: 2 Li → 2 Li⁺ + 2e⁻, giving the formula Li₂O. Lithium forms +1 ions only, ruling out Li²⁺ and the gain of electrons.",
            difficulty: "challenge",
            hints: [
              "Lithium is in Group 1 — how many electrons does each atom lose?",
              "Oxygen needs 2 electrons; how many Li atoms supply them?",
              "Balance the electrons lost with the electrons the oxygen gains.",
            ],
            strategy: "Balance electrons lost against electrons gained",
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bm1-10",
            question: "Aluminium oxide has the formula Al₂O₃. What does this tell you about the charges on the aluminium and oxide ions?",
            options: [
              "Al²⁺ and O³⁻",
              "Al³⁺ and O²⁻",
              "Al⁺ and O⁻",
              "Al³⁻ and O²⁺",
            ],
            answerIndex: 1,
            explanation: "The formula Al₂O₃ means total charges balance: 2 × Al + 3 × O = 0. With Al³⁺ and O²⁻: 2(+3) + 3(−2) = +6 − 6 = 0. Aluminium is a metal (positive ion) and oxygen a non-metal (negative ion), so Al³⁻/O²⁺ is impossible.",
            difficulty: "challenge",
            hints: [
              "Use the subscripts: 2 aluminium ions to 3 oxide ions.",
              "Set up: 2 × (Al charge) + 3 × (O charge) = 0.",
              "Oxygen is Group 6, so the oxide ion is 2−; solve for the Al charge.",
            ],
            strategy: "Work backwards from the formula to the charges",
            guideRef: "Ionic Bonding",
          },
        ],
      },
      {
        id: "chem-bonding-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Properties of ionic compounds and covalent bonding in simple molecules.",
        questions: [
          {
            id: "chem-bonding-bm2-01",
            question: "Why do ionic compounds generally have high melting points?",
            options: [
              "Weak intermolecular forces must be overcome",
              "Many strong electrostatic attractions between ions must be overcome",
              "Covalent bonds within molecules must be broken",
              "Delocalised electrons must be removed",
            ],
            answerIndex: 1,
            explanation: "An ionic compound is a giant lattice of oppositely charged ions held by many strong electrostatic attractions. Melting requires enough energy to overcome a huge number of these strong forces, so the melting point is high. Ionic compounds have no molecules and no delocalised electrons.",
            difficulty: "warmup",
            guideRef: "Properties of Ionic Compounds",
          },
          {
            id: "chem-bonding-bm2-02",
            question: "Under which condition does sodium chloride conduct electricity?",
            options: [
              "As a solid crystal",
              "When dissolved in water",
              "Never, because it has no charged particles",
              "Only when frozen below 0 °C",
            ],
            answerIndex: 1,
            explanation: "Dissolving NaCl in water breaks down the lattice into free-moving Na⁺ and Cl⁻ ions that carry charge, so the solution conducts. As a solid the ions are locked in place and cannot move, so it does not conduct.",
            difficulty: "warmup",
            guideRef: "Properties of Ionic Compounds",
          },
          {
            id: "chem-bonding-bm2-03",
            question: "How many electrons are shared in a single covalent bond?",
            options: ["1", "2", "3", "4"],
            answerIndex: 1,
            explanation: "A single covalent bond is one shared pair of electrons — that is 2 electrons in total, one contributed by each atom. A double bond shares 2 pairs (4 electrons) and a triple bond shares 3 pairs (6 electrons).",
            difficulty: "warmup",
            guideRef: "Covalent Bonding & Simple Molecules",
          },
          {
            id: "chem-bonding-bm2-04",
            question: "Which substance is made of simple molecules?",
            options: ["Sodium chloride", "Carbon dioxide", "Silicon(IV) oxide", "Copper"],
            answerIndex: 1,
            explanation: "Carbon dioxide (CO₂) consists of small, discrete molecules held to one another by weak intermolecular forces. Sodium chloride is a giant ionic lattice, silicon(IV) oxide is a giant covalent structure, and copper is a giant metallic lattice.",
            difficulty: "warmup",
            guideRef: "Covalent Bonding & Simple Molecules",
          },
          {
            id: "chem-bonding-bm2-05",
            question: "In a molecule of ammonia (NH₃), how many bonding pairs and lone pairs are on the nitrogen atom?",
            options: [
              "2 bonding pairs and 2 lone pairs",
              "3 bonding pairs and 1 lone pair",
              "4 bonding pairs and 0 lone pairs",
              "3 bonding pairs and 0 lone pairs",
            ],
            answerIndex: 1,
            explanation: "Nitrogen has 5 outer electrons. It forms 3 single bonds with the 3 hydrogen atoms (3 bonding pairs, using 3 of its electrons) and the remaining 2 electrons form 1 lone pair. So nitrogen has 3 bonding pairs and 1 lone pair.",
            difficulty: "core",
            hints: [
              "Nitrogen is in Group 5 — how many outer electrons does it have?",
              "It forms a bond with each of the 3 hydrogen atoms.",
              "Outer electrons not used in bonding form lone pairs (in pairs of 2).",
            ],
            guideRef: "Covalent Bonding & Simple Molecules",
          },
          {
            id: "chem-bonding-bm2-06",
            question: "Why does carbon dioxide not conduct electricity?",
            options: [
              "Its molecules are too large to move",
              "It contains no free ions or delocalised electrons to carry charge",
              "Its covalent bonds are too weak",
              "It contains positive ions that repel current",
            ],
            answerIndex: 1,
            explanation: "Carbon dioxide is a simple molecular substance. Its electrons are all held in localised covalent bonds and it has no ions, so there are no mobile charge carriers. Conduction requires free ions or free electrons, which CO₂ lacks.",
            difficulty: "core",
            hints: [
              "Electrical conduction needs charged particles that are free to move.",
              "Does CO₂ contain ions? Does it contain delocalised electrons?",
              "Where are all the electrons in CO₂ located?",
            ],
            guideRef: "Covalent Bonding & Simple Molecules",
          },
          {
            id: "chem-bonding-bm2-07",
            question: "Which statement about the carbon dioxide molecule (O=C=O) is correct?",
            options: [
              "It contains two single bonds",
              "It contains two double bonds, each made of two shared pairs",
              "It contains one triple bond",
              "It contains four lone pairs on the carbon atom",
            ],
            answerIndex: 1,
            explanation: "In CO₂ the carbon forms a double bond to each oxygen. Each double bond is 2 shared pairs of electrons, so carbon shares 4 pairs in total and has a full outer shell of 8. There is no triple bond, and carbon has no lone pairs.",
            difficulty: "core",
            hints: [
              "The structure is written O=C=O — what does each '=' represent?",
              "How many shared pairs are in one double bond?",
              "Count the total shared pairs around carbon to check it reaches 8 electrons.",
            ],
            guideRef: "Covalent Bonding & Simple Molecules",
          },
          {
            id: "chem-bonding-bm2-08",
            question: "Solid lead(II) bromide does not conduct electricity, but when it is melted it does. The best explanation is that on melting:",
            options: [
              "Electrons become delocalised",
              "The ions become free to move and carry charge",
              "Covalent bonds form between the ions",
              "The compound turns into a metal",
            ],
            answerIndex: 1,
            explanation: "Lead(II) bromide is ionic. In the solid the ions are fixed in the lattice and cannot move. Melting breaks down the lattice so the Pb²⁺ and Br⁻ ions become mobile and carry charge, allowing conduction. Ionic compounds never gain delocalised electrons or become metallic.",
            difficulty: "core",
            hints: [
              "What type of bonding does a metal-and-non-metal compound have?",
              "In the solid, can the ions move? In the liquid?",
              "Conduction needs mobile charged particles — which particles move here?",
            ],
            guideRef: "Properties of Ionic Compounds",
          },
          {
            id: "chem-bonding-bm2-09",
            question: "Two ionic compounds, sodium chloride and magnesium oxide, are compared. Magnesium oxide has the higher melting point. Which statement best explains why?",
            options: [
              "MgO has smaller molecules",
              "The 2+ and 2− charges in MgO give stronger electrostatic attraction than the 1+ and 1− charges in NaCl",
              "MgO contains some covalent character that NaCl lacks",
              "NaCl has more ions per formula unit",
            ],
            answerIndex: 1,
            explanation: "Both are giant ionic lattices, so the difference comes from charge magnitude. MgO has Mg²⁺ and O²⁻ ions; NaCl has Na⁺ and Cl⁻. The larger charges in MgO produce much stronger electrostatic attractions (charge product 4 versus 1), so more energy is needed to melt it. Ionic compounds have no molecules.",
            difficulty: "challenge",
            hints: [
              "Both substances are ionic, so compare the ion charges, not the structure type.",
              "Electrostatic force depends on the product of the charges.",
              "Mg²⁺ × O²⁻ gives a charge product of 4; Na⁺ × Cl⁻ gives 1.",
              "Stronger attraction means more energy is needed to separate the ions.",
            ],
            strategy: "Compare charge products to compare lattice strength",
            guideRef: "Properties of Ionic Compounds",
          },
          {
            id: "chem-bonding-bm2-10",
            question: "Nitrogen gas (N₂) is very unreactive. Which feature of the molecule best accounts for this?",
            options: [
              "A single covalent bond that is easily broken",
              "A triple covalent bond (three shared pairs) that is very strong and hard to break",
              "Weak intermolecular forces between molecules",
              "Delocalised electrons spread over the molecule",
            ],
            answerIndex: 1,
            explanation: "In N₂ the two nitrogen atoms share three pairs of electrons (a triple bond). This is a very strong, short bond requiring a large amount of energy to break, which is the main reason nitrogen gas is so unreactive. The weak intermolecular forces only explain its low boiling point, not its unreactivity.",
            difficulty: "challenge",
            hints: [
              "How many shared pairs are between the two N atoms in N₂?",
              "Distinguish the strong bond WITHIN the molecule from the weak forces BETWEEN molecules.",
              "Reactivity depends on how hard it is to break the bond inside the molecule.",
            ],
            strategy: "Separate intramolecular bond strength from intermolecular forces",
            guideRef: "Covalent Bonding & Simple Molecules",
          },
        ],
      },
      {
        id: "chem-bonding-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Giant covalent structures — diamond, graphite and silicon(IV) oxide.",
        questions: [
          {
            id: "chem-bonding-bm3-01",
            question: "How many other carbon atoms is each carbon bonded to in diamond?",
            options: ["2", "3", "4", "6"],
            answerIndex: 2,
            explanation: "In diamond every carbon atom forms four single covalent bonds to four neighbouring carbon atoms in a tetrahedral arrangement, building a rigid 3-D giant covalent lattice. This is what makes diamond so hard.",
            difficulty: "warmup",
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bm3-02",
            question: "Which giant covalent substance is used as a lubricant and in pencil leads?",
            options: ["Diamond", "Graphite", "Silicon(IV) oxide", "Sodium chloride"],
            answerIndex: 1,
            explanation: "Graphite is soft and slippery because its hexagonal layers can slide over each other, so it is used as a lubricant and in pencils. Diamond and silicon(IV) oxide are hard; sodium chloride is ionic, not covalent.",
            difficulty: "warmup",
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bm3-03",
            question: "Which property is shared by both diamond and silicon(IV) oxide?",
            options: [
              "They conduct electricity well",
              "They have very high melting points",
              "They are soft and slippery",
              "They are made of small molecules",
            ],
            answerIndex: 1,
            explanation: "Both diamond and silicon(IV) oxide are giant covalent structures with many strong covalent bonds throughout, giving very high melting points and great hardness. Neither conducts electricity (no mobile charges), and neither is molecular.",
            difficulty: "warmup",
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bm3-04",
            question: "Why does graphite conduct electricity while diamond does not?",
            options: [
              "Graphite contains ions but diamond does not",
              "In graphite each carbon has one delocalised electron free to move; in diamond all four outer electrons are in fixed bonds",
              "Graphite has weaker covalent bonds than diamond",
              "Diamond is a simple molecule and graphite is giant",
            ],
            answerIndex: 1,
            explanation: "Each carbon in graphite uses 3 outer electrons in bonds and leaves 1 delocalised, free to move along the layers and carry current. In diamond all 4 outer electrons are locked in covalent bonds, so there are no mobile charges. Both are giant covalent; neither contains ions.",
            difficulty: "core",
            hints: [
              "Count the bonds each carbon makes: 4 in diamond, 3 in graphite.",
              "What happens to the spare fourth electron in graphite?",
              "Conduction needs a charged particle that is free to move.",
            ],
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bm3-05",
            question: "Why is graphite soft and able to act as a lubricant?",
            options: [
              "Its covalent bonds are weak",
              "Weak forces between the layers allow them to slide over each other",
              "It contains free ions that move apart",
              "Its atoms are arranged in a tetrahedral lattice",
            ],
            answerIndex: 1,
            explanation: "Graphite is built from flat layers of hexagonal rings. Within a layer the covalent bonds are strong, but only weak intermolecular forces act between the layers, so the layers slide over one another easily — making graphite soft and slippery. The covalent bonds themselves are not weak.",
            difficulty: "core",
            hints: [
              "Think about the shape of graphite's structure — it is made of layers.",
              "Are the forces within a layer the same as the forces between layers?",
              "Sliding layers explain softness; which forces allow the sliding?",
            ],
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bm3-06",
            question: "In silicon(IV) oxide, each silicon atom is bonded to how many oxygen atoms?",
            options: ["1", "2", "4", "6"],
            answerIndex: 2,
            explanation: "In silicon(IV) oxide (SiO₂) each silicon atom is covalently bonded to 4 oxygen atoms, and each oxygen is bonded to 2 silicon atoms, forming a giant covalent network with the overall ratio Si:O of 1:2.",
            difficulty: "core",
            hints: [
              "The formula SiO₂ gives the overall ratio of atoms.",
              "Each oxygen bridges between two silicon atoms.",
              "Silicon, like carbon, forms four covalent bonds.",
            ],
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bm3-07",
            question: "Why is diamond used in cutting tools and drill tips?",
            options: [
              "It conducts heat and electricity well",
              "It is extremely hard because of its rigid 3-D network of strong covalent bonds",
              "Its layers slide to grind surfaces",
              "It melts easily to coat the blade",
            ],
            answerIndex: 1,
            explanation: "Diamond's rigid tetrahedral network of strong C–C covalent bonds in all directions makes it the hardest natural substance, so it can cut or grind other materials. Diamond does not conduct electricity, and it has no sliding layers.",
            difficulty: "core",
            hints: [
              "What property of diamond makes it useful for cutting?",
              "Link the hardness to the number and direction of the bonds.",
              "Each carbon is bonded to four others in a 3-D arrangement.",
            ],
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bm3-08",
            question: "Silicon(IV) oxide has a melting point of about 1710 °C. Which explanation is correct?",
            options: [
              "Strong intermolecular forces between SiO₂ molecules must be overcome",
              "Many strong covalent bonds throughout the giant structure must be broken",
              "Delocalised electrons must be removed from the lattice",
              "Ionic attractions between Si⁴⁺ and O²⁻ must be overcome",
            ],
            answerIndex: 1,
            explanation: "Silicon(IV) oxide is a giant covalent (macromolecular) structure. Melting requires breaking a very large number of strong covalent bonds extending throughout the whole lattice, which needs a great deal of energy — hence the very high melting point. It is not molecular, metallic or ionic.",
            difficulty: "core",
            hints: [
              "Is SiO₂ a simple molecule or a giant structure?",
              "What kind of bonds extend throughout the whole structure?",
              "Melting a giant covalent solid means breaking which bonds?",
            ],
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bm3-09",
            question: "Graphite conducts electricity along its layers but is a poor conductor in the direction perpendicular to the layers. Which statement best explains this?",
            options: [
              "Ions can move within a layer but not between layers",
              "Delocalised electrons move freely within a layer, but only weak forces and no bonds connect the layers",
              "Covalent bonds run between layers but not within them",
              "The layers are made of different elements",
            ],
            answerIndex: 1,
            explanation: "Each carbon contributes one delocalised electron that moves freely within its layer, allowing conduction along the layers. Between layers there are only weak intermolecular forces and no continuous path of delocalised electrons, so conduction across the layers is poor. All the atoms are carbon; graphite contains no ions.",
            difficulty: "challenge",
            hints: [
              "The delocalised electrons are spread within each flat layer.",
              "Compare the bonding within a layer with the forces between layers.",
              "Conduction follows wherever electrons are free to move continuously.",
            ],
            strategy: "Relate the direction of conduction to where electrons can travel",
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bm3-10",
            question: "Diamond and graphite are both made only of carbon, yet diamond is hard and graphite is soft. The key reason is that:",
            options: [
              "Diamond has stronger covalent bonds than graphite",
              "Diamond has a rigid 3-D network of bonds, while graphite has layers held by weak forces that can slide",
              "Graphite contains ions and diamond does not",
              "Diamond is a simple molecule and graphite is giant covalent",
            ],
            answerIndex: 1,
            explanation: "The difference is structural, not bond strength. In diamond each carbon is bonded to four others in a rigid 3-D framework, so it cannot deform — it is hard. In graphite the carbons form layers; only weak forces act between layers, so the layers slide and graphite is soft. Both are giant covalent allotropes of carbon.",
            difficulty: "challenge",
            hints: [
              "Both are carbon, so do not say one has 'stronger bonds'.",
              "Compare a rigid 3-D network with stacked sliding layers.",
              "Softness comes from layers held by weak forces being able to slide.",
            ],
            strategy: "Attribute the property to structure, not to bond strength",
            guideRef: "Giant Covalent Structures",
          },
        ],
      },
      {
        id: "chem-bonding-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Metallic bonding, metal properties and structure-to-property comparisons across all four bonding types.",
        questions: [
          {
            id: "chem-bonding-bm4-01",
            question: "Metallic bonding is best described as:",
            options: [
              "Shared pairs of electrons between metal atoms",
              "A lattice of positive metal ions in a sea of delocalised electrons",
              "Transfer of electrons from one metal to another",
              "Weak forces between separate metal molecules",
            ],
            answerIndex: 1,
            explanation: "In a metal, the atoms lose their outer electrons into a shared 'sea' of delocalised electrons; the remaining positive ions form a regular lattice. The attraction between the positive ions and the electron sea is the metallic bond. Metals do not form molecules or share localised pairs.",
            difficulty: "warmup",
            guideRef: "Metallic Bonding",
          },
          {
            id: "chem-bonding-bm4-02",
            question: "Which property of metals is directly explained by delocalised electrons?",
            options: ["They are dense", "They conduct electricity", "They are shiny in colour only", "They are unreactive"],
            answerIndex: 1,
            explanation: "Delocalised electrons are free to move through the lattice. When a voltage is applied they drift and carry charge, so metals conduct electricity (and also heat). Density, colour and reactivity are not explained simply by electron mobility.",
            difficulty: "warmup",
            guideRef: "Metallic Bonding",
          },
          {
            id: "chem-bonding-bm4-03",
            question: "Why can metals be hammered into shape (they are malleable)?",
            options: [
              "Covalent bonds bend without breaking",
              "Layers of positive ions can slide over each other while the electron sea reforms around them",
              "The delocalised electrons are removed during hammering",
              "Ions are pushed apart and the metal flows",
            ],
            answerIndex: 1,
            explanation: "When a force is applied, layers of metal ions slide over one another. The delocalised electron sea moves with them and reforms the metallic bonding around the new positions, so the metal changes shape without shattering. This is why metals are malleable.",
            difficulty: "core",
            hints: [
              "Picture the layers of positive ions in the metallic lattice.",
              "What happens to the electron sea when the layers move?",
              "The bonding is not directional, so it can reform after sliding.",
            ],
            guideRef: "Metallic Bonding",
          },
          {
            id: "chem-bonding-bm4-04",
            question: "Most metals have high melting points. Why?",
            options: [
              "Weak intermolecular forces between molecules",
              "Strong attraction between the positive ions and the sea of delocalised electrons",
              "Strong covalent bonds in a giant network",
              "High charges on negative ions",
            ],
            answerIndex: 1,
            explanation: "The metallic bond is the strong attraction between the lattice of positive ions and the delocalised electron sea. Overcoming these strong attractions throughout the giant structure requires a lot of energy, so most metals have high melting points. Metals have no molecules, no covalent network and no negative ions.",
            difficulty: "core",
            hints: [
              "Identify the particles in a metal: positive ions and delocalised electrons.",
              "What force must be overcome to melt the metal?",
              "Stronger attraction means more energy is needed to melt.",
            ],
            guideRef: "Metallic Bonding",
          },
          {
            id: "chem-bonding-bm4-05",
            question: "An alloy such as steel is usually harder than the pure metal. The best explanation is that:",
            options: [
              "Alloys contain covalent bonds",
              "Different-sized atoms distort the regular lattice, making it harder for layers to slide",
              "Alloys have no delocalised electrons",
              "Alloys are ionic compounds",
            ],
            answerIndex: 1,
            explanation: "In an alloy, atoms of different sizes disrupt the regular arrangement of the metal lattice. This irregularity makes it harder for layers of ions to slide over one another, so the alloy is harder and stronger than the pure metal. Alloys are still metallic, with delocalised electrons.",
            difficulty: "core",
            hints: [
              "Pure metals are malleable because layers slide easily.",
              "What does adding different-sized atoms do to the regular layers?",
              "If sliding is harder, is the metal harder or softer?",
            ],
            guideRef: "Metallic Bonding",
          },
          {
            id: "chem-bonding-bm4-06",
            question: "Which substance conducts electricity in the solid state?",
            options: ["Sodium chloride", "Diamond", "Copper", "Solid carbon dioxide"],
            answerIndex: 2,
            explanation: "Copper is a metal with delocalised electrons that are free to move in the solid, so it conducts. Solid sodium chloride has fixed ions; diamond has all electrons in fixed bonds; solid carbon dioxide is molecular — none of these conduct as solids. (Graphite would also conduct, but it is not an option here.)",
            difficulty: "core",
            hints: [
              "Solid conduction needs charge carriers that are mobile in the solid.",
              "Which option is a metal with delocalised electrons?",
              "Rule out the ionic, simple molecular and non-graphite covalent solids.",
            ],
            guideRef: "Structure, Bonding & Properties — Putting It Together",
          },
          {
            id: "chem-bonding-bm4-07",
            question: "A solid has a high melting point, conducts electricity as a solid, and is malleable. What is the most likely structure?",
            options: ["Simple molecular", "Giant ionic", "Giant metallic", "Giant covalent"],
            answerIndex: 2,
            explanation: "Conducting as a solid and being malleable both point to a metal: delocalised electrons carry charge and sliding layers allow shaping. A high melting point fits the strong metallic bonding. Ionic solids do not conduct; simple molecular solids have low melting points; giant covalent solids are brittle and (except graphite) non-conducting.",
            difficulty: "core",
            hints: [
              "Use each clue to eliminate a structure type.",
              "Solid conduction + malleability is the signature of one structure.",
              "Which structure has both mobile electrons and sliding layers?",
            ],
            strategy: "Eliminate structure types using each property clue",
            guideRef: "Structure, Bonding & Properties — Putting It Together",
          },
          {
            id: "chem-bonding-bm4-08",
            question: "Substance X melts at −7 °C, does not conduct electricity in any state, and is a liquid at room temperature. Which structure does X have?",
            options: ["Giant ionic", "Simple molecular", "Giant metallic", "Giant covalent"],
            answerIndex: 1,
            explanation: "A very low melting point and no electrical conduction in any state are the hallmarks of a simple molecular substance: only weak intermolecular forces hold the molecules together, and there are no free ions or electrons. Giant structures all have high melting points; metals and ionic liquids conduct.",
            difficulty: "challenge",
            hints: [
              "A low melting point rules out all three giant structures.",
              "No conduction in any state rules out ionic and metallic.",
              "Which structure is left for a low-melting, non-conducting liquid?",
            ],
            strategy: "Match the data fingerprint to the structure type",
            guideRef: "Structure, Bonding & Properties — Putting It Together",
          },
          {
            id: "chem-bonding-bm4-09",
            question: "Which row correctly describes the electrical conductivity of an ionic compound and a typical metal?",
            options: [
              "Ionic: conducts when solid; Metal: conducts when solid",
              "Ionic: conducts only when molten or aqueous; Metal: conducts when solid and molten",
              "Ionic: never conducts; Metal: conducts only when molten",
              "Ionic: conducts in all states; Metal: never conducts",
            ],
            answerIndex: 1,
            explanation: "An ionic compound conducts only when its ions are free to move — that is when molten or dissolved, not as a solid. A metal has delocalised electrons that are mobile in both the solid and molten states, so it conducts in both. This contrast is a common exam comparison.",
            difficulty: "challenge",
            hints: [
              "When are an ionic compound's ions free to move?",
              "Are a metal's delocalised electrons mobile in the solid?",
              "Compare the two materials state by state.",
            ],
            strategy: "Check each material in each state for mobile charge carriers",
            guideRef: "Structure, Bonding & Properties — Putting It Together",
          },
          {
            id: "chem-bonding-bm4-10",
            question: "Both graphite and copper conduct electricity, yet graphite is a non-metal. What feature do they share that explains their conductivity?",
            options: [
              "Both contain free-moving ions",
              "Both contain delocalised electrons that are free to move",
              "Both are giant ionic lattices",
              "Both are simple molecular substances",
            ],
            answerIndex: 1,
            explanation: "In copper the delocalised electrons come from the metallic bonding; in graphite each carbon contributes one delocalised electron within its layers. In both cases these free-moving electrons act as charge carriers, so both conduct electricity despite graphite being a non-metal. Neither relies on mobile ions.",
            difficulty: "challenge",
            hints: [
              "Conduction needs a mobile charge carrier — ions or electrons?",
              "Graphite has no ions, so what is carrying the charge?",
              "Identify the common feature: delocalised electrons.",
            ],
            strategy: "Find the shared charge carrier across two different structures",
            guideRef: "Structure, Bonding & Properties — Putting It Together",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "chem-bonding-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Ionic bonding: electron transfer, ion formation, dot-and-cross diagrams and formulae.",
        questions: [
          {
            id: "chem-bonding-bq1-01",
            question: "State what is meant by an ionic bond. [2 marks]",
            marks: 2,
            modelAnswer: "An ionic bond is the strong electrostatic attraction between oppositely charged ions. These ions are formed when electrons are transferred from a metal atom to a non-metal atom.",
            markScheme: [
              "Strong electrostatic attraction / attraction between opposite charges",
              "Between (positive and negative) ions / formed by transfer of electrons from metal to non-metal",
            ],
            commonError: "Writing 'attraction between atoms' instead of 'between ions', or omitting the word 'electrostatic'.",
            difficulty: "warmup",
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bq1-02",
            question: "Sodium (2,8,1) reacts with chlorine. Describe how a sodium atom forms a sodium ion, and give the electron configuration and charge of the ion. [3 marks]",
            marks: 3,
            modelAnswer: "The sodium atom loses one electron (its single outer-shell electron). This leaves it with the electron configuration 2,8. Because it now has one more proton than electrons, the ion has a charge of +1, written Na⁺.",
            markScheme: [
              "Loses one electron / loses its outer electron",
              "Electron configuration of ion is 2,8",
              "Charge is +1 / forms Na⁺",
            ],
            commonError: "Saying sodium 'gains' electrons, or giving the charge as −1. Metals lose electrons to form positive ions.",
            difficulty: "warmup",
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bq1-03",
            question: "Magnesium reacts with oxygen to form magnesium oxide. Using outer-shell electrons only, describe the electron transfer and give the charges of the two ions formed. [4 marks]",
            marks: 4,
            modelAnswer: "Magnesium has 2 electrons in its outer shell; oxygen has 6. The magnesium atom transfers (loses) both of its outer electrons to the oxygen atom. The magnesium becomes Mg²⁺ (now 2,8, a full outer shell). The oxygen gains the 2 electrons to become O²⁻ (now 2,8, a full outer shell). The formula of magnesium oxide is therefore MgO.",
            markScheme: [
              "Magnesium loses 2 (outer) electrons",
              "Oxygen gains 2 electrons",
              "Magnesium forms Mg²⁺ / 2+ ion",
              "Oxygen forms O²⁻ / 2− ion",
            ],
            commonError: "Transferring only one electron, or giving Mg⁺ and O⁻. Both outer electrons of magnesium move to one oxygen atom.",
            difficulty: "core",
            hints: [
              "How many outer electrons does magnesium have to give away?",
              "How many electrons does oxygen need to fill its outer shell?",
              "Match the electrons lost to the electrons gained.",
              "State the charge on each ion after the transfer.",
            ],
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bq1-04",
            question: "Explain why the formula of sodium oxide is Na₂O. [3 marks]",
            marks: 3,
            modelAnswer: "Sodium forms a 1+ ion (Na⁺) and oxygen forms a 2− ion (O²⁻). For the compound to be neutral, the total positive charge must equal the total negative charge. Two Na⁺ ions (total charge +2) are needed to balance one O²⁻ ion (charge −2). This gives the ratio 2 sodium to 1 oxygen, so the formula is Na₂O.",
            markScheme: [
              "Na⁺ (1+) and O²⁻ (2−) identified",
              "Total positive charge must balance total negative charge / compound is neutral",
              "Two Na⁺ needed per O²⁻ → ratio 2:1 → Na₂O",
            ],
            commonError: "Forgetting that the compound must be neutral overall, or writing NaO. Two +1 ions are needed to cancel one −2 ion.",
            difficulty: "core",
            hints: [
              "Write down the charge on each ion first.",
              "What must be true about the total charge in a neutral compound?",
              "How many +1 ions cancel one −2 ion?",
            ],
            solutions: [
              {
                label: "Charge-balancing method",
                steps: [
                  "Charge on sodium ion = +1; charge on oxide ion = −2.",
                  "Let the formula be Na(x)O(y). For neutrality: x(+1) + y(−2) = 0.",
                  "Take the simplest whole-number ratio: x = 2, y = 1 gives 2(+1) + 1(−2) = 0.",
                  "So the formula is Na₂O.",
                ],
              },
            ],
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bq1-05",
            question: "Describe what a dot-and-cross diagram for sodium chloride shows, including what is drawn for the sodium ion and the chloride ion. [4 marks]",
            marks: 4,
            modelAnswer: "A dot-and-cross diagram for sodium chloride shows the outer-shell electrons only, using dots for one atom's electrons and crosses for the other. The single outer electron of sodium is transferred to chlorine. The sodium ion (Na⁺) is drawn with an empty outer shell (configuration 2,8) and a + charge, usually in square brackets. The chloride ion (Cl⁻) is drawn with 8 electrons in its outer shell (7 of its own plus the 1 transferred from sodium), with a − charge, in square brackets.",
            markScheme: [
              "Shows outer-shell electrons only / dots and crosses to show origin of electrons",
              "Sodium's outer electron transferred to chlorine",
              "Na⁺ drawn with full inner shell (2,8) / empty outer shell and + charge",
              "Cl⁻ drawn with 8 outer electrons and − charge / in square brackets",
            ],
            commonError: "Showing electrons being shared (that is covalent), or leaving the single electron in sodium's outer shell. In ionic diagrams the electron has fully transferred.",
            difficulty: "core",
            hints: [
              "Only the outer electrons are shown in dot-and-cross diagrams.",
              "Where does sodium's outer electron end up?",
              "How many outer electrons does the chloride ion have after transfer?",
              "Remember the square brackets and charges on each ion.",
            ],
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bq1-06",
            question: "Potassium bromide is an ionic compound. State the charges on the potassium and bromide ions and explain why the formula is KBr. [3 marks]",
            marks: 3,
            modelAnswer: "Potassium is in Group 1, so it forms K⁺ (1+). Bromine is in Group 7, so it forms Br⁻ (1−). The +1 charge and −1 charge are equal in size, so one of each ion balances exactly to give a neutral compound. The ratio is therefore 1:1 and the formula is KBr.",
            markScheme: [
              "K⁺ / 1+ ion",
              "Br⁻ / 1− ion",
              "Charges balance 1:1 (equal and opposite) → KBr",
            ],
            commonError: "Adding unnecessary subscripts (e.g. K₂Br). Since both charges are 1, the ratio is simply 1:1.",
            difficulty: "core",
            hints: [
              "Use the group numbers to find each ion charge.",
              "Compare the sizes of the two charges.",
              "Equal and opposite charges combine in a 1:1 ratio.",
            ],
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bq1-07",
            question: "Aluminium oxide has the formula Al₂O₃. Work out the charge on the aluminium ion, showing your reasoning. [3 marks]",
            marks: 3,
            modelAnswer: "Oxygen is in Group 6, so the oxide ion is O²⁻. In Al₂O₃ there are 3 oxide ions, giving a total negative charge of 3 × (−2) = −6. For the compound to be neutral, the 2 aluminium ions must carry a total charge of +6. Therefore each aluminium ion has a charge of +6 ÷ 2 = +3, so the ion is Al³⁺.",
            markScheme: [
              "Oxide ion is O²⁻ (2−)",
              "Total negative charge from 3 oxide ions = −6 / total positive must = +6",
              "Each Al ion = +6 ÷ 2 = +3 → Al³⁺",
            ],
            commonError: "Dividing by the wrong number of ions, or assuming aluminium is +2. There are two aluminium ions sharing the +6 total.",
            difficulty: "challenge",
            hints: [
              "Start with the charge you know — the oxide ion.",
              "Find the total negative charge from all three oxide ions.",
              "The total positive charge must equal the total negative charge.",
              "Divide the total positive charge between the two aluminium ions.",
            ],
            solutions: [
              {
                label: "Balancing the total charge",
                steps: [
                  "Oxide ion charge = −2; there are 3 of them, so total negative charge = 3 × (−2) = −6.",
                  "Compound is neutral, so total positive charge from Al ions = +6.",
                  "There are 2 Al ions, so charge per Al ion = +6 ÷ 2 = +3.",
                  "The aluminium ion is Al³⁺.",
                ],
              },
            ],
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bq1-08",
            question: "Explain, in terms of electron configurations, why both ions in magnesium fluoride (MgF₂) are stable. [4 marks]",
            marks: 4,
            modelAnswer: "Magnesium (2,8,2) loses its 2 outer electrons to become Mg²⁺ with the configuration 2,8, the same as neon — a full outer shell. Each fluorine atom (2,7) gains 1 electron to become F⁻ with the configuration 2,8, also the same as neon. Two fluorine atoms are needed because magnesium loses 2 electrons but each fluorine can only accept 1. Every ion now has a full, stable noble-gas outer shell, which is why the ions are stable.",
            markScheme: [
              "Mg loses 2 electrons → Mg²⁺ with configuration 2,8",
              "Each F gains 1 electron → F⁻ with configuration 2,8",
              "Two F atoms needed to take the 2 electrons from one Mg",
              "All ions have full outer shells / noble-gas (neon) configuration → stable",
            ],
            commonError: "Saying each fluorine gains 2 electrons. Fluorine needs only 1 electron, so two fluorine atoms are required for one magnesium.",
            difficulty: "challenge",
            hints: [
              "Write the electron configuration of each atom first.",
              "How many electrons does magnesium lose, and how many can each fluorine gain?",
              "Match the number of electrons given out with the number taken in.",
              "Describe the final outer shell of each ion.",
            ],
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bq1-09",
            question: "A student says: 'When sodium reacts with chlorine, the sodium atom shares its outer electron with chlorine.' Identify the error and write a correct statement. [2 marks]",
            marks: 2,
            modelAnswer: "The error is the word 'shares' — sharing electrons is covalent bonding, which occurs between non-metals. Sodium is a metal reacting with a non-metal, so the bonding is ionic. A correct statement is: the sodium atom transfers (gives away) its outer electron to the chlorine atom, forming Na⁺ and Cl⁻ ions held by electrostatic attraction.",
            markScheme: [
              "Error: electrons are transferred, not shared / sharing is covalent",
              "Correct statement: Na transfers its outer electron to Cl forming Na⁺ and Cl⁻ (ionic bonding)",
            ],
            commonError: "Confusing covalent (sharing) with ionic (transfer). Metal + non-metal gives ionic bonding by electron transfer.",
            difficulty: "core",
            hints: [
              "What type of element is sodium, and what type is chlorine?",
              "Which bonding type forms between a metal and a non-metal?",
              "In ionic bonding, are electrons shared or transferred?",
            ],
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bq1-10",
            question: "Calcium nitride has the formula Ca₃N₂. Use this to deduce the charges on the calcium and nitride ions, and explain why three calcium ions combine with two nitride ions. [4 marks]",
            marks: 4,
            modelAnswer: "Calcium is in Group 2, so it forms Ca²⁺ (2+). The formula Ca₃N₂ must be neutral. Three calcium ions give a total positive charge of 3 × (+2) = +6. To balance this, the two nitride ions must carry a total charge of −6, so each nitride ion is −6 ÷ 2 = −3, i.e. N³⁻ (nitrogen is in Group 5 and gains 3 electrons). Three Ca²⁺ (+6 total) exactly balance two N³⁻ (−6 total), which is why the ratio is 3:2.",
            markScheme: [
              "Calcium ion is Ca²⁺ (2+)",
              "Three Ca²⁺ give total charge +6",
              "Nitride ion is N³⁻ (3−)",
              "Two N³⁻ give −6, balancing +6 → ratio 3:2",
            ],
            commonError: "Assuming nitrogen forms N²⁻ or guessing the ratio. Use the formula and the known Ca²⁺ charge to deduce the nitride charge.",
            difficulty: "challenge",
            hints: [
              "Calcium's charge comes from its group number.",
              "Find the total positive charge from the three calcium ions.",
              "The total negative charge must equal the total positive charge.",
              "Divide the total negative charge between the two nitride ions.",
            ],
            solutions: [
              {
                label: "Deducing the nitride charge from the formula",
                steps: [
                  "Calcium is Group 2 → Ca²⁺; three of them give 3 × (+2) = +6.",
                  "Ca₃N₂ is neutral, so the two nitride ions must total −6.",
                  "Charge per nitride ion = −6 ÷ 2 = −3, so N³⁻.",
                  "Check: 3(+2) + 2(−3) = +6 − 6 = 0, confirming the 3:2 ratio.",
                ],
              },
            ],
            guideRef: "Ionic Bonding",
          },
        ],
      },
      {
        id: "chem-bonding-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Properties of ionic compounds and covalent bonding in simple molecules.",
        questions: [
          {
            id: "chem-bonding-bq2-01",
            question: "State two physical properties typical of ionic compounds. [2 marks]",
            marks: 2,
            modelAnswer: "Ionic compounds typically have high melting and boiling points. They also conduct electricity when molten or dissolved in water (but not when solid). Many are soluble in water and are brittle. (Any two correct properties.)",
            markScheme: [
              "High melting point / high boiling point",
              "Conducts when molten or aqueous / soluble in water / brittle (any second valid property)",
            ],
            commonError: "Stating that ionic compounds conduct as solids — they do not, because the ions are fixed in place.",
            difficulty: "warmup",
            guideRef: "Properties of Ionic Compounds",
          },
          {
            id: "chem-bonding-bq2-02",
            question: "State the meaning of a covalent bond. [2 marks]",
            marks: 2,
            modelAnswer: "A covalent bond is a shared pair of electrons between two atoms. It forms between non-metal atoms, and the shared electrons are attracted to the nuclei of both atoms.",
            markScheme: [
              "A shared pair of electrons",
              "Between (two) non-metal atoms / attracted to both nuclei",
            ],
            commonError: "Describing transfer of electrons (that is ionic). Covalent bonding is sharing.",
            difficulty: "warmup",
            guideRef: "Covalent Bonding & Simple Molecules",
          },
          {
            id: "chem-bonding-bq2-03",
            question: "Explain why solid sodium chloride does not conduct electricity, but molten sodium chloride does. [4 marks]",
            marks: 4,
            modelAnswer: "Solid sodium chloride does contain ions (Na⁺ and Cl⁻), but in the solid they are held in fixed positions in the giant lattice by strong electrostatic forces and cannot move. Because there are no mobile charge carriers, the solid does not conduct. When the sodium chloride is melted, the lattice breaks down and the ions become free to move. These mobile ions can carry charge through the liquid, so molten sodium chloride conducts electricity.",
            markScheme: [
              "Solid contains ions but they are fixed / cannot move",
              "No mobile charge carriers → solid does not conduct",
              "When molten, lattice breaks down and ions are free to move",
              "Mobile ions carry charge → molten conducts",
            ],
            commonError: "Saying the solid 'has no ions' or 'has no electrons'. The ions exist; they simply cannot move in the solid.",
            difficulty: "core",
            hints: [
              "Both states contain the same ions — what changes is their mobility.",
              "In the solid, can the ions leave their lattice positions?",
              "What happens to the lattice when the compound melts?",
              "Conduction requires charged particles that are free to move.",
            ],
            guideRef: "Properties of Ionic Compounds",
          },
          {
            id: "chem-bonding-bq2-04",
            question: "Describe a dot-and-cross diagram for a molecule of hydrogen chloride (HCl), and state how many bonding pairs and lone pairs it has. [3 marks]",
            marks: 3,
            modelAnswer: "In HCl the hydrogen atom (1 outer electron) and the chlorine atom (7 outer electrons) share one pair of electrons, forming a single covalent bond. This gives hydrogen a full shell of 2 and chlorine a full shell of 8. There is 1 bonding pair (the shared pair) and chlorine has 3 lone pairs; hydrogen has no lone pairs.",
            markScheme: [
              "One shared pair of electrons / single covalent bond between H and Cl",
              "1 bonding pair",
              "Chlorine has 3 lone pairs (hydrogen has none)",
            ],
            commonError: "Forgetting the 3 lone pairs on chlorine, or showing chlorine sharing more than one pair. Only one pair is shared in HCl.",
            difficulty: "core",
            hints: [
              "How many electrons does hydrogen need to fill its shell? How many does chlorine need?",
              "How many shared pairs make a single bond?",
              "Chlorine has 7 outer electrons — 1 in the bond, the rest as lone pairs.",
            ],
            guideRef: "Covalent Bonding & Simple Molecules",
          },
          {
            id: "chem-bonding-bq2-05",
            question: "Methane (CH₄) has a very low boiling point of −161 °C. Explain why, in terms of structure and forces. [4 marks]",
            marks: 4,
            modelAnswer: "Methane is a simple molecular substance made of small, separate CH₄ molecules. Within each molecule the C–H covalent bonds are strong, but the forces between the molecules (intermolecular forces) are weak. When methane boils, only these weak intermolecular forces need to be overcome, not the strong covalent bonds. Because little energy is needed to overcome the weak forces, methane boils at a very low temperature.",
            markScheme: [
              "Methane is a simple molecular substance",
              "Weak intermolecular forces between molecules",
              "Covalent bonds within molecules are not broken on boiling",
              "Little energy needed to overcome weak forces → low boiling point",
            ],
            commonError: "Saying 'the covalent bonds are weak'. The covalent bonds are strong; it is the forces between molecules that are weak and that break on boiling.",
            difficulty: "core",
            hints: [
              "What type of substance is methane — molecular or giant?",
              "Distinguish the bonds within a molecule from the forces between molecules.",
              "Which of these is overcome when methane boils?",
              "Weak forces need little energy to break.",
            ],
            guideRef: "Covalent Bonding & Simple Molecules",
          },
          {
            id: "chem-bonding-bq2-06",
            question: "Explain why ionic compounds such as sodium chloride have high melting points. [3 marks]",
            marks: 3,
            modelAnswer: "Sodium chloride is a giant ionic lattice containing many oppositely charged ions (Na⁺ and Cl⁻). These ions are held together by strong electrostatic attractions extending throughout the lattice. To melt the compound, a large amount of energy is needed to overcome these many strong attractions, so the melting point is high.",
            markScheme: [
              "Giant ionic lattice of oppositely charged ions",
              "Many strong electrostatic attractions between ions",
              "Large amount of energy needed to overcome them → high melting point",
            ],
            commonError: "Mentioning 'breaking covalent bonds' or 'weak forces'. The forces are strong electrostatic attractions between ions.",
            difficulty: "core",
            hints: [
              "Describe the structure: what particles and how are they arranged?",
              "What kind of force holds the ions together?",
              "Link the strength and number of forces to the energy needed to melt.",
            ],
            guideRef: "Properties of Ionic Compounds",
          },
          {
            id: "chem-bonding-bq2-07",
            question: "Sugar (a covalent molecular compound) and salt (an ionic compound) both dissolve in water. Explain why the salt solution conducts electricity but the sugar solution does not. [4 marks]",
            marks: 4,
            modelAnswer: "When salt (sodium chloride) dissolves, the giant ionic lattice breaks apart into free-moving Na⁺ and Cl⁻ ions. These mobile ions are charged, so they can carry an electric current — the solution conducts. When sugar dissolves, it separates into neutral sugar molecules, not ions. The sugar solution contains no charged particles that are free to move, so it cannot carry a current and does not conduct.",
            markScheme: [
              "Salt dissolves to give free-moving ions (Na⁺ and Cl⁻)",
              "Mobile charged ions carry current → salt solution conducts",
              "Sugar dissolves to give neutral molecules, not ions",
              "No mobile charged particles in sugar solution → does not conduct",
            ],
            commonError: "Thinking everything that dissolves must conduct. Only solutions containing free-moving ions conduct; molecular solutions do not.",
            difficulty: "challenge",
            hints: [
              "What particles are released when salt dissolves? When sugar dissolves?",
              "Conduction needs charged particles that can move.",
              "Are sugar molecules charged?",
              "Compare what carries the charge in each solution.",
            ],
            guideRef: "Properties of Ionic Compounds",
          },
          {
            id: "chem-bonding-bq2-08",
            question: "Describe how a dot-and-cross diagram for nitrogen (N₂) shows the bonding, and explain how this bonding affects the strength of the bond. [4 marks]",
            marks: 4,
            modelAnswer: "Each nitrogen atom has 5 outer electrons. In N₂ the two atoms share three pairs of electrons (a triple bond), so each nitrogen reaches a full outer shell of 8. In the dot-and-cross diagram, three shared pairs are drawn between the two atoms, and each nitrogen also keeps one lone pair. Because three pairs of electrons are shared, the triple bond is very strong (and short), which is why a large amount of energy is needed to break it and nitrogen gas is unreactive.",
            markScheme: [
              "Each N has 5 outer electrons / shares 3 pairs",
              "Three shared pairs = a triple bond (each N reaches 8)",
              "One lone pair shown on each nitrogen",
              "Triple bond is very strong / needs much energy to break",
            ],
            commonError: "Showing a single or double bond, or omitting the lone pair on each nitrogen. N₂ has a triple bond plus one lone pair per atom.",
            difficulty: "challenge",
            hints: [
              "How many outer electrons does each nitrogen have?",
              "How many electrons must each nitrogen share to reach 8?",
              "Count the shared pairs to name the bond type.",
              "Relate the number of shared pairs to the strength of the bond.",
            ],
            guideRef: "Covalent Bonding & Simple Molecules",
          },
          {
            id: "chem-bonding-bq2-09",
            question: "Simple molecular substances usually do not conduct electricity. Explain why, using carbon dioxide as an example. [3 marks]",
            marks: 3,
            modelAnswer: "Carbon dioxide is a simple molecular substance. All of its electrons are held in localised covalent bonds within the molecules, and it contains no ions. Because there are no free-moving electrons and no free ions, there are no mobile charge carriers, so carbon dioxide cannot conduct electricity in any state.",
            markScheme: [
              "Electrons are held in covalent bonds / no delocalised electrons",
              "No ions / no charged particles free to move",
              "No mobile charge carriers → does not conduct",
            ],
            commonError: "Saying CO₂ 'has no electrons'. It has electrons, but they are all fixed in covalent bonds and cannot move freely.",
            difficulty: "core",
            hints: [
              "What carries charge in a conductor — what is required?",
              "Where are all the electrons in CO₂ located?",
              "Does CO₂ contain any ions?",
            ],
            guideRef: "Covalent Bonding & Simple Molecules",
          },
          {
            id: "chem-bonding-bq2-10",
            question: "Compare the melting points and electrical conductivity of sodium chloride (ionic) and oxygen (simple molecular). Explain the differences in terms of structure and bonding. [6 marks]",
            marks: 6,
            modelAnswer: "Sodium chloride has a much higher melting point than oxygen. Sodium chloride is a giant ionic lattice held together by many strong electrostatic attractions, so a large amount of energy is needed to melt it. Oxygen is a simple molecular substance with only weak intermolecular forces between O₂ molecules, so very little energy is needed to melt or boil it — oxygen is a gas at room temperature. For conductivity: solid sodium chloride does not conduct because its ions are fixed, but when molten or dissolved its ions become free to move and it conducts. Oxygen does not conduct in any state because it has no ions and no delocalised electrons — there are no mobile charge carriers.",
            markScheme: [
              "Sodium chloride has the higher melting point",
              "NaCl is a giant ionic lattice with many strong electrostatic attractions → much energy to melt",
              "Oxygen is simple molecular with weak intermolecular forces → little energy to melt/boil",
              "Solid NaCl does not conduct (ions fixed); molten/aqueous NaCl conducts (ions free to move)",
              "Oxygen does not conduct in any state",
              "Oxygen has no ions or delocalised electrons / no mobile charge carriers",
            ],
            commonError: "Treating both substances as having the same type of forces. NaCl has strong electrostatic forces between ions; oxygen has weak intermolecular forces between molecules.",
            difficulty: "challenge",
            hints: [
              "Identify the structure type of each substance first.",
              "Link the melting point to the strength of the forces that must be overcome.",
              "For conductivity, ask what mobile charge carriers (if any) each has.",
              "Remember to compare NaCl across all three states (solid, molten, aqueous).",
            ],
            strategy: "Identify structure type, then reason about forces and charge carriers",
            guideRef: "Structure, Bonding & Properties — Putting It Together",
          },
        ],
      },
      {
        id: "chem-bonding-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Giant covalent structures: diamond, graphite and silicon(IV) oxide.",
        questions: [
          {
            id: "chem-bonding-bq3-01",
            question: "Diamond and graphite are both forms of carbon. State one use of each that depends on its properties. [2 marks]",
            marks: 2,
            modelAnswer: "Diamond is used in cutting tools or drill tips because it is extremely hard. Graphite is used as a lubricant or in pencil leads because it is soft and slippery.",
            markScheme: [
              "Diamond: cutting tools / drill tips / jewellery (because it is hard)",
              "Graphite: lubricant / pencil leads / electrodes (because it is soft / conducts)",
            ],
            commonError: "Giving a use without it matching the property, e.g. saying diamond is used as a lubricant.",
            difficulty: "warmup",
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bq3-02",
            question: "State what is meant by a giant covalent structure. [2 marks]",
            marks: 2,
            modelAnswer: "A giant covalent structure is a structure in which a very large number of atoms are joined together by strong covalent bonds that extend throughout the whole structure (a macromolecule). There are no separate small molecules.",
            markScheme: [
              "Many atoms joined by (strong) covalent bonds",
              "Bonds extend throughout the whole structure / macromolecule (no small molecules)",
            ],
            commonError: "Describing simple molecules. A giant covalent structure has continuous bonding throughout, not discrete molecules.",
            difficulty: "warmup",
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bq3-03",
            question: "Explain why diamond is very hard and has a very high melting point. [4 marks]",
            marks: 4,
            modelAnswer: "In diamond each carbon atom is covalently bonded to four other carbon atoms in a rigid, three-dimensional tetrahedral network. Because every atom is held in place by four strong covalent bonds, the structure cannot be deformed easily, making diamond very hard. To melt diamond, a very large number of these strong covalent bonds must be broken, which requires a great deal of energy — so the melting point is very high.",
            markScheme: [
              "Each carbon bonded to 4 others (by covalent bonds)",
              "Rigid 3-D / tetrahedral network",
              "Many strong covalent bonds throughout the structure",
              "Large amount of energy needed to break them → very hard / very high melting point",
            ],
            commonError: "Mentioning intermolecular forces. Diamond has no separate molecules; melting it means breaking covalent bonds.",
            difficulty: "core",
            hints: [
              "How many bonds does each carbon make, and in what arrangement?",
              "Why can the rigid network not be deformed?",
              "What must be broken to melt a giant covalent structure?",
              "Relate the number and strength of bonds to the energy needed.",
            ],
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bq3-04",
            question: "Explain why graphite is able to conduct electricity. [3 marks]",
            marks: 3,
            modelAnswer: "In graphite each carbon atom is bonded to only three other carbon atoms within a layer. This leaves one outer electron per carbon atom that is not used in bonding and is delocalised. These delocalised electrons are free to move through the layers, so when a voltage is applied they carry charge — allowing graphite to conduct electricity.",
            markScheme: [
              "Each carbon bonded to only 3 others / one electron per carbon not used in bonding",
              "That electron is delocalised / free to move",
              "Delocalised electrons carry charge → conducts electricity",
            ],
            commonError: "Saying graphite conducts because of free ions. Graphite contains no ions; the charge carriers are delocalised electrons.",
            difficulty: "core",
            hints: [
              "How many bonds does each carbon form in graphite?",
              "What happens to the spare fourth electron?",
              "Conduction needs a charged particle that can move — which one is it here?",
            ],
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bq3-05",
            question: "Explain why graphite is soft and can be used as a lubricant. [3 marks]",
            marks: 3,
            modelAnswer: "Graphite is made of flat layers of carbon atoms arranged in hexagons. Within each layer the covalent bonds are strong, but only weak intermolecular forces hold the layers to one another. Because these forces are weak, the layers can slide over each other easily, making graphite soft and slippery, so it works as a lubricant.",
            markScheme: [
              "Graphite is made of layers (of carbon atoms)",
              "Only weak (intermolecular) forces between layers",
              "Layers can slide over each other → soft / lubricant",
            ],
            commonError: "Saying the covalent bonds are weak. The bonds within layers are strong; it is the forces between layers that are weak.",
            difficulty: "core",
            hints: [
              "Describe graphite's structure — it is built from layers.",
              "Compare the forces within a layer to those between layers.",
              "Which forces allow the layers to slide?",
            ],
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bq3-06",
            question: "Silicon(IV) oxide (SiO₂) is used to make glass. Describe its structure and explain why it has a very high melting point. [4 marks]",
            marks: 4,
            modelAnswer: "Silicon(IV) oxide has a giant covalent structure. Each silicon atom is covalently bonded to four oxygen atoms and each oxygen atom is bonded to two silicon atoms, forming a continuous three-dimensional network throughout the solid. To melt it, a very large number of strong covalent bonds spread throughout the whole structure must be broken, which requires a great deal of energy, so silicon(IV) oxide has a very high melting point.",
            markScheme: [
              "Giant covalent structure",
              "Each Si bonded to 4 O / each O bonded to 2 Si (3-D network)",
              "Many strong covalent bonds throughout the structure",
              "Large amount of energy needed to break them → very high melting point",
            ],
            commonError: "Describing SiO₂ as a simple molecule. It is a giant covalent network, similar to diamond.",
            difficulty: "core",
            hints: [
              "Is SiO₂ molecular or a giant structure?",
              "How many oxygens surround each silicon, and how many silicons surround each oxygen?",
              "What kind of bonds must be broken to melt it?",
              "Relate the number of strong bonds to the energy needed.",
            ],
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bq3-07",
            question: "Both diamond and graphite are giant covalent structures, but only graphite conducts electricity. Explain this difference. [4 marks]",
            marks: 4,
            modelAnswer: "In diamond each carbon atom forms four covalent bonds to four other carbon atoms, so all four of its outer electrons are used in bonding and held in fixed positions. With no free electrons, diamond cannot conduct. In graphite each carbon forms only three covalent bonds, leaving one outer electron per carbon delocalised and free to move through the layers. These mobile delocalised electrons carry charge, so graphite conducts electricity.",
            markScheme: [
              "Diamond: each carbon uses all 4 outer electrons in bonds / no free electrons",
              "Diamond therefore cannot conduct",
              "Graphite: each carbon bonds to only 3 others, leaving 1 delocalised electron",
              "Delocalised electrons free to move carry charge → graphite conducts",
            ],
            commonError: "Attributing graphite's conductivity to ions or to weak bonds. The cause is the delocalised electron from each carbon.",
            difficulty: "challenge",
            hints: [
              "Count the bonds each carbon makes in each structure.",
              "In diamond, how many outer electrons are left over? In graphite?",
              "What must exist for a material to conduct electricity?",
              "Name the charge carrier in graphite.",
            ],
            strategy: "Compare the number of bonds to find the free electron",
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bq3-08",
            question: "Silicon(IV) oxide and carbon dioxide are both oxides of Group 4 elements, yet silicon(IV) oxide is a solid with a melting point of about 1710 °C while carbon dioxide is a gas. Explain this difference. [5 marks]",
            marks: 5,
            modelAnswer: "Carbon dioxide is a simple molecular substance made of small, separate CO₂ molecules. Only weak intermolecular forces act between these molecules, so very little energy is needed to overcome them — carbon dioxide is a gas at room temperature with a very low boiling point. Silicon(IV) oxide, in contrast, has a giant covalent structure in which every silicon atom is covalently bonded to oxygen atoms throughout a continuous 3-D network. Melting it requires breaking a very large number of strong covalent bonds, which needs a great deal of energy, so silicon(IV) oxide has a very high melting point and is a solid.",
            markScheme: [
              "Carbon dioxide is simple molecular / small separate molecules",
              "Weak intermolecular forces in CO₂ → little energy to overcome → gas / low boiling point",
              "Silicon(IV) oxide is a giant covalent structure",
              "Many strong covalent bonds throughout the network",
              "Large amount of energy to break them → very high melting point / solid",
            ],
            commonError: "Assuming both behave alike because both are 'oxides of Group 4'. The structures differ: CO₂ is simple molecular while SiO₂ is giant covalent.",
            difficulty: "challenge",
            hints: [
              "Identify the structure type of each oxide first.",
              "For CO₂, what forces hold the molecules together?",
              "For SiO₂, how are the atoms bonded throughout?",
              "Link each melting point to the forces or bonds that must be overcome.",
            ],
            strategy: "Do not assume similar formulae mean similar structures",
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bq3-09",
            question: "Graphene is a single layer of graphite. Suggest why graphene conducts electricity, with reference to its bonding. [3 marks]",
            marks: 3,
            modelAnswer: "In graphene, as in a graphite layer, each carbon atom is covalently bonded to three other carbon atoms. This leaves one outer electron per carbon that is not used in bonding and is delocalised across the layer. These delocalised electrons are free to move through the sheet, so they can carry charge, allowing graphene to conduct electricity.",
            markScheme: [
              "Each carbon bonded to 3 others, leaving one electron free",
              "Electron is delocalised across the layer / sheet",
              "Delocalised electrons free to move carry charge → conducts",
            ],
            commonError: "Forgetting to mention that the conduction is due to delocalised electrons, not ions.",
            difficulty: "challenge",
            hints: [
              "Graphene has the same bonding as one layer of graphite.",
              "How many bonds does each carbon form, and what about the fourth electron?",
              "Name the charge carrier and say why it can move.",
            ],
            strategy: "Apply graphite reasoning to a single layer",
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bq3-10",
            question: "A teacher writes: 'Graphite is soft because its covalent bonds are weak.' Explain why this statement is wrong and give the correct reason graphite is soft. [3 marks]",
            marks: 3,
            modelAnswer: "The statement is wrong because the covalent bonds within each layer of graphite are strong, not weak — that is why graphite still has a high melting point. The correct reason graphite is soft is that it is made of layers, and only weak intermolecular forces act between these layers. Because the forces between the layers are weak, the layers can slide over one another, making graphite soft.",
            markScheme: [
              "Covalent bonds (within layers) are strong, not weak / shown by high melting point",
              "Graphite is made of layers held by weak forces between layers",
              "Weak interlayer forces let layers slide → soft",
            ],
            commonError: "Confusing the strong covalent bonds within a layer with the weak forces between layers. Only the interlayer forces are weak.",
            difficulty: "core",
            hints: [
              "Are the covalent bonds in graphite actually weak? Consider its melting point.",
              "What is special about how graphite's atoms are arranged?",
              "Which forces are weak — those within a layer or between layers?",
            ],
            guideRef: "Giant Covalent Structures",
          },
        ],
      },
      {
        id: "chem-bonding-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Metallic bonding, metal properties and structure-to-property reasoning across all bonding types.",
        questions: [
          {
            id: "chem-bonding-bq4-01",
            question: "Describe the structure of a metal in terms of metallic bonding. [2 marks]",
            marks: 2,
            modelAnswer: "A metal consists of a regular lattice of positive metal ions surrounded by a 'sea' of delocalised electrons. The metallic bond is the strong electrostatic attraction between the positive ions and the delocalised electrons.",
            markScheme: [
              "A lattice of positive (metal) ions",
              "Surrounded by a sea of delocalised electrons / attraction between ions and electrons",
            ],
            commonError: "Describing metal 'atoms' rather than positive ions, or omitting the delocalised electrons.",
            difficulty: "warmup",
            guideRef: "Metallic Bonding",
          },
          {
            id: "chem-bonding-bq4-02",
            question: "State two properties of metals that are explained by metallic bonding. [2 marks]",
            marks: 2,
            modelAnswer: "Metals conduct electricity (and heat) because of the delocalised electrons, and metals are malleable (can be hammered into shape) because layers of ions can slide. Most metals also have high melting points. (Any two correct properties.)",
            markScheme: [
              "Conducts electricity / conducts heat",
              "Malleable / ductile / high melting point (any second valid property)",
            ],
            commonError: "Listing properties not linked to metallic bonding, such as colour.",
            difficulty: "warmup",
            guideRef: "Metallic Bonding",
          },
          {
            id: "chem-bonding-bq4-03",
            question: "Explain why metals are good conductors of electricity. [3 marks]",
            marks: 3,
            modelAnswer: "In a metal there is a sea of delocalised electrons that are not bound to any particular ion. These electrons are free to move through the lattice. When a voltage is applied across the metal, the delocalised electrons drift through the structure, carrying charge — this flow of charge is an electric current, so metals conduct electricity well.",
            markScheme: [
              "Metals contain delocalised electrons",
              "Electrons are free to move through the lattice",
              "Moving electrons carry charge → electric current / conducts",
            ],
            commonError: "Saying ions carry the current in a solid metal. In a solid metal it is the delocalised electrons, not the ions, that move.",
            difficulty: "core",
            hints: [
              "What particles in a metal are free to move?",
              "Are these electrons attached to one ion or shared by the lattice?",
              "What happens to these electrons when a voltage is applied?",
            ],
            guideRef: "Metallic Bonding",
          },
          {
            id: "chem-bonding-bq4-04",
            question: "Explain why metals are malleable (can be hammered into different shapes without breaking). [3 marks]",
            marks: 3,
            modelAnswer: "In a metal the positive ions are arranged in layers. When a force is applied, the layers of ions can slide over one another into new positions. The bonding is not directional because the delocalised electrons move with the ions and the metallic bonding reforms around the new arrangement. As a result the metal changes shape rather than shattering, so it is malleable.",
            markScheme: [
              "Layers of (positive) ions can slide over each other",
              "Delocalised electrons / metallic bonding reforms around new positions",
              "Metal changes shape without breaking → malleable",
            ],
            commonError: "Saying the bonds break and reform as new bonds in a directional way. Metallic bonding is non-directional, so it simply reforms as the layers slide.",
            difficulty: "core",
            hints: [
              "Picture the positive ions arranged in layers.",
              "What can these layers do when a force is applied?",
              "What does the electron sea do as the layers move?",
            ],
            guideRef: "Metallic Bonding",
          },
          {
            id: "chem-bonding-bq4-05",
            question: "Most metals have high melting points. Explain why, in terms of metallic bonding. [3 marks]",
            marks: 3,
            modelAnswer: "In a metal there is a strong electrostatic attraction between the lattice of positive ions and the sea of delocalised electrons. This metallic bonding extends throughout the whole giant structure. To melt the metal, a large amount of energy is needed to overcome these strong attractions, so most metals have high melting points.",
            markScheme: [
              "Strong attraction between positive ions and delocalised electrons",
              "Bonding extends throughout the giant lattice",
              "Large amount of energy needed to overcome it → high melting point",
            ],
            commonError: "Referring to 'strong covalent bonds' or 'intermolecular forces'. The relevant force is the metallic bond between ions and electrons.",
            difficulty: "core",
            hints: [
              "Identify the two things attracted to each other in a metal.",
              "Is this attraction strong or weak?",
              "Link the strength of the attraction to the energy needed to melt.",
            ],
            guideRef: "Metallic Bonding",
          },
          {
            id: "chem-bonding-bq4-06",
            question: "Brass is an alloy of copper and zinc and is harder than pure copper. Explain why, in terms of structure. [3 marks]",
            marks: 3,
            modelAnswer: "Pure copper is malleable because its layers of identical ions can slide over each other easily. In brass, the zinc atoms are a different size from the copper atoms, so they distort the regular arrangement of the layers. This makes it harder for the layers to slide over one another, so brass is harder than pure copper.",
            markScheme: [
              "Pure metal layers slide easily / are regular",
              "Different-sized atoms (zinc) distort the regular lattice",
              "Layers cannot slide as easily → alloy is harder",
            ],
            commonError: "Saying the alloy has 'stronger bonds'. The hardness comes from the disrupted, irregular lattice that resists sliding, not from stronger bonding.",
            difficulty: "core",
            hints: [
              "Why is a pure metal malleable in the first place?",
              "What does adding a different-sized atom do to the regular layers?",
              "If the layers cannot slide easily, is the metal harder or softer?",
            ],
            guideRef: "Metallic Bonding",
          },
          {
            id: "chem-bonding-bq4-07",
            question: "A substance is a solid at room temperature, conducts electricity both as a solid and when molten, and can be bent into shape. Deduce its type of structure and bonding, justifying your answer. [4 marks]",
            marks: 4,
            modelAnswer: "The substance is metallic (a metal). Conducting in the solid state shows it has delocalised electrons that are free to move even when solid, which is a feature of metallic bonding (ionic solids do not conduct). Conducting when molten is also consistent with mobile electrons. Being able to be bent into shape (malleable) shows that layers of ions can slide over one another, again characteristic of a metallic structure. Together these properties identify it as a giant metallic structure.",
            markScheme: [
              "Identifies the structure as metallic",
              "Conducts as a solid → delocalised electrons free to move (rules out ionic)",
              "Malleable / can be bent → layers of ions slide",
              "Conclusion linked to evidence (giant metallic structure)",
            ],
            commonError: "Choosing ionic because it conducts when molten. Ionic solids do NOT conduct; conducting as a solid plus malleability points to a metal.",
            difficulty: "challenge",
            hints: [
              "Which structures conduct electricity when solid?",
              "Use 'conducts as a solid' to rule out ionic compounds.",
              "What does being bendable (malleable) tell you?",
              "Combine the clues to name one structure type.",
            ],
            strategy: "Use each property to eliminate structure types",
            guideRef: "Structure, Bonding & Properties — Putting It Together",
          },
          {
            id: "chem-bonding-bq4-08",
            question: "The table gives data for four substances. Substance A: melts at 801 °C, conducts only when molten or dissolved. Substance B: melts at −182 °C, never conducts. Substance C: melts at 1083 °C, conducts as a solid and is malleable. Substance D: melts at 3550 °C, does not conduct and is extremely hard. Identify the structure type of each substance and justify each choice. [6 marks]",
            marks: 6,
            modelAnswer: "Substance A is ionic: it has a high melting point and conducts only when molten or dissolved, which happens when its ions become free to move. Substance B is simple molecular: its very low melting point shows only weak intermolecular forces are present, and it never conducts because it has no ions or delocalised electrons. Substance C is metallic: it has a high melting point, conducts as a solid (delocalised electrons), and is malleable (sliding layers of ions). Substance D is giant covalent: it has an extremely high melting point and is very hard (many strong covalent bonds in a rigid network) and does not conduct, fitting a structure such as diamond or silicon(IV) oxide.",
            markScheme: [
              "A = ionic, because it conducts only when molten/aqueous (ions free to move) and has a high melting point",
              "B = simple molecular, because of the very low melting point (weak intermolecular forces) and no conduction",
              "C = metallic, because it conducts as a solid and is malleable",
              "C justification: delocalised electrons / sliding layers of ions",
              "D = giant covalent, because of the extremely high melting point and great hardness",
              "D justification: many strong covalent bonds in a rigid network, no mobile charges → no conduction",
            ],
            commonError: "Mixing up A and C: only the metal (C) conducts as a solid, whereas the ionic compound (A) conducts only when molten or dissolved.",
            difficulty: "challenge",
            hints: [
              "Use the melting point to separate giant structures (high) from simple molecular (low).",
              "Use 'conducts as a solid' to find the metal.",
              "Use 'conducts only when molten/aqueous' to find the ionic compound.",
              "The very hard, very high-melting, non-conducting solid is giant covalent.",
            ],
            strategy: "Match each data fingerprint to a structure type",
            solutions: [
              {
                label: "Working through the data systematically",
                steps: [
                  "B melts at −182 °C (very low) → weak forces → simple molecular; never conducts confirms no ions/electrons free.",
                  "A, C and D have high melting points → giant structures.",
                  "C conducts as a solid and is malleable → metallic (delocalised electrons, sliding layers).",
                  "A conducts only when molten or dissolved → ionic (ions free only when lattice broken).",
                  "D is extremely hard, very high-melting and non-conducting → giant covalent (rigid covalent network).",
                ],
              },
            ],
            guideRef: "Structure, Bonding & Properties — Putting It Together",
          },
          {
            id: "chem-bonding-bq4-09",
            question: "Both copper and molten sodium chloride conduct electricity, but the charge carriers are different. State the charge carrier in each case and explain the difference. [4 marks]",
            marks: 4,
            modelAnswer: "In copper the charge carriers are delocalised electrons. Copper is a metal, so it has a sea of delocalised electrons that are free to move through the solid lattice and carry charge. In molten sodium chloride the charge carriers are ions (Na⁺ and Cl⁻). Sodium chloride is ionic, and when it is melted the lattice breaks down so the ions become free to move and carry charge. So copper conducts by moving electrons, while molten sodium chloride conducts by moving ions.",
            markScheme: [
              "Copper: charge carriers are (delocalised) electrons",
              "Electrons free to move because copper is metallic",
              "Molten NaCl: charge carriers are ions (Na⁺ and Cl⁻)",
              "Ions free to move because the lattice has broken down on melting",
            ],
            commonError: "Saying both conduct by electrons. Molten ionic compounds conduct by moving ions, not electrons.",
            difficulty: "challenge",
            hints: [
              "What type of bonding does copper have? What about sodium chloride?",
              "Name the mobile particle in a metal.",
              "Name the mobile particles in a molten ionic compound.",
              "Explain why each particle is free to move.",
            ],
            strategy: "Identify the bonding type, then the matching charge carrier",
            guideRef: "Structure, Bonding & Properties — Putting It Together",
          },
          {
            id: "chem-bonding-bq4-10",
            question: "Summarise how the type of structure determines whether a substance conducts electricity, covering ionic, simple molecular, giant covalent (including graphite) and metallic structures. [6 marks]",
            marks: 6,
            modelAnswer: "Whether a substance conducts depends on whether it has charged particles that are free to move. Ionic compounds do not conduct as solids because their ions are fixed in the lattice, but they conduct when molten or dissolved because the ions then become free to move. Simple molecular substances never conduct, because they have no ions and no delocalised electrons — there are no mobile charge carriers. Most giant covalent structures (such as diamond and silicon(IV) oxide) do not conduct because all their outer electrons are held in fixed covalent bonds; the exception is graphite, which conducts because each carbon has one delocalised electron free to move through its layers. Metals conduct in both the solid and molten states because they have a sea of delocalised electrons that are always free to move.",
            markScheme: [
              "Conduction depends on charged particles free to move",
              "Ionic: no conduction as solid (fixed ions); conducts when molten/aqueous (ions free)",
              "Simple molecular: never conducts (no ions or delocalised electrons)",
              "Most giant covalent: no conduction (electrons fixed in covalent bonds)",
              "Graphite is the exception: one delocalised electron per carbon conducts",
              "Metallic: conducts as solid and molten (delocalised electrons always free to move)",
            ],
            commonError: "Forgetting graphite as the conducting exception among giant covalent structures, or stating ionic solids conduct.",
            difficulty: "challenge",
            hints: [
              "Start with the single rule: what is needed for conduction?",
              "Go through each structure type and ask if it has mobile charge carriers.",
              "Remember ionic compounds depend on their state.",
              "Do not forget the graphite exception among giant covalent structures.",
            ],
            strategy: "Apply one rule (mobile charge carriers) to every structure type",
            guideRef: "Structure, Bonding & Properties — Putting It Together",
          },
        ],
      },
    ],
  },
};
