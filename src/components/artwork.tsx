/* ---------------------------------------------------------------------------
 * ARTWORK
 *
 * Drawn, not photographed. No stock, no licence, no binary files, and nothing
 * that a terminal can corrupt on the way in.
 *
 * The hero and the statement band are flow fields: thousands of records finding
 * their way through a system. The four sector plates are each that sector's own
 * instrument - an order book, an ECG, generation against demand, a cohort
 * distribution. A company whose promise is "we show our working" should not be
 * illustrated with photographs of people pointing at laptops.
 *
 * Everything is deterministic, generated at build time, and scales without loss.
 * ------------------------------------------------------------------------ */
 
import { cn } from "@/lib/utils";
 
const DEEP = "#0f1a1d";
const SLATE = "#33505c";
const SIGNAL = "#2f4ce0";
const SIGNAL_PALE = "#93a9e6";
const CHALK = "#c8d4dd";
 
/* -- deterministic randomness ---------------------------------------------- */
 
function prng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
 
function hash2(xi: number, yi: number, seed: number) {
  let h = Math.imul(xi, 374761393) + Math.imul(yi, 668265263) + Math.imul(seed, 1274126177);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
 
/** Smooth value noise. The field the streamlines follow. */
function noise(x: number, y: number, seed: number) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi, seed);
  const b = hash2(xi + 1, yi, seed);
  const c = hash2(xi, yi + 1, seed);
  const d = hash2(xi + 1, yi + 1, seed);
  return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
}
 
/* -- flow field ------------------------------------------------------------ */
 
type Stroke = { d: string; stroke: string; w: number; o: number };
 
function streamlines(w: number, h: number, seed: number, count: number): Stroke[] {
  const rand = prng(seed);
  const out: Stroke[] = [];
  const step = 33;
 
  for (let i = 0; i < count; i++) {
    let x = -90 + rand() * w * 0.75;
    let y = -60 + rand() * (h + 120);
    const pts: string[] = [];
 
    for (let s = 0; s < 58; s++) {
      // spread of 2.2 rad keeps cos() positive: every record moves forward
      const angle = (noise(x / 270, y / 270, seed) - 0.5) * 2.2;
      x += Math.cos(angle) * step;
      y += Math.sin(angle) * step * 1.25;
      if (x > w + 80 || y < -80 || y > h + 80) break;
      pts.push(`${Math.round(x)} ${Math.round(y)}`);
    }
    if (pts.length < 6) continue;
 
    const t = rand();
    out.push({
      d: `M${pts.join("L")}`,
      stroke: t > 0.9 ? SIGNAL_PALE : t > 0.56 ? SIGNAL : SLATE,
      w: Math.round((0.8 + rand() * 1.6) * 10) / 10,
      o: Math.round((0.16 + rand() * 0.52) * 100) / 100,
    });
  }
  return out;
}
 
export function FlowField({
  width,
  height,
  seed,
  lines,
  className,
}: {
  width: number;
  height: number;
  seed: number;
  lines: number;
  className?: string;
}) {
  const paths = streamlines(width, height, seed, lines);
  const uid = `ff${seed}`;
 
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
      focusable="false"
    >
      <defs>
        <radialGradient id={`${uid}-bed`} cx="42%" cy="48%" r="78%">
          <stop offset="0%" stopColor="#1a2a30" />
          <stop offset="100%" stopColor="#0a1316" />
        </radialGradient>
        <pattern id={`${uid}-grid`} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0v40" fill="none" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
        </pattern>
      </defs>
 
      <rect width={width} height={height} fill={`url(#${uid}-bed)`} />
      <rect width={width} height={height} fill={`url(#${uid}-grid)`} />
 
      <g fill="none" strokeLinecap="round">
        {paths.map((p, i) => (
          <path key={i} d={p.d} stroke={p.stroke} strokeWidth={p.w} strokeOpacity={p.o} />
        ))}
      </g>
    </svg>
  );
}
 
/* -- sector plates --------------------------------------------------------- */
 
export type PlotKind = "ticks" | "ecg" | "load" | "cohort";
 
const PW = 800;
const PH = 600;
 
function Ground({ uid }: { uid: string }) {
  return (
    <>
      <defs>
        <pattern id={`${uid}-g`} width="25" height="25" patternUnits="userSpaceOnUse">
          <path d="M25 0H0v25" fill="none" stroke="#ffffff" strokeOpacity="0.055" strokeWidth="1" />
        </pattern>
        <pattern id={`${uid}-G`} width="125" height="125" patternUnits="userSpaceOnUse">
          <path d="M125 0H0v125" fill="none" stroke="#ffffff" strokeOpacity="0.085" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width={PW} height={PH} fill={DEEP} />
      <rect width={PW} height={PH} fill={`url(#${uid}-g)`} />
      <rect width={PW} height={PH} fill={`url(#${uid}-G)`} />
    </>
  );
}
 
