"use client";

import React, { useState } from "react";
import { SpiderLogo } from "./SpideyIcons";

interface Milestone {
  year: string;
  role: string;
  location: string;
  description: string;
}

const MILESTONES: Milestone[] = [
  {
    year: "2024 - PRESENT",
    role: "Lead Full-Stack Web Architect",
    location: "UNTAR Tech Innovations Lab · Jakarta",
    description: "Architecting high-concurrency Next.js 15 platforms, microservices, and student collaboration hubs.",
  },
  {
    year: "2024 - 2025",
    role: "Senior Informatics Teaching Assistant",
    location: "Faculty of Information Technology",
    description: "Mentoring 200+ students across Data Structures, Algorithms, and Database Management Systems.",
  },
  {
    year: "2024",
    role: "1st Place CEO Innovation Pitch Champion",
    location: "National Business & Tech Olympiad",
    description: "Defended automated enterprise wellness engines, securing 1st place among nationwide competitors.",
  },
  {
    year: "2023",
    role: "National Robotics Telemetry Finalist",
    location: "Indonesian Robotics Championship",
    description: "Built autonomous sensor-guided microcontrollers with sub-50ms reaction times.",
  },
];

export const SpideyTrackerRadar: React.FC = () => {
  const [showTrackerModal, setShowTrackerModal] = useState(false);

  return (
    <>
      <section
        id="tracker"
        data-page="tracker"
        data-screen-label="Spidey Tracker"
        style={{
          position: "relative",
          zIndex: 22,
          minHeight: "100vh",
          overflow: "hidden",
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
          padding: "clamp(80px, 12vh, 140px) 0",
        }}
      >
        {/* Subtle Map Artwork Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/tracker-map-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
            mixBlendMode: "screen",
            pointerEvents: "none",
          }}
        />

        <img
          src="/assets/web.png"
          alt=""
          style={{
            position: "absolute",
            bottom: "-14%",
            right: "-8%",
            width: "min(640px, 42vw)",
            opacity: 0.05,
            mixBlendMode: "screen",
            pointerEvents: "none",
          }}
        />

        <div
          id="tracker-inner"
          data-page-content="true"
          data-reveal="true"
          className="bnd-reveal in"
          style={{
            position: "relative",
            zIndex: 4,
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            boxSizing: "border-box",
            padding:
              "clamp(78px, 12vh, 120px) clamp(24px, 5vw, 80px) clamp(40px, 7vh, 70px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "clamp(30px, 5vw, 70px)",
            flexWrap: "wrap",
          }}
        >
          {/* Left Column Copy & CTA */}
          <div id="tracker-copy" style={{ flex: 1, minWidth: "0", width: "100%", maxWidth: "560px" }}>
            <img
              src="/assets/tracker-logo.png"
              alt="Spidey Tracker"
              className="bnd-line"
              style={{
                animationDelay: "70ms",
                display: "block",
                width: "clamp(240px, 26vw, 360px)",
                height: "auto",
                marginBottom: "22px",
                filter: "drop-shadow(0 6px 20px rgba(0,0,0,0.5))",
              }}
            />

            <h2
              className="bnd-head"
              style={{
                animationDelay: "180ms",
                margin: 0,
                fontFamily: "'Oswald', sans-serif",
                fontSize: "clamp(24px, 3.4vw, 46px)",
                lineHeight: 1.02,
                fontWeight: 500,
                textTransform: "uppercase",
                color: "#fff",
                textShadow: "0 6px 34px rgba(0,0,0,0.6)",
              }}
            >
              You don&apos;t have to look far…
              <br />
              <span style={{ color: "#ff2f40" }}>he might already be around the corner.</span>
            </h2>

            <p
              className="bnd-line"
              style={{
                animationDelay: "370ms",
                margin: "20px 0 0",
                fontSize: "clamp(14px, 1.5vw, 18px)",
                lineHeight: 1.6,
                color: "rgba(226,226,240,0.74)",
                textWrap: "pretty",
              }}
            >
              Somewhere, he has already left a mark.
            </p>

            <button
              id="tracker-cta"
              onClick={() => setShowTrackerModal(true)}
              data-web-hover="true"
              className="bnd-line bnd-cta"
              style={{
                animationDelay: "500ms",
                display: "inline-block",
                marginTop: "clamp(26px, 4vh, 40px)",
                border: 0,
                padding: 0,
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  display: "block",
                  padding: "3px",
                  background: "linear-gradient(180deg, #ff2233, #8b000d)",
                  clipPath:
                    "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)",
                }}
              >
                <span
                  className="bnd-cta-inner"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "15px 40px",
                    background: "linear-gradient(180deg, #ff3a4a, #c00014)",
                    clipPath:
                      "polygon(13px 0, 100% 0, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 13px)",
                    color: "#fff",
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 500,
                    fontSize: "15px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  <span className="bnd-cta-sheen" />
                  Open Spidey Tracker <span style={{ fontSize: "17px", lineHeight: 1 }}>↗</span>
                </span>
              </span>
            </button>
          </div>

          {/* Right Column Authentic Radar HUD with Sprite Animation */}
          <div
            id="tracker-radar"
            className="bnd-line"
            style={{
              animationDelay: "300ms",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "clamp(14px, 2vh, 24px)",
              marginRight: "clamp(20px, 5vw, 90px)",
            }}
          >
            <div
              id="tracker-radar-art"
              style={{
                position: "relative",
                width: "clamp(280px, 35vw, 460px)",
                aspectRatio: "1",
              }}
            >
              {/* Hanging upside-down Spider-Man animated sprite */}
              <div
                className="tracker-spidey play"
                style={{
                  position: "absolute",
                  left: "50%",
                  marginLeft: "-40px",
                  top: "-62px",
                  width: "80px",
                  zIndex: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  pointerEvents: "none",
                }}
              >
                <div
                  className="spidey-inner"
                  style={{
                    transformOrigin: "top center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* Web thread */}
                  <div
                    style={{
                      width: "2px",
                      height: "clamp(46px, 7vh, 84px)",
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(210,225,255,0.55))",
                    }}
                  />
                  {/* Sprite image strip */}
                  <div
                    style={{
                      width: "80px",
                      height: "124px",
                      background:
                        "url('/assets/spidey-strip.png') 0 0 / 6160px 124px no-repeat",
                      animation: "bnd-spidey-frames 2.3s steps(77) infinite",
                      filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.5))",
                    }}
                  />
                </div>

                {/* Spidey dust motes */}
                <div
                  className="spidey-dust"
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "6px",
                    width: 0,
                    height: 0,
                  }}
                >
                  <span
                    style={
                      {
                        "--dx": "-34px",
                        "--dy": "26px",
                        animationDelay: "600ms",
                        position: "absolute",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "rgba(220,230,255,0.9)",
                        boxShadow: "0 0 6px rgba(200,220,255,0.7)",
                      } as React.CSSProperties
                    }
                  />
                  <span
                    style={
                      {
                        "--dx": "30px",
                        "--dy": "22px",
                        animationDelay: "650ms",
                        position: "absolute",
                        width: "3px",
                        height: "3px",
                        borderRadius: "50%",
                        background: "rgba(220,230,255,0.85)",
                      } as React.CSSProperties
                    }
                  />
                  <span
                    style={
                      {
                        "--dx": "-18px",
                        "--dy": "34px",
                        animationDelay: "650ms",
                        position: "absolute",
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "rgba(255,90,106,0.7)",
                        boxShadow: "0 0 7px rgba(255,60,74,0.6)",
                      } as React.CSSProperties
                    }
                  />
                  <span
                    style={
                      {
                        "--dx": "22px",
                        "--dy": "32px",
                        animationDelay: "730ms",
                        position: "absolute",
                        width: "3px",
                        height: "3px",
                        borderRadius: "50%",
                        background: "rgba(220,230,255,0.8)",
                      } as React.CSSProperties
                    }
                  />
                  <span
                    style={
                      {
                        "--dx": "-40px",
                        "--dy": "14px",
                        animationDelay: "570ms",
                        position: "absolute",
                        width: "3px",
                        height: "3px",
                        borderRadius: "50%",
                        background: "rgba(200,215,255,0.75)",
                      } as React.CSSProperties
                    }
                  />
                  <span
                    style={
                      {
                        "--dx": "44px",
                        "--dy": "12px",
                        animationDelay: "670ms",
                        position: "absolute",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "rgba(220,230,255,0.85)",
                      } as React.CSSProperties
                    }
                  />
                </div>
              </div>

              {/* Radar Image Art */}
              <img
                src="/assets/radar.png"
                alt=""
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 40px rgba(0,0,0,0.5))",
                }}
              />

              {/* Radar Rings */}
              <div
                style={{
                  position: "absolute",
                  inset: "4%",
                  borderRadius: "50%",
                  border: "1px solid rgba(77,139,255,0.5)",
                  animation: "bnd-radar-ring 3.4s ease-out infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: "4%",
                  borderRadius: "50%",
                  border: "1px solid rgba(77,139,255,0.4)",
                  animation: "bnd-radar-ring 3.4s ease-out infinite 1.7s",
                }}
              />

              {/* Sweeping Radar Conic Gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: "6%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  mixBlendMode: "screen",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background:
                      "conic-gradient(from 0deg, rgba(90,170,255,0.85) 0deg, rgba(77,139,255,0.4) 22deg, rgba(77,139,255,0.14) 44deg, transparent 66deg, transparent 360deg)",
                    filter: "drop-shadow(0 0 10px rgba(77,139,255,0.5))",
                    animation: "bnd-radar-sweep 4s linear infinite",
                  }}
                />
              </div>

              {/* Blinking Targets */}
              <span
                style={{
                  position: "absolute",
                  top: "30%",
                  left: "62%",
                  width: "13px",
                  height: "13px",
                  borderRadius: "50%",
                  background: "#ff2f40",
                  boxShadow: "0 0 15px 4px rgba(255,47,64,0.7)",
                  animation: "bnd-blip 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: "64%",
                  left: "38%",
                  width: "11px",
                  height: "11px",
                  borderRadius: "50%",
                  background: "#35ff7a",
                  boxShadow: "0 0 13px 3px rgba(53,255,122,0.7)",
                  animation: "bnd-blip 2.4s ease-in-out infinite 0.6s",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: "46%",
                  left: "72%",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#35ff7a",
                  boxShadow: "0 0 12px 3px rgba(53,255,122,0.7)",
                  animation: "bnd-blip 2.8s ease-in-out infinite 1.1s",
                }}
              />

              {/* Radar HUD Telemetry Labels */}
              <span
                style={{
                  position: "absolute",
                  bottom: "-22px",
                  left: 0,
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "rgba(53,255,122,0.6)",
                }}
              >
                Lat 40.71 · Lon -74.00
              </span>
              <span
                style={{
                  position: "absolute",
                  top: "-22px",
                  right: 0,
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "rgba(53,255,122,0.6)",
                }}
              >
                Signal Detected
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Spidey Tracker Telemetry Modal */}
      {showTrackerModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 90,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(10px, 2.5vw, 20px)",
            background: "rgba(4,6,14,0.85)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "min(720px, 100%)",
              maxHeight: "92vh",
              overflowY: "auto",
              padding: "2px",
              background:
                "linear-gradient(135deg, rgba(77,139,255,0.8) 0%, rgba(255,40,60,0.6) 100%)",
              clipPath:
                "polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.9)",
            }}
          >
            <div
              style={{
                position: "relative",
                background:
                  "linear-gradient(160deg, rgba(8,14,34,0.98) 0%, rgba(5,8,20,0.98) 100%)",
                clipPath:
                  "polygon(23px 0, 100% 0, 100% calc(100% - 23px), calc(100% - 23px) 100%, 0 100%, 0 23px)",
                padding: "clamp(24px, 4vh, 36px) clamp(16px, 3.5vw, 30px)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowTrackerModal(false)}
                data-web-hover="true"
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "18px",
                  background: "transparent",
                  border: 0,
                  color: "#fff",
                  fontSize: "24px",
                  cursor: "pointer",
                  lineHeight: 1,
                  opacity: 0.7,
                }}
              >
                ×
              </button>

              {/* Modal Header */}
              <div style={{ textAlign: "center", marginBottom: "24px" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "12px",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "#78a0ff",
                  }}
                >
                  <SpiderLogo size={16} />
                  <span>Live Sighting & Career Coordinates</span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "28px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    margin: "4px 0 0",
                    color: "#ffffff",
                  }}
                >
                  Spidey Tracker Telemetry Log
                </h3>
              </div>

              {/* Milestones Log List */}
              <div
                data-scrollable="true"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  maxHeight: "50vh",
                  overflowY: "auto",
                  paddingRight: "6px",
                }}
              >
                {MILESTONES.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "16px 20px",
                      borderRadius: "8px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(77,139,255,0.25)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "4px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Oswald', sans-serif",
                          fontSize: "11px",
                          letterSpacing: "0.2em",
                          color: "#ff5a6a",
                          textTransform: "uppercase",
                        }}
                      >
                        {m.year}
                      </span>
                      <span
                        style={{
                          fontSize: "10px",
                          fontFamily: "'Oswald', sans-serif",
                          letterSpacing: "0.15em",
                          color: "#35ff7a",
                        }}
                      >
                        {m.location}
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#fff",
                      }}
                    >
                      {m.role}
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.7)",
                        marginTop: "4px",
                        lineHeight: 1.5,
                      }}
                    >
                      {m.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SpideyTrackerRadar;
