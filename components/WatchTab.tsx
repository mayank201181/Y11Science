"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Topic } from "@/lib/types";
import { getMemoryVault, type TopicMemoryVault } from "@/lib/memoryPitfalls";
import { useStore } from "@/lib/store";

const CHAPTER_STARS = 1;
const COMPLETE_STARS = 5;

export const masterclassDoneKey = (topicId: string) => `masterclass:${topicId}:done`;
export const sitcomDoneKey = (topicId: string) => `sitcom:${topicId}:done`;
export const comedyDoneKey = (topicId: string) => `comedy:${topicId}:done`;
export const watchChapterKey = (kind: "masterclass" | "sitcom" | "comedy", topicId: string, ch: string) =>
  `${kind}:${topicId}:${ch}`;

type WatchMode = "masterclass" | "sitcom" | "comedy";

interface ComedyTopicSpec {
  show: string;
  title: string;
  minutes: number;
  lead: [string, string, string, string];
  foil: [string, string, string, string];
  dinner: string;
  cold: string;
  rant: string;
}

const COMEDY_SPECS: Record<string, ComedyTopicSpec> = {
  "bio-cells": { show: "Body Corporate", title: "Who Let The Virus Past Security?", minutes: 11, lead: ["Mito", "Mitochondrial Power Boss", "#f97316", "bean"], foil: ["Influenza", "Non-Living Freelancer", "#ec4899", "spiky"], dinner: "Meera checks bread mould while sneezing over her Biology notes", cold: "Security Alert: An influenza virus walked past Reception claiming to be a living cell while Mucor mould spat extracellular enzymes onto the carpet!", rant: "Antibiotics cannot touch viruses! Penicillin targets bacterial peptidoglycan walls — viruses are just RNA or DNA in a protein coat hijacking host cells!" },
  "bio-transport-cell": { show: "Body Corporate", title: "Paying ATP For Escalator Privileges", minutes: 11, lead: ["Membrane", "Partially Permeable VIP Bouncer", "#06b6d4", "round"], foil: ["Carrier", "ATP Escalator Operator", "#f59e0b", "enzyme"], dinner: "Mum salts sliced cucumbers for raita and water floods onto the plate", cold: "Diffusion and Osmosis rode downhill for free all morning while Active Transport demanded ATP from Mitochondria to push ions uphill!", rant: "Moving ions AGAINST a concentration gradient requires carrier proteins and ATP from aerobic respiration — no oxygen, escalator closed!" },
  "bio-molecules": { show: "Body Corporate", title: "Benedict's Brick-Red Audit", minutes: 11, lead: ["Benedict", "80°C Sugar Forensics Chief", "#ef4444", "drop"], foil: ["Biuret", "Lilac Protein Detective", "#a855f7", "round"], dinner: "Testing garlic naan, paneer, and mango lassi with the four food reagents", cold: "Someone forgot to heat Benedict's reagent in an 80 °C water bath and wondered why glucose stayed blue!", rant: "Never boil Biuret! Add Biuret at room temperature and peptide bonds turn pale blue straight to lilac!" },
  "bio-enzymes": { show: "Body Corporate", title: "Nobody Say The K-Word", minutes: 12, lead: ["Amy", "Salivary Amylase · Starch Cutter", "#14b8a6", "enzyme"], foil: ["Bile", "Alkaline Emulsifier · 0% Enzyme", "#84cc16", "drop"], dinner: "Tuesday paneer and garlic naan dinner with 65 °C hot dal and 4 °C mango lassi", cold: "A temp intern wrote in the HR log that 65 °C soup KILLED an enzyme — Hypo sounded the alarm because you cannot kill a protein molecule!", rant: "Look into the camera: I am BILE, NOT an enzyme! Made in the liver, stored in the gallbladder — I neutralise stomach HCl and emulsify lipids to boost surface area for Lipase!" },
  "bio-plant-nutrition": { show: "Body Corporate", title: "Night Shift On The Stomata Roof", minutes: 11, lead: ["Chloro", "Palisade Solar Manager", "#22c55e", "bean"], foil: ["Guard", "Stomata Door Bouncer", "#14b8a6", "enzyme"], dinner: "Watering the balcony basil plant and spotting yellow magnesium-starved lower leaves", cold: "Palisade Mesophyll hit peak sunlight at noon, ran out of 0.04% CO2, and Magnesium Logistics missed a chlorophyll delivery!", rant: "Hydrogen-carbonate indicator turns PURPLE in bright light as CO2 drops, and YELLOW in the dark when respiration dominates!" },
  "bio-human-nutrition": { show: "Body Corporate", title: "Seven Metres Of Folding Paperwork", minutes: 11, lead: ["Villus", "Ileum Absorption Architect", "#f97316", "drop"], foil: ["Peristalsis", "Gut Muscle Wave Crew", "#e11d48", "spiky"], dinner: "Finishing vegetable pulao and tracing digestion vs assimilation in the liver", cold: "An intern confused EGESTION of undigested cellulose fibre with EXCRETION of metabolic urea!", rant: "Microvilli brush border, walls ONE cell thick, dense capillaries maintaining a steep gradient, plus a central lacteal for lipids!" },
  "bio-transport-plants": { show: "Body Corporate", title: "Dead Pipes Don't Complain", minutes: 11, lead: ["Xylem", "Hollow Lignin Plumber", "#0ea5e9", "drop"], foil: ["Phloem", "Living Sucrose Courier", "#eab308", "bean"], dinner: "A breezy afternoon on the balcony sends potometer bubbles racing", cold: "Xylem hasn't owned cytoplasm or end-walls all year and still beats Phloem on upward water volume!", rant: "Xylem goes UP only via passive transpiration pull; Phloem uses living sieve tubes to translocate sucrose and amino acids BOTH ways!" },
  "bio-transport-animals": { show: "Body Corporate", title: "Left Ventricle Never Skips Leg Day", minutes: 11, lead: ["Left-V", "Systemic High-Pressure Pump", "#ef4444", "liver"], foil: ["Valve", "Anti-Backflow Bouncer", "#8b5cf6", "spiky"], dinner: "Climbing stairs before dinner pushes Meera's heart rate and stroke volume up", cold: "Right Ventricle complained Left Ventricle gets a muscular wall three times thicker — buddy, you only pump next door to the lungs!", rant: "Arteries carry high-pressure surges with thick muscular-elastic walls; veins have wide lumens and valves to stop low-pressure backflow!" },
  "bio-disease-immunity": { show: "Body Corporate", title: "Memory Cells Keep Receipts", minutes: 11, lead: ["B-Cell", "Specific Antibody Tailor", "#3b82f6", "round"], foil: ["Macrophage", "Phagocytosis Bouncer", "#10b981", "enzyme"], dinner: "Checking school vaccination records ahead of mock-exam week", cold: "Last year's pathogen tried sneaking back in — Memory Lymphocytes flooded the hallway with complementary antibodies in hours!", rant: "Vaccines never inject ready-made antibodies — they inject weakened or dead antigens to trigger ACTIVE immunity and memory cells!" },
  "bio-gas-respiration": { show: "Body Corporate", title: "Oxygen Debt Collectors", minutes: 11, lead: ["Alveolus", "Thin-Film Gas Broker", "#38bdf8", "round"], foil: ["Lactate", "Anaerobic Sprint Intern", "#f43f5e", "spiky"], dinner: "Heavy breathing after tennis drills to oxidise lactic acid in the liver", cold: "Someone wrote that respiration PRODUCES energy — Physics HQ sued us! Always write RELEASES energy from glucose!", rant: "Anaerobic muscle sprinting yields lactic acid and way less ATP — keeping heart and breathing rate high afterward pays back the oxygen debt!" },
  "bio-coordination": { show: "Body Corporate", title: "The 37 Degree Agenda", minutes: 15, lead: ["Hypo", "37.0° Thermoregulation Lead", "#9b7bff", "round"], foil: ["Relay", "Spinal Reflex Dispatcher", "#eab308", "spiky"], dinner: "Pulling back from a hot tawa pan while insulin handles sweet masala chai", cold: "Hot pan detected — Relay Neurone bypassed Cortex's committee meeting and fired the motor effector via chemical synapse diffusion!", rant: "Capillaries NEVER move closer to skin! Arterioles VASODILATE to send more blood through surface capillaries so heat radiates away!" },
  "bio-reproduction": { show: "Body Corporate", title: "Four-Hormone Group Chat Chaos", minutes: 11, lead: ["LH", "Day-14 Ovulation Trigger", "#ec4899", "spiky"], foil: ["Progesterone", "Uterus Lining Guardian", "#8b5cf6", "bean"], dinner: "Colour-coding Pituitary vs Ovary hormone curves beside balcony hibiscus flowers", cold: "FSH matured the egg, Oestrogen rebuilt the lining and muted FSH, then LH triggered Day-14 ovulation!", rant: "Never confuse POLLINATION (pollen landing on stigma) with FERTILISATION (male gamete nucleus fusing with ovule nucleus)!" },
  "bio-inheritance": { show: "Body Corporate", title: "Meiosis Shuffled The Seating Plan", minutes: 11, lead: ["Allele-A", "Heterozygous Executive", "#6366f1", "brain"], foil: ["Meiosis", "Haploid Gamete Shuffler", "#14b8a6", "spiky"], dinner: "Drawing Punnett squares on a dinner napkin for recessive family traits", cold: "Mitosis photocopied two identical diploid cells, while Meiosis divided twice into four genetically distinct haploid gametes!", rant: "A DNA base mutation alters mRNA codons at the ribosome, changing amino acid sequence and folding of the protein!" },
  "bio-ecology": { show: "Body Corporate", title: "Ninety Percent Lost In Transit", minutes: 11, lead: ["Trophic", "Energy-Pyramid Auditor", "#22c55e", "round"], foil: ["Rhizobium", "Nitrogen-Fixing Contractor", "#b45309", "bean"], dinner: "Why eating plant-based meals loses far less trophic energy than four-step chains", cold: "Ninety percent of energy vanished between trophic levels via respiration heat, movement, and undigested faeces!", rant: "Eutrophication sequence: leached nitrates -> algal bloom -> light blocked -> plants die -> aerobic decomposers multiply and deplete O2!" },
  "chem-particles": { show: "Atomic HR", title: "Flatlining On The Melting Curve", minutes: 11, lead: ["Lattice", "Kinetic-Theory Steward", "#38bdf8", "round"], foil: ["NH3-Fast", "Low-Mr Diffusion Sprinter", "#a855f7", "drop"], dinner: "Ice cubes melting at a steady 0 °C while curry spices diffuse down the hall", cold: "We kept heating melting ice at 0 °C and temperature flatlined — every Joule went into overcoming intermolecular forces!", rant: "Ammonia (Mr 17) has lower molecular mass than HCl (Mr 36.5), so NH3 diffuses faster and the white NH4Cl ring forms closer to HCl!" },
  "chem-atoms": { show: "Atomic HR", title: "Same Protons, Heavier Baggage", minutes: 11, lead: ["Cl-35", "75% Senior Isotope", "#22c55e", "round"], foil: ["Cl-37", "25% Heavy-Neutron Twin", "#14b8a6", "round"], dinner: "Working out why Chlorine's Periodic Table Ar is 35.5 with zero half-neutrons", cold: "Cl-35 and Cl-37 clocked in with identical 2,8,7 outer shells — Chemical Reactions HR couldn't tell them apart!", rant: "Isotopes have the SAME number of protons (atomic number) and outer electrons, but DIFFERENT numbers of neutrons!" },
  "chem-periodic": { show: "Atomic HR", title: "Argon Declines Every Meeting Invite", minutes: 11, lead: ["Argon", "Full-Shell Group 0 VP", "#8b5cf6", "round"], foil: ["Potassium", "Shielded Group 1 Hothead", "#ef4444", "spiky"], dinner: "Inert argon lightbulbs vs reactive Group 1 metals stored under oil", cold: "Potassium burst into lilac flames on water because its outer electron sits four shells out, shielded and weakly attracted!", rant: "Group 1 gets MORE reactive down the group (easier to lose e-), while Group 7 gets LESS reactive down the group (harder to gain e-)!" },
  "chem-bonding": { show: "Atomic HR", title: "Grand Theft Valence Electron", minutes: 11, lead: ["Na+ Ion", "Giant-Lattice Cation", "#f59e0b", "round"], foil: ["Graphite", "Delocalised Layer Rebel", "#64748b", "spiky"], dinner: "Table salt surviving 800 °C tawa heat while simple covalent ice melts fast", cold: "Someone wrote simple covalent CO2 boils easily because covalent bonds break — NO! Only weak INTERMOLECULAR forces break!", rant: "Ionic compounds conduct when molten or aqueous because IONS are free to move — electrons only carry current in metals and graphite!" },
  "chem-stoichiometry": { show: "Atomic HR", title: "Six Hundred Sextillion Headcount", minutes: 11, lead: ["Avogadro", "Chief Mole Accountant", "#14b8a6", "brain"], foil: ["Limiting", "Bottleneck Reactant Lead", "#e11d48", "bean"], dinner: "Scaling a recipe until running out of one spice — classic limiting reactant", cold: "Crucible audit: divide masses by Ar FIRST to find simplest whole-number empirical mole ratios, and convert cm3 to dm3 by dividing by 1000!", rant: "Three core formulas: n = m / Mr, solution n = c × V(dm3), and gas volume at r.t.p. = n × 24 dm3!" },
  "chem-electrochemistry": { show: "Atomic HR", title: "PANIC At The Brine Electrolysis Desk", minutes: 11, lead: ["Anode (+)", "Oxidation Terminal (OIL)", "#ef4444", "spiky"], foil: ["Cathode (-)", "Reduction Terminal (RIG)", "#3b82f6", "round"], dinner: "Chanting PANIC and OIL RIG over aqueous vs molten salt rules", cold: "Na+ queued at the negative Cathode in aqueous brine expecting sodium metal — and Hydrogen cut in front because Na is more reactive than H2!", rant: "Aqueous Cathode gives H2 unless the metal is LESS reactive than hydrogen (Cu, Ag); Anode gives halogen (Cl2, Br2, I2) if concentrated halide, else O2!" },
  "chem-energetics": { show: "Atomic HR", title: "Breaking Up Costs Bond Money", minutes: 11, lead: ["Exo", "Negative-ΔH Heat Boss", "#f97316", "drop"], foil: ["Endo", "Bond-Breaking Accountant", "#06b6d4", "spiky"], dinner: "Hot exothermic handwarmers vs fizzy endothermic sherbet cooling the tongue", cold: "MEXOBENDO Alert: Bond BREAKING is always ENDOTHERMIC (+), and bond MAKING is always EXOTHERMIC (−)!", rant: "Calculate Q = m c ΔT in Joules, divide by 1000 for kJ, divide by moles n, and add a MINUS sign if temperature rose!" },
  "chem-rates": { show: "Atomic HR", title: "Disappearing Cross & Stubborn Le Chatelier", minutes: 11, lead: ["Kinetic", "Collision-Frequency Marshal", "#eab308", "spiky"], foil: ["Equilibrium", "Le Chatelier Contrarian", "#8b5cf6", "brain"], dinner: "Ground masala reacting in seconds vs whole pods simmering slowly", cold: "Management raised pressure and Le Chatelier immediately shifted toward FEWER gas moles — then ignored the catalyst completely on yield!", rant: "Higher concentration or pressure means MORE PARTICLES PER UNIT VOLUME -> HIGHER FREQUENCY OF SUCCESSFUL COLLISIONS!" },
  "chem-acids-bases": { show: "Atomic HR", title: "Excess Copper Oxide Insurance", minutes: 11, lead: ["Proton-H+", "Acidic Donor Specialist", "#ef4444", "drop"], foil: ["Crystal", "Hydrated Salt Engineer", "#2563eb", "bean"], dinner: "Lemon juice fizzing CO2 out of baking soda vs growing blue hydrated crystals", cold: "Never boil hydrated copper sulfate completely dry — evaporate to crystallisation point, cool, filter, and pat dry!", rant: "Acids are proton (H+) donors; bases are proton acceptors! Use single-change indicators (phenolphthalein or methyl orange) in titrations, NEVER universal indicator!" },
  "chem-metals": { show: "Atomic HR", title: "Zinc Volunteering As Sacrificial Intern", minutes: 11, lead: ["Zinc", "Galvanising Sacrificial Guard", "#14b8a6", "round"], foil: ["Blast-CO", "Haematite Reducer", "#d97006", "liver"], dinner: "Why stainless-steel forks stay shiny while ungalvanised iron railings rust", cold: "Aluminium sits above Carbon so it demands molten cryolite electrolysis, while Iron gets reduced by CO in the blast furnace!", rant: "Zinc is MORE reactive than iron so it oxidises preferentially even when scratched! And alloys are harder because different-sized atoms distort layers!" },
  "chem-environment": { show: "Atomic HR", title: "Anhydrous Copper Sulfate Leak Test", minutes: 11, lead: ["Pure-H2O", "100.0 °C Purity Auditor", "#0ea5e9", "drop"], foil: ["Atmos", "Greenhouse IR Tracker", "#10b981", "round"], dinner: "Testing whether a colourless liquid is pure water vs merely containing water", cold: "White anhydrous CuSO4 turning blue ONLY proves water is PRESENT — you need a sharp 100 °C boiling point to prove water is PURE!", rant: "Incomplete combustion forms CO (binds haemoglobin); sulfur impurities form SO2 -> acid rain; hot engines react N2 + O2 -> NOx!" },
  "chem-organic": { show: "Atomic HR", title: "Bromine Water Paparazzi", minutes: 11, lead: ["Ethene", "C=C Unsaturated Star", "#ec4899", "spiky"], foil: ["Fraction", "Bubble-Cap Tower Boss", "#f59e0b", "liver"], dinner: "Clean short-chain stove gas vs viscous long-chain road bitumen", cold: "Unsaturated Alkene snapped open its C=C double bond and decolourised orange bromine water immediately, while Alkane needed UV light!", rant: "Short-chain fractions have WEAKER intermolecular forces so they condense near the cool top of the fractionating column! Cracking uses 600–700 °C + alumina/silica!" },
  "chem-analysis": { show: "Atomic HR", title: "Flame-Test Fireworks & Pencil Baselines", minutes: 11, lead: ["Nichrome", "Ion-Test Forensics Chief", "#f43f5e", "spiky"], foil: ["Chromo", "Rf Baseline Officer", "#8b5cf6", "bean"], dinner: "Yellow sodium flame on the stove ring triggers a full cation/anion colour check", cold: "Someone drew a chromatography baseline in ink instead of pencil — every dye dissolved into the solvent!", rant: "Flames: Li+ crimson, Na+ yellow, K+ lilac, Ca2+ orange-red, Cu2+ blue-green! Halides (HNO3 + AgNO3): Cl- white, Br- cream, I- yellow!" },
  "phys-motion": { show: "Forces HQ", title: "Gradient Means Acceleration, Not Vibes", minutes: 11, lead: ["Velocity", "Vector Motion Director", "#3b82f6", "spiky"], foil: ["Trapezium", "v–t Area Accountant", "#14b8a6", "round"], dinner: "MRT train curving at steady speed — velocity changes because direction changes", cold: "An intern called a flat horizontal line at 20 m/s on a velocity-time graph 'stationary' — check the y-axis first!", rant: "On d–t: gradient = speed. On v–t: gradient = acceleration (v−u)/t, flat = constant velocity, and AREA under the curve = distance travelled!" },
  "phys-forces": { show: "Forces HQ", title: "Terminal Velocity Skydiving Audit", minutes: 11, lead: ["Newton", "Resultant-Force Chief", "#ef4444", "brain"], foil: ["Torque", "Perpendicular Moment Lead", "#f59e0b", "bean"], dinner: "Pushing a heavy door near the handle vs near the hinge pivot", cold: "When a parachute opens and drag exceeds weight, the skydiver DECELERATES downward — they NEVER fly upward!", rant: "F = m a uses RESULTANT force; Stopping = Thinking (speed, reaction time) + Braking (speed2, road/tyres); total momentum m1u1 + m2u2 is conserved!" },
  "phys-energy": { show: "Forces HQ", title: "Sankey's Missing Joules", minutes: 11, lead: ["Joule", "Energy-Store Auditor", "#eab308", "round"], foil: ["Watt", "Power Rate Supervisor", "#10b981", "spiky"], dinner: "Dropping a tennis ball: mgh transfers to ½mv2 plus dissipated thermal energy", cold: "Energy never 'disappears' — wasted energy dissipates into the thermal store of the surroundings!", rant: "Equate m g h = ½ m v2 (v = √(2gh)), Work W = F d, Power P = E / t, and Efficiency = Useful Energy Out / Total Energy In!" },
  "phys-thermal": { show: "Forces HQ", title: "Shiny Teapots & Absolute Zero", minutes: 11, lead: ["Kelvin", "−273 °C Gas-Law Warden", "#06b6d4", "round"], foil: ["Matte-IR", "Radiation Specialist", "#ec4899", "spiky"], dinner: "Keeping masala chai hot in a silvered vacuum flask", cold: "Always add 273 to °C to get Kelvin BEFORE touching P1/T1 = P2/T2!", rant: "Heated fluid expands, becomes LESS DENSE, and rises (particles themselves NEVER expand!); matte black emits/absorbs IR best, shiny silver reflects!" },
  "phys-waves": { show: "Forces HQ", title: "Bent Towards The Normal", minutes: 11, lead: ["Snell", "Refraction Navigator", "#8b5cf6", "drop"], foil: ["Transverse", "90°-Oscillation Marshal", "#14b8a6", "bean"], dinner: "Bent spoon in a water glass and fibre-optic Total Internal Reflection", cold: "Measure angles from the 90° dotted NORMAL, never from the glass block surface!", rant: "Entering denser glass: speed and wavelength drop while frequency stays constant -> bends TOWARDS normal (n = sin i / sin r; sin c = 1/n for TIR)!" },
  "phys-sound-em": { show: "Forces HQ", title: "Three Hundred Million Metres Per Second Club", minutes: 11, lead: ["Gamma", "Ionising EM Director", "#e11d48", "spiky"], foil: ["Sonar", "Longitudinal Echo Lead", "#0ea5e9", "round"], dinner: "5G radio, warm IR food, visible light — all racing at identical vacuum speed", cold: "Every EM wave from Radio to Gamma travels at the EXACT same 3.0 × 10^8 m/s in a vacuum!", rant: "Radio -> Gamma increases frequency and ionising hazard; Sound is longitudinal (20 Hz–20 kHz) and echo sonar needs v = 2d / t!" },
  "phys-electricity": { show: "Forces HQ", title: "Ammeters In Line, Voltmeters Eavesdropping", minutes: 11, lead: ["Volt", "Joules-Per-Coulomb Boss", "#f59e0b", "spiky"], foil: ["Ampere", "Series Current Counter", "#3b82f6", "round"], dinner: "Parallel apartment lighting and USB-C fast charging (P = I V)", cold: "Never wire a high-resistance Voltmeter in series — Ammeters go in series, Voltmeters across in parallel!", rant: "V = I R, Q = I t, P = I V, E = I V t! More light on an LDR or more heat on a thermistor makes resistance DROP!" },
  "phys-magnetism": { show: "Forces HQ", title: "Left-Hand Motor vs AC Transformer", minutes: 11, lead: ["Fleming", "Left-Hand Motor Cop", "#6366f1", "brain"], foil: ["Transformer", "AC Iron-Core Boss", "#10b981", "liver"], dinner: "Step-down phone chargers and why DC batteries produce zero transformer output", cold: "DC gives a steady magnetic field so zero voltage is induced — Transformers require AC for a continuously changing flux!", rant: "Vp / Vs = Np / Ns and Vp Ip = Vs Is! National Grid steps voltage UP to step current DOWN, slashing I^2 R heating loss in cables!" },
  "phys-nuclear": { show: "Forces HQ", title: "Random Decay, Zero Notice Period", minutes: 11, lead: ["Alpha", "Helium-4 Ioniser", "#ef4444", "round"], foil: ["Geiger", "Half-Life Auditor", "#14b8a6", "bean"], dinner: "Subtracting background radiation before calculating sample half-life", cold: "Always subtract background count rate FIRST before halving on a half-life question!", rant: "Alpha drops A by 4 & Z by 2 (paper stops); Beta- turns neutron -> proton so Z goes UP by 1 (aluminium stops); boron rods absorb fission neutrons, graphite moderator slows them!" },
  "phys-space": { show: "Forces HQ", title: "Red-Shift Receipts From Every Galaxy", minutes: 11, lead: ["Hubble", "Red-Shift Cosmologist", "#8b5cf6", "brain"], foil: ["Protostar", "Fusion Lifecycle Lead", "#f97316", "spiky"], dinner: "Night sky over Kallang Basin — sun-mass white dwarfs vs supergiant supernovae", cold: "Our Sun will NEVER go supernova — Sun-mass stars end as Red Giant -> White Dwarf -> Black Dwarf!", rant: "Orbital speed v = 2πr / T! More distant galaxies show greater Red-Shift (faster recession), which alongside CMB radiation supports the Big Bang!" },
};

