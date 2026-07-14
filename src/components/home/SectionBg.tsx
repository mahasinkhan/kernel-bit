"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import s from "./home.module.css";

type Props = { src: string; onBlue?: boolean; amount?: number };

/* Parallax photographic layer. The image is taller than its section, so it can
   travel without ever exposing an edge. Veiled on the reading side. */

export default function SectionBg({ src, onBlue = false, amount = 9 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-" + amount + "%", amount + "%"]);

  return (
    <div
      ref={ref}
      className={[s.secBg, onBlue ? s.secBgOnBlue : ""].join(" ")}
      aria-hidden="true"
    >
      <motion.div
        className={s.secBgImg}
        style={{ backgroundImage: "url(" + src + ")", y: reduce ? 0 : y }}
      />
      <div className={s.secBgVeil} />
    </div>
  );
}
