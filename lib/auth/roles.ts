import type { UserRole } from "@/types/domain";

export const roles: Record<UserRole, { label: string; homePath: string; description: string }> = {
  elev: {
    label: "Elev de liceu",
    homePath: "/dashboard/elev",
    description: "Exploreaza directii, salveaza rezultate si cere sprijin."
  },
  "student-mentor": {
    label: "Student Mentor",
    homePath: "/dashboard/student-mentor",
    description: "Raspunde la intrebari si ajuta elevii sa inteleaga viata de student."
  },
  admin: {
    label: "Admin / moderator",
    homePath: "/dashboard/admin",
    description: "Modereaza continut, intrebari si cereri de conversatie."
  }
};

export const protectedRoutes: Record<UserRole, string[]> = {
  elev: ["/dashboard/elev"],
  "student-mentor": ["/dashboard/student-mentor"],
  admin: ["/dashboard/admin"]
};

export function getRoleRedirect(role: UserRole) {
  return roles[role].homePath;
}
