"""Generate live-action talking clips with Hedra Character-3 (API v3).

usage: python3 hedra_clips.py <work_dir_with_timeline_and_tts_cache> <slug> [only_name ...]
Needs network access to api.hedra.com with the API key injected by the environment's proxy
(or HEDRA_API_KEY set, which is then sent as X-API-Key).

For every line marked {"live": "meera"|"mum"} it uploads the face + that line's exact TTS audio,
renders a 720p 1:1 clip and saves live/<slug>/clips/<scene>_<lineIdx>_<WHO>.mp4.
Cost: ~5-6 US cents per clip (Hedra bills ~5c/s at 720p, short clips round up).
"""
import concurrent.futures as cf, hashlib, json, os, subprocess, sys, tempfile, time, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.dirname(HERE))
from build_audio import VOICES, decode, SR  # noqa: E402

API = "https://api.hedra.com/v3"
KEY = os.environ.get("HEDRA_API_KEY")

# Per-line acting direction. Default is used for lines not listed.
DIRECTION = {
    "meera": "A 15-year-old Singaporean school girl talks to her phone camera in a casual selfie vlog. Natural, playful teenage expressions, slight head movement, realistic.",
    "mum": "An Indian mother in Singapore on a WhatsApp video call with her teenage daughter, affectionately nagging, expressive eyebrows and natural head movement, realistic.",
}
LINE_DIRECTION = {
    "OW! Ow ow ow ow!": "The girl suddenly winces in pain after touching a hot mug, eyes squeezed, then shakes it off, comedic, realistic.",
    "Argh! My eyes!": "The girl squints hard and recoils from blinding sunlight, comedic grimace, realistic.",
    "Ma, I'm fine.": "The girl rolls her eyes slightly and answers her mum with a tired teenage shrug, realistic.",
    "Happy, Ma?": "The girl, slightly out of breath after drinking water, says it with a sarcastic smile, realistic.",
}


def req(method, path, data=None, headers=None):
    h = dict(headers or {})
    if KEY:
        h["X-API-Key"] = KEY
    r = urllib.request.Request(API + path, data=data, method=method, headers=h)
    with urllib.request.urlopen(r, timeout=120) as resp:
        return json.loads(resp.read())


def upload(path):
    out = subprocess.run(["curl", "-sS", "-F", f"file=@{path}"] + (["-H", f"X-API-Key: {KEY}"] if KEY else []) +
                         [API + "/files"], capture_output=True, text=True, check=True).stdout
    return json.loads(out)["url"]


def one(name, face, mp3, prompt, out):
    img, aud = upload(face), upload(mp3)
    body = {"input": {"prompt": prompt, "aspect_ratio": "1:1", "resolution": "720p",
                      "start_image": {"source": "url", "url": img}, "audio": {"source": "url", "url": aud}}}
    job = req("POST", "/models/hedra-character-3", json.dumps(body).encode(), {"Content-Type": "application/json"})
    jid = job["job_id"]
    for _ in range(240):
        st = req("GET", f"/jobs/{jid}/status")["status"]
        if st in ("COMPLETED", "FAILED"):
            break
        time.sleep(5)
    res = req("GET", f"/jobs/{jid}")
    if res["status"] != "COMPLETED":
        raise RuntimeError(f"{name}: {json.dumps(res)[:400]}")
    urllib.request.urlretrieve(res["outputs"][0]["url"], out)
    return name


def main():
    work, slug = sys.argv[1], sys.argv[2]
    only = set(sys.argv[3:])
    tl = json.load(open(os.path.join(work, "timeline.json")))
    adir = os.path.join(HERE, slug); cdir = os.path.join(adir, "clips"); os.makedirs(cdir, exist_ok=True)
    tmp = tempfile.mkdtemp()
    jobs = []
    for sc in tl["scenes"]:
        for i, ln in enumerate(sc["lines"]):
            if not ln.get("live"):
                continue
            name = f"{sc['id']}_{i}_{ln['who']}"
            if only and name not in only:
                continue
            v, r, p = VOICES[ln["who"]]
            key = hashlib.sha1(f"{v}|{r}|{p}|{ln['text']}".encode()).hexdigest()[:16]
            a = decode(os.path.join(work, "tts_cache", key + ".mp3"))
            wav = os.path.join(tmp, name + ".wav"); mp3 = os.path.join(tmp, name + ".mp3")
            import wave, numpy as np
            with wave.open(wav, "wb") as w:
                w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR)
                w.writeframes((np.clip(a, -1, 1) * 32767).astype(np.int16).tobytes())
            subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", wav, "-b:a", "192k", mp3], check=True)
            prompt = LINE_DIRECTION.get(ln["text"], DIRECTION[ln["live"]])
            jobs.append((name, os.path.join(adir, f"face_{ln['live']}.png"), mp3, prompt, os.path.join(cdir, name + ".mp4")))
    with cf.ThreadPoolExecutor(4) as ex:
        for f in cf.as_completed([ex.submit(one, *j) for j in jobs]):
            print("ok", f.result(), flush=True)


if __name__ == "__main__":
    main()
