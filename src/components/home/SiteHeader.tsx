"use client";

import { useEffect, useState } from "react";
import s from "./home.module.css";
import { fontClass } from "./fonts";

const LINKS = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/sectors", label: "Sectors" },
  { href: "/#how-we-work", label: "How we work" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={[fontClass, s.tokens, s.hdr, stuck ? s.hdrStuck : ""].join(" ")}>
      <div className={[s.wrap, s.hdrInner].join(" ")}>
        <a className={s.mark} href="/">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
            <rect x="13" y="2" width="9" height="9" rx="2" fill="currentColor" opacity="0.35" />
            <rect x="2" y="13" width="9" height="9" rx="2" fill="currentColor" opacity="0.35" />
            <rect x="13" y="13" width="9" height="9" rx="2" fill="currentColor" />
          </svg>
          <span className={s.markText}>KernelBit</span>
        </a>

        <nav className={s.hdrNav} aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} className={s.hdrLink} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={s.hdrRight}>
          <a className={s.hdrCta} href="/contact">Start a conversation</a>

          <button
            type="button"
            className={[s.burger, open ? s.burgerOpen : ""].join(" ")}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open ? (
        <div className={s.sheet}>
          <nav className={s.sheetNav} aria-label="Mobile">
            {LINKS.map((link) => (
              <a key={link.href} className={s.sheetLink} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className={s.btnPrimary} href="/contact" onClick={() => setOpen(false)}>
            Start a conversation
            <span className={s.arrow} aria-hidden="true">&rarr;</span>
          </a>
        </div>
      ) : null}
    </header>
  );
}

