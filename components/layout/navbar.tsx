import Link from "next/link";
import { Compass } from "lucide-react";
import { LinkButton } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Acasă" },
  { href: "/questionnaire", label: "Chestionar" },
  { href: "/directii", label: "Direcții" },
  { href: "/discuta-cu-cineva", label: "Discută cu cineva" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-blue-100 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-slate-950">
          <span className="grid size-9 place-items-center rounded-lg bg-accent text-white">
            <Compass size={20} aria-hidden="true" />
          </span>
          MaFacMare.ro
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-accent">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <LinkButton href="/login" variant="ghost">
            Login
          </LinkButton>
          <LinkButton href="/register">Creează cont</LinkButton>
        </div>
      </nav>
      <div className="flex gap-3 overflow-x-auto px-4 pb-3 text-sm font-medium text-slate-700 lg:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="whitespace-nowrap rounded-full bg-white px-4 py-2 ring-1 ring-blue-100">
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
