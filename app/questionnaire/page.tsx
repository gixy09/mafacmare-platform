import { Button, LinkButton } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { questionnaireSteps } from "@/data/questionnaire";

export default function QuestionnairePage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Chestionar"
          title="Răspunde sincer, nu strategic."
          description="Întrebările sunt scrise pentru elevi de liceu și pornesc din situații reale: proiecte, colegi, teme, prezentări, cluburi, social media și discuții despre viitor."
        />
        <form action="/results" className="mt-8 space-y-5">
          {questionnaireSteps.map((step, index) => (
            <InfoCard key={step.id}>
              <p className="text-sm font-semibold text-accent">Întrebarea {index + 1}</p>
              <h2 className="mt-2 text-xl font-bold text-slate-950">{step.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{step.helper}</p>
              <div className="mt-5 grid gap-3">
                {step.options.map((option) => (
                  <label key={option.id} className="rounded-lg bg-section p-4 text-left ring-1 ring-blue-100 transition hover:ring-accent">
                    <input className="mr-3" type="radio" name={step.id} value={option.id} required />
                    <span className="text-sm font-semibold text-slate-800">{option.label}</span>
                  </label>
                ))}
              </div>
            </InfoCard>
          ))}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button type="submit">Vezi rezultatul orientativ</Button>
            <LinkButton href="/results" variant="secondary">
              Vezi un exemplu de rezultat
            </LinkButton>
          </div>
        </form>
      </Section>
    </main>
  );
}
