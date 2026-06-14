import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function InfoCard({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-lg bg-white p-6 shadow-soft ring-1 ring-blue-50", className)}>{children}</div>;
}
