export interface Project {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  image: string;
  summary: string;
  context: string;
  problem: string;
  strategy: string;
  execution: string;
  results: string;
  reflection: string;
}

export const projects: Project[] = [
  {
    slug: "koholabs",
    title: "KohoLabs Content Strategy",
    category: "Content Strategy",
    categorySlug: "content-strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    summary: "AI-enhanced workflows and creative systems for creators and brands.",
    context: "KohoLabs, a rising creative technology company, wanted to streamline content creation for their network of over 200 creators while maintaining brand consistency and maximizing engagement across platforms.",
    problem: "Creators were struggling with content consistency, spending excessive time on production, and missing optimal posting windows. The lack of a unified system meant missed opportunities and inconsistent brand representation.",
    strategy: "Implemented AI-assisted workflows combining automated content calendars, smart templating systems, and multi-platform distribution. Created a creator playbook that balanced automation with authentic voice.",
    execution: "Designed and deployed templates, content calendars, and automation pipelines. Trained creator teams on new workflows and established feedback loops for continuous improvement.",
    results: "Increased content output by 300% and audience engagement by 45%. Reduced average production time from 6 hours to 2 hours per piece. Creator satisfaction scores improved by 60%.",
    reflection: "This project reinforced the power of systems thinking in creative work. The best technology amplifies human creativity rather than replacing it.",
  },
  {
    slug: "cartracker",
    title: "CarTracker Nigeria Campaign",
    category: "Digital Marketing",
    categorySlug: "digital-campaigns",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    summary: "Social media and paid campaigns driving audience engagement and app downloads.",
    context: "CarTracker Nigeria needed to break through a crowded market and establish themselves as the go-to vehicle tracking and management solution for Lagos millennials and young professionals.",
    problem: "Low brand awareness in target demographic, high customer acquisition costs, and competition from established players with bigger budgets.",
    strategy: "Social-first campaigns targeting Lagos millennials with relatable, meme-worthy content. Combined organic community building with precision-targeted paid campaigns on Instagram and TikTok.",
    execution: "Ran multi-phase Instagram/TikTok campaigns, partnered with micro-influencers in the automotive and lifestyle space, and created a referral program that incentivized sharing.",
    results: "App downloads increased by 200%, engagement up 60%, and customer acquisition cost reduced by 40%. The campaign became a case study for social-first marketing in Nigerian tech.",
    reflection: "Understanding cultural nuances and speaking the language of your audience is more valuable than any budget. Authenticity scales.",
  },
  {
    slug: "sossa-connects",
    title: "SOSSA Connects Event Activation",
    category: "Events & Activations",
    categorySlug: "events-activations",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    summary: "Campus brand activation blending digital and live experiences for maximum impact.",
    context: "SOSSA Connects wanted to create a flagship campus event that would establish them as the leading student organization for career development and networking in Nigerian universities.",
    problem: "Limited budget, competition from established campus events, and the challenge of creating an experience that would resonate both in-person and online.",
    strategy: "Designed a hybrid experience that maximized both physical attendance and digital reach. Created shareable moments, interactive installations, and a social media campaign that turned attendees into content creators.",
    execution: "Produced the event from concept to execution, managing venue, speakers, entertainment, and digital integration. Created branded content stations and real-time social media coverage.",
    results: "Over 2,000 attendees (3x previous record), 50,000+ social media impressions, and 15 brand partnerships secured for future events. Event became the template for future SOSSA activations.",
    reflection: "The best events are designed for sharing. When every moment is Instagram-worthy, your attendees become your marketing team.",
  },
  {
    slug: "afrobeats-documentary",
    title: "Afrobeats Rising Documentary",
    category: "Video & Media",
    categorySlug: "video-media",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    summary: "Documentary series exploring the global rise of Afrobeats and its cultural impact.",
    context: "A streaming platform wanted to create a definitive documentary series on the Afrobeats movement, capturing its roots, key players, and global influence.",
    problem: "Balancing authenticity with accessibility for international audiences while respecting the cultural depth of the movement.",
    strategy: "Developed a narrative structure that wove together artist interviews, historical context, and cultural analysis. Focused on letting the music and its creators tell their own story.",
    execution: "Directed interviews with 20+ artists and industry figures, supervised post-production, and collaborated with music supervisors on soundtrack curation.",
    results: "Series premiered to critical acclaim, generating 2M+ views in the first month and sparking cultural conversations across social media.",
    reflection: "Stories that matter tell themselves. The filmmaker's job is to get out of the way and let truth shine through.",
  },
];

export const categories = [
  { name: "All Work", slug: "" },
  { name: "Content Strategy", slug: "content-strategy" },
  { name: "Digital Campaigns", slug: "digital-campaigns" },
  { name: "Video & Media", slug: "video-media" },
  { name: "Events & Activations", slug: "events-activations" },
];
