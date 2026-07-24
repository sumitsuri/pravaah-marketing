import Link from "next/link";
import { brand, platformTaxonomy } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-mist-soft">
      <div className="container-wide px-5 py-14 md:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-display text-3xl text-white">{brand.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist/70">{brand.mission}</p>
            <p className="mt-6 text-xs tracking-wide text-jade-soft">{brand.footer}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {platformTaxonomy.map((col) => (
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
          <Link href="/demo" className="text-mist/80 hover:text-white">
            Book a demo
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
