import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ravelyn Technology An Inference Compiler for Agent Workloads",
  description:
    "Ravelyn Technology profiles your agent traffic, finds the calls that repeat, and compiles those hot paths down to small models trained on your own data. Pay only a share of verified savings.",
  keywords: [
    "inference compiler",
    "agent workloads",
    "LLM cost reduction",
    "AI inference optimization",
    "agent traffic profiling",
    "model distillation",
    "AI cost savings",
    "Ravelyn Technology",
  ],
  authors: [{ name: "Ravelyn Technology, Inc." }],
  creator: "Ravelyn Technology, Inc.",
  publisher: "Ravelyn Technology, Inc.",
  metadataBase: new URL("https://www.ravelyn.technology"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ravelyn.technology",
    siteName: "Ravelyn Technology",
    title: "Ravelyn Technology An Inference Compiler for Agent Workloads",
    description:
      "Point your agent at one endpoint. Ravelyn profiles every trajectory, finds the call shapes that repeat, and compiles those hot paths down to small models trained on your own traffic.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ravelyn Technology An Inference Compiler for Agent Workloads",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravelyn Technology An Inference Compiler for Agent Workloads",
    description:
      "Point your agent at one endpoint. Ravelyn profiles every trajectory and compiles hot paths into small specialist models trained on your own traffic.",
    images: ["/og-image.jpg"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ravelyn Technology",
  url: "https://ravelyn.technology",
  description:
    "An inference compiler for agent workloads. Ravelyn profiles your agent traffic, finds the calls that repeat, and compiles those hot paths down to small models trained on your own data.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "profile@ravelyn.technology",
    contactType: "sales",
  },
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
