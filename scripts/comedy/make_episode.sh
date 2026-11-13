#!/usr/bin/env bash
# Build one "Body Corporate" comedy episode end-to-end.
#   ./make_episode.sh bio_coordination bio-coordination
# Needs: python3 + numpy + edge-tts, ffmpeg, node + playwright (chromium).
# Live-action cutaway clips (lines marked "live") are read from live/<slug>/clips/;
# see README for how they are generated.
set -euo pipefail
MOD=$1; SLUG=$2
HERE=$(cd "$(dirname "$0")" && pwd)
WORK=${WORK:-$HERE/.work/$SLUG}; mkdir -p "$WORK"
python3 "$HERE/build_audio.py" "$MOD" "$WORK"
rm -rf "$WORK/ep.mp4.parts"
node "$HERE/render/render.mjs" "$WORK/timeline.json" "$WORK/ep.mp4" --workers "${WORKERS:-4}"
python3 "$HERE/composite_live.py" "$WORK" "$HERE/live/$SLUG/clips" "$HERE/../../public/comedy/$SLUG.mp4"
