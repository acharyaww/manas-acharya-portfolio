"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 11.01-4.12 2.06 2.06 0 01-.01 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

type Proficiency = "proficient" | "intermediate" | "learning";

interface TechItem {
  label: string;
  proficiency?: Proficiency;
}

interface TechGroup {
  heading: string;
  items: TechItem[];
}

const TECH_GROUPS: TechGroup[] = [
  {
    heading: "Languages",
    items: [
      { label: "Python", proficiency: "proficient" },
      { label: "R", proficiency: "proficient" },
      { label: "SQL", proficiency: "intermediate" },
      { label: "Excel", proficiency: "proficient" },
    ],
  },
  {
    heading: "Frameworks",
    items: [
      { label: "Next.js" },
      { label: "Flask" },
      { label: "FastAPI" },
      { label: "React" },
    ],
  },
  {
    heading: "Data Tools",
    items: [
      { label: "Tableau", proficiency: "intermediate" },
      { label: "Power BI", proficiency: "intermediate" },
    ],
  },
  {
    heading: "ML / AI",
    items: [
      { label: "Scikit-learn" },
      { label: "Claude API" },
      { label: "Pinecone" },
    ],
  },
  {
    heading: "Databases",
    items: [{ label: "PostgreSQL" }, { label: "SQLite" }],
  },
];

const proficiencyStyles: Record<Proficiency, string> = {
  proficient: "text-foreground",
  intermediate: "text-foreground/85",
  learning: "text-muted",
};

const proficiencyLabel: Record<Proficiency, string> = {
  proficient: "Proficient",
  intermediate: "Intermediate",
  learning: "Learning",
};

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

const CONTACT_LINKS = [
  {
    label: "manasacharya2004@gmail.com",
    href: "mailto:manasacharya2004@gmail.com",
    icon: <Mail size={16} aria-hidden />,
    external: false,
  },
  {
    label: "github.com/acharyaww",
    href: "https://github.com/acharyaww",
    icon: <GithubIcon size={16} />,
    external: true,
  },
  {
    label: "linkedin.com/in/manas-acharya-969702379",
    href: "https://linkedin.com/in/manas-acharya-969702379",
    icon: <LinkedinIcon size={16} />,
    external: true,
  },
  {
    label: "Lafayette, CO",
    href: null,
    icon: <MapPin size={16} aria-hidden />,
    external: false,
  },
];

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-32"
    >
      <SectionHeader
        eyebrow="About"
        title="Combining technical depth with customer-facing experience."
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
        <motion.aside
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="md:col-span-5 flex flex-col gap-6"
        >
          <div className="relative w-full max-w-[400px] mx-auto md:mx-0">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-lg bg-accent/10 blur-2xl"
            />
            <div className="relative aspect-square w-full rounded-lg overflow-hidden border-2 border-accent/30 bg-surface shadow-card">
              {SITE.profileImage ? (
                <Image
                  src={SITE.profileImage}
                  alt="Manas Acharya, Data Science student at CU Boulder"
                  fill
                  sizes="(min-width: 768px) 400px, 100vw"
                  className="object-cover"
                />
              ) : (
                <>
                  <div
                    aria-hidden
                    className="absolute inset-0 grid place-items-center font-serif text-8xl text-accent/40 select-none"
                  >
                    MA
                  </div>
                  <span className="sr-only">
                    Manas Acharya headshot placeholder
                  </span>
                </>
              )}
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-2 text-sm" aria-label="Contact">
            {CONTACT_LINKS.map((link) => {
              const content = (
                <span className="inline-flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                  <span className="text-accent">{link.icon}</span>
                  <span className="truncate">{link.label}</span>
                </span>
              );
              return (
                <li key={link.label}>
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="block py-1"
                    >
                      {content}
                    </a>
                  ) : (
                    <span className="block py-1 text-muted">
                      <span className="inline-flex items-center gap-3">
                        <span className="text-accent">{link.icon}</span>
                        <span>{link.label}</span>
                      </span>
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </motion.aside>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1 }}
          className="md:col-span-7 flex flex-col gap-6 text-foreground/90 leading-relaxed"
        >
          <p>
            I&apos;m a Data Science student at the University of Colorado Boulder
            (graduating May 2027), currently working as a Data Science Intern at
            PCH Tech Solutions on the Gadi AI ride service platform. With nearly
            five years of experience as a Service Writer at Walmart Auto Care
            Center, I bring a unique perspective combining technical expertise
            with customer-facing problem solving.
          </p>
          <p>
            My work focuses on machine learning, statistical modeling, and
            full-stack development. I&apos;m currently advancing my SQL skills
            and pursuing an additional data science certification to complement
            my IBM SkillsBuild Enterprise Design Thinking Practitioner
            certification. Coursework includes Time Series Analysis, Machine
            Learning, Deep Learning, and Statistical Modeling.
          </p>
          <p>
            As a fluent speaker of Nepali, Hindi, and English, I bring cultural
            awareness and diverse perspectives to my work. Beyond data science,
            I&apos;m passionate about soccer, basketball, hockey, running, and
            reading. I previously served as Member Engagement &amp; Event
            Co-coordinator for the Nepalese Student Association at CU Boulder,
            leading an event with 700+ attendees.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-16"
      >
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Tech Stack
        </h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TECH_GROUPS.map((group) => (
            <div
              key={group.heading}
              className="rounded-lg border border-border bg-surface/60 p-5"
            >
              <h4 className="text-sm font-semibold text-foreground/80 mb-3">
                {group.heading}
              </h4>
              <ul className="flex flex-col gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item.label}
                    className={cn(
                      "flex items-center justify-between font-mono text-sm",
                      proficiencyStyles[item.proficiency ?? "proficient"],
                    )}
                  >
                    <span>{item.label}</span>
                    {item.proficiency && (
                      <span className="text-[10px] uppercase tracking-wider text-muted">
                        {proficiencyLabel[item.proficiency]}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
