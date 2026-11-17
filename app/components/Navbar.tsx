"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Download, Volume2, VolumeX, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme, soundEnabled, toggleSound, playBubble } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Studying", href: "#learning" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Credentials", href: "#credentials" },
    { label: "Contact", href: "#contact" },
  ];

  const handleSkyChange = (mode: "day" | "night") => {
    playBubble();
    setTheme(mode);
    document.documentElement.dataset.sky = mode;
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 transition-all duration-300 py-3 px-4 sm:px-8 select-none">
      <div className="max-w-[90rem] mx-auto">
        <div
          className={`flex items-center justify-between px-5 py-2.5 rounded-full border transition-all duration-300 ${
            isScrolled
              ? "bg-[var(--color-paper)]/90 backdrop-blur-md border-[var(--color-rule)] shadow-sm text-[var(--color-ink)]"
              : "bg-[var(--color-paper)]/60 backdrop-blur-sm border-[var(--color-rule)] text-[var(--color-ink)]"
          }`}
        >
          {/* Brand Left: SpongeBob Monogram & Name */}
          <Link
            href="#hero"
            onClick={() => playBubble()}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-full bg-[var(--color-torii)] text-[var(--color-paper)] flex items-center justify-center font-display font-extrabold text-xs transition-transform group-hover:scale-105 shadow-sm">
              <span>99</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight group-hover:text-[var(--color-torii)] transition-colors">
                Michael Andre
              </span>
              <span className="label text-[0.6rem] opacity-70">
                Full-Stack Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => playBubble()}
                className="px-3.5 py-1.5 rounded-full label hover:opacity-100 opacity-75 hover:bg-[var(--color-ink)]/[0.06] transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Controls: Day/Night Switcher + Audio + Resume */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Reference Day / Night Sky Switcher */}
            <div className="flex items-center p-0.5 rounded-full border border-[var(--color-rule)] bg-[var(--color-ink)]/[0.04]">
              <button
                onClick={() => handleSkyChange("day")}
                title="Switch to Day Sky"
                aria-pressed={theme === "day"}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all ${
                  theme === "day"
                    ? "bg-[var(--color-ink)] text-[var(--color-paper)] shadow-xs"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Day</span>
              </button>

              <button
                onClick={() => handleSkyChange("night")}
                title="Switch to Night Sky"
                aria-pressed={theme === "night"}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all ${
                  theme === "night"
                    ? "bg-[var(--color-ink)] text-[var(--color-paper)] shadow-xs"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Night</span>
              </button>
            </div>

            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? "Mute ambient audio" : "Enable ambient audio"}
              className="p-2 rounded-full border border-[var(--color-rule)] hover:bg-[var(--color-ink)]/[0.08] transition-colors"
            >
              {soundEnabled ? (
                <Volume2 className="w-3.5 h-3.5 text-[var(--color-torii)]" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 opacity-50" />
              )}
            </button>

            {/* Resume CV Download */}
            <a
              href="/CV_Michael_Andre.pdf"
              download="CV_Michael_Andre.pdf"
              onClick={() => playBubble()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] label transition-all"
            >
              <Download className="w-3 h-3" />
              <span>CV</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg border border-[var(--color-rule)]"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 max-w-[90rem] mx-auto p-4 rounded-2xl bg-[var(--color-paper)] border border-[var(--color-rule)] shadow-xl text-[var(--color-ink)]">
          <div className="flex flex-col space-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setMobileOpen(false);
                  playBubble();
                }}
                className="py-2 px-3 rounded-lg label hover:bg-[var(--color-ink)]/[0.06]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/CV_Michael_Andre.pdf"
              download="CV_Michael_Andre.pdf"
              onClick={() => playBubble()}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)] label"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
