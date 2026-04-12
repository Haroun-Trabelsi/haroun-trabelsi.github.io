import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import { SoundProvider } from "@/components/sound/sound-provider";


export const metadata: Metadata = {
  title: "Haroun Trabelsi — Software Engineer | Tunisia",
  description: "Software Engineer with 15+ months of professional experience building production AI platforms, enterprise SaaS tools, and scalable full-stack applications. Skilled in React, TypeScript, FastAPI, Node.js, and cloud infrastructure.",
  applicationName: "Haroun Trabelsi Portfolio",
  generator: "Next.js",
  icons: {
    icon: [{ url: "/placeholder-logo.png" }, { url: "/placeholder-logo.svg", type: "image/svg+xml" }],
    shortcut: ["/placeholder-logo.png"],
    apple: ["/placeholder-logo.png"],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Haroun Trabelsi — Software Engineer",
    description: "Software Engineer building production AI platforms and enterprise SaaS. Currently at Skaled working on JourneyAI.",
    images: [{ url: "/images/pixel-bg.jpg", width: 1200, height: 630, alt: "Portfolio background" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haroun Trabelsi — Software Engineer",
    description: "Software Engineer building production AI platforms with React, TypeScript, and FastAPI.",
    images: ["/images/pixel-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark`}>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {/* Skip link for keyboard users */}
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-[100] bg-primary text-primary-foreground px-3 py-2 rounded"
        >
          Skip to content
        </a>

        <SoundProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </SoundProvider>
      </body>
    </html>
  );
}
