"""Build voice track + timeline for a Body Corporate episode.

usage: python3 build_audio.py <episode_module> <out_dir>
Produces out_dir/timeline.json and out_dir/audio.wav
"""
import asyncio, hashlib, importlib, json, os, subprocess, sys
import numpy as np

import certifi
if os.path.exists("/root/.ccr/ca-bundle.crt"):
    certifi.where = lambda: "/root/.ccr/ca-bundle.crt"
import edge_tts

SR = 44100
FPS = 24
GAP = 0.22          # silence between lines
SCENE_LEAD = 0.35   # silence at start of each scene

# who: (voice, rate, pitch)
VOICES = {
    "NARR":      ("en-GB-RyanNeural", "+7%", "-2Hz"),
    "HOST":      ("en-SG-LunaNeural", "+10%", "+10Hz"),
    "MUM":       ("en-IN-NeerjaExpressiveNeural", "+6%", "+0Hz"),
    "TEACHER":   ("en-US-MichelleNeural", "-4%", "-6Hz"),
    "CORTEX":    ("en-US-GuyNeural", "+4%", "-4Hz"),
    "RELAY":     ("en-SG-WayneNeural", "+12%", "+0Hz"),
    "HYPO":      ("en-GB-SoniaNeural", "+10%", "+6Hz"),
    "ADREN":     ("en-US-AnaNeural", "+20%", "+12Hz"),
    "CIRC":      ("en-US-BrianNeural", "+10%", "+4Hz"),
    "RADIAL":    ("en-US-EricNeural", "+8%", "-8Hz"),
    "CILIARY":   ("en-AU-WilliamMultilingualNeural", "+12%", "-4Hz"),
    "LIGS":      ("en-GB-ThomasNeural", "-16%", "-10Hz"),
    "LENS":      ("en-US-EmmaNeural", "+2%", "+8Hz"),
    "SWEAT":     ("en-IE-EmilyNeural", "+14%", "+14Hz"),
    "ARTERIOLE": ("en-US-RogerNeural", "+14%", "+0Hz"),
    "INSULIN":   ("en-US-AvaNeural", "+6%", "+2Hz"),
    "GLUCAGON":  ("en-GB-LibbyNeural", "+8%", "+0Hz"),
    "LIVER":     ("en-US-AndrewNeural", "+2%", "-10Hz"),
    "PIT":       ("en-IN-PrabhatNeural", "+10%", "+0Hz"),
    "ADH":       ("en-US-SteffanNeural", "+14%", "+6Hz"),
    "KIDNEY":    ("en-IE-ConnorNeural", "+6%", "-6Hz"),
    "BASIL":     ("en-GB-MaisieNeural", "+10%", "+0Hz"),
}
ALL_CHORUS = ["HYPO", "CORTEX", "RELAY"]


async def tts(text, who, cache):
    voice, rate, pitch = VOICES[who]
    key = hashlib.sha1(f"{voice}|{rate}|{pitch}|{text}".encode()).hexdigest()[:16]
    mp3 = os.path.join(cache, key + ".mp3")
    if not os.path.exists(mp3) or os.path.getsize(mp3) == 0:
        for attempt in range(4):
            try:
                await edge_tts.Communicate(text, voice, rate=rate, pitch=pitch).save(mp3)
                break
            except Exception as e:  # network hiccup
                print("retry", who, e)
                await asyncio.sleep(2 * (attempt + 1))
    return mp3


def decode(mp3):
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", mp3, "-f", "f32le", "-ac", "1", "-ar", str(SR), "-"],
                         capture_output=True, check=True).stdout
    a = np.frombuffer(raw, dtype=np.float32).copy()
    # trim leading/trailing silence
    thr = 0.01
    idx = np.where(np.abs(a) > thr)[0]
    if len(idx):
        a = a[max(0, idx[0] - int(0.03 * SR)): idx[-1] + int(0.06 * SR)]
    return a


def envelope(a):
    hop = SR // FPS
    n = int(np.ceil(len(a) / hop))
    env = np.array([np.sqrt(np.mean(a[i * hop:(i + 1) * hop] ** 2)) if len(a[i * hop:(i + 1) * hop]) else 0 for i in range(n)])
    ref = np.percentile(env, 92) if len(env) else 1
    env = np.clip(env / (ref + 1e-6), 0, 1.2)
    return [round(float(x), 2) for x in env]


