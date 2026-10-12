"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, Clock, IndianRupee, MonitorPlay } from "lucide-react";
import { brand } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppConnectButton } from "@/components/WhatsAppConnect";

const API_URL =
  process.env.NEXT_PUBLIC_SALES_API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:8080";

const agenda = [
  { icon: Clock, title: "30 minutes, on your schedule", desc: "Video call or WhatsApp — whichever suits your day." },
  { icon: MonitorPlay, title: "Your problems, live in the product", desc: "We start from your branch count and biggest leak, not a slide deck." },
  { icon: IndianRupee, title: "A clear plan and price", desc: "Starter, Growth or Enterprise — with the published per-branch price." },
];

const inputClass =
  "mt-1.5 w-full rounded-lg border border-surface-line bg-white px-3.5 py-2.5 text-[0.9375rem] text-ink placeholder:text-ink-faint focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-200";
const labelClass = "text-sm font-medium text-ink";

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const businessName = String(form.get("businessName") ?? "").trim();
    const contactName = String(form.get("contactName") ?? "").trim();
    try {
      const res = await fetch(`${API_URL}/api/v1/public/sales-leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactName || businessName,
          businessName,
          contactName,
          email: form.get("email"),
          phone: form.get("phone"),
          city: form.get("city") || undefined,
          branches: form.get("branches"),
          notes: form.get("notes"),
        }),
      });
      const body = await res.json();
      if (!res.ok || !body.success) {
        throw new Error(body.message || "Submission failed");
      }
      trackEvent("growth_audit_submit", {
        branches: String(form.get("branches") ?? ""),
      });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-hero pt-16">
      <section className="container-wide py-12 sm:py-16 lg:py-20">
        <Breadcrumbs items={[{ name: "Book a demo", path: "/demo/" }]} />
        <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">Free demo</p>
            <h1 className="h-hero mt-3 !text-[2rem] sm:!text-[2.75rem]">See {brand.name} solve your salon&apos;s biggest leak</h1>
            <p className="lede mt-5">
              Tell us about your salon or chain. We&apos;ll come prepared with the screens that matter to you — billing, staff,
              stock, guests or branch profit.
            </p>
            <ul className="mt-10 space-y-6">
              {agenda.map((a) => (
                <li key={a.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand">
                    <a.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{a.title}</span>
                    <span className="mt-0.5 block text-sm text-ink-mute">{a.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-xl border border-surface-line bg-white p-5">
              <p className="text-sm font-semibold text-ink">Prefer to chat now?</p>
              <p className="mt-1 text-sm text-ink-mute">Message us on WhatsApp or email {brand.email}.</p>
              <WhatsAppConnectButton className="mt-4" />
            </div>
          </div>

          <div className="card p-6 shadow-premium sm:p-8">
            {submitted ? (
              <div className="py-12 text-center" role="status">
                <CheckCircle2 className="mx-auto h-12 w-12 text-win" aria-hidden />
                <p className="mt-4 font-display text-2xl text-ink">Thanks — you&apos;re booked in.</p>
                <p className="mt-2 text-sm text-ink-mute">We&apos;ll reach out shortly on WhatsApp or email to fix a time.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <h2 className="font-display text-xl text-ink">Book your free demo</h2>
                {error && (
                  <p className="rounded-lg bg-pain-soft px-3 py-2 text-sm text-pain" role="alert">
                    {error}
                  </p>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contactName" className={labelClass}>
                      Your name
                    </label>
                    <input id="contactName" required name="contactName" autoComplete="name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="businessName" className={labelClass}>
                      Salon / brand name
                    </label>
                    <input id="businessName" required name="businessName" autoComplete="organization" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      required
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="+91"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Work email
                    </label>
                    <input id="email" required type="email" name="email" autoComplete="email" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="city" className={labelClass}>
                      City
                    </label>
                    <input id="city" name="city" autoComplete="address-level2" placeholder="e.g. Bengaluru" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="branches" className={labelClass}>
                      Number of branches
                    </label>
                    <select id="branches" name="branches" className={inputClass} defaultValue="1">
                      <option value="1">1 (single outlet)</option>
                      <option value="2-5">2–5</option>
                      <option value="6-15">6–15</option>
                      <option value="16-50">16–50</option>
                      <option value="50+">50+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="notes" className={labelClass}>
                    What should we focus on? <span className="font-normal text-ink-faint">(optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    className={inputClass}
                    placeholder="Branch P&L, attendance, WhatsApp, inventory…"
                  />
                </div>
                <button type="submit" className="btn-primary btn-lg w-full" disabled={loading}>
                  {loading ? "Sending…" : "Book my free demo"}
                </button>
                <p className="text-center text-xs text-ink-faint">Free, no obligation.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
