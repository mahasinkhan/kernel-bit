import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { Arrow } from "@/components/arrow";
import { capabilities } from "@/content/capabilities";
 
export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Data engineering, data modelling, applied AI, analytics, assurance and platform engineering \u2014 the stages a record passes through, in order.",
};
 
export default function CapabilitiesPage() {
  return (
    <>
      <section className="grid-paper border-b border-rule">
        <Container className="pt-16 pb-16 sm:pt-24 sm:pb-20">
          <Reveal className="max-w-3xl">
            <Eyebrow>Capabilities</Eyebrow>
            <h1 className="display mt-7 text-[2.5rem] text-ink sm:text-[3.75rem]">
              Not a menu. A sequence.
            </h1>
            <p className="mt-8 max-w-2xl text-[1.125rem] leading-relaxed text-ink-2">
              Every engagement is somewhere on the same line: a record arrives, gets a shape, gets reasoned
              about, reaches someone who acts, and has to be defensible afterwards. Clients usually arrive with
              one stage in mind and leave having fixed the one before it.
            </p>
          </Reveal>
        </Container>
      </section>
 
      <section>
        <Container className="py-16 sm:py-20">
          <ol>
            {capabilities.map((c, i) => (
              <li key={c.slug}>
                <Reveal delay={i * 60}>
                  <Link
                    href={`/capabilities/${c.slug}`}
                    className="group grid gap-4 border-b border-rule py-9 transition-colors hover:bg-plate md:grid-cols-[10rem_1fr_auto] md:items-baseline md:gap-8 md:px-4"
                  >
                    <span className="label text-signal">{c.stage ?? "Cross-cutting"}</span>
                    <div>
                      <h2 className="display-md text-[1.625rem] text-ink sm:text-[1.875rem]">{c.name}</h2>
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