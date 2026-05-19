import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://siddhardha-ravi.github.io/grand-line-portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Siddhardha Ravi | AI-Integrated Data Engineer Portfolio",
  description:
    "Cinematic portfolio for Siddhardha Ravi, a Data Engineer and AI-integrated analytics developer building data pipelines, LLM evaluation systems, and interactive analytics products.",
  keywords: [
    "Siddhardha Ravi",
    "Data Engineer",
    "Data Analyst",
    "AI Analytics",
    "LLM Evaluation",
    "Python",
    "AWS",
    "React",
    "FastAPI",
    "Salesforce Developer"
  ],
  authors: [{ name: "Siddhardha Ravi" }],
  creator: "Siddhardha Ravi",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Siddhardha Ravi | Grand Line Developer Journey",
    description:
      "A premium cinematic portfolio spanning AI analytics, data engineering, research platforms, and Salesforce delivery.",
    siteName: "Siddhardha Ravi Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Siddhardha Ravi Grand Line Developer Journey"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhardha Ravi | AI-Integrated Data Engineer",
    description:
      "Data pipelines, AI-augmented analytics, LLM evaluation, and cinematic portfolio storytelling."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Siddhardha Ravi",
    jobTitle: "Data Engineer and AI-Integrated Analytics Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jersey City",
      addressRegion: "NJ",
      addressCountry: "US"
    },
    email: "mailto:Siddhardha.2611@gmail.com",
    knowsAbout: [
      "Data Engineering",
      "AI Analytics",
      "LLM Evaluation",
      "Python",
      "AWS",
      "React",
      "FastAPI",
      "Salesforce"
    ],
    alumniOf: [
      "Montclair State University",
      "Vel Tech University"
    ]
  };

  return (
    <html lang="en" className="dark">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
