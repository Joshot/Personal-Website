"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Grid, Send, Compass } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const [text, setText] = useState("");
  const words = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Fresh Graduate'];

  useEffect(() => {
    let wi = 0, ci = 0, deleting = false;
    let timer;
    const typeLoop = () => {
      const word = words[wi];
      if (!deleting) {
        setText(word.substring(0, ++ci));
        if (ci === word.length) { deleting = true; timer = setTimeout(typeLoop, 1500); return; }
      } else {
        setText(word.substring(0, --ci));
        if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
      }
      timer = setTimeout(typeLoop, deleting ? 60 : 100);
    };
    timer = setTimeout(typeLoop, 100);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="home" className="min-h-screen bg-[#0d1b2a] flex items-center pt-[60px] relative overflow-hidden">
      {/* Animated Grid Background (21st.dev style) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#4361ee]/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-80px] left-[-80px] w-[350px] h-[350px] bg-indigo-900/30 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-center">
          
          {/* Left Text */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-7">
              <span className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 text-green-400 text-[11px] font-semibold px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for Hire
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-black text-white leading-[1.05] mb-6">
              <span className="block text-white/40 text-lg lg:text-xl font-semibold tracking-wide mb-2">Hi there, I'm</span>
              <span className="block text-5xl lg:text-7xl text-white">Joshua</span>
              <span className="block text-5xl lg:text-7xl text-[#4361ee]">Hotama.</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#4361ee]/60" />
              <p className="text-white/60 text-sm lg:text-base font-medium">
                <span className="border-r-2 border-[#4361ee] pr-1">{text}</span>
              </p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-white/35 text-sm leading-[1.9] mb-9 max-w-[420px]">
              Software developer who turns ideas into functional, well-crafted web applications.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-12">
              <a href="#work" className="bg-[#4361ee] text-white px-6 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 shadow-lg shadow-[#4361ee]/25 hover:bg-[#4361ee]/90 hover:-translate-y-0.5 transition-all">
                <Grid size={16} /> See My Work
              </a>
              <a href="#contact" className="text-white/70 px-6 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 border border-white/10 hover:border-white/30 hover:text-white hover:-translate-y-0.5 transition-all">
                <Send size={16} /> Get in Touch
              </a>
              <Link href="/journey" className="group relative inline-flex h-[42px] items-center justify-center overflow-hidden rounded-xl bg-[#4361ee] px-6 font-bold text-white shadow-2xl shadow-[#4361ee]/40 transition-all hover:-translate-y-1 hover:shadow-[#f72585]/50 border border-white/20">
                <span className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                  <div className="relative h-full w-8 bg-white/30" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f72585] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
                <span className="relative flex items-center gap-2">
                  <Compass className="transition-transform duration-500 group-hover:rotate-45 text-white" size={16} /> 
                  <span className="text-white transition-all">Explore My Build Journey</span>
                </span>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-white/0 via-white/90 to-white/0 transition-opacity duration-500 opacity-40 group-hover:opacity-100" />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-8">
              <div>
                <p className="text-3xl font-black text-white">20+</p>
                <p className="text-white/30 text-[11px] mt-0.5 uppercase tracking-widest">Projects</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="text-3xl font-black text-white">10+</p>
                <p className="text-white/30 text-[11px] mt-0.5 uppercase tracking-widest">Tech Stacks</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="text-3xl font-black text-white">1+</p>
                <p className="text-white/30 text-[11px] mt-0.5 uppercase tracking-widest">Years Exp</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end perspective-1000"
          >
            <motion.div 
              whileHover={{ rotateY: -5, rotateX: 5, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              <div className="relative w-[260px] lg:w-[340px]">
                <div className="absolute -inset-3 bg-[#4361ee]/15 rounded-[2rem] blur-2xl" />
                <div className="relative rounded-[1.75rem] overflow-hidden shadow-2xl shadow-black/60" style={{ aspectRatio: '3/4' }}>
                  <img src="/assets/img/pofil.jpg" alt="Joshua Hotama" className="w-full h-full object-cover object-bottom" />
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0d1b2a]/30 to-transparent" />
                </div>
                
                {/* Floating University */}
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-5 -right-5 bg-[#0d1b2a]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#4361ee]/20 flex items-center justify-center">
                      <i className='bx bxs-graduation text-[#4361ee] text-xs' />
                    </div>
                    <div>
                      <p className="text-white text-[11px] font-bold leading-none">Multimedia Nusantara</p>
                      <p className="text-white/35 text-[10px] mt-0.5">Graduated in 2025</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Status */}
                <motion.div 
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-5 -left-5 bg-[#0d1b2a]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-white text-[11px] font-bold">Open to collaborations</p>
                  </div>
                  <p className="text-white/35 text-[10px] mt-0.5 pl-4">Project · Freelance</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
      
      {/* Social Desktop */}
      <div className="hidden lg:flex flex-col gap-2.5 absolute left-5 top-1/2 -translate-y-1/2 z-10">
        <a href="https://www.facebook.com/joshua.hotama/" target="_blank" rel="noreferrer" className="w-8 h-8 bg-white/5 border border-white/8 rounded-full flex items-center justify-center text-white/30 text-xs hover:bg-[#4361ee] hover:text-white hover:border-[#4361ee] transition-all"><i className="bi bi-facebook" /></a>
        <a href="https://www.linkedin.com/in/joshuahotama/" target="_blank" rel="noreferrer" className="w-8 h-8 bg-white/5 border border-white/8 rounded-full flex items-center justify-center text-white/30 text-xs hover:bg-[#4361ee] hover:text-white hover:border-[#4361ee] transition-all"><i className="bi bi-linkedin" /></a>
        <a href="https://www.instagram.com/joshuahotama/" target="_blank" rel="noreferrer" className="w-8 h-8 bg-white/5 border border-white/8 rounded-full flex items-center justify-center text-white/30 text-xs hover:bg-[#4361ee] hover:text-white hover:border-[#4361ee] transition-all"><i className="bi bi-instagram" /></a>
        <a href="https://github.com/Joshot" target="_blank" rel="noreferrer" className="w-8 h-8 bg-white/5 border border-white/8 rounded-full flex items-center justify-center text-white/30 text-xs hover:bg-[#4361ee] hover:text-white hover:border-[#4361ee] transition-all"><i className="bi bi-github" /></a>
      </div>

    </section>
  );
}
