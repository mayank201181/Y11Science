import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "phys-waves",
  hook:
    "Every time you see your own face in a mirror, use a microwave, or hear music across a room, you are witnessing waves — disturbances that move energy from place to place without moving matter. Waves literally built the universe as we know it, from the cosmic microwave background to the light reaching your eyes right now.",
  didYouKnow: [
    "Light travels at approximately 300,000 km/s in a vacuum — so fast that it circles the Earth about 7.5 times in one second, yet it still takes about 8 minutes to reach us from the Sun.",
    "All waves obey v = fλ (wave speed = frequency × wavelength). Doubling the frequency of a wave halves its wavelength, but its speed in the same medium stays the same.",
    "Seismic P-waves (primary waves) are longitudinal and travel through both solid rock and liquid, while S-waves (secondary waves) are transverse and cannot travel through liquids — geologists used this difference to discover that Earth has a liquid outer core.",
    "The phenomenon of resonance means a bridge, a wine glass, or even a skyscraper can be shaken apart by vibrations at its natural frequency — the Millennium Bridge in London had to be closed days after opening in 2000 because pedestrians caused resonant swaying.",
    "When two waves meet, they superpose (add together). Noise-cancelling headphones generate a sound wave that is exactly 180° out of phase with unwanted background noise, causing destructive interference that cancels it out.",
    "Tsunamis travel across the deep ocean as waves with wavelengths of hundreds of kilometres and amplitudes of less than a metre — ships at sea do not even notice them passing. They only become catastrophically tall as the seafloor rises near the shore.",
  ],
  experiments: [
    {
      title: "Measuring Wave Speed on a Slinky",
      materials: [
        "A Slinky or long coiled spring",
        "A smooth floor (corridor or hallway works well)",
        "A measuring tape or metre ruler",
        "A phone with a slow-motion video camera",
        "A friend to hold the other end",
      ],
      steps: [
        "Stretch the Slinky along the floor to about 3–4 metres between you and a friend — measure this distance.",
        "For transverse waves: flick one end sharply sideways and watch a single pulse travel to your friend and back.",
        "Record the journey in slow-motion video, then count the seconds for the pulse to travel the full length once.",
        "Calculate wave speed: divide the length of the Slinky by the time taken (v = distance / time).",
        "For longitudinal waves: push and pull the end repeatedly along its length to create compressions and rarefactions, and observe the difference in how the pulse looks.",
        "Try changing the tension by stretching further — observe whether the pulse travels faster.",
      ],
      science:
        "Waves transfer energy without transferring matter — the coils of the Slinky return to their original positions after the pulse passes. Transverse waves show oscillation perpendicular to the direction of travel (side-to-side), while longitudinal waves show oscillation parallel to travel (compressions and rarefactions along the spring). Increasing tension in the spring raises the restoring force on displaced coils, so the wave speed increases — the same principle applies to strings on a guitar.",
      safety:
        "Keep the Slinky away from furniture edges so it does not fall and tangle. Do not overstretch it — once kinked, a metal Slinky cannot recover. Avoid snapping it back suddenly to prevent hitting someone.",
    },
    {
      title: "Ripple Tank Simulation with a Bowl of Water",
      materials: [
        "A large, flat-bottomed baking tray or roasting tin",
        "Water",
        "A pencil or finger",
        "A torch or phone torch",
        "A white sheet of paper placed under the tray",
      ],
      steps: [
        "Fill the tray with water to a depth of about 1 cm.",
        "Place it on top of the white paper and shine the torch down through the water.",
        "Watch the shadow pattern on the paper — bright lines show wave crests, dark lines show troughs.",
        "Dip a finger or pencil tip into the centre once, then observe circular wave ripples radiating outward.",
        "Dip two pencil tips simultaneously side by side (about 3 cm apart) and watch for an interference pattern where the waves from each source cross.",
        "Sketch the pattern of alternating regions of large disturbance (constructive interference) and calm (destructive interference).",
      ],
      science:
        "Circular waves radiate from a point source and demonstrate that waves travel outward in all directions at the same speed (for the same medium). When two coherent sources create overlapping waves, constructive interference occurs where crests meet crests (bright lines of big waves) and destructive interference occurs where crests meet troughs (calm regions). This is the same principle used in double-slit light experiments and explains the diffraction patterns produced by light through small gaps.",
      safety:
        "Mop up spills immediately to avoid slipping. Keep electrical devices (phone torch) well away from the water — use a battery-powered torch if possible, or hold the phone well above the tray.",
    },
  ],
};
