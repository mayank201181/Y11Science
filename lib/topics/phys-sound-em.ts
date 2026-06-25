import type { Topic } from "../types";

export const physSoundEm: Topic = {
  id: "phys-sound-em",
  title: "Sound & the EM Spectrum",
  subject: "physics",
  icon: "🔊",
  blurb: "Longitudinal sound waves, echoes, ultrasound, and the full electromagnetic spectrum — uses and dangers.",
  intro: "Sound is a mechanical, longitudinal wave that needs a material medium to travel — it simply cannot pass through a vacuum. The electromagnetic spectrum is an entirely different family of transverse waves that all travel at the speed of light and require no medium at all. Together these two wave families underpin technologies from sonar depth-finders to medical X-rays, making them some of the most practically important ideas in IGCSE Physics.",

  guide: [
    {
      heading: "Sound as a Longitudinal Wave",
      body: `Sound is produced whenever an object **vibrates**. Those vibrations push and pull the surrounding medium (air, water, steel…) creating alternating regions of higher pressure called **compressions** and lower pressure called **rarefactions** that travel outward from the source.

- A **compression** is where particles are squeezed together — local pressure is above normal.
- A **rarefaction** is where particles are spread apart — local pressure is below normal.
- The wave travels in the **same direction** as the particle vibrations, which is the defining property of a **longitudinal** wave (contrast with transverse waves, where vibrations are perpendicular to the direction of travel).

Sound cannot travel through a vacuum because there are no particles to vibrate and pass the disturbance on. The classic demonstration is a ringing bell inside a bell-jar: as air is pumped out the sound fades to nothing even though you can still see the clapper moving.`,
      diagrams: [
        {
          caption: "Longitudinal sound wave: compressions (C) and rarefactions (R) in air",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Diagram of a longitudinal sound wave showing compressions and rarefactions">
  <!-- background -->
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- title -->
  <text x="160" y="22" text-anchor="middle" font-size="11" fill="#b7bce0" font-family="sans-serif">Longitudinal Sound Wave</text>
  <!-- source (speaker cone) -->
  <polygon points="18,70 18,130 34,120 34,80" fill="#38bdf8" stroke="#38bdf8" stroke-width="1"/>
  <line x1="10" y1="100" x2="18" y2="100" stroke="#38bdf8" stroke-width="2"/>
  <text x="16" y="148" text-anchor="middle" font-size="9" fill="#38bdf8" font-family="sans-serif">Source</text>
  <!-- direction arrow -->
  <line x1="40" y1="100" x2="295" y2="100" stroke="#4b5563" stroke-width="1" stroke-dasharray="3,3"/>
  <polygon points="295,96 303,100 295,104" fill="#4b5563"/>
  <text x="290" y="118" text-anchor="middle" font-size="9" fill="#4b5563" font-family="sans-serif">direction</text>
  <!-- compressions: dense vertical lines -->
  <!-- C1 -->
  <line x1="55" y1="72" x2="55" y2="128" stroke="#34d399" stroke-width="2.5"/>
  <line x1="60" y1="72" x2="60" y2="128" stroke="#34d399" stroke-width="2.5"/>
  <line x1="65" y1="72" x2="65" y2="128" stroke="#34d399" stroke-width="2.5"/>
  <text x="60" y="65" text-anchor="middle" font-size="10" fill="#34d399" font-family="sans-serif">C</text>
  <!-- R1: sparse lines -->
  <line x1="88" y1="78" x2="88" y2="122" stroke="#fb7185" stroke-width="1.2"/>
  <line x1="100" y1="78" x2="100" y2="122" stroke="#fb7185" stroke-width="1.2"/>
  <text x="94" y="65" text-anchor="middle" font-size="10" fill="#fb7185" font-family="sans-serif">R</text>
  <!-- C2 -->
  <line x1="118" y1="72" x2="118" y2="128" stroke="#34d399" stroke-width="2.5"/>
  <line x1="123" y1="72" x2="123" y2="128" stroke="#34d399" stroke-width="2.5"/>
  <line x1="128" y1="72" x2="128" y2="128" stroke="#34d399" stroke-width="2.5"/>
  <text x="123" y="65" text-anchor="middle" font-size="10" fill="#34d399" font-family="sans-serif">C</text>
  <!-- R2 -->
  <line x1="150" y1="78" x2="150" y2="122" stroke="#fb7185" stroke-width="1.2"/>
  <line x1="162" y1="78" x2="162" y2="122" stroke="#fb7185" stroke-width="1.2"/>
  <text x="156" y="65" text-anchor="middle" font-size="10" fill="#fb7185" font-family="sans-serif">R</text>
  <!-- C3 -->
  <line x1="180" y1="72" x2="180" y2="128" stroke="#34d399" stroke-width="2.5"/>
  <line x1="185" y1="72" x2="185" y2="128" stroke="#34d399" stroke-width="2.5"/>
  <line x1="190" y1="72" x2="190" y2="128" stroke="#34d399" stroke-width="2.5"/>
  <text x="185" y="65" text-anchor="middle" font-size="10" fill="#34d399" font-family="sans-serif">C</text>
  <!-- R3 -->
  <line x1="212" y1="78" x2="212" y2="122" stroke="#fb7185" stroke-width="1.2"/>
  <line x1="224" y1="78" x2="224" y2="122" stroke="#fb7185" stroke-width="1.2"/>
  <text x="218" y="65" text-anchor="middle" font-size="10" fill="#fb7185" font-family="sans-serif">R</text>
  <!-- C4 -->
  <line x1="242" y1="72" x2="242" y2="128" stroke="#34d399" stroke-width="2.5"/>
  <line x1="247" y1="72" x2="247" y2="128" stroke="#34d399" stroke-width="2.5"/>
  <line x1="252" y1="72" x2="252" y2="128" stroke="#34d399" stroke-width="2.5"/>
  <text x="247" y="65" text-anchor="middle" font-size="10" fill="#34d399" font-family="sans-serif">C</text>
  <!-- wavelength brace -->
  <line x1="60" y1="158" x2="123" y2="158" stroke="#fbbf24" stroke-width="1.5"/>
  <line x1="60" y1="153" x2="60" y2="163" stroke="#fbbf24" stroke-width="1.5"/>
  <line x1="123" y1="153" x2="123" y2="163" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="91" y="175" text-anchor="middle" font-size="10" fill="#fbbf24" font-family="sans-serif">one wavelength</text>
  <!-- legend -->
  <rect x="158" y="150" width="10" height="10" fill="#34d399"/>
  <text x="172" y="160" font-size="9" fill="#b7bce0" font-family="sans-serif">Compression</text>
  <rect x="158" y="165" width="10" height="10" fill="#fb7185"/>
  <text x="172" y="175" font-size="9" fill="#b7bce0" font-family="sans-serif">Rarefaction</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Sound is a longitudinal wave — particle vibrations are parallel to the direction of wave travel.",
        "Compressions are regions of high pressure; rarefactions are regions of low pressure.",
        "Sound requires a material medium; it cannot travel through a vacuum.",
        "Sound is produced by vibrating objects transferring energy to the surrounding medium.",
        "The wavelength of a sound wave is the distance from one compression to the next (or one rarefaction to the next).",
      ],
      discovery: {
        problem: "If you bang two rocks together under water, a swimmer nearby hears the sound. If you do the same experiment in outer space (ignoring the impossibility of breathing!), nothing would be heard. Why does the medium make such a difference?",
        idea: "Sound is passed on by particles colliding and pushing their neighbours. In water, particles are close together and transmit vibrations efficiently. In a vacuum there are no particles at all, so there is nothing to carry the disturbance — the wave cannot propagate.",
      },
      whyItWorks: "In a longitudinal wave, energy is transferred by successive compressions pushing adjacent layers of particles. Without particles there can be no push, and without a push the wave dies immediately at its source. This is fundamentally different from light, which is a self-sustaining oscillation of electric and magnetic fields requiring no medium.",
      strategies: ["Visualise particle motion", "Contrast with transverse waves"],
    },

    {
      heading: "Speed of Sound and Measuring It",
      body: `The speed of sound in air at room temperature is approximately **330–340 m/s** (use 340 m/s unless told otherwise). Speed is much higher in liquids and solids because the particles are closer together and the restoring forces are stronger.

**Wave equation** (applies to all waves):

v = f × λ

where v = wave speed (m/s), f = frequency (Hz), λ = wavelength (m).

**Measuring speed of sound by echo timing**

Stand a measured distance d from a large flat wall. Clap your hands (or fire a starting pistol). Start a stopwatch when you make the sound and stop it when you hear the echo. The sound has travelled there AND back, so the total distance is 2d.

Speed = (2 × d) / t

*To reduce timing error:* clap rhythmically so that each clap coincides with the previous echo — then time N claps over a longer total time and divide.

**Worked example:**
A student stands 85 m from a cliff and claps. The echo returns after 0.50 s. Calculate the speed of sound.

Distance travelled = 2 × 85 = 170 m
Speed = 170 / 0.50 = **340 m/s**`,
      keyPoints: [
        "Speed of sound in air ≈ 330–340 m/s; faster in liquids and solids.",
        "The wave equation v = f × λ relates speed, frequency, and wavelength.",
        "Echo timing: v = 2d / t, where d is the distance to the reflecting surface.",
        "Timing multiple echoes reduces the percentage error in the time measurement.",
        "Sound travels about a million times slower than light — hence we see lightning before we hear thunder.",
      ],
      discovery: {
        problem: "You see a lightning flash, and 3 seconds later you hear the thunder. The speed of light is so fast we can treat it as instantaneous. Estimate how far away the storm is.",
        idea: "Distance = speed × time = 340 × 3 ≈ 1020 m ≈ 1 km. The '3-second rule' (1 km per 3 s) is a useful approximation used by meteorologists and the public.",
      },
      whyItWorks: "The echo equation comes directly from the definition of speed = distance/time. The factor of 2 appears because the sound must travel to the reflector and return, covering twice the one-way distance. Clapping in rhythm to the echo is a clever systematic method: you are effectively measuring N × 2d in time N × t, giving the same ratio but with a longer total time and therefore smaller percentage uncertainty.",
      thinkDeeper: "Why does sound travel faster in steel (≈5100 m/s) than in air (≈340 m/s)? In a solid, the inter-particle bonds are much stiffer (higher elastic modulus) and the particles are much closer together, so energy is passed along the chain far more rapidly. The density also matters — denser materials tend to slow waves, but the stiffness effect dominates in solids.",
      strategies: ["Use v = f × λ", "Double the distance for echoes", "Reduce timing uncertainty by repeating"],
    },

    {
      heading: "Frequency, Pitch, Amplitude, Loudness, and the Audible Range",
      body: `**Frequency and Pitch**

The **frequency** of a sound wave is the number of complete vibrations (compressions + rarefactions) passing a point per second. Its unit is the **hertz (Hz)** or kilohertz (kHz).

Higher frequency → higher pitch. A concert A above middle C is 440 Hz. The squeak of a bat is many thousands of Hz. A rumbling bass note might be 80 Hz.

**Amplitude and Loudness**

The **amplitude** of a sound wave is the maximum displacement of particles from their rest position (or equivalently, the maximum pressure variation from normal). Amplitude relates to the energy carried by the wave.

Greater amplitude → louder sound (more energy per second reaching your ears).

**Human audible range: 20 Hz to 20 000 Hz (20 kHz)**

Sounds below 20 Hz are called **infrasound** (e.g. produced by earthquakes, elephants communicating).
Sounds above 20 kHz are called **ultrasound** (e.g. produced by bats, dolphins, ultrasound scanners).

The audible range narrows with age — adults typically lose the upper end first.`,
      keyPoints: [
        "Frequency (Hz) determines pitch — higher frequency gives higher pitch.",
        "Amplitude determines loudness — greater amplitude gives a louder sound.",
        "Human hearing range: 20 Hz to 20 000 Hz (20 kHz).",
        "Infrasound is below 20 Hz; ultrasound is above 20 kHz.",
        "Frequency and amplitude are independent — a sound can be high-pitched and quiet, or low-pitched and loud.",
      ],
      strategies: ["Frequency → pitch; Amplitude → loudness (never swap these)", "State the range: 20 Hz to 20 kHz"],
    },

    {
      heading: "Ultrasound and Its Uses",
      body: `**Ultrasound** means sound with a frequency above 20 kHz — beyond the human hearing limit. It is produced by electrically vibrating piezoelectric crystals.

**Uses of ultrasound:**

- **Pre-natal scanning:** A probe sends pulses of ultrasound into the body. At each boundary between tissues of different density (e.g. fluid/foetal tissue), some of the wave is **reflected** and some is transmitted. The reflected pulses (echoes) are detected and their time delay used to calculate depth; a 2-D or 3-D image is built up. It is preferred over X-rays because ultrasound is non-ionising and therefore safe for the developing foetus.

- **Sonar / depth finding (echo-sounding):** A ship sends a pulse of ultrasound downward. The pulse reflects off the seabed and returns to a receiver. The depth is calculated from the time taken for the pulse to travel down and back:
  **depth = (v × t) / 2**, where v is the speed of sound in seawater and t is the round-trip time.

- **Industrial cleaning:** Objects (e.g. jewellery, surgical instruments) are placed in a liquid bath through which high-frequency ultrasound is passed. The rapid pressure oscillations cause microscopic bubbles to form and collapse (cavitation), which dislodges dirt from complex surfaces.

**Ultrasound echo calculation example:**

A sonar pulse returns after 0.40 s. The speed of sound in seawater is 1500 m/s. Find the depth of the seabed.

depth = (1500 × 0.40) / 2 = **300 m**`,
      diagrams: [
        {
          caption: "Sonar depth-finding: pulse travels to seabed and returns",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Diagram of sonar depth-finding showing ship, ultrasound pulse path, and seabed">
  <!-- background -->
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- sea surface -->
  <rect x="0" y="50" width="320" height="110" fill="#0c2340" opacity="0.8"/>
  <!-- sky -->
  <rect x="0" y="0" width="320" height="50" fill="#0f172a"/>
  <!-- ship hull -->
  <polygon points="120,50 200,50 210,65 110,65" fill="#a78bfa" stroke="#7c3aed" stroke-width="1"/>
  <!-- ship cabin -->
  <rect x="145" y="30" width="30" height="20" fill="#a78bfa" stroke="#7c3aed" stroke-width="1"/>
  <!-- mast -->
  <line x1="160" y1="10" x2="160" y2="30" stroke="#a78bfa" stroke-width="1.5"/>
  <!-- transducer -->
  <rect x="155" y="64" width="10" height="6" fill="#fbbf24" stroke="#f59e0b" stroke-width="1"/>
  <text x="180" y="73" font-size="9" fill="#fbbf24" font-family="sans-serif">transducer</text>
  <!-- pulse path down -->
  <line x1="160" y1="70" x2="160" y2="155" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6,3"/>
  <!-- arrow down -->
  <polygon points="156,150 160,160 164,150" fill="#38bdf8"/>
  <!-- seabed -->
  <rect x="0" y="160" width="320" height="40" fill="#78350f"/>
  <text x="160" y="185" text-anchor="middle" font-size="10" fill="#fbbf24" font-family="sans-serif">Seabed</text>
  <!-- pulse path up (return echo) -->
  <line x1="168" y1="155" x2="168" y2="74" stroke="#34d399" stroke-width="2" stroke-dasharray="4,4"/>
  <polygon points="164,78" fill="#34d399"/>
  <polygon points="164,80 168,70 172,80" fill="#34d399"/>
  <!-- depth label -->
  <line x1="90" y1="70" x2="90" y2="160" stroke="#fbbf24" stroke-width="1"/>
  <line x1="85" y1="70" x2="95" y2="70" stroke="#fbbf24" stroke-width="1"/>
  <line x1="85" y1="160" x2="95" y2="160" stroke="#fbbf24" stroke-width="1"/>
  <text x="65" y="118" text-anchor="middle" font-size="10" fill="#fbbf24" font-family="sans-serif">depth d</text>
  <!-- legend -->
  <line x1="200" y1="110" x2="220" y2="110" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="225" y="113" font-size="9" fill="#38bdf8" font-family="sans-serif">pulse out</text>
  <line x1="200" y1="125" x2="220" y2="125" stroke="#34d399" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="225" y="128" font-size="9" fill="#34d399" font-family="sans-serif">echo back</text>
  <!-- formula -->
  <text x="160" y="20" text-anchor="middle" font-size="10" fill="#b7bce0" font-family="sans-serif">d = (v x t) / 2</text>
</svg>`,
        },
      ],
      keyPoints: [
        "Ultrasound has frequency above 20 kHz — above the human hearing range.",
        "Pre-natal scanning uses reflected ultrasound pulses; it is safe because ultrasound is non-ionising.",
        "Sonar uses depth = (v × t) / 2 where t is the round-trip time of the echo.",
        "Industrial cleaning uses cavitation caused by rapid pressure oscillations.",
        "At each tissue/material boundary, ultrasound is partly reflected and partly transmitted.",
      ],
      strategies: ["depth = (v × t) / 2 — always divide by 2 for echo problems", "Non-ionising = safer than X-rays"],
      thinkDeeper: "Why is ultrasound used rather than audible sound for pre-natal scanning? Higher frequency means shorter wavelength, and shorter wavelength gives better resolution (finer detail) in the image — just as blue light gives sharper microscope images than red light. The wavelength must be smaller than the feature you want to resolve.",
    },

    {
      heading: "The Electromagnetic Spectrum",
      body: `The **electromagnetic (EM) spectrum** is a family of transverse waves that:

- All travel at the **speed of light c ≈ 3 × 10^8 m/s** in a vacuum.
- Require **no medium** — they can travel through a vacuum.
- Consist of oscillating **electric and magnetic fields** perpendicular to each other and to the direction of travel.
- Obey **v = f × λ** just like any wave.

The spectrum is continuous but divided into named regions by frequency (and wavelength). Listed from **lowest to highest frequency** (longest to shortest wavelength):

| Region | Typical uses | Hazards |
|---|---|---|
| **Radio waves** | Radio/TV broadcasting, Wi-Fi, MRI | None at normal levels |
| **Microwaves** | Microwave ovens, satellite comms, mobile phones | Internal heating of tissue (at high intensity) |
| **Infrared (IR)** | Remote controls, thermal imaging, optical fibre comms, grills/heaters | Skin burns |
| **Visible light** | Vision, photography, optical fibres | Bright light can damage the retina |
| **Ultraviolet (UV)** | Sterilisation, fluorescence, detecting forged banknotes, Sun lamps | Sunburn, skin cancer, eye damage (cataracts) |
| **X-rays** | Medical imaging (bones), airport security scanning | Ionising — damages DNA, can cause cancer |
| **Gamma rays** | Killing cancer cells (radiotherapy), sterilising medical equipment, tracing tumours | Ionising — high doses are lethal |

**Visible light colours** (increasing frequency): Red, Orange, Yellow, Green, Blue, Indigo, Violet (ROYGBIV).
Red has the longest wavelength in visible; violet has the shortest.

All EM waves travel at the same speed c in a vacuum, so f and λ are inversely related: a higher frequency means a shorter wavelength (f = c/λ).`,
      diagrams: [
        {
          caption: "The electromagnetic spectrum — ordered by increasing frequency",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" role="img" aria-label="Labelled electromagnetic spectrum strip showing all seven regions from radio waves to gamma rays">
  <!-- background -->
  <rect width="320" height="200" fill="#0f172a"/>
  <!-- Title -->
  <text x="160" y="16" text-anchor="middle" font-size="11" fill="#b7bce0" font-family="sans-serif" font-weight="bold">Electromagnetic Spectrum</text>
  <!-- frequency arrow -->
  <line x1="10" y1="32" x2="310" y2="32" stroke="#38bdf8" stroke-width="1.5"/>
  <polygon points="306,28 314,32 306,36" fill="#38bdf8"/>
  <text x="10" y="28" font-size="9" fill="#38bdf8" font-family="sans-serif">increasing frequency (f) --&gt;</text>
  <!-- wavelength arrow (opposite direction) -->
  <line x1="310" y1="42" x2="10" y2="42" stroke="#fb7185" stroke-width="1.5"/>
  <polygon points="14,38 6,42 14,46" fill="#fb7185"/>
  <text x="165" y="50" text-anchor="middle" font-size="9" fill="#fb7185" font-family="sans-serif">&lt;-- increasing wavelength (lambda)</text>
  <!-- spectrum band: 7 regions -->
  <!-- Radio: x=10 width=50 -->
  <rect x="10" y="58" width="48" height="30" fill="#4b5563" rx="2"/>
  <text x="34" y="74" text-anchor="middle" font-size="8" fill="#eef0ff" font-family="sans-serif">Radio</text>
  <!-- Microwaves -->
  <rect x="60" y="58" width="40" height="30" fill="#1d4ed8" rx="2"/>
  <text x="80" y="70" text-anchor="middle" font-size="8" fill="#eef0ff" font-family="sans-serif">Micro-</text>
  <text x="80" y="81" text-anchor="middle" font-size="8" fill="#eef0ff" font-family="sans-serif">waves</text>
  <!-- Infrared -->
  <rect x="102" y="58" width="36" height="30" fill="#b45309" rx="2"/>
  <text x="120" y="70" text-anchor="middle" font-size="8" fill="#eef0ff" font-family="sans-serif">Infra-</text>
  <text x="120" y="81" text-anchor="middle" font-size="8" fill="#eef0ff" font-family="sans-serif">red</text>
  <!-- Visible: rainbow strip -->
  <defs>
    <linearGradient id="vis" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ef4444"/>
      <stop offset="16%" stop-color="#f97316"/>
      <stop offset="33%" stop-color="#eab308"/>
      <stop offset="50%" stop-color="#22c55e"/>
      <stop offset="66%" stop-color="#3b82f6"/>
      <stop offset="82%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
  </defs>
  <rect x="140" y="58" width="30" height="30" fill="url(#vis)" rx="2"/>
  <text x="155" y="98" text-anchor="middle" font-size="7.5" fill="#eef0ff" font-family="sans-serif">Visible</text>
  <!-- UV -->
  <rect x="172" y="58" width="32" height="30" fill="#7c3aed" rx="2"/>
  <text x="188" y="74" text-anchor="middle" font-size="8" fill="#eef0ff" font-family="sans-serif">UV</text>
  <!-- X-rays -->
  <rect x="206" y="58" width="44" height="30" fill="#0e7490" rx="2"/>
  <text x="228" y="74" text-anchor="middle" font-size="8" fill="#eef0ff" font-family="sans-serif">X-rays</text>
  <!-- Gamma -->
  <rect x="252" y="58" width="58" height="30" fill="#be185d" rx="2"/>
  <text x="281" y="70" text-anchor="middle" font-size="8" fill="#eef0ff" font-family="sans-serif">Gamma</text>
  <text x="281" y="81" text-anchor="middle" font-size="8" fill="#eef0ff" font-family="sans-serif">rays</text>
  <!-- uses labels -->
  <text x="34" y="106" text-anchor="middle" font-size="7.5" fill="#9ca3af" font-family="sans-serif">Radio/TV</text>
  <text x="34" y="115" text-anchor="middle" font-size="7.5" fill="#9ca3af" font-family="sans-serif">Wi-Fi</text>
  <text x="80" y="106" text-anchor="middle" font-size="7.5" fill="#9ca3af" font-family="sans-serif">Ovens</text>
  <text x="80" y="115" text-anchor="middle" font-size="7.5" fill="#9ca3af" font-family="sans-serif">Satellite</text>
  <text x="120" y="106" text-anchor="middle" font-size="7.5" fill="#9ca3af" font-family="sans-serif">Remote</text>
  <text x="120" y="115" text-anchor="middle" font-size="7.5" fill="#9ca3af" font-family="sans-serif">controls</text>
  <text x="155" y="106" text-anchor="middle" font-size="7.5" fill="#9ca3af" font-family="sans-serif">Vision</text>
  <text x="155" y="115" text-anchor="middle" font-size="7.5" fill="#9ca3af" font-family="sans-serif">Photo</text>
  <text x="188" y="106" text-anchor="middle" font-size="7.5" fill="#9ca3af" font-family="sans-serif">Steril-</text>
  <text x="188" y="115" text-anchor="middle" font-size="7.5" fill="#9ca3af" font-family="sans-serif">isation</text>
  <text x="228" y="106" text-anchor="middle" font-size="7.5" fill="#9ca3af" font-family="sans-serif">Medical</text>
  <text x="228" y="115" text-anchor="middle" font-size="7.5" fill="#9ca3af" font-family="sans-serif">imaging</text>
  <text x="281" y="106" text-anchor="middle" font-size="7.5" fill="#9ca3af" font-family="sans-serif">Radio-</text>
  <text x="281" y="115" text-anchor="middle" font-size="7.5" fill="#9ca3af" font-family="sans-serif">therapy</text>
  <!-- danger row -->
  <text x="10" y="135" font-size="8" fill="#fb7185" font-family="sans-serif">Hazards:</text>
  <text x="170" y="135" text-anchor="middle" font-size="7.5" fill="#fb7185" font-family="sans-serif">Sunburn/cancer</text>
  <text x="228" y="135" text-anchor="middle" font-size="7.5" fill="#fb7185" font-family="sans-serif">Ionising/DNA</text>
  <text x="281" y="135" text-anchor="middle" font-size="7.5" fill="#fb7185" font-family="sans-serif">Ionising/lethal</text>
  <!-- speed note -->
  <text x="160" y="158" text-anchor="middle" font-size="9" fill="#34d399" font-family="sans-serif">All EM waves: v = c = 3 x 10^8 m/s in vacuum</text>
  <!-- ROYGBIV label -->
  <text x="155" y="175" text-anchor="middle" font-size="8" fill="#eef0ff" font-family="sans-serif">Visible: Red-Orange-Yellow-Green-Blue-Indigo-Violet</text>
  <text x="155" y="188" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">(lowest f to highest f within visible)</text>
</svg>`,
        },
      ],
      keyPoints: [
        "All EM waves are transverse and travel at c ≈ 3 × 10^8 m/s in a vacuum.",
        "Order (low f to high f): Radio, Microwaves, Infrared, Visible, UV, X-rays, Gamma rays.",
        "Higher frequency means shorter wavelength (f = c/λ, so f and λ are inversely proportional).",
        "UV, X-rays, and gamma rays are ionising — they can damage DNA and cause cancer.",
        "Radio waves have the longest wavelength and lowest frequency; gamma rays have the shortest wavelength and highest frequency.",
      ],
      strategies: ["ROYGBIV mnemonic for visible colours", "Ionising = UV and above = cancer risk", "c = f × λ for any EM wave calculation"],
    },

    {
      heading: "Reflection of Sound and Echoes",
      body: `Sound obeys the same law of reflection as light: the **angle of incidence equals the angle of reflection** (measured from the normal to the reflecting surface).

An **echo** is a reflected sound that is heard separately from the original sound. For an echo to be heard distinctly, the reflecting surface must be at least about **17 m** away (based on the persistence of hearing — roughly 0.1 s — and sound travelling ≈340 m/s: 340 × 0.1 / 2 ≈ 17 m one way).

**Concert hall design** uses controlled reflection (and absorption) to manage **reverberation** — the persistence of sound due to multiple reflections. Too much reverberation blurs speech; too little makes a room feel "dead". Architects use curved reflectors to direct sound evenly, and soft furnishings to absorb excess sound energy.

**Echoes in medicine and sonar** are the same physics applied quantitatively — the time between transmission and detection of the reflected pulse gives the distance to the reflecting boundary.`,
      keyPoints: [
        "Sound reflects off hard, smooth surfaces obeying the law of reflection.",
        "An echo is a reflected sound heard distinctly after the original sound.",
        "Echoes are used in sonar, medical ultrasound, and speed-of-sound measurements.",
        "Reverberation is the persistence of sound due to multiple reflections in an enclosed space.",
        "Soft, irregular surfaces absorb sound and reduce reverberation.",
      ],
      strategies: ["Echo = reflection of sound; apply v = 2d/t", "Angle of incidence = angle of reflection"],
    },
  ],

  learn: {
    keyFacts: [
      "Sound is a longitudinal wave requiring a material medium — it cannot travel through a vacuum.",
      "Speed of sound in air ≈ 340 m/s; speed of EM waves in vacuum c ≈ 3 × 10^8 m/s.",
      "Human audible range: 20 Hz to 20 000 Hz (20 kHz).",
      "Ultrasound (>20 kHz) is used in pre-natal scanning, sonar, and industrial cleaning.",
      "All EM waves are transverse; all travel at c in a vacuum.",
      "EM spectrum order (increasing frequency): Radio, Microwaves, Infrared, Visible, UV, X-rays, Gamma.",
      "UV, X-rays, and gamma rays are ionising and can cause cancer/DNA damage.",
      "Depth from sonar echo: depth = (v × t) / 2.",
      "Wave equation v = f × λ applies to all waves.",
      "Visible light ROYGBIV: red lowest frequency, violet highest frequency within visible.",
    ],
    flashcards: [
      { front: "What type of wave is sound?", back: "Longitudinal — particle vibrations are parallel to the direction of wave travel." },
      { front: "Can sound travel through a vacuum? Why / why not?", back: "No — sound requires a medium (particles to vibrate). A vacuum has no particles." },
      { front: "What is a compression in a sound wave?", back: "A region where particles are pushed together — local pressure is above normal." },
      { front: "What is a rarefaction in a sound wave?", back: "A region where particles are spread apart — local pressure is below normal." },
      { front: "State the approximate speed of sound in air.", back: "≈ 340 m/s (accept 330–340 m/s)." },
      { front: "How does frequency relate to pitch?", back: "Higher frequency → higher pitch. Lower frequency → lower pitch." },
      { front: "How does amplitude relate to loudness?", back: "Greater amplitude → louder sound (more energy per second)." },
      { front: "State the human audible frequency range.", back: "20 Hz to 20 000 Hz (20 kHz)." },
      { front: "What is ultrasound?", back: "Sound with frequency above 20 kHz — above the human hearing limit." },
      { front: "Give three uses of ultrasound.", back: "Pre-natal scanning, sonar/depth-finding, industrial cleaning." },
      { front: "State two properties shared by all EM waves.", back: "All are transverse waves; all travel at c ≈ 3 × 10^8 m/s in a vacuum." },
      { front: "List the EM spectrum from lowest to highest frequency.", back: "Radio, Microwaves, Infrared, Visible, UV, X-rays, Gamma rays." },
      { front: "Which EM waves are ionising?", back: "UV, X-rays, and gamma rays — they carry enough energy to remove electrons from atoms and damage DNA." },
      { front: "What are the uses of X-rays?", back: "Medical imaging (bones/dense tissue), airport security scanning." },
      { front: "Why is ultrasound preferred over X-rays for pre-natal scans?", back: "Ultrasound is non-ionising, so it does not damage the DNA of the developing foetus." },
      { front: "Write the formula used for sonar depth calculation.", back: "depth = (v × t) / 2, where v is the speed of sound in water and t is the round-trip time." },
    ],
    keyTerms: [
      { term: "Longitudinal wave", definition: "A wave in which the particle vibrations are parallel to the direction of energy transfer." },
      { term: "Compression", definition: "A region in a longitudinal wave where particles are pushed together, giving higher than normal pressure." },
      { term: "Rarefaction", definition: "A region in a longitudinal wave where particles are spread apart, giving lower than normal pressure." },
      { term: "Amplitude", definition: "The maximum displacement of a particle from its rest position; determines the energy (and loudness for sound) of the wave." },
      { term: "Frequency", definition: "The number of complete wave cycles passing a point per second, measured in hertz (Hz)." },
      { term: "Ultrasound", definition: "Sound waves with a frequency above 20 kHz, beyond the upper limit of human hearing." },
      { term: "Echo", definition: "A reflected sound wave that is heard separately from the original sound." },
      { term: "Electromagnetic spectrum", definition: "The complete family of transverse waves consisting of oscillating electric and magnetic fields, ranging from radio waves to gamma rays." },
      { term: "Transverse wave", definition: "A wave in which the particle vibrations (or field oscillations) are perpendicular to the direction of energy transfer." },
      { term: "Ionising radiation", definition: "Radiation with sufficient energy to remove electrons from atoms, potentially damaging DNA (UV, X-rays, gamma rays)." },
      { term: "Speed of light (c)", definition: "The speed at which all electromagnetic waves travel in a vacuum: c ≈ 3 × 10^8 m/s." },
      { term: "Sonar", definition: "Sound Navigation And Ranging — a technique that uses timed ultrasound echoes to measure distances underwater." },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "phys-sound-em-mcq-q01",
        question: "Which of the following correctly describes a longitudinal wave?",
        options: [
          "Particle vibrations are perpendicular to the direction of energy transfer.",
          "Particle vibrations are parallel to the direction of energy transfer.",
          "The wave can travel through a vacuum.",
          "The wave is made up of oscillating electric and magnetic fields.",
        ],
        answerIndex: 1,
        explanation: "In a longitudinal wave, particles oscillate back and forth along the same line as the wave travels. This is in contrast to transverse waves (options A and D describe transverse waves or EM waves). Sound cannot travel through a vacuum, so C is wrong.",
        guideRef: "Sound as a Longitudinal Wave",
        difficulty: "warmup",
      },
      {
        id: "phys-sound-em-mcq-q02",
        question: "A student stands 85 m from a cliff and claps. She hears the echo after 0.50 s. What is the speed of sound?",
        options: ["85 m/s", "170 m/s", "340 m/s", "425 m/s"],
        answerIndex: 2,
        explanation: "The sound travels to the cliff and back: total distance = 2 × 85 = 170 m. Speed = distance/time = 170/0.50 = 340 m/s. Option A forgets to double the distance; option B uses only one-way distance with the wrong time.",
        guideRef: "Speed of Sound and Measuring It",
        difficulty: "core",
        hints: [
          "The sound travels TO the cliff and then BACK again.",
          "Total distance = 2 × 85 m.",
          "Speed = total distance / time.",
        ],
        strategy: "Double the distance for echo problems",
      },
      {
        id: "phys-sound-em-mcq-q03",
        question: "Which property of a sound wave determines its loudness?",
        options: ["Frequency", "Wavelength", "Amplitude", "Speed"],
        answerIndex: 2,
        explanation: "Amplitude determines the energy of the wave and therefore the loudness. Frequency determines pitch, not loudness. Speed and wavelength are related by v = fλ but do not determine loudness.",
        guideRef: "Frequency, Pitch, Amplitude, Loudness, and the Audible Range",
        difficulty: "warmup",
      },
      {
        id: "phys-sound-em-mcq-q04",
        question: "A sonar pulse takes 0.40 s to travel from a ship to the seabed and back. If the speed of sound in seawater is 1500 m/s, what is the depth of the seabed?",
        options: ["150 m", "300 m", "600 m", "1200 m"],
        answerIndex: 1,
        explanation: "depth = (v × t) / 2 = (1500 × 0.40) / 2 = 600 / 2 = 300 m. A common error is forgetting to halve (giving 600 m). The total distance covered by the pulse is 600 m but the depth is half that.",
        guideRef: "Ultrasound and Its Uses",
        difficulty: "core",
        hints: [
          "The pulse travels down to the seabed AND back up — total path is twice the depth.",
          "Use depth = (v × t) / 2.",
          "Substitute: v = 1500 m/s, t = 0.40 s.",
        ],
        strategy: "depth = (v × t) / 2 — divide by 2",
      },
      {
        id: "phys-sound-em-mcq-q05",
        question: "Which region of the electromagnetic spectrum is used in remote controls for televisions?",
        options: ["Ultraviolet", "Infrared", "Microwaves", "Radio waves"],
        answerIndex: 1,
        explanation: "TV remote controls use infrared (IR) radiation. UV would cause eye damage and is not suitable. Microwaves and radio waves could pass through walls and interfere with other devices — IR travels short distances line-of-sight, which is ideal.",
        guideRef: "The Electromagnetic Spectrum",
        difficulty: "warmup",
      },
      {
        id: "phys-sound-em-mcq-q06",
        question: "Which statement about electromagnetic waves is correct?",
        options: [
          "They require a medium to travel through.",
          "Different regions travel at different speeds in a vacuum.",
          "They are all longitudinal waves.",
          "They all travel at approximately 3 × 10^8 m/s in a vacuum.",
        ],
        answerIndex: 3,
        explanation: "All EM waves travel at c ≈ 3 × 10^8 m/s in a vacuum, regardless of frequency. They do not require a medium (A is wrong); they all travel at the same speed in vacuum (B is wrong); and they are transverse, not longitudinal (C is wrong).",
        guideRef: "The Electromagnetic Spectrum",
        difficulty: "warmup",
      },
    ],
    qa: [
      {
        id: "phys-sound-em-qa-q01",
        question: "Explain why sound cannot travel through a vacuum, but light can.",
        marks: 3,
        modelAnswer: "Sound is a mechanical, longitudinal wave that transfers energy by causing particles in a medium to vibrate. In a vacuum there are no particles, so there is nothing to vibrate and pass the disturbance on — sound cannot propagate. Light (and all EM waves) consists of oscillating electric and magnetic fields that sustain each other as the wave travels. These fields do not require particles, so EM waves can travel through a vacuum.",
        markScheme: [
          "Sound requires a medium / sound requires particles to vibrate",
          "In a vacuum there are no particles / nothing to carry the vibration",
          "Light / EM waves are oscillating electric and magnetic fields / do not need a medium",
        ],
        commonError: "Stating that light travels faster than sound without explaining WHY sound cannot travel through a vacuum at all.",
        guideRef: "Sound as a Longitudinal Wave",
        difficulty: "core",
        hints: [
          "Think about what sound needs in order to travel.",
          "What happens if there are no particles at all?",
          "What is light made of? Does it need particles?",
        ],
        strategy: "Contrast the two wave types",
      },
      {
        id: "phys-sound-em-qa-q02",
        question: "A doctor uses an ultrasound scanner to find a kidney stone. A pulse is sent into the body and an echo is detected 80 microseconds (80 × 10^-6 s) after the pulse was emitted. The speed of ultrasound in body tissue is 1540 m/s.\n(a) Calculate the depth of the kidney stone below the surface.\n(b) State one reason why ultrasound is preferred over X-rays for this internal scan.",
        marks: 4,
        modelAnswer: "(a) depth = (v × t) / 2 = (1540 × 80 × 10^-6) / 2 = (0.1232) / 2 = 0.0616 m ≈ 6.2 cm.\n(b) Ultrasound is non-ionising, so it does not damage DNA or increase the risk of cancer, making it safer for routine internal scans.",
        markScheme: [
          "(a) Use of depth = (v × t) / 2 (or equivalent)",
          "(a) Correct substitution: 1540 × 80 × 10^-6",
          "(a) Answer: 0.0616 m / 6.16 cm (accept 6.1–6.2 cm)",
          "(b) Ultrasound is non-ionising / does not damage DNA / safer than X-rays for soft tissue",
        ],
        commonError: "Forgetting to divide by 2 in part (a), giving 0.123 m instead of 0.0616 m.",
        guideRef: "Ultrasound and Its Uses",
        difficulty: "core",
        hints: [
          "The pulse travels TO the kidney stone and then BACK.",
          "Total distance = v × t; depth = half of that.",
          "Convert 80 microseconds: 80 × 10^-6 s.",
          "For (b), think about ionising vs non-ionising radiation.",
        ],
        strategy: "depth = (v × t) / 2 — careful unit conversion",
        solutions: [
          {
            label: "Method 1: Formula substitution",
            steps: [
              "Identify: v = 1540 m/s, t = 80 × 10^-6 s",
              "depth = (v × t) / 2",
              "depth = (1540 × 80 × 10^-6) / 2",
              "depth = 0.1232 / 2 = 0.0616 m ≈ 6.2 cm",
            ],
          },
          {
            label: "Method 2: Find total distance first",
            steps: [
              "Total distance = v × t = 1540 × 80 × 10^-6 = 0.1232 m",
              "This is the round-trip distance (to stone and back).",
              "Depth (one-way) = 0.1232 / 2 = 0.0616 m",
            ],
          },
        ],
      },
      {
        id: "phys-sound-em-qa-q03",
        question: "State the order of the electromagnetic spectrum from lowest to highest frequency, and for any TWO regions, describe one use and one hazard (or state that there are no significant hazards at normal intensities).",
        marks: 5,
        modelAnswer: "Order (lowest to highest frequency): radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays.\n\nInfrared: Use — remote controls / thermal imaging / optical fibre communications. Hazard — skin burns from intense IR (e.g. grills).\n\nX-rays: Use — medical imaging of bones / airport security scanning. Hazard — ionising radiation damages DNA, increasing risk of cancer; dose must be minimised.",
        markScheme: [
          "Correct order of all seven regions (1 mark)",
          "Region 1: correct use stated (1 mark)",
          "Region 1: appropriate hazard or 'no significant hazard at normal intensity' stated (1 mark)",
          "Region 2: correct use stated (1 mark)",
          "Region 2: appropriate hazard or 'no significant hazard' stated (1 mark)",
        ],
        commonError: "Confusing infrared with ultraviolet, or placing visible light at the wrong position relative to UV and IR.",
        guideRef: "The Electromagnetic Spectrum",
        difficulty: "core",
        hints: [
          "Use the mnemonic: 'Raging Martians Invaded Venus Using X-ray Guns' (Radio, Microwave, Infrared, Visible, UV, X-ray, Gamma).",
          "Ionising waves (UV, X-rays, gamma) can cause cancer.",
          "Non-ionising waves generally cause heating effects at high intensity.",
        ],
        strategy: "Mnemonic for EM order; ionising vs non-ionising framework",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "phys-sound-em-bank-mcq-1",
        title: "Sound & EM Spectrum — MCQ Paper 1",
        description: "Six multiple-choice questions covering sound waves, echo calculations, the EM spectrum, and wave properties.",
        questions: [
          {
            id: "phys-sound-em-bank-mcq1-q01",
            question: "Which of the following is a property of ALL electromagnetic waves?",
            options: [
              "They require a medium to travel.",
              "They transfer energy by particle vibrations.",
              "They are transverse waves.",
              "They have the same frequency.",
            ],
            answerIndex: 2,
            explanation: "All EM waves are transverse. They do not require a medium (A is wrong); they do not travel by particle vibrations — that is sound (B is wrong); and they have very different frequencies across the spectrum (D is wrong).",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bank-mcq1-q02",
            question: "A sound wave has frequency 256 Hz and wavelength 1.33 m. What is the speed of sound?",
            options: ["192 m/s", "257 m/s", "340 m/s", "512 m/s"],
            answerIndex: 2,
            explanation: "v = f × λ = 256 × 1.33 ≈ 340 m/s. This is the expected speed of sound in air at room temperature. The calculation is straightforward substitution into the wave equation.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "core",
            hints: [
              "Use the wave equation: v = f × λ.",
              "Substitute f = 256 Hz and λ = 1.33 m.",
              "Multiply to get speed in m/s.",
            ],
            strategy: "Wave equation v = f × λ",
          },
          {
            id: "phys-sound-em-bank-mcq1-q03",
            question: "Which region of the EM spectrum is used to sterilise surgical instruments and kill bacteria?",
            options: ["Infrared", "Microwaves", "Ultraviolet", "Radio waves"],
            answerIndex: 2,
            explanation: "Ultraviolet radiation is used for sterilisation because it is ionising enough to damage the DNA of bacteria and viruses, killing them, while being less penetrating than X-rays or gamma rays. UV lamps are commonly used to sterilise water and surfaces.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bank-mcq1-q04",
            question: "A bat emits an ultrasound pulse of frequency 80 kHz. The pulse reflects off a moth and returns after 4.0 ms. If the speed of sound in air is 340 m/s, how far away is the moth?",
            options: ["0.34 m", "0.68 m", "1.36 m", "2.72 m"],
            answerIndex: 1,
            explanation: "distance = (v × t) / 2 = (340 × 4.0 × 10^-3) / 2 = 1.36 / 2 = 0.68 m. Note the frequency of 80 kHz is given as context (real bats use echolocation at these frequencies) but is not needed for this calculation.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "Convert time: 4.0 ms = 4.0 × 10^-3 s.",
              "The pulse travels to the moth and back — total path = 2 × distance.",
              "distance = (v × t) / 2.",
              "The frequency of 80 kHz is not needed for this calculation.",
            ],
            strategy: "distance = (v × t) / 2 — echo formula",
          },
          {
            id: "phys-sound-em-bank-mcq1-q05",
            question: "X-rays can be dangerous because they are:",
            options: [
              "Very fast — faster than other EM waves.",
              "Ionising — they can remove electrons from atoms and damage DNA.",
              "Longitudinal waves that cause deep tissue heating.",
              "Reflected by bone, so they cannot penetrate the body.",
            ],
            answerIndex: 1,
            explanation: "X-rays are dangerous because they are ionising — they carry enough energy to eject electrons from atoms, which can break chemical bonds in DNA, potentially causing mutations and cancer. All EM waves travel at the same speed (A is wrong); X-rays are transverse waves (C is wrong); and X-rays pass through soft tissue but are absorbed by dense bone, which is why they are used for imaging (D is wrong).",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Think about what 'ionising' means.",
              "Which types of EM radiation are ionising?",
            ],
            strategy: "Ionising = can remove electrons = can damage DNA",
          },
          {
            id: "phys-sound-em-bank-mcq1-q06",
            question: "A microwave oven uses microwaves of frequency 2.45 GHz. Calculate the wavelength of these microwaves. (c = 3 × 10^8 m/s, 1 GHz = 10^9 Hz)",
            options: ["0.0082 m", "0.0122 m", "0.122 m", "8.17 m"],
            answerIndex: 2,
            explanation: "λ = c / f = (3 × 10^8) / (2.45 × 10^9) = 3 / 24.5 = 0.1224 m ≈ 0.122 m. Option A would arise from an arithmetic slip; option B is ten times too small; option D inverts the formula (f/c instead of c/f).",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Use λ = c / f.",
              "Convert 2.45 GHz to Hz: 2.45 × 10^9 Hz.",
              "Substitute c = 3 × 10^8 m/s and divide.",
            ],
            strategy: "λ = c / f — rearrange wave equation",
          },
        ],
      },
      {
        id: "phys-sound-em-bank-mcq-2",
        title: "Sound & EM Spectrum — MCQ Paper 2",
        description: "Six questions including challenging multi-step and synoptic problems.",
        questions: [
          {
            id: "phys-sound-em-bank-mcq2-q01",
            question: "In which medium does sound travel fastest?",
            options: ["Air at 20°C", "Water at 20°C", "Steel", "A vacuum"],
            answerIndex: 2,
            explanation: "Sound travels fastest in steel (≈5100 m/s) because the particles are very close together and the inter-atomic bonds are very stiff (high elastic modulus), so vibrations are transmitted extremely rapidly. Water is faster than air but slower than steel. Sound cannot travel through a vacuum at all.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bank-mcq2-q02",
            question: "A ship uses sonar. A pulse is sent to the seabed at 0.00 s and the echo is received at 0.60 s. The speed of sound in seawater is 1500 m/s. What is the depth of the seabed?",
            options: ["225 m", "450 m", "900 m", "1800 m"],
            answerIndex: 1,
            explanation: "depth = (v × t) / 2 = (1500 × 0.60) / 2 = 900 / 2 = 450 m. A common error is to use the full time without halving, giving 900 m.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "The sound travels down to the seabed and back up.",
              "depth = (v × t) / 2.",
              "v = 1500 m/s, t = 0.60 s.",
            ],
          },
          {
            id: "phys-sound-em-bank-mcq2-q03",
            question: "A student claims: 'Gamma rays are more dangerous than radio waves because gamma rays travel faster.' Which part of this statement is incorrect?",
            options: [
              "Gamma rays are not more dangerous than radio waves.",
              "Gamma rays travel at the same speed as radio waves in a vacuum.",
              "Radio waves are more dangerous than gamma rays.",
              "Gamma rays do not travel through a vacuum.",
            ],
            answerIndex: 1,
            explanation: "All EM waves travel at the same speed c ≈ 3 × 10^8 m/s in a vacuum — the claim that gamma rays travel faster is wrong. Gamma rays ARE more dangerous (they are ionising) but for the right reason: higher frequency gives each photon more energy, not greater speed.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Do all EM waves travel at the same speed in vacuum?",
              "What property of gamma rays makes them dangerous?",
            ],
          },
          {
            id: "phys-sound-em-bank-mcq2-q04",
            question: "An EM wave has wavelength 1.0 × 10^-10 m. In which region of the EM spectrum does it belong?",
            options: ["Infrared", "Ultraviolet", "X-rays", "Gamma rays"],
            answerIndex: 2,
            explanation: "Wavelength 1.0 × 10^-10 m = 0.1 nm is in the X-ray range (typically 0.01–10 nm). UV is around 10–400 nm; gamma rays are below about 0.01 nm; infrared is 700 nm to 1 mm.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Convert: 1.0 × 10^-10 m = 0.1 nm.",
              "Order of EM spectrum: shorter wavelength = higher frequency.",
              "Visible light is around 400–700 nm; X-rays are much shorter.",
            ],
          },
          {
            id: "phys-sound-em-bank-mcq2-q05",
            question: "A submarine at depth d sends a sonar pulse upward. The echo from the surface returns after time t. The speed of sound in seawater is v. Which expression correctly gives the depth d?",
            options: ["d = v × t", "d = v / (2t)", "d = (v × t) / 2", "d = 2v × t"],
            answerIndex: 2,
            explanation: "The pulse travels from the submarine to the surface (distance d) and back (distance d), so total distance = 2d. Speed = distance/time → v = 2d/t → d = vt/2. This is the standard sonar depth formula.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "challenge",
            hints: [
              "Write an equation for the total distance the sound travels.",
              "Total distance = 2 × depth d.",
              "Rearrange v = total distance / t for d.",
            ],
            strategy: "Derive from first principles: v = 2d/t → d = vt/2",
          },
          {
            id: "phys-sound-em-bank-mcq2-q06",
            question: "A student measures the speed of sound by standing 80 m from a wall and timing the echo. He claps 10 times in 4.8 s (so each clap coincides with the echo of the previous one). What value of the speed of sound does he obtain?",
            options: ["167 m/s", "333 m/s", "667 m/s", "1600 m/s"],
            answerIndex: 1,
            explanation: "Each clap interval = 4.8/10 = 0.48 s. In that time the sound travels 2 × 80 = 160 m. Speed = 160/0.48 = 333 m/s ≈ 340 m/s (rounding). This technique averages over many echoes, reducing timing error.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "challenge",
            hints: [
              "Time for each echo = total time / number of claps = 4.8/10.",
              "In one echo period the sound travels to the wall and back.",
              "Distance per period = 2 × 80 = 160 m.",
              "Speed = 160 / 0.48.",
            ],
            strategy: "Average over many cycles to reduce timing uncertainty",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "phys-sound-em-bank-qa-1",
        title: "Sound & EM Spectrum — Structured Paper 1",
        description: "Four structured questions covering sound wave properties, echo calculations, and EM spectrum uses.",
        questions: [
          {
            id: "phys-sound-em-bank-qa1-q01",
            question: "Fig. 1 represents a sound wave travelling through air.\n(a) State whether this wave is transverse or longitudinal. Give a reason for your answer.\n(b) Label on Fig. 1 (or in your answer) one compression and one rarefaction.\n(c) A student says: 'If I move a speaker that produces this sound into a sealed vacuum chamber and turn it on, I will still hear the sound through the glass.' Explain why the student is incorrect.",
            marks: 5,
            modelAnswer: "(a) Longitudinal. The particle vibrations (compressions and rarefactions) are in the same direction as the direction of energy transfer/wave travel.\n(b) Compression: region of closely spaced particles / high pressure region. Rarefaction: region of widely spaced particles / low pressure region.\n(c) Sound requires a medium of particles to travel through. Inside the vacuum chamber there are no particles to vibrate, so the sound cannot propagate out of the chamber. The student would not hear the sound.",
            markScheme: [
              "(a) Longitudinal (1 mark)",
              "(a) Vibrations parallel to direction of travel / energy transfer (1 mark)",
              "(b) Compression correctly identified as high pressure/dense region (1 mark)",
              "(b) Rarefaction correctly identified as low pressure/sparse region (1 mark)",
              "(c) Sound requires particles/a medium; vacuum has no particles so sound cannot travel (1 mark)",
            ],
            commonError: "In (a), students sometimes say 'longitudinal because sound cannot travel through a vacuum' — this is a property of sound, not a definition of longitudinal.",
            guideRef: "Sound as a Longitudinal Wave",
            difficulty: "core",
            hints: [
              "Transverse vs longitudinal: which direction are vibrations relative to wave travel?",
              "Compressions = closely packed particles; rarefactions = widely spaced.",
              "What does a vacuum contain?",
            ],
          },
          {
            id: "phys-sound-em-bank-qa1-q02",
            question: "A student measures the speed of sound. She stands 102 m from a large flat wall and fires a starting pistol. She hears the echo after 0.60 s.\n(a) Calculate the speed of sound.\n(b) Suggest one improvement to her method that would reduce the uncertainty in her result.\n(c) The student then moves to a steel bridge and measures the speed of sound in steel. She finds it is much greater than in air. Suggest why sound travels faster in steel than in air.",
            marks: 6,
            modelAnswer: "(a) Total distance = 2 × 102 = 204 m. Speed = 204 / 0.60 = 340 m/s.\n(b) Repeat the measurement many times and find the mean to reduce random error; OR clap rhythmically so each clap coincides with the echo, timing a large number of echoes to reduce the percentage timing uncertainty.\n(c) In steel, the particles (atoms) are much closer together and the inter-atomic bonds are much stiffer than in air. Vibrations are therefore transmitted more rapidly from particle to particle.",
            markScheme: [
              "(a) Total distance = 2 × 102 = 204 m (1 mark)",
              "(a) Speed = 204 / 0.60 = 340 m/s with unit (1 mark)",
              "(b) Repeat and average / time multiple echoes (allow any valid method to reduce uncertainty) (1 mark)",
              "(c) Particles closer together in steel (1 mark)",
              "(c) Bonds/forces between particles stiffer/stronger in steel (1 mark)",
              "(c) Vibrations transmitted faster (1 mark — can be implied)",
            ],
            commonError: "Using d = 102 m instead of 2 × 102 = 204 m in the calculation.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "core",
            hints: [
              "Echo = sound travels there AND back.",
              "Total distance = 2 × 102 m.",
              "For (c): compare particle spacing and bond stiffness in steel vs air.",
            ],
            strategy: "Double distance for echoes; link particle spacing to wave speed",
            solutions: [
              {
                label: "Method 1: Direct formula",
                steps: [
                  "Total distance = 2 × 102 = 204 m",
                  "v = d / t = 204 / 0.60",
                  "v = 340 m/s",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bank-qa1-q03",
            question: "The electromagnetic spectrum contains regions with very different properties and uses.\n(a) Name the EM wave with the longest wavelength.\n(b) State the speed of all EM waves in a vacuum.\n(c) A mobile phone uses microwaves of frequency 1.8 GHz (1.8 × 10^9 Hz). Calculate the wavelength of these microwaves. (c = 3.0 × 10^8 m/s)\n(d) State one use and one potential hazard of microwaves.",
            marks: 6,
            modelAnswer: "(a) Radio waves have the longest wavelength.\n(b) All EM waves travel at c ≈ 3 × 10^8 m/s in a vacuum.\n(c) λ = c / f = (3.0 × 10^8) / (1.8 × 10^9) = 0.167 m ≈ 0.17 m.\n(d) Use: cooking food in microwave ovens / satellite communication. Hazard: at high intensity, microwaves can heat internal body tissues (e.g. heating effect on eyes or reproductive organs).",
            markScheme: [
              "(a) Radio waves (1 mark)",
              "(b) 3 × 10^8 m/s (accept 3.0 × 10^8) (1 mark)",
              "(c) Correct use of λ = c / f (1 mark)",
              "(c) λ = 0.167 m ≈ 0.17 m (accept 0.16–0.17 m) (1 mark)",
              "(d) Correct use: cooking / satellite / mobile communication (1 mark)",
              "(d) Correct hazard: internal heating of tissue at high intensity (1 mark)",
            ],
            commonError: "In (c), multiplying instead of dividing: f × c instead of c / f.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Longest wavelength = lowest frequency — which end of the EM spectrum?",
              "Rearrange v = f × λ to get λ = v / f = c / f.",
              "1.8 GHz = 1.8 × 10^9 Hz.",
            ],
            strategy: "λ = c / f; know the order of the EM spectrum",
          },
          {
            id: "phys-sound-em-bank-qa1-q04",
            question: "An archaeologist uses ground-penetrating radar to find buried structures. A pulse of radio waves is sent into the ground and an echo is detected after 120 ns (120 × 10^-9 s). The speed of radio waves in the soil is 1.5 × 10^8 m/s.\n(a) Calculate the depth of the buried structure.\n(b) Explain why radio waves are used for this investigation rather than (i) sound waves, and (ii) X-rays.\n(c) The frequency of the radio waves used is 400 MHz (4.0 × 10^8 Hz). Calculate the wavelength of these waves in the soil.",
            marks: 7,
            modelAnswer: "(a) depth = (v × t) / 2 = (1.5 × 10^8 × 120 × 10^-9) / 2 = (18) / 2 = 9 m.\n(b)(i) Sound waves cannot penetrate solid ground efficiently over metre-scale distances; they are strongly attenuated. Radio waves can penetrate soil much more deeply. (ii) X-rays are ionising and would be hazardous to use outdoors in an open area; they are also strongly absorbed by soil and would not penetrate to useful depths. Radio waves are non-ionising and penetrate soil effectively.\n(c) λ = v / f = (1.5 × 10^8) / (4.0 × 10^8) = 0.375 m ≈ 0.38 m.",
            markScheme: [
              "(a) depth = (v × t) / 2 used (1 mark)",
              "(a) depth = 9 m (1 mark)",
              "(b)(i) Sound attenuated / does not penetrate soil / not suitable for this application (1 mark)",
              "(b)(ii) X-rays are ionising / dangerous / hazardous outdoors (1 mark)",
              "(b)(ii) X-rays absorbed by soil / do not penetrate to sufficient depth (1 mark)",
              "(c) λ = v / f used correctly (1 mark)",
              "(c) λ = 0.375 m (accept 0.37–0.38 m) (1 mark)",
            ],
            commonError: "In (a), using depth = v × t without dividing by 2.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "challenge",
            hints: [
              "The pulse travels into the ground and back — total path = 2 × depth.",
              "depth = (v × t) / 2; convert 120 ns = 120 × 10^-9 s.",
              "For (b): compare penetration and ionisation properties.",
              "For (c): v in soil = 1.5 × 10^8 m/s (not c — EM waves slow down in materials).",
            ],
            strategy: "Echo depth formula; ionising vs non-ionising; λ = v/f using medium speed",
            solutions: [
              {
                label: "Part (a) worked solution",
                steps: [
                  "t = 120 × 10^-9 s = 1.2 × 10^-7 s",
                  "Total distance = v × t = 1.5 × 10^8 × 1.2 × 10^-7 = 18 m",
                  "depth = 18 / 2 = 9 m",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-sound-em-bank-qa-2",
        title: "Sound & EM Spectrum — Structured Paper 2",
        description: "Four questions with challenge-level calculations and synoptic EM spectrum analysis.",
        questions: [
          {
            id: "phys-sound-em-bank-qa2-q01",
            question: "A doctor performs a pre-natal ultrasound scan. She uses a probe that emits ultrasound pulses at a frequency of 5.0 MHz.\n(a) What is meant by 'ultrasound'?\n(b) State why ultrasound is used rather than X-rays for pre-natal scanning.\n(c) The speed of ultrasound in amniotic fluid is 1490 m/s. Calculate the wavelength of the 5.0 MHz ultrasound in this fluid.\n(d) The probe detects an echo from the foetus after 0.22 ms (2.2 × 10^-4 s). Calculate the distance from the probe to the foetus.",
            marks: 6,
            modelAnswer: "(a) Ultrasound is sound with a frequency above 20 000 Hz (20 kHz) — above the upper limit of human hearing.\n(b) Ultrasound is non-ionising, so it does not damage the DNA of the developing foetus. X-rays are ionising and could cause mutations.\n(c) λ = v / f = 1490 / (5.0 × 10^6) = 2.98 × 10^-4 m ≈ 0.30 mm.\n(d) distance = (v × t) / 2 = (1490 × 2.2 × 10^-4) / 2 = 0.3278 / 2 = 0.164 m ≈ 16 cm.",
            markScheme: [
              "(a) Sound above 20 kHz / 20 000 Hz / above human hearing range (1 mark)",
              "(b) Non-ionising / does not damage DNA / safer for foetus (1 mark)",
              "(c) λ = v / f = 1490 / (5.0 × 10^6) (1 mark)",
              "(c) λ ≈ 3.0 × 10^-4 m (accept 2.9–3.0 × 10^-4 m) (1 mark)",
              "(d) distance = (v × t) / 2 used (1 mark)",
              "(d) distance ≈ 0.164 m / 16.4 cm (accept 16–17 cm) (1 mark)",
            ],
            commonError: "In (d), not dividing by 2 — forgetting the echo travels to the foetus and back.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "Ultrasound: above 20 kHz.",
              "λ = v / f; convert MHz: 5.0 MHz = 5.0 × 10^6 Hz.",
              "Echo formula: distance = (v × t) / 2.",
              "Convert 0.22 ms = 2.2 × 10^-4 s.",
            ],
            strategy: "λ = v/f; distance = (v × t)/2 — both standard wave calculations",
          },
          {
            id: "phys-sound-em-bank-qa2-q02",
            question: "The table below lists four EM waves, P, Q, R, S (not in order):\nP: wavelength 1.5 × 10^-10 m\nQ: wavelength 3.0 × 10^-2 m\nR: wavelength 5.5 × 10^-7 m\nS: wavelength 2.0 × 10^-3 m\n(a) Arrange P, Q, R, S in order of increasing frequency.\n(b) Identify the region of the EM spectrum to which each belongs.\n(c) Which of these waves is ionising? Explain what is meant by 'ionising'.\n(d) Calculate the frequency of wave R in a vacuum. (c = 3 × 10^8 m/s)",
            marks: 7,
            modelAnswer: "(a) Increasing frequency = decreasing wavelength: Q (3.0 × 10^-2 m) < S (2.0 × 10^-3 m) < R (5.5 × 10^-7 m) < P (1.5 × 10^-10 m). Order: Q, S, R, P.\n(b) P (1.5 × 10^-10 m = 0.15 nm): X-rays. Q (3.0 × 10^-2 m = 3 cm): microwaves. R (5.5 × 10^-7 m = 550 nm): visible light (green). S (2.0 × 10^-3 m = 2 mm): microwaves (border with infrared).\n(c) Wave P (X-rays) is ionising. Ionising means the radiation has enough energy to remove electrons from atoms, which can break chemical bonds and damage DNA.\n(d) f = c / λ = (3 × 10^8) / (5.5 × 10^-7) = 5.45 × 10^14 Hz ≈ 5.5 × 10^14 Hz.",
            markScheme: [
              "(a) Correct order Q, S, R, P (1 mark — all four correct)",
              "(b) P = X-rays; Q = microwaves; R = visible light; S = microwaves/far infrared (1 mark each, 3 marks for any 3 correct)",
              "(c) P (X-rays) is ionising (1 mark)",
              "(c) Ionising = enough energy to remove electrons from atoms / can damage DNA (1 mark)",
              "(d) f = c / λ = 3 × 10^8 / 5.5 × 10^-7 = 5.45 × 10^14 Hz (1 mark for method, 1 mark for answer)",
            ],
            commonError: "Confusing frequency order with wavelength order — higher frequency means SHORTER wavelength.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "challenge",
            hints: [
              "Higher frequency = shorter wavelength (f = c/λ, so they are inversely proportional).",
              "Sort by wavelength to find frequency order.",
              "550 nm visible light is green — in the middle of the visible spectrum.",
              "Ionising: energetic enough to remove electrons from atoms.",
            ],
            strategy: "Sort by wavelength, invert for frequency order; f = c/λ",
            solutions: [
              {
                label: "Frequency order derivation",
                steps: [
                  "Since f = c/λ, longer wavelength → lower frequency.",
                  "Sort wavelengths largest to smallest: Q > S > R > P.",
                  "Therefore frequency order (smallest to largest): Q, S, R, P.",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bank-qa2-q03",
            question: "A student investigates echoes to measure the speed of sound. She fires a starting pistol at time t = 0 and listens for the echo from a wall 120 m away.\n(a) How long after t = 0 should she expect to hear the echo? (Use v = 340 m/s.)\n(b) The student does not hear a distinct echo. Suggest why.\n(c) She repeats the experiment but now claps rhythmically so that each clap coincides with the echo of the previous clap. She times 20 claps taking 14.1 s. Calculate the speed of sound from this data.\n(d) Calculate the percentage difference between your answer to (c) and the accepted value of 340 m/s.",
            marks: 7,
            modelAnswer: "(a) t = 2d / v = (2 × 120) / 340 = 240 / 340 = 0.71 s.\n(b) 120 m is only 60 m one-way — the reflection would be heard 0.71 s later. However, if there is background noise, or the wall is not flat enough to give a strong reflection, the echo may be too faint/blurred to hear distinctly. (Accept: the student may not have been far enough away for the echo to be distinct from the original sound.)\n(c) Time per clap = 14.1 / 20 = 0.705 s. Each echo round trip = 2 × 120 = 240 m. v = 240 / 0.705 = 340 m/s (to 3 s.f.).\n(d) Percentage difference = |340 − 340| / 340 × 100 = 0% (the student's value agrees exactly in this case — the question tests the method).",
            markScheme: [
              "(a) t = 2 × 120 / 340 = 0.71 s (1 mark for method, 1 mark for answer)",
              "(b) Echo too faint / background noise / wall not reflective enough / student too close (1 mark for any valid reason)",
              "(c) Time per echo = 14.1 / 20 = 0.705 s (1 mark)",
              "(c) Distance per echo = 2 × 120 = 240 m (1 mark)",
              "(c) v = 240 / 0.705 = 340 m/s (1 mark)",
              "(d) Correct method: |student value − 340| / 340 × 100 (1 mark for method and answer consistent with (c))",
            ],
            commonError: "In (a), using d = 120 m without doubling — forgetting the echo travels there AND back.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "core",
            hints: [
              "Echo travels to wall and back: total distance = 2 × 120 m.",
              "t = total distance / speed = 240 / 340.",
              "In (c): time per clap = 14.1 / 20 s; distance per clap = 2d.",
              "Percentage difference = |measured − accepted| / accepted × 100.",
            ],
            strategy: "v = 2d/t; average over many repeats",
          },
          {
            id: "phys-sound-em-bank-qa2-q04",
            question: "This question is about uses and dangers of the electromagnetic spectrum.\n(a) A hospital uses gamma rays to sterilise surgical instruments sealed in plastic packets.\n    (i) Explain why gamma rays can sterilise instruments without opening the packets.\n    (ii) State one property of gamma rays that makes them dangerous to the hospital workers.\n(b) Airport security uses X-rays to scan luggage.\n    (i) Explain why X-rays can pass through a suitcase but are absorbed by metal objects.\n    (ii) State one precaution airport security workers should take when working near X-ray scanners.\n(c) A student claims gamma rays and X-rays are identical. Give one similarity and one difference between them.",
            marks: 8,
            modelAnswer: "(a)(i) Gamma rays are highly penetrating and pass through the plastic packaging to reach the instruments inside. They are ionising, so they damage the DNA of any bacteria or viruses on the instruments, killing them — sterilising without the need to open the packaging.\n(a)(ii) Gamma rays are ionising — they can damage the DNA of hospital workers, potentially causing mutations or cancer. Workers must be shielded and exposure minimised.\n(b)(i) X-rays are attenuated (absorbed) more by denser, higher atomic-number materials such as metals. The plastic and fabric of the suitcase allow most X-rays through, but dense metal objects absorb more X-rays, creating a shadow image on the detector.\n(b)(ii) Workers should stand behind lead shielding / maximise distance from the source / limit time of exposure / wear a radiation dosimeter badge to monitor exposure.\n(c) Similarity: both are EM waves with the same speed in a vacuum (c ≈ 3 × 10^8 m/s); both are ionising radiation. Difference: gamma rays originate from the nucleus of radioactive atoms; X-rays are produced by rapidly decelerating high-energy electrons (or by electron energy-level transitions). / Gamma rays typically have shorter wavelengths (higher frequencies) than X-rays, though the ranges overlap.",
            markScheme: [
              "(a)(i) Gamma rays penetrating — pass through plastic packaging (1 mark)",
              "(a)(i) Ionising — damage DNA of bacteria / kill micro-organisms (1 mark)",
              "(a)(ii) Ionising / can cause cancer / can damage DNA of workers (1 mark)",
              "(b)(i) X-rays absorbed more by denser / higher atomic number materials (1 mark)",
              "(b)(i) Metal absorbs more X-rays, creating a shadow / contrast in the image (1 mark)",
              "(b)(ii) Lead shielding / increase distance / minimise time / dosimeter badge (1 mark, any valid)",
              "(c) Similarity: both EM waves at same speed / both ionising (1 mark)",
              "(c) Difference: different origin (gamma from nucleus; X-rays from electrons) / or wavelength range / or production method (1 mark)",
            ],
            commonError: "In (b)(i), stating 'X-rays cannot pass through metal' — in fact X-rays are merely attenuated (absorbed more) by metal, not completely blocked; this is why a shadow image is formed.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "challenge",
            hints: [
              "For (a)(i): think about penetrating power of gamma rays and what ionising means for bacteria.",
              "For (b)(i): X-rays are absorbed MORE by denser materials — that's how the shadow image forms.",
              "For (c): both are EM waves but they are produced differently.",
            ],
            strategy: "Penetration + ionisation = sterilisation; density contrast = shadow imaging",
          },
        ],
      },
    ],
  },
};
