"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { KrabbyPattyIcon, JellyfishIcon } from "./SpongebobIcons";

export default function Learning() {
  const { playBubble } = useTheme();

  return (
    <section id="learning" aria-labelledby="learning-heading" className="mx-auto max-w-[90rem] px-4 py-20 md:px-8 md:py-32">
      
      {/* Section Header from Reference */}
      <header>
        <p className="label flex items-center gap-3 opacity-75">
          <span>03</span>
          <span aria-hidden="true" className="text-base tracking-normal text-[var(--color-coral)]">
            SKILL
          </span>
          <span aria-hidden="true" className="h-px w-10 bg-current opacity-50" />
          <span>Studying now</span>
        </p>
        <h2 id="learning-heading" className="display mt-4 text-[length:var(--text-3xl)]">
          Current Learning
        </h2>
      </header>

      {/* Article 01 from Reference */}
      <article className="grid items-center gap-10 border-t border-[var(--color-rule)] py-14 md:grid-cols-12 md:py-20 mt-10">
        
        {/* Text Col on Right (Order 2 on MD) */}
        <div className="relative md:col-span-5 md:order-2 md:col-start-8">
          <p className="label opacity-75">01 / 02</p>
          <div className="mt-4 flex flex-col items-start gap-6 md:flex-row">
            <p aria-hidden="true" className="tategaki text-[clamp(2.5rem,5vw,4.5rem)] text-[var(--color-sponge)] font-bold">
              TECH
            </p>
            <div>
              <h3 className="display text-[clamp(2rem,4vw,3.5rem)]">
                Next.js 15 &amp; React 19
              </h3>
              <p className="mt-4 max-w-[34ch] text-sm md:text-base opacity-80 leading-relaxed font-medium">
                Deepening architecture patterns with Next.js 15 App Router, React 19 Server Components, SSR caching strategies, and ultra-lean bundle footprints.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="label text-[0.65rem] px-2.5 py-1 rounded-md border border-[var(--color-rule)] bg-amber-400/10 text-amber-600 dark:text-amber-400">
                  Secret Formula Standard
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Graphic on Left (Order 1 on MD) */}
        <div className="md:col-span-6 md:order-1 flex justify-center">
          <div
            onClick={() => playBubble()}
            className="relative flex aspect-[4/3] w-full max-w-lg items-center justify-center rounded-2xl border border-[var(--color-ink)] p-8 bg-[var(--color-paper)] shadow-md hover:shadow-xl transition-all cursor-pointer group"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-sponge)]/20 border border-[var(--color-sponge)] flex items-center justify-center group-hover:scale-110 transition-transform">
                <KrabbyPattyIcon className="w-9 h-9" />
              </div>
              <div>
                <p className="label tracking-[0.2em] text-xs opacity-80">Full-Stack Architecture</p>
                <p className="font-mono text-xs opacity-65 mt-1">Turbopack · Server Actions · TypeScript 5</p>
              </div>
            </div>
          </div>
        </div>

      </article>

      {/* Article 02 from Reference */}
      <article className="grid items-center gap-10 border-t border-[var(--color-rule)] py-14 md:grid-cols-12 md:py-20">
        
        {/* Text Col on Left (Order 1 on MD) */}
        <div className="relative md:col-span-5 md:order-1">
          <p className="label opacity-75">02 / 02</p>
          <div className="mt-4 flex flex-col items-start gap-6 md:flex-row">
            <div>
              <h3 className="display text-[clamp(2rem,4vw,3.5rem)]">
                Agentic AI &amp; Microservices
              </h3>
              <p className="mt-4 max-w-[34ch] text-sm md:text-base opacity-80 leading-relaxed font-medium">
                Researching multi-agent AI coordination, semantic retrieval pipelines, and distributed event-driven microservices in Python &amp; Node.js.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="label text-[0.65rem] px-2.5 py-1 rounded-md border border-[var(--color-rule)] bg-pink-400/10 text-pink-600 dark:text-pink-400">
                  Jellyfish Fields Electric Net
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Graphic on Right (Order 2 on MD) */}
        <div className="md:col-span-6 md:order-2 md:col-start-7 flex justify-center">
          <div
            onClick={() => playBubble()}
            className="relative flex aspect-[4/3] w-full max-w-lg items-center justify-center rounded-2xl border border-[var(--color-ink)] p-8 bg-[var(--color-paper)] shadow-md hover:shadow-xl transition-all cursor-pointer group"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-pink-500/20 border border-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <JellyfishIcon className="w-9 h-9" />
              </div>
              <div>
                <p className="label tracking-[0.2em] text-xs opacity-80">Distributed Intelligence</p>
                <p className="font-mono text-xs opacity-65 mt-1">FastAPI · PostgreSQL · Docker · LLM Agents</p>
              </div>
            </div>
          </div>
        </div>

      </article>

    </section>
  );
}
