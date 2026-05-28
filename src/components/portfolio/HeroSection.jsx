import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL } from "../../data/portfolioData";

const ROLES = PERSONAL.roles;

function useTypewriter(words, speed = 80, pause = 1800) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const current = words[index % words.length];
    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => {
        setSubIndex((s) => s + (deleting ? -1 : 1));
        setText(current.substring(0, subIndex + (deleting ? -1 : 1)));
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [subIndex, index, deleting, words, speed, pause]);

  return text;
}

export default function HeroSection() {
  const roleText = useTypewriter(ROLES);
  const canvasRef = useRef(null);

  // Animated SVG grid particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 18 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2 + 1,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(249,115,22,0.3)";
        ctx.fill();
      });
      // Connect nearby particles — optimized with distance pre-check
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          // Skip sqrt for distant particles
          const d2 = dx * dx + dy * dy;
          if (d2 < 14400) { // 120²
            const d = Math.sqrt(d2);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(249,115,22,${0.15 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden blueprint-grid"
    >
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{ willChange: "auto" }}
      />

      {/* Amber radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-32">
          {/* Left — Text content */}
          <div>
            {/* Hello tag */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8" style={{ background: "#F97316" }} />
              <span
                className="text-sm font-mono font-medium"
                style={{ color: "#F97316" }}
              >
                Hello, World
              </span>
            </motion.div>

            {/* Name — massive display type */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-black leading-none mb-4"
              style={{
                fontFamily: "Poppins",
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
                letterSpacing: "-0.03em",
              }}
            >
              I'm{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Likhith
              </span>
              <br />
              <span className="text-foreground">D M</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <span
                className="text-base font-mono"
                style={{ color: "#64748B" }}
              >
                &gt;_
              </span>
              <span
                className="text-xl font-semibold typewriter-cursor"
                style={{ fontFamily: "Poppins", color: "#F97316" }}
              >
                {roleText}
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg"
            >
              {PERSONAL.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="magnetic-btn px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #F97316, #EA580C)",
                  boxShadow: "0 8px 32px rgba(249,115,22,0.35)",
                }}
              >
                View Projects →
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="magnetic-btn px-7 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-300 hover:scale-105 hover:border-amber-400"
                style={{ borderColor: "rgba(249,115,22,0.4)" }}
              >
                Contact Me
              </button>
              <a
                href="https://media.base44.com/files/public/69e620b85f478457c77f5f08/af5e5e455_DM_LikhithSE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                style={{
                  border: "1.5px solid rgba(249,115,22,0.5)",
                  background: "rgba(249,115,22,0.06)",
                  color: "#F97316",
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Hire Me
                </span>
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(249,115,22,0.15), rgba(234,88,12,0.1))",
                  }}
                />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: Github, href: PERSONAL.social.github, label: "GitHub" },
                {
                  icon: Linkedin,
                  href: PERSONAL.social.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: `mailto:${PERSONAL.email}`,
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-xl border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-amber-400 transition-all duration-300 hover:scale-110"
                  style={{ background: "rgba(249,115,22,0.05)" }}
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
              <div
                className="h-px flex-1 opacity-20"
                style={{ background: "#F97316" }}
              />
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div
                className="absolute -inset-4 rounded-full opacity-20 animate-spin"
                style={{
                  border: "1px dashed #F97316",
                  animationDuration: "20s",
                }}
              />
              <div
                className="absolute -inset-8 rounded-full opacity-10"
                style={{ border: "1px solid #F97316" }}
              />

              {/* Photo container */}
              <div
                className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-3xl overflow-hidden"
                style={{
                  border: "2px solid rgba(249,115,22,0.3)",
                  boxShadow:
                    "0 32px 80px rgba(249,115,22,0.2), 0 0 0 1px rgba(249,115,22,0.1)",
                }}
              >
                <img
                  src={PERSONAL.photo}
                  alt="Likith D M"
                  className="w-full h-full object-cover object-top"
                />
                {/* Amber overlay gradient at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(249,115,22,0.3), transparent)",
                  }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-6 px-4 py-2 rounded-xl border border-border/60 glass-card text-sm font-semibold"
                style={{
                  background: "rgba(249,115,22,0.1)",
                  borderColor: "rgba(249,115,22,0.3)",
                  color: "#F97316",
                  backdropFilter: "blur(12px)",
                }}
              >
                700+ LC Problems
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -top-4 -right-6 px-4 py-2 rounded-xl border text-xs font-mono glass-card"
                style={{
                  background: "rgba(15,23,42,0.8)",
                  borderColor: "rgba(249,115,22,0.3)",
                  color: "#F97316",
                  backdropFilter: "blur(12px)",
                }}
              >
                &gt; Available for SDE roles
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs font-mono tracking-widest uppercase opacity-60">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} style={{ color: "#F97316" }} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
