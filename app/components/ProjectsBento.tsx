"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, X, Layers, Code2, ArrowUpRight, Flame, ShieldCheck } from "lucide-react";
import { GithubIcon } from "./Icons";
import { useTheme } from "../context/ThemeContext";

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Full-Stack" | "Mobile App" | "AI / System" | "E-Commerce";
  description: string;
  architectureDetails: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  gradient: string;
  accentColor: string;
  badge: string;
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "nitroster",
    title: "Nitroster E-Commerce",
    tagline: "High-performance Specialty Cold Brew Platform & POS",
    category: "Full-Stack",
    description:
      "Enterprise-grade coffee ordering and inventory management system designed for multi-branch roasting houses. Features real-time stock sync via WebSockets, sub-second checkout, and automated invoices.",
    architectureDetails: [
      "Event-driven architecture with optimistic UI updates and instant cart synchronisation.",
      "PostgreSQL with ACID-compliant transactions for inventory locking during high-traffic drops.",
      "Integrated Midtrans payment gateway and automated email receipt generation.",
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "Checkout Latency", value: "< 240ms" },
      { label: "Catalog Items", value: "250+ SKUs" },
    ],
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Midtrans"],
    gradient: "from-[#F4D35E]/15 via-[#F4D35E]/5 to-transparent",
    accentColor: "#F4D35E",
    badge: "The Krabby Formula",
    demoUrl: "https://nitroster.vercel.app",
    githubUrl: "https://github.com/michaelandre/nitroster-commerce",
    featured: true,
  },
  {
    id: "ngodeyuk",
    title: "NgodeYuk Interactive",
    tagline: "Next-gen Interactive Code Sandbox & Algorithmic Playground",
    category: "AI / System",
    description:
      "Gamified developer learning environment with isolated WebAssembly execution runtimes. Offers live code sharing, AST-based linting feedback, and peer code review rooms.",
    architectureDetails: [
      "Client-side WebAssembly sandbox preventing malicious execution while maintaining zero server compute cost.",
      "Real-time collaborative cursor syncing utilizing WebRTC data channels.",
      "Automated automated grading unit-tests executed in parallel.",
    ],
    metrics: [
      { label: "Code Run Speed", value: "~18ms (WASM)" },
      { label: "Active Challengers", value: "1,400+" },
      { label: "Supported Languages", value: "6 Runtimes" },
    ],
    tags: ["React 19", "WASM", "Monaco Editor", "Tailwind CSS", "WebRTC", "Zustand"],
    gradient: "from-sky-500/15 via-sky-500/5 to-transparent",
    accentColor: "#38BDF8",
    badge: "Kitchen Telemetry",
    demoUrl: "https://ngodeyuk.vercel.app",
    githubUrl: "https://github.com/michaelandre/ngodeyuk-sandbox",
    featured: true,
  },
  {
    id: "betterlife",
    title: "BetterLife Habit OS",
    tagline: "Minimalist Cognitive Habit Tracker & Deep Focus Suite",
    category: "Mobile App",
    description:
      "A privacy-first personal productivity dashboard engineered around Atomic Habits methodologies. Encrypted local-first database with seamless multi-device cloud backup.",
    architectureDetails: [
      "Offline-first architecture with Dexie.js (IndexedDB) and CRDT sync resolution.",
      "Ultra-low latency Pomodoro state engine with Web Audio ambient soundscapes.",
      "Zero telemetry tracking — end-to-end encrypted biometric vault.",
    ],
    metrics: [
      { label: "Local Sync Time", value: "< 5ms" },
      { label: "Daily Active Users", value: "3.2k+" },
      { label: "App Size", value: "1.2 MB" },
    ],
    tags: ["React Native", "Expo", "IndexedDB", "Tailwind CSS", "CRDT", "Supabase"],
    gradient: "from-emerald-500/15 via-emerald-500/5 to-transparent",
    accentColor: "#34D399",
    badge: "Kelp Shake Protocol",
    demoUrl: "https://betterlife.vercel.app",
    githubUrl: "https://github.com/michaelandre/betterlife-app",
  },
  {
    id: "soulspace",
    title: "SoulSpace Wellbeing",
    tagline: "Atmospheric Acoustic Therapy & Guided Mindfulness Hub",
    category: "E-Commerce",
    description:
      "Immersive spatial audio player and guided journaling system created to help software engineers overcome burnout with generative binaural audio algorithms.",
    architectureDetails: [
      "Web Audio API parametric equalizer dynamically shaping ambient soundscapes based on user pulse input.",
      "Framer Motion fluid page gestures with 60fps glassmorphism transitions.",
      "Contentful headless CMS powering clinical therapist-approved breathing guides.",
    ],
    metrics: [
      { label: "Audio Precision", value: "32-bit Float" },
      { label: "Avg Session Length", value: "18.4 mins" },
      { label: "User Retention", value: "72%" },
    ],
    tags: ["Next.js 14", "Web Audio API", "Framer Motion", "Contentful", "Tailwind CSS"],
    gradient: "from-rose-500/15 via-rose-500/5 to-transparent",
    accentColor: "#FB7185",
    badge: "Jellyfish Fields Sanctuary",
    demoUrl: "https://soulspace.vercel.app",
    githubUrl: "https://github.com/michaelandre/soulspace-mindfulness",
  },
];

