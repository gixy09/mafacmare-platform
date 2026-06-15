import { InfoCard } from "@/components/ui/info-card";
import { PilotNote } from "@/components/ui/pilot-note";
import { Section, SectionHeader } from "@/components/ui/section";
import { pilotPlatformNote } from "@/data/platform";

export default function PartnersPage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Pentru parteneri educaționali"
          title="Un spațiu pentru licee, facultăți și organizații care vor orientare mai clară"
          description="Platforma este pregătită pentru parteneriate cu instituții care pot oferi contexte reale, mentori și conversații utile pentru elevi."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Profiluri de facultăți și programe", "Sesiuni de întrebări și răspunsuri cu Student Mentors", "Date agregate despre întrebările și interesele elevilor"].map((item) => (
            <InfoCard key={item}>
              <p className="font-semibold leading-7 text-slate-800">{item}</p>
            </InfoCard>
          ))}
        </div>
        <div className="mt-8">
          <PilotNote copy={pilotPlatformNote} />
        </div>
      </Section>
    </main>
  );
}
