import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects personal data.`,
};

const updated = "July 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro={`How ${site.name} handles personal data. Last updated ${updated}.`}
      />

      <section>
        <Container className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl space-y-10 text-[1.0625rem] leading-relaxed text-ink-2">
            <div className="rounded-xl border border-rule bg-plate px-6 py-4 text-[0.9375rem] text-ink-3">
              This is a general template and a starting point, not legal advice. Have it
              reviewed by a qualified professional before relying on it, especially given
              the regulated sectors we work in.
            </div>

            <section>
              <h2 className="display-md text-[1.5rem] text-ink">Who we are</h2>
              <p className="mt-4">
                {site.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a software
                engineering and research company based in {site.location}. For any privacy
                question, contact us at{" "}
                <a href={`mailto:${site.email}`} className="text-signal underline underline-offset-4">
                  {site.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="display-md text-[1.5rem] text-ink">What we collect</h2>
              <p className="mt-4">
                We collect only what we need to respond to you and run our business: the
                name, email, organisation and message you send through our contact form or
                by email; and standard technical data your browser provides when you visit
                (such as approximate location, device and pages viewed) via privacy-respecting
                analytics.
              </p>
            </section>

            <section>
              <h2 className="display-md text-[1.5rem] text-ink">How we use it</h2>
              <p className="mt-4">
                To reply to enquiries, deliver services we have agreed, improve the site,
                and meet legal obligations. We do not sell your data, and we do not use it
                to train shared machine-learning models.
              </p>
            </section>

            <section>
              <h2 className="display-md text-[1.5rem] text-ink">Sharing</h2>
              <p className="mt-4">
                We share data only with service providers who help us operate (for example,
                email and hosting), under contract and only as needed &mdash; or where the
                law requires it. Client project data is governed by the separate agreement
                for that engagement.
              </p>
            </section>

            <section>
              <h2 className="display-md text-[1.5rem] text-ink">Retention &amp; security</h2>
              <p className="mt-4">
                We keep personal data only as long as needed for the purpose it was collected,
                then delete or anonymise it. We apply appropriate technical and organisational
                measures to protect it, and build access controls and audit trails into the
                systems we operate.
              </p>
            </section>

            <section>
              <h2 className="display-md text-[1.5rem] text-ink">Your rights</h2>
              <p className="mt-4">
                Subject to applicable law, you may request access to, correction of, or
                deletion of your personal data, and object to certain uses. To exercise any
                of these, email{" "}
                <a href={`mailto:${site.email}`} className="text-signal underline underline-offset-4">
                  {site.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="display-md text-[1.5rem] text-ink">Changes</h2>
              <p className="mt-4">
                We may update this policy from time to time. The date at the top reflects the
                latest revision.
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
