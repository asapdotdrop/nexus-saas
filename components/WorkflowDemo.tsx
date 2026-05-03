"use client";

import { motion } from "framer-motion";

const NODES = [
  { id: 1, label: "Trigger event", x: 200, y: 55, accent: true },
  { id: 2, label: "AI decision", x: 95, y: 160, accent: false },
  { id: 3, label: "Run action", x: 305, y: 160, accent: false },
  { id: 4, label: "Notify team", x: 200, y: 265, accent: true },
];

const EDGES = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 3 },
];

const STEPS = [
  "Any trigger from any connected tool or data source",
  "AI models evaluate context and choose the right path",
  "Execute actions across 200+ integrations instantly",
  "Notify the right people in the right channel, every time",
];

export default function WorkflowDemo() {
  return (
    <section
      className="py-24 px-6 md:px-12 border-t border-lines"
      id="product"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        {/* Visual */}
        <motion.div
          className="relative rounded-2xl border border-lines bg-bg-2 overflow-hidden"
          style={{ height: "360px" }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Grid dots background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(244,241,234,0.3) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <svg
            viewBox="0 0 400 320"
            className="absolute inset-0 w-full h-full p-6"
          >
            {/* Edges */}
            {EDGES.map((edge, i) => {
              const from = NODES[edge.from];
              const to = NODES[edge.to];
              return (
                <motion.path
                  key={i}
                  d={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
                  stroke="rgba(244,241,234,0.18)"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.18, duration: 0.85 }}
                  className="dash-animated"
                />
              );
            })}

            {/* Nodes */}
            {NODES.map((node, i) => (
              <motion.g
                key={node.id}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.14,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 280,
                }}
              >
                <motion.g
                  animate={{ y: [0, node.id % 2 === 0 ? -5 : -7, 0] }}
                  transition={{
                    duration: 2.4 + i * 0.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.25,
                  }}
                >
                  <rect
                    x={node.x - 52}
                    y={node.y - 17}
                    width="104"
                    height="34"
                    rx="8"
                    fill="#14141c"
                    stroke={node.accent ? "#ff5722" : "rgba(244,241,234,0.15)"}
                    strokeWidth="1"
                  />
                  {node.accent && (
                    <rect
                      x={node.x - 52}
                      y={node.y - 17}
                      width="104"
                      height="34"
                      rx="8"
                      fill="rgba(255,87,34,0.06)"
                    />
                  )}
                  <text
                    x={node.x}
                    y={node.y + 5}
                    textAnchor="middle"
                    fontSize="10"
                    fontFamily="monospace"
                    fill={
                      node.accent ? "#ff5722" : "rgba(244,241,234,0.75)"
                    }
                    letterSpacing="0.05em"
                  >
                    {node.label}
                  </text>
                </motion.g>
              </motion.g>
            ))}
          </svg>
        </motion.div>

        {/* Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">
              — How it works
            </span>
            <h2
              className="font-fraunces font-bold text-ink mt-3 mb-10 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Four steps from{" "}
              <em className="italic text-accent">idea to automation</em>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                className="group flex items-center gap-5 py-5 border-b border-lines"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
                data-hover={`Step ${i + 1}`}
              >
                <span className="font-mono text-xs text-accent shrink-0 w-7">
                  0{i + 1}
                </span>
                <span className="font-body text-sm text-ink-soft group-hover:text-ink transition-all duration-300 group-hover:translate-x-1 inline-block">
                  {step}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
