"use client";

import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/portfolio";

export function Experience() {
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
            <h3 className="font-pixel text-primary text-lg">{exp.company}</h3>
            <Badge variant="outline" className="font-pixel text-sm w-fit">
              {exp.period}
            </Badge>
          </div>
          <h4 className="font-pixel text-secondary text-base mb-3">{exp.role}</h4>
          <p className="text-muted-foreground text-lg leading-relaxed">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}
