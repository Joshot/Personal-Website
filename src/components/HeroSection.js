"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Grid, Send, Download, Compass, ArrowDown, Sparkles, ExternalLink, Award, FileText } from "lucide-react";
import Link from "next/link";
import RecruiterDossierModal from "./RecruiterDossierModal";

export default function HeroSection({ onOpenCommandPalette }) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  useEffect(() => {
    const words = [
      "Full Stack Developer",
      "Frontend Engineer",
      "UI/UX Enthusiast",
      "Fresh Graduate"
    ];
    const current = words[wordIndex];
    const speed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setText(current.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-[#0d1b2a] overflow-hidden pt-20 sm:pt-24 pb-16 sm:pb-20">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Subtle Deep Ambient Lights */}
      <div className="absolute top-[-120px] right-[-60px] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#4361ee]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-60px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-indigo-900/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-14 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1 text-left"
          >
            {/* The ONLY "Available for Hire" Badge in the whole app */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for Hire · Full-time &amp; Contract
              </span>

              {/* Candidate Summary Trigger */}
              <button
                onClick={() => setIsDossierOpen(true)}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full transition-all cursor-pointer"
              >
                <FileText size={13} className="text-[#4361ee]" />
                <span>Verified Candidate Dossier</span>
              </button>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-black text-white leading-[1.08] mb-4 tracking-tight">
              <span className="block text-white/50 text-xs sm:text-base font-semibold tracking-wider mb-2 uppercase">
                Software Engineer &amp; Full Stack Developer
              </span>
              <span className="block text-4xl sm:text-6xl lg:text-7xl text-white">Joshua</span>
              <span className="block text-4xl sm:text-6xl lg:text-7xl text-[#4361ee]">Hotama.</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
              <div className="w-7 h-px bg-[#4361ee]" />
              <p className="text-white/80 text-sm sm:text-base font-medium">
                <span className="border-r-2 border-[#4361ee] pr-1.5 font-mono">{text}</span>
              </p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-white/60 text-xs sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg">
              Software developer who turns ideas into functional, well-crafted web applications. Specializing in full-stack JavaScript, React, Next.js, and database engineering.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 sm:gap-3 mb-8 sm:mb-10">
              <a
                href="#work"
                className="bg-[#4361ee] hover:bg-[#3451db] text-white px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-lg shadow-[#4361ee]/30 transition-all"
              >
                <Grid size={15} /> Explore 20+ Projects
              </a>
              
              <a
                href="/assets/cv/CV_Joshua.pdf"
                download
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all"
              >
                <Download size={15} /> Download CV
              </a>

              <Link
                href="/journey"
                className="bg-white/10 hover:bg-[#4361ee] text-white border border-white/20 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all"
              >
                <Compass size={15} />
                <span>Build Journey</span>
              </Link>
            </motion.div>

            {/* Metrics */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 pt-5 border-t border-white/10 max-w-md">
              <div>
                <p className="text-xl sm:text-3xl font-black text-white">20+</p>
                <p className="text-white/40 text-[10px] sm:text-[11px] mt-0.5 uppercase tracking-wider font-semibold">Projects</p>
              </div>
              <div className="border-l border-white/10 pl-3">
                <p className="text-xl sm:text-3xl font-black text-[#4361ee]">10+</p>
                <p className="text-white/40 text-[10px] sm:text-[11px] mt-0.5 uppercase tracking-wider font-semibold">Tech Stacks</p>
              </div>
              <div className="border-l border-white/10 pl-3">
                <p className="text-xl sm:text-3xl font-black text-white">UMN &apos;25</p>
                <p className="text-white/40 text-[10px] sm:text-[11px] mt-0.5 uppercase tracking-wider font-semibold">Bachelor Grad</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Container - Fully Responsive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]">
              {/* Glow */}
              <div className="absolute -inset-3 bg-[#4361ee]/20 rounded-[2.5rem] blur-2xl pointer-events-none" />
              
              {/* Frame */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/15 aspect-[3/4] bg-[#080f1a]">
                <img
                  src="/assets/img/pofil.jpg"
                  alt="Joshua Hotama"
                  className="w-full h-full object-cover object-bottom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating University Badge */}
              <div className="absolute -bottom-3 inset-x-2 sm:inset-x-auto sm:-right-4 bg-[#0d1b2a]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-3 shadow-2xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#4361ee]/25 flex items-center justify-center text-[#4361ee] shrink-0">
                  <i className="bx bxs-graduation text-base" />
                </div>
                <div className="min-w-0">
                  <p className="text-white text-xs font-bold leading-tight truncate">Univ. Multimedia Nusantara</p>
                  <p className="text-white/50 text-[10px] mt-0.5 font-medium truncate">Graduated 2025 · Computer Science</p>
                </div>
              </div>

              {/* Floating Tech Stack Pill */}
              <div className="absolute -top-3 left-2 sm:-left-3 bg-[#0d1b2a]/95 backdrop-blur-xl border border-white/15 rounded-2xl px-3 py-1.5 shadow-2xl flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#4361ee]" />
                <p className="text-white text-[11px] font-bold">React · Next.js · Node · SQL</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating Desktop Social Bar */}
      <div className="hidden xl:flex flex-col gap-2.5 absolute left-6 top-1/2 -translate-y-1/2 z-20">
        <a
          href="https://github.com/Joshot"
          target="_blank"
          rel="noreferrer"
          title="GitHub Profile"
          className="w-9 h-9 bg-white/5 hover:bg-[#4361ee] border border-white/10 hover:border-[#4361ee] rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
        >
          <i className="bi bi-github text-sm" />
        </a>
        <a
          href="https://www.linkedin.com/in/joshuahotama/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn Profile"
          className="w-9 h-9 bg-white/5 hover:bg-[#4361ee] border border-white/10 hover:border-[#4361ee] rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
        >
          <i className="bi bi-linkedin text-sm" />
        </a>
        <a
          href="https://www.instagram.com/joshuahotama/"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
          className="w-9 h-9 bg-white/5 hover:bg-[#4361ee] border border-white/10 hover:border-[#4361ee] rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
        >
          <i className="bi bi-instagram text-sm" />
        </a>
        <a
          href="https://www.facebook.com/joshua.hotama/"
          target="_blank"
          rel="noreferrer"
          title="Facebook"
          className="w-9 h-9 bg-white/5 hover:bg-[#4361ee] border border-white/10 hover:border-[#4361ee] rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-all duration-300"
        >
          <i className="bi bi-facebook text-sm" />
        </a>
      </div>

      {/* Recruiter Dossier Modal */}
      <RecruiterDossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />
    </section>
  );
}
