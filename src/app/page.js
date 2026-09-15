"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CommandPalette from "@/components/CommandPalette";
import ProjectPreviewModal from "@/components/ProjectPreviewModal";

export default function Home() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Prevent browser scroll restoration from restoring down to #work
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      window.scrollTo(0, 0);
    }
  }, []);

  const handleSelectProject = (project) => {
    if (project.category === "design") {
      window.open(project.link, "_blank");
    } else {
      setActiveModalProject(project);
    }
  };

  return (
    <>
      <Loader />
      <FloatingNav onOpenSearch={() => setIsCommandOpen(true)} />

      <main>
        <HeroSection onOpenCommandPalette={() => setIsCommandOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />

      {/* Interactive Global Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onSelectProject={handleSelectProject}
      />

      {/* Global Preview Modal for direct Command Palette launches */}
      <ProjectPreviewModal
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
        url={activeModalProject?.link}
        title={activeModalProject?.title}
      />
    </>
  );
}
