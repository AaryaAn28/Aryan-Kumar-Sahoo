export default function Footer() {
  return (
    <footer className="relative py-8 px-6 border-t border-[#D4AF37]/10 text-center">
      <p className="font-mono text-[11px] text-gray-600 tracking-wide">
        © {new Date().getFullYear()} Aryan — Crafted with intent.
      </p>
    </footer>
  );
}
