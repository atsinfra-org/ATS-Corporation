import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "NEISAC", href: "/#opportunities" },
  { label: "Engineering", href: "/engineering", internal: true },
  { label: "Mining", href: "/mining-manpower", internal: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever navigation actually happens.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-white shadow-[0_1px_0_0_rgba(17,24,39,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span
            className={`h-2 w-2 rounded-full bg-gold transition-transform duration-500 group-hover:scale-125`}
          />
          <span
            className={`font-heading text-lg font-bold tracking-tight transition-colors duration-500 ${
              solid ? "text-ink" : "text-white"
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

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-500 sm:hidden ${
            solid ? "text-ink hover:bg-navy/5" : "text-white hover:bg-white/10"
          }`}
        >
          {menuOpen ? (
            <X className="h-5 w-5" strokeWidth={1.75} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={1.75} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-navy/8 bg-white sm:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((link) =>
                link.internal ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="border-b border-navy/8 py-4 text-base font-semibold text-ink last:border-b-0"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="border-b border-navy/8 py-4 text-base font-semibold text-ink last:border-b-0"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
