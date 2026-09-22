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

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-auto lg:grid-cols-4 lg:[grid-auto-flow:dense]">
          {coreServices.map((service, i) => {
            const Icon = icons[service.icon];
            const featured = !!service.featured;
            return (
              <Reveal
                key={service.id}
                delay={(i % 4) * 0.06}
                className={featured ? "sm:col-span-2 lg:col-span-2" : ""}
              >
                <motion.button
                  type="button"
                  onClick={() => setActive(service)}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group flex h-full w-full flex-col overflow-hidden border border-border bg-white text-left"
                >
                  <div
                    className={`relative w-full overflow-hidden ${
                      featured ? "aspect-[8/5]" : "aspect-[4/5]"
                    }`}
                  >
                    <img
                      src={service.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className={`flex flex-1 flex-col ${featured ? "p-7 md:p-8" : "p-6"}`}>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                      Core Service
                    </span>
                    <h3
                      className={`mt-3 font-heading font-bold leading-tight text-ink ${
                        featured ? "text-2xl md:text-3xl uppercase" : "text-lg md:text-xl"
                      }`}
                    >
                      {service.name}
                    </h3>
                    <p
                      className={`mt-3 leading-relaxed text-muted ${
                        featured ? "max-w-md text-base" : "text-sm"
                      }`}
                    >
                      {service.description}
                    </p>
                    <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-semibold text-navy">
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
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={active.image}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink backdrop-blur-sm transition-colors hover:bg-white"
              >
                <X className="h-4.5 w-4.5" strokeWidth={1.75} />
              </button>
            </div>

            <div className="p-6 sm:p-9">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                {(() => {
                  const Icon = icons[active.icon];
                  return <Icon className="h-3.5 w-3.5" strokeWidth={2} />;
                })()}
                Core Service
              </span>
              <h3
                id="mining-service-modal-title"
                className="mt-3 font-heading text-2xl font-bold leading-tight text-ink"
              >
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
