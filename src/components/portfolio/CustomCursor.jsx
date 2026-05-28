import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const rendered = useRef({ x: -100, y: -100 });
  const hovering = useRef(false);
  const clicking = useRef(false);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let raf;

    const onMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;

      const el = document.elementFromPoint(e.clientX, e.clientY);
      hovering.current = el?.closest("a, button, [data-hover]") != null;
    };

    const onDown = () => { clicking.current = true; };
    const onUp = () => { clicking.current = false; };

    const loop = () => {
      // Smooth lerp for buttery movement
      const lerp = 0.18;
      rendered.current.x += (pos.current.x - rendered.current.x) * lerp;
      rendered.current.y += (pos.current.y - rendered.current.y) * lerp;

      const x = rendered.current.x;
      const y = rendered.current.y;
      const isHover = hovering.current;
      const isClick = clicking.current;

      const size = isHover ? 40 : 10;
      const scale = isClick ? 0.75 : 1;
      const opacity = isHover ? 0.5 : 1;

      dot.style.transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0) scale(${scale})`;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.opacity = opacity;

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
    <div
      ref={dotRef}
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
        transition: "width 0.12s ease, height 0.12s ease, opacity 0.12s ease",
      }}
    />
  );
}
