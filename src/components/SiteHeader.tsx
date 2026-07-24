import Link from "next/link";
import { brand, navLinks } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-mist-soft/85 backdrop-blur-md">
      <div className="container-wide flex items-center justify-between px-5 py-3.5 md:px-8 lg:px-12">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight text-ink">{brand.name}</span>
          <span className="hidden text-xs text-ink-mute sm:inline">{brand.sanskrit}</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-mute transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/pricing"
            className="hidden text-sm font-medium text-ink-mute hover:text-ink sm:inline"
          >
            Pricing
          </Link>
          <Link href="/demo" className="btn-primary !px-4 !py-2.5 text-xs md:text-sm">
            Book a demo
          </Link>
        </div>
      </div>
    </header>
  );
}
