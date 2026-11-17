"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { playBubble } = useTheme();
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Jakarta",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playBubble();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-ink)] py-12 px-4 sm:px-6 lg:px-8 mt-16 transition-colors duration-300">
      <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Status */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-10 h-10 rounded-2xl bg-[var(--color-torii)] text-[var(--color-paper)] p-[1.5px] shadow-sm flex items-center justify-center font-display font-extrabold text-sm">
            MA
          </div>

          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="font-display font-bold text-base">Michael Andre</span>
              <span className="semester-pill text-[0.65rem]">
                &ldquo;I&apos;m Ready!&rdquo;
              </span>
            </div>
            <p className="text-xs opacity-75 mt-0.5">
              Full-Stack Software Engineer • Jakarta, Indonesia (UNTAR · FTI)
            </p>
          </div>
        </div>

        {/* Center: Live Local Clock & Coordinates */}
        <div className="flex items-center gap-4 px-4 py-2 rounded-full border border-[var(--color-rule)] bg-[var(--color-ink)]/[0.04] text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>JKT: {time || "00:00:00"}</span>
          </div>
          <span className="opacity-40">|</span>
          <span className="hidden sm:inline">6°10′S 106°47′E · Bikini Trench</span>
        </div>

        {/* Right: Socials & Back to Top */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://github.com/michaelandre"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playBubble()}
            className="hero__icon w-9 h-9"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/michaelandre"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playBubble()}
            className="hero__icon w-9 h-9"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:michaelandre@gmail.com"
            onClick={() => playBubble()}
            className="hero__icon w-9 h-9"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full border border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-all ml-2"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Micro Copyright */}
      <div className="max-w-[90rem] mx-auto mt-8 pt-6 border-t border-[var(--color-rule)] flex flex-col sm:flex-row items-center justify-between text-[11px] opacity-70 gap-2">
        <span>
          © {new Date().getFullYear()} Michael Andre Antoro. Crafted with Next.js 15, Tailwind &amp; Framer Motion.
        </span>
        <span className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[var(--color-sponge)]" />
          Bikini Bottom Web Systems Laboratory
        </span>
      </div>
    </footer>
  );
}
