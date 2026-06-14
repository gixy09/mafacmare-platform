import { CalendarCheck, GraduationCap, HeartHandshake } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { Section, SectionHeader } from "@/components/ui/section";

const options = [
  { icon: GraduationCap, title: "Cu cineva dintr-o facultate", copy: "Afli cum arata cursurile, admiterea si ritmul real." },
  { icon: HeartHandshake, title: "Cu un consilier vocational", copy: "Clarifici intrebari despre interese, presiune si urmatorii pasi." },
  { icon: CalendarCheck, title: "Cu un mentor disponibil", copy: "Primim cererea si propunem o fereastra potrivita." }
];

export default function TalkPage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Discuta cu cineva"
          title="Nu trebuie sa lamuresti totul singur."
          description="Cere o conversatie scurta cu cineva care poate explica domeniul din interior sau te poate ajuta sa pui intrebari mai clare."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {options.map((option) => (
            <InfoCard key={option.title}>
              <option.icon className="text-accent" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-bold text-slate-950">{option.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{option.copy}</p>
            </InfoCard>
          ))}
        </div>
        <div className="mt-8">
          <LinkButton href="/register">Creeaza cont pentru cerere</LinkButton>
        </div>
      </Section>
    </main>
  );
}
