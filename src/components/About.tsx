"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

function WordReveal({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <p className="text-2xl md:text-3xl font-display font-semibold leading-snug flex flex-wrap gap-x-2">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: i * 0.04, duration: 0.5 }}
          className={
            word.toLowerCase().includes("aryan") ||
            word.toLowerCase().includes("algorithms") ||
            word.toLowerCase().includes("intelligence") ||
            word.toLowerCase().includes("technology.")
              ? "text-[#D4AF37]"
              : "text-white"
          }
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 md:px-16 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: -2 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] rounded-2xl overflow-hidden glass gold-glow"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-[#050505] flex items-center justify-center">
            <span className="font-display text-8xl text-[#D4AF37]/20 font-extrabold">
              AR
            </span>
          </div>
          <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-2xl" />
        </motion.div>

        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-[0.3em] text-[#D4AF37] mb-6 block"
          >
            ABOUT
          </motion.span>
          <WordReveal text={profile.bio} />

          <div className="mt-10 grid grid-cols-2 gap-4">
            {profile.focus.slice(0, 4).map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="text-xs text-gray-400 border-l border-[#D4AF37]/40 pl-3"
              >
                {f}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-10 text-sm text-gray-500 font-mono"
          >
            {profile.education.degree} · {profile.education.university}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
