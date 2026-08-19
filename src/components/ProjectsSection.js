"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectPreviewModal from "./ProjectPreviewModal";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const [preview, setPreview] = useState(null);

  const filters = [
    { id: "all", label: "All" },
    { id: "web", label: "Web App" },
    { id: "game", label: "Games" },
    { id: "design", label: "UI/UX" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading subtitle="What I've Built" title="My Projects" />
        
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold cursor-pointer transition-all border-2 ${
                filter === f.id
                  ? "bg-[#4361ee] text-white border-[#4361ee]"
                  : "bg-white text-gray-500 border-[#4361ee]/20 hover:bg-[#4361ee] hover:text-white hover:border-[#4361ee]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

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
      </div>
      
      {/* Modal */}
      <ProjectPreviewModal
        isOpen={!!preview}
        onClose={() => setPreview(null)}
        url={preview?.link}
        title={preview?.title}
      />
    </section>
  );
}
