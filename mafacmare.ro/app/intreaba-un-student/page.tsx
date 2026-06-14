import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { Section, SectionHeader } from "@/components/ui/section";

export default function AskStudentPage() {
  return (
    <main>
      <Section>
        <SectionHeader
          eyebrow="Intreaba un student"
          title="Pune intrebarea pe care ai vrea sa o fi auzit la timp."
          description="Studentii mentori pot raspunde despre cursuri, admitere, profesori, practica, ritm si ce i-a surprins dupa primul semestru."
        />
        <InfoCard className="mt-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700">
              Domeniu sau facultate
              <input className="mt-2 w-full rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent" placeholder="ex. Psihologie, Automatica" />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Clasa
              <input className="mt-2 w-full rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent" placeholder="ex. a XI-a" />
            </label>
          </div>
          <label className="mt-4 block text-sm font-semibold text-slate-700">
            Intrebarea ta
            <textarea className="mt-2 min-h-36 w-full rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent" placeholder="Scrie intrebarea cat mai concret..." />
          </label>
          <Button className="mt-5">
            <Send size={16} aria-hidden="true" /> Trimite intrebarea
          </Button>
        </InfoCard>
      </Section>
    </main>
  );
}
