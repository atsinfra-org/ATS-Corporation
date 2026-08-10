import { motion, useReducedMotion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: prefersReducedMotion ? 0.25 : 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col gap-4 max-w-2xl ${alignment}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-gold" : "text-primary"
          }`}
        >
          <span className="h-px w-8 bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading text-balance text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg leading-relaxed ${light ? "text-white/70" : "text-muted"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