/** Financial services: an order book. */
function Ticks() {
  const rand = prng(11);
  const n = 42;
  const pad = 55;
  const cw = (PW - pad * 2) / n;
  let price = PH * 0.42;
 
  const bars: React.ReactElement[] = [];
  const mid: string[] = [];
 
  for (let i = 0; i < n; i++) {
    const x = pad + i * cw + cw / 2;
    const o = price;
    price = Math.max(PH * 0.15, Math.min(PH * 0.6, price + (rand() - 0.5) * PH * 0.085));
    const c = price;
    const hi = Math.min(o, c) - rand() * PH * 0.035 - 3;
    const lo = Math.max(o, c) + rand() * PH * 0.035 + 3;
    const up = c < o;
    const fill = up ? SIGNAL : CHALK;
    const op = up ? 0.95 : 0.55;
 
    bars.push(
      <g key={i} fill={fill} fillOpacity={op}>
        <rect x={x - 0.75} y={hi} width={1.5} height={lo - hi} />
        <rect x={x - cw * 0.3} y={Math.min(o, c)} width={cw * 0.6} height={Math.max(2, Math.abs(c - o))} />
        <rect
          x={x - cw * 0.3}
          y={PH * 0.92 - (rand() * PH * 0.13 + 5)}
          width={cw * 0.6}
          height={rand() * PH * 0.13 + 5}
          fill="#ffffff"
          fillOpacity={0.16}
        />
      </g>,
    );
    mid.push(`${Math.round(x)} ${Math.round((o + c) / 2)}`);
  }
 
  return (
    <>
      {bars}
      <path d={`M${mid.join("L")}`} fill="none" stroke={SIGNAL_PALE} strokeOpacity={0.5} strokeWidth={2} />
      <line x1={pad} y1={PH * 0.92} x2={PW - pad} y2={PH * 0.92} stroke="#fff" strokeOpacity={0.22} />
    </>
  );
}
 
/** Healthcare: two leads, running. */
function Ecg() {
  const lead = (baseline: number, amp: number, shift: number) => {
    const beat = PW * 0.21;
    const pts: string[] = [];
    for (let x = 40; x < PW - 30; x += 4) {
      const p = (((x + shift) % beat) + beat) % beat / beat;
      const g = (mu: number, s: number) => Math.exp(-(((p - mu) / s) ** 2));
      const v = 0.1 * g(0.16, 0.03) - 0.16 * g(0.3, 0.01) + g(0.335, 0.011) - 0.34 * g(0.375, 0.013) + 0.26 * g(0.55, 0.045);
      pts.push(`${x} ${Math.round(baseline - v * amp)}`);
    }
    return `M${pts.join("L")}`;
  };
 
  return (
    <>
      <line x1={40} y1={PH * 0.38} x2={PW - 30} y2={PH * 0.38} stroke="#fff" strokeOpacity={0.14} />
      <line x1={40} y1={PH * 0.76} x2={PW - 30} y2={PH * 0.76} stroke="#fff" strokeOpacity={0.1} />
      <path d={lead(PH * 0.38, PH * 0.26, 0)} fill="none" stroke={SIGNAL} strokeWidth={2.6} strokeLinejoin="round" />
      <path
        d={lead(PH * 0.76, PH * 0.15, PW * 0.07)}
        fill="none"
        stroke={CHALK}
        strokeOpacity={0.45}
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
    </>
  );
}
 
/** Energy: generation against demand, and a battery filling the gap. */
function Load() {
  const pad = 50;
  const base = PH * 0.78;
  const gen: string[] = [];
  const dem: string[] = [];
 
  for (let i = 0; i <= 120; i++) {
    const t = i / 120;
    const x = Math.round(pad + t * (PW - pad * 2));
    const g = Math.exp(-(((t - 0.52) / 0.2) ** 2));
    const d = 0.42 * Math.exp(-(((t - 0.28) / 0.11) ** 2)) + 0.95 * Math.exp(-(((t - 0.8) / 0.1) ** 2));
    gen.push(`${x} ${Math.round(base - g * PH * 0.5)}`);
    dem.push(`${x} ${Math.round(base - d * PH * 0.5)}`);
  }
 
  const soc: string[] = [];
  let y = base + PH * 0.1;
  for (let i = 0; i < 20; i++) {
    const x0 = Math.round(pad + (i * (PW - pad * 2)) / 20);
    const x1 = Math.round(pad + ((i + 1) * (PW - pad * 2)) / 20);
    y += 4 < i && i < 12 ? -PH * 0.012 : PH * 0.009;
    y = Math.max(base + PH * 0.05, Math.min(base + PH * 0.16, y));
    soc.push(`${x0} ${Math.round(y)}`, `${x1} ${Math.round(y)}`);
  }
 
  return (
    <>
      <path d={`M${gen.join("L")}L${dem.slice().reverse().join("L")}Z`} fill={SIGNAL} fillOpacity={0.18} />
      <path d={`M${gen.join("L")}`} fill="none" stroke={SIGNAL} strokeWidth={2.6} />
      <path d={`M${dem.join("L")}`} fill="none" stroke={CHALK} strokeOpacity={0.6} strokeWidth={1.8} />
      <path d={`M${soc.join("L")}`} fill="none" stroke="#fff" strokeOpacity={0.35} strokeWidth={1.6} />
      <line x1={pad} y1={base} x2={PW - pad} y2={base} stroke="#fff" strokeOpacity={0.2} />
    </>
  );
}
 
