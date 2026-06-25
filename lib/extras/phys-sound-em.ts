import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  topicId: "phys-sound-em",
  hook:
    "Sound cannot exist in space — there is no medium for the pressure waves to travel through, which is why the Apollo astronauts could only communicate by radio. Yet radio waves, visible light, X-rays, and gamma rays are all the same thing — electromagnetic radiation — differing only in how fast they oscillate.",
  didYouKnow: [
    "The entire electromagnetic spectrum spans an enormous range of frequencies, yet human eyes can detect only a tiny sliver — wavelengths from about 380 nm (violet) to 700 nm (red). Bees can see ultraviolet patterns on flowers invisible to us; pit vipers detect infrared heat.",
    "Sound travels at roughly 343 m/s in air at 20 °C, but 1,480 m/s in water and about 5,120 m/s in steel — it travels faster in denser, more elastic solids because the restoring forces between particles are stronger.",
    "The decibel scale is logarithmic: every increase of 10 dB represents a tenfold increase in sound intensity. A rock concert at 110 dB is not twice as loud as a normal conversation at 60 dB — it is 100,000 times more intense.",
    "Microwaves used in radar were discovered accidentally in 1945 when engineer Percy Spencer noticed a chocolate bar in his pocket had melted while he was standing near an active magnetron (a radar transmitter).",
    "Gamma rays from a single nuclear explosion or supernova can carry more energy in a fraction of a second than the Sun radiates in thousands of years — their photons have frequencies above 10¹⁹ Hz.",
    "Ultrasound used in medical imaging typically operates between 2 and 18 MHz — far above the 20 kHz upper limit of human hearing. The same principle (echolocation) is used by bats, dolphins, and some species of blind cavefish.",
  ],
  experiments: [
    {
      title: "Visualising Sound Waves with a Speaker and Salt",
      materials: [
        "A small Bluetooth speaker or phone speaker",
        "A piece of cling film or thin plastic bag",
        "A rubber band",
        "Table salt or fine sand",
        "Optional: a tone generator app on a phone",
      ],
      steps: [
        "Stretch a piece of cling film tightly over the speaker opening and secure it with a rubber band so it is taut.",
        "Sprinkle a thin, even layer of salt over the cling film surface.",
        "Play a single sustained note (use a tone generator app set to around 100–400 Hz, or a low-pitched musical note).",
        "Watch the salt — it should bounce and gather into patterns at nodes (points of least vibration).",
        "Slowly change the frequency and observe how the pattern changes at different pitches.",
        "Record or sketch the different patterns you observe at low, medium, and higher frequencies.",
      ],
      science:
        "Sound is a longitudinal pressure wave — the speaker cone pushes and pulls air particles, creating compressions and rarefactions. The cling film vibrates at the same frequency as the sound, causing the salt to bounce. At certain frequencies, the cling film resonates, forming a standing wave with fixed nodes (still points) and antinodes (maximum vibration). Salt collects at the nodes because it is thrown away from the antinodes. This is a version of the Chladni pattern experiment used by scientists to visualise wave modes on vibrating surfaces.",
      safety:
        "Keep the volume moderate to protect hearing. Do not hold the speaker directly against your ear. Wipe up salt spills to avoid damaging electronics.",
    },
    {
      title: "Demonstrating the Electromagnetic Spectrum with a TV Remote",
      materials: [
        "A TV remote control",
        "A smartphone with a front-facing camera",
        "A darkened room",
      ],
      steps: [
        "Open your phone's camera app and switch to the front-facing camera.",
        "Point the remote control at the camera lens and press any button.",
        "Look at the camera screen — you should see a purple-white flash from the remote's LED that is invisible to your naked eye.",
        "Now look at the remote LED directly with your naked eye while pressing a button — you see nothing.",
        "Experiment with pointing the remote at different angles to the camera.",
      ],
      science:
        "TV remote controls use infrared (IR) radiation at wavelengths around 850–950 nm — just beyond the red end of the visible spectrum and therefore invisible to human eyes. However, the CMOS sensor in a smartphone camera responds to a broader range of electromagnetic radiation, including near-infrared, and converts it into a visible signal on screen. This demonstrates that the electromagnetic spectrum extends far beyond what human eyes can detect, and that different detectors respond to different parts of the spectrum. The infrared photons emitted by the LED have exactly the same nature as visible light — they are both electromagnetic waves, just at different frequencies.",
      safety: "No hazards — infrared TV remotes are completely safe at normal operating distances.",
    },
  ],
};
