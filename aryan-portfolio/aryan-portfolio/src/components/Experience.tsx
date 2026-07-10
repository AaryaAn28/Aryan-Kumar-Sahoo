"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section className="relative py-32 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="font-mono text-xs tracking-[0.3em] text-[#D4AF37]">
            TIMELINE
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            Experience
          </h2>
        </div>

        <div className="relative pl-10">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ originY: 0 }}
            className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent"
          />

          <div className="flex flex-col gap-14">
            {experience.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                <span className="absolute -left-[43px] top-1.5 w-3 h-3 rounded-full bg-[#D4AF37] gold-glow" />
                <div className="font-mono text-xs text-[#D4AF37] mb-1">
                  {e.period}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {e.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                  {e.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
