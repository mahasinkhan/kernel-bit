import type { Metadata } from "next";
 
/* Fonts are self-hosted, not fetched from Google at runtime.
   One less third-party request on a site sold into regulated industries. */
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/ibm-plex-sans/standard.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
 
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/content/site";
 
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}  -  ${site.tagline}`,
    template: `%s  -  ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name}  -  ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_GB",
    type: "website",
  },
  robots: { index: true, follow: true },
};
 
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className="h-full" data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-plate focus:bg-ink focus:px-4 focus:py-3 focus:text-plate"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}