"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function StageProjects() {
  const showcaseProjects = projects.slice(0, 5); // Limit to top 5 for the showcase
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % showcaseProjects.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + showcaseProjects.length) % showcaseProjects.length);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="stage-05" className="min-h-[120vh] py-40 flex flex-col justify-center relative z-10 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 w-full lg:pl-20">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="text-center mb-24"
        >
          <motion.span variants={textVariants} className="inline-block bg-[#4361ee]/10 text-[#4361ee] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            The Result
          </motion.span>
          <motion.h2 variants={textVariants} className="text-4xl md:text-6xl font-black text-[#0d1b2a] mb-6 tracking-tight">
            Explore the Work
          </motion.h2>
          <motion.p variants={textVariants} className="text-gray-500 text-lg max-w-2xl mx-auto">
            A selection of 20+ projects across web applications, dashboards, full-stack systems, games, and UI/UX designs.
          </motion.p>
        </motion.div>

        <div className="relative w-full max-w-3xl mx-auto h-[450px] flex items-center justify-center perspective-1000">
          <AnimatePresence mode="popLayout">
            {showcaseProjects.map((project, i) => {
              // Calculate offset distance from current active
              let offset = i - currentIndex;
              if (offset < -2) offset += showcaseProjects.length;
              if (offset > 2) offset -= showcaseProjects.length;

              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, x: offset * 50, z: -Math.abs(offset) * 100 }}
                  animate={{ 
                    opacity: isActive ? 1 : 1 - Math.abs(offset) * 0.3, 
                    scale: isActive ? 1 : 1 - Math.abs(offset) * 0.1,
                    x: offset * 40,
                    z: -Math.abs(offset) * 100,
                    zIndex: 50 - Math.abs(offset)
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute w-[300px] sm:w-[400px] h-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col group"
                >
                  <div className="h-44 relative bg-gray-100 flex-shrink-0 overflow-hidden">
                    {/* Add Spotlight on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    
                    {project.image.includes('mshots') ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    ) : (
                      <Image src={project.image} alt={project.title} fill className="object-cover transform group-hover:scale-105 transition-transform duration-700" unoptimized={!project.image.startsWith('/')} />
                    )}
                    <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full z-20">
                      {project.categoryLabel}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg text-[#0d1b2a] mb-2 truncate">{project.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-4">{project.description}</p>
                    
                    {isActive && (
                      <div className="mt-auto flex justify-between items-center">
                        <a 
                          href={project.link} target="_blank" rel="noreferrer"
                          data-cursor="Open Project"
                          className="bg-[#4361ee] text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#0d1b2a] transition-colors shadow-lg"
                        >
                          <ExternalLink size={14} /> View Live
                        </a>
                      </div>
                    )}
                  </div>
                  {/* Click area to bring forward if not active */}
                  {!isActive && (
                    <div 
                      className="absolute inset-0 cursor-pointer z-30" 
                      onClick={() => setCurrentIndex(i)}
                      data-cursor="Bring Forward"
                    />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-gray-500 hover:text-[#4361ee] hover:border-[#4361ee] transition-all hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg flex items-center justify-center text-gray-500 hover:text-[#4361ee] hover:border-[#4361ee] transition-all hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="mt-28 text-center">
          <a href="/#work" className="inline-flex items-center gap-2 text-[#4361ee] font-bold text-sm hover:underline" data-cursor="Go Home">
            View All Projects <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
