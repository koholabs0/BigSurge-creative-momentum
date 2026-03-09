export interface SocialProfile {
  platform: string;
  handle: string;
  url: string;
  icon: string;
}

export interface InstagramPost {
  id: string;
  type: "post" | "reel" | "carousel";
  thumbnail: string;
  caption: string;
  url: string;
  category: "campaign" | "event" | "behind-the-scenes" | "project";
  featured?: boolean;
}

export interface LinkedInContent {
  id: string;
  type: "post" | "article" | "achievement";
  title: string;
  excerpt: string;
  url: string;
  date?: string;
}

export const socialProfiles: SocialProfile[] = [
  {
    platform: "Instagram",
    handle: "@Bigsurge__",
    url: "https://www.instagram.com/Bigsurge__",
    icon: "instagram",
  },
  {
    platform: "LinkedIn",
    handle: "Adesoji Adenuga",
    url: "https://www.linkedin.com/in/adesoji-adenuga-041531123/",
    icon: "linkedin",
  },
  {
    platform: "Twitter",
    handle: "@Bigsurge__",
    url: "https://x.com/Bigsurge__",
    icon: "twitter",
  },
  {
    platform: "Facebook",
    handle: "Joel Adenuga",
    url: "https://web.facebook.com/joel.adenuga.7/",
    icon: "facebook",
  },
];

export const instagramPosts: InstagramPost[] = [
  {
    id: "ig-1",
    type: "reel",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
    caption: "Behind the scenes of our latest brand campaign shoot 🎬",
    url: "https://instagram.com/BigSurge__",
    category: "behind-the-scenes",
    featured: true,
  },
  {
    id: "ig-2",
    type: "post",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    caption: "SOSSA Connects 2024 - What an incredible night of creativity and connection ✨",
    url: "https://instagram.com/BigSurge__",
    category: "event",
    featured: true,
  },
  {
    id: "ig-3",
    type: "reel",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    caption: "New campaign launch for emerging tech brand 🚀",
    url: "https://instagram.com/BigSurge__",
    category: "campaign",
    featured: true,
  },
  {
    id: "ig-4",
    type: "carousel",
    thumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80",
    caption: "Event highlights from last week's brand activation 🎉",
    url: "https://instagram.com/BigSurge__",
    category: "event",
  },
  {
    id: "ig-5",
    type: "reel",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    caption: "The creative process behind our latest project 🎨",
    url: "https://instagram.com/BigSurge__",
    category: "project",
  },
  {
    id: "ig-6",
    type: "post",
    thumbnail: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
    caption: "Strategy session with the team - big things coming soon 💡",
    url: "https://instagram.com/BigSurge__",
    category: "behind-the-scenes",
  },
];

export const linkedInContent: LinkedInContent[] = [
  {
    id: "li-1",
    type: "achievement",
    title: "Creative Director Recognition",
    excerpt: "Honored to be recognized for creative leadership in the marketing space.",
    url: "https://linkedin.com/in/adesojiadenuga",
    date: "2024",
  },
  {
    id: "li-2",
    type: "article",
    title: "The Future of Brand Storytelling",
    excerpt: "How authentic narratives drive engagement in the digital age.",
    url: "https://linkedin.com/in/adesojiadenuga",
  },
  {
    id: "li-3",
    type: "post",
    title: "Building Creative Communities",
    excerpt: "Reflections on fostering collaboration and innovation in creative spaces.",
    url: "https://linkedin.com/in/adesojiadenuga",
  },
];
