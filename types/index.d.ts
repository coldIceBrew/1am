export interface IPodcastForm {
  producer: string;
  title: string;
  description: string;
  file: File;
  category: string;
  subCategory: string;
  explicit: boolean;
}

export interface IEpisodeForm {
  title: string;
  description: string;
  audio: string;
  explicit: boolean;
}

export interface IPodcastNavbar {
  subPath: string;
  icon: React.ReactNode;
  content: string;
}
