"use client";
import { motion } from "framer-motion";
import { PenTool, PanelsTopLeft, Waypoints, Smartphone } from "lucide-react";

export default function StageShape() {
  const steps = [
    { icon: <PenTool size={20} />, label: "Figma Prototyping" },
    { icon: <Waypoints size={20} />, label: "User Flows" },
    { icon: <PanelsTopLeft size={20} />, label: "UI/UX Design" },
    { icon: <Smartphone size={20} />, label: "Responsive Layouts" }
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="stage-02" className="min-h-[120vh] py-40 flex items-center relative z-10 bg-white">
      <div className="max-w-4xl mx-auto px-6 w-full lg:pl-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1 relative h-[400px] w-full flex items-center justify-center">
            {/* Spotlight Glow */}
            <div className="absolute inset-0 bg-blue-100/50 blur-[100px] rounded-full" />
            
            {/* Wireframe Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[320px] aspect-[9/16] border border-gray-200 shadow-2xl rounded-3xl p-4 flex flex-col gap-4 relative bg-white/80 backdrop-blur-xl z-10"
            >
              {/* Header */}
              <motion.div 
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6, ease: "circOut" }}
                className="w-full h-8 bg-gray-100 rounded-lg origin-left"
              />
              {/* Hero Image */}
              <motion.div 
                initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6, ease: "circOut" }}
                className="w-full h-32 bg-gray-100 rounded-xl origin-top flex items-center justify-center"
              >
                <div className="w-8 h-8 rounded-full border-2 border-gray-300" />
              </motion.div>
              {/* Text lines */}
              <div className="flex flex-col gap-2 mt-2">
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }} className="w-3/4 h-3 bg-gray-100 rounded-full origin-left" />
                <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="w-1/2 h-3 bg-gray-100 rounded-full origin-left" />
              </div>
              {/* Cards */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.9 }} className="h-20 bg-gray-100 rounded-xl" />
                <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.0 }} className="h-20 bg-gray-100 rounded-xl" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
            className="order-1 md:order-2"
          >
            <motion.h2 variants={textVariants} className="text-4xl md:text-6xl font-black text-[#0d1b2a] mb-6 tracking-tight">
              Shape the Experience
            </motion.h2>
            <motion.p variants={textVariants} className="text-gray-500 text-lg leading-relaxed mb-8">
              Turning rough ideas into clear flows, thoughtful layouts, and responsive visual systems using tools like Figma. Structure dictates function.
            </motion.p>
            
            <motion.div variants={textVariants} className="grid grid-cols-2 gap-4">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 border border-gray-100 p-3 rounded-xl hover:shadow-md transition-shadow">
                  <div className="text-[#4361ee]">{step.icon}</div>
                  <span className="font-semibold text-sm text-gray-700">{step.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
