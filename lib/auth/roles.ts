import type { UserRole } from "@/types/domain";

export const roles: Record<UserRole, { label: string; homePath: string; description: string }> = {
  elev: {
    label: "Elev",
    homePath: "/dashboard/elev",
    description: "Explorezi direcții, salvezi rezultatul orientativ și pui întrebări către Student Mentors."
  },
  "student-mentor": {
    label: "Student Mentor",
    homePath: "/dashboard/student-mentor",
    description: "Răspunzi din experiența ta personală și ajuți elevii să înțeleagă mai bine facultatea."
  },
  admin: {
    label: "Admin / moderator",
    homePath: "/dashboard/admin",
    description: "Aprobi mentori, moderezi întrebări și răspunsuri și urmărești platforma-pilot."
  }
};

export const registerableRoles: UserRole[] = ["elev", "student-mentor"];

export const protectedRoutes: Record<UserRole, string[]> = {
  elev: ["/dashboard/elev"],
  "student-mentor": ["/dashboard/student-mentor"],
  admin: ["/dashboard/admin"]
};

export function getRoleRedirect(role: UserRole) {
  return roles[role].homePath;
}
