import s from "./home.module.css";
import { fontClass } from "./fonts";
import SectionBg from "./SectionBg";

export default function CtaBand() {
  return (
    <section id="contact" className={[fontClass, s.tokens, s.cta].join(" ")}>
      <SectionBg src="/images/bg/cta.jpg" onBlue />
      <div className={s.ctaRule} aria-hidden="true" />

      <div className={s.wrap}>
        <div className={s.ctaInner}>
          <div className={s.ctaLeft}>
            <p className={[s.eyebrow, s.ctaEyebrow].join(" ")}>Start a conversation</p>
            <h2 className={s.ctaTitle}>Tell us what you need to prove.</h2>
            <p className={s.ctaBody}>
              Send the problem, the constraints and the deadline. You get an engineer on
              the first call, not a salesperson.
            </p>
            {/* TODO: real address, real phone */}
            <p className={s.ctaMeta}>hello@kernelbit.com &middot; Kolkata &middot; Working globally</p>
          </div>

          <a className={s.btnOnBlue} href="mailto:hello@kernelbit.com">
            Email the team
            <span className={s.arrow} aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}



