"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LanyardCard from "./LanyardCard";

const ROLES = ["Information Technology", "Web Developer"];

export const SpideyHero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (typedText.length < currentRole.length) {
        timer = setTimeout(() => {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        }, 90);
      } else {
        // Finished typing word, pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (typedText.length > 0) {
        timer = setTimeout(() => {
          setTypedText(currentRole.slice(0, typedText.length - 1));
        }, 45);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  const scrollTo = (id: string) => {
    if (typeof window !== "undefined") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="hero"
      data-page="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-transparent text-white select-none"
    >
      {/* Background Subtle Cyber Grid & Web Watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 75% 45%, rgba(255, 34, 51, 0.12) 0%, rgba(31, 76, 214, 0.08) 45%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Spider Web Watermark in Background */}
      <img
        src="/assets/web.png"
        alt=""
        className="absolute -top-12 -left-16 w-[560px] opacity-[0.04] mix-blend-screen pointer-events-none"
      />

      {/* 3D Interactive Lanyard with Namecard (from https://www.alfari.my.id/) */}
      <LanyardCard introFinished={true} />

      {/* Main Hero Container */}
      <div
        data-page-content="true"
        className="relative z-10 w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-10 lg:px-14 pt-20 sm:pt-28 lg:pt-32 pb-8 sm:pb-16 flex-1 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10 pointer-events-none"
      >
        {/* Left Column: Calling Card, Giant Stacked Name, Bio & Socials (pointer-events-auto for clicks) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left z-20 pointer-events-auto"
        >

          {/* Main Title: 3D Spider-Man Comic Style matching SpideyLogo (MICHAEL ANDRE A) */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col tracking-tight"
          >
            <h1 className="font-spidey font-black italic text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[5.5rem] 2xl:text-[6rem] leading-[1.08] uppercase m-0 select-none">
              <span
                className="block text-[#ff2233]"
                style={{
                  WebkitTextStroke: "1.5px #000000",
                  paintOrder: "stroke fill",
                  textShadow: `
                    -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000,
                    0 2px 0 #1f4cd6,
                    0 3px 0 #1b42bc,
                    0 4px 0 #173aa5,
                    0 5px 0 #13318f,
                    0 6px 0 #0f2878,
                    0 7px 0 #0b1f62,
                    0 8px 0 #07174b,
                    0 9px 0 #030e32,
                    0 10px 0 #000000,
                    0 14px 24px rgba(0,0,0,0.85),
                    0 0 25px rgba(31,76,214,0.45)
                  `,
                }}
              >
                Welcome to
              </span>
              <span
                className="block text-[#ff2233] mt-1 sm:mt-2"
                style={{
                  WebkitTextStroke: "1.5px #000000",
                  paintOrder: "stroke fill",
                  textShadow: `
                    -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000,
                    0 2px 0 #1f4cd6,
                    0 3px 0 #1b42bc,
                    0 4px 0 #173aa5,
                    0 5px 0 #13318f,
                    0 6px 0 #0f2878,
                    0 7px 0 #0b1f62,
                    0 8px 0 #07174b,
                    0 9px 0 #030e32,
                    0 10px 0 #000000,
                    0 14px 24px rgba(0,0,0,0.85),
                    0 0 25px rgba(31,76,214,0.45)
                  `,
                }}
              >
                My Portfolio
              </span>
            </h1>
          </motion.div>

          {/* Typewriter Animation: Single line to the right with whitespace-nowrap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3.5 sm:mt-5 flex items-center flex-nowrap whitespace-nowrap text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold tracking-tight text-white"
          >
            <span className="text-white">I&apos;m&nbsp;</span>
            <span className="bg-gradient-to-r from-[#ff3a4a] to-[#ff7582] bg-clip-text text-transparent font-bold drop-shadow-[0_0_16px_rgba(255,58,74,0.6)]">
              {typedText}
            </span>
            <span className="inline-block w-[2px] sm:w-[2.5px] h-[1.15em] bg-[#ff3a4a] mx-0.5 sm:mx-1 animate-pulse align-middle shadow-[0_0_10px_#ff3a4a]" />
            <span className="text-zinc-200">&nbsp;student</span>
          </motion.div>

          {/* Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2.5 sm:mt-4 max-w-lg text-zinc-400 text-sm sm:text-base lg:text-lg font-normal leading-relaxed"
          >
            Informatics Engineering student at Universitas Tarumanagara, building modern interactive things for the web.
          </motion.p>

          {/* Social Circles & Location Telemetry Row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-6"
          >
            {/* Social Icons matching circular buttons in image */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                data-web-hover="true"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-zinc-500/40 hover:border-[#ff3a4a] hover:bg-red-950/30 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md group"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="sm:w-[18px] sm:h-[18px] group-hover:scale-110 transition-transform">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                data-web-hover="true"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-zinc-500/40 hover:border-[#ff3a4a] hover:bg-red-950/30 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md group"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="sm:w-[17px] sm:h-[17px] group-hover:scale-110 transition-transform">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="mailto:michael.andre.antoro@example.com"
                aria-label="Email"
                data-web-hover="true"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-zinc-500/40 hover:border-[#ff3a4a] hover:bg-red-950/30 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md group"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[18px] sm:h-[18px] group-hover:scale-110 transition-transform">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>

            {/* Location & GPS Coordinates Tags */}
            <div className="flex items-center gap-2.5 xs:gap-3 text-[11px] sm:text-xs font-spidey tracking-[0.14em] sm:tracking-[0.2em] text-zinc-400 uppercase">
              <span className="text-zinc-300 font-medium">UNTAR · JAKARTA</span>
              <span className="text-red-500">•</span>
              <span className="font-mono text-zinc-400 text-[10px] sm:text-xs">6°10&apos;S 106°47&apos;E</span>
            </div>
          </motion.div>

          {/* Bottom Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-10 lg:mt-12 flex items-center gap-4"
          >
            <button
              onClick={() => scrollTo("identity")}
              data-web-hover="true"
              className="group border-0 bg-transparent cursor-pointer p-0 flex items-center gap-3 text-left focus:outline-none"
            >
              <span className="text-xs font-spidey tracking-[0.28em] uppercase text-zinc-400 group-hover:text-[#ff3a4a] transition-colors">
                SCROLL
              </span>
              <span className="text-xs font-mono tracking-[0.2em] text-zinc-500 group-hover:text-zinc-300 transition-colors uppercase">
                SWING DOWN
              </span>
              <span className="w-5 h-[1px] bg-zinc-600 group-hover:bg-[#ff3a4a] group-hover:w-8 transition-all" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Visual area on desktop for the 3D Lanyard Card */}
        <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center relative min-h-[500px] pointer-events-none">
          {/* Subtle Ambient Red Glow behind where the lanyard swings */}
          <div className="absolute w-[420px] lg:w-[520px] aspect-square rounded-full bg-radial from-[#ff2233]/20 via-[#ff2233]/5 to-transparent blur-3xl pointer-events-none bnd-glow-breath" />
        </div>
      </div>
    </section>
  );
};

export default SpideyHero;
