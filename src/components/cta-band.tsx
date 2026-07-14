import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { Reveal } from "@/components/reveal";

export function CtaBand({
  eyebrow = "Next step",
  heading = "Tell us what has to be provable.",
  body = "Bring us the system you would rather not explain to an auditor. The first conversation is thirty minutes and costs nothing.",
  cta = "Start a conversation",
}: {
  eyebrow?: string;
  heading?: string;
  body?: string;
  cta?: string;
}) {
  return (
    <section className="grid-paper-deep bg-signal text-white">
      <Container className="py-20 sm:py-28">
        <Reveal className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-end">
          <div>
            <p className="label flex items-center gap-2.5 text-white/60">
              <span aria-hidden className="h-px w-6 bg-white/40" />
              {eyebrow}
            </p>
            <h2 className="display mt-6 max-w-2xl text-[2.25rem] sm:text-[3.25rem]">{heading}</h2>
          </div>
          <div>
            <p className="max-w-md text-[1.0625rem] leading-relaxed text-white/80">{body}</p>
            <ButtonLink href="/contact" variant="solid-invert" className="mt-8">
              {cta}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
