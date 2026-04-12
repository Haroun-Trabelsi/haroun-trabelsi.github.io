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
          I'm a <b className="text-primary">Software Engineer</b> currently at Skaled, where I've been building
          JourneyAI — a production AI sales platform serving 10+ enterprise clients — for the past 6 months.
          My career started with a treasury management system at Infotec, and within 6 months I was leading a team
          as <b className="text-primary">Tech Lead</b> at Vision Age VFX, architecting a full-stack VFX production platform now used by 2+ studios.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          I specialize in <b className="text-primary">React, TypeScript, FastAPI, and Node.js</b>, with deep experience in
          AI/ML integration (RAG pipelines, vector search, LLM orchestration), real-time systems (WebSockets, streaming),
          and production infrastructure (Docker, CI/CD, Redis). I thrive on building complex systems end-to-end and shipping them to real users.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-tertiary text-tertiary-foreground font-pixel text-xs">FULL-STACK</Badge>
          <Badge className="bg-primary text-primary-foreground font-pixel text-xs">AI/ML INTEGRATION</Badge>
          <Badge className="bg-secondary text-secondary-foreground font-pixel text-xs">PRODUCTION-READY</Badge>
        </div>
      </div>
      <div className="fade-in-scroll" data-scroll-animate id="about-stats">
        <Card className="border-2 border-tertiary bg-card/80">
          <CardHeader>
            <CardTitle className="font-pixel text-tertiary text-sm">ACHIEVEMENTS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Sales Research Efficiency <span className="text-primary/60">(JourneyAI)</span>:</span>
              <AnimatedCounter end={40} suffix="%" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Response Time Reduction <span className="text-primary/60">(Infotec)</span>:</span>
              <AnimatedCounter end={45} suffix="%" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Performance Boost <span className="text-primary/60">(Saleside)</span>:</span>
              <AnimatedCounter end={30} suffix="%" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Bug Resolution Speed <span className="text-primary/60">(Infotec)</span>:</span>
              <AnimatedCounter end={25} suffix="%" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
