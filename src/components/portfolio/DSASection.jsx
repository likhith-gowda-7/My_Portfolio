import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { DSA_STATS, STATS } from "../../data/portfolioData";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ExternalLink, Trophy, Zap, Target, CheckCircle2 } from "lucide-react";

function AnimatedCounter({ target, duration = 1800, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="counter-num">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function DSASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dsa" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(249,115,22,0.04) 0%, transparent 70%)",
        }}
      />

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
            root/dsa_hub
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-black mb-4"
          style={{
            fontFamily: "Poppins",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.1,
          }}
        >
          Data Structures &{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #F97316, #EA580C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Algorithms
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-16 max-w-2xl"
        >
          Consistent problem solving as a discipline — 1.5 years of daily
          grinding. Logic sharpened every day.
        </motion.p>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {/* LeetCode Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="xl:col-span-1 p-7 rounded-2xl border border-border/60 bento-card relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(249,115,22,0.08), rgba(234,88,12,0.04))",
            }}
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
              style={{
                background: "radial-gradient(circle, #F97316, transparent)",
                transform: "translate(50%,-50%)",
              }}
            />

            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                style={{
                  background: "rgba(249,115,22,0.15)",
                  color: "#F97316",
                }}
              >
                LC
              </span>
              <span className="text-sm font-semibold">LeetCode</span>
            </div>

            <div className="my-4">
              <div
                className="text-6xl font-black leading-none"
                style={{ fontFamily: "Poppins", color: "#F97316" }}
              >
                <AnimatedCounter target={DSA_STATS.leetcode.total} suffix="+" />
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Problems Solved
              </p>
            </div>

            {/* Difficulty bars */}
            <div className="space-y-2">
              {[
                {
                  label: "Easy",
                  count: DSA_STATS.leetcode.easy,
                  color: "#22C55E",
                  total: DSA_STATS.leetcode.total,
                },
                {
                  label: "Medium",
                  count: DSA_STATS.leetcode.medium,
                  color: "#F59E0B",
                  total: DSA_STATS.leetcode.total,
                },
                {
                  label: "Hard",
                  count: DSA_STATS.leetcode.hard,
                  color: "#EF4444",
                  total: DSA_STATS.leetcode.total,
                },
              ].map((d) => (
                <div key={d.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">{d.label}</span>
                    <span style={{ color: d.color }}>{d.count}</span>
                  </div>
                  <div
                    className="h-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.07)" }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: d.color }}
                      initial={{ width: 0 }}
                      animate={
                        isInView
                          ? { width: `${(d.count / d.total) * 100}%` }
                          : { width: 0 }
                      }
                      transition={{ duration: 1.2, delay: 0.5 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="text-xs text-muted-foreground font-mono">
                <span style={{ color: "#F97316" }}>
                  {DSA_STATS.leetcode.activeDays}
                </span>{" "}
                active days · streak{" "}
                <span style={{ color: "#F97316" }}>
                  {DSA_STATS.leetcode.maxStreak}
                </span>
              </div>
            </div>
            <a
              href={DSA_STATS.leetcode.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
              style={{ color: "#F97316" }}
            >
              View Profile <ExternalLink size={11} />
            </a>
          </motion.div>

          {/* Platform Cards — 2x2 grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="p-6 rounded-2xl border border-border/60 bento-card"
          >
            <p className="text-xs font-mono text-muted-foreground mb-4">
              // cp_profiles
            </p>
            <div className="grid grid-cols-2 gap-3">
              {DSA_STATS.platforms.map((pl, i) => (
                <motion.a
                  key={pl.name}
                  href={pl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex flex-col gap-2 p-3 rounded-xl border border-border/40 hover:border-opacity-80 transition-all duration-300 group relative overflow-hidden"
                  style={{ borderColor: `${pl.color}30` }}
                >
                  {/* bg accent */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `${pl.color}08` }}
                  />
                  <div className="flex items-center justify-between">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black font-mono shrink-0"
                      style={{ background: `${pl.color}20`, color: pl.color }}
                    >
                      {pl.icon}
                    </div>
                    <ExternalLink
                      size={11}
                      className="opacity-0 group-hover:opacity-60 transition-opacity"
                      style={{ color: pl.color }}
                    />
                  </div>
                  <div>
                    <p
                      className="font-bold text-xs"
                      style={{ color: pl.color }}
                    >
                      {pl.name}
                    </p>
                    <p className="text-xs font-mono text-muted-foreground">
                      @{pl.handle}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      {pl.stat}
                    </p>
                    {pl.name !== "HackerRank" && (
                      <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">
                        {pl.detail}
                      </p>
                    )}
                  </div>
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md self-start"
                    style={{ background: `${pl.color}15`, color: pl.color }}
                  >
                    {pl.subStat}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="p-6 rounded-2xl border border-border/60 bento-card"
          >
            <p className="text-xs font-mono text-muted-foreground mb-4">
              // skill_radar
            </p>
            <ResponsiveContainer width="100%" height={220}>
              <RadarChart
                data={DSA_STATS.radarData}
                margin={{ top: 10, right: 20, bottom: 10, left: 20 }}
              >
                <PolarGrid stroke="rgba(249,115,22,0.15)" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{
                    fill: "#64748B",
                    fontSize: 11,
                    fontFamily: "monospace",
                  }}
                />
                <PolarRadiusAxis
                  domain={[0, 100]}
                  tick={false}
                  axisLine={false}
                />
                <Radar
                  name="Skills"
                  dataKey="score"
                  stroke="#F97316"
                  fill="#F97316"
                  fillOpacity={0.15}
                  strokeWidth={1.5}
                  dot={{ r: 4, fill: "#F97316", strokeWidth: 0 }}
                  activeDot={{
                    r: 6,
                    fill: "#F97316",
                    stroke: "rgba(249,115,22,0.4)",
                    strokeWidth: 3,
                  }}
                />
                <Tooltip
                  contentStyle={{
                    background: "rgba(10,10,10,0.9)",
                    border: "1px solid rgba(249,115,22,0.3)",
                    borderRadius: "10px",
                    fontSize: "12px",
                    fontFamily: "monospace",
                    color: "#F97316",
                    padding: "6px 12px",
                  }}
                  itemStyle={{ color: "#F97316" }}
                  formatter={(value, name, props) => [
                    `${props.payload.subject}: ${value}/100`,
                    "",
                  ]}
                  labelFormatter={() => ""}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Topics completed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 xl:col-span-2 p-6 rounded-2xl border border-border/60 bento-card"
          >
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 size={16} style={{ color: "#F97316" }} />
              <p className="text-sm font-semibold">Topics Mastered</p>
              <span className="text-xs font-mono text-muted-foreground ml-auto">
                {DSA_STATS.topicsCompleted.length} topics
              </span>
            </div>
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {DSA_STATS.topicsCompleted.map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium border"
                  style={{
                    background: "rgba(249,115,22,0.06)",
                    color: "#F97316",
                    border: "1px solid rgba(249,115,22,0.2)",
                  }}
                >
                  ✓ {topic}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats counters */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="p-6 rounded-2xl border border-border/60 bento-card"
          >
            <p className="text-xs font-mono text-muted-foreground mb-4">
              // metrics
            </p>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div
                    className="text-3xl font-black"
                    style={{ fontFamily: "Poppins", color: "#F97316" }}
                  >
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
