import { motion } from "framer-motion";
import { MapPin, Users, Clock, Briefcase } from "lucide-react";
import { featuredEngagements } from "../../data/mining/engagements";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

export default function FeaturedEngagements() {
  return (
    <section id="engagements" className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Featured Engagements"
          title="Workforce deployed, operations sustained"
          description="A selection of representative manpower engagements across mining and industrial operations."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {featuredEngagements.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col overflow-hidden border border-border bg-white"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                    <Briefcase className="h-3.5 w-3.5" strokeWidth={2} />
                    {project.type}
                  </span>
                  <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold text-ink">
                    {project.name}
                  </h3>

                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-navy/50" strokeWidth={1.6} />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-navy/50" strokeWidth={1.6} />
                      {project.manpowerDeployed}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-navy/50" strokeWidth={1.6} />
                      {project.duration}
                    </span>
                  </div>

                  <p className="mt-4 text-sm font-medium text-ink">{project.scope}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{project.overview}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
