import { Button } from "@/components/ui/button";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { InfoCard } from "@/components/ui/info-card";
import { StatusPill } from "@/components/ui/status-pill";
import { adminStats } from "@/data/dashboard";
import { anonymizedInsights, mockMentorAnswers, mockStudentQuestions, pendingMentorProfiles } from "@/data/platform";

export default function AdminDashboardPage() {
  const pendingQuestions = mockStudentQuestions.filter((question) => question.status === "noua" || question.status === "in_moderare");
  const pendingAnswers = mockMentorAnswers.filter((answer) => answer.status === "draft" || answer.status === "in_moderare");

  return (
    <DashboardShell
      title="Dashboard Admin / moderator"
      description="Aici administrezi fluxurile platformei: aprobare mentori, moderare întrebări și răspunsuri, plus o vedere rapidă asupra datelor anonimizate."
      stats={adminStats}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <InfoCard>
          <h2 className="text-xl font-bold text-slate-950">Mentori în așteptare</h2>
          <div className="mt-4 space-y-4">
            {pendingMentorProfiles.map((mentor) => (
              <div key={mentor.id} className="rounded-lg bg-section p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-slate-900">{mentor.fullName}</p>
                  <StatusPill status={mentor.approvalStatus} />
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  {mentor.faculty} · {mentor.program} · {mentor.yearOfStudy}
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <Button>Aprobă profilul</Button>
                  <Button variant="secondary">Cere completări</Button>
                </div>
              </div>
            ))}
          </div>
        </InfoCard>

        <InfoCard>
          <h2 className="text-xl font-bold text-slate-950">Întrebări în moderare</h2>
          <div className="mt-4 space-y-4">
            {pendingQuestions.map((question) => (
              <div key={question.id} className="rounded-lg bg-section p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-slate-900">{question.title}</p>
                  <StatusPill status={question.status} />
                </div>
                <p className="mt-2 text-sm text-slate-600">{question.body}</p>
                <div className="mt-4 flex flex-col gap-3">
                  <Button>Publică întrebarea</Button>
                  <Button variant="secondary">Marchează privat</Button>
                </div>
              </div>
            ))}
          </div>
        </InfoCard>

        <InfoCard>
          <h2 className="text-xl font-bold text-slate-950">Răspunsuri în moderare</h2>
          <div className="mt-4 space-y-4">
            {pendingAnswers.map((answer) => (
              <div key={answer.id} className="rounded-lg bg-section p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-slate-900">{answer.id}</p>
                  <StatusPill status={answer.status} />
                </div>
                <p className="mt-2 text-sm text-slate-600">{answer.content}</p>
                <div className="mt-4 flex flex-col gap-3">
                  <Button>Marchează publicat</Button>
                  <Button variant="secondary">Marchează privat</Button>
                </div>
              </div>
            ))}
          </div>
        </InfoCard>
      </div>

      <div className="mt-8">
        <InfoCard>
          <h2 className="text-xl font-bold text-slate-950">Insight-uri anonimizate</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {anonymizedInsights.map((insight) => (
              <div key={insight.label} className="rounded-lg bg-section p-4">
                <p className="text-sm font-semibold text-accent">{insight.label}</p>
                <p className="mt-2 text-lg font-bold text-slate-950">{insight.value}</p>
                <p className="mt-2 text-sm text-slate-600">{insight.note}</p>
              </div>
            ))}
          </div>
        </InfoCard>
      </div>
    </DashboardShell>
  );
}
