"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { UserCheck, Code2, ArrowRight } from "lucide-react";

export const SpideyIdentityScan: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const stageEl = stageRef.current;
    if (!sectionEl || !stageEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        stageEl.classList.toggle("is-in-view", entry.isIntersecting);
        if (!entry.isIntersecting) {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          stageEl.classList.remove("spider-hovered");
          delete stageEl.dataset.spiderVisible;
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionEl);
    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const stageEl = stageRef.current;
    const portraitEl = stageEl?.querySelector(".about-portrait");
    if (!stageEl || !portraitEl) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const rect = portraitEl.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;

    stageEl.style.setProperty("--hover-x", `${xPct}%`);
    stageEl.style.setProperty("--hover-y", `${yPct}%`);
    stageEl.classList.add("spider-hovered");
    stageEl.dataset.spiderVisible = "true";
  };

  const handlePointerLeave = () => {
    const stageEl = stageRef.current;
    if (!stageEl) return;

    delete stageEl.dataset.spiderVisible;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      stageEl.classList.remove("spider-hovered");
    }, 7000);
  };

  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="identity"
      data-page="identity"
      data-screen-label="About Me"
      aria-labelledby="about-section-heading"
      className="about-root-section"
    >
      {/* Judul Utama Section seperti di alfari.my.id */}
      <motion.h2
        initial={{ opacity: 0, y: -32, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="section-display-title"
        id="about-section-heading"
      >
        About Me
      </motion.h2>

      <div className="about-container-inner">
        {/* Kolom Kiri: Greeting, Nama & Tombol Hubungi Saya */}
        <motion.div
          initial={{ opacity: 0, x: -55, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="about-intro"
        >
          <h2 className="about-title" id="about-title">
            <span className="about-title-greeting">Hi, I&apos;m</span>
            <span>
              Michael
              <br />
              Andre Antoro
            </span>
          </h2>

          <a
            href="#footer"
            onClick={(e) => scrollTo("footer", e)}
            data-web-hover="true"
            className="about-action about-action-primary"
          >
            <UserCheck size={17} />
            <span>Hubungi Saya</span>
          </a>
        </motion.div>

        {/* Kolom Tengah: Portrait Cutout (Batik Merah -> Berubah ke Almamater saat kena Crosshair) */}
        <motion.div
          ref={stageRef}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.75, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="about-portrait-stage"
          aria-label="Portrait dengan efek perubahan Batik ke Almamater saat disentuh crosshair"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          {/* Ambient Glow Merah & Biru di belakang orang */}
          <div className="about-portrait-glow" />

          {/* Container Portrait: Layer 1 (Batik Merah) & Layer 2 (Almamater UNTAR) */}
          <div className="about-portrait">
            {/* Gambar 1 (Default): Pria Berbatik Merah */}
            <img
              src="/assets/michael-batik-mirror.png"
              alt="Michael Andre Antoro - Batik Merah"
              className="about-person-image"
              decoding="async"
            />

            {/* Gambar 2 (Hover Crosshair Reveal): Mengenakan Almamater UNTAR */}
            <img
              src="/assets/michael-almamater-mirror.png"
              alt="Michael Andre Antoro - Almamater UNTAR"
              aria-hidden="true"
              className="about-spider-image"
              decoding="async"
            />
          </div>

          {/* Cincin Orbit & Partikel Kosmik seperti di alfari.my.id */}
          <span className="about-portrait-orbit about-portrait-orbit-one" />
          <span className="about-portrait-orbit about-portrait-orbit-two" />
          <span className="about-portrait-spark" />
        </motion.div>

        {/* Kolom Kanan: Deskripsi Bio & Tombol Lihat Projek */}
        <motion.div
          initial={{ opacity: 0, x: 55, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="about-bio"
        >
          <p>
            Saya adalah{" "}
            <strong>Informatics Engineering Student &amp; Web Developer</strong>{" "}
            di Universitas Tarumanagara (UNTAR) yang berfokus pada pengembangan
            teknologi yang fungsional sekaligus menarik. Saya senang memadukan
            kode, desain, dan pengalaman interaktif untuk membangun produk
            digital yang berkesan.
          </p>
          <p>
            Dengan React, Next.js, TypeScript, dan teknologi web modern, saya
            mengubah ide menjadi pengalaman digital yang intuitif, responsif,
            dan berdampak.
          </p>

          <a
            href="#project-showcase"
            onClick={(e) => scrollTo("project-showcase", e)}
            data-web-hover="true"
            className="about-action about-action-secondary"
          >
            <Code2 size={17} />
            <span>Lihat Projek</span>
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SpideyIdentityScan;
