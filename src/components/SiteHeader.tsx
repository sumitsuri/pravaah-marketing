import Link from "next/link";
import { brand, navLinks } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="container-narrow flex items-center justify-between px-5 py-5 md:px-8 lg:px-12">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight text-ink md:text-3xl">
            {brand.name}
          </span>
          <span className="hidden text-sm text-ink-mute sm:inline">{brand.sanskrit}</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
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
        <div className="flex items-center gap-3">
          <Link href="/demo" className="btn-primary !px-4 !py-2.5 text-xs md:text-sm">
            Book a demo
          </Link>
        </div>
      </div>
    </header>
  );
}
