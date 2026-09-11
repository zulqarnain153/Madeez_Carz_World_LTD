"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Navigation } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  business,
  fullAddress,
  telHref,
  whatsappHref,
  mailHref,
  mapsHref,
} from "@/lib/business";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ContactPageBody() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="flex flex-col gap-6"
        >
          <div className="rounded-md border border-ink/8 bg-canvas-raised p-6">
            <h2 className="font-display text-lg font-semibold text-ink">
              {business.legalName}
            </h2>
            <ul className="mt-4 flex flex-col gap-3 text-[0.95rem] text-ink-soft">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-marque-500" />
                {fullAddress}
              </li>
              <li className="text-ink-faint">Director: {business.director}</li>
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={telHref}
                className="flex items-center justify-center gap-2.5 rounded-full bg-marque-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-marque-600"
              >
                <Phone className="h-4 w-4" /> Call Us
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-marque-500 hover:text-marque-600"
              >
                <FaWhatsapp className="h-4 w-4" /> WhatsApp Us
              </a>
              <a
                href={mailHref}
                className="flex items-center justify-center gap-2.5 rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-marque-500 hover:text-marque-600"
              >
                <Mail className="h-4 w-4" /> Email Us
              </a>
            </div>
          </div>

          <motion.a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: easeOut }}
            className="group flex flex-col items-center justify-center gap-3 rounded-md border border-dashed border-ink/15 bg-canvas-sunken px-6 py-14 text-center transition-colors hover:border-marque-500"
          >
            <Navigation className="h-6 w-6 text-marque-500" />
            <span className="text-sm font-medium text-ink">{fullAddress}</span>
            <span className="text-sm font-semibold text-marque-600 group-hover:underline">
              Get Directions →
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: easeOut }}
          className="rounded-md border border-ink/8 bg-canvas-raised p-6 sm:p-8"
        >
          <h2 className="font-display text-lg font-semibold text-ink">Send Us a Message</h2>
          <div className="mt-5">
            <ContactForm />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
