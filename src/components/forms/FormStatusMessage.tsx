import { CheckCircle2, AlertTriangle, Info } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error" | "not-configured";

export function FormStatusMessage({ status }: { status: Status }) {
  if (status === "success") {
    return (
      <div className="flex items-center gap-2.5 rounded-md bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
        <CheckCircle2 className="h-4.5 w-4.5 shrink-0" />
        Thanks — your message has been sent. We&apos;ll be in touch shortly.
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex items-center gap-2.5 rounded-md bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
        <AlertTriangle className="h-4.5 w-4.5 shrink-0" />
        Something went wrong sending your message. Please try again, or contact us directly by phone or WhatsApp.
      </div>
    );
  }

  if (status === "not-configured") {
    return (
      <div className="flex items-center gap-2.5 rounded-md bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
        <Info className="h-4.5 w-4.5 shrink-0" />
        This form isn&apos;t connected yet (missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY). Please contact us directly by phone, WhatsApp, or email for now.
      </div>
    );
  }

  return null;
}
