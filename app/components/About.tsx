"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import { KrabbyPattyIcon } from "./SpongebobIcons";

export default function About() {
  const { playBubble } = useTheme();
  const [activeTick, setActiveTick] = useState(5);

  const semesterDescriptions: Record<number, string> = {
    1: "Semester 1: Procedural algorithms & discrete mathematics foundations.",
    2: "Semester 2: Object-oriented programming & system data structures.",
    3: "Semester 3: Relational databases & modern web programming.",
    4: "Semester 4: Full-stack applications, Next.js, and RESTful APIs.",
    5: "Semester 5 (Current): Distributed software engineering & AI interface research.",
    6: "Semester 6: Microservices, cloud architecture, and competitive hackathons.",
    7: "Semester 7: Advanced DevOps, CI/CD pipelines, and enterprise scaling.",
    8: "Semester 8: Final degree capstone & professional industry launch.",
  };

  return (
    <section id="about" aria-labelledby="about-heading" className="relative px-3 pt-6 md:px-6 md:pt-10">
      
      {/* Reference Card-Face Container with Double Inset Shadow */}
      <div className="card-face relative mx-auto max-w-[90rem] bg-[var(--color-paper)] px-5 pb-14 pt-16 md:px-12 md:py-16">
        
        {/* Corner Mark with Nautical Crosshair & SpongeBob Emblem */}
        <div className="absolute top-5 left-6 flex items-center gap-2.5 opacity-75">
          <div className="relative w-8 h-8 rounded-full border border-current flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[var(--color-torii)]" />
            <div className="absolute inset-0 border-t border-b border-current opacity-40" />
            <div className="absolute inset-0 border-l border-r border-current opacity-40" />
          </div>
          <span className="label text-[0.65rem] tracking-wider hidden sm:inline">
            RETICLE: BIKINI BOTTOM #99 · 6°10′S 106°47′E
          </span>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10">
          
          {/* Left Column: Record Table & Stats */}
          <div className="md:col-span-6 md:pl-4">
            
            <header>
              <p className="label flex items-center gap-3 opacity-75">
                <span>02</span>
                <span aria-hidden="true" className="text-base tracking-normal text-[var(--color-coral)]">
                  INFO
                </span>
                <span aria-hidden="true" className="h-px w-10 bg-current opacity-50" />
                <span>Who</span>
              </p>
              <h2 id="about-heading" className="display mt-4 text-[length:var(--text-3xl)]">
                About me
              </h2>
            </header>

            {/* Record Row List from Reference */}
            <dl className="mt-8 border-t border-[var(--color-rule)]">
              <div className="record-row">
                <dt className="label">Name</dt>
                <dd className="font-medium">Michael Andre Antoro</dd>
              </div>
              <div className="record-row">
                <dt className="label">University</dt>
                <dd className="font-medium">Universitas Tarumanagara (UNTAR)</dd>
              </div>
              <div className="record-row">
                <dt className="label">Programme</dt>
                <dd className="font-medium flex items-center gap-2 flex-wrap">
                  <span>Informatics Engineering,</span>
                  <span className="semester-pill">semester 5</span>
                </dd>
              </div>
              <div className="record-row">
                <dt className="label">Kitchen / Lab</dt>
                <dd className="font-medium text-sm flex items-center gap-1.5">
                  <KrabbyPattyIcon className="w-4 h-4 shrink-0" />
                  <span>Krusty Krab &amp; UNTAR Web Systems Lab</span>
                </dd>
              </div>
            </dl>

            {/* Two Signature Stat Stamps from Reference */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              
              {/* Stat 1: Semester Ticks */}
              <div className="stat">
                <p className="label flex items-center justify-between">
                  <span>Semester</span>
                  <span className="tracking-normal opacity-75">
                    TERM
                  </span>
                </p>
                <p className="stat__value display" aria-hidden="true">
                  05<span className="stat__of">/08</span>
                </p>

                {/* 8 Semester Ticks */}
                <ol className="semester__ticks" aria-label="Semester 5 of 8">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                    <li
                      key={s}
                      onClick={() => {
                        setActiveTick(s);
                        playBubble();
                      }}
                      title={`Semester ${s}`}
                      className={`semester__tick cursor-pointer transition-all ${
                        s < 5
                          ? "is-done hover:opacity-80"
                          : s === 5
                          ? "is-now"
                          : "opacity-40 hover:opacity-70"
                      }`}
                    />
                  ))}
                </ol>

                <p className="text-[0.7rem] opacity-75 font-mono mt-1">
                  {semesterDescriptions[activeTick]}
                </p>
              </div>

              {/* Stat 2: GPA Meter */}
              <div className="stat">
                <p className="label flex items-center justify-between">
                  <span>GPA</span>
                  <span className="tracking-normal opacity-75">
                    HONOR
                  </span>
                </p>
                <p className="stat__value display">
                  3.98<span className="stat__of">/4.00</span>
                </p>

                <div className="gpa__track" role="meter" aria-label="GPA" aria-valuenow={3.98}>
                  <span className="gpa__fill" style={{ width: "99.5%" }} />
                </div>

                <p className="text-[0.7rem] opacity-75 font-mono mt-1">
                  Grade A Honor Roll · Algorithmic Excellence
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Figure Showcase matching reference */}
          <figure className="relative md:col-span-6 flex flex-col justify-center items-center">
            
            {/* Vertical Callout */}
            <p className="tategaki absolute top-2 left-2 text-sm tracking-[0.3em] opacity-75 hidden md:block">
              CAMPUS // HQ
            </p>

            {/* Model Card Frame */}
            <div className="relative w-full max-w-md aspect-square rounded-2xl border border-[var(--color-ink)] p-3 bg-[var(--color-paper)] shadow-lg overflow-hidden flex flex-col justify-between">
              
              <div className="flex items-center justify-between text-xs pb-2 border-b border-[var(--color-rule)]">
                <span className="label opacity-75">Bikini Bottom Landmark</span>
                <span className="text-xs opacity-75">LAB</span>
              </div>

              <div className="relative flex-1 flex items-center justify-center my-3">
                <div className="relative w-full h-full max-h-64 rounded-xl overflow-hidden bg-sky-50 dark:bg-slate-900 border border-[var(--color-rule)] flex items-center justify-center">
                  <Image
                    src="/assets/Profile.JPG"
                    alt="UNTAR Campus & Tech Space"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-paper)]/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              <figcaption className="label flex justify-between px-1 opacity-80 text-[0.65rem]">
                <span>Campus I · Building 2 / Krusty Krab</span>
                <span>Jakarta Barat</span>
              </figcaption>

            </div>

          </figure>

        </div>

      </div>
    </section>
  );
}
