import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { business } from "@/lib/business";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.site.url),
  title: {
    default: "Madeez Carz World Ltd | Used Car Dealership in Egham, Surrey",
    template: "%s | Madeez Carz World Ltd",
  },
  description:
    "Madeez Carz World Ltd is a customer-focused used car dealership based in Egham, Surrey, helping local buyers find a vehicle that suits them.",
  openGraph: {
    title: "Madeez Carz World Ltd",
    description:
      "Customer-focused used car dealership based in Egham, Surrey, United Kingdom.",
    url: business.site.url,
    siteName: "Madeez Carz World Ltd",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}
