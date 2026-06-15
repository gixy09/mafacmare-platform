import { Button } from "@/components/ui/button";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { InfoCard } from "@/components/ui/info-card";
import { StatusPill } from "@/components/ui/status-pill";
import { mentorStats } from "@/data/dashboard";
import { getAnswersForMentor, getQuestionById, getQuestionsForMentor, mockMentorProfile, studentAnswerDisclaimer } from "@/data/platform";

export default function MentorDashboardPage() {
  const relevantQuestions = getQuestionsForMentor(mockMentorProfile.id);
  const submittedAnswers = getAnswersForMentor(mockMentorProfile.id);

  return (
    <DashboardShell
      title="Dashboard Student Mentor"
      description="Aici îți vezi profilul, întrebările relevante și răspunsurile trimise spre publicare."
      stats={mentorStats}
    >
      <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <InfoCard>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">{mockMentorProfile.publicLabel}</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950">{mockMentorProfile.fullName}</h2>
          <p className="mt-2 text-slate-600">{mockMentorProfile.bio}</p>
          <div className="mt-5 space-y-2 text-sm text-slate-700">
            <p>
              <strong>Universitate:</strong> {mockMentorProfile.university}
            </p>
            <p>
              <strong>Facultate:</strong> {mockMentorProfile.faculty}
            </p>
            <p>
              <strong>Program:</strong> {mockMentorProfile.program}
            </p>
            <p>
              <strong>An de studiu:</strong> {mockMentorProfile.yearOfStudy}
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {mockMentorProfile.badges.map((badge) => (
              <span key={badge} className="rounded-full bg-section px-3 py-1 text-xs font-semibold text-slate-700">
                {badge}
              </span>
            ))}
          </div>
        </InfoCard>

        <InfoCard>
          <h2 className="text-xl font-bold text-slate-950">Reminder pentru răspunsuri</h2>
          <p className="mt-3 text-slate-600">
            Răspunde din experiența ta personală, nu ca formă de consiliere oficială. Spune ce ai trăit tu, ce te-a surprins și ce l-ar ajuta pe un elev să înțeleagă mai bine contextul.
          </p>
          <p className="mt-4 text-sm text-slate-600">{studentAnswerDisclaimer}</p>
        </InfoCard>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <InfoCard>
          <h2 className="text-xl font-bold text-slate-950">Întrebări relevante pentru tine</h2>
          <div className="mt-4 space-y-4">
            {relevantQuestions.map((question) => (
              <div key={question.id} className="rounded-lg bg-section p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-slate-900">{question.title}</p>
                  <StatusPill status={question.status} />
                </div>
                <p className="mt-2 text-sm text-slate-600">{question.body}</p>
                <Button className="mt-4" variant="secondary">
                  Deschide formularul de răspuns
                </Button>
              </div>
            ))}
          </div>
        </InfoCard>

        <InfoCard>
          <h2 className="text-xl font-bold text-slate-950">Trimite un răspuns nou</h2>
          <p className="mt-2 text-sm text-slate-600">Poți salva ca draft, trimite în moderare sau reveni mai târziu pe răspuns.</p>
          <label className="mt-4 block text-sm font-semibold text-slate-700">
            Răspunsul tău
            <textarea className="mt-2 min-h-40 w-full rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent" placeholder="Scrie din experiența ta personală: cum a fost primul an, ce te-a surprins, ce merită aflat mai departe..." />
          </label>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button variant="secondary">Salvează ca draft</Button>
            <Button>Trimite în moderare</Button>
          </div>
        </InfoCard>
      </div>

      <div className="mt-8">
        <InfoCard>
          <h2 className="text-xl font-bold text-slate-950">Răspunsurile tale</h2>
          <div className="mt-4 space-y-4">
            {submittedAnswers.map((answer) => (
              <div key={answer.id} className="rounded-lg bg-section p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-slate-900">{getQuestionById(answer.questionId)?.title}</p>
                  <StatusPill status={answer.status} />
                </div>
                <p className="mt-2 text-sm text-slate-600">{answer.content}</p>
                {answer.moderationNote ? <p className="mt-2 text-xs font-medium text-slate-500">Notă moderare: {answer.moderationNote}</p> : null}
              </div>
            ))}
          </div>
        </InfoCard>
      </div>
    </DashboardShell>
  );
}
