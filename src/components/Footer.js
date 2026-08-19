"use client";

export default function Footer() {
  return (
    <footer className="bg-[#080f1a] pb-32 pt-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4361ee]/30 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for Hire
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            <a href="#home" className="text-white/30 text-xs hover:text-[#4361ee] transition-colors">Home</a>
            <a href="#about" className="text-white/30 text-xs hover:text-[#4361ee] transition-colors">About</a>
            <a href="#skills" className="text-white/30 text-xs hover:text-[#4361ee] transition-colors">Skills</a>
            <a href="#work" className="text-white/30 text-xs hover:text-[#4361ee] transition-colors">Projects</a>
            <a href="#contact" className="text-white/30 text-xs hover:text-[#4361ee] transition-colors">Contact</a>
          </div>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/joshua.hotama/" target="_blank" rel="noreferrer" className="text-white/25 hover:text-[#4361ee] transition-colors text-sm"><i className="bi bi-facebook" /></a>
            <a href="https://www.linkedin.com/in/joshuahotama/" target="_blank" rel="noreferrer" className="text-white/25 hover:text-[#4361ee] transition-colors text-sm"><i className="bi bi-linkedin" /></a>
            <a href="https://www.instagram.com/joshuahotama/" target="_blank" rel="noreferrer" className="text-white/25 hover:text-[#4361ee] transition-colors text-sm"><i className="bi bi-instagram" /></a>
            <a href="https://github.com/Joshot" target="_blank" rel="noreferrer" className="text-white/25 hover:text-[#4361ee] transition-colors text-sm"><i className="bi bi-github" /></a>
          </div>
        </div>
        <div className="h-px bg-white/5 my-6" />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <p className="text-white/20 text-[11px]">© 2026 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
