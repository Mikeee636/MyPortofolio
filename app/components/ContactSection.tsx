"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  ShieldAlert,
  Radio,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export const ContactSection: React.FC = () => {
  const { playPopSound, playSpatulaSound } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const directEmail = "michaelandre@gmail.com";

  const handleCopyEmail = () => {
    playPopSound();
    navigator.clipboard.writeText(directEmail);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2200);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields before dispatching.");
      return;
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setIsSubmitting(true);
    playSpatulaSound();

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      playPopSound();
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1400);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Decorative underwater light column */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-96 bg-[#F4D35E]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4D35E]/10 border border-[#F4D35E]/20 text-[#F4D35E] text-xs font-semibold uppercase tracking-widest mb-3">
          <Radio className="w-3.5 h-3.5 animate-pulse text-[#F4D35E]" />
          <span>The Clamshell Direct Line</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Ready to Build <span className="text-gradient-sponge">Something Legendary?</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3">
          Whether you have an ambitious full-stack product, an engineering role open, or just want to discuss algorithms, my inbox is always listening.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Direct Contact Details & Quick Copy (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Quick Copy Pill Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#F4D35E] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Bureaucracy</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Instant Transmission
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                Skip forms if you prefer direct email. Typically replies within 4 to 12 hours during Jakarta business cycles (UTC+7).
              </p>

              {/* Direct email box */}
              <div className="mt-6 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="p-2 rounded-xl bg-[#F4D35E]/10 text-[#F4D35E]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                    {directEmail}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition-all duration-300 flex items-center gap-1.5 shrink-0 ${
                    hasCopied
                      ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                      : "bg-white/5 border-white/10 hover:bg-white/10 text-slate-300 hover:text-white"
                  }`}
                  aria-label="Copy email"
                >
                  {hasCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick status indicator */}
            <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 text-slate-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Status: Available for Q4 2024 / 2025 Roles
              </span>
              <span className="font-mono text-slate-500">Jakarta, ID</span>
            </div>
          </div>

          {/* Spongebob Easter Egg Card (Refined & Subtle) */}
          <div className="glass-card rounded-3xl p-6 border border-white/10 relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#F4D35E]/15 border border-[#F4D35E]/30 flex items-center justify-center shrink-0 text-lg">
                🐚
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Magic Conch Protocol</span>
                  <span className="text-[10px] font-mono text-slate-400">#RFC-2024</span>
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  &ldquo;Could I offer you an exceptional technical collaboration?&rdquo; — <em>Try asking again... Yes! Absolutely.</em>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Glassmorphic Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-3xl bg-[#F4D35E]/15 border border-[#F4D35E]/30 flex items-center justify-center mb-5 text-[#F4D35E]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Transmission Delivered!</h3>
                  <p className="text-slate-400 text-sm max-w-md mt-2 leading-relaxed">
                    Your message has been safely packaged into the pneumatic ocean capsule and received. I will review and reply promptly.
                  </p>
                  <button
                    onClick={() => {
                      playPopSound();
                      setIsSubmitted(false);
                    }}
                    className="mt-6 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors border border-white/10"
                  >
                    Send Another Dispatch
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-[#F4D35E]" />
                      Direct Transmission Form
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">* Required fields</span>
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Row: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Your Name <span className="text-[#F4D35E]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Eugene Krabs"
                        className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#F4D35E] focus:ring-1 focus:ring-[#F4D35E] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Email Address <span className="text-[#F4D35E]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. recruiter@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#F4D35E] focus:ring-1 focus:ring-[#F4D35E] transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Full-Stack Engineering Role / Technical Consultation"
                      className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#F4D35E] focus:ring-1 focus:ring-[#F4D35E] transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Message Details <span className="text-[#F4D35E]">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your product vision, timeline, or engineering team..."
                      className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#F4D35E] focus:ring-1 focus:ring-[#F4D35E] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group relative flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#F4D35E] hover:bg-[#ffe694] text-slate-950 font-bold text-sm transition-all duration-300 shadow-xl shadow-[#F4D35E]/20 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching via Clamshell Tube...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
