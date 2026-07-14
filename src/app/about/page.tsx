import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal } from "@/components/reveal";
import { Plate } from "@/components/plate";
import { CtaBand } from "@/components/cta-band";
import { site } from "@/content/site";
 
export const metadata: Metadata = {
  title: "About",
  description: `${site.legalName} \u2014 how we work, and what we will not do.`,
};
 
const principles = [
  {
    title: "The original record is never overwritten",
    body: "Everything we build keeps what arrived, exactly as it arrived, beside whatever we made of it. It costs storage. It saves investigations.",
  },
  {
    title: "A model recommends; a person decides",
    body: "Where a decision has to be contestable by the person it affects, we build a review queue, not an auto-decline. We will argue this point with you.",
  },
  {
    title: "Small changes, shipped often, easy to reverse",
    body: "Deploying should be boring. If your team is frightened of Fridays, that is the first thing we fix, and it is usually the cheapest.",
  },
  {
    title: "We tell you when the answer is no",
    body: "Some things should not be automated, and some projects should not start. Saying so early is the most valuable thing a supplier can do.",
  },
];
 
export default function AboutPage() {
  return (
    <>
      <section className="grid-paper border-b border-rule">
        <Container className="pt-16 pb-16 sm:pt-24 sm:pb-20">
          <Reveal className="max-w-3xl">
            <Eyebrow>About</Eyebrow>
            <h1 className="display mt-7 text-[2.5rem] text-ink sm:text-[3.75rem]">
              A small team, built for long horizons.
            </h1>
            <p className="mt-8 max-w-2xl text-[1.125rem] leading-relaxed text-ink-2">
              {site.legalName} is a {site.location}-based engineering and research company. We work with
              organisations whose systems outlive the people who built them &mdash; banks, health providers, energy
              operators, awarding bodies &mdash; and we build accordingly.
            </p>
          </Reveal>
        </Container>
      </section>
 
      <section className="border-b border-rule">
        <Container className="py-20 sm:py-28">
          <Reveal className="max-w-3xl">
            <h2 className="display text-[2rem] text-ink sm:text-[2.5rem]">
              Four things we will not negotiate on.
            </h2>
          </Reveal>
 
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <Plate className="h-full p-7 sm:p-8">
                  <p className="label text-signal">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="display-md mt-5 text-[1.375rem] text-ink">{p.title}</h3>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2">{p.body}</p>
                </Plate>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
 
      <CtaBand
        eyebrow="Working with us"
        heading="We take on fewer clients than we could."
        body="Engagements run three months at minimum, because anything shorter is a demo. If that suits how you buy, we should talk."
      />
    </>
  );
}