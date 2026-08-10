import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Clock } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function ProcessTimeline({ id, eyebrow, title, description, steps }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const active = steps[activeIndex];

  return (
    <section id={id} className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-16">
          <div
            className="flex gap-1 overflow-x-auto pb-2 sm:gap-2"
            role="tablist"
            aria-label={eyebrow}
          >
            {steps.map((step, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={step.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(i)}
                  className="group relative flex shrink-0 flex-col items-start gap-3 px-4 py-4 text-left sm:flex-1 sm:px-2"
                >
                  <span
                    className={`h-1 w-full rounded-full transition-colors duration-300 ${
                      isActive ? "bg-primary" : i < activeIndex ? "bg-primary/40" : "bg-navy/10"
                    }`}
                  />
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`font-heading text-sm font-bold transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-muted"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`font-heading text-sm sm:text-base font-semibold whitespace-nowrap transition-colors duration-300 ${
                        isActive ? "text-ink" : "text-muted"
                      }`}
                    >
                      {step.title}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <Reveal key={active.id} y={16} className="mt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
                transition={{ duration: prefersReducedMotion ? 0.15 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 gap-10 rounded-[20px] border border-border bg-white p-8 shadow-soft md:grid-cols-[1fr_1.3fr] md:p-12"
              >
                <div>
                  <span className="font-heading text-6xl font-bold text-primary/15">
                    {active.number}
                  </span>
                  <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-ink">
                    {active.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {active.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy/5 px-4 py-2 text-sm font-semibold text-navy">
                    <Clock className="h-4 w-4 text-primary" strokeWidth={1.75} />
                    {active.duration}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {active.details.map((detail) => (
                    <ProcessDetail key={detail.label} {...detail} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ProcessDetail({ icon: Icon, label, items, inline = false, span = false }) {
  return (
    <div className={span ? "sm:col-span-2" : ""}>
      <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
        <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
        {label}
      </span>
      {inline ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-ink"
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <ul className="mt-3 flex flex-col gap-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-navy/30" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
