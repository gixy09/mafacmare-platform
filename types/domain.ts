export type UserRole = "elev" | "student-mentor" | "admin";

export type DirectionCategory =
  | "communication"
  | "management"
  | "administration"
  | "psychology"
  | "sociology"
  | "digital";

export type MentorApprovalStatus = "in_asteptare" | "aprobat" | "respins";
export type QuestionModerationStatus = "noua" | "in_moderare" | "publicata" | "privata";
export type AnswerModerationStatus = "draft" | "in_moderare" | "publicat" | "privat";
export type StatusPillStatus = MentorApprovalStatus | QuestionModerationStatus | AnswerModerationStatus;

export type MythRealityPair = {
  myth: string;
  reality: string;
};

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
  mythsVsReality: MythRealityPair[];
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

export type SavedQuestionnaireResult = {
  completedAt: string;
  summary: string;
  topDirections: ScoredDirection[];
};

export type BaseProfile = {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
};

export type StudentProfile = BaseProfile & {
  role: "elev";
  classLevel: string;
  school: string;
  savedResult: SavedQuestionnaireResult;
  submittedQuestionIds: string[];
  receivedAnswerIds: string[];
};

export type StudentMentorProfile = BaseProfile & {
  role: "student-mentor";
  university: string;
  faculty: string;
  program: string;
  yearOfStudy: string;
  approvalStatus: MentorApprovalStatus;
  publicLabel: string;
  badges: string[];
  bio: string;
  topics: string[];
};

export type StudentQuestion = {
  id: string;
  studentId: string;
  title: string;
  body: string;
  topicTags: string[];
  relatedDirectionSlugs: string[];
  targetUniversity?: string;
  targetFaculty?: string;
  targetProgram?: string;
  createdAt: string;
  status: QuestionModerationStatus;
  assignedMentorIds: string[];
};

export type MentorAnswer = {
  id: string;
  questionId: string;
  mentorId: string;
  content: string;
  status: AnswerModerationStatus;
  createdAt: string;
  updatedAt: string;
  moderationNote?: string;
};

export type DashboardStat = {
  label: string;
  value: string;
  description: string;
};

export type AnonymizedInsight = {
  label: string;
  value: string;
  note: string;
};
