import { LinkButton } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { questionnaireSteps } from "@/data/questionnaire";

export default function QuestionnairePage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Chestionar"
          title="Raspunde sincer, nu strategic."
          description="Acest prototip arata fluxul viitorului chestionar. In pasul cu Supabase, raspunsurile vor fi salvate in contul elevului."
        />
        <div className="mt-8 space-y-5">
          {questionnaireSteps.map((step, index) => (
            <InfoCard key={step.title}>
              <p className="text-sm font-semibold text-accent">Intrebarea {index + 1}</p>
              <h2 className="mt-2 text-xl font-bold text-slate-950">{step.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{step.helper}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {step.options.map((option) => (
                  <button key={option} className="rounded-lg bg-section p-4 text-left text-sm font-semibold text-slate-800 ring-1 ring-blue-100 transition hover:ring-accent">
                    {option}
                  </button>
                ))}
              </div>
            </InfoCard>
          ))}
        </div>
        <div className="mt-8">
          <LinkButton href="/results">Vezi rezultat demonstrativ</LinkButton>
        </div>
      </Section>
    </main>
  );
}
