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
      heading: "Oscilloscope Traces: Comparing Pitch and Loudness",
      body: `A **cathode-ray oscilloscope (CRO)** displays a sound wave as a waveform on a screen, letting us *see* the difference between sounds. A microphone converts the sound into a varying voltage, and the oscilloscope plots that voltage (vertical axis) against time (horizontal axis).

Although a sound wave is **longitudinal**, the oscilloscope draws it as a **transverse-looking wave** — this is just a graph of pressure (or microphone voltage) against time, not a picture of the particles moving.

Two control settings let you read the trace:

- The **time-base** sets how much time each horizontal square (division) represents — it controls the horizontal scale.
- The **gain (y-gain)** sets how much voltage each vertical square represents — it controls the vertical scale.

**Reading pitch from a trace (with the same settings):**

- **Higher pitch → higher frequency → waves are closer together** (more cycles fit across the screen; each cycle is narrower).
- **Lower pitch → lower frequency → waves are more spread out** (fewer cycles, each cycle is wider).

**Reading loudness from a trace (with the same settings):**

- **Louder → larger amplitude → taller peaks and deeper troughs.**
- **Quieter → smaller amplitude → shorter peaks.**

Frequency and amplitude are independent, so any combination is possible: a sound can be high-pitched and quiet (close-together, short waves) or low-pitched and loud (spread-out, tall waves).

**Worked example — finding frequency from a trace:** If the time-base is set to 2 ms per division and one complete wave occupies 4 divisions, then the period is T = 4 × 2 = 8 ms = 0.008 s, so the frequency is f = 1 / T = 1 / 0.008 = 125 Hz.`,
      diagrams: [
        {
          caption: "Four oscilloscope traces compared (same time-base and gain settings)",
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 260" role="img" aria-label="Four oscilloscope traces comparing pitch and loudness: low quiet, low loud, high quiet, high loud">
  <rect width="320" height="260" fill="#0f172a"/>
  <text x="160" y="16" text-anchor="middle" font-size="11" fill="#b7bce0" font-family="sans-serif" font-weight="bold">Oscilloscope Traces (same settings)</text>
  <!-- Trace 1: low pitch, quiet -->
  <rect x="14" y="28" width="130" height="80" fill="#111c33" stroke="#334155" stroke-width="1"/>
  <line x1="14" y1="68" x2="144" y2="68" stroke="#334155" stroke-width="0.7" stroke-dasharray="3,3"/>
  <path d="M14,68 Q34,52 54,68 T94,68 T134,68" fill="none" stroke="#34d399" stroke-width="2"/>
  <text x="79" y="103" text-anchor="middle" font-size="8.5" fill="#9ca3af" font-family="sans-serif">low pitch, quiet</text>
  <!-- Trace 2: low pitch, loud -->
  <rect x="176" y="28" width="130" height="80" fill="#111c33" stroke="#334155" stroke-width="1"/>
  <line x1="176" y1="68" x2="306" y2="68" stroke="#334155" stroke-width="0.7" stroke-dasharray="3,3"/>
  <path d="M176,68 Q196,38 216,68 T256,68 T296,68" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="241" y="103" text-anchor="middle" font-size="8.5" fill="#9ca3af" font-family="sans-serif">low pitch, loud</text>
  <!-- Trace 3: high pitch, quiet -->
  <rect x="14" y="150" width="130" height="80" fill="#111c33" stroke="#334155" stroke-width="1"/>
  <line x1="14" y1="190" x2="144" y2="190" stroke="#334155" stroke-width="0.7" stroke-dasharray="3,3"/>
  <path d="M14,190 Q24,178 34,190 T54,190 T74,190 T94,190 T114,190 T134,190" fill="none" stroke="#fbbf24" stroke-width="2"/>
  <text x="79" y="225" text-anchor="middle" font-size="8.5" fill="#9ca3af" font-family="sans-serif">high pitch, quiet</text>
  <!-- Trace 4: high pitch, loud -->
  <rect x="176" y="150" width="130" height="80" fill="#111c33" stroke="#334155" stroke-width="1"/>
  <line x1="176" y1="190" x2="306" y2="190" stroke="#334155" stroke-width="0.7" stroke-dasharray="3,3"/>
  <path d="M176,190 Q186,165 196,190 T216,190 T236,190 T256,190 T276,190 T296,190" fill="none" stroke="#fb7185" stroke-width="2"/>
  <text x="241" y="225" text-anchor="middle" font-size="8.5" fill="#9ca3af" font-family="sans-serif">high pitch, loud</text>
  <!-- axes note -->
  <text x="160" y="248" text-anchor="middle" font-size="8" fill="#b7bce0" font-family="sans-serif">vertical = amplitude (loudness); spacing = frequency (pitch)</text>
</svg>`,
        },
      ],
      keyPoints: [
        "An oscilloscope plots a microphone's voltage (vertical) against time (horizontal), showing the sound as a waveform.",
        "Closer-together waves = higher frequency = higher pitch (compared at the same time-base).",
        "Taller waves = larger amplitude = louder sound (compared at the same gain).",
        "Frequency (pitch) and amplitude (loudness) can be read independently from the trace.",
        "Period T can be read off the trace and used in f = 1 / T to find the frequency.",
      ],
      discovery: {
        problem: "Two traces are shown on the same oscilloscope settings. Trace A has waves twice as close together as Trace B, but Trace B's peaks are twice as tall. Which sound is higher-pitched, and which is louder?",
        idea: "Closer-together waves mean a higher frequency, so Trace A is the higher-pitched sound. Taller peaks mean a larger amplitude, so Trace B is the louder sound. Pitch and loudness are independent, so the higher-pitched sound here is also the quieter one.",
      },
      whyItWorks: "The horizontal axis is time, so the horizontal width of one cycle is the period T. A higher-frequency sound completes more cycles per second, so each cycle takes less time and appears narrower — the waves look bunched up. The vertical axis tracks pressure/voltage, which grows with the wave's amplitude, so a louder (higher-energy) sound reaches further from the centre line.",
      strategies: ["Horizontal spacing → pitch; vertical height → loudness", "Read period off the trace, then f = 1 / T", "Compare traces only when settings are the same"],
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
      "On an oscilloscope trace: closer-together waves = higher pitch; taller waves = louder (compared at the same settings).",
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
      { front: "On an oscilloscope, how do you tell which of two sounds (same settings) has the higher pitch?", back: "The higher-pitched sound has the higher frequency, so its waves are closer together (more cycles across the screen, each cycle narrower)." },
      { front: "On an oscilloscope, how do you tell which of two sounds (same settings) is louder?", back: "The louder sound has the larger amplitude, so its trace has taller peaks and deeper troughs (greater height from the centre line)." },
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
      { term: "Oscilloscope (CRO)", definition: "An instrument that displays how a voltage (e.g. from a microphone) varies with time, drawing a sound as a waveform so pitch (wave spacing) and loudness (wave height) can be compared." },
      { term: "Pitch", definition: "How high or low a sound seems; determined by frequency — a higher frequency gives a higher pitch." },
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
        description: "Ten multiple-choice questions spanning sound waves, the audible range, echoes, ultrasound, and the EM spectrum.",
        questions: [
          {
            id: "phys-sound-em-bm1-01",
            question: "What causes a sound to be produced in the first place?",
            options: [
              "A vibrating object",
              "A steady (non-vibrating) electric current",
              "A region of vacuum",
              "An oscillating magnetic field with no source",
            ],
            answerIndex: 0,
            explanation: "All sounds originate from a vibrating object — a guitar string, a speaker cone, vocal cords. The vibration pushes and pulls the surrounding medium, creating compressions and rarefactions. A vacuum cannot produce or carry sound, and EM-field oscillations describe light, not sound.",
            guideRef: "Sound as a Longitudinal Wave",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm1-02",
            question: "In a sound wave, a compression is a region where the air particles are:",
            options: [
              "spread far apart, giving below-normal pressure",
              "pushed close together, giving above-normal pressure",
              "vibrating at right angles to the wave direction",
              "permanently displaced in the travel direction",
            ],
            answerIndex: 1,
            explanation: "A compression is where particles are squeezed together, so the local pressure is above normal. A rarefaction is the opposite (spread apart, below-normal pressure). Particles only oscillate about a fixed rest position — they are not permanently carried along.",
            guideRef: "Sound as a Longitudinal Wave",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm1-03",
            question: "Which statement about the audible range of human hearing is correct?",
            options: [
              "2 Hz to 2 000 Hz",
              "20 Hz to 2 000 Hz",
              "20 Hz to 20 000 Hz",
              "200 Hz to 200 000 Hz",
            ],
            answerIndex: 2,
            explanation: "The accepted human audible range is 20 Hz to 20 000 Hz (20 kHz). Below 20 Hz is infrasound; above 20 kHz is ultrasound.",
            guideRef: "Frequency, Pitch, Amplitude, Loudness, and the Audible Range",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm1-04",
            question: "A sound wave in air has a frequency of 170 Hz. Taking the speed of sound in air as 340 m/s, what is its wavelength?",
            options: ["0.5 m", "2.0 m", "510 m", "57 800 m"],
            answerIndex: 1,
            explanation: "Rearrange v = f × λ to λ = v / f = 340 / 170 = 2.0 m. Option D multiplies instead of dividing; option A inverts the division.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "core",
            hints: [
              "Start from v = f × λ.",
              "Rearrange to make λ the subject: λ = v / f.",
              "Substitute v = 340 m/s and f = 170 Hz.",
            ],
            strategy: "Rearrange v = f × λ to λ = v / f",
          },
          {
            id: "phys-sound-em-bm1-05",
            question: "A girl claps her hands 68 m from a tall cliff and hears the echo 0.40 s later. What value does this give for the speed of sound in air?",
            options: ["170 m/s", "270 m/s", "340 m/s", "680 m/s"],
            answerIndex: 2,
            explanation: "The sound travels to the cliff and back: total distance = 2 × 68 = 136 m. Speed = distance / time = 136 / 0.40 = 340 m/s. Forgetting to double the distance gives 170 m/s (option A).",
            guideRef: "Reflection of Sound and Echoes",
            difficulty: "core",
            hints: [
              "The sound goes TO the cliff and comes BACK.",
              "Total distance = 2 × 68 m = 136 m.",
              "Speed = total distance / time.",
            ],
            strategy: "Echo: v = 2d / t",
          },
          {
            id: "phys-sound-em-bm1-06",
            question: "Which list places the EM spectrum in order of INCREASING frequency?",
            options: [
              "Gamma, X-rays, UV, visible, infrared, microwaves, radio",
              "Radio, microwaves, infrared, visible, UV, X-rays, gamma",
              "Radio, infrared, microwaves, UV, visible, gamma, X-rays",
              "Visible, infrared, microwaves, radio, UV, X-rays, gamma",
            ],
            answerIndex: 1,
            explanation: "Increasing frequency (decreasing wavelength) runs: radio, microwaves, infrared, visible, ultraviolet, X-rays, gamma rays. Option A is the reverse order; the others scramble the sequence.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm1-07",
            question: "A radio station broadcasts at a frequency of 100 MHz. Using c = 3 × 10^8 m/s, what is the wavelength of the radio waves? (1 MHz = 10^6 Hz)",
            options: ["0.33 m", "3.0 m", "30 m", "300 m"],
            answerIndex: 1,
            explanation: "λ = c / f = (3 × 10^8) / (100 × 10^6) = (3 × 10^8) / (1 × 10^8) = 3.0 m. Watch the powers of ten: 100 MHz = 1 × 10^8 Hz.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Convert 100 MHz to hertz: 100 × 10^6 = 1 × 10^8 Hz.",
              "Use λ = c / f.",
              "Divide 3 × 10^8 by 1 × 10^8.",
            ],
            strategy: "λ = c / f, mind the powers of ten",
          },
          {
            id: "phys-sound-em-bm1-08",
            question: "Why is ultrasound, rather than X-rays, used to scan an unborn baby?",
            options: [
              "Ultrasound travels faster than X-rays",
              "Ultrasound is non-ionising, so it does not damage DNA",
              "X-rays cannot pass through soft tissue",
              "Ultrasound has a higher frequency than gamma rays",
            ],
            answerIndex: 1,
            explanation: "Ultrasound is a non-ionising mechanical wave, so it does not damage the DNA of the developing foetus. X-rays are ionising and would carry a cancer risk. Speed is irrelevant here, and ultrasound's frequency (kHz–MHz) is far below that of gamma rays.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "Compare ionising vs non-ionising radiation.",
              "Which type can damage DNA?",
              "A developing foetus is especially sensitive to DNA damage.",
            ],
            strategy: "Non-ionising = safe for foetus",
          },
          {
            id: "phys-sound-em-bm1-09",
            question: "An ultrasound transducer sends a pulse of frequency 2.0 MHz into body tissue where the speed of sound is 1540 m/s. What is the wavelength of this ultrasound in the tissue?",
            options: ["7.7 × 10^-4 m", "3.85 × 10^-3 m", "1.3 × 10^3 m", "3.08 × 10^9 m"],
            answerIndex: 0,
            explanation: "λ = v / f = 1540 / (2.0 × 10^6) = 7.7 × 10^-4 m (0.77 mm). The very short wavelength is what gives ultrasound its fine imaging resolution. Option D multiplies v by f instead of dividing.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "challenge",
            hints: [
              "Use λ = v / f (the wave equation rearranged).",
              "Use the speed in tissue, 1540 m/s — not the speed in air.",
              "Convert 2.0 MHz = 2.0 × 10^6 Hz.",
              "Divide: 1540 ÷ (2.0 × 10^6).",
            ],
            strategy: "λ = v / f using the medium's own speed",
          },
          {
            id: "phys-sound-em-bm1-10",
            question: "A submarine's sonar sends a pulse straight down. The seabed echo returns after 0.80 s; a second, fainter echo from a deeper rock layer returns after 1.20 s. Taking the speed of sound in seawater as 1500 m/s, how much deeper is the rock layer than the seabed?",
            options: ["150 m", "300 m", "600 m", "900 m"],
            answerIndex: 1,
            explanation: "Seabed depth = (1500 × 0.80) / 2 = 600 m. Rock-layer depth = (1500 × 1.20) / 2 = 900 m. The difference is 900 − 600 = 300 m. You can also use the extra round-trip time (1.20 − 0.80 = 0.40 s): extra depth = (1500 × 0.40) / 2 = 300 m.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "challenge",
            hints: [
              "Find each depth separately with depth = (v × t) / 2.",
              "Seabed: t = 0.80 s. Rock layer: t = 1.20 s.",
              "Subtract the two depths to get the extra depth.",
              "Shortcut: use the time difference 0.40 s in depth = (v × Δt) / 2.",
            ],
            strategy: "depth = (v × t) / 2 for each layer, then subtract",
          },
        ],
      },
      {
        id: "phys-sound-em-bankmcq-2",
        title: "Question Bank — MCQ Paper 2",
        description: "Ten multiple-choice questions on wave properties, the speed of sound, ultrasound uses, and EM dangers.",
        questions: [
          {
            id: "phys-sound-em-bm2-01",
            question: "Which property of a sound wave determines its pitch?",
            options: ["Amplitude", "Frequency", "Speed", "Loudness"],
            answerIndex: 1,
            explanation: "Pitch is determined by frequency — a higher frequency gives a higher pitch. Amplitude determines loudness, and the speed of sound is fixed by the medium, not the note played.",
            guideRef: "Frequency, Pitch, Amplitude, Loudness, and the Audible Range",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm2-02",
            question: "All electromagnetic waves travelling through a vacuum have the same:",
            options: ["frequency", "wavelength", "speed", "amount of energy per photon"],
            answerIndex: 2,
            explanation: "Every EM wave travels at the same speed c ≈ 3 × 10^8 m/s in a vacuum. They differ in frequency, wavelength and photon energy across the spectrum.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm2-03",
            question: "Sound generally travels fastest through which state of matter?",
            options: ["Gases", "Liquids", "Solids", "It is the same in all three"],
            answerIndex: 2,
            explanation: "Sound travels fastest in solids because the particles are closest together and the bonds between them are stiffest, so vibrations pass along rapidly. It is slower in liquids and slowest in gases.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm2-04",
            question: "Which EM region is used by mobile phones and satellite communication, and can cause internal heating of body tissue at high intensity?",
            options: ["Radio waves", "Microwaves", "Infrared", "Ultraviolet"],
            answerIndex: 1,
            explanation: "Microwaves carry mobile-phone and satellite signals and are absorbed by water molecules, causing internal heating at high intensity (the same effect a microwave oven uses to heat food). Infrared heats the surface; UV is ionising rather than simply heating.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Think which region a microwave oven shares its name with.",
              "Satellite dishes and phone masts use this region.",
              "Its hazard is heating of tissue, not ionisation.",
            ],
            strategy: "Match use and hazard to the region",
          },
          {
            id: "phys-sound-em-bm2-05",
            question: "A student measures the speed of sound by clapping in front of a wall 51 m away. She claps in time with the echoes and finds that 20 claps take exactly 6.0 s. What speed of sound does this give?",
            options: ["170 m/s", "300 m/s", "340 m/s", "680 m/s"],
            answerIndex: 2,
            explanation: "Time for one clap-to-echo interval = 6.0 / 20 = 0.30 s. In that time the sound travels to the wall and back: distance = 2 × 51 = 102 m. Speed = 102 / 0.30 = 340 m/s. Timing many claps reduces the percentage uncertainty in the time.",
            guideRef: "Reflection of Sound and Echoes",
            difficulty: "challenge",
            hints: [
              "First find the time for ONE echo interval: 6.0 s ÷ 20.",
              "Each interval, the sound covers 2 × 51 m = 102 m.",
              "Speed = distance / time.",
              "Don't forget to double the wall distance.",
            ],
            strategy: "Divide total time by number of claps, then v = 2d / t",
          },
          {
            id: "phys-sound-em-bm2-06",
            question: "Which row correctly matches an EM region to a hazard?",
            options: [
              "Radio waves — cause sunburn",
              "Infrared — ionises atoms and damages DNA",
              "Ultraviolet — can cause skin cancer and eye damage",
              "Gamma rays — only ever cause mild skin heating",
            ],
            answerIndex: 2,
            explanation: "Ultraviolet is ionising and causes sunburn, skin cancer and cataracts. Radio waves are harmless at normal levels; infrared causes heating/burns but is not ionising; gamma rays are strongly ionising and can be lethal, not merely warming.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Which regions are ionising? (UV and above.)",
              "Radio and infrared are non-ionising.",
              "Match each hazard to the correct mechanism.",
            ],
            strategy: "Ionising hazards start at UV",
          },
          {
            id: "phys-sound-em-bm2-07",
            question: "A bat emits ultrasound at 50 kHz. The speed of sound in air is 340 m/s. What is the wavelength of this ultrasound in air?",
            options: ["6.8 × 10^-3 m", "1.5 × 10^-2 m", "0.15 m", "1.7 × 10^7 m"],
            answerIndex: 0,
            explanation: "λ = v / f = 340 / (50 000) = 6.8 × 10^-3 m (6.8 mm). Convert 50 kHz to 50 000 Hz before dividing. Option D multiplies instead of dividing.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "Convert 50 kHz to hertz: 50 000 Hz.",
              "Use λ = v / f.",
              "Divide 340 by 50 000.",
            ],
            strategy: "λ = v / f with correct unit conversion",
          },
          {
            id: "phys-sound-em-bm2-08",
            question: "Which feature of ultrasound makes it produce clearer images than audible sound when scanning fine detail inside the body?",
            options: [
              "Its higher frequency means a shorter wavelength, giving better resolution",
              "It travels faster than audible sound",
              "It is ionising, so it penetrates further",
              "Its larger amplitude makes it louder",
            ],
            answerIndex: 0,
            explanation: "Higher frequency means a shorter wavelength, and a shorter wavelength can resolve smaller details. Ultrasound and audible sound travel at the same speed in a given medium, ultrasound is non-ionising, and loudness is irrelevant to resolution.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "challenge",
            hints: [
              "Resolution improves when wavelength is smaller.",
              "How does frequency relate to wavelength at fixed speed?",
              "v = f × λ — if v is fixed and f rises, what happens to λ?",
            ],
            strategy: "Short wavelength → fine resolution",
          },
          {
            id: "phys-sound-em-bm2-09",
            question: "Within the visible spectrum, which colour has the LONGEST wavelength?",
            options: ["Violet", "Green", "Blue", "Red"],
            answerIndex: 3,
            explanation: "Red light has the longest wavelength (and lowest frequency) of the visible colours; violet has the shortest wavelength (and highest frequency). The order by increasing frequency is red, orange, yellow, green, blue, indigo, violet.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm2-10",
            question: "A sound wave and a light wave both have a frequency of 500 Hz. Sound travels at 340 m/s and light at 3 × 10^8 m/s. How many times longer is the wavelength of the light wave than the sound wave?",
            options: [
              "About 880 000 times",
              "About 1700 times",
              "They are equal",
              "About 1.1 × 10^-6 times",
            ],
            answerIndex: 0,
            explanation: "At the same frequency, λ = v / f, so the ratio of wavelengths equals the ratio of speeds: (3 × 10^8) / 340 ≈ 8.8 × 10^5 ≈ 880 000. (Check: λ_light = 3 × 10^8 / 500 = 6 × 10^5 m; λ_sound = 340 / 500 = 0.68 m; 6 × 10^5 / 0.68 ≈ 8.8 × 10^5.)",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "challenge",
            hints: [
              "At the same frequency, λ is proportional to wave speed.",
              "So the ratio of wavelengths = ratio of speeds.",
              "Divide 3 × 10^8 by 340.",
              "You don't even need the 500 Hz value once you spot this.",
            ],
            strategy: "Same f → wavelength ratio = speed ratio",
          },
        ],
      },
      {
        id: "phys-sound-em-bankmcq-3",
        title: "Question Bank — MCQ Paper 3",
        description: "Ten multiple-choice questions on transmission of sound, echoes, EM uses, and wave calculations.",
        questions: [
          {
            id: "phys-sound-em-bm3-01",
            question: "A bell is ringing inside a sealed glass jar. As the air is slowly pumped out, the sound heard:",
            options: [
              "gets gradually louder",
              "stays exactly the same",
              "gets gradually quieter and fades to nothing",
              "changes to a higher pitch",
            ],
            answerIndex: 2,
            explanation: "As air is removed there are fewer particles to carry the vibrations, so the sound fades. In a perfect vacuum no sound is transmitted at all, even though the clapper can still be seen moving. This is the classic bell-jar demonstration.",
            guideRef: "Sound as a Longitudinal Wave",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm3-02",
            question: "Two notes are played on a guitar. Note Y sounds louder than note X but at the same pitch. Compared with X, note Y has:",
            options: [
              "a larger amplitude and the same frequency",
              "a higher frequency and the same amplitude",
              "a larger amplitude and a higher frequency",
              "a smaller amplitude and a lower frequency",
            ],
            answerIndex: 0,
            explanation: "Same pitch means same frequency; louder means larger amplitude. Amplitude controls loudness and frequency controls pitch, and the two are independent.",
            guideRef: "Frequency, Pitch, Amplitude, Loudness, and the Audible Range",
            difficulty: "core",
            hints: [
              "Which property sets the pitch? Which sets the loudness?",
              "Same pitch ⇒ same frequency.",
              "Louder ⇒ larger amplitude.",
            ],
            strategy: "Separate pitch (frequency) from loudness (amplitude)",
          },
          {
            id: "phys-sound-em-bm3-03",
            question: "Which EM region is detected by a thermal-imaging (night-vision) camera that senses the heat radiated by a person?",
            options: ["Ultraviolet", "Infrared", "X-rays", "Radio waves"],
            answerIndex: 1,
            explanation: "Warm objects emit infrared radiation, which thermal-imaging cameras detect to build a heat map. Infrared is also used in remote controls and optical-fibre communication.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm3-04",
            question: "A ship's echo-sounder emits a pulse and receives the seabed echo 0.30 s later. The speed of sound in seawater is 1500 m/s. How deep is the seabed?",
            options: ["112.5 m", "225 m", "450 m", "900 m"],
            answerIndex: 1,
            explanation: "depth = (v × t) / 2 = (1500 × 0.30) / 2 = 450 / 2 = 225 m. The pulse covers 450 m in total (down and back), so the depth is half of that.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "The pulse travels down and back, so total path = 2 × depth.",
              "depth = (v × t) / 2.",
              "Substitute v = 1500 m/s, t = 0.30 s.",
            ],
            strategy: "depth = (v × t) / 2",
          },
          {
            id: "phys-sound-em-bm3-05",
            question: "Which of the following is the best reason that we see a distant firework explode before we hear the bang?",
            options: [
              "Light is a transverse wave and sound is longitudinal",
              "Light travels far faster than sound",
              "Sound waves are absorbed by the air, but light is not",
              "Our eyes react more quickly than our ears",
            ],
            answerIndex: 1,
            explanation: "Light travels at about 3 × 10^8 m/s, roughly a million times faster than sound (~340 m/s), so it reaches us almost instantly while the sound is delayed. The wave type and absorption are not the cause of the time gap.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm3-06",
            question: "An echo can only be heard as a distinct, separate sound if the reflecting wall is far enough away. Using a persistence of hearing of about 0.10 s and a speed of sound of 340 m/s, the minimum distance to the wall is closest to:",
            options: ["1.7 m", "17 m", "34 m", "68 m"],
            answerIndex: 1,
            explanation: "In 0.10 s the sound travels 340 × 0.10 = 34 m there-and-back, so the wall must be at least 34 / 2 ≈ 17 m away. Below this, the echo overlaps the original sound and is not heard separately.",
            guideRef: "Reflection of Sound and Echoes",
            difficulty: "challenge",
            hints: [
              "In 0.10 s sound travels d = v × t = 340 × 0.10.",
              "That distance is the round trip (there and back).",
              "Divide by 2 to get the one-way distance to the wall.",
            ],
            strategy: "Distance = v × t, then halve for one way",
          },
          {
            id: "phys-sound-em-bm3-07",
            question: "Green light has a wavelength of 5.0 × 10^-7 m. Using c = 3 × 10^8 m/s, what is its frequency?",
            options: ["1.5 × 10^2 Hz", "6.0 × 10^14 Hz", "1.5 × 10^15 Hz", "6.0 × 10^-15 Hz"],
            answerIndex: 1,
            explanation: "f = c / λ = (3 × 10^8) / (5.0 × 10^-7) = 0.6 × 10^15 = 6.0 × 10^14 Hz. Take care with the negative power of ten: dividing by 10^-7 is the same as multiplying by 10^7.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Use f = c / λ.",
              "Dividing by 10^-7 means multiplying by 10^7.",
              "3 × 10^8 ÷ (5.0 × 10^-7) = 0.6 × 10^15.",
              "Write in standard form: 6.0 × 10^14 Hz.",
            ],
            strategy: "f = c / λ, careful with negative indices",
          },
          {
            id: "phys-sound-em-bm3-08",
            question: "Which use correctly matches gamma rays?",
            options: [
              "Cooking food in a kitchen oven",
              "Sterilising medical equipment and treating cancer",
              "Tuning in to an FM radio station",
              "Operating a TV remote control",
            ],
            answerIndex: 1,
            explanation: "Gamma rays are strongly ionising, so they kill bacteria (sterilising equipment) and can destroy cancer cells in radiotherapy. Cooking uses microwaves/infrared, radio uses radio waves, and remote controls use infrared.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Gamma rays are highly ionising.",
              "Ionising radiation can kill living cells and microbes.",
              "Which medical and sterilising uses follow from that?",
            ],
            strategy: "Link ionising power to use",
          },
          {
            id: "phys-sound-em-bm3-09",
            question: "A sound source produces 1500 complete vibrations in 5.0 s. What is its frequency, and is it audible to humans?",
            options: [
              "300 Hz — audible",
              "7500 Hz — audible",
              "0.0033 Hz — not audible (infrasound)",
              "300 Hz — not audible (ultrasound)",
            ],
            answerIndex: 0,
            explanation: "Frequency = number of cycles / time = 1500 / 5.0 = 300 Hz. This lies within the human range of 20 Hz to 20 kHz, so it is audible.",
            guideRef: "Frequency, Pitch, Amplitude, Loudness, and the Audible Range",
            difficulty: "core",
            hints: [
              "Frequency = number of vibrations ÷ time in seconds.",
              "1500 ÷ 5.0 = ?",
              "Compare your answer with the 20 Hz–20 kHz range.",
            ],
            strategy: "f = cycles / time, then check the audible range",
          },
          {
            id: "phys-sound-em-bm3-10",
            question: "A diver is 60 m below the surface. A boat directly above sends a sonar pulse downward, which reflects off the diver. The speed of sound in water is 1500 m/s. How long after emission does the boat receive the echo?",
            options: ["0.020 s", "0.040 s", "0.080 s", "0.090 s"],
            answerIndex: 2,
            explanation: "The pulse travels down 60 m and back up 60 m, a total of 120 m. time = distance / speed = 120 / 1500 = 0.080 s. Using only 60 m gives 0.040 s — the common error of forgetting the return trip.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "challenge",
            hints: [
              "The pulse travels down to the diver and back up.",
              "Total distance = 2 × 60 = 120 m.",
              "time = distance / speed = 120 / 1500.",
            ],
            strategy: "Round-trip distance, then t = d / v",
          },
        ],
      },
      {
        id: "phys-sound-em-bankmcq-4",
        title: "Question Bank — MCQ Paper 4",
        description: "Ten multiple-choice questions covering longitudinal waves, ultrasound, EM properties, and multi-step calculations.",
        questions: [
          {
            id: "phys-sound-em-bm4-01",
            question: "In a longitudinal wave, the direction in which the particles vibrate is:",
            options: [
              "perpendicular to the direction the wave travels",
              "parallel to the direction the wave travels",
              "in a circle around the rest position",
              "always vertically upwards",
            ],
            answerIndex: 1,
            explanation: "In a longitudinal wave the particle vibrations are parallel to the direction of energy transfer — the defining feature of sound. In a transverse wave they are perpendicular.",
            guideRef: "Sound as a Longitudinal Wave",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm4-02",
            question: "Which of these is classed as ultrasound?",
            options: ["15 Hz", "2 000 Hz", "18 kHz", "40 kHz"],
            answerIndex: 3,
            explanation: "Ultrasound is any sound above 20 kHz. 40 kHz qualifies; 18 kHz and 2 000 Hz are audible; 15 Hz is infrasound (below 20 Hz).",
            guideRef: "Frequency, Pitch, Amplitude, Loudness, and the Audible Range",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm4-03",
            question: "Which EM region lies immediately between infrared and ultraviolet in the spectrum?",
            options: ["Microwaves", "Visible light", "X-rays", "Radio waves"],
            answerIndex: 1,
            explanation: "The order by increasing frequency is radio, microwaves, infrared, visible, ultraviolet, X-rays, gamma. Visible light sits between infrared and ultraviolet.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bm4-04",
            question: "A loudspeaker produces a note of wavelength 0.85 m in air, where the speed of sound is 340 m/s. What is the frequency of the note?",
            options: ["289 Hz", "400 Hz", "0.0025 Hz", "289 000 Hz"],
            answerIndex: 1,
            explanation: "f = v / λ = 340 / 0.85 = 400 Hz. Option C inverts the division; the answer must be a sensible audible frequency.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "core",
            hints: [
              "Rearrange v = f × λ to f = v / λ.",
              "Substitute v = 340 m/s and λ = 0.85 m.",
              "Divide 340 by 0.85.",
            ],
            strategy: "f = v / λ",
          },
          {
            id: "phys-sound-em-bm4-05",
            question: "Why are ultrasonic baths effective at cleaning delicate items such as jewellery and surgical instruments?",
            options: [
              "The ultrasound melts the dirt off the surface",
              "Rapid pressure oscillations form and collapse tiny bubbles (cavitation) that dislodge dirt",
              "The ultrasound ionises the dirt, breaking its bonds",
              "The high frequency raises the water temperature until dirt boils away",
            ],
            answerIndex: 1,
            explanation: "Ultrasound passing through the liquid causes rapid pressure changes that create and collapse microscopic bubbles (cavitation). The collapsing bubbles dislodge dirt even from intricate surfaces. Ultrasound is non-ionising and does not rely on melting or boiling.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "Think about what rapid pressure changes do to a liquid.",
              "Tiny bubbles form and then collapse — what is this called?",
              "The bubble collapse is what removes the dirt.",
            ],
            strategy: "Cavitation = bubble formation and collapse",
          },
          {
            id: "phys-sound-em-bm4-06",
            question: "A microwave of frequency 1.2 × 10^10 Hz travels through a vacuum. Using c = 3 × 10^8 m/s, what is its wavelength?",
            options: ["2.5 × 10^-2 m", "4.0 × 10^1 m", "3.6 × 10^18 m", "2.5 × 10^2 m"],
            answerIndex: 0,
            explanation: "λ = c / f = (3 × 10^8) / (1.2 × 10^10) = 2.5 × 10^-2 m (2.5 cm), a typical microwave wavelength. Option C multiplies c by f instead of dividing.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Use λ = c / f.",
              "Divide 3 × 10^8 by 1.2 × 10^10.",
              "Subtract the powers of ten: 10^8 / 10^10 = 10^-2.",
            ],
            strategy: "λ = c / f, subtract powers of ten",
          },
          {
            id: "phys-sound-em-bm4-07",
            question: "Which statement comparing sound waves and EM waves is correct?",
            options: [
              "Both are longitudinal and both need a medium",
              "Sound is longitudinal and needs a medium; EM waves are transverse and need no medium",
              "Sound is transverse; EM waves are longitudinal",
              "Both travel at 3 × 10^8 m/s in a vacuum",
            ],
            answerIndex: 1,
            explanation: "Sound is a longitudinal mechanical wave requiring a medium, while EM waves are transverse and travel through a vacuum at c. Sound cannot travel through a vacuum at all, so they certainly do not share the speed 3 × 10^8 m/s.",
            guideRef: "Sound as a Longitudinal Wave",
            difficulty: "core",
            hints: [
              "Is sound transverse or longitudinal? Does it need a medium?",
              "Are EM waves transverse or longitudinal? Do they need a medium?",
              "Only one option gets both right.",
            ],
            strategy: "Contrast wave type and medium need",
          },
          {
            id: "phys-sound-em-bm4-08",
            question: "A person sees lightning and hears the thunder 6.0 s later. Taking the speed of sound as 340 m/s and treating light as instantaneous, how far away is the storm?",
            options: ["57 m", "340 m", "2040 m", "1.8 × 10^9 m"],
            answerIndex: 2,
            explanation: "distance = speed × time = 340 × 6.0 = 2040 m (about 2 km). Light arrives essentially instantly, so the 6.0 s delay is the sound's travel time. There is no echo here, so the distance is NOT halved.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "core",
            hints: [
              "Use distance = speed × time.",
              "The 6.0 s is the time for the sound to travel one way to you.",
              "Do NOT halve — this is not an echo.",
            ],
            strategy: "One-way trip: distance = v × t (no halving)",
          },
          {
            id: "phys-sound-em-bm4-09",
            question: "An ultrasound scanner sends a pulse that reflects off a boundary 4.5 cm deep in tissue. The speed of ultrasound in the tissue is 1500 m/s. How long after emission is the echo received?",
            options: ["3.0 × 10^-5 s", "6.0 × 10^-5 s", "3.0 × 10^-2 s", "1.5 × 10^-5 s"],
            answerIndex: 1,
            explanation: "Convert depth: 4.5 cm = 0.045 m. Total path (there and back) = 2 × 0.045 = 0.090 m. time = distance / speed = 0.090 / 1500 = 6.0 × 10^-5 s (60 microseconds). Forgetting the return trip gives 3.0 × 10^-5 s (option A).",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "challenge",
            hints: [
              "Convert 4.5 cm to metres: 0.045 m.",
              "The pulse travels there and back: total = 2 × 0.045 m.",
              "time = distance / speed = 0.090 / 1500.",
              "Express the answer in standard form.",
            ],
            strategy: "Convert units, double the depth, then t = d / v",
          },
          {
            id: "phys-sound-em-bm4-10",
            question: "A radar pulse (a radio/microwave EM pulse) is sent from a station to an aircraft and the reflected pulse returns 1.2 × 10^-4 s later. EM waves travel at 3 × 10^8 m/s. How far away is the aircraft?",
            options: ["9.0 km", "18 km", "36 km", "72 km"],
            answerIndex: 1,
            explanation: "Total distance = c × t = (3 × 10^8) × (1.2 × 10^-4) = 3.6 × 10^4 m = 36 km. This is the round trip, so the aircraft's distance is half: 18 km. The same 'divide by 2' echo logic applies to EM radar as to sonar.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "challenge",
            hints: [
              "First find the total path: distance = c × t.",
              "c = 3 × 10^8 m/s, t = 1.2 × 10^-4 s.",
              "That total is the there-and-back distance.",
              "Halve it to get the distance to the aircraft, then convert to km.",
            ],
            strategy: "Radar echo: distance = (c × t) / 2",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "phys-sound-em-bankqa-1",
        title: "Question Bank — Structured Paper 1",
        description: "Ten structured questions on sound production, the speed of sound, echoes, and EM properties.",
        questions: [
          {
            id: "phys-sound-em-bq1-01",
            question: "Describe how a vibrating loudspeaker cone produces a sound wave in the air in front of it. Use the words compression and rarefaction in your answer.",
            marks: 4,
            modelAnswer: "As the cone moves forwards it pushes the air particles together, creating a region of higher pressure called a compression. As the cone moves backwards the particles spread apart, creating a region of lower pressure called a rarefaction. The cone vibrates back and forth repeatedly, so a series of compressions and rarefactions travels outward through the air. The particles vibrate parallel to the direction the wave travels, making sound a longitudinal wave.",
            markScheme: [
              "Cone moving forward pushes particles together / creates a compression (high pressure)",
              "Cone moving back lets particles spread apart / creates a rarefaction (low pressure)",
              "Repeated vibration sends a series of compressions and rarefactions outward",
              "Particles vibrate parallel to wave direction / sound is longitudinal",
            ],
            commonError: "Describing the particles as travelling along with the wave, rather than vibrating about a fixed rest position.",
            guideRef: "Sound as a Longitudinal Wave",
            difficulty: "core",
            hints: [
              "What happens to the air when the cone moves forwards?",
              "What happens when it moves backwards?",
              "Name the high- and low-pressure regions.",
              "State the direction of particle vibration relative to wave travel.",
            ],
            strategy: "Link cone motion to pressure regions",
          },
          {
            id: "phys-sound-em-bq1-02",
            question: "An astronaut on the airless Moon watches a colleague hit a metal post with a hammer a few metres away. The astronaut sees the hammer strike but hears nothing. Explain why.",
            marks: 3,
            modelAnswer: "Sound is a mechanical wave that needs a medium — particles to vibrate and pass the disturbance along. The Moon has no atmosphere (a vacuum), so there are no air particles between the colleagues to carry the vibrations, and no sound reaches the astronaut. Light, however, is an EM wave that needs no medium, so the strike can still be seen.",
            markScheme: [
              "Sound needs a medium / particles to travel",
              "The Moon (vacuum) has no air / no particles to carry the sound",
              "Light needs no medium, so the strike can still be seen",
            ],
            commonError: "Saying the sound is 'too quiet' or 'too far' rather than recognising it cannot travel through a vacuum at all.",
            guideRef: "Sound as a Longitudinal Wave",
            difficulty: "core",
            hints: [
              "What does a sound wave need in order to travel?",
              "What is between the astronauts on the Moon?",
              "Why can the strike still be seen?",
            ],
            strategy: "No medium ⇒ no sound",
          },
          {
            id: "phys-sound-em-bq1-03",
            question: "A sound wave in air has a frequency of 425 Hz. The speed of sound in air is 340 m/s. Calculate the wavelength of the sound. Give your answer to 2 significant figures.",
            marks: 3,
            modelAnswer: "Use v = f × λ, rearranged to λ = v / f. λ = 340 / 425 = 0.80 m (to 2 s.f.).",
            markScheme: [
              "Rearrange / state λ = v / f",
              "Correct substitution: 340 / 425",
              "λ = 0.80 m (accept 0.8 m)",
            ],
            commonError: "Multiplying v by f instead of dividing, giving a meaningless large number.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "core",
            hints: [
              "Write down v = f × λ.",
              "Make λ the subject: λ = v / f.",
              "Substitute 340 and 425, then round to 2 s.f.",
            ],
            strategy: "λ = v / f",
            solutions: [
              {
                label: "Method: rearrange the wave equation",
                steps: [
                  "v = f × λ",
                  "λ = v / f",
                  "λ = 340 / 425",
                  "λ = 0.80 m (2 s.f.)",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq1-04",
            question: "A man stands 660 m from a large cliff. He fires a starting pistol and hears the echo 4.0 s later. Calculate the speed of sound in air from this measurement.",
            marks: 3,
            modelAnswer: "The sound travels to the cliff and back, so total distance = 2 × 660 = 1320 m. speed = distance / time = 1320 / 4.0 = 330 m/s.",
            markScheme: [
              "Total distance = 2 × 660 = 1320 m (doubling)",
              "speed = distance / time",
              "speed = 1320 / 4.0 = 330 m/s",
            ],
            commonError: "Using 660 m instead of 1320 m (forgetting the sound travels there and back), which gives 165 m/s.",
            guideRef: "Reflection of Sound and Echoes",
            difficulty: "core",
            hints: [
              "The sound goes to the cliff AND returns.",
              "Total distance = 2 × 660 m.",
              "speed = total distance / time.",
            ],
            strategy: "Echo: v = 2d / t",
            solutions: [
              {
                label: "Method: echo speed",
                steps: [
                  "Distance to cliff and back = 2 × 660 = 1320 m",
                  "speed = distance / time",
                  "speed = 1320 / 4.0",
                  "speed = 330 m/s",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq1-05",
            question: "State two properties that are shared by every wave in the electromagnetic spectrum.",
            marks: 2,
            modelAnswer: "They are all transverse waves, and they all travel at the same speed (c ≈ 3 × 10^8 m/s) in a vacuum. (Other acceptable points: they all transfer energy; they all need no medium; they all obey v = f × λ.)",
            markScheme: [
              "All transverse / all travel at c ≈ 3 × 10^8 m/s in a vacuum",
              "Any second valid shared property: need no medium / transfer energy / obey v = f × λ",
            ],
            commonError: "Giving a property that differs between regions (e.g. 'same frequency' or 'same wavelength'), which is wrong.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bq1-06",
            question: "Name the seven regions of the electromagnetic spectrum in order from the longest wavelength to the shortest wavelength.",
            marks: 3,
            modelAnswer: "From longest to shortest wavelength: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays.",
            markScheme: [
              "Radio (longest) then microwaves then infrared (1)",
              "Visible light then ultraviolet (1)",
              "X-rays then gamma rays (shortest) (1)",
            ],
            commonError: "Reversing the order, or swapping infrared and ultraviolet around the visible region.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bq1-07",
            question: "A radio transmitter emits waves of wavelength 1500 m. Using c = 3 × 10^8 m/s, calculate the frequency of the radio waves.",
            marks: 3,
            modelAnswer: "Use c = f × λ, so f = c / λ. f = (3 × 10^8) / 1500 = 2.0 × 10^5 Hz (200 kHz).",
            markScheme: [
              "Rearrange / state f = c / λ",
              "Correct substitution: (3 × 10^8) / 1500",
              "f = 2.0 × 10^5 Hz / 200 kHz",
            ],
            commonError: "Dividing 1500 by c instead of c by 1500, giving a tiny, wrong frequency.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Start from c = f × λ.",
              "Rearrange to f = c / λ.",
              "Divide 3 × 10^8 by 1500.",
            ],
            strategy: "f = c / λ",
            solutions: [
              {
                label: "Method: rearrange wave equation",
                steps: [
                  "c = f × λ",
                  "f = c / λ",
                  "f = (3 × 10^8) / 1500",
                  "f = 2.0 × 10^5 Hz = 200 kHz",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq1-08",
            question: "(a) State the use of microwaves in communications. (b) State one use and one danger of ultraviolet radiation.",
            marks: 3,
            modelAnswer: "(a) Microwaves are used to carry mobile-phone and satellite communication signals (they pass through the atmosphere to satellites). (b) Use: sterilising / detecting forged banknotes / fluorescence / sun-tanning lamps. Danger: it is ionising and can cause sunburn, skin cancer or eye damage (cataracts).",
            markScheme: [
              "(a) Microwaves used for mobile-phone / satellite communication",
              "(b) A correct UV use: sterilisation / security marking / fluorescence / tanning",
              "(b) A correct UV danger: sunburn / skin cancer / eye (cataract) damage",
            ],
            commonError: "Confusing microwave communication (satellites/phones) with microwave cooking, or giving an infrared use for UV.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Which region do satellite dishes and phone masts use?",
              "Where have you seen UV used to check banknotes or sterilise?",
              "UV is ionising — what harm can it do to skin and eyes?",
            ],
            strategy: "Match each region to its use and hazard",
          },
          {
            id: "phys-sound-em-bq1-09",
            question: "A girl stands exactly halfway between two parallel walls that are 340 m apart. She claps once. The speed of sound in air is 340 m/s. Calculate the time after the clap at which she first hears an echo, and explain why both walls produce an echo at the same moment.",
            marks: 4,
            modelAnswer: "She is 170 m from each wall. For one wall: distance to the wall and back = 2 × 170 = 340 m. time = distance / speed = 340 / 340 = 1.0 s. Both walls are the same distance away (170 m), so each reflected sound travels an identical round-trip path of 340 m and returns after the same time, 1.0 s — the two echoes arrive together.",
            markScheme: [
              "Distance to each wall = 170 m (halfway of 340 m)",
              "Round-trip distance = 2 × 170 = 340 m",
              "time = distance / speed = 340 / 340 = 1.0 s",
              "Both walls equidistant ⇒ equal path ⇒ echoes arrive together",
            ],
            commonError: "Using 340 m (the wall separation) as the one-way distance, or forgetting that she is only 170 m from each wall.",
            guideRef: "Reflection of Sound and Echoes",
            difficulty: "challenge",
            hints: [
              "How far is she from each wall if she is halfway between them?",
              "For one wall, the sound travels there and back.",
              "Round-trip distance = 2 × 170 m.",
              "time = distance / speed.",
            ],
            strategy: "Echo: t = 2d / v, with d the distance to one wall",
            solutions: [
              {
                label: "Method: echo timing from the midpoint",
                steps: [
                  "Distance to each wall = 340 / 2 = 170 m",
                  "Round-trip distance to one wall = 2 × 170 = 340 m",
                  "time = distance / speed = 340 / 340 = 1.0 s",
                  "Both walls 170 m away ⇒ identical path ⇒ echoes coincide at 1.0 s",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq1-10",
            question: "An aircraft's radar sends a microwave pulse towards a storm cloud and receives the reflection 8.0 × 10^-4 s later. EM waves travel at 3 × 10^8 m/s. Calculate the distance from the aircraft to the cloud.",
            marks: 4,
            modelAnswer: "Total distance travelled by the pulse = speed × time = (3 × 10^8) × (8.0 × 10^-4) = 2.4 × 10^5 m. This is the round-trip (to the cloud and back), so the distance to the cloud = 2.4 × 10^5 / 2 = 1.2 × 10^5 m = 120 km.",
            markScheme: [
              "Total distance = speed × time = (3 × 10^8) × (8.0 × 10^-4)",
              "Total distance = 2.4 × 10^5 m",
              "Divide by 2 for one-way distance (echo)",
              "Distance to cloud = 1.2 × 10^5 m / 120 km",
            ],
            commonError: "Forgetting that the pulse reflects and returns, so not dividing by 2 (giving 240 km).",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "challenge",
            hints: [
              "First find the total path with distance = speed × time.",
              "Use c = 3 × 10^8 m/s and t = 8.0 × 10^-4 s.",
              "The pulse goes there and back, so halve the total.",
              "Convert metres to kilometres at the end.",
            ],
            strategy: "Radar echo: distance = (c × t) / 2",
            solutions: [
              {
                label: "Method: EM echo (radar)",
                steps: [
                  "Total distance = c × t = (3 × 10^8) × (8.0 × 10^-4)",
                  "Total distance = 2.4 × 10^5 m (round trip)",
                  "Distance to cloud = total / 2 = 1.2 × 10^5 m",
                  "= 120 km",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-sound-em-bankqa-2",
        title: "Question Bank — Structured Paper 2",
        description: "Ten structured questions on ultrasound, sonar, the speed of sound, and EM uses and dangers.",
        questions: [
          {
            id: "phys-sound-em-bq2-01",
            question: "State what is meant by an echo, and give one everyday situation in which an echo is heard.",
            marks: 2,
            modelAnswer: "An echo is a reflected sound that is heard separately from (after) the original sound. Everyday example: a shout reflecting back from a cliff, a large empty hall, or the inside of a tunnel.",
            markScheme: [
              "An echo is a reflected sound / sound reflected off a surface heard after the original",
              "A sensible everyday example: cliff / large hall / tunnel / canyon",
            ],
            commonError: "Describing reverberation (overlapping reflections) instead of a distinct, separately-heard echo.",
            guideRef: "Reflection of Sound and Echoes",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bq2-02",
            question: "A fishing boat uses sonar to find a shoal of fish. A pulse of ultrasound is sent down and the echo from the shoal returns after 0.060 s. The speed of sound in seawater is 1500 m/s. Calculate the depth of the shoal below the boat.",
            marks: 3,
            modelAnswer: "depth = (v × t) / 2 = (1500 × 0.060) / 2 = 90 / 2 = 45 m.",
            markScheme: [
              "Use of depth = (v × t) / 2",
              "Correct substitution: (1500 × 0.060)",
              "depth = 45 m",
            ],
            commonError: "Forgetting to divide by 2 and giving 90 m (the round-trip distance).",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "The pulse travels down to the shoal and back up.",
              "Use depth = (v × t) / 2.",
              "Substitute v = 1500 m/s and t = 0.060 s.",
            ],
            strategy: "depth = (v × t) / 2",
            solutions: [
              {
                label: "Method: sonar depth",
                steps: [
                  "depth = (v × t) / 2",
                  "depth = (1500 × 0.060) / 2",
                  "depth = 90 / 2",
                  "depth = 45 m",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq2-03",
            question: "Ultrasound is used to scan an unborn baby. (a) State what is meant by ultrasound. (b) Explain why some of the ultrasound is reflected as it passes through the body, allowing an image to be formed. (c) Give one reason ultrasound is used instead of X-rays for this scan.",
            marks: 4,
            modelAnswer: "(a) Ultrasound is sound with a frequency above 20 kHz (above the human hearing limit). (b) When the ultrasound reaches a boundary between two tissues of different density (for example fluid and foetal tissue), part of the wave is reflected and part is transmitted; the reflected pulses (echoes) are detected and their time delays used to build up an image. (c) Ultrasound is non-ionising, so it does not damage the DNA of the developing foetus, unlike X-rays.",
            markScheme: [
              "(a) Sound with frequency above 20 kHz / above human hearing",
              "(b) Reflection occurs at boundaries between different tissues / different densities",
              "(b) Reflected pulses / echoes are detected (and timed) to form the image",
              "(c) Ultrasound is non-ionising / does not damage DNA / safe for the foetus",
            ],
            commonError: "Saying ultrasound is reflected 'everywhere' rather than at boundaries between different media.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "Define ultrasound by its frequency.",
              "Where in the body does reflection happen?",
              "What is detected to build the image?",
              "Compare ionising vs non-ionising for part (c).",
            ],
            strategy: "Reflection at boundaries + non-ionising safety",
          },
          {
            id: "phys-sound-em-bq2-04",
            question: "A medical ultrasound pulse is reflected from an organ. The echo is received 9.0 × 10^-5 s after the pulse is sent. The speed of ultrasound in the body tissue is 1500 m/s. Calculate the depth of the organ below the skin.",
            marks: 4,
            modelAnswer: "Total distance travelled = v × t = 1500 × (9.0 × 10^-5) = 0.135 m. This is the there-and-back path, so the depth = 0.135 / 2 = 0.0675 m ≈ 6.8 cm.",
            markScheme: [
              "Total distance = v × t = 1500 × 9.0 × 10^-5",
              "Total distance = 0.135 m",
              "Divide by 2 (there and back)",
              "depth = 0.0675 m ≈ 6.8 cm",
            ],
            commonError: "Not dividing by 2, giving 0.135 m, or mishandling the 10^-5 power.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "challenge",
            hints: [
              "Find the total path first: distance = v × t.",
              "v = 1500 m/s, t = 9.0 × 10^-5 s.",
              "This path is to the organ and back, so halve it.",
              "Convert metres to centimetres if helpful.",
            ],
            strategy: "depth = (v × t) / 2",
            solutions: [
              {
                label: "Method: ultrasound echo depth",
                steps: [
                  "Total distance = v × t = 1500 × (9.0 × 10^-5)",
                  "Total distance = 0.135 m (round trip)",
                  "depth = 0.135 / 2",
                  "depth = 0.0675 m ≈ 6.8 cm",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq2-05",
            question: "Explain why sound travels faster in steel than in air, referring to the arrangement of particles.",
            marks: 3,
            modelAnswer: "In steel the particles are very close together and are held by strong, stiff bonds. A vibration is therefore passed from one particle to the next almost immediately, so the wave travels quickly. In air the particles are far apart with weak interactions, so it takes longer for a vibration to be passed on, and the sound travels more slowly.",
            markScheme: [
              "In steel particles are closer together / bonds are stiffer (stronger)",
              "Vibrations are passed on faster from particle to particle",
              "In air particles are far apart / interact weakly, so sound is slower",
            ],
            commonError: "Saying solids are 'denser so sound is faster' as the whole reason — the stiffness of the bonds is the key factor.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "core",
            hints: [
              "Compare particle spacing in a solid and a gas.",
              "Compare the strength/stiffness of the bonds.",
              "How does this affect how quickly a vibration is passed on?",
            ],
            strategy: "Closer, stiffer particles ⇒ faster transmission",
          },
          {
            id: "phys-sound-em-bq2-06",
            question: "A student measures the speed of sound in air. She stands 50 m from a wall, claps once, and uses a stopwatch to time the echo at 0.29 s. (a) Calculate the speed of sound she obtains. (b) Suggest one improvement that would reduce the uncertainty in her result.",
            marks: 4,
            modelAnswer: "(a) Total distance = 2 × 50 = 100 m. speed = distance / time = 100 / 0.29 = 345 m/s (≈ 340 m/s). (b) Reaction-time error in starting/stopping the stopwatch is large for a single clap; she could clap rhythmically in time with the echoes and time many claps (e.g. 20), then divide the total time by the number of intervals — this makes the timed interval much longer than her reaction time and reduces the percentage uncertainty.",
            markScheme: [
              "(a) Total distance = 2 × 50 = 100 m",
              "(a) speed = 100 / 0.29 ≈ 345 m/s (accept 340–345 m/s)",
              "(b) Time many claps/echoes and average / clap in rhythm with the echo",
              "(b) This reduces the percentage uncertainty from reaction time",
            ],
            commonError: "Forgetting to double the distance in (a); or suggesting 'measure more carefully' without a concrete method in (b).",
            guideRef: "Reflection of Sound and Echoes",
            difficulty: "challenge",
            hints: [
              "Double the wall distance for the round trip.",
              "speed = distance / time.",
              "Reaction time dominates a single short measurement.",
              "How could you make the measured time much longer?",
            ],
            strategy: "v = 2d / t, then reduce timing uncertainty",
            solutions: [
              {
                label: "Method: speed from single echo",
                steps: [
                  "Round-trip distance = 2 × 50 = 100 m",
                  "speed = distance / time = 100 / 0.29",
                  "speed ≈ 345 m/s",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq2-07",
            question: "State one use and one danger of X-rays.",
            marks: 2,
            modelAnswer: "Use: producing images of bones (or other dense tissue) in medicine, or scanning luggage at airport security. Danger: X-rays are ionising, so they can damage cells and DNA, increasing the risk of cancer with high or repeated doses.",
            markScheme: [
              "Use: medical imaging of bones / airport security scanning",
              "Danger: ionising / damages cells / DNA / can cause cancer",
            ],
            commonError: "Giving 'heating' as the danger — X-ray harm is from ionisation, not heating.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bq2-08",
            question: "Infrared and ultraviolet lie on either side of the visible spectrum. (a) Which one has the longer wavelength? (b) Give one use of infrared. (c) Explain why ultraviolet, but not infrared, is described as ionising.",
            marks: 4,
            modelAnswer: "(a) Infrared has the longer wavelength (it sits just beyond the red end of visible light). (b) Infrared is used in remote controls, thermal imaging, optical-fibre communication, or grills/heaters. (c) Ultraviolet has a higher frequency than infrared, so each UV photon carries more energy — enough to remove electrons from atoms (ionisation) and damage DNA. Infrared photons have too little energy to ionise; they only cause heating.",
            markScheme: [
              "(a) Infrared has the longer wavelength",
              "(b) A correct IR use: remote control / thermal imaging / optical fibre / heater",
              "(c) UV has higher frequency / more energy per photon",
              "(c) Enough energy to remove electrons / ionise / damage DNA, unlike IR",
            ],
            commonError: "Thinking higher intensity rather than higher photon energy makes UV ionising — it is the frequency/photon energy that matters.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Infrared is just beyond red; UV is just beyond violet.",
              "Which end has the longer wavelength?",
              "Higher frequency means more energy per photon.",
              "Ionisation needs enough energy to remove electrons.",
            ],
            strategy: "Higher frequency ⇒ more photon energy ⇒ ionising",
          },
          {
            id: "phys-sound-em-bq2-09",
            question: "A sonar system on a ship sends a pulse to the seabed. The seabed is 1200 m below the ship and the speed of sound in seawater is 1500 m/s. Calculate the time between sending the pulse and receiving the echo.",
            marks: 3,
            modelAnswer: "The pulse travels down and back, so total distance = 2 × 1200 = 2400 m. time = distance / speed = 2400 / 1500 = 1.6 s.",
            markScheme: [
              "Total distance = 2 × 1200 = 2400 m (doubling)",
              "time = distance / speed = 2400 / 1500",
              "time = 1.6 s",
            ],
            commonError: "Using 1200 m instead of 2400 m, giving 0.80 s.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "The pulse goes down AND comes back.",
              "Total distance = 2 × 1200 m.",
              "time = distance / speed.",
            ],
            strategy: "Double the depth, then t = d / v",
            solutions: [
              {
                label: "Method: round-trip time",
                steps: [
                  "Total distance = 2 × 1200 = 2400 m",
                  "time = distance / speed = 2400 / 1500",
                  "time = 1.6 s",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq2-10",
            question: "Visible light has frequencies from about 4.3 × 10^14 Hz (red) to about 7.5 × 10^14 Hz (violet). Using c = 3 × 10^8 m/s, calculate the wavelength of red light and state whether violet light has a longer or shorter wavelength than red.",
            marks: 4,
            modelAnswer: "λ_red = c / f = (3 × 10^8) / (4.3 × 10^14) = 7.0 × 10^-7 m (700 nm). Because violet has a higher frequency than red, and λ = c / f means wavelength is inversely proportional to frequency at fixed speed, violet light has a shorter wavelength than red.",
            markScheme: [
              "Use of λ = c / f",
              "Substitution: (3 × 10^8) / (4.3 × 10^14)",
              "λ_red ≈ 7.0 × 10^-7 m (accept 6.9–7.0 × 10^-7 m)",
              "Violet has a shorter wavelength (higher f ⇒ shorter λ)",
            ],
            commonError: "Concluding violet has a longer wavelength because its frequency is higher — frequency and wavelength are inversely related.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "challenge",
            hints: [
              "Use λ = c / f for the red light.",
              "Divide 3 × 10^8 by 4.3 × 10^14.",
              "Higher frequency means shorter or longer wavelength?",
              "Violet has the higher frequency of the two.",
            ],
            strategy: "λ = c / f; higher f ⇒ shorter λ",
            solutions: [
              {
                label: "Method: wavelength of red, then compare",
                steps: [
                  "λ = c / f",
                  "λ_red = (3 × 10^8) / (4.3 × 10^14)",
                  "λ_red ≈ 7.0 × 10^-7 m (700 nm)",
                  "Violet has higher f, so by λ = c / f its wavelength is shorter than red's",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-sound-em-bankqa-3",
        title: "Question Bank — Structured Paper 3",
        description: "Ten structured questions on longitudinal waves, the audible range, echoes, and EM calculations.",
        questions: [
          {
            id: "phys-sound-em-bq3-01",
            question: "State the meaning of the term 'longitudinal wave' and give one example.",
            marks: 2,
            modelAnswer: "A longitudinal wave is one in which the particle vibrations are parallel to the direction in which the wave (energy) travels. Example: a sound wave (also a slinky pushed and pulled along its length).",
            markScheme: [
              "Particle vibrations are parallel to the direction of energy transfer / wave travel",
              "Correct example: sound / compression wave on a slinky",
            ],
            commonError: "Describing vibrations as perpendicular (that is transverse) or giving light as the example.",
            guideRef: "Sound as a Longitudinal Wave",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bq3-02",
            question: "State the human audible frequency range, and explain what is meant by infrasound and ultrasound in relation to it.",
            marks: 3,
            modelAnswer: "The human audible range is 20 Hz to 20 000 Hz (20 kHz). Infrasound is sound with a frequency below 20 Hz (below the range). Ultrasound is sound with a frequency above 20 kHz (above the range).",
            markScheme: [
              "Audible range 20 Hz to 20 000 Hz (20 kHz)",
              "Infrasound is below 20 Hz",
              "Ultrasound is above 20 kHz",
            ],
            commonError: "Mixing up infrasound and ultrasound, or stating the range as 20 Hz–2 kHz.",
            guideRef: "Frequency, Pitch, Amplitude, Loudness, and the Audible Range",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bq3-03",
            question: "A tuning fork vibrates at 512 Hz. (a) State what 512 Hz tells you about the fork. (b) The speed of sound in air is 340 m/s. Calculate the wavelength of the sound produced.",
            marks: 4,
            modelAnswer: "(a) The fork makes 512 complete vibrations every second, producing a sound wave of frequency 512 Hz. (b) λ = v / f = 340 / 512 = 0.66 m (2 s.f.).",
            markScheme: [
              "(a) 512 complete vibrations (cycles) per second",
              "(b) Use λ = v / f",
              "(b) Substitution: 340 / 512",
              "(b) λ = 0.66 m (accept 0.66–0.67 m)",
            ],
            commonError: "In (b), multiplying instead of dividing, or forgetting units.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "core",
            hints: [
              "Frequency in Hz = cycles per second.",
              "Use λ = v / f.",
              "Divide 340 by 512.",
            ],
            strategy: "λ = v / f",
            solutions: [
              {
                label: "Method: wavelength from frequency",
                steps: [
                  "λ = v / f",
                  "λ = 340 / 512",
                  "λ = 0.66 m (2 s.f.)",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq3-04",
            question: "A person stands between two parallel cliffs. They clap once and hear two echoes: the first after 1.2 s and the second after 2.0 s. The speed of sound in air is 340 m/s. (a) Calculate the distance to the nearer cliff. (b) Calculate the distance to the farther cliff.",
            marks: 4,
            modelAnswer: "(a) For the nearer cliff: distance to cliff = (v × t) / 2 = (340 × 1.2) / 2 = 408 / 2 = 204 m. (b) For the farther cliff: distance = (340 × 2.0) / 2 = 680 / 2 = 340 m.",
            markScheme: [
              "(a) Use distance = (v × t) / 2",
              "(a) Nearer cliff = (340 × 1.2) / 2 = 204 m",
              "(b) Farther cliff = (340 × 2.0) / 2 = 340 m",
              "Both answers halved correctly (round trip)",
            ],
            commonError: "Not halving, giving 408 m and 680 m (the round-trip distances).",
            guideRef: "Reflection of Sound and Echoes",
            difficulty: "challenge",
            hints: [
              "Each echo is a separate round trip to one cliff.",
              "distance = (v × t) / 2 for each echo.",
              "Use t = 1.2 s for the nearer, t = 2.0 s for the farther.",
              "Halve each round-trip distance.",
            ],
            strategy: "Treat each echo separately with d = (v × t) / 2",
            solutions: [
              {
                label: "Method: two separate echoes",
                steps: [
                  "Nearer: d = (v × t) / 2 = (340 × 1.2) / 2 = 204 m",
                  "Farther: d = (v × t) / 2 = (340 × 2.0) / 2 = 340 m",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq3-05",
            question: "All electromagnetic waves travel at the same speed in a vacuum. State this speed, and explain what this means for the relationship between the frequency and wavelength of different EM waves.",
            marks: 3,
            modelAnswer: "The speed is c ≈ 3 × 10^8 m/s. Because v = f × λ and v (= c) is the same for every EM wave in a vacuum, frequency and wavelength must be inversely proportional: an EM wave with a higher frequency has a shorter wavelength, and vice versa.",
            markScheme: [
              "Speed c ≈ 3 × 10^8 m/s",
              "Since v = f × λ and v is fixed at c",
              "f and λ are inversely proportional (higher f ⇒ shorter λ)",
            ],
            commonError: "Saying higher frequency means longer wavelength — they are inversely related.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "What is the speed of EM waves in a vacuum?",
              "Write down v = f × λ with v fixed.",
              "If the product is constant, how do f and λ relate?",
            ],
            strategy: "Fixed v ⇒ f and λ inversely proportional",
          },
          {
            id: "phys-sound-em-bq3-06",
            question: "An X-ray machine produces X-rays of frequency 3.0 × 10^18 Hz. Using c = 3 × 10^8 m/s, calculate their wavelength.",
            marks: 3,
            modelAnswer: "λ = c / f = (3 × 10^8) / (3.0 × 10^18) = 1.0 × 10^-10 m. This very short wavelength is typical of X-rays.",
            markScheme: [
              "Use λ = c / f",
              "Substitution: (3 × 10^8) / (3.0 × 10^18)",
              "λ = 1.0 × 10^-10 m",
            ],
            commonError: "Mishandling the powers of ten, e.g. 10^8 / 10^18 = 10^-10 (not 10^10).",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Use λ = c / f.",
              "Divide the numbers: 3 / 3.0 = 1.0.",
              "Subtract the powers: 10^8 / 10^18 = 10^-10.",
            ],
            strategy: "λ = c / f, subtract indices",
            solutions: [
              {
                label: "Method: wavelength of X-rays",
                steps: [
                  "λ = c / f",
                  "λ = (3 × 10^8) / (3.0 × 10^18)",
                  "λ = 1.0 × 10^-10 m",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq3-07",
            question: "Explain why a microwave oven uses microwaves and a television remote control uses infrared, referring to a property of each region.",
            marks: 3,
            modelAnswer: "Microwaves are absorbed strongly by water molecules in food, transferring energy that heats the food throughout, which is why an oven uses them. Infrared travels only a short, line-of-sight distance and is easily produced by small cheap emitters, and it does not pass through walls to interfere with neighbouring devices, which makes it ideal for the short-range signalling a remote control needs.",
            markScheme: [
              "Microwaves are absorbed by water in food / transfer energy to heat it",
              "Infrared is short-range / line-of-sight",
              "This makes IR suitable for short-range remote signalling (no interference through walls)",
            ],
            commonError: "Claiming a remote uses microwaves or radio, or that an oven uses infrared, without linking to the property.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Why does food heat in a microwave oven?",
              "What is special about how far infrared travels?",
              "Why would a longer-range wave be a problem for a remote?",
            ],
            strategy: "Link the region's property to its use",
          },
          {
            id: "phys-sound-em-bq3-08",
            question: "A loudspeaker plays a pure note. Sketch in words how the displacement of an air particle near the speaker changes with time, and explain how the graph would change if (a) the note were made louder and (b) the note were made higher in pitch.",
            marks: 4,
            modelAnswer: "The displacement of the air particle oscillates back and forth about its rest position, repeating regularly with time (a wave-like, oscillating pattern). (a) Making the note louder increases the amplitude, so the oscillation reaches a greater maximum displacement, but the time for each cycle is unchanged. (b) Making the note higher in pitch increases the frequency, so the oscillations are closer together in time (shorter period / more cycles per second), while the amplitude can stay the same.",
            markScheme: [
              "Displacement oscillates regularly about a rest position with time",
              "(a) Louder ⇒ larger amplitude (greater maximum displacement)",
              "(a) Period/frequency unchanged by loudness",
              "(b) Higher pitch ⇒ higher frequency / shorter period (cycles closer together)",
            ],
            commonError: "Changing the frequency when asked about loudness, or the amplitude when asked about pitch.",
            guideRef: "Frequency, Pitch, Amplitude, Loudness, and the Audible Range",
            difficulty: "core",
            hints: [
              "What does a particle's displacement do over time for a steady note?",
              "Louder changes which feature of the oscillation?",
              "Higher pitch changes which feature?",
              "Keep amplitude and frequency changes separate.",
            ],
            strategy: "Amplitude ↔ loudness; period/frequency ↔ pitch",
          },
          {
            id: "phys-sound-em-bq3-09",
            question: "A ship's sonar sends a pulse and receives the seabed echo after 0.16 s. The depth of the seabed is 120 m. Calculate the speed of sound in the seawater.",
            marks: 3,
            modelAnswer: "The pulse travels down and back: total distance = 2 × 120 = 240 m. speed = distance / time = 240 / 0.16 = 1500 m/s.",
            markScheme: [
              "Total distance = 2 × 120 = 240 m",
              "speed = distance / time = 240 / 0.16",
              "speed = 1500 m/s",
            ],
            commonError: "Using 120 m instead of 240 m, giving 750 m/s.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "The pulse covers twice the depth.",
              "Total distance = 2 × 120 m.",
              "speed = distance / time.",
            ],
            strategy: "v = 2d / t for an echo",
            solutions: [
              {
                label: "Method: speed from sonar echo",
                steps: [
                  "Total distance = 2 × 120 = 240 m",
                  "speed = distance / time = 240 / 0.16",
                  "speed = 1500 m/s",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq3-10",
            question: "A radio wave has a wavelength of 0.030 m. (a) Calculate its frequency using c = 3 × 10^8 m/s. (b) State which region of the EM spectrum this short wavelength actually corresponds to, and give one use of that region.",
            marks: 4,
            modelAnswer: "(a) f = c / λ = (3 × 10^8) / 0.030 = 1.0 × 10^10 Hz (10 GHz). (b) A wavelength of a few centimetres and a frequency of about 10 GHz lies in the microwave region, which is used for satellite/mobile-phone communication (or radar). (Note: a 3 cm wave is at the boundary of radio/microwave; at this short wavelength it behaves as a microwave.)",
            markScheme: [
              "(a) Use f = c / λ",
              "(a) f = (3 × 10^8) / 0.030 = 1.0 × 10^10 Hz",
              "(b) This is the microwave region",
              "(b) A correct microwave use: satellite / mobile communication / radar",
            ],
            commonError: "Treating a 3 cm wave as a long-wavelength radio broadcast wave — at 10 GHz it is a microwave.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "challenge",
            hints: [
              "Use f = c / λ.",
              "Divide 3 × 10^8 by 0.030.",
              "Express in standard form and in GHz.",
              "A few-cm wavelength at ~10 GHz is which region?",
            ],
            strategy: "f = c / λ, then identify the region",
            solutions: [
              {
                label: "Method: frequency and region",
                steps: [
                  "f = c / λ = (3 × 10^8) / 0.030",
                  "f = 1.0 × 10^10 Hz = 10 GHz",
                  "Wavelength ~3 cm, f ~10 GHz ⇒ microwave region",
                  "Use: satellite / mobile communication / radar",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "phys-sound-em-bankqa-4",
        title: "Question Bank — Structured Paper 4",
        description: "Ten structured questions blending sound transmission, ultrasound timing, and the EM spectrum.",
        questions: [
          {
            id: "phys-sound-em-bq4-01",
            question: "Give the meaning of compression and rarefaction in a sound wave.",
            marks: 2,
            modelAnswer: "A compression is a region of a sound wave where the particles are pushed close together, so the pressure is above normal. A rarefaction is a region where the particles are spread apart, so the pressure is below normal.",
            markScheme: [
              "Compression: particles close together / pressure above normal",
              "Rarefaction: particles spread apart / pressure below normal",
            ],
            commonError: "Swapping the two definitions.",
            guideRef: "Sound as a Longitudinal Wave",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bq4-02",
            question: "A factory uses an ultrasonic cleaning bath. (a) State the frequency range that counts as ultrasound. (b) Explain how the ultrasound removes dirt from objects placed in the bath.",
            marks: 3,
            modelAnswer: "(a) Ultrasound is any sound above 20 kHz (above the human hearing limit). (b) The ultrasound creates rapid pressure variations in the liquid that cause tiny bubbles to form and then collapse violently (cavitation). The energy released as the bubbles collapse dislodges dirt and grease, even from awkward crevices on the object.",
            markScheme: [
              "(a) Ultrasound is above 20 kHz",
              "(b) Rapid pressure changes form and collapse tiny bubbles (cavitation)",
              "(b) The collapsing bubbles dislodge / knock off the dirt",
            ],
            commonError: "Saying the ultrasound 'shakes' or 'melts' the dirt off without mentioning bubbles/cavitation.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "Define ultrasound by frequency.",
              "What do rapid pressure changes do to bubbles in the liquid?",
              "What happens when those bubbles collapse?",
            ],
            strategy: "Cavitation dislodges dirt",
          },
          {
            id: "phys-sound-em-bq4-03",
            question: "A submarine sends a sonar pulse horizontally towards an underwater cliff. The echo returns after 3.0 s. The speed of sound in seawater is 1500 m/s. Calculate the distance from the submarine to the cliff.",
            marks: 3,
            modelAnswer: "distance = (v × t) / 2 = (1500 × 3.0) / 2 = 4500 / 2 = 2250 m.",
            markScheme: [
              "Use distance = (v × t) / 2",
              "Substitution: (1500 × 3.0)",
              "distance = 2250 m",
            ],
            commonError: "Forgetting to divide by 2, giving 4500 m.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "The pulse goes to the cliff and back.",
              "distance = (v × t) / 2.",
              "Substitute v = 1500 m/s, t = 3.0 s.",
            ],
            strategy: "distance = (v × t) / 2",
            solutions: [
              {
                label: "Method: horizontal sonar echo",
                steps: [
                  "distance = (v × t) / 2",
                  "distance = (1500 × 3.0) / 2",
                  "distance = 4500 / 2",
                  "distance = 2250 m",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq4-04",
            question: "Explain why ultrasound, rather than ordinary audible sound, is used to obtain detailed images of structures inside the body.",
            marks: 3,
            modelAnswer: "Ultrasound has a much higher frequency than audible sound, so (at the same speed in tissue) it has a much shorter wavelength. A shorter wavelength can resolve smaller details, because the wave can only image features that are larger than about its wavelength. Audible sound has too long a wavelength to show fine detail, so ultrasound gives a much sharper image.",
            markScheme: [
              "Ultrasound has higher frequency ⇒ shorter wavelength",
              "Shorter wavelength gives better resolution / can show smaller detail",
              "Audible sound's longer wavelength cannot resolve fine detail",
            ],
            commonError: "Saying ultrasound is 'stronger' or 'faster' rather than that its shorter wavelength gives better resolution.",
            guideRef: "Ultrasound and Its Uses",
            difficulty: "core",
            hints: [
              "Compare the frequency of ultrasound and audible sound.",
              "How does frequency relate to wavelength at fixed speed?",
              "What does a short wavelength let you resolve?",
            ],
            strategy: "Short wavelength ⇒ fine resolution",
          },
          {
            id: "phys-sound-em-bq4-05",
            question: "A wave has a speed of 340 m/s in air. (a) If its frequency is 1700 Hz, calculate its wavelength. (b) The same source is used underwater, where the speed of sound is 1500 m/s and the frequency stays the same. Calculate the new wavelength, and state whether it is longer or shorter than in air.",
            marks: 4,
            modelAnswer: "(a) λ = v / f = 340 / 1700 = 0.20 m. (b) In water: λ = v / f = 1500 / 1700 = 0.88 m. The frequency is unchanged but the speed is greater, so by λ = v / f the wavelength is longer in water than in air.",
            markScheme: [
              "(a) λ = v / f = 340 / 1700 = 0.20 m",
              "(b) λ = 1500 / 1700 = 0.88 m (accept 0.88–0.89 m)",
              "(b) Longer in water",
              "(b) Reason: same f, greater speed ⇒ longer λ",
            ],
            commonError: "Assuming the wavelength stays the same in both media; it is the frequency that is fixed by the source.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "challenge",
            hints: [
              "Use λ = v / f for each medium.",
              "Part (a): 340 / 1700.",
              "Part (b): use 1500 m/s with the same 1700 Hz.",
              "Compare the two wavelengths.",
            ],
            strategy: "Same f, different v ⇒ different λ",
            solutions: [
              {
                label: "Method: wavelength in two media",
                steps: [
                  "(a) λ_air = v / f = 340 / 1700 = 0.20 m",
                  "(b) frequency unchanged at 1700 Hz",
                  "λ_water = v / f = 1500 / 1700 = 0.88 m",
                  "Greater speed at same f ⇒ longer wavelength in water",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq4-06",
            question: "Gamma rays and radio waves are at opposite ends of the electromagnetic spectrum. Compare them in terms of (a) frequency, (b) wavelength, and (c) one use of each.",
            marks: 4,
            modelAnswer: "(a) Gamma rays have a much higher frequency than radio waves (gamma is the highest-frequency region; radio the lowest). (b) Gamma rays have a much shorter wavelength than radio waves (radio has the longest wavelength). (c) Gamma rays: treating cancer (radiotherapy) or sterilising medical equipment. Radio waves: broadcasting radio/TV signals or Wi-Fi.",
            markScheme: [
              "(a) Gamma rays have higher frequency than radio waves",
              "(b) Gamma rays have shorter wavelength than radio waves",
              "(c) A correct gamma-ray use: radiotherapy / sterilising equipment",
              "(c) A correct radio-wave use: broadcasting / Wi-Fi / communication",
            ],
            commonError: "Reversing frequency and wavelength (they are inversely related, so the highest frequency has the shortest wavelength).",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Where is gamma in the order? Where is radio?",
              "Higher frequency means shorter or longer wavelength?",
              "Recall a use for each region.",
            ],
            strategy: "Opposite ends: high f/short λ vs low f/long λ",
          },
          {
            id: "phys-sound-em-bq4-07",
            question: "A student claims: 'Sound and light are the same kind of wave because both can be reflected.' Give two ways in which sound and light waves are fundamentally different.",
            marks: 2,
            modelAnswer: "Sound is a longitudinal mechanical wave, whereas light is a transverse electromagnetic wave. Sound needs a medium and cannot travel through a vacuum, whereas light needs no medium and travels through a vacuum. (Also acceptable: they travel at very different speeds — light ≈ 3 × 10^8 m/s, sound ≈ 340 m/s in air.)",
            markScheme: [
              "Sound longitudinal vs light transverse",
              "Sound needs a medium / light does not (or vastly different speeds)",
            ],
            commonError: "Listing only similarities, or repeating that both reflect (which is the point being challenged).",
            guideRef: "Sound as a Longitudinal Wave",
            difficulty: "warmup",
          },
          {
            id: "phys-sound-em-bq4-08",
            question: "A microwave signal is sent from Earth to a satellite 36 000 km above the surface and is then relayed straight back to a different ground station the same distance away. EM waves travel at 3 × 10^8 m/s. Calculate the total time for the signal to travel up to the satellite and back down (total path 72 000 km).",
            marks: 4,
            modelAnswer: "Total path = 72 000 km = 7.2 × 10^7 m. time = distance / speed = (7.2 × 10^7) / (3 × 10^8) = 0.24 s.",
            markScheme: [
              "Convert 72 000 km to metres: 7.2 × 10^7 m",
              "time = distance / speed",
              "time = (7.2 × 10^7) / (3 × 10^8)",
              "time = 0.24 s",
            ],
            commonError: "Not converting km to m, or using the speed of sound instead of the speed of EM waves.",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "challenge",
            hints: [
              "Convert 72 000 km to metres first.",
              "Use time = distance / speed.",
              "Use the EM speed 3 × 10^8 m/s, not the speed of sound.",
              "Divide carefully with the powers of ten.",
            ],
            strategy: "Convert units, then t = d / c",
            solutions: [
              {
                label: "Method: signal travel time",
                steps: [
                  "Total distance = 72 000 km = 7.2 × 10^7 m",
                  "time = distance / speed = (7.2 × 10^7) / (3 × 10^8)",
                  "time = 0.24 s",
                ],
              },
            ],
          },
          {
            id: "phys-sound-em-bq4-09",
            question: "State one use and one danger for EACH of the following EM regions: (a) infrared, (b) gamma rays.",
            marks: 4,
            modelAnswer: "(a) Infrared — Use: remote controls / thermal imaging / optical-fibre communication / grills and heaters. Danger: it causes heating that can burn skin. (b) Gamma rays — Use: radiotherapy to kill cancer cells / sterilising medical equipment. Danger: they are strongly ionising and can damage cells and DNA, causing cancer or, at high doses, radiation sickness/death.",
            markScheme: [
              "(a) Correct IR use: remote / thermal imaging / optical fibre / heater",
              "(a) IR danger: burns / skin heating",
              "(b) Correct gamma use: radiotherapy / sterilisation",
              "(b) Gamma danger: ionising / damages DNA / cancer / radiation sickness",
            ],
            commonError: "Giving an ionising danger for infrared (it only heats) or a mere 'heating' danger for gamma (it is ionising).",
            guideRef: "The Electromagnetic Spectrum",
            difficulty: "core",
            hints: [
              "Infrared is non-ionising — its harm is heating.",
              "Gamma is strongly ionising — its harm is to cells/DNA.",
              "Recall a use for each region.",
            ],
            strategy: "Pair use and hazard region-by-region",
          },
          {
            id: "phys-sound-em-bq4-10",
            question: "A lightning strike happens 1.5 km away. Light reaches the observer almost instantly, but the thunder is delayed. The speed of sound in air is 340 m/s. (a) Calculate the time between seeing the flash and hearing the thunder. (b) Explain why this is a one-way calculation with no division by 2.",
            marks: 4,
            modelAnswer: "(a) distance = 1.5 km = 1500 m. time = distance / speed = 1500 / 340 = 4.4 s. (b) The sound travels directly from the lightning to the observer along a single one-way path; it is not reflected back, so there is no round trip and no factor of 2 (unlike an echo or sonar problem).",
            markScheme: [
              "(a) Convert 1.5 km = 1500 m",
              "(a) time = distance / speed = 1500 / 340",
              "(a) time = 4.4 s (accept 4.4–4.5 s)",
              "(b) Sound travels one way only / not reflected, so no division by 2",
            ],
            commonError: "Dividing by 2 as if it were an echo, or forgetting to convert km to m.",
            guideRef: "Speed of Sound and Measuring It",
            difficulty: "challenge",
            hints: [
              "Convert 1.5 km to metres.",
              "Use time = distance / speed.",
              "Is the sound reflected back, or does it travel one way?",
              "Echoes need ÷2; a direct path does not.",
            ],
            strategy: "Direct path: t = d / v (no halving)",
            solutions: [
              {
                label: "Method: thunder delay",
                steps: [
                  "distance = 1.5 km = 1500 m",
                  "time = distance / speed = 1500 / 340",
                  "time = 4.4 s",
                  "One-way path (no reflection) ⇒ no division by 2",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
