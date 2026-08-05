export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Super Admin' | 'Admin' | 'Mentor' | 'HR' | 'Finance' | 'Student' | 'Intern';
  status: 'Active' | 'Inactive' | 'Pending' | 'Suspended';
  emailVerified: boolean;
  avatar: string;
  createdAt: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: string;
  instructor: string;
  price: number;
  discountPrice: number;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'Published' | 'Draft';
  studentsCount: number;
  thumbnail: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  student: string;
  mentor: string;
  status: 'In Progress' | 'Under Review' | 'Completed' | 'Featured';
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedIntern: string;
  assignedMentor: string;
  dueDate: string;
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  status: 'Todo' | 'In Progress' | 'Review' | 'Completed' | 'Rejected';
  points: number;
}

export interface Certificate {
  id: string;
  studentName: string;
  type: 'Internship Certificate' | 'Experience Letter' | 'Recommendation Letter';
  issueDate: string;
  verificationId: string;
  status: 'Verified' | 'Revoked' | 'Pending';
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  status: 'Published' | 'Draft' | 'Scheduled';
  publishDate: string;
  readingTime: string;
  views: number;
}

export interface Announcement {
  id: string;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  audience: 'Everyone' | 'Students' | 'Mentors' | 'Interns';
  publishDate: string;
  expiryDate: string;
}

export interface Mentor {
  id: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
  skills: string[];
  assignedStudentsCount: number;
  avatar: string;
}

export interface StipendRecord {
  id: string;
  internName: string;
  amount: number;
  bonus: number;
  total: number;
  transactionId: string;
  paymentStatus: 'Paid' | 'Pending' | 'Processing';
  paymentDate: string;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  points: number;
  badgesCount: number;
  streakDays: number;
  avatar: string;
  isTopPerformer: boolean;
}
