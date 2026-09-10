import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SellYourCarBody } from "@/components/forms/SellYourCarBody";

export const metadata: Metadata = {
  title: "Sell Your Car",
  description:
    "Sell your car to Madeez Carz World Ltd in Egham, Surrey. Fill in the form and we'll get back to you directly.",
};

export default function SellYourCarPage() {
  return (
    <>
      <PageHero
        eyebrow="Sell Your Car"
        title="Sell Your Car With Confidence"
        description="Tell us about your vehicle using the form below and we'll get back to you with clear next steps — no obligation."
      />
      <section className="py-14 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:gap-16">
          <SellYourCarBody />
        </Container>
      </section>
    </>
  );
}
