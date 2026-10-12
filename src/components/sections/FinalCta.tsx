import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brand } from "@/lib/content";
import { whatsappHref } from "@/lib/whatsapp";

export function FinalCta({
  title = "See where your salon is leaking money — in 30 minutes",
  lede = "Book a free demo. We'll walk through your branches, billing and reporting, then show the AntraHQ screens that fix your biggest gap. No slide deck.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl bg-[#1a0b3d] px-6 py-12 text-center sm:px-12 sm:py-16" data-reveal>
          <div className="blob -left-20 -top-20 h-72 w-72 bg-brand" aria-hidden />
          <div className="blob -bottom-24 -right-16 h-80 w-80 bg-accent [animation-delay:-7s]" aria-hidden />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-display text-3xl leading-tight text-white sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink-faint sm:text-lg">{lede}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/demo" className="btn-primary btn-lg">
                {brand.cta.primary} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark btn-lg">
                {brand.whatsapp.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
