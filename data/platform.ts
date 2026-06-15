import { demoAnswers } from "@/data/questionnaire";
import { scoreQuestionnaire } from "@/lib/questionnaire";
import type {
  AnonymizedInsight,
  MentorAnswer,
  StudentMentorProfile,
  StudentProfile,
  StudentQuestion
} from "@/types/domain";

export const pilotPlatformNote =
  "MaFacMare.ro este momentan o platformă-pilot construită pe baza programelor de licență SNSPA. Pe viitor, structura poate fi extinsă către mai multe universități și domenii.";

export const studentAnswerDisclaimer =
  "Răspunsurile studenților sunt experiențe personale. Nu reprezintă consiliere vocațională, recomandare oficială sau poziția universității.";

const scoredDirections = scoreQuestionnaire(demoAnswers);

export const mockStudentProfile: StudentProfile = {
  id: "student-01",
  fullName: "Mara Ionescu",
  email: "mara@example.com",
  role: "elev",
  classLevel: "clasa a XI-a",
  school: "Colegiul Național Mihai Viteazul",
  savedResult: {
    completedAt: "12 iunie 2026",
    summary: "Rezultat orientativ salvat în cont pentru comparații și întrebări ulterioare.",
    topDirections: scoredDirections
  },
  submittedQuestionIds: ["question-01", "question-02", "question-03"],
  receivedAnswerIds: ["answer-01", "answer-02"]
};

export const mockMentorProfile: StudentMentorProfile = {
  id: "mentor-01",
  fullName: "Ana Radu",
  email: "ana.mentor@example.com",
  role: "student-mentor",
  university: "SNSPA",
  faculty: "Facultatea de Comunicare și Relații Publice",
  program: "Comunicare și relații publice",
  yearOfStudy: "anul II",
  approvalStatus: "aprobat",
  publicLabel: "Ambasador MaFacMare.ro",
  badges: ["Student Mentor", "voluntar în orientare academică"],
  bio: "Răspund din experiența mea legată de primul an, proiecte, profesori și ritmul real al facultății.",
  topics: ["primul an", "proiecte", "cursuri", "viață de student", "atmosferă"]
};

export const pendingMentorProfiles: StudentMentorProfile[] = [
  {
    id: "mentor-02",
    fullName: "Radu M.",
    email: "radu@example.com",
    role: "student-mentor",
    university: "SNSPA",
    faculty: "Facultatea de Administrație Publică",
    program: "Administrație publică",
    yearOfStudy: "anul III",
    approvalStatus: "in_asteptare",
    publicLabel: "Student Mentor",
    badges: ["voluntar în orientare academică"],
    bio: "Vreau să răspund despre administrație publică, practică și alegerea între domenii apropiate.",
    topics: ["administrație publică", "practică", "comparație între opțiuni"]
  },
  {
    id: "mentor-03",
    fullName: "Bianca T.",
    email: "bianca@example.com",
    role: "student-mentor",
    university: "SNSPA",
    faculty: "Departamentul de Relații Internaționale și Integrare Europeană",
    program: "Relații internaționale și studii europene",
    yearOfStudy: "anul I",
    approvalStatus: "in_asteptare",
    publicLabel: "Student Mentor",
    badges: ["Ambasador MaFacMare.ro"],
    bio: "Pot răspunde despre admitere, ce se întâmplă în primul an și cum arată atmosfera la cursuri.",
    topics: ["admitere", "primul an", "viață de student"]
  }
];

