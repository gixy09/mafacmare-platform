import { InfoCard } from "@/components/ui/info-card";
import { Section, SectionHeader } from "@/components/ui/section";

export default function PartnersPage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Pentru parteneri educationali"
          title="Un spatiu pentru licee, facultati si organizatii care vor orientare mai buna"
          description="Platforma este pregatita pentru parteneriate cu institutii care pot oferi informatii clare, mentori si conversatii utile pentru elevi."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Profiluri de facultati", "Sesiuni de intrebari si raspunsuri", "Date agregate despre interesele elevilor"].map((item) => (
            <InfoCard key={item}>
              <p className="font-semibold leading-7 text-slate-800">{item}</p>
            </InfoCard>
          ))}
        </div>
      </Section>
    </main>
  );
}
