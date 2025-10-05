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
        <div key={category} className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="font-pixel text-primary-foreground text-xs">{categoryIndex + 1}</span>
            </div>
            <h3 className="font-pixel text-2xl text-primary">{category}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categorySkills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="group relative bg-card/50 border-2 border-primary/20 hover:border-primary/60 transition-all duration-300 p-4 rounded-lg hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-pixel text-primary text-sm">{skill.name}</span>
                  <Badge variant="outline" className="font-pixel text-xs">
                    {skill.level}%
                  </Badge>
                </div>
                
                {/* Skill level visualization */}
                <div className="space-y-2">
                  <div className="w-full bg-muted h-3 border border-primary/30 rounded-sm overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-full transition-all duration-1000 ease-out relative"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Skill dots indicator */}
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }).map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          dotIndex < Math.ceil(skill.level / 20)
                            ? 'bg-primary'
                            : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
