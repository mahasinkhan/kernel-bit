export type Capability = {
  slug: string;
  name: string;
  /** The provenance stage this capability owns. null = cross-cutting. */
  stage: string | null;
  summary: string;
  lede: string;
  body: string[];
  builds: string[];
  proof: string;
  stack: string[];
};
 
export const capabilities: Capability[] = [
  {
    slug: "data-engineering",
    name: "Data Engineering",
    stage: "Ingest",
    summary:
      "Move records out of the systems that hold them hostage, without losing what they said on the way in.",
    lede: "Most data problems are really ingestion problems wearing a disguise.",
    body: [
      "Core banking systems, patient administration systems, telematics gateways and thirty-year-old ledgers all have one thing in common: they were never designed to be read by anyone else. Getting data out of them is the job. Getting it out without quietly changing it is the discipline.",
      "We build pipelines that keep the original message alongside the parsed one, so that when someone asks why a figure moved, the answer is a lookup rather than an investigation.",
    ],
    builds: [
      "Batch and streaming pipelines with replay from source",
      "Change data capture from legacy and vendor systems",
      "Message ingestion: ISO 20022, HL7 v2, FHIR, EDI, MQTT",
      "Raw-message retention with parsed views layered on top",
      "Backfills that do not corrupt the history they land on",
    ],
    proof:
      "Every downstream figure resolves back to the exact byte sequence that arrived, and the time it arrived.",
    stack: ["Python", "TypeScript", "Kafka", "Airflow", "dbt", "Postgres", "Snowflake", "BigQuery"],
  },
  {
    slug: "data-modelling",
    name: "Data Modelling",
    stage: "Model",
    summary:
      "Agree what a customer, a claim or an episode of care actually is \u2014 then hold everyone to it.",
    lede: "Two teams reporting different numbers is almost never a bug. It is two definitions.",
    body: [
      "The expensive arguments in regulated businesses are definitional. What counts as an active customer. When an episode of care begins. Whether a reversed payment was ever a payment. Until those are settled and written down, no dashboard is trustworthy, and no model is either.",
      "We do the unglamorous work of building a semantic layer the business will actually stand behind, then make it the only route to the numbers.",
    ],
    builds: [
      "Dimensional and event models built on a lakehouse",
      "A semantic layer with owned, versioned metric definitions",
      "Data contracts between producing and consuming teams",
      "Lineage from the metric on the slide to the row it came from",
      "Data quality tests that fail loudly, and early",
    ],
    proof:
      "A metric has one definition, one owner, and a lineage graph that runs all the way back to ingestion.",
    stack: ["dbt", "Databricks", "Snowflake", "Iceberg", "Great Expectations", "OpenLineage"],
  },
  {
    slug: "applied-ai",
    name: "Applied AI",
    stage: "Reason",
    summary:
      "Models that go into production, survive an audit, and hand the hard calls back to a human.",
    lede: "In these sectors, an unexplainable model is an unusable model.",
    body: [
      "We build retrieval systems, classifiers, forecasts and agentic workflows \u2014 but the engineering that matters happens around the model, not inside it. Versioned features. Held-out evaluation that ships with the weights. Thresholds tuned against a cost of being wrong that someone senior has signed off.",
      "We are direct about where models should not go. If a decision needs to be contestable by the person it affects, the model recommends and a human decides.",
    ],
    builds: [
      "Retrieval-augmented systems over private, sensitive corpora",
      "Classification, scoring and forecasting in production",
      "Evaluation harnesses with regression gates before deploy",
      "Feature stores with point-in-time correctness",
      "Human-in-the-loop review queues and override trails",
    ],
    proof:
      "Any historic prediction can be reproduced: same model version, same features, same thresholds.",
    stack: ["PyTorch", "MLflow", "LangGraph", "pgvector", "Ray", "Weights & Biases"],
  },
  {
    slug: "analytics",
    name: "Analytics & Decision Products",
    stage: "Serve",
    summary:
      "Get the number in front of the person who has to act on it, in the ten seconds they have.",
    lede: "A dashboard nobody opens is a data project that failed quietly.",
    body: [
      "The last mile is the whole point. A ward sister has ninety seconds. A treasury desk has less. We design decision surfaces around the moment they are used in \u2014 not around the shape of the warehouse behind them.",
      "That usually means fewer charts, sharper thresholds, and an obvious next action.",
    ],
    builds: [
      "Operational dashboards for people mid-shift, not mid-meeting",
      "Real-time alerting with thresholds the business owns",
      "Self-serve exploration on top of the semantic layer",
      "Regulatory and board reporting that reconciles first time",
      "Embedded analytics inside the tools people already use",
    ],
    proof:
      "Every figure on the screen carries a link to its definition and its lineage. No unattributed numbers.",
    stack: ["Next.js", "React", "D3", "Metabase", "Power BI", "DuckDB"],
  },
  {
    slug: "assurance",
    name: "Assurance & Compliance",
    stage: "Assure",
    summary:
      "Build the evidence while you build the system, so the audit is a query rather than a project.",
    lede: "Evidence assembled after the fact is expensive, and it is usually incomplete.",
    body: [
      "Most teams treat compliance as something that happens to them near the end. It costs them twice: once in the scramble, and again in the findings. We wire the evidence in from the first commit \u2014 access logs, lineage, model cards, change records \u2014 so that producing it later is a matter of running a query.",
      "This is the part of our work clients tell us they did not know they could ask for.",
    ],
    builds: [
      "Immutable audit trails across data, models and deployments",
      "Access control with least privilege and short-lived credentials",
      "Model cards and evaluation records held with the weights",
      "Retention and residency policy enforced in the platform, not the wiki",
      "Evidence packs generated on demand for auditors and regulators",
    ],
    proof:
      "The audit question and the production system have the same answer, because they read the same record.",
    stack: ["OpenTelemetry", "OPA", "Terraform", "Vault", "AWS", "Azure"],
  },
  {
    slug: "platform-engineering",
    name: "Platform & Product Engineering",
    stage: null,
    summary:
      "The substrate underneath all of it: the applications, the cloud, and the release process.",
    lede: "Cross-cutting. Everything above runs on this.",
    body: [
      "Web and mobile applications, internal tooling, APIs, infrastructure and the release process that carries them. This is the layer clients most often already have and most often want rebuilt \u2014 usually because deploying has become frightening.",
      "We aim for the unremarkable outcome: small changes, shipped often, easy to reverse.",
    ],
    builds: [
      "Web and mobile products in TypeScript, React, Next.js and Flutter",
      "APIs and services designed for the systems that must consume them",
      "Infrastructure as code across AWS, Azure and GCP",
      "CI/CD where every deploy ties to a ticket, a review and a rollback",
      "Design systems that survive contact with a second team",
    ],
    proof: "Every line in production traces to a reviewed change and a person who approved it.",
    stack: ["TypeScript", "Next.js", "Flutter", "Node", "Go", "Terraform", "Kubernetes"],
  },
];
 
export function getCapability(slug: string) {
  return capabilities.find((c) => c.slug === slug);
}