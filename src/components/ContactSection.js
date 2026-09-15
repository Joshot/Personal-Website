"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, Mail, Copy, Check, ExternalLink, ArrowRight, Send } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("joshuahh554@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#0d1b2a] relative overflow-hidden text-white">
      {/* Background Depth Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#4361ee]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-indigo-900/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-[#4361ee]/20 border border-[#4361ee]/30 text-indigo-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Initiate Collaboration
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Ready to Build Something <span className="text-[#4361ee]">Impactful?</span>
          </h2>
          <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            I am currently open to full-time engineering positions, contract roles, and impactful web development projects. Let&apos;s connect directly.
          </p>
        </motion.div>

        {/* Interactive Direct Email & Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-8 backdrop-blur-xl mb-8 sm:mb-10 text-center"
        >
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#4361ee]/20 text-[#4361ee] flex items-center justify-center mx-auto">
              <Mail size={24} />
            </div>

            <p className="text-xs text-white/50 uppercase tracking-wider font-bold">Primary Direct Contact</p>
            
            <div className="text-lg sm:text-2xl font-black text-white font-mono tracking-tight select-all break-all sm:break-normal px-2">
              joshuahh554@gmail.com
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto bg-white text-[#0d1b2a] hover:bg-slate-100 px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                {copied ? <Check size={15} className="text-emerald-600" /> : <Copy size={15} />}
                {copied ? "Email Copied to Clipboard!" : "Copy Email Address"}
              </button>

              <a
                href="mailto:joshuahh554@gmail.com?subject=Job%20Opportunity%20/%20Project%20Inquiry%20-%20Joshua%20Hotama"
                className="w-full sm:w-auto bg-[#4361ee] hover:bg-[#3451db] text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-[#4361ee]/30"
              >
                <Send size={15} /> Open Mail Client
              </a>
            </div>
          </div>
        </motion.div>

        {/* 3 Core Asset Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          {/* CV Download */}
          <a
            href="/assets/cv/CV_Joshua.pdf"
            download
            className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#4361ee]/50 rounded-2xl p-5 sm:p-6 flex flex-col items-center gap-2.5 text-center transition-all duration-300"
          >
            <div className="w-11 h-11 bg-[#4361ee]/20 text-[#4361ee] rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              <Download size={20} />
            </div>
            <div>
              <p className="text-white font-bold text-xs sm:text-sm">Download Official CV</p>
              <p className="text-white/40 text-[11px] mt-0.5">Resume &amp; Work History (PDF)</p>
            </div>
          </a>

          {/* Portfolio PDF */}
          <a
            href="/assets/portofolio/PORTOFOLIO JOSSS.pdf"
            download
            className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-500/50 rounded-2xl p-5 sm:p-6 flex flex-col items-center gap-2.5 text-center transition-all duration-300"
          >
            <div className="w-11 h-11 bg-pink-500/20 text-pink-400 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              <FileText size={20} />
            </div>
            <div>
              <p className="text-white font-bold text-xs sm:text-sm">Portfolio PDF Deck</p>
              <p className="text-white/40 text-[11px] mt-0.5">Projects &amp; Design Case Studies</p>
            </div>
          </a>

          {/* LinkedIn Network */}
          <a
            href="https://www.linkedin.com/in/joshuahotama/"
            target="_blank"
            rel="noreferrer"
            className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 rounded-2xl p-5 sm:p-6 flex flex-col items-center gap-2.5 text-center transition-all duration-300"
          >
            <div className="w-11 h-11 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              <i className="bx bxl-linkedin text-2xl" />
            </div>
            <div>
              <p className="text-white font-bold text-xs sm:text-sm">LinkedIn Profile</p>
              <p className="text-white/40 text-[11px] mt-0.5">Professional Network</p>
            </div>
          </a>
        </motion.div>

        {/* Social Network Hub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-white/10" />
            <p className="text-white/30 text-xs uppercase tracking-widest font-mono">Connect Across Platforms</p>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="flex justify-center gap-3">
            <a
              href="https://github.com/Joshot"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="w-11 h-11 bg-white/5 hover:bg-[#4361ee] border border-white/10 hover:border-[#4361ee] rounded-full flex items-center justify-center text-white/50 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <i className="bi bi-github text-sm" />
            </a>
            <a
              href="https://www.linkedin.com/in/joshuahotama/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="w-11 h-11 bg-white/5 hover:bg-[#4361ee] border border-white/10 hover:border-[#4361ee] rounded-full flex items-center justify-center text-white/50 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <i className="bi bi-linkedin text-sm" />
            </a>
            <a
              href="https://www.instagram.com/joshuahotama/"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
              className="w-11 h-11 bg-white/5 hover:bg-[#4361ee] border border-white/10 hover:border-[#4361ee] rounded-full flex items-center justify-center text-white/50 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <i className="bi bi-instagram text-sm" />
            </a>
            <a
              href="https://www.facebook.com/joshua.hotama/"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
              className="w-11 h-11 bg-white/5 hover:bg-[#4361ee] border border-white/10 hover:border-[#4361ee] rounded-full flex items-center justify-center text-white/50 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <i className="bi bi-facebook text-sm" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
