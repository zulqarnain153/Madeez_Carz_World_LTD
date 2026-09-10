"use client";

import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import type { BodyType, FuelType } from "@/types/vehicle";

export interface StockFilterState {
  query: string;
  bodyType: BodyType | "All";
  fuelType: FuelType | "All";
  sort: "featured" | "price-asc" | "price-desc" | "year-desc" | "mileage-asc";
}

const bodyTypes: (BodyType | "All")[] = [
  "All",
  "Hatchback",
  "Saloon",
  "Estate",
  "SUV",
  "Coupe",
  "Convertible",
  "MPV",
  "Van",
];

const fuelTypes: (FuelType | "All")[] = [
  "All",
  "Petrol",
  "Diesel",
  "Hybrid",
  "Plug-in Hybrid",
  "Electric",
];

interface StockFiltersProps {
  value: StockFilterState;
  onChange: (next: StockFilterState) => void;
  resultCount: number;
}

export function StockFilters({ value, onChange, resultCount }: StockFiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-4 rounded-md border border-ink/8 bg-canvas-raised p-5 sm:p-6"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-faint" />
          <input
            type="text"
            value={value.query}
            onChange={(e) => onChange({ ...value, query: e.target.value })}
            placeholder="Search by make or model, e.g. Ford Focus"
            aria-label="Search vehicles"
            className="w-full rounded-full border border-ink/12 bg-canvas py-3 pl-11 pr-4 text-[0.95rem] text-ink placeholder:text-ink-faint focus:border-marque-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <label className="sr-only" htmlFor="bodyType">Body type</label>
          <select
            id="bodyType"
            value={value.bodyType}
            onChange={(e) => onChange({ ...value, bodyType: e.target.value as StockFilterState["bodyType"] })}
            className="rounded-full border border-ink/12 bg-canvas px-4 py-3 text-[0.9rem] text-ink"
          >
            {bodyTypes.map((b) => (
              <option key={b} value={b}>
                {b === "All" ? "All Body Types" : b}
              </option>
            ))}
          </select>

          <label className="sr-only" htmlFor="fuelType">Fuel type</label>
          <select
            id="fuelType"
            value={value.fuelType}
            onChange={(e) => onChange({ ...value, fuelType: e.target.value as StockFilterState["fuelType"] })}
            className="rounded-full border border-ink/12 bg-canvas px-4 py-3 text-[0.9rem] text-ink"
          >
            {fuelTypes.map((f) => (
              <option key={f} value={f}>
                {f === "All" ? "All Fuel Types" : f}
              </option>
            ))}
          </select>

          <label className="sr-only" htmlFor="sort">Sort by</label>
          <div className="flex items-center gap-2 rounded-full border border-ink/12 bg-canvas px-4 py-3">
            <SlidersHorizontal className="h-4 w-4 text-ink-faint" />
            <select
              id="sort"
              value={value.sort}
              onChange={(e) => onChange({ ...value, sort: e.target.value as StockFilterState["sort"] })}
              className="bg-transparent text-[0.9rem] text-ink"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="year-desc">Newest First</option>
              <option value="mileage-asc">Lowest Mileage</option>
            </select>
          </div>
        </div>
      </div>

      <p className="text-sm text-ink-faint">
        {resultCount} {resultCount === 1 ? "vehicle" : "vehicles"} found
      </p>
    </motion.div>
  );
}
