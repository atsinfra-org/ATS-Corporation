import { Ruler, Mountain, Compass, Truck, ShieldCheck, ClipboardCheck, Hammer, Users, UserCheck } from "lucide-react";
import { workforceCategories } from "../../data/mining/workforceCategories";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const icons = { Ruler, Mountain, Compass, Truck, ShieldCheck, ClipboardCheck, Hammer, Users, UserCheck };

const GROUPS = [
  {
    type: "Long-term",
    label: "Long-Term Placements",
    description: "Embedded roles for the life of the operation.",
  },
  {
    type: "Project-based",
    label: "Project-Based Deployment",
    description: "Scoped to a program's duration.",
  },
  {
    type: "Flexible",
    label: "Flexible Workforce",
    description: "Scaled up or down against shift demand.",
  },
];

export default function WorkforceCategories() {
  return (
    <section className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Workforce Categories"
          title="A full spectrum of mining workforce roles"
          description="From engineers to skilled labour, every role is sourced, verified, and deployed against your project's operational needs."
        />

        <div className="mt-16 flex flex-col gap-14">
          {GROUPS.map((group) => {
            const roles = workforceCategories.filter((c) => c.deploymentType === group.type);
            return (
              <Reveal key={group.type}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-heading text-xl font-bold text-ink md:text-2xl">
                    {group.label}
                  </h3>
                  <p className="text-sm text-muted">{group.description}</p>
                </div>

                <div className="mt-6 divide-y divide-border border-t border-border">
                  {roles.map((category) => {
                    const Icon = icons[category.icon];
                    return (
                      <div
                        key={category.id}
                        className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:gap-8"
                      >
                        <span className="flex shrink-0 items-center gap-3 sm:w-56">
                          <Icon className="h-4.5 w-4.5 text-primary" strokeWidth={1.6} />
                          <span className="font-heading text-base font-semibold text-ink">
                            {category.role}
                          </span>
                        </span>
                        <p className="text-sm leading-relaxed text-muted">
                          {category.responsibilities}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
