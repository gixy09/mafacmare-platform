import type { QuestionnaireStep } from "@/types/domain";

export const questionnaireSteps: QuestionnaireStep[] = [
  {
    id: "q1",
    title: "La un proiect pe echipe, în ce moment te simți cel mai în largul tău?",
    helper: "Alege varianta care seamănă cel mai mult cu felul tău de a fi, nu cu ce crezi că ar suna bine.",
    options: [
      {
        id: "q1a",
        label: "Când pun cap la cap ideile și încerc să fac prezentarea clară și convingătoare.",
        scores: { communication: 3, digital: 1 }
      },
      {
        id: "q1b",
        label: "Când observ cine s-a blocat și încerc să îi ajut pe ceilalți să lucreze mai liniștiți.",
        scores: { psychology: 3, sociology: 1 }
      },
      {
        id: "q1c",
        label: "Când facem planul, împărțim pașii și văd că lucrurile chiar înaintează.",
        scores: { management: 3, administration: 1 }
      },
      {
        id: "q1d",
        label: "Când caut rapid informații, exemple sau instrumente online care ne salvează timp.",
        scores: { digital: 3, management: 1 }
      }
    ]
  },
  {
    id: "q2",
    title: "Dacă trebuie să pregătești o prezentare pentru clasă, ce parte îți vine mai natural?",
    helper: "Nu există răspunsuri bune sau greșite.",
    options: [
      {
        id: "q2a",
        label: "Să găsesc un fir logic și să explic pe înțelesul tuturor ce vreau să spun.",
        scores: { communication: 3, sociology: 1 }
      },
      {
        id: "q2b",
        label: "Să fac slide-uri, exemple vizuale sau un format care atrage atenția.",
        scores: { digital: 3, communication: 1 }
      },
      {
        id: "q2c",
        label: "Să mă gândesc ce întrebări sau reacții ar putea avea colegii și profesorul.",
        scores: { psychology: 2, communication: 2 }
      },
      {
        id: "q2d",
        label: "Să ordonez totul clar, pe pași, ca să nu ne încurcăm înainte de prezentare.",
        scores: { administration: 2, management: 2 }
      }
    ]
  },
  {
    id: "q3",
    title: "Într-un grup nou de colegi sau la un club, ce observi repede?",
    helper: "Gândește-te la ce îți atrage atenția fără efort.",
    options: [
      {
        id: "q3a",
        label: "Cine vorbește ușor, cine rămâne pe dinafară și cum se schimbă atmosfera.",
        scores: { sociology: 3, psychology: 1 }
      },
      {
        id: "q3b",
        label: "Ce reguli lipsesc și ce ar face grupul să meargă mai bine.",
        scores: { administration: 3, management: 1 }
      },
      {
        id: "q3c",
        label: "Ce poveste sau mesaj ar convinge grupul să se implice mai mult.",
        scores: { communication: 3, management: 1 }
      },
      {
        id: "q3d",
        label: "Ce aplicații, conturi sau idei online ar putea ajuta grupul imediat.",
        scores: { digital: 3, communication: 1 }
      }
    ]
  },
  {
    id: "q4",
    title: "Când te gândești la ce urmează după liceu, ce fel de întrebare apare cel mai des în mintea ta?",
    helper: "Nu te întreabă nimeni ce facultate vrei. Ne uităm doar la felul în care cauți sens.",
    options: [
      {
        id: "q4a",
        label: "Cum îmi dau seama ce mi se potrivește cu adevărat și unde m-aș simți eu bine?",
        scores: { psychology: 3, sociology: 1 }
      },
      {
        id: "q4b",
        label: "Cum aleg dintre multe opțiuni fără să mă pierd în detalii și presiune?",
        scores: { management: 2, administration: 2 }
      },
      {
        id: "q4c",
        label: "Cum îmi dau seama ce idei sau cauze merită urmărite mai departe?",
        scores: { sociology: 3, communication: 1 }
      },
      {
        id: "q4d",
        label: "Cum aflu mai repede ce domenii se schimbă, ce apare nou și ce contează online?",
        scores: { digital: 2, communication: 1, management: 1 }
      }
    ]
  },
  {
    id: "q5",
    title: "Dacă apare o neînțelegere între colegi, ce faci de obicei?",
    helper: "Nu ce ai vrea să faci ideal. Ce faci mai des în realitate.",
    options: [
      {
        id: "q5a",
        label: "Încerc să înțeleg ce simte fiecare și să calmăm discuția înainte să explodeze.",
        scores: { psychology: 3, communication: 1 }
      },
      {
        id: "q5b",
        label: "Încerc să pun problema clar: care e blocajul și ce variantă ar merge mai departe.",
        scores: { management: 3, administration: 1 }
      },
      {
        id: "q5c",
        label: "Mă uit la context: de unde a pornit, cine pe cine influențează și de ce se repetă.",
        scores: { sociology: 3, psychology: 1 }
      },
      {
        id: "q5d",
        label: "Caut o formulare bună sau un mesaj care să detensioneze situația.",
        scores: { communication: 3, digital: 1 }
      }
    ]
  },
  {
    id: "q6",
    title: "La voluntariat, serbări, cluburi sau activități în liceu, ce rol te prinde cel mai des?",
    helper: "Poate fi și un rol pe care îl iei spontan, chiar dacă nu îl scrie nicăieri.",
    options: [
      {
        id: "q6a",
        label: "Cel care ține legătura cu oamenii, explică și se asigură că mesajul ajunge bine.",
        scores: { communication: 3, administration: 1 }
      },
      {
        id: "q6b",
        label: "Cel care face liste, urmărește detalii și are grijă să nu se piardă nimic.",
        scores: { administration: 3, management: 1 }
      },
      {
        id: "q6c",
        label: "Cel care se ocupă de promovare, stories, afișe, idei vizuale sau conținut.",
        scores: { digital: 3, communication: 1 }
      },
      {
        id: "q6d",
        label: "Cel la care ajung ceilalți când sunt nesiguri sau au nevoie să fie ascultați.",
        scores: { psychology: 3, sociology: 1 }
      }
    ]
  },
  {
    id: "q7",
    title: "Pe social media sau online, ce tip de conținut te face să stai și să te gândești?",
    helper: "Alege ce te ține atent, nu doar ce îți apare cel mai des.",
    options: [
      {
        id: "q7a",
        label: "Clipuri sau postări care explică bine un subiect și schimbă felul în care îl vezi.",
        scores: { communication: 2, sociology: 2 }
      },
      {
        id: "q7b",
        label: "Conținut despre comportamente, relații, motivație sau cum reacționează oamenii.",
        scores: { psychology: 3, sociology: 1 }
      },
      {
        id: "q7c",
        label: "Conținut despre instrumente digitale, trenduri online, campanii sau platforme noi.",
        scores: { digital: 3, management: 1 }
      },
      {
        id: "q7d",
        label: "Explicații despre reguli, instituții, cum se iau decizii și de ce unele lucruri merg greu.",
        scores: { administration: 2, sociology: 2 }
      }
    ]
  },
  {
    id: "q8",
    title: "Când vorbești cu părinții sau profesorii despre viitor, ce simți că ai nevoie cel mai mult?",
    helper: "Alege varianta care ți-ar fi cea mai utilă chiar acum.",
    options: [
      {
        id: "q8a",
        label: "Să mă ajute cineva să îmi pun în ordine opțiunile și să înțeleg cum aleg între ele.",
        scores: { management: 2, administration: 2 }
      },
      {
        id: "q8b",
        label: "Să înțeleagă că încă mă descopăr și că nu vreau să aleg doar din frică.",
        scores: { psychology: 3, communication: 1 }
      },
      {
        id: "q8c",
        label: "Să aflu cum arată în realitate anumite domenii și ce se întâmplă acolo zi de zi.",
        scores: { administration: 1, digital: 1, communication: 1, sociology: 1 }
      },
      {
        id: "q8d",
        label: "Să pot vorbi mai clar despre ce mă interesează și ce întrebări am de pus mai departe.",
        scores: { communication: 3, management: 1 }
      }
    ]
  }
];

export const demoAnswers: Record<string, string> = {
  q1: "q1a",
  q2: "q2c",
  q3: "q3a",
  q4: "q4a",
  q5: "q5d",
  q6: "q6d",
  q7: "q7a",
  q8: "q8b"
};
