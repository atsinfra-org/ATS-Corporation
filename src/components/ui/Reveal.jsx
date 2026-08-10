import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  as = "div",
}) {
  const Tag = motion[as] ?? motion.div;
  const prefersReducedMotion = useReducedMotion();
  const offset = prefersReducedMotion ? 0 : y;
  const activeDelay = prefersReducedMotion ? 0 : delay;

  return (
    <Tag
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: prefersReducedMotion ? 0.25 : 0.7,
        delay: activeDelay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
