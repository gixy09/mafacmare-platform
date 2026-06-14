import { Button } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { Section, SectionHeader } from "@/components/ui/section";

export default function ContactPage() {
  return (
    <main>
      <Section>
        <SectionHeader eyebrow="Contact" title="Scrie-ne despre intrebari, parteneriate sau feedback" description="Mesajele din acest formular vor fi conectate ulterior la Supabase." />
        <InfoCard className="mt-8">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent" placeholder="Nume" />
            <input className="rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent" placeholder="Email" />
          </div>
          <textarea className="mt-4 min-h-36 w-full rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent" placeholder="Mesaj" />
          <Button className="mt-5">Trimite mesajul</Button>
        </InfoCard>
      </Section>
    </main>
  );
}
