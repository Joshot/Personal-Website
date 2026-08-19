"use client";
import { motion } from "framer-motion";
import { Search, ExternalLink, Image as ImageIcon, Gamepad2 } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({ project, onPreview }) {
  const isDesign = project.category === "design";
  const isGame = project.category === "game";
  
  const getIcon = () => {
    if (isDesign) return <i className="bx bxl-figma absolute z-0 text-gray-300 text-5xl opacity-30" />;
    if (isGame) return <Gamepad2 className="absolute z-0 text-gray-300 w-12 h-12 opacity-30" />;
    return <ImageIcon className="absolute z-0 text-gray-300 w-12 h-12 opacity-30" />;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full ${
        isDesign ? "bg-gray-50" : "bg-white"
      }`}
    >
      <div className="relative h-52 overflow-hidden bg-gray-100 flex items-center justify-center">
        {getIcon()}
        
        <span className={`absolute top-3 left-3 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full z-20 shadow-sm ${isDesign ? 'bg-[#f72585]' : 'bg-[#4361ee]/90'}`}>
          {project.categoryLabel}
        </span>
        
        {project.image.includes('mshots') ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-10"
            onError={(e) => (e.target.style.opacity = '0')}
          />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 relative z-10"
            unoptimized={!project.image.startsWith('/')}
          />
        )}
        
        <div className={`absolute inset-0 bg-[#0d1b2a]/70 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 opacity-0 transition-opacity duration-300 z-30 group-hover:opacity-100`}>
          {isDesign ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-[#0d1b2a] text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 hover:bg-[#f72585] hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 shadow-lg"
            >
              <i className="bx bxl-figma text-base" /> View Prototype
            </a>
          ) : (
            <>
              <button
                onClick={onPreview}
                className="bg-[#4361ee] text-white text-xs font-bold px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-white hover:text-[#4361ee] transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg"
              >
                {isGame ? <Gamepad2 size={16} /> : <Search size={16} />} 
                {isGame ? "Play Game" : "Live Preview"}
              </button>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="bg-transparent border border-white/70 text-white text-xs font-bold px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-white hover:text-[#0d1b2a] transition-all transform translate-y-4 group-hover:translate-y-0 delay-75"
              >
                <ExternalLink size={16} /> Visit Site
              </a>
            </>
          )}
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-bold text-base text-[#0d1b2a] mb-1">{project.title}</h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag.name}
              className={`${tag.bg} ${tag.color} text-[10px] font-bold px-3 py-1 rounded-full border ${tag.border}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
