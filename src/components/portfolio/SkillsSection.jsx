// Skills Section Component
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKILLS } from "../../data/portfolioData";
import { Code, Monitor, Server, Database, Wrench } from "lucide-react";

const ICONS = { Code, Monitor, Server, Database, Wrench };

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
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
            root/skills
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-16">
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
            Technical{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F97316, #EA580C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Arsenal
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-sm max-w-xs"
          >
            Skills built through real production work and consistent practice.
          </motion.p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SKILLS.map((cat, ci) => {
            const Icon = ICONS[cat.icon] || Code;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + ci * 0.1 }}
                className="p-6 rounded-2xl border border-border/60 bento-card group"
                style={{ background: "rgba(249,115,22,0.02)" }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ background: "rgba(249,115,22,0.12)" }}
                  >
                    <Icon size={16} style={{ color: "#F97316" }} />
                  </div>
                  <h3
                    className="font-semibold text-sm"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {cat.category}
                  </h3>
                </div>

                {/* Skills with bars */}
                <div className="space-y-3">
                  {cat.items.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-muted-foreground">
                          {skill.name}
                        </span>
                        <span
                          className="text-xs font-mono"
                          style={{ color: "#F97316" }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="h-1 rounded-full overflow-hidden"
                        style={{ background: "rgba(249,115,22,0.1)" }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg, #F97316, #EA580C)",
                            boxShadow: "0 0 6px rgba(249,115,22,0.4)",
                          }}
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? { width: `${skill.level}%` }
                              : { width: 0 }
                          }
                          transition={{
                            duration: 1,
                            delay: 0.3 + ci * 0.1 + si * 0.05,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}