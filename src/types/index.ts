export interface ImageData {
  id: string;
  url: string;
  alt: string;
  caption?: string;
}

export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}