import { GraduationCap, HeartHandshake } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { Section, SectionHeader } from "@/components/ui/section";

const options = [
  {
    icon: GraduationCap,
    title: "Vorbește cu cineva de la facultate",
    copy: "Pentru întrebări despre programe, cursuri, admitere, proiecte, viața de student și atmosferă."
  },
  {
    icon: HeartHandshake,
    title: "Vorbește cu un consilier vocațional",
    copy: "Pentru întrebări personale: ce mi se potrivește, presiune, indecizie, teamă de a alege greșit sau alegerea între mai multe variante."
  }
];

export default function TalkPage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Discută cu cineva"
          title="Nu toate întrebările au nevoie de același tip de răspuns."
          description="Uneori ai nevoie să înțelegi mai bine o facultate. Alteori ai nevoie să te înțelegi mai bine pe tine."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {options.map((option) => (
            <InfoCard key={option.title}>
              <option.icon className="text-accent" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-bold text-slate-950">{option.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{option.copy}</p>
            </InfoCard>
          ))}
        </div>
        <div className="mt-8">
          <LinkButton href="/register">Creează cont pentru cerere</LinkButton>
        </div>
      </Section>
    </main>
  );
}
