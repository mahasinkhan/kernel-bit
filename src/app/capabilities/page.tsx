import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { Arrow } from "@/components/arrow";
import { PageHero } from "@/components/page-hero";
import { capabilities } from "@/content/capabilities";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Data engineering, data modelling, applied AI, analytics, assurance and platform engineering \u2014 the stages a record passes through, in order.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Not a menu. A sequence."
        image="/images/pages/capabilities.jpg"
        intro="Every engagement is somewhere on the same line: a record arrives, gets a shape, gets reasoned about, reaches someone who acts, and has to be defensible afterwards. Clients usually arrive with one stage in mind and leave having fixed the one before it."
      />

      <section>
        <Container className="py-8 sm:py-12">
          <ol className="border-t border-rule">
            {capabilities.map((c, i) => (
              <li key={c.slug}>
                <Reveal delay={i * 60}>
                  <Link
                    href={`/capabilities/${c.slug}`}
                    className="group relative grid gap-4 border-b border-rule py-10 transition-colors hover:bg-plate md:grid-cols-[3rem_11rem_1fr_auto] md:items-baseline md:gap-8 md:px-4"
                  >
                    <span className="display-md text-[1.5rem] leading-none text-ink-3 transition-colors group-hover:text-signal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="label text-signal">{c.stage ?? "Cross-cutting"}</span>
                    <div>
                      <h2 className="display-md text-[1.75rem] leading-tight text-ink transition-colors group-hover:text-signal sm:text-[2rem]">
                        {c.name}
                      </h2>
                      <p className="mt-3 max-w-2xl text-[1rem] leading-relaxed text-ink-2">{c.summary}</p>
                    </div>
                    <Arrow className="hidden text-ink-3 transition-all group-hover:translate-x-1 group-hover:text-signal md:block" />
                  </Link>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand
        eyebrow="Where to start"
        heading="Not sure which stage is broken?"
        body={"That is a normal place to start. Describe the symptom \u2014 the number that will not reconcile, the model nobody trusts \u2014 and we will tell you where it actually originates."}
        cta="Describe the symptom"
      />
    </>
  );
}
