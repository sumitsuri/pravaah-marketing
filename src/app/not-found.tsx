import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you requested does not exist on Antrahq.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="bg-mist-soft pt-28">
      <section className="section-pad !pt-10">
        <div className="container-narrow text-center">
          <p className="eyebrow">404</p>
          <h1 className="display mt-3">This page is not on Antrahq.</h1>
          <p className="lede mx-auto mt-5 max-w-xl">
            The link may be outdated, or the page was moved. Head back to the homepage or explore
            products and pricing.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/" className="btn-primary">
              Go to homepage
            </Link>
            <Link href="/products" className="btn-secondary">
              Browse products
            </Link>
            <Link href="/demo" className="btn-secondary">
              Book a growth audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
