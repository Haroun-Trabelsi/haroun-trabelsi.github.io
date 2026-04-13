import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { projects } from "@/data/portfolio";
import { slugify } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

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
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
      {/* Back link */}
      <div className="mb-6">
        <Link
          href="/#projects"
          className="font-pixel text-sm text-primary hover:underline underline-offset-4"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Hero image */}
      <div className="border-2 border-primary/60 rounded-md overflow-hidden mb-6 bg-card">
        <AspectRatio ratio={21 / 9}>
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

      {/* Header: title + status + live link */}
      <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <h1 className="font-pixel text-2xl md:text-3xl text-primary">{project.title}</h1>
          <Badge variant="secondary" className="font-pixel text-xs">{project.status}</Badge>
        </div>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-pixel text-xs bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/80 transition-colors inline-block w-fit"
          >
            VISIT LIVE →
          </a>
        )}
      </header>

      {/* Overview + Tech stack inline */}
      <div className="rounded-md border-2 border-primary/50 bg-card/60 p-5 md:p-6 mb-6">
        <p className="text-base text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="outline" className="text-sm px-2.5 py-0.5">
              {t}
            </Badge>
          ))}
        </div>
      </div>

      {/* Impact metrics */}
      {project.impacts && project.impacts.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {project.impacts.map((impact) => (
            <Badge key={impact} className="bg-accent/10 text-accent border border-accent/30 font-pixel text-[0.6rem] px-3 py-1">
              {impact}
            </Badge>
          ))}
        </div>
      )}

      {/* Showcase: compact grid */}
      {project.sections && project.sections.length > 0 && (
        <div>
          <h2 className="font-pixel text-secondary text-lg mb-4">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {project.sections.map((section, idx) => (
              <div
                key={idx}
                className="rounded-md border-2 border-primary/30 bg-card/60 overflow-hidden hover:border-primary/50 transition-colors"
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
                        alt={section.title || `${project.title} feature ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                  </div>
                </AspectRatio>
                <div className="p-4">
                  <h3 className="font-pixel text-primary text-sm mb-2">
                    {section.title || "Details"}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {section.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
