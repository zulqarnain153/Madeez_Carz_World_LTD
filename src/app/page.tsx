import { Hero } from "@/components/home/Hero";
import { TrustFeatures } from "@/components/home/TrustFeatures";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FeaturedStock } from "@/components/home/FeaturedStock";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { SellCarCTA } from "@/components/home/SellCarCTA";
import { LocationCTA } from "@/components/home/LocationCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustFeatures />
      <AboutPreview />
      <FeaturedStock />
      <WhyChooseUs />
      <SellCarCTA />
      <LocationCTA />
    </>
  );
}
