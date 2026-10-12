# AntraHQ logo system

Every logo file in `public/brand/` is generated from `brandgen.py`, so all variants share one
symbol geometry, one palette and one outlined wordmark. Usage rules live on the site at `/brand`.

## Regenerate

```bash
python3 -m venv .venv-brand && .venv-brand/bin/pip install fonttools
# Plus Jakarta Sans variable font (SIL OFL) from github.com/google/fonts → save as PJS.ttf here
.venv-brand/bin/python outline.py          # rebuilds outlines.json (wordmark + tagline paths)
.venv-brand/bin/python brandgen.py ../../public/brand
```

`outline.py` reads PJS.ttf from the current directory; `brandgen.py` imports `stack.py` and reads
`outlines.json` next to it. Then re-export PNGs, icons and the brand-kit ZIP (Playwright screenshot of each
SVG at 1024–1600px wide; app icon at 512/192/180; avatar at 640).

## Geometry (512 grid) — Stack-A

Defined in `stack.py`. One A silhouette (apex 256,62 · base y 446 · half-width 158) sliced into three
tiers — gold HQ peak (62–210), crossbar tier (210–318), two branch feet (318–446) split by a counter —
with 22-unit gaps and 12-unit corner radii (each piece inset by R and stroked with a 2R round join).
App tile: 512 square, rx 116, symbol at 90%.

## Palette

| Name | HEX | Use |
|---|---|---|
| Antra Violet | #6D28D9 | Tile, primary |
| Antra Gold | #E3B04B | On dark/violet: HQ peak, "HQ", tagline (never as text on light) |
| Midnight | #2E1065 | Dark backgrounds |
| Gold on Light | #92650C | "HQ", tagline and gold text on white/light (5.1:1) |
| Ink | #0F172A | Wordmark on light |
