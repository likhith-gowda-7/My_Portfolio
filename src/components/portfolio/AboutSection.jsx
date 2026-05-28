// About Section Component
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ABOUT, PERSONAL, EDUCATION } from "../../data/portfolioData";
import { Target, Zap, Code2, TrendingUp, GraduationCap, Award, Calendar } from "lucide-react";

const highlightIcons = { 0: Target, 1: TrendingUp, 2: Zap, 3: Code2 };

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-5"
        style={{ background: "radial-gradient(circle, #F97316, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8" style={{ background: "#F97316" }} />
          <span
            className="text-xs font-mono uppercase tracking-widest"
            style={{ color: "#F97316" }}
          >
            root/about
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Heading + text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-black mb-8"
              style={{
                fontFamily: "Poppins",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.1,
              }}
            >
              The{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F97316, #EA580C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Blueprint
              </span>
              <br />
              Behind the Code
            </motion.h2>

            <div className="space-y-5">
              {ABOUT.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="text-muted-foreground text-base leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex gap-4"
            >
              <a
                href={PERSONAL.social.github}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-border/60 hover:border-amber-400 transition-all duration-300"
              >
                GitHub Profile ↗
              </a>
              <a
                href={PERSONAL.social.linkedin}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                style={{ background: "rgba(249,115,22,0.1)", color: "#F97316" }}
              >
                LinkedIn ↗
              </a>
            </motion.div>
          </div>

          {/* Right — Highlights grid + Education */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {ABOUT.highlights.map((h, i) => {
                const Icon = highlightIcons[i];
                return (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="p-5 rounded-2xl border border-border/60 bento-card"
                    style={{ background: "rgba(249,115,22,0.03)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: "rgba(249,115,22,0.1)" }}
                    >
                      <Icon size={18} style={{ color: "#F97316" }} />
                    </div>
                    <p className="text-xs font-mono text-muted-foreground mb-1">
                      {h.label}
                    </p>
                    <p className="font-semibold text-sm leading-snug">
                      {h.value}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="p-6 rounded-2xl border border-border/60 bento-card"
              style={{
                background:
                  "linear-gradient(135deg, rgba(249,115,22,0.08), rgba(234,88,12,0.05))",
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #F97316, #EA580C)",
                  }}
                >
                  <GraduationCap size={20} style={{ color: "white" }} />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ fontFamily: "Poppins" }}>
                    {EDUCATION.degree}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {EDUCATION.institution}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar size={10} />
                      {EDUCATION.duration}
                    </span>
                    <span
                      className="text-xs font-mono font-bold px-2 py-0.5 rounded-md"
                      style={{
                        background: "rgba(249,115,22,0.15)",
                        color: "#F97316",
                        border: "1px solid rgba(249,115,22,0.25)",
                      }}
                    >
                      CGPA: {EDUCATION.cgpa}
                    </span>
                  </div>
                </div>
              </div>

              {/* Education highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-3 border-t border-border/40">
                {EDUCATION.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Award size={12} className="mt-0.5 shrink-0" style={{ color: "#F97316" }} />
                    <span className="text-xs text-muted-foreground leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Status card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="p-5 rounded-2xl border border-border/60 bento-card flex items-center gap-4"
              style={{ background: "rgba(249,115,22,0.03)" }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-black"
                style={{
                  background: "linear-gradient(135deg, #F97316, #EA580C)",
                  color: "white",
                  fontFamily: "Poppins",
                }}
              >
                L
              </div>
              <div>
                <p className="font-semibold text-sm">{PERSONAL.name}</p>
                <p className="text-xs text-muted-foreground">
                  System Engineer → SDE
                </p>
                <p
                  className="text-xs font-mono mt-1"
                  style={{ color: "#F97316" }}
                >
                  {PERSONAL.location} · Open to opportunities
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}