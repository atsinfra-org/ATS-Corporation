import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import AnimatedCounter from "../ui/AnimatedCounter";
import { stats } from "../../data/mining/stats";

const OVERVIEW_IMAGE =
  "https://images.unsplash.com/photo-1781546441738-b85e43e733e3?q=80&w=1400&auto=format&fit=crop";

export default function MiningOverview() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
        <div className="flex flex-col gap-6 lg:order-1">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-current" />
              Overview
            </span>
            <h2 className="mt-5 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] text-ink text-balance">
              Industrial workforce solutions, built for scale
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-5 text-base md:text-lg leading-relaxed text-muted">
            <p>
              ATS Corporation supplies experienced manpower for mining operations across
              coal, metal, mineral, and industrial sectors. From geological survey teams
              to heavy equipment operators, every deployment is managed with rigorous
              compliance, workforce verification, and safety standards.
            </p>
            <p>
              Operators focus on production. We manage the workforce — sourcing,
              verification, safety orientation, and on-site support, from a single
              accountable team.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-2 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl font-bold text-primary md:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative lg:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] shadow-lift">
            <img
              src={OVERVIEW_IMAGE}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-2xl border border-gold/30 md:block" />
        </Reveal>
      </Container>
    </section>
  );
}
