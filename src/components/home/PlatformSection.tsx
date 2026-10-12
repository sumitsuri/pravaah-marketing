import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Crown,
  MapPin,
  MessageCircle,
  Package,
  ReceiptIndianRupee,
  Star,
  TrendingUp,
} from "lucide-react";

/**
 * "Your whole business, on one platform." — statement with product chips that fly in and settle
 * (cashfree.com-style), followed by a pastel bento of modules with mini product screens.
 * All values are illustrative demo data.
 */

const chips: {
  icon: typeof Star;
  text: string;
  sub: string;
  tone: string;
  pos: string;
  dx: string;
  dy: string;
  rot: string;
  rest: string;
}[] = [
  { icon: ReceiptIndianRupee, text: "₹2,450 billed", sub: "GST invoice on WhatsApp", tone: "bg-sky-100 text-sky-700", pos: "left-[2%] top-[6%]", dx: "-120px", dy: "-60px", rot: "-18deg", rest: "-4deg" },
  { icon: CalendarCheck, text: "New booking", sub: "Hair spa · Sat 11:30", tone: "bg-violet-100 text-violet-700", pos: "right-[3%] top-[2%]", dx: "130px", dy: "-70px", rot: "16deg", rest: "3deg" },
  { icon: MapPin, text: "12 / 13 staff in", sub: "Selfie + geofence", tone: "bg-amber-100 text-amber-700", pos: "left-[6%] bottom-[10%]", dx: "-140px", dy: "70px", rot: "14deg", rest: "2deg" },
  { icon: Star, text: "5★ → Google", sub: "Review routed", tone: "bg-pink-100 text-pink-700", pos: "right-[6%] bottom-[8%]", dx: "140px", dy: "80px", rot: "-14deg", rest: "-3deg" },
  { icon: TrendingUp, text: "Branch P&L +18%", sub: "Indiranagar · this month", tone: "bg-emerald-100 text-emerald-700", pos: "left-[22%] -top-[6%]", dx: "-40px", dy: "-120px", rot: "-10deg", rest: "2deg" },
  { icon: Package, text: "Low stock", sub: "Developer 20 vol · 1 left", tone: "bg-orange-100 text-orange-700", pos: "right-[24%] bottom-[4%]", dx: "60px", dy: "120px", rot: "10deg", rest: "-2deg" },
];

