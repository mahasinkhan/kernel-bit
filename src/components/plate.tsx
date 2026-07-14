import { cn } from "@/lib/utils";

/** Registration marks, as on a drawing that has been through a press. */
export function Crosshairs({ tone = "light" }: { tone?: "light" | "deep" }) {
  const positions = ["-top-[7px] -left-[7px]", "-top-[7px] -right-[7px]", "-bottom-[7px] -left-[7px]", "-bottom-[7px] -right-[7px]"];
  return (
    <>
      {positions.map((pos) => (
        <span
          key={pos}
          aria-hidden
          className={cn("pointer-events-none absolute z-10", pos, tone === "light" ? "text-ink/30" : "text-white/30")}
        >
          <svg viewBox="0 0 14 14" className="h-3.5 w-3.5">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1" />
          </svg>
        </span>
      ))}
    </>
  );
}

export function Plate({
  children,
  className,
  tone = "light",
  marks = false,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "deep";
  marks?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-plate border",
        tone === "light" ? "border-rule bg-plate" : "border-deep-rule bg-deep-plate",
        className,
      )}
    >
      {marks ? <Crosshairs tone={tone} /> : null}
      {children}
    </div>
  );
}
