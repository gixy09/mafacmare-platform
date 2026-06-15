import { LinkButton } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { PilotNote } from "@/components/ui/pilot-note";
import { Section, SectionHeader } from "@/components/ui/section";
import { pilotPlatformNote } from "@/data/platform";
import { hasCompleteAnswers, resolveAnswers, scoreQuestionnaire } from "@/lib/questionnaire";

type ResultsPageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default function ResultsPage({ searchParams }: ResultsPageProps) {
  const results = scoreQuestionnaire(resolveAnswers(searchParams));
  const complete = hasCompleteAnswers(searchParams);

  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow={complete ? "Rezultat orientativ" : "Rezultat orientativ demonstrativ"}
          title="Direcții de explorat mai departe"
          description="Nu este test psihologic, nu îți decide viitorul și nu există răspunsuri bune sau greșite. Rezultatul tău nu este o decizie. Este un punct de pornire."
        />

        <InfoCard className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Important</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950">Rezultatul tău nu este o decizie. Este un punct de pornire.</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Folosește acest rezultat ca să îți faci întrebările mai bune. Compară direcțiile, vorbește cu oameni și vezi ce merită aflat mai departe.
          </p>
        </InfoCard>

        <div className="mt-6">
          <PilotNote copy={pilotPlatformNote} />
        </div>

        <div className="mt-8 space-y-6">
          {results.map((result, index) => (
            <InfoCard key={result.direction.slug}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-sm font-semibold text-accent">Direcția {index + 1}</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950">{result.direction.title}</h2>
                  <p className="mt-3 max-w-3xl text-slate-600">{result.direction.tagline}</p>
                </div>
                <div className="rounded-lg bg-section px-4 py-3 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Potrivire orientativă</p>
                  <p className="mt-1 text-3xl font-bold text-accent">{result.percentage}%</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-950">De ce apare direcția asta</h3>
                  <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                    {result.reasons.map((reason) => (
                      <li key={reason}>- {reason}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950">Ce poate să implice</h3>
                  <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                    {result.direction.mayInvolve.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-section p-4">
                <h3 className="text-lg font-bold text-slate-950">Mituri vs realitate</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {result.direction.mythsVsReality.map((item) => (
                    <div key={item.myth} className="rounded-lg bg-white p-4">
                      <p className="text-sm font-semibold text-rose-700">Mit: {item.myth}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">Realitate: {item.reality}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-950">Programe SNSPA înrudite</h3>
                  <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                    {result.direction.relatedSnspaPrograms.map((program) => (
                      <li key={program}>- {program}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950">Ce merită să afli mai departe</h3>
                  <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                    {result.direction.learnMore.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950">Întrebări bune de pus mai departe</h3>
                  <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                    {result.direction.goodQuestions.map((question) => (
                      <li key={question}>- {question}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <LinkButton href={`/directii/${result.direction.slug}`}>Vezi direcția în detaliu</LinkButton>
                <LinkButton href="/discuta-cu-cineva" variant="secondary">
                  Discută cu cineva
                </LinkButton>
              </div>
            </InfoCard>
          ))}
        </div>
      </Section>
    </main>
  );
}
