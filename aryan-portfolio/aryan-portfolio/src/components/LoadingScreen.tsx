"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const totalDuration = 2200;

    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.floor((elapsed / totalDuration) * 100));
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 300);
        setTimeout(onComplete, 1000);
      }
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{
            opacity: 0,
            filter: "blur(20px)",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[200] bg-[#050505] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 1.6 + progress / 60],
              opacity: [0, 1, 1],
            }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="relative w-3 h-3 rounded-full bg-[#D4AF37]"
            style={{ boxShadow: "0 0 40px 10px rgba(212,175,55,0.5)" }}
          >
            <motion.span
              className="absolute inset-0 rounded-full border border-[#D4AF37]/40"
              animate={{ scale: [1, 3.5], opacity: [0.6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 font-mono text-[#D4AF37] text-sm tracking-[0.3em]"
          >
            {String(progress).padStart(2, "0")}%
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
