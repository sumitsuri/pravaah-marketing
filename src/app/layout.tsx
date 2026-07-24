import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pravaah — The flow of salon success",
    template: "%s · Pravaah",
  },
  description:
    "The operating system for multi-branch salon chains in India. GST billing, branch P&L, WhatsApp campaigns, and a manager floor app — in one continuous flow.",
  openGraph: {
    title: "Pravaah — The flow of salon success",
    description:
      "Multi-branch salon ops for India: GST, P&L, WhatsApp, attendance, Market Pulse.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-mist-soft font-sans text-ink antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
