import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const hovering = useRef(false);
  const clicking = useRef(false);
  const pos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let raf;

    const onMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;

      // Check hover state directly — avoid React state
      const el = document.elementFromPoint(e.clientX, e.clientY);
      hovering.current = el?.closest("a, button, [data-hover]") != null;
    };

    const onDown = () => { clicking.current = true; };
    const onUp = () => { clicking.current = false; };

    const loop = () => {
      const x = pos.current.x;
      const y = pos.current.y;
      const isHover = hovering.current;
      const isClick = clicking.current;

      // Direct DOM transforms — zero React re-renders
      const scale = isClick ? 0.7 : 1;
      const size = isHover ? 44 : 12;

      dot.style.transform = `translate(${x - size / 2}px, ${y - size / 2}px) scale(${scale})`;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;

      ring.style.opacity = isHover ? "1" : "0";
      ring.style.transform = `translate(${x - 22}px, ${y - 22}px)`;

      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Cursor dot */}
      <div
        ref={dotRef}
        className="custom-cursor"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "difference",
          willChange: "transform",
          borderRadius: "50%",
          background: "#F97316",
          boxShadow: "0 0 10px rgba(249,115,22,0.7)",
          transition: "width 0.15s ease, height 0.15s ease",
        }}
      />
      {/* Hover ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 44,
          height: 44,
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "difference",
          willChange: "transform",
          borderRadius: "50%",
          border: "1px solid rgba(249,115,22,0.5)",
          borderTopColor: "#F97316",
          borderRightColor: "transparent",
          borderBottomColor: "rgba(249,115,22,0.3)",
          borderLeftColor: "transparent",
          animation: "spin 2s linear infinite",
          opacity: 0,
          transition: "opacity 0.15s ease",
        }}
      />
    </>
  );
}
