import { DirectionCard } from "@/components/direction-card";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { InfoCard } from "@/components/ui/info-card";
import { directions } from "@/data/directions";
import { elevStats } from "@/data/dashboard";

export default function StudentDashboardPage() {
  return (
    <DashboardShell title="Bun venit in spatiul tau de explorare" description="Aici vei vedea rezultatele, directiile salvate, intrebarile trimise si cererile de conversatie." stats={elevStats}>
      <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <div className="grid gap-4 md:grid-cols-2">
          {directions.slice(0, 2).map((direction) => (
            <DirectionCard key={direction.slug} direction={direction} />
          ))}
        </div>
        <InfoCard>
          <h2 className="text-xl font-bold text-slate-950">Urmatorul pas recomandat</h2>
          <p className="mt-3 text-slate-600">Alege o directie si trimite o intrebare concreta unui student mentor.</p>
        </InfoCard>
      </div>
    </DashboardShell>
  );
}
