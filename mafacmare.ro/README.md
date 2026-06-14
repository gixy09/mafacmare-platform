# MaFacMare.ro Platform

Platforma MaFacMare.ro este un produs de orientare academica pentru liceeni din Romania. Starterul foloseste Next.js App Router, TypeScript si Tailwind CSS, cu o arhitectura pregatita pentru Supabase Auth si baza de date.

## Comenzi

```bash
npm install
npm run dev
npm run typecheck
```

## Structura

- `app/` contine rutele publice si dashboardurile pe roluri.
- `components/` contine layout, UI primitives si componente de dashboard.
- `data/` contine date placeholder pentru directii, intrebari si activitati.
- `lib/supabase/` pregateste clientii Supabase fara integrare activa.
- `lib/auth/` centralizeaza rolurile si regulile de acces.

## Pasul urmator

Adaugarea Supabase Auth, tabelelor pentru profiluri, raspunsuri la chestionar, rezultate, intrebari si cereri de conversatie.
