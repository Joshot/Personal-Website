"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Award, Terminal, Code2, Database, Download, ExternalLink, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function RecruiterDossierModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("joshuahh554@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0d1b2a]/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="bg-[#0d1b2a] text-white p-5 sm:p-8 relative overflow-hidden shrink-0">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#4361ee]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-start justify-between relative z-10 gap-3">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-[#4361ee]/20 border border-[#4361ee]/40 text-[#4361ee] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  <Terminal size={12} className="text-[#4361ee]" /> Technical Overview &amp; Profile
                </div>
                <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white">
                  Joshua Hotama
                </h2>
                <p className="text-white/70 text-xs sm:text-sm mt-0.5 font-medium">
                  Full Stack Developer · Universitas Multimedia Nusantara (Graduated 2025)
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-5 pt-4 border-t border-white/10 text-center sm:text-left">
              <div>
                <p className="text-lg sm:text-2xl font-black text-white">20+</p>
                <p className="text-white/50 text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">Deployments</p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-[#4361ee]">3+</p>
                <p className="text-white/50 text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">Core DB Paradigms</p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-white">100%</p>
                <p className="text-white/50 text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">Responsive Delivery</p>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="overflow-y-auto p-5 sm:p-8 space-y-5 sm:space-y-6">
            {/* Technical Lead Assessment */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Terminal size={14} className="text-[#4361ee]" /> Core Engineering Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-[#4361ee] font-bold text-xs mb-1">
                    <Code2 size={16} /> Frontend Architecture
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    React, Next.js App Router, Tailwind CSS, component state trees, and translating Figma designs into responsive code.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-[#4361ee] font-bold text-xs mb-1">
                    <Database size={16} /> Backend &amp; Data Layers
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Practical work across MySQL, PostgreSQL, MongoDB, Supabase, PHP, and REST APIs for transactional web apps.
                  </p>
                </div>
              </div>
            </div>

            {/* Candidate Highlights */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                <Award size={14} className="text-[#4361ee]" /> Key Qualifications
              </h3>
              <div className="space-y-2">
                {[
                  "Academic Background: Bachelor Graduate from Universitas Multimedia Nusantara (UMN, Class of 2025) with computer science foundations.",
                  "Production-Oriented: Built 20+ web applications, e-commerce prototypes, interactive simulations, and admin dashboards.",
                  "UI/UX Cross-Discipline: Hands-on prototyping experience in Figma combined with frontend engineering rigor.",
                  "Reliable & Collaborative: Experience working with teams across university capstones, internships, and external projects.",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Candidate Verification Links */}
            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Official Links &amp; Resume
              </h3>
              <div className="flex flex-wrap gap-2">
                <a
                  href="/assets/cv/CV_Joshua.pdf"
                  download
                  className="bg-[#4361ee] text-white px-3.5 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 hover:bg-[#3451db] transition-all shadow-sm"
                >
                  <Download size={13} /> Official CV (PDF)
                </a>

                <a
                  href="/assets/portofolio/PORTOFOLIO JOSSS.pdf"
                  download
                  className="bg-slate-100 text-[#0d1b2a] border border-slate-200 px-3.5 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 hover:bg-slate-200 transition-all"
                >
                  <Download size={13} /> Portfolio Deck (PDF)
                </a>

                <a
                  href="https://www.linkedin.com/in/joshuahotama/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#0077b5] text-white px-3.5 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 hover:opacity-90 transition-all"
                >
                  <ExternalLink size={13} /> LinkedIn
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="bg-slate-50 border border-slate-200 text-slate-700 px-3.5 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 hover:bg-slate-100 transition-all"
                >
                  {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                  {copied ? "Copied!" : "joshuahh554@gmail.com"}
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-slate-50 px-5 sm:px-8 py-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Universitas Multimedia Nusantara (2025)</span>
            <button
              onClick={onClose}
              className="text-[#4361ee] font-bold hover:underline"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
