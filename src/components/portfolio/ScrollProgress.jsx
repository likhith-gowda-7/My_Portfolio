// Scroll Progress Component — optimized to avoid re-renders
import { useRef, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const percentRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (percentRef.current) {
        percentRef.current.textContent = `${String(Math.round(v * 100)).padStart(2, "0")}%`;
      }
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[9999] origin-left"
        style={{
          scaleX,
          height: "2px",
          background: "linear-gradient(90deg, #F97316, #EA580C)",
          boxShadow: "0 0 8px rgba(249,115,22,0.6)",
          willChange: "transform",
        }}
      />
      {/* Bottom-right percentage */}
      <div
        className="fixed bottom-6 right-6 z-[9998] font-mono text-xs font-bold"
        style={{ color: "#F97316" }}
      >
        <span className="opacity-50">SCROLL</span>
        <br />
        <span ref={percentRef} className="text-lg leading-none">
          00%
        </span>
      </div>
    </>
  );
}