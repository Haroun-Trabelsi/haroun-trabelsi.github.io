"use client";

import { useState } from "react";
import { useAppleScrolling } from "@/hooks/use-apple-scrolling";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function TimelineNav() {
  const { currentSection, scrollToSection } = useAppleScrolling();
  const [isOpen, setIsOpen] = useState(false);
  
  const sections = [
    { id: "hero", label: "HOME", color: "border-primary" },
    { id: "about", label: "ABOUT", color: "border-primary" },
    { id: "experience", label: "EXPERIENCE", color: "border-tertiary" },
    { id: "projects", label: "PROJECTS", color: "border-secondary" },
    { id: "skills", label: "SKILLS", color: "border-primary" },
    { id: "contact", label: "CONTACT", color: "border-secondary" },
  ];

  const handleGo = (index: number) => {
    window.dispatchEvent(new Event("reveal-sections"));
    scrollToSection(index);
    setIsOpen(false); // Close mobile menu after selection
  };

  return (
    <>
      {/* Desktop Timeline Navigation */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-64 z-50 flex-col py-8 bg-card/80 backdrop-blur-sm border-r-2 border-primary">
        {/* Logo */}
        <div className="font-pixel text-primary text-xl mb-8 px-6">
          {`<DEV/>`}
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-col space-y-16 flex-1 px-6 justify-center">
          {sections.map((section, index) => (
            <div key={section.id} className="relative flex items-center h-12">
              {/* Timeline line - centered */}
              {index < sections.length - 1 && (
                <div className="absolute left-1/2 top-12 transform -translate-x-1/2 w-0.5 h-16 bg-muted/50" />
              )}
              
              {/* Timeline dot - centered */}
              <button
                onClick={() => handleGo(index)}
                aria-current={currentSection === index ? "page" : undefined}
                className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-2 transition-all duration-300 z-10 hover:scale-110 ${
                  currentSection === index
                    ? `bg-primary border-primary scale-125 shadow-lg shadow-primary/50`
                    : `bg-card ${section.color} hover:bg-primary/20`
                }`}
              />
              
            {/* Label alternating left/right */}
            <button
              onClick={() => handleGo(index)}
              className={`absolute w-20 transition-all duration-300 hover:scale-105 ${index % 2 === 0 ? 'left-1 text-left' : 'right-1 text-right'}`}
            >
              <div
                className={`font-pixel text-xs transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  currentSection === index
                    ? "text-primary font-bold scale-105"
                    : "text-muted-foreground hover:text-primary hover:font-semibold"
                }`}
              >
                {section.label}
              </div>
            </button>
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="outline" 
              size="sm" 
              className="font-pixel bg-card/90 backdrop-blur-sm border-primary"
            >
              MENU
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 bg-card/95 backdrop-blur-sm border-r-2 border-primary">
            <div className="flex flex-col h-full py-6">
              {/* Mobile Logo */}
              <div className="font-pixel text-primary text-lg mb-8">
                {`<DEV/>`}
              </div>

              {/* Mobile Timeline Navigation */}
              <div className="flex flex-col space-y-8 flex-1">
                {sections.map((section, index) => (
                  <div key={section.id} className="relative flex items-center h-10">
                    {/* Timeline line - centered */}
                    {index < sections.length - 1 && (
                      <div className="absolute left-1/2 top-10 transform -translate-x-1/2 w-0.5 h-8 bg-muted/50" />
                    )}
                    
                    {/* Timeline dot - centered */}
                    <button
                      onClick={() => handleGo(index)}
                      aria-current={currentSection === index ? "page" : undefined}
                      className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 ${
                        currentSection === index
                          ? `bg-primary border-primary scale-125 shadow-lg shadow-primary/50`
                          : `bg-card ${section.color} hover:bg-primary/20`
                      }`}
                    />
                    
                    {/* Label - centered for mobile */}
                    <button
                      onClick={() => handleGo(index)}
                      className="absolute left-1/2 transform -translate-x-1/2 w-32 text-center"
                    >
                      <div
                        className={`font-pixel text-sm transition-all duration-300 cursor-pointer ${
                          currentSection === index
                            ? "text-primary font-bold"
                            : "text-muted-foreground hover:text-primary hover:font-semibold"
                        }`}
                      >
                        {section.label}
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
