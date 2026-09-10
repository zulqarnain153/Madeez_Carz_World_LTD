import { MapPin, Mail } from "lucide-react";
import { business, fullAddress, mailHref } from "@/lib/business";

export function TopBar() {
  return (
    <div className="hidden bg-marque-900 text-silver-300 md:block">
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-8 py-2 text-[0.8rem] lg:px-10">
        <div className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 text-marque-300" aria-hidden="true" />
          <span>{fullAddress}</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={mailHref}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail className="h-3.5 w-3.5 text-marque-300" aria-hidden="true" />
            <span>{business.contact.email}</span>
          </a>
          <span className="hidden text-silver-300/70 lg:inline">
            Director: {business.director}
          </span>
        </div>
      </div>
    </div>
  );
}
