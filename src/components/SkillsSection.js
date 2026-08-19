"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/skills";
import { Code, Palette, Users } from "lucide-react";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("tech");

  const renderIcon = (iconClass) => {
    if (iconClass === "svg-nextjs") {
      return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-3xl text-[#4361ee] mb-1 relative z-10 transition-colors group-hover:text-white" style={{ fontSize: "28px" }}>
          <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.049-.106.005-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C21.766 5.078 18.466 1.222 14.01.195A13.413 13.413 0 0 0 12.25.01C12.014.005 11.763 0 11.572 0z"/>
        </svg>
      );
    }
    if (iconClass === "svg-notion") {
      return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-3xl text-[#4361ee] mb-1 relative z-10 transition-colors group-hover:text-white">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.234-.887.748-.933z"/>
        </svg>
      );
    }
    return <i className={`bx ${iconClass} text-3xl text-[#4361ee] mb-1 relative z-10 transition-colors group-hover:text-white`} />;
  };

  const tabs = [
    { id: "tech", label: "Technical", icon: <Code size={16} /> },
    { id: "design", label: "Design", icon: <Palette size={16} /> },
    { id: "soft", label: "Soft Skills", icon: <Users size={16} /> }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading subtitle="What I Know" title="My Skills" />
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mb-8 -mt-6"
        >
          The tools I enjoy building with.
        </motion.p>

        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold cursor-pointer transition-all border-2 ${
                activeTab === tab.id
                  ? "bg-[#4361ee] text-white border-[#4361ee]"
                  : "bg-white text-gray-500 border-[#4361ee]/20 hover:bg-[#4361ee] hover:text-white hover:border-[#4361ee]"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <div className="min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
            >
              {skills[activeTab].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative bg-white rounded-2xl p-3 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1 overflow-hidden flex flex-col items-center justify-center cursor-default"
                >
                  <div className="absolute inset-0 bg-[#4361ee] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-0" />
                  {renderIcon(skill.icon)}
                  <span className="text-[10px] font-bold text-[#0d1b2a] uppercase tracking-wide relative z-10 transition-colors group-hover:text-white">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
