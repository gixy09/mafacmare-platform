import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { LinkButton } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { StatusPill } from "@/components/ui/status-pill";
import { elevStats } from "@/data/dashboard";
import { getAnswersForStudent, getQuestionById, mockStudentProfile, studentAnswerDisclaimer } from "@/data/platform";

export default function StudentDashboardPage() {
  const receivedAnswers = getAnswersForStudent(mockStudentProfile.id);

  return (
    <DashboardShell
      title="Spațiul tău de explorare"
      description="Aici vezi rezultatul salvat, întrebările trimise către Student Mentors și răspunsurile care te pot ajuta să compari opțiunile."
      stats={elevStats}
    >
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <InfoCard>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Rezultat salvat</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950">Top 3 direcții recomandate</h2>
          <p className="mt-2 text-sm text-slate-600">{mockStudentProfile.savedResult.summary}</p>
          <div className="mt-5 space-y-3">
            {mockStudentProfile.savedResult.topDirections.map((result, index) => (
              <div key={result.direction.slug} className="rounded-lg bg-section p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-slate-900">
                    {index + 1}. {result.direction.title}
                  </p>
                  <span className="text-sm font-bold text-accent">{result.percentage}%</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{result.direction.tagline}</p>
              </div>
            ))}
          </div>
        </InfoCard>

        <InfoCard>
          <h2 className="text-2xl font-bold text-slate-950">Ce faci mai departe</h2>
          <p className="mt-3 text-slate-600">Poți pune o întrebare nouă sau poți cere o conversație dacă simți că ai nevoie de mai mult context.</p>
          <div className="mt-6 flex flex-col gap-3">
            <LinkButton href="/intreaba-un-student">Pune o întrebare nouă</LinkButton>
            <LinkButton href="/discuta-cu-cineva" variant="secondary">
              Discută cu cineva
            </LinkButton>
          </div>
        </InfoCard>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <InfoCard>
          <h2 className="text-xl font-bold text-slate-950">Întrebările trimise</h2>
          <div className="mt-4 space-y-4">
            {mockStudentProfile.submittedQuestionIds.map((questionId) => {
              const question = getQuestionById(questionId);
              if (!question) {
                return null;
              }

              return (
                <div key={question.id} className="rounded-lg bg-section p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-900">{question.title}</p>
                    <StatusPill status={question.status} />
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{question.body}</p>
                </div>
              );
            })}
          </div>
        </InfoCard>

        <InfoCard>
          <h2 className="text-xl font-bold text-slate-950">Răspunsuri primite</h2>
          <p className="mt-2 text-sm text-slate-600">{studentAnswerDisclaimer}</p>
          <div className="mt-4 space-y-4">
            {receivedAnswers.map((answer) => {
              const question = getQuestionById(answer.questionId);
              return (
                <div key={answer.id} className="rounded-lg bg-section p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-900">{question?.title}</p>
                    <StatusPill status={answer.status} />
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{answer.content}</p>
                </div>
              );
            })}
          </div>
        </InfoCard>
      </div>
    </DashboardShell>
  );
}
