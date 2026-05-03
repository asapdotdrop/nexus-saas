"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = ["N", "E", "X", "U", "S"];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let current = 0;
    const id = setInterval(() => {
      current += Math.random() * 3.5 + 0.8;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(id);
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, 900);
        }, 350);
      } else {
        setProgress(current);
      }
    }, 32);
    return () => clearInterval(id);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          className="fixed inset-0 flex items-center justify-center bg-bg"
          style={{ zIndex: 100 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Letters */}
          <div className="flex gap-1 sm:gap-2 md:gap-3">
            {LETTERS.map((letter, i) => (
              <motion.span
                key={i}
                className="font-fraunces font-bold text-ink leading-none select-none"
                style={{ fontSize: "clamp(3.5rem, 14vw, 10rem)" }}
                initial={{ opacity: 0, y: "35%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.15 + i * 0.09,
                  duration: 0.65,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Progress counter */}
          <motion.div
            className="absolute bottom-8 right-8 font-mono text-sm text-ink-soft tabular-nums"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {String(Math.min(Math.floor(progress), 100)).padStart(3, "0")}%
          </motion.div>

          {/* Sub-label */}
          <motion.div
            className="absolute bottom-8 left-8 font-mono text-xs text-ink-soft/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Initializing experience
          </motion.div>

          {/* Progress line */}
          <div className="absolute bottom-0 left-0 h-[1px] bg-lines w-full">
            <motion.div
              className="h-full bg-accent"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
