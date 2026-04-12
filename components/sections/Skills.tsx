"use client";

import { skills } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = {
    "Frontend": skills.filter(skill => skill.category === "frontend"),
    "Backend": skills.filter(skill => skill.category === "backend"),
    "Tools": skills.filter(skill => skill.category === "tools"),
    "Languages": skills.filter(skill => skill.category === "languages")
  };

  return (
    <div className="space-y-12">
      {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
        <div key={category} className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="font-pixel text-primary-foreground text-xs">{categoryIndex + 1}</span>
            </div>
            <h3 className="font-pixel text-2xl text-primary">{category}</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {categorySkills.map((skill) => (
              skill.level >= 85 ? (
                <Badge
                  key={skill.name}
                  className="bg-primary/10 text-primary border border-primary/40 font-pixel text-xs px-3 py-1.5 hover:bg-primary/20 transition-colors"
                >
                  {skill.name}
                </Badge>
              ) : (
                <Badge
                  key={skill.name}
                  variant="outline"
                  className="font-pixel text-xs px-3 py-1.5 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {skill.name}
                </Badge>
              )
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
