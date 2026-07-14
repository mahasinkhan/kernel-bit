import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/content/site";
 
export const metadata: Metadata = {
  title: "Contact",
  description: `Start a conversation with ${site.legalName}.`,
};
 
export default function ContactPage() {
  return (
    <section className="grid-paper">
      <Container className="pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="display mt-7 text-[2.5rem] text-ink sm:text-[3.25rem]">
              Start a conversation.
            </h1>
            <p className="mt-7 text-[1.0625rem] leading-relaxed text-ink-2">
              Thirty minutes, no deck. Come with the symptom rather than the solution &mdash; the report that never
              reconciles, the model the risk team will not sign off, the migration that keeps slipping.
            </p>
 
            <dl className="mt-12 space-y-6 border-t border-rule pt-8">
              <div>
                <dt className="label text-ink-3">Email</dt>
                <dd className="mt-2">
                  <a href={`mailto:${site.email}`} className="text-[1rem] text-ink hover:text-signal">
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
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}