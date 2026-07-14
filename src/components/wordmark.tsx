import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/** A stepped plot line, escaping the frame. The company's whole idea in 16px. */
export function Wordmark({ className, showName = true }: { className?: string; showName?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 16 16" aria-hidden className="h-4 w-4 shrink-0">
        <path
          d="M0 13h4V8.5h4V4h8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="square"
        />
        <circle cx="14.5" cy="4" r="1.5" fill="currentColor" />
      </svg>
      {showName ? (
        <span className="display-md text-[0.9375rem] tracking-[0.02em] uppercase">{site.name}</span>
      ) : null}
    </span>
  );
}
