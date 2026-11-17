import React from "react";

// The iconic Spider-Man red chest emblem
export const SpiderLogo: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 32,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Head */}
    <polygon points="50,15 45,25 55,25" fill="#ff2233" />
    {/* Body */}
    <polygon points="50,26 43,45 46,65 50,72 54,65 57,45" fill="#ff2233" />
    {/* Left Upper Legs */}
    <path
      d="M44 32 L20 18 L10 26 L18 29 L38 38 Z"
      fill="#ff2233"
    />
    <path
      d="M43 40 L16 36 L6 48 L14 49 L38 45 Z"
      fill="#ff2233"
    />
    {/* Left Lower Legs */}
    <path
      d="M45 52 L14 62 L10 78 L18 76 L40 58 Z"
      fill="#ff2233"
    />
    <path
      d="M46 62 L22 80 L25 94 L31 92 L44 68 Z"
      fill="#ff2233"
    />
    {/* Right Upper Legs */}
    <path
      d="M56 32 L80 18 L90 26 L82 29 L62 38 Z"
      fill="#ff2233"
    />
    <path
      d="M57 40 L84 36 L94 48 L86 49 L62 45 Z"
      fill="#ff2233"
    />
    {/* Right Lower Legs */}
    <path
      d="M55 52 L86 62 L90 78 L82 76 L60 58 Z"
      fill="#ff2233"
    />
    <path
      d="M54 62 L78 80 L75 94 L69 92 L56 68 Z"
      fill="#ff2233"
    />
  </svg>
);

// Sleek white spider icon for the vertical rail navigation cursor
export const SpiderCursorIcon: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C11.4 2 11 2.4 11 3V5C9.8 5.3 8.7 5.9 7.8 6.7L5.6 5.3C5.1 5 4.5 5.2 4.2 5.7C3.9 6.2 4.1 6.8 4.6 7.1L6.5 8.3C6.1 9 5.7 9.8 5.5 10.6L3.2 10.1C2.7 10 2.1 10.3 2 10.8C1.9 11.3 2.2 11.9 2.7 12L5.1 12.5C5.1 13 5.1 13.5 5.2 14L2.8 15.2C2.3 15.5 2.1 16.1 2.4 16.6C2.7 17.1 3.3 17.3 3.8 17L6.3 15.7C7.1 17.1 8.4 18.2 10 18.7V21C10 21.6 10.4 22 11 22C11.6 22 12 21.6 12 21V18.7C13.6 18.2 14.9 17.1 15.7 15.7L18.2 17C18.7 17.3 19.3 17.1 19.6 16.6C19.9 16.1 19.7 15.5 19.2 15.2L16.8 14C16.9 13.5 16.9 13 16.9 12.5L19.3 12C19.8 11.9 20.1 11.3 20 10.8C19.9 10.3 19.3 10 18.8 10.1L16.5 10.6C16.3 9.8 15.9 9 15.5 8.3L17.4 7.1C17.9 6.8 18.1 6.2 17.8 5.7C17.5 5.2 16.9 5 16.4 5.3L14.2 6.7C13.3 5.9 12.2 5.3 11 5V3C11 2.4 11.4 2 12 2Z" />
  </svg>
);

