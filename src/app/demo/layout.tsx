import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Free Salon Software Demo",
  description:
    "Book a free 30-minute AntraHQ demo for your salon or spa. We map your billing, staff, stock and branch reporting, then show the screens that fix your gaps.",
  path: "/demo/",
});

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
