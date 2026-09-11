"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Phone, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Logo } from "@/components/Logo";
import { telHref, whatsappHref, business } from "@/lib/business";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/stock", label: "Stock" },
  { href: "/sell-your-car", label: "Sell Your Car" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ink/40 md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-canvas-raised shadow-lift md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
              <Logo size="mobile" />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-canvas-sunken"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-3.5 text-lg font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-marque-50 text-marque-700"
                      : "text-ink hover:bg-canvas-sunken"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-3 border-t border-ink/10 px-5 py-5">
              <a
                href={telHref}
                className="flex items-center justify-center gap-2 rounded-full bg-marque-500 px-5 py-3.5 text-base font-semibold text-white"
              >
                <Phone className="h-4.5 w-4.5 shrink-0" /> {business.contact.phoneDisplay}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-3.5 text-base font-semibold text-ink"
              >
                <FaWhatsapp className="h-4.5 w-4.5 shrink-0" /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
