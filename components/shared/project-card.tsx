"use client";

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
}: {
  title: string;
  description: string;
  tech: string[];
  status: string;
  image?: string;
  slug?: string;
  thumbnailPoster?: string;
}) {
  const computedSlug = slug ? slug : slugify(title);
  const poster = thumbnailPoster || image || "/images/pixel-bg.jpg";

  return (
    <Link
      href={`/projects/${computedSlug}`}
      className="h-full block group"
    >
      <div className="h-full flex flex-col">
        <AspectRatio ratio={16 / 9}>
          <div className="relative w-full h-full">
            <Image
              src={poster}
              alt={`${title} thumbnail`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={false}
            />
            {/* Subtle overlay to harmonize with color theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/15 via-transparent to-background/25 pointer-events-none" />
          </div>
        </AspectRatio>
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-pixel text-primary text-lg group-hover:underline underline-offset-4">
              {title}
            </h3>
          </div>
          <p className="text-muted-foreground text-base mb-4 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((item: string) => (
              <Badge key={item} variant="outline" className="text-sm px-3 py-1">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
