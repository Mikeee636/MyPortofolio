"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { spongebobAudio } from "../utils/spongebobSound";

export default function OpeningTransition() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check if session already saw the intro
    const seen = sessionStorage.getItem("bubble_intro_seen");
    if (seen) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      spongebobAudio.playBubblePop();
      setShow(false);
      try {
        sessionStorage.setItem("bubble_intro_seen", "true");
      } catch {
        // ignore
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    spongebobAudio.playBubblePop();
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="bubble-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: "blur(12px)",
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }}
          onClick={handleSkip}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#070b14] cursor-pointer select-none"
        >
          {/* Subtle underwater ripple glow behind bubble */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [0.6, 1.4, 1.2], opacity: [0, 0.4, 0.2] }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute w-[450px] h-[450px] rounded-full bg-radial from-sky-400/20 via-teal-400/10 to-transparent blur-3xl pointer-events-none"
          />

          {/* The Giant Translucent Bubble */}
          <motion.div
            initial={{ scale: 0.2, opacity: 0, y: 30 }}
            animate={{
              scale: [0.2, 1.05, 1],
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-sky-300/40 bg-radial from-sky-300/20 via-sky-500/10 to-transparent backdrop-blur-md shadow-[0_0_50px_rgba(56,189,248,0.35),inset_0_0_30px_rgba(255,255,255,0.4)] flex flex-col items-center justify-center text-center p-4 group"
          >
            {/* Top highlight reflection */}
            <div className="absolute top-4 left-7 w-12 h-6 rounded-full bg-white/60 blur-[1px] -rotate-35" />
            <div className="absolute bottom-6 right-8 w-6 h-3 rounded-full bg-white/30 blur-[1px] -rotate-35" />

            <div className="z-10 flex flex-col items-center">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-amber-300 mb-1">
                Bikini Bottom Web Lab
              </span>
              <p className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tight">
                Michael Andre
              </p>
              <span className="text-[10px] font-mono text-sky-200/80 mt-1">
                Pop to enter
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
