"use client";

import type { Vehicle } from "@/types/vehicle";
import { useWeb3Form } from "@/lib/useWeb3Form";
import { FormStatusMessage } from "@/components/forms/FormStatusMessage";

export function VehicleEnquiryForm({ vehicle }: { vehicle: Vehicle }) {
  const { status, handleSubmit } = useWeb3Form({
    subject: `Vehicle enquiry: ${vehicle.make} ${vehicle.model}`,
  });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="vehicle" value={`${vehicle.make} ${vehicle.model} (${vehicle.slug})`} />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="enquiry-name" className="text-sm font-medium text-ink">Name</label>
          <input
            id="enquiry-name"
            name="name"
            required
            className="rounded-sm border border-ink/15 bg-canvas px-3.5 py-2.5 text-[0.95rem] text-ink focus:border-marque-500"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="enquiry-phone" className="text-sm font-medium text-ink">Phone Number</label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            required
            className="rounded-sm border border-ink/15 bg-canvas px-3.5 py-2.5 text-[0.95rem] text-ink focus:border-marque-500"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="enquiry-email" className="text-sm font-medium text-ink">Email Address</label>
        <input
          id="enquiry-email"
          name="email"
          type="email"
          required
          className="rounded-sm border border-ink/15 bg-canvas px-3.5 py-2.5 text-[0.95rem] text-ink focus:border-marque-500"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="enquiry-message" className="text-sm font-medium text-ink">Message</label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={4}
          defaultValue={`Hi, I'm interested in the ${vehicle.make} ${vehicle.model}${vehicle.variant ? ` ${vehicle.variant}` : ""}. Could you tell me more?`}
          className="resize-none rounded-sm border border-ink/15 bg-canvas px-3.5 py-2.5 text-[0.95rem] text-ink focus:border-marque-500"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-marque-500 px-6 py-3 text-[0.95rem] font-semibold text-white transition-colors hover:bg-marque-600 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </button>

      <FormStatusMessage status={status} />
    </form>
  );
}
