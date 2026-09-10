"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Navigation } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import {
  business,
  fullAddress,
  telHref,
  whatsappHref,
  mapsHref,
} from "@/lib/business";

export function LocationCTA() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-10 rounded-md border border-ink/8 bg-canvas-raised p-8 sm:p-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-5"
        >
          <Eyebrow>Get In Touch</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {business.legalName}
          </h2>
          <div className="flex items-start gap-3 text-ink-soft">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-marque-500" />
            <span>{fullAddress}</span>
          </div>
          <div className="flex flex-col gap-2 text-ink-soft">
            <span>Phone: {business.contact.phoneDisplay}</span>
            <span>Email: {business.contact.email}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1"
        >
          <a
            href={telHref}
            className="flex items-center justify-center gap-2.5 rounded-full bg-marque-500 px-6 py-4 text-[0.95rem] font-semibold text-white transition-colors hover:bg-marque-600"
          >
            <Phone className="h-4.5 w-4.5" /> Call Us
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 rounded-full border border-ink/15 px-6 py-4 text-[0.95rem] font-semibold text-ink transition-colors hover:border-marque-500 hover:text-marque-600"
          >
            <FaWhatsapp className="h-4.5 w-4.5" /> WhatsApp Us
          </a>
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 rounded-full border border-ink/15 px-6 py-4 text-[0.95rem] font-semibold text-ink transition-colors hover:border-marque-500 hover:text-marque-600"
          >
            <Navigation className="h-4.5 w-4.5" /> Get Directions
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
