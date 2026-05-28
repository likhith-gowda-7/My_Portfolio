import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "../components/portfolio/CustomCursor";
import ScrollProgress from "../components/portfolio/ScrollProgress";
import Navbar from "../components/portfolio/Navbar";
import HeroSection from "../components/portfolio/HeroSection";

// Lazy-load below-the-fold sections for faster initial paint
const AboutSection = lazy(() => import("../components/portfolio/AboutSection"));
const SkillsSection = lazy(() => import("../components/portfolio/SkillsSection"));
const ExperienceSection = lazy(() => import("../components/portfolio/ExperienceSection"));
const ProjectsSection = lazy(() => import("../components/portfolio/ProjectsSection"));
const DSASection = lazy(() => import("../components/portfolio/DSASection"));
const ContactSection = lazy(() => import("../components/portfolio/ContactSection"));

export default function Portfolio() {
  const [theme, setTheme] = useState("dark");
  const [ripple, setRipple] = useState(false);

  // Persist theme
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") || "dark";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  const toggleTheme = () => {
    setRipple(true);
    setTimeout(() => {
      const next = theme === "light" ? "dark" : "light";
      setTheme(next);
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("portfolio-theme", next);
      setTimeout(() => setRipple(false), 700);
    }, 50);
  };

  return (
    <div
      className={`relative min-h-screen bg-background text-foreground transition-colors duration-700`}
    >
      {/* Amber wave ripple on theme toggle */}
      <AnimatePresence>
        {ripple && (
          <motion.div
            key="ripple"
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 80, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="fixed top-4 right-16 w-8 h-8 rounded-full pointer-events-none z-[99997]"
            style={{ background: "#F97316", transformOrigin: "center" }}
          />
        )}
      </AnimatePresence>

      {/* Custom cursor — hide on touch devices */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Scroll progress */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main content */}
      <main>
        <HeroSection />
        <Suspense fallback={null}>
          <AboutSection />
          <DSASection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </Suspense>
      </main>
    </div>
  );
}
