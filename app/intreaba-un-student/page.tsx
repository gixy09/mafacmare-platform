import { MessageSquareMore, Send, UserRoundSearch } from "lucide-react";
import { Button, LinkButton } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { PilotNote } from "@/components/ui/pilot-note";
import { Section, SectionHeader } from "@/components/ui/section";
import { studentAnswerDisclaimer, mockMentorProfile, pilotPlatformNote } from "@/data/platform";

const suggestedTopics = ["facultăți", "programe", "cursuri", "primul an", "profesori", "proiecte", "viață de student", "atmosferă"];

export default function AskStudentPage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Întreabă un student"
          title="Pune întrebarea pe care ai fi vrut să o auzi la timp."
          description="Aici întrebi un Student Mentor sau un Ambasador MaFacMare.ro despre cum arată facultatea din interior, din experiență reală."
        />
        <div className="mt-8 grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
          <InfoCard>
            <div className="flex items-center gap-3">
              <MessageSquareMore className="text-accent" aria-hidden="true" />
              <h2 className="text-xl font-bold text-slate-950">Trimite o întrebare</h2>
            </div>
            <p className="mt-3 text-sm text-slate-600">{studentAnswerDisclaimer}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {suggestedTopics.map((topic) => (
                <span key={topic} className="rounded-full bg-section px-3 py-1 text-xs font-semibold text-slate-700">
                  {topic}
                </span>
              ))}
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <label className="text-sm font-semibold text-slate-700">
                Domeniu sau program
                <input className="mt-2 w-full rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent" placeholder="ex. Comunicare și relații publice" />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Clasa
                <input className="mt-2 w-full rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent" placeholder="ex. clasa a XI-a" />
              </label>
            </div>
            <label className="mt-4 block text-sm font-semibold text-slate-700">
              Întrebarea ta
              <textarea
                className="mt-2 min-h-36 w-full rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent"
                placeholder="Poți întreba despre facultate, cursuri, primul an, profesori, proiecte, viață de student sau atmosferă."
              />
            </label>
            <Button className="mt-5">
              <Send size={16} aria-hidden="true" /> Trimite întrebarea
            </Button>
          </InfoCard>

          <div className="space-y-4">
            <InfoCard>
              <div className="flex items-center gap-3">
                <UserRoundSearch className="text-teal" aria-hidden="true" />
                <h2 className="text-xl font-bold text-slate-950">Cum funcționează</h2>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <p>1. Îți creezi cont ca Elev și trimiți întrebarea.</p>
                <p>2. Întrebarea merge spre Student Mentors potriviți după facultate, program sau temă.</p>
                <p>3. Răspunsul trece prin moderare și apoi apare în dashboard-ul tău.</p>
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <LinkButton href="/dashboard/elev" variant="secondary">
                  Vezi dashboard Elev
                </LinkButton>
                <LinkButton href="/register" variant="secondary">
                  Creează cont ca Elev
                </LinkButton>
              </div>
            </InfoCard>

            <InfoCard>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">{mockMentorProfile.publicLabel}</p>
              <h2 className="mt-2 text-xl font-bold text-slate-950">{mockMentorProfile.fullName}</h2>
              <p className="mt-2 text-sm text-slate-600">
                {mockMentorProfile.faculty} · {mockMentorProfile.program} · {mockMentorProfile.yearOfStudy}
              </p>
              <p className="mt-3 text-sm text-slate-600">{mockMentorProfile.bio}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {mockMentorProfile.badges.map((badge) => (
                  <span key={badge} className="rounded-full bg-section px-3 py-1 text-xs font-semibold text-slate-700">
                    {badge}
                  </span>
                ))}
              </div>
            </InfoCard>
          </div>
        </div>

        <div className="mt-8">
          <PilotNote copy={pilotPlatformNote} />
        </div>
      </Section>
    </main>
  );
}
