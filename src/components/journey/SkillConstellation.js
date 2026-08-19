"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { skills as skillData } from "@/data/skills";

export default function SkillConstellation() {
  const [activeSkill, setActiveSkill] = useState(null);

  // Combine and format real skills
  const skillsList = useMemo(() => {
    const combined = [...skillData.tech.slice(0, 10), ...skillData.design.slice(0, 2)];
    // Add manual positions for aesthetics
    const positions = [
      { x: 50, y: 15 }, { x: 20, y: 30 }, { x: 80, y: 35 },
      { x: 30, y: 70 }, { x: 70, y: 65 }, { x: 50, y: 85 },
      { x: 10, y: 50 }, { x: 90, y: 55 }, { x: 40, y: 45 },
      { x: 60, y: 30 }, { x: 25, y: 85 }, { x: 75, y: 85 }
    ];
    
    return combined.slice(0, positions.length).map((skill, index) => ({
      id: `skill-${index}`,
      label: skill.name,
      icon: skill.icon,
      x: positions[index]?.x || 50,
      y: positions[index]?.y || 50,
    }));
  }, []);

  // Generate random lines between nodes for the constellation effect
  const lines = useMemo(() => {
    const arr = [];
    for(let i=0; i<skillsList.length; i++) {
      for(let j=i+1; j<skillsList.length; j++) {
        // Connect if close enough (distance formula)
        const dist = Math.sqrt(Math.pow(skillsList[i].x - skillsList[j].x, 2) + Math.pow(skillsList[i].y - skillsList[j].y, 2));
        if (dist < 40) {
          arr.push([i, j]);
        }
      }
    }
    return arr;
  }, [skillsList]);

  return (
    <section className="py-40 bg-white relative z-10">
      <div className="max-w-5xl mx-auto px-6 w-full lg:pl-20 text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-[#0d1b2a] mb-4 tracking-tight"
        >
          My Arsenal
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-gray-500 mb-16 text-lg"
        >
          The tools and technologies I use to build digital experiences.
        </motion.p>
        
        <div className="relative w-full max-w-[800px] mx-auto h-[500px] bg-gray-50/30 rounded-3xl overflow-hidden border border-gray-100 shadow-inner">
          {/* Spotlight Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(67,97,238,0.08)_0%,transparent_70%)] pointer-events-none" />

          {/* Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {lines.map((line, i) => {
              const p1 = skillsList[line[0]];
              const p2 = skillsList[line[1]];
              return (
                <motion.line
                  key={i}
                  x1={`${p1.x}%`} y1={`${p1.y}%`}
                  x2={`${p2.x}%`} y2={`${p2.y}%`}
                  stroke="#4361ee"
                  strokeWidth="1.5"
                  strokeOpacity="0.15"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 + Math.random() }}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {skillsList.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
              onMouseEnter={() => setActiveSkill(skill.id)}
              onMouseLeave={() => setActiveSkill(null)}
              onClick={() => setActiveSkill(skill.id === activeSkill ? null : skill.id)}
            >
              <div className="relative cursor-pointer group p-2">
                <div className="w-8 h-8 bg-white border border-[#4361ee]/20 rounded-full z-10 relative flex items-center justify-center group-hover:border-[#4361ee] group-hover:scale-125 transition-all shadow-md">
                  <div className="w-2 h-2 bg-[#4361ee] rounded-full group-hover:scale-150 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-[#4361ee]/20 blur-md rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <AnimatePresence>
                  {activeSkill === skill.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-10 left-1/2 -translate-x-1/2 min-w-[120px] bg-[#0d1b2a]/95 backdrop-blur-md text-white p-3 rounded-xl shadow-2xl z-20 pointer-events-none border border-white/10"
                    >
                      <p className="font-bold text-sm text-center tracking-wide">{skill.label}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
