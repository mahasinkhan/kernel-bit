import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { sectors } from "@/content/sectors";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "Financial services, healthcare and life sciences, energy and mobility, public sector and education.",
};

export default function SectorsPage() {
  return (
    <>
      <section className="grid-paper border-b border-rule">
        <Container className="pt-16 pb-16 sm:pt-24 sm:pb-20">
          <Reveal className="max-w-3xl">
            <Eyebrow>Sectors</Eyebrow>
            <h1 className="display mt-7 text-[2.5rem] text-ink sm:text-[3.75rem]">
              Where being wrong is expensive.
            </h1>
            <p className="mt-8 max-w-2xl text-[1.125rem] leading-relaxed text-ink-2">
              We are not sector-agnostic and we do not pretend to be. The four below share one condition: a
              decision made today has to be defensible years from now, to someone who was not in the room.
            </p>
          </Reveal>
        </Container>
      </section>

      <section>
        {sectors.map((sector, i) => (
          <div key={sector.slug} className={i % 2 === 1 ? "border-b border-rule bg-plate" : "border-b border-rule"}>
            <Container className="py-16 sm:py-20">
              <Reveal>
                <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
                  <div>
                    <p className="label text-signal">{String(i + 1).padStart(2, "0")}</p>
                    <h2 className="display mt-5 text-[2rem] text-ink sm:text-[2.5rem]">{sector.name}</h2>
                    <p className="mt-4 text-[0.9375rem] text-ink-3">{sector.who}</p>
                  </div>
                  <div>
                    <p className="text-[1.125rem] leading-relaxed text-ink">{sector.pressure}</p>
                    <h3 className="label mt-9 text-ink-3">What we build here</h3>
                    <ul className="mt-4">
                      {sector.we.map((item) => (
                        <li
                          key={item}
                          className="flex gap-4 border-b border-rule-soft py-3.5 text-[1rem] text-ink-2"
                        >
                          <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-signal" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </Container>
          </div>
        ))}
      </section>

      <CtaBand
        eyebrow="Your sector"
        heading="Not on the list?"
        body="If your problem is that a number has to survive scrutiny, the sector matters less than you would think. Tell us the shape of it."
      />
    </>
  );
}
