"""Transcribe each live-action shot and write veo/<id>.captions.json for burned-in captions.

usage: python caption_shots.py <episode_module> <slug>      (needs: pip install faster-whisper)
Speech is transcribed with Whisper; each segment is matched to the closest quoted line in the
shot's prompt to get its speaker and the script spelling (Whisper hears "Milo" as "Meelo" etc.).
Shots with a narrator voice-over and no quoted dialogue get no captions (the VO line is captioned).
Prints every transcript so a person can check the shot actually says its lines.
"""
import difflib, importlib, json, os, re, sys
from faster_whisper import WhisperModel

HERE = os.path.dirname(os.path.abspath(__file__))


def speakers(prompt):
    """[(speaker, line)] for every quoted line in the prompt, speaker inferred from the text just before it."""
    out = []
    for m in re.finditer(r'"([^"]+)"', prompt):
        before = prompt[max(0, m.start() - 160):m.start()].lower()
        who = "MEERA"
        last = max((before.rfind(k), v) for k, v in [("mother", "MUM"), ("mum", "MUM"), ("teacher", "TEACHER"), ("schoolgirl", "MEERA"), ("meera", "MEERA"), ("girl", "MEERA")])
        if last[0] >= 0:
            who = last[1]
        out.append((who, m.group(1)))
    return out


def main():
    mod, slug = sys.argv[1], sys.argv[2]
    sys.path.insert(0, os.path.join(os.path.dirname(HERE), "episodes"))
    ep = importlib.import_module(mod).EPISODE
    vdir = os.path.join(HERE, slug, "veo")
    model = WhisperModel("small.en", device="cpu", compute_type="int8")
    for sc in ep["scenes"]:
        for c in sc.get("clips", []):
            f = os.path.join(vdir, c.get("file") or f"{c['id']}.mp4")
            if not os.path.exists(f):
                print("missing", f); continue
            import subprocess
            if not subprocess.run(["ffprobe", "-v", "error", "-select_streams", "a", "-show_entries", "stream=index", "-of", "csv=p=0", f],
                                  capture_output=True, text=True).stdout.strip():
                print(f"== {c['id']}: (no audio track)"); continue
            prompt = c.get("prompt", "")
            if c.get("file") == "c2_reuse.mp4":
                prompt = 'girl: "Okay. Milo. Let\'s go." girl: "Ow! Ow ow ow!" mother: "Blow on it first! How many times I have to tell you?"'
            script = speakers(prompt)
            segs = list(model.transcribe(f, vad_filter=True)[0])
            caps = []
            for s in segs:
                heard = s.text.strip()
                if not script:
                    continue
                best = max(script, key=lambda sl: difflib.SequenceMatcher(None, heard.lower(), sl[1].lower()).ratio())
                score = difflib.SequenceMatcher(None, heard.lower(), best[1].lower()).ratio()
                text = best[1] if score > 0.75 else heard
                caps.append({"start": round(s.start, 2), "end": round(max(s.end, s.start + 1.2), 2), "who": best[0], "text": text, "heard": heard, "match": round(score, 2)})
            # merge consecutive segments that matched the same script line
            merged = []
            for cp in caps:
                if merged and merged[-1]["text"] == cp["text"] and merged[-1]["who"] == cp["who"]:
                    merged[-1]["end"] = cp["end"]
                else:
                    merged.append(cp)
            json.dump(merged, open(os.path.splitext(f)[0] + ".captions.json", "w"), indent=1)
            print(f"== {c['id']}: " + " | ".join(f"{s.start:.1f}-{s.end:.1f} {s.text.strip()}" for s in segs))


if __name__ == "__main__":
    main()
