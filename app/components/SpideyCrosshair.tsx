"use client";

import React from "react";

interface SpideyCrosshairProps {
  className?: string;
  size?: number | string;
  hideBackdrop?: boolean;
}

export const SpideyCrosshair: React.FC<SpideyCrosshairProps> = ({
  className = "",
  size = "100%",
  hideBackdrop = false,
}) => {
  return (
    <div
      className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full text-[#ff2233] drop-shadow-[0_0_25px_rgba(255,34,51,0.5)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle Cyber Red Glow Filter */}
          <filter id="crosshairRedGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>

          {/* Dark Red Ambient Radial Gradient */}
          <radialGradient id="crosshairAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff2233" stopOpacity="0.16" />
            <stop offset="45%" stopColor="#c00014" stopOpacity="0.08" />
            <stop offset="75%" stopColor="#6b000d" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#070913" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Dark Radial Disc Backdrop */}
        {!hideBackdrop && (
          <circle cx="250" cy="250" r="238" fill="url(#crosshairAura)" />
        )}

        {/* Outer Rotating Degree Ring with 360 Ticks */}
        <g
          className="opacity-60"
          style={{
            transformOrigin: "250px 250px",
            animation: "bnd-ring-spin 60s linear infinite",
          }}
        >
          {/* Outer Dashed Border Circle */}
          <circle
            cx="250"
            cy="250"
            r="235"
            stroke="#ff3a4a"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />

          {/* 30-degree Ticks */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <line
              key={deg}
              x1="250"
              y1="15"
              x2="250"
              y2={deg % 90 === 0 ? "35" : "26"}
              stroke="#ff3a4a"
              strokeWidth={deg % 90 === 0 ? "2.5" : "1.2"}
              transform={`rotate(${deg} 250 250)`}
            />
          ))}
        </g>

        {/* Secondary Concentric Lens Ring */}
        <circle
          cx="250"
          cy="250"
          r="175"
          stroke="#ff2233"
          strokeWidth="1.5"
          opacity="0.65"
        />

        {/* Inner Tactical Target Ring */}
        <circle
          cx="250"
          cy="250"
          r="92"
          stroke="#ff3a4a"
          strokeWidth="1.5"
          strokeDasharray="10 6"
          opacity="0.85"
        />

        {/* 4 Cardinal Targeting Brackets ⌜ ⌝ ⌞ ⌟ ("Kotak Target") */}
        <g stroke="#ff2233" strokeWidth="3.5" opacity="0.95" strokeLinecap="square" filter="url(#crosshairRedGlow)">
          {/* Top-Left */}
          <path d="M 86 142 L 86 86 L 142 86" />
          {/* Top-Right */}
          <path d="M 358 86 L 414 86 L 414 142" />
          {/* Bottom-Left */}
          <path d="M 86 358 L 86 414 L 142 414" />
          {/* Bottom-Right */}
          <path d="M 358 414 L 414 414 L 414 358" />
        </g>

        {/* Main Classic Crosshair Lines with Center Gap (Horizontal & Vertical) */}
        <g stroke="#ff2233" strokeWidth="2" opacity="0.9" filter="url(#crosshairRedGlow)">
          {/* Left Axis Line */}
          <line x1="25" y1="250" x2="208" y2="250" strokeLinecap="round" />
          {/* Right Axis Line */}
          <line x1="292" y1="250" x2="475" y2="250" strokeLinecap="round" />
          {/* Top Axis Line */}
          <line x1="250" y1="25" x2="250" y2="208" strokeLinecap="round" />
          {/* Bottom Axis Line */}
          <line x1="250" y1="292" x2="250" y2="475" strokeLinecap="round" />
        </g>

        {/* Center Target Point: Precision Bullseye */}
        <circle cx="250" cy="250" r="16" stroke="#ff3a4a" strokeWidth="1.8" opacity="0.95" />
        <circle cx="250" cy="250" r="4" fill="#ff2233" />

        {/* Sub-Millimeter Tick Marks along Horizontal Axis */}
        <g stroke="#ff4a5a" strokeWidth="1.5" opacity="0.75">
          <line x1="60" y1="242" x2="60" y2="258" />
          <line x1="95" y1="244" x2="95" y2="256" />
          <line x1="130" y1="242" x2="130" y2="258" />
          <line x1="165" y1="244" x2="165" y2="256" />

          <line x1="335" y1="244" x2="335" y2="256" />
          <line x1="370" y1="242" x2="370" y2="258" />
          <line x1="405" y1="244" x2="405" y2="256" />
          <line x1="440" y1="242" x2="440" y2="258" />
        </g>

        {/* Sub-Millimeter Tick Marks along Vertical Axis */}
        <g stroke="#ff4a5a" strokeWidth="1.5" opacity="0.75">
          <line x1="242" y1="60" x2="258" y2="60" />
          <line x1="244" y1="95" x2="256" y2="95" />
          <line x1="242" y1="130" x2="258" y2="130" />
          <line x1="244" y1="165" x2="256" y2="165" />

          <line x1="244" y1="335" x2="256" y2="335" />
          <line x1="242" y1="370" x2="258" y2="370" />
          <line x1="244" y1="405" x2="256" y2="405" />
          <line x1="242" y1="440" x2="258" y2="440" />
        </g>

        {/* Cardinal Direction Letters (N, E, S, W) */}
        <text x="250" y="48" fill="#ff5a6a" fontSize="11" fontFamily="'Oswald', sans-serif" fontWeight="700" textAnchor="middle" opacity="0.85">N</text>
        <text x="250" y="465" fill="#ff5a6a" fontSize="11" fontFamily="'Oswald', sans-serif" fontWeight="700" textAnchor="middle" opacity="0.85">S</text>
        <text x="462" y="254" fill="#ff5a6a" fontSize="11" fontFamily="'Oswald', sans-serif" fontWeight="700" textAnchor="middle" opacity="0.85">E</text>
        <text x="38" y="254" fill="#ff5a6a" fontSize="11" fontFamily="'Oswald', sans-serif" fontWeight="700" textAnchor="middle" opacity="0.85">W</text>

        {/* Subtle HUD Telemetry Readouts positioned outside the central target zone */}
        <text x="86" y="74" fill="#ff3a4a" fontSize="9.5" fontFamily="monospace" letterSpacing="0.18em" opacity="0.85">
          TARGET: ACQUIRED
        </text>
        <text x="414" y="434" fill="#ff3a4a" fontSize="9.5" fontFamily="monospace" letterSpacing="0.18em" textAnchor="end" opacity="0.85">
          E-616 // LOCK: 100%
        </text>
      </svg>
    </div>
  );
};

export default SpideyCrosshair;
