import { MapPin } from "lucide-react";
import { states } from "../data/states";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const statusStyles = {
  Operational: "bg-primary/10 text-primary",
  Expanding: "bg-gold/15 text-[#9a7b1f]",
  "Coming Soon": "bg-navy/8 text-muted",
};

const marqueeStates = [...states, ...states];

export default function OpportunitiesSection() {
  return (
    <section id="opportunities" className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="NEISAC Opportunities"
          title="Growing opportunities for veterans across Northeast India"
          description="NEISAC co-working spaces and support services are steadily expanding across the region, opening new avenues for veteran-led enterprise."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal className="relative">
            <div className="flex h-[420px] lg:h-[520px] items-center justify-center overflow-hidden rounded-[20px] border border-navy/8 bg-white p-8 shadow-soft">
              <img
                src="/States.png"
                alt="Map highlighting NEISAC operational states: West Bengal, Assam, Arunachal Pradesh, and Mizoram"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-2xl border border-gold/30 md:block" />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="group relative h-[420px] lg:h-[520px] overflow-hidden rounded-[20px] border border-navy/8 bg-white shadow-soft">
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-white to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-white to-transparent" />

              <div className="animate-marquee-vertical flex flex-col group-hover:[animation-play-state:paused]">
                {marqueeStates.map((state, i) => (
                  <div
                    key={`${state.name}-${i}`}
                    className="flex flex-col gap-3 border-b border-navy/8 px-6 py-8 first:pt-10 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:px-8"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy">
                        <MapPin className="h-4 w-4" strokeWidth={1.6} />
                      </span>
                      <div>
                        <h3 className="font-heading text-xl sm:text-2xl md:text-[1.7rem] font-bold leading-tight text-ink">
                          {state.name}
                        </h3>
                        <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-muted">
                          {state.description}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`ml-14 self-start shrink-0 rounded-full px-3 py-1 text-xs font-semibold sm:ml-0 ${statusStyles[state.status]}`}
                    >
                      {state.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
