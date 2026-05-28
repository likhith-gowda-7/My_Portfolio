// Projects Section Component
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECTS } from "../../data/portfolioData";
import { Github, ExternalLink, Star } from "lucide-react";

const STATUS_COLORS = {
  Live: {
    bg: "rgba(34,197,94,0.1)",
    color: "#22C55E",
    border: "rgba(34,197,94,0.3)",
  },
  "In Progress": {
    bg: "rgba(249,115,22,0.1)",
    color: "#F97316",
    border: "rgba(249,115,22,0.3)",
  },
  Ongoing: {
    bg: "rgba(59,130,246,0.1)",
    color: "#3B82F6",
    border: "rgba(59,130,246,0.3)",
  },
};

function ProjectCard({ project, index, isInView }) {
  const status = STATUS_COLORS[project.status] || STATUS_COLORS["In Progress"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
      className="relative group rounded-2xl border border-border/60 overflow-hidden bento-card"
      style={{
        background: project.highlight
          ? "rgba(249,115,22,0.03)"
          : "rgba(255,255,255,0.01)",
      }}
    >
      {/* Code snippet background */}
      <div className="code-bg text-muted-foreground" aria-hidden>
        {project.codeSnippet}
      </div>

      {/* Highlight star */}
      {project.highlight && (
        <div
          className="absolute top-4 right-4 w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ background: "rgba(249,115,22,0.15)" }}
        >
          <Star size={13} style={{ color: "#F97316" }} fill="#F97316" />
        </div>
      )}

      <div className="relative z-10 p-7">
        {/* Status badge */}
        <span
          className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-lg mb-4"
          style={{
            background: status.bg,
            color: status.color,
            border: `1px solid ${status.border}`,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: status.color }}
          />
          {project.status}
        </span>

        {/* Title */}
        <h3
          className="font-black text-2xl mb-1 group-hover:text-amber-500 transition-colors duration-300"
          style={{ fontFamily: "Poppins" }}
        >
          {project.title}
        </h3>
        <p className="text-sm font-medium mb-3" style={{ color: "#F97316" }}>
          {project.subtitle}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-lg font-mono transition-all duration-200 group-hover:border-amber-400/40"
              style={{
                background: "rgba(249,115,22,0.06)",
                color: "#F97316",
                border: "1px solid rgba(249,115,22,0.12)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl border border-border/60 hover:border-amber-400 transition-all duration-300"
          >
            <Github size={13} />
            Code
          </a>
          <a
            href={project.live}
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl text-white transition-all duration-300 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
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
            root/projects
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black"
            style={{
              fontFamily: "Poppins",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.1,
            }}
          >
            Built &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F97316, #EA580C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Shipped
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-sm max-w-xs"
          >
            Real projects. Real problems. Real solutions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}