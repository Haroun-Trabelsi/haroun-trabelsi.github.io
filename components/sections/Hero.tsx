"use client";

import { Button } from "@/components/ui/button";
import { StatsPanel } from "@/components/shared/stats-panel";

export function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 slide-in-left">
        <h1 className="font-pixel text-4xl md:text-6xl text-primary mb-4 glitch">HAROUN TRABELSI</h1>
        <h2 className="font-pixel text-xl md:text-2xl text-secondary mb-6">FULL-STACK ENGINEER</h2>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          Crafting digital experiences with modern technologies and retro aesthetics. Specializing in React, Node.js, and everything in between.
        </p>
        <div className="flex gap-4">
          <Button className="font-pixel bg-primary hover:bg-primary/80 text-primary-foreground pixel-press">
            VIEW PROJECTS
          </Button>
          <Button
            variant="outline"
            className="font-pixel border-secondary text-secondary hover:bg-secondary/10 bg-transparent pixel-press"
          >
            DOWNLOAD CV
          </Button>
        </div>
      </div>
      <div className="lg:col-span-1">
        <StatsPanel />
      </div>
    </div>
  );
}
