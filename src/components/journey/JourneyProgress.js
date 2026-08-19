"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function JourneyProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeCheckpoint, setActiveCheckpoint] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const checkpoints = [
        "stage-01",
        "stage-02",
        "stage-03",
        "stage-04",
        "stage-05",
        "stage-06"
      ];
      
      let current = 0;
      checkpoints.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = index + 1;
          }
        }
      });
      setActiveCheckpoint(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-4 lg:left-12 top-0 bottom-0 w-12 z-40 pointer-events-none hidden md:flex flex-col items-center justify-center">
      <div className="h-[60vh] w-[2px] bg-gray-200 rounded-full relative">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-[#4361ee] origin-top rounded-full"
          style={{ scaleY, height: "100%" }}
        />
        
        {/* Soft blue orb representing current progress */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-[#4361ee] rounded-full shadow-[0_0_15px_rgba(67,97,238,0.5)] z-10"
          style={{ top: useTransform(scaleY, [0, 1], ["0%", "100%"]) }}
        >
          <div className="absolute inset-1 bg-[#4361ee] rounded-full animate-pulse" />
        </motion.div>

        {/* Checkpoints */}
        {[1, 2, 3, 4, 5, 6].map((num, i) => {
          const isActive = activeCheckpoint >= num;
          const pos = (i / 5) * 100;
          return (
            <div 
              key={num} 
              className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-500 bg-white"
              style={{ top: `${pos}%` }}
            >
              <div className={`w-full h-full rounded-full border-2 transition-colors duration-300 ${isActive ? 'border-[#4361ee]' : 'border-gray-300'}`} />
              <div className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap">
                <span className={`text-[10px] font-bold transition-colors duration-300 ${isActive ? 'text-[#4361ee]' : 'text-gray-400'}`}>
                  0{num}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
