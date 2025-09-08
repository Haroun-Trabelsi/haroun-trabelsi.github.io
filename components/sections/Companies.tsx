"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { companies } from "@/data/portfolio";

export function Companies() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {companies.map((company, index) => (
        <Card
          key={company.name}
          className="border-2 border-primary bg-card/80 hover:bg-card transition-colors duration-200 fade-in-scroll"
          data-scroll-animate
          id={`company-${index}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardHeader className="text-center">
            <div className={`text-4xl mb-2 ${company.color}`}>{company.logo}</div>
            <CardTitle className="font-pixel text-primary text-sm">{company.name}</CardTitle>
            <CardDescription className="text-muted-foreground text-xs">{company.role}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
