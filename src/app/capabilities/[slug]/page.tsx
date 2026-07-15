import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Plate } from "@/components/plate";
import { CtaBand } from "@/components/cta-band";
import { Arrow } from "@/components/arrow";
import { capabilities, getCapability } from "@/content/capabilities";
 
type Params = { params: Promise<{ slug: string }> };
 
export function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}
 
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const capability = getCapability(slug);
  if (!capability) return {};
  return { title: capability.name, description: capability.summary };
}
 
export default async function CapabilityPage({ params }: Params) {
  const { slug } = await params;
  const capability = getCapability(slug);
  if (!capability) notFound();
 
  const index = capabilities.findIndex((c) => c.slug === slug);
  const next = capabilities[(index + 1) % capabilities.length];
 
  return (
    <>
      <PageHero
        eyebrow={capability.stage ? `Stage \u2014 ${capability.stage}` : "Cross-cutting"}
        title={capability.name}
        image={`/images/pages/capabilities/${capability.slug}.jpg`}
        intro={capability.lede}
      />
 
      <section className="border-b border-rule">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
            <Reveal>
              <div className="space-y-6">
                {capability.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-[1.0625rem] leading-relaxed text-ink-2">
                    {paragraph}
                  </p>
                ))}
              </div>
 
              <Plate marks className="mt-12 border-signal bg-signal-wash p-7 sm:p-8">
                <p className="label text-signal">What this makes provable</p>
                <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink">{capability.proof}</p>
              </Plate>
            </Reveal>
 
            <Reveal delay={90}>
              <h2 className="label text-ink-3">What we build</h2>
              <ul className="mt-6">
                {capability.builds.map((item) => (
                  <li key={item} className="flex gap-4 border-b border-rule-soft py-4 text-[1rem] text-ink-2">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-signal" />
                    {item}
                  </li>
                ))}
              </ul>
 
              <h2 className="label mt-12 text-ink-3">Usually with</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {capability.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-plate border border-rule bg-plate px-3 py-1.5 font-mono text-[0.75rem] text-ink-2"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>
 
      <section>
        <Container className="py-14">
          <Link
            href={`/capabilities/${next.slug}`}
            className="group flex flex-col gap-2 border-t border-ink pt-6 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <span className="label text-ink-3">Next &mdash; {next.stage ?? "Cross-cutting"}</span>
            <span className="display-md text-[1.75rem] text-ink transition-colors group-hover:text-signal sm:text-[2.25rem]">
              {next.name}{" "}
              <Arrow className="inline-block h-[0.5em] w-[0.8em] transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Container>
      </section>
 
      <CtaBand />
    </>
  );
}
