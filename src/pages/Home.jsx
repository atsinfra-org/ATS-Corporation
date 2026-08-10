import HeroCarousel from "../components/HeroCarousel";
import AboutSection from "../components/AboutSection";
import OpportunitiesSection from "../components/OpportunitiesSection";
import ServicesGrid from "../components/ServicesGrid";
import VeteranCTA from "../components/VeteranCTA";

export default function Home({ onOpenRegistration }) {
  return (
    <main>
      <HeroCarousel />
      <AboutSection />
      <OpportunitiesSection />
      <ServicesGrid onContactClick={() => onOpenRegistration("contact")} />
      <VeteranCTA
        onRegisterClick={() => onOpenRegistration("veteran")}
        onContactClick={() => onOpenRegistration("contact")}
      />
    </main>
  );
}
