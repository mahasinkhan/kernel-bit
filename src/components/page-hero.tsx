import Image from "next/image";

/* Photographic band for the inner pages. Uses next/image (optimised, lazy)
   and the existing token palette. Drop a matching file in /public/images/pages/
   and it tones to the brand automatically; leave it out and the gradient
   plate stands on its own. */

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  image?: string;
}) {
  return (
    <section className="grid-paper relative overflow-hidden border-b border-rule">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 right-0 w-[58%] bg-[linear-gradient(200deg,#e6ecff_0%,#c2cff1_52%,#a4b8e6_100%)] [mask-image:linear-gradient(90deg,transparent,#000_42%)]" />
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="60vw"
            className="object-cover opacity-[0.18] mix-blend-multiply grayscale [mask-image:linear-gradient(90deg,transparent,#000_42%)]"
          />
        ) : null}
        <div className="absolute inset-0 bg-[radial-gradient(46rem_30rem_at_88%_6%,rgba(35,71,245,0.10),transparent_62%)]" />
      </div>

      <div className="mx-auto w-full max-w-[80rem] px-5 sm:px-8">
        <div className="relative max-w-3xl pt-28 pb-16 sm:pt-36 sm:pb-24">
          <p className="label flex items-center gap-3 text-signal before:h-px before:w-6 before:bg-signal before:content-['']">
            {eyebrow}
          </p>
          <h1 className="display mt-7 text-[2.75rem] leading-[1.02] tracking-tight text-ink sm:text-[4rem]">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-[1.1875rem] leading-relaxed text-ink-2">
            {intro}
          </p>
        </div>
      </div>
    </section>
  );
}
