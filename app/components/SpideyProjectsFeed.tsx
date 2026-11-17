"use client";

import React, { useState } from "react";
import { SpiderLogo } from "./SpideyIcons";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tech: string[];
  description: string;
  stats: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "nitroster",
    title: "Nitroster // Web Slinger Engine",
    category: "Full-Stack Web",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description: "Next-generation high-velocity web platform with custom cybernetic HUD and 60fps animations.",
    stats: "100/100 Lighthouse · 0.3s FCP",
  },
  {
    id: "ngodeyuk",
    title: "NgodeYuk // Multiverse Coding Hub",
    category: "Full-Stack Platform",
    tech: ["React 19", "Spring Boot", "PostgreSQL", "WebSockets"],
    description: "Real-time competitive programming arena with automated test runners and live leaderboards.",
    stats: "5,000+ Active Submissions",
  },
  {
    id: "betterlife",
    title: "BetterLife // Health Telemetry Suite",
    category: "Mobile & Cloud",
    tech: ["React Native", "Node.js", "Express", "MongoDB Atlas"],
    description: "Mobile biometric wellness tracker with push dispatch alerts and offline data synchronization.",
    stats: "4.9 App Store Rating",
  },
  {
    id: "soulspace",
    title: "SoulSpace // AI Neural Companion",
    category: "AI & NLP",
    tech: ["Python FastAPI", "Next.js", "OpenAI GPT-4o", "Vector DB"],
    description: "Empathetic conversational assistant with sentiment analysis and end-to-end encrypted journaling.",
    stats: "Sub-200ms Neural Response",
  },
];

