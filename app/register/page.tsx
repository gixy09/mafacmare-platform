import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { roles } from "@/lib/auth/roles";

export default function RegisterPage() {
  return (
    <main>
      <Section>
        <div className="mx-auto max-w-2xl">
          <SectionHeader eyebrow="Register" title="Creeaza un cont MaFacMare.ro" description="Alege rolul potrivit. Permisiunile vor fi aplicate prin Supabase in pasul urmator." />
          <InfoCard className="mt-8">
            <div className="grid gap-3">
              {Object.entries(roles).map(([key, role]) => (
                <label key={key} className="rounded-lg bg-section p-4 ring-1 ring-blue-100">
                  <input name="role" type="radio" className="mr-3" defaultChecked={key === "elev"} />
                  <span className="font-semibold text-slate-900">{role.label}</span>
                  <p className="mt-1 text-sm text-slate-600">{role.description}</p>
                </label>
              ))}
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <input className="rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent" placeholder="Nume" />
              <input className="rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent" placeholder="Email" />
            </div>
            <input type="password" className="mt-4 w-full rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent" placeholder="Parola" />
            <Button className="mt-6 w-full">Creeaza cont</Button>
            <p className="mt-4 text-center text-sm text-slate-600">
              Ai deja cont?{" "}
              <Link href="/login" className="font-semibold text-accent">
                Intra aici
              </Link>
            </p>
          </InfoCard>
        </div>
      </Section>
    </main>
  );
}
