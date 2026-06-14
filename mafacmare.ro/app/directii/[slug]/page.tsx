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
        <SectionHeader eyebrow="Directie de studiu" title={direction.title} description={direction.description} />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <InfoCard>
            <h2 className="text-lg font-bold text-slate-950">Semne ca ti se potriveste</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              {direction.fitSignals.map((signal) => (
                <li key={signal}>- {signal}</li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard>
            <h2 className="text-lg font-bold text-slate-950">Facultati de explorat</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              {direction.sampleFaculties.map((faculty) => (
                <li key={faculty}>- {faculty}</li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard>
            <h2 className="text-lg font-bold text-slate-950">Roluri posibile</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              {direction.careers.map((career) => (
                <li key={career}>- {career}</li>
              ))}
            </ul>
          </InfoCard>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/intreaba-un-student">Intreaba un student</LinkButton>
          <LinkButton href="/discuta-cu-cineva" variant="secondary">
            Cere o conversatie
          </LinkButton>
        </div>
      </Section>
    </main>
  );
}
