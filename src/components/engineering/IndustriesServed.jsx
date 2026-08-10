import { motion } from "framer-motion";
import { Route, Factory, Landmark, Building, TrainFront, Zap, Cog } from "lucide-react";
import { industries } from "../../data/engineering/industries";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const icons = { Route, Factory, Landmark, Building, TrainFront, Zap, Cog };

export default function IndustriesServed() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Industries Served"
          title="Engineering expertise across critical sectors"
          description="From public infrastructure to private industry, our teams bring sector-specific technical knowledge to every engagement."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, i) => {
            const Icon = icons[industry.icon];
            return (
              <Reveal key={industry.id} delay={(i % 4) * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white p-7 shadow-soft"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-6 font-heading text-lg font-semibold text-ink">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {industry.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
