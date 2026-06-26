import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "chem-electrochemistry",

  hook:
    "The phone in your pocket is powered by lithium ions shuttling between electrodes — the same fundamental process Michael Faraday described in 1833 using a jar of acid and two metal plates. Electrochemistry underpins every rechargeable battery, every piece of chrome-plated jewellery, and the entire aluminium industry: without electrolysis, aluminium would still cost more than gold.",

  didYouKnow: [
    "Aluminium is the most abundant metal in Earth's crust, yet before the Hall-Héroult electrolysis process was invented independently in 1886 by Charles Hall and Paul Héroult (both aged 22), aluminium was so expensive to extract that Napoleon III reserved aluminium cutlery for his most honoured guests — everyone else used gold or silver.",
    "The electroplating industry deposits metals at rates governed by Faraday's laws: the mass deposited equals (current × time × molar mass) / (Faraday constant × charge per ion). A factory can calculate to the milligram exactly how much gold will coat each piece of jewellery before switching on the power.",
    "During the electrolysis of water, twice as much hydrogen gas is produced as oxygen gas by volume — this is a direct, visible consequence of the balanced equation 2H2O → 2H2 + O2, where the mole ratio 2:1 becomes a volume ratio 2:1 at the same temperature and pressure.",
    "Copper is purified industrially by electrolysis: an impure copper anode dissolves into solution while pure copper deposits on the cathode. Precious metal impurities (gold, silver) are too unreactive to dissolve and fall as valuable 'anode sludge' collected beneath the anode.",
    "Electrolysis of brine (sodium chloride solution) produces three industrially vital products simultaneously: chlorine gas at the anode, hydrogen gas at the cathode, and sodium hydroxide solution remaining in the electrolyte — the basis of the chlor-alkali industry that produces PVC, bleach, and soap.",
    "The Faraday constant (96,485 C mol−1) represents the charge carried by one mole of electrons. Michael Faraday determined it experimentally in the 1830s using weighing balances and a clock — long before the electron was even discovered — and his value was remarkably close to the modern measurement."
  ],

  experiments: [
    {
      title: "Electroplating a coin with copper",
      materials: [
        "Two copper coins or short lengths of copper wire (anodes)",
        "One silver-coloured coin or metal spoon (object to plate)",
        "Copper sulfate solution (dissolve 20 g of blue copper sulfate crystals from a school kit in 200 cm3 of water)",
        "9 V battery and two wires with crocodile clips",
        "A glass or plastic container",
        "Kitchen scales (optional, to measure mass change)"
      ],
      steps: [
        "Pour the copper sulfate solution into the container.",
        "Connect one wire from the positive terminal of the battery to a copper coin — this is the anode (positive electrode).",
        "Connect the other wire from the negative terminal to the silver-coloured coin or spoon — this is the cathode (negative electrode, the object to be plated).",
        "Submerge both electrodes in the copper sulfate solution so they do not touch each other.",
        "Leave for 10–15 minutes, then remove the cathode and rinse it gently.",
        "Observe the reddish-brown copper coating on the cathode surface.",
        "Optional: weigh the cathode before and after to measure the mass of copper deposited."
      ],
      science:
        "At the cathode (negative electrode), Cu2+ ions from solution gain two electrons and are reduced to copper metal: Cu2+ + 2e− → Cu. At the anode (positive electrode), copper atoms lose two electrons and dissolve into solution as Cu2+ ions: Cu → Cu2+ + 2e−. The copper anode gradually dissolves to replenish the solution, while pure copper builds up on the cathode. This is exactly how industrial electroplating works — chrome on car parts, gold on jewellery, silver on cutlery.",
      safety:
        "Copper sulfate is irritating to skin and harmful if swallowed — wear gloves and wash hands after handling. Use only a 9 V battery; higher voltages increase risk of electric shock. Keep the solution away from food and dispose of it responsibly (neutralise, dilute, and pour down the drain — do not pour concentrated copper sulfate into the environment)."
    },
    {
      title: "Electrolysis of water — collecting hydrogen and oxygen",
      materials: [
        "Small glass or bowl",
        "Distilled water or tap water",
        "A pinch of baking soda (sodium bicarbonate) to improve conductivity",
        "9 V battery",
        "Two pencils sharpened at both ends (the graphite core acts as electrodes)",
        "Two small test tubes or clear plastic syringes",
        "Two wires with crocodile clips"
      ],
      steps: [
        "Dissolve a small pinch of baking soda in the water (this increases ion concentration and conductivity without harmful products).",
        "Sharpen both ends of two pencils to expose the graphite. Connect a crocodile clip to the exposed graphite at one end of each pencil.",
        "Connect the other ends of the wires to the positive and negative terminals of the 9 V battery.",
        "Submerge both pencil tips in the solution and observe bubbles forming on each graphite electrode.",
        "To collect the gases, fill two small test tubes with the solution and invert them over each electrode, trapping gas as it rises.",
        "After a few minutes, observe that the tube over the negative terminal (cathode) has collected approximately twice as much gas as the tube over the positive terminal (anode).",
        "The larger volume of gas at the cathode is hydrogen; the smaller volume at the anode is oxygen."
      ],
      science:
        "Water is split into its elements by passing electrical energy through it: 2H2O → 2H2 + O2. At the cathode (negative): 2H2O + 2e− → H2 + 2OH−. At the anode (positive): 4OH− → O2 + 2H2O + 4e−. The 2:1 volume ratio of hydrogen to oxygen is a direct experimental demonstration of the mole ratio in the balanced equation — at the same temperature and pressure, equal moles of gas occupy equal volumes. This ratio was used historically as evidence for the formula of water being H2O rather than HO.",
      safety:
        "Hydrogen gas is flammable — keep away from open flames during the experiment and allow gases to disperse before bringing any flame nearby. Use only a low-voltage battery. Baking soda solution is safe; do not substitute with acids or bleach."
    }
  ]
};
