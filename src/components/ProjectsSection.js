"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectPreviewModal from "./ProjectPreviewModal";
import { projects } from "@/data/projects";
import { Search, LayoutGrid, List, Sparkles, ExternalLink, Eye, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'
  const [preview, setPreview] = useState(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Applications" },
    { id: "fullstack", label: "Full Stack Systems" },
    { id: "game", label: "Games & Simulations" },
    { id: "design", label: "UI/UX Prototypes" },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = filter === "all" || p.category === filter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.tags.some((t) => t.name.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchQuery]);

  const getCategoryCount = (catId) => {
    if (catId === "all") return projects.length;
    return projects.filter((p) => p.category === catId).length;
  };

  return (
    <section id="work" className="py-20 sm:py-24 bg-slate-50/70 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading subtitle="Production Portfolio" title="Featured Systems & Projects" />

        {/* Section context description */}
        <p className="text-center text-slate-600 text-sm max-w-xl mx-auto -mt-6 mb-10">
          A showcase of 20+ web applications, backend systems, interactive games, and Figma prototypes built with modern engineering standards.
        </p>

        {/* Interactive Controls Bar: Search, Category Filters, View Switcher */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by project name, tech (e.g. Next.js, MySQL, AI)..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-[#0d1b2a] focus:outline-none focus:border-[#4361ee] focus:bg-white transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center justify-between md:justify-end gap-3">
              <span className="text-xs text-slate-500 font-medium">
                Showing <strong className="text-[#0d1b2a]">{filteredProjects.length}</strong> of {projects.length}
              </span>
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/60">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                    viewMode === "grid"
                      ? "bg-white text-[#4361ee] shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                  title="Grid View"
                >
                  <LayoutGrid size={15} />
                  <span className="hidden sm:inline">Grid</span>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                    viewMode === "list"
                      ? "bg-white text-[#4361ee] shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                  title="Engineering Table View"
                >
                  <List size={15} />
                  <span className="hidden sm:inline">Architecture List</span>
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1">
            {categories.map((cat) => {
              const isActive = filter === cat.id;
              const count = getCategoryCount(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer border ${
                    isActive
                      ? "bg-[#4361ee] text-white border-[#4361ee] shadow-sm shadow-[#4361ee]/25"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-200/70 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center my-6">
            <p className="text-slate-800 font-bold text-base mb-1">No matching projects found</p>
            <p className="text-slate-500 text-xs mb-4">Try clearing the search query or selecting another category.</p>
            <button
              onClick={() => {
                setFilter("all");
                setSearchQuery("");
              }}
              className="bg-[#4361ee] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-[#3451db] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* View Mode: GRID */}
        {viewMode === "grid" ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onPreview={() => setPreview(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* View Mode: ARCHITECTURE LIST (Senior Tech Lead favored format) */
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold">
                    <th className="py-3.5 px-5">Project</th>
                    <th className="py-3.5 px-4">Category</th>
                    <th className="py-3.5 px-4">Core Stacks</th>
                    <th className="py-3.5 px-4 hidden md:table-cell">Architectural Highlights</th>
                    <th className="py-3.5 px-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-slate-50/80 transition-colors group">
                      <td className="py-3.5 px-5 font-bold text-[#0d1b2a]">
                        <div className="flex items-center gap-2.5">
                          <div className="w-2 h-2 rounded-full bg-[#4361ee]" />
                          <span className="group-hover:text-[#4361ee] transition-colors">{project.title}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          {project.categoryLabel}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex flex-wrap gap-1">
                          {project.tags.map((t) => (
                            <span key={t.name} className="text-[10px] bg-blue-50 text-[#4361ee] px-2 py-0.5 rounded font-mono font-medium">
                              {t.name}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 max-w-xs truncate hidden md:table-cell">
                        {project.description}
                      </td>
                      <td className="py-3.5 px-5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {project.category !== "design" && (
                            <button
                              onClick={() => setPreview(project)}
                              className="text-[#4361ee] hover:bg-[#4361ee]/10 font-bold px-2.5 py-1 rounded-lg text-xs transition-colors flex items-center gap-1"
                            >
                              <Eye size={13} /> Preview
                            </button>
                          )}
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-700 hover:text-[#4361ee] font-bold px-2.5 py-1 rounded-lg text-xs transition-colors flex items-center gap-1 bg-slate-100 hover:bg-slate-200"
                          >
                            <ArrowUpRight size={13} /> Visit
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Modal */}
      <ProjectPreviewModal
        isOpen={!!preview}
        onClose={() => setPreview(null)}
        url={preview?.link}
        title={preview?.title}
      />
    </section>
  );
}
