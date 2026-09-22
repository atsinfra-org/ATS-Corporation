import { motion } from "framer-motion";
import { MapPin, Layers, Briefcase } from "lucide-react";
import { featuredProjects } from "../../data/engineering/projects";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const statusStyles = {
  Completed: "bg-primary/10 text-primary",
  Ongoing: "bg-gold/15 text-gold",
  "In Design": "bg-navy/8 text-muted",
};

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-background py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Engineering delivered on the ground"
          description="A selection of representative work across structural, industrial, government, and transportation engineering."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, i) => (
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
                      <Layers className="h-4 w-4 text-navy/50" strokeWidth={1.6} />
                      {project.scope}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <span
                    className={`mt-6 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
