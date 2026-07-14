export type Sector = {
  slug: string;
  name: string;
  who: string;
  /** The thing that actually keeps their leadership awake. */
  pressure: string;
  we: string[];
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
  },
];