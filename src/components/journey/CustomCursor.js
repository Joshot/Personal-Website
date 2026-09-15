"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    // Disable if reduced motion is preferred
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const moveCursor = (e) => {
      setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setText(target.getAttribute("data-cursor"));
      } else {
        setText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div 
        className="relative flex items-center justify-center rounded-full border border-[#4361ee]/50 bg-white/20 backdrop-blur-sm"
        animate={{
          width: text ? 80 : 32,
          height: text ? 80 : 32,
          backgroundColor: text ? "rgba(67, 97, 238, 0.9)" : "rgba(255, 255, 255, 0.2)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {text && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white text-[10px] font-bold text-center px-2 leading-tight"
          >
            {text}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