// High-impact Spider-Man crouch / leap silhouette for Hero
export const SpiderHeroArt: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    <svg
      viewBox="0 0 600 500"
      className="w-full h-full drop-shadow-[0_25px_35px_rgba(255,34,51,0.35)]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="spideyGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff2233" stopOpacity="0.8" />
          <stop offset="60%" stopColor="#8b000d" stopOpacity="0.3" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="suitRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff3a4a" />
          <stop offset="50%" stopColor="#d6021a" />
          <stop offset="100%" stopColor="#7a000e" />
        </linearGradient>
        <linearGradient id="suitBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2962ff" />
          <stop offset="70%" stopColor="#0d2b82" />
          <stop offset="100%" stopColor="#05103a" />
        </linearGradient>
        <linearGradient id="eyeLens" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#dff0ff" />
          <stop offset="100%" stopColor="#9ec9ff" />
        </linearGradient>
        <filter id="webShooterGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Web Thread Shooting Out */}
      <path
        d="M340 310 Q460 220 580 80"
        stroke="rgba(255,255,255,0.85)"
        strokeWidth="3"
        strokeDasharray="6 3"
        filter="url(#webShooterGlow)"
      />
      <circle cx="580" cy="80" r="7" fill="#ffffff" filter="url(#webShooterGlow)" />

      {/* Spider-Man Body Torso & Limbs in Dynamic Hero Crouch */}
      {/* Right Leg (Back) */}
      <path
        d="M350 280 C390 260 450 290 480 340 C490 360 470 380 440 370 C410 360 380 320 350 300 Z"
        fill="url(#suitBlue)"
        stroke="#06030b"
        strokeWidth="3"
      />
      {/* Left Leg (Foreground Bent Knee) */}
      <path
        d="M210 320 C180 350 140 400 130 430 C125 445 150 455 170 440 C190 420 230 370 250 340 Z"
        fill="url(#suitBlue)"
        stroke="#06030b"
        strokeWidth="3"
      />
      {/* Left Boot */}
      <path
        d="M130 430 L115 460 C110 470 135 480 155 465 L170 440 Z"
        fill="url(#suitRed)"
        stroke="#06030b"
        strokeWidth="2"
      />

      {/* Torso */}
      <path
        d="M240 260 C250 220 280 200 320 210 C350 220 370 260 360 300 C340 330 290 340 250 320 C235 305 235 280 240 260 Z"
        fill="url(#suitRed)"
        stroke="#06030b"
        strokeWidth="3"
      />
      {/* Blue Torso Side Insets */}
      <path
        d="M250 270 C255 250 270 240 280 245 C275 270 270 290 260 305 Z"
        fill="url(#suitBlue)"
      />
      <path
        d="M335 240 C350 250 355 270 350 290 C340 285 330 265 335 240 Z"
        fill="url(#suitBlue)"
      />

      {/* Spider Chest Emblem */}
      <polygon points="305,248 300,265 310,265" fill="#08080c" />
      <path d="M305 252 L285 242 M305 256 L283 255 M305 260 L286 268" stroke="#08080c" strokeWidth="2.5" />
      <path d="M305 252 L325 242 M305 256 L327 255 M305 260 L324 268" stroke="#08080c" strokeWidth="2.5" />

      {/* Right Arm Shooting Web */}
      <path
        d="M340 230 C370 240 400 270 430 300 C435 305 440 315 435 320 C425 320 410 310 395 290 C375 270 355 250 340 245 Z"
        fill="url(#suitRed)"
        stroke="#06030b"
        strokeWidth="3"
      />
      {/* Hand in Web Shooter Posture */}
      <path
        d="M430 300 L445 310 C452 315 448 325 440 323 L430 318 Z"
        fill="url(#suitRed)"
      />

      {/* Left Arm Ground Stabilizer */}
      <path
        d="M245 250 C220 270 190 300 175 330 C165 350 175 360 190 350 C205 335 230 300 250 270 Z"
        fill="url(#suitRed)"
        stroke="#06030b"
        strokeWidth="3"
      />

      {/* Spider-Man Head */}
      <path
        d="M275 160 C290 145 335 150 345 175 C355 200 340 225 320 230 C295 235 270 215 265 195 C263 180 268 168 275 160 Z"
        fill="url(#suitRed)"
        stroke="#06030b"
        strokeWidth="3.5"
      />

      {/* Web Pattern on Mask */}
      <path
        d="M305 160 L305 225 M275 185 Q305 195 340 185 M270 202 Q305 212 335 202"
        stroke="rgba(0,0,0,0.4)"
        strokeWidth="2"
      />

      {/* Eyes / Mask Lenses */}
      {/* Left Eye */}
      <path
        d="M280 180 C288 175 300 178 302 188 C302 196 290 200 282 195 C278 190 276 183 280 180 Z"
        fill="#06030b"
      />
      <path
        d="M282 182 C288 178 297 180 299 187 C299 193 290 196 284 192 C281 188 280 184 282 182 Z"
        fill="url(#eyeLens)"
      />

      {/* Right Eye */}
      <path
        d="M312 188 C315 178 327 175 335 180 C339 183 337 190 333 195 C325 200 313 196 312 188 Z"
        fill="#06030b"
      />
      <path
        d="M315 187 C317 180 326 178 332 182 C334 184 333 188 330 192 C324 196 315 193 315 187 Z"
        fill="url(#eyeLens)"
      />
    </svg>
  </div>
);

