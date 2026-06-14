import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Direction } from "@/types/domain";
import { InfoCard } from "@/components/ui/info-card";
import { cn } from "@/lib/utils";

const accents = {
  blue: "bg-blue-100 text-blue-700",
  teal: "bg-teal-100 text-teal-700",
  lime: "bg-lime-100 text-lime-700",
  yellow: "bg-yellow-100 text-yellow-700"
};

export function DirectionCard({ direction }: { direction: Direction }) {
  return (
    <InfoCard className="flex h-full flex-col">
      <span className={cn("mb-5 w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide", accents[direction.accent])}>
        Directie
      </span>
      <h3 className="text-xl font-bold text-slate-950">{direction.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{direction.tagline}</p>
      <Link href={`/directii/${direction.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent">
        Vezi detalii <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </InfoCard>
  );
}
