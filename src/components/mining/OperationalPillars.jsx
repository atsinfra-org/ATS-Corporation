import { pillars } from "../../data/mining/pillars";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function OperationalPillars() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <Container className="relative">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Operational Pillars
            <span className="h-px w-8 bg-gold" />
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] text-white text-balance">
            What operational strength looks like on the ground
          </h2>
        </Reveal>

        <div className="mx-auto mt-16 max-w-4xl divide-y divide-white/10">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.id} delay={i * 0.08}>
              <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-[140px_1fr] md:gap-10 md:py-12">
                <span className="font-heading text-6xl font-bold leading-none text-white/10 md:text-7xl">
                  {pillar.number}
                </span>
                <div>
                  <h3 className="font-heading text-2xl font-bold leading-tight text-white md:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/65">
                    {pillar.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/75"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
