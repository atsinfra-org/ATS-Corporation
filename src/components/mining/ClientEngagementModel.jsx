import { PhoneCall, ClipboardList, Users, BadgeCheck, Truck, Activity, TrendingUp } from "lucide-react";
import { engagementModel } from "../../data/mining/engagementModel";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const icons = { PhoneCall, ClipboardList, Users, BadgeCheck, Truck, Activity, TrendingUp };

export default function ClientEngagementModel() {
  return (
    <section className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Client Engagement Model"
          title="A clear path from requirement to results"
          align="center"
        />

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div
            className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent lg:left-0 lg:right-0 lg:top-7 lg:bottom-auto lg:h-px lg:w-auto lg:bg-gradient-to-r"
            aria-hidden
          />

          <div className="relative flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-4">
            {engagementModel.map((step, i) => {
              const Icon = icons[step.icon];
              return (
                <Reveal
                  key={step.id}
                  delay={i * 0.05}
                  className="flex items-center gap-4 lg:flex-col lg:items-center lg:gap-4 lg:text-center"
                >
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-white text-primary shadow-soft">
                    <Icon className="h-5.5 w-5.5" strokeWidth={1.6} />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                      {i + 1}
                    </span>
                  </span>
                  <span className="font-heading text-sm font-semibold text-ink lg:max-w-[6.5rem]">
                    {step.label}
                  </span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
