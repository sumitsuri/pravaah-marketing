import { PageHero } from "@/components/PageHero";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { RolesSection } from "@/components/home/RolesSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Who Uses AntraHQ — Salon & Spa Operators",
  description:
    "How salon and spa operators in India use AntraHQ: owners, branch managers, front desks and stylists working from one connected platform.",
  path: "/customers/",
});

export default function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="Customers"
        title="Built with salon operators running real branches in India"
        body="AntraHQ is used day to day by salon teams in India. Here is what owners, managers and staff use it for — and the changes multi-branch teams set out to make."
        crumbs={[{ name: "Customers", path: "/customers/" }]}
      />
      <RolesSection />
      <ResultsSection />
      <FinalCta />
    </>
  );
}
