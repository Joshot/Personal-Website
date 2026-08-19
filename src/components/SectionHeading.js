"use client";
import { motion } from "framer-motion";

export default function SectionHeading({ subtitle, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="text-center mb-14"
    >
      <span className="bg-[#4361ee]/10 text-[#4361ee] text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-widest">
        {subtitle}
      </span>
      <h2 className="text-3xl lg:text-4xl font-black text-[#0d1b2a] mt-3 mb-3">
        {title}
      </h2>
      <div className="w-12 h-1 bg-[#4361ee] rounded-full mx-auto" />
    </motion.div>
  );
}
