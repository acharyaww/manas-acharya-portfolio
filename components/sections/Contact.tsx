"use client";

import { motion, type Variants } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

function GithubIcon({ size = 20 }: { size?: number }) {
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

function LinkedinIcon({ size = 20 }: { size?: number }) {
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

interface ContactMethod {
  label: string;
  detail: string;
  href: string | null;
  icon: React.ReactNode;
  external: boolean;
}

const METHODS: ContactMethod[] = [
  {
    label: "Email",
    detail: "manasacharya2004@gmail.com",
    href: "mailto:manasacharya2004@gmail.com",
    icon: <Mail size={20} aria-hidden />,
    external: false,
  },
  {
    label: "LinkedIn",
    detail: "manas-acharya-969702379",
    href: "https://linkedin.com/in/manas-acharya-969702379",
    icon: <LinkedinIcon size={20} />,
    external: true,
  },
  {
    label: "GitHub",
    detail: "acharyaww",
    href: "https://github.com/acharyaww",
    icon: <GithubIcon size={20} />,
    external: true,
  },
  {
    label: "Location",
    detail: "Lafayette, Colorado",
    href: null,
    icon: <MapPin size={20} aria-hidden />,
    external: false,
  },
];

const grid: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-32"
    >
      <SectionHeader
        eyebrow="Contact"
        title={<>Let&apos;s Connect</>}
        description="Open to data science internship opportunities, research collaborations, and interesting problems."
        align="center"
      />

      <motion.ul
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {METHODS.map((m) => {
          const inner = (
            <>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border bg-background/50 text-accent group-hover:border-accent/60 transition-colors">
                {m.icon}
              </span>
              <span className="flex flex-col min-w-0">
                <span className="text-xs uppercase tracking-wider text-muted">
                  {m.label}
                </span>
                <span className="font-mono text-sm md:text-base text-foreground group-hover:text-accent truncate transition-colors">
                  {m.detail}
                </span>
              </span>
            </>
          );
          return (
            <motion.li key={m.label} variants={item}>
              {m.href ? (
                <a
                  href={m.href}
                  target={m.external ? "_blank" : undefined}
                  rel={m.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-lg border border-border bg-surface p-4 hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {inner}
                </a>
              ) : (
                <div className="flex items-center gap-4 rounded-lg border border-border bg-surface/60 p-4">
                  {inner}
                </div>
              )}
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
