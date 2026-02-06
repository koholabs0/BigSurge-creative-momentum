import { Linkedin, Award, FileText, MessageSquare, ExternalLink } from "lucide-react";
import { LinkedInContent } from "@/data/socialMedia";

interface LinkedInCardProps {
  content: LinkedInContent;
}

const typeIcons = {
  achievement: Award,
  article: FileText,
  post: MessageSquare,
};

export function LinkedInCard({ content }: LinkedInCardProps) {
  const TypeIcon = typeIcons[content.type];

  return (
    <a
      href={content.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-6 rounded-2xl bg-card border border-border hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 block"
    >
      {/* LinkedIn Badge */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0077B5] flex items-center justify-center">
        <Linkedin className="w-4 h-4 text-white" />
      </div>

      {/* Type Icon */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
        <TypeIcon className="w-6 h-6 text-white" />
      </div>

      {/* Content */}
      <div className="space-y-2">
        {content.date && (
          <span className="text-xs font-medium text-primary uppercase tracking-wider">
            {content.date}
          </span>
        )}
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {content.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{content.excerpt}</p>
      </div>

      {/* View Link */}
      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        View on LinkedIn
        <ExternalLink className="w-4 h-4" />
      </div>
    </a>
  );
}
