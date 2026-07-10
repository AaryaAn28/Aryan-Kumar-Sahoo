"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticleField from "./ParticleField";
import { profile } from "@/lib/data";

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, 28);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse text-[#D4AF37]">|</span>
    </span>
  );
}

function MagneticButton({
  children,
  href,
  primary,
}: {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.a
      href={href}
      data-cursor-hover
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: (e.clientX - rect.left - rect.width / 2) * 0.3,
          y: (e.clientY - rect.top - rect.height / 2) * 0.3,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className={`px-7 py-3 rounded-full text-xs tracking-[0.15em] font-medium transition-colors ${
        primary
          ? "bg-[#D4AF37] text-black hover:bg-[#e8c458]"
          : "glass text-white hover:text-[#D4AF37]"
      }`}
    >
      {children}
    </motion.a>
  );
}

const NAME = profile.name.split("");

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* background grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.25) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      <ParticleField density={80} />

      {/* ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px]" />

      {/* rotating abstract object */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] pointer-events-none"
        style={{
          background:
            "conic-gradient(from 0deg, transparent, rgba(212,175,55,0.25), transparent 40%)",
          borderRadius: "42% 58% 65% 35% / 45% 45% 55% 55%",
          filter: "blur(1px)",
        }}
      />
      <motion.div
        animate={{ rotate: -360, y: [0, -14, 0] }}
        transition={{
          rotate: { duration: 28, repeat: Infinity, ease: "linear" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[260px] md:h-[260px] border border-[#D4AF37]/30 pointer-events-none"
        style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.6 }}
          className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-[#888] mb-6"
        >
          BSC DATA SCIENCE — ITER, SOA UNIVERSITY
        </motion.div>

        <h1 className="font-display font-extrabold text-[16vw] md:text-[9rem] leading-none flex">
          {NAME.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 2.8 + i * 0.12,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-glow"
              style={{
                background: "linear-gradient(180deg, #fff 40%, #D4AF37 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 0.7 }}
          className="mt-6 text-base md:text-lg text-gray-300 tracking-wide"
        >
          {profile.roles.join("  ·  ")}
        </motion.p>

        <div className="mt-4 h-6 font-mono text-xs md:text-sm text-[#D4AF37]/90">
          <TypingText text={profile.tagline} delay={4200} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.4, duration: 0.7 }}
          className="mt-10 flex items-center gap-4"
        >
          <MagneticButton href="#projects" primary>
            VIEW PROJECTS
          </MagneticButton>
          <MagneticButton href="/resume.pdf">DOWNLOAD RESUME</MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-[#888]"
      >
        <span className="text-[10px] tracking-[0.3em] font-mono">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[#D4AF37] to-transparent"
        />
      </motion.div>
    </section>
  );
}
