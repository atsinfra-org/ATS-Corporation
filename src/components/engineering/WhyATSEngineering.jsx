import { Workflow, Users2 } from "lucide-react";
import { stats, highlights } from "../../data/engineering/stats";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const icons = { Workflow, Users2 };

export default function WhyATSEngineering() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why ATS Engineering"
          title="Two decades of engineering discipline"
          align="center"
        />

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <p className="font-heading text-5xl md:text-6xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.1em] text-muted">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          {highlights.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={0.2 + i * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-7">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
