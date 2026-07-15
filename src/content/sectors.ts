export type SectorSolution = {
  title: string;
  blurb: string;
  points: string[];
};

export type SectorDetail = {
  image: string;
  intro: string;
  solutions: SectorSolution[];
  approach: string[];
  stack: string[];
  note?: string;
};

export type Sector = {
  slug: string;
  name: string;
  who: string;
  pressure: string;
  we: string[];
  detail?: SectorDetail;
};

export const sectors: Sector[] = [
  {
    slug: "financial-services",
    name: "Financial Services",
    who: "Banks, payment firms, lenders, insurers and asset managers.",
    pressure:
      "Customers expect instant. Regulators expect the trail. The core system was written in 1998 and nobody wants to touch it.",
    we: [
      "Payment and ledger integration",
      "Risk, fraud and financial crime models",
      "Regulatory and board reporting that reconciles",
      "Migration off systems that cannot be migrated off",
    ],
    detail: {
      image: "/images/pages/sectors/financial-services.jpg",
      intro:
        "Money movement is unforgiving: it has to be instant, correct and defensible all at once. We build the platforms and models that let a financial business move fast without losing the audit trail underneath.",
      solutions: [
        {
          title: "Payments & ledger platforms",
          blurb: "Move money and keep a perfect record of every movement.",
          points: [
            "Real-time payment integration and reconciliation",
            "Double-entry ledgers with full lineage",
            "ISO 20022 message handling end to end",
            "Settlement and clearing workflows",
          ],
        },
        {
          title: "Risk, fraud & financial crime",
          blurb: "Models that catch what matters and explain why they flagged it.",
          points: [
            "Transaction monitoring and anomaly detection",
            "Sanctions and PEP screening pipelines",
            "Credit and affordability scoring",
            "Every alert reproducible to its inputs",
          ],
        },
        {
          title: "Regulatory & board reporting",
          blurb: "Reporting that reconciles the first time, every time.",
          points: [
            "Automated regulatory return generation",
            "Board and management dashboards",
            "One figure, one definition, one lineage",
            "Evidence packs ready for the regulator",
          ],
        },
        {
          title: "Core migration",
          blurb: "Move off the system nobody wants to touch, safely.",
          points: [
            "Strangler-pattern migration, live and staged",
            "Full audit trail for every migrated record",
            "Parallel-run and reconciliation tooling",
            "No big-bang cutover risk",
          ],
        },
      ],
      approach: [
        "We start where the money moves and work outward, so the highest-risk path is proven first.",
        "Every figure carries its lineage, so a regulator's question is a query, not an investigation.",
        "We migrate in stages you can reverse, never a single irreversible cutover.",
      ],
      stack: ["Python", "Kafka", "PostgreSQL", "dbt", "Snowflake", "Terraform", "AWS"],
    },
  },
  {
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    who: "Providers, payers, med-tech and research groups.",
    pressure:
      "The patient's data sits in eleven systems and none of them agree. Clinicians pay for that in time they do not have.",
    we: [
      "HL7 and FHIR interoperability, done properly",
      "A single patient timeline across systems",
      "Clinical decision support with a visible basis",
      "Information governance built into the platform",
    ],
    detail: {
      image: "/images/pages/sectors/healthcare.jpg",
      intro:
        "Healthcare software carries a duty ordinary software does not: it has to be right, it has to be private, and it has to keep the clinician in control of every decision. We build platforms that unify scattered patient data into one trustworthy record \u2014 and that recommend, never overrule.",
      solutions: [
        {
          title: "Universal patient timeline",
          blurb:
            "One secure digital identity and one lifetime medical record, instead of eleven systems that disagree.",
          points: [
            "Every visit, admission, prescription and report in one chronological view",
            "Labs, imaging, surgeries, allergies and chronic conditions unified",
            "AI summary surfaces current illness, medications and risk factors in seconds",
            "Fewer duplicate tests, faster consultations, safer emergencies",
          ],
        },
        {
          title: "AI clinical documentation assistant",
          blurb:
            "Cut the documentation burden \u2014 the doctor speaks, the system drafts, the clinician approves.",
          points: [
            "Voice consultation to structured notes, diagnosis and prescription",
            "Medicine interaction and allergy warnings at the point of prescribing",
            "Suggested investigations and follow-up dates",
            "The model drafts; the clinician reviews and signs off every time",
          ],
        },
        {
          title: "Emergency mode",
          blurb: "Critical patient information in seconds, when seconds matter.",
          points: [
            "QR or patient ID scan surfaces blood group, allergies, current medicines",
            "Key conditions and emergency contacts at a glance",
            "Built for the unconscious-patient scenario",
            "Role-based access controls every view",
          ],
        },
        {
          title: "Smart bed, ICU & operations dashboard",
          blurb: "Real-time visibility of every bed, ventilator and theatre.",
          points: [
            "Live bed, ICU and ventilator occupancy",
            "Operation theatre scheduling and emergency case flow",
            "Predictive alerts for high-risk patients (advisory, clinician-reviewed)",
            "Capacity understood at a glance by management",
          ],
        },
        {
          title: "Digital nursing & patient app",
          blurb: "Support nurses through every shift, and give patients their own record.",
          points: [
            "Medication, IV, vitals and blood-sugar reminders with shift handover",
            "Patient app: history, reports, appointments, bill payment, reminders",
            "Secure, authorised sharing of records with another clinician",
            "Standardised nursing documentation, fewer missed tasks",
          ],
        },
        {
          title: "Interoperability & governance",
          blurb: "HL7/FHIR done properly, with ABDM integration and governance built in.",
          points: [
            "HL7 v2 and FHIR interoperability across existing systems",
            "ABDM integration with patient consent, where appropriate",
            "Role-based access, audit logs, encryption and 2FA throughout",
            "Multi-branch and multi-language (English, Hindi, Bengali and more)",
          ],
        },
      ],
      approach: [
        "The model recommends and a human decides \u2014 clinicians stay in control of every medical decision.",
        "Governance is built into the platform, not bolted on: access control, audit logs and encryption from the first commit.",
        "We unify what exists before we replace anything, so the patient record gets more trustworthy, not more fragmented.",
      ],
      stack: ["TypeScript", "Next.js", "FHIR", "PostgreSQL", "Python", "Azure"],
      note:
        "Predictive and AI features are advisory and always reviewed by qualified clinicians. Nothing here replaces clinical judgement.",
    },
  },
  {
    slug: "energy-mobility",
    name: "Energy & Mobility",
    who: "EV, solar, storage and fleet operators.",
    pressure:
      "Assets emit telemetry faster than anyone can model it, and the commercial questions change every quarter.",
    we: [
      "Telemetry ingestion at asset scale",
      "Forecasting for generation, demand and utilisation",
      "Marketplace and settlement platforms",
      "Field and installer apps that work with no signal",
    ],
    detail: {
      image: "/images/pages/sectors/energy-mobility.jpg",
      intro:
        "Energy and mobility assets generate data faster than most businesses can use it. We build the ingestion, forecasting and marketplace platforms that turn a firehose of telemetry into commercial decisions.",
      solutions: [
        {
          title: "Telemetry at asset scale",
          blurb: "Ingest millions of readings without dropping one.",
          points: [
            "High-volume streaming ingestion from EV, solar and storage assets",
            "Event backbone for real-time processing",
            "Raw-reading retention with modelled views on top",
            "MQTT and IoT gateway integration",
          ],
        },
        {
          title: "Forecasting & optimisation",
          blurb: "Predict generation, demand and utilisation with a basis you can show.",
          points: [
            "Generation and demand forecasting",
            "Fleet utilisation and charging optimisation",
            "Battery and storage dispatch modelling",
            "Reproducible predictions, versioned and evaluated",
          ],
        },
        {
          title: "Marketplace & settlement",
          blurb: "Multi-sided platforms that scale as categories grow.",
          points: [
            "Listings, matching and settlement workflows",
            "Asset and pricing data at grid-facing volume",
            "Audit trail for every transaction",
            "Add a new asset type as a feature, not a rebuild",
          ],
        },
        {
          title: "Field & installer apps",
          blurb: "Apps that keep working when the signal does not.",
          points: [
            "Offline-first field and installer applications",
            "Automatic sync and conflict resolution on reconnect",
            "Asset commissioning and inspection flows",
            "Built for basements, rooftops and remote sites",
          ],
        },
      ],
      approach: [
        "We design for the volume the assets actually produce, not a demo-sized sample.",
        "Forecasts ship with their evaluation, so a commercial team can trust the number.",
        "Field apps assume no signal by default and sync cleanly when it returns.",
      ],
      stack: ["Kafka", "Python", "TimescaleDB", "React", "Flutter", "Kubernetes"],
    },
  },
  {
    slug: "public-sector",
    name: "Public Sector & Education",
    who: "Skills bodies, awarding organisations and citizen services.",
    pressure:
      "High scrutiny, fixed budgets, ten-year horizons \u2014 and a procurement process that punishes guessing.",
    we: [
      "Learning, training and examination platforms",
      "Assessment integrity and identity assurance",
      "Accessibility to WCAG 2.2 AA as a baseline",
      "Reporting that stands up to public inspection",
    ],
    detail: {
      image: "/images/pages/sectors/public-sector.jpg",
      intro:
        "Public-sector and education software lives under scrutiny: it must be accessible, defensible and built to last a decade. We build learning, assessment and citizen platforms that stand up to public inspection.",
      solutions: [
        {
          title: "Learning & examination platforms",
          blurb: "Platforms that hold up on results day, at scale.",
          points: [
            "Course delivery and assessment at tens of thousands concurrent",
            "Examination portals built to be audited years later",
            "Results defensible on appeal, traced to the submission",
            "Load-tested against real peak conditions",
          ],
        },
        {
          title: "Assessment integrity & identity",
          blurb: "Prove who sat it and that the result is sound.",
          points: [
            "Identity assurance and proctoring integration",
            "Submission lineage that is never overwritten",
            "Review queues for contested results",
            "Tamper-evident audit trails",
          ],
        },
        {
          title: "Accessible by default",
          blurb: "WCAG 2.2 AA as a baseline, not an afterthought.",
          points: [
            "Accessibility built in from the first component",
            "Tested with assistive technology, not just linters",
            "Documented conformance for procurement",
            "Usable under real-world constraints",
          ],
        },
        {
          title: "Reporting & transparency",
          blurb: "Reporting that stands up to public inspection.",
          points: [
            "Board, regulator and public-facing reporting",
            "Every figure defined, owned and traceable",
            "Evidence packs on demand",
            "Built for freedom-of-information scrutiny",
          ],
        },
      ],
      approach: [
        "Accessibility and audit are requirements from day one, because retrofitting them is where public projects fail.",
        "Every result traces back to the submission it came from, so an appeal is a lookup.",
        "We build for the ten-year horizon these organisations actually plan against.",
      ],
      stack: ["Next.js", ".NET", "PostgreSQL", "TypeScript", "Azure"],
    },
  },
];

export function getSector(slug: string) {
  return sectors.find((s) => s.slug === slug);
}
