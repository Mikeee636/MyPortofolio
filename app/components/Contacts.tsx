"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Contacts() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const { playBubble } = useTheme();

  const email = "michaelandre@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    playBubble();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playBubble();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 400);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="mx-auto max-w-[90rem] px-4 py-20 md:px-8 md:py-32 border-t border-[var(--color-rule)]">
      
      {/* Header from Reference */}
      <header>
        <p className="label flex items-center gap-3 opacity-75">
          <span>06</span>
          <span aria-hidden="true" className="text-base tracking-normal text-[var(--color-coral)]">
            CONTACT
          </span>
          <span aria-hidden="true" className="h-px w-10 bg-current opacity-50" />
          <span>The desk</span>
        </p>
        <h2 id="contact-heading" className="display mt-4 text-[length:var(--text-3xl)]">
          Get in touch
        </h2>
        <p className="mt-3 max-w-[34ch] text-sm md:text-base opacity-80 leading-relaxed font-medium">
          Open for software engineering opportunities, internships, freelance projects, or discussing the secret formula over coffee.
        </p>
      </header>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Direct Channels Left */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Direct Email Card */}
          <div className="p-5 rounded-2xl border border-[var(--color-ink)] bg-[var(--color-paper)] flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-sponge)] text-slate-900 flex items-center justify-center font-bold">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="label text-[0.65rem] opacity-75">Direct Email</p>
                <p className="font-mono text-sm font-bold">{email}</p>
              </div>
            </div>
            <button
              onClick={handleCopy}
              title="Copy email to clipboard"
              className="p-2 rounded-lg border border-[var(--color-rule)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* WhatsApp Card */}
          <div className="p-5 rounded-2xl border border-[var(--color-ink)] bg-[var(--color-paper)] flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="label text-[0.65rem] opacity-75">WhatsApp / Phone</p>
              <p className="font-mono text-sm font-bold">+62 812-3456-7890</p>
            </div>
          </div>

          {/* Location Coordinates */}
          <div className="p-5 rounded-2xl border border-[var(--color-ink)] bg-[var(--color-paper)] flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="label text-[0.65rem] opacity-75">Location &amp; Coordinates</p>
              <p className="font-mono text-sm font-bold">Jakarta (6°10′S 106°47′E) · Bikini Bottom</p>
            </div>
          </div>

          <p className="label text-[0.65rem] opacity-65 pt-2">
            ⚡ Response time: Usually within 24 hours.
          </p>

        </div>

        {/* Dispatch Message Form Right */}
        <div className="lg:col-span-7">
          <div className="p-7 sm:p-9 rounded-2xl border border-[var(--color-ink)] bg-[var(--color-paper)] shadow-md">
            {submitted ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="display text-2xl">Message Received!</h3>
                <p className="text-xs sm:text-sm opacity-80 max-w-sm mx-auto font-medium">
                  Thank you for reaching out. SpongeBob &amp; Michael have received your order ticket and will respond soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 label px-5 py-2.5 rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] text-xs"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label block text-[0.65rem] opacity-80 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Squidward / Recruiter"
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-rule)] bg-transparent text-sm focus:outline-none focus:border-[var(--color-ink)] font-medium"
                    />
                  </div>
                  <div>
                    <label className="label block text-[0.65rem] opacity-80 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-rule)] bg-transparent text-sm focus:outline-none focus:border-[var(--color-ink)] font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="label block text-[0.65rem] opacity-80 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-rule)] bg-transparent text-sm focus:outline-none focus:border-[var(--color-ink)] font-medium"
                  />
                </div>

                <div>
                  <label className="label block text-[0.65rem] opacity-80 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, or just say hello..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-rule)] bg-transparent text-sm focus:outline-none focus:border-[var(--color-ink)] font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[var(--color-ink)] hover:bg-[var(--color-sponge)] hover:text-slate-900 text-[var(--color-paper)] label text-xs tracking-[0.15em] flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message Ticket</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </section>
  );
}
