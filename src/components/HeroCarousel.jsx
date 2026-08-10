import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "../data/heroSlides";
import Button from "./ui/Button";

const AUTOPLAY_MS = 6000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const goTo = useCallback((next) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (prefersReducedMotion || paused) return undefined;
    timerRef.current = setTimeout(() => goTo(index + 1), AUTOPLAY_MS);
    return () => clearTimeout(timerRef.current);
  }, [index, goTo, paused, prefersReducedMotion]);

  const slide = heroSlides[index];
  const fadeDuration = prefersReducedMotion ? 0.3 : 1.2;
  const contentDuration = prefersReducedMotion ? 0.25 : 0.7;

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
  };

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-navy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={handleBlur}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: fadeDuration, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            decoding={index === 0 ? "sync" : "async"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40" />
          <div className="absolute inset-0 bg-navy/20" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex min-h-[100svh] w-full items-end pb-28 pt-24 md:pb-32">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -12 }}
              transition={{ duration: contentDuration, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                <span className="h-px w-8 bg-gold" />
                {slide.eyebrow}
              </span>
              <h1 className="mt-5 font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-white text-balance">
                {slide.title}
              </h1>
              <p className="mt-4 font-heading text-lg md:text-xl font-semibold text-white/90">
                {slide.subtitle}
              </p>
              <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-white/70">
                {slide.description}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                {slide.ctas.map((cta) => (
                  <Button key={cta.label} href={cta.href} variant={cta.variant}>
                    {cta.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-10 z-10 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="hidden md:flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/80 transition-all duration-300 hover:border-white hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={1.75} />
        </button>

        <div className="flex items-center gap-3">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className="group relative h-1.5 w-10 overflow-hidden rounded-full bg-white/25"
            >
              {i === index && !prefersReducedMotion && (
                <motion.span
                  key={slide.id}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                  style={{ transformOrigin: "left" }}
                  className="absolute inset-0 bg-gold"
                />
              )}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="hidden md:flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/80 transition-all duration-300 hover:border-white hover:text-white"
        >
          <ChevronRight className="h-4 w-4" strokeWidth={1.75} />
        </button>
      </div>
    </section>
  );
}
