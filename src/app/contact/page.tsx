import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactPageBody } from "@/components/ContactPageBody";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Madeez Carz World Ltd in Egham, Surrey — call, WhatsApp, email, or send a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Reach us by phone, WhatsApp, email, or the form below — whichever suits you best."
      />
      <ContactPageBody />
    </>
  );
}
