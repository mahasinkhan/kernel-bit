/* ---------------------------------------------------------------------------
 * CASE STUDIES - DUMMY CONTENT. Every metric and detail is a placeholder.
 * Replace with real, anonymised engagements before relying on this page.
 * The numbers especially: do NOT ship invented figures to a real client.
 * ------------------------------------------------------------------------ */

export type CaseStudy = {
  slug: string;
  client: string;        // real name or "A <sector> provider"
  sector: string;
  title: string;
  summary: string;
  image: string;
  metrics: { value: string; label: string }[];
  challenge: string;
  approach: string[];
  outcome: string;
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "learning-platform-scale",
    client: "A national training provider", // TODO real / anonymised name
    sector: "Education & training",
    title: "A learning platform that held under load",
    summary:
      "Rebuilding an assessment and course-delivery platform so it stayed fast as enrolment grew from thousands to tens of thousands.",
    image: "/images/work/learning.jpg",
    metrics: [
      { value: "TODO", label: "Concurrent learners supported" },
      { value: "TODO", label: "Reduction in page load time" },
      { value: "TODO", label: "Assessments delivered / month" },
    ],
    challenge:
      "The existing platform slowed to a crawl at exam time, exactly when it could not afford to. Enrolment was climbing and the architecture had not been built for it.",
    approach: [
      "Mapped the real bottlenecks under simulated exam-day load before touching code.",
      "Rebuilt the delivery path on a modern stack with caching and a queue for heavy operations.",
      "Shipped in two-week increments so the team saw progress and could plan the cutover.",
    ],
    outcome:
      "The platform now handles peak assessment periods without degradation, and the team can see load and cost in one dashboard. TODO: replace with the real, measured result.",
    stack: ["Next.js", "Node", "PostgreSQL", "Redis", "AWS"],
  },
  {
    slug: "marketplace-rearchitecture",
    client: "An EV & solar marketplace", // TODO
    sector: "Energy & EV mobility",
    title: "A marketplace re-architected for growth",
    summary:
      "Re-architecting the core of a multi-sided marketplace so listings, asset data and telemetry could scale without a rebuild.",
    image: "/images/work/marketplace.jpg",
    metrics: [
      { value: "TODO", label: "Increase in listings handled" },
      { value: "TODO", label: "Faster search response" },
      { value: "TODO", label: "Uptime through the migration" },
    ],
    challenge:
      "Growth was outrunning the platform. Every new category of asset data meant fighting the architecture rather than extending it.",
    approach: [
      "Separated the core domains so each could scale and change independently.",
      "Introduced an event backbone for telemetry and asset updates at grid-facing volume.",
      "Migrated live, in stages, with a full audit trail for every record that moved.",
    ],
    outcome:
      "The platform took on far more listings on the same footprint, and adding a new asset type is now a feature, not a project. TODO: replace with the real figure.",
    stack: ["React", "Node", "Kafka", "PostgreSQL", "Kubernetes"],
  },
  {
    slug: "examination-portal",
    client: "A public examination body", // TODO
    sector: "Public sector",
    title: "An examination portal built to be audited",
    summary:
      "A multi-tenant examination portal where every result can be traced back to the answer it came from, years later.",
    image: "/images/work/exam.jpg",
    metrics: [
      { value: "TODO", label: "Exams sat on the platform" },
      { value: "TODO", label: "Retention of audit evidence" },
      { value: "TODO", label: "Institutions onboarded" },
    ],
    challenge:
      "Results have to be defensible on appeal, sometimes years after the exam. The old system could not show its working.",
    approach: [
      "Designed the data model so the original submission is never overwritten.",
      "Built a review queue for contested results rather than silent auto-decisions.",
      "Made the whole lineage searchable, from a single result back to the raw submission.",
    ],
    outcome:
      "When a result is challenged, the evidence is already there. Appeals are a query, not an investigation. TODO: replace with the real outcome.",
    stack: ["Next.js", ".NET", "PostgreSQL", "Azure"],
  },
];
