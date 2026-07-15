"use client";

import { useState } from "react";
import s from "./home.module.css";
import { fontClass } from "./fonts";

const FAQS = [
  {
    q: "How long is a typical engagement?",
    a: "Three months at minimum. Anything shorter is a demo, not a system. Most build engagements run in two-week increments over three to nine months; managed-run relationships continue for as long as the software is live.",
  },
  {
    q: "Who owns the code and the IP?",
    a: "You do. On a project build, everything we produce is yours at the end \u2014 source, infrastructure definitions, documentation. We do not retain rights to your systems or your data.",
  },
  {
    q: "Do you work with our existing team and stack?",
    a: "Yes. We embed alongside your engineers, work in your rituals, and build on the stack you already run wherever it makes sense. We only recommend replacing something when keeping it costs you more than moving.",
  },
  {
    q: "How do you price?",
    a: "A project build is fixed scope, fixed price, fixed date, agreed after a two-week discovery. An embedded squad is billed monthly. Advisory is a fixed two-week engagement. You always know the number before work starts.",
  },
  {
    q: "What happens to our data?",
    a: "It stays in the region you choose and is never used to train shared models. We build audit trails, access controls and retention policy into the platform itself, so compliance is a query rather than a scramble.",
  },
  {
    q: "Can you start from just a problem, not a spec?",
    a: "That is the normal place to start. Bring the symptom \u2014 the number that will not reconcile, the model nobody trusts, the migration that keeps slipping \u2014 and discovery turns it into a scoped, costed plan.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={[fontClass, s.tokens, s.ground].join(" ")}>
      <div className={s.wrap}>
        <p className={s.eyebrow}>Questions, answered</p>
        <h2 className={s.h2}>The things buyers ask first.</h2>

        <div className={s.faqWrap}>
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={[s.faqItem, isOpen ? s.faqItemOpen : ""].join(" ")}>
                <button
                  type="button"
                  className={s.faqBtn}
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className={s.faqQ}>{item.q}</span>
                  <span className={s.faqSign} aria-hidden="true" />
                </button>
                <div className={s.faqPanel}>
                  <p className={s.faqA}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
