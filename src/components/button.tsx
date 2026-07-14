import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "line" | "line-invert" | "solid-invert";

const styles: Record<Variant, string> = {
  primary: "bg-signal text-white hover:bg-signal-deep",
  line: "border border-ink text-ink hover:bg-ink hover:text-plate",
  "line-invert": "border border-white/35 text-white hover:bg-white hover:text-deep",
  "solid-invert": "bg-white text-signal hover:bg-ink hover:text-white",
};

const base =
  "label inline-flex items-center justify-center gap-2 rounded-plate px-5 py-3 transition-colors duration-200";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={cn(base, styles[variant], className)}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={cn(base, styles[variant], "disabled:cursor-not-allowed disabled:opacity-60", className)}
      {...props}
    >
      {children}
    </button>
  );
}
