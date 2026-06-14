export type UserRole = "elev" | "student-mentor" | "admin";

export type Direction = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  fitSignals: string[];
  sampleFaculties: string[];
  careers: string[];
  accent: "blue" | "teal" | "lime" | "yellow";
};

export type QuestionnaireStep = {
  title: string;
  helper: string;
  options: string[];
};

export type DashboardStat = {
  label: string;
  value: string;
  description: string;
};
