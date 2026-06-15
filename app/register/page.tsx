import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { registerableRoles, roles } from "@/lib/auth/roles";

export default function RegisterPage() {
  return (
    <main>
      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Register"
            title="Creează un cont MaFacMare.ro"
            description="Alege dacă intri ca Elev sau ca Student Mentor. Structura este pregătită pentru autentificare și profiluri reale într-un pas următor."
          />
          <InfoCard className="mt-8">
            <div className="grid gap-3 md:grid-cols-2">
              {registerableRoles.map((roleKey) => (
                <label key={roleKey} className="rounded-lg bg-section p-4 ring-1 ring-blue-100">
                  <input name="role" type="radio" className="mr-3" defaultChecked={roleKey === "elev"} />
                  <span className="font-semibold text-slate-900">{roleKey === "elev" ? "Sunt elev" : "Sunt Student Mentor"}</span>
                  <p className="mt-1 text-sm text-slate-600">{roles[roleKey].description}</p>
                </label>
              ))}
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <input className="rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent" placeholder="Nume și prenume" />
              <input className="rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent" placeholder="Email" />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <input className="rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent" placeholder="Clasă sau an de studiu" />
              <input type="password" className="rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent" placeholder="Parolă" />
            </div>

            <div className="mt-6 rounded-lg bg-section p-5">
              <h2 className="text-lg font-bold text-slate-950">Dacă alegi Student Mentor, completezi și</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <input className="rounded-lg border border-blue-100 bg-white px-4 py-3 outline-none focus:border-accent" placeholder="Universitate" />
                <input className="rounded-lg border border-blue-100 bg-white px-4 py-3 outline-none focus:border-accent" placeholder="Facultate" />
                <input className="rounded-lg border border-blue-100 bg-white px-4 py-3 outline-none focus:border-accent" placeholder="Program" />
                <input className="rounded-lg border border-blue-100 bg-white px-4 py-3 outline-none focus:border-accent" placeholder="An de studiu" />
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Profilul de Student Mentor intră în verificare înainte să devină activ. Aici vei apărea ca Student Mentor, Ambasador MaFacMare.ro sau voluntar în orientare academică.
              </p>
            </div>

            <Button className="mt-6 w-full">Creează cont</Button>
            <p className="mt-4 text-center text-sm text-slate-600">
              Ai deja cont?{" "}
              <Link href="/login" className="font-semibold text-accent">
                Intră aici
              </Link>
            </p>
          </InfoCard>
        </div>
      </Section>
    </main>
  );
}
