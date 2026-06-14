import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  muted?: boolean;
};

export function Section({ children, className, muted }: SectionProps) {
  return (
    <section className={cn("w-full py-14 sm:py-20", muted && "bg-section", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">{eyebrow}</p> : null}
      <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-slate-600">{description}</p> : null}
    </div>
  );
}
