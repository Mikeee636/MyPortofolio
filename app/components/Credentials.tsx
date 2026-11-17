"use client";

import React from "react";
import { Award } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Credentials() {
  const { playBubble } = useTheme();

  const honors = [
    {
      title: "Pitch CEO Bootcamp International",
      issuer: "International Venture Summit",
      badge: "1st Place Champion",
      year: "2025",
      type: "Competition",
      desc: "Won first place in an international deep-tech business pitch centered on multi-agent AI integration and scalable cloud systems.",
    },
    {
      title: "National Student Robotics Competition",
      issuer: "University of Indonesia",
      badge: "Top 10 Finalist",
      year: "2024",
      type: "Robotics",
      desc: "Designed and programmed a microcontroller robot with adaptive PID control algorithms optimized for high-speed precision navigation.",
    },
    {
      title: "Hackathon Find IT UGM",
      issuer: "Universitas Gadjah Mada",
      badge: "Top 10 Finalist",
      year: "2025",
      type: "Hackathon",
      desc: "Engineered a rapid mobile productivity prototype within an intense 48-hour competitive sprint in team collaboration.",
    },
    {
      title: "Web & AI Research Assistant",
      issuer: "Faculty of Information Technology",
      badge: "Academic Honor",
      year: "2024 — Present",
      type: "Leadership",
      desc: "Assisting faculty researchers in developing conversational AI interfaces, NLP pipelines, and interactive student learning modules.",
    },
    {
      title: "Teaching Assistant (Frontend Programming)",
      issuer: "Computer Science Laboratory",
      badge: "Mentor",
      year: "2023 — 2024",
      type: "Teaching",
      desc: "Mentored over 100 undergraduate students across modern web engineering (HTML5, CSS3, JavaScript, React).",
    },
    {
      title: "Google Student Ambassador",
      issuer: "GDG on Campus",
      badge: "Ambassador",
      year: "2024 — 2025",
      type: "Community",
      desc: "Spearheaded technical workshops on web and cloud architectures, driving campus developer literacy and digital innovation.",
    },
  ];

  return (
    <section id="credentials" aria-labelledby="credentials-heading" className="mx-auto max-w-[90rem] px-4 py-20 md:px-8 md:py-32">
      
      {/* Header from Reference */}
      <div className="flex flex-wrap items-end justify-between gap-6">
        <header>
          <p className="label flex items-center gap-3 opacity-75">
            <span>05</span>
            <span aria-hidden="true" className="text-base tracking-normal text-[var(--color-coral)]">
              CERT
            </span>
            <span aria-hidden="true" className="h-px w-10 bg-current opacity-50" />
            <span>Credentials</span>
          </p>
          <h2 id="credentials-heading" className="display mt-4 text-[length:var(--text-3xl)]">
            Honors &amp; Records
          </h2>
        </header>

        <span className="label opacity-75 flex items-center gap-1.5">
          <Award className="w-4 h-4 text-[var(--color-sponge)]" />
          <span>Krusty Krab Hall of Fame</span>
        </span>
      </div>

      {/* Record Rows List matching reference */}
      <div className="mt-12 border-t border-[var(--color-rule)]">
        {honors.map((item, idx) => (
          <div
            key={idx}
            onClick={() => playBubble()}
            className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-6 border-b border-[var(--color-rule)] hover:bg-[var(--color-ink)]/[0.03] px-2 rounded-lg transition-colors cursor-pointer"
          >
            <div className="flex items-start md:items-center gap-4">
              <span className="label font-mono text-xs opacity-50 w-6 shrink-0 mt-1 md:mt-0">
                0{idx + 1}
              </span>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="display text-xl sm:text-2xl group-hover:text-[var(--color-coral)] transition-colors">
                    {item.title}
                  </h3>
                  <span className="label text-[0.65rem] px-2 py-0.5 rounded-full bg-[var(--color-sponge)] text-slate-900 font-bold">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm opacity-75 mt-1 font-medium max-w-2xl">
                  {item.desc}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 shrink-0 pl-10 md:pl-0">
              <span className="label text-[0.7rem] opacity-65">{item.issuer}</span>
              <span className="label font-mono text-[0.7rem] opacity-50">{item.year}</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
