import type { NavItem } from "../types";

export { AWARDS } from "./awards";
export { EDUCATION } from "./education";
export { EXPERIENCES } from "./experience";
export { ADDITIONAL_RESEARCH, PRIMARY_RESEARCH } from "./research";
export { SKILL_GROUPS } from "./skills";

export const NAV_ITEMS: NavItem[] = [
  { id: "research", label: "Research" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "awards", label: "Awards" },
  { id: "skills", label: "Skills" },
];
