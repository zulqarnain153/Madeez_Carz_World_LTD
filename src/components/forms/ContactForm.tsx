"use client";

import { motion, type Variants } from "framer-motion";
import { useWeb3Form } from "@/lib/useWeb3Form";
import { FormStatusMessage } from "./FormStatusMessage";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export function ContactForm() {
  const { status, handleSubmit } = useWeb3Form({ subject: "Website contact form enquiry" });

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={container}
    >
      <motion.div variants={item} className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="text-sm font-medium text-ink">Name</label>
          <input
            id="contact-name"
            name="name"
            required
            className="rounded-sm border border-ink/15 bg-canvas px-3.5 py-2.5 text-[0.95rem] text-ink focus:border-marque-500"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="text-sm font-medium text-ink">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className="rounded-sm border border-ink/15 bg-canvas px-3.5 py-2.5 text-[0.95rem] text-ink focus:border-marque-500"
          />
        </div>
      </motion.div>

      <motion.div variants={item} className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-phone" className="text-sm font-medium text-ink">Phone</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            className="rounded-sm border border-ink/15 bg-canvas px-3.5 py-2.5 text-[0.95rem] text-ink focus:border-marque-500"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-subject" className="text-sm font-medium text-ink">Subject</label>
          <input
            id="contact-subject"
            name="subject"
            required
            className="rounded-sm border border-ink/15 bg-canvas px-3.5 py-2.5 text-[0.95rem] text-ink focus:border-marque-500"
          />
        </div>
      </motion.div>

      <motion.div variants={item} className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium text-ink">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className="resize-none rounded-sm border border-ink/15 bg-canvas px-3.5 py-2.5 text-[0.95rem] text-ink focus:border-marque-500"
        />
      </motion.div>

      <motion.button
        variants={item}
        type="submit"
        disabled={status === "submitting"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="self-start rounded-full bg-marque-500 px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-marque-600 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </motion.button>

      <FormStatusMessage status={status} />
    </motion.form>
  );
}
