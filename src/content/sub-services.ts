/* ---------------------------------------------------------------------------
 * SUB-SERVICES per capability, keyed by slug. Kept separate so the core
 * capabilities file stays untouched. Edit freely - drop anything KernelBit
 * does not actually offer. An honest short list beats an aspirational long one.
 * ------------------------------------------------------------------------ */

export const subServices: Record<string, string[]> = {
  "data-engineering": [
    "Data pipeline design & ETL/ELT",
    "Streaming & real-time ingestion",
    "Data lake & lakehouse architecture",
    "Pipeline orchestration & scheduling",
    "Data quality & validation",
    "Migration from legacy systems",
  ],
  "data-modelling": [
    "Dimensional & semantic modelling",
    "Warehouse schema design",
    "Metrics & semantic layers",
    "Master data management",
    "Data cataloguing & lineage",
    "Governance & access control",
  ],
  "applied-ai": [
    "Retrieval-augmented generation (RAG)",
    "AI assistants & copilots",
    "Document & content intelligence",
    "Agentic workflows",
    "Model evaluation & guardrails",
    "Fine-tuning & prompt engineering",
  ],
  analytics: [
    "BI dashboards & reporting",
    "Self-service analytics",
    "Real-time operational analytics",
    "Forecasting & predictive models",
    "Embedded analytics",
    "KPI & metric frameworks",
  ],
  assurance: [
    "Security & access architecture",
    "Audit trails & lineage",
    "Compliance & data residency",
    "Penetration testing & review",
    "Monitoring & alerting",
    "Incident response & SLAs",
  ],
  "platform-engineering": [
    "Cloud migration (AWS/Azure/GCP)",
    "Infrastructure as code",
    "CI/CD pipelines",
    "Kubernetes & containerisation",
    "Observability & telemetry",
    "Cost optimisation (FinOps)",
  ],
};
