import { Fragment } from "react";
import {
  PhoneCall,
  ClipboardList,
  Users,
  BadgeCheck,
  Truck,
  Activity,
  TrendingUp,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
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

        <Reveal delay={0.1}>
          <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center lg:flex-row lg:flex-wrap lg:justify-center">
            {engagementModel.map((step, i) => {
              const Icon = icons[step.icon];
              const isLast = i === engagementModel.length - 1;
              return (
                <Fragment key={step.id}>
                  <div className="flex flex-col items-center gap-3 px-2 py-3 text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/8 text-primary">
                      <Icon className="h-5.5 w-5.5" strokeWidth={1.6} />
                    </span>
                    <span className="font-heading text-sm font-semibold text-ink">
                      {step.label}
                    </span>
                  </div>
                  {!isLast && (
                    <>
                      <ArrowDown className="my-1 h-4 w-4 text-primary/40 lg:hidden" strokeWidth={1.75} />
                      <ArrowRight
                        className="hidden h-4 w-4 shrink-0 text-primary/40 lg:block"
                        strokeWidth={1.75}
                      />
                    </>
                  )}
                </Fragment>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
