import React from "react";

// SpongeBob Stylized Badge with Red Tie and Collar
export function SpongeBobBadge({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="spongeYellow" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="60%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#eab308" />
        </radialGradient>
      </defs>

      {/* Sponge Body */}
      <rect x="8" y="8" width="84" height="64" rx="14" fill="url(#spongeYellow)" stroke="#854d0e" strokeWidth="3" />

      {/* Sponge Pores */}
      <ellipse cx="22" cy="22" rx="6" ry="5" fill="#ca8a04" opacity="0.6" />
      <ellipse cx="78" cy="24" rx="5" ry="4" fill="#ca8a04" opacity="0.6" />
      <ellipse cx="30" cy="48" rx="4" ry="4" fill="#ca8a04" opacity="0.6" />
      <ellipse cx="72" cy="50" rx="6" ry="5" fill="#ca8a04" opacity="0.6" />
      <ellipse cx="50" cy="18" rx="3.5" ry="3" fill="#ca8a04" opacity="0.6" />

      {/* Big Expressive Cartoon Eyes */}
      <circle cx="36" cy="36" r="14" fill="#ffffff" stroke="#854d0e" strokeWidth="2.5" />
      <circle cx="64" cy="36" r="14" fill="#ffffff" stroke="#854d0e" strokeWidth="2.5" />

      {/* Blue Irises & Pupils */}
      <circle cx="38" cy="36" r="6.5" fill="#38bdf8" />
      <circle cx="38" cy="36" r="3.5" fill="#0f172a" />
      <circle cx="36" cy="34" r="1.5" fill="#ffffff" />

      <circle cx="62" cy="36" r="6.5" fill="#38bdf8" />
      <circle cx="62" cy="36" r="3.5" fill="#0f172a" />
      <circle cx="60" cy="34" r="1.5" fill="#ffffff" />

      {/* Cheerful Smile with Buck Teeth */}
      <path d="M30 52 C42 66 58 66 70 52" stroke="#854d0e" strokeWidth="3" strokeLinecap="round" />
      <rect x="44" y="56" width="5" height="6" fill="#ffffff" stroke="#854d0e" strokeWidth="1.5" />
      <rect x="51" y="56" width="5" height="6" fill="#ffffff" stroke="#854d0e" strokeWidth="1.5" />

      {/* White Shirt Collar & Red Tie */}
      <path d="M12 72 H88 V86 H12 Z" fill="#ffffff" stroke="#854d0e" strokeWidth="2" />
      <polygon points="50,72 43,84 50,96 57,84" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
      <polygon points="45,72 55,72 50,78" fill="#b91c1c" />

      {/* Brown Pants */}
      <path d="M12 86 H88 V96 H12 Z" fill="#78350f" stroke="#854d0e" strokeWidth="2" />
      <rect x="22" y="88" width="8" height="2" fill="#000000" />
      <rect x="46" y="88" width="8" height="2" fill="#000000" />
      <rect x="70" y="88" width="8" height="2" fill="#000000" />
    </svg>
  );
}

// Delicious Krabby Patty
export function KrabbyPattyIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top Bun */}
      <path
        d="M8 22 C8 12 16 7 24 7 C32 7 40 12 40 22 H8 Z"
        fill="#f59e0b"
        stroke="#92400e"
        strokeWidth="2"
      />
      {/* Sesame Seeds */}
      <ellipse cx="18" cy="14" rx="1.5" ry="0.8" fill="#fef3c7" transform="rotate(-15 18 14)" />
      <ellipse cx="26" cy="11" rx="1.5" ry="0.8" fill="#fef3c7" />
      <ellipse cx="32" cy="15" rx="1.5" ry="0.8" fill="#fef3c7" transform="rotate(15 32 15)" />

      {/* Lettuce */}
      <path
        d="M6 22 Q12 25 18 22 Q24 25 30 22 Q36 25 42 22 L41 26 Q36 28 30 25 Q24 28 18 25 Q12 28 7 26 Z"
        fill="#22c55e"
      />

      {/* Tomato */}
      <rect x="9" y="24" width="30" height="3" rx="1.5" fill="#ef4444" stroke="#991b1b" strokeWidth="1" />

      {/* Golden Cheese */}
      <polygon points="10,27 38,27 41,31 32,29 20,32 10,27" fill="#facc15" stroke="#b45309" strokeWidth="0.8" />

      {/* Burger Patty */}
      <rect x="8" y="28" width="32" height="6" rx="3" fill="#78350f" stroke="#451a03" strokeWidth="1.5" />

      {/* Bottom Bun */}
      <path d="M9 34 H39 C39 39 34 41 24 41 C14 41 9 39 9 34 Z" fill="#f59e0b" stroke="#92400e" strokeWidth="2" />
    </svg>
  );
}

