import s from "./home.module.css";
import { fontClass } from "./fonts";
import SectionBg from "./SectionBg";

/* Photos live in /public/images/sectors/ under exactly these names.
   Anything you drop in gets toned to the brand palette. If a file is
   missing, the blue plate shows and nothing looks broken. */

const SECTORS = [
  {
    name: "Financial services",
    tag: "Audited",
    line: "Payments, reconciliation and reporting that survive a request for the audit trail.",
    img: "/images/sectors/finance.jpg",
  },
  {
    name: "Healthcare",
    tag: "Safety-critical",
    line: "Clinical data and patient records, handled with the care the setting demands.",
    img: "/images/sectors/healthcare.jpg",
  },
  {
    name: "Public sector",
    tag: "Procurement-ready",
    line: "Accessible, documented builds that stand up to scrutiny and to handover.",
    img: "/images/sectors/public-sector.jpg",
  },
  {
    name: "Energy & EV mobility",
    tag: "Telemetry",
    line: "Marketplaces, asset data and solar / EV telemetry at grid-facing scale.",
    img: "/images/sectors/energy.jpg",
  },
  {
    name: "Education & training",
    tag: "At scale",
    line: "Learning platforms, assessment and analytics for thousands of learners at once.",
    img: "/images/sectors/education.jpg",
  },
  {
    name: "Retail & logistics",
    tag: "Real-time",
    line: "Storefronts, inventory and forecasting that hold up on the busiest day of the year.",
    img: "/images/sectors/retail.jpg",
  },
];

export default function Sectors() {
  return (
    <section id="sectors" className={[fontClass, s.tokens, s.white].join(" ")}>
      <SectionBg src="/images/bg/sectors.jpg" />
      <div className={s.wrap}>
        <p className={s.eyebrow}>Sectors</p>
        <h2 className={s.h2}>Where the record has to hold up.</h2>
        <p className={s.lede}>
          We work best where software is answerable to someone &mdash; a regulator, an
          auditor, a clinician, a board.
        </p>

        <div className={s.sectorGrid}>
          {SECTORS.map((item) => (
            <article key={item.name} className={s.sectorCard}>
              <div className={[s.plate, s.sectorPlate].join(" ")}>
                <div
                  className={s.platePhoto}
                  style={{ backgroundImage: "url(" + item.img + ")" }}
                  aria-hidden="true"
                />
                <span className={s.sectorTag}>{item.tag}</span>
              </div>
              <div className={s.sectorBody}>
                <h3 className={s.sectorName}>{item.name}</h3>
                <p className={s.sectorLine}>{item.line}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}




