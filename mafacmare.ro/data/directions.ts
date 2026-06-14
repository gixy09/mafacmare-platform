import type { Direction } from "@/types/domain";

export const directions: Direction[] = [
  {
    slug: "tehnologie-si-inginerie",
    title: "Tehnologie si inginerie",
    tagline: "Pentru elevi curiosi sa construiasca, sa repare si sa inteleaga sisteme.",
    description:
      "Directia combina gandirea logica, proiectarea si rezolvarea de probleme practice. Poate include informatica, automatica, electronica, constructii sau inginerie industriala.",
    fitSignals: ["Iti place sa intelegi cum functioneaza lucrurile", "Ai rabdare cu probleme tehnice", "Preferi proiectele concrete"],
    sampleFaculties: ["Automatica si Calculatoare", "Electronica", "Constructii", "Inginerie mecanica"],
    careers: ["software developer", "inginer proiectant", "analist date", "specialist automatizari"],
    accent: "blue"
  },
  {
    slug: "sanatate-si-stiinte-ale-vietii",
    title: "Sanatate si stiinte ale vietii",
    tagline: "Pentru cei care vor sa lucreze cu oameni, corpul uman si cercetarea aplicata.",
    description:
      "Aici intra medicina, asistenta medicala, psihologia, biologia, nutritia sau recuperarea. Ritmul poate fi intens, dar impactul social este clar.",
    fitSignals: ["Iti pasa de starea oamenilor", "Poti invata consecvent", "Te intereseaza biologia si chimia"],
    sampleFaculties: ["Medicina", "Psihologie", "Biologie", "Kinetoterapie"],
    careers: ["medic", "psiholog", "cercetator", "kinetoterapeut"],
    accent: "teal"
  },
  {
    slug: "business-comunicare-si-societate",
    title: "Business, comunicare si societate",
    tagline: "Pentru elevi interesati de oameni, organizatii, economie si decizii.",
    description:
      "Directia acopera economie, marketing, comunicare, sociologie, relatii internationale si administratie. Este potrivita cand iti place sa conectezi idei si oameni.",
    fitSignals: ["Iti place sa explici si sa negociezi", "Observi usor dinamici sociale", "Vrei sa intelegi cum functioneaza organizatiile"],
    sampleFaculties: ["ASE", "Comunicare si relatii publice", "Sociologie", "Stiinte politice"],
    careers: ["consultant", "specialist marketing", "manager proiect", "analist politici publice"],
    accent: "yellow"
  },
  {
    slug: "arte-design-si-media",
    title: "Arte, design si media",
    tagline: "Pentru elevi care gandesc vizual, spun povesti si creeaza experiente.",
    description:
      "Include design grafic, arhitectura, film, jurnalism, arte vizuale, muzica si productie digitala. Portofoliul si practica sunt la fel de importante ca teoria.",
    fitSignals: ["Ai idei vizuale sau narative", "Iti place sa primesti feedback pe creatii", "Lucrezi bine pe proiecte deschise"],
    sampleFaculties: ["Arhitectura", "UNArte", "Film", "Jurnalism"],
    careers: ["designer", "arhitect", "creator continut", "jurnalist"],
    accent: "lime"
  }
];

export function getDirectionBySlug(slug: string) {
  return directions.find((direction) => direction.slug === slug);
}
