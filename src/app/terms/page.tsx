import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms governing use of the ${site.name} website.`,
};

const updated = "July 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        intro={`The terms governing your use of this website. Last updated ${updated}.`}
      />

      <section>
        <Container className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl space-y-10 text-[1.0625rem] leading-relaxed text-ink-2">
            <div className="rounded-xl border border-rule bg-plate px-6 py-4 text-[0.9375rem] text-ink-3">
              A general template, not legal advice. Have it reviewed before you rely on it.
              Client engagements are governed by a separate signed agreement, not these terms.
            </div>

            <section>
              <h2 className="display-md text-[1.5rem] text-ink">Acceptance</h2>
              <p className="mt-4">
                By using this website you agree to these terms. If you do not agree, please
                do not use the site. These terms cover the website only; any services we
                provide are governed by a separate written agreement.
              </p>
            </section>

            <section>
              <h2 className="display-md text-[1.5rem] text-ink">Use of the site</h2>
              <p className="mt-4">
                You may view and use this site for lawful, informational purposes. You agree
                not to misuse it &mdash; no attempting to breach security, disrupt service,
                scrape at scale, or use it to break the law.
              </p>
            </section>

            <section>
              <h2 className="display-md text-[1.5rem] text-ink">Intellectual property</h2>
              <p className="mt-4">
                The content, design and code of this site are owned by {site.legalName} or
                its licensors, unless stated otherwise. You may not copy or reuse substantial
                parts without permission. This is separate from client work, where IP is
                assigned as set out in the relevant engagement agreement.
              </p>
            </section>

            <section>
              <h2 className="display-md text-[1.5rem] text-ink">No warranty</h2>
              <p className="mt-4">
                The site is provided &ldquo;as is&rdquo;. We work to keep it accurate and
                available but do not guarantee it will be error-free or uninterrupted, and
                nothing here is a professional recommendation for your specific situation.
              </p>
            </section>

            <section>
              <h2 className="display-md text-[1.5rem] text-ink">Limitation of liability</h2>
              <p className="mt-4">
                To the extent permitted by law, we are not liable for indirect or consequential
                loss arising from your use of this website. Nothing in these terms limits
                liability that cannot lawfully be limited.
              </p>
            </section>

            <section>
              <h2 className="display-md text-[1.5rem] text-ink">Governing law</h2>
              <p className="mt-4">
                These terms are governed by the laws applicable in {site.location}, India, and
                any dispute is subject to the jurisdiction of its courts.
              </p>
            </section>

            <section>
              <h2 className="display-md text-[1.5rem] text-ink">Contact</h2>
              <p className="mt-4">
                Questions about these terms? Email{" "}
                <a href={`mailto:${site.email}`} className="text-signal underline underline-offset-4">
                  {site.email}
                </a>
                .
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
