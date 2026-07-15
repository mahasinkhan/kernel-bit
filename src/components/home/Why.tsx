import s from "./home.module.css";
import { fontClass } from "./fonts";

const ICONS = {
  trace: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6h10M4 12h16M4 18h7" /><circle cx="18" cy="6" r="2" /><circle cx="14" cy="18" r="2" />
    </svg>
  ),
  team: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="8" r="3" /><path d="M3.5 20a5.5 5.5 0 0 1 11 0" /><path d="M16 6.2a3 3 0 0 1 0 5.6M18.5 20a5.5 5.5 0 0 0-3-4.9" />
    </svg>
  ),
  ship: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 13l9-9 9 9M6 11v8h12v-8" /><path d="M10 19v-4h4v4" />
    </svg>
  ),
  stay: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.2-2.9 8-7 9-4.1-1-7-4.8-7-9V6l7-3Z" /><path d="M9.3 12l1.9 2 3.5-4" />
    </svg>
  ),
};

const REASONS = [
  { icon: ICONS.trace, title: "Traceable by default", text: "Every output carries its lineage \u2014 source, model, rules, sign-off. When someone asks where a number came from, the answer is already there." },
  { icon: ICONS.team, title: "Engineers, not account managers", text: "You talk to the people building the system, from the first call. No layer of translation between you and the work." },
  { icon: ICONS.ship, title: "Working software every two weeks", text: "Fixed increments, tested and demoed. Progress you can use, not a status deck \u2014 and no surprise in month three." },
  { icon: ICONS.stay, title: "We stay after go-live", text: "SLAs, on-call, patching and the integrations that keep it talking. We run what we build." },
];

export default function WhyKernelBit() {
  return (
    <section className={[fontClass, s.tokens, s.white].join(" ")}>
      <div className={s.wrap}>
        <p className={s.eyebrow}>Why KernelBit</p>
        <h2 className={s.h2}>Built to be answerable.</h2>
        <p className={s.lede}>
          Plenty of firms can write code. Fewer hand you a system that proves its own work,
          ships on a rhythm you can plan around, and is still standing years later.
        </p>

        <div className={s.whyLayout}>
          <div className={s.whyMedia}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async" src="/images/why.jpg" alt="" />
            <span className={s.whyMediaTag}>Our team at work</span>
          </div>

          <div className={s.whyStack}>
            {REASONS.map((r) => (
              <article key={r.title} className={s.whyRow}>
                <span className={s.whyIcon}>{r.icon}</span>
                <div>
                  <h3 className={s.whyRowTitle}>{r.title}</h3>
                  <p className={s.whyRowText}>{r.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

