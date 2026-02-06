export interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    title: "Website Development & Design",
    description: "Custom websites that combine stunning visuals with seamless functionality. From portfolio sites to full-scale web applications, I build digital experiences that convert.",
    features: [
      "Custom responsive design",
      "Modern UI/UX implementation",
      "Performance optimization",
      "SEO-ready architecture",
    ],
    icon: "code",
  },
  {
    title: "Social Media Integration",
    description: "Seamlessly embed your social presence into your digital ecosystem. Instagram feeds, LinkedIn highlights, and cross-platform content that drives engagement.",
    features: [
      "Instagram & LinkedIn embedding",
      "Social proof displays",
      "Content feed integration",
      "Cross-platform strategy",
    ],
    icon: "share-2",
  },
  {
    title: "Demo Video Production",
    description: "Showcase your projects with high-impact demo videos. From product walkthroughs to portfolio reels, I create content that captures attention and tells your story.",
    features: [
      "Project showcase videos",
      "Explainer & tutorial content",
      "Portfolio reels",
      "Social-ready edits",
    ],
    icon: "video",
  },
  {
    title: "Strategic Creative Direction",
    description: "Transform your brand vision into a cohesive creative strategy that resonates with your audience and drives measurable results.",
    features: [
      "Brand positioning & messaging",
      "Creative campaign development",
      "Visual identity systems",
      "Cross-platform creative strategy",
    ],
    icon: "compass",
  },
  {
    title: "Content & Campaign Strategy",
    description: "Build content systems that engage, convert, and scale. From editorial calendars to viral campaigns, I design content that works.",
    features: [
      "Content strategy & planning",
      "Editorial calendar development",
      "Campaign ideation & execution",
      "Performance optimization",
    ],
    icon: "target",
  },
  {
    title: "Digital Marketing & Growth",
    description: "Data-driven marketing strategies that turn attention into action. Social media, paid campaigns, and growth experiments that deliver.",
    features: [
      "Social media strategy",
      "Paid campaign management",
      "Influencer partnerships",
      "Growth experimentation",
    ],
    icon: "trending-up",
  },
  {
    title: "Campaign & Event Design",
    description: "Create memorable experiences that bring your brand to life. From intimate gatherings to large-scale activations, I design events that matter.",
    features: [
      "Event concept development",
      "Experience design",
      "Hybrid event strategy",
      "Activation & production",
    ],
    icon: "calendar",
  },
];
