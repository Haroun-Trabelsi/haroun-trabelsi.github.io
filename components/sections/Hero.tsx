"use client";

import { Button } from "@/components/ui/button";
import { StatsPanel } from "@/components/shared/stats-panel";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const handleViewProjects = () => {
    // Dispatch event to reveal sections first
    window.dispatchEvent(new Event("reveal-sections"));
    // Then scroll to projects section
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactMe = () => {
    // Dispatch event to reveal sections first
    window.dispatchEvent(new Event("reveal-sections"));
    // Then scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 slide-in-left">
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge className="font-pixel bg-primary/10 text-primary border border-primary">
            OPEN TO WORK
          </Badge>
          <Badge className="font-pixel bg-tertiary/10 text-tertiary border border-tertiary">
            REMOTE & ON-SITE
          </Badge>
          <Badge className="font-pixel bg-secondary/10 text-secondary border border-secondary">
            TUNISIA
          </Badge>
        </div>
        
        <h1 className="font-pixel text-4xl md:text-6xl text-primary mb-4 glitch">HAROUN TRABELSI</h1>
        <h2 className="font-pixel text-2xl md:text-3xl text-secondary mb-4">SOFTWARE ENGINEER</h2>

        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-muted-foreground text-sm">Currently building <b className="text-primary">JourneyAI</b> at <b className="text-primary">Skaled</b></span>
        </div>

        <p className="text-muted-foreground text-xl mb-4 leading-relaxed">
          Full-stack engineer currently building an AI sales platform serving 10+ enterprise clients. 15 months of shipping production software across AI/ML pipelines, real-time systems, and enterprise SaaS.
        </p>

        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          Skilled in<b className="text-primary"> React, TypeScript, FastAPI, and Node.js</b><br/>
          From intern to Tech Lead in 6 months — now building at scale<br/>
          Proficient in <b className="text-primary">Docker, CI/CD, WebSockets, and AI integrations</b>
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Button 
            onClick={handleViewProjects}
            className="font-pixel bg-primary hover:bg-primary/80 text-primary-foreground pixel-press text-base"
          >
            VIEW PROJECTS
          </Button>
          <Button
            onClick={handleContactMe}
            variant="outline"
            className="font-pixel border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary bg-transparent pixel-press text-base"
          >
            CONTACT ME
          </Button>
          <Button
            variant="outline"
            className="font-pixel border-primary text-primary hover:bg-primary/10 hover:text-primary bg-transparent pixel-press text-base"
            asChild
          >
            <a href="/Haroun Trabelsi - Software Engineer.pdf" download="Haroun_Trabelsi_CV.pdf">DOWNLOAD CV</a>
          </Button>
        </div>
      </div>
      <div className="lg:col-span-1">
        <StatsPanel />
      </div>
    </div>
  );
}
