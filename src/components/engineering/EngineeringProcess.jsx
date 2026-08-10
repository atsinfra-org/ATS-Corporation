import { ListChecks, Wrench, Cpu } from "lucide-react";
import { engineeringProcess } from "../../data/engineering/process";
import ProcessTimeline from "../ui/ProcessTimeline";

const steps = engineeringProcess.map((step) => ({
  ...step,
  details: [
    { icon: ListChecks, label: "Deliverables", items: step.deliverables },
    { icon: Wrench, label: "Key Activities", items: step.keyActivities },
    { icon: Cpu, label: "Technologies Used", items: step.technologies, inline: true, span: true },
  ],
}));

export default function EngineeringProcess() {
  return (
    <ProcessTimeline
      id="process"
      eyebrow="Engineering Process"
      title="A disciplined process, from discovery to quality assurance"
      description="Six structured phases keep every engagement precise, accountable, and on schedule. Select a phase to see how we work."
      steps={steps}
    />
  );
}
