"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Database,
  Globe,
  Terminal,
  Trophy,
  Award,
  Server,
  Layers,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  skills: { name: string; level: number; note: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Craftsmanship",
    icon: <Globe className="w-4 h-4 text-[#F4D35E]" />,
    description: "High-performance reactive interfaces with sub-frame animation fidelity.",
    skills: [
      { name: "Next.js 14 / 15 (App Router)", level: 95, note: "SSR, ISR, Server Actions" },
      { name: "TypeScript", level: 92, note: "Strict typing & generics" },
      { name: "React 19 & React Native", level: 94, note: "Hooks, Suspense, Zustand" },
      { name: "Tailwind CSS & Vanilla CSS", level: 96, note: "Custom tokens, responsive glass" },
      { name: "Framer Motion", level: 90, note: "Physics springs & orchestrations" },
    ],
  },
  {
    id: "backend",
    name: "Backend & Systems",
    icon: <Server className="w-4 h-4 text-sky-400" />,
    description: "Scalable REST & GraphQL pipelines engineered for low-latency queries.",
    skills: [
      { name: "Node.js & Express", level: 90, note: "Event loop optimization" },
      { name: "Laravel (PHP)", level: 85, note: "Eloquent ORM, Blade, Queues" },
      { name: "REST APIs & WebSockets", level: 92, note: "Real-time sync protocols" },
      { name: "Python / FastAPI", level: 84, note: "Async data microservices" },
    ],
  },
  {
    id: "database",
    name: "Data & Storage Tier",
    icon: <Database className="w-4 h-4 text-emerald-400" />,
    description: "ACID-compliant storage architectures and fast caching layers.",
    skills: [
      { name: "PostgreSQL & Prisma", level: 91, note: "Relational schemas, indexes" },
      { name: "Supabase & Firebase", level: 92, note: "Row Level Security, auth" },
      { name: "MongoDB & Mongoose", level: 86, note: "Document store collections" },
      { name: "Redis & In-Memory Caches", level: 80, note: "Session & rate limiting" },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Tooling",
    icon: <Terminal className="w-4 h-4 text-rose-400" />,
    description: "CI/CD pipelines, containerization, and modern DX workflows.",
    skills: [
      { name: "Git & GitHub Workflows", level: 95, note: "Branch hygiene, actions" },
      { name: "Docker & Containerization", level: 82, note: "Multi-stage builds" },
      { name: "Vercel & Cloudflare Edge", level: 94, note: "Edge computing, DNS" },
      { name: "Postman & API Testing", level: 90, note: "Automated regression suites" },
    ],
  },
];

const achievements = [
  {
    rank: "1st Place",
    title: "National CEO Pitch Bootcamp 2024",
    organizer: "National Innovation Summit",
    description:
      "Engineered an automated AI-driven agricultural supply-chain MVP and pitched to 8 venture partners, winning overall best technical architecture.",
    tag: "Championship Gold",
    color: "#F4D35E",
  },
  {
    rank: "Top 10 Finalist",
    title: "National Robotics Competition (KRI)",
    organizer: "Ministry of Education & Tech",
    description:
      "Programmed computer-vision obstacle avoidance heuristics and microsecond motor telemetry for autonomous rescue bots.",
    tag: "National Finalist",
    color: "#38BDF8",
  },
  {
    rank: "Top 10 Finalist",
    title: "UGM National Hackathon 2023",
    organizer: "Universitas Gadjah Mada",
    description:
      "Developed a disaster-relief offline mesh communications network prototype within 36 straight hours.",
    tag: "Hackathon Elite",
    color: "#34D399",
  },
  {
    rank: "Honorable",
    title: "Head Teaching Assistant — Algorithms",
    organizer: "Faculty of IT, Universitas Tarumanagara",
    description:
      "Mentored 120+ undergraduates across Data Structures, Object-Oriented Programming, and algorithmic analysis in C++ and Java.",
    tag: "Academic Leadership",
    color: "#A78BFA",
  },
];

export const TechStackBento: React.FC = () => {
  const { playPopSound } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>("frontend");

  const currentCategory =
    skillCategories.find((c) => c.id === selectedCategory) || skillCategories[0];

  return (
    <section id="tech" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <span id="experience" className="absolute -top-24" />
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4D35E]/10 border border-[#F4D35E]/20 text-[#F4D35E] text-xs font-semibold uppercase tracking-widest mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Arsenal & Telemetry</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Battle-Tested <span className="text-gradient-sponge">Stack & Credentials</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3">
          A granular look into the technologies I wield daily and key milestones earned through rigorous hackathons and academic leadership.
        </p>
      </div>

      {/* Main Grid: Stack Matrix (Left 7 cols) & Accolades (Right 5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Tech Stack Matrix */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Category Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {skillCategories.map((cat) => {
              const isSelected = cat.id === selectedCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    playPopSound();
                    setSelectedCategory(cat.id);
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? "bg-white/[0.08] border-[#F4D35E]/40 shadow-lg shadow-[#F4D35E]/5"
                      : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] text-slate-400"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-1.5 rounded-lg bg-white/5">{cat.icon}</div>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F4D35E] shadow-sm shadow-[#F4D35E]" />
                    )}
                  </div>
                  <div
                    className={`text-xs font-bold ${
                      isSelected ? "text-white" : "text-slate-400"
                    }`}
                  >
                    {cat.name.split(" ")[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Category Skills Detail Card */}
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 flex-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    {currentCategory.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {currentCategory.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {currentCategory.description}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-500 uppercase">
                  {currentCategory.skills.length} Modules
                </span>
              </div>

              {/* Skills List with Progress Bars */}
              <div className="space-y-4">
                {currentCategory.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F4D35E]" />
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{skill.note}</span>
                    </div>

                    {/* Progress track */}
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: sIdx * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-[#F4D35E] via-sky-400 to-[#F4D35E]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom info pill */}
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#F4D35E]" />
                Architecture validated for high-concurrency environments
              </span>
              <span className="font-mono text-[11px] text-slate-500">v2.6 Enterprise</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Competition Accolades & Leadership Podiums */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#F4D35E]" />
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Competition & Honors
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F4D35E]/10 border border-[#F4D35E]/20 text-[#F4D35E]">
                  Verified
                </span>
              </div>

              {/* Achievements Stack */}
              <div className="space-y-3.5">
                {achievements.map((item, aIdx) => (
                  <motion.div
                    key={aIdx}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: aIdx * 0.1 }}
                    className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md"
                        style={{
                          backgroundColor: `${item.color}18`,
                          color: item.color,
                          border: `1px solid ${item.color}30`,
                        }}
                      >
                        {item.rank}
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {item.tag}
                      </span>
                    </div>

                    <div className="text-sm font-bold text-white group-hover:text-[#F4D35E] transition-colors">
                      {item.title}
                    </div>
                    <div className="text-[11px] font-medium text-slate-400 mt-0.5">
                      {item.organizer}
                    </div>
                    <p className="text-xs text-slate-400/90 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Citation */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#F4D35E]" />
                All certifications backed by faculty transcripts
              </span>
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
