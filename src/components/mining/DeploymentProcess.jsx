import { ListChecks, Wrench, ShieldCheck } from "lucide-react";
import { deploymentProcess } from "../../data/mining/process";
import ProcessTimeline from "../ui/ProcessTimeline";

const steps = deploymentProcess.map((step) => ({
  ...step,
  details: [
    { icon: ListChecks, label: "Deliverables", items: step.deliverables },
    { icon: Wrench, label: "Key Activities", items: step.keyActivities },
    { icon: ShieldCheck, label: "Compliance Checklist", items: step.complianceChecklist, inline: true, span: true },
  ],
}));

export default function DeploymentProcess() {
  return (
    <ProcessTimeline
      id="process"
      eyebrow="Deployment Process"
      title="A structured process, from requirement to operational support"
      description="Six controlled phases keep every deployment compliant, safe, and on schedule. Select a phase to see how we work."
      steps={steps}
    />
  );
}
