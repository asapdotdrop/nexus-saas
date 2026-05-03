"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative py-36 px-6 md:px-12 border-t border-lines text-center overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,87,34,0.08) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      >
        <h2
          className="font-fraunces font-bold text-ink leading-[1.0] max-w-5xl mx-auto"
          style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
        >
          Stop doing{" "}
          <em className="italic text-accent">the same work twice.</em>
        </h2>

        <motion.p
          className="font-body text-ink-soft text-lg max-w-xl mx-auto mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.65 }}
        >
          Join 4,000+ teams already running their business on Nexus.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.65 }}
        >
          <motion.a
            href="#"
            data-hover="Start free"
            className="inline-flex items-center gap-3 bg-accent text-ink font-mono text-[11px] uppercase tracking-[0.15em] px-10 py-5 rounded-full"
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 48px rgba(255,87,34,0.55)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 20 }}
          >
            Start for free
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
            >
              <path
                d="M2.5 7h9M8 3l3.5 4L8 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>

          <a
            href="#"
            data-hover="Talk to sales"
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft hover:text-ink transition-colors duration-300 px-4 py-5"
          >
            Talk to sales →
          </a>
        </motion.div>

        <motion.p
          className="font-mono text-[10px] text-ink-soft/40 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          No credit card required · Free forever plan · Cancel anytime
        </motion.p>
      </motion.div>
    </section>
  );
}
