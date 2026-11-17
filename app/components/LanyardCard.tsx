"use client";

import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamic import with SSR disabled since Three.js WebGL canvas requires browser APIs
const Lanyard = dynamic(() => import("./Lanyard"), {
  ssr: false,
  loading: () => null,
});

const frontDesktop = "/assets/lanyard/frontCard.png?v=spidey-v7";
const frontMobile = "/assets/lanyard/frontCard-mobile.webp?v=spidey-v7";
const backDesktop = "/assets/lanyard/backCard.png?v=spidey-v7";
const backMobile = "/assets/lanyard/backCard-mobile.webp?v=spidey-v7";
const strapImage = "/assets/lanyard/bandd.png?v=spidey-v7";

interface LanyardCardProps {
  introFinished?: boolean;
}

export const LanyardCard: React.FC<LanyardCardProps> = ({ introFinished = true }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const mql = window.matchMedia("(max-width: 767px)");
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  if (!mounted) {
    return (
      <section
        className="lanyard-card-container"
        aria-label="Interactive 3D Lanyard"
      >
        <div className="lanyard-viewport" />
      </section>
    );
  }

  return (
    <section
      className={`lanyard-card-container${isMobile ? " is-mobile" : ""}`}
      aria-label="Interactive 3D Lanyard"
    >
      <div className="lanyard-viewport">
        <Suspense fallback={null}>
          <Lanyard
            frontImage={isMobile ? frontMobile : frontDesktop}
            backImage={isMobile ? backMobile : backDesktop}
            strapImage={strapImage}
            cardColor="#080c1e"
            imagePadding={0.035}
            strapColor="#0a0d18"
            finish="glossy"
            anchor={isMobile ? "center" : "right"}
            orientation="portrait"
            size={0.62}
            cornerRadius={0.25}
            strapLength={0.26}
            strapWidth={0.62}
            gravity={1.2}
            damping={0.35}
            elasticity={0.7}
            breeze={0.1}
            interactive={true}
            autoFlip={true}
            metal="silver"
            intro={introFinished}
            style={{}}
          />
        </Suspense>
      </div>
    </section>
  );
};

export default LanyardCard;
