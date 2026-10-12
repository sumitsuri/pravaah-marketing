"""Stack-A geometry (512 grid). One A silhouette — apex (256,62), feet at y=446, half-width 158 at the base —
sliced into: gold peak (HQ) · crossbar tier · two feet (branches). Each piece is drawn inset by R and stroked
with a 2R round join, so every corner gets the same radius and the visual gaps stay exactly GAP wide."""
APEX_Y, BASE_Y, HALF = 62, 446, 158
R, GAP = 12, 22
TIERS = [(62, 210), (210, 318), (318, 446)]  # outer y ranges before gaps
COUNTER_TOP, COUNTER_BOT = 30, 70  # half-widths of the counter between the feet

def _x(y, side):
    t = (y - APEX_Y) / (BASE_Y - APEX_Y)
    return 256 + side * HALF * t

def _poly(pts):
    return "M" + " L".join(f"{x:.1f} {y:.1f}" for x, y in pts) + " Z"

def pieces():
    g = GAP / 2 + R
    (a0, a1), (b0, b1), (c0, c1) = TIERS
    peak = [(256, a0 + R * 2.2), (_x(a1 - g, 1) - R * 0.9, a1 - g), (_x(a1 - g, -1) + R * 0.9, a1 - g)]
    mid = [(_x(b0 + g, -1) + R, b0 + g), (_x(b0 + g, 1) - R, b0 + g), (_x(b1 - g, 1) - R, b1 - g), (_x(b1 - g, -1) + R, b1 - g)]
    ct, cb = c0 + g, c1 - R
    left = [(_x(ct, -1) + R, ct), (256 - COUNTER_TOP - R, ct), (256 - COUNTER_BOT - R, cb), (_x(cb, -1) + R, cb)]
    right = [(256 + COUNTER_TOP + R, ct), (_x(ct, 1) - R, ct), (_x(cb, 1) - R, cb), (256 + COUNTER_BOT + R, cb)]
    return _poly(peak), _poly(mid), _poly(left), _poly(right)

def stack_symbol(body, peak, uid=""):
    p, m, l, r = pieces()
    s = f'stroke-width="{2 * R}" stroke-linejoin="round"'
    return (f'<path d="{p}" fill="{peak}" stroke="{peak}" {s}/>'
            f'<path d="{m}" fill="{body}" stroke="{body}" {s}/>'
            f'<path d="{l}" fill="{body}" stroke="{body}" {s}/><path d="{r}" fill="{body}" stroke="{body}" {s}/>')