# ───────────── SFX (synthesised, no external assets) ─────────────
def _t(d): return np.arange(int(d * SR)) / SR
def _env(n, a=0.005, r=0.1):
    e = np.ones(n); na = max(1, int(a * SR)); nr = max(1, int(r * SR))
    e[:na] = np.linspace(0, 1, na); e[-nr:] *= np.linspace(1, 0, nr); return e

def sfx(name):
    rng = np.random.default_rng(abs(hash(name)) % 2**32)
    if name == "ding":
        t = _t(0.9); s = (np.sin(2*np.pi*1318*t) + 0.5*np.sin(2*np.pi*2637*t)) * np.exp(-t*5); return 0.35*s
    if name == "ping":
        t = _t(0.35); s = np.sin(2*np.pi*1760*t)*np.exp(-t*10); t2=_t(0.35); s2=np.sin(2*np.pi*2349*t2)*np.exp(-t2*10)
        return 0.3*np.concatenate([s[:int(.09*SR)], s2])
    if name == "boing":
        t = _t(0.55); f = 180 + 420*np.exp(-t*6)*np.abs(np.sin(t*40)); ph = 2*np.pi*np.cumsum(f)/SR
        return 0.35*np.sin(ph)*np.exp(-t*4)
    if name == "sizzle":
        n = int(0.6*SR); s = rng.standard_normal(n); s = np.diff(s, prepend=0); return 0.12*s*_env(n, .02, .2)
    if name == "scratch":
        t = _t(0.45); f = 900*np.exp(-t*3)+200; ph = 2*np.pi*np.cumsum(f)/SR
        s = np.sign(np.sin(ph))*0.5 + rng.standard_normal(len(t))*0.4; return 0.16*s*_env(len(t), .005, .15)
    if name == "whoosh":
        n = int(0.6*SR); s = rng.standard_normal(n); k = np.hanning(n)
        # crude band sweep via moving average of varying width
        out = np.convolve(s, np.ones(12)/12, mode="same") * k; return 0.4*out
    if name == "alarm":
        parts = []
        for f in [880, 660, 880, 660]:
            t = _t(0.16); parts.append(np.sign(np.sin(2*np.pi*f*t))*0.5*_env(len(t), .005, .02))
        return 0.13*np.concatenate(parts)
    if name in ("slurp", "gulp"):
        parts = []
        for i in range(3 if name == "gulp" else 5):
            t = _t(0.12); f = 300 + 500*t/0.12 if name == "slurp" else 140 + 60*np.sin(t*30)
            parts.append(np.sin(2*np.pi*np.cumsum(np.full(len(t), 1.0) * f)/SR) * _env(len(t), .01, .05))
            parts.append(np.zeros(int(0.05*SR)))
        return 0.25*np.concatenate(parts)
    if name == "theme":
        # jaunty plucked sitcom sting: I–vi–IV–V arpeggio + bass, ~3.4 s
        notes = [(0.00, 523), (0.14, 659), (0.28, 784), (0.42, 1046), (0.70, 880), (0.84, 784),
                 (0.98, 698), (1.26, 659), (1.40, 698), (1.54, 784), (1.68, 988), (1.96, 1046), (2.10, 1318)]
        bass = [(0.0, 131), (0.7, 110), (1.26, 87), (1.96, 98), (2.1, 131)]
        out = np.zeros(int(3.6*SR))
        for st, f in notes:
            t = _t(0.6); v = (np.sin(2*np.pi*f*t) + 0.3*np.sin(4*np.pi*f*t)) * np.exp(-t*7)
            i = int(st*SR); out[i:i+len(v)] += 0.22*v[:len(out)-i]
        for st, f in bass:
            t = _t(0.7); v = np.sin(2*np.pi*f*t) * np.exp(-t*4)
            i = int(st*SR); out[i:i+len(v)] += 0.3*v[:len(out)-i]
        # snare-ish hits
        for st in [0.42, 1.12, 1.82, 2.1]:
            n = int(0.12*SR); v = rng.standard_normal(n)*np.exp(-np.arange(n)/SR*40); i = int(st*SR); out[i:i+n] += 0.12*v
        return out
    if name.startswith("bump"):
        k = int(name[4:] or 0); scale = [523, 587, 659, 784, 880, 1046]
        r = np.random.default_rng(k); notes = sorted(r.choice(scale, 3, replace=False))
        out = np.zeros(int(0.9*SR))
        for j, f in enumerate(notes):
            t = _t(0.5); v = (np.sin(2*np.pi*f*t) + 0.25*np.sin(4*np.pi*f*t)) * np.exp(-t*9)
            i = int(j*0.09*SR); out[i:i+len(v)] += 0.11*v[:len(out)-i]
        t = _t(0.6); out[:len(t)] += 0.12*np.sin(2*np.pi*notes[0]/4*t)*np.exp(-t*5)
        return out
    return np.zeros(1)


