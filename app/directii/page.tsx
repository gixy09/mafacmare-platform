import { DirectionCard } from "@/components/direction-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { directions } from "@/data/directions";

export default function DirectionsPage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Directii"
          title="Exploreaza directii de studiu fara presiunea unei alegeri finale"
          description="Fiecare directie este o familie de domenii. Incepe larg, apoi restrange pe baza interesului si a discutiilor reale."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {directions.map((direction) => (
            <DirectionCard key={direction.slug} direction={direction} />
          ))}
        </div>
      </Section>
    </main>
  );
}
