"use client";

import React, { useEffect, useRef } from "react";

interface MeteorData {
  top: string;
  left: string;
  duration: string;
  delay: string;
  variant?: "blue" | "red" | "gold";
}

// Exact 15 meteor specifications from alfari.my.id with enhanced Spider-Man cosmic tinting
const METEORS: MeteorData[] = [
  { top: "-8%", left: "8%", duration: "9s", delay: "-3s", variant: "blue" },
  { top: "-12%", left: "35%", duration: "11s", delay: "-9s", variant: "red" },
  { top: "12%", left: "-10%", duration: "10s", delay: "-6s", variant: "blue" },
  { top: "28%", left: "4%", duration: "12s", delay: "-10s", variant: "gold" },
  { top: "-14%", left: "54%", duration: "10s", delay: "-2s", variant: "blue" },
  { top: "-6%", left: "78%", duration: "12s", delay: "-7s", variant: "red" },
  { top: "8%", left: "18%", duration: "11s", delay: "-5s", variant: "blue" },
  { top: "22%", left: "-8%", duration: "9s", delay: "-8s", variant: "blue" },
  { top: "-10%", left: "92%", duration: "13s", delay: "-11s", variant: "gold" },
  { top: "36%", left: "-12%", duration: "11s", delay: "-4s", variant: "blue" },
  { top: "-18%", left: "43%", duration: "8s", delay: "-6s", variant: "red" },
  { top: "4%", left: "3%", duration: "12s", delay: "-1s", variant: "blue" },
  { top: "16%", left: "30%", duration: "10s", delay: "-9s", variant: "blue" },
  { top: "30%", left: "-6%", duration: "13s", delay: "-12s", variant: "red" },
  { top: "-5%", left: "65%", duration: "9s", delay: "-4s", variant: "blue" },
];

export const SpideyCosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Stardust star particles with upward drift & twinkle (inspired by alfari.my.id)
    const STAR_COUNT = Math.min(180, Math.floor((width * height) / 9000));
    const stars = Array.from({ length: STAR_COUNT }, () => {
      const isLarge = Math.random() < 0.15;
      const isRed = Math.random() < 0.12;
      const isBlue = Math.random() < 0.25;

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: isLarge ? Math.random() * 1.6 + 1.0 : Math.random() * 0.9 + 0.4,
        alpha: Math.random() * 0.7 + 0.25,
        baseAlpha: Math.random() * 0.7 + 0.25,
        twinkleSpeed: Math.random() * 0.02 + 0.008,
        twinkleOffset: Math.random() * Math.PI * 2,
        driftSpeed: Math.random() * 0.35 + 0.15, // Upward drift speed
        driftX: (Math.random() - 0.5) * 0.12,
        color: isRed
          ? "rgba(255, 90, 106, "
          : isBlue
          ? "rgba(120, 176, 255, "
          : "rgba(240, 244, 255, ",
      };
    });

    let time = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Upward drift
        star.y -= star.driftSpeed;
        star.x += star.driftX;

        // Wrap around viewport boundaries
        if (star.y < -10) {
          star.y = height + 10;
          star.x = Math.random() * width;
        }
        if (star.x < -10) star.x = width + 10;
        if (star.x > width + 10) star.x = -10;

        // Twinkle
        const currentAlpha = Math.max(
          0.1,
          Math.min(
            1,
            star.baseAlpha + Math.sin(time + star.twinkleOffset) * 0.25
          )
        );

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color + currentAlpha + ")";
        ctx.fill();

        // Extra subtle glow for larger stars
        if (star.radius > 1.4) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = star.color + currentAlpha * 0.25 + ")";
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
        backgroundColor: "#050510",
      }}
    >
      {/* Ambient Cosmic Nebulae Glows (Deep blue, Spider-red, and starlight) */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "15%",
          width: "55vw",
          height: "55vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(44, 103, 237, 0.12) 0%, rgba(44, 103, 237, 0.03) 45%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "45%",
          right: "10%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 34, 51, 0.09) 0%, rgba(255, 34, 51, 0.02) 45%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "25%",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(31, 76, 214, 0.1) 0%, rgba(31, 76, 214, 0.02) 50%, transparent 75%)",
          filter: "blur(45px)",
        }}
      />

      {/* Subtle Spider-Man Cyber Grid & Watermark Texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.7,
        }}
      />

      {/* Twinkling Starfield & Floating Stardust Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      {/* Falling Meteors Layer matching alfari.my.id */}
      <div className="meteor-background">
        {METEORS.map((m, idx) => {
          const variantClass =
            m.variant === "red"
              ? " meteor-spidey"
              : m.variant === "gold"
              ? " meteor-gold"
              : "";
          return (
            <span
              key={idx}
              className={`meteor${variantClass}`}
              style={
                {
                  "--meteor-top": m.top,
                  "--meteor-left": m.left,
                  "--meteor-duration": m.duration,
                  "--meteor-delay": m.delay,
                } as React.CSSProperties
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default SpideyCosmicBackground;
