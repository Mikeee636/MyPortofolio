"use client";

import React from "react";

interface SpongebobCrosshairProps {
  className?: string;
  size?: number;
  label?: string;
}

export function SpongebobCrosshair({
  className = "",
  size = 320,
  label = "TARGET ACQUIRED · SPONGEBOB NODE #99",
}: SpongebobCrosshairProps) {
  return (
    <div
      className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 300 300"
        className="w-full h-full text-current"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle glow filter */}
          <filter id="reticle-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Rotating Degree Ring */}
        <g className="reticle-spin opacity-40">
          <circle
            cx="150"
            cy="150"
            r="138"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          {/* Degree Ticks */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <line
              key={deg}
              x1="150"
              y1="10"
              x2="150"
              y2={deg % 90 === 0 ? "20" : "15"}
              stroke="currentColor"
              strokeWidth={deg % 90 === 0 ? "2" : "1"}
              transform={`rotate(${deg} 150 150)`}
            />
          ))}
        </g>

        {/* Secondary Concentric Lens Ring */}
        <circle
          cx="150"
          cy="150"
          r="105"
          stroke="currentColor"
          strokeWidth="1.5"
          className="opacity-60"
        />

        {/* Inner Precision Target Ring */}
        <circle
          cx="150"
          cy="150"
          r="55"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="8 4"
          className="opacity-75 reticle-pulse"
        />

        {/* Center Crosshair Lines (Horizontal & Vertical with Center Gap) */}
        <g stroke="currentColor" strokeWidth="1.5" className="opacity-80">
          {/* Left Line */}
          <line x1="20" y1="150" x2="125" y2="150" />
          {/* Right Line */}
          <line x1="175" y1="150" x2="280" y2="150" />
          {/* Top Line */}
          <line x1="150" y1="20" x2="150" y2="125" />
          {/* Bottom Line */}
          <line x1="150" y1="175" x2="150" y2="280" />
        </g>

        {/* Center Target Point */}
        <circle cx="150" cy="150" r="3" fill="var(--color-torii)" />
        <circle cx="150" cy="150" r="10" stroke="var(--color-torii)" strokeWidth="1.5" />

        {/* 4 Corner Targeting Brackets */}
        <g stroke="currentColor" strokeWidth="2.5" className="opacity-90">
          {/* Top-Left Bracket */}
          <path d="M 45 65 L 45 45 L 65 45" />
          {/* Top-Right Bracket */}
          <path d="M 235 45 L 255 45 L 255 65" />
          {/* Bottom-Left Bracket */}
          <path d="M 45 235 L 45 255 L 65 255" />
          {/* Bottom-Right Bracket */}
          <path d="M 235 255 L 255 255 L 255 235" />
        </g>

        {/* Precision Sub-Millimeter Tick Marks on Horizontal Axis */}
        <g stroke="currentColor" strokeWidth="1" className="opacity-50">
          <line x1="75" y1="145" x2="75" y2="155" />
          <line x1="90" y1="147" x2="90" y2="153" />
          <line x1="210" y1="147" x2="210" y2="153" />
          <line x1="225" y1="145" x2="225" y2="155" />
        </g>
      </svg>

      {/* Military/Nautical Telemetry Coordinates Readout */}
      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-mono tracking-widest uppercase opacity-75 px-2 py-0.5 rounded border border-current bg-[var(--color-paper)]">
        {label}
      </div>
    </div>
  );
}
