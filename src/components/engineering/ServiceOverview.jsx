import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Layers,
  ClipboardList,
  Users,
  Map,
  PenTool,
  FileSearch2,
  ShieldCheck,
  ArrowRight,
  X,
} from "lucide-react";
import { engineeringServices } from "../../data/engineering/services";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Modal from "../ui/Modal";

const icons = {
  Building2,
  Layers,
  ClipboardList,
  Users,
  Map,
  PenTool,
  FileSearch2,
  ShieldCheck,
};

export default function ServiceOverview({ onContactClick }) {
  const [active, setActive] = useState(null);
  const close = () => setActive(null);

  const handleContact = () => {
    close();
    setTimeout(() => onContactClick?.(), 300);
  };

  return (
    <section id="services" className="bg-surface py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Service Overview"
          title="Engineering services built for precision"
          description="A multi-disciplinary practice covering the full lifecycle of infrastructure and industrial projects, from first feasibility check to final sign-off."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {engineeringServices.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.id} delay={(i % 4) * 0.06}>
                <motion.button
                  type="button"
                  onClick={() => setActive(service)}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group flex h-full w-full flex-col items-start rounded-2xl border border-border bg-white p-7 text-left shadow-soft"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-6 font-heading text-lg font-semibold text-ink">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={1.75}
                    />
                  </span>
                </motion.button>
              </Reveal>
            );
          })}
        </div>
      </Container>

      <Modal open={!!active} onClose={close} labelledBy="eng-service-modal-title" className="max-w-lg p-6 sm:p-9">
        {active && (
          <>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-navy/5 hover:text-ink sm:right-6 sm:top-6"
            >
              <X className="h-4.5 w-4.5" strokeWidth={1.75} />
            </button>

            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/8 text-primary">
              {(() => {
                const Icon = icons[active.icon];
                return <Icon className="h-5 w-5" strokeWidth={1.6} />;
              })()}
            </span>

            <h3 id="eng-service-modal-title" className="mt-6 font-heading text-2xl font-bold text-ink">
              {active.name}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted">{active.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleContact}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Talk to Our Experts
              </button>
              <button
                type="button"
                onClick={close}
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-navy/40"
              >
                Close
              </button>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
