import Link from "next/link";
import { brand, nav } from "@/lib/content";
import { compareNav } from "@/lib/compare-pages";
import { Logo } from "@/components/Logo";
import { WhatsAppIconLink } from "@/components/WhatsAppConnect";

const guides = [
  { href: "/resources/best-salon-software-india-2026", label: "Best salon software in India" },
  { href: "/resources/salon-billing-gst-software-india", label: "Salon GST billing software" },
  { href: "/resources/beauty-parlour-software-india", label: "Beauty parlour software" },
  { href: "/resources/nail-salon-software-india", label: "Nail salon software" },
  { href: "/resources/spa-management-platform", label: "Spa management software" },
  { href: "/resources/barbershop-software-india", label: "Barbershop software" },
  { href: "/resources/salon-software-hindi-regional-languages", label: "Salon software in Hindi" },
  { href: "/resources/multi-branch-salon-platform", label: "Multi-branch salon software" },
];

const COPYRIGHT_START = 2026;
const YEAR = new Date().getFullYear();

const legal = [
  { href: "/privacy/", label: "Privacy policy" },
  { href: "/terms/", label: "Terms of use" },
  { href: "/account-deletion/", label: "Account deletion" },
  { href: "/brand/", label: "Brand Centre" },
];

const company = [
  { href: "/pricing", label: "Pricing" },
  { href: "/demo", label: "Book a demo" },
  { href: "/customers", label: "Customers" },
  { href: "/roi-calculator", label: "ROI calculator" },
  { href: "/branch-health-score", label: "Branch health score" },
];

function Column({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-ink-faint transition hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-faint">
      <div className="container-wide py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_3fr]">
          <div className="max-w-sm">
            <Logo tone="light" size="lg" />
            <p className="mt-4 text-sm leading-relaxed">{brand.mission}</p>
            <div className="mt-6 flex items-center gap-3">
              <a href={`mailto:${brand.email}`} className="text-sm text-white hover:text-brand-300">
                {brand.email}
              </a>
              <WhatsAppIconLink className="h-10 w-10" iconClassName="h-5 w-5" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            <Column title="Products" links={nav.products.slice(0, 7).map((p) => ({ href: p.href, label: p.title }))} />
            <Column
              title="Solutions"
              links={[
                ...nav.solutions.map((s) => ({ href: s.href, label: s.title })),
                { href: "/products/local-spotlight", label: "Local Spotlight" },
                { href: "/products/reviews", label: "Reviews & ratings" },
                { href: "/products/campaigns", label: "WhatsApp marketing" },
              ]}
            />
            <Column title="Compare" links={compareNav.map((c) => ({ href: c.href, label: c.title }))} />
            <Column title="Guides" links={guides} />
            <Column title="Company" links={company} />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-wide py-6 pb-24 text-xs sm:pb-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-ink-faint">
              © {COPYRIGHT_START === YEAR ? YEAR : `${COPYRIGHT_START}–${YEAR}`} {brand.legalName}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ink-faint transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
