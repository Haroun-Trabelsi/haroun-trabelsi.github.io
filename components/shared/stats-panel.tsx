"use client";

import { AnimatedCounter } from "@/components/shared/animated-counter";

export function StatsPanel() {
  return (
    <div className="bg-card border-2 border-primary p-6 slide-in-right">
      <h3 className="font-pixel text-primary text-sm mb-4">STATS</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground text-sm">PROJECTS:</span>
          <AnimatedCounter end={50} suffix="+" />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground text-sm">EXPERIENCE:</span>
          <AnimatedCounter end={4} suffix=" YRS"/>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground text-sm">CLIENTS:</span>
          <AnimatedCounter end={15} suffix="+" />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground text-sm">COMMITS:</span>
          <AnimatedCounter end={2500} />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground text-sm">COFFEE:</span>
          <AnimatedCounter end={9999} suffix="+" />
        </div>
      </div>
    </div>
  );
}
