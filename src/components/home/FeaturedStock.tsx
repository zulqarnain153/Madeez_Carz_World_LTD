"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { VehicleGrid } from "@/components/vehicles/VehicleGrid";
import { getFeaturedVehicles } from "@/data/vehicles";

export function FeaturedStock() {
  const featured = getFeaturedVehicles();

  return (
    <section className="bg-canvas-sunken/60 py-14 sm:py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="Our Vehicle Collection"
              title="Featured Stock"
              description="A selection of the vehicles currently available at Madeez Carz World Ltd."
            />
          </motion.div>
          <Button href="/stock" variant="secondary" icon={<ArrowRight className="h-4 w-4" />} className="shrink-0">
            View All Stock
          </Button>
        </div>

        <div className="mt-10">
          <VehicleGrid vehicles={featured} />
        </div>
      </Container>
    </section>
  );
}
