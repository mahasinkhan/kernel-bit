import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { caseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected engagements \u2014 what we built, and what it changed.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Work we can talk about."
        image="/images/pages/work.jpg"
        intro="Names withheld where the contract says so. The numbers are not \u2014 each of these is a real problem, solved and measured."
      />

      <section>
        <Container className="py-16 sm:py-24">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 80}>
                <Link
                  href={`/work/${cs.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-rule bg-white shadow-[0_1px_2px_rgba(10,23,48,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-20px_rgba(10,23,48,0.22)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={cs.image}
                      alt=""
                      fill
                      sizes="(min-width:768px) 45vw, 90vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="label absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-signal">
                      {cs.sector}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="label text-ink-3">{cs.client}</p>
                    <h2 className="display-md mt-3 text-[1.5rem] leading-tight text-ink transition-colors group-hover:text-signal">
                      {cs.title}
                    </h2>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-2">{cs.summary}</p>
                    <span className="label mt-6 inline-flex items-center gap-2 text-ink group-hover:text-signal">
                      Read the case
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Your problem"
        heading="Have one of these shapes?"
        body="If a number has to survive scrutiny, or a platform has to scale without a rebuild, that is our ground. Tell us the symptom."
      />
    </>
  );
}
