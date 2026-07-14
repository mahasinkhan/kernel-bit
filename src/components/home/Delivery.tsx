import s from "./home.module.css";
import { fontClass } from "./fonts";
import SectionBg from "./SectionBg";

const PHASES = [
  {
    no: "01",
    title: "Discover",
    body: "Two weeks. We map the records, the rules and the risk, then price the work.",
    out: "Scope \u00b7 Options \u00b7 Fixed price",
  },
  {
    no: "02",
    title: "Architect",
    body: "Interfaces, data model, security model. Decided and written down before code.",
    out: "Decision records \u00b7 Schema \u00b7 Threat model",
  },
  {
    no: "03",
    title: "Build",
    body: "Two-week increments. Working software every time, with tests and a demo.",
    out: "Increments \u00b7 Test suite \u00b7 Environments",
  },
  {
    no: "04",
    title: "Operate",
    body: "We run it, watch it and improve it, and report in language a board can read.",
    out: "SLAs \u00b7 On-call \u00b7 Telemetry",
  },
];

export default function Delivery() {
  return (
    <section id="how-we-work" className={[fontClass, s.tokens, s.ground, s.hairline].join(" ")}>
      <SectionBg src="/images/bg/delivery.jpg" />
      <div className={s.wrap}>
        <p className={s.eyebrow}>How an engagement runs</p>
        <h2 className={s.h2}>Four phases. No surprises in month three.</h2>
        <p className={s.lede}>
          The same sequence whether we are building an iOS app, a lakehouse or an AI
          assistant. You always know what is being decided, and what you get at the end of it.
        </p>

        <div className={s.dimRail}>
          {PHASES.map((phase) => (
            <article key={phase.no} className={s.dimStep}>
              <span className={s.dimNo}>{phase.no}</span>
              <h3 className={s.dimTitle}>{phase.title}</h3>
              <p className={s.dimBody}>{phase.body}</p>
              <p className={s.dimOut}>{phase.out}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