const bento: {
  title: string;
  desc: string;
  href: string;
  bg: string;
  span?: string;
  screen: React.ReactNode;
}[] = [
  {
    title: "Billing & GST",
    desc: "Walk-in to GST invoice and WhatsApp receipt in under a minute.",
    href: "/products/billing",
    bg: "bg-sky-50",
    span: "lg:col-span-2",
    screen: (
      <div className="rounded-xl bg-white p-4 shadow-card">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-ink">Hair spa + Haircut</span>
          <span className="font-semibold text-ink">₹2,450</span>
        </div>
        <div className="mt-1 flex justify-between text-xs text-ink-mute">
          <span>CGST + SGST 18%</span>
          <span>incl.</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs font-semibold">
          <span className="rounded-lg bg-surface py-2 text-ink-mute">Cash</span>
          <span className="rounded-lg bg-sky-600 py-2 text-white">UPI ✓</span>
          <span className="rounded-lg bg-surface py-2 text-ink-mute">Card</span>
        </div>
        <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-emerald-700">
          <MessageCircle className="h-3.5 w-3.5" aria-hidden /> Invoice sent on WhatsApp
        </p>
      </div>
    ),
  },
  {
    title: "Memberships & packages",
    desc: "Sell plans at the desk; staff get credit automatically.",
    href: "/products/memberships",
    bg: "bg-pink-50",
    screen: (
      <div className="rounded-xl bg-gradient-to-br from-pink-500 to-brand p-4 text-white shadow-card">
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-pink-100">
          <Crown className="h-3.5 w-3.5" aria-hidden /> Gold membership
        </p>
        <p className="mt-2 font-display text-2xl">₹4,999</p>
        <p className="text-xs text-pink-100">12 visits · valid 6 months</p>
        <p className="mt-3 rounded-lg bg-white/15 px-2 py-1 text-xs">Sold by Riya · +₹50 incentive</p>
      </div>
    ),
  },
  {
    title: "WhatsApp win-backs",
    desc: "Bring back guests who haven't visited in 45+ days.",
    href: "/products/campaigns",
    bg: "bg-emerald-50",
    screen: (
      <div className="space-y-2">
        <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-white p-3 text-xs text-ink shadow-card">
          Hi Priya 👋 we miss you! Enjoy 20% off your next hair spa this week.
        </div>
        <div className="flex items-center justify-between rounded-xl bg-emerald-600 px-3 py-2 text-xs font-semibold text-white">
          <span>184 guests · preview</span>
          <span>Send →</span>
        </div>
      </div>
    ),
  },
  {
    title: "Verified attendance",
    desc: "Selfie + GPS punches, checked against the branch geofence.",
    href: "/products/staff",
    bg: "bg-amber-50",
    screen: (
      <div className="rounded-xl bg-white p-3 shadow-card">
        {[
          ["Riya S.", "9:58 AM", "Inside ✓", "text-emerald-700"],
          ["Aman K.", "10:21 AM", "Late", "text-pain"],
          ["Neha P.", "9:54 AM", "Inside ✓", "text-emerald-700"],
        ].map(([n, t, s, c]) => (
          <div key={n} className="flex items-center justify-between border-b border-surface-muted py-1.5 text-xs last:border-0">
            <span className="font-medium text-ink">{n}</span>
            <span className="text-ink-mute">{t}</span>
            <span className={`font-semibold ${c}`}>{s}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Branch P&L",
    desc: "Profit by branch after salary, rent and product cost.",
    href: "/products/analytics",
    bg: "bg-violet-50",
    screen: (
      <div className="rounded-xl bg-white p-3 shadow-card">
        {[
          ["Indiranagar", 92],
          ["Whitefield", 74],
          ["HSR Layout", 51],
        ].map(([n, w]) => (
          <div key={n as string} className="py-1">
            <div className="flex justify-between text-xs">
              <span className="text-ink">{n}</span>
              <span className="font-semibold text-brand">{w}%</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-surface-muted">
              <div className="h-full rounded-full bg-gradient-to-r from-brand to-accent" style={{ width: `${w}%` }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Reviews & Google rank",
    desc: "Happy guests to Google, unhappy ones to you first.",
    href: "/products/reviews",
    bg: "bg-orange-50",
    span: "lg:col-span-2",
    screen: (
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="rounded-xl bg-white p-3 shadow-card">
          <p className="text-lg tracking-wider text-amber-500">★★★★★</p>
          <p className="text-xs text-ink-mute">4★+ → your Google review page</p>
        </div>
        <div className="rounded-xl bg-white p-3 shadow-card">
          <p className="flex items-center gap-1.5 text-sm font-semibold text-ink">
            <MapPin className="h-4 w-4 text-orange-600" aria-hidden /> Local rank #4 → #2
          </p>
          <p className="text-xs text-ink-mute">vs 6 salons within 2 km</p>
        </div>
      </div>
    ),
  },
];

export function PlatformSection() {
  return (
    <section className="section-pad overflow-hidden bg-white">
      <div className="container-wide">
        {/* Statement with converging chips */}
        <div data-reveal className="relative mx-auto max-w-5xl py-10 sm:py-16 lg:py-24">
          <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
            {chips.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.text}
                  className={`cv-card absolute flex items-center gap-2.5 rounded-2xl border border-surface-line bg-white/95 p-2.5 pr-4 shadow-premium ${c.pos}`}
                  style={
                    {
                      "--dx": c.dx,
                      "--dy": c.dy,
                      "--rot": c.rot,
                      "--rest": c.rest,
                      "--d": `${120 + i * 90}ms`,
                    } as React.CSSProperties
                  }
                >
                  <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${c.tone}`}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold text-ink">{c.text}</span>
                    <span className="block text-[11px] text-ink-mute">{c.sub}</span>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="relative text-center">
            <p className="eyebrow">One platform</p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-[2rem] leading-[1.1] text-ink sm:text-5xl lg:text-[3.5rem]">
              Your whole business, <span className="text-gradient">on one platform.</span>
            </h2>
            <p className="lede mx-auto mt-5">
              Billing, bookings, staff, stock, guests and branch profit — one login for the desk, the floor and the owner. Built for
              salons, ready for whatever you open next.
            </p>
          </div>
        </div>

        {/* Pastel bento of modules */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bento.map((b, i) => (
            <Link
              key={b.title}
              href={b.href}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 4) * 70}ms` }}
              className={`group flex flex-col justify-between gap-5 rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-premium ${b.bg} ${b.span ?? ""}`}
            >
              <div>
                <h3 className="font-display text-xl text-ink">{b.title}</h3>
                <p className="mt-1 text-sm text-ink-mute">{b.desc}</p>
              </div>
              <div>{b.screen}</div>
              <span className="link-arrow">
                Explore <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-ink-faint">Product screens show illustrative demo data.</p>
      </div>
    </section>
  );
}
