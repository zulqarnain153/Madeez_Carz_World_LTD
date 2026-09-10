import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { StockPageClient } from "@/components/vehicles/StockPageClient";

export const metadata: Metadata = {
  title: "Our Stock",
  description:
    "Browse the current vehicle stock at Madeez Carz World Ltd, a used car dealership in Egham, Surrey.",
};

export default function StockPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Vehicle Collection"
        title="Our Stock"
        description="Search and filter our current vehicles below. New stock is added regularly — check back often."
      />
      <section className="py-14 sm:py-20">
        <Container>
          <StockPageClient />
        </Container>
      </section>
    </>
  );
}
