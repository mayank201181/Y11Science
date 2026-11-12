#!/usr/bin/env bash
# Build one "Body Corporate" comedy episode end-to-end.
#   ./make_episode.sh bio_coordination bio-coordination
# Needs: python3 + numpy + edge-tts, ffmpeg, node + playwright (chromium).
set -euo pipefail
MOD=$1; SLUG=$2
HERE=$(cd "$(dirname "$0")" && pwd)
WORK=${WORK:-$HERE/.work/$SLUG}; mkdir -p "$WORK"
python3 "$HERE/build_audio.py" "$MOD" "$WORK"
node "$HERE/render/render.mjs" "$WORK/timeline.json" "$WORK/ep.mp4" --workers "${WORKERS:-4}"
ffmpeg -v error -y -f concat -safe 0 -i "$WORK/ep.mp4.parts/list.txt" -i "$WORK/audio.wav" \
  -map 0:v -map 1:a -c:v copy -c:a aac -b:a 128k -shortest -movflags +faststart \
  "$HERE/../../public/comedy/$SLUG.mp4"
echo "wrote public/comedy/$SLUG.mp4"
