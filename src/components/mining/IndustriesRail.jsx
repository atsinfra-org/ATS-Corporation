import { Mountain, Pickaxe, Gem, Search, Truck, Building2, Factory, Cog, Zap } from "lucide-react";
import { industries } from "../../data/mining/industries";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const icons = { Mountain, Pickaxe, Gem, Search, Truck, Building2, Factory, Cog, Zap };

const railIndustries = [...industries, ...industries];

export default function IndustriesRail() {
  return (
    <section className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Industries Served"
          title="Manpower deployed across the industrial spectrum"
          description="From coal seams to cement plants, our workforce is deployed wherever heavy industry operates."
        />
      </Container>

      <Reveal delay={0.1} className="group relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-32" />

        <div className="animate-marquee flex w-max gap-4 group-hover:[animation-play-state:paused]">
          {railIndustries.map((industry, i) => {
            const Icon = icons[industry.icon];
            return (
              <div
                key={`${industry.id}-${i}`}
                className="flex w-[280px] shrink-0 items-center gap-4 border border-border bg-white px-6 py-5 sm:w-[320px]"
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
