"use client";

import { useMemo, useState } from "react";
import { StockFilters, type StockFilterState } from "./StockFilters";
import { VehicleGrid } from "./VehicleGrid";
import { vehicles } from "@/data/vehicles";

const initialState: StockFilterState = {
  query: "",
  bodyType: "All",
  fuelType: "All",
  sort: "featured",
};

export function StockPageClient() {
  const [filters, setFilters] = useState<StockFilterState>(initialState);

  const filtered = useMemo(() => {
    let result = vehicles.filter((v) => v.availability !== "Sold");

    if (filters.query.trim()) {
      const q = filters.query.trim().toLowerCase();
      result = result.filter(
        (v) =>
          v.make.toLowerCase().includes(q) ||
          v.model.toLowerCase().includes(q) ||
          (v.variant ?? "").toLowerCase().includes(q)
      );
    }

    if (filters.bodyType !== "All") {
      result = result.filter((v) => v.bodyType === filters.bodyType);
    }

    if (filters.fuelType !== "All") {
      result = result.filter((v) => v.fuelType === filters.fuelType);
    }

    switch (filters.sort) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "year-desc":
        result = [...result].sort((a, b) => b.registrationYear - a.registrationYear);
        break;
      case "mileage-asc":
        result = [...result].sort((a, b) => a.mileage - b.mileage);
        break;
      default:
        result = [...result].sort((a, b) => Number(b.featured) - Number(a.featured));
    }

    return result;
  }, [filters]);

  return (
    <div className="flex flex-col gap-8">
      <StockFilters value={filters} onChange={setFilters} resultCount={filtered.length} />
      <VehicleGrid vehicles={filtered} />
    </div>
  );
}
