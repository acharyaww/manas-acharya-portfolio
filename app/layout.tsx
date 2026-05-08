import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SITE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.shortName} | Data Science Student & Developer`,
    template: `%s | ${SITE.shortName}`,
  },
  description:
    "Portfolio of Manas Acharya — Data Science student at CU Boulder building AI-powered solutions. Featured projects: WhaleWatch SEC tracker, Zenith AI platform, JobFlow resume tailoring.",
  keywords: [
    "data science",
    "machine learning",
    "portfolio",
    "CU Boulder",
    "Python",
    "R",
    "Next.js",
    "Flask",
    "PostgreSQL",
    "AI",
    "Manas Acharya",
  ],
  authors: [{ name: SITE.fullName, url: SITE.url }],
  creator: SITE.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.shortName} | Data Science Portfolio`,
    description:
      "Data Science student building AI-powered solutions. WhaleWatch SEC tracker, Zenith AI platform, JobFlow resume tool, and more.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE.shortName} — Data Science Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.shortName} | Data Science Portfolio`,
    description: "Data Science student building AI-powered solutions",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.fullName,
  url: SITE.url,
  email: `mailto:${SITE.email}`,
  sameAs: [SITE.github, SITE.linkedin],
  jobTitle: SITE.jobTitle,
  worksFor: {
    "@type": "Organization",
    name: SITE.employer,
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: SITE.alumniOf,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lafayette",
    addressRegion: "CO",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to main content
        </a>
        <div id="main">{children}</div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
