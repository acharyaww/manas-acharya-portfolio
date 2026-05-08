import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import {
  projects,
  getProjectBySlug,
  categoryLabels,
  type Project,
} from "@/lib/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/sections/Footer";

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

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} | Manas Acharya`,
    description: project.tagline,
  };
}

function getNextProject(current: Project): Project {
  const idx = projects.findIndex((p) => p.id === current.id);
  return projects[(idx + 1) % projects.length];
}

function SubHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
      {children}
    </h2>
  );
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const next = getNextProject(project);
  const ld = project.longDescription;

  return (
    <>
    <main className="mx-auto max-w-5xl px-6 md:px-10 py-10 md:py-16">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
      >
        <ArrowLeft size={16} aria-hidden />
        Back to Projects
      </Link>

      <header className="mt-8 flex flex-col gap-5">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          {categoryLabels[project.category]}
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-balance leading-[1.05]">
          {project.title}
        </h1>
        <p className="text-xl md:text-2xl text-foreground/85 max-w-3xl">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                size="md"
                rightIcon={<ExternalLink size={16} aria-hidden />}
              >
                View Live
              </Button>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                size="md"
                leftIcon={<GithubIcon size={16} />}
              >
                View GitHub
              </Button>
            </a>
          )}
        </div>
        {project.status && (
          <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted">
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse"
            />
            {project.status}
          </p>
        )}
      </header>

      <div className="mt-12 aspect-[16/8] w-full rounded-lg border border-border bg-surface relative overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} hero screenshot`}
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        ) : (
          <div aria-hidden className="absolute inset-0 grid place-items-center">
            <span className="font-mono text-2xl md:text-3xl text-accent/40 tracking-widest">
              {project.title.toUpperCase()}
            </span>
          </div>
        )}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-transparent"
        />
      </div>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {ld ? (
          <>
            <div className="flex flex-col gap-3">
              <SubHeader>Problem</SubHeader>
              <p className="text-foreground/85 leading-relaxed">{ld.problem}</p>
            </div>
            <div className="flex flex-col gap-3">
              <SubHeader>Solution</SubHeader>
              <p className="text-foreground/85 leading-relaxed">
                {ld.solution}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <SubHeader>Impact</SubHeader>
              <p className="text-foreground/85 leading-relaxed">{ld.impact}</p>
            </div>
          </>
        ) : (
          <div className="md:col-span-3 flex flex-col gap-3">
            <SubHeader>Overview</SubHeader>
            <p className="text-foreground/85 leading-relaxed text-lg max-w-3xl">
              {project.description}
            </p>
            {project.metrics && (
              <p className="font-mono text-sm text-foreground border-l-2 border-accent/60 pl-3 py-1 mt-2">
                {project.metrics}
              </p>
            )}
          </div>
        )}
      </section>

      {ld && project.metrics && (
        <section className="mt-16 rounded-lg border border-accent/30 bg-accent/5 p-6 md:p-8">
          <SubHeader>Key Result</SubHeader>
          <p className="mt-3 font-mono text-lg md:text-xl text-foreground">
            {project.metrics}
          </p>
        </section>
      )}

      <section className="mt-16">
        <SubHeader>Tech Stack</SubHeader>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </section>

      {project.screenshots && project.screenshots.length > 0 && (
        <section className="mt-16">
          <SubHeader>Screenshots</SubHeader>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.screenshots.map((src, i) => (
              <div
                key={src}
                className="aspect-[16/10] rounded-lg border border-border bg-surface relative overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <nav
        aria-label="Project navigation"
        className="mt-20 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between border-t border-border pt-8"
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
        >
          <ArrowLeft size={16} aria-hidden />
          View All Projects
        </Link>
        <Link
          href={`/projects/${next.slug}`}
          className="group inline-flex items-center gap-3"
        >
          <span className="text-right">
            <span className="block text-xs uppercase tracking-wider text-muted">
              Next Project
            </span>
            <span className="block text-base font-semibold group-hover:text-accent transition-colors">
              {next.title}
            </span>
          </span>
          <ArrowRight
            size={18}
            className="text-muted group-hover:text-accent transition-colors"
            aria-hidden
          />
        </Link>
      </nav>
    </main>
    <Footer />
    </>
  );
}
