import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { sectors } from "@/content/sectors";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "Financial services, healthcare and life sciences, energy and mobility, public sector and education.",
};

const IMAGES: Record<string, string> = {
  "financial-services": "/images/pages/sectors/financial-services.jpg",
  healthcare: "/images/pages/sectors/healthcare.jpg",
  "energy-mobility": "/images/pages/sectors/energy-mobility.jpg",
  "public-sector": "/images/pages/sectors/public-sector.jpg",
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="Where being wrong is expensive."
        image="/images/pages/sectors.jpg"
        intro="We are not sector-agnostic and we do not pretend to be. The four below share one condition: a decision made today has to be defensible years from now, to someone who was not in the room."
      />

      <section>
        {sectors.map((sector, i) => {
          const flip = i % 2 === 1;
          return (
            <div
              key={sector.slug}
              className={flip ? "border-b border-rule bg-plate" : "border-b border-rule"}
            >
              <Container className="py-16 sm:py-24">
                <Reveal>
                  <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <figure
                      className={
                        "relative aspect-[4/3] overflow-hidden rounded-2xl bg-[linear-gradient(160deg,#e6ecff,#a4b8e6)] shadow-[0_2px_4px_rgba(10,23,48,0.04),0_18px_36px_-16px_rgba(10,23,48,0.22)] " +
                        (flip ? "lg:order-2" : "")
                      }
                    >
                      <Image
                        src={IMAGES[sector.slug]}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 40vw, 90vw"
                        className="object-cover"
                      />
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-ink/10"
                      />
                      <span className="label absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-signal">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </figure>

                    <div className={flip ? "lg:order-1" : ""}>
                      <h2 className="display text-[2rem] leading-tight text-ink sm:text-[2.625rem]">
                        {sector.name}
                      </h2>
                      <p className="mt-4 text-[0.9375rem] text-ink-3">{sector.who}</p>
                      <p className="mt-6 text-[1.125rem] leading-relaxed text-ink">{sector.pressure}</p>

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

                      {sector.detail ? (
                        <Link
                          href={`/sectors/${sector.slug}`}
                          className="group mt-8 inline-flex items-center gap-2 text-[1rem] font-medium text-ink transition-colors hover:text-signal"
                        >
                          Explore {sector.name.split(" &")[0]}
                          <Arrow className="h-[0.7em] w-[0.9em] transition-transform group-hover:translate-x-1" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              </Container>
            </div>
          );
        })}
      </section>

      <CtaBand
        eyebrow="Your sector"
        heading="Not on the list?"
        body="If your problem is that a number has to survive scrutiny, the sector matters less than you would think. Tell us the shape of it."
      />
    </>
  );
}


