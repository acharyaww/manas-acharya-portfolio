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
    id: "image-generation",
    slug: "image-generation",
    title: "DALL-E + SAM Image Editing",
    tagline: "Generative pipeline: text → image → mask → inpaint",
    description:
      "Three-stage generative-image pipeline combining OpenAI DALL-E 3 for generation, Meta's Segment Anything Model for region selection, and DALL-E's edit endpoint for mask-based inpainting. Demonstrated on a fashion design concept.",
    techStack: ["Python", "PyTorch", "OpenAI API", "segment-anything", "OpenCV"],
    category: "ml-data",
    githubUrl: "https://github.com/acharyaww/image-generation",
    metrics: "1024×1024 generation + SAM segmentation + 3-variant inpainting",
    featured: false,
  },
  {
    id: "retail-sales-forecasting",
    slug: "retail-sales-forecasting",
    title: "Time-Series Retail Sales Forecasting",
    tagline: "Global-pool ensemble for daily retail sales",
    description:
      "End-to-end forecasting pipeline (validation → EDA → features → baselines → ML → ensemble → report) on a year of daily retail sales for a small business client. Implements the global-pool approach from Montero-Manso & Hyndman (2021).",
    techStack: ["Python", "Scikit-learn", "Pandas", "ARIMA", "statsmodels"],
    category: "ml-data",
    githubUrl: "https://github.com/acharyaww/retail-sales-forecasting",
    metrics: "24% RMSE improvement over seasonal-naive baseline",
    featured: false,
  },
  {
    id: "la-liga-ranking",
    slug: "la-liga-ranking",
    title: "La Liga Ranking",
    tagline: "Team ranking from match-result averaging",
    description:
      "Ranked all 20 teams of the 2021-22 La Liga season from 760 match records. Encoded wins/draws/losses, pivoted into a team-vs-team matrix, and computed per-opponent average performance. Team project.",
    techStack: ["Python", "pandas", "NumPy"],
    category: "ml-data",
    githubUrl: "https://github.com/acharyaww/la-liga-ranking",
    metrics: "Top 4 within 1 position of actual final standings",
    featured: false,
  },
  {
    id: "bike-sharing-patterns",
    slug: "bike-sharing-patterns",
    title: "Bike-Sharing Usage Patterns",
    tagline: "Classification model for weekday demand",
    description:
      "Weekday demand classification on Seoul's hourly bike-share data, comparing Logistic Regression, Bagging (Random Forest), and SVM. Bagging won.",
    techStack: ["R", "caret", "randomForest", "e1071"],
    category: "ml-data",
    githubUrl: "https://github.com/acharyaww/bike-sharing-patterns",
    metrics: "4.87% misclassification rate (Bagging)",
    featured: false,
  },
  {
    id: "heart-disease-prediction",
    slug: "heart-disease-prediction",
    title: "Heart Disease Prediction",
    tagline: "Clinical prediction model",
    description:
      "Cardiovascular risk assessment on the UCI Heart Disease dataset. Team project with Jenisha Shrestha; compared multiple classifiers, with Logistic Regression emerging as the most promising.",
    techStack: ["R", "caret", "randomForest", "leaps"],
    category: "ml-data",
    githubUrl: "https://github.com/acharyaww/heart-disease-prediction",
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
