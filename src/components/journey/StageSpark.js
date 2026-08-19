"use client";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export default function StageSpark() {
  const notes = [
    { text: "Solve real problems", color: "bg-yellow-50", rotate: "-rotate-3" },
    { text: "User-centric design", color: "bg-blue-50", rotate: "rotate-2" },
    { text: "Scalable architecture", color: "bg-pink-50", rotate: "-rotate-1" },
    { text: "Clean code", color: "bg-green-50", rotate: "rotate-3" }
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="stage-01" className="min-h-[120vh] py-40 flex items-center relative z-10">
      <div className="max-w-4xl mx-auto px-6 w-full lg:pl-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div variants={textVariants} className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#4361ee]/10 text-[#4361ee] mb-6">
              <Lightbulb size={24} />
            </motion.div>
            <motion.h2 variants={textVariants} className="text-4xl md:text-6xl font-black text-[#0d1b2a] mb-6 tracking-tight">
              The Spark
            </motion.h2>
            <motion.p variants={textVariants} className="text-gray-500 text-lg leading-relaxed mb-4">
              I am a fresh graduate from Multimedia Nusantara University with a passion for software development and UI/UX design. 
            </motion.p>
            <motion.p variants={textVariants} className="text-gray-500 text-lg leading-relaxed">
              Every project starts with a spark—a problem worth solving. My journey begins by deeply understanding the core need, the audience, and how technology can bridge the gap.
            </motion.p>
          </motion.div>

          <div className="relative h-[300px] w-full max-w-[300px] mx-auto perspective-1000 mt-10 md:mt-0">
            {notes.map((note, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 40, rotateX: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15, type: "spring", bounce: 0.4 }}
                className={`absolute w-40 h-40 ${note.color} ${note.rotate} p-4 shadow-xl rounded-sm border border-black/5 flex items-center justify-center text-center`}
                style={{
                  top: `${(index % 2) * 50}%`,
                  left: `${Math.floor(index / 2) * 50}%`,
                  zIndex: index
                }}
              >
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-black/10 rounded-sm" />
                <p className="font-semibold text-gray-700 text-sm">{note.text}</p>
              </motion.div>
            ))}
            
            <div className="absolute inset-0 bg-[#4361ee]/20 blur-[80px] -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
