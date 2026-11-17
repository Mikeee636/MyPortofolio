"use client";

import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { SpongebobCrosshair } from "./SpongebobCrosshair";
import { KrustyKrabHat, GoldenSpatula } from "./SpongebobIcons";

export default function Hero() {
  const { playBubble } = useTheme();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="hero relative h-svh min-h-[38rem] overflow-hidden text-[var(--color-ink)]"
    >
      {/* Night Sky of the Hero with Striped Moon & Epithet Kanji */}
      <div
        aria-hidden="true"
        className="hero__sky absolute inset-0 bg-[var(--color-paper)]"
      >
        {/* Striped Moon / Sun Cut-out SVG from Reference */}
        <svg
          viewBox="0 0 200 200"
          className="hero__moon"
          aria-hidden="true"
          fill="currentColor"
        >
          <clipPath id="disc-spongebob">
            <circle cx="100" cy="100" r="100" />
          </clipPath>
          <g clipPath="url(#disc-spongebob)">
            <rect x="0" y="0" width="200" height="104" />
            <rect x="0" y="108" width="200" height="10.5" />
            <rect x="0" y="121" width="200" height="9.68" />
            <rect x="0" y="133.7" width="200" height="8.86" />
            <rect x="0" y="146.1" width="200" height="8.04" />
            <rect x="0" y="158.3" width="200" height="7.22" />
            <rect x="0" y="170.2" width="200" height="6.4" />
            <rect x="0" y="181.9" width="200" height="5.59" />
            <rect x="0" y="193.2" width="200" height="4.77" />
            <rect x="0" y="204.3" width="200" height="3.95" />
            <rect x="0" y="215.1" width="200" height="3.13" />
            <rect x="0" y="225.7" width="200" height="2.31" />
          </g>
        </svg>

        {/* Vertical Epithet */}
        <p className="tategaki hero__epithet">WEB DEVELOPER</p>
      </div>

      {/* Main Grid Content */}
      <div className="relative mx-auto grid h-full max-w-[90rem] grid-cols-12 items-start gap-x-6 px-4 pt-[4.5rem] pb-[14svh] md:items-center md:px-8 md:pt-[11svh] md:pb-[12svh]">
        
        {/* Left Column: Typography, Socials, Coordinates */}
        <div className="relative z-10 col-span-12 md:col-span-7 lg:col-span-6">
          
          {/* Top Label Kicker */}
          <p className="label flex items-center gap-3 opacity-80">
            <span>File 01</span>
            <span aria-hidden="true" className="h-px w-10 bg-current opacity-50" />
            <span>Calling card</span>
            <span
              className="text-xs tracking-normal text-[var(--color-torii)]"
              aria-hidden="true"
            >
              PORTFOLIO
            </span>
          </p>

          {/* Giant Display Name */}
          <h1 id="hero-heading" className="display hero__name mt-[2svh]">
            <span className="block">Michael</span>
            <span className="block text-[var(--color-torii)]">Andre</span>
            <span className="block">Antoro</span>
          </h1>

          {/* Tagline */}
          <p className="hero__tagline mt-[2.5svh] max-w-[32ch] font-medium opacity-90">
            Informatics Engineering student at Universitas Tarumanagara, building high-performance web systems for the open web.
          </p>

          {/* Action Row: Socials & Coordinates */}
          <div className="mt-[3svh] flex flex-col items-start gap-y-4 md:flex-row md:flex-wrap md:items-center md:gap-x-8">
            <ul className="flex gap-2.5" aria-label="Find Michael online">
              <li>
                <a
                  className="hero__icon"
                  href="https://github.com/michaelandre"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Michael on GitHub"
                  onClick={() => playBubble()}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  className="hero__icon"
                  href="https://linkedin.com/in/michaelandre"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Michael on LinkedIn"
                  onClick={() => playBubble()}
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a
                  className="hero__icon"
                  href="mailto:michaelandre@gmail.com"
                  aria-label="Write to Michael"
                  onClick={() => playBubble()}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </li>
            </ul>

            <dl className="label flex flex-wrap gap-x-6 gap-y-2 opacity-80">
              <div>
                <dt className="sr-only">Campus</dt>
                <dd>UNTAR · Jakarta</dd>
              </div>
              <div className="hidden sm:block">
                <dt className="sr-only">Coordinates</dt>
                <dd>6°10′S 106°47′E · Bikini Trench</dd>
              </div>
            </dl>
          </div>

          {/* Scroll Cue Line */}
          <p
            className="label hero__cue mt-[4svh] hidden md:flex items-center gap-3 select-none"
            aria-hidden="true"
          >
            <span>Scroll</span>
            <span className="hero__cue-line" />
            <span className="text-xs tracking-normal opacity-75">SWING DOWN</span>
          </p>
        </div>

        {/* Right Column: SpongeBob Character Art with Nautical Crosshair HUD */}
        <div className="hero__kaito col-span-12 md:col-span-5 lg:col-span-6 flex items-center justify-center relative">
          
          {/* Nautical Target Crosshair HUD Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <SpongebobCrosshair
              size={420}
              label="TARGET: SPONGEBOB NODE #99 · BIKINI BOTTOM"
              className="text-[var(--color-ink)]"
            />
          </div>

          {/* Character Illustration: Normal SpongeBob in Suit with Sailor Hat */}
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/5] flex items-center justify-center z-10 group">
            {/* Krusty Krab Sailor Hat perched on SpongeBob's head */}
            <div className="absolute -top-7 left-[38%] -translate-x-1/2 z-20 transition-transform group-hover:-translate-y-1 duration-300 pointer-events-none">
              <KrustyKrabHat className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-lg -rotate-12" />
            </div>

            {/* SpongeBob's Speech Bubble */}
            <div className="absolute -top-3 -right-2 sm:right-2 z-20 px-3 py-1.5 rounded-2xl bg-[var(--color-paper)] border border-[var(--color-ink)] shadow-md flex items-center gap-1.5 label text-[0.65rem] select-none">
              <GoldenSpatula className="w-4 h-4 text-amber-500 shrink-0" />
              <span>&ldquo;I&apos;m Ready!&rdquo;</span>
            </div>

            <Image
              src="/spongebob-hero.png"
              alt="Normal SpongeBob in crisp corporate collar, red tie, and squarepants"
              fill
              priority
              className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform duration-500 select-none"
              sizes="(min-width: 768px) 40vw, 85vw"
            />
          </div>
        </div>
      </div>

      {/* Seaweed / Bottom Wave Grass Silhouette from Reference */}
      <svg
        aria-hidden="true"
        className="hero__grass"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          fill="var(--color-ink)"
          d="M-9.0 120 Q-7.4 91.2 -11.0 72 Q-4.2 96 0.0 120ZM3.6 120 Q6.4 93 4.6 75 Q9.0 97.5 12.6 120ZM16.1 120 Q20.1 102 20.1 90 Q22.1 105 25.1 120ZM30.3 120 Q36.7 99.6 40.3 86 Q37.5 103 39.3 120ZM57.0 120 Q61.8 85.8 63.0 63 Q63.4 91.5 66.0 120ZM83.7 120 Q86.9 92.4 85.7 74 Q89.3 97 92.7 120ZM110.4 120 Q112.0 99 108.4 85 Q115.2 102.5 119.4 120ZM137.1 120 Q142.3 85.2 144.1 62 Q143.7 91 146.1 120ZM163.9 120 Q167.5 91.8 166.9 73 Q169.7 96.5 172.9 120ZM192.1 120 Q195.3 87 194.1 65 Q197.7 92.5 201.1 120ZM218.9 120 Q220.5 93.6 216.9 76 Q223.7 98 227.9 120ZM245.6 120 Q250.8 100.2 252.6 87 Q252.2 103.5 254.6 120ZM272.3 120 Q275.9 86.4 275.3 64 Q278.1 92 281.3 120ZM299.0 120 Q301.0 93 298.0 75 Q304.0 97.5 308.0 120ZM325.7 120 Q331.3 99.6 333.7 86 Q332.5 103 334.7 120ZM352.4 120 Q356.4 85.8 356.4 63 Q358.4 91.5 361.4 120ZM380.7 120 Q384.3 88.2 383.7 67 Q386.5 93.5 389.7 120ZM407.4 120 Q409.4 87.6 406.4 66 Q412.4 93 416.4 120ZM434.1 120 Q439.7 94.2 442.1 77 Q440.9 98.5 443.1 120ZM460.9 120 Q464.9 87.6 464.9 66 Q466.9 93 469.9 120ZM487.6 120 Q490.0 87 487.6 65 Q492.8 92.5 496.6 120ZM514.3 120 Q520.3 93.6 523.3 76 Q521.3 98 523.3 120ZM541.0 120 Q545.4 87 546.0 65 Q547.2 92.5 550.0 120ZM569.3 120 Q573.3 95.4 573.3 79 Q575.3 99.5 578.3 120ZM596.0 120 Q598.4 102 596.0 90 Q601.2 105 605.0 120ZM622.7 120 Q628.7 88.2 631.7 67 Q629.7 93.5 631.7 120ZM649.4 120 Q653.8 94.8 654.4 78 Q655.6 99 658.4 120ZM676.1 120 Q678.9 101.4 677.1 89 Q681.5 104.5 685.1 120ZM702.9 120 Q709.3 87.6 712.9 66 Q710.1 93 711.9 120ZM729.6 120 Q734.4 94.2 735.6 77 Q736.0 98.5 738.6 120ZM757.9 120 Q762.3 89.4 762.9 69 Q764.1 94.5 766.9 120ZM784.6 120 Q787.4 96 785.6 80 Q790.0 100 793.6 120ZM811.3 120 Q817.7 102.6 821.3 91 Q818.5 105.5 820.3 120ZM838.0 120 Q842.8 88.8 844.0 68 Q844.4 94 847.0 120ZM864.7 120 Q867.9 95.4 866.7 79 Q870.3 99.5 873.7 120ZM891.4 120 Q893.0 102 889.4 90 Q896.2 105 900.4 120ZM918.1 120 Q923.3 88.2 925.1 67 Q924.7 93.5 927.1 120ZM946.4 120 Q951.2 103.8 952.4 93 Q952.8 106.5 955.4 120ZM973.1 120 Q976.3 90 975.1 70 Q978.7 95 982.1 120ZM999.9 120 Q1001.5 83.4 997.9 59 Q1004.7 89.5 1008.9 120ZM1026.6 120 Q1031.8 103.2 1033.6 92 Q1033.2 106 1035.6 120ZM1053.3 120 Q1056.9 89.4 1056.3 69 Q1059.1 94.5 1062.3 120ZM1080.0 120 Q1082.0 82.8 1079.0 58 Q1085.0 89 1089.0 120ZM1106.7 120 Q1112.3 102.6 1114.7 91 Q1113.5 105.5 1115.7 120ZM1135.0 120 Q1140.2 97.8 1142.0 83 Q1141.6 101.5 1144.0 120ZM1161.7 120 Q1165.3 104.4 1164.7 94 Q1167.5 107 1170.7 120ZM1188.4 120 Q1190.4 90.6 1187.4 71 Q1193.4 95.5 1197.4 120Z"
        />
        <rect y="112" width="1200" height="8" fill="var(--color-ink)" />
      </svg>
    </section>
  );
}
