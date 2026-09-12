"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const easeOut = [0.22, 1, 0.36, 1] as const;

function HeroLeadIn() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: easeOut }}
      >
        <Eyebrow>Welcome to Madeez Carz World Ltd</Eyebrow>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.08, ease: easeOut }}
        className="font-display text-[2.5rem] font-semibold leading-[1.03] tracking-tight text-ink sm:text-6xl lg:text-[4rem]"
      >
        Quality Cars
        <br />
        <span className="text-marque-600">Brighter Journeys</span>
      </motion.h1>
    </>
  );
}

function HeroDetails() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.2, ease: easeOut }}
        className="max-w-lg text-lg leading-relaxed text-ink-soft"
      >
        Madeez Carz World Ltd is a customer-focused car dealership based in
        Egham, Surrey. We take the time to understand what you need and guide
        you through every step of finding the right vehicle — straightforward,
        honest, and hassle-free.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.34, ease: easeOut }}
        className="mt-2 flex flex-wrap items-center gap-4"
      >
        <Button href="/stock" icon={<ArrowRight className="h-4 w-4" />}>
          View Our Stock
        </Button>
        <Button href="/sell-your-car" variant="secondary">
          Sell Your Car
        </Button>
      </motion.div>
    </>
  );
}

export function Hero() {
  return (
    <section className="relative bg-canvas">
      {/* Tablet & desktop: full-bleed showroom photo behind the text, car
          held on the right, text overlaid on the naturally lighter left
          side. One composition, no separate image card. */}
      <div className="relative hidden overflow-hidden sm:block">
        <div className="absolute inset-0">
          <Image
            src="/hero-showroom.jpg"
            alt="A vehicle outside the Madeez Carz World Ltd showroom"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_60%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/60 to-transparent" />
        </div>
        <Container className="relative flex min-h-[600px] items-center py-20 lg:min-h-[680px]">
          <div className="flex max-w-xl flex-col gap-6">
            <HeroLeadIn />
            <HeroDetails />
          </div>
        </Container>
      </div>

      {/* Mobile: eyebrow + heading overlay the top-left (lighter) area of
          the image so the car stays visible on the right and the two
          feel like one composition; description + CTAs sit in the
          white background area below, never over the photo. */}
      <div className="sm:hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="relative aspect-[4/3] w-full overflow-hidden"
        >
          <Image
            src="/hero-showroom.jpg"
            alt="A vehicle outside the Madeez Carz World Ltd showroom"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[90%_65%]"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-canvas to-transparent" />
          <div className="absolute inset-x-0 top-0 flex flex-col gap-3 px-5 pt-5">
            <div className="flex max-w-[62%] flex-col gap-3">
              <HeroLeadIn />
            </div>
          </div>
        </motion.div>
        <Container className="flex flex-col gap-6 pb-14 pt-8">
          <HeroDetails />
        </Container>
      </div>
    </section>
  );
}
