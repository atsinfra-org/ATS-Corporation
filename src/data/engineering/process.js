export const engineeringProcess = [
  {
    id: 'discovery',
    number: '01',
    title: 'Discovery & Feasibility',
    description:
      'We begin by understanding project objectives, site conditions, and stakeholder requirements to establish a clear technical brief.',
    deliverables: [
      'Project brief',
      'Site assessment report',
      'Feasibility assessment',
      'Stakeholder requirements matrix',
    ],
    duration: '1–2 weeks',
    keyActivities: [
      'Site visits and surveys',
      'Stakeholder consultations',
      'Regulatory review ',
      'Constraint mapping',
    ],
    technologies: ['GIS mapping', 'Drone survey', 'Site data logging'],
  },
  {
    id: 'planning',
    number: '02',
    title: 'Planning',
    description:
      'Findings are translated into a structured project plan covering scope, sequencing, resourcing, and risk.',
    deliverables: [
      'Project execution plan',
      'Risk register',
      'Resourcing schedule',
    ],
    duration: '2–3 weeks',
    keyActivities: [
      'Scope definition and sequencing',
      'Risk and constraint analysis',
      'Budget and resource planning',
    ],
    technologies: ['Primavera P6', 'MS Project', 'Cost estimation software'],
  },
  {
    id: 'design',
    number: '03',
    title: 'Concept & Design',
    description:
      'Concept designs are developed and refined through iterative review, balancing performance, cost, and buildability.',
    deliverables: [
      'Concept design package',
      'Design review notes',
      'Preliminary cost estimate',
    ],
    duration: '4–8 weeks',
    keyActivities: [
      'Concept and schematic design',
      'Design coordination workshops',
      'Value engineering review',
    ],
    technologies: ['AutoCAD', 'Revit / BIM', 'SketchUp'],
  },
  {
    id: 'detailed-engineering',
    number: '04',
    title: 'Detailed Engineering & Tendering',
    description:
      'Detailed engineering converts approved designs into precise, build-ready technical documentation and calculations.',
    deliverables: [
      'Detailed engineering drawings',
      'Structural calculations',
      'Technical specifications',
      'BOQs and tender documents',
    ],
    duration: '6–10 weeks',
    keyActivities: [
      'Multidisciplinary engineering coordination',
      'Detailed drafting and documentation',
      'Compliance and code checks',
      'Tender and bid evaluation support',
    ],
    technologies: ['STAAD.Pro', 'ETABS', 'Revit / BIM'],
  },
  {
    id: 'execution-support',
    number: '05',
    title: 'Execution Support',
    description:
      'Our engineers provide on-ground and remote support through construction, resolving technical queries as they arise.',
    deliverables: [
      'Site instruction records',
      'RFI responses',
      'Progress inspection reports',
    ],
    duration: 'Project duration',
    keyActivities: [
      'Site supervision and inspection',
      'Contractor query resolution',
      'Progress monitoring and reporting',
    ],
    technologies: ['Site reporting apps', 'BIM 360', 'Progress dashboards'],
  },
  {
    id: 'QA/QC & Closeout',
    number: '06',
    title: 'QA/QC & Closeout',
    description:
      'Quality assurance, technical inspections, and documentation reviews help ensure project deliverables meet applicable engineering and regulatory requirements.',
    deliverables: [
      'QA/QC audit reports',
      'Non-conformance tracking',
      'Final handover documentation',
    ],
    duration: 'Ongoing through closeout',
    keyActivities: [
      'Quality audits and inspections',
      'Non-conformance resolution',
      'As-built documentation and handover',
    ],
    technologies: [
      'QA/QC checklists',
      'Digital inspection tools',
      'Document control systems',
    ],
  },
];
