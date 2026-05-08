import type { Metadata } from "next";
import { Download } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Resume | Manas Acharya",
  description:
    "Manas Acharya — Data Science student at CU Boulder. Experience, education, certifications, and skills.",
};

interface Position {
  title: string;
  org: string;
  dates: string;
  bullets: string[];
}

const EXPERIENCE: Position[] = [
  {
    title: "Service Writer / Beginner Technician",
    org: "Walmart Auto Care Center",
    dates: "2020 — Present (~5 years)",
    bullets: [
      "Diagnosed vehicle issues and communicated technical solutions to customers.",
      "Managed service documentation and customer records.",
      "Provided technical support and recommendations.",
    ],
  },
  {
    title: "Member Engagement & Event Co-coordinator",
    org: "Nepalese Student Association, CU Boulder",
    dates: "August 2023 — May 2024",
    bullets: [
      "Led event planning and execution for a 700+ attendee event.",
      "Applied data science for club demographics analysis and member segmentation.",
      "Coordinated cross-cultural programming.",
    ],
  },
];

const COURSEWORK = [
  "Time Series Analysis",
  "Data Modeling",
  "Machine Learning",
  "Deep Learning",
  "Python for Statistics",
  "Statistical Modeling",
];

const CERTIFICATIONS_DONE = [
  {
    label: "IBM SkillsBuild Enterprise Design Thinking Practitioner",
    date: "December 2025",
  },
];

const CERTIFICATIONS_IN_PROGRESS = [
  "Data Science Certification",
  "Advanced SQL Skills (self-study)",
];

const SKILLS_PROFICIENT = ["Python", "R", "Excel"];
const SKILLS_INTERMEDIATE = ["SQL", "Tableau", "Power BI"];
const SKILLS_FRAMEWORKS = [
  "Next.js",
  "Flask",
  "FastAPI",
  "React",
  "Scikit-learn",
  "Claude API",
  "Pinecone",
  "PostgreSQL",
  "SQLite",
];

function TimelineItem({
  position,
  isLast,
}: {
  position: Position;
  isLast: boolean;
}) {
  return (
    <li className="relative pl-8 pb-10 last:pb-0">
      {!isLast && (
        <span
          aria-hidden
          className="absolute left-[7px] top-3 bottom-0 w-px bg-border"
        />
      )}
      <span
        aria-hidden
        className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-lg md:text-xl font-semibold">
          {position.title}{" "}
          <span className="text-muted font-normal">| {position.org}</span>
        </h3>
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          {position.dates}
        </p>
        <ul className="mt-2 flex flex-col gap-1.5 text-foreground/85 leading-relaxed">
          {position.bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span aria-hidden className="text-accent shrink-0">
                ›
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  return (
    <>
    <main className="mx-auto max-w-4xl px-6 md:px-10 py-16 md:py-24 print:py-0">
      <h1 className="sr-only">Resume — Manas Raman Acharya</h1>
      <header className="flex flex-col gap-4 print:gap-2">
        <SectionHeader
          eyebrow="Resume"
          title="Manas Raman Acharya"
          description="Data Science student at the University of Colorado Boulder. Download the PDF or read the interactive version below."
        />
        <div className="print:hidden flex flex-wrap gap-3 mt-2">
          <a href="/resume.pdf" download>
            <Button
              variant="primary"
              size="md"
              leftIcon={<Download size={16} aria-hidden />}
            >
              Download PDF Resume
            </Button>
          </a>
        </div>
      </header>

      <section className="mt-14">
        <SectionTitle>Experience</SectionTitle>
        <ol className="mt-6">
          {EXPERIENCE.map((p, i) => (
            <TimelineItem
              key={p.title}
              position={p}
              isLast={i === EXPERIENCE.length - 1}
            />
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <SectionTitle>Education</SectionTitle>
        <div className="mt-6 flex flex-col gap-2">
          <h3 className="text-lg md:text-xl font-semibold">
            Bachelor of Arts in Data Science
          </h3>
          <p className="text-foreground/85">University of Colorado Boulder</p>
          <p className="font-mono text-xs uppercase tracking-wider text-accent">
            August 2020 — May 2027 (Expected)
          </p>
          <div className="mt-3">
            <h4 className="text-sm font-medium text-foreground/80 mb-2">
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {COURSEWORK.map((c) => (
                <Badge key={c} category="default">
                  {c}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle>Certifications &amp; Continuous Learning</SectionTitle>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-border bg-surface/60 p-5">
            <h4 className="text-sm font-semibold text-accent mb-3">
              Completed
            </h4>
            <ul className="flex flex-col gap-2">
              {CERTIFICATIONS_DONE.map((c) => (
                <li key={c.label} className="flex flex-col">
                  <span className="text-foreground">✓ {c.label}</span>
                  <span className="font-mono text-xs text-muted">
                    {c.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-surface/60 p-5">
            <h4 className="text-sm font-semibold text-accent mb-3">
              In Progress
            </h4>
            <ul className="flex flex-col gap-2 text-foreground/85">
              {CERTIFICATIONS_IN_PROGRESS.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse"
                  />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle>Skills</SectionTitle>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border border-border bg-surface/60 p-5">
            <h4 className="text-sm font-semibold text-foreground/80 mb-3">
              Proficient
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {SKILLS_PROFICIENT.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-border bg-surface/60 p-5">
            <h4 className="text-sm font-semibold text-foreground/80 mb-3">
              Intermediate (advancing)
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {SKILLS_INTERMEDIATE.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-border bg-surface/60 p-5">
            <h4 className="text-sm font-semibold text-foreground/80 mb-3">
              Frameworks &amp; Tools
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {SKILLS_FRAMEWORKS.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle>Languages</SectionTitle>
        <p className="mt-4 text-foreground/85">
          Nepali, Hindi, English — fluent.
        </p>
      </section>
    </main>
    <Footer />
    </>
  );
}
