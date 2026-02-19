// Navigation Item
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Team Member
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

// News Article
export interface NewsArticle {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'news' | 'events' | 'press';
  publishedAt: Date;
  image: string;
  author: string;
}

// Job Listing
export interface JobListing {
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  description: string;
  requirements: string[];
  postedAt: Date;
}

// Metric Data
export interface Metric {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

// Animation Config
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
}
