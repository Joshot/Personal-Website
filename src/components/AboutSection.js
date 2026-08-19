"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Download, FileText } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading subtitle="Who I Am" title="About Me" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative max-w-xs mx-auto"
          >
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#4361ee]/20 rounded-2xl" />
            <img src="/assets/img/Profile.jpg" alt="Profile" className="relative z-10 w-full rounded-2xl shadow-2xl" />
            <div className="absolute -bottom-4 -right-4 z-20 bg-[#4361ee] text-white px-5 py-3 rounded-xl shadow-lg shadow-[#4361ee]/30 text-center">
              <p className="text-xs font-semibold opacity-90">Available for Hire</p>
              <p className="text-[10px] opacity-70">Full-time / Freelance</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-black text-[#0d1b2a] mb-1">Joshua Hotama</h2>
            <p className="text-[#4361ee] font-medium text-sm mb-5">Full Stack Developer · Fresh Graduate</p>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">Hello! I'm a passionate Full Stack Developer with experience in both frontend and backend development gained through internships, university projects, and external builds.</p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">My backend toolkit includes MySQL, PostgreSQL, and MongoDB. On the frontend I work with HTML, CSS, JavaScript, PHP, React, Next.js, jQuery, Tailwind, and Bootstrap. I also design in Figma.</p>
            
            <div className="grid grid-cols-2 gap-3 mb-7">
              <div className="flex items-center gap-3">
                <i className='bx bxl-linkedin text-[#4361ee] text-lg' />
                <div><p className="text-[10px] text-gray-400">LinkedIn</p><p className="text-sm font-semibold">joshuahotama</p></div>
              </div>
              <div className="flex items-center gap-3">
                <i className='bx bxs-graduation text-[#4361ee] text-lg' />
                <div><p className="text-[10px] text-gray-400">Education</p><p className="text-sm font-semibold">Bachelor Graduate</p></div>
              </div>
              <div className="flex items-center gap-3">
                <i className='bx bxl-github text-[#4361ee] text-lg' />
                <div><p className="text-[10px] text-gray-400">GitHub</p><p className="text-sm font-semibold">github.com/Joshot</p></div>
              </div>
              <div className="flex items-center gap-3">
                <i className='bx bxs-briefcase text-[#4361ee] text-lg' />
                <div><p className="text-[10px] text-gray-400">Status</p><p className="text-sm font-semibold text-green-500">Available for Hire</p></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="/assets/cv/CV_Joshua.pdf" download className="bg-[#4361ee] text-white px-6 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 shadow-md shadow-[#4361ee]/25 hover:-translate-y-1 transition-transform">
                <Download size={16} /> Download CV
              </a>
              <a href="/assets/portofolio/PORTOFOLIO JOSSS.pdf" download className="border-2 border-[#4361ee] text-[#4361ee] px-6 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-[#4361ee] hover:text-white hover:-translate-y-1 transition-all">
                <FileText size={16} /> Portfolio PDF
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
