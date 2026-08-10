import { Users, Truck, FileCheck2, ShieldCheck, BadgeCheck, MapPin, Activity, ClipboardList } from "lucide-react";
import { whyChooseUs } from "../../data/mining/whyChooseUs";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const icons = { Users, Truck, FileCheck2, ShieldCheck, BadgeCheck, MapPin, Activity, ClipboardList };

export default function WhyChooseATS() {
  return (
    <section className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Choose ATS Mining Manpower"
          title="Operational strength you can build on"
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.id} delay={(i % 4) * 0.06}>
                <div className="flex h-full flex-col items-start rounded-2xl border border-border bg-white p-7 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/8 text-primary">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-6 font-heading text-base font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
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
