"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-[#D4AF37]">
            RECOGNITION
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            Achievements
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, borderColor: "rgba(212,175,55,0.6)" }}
              data-cursor-hover
              className="glass rounded-2xl p-6 border border-[#D4AF37]/15 transition-colors"
            >
              <Award className="w-6 h-6 text-[#D4AF37] mb-4" strokeWidth={1.5} />
              <div className="font-mono text-[10px] tracking-widest text-gray-500 mb-2">
                {a.category.toUpperCase()}
              </div>
              <h3 className="font-display font-semibold text-base leading-snug">
                {a.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
