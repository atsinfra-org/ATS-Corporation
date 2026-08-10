import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark border border-primary",
  outline:
    "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10",
  dark: "bg-navy text-white hover:bg-navy-soft border border-navy",
  ghost:
    "bg-transparent text-navy border border-navy/15 hover:border-navy/40",
};

const MotionLink = motion.create(Link);

export default function Button({
  as = "a",
  href,
  onClick,
  variant = "primary",
  className = "",
  children,
  type,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`;
  const motionProps = {
    className: classes,
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 25 },
  };

  // Internal routes (e.g. "/engineering") get SPA navigation via react-router;
  // same-page hash anchors (e.g. "#opportunities") stay plain <a> tags.
  if (as === "a" && href?.startsWith("/")) {
    return (
      <MotionLink to={href} onClick={onClick} {...motionProps}>
        {children}
      </MotionLink>
    );
  }

  const Tag = motion[as] ?? motion.a;

  return (
    <Tag
      href={as === "a" ? href : undefined}
      type={as === "button" ? type ?? "button" : undefined}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </Tag>
  );
}
