export interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  year: number;
  thumbnailImage: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  gallery: string[];
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  methodology: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishDate: string;
  readTime: number;
  author: { name: string; role: string };
  body: string; // Simplified for this demo
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  expertise: string[];
  isLeadership: boolean;
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
}
