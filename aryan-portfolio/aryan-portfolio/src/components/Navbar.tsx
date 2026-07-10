"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "DSA Journey", href: "#dsa" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[94%] max-w-3xl"
    >
      <div
        className={`glass rounded-full flex items-center justify-between transition-all duration-500 ${
          scrolled ? "px-4 py-2 gold-glow" : "px-6 py-3"
        }`}
      >
        <a
          href="#home"
          data-cursor-hover
          className="font-display font-bold text-sm tracking-widest text-[#D4AF37]"
        >
          AR.
        </a>

        <div className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-cursor-hover
              className="text-xs tracking-wide text-gray-300 hover:text-[#D4AF37] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          data-cursor-hover
          className="md:hidden text-[#D4AF37] text-xs tracking-widest"
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mt-2 rounded-2xl p-4 flex flex-col gap-3 md:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-gray-300 hover:text-[#D4AF37]"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
