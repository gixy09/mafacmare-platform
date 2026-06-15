import { InfoCard } from "@/components/ui/info-card";

export function PilotNote({ copy }: { copy: string }) {
  return (
    <InfoCard className="border border-blue-100 bg-section">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">Platformă pilot</p>
      <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
    </InfoCard>
  );
}
