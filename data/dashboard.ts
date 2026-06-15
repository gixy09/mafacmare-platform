import type { DashboardStat } from "@/types/domain";

export const elevStats: DashboardStat[] = [
  { label: "Rezultat salvat", value: "1", description: "ultimul rezultat orientativ completat" },
  { label: "Întrebări trimise", value: "3", description: "despre facultăți, cursuri și primul an" },
  { label: "Răspunsuri primite", value: "2", description: "de la Student Mentors aprobați" }
];

export const mentorStats: DashboardStat[] = [
  { label: "Întrebări relevante", value: "5", description: "potrivite pentru programul și facultatea ta" },
  { label: "Răspunsuri trimise", value: "4", description: "în lucru, în moderare sau publicate" },
  { label: "Status profil", value: "Aprobat", description: "profil activ ca Ambasador MaFacMare.ro" }
];

export const adminStats: DashboardStat[] = [
  { label: "Mentori în așteptare", value: "3", description: "profiluri care așteaptă aprobare" },
  { label: "Întrebări în moderare", value: "4", description: "necesită verificare înainte de publicare" },
  { label: "Răspunsuri în moderare", value: "6", description: "drafturi și răspunsuri gata de revizie" }
];
