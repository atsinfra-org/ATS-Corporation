export const engineeringProcess = [
  {
    id: "discovery",
    number: "01",
    title: "Discovery",
    description:
      "We begin by understanding project objectives, site conditions, and stakeholder requirements to establish a clear technical brief.",
    deliverables: ["Project brief", "Site assessment report", "Stakeholder requirements matrix"],
    duration: "1–2 weeks",
    keyActivities: [
      "Site visits and surveys",
      "Stakeholder consultations",
      "Regulatory and constraint mapping",
    ],
    technologies: ["GIS mapping", "Drone survey", "Site data logging"],
  },
  {
    id: "planning",
    number: "02",
    title: "Planning",
    description:
      "Findings are translated into a structured project plan covering scope, sequencing, resourcing, and risk.",
    deliverables: ["Project execution plan", "Risk register", "Resourcing schedule"],
    duration: "2–3 weeks",
    keyActivities: [
      "Scope definition and sequencing",
      "Risk and constraint analysis",
      "Budget and resource planning",
    ],
    technologies: ["Primavera P6", "MS Project", "Cost estimation software"],
  },
  {
    id: "design",
    number: "03",
    title: "Design",
    description:
      "Concept designs are developed and refined through iterative review, balancing performance, cost, and buildability.",
    deliverables: ["Concept design package", "Design review notes", "Preliminary cost estimate"],
    duration: "4–8 weeks",
    keyActivities: [
      "Concept and schematic design",
      "Design coordination workshops",
      "Value engineering review",
    ],
    technologies: ["AutoCAD", "Revit / BIM", "SketchUp"],
  },
  {
    id: "engineering",
    number: "04",
    title: "Engineering",
    description:
      "Detailed engineering converts approved designs into precise, build-ready technical documentation and calculations.",
    deliverables: ["Detailed engineering drawings", "Structural calculations", "Technical specifications"],
    duration: "6–10 weeks",
    keyActivities: [
      "Structural and MEP engineering",
      "Detailed drafting and documentation",
      "Compliance and code checks",
    ],
    technologies: ["STAAD.Pro", "ETABS", "Revit / BIM"],
  },
  {
    id: "execution-support",
    number: "05",
    title: "Execution Support",
    description:
      "Our engineers provide on-ground and remote support through construction, resolving technical queries as they arise.",
    deliverables: ["Site instruction records", "RFI responses", "Progress inspection reports"],
    duration: "Project duration",
    keyActivities: [
      "Site supervision and inspection",
      "Contractor query resolution",
      "Progress monitoring and reporting",
    ],
    technologies: ["Site reporting apps", "BIM 360", "Progress dashboards"],
  },
  {
    id: "quality-assurance",
    number: "06",
    title: "Quality Assurance",
    description:
      "Independent quality checks and documentation review ensure every deliverable meets engineering and regulatory standards.",
    deliverables: ["QA/QC audit reports", "Non-conformance tracking", "Final handover documentation"],
    duration: "Ongoing through closeout",
    keyActivities: [
      "Quality audits and inspections",
      "Non-conformance resolution",
      "As-built documentation and handover",
    ],
    technologies: ["QA/QC checklists", "Digital inspection tools", "Document control systems"],
  },
];
