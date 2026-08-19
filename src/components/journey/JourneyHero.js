"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function JourneyHero() {
  const scrollToStart = () => {
    const el = document.getElementById("stage-01");
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa]">
      {/* Background decorations */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#4361ee]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#f72585]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-[#4361ee]/10 text-[#4361ee] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            Developer Journey
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#0d1b2a] leading-[1.1] mb-6">
            From Idea to <br />
            <span className="text-[#4361ee]">Interface</span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Explore how I turn concepts into functional digital experiences. A scroll-driven look at the way ideas become polished, responsive web applications.
          </p>
        </motion.div>

        {/* Start Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={scrollToStart}
          data-cursor="Start"
          className="bg-[#0d1b2a] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#4361ee] hover:-translate-y-1 transition-all shadow-xl shadow-[#0d1b2a]/10"
        >
          Start the Journey
        </motion.button>

        {/* Minimal Route Preview */}
        <motion.div 
          className="mt-20 flex flex-col items-center gap-4 opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="h-24 w-px bg-gradient-to-b from-transparent via-[#4361ee] to-[#4361ee] relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/3 bg-white blur-sm"
              animate={{ top: ["-30%", "130%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <ChevronDown className="text-[#4361ee] animate-bounce" size={20} />
        </motion.div>
      </div>
    </section>
  );
}
