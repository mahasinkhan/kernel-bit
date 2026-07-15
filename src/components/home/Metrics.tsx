import s from "./home.module.css";
import { fontClass } from "./fonts";

/* ============================================================
   TODO - REPLACE THE DASHES WITH REAL NUMBERS BEFORE LAUNCH.
   Do not invent figures. Use what you can actually stand behind:
   projects shipped, years running, team size, uptime you meet.
   Delete this whole section if you would rather show nothing
   than a partial set.
   ============================================================ */

const METRICS = [
  { num: "\u2014", label: "Projects delivered" },
  { num: "\u2014", label: "Years building for regulated sectors" },
  { num: "\u2014", label: "Engineers on the team" },
  { num: "\u2014", label: "Uptime we hold on managed platforms" },
];

export default function Metrics() {
  return (
    <section className={[fontClass, s.tokens, s.metricBand].join(" ")}>
      <div className={s.metricRule} aria-hidden="true" />
      <div className={s.wrap}>
        <div className={s.metricGrid}>
          {METRICS.map((m) => (
            <div key={m.label} className={s.metricCell}>
              <span className={s.metricNum}>{m.num}</span>
              <span className={s.metricLabel}>{m.label}</span>
            </div>
          ))}
        </div>
        <p className={s.metricNote}>Figures updated as engagements complete</p>
      </div>
    </section>
  );
}
