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
  impacts,
}: {
  title: string;
  description: string;
  tech: string[];
  status: string;
  image?: string;
  slug?: string;
  thumbnailPoster?: string;
  impacts?: string[];
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
            {/* Enhanced overlay to match color scheme */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-tertiary/15 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </AspectRatio>
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-pixel text-primary text-lg group-hover:underline underline-offset-4">
              {title}
            </h3>
          </div>
          {impacts && impacts.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {impacts.map((impact) => (
                <Badge key={impact} className="bg-accent/10 text-accent border border-accent/30 font-pixel text-[0.5rem]">
                  {impact}
                </Badge>
              ))}
            </div>
          )}
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
