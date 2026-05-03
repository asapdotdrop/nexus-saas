"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    num: "/01",
    headline: ["AI agents that", "reason"],
    desc: "Our agents don't just automate — they understand context, make decisions, and adapt in real time without manual intervention.",
    Icon: () => (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="20" cy="20" r="11" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="4" fill="currentColor" />
        <line x1="20" y1="4" x2="20" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="30" x2="20" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="20" x2="10" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="30" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="7.5" y1="7.5" x2="12" y2="12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <line x1="32.5" y1="7.5" x2="28" y2="12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <line x1="7.5" y1="32.5" x2="12" y2="28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <line x1="32.5" y1="32.5" x2="28" y2="28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    num: "/02",
    headline: ["Visual workflow", "builder"],
    desc: "Drag, drop, and connect. Build multi-step automations in minutes with a canvas that feels as natural as a whiteboard.",
    Icon: () => (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="3" y="14" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="27" y="14" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="15" y="3" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="15" y="29" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 18 Q20 18 20 11" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="2 2" />
        <path d="M27 18 Q20 18 20 11" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="2 2" />
        <path d="M20 11 L20 29" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    num: "/03",
    headline: ["200+", "integrations"],
    desc: "Slack, Salesforce, GitHub, Notion, Stripe — and everything else your team already uses, connected natively with one click.",
    Icon: () => (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="20" cy="20" r="3" fill="currentColor" />
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="32" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="32" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" />
        <line x1="10.5" y1="10.5" x2="17.8" y2="17.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="29.5" y1="10.5" x2="22.2" y2="17.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10.5" y1="29.5" x2="17.8" y2="22.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="29.5" y1="29.5" x2="22.2" y2="22.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "/04",
    headline: ["Real-time", "observability"],
    desc: "Watch every workflow run, trace every decision path, and debug any failure with full execution history and live telemetry.",
    Icon: () => (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <line x1="4" y1="32" x2="36" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="4,26 11,18 17,22 24,10 36,15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="10" r="2.5" fill="currentColor" />
        <line x1="11" y1="32" x2="11" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="24" y1="32" x2="24" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6 md:px-12" id="features">
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
          — Platform
        </span>
        <h2
          className="font-fraunces font-bold text-ink mt-3"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          Built for serious{" "}
          <em className="italic text-accent">scale</em>
        </h2>
      </motion.div>

      {/* 2×2 grid with table-style borders */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-lines">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.num}
            className="relative border-r border-b border-lines p-8 md:p-10 group overflow-hidden"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.65 }}
            data-hover={f.num}
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 30% 40%, rgba(255,87,34,0.07) 0%, transparent 70%)" }}
            />

            <div className="flex items-start justify-between mb-8">
              <span className="font-mono text-xs text-ink-soft/60">{f.num}</span>
              <motion.div
                className="w-9 h-9 text-accent"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <f.Icon />
              </motion.div>
            </div>

            <h3
              className="font-fraunces font-bold text-ink mb-4 leading-tight"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}
            >
              {f.headline[0]}{" "}
              <em className="italic text-accent">{f.headline[1]}</em>
            </h3>

            <p className="font-body text-sm text-ink-soft leading-relaxed">
              {f.desc}
            </p>

            {/* Bottom accent line on hover */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-accent transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
