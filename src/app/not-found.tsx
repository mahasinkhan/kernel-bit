import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { Eyebrow } from "@/components/eyebrow";
 
export default function NotFound() {
  return (
    <section className="grid-paper">
      <Container className="flex min-h-[60vh] flex-col justify-center py-24">
        <Eyebrow>404</Eyebrow>
        <h1 className="display mt-6 max-w-2xl text-[2.5rem] text-ink sm:text-[3.5rem]">
          That page has no record behind it.
        </h1>
        <p className="mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-ink-2">
          The link is wrong, or the page has moved. Both are traceable &mdash; this one just is not here.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/">Back to the start</ButtonLink>
          <ButtonLink href="/capabilities" variant="line">
            Capabilities
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}