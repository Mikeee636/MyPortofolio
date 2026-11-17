"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { spongebobAudio } from "../utils/spongebobSound";

export type SkyTheme = "day" | "night";

interface ThemeContextType {
  theme: SkyTheme;
  toggleTheme: () => void;
  setTheme: (t: SkyTheme) => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  playSqueak: () => void;
  playBubble: () => void;
  playPopSound: () => void;
  playSpatulaSound: () => void;
  bubbleCount: number;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "day",
  toggleTheme: () => { },
  setTheme: () => { },
  soundEnabled: true,
  toggleSound: () => { },
  playSqueak: () => { },
  playBubble: () => { },
  playPopSound: () => { },
  playSpatulaSound: () => { },
  bubbleCount: 0,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<SkyTheme>("night");
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [bubbleCount, setBubbleCount] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    try {
      setThemeState("night");
      document.documentElement.setAttribute("data-sky", "night");
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.remove("day", "theme-light");
      document.documentElement.classList.add("night", "theme-dark");
      if (document.body) {
        document.body.classList.remove("day", "theme-light");
        document.body.classList.add("night", "theme-dark");
      }
    } catch {
      // fallback
    }
  }, []);

  const setTheme = (_newTheme: SkyTheme) => {
    setThemeState("night");
    try {
      document.documentElement.setAttribute("data-sky", "night");
      document.documentElement.setAttribute("data-theme", "dark");
    } catch {
      // ignore
    }
  };

  const toggleTheme = () => {
    const next = theme === "day" ? "night" : "day";
    setTheme(next);
    if (soundEnabled) {
      spongebobAudio.playBubblePop();
      spongebobAudio.playImReady();
    }
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    spongebobAudio.enabled = next;
    try {
      localStorage.setItem("spongebob-sound-enabled", String(next));
    } catch {
      // ignore
    }
    if (next) {
      spongebobAudio.playBubblePop();
    }
  };

  const playBubble = () => {
    setBubbleCount((c) => c + 1);
    spongebobAudio.playBubblePop();
  };

  const playPopSound = () => {
    setBubbleCount((c) => c + 1);
    spongebobAudio.playBubblePop();
  };

  const playSpatulaSound = () => {
    spongebobAudio.playSpatulaClang();
  };

  const playSqueak = () => {
    spongebobAudio.playSqueak();
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
        soundEnabled,
        toggleSound,
        playSqueak,
        playBubble,
        playPopSound,
        playSpatulaSound,
        bubbleCount,
      }}
    >
      <div className={`app-container ${theme} ${mounted ? "mounted" : ""}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
