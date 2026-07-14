import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "deep";
}) {
  return (
    <p className={cn("label flex items-center gap-2.5", tone === "light" ? "text-ink-3" : "text-white/45", className)}>
      <span aria-hidden className={cn("h-px w-6", tone === "light" ? "bg-rule" : "bg-white/25")} />
      {children}
    </p>
  );
}
