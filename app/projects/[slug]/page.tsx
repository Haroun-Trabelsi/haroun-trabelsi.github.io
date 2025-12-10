import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { projects } from "@/data/portfolio";
import { cn, slugify } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import type { ProjectMedia } from "@/data/portfolio";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug ?? slugify(p.title),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const project = projects.find((p) => (p.slug ?? slugify(p.title)) === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const imageUrl = project.image || "/images/pixel-bg.jpg";

  return {
    title: `${project.title} • Project`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [{ url: imageUrl }],
    },
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { slug } = params;
  const project = projects.find((p) => (p.slug ?? slugify(p.title)) === slug);

  if (!project) return notFound();

  const imageUrl = project.image || "/images/pixel-bg.jpg";

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <div className="mb-6">
        <Link
          href="/#projects"
          className="font-pixel text-sm text-primary hover:underline underline-offset-4"
        >
          ← Back to Projects
        </Link>
          </div>

      <div className="border-2 border-primary/60 rounded-md overflow-hidden mb-8 bg-card">
        <AspectRatio ratio={16 / 9}>
          <div className="absolute inset-0">
            {project.overviewVideo ? (
              <video
                src={project.overviewVideo}
                className="absolute inset-0 h-full w-full object-cover opacity-60 saturate-75 contrast-125"
                autoPlay
                muted
                loop
                playsInline
                poster={imageUrl}
              />
            ) : (
              <Image
                src={imageUrl}
                alt={`${project.title} hero image`}
                fill
                className="object-cover saturate-75 contrast-125"
                sizes="100vw"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/70" />
            <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:8px_8px] mix-blend-overlay pointer-events-none" />
          </div>
        </AspectRatio>
      </div>

      <header className="mb-8">
        <div className="flex items-start justify-between gap-4">
          <h1 className="font-pixel text-3xl md:text-4xl text-primary">{project.title}</h1>
          <Badge variant="secondary" className="font-pixel text-xs">{project.status}</Badge>
        </div>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <div className="rounded-md border-2 border-primary/50 bg-card/60 p-4">
            <h2 className="font-pixel text-secondary text-lg mb-3">Overview</h2>
            <p className="text-sm text-muted-foreground">
            {project.description}
            </p>
          </div>

          <div className="rounded-md border-2 border-primary/50 bg-card/60 p-4">
            <h2 className="font-pixel text-secondary text-lg mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t} variant="outline" className="text-xs">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          {project.sections && project.sections.length > 0 ? (
            <div className="rounded-md border-2 border-primary/50 bg-card/60 p-4">
              <h2 className="font-pixel text-secondary text-lg mb-3">Showcase</h2>
              <div className="space-y-10">
                {project.sections.map((section, idx) => {
                  const mediaFirst = idx % 2 === 0;
                  const mediaOrder = mediaFirst ? "md:order-1" : "md:order-2";
                  const textOrder = mediaFirst ? "md:order-2" : "md:order-1";
                  const mediaLift = mediaFirst ? "md:-translate-y-1" : "md:translate-y-1";
                  const textLift = mediaFirst ? "md:translate-y-1" : "md:-translate-y-1";
                  return (
                    <div key={idx} className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                      <div
                        className={cn(
                          "order-1",
                          mediaOrder,
                          "relative rounded-md border-2 border-primary/50 bg-card overflow-hidden before:absolute before:inset-0 before:rounded-md before:-z-10 before:translate-y-1 before:border-2 before:border-primary/30 before:bg-primary/5",
                          "transition-transform duration-200 will-change-transform",
                          mediaLift
                        )}
                      >
                        <AspectRatio ratio={16 / 9}>
                          <div className="absolute inset-0">
                            {section.type === "video" ? (
                              <video
                                className="absolute inset-0 h-full w-full object-cover"
                                src={section.src}
                                controls
                                playsInline
                                poster={imageUrl}
                              />
                            ) : (
                              <Image
                                src={section.src}
                                alt={section.title || `${project.title} image ${idx + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 66vw"
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/40 pointer-events-none" />
                            <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:8px_8px] mix-blend-overlay pointer-events-none" />
                          </div>
                        </AspectRatio>
                      </div>

                      <div
                        className={cn(
                          "order-2",
                          textOrder,
                          "relative rounded-md border-2 border-primary/50 bg-card/60 p-4 md:p-6 before:absolute before:inset-0 before:rounded-md before:-z-10 before:translate-y-1 before:border-2 before:border-primary/30 before:bg-primary/5",
                          "transition-transform duration-200 will-change-transform",
                          textLift
                        )}
                      >
                        <h3 className="font-pixel text-primary text-base mb-2">
                          {section.title || "Details"}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {section.text || "Additional context about this part of the project will go here."}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>

        <aside className="lg:col-span-1 space-y-4">
          <div className="rounded-md border-2 border-primary/50 bg-card/60 p-4">
            <h3 className="font-pixel text-sm text-tertiary mb-2">Status</h3>
            <p className="text-sm">Currently: <span className="font-semibold">{project.status}</span></p>
          </div>
          <div className="rounded-md border-2 border-primary/50 bg-card/60 p-4">
            <h3 className="font-pixel text-sm text-tertiary mb-2">Share</h3>
            <p className="text-xs text-muted-foreground">
              Copy the URL to share this project's detail page.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
