import Link from "next/link";

const footerLinks = [
  { href: "/pentru-parinti", label: "Pentru părinți" },
  { href: "/pentru-parteneri", label: "Pentru parteneri educaționali" },
  { href: "/despre-calcul", label: "Despre calculul rezultatului" },
  { href: "/intreaba-un-student", label: "Întreabă un student" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <div>
          <p className="text-lg font-bold text-slate-950">MaFacMare.ro</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Orientare academică prietenoasă pentru elevi care vor să înțeleagă opțiunile, nu să primească o etichetă.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-700">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
