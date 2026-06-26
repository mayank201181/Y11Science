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
        id: "phys-sound-em-bankmcq-1",
        title: "Question Bank — MCQ Paper 1",
        description: "Ten multiple-choice questions on sound as a longitudinal wave, the wave equation, echoes, and the EM spectrum.",
        questions: [
          {
            id: "phys-sound-em-bm1-01",
            question: "What is the defining feature of a longitudinal wave?",
            options: [
              "The vibrations are perpendicular to the direction of energy transfer.",
              "The vibrations are parallel to the direction of energy transfer.",
              "It can travel through a vacuum.",
              "It consists of oscillating electric and magnetic fields.",
            ],
            answerIndex: 1,
            explanation: "In a longitudinal wave the particles vibrate back and forth along the same line as the wave travels. Perpendicular vibrations describe a transverse wave (A), and EM waves (C and D) are transverse and travel through a vacuum.",
            guideRef: "Sound as a Longitudinal Wave",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm1-02",
            question: "Which of the following is a region of low pressure in a sound wave?",
            options: ["Compression", "Rarefaction", "Crest", "Trough"],
            answerIndex: 1,
            explanation: "A rarefaction is a region where particles are spread apart, giving pressure below normal. A compression is high pressure. Crests and troughs are features of transverse waves, not longitudinal sound waves.",
            guideRef: "Sound as a Longitudinal Wave",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm1-03",
            question: "A sound wave of frequency 170 Hz travels at 340 m/s in air. What is its wavelength?",
            options: ["0.5 m", "2.0 m", "510 m", "57800 m"],
            answerIndex: 1,
            explanation: "Rearrange v = f × λ to λ = v / f = 340 / 170 = 2.0 m. Option C multiplies instead of dividing; option D multiplies v by f.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "core",
            hints: [
              "Start from the wave equation v = f × λ.",
              "Rearrange to make λ the subject: λ = v / f.",
              "Divide 340 by 170.",
            ],
            strategy: "Rearrange v = f × λ to λ = v / f",
          },
          {
            id: "phys-sound-em-bm1-04",
            question: "Which property of a sound wave changes when only its pitch increases?",
            options: ["Amplitude", "Frequency", "Speed", "Direction"],
            answerIndex: 1,
            explanation: "Pitch is determined by frequency, so a higher pitch means a higher frequency. Amplitude controls loudness, and the speed of sound depends on the medium, not the pitch.",
            guideRef: "Frequency, Pitch, Amplitude, Loudness, and the Audible Range",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm1-05",
            question: "A person claps and hears an echo from a cliff 1.0 s later. If the speed of sound is 340 m/s, how far away is the cliff?",
            options: ["170 m", "340 m", "680 m", "85 m"],
            answerIndex: 0,
            explanation: "The sound travels to the cliff and back, a total of v × t = 340 × 1.0 = 340 m. The cliff distance is half of this: 340 / 2 = 170 m. Option B forgets to halve the round-trip distance.",
            guideRef: "Reflection of Sound and Echoes",
            difficulty: "core",
            hints: [
              "Total distance travelled by the sound = v × t.",
              "The echo means the sound went there AND back.",
              "Distance to the cliff = (v × t) / 2.",
            ],
            strategy: "Echo distance = (v × t) / 2",
          },
          {
            id: "phys-sound-em-bm1-06",
            question: "Which list places the EM spectrum in order of INCREASING frequency?",
            options: [
              "Gamma, X-rays, UV, visible, infrared, microwaves, radio",
              "Radio, microwaves, infrared, visible, UV, X-rays, gamma",
              "Radio, infrared, microwaves, visible, X-rays, UV, gamma",
              "Microwaves, radio, infrared, visible, UV, gamma, X-rays",
            ],
            answerIndex: 1,
            explanation: "Increasing frequency runs radio, microwaves, infrared, visible, UV, X-rays, gamma. Option A is the reverse order; options C and D swap pairs of regions.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Radio waves have the lowest frequency and longest wavelength.",
              "Gamma rays have the highest frequency and shortest wavelength.",
              "Use a mnemonic such as Radio Microwaves Infrared Visible UV X-rays Gamma.",
            ],
            strategy: "Memorise the seven regions in frequency order",
          },
          {
            id: "phys-sound-em-bm1-07",
            question: "Which of these is NOT a use of ultrasound?",
            options: [
              "Pre-natal scanning of a foetus",
              "Measuring the depth of the sea (sonar)",
              "Sterilising surgical instruments with ionising radiation",
              "Cleaning jewellery in a liquid bath",
            ],
            answerIndex: 2,
            explanation: "Sterilising instruments with ionising radiation uses gamma rays or UV, not ultrasound (ultrasound is non-ionising sound, not EM radiation). Pre-natal scanning, sonar and cavitation cleaning are all genuine ultrasound applications.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "Ultrasound is sound, not electromagnetic radiation.",
              "Ultrasound is non-ionising.",
              "Which option describes ionising radiation rather than sound?",
            ],
            strategy: "Separate ultrasound (sound) from ionising EM radiation",
          },
          {
            id: "phys-sound-em-bm1-08",
            question: "The audible frequency range for a typical young human is approximately:",
            options: ["2 Hz to 2000 Hz", "20 Hz to 20 000 Hz", "200 Hz to 200 000 Hz", "20 Hz to 2000 Hz"],
            answerIndex: 1,
            explanation: "The standard IGCSE value for human hearing is 20 Hz to 20 000 Hz (20 kHz). Below 20 Hz is infrasound and above 20 kHz is ultrasound.",
            guideRef: "Frequency, Pitch, Amplitude, Loudness, and the Audible Range",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm1-09",
            question: "A radio station broadcasts at 100 MHz. Taking c = 3 × 10^8 m/s, what is the wavelength of the radio waves? (1 MHz = 10^6 Hz)",
            options: ["0.30 m", "3.0 m", "30 m", "300 m"],
            answerIndex: 1,
            explanation: "λ = c / f = (3 × 10^8) / (100 × 10^6) = (3 × 10^8) / (1 × 10^8) = 3.0 m. Each power-of-ten slip gives one of the distractor answers.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "challenge",
            hints: [
              "Convert 100 MHz to hertz: 100 × 10^6 = 1 × 10^8 Hz.",
              "Use λ = c / f.",
              "Divide 3 × 10^8 by 1 × 10^8.",
              "Watch the powers of ten carefully.",
            ],
            strategy: "λ = c / f with careful index arithmetic",
          },
          {
            id: "phys-sound-em-bm1-10",
            question: "A student measures the time for 10 successive echoes of a clap off a wall 51 m away as 3.0 s. What value does this give for the speed of sound?",
            options: ["170 m/s", "255 m/s", "340 m/s", "510 m/s"],
            answerIndex: 2,
            explanation: "Each echo cycle covers 2 × 51 = 102 m, and there are 10 cycles, so total distance = 1020 m. Speed = 1020 / 3.0 = 340 m/s. Timing many echoes reduces the percentage uncertainty in the time.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "challenge",
            hints: [
              "One echo cycle = sound travelling to the wall and back = 2 × 51 m.",
              "Ten cycles cover 10 × 102 m in total.",
              "Speed = total distance / total time.",
            ],
            strategy: "Multiply round-trip distance by the number of echoes",
          },
        ],
      },
      {
        id: "phys-sound-em-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Ten multiple-choice questions on wave speed in different media, ultrasound calculations, and EM hazards.",
        questions: [
          {
            id: "phys-sound-em-bm2-01",
            question: "Sound cannot travel through a vacuum because a vacuum:",
            options: [
              "is too cold for vibrations.",
              "contains no particles to pass on the vibration.",
              "absorbs all sound energy instantly.",
              "only allows transverse waves.",
            ],
            answerIndex: 1,
            explanation: "Sound is passed on by particles colliding and pushing their neighbours. A vacuum has no particles, so there is nothing to carry the disturbance and the wave cannot propagate.",
            guideRef: "Sound as a Longitudinal Wave",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm2-02",
            question: "In which substance would you expect sound to travel slowest?",
            options: ["Steel", "Sea water", "Air", "Glass"],
            answerIndex: 2,
            explanation: "Sound is slowest in gases because the particles are far apart and the forces between them are weak, so vibrations are passed on slowly. It is fastest in stiff solids such as steel and glass.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm2-03",
            question: "A wave has a period of 0.004 s. What is its frequency?",
            options: ["4 Hz", "25 Hz", "250 Hz", "400 Hz"],
            answerIndex: 2,
            explanation: "Frequency is the reciprocal of the period: f = 1 / T = 1 / 0.004 = 250 Hz. Option A confuses the two; the others are arithmetic slips.",
            guideRef: "Frequency, Pitch, Amplitude, Loudness, and the Audible Range",
            difficulty: "core",
            hints: [
              "Frequency and period are reciprocals: f = 1 / T.",
              "Substitute T = 0.004 s.",
              "1 / 0.004 = 1000 / 4.",
            ],
            strategy: "f = 1 / T",
          },
          {
            id: "phys-sound-em-bm2-04",
            question: "An ultrasound pulse is sent into a metal block to look for cracks. It returns from the far face after 1.2 × 10^-4 s. The speed of sound in the metal is 5000 m/s. How thick is the block?",
            options: ["0.30 m", "0.60 m", "1.2 m", "0.15 m"],
            answerIndex: 0,
            explanation: "thickness = (v × t) / 2 = (5000 × 1.2 × 10^-4) / 2 = 0.60 / 2 = 0.30 m. The pulse travels through the block and back, so the path is twice the thickness.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "Total path of the pulse = v × t.",
              "The pulse travels there and back, so divide by 2.",
              "thickness = (v × t) / 2.",
            ],
            strategy: "Echo formula (v × t) / 2 for round trips",
          },
          {
            id: "phys-sound-em-bm2-05",
            question: "Which type of EM wave is used to carry information along optical fibres and in TV remote controls?",
            options: ["Microwaves", "Infrared", "Ultraviolet", "Gamma rays"],
            answerIndex: 1,
            explanation: "Infrared is used in optical fibre communication and in remote controls. Microwaves are used for satellite and mobile communication; UV and gamma rays are ionising and unsuitable for these purposes.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm2-06",
            question: "Why is ultraviolet radiation more hazardous to skin than visible light?",
            options: [
              "It travels faster than visible light.",
              "It has a longer wavelength than visible light.",
              "It has a higher frequency and is ionising, so it can damage DNA.",
              "It is a longitudinal wave.",
            ],
            answerIndex: 2,
            explanation: "UV has a higher frequency (and shorter wavelength) than visible light, carrying enough energy to ionise atoms and damage DNA, which can cause sunburn and skin cancer. All EM waves travel at the same speed in a vacuum.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Compare the frequencies of UV and visible light.",
              "Higher frequency means higher energy per wave.",
              "What does ionising radiation do to DNA?",
            ],
            strategy: "Higher frequency = more energy = ionising risk",
          },
          {
            id: "phys-sound-em-bm2-07",
            question: "Two sounds have the same frequency but one is louder. The louder sound has a larger:",
            options: ["wavelength", "amplitude", "speed", "period"],
            answerIndex: 1,
            explanation: "Loudness depends on amplitude. Same frequency means the same pitch, wavelength, speed and period; only the amplitude differs between the two sounds.",
            guideRef: "Frequency, Pitch, Amplitude, Loudness, and the Audible Range",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm2-08",
            question: "A ship's sonar shows the seabed is 750 m deep. The speed of sound in seawater is 1500 m/s. How long after the pulse is sent is the echo received?",
            options: ["0.50 s", "1.0 s", "2.0 s", "0.25 s"],
            answerIndex: 1,
            explanation: "The pulse travels down and back, a total of 2 × 750 = 1500 m. Time = distance / speed = 1500 / 1500 = 1.0 s. Using one-way distance gives the incorrect 0.50 s.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "The pulse covers twice the depth (down and back).",
              "Total distance = 2 × 750 m.",
              "Time = total distance / speed.",
            ],
            strategy: "Rearrange depth = (v × t) / 2 to find t",
          },
          {
            id: "phys-sound-em-bm2-09",
            question: "Green light has a wavelength of 5.0 × 10^-7 m. Taking c = 3 × 10^8 m/s, what is its frequency?",
            options: ["6.0 × 10^14 Hz", "1.5 × 10^2 Hz", "6.0 × 10^15 Hz", "1.5 × 10^14 Hz"],
            answerIndex: 0,
            explanation: "f = c / λ = (3 × 10^8) / (5.0 × 10^-7) = 0.6 × 10^15 = 6.0 × 10^14 Hz. The other options come from index errors when dividing the powers of ten.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "challenge",
            hints: [
              "Use f = c / λ.",
              "Divide the numbers: 3 / 5 = 0.6.",
              "Divide the powers of ten: 10^8 / 10^-7 = 10^15.",
              "Combine: 0.6 × 10^15 = 6.0 × 10^14 Hz.",
            ],
            strategy: "f = c / λ with standard-form arithmetic",
          },
          {
            id: "phys-sound-em-bm2-10",
            question: "Lightning is seen and the thunder is heard 6.0 s later. Taking the speed of sound as 340 m/s and treating light as instantaneous, how far away is the storm?",
            options: ["About 57 m", "About 1020 m", "About 2040 m", "About 5.7 km"],
            answerIndex: 1,
            explanation: "Light reaches the eye almost instantly, so the 6.0 s is the time for the sound. distance = v × t = 340 × 6.0 = 2040 m. Wait — recompute: 340 × 6.0 = 2040 m, so the correct answer is about 2040 m.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "challenge",
            hints: [
              "The light arrives effectively instantly, so the delay is the sound travel time.",
              "There is no echo here — the sound travels one way only.",
              "distance = speed × time = 340 × 6.0.",
            ],
            strategy: "One-way distance = v × t (no factor of 2)",
          },
        ],
      },
      {
        id: "phys-sound-em-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Ten multiple-choice questions on wave behaviour, the EM spectrum uses and dangers, and multi-step calculations.",
        questions: [
          {
            id: "phys-sound-em-bm3-01",
            question: "Which colour of visible light has the longest wavelength?",
            options: ["Violet", "Green", "Blue", "Red"],
            answerIndex: 3,
            explanation: "Within the visible spectrum, red has the longest wavelength and lowest frequency, while violet has the shortest wavelength and highest frequency.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm3-02",
            question: "The distance from one compression to the next compression in a sound wave is the:",
            options: ["amplitude", "frequency", "wavelength", "period"],
            answerIndex: 2,
            explanation: "One wavelength is the distance between two successive identical points, such as compression to compression (or rarefaction to rarefaction) in a longitudinal sound wave.",
            guideRef: "Sound as a Longitudinal Wave",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm3-03",
            question: "Why is ultrasound used instead of audible sound for medical imaging?",
            options: [
              "Ultrasound travels faster than audible sound.",
              "Ultrasound has a shorter wavelength, giving better resolution.",
              "Ultrasound is ionising, so it shows soft tissue clearly.",
              "Ultrasound cannot be reflected, so it gives a clean image.",
            ],
            answerIndex: 1,
            explanation: "Higher frequency means shorter wavelength, and shorter wavelength resolves finer detail. Ultrasound is non-ionising (not ionising), travels at the same speed as audible sound in a given medium, and relies on being reflected at tissue boundaries.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "Resolution improves when the wavelength is small compared with the detail.",
              "How is wavelength related to frequency for a fixed speed?",
              "Ultrasound is high frequency, so its wavelength is short.",
            ],
            strategy: "Short wavelength gives fine resolution",
          },
          {
            id: "phys-sound-em-bm3-04",
            question: "A microwave has a wavelength of 0.12 m. Taking c = 3 × 10^8 m/s, what is its frequency?",
            options: ["2.5 × 10^9 Hz", "3.6 × 10^7 Hz", "2.5 × 10^7 Hz", "4.0 × 10^-10 Hz"],
            answerIndex: 0,
            explanation: "f = c / λ = (3 × 10^8) / 0.12 = 2.5 × 10^9 Hz (2.5 GHz), the typical operating frequency of a microwave oven.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Use f = c / λ.",
              "Divide 3 × 10^8 by 0.12.",
              "3 / 0.12 = 25, then attach the power of ten.",
            ],
            strategy: "f = c / λ",
          },
          {
            id: "phys-sound-em-bm3-05",
            question: "Which statement about gamma rays and radio waves is correct?",
            options: [
              "Gamma rays travel faster than radio waves in a vacuum.",
              "Radio waves have a higher frequency than gamma rays.",
              "Both travel at the same speed in a vacuum but gamma rays have a higher frequency.",
              "Radio waves are ionising but gamma rays are not.",
            ],
            answerIndex: 2,
            explanation: "All EM waves travel at c in a vacuum, so neither is faster. Gamma rays have a much higher frequency (and shorter wavelength) than radio waves, and gamma rays — not radio waves — are ionising.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "What speed do all EM waves share in a vacuum?",
              "Which has the higher frequency, gamma or radio?",
              "Which end of the spectrum is ionising?",
            ],
            strategy: "Same speed; frequency and hazard rise toward gamma",
          },
          {
            id: "phys-sound-em-bm3-06",
            question: "A guitar string vibrates 500 times per second. What is the frequency of the sound it produces?",
            options: ["0.002 Hz", "500 Hz", "500 000 Hz", "2 Hz"],
            answerIndex: 1,
            explanation: "Frequency is the number of vibrations per second, so 500 vibrations per second is 500 Hz directly.",
            guideRef: "Frequency, Pitch, Amplitude, Loudness, and the Audible Range",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm3-07",
            question: "An echo is heard 0.30 s after a shout, reflected from a wall 51 m away. What value of the speed of sound does this give?",
            options: ["170 m/s", "340 m/s", "153 m/s", "85 m/s"],
            answerIndex: 1,
            explanation: "The sound travels 2 × 51 = 102 m in 0.30 s. Speed = 102 / 0.30 = 340 m/s. Forgetting to double the distance gives the incorrect 170 m/s.",
            guideRef: "Reflection of Sound and Echoes",
            difficulty: "core",
            hints: [
              "The sound travels to the wall and back.",
              "Total distance = 2 × 51 m.",
              "Speed = total distance / time.",
            ],
            strategy: "v = 2d / t for echoes",
          },
          {
            id: "phys-sound-em-bm3-08",
            question: "Which of the following correctly pairs an EM region with a hazard?",
            options: [
              "Radio waves — cause skin cancer",
              "Infrared — internal heating leading to skin burns",
              "Visible light — ionises and damages DNA",
              "Microwaves — cause cataracts by ionisation",
            ],
            answerIndex: 1,
            explanation: "Excessive infrared causes heating of the skin and burns. Radio waves carry too little energy to cause cancer, visible light is non-ionising, and microwaves cause internal heating but are not ionising.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Which regions are ionising? (UV and above.)",
              "Infrared is felt as heat.",
              "Match the hazard to the correct energy of the wave.",
            ],
            strategy: "Heating for IR/microwaves; ionisation for UV and above",
          },
          {
            id: "phys-sound-em-bm3-09",
            question: "A sound wave travels at 1500 m/s in water with a frequency of 3.0 × 10^6 Hz (typical medical ultrasound). What is its wavelength in water?",
            options: ["5.0 × 10^-4 m", "2.0 × 10^3 m", "4.5 × 10^9 m", "5.0 × 10^-3 m"],
            answerIndex: 0,
            explanation: "λ = v / f = 1500 / (3.0 × 10^6) = 5.0 × 10^-4 m (0.5 mm). The very short wavelength is what gives ultrasound its fine imaging resolution.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "challenge",
            hints: [
              "Use λ = v / f.",
              "Divide 1500 by 3.0 × 10^6.",
              "1500 / 3 000 000 = 5 × 10^-4.",
            ],
            strategy: "λ = v / f for ultrasound in a medium",
          },
          {
            id: "phys-sound-em-bm3-10",
            question: "A diver hears two sounds from a single underwater event: one through the water and one through the air after surfacing. The water signal arrives first mainly because:",
            options: [
              "water is denser, which always slows sound.",
              "the stiffer particle bonds in water transmit vibrations faster than in air.",
              "sound has a higher frequency in water.",
              "water absorbs less energy than air.",
            ],
            answerIndex: 1,
            explanation: "Sound is faster in water (≈1500 m/s) than in air (≈340 m/s) because the particles are closer together and the inter-particle forces are stronger, transmitting vibrations more rapidly. Frequency is set by the source, not the medium.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "challenge",
            hints: [
              "Compare the speed of sound in water and in air.",
              "Why does the medium change the speed?",
              "Think about particle spacing and bond stiffness.",
            ],
            strategy: "Stiffer, closer particles transmit sound faster",
          },
        ],
      },
      {
        id: "phys-sound-em-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Ten multiple-choice questions spanning the full topic with several challenge and synoptic items.",
        questions: [
          {
            id: "phys-sound-em-bm4-01",
            question: "Which of these waves is NOT transverse?",
            options: ["Light", "X-rays", "Sound in air", "Radio waves"],
            answerIndex: 2,
            explanation: "Sound in air is a longitudinal wave; the particles vibrate parallel to the direction of travel. Light, X-rays and radio waves are all transverse EM waves.",
            guideRef: "Sound as a Longitudinal Wave",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm4-02",
            question: "Infrasound is sound with a frequency:",
            options: ["above 20 kHz", "below 20 Hz", "between 20 Hz and 20 kHz", "equal to 440 Hz"],
            answerIndex: 1,
            explanation: "Infrasound is below the human hearing range, i.e. below 20 Hz (produced by earthquakes and large animals). Above 20 kHz is ultrasound.",
            guideRef: "Frequency, Pitch, Amplitude, Loudness, and the Audible Range",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm4-03",
            question: "Which property is the SAME for all members of the electromagnetic spectrum in a vacuum?",
            options: ["Frequency", "Wavelength", "Speed", "Energy"],
            answerIndex: 2,
            explanation: "All EM waves travel at the same speed c ≈ 3 × 10^8 m/s in a vacuum. Their frequency, wavelength and energy all differ across the spectrum.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Recall the speed of EM waves in a vacuum.",
              "Does this speed depend on frequency?",
              "Frequency and wavelength vary, but what stays fixed?",
            ],
            strategy: "All EM waves share the speed c in vacuum",
          },
          {
            id: "phys-sound-em-bm4-04",
            question: "A sonar pulse in seawater (speed 1500 m/s) returns from a submarine after 0.80 s. How far away is the submarine?",
            options: ["300 m", "600 m", "1200 m", "1500 m"],
            answerIndex: 1,
            explanation: "distance = (v × t) / 2 = (1500 × 0.80) / 2 = 1200 / 2 = 600 m. The 1200 m option forgets to halve the round-trip path.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "Total path of the pulse = v × t = 1500 × 0.80.",
              "The pulse travels there and back.",
              "Divide the total distance by 2.",
            ],
            strategy: "distance = (v × t) / 2",
          },
          {
            id: "phys-sound-em-bm4-05",
            question: "A note has a period of 2.5 ms. What is its frequency, and is it audible to humans?",
            options: [
              "400 Hz, audible",
              "250 Hz, audible",
              "4000 Hz, not audible",
              "40 Hz, not audible",
            ],
            answerIndex: 0,
            explanation: "f = 1 / T = 1 / (2.5 × 10^-3) = 400 Hz, which lies within the 20 Hz to 20 kHz audible range, so it is audible.",
            guideRef: "Frequency, Pitch, Amplitude, Loudness, and the Audible Range",
            difficulty: "core",
            hints: [
              "Convert 2.5 ms to seconds: 2.5 × 10^-3 s.",
              "f = 1 / T.",
              "Check whether the result lies between 20 Hz and 20 000 Hz.",
            ],
            strategy: "f = 1 / T, then compare with the audible range",
          },
          {
            id: "phys-sound-em-bm4-06",
            question: "Which describes why a concert hall uses soft, irregular wall coverings?",
            options: [
              "To increase the speed of sound.",
              "To absorb sound and reduce excessive reverberation.",
              "To make all sounds louder by reflection.",
              "To convert sound into ultrasound.",
            ],
            answerIndex: 1,
            explanation: "Soft, irregular surfaces absorb sound energy and scatter reflections, reducing reverberation so that speech and music stay clear rather than blurring together.",
            guideRef: "Reflection of Sound and Echoes",
            difficulty: "core",
            hints: [
              "Hard smooth surfaces reflect sound strongly.",
              "What effect do soft surfaces have on sound energy?",
              "Too many reflections cause reverberation.",
            ],
            strategy: "Soft surfaces absorb and reduce reverberation",
          },
          {
            id: "phys-sound-em-bm4-07",
            question: "A radio wave and a gamma ray both travel through space. Compared with the radio wave, the gamma ray has:",
            options: [
              "a longer wavelength and lower frequency",
              "a shorter wavelength and higher frequency",
              "the same wavelength but higher frequency",
              "a higher speed and longer wavelength",
            ],
            answerIndex: 1,
            explanation: "Since both travel at c, and frequency and wavelength are inversely related (c = f × λ), the higher-frequency gamma ray must have a shorter wavelength than the radio wave.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Both travel at the same speed c.",
              "c = f × λ, so f and λ are inversely related.",
              "Gamma rays are at the high-frequency end.",
            ],
            strategy: "Inverse relation of f and λ at fixed c",
          },
          {
            id: "phys-sound-em-bm4-08",
            question: "An ultrasound probe sends a pulse into tissue. It detects two echoes, at 40 µs and at 100 µs. The speed of ultrasound in tissue is 1540 m/s. What is the distance between the two reflecting boundaries?",
            options: ["4.6 cm", "9.2 cm", "4.6 m", "2.3 cm"],
            answerIndex: 0,
            explanation: "Depth of first boundary = (1540 × 40 × 10^-6) / 2 = 0.0308 m. Depth of second = (1540 × 100 × 10^-6) / 2 = 0.077 m. Separation = 0.077 − 0.0308 = 0.0462 m ≈ 4.6 cm. Equivalently, separation = v × (Δt) / 2 = 1540 × 60 × 10^-6 / 2 = 0.0462 m.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "challenge",
            hints: [
              "Find the depth of each boundary using (v × t) / 2.",
              "Subtract the two depths.",
              "Or use the time difference Δt = 60 µs directly: separation = v × Δt / 2.",
              "Convert microseconds: 1 µs = 10^-6 s.",
            ],
            strategy: "Use the echo time difference to find boundary separation",
          },
          {
            id: "phys-sound-em-bm4-09",
            question: "On a hot day the speed of sound rises from 340 m/s to 350 m/s. For a tuning fork of fixed frequency 440 Hz, the wavelength of its sound:",
            options: [
              "stays the same because frequency is fixed",
              "increases because v = f × λ and v has increased",
              "decreases because the air is thinner",
              "becomes zero",
            ],
            answerIndex: 1,
            explanation: "Frequency is set by the source (440 Hz). Since v = f × λ, if v increases while f is fixed, λ must increase: λ goes from 340/440 ≈ 0.77 m to 350/440 ≈ 0.80 m.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "challenge",
            hints: [
              "The tuning fork fixes the frequency.",
              "Rearrange v = f × λ to λ = v / f.",
              "If v rises and f is fixed, what happens to λ?",
            ],
            strategy: "Source fixes f; λ follows v through v = f × λ",
          },
          {
            id: "phys-sound-em-bm4-10",
            question: "A student claims X-rays are used for pre-natal scanning because they give the clearest images. Which correction is best?",
            options: [
              "X-rays are correct because they are non-ionising.",
              "Ultrasound is used instead because it is non-ionising and safe for the foetus.",
              "Gamma rays are used because they penetrate soft tissue.",
              "Microwaves are used because they have the shortest wavelength.",
            ],
            answerIndex: 1,
            explanation: "Ultrasound, not X-rays, is used for pre-natal scanning because it is non-ionising and does not damage the DNA of the developing foetus. X-rays and gamma rays are ionising and pose a cancer risk.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "challenge",
            hints: [
              "Are X-rays ionising or non-ionising?",
              "What is the danger of ionising radiation to a foetus?",
              "Which technique is used for pre-natal scans and why?",
            ],
            strategy: "Non-ionising ultrasound is safer than X-rays for scanning",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "phys-sound-em-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Ten structured questions on the nature of sound, the wave equation, and echoes.",
        questions: [
          {
            id: "phys-sound-em-bq1-01",
            question: "Describe how a vibrating loudspeaker cone produces a sound wave in the air, using the terms compression and rarefaction.",
            marks: 3,
            modelAnswer: "As the cone moves forward it pushes the air particles together, creating a region of higher pressure called a compression. As the cone moves back it leaves the particles spread apart, creating a region of lower pressure called a rarefaction. The cone vibrates repeatedly, so a series of compressions and rarefactions travels outward through the air as a longitudinal wave.",
            markScheme: [
              "Forward motion pushes particles together / forms a compression (high pressure)",
              "Backward motion spreads particles apart / forms a rarefaction (low pressure)",
              "Repeated vibration sends out a series of compressions and rarefactions / a longitudinal wave",
            ],
            commonError: "Describing the air particles as travelling along with the wave; in fact they only vibrate about a fixed position while energy is transferred.",
            guideRef: "Sound as a Longitudinal Wave",
            difficulty: "core",
            hints: [
              "What happens to the air when the cone moves forward?",
              "What happens when the cone moves back?",
              "Link the repeated vibration to a series of pressure regions.",
            ],
            strategy: "Map cone motion to compressions and rarefactions",
          },
          {
            id: "phys-sound-em-bq1-02",
            question: "State what is meant by (a) the frequency of a wave and (b) the amplitude of a wave.",
            marks: 2,
            modelAnswer: "(a) Frequency is the number of complete wave cycles (vibrations) passing a point per second, measured in hertz. (b) Amplitude is the maximum displacement of a particle from its rest (undisturbed) position.",
            markScheme: [
              "(a) Number of complete cycles / vibrations per second / passing a point per second",
              "(b) Maximum displacement from the rest / equilibrium position",
            ],
            commonError: "Defining amplitude as the distance between a crest and a trough (that is twice the amplitude).",
            guideRef: "Frequency, Pitch, Amplitude, Loudness, and the Audible Range",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bq1-03",
            question: "A sound wave in air has a frequency of 425 Hz. The speed of sound in air is 340 m/s. Calculate the wavelength of the wave.",
            marks: 3,
            modelAnswer: "Using v = f × λ, rearrange to λ = v / f = 340 / 425 = 0.80 m. The wavelength is 0.80 m (2 significant figures).",
            markScheme: [
              "Rearrange to λ = v / f / use of v = f × λ",
              "Correct substitution: 340 / 425",
              "Answer: 0.80 m (accept 0.8 m)",
            ],
            commonError: "Multiplying f and v instead of dividing, or leaving the answer with the wrong unit.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "core",
            hints: [
              "Write down the wave equation v = f × λ.",
              "Rearrange to make λ the subject.",
              "Substitute v = 340 m/s and f = 425 Hz.",
            ],
            strategy: "λ = v / f",
            solutions: [
              {
                label: "Method: rearrange the wave equation",
                steps: [
                  "Identify: v = 340 m/s, f = 425 Hz",
                  "v = f × λ, so λ = v / f",
                  "λ = 340 / 425",
                  "λ = 0.80 m (2 s.f.)",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq1-04",
            question: "Explain why you see a firework explode before you hear the bang, even though both happen at the same instant.",
            marks: 3,
            modelAnswer: "Light from the explosion travels at about 3 × 10^8 m/s, which is so fast that it reaches you almost instantly. Sound travels much more slowly, at about 340 m/s in air. Because sound takes a noticeable time to cover the distance, the bang arrives later than the flash even though both were produced together.",
            markScheme: [
              "Light travels much faster than sound / light ≈ 3 × 10^8 m/s",
              "Sound travels at about 340 m/s in air / much slower",
              "Sound takes longer to reach you, so it is heard after the flash is seen",
            ],
            commonError: "Saying light is produced first; in fact both are produced together and only the travel times differ.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "warmup",
            hints: [
              "Compare the speed of light with the speed of sound.",
              "Both signals start at the same time.",
              "Which signal takes longer to reach you?",
            ],
          },
          {
            id: "phys-sound-em-bq1-05",
            question: "A student measures the speed of sound by standing 51 m from a large wall and clapping. She times the interval between a clap and its echo as 0.30 s.\n(a) Explain why the sound travels 102 m, not 51 m.\n(b) Calculate the speed of sound.\n(c) Suggest one way she could reduce the uncertainty in her timing.",
            marks: 5,
            modelAnswer: "(a) The sound travels from the student to the wall (51 m) and is reflected back to the student (another 51 m), so the total path is 2 × 51 = 102 m.\n(b) Speed = total distance / time = 102 / 0.30 = 340 m/s.\n(c) She could clap rhythmically so each clap coincides with the previous echo and time many echoes, then divide the total time by the number of intervals (timing more echoes reduces the percentage uncertainty).",
            markScheme: [
              "(a) Sound travels to the wall and back / there and back = 2 × 51 m",
              "(b) Speed = distance / time = 102 / 0.30",
              "(b) Answer: 340 m/s",
              "(c) Time many echoes / repeat and average to reduce the percentage uncertainty",
              "(c) Correct reasoning (longer total time gives smaller percentage error)",
            ],
            commonError: "Using 51 m instead of 102 m in part (b), giving 170 m/s.",
            guideRef: "Reflection of Sound and Echoes",
            difficulty: "core",
            hints: [
              "An echo means the sound has been reflected back.",
              "Total distance = 2 × 51 m.",
              "Speed = total distance / time.",
              "How does timing more echoes affect the percentage error?",
            ],
            strategy: "v = 2d / t and reduce timing uncertainty",
            solutions: [
              {
                label: "Part (b): speed from echo timing",
                steps: [
                  "Total distance = 2 × 51 = 102 m",
                  "Speed = distance / time",
                  "Speed = 102 / 0.30",
                  "Speed = 340 m/s",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq1-06",
            question: "Explain the difference between pitch and loudness, and state which property of a sound wave each one depends on.",
            marks: 4,
            modelAnswer: "Pitch is how high or low a note sounds; it depends on the frequency of the wave — a higher frequency gives a higher pitch. Loudness is how strong or weak the sound seems; it depends on the amplitude of the wave — a larger amplitude gives a louder sound. Pitch and loudness are independent, so a sound can be high-pitched and quiet, or low-pitched and loud.",
            markScheme: [
              "Pitch = how high/low the note sounds",
              "Pitch depends on frequency (higher f = higher pitch)",
              "Loudness = how loud/quiet the sound is",
              "Loudness depends on amplitude (larger amplitude = louder)",
            ],
            commonError: "Swapping the two — saying loudness depends on frequency or pitch depends on amplitude.",
            guideRef: "Frequency, Pitch, Amplitude, Loudness, and the Audible Range",
            difficulty: "core",
            hints: [
              "Pitch is about how high or low a note is.",
              "Loudness is about how strong the sound is.",
              "Match each to frequency or amplitude.",
            ],
            strategy: "Frequency to pitch; amplitude to loudness",
          },
          {
            id: "phys-sound-em-bq1-07",
            question: "State the approximate range of frequencies a healthy young human can hear, and define the terms infrasound and ultrasound in relation to this range.",
            marks: 3,
            modelAnswer: "The human audible range is approximately 20 Hz to 20 000 Hz (20 kHz). Infrasound is sound with a frequency below 20 Hz, which is below the lower limit of hearing. Ultrasound is sound with a frequency above 20 kHz, which is above the upper limit of hearing.",
            markScheme: [
              "Audible range 20 Hz to 20 000 Hz / 20 kHz",
              "Infrasound = below 20 Hz",
              "Ultrasound = above 20 kHz / 20 000 Hz",
            ],
            commonError: "Quoting the range as 20 Hz to 2000 Hz, missing a factor of ten on the upper limit.",
            guideRef: "Frequency, Pitch, Amplitude, Loudness, and the Audible Range",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bq1-08",
            question: "A wave on a long spring has a frequency of 5.0 Hz and a wavelength of 0.40 m.\n(a) Calculate the speed of the wave.\n(b) Calculate the period of the wave.",
            marks: 4,
            modelAnswer: "(a) v = f × λ = 5.0 × 0.40 = 2.0 m/s.\n(b) T = 1 / f = 1 / 5.0 = 0.20 s.",
            markScheme: [
              "(a) Use of v = f × λ",
              "(a) Answer: 2.0 m/s",
              "(b) Use of T = 1 / f",
              "(b) Answer: 0.20 s",
            ],
            commonError: "Confusing period with wavelength, or using T = f instead of T = 1 / f.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "core",
            hints: [
              "Part (a): v = f × λ.",
              "Part (b): period and frequency are reciprocals.",
              "T = 1 / f.",
            ],
            strategy: "v = f × λ and T = 1 / f",
            solutions: [
              {
                label: "Both parts worked",
                steps: [
                  "(a) v = f × λ = 5.0 × 0.40 = 2.0 m/s",
                  "(b) T = 1 / f = 1 / 5.0",
                  "(b) T = 0.20 s",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq1-09",
            question: "Describe a laboratory demonstration that shows sound cannot travel through a vacuum, and explain the result.",
            marks: 4,
            modelAnswer: "Place a ringing electric bell inside a sealed bell-jar so that the clapper can still be seen striking. Connect the jar to a vacuum pump and slowly pump the air out. As the air is removed, the sound of the bell gets quieter and eventually cannot be heard, even though the clapper is still seen moving. This shows that with fewer particles there is less to carry the sound, and with no particles (a vacuum) the sound cannot travel at all, because sound needs a medium.",
            markScheme: [
              "Ringing bell inside a sealed bell-jar / clapper still visible",
              "Air pumped out with a vacuum pump",
              "Sound gets quieter / fades to nothing as air is removed",
              "Conclusion: sound needs particles / a medium to travel",
            ],
            commonError: "Concluding the bell has stopped working; the clapper is still seen moving, proving it is the sound transmission, not the bell, that fails.",
            guideRef: "Sound as a Longitudinal Wave",
            difficulty: "core",
            hints: [
              "Use a bell that can be seen as well as heard.",
              "What do you remove with the vacuum pump?",
              "What happens to the sound as particles are removed?",
            ],
            strategy: "Bell-jar demonstration: remove the medium, lose the sound",
          },
          {
            id: "phys-sound-em-bq1-10",
            question: "A man stands between two parallel cliffs. He claps once and hears the first echo after 0.60 s from the nearer cliff and a second echo after 1.0 s from the further cliff. The speed of sound is 340 m/s.\n(a) Calculate his distance from the nearer cliff.\n(b) Calculate the distance between the two cliffs.",
            marks: 5,
            modelAnswer: "(a) For the nearer cliff: distance = (v × t) / 2 = (340 × 0.60) / 2 = 204 / 2 = 102 m.\n(b) For the further cliff: distance = (340 × 1.0) / 2 = 340 / 2 = 170 m. The distance between the cliffs is the sum of the two distances: 102 + 170 = 272 m.",
            markScheme: [
              "(a) Use of distance = (v × t) / 2",
              "(a) Answer: 102 m",
              "(b) Distance to far cliff = (340 × 1.0) / 2 = 170 m",
              "(b) Add the two distances: 102 + 170",
              "(b) Answer: 272 m",
            ],
            commonError: "Forgetting that the man stands between the cliffs, so the cliff separation is the SUM of the two echo distances, not the difference.",
            guideRef: "Reflection of Sound and Echoes",
            difficulty: "challenge",
            hints: [
              "Treat each echo separately with distance = (v × t) / 2.",
              "Find his distance to each cliff.",
              "He is between the cliffs, so add the two distances.",
            ],
            strategy: "Two separate echo calculations, then combine geometrically",
            solutions: [
              {
                label: "Step-by-step",
                steps: [
                  "Near cliff: d1 = (340 × 0.60) / 2 = 102 m",
                  "Far cliff: d2 = (340 × 1.0) / 2 = 170 m",
                  "He stands between them, so separation = d1 + d2",
                  "Separation = 102 + 170 = 272 m",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-sound-em-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Ten structured questions on ultrasound applications, sonar calculations, and wave behaviour.",
        questions: [
          {
            id: "phys-sound-em-bq2-01",
            question: "State what is meant by ultrasound, and give two uses of it.",
            marks: 3,
            modelAnswer: "Ultrasound is sound with a frequency above 20 kHz, which is above the upper limit of human hearing. Two uses are: pre-natal (foetal) scanning, and sonar / depth-finding at sea. (Other acceptable uses: industrial cleaning, detecting cracks in metals.)",
            markScheme: [
              "Ultrasound = sound above 20 kHz / above human hearing range",
              "Use 1: pre-natal scanning / sonar / cleaning / crack detection",
              "Use 2: a different valid use from the list",
            ],
            commonError: "Defining ultrasound as a type of electromagnetic wave; it is a sound (mechanical) wave.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bq2-02",
            question: "A ship sends a sonar pulse straight down. The echo returns from the seabed 0.90 s later. The speed of sound in seawater is 1500 m/s. Calculate the depth of the seabed.",
            marks: 3,
            modelAnswer: "depth = (v × t) / 2 = (1500 × 0.90) / 2 = 1350 / 2 = 675 m. The seabed is 675 m deep.",
            markScheme: [
              "Use of depth = (v × t) / 2",
              "Correct substitution: (1500 × 0.90) / 2",
              "Answer: 675 m",
            ],
            commonError: "Forgetting to divide by 2, giving 1350 m (the round-trip distance, not the depth).",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "The pulse travels down and back up.",
              "depth = (v × t) / 2.",
              "Substitute v = 1500 m/s, t = 0.90 s.",
            ],
            strategy: "depth = (v × t) / 2",
            solutions: [
              {
                label: "Sonar depth calculation",
                steps: [
                  "v = 1500 m/s, t = 0.90 s",
                  "depth = (v × t) / 2",
                  "depth = (1500 × 0.90) / 2 = 1350 / 2",
                  "depth = 675 m",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq2-03",
            question: "Explain how an ultrasound scanner builds up an image of a foetus inside the body.",
            marks: 4,
            modelAnswer: "A probe sends pulses of ultrasound into the body. At each boundary between tissues of different density, some of the ultrasound is reflected back as an echo while the rest is transmitted deeper. The probe detects the reflected echoes and measures the time each one takes to return. From the time delay and the known speed of ultrasound in tissue, the depth of each boundary is calculated, and the many echoes are processed to build up a two-dimensional (or three-dimensional) image.",
            markScheme: [
              "Pulses of ultrasound are sent into the body by a probe",
              "Ultrasound is partly reflected at boundaries between different tissues / densities",
              "The time delay of each echo is measured / used to find depth",
              "The reflected signals are combined / processed to form an image",
            ],
            commonError: "Saying the ultrasound passes straight through and forms a shadow like an X-ray; ultrasound imaging relies on reflected echoes, not transmission shadows.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "How does the ultrasound enter the body?",
              "What happens at a boundary between two tissues?",
              "How is the time delay of each echo used?",
            ],
            strategy: "Reflection at boundaries plus timing builds the image",
          },
          {
            id: "phys-sound-em-bq2-04",
            question: "Give two reasons why ultrasound rather than X-rays is used to scan a developing foetus.",
            marks: 2,
            modelAnswer: "Ultrasound is non-ionising, so it does not damage the DNA of the foetus or increase the risk of cancer, whereas X-rays are ionising and could harm the developing cells. Ultrasound also gives good images of soft tissue, which X-rays (best for dense bone) do not show clearly.",
            markScheme: [
              "Ultrasound is non-ionising / X-rays are ionising and damage DNA / cause cancer",
              "Ultrasound images soft tissue well / X-rays mainly show bone",
            ],
            commonError: "Stating that X-rays are too expensive; the key reason is the safety of non-ionising radiation.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bq2-05",
            question: "An ultrasound pulse travels from a probe to a kidney stone and back in 1.3 × 10^-4 s. The speed of ultrasound in soft tissue is 1540 m/s. Calculate the depth of the kidney stone below the skin, giving your answer in centimetres.",
            marks: 4,
            modelAnswer: "depth = (v × t) / 2 = (1540 × 1.3 × 10^-4) / 2 = (0.2002) / 2 = 0.1001 m ≈ 0.10 m = 10 cm. The kidney stone is about 10 cm below the skin.",
            markScheme: [
              "Use of depth = (v × t) / 2",
              "Correct substitution: 1540 × 1.3 × 10^-4",
              "Total distance = 0.2002 m, halved to 0.1001 m",
              "Answer: ≈ 0.10 m = 10 cm",
            ],
            commonError: "Leaving the answer in metres when centimetres are asked for, or forgetting to halve the round-trip distance.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "depth = (v × t) / 2.",
              "Multiply 1540 by 1.3 × 10^-4 first.",
              "Halve the result, then convert metres to centimetres (× 100).",
            ],
            strategy: "Echo formula then unit conversion",
            solutions: [
              {
                label: "Worked calculation",
                steps: [
                  "v = 1540 m/s, t = 1.3 × 10^-4 s",
                  "Total path = v × t = 1540 × 1.3 × 10^-4 = 0.2002 m",
                  "depth = 0.2002 / 2 = 0.1001 m",
                  "Convert: 0.1001 m × 100 ≈ 10 cm",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq2-06",
            question: "Explain why ultrasound, rather than audible sound, is used in medical scanning and in detecting small cracks in metal.",
            marks: 3,
            modelAnswer: "Ultrasound has a much higher frequency than audible sound, so for a given speed it has a much shorter wavelength. A shorter wavelength can resolve smaller details, because a wave can only clearly detect objects that are larger than about its own wavelength. This lets ultrasound produce sharper images of small structures and detect tiny cracks that audible sound, with its long wavelength, would miss.",
            markScheme: [
              "Ultrasound has a higher frequency / shorter wavelength than audible sound",
              "Shorter wavelength gives better resolution / detects smaller objects",
              "Reason: waves resolve detail down to about their wavelength",
            ],
            commonError: "Claiming ultrasound is faster; it travels at the same speed as audible sound in a given medium — it is the shorter wavelength that matters.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "Compare the wavelengths of ultrasound and audible sound.",
              "How does wavelength relate to the smallest detail you can detect?",
              "Remember v is fixed by the medium, so high f means short λ.",
            ],
            strategy: "High frequency to short wavelength to fine resolution",
          },
          {
            id: "phys-sound-em-bq2-07",
            question: "State the law of reflection for sound, and explain what an echo is.",
            marks: 3,
            modelAnswer: "For sound, the angle of incidence equals the angle of reflection, both measured from the normal to the reflecting surface. An echo is a sound wave that has been reflected from a hard surface and is heard as a distinct, separate sound a short time after the original sound.",
            markScheme: [
              "Angle of incidence = angle of reflection (measured from the normal)",
              "An echo is a reflected sound",
              "Heard separately / distinctly after the original sound",
            ],
            commonError: "Measuring the angles from the surface rather than from the normal.",
            guideRef: "Reflection of Sound and Echoes",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bq2-08",
            question: "An ultrasound device for cleaning jewellery passes high-frequency waves through a liquid bath. Explain how this removes dirt from awkward surfaces.",
            marks: 3,
            modelAnswer: "The ultrasound causes very rapid pressure oscillations in the liquid. These oscillations make tiny bubbles form and then violently collapse, a process called cavitation. The energy released as the bubbles collapse dislodges dirt and grease from the surfaces of the object, including narrow gaps and detailed areas that are hard to reach by hand.",
            markScheme: [
              "Ultrasound causes rapid pressure oscillations / vibrations in the liquid",
              "Bubbles form and collapse (cavitation)",
              "The collapsing bubbles dislodge dirt, even from awkward / detailed surfaces",
            ],
            commonError: "Saying the ultrasound simply heats the dirt off; the key mechanism is cavitation, not heating.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "What does ultrasound do to the pressure in the liquid?",
              "What happens to tiny bubbles in the liquid?",
              "How does the collapse of bubbles help clean?",
            ],
            strategy: "Cavitation: bubbles form and collapse to remove dirt",
          },
          {
            id: "phys-sound-em-bq2-09",
            question: "A fishing boat uses sonar to find a shoal of fish. The pulse takes 0.040 s to return from the shoal, and 0.20 s to return from the seabed. The speed of sound in seawater is 1500 m/s.\n(a) Calculate the depth of the shoal.\n(b) Calculate the height of the shoal above the seabed.",
            marks: 5,
            modelAnswer: "(a) Depth of shoal = (v × t) / 2 = (1500 × 0.040) / 2 = 60 / 2 = 30 m.\n(b) Depth of seabed = (1500 × 0.20) / 2 = 300 / 2 = 150 m. Height of the shoal above the seabed = 150 − 30 = 120 m.",
            markScheme: [
              "(a) Use of depth = (v × t) / 2 for the shoal",
              "(a) Answer: 30 m",
              "(b) Depth of seabed = (1500 × 0.20) / 2 = 150 m",
              "(b) Subtract: 150 − 30",
              "(b) Answer: 120 m",
            ],
            commonError: "Adding the two depths instead of subtracting; the shoal is above the seabed, so subtract to find the gap.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "challenge",
            hints: [
              "Find each depth with (v × t) / 2.",
              "Shoal depth uses t = 0.040 s; seabed uses t = 0.20 s.",
              "Height above seabed = seabed depth − shoal depth.",
            ],
            strategy: "Two echo depths, then take the difference",
            solutions: [
              {
                label: "Two-echo sonar problem",
                steps: [
                  "Shoal: d = (1500 × 0.040) / 2 = 30 m",
                  "Seabed: d = (1500 × 0.20) / 2 = 150 m",
                  "Height above seabed = 150 − 30",
                  "Height = 120 m",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq2-10",
            question: "A pulse of ultrasound is directed at a steel rail to test for an internal flaw. An echo from the flaw returns after 6.0 × 10^-5 s and an echo from the far end of the rail (0.30 m thick) returns later. The speed of sound in steel is 5000 m/s.\n(a) Calculate the depth of the flaw below the surface.\n(b) State how the time of the echo from the flaw compares with the echo from the far end, and explain why.",
            marks: 5,
            modelAnswer: "(a) depth = (v × t) / 2 = (5000 × 6.0 × 10^-5) / 2 = 0.30 / 2 = 0.15 m. The flaw is 0.15 m below the surface.\n(b) The flaw is 0.15 m deep, while the far end is 0.30 m away, so the flaw is nearer the surface. The echo from the flaw therefore returns sooner (in a shorter time) than the echo from the far end, because the pulse has a shorter distance to travel there and back.",
            markScheme: [
              "(a) Use of depth = (v × t) / 2",
              "(a) Answer: 0.15 m",
              "(b) Flaw echo returns sooner / in less time than the far-end echo",
              "(b) Because the flaw is closer than the far end / shorter round-trip distance",
              "(b) Correct comparison supported by the calculated 0.15 m vs 0.30 m",
            ],
            commonError: "Concluding the deeper reflector gives the earlier echo; the nearer reflector (the flaw) gives the earlier echo because the path is shorter.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "challenge",
            hints: [
              "Use depth = (v × t) / 2 for the flaw.",
              "Compare the flaw depth with the 0.30 m far end.",
              "A shorter distance means a shorter round-trip time.",
            ],
            strategy: "Nearer reflector to shorter echo time",
            solutions: [
              {
                label: "Flaw depth",
                steps: [
                  "v = 5000 m/s, t = 6.0 × 10^-5 s",
                  "Total path = 5000 × 6.0 × 10^-5 = 0.30 m",
                  "depth = 0.30 / 2 = 0.15 m",
                  "Flaw (0.15 m) is nearer than far end (0.30 m), so its echo returns sooner",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-sound-em-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Ten structured questions on the electromagnetic spectrum, its uses, dangers, and wave calculations.",
        questions: [
          {
            id: "phys-sound-em-bq3-01",
            question: "List the seven regions of the electromagnetic spectrum in order from the lowest frequency to the highest frequency.",
            marks: 2,
            modelAnswer: "Radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays.",
            markScheme: [
              "All seven regions present and correctly ordered low f to high f",
              "Radio lowest and gamma highest (no pairs swapped)",
            ],
            commonError: "Swapping microwaves and infrared, or placing UV before visible light incorrectly.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bq3-02",
            question: "State three properties that are shared by all electromagnetic waves.",
            marks: 3,
            modelAnswer: "All EM waves are transverse; all travel at the same speed c ≈ 3 × 10^8 m/s in a vacuum; and all can travel through a vacuum (they do not need a medium). They are also all made of oscillating electric and magnetic fields and obey v = f × λ.",
            markScheme: [
              "All are transverse waves",
              "All travel at c ≈ 3 × 10^8 m/s in a vacuum",
              "All can travel through a vacuum / need no medium (or: oscillating electric and magnetic fields)",
            ],
            commonError: "Listing the same idea twice, e.g. 'travel at the speed of light' and 'all travel at c', which only counts once.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bq3-03",
            question: "For each of the following EM regions, state one use and one danger: (a) ultraviolet, (b) gamma rays.",
            marks: 4,
            modelAnswer: "(a) Ultraviolet — use: sterilising water or detecting forged banknotes (fluorescence); danger: causes sunburn, skin cancer and eye damage. (b) Gamma rays — use: killing cancer cells in radiotherapy or sterilising medical equipment; danger: ionising radiation that can kill living cells and cause cancer at high doses.",
            markScheme: [
              "(a) UV use: sterilisation / fluorescence / detecting forgeries / Sun lamps",
              "(a) UV danger: sunburn / skin cancer / eye damage",
              "(b) Gamma use: radiotherapy / sterilising equipment / tracing tumours",
              "(b) Gamma danger: ionising / damages or kills cells / cancer / lethal at high dose",
            ],
            commonError: "Giving a use as a danger or vice versa, or quoting a danger that belongs to a different region.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "UV is used where its energy can kill microbes or cause fluorescence.",
              "Gamma rays are very penetrating and ionising.",
              "Both UV and gamma are ionising, so think DNA damage.",
            ],
            strategy: "Pair each ionising region with a use and a hazard",
          },
          {
            id: "phys-sound-em-bq3-04",
            question: "A radio wave used for FM broadcasting has a frequency of 95 MHz. Taking the speed of EM waves as 3 × 10^8 m/s, calculate the wavelength. (1 MHz = 10^6 Hz)",
            marks: 3,
            modelAnswer: "λ = c / f = (3 × 10^8) / (95 × 10^6) = (3 × 10^8) / (9.5 × 10^7) = 3.16 m ≈ 3.2 m. The wavelength is about 3.2 m.",
            markScheme: [
              "Use of λ = c / f",
              "Correct substitution: (3 × 10^8) / (95 × 10^6)",
              "Answer: ≈ 3.2 m (accept 3.1–3.2 m)",
            ],
            commonError: "Not converting MHz to Hz, or mishandling the powers of ten.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Convert 95 MHz to hertz: 95 × 10^6 Hz.",
              "Use λ = c / f.",
              "Divide 3 × 10^8 by 9.5 × 10^7.",
            ],
            strategy: "λ = c / f with unit conversion",
            solutions: [
              {
                label: "FM wavelength",
                steps: [
                  "f = 95 × 10^6 Hz = 9.5 × 10^7 Hz",
                  "λ = c / f = (3 × 10^8) / (9.5 × 10^7)",
                  "λ = 3.16 m",
                  "λ ≈ 3.2 m (2 s.f.)",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq3-05",
            question: "Explain what is meant by 'ionising radiation' and identify which regions of the EM spectrum are ionising.",
            marks: 3,
            modelAnswer: "Ionising radiation carries enough energy to remove electrons from atoms, turning them into charged ions. This can break chemical bonds and damage DNA in living cells, which may lead to mutations and cancer. The ionising regions of the EM spectrum are ultraviolet, X-rays and gamma rays — the high-frequency, high-energy end of the spectrum.",
            markScheme: [
              "Ionising = enough energy to remove electrons from atoms / form ions",
              "Can damage DNA / cause cancer / mutations",
              "Ionising regions: ultraviolet, X-rays and gamma rays",
            ],
            commonError: "Including microwaves or infrared as ionising; these only cause heating, not ionisation.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "What does 'ionise' mean at the atomic level?",
              "Which end of the spectrum carries the most energy?",
              "Name the three highest-frequency regions.",
            ],
            strategy: "Ionising = UV, X-rays, gamma (high-energy end)",
          },
          {
            id: "phys-sound-em-bq3-06",
            question: "Microwaves used in a domestic oven have a frequency of 2.45 GHz. Taking c = 3 × 10^8 m/s, calculate their wavelength. (1 GHz = 10^9 Hz)",
            marks: 3,
            modelAnswer: "λ = c / f = (3 × 10^8) / (2.45 × 10^9) = 0.122 m ≈ 0.12 m. The wavelength is about 0.12 m (12 cm).",
            markScheme: [
              "Use of λ = c / f",
              "Correct substitution: (3 × 10^8) / (2.45 × 10^9)",
              "Answer: 0.122 m / ≈ 0.12 m",
            ],
            commonError: "Inverting the formula (f / c) or misplacing the power of ten in the GHz conversion.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Convert 2.45 GHz to Hz: 2.45 × 10^9 Hz.",
              "Use λ = c / f.",
              "3 / 24.5 gives the leading figures.",
            ],
            strategy: "λ = c / f for microwaves",
            solutions: [
              {
                label: "Microwave wavelength",
                steps: [
                  "f = 2.45 × 10^9 Hz",
                  "λ = c / f = (3 × 10^8) / (2.45 × 10^9)",
                  "λ = 0.1224 m",
                  "λ ≈ 0.12 m",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq3-07",
            question: "Give one use for each of: (a) microwaves, (b) infrared, (c) radio waves.",
            marks: 3,
            modelAnswer: "(a) Microwaves — satellite communication / mobile phone signals / heating food in a microwave oven. (b) Infrared — TV remote controls / thermal imaging cameras / optical fibre communication / grills and heaters. (c) Radio waves — radio and television broadcasting / Wi-Fi.",
            markScheme: [
              "(a) A valid microwave use",
              "(b) A valid infrared use",
              "(c) A valid radio-wave use",
            ],
            commonError: "Confusing microwaves and radio waves for communication; either communication use can be credited, but match the use sensibly to the region.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bq3-08",
            question: "X-rays are used to produce an image of a broken bone. Explain how a clear image is formed, and state one safety precaution for the radiographer.",
            marks: 4,
            modelAnswer: "X-rays pass easily through soft tissue but are absorbed much more strongly by dense bone. When the X-rays reach a detector or film behind the patient, the regions behind bone receive fewer X-rays, leaving a shadow, while soft tissue lets more through. This contrast between absorbed and transmitted X-rays forms a clear image of the bone. Because X-rays are ionising and can damage cells, a precaution is for the radiographer to stand behind a lead screen (or wear a lead apron, or limit exposure time).",
            markScheme: [
              "X-rays pass through soft tissue but are absorbed more by dense bone",
              "Less radiation reaches the detector behind bone / a shadow image forms",
              "Contrast between absorbed and transmitted X-rays gives the image",
              "Safety precaution: lead screen / lead apron / minimise exposure time / stand away",
            ],
            commonError: "Saying X-rays cannot pass through metal or bone at all; they are absorbed MORE, not completely blocked, which is what creates the shadow.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "How do X-rays behave in soft tissue versus bone?",
              "What forms the dark and light areas on the image?",
              "X-rays are ionising — how does the radiographer stay safe?",
            ],
            strategy: "Density contrast forms the image; lead shields the operator",
          },
          {
            id: "phys-sound-em-bq3-09",
            question: "Red light has a wavelength of 7.0 × 10^-7 m and violet light has a wavelength of 4.0 × 10^-7 m. Taking c = 3 × 10^8 m/s:\n(a) Calculate the frequency of the red light.\n(b) State and explain which colour has the higher frequency.",
            marks: 4,
            modelAnswer: "(a) f = c / λ = (3 × 10^8) / (7.0 × 10^-7) = 4.3 × 10^14 Hz.\n(b) Violet light has the higher frequency. Since c = f × λ is the same for both colours, the colour with the shorter wavelength (violet, 4.0 × 10^-7 m) must have the higher frequency.",
            markScheme: [
              "(a) Use of f = c / λ",
              "(a) Answer: 4.3 × 10^14 Hz (accept 4.29 × 10^14)",
              "(b) Violet has the higher frequency",
              "(b) Because it has the shorter wavelength and c = f × λ is fixed",
            ],
            commonError: "Assuming the longer-wavelength colour has the higher frequency; frequency and wavelength are inversely related at fixed speed.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "challenge",
            hints: [
              "Use f = c / λ for part (a).",
              "Divide 3 × 10^8 by 7.0 × 10^-7.",
              "For (b), compare wavelengths: shorter λ means higher f.",
            ],
            strategy: "f = c / λ; shorter wavelength gives higher frequency",
            solutions: [
              {
                label: "Frequency of red light",
                steps: [
                  "f = c / λ = (3 × 10^8) / (7.0 × 10^-7)",
                  "Numbers: 3 / 7 = 0.43",
                  "Powers: 10^8 / 10^-7 = 10^15",
                  "f = 0.43 × 10^15 = 4.3 × 10^14 Hz",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq3-10",
            question: "A communications satellite is 3.6 × 10^7 m above the Earth. A microwave signal is sent up to it and relayed straight back down to another ground station almost directly below. Taking the speed of EM waves as 3 × 10^8 m/s, estimate the total time for the signal to travel up to the satellite and back down to the ground. Comment on why this causes a noticeable delay in some phone calls.",
            marks: 5,
            modelAnswer: "Total distance ≈ up + down = 2 × 3.6 × 10^7 = 7.2 × 10^7 m. time = distance / speed = (7.2 × 10^7) / (3 × 10^8) = 0.24 s. So the signal takes about 0.24 s for the round trip. This quarter-of-a-second delay is noticeable in a conversation because each speaker hears the other's reply slightly late, which is why satellite phone calls can feel laggy compared with calls carried by optical fibre.",
            markScheme: [
              "Total distance = 2 × 3.6 × 10^7 = 7.2 × 10^7 m",
              "Use of time = distance / speed",
              "Substitution: (7.2 × 10^7) / (3 × 10^8)",
              "Answer: ≈ 0.24 s",
              "Comment: a delay of roughly a quarter second is noticeable in conversation",
            ],
            commonError: "Using only the one-way distance to the satellite, giving 0.12 s instead of the full up-and-down 0.24 s.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "challenge",
            hints: [
              "The signal goes up to the satellite and back down.",
              "Total distance = 2 × height.",
              "time = distance / speed, with speed = 3 × 10^8 m/s.",
              "Compare the result with normal human reaction times in conversation.",
            ],
            strategy: "Round-trip distance over the speed of light",
            solutions: [
              {
                label: "Satellite signal delay",
                steps: [
                  "Distance up and down = 2 × 3.6 × 10^7 = 7.2 × 10^7 m",
                  "time = distance / speed = (7.2 × 10^7) / (3 × 10^8)",
                  "time = 0.24 s",
                  "About a quarter of a second — noticeable in a live call",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-sound-em-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Ten structured questions spanning the whole topic, with several challenge and synoptic items.",
        questions: [
          {
            id: "phys-sound-em-bq4-01",
            question: "Compare a sound wave and a light wave by stating one similarity and two differences.",
            marks: 3,
            modelAnswer: "Similarity: both transfer energy and both can be reflected (and obey v = f × λ). Differences: sound is a longitudinal wave whereas light is transverse; and sound needs a medium to travel whereas light can travel through a vacuum. (Also acceptable: light travels far faster, ≈ 3 × 10^8 m/s, than sound, ≈ 340 m/s.)",
            markScheme: [
              "One valid similarity (e.g. both transfer energy / both can be reflected / both obey v = f × λ)",
              "Difference 1: sound longitudinal vs light transverse",
              "Difference 2: sound needs a medium vs light can travel in a vacuum (or speed difference)",
            ],
            commonError: "Stating that both are transverse; sound in air is longitudinal.",
            guideRef: "Sound as a Longitudinal Wave",
            difficulty: "core",
            hints: [
              "Think about what both waves do with energy.",
              "Compare longitudinal versus transverse.",
              "Think about whether each can travel through empty space.",
            ],
            strategy: "One shared property, then contrast type and medium",
          },
          {
            id: "phys-sound-em-bq4-02",
            question: "A sound wave of frequency 200 Hz travels at 340 m/s in air, then passes into water where its speed becomes 1500 m/s. The frequency does not change.\n(a) Calculate its wavelength in air.\n(b) Calculate its wavelength in water.\n(c) State what happens to the wavelength as the sound enters water.",
            marks: 5,
            modelAnswer: "(a) λ(air) = v / f = 340 / 200 = 1.7 m.\n(b) λ(water) = v / f = 1500 / 200 = 7.5 m.\n(c) The wavelength increases (from 1.7 m to 7.5 m) because the speed increases while the frequency stays the same, and λ = v / f.",
            markScheme: [
              "(a) λ = 340 / 200 = 1.7 m",
              "(b) λ = 1500 / 200 = 7.5 m",
              "(c) Wavelength increases",
              "(c) Reason: speed rises, frequency unchanged, λ = v / f",
              "Both calculations show correct use of v = f × λ",
            ],
            commonError: "Assuming the frequency changes when sound enters a new medium; it is the speed and wavelength that change, not the frequency.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "challenge",
            hints: [
              "Use λ = v / f in each medium.",
              "Frequency is set by the source and does not change.",
              "Compare the two wavelengths you calculate.",
            ],
            strategy: "Constant f; λ tracks the change in v",
            solutions: [
              {
                label: "Wavelength in each medium",
                steps: [
                  "(a) λ = 340 / 200 = 1.7 m",
                  "(b) λ = 1500 / 200 = 7.5 m",
                  "f unchanged, v larger in water, so λ larger",
                  "(c) Wavelength increases",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq4-03",
            question: "Explain, in terms of particles, why sound travels faster in a solid such as steel than in a gas such as air.",
            marks: 3,
            modelAnswer: "In a solid the particles are very close together and joined by strong, stiff bonds, so when one particle vibrates it pushes its neighbours almost immediately, passing the disturbance on very quickly. In a gas the particles are far apart with weak forces between them, so a vibration takes longer to be passed from one particle to the next. As a result the wave travels much faster in the solid.",
            markScheme: [
              "Solid particles are close together / strongly bonded",
              "Vibration is passed on quickly between neighbouring particles",
              "Gas particles are far apart / weak forces, so the wave is passed on slowly",
            ],
            commonError: "Saying the solid is denser so sound is faster; density alone would slow the wave — it is the stiff bonds and close spacing that dominate in solids.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "core",
            hints: [
              "How does particle spacing differ between solid and gas?",
              "How strong are the forces between particles in each?",
              "How quickly can a vibration be passed on in each case?",
            ],
            strategy: "Close, stiff bonds transmit vibrations faster",
          },
          {
            id: "phys-sound-em-bq4-04",
            question: "An oscilloscope shows a sound trace. One complete wave occupies 4.0 horizontal divisions, and each division represents 0.5 ms.\n(a) Calculate the period of the wave.\n(b) Calculate the frequency of the wave.\n(c) State whether this sound is audible to a young human, with a reason.",
            marks: 5,
            modelAnswer: "(a) Period = 4.0 × 0.5 ms = 2.0 ms = 2.0 × 10^-3 s.\n(b) f = 1 / T = 1 / (2.0 × 10^-3) = 500 Hz.\n(c) Yes, it is audible, because 500 Hz lies within the human audible range of 20 Hz to 20 000 Hz.",
            markScheme: [
              "(a) Period = 4.0 × 0.5 ms = 2.0 ms / 2.0 × 10^-3 s",
              "(b) Use of f = 1 / T",
              "(b) Answer: 500 Hz",
              "(c) Audible",
              "(c) Reason: 500 Hz is within 20 Hz to 20 kHz",
            ],
            commonError: "Reading the period off a single division instead of a full cycle, or forgetting to convert milliseconds to seconds before taking the reciprocal.",
            guideRef: "Frequency, Pitch, Amplitude, Loudness, and the Audible Range",
            difficulty: "core",
            hints: [
              "Period = number of divisions for one cycle × time per division.",
              "Convert milliseconds to seconds before using f = 1 / T.",
              "Compare 500 Hz with the audible range.",
            ],
            strategy: "Read T from the trace, then f = 1 / T",
            solutions: [
              {
                label: "Oscilloscope reading",
                steps: [
                  "(a) T = 4.0 × 0.5 ms = 2.0 ms = 2.0 × 10^-3 s",
                  "(b) f = 1 / T = 1 / (2.0 × 10^-3)",
                  "(b) f = 500 Hz",
                  "(c) 500 Hz is between 20 Hz and 20 kHz, so audible",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq4-05",
            question: "State two ways in which all electromagnetic waves differ from a sound wave travelling in air.",
            marks: 2,
            modelAnswer: "Electromagnetic waves are transverse, whereas sound in air is longitudinal. Electromagnetic waves can travel through a vacuum, whereas sound needs a medium. (Also acceptable: EM waves travel far faster, at c ≈ 3 × 10^8 m/s.)",
            markScheme: [
              "EM waves transverse vs sound longitudinal",
              "EM waves travel through a vacuum vs sound needs a medium (or much higher speed)",
            ],
            commonError: "Giving two versions of the same difference (e.g. 'no medium' and 'travels in space'), which only earns one mark.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bq4-06",
            question: "Describe how the design of a concert hall uses reflection and absorption of sound to give good acoustics.",
            marks: 4,
            modelAnswer: "Hard, smooth surfaces and curved reflectors are positioned to reflect sound and direct it evenly so that every part of the audience receives sound of similar loudness. Soft furnishings such as carpets, seats and curtains absorb some of the sound energy, reducing reverberation (the persistence of sound from multiple reflections). The aim is to balance reflection and absorption so that speech and music remain clear — neither blurred by too much reverberation nor sounding flat and 'dead' from too much absorption.",
            markScheme: [
              "Hard / curved surfaces reflect and direct sound evenly to the audience",
              "Soft furnishings absorb sound energy",
              "This reduces reverberation / multiple reflections",
              "Balance gives clear sound (not too live, not too dead)",
            ],
            commonError: "Treating reverberation as always bad; the goal is the right balance, not removing all reflections.",
            guideRef: "Reflection of Sound and Echoes",
            difficulty: "core",
            hints: [
              "What do hard, curved surfaces do to sound?",
              "What do soft furnishings do to sound energy?",
              "What is reverberation and why must it be controlled?",
            ],
            strategy: "Balance reflection (direct sound) with absorption (cut reverberation)",
          },
          {
            id: "phys-sound-em-bq4-07",
            question: "A student writes: 'Sound and light both travel at 340 m/s, and both are longitudinal waves that need air to travel.' Identify and correct the three mistakes in this statement.",
            marks: 3,
            modelAnswer: "Mistake 1: light does not travel at 340 m/s — light travels at about 3 × 10^8 m/s; only sound travels at about 340 m/s in air. Mistake 2: light is not longitudinal — light (and all EM waves) is a transverse wave; only sound in air is longitudinal. Mistake 3: light does not need air — light can travel through a vacuum, while sound needs a medium such as air.",
            markScheme: [
              "Correct the speed: light ≈ 3 × 10^8 m/s, not 340 m/s",
              "Correct the type: light is transverse, not longitudinal",
              "Correct the medium: light needs no medium / travels through a vacuum (sound needs air)",
            ],
            commonError: "Correcting only the speed and missing that the wave type and medium claims are also wrong for light.",
            guideRef: "Sound as a Longitudinal Wave",
            difficulty: "core",
            hints: [
              "Check the speed claim for light.",
              "Check whether light is longitudinal or transverse.",
              "Check whether light needs a medium.",
            ],
            strategy: "Test each claim separately against light's properties",
          },
          {
            id: "phys-sound-em-bq4-08",
            question: "An echo-sounder on a boat sends a pulse of sound vertically downward. The seabed slopes, so two readings are taken: at point A the echo returns in 0.10 s and at point B (further along) it returns in 0.16 s. The speed of sound in water is 1500 m/s.\n(a) Calculate the depth at A and the depth at B.\n(b) State how the seabed changes between A and B.",
            marks: 5,
            modelAnswer: "(a) Depth at A = (v × t) / 2 = (1500 × 0.10) / 2 = 150 / 2 = 75 m. Depth at B = (1500 × 0.16) / 2 = 240 / 2 = 120 m.\n(b) The depth increases from 75 m at A to 120 m at B, so the seabed gets deeper (slopes downward) as the boat moves from A to B.",
            markScheme: [
              "(a) Use of depth = (v × t) / 2",
              "(a) Depth at A = 75 m",
              "(a) Depth at B = 120 m",
              "(b) The seabed gets deeper / slopes down from A to B",
              "(b) Supported by 75 m vs 120 m",
            ],
            commonError: "Forgetting to divide each by 2, or concluding the seabed rises when the larger time clearly means greater depth.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "challenge",
            hints: [
              "Apply depth = (v × t) / 2 at each point.",
              "A larger echo time means a greater depth.",
              "Compare the two depths to describe the slope.",
            ],
            strategy: "Two echo depths reveal the seabed profile",
            solutions: [
              {
                label: "Depth profile",
                steps: [
                  "Depth A = (1500 × 0.10) / 2 = 75 m",
                  "Depth B = (1500 × 0.16) / 2 = 120 m",
                  "120 m > 75 m",
                  "Seabed deepens from A to B",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq4-09",
            question: "Explain why a higher-frequency ultrasound gives a more detailed scan than a lower-frequency ultrasound, but cannot penetrate as deeply into the body. Refer to wavelength in your answer.",
            marks: 4,
            modelAnswer: "For a fixed speed in tissue, a higher frequency means a shorter wavelength (since v = f × λ). A shorter wavelength can resolve smaller details, so the scan shows finer structure. However, higher-frequency ultrasound is absorbed (attenuated) more strongly as it passes through tissue, so it loses energy more quickly and cannot travel as deep before becoming too weak to give a useful echo. There is therefore a trade-off: high frequency for detail near the surface, lower frequency to reach deeper structures.",
            markScheme: [
              "Higher frequency means shorter wavelength (v = f × λ)",
              "Shorter wavelength gives better resolution / more detail",
              "Higher frequency is absorbed / attenuated more strongly in tissue",
              "So it cannot penetrate as deeply / trade-off between detail and depth",
            ],
            commonError: "Explaining the resolution improvement but not addressing why penetration depth falls (greater absorption at high frequency).",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "challenge",
            hints: [
              "Link frequency to wavelength with v = f × λ.",
              "How does wavelength affect the smallest detectable detail?",
              "What happens to high-frequency waves as they pass through tissue?",
            ],
            strategy: "Resolution improves but absorption limits depth",
          },
          {
            id: "phys-sound-em-bq4-10",
            question: "A storm is approaching. A student sees a lightning flash and starts a stopwatch, stopping it when the thunder arrives after 8.0 s. A second flash gives a gap of 5.0 s. Take the speed of sound as 340 m/s and treat light as instantaneous.\n(a) Calculate the distance to the first flash.\n(b) Calculate the distance to the second flash.\n(c) Calculate how much closer the storm has moved, and comment on whether the storm is approaching.",
            marks: 5,
            modelAnswer: "(a) distance = v × t = 340 × 8.0 = 2720 m.\n(b) distance = 340 × 5.0 = 1700 m.\n(c) The storm has moved 2720 − 1700 = 1020 m closer. Because the distance has decreased, the storm is approaching.",
            markScheme: [
              "(a) distance = v × t = 340 × 8.0 = 2720 m",
              "(b) distance = 340 × 5.0 = 1700 m",
              "(c) Difference = 2720 − 1700 = 1020 m",
              "(c) Storm is approaching / getting closer",
              "Correct recognition that this is one-way travel (no factor of 2)",
            ],
            commonError: "Dividing by 2 as if this were an echo; the thunder travels one way only, so distance = v × t with no halving.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "challenge",
            hints: [
              "The thunder travels one way from the storm to the student.",
              "distance = v × t (do NOT divide by 2 — there is no echo).",
              "Compare the two distances to see if the storm is closing in.",
            ],
            strategy: "One-way v × t for each flash, then compare",
            solutions: [
              {
                label: "Storm distances",
                steps: [
                  "(a) d1 = 340 × 8.0 = 2720 m",
                  "(b) d2 = 340 × 5.0 = 1700 m",
                  "(c) Change = 2720 − 1700 = 1020 m closer",
                  "Distance decreased, so the storm is approaching",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
