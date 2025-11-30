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
          I'm an adaptable and self-driven <b className="text-primary">Software Engineer</b> with strong full-stack development experience
          and hands-on exposure to real-world projects. My journey has taken me from crafting treasury management
          systems to building AI-powered sales platforms and VFX project management tools.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Skilled in  building scalable web applications, managing databases, and leading team projects with Git.
          I specialize in <b className="text-primary">ReactJS, Next.js, Express.js and modern technologies</b>, but I'm always eager to learn and adapt.
          Passionate about impactful software, clean architecture, and collaborative innovation.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-tertiary text-tertiary-foreground font-pixel text-xs">PROBLEM SOLVER</Badge>
          <Badge className="bg-primary text-primary-foreground font-pixel text-xs">TEAM PLAYER</Badge>
          <Badge className="bg-secondary text-secondary-foreground font-pixel text-xs">ADAPTABLE</Badge>
        </div>
      </div>
      <div className="fade-in-scroll" data-scroll-animate id="about-stats">
        <Card className="border-2 border-tertiary bg-card/80">
          <CardHeader>
            <CardTitle className="font-pixel text-tertiary text-sm">ACHIEVEMENTS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Sales Research Efficiency:</span>
              <AnimatedCounter end={40} suffix="%" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Response Time Reduction:</span>
              <AnimatedCounter end={45} suffix="%" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">System Performance Boost:</span>
              <AnimatedCounter end={30} suffix="%" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Bug Resolution Speed:</span>
              <AnimatedCounter end={25} suffix="%" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
