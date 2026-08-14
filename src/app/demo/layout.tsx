import type { Metadata } from "next";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a multi-branch growth audit",
  description: `30-minute growth audit for salon & spa operators in India — one branch or many. Map billing, CRM, staff, inventory, and branch P&L with ${brand.name}.`,
  alternates: { canonical: "/demo/" },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
