"use client";

import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <div key={skill.name} className="slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="flex justify-between items-center mb-2">
            <span className="font-pixel text-primary text-xs">{skill.name}</span>
            <span className="font-pixel text-secondary text-xs">{skill.level}%</span>
          </div>
          <div className="w-full bg-muted h-2 border border-primary">
            <div
              className="bg-primary h-full transition-all duration-1000 ease-out"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
