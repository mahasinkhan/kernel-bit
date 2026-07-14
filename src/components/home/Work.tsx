import s from "./home.module.css";
import { fontClass } from "./fonts";

/* ============================================================
   TODO - EVERY FIGURE BELOW IS INVENTED. Replace with real
   outcomes from real engagements, or delete this section.
   Anonymised is fine. Fabricated is not.
   ============================================================ */

const WORK = [
  {
    chip: "Financial services",
    num: "9 days to 40 minutes",
    sub: "Month-end close",
    title: "Reconciliation, rebuilt",
    line: "A payments book closed by hand every month. We modelled the records, automated the matching, and left every match explainable.",
    img: "/images/work/01.jpg",
    href: "#contact",
  },
  {
    chip: "Healthcare",
    num: "1.2M records",
    sub: "Migrated, zero loss",
    title: "Twenty years of patient data, moved",
    line: "A legacy clinical system on borrowed time. New data model, staged cutover, and a full audit trail for every row that moved.",
    img: "/images/work/02.jpg",
    href: "#contact",
  },
  {
    chip: "Energy & EV",
    num: "3x listings",
    sub: "Same headcount",
    title: "A marketplace that could take the weight",
    line: "Growth was outrunning the platform. We re-architected the core, shipped in two-week increments, and kept it live throughout.",
    img: "/images/work/03.jpg",
    href: "#contact",
  },
];

export default function Work() {
  return (
    <section id="work" className={[fontClass, s.tokens, s.ground].join(" ")}>
      <div className={s.wrap}>
        <p className={s.eyebrow}>Selected work</p>
        <h2 className={s.h2}>Work we can talk about.</h2>
        <p className={s.lede}>
          Names withheld where the contract says so. The numbers are not.
        </p>

        <div className={s.workGrid}>
          {WORK.map((item) => (
            <a key={item.title} className={s.workCard} href={item.href}>
              <div className={[s.plate, s.workPlate].join(" ")}>
                <div
                  className={s.platePhoto}
                  style={{ backgroundImage: "url(" + item.img + ")" }}
                  aria-hidden="true"
                />
                <span className={s.workChip}>{item.chip}</span>
              </div>

              <div className={s.workBody}>
                <span className={s.workNum}>{item.num}</span>
                <span className={s.workNumSub}>{item.sub}</span>

                <h3 className={s.workTitle}>{item.title}</h3>
                <p className={s.workLine}>{item.line}</p>

                <span className={s.workMore}>
                  Read the case
                  <span className={s.arrow} aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
