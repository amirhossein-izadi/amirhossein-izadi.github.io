import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";

import { SITE } from "@/lib/constants";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.siteUrl),
  title: {
    default: SITE.name,
    template: `%s · ${SITE.name}`,
  },
  description:
    "Amirhossein Izadi - Computer Engineering graduate and AI researcher working on computer vision, medical imaging, and agentic systems. Research Assistant at RIML Lab, Sharif University of Technology.",
  keywords: [
    "Amirhossein Izadi",
    "Amir Izadi",
    "AI researcher",
    "machine learning",
    "deep learning",
    "computer vision",
    "medical imaging",
    "reinforcement learning",
    "large vision-language models",
    "generative AI",
    "Sharif University of Technology",
    "Shahid Beheshti University",
  ],
  authors: [{ name: SITE.name, url: SITE.siteUrl }],
  creator: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/favicon/favicon.ico" },
      { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/images/favicon/apple-touch-icon.png",
  },
  manifest: "/images/favicon/site.webmanifest",
  openGraph: {
    type: "profile",
    url: SITE.siteUrl,
    title: SITE.name,
    description: SITE.title,
    siteName: SITE.name,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.title,
    images: ["/og-image.png"],
  },
};

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  alternateName: "Amir Izadi",
  url: SITE.siteUrl,
  jobTitle: "AI Researcher & Computer Engineering Graduate",
  email: `mailto:${SITE.email}`,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Shahid Beheshti University",
  },
  affiliation: [
    { "@type": "Organization", name: "Shahid Beheshti University" },
    { "@type": "Organization", name: "RIML Lab, Sharif University of Technology" },
  ],
  sameAs: [SITE.github, SITE.linkedin, SITE.telegram],
  knowsAbout: [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Medical Imaging",
    "Reinforcement Learning",
    "Generative AI",
    "Large Language Models",
    "Multi-Modal AI",
  ],
};

const themeScript = `(function(){try{var stored=localStorage.getItem("theme");var dark=stored?stored==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",dark);}catch(e){}document.addEventListener("click",function(event){var node=event.target;while(node&&node!==document){if(node.hasAttribute&&node.hasAttribute("data-theme-toggle")){break}node=node.parentNode}if(!node||node===document){return}var root=document.documentElement;var next=root.classList.contains("dark")?"light":"dark";root.classList.toggle("dark",next==="dark");try{localStorage.setItem("theme",next)}catch(e){}});})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
