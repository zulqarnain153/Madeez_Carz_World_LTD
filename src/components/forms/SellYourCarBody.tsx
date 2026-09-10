"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SellCarForm } from "./SellCarForm";
import { business, telHref, whatsappHref } from "@/lib/business";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function SellYourCarBody() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: easeOut }}
        className="rounded-md border border-ink/8 bg-canvas-raised p-6 sm:p-8"
      >
        <SellCarForm />
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, x: 28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay: 0.1, ease: easeOut }}
        className="flex flex-col gap-4"
      >
        <div className="rounded-md border border-ink/8 bg-canvas-raised p-6">
          <h2 className="font-display text-lg font-semibold text-ink">
            Prefer to talk it through?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Call or WhatsApp us directly and we&apos;ll talk through the details of your vehicle.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <a
              href={telHref}
              className="flex items-center justify-center gap-2.5 rounded-full bg-marque-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-marque-600"
            >
              <Phone className="h-4 w-4" /> {business.contact.phoneDisplay}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-marque-500 hover:text-marque-600"
            >
              <FaWhatsapp className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
