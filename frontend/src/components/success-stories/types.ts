export type StoryCategory = 'video' | 'audio' | 'written';

export interface BaseStory {
  id: string;
  name: string;
  avatar: string;
  role: string;
  company: string;
  domain: string; // 'Full Stack' | 'Cybersecurity' | 'Data Science' | 'AI' | 'Cloud' | 'Mobile';
  course: string;
  projectCompleted: string;
  completionYear: string;
  rating: number; // e.g. 5
  category: StoryCategory;
  date: string;
  featured?: boolean;
}

export interface VideoStory extends BaseStory {
  category: 'video';
  thumbnail: string;
  duration: string;
  videoUrl: string;
  summary: string;
}

export interface AudioStory extends BaseStory {
  category: 'audio';
  duration: string;
  audioUrl: string;
  quote: string;
}

export interface WrittenStory extends BaseStory {
  category: 'written';
  review: string;
}

export type Story = VideoStory | AudioStory | WrittenStory;
