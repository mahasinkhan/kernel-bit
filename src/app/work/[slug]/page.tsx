import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { caseStudies } from "@/content/case-studies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: "Work" };
  return { title: cs.title, description: cs.summary };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <>
      <PageHero
        eyebrow={cs.sector}
        title={cs.title}
        image={cs.image}
        intro={cs.summary}
      />

      <section className="border-b border-rule">
        <Container className="py-14 sm:py-20">
          <Reveal>
            <div className="grid gap-8 sm:grid-cols-3">
              {cs.metrics.map((m) => (
                <div key={m.label}>
                  <span className="display text-[2.25rem] leading-none text-signal sm:text-[2.75rem]">
                    {m.value}
                  </span>
                  <span className="mt-3 block text-[0.9375rem] leading-snug text-ink-2">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-24">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <Reveal>
              <p className="label flex items-center gap-3 text-signal before:h-px before:w-6 before:bg-signal before:content-['']">
                The challenge
              </p>
              <p className="mt-6 text-[1.1875rem] leading-relaxed text-ink">{cs.challenge}</p>

              <p className="label mt-12 text-ink-3">Stack</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cs.stack.map((t) => (
                  <li key={t} className="rounded-md bg-plate px-3 py-1.5 font-mono text-[0.75rem] text-ink-2">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={90}>
              <p className="label flex items-center gap-3 text-signal before:h-px before:w-6 before:bg-signal before:content-['']">
                What we did
              </p>
              <ol className="mt-6 space-y-5">
                {cs.approach.map((step, i) => (
                  <li key={i} className="flex gap-5">
                    <span className="display-md flex-none text-[1.25rem] leading-none text-ink-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[1rem] leading-relaxed text-ink-2">{step}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-12 rounded-2xl border border-rule bg-plate p-7">
                <p className="label text-signal">The outcome</p>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink">{cs.outcome}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-rule">
        <Container className="py-12">
          <Link href={`/work/${next.slug}`} className="group flex items-center justify-between gap-6">
            <div>
              <p className="label text-ink-3">Next case</p>
              <p className="display-md mt-2 text-[1.5rem] text-ink transition-colors group-hover:text-signal">
                {next.title}
              </p>
            </div>
            <span aria-hidden className="text-2xl text-ink-3 transition-all group-hover:translate-x-1 group-hover:text-signal">
              &rarr;
            </span>
          </Link>
        </Container>
      </section>

      <CtaBand
        eyebrow="Start a conversation"
        heading="Tell us what you need to prove."
        body="Send the problem, the constraints and the deadline. You get an engineer on the first call."
      />
    </>
  );
}
