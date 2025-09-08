"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type SoundContextType = {
  enabled: boolean;
  toggle: () => void;
};

const SoundContext = createContext<SoundContextType | undefined>(undefined);

function playBeep(frequency = 440, duration = 80, type: OscillatorType = "square", volume = 0.03) {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = frequency;
    gain.gain.value = volume;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    setTimeout(() => {
      osc.stop();
      ctx.close();
    }, duration);
  } catch {
    // Ignore audio errors (e.g., autoplay restrictions)
  }
}

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("uiSound");
    if (stored) setEnabled(stored === "on");
  }, []);

  useEffect(() => {
    localStorage.setItem("uiSound", enabled ? "on" : "off");
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      // Click sounds on main interactive pixel-press elements
      const el = target.closest(".pixel-press,button,[role='button'],a") as HTMLElement | null;
      if (el) playBeep(520, 70, "square", 0.035);
    };

    const onMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const el = target.closest(".pixel-press,button,[role='button'],a") as HTMLElement | null;
      if (el) playBeep(360, 50, "square", 0.02);
    };

    document.addEventListener("click", onClick, { capture: true });
    document.addEventListener("mouseenter", onMouseEnter, { capture: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true } as any);
      document.removeEventListener("mouseenter", onMouseEnter, { capture: true } as any);
    };
  }, [enabled]);

  const value = useMemo<SoundContextType>(
    () => ({
      enabled,
      toggle: () => setEnabled((v) => !v),
    }),
    [enabled]
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within SoundProvider");
  return ctx;
}
