"use client";

import React, { useEffect, useState } from "react";

interface RailItem {
  id: string;
  label: string;
}

const RAIL_ITEMS: RailItem[] = [
  { id: "hero", label: "Home" },
  { id: "identity", label: "About" },
  { id: "mj-wall-section", label: "Certificate" },
  { id: "project-showcase", label: "Project" },
  { id: "footer", label: "Trailer" },
];

export const SpideyWebRail: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const updateActiveSection = () => {
      const triggerLine = window.innerHeight * 0.45;
      let current = RAIL_ITEMS[0].id;

      for (const item of RAIL_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerLine) {
            current = item.id;
          }
        }
      }

      setActiveSection(current);
    };

    const observer = new IntersectionObserver(
      () => {
        updateActiveSection();
      },
      {
        root: null,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    RAIL_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    const handleCustomChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setActiveSection(customEvent.detail);
      }
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true, capture: true });
    window.addEventListener("resize", updateActiveSection, { passive: true });
    window.addEventListener("spidey-section-change", handleCustomChange);
    updateActiveSection();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveSection, { capture: true });
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("spidey-section-change", handleCustomChange);
    };
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("spidey-section-change", { detail: id }));
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const activeIndex = Math.max(
    0,
    RAIL_ITEMS.findIndex((s) => s.id === activeSection)
  );

  return (
    <>
      {/* Exact Web Rail from spidermania.in */}
      <nav
        aria-label="Page sections"
        className="bnd-web-rail"
        style={{
          position: "fixed",
          right: "clamp(12px, 1.8vw, 28px)",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 44,
        }}
      >
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Vertical Web Thread Line */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "6px",
              bottom: "6px",
              left: "50%",
              width: "1px",
              marginLeft: "-0.5px",
              background:
                "linear-gradient(180deg, transparent, rgba(255,255,255,0.16) 12%, rgba(255,255,255,0.16) 88%, transparent)",
              pointerEvents: "none",
            }}
          />

          {/* Sliding Spider Indicator */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "50%",
              top: `${activeIndex * 34 + 8}px`,
              transform: "translateX(-50%)",
              transition: "top 600ms cubic-bezier(.22,1,.36,1)",
              pointerEvents: "none",
              zIndex: 2,
              filter: "drop-shadow(0 0 6px rgba(255,255,255,0.45))",
            }}
          >
            <img src="/assets/cursor-crosshair-red.svg" alt="" width="18" height="18" style={{ display: "block", filter: "drop-shadow(0 0 8px rgba(255,34,51,0.8))" }} />
          </span>

          {/* Rail Items */}
          {RAIL_ITEMS.map((item) => {
            const isActive = item.id === activeSection;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                data-web-hover="true"
                className="bnd-rail-item"
                aria-label={item.label}
                aria-current={isActive ? "true" : undefined}
                style={{
                  position: "relative",
                  width: "32px",
                  height: "34px",
                  border: 0,
                  padding: 0,
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  className="bnd-rail-dot"
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: isActive ? "transparent" : "rgba(255,255,255,0.3)",
                    boxShadow: isActive ? "none" : "0 0 0 1px rgba(255,255,255,0.1)",
                  }}
                />
                <span
                  className="bnd-rail-label"
                  style={{
                    position: "absolute",
                    right: "100%",
                    marginRight: "12px",
                    top: "50%",
                    whiteSpace: "nowrap",
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.82)",
                    background: "rgba(8,8,14,0.75)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "5px 11px",
                    borderRadius: "6px",
                    backdropFilter: "blur(4px)",
                    pointerEvents: "none",
                  }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default SpideyWebRail;
