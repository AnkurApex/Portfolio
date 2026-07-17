import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";
import { developerConfig } from "@/data/developer";

export const metadata: Metadata = {
  title: `${developerConfig.name} | ${developerConfig.title}`,
  description:
    `${developerConfig.name} | ${developerConfig.tagline}`,
  metadataBase: new URL("https://achyutkatiyar.com"), // default or can be customized

  // Basic metadata
  applicationName: `${developerConfig.name} Portfolio`,
  authors: [{ name: developerConfig.name }],
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
  ],

  openGraph: {
    type: "website",
    url: "https://achyutkatiyar.com",
    title: `${developerConfig.name} | ${developerConfig.title}`,
    description: developerConfig.tagline,
    siteName: developerConfig.name,
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${developerConfig.name} - Portfolio`,
      },
    ],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: { url: "/apple-touch-icon.png" },
  },

  alternates: {
    canonical: "https://achyutkatiyar.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