export const SpideyProjectsFeed: React.FC = () => {
  const [showForumModal, setShowForumModal] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <>
      <section
        id="feed"
        data-page="feed"
        data-screen-label="Spider World Feed"
        style={{
          position: "relative",
          zIndex: 22,
          minHeight: "100vh",
          overflow: "hidden",
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(80px, 12vh, 140px) 0",
        }}
      >
        {/* Subtle Forum Artwork Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/forum-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
            mixBlendMode: "screen",
            pointerEvents: "none",
          }}
        />

        {/* Subtle Web Watermark */}
        <img
          src="/assets/web.png"
          alt=""
          style={{
            position: "absolute",
            top: "-10%",
            left: "-8%",
            width: "min(680px, 46vw)",
            opacity: 0.06,
            mixBlendMode: "screen",
            pointerEvents: "none",
          }}
        />

        {/* Ambient Lights, Scanning Beam & Glowing Motes */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "22%",
              right: "14%",
              width: "40vw",
              height: "40vw",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(214,2,26,0.28) 0%, rgba(214,2,26,0.06) 42%, transparent 70%)",
              filter: "blur(10px)",
              animation: "bnd-forum-glow 6s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "8%",
              left: "16%",
              width: "30vw",
              height: "30vw",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(31,76,214,0.2) 0%, rgba(31,76,214,0.05) 45%, transparent 70%)",
              filter: "blur(12px)",
              animation: "bnd-forum-glow 7.5s ease-in-out infinite 1.5s",
            }}
          />

          {/* Floating Atmospheric Motes */}
          <span
            style={{
              position: "absolute",
              left: "18%",
              bottom: "20%",
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "#ff5a6a",
              boxShadow: "0 0 10px 2px rgba(255,60,74,0.7)",
              animation: "bnd-mote 7s ease-in-out infinite",
            }}
          />
          <span
            style={{
              position: "absolute",
              left: "34%",
              bottom: "12%",
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              background: "#fff",
              boxShadow: "0 0 8px 2px rgba(255,255,255,0.6)",
              animation: "bnd-mote 9s ease-in-out infinite 1.2s",
            }}
          />
          <span
            style={{
              position: "absolute",
              left: "52%",
              bottom: "26%",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "#ff5a6a",
              boxShadow: "0 0 12px 3px rgba(255,60,74,0.7)",
              animation: "bnd-mote 8s ease-in-out infinite 2.4s",
            }}
          />
          <span
            style={{
              position: "absolute",
              left: "68%",
              bottom: "16%",
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              background: "#9db4ff",
              boxShadow: "0 0 9px 2px rgba(120,150,255,0.7)",
              animation: "bnd-mote 10s ease-in-out infinite 0.6s",
            }}
          />
          <span
            style={{
              position: "absolute",
              left: "80%",
              bottom: "30%",
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "#fff",
              boxShadow: "0 0 8px 2px rgba(255,255,255,0.6)",
              animation: "bnd-mote 8.5s ease-in-out infinite 3s",
            }}
          />

          {/* Sweeping Cyan Ambient Beam */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              height: "34%",
              background:
                "linear-gradient(180deg, transparent, rgba(120,150,255,0.06), transparent)",
              mixBlendMode: "screen",
              animation: "bnd-forum-scan 9s ease-in-out infinite",
            }}
          />
        </div>

        {/* Section Content */}
        <div
          data-page-content="true"
          data-reveal="true"
          className="bnd-reveal in"
          style={{
            position: "relative",
            zIndex: 4,
            width: "100%",
            maxWidth: "820px",
            margin: "0 auto",
            boxSizing: "border-box",
            padding: "clamp(78px, 12vh, 118px) clamp(24px, 5vw, 80px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            minHeight: 0,
          }}
        >
          <div
            className="bnd-line"
            style={{
              animationDelay: "70ms",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                width: "42px",
                height: "2px",
                background: "linear-gradient(90deg, transparent, #ff2f40)",
              }}
            />
            <span
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "12px",
                letterSpacing: "0.34em",
                textTransform: "uppercase",
                color: "#ff5a6a",
              }}
            >
              Spider World Feed
            </span>
            <span
              style={{
                width: "42px",
                height: "2px",
                background: "linear-gradient(90deg, #ff2f40, transparent)",
              }}
            />
          </div>

          <h2
            className="bnd-head"
            style={{
              animationDelay: "170ms",
              margin: 0,
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(30px, 5vw, 66px)",
              lineHeight: 0.98,
              fontWeight: 500,
              textTransform: "uppercase",
              color: "#fff",
              textShadow: "0 6px 30px rgba(0,0,0,0.6)",
            }}
          >
            This is what the Web <span style={{ color: "#ff2f40" }}>actually looks like.</span>
          </h2>

          <p
            className="bnd-line"
            style={{
              animationDelay: "340ms",
              margin: "18px auto 0",
              maxWidth: "600px",
              fontSize: "clamp(14px, 1.5vw, 17px)",
              lineHeight: 1.6,
              color: "rgba(226,226,240,0.74)",
              textWrap: "pretty",
            }}
          >
            Real people, real identities, real stories — an entire community living under the mask. Step inside and add your voice.
          </p>

          <button
            onClick={() => setShowForumModal(true)}
            data-web-hover="true"
            className="bnd-line bnd-cta"
            style={{
              animationDelay: "470ms",
              marginTop: "clamp(28px, 4.5vh, 44px)",
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
                  padding: "16px 44px",
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
                Enter the Forum <span style={{ fontSize: "17px" }}>→</span>
              </span>
            </span>
          </button>
        </div>
      </section>

      {/* Spider World Forum / Projects Feed Modal */}
      {showForumModal && (
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
              width: "min(840px, 100%)",
              maxHeight: "92vh",
              overflowY: "auto",
              padding: "2px",
              background:
                "linear-gradient(135deg, rgba(255,40,60,0.8) 0%, rgba(31,76,214,0.6) 100%)",
              clipPath:
                "polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.9)",
            }}
          >
            <div
              style={{
                position: "relative",
                background:
                  "linear-gradient(160deg, rgba(14,10,24,0.98) 0%, rgba(6,7,16,0.98) 100%)",
                clipPath:
                  "polygon(23px 0, 100% 0, 100% calc(100% - 23px), calc(100% - 23px) 100%, 0 100%, 0 23px)",
                padding: "clamp(24px, 4vh, 36px) clamp(16px, 3.5vw, 30px)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowForumModal(false)}
                data-web-hover="true"
                style={{
                  position: "absolute",
                  top: "14px",
                  right: "16px",
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

              {/* Forum Header */}
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "#ff5a6a",
                  }}
                >
                  <SpiderLogo size={16} />
                  <span>Spider World Forum {"//"} Engineering Projects</span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "clamp(20px, 4.5vw, 26px)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    margin: "4px 0 0",
                    color: "#ffffff",
                  }}
                >
                  Multiverse Showcase & Codebase Matrix
                </h3>
              </div>

              {/* Category Filter Tabs */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "8px",
                  flexWrap: "wrap",
                  marginBottom: "20px",
                }}
              >
                {["all", "web", "platform", "mobile", "ai"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    data-web-hover="true"
                    style={{
                      border: 0,
                      padding: "6px 14px",
                      borderRadius: "6px",
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      background:
                        activeTab === tab
                          ? "linear-gradient(180deg, #ff3a4a 0%, #c00014 100%)"
                          : "rgba(255,255,255,0.06)",
                      color: activeTab === tab ? "#fff" : "rgba(255,255,255,0.65)",
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Projects Grid */}
              <div
                data-scrollable="true"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
                  gap: "12px",
                  maxHeight: "52vh",
                  overflowY: "auto",
                  paddingRight: "4px",
                }}
              >
                {filtered.map((p) => (
                  <div
                    key={p.id}
                    style={{
                      padding: "18px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,60,74,0.25)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "6px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Oswald', sans-serif",
                            fontSize: "11px",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "#ff5a6a",
                          }}
                        >
                          {p.category}
                        </span>
                        <span
                          style={{
                            fontSize: "10px",
                            padding: "2px 8px",
                            borderRadius: "4px",
                            background: "rgba(53,255,122,0.15)",
                            color: "#35ff7a",
                            fontFamily: "'Oswald', sans-serif",
                            letterSpacing: "0.1em",
                          }}
                        >
                          ACTIVE
                        </span>
                      </div>
                      <h4
                        style={{
                          margin: "0 0 6px",
                          fontFamily: "'Oswald', sans-serif",
                          fontSize: "17px",
                          color: "#fff",
                        }}
                      >
                        {p.title}
                      </h4>
                      <p
                        style={{
                          margin: "0 0 12px",
                          fontSize: "13px",
                          color: "rgba(255,255,255,0.7)",
                          lineHeight: 1.5,
                        }}
                      >
                        {p.description}
                      </p>
                    </div>

                    <div>
                      <div
                        style={{
                          display: "flex",
                          gap: "6px",
                          flexWrap: "wrap",
                          marginBottom: "12px",
                        }}
                      >
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontSize: "10px",
                              padding: "2px 6px",
                              borderRadius: "4px",
                              background: "rgba(120,160,255,0.12)",
                              color: "#9db4ff",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          borderTop: "1px solid rgba(255,255,255,0.08)",
                          paddingTop: "10px",
                          fontSize: "11px",
                          color: "rgba(255,255,255,0.5)",
                          fontFamily: "'Oswald', sans-serif",
                          letterSpacing: "0.1em",
                        }}
                      >
                        <span>{p.stats}</span>
                        <a
                          href="https://github.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-web-hover="true"
                          style={{
                            color: "#ff5a6a",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          Inspect Repo ↗
                        </a>
                      </div>
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

export default SpideyProjectsFeed;
