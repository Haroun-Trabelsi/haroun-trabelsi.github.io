import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import { SoundProvider } from "@/components/sound/sound-provider";


export const metadata: Metadata = {
  title: "Haroun Trabelsi — Junior Software Engineer | Tunisia",
  description: "Adaptable and self-driven Junior Software Engineer skilled in React, Node.js, Spring Boot, and CI/CD. Building scalable web apps and impactful software solutions.",
  applicationName: "Haroun Trabelsi Portfolio",
  generator: "Next.js",
  icons: {
    icon: [{ url: "/placeholder-logo.png" }, { url: "/placeholder-logo.svg", type: "image/svg+xml" }],
    shortcut: ["/placeholder-logo.png"],
    apple: ["/placeholder-logo.png"],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Haroun Trabelsi — Junior Software Engineer",
    description: "Skilled in building scalable web applications, managing databases, and leading team projects. Passionate about impactful software and clean architecture.",
    images: [{ url: "/images/pixel-bg.jpg", width: 1200, height: 630, alt: "Portfolio background" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haroun Trabelsi — Junior Software Engineer",
    description: "Building scalable web apps with React, Node.js, and modern technologies.",
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
