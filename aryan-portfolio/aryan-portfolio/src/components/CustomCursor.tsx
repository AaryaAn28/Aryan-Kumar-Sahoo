"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 25, stiffness: 300, mass: 0.4 });
  const springY = useSpring(y, { damping: 25, stiffness: 300, mass: 0.4 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!visible) setVisible(true);
      x.set(e.clientX - 6);
      y.set(e.clientY - 6);
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest("[data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [visible, x, y]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 z-[999] pointer-events-none mix-blend-difference"
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        animate={{
          width: isHovering ? 44 : 12,
          height: isHovering ? 44 : 12,
          x: isHovering ? -16 : 0,
          y: isHovering ? -16 : 0,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="rounded-full bg-[#D4AF37]"
      />
    </motion.div>
  );
}
