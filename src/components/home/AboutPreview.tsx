"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function AboutPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            eyebrow="About Madeez Carz World Ltd"
            title="A dealership built around getting it right for you"
            description="Based in Egham, Surrey, Madeez Carz World Ltd works with customers directly rather than through a call centre. Every enquiry is handled personally, so you always know who you're speaking with and where things stand."
          />
          <div className="mt-8">
            <Button href="/about" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
              Learn More About Us
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="col-span-2 rounded-md border border-ink/8 bg-canvas-raised p-7">
            <p className="font-display text-2xl font-semibold text-ink">Egham, Surrey</p>
            <p className="mt-1 text-sm text-ink-soft">Based locally, easy to reach</p>
          </div>
          <div className="rounded-md border border-ink/8 bg-canvas-raised p-7">
            <p className="font-display text-2xl font-semibold text-ink">Direct</p>
            <p className="mt-1 text-sm text-ink-soft">Speak with us, not a script</p>
          </div>
          <div className="rounded-md border border-ink/8 bg-canvas-raised p-7">
            <p className="font-display text-2xl font-semibold text-ink">Guided</p>
            <p className="mt-1 text-sm text-ink-soft">Support through every step</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