// Pink Jellyfish
export function JellyfishIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="jellyPink" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#db2777" />
        </radialGradient>
      </defs>

      {/* Bell / Cap */}
      <path
        d="M10 24 C10 12 16 6 24 6 C32 6 38 12 38 24 Q31 22 24 24 Q17 22 10 24 Z"
        fill="url(#jellyPink)"
        stroke="#9d174d"
        strokeWidth="1.8"
      />

      {/* Cute Spots */}
      <circle cx="18" cy="14" r="2" fill="#be185d" opacity="0.6" />
      <circle cx="28" cy="12" r="2.5" fill="#be185d" opacity="0.6" />
      <circle cx="22" cy="19" r="1.5" fill="#be185d" opacity="0.6" />

      {/* Tentacles */}
      <path d="M15 24 Q13 32 16 40" stroke="#db2777" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 24 Q23 33 21 42" stroke="#f472b6" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M28 24 Q26 33 28 42" stroke="#f472b6" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M33 24 Q35 32 32 40" stroke="#db2777" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Pineapple House
export function PineappleHouseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Green Leaves */}
      <path d="M24 16 C20 8 12 6 12 6 C16 12 20 14 24 16 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1.2" />
      <path d="M24 16 C28 8 36 6 36 6 C32 12 28 14 24 16 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1.2" />
      <path d="M24 16 C24 5 24 4 24 4 C24 8 24 12 24 16 Z" fill="#16a34a" stroke="#15803d" strokeWidth="1.2" />

      {/* Pineapple Oval */}
      <ellipse cx="24" cy="28" rx="15" ry="16" fill="#f97316" stroke="#9a3412" strokeWidth="2" />

      {/* Crosshatch */}
      <path d="M14 20 L34 36 M10 28 L30 42 M20 14 L38 30 M34 20 L14 36 M38 28 L18 42 M28 14 L10 30" stroke="#c2410c" strokeWidth="1.2" opacity="0.7" />

      {/* Chimney Pipe */}
      <path d="M34 16 L38 12 H42 V16 L38 20" fill="#64748b" stroke="#334155" strokeWidth="1.2" />

      {/* Porthole Window */}
      <circle cx="24" cy="24" r="4.5" fill="#38bdf8" stroke="#0369a1" strokeWidth="1.8" />
      <circle cx="24" cy="24" r="2.5" fill="#0284c7" />

      {/* Door */}
      <path d="M20 44 V34 C20 32 28 32 28 34 V44 Z" fill="#334155" stroke="#1e293b" strokeWidth="1.5" />
    </svg>
  );
}

// Marine Bubble
export function MarineBubble({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" opacity="0.6" fill="currentColor" fillOpacity="0.1" />
      <ellipse cx="9" cy="8" rx="2" ry="1.2" fill="#ffffff" opacity="0.8" transform="rotate(-30 9 8)" />
    </svg>
  );
}