export const mockStudentQuestions: StudentQuestion[] = [
  {
    id: "question-01",
    studentId: "student-01",
    title: "Cum arată primul an la Comunicare și Relații Publice?",
    body: "Mă interesează dacă primul an e mai mult teorie sau dacă intri repede în proiecte și prezentări.",
    topicTags: ["primul an", "cursuri", "prezentări"],
    relatedDirectionSlugs: ["comunicare-media-si-mesaje-publice"],
    targetUniversity: "SNSPA",
    targetFaculty: "Facultatea de Comunicare și Relații Publice",
    targetProgram: "Comunicare și relații publice",
    createdAt: "13 iunie 2026",
    status: "publicata",
    assignedMentorIds: ["mentor-01"]
  },
  {
    id: "question-02",
    studentId: "student-01",
    title: "Cum îți dai seama dacă te potrivești mai mult la relații internaționale sau la comunicare?",
    body: "Îmi plac și ideile despre societate, și partea de prezentare. Mă ajută exemple despre diferențele reale dintre ele.",
    topicTags: ["comparare opțiuni", "societate", "comunicare"],
    relatedDirectionSlugs: [
      "comunicare-media-si-mesaje-publice",
      "relatii-internationale-societate-si-contexte-globale"
    ],
    targetUniversity: "SNSPA",
    createdAt: "14 iunie 2026",
    status: "in_moderare",
    assignedMentorIds: ["mentor-01", "mentor-03"]
  },
  {
    id: "question-03",
    studentId: "student-01",
    title: "Profesorii și atmosfera contează mult? Cum se simte diferența între liceu și facultate?",
    body: "Nu mă sperie munca, dar mă ajută să știu dacă atmosfera e deschisă și cum te adaptezi în primele luni.",
    topicTags: ["atmosferă", "profesori", "viață de student"],
    relatedDirectionSlugs: ["comunicare-media-si-mesaje-publice"],
    targetUniversity: "SNSPA",
    createdAt: "15 iunie 2026",
    status: "noua",
    assignedMentorIds: ["mentor-01"]
  },
  {
    id: "question-04",
    studentId: "student-04",
    title: "În Administrație Publică faci doar teorie sau există și exemple reale?",
    body: "Mă ajută să știu dacă se lucrează pe studii de caz și dacă înțelegi concret ce se întâmplă în instituții.",
    topicTags: ["administrație publică", "studii de caz", "instituții"],
    relatedDirectionSlugs: ["administratie-publica-si-institutii"],
    targetUniversity: "SNSPA",
    targetFaculty: "Facultatea de Administrație Publică",
    targetProgram: "Administrație publică",
    createdAt: "15 iunie 2026",
    status: "publicata",
    assignedMentorIds: ["mentor-02"]
  },
  {
    id: "question-05",
    studentId: "student-05",
    title: "Ce te-a surprins cel mai tare la primul semestru la SNSPA?",
    body: "Încerc să înțeleg ritmul și dacă diferența dintre așteptări și realitate e mare.",
    topicTags: ["primul semestru", "adaptare", "ritm"],
    relatedDirectionSlugs: ["relatii-internationale-societate-si-contexte-globale"],
    targetUniversity: "SNSPA",
    createdAt: "16 iunie 2026",
    status: "publicata",
    assignedMentorIds: ["mentor-01", "mentor-03"]
  }
];

export const mockMentorAnswers: MentorAnswer[] = [
  {
    id: "answer-01",
    questionId: "question-01",
    mentorId: "mentor-01",
    content:
      "La mine, primul an a avut și teorie, dar am intrat destul de repede în proiecte de echipă și prezentări. Ce m-a ajutat a fost să nu mă uit doar la numele cursurilor, ci la ce făceam efectiv la seminare.",
    status: "publicat",
    createdAt: "14 iunie 2026",
    updatedAt: "14 iunie 2026"
  },
  {
    id: "answer-02",
    questionId: "question-04",
    mentorId: "mentor-02",
    content:
      "În experiența mea, partea practică apare mai mult când profesorul aduce exemple din instituții sau proiecte publice. Nu e doar teorie, dar ajută să întrebi concret cum se leagă cursurile de realitate.",
    status: "in_moderare",
    createdAt: "15 iunie 2026",
    updatedAt: "15 iunie 2026",
    moderationNote: "Verificare finală înainte de publicare"
  },
  {
    id: "answer-03",
    questionId: "question-05",
    mentorId: "mentor-01",
    content:
      "Pentru mine, surpriza a fost cât de mult contează să îți organizezi singur ritmul. Aș vrea să adaug și un exemplu mai clar despre primele săptămâni.",
    status: "draft",
    createdAt: "16 iunie 2026",
    updatedAt: "16 iunie 2026"
  }
];

export const anonymizedInsights: AnonymizedInsight[] = [
  {
    label: "Direcția cel mai des salvată",
    value: "Comunicare, media și mesaje publice",
    note: "Apare frecvent în top 3 pentru elevii care aleg variante legate de prezentări și mesaje."
  },
  {
    label: "Temă frecventă în întrebări",
    value: "Cum arată primul an",
    note: "Elevii cer mai ales exemple reale despre cursuri, atmosferă și adaptare."
  },
  {
    label: "Nevoie de sprijin observată",
    value: "Compararea opțiunilor apropiate",
    note: "Mulți elevi vor să înțeleagă diferențele dintre direcții care sună asemănător."
  }
];

export function getQuestionById(id: string) {
  return mockStudentQuestions.find((question) => question.id === id);
}

export function getAnswersForStudent(studentId: string) {
  const questionIds = mockStudentQuestions.filter((question) => question.studentId === studentId).map((question) => question.id);
  return mockMentorAnswers.filter((answer) => questionIds.includes(answer.questionId));
}

export function getQuestionsForMentor(mentorId: string) {
  return mockStudentQuestions.filter((question) => question.assignedMentorIds.includes(mentorId));
}

export function getAnswersForMentor(mentorId: string) {
  return mockMentorAnswers.filter((answer) => answer.mentorId === mentorId);
}
