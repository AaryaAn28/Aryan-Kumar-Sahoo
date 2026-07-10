"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { profile } from "@/lib/data";
import ParticleField from "./ParticleField";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.17.69-3.84-1.34-3.84-1.34-.52-1.32-1.27-1.68-1.27-1.68-1.04-.71.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.34-5.21 5.62.41.36.77 1.06.77 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.2.66.79.55 4.51-1.51 7.77-5.76 7.77-10.78C23.02 5.24 18.27.5 12 .5z" />
    </svg>
  );
}

const socials = [
  { label: "GitHub", href: profile.socials.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: LinkedinIcon },
  { label: "Email", href: profile.socials.email, icon: Mail },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-40 px-6 md:px-16 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6 }}
        className="absolute inset-0 bg-gradient-to-t from-[#1a1508]/40 via-transparent to-transparent"
      />
      <ParticleField density={50} interactive={false} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="font-mono text-xs tracking-[0.3em] text-[#D4AF37]">
          GET IN TOUCH
        </span>
        <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-10 leading-tight">
          Let&apos;s Build Something{" "}
          <span className="text-[#D4AF37] text-glow">Amazing</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              data-cursor-hover
              whileHover={{ y: -4, scale: 1.04 }}
              className="glass gold-glow flex items-center gap-2 px-6 py-3 rounded-full text-sm text-gray-200 hover:text-[#D4AF37] transition-colors"
            >
              <s.icon className="w-4 h-4" strokeWidth={1.5} />
              {s.label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
