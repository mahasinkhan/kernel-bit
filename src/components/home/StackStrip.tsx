import s from "./home.module.css";
import { fontClass } from "./fonts";

/* Trim this to what you actually staff. An honest list sells better than a long one. */
const STACK = [
  "Next.js", "React", "TypeScript", "Node", ".NET", "Python",
  "Swift", "Kotlin", "Flutter", "PostgreSQL", "Kafka", "Airflow",
  "dbt", "Snowflake", "BigQuery", "Databricks", "PyTorch", "LangChain",
  "AWS", "Azure", "GCP", "Kubernetes", "Terraform", "GitHub Actions",
];

function Track() {
  return (
    <div className={s.track}>
      {STACK.map((tech) => (
        <span key={tech} className={s.trackItem}>
          {tech}
          <span className={s.trackDot} aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export default function StackStrip() {
  return (
    <div className={[fontClass, s.tokens, s.stackWrap].join(" ")} aria-label="Technologies we work in">
      <div className={s.marquee} aria-hidden="true">
        <Track />
        <Track />
      </div>
    </div>
  );
}
