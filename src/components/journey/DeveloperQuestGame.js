"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Gamepad2, Trophy, Zap, Award, RotateCcw, 
  ArrowLeft, Code2, Database, Rocket, GraduationCap, 
  Sparkles, ChevronRight, Check, X, FileText, Mail
} from "lucide-react";
import Link from "next/link";

export default function DeveloperQuestGame() {
  const [xp, setXp] = useState(500);
  const [completedQuests, setCompletedQuests] = useState([]);
  const [activeQuest, setActiveQuest] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showToast, setShowToast] = useState(null);

  const quests = [
    {
      id: 1,
      level: "Level 1",
      title: "The Wireframe & UX Discovery",
      icon: <Sparkles className="text-[#4361ee]" size={18} />,
      points: 300,
      description: "A client needs an e-commerce dashboard. What is the optimal UX design strategy?",
      options: [
        { id: "A", text: "Start writing backend SQL code immediately without wireframes.", correct: false, note: "Risks major scope rework without aligned requirements." },
        { id: "B", text: "Prototype wireframes and design tokens in Figma, validating user flows first.", correct: true, note: "Correct! That's Joshua's exact Figma-to-code design engineering methodology." },
        { id: "C", text: "Copy an unverified template without responsive viewport testing.", correct: false, note: "Causes mobile layout breaks and inconsistent styling." },
      ]
    },
    {
      id: 2,
      level: "Level 2",
      title: "React & Modern Frontend Architecture",
      icon: <Code2 className="text-[#4361ee]" size={18} />,
      points: 400,
      description: "How does Joshua deliver lightning-fast page transitions and optimal bundle sizes in React & Next.js App Router?",
      options: [
        { id: "A", text: "By using server components by default, client components at leaf nodes, and optimized Tailwind CSS.", correct: true, note: "Spot on! Minimizes the JavaScript payload sent to the client browser." },
        { id: "B", text: "By importing 50 different heavyweight external CSS frameworks simultaneously.", correct: false, note: "Bloats bundle size and degrades initial load time." },
        { id: "C", text: "By disabling client-side routing completely.", correct: false, note: "Loses single-page application fluidity." },
      ]
    },
    {
      id: 3,
      level: "Level 3",
      title: "Database Indexing & Query Optimization",
      icon: <Database className="text-[#4361ee]" size={18} />,
      points: 400,
      description: "A high-traffic query on a 500k-row table is taking 450ms. How do we optimize it?",
      options: [
        { id: "A", text: "Restart the database server every 10 minutes.", correct: false, note: "Causes frequent downtime and connection drops." },
        { id: "B", text: "Add a composite B-Tree Index on the queried foreign keys and filter columns.", correct: true, note: "Excellent! Query execution drops from 450ms to under 5ms." },
        { id: "C", text: "Fetch all 500k rows to the frontend and filter using JavaScript.", correct: false, note: "Exhausts client browser memory and crashes the tab." },
      ]
    },
    {
      id: 4,
      level: "Level 4",
      title: "The 20+ Production Systems Launchpad",
      icon: <Rocket className="text-[#4361ee]" size={18} />,
      points: 500,
      description: "You are preparing to deploy 20+ full-stack applications. What verification steps ensure zero downtime?",
      options: [
        { id: "A", text: "Run automated linting, test production compilation, and deploy on resilient cloud nodes.", correct: true, note: "Mission Accomplished! All 20+ web applications deployed and running reliably." },
        { id: "B", text: "Push unverified code directly to main production on Friday night without testing.", correct: false, note: "Classic developer pitfall leading to broken production builds." },
      ]
    },
    {
      id: 5,
      level: "Boss Level",
      title: "UMN 2025 Graduation & Capstone Mastery",
      icon: <GraduationCap className="text-[#4361ee]" size={18} />,
      points: 600,
      description: "Universitas Multimedia Nusantara milestone reached: Is Joshua Hotama ready to engineer value on your engineering team?",
      options: [
        { id: "A", text: "Yes! Equipped with 20+ projects, solid CS foundation, full-stack tech stacks, and ready to contribute.", correct: true, note: "Quest Complete! Full Stack Engineer & UMN Bachelor Graduate Verified!" },
      ]
    }
  ];

  const triggerReward = (questId, points, title) => {
    if (!completedQuests.includes(questId)) {
      setCompletedQuests((prev) => [...prev, questId]);
      setXp((prev) => prev + points);
      setShowToast(`+${points} XP: Unlocked "${title}"!`);
      setTimeout(() => setShowToast(null), 3000);
    }
  };

  const handleSelectOption = (quest, opt) => {
    setSelectedAnswers((prev) => ({ ...prev, [quest.id]: opt.id }));
    if (opt.correct) {
      triggerReward(quest.id, quest.points, quest.title);
    }
  };

  const resetGame = () => {
    setXp(500);
    setCompletedQuests([]);
    setSelectedAnswers({});
    setActiveQuest(1);
    setShowToast("Quest reset to Level 1.");
    setTimeout(() => setShowToast(null), 2500);
  };

  const currentLevelLabel = xp >= 2400 
    ? "Senior Full Stack Architect" 
    : xp >= 1700 
    ? "Production Lead Engineer" 
    : xp >= 1100 
    ? "Full Stack Specialist" 
    : "Junior Software Engineer";

  return (
    <div className="w-full bg-[#0d1b2a] text-white py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden border-t border-b border-white/10">
      
      {/* Subtle Ambient Background - Clean & Non-Alay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#4361ee]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating XP Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] bg-[#4361ee] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 border border-white/20"
          >
            <Zap size={16} className="text-white" />
            <span>{showToast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between gap-3 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white bg-white/10 hover:bg-white/15 px-3.5 py-1.5 rounded-xl transition-all border border-white/10"
          >
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>

          <button
            onClick={resetGame}
            className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-xl transition-all border border-white/10"
            title="Reset quest progress"
          >
            <RotateCcw size={13} /> Reset Progress
          </button>
        </div>

        {/* Player HUD Dashboard */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#4361ee] flex items-center justify-center text-white shrink-0 shadow-md">
                <Gamepad2 size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#4361ee] uppercase tracking-wider">Player 1</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold border border-emerald-500/30">
                    Active Session
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Joshua Hotama</h3>
                <p className="text-white/60 text-xs font-medium">{currentLevelLabel}</p>
              </div>
            </div>

            {/* XP Counter */}
            <div className="text-left sm:text-right">
              <div className="inline-flex items-center gap-1.5 text-white font-mono font-bold text-lg sm:text-2xl">
                <Zap size={18} className="text-[#4361ee]" /> {xp.toLocaleString()} <span className="text-xs text-white/50 font-sans">/ 2,700 XP</span>
              </div>
              <p className="text-[11px] text-white/50 mt-0.5">Missions Cleared: {completedQuests.length} of {quests.length}</p>
            </div>
          </div>

          {/* XP Progress Bar - Solid Color, No Alay Gradient */}
          <div className="pt-4">
            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5">
              <motion.div
                initial={{ width: "18%" }}
                animate={{ width: `${Math.min(100, (xp / 2700) * 100)}%` }}
                transition={{ duration: 0.4 }}
                className="h-full bg-[#4361ee] rounded-full"
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-white/50 mt-2 font-mono">
              <span>UMN Academic CS Base</span>
              <span>20+ Projects</span>
              <span>Class of 2025 Graduate</span>
            </div>
          </div>
        </div>

        {/* Quest Level Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {quests.map((q) => {
            const isDone = completedQuests.includes(q.id);
            const isCurrent = activeQuest === q.id;
            return (
              <button
                key={q.id}
                onClick={() => setActiveQuest(q.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  isCurrent
                    ? "bg-[#4361ee] text-white border-[#4361ee] shadow-sm"
                    : isDone
                    ? "bg-emerald-950/40 text-emerald-300 border-emerald-500/40"
                    : "bg-slate-900 text-white/60 border-slate-800 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {isDone ? <Check size={14} className="text-emerald-400" /> : q.icon}
                <span>{q.level}</span>
              </button>
            );
          })}
        </div>

        {/* Active Quest Mission Card */}
        {quests
          .filter((q) => q.id === activeQuest)
          .map((quest) => {
            const isCompleted = completedQuests.includes(quest.id);
            const chosen = selectedAnswers[quest.id];

            return (
              <motion.div
                key={quest.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-8 shadow-xl mb-8"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="text-xs font-bold text-[#4361ee] uppercase tracking-wider">
                      Mission Briefing · {quest.level}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {quest.title}
                    </h2>
                  </div>
                  <span className="text-xs font-mono font-bold bg-[#4361ee]/20 text-white px-3 py-1 rounded-full border border-[#4361ee]/40 shrink-0">
                    +{quest.points} XP
                  </span>
                </div>

                <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6">
                  {quest.description}
                </p>

                {/* Multiple Choice Options */}
                <div className="space-y-3">
                  {quest.options.map((opt) => {
                    const isSelected = chosen === opt.id;

                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectOption(quest, opt)}
                        className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${
                          isSelected && opt.correct
                            ? "bg-emerald-950/40 border-emerald-500 text-white shadow-sm"
                            : isSelected && !opt.correct
                            ? "bg-rose-950/40 border-rose-500 text-white"
                            : "bg-slate-800/60 hover:bg-slate-800 border-slate-700 text-white/90"
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                          isSelected && opt.correct 
                            ? "bg-emerald-500 text-slate-950" 
                            : isSelected && !opt.correct
                            ? "bg-rose-500 text-white"
                            : "bg-slate-700 text-white"
                        }`}>
                          {isSelected && opt.correct ? (
                            <Check size={14} />
                          ) : isSelected && !opt.correct ? (
                            <X size={14} />
                          ) : (
                            opt.id
                          )}
                        </span>

                        <div className="flex-1">
                          <p className="font-medium leading-snug">{opt.text}</p>
                          {isSelected && (
                            <p className={`text-[11px] mt-1.5 font-semibold ${opt.correct ? "text-emerald-300" : "text-rose-300"}`}>
                              {opt.note}
                            </p>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Next Quest Transition Button */}
                {isCompleted && activeQuest < quests.length && (
                  <div className="mt-6 pt-5 border-t border-slate-800 flex justify-end">
                    <button
                      onClick={() => setActiveQuest((prev) => prev + 1)}
                      className="bg-[#4361ee] hover:bg-[#3451db] text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-all shadow-md"
                    >
                      <span>Next Level: {quests[activeQuest].title}</span>
                      <ChevronRight size={15} />
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}

        {/* Trophies & Milestones Unlocked - Clean & Solid */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-bold text-white/60 uppercase tracking-wider mb-4">
            <Trophy size={16} className="text-[#4361ee]" /> Career Milestones &amp; Badges
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className={`p-3.5 rounded-2xl border transition-all ${
              completedQuests.includes(1) 
                ? "bg-slate-800 border-slate-600 text-white" 
                : "bg-slate-900/50 border-slate-800 text-white/30"
            }`}>
              <Sparkles size={20} className={`mb-1.5 ${completedQuests.includes(1) ? "text-[#4361ee]" : "text-white/20"}`} />
              <p className="text-xs font-bold">Figma Prototyper</p>
              <p className="text-[10px] text-white/50">Level 1 cleared</p>
            </div>

            <div className={`p-3.5 rounded-2xl border transition-all ${
              completedQuests.includes(2) 
                ? "bg-slate-800 border-slate-600 text-white" 
                : "bg-slate-900/50 border-slate-800 text-white/30"
            }`}>
              <Code2 size={20} className={`mb-1.5 ${completedQuests.includes(2) ? "text-[#4361ee]" : "text-white/20"}`} />
              <p className="text-xs font-bold">React Architect</p>
              <p className="text-[10px] text-white/50">Level 2 cleared</p>
            </div>

            <div className={`p-3.5 rounded-2xl border transition-all ${
              completedQuests.includes(3) 
                ? "bg-slate-800 border-slate-600 text-white" 
                : "bg-slate-900/50 border-slate-800 text-white/30"
            }`}>
              <Database size={20} className={`mb-1.5 ${completedQuests.includes(3) ? "text-[#4361ee]" : "text-white/20"}`} />
              <p className="text-xs font-bold">SQL Optimizer</p>
              <p className="text-[10px] text-white/50">Level 3 cleared</p>
            </div>

            <div className={`p-3.5 rounded-2xl border transition-all ${
              completedQuests.includes(5) 
                ? "bg-slate-800 border-slate-600 text-white" 
                : "bg-slate-900/50 border-slate-800 text-white/30"
            }`}>
              <GraduationCap size={20} className={`mb-1.5 ${completedQuests.includes(5) ? "text-[#4361ee]" : "text-white/20"}`} />
              <p className="text-xs font-bold">UMN 2025 Graduate</p>
              <p className="text-[10px] text-white/50">Boss Level cleared</p>
            </div>
          </div>

          {/* Final Call to Action when all levels cleared - Clean solid palette */}
          {completedQuests.length === quests.length && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-6 rounded-2xl bg-slate-800 border border-slate-700 text-center"
            >
              <div className="w-12 h-12 bg-[#4361ee] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md">
                <Award size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-bold text-white">Full Stack Quest Completed!</h4>
              <p className="text-xs text-white/70 max-w-md mx-auto mt-1 mb-4">
                Joshua Hotama has demonstrated end-to-end engineering expertise across 20+ web systems, backend databases, and modern UI engineering.
              </p>
              <div className="flex flex-wrap justify-center gap-2.5">
                <a
                  href="/assets/cv/CV_Joshua.pdf"
                  download
                  className="bg-[#4361ee] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-[#3451db] transition-all inline-flex items-center gap-1.5 shadow-sm"
                >
                  <FileText size={15} /> Download Joshua&apos;s CV
                </a>
                <Link
                  href="/#contact"
                  className="bg-white text-slate-900 text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-slate-100 transition-all inline-flex items-center gap-1.5"
                >
                  <Mail size={15} /> Contact Joshua Directly
                </Link>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
}
