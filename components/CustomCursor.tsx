"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as Element).closest(
        "[data-hover]"
      ) as HTMLElement | null;
      if (el) {
        setHovering(true);
        setLabel(el.dataset.hover ?? "");
      }
    };

    const onOut = (e: MouseEvent) => {
      const el = (e.target as Element).closest("[data-hover]");
      if (el) {
        setHovering(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  const size = hovering ? 80 : 8;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none hidden md:flex items-center justify-center overflow-hidden"
      style={{
        zIndex: 9999,
        backgroundColor: "#ff5722",
        mixBlendMode: "difference" as const,
      }}
      animate={{
        x: pos.x - size / 2,
        y: pos.y - size / 2,
        width: size,
        height: size,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 0.3,
      }}
    >
      <AnimatePresence>
        {hovering && label && (
          <motion.span
            key="label"
            className="absolute text-[9px] font-mono text-bg text-center leading-tight px-2 whitespace-nowrap"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15 }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
