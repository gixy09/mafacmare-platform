import { InfoCard } from "@/components/ui/info-card";
import { PilotNote } from "@/components/ui/pilot-note";
import { Section, SectionHeader } from "@/components/ui/section";
import { pilotPlatformNote } from "@/data/platform";

export default function CalculationPage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Despre calculul rezultatului"
          title="Rezultatul combină indicii, nu pune etichete"
          description="Modelul actual compară răspunsurile cu profile largi de interese, stil de implicare și felul în care elevul reacționează în situații din viața de liceu. Scopul este orientarea, nu diagnosticul."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <InfoCard>
            <h2 className="text-xl font-bold text-slate-950">Principii</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>- Transparență: elevul poate vedea de ce apare o direcție.</li>
              <li>- Flexibilitate: rezultatul se poate schimba pe măsură ce elevul învață despre sine.</li>
              <li>- Responsabilitate: recomandarea încurajează conversații și explorare, nu decizii automate.</li>
            </ul>
          </InfoCard>
          <PilotNote copy={pilotPlatformNote} />
        </div>
      </Section>
    </main>
  );
}
