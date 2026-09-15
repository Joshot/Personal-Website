"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import RecruiterDossierModal from "./RecruiterDossierModal";
import { Download, FileText, CheckCircle2, GraduationCap, Code, Layers, Briefcase, ExternalLink, MapPin, Code2, Calendar } from "lucide-react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  return (
    <section id="about" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading subtitle="Candidate Profile" title="About Joshua Hotama" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mt-6">
          
          {/* Profile Card & Photo Area (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Main Image Container */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl bg-[#0d1b2a] border border-slate-200">
                <img
                  src="/assets/img/Profile.jpg"
                  alt="Joshua Hotama"
                  className="w-full object-cover object-center"
                />
                
                {/* Floating Bottom Badge */}
                <div className="p-4 sm:p-5 bg-gradient-to-t from-[#0d1b2a] via-[#0d1b2a]/90 to-transparent text-white absolute bottom-0 inset-x-0">
                  <div className="flex items-center gap-1.5 text-[#4361ee] text-[11px] font-bold uppercase tracking-wider mb-1">
                    <GraduationCap size={15} /> Bachelor of Computer Science
                  </div>
                  <p className="text-sm font-bold text-white">Universitas Multimedia Nusantara</p>
                  <p className="text-xs text-white/70">Class of 2025 · Software Engineering</p>
                </div>
              </div>

              {/* Clean Responsive Location & Quick Stats Grid (Fixed layout!) */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="bg-slate-50 border border-slate-200/90 p-2.5 sm:p-3 rounded-xl text-center flex flex-col items-center justify-center">
                  <MapPin size={15} className="text-[#4361ee] mb-1 shrink-0" />
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Location</p>
                  <p className="text-[11px] sm:text-xs font-bold text-[#0d1b2a] leading-tight mt-0.5">Tangerang, ID</p>
                </div>

                <div className="bg-slate-50 border border-slate-200/90 p-2.5 sm:p-3 rounded-xl text-center flex flex-col items-center justify-center">
                  <Code2 size={15} className="text-[#4361ee] mb-1 shrink-0" />
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Discipline</p>
                  <p className="text-[11px] sm:text-xs font-bold text-[#4361ee] leading-tight mt-0.5">Full Stack</p>
                </div>

                <div className="bg-slate-50 border border-slate-200/90 p-2.5 sm:p-3 rounded-xl text-center flex flex-col items-center justify-center">
                  <Calendar size={15} className="text-[#4361ee] mb-1 shrink-0" />
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Graduation</p>
                  <p className="text-[11px] sm:text-xs font-bold text-[#0d1b2a] leading-tight mt-0.5">UMN 2025</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Detailed Bio & Interactive Dossier (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4361ee] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Full Stack Developer · Fresh Graduate
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#0d1b2a] tracking-tight mb-4">
              Building scalable, high-performance web systems with modern code &amp; design.
            </h2>

            {/* Interactive Tab Switcher - Fully Responsive */}
            <div className="flex items-center gap-1.5 border-b border-slate-200 pb-3 mb-5 overflow-x-auto scrollbar-none">
              <button
                onClick={() => setActiveTab("overview")}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                  activeTab === "overview"
                    ? "bg-[#4361ee] text-white shadow-sm"
                    : "text-slate-600 hover:text-[#0d1b2a] hover:bg-slate-100"
                }`}
              >
                Bio &amp; Stacks
              </button>
              <button
                onClick={() => setActiveTab("qualifications")}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                  activeTab === "qualifications"
                    ? "bg-[#4361ee] text-white shadow-sm"
                    : "text-slate-600 hover:text-[#0d1b2a] hover:bg-slate-100"
                }`}
              >
                Key Strengths
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                  activeTab === "education"
                    ? "bg-[#4361ee] text-white shadow-sm"
                    : "text-slate-600 hover:text-[#0d1b2a] hover:bg-slate-100"
                }`}
              >
                Education (UMN)
              </button>
            </div>

            {/* Tab 1: Biography */}
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Hello! I&apos;m a passionate Full Stack Developer with experience in both frontend and backend development gained through internships, university projects, and external builds.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  My backend toolkit includes <strong className="text-[#0d1b2a]">MySQL</strong>, <strong className="text-[#0d1b2a]">PostgreSQL</strong>, and <strong className="text-[#0d1b2a]">MongoDB</strong>. On the frontend I work with <strong className="text-[#0d1b2a]">HTML</strong>, <strong className="text-[#0d1b2a]">CSS</strong>, <strong className="text-[#0d1b2a]">JavaScript</strong>, <strong className="text-[#0d1b2a]">PHP</strong>, <strong className="text-[#0d1b2a]">React</strong>, <strong className="text-[#0d1b2a]">Next.js</strong>, <strong className="text-[#0d1b2a]">jQuery</strong>, <strong className="text-[#0d1b2a]">Tailwind</strong>, and <strong className="text-[#0d1b2a]">Bootstrap</strong>. I also design in <strong className="text-[#0d1b2a]">Figma</strong>.
                </p>

                {/* Key metadata grid - Clean & Responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#4361ee] flex items-center justify-center shrink-0">
                      <i className="bx bxl-linkedin text-lg" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-slate-400 font-bold uppercase">LinkedIn Profile</p>
                      <a href="https://www.linkedin.com/in/joshuahotama/" target="_blank" rel="noreferrer" className="text-xs font-bold text-[#0d1b2a] hover:text-[#4361ee] flex items-center gap-1 truncate">
                        joshuahotama <ExternalLink size={11} className="shrink-0" />
                      </a>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center shrink-0">
                      <i className="bx bxl-github text-lg" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-slate-400 font-bold uppercase">GitHub Codebase</p>
                      <a href="https://github.com/Joshot" target="_blank" rel="noreferrer" className="text-xs font-bold text-[#0d1b2a] hover:text-[#4361ee] flex items-center gap-1 truncate">
                        github.com/Joshot <ExternalLink size={11} className="shrink-0" />
                      </a>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">Education Degree</p>
                      <p className="text-xs font-bold text-[#0d1b2a]">Bachelor Graduate (2025)</p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-[#4361ee] flex items-center justify-center shrink-0">
                      <Code size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">Core Focus</p>
                      <p className="text-xs font-bold text-[#0d1b2a]">Full Stack Engineering</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 2: Key Strengths */}
            {activeTab === "qualifications" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-[#0d1b2a]">End-to-End Execution</p>
                    <p className="text-xs text-slate-600 mt-0.5">Takes projects from raw Figma designs and requirements all the way to deployed production instances.</p>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-[#0d1b2a]">Modern Frontend &amp; State Architecture</p>
                    <p className="text-xs text-slate-600 mt-0.5">Strong command of React, Next.js, modern CSS, Tailwind, responsive grids, and API integration.</p>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-[#0d1b2a]">Database &amp; Data Layer Practicality</p>
                    <p className="text-xs text-slate-600 mt-0.5">Capable of designing relational schemas (MySQL/Postgres) as well as document stores (MongoDB) and backend scripts (PHP/Node).</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 3: Education & Academic */}
            {activeTab === "education" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4361ee]/10 text-[#4361ee] flex items-center justify-center font-bold shrink-0">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0d1b2a]">Universitas Multimedia Nusantara (UMN)</h4>
                    <p className="text-xs text-slate-500">Graduated in 2025 · Bachelor Degree</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                  Completed software engineering coursework, practical collaborative labs, and capstone software projects, including interactive web experiences and production-ready applications.
                </p>
              </motion.div>
            )}

            {/* Official Downloads Bar */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 mt-6 sm:mt-8 pt-5 border-t border-slate-100">
              <a
                href="/assets/cv/CV_Joshua.pdf"
                download
                className="bg-[#4361ee] hover:bg-[#3451db] text-white px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-md shadow-[#4361ee]/20 transition-all"
              >
                <Download size={14} /> Download CV (PDF)
              </a>
              <a
                href="/assets/portofolio/PORTOFOLIO JOSSS.pdf"
                download
                className="border border-slate-300 text-slate-700 hover:text-[#4361ee] hover:border-[#4361ee] px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all bg-white"
              >
                <FileText size={14} /> View Portfolio Deck (PDF)
              </a>
              <button
                onClick={() => setIsDossierOpen(true)}
                className="bg-slate-900 hover:bg-slate-800 text-white px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                <FileText size={14} className="text-[#4361ee]" /> Verified Candidate Dossier
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      <RecruiterDossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />
    </section>
  );
}
