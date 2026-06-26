// Single source of truth for the topic list. Used to scaffold stub files and
// the per-subject aggregators. Agents overwrite the generated topic files with
// full audited content, but MUST keep the exported const name and id.
export const MANIFEST = {
  biology: [
    ["bio-cells", "Cell Structure & Organisation", "🔬", "Animal, plant & microbe cells, specialised cells and levels of organisation."],
    ["bio-transport-cell", "Movement In & Out of Cells", "💧", "Diffusion, osmosis and active transport across membranes."],
    ["bio-molecules", "Biological Molecules", "🧪", "Carbohydrates, proteins, fats, water and food tests."],
    ["bio-enzymes", "Enzymes", "🔑", "Biological catalysts, lock-and-key, and what changes their rate."],
    ["bio-plant-nutrition", "Plant Nutrition", "🌱", "Photosynthesis, the leaf, limiting factors and mineral needs."],
    ["bio-human-nutrition", "Human Nutrition", "🍎", "Balanced diet, teeth, digestion, absorption and assimilation."],
    ["bio-transport-plants", "Transport in Plants", "🌳", "Xylem, phloem, transpiration and translocation."],
    ["bio-transport-animals", "Transport in Animals", "❤️", "The heart, blood vessels, blood and circulation."],
    ["bio-disease-immunity", "Diseases & Immunity", "🦠", "Pathogens, transmission, defences, antibodies and vaccination."],
    ["bio-gas-respiration", "Gas Exchange & Respiration", "🫁", "Lungs, gas exchange surfaces, aerobic & anaerobic respiration."],
    ["bio-coordination", "Coordination & Response", "🧠", "Nervous system, reflexes, hormones, homeostasis and tropisms."],
    ["bio-reproduction", "Reproduction", "🌸", "Asexual & sexual reproduction in plants and humans, hormones."],
    ["bio-inheritance", "Inheritance & Variation", "🧬", "DNA, mitosis & meiosis, genetics, variation and selection."],
    ["bio-ecology", "Organisms & Environment", "🌍", "Ecosystems, energy flow, cycles, human impact and biotechnology."],
  ],
  chemistry: [
    ["chem-particles", "States of Matter & Particles", "❄️", "Solids, liquids, gases, changes of state and diffusion."],
    ["chem-atoms", "Atomic Structure", "⚛️", "Protons, neutrons, electrons, isotopes and electron shells."],
    ["chem-periodic", "The Periodic Table", "📋", "Groups, periods, Group I, VII, 0 and transition elements."],
    ["chem-bonding", "Chemical Bonding & Structure", "🔗", "Ionic, covalent and metallic bonding and giant structures."],
    ["chem-stoichiometry", "Stoichiometry & The Mole", "🧮", "Formulae, equations, relative mass, moles and calculations."],
    ["chem-electrochemistry", "Electrochemistry", "🔌", "Electrolysis, electrode products, electroplating and cells."],
    ["chem-energetics", "Chemical Energetics", "🔥", "Exothermic & endothermic changes and bond energy."],
    ["chem-rates", "Rate of Reaction & Equilibrium", "⏱️", "Collision theory, factors affecting rate and reversible reactions."],
    ["chem-acids-bases", "Acids, Bases & Salts", "🧂", "pH, neutralisation, oxides, preparing salts and tests."],
    ["chem-metals", "Metals", "🪙", "Reactivity series, reactions, extraction, alloys and corrosion."],
    ["chem-environment", "Chemistry of the Environment", "🌫️", "Water, air quality, pollutants and climate change."],
    ["chem-organic", "Organic Chemistry", "🛢️", "Hydrocarbons, fuels, alkanes, alkenes, alcohols and polymers."],
    ["chem-analysis", "Experimental Techniques & Analysis", "🔎", "Separation, purity, gas tests, ion tests and chromatography."],
  ],
  physics: [
    ["phys-motion", "Motion", "🏃", "Distance, speed, velocity, acceleration and motion graphs."],
    ["phys-forces", "Forces & Momentum", "🧱", "Newton's laws, mass & weight, moments, pressure and momentum."],
    ["phys-energy", "Energy, Work & Power", "⚡", "Energy stores, transfers, work, power, efficiency and resources."],
    ["phys-thermal", "Thermal Physics", "🌡️", "Kinetic theory, expansion, specific heat and heat transfer."],
    ["phys-waves", "Waves & Light", "🌊", "Wave properties, reflection, refraction and lenses."],
    ["phys-sound-em", "Sound & the EM Spectrum", "🔊", "Sound waves, the electromagnetic spectrum and its uses."],
    ["phys-electricity", "Electricity & Circuits", "🔋", "Charge, current, voltage, resistance and circuit rules."],
    ["phys-magnetism", "Magnetism & Electromagnetism", "🧲", "Magnets, fields, the motor effect, generators and transformers."],
    ["phys-nuclear", "Nuclear Physics", "☢️", "The nuclear atom, radioactivity, half-life and safety."],
    ["phys-space", "Space Physics", "🚀", "The Solar System, orbits, stars, galaxies and the Universe."],
  ],
};

export const SUBJECT_CODE = { biology: "0610", chemistry: "0620", physics: "0625" };
