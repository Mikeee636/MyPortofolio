"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const SpideyFooter: React.FC = () => {
  const [showTrailerModal, setShowTrailerModal] = useState(false);

  const scrollTo = (id: string) => {
    if (typeof window !== "undefined") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <footer
        id="footer"
        data-page="footer"
        data-screen-label="Footer"
        style={{
          position: "relative",
          zIndex: 22,
          display: "flex",
          flexDirection: "column",
          background: "transparent",
          overflow: "hidden",
        }}
      >
        {/* Ambient Red Glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "20%",
            width: "46vw",
            height: "220px",
            background: "radial-gradient(circle, rgba(214,2,26,0.14) 0%, transparent 70%)",
            filter: "blur(12px)",
            pointerEvents: "none",
          }}
        />

        {/* Footer Middle Columns: About the Movie & Explore */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 0.84, 0.3, 1] }}
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="footer-cols"
            style={{
              maxWidth: "1240px",
              margin: "0 auto",
              boxSizing: "border-box",
              padding:
                "clamp(34px, 5vh, 56px) clamp(24px, 5vw, 80px) clamp(20px, 3vh, 32px)",
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: "clamp(24px, 6vw, 90px)",
              alignItems: "start",
            }}
          >
            {/* About Movie & Social Links */}
            <div>
              <h4
                style={{
                  margin: "0 0 16px",
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "12px",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "#ff5a6a",
                }}
              >
                About the Movie <span style={{ color: "#ff2f40" }}>•</span>
              </h4>
              <p
                style={{
                  margin: "0 0 24px",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "rgba(226,226,240,0.62)",
                  maxWidth: "320px",
                }}
              >
                Anyone can wear the mask. Step into the Spider World and find your place in the Web.
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                {/* X */}
                <a
                  href="https://x.com/sonypicsindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  data-web-hover="true"
                  className="footer-social"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.8)",
                    transition: "background .2s ease, border-color .2s ease, color .2s ease",
                  }}
                >
                  <span style={{ width: "18px", height: "18px", display: "block" }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "100%", height: "100%", display: "block" }}>
                      <path d="M18.9 2H22l-7.3 8.3L23 22h-6.8l-5-6.6L5.5 22H2.4l7.8-8.9L1.5 2h6.9l4.6 6.1L18.9 2zm-2.4 18h1.9L7.6 4H5.6l10.9 16z" />
                    </svg>
                  </span>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/sonypicturesin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  data-web-hover="true"
                  className="footer-social"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.8)",
                    transition: "background .2s ease, border-color .2s ease, color .2s ease",
                  }}
                >
                  <span style={{ width: "18px", height: "18px", display: "block" }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "100%", height: "100%", display: "block" }}>
                      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="17.5" cy="6.5" r="1.3" />
                    </svg>
                  </span>
                </a>
                {/* YouTube */}
                <a
                  href="https://youtube.com/@sonypicturesindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  data-web-hover="true"
                  className="footer-social"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.8)",
                    transition: "background .2s ease, border-color .2s ease, color .2s ease",
                  }}
                >
                  <span style={{ width: "18px", height: "18px", display: "block" }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "100%", height: "100%", display: "block" }}>
                      <path d="M22 8.2a3 3 0 00-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 002 8.2 31 31 0 001.6 12 31 31 0 002 15.8a3 3 0 002.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 002.1-2.1c.3-1.9.4-3.8.4-3.8s0-1.9-.4-3.8z" />
                      <path d="M10 15l5-3-5-3v6z" fill="#0b0510" />
                    </svg>
                  </span>
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/sonypicturesofindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  data-web-hover="true"
                  className="footer-social"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.8)",
                    transition: "background .2s ease, border-color .2s ease, color .2s ease",
                  }}
                >
                  <span style={{ width: "18px", height: "18px", display: "block" }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "100%", height: "100%", display: "block" }}>
                      <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Explore Links */}
            <div>
              <h4
                style={{
                  margin: "0 0 16px",
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "12px",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "#ff5a6a",
                }}
              >
                Explore <span style={{ color: "#ff2f40" }}>•</span>
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", maxWidth: "220px" }}>
                <button
                  onClick={() => setShowTrailerModal(true)}
                  data-web-hover="true"
                  className="footer-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                    background: "transparent",
                    border: 0,
                    cursor: "pointer",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.72)",
                    padding: "3px 0",
                    transition: "color .2s ease",
                    textAlign: "left",
                  }}
                >
                  <span>Trailer</span>
                  <span style={{ color: "#ff2f40", fontSize: "15px" }}>›</span>
                </button>
                <button
                  onClick={() => scrollTo("mj-wall-section")}
                  data-web-hover="true"
                  className="footer-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                    background: "transparent",
                    border: 0,
                    cursor: "pointer",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.72)",
                    padding: "3px 0",
                    transition: "color .2s ease",
                    textAlign: "left",
                  }}
                >
                  <span>MJ Wall</span>
                  <span style={{ color: "#ff2f40", fontSize: "15px" }}>›</span>
                </button>
                <button
                  onClick={() => scrollTo("feed")}
                  data-web-hover="true"
                  className="footer-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                    background: "transparent",
                    border: 0,
                    cursor: "pointer",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.72)",
                    padding: "3px 0",
                    transition: "color .2s ease",
                    textAlign: "left",
                  }}
                >
                  <span>Forum</span>
                  <span style={{ color: "#ff2f40", fontSize: "15px" }}>›</span>
                </button>
                <button
                  onClick={() => scrollTo("tracker")}
                  data-web-hover="true"
                  className="footer-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                    background: "transparent",
                    border: 0,
                    cursor: "pointer",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.72)",
                    padding: "3px 0",
                    transition: "color .2s ease",
                    textAlign: "left",
                  }}
                >
                  <span>Spidey Tracker</span>
                  <span style={{ color: "#ff2f40", fontSize: "15px" }}>›</span>
                </button>
                <a
                  href="https://linktr.ee/SpiderManBrandNewDay"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-web-hover="true"
                  className="footer-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                    textDecoration: "none",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.72)",
                    padding: "3px 0",
                    transition: "color .2s ease",
                  }}
                >
                  <span>Book Tickets</span>
                  <span style={{ color: "#ff2f40", fontSize: "15px" }}>›</span>
                </a>
              </div>
            </div>
          </div>

          {/* Legal Bottom Bar */}
          <div
            style={{
              maxWidth: "1240px",
              margin: "0 auto",
              boxSizing: "border-box",
              padding: "18px clamp(24px, 5vw, 80px) clamp(22px, 3vh, 34px)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ fontSize: "11.5px", letterSpacing: "0.05em", color: "rgba(255,255,255,0.4)" }}>
              © 2026 Columbia Pictures Industries, Inc. All rights reserved. · Developed by Michael Andre Antoro
            </div>
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "11.5px", letterSpacing: "0.06em", color: "rgba(255,255,255,0.5)" }}>
                Privacy Policy
              </span>
              <span style={{ fontSize: "11.5px", letterSpacing: "0.06em", color: "rgba(255,255,255,0.5)" }}>
                Terms of Use
              </span>
            </div>
          </div>
        </motion.div>
      </footer>

      {/* Video Modal Player */}
      {showTrailerModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            background: "rgba(0,0,0,0.9)",
            backdropFilter: "blur(14px)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "min(960px, 94vw)",
              aspectRatio: "16/9",
              background: "#000",
              boxShadow: "0 0 80px rgba(255,34,51,0.4)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setShowTrailerModal(false)}
              data-web-hover="true"
              style={{
                position: "absolute",
                top: "14px",
                right: "16px",
                zIndex: 10,
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(0,0,0,0.7)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#fff",
                fontSize: "24px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>
            <iframe
              src="https://www.youtube.com/embed/lE2QTE64r0w?autoplay=1"
              title="Spider-Man: Brand New Day Official Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "100%", border: 0 }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SpideyFooter;
