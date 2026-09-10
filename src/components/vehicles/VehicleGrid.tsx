"use client";

import { motion } from "framer-motion";
import type { Vehicle } from "@/types/vehicle";
import { VehicleCard } from "./VehicleCard";
import { EmptyStockState } from "./EmptyStockState";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function VehicleGrid({ vehicles }: { vehicles: Vehicle[] }) {
  if (vehicles.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: easeOut }}
      >
        <EmptyStockState
          title="Our Vehicle Stock Is Coming Soon"
          description="We are preparing our latest vehicle listings. Please check back soon or contact us for more information."
        />
      </motion.div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {vehicles.map((vehicle, i) => (
        <motion.div
          key={vehicle.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: (i % 6) * 0.07, ease: easeOut }}
        >
          <VehicleCard vehicle={vehicle} />
        </motion.div>
      ))}
    </div>
  );
}
