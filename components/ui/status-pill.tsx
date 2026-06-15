import { cn } from "@/lib/utils";
import type { AnswerModerationStatus, MentorApprovalStatus, QuestionModerationStatus } from "@/types/domain";

type SupportedStatus = AnswerModerationStatus | MentorApprovalStatus | QuestionModerationStatus;

const statusClasses: Record<SupportedStatus, string> = {
  draft: "bg-slate-100 text-slate-700",
  in_moderare: "bg-yellow-100 text-yellow-800",
  publicat: "bg-lime-100 text-lime-800",
  privat: "bg-rose-100 text-rose-800",
  noua: "bg-blue-100 text-blue-800",
  publicata: "bg-lime-100 text-lime-800",
  aprobat: "bg-lime-100 text-lime-800",
  in_asteptare: "bg-yellow-100 text-yellow-800",
  respins: "bg-rose-100 text-rose-800"
};

const statusLabels: Record<SupportedStatus, string> = {
  draft: "Draft",
  in_moderare: "În moderare",
  publicat: "Publicat",
  privat: "Privat",
  noua: "Nouă",
  publicata: "Publicată",
  aprobat: "Aprobat",
  in_asteptare: "În așteptare",
  respins: "Respins"
};

export function StatusPill({ status }: { status: SupportedStatus }) {
  return <span className={cn("inline-flex rounded-full px-3 py-1 text-xs font-semibold", statusClasses[status])}>{statusLabels[status]}</span>;
}
