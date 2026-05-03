"use client";

import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="py-28 px-6 md:px-12 border-t border-lines">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="font-fraunces text-[6rem] leading-none text-accent/30 mb-2 select-none"
          aria-hidden
        >
          "
        </div>

        <blockquote
          className="font-fraunces italic text-ink leading-[1.18]"
          style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.7rem)" }}
        >
          Nexus replaced{" "}
          <span className="text-accent not-italic font-semibold">
            three internal tools and two engineers
          </span>{" "}
          with a single workflow that thinks for itself. Our ops team hasn&apos;t
          touched it in six months.
        </blockquote>

        <motion.div
          className="mt-10 flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.65 }}
        >
          <div className="w-8 h-px bg-accent mb-4" />
          <span className="font-mono text-sm text-ink">Maya Krishnan</span>
          <span className="font-body text-xs text-ink-soft/70">
            Head of Operations, Series-B fintech
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
