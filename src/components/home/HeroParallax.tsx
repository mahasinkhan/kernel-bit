"use client";

import { useEffect } from "react";

/* Drifts the hero photo on scroll by setting --kb-py on the .bg element.
   No layout change - pure transform. Disabled for reduced-motion. */

export default function HeroParallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bg = document.querySelector<HTMLElement>("[data-hero-bg]");
    if (!bg) return;

    let raf = 0, cur = 0, target = 0;
    const onScroll = () => { target = window.scrollY * 0.15; if (!raf) raf = requestAnimationFrame(tick); };
    const tick = () => {
      cur += (target - cur) * 0.12;
      bg.style.setProperty("--kb-py", cur.toFixed(1) + "px");
      raf = Math.abs(target - cur) > 0.3 ? requestAnimationFrame(tick) : 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return null;
}
