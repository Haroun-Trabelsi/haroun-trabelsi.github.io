"use client";

import { useEffect, useState } from "react";

export function useScrollAnimation() {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).id;
          if (entry.isIntersecting) {
            setVisibleElements((prev) => {
              const next = new Set(prev);
              next.add(id);
              return next;
            });
          } else {
            setVisibleElements((prev) => {
              const next = new Set(prev);
              next.delete(id);
              return next;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-scroll-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return visibleElements;
}
