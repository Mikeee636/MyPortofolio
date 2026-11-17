"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import SpideyLogo from "./SpideyLogo";

export const SpideyNavbar: React.FC = () => {
  const [showSwingModal, setShowSwingModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const sectionIds = ["hero", "identity", "mj-wall-section", "project-showcase"];

    const updateActiveSection = () => {
      const triggerLine = window.innerHeight * 0.45;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerLine) {
            current = id;
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

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleCustomChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail && sectionIds.includes(customEvent.detail)) {
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
    setMobileMenuOpen(false);
    if (["hero", "identity", "mj-wall-section", "project-showcase"].includes(id)) {
      setActiveSection(id);
    }
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("spidey-section-change", { detail: id }));
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav
        className="bnd-nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "clamp(12px, 1.8vh, 18px) clamp(20px, 3.5vw, 56px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          opacity: 1,
          background:
            "linear-gradient(to bottom, rgba(7,9,19,0.85) 0%, rgba(7,9,19,0.4) 60%, transparent 100%)",
          backdropFilter: "blur(6px)",
        }}
      >
        {/* Left: Brand 3D Spider-Man Style Logo "MICHAEL ANDRE / PORTOFOLIO" */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button
            onClick={() => scrollTo("hero")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "transparent",
              border: 0,
              padding: 0,
              cursor: "pointer",
              textAlign: "left",
            }}
            data-web-hover="true"
            aria-label="Michael Andre Portfolio Home"
          >
            <SpideyLogo height="clamp(32px, 3.8vw, 48px)" />
          </button>

        </div>

        {/* Right Desktop Nav matching reference image */}
        <div
          className="bnd-nav-desktop"
          style={{ display: "flex", alignItems: "center", gap: "clamp(14px, 2vw, 24px)" }}
        >
          {/* Main Nav Links: Home, About, Certificate, Project with Active Underline Indicator */}
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              gap: "clamp(12px, 1.6vw, 22px)",
              alignItems: "center",
            }}
          >
            {[
              { id: "hero", label: "HOME" },
              { id: "identity", label: "ABOUT" },
              { id: "mj-wall-section", label: "CERTIFICATE" },
              { id: "project-showcase", label: "PROJECT" },
            ].map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    data-web-hover="true"
                    className="nav-link"
                    style={{
                      position: "relative",
                      color: isActive ? "#ffffff" : "rgba(255,255,255,0.72)",
                      background: "transparent",
                      border: 0,
                      fontSize: "11px",
                      fontWeight: isActive ? 700 : 500,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      padding: "6px 4px 10px 4px",
                      cursor: "pointer",
                      transition: "color 0.25s ease",
                      textShadow: isActive ? "0 0 12px rgba(255,58,74,0.6)" : "none",
                    }}
                  >
                    <span>{item.label}</span>
                    {/* Active Underline Indicator */}
                    <span
                      style={{
                        position: "absolute",
                        bottom: "2px",
                        left: "50%",
                        transform: isActive ? "translateX(-50%) scaleX(1)" : "translateX(-50%) scaleX(0)",
                        transformOrigin: "center",
                        width: "100%",
                        height: "2.5px",
                        background: "linear-gradient(90deg, #ff1f33 0%, #ff5c6d 50%, #ff1f33 100%)",
                        boxShadow: "0 0 10px #ff1f33, 0 0 18px rgba(255,31,51,0.6)",
                        borderRadius: "9999px",
                        transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease",
                        opacity: isActive ? 1 : 0,
                        pointerEvents: "none",
                      }}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* SEARCH Button Container with Hanging Mini Spider-Man */}
          <div
            style={{
              position: "relative",
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* SEARCH Polygon Button with Magnifying Glass */}
            <button
              onClick={() => setShowSwingModal(true)}
              data-web-hover="true"
              aria-label="Search"
              style={{
                position: "relative",
                border: 0,
                padding: 0,
                background: "transparent",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              <span
                style={{
                  display: "block",
                  padding: "2px",
                  background: "linear-gradient(180deg, #1f4cd6 0%, #0b2a8a 100%)",
                  clipPath:
                    "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                  boxShadow: "0 4px 16px rgba(31,76,214,0.4)",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    padding: "7px 16px",
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
                  <Search size={13} strokeWidth={2.5} />
                  <span>SEARCH</span>
                </span>
              </span>
            </button>

            {/* Hanging Mini Spider-Man (Exact Spidermania.in sprite & animation) */}
            <div
              style={{
                position: "absolute",
                top: "calc(100% - 1px)",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pointerEvents: "none",
                zIndex: 35,
              }}
            >
              {/* Swaying Pendulum with transform-origin top center */}
              <div
                style={{
                  transformOrigin: "top center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  animation: "bnd-sway 3.2s ease-in-out infinite alternate",
                }}
              >
                {/* Glowing Silk Web Thread */}
                <div
                  style={{
                    width: "1.5px",
                    height: "16px",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.95) 75%, #ffffff 100%)",
                    boxShadow: "0 0 6px rgba(255,255,255,0.85)",
                  }}
                />

                {/* 77-Frame Pixel Spider-Man Animated Sprite */}
                <div
                  style={{
                    width: "80px",
                    height: "124px",
                    backgroundImage: "url('/assets/spidey-strip.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0 0",
                    backgroundSize: "6160px 124px",
                    animation: "bnd-spidey-frames 2.3s steps(77) infinite",
                    transform: "scale(0.38)",
                    transformOrigin: "top center",
                    marginTop: "-1px",
                    marginBottom: "-75px",
                    filter:
                      "drop-shadow(0 6px 12px rgba(0,0,0,0.75)) drop-shadow(0 0 8px rgba(255,34,51,0.35))",
                    imageRendering: "pixelated",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger Burger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bnd-nav-burger"
          aria-label="Menu"
          aria-expanded={mobileMenuOpen}
          style={{
            border: 0,
            background: "rgba(8,8,12,0.5)",
            width: "42px",
            height: "42px",
            borderRadius: "8px",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.12)",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "66px",
            left: "14px",
            right: "14px",
            zIndex: 60,
            background: "rgba(10,10,16,0.96)",
            border: "1px solid rgba(255,60,74,0.4)",
            borderRadius: "12px",
            backdropFilter: "blur(16px)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {[
            { id: "hero", label: "HOME" },
            { id: "identity", label: "ABOUT" },
            { id: "mj-wall-section", label: "CERTIFICATE" },
            { id: "project-showcase", label: "PROJECT" },
          ].map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  background: "transparent",
                  border: 0,
                  textAlign: "left",
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "14px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: isActive ? "#ff3a4a" : "#fff",
                  fontWeight: isActive ? 700 : 500,
                  padding: "8px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    style={{
                      width: "28px",
                      height: "2.5px",
                      background: "linear-gradient(90deg, #ff1f33, #ff5c6d)",
                      boxShadow: "0 0 10px #ff1f33",
                      borderRadius: "9999px",
                    }}
                  />
                )}
              </button>
            );
          })}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setShowSwingModal(true);
            }}
            style={{
              marginTop: "8px",
              padding: "12px",
              background: "linear-gradient(180deg, #ff1f33 0%, #c00014 100%)",
              border: 0,
              borderRadius: "8px",
              color: "#fff",
              fontFamily: "'Oswald', sans-serif",
              fontSize: "13px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <Search size={14} strokeWidth={2.5} />
            <span>SEARCH</span>
          </button>
        </div>
      )}

      {/* SWING IN 3D Walkthrough Modal */}
      {showSwingModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 85,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(14px, 3vh, 32px)",
            background: "rgba(4,6,14,0.85)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "min(1000px, 100%)",
              maxHeight: "94vh",
              overflowY: "auto",
              padding: "1px",
              background:
                "linear-gradient(135deg, rgba(120,150,220,0.35) 0%, rgba(255,40,60,0.5) 50%, rgba(120,150,220,0.2) 100%)",
              clipPath:
                "polygon(28px 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%, 0 28px)",
              boxShadow: "0 40px 110px rgba(0,0,0,0.7), 0 0 70px rgba(30,50,110,0.3)",
            }}
          >
            <div
              className="walk-panel"
              style={{
                position: "relative",
                background:
                  "linear-gradient(160deg, rgba(11,17,34,0.97) 0%, rgba(6,9,20,0.98) 55%, rgba(9,17,36,0.97) 100%)",
                clipPath:
                  "polygon(27px 0, 100% 0, 100% calc(100% - 27px), calc(100% - 27px) 100%, 0 100%, 0 27px)",
                overflow: "hidden",
              }}
            >
              <img
                src="/assets/web.png"
                alt=""
                style={{
                  position: "absolute",
                  bottom: "-60px",
                  right: "-50px",
                  width: "320px",
                  opacity: 0.06,
                  mixBlendMode: "screen",
                  pointerEvents: "none",
                }}
              />

              <button
                onClick={() => setShowSwingModal(false)}
                data-web-hover="true"
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: "14px",
                  right: "16px",
                  zIndex: 5,
                  width: "34px",
                  height: "34px",
                  border: 0,
                  background: "transparent",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "26px",
                  cursor: "pointer",
                  lineHeight: 1,
                }}
              >
                ×
              </button>

              <div
                className="walk-head"
                style={{
                  position: "relative",
                  padding: "clamp(24px, 3.6vh, 40px) clamp(24px, 3vw, 44px) 0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: "clamp(19px, 2.5vw, 29px)",
                    lineHeight: 1.05,
                    fontWeight: 800,
                    letterSpacing: "0.01em",
                    color: "#fff",
                    textShadow: "0 2px 12px rgba(0,0,0,0.5)",
                    textWrap: "balance",
                  }}
                >
                  Every Brand New Day starts with{" "}
                  <span style={{ color: "#ff3a4a" }}>someone like you</span>
                </h2>
                <p
                  style={{
                    margin: "10px auto 0",
                    maxWidth: "740px",
                    fontSize: "clamp(12.5px, 1.3vw, 14px)",
                    lineHeight: 1.5,
                    color: "rgba(210,222,255,0.82)",
                    textWrap: "pretty",
                  }}
                >
                  Choose your identity, inspect engineering projects, and track real-time telemetry across the Web.
                </p>
                <div
                  style={{
                    marginTop: "clamp(12px, 1.8vh, 18px)",
                    width: "min(320px, 70%)",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, rgba(120,150,220,0.15) 0%, rgba(120,150,220,0.35) 30%, #ff2233 50%, rgba(120,150,220,0.35) 70%, rgba(120,150,220,0.15) 100%)",
                  }}
                />
              </div>

              <div
                className="walk-body"
                style={{
                  position: "relative",
                  padding:
                    "clamp(16px, 2.4vh, 24px) clamp(24px, 3vw, 40px) clamp(24px, 3.6vh, 40px)",
                }}
              >
                <div
                  className="walk-grid"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    gap: "clamp(9px, 1.1vw, 14px)",
                  }}
                >
                  {/* Card 1: Identity */}
                  <div
                    onClick={() => {
                      setShowSwingModal(false);
                      scrollTo("identity");
                    }}
                    data-web-hover="true"
                    role="button"
                    tabIndex={0}
                    className="bnd-card walk-card"
                    style={{
                      position: "relative",
                      flex: "0 1 calc((100% - 2 * clamp(9px, 1.1vw, 14px)) / 3)",
                      boxSizing: "border-box",
                      padding: "1px",
                      background:
                        "linear-gradient(140deg, rgba(120,150,220,0.3), rgba(255,40,60,0.28))",
                      clipPath:
                        "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="bnd-card-body"
                      style={{
                        position: "relative",
                        height: "100%",
                        boxSizing: "border-box",
                        padding: "clamp(11px, 1.5vh, 15px) clamp(12px, 1.3vw, 16px)",
                        background:
                          "linear-gradient(160deg, rgba(18,26,48,0.95), rgba(9,14,28,0.95))",
                        clipPath:
                          "polygon(13px 0, 100% 0, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 13px)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "9px" }}>
                        <img
                          src="/assets/icon-spider-id.png"
                          alt=""
                          className="bnd-card-emoji"
                          style={{
                            width: "clamp(26px, 2.9vw, 34px)",
                            height: "clamp(26px, 2.9vw, 34px)",
                            objectFit: "contain",
                            display: "block",
                          }}
                        />
                        <div>
                          <div
                            style={{
                              fontFamily: "'Oswald', sans-serif",
                              fontSize: "clamp(13px, 1.4vw, 15px)",
                              fontWeight: 500,
                              textTransform: "uppercase",
                              color: "#fff",
                              lineHeight: 1.08,
                            }}
                          >
                            Discover Your
                            <br />
                            Spider Identity
                          </div>
                        </div>
                      </div>
                      <div style={{ fontSize: "clamp(10.5px, 1.15vw, 12px)", lineHeight: 1.4, color: "rgba(190,205,240,0.7)" }}>
                        Inspect engineering traits, GPA, and developer credentials.
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Spider Twins */}
                  <div
                    onClick={() => {
                      setShowSwingModal(false);
                      scrollTo("identity");
                    }}
                    data-web-hover="true"
                    role="button"
                    tabIndex={0}
                    className="bnd-card walk-card"
                    style={{
                      position: "relative",
                      flex: "0 1 calc((100% - 2 * clamp(9px, 1.1vw, 14px)) / 3)",
                      boxSizing: "border-box",
                      padding: "1px",
                      background:
                        "linear-gradient(140deg, rgba(120,150,220,0.3), rgba(255,40,60,0.28))",
                      clipPath:
                        "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="bnd-card-body"
                      style={{
                        position: "relative",
                        height: "100%",
                        boxSizing: "border-box",
                        padding: "clamp(11px, 1.5vh, 15px) clamp(12px, 1.3vw, 16px)",
                        background:
                          "linear-gradient(160deg, rgba(18,26,48,0.95), rgba(9,14,28,0.95))",
                        clipPath:
                          "polygon(13px 0, 100% 0, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 13px)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "9px" }}>
                        <img
                          src="/assets/icon-find-spider.png"
                          alt=""
                          className="bnd-card-emoji"
                          style={{
                            width: "clamp(26px, 2.9vw, 34px)",
                            height: "clamp(26px, 2.9vw, 34px)",
                            objectFit: "contain",
                            display: "block",
                          }}
                        />
                        <div>
                          <div
                            style={{
                              fontFamily: "'Oswald', sans-serif",
                              fontSize: "clamp(13px, 1.4vw, 15px)",
                              fontWeight: 500,
                              textTransform: "uppercase",
                              color: "#fff",
                              lineHeight: 1.08,
                            }}
                          >
                            Find Your
                            <br />
                            Spider Twins
                          </div>
                        </div>
                      </div>
                      <div style={{ fontSize: "clamp(10.5px, 1.15vw, 12px)", lineHeight: 1.4, color: "rgba(190,205,240,0.7)" }}>
                        Connect with developers and collaborators across the Multiverse.
                      </div>
                    </div>
                  </div>

                  {/* Card 3: MJ Wall */}
                  <div
                    onClick={() => {
                      setShowSwingModal(false);
                      scrollTo("mj-wall-section");
                    }}
                    data-web-hover="true"
                    role="button"
                    tabIndex={0}
                    className="bnd-card walk-card"
                    style={{
                      position: "relative",
                      flex: "0 1 calc((100% - 2 * clamp(9px, 1.1vw, 14px)) / 3)",
                      boxSizing: "border-box",
                      padding: "1px",
                      background:
                        "linear-gradient(140deg, rgba(120,150,220,0.3), rgba(255,40,60,0.28))",
                      clipPath:
                        "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="bnd-card-body"
                      style={{
                        position: "relative",
                        height: "100%",
                        boxSizing: "border-box",
                        padding: "clamp(11px, 1.5vh, 15px) clamp(12px, 1.3vw, 16px)",
                        background:
                          "linear-gradient(160deg, rgba(18,26,48,0.95), rgba(9,14,28,0.95))",
                        clipPath:
                          "polygon(13px 0, 100% 0, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 13px)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "9px" }}>
                        <img
                          src="/assets/icon-message.png"
                          alt=""
                          className="bnd-card-emoji"
                          style={{
                            width: "clamp(26px, 2.9vw, 34px)",
                            height: "clamp(26px, 2.9vw, 34px)",
                            objectFit: "contain",
                            display: "block",
                          }}
                        />
                        <div>
                          <div
                            style={{
                              fontFamily: "'Oswald', sans-serif",
                              fontSize: "clamp(13px, 1.4vw, 15px)",
                              fontWeight: 500,
                              textTransform: "uppercase",
                              color: "#fff",
                              lineHeight: 1.08,
                            }}
                          >
                            Leave a Message
                            <br />
                            For MJ
                          </div>
                        </div>
                      </div>
                      <div style={{ fontSize: "clamp(10.5px, 1.15vw, 12px)", lineHeight: 1.4, color: "rgba(190,205,240,0.7)" }}>
                        Share your thoughts and messages for MJ with the community.
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Trailer */}
                  <div
                    onClick={() => {
                      setShowSwingModal(false);
                      scrollTo("footer");
                    }}
                    data-web-hover="true"
                    role="button"
                    tabIndex={0}
                    className="bnd-card walk-card"
                    style={{
                      position: "relative",
                      flex: "0 1 calc((100% - 2 * clamp(9px, 1.1vw, 14px)) / 3)",
                      boxSizing: "border-box",
                      padding: "1px",
                      background:
                        "linear-gradient(140deg, rgba(120,150,220,0.3), rgba(255,40,60,0.28))",
                      clipPath:
                        "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="bnd-card-body"
                      style={{
                        position: "relative",
                        height: "100%",
                        boxSizing: "border-box",
                        padding: "clamp(11px, 1.5vh, 15px) clamp(12px, 1.3vw, 16px)",
                        background:
                          "linear-gradient(160deg, rgba(18,26,48,0.95), rgba(9,14,28,0.95))",
                        clipPath:
                          "polygon(13px 0, 100% 0, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 13px)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "9px" }}>
                        <img
                          src="/assets/icon-trailer.svg"
                          alt=""
                          className="bnd-card-emoji"
                          style={{
                            width: "clamp(26px, 2.9vw, 34px)",
                            height: "clamp(26px, 2.9vw, 34px)",
                            objectFit: "contain",
                            display: "block",
                          }}
                        />
                        <div>
                          <div
                            style={{
                              fontFamily: "'Oswald', sans-serif",
                              fontSize: "clamp(13px, 1.4vw, 15px)",
                              fontWeight: 500,
                              textTransform: "uppercase",
                              color: "#fff",
                              lineHeight: 1.08,
                            }}
                          >
                            Watch the
                            <br />
                            Official Trailer
                          </div>
                        </div>
                      </div>
                      <div style={{ fontSize: "clamp(10.5px, 1.15vw, 12px)", lineHeight: 1.4, color: "rgba(190,205,240,0.7)" }}>
                        Step into the Spider World — experience the Brand New Day trailer.
                      </div>
                    </div>
                  </div>

                  {/* Card 5: Forum */}
                  <div
                    onClick={() => {
                      setShowSwingModal(false);
                      scrollTo("feed");
                    }}
                    data-web-hover="true"
                    role="button"
                    tabIndex={0}
                    className="bnd-card walk-card"
                    style={{
                      position: "relative",
                      flex: "0 1 calc((100% - 2 * clamp(9px, 1.1vw, 14px)) / 3)",
                      boxSizing: "border-box",
                      padding: "1px",
                      background:
                        "linear-gradient(140deg, rgba(120,150,220,0.3), rgba(255,40,60,0.28))",
                      clipPath:
                        "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="bnd-card-body"
                      style={{
                        position: "relative",
                        height: "100%",
                        boxSizing: "border-box",
                        padding: "clamp(11px, 1.5vh, 15px) clamp(12px, 1.3vw, 16px)",
                        background:
                          "linear-gradient(160deg, rgba(18,26,48,0.95), rgba(9,14,28,0.95))",
                        clipPath:
                          "polygon(13px 0, 100% 0, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 13px)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "9px" }}>
                        <img
                          src="/assets/icon-conversation.png"
                          alt=""
                          className="bnd-card-emoji"
                          style={{
                            width: "clamp(26px, 2.9vw, 34px)",
                            height: "clamp(26px, 2.9vw, 34px)",
                            objectFit: "contain",
                            display: "block",
                          }}
                        />
                        <div>
                          <div
                            style={{
                              fontFamily: "'Oswald', sans-serif",
                              fontSize: "clamp(13px, 1.4vw, 15px)",
                              fontWeight: 500,
                              textTransform: "uppercase",
                              color: "#fff",
                              lineHeight: 1.08,
                            }}
                          >
                            Explore
                            <br />
                            Projects Matrix
                          </div>
                        </div>
                      </div>
                      <div style={{ fontSize: "clamp(10.5px, 1.15vw, 12px)", lineHeight: 1.4, color: "rgba(190,205,240,0.7)" }}>
                        Browse full-stack platforms, apps, and engineering repositories.
                      </div>
                    </div>
                  </div>

                  {/* Card 6: Spidey Tracker */}
                  <div
                    onClick={() => {
                      setShowSwingModal(false);
                      scrollTo("tracker");
                    }}
                    data-web-hover="true"
                    role="button"
                    tabIndex={0}
                    className="bnd-card walk-card"
                    style={{
                      position: "relative",
                      flex: "0 1 calc((100% - 2 * clamp(9px, 1.1vw, 14px)) / 3)",
                      boxSizing: "border-box",
                      padding: "1px",
                      background:
                        "linear-gradient(140deg, rgba(120,150,220,0.3), rgba(255,40,60,0.28))",
                      clipPath:
                        "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="bnd-card-body"
                      style={{
                        position: "relative",
                        height: "100%",
                        boxSizing: "border-box",
                        padding: "clamp(11px, 1.5vh, 15px) clamp(12px, 1.3vw, 16px)",
                        background:
                          "linear-gradient(160deg, rgba(18,26,48,0.95), rgba(9,14,28,0.95))",
                        clipPath:
                          "polygon(13px 0, 100% 0, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 13px)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "9px" }}>
                        <img
                          src="/assets/icon-track.png"
                          alt=""
                          className="bnd-card-emoji"
                          style={{
                            width: "clamp(26px, 2.9vw, 34px)",
                            height: "clamp(26px, 2.9vw, 34px)",
                            objectFit: "contain",
                            display: "block",
                          }}
                        />
                        <div>
                          <div
                            style={{
                              fontFamily: "'Oswald', sans-serif",
                              fontSize: "clamp(13px, 1.4vw, 15px)",
                              fontWeight: 500,
                              textTransform: "uppercase",
                              color: "#fff",
                              lineHeight: 1.08,
                            }}
                          >
                            Track
                            <br />
                            Spider-Man
                          </div>
                        </div>
                      </div>
                      <div style={{ fontSize: "clamp(10.5px, 1.15vw, 12px)", lineHeight: 1.4, color: "rgba(190,205,240,0.7)" }}>
                        Follow Spider-Man&apos;s latest sightings with Spidey Tracker.
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "clamp(12px, 1.8vh, 20px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "clamp(12px, 1.8vh, 18px)",
                    borderTop: "1px solid rgba(120,150,220,0.15)",
                  }}
                >
                  <button
                    onClick={() => {
                      setShowSwingModal(false);
                      scrollTo("identity");
                    }}
                    data-web-hover="true"
                    className="bnd-cta"
                    style={{
                      position: "relative",
                      border: 0,
                      padding: 0,
                      background: "transparent",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        padding: "3px",
                        background: "linear-gradient(180deg, #ff2233 0%, #8b000d 100%)",
                        clipPath:
                          "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
                        boxShadow: "0 12px 30px rgba(255,34,51,0.35)",
                      }}
                    >
                      <span
                        className="bnd-cta-inner"
                        style={{
                          display: "block",
                          padding: "12px 28px",
                          background: "linear-gradient(180deg, #ff3a4a 0%, #c00014 100%)",
                          clipPath:
                            "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                          color: "#fff",
                          fontWeight: 700,
                          fontSize: "clamp(12px, 1.3vw, 14px)",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                        }}
                      >
                        <span className="bnd-cta-sheen" />
                        Join the Spider World
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SpideyNavbar;
