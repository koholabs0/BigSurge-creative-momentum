export interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
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
