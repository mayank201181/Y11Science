"""Generate the live-action shots of an episode with Veo 3.1 (via the Hedra v3 API).

usage: python3 veo_shots.py <episode_module> <slug> [--only id,id] [--force]
Writes live/<slug>/veo/<clip id>.mp4 for every clip in a "live" scene that has no file yet.
Faces come from live/<slug>/face_<ref>.png. Cost: $3.20 per 8 s shot (standard quality, with audio).
The API key is injected by the environment's network proxy for api.hedra.com
(or set HEDRA_API_KEY, sent as X-API-Key).
"""
import concurrent.futures as cf, importlib, json, os, subprocess, sys, time, urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
API = "https://api.hedra.com/v3"
KEY = os.environ.get("HEDRA_API_KEY")
QUALITY = os.environ.get("VEO_QUALITY", "standard")


def req(method, path, body=None):
    h = {"Content-Type": "application/json"}
    if KEY:
        h["X-API-Key"] = KEY
    r = urllib.request.Request(API + path, data=json.dumps(body).encode() if body else None, method=method, headers=h)
    try:
        with urllib.request.urlopen(r, timeout=120) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        raise RuntimeError(f"{method} {path}: {e.code} {e.read()[:600]!r}")


def upload(path):
    cmd = ["curl", "-sS", "-F", f"file=@{path}"] + (["-H", f"X-API-Key: {KEY}"] if KEY else []) + [API + "/files"]
    return json.loads(subprocess.run(cmd, capture_output=True, text=True, check=True).stdout)["url"]


def frame_of(vdir, ref):
    """Upload a frame of another clip: ref = ["c2", "first" | "last" | seconds]."""
    src = os.path.join(vdir, f"{ref[0]}.mp4") if os.path.exists(os.path.join(vdir, f"{ref[0]}.mp4")) else os.path.join(vdir, f"{ref[0]}_reuse.mp4")
    png = os.path.join(vdir, f".{ref[0]}_{ref[1]}.png")  # hidden scratch file, not committed
    pos = ["-sseof", "-0.1"] if ref[1] == "last" else (["-ss", str(ref[1])] if not isinstance(ref[1], str) else [])
    subprocess.run(["ffmpeg", "-v", "error", "-y"] + pos + ["-i", src, "-frames:v", "1", png], check=True)
    return {"source": "url", "url": upload(png)}


def shot(clip, adir, out):
    vdir = os.path.dirname(out)
    inp = {"prompt": clip["prompt"],
           "negative_prompt": "subtitles, captions, on-screen text, words on screen, watermark, background music, distorted hands",
           "aspect_ratio": "16:9", "resolution": "720p", "duration_ms": 8000,
           "generate_audio": clip.get("audio", True), "quality": QUALITY}
    # Continuity: a frame of a neighbouring clip as first/last frame (Veo can't combine these with reference photos).
    if clip.get("start_from"):
        inp["start_image"] = frame_of(vdir, clip["start_from"])
    elif clip.get("end_at"):
        inp["end_image"] = frame_of(vdir, clip["end_at"])
    else:
        inp["images"] = [{"source": "url", "url": upload(os.path.join(adir, f"face_{r}.png"))} for r in clip["refs"]]
    body = {"input": inp}
    job = req("POST", "/models/veo-31", body)
    for _ in range(200):
        st = req("GET", f"/jobs/{job['job_id']}/status")["status"]
        if st in ("COMPLETED", "FAILED"):
            break
        time.sleep(6)
    res = req("GET", f"/jobs/{job['job_id']}")
    o = (res.get("outputs") or [{}])[0]
    if res["status"] != "COMPLETED" or not o.get("url"):
        raise RuntimeError(f"{clip['id']}: {json.dumps(res)[:500]}")
    urllib.request.urlretrieve(o["url"], out)
    return clip["id"]


def main():
    mod, slug = sys.argv[1], sys.argv[2]
    only = set(sys.argv[sys.argv.index("--only") + 1].split(",")) if "--only" in sys.argv else None
    force = "--force" in sys.argv
    sys.path.insert(0, os.path.join(os.path.dirname(HERE), "episodes"))
    ep = importlib.import_module(mod).EPISODE
    adir = os.path.join(HERE, slug); vdir = os.path.join(adir, "veo"); os.makedirs(vdir, exist_ok=True)
    todo = []
    for sc in ep["scenes"]:
        for c in sc.get("clips", []):
            out = os.path.join(vdir, c.get("file") or f"{c['id']}.mp4")
            if c.get("file") or (only and c["id"] not in only) or (os.path.exists(out) and not force):
                continue
            todo.append((c, adir, out))
    print(f"generating {len(todo)} shots (~${3.2 * len(todo) if QUALITY == 'standard' else 1.14 * len(todo):.2f})", flush=True)
    with cf.ThreadPoolExecutor(5) as ex:
        futs = {ex.submit(shot, *t): t[0]["id"] for t in todo}
        for f in cf.as_completed(futs):
            try:
                print("ok", f.result(), flush=True)
            except Exception as e:
                print("FAIL", futs[f], e, flush=True)


if __name__ == "__main__":
    main()
