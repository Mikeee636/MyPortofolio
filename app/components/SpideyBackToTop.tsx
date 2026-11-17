"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const SpideyBackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Tampilkan tombol saat pengguna telah scroll ke bawah melewati hero
      if (typeof window !== "undefined") {
        setVisible(window.scrollY > 280);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      const hero = document.getElementById("hero");
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "calc(clamp(16px, 3vh, 28px) + env(safe-area-inset-bottom, 0px))",
        right: "clamp(16px, 2.5vw, 28px)",
        zIndex: 48,
        transition:
          "opacity 320ms cubic-bezier(.16,.84,.3,1), transform 320ms cubic-bezier(.16,.84,.3,1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Spider-Man Cut-Corner Polygon Button (Identical styling to SEARCH button) */}
      <button
        onClick={scrollToTop}
        data-web-hover="true"
        aria-label="Kembali ke atas"
        style={{
          position: "relative",
          border: 0,
          padding: 0,
          background: "transparent",
          cursor: "pointer",
          fontFamily: "inherit",
          transition: "transform 220ms ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.06) translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) translateY(0)";
        }}
      >
        {/* Outer Blue Polygon Frame */}
        <span
          style={{
            display: "block",
            padding: "2px",
            background: "linear-gradient(180deg, #1f4cd6 0%, #0b2a8a 100%)",
            clipPath:
              "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
            boxShadow:
              "0 4px 18px rgba(31,76,214,0.45), 0 0 20px rgba(255,34,51,0.25)",
          }}
        >
          {/* Inner Red Polygon Body */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              padding: "8px 16px",
              background: "linear-gradient(180deg, #ff1f33 0%, #c00014 100%)",
              clipPath:
                "polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            <ArrowUp size={14} strokeWidth={2.8} />
            <span>TOP</span>
          </span>
        </span>
      </button>
    </div>
  );
};

export default SpideyBackToTop;
