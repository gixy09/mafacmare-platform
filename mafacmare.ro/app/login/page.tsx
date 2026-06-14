import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfoCard } from "@/components/ui/info-card";
import { Section, SectionHeader } from "@/components/ui/section";

export default function LoginPage() {
  return (
    <main>
      <Section>
        <div className="mx-auto max-w-xl">
          <SectionHeader eyebrow="Login" title="Intra in contul tau" description="Autentificarea va fi conectata la Supabase Auth in pasul urmator." />
          <InfoCard className="mt-8">
            <label className="block text-sm font-semibold text-slate-700">
              Email
              <input className="mt-2 w-full rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent" placeholder="nume@email.ro" />
            </label>
            <label className="mt-4 block text-sm font-semibold text-slate-700">
              Parola
              <input type="password" className="mt-2 w-full rounded-lg border border-blue-100 bg-section px-4 py-3 outline-none focus:border-accent" placeholder="Parola" />
            </label>
            <Button className="mt-6 w-full">Login</Button>
            <p className="mt-4 text-center text-sm text-slate-600">
              Nu ai cont?{" "}
              <Link href="/register" className="font-semibold text-accent">
                Creeaza unul
              </Link>
            </p>
          </InfoCard>
        </div>
      </Section>
    </main>
  );
}
