"use client";

import { useEffect, useRef } from "react";
import s from "./home.module.css";

const COLS = [
  { x: 150, ys: [300, 470, 640] },
  { x: 460, ys: [250, 430, 610, 770] },
  { x: 760, ys: [330, 520, 690] },
  { x: 1060, ys: [280, 470, 660] },
  { x: 1350, ys: [400, 590] },
];

const LINKS = [
  [0, 0, 1, 0], [0, 0, 1, 1], [0, 1, 1, 1], [0, 1, 1, 2], [0, 2, 1, 2], [0, 2, 1, 3],
  [1, 0, 2, 0], [1, 1, 2, 0], [1, 1, 2, 1], [1, 2, 2, 1], [1, 2, 2, 2], [1, 3, 2, 2],
  [2, 0, 3, 0], [2, 1, 3, 0], [2, 1, 3, 1], [2, 2, 3, 1], [2, 2, 3, 2],
  [3, 0, 4, 0], [3, 1, 4, 0], [3, 1, 4, 1], [3, 2, 4, 1],
];

const ROUTE = [[0, 1], [1, 2], [2, 1], [3, 1], [4, 0]];

function seg(c1: number, i1: number, c2: number, i2: number, first: boolean) {
  const x1 = COLS[c1].x;
  const y1 = COLS[c1].ys[i1];
  const x2 = COLS[c2].x;
  const y2 = COLS[c2].ys[i2];
  const dx = (x2 - x1) * 0.45;
  const head = first ? "M " + x1 + " " + y1 + " " : "";
  return head + "C " + (x1 + dx) + " " + y1 + ", " + (x2 - dx) + " " + y2 + ", " + x2 + " " + y2 + " ";
}

const ROUTE_D = ROUTE.slice(0, -1)
  .map((n, i) => seg(n[0], n[1], ROUTE[i + 1][0], ROUTE[i + 1][1], i === 0))
  .join("");

function Graph({ lit }: { lit: boolean }) {
  return (
    <svg
      className={lit ? s.bgArtLit : s.bgArt}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {!lit ? (
        <defs>
          <linearGradient id="kbEdge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2347f5" stopOpacity="0" />
            <stop offset="38%" stopColor="#2347f5" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#16309e" stopOpacity="0.14" />
          </linearGradient>
          <linearGradient id="kbLive" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2347f5" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#2347f5" stopOpacity="0.5" />
          </linearGradient>
          <filter id="kbGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      ) : null}

      <g className={lit ? s.edgesLit : s.edges} stroke={lit ? undefined : "url(#kbEdge)"}>
        {LINKS.map((l) => (
          <path key={l.join("-")} d={seg(l[0], l[1], l[2], l[3], true)} />
        ))}
      </g>

      {!lit ? (
        <path className={s.live} d={ROUTE_D} stroke="url(#kbLive)" filter="url(#kbGlow)" />
      ) : null}

      {COLS.map((col, ci) =>
        col.ys.map((y, yi) => {
          const onRoute = ROUTE.some((r) => r[0] === ci && r[1] === yi);
          const cls = lit ? s.nodesLit : onRoute ? s.nodeLive : s.nodes;
          return <circle key={ci + "-" + yi} className={cls} cx={col.x} cy={y} r={onRoute ? 6 : 4.5} />;
        })
      )}
    </svg>
  );
}

export default function HeroGraph() {
  const spot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spot.current;
    const section = el?.closest("section");
    if (!el || !section) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let tx = 0, ty = 0, x = 0, y = 0, to = 0, o = 0, raf = 0;

    const tick = () => {
      x += (tx - x) * 0.13;
      y += (ty - y) * 0.13;
      o += (to - o) * 0.08;
      el.style.setProperty("--mx", x.toFixed(1) + "px");
      el.style.setProperty("--my", y.toFixed(1) + "px");
      el.style.setProperty("--lit", o.toFixed(3));
      const moving = Math.abs(tx - x) > 0.4 || Math.abs(ty - y) > 0.4 || Math.abs(to - o) > 0.004;
      raf = moving ? requestAnimationFrame(tick) : 0;
    };

    const move = (e: PointerEvent) => {
      const r = section.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      to = 1;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const leave = () => {
      to = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    section.addEventListener("pointermove", move);
    section.addEventListener("pointerleave", leave);

    return () => {
      section.removeEventListener("pointermove", move);
      section.removeEventListener("pointerleave", leave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <Graph lit={false} />
      <div ref={spot} className={s.spot}>
        <div className={s.litGlow} />
        <div className={s.lit}>
          <Graph lit />
        </div>
      </div>
    </>
  );
}
