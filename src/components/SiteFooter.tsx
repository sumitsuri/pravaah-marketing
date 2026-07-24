import Link from "next/link";
import { brand, platformTaxonomy, nav } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-mist-soft">
      <div className="container-wide px-5 py-14 md:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <p className="font-display text-3xl text-white">{brand.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist/70">{brand.mission}</p>
            <p className="mt-6 text-xs tracking-wide text-jade-soft">{brand.footer}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/demo" className="btn-primary !py-2.5 text-xs">
                Book a demo
              </Link>
              <Link href="/roi-calculator" className="btn-secondary !border-white/20 !bg-transparent !py-2.5 text-xs !text-white hover:!bg-white/5">
                ROI calculator
              </Link>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-jade-soft">
                Solutions
              </p>
              <ul className="mt-3 space-y-2">
                {nav.solutions.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-sm text-mist/75 hover:text-white">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-jade-soft">
                Products
              </p>
              <ul className="mt-3 space-y-2">
                {nav.products.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="text-sm text-mist/75 hover:text-white">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {platformTaxonomy.slice(0, 2).map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-jade-soft">
                  {col.title}
                </p>
                <ul className="mt-3 space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="text-xs leading-snug text-mist/65">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-8 text-sm">
          <Link href="/customers" className="text-mist/80 hover:text-white">
            Customers
          </Link>
          <Link href="/resources" className="text-mist/80 hover:text-white">
            Resources
          </Link>
          <Link href="/pricing" className="text-mist/80 hover:text-white">
            Pricing
          </Link>
          <a href="mailto:hello@pravaah.app" className="text-mist/80 hover:text-white">
            hello@pravaah.app
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-mist/50 md:px-8">
        © {new Date().getFullYear()} Pravaah. Independent salon ops platform.
      </div>
    </footer>
  );
}
