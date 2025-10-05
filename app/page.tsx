"use client";

import { useEffect, useMemo, useState } from "react";
import { TimelineNav } from "@/components/navigation/timeline-nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

export default function Portfolio() {
  const visibleElements = useScrollAnimation();
  const direction = useScrollDirection();

  // Reveal non-hero sections only after the user starts scrolling down (wheel/touch/keys/scroll)
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (revealed) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) setRevealed(true);
    };

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY ?? 0;
    };
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY ?? 0;
      if (touchStartY - y > 10) setRevealed(true); // swipe up => scrolling down intent
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const keys = ["ArrowDown", "PageDown", "Space", " ", "End"];
      if (keys.includes(e.key)) setRevealed(true);
    };

    const onScroll = () => {
      if (window.scrollY > 10) setRevealed(true);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
    };
  }, [revealed]);

  // Also reveal sections when user clicks a nav tab (PixelNav dispatches "reveal-sections")
  useEffect(() => {
    const handler = () => setRevealed(true);
    window.addEventListener("reveal-sections", handler as unknown as EventListener);
    return () => window.removeEventListener("reveal-sections", handler as unknown as EventListener);
  }, []);

  // If you want to also apply the existing fade-in-scroll class behavior to inner elements:
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-scroll");
    elements.forEach((el) => {
      const id = (el as HTMLElement).id;
      if (id && visibleElements.has(id)) {
        el.classList.add("visible");
      } else if (id) {
        el.classList.remove("visible");
      }
    });
  }, [visibleElements]);

  const getSectionAnim = useMemo(() => {
    return (id: string) => {
      const isVisible = visibleElements.has(id);
      const enterClass = direction === "down" ? "fade-in-up" : "fade-in-down";
      const exitClass = direction === "down" ? "fade-out-up" : "fade-out-down";
      return `section-anim ${isVisible ? enterClass : exitClass}`;
    };
  }, [visibleElements, direction]);

  return (
    <div className="ml-64">
      <TimelineNav />

      {/* HERO */}
      <section id="hero" data-scroll-animate className={`container section-anchor mx-auto px-4 min-h-screen flex items-center ${getSectionAnim("hero")}`}>
        <Hero />
      </section>

      <div className={revealed ? "" : "hidden"}>
      {/* ABOUT */}
      <section id="about" data-scroll-animate className={`container section-anchor mx-auto px-4 py-24 md:py-32 bg-card/20 ${getSectionAnim("about")}`}>
        <h2 className="font-pixel text-4xl text-primary mb-8">{">"} ABOUT</h2>
        <About />
      </section>

      {/* EXPERIENCE */}
      <section id="experience" data-scroll-animate className={`container section-anchor mx-auto px-4 py-24 md:py-32 ${getSectionAnim("experience")}`}>
        <h2 className="font-pixel text-4xl text-secondary mb-8 slide-in-left">{">"} EXPERIENCE</h2>
        <Experience />
      </section>

      {/* PROJECTS */}
      <section id="projects" data-scroll-animate className={`container section-anchor mx-auto px-4 py-24 md:py-32 bg-card/20 ${getSectionAnim("projects")}`}>
        <h2 className="font-pixel text-4xl text-primary mb-8 slide-in-left">{">"} FEATURED PROJECTS</h2>
        <Projects />
      </section>

      {/* SKILLS */}
      <section id="skills" data-scroll-animate className={`container section-anchor mx-auto px-4 py-24 md:py-32 ${getSectionAnim("skills")}`}>
        <h2 className="font-pixel text-4xl text-primary mb-8 slide-in-left">{">"} SKILL TREE</h2>
        <Skills />
      </section>

      {/* CONTACT */}
      <section id="contact" data-scroll-animate className={`container section-anchor mx-auto px-4 pt-24 md:pt-32 ${getSectionAnim("contact")}`}>
        <Contact />
      </section>
      </div>
    </div>
  );
}
