"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LINKS = ["Features", "Product", "Pricing", "Docs"];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-5 transition-colors duration-500"
      style={{
        mixBlendMode: "difference" as const,
        backgroundColor: scrolled ? "rgba(10,10,15,0.0)" : "transparent",
      }}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Logo */}
      <a
        href="#"
        data-hover="Home"
        className="flex items-center gap-2.5 group"
      >
        <span className="font-fraunces text-xl font-bold text-ink tracking-tight">
          Nexus
        </span>
        <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
      </a>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8">
        {LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            data-hover={link}
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft hover:text-accent transition-colors duration-300 relative overflow-hidden"
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA */}
      <motion.a
        href="#pricing"
        data-hover="Get started free"
        className="bg-accent text-ink font-mono text-[11px] uppercase tracking-[0.15em] px-5 py-2.5 rounded-full"
        whileHover={{ scale: 1.06, backgroundColor: "#e64a19" }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        Start free
      </motion.a>
    </motion.nav>
  );
}
