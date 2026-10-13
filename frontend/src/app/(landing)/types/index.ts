export type ExperienceType = "research" | "academic" | "industry";

export interface Ref {
  label: string;
  href: string;
}

export interface CourseLine {
  name: string;
  terms: string;
  instructors: Ref[];
  contributionId?: string;
}

export interface ExperiencePosition {
  title: string;
  period: string;
  description?: string;
  items?: string[];
  courses?: CourseLine[];
}

export interface ExperienceEntry {
  id: string;
  org: string;
  orgUrl?: string;
  logo?: string;
  logoDarkSrc?: string;
  type: ExperienceType;
  role: string;
  period: string;
  summary: string;
  description?: string;
  mentors?: Ref[];
  achievements?: string[];
  courses?: CourseLine[];
  positions?: ExperiencePosition[];
  documents?: Ref[];
  references?: Ref[];
}

export interface Award {
  id: string;
  title: string;
  org: string;
  orgUrl?: string;
  year: string;
  description: string;
}

export interface EducationInfo {
  degree: string;
  school: string;
  schoolUrl: string;
  period: string;
  gpa: string;
  recentGpa: string;
  coursework: CourseworkItem[];
}

export interface CourseworkItem {
  course: string;
  score: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface NavItem {
  id: string;
  label: string;
}
