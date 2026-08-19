"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

export default function StageTogether() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="stage-06" className="py-48 bg-white relative z-10 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-6 w-full lg:pl-20 text-center">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="relative bg-[#0d1b2a] rounded-3xl p-12 md:p-20 overflow-hidden shadow-2xl"
        >
          {/* Animated background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#4361ee]/30 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.span variants={textVariants} className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for Hire
            </motion.span>
            
            <motion.h2 variants={textVariants} className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Let’s Build Together
            </motion.h2>
            <motion.p variants={textVariants} className="text-white/60 text-base md:text-lg max-w-lg mb-10 leading-relaxed">
              Have an idea, a product, or a problem worth solving? Let’s collaborate and turn it into a premium experience.
            </motion.p>
            
            <motion.div variants={textVariants} className="flex flex-wrap justify-center gap-4">
              <a 
                href="/assets/cv/CV_Joshua.pdf" 
                download
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-white px-6 font-bold text-[#0d1b2a] shadow-2xl transition-all hover:-translate-y-1"
              >
                <span className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                  <div className="relative h-full w-8 bg-black/10" />
                </span>
                <span className="relative flex items-center gap-2">
                  <Download size={18} /> View Resume
                </span>
              </a>
              <a 
                href="https://www.linkedin.com/in/joshuahotama/" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-white hover:text-[#0d1b2a] hover:-translate-y-1 transition-all"
              >
                <i className="bx bxl-linkedin text-lg" /> Connect on LinkedIn
              </a>
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-32 flex flex-col items-center gap-8">
          <Link 
            href="/"
            data-cursor="Go Back"
            className="group flex items-center gap-2 text-[#4361ee] font-bold text-base hover:text-[#0d1b2a] transition-colors"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          
          <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold">
            Designed and built with curiosity, care, and clean code.
          </p>
        </div>
        
      </div>
    </section>
  );
}
