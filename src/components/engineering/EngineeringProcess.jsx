import { useEffect, useRef, useState } from "react";
import { Clock, ListChecks, Wrench, Cpu } from "lucide-react";
import { engineeringProcess } from "../../data/engineering/process";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function EngineeringProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const blockRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActiveIndex(Number(entry.target.dataset.index));
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    blockRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToStep = (i) => {
    blockRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="process" className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Engineering Process"
          title="A disciplined process, from discovery to quality assurance"
          description="Six structured phases keep every engagement precise, accountable, and on schedule."
        />

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-[40px_1fr] gap-5 sm:grid-cols-[56px_1fr] sm:gap-6">
          <div className="sticky top-28 flex h-fit flex-col gap-5 pt-1.5">
            {engineeringProcess.map((step, i) => (
              <button
                key={step.id}
                type="button"
                onClick={() => scrollToStep(i)}
                aria-label={`Jump to ${step.title}`}
                aria-current={activeIndex === i}
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 font-heading text-[11px] font-bold transition-all duration-300 sm:h-[34px] sm:w-[34px] sm:text-xs ${
                  activeIndex === i
                    ? "border-primary bg-primary/8 text-primary"
                    : "border-border text-muted"
                }`}
              >
                {step.number}
              </button>
            ))}
          </div>

          <div>
            {engineeringProcess.map((step, i) => {
              const isLast = i === engineeringProcess.length - 1;
              return (
                <Reveal key={step.id} delay={0}>
                  <div
                    ref={(el) => (blockRefs.current[i] = el)}
                    data-index={i}
                    className={`scroll-mt-28 ${isLast ? "" : "mb-10 border-b border-border pb-10"}`}
                  >
                    <span className="flex items-center gap-1.5 text-xs font-medium text-muted">
                      <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
                      {step.duration}
                    </span>
                    <h3 className="mt-2 font-heading text-xl font-bold text-ink md:text-2xl">
                      {step.number} — {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                      {step.description}
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <DetailGroup icon={ListChecks} label="Deliverables" items={step.deliverables} />
                      <DetailGroup icon={Wrench} label="Key Activities" items={step.keyActivities} />
                    </div>

                    <div className="mt-6">
                      <DetailGroup icon={Cpu} label="Technologies Used" items={step.technologies} inline />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function DetailGroup({ icon: Icon, label, items, inline = false }) {
  return (
    <div>
      <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
        <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
        {label}
      </span>
      {inline ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {items.map((item) => (
            <span key={item} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-ink">
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
