"use client";
import { motion } from "framer-motion";
import { Database, KeyRound, Network, Server, Cloud } from "lucide-react";

export default function StageLogic() {
  const nodes = [
    { icon: <Database size={20} />, label: "Database", x: "10%", y: "20%" },
    { icon: <KeyRound size={20} />, label: "Auth", x: "80%", y: "30%" },
    { icon: <Server size={20} />, label: "API", x: "20%", y: "80%" },
    { icon: <Cloud size={20} />, label: "Deploy", x: "70%", y: "75%" },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="stage-04" className="min-h-[120vh] py-40 flex items-center relative z-10 bg-[#0d1b2a]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4361ee]/10 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-4xl mx-auto px-6 w-full lg:pl-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1 relative w-full h-[400px] border border-white/10 rounded-3xl bg-black/20 overflow-hidden shadow-2xl">
            {/* Spotlight Glow */}
            <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

            {/* SVG connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {nodes.map((node, i) => (
                <motion.line
                  key={`line-${i}`}
                  x1="50%" y1="50%"
                  x2={node.x} y2={node.y}
                  stroke="#4361ee"
                  strokeWidth="2"
                  strokeOpacity="0.4"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                />
              ))}
              {/* Animated data packets */}
              {nodes.map((node, i) => (
                <motion.circle
                  key={`dot-${i}`}
                  r="3"
                  fill="#f72585"
                  initial={{ cx: "50%", cy: "50%", opacity: 0 }}
                  animate={{ cx: [null, node.x, "50%"], cy: [null, node.y, "50%"], opacity: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                />
              ))}
            </svg>

            {/* Central Node */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#4361ee] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(67,97,238,0.6)] z-10"
            >
              <Network className="text-white" size={28} />
            </motion.div>

            {/* Outer Nodes */}
            {nodes.map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
                style={{ left: node.x, top: node.y }}
              >
                <div className="w-10 h-10 bg-[#0d1b2a] border border-white/20 rounded-full flex items-center justify-center text-[#4361ee] shadow-lg">
                  {node.icon}
                </div>
                <span className="text-white/60 text-[10px] font-bold tracking-wider uppercase">{node.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.2 }}
            className="order-1 md:order-2 text-white"
          >
            <motion.div variants={textVariants} className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 text-[#4361ee] mb-6 border border-white/10">
              <Network size={24} />
            </motion.div>
            <motion.h2 variants={textVariants} className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Connect the Logic
            </motion.h2>
            <motion.p variants={textVariants} className="text-white/60 text-lg leading-relaxed mb-8">
              Bringing interfaces to life with robust data, authentication, RESTful APIs, and scalable backend services. Because a beautiful UI needs a solid foundation.
            </motion.p>

            <motion.div variants={textVariants} className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors">
              <h4 className="font-bold text-sm text-[#4361ee] mb-2 flex items-center gap-2">
                <Database size={16} /> Supabase Integration
              </h4>
              <p className="text-white/50 text-xs leading-relaxed">
                Experience with backend integration for authentication, realtime data, and scalable storage tailored for modern web applications.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
