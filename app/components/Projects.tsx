"use client";

import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { GithubIcon } from "./Icons";
import { GoldenSpatula } from "./SpongebobIcons";

interface ProjectItem {
  id: string;
  suit: string;
  suitColor: string;
  year: string;
  title: string;
  roleTag: "Krusty Krab Fry Cook" | "Chum Bucket AI" | "Jellyfishing Mobile" | "Goo Lagoon UI";
  roleLabel: string;
  category: string;
  desc: string;
  tech: string[];
  demo: string;
  github: string;
}

const allProjects: ProjectItem[] = [
  {
    id: "01",
    suit: "♠",
    suitColor: "text-[var(--color-ink)]",
    year: "2026",
    title: "Nitroster E-Commerce",
    roleTag: "Krusty Krab Fry Cook",
    roleLabel: "Fry Cook (Full-Stack & POS)",
    category: "Full-Stack Coffee Commerce",
    desc: "Enterprise coffee ordering & POS system engineered with sub-second checkout, real-time stock sync via WebSockets, and Midtrans gateway integration.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Midtrans"],
    demo: "https://nitroster.vercel.app",
    github: "https://github.com/michaelandre/nitroster-commerce",
  },
  {
    id: "02",
    suit: "♥",
    suitColor: "text-[var(--color-coral)]",
    year: "2026",
    title: "NgodeYuk Interactive",
    roleTag: "Chum Bucket AI",
    roleLabel: "Reverse-Engineer (AI & Compilers)",
    category: "WebAssembly Code Sandbox",
    desc: "Interactive educational developer platform with client-side WebAssembly execution runtime, real-time WebRTC collaborative editing, and AST linting.",
    tech: ["React 19", "WebAssembly", "Monaco Editor", "Tailwind CSS", "WebRTC"],
    demo: "https://ngodeyuk.vercel.app",
    github: "https://github.com/michaelandre/ngodeyuk-sandbox",
  },
  {
    id: "03",
    suit: "♣",
    suitColor: "text-[var(--color-ink)]",
    year: "2025",
    title: "BetterLife Habit OS",
    roleTag: "Jellyfishing Mobile",
    roleLabel: "Field Explorer (Mobile & Offline-First)",
    category: "Local-First Productivity Suite",
    desc: "Privacy-first personal cockpit engineered around Atomic Habits. Features Dexie.js IndexedDB offline-first architecture with CRDT cloud synchronization.",
    tech: ["React Native", "Expo", "IndexedDB", "Tailwind CSS", "Supabase", "CRDT"],
    demo: "https://betterlife.vercel.app",
    github: "https://github.com/michaelandre/betterlife-app",
  },
  {
    id: "04",
    suit: "♦",
    suitColor: "text-[var(--color-coral)]",
    year: "2025",
    title: "SoulSpace Sanctuary",
    roleTag: "Goo Lagoon UI",
    roleLabel: "Sanctuary Designer (UI/UX Systems)",
    category: "Spatial Acoustic Wellness Hub",
    desc: "Atmospheric acoustic therapy platform with Web Audio API generative binaural beats, 60fps glassmorphic gestures, and serene design tokens.",
    tech: ["Next.js 14", "Web Audio API", "Framer Motion", "Tailwind CSS", "Design Systems"],
    demo: "https://soulspace.vercel.app",
    github: "https://github.com/michaelandre/soulspace-mindfulness",
  },
];

