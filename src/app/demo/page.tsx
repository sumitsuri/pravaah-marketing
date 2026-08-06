"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

import { brand } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

const API_URL =
  process.env.NEXT_PUBLIC_SALES_API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:8080";

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
    <div className="bg-flow-hero pt-28">
      <section className="section-pad !pt-10">
        <div className="container-narrow grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">Multi-branch growth audit</p>
            <h1 className="display mt-3">30 minutes to map your chain&apos;s growth gaps.</h1>
            <p className="lede mt-5">
              Not a generic slide deck. We review your branch count, billing flow, CRM discipline, staff
              attendance, inventory rhythm, and branch economics — then show the relevant {brand.name} screens
              live.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-ink-mute">
              {[
                "For salon & spa chains with 3–20 branches in India",
                "Covers billing, CRM, staff, inventory, WhatsApp, and branch P&L",
                "Clear Starter vs Growth vs Enterprise fit — public pricing, no demo tax",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-jade" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            className="rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(11,31,28,0.4)] md:p-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {submitted ? (
              <div className="py-10 text-center">
                <p className="font-display text-3xl text-ink">You&apos;re on the list.</p>
                <p className="mt-3 text-sm text-ink-mute">
                  We&apos;ll reach out shortly to schedule your growth audit.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                {error && (
                  <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
                )}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
                    Business / brand name
                  </label>
                  <input
                    required
                    name="businessName"
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-mist-soft px-4 py-3 text-sm outline-none ring-jade focus:ring-2"
                    placeholder="Your salon chain or brand"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
                    Your name
                  </label>
                  <input
                    required
                    name="contactName"
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-mist-soft px-4 py-3 text-sm outline-none ring-jade focus:ring-2"
                    placeholder="Owner, ops head, or finance lead"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
                    Work email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-mist-soft px-4 py-3 text-sm outline-none ring-jade focus:ring-2"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
                    Phone / WhatsApp
                  </label>
                  <input
                    required
                    name="phone"
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-mist-soft px-4 py-3 text-sm outline-none ring-jade focus:ring-2"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
                    City
                  </label>
                  <input
                    name="city"
                    defaultValue="Bangalore"
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-mist-soft px-4 py-3 text-sm outline-none ring-jade focus:ring-2"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
                    Number of branches
                  </label>
                  <select
                    name="branches"
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-mist-soft px-4 py-3 text-sm outline-none ring-jade focus:ring-2"
                    defaultValue="3-5"
                  >
                    <option value="1-2">1–2</option>
                    <option value="3-5">3–5</option>
                    <option value="6-15">6–15</option>
                    <option value="16+">16+</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
                    What should we focus on?
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-mist-soft px-4 py-3 text-sm outline-none ring-jade focus:ring-2"
                    placeholder="Branch P&L, attendance, WhatsApp CRM, inventory…"
                  />
                </div>
                <button type="submit" className="btn-primary w-full" disabled={loading}>
                  {loading ? "Submitting…" : "Request growth audit"}
                </button>
                <p className="text-center text-xs text-ink-mute">
                  Or email{" "}
                  <a className="text-jade underline" href={`mailto:${brand.email}`}>
                    {brand.email}
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
