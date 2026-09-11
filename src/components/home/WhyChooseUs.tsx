"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Professional Service",
    description: "Every enquiry is handled promptly and properly, start to finish.",
  },
  {
    title: "Customer-Focused Approach",
    description: "We take the time to understand what you actually need.",
  },
  {
    title: "Convenient Location",
    description: "Based in Egham, Surrey — straightforward to visit and view.",
  },
  {
    title: "Easy Communication",
    description: "Call, WhatsApp, or email — reach us in whichever way suits you.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading eyebrow="Why Choose Us" title="What working with us looks like" />
        </motion.div>

        <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex gap-3.5"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-marque-500" strokeWidth={1.75} />
              <div>
                <h3 className="font-display text-base font-semibold text-ink">
                  {reason.title}
                </h3>
                <p className="mt-1 text-[0.9rem] leading-relaxed text-ink-soft">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
