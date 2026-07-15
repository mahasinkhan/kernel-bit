import s from "./home.module.css";
import { fontClass } from "./fonts";
import SectionBg from "./SectionBg";

const ICONS = {
  web: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18" />
      <path d="M6.6 6.5h.01M9.4 6.5h.01" />
    </svg>
  ),
  mobile: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.2 18.6h3.6" />
    </svg>
  ),
  ai: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="4.8" r="2.3" />
      <circle cx="5" cy="17.5" r="2.3" />
      <circle cx="19" cy="17.5" r="2.3" />
      <path d="M10.8 6.9 6.2 15.4M13.2 6.9l4.6 8.5M7.3 17.5h9.4" />
    </svg>
  ),
  data: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
    </svg>
  ),
  cloud: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6.8 19a4.3 4.3 0 0 1-.5-8.57 6 6 0 0 1 11.5-1.1A4.25 4.25 0 0 1 17.6 19H6.8Z" />
    </svg>
  ),
  support: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.8 19 5.6v5.3c0 4.3-2.9 8.2-7 9.4-4.1-1.2-7-5.1-7-9.4V5.6l7-2.8Z" />
      <path d="M9.2 11.9 11.1 14l3.7-4.3" />
    </svg>
  ),
};

const CAPS = [
  {
    id: "01",
    icon: ICONS.web,
    title: "Web applications",
    text: "Customer portals, admin consoles and multi-tenant SaaS that stay fast as they grow.",
    tags: ["Next.js", "React", "Node", ".NET", "PostgreSQL"],
  },
  {
    id: "02",
    icon: ICONS.mobile,
    title: "Mobile apps: iOS & Android",
    text: "Native Swift and Kotlin, or one Flutter codebase \u2014 shipped through the stores and kept there.",
    tags: ["Swift", "SwiftUI", "Kotlin", "Flutter"],
  },
  {
    id: "03",
    icon: ICONS.ai,
    title: "AI solutions",
    text: "Assistants, retrieval and agents that cite their sources, with evaluation gates before anything reaches a user.",
    tags: ["LLM apps", "RAG", "Agents", "Evals"],
  },
  {
    id: "04",
    icon: ICONS.data,
    title: "Data modelling & analytics",
    text: "Warehouses, pipelines and a semantic layer, so one number means one thing across the business.",
    tags: ["dbt", "Airflow", "Snowflake", "Power BI"],
  },
  {
    id: "05",
    icon: ICONS.cloud,
    title: "Cloud & DevOps",
    text: "AWS, Azure and GCP built as code, with CI/CD, observability and a cost line you can defend.",
    tags: ["Terraform", "Kubernetes", "CI/CD", "FinOps"],
  },
  {
    id: "06",
    icon: ICONS.support,
    title: "Managed IT & support",
    text: "We stay after go-live: SLAs, on-call, patching, and the integrations that keep it all talking.",
    tags: ["SRE", "On-call", "Security", "Integrations"],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className={[fontClass, s.tokens, s.ground].join(" ")}>
      <SectionBg src="/images/bg/capabilities.jpg" />
      <div className={s.wrap}>
        <p className={s.eyebrow}>What we build</p>
        <h2 className={s.h2}>Six disciplines, one engineering standard.</h2>
        <p className={s.lede}>
          Whichever one you need, the work ships the same way: tested, instrumented,
          documented, and traceable from the interface back to the record.
        </p>

        <div className={s.capGrid}>
          {CAPS.map((cap) => (
            <article key={cap.id} className={s.capCard}>
              <div className={s.capTop}>
                <span className={s.capIcon}>{cap.icon}</span>
                <span className={s.capIndex}>{cap.id}</span>
              </div>
              <h3 className={s.capTitle}>{cap.title}</h3>
              <p className={s.capText}>{cap.text}</p>
              <ul className={s.capTags}>
                {cap.tags.map((tag) => (
                  <li key={tag} className={s.capTag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}




