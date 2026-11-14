"""Composite live-action material onto the rendered cartoon and mux the soundtrack.

usage: python3 composite_live.py <work_dir> <live_slug_dir> <out.mp4>

Two kinds of live material, both optional:
  * phone cutaways - lines marked {"live": ...}: clip clips/<scene>_<lineIdx>_<WHO>.mp4 is placed in the
    phone-screen window at LIVE_RECT for exactly that line (clip audio discarded; audio.wav has the voice).
  * live-action scenes - scenes with "clips" (see build_audio.py): each veo/<id>.mp4 plays full-frame at
    its slot, its own audio (dialogue + ambience) is mixed in at the clip's gain, and captions are burned in
    from veo/<id>.captions.json plus the narrator voice-over lines.
"""
import json, os, subprocess, sys

LIVE_RECT = (384, 76, 512, 512)  # keep in sync with render/engine.js
W, H = 1280, 720
FONTS = os.path.join(os.path.dirname(os.path.abspath(__file__)), "render", "fonts")
SPEAKER = {"NARR": ("NARRATOR", "8d99ae"), "MEERA": ("MEERA", "ff70a6"), "MUM": ("MUM", "f15bb5"), "TEACHER": ("MS TAN", "adb5bd"), "CASHIER": ("CASHIER", "ffd166")}


def has_audio(f):
    return bool(subprocess.run(["ffprobe", "-v", "error", "-select_streams", "a", "-show_entries", "stream=index", "-of", "csv=p=0", f],
                               capture_output=True, text=True).stdout.strip())


def ass_time(t):
    h, r = divmod(max(t, 0), 3600); m, s = divmod(r, 60)
    return f"{int(h)}:{int(m):02d}:{s:05.2f}"


def ass_color(hexrgb):
    r, g, b = hexrgb[0:2], hexrgb[2:4], hexrgb[4:6]
    return f"&H00{b}{g}{r}&"


def write_ass(events, path):
    head = f"""[Script Info]
ScriptType: v4.00+
PlayResX: {W}
PlayResY: {H}
WrapStyle: 0

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Cap,Inter,30,&H00FFFFFF,&H00FFFFFF,&H50190A0A,&H50190A0A,-1,0,0,0,100,100,0,0,3,10,0,2,140,140,26,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
    lines = []
    for st, en, who, text in sorted(events):
        name, col = SPEAKER.get(who, (who, "ffffff"))
        tag = f"{{\\c{ass_color(col)}}}{name}:{{\\c&H00FFFFFF&}} "
        italic = "{\\i1}" if who == "NARR" else ""
        lines.append(f"Dialogue: 0,{ass_time(st)},{ass_time(en)},Cap,,0,0,0,,{tag}{italic}{text.strip()}")
    open(path, "w").write(head + "\n".join(lines) + "\n")


def main():
    work, live_dir, out = sys.argv[1], sys.argv[2], sys.argv[3]
    tl = json.load(open(os.path.join(work, "timeline.json")))
    cutaways, scene_clips, cap_events = [], [], []
    for sc in tl["scenes"]:
        for i, ln in enumerate(sc["lines"]):
            if ln.get("live"):
                f = os.path.join(live_dir, "clips", f"{sc['id']}_{i}_{ln['who']}.mp4")
                if not os.path.exists(f):
                    sys.exit(f"missing clip {f}")
                cutaways.append((f, ln["start"], ln["end"]))
        if sc.get("shot") == "live":
            for ln in sc["lines"]:  # narrator voice-over
                cap_events.append((ln["start"], ln["end"], "NARR", ln["text"]))
            for c in sc["clips"]:
                if not os.path.exists(c["file"]):
                    sys.exit(f"missing live clip {c['file']}")
                scene_clips.append(c)
                cj = os.path.splitext(c["file"])[0] + ".captions.json"
                caps = c.get("captions") or (json.load(open(cj)) if os.path.exists(cj) else [])
                if caps:
                    for e in caps:
                        cap_events.append((c["start"] + e["start"], min(c["start"] + e["end"], c["start"] + c["dur"]), e["who"], e["text"]))

    cmd = ["ffmpeg", "-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", os.path.join(work, "ep.mp4.parts", "list.txt")]
    inputs = [f for f, _, _ in cutaways] + [c["file"] for c in scene_clips]
    for f in inputs:
        cmd += ["-i", f]
    audio_idx = len(inputs) + 1
    cmd += ["-i", os.path.join(work, "audio.wav")]

    fc, prev, k = [], "0:v", 0
    x, y, w, h = LIVE_RECT
    for f, s, e in cutaways:
        k += 1
        fc.append(f"[{k}:v]scale={w}:{h},setpts=PTS-STARTPTS+{s}/TB[c{k}]")
        fc.append(f"[{prev}][c{k}]overlay={x}:{y}:enable='between(t,{s},{e})':eof_action=pass[v{k}]")
        prev = f"v{k}"
    amix = [f"[{audio_idx}:a]aformat=sample_rates=48000:channel_layouts=stereo[a0]"]
    alabels = ["[a0]"]
    for c in scene_clips:
        k += 1
        s, e = c["start"], c["start"] + c["dur"]
        crop = f"crop=iw*{c['crop']}:ih*{c['crop']}:(iw-iw*{c['crop']})/2:0," if c.get("crop") else ""  # zoom past burned-in text at the bottom
        ts = c.get("trim_start") or 0
        trim = f"trim=start={ts}," if ts else ""
        fc.append(f"[{k}:v]{trim}{crop}scale={W}:{H},fps={tl['fps']},setpts=PTS-STARTPTS+{s}/TB[c{k}]")
        fc.append(f"[{prev}][c{k}]overlay=0:0:enable='between(t,{s},{e - 0.001})':eof_action=pass[v{k}]")
        prev = f"v{k}"
        if has_audio(c["file"]):
            ms = int(round(s * 1000))
            amix.append(f"[{k}:a]aformat=sample_rates=48000:channel_layouts=stereo,atrim={ts}:{ts + c['dur']},asetpts=PTS-STARTPTS,volume={c['gain']},adelay={ms}|{ms}[a{k}]")
            alabels.append(f"[a{k}]")
    if cap_events:
        ass = os.path.join(work, "live_captions.ass")
        write_ass(cap_events, ass)
        fc.append(f"[{prev}]subtitles=filename={ass}:fontsdir={FONTS}[vsub]")
        prev = "vsub"
    fc += amix
    fc.append("".join(alabels) + f"amix=inputs={len(alabels)}:normalize=0:duration=first[aout]")
    cmd += ["-filter_complex", ";".join(fc), "-map", f"[{prev}]" if prev != "0:v" else "0:v", "-map", "[aout]",
            "-c:v", "libx264", "-preset", "medium", "-crf", "24", "-tune", "film", "-pix_fmt", "yuv420p",
            "-c:a", "aac", "-b:a", "160k", "-movflags", "+faststart", out]
    subprocess.run(cmd, check=True)
    print(f"wrote {out}: {len(cutaways)} phone cutaways, {len(scene_clips)} live-action shots, {len(cap_events)} captions")


if __name__ == "__main__":
    main()
