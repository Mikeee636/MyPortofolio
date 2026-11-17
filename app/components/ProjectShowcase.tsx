"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "../data/projects";

// Import CSS Swiper yang dibutuhkan
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ProjectShowcase() {
  const router = useRouter();
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(1);

  return (
    <section
      id="project-showcase"
      data-page="project-showcase"
      data-screen-label="Project Showcase"
      style={{ zIndex: 22 }}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-transparent py-24 text-white"
    >
      {/* Ambient Red/Crimson Spotlight Glow di belakang Coverflow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[440px] w-[820px] rounded-full bg-red-600/30 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[460px] rounded-full bg-red-500/25 blur-[90px]"
      />

      {/* Subtle Web Watermark agar menyatu dengan tema Portofolio */}
      <img
        src="/assets/web.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 w-[420px] opacity-[0.05] mix-blend-screen select-none"
      />

      {/* Header Section Slide Ke-4 */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.65, ease: [0.16, 0.84, 0.3, 1] }}
        className="relative z-10 mb-8 px-6 text-center"
      >
        <div className="mb-3 inline-flex items-center gap-3">
          <span className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#ff2f40]" />
          <span
            style={{ fontFamily: "'Oswald', sans-serif" }}
            className="text-xs font-medium tracking-[0.34em] text-[#ff5a6a] uppercase"
          >
            Slide 04 // Featured Portfolio
          </span>
          <span className="h-[2px] w-10 bg-gradient-to-l from-transparent to-[#ff2f40]" />
        </div>

        <h2
          style={{ fontFamily: "'Oswald', sans-serif" }}
          className="text-4xl font-semibold tracking-wide text-white uppercase drop-shadow-[0_6px_30px_rgba(0,0,0,0.7)] sm:text-6xl"
        >
          Project <span className="text-[#ff2f40]">Showcase</span>
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-300/80 sm:text-base">
          Pilih dan klik card{" "}
          <span className="font-semibold text-white">Dapute</span>,{" "}
          <span className="font-semibold text-white">Flexy</span>, atau{" "}
          <span className="font-semibold text-white">Pay&amp;Go</span> untuk membuka
          halaman detail preview website &amp; GitHub repository.
        </p>
      </motion.div>

      {/* Container Utama 3D Coverflow Swiper */}
      <motion.div
        initial={{ opacity: 0, y: 45, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 0.84, 0.3, 1] }}
        className="relative z-10 mx-auto w-full max-w-5xl px-4"
      >
        <Swiper
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={1}
          loop={false}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="project-coverflow-swiper !py-10"
        >
          {PROJECTS.map((project) => (
            <SwiperSlide
              key={project.id}
              className="!flex items-center justify-center"
            >
              {({ isActive }) => (
                <div
                  onClick={() => router.push(`/projects/${project.slug}`)}
                  data-web-hover="true"
                  className={`group relative h-96 w-80 cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 select-none ${
                    isActive
                      ? "ring-1 ring-white/35 shadow-[0_25px_80px_-10px_rgba(220,38,38,0.65)] brightness-100"
                      : "ring-1 ring-white/10 shadow-xl brightness-95 hover:brightness-100"
                  }`}
                >
                  {/* Gambar Project Memenuhi Card (object-cover) & Jelas */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Bottom Overlay Gradient Hitam Transparan + Judul & Penjelasan Singkat */}
                  <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/65 to-transparent p-6 pt-20">
                    <h3 className="text-2xl font-extrabold tracking-tight text-white drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-zinc-200/90">
                      {project.description}
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Bottom Interactive Control Bar & Quick Project Switcher */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 0.84, 0.3, 1] }}
        className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-3 px-6"
      >
        <button
          onClick={() =>
            swiperInstance?.slideTo(
              (activeIndex - 1 + PROJECTS.length) % PROJECTS.length
            )
          }
          data-web-hover="true"
          aria-label="Previous Project"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 backdrop-blur-md transition hover:bg-red-600"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 rounded-full bg-white/5 p-1.5 ring-1 ring-white/10 backdrop-blur-md">
          {PROJECTS.map((proj, idx) => {
            const isCurrent = activeIndex === idx;
            return (
              <button
                key={proj.id}
                onClick={() => swiperInstance?.slideTo(idx)}
                data-web-hover="true"
                className={`rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase transition-all ${
                  isCurrent
                    ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.6)]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {proj.title}
              </button>
            );
          })}
        </div>

        <button
          onClick={() =>
            swiperInstance?.slideTo((activeIndex + 1) % PROJECTS.length)
          }
          data-web-hover="true"
          aria-label="Next Project"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 backdrop-blur-md transition hover:bg-red-600"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </motion.div>

      {/* Custom CSS untuk Bayangan 3D Coverflow yang Halus & Pagination Swiper */}
      <style>{`
        .project-coverflow-swiper .swiper-slide-shadow-left,
        .project-coverflow-swiper .swiper-slide-shadow-right,
        .project-coverflow-swiper .swiper-slide-shadow-coverflow {
          border-radius: 1rem;
          background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.35)
          ) !important;
        }

        .project-coverflow-swiper .swiper-pagination {
          bottom: 0px !important;
        }

        .project-coverflow-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.35);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .project-coverflow-swiper .swiper-pagination-bullet-active {
          background: #ef4444;
          width: 26px;
          border-radius: 9999px;
          box-shadow: 0 0 12px rgba(239, 68, 68, 0.8);
        }
      `}</style>
    </section>
  );
}
