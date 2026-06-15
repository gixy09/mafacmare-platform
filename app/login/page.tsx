import Link from "next/link";
import { Button, LinkButton } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { Section, SectionHeader } from "@/components/ui/section";

export default function LoginPage() {
  return (
    <main>
      <Section>
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            eyebrow="Login"
            title="Intră în contul tău"
            description="Autentificarea va fi conectată la Supabase Auth într-un pas următor. Momentan, ecranul arată cum va funcționa intrarea în cont pentru Elev și Student Mentor."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_0.85fr]">
            <InfoCard>
              <label className="block text-sm font-semibold text-slate-700">
                Email
                <input className="mt-2 w-full rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent" placeholder="nume@email.ro" />
              </label>
              <label className="mt-4 block text-sm font-semibold text-slate-700">
                Parolă
                <input type="password" className="mt-2 w-full rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent" placeholder="Parola" />
              </label>
              <Button className="mt-6 w-full">Intră în cont</Button>
              <p className="mt-4 text-center text-sm text-slate-600">
                Nu ai cont?{" "}
                <Link href="/register" className="font-semibold text-accent">
                  Creează unul
                </Link>
              </p>
            </InfoCard>
            <InfoCard>
              <h2 className="text-xl font-bold text-slate-950">Cum intri mai departe</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600">
                <p>
                  <strong className="text-slate-900">Elev:</strong> vezi rezultatul salvat, întrebările trimise și răspunsurile primite.
                </p>
                <p>
                  <strong className="text-slate-900">Student Mentor:</strong> vezi profilul tău, întrebările potrivite și statusul răspunsurilor.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <LinkButton href="/dashboard/elev" variant="secondary">
                  Vezi dashboard Elev
                </LinkButton>
                <LinkButton href="/dashboard/student-mentor" variant="secondary">
                  Vezi dashboard Student Mentor
                </LinkButton>
              </div>
            </InfoCard>
          </div>
        </div>
      </Section>
    </main>
  );
}
