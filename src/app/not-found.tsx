import { Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-marque-50 text-marque-600">
        <Compass className="h-8 w-8" />
      </span>
      <div className="flex flex-col gap-3">
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Page not found
        </h1>
        <p className="max-w-md text-ink-soft">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Head
          back to the homepage or take a look at our current stock.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button href="/">Back to Home</Button>
        <Button href="/stock" variant="secondary">
          View Our Stock
        </Button>
      </div>
    </Container>
  );
}
