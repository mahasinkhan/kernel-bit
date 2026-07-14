import { Eyebrow } from "@/components/eyebrow";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "light",
  className,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  tone?: "light" | "deep";
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "display mt-6 text-[2rem] sm:text-[2.75rem]",
          tone === "light" ? "text-ink" : "text-white",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-[1.0625rem] leading-relaxed",
            tone === "light" ? "text-ink-2" : "text-white/65",
          )}
        >
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}
