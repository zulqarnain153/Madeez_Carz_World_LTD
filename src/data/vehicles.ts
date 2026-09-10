import type { Vehicle } from "@/types/vehicle";

// No real vehicle stock exists yet. This array is intentionally empty.
//
// When Madeez Carz World Ltd has vehicles to list, add objects here
// matching the Vehicle type (see src/types/vehicle.ts), for example:
//
// {
//   id: "1",
//   slug: "ford-focus-2019-titanium",
//   make: "Ford",
//   model: "Focus",
//   variant: "Titanium",
//   price: 11495,
//   registrationYear: 2019,
//   mileage: 32000,
//   fuelType: "Petrol",
//   transmission: "Manual",
//   engineSize: "1.0L",
//   colour: "Magnetic Grey",
//   bodyType: "Hatchback",
//   description: "...",
//   features: ["Air Conditioning", "Bluetooth", "Cruise Control"],
//   images: ["/vehicles/ford-focus-2019-titanium/1.jpg"],
//   featured: true,
//   availability: "In Stock",
// }
//
// Every page on the site is already wired up to render real data
// the moment it appears here — the empty states below will
// automatically be replaced by vehicle cards.

export const vehicles: Vehicle[] = [];

export function getFeaturedVehicles(): Vehicle[] {
  return vehicles.filter((v) => v.featured && v.availability !== "Sold");
}

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}

export function getAllSlugs(): string[] {
  return vehicles.map((v) => v.slug);
}
