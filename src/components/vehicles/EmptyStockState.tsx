import { CarFront } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface EmptyStockStateProps {
  title?: string;
  description?: string;
  showContactButton?: boolean;
}

export function EmptyStockState({
  title = "Vehicle Stock Coming Soon",
  description = "We're preparing our latest vehicle listings. Please check back soon, or get in touch and we'll help you directly.",
  showContactButton = true,
}: EmptyStockStateProps) {
  return (
    <div className="flex flex-col items-center gap-5 rounded-md border border-dashed border-ink/15 bg-canvas-raised px-6 py-16 text-center sm:py-20">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-marque-50 text-marque-600">
        <CarFront className="h-7 w-7" strokeWidth={1.75} />
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
          {title}
        </h3>
        <p className="mx-auto max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
          {description}
        </p>
      </div>
      {showContactButton && <Button href="/contact">Contact Us</Button>}
    </div>
  );
}
