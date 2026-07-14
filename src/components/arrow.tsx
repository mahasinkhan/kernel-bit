import { cn } from "@/lib/utils";
 
/**
 * An arrow that is drawn, not typed.
 *
 * The glyph version of this died the first time the source passed through a
 * console that was not UTF-8, and left an empty box on every call to action.
 * A path cannot be mangled by an encoding. Neither can it be, at 11px, blurry.
 */
export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden
      focusable="false"
      className={cn("h-[0.65em] w-[0.95em] shrink-0", className)}
    >
      <path d="M0 5h12M8.5 1.5 12 5l-3.5 3.5" />
    </svg>
  );
}