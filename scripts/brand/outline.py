"""Turn text into SVG path data from Plus Jakarta Sans at a fixed weight (no font dependency in logo files)."""
import json, sys
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

def outline(text, weight, size, tracking_em=0.0):
    f = instantiateVariableFont(TTFont("PJS.ttf"), {"wght": weight})
    upm = f["head"].unitsPerEm; cmap = f.getBestCmap(); gs = f.getGlyphSet(); hmtx = f["hmtx"]
    # pair kerning from GPOS is skipped; tracking is tuned per lockup instead
    scale = size / upm; x = 0.0; paths = []
    for ch in text:
        g = cmap[ord(ch)]
        pen = SVGPathPen(gs)
        gs[g].draw(TransformPen(pen, (scale, 0, 0, -scale, x, 0)))
        d = pen.getCommands()
        if d: paths.append(d)
        x += hmtx[g][0] * scale + tracking_em * size
    width = x - tracking_em * size
    asc = f["OS/2"].sCapHeight * scale
    return {"d": " ".join(paths), "width": round(width, 2), "cap": round(asc, 2)}

out = {
  "antra": outline("Antra", 800, 100, -0.02),
  "hq": outline("HQ", 800, 100, -0.02),
  "antrahq": outline("AntraHQ", 800, 100, -0.02),
  "tag": outline("SALONS & BEYOND", 700, 100, 0.28),
}
# offset for "HQ" after "Antra"
f = TTFont("PJS.ttf")
json.dump(out, open("outlines.json", "w"))
for k, v in out.items(): print(k, v["width"], v["cap"], len(v["d"]))
