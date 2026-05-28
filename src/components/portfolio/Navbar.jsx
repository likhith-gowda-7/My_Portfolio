import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../../data/portfolioData";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("root/hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section detection
      const sections = NAV_ITEMS.map((n) => n.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          setCurrentPath(NAV_ITEMS[i].path);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Theme toggle — fixed top-left, always visible */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed top-4 left-4 z-[9995]"
      >
        <button
          onClick={toggleTheme}
          className="w-9 h-9 rounded-xl flex items-center justify-center border border-border/60 hover:border-amber-400 transition-all duration-300"
          style={{
            background: scrolled
              ? theme === "dark"
                ? "rgba(10,10,10,0.85)"
                : "rgba(255,255,255,0.85)"
              : "rgba(249,115,22,0.08)",
          }}
        >
          <motion.div
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {theme === "dark" ? (
              <Sun size={15} style={{ color: "#F97316" }} />
            ) : (
              <Moon size={15} style={{ color: "#F97316" }} />
            )}
          </motion.div>
        </button>
      </motion.div>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`floating-nav fixed top-4 left-1/2 z-[9990] -translate-x-1/2 transition-all duration-500 ${
          scrolled
            ? "w-[85%] max-w-2xl rounded-2xl border border-border/60 shadow-2xl"
            : "w-[88%] max-w-3xl rounded-2xl"
        }`}
        style={{
          background: scrolled
            ? theme === "dark"
              ? "rgba(10,10,10,0.85)"
              : "rgba(255,255,255,0.85)"
            : "transparent",
        }}
      >
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <span
              className="font-bold text-lg tracking-tight"
              style={{ fontFamily: "Poppins" }}
            >
              <span style={{ color: "#F97316" }}>L</span>ikhith
            </span>
            {/* System Status */}
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono opacity-60">
              <div
                className="w-1.5 h-1.5 rounded-full pulse-amber"
                style={{ background: "#F97316" }}
              />
              <span>Online</span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                  active === item.href.replace("#", "")
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === item.href.replace("#", "") && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: "rgba(249,115,22,0.12)",
                      border: "1px solid rgba(249,115,22,0.3)",
                    }}
                    transition={{ type: "spring", bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Terminal path indicator */}
            <div className="hidden lg:block font-mono text-[10px] opacity-40 max-w-28 truncate">
              {currentPath}
            </div>

            {/* Mobile menu */}
            <button
              className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center border border-border/60"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-4 right-4 z-[9980] rounded-2xl border border-border/60 p-4 glass-card"
            style={{
              background:
                theme === "dark"
                  ? "rgba(10,10,10,0.95)"
                  : "rgba(255,255,255,0.95)",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium hover:text-foreground text-muted-foreground transition-colors terminal-hover"
              >
                <span className="text-xs mr-2 opacity-40 font-mono">
                  {item.path}
                </span>
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
