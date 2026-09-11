import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { business, fullAddress, telHref, whatsappHref, mailHref } from "@/lib/business";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/stock", label: "Stock" },
  { href: "/sell-your-car", label: "Sell Your Car" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-marque-900 text-silver-300">
      <Container className="grid gap-10 py-12 sm:py-14 md:grid-cols-[1.3fr_1fr_1.2fr] md:gap-12 md:py-16">
        <div className="flex flex-col gap-4">
          <Logo size="footer" />
          <p className="max-w-xs text-[0.95rem] leading-relaxed text-silver-300/90">
            A customer-focused car dealership based in Egham, Surrey — helping
            local buyers find a vehicle that suits them, with straightforward
            communication from enquiry to handover.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[0.95rem] text-silver-300/90 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Contact Information
          </h3>
          <ul className="flex flex-col gap-3 text-[0.95rem]">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-marque-300" />
              <span>{fullAddress}</span>
            </li>
            <li>
              <a href={telHref} className="flex items-center gap-2.5 hover:text-white">
                <Phone className="h-4 w-4 shrink-0 text-marque-300" />
                {business.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white"
              >
                <FaWhatsapp className="h-4 w-4 shrink-0 text-marque-300" />
                WhatsApp Us
              </a>
            </li>
            <li>
              <a href={mailHref} className="flex items-center gap-2.5 hover:text-white">
                <Mail className="h-4 w-4 shrink-0 text-marque-300" />
                {business.contact.email}
              </a>
            </li>
            <li className="pt-1 text-silver-300/70">Director: {business.director}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 pb-40 text-center text-[0.85rem] text-silver-300/70 sm:flex-row sm:pb-6 sm:text-left">
          <span>© {new Date().getFullYear()} Madeez Carz World Ltd. All rights reserved.</span>
          <span>Company registered in England &amp; Wales.</span>
        </Container>
      </div>
    </footer>
  );
}
