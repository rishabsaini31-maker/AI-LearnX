export interface InternProfile {
  name: string;
  role: string;
  email: string;
  phone: string;
  avatar: string;
  college: string;
  batch: string;
  domain: string;
  level: string; // e.g. "Level 3 - Senior Intern"
  performanceScore: number; // e.g. 96.5
  tasksAvailable: number;
  currentStipend: string;
  expectedStipend: string;
  skills: string[];
  github: string;
  linkedin: string;
  portfolio: string;
  joinDate: string;
}

export interface InternProject {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  progress: number; // 0-100
  stage: string; // e.g. "Backend API Integration"
  mentor: {
    name: string;
    avatar: string;
    role: string;
  };
  nextDeadline: string;
  taskStatus: string;
  techStack: string[];
  repoUrl: string;
}

export type TaskStatus = 'todo' | 'in_progress' | 'submitted' | 'approved' | 'rejected';

export interface InternTask {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  points: number;
  assignedMentor: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  college: string;
  points: number;
  stipend: string;
  badge?: string;
  progress: number;
}

export interface Announcement {
  id: string;
  title: string;
  category: 'Important' | 'Submission' | 'Guideline' | 'Event';
  date: string;
  content: string;
  author: string;
  urgent?: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  type: 'Course Completion' | 'Internship Certificate' | 'Experience Letter' | 'Letter of Recommendation (LOR)';
  issueDate: string;
  credentialId: string;
  previewUrl: string;
  downloadUrl: string;
  verificationUrl: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'task' | 'stipend' | 'mentor' | 'announcement';
}
