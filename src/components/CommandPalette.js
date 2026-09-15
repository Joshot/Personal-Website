"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ExternalLink, Download, FileText, ArrowRight, Grid, User, Lightbulb, Mail, Compass } from "lucide-react";
import { projects } from "@/data/projects";

export default function CommandPalette({ isOpen, onClose, onSelectProject }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(true); // toggle
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.name.toLowerCase().includes(query.toLowerCase()))
  );

  const quickActions = [
    { label: "Email: joshuahh554@gmail.com", icon: <Mail size={15} />, href: "mailto:joshuahh554@gmail.com" },
    { label: "Download Resume (CV)", icon: <Download size={15} />, action: () => window.open("/assets/cv/CV_Joshua.pdf", "_blank") },
    { label: "View Portfolio PDF", icon: <FileText size={15} />, action: () => window.open("/assets/portofolio/PORTOFOLIO JOSSS.pdf", "_blank") },
    { label: "Play Career Quest Game", icon: <Compass size={15} />, href: "/journey" },
    { label: "GitHub Profile", icon: <ExternalLink size={15} />, href: "https://github.com/Joshot" },
    { label: "LinkedIn Profile", icon: <ExternalLink size={15} />, href: "https://www.linkedin.com/in/joshuahotama/" },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0d1b2a]/70 backdrop-blur-md"
        />

        {/* Dialog Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col max-h-[80vh]"
        >
          {/* Search Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
            <Search className="text-[#4361ee] shrink-0" size={20} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tech stacks, links (e.g. Next.js, Figma, Laravel)..."
              autoFocus
              className="w-full text-sm sm:text-base text-[#0d1b2a] placeholder:text-slate-400 focus:outline-none bg-transparent"
            />
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors text-xs flex items-center gap-1 font-mono"
            >
              <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] text-slate-600">ESC</kbd>
            </button>
          </div>

          <div className="overflow-y-auto p-4 divide-y divide-slate-100">
            {/* Quick Actions */}
            {!query && (
              <div className="pb-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">Quick Commands</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {quickActions.map((action, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (action.action) action.action();
                        if (action.href) window.open(action.href, action.href.startsWith("http") ? "_blank" : "_self");
                        onClose();
                      }}
                      className="flex items-center justify-between px-3 py-2 text-left rounded-xl hover:bg-[#4361ee]/10 text-slate-700 hover:text-[#4361ee] transition-all text-xs font-semibold group"
                    >
                      <span className="flex items-center gap-2">
                        {action.icon}
                        {action.label}
                      </span>
                      <ArrowRight size={13} className="text-slate-300 group-hover:text-[#4361ee] group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Projects List */}
            <div className={query ? "" : "pt-4"}>
              <div className="flex items-center justify-between mb-2 px-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Projects ({filteredProjects.length})
                </p>
              </div>

              {filteredProjects.length === 0 ? (
                <div className="text-center py-8 text-slate-400 text-xs">
                  No projects matching &ldquo;{query}&rdquo;
                </div>
              ) : (
                <div className="space-y-1.5 max-h-[340px] overflow-y-auto pr-1">
                  {filteredProjects.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => {
                        if (onSelectProject) onSelectProject(project);
                        onClose();
                      }}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 cursor-pointer transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#4361ee]/10 text-[#4361ee] flex items-center justify-center shrink-0 font-bold text-xs">
                          {project.title.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#0d1b2a] group-hover:text-[#4361ee] transition-colors flex items-center gap-2">
                            {project.title}
                            <span className="text-[10px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                              {project.categoryLabel}
                            </span>
                          </p>
                          <p className="text-[11px] text-slate-500 line-clamp-1">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                          {project.tags[0]?.name}
                        </span>
                        <ArrowRight size={14} className="text-slate-300 group-hover:text-[#4361ee] group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Footer info */}
          <div className="bg-slate-50 px-5 py-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span>Tip: Press <kbd className="px-1 py-0.5 bg-white border border-slate-200 rounded font-mono text-[10px]">⌘K</kbd> anywhere to search</span>
            <span>Joshua Hotama Portfolio</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
