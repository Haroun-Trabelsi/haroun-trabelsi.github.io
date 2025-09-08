"use client";

import { useEffect, useState } from "react";

/**
 * Navigation & active section tracking without scroll snapping.
 * Uses a center-of-viewport heuristic to determine the active section
 * which stabilizes the active tab (prevents flicker/jitter while scrolling).
 */
export function useAppleScrolling() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ["hero", "about", "projects", "companies", "experience", "skills", "contact"];

  useEffect(() => {
    const getEls = () =>
      sections
        .map((id) => document.getElementById(id))
        .filter(
          (el): el is HTMLElement =>
            !!el && (el.offsetParent !== null || el.getBoundingClientRect().height > 0)
        );

    const updateActive = () => {
      const els = getEls();
      if (!els.length) return;
 
      // If user is at the very bottom, force "CONTACT" as active
      const doc = document.documentElement;
      const atBottom = Math.ceil(window.scrollY + window.innerHeight) >= doc.scrollHeight - 1;
      if (atBottom) {
        setCurrentSection(sections.length - 1);
        return;
      }
 
      const viewportCenter = window.innerHeight / 2;
      let bestIdx = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const dist = Math.abs(sectionCenter - viewportCenter);
        const idx = sections.indexOf(el.id);
        if (idx !== -1 && dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });

      // Hysteresis to prevent flicker near boundaries
      const currentId = sections[currentSection];
      const currentEl = currentId ? document.getElementById(currentId) : null;
      const currentRect = currentEl ? currentEl.getBoundingClientRect() : null;
      const currentCenter = currentRect ? currentRect.top + currentRect.height / 2 : Number.POSITIVE_INFINITY;
      const currentDist = Math.abs(currentCenter - viewportCenter);
      const HYST = 40; // px tolerance to avoid jitter

      if (bestIdx !== currentSection) {
        if (bestDist + HYST < currentDist) {
          setCurrentSection(bestIdx);
        }
      } else {
        setCurrentSection(bestIdx);
      }
    };

    // Initial compute so HOME is active on load
    updateActive();

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [currentSection]);

  // When user tries to scroll down while at the very top, highlight ABOUT (index 1) in navbar
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (window.scrollY <= 0 && e.deltaY > 0) {
        setCurrentSection(1);
      }
    };

    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY ?? 0;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (window.scrollY <= 0) {
        const y = e.touches[0]?.clientY ?? 0;
        if (touchStartY - y > 10) setCurrentSection(1); // swipe up intent
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const keys = ["ArrowDown", "PageDown", "Space", " ", "End"];
      if (window.scrollY <= 0 && keys.includes(e.key)) {
        setCurrentSection(1);
      }
    };

    const onReveal = () => setCurrentSection(1);

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("reveal-sections", onReveal as unknown as EventListener);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("reveal-sections", onReveal as unknown as EventListener);
    };
  }, []);

  const scrollToSection = (index: number) => {
    const id = sections[index];
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return { currentSection, scrollToSection, sections };
}
