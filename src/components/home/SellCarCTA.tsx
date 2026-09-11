"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function SellCarCTA() {
  return (
    <section className="relative overflow-hidden bg-marque-900 py-14 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-marque-500/25 blur-3xl" />
      <Container className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Sell Your Car With Confidence
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-silver-300">
            Thinking of selling? Tell us about your vehicle and we&apos;ll get back
            to you directly with clear next steps — no obligation.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <Button href="/sell-your-car" variant="dark" icon={<ArrowRight className="h-4 w-4" />}>
            Sell Your Car
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
