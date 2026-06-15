import { demoAnswers, questionnaireSteps } from "@/data/questionnaire";
import { directions } from "@/data/directions";
import type { DirectionCategory, QuestionnaireAnswers, ScoredDirection } from "@/types/domain";

const categoryLabels: Record<DirectionCategory, string> = {
  communication: "comunicare și exprimare clară",
  management: "organizare și coordonare",
  administration: "structură, reguli și pași clari",
  psychology: "înțelegerea oamenilor și sprijin",
  sociology: "dinamica grupurilor și schimbare socială",
  digital: "observație digitală și conținut online"
};

export function resolveAnswers(searchParams: Record<string, string | string[] | undefined>) {
  const answers: QuestionnaireAnswers = {};

  questionnaireSteps.forEach((step) => {
    const value = searchParams[step.id];
    if (typeof value === "string") {
      answers[step.id] = value;
    }
  });

  return Object.keys(answers).length === questionnaireSteps.length ? answers : demoAnswers;
}

export function hasCompleteAnswers(searchParams: Record<string, string | string[] | undefined>) {
  return questionnaireSteps.every((step) => typeof searchParams[step.id] === "string");
}

export function scoreQuestionnaire(answers: QuestionnaireAnswers): ScoredDirection[] {
  const categoryScores: Record<DirectionCategory, number> = {
    communication: 0,
    management: 0,
    administration: 0,
    psychology: 0,
    sociology: 0,
    digital: 0
  };

  questionnaireSteps.forEach((step) => {
    const selectedOption = step.options.find((option) => option.id === answers[step.id]);
    if (!selectedOption) {
      return;
    }

    Object.entries(selectedOption.scores).forEach(([category, value]) => {
      categoryScores[category as DirectionCategory] += value ?? 0;
    });
  });

  const highestCategoryScore = Math.max(...Object.values(categoryScores), 1);

  return directions
    .map((direction) => {
      const score = direction.categories.reduce((sum, category) => sum + categoryScores[category], 0);
      const percentage = Math.round(58 + (score / highestCategoryScore) * 32);
      const reasons = direction.whyThisAppears.map((reason, index) =>
        index === 0
          ? `${reason} Aici se vede mai ales zona de ${direction.categories.map((category) => categoryLabels[category]).join(" și ")}.`
          : reason
      );

      return {
        direction,
        score,
        percentage: Math.min(96, percentage),
        reasons
      };
    })
    .sort((left, right) => right.score - left.score)
    .slice(0, 3);
}