def main():
    mod, out = sys.argv[1], sys.argv[2]
    sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "episodes"))
    ep = importlib.import_module(mod).EPISODE
    cache = os.path.join(out, "tts_cache"); os.makedirs(cache, exist_ok=True)

    # 1) synthesize all lines concurrently
    jobs = []
    for sc in ep["scenes"]:
        for ln in sc["lines"]:
            who, text = ln[0], ln[1]
            if who == "BEAT":
                continue
            for w in (ALL_CHORUS if who == "ALL" else [who]):
                jobs.append((text, w))

    async def run_all():
        sem = asyncio.Semaphore(6)
        async def one(j):
            async with sem:
                return await tts(j[0], j[1], cache)
        return await asyncio.gather(*[one(j) for j in jobs])
    paths = asyncio.run(run_all())
    clip = {}
    for j, p in zip(jobs, paths):
        clip[j] = decode(p)

    # 2) lay out timeline
    t = 0.0
    scenes_out, voice_events, sfx_events = [], [], []
    for sc in ep["scenes"]:
        s_start = t
        if sc.get("shot") in ("host", "card", "confessional", "speed") and sc["id"] != "cold":
            sfx_events.append((t, f"bump{len(scenes_out)}"))
        t += SCENE_LEAD
        lines_out = []
        for ln in sc["lines"]:
            who, payload, opts = ln[0], ln[1], (ln[2] if len(ln) > 2 else {})
            t += opts.get("pre", 0)
            if who == "BEAT":
                dur = float(payload); amp = []
                text = ""
            else:
                text = payload
                if who == "ALL":
                    auds = [clip[(text, w)] for w in ALL_CHORUS]
                    L = max(len(a) for a in auds); mix = np.zeros(L)
                    for a in auds: mix[:len(a)] += a * 0.6
                    a = mix
                else:
                    a = clip[(text, who)]
                dur = len(a) / SR
                voice_events.append((t, a))
                amp = envelope(a)
            if opts.get("sfx"):
                sfx_events.append((t, opts["sfx"]))
            lines_out.append({"who": who, "text": text, "start": round(t, 3), "end": round(t + dur, 3),
                              "amp": amp, **{k: v for k, v in opts.items() if k not in ("pre", "post", "sfx")}})
            t += dur + GAP + opts.get("post", 0)
        scene = {k: v for k, v in sc.items() if k != "lines"}
        scene.update({"start": round(s_start, 3), "end": round(t, 3), "lines": lines_out})
        scenes_out.append(scene)
    total = t + 0.5

    # 3) mix
    mix = np.zeros(int(total * SR) + SR)
    for st, a in voice_events:
        i = int(st * SR); mix[i:i + len(a)] += a
    for st, name in sfx_events:
        a = sfx(name); i = int(st * SR); mix[i:i + len(a)] += a[:len(mix) - i]
    peak = np.max(np.abs(mix)); mix = mix / max(peak, 1e-6) * 0.92
    pcm = (mix * 32767).astype(np.int16)
    import wave
    with wave.open(os.path.join(out, "audio.wav"), "wb") as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())

    meta = {k: v for k, v in ep.items() if k != "scenes"}
    meta.update({"fps": FPS, "duration": round(total, 3), "scenes": scenes_out})
    with open(os.path.join(out, "timeline.json"), "w") as f:
        json.dump(meta, f)
    print(f"duration {total/60:.1f} min, {len(voice_events)} voice clips, {len(scenes_out)} scenes")


if __name__ == "__main__":
    main()
