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
        description: "Ten multiple-choice questions on ionic bonding, ion formation, dot-and-cross diagrams and the properties of ionic compounds.",
        questions: [
          {
            id: "chem-bonding-bm1-01",
            question: "When magnesium reacts with oxygen, the magnesium atom loses two electrons. What is the electron configuration of the Mg²⁺ ion formed?",
            options: ["2,8,2", "2,8", "2,8,8", "2,6"],
            answerIndex: 1,
            explanation: "Magnesium's electron configuration is 2,8,2. It loses 2 outer electrons to form Mg²⁺ with configuration 2,8 — the same as the noble gas neon. It does not gain an 8-electron outer shell; losing the two outer electrons leaves the already-full second shell as the new outer shell.",
            difficulty: "warmup",
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bm1-02",
            question: "Which formula correctly represents calcium chloride?",
            options: ["CaCl", "CaCl₂", "Ca₂Cl", "Ca₂Cl₃"],
            answerIndex: 1,
            explanation: "Calcium is in Group 2 and forms Ca²⁺; chlorine is in Group 7 and forms Cl⁻. To balance the charges, one Ca²⁺ requires two Cl⁻, giving CaCl₂. CaCl would leave the +2 charge unbalanced; the other options give impossible non-integer charges per atom.",
            difficulty: "warmup",
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bm1-03",
            question: "Which pair of elements is most likely to form an ionic compound?",
            options: ["Carbon and oxygen", "Nitrogen and hydrogen", "Potassium and fluorine", "Sulfur and chlorine"],
            answerIndex: 2,
            explanation: "Ionic bonding forms between a metal and a non-metal. Potassium is a Group 1 metal and fluorine a Group 7 non-metal, so electrons transfer to give K⁺ and F⁻. The other pairs are all non-metal + non-metal combinations, which share electrons to form covalent bonds.",
            difficulty: "warmup",
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bm1-04",
            question: "What is the charge on the ion formed when an aluminium atom (electron configuration 2,8,3) reaches a noble-gas configuration?",
            options: ["1−", "2+", "3+", "3−"],
            answerIndex: 2,
            explanation: "Aluminium is in Group 3 with 3 outer electrons. Losing all 3 outer electrons gives Al³⁺ with the stable configuration 2,8 (same as neon). Losing electrons gives a positive ion, so the charge is 3+, not 3−.",
            difficulty: "warmup",
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bm1-05",
            question: "Why do solid ionic compounds NOT conduct electricity, whereas molten ionic compounds DO?",
            options: [
              "Solids have no ions, but liquids do",
              "In the solid the ions are fixed in the lattice; when molten the ions are free to move and carry charge",
              "Melting converts the ions into delocalised electrons",
              "Solids contain only neutral molecules",
            ],
            answerIndex: 1,
            explanation: "An ionic solid contains ions, but they are held rigidly in fixed positions by strong electrostatic forces, so they cannot move to carry charge. Melting breaks down the lattice, freeing the ions to move and conduct. Melting does not create electrons or destroy the ions.",
            difficulty: "core",
            hints: [
              "Both the solid and the liquid contain the same ions — so 'no ions' cannot be the answer.",
              "Conduction needs charge carriers that are free to move.",
              "Ask: in which state are the ions locked in place, and in which are they mobile?",
            ],
            guideRef: "Properties of Ionic Compounds",
          },
          {
            id: "chem-bonding-bm1-06",
            question: "Sodium chloride is described as having a 'giant ionic lattice'. Which statement best describes this lattice?",
            options: [
              "A small group of one Na⁺ and one Cl⁻ ion held by a covalent bond",
              "Separate NaCl molecules held together by weak intermolecular forces",
              "A regular 3-D arrangement of alternating Na⁺ and Cl⁻ ions held by electrostatic forces throughout",
              "A sea of delocalised electrons surrounding Na⁺ ions",
            ],
            answerIndex: 2,
            explanation: "A giant ionic lattice is a regular, repeating three-dimensional arrangement of oppositely charged ions, with every ion attracted electrostatically to its neighbours of opposite charge throughout the whole structure. There are no discrete NaCl molecules, no covalent bonds and no delocalised electron sea (that describes metals).",
            difficulty: "core",
            hints: [
              "Ionic compounds do not exist as small individual molecules.",
              "Think about how the ions are arranged — is it a tiny unit or an extended repeating pattern?",
              "Which force holds opposite charges together throughout the structure?",
            ],
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bm1-07",
            question: "An ionic compound is brittle: a sharp blow causes the crystal to shatter. Which explanation is correct?",
            options: [
              "The covalent bonds between molecules snap",
              "Displacing a layer brings like-charged ions next to each other, and the repulsion splits the crystal",
              "The delocalised electrons stop flowing",
              "The weak intermolecular forces are easily overcome",
            ],
            answerIndex: 1,
            explanation: "When a force shifts one layer of ions, ions of the same charge become aligned. Like charges repel strongly, so the layers push apart and the crystal cracks rather than bending. Ionic compounds have no molecules, no covalent inter-molecular bonds and no delocalised electrons.",
            difficulty: "core",
            hints: [
              "Picture two layers of alternating + and − ions; now slide one layer by one position.",
              "What charges now line up next to each other?",
              "Like charges do what to each other?",
            ],
            guideRef: "Properties of Ionic Compounds",
          },
          {
            id: "chem-bonding-bm1-08",
            question: "In a dot-and-cross diagram for sodium chloride, how should the ions be represented?",
            options: [
              "Na with one outer electron and Cl with seven, joined by a shared pair",
              "[Na]⁺ with an empty outer shell (2,8) and [Cl]⁻ with a full outer shell of 8 electrons, shown in square brackets with charges",
              "Na and Cl each with eight electrons shared between them",
              "Na²⁺ and Cl²⁻ each with a full outer shell",
            ],
            answerIndex: 1,
            explanation: "Ionic dot-and-cross diagrams show the ions after transfer, in square brackets with their charges. Na⁺ has lost its single outer electron (outer shell now 2,8), shown with an empty outer shell; Cl⁻ has gained that electron to complete its outer shell to 8. There is no shared pair (that is covalent), and the charges are 1+ and 1−, not 2±.",
            difficulty: "core",
            hints: [
              "Ionic bonding transfers electrons — it does not share them.",
              "Show each particle as a separate ion in square brackets with its charge.",
              "Na loses 1 electron; Cl gains 1 — what are the resulting outer shells?",
            ],
            guideRef: "Ionic Bonding",
          },
          {
            id: "chem-bonding-bm1-09",
            question: "Magnesium oxide (MgO) has a melting point of about 2850 °C, far higher than sodium chloride's 801 °C. Both are ionic. The best explanation is that, compared with NaCl, MgO has:",
            options: [
              "Larger ions that pack more loosely",
              "Doubly charged ions (Mg²⁺ and O²⁻), giving stronger electrostatic attraction in the lattice",
              "Covalent character that raises the melting point",
              "A simple molecular structure",
            ],
            answerIndex: 1,
            explanation: "The electrostatic attraction in an ionic lattice increases with the product of the ionic charges. MgO has Mg²⁺ and O²⁻ (charge product 2 × 2 = 4) whereas NaCl has Na⁺ and Cl⁻ (1 × 1 = 1), so the attractions in MgO are much stronger and need far more energy — and a higher temperature — to overcome. Both are giant ionic, not molecular.",
            difficulty: "challenge",
            hints: [
              "Both compounds are ionic giant lattices — focus on what differs between them.",
              "Compare the charges: Mg²⁺/O²⁻ versus Na⁺/Cl⁻.",
              "Attraction strength scales with charge₁ × charge₂.",
              "Stronger attraction → more energy to separate ions → higher melting point.",
            ],
            guideRef: "Properties of Ionic Compounds",
            strategy: "compare ionic charges (Coulomb reasoning)",
          },
          {
            id: "chem-bonding-bm1-10",
            question: "Which compound has the formula that correctly balances the charges of its ions: aluminium oxide, made from Al³⁺ and O²⁻?",
            options: ["AlO", "Al₂O₃", "Al₃O₂", "AlO₂"],
            answerIndex: 1,
            explanation: "To balance Al³⁺ and O²⁻, find the lowest whole numbers giving zero total charge. Two Al³⁺ give +6 and three O²⁻ give −6, so the formula is Al₂O₃. AlO leaves a net +1; Al₃O₂ gives +9 vs −4; AlO₂ gives +3 vs −4 — none of these balance.",
            difficulty: "challenge",
            hints: [
              "Find the total positive charge and total negative charge and make them equal.",
              "Use the 'swap and reduce' method: the charge of one ion becomes the subscript of the other.",
              "Al is 3+, O is 2+ in magnitude — the lowest common multiple is 6.",
            ],
            guideRef: "Ionic Bonding",
            strategy: "balance total charge to zero",
          },
        ],
      },
      {
        id: "chem-bonding-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Ten multiple-choice questions on covalent bonding, dot-and-cross diagrams of molecules and simple molecular properties.",
        questions: [
          {
            id: "chem-bonding-bm2-01",
            question: "Covalent bonding occurs between which types of atom?",
            options: ["A metal and a non-metal", "Two non-metal atoms", "Two metal atoms", "A metal and a noble gas"],
            answerIndex: 1,
            explanation: "Covalent bonding involves the sharing of electron pairs between non-metal atoms. A metal + non-metal gives ionic bonding (electron transfer); two metals give metallic bonding (a sea of delocalised electrons).",
            difficulty: "warmup",
            guideRef: "Covalent Bonding & Simple Molecules",
          },
          {
            id: "chem-bonding-bm2-02",
            question: "How many shared pairs of electrons are there in a molecule of hydrogen (H₂)?",
            options: ["0", "1", "2", "4"],
            answerIndex: 1,
            explanation: "Each hydrogen atom has 1 electron. The two atoms share one pair of electrons (a single covalent bond), giving each hydrogen a full outer shell of 2 electrons.",
            difficulty: "warmup",
            guideRef: "Covalent Bonding & Simple Molecules",
          },
          {
            id: "chem-bonding-bm2-03",
            question: "How many lone pairs are on the nitrogen atom in a molecule of ammonia (NH₃)?",
            options: ["0", "1", "2", "3"],
            answerIndex: 1,
            explanation: "Nitrogen has 5 outer electrons. Three are used to form single bonds with the three hydrogen atoms, leaving 2 electrons — one lone pair — that are not involved in bonding.",
            difficulty: "warmup",
            guideRef: "Covalent Bonding & Simple Molecules",
          },
          {
            id: "chem-bonding-bm2-04",
            question: "Which statement about simple molecular substances such as methane is correct?",
            options: [
              "They have high melting points because covalent bonds are strong",
              "They conduct electricity because they contain ions",
              "They have low melting points because only weak intermolecular forces need to be overcome",
              "They are always solids at room temperature",
            ],
            answerIndex: 2,
            explanation: "Simple molecular substances have low melting and boiling points because melting/boiling only overcomes the weak intermolecular forces between molecules, not the strong covalent bonds within them. They contain no ions or free electrons, so they do not conduct, and many are gases or liquids at room temperature.",
            difficulty: "core",
            hints: [
              "Distinguish the bonds WITHIN molecules from the forces BETWEEN molecules.",
              "Which of those is overcome on melting/boiling?",
              "Are there any free charges in a neutral molecule?",
            ],
            guideRef: "Covalent Bonding & Simple Molecules",
          },
          {
            id: "chem-bonding-bm2-05",
            question: "In a dot-and-cross diagram of carbon dioxide (CO₂), how many bonding pairs of electrons are shared between the carbon atom and each oxygen atom?",
            options: ["1", "2", "3", "4"],
            answerIndex: 1,
            explanation: "CO₂ contains two C=O double bonds. Each double bond is made of two shared pairs of electrons. So between carbon and each oxygen there are 2 bonding pairs (4 in total around carbon).",
            difficulty: "core",
            hints: [
              "A double bond is written C=O — how many lines does that represent?",
              "Each line in a bond stands for one shared pair.",
              "Carbon needs 4 bonds total, shared between 2 oxygen atoms.",
            ],
            guideRef: "Covalent Bonding & Simple Molecules",
          },
          {
            id: "chem-bonding-bm2-06",
            question: "Which molecule contains a double covalent bond?",
            options: ["H₂", "Cl₂", "O₂", "NH₃"],
            answerIndex: 2,
            explanation: "Oxygen (O₂) has a double bond — two shared pairs of electrons — allowing each oxygen atom to reach a full outer shell of 8. H₂ and Cl₂ each have a single bond, and NH₃ contains only single N–H bonds.",
            difficulty: "core",
            hints: [
              "Each oxygen atom needs 2 more electrons to fill its outer shell.",
              "If two atoms each need 2 electrons, how many pairs must they share?",
              "Two shared pairs = a double bond.",
            ],
            guideRef: "Covalent Bonding & Simple Molecules",
          },
          {
            id: "chem-bonding-bm2-07",
            question: "Which statement correctly explains why a covalent bond holds two atoms together?",
            options: [
              "Opposite charges on the two whole atoms attract",
              "The two positive nuclei are both attracted to the shared pair of electrons between them",
              "Electrons are transferred from one atom to the other",
              "Delocalised electrons surround both nuclei",
            ],
            answerIndex: 1,
            explanation: "A covalent bond is the electrostatic attraction between the two positively charged nuclei and the shared pair of negative electrons sitting between them. There is no transfer (that is ionic) and no delocalised electron sea (that is metallic); the atoms are neutral overall.",
            difficulty: "core",
            hints: [
              "What is the shared pair made of, and what charge does it carry?",
              "What charge do the nuclei carry?",
              "A bond is an attraction between opposite charges — identify which charges.",
            ],
            guideRef: "Covalent Bonding & Simple Molecules",
          },
          {
            id: "chem-bonding-bm2-08",
            question: "Iodine (I₂) is a grey solid that melts at 114 °C and sublimes easily. What does this tell you about its structure?",
            options: [
              "It is a giant covalent structure",
              "It is a giant ionic lattice",
              "It is a simple molecular substance with weak intermolecular forces",
              "It is a metal",
            ],
            answerIndex: 2,
            explanation: "A relatively low melting point and easy sublimation are characteristic of a simple molecular substance: only the weak intermolecular forces between I₂ molecules need to be overcome. Giant ionic, giant covalent and metallic structures all have much higher melting points.",
            difficulty: "core",
            hints: [
              "Compare 114 °C with the very high melting points of giant structures.",
              "A low melting point points to weak forces being broken.",
              "Which structure type has only weak forces between its units?",
            ],
            guideRef: "Covalent Bonding & Simple Molecules",
          },
          {
            id: "chem-bonding-bm2-09",
            question: "Ammonia (NH₃, Mr = 17) boils at −33 °C while methane (CH₄, Mr = 16) boils at −161 °C. Both are simple molecular. The best explanation for ammonia's higher boiling point is:",
            options: [
              "Ammonia has stronger covalent bonds than methane",
              "Ammonia is an ionic compound",
              "Ammonia molecules are polar (lone pair on N), giving stronger intermolecular attractions than non-polar methane",
              "Methane has a much greater relative molecular mass",
            ],
            answerIndex: 2,
            explanation: "Both are simple molecular, so boiling point depends on the strength of the intermolecular forces. The lone pair and N–H bonds make NH₃ polar (and able to hydrogen bond), so the attractions between NH₃ molecules are stronger than between the non-polar CH₄ molecules — hence the higher boiling point. The Mr values are almost equal, so mass cannot explain the difference.",
            difficulty: "challenge",
            hints: [
              "Both are simple molecular — so look at the intermolecular forces, not the covalent bonds.",
              "Which molecule has an uneven charge distribution (is polar)?",
              "The lone pair on nitrogen makes NH₃ polar.",
              "Stronger intermolecular attraction → higher boiling point.",
            ],
            guideRef: "Covalent Bonding & Simple Molecules",
            strategy: "compare polarity and intermolecular forces",
          },
          {
            id: "chem-bonding-bm2-10",
            question: "Carbon dioxide (bp −78 °C) has a much lower boiling point than water (bp 100 °C), even though both are small covalent molecules. The main reason is:",
            options: [
              "The C=O bonds are weaker than the O–H bonds",
              "CO₂ is non-polar overall, so its intermolecular forces are weaker than the strong hydrogen bonding between polar water molecules",
              "CO₂ is ionic and water is covalent",
              "Water has a giant covalent structure",
            ],
            answerIndex: 1,
            explanation: "Boiling point depends on intermolecular forces. CO₂ is a linear, symmetrical, non-polar molecule, so its intermolecular forces are very weak. Water is bent and polar, with strong hydrogen bonding between molecules, so much more energy is needed to separate water molecules — giving a far higher boiling point. The relative bond strengths within the molecules are not what is overcome on boiling.",
            difficulty: "challenge",
            hints: [
              "Boiling overcomes forces between molecules, not the bonds inside them.",
              "Consider the shape and polarity of each molecule: CO₂ is linear and symmetrical.",
              "Water molecules form strong hydrogen bonds; CO₂ molecules do not.",
              "Stronger intermolecular forces → higher boiling point.",
            ],
            guideRef: "Covalent Bonding & Simple Molecules",
            strategy: "link polarity/shape to intermolecular force strength",
          },
        ],
      },
      {
        id: "chem-bonding-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Ten multiple-choice questions on giant covalent structures (diamond, graphite, silicon(IV) oxide) and metallic bonding.",
        questions: [
          {
            id: "chem-bonding-bm3-01",
            question: "In diamond, how many other carbon atoms is each carbon atom covalently bonded to?",
            options: ["2", "3", "4", "6"],
            answerIndex: 2,
            explanation: "In diamond each carbon atom forms four single covalent bonds to four neighbouring carbon atoms in a tetrahedral arrangement, using all four of its outer electrons. This rigid 3-D network makes diamond very hard.",
            difficulty: "warmup",
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bm3-02",
            question: "Which substance conducts electricity because of a 'sea' of delocalised electrons surrounding positive ions?",
            options: ["Diamond", "Sodium chloride (solid)", "Copper", "Iodine"],
            answerIndex: 2,
            explanation: "Copper is a metal: its structure is positive metal ions in a sea of delocalised electrons that are free to move and carry charge. Diamond has no free electrons; solid NaCl has fixed ions; iodine is simple molecular with no free charges.",
            difficulty: "warmup",
            guideRef: "Metallic Bonding",
          },
          {
            id: "chem-bonding-bm3-03",
            question: "Which property is shared by ALL giant covalent structures (diamond, graphite, silicon(IV) oxide)?",
            options: ["They are all electrical conductors", "They all have very high melting points", "They are all soft", "They all dissolve in water"],
            answerIndex: 1,
            explanation: "All giant covalent structures have very high melting points because melting requires breaking a very large number of strong covalent bonds throughout the lattice. They are not all conductors (only graphite is), not all soft (diamond and SiO₂ are very hard), and they are insoluble in water.",
            difficulty: "warmup",
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bm3-04",
            question: "Graphite is used as a lubricant because it is soft and slippery. Which feature of its structure explains this?",
            options: [
              "Each carbon forms four bonds in all directions",
              "It contains ions that repel each other",
              "Its hexagonal layers are held together only by weak intermolecular forces and can slide over each other",
              "It has delocalised electrons",
            ],
            answerIndex: 2,
            explanation: "Graphite is built from flat hexagonal layers. Within a layer the bonds are strong, but between layers there are only weak intermolecular forces, so the layers can slide over one another — making graphite soft and slippery. The delocalised electrons explain conductivity, not softness.",
            difficulty: "core",
            hints: [
              "Softness is about how easily parts of the structure move past each other.",
              "Graphite is made of layers — what holds one layer to the next?",
              "Weak forces between layers allow them to do what?",
            ],
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bm3-05",
            question: "Why does graphite conduct electricity but diamond does not?",
            options: [
              "Graphite contains ions and diamond does not",
              "Each carbon in graphite uses only 3 of its 4 outer electrons in bonds, leaving 1 delocalised electron per atom to carry charge",
              "Graphite's covalent bonds are weaker",
              "Diamond's electrons are positively charged",
            ],
            answerIndex: 1,
            explanation: "In graphite each carbon forms only 3 covalent bonds, so its fourth outer electron is delocalised and free to move along the layers, carrying current. In diamond all four outer electrons of each carbon are locked in covalent bonds, so there are no free electrons to carry charge. Neither contains ions.",
            difficulty: "core",
            hints: [
              "Count the bonds each carbon makes in diamond (4) versus graphite (3).",
              "What happens to the 'spare' fourth electron in graphite?",
              "Conduction needs charges that are free to move.",
            ],
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bm3-06",
            question: "In silicon(IV) oxide (SiO₂), each silicon atom is bonded to four oxygen atoms. How many silicon atoms is each oxygen atom bonded to?",
            options: ["1", "2", "3", "4"],
            answerIndex: 1,
            explanation: "In the SiO₂ giant covalent lattice each silicon bonds to 4 oxygen atoms and each oxygen bridges between 2 silicon atoms. This 1 Si : 2 O ratio gives the empirical formula SiO₂ and a continuous 3-D network.",
            difficulty: "core",
            hints: [
              "The formula SiO₂ tells you the ratio of atoms.",
              "If every Si has 4 O around it, the O atoms must be shared.",
              "For the ratio to be 1:2, each O must connect how many Si atoms?",
            ],
            guideRef: "Giant Covalent Structures",
          },
          {
            id: "chem-bonding-bm3-07",
            question: "Metals are good conductors of heat as well as electricity. Which feature is mainly responsible for both?",
            options: [
              "The regular arrangement of positive ions",
              "The mobile delocalised electrons, which transfer both charge and kinetic energy",
              "The weak intermolecular forces",
              "The presence of negative ions",
            ],
            answerIndex: 1,
            explanation: "The delocalised electrons in a metal are free to move; they carry electrical charge (electrical conduction) and also transfer kinetic energy quickly through the lattice (thermal conduction). Metals contain no negative ions and no intermolecular forces of the molecular kind.",
            difficulty: "core",
            hints: [
              "Think about what is free to move through a metal.",
              "The same particles can carry charge and energy.",
              "These particles are not tied to any one ion.",
            ],
            guideRef: "Metallic Bonding",
          },
          {
            id: "chem-bonding-bm3-08",
            question: "An unknown solid has a very high melting point, conducts electricity when solid, and can be bent into shape without breaking. What is the bonding type?",
            options: ["Ionic", "Simple molecular", "Metallic", "Giant covalent"],
            answerIndex: 2,
            explanation: "Conducting in the solid state rules out ionic (conducts only when molten/aqueous) and most giant covalent solids; being malleable (bends without breaking) rules out giant covalent, which is hard and brittle. Only metallic bonding gives all three: high melting point, solid-state conductivity (delocalised electrons) and malleability (layers of ions slide while the electron sea reforms).",
            difficulty: "challenge",
            hints: [
              "Which structures conduct when solid? Metals and graphite.",
              "Which of those can be bent into shape without shattering?",
              "Graphite is not malleable; what is?",
              "Combine all three clues to eliminate the other options.",
            ],
            guideRef: "Metallic Bonding",
            strategy: "elimination using several properties",
          },
          {
            id: "chem-bonding-bm3-09",
            question: "Which statement correctly matches a substance to its structure AND a valid explanation of a property?",
            options: [
              "Graphite — giant covalent — soft because all four electrons of each carbon are delocalised",
              "Diamond — giant covalent — very hard because of a rigid 3-D network of strong C–C covalent bonds",
              "Silicon(IV) oxide — simple molecular — low melting point due to weak intermolecular forces",
              "Copper — ionic — conducts because of free-moving ions",
            ],
            answerIndex: 1,
            explanation: "Diamond is correctly identified as giant covalent, and its hardness genuinely arises from a rigid three-dimensional network of strong C–C bonds. Graphite is soft because of weak forces between layers (only one electron per carbon is delocalised). SiO₂ is giant covalent with a very high melting point. Copper is metallic and conducts via delocalised electrons, not ions.",
            difficulty: "challenge",
            hints: [
              "Check each option in two stages: is the structure type right, then is the reason right?",
              "Graphite: how many delocalised electrons per carbon?",
              "SiO₂: is it really simple molecular?",
              "Copper: does it conduct via ions or electrons?",
            ],
            guideRef: "Structure, Bonding & Properties — Putting It Together",
            strategy: "systematic two-stage checking",
          },
          {
            id: "chem-bonding-bm3-10",
            question: "Brass (a copper–zinc alloy) is harder than pure copper. Which explanation, using metallic bonding, is correct?",
            options: [
              "The added zinc atoms form covalent bonds with copper",
              "Differently sized zinc atoms disrupt the regular lattice, making it harder for layers of ions to slide",
              "Zinc removes the delocalised electrons, so the metal cannot bend",
              "Brass contains ions held by strong electrostatic forces",
            ],
            answerIndex: 1,
            explanation: "In a pure metal the regular layers of identical ions can slide easily. In an alloy, atoms of a different size (here zinc) distort the regular arrangement, so the layers can no longer slide smoothly over each other — making the alloy harder than the pure metal. The bonding is still metallic, with delocalised electrons intact.",
            difficulty: "challenge",
            hints: [
              "Recall why pure metals are soft/malleable — layers sliding.",
              "What would happen to sliding if some atoms were a different size?",
              "Alloys keep metallic bonding but disrupt the regular lattice.",
            ],
            guideRef: "Metallic Bonding",
            strategy: "link lattice disruption to reduced sliding",
          },
        ],
      },
      {
        id: "chem-bonding-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Ten synoptic multiple-choice questions linking structure, bonding and properties across all four bonding types.",
        questions: [
          {
            id: "chem-bonding-bm4-01",
            question: "Which type of substance generally has the LOWEST melting point?",
            options: ["Ionic compound", "Simple molecular substance", "Giant covalent structure", "Metal"],
            answerIndex: 1,
            explanation: "Simple molecular substances have low melting points because only weak intermolecular forces need to be overcome. Ionic, giant covalent and metallic structures are all giant lattices with many strong bonds/attractions, giving much higher melting points.",
            difficulty: "warmup",
            guideRef: "Structure, Bonding & Properties — Putting It Together",
          },
          {
            id: "chem-bonding-bm4-02",
            question: "Which substance conducts electricity in the SOLID state?",
            options: ["Sodium chloride", "Diamond", "Graphite", "Sulfur"],
            answerIndex: 2,
            explanation: "Graphite conducts in the solid state because of its delocalised electrons. Solid NaCl has fixed ions (conducts only when molten/aqueous); diamond and sulfur have no free charge carriers at all.",
            difficulty: "warmup",
            guideRef: "Structure, Bonding & Properties — Putting It Together",
          },
          {
            id: "chem-bonding-bm4-03",
            question: "Which list correctly pairs each bonding type with the particles it holds together?",
            options: [
              "Ionic: molecules; Metallic: atoms; Covalent: ions",
              "Ionic: ions; Metallic: positive ions and delocalised electrons; Covalent: atoms sharing electrons",
              "Ionic: atoms; Metallic: molecules; Covalent: ions",
              "Ionic: delocalised electrons; Metallic: ions; Covalent: molecules",
            ],
            answerIndex: 1,
            explanation: "Ionic bonding holds oppositely charged ions; metallic bonding holds positive metal ions and a sea of delocalised electrons; covalent bonding holds non-metal atoms together by shared electron pairs.",
            difficulty: "core",
            hints: [
              "Recall the definition of each bonding type.",
              "Which type involves a 'sea' of electrons?",
              "Which type involves sharing rather than transfer?",
            ],
            guideRef: "Structure, Bonding & Properties — Putting It Together",
          },
          {
            id: "chem-bonding-bm4-04",
            question: "A substance has a high melting point, does not conduct as a solid, but conducts when molten or dissolved in water. What is it?",
            options: ["A metal", "A simple molecular substance", "An ionic compound", "A giant covalent structure"],
            answerIndex: 2,
            explanation: "These are the classic properties of an ionic compound: a high melting point (strong electrostatic forces in a giant lattice), no conduction as a solid (fixed ions) but conduction when molten or aqueous (free-moving ions). Metals conduct as solids; molecular substances have low melting points; giant covalent structures (except graphite) never conduct.",
            difficulty: "core",
            hints: [
              "The conduction pattern (no when solid, yes when molten/aqueous) is a strong clue.",
              "What charge carriers become free when an ionic solid melts or dissolves?",
              "Eliminate substances that conduct as solids or have low melting points.",
            ],
            guideRef: "Structure, Bonding & Properties — Putting It Together",
          },
          {
            id: "chem-bonding-bm4-05",
            question: "When magnesium chloride is melted and electrolysed, the ions move to the electrodes. Why can the ions move when molten but not when solid?",
            options: [
              "Melting creates new ions",
              "In the solid the ions are locked in the lattice; melting frees them to move",
              "Melting turns the ions into atoms",
              "The ions only exist in the liquid state",
            ],
            answerIndex: 1,
            explanation: "The same Mg²⁺ and Cl⁻ ions are present in both states. In the solid they are held in fixed positions in the lattice; melting overcomes enough of the electrostatic forces to break down the lattice, allowing the ions to move freely and migrate to the electrodes.",
            difficulty: "core",
            hints: [
              "The ions exist in both solid and liquid — melting does not make new ones.",
              "What is different about the ions' freedom to move in each state?",
              "Conduction/electrolysis needs mobile ions.",
            ],
            guideRef: "Properties of Ionic Compounds",
          },
          {
            id: "chem-bonding-bm4-06",
            question: "Both diamond and sodium chloride are hard solids with high melting points, yet only one conducts when molten. Which statement is correct?",
            options: [
              "Diamond conducts when molten because its bonds break to give ions",
              "Sodium chloride conducts when molten because it contains ions that become free to move; diamond does not because it has no ions or free electrons",
              "Both conduct when molten because both are giant structures",
              "Neither conducts when molten",
            ],
            answerIndex: 1,
            explanation: "NaCl is ionic, so melting frees its Na⁺ and Cl⁻ ions to move and carry charge. Diamond is giant covalent with no ions and no free electrons (all four outer electrons of each carbon are in bonds), so even when melted it has no mobile charge carriers and cannot conduct.",
            difficulty: "challenge",
            hints: [
              "Identify the bonding type of each: ionic vs giant covalent.",
              "What charge carriers, if any, does each have?",
              "Melting an ionic solid frees ions; melting diamond does not create charge carriers.",
            ],
            guideRef: "Structure, Bonding & Properties — Putting It Together",
            strategy: "identify charge carriers for each structure",
          },
          {
            id: "chem-bonding-bm4-07",
            question: "Substance Q has a melting point of 1085 °C, conducts electricity as a solid, and is malleable. Substance R has a melting point of 801 °C, does not conduct as a solid, but conducts when dissolved in water. What are Q and R?",
            options: [
              "Q is ionic; R is metallic",
              "Q is metallic; R is ionic",
              "Q is giant covalent; R is simple molecular",
              "Q is simple molecular; R is metallic",
            ],
            answerIndex: 1,
            explanation: "Q conducts as a solid and is malleable — the signature of a metal (delocalised electrons; sliding layers of ions). R does not conduct as a solid but does when dissolved — the signature of an ionic compound (fixed ions in the solid, free-moving ions in solution).",
            difficulty: "challenge",
            hints: [
              "Solid-state conduction + malleability points to one specific structure.",
              "No solid conduction but aqueous conduction points to another.",
              "Match each set of clues to the correct bonding type.",
            ],
            guideRef: "Structure, Bonding & Properties — Putting It Together",
            strategy: "match property fingerprints to structures",
          },
          {
            id: "chem-bonding-bm4-08",
            question: "Why does melting a simple molecular solid require far less energy than melting a giant covalent solid?",
            options: [
              "Molecular solids contain weaker covalent bonds",
              "Melting a molecular solid overcomes only weak intermolecular forces, whereas melting a giant covalent solid breaks many strong covalent bonds",
              "Giant covalent solids contain ions",
              "Molecular solids have no bonds at all",
            ],
            answerIndex: 1,
            explanation: "When a simple molecular solid melts, the molecules separate by overcoming only the weak intermolecular forces; the strong covalent bonds inside each molecule stay intact. Melting a giant covalent solid means breaking the strong covalent bonds that form the continuous lattice, which needs far more energy.",
            difficulty: "challenge",
            hints: [
              "What is actually overcome when each type melts?",
              "For molecular solids: are the covalent bonds inside the molecules broken?",
              "For giant covalent solids: what must break for the lattice to come apart?",
            ],
            guideRef: "Structure, Bonding & Properties — Putting It Together",
            strategy: "compare forces broken on melting",
          },
          {
            id: "chem-bonding-bm4-09",
            question: "Which row of the table is fully correct?",
            options: [
              "Simple molecular: low mp, conducts when molten",
              "Ionic: high mp, conducts when solid",
              "Metallic: high mp, conducts when solid",
              "Giant covalent: low mp, never conducts",
            ],
            answerIndex: 2,
            explanation: "Metals have high melting points and conduct as solids (delocalised electrons) — correct. Simple molecular substances do not conduct even when molten (no ions/electrons). Ionic compounds do not conduct as solids. Giant covalent structures have very high (not low) melting points, and graphite is an exception that does conduct.",
            difficulty: "core",
            hints: [
              "Check both the melting point AND the conductivity claim in each row.",
              "Which structures conduct as solids?",
              "Eliminate rows with one wrong fact.",
            ],
            guideRef: "Structure, Bonding & Properties — Putting It Together",
          },
          {
            id: "chem-bonding-bm4-10",
            question: "Sugar (a simple molecular solid) dissolves in water but the solution does NOT conduct electricity, whereas a salt solution does. Why?",
            options: [
              "Sugar molecules are too large to move",
              "Sugar dissolves as neutral molecules, releasing no ions, so there are no charge carriers; salt releases free-moving ions",
              "Sugar reacts with water to form a gas",
              "Sugar solution contains delocalised electrons",
            ],
            answerIndex: 1,
            explanation: "Conduction needs free-moving charged particles. When salt (ionic) dissolves, it releases mobile ions that carry charge. When sugar (simple molecular) dissolves, it disperses as neutral molecules and produces no ions, so the solution has no charge carriers and does not conduct.",
            difficulty: "challenge",
            hints: [
              "What particles does each substance release on dissolving?",
              "Does dissolving sugar produce any ions?",
              "Conduction needs free charged particles.",
            ],
            guideRef: "Structure, Bonding & Properties — Putting It Together",
            strategy: "ask whether dissolving releases ions",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "chem-bonding-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Ten structured questions on ionic bonding, ion formation, lattice properties and charge balancing.",
        questions: [
          {
            id: "chem-bonding-bq1-01",
            question: "Sodium (Group 1) reacts with chlorine (Group 7) to form sodium chloride. (a) Describe, in terms of electrons, what happens when the ionic bond forms. [2] (b) Give the electron configuration of the Na⁺ ion and of the Cl⁻ ion. [2]",
            marks: 4,
            modelAnswer: "(a) The sodium atom loses one electron, which is transferred to the chlorine atom. This forms a positive sodium ion (Na⁺) and a negative chloride ion (Cl⁻), held together by strong electrostatic attraction. (b) Na⁺ has the configuration 2,8 (it has lost its single outer electron). Cl⁻ has the configuration 2,8,8 (it has gained one electron to complete its outer shell). Both now have full outer shells (noble-gas configurations).",
            markScheme: [
              "(a) Sodium loses 1 electron / 1 electron transferred from Na to Cl",
              "(a) Forms Na⁺ and Cl⁻ held by electrostatic attraction",
              "(b) Na⁺ is 2,8",
              "(b) Cl⁻ is 2,8,8",
            ],
            commonError: "Some write Na⁺ as 2,8,1 (forgetting that the outer electron is lost) or Cl⁻ as 2,8,7 (forgetting the gained electron). After transfer both ions must have full outer shells.",
            guideRef: "Ionic Bonding",
            difficulty: "warmup",
          },
          {
            id: "chem-bonding-bq1-02",
            question: "State three typical physical properties of ionic compounds. [3]",
            marks: 3,
            modelAnswer: "Any three of: high melting point and boiling point; do not conduct electricity when solid; do conduct electricity when molten or dissolved in water; brittle (shatter when struck); many are soluble in water. (Each is a consequence of the giant ionic lattice held by strong electrostatic forces.)",
            markScheme: [
              "High melting point / high boiling point",
              "Do not conduct when solid / conduct when molten or in aqueous solution",
              "Brittle / shatter when struck",
              "(Allow) soluble in water",
            ],
            commonError: "Stating 'conducts electricity' without specifying the state — ionic compounds only conduct when molten or dissolved, not as a solid.",
            guideRef: "Properties of Ionic Compounds",
            difficulty: "warmup",
          },
          {
            id: "chem-bonding-bq1-03",
            question: "Explain why solid potassium iodide does not conduct electricity but molten potassium iodide does. [4]",
            marks: 4,
            modelAnswer: "Potassium iodide is an ionic compound made of K⁺ and I⁻ ions. In the solid, these ions are held in fixed positions within the giant ionic lattice by strong electrostatic forces, so they cannot move; with no mobile charge carriers, the solid does not conduct electricity. When potassium iodide is melted, the lattice breaks down and the K⁺ and I⁻ ions become free to move. These mobile ions carry charge through the liquid, so molten potassium iodide conducts electricity.",
            markScheme: [
              "Solid contains K⁺ and I⁻ ions but they are fixed / cannot move in the lattice",
              "No mobile charge carriers → solid does not conduct",
              "Melting breaks down the lattice / frees the ions",
              "Free-moving ions carry charge → molten conducts",
            ],
            commonError: "Saying the solid 'has no ions' — it does have ions, but they cannot move. The issue is mobility, not the absence of ions.",
            guideRef: "Properties of Ionic Compounds",
            difficulty: "core",
            hints: [
              "Both states contain the same ions — focus on whether they can move.",
              "What holds the ions in place in the solid?",
              "What changes when the solid melts?",
              "Link 'free-moving ions' to 'carry charge / conduct'.",
            ],
          },
          {
            id: "chem-bonding-bq1-04",
            question: "Lithium fluoride is formed from lithium (electron configuration 2,1) and fluorine (electron configuration 2,7). (a) State the charge on each ion formed. [2] (b) Give the formula of lithium fluoride and explain how you worked it out. [2]",
            marks: 4,
            modelAnswer: "(a) Lithium loses its single outer electron to form Li⁺ (charge 1+). Fluorine gains one electron to complete its outer shell, forming F⁻ (charge 1−). (b) The formula is LiF. One Li⁺ (charge +1) exactly balances one F⁻ (charge −1), giving a neutral compound, so the ions combine in a 1:1 ratio.",
            markScheme: [
              "(a) Li⁺ / 1+",
              "(a) F⁻ / 1−",
              "(b) Formula LiF",
              "(b) Charges balance 1:1 / +1 and −1 cancel to give neutral compound",
            ],
            commonError: "Writing Li₂F or LiF₂ — because the charges are equal and opposite, the ratio must be 1:1.",
            guideRef: "Ionic Bonding",
            difficulty: "warmup",
          },
          {
            id: "chem-bonding-bq1-05",
            question: "Aluminium oxide is an ionic compound formed from aluminium and oxygen. (a) Write the symbols, including charges, for the aluminium ion and the oxide ion. [2] (b) Determine the formula of aluminium oxide, showing how the charges balance. [3]",
            marks: 5,
            modelAnswer: "(a) Aluminium is in Group 3 and forms Al³⁺. Oxygen is in Group 6 and forms O²⁻. (b) To make the compound neutral the total positive charge must equal the total negative charge. The lowest common multiple of 3 and 2 is 6. Therefore two Al³⁺ ions give a total charge of +6, and three O²⁻ ions give a total charge of −6. These balance, so the formula is Al₂O₃.",
            markScheme: [
              "(a) Al³⁺",
              "(a) O²⁻",
              "(b) Total positive charge must equal total negative charge / use LCM of 6",
              "(b) 2 × Al³⁺ = +6 and 3 × O²⁻ = −6",
              "(b) Formula Al₂O₃",
            ],
            commonError: "Writing AlO (charges +3 and −2 do not balance). You must scale up to equalise the total charges.",
            guideRef: "Ionic Bonding",
            difficulty: "core",
            hints: [
              "Use group numbers to find each ion's charge.",
              "The compound must be electrically neutral overall.",
              "Find the lowest common multiple of the two charge magnitudes (3 and 2).",
              "How many of each ion gives +6 and −6?",
            ],
            solutions: [
              {
                label: "Charge-balancing method",
                steps: [
                  "Al is Group 3 → Al³⁺; O is Group 6 → O²⁻.",
                  "Lowest common multiple of charges 3 and 2 is 6.",
                  "Number of Al³⁺ needed for +6: 6 ÷ 3 = 2.",
                  "Number of O²⁻ needed for −6: 6 ÷ 2 = 3.",
                  "Combine: Al₂O₃ (total +6 and −6 cancel → neutral).",
                ],
              },
            ],
          },
          {
            id: "chem-bonding-bq1-06",
            question: "Explain why ionic compounds are brittle and shatter when hit with enough force, using ideas about the arrangement of ions. [3]",
            marks: 3,
            modelAnswer: "In a giant ionic lattice the ions are arranged in alternating layers of positive and negative charge. When a strong force is applied, one layer of ions is displaced relative to the next. This brings ions of the same charge directly opposite one another. Like charges repel strongly, so the layers are pushed apart and the crystal splits or shatters rather than bending.",
            markScheme: [
              "Force displaces / shifts a layer of ions",
              "Ions of the same (like) charge become aligned next to each other",
              "Like charges repel → crystal splits / shatters",
            ],
            commonError: "Saying the bonds 'snap because they are weak' — ionic bonds are strong; brittleness is due to like-charge repulsion when layers shift, not weak bonds.",
            guideRef: "Properties of Ionic Compounds",
            difficulty: "core",
            hints: [
              "Picture alternating + and − ions in layers.",
              "What happens to the alignment when one layer slides?",
              "What do like charges do to each other?",
            ],
          },
          {
            id: "chem-bonding-bq1-07",
            question: "Magnesium reacts with oxygen to form magnesium oxide (MgO). (a) Describe, in terms of electron transfer, how the ionic bond forms in MgO. [3] (b) Give the electron configurations of the Mg²⁺ ion and the O²⁻ ion. [2]",
            marks: 5,
            modelAnswer: "(a) The magnesium atom (2,8,2) loses its two outer electrons. These two electrons are transferred to the oxygen atom (2,6), which gains them to complete its outer shell. This forms a magnesium ion (Mg²⁺) and an oxide ion (O²⁻), which are held together by strong electrostatic attraction. (b) Mg²⁺ has the configuration 2,8. O²⁻ has the configuration 2,8. Both have full outer shells (the configuration of neon).",
            markScheme: [
              "(a) Mg loses 2 electrons",
              "(a) The 2 electrons are transferred to / gained by oxygen",
              "(a) Forms Mg²⁺ and O²⁻ held by electrostatic attraction",
              "(b) Mg²⁺ is 2,8",
              "(b) O²⁻ is 2,8",
            ],
            commonError: "Writing Mg²⁺ as 2,8,2 (forgetting it loses the outer electrons) — Mg²⁺ must be 2,8.",
            guideRef: "Ionic Bonding",
            difficulty: "core",
            hints: [
              "How many outer electrons does magnesium have to lose?",
              "Where do those electrons go?",
              "After transfer, what is the outer shell of each ion?",
            ],
          },
          {
            id: "chem-bonding-bq1-08",
            question: "Magnesium oxide (MgO) has a melting point of about 2850 °C, much higher than that of sodium chloride (801 °C). Both are ionic compounds. Explain this difference. [4]",
            marks: 4,
            modelAnswer: "Both MgO and NaCl have giant ionic lattices held together by electrostatic attraction between oppositely charged ions. However, MgO contains doubly charged ions (Mg²⁺ and O²⁻), whereas NaCl contains only singly charged ions (Na⁺ and Cl⁻). The strength of the electrostatic attraction increases with the product of the ionic charges, so the attractions in MgO are much stronger. Far more energy — and therefore a much higher temperature — is needed to overcome these stronger forces and melt MgO, giving it a higher melting point.",
            markScheme: [
              "Both are giant ionic lattices",
              "MgO has higher charges on its ions (2+ and 2−) than NaCl (1+ and 1−)",
              "Stronger electrostatic attraction in MgO",
              "More energy needed to overcome forces → higher melting point",
            ],
            commonError: "Attributing the difference to ion size or molecular mass — the dominant factor here is the magnitude of the ionic charges.",
            guideRef: "Properties of Ionic Compounds",
            difficulty: "challenge",
            hints: [
              "Note that both compounds are ionic — so what differs?",
              "Compare the charges on the ions in each compound.",
              "Electrostatic attraction depends on the product of the charges.",
              "Stronger attraction → more energy → higher melting point.",
            ],
            strategy: "compare ionic charges, then link to energy and melting point",
          },
          {
            id: "chem-bonding-bq1-09",
            question: "Many ionic compounds, such as copper(II) sulfate, dissolve in water and the solution conducts electricity, yet sugar dissolves in water without the solution conducting. Explain this difference. [4]",
            marks: 4,
            modelAnswer: "Copper(II) sulfate is an ionic compound. When it dissolves, the lattice breaks down and releases free-moving Cu²⁺ and SO₄²⁻ ions into the solution. These mobile, charged ions can carry an electric current, so the solution conducts. Sugar is a simple molecular (covalent) substance. When it dissolves, it disperses as neutral molecules and produces no ions. With no free charged particles, the sugar solution has no charge carriers, so it does not conduct electricity.",
            markScheme: [
              "Copper(II) sulfate is ionic / releases ions on dissolving",
              "Free-moving ions in solution carry charge → conducts",
              "Sugar is simple molecular / covalent",
              "Dissolves as neutral molecules, no ions → does not conduct",
            ],
            commonError: "Assuming any dissolved substance conducts — only substances that release ions (electrolytes) conduct; molecular substances like sugar do not.",
            guideRef: "Properties of Ionic Compounds",
            difficulty: "challenge",
            hints: [
              "What particles does an ionic compound release when it dissolves?",
              "What particles does a molecular substance like sugar release?",
              "Conduction needs free-moving charged particles.",
              "Compare ions versus neutral molecules.",
            ],
            strategy: "compare what each substance releases on dissolving",
          },
          {
            id: "chem-bonding-bq1-10",
            question: "Using ideas about Coulomb's law (force ∝ charge × charge ÷ distance²), explain which compound you would expect to have the higher melting point: sodium fluoride (Na⁺F⁻) or calcium oxide (Ca²⁺O²⁻). [3]",
            marks: 3,
            modelAnswer: "The electrostatic force between ions increases with the product of their charges. In sodium fluoride the charge product is 1 × 1 = 1, while in calcium oxide it is 2 × 2 = 4 — four times greater. The ions are also of broadly similar size, so the distance factor does not reverse this. Calcium oxide therefore has much stronger electrostatic attractions in its lattice, requiring more energy to break apart, so it has the higher melting point.",
            markScheme: [
              "Charge product for NaF = 1 × 1 = 1; for CaO = 2 × 2 = 4",
              "CaO has greater charge product → stronger electrostatic attraction",
              "Stronger attraction → more energy to break lattice → CaO higher melting point",
            ],
            commonError: "Forgetting to multiply the charges — both the cation and anion charges contribute, so CaO's advantage is the product (4) not the sum.",
            guideRef: "Properties of Ionic Compounds",
            difficulty: "challenge",
            hints: [
              "Work out the product of the two ionic charges for each compound.",
              "Na⁺F⁻: 1 × 1. Ca²⁺O²⁻: 2 × 2.",
              "Larger charge product means stronger attraction.",
              "Stronger attraction → higher melting point.",
            ],
            strategy: "compute charge products and compare",
            solutions: [
              {
                label: "Charge-product comparison",
                steps: [
                  "NaF: charge product = (1) × (1) = 1.",
                  "CaO: charge product = (2) × (2) = 4.",
                  "CaO's charge product is 4× that of NaF → much stronger electrostatic attraction.",
                  "Ions are of comparable size, so distance does not offset this.",
                  "Conclusion: CaO has the higher melting point.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "chem-bonding-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Ten structured questions on covalent bonding, dot-and-cross diagrams of molecules and simple molecular properties.",
        questions: [
          {
            id: "chem-bonding-bq2-01",
            question: "Define a covalent bond. [2]",
            marks: 2,
            modelAnswer: "A covalent bond is a shared pair of electrons between two atoms (usually non-metal atoms). It is the electrostatic attraction between the two nuclei and the shared pair of electrons; sharing allows each atom to achieve a full outer shell.",
            markScheme: [
              "A shared pair of electrons / sharing of electrons",
              "Between (two) non-metal atoms / attraction between nuclei and shared pair",
            ],
            commonError: "Describing covalent bonding as 'transfer of electrons' — that is ionic bonding. Covalent bonding is sharing.",
            guideRef: "Covalent Bonding & Simple Molecules",
            difficulty: "warmup",
          },
          {
            id: "chem-bonding-bq2-02",
            question: "For a molecule of water (H₂O): (a) state how many bonding pairs and how many lone pairs are on the oxygen atom. [2] (b) State the type of bonding in water. [1]",
            marks: 3,
            modelAnswer: "(a) Oxygen has 2 bonding pairs (one shared pair with each of the two hydrogen atoms) and 2 lone pairs (the remaining four outer electrons). (b) The bonding in water is covalent (single covalent bonds between O and each H).",
            markScheme: [
              "(a) 2 bonding pairs",
              "(a) 2 lone pairs",
              "(b) Covalent",
            ],
            commonError: "Forgetting the lone pairs on oxygen — oxygen has 6 outer electrons, only 2 of which are used in bonding.",
            guideRef: "Covalent Bonding & Simple Molecules",
            difficulty: "warmup",
          },
          {
            id: "chem-bonding-bq2-03",
            question: "Draw a dot-and-cross diagram for a molecule of ammonia (NH₃) and state how many lone pairs the nitrogen atom has. [4]",
            marks: 4,
            modelAnswer: "Dot-and-cross diagram: a central nitrogen atom bonded to three hydrogen atoms. Each N–H bond is shown as one shared pair (one dot from N and one cross from H, or vice versa) between N and H. Nitrogen also has one lone pair (a pair of non-bonding electrons) shown on the nitrogen. Each hydrogen has 2 electrons (a full shell); nitrogen has 8 electrons around it in total (3 bonding pairs + 1 lone pair). Nitrogen has 1 lone pair.",
            markScheme: [
              "Three N–H bonds, each shown as one shared pair",
              "Correct use of dots and crosses for the two elements",
              "One lone pair shown on nitrogen",
              "Nitrogen has 1 lone pair (stated)",
            ],
            commonError: "Omitting the lone pair on nitrogen, or giving hydrogen more than 2 electrons. Hydrogen only needs a full shell of 2.",
            guideRef: "Covalent Bonding & Simple Molecules",
            difficulty: "core",
            hints: [
              "Nitrogen (Group 5) has 5 outer electrons.",
              "Three are used in the three N–H bonds; what happens to the other two?",
              "Each hydrogen shares one pair to reach a full shell of 2.",
              "Show the leftover pair on nitrogen as a lone pair.",
            ],
          },
          {
            id: "chem-bonding-bq2-04",
            question: "Methane (CH₄) has a boiling point of −161 °C. Explain, in terms of structure and bonding, why this boiling point is so low. [4]",
            marks: 4,
            modelAnswer: "Methane is a simple molecular substance, consisting of small, separate CH₄ molecules. Within each molecule the C–H covalent bonds are strong, but the intermolecular forces between separate methane molecules are very weak. When methane boils, only these weak intermolecular forces are overcome — the strong covalent bonds inside the molecules are not broken. Because only a small amount of energy is needed to separate the molecules, methane boils at a very low temperature.",
            markScheme: [
              "Simple molecular substance / small separate molecules",
              "Weak intermolecular forces between molecules",
              "On boiling, only the weak intermolecular forces are overcome (covalent bonds not broken)",
              "Little energy needed → very low boiling point",
            ],
            commonError: "Saying 'the covalent bonds are weak' — the C–H bonds are strong; it is the forces between molecules that are weak, and only these are overcome on boiling.",
            guideRef: "Covalent Bonding & Simple Molecules",
            difficulty: "core",
            hints: [
              "What type of structure does methane have?",
              "Distinguish the bonds within a molecule from the forces between molecules.",
              "Which of those is overcome when methane boils?",
              "Link 'weak forces' to 'little energy' to 'low boiling point'.",
            ],
          },
          {
            id: "chem-bonding-bq2-05",
            question: "Draw a dot-and-cross diagram for a molecule of carbon dioxide (CO₂) and state the type and number of bonds it contains. [4]",
            marks: 4,
            modelAnswer: "Dot-and-cross diagram: a central carbon atom joined to two oxygen atoms. Carbon forms a double bond (two shared pairs) with each oxygen atom, shown as two shared pairs between C and each O. Each oxygen atom also has two lone pairs. Carbon has no lone pairs and is surrounded by 8 electrons (4 bonding pairs in total). CO₂ contains two carbon–oxygen double covalent bonds, so four shared pairs in total. The molecule is linear (O=C=O).",
            markScheme: [
              "Two double bonds, each shown as two shared pairs between C and O",
              "Correct dots and crosses; carbon has 8 electrons around it",
              "Two lone pairs shown on each oxygen",
              "States: two C=O double (covalent) bonds",
            ],
            commonError: "Drawing single C–O bonds — carbon must form four bonds in total, so each C–O must be a double bond for CO₂.",
            guideRef: "Covalent Bonding & Simple Molecules",
            difficulty: "core",
            hints: [
              "Carbon (Group 4) needs to form 4 bonds in total.",
              "With only two oxygen atoms available, how many bonds must each C–O be?",
              "Each oxygen needs 2 more electrons → a double bond.",
              "Add two lone pairs to each oxygen.",
            ],
          },
          {
            id: "chem-bonding-bq2-06",
            question: "Chlorine exists as Cl₂ molecules. (a) Draw a dot-and-cross diagram for Cl₂, showing all outer-shell electrons. [3] (b) Explain why chlorine does not conduct electricity. [2]",
            marks: 5,
            modelAnswer: "(a) Each chlorine atom has 7 outer electrons. The two atoms share one pair of electrons (a single covalent bond), shown as one dot and one cross between them. Each chlorine then has 3 lone pairs (6 non-bonding electrons) plus its share of the bonding pair, giving a full outer shell of 8. (b) Chlorine is a simple molecular substance. It contains no ions and no delocalised (free) electrons — all the electrons are held in covalent bonds or lone pairs within the molecules. With no free charged particles to carry current, chlorine does not conduct electricity.",
            markScheme: [
              "(a) One shared pair (single bond) shown between the two Cl atoms",
              "(a) Three lone pairs shown on each Cl atom",
              "(a) Each Cl has a full outer shell of 8 electrons",
              "(b) No free ions and no delocalised/free electrons",
              "(b) No mobile charge carriers → does not conduct",
            ],
            commonError: "Showing only the bonding pair and forgetting the three lone pairs on each chlorine atom.",
            guideRef: "Covalent Bonding & Simple Molecules",
            difficulty: "core",
            hints: [
              "Chlorine is in Group 7 — 7 outer electrons each.",
              "One electron from each atom forms the shared pair; the rest form lone pairs.",
              "For conductivity, ask whether any charged particles are free to move.",
            ],
          },
          {
            id: "chem-bonding-bq2-07",
            question: "Iodine (I₂) is a simple molecular solid that sublimes when gently heated. Explain why iodine has a low melting point and does not conduct electricity. [4]",
            marks: 4,
            modelAnswer: "Iodine is a simple molecular substance made of I₂ molecules. The molecules are held to each other only by weak intermolecular forces, so very little energy is needed to separate them — this gives iodine a low melting point (and easy sublimation). Iodine does not conduct electricity because it contains no ions and no delocalised electrons; all electrons are localised in covalent bonds or lone pairs within the molecules, so there are no free charge carriers.",
            markScheme: [
              "Simple molecular / I₂ molecules",
              "Weak intermolecular forces between molecules → little energy to separate → low melting point",
              "No ions and no delocalised/free electrons",
              "No mobile charge carriers → does not conduct",
            ],
            commonError: "Confusing the weak intermolecular forces with the strong covalent bond inside each I₂ molecule.",
            guideRef: "Covalent Bonding & Simple Molecules",
            difficulty: "core",
            hints: [
              "What type of structure is iodine?",
              "What forces hold the I₂ molecules to one another?",
              "Are there any free charged particles to carry current?",
            ],
          },
          {
            id: "chem-bonding-bq2-08",
            question: "Nitrogen gas (N₂) is very unreactive. (a) Draw a dot-and-cross diagram for N₂, showing all outer-shell electrons. [3] (b) Explain, using your diagram, why nitrogen is so unreactive. [2]",
            marks: 5,
            modelAnswer: "(a) Each nitrogen atom has 5 outer electrons. The two atoms share three pairs of electrons (a triple bond), shown as three shared pairs between them. Each nitrogen also has one lone pair. After bonding each nitrogen has 8 electrons in its outer shell (3 bonding pairs + 1 lone pair). (b) N₂ contains a triple covalent bond — three shared pairs of electrons — which is extremely strong (bond energy about 945 kJ/mol). A very large amount of energy is needed to break this triple bond before nitrogen can react, so nitrogen is very unreactive under normal conditions.",
            markScheme: [
              "(a) Triple bond shown as three shared pairs between the N atoms",
              "(a) One lone pair on each nitrogen atom",
              "(a) Each N has 8 outer electrons / correct dots and crosses",
              "(b) Triple bond is very strong / high bond energy",
              "(b) Large amount of energy needed to break it → unreactive",
            ],
            commonError: "Saying nitrogen is unreactive 'because it is like a noble gas' — N₂ is unreactive because of its very strong triple bond, not because it is a noble gas (it is not one).",
            guideRef: "Covalent Bonding & Simple Molecules",
            difficulty: "challenge",
            hints: [
              "Nitrogen (Group 5) has 5 outer electrons each.",
              "How many pairs must they share so each reaches 8?",
              "Three shared pairs = a triple bond.",
              "A triple bond is very strong — what does that mean for reactivity?",
            ],
          },
          {
            id: "chem-bonding-bq2-09",
            question: "Ammonia (NH₃, boiling point −33 °C) and methane (CH₄, boiling point −161 °C) are both small covalent molecules with almost the same relative molecular mass. Explain why ammonia has the higher boiling point. [4]",
            marks: 4,
            modelAnswer: "Both ammonia and methane are simple molecular substances, so their boiling points depend on the strength of the intermolecular forces between molecules. Ammonia molecules are polar: the lone pair and the N–H bonds give an uneven distribution of charge, allowing relatively strong intermolecular attractions (including hydrogen bonding) between NH₃ molecules. Methane is a symmetrical, non-polar molecule with only very weak intermolecular forces. Because the attractions between ammonia molecules are stronger, more energy is needed to separate them, so ammonia has the higher boiling point even though the two molecules have similar masses.",
            markScheme: [
              "Both simple molecular → boiling point depends on intermolecular forces",
              "NH₃ is polar / has a lone pair giving uneven charge distribution",
              "Stronger intermolecular forces (hydrogen bonding) between NH₃ molecules than between non-polar CH₄",
              "More energy needed to separate NH₃ molecules → higher boiling point",
            ],
            commonError: "Explaining the difference by relative molecular mass — the masses are almost equal (17 vs 16), so polarity/intermolecular forces must be the reason.",
            guideRef: "Covalent Bonding & Simple Molecules",
            difficulty: "challenge",
            hints: [
              "Both are simple molecular — focus on intermolecular forces.",
              "Which molecule is polar, and why?",
              "Polar molecules attract each other more strongly.",
              "Stronger attraction → more energy → higher boiling point.",
            ],
            strategy: "compare polarity and intermolecular forces",
          },
          {
            id: "chem-bonding-bq2-10",
            question: "Carbon dioxide (bp −78 °C) and water (bp 100 °C) are both small covalent molecules, yet water boils at a far higher temperature. Explain this difference in terms of molecular shape, polarity and intermolecular forces. [4]",
            marks: 4,
            modelAnswer: "Both are simple molecular substances, so the boiling point depends on the intermolecular forces between molecules. Carbon dioxide is a linear, symmetrical molecule (O=C=O); the bond polarities cancel, so the molecule is non-polar overall and the intermolecular forces between CO₂ molecules are very weak — little energy is needed to separate them, giving a very low boiling point. Water is a bent (non-linear) molecule and is polar; strong hydrogen bonds form between water molecules. Much more energy is needed to overcome these strong intermolecular attractions, so water has a far higher boiling point. In both cases the covalent bonds within the molecules are not broken on boiling.",
            markScheme: [
              "Both simple molecular → boiling point set by intermolecular forces",
              "CO₂ is linear/symmetrical and non-polar → very weak intermolecular forces → low bp",
              "Water is bent/polar with hydrogen bonding → strong intermolecular forces",
              "More energy to overcome water's stronger forces → much higher bp",
            ],
            commonError: "Claiming the O–H bonds are 'stronger' than C=O bonds — boiling overcomes the forces between molecules, not the covalent bonds within them.",
            guideRef: "Covalent Bonding & Simple Molecules",
            difficulty: "challenge",
            hints: [
              "Boiling overcomes forces between molecules, not bonds within them.",
              "Consider the shape of each molecule (linear vs bent).",
              "Which molecule is polar overall?",
              "Water forms hydrogen bonds; CO₂ does not.",
            ],
            strategy: "link shape and polarity to intermolecular force strength",
          },
        ],
      },
      {
        id: "chem-bonding-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Ten structured questions on giant covalent structures (diamond, graphite, silicon(IV) oxide) and metallic bonding.",
        questions: [
          {
            id: "chem-bonding-bq3-01",
            question: "State two physical properties of diamond and, for each, give the use it makes possible. [2]",
            marks: 2,
            modelAnswer: "Diamond is extremely hard, so it is used in cutting tools and drill bits (and to tip saws). Diamond has a very high melting point, so it can be used in tools that operate at high temperatures. (Either property + matched use scores.)",
            markScheme: [
              "Very hard → cutting tools / drill bits / drill tips",
              "Very high melting point → high-temperature cutting tools (allow: does not conduct → not used electrically)",
            ],
            commonError: "Giving a property without a matching use, or claiming diamond conducts electricity (it does not).",
            guideRef: "Giant Covalent Structures",
            difficulty: "warmup",
          },
          {
            id: "chem-bonding-bq3-02",
            question: "Describe the structure of diamond, including how many bonds each carbon atom forms and the type of bonding. [3]",
            marks: 3,
            modelAnswer: "Diamond is a giant covalent (macromolecular) structure. Each carbon atom is covalently bonded to four other carbon atoms in a tetrahedral arrangement. These strong covalent bonds extend in all directions throughout the whole structure, forming a continuous rigid 3-D network. All four outer electrons of each carbon are used in bonding.",
            markScheme: [
              "Giant covalent / macromolecular structure",
              "Each carbon bonded to 4 others (tetrahedrally)",
              "Strong covalent bonds throughout / continuous 3-D network",
            ],
            commonError: "Describing diamond as 'molecules of carbon' — it is one continuous giant lattice, not separate molecules.",
            guideRef: "Giant Covalent Structures",
            difficulty: "warmup",
          },
          {
            id: "chem-bonding-bq3-03",
            question: "Explain why graphite is soft and can be used as a lubricant, while diamond is extremely hard. [4]",
            marks: 4,
            modelAnswer: "Graphite is made of flat layers of carbon atoms arranged in hexagons. Within each layer the carbon atoms are strongly covalently bonded, but the layers are held to each other only by weak intermolecular forces. This allows the layers to slide over one another easily, so graphite is soft and slippery and can act as a lubricant. Diamond, by contrast, has each carbon atom bonded to four others by strong covalent bonds in a rigid three-dimensional network. There are no layers to slide and no weak forces, so diamond cannot be deformed easily and is extremely hard.",
            markScheme: [
              "Graphite has layers held by weak (intermolecular) forces between them",
              "Layers can slide over each other → soft / lubricant",
              "Diamond: each C bonded to 4 others by strong covalent bonds",
              "Rigid 3-D network in all directions → very hard",
            ],
            commonError: "Saying graphite has 'weak bonds' — the covalent bonds within a layer are strong; only the forces between layers are weak.",
            guideRef: "Giant Covalent Structures",
            difficulty: "core",
            hints: [
              "Graphite is built from layers — what holds one layer to the next?",
              "Weak interlayer forces allow the layers to do what?",
              "How many bonds does each carbon form in diamond, and in which directions?",
            ],
          },
          {
            id: "chem-bonding-bq3-04",
            question: "Explain why graphite conducts electricity but diamond does not. [4]",
            marks: 4,
            modelAnswer: "In graphite, each carbon atom forms only three covalent bonds, so the fourth outer electron of each carbon is not used in bonding. These spare electrons become delocalised and are free to move along the layers. The delocalised electrons can carry charge, so graphite conducts electricity. In diamond, each carbon atom forms four covalent bonds, using all four of its outer electrons. There are no delocalised electrons and no ions, so there are no free charge carriers, and diamond does not conduct electricity.",
            markScheme: [
              "Graphite: each C bonds to only 3 others, leaving 1 spare/delocalised electron per atom",
              "Delocalised electrons free to move → carry charge → conducts",
              "Diamond: each C bonds to 4 others, using all 4 outer electrons",
              "No delocalised electrons / no free charge carriers → does not conduct",
            ],
            commonError: "Saying graphite conducts because it has 'ions' — graphite has no ions; conduction is due to delocalised electrons.",
            guideRef: "Giant Covalent Structures",
            difficulty: "core",
            hints: [
              "Count the bonds each carbon forms in graphite (3) and diamond (4).",
              "What happens to the 'leftover' fourth electron in graphite?",
              "Conduction needs charges free to move.",
              "Diamond uses all four electrons in bonds — any left over?",
            ],
          },
          {
            id: "chem-bonding-bq3-05",
            question: "Silicon(IV) oxide (SiO₂) is used in glass and has a very high melting point. (a) Describe its structure. [3] (b) Explain why it has such a high melting point. [2]",
            marks: 5,
            modelAnswer: "(a) Silicon(IV) oxide is a giant covalent (macromolecular) structure. Each silicon atom is covalently bonded to four oxygen atoms, and each oxygen atom is bonded to two silicon atoms. This forms a continuous three-dimensional network of strong Si–O covalent bonds throughout the whole structure. (b) To melt SiO₂, a very large number of strong Si–O covalent bonds must be broken throughout the giant lattice. This requires a very large amount of energy, so SiO₂ has a very high melting point.",
            markScheme: [
              "(a) Giant covalent / macromolecular structure",
              "(a) Each Si bonded to 4 O; each O bonded to 2 Si",
              "(a) Continuous 3-D network of strong Si–O covalent bonds",
              "(b) Many strong covalent bonds must be broken to melt",
              "(b) Large amount of energy needed → very high melting point",
            ],
            commonError: "Treating SiO₂ as a simple molecule (like CO₂) — it is a giant covalent network, not discrete SiO₂ molecules.",
            guideRef: "Giant Covalent Structures",
            difficulty: "core",
            hints: [
              "Is SiO₂ made of separate molecules or a continuous network?",
              "How many oxygen atoms surround each silicon, and vice versa?",
              "What must be broken to melt a giant covalent solid?",
            ],
          },
          {
            id: "chem-bonding-bq3-06",
            question: "Describe metallic bonding. You should refer to the particles present and the force that holds them together. [3]",
            marks: 3,
            modelAnswer: "In a metal, the atoms lose their outer electrons, forming positive metal ions arranged in a regular lattice. The lost electrons become delocalised, forming a 'sea' of electrons that are free to move throughout the whole structure. Metallic bonding is the strong electrostatic attraction between the lattice of positive ions and the sea of delocalised electrons.",
            markScheme: [
              "Lattice of positive (metal) ions",
              "Sea of delocalised / free electrons",
              "Strong electrostatic attraction between the positive ions and the delocalised electrons",
            ],
            commonError: "Describing metallic bonding as attraction between positive and negative ions — there are no negative ions in a metal; the attraction is between positive ions and the electron sea.",
            guideRef: "Metallic Bonding",
            difficulty: "warmup",
          },
          {
            id: "chem-bonding-bq3-07",
            question: "Explain, in terms of metallic bonding, why metals are (a) good conductors of electricity and (b) malleable. [4]",
            marks: 4,
            modelAnswer: "(a) Metals contain delocalised electrons that are free to move throughout the structure. When a voltage is applied, these electrons drift through the metal, carrying charge and producing an electric current — so metals are good electrical conductors. (b) The positive metal ions are arranged in layers. When a force is applied, the layers of ions can slide over one another into new positions. The delocalised electron sea adjusts and maintains the metallic bonding around the ions, so no bonds are permanently broken and the metal changes shape without shattering — it is malleable.",
            markScheme: [
              "(a) Delocalised/free electrons present",
              "(a) Electrons move/drift when voltage applied → carry charge → conducts",
              "(b) Layers of (positive) ions slide over each other when force applied",
              "(b) Electron sea reforms/maintains bonding, no bonds broken → malleable",
            ],
            commonError: "Saying malleability is because 'the bonds break and reform' — the key point is that the layers slide while the electron sea maintains the bonding, so bonds are NOT permanently broken.",
            guideRef: "Metallic Bonding",
            difficulty: "core",
            hints: [
              "(a) What particles in a metal are free to move and carry charge?",
              "(b) Picture layers of ions sliding past each other.",
              "(b) What does the electron sea do as the ions move?",
            ],
          },
          {
            id: "chem-bonding-bq3-08",
            question: "Both diamond and graphite are forms (allotropes) of carbon and are giant covalent structures, yet only graphite conducts electricity and only diamond is extremely hard. Compare and contrast the two structures and explain these property differences. [6]",
            marks: 6,
            modelAnswer: "Both diamond and graphite are giant covalent structures made entirely of carbon atoms joined by strong covalent bonds, so both have very high melting points (many strong bonds must be broken). The differences arise from how many bonds each carbon forms. In diamond, each carbon is bonded to four other carbons by strong covalent bonds in a rigid three-dimensional tetrahedral network; all four outer electrons are used in bonding. This rigid network in all directions makes diamond extremely hard, and the absence of free electrons means it does not conduct. In graphite, each carbon is bonded to only three others, forming flat hexagonal layers; the fourth electron of each carbon is delocalised. These delocalised electrons are free to move along the layers and carry charge, so graphite conducts electricity. The layers are held together only by weak intermolecular forces, so they slide easily, making graphite soft rather than hard.",
            markScheme: [
              "Both giant covalent structures of carbon / very high melting points",
              "Diamond: each C bonded to 4 others in a rigid 3-D network",
              "Diamond: all 4 electrons in bonds → no free electrons → does not conduct + hard",
              "Graphite: each C bonded to 3 others in layers",
              "Graphite: one delocalised electron per C → free to move → conducts",
              "Graphite: weak forces between layers → layers slide → soft",
            ],
            commonError: "Stating graphite has 'weak bonds' — the in-layer C–C bonds are strong; only the forces between layers are weak.",
            guideRef: "Giant Covalent Structures",
            difficulty: "challenge",
            hints: [
              "State what diamond and graphite have in common first.",
              "Count the bonds each carbon forms in each structure.",
              "What happens to the spare electron in graphite?",
              "Link the bonding arrangement to hardness and to conductivity for each.",
            ],
            strategy: "compare bonds per carbon, then deduce each property",
            solutions: [
              {
                label: "Bonds-per-carbon approach",
                steps: [
                  "Both: giant covalent carbon lattices with strong C–C bonds → very high melting points.",
                  "Diamond: 4 bonds per C, all electrons used → no free electrons → no conduction.",
                  "Diamond: rigid 3-D network in all directions → extremely hard.",
                  "Graphite: 3 bonds per C → 1 delocalised electron per C → conducts.",
                  "Graphite: layers held by weak forces → slide easily → soft.",
                ],
              },
            ],
          },
          {
            id: "chem-bonding-bq3-09",
            question: "Steel is an alloy of iron mixed with a small amount of carbon and is harder than pure iron. (a) Explain, using metallic bonding, why pure iron is relatively soft and easily bent. [2] (b) Explain why adding carbon makes steel harder than pure iron. [3]",
            marks: 5,
            modelAnswer: "(a) In pure iron the atoms (ions) are all the same size and are arranged in regular layers. When a force is applied, these layers can slide over each other easily because the delocalised electron sea maintains the bonding as the ions move; so pure iron is relatively soft and easily bent. (b) In steel, carbon atoms are a different size from the iron atoms and sit between (or in place of) some of the iron ions. This disrupts the regular arrangement of the layers, so the layers can no longer slide over each other easily. Because sliding is obstructed, steel is harder and stronger than pure iron.",
            markScheme: [
              "(a) Pure iron has regular layers of same-sized ions that can slide easily",
              "(a) Electron sea maintains bonding as layers slide → soft/easily bent",
              "(b) Carbon atoms are a different size and disrupt the regular lattice",
              "(b) Layers can no longer slide easily over each other",
              "(b) → steel is harder/stronger than pure iron",
            ],
            commonError: "Saying carbon 'forms covalent bonds that strengthen the metal' — the effect is physical disruption of the lattice that hinders layer sliding, not new covalent bonds.",
            guideRef: "Metallic Bonding",
            difficulty: "challenge",
            hints: [
              "(a) Why can the regular layers in pure iron slide easily?",
              "(b) How does the size of carbon atoms affect the regular arrangement?",
              "(b) If the lattice is disrupted, what happens to layer sliding?",
            ],
            strategy: "link lattice regularity/disruption to ease of sliding",
          },
          {
            id: "chem-bonding-bq3-10",
            question: "Graphene is a single layer of graphite, one atom thick. It is one of the strongest known materials and conducts electricity better than copper. Use your knowledge of the structure of graphite to explain both of these properties. [4]",
            marks: 4,
            modelAnswer: "Graphene is a single layer of carbon atoms in which each carbon is covalently bonded to three others, forming a continuous sheet of hexagons. The very large number of strong covalent bonds throughout this sheet, arranged in all directions within the plane, makes graphene extremely strong. As in graphite, each carbon uses only three of its four outer electrons for bonding, so the fourth electron of every carbon is delocalised. These delocalised electrons are free to move across the entire sheet, allowing graphene to conduct electricity very well — even better than a metal such as copper, because the electrons can move freely through the uninterrupted single layer.",
            markScheme: [
              "Each carbon covalently bonded to 3 others in a continuous sheet",
              "Many strong covalent bonds throughout the sheet → very strong",
              "One electron per carbon is delocalised (the fourth outer electron)",
              "Delocalised electrons free to move across the sheet → conducts electricity (well)",
            ],
            commonError: "Forgetting that the strength comes from the strong covalent bonds within the layer, while conductivity comes from the separate delocalised electrons — these are two distinct features of the same structure.",
            guideRef: "Giant Covalent Structures",
            difficulty: "challenge",
            hints: [
              "Graphene is a single graphite layer — how many bonds does each carbon form?",
              "What makes the sheet strong: the number and strength of its covalent bonds.",
              "What happens to the fourth electron of each carbon?",
              "Delocalised electrons free to move → conduction.",
            ],
            strategy: "separate the strength (bonds) from the conductivity (delocalised electrons)",
          },
        ],
      },
      {
        id: "chem-bonding-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Ten synoptic structured questions linking structure, bonding and properties across all four bonding types.",
        questions: [
          {
            id: "chem-bonding-bq4-01",
            question: "Name the four main types of structure/bonding seen in chemistry and give one example substance of each. [4]",
            marks: 4,
            modelAnswer: "Ionic (giant ionic lattice) — example: sodium chloride. Simple molecular (covalent) — example: methane (or water, carbon dioxide, iodine). Giant covalent (macromolecular) — example: diamond (or graphite, silicon(IV) oxide). Metallic — example: copper (or iron, any metal).",
            markScheme: [
              "Ionic — e.g. sodium chloride / any ionic compound",
              "Simple molecular — e.g. methane / water / CO₂ / iodine",
              "Giant covalent — e.g. diamond / graphite / SiO₂",
              "Metallic — e.g. copper / iron / any metal",
            ],
            commonError: "Confusing 'simple molecular' with 'giant covalent' — both involve covalent bonds, but only giant covalent forms a continuous network.",
            guideRef: "Structure, Bonding & Properties — Putting It Together",
            difficulty: "warmup",
          },
          {
            id: "chem-bonding-bq4-02",
            question: "For each statement, name the type of structure it best describes: (a) high melting point and conducts electricity as a solid; (b) low melting point and does not conduct; (c) high melting point, does not conduct as a solid but conducts when molten. [3]",
            marks: 3,
            modelAnswer: "(a) Metallic (a metal). (b) Simple molecular. (c) Ionic.",
            markScheme: [
              "(a) Metallic",
              "(b) Simple molecular",
              "(c) Ionic",
            ],
            commonError: "Confusing (a) and (c): only metals (and graphite) conduct as solids; ionic compounds conduct only when molten or dissolved.",
            guideRef: "Structure, Bonding & Properties — Putting It Together",
            difficulty: "warmup",
          },
          {
            id: "chem-bonding-bq4-03",
            question: "Explain why simple molecular substances have low melting points whereas giant covalent structures have very high melting points, even though both contain covalent bonds. [4]",
            marks: 4,
            modelAnswer: "In a simple molecular substance, melting only separates the small molecules from each other by overcoming the weak intermolecular forces between them; the strong covalent bonds inside each molecule are not broken. Because only weak forces are overcome, little energy is needed and the melting point is low. In a giant covalent structure there are no separate molecules — the whole solid is one continuous network of atoms joined by strong covalent bonds. To melt it, a very large number of these strong covalent bonds must be broken, which requires a great deal of energy, giving a very high melting point.",
            markScheme: [
              "Simple molecular: melting overcomes only weak intermolecular forces (covalent bonds not broken)",
              "Little energy needed → low melting point",
              "Giant covalent: continuous network with strong covalent bonds throughout",
              "Many strong covalent bonds must be broken → much energy → very high melting point",
            ],
            commonError: "Implying the covalent bonds are broken when a simple molecular substance melts — they are not; only the forces between molecules are overcome.",
            guideRef: "Structure, Bonding & Properties — Putting It Together",
            difficulty: "core",
            hints: [
              "What is actually overcome when each type melts?",
              "For simple molecular: are the covalent bonds inside the molecules broken?",
              "For giant covalent: what must be broken for the lattice to come apart?",
              "Link 'forces overcome' to 'energy needed' to 'melting point'.",
            ],
          },
          {
            id: "chem-bonding-bq4-04",
            question: "Compare the electrical conductivity of (i) solid sodium chloride, (ii) molten sodium chloride and (iii) copper metal, explaining each answer in terms of structure and bonding. [6]",
            marks: 6,
            modelAnswer: "(i) Solid sodium chloride does not conduct electricity. It contains Na⁺ and Cl⁻ ions, but in the solid these are held in fixed positions in the giant ionic lattice and cannot move, so there are no mobile charge carriers. (ii) Molten sodium chloride does conduct electricity. When melted, the lattice breaks down and the Na⁺ and Cl⁻ ions become free to move. These mobile ions carry charge through the liquid. (iii) Copper conducts electricity in the solid (and liquid) state. It is a metal: it has delocalised electrons that are free to move throughout the lattice of positive ions. When a voltage is applied, these electrons drift and carry charge.",
            markScheme: [
              "(i) Solid NaCl does not conduct — ions fixed/cannot move in lattice",
              "(i) No mobile charge carriers",
              "(ii) Molten NaCl conducts — lattice breaks down / ions free to move",
              "(ii) Mobile ions carry charge",
              "(iii) Copper conducts (as a solid) — delocalised/free electrons",
              "(iii) Electrons free to move carry charge",
            ],
            commonError: "Saying solid NaCl 'has no electrons/ions' — it has ions, but they are fixed; the issue is mobility of charge carriers.",
            guideRef: "Structure, Bonding & Properties — Putting It Together",
            difficulty: "core",
            hints: [
              "For each material, ask: what charge carriers are present?",
              "Then ask: are those carriers free to move?",
              "Solid NaCl: ions exist but can they move?",
              "Copper: what carries charge in a metal?",
            ],
          },
          {
            id: "chem-bonding-bq4-05",
            question: "A student investigates four solids, A, B, C and D, and records the results below.\n\n| Solid | Melting point | Conducts as solid? | Conducts when molten? |\n|---|---|---|---|\n| A | 1538 °C | Yes | Yes |\n| B | 113 °C | No | No |\n| C | 801 °C | No | Yes |\n| D | 3550 °C | No | No |\n\nIdentify the type of bonding/structure in each solid and justify each choice. [8]",
            marks: 8,
            modelAnswer: "Solid A is metallic. It conducts electricity as a solid (and when molten) because it has delocalised electrons free to move, and it has a high melting point due to strong metallic bonding. Solid B is simple molecular. Its low melting point (113 °C) shows only weak intermolecular forces are overcome, and it does not conduct in either state because it has no ions or free electrons. Solid C is ionic. It does not conduct as a solid (ions fixed in the lattice) but does conduct when molten (ions become free to move), and it has a high melting point from strong electrostatic forces in the giant ionic lattice. Solid D is giant covalent. It has a very high melting point (3550 °C) from many strong covalent bonds in a continuous network, and it does not conduct in either state because it has no free electrons or ions (it is not graphite).",
            markScheme: [
              "A = metallic; conducts as solid → delocalised electrons; high mp → strong metallic bonding",
              "B = simple molecular; low mp → weak intermolecular forces; no conduction → no ions/free electrons",
              "C = ionic; no solid conduction but conducts molten → ions fixed then free; high mp → giant ionic lattice",
              "D = giant covalent; very high mp → many strong covalent bonds; no conduction → no free electrons/ions",
            ],
            commonError: "Mixing up A and C: the key is that A conducts as a solid (metallic) while C only conducts when molten (ionic).",
            guideRef: "Structure, Bonding & Properties — Putting It Together",
            difficulty: "challenge",
            hints: [
              "Start with the solid that conducts when SOLID — only metals (and graphite) do.",
              "The lowest melting point identifies the simple molecular solid.",
              "Which solid conducts only when molten? That is ionic.",
              "The remaining very-high-mp non-conductor is giant covalent.",
            ],
            strategy: "eliminate using conductivity state and melting point",
            solutions: [
              {
                label: "Elimination by fingerprint",
                steps: [
                  "Conducts as solid → metallic: A = metallic.",
                  "Lowest melting point (113 °C), no conduction → simple molecular: B.",
                  "No solid conduction but conducts when molten → ionic: C.",
                  "Very high mp (3550 °C), never conducts → giant covalent: D.",
                ],
              },
            ],
          },
          {
            id: "chem-bonding-bq4-06",
            question: "Sodium chloride and silicon(IV) oxide both have high melting points and neither conducts electricity as a solid. Explain how you could distinguish their bonding types using (a) the conductivity of the molten substance and (b) behaviour in water. [4]",
            marks: 4,
            modelAnswer: "(a) Sodium chloride is ionic, so when melted its ions become free to move and the molten substance conducts electricity. Silicon(IV) oxide is giant covalent, so even when molten it has no ions or free electrons and does not conduct. Testing the molten conductivity therefore distinguishes them: the one that conducts when molten is the ionic compound (NaCl). (b) Sodium chloride dissolves readily in water to give a solution that conducts (free-moving ions), whereas silicon(IV) oxide is insoluble in water (its giant covalent network cannot be broken up by water). So NaCl dissolves and gives a conducting solution; SiO₂ does not dissolve.",
            markScheme: [
              "(a) Molten NaCl conducts (free ions); molten SiO₂ does not (no ions/free electrons)",
              "(a) The molten conductor is the ionic compound",
              "(b) NaCl dissolves in water to give a conducting solution",
              "(b) SiO₂ is insoluble in water",
            ],
            commonError: "Assuming both giant structures behave the same — ionic compounds conduct when molten/dissolved and are often soluble, whereas giant covalent structures do neither.",
            guideRef: "Structure, Bonding & Properties — Putting It Together",
            difficulty: "challenge",
            hints: [
              "Which of the two has ions that can be freed?",
              "What happens to ions when an ionic solid melts or dissolves?",
              "Is a giant covalent network soluble in water?",
              "Use a test where the two behave differently.",
            ],
            strategy: "choose tests where ionic and giant covalent differ",
          },
          {
            id: "chem-bonding-bq4-07",
            question: "Carbon dioxide (CO₂) and silicon(IV) oxide (SiO₂) have the same ratio of atoms (1 : 2), yet CO₂ is a gas at room temperature while SiO₂ melts at 1710 °C. (a) Name the structure type of each. [2] (b) Explain the difference in melting points. [4]",
            marks: 6,
            modelAnswer: "(a) CO₂ is a simple molecular (covalent) substance; SiO₂ is a giant covalent (macromolecular) structure. (b) In CO₂, carbon forms two double bonds with two oxygen atoms to make small, separate CO₂ molecules. The covalent bonds within each molecule are strong, but the forces between the molecules are weak intermolecular forces. Only these weak forces are overcome when CO₂ melts/boils, so very little energy is needed and CO₂ is a gas at room temperature. In SiO₂, every silicon is bonded to four oxygen atoms and every oxygen to two silicon atoms, forming a continuous three-dimensional network with no separate molecules. Melting SiO₂ requires breaking a very large number of strong Si–O covalent bonds throughout the lattice, which needs a great deal of energy — hence the very high melting point.",
            markScheme: [
              "(a) CO₂: simple molecular",
              "(a) SiO₂: giant covalent",
              "(b) CO₂ forms small discrete molecules with weak intermolecular forces between them",
              "(b) Only weak forces overcome on melting → very low mp (gas at RTP)",
              "(b) SiO₂ is a continuous network of strong Si–O covalent bonds",
              "(b) Many strong bonds broken on melting → very high mp",
            ],
            commonError: "Assuming the same atom ratio means the same structure — CO₂ is molecular while SiO₂ is a giant covalent network, which is why their properties differ so much.",
            guideRef: "Giant Covalent Structures",
            difficulty: "core",
            hints: [
              "Is CO₂ made of separate molecules or a continuous network? And SiO₂?",
              "For CO₂: what forces are overcome on melting/boiling?",
              "For SiO₂: what must be broken to melt the solid?",
              "Link forces overcome → energy → melting point for each.",
            ],
          },
          {
            id: "chem-bonding-bq4-08",
            question: "Explain why ionic compounds are usually solids with high melting points at room temperature, while many simple molecular covalent substances are gases or liquids. [4]",
            marks: 4,
            modelAnswer: "Ionic compounds consist of giant lattices of oppositely charged ions held together by strong electrostatic forces extending throughout the structure. A large amount of energy is needed to overcome these many strong attractions, so ionic compounds have high melting and boiling points and are solids at room temperature. Simple molecular covalent substances exist as small, separate molecules with only weak intermolecular forces between them. Very little energy is needed to overcome these weak forces, so they melt and boil at low temperatures and are often gases or liquids at room temperature.",
            markScheme: [
              "Ionic: giant lattice with many strong electrostatic forces",
              "Much energy to overcome them → high mp/bp → solid at RTP",
              "Simple molecular: separate molecules with weak intermolecular forces",
              "Little energy to overcome them → low mp/bp → gas/liquid at RTP",
            ],
            commonError: "Comparing the strength of ionic bonds with covalent bonds — the correct comparison is the strong electrostatic forces in the ionic lattice versus the weak intermolecular forces between covalent molecules.",
            guideRef: "Structure, Bonding & Properties — Putting It Together",
            difficulty: "core",
            hints: [
              "What forces hold an ionic lattice together, and how strong are they?",
              "What forces act between simple molecules, and how strong are they?",
              "Link force strength to the energy needed and the state at room temperature.",
            ],
          },
          {
            id: "chem-bonding-bq4-09",
            question: "Nitrogen (N₂) is used to fill food packaging because it is very unreactive. In the Haber process, however, nitrogen is made to react with hydrogen to form ammonia. (a) Explain why nitrogen is normally so unreactive. [2] (b) Suggest why the Haber process requires a high temperature and a catalyst. [3]",
            marks: 5,
            modelAnswer: "(a) Nitrogen molecules (N₂) contain a triple covalent bond between the two nitrogen atoms. This triple bond is very strong (bond energy about 945 kJ/mol), so a large amount of energy is needed to break it before nitrogen can react. This makes nitrogen very unreactive under normal conditions. (b) Before nitrogen and hydrogen can react, their bonds (especially the very strong N≡N triple bond) must be broken. A high temperature supplies enough energy (activation energy) for many collisions to break these bonds and react. A catalyst (iron) provides an alternative reaction pathway with a lower activation energy, increasing the rate of reaction so that ammonia is produced more quickly.",
            markScheme: [
              "(a) N₂ has a (very strong) triple bond / high bond energy",
              "(a) Much energy needed to break it → unreactive",
              "(b) High temperature provides energy / activation energy to break the strong bonds",
              "(b) Allows enough collisions to be successful / speeds reaction",
              "(b) Catalyst lowers activation energy / alternative pathway → faster reaction",
            ],
            commonError: "Saying nitrogen is unreactive because it 'has a full outer shell like a noble gas' — N₂ is unreactive because of its strong triple bond, not because nitrogen is a noble gas.",
            guideRef: "Covalent Bonding & Simple Molecules",
            difficulty: "challenge",
            hints: [
              "(a) How many bonds join the two nitrogen atoms, and how strong is that bond?",
              "(b) What must happen to the bonds before a reaction can occur?",
              "(b) How does a higher temperature help collisions react?",
              "(b) What does a catalyst do to the activation energy?",
            ],
            strategy: "link bond strength to reactivity, then apply rate ideas",
          },
          {
            id: "chem-bonding-bq4-10",
            question: "Magnesium chloride (MgCl₂) is formed from magnesium and chlorine. (a) Determine the formula by balancing the charges, showing your reasoning. [2] (b) Predict and explain two physical properties of magnesium chloride. [4]",
            marks: 6,
            modelAnswer: "(a) Magnesium is in Group 2 and forms Mg²⁺; chlorine is in Group 7 and forms Cl⁻. To balance the +2 charge, two Cl⁻ ions (total −2) are needed for each Mg²⁺. The charges cancel, so the formula is MgCl₂. (b) Magnesium chloride is an ionic compound with a giant ionic lattice. Property 1: it has a high melting point, because a large amount of energy is needed to overcome the many strong electrostatic attractions between the Mg²⁺ and Cl⁻ ions throughout the lattice. Property 2: it does not conduct electricity as a solid (ions are fixed in position) but does conduct when molten or dissolved in water, because the ions are then free to move and carry charge.",
            markScheme: [
              "(a) Mg²⁺ and Cl⁻ identified; 1 × Mg²⁺ needs 2 × Cl⁻ to balance",
              "(a) Formula MgCl₂",
              "(b) High melting point — many strong electrostatic forces in lattice to overcome",
              "(b) Does not conduct as solid (ions fixed) / conducts when molten or dissolved (ions free to move)",
            ],
            commonError: "Writing MgCl (charges +2 and −1 do not balance) — two chloride ions are needed for each magnesium ion.",
            guideRef: "Properties of Ionic Compounds",
            difficulty: "challenge",
            hints: [
              "(a) Use group numbers to find the charge on each ion.",
              "(a) How many Cl⁻ are needed to balance one Mg²⁺?",
              "(b) Think about the giant ionic lattice — what does that tell you about melting point?",
              "(b) When can the ions move to conduct electricity?",
            ],
            strategy: "balance charges, then derive properties from the ionic lattice",
            solutions: [
              {
                label: "Charge-balance method",
                steps: [
                  "Mg is Group 2 → Mg²⁺; Cl is Group 7 → Cl⁻.",
                  "Mg²⁺ has +2; each Cl⁻ has −1.",
                  "To cancel +2 you need 2 × (−1) = −2 → two Cl⁻ ions.",
                  "Formula: MgCl₂.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
