import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  body,
  ctaHref = "/demo",
  ctaLabel = "Book a demo",
}: {
  eyebrow: string;
  title: string;
  body: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="border-b border-ink/8 bg-flow-hero pt-28">
      <div className="container-wide px-5 py-16 md:px-8 md:py-20 lg:px-12">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-ink md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-mute md:text-lg">{body}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={ctaHref} className="btn-primary">
            {ctaLabel}
          </Link>
          <Link href="/pricing" className="btn-secondary">
            See pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
