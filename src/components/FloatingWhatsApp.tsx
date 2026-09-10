"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { business, telHref, whatsappHref } from "@/lib/business";

export function FloatingWhatsApp() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="fixed bottom-5 left-4 z-40 md:bottom-6 md:left-6"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <motion.div
        className="flex items-center overflow-hidden rounded-full bg-[#1E9E5A] shadow-lift"
        animate={{ width: expanded ? "auto" : 56 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 shrink-0 items-center justify-center text-white"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="h-6 w-6" />
        </a>
        <div
          className={`flex flex-col justify-center pr-4 text-white transition-opacity duration-200 ${
            expanded ? "opacity-100" : "hidden opacity-0 md:hidden"
          }`}
        >
          <span className="text-[0.7rem] font-medium leading-tight text-white/85">
            Call or WhatsApp
          </span>
          <a href={telHref} className="text-[0.85rem] font-semibold leading-tight">
            {business.contact.phoneDisplay}
          </a>
        </div>
      </motion.div>

      {/* Compact mobile-only call button, stacked above WhatsApp */}
      <a
        href={telHref}
        aria-label="Call us"
        className="absolute -top-16 left-0 flex h-12 w-12 items-center justify-center rounded-full bg-marque-500 text-white shadow-lift md:hidden"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
