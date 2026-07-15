import s from "./home.module.css";
import { fontClass } from "./fonts";
import HeroGraph from "./HeroGraph";
import HeroParallax from "./HeroParallax";
import HeroWebGLGate from "./HeroWebGLGate";

/* The background graphic is a directed graph: a record moving through the
   system. Five columns, one highlighted route, one pulse travelling it.
   It is drawn, not photographed - so the hero never depends on stock. */

const RAIL = [
  { k: "01", v: "Web & mobile", sub: "Portals, SaaS, iOS and Android" },
  { k: "02", v: "AI solutions", sub: "Assistants, retrieval, agents, evals" },
  { k: "03", v: "Data & analytics", sub: "Warehouses, pipelines, reporting" },
  { k: "04", v: "Cloud & managed IT", sub: "AWS, Azure, GCP, and the run" },
];

export default function Hero() {
  return (
    <section className={[fontClass, s.tokens, s.hero].join(" ")}>
      <HeroParallax />
      <div className={s.bg} data-hero-bg aria-hidden="true">
        <div className={s.bgPlate} />
        <div className={s.bgPhoto} />
        <div className={s.bgScrim} />
        <div className={s.bgMesh} />

        <HeroGraph />
        <HeroWebGLGate />

        <div className={s.bgGrain} />
      </div>

      <div className={s.wrap}>
        <div className={s.heroCopy}>
          <p className={s.eyebrow}>Kolkata &middot; Software, data, AI &amp; cloud</p>

          <h1 className={s.h1}>
            Systems that can{" "}
            <span className={s.serifAccent}>show their working</span>
            <span className={s.sig}>.</span>
          </h1>

          <p className={s.heroLede}>
            We design and build the platforms, apps and AI that regulated businesses run
            on &mdash; engineered so every output can be traced back to the record it
            came from.
          </p>

          <div className={s.heroCtas}>
            <a className={s.btnPrimary} href="#contact">
              Start a conversation
              <span className={s.arrow} aria-hidden="true">&rarr;</span>
            </a>
            <a className={s.btnGhost} href="#capabilities">
              See what we build
            </a>
          </div>
        </div>

        <figure className={s.stamp}>
          <div className={s.tcHead}>
            <span>Output 04812</span>
            <span className={s.tcBadge}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                <path d="M4 12.5l5.2 5.2L20 7" />
              </svg>
              Verified
            </span>
          </div>

          <p className={s.tcTitle}>Transaction reconciled &mdash; 24,500.00</p>

          <ul className={s.tcRows}>
            <li className={s.tcRow}>
              <span className={s.tcKey}>Source</span>
              <span className={s.tcVal}>Ledger entry &middot; ref 8842-QK</span>
            </li>
            <li className={s.tcRow}>
              <span className={s.tcKey}>Model</span>
              <span className={s.tcVal}>recon-v4.2 &middot; 14 Jul 2026</span>
            </li>
            <li className={s.tcRow}>
              <span className={s.tcKey}>Checked</span>
              <span className={s.tcVal}>3 rules &middot; 0 exceptions</span>
            </li>
          </ul>
        </figure>

        <ul className={s.rail}>
          {RAIL.map((item) => (
            <li key={item.k} className={s.railItem}>
              <span className={s.railKey}>{item.k}</span>
              <span className={s.railVal}>{item.v}</span>
              <span className={s.railSub}>{item.sub}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}






