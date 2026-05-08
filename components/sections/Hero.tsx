"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui";
import { Starfield } from "./Starfield";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const portrait: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const flat: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1 },
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const c = prefersReducedMotion ? flat : container;
  const i = prefersReducedMotion ? flat : item;
  const p = prefersReducedMotion ? flat : portrait;
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden min-h-[92vh] flex items-center"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-[#070a1d]"
      />
      <Starfield />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent"
      />

      <div className="mx-auto w-full max-w-container px-6 md:px-10 py-20 md:py-32">
        <motion.div
          variants={c}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 items-center"
        >
          <div className="md:col-span-7 flex flex-col gap-6">
            <motion.span
              variants={i}
              className="font-mono text-xs uppercase tracking-[0.25em] text-accent"
            >
              Data Science · Machine Learning · Full-Stack
            </motion.span>

            <motion.h1
              variants={i}
              className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.05]"
            >
              Manas Raman Acharya
            </motion.h1>

            <motion.p
              variants={i}
              className="text-xl md:text-2xl text-foreground/90 font-medium"
            >
              Data Science Student Building AI-Powered Solutions
            </motion.p>

            <motion.p
              variants={i}
              className="text-base md:text-lg text-muted max-w-2xl text-balance"
            >
              Transforming complex data into actionable insights through
              machine learning, statistical modeling, and full-stack
              development.
            </motion.p>

            <motion.div
              variants={i}
              className="flex flex-wrap gap-3 pt-2"
            >
              <Link href="#projects" scroll>
                <Button variant="primary" size="lg">
                  View Projects
                </Button>
              </Link>
              <a href="/resume.pdf" download>
                <Button variant="secondary" size="lg">
                  Download Resume
                </Button>
              </a>
              <Link href="#contact" scroll>
                <Button variant="ghost" size="lg">
                  Contact
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={p}
            className="md:col-span-5 flex justify-center md:justify-end"
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-full bg-accent/10 blur-2xl"
              />
              <div className="relative h-[260px] w-[260px] md:h-[300px] md:w-[300px] rounded-full overflow-hidden border border-accent/40 bg-surface shadow-card-hover">
                <div
                  aria-hidden
                  className="absolute inset-0 grid place-items-center font-mono text-5xl text-accent/40 select-none"
                >
                  MA
                </div>
                <span className="sr-only">
                  Manas Acharya headshot placeholder
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
