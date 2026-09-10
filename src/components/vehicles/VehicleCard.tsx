import Link from "next/link";
import { Gauge, Fuel, Settings2, ImageOff } from "lucide-react";
import type { Vehicle } from "@/types/vehicle";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const hasImage = vehicle.images.length > 0;

  return (
    <Link
      href={`/stock/${vehicle.slug}`}
      className="group flex flex-col overflow-hidden rounded-md border border-ink/8 bg-canvas-raised transition-all duration-300 hover:-translate-y-1 hover:shadow-panel"
    >
      <div className="relative flex aspect-[4/3] items-center justify-center bg-canvas-sunken">
        {hasImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={vehicle.images[0]}
            alt={`${vehicle.make} ${vehicle.model}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <ImageOff className="h-8 w-8 text-ink-faint" strokeWidth={1.5} />
        )}
        {vehicle.availability !== "In Stock" && (
          <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {vehicle.availability}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">
            {vehicle.make} {vehicle.model}
          </h3>
          {vehicle.variant && (
            <p className="text-sm text-ink-soft">{vehicle.variant}</p>
          )}
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[0.85rem] text-ink-soft">
          <span className="flex items-center gap-1.5">
            <Gauge className="h-3.5 w-3.5" /> {vehicle.mileage.toLocaleString()} mi
          </span>
          <span className="flex items-center gap-1.5">
            <Fuel className="h-3.5 w-3.5" /> {vehicle.fuelType}
          </span>
          <span className="flex items-center gap-1.5">
            <Settings2 className="h-3.5 w-3.5" /> {vehicle.transmission}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-display text-xl font-semibold text-marque-600">
            £{vehicle.price.toLocaleString()}
          </span>
          <span className="text-sm font-medium text-ink group-hover:text-marque-600">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
