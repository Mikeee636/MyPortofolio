"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Calendar, Building2, CheckCircle2, X, Sparkles } from "lucide-react";

export interface CertificateTicket {
  id: string;
  number: string;
  code: string;
  issuer: string;
  date: string;
  title: string;
  image: string;
  description: string;
  skills: string[];
}

const CERTIFICATES: CertificateTicket[] = [
  {
    id: "cert-001",
    number: "NO. 001",
    code: "M",
    issuer: "MONGODB",
    date: "SEP 2026",
    title: "MONGODB NODE.JS DEVELOPER PATH FOR SMARTBRIDGE",
    image: "/assets/certificates/cert-001.png",
    description:
      "Sertifikasi jalur pengembang resmi dari MongoDB bersama SmartBridge yang mencakup perancangan skema NoSQL, integrasi driver Node.js, agregasi data tingkat lanjut, serta optimasi performa query pada aplikasi produksi.",
    skills: ["MongoDB", "Node.js", "Aggregation Pipeline", "NoSQL Schema Design"],
  },
  {
    id: "cert-002",
    number: "NO. 002",
    code: "L",
    issuer: "LPPI",
    date: "AUG 2026",
    title: "DIGDAYA PRACTITIONER PHASE",
    image: "/assets/certificates/cert-002.png",
    description:
      "Sertifikasi tahap praktisi pada program LPPI Digdaya yang berfokus pada implementasi solusi teknologi finansial dan transformasi sistem digital berstandar industri.",
    skills: ["Digital Transformation", "System Architecture", "FinTech Solutions", "Agile Delivery"],
  },
  {
    id: "cert-003",
    number: "NO. 003",
    code: "UF",
    issuer: "UNTAR FTI",
    date: "DEC 2025",
    title: "LAB ASSISTANT, STATISTICS AND CALCULUS",
    image: "/assets/certificates/cert-003.png",
    description:
      "Penghargaan dan sertifikat tugas sebagai Asisten Laboratorium Fakultas Teknologi Informasi Universitas Tarumanagara (UNTAR) untuk mata kuliah Statistika dan Kalkulus, membimbing praktikum serta evaluasi mahasiswa.",
    skills: ["Statistics", "Calculus", "Academic Mentoring", "Data Analysis"],
  },
  {
    id: "cert-004",
    number: "NO. 004",
    code: "BFU",
    issuer: "BEM FTI UNTAR",
    date: "JUN 2025",
    title: "I/O FESTIVAL 2025 COMMITTEE, PARTNERSHIP AND MANAGEMENT",
    image: "/assets/certificates/cert-004.png",
    description:
      "Sertifikat kepanitiaan nasional I/O Festival 2025 yang diselenggarakan oleh BEM FTI UNTAR pada divisi Partnership & Management, mengelola kolaborasi mitra industri, sponsor, dan operasional acara kompetisi teknologi.",
    skills: ["Partnership Management", "Event Operations", "External Relations", "Team Leadership"],
  },
  {
    id: "cert-005",
    number: "NO. 005",
    code: "IS",
    issuer: "IBM SKILLSBUILD",
    date: "MAY 2026",
    title: "BUILD AN AI AGENT",
    image: "/assets/certificates/cert-005.png",
    description:
      "Sertifikasi kompetensi dari IBM SkillsBuild dalam merancang, membangun, dan mengintegrasikan AI Agent otonom menggunakan Large Language Models (LLM), prompt orchestration, dan reasoning workflows.",
    skills: ["AI Agents", "LLM Orchestration", "Prompt Engineering", "IBM Cloud AI"],
  },
  {
    id: "cert-006",
    number: "NO. 006",
    code: "M",
    issuer: "MONGODB",
    date: "SEP 2026",
    title: "MONGODB INDEXING DESIGN FUNDAMENTALS",
    image: "/assets/certificates/cert-006.png",
    description:
      "Sertifikasi teknis MongoDB mengenai prinsip desain indexing (Single Field, Compound, Multikey, dan Text Index), analisis eksekusi query dengan explain plan, serta optimasi latensi database.",
    skills: ["Database Indexing", "Query Optimization", "Compound Indexes", "Performance Tuning"],
  },
  {
    id: "cert-007",
    number: "NO. 007",
    code: "IS",
    issuer: "IBM SKILLSBUILD",
    date: "SEP 2026",
    title: "GETTING STARTED WITH DATA",
    image: "/assets/certificates/cert-007.png",
    description:
      "Sertifikasi fondasi sains data dari IBM SkillsBuild yang meliputi siklus hidup pengolahan data, pembersihan data (data wrangling), analisis eksploratif, serta visualisasi insight berbasis data.",
    skills: ["Data Science", "Data Cleaning", "Exploratory Analysis", "Data Visualization"],
  },
  {
    id: "cert-008",
    number: "NO. 008",
    code: "M",
    issuer: "MONGODB",
    date: "SEP 2026",
    title: "MONGODB BASICS FOR STUDENTS",
    image: "/assets/certificates/cert-008.png",
    description:
      "Sertifikasi fundamental MongoDB untuk mahasiswa yang mencakup konsep database berbasis dokumen (BSON/JSON), operasi CRUD, pemodelan data dasar, dan pengelolaan cluster di MongoDB Atlas.",
    skills: ["MongoDB Atlas", "CRUD Operations", "Document Model", "Cloud Database"],
  },
];

