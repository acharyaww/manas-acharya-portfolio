"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  projects as allProjects,
  categoryLabels,
  type ProjectCategory,
} from "@/lib/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

type Filter = ProjectCategory | "all";

const FILTER_ORDER: Filter[] = ["all", "production", "ml-data"];

export function ProjectsShowcase() {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(() => {
    const c: Record<Filter, number> = {
      all: allProjects.length,
      production: 0,
      fullstack: 0,
      "ml-data": 0,
    };
    for (const p of allProjects) c[p.category] += 1;
    return c;
  }, []);

  const visible = useMemo(() => {
    const list =
      filter === "all"
        ? allProjects
        : allProjects.filter((p) => p.category === filter);
    return [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [filter]);

  return (
    <section
      id="projects"
      className="mx-auto max-w-container px-6 md:px-10 py-20 md:py-32"
    >
      <SectionHeader
        eyebrow="Selected Work"
        title="Featured Projects"
        description="A mix of production systems, machine-learning research, and full-stack tools — built across coursework, internships, and side projects."
      />

      <div
        role="group"
        aria-label="Filter projects by category"
        className="mt-10 flex flex-wrap gap-2"
      >
        {FILTER_ORDER.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              aria-label={`Show ${categoryLabels[f]} projects (${counts[f]})`}
              onClick={() => setFilter(f)}
              className={cn(
                "inline-flex items-center gap-2 rounded-md border px-3.5 py-1.5",
                "text-sm font-medium transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                active
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border bg-surface text-muted hover:text-foreground hover:border-accent/40",
              )}
            >
              {categoryLabels[f]}
              <span className="font-mono text-xs opacity-70">
                {counts[f]}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              size={p.featured && filter === "all" ? "feature" : "default"}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="mt-12 text-center text-muted">
          No projects in this category yet.
        </p>
      )}
    </section>
  );
}
