#!/usr/bin/env bash
# Downloads each public Drive video listed in scripts/videos.json and writes a
# small, web-ready copy to public/videos/<driveId>.mp4 plus a poster
# public/videos/<driveId>.jpg. Files that already exist are skipped.
#
#   short: full length up to 75s (else the first 60s), fits 540x960, ~1.2 Mbps
#   long:  a 30s preview clip, 960px wide, ~1.2 Mbps (full video stays on Drive)
set -uo pipefail
OUT=public/videos
TMP=$(mktemp -d)
mkdir -p "$OUT"
failed=()

download() {
  local id=$1 dest=$2
  curl -sSL --retry 3 -o "$dest" \
    "https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t" || return 1
  ffprobe -v error -show_entries format=duration -of csv=p=0 "$dest" >/dev/null 2>&1 && return 0
  # Fallback for files Drive won't hand to curl directly.
  pip install -q gdown >/dev/null 2>&1
  gdown -q --fuzzy "https://drive.google.com/file/d/${id}/view" -O "$dest" || return 1
  ffprobe -v error -show_entries format=duration -of csv=p=0 "$dest" >/dev/null 2>&1
}

for row in $(jq -r '.[] | "\(.id),\(.kind)"' scripts/videos.json); do
  id=${row%,*}; kind=${row#*,}
  if [[ -f "$OUT/$id.mp4" && -f "$OUT/$id.jpg" ]]; then echo "skip $id"; continue; fi
  src="$TMP/$id.src"
  echo "::group::$kind $id"
  if ! download "$id" "$src"; then echo "download failed"; failed+=("$id"); echo "::endgroup::"; rm -f "$src"; continue; fi
  dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$src" | cut -d. -f1)
  enc=(-c:v libx264 -preset slow -crf 27 -maxrate 1200k -bufsize 2400k -profile:v high
       -pix_fmt yuv420p -r 30 -c:a aac -b:a 96k -ac 2 -movflags +faststart)
  if [[ $kind == short ]]; then
    trim=(); (( dur > 75 )) && trim=(-t 60)
    ffmpeg -nostdin -v error -y -i "$src" "${trim[@]}" \
      -vf "scale='if(gt(iw,ih),min(960,iw),min(540,iw))':-2" "${enc[@]}" "$OUT/$id.mp4"
  else
    start=$(( dur / 10 )); (( start > 90 )) && start=90
    ffmpeg -nostdin -v error -y -ss "$start" -i "$src" -t 30 \
      -vf "scale='min(960,iw)':-2" "${enc[@]}" "$OUT/$id.mp4"
  fi
  if [[ $? -ne 0 ]]; then echo "transcode failed"; failed+=("$id"); rm -f "$OUT/$id.mp4"; else
    ffmpeg -nostdin -v error -y -ss 1 -i "$OUT/$id.mp4" -frames:v 1 -q:v 5 "$OUT/$id.jpg"
    echo "dur=${dur}s -> $(du -h "$OUT/$id.mp4" | cut -f1)"
  fi
  rm -f "$src"
  echo "::endgroup::"
done

du -sh "$OUT"
if (( ${#failed[@]} )); then echo "FAILED: ${failed[*]}"; fi
