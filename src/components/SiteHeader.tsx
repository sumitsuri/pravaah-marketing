"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { brand, nav } from "@/lib/content";
import { Logo } from "@/components/Logo";
import { WhatsAppHeaderButton, WhatsAppConnectButton } from "@/components/WhatsAppConnect";

type MenuKey = "solutions" | "products";

const menus: { key: MenuKey; label: string; items: readonly { href: string; title: string; desc: string }[]; cols: string }[] = [
  { key: "solutions", label: "Solutions", items: nav.solutions, cols: "w-[22rem]" },
  { key: "products", label: "Products", items: nav.products, cols: "w-[40rem] grid-cols-2" },
];

export function SiteHeader() {
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation and on Escape.
  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  function enter(menu: MenuKey) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(menu);
  }
  function leave() {
    closeTimer.current = setTimeout(() => setOpen(null), 120);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white/90 backdrop-blur-lg transition-shadow ${
        scrolled || mobile ? "border-surface-line shadow-sm" : "border-transparent"
      }`}
    >
      <div className="container-wide flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label={`${brand.name} home`} className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden flex-1 items-center gap-1 lg:flex" aria-label="Primary">
          {menus.map((m) => (
            <div key={m.key} className="relative" onMouseEnter={() => enter(m.key)} onMouseLeave={leave}>
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-soft transition hover:text-brand"
                aria-expanded={open === m.key}
                aria-controls={`menu-${m.key}`}
                onClick={() => setOpen(open === m.key ? null : m.key)}
              >
                {m.label}
                <ChevronDown className={`h-3.5 w-3.5 transition ${open === m.key ? "rotate-180" : ""}`} aria-hidden />
              </button>
              {open === m.key && (
                <div
                  id={`menu-${m.key}`}
                  className={`absolute left-0 top-full mt-1 grid gap-1 rounded-xl border border-surface-line bg-white p-2 shadow-premium ${m.cols}`}
                >
                  {m.items.map((item) => (
                    <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2.5 transition hover:bg-brand-50">
                      <span className="block text-sm font-semibold text-ink">{item.title}</span>
                      <span className="mt-0.5 block text-xs leading-snug text-ink-mute">{item.desc}</span>
                    </Link>
                  ))}
                  {m.key === "products" && (
                    <Link href="/products" className="col-span-full rounded-lg px-3 py-2 text-xs font-semibold text-brand hover:bg-brand-50">
                      View all products →
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition hover:text-brand ${
                pathname?.startsWith(link.href) ? "text-brand" : "text-ink-soft"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <WhatsAppHeaderButton className="hidden sm:inline-flex" />
          <Link href="/demo" className="btn-primary hidden !min-h-10 !px-4 sm:inline-flex">
            {brand.cta.primary}
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink lg:hidden"
            aria-label={mobile ? "Close menu" : "Open menu"}
            aria-expanded={mobile}
            aria-controls="mobile-menu"
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobile && (
        <div
          id="mobile-menu"
          className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-surface-line bg-white lg:hidden"
        >
          <div className="container-wide space-y-6 py-6">
            {menus.map((m) => (
              <div key={m.key}>
                <p className="eyebrow !text-ink-faint">{m.label}</p>
                <div className="mt-2 grid gap-x-4 sm:grid-cols-2">
                  {m.items.map((item) => (
                    <Link key={item.href} href={item.href} className="block border-b border-surface-muted py-3 text-[0.9375rem] font-medium text-ink">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="grid gap-x-4 sm:grid-cols-2">
              {[{ href: "/products", label: "All products" }, ...nav.links, { href: "/customers", label: "Customers" }].map((link) => (
                <Link key={link.href} href={link.href} className="block border-b border-surface-muted py-3 text-[0.9375rem] font-medium text-ink">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link href="/demo" className="btn-primary btn-lg w-full">
                {brand.cta.primary}
              </Link>
              <WhatsAppConnectButton className="btn-lg w-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