function stripMd(raw: string, maxLen = 210): string {
  const s = String(raw || "")
    .replace(/<[^>]+>/g, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
  if (s.length <= maxLen) return s;
  const cut = s.slice(0, maxLen).split(". ");
  return cut.length > 1 ? cut.slice(0, -1).join(". ") + "." : s.slice(0, maxLen) + "...";
}

function buildMockumentaryHtml(topic: Topic, vault: TopicMemoryVault | null, initTheme: string): string {
  const spec = COMEDY_SPECS[topic.id] || {
    show: topic.subject === "biology" ? "Body Corporate" : topic.subject === "chemistry" ? "Atomic HR" : "Forces HQ",
    title: topic.title,
    minutes: 11,
    lead: ["Lead", topic.title + " Specialist", "#14b8a6", "round"],
    foil: ["Audit", "QA Inspector", "#f59e0b", "spiky"],
    dinner: "Meera spots " + topic.title + " in everyday action at the dinner table",
    cold: "Emergency mark-scheme briefing on " + topic.title + "!",
    rant: stripMd(topic.blurb, 190),
  };

  const specCode = vault?.specCode || (topic.subject === "biology" ? "Edexcel 4BI1" : topic.subject === "chemistry" ? "Edexcel 4CH1" : "Edexcel 4PH1");
  const specRefs = vault?.specRefs || specCode;

  interface SceneLine { who: string; text: string; start: number; end: number; emote: string; step: number; sfx: string; }
  interface SceneDef {
    id: string; shot: string; bg: string; who?: string; clock: string;
    lower_third?: { title: string; subtitle: string };
    boardData?: { badge: string; heading: string; caption: string; svg: string; bullets: string[] };
    card?: { num: string; bad: string; good: string };
    start: number; end: number; lines: SceneLine[];
  }

  const rawScenes: Array<Omit<SceneDef, "start" | "end" | "lines"> & { rawLines: Array<[string, string, string, number, string]> }> = [
    {
      id: "cold_open", shot: "office", bg: topic.subject === "chemistry" ? "stomach" : "office", clock: "19:40",
      lower_third: { title: `${spec.show} · Operations Floor`, subtitle: `${specRefs} · ${topic.title}` },
      rawLines: [
        ["NARR", `Seven-forty P.M. Inside ${spec.show}, warning lights are flashing over ${topic.title}.`, "idle", 1, ""],
        ["BOSS", spec.cold, "shock", 1, "scratch"],
        ["LEAD", `Relax! I'm ${spec.lead[0]} — ${spec.lead[1]}. Give me ten minutes and nobody drops a single mark on ${topic.title}!`, "proud", 1, "ping"],
        ["FOIL", spec.rant, "angry", 1, "boing"],
      ],
    },
    {
      id: "host_intro", shot: "host", bg: "host", clock: "19:41",
      lower_third: { title: `${spec.show.toUpperCase()} · SPECIAL`, subtitle: `“${spec.title}” · ${specRefs}` },
      rawLines: [
        ["HOST", `Welcome to ${spec.show}! Tonight: “${spec.title}” — covering ${topic.guide.slice(0, 4).map((g) => g.heading).join(", ")}, plus our Exam-Trap Speed Round!`, "happy", 1, "ding"],
      ],
    },
    {
      id: "home_cutaway", shot: "live", bg: "kitchen", clock: "19:42",
      lower_third: { title: "Real-World Cam · Singapore Dining Table", subtitle: spec.dinner },
      rawLines: [
        ["MUM", `Meera, look — ${spec.dinner.charAt(0).toLowerCase() + spec.dinner.slice(1)}!`, "explain", 1, ""],
        ["MEERA", `Wait Mum, that's literally ${topic.title}! Past papers always test how ${stripMd(topic.blurb, 160).toLowerCase()}`, "happy", 1, "ping"],
      ],
    },
    {
      id: "lead_confessional", shot: "confessional", bg: "confessional", who: "LEAD", clock: "19:43",
      lower_third: { title: `${spec.lead[0].toUpperCase()} · ${spec.lead[1]}`, subtitle: specRefs },
      rawLines: [
        ["LEAD", `Headline rule in my department: ${stripMd(topic.learn.keyFacts[0] || topic.intro, 200)}`, "proud", 1, ""],
        ["LEAD", `And right below that on the mark scheme: ${stripMd(topic.learn.keyFacts[1] || topic.blurb, 200)}`, "smug", 1, "ding"],
      ],
    },
  ];

  topic.guide.slice(0, 4).forEach((g, idx) => {
    const paras = g.body.split(/\n\n+/).map((p) => stripMd(p, 210)).filter(Boolean);
    const bullets = (g.keyPoints && g.keyPoints.length ? g.keyPoints : g.body.split("\n").filter((l) => l.trim().startsWith("- ")).map((l) => l.replace(/^\s*-\s*/, "")))
      .slice(0, 3).map((b) => stripMd(b, 120)).filter(Boolean);
    if (!bullets.length && paras[0]) bullets.push(stripMd(paras[0], 120));
    const diag = g.diagrams && g.diagrams[0];
    const lines: Array<[string, string, string, number, string]> = [
      [idx % 2 === 0 ? "LEAD" : "FOIL", `Whiteboard ${idx + 1}: ${g.heading}. ${paras[0] || ""}`, "explain", 1, "ping"],
    ];
    if (paras[1]) lines.push(["TEACHER", paras[1], "explain", 2, ""]);
    if (g.whyItWorks) lines.push(["TEACHER", `Why examiners love this: ${stripMd(g.whyItWorks, 200)}`, "proud", 3, "ding"]);
    else if (bullets[bullets.length - 1]) lines.push(["BOSS", `Key mark-scheme phrase: ${bullets[bullets.length - 1]}`, "proud", 3, "ding"]);

    rawScenes.push({
      id: `board_${idx + 1}`, shot: "diagram", bg: "diagram", clock: `19:${45 + idx * 2}`,
      boardData: {
        badge: `${specCode} · ${idx + 1}`,
        heading: g.heading,
        caption: diag?.caption || g.heading,
        svg: diag?.svg ? diag.svg.replace(/<!--[\s\S]*?-->/g, "").trim() : "",
        bullets,
      },
      rawLines: lines,
    });
  });

  const pitfalls = (vault?.pitfalls || []).slice(0, 5);
  pitfalls.forEach((p, idx) => {
    rawScenes.push({
      id: `trap_${idx + 1}`, shot: "card", bg: "card", clock: `19:${54 + idx}`,
      card: {
        num: `TRAP ${idx + 1} / ${pitfalls.length} · ${p.spec || specCode}`,
        bad: `“${stripMd(p.wrong, 155)}”`,
        good: `“${stripMd(p.right, 185)}”`,
      },
      rawLines: [
        [idx % 2 === 0 ? "HOST" : "FOIL", `Exam Trap ${idx + 1}! Students lose marks writing: ${stripMd(p.wrong, 155)}`, "shock", 1, "scratch"],
        [idx % 2 === 0 ? "TEACHER" : "LEAD", `Mark-scheme fix: ${stripMd(p.right, 185)}`, "proud", 1, "ding"],
      ],
    });
  });

  rawScenes.push({
    id: "outro", shot: "office", bg: "office", clock: "20:00",
    lower_third: { title: `${spec.show} · Shift Complete`, subtitle: `${topic.title} (+5 ⭐)` },
    rawLines: [
      ["LEAD", `That's ${topic.title} locked down — definitions, diagrams, and examiner traps sorted!`, "happy", 1, ""],
      ["HOST", `Collect your five Watch stars and try the 6-Question Quick Check tab above!`, "happy", 1, "ding"],
    ],
  });

  let tCur = 0;
  const scenes: SceneDef[] = rawScenes.map((rs) => {
    const scStart = Number(tCur.toFixed(2));
    const lines: SceneLine[] = rs.rawLines.map(([who, text, emote, step, sfx]) => {
      const dur = Math.max(2.6, text.split(/\s+/).length / 2.45 + 0.55);
      const ln = { who, text, start: Number(tCur.toFixed(2)), end: Number((tCur + dur).toFixed(2)), emote, step, sfx };
      tCur += dur;
      return ln;
    });
    tCur += 0.3;
    return {
      id: rs.id, shot: rs.shot, bg: rs.bg, who: rs.who, clock: rs.clock,
      lower_third: rs.lower_third, boardData: rs.boardData, card: rs.card,
      start: scStart, end: Number(tCur.toFixed(2)), lines,
    };
  });

  const mcqs = topic.quiz.mcq.slice(0, 6).map((m) => ({
    q: m.question, opts: m.options, ans: m.answerIndex,
    hint: (m.hints && m.hints[0]) || "Focus on the exact Edexcel mark-scheme wording.",
    why: m.explanation, ref: m.guideRef || topic.title,
  }));

  const payload = JSON.stringify({
    slug: topic.id, show: spec.show, epTitle: spec.title, topicTitle: topic.title,
    icon: topic.icon, specCode, specRefs, duration: Number(tCur.toFixed(2)),
    lead: spec.lead, foil: spec.foil, scenes, mcqs,
  }).replace(/<\//g, "<\\/");

  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link href="${["ht","tps://"].join("")}fonts.googleapis.com/css2?family=Bangers&family=Fredoka:wght@400;600;700&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
<style>
:root{--bg:#0b1020;--panel:#131b33;--panel2:#1b2544;--border:#2a3966;--text:#f8fafc;--muted:#94a3b8;--accent:#14b8a6}
body.light{--bg:#f8fafc;--panel:#ffffff;--panel2:#f1f5f9;--border:#cbd5e1;--text:#0f172a;--muted:#475569;--accent:#0d9488}
*{box-sizing:border-box}body{margin:0;font-family:Inter,system-ui,sans-serif;background:var(--bg);color:var(--text);padding:10px}
.top{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:8px;padding:10px 14px;background:var(--panel);border:1px solid var(--border);border-radius:14px;margin-bottom:10px}
.tabs{display:flex;gap:6px}.tbtn{min-height:38px;padding:0 13px;border-radius:10px;border:1px solid var(--border);background:var(--panel2);color:var(--text);font-weight:700;font-size:12.5px;cursor:pointer}
.tbtn.on{background:#14b8a6;color:#042f2e;border-color:#5eead4}.pane{display:none}.pane.on{display:block}
.stage{background:var(--panel);border:1px solid var(--border);border-radius:16px;overflow:hidden}
.cbox{position:relative;width:100%;aspect-ratio:16/9;background:#050811}#c{width:100%;height:100%;display:block}
.ov{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(6,10,22,.56);cursor:pointer;text-align:center;padding:14px}
.ov.hide{opacity:0;pointer-events:none}.pbig{padding:13px 24px;border-radius:999px;border:3px solid #facc15;background:#0f172a;color:#facc15;font:700 20px Fredoka,sans-serif}
.bar{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:10px 12px;background:var(--panel2);border-top:1px solid var(--border)}
.cbtn{min-height:38px;padding:0 11px;border-radius:9px;border:1px solid var(--border);background:var(--panel);color:var(--text);font-weight:600;font-size:12.5px;cursor:pointer}
.cbtn.pri{background:#facc15;color:#0f172a;border-color:#eab308;font-weight:700}
.chaps{display:flex;gap:6px;overflow-x:auto;padding:9px 12px;background:var(--panel);border-top:1px solid var(--border)}
.cpill{flex:0 0 auto;padding:5px 11px;border-radius:999px;border:1px solid var(--border);background:var(--panel2);color:var(--text);font-size:11.5px;font-weight:600;cursor:pointer;white-space:nowrap}
.cpill.on{background:rgba(250,204,21,.22);border-color:#eab308}
.card{background:var(--panel);border:1px solid var(--border);border-radius:13px;padding:14px;margin-bottom:10px}
.opt{display:block;width:100%;text-align:left;min-height:42px;padding:9px 12px;margin-top:6px;border-radius:9px;border:1px solid var(--border);background:var(--panel2);color:var(--text);cursor:pointer}
.opt.ok{background:rgba(34,197,94,.22);border-color:#22c55e;font-weight:600}.opt.bad{background:rgba(239,68,68,.22);border-color:#ef4444}
</style></head><body class="${initTheme === "light" ? "light" : ""}">
<div id="wrap">
<div class="top">
<div><div style="font:700 18px Fredoka,sans-serif" id="hdr"></div><div style="font-size:12px;color:var(--muted)" id="sub"></div></div>
<div class="tabs">
<button type="button" class="tbtn on" id="tbW">🎬 Watch</button>
<button type="button" class="tbtn" id="tbS">📜 Script</button>
<button type="button" class="tbtn" id="tbQ">🎯 6-Q Check <span id="qsc"></span></button>
</div>
</div>
<div class="pane on" id="pW">
<div class="stage">
<div class="cbox"><canvas id="c" width="1280" height="720"></canvas>
<div class="ov" id="ov"><div class="pbig" id="pbig"></div><div style="color:#e2e8f0;font-size:12.5px;margin-top:8px;font-weight:600">Clean human voices · Sarcastic coworkers · Animated diagrams · Exam-Trap Speed Round</div></div>
</div>
<div class="bar">
<button type="button" class="cbtn pri" id="bPlay">▶ Play</button>
<button type="button" class="cbtn" id="bPrev">⏮</button>
<button type="button" class="cbtn" id="bNext">⏭</button>
<input type="range" id="scrub" min="0" max="1000" value="0" style="flex:1;min-width:120px;accent-color:#14b8a6">
<span id="tlbl" style="font-size:12px;color:var(--muted);min-width:86px;text-align:right">00:00</span>
<button type="button" class="cbtn" id="bSpd">1.0×</button>
<button type="button" class="cbtn" id="bMute">🔊 Voice On</button>
<button type="button" class="cbtn" id="bAi">🎙️ AI Studio Voices</button>
</div>
<div class="chaps" id="chaps"></div>
</div>
</div>
<div class="pane" id="pS"></div>
<div class="pane" id="pQ"></div>
</div>
<script id="epData" type="application/json">${payload}</script>
<script>
(function(){
const EP=JSON.parse(document.getElementById("epData").textContent);
document.getElementById("hdr").textContent=EP.show+": “"+EP.epTitle+"”";
document.getElementById("sub").textContent=EP.icon+" "+EP.topicTitle+" · "+EP.specRefs;
document.getElementById("pbig").textContent="▶ Play “"+EP.epTitle+"”";

const CAST={
HOST:{name:"Zara",col:"#ec4899",shape:"round",g:"f"},
NARR:{name:"Crew",col:"#64748b",shape:"round",g:"m"},
MEERA:{name:"Meera",col:"#f97316",shape:"round",g:"f"},
MUM:{name:"Mum",col:"#eab308",shape:"round",g:"f"},
BOSS:{name:EP.show==="Body Corporate"?"Cortex":EP.show==="Atomic HR"?"Dr. Mole":"Director",col:"#f49ac1",shape:"brain",g:"m"},
TEACHER:{name:"Ms. Tan",col:"#3b82f6",shape:"round",g:"f"},
LEAD:{name:EP.lead[0],col:EP.lead[2],shape:EP.lead[3],g:"f"},
FOIL:{name:EP.foil[0],col:EP.foil[2],shape:EP.foil[3],g:"m"}
};

const cv=document.getElementById("c"),ctx=cv.getContext("2d"),svgCache=new Map();
function getSvg(s){if(!s)return null;if(svgCache.has(s))return svgCache.get(s);const i=new Image();i.src="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(s)));svgCache.set(s,i);return i;}
EP.scenes.forEach(sc=>{if(sc.boardData&&sc.boardData.svg)getSvg(sc.boardData.svg);});

function rr(x,y,w,h,r,f,st,lw){ctx.beginPath();ctx.roundRect(x,y,w,h,r);if(f){ctx.fillStyle=f;ctx.fill();}if(st){ctx.lineWidth=lw||3;ctx.strokeStyle=st;ctx.stroke();}}
function wt(txt,x,y,mw,lh){const ws=String(txt||"").split(" ");let l="",cy=y;for(let i=0;i<ws.length;i++){const t=l?l+" "+ws[i]:ws[i];if(ctx.measureText(t).width>mw&&l){ctx.fillText(l,x,cy);l=ws[i];cy+=lh;}else l=t;}if(l)ctx.fillText(l,x,cy);}

function drawChar(k,x,y,sc,em,amp,spk,t){
const sp=CAST[k]||CAST.BOSS;ctx.save();
ctx.translate(x,y+(spk?Math.sin(t*14)*5*(0.4+amp):Math.sin(t*2.4+x)*2.5));ctx.scale(sc,sc);
const R=82;ctx.fillStyle=sp.col;ctx.strokeStyle="#0f172a";ctx.lineWidth=4.5;ctx.beginPath();
if(sp.shape==="enzyme"){ctx.arc(0,0,R,0.3*Math.PI,1.88*Math.PI);ctx.lineTo(18,-14);ctx.lineTo(R*.9,18);ctx.closePath();}
else if(sp.shape==="brain"){ctx.arc(-24,-10,54,0,7);ctx.arc(24,-10,54,0,7);ctx.arc(0,-30,52,0,7);ctx.arc(0,16,58,0,7);}
else if(sp.shape==="spiky"){for(let i=0;i<12;i++){const a=i/12*Math.PI*2,r=i%2?62:88;i?ctx.lineTo(Math.cos(a)*r,Math.sin(a)*r):ctx.moveTo(Math.cos(a)*r,Math.sin(a)*r);}ctx.closePath();}
else if(sp.shape==="drop"){ctx.moveTo(0,-94);ctx.bezierCurveTo(84,-16,80,76,0,76);ctx.bezierCurveTo(-80,76,-84,-16,0,-94);ctx.closePath();}
else if(sp.shape==="bean"){ctx.ellipse(0,0,72,85,-0.18,0,7);}
else ctx.arc(0,0,R,0,7);
ctx.fill();ctx.stroke();
[-24,24].forEach(ex=>{ctx.fillStyle="#fff";ctx.beginPath();ctx.arc(ex,-16,14,0,7);ctx.fill();ctx.stroke();ctx.fillStyle="#0f172a";ctx.beginPath();ctx.arc(ex+2,-16,6,0,7);ctx.fill();});
const op=spk?Math.max(.14,amp):0;ctx.fillStyle="#450a0a";
if(op>.08){ctx.beginPath();ctx.ellipse(0,22,18+op*10,6+op*18,0,0,7);ctx.fill();ctx.stroke();}
else{ctx.beginPath();ctx.arc(0,16,17,.15*Math.PI,.85*Math.PI);ctx.stroke();}
rr(-72,R+18,144,30,15,spk?"#0f172a":"rgba(15,23,42,.75)",spk?"#facc15":null,2.5);
ctx.fillStyle=spk?"#facc15":"#fff";ctx.font="700 14.5px Fredoka,sans-serif";ctx.textAlign="center";ctx.fillText(sp.name,0,R+38);
ctx.restore();
}

function renderAt(tSec,ovAmp){
const w=1280,h=720;ctx.clearRect(0,0,w,h);
let sc=EP.scenes[0];for(let i=0;i<EP.scenes.length;i++){if(tSec>=EP.scenes[i].start&&tSec<EP.scenes[i].end){sc=EP.scenes[i];break;}if(tSec>=EP.scenes[i].end)sc=EP.scenes[i];}
let ln=sc.lines[0],step=1;
for(let i=0;i<sc.lines.length;i++){if(sc.lines[i].step&&tSec>=sc.lines[i].start)step=sc.lines[i].step;if(tSec>=sc.lines[i].start&&tSec<sc.lines[i].end){ln=sc.lines[i];break;}if(tSec>=sc.lines[i].end)ln=sc.lines[i];}
const amp=typeof ovAmp==="number"?ovAmp:(0.25+0.5*Math.abs(Math.sin(tSec*18)));
ctx.save();
const zoom=(ln.emote==="shock"&&tSec-ln.start<1.2&&sc.shot!=="diagram"&&sc.shot!=="card")?1.11:1.01;
const sx=(sc.shot==="diagram"||sc.shot==="card")?0:Math.sin(tSec*1.9)*4;
ctx.translate(w/2+sx,h/2);ctx.scale(zoom,zoom);ctx.translate(-w/2,-h/2);

const pals={office:["#fefce8","#fde68a"],confessional:["#e2e8f0","#cbd5e1"],stomach:["#1e1b4b","#312e81"],host:["#0f172a","#1e1b4b"],kitchen:["#fff7ed","#ffedd5"],diagram:["#0f172a","#1e293b"],card:["#18181b","#27272a"]};
const p=pals[sc.bg]||pals.office,g=ctx.createLinearGradient(0,0,0,h);g.addColorStop(0,p[0]);g.addColorStop(1,p[1]);ctx.fillStyle=g;ctx.fillRect(0,0,w,h);

if(sc.shot==="diagram"&&sc.boardData){
const bd=sc.boardData;rr(36,24,w-72,544,24,"#fffdf8","#1e293b",4);rr(36,24,w-72,70,[22,22,0,0],"#0f172a",null,0);
rr(56,40,180,36,18,"#14b8a6",null,0);ctx.fillStyle="#042f2e";ctx.font="700 14px Fredoka,sans-serif";ctx.textAlign="center";ctx.fillText(bd.badge,146,63);
ctx.fillStyle="#f8fafc";ctx.font="700 24px Fredoka,sans-serif";ctx.textAlign="left";ctx.fillText(bd.heading,254,64);
const hasS=Boolean(bd.svg);
if(hasS){
rr(62,114,540,424,18,"#0f172a","#334155",3);const im=getSvg(bd.svg);
if(im&&im.complete&&im.naturalWidth>0){const r=Math.min(496/im.naturalWidth,360/im.naturalHeight),dw=im.naturalWidth*r,dh=im.naturalHeight*r;ctx.drawImage(im,62+(540-dw)/2,126+(360-dh)/2,dw,dh);}
ctx.fillStyle="#94a3b8";ctx.font="600 13.5px Fredoka,sans-serif";ctx.textAlign="center";ctx.fillText(bd.caption,332,518);
}
const rx=hasS?628:84,rw=hasS?584:w-168;
(bd.bullets||[]).slice(0,4).forEach((bt,idx)=>{
const cy=118+idx*104,hi=idx===Math.min(bd.bullets.length-1,step-1);
rr(rx,cy,rw,90,16,hi?"#f0fdfa":"#f8fafc",hi?"#0d9488":"#cbd5e1",hi?4:2);
ctx.fillStyle="#0f172a";ctx.font="600 17px Fredoka,sans-serif";ctx.textAlign="left";wt((idx+1)+". "+bt,rx+20,cy+34,rw-40,23);
});
drawChar(ln.who,92,512,.5,ln.emote,amp,true,tSec);
} else if(sc.shot==="card"&&sc.card){
rr(68,38,w-136,518,26,"#0f172a","#facc15",5);rr(100,62,430,40,20,"#facc15",null,0);
ctx.fillStyle="#0f172a";ctx.font="700 18px Bangers,cursive";ctx.textAlign="center";ctx.fillText("🚨 "+sc.card.num,315,89);
rr(100,122,w-200,170,18,"#450a0a","#ef4444",4);ctx.fillStyle="#fecaca";ctx.font="700 20px Fredoka,sans-serif";ctx.textAlign="left";wt("❌ ZERO-MARK TRAP: "+sc.card.bad,128,172,w-256,28);
rr(100,312,w-200,212,18,"#052e16","#22c55e",4);ctx.fillStyle="#dcfce7";ctx.font="700 20px Fredoka,sans-serif";wt("✅ MARK SCHEME: "+sc.card.good,128,364,w-256,28);
drawChar(ln.who,1140,486,.58,ln.emote,amp,true,tSec);
} else if(sc.shot==="confessional"){
rr(120,48,w-240,388,14,"#f8fafc","#64748b",5);ctx.fillStyle="#cbd5e1";for(let y=66;y<420;y+=24)ctx.fillRect(130,y,w-260,11);
drawChar(sc.who||ln.who,w/2,336,1.3,ln.emote,amp,true,tSec);
} else if(sc.shot==="host"){
rr(310,50,660,70,35,"#facc15","#0f172a",4);ctx.fillStyle="#0f172a";ctx.font="700 32px Bangers,cursive";ctx.textAlign="center";ctx.fillText(EP.show.toUpperCase()+" · EDEXCEL",w/2,95);
drawChar("HOST",w/2,344,1.28,ln.emote,amp,true,tSec);
} else if(sc.shot==="live"){
rr(180,56,w-360,474,26,"#fffbeb","#0f172a",5);rr(180,56,w-360,54,[22,22,0,0],"#ea580c",null,0);
ctx.fillStyle="#fff";ctx.font="700 19px Fredoka,sans-serif";ctx.textAlign="center";ctx.fillText("📱 REAL-WORLD CAM · MEERA & MUM",w/2,89);
drawChar("MUM",450,320,1.04,"explain",amp,ln.who==="MUM",tSec);drawChar("MEERA",830,320,1.04,"happy",amp,ln.who==="MEERA",tSec);
} else {
rr(84,68,350,132,16,"#fff","#0f172a",4);ctx.fillStyle="#dc2626";ctx.font="700 17px Fredoka,sans-serif";ctx.textAlign="center";ctx.fillText(EP.show.toUpperCase()+" · QA",259,102);
ctx.fillStyle="#0f172a";ctx.font="600 15px Fredoka,sans-serif";ctx.fillText("Days Since Exam Blunder: 0",259,145);
rr(210,468,860,92,16,"#d97706","#0f172a",4);
["BOSS","LEAD","FOIL"].forEach((ck,i)=>drawChar(ck,320+i*320,356,ln.who===ck?1.05:.92,ln.who===ck?ln.emote:"idle",amp,ln.who===ck,tSec));
}
if(sc.shot!=="diagram"&&sc.shot!=="card"&&sc.lower_third&&tSec-sc.start<5.2){
rr(42,492,580,72,16,"rgba(15,23,42,.92)","#14b8a6",4);ctx.fillStyle="#f8fafc";ctx.font="700 20px Fredoka,sans-serif";ctx.textAlign="left";ctx.fillText(sc.lower_third.title,64,522);
ctx.fillStyle="#cbd5e1";ctx.font="600 14px Fredoka,sans-serif";ctx.fillText(sc.lower_third.subtitle,64,548);
}
ctx.restore();
rr(64,h-118,w-128,100,20,"rgba(9,13,24,.92)","rgba(255,255,255,.18)",2);
const sp=CAST[ln.who]||CAST.BOSS;rr(84,h-102,136,32,16,sp.col,null,0);
ctx.fillStyle="#0f172a";ctx.font="700 14px Fredoka,sans-serif";ctx.textAlign="center";ctx.fillText(sp.name.toUpperCase(),152,h-81);
ctx.fillStyle="#f8fafc";ctx.font="600 20px Fredoka,sans-serif";ctx.textAlign="left";wt(ln.text,236,h-81,w-320,27);
}

// Clean Non-Novelty Human Voices + Optional Kokoro-82M Neural Studio
const BAD_RE=/\\b(albert|bad news|bahh|bells|boing|bubbles|cellos|deranged|eddy|flo|fred|good news|grandma|grandpa|hysterical|jester|junior|kathy|organ|pipe|princess|ralph|reed|rocko|sandy|shelley|superstar|trinoids|whisper|wobble|zarvox|eloquence|espeak)\\b/i;
const F_PREF=["Google US English","Google UK English Female","Samantha","Ava","Karen","Serena","Moira","Tessa"];
const M_PREF=["Google UK English Male","Daniel","Alex","Arthur","Oliver","Aaron","Tom","Rishi"];
let voices=[];
function loadV(){if(!window.speechSynthesis)return;voices=(window.speechSynthesis.getVoices()||[]).filter(v=>v&&v.lang&&/^en([-_]|$)/i.test(v.lang)&&!BAD_RE.test(v.name||""));}
if(window.speechSynthesis){loadV();if("onvoiceschanged"in window.speechSynthesis)window.speechSynthesis.addEventListener("voiceschanged",loadV);}
function pickV(who){
if(!voices.length)loadV();if(!voices.length)return null;
const prefs=((CAST[who]||CAST.BOSS).g==="f")?F_PREF:M_PREF;
const rk=voices.slice().sort((a,b)=>((/premium|enhanced|natural|neural|google|siri/i.test(b.name)?10:0)-( /premium|enhanced|natural|neural|google|siri/i.test(a.name)?10:0)));
for(const p of prefs){const h=rk.find(v=>(v.name||"").toLowerCase().includes(p.toLowerCase()));if(h)return h;}
return rk[0];
}

const AI={status:"idle",w:null,pend:new Map(),seq:1,ac:null,src:null,
init(){
if(this.status==="ready")return;this.status="loading";const b=document.getElementById("bAi");b.textContent="⏳ Loading AI...";
const code='import {KokoroTTS} from ""+["ht","tps://"].join("")+"cdn.jsdelivr.net/npm/kokoro-js@1.2.1/+esm";let t=null;self.onmessage=async e=>{const m=e.data;if(m.t==="i"){try{t=await KokoroTTS.from_pretrained("onnx-community/Kokoro-82M-v1.0-ONNX",{dtype:"q8",device:"wasm"});self.postMessage({t:"r"});}catch{self.postMessage({t:"e"});}}else{try{const o=await t.generate(m.txt,{voice:m.v,speed:m.s});const p=new Float32Array(o.audio||o.data);self.postMessage({t:"p",id:m.id,p,sr:o.sampling_rate||24000},[p.buffer]);}catch{self.postMessage({t:"p",id:m.id});}}};';
const w=new Worker(URL.createObjectURL(new Blob([code],{type:"text/javascript"})),{type:"module"});
w.onmessage=ev=>{const d=ev.data||{};if(d.t==="r"){this.status="ready";this.w=w;b.textContent="✨ AI Studio Active";}else if(d.t==="e"){this.status="err";b.textContent="🔊 Clean Voices";}else if(d.t==="p"&&this.pend.has(d.id)){this.pend.get(d.id)(d);this.pend.delete(d.id);}};
w.postMessage({t:"i"});
},
stop(){if(this.src){try{this.src.onended=null;this.src.stop();}catch{}this.src=null;}},
async speak(txt,who,spd,cb){
if(this.status!=="ready")return false;const id=this.seq++;const v=((CAST[who]||CAST.BOSS).g==="f")?"af_bella":"bm_george";
const r=await new Promise(res=>{this.pend.set(id,res);this.w.postMessage({t:"s",id,txt,v,s:spd});});
if(!r||!r.p)return false;const AC=window.AudioContext||window.webkitAudioContext;if(!this.ac)this.ac=new AC();if(this.ac.state==="suspended")await this.ac.resume();
const buf=this.ac.createBuffer(1,r.p.length,r.sr);buf.getChannelData(0).set(r.p);const s=this.ac.createBufferSource();s.buffer=buf;s.connect(this.ac.destination);s.onended=cb;this.src=s;s.start();return true;
}
};
document.getElementById("bAi").addEventListener("click",()=>AI.init());

const flat=[];EP.scenes.forEach((sc,si)=>sc.lines.forEach(ln=>flat.push({si,sc,ln})));
let playing=false,muted=false,spd=1,cur=0,fIdx=-1,tok=0,busyUntil=0,holdEnd=0,last=performance.now(),doneSent=false;
const actsDone=new Set();
function post(p){try{window.parent.postMessage(Object.assign({source:"y11-lesson",kind:"comedy",topic:EP.slug},p),"*");}catch{}}

function speak(ln){
busyUntil=0;holdEnd=0;AI.stop();const my=++tok;if(muted||!ln||!ln.text)return;
const clean=ln.text.replace(/[—–]/g,", ").replace(/°C/g," degrees Celsius").replace(/\\bpH\\b/g,"P H");
busyUntil=performance.now()+Math.max(3800,clean.split(" ").length*540);holdEnd=ln.end;
const done=()=>{if(my===tok){busyUntil=0;if(playing&&cur<ln.end-.1)cur=ln.end-.1;}};
if(AI.status==="ready"){if(window.speechSynthesis)window.speechSynthesis.cancel();AI.speak(clean,ln.who,spd,done).then(ok=>{if(!ok&&my===tok)sysSpeak(clean,ln.who,my,done);});}
else sysSpeak(clean,ln.who,my,done);
}
function sysSpeak(clean,who,my,done){
if(!window.speechSynthesis){busyUntil=0;return;}
window.speechSynthesis.cancel();
setTimeout(()=>{if(my!==tok||!playing||muted)return;const u=new SpeechSynthesisUtterance(clean);const v=pickV(who);if(v){u.voice=v;u.lang=v.lang;}else u.lang="en-GB";u.pitch=1.0;u.rate=Math.min(1.4,0.99*spd);u.onend=done;u.onerror=done;window.speechSynthesis.speak(u);},35);
}

const chapsEl=document.getElementById("chaps"),cBtns=[];
EP.scenes.forEach((sc,i)=>{
const b=document.createElement("button");b.type="button";b.className="cpill"+(i===0?" on":"");
b.textContent=(i+1)+". "+(sc.card?sc.card.num.split("·")[0]:(sc.lower_third?sc.lower_third.title.split("·")[0]:sc.id));
b.onclick=()=>jump(sc.start,true);chapsEl.appendChild(b);cBtns.push(b);
});

function sync(force){
let f=-1;for(let i=0;i<flat.length;i++)if(cur>=flat[i].ln.start&&cur<flat[i].ln.end){f=i;break;}
if(f!==-1&&(f!==fIdx||force)){
fIdx=f;const it=flat[f];if(it.si>0&&it.si%4===0&&!actsDone.has(it.si)){actsDone.add(it.si);post({type:"chapter-done",chapter:"act-"+(it.si/4)});}
if(playing)speak(it.ln);cBtns.forEach((b,i)=>b.classList.toggle("on",i===it.si));
}
}
function fmt(s){s=Math.max(0,Math.floor(s));return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0");}
function setPlay(n){playing=n;document.getElementById("ov").classList.toggle("hide",n);document.getElementById("bPlay").textContent=n?"⏸ Pause":"▶ Play";if(n){if(cur>=EP.duration-.2)cur=0;last=performance.now();sync(true);}else{tok++;busyUntil=0;AI.stop();if(window.speechSynthesis)window.speechSynthesis.cancel();}}
function jump(t,kp){cur=Math.max(0,Math.min(EP.duration-.05,t));fIdx=-1;if(kp&&!playing)setPlay(true);else sync(playing);renderAt(cur,0);}

document.getElementById("ov").onclick=()=>setPlay(true);
document.getElementById("bPlay").onclick=()=>setPlay(!playing);
document.getElementById("bPrev").onclick=()=>jump(flat[Math.max(0,fIdx>0?fIdx-1:0)].ln.start,playing);
document.getElementById("bNext").onclick=()=>jump(flat[Math.min(flat.length-1,fIdx+1)].ln.start,playing);
document.getElementById("scrub").oninput=e=>jump(Number(e.target.value)/1000*EP.duration,playing);
const spds=[1,1.25,1.5];let si=0;
document.getElementById("bSpd").onclick=e=>{si=(si+1)%3;spd=spds[si];e.currentTarget.textContent=spd+"×";if(playing)sync(true);};
document.getElementById("bMute").onclick=e=>{muted=!muted;e.currentTarget.textContent=muted?"🔇 Muted":"🔊 Voice On";if(muted){tok++;busyUntil=0;AI.stop();if(window.speechSynthesis)window.speechSynthesis.cancel();}else if(playing)sync(true);};

// Script & Quiz Tabs
const pS=document.getElementById("pS"),pQ=document.getElementById("pQ");
EP.scenes.forEach((sc,i)=>{
const d=document.createElement("div");d.className="card";
d.innerHTML="<strong>Scene "+(i+1)+"</strong>"+(sc.card?"<div style='margin:6px 0;color:#f87171'>❌ "+sc.card.bad+"</div><div style='color:#4ade80'>✅ "+sc.card.good+"</div>":"");
sc.lines.forEach(l=>{const p=document.createElement("div");p.style.marginTop="6px";p.style.fontSize="13.5px";p.innerHTML="<strong>"+((CAST[l.who]||CAST.BOSS).name)+":</strong> "+l.text;d.appendChild(p);});
pS.appendChild(d);
});
let scScore=0,scAns=0;
EP.mcqs.forEach(m=>{
const d=document.createElement("div");d.className="card";d.innerHTML="<div style='font-weight:700'>"+m.q+"</div>";
const fb=document.createElement("div");fb.style.cssText="display:none;margin-top:8px;padding:10px;border-left:4px solid #14b8a6;font-size:13px";
let lk=false;const bs=[];
m.opts.forEach((o,oi)=>{
const b=document.createElement("button");b.type="button";b.className="opt";b.textContent=o;
b.onclick=()=>{if(lk)return;lk=true;scAns++;if(oi===m.ans){scScore++;b.classList.add("ok");}else{b.classList.add("bad");if(bs[m.ans])bs[m.ans].classList.add("ok");}document.getElementById("qsc").textContent="("+scScore+"/"+scAns+")";fb.style.display="block";fb.textContent="✓ "+m.why;postH();};
bs.push(b);d.appendChild(b);
});
d.appendChild(fb);pQ.appendChild(d);
});

function setTab(id){["W","S","Q"].forEach(k=>{document.getElementById("p"+k).classList.toggle("on",k===id);document.getElementById("tb"+k).classList.toggle("on",k===id);});if(id!=="W"&&playing)setPlay(false);postH();}
document.getElementById("tbW").onclick=()=>setTab("W");document.getElementById("tbS").onclick=()=>setTab("S");document.getElementById("tbQ").onclick=()=>setTab("Q");

function postH(){post({type:"height",value:Math.max(700,document.getElementById("wrap").scrollHeight+24)});}
window.addEventListener("message",ev=>{if(ev.data&&ev.data.source==="y11-app"&&ev.data.type==="theme")document.body.classList.toggle("light",ev.data.theme==="light");});

function loop(now){
const dt=Math.min(.1,(now-last)/1000);last=now;
if(playing){
let nx=cur+dt*spd;if(!muted&&busyUntil>now&&holdEnd>0&&nx>=holdEnd-.06)nx=holdEnd-.06;cur=nx;
if(cur>=EP.duration){cur=EP.duration;setPlay(false);if(!doneSent){doneSent=true;post({type:"complete"});}}else sync(false);
document.getElementById("scrub").value=String(Math.round(cur/EP.duration*1000));
document.getElementById("tlbl").textContent=fmt(cur)+" / "+fmt(EP.duration);
}
const spk=playing&&!muted&&busyUntil>now;
renderAt(cur,muted?undefined:(spk?(0.28+0.5*Math.abs(Math.sin(now*.018))):0));
requestAnimationFrame(loop);
}
renderAt(0,0);postH();requestAnimationFrame(loop);
})();
</script></body></html>`;
}

interface LessonPostMessage {
  source?: string;
  kind?: "masterclass" | "sitcom" | "comedy";
  topic?: string;
  type?: "hello" | "height" | "chapter-done" | "complete" | "theater";
  chapter?: string;
  value?: number;
  on?: boolean;
}

export function WatchTab({ topic }: { topic: Topic }) {
  const { progress, awardActivity, theme } = useStore();
  const [mode, setMode] = useState<WatchMode>("masterclass");
  const [frameHeight, setFrameHeight] = useState<number>(820);
  const [theater, setTheater] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [hasMp4, setHasMp4] = useState(false);
  const [useMp4Player, setUseMp4Player] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const vault = getMemoryVault(topic.id);

  const comedyInfo = COMEDY_SPECS[topic.id] || {
    show: topic.subject === "biology" ? "Body Corporate" : topic.subject === "chemistry" ? "Atomic HR" : "Forces HQ",
    title: topic.title,
    minutes: 11,
  };

  const comedySrcDoc = useMemo(
    () => buildMockumentaryHtml(topic, vault, theme),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [topic.id],
  );

  const mcDone = Boolean(progress.awarded[masterclassDoneKey(topic.id)]);
  const sitcomDone = Boolean(progress.awarded[sitcomDoneKey(topic.id)]);
  const comedyDone = Boolean(progress.awarded[comedyDoneKey(topic.id)]);

  const topicWatchStars = Object.entries(progress.awarded).reduce((sum, [k, v]) => {
    if (
      k.startsWith(`masterclass:${topic.id}:`) ||
      k.startsWith(`sitcom:${topic.id}:`) ||
      k.startsWith(`comedy:${topic.id}:`)
    ) {
      return sum + (v || 0);
    }
    return sum;
  }, 0);

  useEffect(() => {
    let cancelled = false;
    setHasMp4(false);
    fetch(`/comedy/${encodeURIComponent(topic.id)}.mp4`, { method: "HEAD" })
      .then((res) => {
        const ct = res.headers.get("content-type") || "";
        if (!cancelled && res.ok && ct.includes("video")) {
          setHasMp4(true);
          setUseMp4Player(true);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [topic.id]);

  useEffect(() => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    try {
      win.postMessage({ source: "y11-app", type: "theme", theme }, "*");
    } catch {}
  }, [theme, mode]);

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      const m = e.data as LessonPostMessage | null;
      if (!m || m.source !== "y11-lesson" || m.topic !== topic.id) return;
      const kind: WatchMode = m.kind === "sitcom" ? "sitcom" : m.kind === "comedy" ? "comedy" : "masterclass";
      const label = kind === "masterclass" ? "Studio Masterclass" : kind === "sitcom" ? "Sitcom Episode" : comedyInfo.show;

      if (m.type === "height" && typeof m.value === "number" && m.value >= 560 && m.value <= 9000) {
        setFrameHeight(Math.ceil(m.value) + 12);
      } else if (m.type === "theater") {
        setTheater(Boolean(m.on));
      } else if (m.type === "chapter-done" && typeof m.chapter === "string") {
        const key = watchChapterKey(kind, topic.id, m.chapter);
        if (!progress.awarded[key]) {
          awardActivity(key, CHAPTER_STARS, `Watched ${label} chapter (${m.chapter}): ${topic.title}`);
          setToast(`+${CHAPTER_STARS} ⭐ earned for finishing chapter!`);
        }
      } else if (m.type === "complete") {
        const key = kind === "masterclass" ? masterclassDoneKey(topic.id) : kind === "sitcom" ? sitcomDoneKey(topic.id) : comedyDoneKey(topic.id);
        if (!progress.awarded[key]) {
          awardActivity(key, COMPLETE_STARS, `Completed ${label}: ${topic.title}`);
          setToast(`🎉 +${COMPLETE_STARS} ⭐ bonus earned for completing ${label}!`);
        }
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [topic.id, topic.title, comedyInfo.show, progress.awarded, awardActivity]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  const embedSrc =
    mode === "masterclass"
      ? `/masterclass/${encodeURIComponent(topic.id)}.html?embed=1&theme=${theme}`
      : `/season1/index.html?ep=${encodeURIComponent(topic.id)}&embed=1&theme=${theme}`;

  const standaloneHref =
    mode === "masterclass"
      ? `/masterclass/${encodeURIComponent(topic.id)}.html`
      : `/season1/index.html?ep=${encodeURIComponent(topic.id)}`;

  const showMp4Video = mode === "comedy" && hasMp4 && useMp4Player;

  function openFullscreen() {
    if (mode === "comedy") {
      if (showMp4Video) {
        window.open(`/comedy/${encodeURIComponent(topic.id)}.mp4`, "_blank", "noopener,noreferrer");
      } else {
        const url = URL.createObjectURL(new Blob([comedySrcDoc], { type: "text/html" }));
        window.open(url, "_blank", "noopener,noreferrer");
      }
      return;
    }
    window.open(standaloneHref, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-3 gap-3">
        <button
          type="button"
          onClick={() => {
            setMode("masterclass");
            setFrameHeight(820);
          }}
          className={`card p-4 text-left transition ${
            mode === "masterclass" ? "ring-2 ring-indigo-500" : "opacity-90 hover:opacity-100"
          }`}
        >
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="chip">🎓 Clean 60fps Whiteboard</span>
            {mcDone ? (
              <span className="chip tone-emerald">✓ Completed (+5 ⭐)</span>
            ) : (
              <span className="text-xs text-ink-soft font-bold">+1 ⭐/ch · +5 ⭐ finish</span>
            )}
          </div>
          <div className="font-black text-base mt-1">Studio Masterclass Lesson</div>
          <p className="text-xs text-ink-soft mt-1 leading-relaxed">
            Clause-paced UK Tutor whiteboard explanation with live 60fps scientific animations,
            progressive syllabus notes, Think Deeper diagrams, and an auto-marked 12-Q exam check.
          </p>
        </button>

        <button
          type="button"
          onClick={() => {
            setMode("sitcom");
            setFrameHeight(860);
          }}
          className={`card p-4 text-left transition ${
            mode === "sitcom" ? "ring-2 ring-indigo-500" : "opacity-90 hover:opacity-100"
          }`}
        >
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="chip">🍿 Teen-Series Sitcom TV</span>
            {sitcomDone ? (
              <span className="chip tone-emerald">✓ Completed (+5 ⭐)</span>
            ) : (
              <span className="text-xs text-ink-soft font-bold">+1 ⭐/ch · +5 ⭐ finish</span>
            )}
          </div>
          <div className="font-black text-base mt-1">
            Cartoon Episode{vault?.epTitle ? `: “${vault.epTitle}”` : ""}
          </div>
          <p className="text-xs text-ink-soft mt-1 leading-relaxed">
            2D animated comedy episode with Vani, Maya, Dr. K &amp; Examiner Sterling, physical lab
            bench props, Pause-the-Tape checkpoints, and the Examiner Roast Deck.
          </p>
        </button>

        <button
          type="button"
          onClick={() => {
            setMode("comedy");
            setFrameHeight(780);
          }}
          className={`card p-4 text-left transition ${
            mode === "comedy" ? "ring-2 ring-indigo-500" : "opacity-90 hover:opacity-100"
          }`}
        >
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="chip">😂 Mealtime Comedy · {comedyInfo.minutes} min</span>
            {comedyDone ? (
              <span className="chip tone-emerald">✓ Watched (+5 ⭐)</span>
            ) : (
              <span className="text-xs text-ink-soft font-bold">+5 ⭐ finish</span>
            )}
          </div>
          <div className="font-black text-base mt-1">
            {comedyInfo.show}: {`“${comedyInfo.title}”`}
          </div>
          <p className="text-xs text-ink-soft mt-1 leading-relaxed">
            Workplace mockumentary with sarcastic coworkers, animated Edexcel diagrams, and
            rapid-fire exam-trap speed cards. Just press play.
          </p>
        </button>
      </div>

      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="chip">
            ⭐ <strong className="text-ink">{topicWatchStars}</strong> Watch stars earned on this
            topic
          </span>
          {mode === "comedy" && hasMp4 && (
            <button
              type="button"
              onClick={() => setUseMp4Player((v) => !v)}
              className="chip"
            >
              {useMp4Player ? "⚡ Switch to Interactive Studio + Quiz" : "🎬 Switch to Rendered MP4 Video"}
            </button>
          )}
          {toast && <span className="chip tone-emerald animate-pop">{toast}</span>}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheater((t) => !t)}
            className="chip"
          >
            {theater ? "🗗 Exit Wide View" : "🖥️ Wide View"}
          </button>
          <button type="button" onClick={openFullscreen} className="chip">
            ↗ Open Fullscreen Tab
          </button>
        </div>
      </div>

      <div
        className={`card overflow-hidden transition-all ${
          theater ? "fixed inset-3 z-50 bg-card shadow-2xl overflow-y-auto p-2" : ""
        }`}
      >
        {theater && (
          <div className="flex justify-end p-2">
            <button type="button" className="btn btn-ghost text-xs" onClick={() => setTheater(false)}>
              ✕ Close Wide View
            </button>
          </div>
        )}
        {showMp4Video ? (
          <video
            key={`mp4-${topic.id}`}
            src={`/comedy/${encodeURIComponent(topic.id)}.mp4`}
            controls
            playsInline
            preload="metadata"
            className="w-full block bg-black aspect-video"
            onEnded={() => {
              const key = comedyDoneKey(topic.id);
              if (!progress.awarded[key]) {
                awardActivity(key, COMPLETE_STARS, `Watched ${comedyInfo.show}: ${topic.title}`);
                setToast(`🎉 +${COMPLETE_STARS} ⭐ for watching the whole episode!`);
              }
            }}
          />
        ) : mode === "comedy" ? (
          <iframe
            ref={iframeRef}
            key={`comedy-${topic.id}`}
            srcDoc={comedySrcDoc}
            title={`${topic.title} — ${comedyInfo.show}`}
            className="w-full border-0 block"
            style={{ height: `${frameHeight}px`, minHeight: "680px" }}
            allow="autoplay; fullscreen"
          />
        ) : (
          <iframe
            ref={iframeRef}
            key={`${mode}-${topic.id}`}
            src={embedSrc}
            title={`${topic.title} — ${mode === "masterclass" ? "Studio Masterclass" : "Cartoon Sitcom"}`}
            className="w-full border-0 block"
            style={{ height: `${frameHeight}px`, minHeight: "680px" }}
            allow="autoplay; fullscreen"
          />
        )}
      </div>
    </div>
  );
}
