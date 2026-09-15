"use client";
import { motion } from "framer-motion";
import { Code2, Braces, Layout, FileJson } from "lucide-react";

export default function StageBuild() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="stage-03" className="min-h-[120vh] py-40 flex items-center relative z-10 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-6 w-full lg:pl-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div variants={textVariants} className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#f72585]/10 text-[#f72585] mb-6">
              <Code2 size={24} />
            </motion.div>
            <motion.h2 variants={textVariants} className="text-4xl md:text-6xl font-black text-[#0d1b2a] mb-6 tracking-tight">
              Build the Interface
            </motion.h2>
            <motion.p variants={textVariants} className="text-gray-500 text-lg leading-relaxed mb-8">
              Transforming designs into responsive, interactive, and polished web experiences using modern web technologies like Next.js, React, Tailwind CSS, and Vanilla JavaScript.
            </motion.p>
            
            <motion.div variants={textVariants} className="flex gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg text-[#4361ee] hover:-translate-y-1 transition-transform"><Braces size={20} /></div>
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg text-[#4361ee] hover:-translate-y-1 transition-transform"><Layout size={20} /></div>
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg text-[#4361ee] hover:-translate-y-1 transition-transform"><FileJson size={20} /></div>
            </motion.div>
          </motion.div>

          <div className="relative w-full h-[350px] perspective-1000 z-10">
            {/* Mockup Container */}
            <motion.div 
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="relative w-full h-full rounded-2xl border border-slate-200 shadow-xl overflow-hidden bg-white flex flex-col"
            >
              {/* Browser chrome */}
              <div className="h-10 border-b border-gray-100 bg-gray-50 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="ml-4 h-5 flex-1 bg-white rounded-md border border-gray-200" />
                </div>
                
                {/* UI Assemble */}
                <div className="p-6 flex-1 flex flex-col gap-6 relative">
                  <div className="flex items-center justify-between">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="w-20 h-6 bg-gray-800 rounded-md" />
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="flex gap-3">
                      <div className="w-12 h-4 bg-gray-200 rounded-sm" />
                      <div className="w-12 h-4 bg-gray-200 rounded-sm" />
                    </motion.div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <motion.div 
                      initial={{ opacity: 0, filter: "blur(10px)", y: 15 }} 
                      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ delay: 0.8, duration: 0.8 }} 
                      className="w-3/4 h-8 bg-[#4361ee] mx-auto rounded-lg mb-3 shadow-[0_0_20px_rgba(67,97,238,0.3)]" 
                    />
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.0 }} className="w-1/2 h-3 bg-gray-300 mx-auto rounded-full" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 mt-auto">
                    {[1, 2, 3].map((i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.9, y: 10 }} 
                        whileInView={{ opacity: 1, scale: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ delay: 1.0 + (i * 0.15) }} 
                        className="h-24 bg-gray-50 rounded-lg border border-gray-100 p-2 flex flex-col justify-end"
                      >
                        <div className="w-full h-2 bg-gray-200 rounded-full mb-1" />
                        <div className="w-2/3 h-2 bg-gray-200 rounded-full" />
                      </motion.div>
                    ))}
                  </div>
                </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