export default function Projects() {
  const { playBubble } = useTheme();
  const [selectedRole, setSelectedRole] = useState<string>("All");

  const roleOptions = [
    { id: "All", label: "All Positions" },
    { id: "Krusty Krab Fry Cook", label: "🍔 Fry Cook (Full-Stack & POS)" },
    { id: "Chum Bucket AI", label: "🔬 Chum Bucket (AI & WASM)" },
    { id: "Jellyfishing Mobile", label: "🪼 Jellyfishing (Mobile OS)" },
    { id: "Goo Lagoon UI", label: "🧘 Goo Lagoon (UI/UX Systems)" },
  ];

  const filteredProjects =
    selectedRole === "All"
      ? allProjects
      : allProjects.filter((p) => p.roleTag === selectedRole);

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="mx-auto max-w-[90rem] px-4 py-20 md:px-8 md:py-32"
    >
      {/* Header from Reference */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--color-rule)]">
        <div>
          <p className="label flex items-center gap-3 opacity-75 mb-3">
            <span>04</span>
            <span aria-hidden="true" className="text-base text-[var(--color-coral)]">
              #
            </span>
            <span aria-hidden="true" className="h-px w-10 bg-current opacity-50" />
            <span className="flex items-center gap-1.5 font-bold">
              <GoldenSpatula className="w-4 h-4 text-[var(--color-sponge)] inline" />
              <span>The Hand · Secret Formula Works</span>
            </span>
          </p>

          <h2 id="portfolio-heading" className="display text-[length:var(--text-3xl)]">
            Portfolio
          </h2>
          <p className="mt-2 text-sm sm:text-base opacity-80 max-w-xl font-medium">
            Projects crafted across specialized roles. Select a position below to filter the featured software tickets.
          </p>
        </div>

        {/* Roles Filter Bar (Opsi Pekerjaan yang Pernah Dikerjakan) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full border border-[var(--color-rule)] bg-[var(--color-ink)]/[0.03]">
          {roleOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => {
                playBubble();
                setSelectedRole(opt.id);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold label transition-all ${
                selectedRole === opt.id
                  ? "bg-[var(--color-ink)] text-[var(--color-paper)] shadow-xs"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Hand of Playing Cards Dealt Fan-Style */}
      <ul aria-label="Featured projects" className="hand mt-14">
        {filteredProjects.map((proj, idx) => (
          <li
            key={proj.id}
            className="pcard"
            style={{ "--i": idx } as React.CSSProperties}
          >
            <div className="pcard__face">
              {/* Corner Index Top-Left */}
              <span className={`pcard__index ${proj.suitColor}`}>
                {proj.id}
                <br />
                {proj.suit}
              </span>

              {/* Corner Index Bottom-Right */}
              <span className={`pcard__index pcard__index--end ${proj.suitColor}`}>
                {proj.id}
                <br />
                {proj.suit}
              </span>

              {/* Card Window Mockup with SpongeBob Role Badge */}
              <div className="pcard__window flex flex-col items-center justify-center p-4 text-center">
                <span className="label text-[0.6rem] opacity-75 font-bold uppercase tracking-wider">
                  {proj.roleLabel}
                </span>
                <p className="display text-xl mt-1 text-[var(--color-torii)] font-black">
                  {proj.title}
                </p>
                <span className="text-[10px] font-mono opacity-60 mt-0.5">
                  {proj.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="pcard__body flex-1 flex flex-col justify-between">
                <div>
                  <span className="label flex justify-between opacity-75 text-[0.65rem]">
                    <span>Recipe #{proj.id}</span>
                    <span>{proj.year}</span>
                  </span>

                  <h3 className="display mt-2 text-[clamp(1.6rem,2.2vw,2.2rem)] leading-tight">
                    {proj.title}
                  </h3>

                  <p className="mt-2 text-[0.85rem] leading-snug opacity-80 font-medium line-clamp-3">
                    {proj.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--color-rule)]">
                  {/* Tech stack tags */}
                  <ul className="label flex flex-wrap gap-x-2 gap-y-1 opacity-75 text-[0.6rem]">
                    {proj.tech.slice(0, 4).map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>

                  {/* Links */}
                  <div className="mt-4 flex items-center justify-between">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playBubble()}
                      className="label-link label text-[0.65rem] flex items-center gap-1 opacity-80 hover:opacity-100"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>

                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playBubble()}
                      className="label flex items-center gap-1 text-[0.7rem] font-bold text-[var(--color-torii)] hover:underline"
                    >
                      <span>Live demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {filteredProjects.length === 0 && (
        <div className="py-16 text-center">
          <p className="display text-2xl text-[var(--color-torii)]">No tickets under this position.</p>
          <button
            onClick={() => setSelectedRole("All")}
            className="mt-4 label text-xs px-4 py-2 rounded-full border border-current"
          >
            Show All Positions
          </button>
        </div>
      )}
    </section>
  );
}
