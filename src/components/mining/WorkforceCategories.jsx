import { Ruler, Mountain, Compass, Truck, ShieldCheck, ClipboardCheck, Hammer, Users, UserCheck } from "lucide-react";
import { workforceCategories } from "../../data/mining/workforceCategories";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const icons = { Ruler, Mountain, Compass, Truck, ShieldCheck, ClipboardCheck, Hammer, Users, UserCheck };

const deploymentStyles = {
  "Long-term": { badge: "bg-primary/10 text-primary", accent: "bg-primary", icon: "bg-primary/8 text-primary" },
  "Project-based": { badge: "bg-gold/15 text-[#9a7b1f]", accent: "bg-gold", icon: "bg-gold/12 text-[#9a7b1f]" },
  Flexible: { badge: "bg-navy/8 text-muted", accent: "bg-navy/30", icon: "bg-navy/6 text-navy" },
};

export default function WorkforceCategories() {
  return (
    <section className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Workforce Categories"
          title="A full spectrum of mining workforce roles"
          description="From engineers to skilled labour, every role is sourced, verified, and deployed against your project's operational needs."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workforceCategories.map((category, i) => {
            const Icon = icons[category.icon];
            const styles = deploymentStyles[category.deploymentType];
            return (
              <Reveal key={category.id} delay={(i % 3) * 0.06}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-lift">
                  <span className={`absolute inset-y-0 left-0 w-1 ${styles.accent}`} aria-hidden />
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 ${styles.icon}`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}>
                      {category.deploymentType}
                    </span>
                  </div>
                  <h3 className="mt-6 font-heading text-lg font-semibold text-ink">
                    {category.role}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {category.responsibilities}
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
