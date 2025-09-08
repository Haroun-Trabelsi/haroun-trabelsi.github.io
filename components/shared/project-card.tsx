"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { slugify } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectCard({
  title,
  description,
  tech,
  status,
  image,
  slug,
  thumbnailPoster,
  thumbnailVideo,
}: {
  title: string;
  description: string;
  tech: string[];
  status: string;
  image?: string;
  slug?: string;
  thumbnailPoster?: string;
  thumbnailVideo?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const computedSlug = slug ? slug : slugify(title);
  const poster = thumbnailPoster || image || "/images/pixel-bg.jpg";

  return (
    <Link
      href={`/projects/${computedSlug}`}
      className="h-full block group"
      onMouseEnter={() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {});
        }
      }}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <Card className="h-full flex flex-col border-2 border-primary bg-card/80 hover:bg-card transition-colors duration-200">
        <div className="border-b border-primary/30">
          <AspectRatio ratio={16 / 9}>
            <div className="absolute inset-0">
              {/* Poster image (fades out on hover if video exists) */}
              <Image
                src={poster}
                alt={`${title} thumbnail`}
                fill
                className={`object-cover saturate-75 contrast-125 transition-opacity duration-300 ${thumbnailVideo ? "opacity-100 group-hover:opacity-0" : "opacity-60"}`}
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={false}
              />
              {/* Hover video preview */}
              {thumbnailVideo ? (
                <video
                  ref={videoRef}
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  src={thumbnailVideo}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={poster}
                />
              ) : null}
              {/* Overlays for vibe/texture */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/70 pointer-events-none" />
              <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:8px_8px] mix-blend-overlay pointer-events-none" />
            </div>
          </AspectRatio>
        </div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="font-pixel text-primary text-sm group-hover:underline underline-offset-4">
              {title}
            </CardTitle>
            <Badge variant="secondary" className="font-pixel text-xs">
              {status}
            </Badge>
          </div>
          <CardDescription className="text-muted-foreground">{description}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {tech.map((item: string) => (
              <Badge key={item} variant="outline" className="text-xs">
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
