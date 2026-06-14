import type { ReactNode } from "react";
import { InfoCard } from "@/components/ui/info-card";
import type { DashboardStat } from "@/types/domain";

export function DashboardShell({
  title,
  description,
  stats,
  children
}: {
  title: string;
  description: string;
  stats: DashboardStat[];
  children: ReactNode;
}) {
  return (
    <main className="bg-background py-10">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Dashboard</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">{title}</h1>
          <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">{description}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <InfoCard key={stat.label}>
              <p className="text-sm font-medium text-slate-600">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold text-slate-950">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-500">{stat.description}</p>
            </InfoCard>
          ))}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </main>
  );
}
