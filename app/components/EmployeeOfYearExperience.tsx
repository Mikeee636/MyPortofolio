"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { KrustyKrabHat, KrabbyPattyIcon, GoldenSpatula } from "./SpongebobIcons";

interface EmployeeAward {
  id: string;
  month: string;
  year: string;
  title: string;
  role: string;
  company: string;
  badge: string;
  type: "Championship" | "Academic" | "National Honor" | "Leadership";
  description: string;
  formulaNote: string;
  featured?: boolean;
}

const employeeAwards: EmployeeAward[] = [
  {
    id: "award-01",
    month: "Annual Grand Award",
    year: "2024",
    title: "1st Place Champion — National CEO Pitch Bootcamp",
    role: "Lead Software Architect & Pitch Presenter",
    company: "National Innovation Summit · Singapore & Jakarta",
    badge: "Golden Spatula Winner",
    type: "Championship",
    description:
      "Spearheaded technical architecture for an automated agricultural logistics platform. Pitched to 8 international venture partners and awarded 1st Place overall for technical feasibility and distributed architecture.",
    formulaNote: "Awarded top honor for scalable system design under high-pressure live jury defense.",
    featured: true,
  },
  {
    id: "award-02",
    month: "Consecutive 8x Honor",
    year: "2022 — 2025",
    title: "Summa Cum Laude Honor Roll — 3.98 Cumulative GPA",
    role: "Informatics Engineering Student",
    company: "Universitas Tarumanagara (UNTAR)",
    badge: "Grade A Code Spec",
    type: "Academic",
    description:
      "Consistently achieved top ranking across procedural programming, distributed systems, algorithms, and secure software engineering across all 5 active undergraduate semesters.",
    formulaNote: "Maintained 3.98 / 4.00 cumulative GPA with zero dropped modules.",
    featured: true,
  },
  {
    id: "award-03",
    month: "National Finalist",
    year: "2024",
    title: "Top 10 Finalist — National Student Robotics Competition (KRI)",
    role: "Autonomous Telemetry Programmer",
    company: "Ministry of Higher Education & University of Indonesia",
    badge: "Autonomous Navigation Honor",
    type: "National Honor",
    description:
      "Engineered real-time computer vision obstacle avoidance algorithms and sub-millisecond motor PID telemetry on embedded ARM hardware.",
    formulaNote: "Robot completed search-and-rescue obstacle tracks autonomously with 0 collision penalties.",
  },
  {
    id: "award-04",
    month: "Leadership Citation",
    year: "2023 — 2025",
    title: "Head Teaching Assistant & Lab Mentor (Algorithms)",
    role: "Faculty Laboratory Mentor",
    company: "Faculty of IT, Universitas Tarumanagara",
    badge: "Senior Crew Mentor",
    type: "Leadership",
    description:
      "Mentored 120+ undergraduates in Data Structures, Object-Oriented Programming, and algorithmic analysis in C++ and Java. Conducted weekly code reviews and grading.",
    formulaNote: "Recognized by faculty dean for outstanding student comprehension pass-rate of 94%.",
  },
  {
    id: "award-05",
    month: "Hackathon Sprint",
    year: "2024",
    title: "Top 10 Finalist — National Hackathon Find IT UGM",
    role: "Full-Stack Developer",
    company: "Universitas Gadjah Mada (UGM)",
    badge: "Rapid Prototyping Honor",
    type: "National Honor",
    description:
      "Architected and deployed a resilient offline-first emergency mesh communication progressive web application within a continuous 36-hour competitive sprint.",
    formulaNote: "PWA functioned flawlessly offline utilizing Service Workers and IndexedDB sync.",
  },
  {
    id: "award-06",
    month: "Community Honor",
    year: "2024 — 2025",
    title: "Google Developer Groups (GDG) On-Campus Core Team",
    role: "Technical Workshop Speaker",
    company: "Google Developer Student Clubs",
    badge: "Developer Ambassador",
    type: "Leadership",
    description:
      "Organized and hosted campus technical workshops covering modern frontend architectures, Next.js, and Google Cloud serverless deployments.",
    formulaNote: "Engaged 300+ university attendees across interactive hands-on coding bootcamps.",
  },
];

