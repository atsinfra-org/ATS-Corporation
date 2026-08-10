import { UserCheck } from "lucide-react";
import { workforceCategories } from "../../data/mining/workforceCategories";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const deploymentStyles = {
  "Long-term": "bg-primary/10 text-primary",
  "Project-based": "bg-gold/15 text-[#9a7b1f]",
  Flexible: "bg-navy/8 text-muted",
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
          {workforceCategories.map((category, i) => (
            <Reveal key={category.id} delay={(i % 3) * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-soft">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy/5 text-navy">
                    <UserCheck className="h-4.5 w-4.5" strokeWidth={1.6} />
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${deploymentStyles[category.deploymentType]}`}
                  >
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
          ))}
        </div>
      </Container>
    </section>
  );
}
