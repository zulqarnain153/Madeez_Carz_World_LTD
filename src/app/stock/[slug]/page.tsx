import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronLeft, Phone, Gauge, Fuel, Settings2, Palette, CalendarDays, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { VehicleGallery } from "@/components/vehicles/VehicleGallery";
import { VehicleEnquiryForm } from "@/components/vehicles/VehicleEnquiryForm";
import { getAllSlugs, getVehicleBySlug } from "@/data/vehicles";
import { telHref, whatsappHref } from "@/lib/business";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) return { title: "Vehicle Not Found" };
  return {
    title: `${vehicle.make} ${vehicle.model}${vehicle.variant ? ` ${vehicle.variant}` : ""}`,
    description: vehicle.description,
  };
}

const specs = (v: NonNullable<ReturnType<typeof getVehicleBySlug>>) => [
  { icon: CalendarDays, label: "Year", value: String(v.registrationYear) },
  { icon: Gauge, label: "Mileage", value: `${v.mileage.toLocaleString()} mi` },
  { icon: Fuel, label: "Fuel Type", value: v.fuelType },
  { icon: Settings2, label: "Transmission", value: v.transmission },
  { icon: Zap, label: "Engine Size", value: v.engineSize },
  { icon: Palette, label: "Colour", value: v.colour },
];

export default async function VehicleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Link
          href="/stock"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-marque-600"
        >
          <ChevronLeft className="h-4 w-4" /> Back to Stock
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <div className="flex flex-col gap-8">
            <VehicleGallery vehicle={vehicle} />

            <div>
              <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                {vehicle.make} {vehicle.model}
              </h1>
              {vehicle.variant && <p className="mt-1 text-ink-soft">{vehicle.variant}</p>}
              <p className="mt-3 font-display text-2xl font-semibold text-marque-600">
                £{vehicle.price.toLocaleString()}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-y border-ink/8 py-6 sm:grid-cols-3">
              {specs(vehicle).map((spec) => (
                <div key={spec.label} className="flex items-start gap-2.5">
                  <spec.icon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-marque-500" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-ink-faint">{spec.label}</p>
                    <p className="text-sm font-medium text-ink">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-ink">Description</h2>
              <p className="mt-2 leading-relaxed text-ink-soft">{vehicle.description}</p>
            </div>

            {vehicle.features.length > 0 && (
              <div>
                <h2 className="font-display text-lg font-semibold text-ink">Features</h2>
                <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
                  {vehicle.features.map((f) => (
                    <li key={f} className="text-sm text-ink-soft">• {f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 rounded-md border border-ink/8 bg-canvas-raised p-6">
              <a
                href={telHref}
                className="flex items-center justify-center gap-2.5 rounded-full bg-marque-500 px-6 py-3.5 text-[0.95rem] font-semibold text-white hover:bg-marque-600"
              >
                <Phone className="h-4.5 w-4.5 shrink-0" /> Call Us
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-full border border-ink/15 px-6 py-3.5 text-[0.95rem] font-semibold text-ink hover:border-marque-500 hover:text-marque-600"
              >
                <FaWhatsapp className="h-4.5 w-4.5 shrink-0" /> WhatsApp Us
              </a>
            </div>

            <div className="rounded-md border border-ink/8 bg-canvas-raised p-6">
              <h2 className="font-display text-lg font-semibold text-ink">Enquire About This Vehicle</h2>
              <div className="mt-4">
                <VehicleEnquiryForm vehicle={vehicle} />
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
