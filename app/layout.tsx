import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DSA for FAANG Companies | Your Path to Tech Giants",
  description:
    "Master Data Structures and Algorithms to ace interviews at Facebook, Amazon, Apple, Netflix, Google, and other top tech companies. Comprehensive guides, practice problems, and interview tips.",
  keywords:
    "DSA, Data Structures, Algorithms, FAANG, Facebook, Amazon, Apple, Netflix, Google, Tech Interviews, Coding Interviews, Programming",
  authors: [{ name: "animesh chaudhri" }],
  openGraph: {
    title: "DSA for FAANG Companies | Your Path to Tech Giants",
    description:
      "Master Data Structures and Algorithms to ace interviews at top tech companies.",
    url: "https://www.animesh.us/",
    siteName: "Your Website Name",

    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DSA for FAANG Companies | Your Path to Tech Giants",
    description:
      "Master Data Structures and Algorithms to ace interviews at top tech companies.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
      }}
    >
      <html lang="en">
        <head>
          <link rel="canonical" href="https://your-website-url.com" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#4a0e78" />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
