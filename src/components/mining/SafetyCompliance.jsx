import { ShieldCheck, HardHat, BadgeCheck, ClipboardCheck, Activity, FileCheck2, Radar } from "lucide-react";
import { safetyCompliance } from "../../data/mining/safetyCompliance";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const icons = { ShieldCheck, HardHat, BadgeCheck, ClipboardCheck, Activity, FileCheck2, Radar };

export default function SafetyCompliance() {
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
            Safety & Compliance
            <span className="h-px w-8 bg-gold" />
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] text-white text-balance">
            Safety is not a checklist — it is how we operate
          </h2>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {safetyCompliance.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.id} delay={(i % 4) * 0.06}>
                <div className="flex h-full flex-col items-start rounded-2xl border border-white/10 bg-white/5 p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-6 font-heading text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
