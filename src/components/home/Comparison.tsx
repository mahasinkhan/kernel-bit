import s from "./home.module.css";
import { fontClass } from "./fonts";

const Tick = () => (
  <svg className={s.cmpTick} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12.5l5 5L20 6" />
  </svg>
);

const Cross = () => (
  <svg className={s.cmpCross} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

const ROWS = [
  {
    c: "Who you talk to",
    them: "An account manager relays to the team",
    us: "The engineers building it, directly",
    usTick: true,
  },
  {
    c: "Traceability",
    them: "Outputs, with the working left implicit",
    us: "Every output traces to its source record",
    usTick: true,
  },
  {
    c: "Delivery rhythm",
    them: "A big reveal near the deadline",
    us: "Working software every two weeks",
    usTick: true,
  },
  {
    c: "After launch",
    them: "Handover, then you are on your own",
    us: "We run it \u2014 SLAs, on-call, patching",
    usTick: true,
  },
  {
    c: "Code & IP",
    them: "Sometimes retained or licensed back",
    us: "Yours in full, at the end",
    usTick: true,
  },
  {
    c: "Pricing",
    them: "Scope creep, then a change request",
    us: "Fixed after a two-week discovery",
    usTick: true,
  },
];

export default function Comparison() {
  return (
    <section className={[fontClass, s.tokens, s.ground].join(" ")}>
      <div className={s.wrap}>
        <p className={s.eyebrow}>The difference</p>
        <h2 className={s.h2}>Not the usual agency arrangement.</h2>
        <p className={s.lede}>
          The gap is rarely in the code. It is in who you talk to, how often you see
          progress, and whether anyone is still there when it matters.
        </p>

        <div className={s.cmpWrap}>
          <div className={s.cmpHead}>
            <span className={s.cmpHeadCell}></span>
            <span className={s.cmpHeadCell}>Typical agency</span>
            <span className={[s.cmpHeadCell, s.cmpHeadUs].join(" ")}>
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
                <rect x="13" y="2" width="9" height="9" rx="2" fill="currentColor" opacity="0.4" />
                <rect x="2" y="13" width="9" height="9" rx="2" fill="currentColor" opacity="0.4" />
                <rect x="13" y="13" width="9" height="9" rx="2" fill="currentColor" />
              </svg>
              KernelBit
            </span>
          </div>

          {ROWS.map((r) => (
            <div key={r.c} className={s.cmpRow}>
              <span className={[s.cmpCell, s.cmpCriterion].join(" ")}>{r.c}</span>
              <span className={s.cmpCell} data-label="Typical agency">
                <Cross />
                {r.them}
              </span>
              <span className={[s.cmpCell, s.cmpUs].join(" ")} data-label="KernelBit">
                <Tick />
                {r.us}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
