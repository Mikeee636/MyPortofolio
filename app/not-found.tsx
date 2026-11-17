import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SpiderLogo } from "./components/SpideyIcons";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-[#0a0a0c] text-white relative overflow-hidden">
      <div className="p-3 rounded-full bg-red-600/20 border border-red-500/40 mb-6 shadow-[0_0_30px_rgba(255,34,51,0.4)]">
        <SpiderLogo size={60} className="text-[#ff2233]" />
      </div>

      <p className="font-spidey text-xs tracking-[0.34em] uppercase text-red-400 mb-2">
        SECTOR 404 // DIMENSIONAL BREACH
      </p>

      <h1 className="font-spidey text-6xl sm:text-8xl font-bold uppercase text-white mb-2">
        404
      </h1>

      <h2 className="font-spidey text-xl sm:text-3xl uppercase tracking-wider text-zinc-300 mb-4">
        Web Strand Not Found
      </h2>

      <p className="text-zinc-400 mb-8 max-w-md text-sm sm:text-base leading-relaxed">
        Spider-Sense is tingling... looks like this portal does not exist in Earth-616 or has been severed across the Multiverse.
      </p>

      <Link
        href="/"
        className="relative border-0 p-0 bg-transparent cursor-pointer group focus:outline-none"
      >
        <span className="block p-[2px] bg-gradient-to-b from-[#ff2233] to-[#8b000d] clip-corner-sm shadow-[0_6px_20px_rgba(255,34,51,0.35)]">
          <span className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-b from-[#ff3a4a] to-[#c00014] clip-corner-sm text-white font-spidey text-xs tracking-[0.2em] uppercase">
            <ArrowLeft className="w-4 h-4" />
            <span>SWING BACK TO HQ</span>
          </span>
        </span>
      </Link>
    </div>
  );
}
