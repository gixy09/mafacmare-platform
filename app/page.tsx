import { ArrowRight, Compass, MessageCircle, Sparkles, Users } from "lucide-react";
import { DirectionCard } from "@/components/direction-card";
import { LinkButton } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { directions } from "@/data/directions";

const painPoints = [
  "Sunt prea multe opțiuni și prea puțin context real despre ce înseamnă fiecare.",
  "Apare presiunea din partea părinților, profesorilor sau colegilor care par mai siguri.",
  "Poate apărea frica de a alege greșit și de a pierde timp.",
  "Multe denumiri de facultăți sună abstract și nu spun clar ce vei face acolo.",
  "E ușor să te compari cu alții care par că știu deja exact ce vor."
];

const steps = [
  "Completezi un chestionar scris pe limba elevilor, cu exemple din liceu și viața de zi cu zi.",
  "Primești un rezultat orientativ cu 3 direcții de explorat, nu un verdict despre viitorul tău.",
  "Poți merge mai departe cu întrebări bune, direcții SNSPA de explorat și conversații utile."
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
                  <p className="font-bold text-slate-950">Rezultat orientativ</p>
                  <p className="text-sm text-slate-600">3 direcții de explorat mai departe</p>
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
          description="Poate pare că toată lumea așteaptă de la tine un răspuns clar: ce facultate alegi, ce vrei să devii, ce faci după liceu. Dar nu trebuie să ai tot planul acum. MaFacMare.ro te ajută să începi cu pași mai mici: să vezi ce te atrage, ce ți se potrivește și ce direcții merită explorate mai departe. Nu îți alegem viitorul. Te ajutăm să-l înțelegi mai bine."
        />
      </Section>

      <Section>
        <SectionHeader
          title="De ce e greu să alegi facultatea?"
          description="Nu pentru că nu te interesează. Ci pentru că alegerea vine cu prea multe întrebări deodată."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {painPoints.map((point) => (
            <InfoCard key={point}>
              <p className="text-base font-semibold leading-7 text-slate-800">{point}</p>
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeader title="Cum funcționează" description="Un parcurs simplu, gândit pentru elevi care caută claritate, nu etichete fixe." />
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
        <SectionHeader title="Direcții de explorat" description="Nu pornim de la facultatea exactă, ci de la zone mai largi care pot să ți se potrivească." />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {directions.map((direction) => (
            <DirectionCard key={direction.slug} direction={direction} />
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeader
          title="Discută cu cineva"
          description="Nu toate întrebările au nevoie de același tip de răspuns. Uneori ai nevoie să înțelegi mai bine o facultate. Alteori ai nevoie să te înțelegi mai bine pe tine."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <InfoCard>
            <Compass className="text-accent" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-slate-950">Vorbește cu cineva de la facultate</h2>
            <p className="mt-3 text-slate-600">
              Pentru întrebări despre programe, cursuri, admitere, proiecte, viața de student și atmosferă.
            </p>
            <LinkButton href="/discuta-cu-cineva" className="mt-6">
              Vezi opțiunile
            </LinkButton>
          </InfoCard>
          <InfoCard>
            <Users className="text-teal" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-slate-950">Vorbește cu un consilier vocațional</h2>
            <p className="mt-3 text-slate-600">
              Pentru întrebări mai personale: ce mi se potrivește, presiune, indecizie, teamă de a alege greșit sau de a alege între mai multe variante.
            </p>
            <LinkButton href="/discuta-cu-cineva" className="mt-6" variant="secondary">
              Cere o conversație
            </LinkButton>
          </InfoCard>
        </div>
      </Section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard>
            <MessageCircle className="text-accent" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-slate-950">Întreabă un student</h2>
            <p className="mt-3 text-slate-600">Trimite o întrebare despre cursuri, ritm, admitere sau cum arată viața reală la facultate.</p>
            <LinkButton href="/intreaba-un-student" className="mt-6">
              Pune o întrebare
            </LinkButton>
          </InfoCard>
          <InfoCard>
            <Sparkles className="text-yellow" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-slate-950">Rezultat orientativ, nu verdict</h2>
            <p className="mt-3 text-slate-600">
              Rezultatul tău nu este o decizie. Este un punct de pornire pentru conversații, întrebări bune și explorare reală.
            </p>
          </InfoCard>
        </div>
      </Section>
    </main>
  );
}
