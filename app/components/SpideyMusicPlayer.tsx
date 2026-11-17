"use client";

import React, { useState, useRef, useEffect } from "react";

export const SpideyMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startSynth = () => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const chords = [220, 261.63, 329.63, 392, 440];

      const playTone = () => {
        if (!audioCtxRef.current) return;
        const root = chords[Math.floor(Math.random() * chords.length)];
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(root, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(root * 1.5, ctx.currentTime + 3.2);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 1.0);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 3.3);
      };

      playTone();
      intervalRef.current = setInterval(playTone, 2400);
    } catch {
      // Audio autoplay policy
    }
  };

  const stopSynth = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.suspend();
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopSynth();
      setIsPlaying(false);
    } else {
      startSynth();
      setIsPlaying(true);
      setIsOpen(true);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      className={`bnd-music bnd-music--home ${isOpen ? "open" : ""}`}
      style={{
        position: "fixed",
        left: "clamp(16px, 2.5vw, 30px)",
        bottom: "calc(clamp(16px, 2.5vw, 30px) + env(safe-area-inset-bottom, 0px))",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
      }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        if (!isPlaying) setIsOpen(false);
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          padding: "8px",
          background:
            "linear-gradient(150deg, rgba(20,10,16,0.92), rgba(9,7,14,0.94))",
          border: "1px solid rgba(255,60,74,0.35)",
          clipPath:
            "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
          boxShadow:
            "0 12px 34px rgba(0,0,0,0.5), 0 0 22px rgba(255,40,60,0.15)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Spinning Vinyl Disc */}
        <div
          onClick={toggleMusic}
          data-web-hover="true"
          role="button"
          aria-label="Play music"
          className="bnd-music-disc"
          style={{
            position: "relative",
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            overflow: "hidden",
            background: "#0c0a16",
            border: "1px solid rgba(255,60,74,0.55)",
            flexShrink: 0,
            cursor: "pointer",
            boxShadow: "0 0 14px rgba(255,40,60,0.3)",
            animation: isPlaying ? "bnd-disc-spin 12s linear infinite" : "none",
          }}
        >
          <img
            src="/assets/music-cover.png"
            alt="Brand New Day OST"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background:
                "repeating-radial-gradient(circle at 50% 50%, rgba(0,0,0,0.14) 0 2px, transparent 2px 4px)",
              pointerEvents: "none",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "8px",
              height: "8px",
              margin: "-4px 0 0 -4px",
              borderRadius: "50%",
              background: "#0c0a16",
              border: "1px solid rgba(255,90,106,0.7)",
              boxShadow: "0 0 0 2px rgba(0,0,0,0.4)",
            }}
          />
        </div>

        {/* Music Player Body with Equalizer Bars */}
        <div className="bnd-music-body">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              minWidth: 0,
              paddingLeft: "12px",
              paddingRight: "4px",
            }}
          >
            <span
              className="bnd-music-title"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#fff",
                whiteSpace: "nowrap",
              }}
            >
              Brand New Day <span style={{ color: "rgba(255,255,255,0.4)" }}>· OST</span>
            </span>

            <div
              className="bnd-music-spec"
              style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "16px" }}
            >
              {[55, 90, 40, 100, 70, 50, 95, 60, 85, 45, 100, 65, 50, 90, 60, 80].map((h, i) => (
                <span
                  key={i}
                  className="bnd-eq-bar"
                  style={{
                    width: "2.5px",
                    height: `${h}%`,
                    animationDuration: `${0.5 + (i % 5) * 0.12}s`,
                    animationDelay: `${(i % 7) * 0.07}s`,
                    animationPlayState: isPlaying ? "running" : "paused",
                  }}
                />
              ))}
            </div>
          </div>

          <button
            onClick={toggleMusic}
            data-web-hover="true"
            aria-label="Mute or unmute"
            className="bnd-music-mute"
            style={{
              flexShrink: 0,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: 0,
              cursor: "pointer",
              background: "linear-gradient(180deg, #ff3a4a, #c00014)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 16px rgba(214,2,26,0.45)",
            }}
          >
            {isPlaying ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <path d="M22 9l-6 6M16 9l6 6" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpideyMusicPlayer;
