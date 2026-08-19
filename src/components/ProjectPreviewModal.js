"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Loader2 } from "lucide-react";

export default function ProjectPreviewModal({ isOpen, onClose, url, title }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setLoading(true);
    } else {
      document.body.style.overflow = "";
    }
    
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#0d1b2a]/90 backdrop-blur-sm z-[100] flex flex-col items-center justify-center p-4 lg:p-10"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-6xl h-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="font-bold text-sm text-gray-700 ml-2">{title || "Live Preview"}</span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-[#4361ee] text-xs font-semibold flex items-center gap-1 transition-colors px-3 py-1.5 rounded-full hover:bg-[#4361ee]/10"
                >
                  <ExternalLink size={14} /> Open Original
                </a>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-red-500 hover:bg-red-50 text-xl transition-all"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            {/* Iframe */}
            <div className="flex-1 bg-gray-100 relative">
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
                  <div className="flex flex-col items-center gap-3">
                    <Loader2 className="animate-spin text-[#4361ee]" size={40} />
                    <p className="text-xs text-gray-500 font-medium animate-pulse">Loading website preview...</p>
                  </div>
                </div>
              )}
              {url && (
                <iframe
                  src={url}
                  className="w-full h-full border-none relative z-20 bg-white"
                  onLoad={() => setLoading(false)}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
