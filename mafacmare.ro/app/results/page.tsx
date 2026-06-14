import { DirectionCard } from "@/components/direction-card";
import { LinkButton } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { directions } from "@/data/directions";

export default function ResultsPage() {
  const topDirections = directions.slice(0, 3);

  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Rezultat orientativ"
          title="Top 3 directii pe care merita sa le explorezi"
          description="Rezultatul este un punct de pornire. Compara directiile, pune intrebari si discuta cu oameni care cunosc domeniul."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {topDirections.map((direction) => (
            <DirectionCard key={direction.slug} direction={direction} />
          ))}
        </div>
        <InfoCard className="mt-8">
          <h2 className="text-xl font-bold text-slate-950">Ce faci mai departe?</h2>
          <p className="mt-3 text-slate-600">Salveaza rezultatul in cont, intreaba un student mentor sau cere o conversatie cu un consilier.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/register">Creeaza cont</LinkButton>
            <LinkButton href="/discuta-cu-cineva" variant="secondary">
              Discuta cu cineva
            </LinkButton>
          </div>
        </InfoCard>
      </Section>
    </main>
  );
}
