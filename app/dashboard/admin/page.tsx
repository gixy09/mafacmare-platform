import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { InfoCard } from "@/components/ui/info-card";
import { adminStats } from "@/data/dashboard";

const queues = ["Moderare intrebari", "Cereri conversatie", "Validare mentori", "Continut directii"];

export default function AdminDashboardPage() {
  return (
    <DashboardShell title="Dashboard Admin / Moderator" description="Administreaza fluxurile esentiale ale platformei si pregateste datele pentru integrarea Supabase." stats={adminStats}>
      <div className="grid gap-4 md:grid-cols-2">
        {queues.map((queue) => (
          <InfoCard key={queue}>
            <h2 className="text-lg font-bold text-slate-950">{queue}</h2>
            <p className="mt-2 text-sm text-slate-600">Lista placeholder pregatita pentru date reale si politici de acces pe rol.</p>
          </InfoCard>
        ))}
      </div>
    </DashboardShell>
  );
}
