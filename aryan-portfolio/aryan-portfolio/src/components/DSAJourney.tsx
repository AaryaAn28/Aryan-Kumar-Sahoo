"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { codingStats, leetcode, github, topics } from "@/lib/data";

function Counter({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl md:text-5xl font-bold text-[#D4AF37] text-glow">
        {animated}
        {suffix}
      </div>
      <div className="text-xs text-gray-400 mt-2 tracking-wide">{label}</div>
    </div>
  );
}

const CONTRIBUTION_LEVELS = [0.08, 0.2, 0.4, 0.65, 0.95];

function seededLevel(i: number) {
  const seed = Math.sin(i * 12.9898) * 43758.5453;
  const frac = seed - Math.floor(seed);
  return CONTRIBUTION_LEVELS[Math.floor(frac * CONTRIBUTION_LEVELS.length)];
}

function CircularProgress({ name, value }: { name: string; value: number }) {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-20 h-20">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="#1a1a1a"
            strokeWidth="5"
            fill="none"
          />
          <motion.circle
            cx="40"
            cy="40"
            r={radius}
            stroke="#D4AF37"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{
              strokeDashoffset: circumference - (value / 100) * circumference,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-[#D4AF37]">
          {value}%
        </div>
      </div>
      <span className="text-[11px] text-gray-400 text-center">{name}</span>
    </div>
  );
}

export default function DSAJourney() {
  return (
    <section id="dsa" className="relative py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-[#D4AF37]">
            DASHBOARD
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            {"My DSA Journey".split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* stats card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8 mb-8"
        >
          <Counter value={codingStats.problemsSolved} suffix="+" label="Problems Solved" />
          <Counter value={codingStats.easy} label="Easy" />
          <Counter value={codingStats.medium} label="Medium" />
          <Counter value={codingStats.hard} label="Hard" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* LeetCode card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" /> LeetCode
              Profile
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <Counter value={leetcode.totalSolved} suffix="+" label="Total Solved" />
              <Counter value={leetcode.contestRating} label="Contest Rating" />
              <Counter value={leetcode.currentStreak} label="Day Streak" />
              <Counter value={leetcode.badges} label="Badges" />
            </div>
          </motion.div>

          {/* GitHub card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" /> GitHub
              Activity
            </h3>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <Counter value={github.repositories} label="Repositories" />
              <Counter value={github.contributions} suffix="+" label="Contributions" />
            </div>
            {/* mini contribution graph */}
            <div className="grid grid-cols-[repeat(26,minmax(0,1fr))] gap-[3px]">
              {Array.from({ length: 91 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.004 }}
                  className="w-full aspect-square rounded-[2px]"
                  style={{
                    backgroundColor: `rgba(212,175,55,${seededLevel(i)})`,
                  }}
                />
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {github.topLanguages.map((lang) => (
                <span
                  key={lang}
                  className="text-[10px] font-mono px-2 py-1 rounded-full border border-[#D4AF37]/30 text-gray-300"
                >
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* topic progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass rounded-2xl p-8 flex flex-wrap justify-around gap-8"
        >
          {topics.map((t) => (
            <CircularProgress key={t.name} name={t.name} value={t.value} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
