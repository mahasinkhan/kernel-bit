import s from "./home.module.css";
import { fontClass } from "./fonts";

const ICONS = {
  front: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" />
    </svg>
  ),
  back: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4" />
    </svg>
  ),
  mobile: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" />
    </svg>
  ),
  data: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
    </svg>
  ),
  ai: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="5" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="M11 6.5 6 16.5M13 6.5l5 10M7 18h10" />
    </svg>
  ),
  cloud: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 19a4 4 0 0 1-.5-8 6 6 0 0 1 11.5-1A4 4 0 0 1 17.5 19H7Z" />
    </svg>
  ),
};

const GROUPS = [
  { icon: ICONS.front, name: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind", "D3"] },
  { icon: ICONS.back, name: "Backend", items: ["Node", ".NET", "Python", "Go", "GraphQL"] },
  { icon: ICONS.mobile, name: "Mobile", items: ["Swift", "SwiftUI", "Kotlin", "Flutter"] },
  { icon: ICONS.data, name: "Data", items: ["PostgreSQL", "Kafka", "Airflow", "dbt", "Snowflake", "BigQuery"] },
  { icon: ICONS.ai, name: "AI & ML", items: ["PyTorch", "MLflow", "LangGraph", "pgvector", "Ray"] },
  { icon: ICONS.cloud, name: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker"] },
];

export default function TechStack() {
  return (
    <section className={[fontClass, s.tokens, s.white].join(" ")}>
      <div className={s.wrap}>
        <p className={s.eyebrow}>The toolkit</p>
        <h2 className={s.h2}>What we build with.</h2>
        <p className={s.lede}>
          Chosen for fit, not fashion. We work across the stack a modern platform actually
          needs &mdash; and we are honest about the trade-offs of each.
        </p>

        <div className={s.stackGrid}>
          {GROUPS.map((g) => (
            <article key={g.name} className={s.stackCol}>
              <div className={s.stackHead}>
                <span className={s.stackDot}>{g.icon}</span>
                <span className={s.stackName}>{g.name}</span>
              </div>
              <ul className={s.stackList}>
                {g.items.map((t) => (
                  <li key={t} className={s.stackChip}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

