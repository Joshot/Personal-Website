"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Loader2, Monitor, Tablet, Smartphone, RotateCw } from "lucide-react";

function ModalDialog({ onClose, url, title }) {
  const [loadedUrl, setLoadedUrl] = useState("");
  const [viewport, setViewport] = useState("desktop"); // 'desktop' | 'tablet' | 'mobile'
  const [key, setKey] = useState(0);

  const loading = Boolean(url && loadedUrl !== url);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleRefresh = () => {
    setLoadedUrl("");
    setKey((prev) => prev + 1);
  };

  const getViewportClasses = () => {
    if (viewport === "mobile") {
      return "w-full max-w-[375px] h-full rounded-2xl border-4 border-slate-700 shadow-2xl overflow-hidden";
    }
    if (viewport === "tablet") {
      return "w-full max-w-[720px] h-full rounded-2xl border-4 border-slate-700 shadow-xl overflow-hidden";
    }
    return "w-full h-full rounded-lg overflow-hidden";
  };

  return (
    <motion.div
      initial={{ scale: 0.96, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.96, opacity: 0 }}
      transition={{ type: "spring", damping: 26, stiffness: 320 }}
      className="w-full h-full sm:h-[90vh] max-w-6xl bg-white sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-slate-200"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3 border-b border-slate-200 bg-slate-50 shrink-0 gap-2">
        {/* Title */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="hidden sm:flex gap-1.5 shrink-0">
            <span className="w-3 h-3 rounded-full bg-rose-400" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <div className="min-w-0">
            <span className="font-bold text-xs sm:text-sm text-slate-800 truncate block">
              {title || "Live Preview"}
            </span>
            <span className="text-[10px] text-slate-400 font-mono truncate hidden sm:block">
              {url}
            </span>
          </div>
        </div>

        {/* Viewport switchers (hidden on small mobile screens where device itself is mobile) */}
        <div className="hidden md:flex items-center bg-slate-200/80 p-1 rounded-xl gap-1 shrink-0">
          <button
            onClick={() => setViewport("desktop")}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewport === "desktop"
                ? "bg-white text-[#4361ee] shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Monitor size={14} /> Desktop
          </button>
          <button
            onClick={() => setViewport("tablet")}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewport === "tablet"
                ? "bg-white text-[#4361ee] shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Tablet size={14} /> Tablet
          </button>
          <button
            onClick={() => setViewport("mobile")}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewport === "mobile"
                ? "bg-white text-[#4361ee] shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Smartphone size={14} /> Mobile
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleRefresh}
            className="p-1.5 text-slate-500 hover:text-[#4361ee] hover:bg-slate-200 rounded-lg transition-colors"
            title="Refresh preview"
          >
            <RotateCw size={14} />
          </button>
          
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-white bg-[#4361ee] hover:bg-[#3451db] text-xs font-bold flex items-center gap-1 transition-all px-2.5 sm:px-3 py-1.5 rounded-lg shadow-sm"
          >
            <ExternalLink size={13} /> <span className="hidden sm:inline">Open</span> External
          </a>

          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-all"
            title="Close modal"
          >
            <X size={18} />
          </button>
        </div>
      </div>
      
      {/* Viewport & Iframe Container */}
      <div className="flex-1 bg-slate-900 relative overflow-hidden flex items-center justify-center p-1 sm:p-4 min-h-0">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/90 z-20 backdrop-blur-sm text-center p-4">
            <div className="flex flex-col items-center gap-2.5">
              <Loader2 className="animate-spin text-[#4361ee]" size={32} />
              <p className="text-xs text-white/80 font-semibold">
                Loading website preview...
              </p>
              <p className="text-[11px] text-white/50 max-w-xs">
                If the site blocks embedded framing, click &ldquo;External&rdquo; above.
              </p>
            </div>
          </div>
        )}

        {url && (
          <div className={`transition-all duration-300 ${getViewportClasses()}`}>
            <iframe
              key={`${url}-${key}`}
              src={url}
              className="w-full h-full border-none bg-white"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              onLoad={() => setLoadedUrl(url)}
            />
          </div>
        )}
      </div>

      {/* Mobile-friendly bottom bar */}
      <div className="bg-slate-50 px-4 py-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 shrink-0">
        <span className="truncate">Live embedded sandbox</span>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-[#4361ee] font-bold hover:underline shrink-0 ml-2"
        >
          Open in New Tab →
        </a>
      </div>
    </motion.div>
  );
}

export default function ProjectPreviewModal({ isOpen, onClose, url, title }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#0d1b2a]/85 backdrop-blur-md z-[100] flex flex-col items-center justify-center p-0 sm:p-4"
          onClick={onClose}
        >
          <ModalDialog
            key={url || "modal"}
            onClose={onClose}
            url={url}
            title={title}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
