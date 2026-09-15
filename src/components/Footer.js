"use client";
import { Download, FileText, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080f1a] pb-28 pt-12 relative overflow-hidden border-t border-white/5 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand mark */}
          <div className="text-center md:text-left">
            <h3 className="font-black text-base tracking-tight text-white">
              Joshua Hotama
            </h3>
            <p className="text-white/40 text-xs mt-0.5">
              Full Stack Developer · Universitas Multimedia Nusantara (2025)
            </p>
          </div>

          {/* Quick Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#home" className="text-white/40 text-xs hover:text-[#4361ee] transition-colors">Home</a>
            <a href="#about" className="text-white/40 text-xs hover:text-[#4361ee] transition-colors">About</a>
            <a href="#skills" className="text-white/40 text-xs hover:text-[#4361ee] transition-colors">Skills Matrix</a>
            <a href="#work" className="text-white/40 text-xs hover:text-[#4361ee] transition-colors">Projects (20+)</a>
            <a href="#contact" className="text-white/40 text-xs hover:text-[#4361ee] transition-colors">Contact</a>
            <a href="/journey" className="text-[#4361ee] text-xs hover:underline font-semibold">Build Journey</a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Joshot"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="text-white/30 hover:text-white transition-colors text-base"
            >
              <i className="bi bi-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/joshuahotama/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="text-white/30 hover:text-[#4361ee] transition-colors text-base"
            >
              <i className="bi bi-linkedin" />
            </a>
            <a
              href="https://www.instagram.com/joshuahotama/"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
              className="text-white/30 hover:text-pink-400 transition-colors text-base"
            >
              <i className="bi bi-instagram" />
            </a>
            <a
              href="https://www.facebook.com/joshua.hotama/"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
              className="text-white/30 hover:text-blue-400 transition-colors text-base"
            >
              <i className="bi bi-facebook" />
            </a>
          </div>
        </div>

        <div className="h-px bg-white/5 my-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-white/30">
          <p>© 2026 Joshua Hotama. Crafted with Next.js &amp; Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <a href="/assets/cv/CV_Joshua.pdf" download className="hover:text-white transition-colors">Resume (CV)</a>
            <span>•</span>
            <a href="/assets/portofolio/PORTOFOLIO JOSSS.pdf" download className="hover:text-white transition-colors">Portfolio PDF</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
