"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "10×", label: "Faster ops", sub: "versus manual workflows" },
  { value: "200+", label: "Integrations", sub: "and growing every week" },
  { value: "99.9%", label: "Uptime SLA", sub: "enterprise grade" },
  { value: "4k", label: "Teams shipping", sub: "with Nexus today" },
];

export default function Stats() {
  return (
    <section className="border-t border-lines">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            className="border-l border-lines px-6 md:px-10 py-10 first:border-l-0 md:first:border-l-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.65 }}
          >
            <div
              className="font-fraunces font-bold italic text-accent leading-none mb-2"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              {s.value}
            </div>
            <div className="font-mono text-xs text-ink uppercase tracking-widest mb-1">
              {s.label}
            </div>
            <div className="font-body text-xs text-ink-soft/60">{s.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
