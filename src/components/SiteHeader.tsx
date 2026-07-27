"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { brand, nav } from "@/lib/content";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  MarketingSettingsButton,
  MarketingSettingsSheet,
} from "@/components/theme/MarketingSettingsSheet";

export function SiteHeader() {
  const [open, setOpen] = useState<"solutions" | "products" | null>(null);
  const [mobile, setMobile] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition ${
          scrolled ? "border-b shadow-sm backdrop-blur-lg" : "backdrop-blur-md"
        }`}
        style={{
          borderColor: scrolled ? "var(--mkt-site-border)" : "transparent",
          background: "var(--mkt-header-bg)",
        }}
      >
        <div className="container-wide flex items-center justify-between gap-2 px-4 py-3 sm:px-5 md:px-8 lg:px-12">
          <Link href="/" className="flex min-w-0 items-baseline gap-2" onClick={() => setMobile(false)}>
            <span className="truncate font-display text-xl tracking-tight sm:text-2xl" style={{ color: "var(--mkt-site-text)" }}>
              {brand.name}
            </span>
            <span className="hidden text-xs sm:inline" style={{ color: "var(--mkt-site-text-muted)" }}>
              {brand.productLabel}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <div className="relative" onMouseEnter={() => enter("solutions")} onMouseLeave={leave}>
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition hover:opacity-100"
                style={{ color: "var(--mkt-site-text-muted)" }}
              >
                Solutions <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {open === "solutions" && (
                <div className="absolute left-0 top-full w-[28rem] rounded-2xl border bg-white p-3 shadow-[0_30px_80px_-40px_rgba(11,31,28,0.45)]" style={{ borderColor: "var(--mkt-site-border)" }}>
                  {nav.solutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-3 hover:bg-[var(--mkt-page-bg)]"
                      onClick={() => setOpen(null)}
                    >
                      <p className="text-sm font-semibold" style={{ color: "var(--mkt-site-text)" }}>{item.title}</p>
                      <p className="mt-0.5 text-xs" style={{ color: "var(--mkt-site-text-muted)" }}>{item.desc}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => enter("products")} onMouseLeave={leave}>
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition"
                style={{ color: "var(--mkt-site-text-muted)" }}
              >
                Products <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {open === "products" && (
                <div className="absolute left-0 top-full w-[30rem] rounded-2xl border bg-white p-3 shadow-[0_30px_80px_-40px_rgba(11,31,28,0.45)]" style={{ borderColor: "var(--mkt-site-border)" }}>
                  {nav.products.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-3 hover:bg-[var(--mkt-page-bg)]"
                      onClick={() => setOpen(null)}
                    >
                      <p className="text-sm font-semibold" style={{ color: "var(--mkt-site-text)" }}>{item.title}</p>
                      <p className="mt-0.5 text-xs" style={{ color: "var(--mkt-site-text-muted)" }}>{item.desc}</p>
                    </Link>
                  ))}
                  <Link
                    href="/products"
                    className="mt-1 block rounded-xl px-3 py-2 text-xs font-semibold hover:bg-[var(--mkt-page-bg)]"
                    style={{ color: "var(--mkt-primary)" }}
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
                className="rounded-lg px-3 py-2 text-sm font-medium transition hover:opacity-100"
                style={{ color: "var(--mkt-site-text-muted)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <MarketingSettingsButton onClick={() => setSettingsOpen(true)} />
            <Link href="/demo" className="btn-primary !hidden !px-3 !py-2.5 text-sm sm:!inline-flex md:!px-4">
              Book a walkthrough
            </Link>
            <button
              type="button"
              className="rounded-lg p-2 lg:hidden"
              style={{ color: "var(--mkt-site-text)" }}
              aria-label="Menu"
              onClick={() => setMobile((v) => !v)}
            >
              {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobile && (
          <div
            className="max-h-[80vh] overflow-y-auto border-t px-4 py-4 sm:px-5 lg:hidden"
            style={{ borderColor: "var(--mkt-site-border)", background: "var(--mkt-page-bg)" }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--mkt-site-text-muted)" }}>
              Solutions
            </p>
            {nav.solutions.map((item) => (
              <Link key={item.href} href={item.href} className="block py-2.5 text-sm font-medium" style={{ color: "var(--mkt-site-text)" }} onClick={() => setMobile(false)}>
                {item.title}
              </Link>
            ))}
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--mkt-site-text-muted)" }}>
              Products
            </p>
            {nav.products.map((item) => (
              <Link key={item.href} href={item.href} className="block py-2.5 text-sm font-medium" style={{ color: "var(--mkt-site-text)" }} onClick={() => setMobile(false)}>
                {item.title}
              </Link>
            ))}
            {nav.links.map((link) => (
              <Link key={link.href} href={link.href} className="block py-2.5 text-sm font-medium" style={{ color: "var(--mkt-site-text)" }} onClick={() => setMobile(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/demo" className="btn-primary mt-4 w-full" onClick={() => setMobile(false)}>
              Book a walkthrough
            </Link>
          </div>
        )}
      </header>

      <MarketingSettingsSheet open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  );
}
