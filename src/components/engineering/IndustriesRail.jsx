import { Route, Factory, Landmark, Building, TrainFront, Zap, Cog } from "lucide-react";
import { industries } from "../../data/engineering/industries";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const icons = { Route, Factory, Landmark, Building, TrainFront, Zap, Cog };

const railIndustries = [...industries, ...industries];

export default function IndustriesRail() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Industries Served"
          title="Engineering expertise across critical sectors"
          description="From public infrastructure to private industry, our teams bring sector-specific technical knowledge to every engagement."
        />
      </Container>

      <Reveal delay={0.1} className="group relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent md:w-32" />

        <div className="animate-marquee flex w-max gap-4 group-hover:[animation-play-state:paused]">
          {railIndustries.map((industry, i) => {
            const Icon = icons[industry.icon];
            return (
              <div
                key={`${industry.id}-${i}`}
                className="flex w-[280px] shrink-0 items-center gap-4 border border-border bg-background px-6 py-5 sm:w-[320px]"
              >
                <Icon className="h-6 w-6 shrink-0 text-primary" strokeWidth={1.6} />
                <div>
                  <p className="font-heading text-base font-bold text-ink">
                    {industry.name}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-muted">{industry.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
