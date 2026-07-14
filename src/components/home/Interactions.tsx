"use client";

import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import s from "./home.module.css";

export default function Interactions() {
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const off: Array<() => void> = [];

    if (fine && !reduce) {
      /* buttons lean toward the cursor - 5px, no more */
      const mags = document.querySelectorAll<HTMLElement>(
        "." + s.btnPrimary + ",." + s.btnOnBlue + ",." + s.hdrCta
      );
      mags.forEach((el) => {
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
          const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
          el.style.transform = "translate(" + (dx * 5).toFixed(2) + "px," + (dy * 4).toFixed(2) + "px)";
        };
        const out = () => { el.style.transform = ""; };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", out);
        off.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", out);
          out();
        });
      });

      /* every card lights where the cursor is */
      const cards = document.querySelectorAll<HTMLElement>(
        "." + s.capCard + ",." + s.sectorCard + ",." + s.tb + ",." + s.railItem + ",." + s.workCard
      );
      cards.forEach((el) => {
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          el.style.setProperty("--px", (e.clientX - r.left).toFixed(1) + "px");
          el.style.setProperty("--py", (e.clientY - r.top).toFixed(1) + "px");
        };
        el.addEventListener("pointermove", move);
        off.push(() => el.removeEventListener("pointermove", move));
      });
    }

    /* figures count up once, when they land */
    if (!reduce) {
      const nums = document.querySelectorAll<HTMLElement>("." + s.statNum);
      if (nums.length) {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              const el = entry.target as HTMLElement;
              io.unobserve(el);

              const m = /^(\D*)([\d.,]+)(.*)$/.exec(el.textContent || "");
              if (!m) return;
              const pre = m[1];
              const raw = m[2];
              const post = m[3];
              const target = parseFloat(raw.replace(/,/g, ""));
              if (!isFinite(target)) return;
              const dp = (raw.split(".")[1] || "").length;

              const t0 = performance.now();
              const step = (t: number) => {
                const p = Math.min(1, (t - t0) / 1500);
                const e = 1 - Math.pow(1 - p, 4);
                el.textContent = pre + (target * e).toFixed(dp) + post;
                if (p < 1) requestAnimationFrame(step);
              };
              requestAnimationFrame(step);
            });
          },
          { threshold: 0.6 }
        );
        nums.forEach((el) => io.observe(el));
        off.push(() => io.disconnect());
      }
    }

    return () => off.forEach((fn) => fn());
  }, []);

  return <motion.div className={s.progress} style={{ scaleX: bar }} aria-hidden="true" />;
}

