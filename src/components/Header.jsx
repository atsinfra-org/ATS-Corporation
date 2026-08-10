import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "NEISAC", href: "/#opportunities" },
  { label: "Engineering", href: "/engineering", internal: true },
  { label: "Mining", href: "/mining-manpower", internal: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-white shadow-[0_1px_0_0_rgba(17,24,39,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span
            className={`h-2 w-2 rounded-full bg-gold transition-transform duration-500 group-hover:scale-125`}
          />
          <span
            className={`font-heading text-lg font-bold tracking-tight transition-colors duration-500 ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            ATS Corps
          </span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex md:gap-8">
          {navLinks.map((link) =>
            link.internal ? (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors duration-500 ${
                  scrolled ? "text-ink hover:text-primary" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors duration-500 ${
                  scrolled ? "text-ink hover:text-primary" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ),
          )}
        </nav>
      </div>
    </motion.header>
  );
}
