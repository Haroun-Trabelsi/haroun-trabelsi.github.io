"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/shared/animated-counter";

export function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="fade-in-scroll" data-scroll-animate id="about-text">
        <h3 className="font-pixel text-secondary text-lg mb-4">ABOUT.EXE</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          I'm a passionate full-stack developer with over 8 years of experience crafting digital solutions. My journey
          started with curiosity about how websites work, and it evolved into a career building scalable applications
          for companies ranging from startups to Fortune 500 enterprises.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          I specialize in modern web technologies like React, Node.js, and TypeScript, but I'm always eager to learn new
          tools and frameworks. When I'm not coding, you'll find me contributing to open-source projects or mentoring
          aspiring developers.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-tertiary text-tertiary-foreground font-pixel text-xs">PROBLEM SOLVER</Badge>
          <Badge className="bg-primary text-primary-foreground font-pixel text-xs">TEAM PLAYER</Badge>
          <Badge className="bg-secondary text-secondary-foreground font-pixel text-xs">INNOVATOR</Badge>
        </div>
      </div>
      <div className="fade-in-scroll" data-scroll-animate id="about-stats">
        <Card className="border-2 border-tertiary bg-card/80">
          <CardHeader>
            <CardTitle className="font-pixel text-tertiary text-sm">ACHIEVEMENTS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Open Source Contributions:</span>
              <AnimatedCounter end={150} suffix="+" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">GitHub Stars:</span>
              <AnimatedCounter end={1200} suffix="+" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Stack Overflow Rep:</span>
              <AnimatedCounter end={5000} suffix="+" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Certifications:</span>
              <AnimatedCounter end={12} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
