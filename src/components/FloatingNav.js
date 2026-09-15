"use client";
import { useState, useEffect } from "react";
import { 
  Home, User, Lightbulb, Grid, Mail, FileText, Search, 
  Gamepad2, Download, X, ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingNav({ onOpenSearch }) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "work", "contact"];
      const headerH = 60;
      let currentId = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - headerH - 80;
          if (window.scrollY >= top) {
            currentId = id;
          }
        }
      });
      setActiveSection(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", icon: <Home size={19} />, label: "Home" },
    { id: "about", icon: <User size={19} />, label: "About" },
    { id: "skills", icon: <Lightbulb size={19} />, label: "Skills" },
    { id: "work", icon: <Grid size={19} />, label: "Projects (20+)" },
    { id: "contact", icon: <Mail size={19} />, label: "Contact" },
  ];

  return (
    <>
      {/* Primary Floating Navigation Bar - Separated & Icon-Focused */}
      <nav className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#0d1b2a]/95 backdrop-blur-2xl border border-white/15 rounded-full shadow-[0_12px_36px_rgba(0,0,0,0.45)] px-2.5 py-1.5 sm:px-3.5 sm:py-2 flex items-center gap-1 sm:gap-2 max-w-[96vw] sm:max-w-fit">
        
        {/* Group 1: Navigation Icons Only (Home, About, Skills, Projects, Contact) */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                title={item.label}
                className={`p-2 sm:p-2.5 rounded-full transition-all flex items-center justify-center relative group ${
                  isActive
                    ? "bg-[#4361ee] text-white shadow-[0_2px_12px_rgba(67,97,238,0.5)]"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.icon}
                {/* Clean Hover Tooltip */}
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 border border-white/20 text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-lg whitespace-nowrap hidden sm:block">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* Distinct Visual Separator */}
        <div className="w-px h-5 sm:h-6 bg-white/20 mx-0.5 sm:mx-1 shrink-0" />

        {/* Group 2: Actions (Search, CV, Quest Journey) */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {/* Quick Search */}
          {onOpenSearch && (
            <button
              onClick={onOpenSearch}
              className="p-2 sm:p-2.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all relative group flex items-center justify-center"
              title="Search Projects (⌘K)"
            >
              <Search size={19} />
              <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 border border-white/20 text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-lg whitespace-nowrap hidden sm:block">
                Search (⌘K)
              </span>
            </button>
          )}

          {/* CV Download */}
          <a
            href="/assets/cv/CV_Joshua.pdf"
            download
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all text-xs font-semibold"
            title="Download Joshua's Resume"
          >
            <FileText size={16} />
            <span>CV</span>
          </a>

          {/* Quest Journey Button - Inline Text, No Wrap, Larger Icon, Solid Tone */}
          <a
            href="/journey"
            className="inline-flex items-center gap-2 bg-[#4361ee] hover:bg-[#3451db] text-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap shadow-md transition-all border border-white/20 shrink-0"
            title="Interactive Career Quest Journey"
          >
            <Gamepad2 size={20} className="shrink-0 text-white" />
            <span className="whitespace-nowrap">Quest Journey</span>
          </a>
        </div>
      </nav>
    </>
  );
}
