import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "phys-energy",
  hook:
    "The energy stored in a single peanut is enough to heat a full cup of water from room temperature to boiling — yet your body extracts it so efficiently that only about 60% escapes as waste heat. Energy can never be created or destroyed, only transformed: every joule that has ever existed has been here since the Big Bang.",
  didYouKnow: [
    "A single AA alkaline battery stores roughly 9 000 J of chemical energy — enough to lift a 1 kg mass to the top of Mount Everest (about 8 800 m) if 100% efficient, though in practice energy is lost as heat in the circuit.",
    "The Sun releases approximately 3.8 × 10²⁶ W of power — almost all from nuclear fusion converting hydrogen to helium. Just 1.7 × 10¹⁷ W intercepts the Earth, yet that is still about 10 000 times all human energy use combined.",
    "Regenerative braking in electric vehicles converts kinetic energy back into electrical energy stored in the battery, achieving efficiencies of up to 70% — compared to conventional drum brakes, which waste nearly all kinetic energy as heat.",
    "A 60 kg student climbing a single flight of stairs (vertical rise ~3 m) gains about 1 760 J of gravitational potential energy — the same energy stored in roughly 0.4 g of sugar.",
    "The Carnot efficiency limit means no heat engine can ever convert all thermal energy into useful work. A typical coal power station converts only about 35–45% of the chemical energy in coal into electrical energy; the rest is discharged as waste heat.",
    "Lightning delivers about 1–5 billion joules of energy per strike — but because it lasts only about 0.2 seconds, the average power is enormous (~5 GW per bolt). Despite this, a single strike could only power a 100 W light bulb for about a month.",
  ],
  experiments: [
    {
      title: "Calculate the Energy Stored in a Crisp (Snack) by Burning It",
      materials: [
        "3–5 crisps (plain/unflavoured work best — e.g. plain salted crisps)",
        "A metal drinks can (empty, clean)",
        "A mounted needle or a bent paperclip pushed into a cork as a stand",
        "100 ml of water (measured with a measuring jug)",
        "A thermometer (cooking or laboratory type)",
        "A lighter or matches (adult supervision required)",
        "A top-pan balance or kitchen scales accurate to 0.1 g",
        "Pen and paper",
      ],
      steps: [
        "Fill the drinks can with exactly 100 ml (= 100 g) of cold water and measure its initial temperature.",
        "Weigh one crisp on the balance and record its mass in grams.",
        "Mount the crisp on the needle/paperclip stand and position the can of water directly above it, about 5 cm above the crisp.",
        "Ask an adult to light the crisp with the lighter. Allow it to burn fully under the can.",
        "Stir the water gently with the thermometer and record the highest temperature reached.",
        "Calculate the energy transferred to the water: Q = m c delta-T, where m = 0.1 kg, c = 4 200 J/(kg °C), and delta-T = temperature rise in °C.",
        "Divide Q by the mass of the crisp burned to get energy per gram (J/g). Compare with the nutritional label on the packet (convert kcal/g to J/g by multiplying by 4 200).",
      ],
      science:
        "Burning the crisp is a rapid oxidation (combustion) reaction that releases chemical energy stored in fats and carbohydrates. The energy is transferred to the water as heat, raising its temperature. Using Q = mcT allows you to calculate the energy transferred. The result will be lower than the label value because not all energy reaches the water — some is lost to the surroundings, to heating the can, and to incomplete combustion. This demonstrates the concept of energy transfer and the distinction between energy input and useful energy output.",
      safety:
        "Adult supervision required when using matches or a lighter. Keep flammable materials away from the flame. Use tongs to handle the heated can. Conduct the experiment in a well-ventilated area away from curtains or paper. Do not eat crisps after burning.",
    },
    {
      title: "Explore Gravitational Potential Energy and Kinetic Energy with a Pendulum",
      materials: [
        "A 50–100 g mass (a large nut, bolt, or bag of coins) tied to about 60 cm of string",
        "A fixed support to hang the pendulum from (a door frame, curtain rail, or broom across two chairs)",
        "A ruler to measure the height of the mass",
        "A protractor (optional, to set the angle)",
        "A phone to time 10 swings",
      ],
      steps: [
        "Hang the pendulum so the mass swings freely without touching anything.",
        "With the pendulum at rest, measure the height of the mass above the floor — record this as your reference height (h = 0).",
        "Pull the mass to one side so it is 10 cm higher than rest and release it gently.",
        "Using a phone stopwatch, time 10 complete swings (one swing = out and back). Divide by 10 to get the period T.",
        "Repeat from heights of 5 cm and 15 cm. Notice that the period barely changes — proving period depends on length, not amplitude (for small angles).",
        "Calculate the gravitational potential energy at the top of each swing: GPE = mgh (use mass in kg, g = 9.8 m/s², h in metres).",
        "Discuss where this energy goes at the bottom of the swing (kinetic energy) and why the pendulum eventually stops (energy transferred to thermal energy and sound via air resistance and string flexing).",
      ],
      science:
        "A pendulum is a model system for energy conservation. At the highest point of each swing, the mass is momentarily stationary — all energy is gravitational potential energy (GPE = mgh). At the lowest point, GPE has been converted to kinetic energy (KE = ½mv²). In a frictionless system, GPE and KE continuously interchange with the total remaining constant. In practice, each swing is slightly lower than the last as energy dissipates. The independence of period from amplitude (for small angles) was Galileo's famous discovery and is used in clocks.",
      safety:
        "Ensure the support is secure and will not topple. Keep bystanders clear of the swinging mass. Do not use a mass heavy enough to cause injury if the string breaks.",
    },
  ],
};
