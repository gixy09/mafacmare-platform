import { notFound } from "next/navigation";
import { LinkButton } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { directions, getDirectionBySlug } from "@/data/directions";

export function generateStaticParams() {
  return directions.map((direction) => ({ slug: direction.slug }));
}

export default function DirectionDetailPage({ params }: { params: { slug: string } }) {
  const direction = getDirectionBySlug(params.slug);

  if (!direction) {
    notFound();
  }

  return (
    <main>
      <Section>
        <SectionHeader eyebrow="Direcție de explorat" title={direction.title} description={direction.description} />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <InfoCard>
            <h2 className="text-lg font-bold text-slate-950">Semne că merită explorată</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              {direction.fitSignals.map((signal) => (
                <li key={signal}>- {signal}</li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard>
            <h2 className="text-lg font-bold text-slate-950">Programe SNSPA înrudite</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              {direction.relatedSnspaPrograms.map((program) => (
                <li key={program}>- {program}</li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard>
            <h2 className="text-lg font-bold text-slate-950">Ce poate să implice</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              {direction.mayInvolve.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </InfoCard>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <InfoCard>
            <h2 className="text-lg font-bold text-slate-950">Ce merită să afli mai departe</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              {direction.learnMore.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard>
            <h2 className="text-lg font-bold text-slate-950">Întrebări bune de pus mai departe</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              {direction.goodQuestions.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </InfoCard>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/intreaba-un-student">Întreabă un student</LinkButton>
          <LinkButton href="/discuta-cu-cineva" variant="secondary">
            Cere o conversație
          </LinkButton>
        </div>
      </Section>
    </main>
  );
}
