import MiningHero from "../components/mining/MiningHero";
import MiningOverview from "../components/mining/MiningOverview";
import CoreServices from "../components/mining/CoreServices";
import WorkforceCategories from "../components/mining/WorkforceCategories";
import DeploymentProcess from "../components/mining/DeploymentProcess";
import OperationalPillars from "../components/mining/OperationalPillars";
import FeaturedEngagements from "../components/mining/FeaturedEngagements";
import ClientEngagementModel from "../components/mining/ClientEngagementModel";
import IndustriesRail from "../components/mining/IndustriesRail";
import DarkCTASection from "../components/ui/DarkCTASection";
import Button from "../components/ui/Button";

export default function MiningManpower({ onOpenRegistration }) {
  return (
    <main className="bg-background">
      <MiningHero onOpenRegistration={onOpenRegistration} />
      <MiningOverview />
      <CoreServices onContactClick={() => onOpenRegistration("contact")} />
      <WorkforceCategories />
      <DeploymentProcess />
      <OperationalPillars />
      <FeaturedEngagements />
      <ClientEngagementModel />
      <IndustriesRail />
      <DarkCTASection
        id="mining-cta"
        eyebrow="Get In Touch"
        title="Strengthening Mining Operations with Skilled Workforce Solutions"
        description="Partner with ATS Corporation for dependable, safety-focused, and industry-ready manpower solutions tailored to your operational requirements."
      >
        <Button as="button" onClick={() => onOpenRegistration("contact")} variant="primary">
          Discuss Your Requirement
        </Button>
      </DarkCTASection>
    </main>
  );
}
