import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Compass,
  Search,
  Drill,
  Truck,
  AlertTriangle,
  ShieldCheck,
  ClipboardCheck,
  Cog,
  Tent,
  ArrowRight,
  X,
} from "lucide-react";
import { coreServices } from "../../data/mining/services";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Modal from "../ui/Modal";

const icons = { Users, Compass, Search, Drill, Truck, AlertTriangle, ShieldCheck, ClipboardCheck, Cog, Tent };

export default function CoreServices({ onContactClick }) {
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
          eyebrow="Core Services"
          title="Manpower solutions for every stage of mining operations"
          description="From exploration to full-scale extraction, we deploy the right skill mix for every phase of the operation."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreServices.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.id} delay={(i % 4) * 0.06}>
                <motion.button
                  type="button"
                  onClick={() => setActive(service)}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-white text-left shadow-soft"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                    <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary backdrop-blur-sm">
                      <Icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-lg font-semibold text-ink">
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
                  </div>
                </motion.button>
              </Reveal>
            );
          })}
        </div>
      </Container>

      <Modal open={!!active} onClose={close} labelledBy="mining-service-modal-title" className="max-w-lg p-0">
        {active && (
          <>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-[20px]">
              <img
                src={active.image}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent" />
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink backdrop-blur-sm transition-colors hover:bg-white"
              >
                <X className="h-4.5 w-4.5" strokeWidth={1.75} />
              </button>
              <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-primary backdrop-blur-sm">
                {(() => {
                  const Icon = icons[active.icon];
                  return <Icon className="h-5 w-5" strokeWidth={1.6} />;
                })()}
              </span>
            </div>

            <div className="p-6 sm:p-9">
              <h3 id="mining-service-modal-title" className="font-heading text-2xl font-bold text-ink">
                {active.name}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{active.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleContact}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Discuss Your Requirement
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-navy/40"
                >
                  Close
                </button>
              </div>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
