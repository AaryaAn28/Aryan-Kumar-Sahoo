"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="font-mono text-xs tracking-[0.3em] text-[#D4AF37]">
            SELECTED WORK
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            Projects
          </h2>
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <motion.div
                whileHover={{ rotate: i % 2 === 0 ? -2 : 2, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-video rounded-2xl glass gold-glow overflow-hidden flex items-center justify-center"
              >
                <span className="font-display text-[6rem] font-extrabold text-[#D4AF37]/10">
                  {p.id}
                </span>
                <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-2xl" />
              </motion.div>

              <div>
                <span className="font-mono text-xs text-[#D4AF37]">
                  {p.id} /
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold mt-3 mb-4">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-3 py-1 rounded-full border border-[#D4AF37]/30 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
