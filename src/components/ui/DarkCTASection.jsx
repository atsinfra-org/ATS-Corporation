import Container from "./Container";
import Reveal from "./Reveal";

export default function DarkCTASection({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="relative overflow-hidden bg-navy py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />

      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-8 bg-gold" />
            {eyebrow}
            <span className="h-px w-8 bg-gold" />
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="max-w-3xl font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] text-white text-balance">
            {title}
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="max-w-xl text-base md:text-lg leading-relaxed text-white/70">
            {description}
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-2 flex flex-wrap items-center justify-center gap-4">
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
