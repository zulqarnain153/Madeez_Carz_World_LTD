export type FuelType =
  | "Petrol"
  | "Diesel"
  | "Hybrid"
  | "Plug-in Hybrid"
  | "Electric";

export type Transmission = "Manual" | "Automatic" | "Semi-Automatic";

export type BodyType =
  | "Hatchback"
  | "Saloon"
  | "Estate"
  | "SUV"
  | "Coupe"
  | "Convertible"
  | "MPV"
  | "Van";

export type VehicleAvailability = "In Stock" | "Reserved" | "Sold" | "Coming Soon";

export interface Vehicle {
  id: string;
  slug: string;
  make: string;
  model: string;
  variant?: string;
  price: number; // whole pounds, e.g. 12995
  registrationYear: number;
  mileage: number; // miles
  fuelType: FuelType;
  transmission: Transmission;
  engineSize: string; // e.g. "1.6L"
  colour: string;
  bodyType: BodyType;
  registration?: string; // number plate, optional to display
  description: string;
  features: string[];
  images: string[]; // paths under /public/vehicles/ — empty until real photos exist
  featured: boolean;
  availability: VehicleAvailability;
}
