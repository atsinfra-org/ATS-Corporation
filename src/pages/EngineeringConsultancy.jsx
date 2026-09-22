import EngineeringHero from "../components/engineering/EngineeringHero";
import ServiceOverview from "../components/engineering/ServiceOverview";
import EngineeringProcess from "../components/engineering/EngineeringProcess";
import IndustriesRail from "../components/engineering/IndustriesRail";
import FeaturedProjects from "../components/engineering/FeaturedProjects";
import WhyATSEngineering from "../components/engineering/WhyATSEngineering";
import DarkCTASection from "../components/ui/DarkCTASection";
import Button from "../components/ui/Button";

export default function EngineeringConsultancy({ onOpenRegistration }) {
  return (
    <main className="bg-background">
      <EngineeringHero />
      <ServiceOverview onContactClick={() => onOpenRegistration("contact")} />
      <EngineeringProcess />
      <IndustriesRail />
      <FeaturedProjects />
      <WhyATSEngineering />
      <DarkCTASection
        id="engineering-cta"
        eyebrow="Get In Touch"
        title="Let's Build the Future Together"
        description="Speak with our engineering team about your next infrastructure, industrial, or advisory project."
      >
        <Button as="button" onClick={() => onOpenRegistration("contact")} variant="primary">
          Talk to Our Experts
        </Button>
      </DarkCTASection>
    </main>
  );
}
