"use client";
import { useState, useEffect } from "react";
import { Home, User, Lightbulb, Grid, Mail, FileText, Compass } from "lucide-react";

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "work", "contact"];
      const headerH = 60;
      let currentId = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - headerH - 40;
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
    { id: "home", icon: <Home size={20} />, label: "Home" },
    { id: "about", icon: <User size={20} />, label: "About" },
    { id: "skills", icon: <Lightbulb size={20} />, label: "Skills" },
    { id: "work", icon: <Grid size={20} />, label: "Projects" },
    { id: "contact", icon: <Mail size={20} />, label: "Contact" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/70 backdrop-blur-2xl border border-white/90 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.95)] px-4 py-2 flex items-center gap-1 sm:gap-2">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`flex flex-col items-center gap-1 px-3 sm:px-4 py-2 rounded-full cursor-pointer transition-all duration-250 ${
            activeSection === item.id
              ? "bg-[#4361ee] text-white shadow-[0_4px_16px_rgba(67,97,238,0.45)]"
              : "text-[#0d1b2a]/45 hover:bg-[#4361ee]/10 hover:text-[#4361ee]"
          }`}
        >
          {item.icon}
          <span className="hidden sm:block text-[10px] font-semibold tracking-wide">
            {item.label}
          </span>
        </a>
      ))}
      <a
        href="/assets/cv/CV_Joshua.pdf"
        download
        className="flex flex-col items-center gap-1 px-3 sm:px-4 py-2 rounded-full cursor-pointer transition-all duration-250 bg-[#4361ee]/10 text-[#4361ee] border border-[#4361ee]/20 hover:bg-[#4361ee] hover:text-white hover:shadow-[0_4px_16px_rgba(67,97,238,0.45)]"
      >
        <FileText size={20} />
        <span className="hidden sm:block text-[10px] font-semibold tracking-wide">
          Resume
        </span>
      </a>
      <a
        href="/journey"
        className="flex flex-col items-center gap-1 px-3 sm:px-4 py-2 rounded-full cursor-pointer transition-all duration-250 bg-gradient-to-r from-[#4361ee]/10 to-[#f72585]/10 text-[#4361ee] border border-[#4361ee]/30 hover:bg-[#4361ee] hover:text-white hover:shadow-[0_4px_16px_rgba(67,97,238,0.45)]"
      >
        <Compass size={20} className="animate-[spin_6s_linear_infinite]" />
        <span className="hidden sm:block text-[10px] font-semibold tracking-wide">
          Explore
        </span>
      </a>
    </nav>
  );
}
