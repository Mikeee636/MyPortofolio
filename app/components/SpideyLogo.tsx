"use client";

import React from "react";

interface SpideyLogoProps {
  className?: string;
  height?: number | string;
}

export const SpideyLogo: React.FC<SpideyLogoProps> = ({
  className = "",
  height = "clamp(36px, 4vw, 48px)",
}) => {
  return (
    <div
      className={`relative inline-flex items-center select-none ${className}`}
      style={{ height, aspectRatio: "490/115" }}
    >
      <svg
        viewBox="0 0 490 115"
        className="w-full h-full overflow-visible"
        style={{
          filter:
            "drop-shadow(0 3px 12px rgba(0,0,0,0.85)) drop-shadow(0 0 16px rgba(255,34,51,0.35))",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Spider-Man Scarlet Red Glossy Face Gradient */}
          <linearGradient id="logoRedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff5262" />
            <stop offset="25%" stopColor="#ff1728" />
            <stop offset="70%" stopColor="#d10012" />
            <stop offset="100%" stopColor="#7a0009" />
          </linearGradient>

          {/* Deep Navy/Cobalt 3D Bevel Extrusion Gradient */}
          <linearGradient id="logoBlueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#245ecc" />
            <stop offset="45%" stopColor="#103787" />
            <stop offset="100%" stopColor="#05153b" />
          </linearGradient>

          {/* Golden Subtitle Gradient for PORTOFOLIO */}
          <linearGradient id="logoGoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fffde7" />
            <stop offset="30%" stopColor="#ffea00" />
            <stop offset="75%" stopColor="#ffb300" />
            <stop offset="100%" stopColor="#ff6f00" />
          </linearGradient>

          {/* Subtitle Glow */}
          <filter id="logoGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#000" floodOpacity="0.9" />
            <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#ffb300" floodOpacity="0.75" />
          </filter>
        </defs>

        <style>{`
          .spidey-main-flat {
            font-family: 'Oswald', 'Impact', sans-serif;
            font-weight: 900;
            font-style: italic;
            font-size: 52px;
            letter-spacing: 0.04em;
            text-anchor: start;
            text-transform: uppercase;
          }
          .spidey-sub-flat {
            font-family: 'Oswald', 'Impact', sans-serif;
            font-weight: 800;
            font-style: italic;
            font-size: 20px;
            letter-spacing: 0.32em;
            text-anchor: start;
            text-transform: uppercase;
          }
        `}</style>

        {/* 3D Blue Extruded Bevel Layers (Flat & Left-Aligned) */}
        {/* Layer 7: Deepest Outline Shadow */}
        <text
          x="4"
          y="70"
          className="spidey-main-flat"
          fill="#020612"
          stroke="#020612"
          strokeWidth="6"
          strokeLinejoin="round"
        >
          MICHAEL ANDRE A
        </text>

        {/* Layer 6 */}
        <text
          x="4"
          y="68"
          className="spidey-main-flat"
          fill="#061638"
          stroke="#061638"
          strokeWidth="5"
          strokeLinejoin="round"
        >
          MICHAEL ANDRE A
        </text>

        {/* Layer 5 */}
        <text
          x="4"
          y="66"
          className="spidey-main-flat"
          fill="#0b245c"
          stroke="#0b245c"
          strokeWidth="4.2"
          strokeLinejoin="round"
        >
          MICHAEL ANDRE A
        </text>

        {/* Layer 4: Deep Blue Body */}
        <text
          x="4"
          y="64"
          className="spidey-main-flat"
          fill="url(#logoBlueGrad)"
          stroke="#113a8f"
          strokeWidth="3.6"
          strokeLinejoin="round"
        >
          MICHAEL ANDRE A
        </text>

        {/* Layer 3: Vibrant Blue Bevel Highlight */}
        <text
          x="4"
          y="62"
          className="spidey-main-flat"
          fill="#1b52bc"
          stroke="#1b52bc"
          strokeWidth="3"
          strokeLinejoin="round"
        >
          MICHAEL ANDRE A
        </text>

        {/* Layer 2: Cobalt Ridge */}
        <text
          x="4"
          y="60"
          className="spidey-main-flat"
          fill="#2966dc"
          stroke="#000000"
          strokeWidth="2.5"
          strokeLinejoin="round"
        >
          MICHAEL ANDRE A
        </text>

        {/* Layer 1: Dark Seam */}
        <text
          x="4"
          y="58"
          className="spidey-main-flat"
          fill="#120204"
          stroke="#120204"
          strokeWidth="2"
          strokeLinejoin="round"
        >
          MICHAEL ANDRE A
        </text>

        {/* Front Face Outline (Bold Black Comic Stroke) */}
        <text
          x="4"
          y="56"
          className="spidey-main-flat"
          fill="#000000"
          stroke="#080002"
          strokeWidth="3.2"
          strokeLinejoin="round"
        >
          MICHAEL ANDRE A
        </text>

        {/* Front Face: Glossy Scarlet Red Face */}
        <text
          x="4"
          y="56"
          className="spidey-main-flat"
          fill="url(#logoRedGrad)"
          stroke="#ff5c6c"
          strokeWidth="0.8"
          strokeLinejoin="round"
        >
          MICHAEL ANDRE A
        </text>

        {/* Bottom Subtitle: PORTOFOLIO in Golden Yellow Italic (Flat & Left-Aligned) */}
        <g transform="translate(6, 96)" filter="url(#logoGoldGlow)">
          {/* Black Outer Stroke for High Contrast */}
          <text
            x="0"
            y="0"
            className="spidey-sub-flat"
            fill="#000000"
            stroke="#000000"
            strokeWidth="3.2"
            strokeLinejoin="round"
          >
            PORTOFOLIO
          </text>
          {/* Vibrant Gold Gradient Face */}
          <text
            x="0"
            y="0"
            className="spidey-sub-flat"
            fill="url(#logoGoldGrad)"
            stroke="#fff59d"
            strokeWidth="0.6"
          >
            PORTOFOLIO
          </text>
        </g>
      </svg>
    </div>
  );
};

export default SpideyLogo;
