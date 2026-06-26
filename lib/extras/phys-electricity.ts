import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "phys-electricity",
  hook:
    "The lightning bolt that splits a summer sky carries enough energy to toast 100,000 slices of bread — yet the same phenomenon, tamed and shrunk, is silently powering every thought you are having right now. Electricity is not just a utility; it is the language the universe uses to move energy from place to place.",
  didYouKnow: [
    "A typical lightning bolt lasts only about 0.2 seconds but transfers around 1 billion joules of energy — enough to power a 100 W light bulb for about 115 days if it could be captured efficiently.",
    "The electron drift speed in a household copper wire is surprisingly slow — roughly 0.1 mm per second — yet a lamp lights instantly because the electric field propagates at close to the speed of light.",
    "Thomas Edison's first commercial power station on Pearl Street, New York (1882) supplied direct current (DC) to just 59 customers. Within a decade, Nikola Tesla and George Westinghouse had shown that alternating current (AC) was far more practical for long-distance transmission.",
    "Superconducting materials carry electrical current with zero resistance at very low temperatures, meaning no energy is lost as heat — engineers use superconducting coils in MRI scanners and particle accelerators such as the LHC.",
    "The human body generates its own bioelectricity: nerve impulses travel at up to 120 m/s using tiny voltage changes of about 70 mV across cell membranes, powered by sodium and potassium ion pumps.",
    "A single AA battery stores roughly 3 000 J of chemical energy and maintains a potential difference of 1.5 V. Connecting 50 000 of them in series would give 75 000 V — about the voltage needed to power a small electric locomotive.",
  ],
  experiments: [
    {
      title: "Build a Simple Lemon Battery",
      materials: [
        "2–4 fresh lemons",
        "Copper coins (or short lengths of copper wire)",
        "Zinc-coated (galvanised) nails or screws",
        "Short lengths of insulated wire with crocodile clips (or just bare wire twisted together)",
        "A sensitive LED (look for 1.5–2 V forward-voltage LEDs, bright colours work best)",
        "Optional: a cheap multimeter set to DC volts",
      ],
      steps: [
        "Roll each lemon firmly on the table to release the juice inside without piercing the skin.",
        "Push one copper coin (or a 3 cm strip of copper wire) into each lemon, and push one galvanised nail into each lemon on the opposite side — the two metals must not touch each other inside the lemon.",
        "Connect the lemons in series: join the copper electrode of one lemon to the zinc electrode of the next using crocodile-clip leads.",
        "Leave the copper electrode of the first lemon and the zinc electrode of the last lemon as your positive (+) and negative (−) terminals.",
        "Touch the LED leads across your terminal pair. If it does not light, try reversing the LED (LEDs are polarity-sensitive).",
        "If using a multimeter, measure the voltage across the whole battery. Each lemon typically produces about 0.9 V, so four lemons should give roughly 3–3.6 V.",
        "Try replacing one lemon with a potato or apple and compare the brightness of the LED.",
      ],
      science:
        "Each lemon acts as an electrochemical cell. The acidic lemon juice acts as the electrolyte — it conducts ions between the two different metals (electrodes). Zinc atoms oxidise more readily than copper, so zinc loses electrons at the negative terminal (anode), the electrons travel through the external circuit (lighting the LED), and copper ions in solution gain electrons at the positive terminal (cathode). The potential difference arises from the difference in reactivity between zinc and copper — exactly the same principle as a commercial battery. Connecting cells in series adds their voltages, allowing enough combined voltage to drive the LED.",
      safety:
        "No significant hazards — lemon juice is mildly acidic but safe to handle. Wash hands after handling nails. Do not connect more than about six lemons in series; the current is tiny and presents no shock risk.",
    },
    {
      title: "Investigate Resistance with a Pencil Rheostat",
      materials: [
        "A standard graphite pencil (the softer the grade, e.g. 2B or 4B, the better)",
        "Sandpaper (to expose the graphite core along one side)",
        "Two crocodile-clip leads",
        "A 1.5 V battery or battery holder",
        "A small torch bulb or bright LED",
        "Optional: a multimeter set to resistance (Ω)",
      ],
      steps: [
        "Carefully use sandpaper to scrape away one flat side of the pencil along its full length, exposing the graphite core as a smooth strip.",
        "Clip one crocodile lead to the graphite at the very left end of the pencil and connect this wire to the negative (−) terminal of the battery.",
        "Connect the battery's positive (+) terminal to one leg of the LED (or bulb).",
        "Attach the second crocodile clip to the other leg of the LED (or bulb).",
        "Touch the free end of this second clip to different points along the graphite strip — close to the first clip and far from it.",
        "Observe how the brightness of the LED changes as you move the clip along the pencil.",
        "If using a multimeter, measure the resistance between the two clips at different positions along the pencil.",
      ],
      science:
        "Graphite is a conductor because its electrons are delocalised and free to move, but it has higher resistance than metals because fewer electrons are free per unit length. The longer the graphite path between the two clips, the greater the resistance (R = ρL/A), so less current flows and the LED is dimmer. Moving the clip closer reduces the length of graphite in the circuit, lowering resistance, increasing current, and brightening the LED. This is exactly how a rheostat (variable resistor) works in a real circuit.",
      safety: "The battery current is tiny — no shock risk. Keep pencil shavings away from eyes.",
    },
  ],
  interactive: "circuit-lab",
};
