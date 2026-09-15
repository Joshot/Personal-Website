"use client";
import { motion } from "framer-motion";
import { Search, ExternalLink, Image as ImageIcon, Gamepad2, Eye, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({ project, onPreview }) {
  const isDesign = project.category === "design";
  const isGame = project.category === "game";
  const isFullstack = project.category === "fullstack";

  const getCategoryBadgeStyle = () => {
    if (isDesign) return "bg-pink-50 text-pink-700 border-pink-200";
    if (isGame) return "bg-purple-50 text-purple-700 border-purple-200";
    if (isFullstack) return "bg-emerald-50 text-emerald-700 border-emerald-200";
    return "bg-blue-50 text-blue-700 border-blue-200";
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#4361ee]/40 transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
      {/* Thumbnail Area */}
      <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden">
        {/* Category Label */}
        <div className="absolute top-3 left-3 z-20">
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border shadow-sm backdrop-blur-md ${getCategoryBadgeStyle()}`}>
            {project.categoryLabel}
          </span>
        </div>

        {/* Thumbnail Image */}
        {project.image.includes("mshots") ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.target.style.opacity = "0.2";
            }}
          />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            unoptimized={!project.image.startsWith("/")}
          />
        )}

        {/* Interactive Overlay on Desktop Hover */}
        <div className="absolute inset-0 bg-[#0d1b2a]/75 backdrop-blur-[2px] flex flex-col items-center justify-center gap-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 p-4">
          {isDesign ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="w-full max-w-[200px] bg-white text-[#0d1b2a] text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#4361ee] hover:text-white transition-all shadow-lg transform translate-y-3 group-hover:translate-y-0"
            >
              <i className="bx bxl-figma text-base text-pink-500 group-hover:text-white" /> View Figma Prototype
            </a>
          ) : (
            <>
              <button
                onClick={onPreview}
                className="w-full max-w-[200px] bg-[#4361ee] text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#3451db] transition-all shadow-lg transform translate-y-2 group-hover:translate-y-0"
              >
                {isGame ? <Gamepad2 size={15} /> : <Eye size={15} />}
                {isGame ? "Play Game (Preview)" : "Interactive Live View"}
              </button>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="w-full max-w-[200px] bg-white/10 hover:bg-white text-white hover:text-[#0d1b2a] border border-white/30 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm transform translate-y-3 group-hover:translate-y-0"
              >
                <ArrowUpRight size={15} /> Open In New Tab
              </a>
            </>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-bold text-base text-[#0d1b2a] group-hover:text-[#4361ee] transition-colors leading-snug">
              {project.title}
            </h3>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-[#4361ee] p-1 rounded-lg hover:bg-slate-100 transition-colors"
              title="Open Project"
            >
              <ArrowUpRight size={16} />
            </a>
          </div>

          <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 mb-4">
            {project.description}
          </p>
        </div>

        {/* Tech Tags & Mobile Direct Action */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
              >
                {tag.name}
              </span>
            ))}
          </div>

          {/* Mobile fast actions bar (visible on mobile where hover is not primary) */}
          <div className="flex sm:hidden items-center justify-between gap-2 pt-1">
            {!isDesign ? (
              <button
                onClick={onPreview}
                className="flex-1 bg-[#4361ee]/10 text-[#4361ee] text-[11px] font-bold py-1.5 px-3 rounded-lg flex items-center justify-center gap-1"
              >
                <Eye size={13} /> Live Preview
              </button>
            ) : null}
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-slate-100 text-slate-800 text-[11px] font-bold py-1.5 px-3 rounded-lg flex items-center justify-center gap-1"
            >
              <ExternalLink size={13} /> {isDesign ? "Figma Prototype" : "Visit Site"}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
