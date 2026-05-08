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
  language: "border-accent/40 text-accent bg-accent/5",
  framework: "border-blue-400/30 text-blue-300 bg-blue-400/5",
  database: "border-emerald-400/30 text-emerald-300 bg-emerald-400/5",
  tool: "border-purple-400/30 text-purple-300 bg-purple-400/5",
  default: "border-border text-muted bg-surface",
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