export function EmployeeOfYearExperience() {
  const { playBubble } = useTheme();
  const [selectedAward, setSelectedAward] = useState<EmployeeAward | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Championship", "Academic", "National Honor", "Leadership"];

  const filteredAwards =
    activeFilter === "All"
      ? employeeAwards
      : employeeAwards.filter((a) => a.type === activeFilter);

  return (
    <section
      id="credentials"
      aria-labelledby="employee-heading"
      className="mx-auto max-w-[90rem] px-4 py-20 md:px-8 md:py-32"
    >
      {/* Header Styled as the Krusty Krab Hall of Fame */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--color-rule)]">
        <div>
          <p className="label flex items-center gap-3 opacity-80 mb-3">
            <span>05</span>
            <span aria-hidden="true" className="text-base text-[var(--color-torii)]">
              HONOR
            </span>
            <span aria-hidden="true" className="h-px w-10 bg-current opacity-50" />
            <span className="flex items-center gap-1.5 text-[var(--color-torii)] font-bold">
              <KrustyKrabHat className="w-5 h-5 inline" />
              <span>Employee of the Year Wall</span>
            </span>
          </p>

          <h2 id="employee-heading" className="display text-[length:var(--text-3xl)]">
            Experience &amp; Hall of Fame
          </h2>

          <p className="mt-2 text-sm sm:text-base opacity-80 max-w-2xl font-medium">
            Inspired by the legendary Krusty Krab Employee of the Month wall. A gallery of verified professional achievements, national competition championships, and academic milestones.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full border border-[var(--color-rule)] bg-[var(--color-ink)]/[0.03]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playBubble();
                setActiveFilter(cat);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold label transition-all ${
                activeFilter === cat
                  ? "bg-[var(--color-ink)] text-[var(--color-paper)] shadow-xs"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Krusty Krab Wooden Framed Gallery Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredAwards.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            whileHover={{ y: -6 }}
            onClick={() => {
              playBubble();
              setSelectedAward(item);
            }}
            className="group relative rounded-2xl border-2 border-[var(--color-ink)] p-5 sm:p-6 bg-[var(--color-paper)] shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
          >
            {/* Top Ornamental Frame Header with Brass Plaque Effect */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-dashed border-[var(--color-rule)]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[var(--color-sponge)] text-slate-950 flex items-center justify-center font-bold text-xs shadow-xs">
                    ★
                  </div>
                  <span className="label text-[0.65rem] font-bold tracking-wider opacity-80">
                    {item.month} · {item.year}
                  </span>
                </div>

                <span className="semester-pill text-[0.6rem] px-2 py-0.5">
                  {item.badge}
                </span>
              </div>

              {/* Title & Organization */}
              <h3 className="display text-xl sm:text-2xl group-hover:text-[var(--color-torii)] transition-colors leading-tight">
                {item.title}
              </h3>

              <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold opacity-75">
                <Award className="w-3.5 h-3.5 text-[var(--color-torii)] shrink-0" />
                <span>{item.company}</span>
              </div>

              {/* Role */}
              <p className="mt-2 text-[0.75rem] font-mono opacity-70">
                Role: <span className="font-bold opacity-100">{item.role}</span>
              </p>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm opacity-80 leading-relaxed font-medium line-clamp-3">
                {item.description}
              </p>
            </div>

            {/* Bottom Brass Nameplate Strip */}
            <div className="mt-6 pt-3 border-t border-[var(--color-rule)] flex items-center justify-between">
              <span className="label text-[0.65rem] opacity-60 flex items-center gap-1">
                <GoldenSpatula className="w-3.5 h-3.5 text-[var(--color-sponge)] inline" />
                <span>Verified Record</span>
              </span>

              <span className="label text-[0.7rem] font-bold text-[var(--color-torii)] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>View Plaque</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal: Detailed Employee of the Month Plaque */}
      <AnimatePresence>
        {selectedAward && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                playBubble();
                setSelectedAward(null);
              }}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
            />

            {/* Framed Plaque Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-xl bg-[var(--color-paper)] text-[var(--color-ink)] border-2 border-[var(--color-ink)] rounded-2xl p-6 sm:p-8 shadow-2xl z-10"
            >
              {/* Header with Krusty Hat */}
              <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <KrustyKrabHat className="w-10 h-10" />
                  <div>
                    <span className="label text-[0.65rem] opacity-75">
                      Krusty Krab Official Honors Division
                    </span>
                    <h3 className="display text-2xl sm:text-3xl">
                      {selectedAward.badge}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => {
                    playBubble();
                    setSelectedAward(null);
                  }}
                  className="p-1.5 rounded-full border border-[var(--color-rule)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors text-xs font-bold"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              {/* Award Content */}
              <div className="space-y-3">
                <div className="label text-xs text-[var(--color-torii)] font-bold">
                  {selectedAward.month} · {selectedAward.year}
                </div>
                <h4 className="display text-xl sm:text-2xl leading-snug">
                  {selectedAward.title}
                </h4>
                <p className="text-xs font-mono opacity-80">
                  Issued by: <span className="font-bold">{selectedAward.company}</span>
                </p>

                <div className="p-4 rounded-xl border border-[var(--color-rule)] bg-[var(--color-ink)]/[0.03] text-xs sm:text-sm leading-relaxed mt-4">
                  {selectedAward.description}
                </div>

                <div className="p-3 rounded-xl border border-dashed border-[var(--color-rule)] bg-amber-400/10 text-xs">
                  <p className="font-semibold text-[var(--color-sponge)]">Secret Formula Performance Citation:</p>
                  <p className="opacity-90 mt-0.5">{selectedAward.formulaNote}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-[var(--color-rule)] flex items-center justify-between">
                <span className="label text-[0.65rem] opacity-70 flex items-center gap-1.5">
                  <KrabbyPattyIcon className="w-4 h-4" />
                  <span>Krusty Krab Registry #BK-99-OK</span>
                </span>

                <button
                  onClick={() => {
                    playBubble();
                    setSelectedAward(null);
                  }}
                  className="px-4 py-1.5 rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] label text-xs"
                >
                  Close Plaque
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
