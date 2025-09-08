"use client";

import { useEffect, useRef, useState } from "react";

export type ScrollDirection = "up" | "down";

/**
 * Tracks the user's scroll direction in a performant way.
 * - Uses requestAnimationFrame to avoid flooding state updates
 * - Debounces minor jitter by requiring a minimum delta
 */
export function useScrollDirection(minDelta = 2): ScrollDirection {
  const [direction, setDirection] = useState<ScrollDirection>("down");
  const lastYRef = useRef<number>(0);
  const tickingRef = useRef<boolean>(false);

  useEffect(() => {
    lastYRef.current = window.scrollY;

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastYRef.current;

        if (Math.abs(delta) >= minDelta) {
          setDirection(delta > 0 ? "down" : "up");
          lastYRef.current = currentY;
        }

        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [minDelta]);

  return direction;
}
