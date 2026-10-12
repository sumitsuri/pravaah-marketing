"""AntraHQ logo system generator — one source of truth for every logo file.

Symbol: Stack-A (see stack.py) — a gold HQ peak above a crossbar tier and two branch feet.
Gold has two tones: "gold" for dark/violet backgrounds, "gold_on_light" for text on white (contrast-safe).
Run from scripts/brand/:  python3 brandgen.py ../../public/brand
"""
import json, os, sys
from stack import stack_symbol

HERE = os.path.dirname(os.path.abspath(__file__))
O = json.load(open(os.path.join(HERE, "outlines.json")))
OUT = sys.argv[1]
os.makedirs(OUT, exist_ok=True)

C = {"violet": "#6D28D9", "midnight": "#2E1065", "gold": "#E3B04B", "gold_on_light": "#92650C", "gold_peak_on_light": "#AF790E",
     "ink": "#0F172A", "white": "#FFFFFF", "black": "#000000"}

def sym(body, peak, size=512, x=0, y=0, uid=""):
    s = size / 512
    return f'<g transform="translate({x} {y}) scale({s:.5f})">{stack_symbol(body, peak, uid)}</g>'

def tile(size=512, x=0, y=0, uid=""):
    s = size / 512
    inner = 0.9
    off = 256 * (1 - inner)
    return (f'<g transform="translate({x} {y}) scale({s:.5f})"><rect width="512" height="512" rx="116" fill="{C["violet"]}"/>'
            f'<g transform="translate({off} {off + 4}) scale({inner})">{stack_symbol(C["white"], C["gold"], uid)}</g></g>')

def wordmark(x, baseline, cap, c_antra, c_hq):
    s = cap / O["antra"]["cap"]
    return (f'<g transform="translate({x:.2f} {baseline:.2f}) scale({s:.5f})"><path d="{O["antra"]["d"]}" fill="{c_antra}"/>'
            f'<path d="{O["hq"]["d"]}" fill="{c_hq}" transform="translate({O["antra"]["width"] - 2} 0)"/></g>'), O["antrahq"]["width"] * s

def tagline(x, baseline, width, color):
    s = width / O["tag"]["width"]
    return f'<g transform="translate({x:.2f} {baseline:.2f}) scale({s:.5f})"><path d="{O["tag"]["d"]}" fill="{color}"/></g>'

def svg(w, h, body, title):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.0f} {h:.0f}" width="{w:.0f}" height="{h:.0f}" role="img" aria-label="{title}">'
            f'<title>{title}</title>{body}</svg>\n')

def write(name, content):
    open(os.path.join(OUT, name), "w").write(content)

# Symbol & icons
write("antrahq-app-icon.svg", svg(512, 512, tile(), "AntraHQ"))
write("antrahq-symbol-color.svg", svg(512, 512, sym(C["violet"], C["gold_peak_on_light"]), "AntraHQ symbol"))
write("antrahq-symbol-reversed.svg", svg(512, 512, sym(C["white"], C["gold"]), "AntraHQ symbol"))
write("antrahq-symbol-black.svg", svg(512, 512, sym(C["black"], C["black"]), "AntraHQ symbol"))
write("antrahq-symbol-white.svg", svg(512, 512, sym(C["white"], C["white"]), "AntraHQ symbol"))
write("antrahq-avatar.svg", svg(640, 640, f'<rect width="640" height="640" fill="{C["violet"]}"/>' + sym(C["white"], C["gold"], 456, 92, 90), "AntraHQ"))

# Lockups. T = symbol box 100; colour versions use the app tile, one-colour versions the bare symbol.
TITLE_TAG = "AntraHQ — Salons &amp; Beyond"
def lockup(variant, with_tag):
    T, gap = 100, 24
    if variant in ("light", "dark"):
        mark = tile(T)
        ca, ch, ct = ((C["ink"], C["gold_on_light"], C["gold_on_light"]) if variant == "light" else (C["white"], C["gold"], C["gold"]))
    else:
        col = C["black"] if variant == "black" else C["white"]
        mark = sym(col, col, T)
        ca = ch = ct = col
    x = T + gap
    if with_tag:
        wm, ww = wordmark(x, 52, 38, ca, ch)
        body = mark + wm + tagline(x + 1, 78, ww - 2, ct)
    else:
        wm, ww = wordmark(x, 50 + 22, 44, ca, ch)
        body = mark + wm
    return svg(x + ww + 2, T, body, TITLE_TAG if with_tag else "AntraHQ")

for v in ["light", "dark", "black", "white"]:
    write(f"antrahq-logo-horizontal-{v}.svg", lockup(v, False))
    write(f"antrahq-logo-tagline-{v}.svg", lockup(v, True))

def stacked(variant):
    W, T = 400, 160
    ca, ch, ct = (C["ink"], C["gold_on_light"], C["gold_on_light"]) if variant == "light" else (C["white"], C["gold"], C["gold"])
    cap = 52
    wm_w = O["antrahq"]["width"] * cap / O["antra"]["cap"]
    wm, _ = wordmark((W - wm_w) / 2, T + 34 + cap, cap, ca, ch)
    tg = tagline((W - wm_w) / 2 + 2, T + 34 + cap + 34, wm_w - 4, ct)
    return svg(W, T + 34 + cap + 36, tile(T, (W - T) / 2, 0) + wm + tg, TITLE_TAG)

write("antrahq-logo-stacked-light.svg", stacked("light"))
write("antrahq-logo-stacked-dark.svg", stacked("dark"))
print("written:", len([f for f in os.listdir(OUT) if f.endswith(".svg")]), "svg files")
