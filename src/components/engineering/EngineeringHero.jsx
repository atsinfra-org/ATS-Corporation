import { motion, useReducedMotion } from "framer-motion";
import Button from "../ui/Button";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2400&auto=format&fit=crop";

export default function EngineeringHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-navy">
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
        decoding="sync"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/45" />
      <div className="absolute inset-0 bg-navy/25" />

      <div className="relative z-10 flex min-h-[100svh] w-full items-end pb-24 pt-24 md:pb-28">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.3 : 0.8, delay: prefersReducedMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              <span className="h-px w-8 bg-gold" />
              ATS Corps Engineering Division
            </span>
            <h1 className="mt-5 font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-white text-balance">
              Engineering Consultancy
            </h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-white/75">
              Delivering integrated engineering solutions from planning and design to
              execution, ensuring precision, innovation, and long-term value for every
              project.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="#services" variant="primary">
                Explore Services
              </Button>
              <Button href="#projects" variant="outline">
                Our Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
