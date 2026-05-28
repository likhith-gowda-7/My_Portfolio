// Experience Section Component
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { EXPERIENCE } from "../../data/portfolioData";
import {
  Briefcase,
  GraduationCap,
  Laptop,
  ChevronDown,
  MapPin,
  Calendar,
} from "lucide-react";

const TAG_COLORS = {
  FIX: {
    bg: "rgba(239,68,68,0.1)",
    color: "#EF4444",
    border: "rgba(239,68,68,0.3)",
  },
  FEAT: {
    bg: "rgba(34,197,94,0.1)",
    color: "#22C55E",
    border: "rgba(34,197,94,0.3)",
  },
  OPTIMIZE: {
    bg: "rgba(249,115,22,0.1)",
    color: "#F97316",
    border: "rgba(249,115,22,0.3)",
  },
};

function ExperienceCard({ exp, index, isInView }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      className="relative pl-12"
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center"
        style={{
          borderColor: "#F97316",
          background: expanded ? "#F97316" : "transparent",
          transition: "background 0.3s",
        }}
      >
        <div className="w-2 h-2 rounded-full bg-background" />
      </div>

      {/* Card */}
      <div
        className="p-6 rounded-2xl border border-border/60 bento-card transition-all duration-300"
        style={{
          background: expanded ? "rgba(249,115,22,0.03)" : "transparent",
        }}
      >
        {/* Header */}
        <button
          className="w-full text-left"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mt-0.5 shrink-0"
                style={{ background: "rgba(249,115,22,0.1)" }}
              >
                {exp.type === "JOB" ? (
                  <Briefcase size={16} style={{ color: "#F97316" }} />
                ) : exp.type === "FREELANCE" ? (
                  <Laptop size={16} style={{ color: "#F97316" }} />
                ) : (
                  <GraduationCap size={16} style={{ color: "#F97316" }} />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded-md"
                    style={{
                      background: "rgba(249,115,22,0.1)",
                      color: "#F97316",
                      border: "1px solid rgba(249,115,22,0.2)",
                    }}
                  >
                    [{exp.type}]
                  </span>
                </div>
                <h3
                  className="font-bold text-lg leading-tight"
                  style={{ fontFamily: "Poppins" }}
                >
                  {exp.title}
                </h3>
                <p className="font-medium text-sm" style={{ color: "#F97316" }}>
                  {exp.company}
                </p>
                <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={11} />
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>
            <ChevronDown
              size={18}
              className="text-muted-foreground shrink-0 mt-1 transition-transform duration-300"
              style={{ transform: expanded ? "rotate(180deg)" : "rotate(0)" }}
            />
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {exp.description}
          </p>
        </button>

        {/* Expanded — commit history */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-5 space-y-2"
          >
            <p className="text-xs font-mono text-muted-foreground mb-3">
              // commit history
            </p>
            {exp.achievements.map((a, i) => {
              const style = TAG_COLORS[a.tag] || TAG_COLORS.FEAT;
              return (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl terminal-hover transition-all"
                >
                  <span
                    className="text-xs font-mono font-bold px-2 py-0.5 rounded-md shrink-0 mt-0.5"
                    style={{
                      background: style.bg,
                      color: style.color,
                      border: `1px solid ${style.border}`,
                    }}
                  >
                    {a.tag}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {a.text}
                  </span>
                </div>
              );
            })}

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/40">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-lg font-mono"
                  style={{
                    background: "rgba(249,115,22,0.08)",
                    color: "#F97316",
                    border: "1px solid rgba(249,115,22,0.15)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
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
            root/experience
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-black mb-16"
          style={{
            fontFamily: "Poppins",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.1,
          }}
        >
          Technical{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #F97316, #EA580C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Trajectory
          </span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Animated vertical line */}
          <div
            className="absolute left-2.5 top-0 bottom-0 w-px"
            style={{ background: "rgba(249,115,22,0.15)" }}
          >
            <motion.div
              className="w-full origin-top"
              style={{
                background:
                  "linear-gradient(to bottom, #F97316, rgba(249,115,22,0.1))",
              }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
          </div>

          {EXPERIENCE.map((exp, i) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}