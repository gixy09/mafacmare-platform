import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { InfoCard } from "@/components/ui/info-card";
import { mentorStats } from "@/data/dashboard";

const questions = [
  "Cum arata o saptamana normala la Automatica?",
  "Cat de multa matematica este la Economie?",
  "Ce ai fi vrut sa stii inainte de admitere?"
];

export default function MentorDashboardPage() {
  return (
    <DashboardShell title="Dashboard Student Mentor" description="Raspunde la intrebari, actualizeaza profilul si ajuta elevii sa inteleaga domeniul tau din interior." stats={mentorStats}>
      <div className="grid gap-4">
        {questions.map((question) => (
          <InfoCard key={question}>
            <p className="text-sm font-semibold text-accent">Intrebare noua</p>
            <h2 className="mt-2 text-lg font-bold text-slate-950">{question}</h2>
            <p className="mt-2 text-sm text-slate-600">Raspunsul tau va fi moderat inainte sa fie public.</p>
          </InfoCard>
        ))}
      </div>
    </DashboardShell>
  );
}
