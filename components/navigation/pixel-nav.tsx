"use client";

import { useState } from "react";
import { useAppleScrolling } from "@/hooks/use-apple-scrolling";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useSound } from "@/components/sound/sound-provider";

export function PixelNav() {
  const { currentSection, scrollToSection } = useAppleScrolling();
  const { enabled, toggle } = useSound();
  const [open, setOpen] = useState(false);
  const tabs = ["HOME", "ABOUT", "PROJECTS", "COMPANIES", "EXPERIENCE", "SKILLS", "CONTACT"];

  const handleGo = (index: number) => {
    // Ensure sections are revealed on nav click and then scroll
    window.dispatchEvent(new Event("reveal-sections"));
    scrollToSection(index);
  };

  return (
    <nav className="border-b border-primary/30 bg-card/80 backdrop-blur-md fixed w-full top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <div className="font-pixel text-primary text-sm">{`<DEV/>`}</div>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-0.5 overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => handleGo(index)}
                aria-current={currentSection === index ? "page" : undefined}
                className={`px-2.5 py-1.5 font-medium text-[0.8125rem] transition-all duration-200 whitespace-nowrap rounded-md ${
                  currentSection === index
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={toggle}
            className="hidden md:inline-flex ml-2 text-xs h-7 px-2.5"
            aria-pressed={enabled}
          >
            {enabled ? "SFX ON" : "SFX OFF"}
          </Button>

          {/* Mobile nav */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggle}
              className="text-xs h-7 px-2.5"
              aria-pressed={enabled}
            >
              {enabled ? "SFX" : "SFX"}
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="text-xs h-7 px-2.5">
                  MENU
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="p-4">
                <div className="flex flex-col space-y-2">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab}
                      onClick={() => {
                        handleGo(index);
                        setOpen(false);
                      }}
                      aria-current={currentSection === index ? "page" : undefined}
                      className={`w-full text-left px-3 py-2 text-sm transition-colors duration-200 rounded-md ${
                        currentSection === index
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
