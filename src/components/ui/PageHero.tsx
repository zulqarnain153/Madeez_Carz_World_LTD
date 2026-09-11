"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "./Eyebrow";
import { Container } from "./Container";

const easeOut = [0.22, 1, 0.36, 1] as const;

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-ink/8 bg-canvas-raised py-14 sm:py-20">
      <Container className="flex max-w-2xl flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: easeOut }}
          className="font-display text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: easeOut }}
            className="text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            {description}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
