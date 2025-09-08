"use client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { experiences } from "@/data/portfolio";

export function Experience() {
  const companyLogos: Record<string, string> = {
    "Vision Age VFX": "/images/visionage.png",
  };
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div
          key={exp.company}
          className={`border-l-4 ${exp.color} pl-6 fade-in-scroll`}
          data-scroll-animate
          id={`experience-${index}`}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <div className="flex items-center gap-3">
              <Avatar className="size-7 ring-2 ring-primary/40">
                <AvatarImage
                  src={companyLogos[exp.company] ?? "/placeholder-logo.png"}
                  alt={`${exp.company} logo`}
                />
                <AvatarFallback className="text-[10px]">
                  {exp.company.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-pixel text-primary text-sm">{exp.company}</h3>
            </div>
            <Badge variant="outline" className="font-pixel text-xs w-fit">
              {exp.period}
            </Badge>
          </div>
          <h4 className="font-pixel text-secondary text-xs mb-3">{exp.role}</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}