// Upside down hanging Spider-Man vector on a web thread for the Radar HUD
export const HangingSpidey: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex flex-col items-center ${className}`}>
    {/* Web Thread */}
    <div className="w-[2px] h-20 bg-gradient-to-b from-white/10 via-white/70 to-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />

    {/* Hanging Spider-Man Figure */}
    <svg
      width="64"
      height="96"
      viewBox="0 0 64 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="filter drop-shadow-[0_10px_20px_rgba(255,34,51,0.5)] -mt-1"
    >
      {/* Hand holding the thread */}
      <circle cx="32" cy="6" r="4" fill="#ff2233" stroke="#000" strokeWidth="1.5" />

      {/* Arms inverted holding thread */}
      <path d="M32 6 L24 22 L28 32 L32 26" fill="#ff2233" stroke="#000" strokeWidth="1.5" />
      <path d="M32 6 L40 22 L36 32 L32 26" fill="#ff2233" stroke="#000" strokeWidth="1.5" />

      {/* Inverted Legs in crossed acrobatic pose */}
      <path d="M26 28 C18 16 10 24 14 36 L24 40 Z" fill="#1f4cd6" stroke="#000" strokeWidth="1.5" />
      <path d="M38 28 C46 16 54 24 50 36 L40 40 Z" fill="#1f4cd6" stroke="#000" strokeWidth="1.5" />
      <path d="M12 28 L8 24 C6 22 10 18 14 20 L16 26 Z" fill="#ff2233" />
      <path d="M52 28 L56 24 C58 22 54 18 50 20 L48 26 Z" fill="#ff2233" />

      {/* Torso Inverted */}
      <path
        d="M24 38 C24 38 22 54 26 62 C28 66 36 66 38 62 C42 54 40 38 40 38 Z"
        fill="#ff2233"
        stroke="#000"
        strokeWidth="1.5"
      />
      <polygon points="32,48 28,42 36,42" fill="#000" />

      {/* Upside Down Head */}
      <ellipse cx="32" cy="76" rx="10" ry="13" fill="#ff2233" stroke="#000" strokeWidth="1.5" />
      {/* Upside Down Lenses */}
      <polygon points="26,72 30,75 28,81 24,78" fill="#ffffff" stroke="#000" strokeWidth="1" />
      <polygon points="38,72 34,75 36,81 40,78" fill="#ffffff" stroke="#000" strokeWidth="1" />
    </svg>
  </div>
);

// High-tech Tactical Radar Compass SVG
export const RadarCompassGrid: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    className={`w-full h-full ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer Ring */}
    <circle cx="200" cy="200" r="190" stroke="rgba(31,76,214,0.4)" strokeWidth="2" strokeDasharray="6 4" />
    <circle cx="200" cy="200" r="170" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
    <circle cx="200" cy="200" r="120" stroke="rgba(31,76,214,0.3)" strokeWidth="1" />
    <circle cx="200" cy="200" r="70" stroke="rgba(255,34,51,0.35)" strokeWidth="1" strokeDasharray="3 3" />
    <circle cx="200" cy="200" r="25" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />

    {/* Crosshairs */}
    <line x1="200" y1="10" x2="200" y2="390" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
    <line x1="10" y1="200" x2="390" y2="200" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

    {/* Diagonal Degree Ticks */}
    <line x1="60" y1="60" x2="340" y2="340" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />
    <line x1="340" y1="60" x2="60" y2="340" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />

    {/* Compass Markers */}
    <text x="200" y="32" fill="#ff2233" fontSize="11" fontFamily="Oswald, sans-serif" letterSpacing="2" textAnchor="middle">N 000°</text>
    <text x="375" y="204" fill="#78a0ff" fontSize="10" fontFamily="Oswald, sans-serif" letterSpacing="1" textAnchor="middle">E 090°</text>
    <text x="200" y="385" fill="#78a0ff" fontSize="10" fontFamily="Oswald, sans-serif" letterSpacing="1" textAnchor="middle">S 180°</text>
    <text x="28" y="204" fill="#78a0ff" fontSize="10" fontFamily="Oswald, sans-serif" letterSpacing="1" textAnchor="middle">W 270°</text>
  </svg>
);

// Spider Web Pattern Background SVG
export const SpiderWebBackground: React.FC<{ className?: string; opacity?: number }> = ({
  className = "",
  opacity = 0.05,
}) => (
  <svg
    viewBox="0 0 800 800"
    fill="none"
    className={`pointer-events-none select-none ${className}`}
    style={{ opacity }}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Radiating Strands from Top Center */}
    <line x1="400" y1="0" x2="0" y2="300" stroke="#ffffff" strokeWidth="1" />
    <line x1="400" y1="0" x2="0" y2="600" stroke="#ffffff" strokeWidth="1" />
    <line x1="400" y1="0" x2="100" y2="800" stroke="#ffffff" strokeWidth="1" />
    <line x1="400" y1="0" x2="300" y2="800" stroke="#ffffff" strokeWidth="1" />
    <line x1="400" y1="0" x2="500" y2="800" stroke="#ffffff" strokeWidth="1" />
    <line x1="400" y1="0" x2="700" y2="800" stroke="#ffffff" strokeWidth="1" />
    <line x1="400" y1="0" x2="800" y2="600" stroke="#ffffff" strokeWidth="1" />
    <line x1="400" y1="0" x2="800" y2="300" stroke="#ffffff" strokeWidth="1" />

    {/* Concentric Web Arcs */}
    <path d="M300 50 Q400 90 500 50" stroke="#ffffff" strokeWidth="1" fill="none" />
    <path d="M220 120 Q400 180 580 120" stroke="#ffffff" strokeWidth="1" fill="none" />
    <path d="M150 200 Q400 290 650 200" stroke="#ffffff" strokeWidth="1" fill="none" />
    <path d="M80 300 Q400 420 720 300" stroke="#ffffff" strokeWidth="1" fill="none" />
    <path d="M20 420 Q400 580 780 420" stroke="#ffffff" strokeWidth="1" fill="none" />
    <path d="M0 560 Q400 750 800 560" stroke="#ffffff" strokeWidth="1" fill="none" />
  </svg>
);
