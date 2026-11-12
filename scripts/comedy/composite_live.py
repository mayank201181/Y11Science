"""Overlay live-action talking clips onto the rendered cartoon and mux the soundtrack.

usage: python3 composite_live.py <work_dir> <clips_dir> <out.mp4>
Lines marked {"live": ...} in the episode script are rendered with a black phone-screen
window at LIVE_RECT; the clip <scene>_<lineIdx>_<WHO>.mp4 is placed there for exactly
that line's time range. Clip audio is discarded (the master audio.wav already has it).
"""
import json, os, subprocess, sys

LIVE_RECT = (384, 76, 512, 512)  # keep in sync with render/engine.js

work, clips, out = sys.argv[1], sys.argv[2], sys.argv[3]
tl = json.load(open(os.path.join(work, "timeline.json")))
items = []
for sc in tl["scenes"]:
    for i, ln in enumerate(sc["lines"]):
        if ln.get("live"):
            f = os.path.join(clips, f"{sc['id']}_{i}_{ln['who']}.mp4")
            if not os.path.exists(f):
                sys.exit(f"missing clip {f}")
            items.append((f, ln["start"], ln["end"]))

x, y, w, h = LIVE_RECT
cmd = ["ffmpeg", "-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", os.path.join(work, "ep.mp4.parts", "list.txt")]
for f, _, _ in items:
    cmd += ["-i", f]
cmd += ["-i", os.path.join(work, "audio.wav")]
fc, prev = [], "0:v"
for k, (f, s, e) in enumerate(items, start=1):
    fc.append(f"[{k}:v]scale={w}:{h},setpts=PTS-STARTPTS+{s}/TB[c{k}]")
    fc.append(f"[{prev}][c{k}]overlay={x}:{y}:enable='between(t,{s},{e})':eof_action=pass[v{k}]")
    prev = f"v{k}"
cmd += ["-filter_complex", ";".join(fc), "-map", f"[{prev}]", "-map", f"{len(items) + 1}:a",
        "-c:v", "libx264", "-preset", "medium", "-crf", "26", "-tune", "animation", "-pix_fmt", "yuv420p",
        "-c:a", "aac", "-b:a", "128k", "-shortest", "-movflags", "+faststart", out]
subprocess.run(cmd, check=True)
print(f"wrote {out} with {len(items)} live-action cutaways")
