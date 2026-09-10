"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Handshake, Users, Gauge } from "lucide-react";
import { Container } from "@/components/ui/Container";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Service",
    description: "Straightforward dealings from first enquiry to handover.",
  },
  {
    icon: Handshake,
    title: "Hassle-Free Experience",
    description: "Clear communication with no unnecessary pressure.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "We listen first, then help you find what actually fits.",
  },
  {
    icon: Gauge,
    title: "Quality Vehicles",
    description: "Vehicles checked over before they're offered for sale.",
  },
];

export function TrustFeatures() {
  return (
    <section className="border-y border-ink/8 bg-canvas-raised">
      <Container>
        <div className="grid divide-y divide-ink/8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col gap-3 px-6 py-10 sm:px-7"
            >
              <feature.icon className="h-6 w-6 text-marque-500" strokeWidth={1.75} />
              <h3 className="font-display text-base font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="text-[0.9rem] leading-relaxed text-ink-soft">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
