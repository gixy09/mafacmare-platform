import type { DashboardStat } from "@/types/domain";

export const elevStats: DashboardStat[] = [
  { label: "Directii salvate", value: "3", description: "din ultimul rezultat orientativ" },
  { label: "Intrebari trimise", value: "2", description: "catre studenti mentori" },
  { label: "Conversatii", value: "1", description: "cerere in asteptare" }
];

export const mentorStats: DashboardStat[] = [
  { label: "Intrebari noi", value: "7", description: "asteapta raspuns" },
  { label: "Raspunsuri utile", value: "24", description: "marcate de elevi" },
  { label: "Profil", value: "80%", description: "completat" }
];

export const adminStats: DashboardStat[] = [
  { label: "Cereri noi", value: "14", description: "conversatii si consiliere" },
  { label: "Intrebari raportate", value: "3", description: "pentru moderare" },
  { label: "Mentori activi", value: "18", description: "in ultimele 30 zile" }
];
