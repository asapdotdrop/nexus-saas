"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const wordReveal = (i: number) => ({
  hidden: { y: "115%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.7 + i * 0.1,
      duration: 0.72,
      ease: EASE,
    },
  },
});

function Word({
  children,
  index,
  accent,
}: {
  children: string;
  index: number;
  accent?: boolean;
}) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className={`inline-block${accent ? " italic text-accent" : ""}`}
        variants={wordReveal(index)}
        initial="hidden"
        animate="visible"
      >
        {children}&nbsp;
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-6 md:px-12 lg:px-20">
      {/* Vertical edge tag */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 -rotate-90 origin-center hidden lg:block">
        <span className="font-mono text-[10px] text-ink-soft/60 tracking-[0.2em] whitespace-nowrap">
          N° 001 — AI Workflow Engine
        </span>
      </div>

      {/* Pill tag */}
      <motion.div
        className="inline-flex items-center gap-2 border border-lines rounded-full px-4 py-2 mb-10 w-fit"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
        <span className="font-mono text-[11px] text-ink-soft tracking-wide">
          Now in public beta — limited spots
        </span>
      </motion.div>

      {/* Headline */}
      <h1
        className="font-fraunces font-bold text-ink leading-[0.95]"
        style={{ fontSize: "clamp(3.5rem, 11vw, 11rem)" }}
      >
        <Word index={0}>Workflows</Word>
        <Word index={1}>that</Word>
        <Word index={2} accent>
          think
        </Word>
        <br className="hidden md:block" />
        <Word index={3}>for</Word>
        <Word index={4}>themselves.</Word>
      </h1>

      {/* Description */}
      <motion.p
        className="font-body text-ink-soft text-lg md:text-xl max-w-lg mt-8 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.35, duration: 0.65 }}
      >
        Connect any tool, trigger any action, and let AI handle the decisions.
        Nexus is the workflow platform that reasons, adapts, and executes — so
        your team doesn&apos;t have to.
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex flex-wrap items-center gap-5 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.55, duration: 0.65 }}
      >
        <motion.a
          href="#pricing"
          data-hover="Start free"
          className="bg-accent text-ink font-mono text-[11px] uppercase tracking-[0.15em] px-8 py-4 rounded-full"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 32px rgba(255,87,34,0.45)",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          Start free
        </motion.a>

        <a
          href="#demo"
          data-hover="Watch demo"
          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft hover:text-ink transition-colors duration-300 group"
        >
          <span className="w-10 h-10 rounded-full border border-lines flex items-center justify-center group-hover:border-accent transition-colors duration-300 text-base">
            ▷
          </span>
          Watch demo
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 right-8 hidden md:flex flex-col items-end gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <span className="font-mono text-[10px] text-ink-soft/50 tracking-[0.2em] -rotate-90 origin-right whitespace-nowrap">
          Scroll to explore
        </span>
        <motion.div
          className="w-px bg-gradient-to-b from-ink-soft/50 to-transparent self-center"
          animate={{ height: [20, 60, 20] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Horizontal rule */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "rgba(244,241,234,0.08)" }}
      />
    </section>
  );
}
