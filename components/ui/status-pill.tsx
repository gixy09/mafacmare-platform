import { cn } from "@/lib/utils";
import type { StatusPillStatus } from "@/types/domain";

const statusClasses = {
  draft: "bg-slate-100 text-slate-700",
  in_moderare: "bg-yellow-100 text-yellow-800",
  publicat: "bg-lime-100 text-lime-800",
  privat: "bg-rose-100 text-rose-800",
  noua: "bg-blue-100 text-blue-800",
  publicata: "bg-lime-100 text-lime-800",
  privata: "bg-rose-100 text-rose-800",
  aprobat: "bg-lime-100 text-lime-800",
  in_asteptare: "bg-yellow-100 text-yellow-800",
  respins: "bg-rose-100 text-rose-800"
} satisfies Record<StatusPillStatus, string>;

const statusLabels = {
  draft: "Draft",
  in_moderare: "În moderare",
  publicat: "Publicat",
  privat: "Privat",
  noua: "Nouă",
  publicata: "Publicată",
  privata: "Privată",
  aprobat: "Aprobat",
  in_asteptare: "În așteptare",
  respins: "Respins"
} satisfies Record<StatusPillStatus, string>;

export function StatusPill({ status }: { status: StatusPillStatus }) {
  return <span className={cn("inline-flex rounded-full px-3 py-1 text-xs font-semibold", statusClasses[status])}>{statusLabels[status]}</span>;
}
