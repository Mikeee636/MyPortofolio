"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GraduationCap, Award, MapPin, Sparkles, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function AboutBento() {
  const { playBubble } = useTheme();
  const [activeSem, setActiveSem] = useState(5);

  const semesterHighlights: Record<number, string> = {
    1: "Sem 1: Fundamental procedural logic, discrete structures, and calculus.",
    2: "Sem 2: Object-oriented programming paradigms, algorithms, and design patterns.",
    3: "Sem 3: Distributed database modeling, SQL/NoSQL indexing, and system architecture.",
    4: "Sem 4: Modern web applications, React ecosystem, and secure RESTful pipelines.",
    5: "Sem 5 (Current): Advanced software engineering, AI interface research, and cloud microservices.",
    6: "Sem 6: High-concurrency systems, container orchestration, and international sprints.",
    7: "Sem 7: CI/CD automation, site reliability engineering, and enterprise architecture.",
    8: "Sem 8: Final engineering capstone and production-ready industry deployment.",
  };

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/20 bg-amber-400/10 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Employee of the Month Board</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Background &amp; Digital Pedigree
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md">
          A disciplined approach to software craft: balancing high-throughput system architecture with delightful, accessible user journeys.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Bento Tile 1: Corporate "Employee of the Month" Glassmorphic Pass (7 Cols) */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="md:col-span-7 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
        >
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between pb-6 border-b border-white/10 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300">
                OFFICIAL CORRIDOR PASS · ID #99
              </span>
            </div>
            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950 shadow-sm">
              ★ Employee of the Month
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center my-6 relative z-10">
            {/* Photo Frame */}
            <div className="sm:col-span-5 flex justify-center">
              <div className="relative w-40 h-48 rounded-2xl overflow-hidden border border-white/15 p-1 bg-white/5 shadow-inner">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-800">
                  <Image
                    src="/profile.jpg"
                    alt="Michael Andre Antoro"
                    fill
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    sizes="160px"
                  />
                </div>
              </div>
            </div>

            {/* Credentials Info */}
            <div className="sm:col-span-7 space-y-3">
              <div>
                <p className="text-xs font-mono uppercase text-slate-400">Software Engineer</p>
                <h3 className="font-display font-extrabold text-2xl text-white">
                  Michael Andre Antoro
                </h3>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300">
                <p className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Universitas Tarumanagara (UNTAR)</span>
                </p>
                <p className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Bachelor of Science in Information Technology</span>
                </p>
                <p className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full-Stack &amp; Web Systems Laboratory</span>
                </p>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                  Krusty Krab Code Spec: Grade A Honors
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 relative z-10">
            <span>Jakarta Tech Hub</span>
            <span className="font-mono">Security Hash: BK-99-OK</span>
          </div>
        </motion.div>

        {/* Bento Tile 2: Academic Precision & Semester Progression (5 Cols) */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="md:col-span-5 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Academic Metric
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                Honor Roll
              </span>
            </div>

            <div className="mb-6">
              <p className="font-display font-black text-5xl text-amber-300 tracking-tight">
                3.98
                <span className="text-lg font-sans font-bold text-slate-400 ml-1">/ 4.00</span>
              </p>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mt-3">
                <div className="h-full bg-gradient-to-r from-amber-400 via-yellow-300 to-emerald-400 rounded-full w-[99.5%]" />
              </div>
              <p className="text-xs text-slate-400 mt-2 font-medium">
                High distinction across algorithmic and distributed computing courses.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-semibold text-slate-300">
                Semester Timeline (Lap 1 — 8)
              </span>
              <span className="text-[11px] font-mono text-amber-300 font-bold">
                Sem {activeSem} of 8
              </span>
            </div>

            {/* 8 Semester Ticks */}
            <div className="grid grid-cols-8 gap-1.5">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setActiveSem(s);
                    playBubble();
                  }}
                  className={`py-1.5 rounded-lg text-center font-mono text-[10px] transition-all ${
                    s === activeSem
                      ? "bg-amber-400 text-slate-950 font-bold shadow-sm"
                      : s < 5
                      ? "bg-sky-500/20 text-sky-200 border border-sky-500/30 hover:bg-sky-500/30"
                      : "bg-white/5 text-slate-500 border border-white/5 hover:bg-white/10"
                  }`}
                  title={`Semester ${s}`}
                >
                  {s}
                </button>
              ))}
            </div>

            <p className="text-[11px] text-slate-300 font-mono mt-3 p-2 rounded-xl bg-white/[0.03] border border-white/5 leading-relaxed">
              {semesterHighlights[activeSem]}
            </p>
          </div>
        </motion.div>

        {/* Bento Tile 3: Core Engineering Principles (6 Cols) */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="md:col-span-6 glass-card rounded-3xl p-6 sm:p-7"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Kitchen Philosophy
            </span>
            <span className="text-[10px] font-mono text-amber-300">Formula Standards</span>
          </div>

          <h3 className="font-display font-bold text-xl text-white mb-3">
            Architectural Reliability &amp; Precision
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <p className="font-semibold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                Zero-Drag Delivery
              </p>
              <p className="text-slate-400 text-[11px]">
                Sub-second page loads, optimized payloads, and 100 Lighthouse performance scores.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <p className="font-semibold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                Resilient Architecture
              </p>
              <p className="text-slate-400 text-[11px]">
                Strongly typed TypeScript schemas, modular components, and predictable state.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bento Tile 4: Geolocation & Operating Hours (6 Cols) */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="md:col-span-6 glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Node Coordinates
              </span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                Online &amp; Active
              </span>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 text-sky-300 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-display font-bold text-lg text-white">
                  Jakarta, Indonesia
                </p>
                <p className="text-xs font-mono text-slate-400">
                  Coordinates: 6°10′S 106°47′E · UTC+7
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              Bikini Bottom Web Station
            </span>
            <span className="text-[11px] font-mono text-amber-300">
              Avg. Response: &lt; 24h
            </span>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
