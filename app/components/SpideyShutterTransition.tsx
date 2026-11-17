"use client";

import React, { useEffect, useCallback, useRef } from "react";

const SECTION_IDS = ["hero", "identity", "mj-wall-section", "feed", "tracker", "footer"];

export const SpideyShutterTransition: React.FC = () => {
  const isTransitioningRef = useRef(false);
  const lastTransitionEndRef = useRef<number>(0);
  const topShutterRef = useRef<HTMLDivElement>(null);
  const bottomShutterRef = useRef<HTMLDivElement>(null);
  const touchStartYRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  // Instant snap helper: scrolls cleanly once without recurring animation frame oscillation
  const snapTo = (el: HTMLElement) => {
    const doc = document.documentElement;
    const prevSnap = doc.style.scrollSnapType;
    const prevBehavior = doc.style.scrollBehavior;

    doc.style.scrollSnapType = "none";
    doc.style.scrollBehavior = "auto";
    document.body.style.scrollBehavior = "auto";

    const targetTop = Math.round(el.getBoundingClientRect().top + window.scrollY);
    window.scrollTo({
      top: targetTop,
      behavior: "instant" as ScrollBehavior,
    });

    // Re-enable native scroll snap after the instant jump
    requestAnimationFrame(() => {
      doc.style.scrollSnapType = prevSnap;
      doc.style.scrollBehavior = prevBehavior;
      document.body.style.scrollBehavior = "";
    });
  };

  // Section content reveal: smooth fade and micro-rise without scaling layout shifts
  const revealTarget = (el: HTMLElement) => {
    if (!el) return;
    const content = (el.querySelector("[data-page-content]") || el) as HTMLElement;
    if (content && typeof content.animate === "function") {
      content.animate(
        [
          { opacity: 0.25, transform: "translateY(16px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 460,
          easing: "cubic-bezier(.16, .84, .3, 1)",
          fill: "none",
        }
      );
    }
  };

  // Dual-blade shutter transition without stutter or double-firing
  const triggerShutterTransition = useCallback((target: string | HTMLElement) => {
    if (isTransitioningRef.current) return;
    const targetEl = typeof target === "string" ? document.getElementById(target) : target;
    if (!targetEl) return;

    isTransitioningRef.current = true;
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const closeDuration = isMobile ? 180 : 240;
    const openDuration = isMobile ? 240 : 300;
    const easing = "cubic-bezier(.4, 0, .15, 1)";

    const top = topShutterRef.current;
    const bottom = bottomShutterRef.current;

    // 1. Dual shutter blades close to center
    if (top && bottom && typeof top.animate === "function" && typeof bottom.animate === "function") {
      top.animate(
        [{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }],
        { duration: closeDuration, easing, fill: "forwards" }
      );
      bottom.animate(
        [{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }],
        { duration: closeDuration, easing, fill: "forwards" }
      );
    }

    // 2. Behind closed blades, snap scroll instantaneously and trigger reveal
    setTimeout(() => {
      try {
        snapTo(targetEl);
        revealTarget(targetEl);
      } catch (err) {
        console.error(err);
      }

      // 3. Shutter blades open back up smoothly
      if (top && bottom && typeof top.animate === "function" && typeof bottom.animate === "function") {
        top.animate(
          [{ transform: "scaleY(1)" }, { transform: "scaleY(0)" }],
          { duration: openDuration, easing, fill: "forwards" }
        );
        bottom.animate(
          [{ transform: "scaleY(1)" }, { transform: "scaleY(0)" }],
          { duration: openDuration, easing, fill: "forwards" }
        );
      }

      setTimeout(() => {
        isTransitioningRef.current = false;
        lastTransitionEndRef.current = Date.now();
      }, openDuration + 60);
    }, closeDuration + 20);
  }, []);

  const getCurrentSectionIndex = useCallback(() => {
    if (typeof window === "undefined") return 0;
    const midY = window.innerHeight * 0.45;
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    for (let i = sections.length - 1; i >= 0; i--) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top <= midY && rect.bottom > 0) {
        return i;
      }
    }
    return 0;
  }, []);

  const goToAdjacentSection = useCallback(
    (direction: number) => {
      const currentIndex = getCurrentSectionIndex();
      const nextIndex = Math.min(
        SECTION_IDS.length - 1,
        Math.max(0, currentIndex + direction)
      );
      if (nextIndex !== currentIndex) {
        triggerShutterTransition(SECTION_IDS[nextIndex]);
      }
    },
    [getCurrentSectionIndex, triggerShutterTransition]
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      (
        window as unknown as { triggerSpideyBlink: (target: string | HTMLElement) => void }
      ).triggerSpideyBlink = triggerShutterTransition;
    }

    const handleCustomBlink = (e: Event) => {
      const customEvent = e as CustomEvent<{ targetId?: string }>;
      const targetId = customEvent.detail?.targetId;
      if (targetId) {
        triggerShutterTransition(targetId);
      }
    };

    // Wheel listener with strict debounce & momentum cooldown to prevent jitter
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest("[data-scrollable]")) {
        return;
      }

      if (!e.deltaY) return;
      if (Math.abs(e.deltaY) < 25) return;

      if (isTransitioningRef.current || Date.now() - lastTransitionEndRef.current < 400) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      goToAdjacentSection(direction);
    };

    // Touch swipe navigation for mobile
    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
      touchStartXRef.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest("[data-scrollable]")) return;
      if (isTransitioningRef.current) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (
        touchStartYRef.current === null ||
        isTransitioningRef.current ||
        Date.now() - lastTransitionEndRef.current < 350
      ) {
        touchStartYRef.current = null;
        touchStartXRef.current = null;
        return;
      }

      const touchEndY = (e.changedTouches && e.changedTouches[0]?.clientY) || touchStartYRef.current;
      const touchEndX = (e.changedTouches && e.changedTouches[0]?.clientX) || touchStartXRef.current || 0;
      const diffY = touchStartYRef.current - touchEndY;
      const diffX = (touchStartXRef.current || 0) - touchEndX;

      touchStartYRef.current = null;
      touchStartXRef.current = null;

      if (Math.abs(diffX) > Math.abs(diffY)) return;

      if (Math.abs(diffY) > 45) {
        const direction = diffY > 0 ? 1 : -1;
        goToAdjacentSection(direction);
      }
    };

    // Keyboard navigation (Arrow keys & PageUp/PageDown)
    const handleKeyDown = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.tagName === "TEXTAREA" ||
          t.tagName === "INPUT" ||
          t.tagName === "SELECT" ||
          t.isContentEditable)
      ) {
        return;
      }

      if (isTransitioningRef.current || Date.now() - lastTransitionEndRef.current < 400) return;

      if (["ArrowDown", "PageDown"].includes(e.key)) {
        e.preventDefault();
        goToAdjacentSection(1);
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        goToAdjacentSection(-1);
      }
    };

    window.addEventListener("spidey-blink", handleCustomBlink);
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("spidey-blink", handleCustomBlink);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [triggerShutterTransition, goToAdjacentSection]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 95,
        pointerEvents: "none",
      }}
    >
      {/* Top Shutter Blade */}
      <div
        ref={topShutterRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "51vh",
          background: "linear-gradient(180deg, #050507 0%, #0b0b12 100%)",
          transform: "scaleY(0)",
          transformOrigin: "top",
          boxShadow: "0 3px 0 rgba(255, 31, 51, 0.55)",
          willChange: "transform",
        }}
      />

      {/* Bottom Shutter Blade */}
      <div
        ref={bottomShutterRef}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "51vh",
          background: "linear-gradient(0deg, #050507 0%, #0b0b12 100%)",
          transform: "scaleY(0)",
          transformOrigin: "bottom",
          boxShadow: "0 -3px 0 rgba(255, 31, 51, 0.55)",
          willChange: "transform",
        }}
      />
    </div>
  );
};

export default SpideyShutterTransition;
