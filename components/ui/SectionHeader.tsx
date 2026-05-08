"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        isCenter ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-balance">
        {title}
      </h2>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "block h-px bg-accent origin-left",
          isCenter ? "w-16 origin-center" : "w-12",
        )}
        aria-hidden
      />
      {description && (
        <p className="mt-2 max-w-2xl text-base md:text-lg text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
