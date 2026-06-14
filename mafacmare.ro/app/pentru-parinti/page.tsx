import { InfoCard } from "@/components/ui/info-card";
import { Section, SectionHeader } from "@/components/ui/section";

export default function ParentsPage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Pentru parinti"
          title="Sprijin pentru discutii mai calme despre facultate"
          description="MaFacMare.ro nu inlocuieste dialogul din familie. Il face mai concret, cu intrebari bune si informatii usor de comparat."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Rezultate orientative, nu verdicte", "Intrebari care reduc presiunea", "Pasi mici de explorare reala"].map((item) => (
            <InfoCard key={item}>
              <p className="font-semibold leading-7 text-slate-800">{item}</p>
            </InfoCard>
          ))}
        </div>
      </Section>
    </main>
  );
}
