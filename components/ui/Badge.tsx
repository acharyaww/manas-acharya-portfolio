import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type BadgeCategory =
  | "language"
  | "framework"
  | "database"
  | "tool"
  | "default";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  category?: BadgeCategory;
}

const categoryStyles: Record<BadgeCategory, string> = {
  language: "border-accent/40 text-accent bg-accent/8",
  framework: "border-stone-500/30 text-stone-700 bg-stone-100/60",
  database: "border-amber-800/25 text-amber-900 bg-amber-50/70",
  tool: "border-zinc-500/30 text-zinc-700 bg-zinc-100/60",
  default: "border-border text-muted bg-surface/60",
};

const LANGUAGES = new Set([
  "Python",
  "R",
  "SQL",
  "Excel",
  "TypeScript",
  "JavaScript",
]);

const FRAMEWORKS = new Set([
  "Next.js",
  "React",
  "React 19",
  "Flask",
  "FastAPI",
  "Vite",
  "Vercel",
  "Serverless Functions",
]);

const DATABASES = new Set(["PostgreSQL", "SQLite", "Pinecone"]);

const TOOLS = new Set([
  "Tableau",
  "Power BI",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "ARIMA",
  "TF-IDF",
  "Linear Algebra",
  "Claude API",
  "Claude Haiku 4.5",
  "SEC EDGAR API",
  "Railway",
]);

export function inferCategory(label: string): BadgeCategory {
  if (LANGUAGES.has(label)) return "language";
  if (FRAMEWORKS.has(label)) return "framework";
  if (DATABASES.has(label)) return "database";
  if (TOOLS.has(label)) return "tool";
  return "default";
}

export function Badge({
  category,
  className,
  children,
  ...props
}: BadgeProps) {
  const resolved =
    category ?? inferCategory(typeof children === "string" ? children : "");
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-md border",
        "text-xs font-mono font-medium tracking-tight",
        categoryStyles[resolved],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
