"use client";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#0d1b2a] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#4361ee]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#f72585]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-[#4361ee]/15 border border-[#4361ee]/20 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-5">
            <i className='bx bxs-circle text-green-400 text-[8px]' /> Open to Opportunities
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-white mt-4 mb-4 leading-tight">
            Interested in Working<br /><span className="text-[#4361ee]">Together?</span>
          </h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-lg mx-auto">
            I'm open to full-time roles, freelance projects, and collaborations. Let's build something great together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          <a href="/assets/cv/CV_Joshua.pdf" download className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3 text-center hover:bg-[#4361ee]/15 hover:border-[#4361ee]/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="w-12 h-12 bg-[#4361ee]/20 rounded-xl flex items-center justify-center text-[#4361ee] text-xl group-hover:bg-[#4361ee] group-hover:text-white transition-all duration-300">
              <Download size={24} />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Download CV</p>
              <p className="text-white/40 text-[11px] mt-0.5">Resume & Experience</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#4361ee] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>

          <a href="/assets/portofolio/PORTOFOLIO JOSSS.pdf" download className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3 text-center hover:bg-[#f72585]/15 hover:border-[#f72585]/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="w-12 h-12 bg-[#f72585]/20 rounded-xl flex items-center justify-center text-[#f72585] text-xl group-hover:bg-[#f72585] group-hover:text-white transition-all duration-300">
              <FileText size={24} />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Portfolio PDF</p>
              <p className="text-white/40 text-[11px] mt-0.5">Projects & Design Work</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#f72585] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>

          <a href="https://www.linkedin.com/in/joshuahotama/" target="_blank" rel="noreferrer" className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3 text-center hover:bg-blue-500/15 hover:border-blue-400/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <i className="bx bxl-linkedin text-2xl" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">LinkedIn</p>
              <p className="text-white/40 text-[11px] mt-0.5">Professional Network</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-white/10" />
            <p className="text-white/25 text-xs whitespace-nowrap">Also find me on</p>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="flex justify-center gap-3">
            <a href="https://www.facebook.com/joshua.hotama/" target="_blank" rel="noreferrer" className="group w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300"><i className="bi bi-facebook text-sm" /></a>
            <a href="https://www.instagram.com/joshuahotama/" target="_blank" rel="noreferrer" className="group w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-pink-400 hover:scale-110 hover:-translate-y-1 transition-all duration-300"><i className="bi bi-instagram text-sm" /></a>
            <a href="https://github.com/Joshot" target="_blank" rel="noreferrer" className="group w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:bg-gray-700 hover:text-white hover:border-gray-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300"><i className="bi bi-github text-sm" /></a>
            <a href="https://www.linkedin.com/in/joshuahotama/" target="_blank" rel="noreferrer" className="group w-11 h-11 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300"><i className="bi bi-linkedin text-sm" /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
