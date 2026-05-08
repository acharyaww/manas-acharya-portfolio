export type ProjectCategory = "production" | "ml-data" | "fullstack";

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  metrics?: string;
  status?: string;
  featured: boolean;
  screenshots?: string[];
  longDescription?: {
    problem: string;
    solution: string;
    impact: string;
  };
}

export const projects: Project[] = [
  {
    id: "whalewatch",
    slug: "whalewatch",
    title: "WhaleWatch",
    tagline: "Early detection system for stocks about to move",
    description:
      "Real-time SEC filing tracker analyzing 13D/13G, Form 4, and 8-K filings to detect pre-move stock signals before public awareness.",
    techStack: ["Python", "Flask", "PostgreSQL", "SEC EDGAR API", "Railway"],
    category: "production",
    liveUrl: "https://alert-joy-production-c92c.up.railway.app",
    metrics: "Tracks filings from 500+ institutions",
    status: "v2 backtest engine in progress",
    featured: true,
    longDescription: {
      problem:
        "Investors often miss early signals before stocks make significant moves. By the time news reaches mainstream channels, the opportunity has passed.",
      solution:
        "Built a real-time SEC filing tracker that monitors 13D/13G, Form 4, and 8-K filings via SEC EDGAR API. Flask backend processes filings, PostgreSQL stores data, automated alerts notify users of significant events.",
      impact:
        "Successfully identified VCX/Fundrise 8-K filing two weeks before dramatic price run. Now tracks filings from 500+ institutions in real-time.",
    },
  },
  {
    id: "zenith",
    slug: "zenith",
    title: "Zenith",
    tagline: "AI-powered platform for consistent personal growth",
    description:
      "Motivational platform combining ancient wisdom with modern AI, featuring daily personalized coaching and progress tracking.",
    techStack: ["Next.js", "FastAPI", "PostgreSQL", "Claude API", "Pinecone"],
    category: "production",
    liveUrl: "https://zenith-motive.com",
    metrics: "Personalized coaching from curated wisdom database",
    featured: true,
    longDescription: {
      problem:
        "People struggle with consistency in personal growth and often lack access to timeless wisdom in an accessible format.",
      solution:
        "Developed AI-powered motivational platform using Next.js frontend with FastAPI backend. Implemented RAG pipeline with Pinecone for ancient wisdom retrieval, Claude API for personalized coaching, PostgreSQL for user progress tracking.",
      impact:
        "Platform delivers daily personalized wisdom with streak tracking and progress visualization. Starfield background evolves with user growth, creating unique motivational experience.",
    },
  },
  {
    id: "jobflow",
    slug: "jobflow",
    title: "JobFlow",
    tagline: "AI-powered resume tailoring for every application",
    description:
      "Intelligent job application tool with 8-step AI pipeline that generates ATS-optimized resumes and personalized cover letters from any job posting URL.",
    techStack: [
      "React 19",
      "Vite",
      "Claude Haiku 4.5",
      "Vercel",
      "Serverless Functions",
    ],
    category: "production",
    liveUrl: "https://jobflow-lime.vercel.app",
    githubUrl: "https://github.com/acharyaww/jobflow",
    metrics:
      "8-step pipeline with keyword matching, relevance scoring, and ATS optimization",
    featured: true,
    longDescription: {
      problem:
        "Job seekers waste hours manually tailoring resumes for each application, often missing critical ATS keywords and struggling with inconsistent formatting.",
      solution:
        "Built intelligent application system with React 19 / Vite frontend and Vercel serverless functions. Implemented 8-step AI pipeline using Claude Haiku 4.5: analyzes job posting, parses experience, matches skills with synonym handling, rewrites bullets to mirror job language, optimizes keyword placement, and scores final output. Server-side API proxy ensures security.",
      impact:
        "Generates ATS-optimized one-page resume + personalized cover letter in ~30 seconds. Tracks applications with status management and Gmail integration. Auto-deploys from GitHub, uses localStorage for privacy (no database).",
    },
  },
  {
    id: "hilton-invoice-finder",
    slug: "hilton-invoice-finder",
    title: "Hilton Invoice Code Finder",
    tagline: "Intelligent invoice classification system",
    description:
      "Pro bono NLP solution using TF-IDF and reinforcement learning to automate invoice code assignment for corporate operations.",
    techStack: ["Python", "TF-IDF", "SQLite", "Scikit-learn"],
    category: "production",
    liveUrl: "https://majestic-fairy-906906.netlify.app/",
    featured: false,
  },
  {
    id: "retail-sales-forecasting",
    slug: "retail-sales-forecasting",
    title: "Time-Series Retail Sales Forecasting",
    tagline: "Ensemble forecasting for retail optimization",
    description:
      "Time-series forecasting using ARIMA, Random Forest, and Gradient Boosting on 365 days of sales data.",
    techStack: ["Python", "ARIMA", "Scikit-learn", "Pandas"],
    category: "ml-data",
    metrics: "24% improvement over baseline",
    featured: false,
  },
  {
    id: "la-liga-ranking",
    slug: "la-liga-ranking",
    title: "La Liga Ranking",
    tagline: "Mathematical team ranking system",
    description:
      "Applied Perron-Frobenius theorem to analyze 760 La Liga game records for team ranking (team project).",
    techStack: ["Python", "NumPy", "Linear Algebra"],
    category: "ml-data",
    featured: false,
  },
  {
    id: "bike-sharing-patterns",
    slug: "bike-sharing-patterns",
    title: "Bike-Sharing Usage Patterns",
    tagline: "Classification model for usage prediction",
    description:
      "Weekday classification using Logistic Regression, Bagging, and SVM for bike-sharing demand prediction.",
    techStack: ["Python", "Scikit-learn", "Pandas"],
    category: "ml-data",
    metrics: "0.0487 misclassification rate with Bagging",
    featured: false,
  },
  {
    id: "heart-disease-prediction",
    slug: "heart-disease-prediction",
    title: "Heart Disease Prediction",
    tagline: "Clinical prediction model",
    description:
      "Cardiovascular risk assessment on the UCI Heart Disease dataset. Team project with Jenisha Shrestha; compared multiple classifiers, with Logistic Regression emerging as the most promising.",
    techStack: ["Python", "Scikit-learn", "Pandas"],
    category: "ml-data",
    metrics: "0.152 misclassification rate (Logistic Regression)",
    featured: false,
  },
];

export const categoryLabels: Record<ProjectCategory | "all", string> = {
  all: "All",
  production: "Production",
  "ml-data": "ML & Data Science",
  fullstack: "Full-Stack",
};

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
