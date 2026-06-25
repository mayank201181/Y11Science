import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "phys-space",
  hook:
    "If you could drive a car straight upward at motorway speed, you would reach the edge of space in under an hour — yet crossing just our own galaxy at the speed of light would take 100 000 years. Space is not simply big; it is a scale so vast it redefines what the word 'big' means.",
  didYouKnow: [
    "Light from the Sun takes about 8 minutes 20 seconds to reach Earth, but light from the next nearest star system (Alpha Centauri) takes 4.24 years. The most distant galaxies we can observe are so far away that their light left before Earth even existed — we are literally looking back in time.",
    "A neutron star — the collapsed core of a massive star after a supernova — can be only 20 km across yet contain more mass than our Sun. Its surface gravity is about 200 billion times stronger than Earth's; a marshmallow dropped onto one would hit with the energy of a thermonuclear bomb.",
    "The Hubble Space Telescope's famous 'Ultra Deep Field' image, capturing a patch of sky no bigger than a grain of sand held at arm's length, contains roughly 10 000 galaxies — each containing hundreds of billions of stars.",
    "The Voyager 1 spacecraft, launched in 1977, is humanity's most distant artificial object. In 2024 it is approximately 24 billion km from Earth — so far that a radio signal travelling at the speed of light takes over 22 hours to reach it.",
    "The Sun accounts for 99.86% of all the mass in the Solar System. Jupiter contains most of the remaining 0.14% — Earth's mass is less than 0.0003% of the Solar System's total.",
    "On the Moon, the footprints left by Apollo astronauts will survive for millions of years because there is no wind, rain, or tectonic activity to erase them — only the slow 'gardening' of the surface by micrometeorite impacts.",
  ],
  experiments: [
    {
      title: "Scale Model of the Solar System Using Toilet Roll",
      materials: [
        "One full roll of toilet paper (roughly 250–300 sheets of about 4.5 cm each, giving ~11–13 m)",
        "A felt-tip pen",
        "A long corridor, garden, or park",
        "A calculator",
        "Printed or written scale data (provided in steps below)",
      ],
      steps: [
        "Place your toilet roll at one end of the corridor or garden. Each sheet (about 4.5 cm) will represent 7.5 million km. The full roll (~12 m) represents roughly the distance to Neptune.",
        "Mark the Sun at sheet 0 (the very start of the roll).",
        "Mercury: sheet 0.08 — mark it on the very first sheet, almost on top of the Sun. (Actual distance: 58 million km; 58/7.5 ≈ 8 sheets — but adjust scale to fit: if using 1 sheet = 600 million km, distances work better for the full solar system.)",
        "Use scale: 1 sheet = 600 million km. Recalculate: Mercury ≈ 0.1 sheets, Venus ≈ 0.18, Earth ≈ 0.25, Mars ≈ 0.38, Jupiter ≈ 1.3, Saturn ≈ 2.4, Uranus ≈ 4.8, Neptune ≈ 7.5 sheets.",
        "Mark and label each planet on the roll at the correct sheet number.",
        "Unroll the paper and lay it out — stand at Earth and look back at the Sun, then forward at Jupiter, Saturn, Uranus, Neptune.",
        "Notice how the inner planets are clustered near the start and the giant planets are spread far apart.",
        "Now consider: Proxima Centauri (nearest star) would be at about 270 000 sheets on this scale — or about 1 200 km away. Walk a few steps to represent interstellar space.",
      ],
      science:
        "The Solar System has a dramatic structure: the rocky inner planets (Mercury, Venus, Earth, Mars) are packed within the first quarter of the model, separated by the asteroid belt, and then the four gas and ice giants spread over vast distances. This reflects how the solar nebula formed — rocky minerals condensed close to the young Sun where it was hot; volatile ices only condensed beyond the frost line (around 3 AU), allowing the outer planets to accrete massive icy and gaseous envelopes. The model also makes viscerally clear why interstellar travel is so daunting: even our nearest stellar neighbour is thousands of times farther than Neptune.",
      safety: "No hazards. Be aware of your surroundings when unrolling in a public space.",
    },
    {
      title: "Observe the Moon's Surface Features with Raking Light",
      materials: [
        "A torch with a narrow beam (or the torch function on a smartphone)",
        "A lemon, orange, or grapefruit",
        "A darkened room",
        "Optional: binoculars or a small telescope for the real Moon",
      ],
      steps: [
        "In a darkened room, hold the torch at a very low angle (nearly parallel to the surface) and shine it across the surface of the fruit.",
        "Observe how even tiny bumps, pores, and imperfections cast long shadows and become visible.",
        "Now shine the torch directly downward (perpendicular to the surface) — notice the surface looks much flatter and the same features are hard to see.",
        "Understand that astronomers use this same principle: craters and mountains on the Moon are most visible just after new moon or just before full moon when sunlight strikes at a low angle.",
        "On a clear night, look at the Moon with the naked eye or binoculars when it is a crescent or half-moon (first quarter). Notice the terminator (the boundary between light and dark) — this is where craters are most dramatic.",
        "Sketch the surface features you observe near the terminator.",
      ],
      science:
        "The Moon's surface is heavily cratered from billions of years of meteorite impacts. Because the Moon has no atmosphere, no weather, and very slow tectonic activity, craters are preserved for billions of years. The technique of using low-angle ('raking') light to reveal surface texture is used in archaeology, forensic science, and planetary imaging for exactly the same reason: small height differences cast disproportionately long shadows when light strikes obliquely, making tiny features visible. The terminator on the Moon is the most scientifically informative region to observe because the extreme shadow contrast reveals topography invisible in direct sunlight.",
      safety: "Do not shine the torch directly into eyes. Never look at the Sun through binoculars or a telescope.",
    },
  ],
};
