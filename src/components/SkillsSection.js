"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/skills";
import { Code2, Palette, Users2, Search, CheckCircle2, Sparkles, Terminal } from "lucide-react";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const renderIcon = (iconClass) => {
    if (iconClass === "svg-nextjs") {
      return (
        <svg
          width="26"
          height="26"
          viewBox="0 0 128 128"
          className="w-6 h-6 text-[#0d1b2a] group-hover:text-white transition-colors shrink-0"
          fill="currentColor"
        >
          <circle cx="64" cy="64" r="64" />
          <path
            d="M96 99.789L44.571 33H33v62h11.758V47.478l46.223 59.845A63.66 63.66 0 0 0 96 99.789z"
            fill="#ffffff"
          />
          <path
            d="M83.429 33H95v43.218l-11.571-15.01V33z"
            fill="#ffffff"
          />
        </svg>
      );
    }
    if (iconClass === "svg-notion") {
      return (
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-[#0d1b2a] group-hover:text-white transition-colors shrink-0"
        >
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.234-.887.748-.933z" />
        </svg>
      );
    }
    return (
      <i
        className={`bx ${iconClass} text-2xl text-[#4361ee] group-hover:text-white transition-colors`}
      />
    );
  };

  const tabs = [
    { id: "all", label: "All Skills" },
    { id: "tech", label: "Tech & DB", icon: <Code2 size={14} /> },
    { id: "design", label: "UI/UX & CSS", icon: <Palette size={14} /> },
    { id: "soft", label: "Professional", icon: <Users2 size={14} /> },
  ];

  const allSkillsList = useMemo(() => {
    const list = [];
    skills.tech.forEach((s) =>
      list.push({ ...s, group: "tech", groupLabel: "Technical" })
    );
    skills.design.forEach((s) =>
      list.push({ ...s, group: "design", groupLabel: "Design & Styling" })
    );
    skills.soft.forEach((s) =>
      list.push({ ...s, group: "soft", groupLabel: "Core Competency" })
    );
    return list;
  }, []);

  const displayedSkills = useMemo(() => {
    return allSkillsList.filter((s) => {
      const matchesTab = activeTab === "all" || s.group === activeTab;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.groupLabel.toLowerCase().includes(q);
      return matchesTab && matchesSearch;
    });
  }, [allSkillsList, activeTab, searchQuery]);

  return (
    <section id="skills" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          subtitle="Technical Breadth"
          title="Skills & Technology Matrix"
        />

        <p className="text-center text-slate-500 text-xs sm:text-sm max-w-xl mx-auto -mt-6 mb-8 sm:mb-10">
          Core engineering capabilities developed across academic coursework at UMN, commercial systems, client projects, and full-stack deployments.
        </p>

        {/* Filter & Search Bar - Fully Responsive */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 sm:mb-8 bg-slate-50 p-2.5 sm:p-4 rounded-2xl border border-slate-200">
          {/* Tab buttons with scroll */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-[#4361ee] text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Search input */}
          <div className="relative w-full sm:w-64">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={14}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Next, React)..."
              className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs text-[#0d1b2a] focus:outline-none focus:border-[#4361ee] transition-all"
            />
          </div>
        </div>

        {/* Skill Matrix Grid */}
        <div className="min-h-[200px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3"
            >
              {displayedSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: Math.min(index * 0.02, 0.3) }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="group relative bg-slate-50 hover:bg-[#4361ee] border border-slate-200/90 hover:border-[#4361ee] rounded-2xl p-3 sm:p-4 text-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md flex flex-col items-center justify-center cursor-default min-h-[92px]"
                >
                  <div className="mb-1.5 flex items-center justify-center h-7">
                    {renderIcon(skill.icon)}
                  </div>
                  <span className="text-xs font-bold text-[#0d1b2a] group-hover:text-white transition-colors truncate max-w-full px-1">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-slate-400 group-hover:text-white/80 transition-colors mt-0.5 truncate max-w-full">
                    {skill.groupLabel}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tech Lead Context Banner */}
        <div className="mt-10 sm:mt-12 bg-[#0d1b2a] rounded-2xl p-5 sm:p-8 text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-[#4361ee] bg-[#4361ee]/20 px-3 py-1 rounded-full text-xs font-bold">
              <Terminal size={13} /> Full-Stack Versatility
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white pt-1">
              Frontend Craftsmanship Backed by Solid Database Architecture
            </h4>
            <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
              Joshua combines responsive frontend architecture (React, Next.js, Tailwind) with backend and database modeling (MySQL, Postgres, MongoDB) and Figma prototyping to deliver cohesive software.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#work"
              className="bg-[#4361ee] hover:bg-[#3451db] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-[#4361ee]/30 flex items-center gap-2"
            >
              See Stacks in Action
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