/** Public sector: a cohort against a threshold. */
function Cohort() {
  const rand = prng(19);
  const n = 32;
  const pad = 55;
  const bw = (PW - pad * 2) / n;
  const base = PH * 0.85;
  const bars: React.ReactElement[] = [];
  const curve: string[] = [];
 
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n;
    const val = Math.exp(-(((t - 0.52) / 0.19) ** 2)) * PH * 0.56;
    const bh = Math.max(4, val * (1 + (rand() - 0.5) * 0.16));
    const passed = t > 0.38;
    bars.push(
      <rect
        key={i}
        x={pad + i * bw + bw * 0.16}
        y={base - bh}
        width={bw * 0.68}
        height={bh}
        fill={passed ? SIGNAL : CHALK}
        fillOpacity={passed ? 0.9 : 0.4}
      />,
    );
    curve.push(`${Math.round(pad + i * bw + bw / 2)} ${Math.round(base - val)}`);
  }
 
  const tx = Math.round(pad + 0.38 * (PW - pad * 2));
  return (
    <>
      {bars}
      <path d={`M${curve.join("L")}`} fill="none" stroke={SIGNAL_PALE} strokeOpacity={0.7} strokeWidth={2.4} />
      <line
        x1={tx}
        y1={PH * 0.08}
        x2={tx}
        y2={base}
        stroke="#fff"
        strokeOpacity={0.5}
        strokeWidth={1.6}
        strokeDasharray="6 8"
      />
      <line x1={pad} y1={base} x2={PW - pad} y2={base} stroke="#fff" strokeOpacity={0.22} />
    </>
  );
}
 
export function SectorPlot({ kind, className }: { kind: PlotKind; className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${PW} ${PH}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
      focusable="false"
    >
      <Ground uid={kind} />
      {kind === "ticks" ? <Ticks /> : null}
      {kind === "ecg" ? <Ecg /> : null}
      {kind === "load" ? <Load /> : null}
      {kind === "cohort" ? <Cohort /> : null}
    </svg>
  );
}
 
/* -- the five stages, as an exploded plan ---------------------------------- */
 
export function Plan({ className }: { className?: string }) {
  const W = 800;
  const H = 1000;
  const cx = W / 2;
  const pw = W * 0.62;
  const ph = H * 0.075;
  const tops = [0, 1, 2, 3, 4].map((i) => H * 0.17 + i * H * 0.165);
 
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={cn(className)}
      aria-hidden
      focusable="false"
    >
      <defs>
        <pattern id="plan-g" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0v32" fill="none" stroke="#0f1a1d" strokeOpacity="0.07" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width={W} height={H} fill="#eaedee" />
      <rect width={W} height={H} fill="url(#plan-g)" />
 
      <line x1={cx} y1={H * 0.04} x2={cx} y2={tops[0]} stroke="#0f1a1d" strokeOpacity={0.28} />
      <line x1={cx} y1={tops[4]} x2={cx} y2={H * 0.96} stroke="#0f1a1d" strokeOpacity={0.28} />
 
      {tops.map((cy, i) => {
        const pts = `${cx - pw / 2},${cy} ${cx},${cy - ph / 2} ${cx + pw / 2},${cy} ${cx},${cy + ph / 2}`;
        return (
          <g key={i}>
            <polygon points={pts} fill="#0f1a1d" fillOpacity={0.04} stroke="#0f1a1d" strokeOpacity={0.5} strokeWidth={1.6} />
            {[1, 2, 3].map((k) => {
              const u = k / 4;
              return (
                <line
                  key={k}
                  x1={cx - pw / 2 + (u * pw) / 2}
                  y1={cy - (u * ph) / 2}
                  x2={cx + (u * pw) / 2}
                  y2={cy + ph / 2 - (u * ph) / 2}
                  stroke="#0f1a1d"
                  strokeOpacity={0.16}
                />
              );
            })}
            {i < 4 ? (
              <line x1={cx} y1={cy} x2={cx} y2={tops[i + 1]} stroke={SIGNAL} strokeOpacity={0.55} strokeWidth={2} />
            ) : null}
            <circle cx={cx} cy={cy} r={7} fill="#2440d9" />
          </g>
        );
      })}
    </svg>
  );
}