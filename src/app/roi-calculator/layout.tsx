import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salon revenue opportunity calculator",
  description:
    "Estimate desk-time value and WhatsApp win-back upside for your multi-branch salon chain in India.",
  alternates: { canonical: "/roi-calculator/" },
};

export default function RoiCalculatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
