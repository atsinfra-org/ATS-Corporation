import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Reveal from "./ui/Reveal";
import Container from "./ui/Container";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-surface py-24 md:py-32">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <Reveal className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[20px] bg-navy shadow-lift">
            {/* Portrait placeholder — replace with an approved photograph of Col. Ashutosh Tripathi */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-navy-soft to-navy">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gold/40">
                <ShieldCheck className="h-10 w-10 text-gold" strokeWidth={1.4} />
              </div>
              <div className="text-center">
                <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                  Founder &amp; Chairman
                </p>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-navy/80 px-6 py-5 backdrop-blur-sm">
              <p className="font-heading text-lg font-semibold text-white">
                Col. Ashutosh Tripathi
              </p>
              <p className="mt-0.5 text-sm text-white/50">Indian Army (Retd.)</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-2xl border border-gold/30 md:block" />
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-current" />
              About ATS Corps
            </span>
            <h2 className="mt-5 font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] text-ink text-balance">
              About ATS Corps
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-heading text-2xl md:text-3xl font-semibold leading-snug text-navy text-balance">
              &ldquo;By a Veteran. For Veterans.&rdquo;
            </p>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col gap-5 text-base md:text-lg leading-relaxed text-muted">
            <p>
              ATS Corps was founded on a simple conviction: the discipline, skill, and
              leadership that define a soldier&rsquo;s service should carry forward into a
              lifetime of purpose after uniform. We exist to close the gap between military
              service and civilian enterprise for veterans across Northeast India.
            </p>
            <p>
              Through NEISAC co-working spaces, engineering consultancy, specialist mining
              manpower, and administrative support services, we equip ex-servicemen with the
              infrastructure, expertise, and networks needed to build lasting businesses and
              careers.
            </p>
            <p>
              Every service we offer is built around one standard — the trust and precision
              earned in uniform, now applied to the work of building opportunity.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <motion.a
              href="#opportunities"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Discover our opportunities
              <span aria-hidden>→</span>
            </motion.a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
