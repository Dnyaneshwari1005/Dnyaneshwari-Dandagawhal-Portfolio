export interface Project {
  id: string;
  title: string;
  badge?: string;
  tags: string[];
  bullets: string[];
  metrics?: { label: string; value: string }[];
  iconType: 'open_in_new' | 'code' | 'video_library';
  githubUrl?: string;
  demoType: 'rag' | 'nlp_query' | 'video_scoring';
  demoDetails: {
    description: string;
    architecture: string[];
    sampleInput: string;
    sampleOutput: string;
  };
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: {
    text: string;
    highlight?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  gpaMax: string;
  coursework: string[];
}

export interface AchievementItem {
  title: string;
  category: string;
  description: string;
  icon: string;
}