// Iconic Bikini Bottom Sky Flower Cloud
export function FlowerCloud({
  className = "w-24 h-24",
  color = "#f472b6",
  strokeColor = "#db2777",
}: {
  className?: string;
  color?: string;
  strokeColor?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.85">
        {/* 5 Petals */}
        <circle cx="50" cy="22" r="18" fill={color} stroke={strokeColor} strokeWidth="3" />
        <circle cx="76" cy="42" r="18" fill={color} stroke={strokeColor} strokeWidth="3" />
        <circle cx="66" cy="74" r="18" fill={color} stroke={strokeColor} strokeWidth="3" />
        <circle cx="34" cy="74" r="18" fill={color} stroke={strokeColor} strokeWidth="3" />
        <circle cx="24" cy="42" r="18" fill={color} stroke={strokeColor} strokeWidth="3" />
        {/* Center */}
        <circle cx="50" cy="50" r="22" fill={color} />
        <circle cx="50" cy="50" r="10" fill="#ffffff" opacity="0.5" />
      </g>
    </svg>
  );
}

// Krusty Krab Fry Cook Sailor Hat with Anchor
export function KrustyKrabHat({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hat Base Band */}
      <rect x="14" y="34" width="36" height="7" rx="3" fill="#1e293b" stroke="#0f172a" strokeWidth="1.5" />
      {/* Hat Crown / Cap */}
      <path
        d="M16 34 C12 20 20 8 32 8 C44 8 52 20 48 34 Z"
        fill="#ffffff"
        stroke="#0f172a"
        strokeWidth="2"
      />
      {/* Inner Crease */}
      <path d="M26 14 C29 20 35 20 38 14" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
      {/* Blue Anchor Emblem */}
      <path
        d="M32 20 V28 M28 20 H36 M26 26 C26 31 38 31 38 26"
        stroke="#0284c7"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="19" r="1.5" fill="#0284c7" />
    </svg>
  );
}

// Hydrodynamic Golden Spatula
export function GoldenSpatula({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Spatula Blade */}
      <path
        d="M24 8 H40 L38 28 H26 Z"
        fill="#facc15"
        stroke="#ca8a04"
        strokeWidth="2"
      />
      {/* Slots in Blade */}
      <line x1="29" y1="12" x2="29" y2="22" stroke="#854d0e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32" y1="12" x2="32" y2="24" stroke="#854d0e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="35" y1="12" x2="35" y2="22" stroke="#854d0e" strokeWidth="1.5" strokeLinecap="round" />
      {/* Neck & Handle */}
      <path d="M30 28 L30 36 L31 56 H33 L34 36 L34 28" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
      <rect x="30" y="42" width="4" height="14" rx="2" fill="#78350f" stroke="#451a03" strokeWidth="1" />
    </svg>
  );
}

// Gary the Snail
export function GaryTheSnail({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pink Shell with Purple Spiral & Red Dots */}
      <circle cx="26" cy="24" r="16" fill="#f472b6" stroke="#9d174d" strokeWidth="2" />
      <circle cx="26" cy="24" r="10" stroke="#7e22ce" strokeWidth="2" fill="none" />
      <circle cx="18" cy="22" r="2.5" fill="#ef4444" />
      <circle cx="34" cy="20" r="2.5" fill="#ef4444" />
      <circle cx="24" cy="14" r="2.5" fill="#ef4444" />
      <circle cx="28" cy="32" r="2" fill="#38bdf8" />
      {/* Snail Body (Light Cyan) */}
      <path
        d="M6 38 C6 38 12 36 24 36 C36 36 48 36 54 36 C57 36 58 38 56 40 C52 42 38 42 22 42 C10 42 6 40 6 38 Z"
        fill="#67e8f9"
        stroke="#0891b2"
        strokeWidth="1.8"
      />
      {/* Eye Stalks */}
      <path d="M44 36 L48 18" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" />
      <path d="M48 36 L54 18" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" />
      {/* Big Round Snail Eyes */}
      <circle cx="48" cy="16" r="5" fill="#facc15" stroke="#ca8a04" strokeWidth="1.2" />
      <circle cx="48" cy="16" r="2.5" fill="#ef4444" />
      <circle cx="47" cy="15" r="1" fill="#ffffff" />
      <circle cx="54" cy="16" r="5" fill="#facc15" stroke="#ca8a04" strokeWidth="1.2" />
      <circle cx="54" cy="16" r="2.5" fill="#ef4444" />
      <circle cx="53" cy="15" r="1" fill="#ffffff" />
    </svg>
  );
}
