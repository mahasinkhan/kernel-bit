import s from "./home.module.css";
import { fontClass } from "./fonts";

/* TODO: swap these three for your real figures before launch. */
const STATS = [
  { num: "2 weeks", label: "From brief to a costed architecture" },
  
  
];

export default function ProofBand() {
  return (
    <section className={[fontClass, s.tokens, s.white].join(" ")}>
      <div className={s.wrap}>
        <div className={s.proofInner}>
          <div className={[s.plate, s.proofPlate].join(" ")}>
            <div
              className={s.platePhoto}
              style={{ backgroundImage: "url(/images/proof.jpg)" }}
              aria-hidden="true"
            />
            <div className={s.plateEdge} aria-hidden="true" />
          </div>

          <div>
            <p className={s.eyebrow}>Our standard</p>

            <p className={s.quote}>
              If you cannot show where a number came from, you do not have a number.
              You have a rumour.
            </p>

            <p className={s.quoteBody}>
              It is the reason we get hired and the reason we get kept. Every system we
              build carries its lineage with it &mdash; the source record, the model that
              touched it, the rules it passed, the person who signed it off. When the
              auditor, the regulator or the board asks, the answer is already there.
            </p>

            <div className={s.statGrid}>
              {STATS.map((stat) => (
                <div key={stat.num}>
                  <span className={s.statNum}>{stat.num}</span>
                  <span className={s.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

