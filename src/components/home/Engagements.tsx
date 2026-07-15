import s from "./home.module.css";
import { fontClass } from "./fonts";
import SectionBg from "./SectionBg";

const MODELS = [
  {
    ref: "Model A",
    title: "Project build",
    line: "Fixed scope, fixed price, fixed date. You own it at the end.",
    best: "A defined system with a deadline",
  },
  {
    ref: "Model B",
    title: "Embedded squad",
    line: "A KernelBit team inside yours, month by month, in your rituals.",
    best: "A roadmap that keeps moving",
  },
  {
    ref: "Model C",
    title: "Advisory",
    line: "Architecture review, data strategy, AI readiness. Two weeks, written up.",
    best: "A decision before a build",
  },
  {
    ref: "Model D",
    title: "Managed run",
    line: "We keep it live: SLAs, on-call, patching, and the boring parts done properly.",
    best: "Anything already in production",
  },
];

export default function Engagements() {
  return (
    <section className={[fontClass, s.tokens, s.wash].join(" ")}>
      <SectionBg src="/images/bg/engagements.jpg" />
      <div className={s.wrap}>
        <p className={s.eyebrow}>Ways to work with us</p>
        <h2 className={s.h2}>Pick the shape that fits the problem.</h2>

        <div className={s.tbGrid}>
          {MODELS.map((item) => (
            <article key={item.ref} className={s.tb}>
              <div className={s.tbHead}>
                <span>{item.ref}</span>
                <span aria-hidden="true">+</span>
              </div>
              <div className={s.tbBody}>
                <h3 className={s.tbTitle}>{item.title}</h3>
                <p className={s.tbLine}>{item.line}</p>
                <p className={s.tbMeta}>Best for: {item.best}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



