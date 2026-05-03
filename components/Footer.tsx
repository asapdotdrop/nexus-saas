"use client";

import { motion } from "framer-motion";

const LINKS: Record<string, string[]> = {
  Product: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Resources: ["Documentation", "API Reference", "Status", "Community", "Support"],
};

export default function Footer() {
  return (
    <footer className="border-t border-lines">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-10 px-6 md:px-12 py-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <span className="font-fraunces text-xl font-bold text-ink">
              Nexus
            </span>
            <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
          </div>
          <p className="font-body text-sm text-ink-soft leading-relaxed max-w-[170px]">
            The AI workflow platform that reasons, adapts, and executes.
          </p>
          <div className="flex gap-3 mt-6">
            {["𝕏", "in", "gh"].map((icon) => (
              <a
                key={icon}
                href="#"
                data-hover={icon}
                className="w-8 h-8 rounded-full border border-lines flex items-center justify-center font-mono text-xs text-ink-soft hover:border-accent hover:text-ink transition-all duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(LINKS).map(([category, links], ci) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + ci * 0.08, duration: 0.55 }}
          >
            <div className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] mb-5">
              {category}
            </div>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    data-hover={link}
                    className="font-body text-sm text-ink-soft hover:text-ink transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-lines px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-[10px] text-ink-soft/50">
          © 2026 Nexus Technologies, Inc. All rights reserved.
        </span>
        <span className="font-mono text-[10px] text-ink-soft/50">
          Made with <span className="text-accent">intention</span>
        </span>
      </div>
    </footer>
  );
}
