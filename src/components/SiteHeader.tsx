"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { brand, nav } from "@/lib/content";
import { ChevronDown, Menu, X } from "lucide-react";

export function SiteHeader() {
  const [open, setOpen] = useState<"solutions" | "products" | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function enter(menu: "solutions" | "products") {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(menu);
  }
  function leave() {
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? "border-b border-ink/8 bg-mist-soft/95 shadow-sm backdrop-blur-lg" : "bg-mist-soft/80 backdrop-blur-md"
      }`}
    >
      <div className="container-wide flex items-center justify-between px-5 py-3.5 md:px-8 lg:px-12">
        <Link href="/" className="flex items-baseline gap-2" onClick={() => setMobile(false)}>
          <span className="font-display text-2xl tracking-tight text-ink">{brand.name}</span>
          <span className="hidden text-xs text-ink-mute sm:inline">{brand.sanskrit}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <div className="relative" onMouseEnter={() => enter("solutions")} onMouseLeave={leave}>
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-ink-mute hover:text-ink"
            >
              Solutions <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {open === "solutions" && (
              <div className="absolute left-0 top-full w-[28rem] rounded-2xl border border-ink/10 bg-white p-3 shadow-[0_30px_80px_-40px_rgba(11,31,28,0.45)]">
                {nav.solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-3 hover:bg-mist-soft"
                    onClick={() => setOpen(null)}
                  >
                    <p className="text-sm font-semibold text-ink">{item.title}</p>
                    <p className="mt-0.5 text-xs text-ink-mute">{item.desc}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => enter("products")} onMouseLeave={leave}>
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-ink-mute hover:text-ink"
            >
              Products <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {open === "products" && (
              <div className="absolute left-0 top-full w-[30rem] rounded-2xl border border-ink/10 bg-white p-3 shadow-[0_30px_80px_-40px_rgba(11,31,28,0.45)]">
                {nav.products.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-3 hover:bg-mist-soft"
                    onClick={() => setOpen(null)}
                  >
                    <p className="text-sm font-semibold text-ink">{item.title}</p>
                    <p className="mt-0.5 text-xs text-ink-mute">{item.desc}</p>
                  </Link>
                ))}
                <Link
                  href="/products"
                  className="mt-1 block rounded-xl px-3 py-2 text-xs font-semibold text-jade hover:bg-mist-soft"
                  onClick={() => setOpen(null)}
                >
                  View all products →
                </Link>
              </div>
            )}
          </div>

          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-mute hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/demo" className="btn-primary !hidden !px-4 !py-2.5 text-sm sm:!inline-flex">
            Book a demo
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-ink lg:hidden"
            aria-label="Menu"
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobile && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-ink/8 bg-white px-5 py-4 lg:hidden">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-mute">Solutions</p>
          {nav.solutions.map((item) => (
            <Link key={item.href} href={item.href} className="block py-2.5 text-sm font-medium" onClick={() => setMobile(false)}>
              {item.title}
            </Link>
          ))}
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink-mute">Products</p>
          {nav.products.map((item) => (
            <Link key={item.href} href={item.href} className="block py-2.5 text-sm font-medium" onClick={() => setMobile(false)}>
              {item.title}
            </Link>
          ))}
          {nav.links.map((link) => (
            <Link key={link.href} href={link.href} className="block py-2.5 text-sm font-medium" onClick={() => setMobile(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/demo" className="btn-primary mt-4 w-full" onClick={() => setMobile(false)}>
            Book a demo
          </Link>
        </div>
      )}
    </header>
  );
}
