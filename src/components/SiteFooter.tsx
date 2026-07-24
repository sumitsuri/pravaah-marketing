import Link from "next/link";
import { brand, navLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-mist-soft">
      <div className="container-narrow grid gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr] md:px-8 lg:px-12">
        <div>
          <p className="font-display text-3xl text-white">{brand.name}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-mist/70">
            {brand.mission}
          </p>
          <p className="mt-6 text-xs tracking-wide text-jade-soft">{brand.footer}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-jade-soft">
              Explore
            </p>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block text-mist/80 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-jade-soft">
              Get started
            </p>
            <Link href="/demo" className="block text-mist/80 hover:text-white">
              Book a demo
            </Link>
            <Link href="/pricing" className="block text-mist/80 hover:text-white">
              Pricing
            </Link>
            <a href="mailto:hello@pravaah.app" className="block text-mist/80 hover:text-white">
              hello@pravaah.app
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-mist/50 md:px-8">
        © {new Date().getFullYear()} Pravaah. Independent salon ops platform.
      </div>
    </footer>
  );
}
