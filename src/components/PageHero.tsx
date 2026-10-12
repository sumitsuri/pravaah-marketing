import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brand } from "@/lib/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { Crumb } from "@/lib/seo";

/** Shared hero for every inner page — same spacing, type scale and CTA pair everywhere. */
export function PageHero({
  eyebrow,
  title,
  body,
  crumbs,
  ctaHref = "/demo",
  ctaLabel = brand.cta.primary,
  secondaryHref = "/pricing",
  secondaryLabel = "See pricing",
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  crumbs?: Crumb[];
  ctaHref?: string;
  ctaLabel?: string;
  secondaryHref?: string | null;
  secondaryLabel?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-surface-line bg-hero pt-16">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="container-wide relative py-12 sm:py-16 lg:py-20">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <p className="eyebrow mt-6">{eyebrow}</p>
        <h1 className="h-hero mt-3 max-w-4xl !text-[2rem] sm:!text-[2.75rem] lg:!text-5xl">{title}</h1>
        <p className="lede mt-5">{body}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={ctaHref} className="btn-primary btn-lg">
            {ctaLabel} <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          {secondaryHref && (
            <Link href={secondaryHref} className="btn-secondary btn-lg">
              {secondaryLabel}
            </Link>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
