import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function MiningOverview() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <Container className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-current" />
            Overview
            <span className="h-px w-8 bg-current" />
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] text-ink text-balance">
            Industrial workforce solutions, built for scale
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-muted">
            ATS Corporation supplies experienced manpower for mining operations across
            coal, metal, mineral, and industrial sectors. From geological survey teams to
            heavy equipment operators, every deployment is managed with rigorous
            compliance, workforce verification, and safety standards — so operators can
            focus on production while we manage the workforce.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
