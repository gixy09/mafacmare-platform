import type { QuestionnaireStep } from "@/types/domain";

export const questionnaireSteps: QuestionnaireStep[] = [
  {
    title: "Cum preferi sa inveti?",
    helper: "Alege varianta care seamana cel mai mult cu tine acum.",
    options: ["Prin exemple practice", "Prin discutii si explicatii", "Prin lectura si cercetare", "Prin proiecte creative"]
  },
  {
    title: "Ce tip de probleme te atrag?",
    helper: "Nu exista raspuns corect. Cautam indicii, nu etichete.",
    options: ["Probleme tehnice", "Probleme despre oameni", "Probleme de organizare", "Probleme de exprimare"]
  },
  {
    title: "Cum vrei sa arate o zi buna de lucru?",
    helper: "Imagineaza-ti un ritm care ti-ar da energie, nu doar prestigiu.",
    options: ["Cu analiza si concentrare", "Cu interactiune multa", "Cu decizii si responsabilitate", "Cu libertate creativa"]
  }
];
