"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-[#D4AF37]">
            TOOLKIT
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="font-mono text-xs tracking-[0.2em] text-[#D4AF37] mb-6">
                {category.toUpperCase()}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{
                      scale: 1.1,
                      y: -4,
                      boxShadow: "0 0 20px rgba(212,175,55,0.4)",
                    }}
                    className="px-4 py-2 rounded-full border border-[#D4AF37]/25 bg-[#111]/60 text-sm text-gray-200 cursor-default transition-transform"
                    data-cursor-hover
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
