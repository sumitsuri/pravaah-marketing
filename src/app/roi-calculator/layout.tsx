import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Salon Revenue Opportunity Calculator",
  description:
    "Estimate the desk time you save and the WhatsApp win-back revenue you could recover across your salon branches in India. Free calculator.",
  path: "/roi-calculator/",
});

export default function RoiCalculatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
