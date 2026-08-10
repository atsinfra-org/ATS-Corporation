import DarkCTASection from "./ui/DarkCTASection";
import Button from "./ui/Button";

export default function VeteranCTA({ onRegisterClick, onContactClick }) {
  return (
    <DarkCTASection
      id="veteran-cta"
      eyebrow="Veteran Registration"
      title="Join the ATS Corps Veteran Network"
      description="Register today to access employment opportunities, co-working spaces, consultancy support, and exclusive veteran-focused services."
    >
      <Button as="button" onClick={onRegisterClick} variant="primary">
        Register as Veteran
      </Button>
      <Button as="button" onClick={onContactClick} variant="outline">
        Contact ATS Corps
      </Button>
    </DarkCTASection>
  );
}
