#!/usr/bin/env bash
# Builds the private preview (no tracking, relative paths) into dist-preview/
set -e
cd "$(dirname "$0")/.."
VITE_PREVIEW=1 npx vite build --mode preview --outDir dist-preview --emptyOutDir >/dev/null
python3 scripts/preview-post.py dist-preview
# same sitemap as the real build (run `npm run build` first)
cp dist/sitemap.xml dist-preview/ 2>/dev/null || true
