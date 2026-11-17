"use client";

import React from "react";
import { FlowerCloud } from "./SpongebobIcons";

export function BikiniBottomSky() {
  return (
    <div className="sky fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      {/* Background Stars / Deep water plankton in night mode */}
      <div className="sky__stars" />

      {/* Underwater Caustics Light Rays */}
      <div className="absolute inset-0 bg-radial from-white/[0.08] via-transparent to-transparent opacity-70" />

      {/* Floating Iconic Bikini Bottom Sky Flower Clouds */}
      <div className="absolute top-[8%] left-[6%] animate-float-slow opacity-80 hover:opacity-100 transition-opacity">
        <FlowerCloud className="w-28 h-28 sm:w-36 sm:h-36 drop-shadow-sm" color="#f472b6" strokeColor="#db2777" />
      </div>

      <div className="absolute top-[18%] right-[8%] animate-float-delayed opacity-75">
        <FlowerCloud className="w-32 h-32 sm:w-44 sm:h-44 drop-shadow-sm" color="#38bdf8" strokeColor="#0284c7" />
      </div>

      <div className="absolute top-[48%] left-[2%] animate-float-delayed opacity-65">
        <FlowerCloud className="w-20 h-20 sm:w-28 sm:h-28" color="#c084fc" strokeColor="#9333ea" />
      </div>

      <div className="absolute top-[62%] right-[5%] animate-float-slow opacity-70">
        <FlowerCloud className="w-24 h-24 sm:w-36 sm:h-36" color="#4ade80" strokeColor="#16a34a" />
      </div>

      <div className="absolute top-[82%] left-[10%] animate-float-slow opacity-60">
        <FlowerCloud className="w-24 h-24" color="#facc15" strokeColor="#ca8a04" />
      </div>

      {/* Floating Shimmering Air Bubbles */}
      <div className="absolute bottom-[20%] left-[25%] w-8 h-8 rounded-full border border-sky-300/40 bg-sky-300/10 backdrop-blur-[1px] animate-float-slow" />
      <div className="absolute bottom-[40%] right-[30%] w-12 h-12 rounded-full border border-sky-300/30 bg-sky-300/10 backdrop-blur-[1px] animate-float-delayed" />
      <div className="absolute bottom-[65%] left-[45%] w-6 h-6 rounded-full border border-sky-300/40 bg-sky-300/10 backdrop-blur-[1px] animate-float-slow" />

      {/* Bottom Sandy Floor / Dunes */}
      <svg
        className="sky__hills"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 60 Q300 15 600 55 T1200 50 L1200 120 L0 120 Z" />
      </svg>
    </div>
  );
}
