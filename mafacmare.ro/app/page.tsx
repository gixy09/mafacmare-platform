import { ArrowRight, MessageCircle, Sparkles, Users } from "lucide-react";
import { DirectionCard } from "@/components/direction-card";
import { LinkButton } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { directions } from "@/data/directions";

const painPoints = [
  "Prea multe facultăți, prea puțin context real.",
  "Presiune de la familie, colegi și propriile așteptări.",
  "Diferența dintre ce sună bine și ce ți se potrivește zi de zi."
];

const steps = [
  "Completezi chestionarul în 8–10 minute.",
  "Primim indicii despre interese, ritm și tipul de probleme care te atrag.",
  "Vezi top 3 direcții de studiu și următorii pași de explorare."
];

export default function HomePage() {
  return (
    <main>
      <Section className="pb-12 pt-12 sm:pb-20 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-accent">
              8–10 minute · rezultat orientativ
            </p>
            <h1 className="text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Nu trebuie să alegi perfect. Trebuie să începi să înțelegi ce ți se potrivește.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Completează un chestionar de orientare și descoperă 3 direcții de studiu pe care merită să le explorezi mai departe.
            </p>
            <p className="mt-4 text-sm font-medium text-slate-500">Nu este un test psihologic și nu îți decide viitorul.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/questionnaire">Începe chestionarul</LinkButton>
              <LinkButton href="/directii" variant="secondary">
                Explorează direcții
              </LinkButton>
            </div>
          </div>
          <div className="rounded-lg bg-white p-5 shadow-soft ring-1 ring-blue-50">
            <div className="rounded-lg bg-section p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-lg bg-accent text-white">
                  <Sparkles aria-hidden="true" />
                </span>
                <div>
                  <p className="font-bold text-slate-950">Rezultat exemplu</p>
                  <p className="text-sm text-slate-600">Top 3 direcții de explorat</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {directions.slice(0, 3).map((direction, index) => (
                  <div key={direction.slug} className="flex items-center justify-between rounded-lg bg-white p-4">
                    <span className="font-semibold text-slate-800">
                      {index + 1}. {direction.title}
                    </span>
                    <ArrowRight size={18} className="text-accent" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section muted>
        <SectionHeader
          title="E normal să nu știi încă."
          description="Alegerea facultății nu ar trebui să fie o decizie luată din panică. Platforma te ajută să transformi confuzia în întrebări mai bune și pași mici."
        />
      </Section>

      <Section>
        <SectionHeader title="De ce e greu să alegi facultatea?" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {painPoints.map((point) => (
            <InfoCard key={point}>
              <p className="text-base font-semibold leading-7 text-slate-800">{point}</p>
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeader title="Cum funcționează" description="Un parcurs simplu, gândit pentru elevi care au nevoie de claritate, nu de verdicte." />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <InfoCard key={step}>
              <span className="text-sm font-bold text-accent">Pasul {index + 1}</span>
              <p className="mt-3 text-base font-semibold leading-7 text-slate-800">{step}</p>
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="Direcții populare" description="Începe cu câteva zone largi și mergi mai adânc doar acolo unde apare interes real." />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {directions.map((direction) => (
            <DirectionCard key={direction.slug} direction={direction} />
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard>
            <Users className="text-teal" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-slate-950">Discută cu cineva</h2>
            <p className="mt-3 text-slate-600">Cere o conversație cu cineva dintr-o facultate sau cu un consilier vocațional.</p>
            <LinkButton href="/discuta-cu-cineva" className="mt-6">
              Cere o conversație
            </LinkButton>
          </InfoCard>
          <InfoCard>
            <MessageCircle className="text-accent" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-slate-950">Întreabă un student</h2>
            <p className="mt-3 text-slate-600">Trimite o întrebare către studenți mentori despre cursuri, ritm, admitere și viața reală la facultate.</p>
            <LinkButton href="/intreaba-un-student" className="mt-6" variant="secondary">
              Pune o întrebare
            </LinkButton>
          </InfoCard>
        </div>
      </Section>
    </main>
  );
}
