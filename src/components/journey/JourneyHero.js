"use client";
import { motion } from "framer-motion";
import { ChevronDown, ArrowLeft, Gamepad2 } from "lucide-react";
import Link from "next/link";

export default function JourneyHero() {
  const scrollToStart = () => {
    const el = document.getElementById("stage-01");
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa] py-16 sm:py-24">
      {/* Background decorations */}
      <div className="absolute top-[-100px] right-[-100px] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-slate-200/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-slate-200/50 rounded-full blur-[100px] pointer-events-none" />

      {/* Top bar back button */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#4361ee] bg-white border border-slate-200 px-3.5 py-2 rounded-full shadow-sm hover:shadow transition-all"
        >
          <ArrowLeft size={14} /> Back to Portfolio
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 w-full flex flex-col items-center mt-8 sm:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-[#4361ee]/10 text-[#4361ee] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest mb-5">
            Developer Career Quest
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-[#0d1b2a] leading-[1.12] mb-4 sm:mb-6">
            From Idea to <br />
            <span className="text-[#4361ee]">Production Architecture</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Explore Joshua Hotama&apos;s journey as a Full Stack Developer (UMN 2025). Play the interactive developer quest below or scroll through the architecture stages.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => window.scrollTo({ top: 400, behavior: "smooth" })}
            className="bg-[#4361ee] text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm hover:bg-[#3451db] transition-all shadow-lg shadow-[#4361ee]/25 flex items-center gap-2"
          >
            <Gamepad2 size={16} /> Play Developer Quest
          </button>

          <button
            onClick={scrollToStart}
            className="bg-white border border-slate-300 text-slate-700 px-6 py-3 rounded-full font-bold text-xs sm:text-sm hover:bg-slate-100 transition-all shadow-sm"
          >
            Explore Build Stages
          </button>
        </motion.div>

        {/* Minimal Route Indicator */}
        <motion.div 
          className="mt-12 sm:mt-16 flex flex-col items-center gap-3 opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="h-12 w-px bg-slate-300 relative overflow-hidden" />
          <ChevronDown className="text-[#4361ee] animate-bounce" size={18} />
        </motion.div>
      </div>
    </section>
  );
}
