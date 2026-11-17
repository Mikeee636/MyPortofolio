"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Globe,
  Sparkles,
} from "lucide-react";
import { PROJECTS } from "../../data/projects";
import SpideyCosmicBackground from "../../components/SpideyCosmicBackground";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = PROJECTS.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );

  const [activePreview, setActivePreview] = useState<number>(0);

  if (!project) {
    notFound();
  }

  const totalPreviews = project.previewImages.length;

  const handlePrev = () => {
    setActivePreview((prev) => (prev - 1 + totalPreviews) % totalPreviews);
  };

  const handleNext = () => {
    setActivePreview((prev) => (prev + 1) % totalPreviews);
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-clip bg-[#050510] text-white">
      {/* Background Kosmik Portofolio */}
      <SpideyCosmicBackground />

      {/* Ambient Crimson Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[480px] w-[860px] rounded-full bg-red-600/20 blur-[150px]"
      />

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050510]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/#project-showcase"
            data-web-hover="true"
            className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2 text-xs font-bold tracking-wider text-white uppercase ring-1 ring-white/15 transition hover:bg-red-600"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Showcase</span>
          </Link>

          {/* Navigasi Cepat Antar Project */}
          <div className="hidden items-center gap-1.5 rounded-full bg-white/5 p-1 ring-1 ring-white/10 sm:flex">
            {PROJECTS.map((item) => {
              const isCurrent = item.slug === project.slug;
              return (
                <Link
                  key={item.id}
                  href={`/projects/${item.slug}`}
                  data-web-hover="true"
                  className={`rounded-full px-3.5 py-1 text-xs font-bold tracking-wider uppercase transition ${
                    isCurrent
                      ? "bg-red-600 text-white shadow-[0_0_16px_rgba(220,38,38,0.6)]"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-web-hover="true"
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-xs font-bold tracking-wider text-white uppercase shadow-[0_0_20px_rgba(220,38,38,0.5)] transition hover:bg-red-500"
          >
            <svg
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>Github</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-20 mx-auto max-w-6xl px-6 py-12 sm:py-16">
        {/* Project Title & Hero Info */}
        <div className="mb-10 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2.5">
              <span className="h-[2px] w-8 bg-red-500" />
              <span
                style={{ fontFamily: "'Oswald', sans-serif" }}
                className="text-xs font-semibold tracking-[0.3em] text-red-400 uppercase"
              >
                {project.year} {"//"} {project.subtitle}
              </span>
            </div>

            <h1
              style={{ fontFamily: "'Oswald', sans-serif" }}
              className="text-4xl font-extrabold tracking-wide text-white uppercase sm:text-6xl"
            >
              {project.title}
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-xl bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Main Interactive Browser Website Preview */}
        <div className="mb-12">
          <div className="overflow-hidden rounded-3xl border border-white/15 bg-zinc-950/90 shadow-[0_25px_90px_-15px_rgba(220,38,38,0.35)]">
            {/* Browser Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900/90 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-black/60 px-4 py-1 text-xs font-medium text-zinc-300 ring-1 ring-white/10">
                <Globe className="h-3.5 w-3.5 text-red-400" />
                <span>https://{project.previewDomain}</span>
              </div>

              <div className="text-xs font-semibold text-zinc-400">
                {activePreview + 1} / {totalPreviews}
              </div>
            </div>

            {/* Gambar Preview Website Utama — Full Resolusi Tanpa Terpotong */}
            <div className="relative w-full overflow-hidden bg-zinc-950">
              <img
                src={project.previewImages[activePreview].url}
                alt={project.previewImages[activePreview].caption}
                className="block h-auto w-full object-contain transition-all duration-500"
              />
            </div>

            {/* Caption & Navigasi Bar di Bawah Gambar (Tidak Menutupi Gambar) */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-zinc-900/95 px-6 py-4">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-red-400 uppercase">
                  Preview {activePreview + 1} dari {totalPreviews}
                </span>
                <p className="mt-0.5 text-sm font-semibold text-white sm:text-base">
                  {project.previewImages[activePreview].caption}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Gambar Sebelumnya"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md transition hover:bg-red-600"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Gambar Selanjutnya"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md transition hover:bg-red-600"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnail Selector untuk Beberapa Gambar Preview Website */}
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {project.previewImages.map((img, idx) => {
              const isSelected = idx === activePreview;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePreview(idx)}
                  data-web-hover="true"
                  className={`group relative overflow-hidden rounded-2xl border text-left transition-all duration-300 ${
                    isSelected
                      ? "border-red-500 ring-2 ring-red-500/50 scale-[1.02]"
                      : "border-white/10 opacity-75 hover:border-white/30 hover:opacity-100"
                  }`}
                >
                  <div className="w-full overflow-hidden bg-zinc-950">
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="block h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="border-t border-white/10 bg-zinc-950/95 p-2.5">
                    <p className="truncate text-xs font-medium text-zinc-200">
                      {idx + 1}. {img.caption}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail Deskripsi & Fitur Utama */}
        <div className="space-y-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-8">
          <div>
            <h2
              style={{ fontFamily: "'Oswald', sans-serif" }}
              className="text-2xl font-bold tracking-wide text-white uppercase"
            >
              Tentang Project <span className="text-red-500">{project.title}</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
              {project.longDescription}
            </p>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2 text-xs font-bold tracking-widest text-red-400 uppercase">
              <Sparkles className="h-4 w-4" />
              <span>Fitur Unggulan</span>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {project.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-zinc-200"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

