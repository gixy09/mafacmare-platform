import { InfoCard } from "@/components/ui/info-card";
import { Section, SectionHeader } from "@/components/ui/section";

const pressurePhrases = [
  "Trebuie să te hotărăști odată.",
  "Uite, colegii tăi știu deja ce vor.",
  "Să nu alegi ceva din care nu iese nimic.",
  "Nu are rost să pierzi timpul cu întrebări."
];

const goodQuestions = [
  "Ce ți se pare interesant la direcția asta?",
  "Ce ai vrea să afli înainte să alegi?",
  "Ce te sperie cel mai mult?",
  "Cu cine ai putea vorbi ca să înțelegi mai bine?",
  "Ce opțiuni ai vrea să comparăm împreună?"
];

export default function ParentsPage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Pentru părinți"
          title="Cum poți susține alegerea fără să pui presiune"
          description="MaFacMare.ro nu înlocuiește dialogul din familie. Îl poate face mai clar, mai calm și mai util pentru elev."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <InfoCard>
            <h2 className="text-xl font-bold text-slate-950">Cum pui întrebări fără presiune</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>- Pune întrebări care deschid conversația, nu care cer un răspuns final imediat.</li>
              <li>- Fii curios despre ce îl atrage și ce îl neliniștește, nu doar despre numele facultății.</li>
              <li>- Lasă loc pentru „încă nu știu” fără să transformi asta într-o problemă.</li>
            </ul>
          </InfoCard>
          <InfoCard>
            <h2 className="text-xl font-bold text-slate-950">Cum vorbești despre viitor fără panică</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>- Mută discuția de la „alegerea perfectă” la „următorul pas util”.</li>
              <li>- Comparați opțiuni, nu persoane.</li>
              <li>- Folosiți rezultatul orientativ ca punct de pornire, nu ca verdict.</li>
            </ul>
          </InfoCard>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <InfoCard>
            <h2 className="text-xl font-bold text-slate-950">Ce poate crea presiune</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              {pressurePhrases.map((phrase) => (
                <li key={phrase}>- {phrase}</li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard>
            <h2 className="text-xl font-bold text-slate-950">Cum ajuți la comparația între opțiuni</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>- Comparați cum arată cursurile, proiectele, ritmul și atmosfera.</li>
              <li>- Notați ce îl atrage, ce îl sperie și ce întrebări mai lipsesc.</li>
              <li>- Căutați oameni reali cu care poate vorbi, nu doar descrieri de pe site.</li>
            </ul>
          </InfoCard>
          <InfoCard>
            <h2 className="text-xl font-bold text-slate-950">Rezultatul orientativ, pe înțelesul familiei</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>- Nu este test psihologic.</li>
              <li>- Nu decide viitorul elevului.</li>
              <li>- Arată doar ce direcții merită explorate mai departe.</li>
            </ul>
          </InfoCard>
        </div>

        <InfoCard className="mt-8">
          <h2 className="text-xl font-bold text-slate-950">Întrebări bune de pus mai departe</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {goodQuestions.map((question) => (
              <div key={question} className="rounded-lg bg-section p-4 text-sm font-semibold text-slate-800">
                {question}
              </div>
            ))}
          </div>
        </InfoCard>
      </Section>
    </main>
  );
}
