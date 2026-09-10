import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AboutIntro, AboutApproach, AboutContactCTA } from "@/components/AboutPageBody";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Madeez Carz World Ltd, a customer-focused used car dealership based in Egham, Surrey.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Madeez Carz World Ltd"
        title="About Madeez Carz World Ltd"
        description="A car dealership built on straightforward, personal service."
      />
      <AboutIntro />
      <AboutApproach />
      <AboutContactCTA />
    </>
  );
}
