"use client";

import { FormEvent, useState } from "react";

type SubmitStatus = "idle" | "submitting" | "success" | "error" | "not-configured";

interface UseWeb3FormOptions {
  subject: string; // shown in the email subject line Web3Forms sends
}

/**
 * Shared submit handler for every form on the site (Contact, Sell Your Car,
 * Vehicle Enquiry). Reads NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY from the
 * environment — see .env.example. Get a free key at https://web3forms.com
 *
 * If the key is missing, the form clearly reports "not-configured" rather
 * than silently failing or falsely claiming success.
 */
export function useWeb3Form({ subject }: UseWeb3FormOptions) {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!accessKey) {
      setStatus("not-configured");
      return;
    }

    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", accessKey);
    formData.append("subject", subject);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return { status, handleSubmit, isConfigured: Boolean(accessKey) };
}
