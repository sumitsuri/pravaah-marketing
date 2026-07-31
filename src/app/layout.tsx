import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import Script from "next/script";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloatingButton } from "@/components/WhatsAppConnect";
import { MarketingThemeProvider } from "@/components/theme/MarketingThemeProvider";
import { brand } from "@/lib/content";
import { MARKETING_THEME_BOOT } from "@/lib/marketing-theme";
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
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s · ${brand.name}`,
  },
  description:
    "Antrahq is the growth decision platform for multi-location businesses in India. Turn floor signals into growth decisions — GST billing, branch P&L, Market Pulse, WhatsApp campaigns, and verified attendance.",
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description:
      "The growth decision platform for multi-location operators. See clearly, act faster, grow together.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <Script id="marketing-theme-boot" strategy="beforeInteractive">
          {MARKETING_THEME_BOOT}
        </Script>
      </head>
      <body className="min-h-screen overflow-x-hidden font-sans antialiased">
        <MarketingThemeProvider>
          <SiteHeader />
          <main className="pb-20 sm:pb-24">{children}</main>
          <SiteFooter />
          <WhatsAppFloatingButton />
        </MarketingThemeProvider>
      </body>
    </html>
  );
}