export const SpideyMJWall: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateTicket | null>(null);

  return (
    <>
      <section
        id="mj-wall-section"
        data-page="mjwall"
        data-screen-label="Certificates"
        style={{ zIndex: 22 }}
        className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-transparent px-4 py-24 sm:px-8"
      >
        {/* Ambient Glow di Latar Belakang */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[900px] rounded-full bg-red-600/15 blur-[150px]"
        />

        {/* Header Section Slide Ke-3 */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 0.84, 0.3, 1] }}
          className="relative z-10 mb-12 max-w-3xl text-center"
        >
          <div className="mb-3 inline-flex items-center gap-3">
            <span className="h-[2px] w-10 bg-gradient-to-r from-transparent to-[#ff2f40]" />
            <span
              style={{ fontFamily: "'Oswald', sans-serif" }}
              className="text-xs font-medium tracking-[0.34em] text-[#ff5a6a] uppercase"
            >
              Slide 03 // Verified Credentials
            </span>
            <span className="h-[2px] w-10 bg-gradient-to-l from-transparent to-[#ff2f40]" />
          </div>

          <h2
            style={{ fontFamily: "'Oswald', sans-serif" }}
            className="text-4xl font-semibold tracking-wide text-white uppercase drop-shadow-[0_6px_30px_rgba(0,0,0,0.7)] sm:text-6xl"
          >
            Certificates &amp; <span className="text-[#ff2f40]">Honors</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-300/80 sm:text-base">
            Klik pada tiket sertifikat di bawah ini untuk melihat gambar
            sertifikat beserta deskripsi lengkapnya.
          </p>
        </motion.div>

        {/* Grid 2 Kolom Tiket Bioskop Tema Gelap */}
        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {CERTIFICATES.map((cert, index) => (
            <motion.button
              key={cert.id}
              type="button"
              onClick={() => setSelectedCert(cert)}
              data-web-hover="true"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
                y: 25,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: (index % 4) * 0.08,
                ease: [0.16, 0.84, 0.3, 1],
              }}
              whileHover={{ y: -6, scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="cinema-ticket group relative flex w-full cursor-pointer items-stretch text-left transition-shadow duration-300 hover:drop-shadow-[0_18px_40px_rgba(220,38,38,0.32)] focus:outline-none"
            >
              {/* Bagian Kiri Tiket (Stub dengan Badge Merah Miring & Nomor Tiket) */}
              <div className="cinema-ticket-stub relative flex w-[105px] shrink-0 flex-col items-center justify-center bg-white/[0.02] px-3 py-5 sm:w-[120px]">
                {/* Kotak Merah Miring (Code Badge) */}
                <div className="flex h-12 w-12 -rotate-6 items-center justify-center rounded-lg bg-gradient-to-br from-[#e11d48] to-[#991b1b] shadow-[0_6px_20px_rgba(225,29,72,0.45)] ring-1 ring-white/20 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105">
                  <span
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                    className="text-base font-bold tracking-wider text-white"
                  >
                    {cert.code}
                  </span>
                </div>

                {/* Nomor Tiket */}
                <span className="mt-2.5 font-mono text-[11px] font-bold tracking-[0.14em] text-zinc-400 transition-colors group-hover:text-zinc-200">
                  {cert.number}
                </span>
              </div>

              {/* Garis Putus-putus (Perforation Divider) */}
              <div className="relative flex flex-col justify-between py-3">
                <div className="h-full border-l-[1.5px] border-dashed border-white/20 transition-colors group-hover:border-red-500/50" />
              </div>

              {/* Bagian Kanan Tiket (Konten Utama Sertifikat) */}
              <div className="cinema-ticket-body flex min-w-0 flex-1 flex-col justify-center px-5 py-5 sm:px-7 sm:py-6">
                {/* Baris Atas: Nama Penyelenggara (Kiri) & Tanggal (Kanan) */}
                <div className="flex items-center justify-between gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase sm:text-xs">
                  <span className="truncate text-red-400/90">{cert.issuer}</span>
                  <span className="shrink-0 text-zinc-400">{cert.date}</span>
                </div>

                {/* Judul Sertifikat */}
                <h3
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                  className="mt-2 text-lg leading-snug font-bold tracking-[0.03em] text-zinc-100 uppercase transition-colors group-hover:text-[#ff4d5e] sm:text-[21px]"
                >
                  {cert.title}
                </h3>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Modal Pop-up Saat Tiket Diklik: Menampilkan Gambar Sertifikat & Deskripsi */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/15 bg-zinc-950 p-5 text-white shadow-[0_25px_90px_rgba(220,38,38,0.45)] sm:p-7"
          >
            {/* Header Modal */}
            <div className="mb-5 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 -rotate-3 items-center justify-center rounded-xl bg-[#b8291d] text-base font-bold text-white shadow-lg">
                  <span style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {selectedCert.code}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-red-400 uppercase">
                    <span>{selectedCert.number}</span>
                    <span>•</span>
                    <span>{selectedCert.issuer}</span>
                  </div>
                  <h3
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                    className="mt-0.5 text-xl font-bold tracking-wide text-white uppercase sm:text-2xl"
                  >
                    {selectedCert.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-red-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Preview Gambar Sertifikat */}
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#faf6ee] p-2 shadow-2xl">
              <img
                src={selectedCert.image}
                alt={`Sertifikat ${selectedCert.title}`}
                className="h-auto w-full rounded-xl object-contain"
              />
            </div>

            {/* Metadata & Deskripsi Sertifikat */}
            <div className="mt-6 space-y-5">
              <div className="flex flex-wrap items-center gap-4 border-b border-white/10 pb-4 text-xs text-zinc-300">
                <div className="flex items-center gap-1.5">
                  <Building2 className="h-4 w-4 text-red-400" />
                  <span>
                    Penerbit: <strong className="text-white">{selectedCert.issuer}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-red-400" />
                  <span>
                    Tanggal: <strong className="text-white">{selectedCert.date}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-emerald-400" />
                  <span className="font-semibold text-emerald-400">
                    Verified Credential
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-widest text-red-400 uppercase">
                  Deskripsi Sertifikat
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {selectedCert.description}
                </p>
              </div>

              {/* Kompetensi / Skill yang Dikuasai */}
              <div>
                <div className="mb-2.5 flex items-center gap-1.5 text-xs font-bold tracking-widest text-red-400 uppercase">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Kompetensi &amp; Materi</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/10"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-red-400" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS Bentuk Tiket Bioskop Tema Gelap dengan Lekukan Setengah Lingkaran Asli (Masking) */}
      <style>{`
        .cinema-ticket {
          background: linear-gradient(135deg, rgba(20, 23, 38, 0.94) 0%, rgba(12, 14, 24, 0.96) 100%);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          min-height: 126px;
          /* Membuat lekukan lubang tiket setengah lingkaran di atas & bawah garis putus-putus */
          -webkit-mask-image: radial-gradient(
              circle 10px at 105px 0px,
              transparent 9.5px,
              #000 10px
            ),
            radial-gradient(
              circle 10px at 105px 100%,
              transparent 9.5px,
              #000 10px
            );
          -webkit-mask-composite: destination-in;
          mask-image: radial-gradient(
              circle 10px at 105px 0px,
              transparent 9.5px,
              #000 10px
            ),
            radial-gradient(
              circle 10px at 105px 100%,
              transparent 9.5px,
              #000 10px
            );
          mask-composite: intersect;
        }

        @media (min-width: 640px) {
          .cinema-ticket {
            -webkit-mask-image: radial-gradient(
                circle 11px at 120px 0px,
                transparent 10.5px,
                #000 11px
              ),
              radial-gradient(
                circle 11px at 120px 100%,
                transparent 10.5px,
                #000 11px
              );
            mask-image: radial-gradient(
                circle 11px at 120px 0px,
                transparent 10.5px,
                #000 11px
              ),
              radial-gradient(
                circle 11px at 120px 100%,
                transparent 10.5px,
                #000 11px
              );
          }
        }

        .cinema-ticket:hover {
          background: linear-gradient(135deg, rgba(30, 22, 38, 0.96) 0%, rgba(18, 15, 28, 0.98) 100%);
          box-shadow: inset 0 0 0 1px rgba(239, 68, 68, 0.45);
        }
      `}</style>
    </>
  );
};

export default SpideyMJWall;
