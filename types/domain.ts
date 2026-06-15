export type UserRole = "elev" | "student-mentor" | "admin";

export type DirectionCategory =
  | "communication"
  | "management"
  | "administration"
  | "psychology"
  | "sociology"
  | "digital";

export type Direction = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  fitSignals: string[];
  sampleFaculties: string[];
  careers: string[];
  accent: "blue" | "teal" | "lime" | "yellow";
  relatedSnspaPrograms: string[];
  whyThisAppears: string[];
  mayInvolve: string[];
  learnMore: string[];
  goodQuestions: string[];
  categories: DirectionCategory[];
};

export type QuestionnaireOption = {
  id: string;
  label: string;
  scores: Partial<Record<DirectionCategory, number>>;
};

export type QuestionnaireStep = {
  id: string;
  title: string;
  helper: string;
  options: QuestionnaireOption[];
};

export type QuestionnaireAnswers = Record<string, string>;

export type ScoredDirection = {
  direction: Direction;
  score: number;
  percentage: number;
  reasons: string[];
};

export type DashboardStat = {
  label: string;
  value: string;
  description: string;
};
