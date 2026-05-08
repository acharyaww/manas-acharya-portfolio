"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";
import { Card, CardBody } from "./Card";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.69-3.87-1.35-3.87-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39.99 0 1.98.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.41-5.27 5.7.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
  size?: "default" | "feature";
}

export function ProjectCard({ project, size = "default" }: ProjectCardProps) {
  const isFeature = size === "feature";
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(isFeature && "md:col-span-2")}
    >
      <Card
        interactive
        className={cn(
          "group h-full flex flex-col relative",
          isFeature && "md:p-2",
        )}
      >
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`View details for ${project.title}`}
          className="absolute inset-0 z-10 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
        <div
          className={cn(
            "relative overflow-hidden rounded-md bg-background/40 border border-border/60",
            isFeature ? "aspect-[16/8]" : "aspect-[16/9]",
          )}
          aria-hidden
        >
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-mono text-xl text-accent/30 tracking-widest">
              {project.title.toUpperCase()}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardBody className="flex flex-col gap-4 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3
                className={cn(
                  "font-bold tracking-tight group-hover:text-accent transition-colors",
                  isFeature ? "text-2xl md:text-3xl" : "text-xl",
                )}
              >
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-accent/90">{project.tagline}</p>
            </div>
            <ArrowUpRight
              className="shrink-0 text-muted group-hover:text-accent transition-colors"
              size={20}
              aria-hidden
            />
          </div>

          <p className="text-sm text-muted leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {project.metrics && (
            <p className="font-mono text-xs text-foreground/80 border-l-2 border-accent/60 pl-3 py-1">
              {project.metrics}
            </p>
          )}

          {project.status && (
            <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted">
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse"
              />
              {project.status}
            </p>
          )}

          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {project.techStack.slice(0, isFeature ? 6 : 4).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
            {project.techStack.length > (isFeature ? 6 : 4) && (
              <Badge category="default">
                +{project.techStack.length - (isFeature ? 6 : 4)}
              </Badge>
            )}
          </div>

          {(project.liveUrl || project.githubUrl) && (
            <div className="flex items-center gap-3 pt-3 border-t border-border/60">
              <span className="text-xs text-muted">Open</span>
              <span className="ml-auto relative z-20 flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live site (new tab)`}
                    className="text-muted hover:text-accent transition-colors p-1 -m-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} aria-hidden />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} GitHub repo (new tab)`}
                    className="text-muted hover:text-accent transition-colors p-1 -m-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GithubIcon size={16} />
                  </a>
                )}
              </span>
            </div>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
}