export const ProjectsBento: React.FC = () => {
  const { playPopSound, playSpatulaSound } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Full-Stack", "AI / System", "Mobile App", "E-Commerce"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleOpenRecipe = (p: Project) => {
    playSpatulaSound();
    setSelectedProject(p);
  };

  const handleClose = () => {
    playPopSound();
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Decorative ambient ocean glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#F4D35E]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4D35E]/10 border border-[#F4D35E]/20 text-[#F4D35E] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Secret Formula Menu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Featured <span className="text-gradient-sponge">Works & Systems</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Selected engineering breakthroughs, client projects, and open-source recipes refined with production-level craftsmanship.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md self-start md:self-auto">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playPopSound();
                  setActiveFilter(cat);
                }}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-[#F4D35E] text-slate-950 font-bold shadow-md shadow-[#F4D35E]/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => {
          const isLarge = idx === 0 && activeFilter === "All";
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`group relative rounded-3xl overflow-hidden glass-card p-6 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all duration-300 ${
                isLarge ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              {/* Card subtle gradient backdrop */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Card Top: Badges & Category */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 border border-white/10 text-slate-300">
                      {project.category}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${project.accentColor}18`,
                        color: project.accentColor,
                        border: `1px solid ${project.accentColor}30`,
                      }}
                    >
                      {project.badge}
                    </span>
                  </div>

                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#F4D35E] px-2 py-0.5 rounded-full bg-[#F4D35E]/10 border border-[#F4D35E]/20">
                      <Flame className="w-3 h-3 text-[#F4D35E]" />
                      Flagship
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#F4D35E] transition-colors duration-300 flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-[#F4D35E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                  {project.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed mt-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Metrics pill row for large cards */}
                {isLarge && (
                  <div className="grid grid-cols-3 gap-3 my-5 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className="text-xs font-bold text-white font-mono">{m.value}</div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Bottom: Tags & Trigger */}
              <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 max-w-sm">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-lg bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[11px] font-mono px-1.5 py-0.5 text-slate-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Button: Open Secret Recipe */}
                <button
                  onClick={() => handleOpenRecipe(project)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#F4D35E] hover:text-slate-950 text-white transition-all duration-300"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Inspect Recipe</span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ================= Secret Recipe Detail Modal ================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-[#0B132B]/95 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
            >
              {/* Decorative top accent border */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: selectedProject.accentColor }}
              />

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close recipe"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="pr-10">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${selectedProject.accentColor}20`,
                      color: selectedProject.accentColor,
                    }}
                  >
                    {selectedProject.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Recipe Spec #{selectedProject.id.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1 font-medium">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Summary */}
              <div className="mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-sm text-slate-300 leading-relaxed">
                {selectedProject.description}
              </div>

              {/* Architectural Breakdown */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-[#F4D35E]" />
                  <span>Architecture & Secret Formula Ingredients</span>
                </h4>
                <ul className="space-y-2">
                  {selectedProject.architectureDetails.map((detail, dIdx) => (
                    <li
                      key={dIdx}
                      className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/5"
                    >
                      <ShieldCheck className="w-4 h-4 text-[#F4D35E] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Telemetry Metrics */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {selectedProject.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center"
                  >
                    <div className="text-sm font-bold text-white font-mono">{m.value}</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Full Tech Stack */}
              <div className="mt-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Technologies Used
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 text-slate-200 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F4D35E] hover:bg-[#ffe58f] text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-[#F4D35E]/20"
                  >
                    <span>Launch Live Preview</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs transition-colors border border-white/10"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                </div>

                <button
                  onClick={handleClose}
                  className="text-xs font-medium text-slate-400 hover:text-white px-3 py-2 transition-colors"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
