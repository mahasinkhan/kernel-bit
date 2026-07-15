"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroWebGL = dynamic(() => import("./HeroWebGL"), { ssr: false });

/* Loads the 3D hero ONLY on desktop, ONLY after mount, ONLY without
   reduced-motion. Mobile and low-power users keep the fast SVG hero. */

export default function HeroWebGLGate() {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (wide && !reduce) setOk(true);
  }, []);

  return ok ? <HeroWebGL /> : null;
}
