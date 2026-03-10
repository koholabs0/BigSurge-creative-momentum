import sossaFestBranding from "@/assets/sossa-fest-branding.jpg";
import sossaMrMiss from "@/assets/sossa-mr-miss.jpg";
import sossaBloodDrive from "@/assets/sossa-blood-drive.jpg";
import sossaLinktree from "@/assets/sossa-linktree.jpg";
import sossaAnalytics from "@/assets/sossa-analytics.jpg";
import rewindParty from "@/assets/rewind-party.jpg";

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
  galleryImages?: string[];
  instagramLink?: string;
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
    slug: "sossa-fest-2024",
    title: "SOSSA Fest 2024",
    category: "Events & Activations",
    categorySlug: "events-activations",
    image: sossaFestBranding,
    summary: "Multi-day campus festival at the University of Lagos featuring music, career panels, pageantry, and a community blood drive.",
    context: "SOSSA Fest is the flagship annual festival of the Faculty of Social Sciences, University of Lagos. For the 2024 edition (June 24–29), the goal was to deliver a premium campus experience spanning career workshops, entertainment, food, glamour, and music — all while securing major brand sponsorships and driving community impact through a blood drive initiative.",
    problem: "Previous editions lacked cohesive branding, had limited sponsor engagement, and relied on word-of-mouth promotion. The festival needed a unified visual identity, a digital-first marketing strategy, and measurable results to attract sponsors like 7UP, Viet Gold, Eltee Skhillz, Beloxxi, and Tolex.",
    strategy: "Created a full brand identity system for SOSSA Fest 2024 — from flyer design to a centralized Linktree hub. Built separate campaigns for each sub-event (Mr & Miss SOSSA, Blood Drive) while maintaining brand consistency. Leveraged Instagram as the primary channel and used analytics to optimize reach.",
    execution: "Designed all event branding and flyers. Built and managed a Linktree hub linking to registration, sponsorship info, and sub-events. Organized the Mr & Miss SOSSA pageant (₦200,000 cash prize, brand deals, clothing sponsorship). Partnered with Mr. White Foundation for the Blood Drive on June 24th at FSS Car Park. Coordinated across multiple venues: FSS Car Park, Sport Centre, and Main Auditorium.",
    results: "Linktree analytics showed 146 views, 96 clicks, and a 65.75% CTR during the campaign window (June 15–21, 2024). Secured 5 major sponsors. The Blood Drive successfully collected donations in partnership with Mr. White Foundation. Mr & Miss SOSSA attracted significant registrations at ₦8,000 per entry.",
    reflection: "This project proved that campus events can achieve professional-grade branding and measurable digital performance. When every sub-event reinforces the main brand, the whole becomes greater than the sum of its parts.",
    galleryImages: [sossaMrMiss, sossaBloodDrive, sossaLinktree, sossaAnalytics],
    instagramLink: "https://www.instagram.com/p/DJygDAvI-SX/",
  },
  {
    slug: "rewind-y2k-party",
    title: "Vibe Tribe x Ravers — Rewind",
    category: "Events & Activations",
    categorySlug: "events-activations",
    image: rewindParty,
    summary: "A Y2K-themed house party organized as Social Secretary of the Geography & Planning department, UNILAG.",
    context: "As Social Secretary of the Geography and Planning department at the University of Lagos, I organized 'Rewind' — a strictly Y2K-themed house party in collaboration with Vibe Tribe x Ravers, held on June 14th, 2024.",
    problem: "Departmental social events often felt generic and struggled to stand out in a campus saturated with parties. The challenge was creating a themed experience that felt exclusive, nostalgic, and worth the ticket price.",
    strategy: "Leaned into the Y2K aesthetic — early 2000s fashion, music, and vibes — to create a differentiated event. Used a 'strictly Y2K' dress code to build anticipation and exclusivity. Priced tickets strategically (Single ₦8K, Couple ₦15K) and kept the venue undisclosed until ticket purchase to drive curiosity.",
    execution: "Designed the event flyer and branding with retro Y2K aesthetics. Managed ticket sales, logistics, and promotion through Instagram and WhatsApp. Kept the location secret until tickets were purchased, creating buzz and urgency. Curated the music and atmosphere to match the 2000s theme.",
    results: "The event sold out and became one of the most talked-about departmental parties of the semester. The undisclosed venue strategy drove significant word-of-mouth marketing and social media engagement.",
    reflection: "Constraints breed creativity. A strict theme and a bit of mystery turned a simple house party into an unforgettable experience. The best events sell a vibe, not just a venue.",
    instagramLink: "https://www.instagram.com/p/DJygDAvI-SX/",
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
    instagramLink: "https://www.instagram.com/reel/C7zuKGZI3mu/",
  },
];

export const categories = [
  { name: "All Work", slug: "" },
  { name: "Content Strategy", slug: "content-strategy" },
  { name: "Digital Campaigns", slug: "digital-campaigns" },
  { name: "Video & Media", slug: "video-media" },
  { name: "Events & Activations", slug: "events-activations" },
];
