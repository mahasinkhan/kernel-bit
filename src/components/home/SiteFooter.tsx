import s from "./home.module.css";
import { fontClass } from "./fonts";

const COLS = [
  {
    head: "Capabilities",
    links: [
      { label: "Web applications", href: "/capabilities" },
      { label: "Mobile apps", href: "/capabilities" },
      { label: "AI solutions", href: "/capabilities" },
      { label: "Data & analytics", href: "/capabilities" },
      { label: "Cloud & DevOps", href: "/capabilities" },
      { label: "Managed IT", href: "/capabilities" },
    ],
  },
  {
    head: "Sectors",
    links: [
      { label: "Financial services", href: "/sectors" },
      { label: "Healthcare", href: "/sectors" },
      { label: "Public sector", href: "/sectors" },
      { label: "Energy & EV mobility", href: "/sectors" },
      { label: "Education", href: "/sectors" },
      { label: "Retail & logistics", href: "/sectors" },
    ],
  },
  {
    head: "Company",
    links: [
      { label: "Work", href: "/work" },
      { label: "How we work", href: "/#how-we-work" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className={[fontClass, s.tokens, s.ftr].join(" ")}>
      <div className={s.ftrWash} aria-hidden="true" />
      <span className={s.ftrWord} aria-hidden="true">KERNELBIT</span>

      <div className={s.wrap}>
        <div className={s.ftrGrid}>
          <div>
            <a className={s.mark} href="/">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
                <rect x="13" y="2" width="9" height="9" rx="2" fill="currentColor" opacity="0.35" />
                <rect x="2" y="13" width="9" height="9" rx="2" fill="currentColor" opacity="0.35" />
                <rect x="13" y="13" width="9" height="9" rx="2" fill="currentColor" />
              </svg>
              <span className={s.markText}>KernelBit</span>
            </a>

            <p className={s.ftrBlurb}>
              We design and build the platforms, apps and AI that regulated businesses
              run on &mdash; engineered so every output can be traced back to the record
              it came from.
            </p>

            {/* TODO: real address */}
            <a className={s.ftrMail} href="mailto:hello@kernelbit.com">
              hello@kernelbit.com
            </a>
          </div>

          {COLS.map((col) => (
            <div key={col.head}>
              <p className={s.ftrHead}>{col.head}</p>
              <ul className={s.ftrList}>
                {col.links.map((link) => (
                  <li key={col.head + link.label}>
                    <a className={s.ftrLink} href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={s.ftrBar}>
          {/* TODO: real company number, VAT number, registered office */}
          <span>
            &copy; 2026 KernelBit &middot; Kolkata, West Bengal, India
          </span>
          <span className={s.ftrLegal}>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </span>

        </div>
      </div>
    </footer>
  );
}






