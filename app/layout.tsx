import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import { SoundProvider } from "@/components/sound/sound-provider";


export const metadata: Metadata = {
  title: "Haroun Trabelsi — Full‑Stack Developer",
  description: "Modern apps with a retro soul. React, Next.js, Node.js, TypeScript.",
  applicationName: "Haroun Trabelsi Portfolio",
  generator: "v0.app",
  icons: {
    icon: [{ url: "/placeholder-logo.png" }, { url: "/placeholder-logo.svg", type: "image/svg+xml" }],
    shortcut: ["/placeholder-logo.png"],
    apple: ["/placeholder-logo.png"],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Haroun Trabelsi — Full‑Stack Developer",
    description: "Modern apps with a retro soul. React, Next.js, Node.js, TypeScript.",
    images: [{ url: "/images/pixel-bg.jpg", width: 1200, height: 630, alt: "Retro pixel background" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haroun Trabelsi — Full‑Stack Developer",
    description: "Modern apps with a retro soul. React, Next.js, Node.js, TypeScript.",
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
