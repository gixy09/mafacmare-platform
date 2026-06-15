import { DirectionCard } from "@/components/direction-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { directions } from "@/data/directions";

export default function DirectionsPage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Direcții"
          title="Explorează direcții de studiu fără presiunea unei alegeri finale"
          description="Fiecare direcție este o zonă largă de explorare. Începe cu ce te atrage și mergi mai adânc pe parcurs."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {directions.map((direction) => (
            <DirectionCard key={direction.slug} direction={direction} />
          ))}
        </div>
      </Section>
    </main>
  );
}
