"use client";

import { AnimatedCounter } from "@/components/shared/animated-counter";

export function StatsPanel() {
  return (
    <div className="bg-card border-2 border-primary p-6 slide-in-right">
      <h3 className="font-pixel text-primary text-sm mb-4">STATS</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground text-sm">PROJECTS:</span>
          <AnimatedCounter end={15} suffix="+" />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground text-sm">EXPERIENCE:</span>
          <AnimatedCounter end={2} suffix=" YRS" prefix="+" />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground text-sm">EFFICIENCY GAIN:</span>
          <AnimatedCounter end={40} suffix="%"/>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground text-sm">TECH STACK:</span>
          <AnimatedCounter end={25} suffix="+" />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground text-sm">BUG REDUCTION:</span>
          <AnimatedCounter end={25} suffix="%" />
        </div>
      </div>
    </div>
  );
}
