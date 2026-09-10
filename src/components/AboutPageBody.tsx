"use client";

import { motion } from "framer-motion";
import { MapPin, MessageSquare, UserRound } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { business, fullAddress } from "@/lib/business";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function AboutIntro() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="flex max-w-3xl flex-col gap-6">
        <motion.p
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="text-lg leading-relaxed text-ink-soft"
        >
          Madeez Carz World Ltd is a car dealership based in Egham, Surrey,
          focused on helping customers find a vehicle that genuinely suits
          their needs. Every enquiry is handled directly, so you always know
          exactly who you&apos;re speaking with.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: easeOut }}
          className="text-lg leading-relaxed text-ink-soft"
        >
          We believe buying a car should be straightforward — clear
          information, honest answers, and no unnecessary pressure. Whether
          you&apos;re browsing our current stock or looking to sell your own
          vehicle, we aim to make the process as simple as possible.
        </motion.p>
      </Container>
    </section>
  );
}

export function AboutApproach() {
  return (
    <section className="border-y border-ink/8 bg-canvas-raised py-16 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <SectionHeading
            eyebrow="Our Approach"
            title="How we work with customers"
            description="We take the time to listen, answer questions honestly, and stay reachable throughout — by phone, WhatsApp, or email, whichever suits you best."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: easeOut }}
          className="flex flex-col gap-4 rounded-md border border-ink/8 bg-canvas p-7"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-marque-50 text-marque-600">
            <UserRound className="h-6 w-6" />
          </span>
          <h3 className="font-display text-lg font-semibold text-ink">Director</h3>
          <p className="text-ink-soft">{business.director}</p>
          <p className="text-sm text-ink-faint">
            Oversees Madeez Carz World Ltd and is directly involved in customer enquiries.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

export function AboutContactCTA() {
  return (
    <section className="py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: easeOut }}
      >
        <Container className="grid gap-8 rounded-md border border-ink/8 bg-canvas-raised p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-ink-soft">
              <MapPin className="h-5 w-5 text-marque-500" />
              <span>{fullAddress}</span>
            </div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Have a question? Get in touch.
            </h2>
          </div>
          <Button href="/contact" icon={<MessageSquare className="h-4 w-4" />}>
            Contact Us
          </Button>
        </Container>
      </motion.div>
    </section>
  );
}
