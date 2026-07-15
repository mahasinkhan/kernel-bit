import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Plate } from "@/components/plate";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
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
      <PageHero
        eyebrow="About"
        title="A small team, built for long horizons."
        image="/images/pages/about.jpg"
        intro={
          <>
            {site.legalName} is a {site.location}-based engineering and research company. We work with
            organisations whose systems outlive the people who built them &mdash; banks, health providers, energy
            operators, awarding bodies &mdash; and we build accordingly.
          </>
        }
      />

      <section className="border-b border-rule">
        <Container className="py-20 sm:py-28">
          <Reveal className="max-w-3xl">
            <p className="label flex items-center gap-3 text-signal before:h-px before:w-6 before:bg-signal before:content-['']">
              Our standard
            </p>
            <h2 className="display mt-6 text-[2.25rem] leading-tight text-ink sm:text-[2.875rem]">
              Four things we will not negotiate on.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <Plate className="group relative h-full overflow-hidden p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-9">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-0.5 w-0 bg-signal transition-[width] duration-500 group-hover:w-full"
                  />
                  <p className="label text-signal">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="display-md mt-5 text-[1.4375rem] leading-snug text-ink">{p.title}</h3>
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
