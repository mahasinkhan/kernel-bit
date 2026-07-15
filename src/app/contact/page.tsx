import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a conversation with ${site.legalName}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation."
        image="/images/pages/contact.jpg"
        intro="Thirty minutes, no deck. Come with the symptom rather than the solution &mdash; the report that never reconciles, the model the risk team will not sign off, the migration that keeps slipping."
      />

      <section>
        <Container className="py-16 sm:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <p className="label flex items-center gap-3 text-signal before:h-px before:w-6 before:bg-signal before:content-['']">
                Direct
              </p>
              <p className="mt-6 text-[1.0625rem] leading-relaxed text-ink-2">
                Prefer to skip the form? Everything you need is here. An enquiry either way reaches an engineer,
                not a queue.
              </p>

              <dl className="mt-10 space-y-6 border-t border-rule pt-8">
                <div>
                  <dt className="label text-ink-3">Email</dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${site.email}`}
                      className="text-[1rem] text-ink underline decoration-signal underline-offset-4 hover:text-signal"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label text-ink-3">Office</dt>
                  <dd className="mt-2 space-y-0.5 font-mono text-[0.8125rem] leading-relaxed text-ink-2">
                    {site.address.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="label text-ink-3">Reply time</dt>
                  <dd className="mt-2 text-[1rem] text-ink-2">One working day. Usually the same afternoon.</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={90}>
              <div className="rounded-2xl border border-rule bg-white p-7 shadow-[0_2px_4px_rgba(10,23,48,0.04),0_18px_36px_-20px_rgba(10,23,48,0.18)] sm:p-9">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
