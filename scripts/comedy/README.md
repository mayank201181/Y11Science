# Body Corporate — mealtime comedy episodes

A workplace mockumentary filmed inside one 15-year-old. Organs are cartoon "monster" co-workers
(sarcastic Hypothalamus, CEO Cortex who's always informed last, Relay Neurone in the spinal-cord
basement, drama-intern Adrenaline…). Each episode teaches one topic end-to-end, with animated
diagrams on the office wall-screen and "Exam Trap" cards.

Pipeline (fully scripted, no manual editing):

1. `episodes/<topic>.py` — the script: scenes, lines, diagram steps, emotes, sound cues.
2. `build_audio.py` — neural TTS per character (edge-tts), lip-sync amplitude envelopes,
   synthesised SFX/stings → `timeline.json` + `audio.wav`.
3. `render/` — deterministic canvas renderer (characters, sets, diagrams, captions);
   `render.mjs` captures frames in parallel headless Chromium → H.264.
4. `make_episode.sh <module> <slug>` runs all three and writes `public/comedy/<slug>.mp4`.

To add an episode: write `episodes/<topic>.py`, add any new diagram to `render/diagrams.js`,
run the script, then register the MP4 in `COMEDY_VIDEOS` in `components/WatchTab.tsx`.
