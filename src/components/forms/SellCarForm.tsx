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

export function SellCarForm() {
  const { status, handleSubmit } = useWeb3Form({ subject: "Sell Your Car enquiry" });

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
        <Field id="sell-name" name="name" label="Name" required />
        <Field id="sell-phone" name="phone" label="Phone Number" type="tel" required />
      </motion.div>

      <motion.div variants={item}>
        <Field id="sell-email" name="email" label="Email Address" type="email" required />
      </motion.div>

      <motion.div variants={item} className="grid gap-5 sm:grid-cols-2">
        <Field id="sell-reg" name="registration" label="Vehicle Registration" required />
        <Field id="sell-make" name="make" label="Vehicle Make" required />
      </motion.div>

      <motion.div variants={item} className="grid gap-5 sm:grid-cols-2">
        <Field id="sell-model" name="model" label="Vehicle Model" required />
        <div className="grid grid-cols-2 gap-5">
          <Field id="sell-year" name="year" label="Year" type="number" required />
          <Field id="sell-mileage" name="mileage" label="Mileage" type="number" required />
        </div>
      </motion.div>

      <motion.div variants={item} className="flex flex-col gap-1.5">
        <label htmlFor="sell-message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="sell-message"
          name="message"
          rows={5}
          placeholder="Tell us a bit more about the vehicle's condition, service history, or anything else relevant."
          className="resize-none rounded-sm border border-ink/15 bg-canvas px-3.5 py-2.5 text-[0.95rem] text-ink placeholder:text-ink-faint focus:border-marque-500"
        />
      </motion.div>

      <motion.button
        variants={item}
        type="submit"
        disabled={status === "submitting"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full rounded-full bg-marque-500 px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-marque-600 disabled:opacity-60 sm:w-auto sm:self-start"
      >
        {status === "submitting" ? "Submitting…" : "Submit Vehicle Enquiry"}
      </motion.button>

      <FormStatusMessage status={status} />
    </motion.form>
  );
}

interface FieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}

function Field({ id, name, label, type = "text", required }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {required && <span className="text-marque-600"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="rounded-sm border border-ink/15 bg-canvas px-3.5 py-2.5 text-[0.95rem] text-ink focus:border-marque-500"
      />
    </div>
  );
}
