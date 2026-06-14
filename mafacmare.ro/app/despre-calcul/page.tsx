import { InfoCard } from "@/components/ui/info-card";
import { Section, SectionHeader } from "@/components/ui/section";

export default function CalculationPage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Despre calcul"
          title="Rezultatul combina indicii, nu pune etichete"
          description="Modelul viitor va compara raspunsurile cu profiluri largi de interese, stil de invatare si preferinte de lucru. Scopul este orientarea, nu diagnosticul."
        />
        <InfoCard className="mt-8">
          <h2 className="text-xl font-bold text-slate-950">Principii</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li>- Transparenta: elevul vede de ce apare o directie.</li>
            <li>- Flexibilitate: rezultatul se poate schimba pe masura ce elevul invata despre sine.</li>
            <li>- Responsabilitate: recomandarea incurajeaza discutii si explorare, nu decizii automate.</li>
          </ul>
        </InfoCard>
      </Section>
    </main>
  );
}
