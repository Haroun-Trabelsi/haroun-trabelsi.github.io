"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectCard({
  title,
  description,
  tech,
  status,
}: {
  title: string;
  description: string;
  tech: string[];
  status: string;
}) {
  return (
    <Card className="h-full flex flex-col border-2 border-primary bg-card/80 hover:bg-card transition-colors duration-200">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="font-pixel text-primary text-sm">{title}</CardTitle>
          <Badge variant="secondary" className="font-pixel text-xs">
            {status}
          </Badge>
        </div>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <Badge key={item} variant="outline" className="text-xs">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
