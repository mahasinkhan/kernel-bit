import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Arrow } from "@/components/arrow";
import { sectors, getSector } from "@/content/sectors";

export function generateStaticParams() {
  return sectors.filter((s) => s.detail).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) return { title: "Sectors" };
  return { title: sector.name, description: sector.pressure };
}

export default async function SectorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector || !sector.detail) notFound();
  const d = sector.detail;

  const idx = sectors.findIndex((s) => s.slug === slug);
  let nextSector = sectors[(idx + 1) % sectors.length];
  let guard = 0;
  while (!nextSector.detail && guard < sectors.length) {
    nextSector = sectors[(sectors.indexOf(nextSector) + 1) % sectors.length];
    guard++;
  }

  return (
    <>
      <PageHero
        eyebrow="Sector"
        title={sector.name}
        image={d.image}
        intro={sector.who}
      />

      <section className="border-b border-rule">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <Reveal>
              <p className="label flex items-center gap-3 text-signal before:h-px before:w-6 before:bg-signal before:content-['']">
                The pressure
              </p>
              <p className="mt-6 text-[1.375rem] leading-snug text-ink">{sector.pressure}</p>
            </Reveal>
            <Reveal delay={90}>
              <p className="text-[1.0625rem] leading-relaxed text-ink-2">{d.intro}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-24">
          <Reveal>
            <p className="label text-signal">What we build here</p>
            <h2 className="display mt-5 text-[2rem] leading-tight text-ink sm:text-[2.75rem]">
              Solutions for {sector.name.split(" &")[0].toLowerCase()}.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
            {d.solutions.map((sol, i) => (
              <Reveal key={sol.title} delay={i * 70}>
                <article className="flex h-full flex-col rounded-2xl border border-rule bg-white p-7 shadow-[0_1px_2px_rgba(10,23,48,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(10,23,48,0.2)] sm:p-8">
                  <h3 className="display-md text-[1.375rem] leading-tight text-ink">{sol.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-2">{sol.blurb}</p>
                  <ul className="mt-6 space-y-3 border-t border-rule-soft pt-6">
                    {sol.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-[0.9375rem] leading-snug text-ink-2">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rotate-45 bg-signal" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-rule bg-plate">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <Reveal>
              <p className="label text-signal">How we approach it</p>
              <h2 className="display-md mt-5 text-[1.75rem] text-ink sm:text-[2.25rem]">
                The way we work here.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <ol className="space-y-6">
                {d.approach.map((step, i) => (
                  <li key={i} className="flex gap-5">
                    <span className="display-md flex-none text-[1.25rem] leading-none text-ink-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[1.0625rem] leading-relaxed text-ink">{step}</p>
                  </li>
                ))}
              </ol>

              <p className="label mt-10 text-ink-3">Typically built with</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {d.stack.map((t) => (
                  <li key={t} className="rounded-md border border-rule bg-white px-3 py-1.5 font-mono text-[0.75rem] text-ink-2">
                    {t}
                  </li>
                ))}
              </ul>

              {d.note ? (
                <p className="mt-8 rounded-xl border border-rule bg-white px-5 py-4 text-[0.875rem] leading-relaxed text-ink-3">
                  {d.note}
                </p>
              ) : null}
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-rule">
        <Container className="py-12">
          <Link href={`/sectors/${nextSector.slug}`} className="group flex items-center justify-between gap-6">
            <div>
              <p className="label text-ink-3">Next sector</p>
              <p className="display-md mt-2 text-[1.5rem] text-ink transition-colors group-hover:text-signal">
                {nextSector.name}
              </p>
            </div>
            <Arrow className="text-ink-3 transition-all group-hover:translate-x-1 group-hover:text-signal" />
          </Link>
        </Container>
      </section>

      <CtaBand
        eyebrow="Start a conversation"
        heading="Have a problem in this space?"
        body="Tell us the symptom. You get an engineer on the first call, not a salesperson."
      />
    </>
  );
}
