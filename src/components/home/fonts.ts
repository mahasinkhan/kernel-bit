import { Archivo, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";

/* Scoped to the home page sections only - layout.tsx is untouched. */

const sans = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--kb-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--kb-mono",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--kb-serif",
});

export const fontClass = [sans.variable, mono.variable, serif.variable].join(" ");
